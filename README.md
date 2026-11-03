# NeurIPS 2026 Research Explorer

[公开网站 / Live website](https://yifeistarwang-coder.github.io/NeurIPS-2026-Explorer/) · [部署 Actions](https://github.com/yifeistarwang-coder/NeurIPS-2026-Explorer/actions/workflows/pages.yml) · [主题摘要目录](public/data/topics/index.md)

按研究领域和主题整理 NeurIPS 2026 公开论文，保留原文摘要与官方来源。独立研究索引，非 NeurIPS 官方网站。

## 这次补全了什么

用户最初提供的 **9,152 条 Poster 记录**并不是 9,152 篇独立论文。逐条核对后：

| 指标 | 结果 |
| --- | ---: |
| 官网“全部论文”页面唯一 Poster 页面 | 9,130 |
| 当前/上一版 JSON 中仅 JSON 出现的条目 | 13 |
| **重建后的唯一论文条目** | **9,143** |
| 去重标题 | 9,113 |
| 原始 9,152 条 Poster 源记录中的唯一 ID | 6,000 |
| 原始 JSON 中的重复 Poster 行 | 3,152 |
| 最新 JSON 的 Poster 行 / 唯一 ID | 9,161 / 5,887 |
| **有原文摘要的论文条目** | **9,143 / 9,143（100%）** |
| 摘要来自官方 JSON / 官方详情页 | 7,199 / 1,944 |
| 官方主题 / 规则推断主题 | 2,699 / 6,444 |
| 研究大类 / 子主题 | 12 / 65 |
| 推导的 OpenReview PDF 地址（未验证） | 9,033 |
| 实际托管的论文 PDF | 0 |

最初的 9,152 行 JSON 中重复行完全相同，且与官网页面索引的大量论文不一致。现在改为：

1. **以官网 `papers.html` 页面索引为主**：9,130 个唯一海报页面，保留页面标题和链接。
2. **用当前与上一版官方 `orals-posters.json` 对账**：补充 13 个页面索引没有、但官方 JSON 仍存在的条目；按官方 ID 去重。
3. **摘要优先使用官方 JSON，缺失时逐篇读取官方 poster 详情页**：本次补抓 1,944 个详情页摘要，0 个失败、0 个标题不匹配。
4. **保留原始来源说明**：每条论文标记 `sourceKind`、`abstractSource`、`abstractSourceUrl`；不生成摘要，不把搜索摘要冒充原文。

110 个条目没有可用的 OpenReview 论文链接（多为 reproducibility 类条目），因此没有推导 PDF 地址。PDF 仍只是推导链接，未逐个下载或验证；本网站不托管论文 PDF。

## 如何核对

```sh
npm ci
npm test          # 27 项数据/解析/下载器测试
npm run validate  # 校验 9,143 条记录、主题计数和文件校验值
npm run snapshot:restore
npm run collect:pages -- --offline
```

离线重建使用 `data/snapshots/` 中的页面索引、当前/上一版 JSON、摘要和详情缓存；`--offline` 不访问网络。生成的 `papers.json`、`papers.json.gz`、CSV、主题 Markdown 和带 SHA-256 的 manifest 都经过校验。

在线刷新：

```sh
npm run refresh:all   # 获取页面索引、官方 JSON 和缺失详情
npm run snapshot:create
```


## 在线功能

- 中英文界面，按 12 个领域、65 个主题浏览和筛选。
- 标题、作者、摘要、关键词全文搜索；主题、摘要可用性、官方/推断分类筛选。
- 分页、完整原文摘要、论文详情深链接、浏览器前进后退。
- 本地收藏、BibTeX、分享链接；筛选结果导出 CSV/JSON。
- 手机研究目录、键盘操作、错误恢复；CSV 中和可能执行的表格公式。
- 首次浏览优先加载预压缩 `papers.json.gz` 并在浏览器内流式解压；不支持解压 API 的浏览器回退到原始 JSON。

完整下载：

- [JSON：9,143 条论文](https://yifeistarwang-coder.github.io/NeurIPS-2026-Explorer/data/papers.json)
- [CSV：9,143 条论文](https://yifeistarwang-coder.github.io/NeurIPS-2026-Explorer/data/papers.csv)
- [按主题整理的完整摘要 Markdown](public/data/topics/index.md)
- [数据清单、计数、来源与文件校验值](public/data/manifest.json)

论文版权与原文内容归原作者和相应权利人所有；项目提供来源链接，不重新授权论文或摘要。

## 本地运行

需要 Node.js **22.12+**。

```sh
npm ci
npm run dev -- --port 5186 --strictPort
```

访问 <http://localhost:5186/>。仓库包含生成数据，不访问 NeurIPS 或 OpenReview 也能浏览。

```sh
npm test
npm run validate
npx playwright install chromium
npm run test:e2e
npm run build
```

Playwright 覆盖桌面和手机共 20 项：真实数据加载、全文检索、分页、收藏持久化、完整摘要、深链接、导出、分类/摘要筛选、失败重试、压缩数据回退和 320–1920px 布局。

## 数据与分类边界

- 官方非空主题原样保留，英文名称与中文索引名称分别保存。当前官方主题覆盖 2,753 条；其余使用确定性关键词评分推断。
- 推断权重：标题 5、摘要 1、多词短语 3；平分按稳定目录顺序；无匹配归入通用机器学习 / 其他。规则见 [scripts/taxonomy.mjs](scripts/taxonomy.mjs)。
- `topicSource: inferred` 明确表示规则推断，不是官方分类或人工确认标签；`officialTopic` 保留原始值。
- 每条论文一个主主题，不声称主题是互斥学科划分。
- 9,143 是官方页面/JSON 条目的去重结果，不等于人工核实的独立研究论文数。不同官方 ID 仍可能对应同一标题或同一论文。

## GitHub Actions

- **Deploy Research Explorer**：推送 `main`、PR 或手动触发；安装锁定依赖、运行数据/浏览器测试、按仓库子路径构建，非 PR 发布 GitHub Pages。
- **Refresh Official Dataset**：手动触发；恢复可复现快照，运行 `npm run collect:pages` 对账页面/JSON、补抓缺失摘要，再测试、校验、更新压缩快照并提交；之后显式触发部署。
- 刷新流程不会绕过 OpenReview 的访问验证；摘要优先使用官方页面和 JSON。若官方页面结构变化，采集器会失败而不是发布空数据。
- Pages 使用 GitHub Actions 构建模式；迁移仓库时把 Pages Source 设为 GitHub Actions，`BASE_PATH` 自动使用仓库名。

## English Summary

The requested 9,152 poster records were not 9,152 unique papers: the original JSON contained only 6,000 distinct poster IDs and 3,152 exact repeated rows. The rebuilt index reconciles the **official 9,130-entry papers page**, **13 JSON-only entries**, and **official detail pages**, producing **9,143 deduplicated entries with 9,143 original abstracts (100%)**. Of these, 7,199 abstracts come from official JSON and 1,944 from official poster detail pages; no abstract is generated.

The site defaults to the deduplicated index, supports bilingual topic navigation, full-text search, bookmarks, full abstracts, and exports. OpenReview PDF URLs remain derived and unverified; 110 entries have no OpenReview paper link. Additional tests, compressed source snapshots, SHA-256 provenance, and GitHub Pages/refresh workflows are included.
