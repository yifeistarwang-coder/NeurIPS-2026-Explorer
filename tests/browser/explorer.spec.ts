import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

const manifest = JSON.parse(readFileSync('public/data/manifest.json', 'utf8'));
const { papers } = JSON.parse(readFileSync('public/data/papers.json', 'utf8'));
const first = papers.find((paper: { abstract: string }) => paper.abstract);
const searchTerm = first.title.split(':')[0].slice(0, 40);
const comma = (value: number) => value.toLocaleString('en-US');

async function ready(page: import('@playwright/test').Page) {
  await page.goto('/');
  await expect(page.locator('.paper-row')).toHaveCount(30);
}

test('loads the rebuilt dataset with full abstracts and renders responsive screenshots', async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await ready(page);
  await expect(page.locator('.stat').first()).toContainText(comma(manifest.totalPapers));
  await expect(page.locator('.data-notice').first()).toContainText(comma(manifest.requestedSourceRecordCount));
  await expect(page.locator('.result-summary')).toContainText(comma(manifest.totalPapers));
  if (testInfo.project.name === 'mobile') await page.getByRole('button', { name: /研究领域分布/ }).click();
  await expect(page.locator('.distribution-item')).toHaveCount(12);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
  await page.screenshot({ path: testInfo.outputPath('research-explorer.png'), fullPage: false });
  expect(errors).toEqual([]);
});

test('searches full text, filters categories, paginates, and supports browser history', async ({ page }) => {
  await ready(page);
  const original = await page.locator('.paper-row h3').first().innerText();
  await page.getByRole('button', { name: '下一页', exact: true }).click();
  await expect(page).toHaveURL(/page=2/);
  await expect(page.locator('.paper-row h3').first()).not.toHaveText(original);
  await page.goBack();
  await expect(page.locator('.paper-row h3').first()).toHaveText(original);
  if (!(await page.locator('.distribution-item').first().isVisible())) await page.getByRole('button', { name: /研究领域分布/ }).click();
  await page.locator('.distribution-item').first().click();
  await expect(page).toHaveURL(/category=/);
  await page.goBack();
  await expect(page).not.toHaveURL(/category=/);
  await page.getByRole('searchbox').fill(searchTerm);
  await expect(page).toHaveURL(/q=/);
  await expect(page.locator('.paper-row h3').first()).toContainText(searchTerm);
  await expect(page.locator('.paper-row')).toHaveCount(1);
});

test('shows original full abstracts and opens deep links independently of filters', async ({ page }) => {
  await ready(page);
  const abstractButton = page.locator('.paper-row').first().getByRole('button', { name: '完整摘要', exact: true });
  await abstractButton.click();
  await expect(page.locator('.paper-row .abstract-text.expanded')).toHaveCount(1);
  await page.goto(`/?q=does-not-exist&page=199&paper=${encodeURIComponent(first.id)}`);
  const dialog = page.getByRole('dialog');
  await expect(dialog.getByRole('heading', { name: first.title, exact: true })).toBeVisible();
  await expect(dialog.locator('.detail-abstract')).toHaveText(first.abstract);
  await expect(dialog.getByRole('link', { name: 'PDF', exact: true })).toHaveAttribute('href', first.pdfUrl);
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
  await expect(page.locator('.empty-state')).toBeVisible();
});

test('bookmarks survive reload and the saved-paper view works', async ({ page }, testInfo) => {
  await ready(page);
  const firstTitle = await page.locator('.paper-row h3').first().innerText();
  await page.locator('.paper-row').first().getByRole('button', { name: '收藏论文', exact: true }).click();
  await page.reload();
  await expect(page.locator('.paper-row').first().getByRole('button', { name: '取消收藏', exact: true })).toBeVisible();
  if (testInfo.project.name === 'mobile') {
    await page.getByRole('button', { name: '打开研究目录' }).click();
    await page.getByRole('dialog').getByRole('button', { name: /我的收藏/ }).click();
  } else {
    await page.locator('.sidebar').getByRole('button', { name: /我的收藏/ }).click();
  }
  await expect(page.locator('.paper-row')).toHaveCount(1);
  await expect(page.locator('.paper-row h3')).toHaveText(firstTitle);
});

test('exports selected results as actual JSON and switches language', async ({ page }) => {
  await ready(page);
  await page.getByRole('searchbox').fill(searchTerm);
  await expect(page.locator('.paper-row')).toHaveCount(1);
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'JSON', exact: true }).click();
  const download = await downloadPromise;
  const file = await download.path();
  const exported = JSON.parse(readFileSync(file!, 'utf8'));
  expect(exported.count).toBe(1);
  expect(exported.papers[0].title).toContain(searchTerm);
  await page.locator('.language-button').click();
  await expect(page.getByRole('searchbox')).toHaveAttribute('placeholder', 'Search titles, authors, abstracts, keywords…');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('classification and abstract filters use the rebuilt counts', async ({ page }) => {
  await ready(page);
  await page.getByRole('button', { name: '筛选', exact: true }).click();
  await page.getByRole('checkbox', { name: '仅显示有公开摘要的论文' }).check();
  await expect(page.locator('.result-summary')).toContainText(comma(manifest.abstractsAvailable));
  const classification = page.locator('.filter-panel select');
  await classification.selectOption('official');
  await expect(page.locator('.result-summary')).toContainText(comma(manifest.officialTopicCount));
  await classification.selectOption('inferred');
  await expect(page.locator('.result-summary')).toContainText(comma(manifest.inferredTopicCount));
});

test('failed data fetch has retry recovery', async ({ page }) => {
  const endpoint = /\/data\/papers\.json(?:\.gz)?$/;
  await page.route(endpoint, route => route.fulfill({ status: 503, body: 'unavailable' }));
  await page.goto('/');
  await expect(page.getByRole('alert')).toContainText('论文数据加载失败');
  await page.unroute(endpoint);
  await page.getByRole('button', { name: '重新加载' }).click();
  await expect(page.locator('.paper-row')).toHaveCount(30);
});

test('static hosts without Content-Encoding load the precompressed data correctly', async ({ page }) => {
  await page.route('**/data/papers.json.gz', route => route.fulfill({ status: 200, contentType: 'application/gzip', body: readFileSync('public/data/papers.json.gz') }));
  await ready(page);
  await expect(page.locator('.result-summary')).toContainText(comma(manifest.totalPapers));
});

test('browsers without streaming decompression can load the original JSON', async ({ page }) => {
  await page.addInitScript(() => { Object.defineProperty(window, 'DecompressionStream', { value: undefined, configurable: true }); });
  const requested: string[] = [];
  page.on('request', request => requested.push(request.url()));
  await ready(page);
  expect(requested.some(url => url.endsWith('/data/papers.json'))).toBeTruthy();
  expect(requested.some(url => url.endsWith('/data/papers.json.gz'))).toBeFalsy();
});

test('narrow and wide layouts do not overflow or overlap paper controls', async ({ page }) => {
  await ready(page);
  for (const width of [320, 375, 768, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBeTruthy();
    const overlaps = await page.locator('.paper-row-footer').first().evaluate(element => {
      const caption = element.querySelector('.category-caption')!.getBoundingClientRect();
      const actions = element.querySelector('.paper-actions')!.getBoundingClientRect();
      return caption.right > actions.left + 1;
    });
    expect(overlaps).toBeFalsy();
  }
});
