#!/usr/bin/env node
import assert from 'node:assert/strict';
import { mkdir, open, readFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { atomicWrite, fetchWithRetry, httpUrl, isMain, jsonText, readJson, sha256 } from './data-utils.mjs';

export function isPdfContent(bytes) {
  return Buffer.isBuffer(bytes) && bytes.length > 20 && bytes.subarray(0, 5).toString('ascii') === '%PDF-' && bytes.subarray(-2048).includes(Buffer.from('%%EOF'));
}

export function selectPdfDownloads(papers, { ids = [], limit, all = false } = {}) {
  assert.ok(Array.isArray(papers), 'Expected papers array');
  if (limit !== undefined) assert.ok(Number.isInteger(limit) && limit > 0, '--limit must be a positive integer');
  assert.ok(all || ids.length || limit !== undefined, 'Select --limit N, one or more --id ID, or explicitly --all');
  const wanted = new Set(ids);
  for (const id of wanted) assert.ok(papers.some((paper) => paper.id === id), `Unknown paper ID: ${id}`);
  const unique = new Map();
  for (const paper of papers) {
    if (wanted.size && !wanted.has(paper.id)) continue;
    if (!paper.pdfUrl || !httpUrl(paper.pdfUrl)) continue;
    const entry = unique.get(paper.pdfUrl);
    if (entry) entry.paperIds.push(paper.id);
    else unique.set(paper.pdfUrl, { url: paper.pdfUrl, paperIds: [paper.id] });
  }
  return [...unique.values()].slice(0, limit ?? Infinity);
}

export async function downloadPdfs({
  papers, outputDir = 'data/pdfs', ids = [], limit, all = false, concurrency = 2,
  fetchOptions,
} = {}) {
  assert.ok(Number.isInteger(concurrency) && concurrency >= 1 && concurrency <= 2, 'Concurrency must be 1 or 2');
  const selected = selectPdfDownloads(papers, { ids, limit, all });
  const directory = path.resolve(outputDir);
  await mkdir(directory, { recursive: true });
  const lockFile = path.join(directory, '.download.lock');
  let lock;
  try {
    lock = await open(lockFile, 'wx');
  } catch (error) {
    if (error.code === 'EEXIST') throw new Error(`Another download may be running: ${lockFile}. Remove the lock only after confirming no downloader is active.`);
    throw error;
  }
  const manifestFile = path.join(directory, 'downloads.json');
  let saveQueue = Promise.resolve();
  try {
    let manifest;
    try {
      manifest = await readJson(manifestFile);
      assert.ok(manifest.version === 1 && manifest.entries && typeof manifest.entries === 'object' && !Array.isArray(manifest.entries), 'Invalid download manifest');
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      manifest = { version: 1, entries: {} };
    }
    const persist = () => {
      manifest.updatedAt = new Date().toISOString();
      const snapshot = jsonText(manifest);
      saveQueue = saveQueue.then(() => atomicWrite(manifestFile, snapshot));
      return saveQueue;
    };
    let next = 0;
    let downloaded = 0;
    let skipped = 0;
    let errors = 0;
    async function worker() {
      while (next < selected.length) {
        const item = selected[next++];
        const key = sha256(item.url);
        const filename = `${key}.pdf`;
        const file = path.join(directory, filename);
        const previous = manifest.entries[key];
        let oldBytes;
        try {
          oldBytes = await readFile(file);
        } catch (error) {
          if (error.code !== 'ENOENT') throw error;
        }
        if (oldBytes && isPdfContent(oldBytes) && (!previous?.sha256 || sha256(oldBytes) === previous.sha256)) {
          skipped++;
          manifest.entries[key] = { ...previous, ...item, file: filename, status: 'complete', bytes: oldBytes.length, sha256: sha256(oldBytes), error: null };
          await persist();
          continue;
        }
        const entry = { ...item, file: filename, status: 'pending', attempts: (previous?.attempts ?? 0) + 1, lastAttemptAt: new Date().toISOString() };
        manifest.entries[key] = entry;
        await persist();
        try {
          const response = await fetchWithRetry(item.url, fetchOptions);
          assert.ok(isPdfContent(response.bytes), `Response is not a complete PDF (content-type: ${response.headers.get('content-type') ?? 'unknown'})`);
          await atomicWrite(file, response.bytes);
          Object.assign(entry, { status: 'complete', bytes: response.bytes.length, sha256: sha256(response.bytes), httpStatus: response.status, contentType: response.headers.get('content-type'), completedAt: new Date().toISOString(), error: null });
          downloaded++;
        } catch (error) {
          Object.assign(entry, { status: 'error', httpStatus: error.status ?? null, error: error.message });
          errors++;
        }
        await persist();
      }
    }
    const workers = await Promise.allSettled(Array.from({ length: Math.min(concurrency, selected.length) }, worker));
    const failure = workers.find((result) => result.status === 'rejected');
    if (failure) throw failure.reason;
    await persist();
    return { selected: selected.length, downloaded, skipped, errors, manifestFile };
  } finally {
    await saveQueue.catch(() => {});
    await lock.close();
    await rm(lockFile, { force: true });
  }
}

async function main() {
  const args = process.argv.slice(2);
  const options = { ids: [] };
  let dataDir = 'public/data';
  let enabled = false;
  let help = false;
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--download') enabled = true;
    else if (arg === '--all') options.all = true;
    else if (arg === '--help') help = true;
    else if (['--id', '--limit', '--concurrency', '--data-dir', '--output-dir'].includes(arg) && args[i + 1] && !args[i + 1].startsWith('--')) {
      const value = args[++i];
      if (arg === '--id') options.ids.push(value);
      else if (arg === '--limit') options.limit = Number(value);
      else if (arg === '--concurrency') options.concurrency = Number(value);
      else if (arg === '--data-dir') dataDir = value;
      else options.outputDir = value;
    } else throw new Error(`Unknown or incomplete option: ${arg}`);
  }
  if (help || !enabled) {
    console.log('PDF downloads are opt-in. No downloads were started.\nUsage: node scripts/download-pdfs.mjs --download [--limit N | --id ID | --all] [--concurrency 1|2] [--data-dir public/data] [--output-dir data/pdfs]\nExisting complete PDF files are verified and skipped; failures are recorded in downloads.json. A later run retries failed or incomplete files. Repeated URLs are downloaded once.');
    return;
  }
  const { papers } = await readJson(path.join(dataDir, 'papers.json'));
  const result = await downloadPdfs({ ...options, papers });
  console.log(JSON.stringify(result, null, 2));
  if (result.errors) process.exitCode = 1;
}

if (isMain(import.meta.url)) main().catch((error) => { console.error(`PDF download failed: ${error.message}`); process.exitCode = 1; });
