#!/usr/bin/env node
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { EXPECTED_COUNT, httpUrl, isMain, readJson, sha256 } from './data-utils.mjs';

const requiredStrings = ['id', 'title', 'abstract', 'abstractSource', 'topic', 'category', 'paperUrl', 'pdfUrl', 'posterUrl', 'decision'];

export function validateData({ papers: paperData, topics, manifest }, { allowCountChange = false, expectedCount = EXPECTED_COUNT } = {}) {
  const papers = paperData?.papers;
  assert.ok(Array.isArray(papers), 'papers.json must contain a papers array');
  assert.ok(papers.length > 0, 'Refusing to publish an empty dataset');
  if (!allowCountChange) assert.equal(papers.length, expectedCount, `Expected ${expectedCount} poster records; use --allow-count-change only after reviewing the source`);
  assert.ok(Array.isArray(topics?.categories) && topics.categories.length > 0, 'topics.json must contain categories');
  assert.ok(manifest && typeof manifest === 'object', 'Missing manifest');
  assert.ok(Number.isFinite(Date.parse(manifest.updatedAt)), 'Invalid manifest updatedAt');
  assert.equal(manifest.expectedCount, expectedCount, 'Unexpected manifest expectedCount');
  assert.equal(manifest.totalPapers, papers.length, 'Manifest totalPapers mismatch');
  assert.ok(Array.isArray(manifest.sourceUrls) && manifest.sourceUrls.length >= 2, 'Missing source URLs');
  for (const url of manifest.sourceUrls) assert.ok(httpUrl(url), `Invalid source URL: ${url}`);

  const ids = new Set();
  const counts = new Map();
  let abstracts = 0;
  let pdfs = 0;
  let official = 0;
  for (const paper of papers) {
    for (const key of requiredStrings) assert.equal(typeof paper[key], 'string', `${paper.id}: ${key} must be a string`);
    assert.ok(paper.id && paper.title.trim(), 'Missing paper id or title');
    assert.ok(!ids.has(paper.id), `Duplicate output id: ${paper.id}`);
    ids.add(paper.id);
    assert.ok(Array.isArray(paper.authors) && paper.authors.every((author) => typeof author === 'string' && author.trim()), `${paper.id}: invalid authors`);
    assert.ok(Array.isArray(paper.keywords) && paper.keywords.every((keyword) => typeof keyword === 'string'), `${paper.id}: invalid keywords`);
    assert.ok(paper.officialTopic === null || typeof paper.officialTopic === 'string', `${paper.id}: invalid officialTopic`);
    assert.ok(['official', 'inferred'].includes(paper.topicSource), `${paper.id}: invalid topicSource`);
    assert.equal(paper.topicSource === 'official', Boolean(paper.officialTopic), `${paper.id}: official topic provenance mismatch`);
    if (paper.topicSource === 'official') {
      const parts = paper.officialTopic.split('->').map((item) => item.trim()).filter(Boolean);
      assert.equal(paper.category, parts[0], `${paper.id}: official category changed`);
      assert.equal(paper.topic, parts.at(-1), `${paper.id}: official leaf changed`);
    }
    assert.ok(paper.thumbnailUrl === null || (typeof paper.thumbnailUrl === 'string' && httpUrl(paper.thumbnailUrl)), `${paper.id}: invalid thumbnailUrl`);
    for (const key of ['paperUrl', 'pdfUrl', 'posterUrl']) assert.ok(!paper[key] || httpUrl(paper[key]), `${paper.id}: invalid ${key}`);
    assert.ok(paper.posterUrl, `${paper.id}: missing official poster link`);
    assert.equal(paper.abstractSource === 'missing', !paper.abstract.trim(), `${paper.id}: abstract provenance mismatch`);
    if (paper.pdfSource === 'derived-openreview') assert.equal(paper.pdfVerified, false, `${paper.id}: derived PDF must not be labeled verified`);
    abstracts += Number(Boolean(paper.abstract.trim()));
    pdfs += Number(Boolean(paper.pdfUrl));
    official += Number(paper.topicSource === 'official');
    const key = `${paper.category}\u0000${paper.topic}`;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  const categoryIds = new Set();
  const topicIds = new Set();
  const categoryNames = new Set();
  let topicTotal = 0;
  for (const category of topics.categories) {
    assert.ok(category.id && category.name && category.nameZh, 'Category requires id, name, nameZh');
    assert.ok(!categoryIds.has(category.id) && !categoryNames.has(category.name), `Duplicate category: ${category.id}`);
    categoryIds.add(category.id);
    categoryNames.add(category.name);
    assert.ok(Array.isArray(category.topics) && category.topics.length > 0, `${category.id}: missing topics`);
    let categoryTotal = 0;
    for (const topic of category.topics) {
      assert.ok(topic.id && topic.name && topic.nameZh, `${category.id}: topic requires id, name, nameZh`);
      assert.ok(!topicIds.has(topic.id), `Duplicate topic id: ${topic.id}`);
      topicIds.add(topic.id);
      const key = `${category.name}\u0000${topic.name}`;
      assert.equal(topic.count, counts.get(key), `${key}: topic count mismatch`);
      counts.delete(key);
      categoryTotal += topic.count;
    }
    assert.equal(category.count, categoryTotal, `${category.id}: category count mismatch`);
    topicTotal += categoryTotal;
  }
  assert.equal(counts.size, 0, 'Paper categories/topics not represented in topics.json');
  assert.equal(topicTotal, papers.length, 'Taxonomy totals mismatch');
  for (const [key, value] of Object.entries({ abstractsAvailable: abstracts, abstractsMissing: papers.length - abstracts, pdfLinksAvailable: pdfs, officialTopicCount: official, inferredTopicCount: papers.length - official })) {
    assert.equal(manifest[key], value, `Manifest ${key} mismatch`);
  }
  if (manifest.uniqueOfficialEventIds !== undefined) {
    assert.equal(manifest.uniqueOfficialEventIds, new Set(papers.map((paper) => paper.sourceEventId)).size, 'Unique source event count mismatch');
    assert.equal(manifest.repeatedPosterRows, papers.length - manifest.uniqueOfficialEventIds, 'Repeated poster count mismatch');
  }
  return { totalPapers: papers.length, abstractsAvailable: abstracts, abstractsMissing: papers.length - abstracts, pdfLinksAvailable: pdfs, officialTopicCount: official, inferredTopicCount: papers.length - official };
}

export async function validateDirectory(directory, options = {}) {
  const [papers, topics, manifest] = await Promise.all(['papers.json', 'topics.json', 'manifest.json'].map((file) => readJson(path.join(directory, file))));
  const result = validateData({ papers, topics, manifest }, options);
  for (const [file, expected] of Object.entries(manifest.artifacts ?? {})) {
    assert.ok(!path.isAbsolute(file) && !file.split(/[\\/]/).includes('..'), 'Invalid artifact path');
    const data = await readFile(path.join(directory, file));
    assert.equal(sha256(data), expected.sha256, `${file}: checksum mismatch`);
    assert.equal(data.length, expected.bytes, `${file}: size mismatch`);
  }
  return result;
}

async function main() {
  const args = process.argv.slice(2);
  let directory = 'public/data';
  let allowCountChange = false;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--allow-count-change') allowCountChange = true;
    else if (args[i] === '--data-dir' && args[i + 1] && !args[i + 1].startsWith('--')) directory = args[++i];
    else if (args[i] === '--help') {
      console.log('Usage: node scripts/validate-data.mjs [--data-dir public/data] [--allow-count-change]');
      return;
    } else throw new Error(`Unknown or incomplete option: ${args[i]}`);
  }
  console.log(JSON.stringify(await validateDirectory(path.resolve(directory), { allowCountChange }), null, 2));
}

if (isMain(import.meta.url)) main().catch((error) => { console.error(`Validation failed: ${error.message}`); process.exitCode = 1; });
