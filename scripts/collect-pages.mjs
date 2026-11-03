#!/usr/bin/env node
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import {
  EXPECTED_COUNT, SOURCE_URLS, atomicWrite, fetchWithRetry, httpUrl,
  isMain, jsonText, readJson, sha256,
} from './data-utils.mjs';
import { checkAbstracts, makeManifest, metadataRows, normalizePapers, publishDataset } from './collect.mjs';
import { buildTopics } from './taxonomy.mjs';
import { fetchDetails, parsePageIndex } from './fetch-details.mjs';
import { validateDirectory } from './validate-data.mjs';

export const PAGE_URL = 'https://neurips.cc/virtual/2026/loc/sydney/papers.html';
export const DETAIL_URL = 'https://neurips.cc/virtual/2026/poster/';
export const LATEST_METADATA_URL = 'https://neurips.cc/static/virtual/data/neurips-2026-orals-posters.json';
export const LATEST_ABSTRACTS_URL = 'https://neurips.cc/static/virtual/data/neurips-2026-abstracts.json';

const source = (name, url, bytes, status, file) => ({
  name, url, sha256: sha256(bytes), bytes: bytes.length, status, ...(file ? { cacheFile: path.basename(file) } : {}),
});

async function readJsonSource(file, name, url, validate, { offline, fetchOptions } = {}) {
  let bytes;
  let status = 'cached';
  try {
    bytes = await readFile(file);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    if (offline) throw new Error(`Missing cached ${name}: ${file}`);
  }
  if (!offline) {
    try {
      const fresh = await fetchWithRetry(url, fetchOptions);
      validate(JSON.parse(fresh.bytes.toString('utf8')));
      bytes = fresh.bytes;
      status = 'fetched';
      await atomicWrite(file, bytes);
    } catch (error) {
      if (!bytes) throw error;
      status = `cached-after-refresh-failure: ${error.message}`;
    }
  }
  const data = JSON.parse(bytes.toString('utf8'));
  validate(data);
  return { data, source: source(name, url, bytes, status, file) };
}

async function readPageSource(file, { offline, fetchOptions } = {}) {
  let bytes;
  let status = 'cached';
  try {
    bytes = await readFile(file);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    if (offline) throw new Error(`Missing cached page index: ${file}`);
  }
  if (!offline) {
    try {
      const fresh = await fetchWithRetry(PAGE_URL, fetchOptions);
      const html = fresh.bytes.toString('utf8');
      assert.ok(html.includes('/virtual/2026/poster/'), 'Official page index has no poster links');
      bytes = fresh.bytes;
      status = 'fetched';
      await atomicWrite(file, bytes);
    } catch (error) {
      if (!bytes) throw error;
      status = `cached-after-refresh-failure: ${error.message}`;
    }
  }
  return { entries: parsePageIndex(bytes.toString('utf8')), source: source('page-index', PAGE_URL, bytes, status, file) };
}

function authorNames(row) {
  return (row?.authors ?? [])
    .map((author) => typeof author === 'string' ? author : author?.fullname ?? author?.name ?? '')
    .map((author) => String(author).trim())
    .filter(Boolean);
}

function mergeSnapshots(metadataSnapshots, abstractSnapshots) {
  const merged = new Map();
  const abstractById = new Map();
  for (const snapshot of abstractSnapshots) {
    for (const [id, value] of Object.entries(snapshot.data)) {
      if (typeof value === 'string' && value.trim()) abstractById.set(String(id), value.trim());
    }
  }
  for (const snapshot of metadataSnapshots) {
    for (const row of metadataRows(snapshot.data)) {
      if ((row.eventtype ?? row.event_type) !== 'Poster') continue;
      const id = String(row.id);
      const abstract = abstractById.get(id) || (typeof row.abstract === 'string' ? row.abstract.trim() : '');
      const previous = merged.get(id);
      if (!previous || (abstract && !previous.abstract)) {
        merged.set(id, {
          row,
          abstract,
          abstractSource: abstract ? (abstractById.get(id) === abstract ? 'official-abstracts' : 'official-metadata') : '',
          snapshot: snapshot.name,
        });
      }
    }
  }
  return merged;
}

function oralTitles(metadataSnapshots) {
  const titles = new Set();
  for (const snapshot of metadataSnapshots) {
    for (const row of metadataRows(snapshot.data)) {
      if ((row.eventtype ?? row.event_type) === 'Oral') titles.add(row.name.trim().toLowerCase());
    }
  }
  return titles;
}

function masterIndex(pageEntries, known, oral) {
  const master = new Map();
  for (const entry of pageEntries) {
    master.set(entry.id, {
      ...entry,
      pageIndexed: true,
      known: known.get(entry.id),
      oralPresentation: oral.has(entry.title.trim().toLowerCase()),
    });
  }
  for (const [id, value] of known) {
    if (master.has(id)) continue;
    master.set(id, {
      id,
      title: value.row.name.trim(),
      posterUrl: httpUrl(value.row.virtualsite_url, 'https://neurips.cc') || `${DETAIL_URL}${encodeURIComponent(id)}`,
      pageIndexed: false,
      known: value,
      oralPresentation: oral.has(value.row.name.trim().toLowerCase()),
    });
  }
  return [...master.values()];
}

function rowFor(entry, detail) {
  const known = entry.known;
  const knownAbstract = known?.abstract?.trim() || '';
  const detailAbstract = detail?.status === 'ok' ? (detail.abstract?.trim() || '') : '';
  const abstract = knownAbstract || detailAbstract;
  const abstractSource = knownAbstract ? known.abstractSource : detailAbstract ? 'official-poster-page' : 'missing';
  const authors = known ? authorNames(known.row) : (detail?.authors ?? []);
  const paperUrl = httpUrl(known?.row.paper_url) || httpUrl(detail?.paperUrl) || '';
  const row = {
    id: entry.id,
    name: entry.title,
    authors,
    topic: known?.row.topic ?? null,
    keywords: Array.isArray(known?.row.keywords) ? known.row.keywords : [],
    decision: known?.row.decision ?? (entry.oralPresentation ? 'Accept (oral)' : 'Accept (poster)'),
    eventtype: 'Poster',
    abstract,
    paper_url: paperUrl,
    virtualsite_url: entry.posterUrl,
    paper_pdf_url: known?.row.paper_pdf_url ?? null,
    _abstractSource: abstractSource,
    _abstractSourceUrl: !knownAbstract && detailAbstract ? detail.sourceUrl : null,
    _sourceKind: entry.pageIndexed ? 'official-page-index' : 'official-json-only',
    _pageIndexed: entry.pageIndexed,
    _oralPresentation: entry.oralPresentation,
  };
  if (detail?.titleMismatch) row._titleMismatch = { page: entry.title, detail: detail.title };
  return row;
}

function normalizedTitle(value) {
  return String(value ?? '').normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

function abstractBreakdown(papers) {
  const result = {};
  for (const paper of papers) result[paper.abstractSource] = (result[paper.abstractSource] ?? 0) + 1;
  return result;
}

export async function collectPages({
  offline = false, rawDir = 'data/raw', outputDir = 'public/data', detailsFile,
  concurrency = 6, fetchOptions, now = () => new Date().toISOString(),
} = {}) {
  const root = path.resolve(rawDir);
  const detailPath = detailsFile ?? path.join(root, 'details.json');
  const [page, oldMetadata, oldAbstracts, latestMetadata, latestAbstracts] = await Promise.all([
    readPageSource(path.join(root, 'page-index.html'), { offline, fetchOptions }),
    readJsonSource(path.join(root, 'metadata.json'), 'metadata-old', SOURCE_URLS.metadata, metadataRows, { offline: true, fetchOptions }),
    readJsonSource(path.join(root, 'abstracts.json'), 'abstracts-old', SOURCE_URLS.abstracts, checkAbstracts, { offline: true, fetchOptions }),
    readJsonSource(path.join(root, 'metadata-latest.json'), 'metadata-latest', LATEST_METADATA_URL, metadataRows, { offline, fetchOptions }),
    readJsonSource(path.join(root, 'abstracts-latest.json'), 'abstracts-latest', LATEST_ABSTRACTS_URL, checkAbstracts, { offline, fetchOptions }),
  ]);
  assert.ok(page.entries.length >= 9000, `Official page index returned only ${page.entries.length} entries`);
  const metadataSnapshots = [oldMetadata, latestMetadata];
  const abstractSnapshots = [oldAbstracts, latestAbstracts];
  const known = mergeSnapshots(metadataSnapshots, abstractSnapshots);
  const master = masterIndex(page.entries, known, oralTitles(metadataSnapshots));
  assert.ok(master.length >= page.entries.length, 'Master index lost page entries');

  let detailCache = { entries: {} };
  try {
    const cached = await readJson(detailPath);
    if (cached?.entries && typeof cached.entries === 'object') detailCache = cached;
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  const needsDetails = master.filter((entry) => !entry.known?.abstract?.trim());
  if (!offline) {
    await fetchDetails({
      master: needsDetails,
      details: detailCache.entries,
      cacheFile: detailPath,
      concurrency,
      fetchImpl: fetchOptions?.fetchImpl,
      log: process.env.CI ? () => {} : console.log,
    });
  }
  const detailBytes = await readFile(detailPath);
  const detailEntries = detailCache.entries;
  const rows = master.map((entry) => rowFor(entry, detailEntries[entry.id]));
  const syntheticMetadata = { count: rows.length, next: null, results: rows };
  const papers = normalizePapers(syntheticMetadata, { __none__: '' }, { openreviewNotes: [] });
  assert.equal(papers.length, master.length, 'Master entries disappeared during normalization');
  const detailsOk = papers.filter((paper) => paper.abstractSource === 'official-poster-page').length;
  const missingDetails = papers.filter((paper) => !paper.abstract).length;
  const detailsErrors = master.filter((entry) => detailEntries[entry.id]?.status === 'error').length;
  const titleMismatches = master.filter((entry) => {
    const detail = detailEntries[entry.id];
    return Boolean(detail?.title && normalizedTitle(detail.title) !== normalizedTitle(entry.title));
  }).length;
  const sources = [
    page.source, oldMetadata.source, oldAbstracts.source, latestMetadata.source, latestAbstracts.source,
    source('details', `${DETAIL_URL}{id}`, detailBytes, 'cached', detailPath),
  ];
  const openreview = await readOpenReview(root);
  const manifest = makeManifest(papers, syntheticMetadata, { sources, openreview, updatedAt: now() });
  const latestPosterRows = metadataRows(latestMetadata.data).filter((row) => (row.eventtype ?? row.event_type) === 'Poster');
  Object.assign(manifest, {
    expectedCount: papers.length,
    requestedSourceRecordCount: EXPECTED_COUNT,
    pageIndexEntries: page.entries.length,
    jsonOnlyEntries: master.filter((entry) => !entry.pageIndexed).length,
    uniqueTitles: new Set(papers.map((paper) => paper.title.trim().toLowerCase())).size,
    sourcePosterRowsLatest: latestPosterRows.length,
    latestJsonUniquePosterIds: new Set(latestPosterRows.map((row) => String(row.id))).size,
    latestJsonDuplicatePosterRows: latestPosterRows.length - new Set(latestPosterRows.map((row) => String(row.id))).size,
    abstractsBySource: abstractBreakdown(papers),
    details: {
      requested: needsDetails.length,
      officialPageAbstracts: detailsOk,
      missing: missingDetails,
      errors: detailsErrors,
      titleMismatches,
    },
    sourceUrls: [...new Set([...Object.values(SOURCE_URLS), PAGE_URL, LATEST_METADATA_URL, LATEST_ABSTRACTS_URL, `${DETAIL_URL}{id}`])],
    duplicatePolicy: 'The public index is deduplicated by official page/JSON event ID. The original 9,152-record poster JSON snapshot contained repeated rows; those rows are not presented as distinct papers. Current official JSON rows and page-index entries are reconciled by ID and title. Page-only entries are preserved.',
    sourceMethod: 'The official papers listing is the primary index; current and earlier official orals-posters JSON feeds provide metadata and abstracts; missing abstracts and page-only metadata are read from the official poster detail page. No abstract is generated or copied from a search snippet.',
  });
  await publishDataset({ papers, topics: buildTopics(papers), manifest }, outputDir, {
    allowCountChange: true, expectedCount: papers.length,
  });
  await validateDirectory(path.resolve(outputDir), { allowCountChange: true, expectedCount: papers.length });
  return manifest;
}

async function readOpenReview(root) {
  try {
    return await readJson(path.join(root, 'openreview.json'));
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    return { status: 'not-attempted', notes: [], probes: [] };
  }
}

function parseArgs(args) {
  const options = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--offline') options.offline = true;
    else if (arg === '--help') options.help = true;
    else if (['--raw-dir', '--output-dir', '--details-file', '--concurrency'].includes(arg) && args[i + 1] && !args[i + 1].startsWith('--')) {
      const value = args[++i];
      if (arg === '--raw-dir') options.rawDir = value;
      else if (arg === '--output-dir') options.outputDir = value;
      else if (arg === '--details-file') options.detailsFile = value;
      else options.concurrency = Number(value);
    } else throw new Error(`Unknown or incomplete option: ${arg}`);
  }
  return options;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    console.log('Usage: node scripts/collect-pages.mjs [--offline] [--raw-dir data/raw] [--output-dir public/data] [--details-file data/raw/details.json] [--concurrency 1..12]\nUses the official papers page as the primary index, reconciles it with official orals-posters JSON snapshots, and fetches missing abstracts from official poster detail pages. It never invents abstracts or treats repeated source rows as distinct papers.');
    return;
  }
  const manifest = await collectPages(options);
  const { artifacts, sources, ...summary } = manifest;
  console.log(JSON.stringify(summary, null, 2));
}

if (isMain(import.meta.url)) main().catch((error) => { console.error(`Page collection failed: ${error.message}`); process.exitCode = 1; });
