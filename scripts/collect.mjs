#!/usr/bin/env node
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { gzipSync } from 'node:zlib';
import {
  EXPECTED_COUNT, SOURCE_URLS, atomicWrite, derivePdfUrl, fetchWithRetry, httpUrl,
  isMain, jsonText, markdownText, markdownUrl, papersCsv, readJson, replaceDirectory, sha256,
} from './data-utils.mjs';
import { buildTopics, classifyTopic } from './taxonomy.mjs';
import { validateData, validateDirectory } from './validate-data.mjs';

export function metadataRows(raw) {
  const rows = Array.isArray(raw) ? raw : raw?.results;
  assert.ok(Array.isArray(rows) && rows.length > 0, 'Metadata must contain a nonempty results array');
  if (!Array.isArray(raw)) {
    assert.ok(!raw.next, 'Metadata is paginated; refusing an incomplete source');
    if (raw.count !== undefined) assert.equal(raw.count, rows.length, 'Metadata count does not match results length');
  }
  for (const row of rows) assert.ok(row && row.id !== undefined && typeof row.name === 'string', 'Malformed metadata row');
  return rows;
}

export function checkAbstracts(raw) {
  assert.ok(raw && !Array.isArray(raw) && typeof raw === 'object' && Object.keys(raw).length > 0, 'Abstract feed must be a nonempty keyed object');
  for (const [id, value] of Object.entries(raw)) assert.equal(typeof value, 'string', `Invalid abstract at ${id}`);
  return raw;
}

function noteValue(value) {
  return value && typeof value === 'object' && 'value' in value ? value.value : value;
}

function openReviewAbstracts(notes) {
  const abstracts = new Map();
  for (const note of notes ?? []) {
    const abstract = noteValue(note.content?.abstract);
    if (typeof abstract !== 'string' || !abstract.trim()) continue;
    for (const id of [note.id, note.forum]) {
      if (typeof id === 'string' && !abstracts.has(id)) abstracts.set(id, abstract.trim());
    }
  }
  return abstracts;
}

function paperLink(row) {
  const primary = httpUrl(row.paper_url);
  if (primary) return { url: primary, source: 'official-paper-url' };
  const alternatives = [row.url, ...(row.eventmedia ?? []).map((media) => media.uri)];
  for (const candidate of alternatives) {
    const url = httpUrl(candidate);
    if (!url) continue;
    const parsed = new URL(url);
    if ((parsed.hostname === 'openreview.net' && ['/forum', '/pdf'].includes(parsed.pathname) && parsed.searchParams.has('id')) || (parsed.hostname === 'arxiv.org' && parsed.pathname.startsWith('/abs/'))) {
      return { url, source: 'official-alternate-url' };
    }
  }
  return { url: '', source: 'missing' };
}

export function normalizePapers(metadata, abstracts, { openreviewNotes = [] } = {}) {
  const rows = metadataRows(metadata);
  checkAbstracts(abstracts);
  const posters = rows.filter((row) => (row.eventtype ?? row.event_type) === 'Poster');
  assert.ok(posters.length > 0, 'No Poster records found');
  const enrichment = openReviewAbstracts(openreviewNotes);
  const occurrences = new Map();
  const papers = posters.map((row) => {
    const sourceEventId = String(row.id);
    const occurrence = (occurrences.get(sourceEventId) ?? 0) + 1;
    occurrences.set(sourceEventId, occurrence);
    // The official snapshot repeats poster rows; stable suffixes preserve the supplied record count honestly.
    const id = occurrence === 1 ? sourceEventId : `${sourceEventId}--${occurrence}`;
    const link = paperLink(row);
    const officialPdf = httpUrl(row.paper_pdf_url);
    const pdfUrl = officialPdf || derivePdfUrl(link.url);
    const forumId = link.url ? new URL(link.url).searchParams.get('id') : null;
    const feedAbstract = abstracts[sourceEventId]?.trim();
    const inlineAbstract = typeof row.abstract === 'string' ? row.abstract.trim() : '';
    const enrichedAbstract = enrichment.get(forumId) ?? '';
    const abstract = feedAbstract || inlineAbstract || enrichedAbstract;
    const abstractSource = feedAbstract ? 'official-abstracts' : inlineAbstract ? 'official-metadata' : enrichedAbstract ? 'openreview' : 'missing';
    const taxonomy = classifyTopic({ title: row.name, abstract, officialTopic: row.topic ?? null, keywords: row.keywords });
    const thumbnail = httpUrl(row.thumbnail_url ?? row.thumbnail);
    return {
      id, title: row.name.trim(),
      authors: (row.authors ?? []).map((author) => typeof author === 'string' ? author.trim() : String(author.fullname ?? author.name ?? '').trim()).filter(Boolean),
      abstract, abstractSource, ...taxonomy,
      paperUrl: link.url, pdfUrl,
      posterUrl: httpUrl(row.virtualsite_url, 'https://neurips.cc') || `https://neurips.cc/virtual/2026/poster/${encodeURIComponent(sourceEventId)}`,
      decision: typeof row.decision === 'string' ? row.decision : '',
      thumbnailUrl: thumbnail || null,
      sourceEventId, sourceOccurrence: occurrence, duplicateOf: occurrence > 1 ? sourceEventId : null,
      paperUrlSource: link.source,
      pdfSource: officialPdf ? 'official' : pdfUrl ? 'derived-openreview' : 'missing',
      pdfVerified: false,
    };
  });
  return papers;
}

export function makeManifest(papers, metadata, { sources = [], openreview = {}, updatedAt = new Date().toISOString() } = {}) {
  const rows = metadataRows(metadata);
  const available = papers.filter((paper) => paper.abstract.trim()).length;
  const officialTopics = papers.filter((paper) => paper.topicSource === 'official').length;
  const uniqueEventIds = new Set(papers.map((paper) => paper.sourceEventId)).size;
  const uniqueById = [...new Map(papers.map((paper) => [paper.sourceEventId, paper])).values()];
  const knownUrls = new Set(papers.map((paper) => paper.paperUrl).filter(Boolean));
  return {
    updatedAt, expectedCount: EXPECTED_COUNT, totalPapers: papers.length,
    abstractsAvailable: available, abstractsMissing: papers.length - available,
    pdfLinksAvailable: papers.filter((paper) => paper.pdfUrl).length,
    officialTopicCount: officialTopics, inferredTopicCount: papers.length - officialTopics,
    sourceUrls: Object.values(SOURCE_URLS), sources,
    totalSourceEvents: rows.length,
    oralPresentationsExcluded: rows.filter((row) => (row.eventtype ?? row.event_type) === 'Oral').length,
    uniqueOfficialEventIds: uniqueEventIds,
    uniquePaperUrls: knownUrls.size,
    repeatedPosterRows: papers.length - uniqueEventIds,
    uniqueEventsWithAbstracts: uniqueById.filter((paper) => paper.abstract.trim()).length,
    uniqueEventsMissingAbstracts: uniqueById.filter((paper) => !paper.abstract.trim()).length,
    duplicatePolicy: 'Oral presentations excluded. Repeated Poster source rows retained to reproduce the requested official snapshot row count; repeated IDs receive deterministic --N suffixes. totalPapers counts rows, not distinct research papers. Consult uniqueOfficialEventIds and uniquePaperUrls for distinct-source counts.',
    pdfPolicy: 'OpenReview PDF links are derived with URL parsing when official PDF URLs are absent. No derived link is claimed verified. PDF files are not included in these exports.',
    pdfLinksDerived: papers.filter((paper) => paper.pdfSource === 'derived-openreview').length,
    pdfLinksOfficial: papers.filter((paper) => paper.pdfSource === 'official').length,
    pdfLinksVerified: 0,
    paperLinksMissing: papers.filter((paper) => !paper.paperUrl).length,
    topicInference: {
      method: 'Deterministic bilingual keyword scoring of title (weight 5) and abstract (weight 1); multiword phrases have weight 3. Stable taxonomy order resolves ties; no matches use General Machine Learning / Everything Else.',
      version: 2, officialTopicsPreserved: true, inferredTopicsAreOfficial: false,
    },
    openreview: {
      status: openreview.status ?? 'not-attempted',
      notesFetched: openreview.notes?.length ?? 0,
      abstractsAdded: papers.filter((paper) => paper.abstractSource === 'openreview').length,
      probes: openreview.probes ?? [],
      attemptedAt: openreview.attemptedAt ?? null,
      ...(openreview.error ? { error: openreview.error } : {}),
    },
  };
}

async function loadSource(key, { offline, rawDir, explicitFile, fetchOptions }) {
  const cachePath = explicitFile ?? path.join(rawDir, `${key}.json`);
  const validate = key === 'metadata' ? metadataRows : checkAbstracts;
  let bytes;
  let status;
  if (offline || explicitFile) {
    bytes = await readFile(cachePath);
    status = 'cached';
  } else {
    const result = await fetchWithRetry(SOURCE_URLS[key], fetchOptions);
    bytes = result.bytes;
    status = result.status;
  }
  const data = JSON.parse(bytes.toString('utf8'));
  validate(data);
  return {
    data,
    pendingCache: !offline && !explicitFile ? { file: cachePath, bytes } : null,
    source: { name: key, url: SOURCE_URLS[key], sha256: sha256(bytes), bytes: bytes.length, status, cacheFile: path.basename(cachePath) },
  };
}

function bulkQueries() {
  return [
    ['content.venueid', 'NeurIPS.cc/2026/Conference'],
    ['invitation', 'NeurIPS.cc/2026/Conference/-/Submission'],
    ['content.venue', 'NeurIPS 2026 poster'],
  ].map(([key, value]) => {
    const url = new URL('https://api2.openreview.net/notes');
    url.searchParams.set(key, value);
    url.searchParams.set('limit', '1000');
    url.searchParams.set('offset', '0');
    if (key === 'content.venue') url.searchParams.set('details', 'original');
    return url;
  });
}

export async function fetchOpenReviewBulk({ fetchOptions, maxPages = 100 } = {}) {
  const report = { attemptedAt: new Date().toISOString(), status: 'unavailable', notes: [], probes: [] };
  for (const query of bulkQueries()) {
    const notes = [];
    const ids = new Set();
    try {
      let finished = false;
      for (let page = 0; page < maxPages; page++) {
        query.searchParams.set('offset', String(page * 1000));
        const { bytes, status } = await fetchWithRetry(query.href, fetchOptions);
        const body = JSON.parse(bytes.toString('utf8'));
        report.probes.push({ url: query.href, status, sha256: sha256(bytes), notes: body.notes?.length ?? 0 });
        assert.ok(Array.isArray(body.notes), 'Bulk API did not return notes');
        if (body.count !== undefined) assert.ok(Number.isInteger(body.count) && body.count >= 0, 'Invalid bulk API total');
        for (const note of body.notes) {
          assert.ok(typeof note.id === 'string' && !ids.has(note.id), 'Duplicate or missing bulk note ID; pagination is unsafe');
          ids.add(note.id);
          notes.push(note);
        }
        if (!body.notes.length || (body.count !== undefined ? notes.length >= body.count : body.notes.length < 1000)) {
          if (body.count !== undefined) assert.equal(notes.length, body.count, 'Bulk API returned an incomplete dataset');
          finished = true;
          break;
        }
      }
      assert.ok(finished, 'Bulk API exceeded pagination safety limit');
      if (notes.length) return { ...report, status: 'complete', notes };
    } catch (error) {
      report.probes.push({ url: query.href, status: error.status ?? 'error', ...(error.bodySha256 ? { sha256: error.bodySha256 } : {}), error: error.message });
      report.error = error.message;
    }
  }
  report.status = report.probes.length && report.probes.every((probe) => probe.status === 403) ? 'blocked' : 'unavailable';
  return report;
}

async function getOpenReview({ offline, rawDir, fetchOptions }) {
  const file = path.join(rawDir, 'openreview.json');
  let cached;
  try {
    cached = await readJson(file);
    assert.ok(Array.isArray(cached.notes) && Array.isArray(cached.probes), 'Invalid OpenReview cache');
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  if (offline) return cached ?? { status: 'not-attempted-offline', notes: [], probes: [] };
  const report = await fetchOpenReviewBulk({ fetchOptions });
  if (report.status !== 'complete' && cached?.status === 'complete') {
    return { ...cached, status: 'cached-after-refresh-failure', probes: [...cached.probes, ...report.probes], error: report.error };
  }
  await atomicWrite(file, jsonText(report));
  return report;
}

export function topicMarkdown(category, topic, papers) {
  const subset = papers.filter((paper) => paper.category === category.name && paper.topic === topic.name);
  const lines = [
    `# ${markdownText(category.name)} / ${markdownText(topic.name)}`,
    '', `${markdownText(category.nameZh)} / ${markdownText(topic.nameZh)}`, '',
    `${subset.length} source poster records. Repeated source event IDs are retained and explicitly marked.`,
    '', 'Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.', '',
  ];
  for (const paper of subset) {
    lines.push(`## ${markdownText(paper.title)}`, '',
      `**Authors:** ${paper.authors.map(markdownText).join('; ')}`, '',
      `**ID:** ${markdownText(paper.id)} | **Topic source:** ${paper.topicSource} | **Abstract source:** ${paper.abstractSource} | **PDF source:** ${paper.pdfSource}${paper.pdfUrl ? ' (unverified)' : ''}`, '',
      ...(paper.duplicateOf ? [`**Repeated source row:** ${markdownText(paper.sourceEventId)}`, ''] : []),
      [paper.paperUrl ? `[Paper](<${markdownUrl(paper.paperUrl)}>)` : '', paper.pdfUrl ? `[PDF](<${markdownUrl(paper.pdfUrl)}>)` : '', `[Official poster](<${markdownUrl(paper.posterUrl)}>)`].filter(Boolean).join(' | '), '',
      paper.abstract ? markdownText(paper.abstract) : '_Abstract unavailable from the accessible public sources._', '',
    );
  }
  return `${lines.join('\n')}\n`;
}

export async function publishDataset({ papers, topics, manifest }, outputDir, options = {}) {
  validateData({ papers: { papers }, topics, manifest }, options);
  const destination = path.resolve(outputDir);
  const staged = path.join(path.dirname(destination), `.data-stage-${randomUUID()}`);
  await mkdir(path.join(staged, 'topics'), { recursive: true });
  const artifacts = {};
  async function artifact(file, text) {
    const bytes = Buffer.from(text);
    await writeFile(path.join(staged, file), bytes);
    artifacts[file] = { bytes: bytes.length, sha256: sha256(bytes) };
  }
  try {
    const paperJson = jsonText({ papers });
    await artifact('papers.json', paperJson);
    await artifact('papers.json.gz', gzipSync(paperJson, { level: 9 }));
    await artifact('topics.json', jsonText(topics));
    await artifact('papers.csv', papersCsv(papers));
    const index = ['# NeurIPS 2026 topic-organized abstracts', '', `Poster records: ${papers.length}; unique official event IDs: ${manifest.uniqueOfficialEventIds}.`, '', 'Repeated source rows are retained to reproduce the supplied snapshot. Missing abstracts are not synthesized. Inferred topics and unverified derived PDF links are labeled per record.', ''];
    for (const category of topics.categories) {
      index.push(`## ${markdownText(category.name)} / ${markdownText(category.nameZh)}`, '');
      for (const topic of category.topics) {
        const file = `topics/${topic.id}.md`;
        await artifact(file, topicMarkdown(category, topic, papers));
        index.push(`- [${markdownText(topic.name)} / ${markdownText(topic.nameZh)}](${topic.id}.md): ${topic.count}`);
      }
      index.push('');
    }
    await artifact('topics/index.md', `${index.join('\n')}\n`);
    await writeFile(path.join(staged, 'manifest.json'), jsonText({ ...manifest, artifacts }));
    await validateDirectory(staged, options);
    await replaceDirectory(staged, destination);
  } finally {
    await rm(staged, { recursive: true, force: true });
  }
}

export async function collect({ offline = false, allowCountChange = false, rawDir = 'data/raw', outputDir = 'public/data', metadataFile, abstractsFile, fetchOptions } = {}) {
  const metadata = await loadSource('metadata', { offline, rawDir, explicitFile: metadataFile, fetchOptions });
  const posterCount = metadataRows(metadata.data).filter((row) => (row.eventtype ?? row.event_type) === 'Poster').length;
  if (!allowCountChange) assert.equal(posterCount, EXPECTED_COUNT, `Official poster row count changed to ${posterCount}; expected ${EXPECTED_COUNT}. Existing published data was not modified. Review the snapshot before --allow-count-change.`);
  const abstracts = await loadSource('abstracts', { offline, rawDir, explicitFile: abstractsFile, fetchOptions });
  const openreview = await getOpenReview({ offline, rawDir, fetchOptions });
  const papers = normalizePapers(metadata.data, abstracts.data, { openreviewNotes: openreview.notes });
  const topics = buildTopics(papers);
  const manifest = makeManifest(papers, metadata.data, { sources: [metadata.source, abstracts.source], openreview });
  await publishDataset({ papers, topics, manifest }, outputDir, { allowCountChange });
  // A rejected refresh must not destroy the cached snapshot used by --offline.
  for (const source of [metadata, abstracts]) {
    if (source.pendingCache) await atomicWrite(source.pendingCache.file, source.pendingCache.bytes);
  }
  return manifest;
}

function parseArgs(args) {
  const options = {};
  const values = { '--raw-dir': 'rawDir', '--output-dir': 'outputDir', '--metadata-file': 'metadataFile', '--abstracts-file': 'abstractsFile' };
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--offline') options.offline = true;
    else if (arg === '--allow-count-change') options.allowCountChange = true;
    else if (arg === '--help') options.help = true;
    else if (values[arg] && args[i + 1] && !args[i + 1].startsWith('--')) options[values[arg]] = args[++i];
    else throw new Error(`Unknown or incomplete option: ${arg}`);
  }
  return options;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    console.log('Usage: node scripts/collect.mjs [--offline] [--allow-count-change] [--raw-dir data/raw] [--output-dir public/data] [--metadata-file FILE] [--abstracts-file FILE]\nOffline mode never accesses the network and requires cached metadata.json and abstracts.json (or explicit input files). OpenReview enrichment uses only the public bulk API; blocked access is reported, not bypassed.');
    return;
  }
  const manifest = await collect(options);
  const { artifacts, ...summary } = manifest;
  console.log(JSON.stringify(summary, null, 2));
}

if (isMain(import.meta.url)) main().catch((error) => { console.error(`Collection failed: ${error.message}`); process.exitCode = 1; });
