import { createHash, randomUUID } from 'node:crypto';
import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

export const EXPECTED_COUNT = 9152;
export const SOURCE_URLS = {
  metadata: 'https://neurips.cc/static/virtual/data/neurips-2026-orals-posters.json',
  abstracts: 'https://neurips.cc/static/virtual/data/neurips-2026-abstracts.json',
  listing: 'https://neurips.cc/virtual/2026/loc/sydney/papers.html',
};

export const sha256 = (value) => createHash('sha256').update(value).digest('hex');
export const jsonText = (value) => `${JSON.stringify(value, null, 2)}\n`;
export const isMain = (metaUrl) => Boolean(process.argv[1]) && new URL(metaUrl).pathname === path.resolve(process.argv[1]);
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function httpUrl(value, base) {
  if (typeof value !== 'string' || !value.trim()) return '';
  try {
    const url = new URL(value, base);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : '';
  } catch {
    return '';
  }
}

export function derivePdfUrl(paperUrl) {
  try {
    const url = new URL(paperUrl);
    const id = url.searchParams.get('id');
    if (!['https:', 'http:'].includes(url.protocol) || url.hostname !== 'openreview.net' || !['/forum', '/pdf'].includes(url.pathname) || !id) return '';
    const pdf = new URL('https://openreview.net/pdf');
    pdf.searchParams.set('id', id);
    return pdf.href;
  } catch {
    return '';
  }
}

export async function atomicWrite(file, contents) {
  await mkdir(path.dirname(file), { recursive: true });
  const temp = `${file}.${randomUUID()}.tmp`;
  try {
    await writeFile(temp, contents);
    await rename(temp, file);
  } finally {
    await rm(temp, { force: true });
  }
}

export async function readJson(file) {
  return JSON.parse(await readFile(file, 'utf8'));
}

export async function fetchWithRetry(url, {
  fetchImpl = fetch, attempts = 3, timeoutMs = 60000, delayMs = 1000,
} = {}) {
  let lastError;
  for (let attempt = 0; attempt < attempts; attempt++) {
    try {
      const response = await fetchImpl(url, {
        headers: { 'User-Agent': 'NeurIPS2026PaperExplorer/1.0', Accept: 'application/json, application/pdf;q=0.9, */*;q=0.8' },
        signal: AbortSignal.timeout(timeoutMs),
      });
      // Consume bodies here so timeouts and retries also cover interrupted downloads.
      const bytes = Buffer.from(await response.arrayBuffer());
      if (response.ok) return { bytes, status: response.status, headers: response.headers };
      const error = new Error(`HTTP ${response.status} fetching ${url}: ${bytes.toString('utf8').slice(0, 220)}`);
      error.status = response.status;
      error.bodySha256 = sha256(bytes);
      if (response.status !== 429 && response.status < 500) throw error;
      lastError = error;
      if (attempt + 1 < attempts) {
        const retryAfter = response.headers.get('retry-after');
        const retrySeconds = Number(retryAfter);
        const dateDelay = Date.parse(retryAfter) - Date.now();
        const wait = retryAfter && Number.isFinite(retrySeconds) ? retrySeconds * 1000 : Number.isFinite(dateDelay) ? dateDelay : delayMs * 2 ** attempt;
        await sleep(Math.min(30000, Math.max(0, wait)));
      }
    } catch (error) {
      if (error.status && error.status !== 429 && error.status < 500) throw error;
      lastError = error;
      if (attempt + 1 < attempts) await sleep(delayMs * 2 ** attempt);
    }
  }
  throw lastError;
}

export function csvCell(value) {
  let text = Array.isArray(value) ? value.join('; ') : String(value ?? '');
  // Spreadsheet applications interpret these prefixes even inside quoted CSV fields.
  if (/^[\s\u0000-\u001f]*[=+@-]/u.test(text) || /^[\t\r\n]/u.test(text)) text = `'${text}`;
  return `"${text.replaceAll('"', '""')}"`;
}

export function papersCsv(papers) {
  const columns = ['id', 'sourceEventId', 'sourceOccurrence', 'duplicateOf', 'title', 'authors', 'abstract', 'abstractSource', 'category', 'topic', 'topicSource', 'officialTopic', 'keywords', 'paperUrl', 'pdfUrl', 'pdfSource', 'pdfVerified', 'posterUrl', 'decision'];
  return `${columns.map(csvCell).join(',')}\r\n${papers.map((paper) => columns.map((key) => csvCell(paper[key])).join(',')).join('\r\n')}\r\n`;
}

export function slug(value) {
  return value.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function markdownText(value) {
  return String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/([\\`*_{}\[\]()#+.!|~-])/g, '\\$1');
}

export function markdownUrl(value) {
  return String(value).replaceAll('<', '%3C').replaceAll('>', '%3E').replaceAll(' ', '%20');
}

export async function replaceDirectory(staged, destination) {
  const backup = `${destination}.backup-${randomUUID()}`;
  let hadPrevious = false;
  try {
    await rename(destination, backup);
    hadPrevious = true;
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  try {
    await rename(staged, destination);
  } catch (error) {
    if (hadPrevious) await rename(backup, destination);
    throw error;
  }
  if (hadPrevious) await rm(backup, { recursive: true, force: true });
}
