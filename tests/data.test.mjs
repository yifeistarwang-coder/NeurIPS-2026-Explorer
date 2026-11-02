import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import {
  EXPECTED_COUNT, SOURCE_URLS, csvCell, derivePdfUrl, fetchWithRetry, httpUrl,
  jsonText, markdownText, sha256,
} from '../scripts/data-utils.mjs';
import {
  checkAbstracts, collect, fetchOpenReviewBulk, makeManifest, metadataRows,
  normalizePapers, publishDataset, topicMarkdown,
} from '../scripts/collect.mjs';
import { buildTopics, classifyTopic } from '../scripts/taxonomy.mjs';
import { validateData, validateDirectory } from '../scripts/validate-data.mjs';
import { snapshot } from '../scripts/snapshot.mjs';
import { downloadPdfs, isPdfContent, selectPdfDownloads } from '../scripts/download-pdfs.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const fixture = {
  count: 4, next: null,
  results: [
    { id: 101, name: 'Offline reinforcement learning', eventtype: 'Poster', authors: [{ fullname: 'Ada Example' }], topic: 'Reinforcement Learning->Batch Offline', keywords: [], paper_url: 'https://openreview.net/forum?note=other&id=abc%2B123', virtualsite_url: '/virtual/2026/poster/101', decision: 'Accept (poster)' },
    { id: 102, name: 'Quantum fluid simulation', eventtype: 'Poster', authors: ['Bo Example'], topic: null, keywords: [], paper_url: null, url: 'https://openreview.net/forum?id=xyz', virtualsite_url: '/virtual/2026/poster/102' },
    { id: 101, name: 'Offline reinforcement learning', eventtype: 'Poster', authors: [{ fullname: 'Ada Example' }], topic: 'Reinforcement Learning->Batch Offline', keywords: [], paper_url: 'https://openreview.net/forum?note=other&id=abc%2B123', virtualsite_url: '/virtual/2026/poster/101' },
    { id: 103, name: 'Duplicate oral presentation', eventtype: 'Oral', authors: [], topic: null },
  ],
};
const abstracts = { 101: 'An official abstract about learning policies from offline demonstrations.' };
const fixtureDataset = () => {
  const papers = normalizePapers(structuredClone(fixture), abstracts);
  return { papers: { papers }, topics: buildTopics(papers), manifest: makeManifest(papers, fixture) };
};
const relaxed = { allowCountChange: true };
const pdf = Buffer.from('%PDF-1.7\n1 0 obj\n<< /Type /Catalog >>\nendobj\ntrailer\n<<>>\n%%EOF\n');
const response = (value, status = 200, contentType = 'application/json') => new Response(typeof value === 'string' || Buffer.isBuffer(value) ? value : JSON.stringify(value), { status, headers: { 'content-type': contentType } });

async function temporary(t) {
  const dir = await mkdtemp(path.join(os.tmpdir(), 'neurips-data-test-'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  return dir;
}

test('URL parsing derives only legitimate OpenReview PDF links', () => {
  assert.equal(derivePdfUrl('https://openreview.net/forum?foo=bar&id=a%2Bb%26c'), 'https://openreview.net/pdf?id=a%2Bb%26c');
  assert.equal(derivePdfUrl('https://openreview.net/pdf?id=abc'), 'https://openreview.net/pdf?id=abc');
  for (const url of ['', 'not a url', 'ftp://openreview.net/forum?id=abc', 'https://evil.example/forum?id=abc', 'https://openreview.net.evil.example/forum?id=abc', 'https://openreview.net/group?id=abc', 'https://openreview.net/forum']) assert.equal(derivePdfUrl(url), '');
  assert.equal(httpUrl('javascript:alert(1)'), '');
  assert.equal(httpUrl('/virtual/2026/poster/1', 'https://neurips.cc'), 'https://neurips.cc/virtual/2026/poster/1');
});

test('source schemas reject partial pages, malformed rows, and error bodies', () => {
  assert.equal(metadataRows(fixture).length, 4);
  assert.throws(() => metadataRows({ ...fixture, next: 'next-page' }), /incomplete/);
  assert.throws(() => metadataRows({ ...fixture, count: 100 }), /count/);
  assert.throws(() => metadataRows({ message: 'blocked' }), /results/);
  assert.throws(() => checkAbstracts({ 101: null }), /Invalid abstract/);
  assert.throws(() => checkAbstracts({}), /nonempty/);
});

test('poster normalization excludes Oral rows and labels repeated source IDs transparently', () => {
  const papers = normalizePapers(fixture, abstracts);
  assert.equal(papers.length, 3);
  assert.deepEqual(papers.map((paper) => paper.id), ['101', '102', '101--2']);
  assert.equal(papers[2].duplicateOf, '101');
  assert.equal(papers[2].sourceOccurrence, 2);
  assert.deepEqual(papers[0].authors, ['Ada Example']);
  assert.equal(papers[0].abstractSource, 'official-abstracts');
  assert.equal(papers[1].abstract, '');
  assert.equal(papers[1].abstractSource, 'missing');
  assert.equal(papers[1].paperUrlSource, 'official-alternate-url');
  assert.equal(papers[0].pdfSource, 'derived-openreview');
  assert.equal(papers[0].pdfVerified, false);
  assert.equal(papers[0].thumbnailUrl, null);
});

test('missing links stay missing; project pages are not relabeled paper pages', () => {
  const raw = [{ id: 1, name: 'Unspecified work', eventtype: 'Poster', authors: [], url: 'https://example.org/project', topic: null }];
  const [paper] = normalizePapers(raw, { unrelated: '' });
  assert.equal(paper.paperUrl, '');
  assert.equal(paper.pdfUrl, '');
  assert.equal(paper.pdfSource, 'missing');
  assert.equal(paper.abstract, '');
});

test('bulk abstracts only fill gaps and never overwrite official abstract text', () => {
  const papers = normalizePapers(fixture, abstracts, { openreviewNotes: [
    { id: 'abc+123', content: { abstract: { value: 'Do not replace the official abstract' } } },
    { id: 'xyz', content: { abstract: { value: 'A public OpenReview abstract.' } } },
  ] });
  assert.equal(papers[0].abstract, abstracts[101]);
  assert.equal(papers[1].abstract, 'A public OpenReview abstract.');
  assert.equal(papers[1].abstractSource, 'openreview');
});

test('official taxonomy is preserved with bilingual category and topic names', () => {
  const classified = classifyTopic({ title: 'A language model', officialTopic: 'Applications->Language, Speech and Dialog' });
  assert.equal(classified.category, 'Applications');
  assert.equal(classified.topic, 'Language, Speech and Dialog');
  assert.equal(classified.topicSource, 'official');
  const topics = buildTopics([classified]);
  assert.ok(topics.categories[0].nameZh);
  assert.ok(topics.categories[0].topics[0].nameZh);
  assert.throws(() => classifyTopic({ title: 'test', officialTopic: 'Unknown->Unknown' }), /Unknown official topic/);
});

test('inference is deterministic, bounded by words, and labeled as inferred', () => {
  const input = { title: 'Federated quantization for distributed training', abstract: 'A federated learning method.' };
  assert.deepEqual(classifyTopic(input), classifyTopic(input));
  assert.equal(classifyTopic(input).topicSource, 'inferred');
  assert.equal(classifyTopic(input).officialTopic, null);
  assert.equal(classifyTopic({ title: 'An unrelated xyzzy finding' }).topic, 'Everything Else');
  assert.equal(classifyTopic({ title: 'Repair the spillway' }).category, 'General Machine Learning');
  assert.equal(classifyTopic({ title: 'Quantum fluid simulation' }).topic, 'Physics');
});

test('specific systems and agent keywords are not displaced by generic reconstruction', () => {
  const depthGraft = classifyTopic({ title: 'DepthGraft: Structural Regularization through Hierarchical Cross-Layer KV Reconstruction', abstract: 'Scaling depth in large language models with cross-layer KV sharing and KV cache compression.' });
  assert.equal(depthGraft.category, 'ML Systems & Efficiency');
  assert.equal(classifyTopic({ title: 'Automated Machine Learning via Agentic Code Generation' }).topic, 'Reasoning and Agents');
  assert.equal(classifyTopic({ title: 'TOM-Pruning: Target-aware Output Manifold for LLM Pruning' }).category, 'ML Systems & Efficiency');
  assert.equal(classifyTopic({ title: 'Surface Reconstruction with Gaussian Splatting' }).topic, '3D Rendering & Reconstruction');
});

test('compressed source snapshots restore exact bytes and reject mismatched provenance', async (t) => {
  const dir = await temporary(t);
  const raw = path.join(dir, 'data/raw');
  const output = path.join(dir, 'public/data');
  await mkdir(raw, { recursive: true });
  await mkdir(output, { recursive: true });
  const metadata = jsonText(fixture);
  const abstractBytes = jsonText(abstracts);
  await writeFile(path.join(raw, 'metadata.json'), metadata);
  await writeFile(path.join(raw, 'abstracts.json'), abstractBytes);
  await writeFile(path.join(raw, 'openreview.json'), jsonText({ notes: [], probes: [] }));
  const manifest = { sources: [{ cacheFile: 'metadata.json', sha256: sha256(metadata) }, { cacheFile: 'abstracts.json', sha256: sha256(abstractBytes) }] };
  await writeFile(path.join(output, 'manifest.json'), jsonText(manifest));
  await snapshot({ root: dir, create: true });
  await rm(raw, { recursive: true });
  await snapshot({ root: dir });
  assert.equal(await readFile(path.join(raw, 'metadata.json'), 'utf8'), metadata);
  assert.equal(await readFile(path.join(raw, 'abstracts.json'), 'utf8'), abstractBytes);
  manifest.sources[0].sha256 = 'incorrect';
  await writeFile(path.join(output, 'manifest.json'), jsonText(manifest));
  await assert.rejects(snapshot({ root: dir }), /checksum mismatch/);
});

test('manifest counts rows and distinct official IDs separately', () => {
  const { papers, topics, manifest } = fixtureDataset();
  assert.equal(manifest.totalPapers, 3);
  assert.equal(manifest.uniqueOfficialEventIds, 2);
  assert.equal(manifest.repeatedPosterRows, 1);
  assert.equal(manifest.abstractsAvailable, 2);
  assert.equal(manifest.abstractsMissing, 1);
  assert.equal(manifest.uniqueEventsWithAbstracts, 1);
  assert.equal(manifest.oralPresentationsExcluded, 1);
  assert.equal(topics.categories.reduce((sum, category) => sum + category.count, 0), 3);
  assert.equal(validateData({ papers, topics, manifest }, relaxed).totalPapers, 3);
  assert.throws(() => validateData({ papers, topics, manifest }), /9152/);
});

test('validation catches duplicate IDs, incorrect counts, provenance, and taxonomy drift', () => {
  for (const mutate of [
    (data) => { data.papers.papers[2].id = data.papers.papers[0].id; },
    (data) => { data.manifest.abstractsAvailable++; },
    (data) => { data.topics.categories[0].topics[0].count++; },
    (data) => { data.papers.papers[0].pdfVerified = true; },
    (data) => { data.papers.papers[0].abstractSource = 'missing'; },
    (data) => { data.papers.papers[0].category = 'Theory'; },
    (data) => { data.papers.papers[0].paperUrl = 'javascript:alert(1)'; },
  ]) {
    const data = fixtureDataset();
    mutate(data);
    assert.throws(() => validateData(data, relaxed));
  }
});

test('CSV quotes multiline and comma cells and neutralizes spreadsheet formulas', () => {
  assert.equal(csvCell('a,"b"\nc'), '"a,""b""\nc"');
  for (const value of ['=HYPERLINK("https://example.org")', '+cmd', '-1+2', '@SUM(A1)', '  =cmd', '\tformula', '\rformula', '\nformula']) assert.ok(csvCell(value).startsWith('"\''));
  assert.equal(csvCell(['Alice', 'Bob']), '"Alice; Bob"');
});

test('Markdown escapes source HTML and labels missing abstracts and repeated rows', () => {
  assert.ok(!markdownText('<script>alert(1)</script>').includes('<script>'));
  const data = fixtureDataset();
  const category = data.topics.categories.find((item) => item.name === 'Reinforcement Learning');
  const text = topicMarkdown(category, category.topics[0], data.papers.papers);
  assert.match(text, /Repeated source row/);
  assert.match(text, /unverified/);
});

test('retry helper backs off transient HTTP and network errors but not 403 challenges', async () => {
  let calls = 0;
  const transient = await fetchWithRetry('https://example.org', { delayMs: 0, fetchImpl: async () => ++calls === 1 ? response('temporary', 503) : response({ ok: true }) });
  assert.equal(calls, 2);
  assert.equal(JSON.parse(transient.bytes).ok, true);
  calls = 0;
  await assert.rejects(fetchWithRetry('https://example.org', { delayMs: 0, fetchImpl: async () => { calls++; return response('Challenge verification required', 403); } }), (error) => error.status === 403 && error.bodySha256.length === 64);
  assert.equal(calls, 1);
  calls = 0;
  await fetchWithRetry('https://example.org', { delayMs: 0, fetchImpl: async () => { if (++calls < 3) throw new TypeError('Network failure'); return response('ok'); } });
  assert.equal(calls, 3);
});

test('bulk OpenReview enrichment tries a bounded set of public filters and reports challenge blocks', async () => {
  const urls = [];
  const report = await fetchOpenReviewBulk({ fetchOptions: { delayMs: 0, fetchImpl: async (url) => { urls.push(url); return response({ name: 'ChallengeRequiredError' }, 403); } } });
  assert.equal(urls.length, 3);
  assert.equal(report.status, 'blocked');
  assert.equal(report.notes.length, 0);
  assert.ok(report.probes.every((probe) => probe.status === 403 && probe.sha256.length === 64));
  assert.ok(urls.some((url) => new URL(url).searchParams.has('invitation')));
});

test('bulk OpenReview enrichment paginates rather than issuing per-paper requests', async () => {
  let calls = 0;
  const notes = Array.from({ length: 1000 }, (_, index) => ({ id: `n${index}`, content: {} }));
  const report = await fetchOpenReviewBulk({ fetchOptions: { fetchImpl: async (url) => {
    calls++;
    return new URL(url).searchParams.get('offset') === '0' ? response({ notes, count: 1001 }) : response({ notes: [{ id: 'last', content: { abstract: { value: 'Real abstract' } } }], count: 1001 });
  } } });
  assert.equal(calls, 2);
  assert.equal(report.status, 'complete');
  assert.equal(report.notes.length, 1001);
});

test('complete JSON, CSV, Markdown, and checksums are published and tampering is caught', async (t) => {
  const dir = await temporary(t);
  const output = path.join(dir, 'published');
  const data = fixtureDataset();
  await publishDataset({ ...data, papers: data.papers.papers }, output, relaxed);
  assert.equal((await validateDirectory(output, relaxed)).totalPapers, 3);
  const manifest = JSON.parse(await readFile(path.join(output, 'manifest.json'), 'utf8'));
  assert.ok(manifest.artifacts['papers.csv']);
  assert.ok(manifest.artifacts['topics/index.md']);
  await writeFile(path.join(output, 'papers.csv'), 'tampered');
  await assert.rejects(validateDirectory(output, relaxed), /checksum mismatch/);
});

test('failed validation preserves the previously published output', async (t) => {
  const dir = await temporary(t);
  const output = path.join(dir, 'published');
  const data = fixtureDataset();
  await publishDataset({ ...data, papers: data.papers.papers }, output, relaxed);
  const before = await readFile(path.join(output, 'papers.json'));
  data.manifest.abstractsAvailable = 9000;
  await assert.rejects(publishDataset({ ...data, papers: data.papers.papers }, output, relaxed), /mismatch/);
  assert.deepEqual(await readFile(path.join(output, 'papers.json')), before);
});

test('offline collector reproduces cached inputs without any fetch calls', async (t) => {
  const dir = await temporary(t);
  await writeFile(path.join(dir, 'metadata.json'), jsonText(fixture));
  await writeFile(path.join(dir, 'abstracts.json'), jsonText(abstracts));
  const outputDir = path.join(dir, 'output');
  const manifest = await collect({ offline: true, allowCountChange: true, rawDir: dir, outputDir, fetchOptions: { fetchImpl: () => { throw new Error('Offline mode attempted network access'); } } });
  assert.equal(manifest.totalPapers, 3);
  assert.equal(manifest.openreview.status, 'not-attempted-offline');
  assert.equal(manifest.sources[0].sha256, sha256(jsonText(fixture)));
  const first = await readFile(path.join(outputDir, 'papers.json'));
  await collect({ offline: true, allowCountChange: true, rawDir: dir, outputDir });
  assert.deepEqual(await readFile(path.join(outputDir, 'papers.json')), first);
});

test('changed live counts abort before replacing known-good outputs', async (t) => {
  const dir = await temporary(t);
  const output = path.join(dir, 'output');
  const data = fixtureDataset();
  await publishDataset({ ...data, papers: data.papers.papers }, output, relaxed);
  const before = await readFile(path.join(output, 'papers.json'));
  const rawDir = path.join(dir, 'raw');
  const { mkdir } = await import('node:fs/promises');
  await mkdir(rawDir);
  await writeFile(path.join(rawDir, 'metadata.json'), 'known good cached metadata');
  let calls = 0;
  await assert.rejects(collect({ rawDir, outputDir: output, fetchOptions: { fetchImpl: async () => { calls++; return response(fixture); } } }), /count changed/);
  assert.equal(calls, 1);
  assert.equal(await readFile(path.join(rawDir, 'metadata.json'), 'utf8'), 'known good cached metadata');
  assert.deepEqual(await readFile(path.join(output, 'papers.json')), before);
});

test('PDF sniffing rejects HTML, empty files, and truncated PDFs', () => {
  assert.equal(isPdfContent(pdf), true);
  assert.equal(isPdfContent(Buffer.from('<html>Challenge required</html>')), false);
  assert.equal(isPdfContent(Buffer.from('%PDF-1.7 incomplete content without a trailer')), false);
  assert.equal(isPdfContent(Buffer.alloc(0)), false);
});

test('PDF selection is explicit, deduplicates URLs, and obeys limits', () => {
  const papers = [{ id: 'a', pdfUrl: 'https://example.org/a.pdf' }, { id: 'b', pdfUrl: 'https://example.org/a.pdf' }, { id: 'c', pdfUrl: 'https://example.org/c.pdf' }];
  assert.throws(() => selectPdfDownloads(papers), /Select/);
  assert.throws(() => selectPdfDownloads(papers, { limit: 0 }), /positive integer/);
  assert.throws(() => selectPdfDownloads(papers, { ids: ['unknown'] }), /Unknown/);
  assert.equal(selectPdfDownloads(papers, { limit: 1 }).length, 1);
  assert.deepEqual(selectPdfDownloads(papers, { all: true })[0].paperIds, ['a', 'b']);
  assert.equal(selectPdfDownloads(papers, { ids: ['c'] })[0].url, 'https://example.org/c.pdf');
});

test('PDF downloader caps concurrency, resumes verified files, retries failures, and records errors', async (t) => {
  const dir = await temporary(t);
  const papers = Array.from({ length: 5 }, (_, index) => ({ id: String(index), pdfUrl: `https://example.org/${index}.pdf` }));
  let active = 0;
  let maxActive = 0;
  let calls = 0;
  const fetchImpl = async (url) => {
    calls++;
    active++;
    maxActive = Math.max(maxActive, active);
    await new Promise((resolve) => setTimeout(resolve, 5));
    active--;
    return response(url.endsWith('/4.pdf') ? '<html>Not a PDF</html>' : pdf, 200, url.endsWith('/4.pdf') ? 'text/html' : 'application/pdf');
  };
  const result = await downloadPdfs({ papers, outputDir: dir, all: true, fetchOptions: { fetchImpl } });
  assert.equal(result.downloaded, 4);
  assert.equal(result.errors, 1);
  assert.equal(calls, 5);
  assert.equal(maxActive, 2);
  const manifest = JSON.parse(await readFile(result.manifestFile, 'utf8'));
  assert.equal(Object.values(manifest.entries).filter((entry) => entry.status === 'error').length, 1);
  calls = 0;
  const resumed = await downloadPdfs({ papers, outputDir: dir, all: true, fetchOptions: { fetchImpl: async () => { calls++; return response(pdf, 200, 'application/pdf'); } } });
  assert.equal(resumed.skipped, 4);
  assert.equal(resumed.downloaded, 1);
  assert.equal(resumed.errors, 0);
  assert.equal(calls, 1);
  await assert.rejects(downloadPdfs({ papers, outputDir: dir, all: true, concurrency: 3 }), /1 or 2/);
});

test('PDF CLI does not download without explicit opt-in', () => {
  const output = execFileSync(process.execPath, ['scripts/download-pdfs.mjs'], { cwd: root, encoding: 'utf8' });
  assert.match(output, /No downloads were started/);
});

test('generated official snapshot has complete contracts and honest availability counts', async () => {
  const result = await validateDirectory(path.join(root, 'public/data'), { allowCountChange: true });
  assert.ok(result.totalPapers > 0);
  const manifest = JSON.parse(await readFile(path.join(root, 'public/data/manifest.json'), 'utf8'));
  assert.equal(manifest.abstractsAvailable + manifest.abstractsMissing, manifest.totalPapers);
  assert.equal(manifest.pdfLinksVerified, 0);
  assert.ok(manifest.uniqueOfficialEventIds <= manifest.totalPapers);
  assert.ok(manifest.sources.every((source) => /^[a-f0-9]{64}$/.test(source.sha256)));
  assert.ok(manifest.sourceUrls.includes(SOURCE_URLS.listing));
});
