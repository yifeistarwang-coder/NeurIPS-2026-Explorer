#!/usr/bin/env node
import assert from 'node:assert/strict';
import { atomicWrite, isMain, jsonText, readJson, sha256, sleep } from './data-utils.mjs';

const ABSTRACT_MARKER = '<div class="abstract-text-inner">';
const LISTING_ITEM = /<li><a href="\/virtual\/2026\/poster\/(\d+)">([\s\S]*?)<\/a><\/li>/g;
const PAPER_URL = /https:\/\/openreview\.net\/(?:forum|pdf)\?id=[^"'<> ]+/g;

export function decodeHtml(value) {
  const named = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', ndash: '–', mdash: '—', rsquo: '’', lsquo: '‘', ldquo: '“', rdquo: '”', hellip: '…', times: '×' };
  return String(value ?? '')
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&([a-z]+);/gi, (match, name) => named[name.toLowerCase()] ?? match);
}

export function textOnly(value) {
  return decodeHtml(String(value ?? '').replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
}

export function parsePageIndex(html) {
  const entries = [];
  const seen = new Set();
  for (const match of html.matchAll(LISTING_ITEM)) {
    const id = match[1];
    const title = textOnly(match[2]);
    if (!title || seen.has(id)) continue;
    seen.add(id);
    entries.push({ id, title, posterUrl: `https://neurips.cc/virtual/2026/poster/${id}` });
  }
  return entries;
}

function ldJson(html) {
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const value = JSON.parse(decodeHtml(match[1]));
      if (value?.['@type'] === 'CreativeWork') return value;
    } catch {
      // Some schema blocks are not valid JSON; the human-readable page remains authoritative.
    }
  }
  return null;
}

function normalizeTitle(value) {
  return textOnly(value).normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

export function parseDetailPage(html, { expectedTitle = '', sourceUrl } = {}) {
  const schema = ldJson(html);
  const start = html.indexOf(ABSTRACT_MARKER);
  let abstract = '';
  if (start >= 0) {
    const contentStart = start + ABSTRACT_MARKER.length;
    const end = html.indexOf('</div>', contentStart);
    if (end > contentStart) abstract = textOnly(html.slice(contentStart, end));
  }
  const urls = [...new Set([...html.matchAll(PAPER_URL)].map((match) => decodeHtml(match[0])))];
  const paperUrl = urls.find((url) => url.includes('/forum?')) ?? urls.find((url) => url.includes('/pdf?')) ?? '';
  const title = textOnly(schema?.name ?? '');
  const authors = (Array.isArray(schema?.author) ? schema.author : [])
    .map((author) => textOnly(typeof author === 'string' ? author : author?.name))
    .filter(Boolean);
  return {
    title,
    authors,
    abstract,
    paperUrl,
    pdfUrl: urls.find((url) => url.includes('/pdf?')) ?? '',
    titleMismatch: Boolean(expectedTitle && title && normalizeTitle(title) !== normalizeTitle(expectedTitle)),
    expectedTitle,
    sourceUrl: sourceUrl ?? '',
    sourceSha256: sha256(Buffer.from(html)),
  };
}

async function fetchPage(id, expectedTitle, fetchImpl) {
  const url = `https://neurips.cc/virtual/2026/poster/${id}`;
  let lastError;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetchImpl(url, {
        headers: {
          'User-Agent': 'NeurIPS2026PaperExplorer/1.1 (public research index; contact via GitHub)',
          Accept: 'text/html,application/xhtml+xml',
        },
        signal: AbortSignal.timeout(45000),
      });
      const body = await response.text();
      if (!response.ok) {
        const error = new Error(`HTTP ${response.status} for ${url}`);
        error.status = response.status;
        error.bodySha256 = sha256(Buffer.from(body));
        if (response.status !== 429 && response.status < 500) throw error;
        lastError = error;
      } else {
        return { ...parseDetailPage(body, { expectedTitle, sourceUrl: url }), httpStatus: response.status, fetchedAt: new Date().toISOString() };
      }
    } catch (error) {
      lastError = error;
    }
    if (attempt < 2) await sleep(500 * 2 ** attempt);
  }
  throw lastError;
}

export async function fetchDetails({ master, cacheFile, details = {}, concurrency = 6, limit, fetchImpl = fetch, all = false, log = console.log } = {}) {
  assert.ok(Array.isArray(master) && master.length > 0, 'Master paper index is required');
  assert.ok(Number.isInteger(concurrency) && concurrency >= 1 && concurrency <= 12, 'Concurrency must be between 1 and 12');
  const wanted = master.filter((paper) => {
    const detail = details[paper.id];
    if (!all && detail?.status === 'ok' && detail.abstract) return false;
    if (limit) return true;
    return true;
  });
  const queue = limit ? wanted.slice(0, limit) : wanted;
  let cursor = 0;
  let completed = 0;
  let errors = 0;
  const total = queue.length;
  const persist = async () => {
    await atomicWrite(cacheFile, jsonText({ updatedAt: new Date().toISOString(), source: 'https://neurips.cc/virtual/2026/poster/', entries: details }));
  };
  async function worker() {
    while (cursor < queue.length) {
      const paper = queue[cursor++];
      const existing = details[paper.id];
      try {
        const result = await fetchPage(paper.id, paper.title, fetchImpl);
        details[paper.id] = {
          ...result,
          status: result.abstract ? 'ok' : 'no-abstract',
          attempts: (existing?.attempts ?? 0) + 1,
          error: null,
        };
        if (result.titleMismatch) log(`Title mismatch: ${paper.id} ${JSON.stringify({ page: paper.title, detail: result.title })}`);
      } catch (error) {
        errors++;
        details[paper.id] = {
          ...(existing ?? {}),
          status: 'error',
          attempts: (existing?.attempts ?? 0) + 1,
          lastAttemptAt: new Date().toISOString(),
          error: error.message,
          httpStatus: error.status ?? null,
        };
      }
      completed++;
      if (completed % 25 === 0 || completed === total) {
        await persist();
        log(`${completed}/${total} fetched (${errors} errors)`);
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, queue.length || 1) }, worker));
  await persist();
  return { total, completed, errors, entries: details };
}

async function main() {
  const args = process.argv.slice(2);
  const options = { concurrency: 6, detailsFile: 'data/raw/details.json', masterFile: 'data/raw/master.json' };
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--all') options.all = true;
    else if (arg === '--limit' && args[i + 1]) options.limit = Number(args[++i]);
    else if (arg === '--concurrency' && args[i + 1]) options.concurrency = Number(args[++i]);
    else if (arg === '--output' && args[i + 1]) options.detailsFile = args[++i];
    else if (arg === '--master' && args[i + 1]) options.masterFile = args[++i];
    else if (arg === '--help') {
      console.log('Usage: node scripts/fetch-details.mjs [--master data/raw/master.json] [--all] [--limit N] [--concurrency 1..12] [--output data/raw/details.json]');
      return;
    } else throw new Error(`Unknown or incomplete option: ${arg}`);
  }
  const master = await readJson(options.masterFile);
  let details = {};
  try { details = (await readJson(options.detailsFile)).entries ?? {}; } catch (error) { if (error.code !== 'ENOENT') throw error; }
  const result = await fetchDetails({ master, details, ...options, cacheFile: options.detailsFile });
  const ok = Object.values(result.entries).filter((entry) => entry.status === 'ok').length;
  console.log(JSON.stringify({ total: result.total, completed: result.completed, errors: result.errors, ok }, null, 2));
}

if (isMain(import.meta.url)) await main();
