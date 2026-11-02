# NeurIPS 2026 Research Explorer

[公开网站 / Live website](https://yifeistarwang-coder.github.io/NeurIPS-2026-Explorer/) · [部署 Actions](https://github.com/yifeistarwang-coder/NeurIPS-2026-Explorer/actions/workflows/pages.yml) · [主题摘要目录](public/data/topics/index.md)

按研究领域和主题整理 NeurIPS 2026 公开论文记录，保留原文摘要与官方来源。独立研究索引，非 NeurIPS 官方网站。

## 重要数据边界

本项目保存用户指定的 **9,152 条 Poster 源记录快照**，不把它们误报为 9,152 篇独立论文。源数据中有大量完全重复的官方 ID；另有 126 条 Oral 展示记录，不计入 Poster 记录。

| 指标 | 当前快照 |
| --- | ---: |
| Poster 源记录 | 9,152 |
| 不同官方论文事件 ID | 6,000 |
| 相同官方 ID 的重复源记录 | 3,152 |
| 不同论文来源 URL | 5,947 |
| 有原文摘要的源记录 | 6,310 |
| 缺少原文摘要的源记录 | 2,842 |
| 去重后有原文摘要的官方 ID | 4,038 |
| 去重后缺少原文摘要的官方 ID | 1,962 |
| 官方分类 / 规则推断分类（按源记录） | 3,115 / 6,037 |
| 研究大类 / 子主题 | 12 / 64 |
| 推导的 OpenReview PDF 地址（未验证） | 9,078 |
| 实际托管的论文 PDF | 0 |

**摘要没有全部补齐，PDF 没有全部下载。** OpenReview 的三种公开批量查询均返回 HTTP 403 `ChallengeRequiredError`；单篇 PDF 实测也返回 HTTP 403。本项目不会绕过验证，不会生成摘要冒充原文，也不会把推导链接标记为已验证的 PDF。状态与来源响应的 SHA-256 保存在 [manifest.json](public/data/manifest.json) 中。

不同官方 ID 也可能对应同一篇论文，因此 6,000 是“不同官方 ID 数”，不是人工核实的独立研究论文数。网站默认按官方 ID 保留首次出现的记录；筛选项可切换至全部源记录。下载文件完整保留源记录及 `sourceEventId`、`sourceOccurrence`、`duplicateOf` 等追溯字段。

官网在后续请求中已出现不同的记录总数。默认采集器会拒绝与 9,152 不同的数量，避免静默覆盖用户指定快照；审阅新源数据后可以显式接受数量变化。

## 在线浏览与下载

- 中英文界面，12 个研究领域、64 个主题的数量与分布。
- 标题、作者、摘要、关键词全文搜索；主题、摘要可用性、官方或推断分类筛选。
- 分页、完整原文摘要、论文详情深链接、浏览器前进后退。
- 本地收藏、BibTeX、分享链接；筛选结果导出 CSV 和 JSON。
- 手机研究目录、键盘操作、错误恢复；CSV 中和可能执行的表格公式。

完整数据下载：

- [JSON：全部源记录](https://yifeistarwang-coder.github.io/NeurIPS-2026-Explorer/data/papers.json)
- [CSV：全部源记录](https://yifeistarwang-coder.github.io/NeurIPS-2026-Explorer/data/papers.csv)
- [按主题整理的完整摘要 Markdown](public/data/topics/index.md)
- [数据清单、计数、来源与文件校验值](public/data/manifest.json)

论文版权与原文内容归原作者和相应权利人所有；项目提供来源链接，不重新授权论文或摘要。

## 本地运行

需要 Node.js **22.12+**。

```sh
npm ci
npm run dev -- --port 5186 --strictPort
```

访问 <http://localhost:5186/>。仓库已经包含生成的数据，不需要再次访问 NeurIPS 或 OpenReview 即可浏览。

```sh
npm test
npm run validate
npx playwright install chromium
npm run test:e2e
npm run build
```

验证范围：25 项 Node 数据与下载器测试，以及桌面、手机共 16 项 Playwright 测试。覆盖实际快照、来源校验、数量保护、分类规则、CSV 安全、PDF 完整性与续传、搜索、去重计数、分页、收藏、导出、深链接、失败重试和 320–1920px 布局。

## 可复现数据流程

压缩官方源快照位于 `data/snapshots/`。离线恢复时校验源文件 SHA-256，生成后的各文件另有独立校验值。

```sh
npm run snapshot:restore
npm run collect -- --offline
npm run validate
```

`updatedAt` 是生成本次导出文件的时间；`sources[].status` 标明使用缓存还是网络响应。离线重建不会把缓存重新声明为刚抓取的源数据。论文 JSON 可稳定复现；manifest 的生成时间会更新。

在线更新：

```sh
npm run collect
```

如果官方数量已经变化，先审阅新快照，再显式允许：

```sh
npm run collect -- --allow-count-change
npm run validate
npm run snapshot:create
```

只请求两个官方 JSON 数据源和有界的 OpenReview 批量接口，不向官网逐篇发送数千个详情页请求。429 / 5xx 和网络中断会重试退避；403 访问验证不会重试绕过。新数据先暂存、完整校验，再替换已发布数据；失败不会覆盖最后可用快照。

### 分类方法

官方非空主题原样保留，英文名称与中文索引名称分别保存。官方缺失主题时使用确定性关键词评分：标题权重 5、摘要权重 1，多词短语权重 3；平分按稳定目录次序决定，无匹配归入通用机器学习 / 其他。规则见 [scripts/taxonomy.mjs](scripts/taxonomy.mjs)。

`topicSource: inferred` 明确表示规则推断，不是官方分类或经过人工确认的标签。原始 `officialTopic` 保留。每条论文采用一个主主题，而非声称互斥的研究学科划分。

### PDF 下载工具

先确认当前环境可以合法访问论文源站。下载始终需要显式开启，不会在网站构建时运行。

```sh
npm run download:pdfs -- --download --limit 10
npm run download:pdfs -- --download --id 152636
npm run download:pdfs -- --download --all
```

PDF 默认写入被 Git 忽略的 `data/pdfs/`，按来源 URL 去重，并发最多为 2。校验 `%PDF-` 头、EOF 和文件 SHA-256；已完整下载的文件跳过，后续运行重试失败项。`downloads.json` 记录每个文件对应的论文 ID、HTTP 状态、完成状态和错误。全部下载可能需要较大的磁盘空间和时间；HTTP 403 会记为失败，而非保存成假 PDF。

## GitHub Actions

- **Deploy Research Explorer**：每次推送到 `main`、PR 或手动触发后，安装锁定依赖、运行数据和浏览器测试、按仓库子路径构建。非 PR 运行将发布 GitHub Pages。
- **Refresh Official Dataset**：在 Actions 页面手动触发，抓取官方数据、校验、更新压缩源快照并提交；再显式触发部署，因为默认 `GITHUB_TOKEN` 的 push 不会递归触发另一个工作流。
- 数据更新默认保留 9,152 数量保护。确认官方总数变化时，勾选 `accept_count_change`。没有不经审阅的定时覆盖。
- Pages 使用 GitHub Actions 构建模式，仓库设置已启用。迁移仓库时设置 Pages Source 为 GitHub Actions；`BASE_PATH` 自动使用仓库名。

## English Summary

This independent explorer preserves the requested 9,152-record public NeurIPS snapshot, including its duplicate rows. There are 6,000 distinct official event IDs, not 9,152 verified unique papers. Original abstracts are available for 6,310 source records / 4,038 distinct IDs. Missing abstracts are not synthesized. OpenReview bulk enrichment and a sample PDF request returned HTTP 403. PDF URLs are derived, unverified links; no paper PDF is hosted.

The site defaults to deduplicated browsing and supports bilingual topic navigation, full-text search, bookmarks, full abstract views, and data exports. Official topics are retained; rule-inferred labels are explicitly marked. Compressed source snapshots, SHA-256 checks, a resumable opt-in PDF downloader, focused tests, and GitHub Pages workflows are included.
