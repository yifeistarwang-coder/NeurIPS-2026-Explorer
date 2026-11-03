import assert from 'node:assert/strict';
import { readFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';
import { gzip, gunzip } from 'node:zlib';
import { atomicWrite, isMain, sha256 } from './data-utils.mjs';

const compress = promisify(gzip);
const decompress = promisify(gunzip);
const files = ['metadata.json', 'abstracts.json', 'metadata-latest.json', 'abstracts-latest.json', 'page-index.html', 'details.json', 'openreview.json'];

export async function snapshot({ create = false, root = '.' } = {}) {
  const raw = path.join(root, 'data/raw');
  const snapshots = path.join(root, 'data/snapshots');
  const manifest = JSON.parse(await readFile(path.join(root, 'public/data/manifest.json'), 'utf8'));
  const checksums = new Map(manifest.sources.map(source => [source.cacheFile, source.sha256]));
  await mkdir(create ? snapshots : raw, { recursive: true });
  for (const file of files) {
    const buffer = create
      ? await readFile(path.join(raw, file))
      : await decompress(await readFile(path.join(snapshots, `${file}.gz`)));
    if (file.endsWith('.json')) JSON.parse(buffer.toString('utf8'));
    if (file.endsWith('.html')) {
      const html = buffer.toString('utf8');
      assert.ok(html.includes('/virtual/2026/poster/'), `${file}: missing poster links`);
    }
    if (checksums.has(file)) assert.equal(sha256(buffer), checksums.get(file), `${file}: raw source checksum mismatch`);
    await atomicWrite(create ? path.join(snapshots, `${file}.gz`) : path.join(raw, file), create ? await compress(buffer, { level: 9 }) : buffer);
  }
}

if (isMain(import.meta.url)) {
  const args = process.argv.slice(2);
  if (args.length !== 1 || !['--create', '--restore'].includes(args[0])) {
    console.error('Usage: node scripts/snapshot.mjs --create | --restore');
    process.exitCode = 1;
  } else {
    await snapshot({ create: args[0] === '--create' });
    console.log(args[0] === '--create' ? 'Compressed source snapshots created and checksums verified.' : 'Raw source snapshots restored and checksums verified.');
  }
}
