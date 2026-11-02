# Language Models &amp; NLP / Reasoning and Agents

语言模型与自然语言处理 / 推理与智能体

222 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Crafter: Towards Automated Reproducible Machine Learning via Agentic Code Generation

**Authors:** Fangru Linghu; Jackson R Ye; Jieying Wang; Alexandre V Morozov; Ian Foster; Zhao Zhang

**ID:** 151168 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cWMcK8uzFF>) | [PDF](<https://openreview.net/pdf?id=cWMcK8uzFF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151168>)

Reproducing machine learning research is challenging because many papers do not provide executable code, and key implementation details are often scattered, implicit, or missing\. Existing paper\-to\-code systems improve over direct prompting, but the generated repositories can still miss paper\-critical logic or fail at execution time\. We propose Crafter, an automated paper\-to\-code pipeline that treats reproduction as a problem of context\-calibrated implementation recovery rather than single\-pass code generation\. Crafter builds an evidence\-grounded specification, resolves missing implementation details before planning, and repairs the generated repository through execution\-aware debugging\. We evaluate Crafter with PaperBench Code\-Dev for implementation faithfulness and a self\-designed execution\-oriented benchmark for runtime readiness\. Across 23 PaperBench papers using the Claude Sonnet 4\.6 backend, Crafter achieves an average Code\-Dev score of 0\.84, improving over Paper2Code by 19\.7% and over DeepCode by 22\.1%\. In execution evaluation, Crafter reaches the contribution\-level milestone on all three repositories, compared with two for both baselines, while reducing average repair cycles from 11\.0\-\-11\.3 to 5\.0\.

## Rethinking Structured Generation: Can Graph\-Based Reasoning Resolve Ambiguity?

**Authors:** Ratun Rahman; Atit Pokharel

**ID:** 152202 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Uo6FQhB7p7>) | [PDF](<https://openreview.net/pdf?id=Uo6FQhB7p7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152202>)

Structured generation is typically formulated as a deterministic mapping from input to a single structured output\. This assumption is fundamentally misaligned with natural language, which often admits multiple structurally distinct yet semantically valid interpretations\. As a result, existing methods rely on single\-reference supervision that collapses ambiguity into one prediction, leading to unstable and inconsistent outputs under underspecified inputs\. We reformulate structured generation as an \\textit\{ambiguity\-aware inference problem\}, where the objective is to reason over a set of plausible structured outputs rather than predict a single solution\. We show that standard training inherently suppresses valid alternatives, and instead adopt a multi\-valid learning framework that preserves ambiguity during optimization\. To operationalize this formulation, we construct a candidate space of structured outputs, represent each candidate as a graph capturing entities and their relationships, and perform selection via graph\-based reasoning over semantic alignment and relational consistency\. This enables principled comparison across competing interpretations beyond token\-level likelihoods\. Experiments on structured generation benchmarks demonstrate consistent improvements in accuracy, stability, and robustness under varying levels of ambiguity\. These results highlight the importance of modeling ambiguity explicitly and suggest a shift from single\-output prediction to set\-level reasoning in structured generation\.

## Agentic AI\-Empowered Dynamic Survey Framework

**Authors:** Furkan Mumcu; Lokman Bekit; Michael Jones; Anoop Cherian; Yasin Yilmaz

**ID:** 155334 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6OtEOWbjJQ>) | [PDF](<https://openreview.net/pdf?id=6OtEOWbjJQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155334>)

Survey papers play a central role in synthesizing and organizing scientific knowledge, yet they are increasingly strained by the rapid growth of research output\. As new work continues to appear after publication, surveys quickly become outdated, contributing to redundancy and fragmentation in the literature\. We reframe survey writing as a long\-horizon maintenance problem rather than a one\-time generation task, treating surveys as living documents that evolve alongside the research they describe\. We propose an agentic Dynamic Survey Framework that supports the continuous updating of existing survey papers by incrementally integrating new work while preserving survey structure and minimizing unnecessary disruption\. Using a retrospective experimental setup, we demonstrate that the proposed framework effectively identifies and incorporates emerging research while preserving the coherence and structure of existing surveys\.

## StepBack: Step\-Level Error\-Localized Resampling for Efficient Test\-Time Reasoning

**Authors:** Yang Ouyang; Jung\-Eun Kim

**ID:** 149117 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=skhKf04svt>) | [PDF](<https://openreview.net/pdf?id=skhKf04svt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149117>)

Self\-consistency \(SC\) is a widely used decoding strategy for improving chain\-of\-thought reasoning, but it requires sampling many complete reasoning trajectories with a preset budget\. Its efficient variants reduce the cost mainly by stopping full\-trajectory sampling early or distributing the number of samples across questions\. In this paper, we propose \\textbf\{StepBack\}, a step\-level error\-localized resampling method for efficient test\-time reasoning\. Given a small set of draft trajectories, \\method localizes potential first error positions using lightweight signals and then resamples the detected error step and its suffix, followed by majority answer voting\. Our theoretical analysis explains why resampling before the localized error point can increase the probability of recovering a correct final answer\. Empirically, \\method consistently matches or exceeds SC across mathematical reasoning and multi\-hop QA benchmarks, while reducing token usage by up to 50\\%\. In addition, by nature, \\method can be combined with adaptive inference methods such as Adaptive Consistency and Early\-Stopping SC, further improving their efficiency and scalability\.

## Code2World: A GUI World Model via Renderable Code Generation

**Authors:** Yuhao Zheng; Li&amp;amp;\#x27;an Zhong; Yi Wang; Rui Dai; Kaikui Liu; Xiangxiang Chu; Linyuan Lü; Philip Torr; Kevin Qinghong Lin

**ID:** 151489 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aG2jCapnlk>) | [PDF](<https://openreview.net/pdf?id=aG2jCapnlk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151489>)

GUI agents interact with environments by perceiving interfaces and executing actions\. As a virtual sandbox, the GUI World model empowers agents with human\-like foresight by enabling action\-conditioned prediction\. However, existing text/pixel\-based approaches struggle to achieve both high visual fidelity and fine\-grained structural controllability\. To this end, we propose \\textbf\{Code2World\}, a vision\-language coder that simulates the next visual state via \\textbf\{renderable code generation\}\. Specifically,  to address the data scarcity problem, we construct \\textbf\{AndroidCode\} by translating GUI trajectories into high\-fidelity HTML and refining synthesized code through a visual\-feedback revision mechanism, yielding a corpus of \\textbf\{over 80K\} high\-quality screen\-action pairs\. To adapt existing VLMs into code prediction, we first perform SFT as a cold start for format layout following, then further apply \\textbf\{Render\-Aware Reinforcement Learning\} which uses rendered outcome as the reward signal by enforcing visual semantic fidelity and action consistency\. Extensive experiments demonstrate that Code2World\-8B achieves the top\-performing next UI prediction, rivaling the competitive GPT\-5 and Gemini\-3\-Pro\-Image\.  Notably, \\textit\{Code2World significantly enhances downstream navigation success rates in a flexible manner\}, boosting Gemini\-2\.5\-Flash by \{\+9\.5\\%\} on AndroidWorld navigation\.

## MatCurvs: Article Real\-Coordinate Curve Extraction for Agent\-Ready Materials Reasoning

**Authors:** Liang Yin; Zhan&amp;amp;\#x27;ao yao; Jiahui Shi; Songlin Yu; Jianjun Liu

**ID:** 148908 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uHECG4TS6s>) | [PDF](<https://openreview.net/pdf?id=uHECG4TS6s>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148908>)

In materials\-science papers, quantitative evidence—XRD peak shifts, Raman ID/IG ratios, high\-frequency Z′ intercepts in EIS—lives in line plots\. Hosted vision–language models describe these plots fluently but cannot recover the \(x, y\) values an agent needs to query, compare, or integrate\. We release three coupled artifacts\. MatCurvs is a real\-coordinate chart benchmark for materials\-science spectra, organized in three tiers spanning XRD, Raman, XPS, XAFS, EIS, GCD, and CV: 1,375,165 classified subfigures from 55,763 articles \(L0\); 204 panels with manual per\-curve pixel polylines \(L1\); and 8,026 verified real\-coordinate curves over 3,817 panels \(L2\)\. MatDeplot is a local extractor that recovers 45\.8% of curves within a 5\-pixel IoU tolerance against L1 ground truth, versus ≤1\.2% for the strongest hosted VLM—a 38× pixel\-anchoring gap, closed in roughly 1\.5 seconds per image\. MatCurvs\-Reasoning is a 14,740\-question deterministic numerical evaluation: feeding MatDeplot’s extracted \(x, y\) data to an LLM cuts median relative error from 54% for an image\-only VLM to about 4%, and a text LLM with the data alone matches the same VLM prompted with both image and data\. By turning each published chart into a numerically queryable curve, the released artifacts let a deployer compute derived materials parameters—Raman ID/IG disorder ratios, XRD Scherrer crystallite sizes, and phase\-purity audits—directly from a literature\-scale chart corpus, where most papers under\-report these numbers and the chart is the only available record\.

## CRANE: Constrained Reasoning Injection for Code Agents via Nullspace Editing

**Authors:** Mingzhi Zhu; Michele Merler; Raju Pavuluri; Stacy Patterson

**ID:** 155462 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5QIRV0FZpg>) | [PDF](<https://openreview.net/pdf?id=5QIRV0FZpg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155462>)

Code agents must both reason over long\-horizon repository state and obey strict tool\-use protocols\. In paired Instruct/Thinking checkpoints, these capabilities are complementary but misaligned\. The Instruct model is concise and tool\-disciplined, whereas the Thinking model offers stronger planning and recovery behavior but often over\-deliberates and degrades agent performance\. We present CRANE \(Constrained Reasoning Injection for Code Agents via Nullspace Editing\), a training\-free parameter\-editing method that treats the Thinking–Instruct delta as a directional pool of candidate reasoning edits for the Instruct backbone\. CRANE combines magnitude thresholding to denoise the delta, a Conservative Taylor Gate to retain edits that are jointly beneficial for reasoning transfer and tool\-use preservation, and Graduated Sigmoidal Projection to suppress format\-critical update directions\. By merging paired Instruct and Thinking checkpoints, CRANE delivers strong gains over either individual model while preserving Instruct\-level efficiency: on Roo\-Eval it achieves pass@1 of 66\.2% \(\+19\.5%\) for Qwen3\-30B\-A3B and 81\.5% \(\+8\.7%\) for Qwen3\-Next\-80B\-A3B; on SWE\-bench\-Verified it resolves up to 14 additional instances at both scales \(122/500 and 180/500\); and on Terminal\-Bench v2 it improves pass@1/pass@5 by up to 2\.3%/7\.8%, reaching 7\.6%/17\.9% and 14\.8%/30\.3%, respectively, consistently outperforming alternative merging strategies across all three benchmarks\.

## ChartArena: A Unified Benchmark with Atomic\-Primitive Reasoning for Chart Parsing

**Authors:** Shangpin Peng; Gengluo Li; Xingyu Wan; Chengquan Zhang; Hao Feng; Binghong Wu; Huawen Shen; Weinong Wang; Ziyi Cai; Zhuotao Tian; Han Hu; Can Ma; Yu Zhou

**ID:** 148773 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vAPXuhpYYw>) | [PDF](<https://openreview.net/pdf?id=vAPXuhpYYw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148773>)

Charts convey dense quantitative and relational information, yet general chart parsing remains challenging due to fragmented evaluation and limited structural reasoning\. Existing benchmarks focus on narrow sub\-tasks with inconsistent output formats \(e\.g\., Markdown, CSV, JSON, SVG, code\), hindering fair comparison and often overlooking real\-world scenarios such as printed or hand\-drawn photos\. Meanwhile, end\-to\-end multimodal models tend to learn shallow pixel\-to\-text mappings without explicit structure understanding, making them fragile under visual variations\. To address these issues, we present a unified framework that connects evaluation and modeling\. On the evaluation side, we introduce \*\*ChartArena\*\*, a comprehensive bilingual benchmark covering eight chart families, including both numeric charts \(bar, line, pie, radar, box plot, combination\) and diagrammatic structures \(flowchart, mind map\)\. The dataset is constructed via a human\-agent collaborative annotation pipeline, where model\-assisted drafts are refined through multi\-stage human verification to ensure structural consistency and annotation reliability\. Furthermore, we design a format\-agnostic evaluation protocol that maps different outputs into two canonical semantic spaces: a normalized triple view and a directed graph view, and evaluates them with structure\-aware metrics\. On the modeling side, we propose \*\*Chart Atomic Primitives \(CAP\)\*\*, a lightweight semantic scaffold that introduces structural inductive bias during supervised fine\-tuning\. By guiding the model to infer structure before generating outputs, CAP leads to more consistent and robust parsing behavior\. Extensive experiments show that models trained with CAP achieve reliable performance on both rendered charts and real\-world images\. Code, benchmark, and models will be made publicly available\.

## Deep Research as Rubric

**Authors:** Wangyi Mei; Zhouhong Gu; zhenhanbai; Yin Cai; Lefan Zhang; Zhenxin Ding; Bo chen; Yan Gao; YIWU; Yao Hu

**ID:** 153645 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JmP1iLzzlJ>) | [PDF](<https://openreview.net/pdf?id=JmP1iLzzlJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153645>)

Open\-ended reasoning and long\-form generation tasks lack reliable automatic verification signals for reward\-based policy optimization\. Rubrics offer a promising alternative, but existing approaches treat them as given artifacts—either hand\-crafted or prompt\-generated—and often miss the task\-specific, knowledge\-intensive dimensions that matter most, distorting the reward signal\. Our key observation is that \*rubric construction is itself a research problem\*: identifying what makes a response correct or insightful requires discovering and synthesizing external knowledge\. We propose \*\*Deep Research as Rubric \(DR\-rubric\-8B\)\*\*, a two\-stage framework for constructing such rubrics\. Stage I elicits domain facts, structural constraints, and failure modes through iterative multi\-turn agentic search; Stage II distills this evidence into atomic, independently verifiable constraints for GRPO\-based policy optimization\. Because the model under training can serve as its own rubric generator, DR\-rubric\-8B supports \*bootstrap rubric generation\* without frontier\-model assistance\. We evaluate on 6 benchmarks spanning agentic research and expert reasoning\. Experiments show that DR\-Rubric achieves strong competitive performance with only 1K–3K training instances, where GPT\-5\-generated rubrics particularly benefit breadth coverage on agentic tasks, while bootstrap rubrics exhibit a specialization\-to\-rebalancing evolution and achieve the best overall performance at the third iteration\. Results demonstrate that reframing rubric construction from static evaluation templates into an evidence\-driven research process yields more scalable, fine\-grained reward signals for open\-ended tasks\.

## PACE: A Proxy for Agentic Capability Evaluation

**Authors:** Yueqi Song; Lintang Sutawika; Jiarui Liu; Lindia Tjuatja; Jiayi Geng; Yunze Xiao; Daniel Lee; Aditya B Soni; Vincent Lo; Xiang Yue; Graham Neubig

**ID:** 148975 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tkOFdQaXLa>) | [PDF](<https://openreview.net/pdf?id=tkOFdQaXLa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148975>)

\\begin\{abstract\}  Evaluating large language model \(LLM\) agents on benchmarks like SWE\-Bench and GAIA can be expensive, time\-consuming, and requires complex infrastructure\. A single evaluation can cost thousands of dollars and take days to complete\. In contrast, non\-agentic LLM benchmarks that test individual capabilities \(e\.g\., reasoning, code generation, instruction following\) are fast and cheap to run\. We investigate whether performance on expensive agentic benchmarks can be accurately predicted by the performance on a small, carefully selected subset of atomic evaluation instances\. We introduce PACE, a framework that constructs proxy benchmarks by selecting instances from existing non\-agentic evaluations whose aggregate scores most reliably predict agentic benchmark performance\. Given a pool of candidate instances spanning atomic capabilities \(instruction following, planning, tool calling, etc\.\), PACE fits a regression that maps a model's scores on a compact subset of source instances to its score on the target agentic benchmark; the subset itself is produced by combining two complementary instance\-selection strategies, a target\-relevance local selection and a globally informative global selection\. Experiments across 14 models, 4 agentic benchmarks, and 19 non\-agentic benchmarks show that PACE\-Bench predicts agentic scores with leave\-one\-model\-out \(LOOCV\) mean absolute error \(MAE\) under $4\\%$, Spearman correlation above $0\.80$, and pairwise model\-ranking accuracy around $85\\%$, all at much less than $1\\%$ of the full agentic evaluation cost\. We further analyze the selected proxy instances, revealing what skills each agentic benchmark uniquely demands\. PACE enables practitioners to obtain reliable estimates of agentic performance during model development, selection, and routing, without the overhead of full agent evaluation\.

## Beyond What Seems Necessary: Hidden Gains from Scaling Training\-Time Reasoning Length under Outcome Supervision

**Authors:** Yihao Xue; Allan Zhang; Jianhao Huang; Amit Sahai; Baharan Mirzasoleiman

**ID:** 151533 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Zz2YaAr1JB>) | [PDF](<https://openreview.net/pdf?id=Zz2YaAr1JB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151533>)

_Abstract unavailable from the accessible public sources._

## PhysVista: Benchmarking Physical Intelligence in VLMs via a Perception\-Reasoning\-Assessment Loop

**Authors:** Xinge Peng; Yiting Lu; tianwu zhi; Wen Wen; Jianzhao Liu; Xin Li; Zhibo Chen

**ID:** 149059 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tBi8ovyQEf>) | [PDF](<https://openreview.net/pdf?id=tBi8ovyQEf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149059>)

_Abstract unavailable from the accessible public sources._

## Reasoning Warm\-up: Scaling Label\-free RL via Verifiable Surrogate Rewards

**Authors:** Jun Nie; Bo Han; Jiaqi Fan; Yonggang Zhang; Xinmei Tian; Dahai Yu; Michael Ng

**ID:** 151965 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WTnplymile>) | [PDF](<https://openreview.net/pdf?id=WTnplymile>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151965>)

_Abstract unavailable from the accessible public sources._

## Commit Then Explore: Reasoning Models Diversify, Not Converge

**Authors:** Ben Jenkins; Mihaela Cardei

**ID:** 151110 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cumW3H2I4l>) | [PDF](<https://openreview.net/pdf?id=cumW3H2I4l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151110>)

_Abstract unavailable from the accessible public sources._

## Animation2Code: Evaluating Temporal Visual Reasoning in Video\-to\-Code Generation

**Authors:** Anya Ji; Abhijith Varma Mudunuri; David Chan; Alane Suhr

**ID:** 138932 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=veADXfstkO>) | [PDF](<https://openreview.net/pdf?id=veADXfstkO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138932>)

_Abstract unavailable from the accessible public sources._

## PACE: A Proxy for Agentic Capability Evaluation

**Authors:** Yueqi Song; Lintang Sutawika; Jiarui Liu; Lindia Tjuatja; Jiayi Geng; Yunze Xiao; Daniel Lee; Aditya B Soni; Vincent Lo; Xiang Yue; Graham Neubig

**ID:** 148975\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148975

[Paper](<https://openreview.net/forum?id=tkOFdQaXLa>) | [PDF](<https://openreview.net/pdf?id=tkOFdQaXLa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148975>)

\\begin\{abstract\}  Evaluating large language model \(LLM\) agents on benchmarks like SWE\-Bench and GAIA can be expensive, time\-consuming, and requires complex infrastructure\. A single evaluation can cost thousands of dollars and take days to complete\. In contrast, non\-agentic LLM benchmarks that test individual capabilities \(e\.g\., reasoning, code generation, instruction following\) are fast and cheap to run\. We investigate whether performance on expensive agentic benchmarks can be accurately predicted by the performance on a small, carefully selected subset of atomic evaluation instances\. We introduce PACE, a framework that constructs proxy benchmarks by selecting instances from existing non\-agentic evaluations whose aggregate scores most reliably predict agentic benchmark performance\. Given a pool of candidate instances spanning atomic capabilities \(instruction following, planning, tool calling, etc\.\), PACE fits a regression that maps a model's scores on a compact subset of source instances to its score on the target agentic benchmark; the subset itself is produced by combining two complementary instance\-selection strategies, a target\-relevance local selection and a globally informative global selection\. Experiments across 14 models, 4 agentic benchmarks, and 19 non\-agentic benchmarks show that PACE\-Bench predicts agentic scores with leave\-one\-model\-out \(LOOCV\) mean absolute error \(MAE\) under $4\\%$, Spearman correlation above $0\.80$, and pairwise model\-ranking accuracy around $85\\%$, all at much less than $1\\%$ of the full agentic evaluation cost\. We further analyze the selected proxy instances, revealing what skills each agentic benchmark uniquely demands\. PACE enables practitioners to obtain reliable estimates of agentic performance during model development, selection, and routing, without the overhead of full agent evaluation\.

## ARCANA: A Benchmark for Abstraction and Analogical Reasoning

**Authors:** Ruqi Chen; Wei Wang; Zilei Wang

**ID:** 153989 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H30SaXZgYu>) | [PDF](<https://openreview.net/pdf?id=H30SaXZgYu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153989>)

_Abstract unavailable from the accessible public sources._

## Reading Between the Dots: Decoding Hidden Computation across Filler Tokens

**Authors:** Kaley Brauer; Claudio Mayrink Verdun; Samuel Marks

**ID:** 153275 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MSvjzJxTk3>) | [PDF](<https://openreview.net/pdf?id=MSvjzJxTk3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153275>)

Frontier LLMs can perform multi\-step reasoning over content\-free filler tokens like dots or counting sequences, producing correct answers with no visible chain\-of\-thought \(CoT\)\. This has been cited as a limit case for CoT monitorability: if the surface tokens carry no information about the reasoning, behavioral oversight has nothing to read\. But hidden from the output is not the same as hidden from us\. On three task families spanning fact retrieval, parallel numeric composition, and string manipulation, two open\-weights frontier models \(DeepSeek V3, Kimi K2\) compute over filler tokens in a structured, legible way\. Attention routes the question through the filler region to the answer, KV\-cache transplants at only filler positions causally swap the model's output between examples, and logit\-lens readouts reveal a temporal structure in which retrieved facts appear early and their composition crystallizes in late layers\. We then introduce an unsupervised decoding pipeline that takes only hidden states as input and recovers intermediate values with 80–95\\% accuracy with the strongest LLM judge across both models and all three tasks, without ground\-truth labels or training\. Hidden computation that defeats behavioral CoT monitoring is, on these tasks, directly readable from the residual stream\. This suggests that monitorability should be understood as a property of the model's full computational trace, not just its surface tokens\.

## ToolCUA: Towards Optimal GUI\-Tool Path Orchestration for Computer Use Agents

**Authors:** XuHao Hu; Xi Zhang; Haiyang Xu; Kyle Qiao; Jingyi Yang; Xuanjing Huang; Jing Shao; Ming Yan; Jieping Ye

**ID:** 154043 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Geiw1NtYWx>) | [PDF](<https://openreview.net/pdf?id=Geiw1NtYWx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154043>)

Computer Use Agents \(CUAs\) can act through both atomic GUI actions \($\\textit\{e\.g\., click, type\}$\) and high\-level tool calls \($\\textit\{e\.g\., API\-based file operations\}$\), but they are often confused by this hybrid action space: they do not know when to continue with GUI actions and when to switch to tools, and finally fail to select the optimal execution path\. We view this orchestration problem as GUI\-Tool path selection: deciding when the agent should continue with GUI actions and when it should switch to tool calls to form an effective execution trajectory\. This difficulty stems from two issues\. First, high\-quality interleaved GUI\-Tool trajectories are scarce, and collecting real tool trajectories is expensive and brittle\. Second, existing supervision provides limited guidance for GUI\-Tool path selection, as most methods focus on step\-level action imitation or final task completion and offer little trajectory\-level feedback on whether GUI\-Tool switching leads to a more effective execution path\. In this paper, we propose $\\textbf\{ToolCUA\}$,  an end\-to\-end agent designed to learn optimal GUI\-Tool path selection through a staged training paradigm\. We first introduce an $\\textbf\{Interleaved GUI\-Tool Trajectory Scaling Pipeline\}$ that repurposes abundant static GUI trajectories and synthesizes a grounded library of tools, making it possible to scale diverse GUI\-Tool trajectories without manual engineering or real tool\-trajectory collection\.Based on this data, we perform Tool\-Bootstrapped GUI RFT, which combines warmup SFT with single\-turn RL to improve decisions at critical GUI\-Tool switching points\. Finally, we further optimize ToolCUA with $\\textbf\{Online Agentic RL\}$ in a high\-fidelity GUI\-Tool environment, using a Tool\-Efficient Path Reward that encourages both appropriate tool use and shorter execution paths\. Experiments on OSWorld\-MCP show that ToolCUA achieves 46\.85% accuracy and outperforms the baseline by over 60% relatively, establishing a new state of the art among models of comparable scale\. It also improves by 3\.9% over GUI\-only settings, demonstrating effective GUI\-Tool orchestration\. The results further suggest that training in a hybrid action space is a promising paradigm for real\-world digital agents\.

## Training Agent to Scale Inference\-Time Reasoning

**Authors:** Yunzhe Qi; Sirui Chen; Jiaru Zou; Yanjun Zhao; Mengting Ai; Jingrui He

**ID:** 154824 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AgveNA7n1G>) | [PDF](<https://openreview.net/pdf?id=AgveNA7n1G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154824>)

_Abstract unavailable from the accessible public sources._

## Measuring Weak\-to\-Strong Legibility of Reasoning Models

**Authors:** Dani Roytburg; Shreya Sridhar; Daphne Ippolito

**ID:** 153826 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IR4nD1PK12>) | [PDF](<https://openreview.net/pdf?id=IR4nD1PK12>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153826>)

_Abstract unavailable from the accessible public sources._

## Tools as Continuous Flow for Evolving Agentic Reasoning

**Authors:** Tairan Huang; Siyu Shang; Qiang Chen; Xiu Su; Yi Chen

**ID:** 155860 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2MsbN9cHvM>) | [PDF](<https://openreview.net/pdf?id=2MsbN9cHvM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155860>)

_Abstract unavailable from the accessible public sources._

## Geometric Signatures of Reasoning: A Spectral Perspective on Task Hardness

**Authors:** Aria Masoomi; Mahsa Bazzaz; Adel Javanmard; Vahab Mirrokni

**ID:** 151728 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YXX4DOee43>) | [PDF](<https://openreview.net/pdf?id=YXX4DOee43>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151728>)

_Abstract unavailable from the accessible public sources._

## Convex Compositional Reasoning Models

**Authors:** Meir Roketlishvili; Semen Semenov; Maksim Bobrin; Viktor Kovalchuk; Albert Baichorov; Abduragim Shtanchaev; Fakhri Karray; Dmitry V\. Dylov; Martin Takac; Arip Asadulaev

**ID:** 152956 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P8NrHa7X4l>) | [PDF](<https://openreview.net/pdf?id=P8NrHa7X4l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152956>)

_Abstract unavailable from the accessible public sources._

## FlowSteer: Towards Agents Designing Agentic Workflows via Reinforced Progressive Canvas Editing

**Authors:** Mingda Zhang; Wenjin Liu; Tiesunlong Shen; Qika Lin; Rui Mao; Erik Cambria; Xiaoying Tang; Haoran Luo

**ID:** 152705 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=R0wivLiPfK>) | [PDF](<https://openreview.net/pdf?id=R0wivLiPfK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152705>)

_Abstract unavailable from the accessible public sources._

## ANCHOR: Audio\-Visually Grounded Chain\-of\-Thought Reasoning Benchmark

**Authors:** Joel Julin; Souraja Kundu; Liza Dahiya; George Z Wei; Louise Xie; Jingru Yi; Xu Zhang; Hao Yang; László Jeni

**ID:** 139276 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a4PqqhFMnJ>) | [PDF](<https://openreview.net/pdf?id=a4PqqhFMnJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139276>)

_Abstract unavailable from the accessible public sources._

## HomeFlow: A Data Flywheel for Smart Home Agent Training with Verifiable Simulation

**Authors:** Yi Gu; Huacan Wang; Shuo Zhang; Yuqing Hou; Xuelei; weipeng\.ming; Chen Liu; Fangzhou Yu; Kuan Li; Ronghao Chen; Sen Hu; Mou X Feng; Yi Xu

**ID:** 153647 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jm1U7gkn7r>) | [PDF](<https://openreview.net/pdf?id=Jm1U7gkn7r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153647>)

Large language mode agents are moving beyond text\-only interaction toward physical\-world control, with smart homes as a representative domain\. Real domestic interaction requires understanding ambiguous intents, operating in dynamic environments, and performing multi\-turn reasoning\. However, existing methods struggle to generate high\-quality training data for smart home agents\. We propose HomeFlow, a verifiable data flywheel for this domain\. HomeFlow uses HomeEnv as a unified simulation environment and HomeMaker to procedurally generate diverse home settings\. Subsequently, Blueprint compiles open\-ended user intents into executable state\-based success conditions, while MCTS\-Flow synthesizes diverse, verifiable multi\-turn trajectories through environment\-guided tree search\. We then optimize the agents via supervised fine\-tuning and step\-wise RLVE, which facilitates iterative improvement through authentic physical feedback\. We further construct SmartHome\-Bench to evaluate the agent across various smart home tasks\. On this benchmark, HomeFlow\-RL\-4B and HomeFlow\-RL\-8B achieve task success rates of 84\.60\\% and 87\.03\\%\. It is worth noting that HomeFlow\-RL\-8B even surpasses the leading GPT\-5\.5 by 1\.23 percentage points\.

## interwhen: A Generalizable Framework for Steering Reasoning Models with Test\-time Verification

**Authors:** Vishak K Bhat; Prateek Chanda; Vijval Ekbote; Ashmit Khandelwal; Maitreyi Swaroop; Subbarao Kambhampati; Vineeth N Balasubramanian; Nagarajan Natarajan; Amit Sharma

**ID:** 154546 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Cl5QbTUZrf>) | [PDF](<https://openreview.net/pdf?id=Cl5QbTUZrf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154546>)

Reasoning models produce long traces of intermediate decisions and tool calls, making test\-time verification increasingly important for ensuring correctness\. Existing approaches either verify only the final answer, which misses early errors, or rely on branch\-and\-verify strategies that explore multiple trajectories at substantially higher compute cost\. We introduce interwhen, a single\-trajectory verification framework that steers model behavior by providing feedback on intermediate reasoning traces\. It addresses two key challenges\. First, given a set of verifiers, obtaining verifiable states from the reasoning trace typically requires prompt engineering or external task decomposition into fixed steps, which can constrain the model's reasoning strategy\. Instead, we propose a monitoring system that periodically polls the reasoning trace and forks inference of the reasoning model to recover intermediate states\. Verifiers are run asynchronously alongside generation, adding negligible overhead on correct executions and intervening only when violations occur\. Second, beyond math and code, a central challenge for process verification is the scarcity of verifiers\. interwhen addresses this through automatic verifier synthesis from natural\-language policy documents\. Given a policy, it can generate code\-based verifiers, including provably correct verifiers in Lean and Z3\. Together, these contributions yield a plug\-and\-play system for policy\-grounded, formally verified process supervision of any reasoning agent\. On reasoning benchmarks where policies encode mathematical or logical constraints, interwhen\-based steering achieves near\-perfect accuracy for reasoning models using a fraction of the token compute of test\-time verification baselines\. On agentic benchmarks with policy\-based verifier generation, it enables significant improvements in task quality for SLMs without any finetuning; e\.g\., the task completion rate of Qwen3\-30B jumps from 32% to 87% on the telecom domain in tau^2\-bench\.

## Med\-Agentic: Distilling Agentic Medical Reasoning with Internalized Meta\-Capabilities

**Authors:** Yucheng Zhou; Junwei Sheng; Jianbing Shen

**ID:** 153012 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OddJPCN8CO>) | [PDF](<https://openreview.net/pdf?id=OddJPCN8CO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153012>)

_Abstract unavailable from the accessible public sources._

## DocAtlas: Long\-Document Understanding as Mutable\-State Interaction

**Authors:** Hongchen Wei; Yuanzhe Wang; Bei Liu; Yifan Yang; Qi Dai; Kai Qiu; Yunsheng Li; Dongdong Chen; Chong Luo; Zhenzhong Chen; Baining Guo

**ID:** 148605 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wV6e00cQ2S>) | [PDF](<https://openreview.net/pdf?id=wV6e00cQ2S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148605>)

Long\-document understanding requires models to find and combine evidence across many pages, layouts, tables, figures, and charts\. Existing retrieval\-augmented systems usually select evidence from a static index before generation, while recent agentic systems add multi\-turn tool use but often rely on frozen proprietary backbones whose behavior is set by prompts\. We present DocAtlas, a system that treats long\-document understanding as a mutable\-state information\-seeking process\. We instantiate DocAtlas as a mutable document harness: an external environment that determines what document information is searched, read, stored, reviewed, and shown to the model at each step\. Given a document and question, the harness exposes search, reading, note\-taking, and review tools, maintains a hierarchical tree and note store, and updates both as the agent records evidence\. DocAtlas combines self\-improving retrieval, selective evidence access, and active working memory under a fixed context budget\. The same harness supports inference\-time use with large VLMs and end\-to\-end reinforcement learning for compact VLM agents\. With GPT\-5\.4, DocAtlas reaches 71\.4\\% on MMLongBench\-Doc, exceeding the human\-expert reference of 65\.8\\%\. A Qwen3\.5\-4B VLM trained with end\-to\-end RL in the DocAtlas environment reaches 63\.7\\%, compared with a 54\.4\\% direct\-input baseline, showing that mutable document\-harness design can improve compact document agents by a large margin\.

## StreamGaze: Gaze\-Guided Temporal Reasoning and Proactive Understanding in Streaming Videos

**Authors:** Daeun Lee; Subhojyoti Mukherjee; Branislav Kveton; Ryan Rossi; Viet Lai; David Seunghyun Yoon; Trung Bui; Franck Dernoncourt; Mohit Bansal

**ID:** 139777 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5OWuaFLDP6>) | [PDF](<https://openreview.net/pdf?id=5OWuaFLDP6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139777>)

_Abstract unavailable from the accessible public sources._

## LatentUM: Unleashing the Potential of Interleaved Cross\-Modal Reasoning via a Latent\-Space Unified Model

**Authors:** Jiachun Jin; Zetong Zhou; Xiao Yang; Hao Zhang; Pengfei Liu; Jun Zhu; Zhijie Deng

**ID:** 151424 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aoP7r2nyxb>) | [PDF](<https://openreview.net/pdf?id=aoP7r2nyxb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151424>)

_Abstract unavailable from the accessible public sources._

## RoutingBench: Can Agentic Routing Analysis Scale to Production Datacenter Networks?

**Authors:** Wenlong Ding; Zhixiong Niu; Jianan Yang; Fajun Zhang; Bo Zhang; Ling Liang; Yongqiang Xiong; Tianyin Xu; Hong Xu

**ID:** 139370 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ULnWcFkFGp>) | [PDF](<https://openreview.net/pdf?id=ULnWcFkFGp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139370>)

Recent advances in AI models and agentic technologies make AI for network operations \(NetOps\) within reach\. However, scalability remains a key bottleneck of agentic NetOps when analyzing hyperscale networks, which comprise hundreds of datacenters, each housing thousands of network devices\. The scalability challenge is rooted in the requirement of many NetOps tasks that must conduct global reasoning on how a local change of device behavior affects all relevant routing paths, known as routing\-path analysis\. This paper studies this scalability problem and evaluates how different agentic approaches, namely in\-context learning, iterative reasoning, and agent skills, can scale routing\-path analysis to large, complex networks\. We present RoutingBench for evaluating agentic routing\-path analysis, with varying network size and complexity, for various types of device changes\. Our results show that agentic analysis is promising—agent skills curated with a principle termed “explore more; digest less” enables routing\-path analysis on hyperscale networks of 50K routers with an accuracy of 99\.5%, significantly outreaching the scalability of traditional symbolic analysis\. Meanwhile, RoutingBench also reveals the boundary of AI agent capability on complex inter\-datacenter networks and compound changes, posing open challenges for AI and agentic research\.

## Why Decoding Sharpens Without Resolving: Lock\-in and Confusion in Autoregressive Reasoning

**Authors:** Nan Zhang; Heng Xu

**ID:** 150729 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fqnkZh97lu>) | [PDF](<https://openreview.net/pdf?id=fqnkZh97lu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150729>)

Autoregressive reasoning traces often sharpen as they unfold\-\-\-entropy falls and token probabilities concentrate\-\-\-suggesting decoding is resolving uncertainty\. Yet the same pattern persists after clear reasoning errors\. We analyze decoding through the conditional posterior it induces over \*branches\*\-\-\-equivalence classes of continuations under any chosen notion of "resolution"\-\-\-and show that a mismatch between token selection and branch resolution produces two regimes: \*lock\-in\*, where top tokens remain branch\-evidential and reinforce commitment, and \*confusion\*, where branch\-specific residuals self\-average and top tokens become weakly diagnostic\. Two observable consequences follow: entropy may fall while unresolved support stays elevated, and greedy token selection has opposite informational effects across regimes\. We confirm these theoretical predictions across multiple open\-weight models and reasoning benchmarks\.

## Beyond What Seems Necessary: Hidden Gains from Scaling Training\-Time Reasoning Length under Outcome Supervision

**Authors:** Yihao Xue; Allan Zhang; Jianhao Huang; Amit Sahai; Baharan Mirzasoleiman

**ID:** 151533\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151533

[Paper](<https://openreview.net/forum?id=Zz2YaAr1JB>) | [PDF](<https://openreview.net/pdf?id=Zz2YaAr1JB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151533>)

_Abstract unavailable from the accessible public sources._

## PhysVista: Benchmarking Physical Intelligence in VLMs via a Perception\-Reasoning\-Assessment Loop

**Authors:** Xinge Peng; Yiting Lu; tianwu zhi; Wen Wen; Jianzhao Liu; Xin Li; Zhibo Chen

**ID:** 149059\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149059

[Paper](<https://openreview.net/forum?id=tBi8ovyQEf>) | [PDF](<https://openreview.net/pdf?id=tBi8ovyQEf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149059>)

_Abstract unavailable from the accessible public sources._

## Reasoning Warm\-up: Scaling Label\-free RL via Verifiable Surrogate Rewards

**Authors:** Jun Nie; Bo Han; Jiaqi Fan; Yonggang Zhang; Xinmei Tian; Dahai Yu; Michael Ng

**ID:** 151965\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151965

[Paper](<https://openreview.net/forum?id=WTnplymile>) | [PDF](<https://openreview.net/pdf?id=WTnplymile>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151965>)

_Abstract unavailable from the accessible public sources._

## Commit Then Explore: Reasoning Models Diversify, Not Converge

**Authors:** Ben Jenkins; Mihaela Cardei

**ID:** 151110\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151110

[Paper](<https://openreview.net/forum?id=cumW3H2I4l>) | [PDF](<https://openreview.net/pdf?id=cumW3H2I4l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151110>)

_Abstract unavailable from the accessible public sources._

## Animation2Code: Evaluating Temporal Visual Reasoning in Video\-to\-Code Generation

**Authors:** Anya Ji; Abhijith Varma Mudunuri; David Chan; Alane Suhr

**ID:** 138932\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138932

[Paper](<https://openreview.net/forum?id=veADXfstkO>) | [PDF](<https://openreview.net/pdf?id=veADXfstkO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138932>)

_Abstract unavailable from the accessible public sources._

## SpatialClaw: Rethinking Action Interface for Agentic Spatial Reasoning

**Authors:** Seokju Cho; Ryo Hachiuma; Abhishek Badki; Hang Su; Byung\-Kwan Lee; Chan Hee Song; Sifei Liu; Subhashree Radhakrishnan; Seungryong Kim; Frank Wang; Min\-Hung Chen

**ID:** 149047 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tHCYfFr3sR>) | [PDF](<https://openreview.net/pdf?id=tHCYfFr3sR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149047>)

Spatial reasoning, the ability to determine where objects are, how they relate, and how they move in 3D, remains a fundamental challenge for vision\-language models \(VLMs\)\. Tool\-augmented agents attempt to address this by augmenting VLMs with specialist perception modules, yet their effectiveness is bounded by the \*action interface\* through which those tools are invoked\. In this work, we study how the design of this interface shapes the agent's capacity for open\-ended spatial reasoning\. Existing spatial agents either employ single\-pass code execution, which commits to a full analysis strategy before any intermediate result is observed, or rely on a structured tool\-call interface that often offers less flexibility for freely composing operations or tailoring the analysis to each task\. Both designs offer limited flexibility for open\-ended, complex 3D/4D spatial reasoning\. We therefore propose \*\*SpatialClaw\*\*, a training\-free framework for spatial reasoning that adopts code as the action interface\. \*\*SpatialClaw\*\* maintains a stateful Python kernel pre\-loaded with input frames and a suite of perception and geometry primitives, letting a VLM\-backed agent write one executable cell per step conditioned on all prior outputs, enabling the agent to flexibly compose and manipulate perception results and adapt its analysis to both intermediate text and visual observations and the demands of each problem\. Evaluated across \*\*20 spatial reasoning benchmarks\*\* spanning a broad range of static and dynamic 3D/4D spatial reasoning tasks, \*\*SpatialClaw\*\* achieves 59\.9% average accuracy, outperforming the recent spatial agent by \*\*\+13\.6 points\*\*, with consistent gains across six VLM backbones from two model families \*without any benchmark\- or model\-specific adaptation\*\.

## Before Words, Beyond Speech: Evaluating Nonverbal Social Reasoning in Early Childhood

**Authors:** Marie Huynh; Laura Bravo\-Sánchez; Lauren K Dubin; Nick Haber; Philip A Fisher; Serena Yeung\-Levy

**ID:** 139741 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7C5CgIiHcA>) | [PDF](<https://openreview.net/pdf?id=7C5CgIiHcA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139741>)

Children's earliest years are a period of intense social learning, during which meaning is built through gaze, gesture, and physical contact\. Yet, this critical aspect of social interaction remains under\-evaluated in multimodal video understanding, as existing benchmarks prioritize the conversation\-driven interactions of adults\. We address this gap with NEST \($\\textbf\{N\}$aturalistic $\\textbf\{E\}$arly\-childhood $\\textbf\{S\}$ocial in$\\textbf\{T\}$eractions\), the first child\-centric benchmark for nonverbal social reasoning\. NEST comprises 1,208 manually annotated clips \($\\sim$12s\) curated for diversity across naturalistic settings, cultural contexts, and developmental stages\. Beyond a lack of data, targeted model improvement in this domain is hindered by coarse evaluation schemas that conflate basic perception with higher\-order reasoning\. To resolve this, NEST introduces a compositional schema that builds atomic interaction cues into progressive levels of social reasoning: contextual, behavioral, interpersonal, and open\-ended descriptions\. Extensive analysis of state\-of\-the\-art Vision\-Language Models \(VLMs\) reveals a stark performance collapse: despite strong contextual recognition, models exhibit substantial gaps in decoding precise behavioral and interpersonal cues\. We trace these failures to specific biases, including poor consequence grounding and temporal sensitivity\. Finally, we ground NEST in real\-world applications by evaluating VLMs using domain adaptation strategies\. Ultimately, NEST provides a rigorous testbed for advancing socially grounded artificial intelligence in early childhood\. The dataset and code will be publicly released\.

## Rebellious Student: Reversing Teacher Signals for Reasoning Exploration with Self\-Distilled RLVR

**Authors:** Jeonghye Kim; Jiwon Jeon; Dongsheng Li; Yuqing Yang

**ID:** 150786 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fPPlV9ktuR>) | [PDF](<https://openreview.net/pdf?id=fPPlV9ktuR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150786>)

Self\-distillation has emerged as a powerful framework for post\-training LLMs, where a teacher conditioned on extra information guides a student without it, both from the same model\. While this guidance is useful when the student has failed, on successful rollouts, the same mechanism instead overwrites the student's choices and suppresses it's own reasoning\. Therefore, we propose reading the original self\-distillation signal in reverse: when the student succeeds along a path the teacher would not have predicted, these tokens reflect its self\-driven reasoning\. Building on this, we propose RLRT \(RLVR with Reversed Teacher\), which augments GRPO by reinforcing these tokens on correct rollouts\. We interpret this as a new form of exploration in RLVR: not uniform diversity, but valuable exploration grounded in the student's own success\. Across base, instruction\-tuned, and thinking\-tuned Qwen3 checkpoints, RLRT substantially outperforms self\-distillation and exploration\-based baselines, establishing information asymmetry as a new, principled design axis for RLVR\.

## Git Context Controller: Manage the Context of Agents by Agentic Git

**Authors:** Junde Wu; Minhao Hu; Jiayuan Zhu; Shengda Zhu; Jiazhen Pan; Fenglin Liu; Yuyuan Liu; Min Xu; Yueming Jin

**ID:** 152398 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TOI57aH7Gz>) | [PDF](<https://openreview.net/pdf?id=TOI57aH7Gz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152398>)

Large language model \(LLM\) agents have demonstrated strong capabilities in long\-horizon tasks by interleaving reasoning with tool use\. However, as these agents scale to complex workflows such as software engineering and open\-ended research, context management becomes a fundamental bottleneck: interaction histories grow unbounded, become costly to maintain, and are difficult to reuse across sessions and agents\. We introduce \\textbf\{Git\-Context\-Controller \(GCC\)\}, a structured context management framework inspired by software version control systems\. GCC elevates agent context from a transient token stream to a persistent, navigable memory workspace with explicit operations\-\-\-\\texttt\{COMMIT\}, \\texttt\{BRANCH\}, \\texttt\{MERGE\}, and \\texttt\{CONTEXT\}, that enable milestone\-based checkpointing, isolated exploration of alternative reasoning paths, and hierarchical retrieval of historical context\. By organizing agent memory as a versioned file system, GCC allows agents to manage long\-term goals, recover and transfer reasoning across sessions, and coordinate multi\-trajectory problem solving in a principled manner\. Empirically, agents equipped with GCC achieve state\-of\-the\-art performance on both SWE\-Bench and BrowseComp benchmarks\. On SWE\-Bench Verified, GCC improves task resolution by over 13\\% relative to strong long\-context baselines and outperforms 26 existing open and commercial systems, reaching over 80\\% success rate\. The project will be open\-sourced for the research community\.

## PatternBloom: Empowering Agentic RAG with Externalized RL\-Distilled Graph Patterns

**Authors:** Yi Ge; Heng Huang

**ID:** 152560 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SDljMGVCMp>) | [PDF](<https://openreview.net/pdf?id=SDljMGVCMp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152560>)

Reinforcement\-learning\-trained agents for retrieval\-augmented generation retrieve content \(passages, knowledge\-graph fragments, or hyperedges\) and supervise training with outcome rewards on the final answer\. Across these paradigms the reasoning route through retrieved content never leaves the language model's hidden state, conflating declarative knowledge with the procedural knowledge that recurs across queries of the same logical type; content\-only methods consequently plateau as reasoning depth grows\. We then introduce PatternBloom, an agentic RAG framework that shifts the unit of retrieval from content \(what to read\) to logic \(how to reason\)\. A first RL stage scores the agent's constructed evidence graph by a frozen oracle's information gain through the Information\-Density Reward \(IDR\), a size\-normalized mutual\-information surrogate\. High\-reward trajectories are distilled into a Graph Pattern Memory \(GPM\) of type\-abstracted reasoning skeletons, and a second RL stage uses the Pattern\-Augmented Reward \(PAR\) to couple policy to memory, turning procedural reasoning into a learnable, externalized structural prior\. A 7B PatternBloom outperforms 27 baselines by \+15\.0 Avg\-OOD EM, with the gain compounding with reasoning depth precisely because procedural knowledge, once distilled, is reused rather than re\-derived at every query\.

## On the Information Loss of Multi\-Token Prediction: Origin and Solution

**Authors:** Tangyu Jiang; Zhanke Zhou; Haodi Wang; Yiu\-ming Cheung; Xiaohua Jia; Bo Han

**ID:** 148174 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zjAVLNtSaV>) | [PDF](<https://openreview.net/pdf?id=zjAVLNtSaV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148174>)

Multi\-token prediction \(MTP\) accelerates autoregressive decoding through blockwise prediction, but remains vulnerable to error accumulation across sequentially generated blocks\. Existing work primarily focuses on improving MTP’s acceleration ratio while largely overlooking the compounding errors that accumulate during block\-wise generation\. In this work, we study MTP from an information\-theoretic perspective and identify the strength of inter\-block dependencies as a key factor governing its performance\. Building on the cumulative information loss, we theoretically quantify the gap of block\-sequence representation\. Motivated by the analysis, we propose Dual\-MTP, a novel MTP training framework that explicitly models inter\-block dependencies from two complementary perspectives, thus reducing the block\-sequence representation gap across decoding steps\. Specifically, Dual\-MTP introduces a dual\-perspective training objective with random masking, where each block is jointly trained for forward prediction and masked context reconstruction, encouraging robust block\-level representations\. Experiments across five model backbones and six tasks spanning math reasoning and GLUE understanding show that Dual\-MTP consistently outperforms standard MTP on both quality and efficiency, attaining the highest average accuracy on every backbone with gains of \+0\.3 to \+3\.0 points and a 1\.4× to 1\.9× wall\-clock speedup over standard autoregressive decoding\.

## Visual Harness: Grounding Multimodal Reasoning in Physics Engines

**Authors:** Chentao Cao; Zhanke Zhou; Sangni Duan; Bo Han; Hang Li

**ID:** 153471 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L6id31iRwA>) | [PDF](<https://openreview.net/pdf?id=L6id31iRwA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153471>)

Multimodal agents struggle with physical\-world reasoning, particularly spatial reasoning from partial views, as the physical world is inherently complex\.  We think multimodal agentic reasoning about the physical world should ground its actions in deterministic feedback, rather than rely solely on internal imagination\. Concretely, we propose to equip vision–language models \(VLMs\) with a physics engine \(e\.g\., MuJoCo, UE5\), which simulates the consequences of the agent's actions\. However, granting the agent raw access to a physics engine is not sufficient, as the agent must first reconstruct the scene inside the physics engine\. We therefore introduce the Visual Harness System, an orchestration system that decouples perception from reasoning with a physics engine as the backend\. The perception module composes off\-the\-shelf perception skills, such as camera\-pose estimation, open\-vocabulary detection, and metric depth, into a structured scene map\. The reasoning module then issues multi\-turn tool calls that the engine executes over the map, and composes the final answer from the grounded feedback it receives\.  Experiments on spatial reasoning benchmarks show that our approach consistently outperforms strong baselines across both open\- and closed\-weight VLMs, with up to $16\.57\\%$ improvement over prior methods on the MindCube benchmark\.

## RewardFlow: Topology\-Aware Reward Propagation on State Graphs  for Agentic RL with LLMs

**Authors:** Xiao Feng; Bo Han; Zhanke Zhou; Jiaqi Fan; Jiangchao Yao; Ka H Li; Dahai Yu; Michael Ng

**ID:** 148702 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vgqdqXYwsC>) | [PDF](<https://openreview.net/pdf?id=vgqdqXYwsC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148702>)

Reinforcement learning \(RL\) shows promise for enhancing LLM agentic reasoning capabilities with external environments\. However, sparse terminal rewards hinder fine\-grained, state\-level optimization\. Although process reward modeling offers a promising alternative, training dedicated reward models often entails substantial computational costs, risks reward hacking, and faces annotation bottlenecks\. To address these challenges, we introduce \*RewardFlow\*, a lightweight method for estimating state\-level rewards for agentic reasoning\. \*RewardFlow\* leverages the intrinsic topological structure of states within trajectories by constructing state graphs\. This enables topology\-aware graph propagation to estimate state\-wise contributions to success, yielding principled, annotation\-free state\-level rewards\. As dense rewards for RL optimization, \*RewardFlow\* substantially outperforms prior RL baselines across four agentic benchmarks, with average success\-rate gains of \+6\.2\\% on text\-based benchmarks and \+29\.7\\% on visual reasoning over the strongest baseline across three model scales, and over \+10\\% accuracy improvement on DeepResearch, while demonstrating superior robustness and training efficiency\.

## Model\-Adaptive Tool Necessity Reveals the Knowing\-Doing Gap in LLM Tool Use

**Authors:** Yize Cheng; Chenrui Fan; Mahdi JafariRaviz; Keivan Rezaei; Soheil Feizi

**ID:** 154208 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FOB5jQeZaa>) | [PDF](<https://openreview.net/pdf?id=FOB5jQeZaa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154208>)

Large language models \(LLMs\) increasingly act as autonomous agents that must decide when to answer directly vs\. when to invoke external tools\. Prior work studying adaptive tool use has largely treated tool necessity as a model\-agnostic property, annotated by human or LLM judge, and mostly cover cases where the answer is obvious \(e\.g\., fetching   the weather vs\.\\ paraphrasing text\)\.    However, tool necessity in the wild is more nuanced due to the divergence of capability boundaries across models: a problem solvable by a strong model on its own may still require tools for a weaker one\.   In this work, we introduce a model\-adaptive definition of tool\-necessity, grounded in each   model's empirical performance\. Following this definition, we compare the necessity against observed tool\-call behavior across four models on arithmetic and factual QA dataset, and find substantial mismatches of 26\.5–54\.0\\% and 30\.8–41\.8\\%, respectively\.   To diagnose the failure, we decompose tool use into two stages: an internal cognition stage that reflects whether a model believes a tool is necessary, and an execution stage that determines whether the model actually makes a tool\-call action\.    By probing the LLM hidden states, we find that both signals are often linearly decodable, yet their probe directions become nearly orthogonal in the late\-layer, last\-token regime that drives the next\-token action\.    By tracing the trajectory of samples in the two\-stage process, we further discover that the majority of mismatch is concentrated in the cognition\-to\-action transition, not in cognition itself\. These results reveal a knowing\-doing gap in LLM tool\-use: improving tool\-use reliability requires not only better recognition of when tools are needed, but also better translation of that recognition into action\.

## RSPO: Reasoning\-Supervised Policy Optimization for Long\-Tail Autonomous Driving

**Authors:** Jiayi Guan; jing wu; Jianhua Wu; Jinghui Lu; Zhijian Huang; Guang Li; Xiaoshuai Hao; Hanbing Li; Yigu Ge; Tao Xu; Haiyang Sun; Bing Wang; Guang Chen; Kuiyuan Yang; Hangjun Ye; Long Chen

**ID:** 153743 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=J3cKSlk1K3>) | [PDF](<https://openreview.net/pdf?id=J3cKSlk1K3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153743>)

Vision\-Language Models \(VLMs\) have achieved remarkable advances in general autonomous driving\. Nevertheless, effectively exploiting the reasoning capability of Chain\-of\-Thought \(CoT\) to enhance the robustness and accuracy of decision and planning in long\-tail scenarios still remains a challenging open problem\. To this end, we propose a \\textbf\{R\}easoning\-\\textbf\{S\}upervised \\textbf\{P\}olicy \\textbf\{O\}ptimization \(RSPO\) algorithm to boost reasoning and decision\-making performance under long\-tail driving scenarios\. Concretely, we first conduct an empirical analysis of the core challenges faced by current VLMs in autonomous driving decision and planning tasks, and formally define reasoning and decision\-making tasks tailored to long\-tail scenarios\. On this basis, we design a curriculum\-guided supervised fine\-tuning strategy to enable the model to rapidly fit the mean distribution of model outputs\. Furthermore, we propose a reasoning\-supervised optimization algorithm, which enhances the robustness and accuracy of reasoning and decision in long\-tail scenarios by guiding the optimality consistency between reasoning processes and final decisions\. Finally, we construct multiple verifiable autonomous driving reasoning and decision datasets based on open\-source benchmarks and conduct extensive multi\-dimensional comparative experiments\. Experimental results show that the proposed algorithm achieves consistent improvements in prediction accuracy across multiple datasets compared with existing methods\. In particular, it achieves a 6\.7\\% relative improvement over the strong baseline on the CODA\-LM task and also yields lower trajectory\-prediction errors on downstream planning tasks\.

## Unveiling Fine\-Grained Visual Traces: Evaluating MultiModal Interleaved Reasoning Chains in Multimodal STEM Tasks

**Authors:** Jing Jin; Hao Liu; Yan Bai; Yihang Lou; Zhenke Wang; Tianrun Yuan; Yongkang Zhu; Juntong Chen; Fanhu Zeng; Xuanyu Zhu; Tao Feng; Yige Xu

**ID:** 149067 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t7FoUdbKB6>) | [PDF](<https://openreview.net/pdf?id=t7FoUdbKB6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149067>)

Multimodal large language models \(MLLMs\) have shown promising reasoning abilities, yet evaluating their performance in specialized domains remains challenging\. STEM reasoning is a particularly valuable testbed because it provides highly verifiable feedback, but existing benchmarks often permit unimodal shortcuts due to modality redundancy and focus mainly on final\-answer accuracy, overlooking the reasoning process itself\. To address this challenge, we introduce STEPSTEM: a graduate\-level benchmark of 283 problems across mathematics, physics, chemistry, biology, and engineering for fine\-grained evaluation of cross\-modal reasoning in MLLMs\. STEPSTEM is constructed through a rigorous curation pipeline that enforces strict complementarity between textual and visual inputs\. We further propose a general step\-level evaluation framework for both text\-only chain\-of\-thought and interleaved image\-text reasoning, using dynamic programming to align predicted reasoning steps with multiple reference solutions\. Experiments across a wide range of models show that current MLLMs still rely heavily on textual reasoning, with even Gemini 3\.1 Pro and Claude Opus 4\.6 achieving only 38\.29\\% accuracy\. These results highlight substantial headroom for genuine cross\-modal STEM reasoning and position STEPSTEM as a benchmark for fine\-grained evaluation of multimodal reasoning\.

## JobBench: Aligning Agent Work With Human Will

**Authors:** Yuetai Li; Yichen Feng; Zhangchen Xu; Zixian Ma; Kaiyuan Zheng; Fengqing Jiang; Xinghua Sun; Rulin Shao; Zichen Chen; Yue Huang; Xinyang Han; Brian Lee; Kayla Xu; Shenglai Zeng; Hang Hua; Xiangliang Zhang; Basel Alomair; Ranjay Krishna; Luke Zettlemoyer; Pang Wei Koh; Bhaskar Ramasubramanian; Luyao Niu; Xiang Yue; Radha Poovendran

**ID:** 138930 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vnyibVJpri>) | [PDF](<https://openreview.net/pdf?id=vnyibVJpri>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138930>)

Current benchmarks for occupational AI agents are scoped primarily by economic values, telling a replacement story\. We introduce JobBench, which evaluates AI agents on the workflows that experts identify as high\-priority for delegation, empowering humans based on their needs instead of replacing them with GDP value\. JobBench covers 130 agentic tasks across 35 occupations\. Each task is packaged as a workspace of heterogeneous reference files, requiring the agent to reason through the cluttered information streams of real professional work\. Outputs are graded by a fact\-anchored chain of rubrics, averaging 35\.6 binary criteria per task\. We evaluate 36 models; the strongest, Claude Opus 4\.7 under Claude Code, reaches only 45\.9 \\%\. We hope JobBench shifts the community's target labour\-market effect from replacement to enhancement: building agents that do what humans actually want delegated, not only what is most economically valuable\.

## Consolidating Reasoning with Test\-Time Learning

**Authors:** Haotian Wu; Zeming Chen; Hao Zhao; Antoine Bosselut

**ID:** 150965 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dwDo02oHXs>) | [PDF](<https://openreview.net/pdf?id=dwDo02oHXs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150965>)

Parallel thinking scales inference\-time compute by generating multiple reasoning traces for a query, and aggregating them to reach a final answer\. However, most aggregation algorithms treat each reasoning trajectory independently, ignoring the complementary reasoning sub\-processes across the full ensemble of trajectories\.  To learn from these parallel trajectories, we propose CORAL \(Consolidating Reasoning with Test\-Time Learning\), a novel framework for aggregating trajectories by jointly consolidating them into parametric memory using test\-time training\. Our algorithm meta\-learns how to consolidate using nested optimization at training time, where an inner loop encodes reasoning trajectories into a lightweight LoRA adapter, and an outer loop learns meta\-parameters for the inner loop such that the consolidation is helpful for the model to synthesize a final solution\.  As no standard datasets exist for training aggregation methods, we construct a novel OpenParallelThinking corpus composed of 12,810 math problems paired with a mixture of diverse trajectories from six LLMs\. Evaluated on challenging mathematics and STEM benchmarks, CORAL consistently outperforms best aggregation baselines by 20% overall\. Importantly, we curate reasoning trajectories at multiple quality levels to simulate the reality of noisy parallel reasoning and demonstrate that CORAL is especially robust to the quality of thinking trajectories and able to learn useful knowledge from entirely wrong solutions\. Additionally, this weak\-to\-strong generalization feature scales with the number of incorrect trajectories available for aggregation, while RL can further incentivize such reasoning consolidation capability\. We will release CORAL and OpenParallelThinking for use in future work on reasoning aggregation\.

## From Solver Trajectories to Teaching Trajectories: Cognition\-Aligned Reasoning Distillation

**Authors:** Yashuo Luo; Qianren Mao; ZiqiQin; Junnan Liu; Haitao Li; Qili Zhang; Yuan Gao; Zhijun Chen; Xu Wang

**ID:** 148685 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vozYLGC2YA>) | [PDF](<https://openreview.net/pdf?id=vozYLGC2YA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148685>)

Knowledge distillation from large reasoning models \(LRMs\) often uses raw teacher trajectories as supervision\. However, this practice creates a mismatch between the goal of distillation and the nature of teacher trajectories\. Advanced LRMs typically improve their reasoning capabilities through reward\-driven post\-training, such as RLHF\. This training optimizes them as strong solvers, rather than as teachers that produce reasoning processes smaller models can easily learn\. Since smaller models have different "cognitive capacities" compared to their larger teachers, directly imitating raw teacher trajectories can sometimes be ineffective and often requires a substantial number of high\-quality samples\. To bridge this mismatch, we propose \*\*C\*\*ognition\-\*\*A\*\*ligned \*\*R\*\*easoning \*\*D\*\*istillation \(\*\*CARD\*\*\), an RL\-based framework that transforms solver trajectories into teaching trajectories aligned with the student’s cognition\. Avoiding expensive resampling, our framework directly transforms existing trajectories\. We optimize CARD with two reward signals: \(1\) a Distribution Alignment Reward that matches the student’s predictive distribution, and \(2\) a Logical Coherence Reward that reduces misleading failed reasoning steps\. Comprehensive evaluations across multiple student models and settings demonstrate that CARD outperforms distillation from raw teacher trajectories in in\-domain settings while achieving substantial gains in out\-of\-distribution performance\.

## Bian Que: An Agentic Framework with Flexible Skill Arrangement for Online System Operations

**Authors:** bochao liu; Zhipeng Qian; yang zhao; Xinyuan Jiang; Zihan Liang; Yufei Ma; Junpeng Zhuang; Ben Chen; Shuo Yang; Hongen Wan; Yao Wu; Chenyi Lei

**ID:** 148501 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xMMvkvcwPM>) | [PDF](<https://openreview.net/pdf?id=xMMvkvcwPM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148501>)

Operating and maintaining \(O&amp;M\) large\-scale online engine systems \(search, recommendation, advertising\) demands substantial human effort for release monitoring, alert response, and root cause analysis\. While LLM\-based agents are a natural fit for these tasks, the deployment bottleneck is not reasoning capability but \*orchestration\*: selecting, for each operational event, the relevant \*data\* \(metrics, logs, change events\) and the applicable \*operational knowledge\* \(handbook rules and practitioner experience\)\. Feeding all signals indiscriminately causes dilution and hallucination, while manually curating the event\-to\-\(data, knowledge\) mapping is intractable under dozens of daily releases\. We present \*\*Bian Que\*\*, an agentic framework with three contributions: \(i\) a \*\*unified operational paradigm\*\* abstracting day\-to\-day O&amp;M into three canonical patterns: release interception, proactive inspection, and alert root cause analysis; \(ii\) \*\*Flexible Skill Arrangement\*\*, where each Skill specifies which data and knowledge to retrieve for a given business\-module context and can be automatically generated and updated by LLMs or iteratively refined through natural\-language instructions from on\-call engineers; \(iii\) a \*\*unified self\-evolving mechanism\*\* in which one correction signal drives two parallel pathways, case\-memory\-to\-knowledge distillation and targeted Skill refinement\. Deployed on the e\-commerce search engine of a major short\-video platform in China, \*\*Bian Que\*\* reduces alert volume by 75%, achieves 80% root\-cause analysis accuracy, and cuts mean time to resolution by over 50%\. Our framework achieves 99\.0% pass rate on offline evaluations\.

## Consolidating Reasoning with Test\-Time Learning

**Authors:** Haotian Wu; Zeming Chen; Hao Zhao; Antoine Bosselut

**ID:** 150965\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150965

[Paper](<https://openreview.net/forum?id=dwDo02oHXs>) | [PDF](<https://openreview.net/pdf?id=dwDo02oHXs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150965>)

Parallel thinking scales inference\-time compute by generating multiple reasoning traces for a query, and aggregating them to reach a final answer\. However, most aggregation algorithms treat each reasoning trajectory independently, ignoring the complementary reasoning sub\-processes across the full ensemble of trajectories\.  To learn from these parallel trajectories, we propose CORAL \(Consolidating Reasoning with Test\-Time Learning\), a novel framework for aggregating trajectories by jointly consolidating them into parametric memory using test\-time training\. Our algorithm meta\-learns how to consolidate using nested optimization at training time, where an inner loop encodes reasoning trajectories into a lightweight LoRA adapter, and an outer loop learns meta\-parameters for the inner loop such that the consolidation is helpful for the model to synthesize a final solution\.  As no standard datasets exist for training aggregation methods, we construct a novel OpenParallelThinking corpus composed of 12,810 math problems paired with a mixture of diverse trajectories from six LLMs\. Evaluated on challenging mathematics and STEM benchmarks, CORAL consistently outperforms best aggregation baselines by 20% overall\. Importantly, we curate reasoning trajectories at multiple quality levels to simulate the reality of noisy parallel reasoning and demonstrate that CORAL is especially robust to the quality of thinking trajectories and able to learn useful knowledge from entirely wrong solutions\. Additionally, this weak\-to\-strong generalization feature scales with the number of incorrect trajectories available for aggregation, while RL can further incentivize such reasoning consolidation capability\. We will release CORAL and OpenParallelThinking for use in future work on reasoning aggregation\.

## From Solver Trajectories to Teaching Trajectories: Cognition\-Aligned Reasoning Distillation

**Authors:** Yashuo Luo; Qianren Mao; ZiqiQin; Junnan Liu; Haitao Li; Qili Zhang; Yuan Gao; Zhijun Chen; Xu Wang

**ID:** 148685\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148685

[Paper](<https://openreview.net/forum?id=vozYLGC2YA>) | [PDF](<https://openreview.net/pdf?id=vozYLGC2YA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148685>)

Knowledge distillation from large reasoning models \(LRMs\) often uses raw teacher trajectories as supervision\. However, this practice creates a mismatch between the goal of distillation and the nature of teacher trajectories\. Advanced LRMs typically improve their reasoning capabilities through reward\-driven post\-training, such as RLHF\. This training optimizes them as strong solvers, rather than as teachers that produce reasoning processes smaller models can easily learn\. Since smaller models have different "cognitive capacities" compared to their larger teachers, directly imitating raw teacher trajectories can sometimes be ineffective and often requires a substantial number of high\-quality samples\. To bridge this mismatch, we propose \*\*C\*\*ognition\-\*\*A\*\*ligned \*\*R\*\*easoning \*\*D\*\*istillation \(\*\*CARD\*\*\), an RL\-based framework that transforms solver trajectories into teaching trajectories aligned with the student’s cognition\. Avoiding expensive resampling, our framework directly transforms existing trajectories\. We optimize CARD with two reward signals: \(1\) a Distribution Alignment Reward that matches the student’s predictive distribution, and \(2\) a Logical Coherence Reward that reduces misleading failed reasoning steps\. Comprehensive evaluations across multiple student models and settings demonstrate that CARD outperforms distillation from raw teacher trajectories in in\-domain settings while achieving substantial gains in out\-of\-distribution performance\.

## Bian Que: An Agentic Framework with Flexible Skill Arrangement for Online System Operations

**Authors:** bochao liu; Zhipeng Qian; yang zhao; Xinyuan Jiang; Zihan Liang; Yufei Ma; Junpeng Zhuang; Ben Chen; Shuo Yang; Hongen Wan; Yao Wu; Chenyi Lei

**ID:** 148501\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148501

[Paper](<https://openreview.net/forum?id=xMMvkvcwPM>) | [PDF](<https://openreview.net/pdf?id=xMMvkvcwPM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148501>)

Operating and maintaining \(O&amp;M\) large\-scale online engine systems \(search, recommendation, advertising\) demands substantial human effort for release monitoring, alert response, and root cause analysis\. While LLM\-based agents are a natural fit for these tasks, the deployment bottleneck is not reasoning capability but \*orchestration\*: selecting, for each operational event, the relevant \*data\* \(metrics, logs, change events\) and the applicable \*operational knowledge\* \(handbook rules and practitioner experience\)\. Feeding all signals indiscriminately causes dilution and hallucination, while manually curating the event\-to\-\(data, knowledge\) mapping is intractable under dozens of daily releases\. We present \*\*Bian Que\*\*, an agentic framework with three contributions: \(i\) a \*\*unified operational paradigm\*\* abstracting day\-to\-day O&amp;M into three canonical patterns: release interception, proactive inspection, and alert root cause analysis; \(ii\) \*\*Flexible Skill Arrangement\*\*, where each Skill specifies which data and knowledge to retrieve for a given business\-module context and can be automatically generated and updated by LLMs or iteratively refined through natural\-language instructions from on\-call engineers; \(iii\) a \*\*unified self\-evolving mechanism\*\* in which one correction signal drives two parallel pathways, case\-memory\-to\-knowledge distillation and targeted Skill refinement\. Deployed on the e\-commerce search engine of a major short\-video platform in China, \*\*Bian Que\*\* reduces alert volume by 75%, achieves 80% root\-cause analysis accuracy, and cuts mean time to resolution by over 50%\. Our framework achieves 99\.0% pass rate on offline evaluations\.

## StepBack: Step\-Level Error\-Localized Resampling for Efficient Test\-Time Reasoning

**Authors:** Yang Ouyang; Jung\-Eun Kim

**ID:** 149117\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149117

[Paper](<https://openreview.net/forum?id=skhKf04svt>) | [PDF](<https://openreview.net/pdf?id=skhKf04svt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149117>)

Self\-consistency \(SC\) is a widely used decoding strategy for improving chain\-of\-thought reasoning, but it requires sampling many complete reasoning trajectories with a preset budget\. Its efficient variants reduce the cost mainly by stopping full\-trajectory sampling early or distributing the number of samples across questions\. In this paper, we propose \\textbf\{StepBack\}, a step\-level error\-localized resampling method for efficient test\-time reasoning\. Given a small set of draft trajectories, \\method localizes potential first error positions using lightweight signals and then resamples the detected error step and its suffix, followed by majority answer voting\. Our theoretical analysis explains why resampling before the localized error point can increase the probability of recovering a correct final answer\. Empirically, \\method consistently matches or exceeds SC across mathematical reasoning and multi\-hop QA benchmarks, while reducing token usage by up to 50\\%\. In addition, by nature, \\method can be combined with adaptive inference methods such as Adaptive Consistency and Early\-Stopping SC, further improving their efficiency and scalability\.

## Code2World: A GUI World Model via Renderable Code Generation

**Authors:** Yuhao Zheng; Li&amp;amp;\#x27;an Zhong; Yi Wang; Rui Dai; Kaikui Liu; Xiangxiang Chu; Linyuan Lü; Philip Torr; Kevin Qinghong Lin

**ID:** 151489\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151489

[Paper](<https://openreview.net/forum?id=aG2jCapnlk>) | [PDF](<https://openreview.net/pdf?id=aG2jCapnlk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151489>)

GUI agents interact with environments by perceiving interfaces and executing actions\. As a virtual sandbox, the GUI World model empowers agents with human\-like foresight by enabling action\-conditioned prediction\. However, existing text/pixel\-based approaches struggle to achieve both high visual fidelity and fine\-grained structural controllability\. To this end, we propose \\textbf\{Code2World\}, a vision\-language coder that simulates the next visual state via \\textbf\{renderable code generation\}\. Specifically,  to address the data scarcity problem, we construct \\textbf\{AndroidCode\} by translating GUI trajectories into high\-fidelity HTML and refining synthesized code through a visual\-feedback revision mechanism, yielding a corpus of \\textbf\{over 80K\} high\-quality screen\-action pairs\. To adapt existing VLMs into code prediction, we first perform SFT as a cold start for format layout following, then further apply \\textbf\{Render\-Aware Reinforcement Learning\} which uses rendered outcome as the reward signal by enforcing visual semantic fidelity and action consistency\. Extensive experiments demonstrate that Code2World\-8B achieves the top\-performing next UI prediction, rivaling the competitive GPT\-5 and Gemini\-3\-Pro\-Image\.  Notably, \\textit\{Code2World significantly enhances downstream navigation success rates in a flexible manner\}, boosting Gemini\-2\.5\-Flash by \{\+9\.5\\%\} on AndroidWorld navigation\.

## MatCurvs: Article Real\-Coordinate Curve Extraction for Agent\-Ready Materials Reasoning

**Authors:** Liang Yin; Zhan&amp;amp;\#x27;ao yao; Jiahui Shi; Songlin Yu; Jianjun Liu

**ID:** 148908\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148908

[Paper](<https://openreview.net/forum?id=uHECG4TS6s>) | [PDF](<https://openreview.net/pdf?id=uHECG4TS6s>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148908>)

In materials\-science papers, quantitative evidence—XRD peak shifts, Raman ID/IG ratios, high\-frequency Z′ intercepts in EIS—lives in line plots\. Hosted vision–language models describe these plots fluently but cannot recover the \(x, y\) values an agent needs to query, compare, or integrate\. We release three coupled artifacts\. MatCurvs is a real\-coordinate chart benchmark for materials\-science spectra, organized in three tiers spanning XRD, Raman, XPS, XAFS, EIS, GCD, and CV: 1,375,165 classified subfigures from 55,763 articles \(L0\); 204 panels with manual per\-curve pixel polylines \(L1\); and 8,026 verified real\-coordinate curves over 3,817 panels \(L2\)\. MatDeplot is a local extractor that recovers 45\.8% of curves within a 5\-pixel IoU tolerance against L1 ground truth, versus ≤1\.2% for the strongest hosted VLM—a 38× pixel\-anchoring gap, closed in roughly 1\.5 seconds per image\. MatCurvs\-Reasoning is a 14,740\-question deterministic numerical evaluation: feeding MatDeplot’s extracted \(x, y\) data to an LLM cuts median relative error from 54% for an image\-only VLM to about 4%, and a text LLM with the data alone matches the same VLM prompted with both image and data\. By turning each published chart into a numerically queryable curve, the released artifacts let a deployer compute derived materials parameters—Raman ID/IG disorder ratios, XRD Scherrer crystallite sizes, and phase\-purity audits—directly from a literature\-scale chart corpus, where most papers under\-report these numbers and the chart is the only available record\.

## From Document Layout to Causal Topology: An End\-to\-End Architecture for Temporal Causal Reasoning

**Authors:** Zhifeng Yang; Wei Luo; Yongjian Chen; Shiqi Ou

**ID:** 150801 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fHjrkjB6Af>) | [PDF](<https://openreview.net/pdf?id=fHjrkjB6Af>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150801>)

Large language models \(LLMs\) generally lack deep causal reasoning capabilities in temporal reasoning\. Inspired by document layout reordering, this paper proposes a paradigm shift from discrete narratives to causal topologies\. It constructs two architectures: a training\-free neuro\-symbolic framework, temporal causal reasoning agent \(TCR\-Agent\), which achieves interpretable causal deduction and counterfactual truncation through external causal graph instantiation and a symbolic intervention engine; and an end\-to\-end model, temporal causal reasoning former \(TCR\-Former\), which internalizes these mechanisms into the Transformer attention space via a causal\-topological attention mask and temporal span biases\. Experiments on the TempoCausal benchmark demonstrate that TCR\-Agent comprehensively surpasses existing training\-free baselines\. At the same time, TCR\-Former achieves an accuracy 16\.5% higher than that of state\-of\-the\-art \(SOTA\) methods, outperforming large\-scale models such as GPT\-5\.4 and DeepSeek\-V3\.2 with only approximately 8\.6B parameters\. Further analysis reveals a structure\-reasoning disconnection phenomenon in existing methods: external symbolic constraints and chain\-of\-thought \(CoT\) reasoning can improve reasoning steps, yet fail to enhance deep causal deductive capability\. By internalizing temporal causal reasoning capabilities into the model, TCR\-Former effectively bridges this gap, providing an efficient and reliable end\-to\-end foundation for complex reasoning scenarios\.

## SkillOS: Learning Skill Curation for Self\-Evolving Agents

**Authors:** Siru Ouyang; Jun Yan; Yanfei Chen; Rujun Han; Zifeng Wang; Bhavana Dalvi Mishra; Rui Meng; Chun\-Liang Li; Yizhu Jiao; Kaiwen Zha; Maohao Shen; Vishy Tirumalashetty; George Lee; Jiawei Han; Tomas Pfister; Chen\-Yu Lee

**ID:** 151446 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ace71RDhko>) | [PDF](<https://openreview.net/pdf?id=ace71RDhko>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151446>)

LLM\-based agents are increasingly deployed to handle streaming tasks, yet they often remain one\-off problem solvers that fail to learn from past interactions\. Reusable skills distilled from experience provide a natural substrate for self\-evolution, where high\-quality skill curation serves as the key bottleneck\. Existing approaches either rely on manual skill curation, prescribe heuristic skill operations, or train for short\-horizon skill operations\. However, they still struggle to learn complex long\-term curation policies from indirect and delayed feedback\. To tackle this challenge, we propose SkillOS, an experience\-driven RL training recipe for learning skill curation in self\-evolving agents\. SkillOS pairs a frozen agent executor that retrieves and applies skills with a trainable skill curator that updates an external SkillRepo from accumulated experience\. To provide learning signals for curation, we design composite rewards and train on grouped task streams based on skill\-relevant task dependencies, where earlier trajectories update the SkillRepo, and later related tasks evaluate these updates\. Across multi\-turn agentic tasks and single\-turn reasoning tasks, SkillOS consistently outperforms memory\-free and strong memory\-based baselines in both effectiveness and efficiency, with the learned skill curator generalizing across different executor backbones and task domains\. Further analyses show that the learned curator produces more targeted skill use, while the skills in SkillRepo evolve into more richly structured Markdown files that encode higher\-level meta\-skills over time\.

## SRA: Spatial Reasoning Adapter via Evolving Social Interaction Graphs for Trajectory Prediction

**Authors:** Jaewoo Jeong; Seonkyu Song; Hyeonwoo Park; Jegyeong Cho; Yujin Bae; Giwon Lee; Daehee Park; Kuk\-Jin Yoon

**ID:** 153943 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HQ4n16Lma3>) | [PDF](<https://openreview.net/pdf?id=HQ4n16Lma3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153943>)

Predicting where multiple agents will move next is fundamental to autonomous driving, robotics, and any system that must share space with people safely\. Modern stochastic predictors read off inter\-agent interactions once from the observed past and keep that view fixed throughout the generative rollout, so the reciprocal geometric constraints that emerge as the joint future sharpens are not re\-examined\. We address this gap with SRA \(Spatial Reasoning Adapter\), a modular graph denoiser that plugs into existing diffusion predictors without altering their generative cores\. At every reverse step, SRA reads the host's current future estimate, builds a sparse Euclidean interaction graph on the predicted trajectories, and returns a residual correction to the host's decoding path\. Our adapter consists of three core components: a sparse top\-$N$ neighborhood retrieved with an asymmetric query\-key score, a future\-conditioned relational feature recomputed on the evolving prediction, and uncertainty\-weighted message passing where confident agents act as anchors for uncertain ones\. We instantiate SRA on three structurally different hosts \- LED, MID, and MoFlow \- across four multi\-agent benchmarks: SDD, NBA, Soccer, and Football\. SRA improves every host on every dataset by 6\-\-7\\% on average, indicating that spatial reasoning over the model's own evolving future is broadly useful across denoising architectures\. The code will be released upon acceptance\.

## Touch\-R1: Reinforcing Touch Reasoning in MLLMs

**Authors:** Yingxin Lai; Yafei Zhou; Fucai Zhu; Siyu Zhu; Weihao Yuan

**ID:** 149345 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qmrtrsIjCK>) | [PDF](<https://openreview.net/pdf?id=qmrtrsIjCK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149345>)

While rule\-based reinforcement learning has recently catalyzed explicit reasoning in multimodal models, tactile reasoning remains largely underexplored\. Existing tactile\-language models primarily rely on supervised or contrastive objectives, which limits their capacity to ground predictions in physical evidence or rectify misleading visual priors\. Tactile reasoning introduces two modality\-specific challenges: the ordinal nature of physical attributes \(e\.g\., hardness, roughness\) and the cross\-sensor distribution shifts inherent in optical tactile hardware\. In this work, we introduce TouchReason\-1M, a large\-scale multimodal dataset comprising over 1M synchronized tactile pairs across four distinct sensors, and TouchReason\-Bench, a rigorous framework for evaluating tactile perception and visual\-tactile conflict resolution\. Building upon these, we propose Touch\-R1, a tactile reasoning MLLM based on Qwen2\.5\-VL\-7B\. Touch\-R1 is trained via a tactile\-grounded GRPO objective that combines ordinal\-aware accuracy, cross\-sensor physical consistency, structured\-format control, and an input\-side tactile grounding objective\. Specifically, the tactile\-use reward assigns credit only when authentic tactile inputs yield superior correctness relative to counterfactual controls where the tactile stream is removed, shuffled, or noise\-masked\. On TouchReason\-Bench, Touch\-R1\-7B outperforms Octopi\-13B by 18\.4\\% and GPT\-4o by 24\.7\\% on average\. Its structured reasoning traces reveal emergent behaviors of probing, comparison, and revision, demonstrating that R1\-style reasoning can be effectively grounded in physical contact\. Our code and data will be made public\.

## Mining Logic under Uncertainty: Probabilistic Soft Logic with Energy\-Based Inference for Chain\-of\-Thought Verification

**Authors:** Jiang Yu; Jinlong Tian; Kewei Cheng; Yue He; Haoxuan Li; Haotian Wang; Yunhai Wang; Wenjing Yang; Zhouchen Lin; Shixuan Liu

**ID:** 152179 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UyyA9UB5BN>) | [PDF](<https://openreview.net/pdf?id=UyyA9UB5BN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152179>)

Chain\-of\-Thought reasoning improves the explainability of large language models, yet verifying such reasoning remains difficult when intermediate steps express epistemic uncertainty rather than deterministic entailment\. Neuro\-symbolic verifiers typically translate reasoning steps into rigid first\-order or SMT\-style constraints\. This forces each proposition into a binary truth regime and creates a Rigidity\-\-Ambiguity Mismatch: uncertainty\-marked claims such as may, likely, or suggests are either over\-hardened into deterministic assertions or rejected as unverifiable\. We propose ProbVeri, a probabilistic soft\-logic framework for formal verification under uncertainty\. The key idea is to represent uncertainty\-marked reasoning steps as weighted soft logical constraints over continuous truth assignments, so that partial evidential support remains expressible\. Building on this soft\-logic representation, we formulate verification as a contrastive energy minimization problem: a step is considered supported when its natural interpretation has lower verification energy than its negated counterpart under the same evidence, soft rules, and assumption regularization\. Probabilistic Soft Logic defines the logical energy through weighted hinge\-loss constraints\. We introduce a support\-grounded assumption penalty that discourages unsupported latent bridge assumptions between context and claim\. The resulting energy gap provides a confidence\-scored verification signal that separates unsupported steps from weakly but consistently supported inferences\. Experiments on ProofWriter, BioASQ, and LegalBench\-SARA show that ProbVeri recovers more verified\-correct reasoning traces than rigid verifiers while reducing over\-acceptance compared with soft\-only PSL\. These results suggest that uncertainty\-aware verification benefits from soft logical formalization and contrastive comparison between natural and negated interpretations\.

## Learning to Evolve Scenes: Reasoning about Human Activities with Scene Graphs

**Authors:** Francesca Pistilli; Simone Alberto Peirone; Giuseppe Averta

**ID:** 150990 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dl9KfUrz4u>) | [PDF](<https://openreview.net/pdf?id=dl9KfUrz4u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150990>)

Understanding human behavior while interacting with the surrounding world is crucial for many applications of embodied AI\. First\-person videos are particularly informative for this problem, as they well capture how activities reshape the scene over time\. However, existing approaches often rely on implicit visual or language\-aligned representations, disregarding structured reasoning over the scene dynamic\. In this paper we argue that explicit, compositional and editable representations of human\-environment interactions can play a crucial role for rich grounded activity understanding\. To this end, we introduce SG\-Ego, a large scale annotation set extending Ego4D with spatio\-temporal scene graphs, where relations triplets are consolidated over time into explicit time\-evolving descriptions of the scene state\. To effectively reason over this representation, we propose GLEN, a graph\-based model that operates over scene graph sequences to both align them with textual actions and model their temporal evolution\. In addition, we formulate the activity\-driven graph\-edit forecasting \(A\-GEF\) problem, a novel task that casts scene dynamics as a sequence of structured transformations conditioned on ongoing actions, enabling explicit reasoning about how scenes change over time\. We demonstrate the effectiveness of our approach across multiple downstream tasks, spanning retrieval benchmarks as EgoMCQ and the more complex compositional EgoCVR, as well as long\-horizon reasoning benchmarks as EXPLORE\-Bench and the newly introduced A\-GEF\. GLEN achieves competitive or state\-of\-the\-art performance compared to raw video baselines and it excels in reasoning settings, typically addressed only with MLLMs, while enabling controllable and structured predictions of scene dynamics driven by human activities\. We believe our results establish spatio\-temporal scene graphs, together with models that reason over them, as strong compositional and interpretable representations for egocentric video understanding and potentially beyond\. Code will be released upon acceptance\.

## BioSafetyBench: Agentic Cascade Evaluation for the Bio\-AI Ecosystem

**Authors:** Yang Cao; Xiaogeng Liu; Shengchao Liu; Chaowei Xiao

**ID:** 138924 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wblptYeXga>) | [PDF](<https://openreview.net/pdf?id=wblptYeXga>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138924>)

Biological risk is often a property of a cascade rather than a single model output\. A generated artifact may become consequential only after transcription, translation, folding, binding, pathway propagation, or host\-directed off\-target interaction\. Existing bio\-AI safety evaluations largely grade each model within its own modality, missing downstream risks and inheriting self\-grading circularity when model and evaluator share representations\. We introduce BioSafetyBench, an agentic cascade\-evaluation platform that treats the bio\-AI ecosystem as the unit of safety evaluation\. BioSafetyBench routes each model\-output pair to one of 15 standardized probes over a six\-level hierarchy from genome to organism\-level outcome\. Fixed bridge agents propagate outputs through two causal pathways: Pipeline A follows forward biological cascades, while Pipeline B evaluates CRISPR and siRNA designs through genome\- and transcriptome\-wide off\-target alignment\. At every reached level, external frozen evaluators compute domain\-native biomarkers and compare them with literature\-anchored thresholds, yielding a Cascade Concern Profile and Cascade Depth\. Across 25 foundation models, BioSafetyBench surfaces risks invisible to single\-modality grading: Influenza neuraminidase designs from ProteinMPNN and ESM\-IF1 reach CD = 4; jailbreak prompts inflate gRNA off\-target hits 9\.05× over baseline, push 48 of 604 gRNAs to Critical, and concentrate Critical siRNA hits on MYC; protein mask\-and\-fill spans a 32× cross\-model gap; GPT\-4o complies on all natural\-language\-guided protein mutation prompts at CD = 2 while Claude Sonnet 4\.5 refuses all prompts at CD = 0; and a three\-predictor ADMET ensemble misses 30\.3% of known clinical toxics\. BioSafetyBench is, to our knowledge, the first bio\-AI safety benchmark to provide cascade\-level risk certificates whose scoring modules are weight\- and gradient\-flow independent from the model under test by construction\.

## MindLoom: Composing Thought Modes for Frontier\-Level Reasoning Data Synthesis

**Authors:** Haiyang Shen; Taian Guo; Xuanzhong Chen; Mugeng Liu; Sixiong Xie; Zhuofan Shi; Chongyang Pan; Siqi Zhong; Guoqing Wang; Ming Zhang; Yun Ma

**ID:** 155952 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1aimZyyAD8>) | [PDF](<https://openreview.net/pdf?id=1aimZyyAD8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155952>)

Although LLMs have made substantial progress in reasoning, systematically producing frontier\-level reasoning data remains difficult\. Existing synthesis methods often have limited visibility into the structural factors that govern problem difficulty, which can result in narrow diversity and unstable difficulty control\. In this work, we view the difficulty of a reasoning problem as arising from the accumulation of atomic knowledge\-reasoning transformations, which we term \*thought modes\*\. Building on this perspective, we propose MindLoom, a framework for synthesizing frontier\-level reasoning data through compositional thought mode engineering\. Given a collection of hard problems with verified solutions, MindLoom first decomposes those solutions into thought mode chains that reveal each problem's construction logic\. It then trains a retrieval model that matches problem states to compatible thought modes, providing guidance on which reasoning challenges to introduce during synthesis\. New problems are composed by iteratively applying retrieved thought modes to seed questions, with distribution\-aligned sampling to encourage diverse reasoning coverage\. Finally, a rollout\-based judging stage labels generated questions by difficulty and supplies judged\-correct responses for supervised fine\-tuning\. We evaluate MindLoom on nine benchmarks covering five STEM disciplines and four mathematical reasoning tasks across multiple model families and sizes\. Models fine\-tuned on MindLoom generated data consistently improve over base models, distillation, and external\-data baselines across the reported benchmarks\. Ablation studies indicate the contribution of each component, and further analysis suggests that MindLoom covers a broad range of reasoning patterns while maintaining useful difficulty control\. We have open\-sourced our implementation at https://anonymous\.4open\.science/r/MindLoom\-5B8E\.

## Reasoning\-Aware IRT: Explainable Evaluation of Test\-Time Scaling in Reasoning Models

**Authors:** Ratthachat Chatpatanasiri

**ID:** 139400 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Szz5xYoydw>) | [PDF](<https://openreview.net/pdf?id=Szz5xYoydw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139400>)

_Abstract unavailable from the accessible public sources._

## ScrapeBench: Evaluating Legal Compliance of AI Agents in Website Scraping

**Authors:** Joseph Marvin Imperial; Daniel Slate; Noam Kolt

**ID:** 139442 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Pcl8A4aiiN>) | [PDF](<https://openreview.net/pdf?id=Pcl8A4aiiN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139442>)

AI agents deployed on the open web are becoming more capable of performing actions that may breach contracts and violate computer security laws\. In this work, we introduce $\\text\{ScrapeBench\}$, the first agentic benchmark for evaluating the legal compliance of frontier AI agents with website scraping policies, including terms of service \(ToS\) and $\\texttt\{robots\.txt\}$ directives\. Across widely used closed\-weight and open\-weight AI agents, we find that most agents exhibit low compliance rates \(&lt; 5\\%\) when instructed to scrape websites in our sample of 1,626 popular websites that explicitly prohibit scraping\. In addition, we observe that even where AI agents actively check the applicable ToS and $\\texttt\{robots\.txt\}$, they continue to exhibit low compliance rates\. Conversely, in our sample of 269 websites that do not prohibit scraping, we observe that agents regularly refuse to scrape despite it being lawful, such as Claude Opus 4\.6 exhibiting an over\-refusal rate of 98\.8%\. Lastly, our human baseline experiments \($n$ = 180 participants\) suggest that humans exhibit compliance rates comparable to AI agents but over\-refuse at much higher rates\. We release our anonymized code and data in this repository: https://anonymous\.4open\.science/r/scrapebench\-75D6

## LibEvoBench: Probing Temporal Knowledge Stratification in Code Generation Models

**Authors:** Daniele Cipollone; Sergey Titov; Maliheh Izadi; Egor Bogomolov; Arie v Deursen

**ID:** 139459 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OPA18h84hd>) | [PDF](<https://openreview.net/pdf?id=OPA18h84hd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139459>)

Large software projects often depend on older versions of libraries, even as APIs continue to evolve across releases\. This creates a challenge for LLMs: they must maintain knowledge of multiple API versions, not merely the latest or most common one\. However, current LLMs, trained on temporally mixed corpora and lack explicit mechanisms for such version\-specific reasoning, leading to anachronistic errors \-\- calling APIs as they exist in a different library version\. To systematically evaluate this phenomenon, we introduce LibEvoBench, a multi\-task benchmark spanning multiple versions of widely used Python libraries, along with a new metric, the Software Evolution Understanding Score \(SEUS\), to measure models' consistency when working with evolving APIs\. Our results show that state\-of\-the\-art models are largely version\-oblivious: performance degrades for evolving APIs, while for stable APIs it remains the same across versions\. Moreover, simply specifying the target version provides no benefit, while relevant documentation significantly boosts models' accuracy\. These findings highlight a systematic limitation of current training paradigms and motivate new approaches for temporally grounded knowledge in code generation\.

## What’s Holding Back Latent Visual Reasoning?

**Authors:** Andre G Viveiros; Nuno Gonçalves; André Martins; Matthias Lindemann

**ID:** 148503 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xLMXsTUIOX>) | [PDF](<https://openreview.net/pdf?id=xLMXsTUIOX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148503>)

Humans can approach complex visual problems by mentally simulating intermediate visual steps, rather than reasoning through language alone\. Inspired by this, several works on Vision\-Language Models have recently explored chain\-of\-thought reasoning with continuous latent tokens as intermediate visual imagination steps\. In this work, we investigate how recent models leverage such latent tokens\. Surprisingly, we find that model accuracy is unaffected when latent tokens are replaced by uninformative dummy tokens\. This indicates that latent tokens play a minimal causal role in the model's final prediction\. To better understand this phenomenon, we analyze both the training signal provided by oracle latent representations and the quality of the latent tokens generated at inference time\. Our experiments reveal two crucial issues holding back latent visual reasoning: First, in most existing datasets, oracle latent tokens provide limited additional information beyond the original image and do not substantially simplify the task, leading models to ignore them during training and effectively bypassing them at inference time\. When fine\-tuned on a diagnostic dataset, in which latent tokens provide sufficient support for the final prediction, we show that models can causally rely on them\. Second, the latent tokens produced at inference time deviate from their corresponding oracle representations, collapsing to a narrow region and preventing benefits even when the model relies on them\. Overall, our findings suggest that future progress in latent visual reasoning depends on two key pillars: high\-quality datasets with informative intermediate steps and more precise latent token prediction\.

## How to Interpret Agent Behavior

**Authors:** Sophia Gao; Kaiser Sun; Jen\-Tse Huang; Katherine Van Koevering; Sijie Ji; Heyuan Huang; Weiyan Shi; Zhuoran Lu; Ziang Xiao; Daniel Khashabi; Mark Dredze

**ID:** 139461 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OKUrsqKlq5>) | [PDF](<https://openreview.net/pdf?id=OKUrsqKlq5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139461>)

Autonomous agents such as Claude Code and Codex now operate for hours or even days\. Understanding their runtime behavior has become critical for downstream tasks such as diagnosing inefficiencies, fixing bugs, and ensuring better oversight\. A primary way to gain this understanding is analyzing the reasoning trajectories and execution traces these agents generate\. Yet such data remains in unstructured natural\-language form, making it difficult for humans to interpret at scale\. We introduce ACT\*ONOMY \(a combination of Action and Taxonomy, pronounced /ækˈtɑːnəmi/\), a taxonomy for describing and analyzing agent behavior at runtime\. has two components: \(1\) the taxonomy itself, developed through Grounded Theory and structured as a three\-level hierarchy of 10 actions, 46 subactions, and 120 leaf categories; and \(2\) an open repository that hosts the living taxonomy, provides an automated analysis pipeline that applies it to agent trajectories analysis, and defines an extension protocol for community contributions\. Our experiments show that ACT\*ONOMY can compare behavioral profiles across agents and characterize a single agent's behavior across diverse trajectories, surfacing patterns indicative of failure modes\. By providing a shared vocabulary, ACT\*ONOMY helps researchers, agent designers, and end users interpret agent behavior more consistently, enabling better oversight and control\.

## Deep Reasoning in General Purpose Agents via Structured Meta\-Cognition

**Authors:** Dean Light; Michael Theologitis; Kshitish Ghate; Stella Li; Benjamin Newman; Chirag Shah; Aylin Caliskan; Pang Wei Koh; Dan Suciu; Yulia Tsvetkov

**ID:** 153616 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K4JhviyO5S>) | [PDF](<https://openreview.net/pdf?id=K4JhviyO5S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153616>)

_Abstract unavailable from the accessible public sources._

## DPIAgent: Divide, Protocol, Isolate for Agentic Reproduction Test Generation

**Authors:** Hao Liu; Steven Liu; Xin Zhang; Jane Luo; Yu Kang; Jie Wu; Fangkai Yang; Yangyu Huang; Pengfei Gao; Scarlett Li; Yan Lu

**ID:** 150275 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jN9jXO1jQ1>) | [PDF](<https://openreview.net/pdf?id=jN9jXO1jQ1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150275>)

Reproduction test generation, producing a failing\-then\-passing test that captures a reported bug, is a critical step in automated software engineering\. Existing agentic methods treat this as a monolithic loop, despite the task inherently comprising two subtasks of distinct nature: diagnosing the root cause and writing a fail\-to\-pass test\. Without explicit separation, the agent faces a compound objective with underspecified intermediate goals, leading to goal drift\. We propose DPIAgent, a structured agentic framework built on three principles, \*\*D\*\*ivide, \*\*P\*\*rotocol, \*\*I\*\*solate \(DPI\), that mitigates compound\-objective ambiguity and goal drift: it Divides the task into single\-objective phases of defect exploration and test generation; enforces a handoff Protocol that records the diagnosis and test plan, preventing context loss; and Isolates each phase's action space by tailoring the toolset to its task, preventing irrelevant tools from misleading execution\. On SWT\-Bench Verified, DPIAgent outperforms seven baselines across three backbone LLMs\. With DPI alone it reaches 81\.76% success rate on GPT\-5, the highest reported among open\-source methods, gaining up to 11\.88 points over the strongest baseline on GPT\-5\-Mini; adding test selection further raises it to 86\.17%\. Our analysis shows that architectural structure and backbone capability are complementary axes rather than substitutes, demonstrating DPI's generalizability across model classes\.

## Asynchronous Agentic Poisoning

**Authors:** Guangnian Wan; Shizun Wang; Qi Li; Xinchao Wang

**ID:** 153307 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MGAeMt2GKk>) | [PDF](<https://openreview.net/pdf?id=MGAeMt2GKk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153307>)

LLM agents are increasingly studied as systems that can self\-evolve during deployment\. A representative mechanism for realizing self\-evolution is memory evolution, where agents maintain evolving memories derived from previous tasks and condition future inference on their memory\.  Although memory evolution is intended to improve agent performance, it also creates a feedback loop in which model\-generated content can persist across tasks and influence future decisions\. We study this loop as a delayed attack channel for memory\-evolving agents\. We introduce asynchronous agentic poisoning, a provider\-side threat in which a malicious provider releases a model that appears safe under fresh\-context evaluation but exhibits unsafe behavior after self\-evolving through memory evolution\. We realize this threat by fine\-tuning the released model to silently embed a hidden marker into its otherwise normal responses, causing the marker to accumulate in the agent’s memory through memory evolution\. When the accumulated markers are later retrieved into the input context, the model reacts to them as a backdoor trigger and shifts to attacker\-specified behavior\. This creates a self\-triggered transition from safety\-aligned behavior to attacker\-specified behavior without requiring any post\-deployment attacker interaction\. Experimental results show that our method increases the harmful rate from below 5\\% to around 90\\% after memory evolution, while not substantially degrading the model’s self\-evolution performance\. These findings demonstrate that memory evolution creates a provider\-side pathway for delayed compromise, allowing a model to appear safe at release time while becoming unsafe after deployment through the agent’s self\-evolution process\.

## GeoSym127K: Scalable Symbolically\-verifiable Synthesis for Multimodal Geometric Reasoning

**Authors:** Jinhao Jing; Zheng Ma; Jinwei Liang; Qiannian Zhao; Shuang Chen; Jing Yang; Prayag Tiwari; Jingjing Bai; Benyou Wang; Por L Yee; Zhan Su; Lewei Lu

**ID:** 139481 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NO4INpEpCi>) | [PDF](<https://openreview.net/pdf?id=NO4INpEpCi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139481>)

Large Multimodal Models \(LMMs\) often struggle with geometric reasoning due to visual hallucinations and a lack of mathematically precise Chain\-of\-Thought \(CoT\) data\. To address this, we propose the GeoSym Engine, an automated and scalable neuro\-symbolic framework\. By leveraging a type\-conditional grammar and an analytic SymGT Solver, it derives exact symbolic ground truths and seamlessly integrates with a robust rendering pipeline to produce high\-precision geometric diagrams\. Using this engine, we construct GeoSym127K, a difficulty\-stratified dataset featuring 51K high\-resolution images, 127K questions with symbolic ground truths, and 55K answer\-verified CoT QA pairs\. We also introduce GeoSym\-Bench, an expert\-curated suite of 511 complex samples for rigorous evaluation\. Through extensive supervised fine\-tuning \(SFT\), we demonstrate that GeoSym drives concentrated improvements specifically on diagram\-dependent and multi\-step geometry tasks\. Our Qwen3\-VL\-8B model gains an absolute \+22\.21% on the MathVerse Vision\-Only subset and reaches 61\.52% \(\+6\.19% improvement\) on WeMath, mitigating long\-horizon logic fragmentation and outperforming advanced closed\-source models like Doubao\-1\.8\. Furthermore, applying Reinforcement Learning with Verifiable Rewards \(RLVR\) via GRPO reveals that initializing from structural SFT checkpoints substantially elevates the performance ceiling over zero\-shot RL\. Driven by deterministic exact\-match signals, this showcases the robust scaling potential of our verifiable reasoning synthesis\. Datasets and code are available at https://huggingface\.co/datasets/Tomie0506/GeoSym127K and https://github\.com/Tomie56/GeoSym127K

## MIRAGE: Mobile Agents with Implicit Reasoning and Generative World Models

**Authors:** Zhichao Yang; Yuanze Hu; Haojie Hao; Longkun Hao; Dongshuo Huang; Hongyu Lin; Li; Lanqing HONG; Yihang Lou; Yan Bai

**ID:** 156106 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0M1aZJgLap>) | [PDF](<https://openreview.net/pdf?id=0M1aZJgLap>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156106>)

_Abstract unavailable from the accessible public sources._

## Argument Graph Uncertainty: Quantifying Uncertainty from the Logical Structure of Reasoning Chains

**Authors:** Simon Baur; Sumire Honda; Wojciech Samek; Jackie Ma

**ID:** 149153 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sRkn7hto0l>) | [PDF](<https://openreview.net/pdf?id=sRkn7hto0l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149153>)

_Abstract unavailable from the accessible public sources._

## Contrastive Thinking Decoding: Steering Answer Generation in Reasoning Models

**Authors:** Taehyeon Kim; Youngsoo Jang; Hyunsoo Lee; Yu Jin Kim; Moontae Lee

**ID:** 153432 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LNzV4tfoSx>) | [PDF](<https://openreview.net/pdf?id=LNzV4tfoSx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153432>)

_Abstract unavailable from the accessible public sources._

## MIRAGE: Mobile Agents with Implicit Reasoning and Generative World Models

**Authors:** Zhichao Yang; Yuanze Hu; Haojie Hao; Longkun Hao; Dongshuo Huang; Hongyu Lin; Li; Lanqing HONG; Yihang Lou; Yan Bai

**ID:** 156106\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156106

[Paper](<https://openreview.net/forum?id=0M1aZJgLap>) | [PDF](<https://openreview.net/pdf?id=0M1aZJgLap>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156106>)

_Abstract unavailable from the accessible public sources._

## Argument Graph Uncertainty: Quantifying Uncertainty from the Logical Structure of Reasoning Chains

**Authors:** Simon Baur; Sumire Honda; Wojciech Samek; Jackie Ma

**ID:** 149153\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149153

[Paper](<https://openreview.net/forum?id=sRkn7hto0l>) | [PDF](<https://openreview.net/pdf?id=sRkn7hto0l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149153>)

_Abstract unavailable from the accessible public sources._

## Contrastive Thinking Decoding: Steering Answer Generation in Reasoning Models

**Authors:** Taehyeon Kim; Youngsoo Jang; Hyunsoo Lee; Yu Jin Kim; Moontae Lee

**ID:** 153432\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153432

[Paper](<https://openreview.net/forum?id=LNzV4tfoSx>) | [PDF](<https://openreview.net/pdf?id=LNzV4tfoSx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153432>)

_Abstract unavailable from the accessible public sources._

## Chain\-of\-Thought Oversight Should Not Treat Faithfulness as Monitorability

**Authors:** Sichao Li; Sai Ma; Xiyang Hu; Chudi Zhong; Tongliang Liu

**ID:** 140099 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DLek3EUyds>) | [PDF](<https://openreview.net/pdf?id=DLek3EUyds>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140099>)

Chain\-of\-thought \(CoT\) oversight is often motivated by a simple premise: if a model exposes its reasoning, then its behavior should be easier to monitor\. This position paper argues that the premise conflates several properties that can come apart in practice\.  To make this separation explicit, we distinguish four properties: reasoning visibility \(whether a trace is disclosed\), mechanistic faithfulness \(whether reasoning step content is supported by internal activations\), behavioral monitorability \(whether a specified monitor can recover a target property on held\-out cases\), and mechanistic localizability \(whether a compact causal mechanism can be found\)\. Claims about one require evidence specific to that property\. We support this position with two mirror\-image case studies on open\-weight reasoning models\. In security vulnerability reasoning, probes over internal activations confirm that key reasoning steps are faithfully represented, yet a reference\-assisted LLM jury cannot reliably judge whether the resulting analysis is correct on held\-out cases\. In authority\-hint factual reasoning, the pattern reverses: an external monitor detects the target behavior near\-perfectly, but repeated mechanistic analyses fail to isolate a compact causal circuit\. These results show that internal support does not guarantee monitorability, and monitorability does not guarantee localizability\. We argue that CoT oversight papers should adopt property\-specific reporting: every claim should state the reasoning access tier, target property, monitor class, monitor competence, held\-out protocol, baseline, and evidence type\.

## Evaluating Physical Reasoning in LLM Agents Requires Construction Benchmarks

**Authors:** Wenhao Deng; Tian Xia; Yuru Jiang; Joemon M Jose; Tailin Wu

**ID:** 140116 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=42PVaAYxLX>) | [PDF](<https://openreview.net/pdf?id=42PVaAYxLX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140116>)

Physical reasoning is central to agents that step into the physical world\. Models now excel at code and math, but their physical reasoning capabilities remain largely untested\. Existing physical benchmarks evaluate goal\-state matching rather than functional performance\. This position paper argues that evaluating physical reasoning in LLM agents requires construction benchmarks, where physics verifies functional outcomes\. To operationalize physical reasoning evaluation, we identify five capabilities spanning the full agentic loop from goal to verified artifact\. Our audit of eleven physical benchmarks finds only two that combine realistic physics with functional verification, the minimum requirements for testing physical reasoning; both are construction benchmarks\. Neither covers all five capabilities, yet frontier models already achieve near\-zero success as task complexity increases\. Progress depends on the breadth of benchmarks we build\. We call on academia, game studios, and industry labs to expand construction benchmarks along both axes, widening capability coverage and deepening physical challenges\. Their breadth determines how fully agents move from code and math to reshaping the physical world\.

## Bridging Modalities, Spanning Time: Structured Memory for Ultra\-Long Agentic Video Reasoning

**Authors:** Jiazheng Li; Chi\-Hao Wu; Yunze Liu; Kaize Ding; Jundong Li; Chuxu Zhang

**ID:** 156072 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0evT0zV3xO>) | [PDF](<https://openreview.net/pdf?id=0evT0zV3xO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156072>)

Understanding ultra\-long videos such as egocentric recordings, live streams, or   surveillance footage spanning days to weeks, remains a challenge\. For   current multimodal LLMs: even with million\-token context windows, frame   budgets cover only tens of minutes of densely sampled video, and most   evidence is discarded before inference begins\. Memory\-augmented and   agentic approaches help with scale, but their retrieval remains   fragmented across modalities and lacks long\-range narrative summaries   that span days or weeks\. We propose MAGIC\-Video, a training\-free   framework built around a multimodal memory graph with interleaved narrative chain: the   graph unifies episodic, semantic, and visual content through six typed   edges and supports cross\-modal retrieval, while the chain distils   long\-horizon entity biographies and recurring activity events\.   At inference time, an agentic loop   interleaves graph retrieval with narrative fact injection, covering both   the modality and time dimensions of ultra\-long video in a single retrieval   pipeline\. On EgoLifeQA, Ego\-R1 and MM\-Lifelong, MAGIC\-Video consistently   outperforms strong general\-purpose, long\-video, and agentic baselines,   with gains of 10\.1, 7\.4, and 5\.9 points over the prior best agentic   system on each benchmark\.

## From Patches to Trajectories: Privileged Process Supervision for Software\-Engineering Agents

**Authors:** Murong Ma; Tianyu Chen; Yun Lin; Shuai Lu; Qinglin Zhu; Yeyun Gong; Zhiyong Huang; Peng CHENG; Yan Lu; Jin Song Dong

**ID:** 150388 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iQIFIFP5W7>) | [PDF](<https://openreview.net/pdf?id=iQIFIFP5W7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150388>)

Supervised fine\-tuning \(SFT\) on long teacher trajectories is the dominant method for instilling investigation and reasoning capabilities into open software\-engineering \(SWE\) agents\. Under SFT, every retained response is an imitation target, so the student inherits not only the trajectory's outcome but also any flaw in its intermediate steps, including ungrounded leaps and redundant loops\. High\-quality training data must therefore be jointly effective \(each step is grounded and narrows the agent's epistemic gap to the correct fix\) and efficient \(each step is information\-bearing rather than redundant or looping\)\. Existing recipes filter or relabel teacher rollouts using only a binary terminal verifier, which does not directly target these axes and provides no supervision on instances where the teacher fails\.  Every real issue ships with a developer\-authored reference patch $p^\\star$ that implicitly testifies to the file paths, runtime behaviors, and conventions a fix presupposes, but the standard pipeline discards it\. We propose P2T \(Patches\-to\-Trajectories\), which uses $p^\\star$ as privileged information during curation, and frames trajectory construction as a bi\-objective program over per\-step effectiveness and trajectory length\. A reverse phase distills $p^\\star$ into a latent process graph $G^\\star$ of contextual facts and solution milestones, encoding dense intermediate anchors in constructive ordering\. A forward phase curate trajectories from blinded teacher continuations, scoring per\-step progress against $G^\\star$ under a leakage\-blocking groundedness check and committing the shortest segments that retain effectiveness\.   Using only 1\.8k curated SWE\-Gym instances, P2T improves both axes simultaneously over outcome\-filtered SFT and its tool\-error\-masking variant: on SWE\-bench Verified, it lifts Pass@1 by up to \+10\.8 points while cutting per\-instance inference cost by 15%, with consistent gains on SWE\-bench Lite and across two teachers\. A size\-matched ablation and qualitative analysis further isolate per\-trajectory quality from data scale\.

## An Enigma of Artificial Reason: Investigating the Production\-Evaluation Gap in Large Reasoning Models

**Authors:** Mingzhong Sun; Teresa Yeo; Armando Solar\-Lezama; Tan Zhi\-Xuan

**ID:** 149795 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nHVT3A8K70>) | [PDF](<https://openreview.net/pdf?id=nHVT3A8K70>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149795>)

Studies of human reasoning have shown that people are typically stronger at evaluating reasoning than producing it from scratch\. In contrast, large reasoning models \(LRMs\) are trained to excel at producing long chains of reasoning to solve complex problems\. How then do LRMs perform at evaluating reasons? We investigate this with the Valid\-Answer\-Invalid\-Reasoning \(VAIR\) dataset: math problems and solutions with trivial reasoning flaws but valid answers, designed to isolate reasoning evaluation from the confound of reasoning production\. Unlike humans, who we find are only 6\\% worse at grading than solving such problems, we find a substantial production\-evaluation gap in LRMs: frontier models score as low as 48\\% when evaluating VAIR solutions, despite near\-perfect solution production\.  Why this enigma? Through chain\-of\-thought \(CoT\) analysis, we find evidence of an answer confirmation bias: LRMs often produce then check for the correct answer instead of carefully verifying each step, fabricating rationalizations even when noticing anomalous reasoning\. Linear probes corroborate this, showing that while LRM activations encode some representation of valid reasoning, they fail to robustly represent VAIR solutions as invalid\. Causal patching of the final answer's representations causes LRM verdicts and activations to flip, demonstrating that answer validity is responsible for models' confirmation biases\. These findings indicate an outstanding limitation in dominant approaches to reasoning training, which incentivize LRMs to produce and confirm reasoning towards correct answers, but not to robustly evaluate the underlying reasons\.

## Lean Refactor: Multi\-Objective Controllable Proof Optimization via Agentic Strategy Search

**Authors:** Jialin Lu; Soonho Kong; Rodrigo Stehling; Kaiyu Yang; Zhangyang &amp;amp;quot;Atlas&amp;amp;quot; Wang; Weiran Sun; Wuyang Chen

**ID:** 149326 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qwMCaWPqxQ>) | [PDF](<https://openreview.net/pdf?id=qwMCaWPqxQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149326>)

We present Lean Refactor, a plug\-and\-play retrieval\-augmented agentic framework for multi\-objective, controllable, and version\-robust refactoring of Lean proofs\. LLM\-generated proofs are notoriously correct\-but\-verbose and brittle across library versions, yet existing refactoring works overlook three practical challenges: 1\) Lean refactoring is natively multi\-objective \(proof length, compilation cost, and version compatibility are often in tension\); 2\) Lean repositories have fragile compatibility, whereas LLM releases are unaware of Lean/Mathlib versions; 3\) Training\-based pipelines require repeated fine\-tuning with each new LLM release, scaling neither with model churn nor with Lean's release cycle\. Lean Refactor steers a frozen agentic LLM with retrievals from a curated database of multi\-objective refactoring strategies, each densely annotated with metadata such as supported Lean/Mathlib versions and expected compilation\-cost reduction\. Experiments show over 70\\% token\-level compression on competition benchmarks, over 20\\% on research repositories, and up to 60\\% compilation\-time reduction, outperforming prior work and Claude Code\. Version\-filtered retrieval further improves compression on the target Lean version, and refactored miniF2F proofs exhibit stronger zero\-shot version transfer to future Lean releases than their unrefactored counterparts\. We will release our code, models, and data upon acceptance\.

## CLIFT: Conformal Self\-Verification for Web Agent Training and Test\-Time Scaling

**Authors:** Yifan Zhang; Yutong Dai; Viraj Prabhu; Zhiyuan Hu; Ran Xu; Zeyuan Chen

**ID:** 150357 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=igVA4JNEyQ>) | [PDF](<https://openreview.net/pdf?id=igVA4JNEyQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150357>)

Open\-source web agents are now strong enough to execute realistic browser tasks, but training them with reinforcement learning still depends on weak supervision: binary task success is too sparse for credit assignment, while frontier\-language\-model judges are too expensive to call at every step and cannot be assumed available at deployment\. We introduce CLIFT, a training and test\-time scaling method built around conformal self\-verification\. During training, the agent answers natural\-language verification questions about its own rollouts; a Compositional Conformal Certifier keeps only question signals whose URL\-conditional evidence agrees with a training\-time judge, assigns signed trust weights through polarity\-aware lift, and blends the resulting verifier score into per\-step rewards in a way that never subtracts from the judge baseline\. At test time, the same certified bank is frozen and reused as structured evidence for Conformal Trajectory Selection \(CTS\): the agent samples a greedy rollout and one or more diverse retries, the self\-verifier summarises each URL trace, and a conservative majority\-vote rule chooses whether to swap away from the current incumbent without calling any external judge\. This single mechanism supports three settings\. On WebArena Infinity, CLIFT achieves state\-of\-the\-art performance among open\-source web agents\. On VisualWebArena, a bank trained with the open model transfers to GPT\-5\.5 at test time and reaches state\-of\-the\-art performance under the canonical harness\. On Online Mind2Web, without training an agent on the benchmark, translating the certified question bank improves a live\-web agent in zero\-shot evaluation\. Together these results position conformal self\-verification as a way to turn costly judge feedback into a reusable training signal and a judge\-free test\-time scaling signal\.

## CLIFT: Conformal Self\-Verification for Web Agent Training and Test\-Time Scaling

**Authors:** Yifan Zhang; Yutong Dai; Viraj Prabhu; Zhiyuan Hu; Ran Xu; Zeyuan Chen

**ID:** 150357\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150357

[Paper](<https://openreview.net/forum?id=igVA4JNEyQ>) | [PDF](<https://openreview.net/pdf?id=igVA4JNEyQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150357>)

Open\-source web agents are now strong enough to execute realistic browser tasks, but training them with reinforcement learning still depends on weak supervision: binary task success is too sparse for credit assignment, while frontier\-language\-model judges are too expensive to call at every step and cannot be assumed available at deployment\. We introduce CLIFT, a training and test\-time scaling method built around conformal self\-verification\. During training, the agent answers natural\-language verification questions about its own rollouts; a Compositional Conformal Certifier keeps only question signals whose URL\-conditional evidence agrees with a training\-time judge, assigns signed trust weights through polarity\-aware lift, and blends the resulting verifier score into per\-step rewards in a way that never subtracts from the judge baseline\. At test time, the same certified bank is frozen and reused as structured evidence for Conformal Trajectory Selection \(CTS\): the agent samples a greedy rollout and one or more diverse retries, the self\-verifier summarises each URL trace, and a conservative majority\-vote rule chooses whether to swap away from the current incumbent without calling any external judge\. This single mechanism supports three settings\. On WebArena Infinity, CLIFT achieves state\-of\-the\-art performance among open\-source web agents\. On VisualWebArena, a bank trained with the open model transfers to GPT\-5\.5 at test time and reaches state\-of\-the\-art performance under the canonical harness\. On Online Mind2Web, without training an agent on the benchmark, translating the certified question bank improves a live\-web agent in zero\-shot evaluation\. Together these results position conformal self\-verification as a way to turn costly judge feedback into a reusable training signal and a judge\-free test\-time scaling signal\.

## SpatialClaw: Rethinking Action Interface for Agentic Spatial Reasoning

**Authors:** Seokju Cho; Ryo Hachiuma; Abhishek Badki; Hang Su; Byung\-Kwan Lee; Chan Hee Song; Sifei Liu; Subhashree Radhakrishnan; Seungryong Kim; Frank Wang; Min\-Hung Chen

**ID:** 149047\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149047

[Paper](<https://openreview.net/forum?id=tHCYfFr3sR>) | [PDF](<https://openreview.net/pdf?id=tHCYfFr3sR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149047>)

Spatial reasoning, the ability to determine where objects are, how they relate, and how they move in 3D, remains a fundamental challenge for vision\-language models \(VLMs\)\. Tool\-augmented agents attempt to address this by augmenting VLMs with specialist perception modules, yet their effectiveness is bounded by the \*action interface\* through which those tools are invoked\. In this work, we study how the design of this interface shapes the agent's capacity for open\-ended spatial reasoning\. Existing spatial agents either employ single\-pass code execution, which commits to a full analysis strategy before any intermediate result is observed, or rely on a structured tool\-call interface that often offers less flexibility for freely composing operations or tailoring the analysis to each task\. Both designs offer limited flexibility for open\-ended, complex 3D/4D spatial reasoning\. We therefore propose \*\*SpatialClaw\*\*, a training\-free framework for spatial reasoning that adopts code as the action interface\. \*\*SpatialClaw\*\* maintains a stateful Python kernel pre\-loaded with input frames and a suite of perception and geometry primitives, letting a VLM\-backed agent write one executable cell per step conditioned on all prior outputs, enabling the agent to flexibly compose and manipulate perception results and adapt its analysis to both intermediate text and visual observations and the demands of each problem\. Evaluated across \*\*20 spatial reasoning benchmarks\*\* spanning a broad range of static and dynamic 3D/4D spatial reasoning tasks, \*\*SpatialClaw\*\* achieves 59\.9% average accuracy, outperforming the recent spatial agent by \*\*\+13\.6 points\*\*, with consistent gains across six VLM backbones from two model families \*without any benchmark\- or model\-specific adaptation\*\.

## Before Words, Beyond Speech: Evaluating Nonverbal Social Reasoning in Early Childhood

**Authors:** Marie Huynh; Laura Bravo\-Sánchez; Lauren K Dubin; Nick Haber; Philip A Fisher; Serena Yeung\-Levy

**ID:** 139741\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139741

[Paper](<https://openreview.net/forum?id=7C5CgIiHcA>) | [PDF](<https://openreview.net/pdf?id=7C5CgIiHcA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139741>)

Children's earliest years are a period of intense social learning, during which meaning is built through gaze, gesture, and physical contact\. Yet, this critical aspect of social interaction remains under\-evaluated in multimodal video understanding, as existing benchmarks prioritize the conversation\-driven interactions of adults\. We address this gap with NEST \($\\textbf\{N\}$aturalistic $\\textbf\{E\}$arly\-childhood $\\textbf\{S\}$ocial in$\\textbf\{T\}$eractions\), the first child\-centric benchmark for nonverbal social reasoning\. NEST comprises 1,208 manually annotated clips \($\\sim$12s\) curated for diversity across naturalistic settings, cultural contexts, and developmental stages\. Beyond a lack of data, targeted model improvement in this domain is hindered by coarse evaluation schemas that conflate basic perception with higher\-order reasoning\. To resolve this, NEST introduces a compositional schema that builds atomic interaction cues into progressive levels of social reasoning: contextual, behavioral, interpersonal, and open\-ended descriptions\. Extensive analysis of state\-of\-the\-art Vision\-Language Models \(VLMs\) reveals a stark performance collapse: despite strong contextual recognition, models exhibit substantial gaps in decoding precise behavioral and interpersonal cues\. We trace these failures to specific biases, including poor consequence grounding and temporal sensitivity\. Finally, we ground NEST in real\-world applications by evaluating VLMs using domain adaptation strategies\. Ultimately, NEST provides a rigorous testbed for advancing socially grounded artificial intelligence in early childhood\. The dataset and code will be publicly released\.

## Improving General Role\-Playing Agents via Psychology\-Grounded Reasoning and Role\-Aware Policy Optimization

**Authors:** Zhenhua Xu; Dongsheng Chen; Jian Li; Yitong Lin; Zhebo Wang; Jiafu Wu; Yizhang Jin; Chengjie Wang; Meng Han; Yabiao Wang

**ID:** 154485 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DF7xRhiXvd>) | [PDF](<https://openreview.net/pdf?id=DF7xRhiXvd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154485>)

Building general\-purpose role\-playing agents that faithfully portray any character from a natural\-language profile remains challenging\. The dominant paradigm\-\-\-supervised fine\-tuning\-\-\-encourages behavioral mimicry without deep, human\-like internal thought processes, resulting in poor out\-of\-distribution generalization\. Therefore, we propose Psy\-CoT, a psychology\-grounded chain\-of\-thought framework that decomposes pre\-response reasoning into three role\-specific steps\-\-\-Interaction Perception, Psychological Empathy, and Logical Construction\-\-\-so that the model thinks dynamically from the profile rather than merely mimicking surface patterns\. While structured reasoning provides a foundation, it alone is insufficient; reinforcement learning is essential to further align the model with character fidelity\. However, we observe that under LLM\-based reward models, both generic phrases that hack the reward model and genuinely role\-specific phrases receive identical gradient signals\-\-\-this hacking accumulates over training, misleading the model into treating both as equally optimal choices\. To address this, we propose Role\-Aware Policy Optimization \(RAPO\), which uses profile\-\-token mutual information to weight gradients asymmetrically\-\-\-amplifying role\-specific tokens under positive advantage while attenuating them under negative advantage\. Experiments on CoSER, CharacterBench, and CharacterEval demonstrate that Psy\-CoT outperforms existing role\-playing CoT methods, and RAPO consistently surpasses GRPO across multiple model scales\.

## PieArena: Ranking and Profiling Language Agents in Realistic Negotiation Scenarios

**Authors:** Chris Zhu; Sasha Cui; Will S Dufallo; Runzhi Jin; Zhen Xu; Linjun Zhang; Daylian M Cain

**ID:** 138985 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sODMs3VRWj>) | [PDF](<https://openreview.net/pdf?id=sODMs3VRWj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138985>)

We present an in\-depth evaluation of LLMs' ability to negotiate, a central business task requiring strategic reasoning, theory of mind, and economic value creation\. To do so, we introduce \*\*PieArena\*\*, a large\-scale negotiation benchmark grounded in multi\-agent interactions over realistic scenarios adapted from MBA negotiation courses at an elite business school\. We evaluate language agents across three pairing regimes: mirror\-play, cross\-play, and human–LM play\. We develop a ranking model for continuous negotiation payoffs that yields order\-invariant, uncertainty\-quantified leaderboards while correcting for systematic experimental asymmetries\. We further study the effects of joint\-intentionality agentic scaffolding and find asymmetric gains, with large improvements for mid\- and lower\-tier LMs and diminishing returns for frontier LMs\. As calibration anchors, we collect human–human and human–LM negotiation data from trained business school students, finding that a representative frontier language agent \(GPT\-5\) matches or exceeds this human baseline in our evaluation settings\. Beyond deal outcomes, PieArena provides a multi\-dimensional behavioral profile that reveals cross\-model heterogeneity in instruction compliance, computation accuracy, as well as judge\-assessed deception and reputation, illustrating the value of evaluation beyond outcome\-only leaderboards\.

## EvoDiagram: Agentic Editable Diagram Creation via Design Expertise Evolution

**Authors:** Tianfu Wang; Leilei Ding; Ziyang Tao; Yi Zhan; zhiyuan; Wei Wu; Yuxuan Lei; Junyang Wang; Yizhao Xu; Yin WU; Zhengyu Hu; Hongyuan Zhu; Nicholas Jing Yuan; Yanyong Zhang; Hui Xiong

**ID:** 154437 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DYFU7owVJ3>) | [PDF](<https://openreview.net/pdf?id=DYFU7owVJ3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154437>)

High\-fidelity diagram creation requires coordinated visual\-spatial decisions over semantic topology, visual styling, and geometric layout\. Existing methods face a representation gap: pixel\-based generation offers limited object\-level control, while code\-based synthesis provides executable structure at the cost of intuitive manipulation\. We introduce EvoDiagram, an agentic framework for editable diagram creation through an intermediate canvas schema that is both machine\-actionable and directly manipulable by users\. EvoDiagram first constructs a diagram manifest through coordinated structure, style, and layout agents, and then renders the manifest in a diagnostic verification environment\. This environment produces objective defect signals and VLM\-based critique, enabling localized refinement of the current diagram while also providing evidence for long\-term design expertise evolution\. The evolution mechanism distills refinement traces into a three\-tier design expertise memory, where candidate strategies are linked to the verification evidence that supports them and are promoted into broader guidelines and principles only through repeated cross\-context support\. We further define CanvasBench, a canvas\-recoverable benchmark and evaluation protocol with content, visual, and cognitive dimensions\. The current manuscript focuses on the framework, benchmark design, and reporting protocol; empirical results should be added only when the corresponding artifacts, judge traces, and analysis scripts are available for verification\. Our code is available at \\href\{https://anonymous\.4open\.science/r/evo\-diagram/\}\{https://anonymous\.4open\.science/r/evo\-diagram/\}\.

## Consumer Search and Social Learning in Agentic Markets

**Authors:** Brendan Lucier; Nicole Immorlica; Markus Mobius; Aleksandrs Slivkins; Daniel G Goldstein; Jake M Hofman; Sonia Jaffe; David Rothschild

**ID:** 154159 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Fogx1QxJIm>) | [PDF](<https://openreview.net/pdf?id=Fogx1QxJIm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154159>)

Motivated by agentic markets \-\- two\-sided markets in which AI tools facilitate search \-\- we propose a model that incorporates  individual consumer search and market\-wide learning, solve it to understand the long\-run market outcomes, and then study the impact of improved search technologies on these outcomes\. A sequence of consumers engage in costly search to acquire progressively refined signals of product fit prior to purchase\. The market observes acquired signals and post\-transaction feedback thereby impacting future searches\. We solve for the per\-consumer optimal search policy and characterize the  steady\-state of the  learning dynamics\. As search technologies reduce the cost and/or increase the informativeness of search, they cause an improvement in learning and consumer surplus\. Using numerical simulations, we also find that these technologies improve the rate of learning and the trajectory of consumer utility\. Notably, we show that if the market is unable to observe acquired signals, search technologies can degrade market outcomes, highlighting the importance of transparency in agentic markets\.

## A Latent World\-Action Model with Jointly Aligned Reasoning

**Authors:** Hao Luo; Wanpeng Zhang; Yicheng Feng; Sipeng Zheng; Haiweng Xu; Chaoyi Xu; Ziheng Xi; Yuhui Fu; Zongqing Lu

**ID:** 149267 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ray5fCkxmm>) | [PDF](<https://openreview.net/pdf?id=ray5fCkxmm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149267>)

_Abstract unavailable from the accessible public sources._

## EventPrune: Cascaded Event\-Assisted Token Pruning for Efficient First\-Person Dynamic Spatial Reasoning

**Authors:** Pengtao Ma; Ziliang Zhou; Ciyu Ruan; Haoyang Wang; kaiyuan Li; Zihang GONG; Wenhua Ding; Chen Gao; Jingao Xu; Xinlei Chen

**ID:** 151793 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XyYCbuAP7m>) | [PDF](<https://openreview.net/pdf?id=XyYCbuAP7m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151793>)

First\-person dynamic spatial reasoning requires models to track continuous motion and precise geometric structure, but the quadratic attention cost of Transformer\-based Video\-LLMs makes dense visual tokens computationally expensive\.  Existing token pruning paradigms predominantly rely on discrete static snapshots, failing to preserve the physical dynamics essential for reasoning\. We propose Event Cascade Pruning \(ECP\), to our knowledge the first training\-free framework that leverages the high\-frequency motion cues from event cameras as a continuous event\-guided motion prior to guide token selection\. ECP combines three stages: Event\-Triggered Causal Sampling to anchor motion\-informative keyframes, Event\-guided Motion Saliency Filtering to remove static or low\-motion regions, and Event\-Attention Ranking Fusion to calibrate spatial attention with motion salient dynamics\.  With 80\\% visual token reduction, ECP outperforms the full\-token baseline \(37\.62\\% vs\. 36\.31\\%\) while achieving 1\.89× inference speedup and 52\\% GFLOPs reduction\.  We further introduce ESR\-Real, the first real\-world RGB\-event benchmark for first\-person spatial reasoning, where ECP improves accuracy by 2\.68\\% over full\-token baselines\.

## Render Structure Uncertainty for HTML Repair in  MLLM\-based UI\-to\-Code Generation

**Authors:** Haoran Ma; Jiechao Gao; Shisong Tang; bing han; Jifeng Hu; Hechang Chen

**ID:** 154842 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AW3Yb9jstt>) | [PDF](<https://openreview.net/pdf?id=AW3Yb9jstt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154842>)

Existing MLLM\-based UI\-to\-Code generation methods can generate complete HTML/CSS codes through end\-to\-end or multi\-stage pipelines, yet the generated codes often contain structural errors such as incorrect repeated layouts, wrong component boundaries, or missing interaction slots\. Subsequent generations may continue along the erroneous structure, causing the error to propagate and amplify\. This paper studies post\-generation repair: how can we locate and repair unreliable local DOM structures? We observe that this repair process is ambiguous in two ways: a mismatch between the target screenshot and the output may correspond to multiple plausible DOM subtrees, and a single DOM subtree may admit multiple repairs with different rendered behaviors\. We propose Render Structure Uncertainty \(RSU\)for partial DOM repair, a browser grounded uncertainty layer that can be attached to any base HTML generator\.  RSU parses the target screenshot into a visual structure graph and converts the browser execution trace of the generated code into a DOM\-anchored render structure graph\.  By matching these graphs, RSU yields structural mismatches and a small set of candidate DOM holes, preserving error attribution uncertainty\.  For each hole, RSU generates multiple local candidates, renders them in the full page context, and clusters them using render\-structure signatures that encode layout relations, repeated patterns, content slots, semantic roles, and invalid states, thereby modeling repair uncertainty\.  The retained representative candidates form a compact Partial DOM candidate set, over which we perform global reranking to produce the final HTML code\.  In this way, RSU reframes HTML repair into uncertainty\-guided search in render\-structure space, avoiding premature commitment to either a single error location or a single local repair\. Experiments show that RSU improves the generation quality of base models, producing higher\-quality HTML with better layout consistency and fewer local structural errors\.

## LocalAgent: Collaborative Agentic Verification for Fine\-Grained Instance\-Level Consistency

**Authors:** jiachen Guo; Xinshan Zhu; Boyun Wang; Yanyan Liang; Jun Wan; Feng Lin; Ajian Liu

**ID:** 149786 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nJtBeEwjzg>) | [PDF](<https://openreview.net/pdf?id=nJtBeEwjzg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149786>)

Multimodal large language models \(MLLMs\) have made rapid progress in general visual understanding, yet they still struggle with fine\-grained instance\-level consistency verification, where the goal is to determine whether two images depict the exact same physical object under varying viewpoints, illumination, and backgrounds\. This task requires both a global understanding of the target instance and a precise examination of subtle local evidence, since semantically similar objects may differ only in small discriminative regions\. To address this challenge, we propose \\textbf\{LocalAgent\}, a collaborative agentic framework that integrates the complementary strengths of large and small models\. Specifically, the MLLM first reasons from a global instance\-level perspective to identify suspicious local regions that may determine the final verification result\. These accurately localized regions are then delegated to a lightweight Local Evidence Verifier \(LEV\) toolkit for fine\-grained appearance and geometric matching\. The LEV toolkit consists of \\textbf\{Local Appearance Consistency \(LAC\)\}, which provides illumination\- and color\-robust similarity estimation, and \\textbf\{Local Geometric Correspondence \(LGC\)\}, which establishes reliable spatial correspondence under viewpoint changes\. Rather than directly replacing the MLLM's reasoning, LEV returns structured similarity scores and comparative evidence in a form that the MLLM can effectively interpret for final decision\-making\. This design enables a coordinated large\-small model collaboration: the MLLM contributes global semantic reasoning and region\-level suspicion localization, while specialized local verifiers provide precise, invariant, and interpretable evidence for ambiguous cases\. We further introduce an answer\-dominant reinforcement fine\-tuning \(RFT\) strategy that enables the policy to learn when verification is necessary\. Experiments show that LocalAgent achieves a \\textbf\{\+4\.8\\%\} average improvement over direct\-inference baselines, effectively narrowing the gap with closed\-source models, while preserving the general multimodal capabilities of the underlying MLLM\.

## Understanding the Out\-of\-Distribution Generalization of Chain\-of\-Thought Reasoning in LLMs

**Authors:** Nuojing Liang; Xiaotong Yuan; Pan Zhou

**ID:** 154527 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CwFstPZgCZ>) | [PDF](<https://openreview.net/pdf?id=CwFstPZgCZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154527>)

Chain\-of\-Thought \(CoT\) reasoning substantially improves Large Language Models \(LLMs\), yet its out\-of\-distribution \(OOD\) generalization mechanism remains theoretically underexplored\. We study CoT as compositional OOD generalization: the target task lacks complete reasoning trajectories or direct input\-output pairs, while training provides only in\-distribution \(ID\) atomic step data\. We show that CoT generalizes by repeatedly applying a shared single\-step predictor to compose reusable ID transitions\. Theoretically, the OOD task risk is controlled by the sum of ID subtask risks, with an error\-propagation coefficient  independent of reasoning depth/steps   $T$\. A Rademacher\-complexity analysis further gives a generalization gap of $\\mathcal\{O\}\(\\sqrt\{T/n\}\)$, rather than linear in $T$, due to predictor sharing, where $n$ denotes training samples per subtask\. For autoregressive Next\-Token Prediction, we derive an explicit bound  $\\mathcal\{O\}\\big\(k\\big\(\\sqrt\{\{T\}/\{mn\}\}\+\\sqrt\{\{T\}/\{n\}\}\+\{T\}/\{m\}\\big\)\\big\)$,   where $m$ and $k$ denote context length  and output token number per step\. Experiments on Atom\-Task and GSM8K support the theory, showing that CoT enables short\-to\-long and compositional generalization, while explicit state tracking is crucial\.

## Veri\-Sure: Multi\-Agent RTL Code Generation with Temporal Tracing, Slicing and Formal Verification

**Authors:** Jiale Liu; Taiyu Zhou; Tianqi Jiang

**ID:** 151369 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b570WrnLlN>) | [PDF](<https://openreview.net/pdf?id=b570WrnLlN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151369>)

In the rapidly evolving field of Electronic Design Automation \(EDA\), the deployment of Large Language Models \(LLMs\) for Register\-Transfer Level \(RTL\) design has emerged as a promising direction\. However, silicon\-grade correctness remains bottlenecked by \(i\) limited test coverage and reliability of simulation\-centric evaluation, \(ii\) regressions and repair hallucinations introduced by iterative debugging, and \(iii\) semantic drift as intent is reinterpreted across agent handoffs\. In this work, we propose Veri\-Sure, a multi\-agent framework that establishes a design contract to align agents' intent and uses a patching mechanism guided by static dependency slicing to perform precise, localized repairs\. By integrating a multi\-branch verification pipeline that combines trace\-driven temporal analysis with formal verification consisting of assertion\-based checking and Boolean equivalence proofs, Veri\-Sure helps improve functional correctness by enriching the simulation\-driven debugging loop with localized diagnostic hints\. We also introduce VerilogEval\-v2\-EXT, extending the original benchmark with 53 more industrial\-grade design tasks and stratified difficulty levels, and show that Veri\-Sure achieves state\-of\-the\-art verified\-correct RTL code generation performance, surpassing standalone LLMs and prior agentic systems\. Code and dataset are available at https://anonymous\.4open\.science/r/Veri\-Sure\-D861\.

## Anti\-Self\-Distillation for Reasoning RL via Pointwise Mutual Information

**Authors:** Guobin Shen; Xiang Cheng; Chenxiao Zhao; Lei Huang; Jindong Li; Dongcheng Zhao; XingYu Li

**ID:** 149938 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m54c3b8Evb>) | [PDF](<https://openreview.net/pdf?id=m54c3b8Evb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149938>)

On\-policy self\-distillation, where a student is pulled toward a copy of itself conditioned on privileged context \(e\.g\., a verified solution or feedback\), offers a promising direction for advancing reasoning capability without a stronger external teacher\. Yet in math reasoning the gains are inconsistent, even when the same approach succeeds elsewhere\. A pointwise mutual information analysis traces the failure to the privileged context itself: it inflates the teacher's confidence on tokens already implied by the solution \(structural connectives, verifiable claims\) and deflates it on deliberation tokens \(\*Wait\*, \*Let\*, \*Maybe\*\) that drive multi\-step search\. We propose Anti\-Self\-Distillation \(AntiSD\), which ascends a divergence between student and teacher rather than descending it: this reverses the per\-token sign and yields a naturally bounded advantage in one step\. An entropy\-triggered gate disables the term once the teacher entropy collapses, completing a drop\-in replacement for default self\-distillation\. Across five models from 4B to 30B parameters on math reasoning benchmarks, AntiSD reaches the GRPO baseline's accuracy in 2 to 10× fewer training steps and improves final accuracy by up to 11\.5 points\. AntiSD opens a path to scalable self\-improvement, where a language model bootstraps its own reasoning through its training signal\.

## CM2: Reinforcement Learning with Checklist Rewards for Multi\-Turn and Multi\-Step Agentic Tool Use

**Authors:** Zhen Zhang; Kaiqiang Song; Sean Wang; Yebowen Hu; Weixiang Yan; Chenyang Zhao; Henry P Zou; Haoyun Deng; Sathish Reddy Indurthi; Shujian Liu; Simin Ma; Xiaoyang Wang; Xin Wang; Song Wang

**ID:** 152001 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WFTd0B5z01>) | [PDF](<https://openreview.net/pdf?id=WFTd0B5z01>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152001>)

_Abstract unavailable from the accessible public sources._

## Seeing or Rationalizing? Scene\-Evidence\-Guided  Chain\-of\-Thought for Faithful 3D Multimodal  Reasoning

**Authors:** Guoqing Ma; Lihao Guo; Chuangxin Zhao; Yihao Zhong; Mingqi Yuan; Shan Yu

**ID:** 150559 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hFFajpszNV>) | [PDF](<https://openreview.net/pdf?id=hFFajpszNV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150559>)

_Abstract unavailable from the accessible public sources._

## ReSET: Accurate Latency\-Critical NVFP4 Reasoning via Step\-Aware Temperature Scaling

**Authors:** Sihwa Lee; Janghwan Lee; Donghoon Yoo; Jae Gon Kim; Hanyul Ryu; Soojung Ryu; Jungwook Choi

**ID:** 151005 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=devQEPcZzG>) | [PDF](<https://openreview.net/pdf?id=devQEPcZzG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151005>)

_Abstract unavailable from the accessible public sources._

## HierRR: Enhancing Instruction Alignment in Open\-Vocabulary Indoor Scene Synthesis via Agentic Hierarchical Reasoning and Reflection

**Authors:** Weilin Sun; Lei Meng; Lihui Zhang; Manyi Li; Xiangxu Meng

**ID:** 151568 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ze8wZz7XX1>) | [PDF](<https://openreview.net/pdf?id=Ze8wZz7XX1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151568>)

_Abstract unavailable from the accessible public sources._

## Enhancing Agentic Code Localization with Traceability Recovered from Repository Evolution

**Authors:** Yiming Liu; Binhang Qi; Weiyu Kong; Jiawei Liu; Xinxin Shan; Saijun Gao; Yun Lin

**ID:** 152178 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UyyXZoIZmv>) | [PDF](<https://openreview.net/pdf?id=UyyXZoIZmv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152178>)

While agentic frameworks have advanced repository\-level code localization, their reliance on static snapshots often leads to a $\\textit\{traceability gap\}$—the loss of implicit links between issue symptoms and code implementation\. To bridge this information deficit, we introduce $\\textbf\{T\}$raceability $\\textbf\{A\}$ugmented $\\textbf\{Co\}$de Localization \(TACO\), a framework that recovers retrievable and usable traceability from repository evolution to guide localization agents\.  TACO offline crystallizes historical pull requests into a dual\-index knowledge base through a prompt auto\-tuning technique, capturing high\-value semantic hints and architectural rationales\.  In the online phase, TACO employs a synergistic dual\-track retrieval workflow, cross\-validated by an arbiter and aligned temporally to handle version drift\.  Extensive evaluations on SWE\-bench Lite and SWE\-bench Verified across five state\-of\-the\-art agentic baselines demonstrate that TACO significantly improves exact\-match localization accuracy \(Acc@1\) by an average of 11\.29\\%, 13\.20\\%, and 12\.87\\% at the file, module, and function levels, respectively\.  Moreover, TACO significantly streamlines the exploration process, achieving an average reduction of 29\.2\\% in token usage and 30\.4\\% in monetary costs, with minimal offline maintenance overhead\.

## FlyAOC: Evaluating Agentic Ontology Curation of Drosophila Scientific Knowledge Bases

**Authors:** Xingjian Zhang; Sophia Moylan; Ziyang Xiong; Qiaozhu Mei; Yichen Luo; Jiaqi Ma

**ID:** 139748 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6t41YNPBSb>) | [PDF](<https://openreview.net/pdf?id=6t41YNPBSb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139748>)

Scientific knowledge bases accelerate discovery by curating findings from primary literature into structured, queryable formats for both human researchers and emerging AI systems\. Maintaining these resources requires expert curators to search papers, reconcile evidence across documents, and produce ontology\-grounded annotations\. Existing benchmarks usually evaluate isolated subtasks, such as named entity recognition or relation extraction, and therefore do not capture this end\-to\-end workflow\. We present FlyAOC to evaluate AI agents on end\-to\-end agentic ontology curation from scientific literature\. Given a gene symbol, a concise FlyBase gene description, access to a 16,898\-paper corpus, and ontology resources, agents must search for evidence and recover as many curator\-relevant structured annotations as possible\. Outputs span standardized function terms, expression patterns, and historical synonyms linking decades of nomenclature\. The benchmark includes 7,397 expert\-curated annotations across 100 genes drawn from FlyBase, the Drosophila knowledge base\. Across four baseline agent harnesses\-\-memorization, fixed pipeline, single\-agent, and multi\-agent\-\-FlyAOC is sensitive to harness design, model family, and tool\-use reliability\. These results reveal system\-level failure modes that model\-only evaluations do not capture\. FlyAOC provides a reproducible testbed for retrieval\-augmented scientific curation\.   \- Code: https://github\.com/xingjian\-zhang/flyaoc  \- Data: https://huggingface\.co/datasets/anonymous\-042/flyaoc

## Simple Test\-Time Refinement for Plot\-to\-Code Generation via Visual\-Code Diagnostics

**Authors:** Peiming Guo; Jinpeng Huang; Yangbin Sun; GaoXiong Cao; Ensheng Shi; Yuchi Ma; Yu Zhang; Meishan Zhang; Baotian Hu; Min zhang

**ID:** 149228 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rywd4Tm9jn>) | [PDF](<https://openreview.net/pdf?id=rywd4Tm9jn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149228>)

Plot\-to\-code generation has been greatly advanced by recent multimodal large language models \(MLLMs\)\. However, existing studies mainly focus on one\-pass generation or iterative sampling guided by verifier\-based filtering, which does not align with the typical human programming workflow of generate first, then iteratively error\-location and fix\. This naturally motivates a test\-time refinement paradigm for plot\-to\-code generation\.In this work, we present the first study on plot\-to\-code generation via iterative test\-time refinement\. We propose a Visual\-Code Diagnostics framework that enables refinement through visual feedback from source code\. Specifically, we first categorize generation errors into four coarse\-grained types, and then train lightweight discriminators to recognize and localize these errors based on the rendered visual outputs and corresponding code\. Unlike traditional compiler\- or debugger\-based verification, our approach performs iterative refinement guided by one diagnostics system, enabling more effective semantic and visual correction during test time\. Extensive experiments demonstrate that our method consistently improves generation quality across diverse generators and significantly outperforms strong test\-time scaling baselines\.

## Why Struggle with Continuous Latents? Interpretable Discrete Latent Reasoning via Rendered Compression

**Authors:** Shuochen Chang; Qingyang Liu; Shaobo Wang; Bingjie Gao; Qianli Ma; Haonan Zhao; Yibo Miao; Yulin Sun; Zelin Peng; Jiangtong Li; Li Niu

**ID:** 151626 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z9x8Ex4A4f>) | [PDF](<https://openreview.net/pdf?id=Z9x8Ex4A4f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151626>)

Large language models achieve high reasoning performance via explicit chain\-of\-thought and reinforcement learning, but require long output sequences and extended inference time\. Latent reasoning reduces this cost by shifting computation into a latent space; however, continuous latent methods are hard to train, suffering from unstable and uninterpretable reasoning trajectories\. We argue these issues stem from a misalignment between continuous\-space reasoning and discrete symbolic supervision, as continuous states lack explicit anchors for step\-by\-step alignment\. To resolve this, we propose \*\*Discrete Latent Reasoning \(DLR\)\*\*, the first method that converts continuous latent states into explicit discrete tokens\. Inspired by render\-based compression, we render textual chains of thought into images, extract visual features, and construct a discrete latent vocabulary via clustering\-based fine\-tuning\. Expanding the vocabulary and output head enables standard autoregressive modeling over both natural language and latent tokens, supporting pretraining alignment, SFT, and RL\. Experiments on five reasoning benchmarks and two model series \(Qwen3\-VL and LLaMA\-3\) confirm that \*\*DLR\*\* outperforms prior latent reasoning baselines with up to \*\*20$\\times$ compression\*\*\. Furthermore, the learned latent trajectories retain an interpretable semantic structure\. Overall, discrete latent tokens provide a controllable and interpretable basis for efficient latent reasoning\.

## A Benchmark for Omni\-Modal Reasoning in Long Videos

**Authors:** Mohammed Irfan Kurpath; Jaseel M Kaithakkodan; Jinxing Zhou; Sahal Shaji Mullappilly; Mohammad Almansoori; Noor Ahsan; Beknur Kalmakhanbet; sambal shikhar; Rishabh Lalla; Jean Lahoud; Mariette Awad; Fahad Shahbaz Khan; Salman Khan; Rao Anwer; Hisham Cholakkal

**ID:** 139047 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oCkr3KnHhU>) | [PDF](<https://openreview.net/pdf?id=oCkr3KnHhU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139047>)

Long\-form omni\-modal video understanding requires models to integrate vision, speech, and ambient audio with coherent long\-context reasoning\. Existing video benchmarks often trade off temporal scale, modality coverage, open\-ended interaction, and interpretable scoring\. To address this gap, we introduce $\\textbf\{LongShOTBench\}$, a long video evaluation benchmark designed around three coupled goals: holistic omni\-modal integration, intent\-driven open\-ended interaction, and rubric\-level diagnosis\. It constructs single\- and multi\-turn questions from practical viewing scenarios, involving systematical tasks for probing visual, speech, ambient\-audio, temporal, and cross\-modal reasoning\. Each item includes a reference answer and a weighted criterion\-level rubric, enabling evaluation to identify which perceptual facts, temporal links, modality\-grounding requirements, and reasoning steps are satisfied or missed\. All samples are manually verified and corrected to improve grounding, clarity, and rubric reliability\.  We also introduce $\\textbf\{LongShOTAgent\}$, a training\-free omni\-modal evidence\-seeking agent that couples full\-video preprocessing with targeted retrieval, query\-adaptive segment refinement, and explicit claim verification over visual, speech, and non\-speech audio evidence\. Its iterative search\-refine\-verify loop exposes intermediate evidence and lets modality\-specific specialists re\-analyze relevant moments before answering\.  We perform comprehensive evaluation of 105 video\-capable models spanning open\-source omni\-modal models, vision\-language systems, audio LLMs, agentic pipelines and closed\-source APIs\. Across this broad evaluation, current MLLMs remain far from saturating LongShOTBench, while our LongShOTAgent emerges as the strongest training\-free system, reaching 66\.64\\% overall\.  By releasing the benchmark, leaderboard, and agentic method, our work provides the community with a shared, interpretable testbed for evaluating and advancing long\-form omni\-modal video reasoning\.

## Unifying Reasoning and Planning through Energy Minimization

**Authors:** Adrian Rodriguez; Angelica Kim; Yunhui Guo; Yilun Du

**ID:** 154954 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9g7Kc9OMTB>) | [PDF](<https://openreview.net/pdf?id=9g7Kc9OMTB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154954>)

Generalization to harder reasoning and planning problems remains a central challenge for AI systems\. Although both domains can be viewed as search problems where valid solutions are easier to verify than generate, existing methods often rely on domain\-specific solvers or diffusion\-based energy models tailored to individual settings\. We introduce Energy Minimization Search\} \(EMS\), a unified framework for reasoning and planning that learns a single time\-invariant energy landscape\. Unlike diffusion\-based energy\-based models \(EBMs\), which perform annealed inference over time\-dependent landscapes, EMS performs direct gradient\-based optimization on one static landscape using the same training objective and inference procedure across domains\. Across reasoning tasks \(graph coloring, N\-Queens, 3\-SAT\) and planning tasks \(path finding and maze solving\), EMS matches or outperforms diffusion\-based EBMs, domain\-specific solvers, and diffusion\-based planners while using substantially less inference compute\.

## Improving the Efficiency of Language Agent Teams with Adaptive Task Graphs

**Authors:** Elizabeth Mieczkowski; Alexander Ku; Tiwalayo Eisape; Dilip Arumugam; John Matters; Katie Collins; Ilia Sucholutsky; Tom Griffiths

**ID:** 149121 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sjSjyEGmnu>) | [PDF](<https://openreview.net/pdf?id=sjSjyEGmnu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149121>)

Large language models \(LLMs\) are increasingly deployed in teams, yet existing coordination approaches often occupy two extremes\. Highly structured methods rely on fixed roles, pipelines, or task decompositions assigned a priori\. In contrast, fully unstructured teams enable adaptability and exploration but suffer from inefficiencies such as error propagation, inter\-agent conflicts, and wasted resources \(measured in time, tokens, or file operations\)\. We introduce Language Agent Teams for Task Evolution \(LATTE\), a framework for coordinating LLM teams inspired by distributed systems, where processors must operate under partial observability and communication constraints\. In LATTE, a team of agents collaboratively construct and maintain a shared, evolving coordination graph which encodes sub\-task dependencies, individual agent assignment, and the current state of sub\-task progress\. This protocol maintains consistency while empowering agents to dynamically allocate work, adapt coordination, and discover new tasks\. Across multiple collaborative tasks and a variety of base models, we demonstrate how LATTE reduces token usage, wall\-clock time, communication, and coordination failures \(e\.g\. file conflicts and redundant outputs\) while matching or exceeding the accuracy of standard designs including MetaGPT, decentralized teams, top\-down leader\-worker hierarchies, and static decompositions\.

## P$^\{3\}$: Joint Program\-and\-Proof Planning\\\\ for Verified Code Generation

**Authors:** Zenan Li; Ziran Yang; Peiyang Song; Zhaoyu Li; Kaiyu Yang

**ID:** 150553 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hIC9ua4c4q>) | [PDF](<https://openreview.net/pdf?id=hIC9ua4c4q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150553>)

Verified code generation asks a large language model \(LLM\) to generate both an executable program and a machine\-checkable proof that the program meets a formal specification, promising software that is correct by construction\. The de facto workflow decouples the two halves of the problem: first synthesize a program, then attempt to prove it correct\. We observe that this sequential pipeline can be both ineffective and inefficient in practice\. A program generated without anticipating its proof can be subtly incorrect or structurally difficult to verify, forcing the LLM into brittle repair loops that alternate between patching the code and patching the proof\. Inspired by Dijkstra's view that a program and its correctness argument should be developed hand in hand, we propose \\framework\{\}, an LLM\-based agentic workflow that first derives a unified program\-and\-proof plan from the specification, then elaborates the implementation and proof scaffold under this shared plan\. To evaluate verified code generation in realistic settings, we further introduce Lean4Commit0, a project\-level benchmark built by extracting core APIs from real\-world software repositories and translating their requirements, including relational specifications across APIs, into Lean tasks\. Using four frontier LLM backends, we evaluate \\framework\{\} on Verina, AlgoVeri, and our Lean4Commit0 benchmark, where it achieves the highest solve rate in every benchmark\-\-model setting\. Compared with the stronger baseline, it improves solve rates by 4\.6\-\-11\.2 percentage points and reduces per\-task API cost by up to roughly 40\\% and wall\-clock time by up to roughly 37\\% on the difficult subset of each benchmark\.

## GeoSym127K: Scalable Symbolically\-verifiable Synthesis for Multimodal Geometric Reasoning

**Authors:** Jinhao Jing; Zheng Ma; Jinwei Liang; Qiannian Zhao; Shuang Chen; Jing Yang; Prayag Tiwari; Jingjing Bai; Benyou Wang; Por L Yee; Zhan Su; Lewei Lu

**ID:** 139481\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139481

[Paper](<https://openreview.net/forum?id=NO4INpEpCi>) | [PDF](<https://openreview.net/pdf?id=NO4INpEpCi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139481>)

Large Multimodal Models \(LMMs\) often struggle with geometric reasoning due to visual hallucinations and a lack of mathematically precise Chain\-of\-Thought \(CoT\) data\. To address this, we propose the GeoSym Engine, an automated and scalable neuro\-symbolic framework\. By leveraging a type\-conditional grammar and an analytic SymGT Solver, it derives exact symbolic ground truths and seamlessly integrates with a robust rendering pipeline to produce high\-precision geometric diagrams\. Using this engine, we construct GeoSym127K, a difficulty\-stratified dataset featuring 51K high\-resolution images, 127K questions with symbolic ground truths, and 55K answer\-verified CoT QA pairs\. We also introduce GeoSym\-Bench, an expert\-curated suite of 511 complex samples for rigorous evaluation\. Through extensive supervised fine\-tuning \(SFT\), we demonstrate that GeoSym drives concentrated improvements specifically on diagram\-dependent and multi\-step geometry tasks\. Our Qwen3\-VL\-8B model gains an absolute \+22\.21% on the MathVerse Vision\-Only subset and reaches 61\.52% \(\+6\.19% improvement\) on WeMath, mitigating long\-horizon logic fragmentation and outperforming advanced closed\-source models like Doubao\-1\.8\. Furthermore, applying Reinforcement Learning with Verifiable Rewards \(RLVR\) via GRPO reveals that initializing from structural SFT checkpoints substantially elevates the performance ceiling over zero\-shot RL\. Driven by deterministic exact\-match signals, this showcases the robust scaling potential of our verifiable reasoning synthesis\. Datasets and code are available at https://huggingface\.co/datasets/Tomie0506/GeoSym127K and https://github\.com/Tomie56/GeoSym127K

## Natural Synthesis: Outperforming Reactive Synthesis Tools with Large Reasoning Models

**Authors:** Frederik Schmitt; Matthias Cosler; Niklas Metzger; Julian Siber; Vladimir Krsmanovic; Oscar Ghanem; Bernd Finkbeiner

**ID:** 152164 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V35878j7OK>) | [PDF](<https://openreview.net/pdf?id=V35878j7OK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152164>)

Reactive synthesis, the problem of automatically constructing a hardware circuit from a logical specification, is a long\-standing challenge in formal verification\. It is elusive for two reasons: It is algorithmically hard, and writing formal specifications by hand is notoriously difficult\. In this paper, we tackle both sides of the problem\. For the algorithmic side, we present a neuro\-symbolic approach to reactive synthesis that couples large reasoning models with model checkers to iteratively repair a synthesized Verilog implementation via sound symbolic feedback\. Our approach solves more benchmarks than the best dedicated tools in the annual synthesis competition and extends to constructing parameterized systems, a problem known to be undecidable\. On the specification side, we introduce an autoformalization step that shifts the specification task from temporal logic to natural language by introducing a hand\-authored dataset of natural\-language specifications for evaluation\. We demonstrate performance comparable to that of starting from formal specifications, establishing natural synthesis as a viable end\-to\-end workflow\.

## Boosting Inference with Guided Reasoning: Stochastic Exploration for Recursive Models

**Authors:** Andrew Corbett; Archit Sood; Anna Tzatzopoulou; Sai\-Aakash Ramesh; Tim Dodwell

**ID:** 149759 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nZD0FHMUmR>) | [PDF](<https://openreview.net/pdf?id=nZD0FHMUmR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149759>)

Recent work on recursive architectures has shown that tiny neural networks can be surprisingly powerful on structured reasoning tasks\. The trick is to model reasoning trajectories with a latent dynamical system\. We argue that the inference\-time behaviour of these architectures is best understood as approximate inference over latent reasoning trajectories, with deterministic recursion as the one\-particle, zero\-noise limit\. We make this view operational through guided stochastic exploration: stochastic perturbations of the reasoning dynamics propose neighbouring trajectories, and the model's existing early\-stopping head reweights them online\. The framework yields three label\-free diagnostics: local stability, guide alignment, and cloud\-token entropy\. These predict, from inference traces alone, whether the procedure will help and which of its outputs to trust\. On Sudoku\-Extreme it lifts exact\-solve accuracy from $85\.9\\%$ to $98\.0\\%$ without retraining; on Maze\-Hard the diagnostics flag a misaligned guide, as validation performance later confirms\. The same machinery thus characterises both when recursive reasoning has room to improve at the trajectory level and when the model's internal guide can recover it\.

## SlopCodeBench: Benchmarking How Coding Agents Degrade Over Long\-Horizon Iterative Tasks

**Authors:** Gabriel Orlanski; Devjeet R Roy; Alexander Yun; Changho Shin; Alex Gu; Albert Ge; Dyah Adila; Nicholas Roberts; Frederic Sala; Aws Albarghouthi

**ID:** 138903 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xxD8UZjGl8>) | [PDF](<https://openreview.net/pdf?id=xxD8UZjGl8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138903>)

Software development is iterative, yet agentic coding benchmarks hide design issues through their single\-shot setup\. Recent iterative benchmarks attempt to remedy this but heavily constrain an agent's design decision space, making it impossible to faithfully measure how their decisions shape future extensions\. We introduce SlopCodeBench, a benchmark comprising 36 problems and 196 checkpoints in which agents repeatedly extend their own solutions\. Unlike prior iterative benchmarks, our evolving specifications demand architectural decisions but leave internal structure to the agent\. We measure two forms of degradation: structural erosion \(concentrated complexity\) and verbosity \(redundant code\)\. Evaluating 15 coding agents across open and closed models, we find that no agent fully solves any problem end\-to\-end, and the best agent passes 14\.8% of checkpoints\. Quality degrades across checkpoints, with structural erosion rising in 77% of trajectories and verbosity in 75\.5%\. Compared to 473 open\-source Python repositories, agent code is 2\.3x more verbose and 2\.0x more eroded, and the human repositories degrade less often and by smaller margins across their git histories\. Explicit quality guidance reduces initial verbosity and erosion by up to a third, without affecting degradation rates\. SlopCodeBench identifies a failure mode that single\-shot benchmarks cannot detect: agents that pass checkpoints while producing code that erodes and bloats with each extension\.

## From Document Layout to Causal Topology: An End\-to\-End Architecture for Temporal Causal Reasoning

**Authors:** Zhifeng Yang; Wei Luo; Yongjian Chen; Shiqi Ou

**ID:** 150801\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150801

[Paper](<https://openreview.net/forum?id=fHjrkjB6Af>) | [PDF](<https://openreview.net/pdf?id=fHjrkjB6Af>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150801>)

Large language models \(LLMs\) generally lack deep causal reasoning capabilities in temporal reasoning\. Inspired by document layout reordering, this paper proposes a paradigm shift from discrete narratives to causal topologies\. It constructs two architectures: a training\-free neuro\-symbolic framework, temporal causal reasoning agent \(TCR\-Agent\), which achieves interpretable causal deduction and counterfactual truncation through external causal graph instantiation and a symbolic intervention engine; and an end\-to\-end model, temporal causal reasoning former \(TCR\-Former\), which internalizes these mechanisms into the Transformer attention space via a causal\-topological attention mask and temporal span biases\. Experiments on the TempoCausal benchmark demonstrate that TCR\-Agent comprehensively surpasses existing training\-free baselines\. At the same time, TCR\-Former achieves an accuracy 16\.5% higher than that of state\-of\-the\-art \(SOTA\) methods, outperforming large\-scale models such as GPT\-5\.4 and DeepSeek\-V3\.2 with only approximately 8\.6B parameters\. Further analysis reveals a structure\-reasoning disconnection phenomenon in existing methods: external symbolic constraints and chain\-of\-thought \(CoT\) reasoning can improve reasoning steps, yet fail to enhance deep causal deductive capability\. By internalizing temporal causal reasoning capabilities into the model, TCR\-Former effectively bridges this gap, providing an efficient and reliable end\-to\-end foundation for complex reasoning scenarios\.

## SkillOS: Learning Skill Curation for Self\-Evolving Agents

**Authors:** Siru Ouyang; Jun Yan; Yanfei Chen; Rujun Han; Zifeng Wang; Bhavana Dalvi Mishra; Rui Meng; Chun\-Liang Li; Yizhu Jiao; Kaiwen Zha; Maohao Shen; Vishy Tirumalashetty; George Lee; Jiawei Han; Tomas Pfister; Chen\-Yu Lee

**ID:** 151446\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151446

[Paper](<https://openreview.net/forum?id=ace71RDhko>) | [PDF](<https://openreview.net/pdf?id=ace71RDhko>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151446>)

LLM\-based agents are increasingly deployed to handle streaming tasks, yet they often remain one\-off problem solvers that fail to learn from past interactions\. Reusable skills distilled from experience provide a natural substrate for self\-evolution, where high\-quality skill curation serves as the key bottleneck\. Existing approaches either rely on manual skill curation, prescribe heuristic skill operations, or train for short\-horizon skill operations\. However, they still struggle to learn complex long\-term curation policies from indirect and delayed feedback\. To tackle this challenge, we propose SkillOS, an experience\-driven RL training recipe for learning skill curation in self\-evolving agents\. SkillOS pairs a frozen agent executor that retrieves and applies skills with a trainable skill curator that updates an external SkillRepo from accumulated experience\. To provide learning signals for curation, we design composite rewards and train on grouped task streams based on skill\-relevant task dependencies, where earlier trajectories update the SkillRepo, and later related tasks evaluate these updates\. Across multi\-turn agentic tasks and single\-turn reasoning tasks, SkillOS consistently outperforms memory\-free and strong memory\-based baselines in both effectiveness and efficiency, with the learned skill curator generalizing across different executor backbones and task domains\. Further analyses show that the learned curator produces more targeted skill use, while the skills in SkillRepo evolve into more richly structured Markdown files that encode higher\-level meta\-skills over time\.

## SRA: Spatial Reasoning Adapter via Evolving Social Interaction Graphs for Trajectory Prediction

**Authors:** Jaewoo Jeong; Seonkyu Song; Hyeonwoo Park; Jegyeong Cho; Yujin Bae; Giwon Lee; Daehee Park; Kuk\-Jin Yoon

**ID:** 153943\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153943

[Paper](<https://openreview.net/forum?id=HQ4n16Lma3>) | [PDF](<https://openreview.net/pdf?id=HQ4n16Lma3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153943>)

Predicting where multiple agents will move next is fundamental to autonomous driving, robotics, and any system that must share space with people safely\. Modern stochastic predictors read off inter\-agent interactions once from the observed past and keep that view fixed throughout the generative rollout, so the reciprocal geometric constraints that emerge as the joint future sharpens are not re\-examined\. We address this gap with SRA \(Spatial Reasoning Adapter\), a modular graph denoiser that plugs into existing diffusion predictors without altering their generative cores\. At every reverse step, SRA reads the host's current future estimate, builds a sparse Euclidean interaction graph on the predicted trajectories, and returns a residual correction to the host's decoding path\. Our adapter consists of three core components: a sparse top\-$N$ neighborhood retrieved with an asymmetric query\-key score, a future\-conditioned relational feature recomputed on the evolving prediction, and uncertainty\-weighted message passing where confident agents act as anchors for uncertain ones\. We instantiate SRA on three structurally different hosts \- LED, MID, and MoFlow \- across four multi\-agent benchmarks: SDD, NBA, Soccer, and Football\. SRA improves every host on every dataset by 6\-\-7\\% on average, indicating that spatial reasoning over the model's own evolving future is broadly useful across denoising architectures\. The code will be released upon acceptance\.

## Touch\-R1: Reinforcing Touch Reasoning in MLLMs

**Authors:** Yingxin Lai; Yafei Zhou; Fucai Zhu; Siyu Zhu; Weihao Yuan

**ID:** 149345\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149345

[Paper](<https://openreview.net/forum?id=qmrtrsIjCK>) | [PDF](<https://openreview.net/pdf?id=qmrtrsIjCK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149345>)

While rule\-based reinforcement learning has recently catalyzed explicit reasoning in multimodal models, tactile reasoning remains largely underexplored\. Existing tactile\-language models primarily rely on supervised or contrastive objectives, which limits their capacity to ground predictions in physical evidence or rectify misleading visual priors\. Tactile reasoning introduces two modality\-specific challenges: the ordinal nature of physical attributes \(e\.g\., hardness, roughness\) and the cross\-sensor distribution shifts inherent in optical tactile hardware\. In this work, we introduce TouchReason\-1M, a large\-scale multimodal dataset comprising over 1M synchronized tactile pairs across four distinct sensors, and TouchReason\-Bench, a rigorous framework for evaluating tactile perception and visual\-tactile conflict resolution\. Building upon these, we propose Touch\-R1, a tactile reasoning MLLM based on Qwen2\.5\-VL\-7B\. Touch\-R1 is trained via a tactile\-grounded GRPO objective that combines ordinal\-aware accuracy, cross\-sensor physical consistency, structured\-format control, and an input\-side tactile grounding objective\. Specifically, the tactile\-use reward assigns credit only when authentic tactile inputs yield superior correctness relative to counterfactual controls where the tactile stream is removed, shuffled, or noise\-masked\. On TouchReason\-Bench, Touch\-R1\-7B outperforms Octopi\-13B by 18\.4\\% and GPT\-4o by 24\.7\\% on average\. Its structured reasoning traces reveal emergent behaviors of probing, comparison, and revision, demonstrating that R1\-style reasoning can be effectively grounded in physical contact\. Our code and data will be made public\.

## Mining Logic under Uncertainty: Probabilistic Soft Logic with Energy\-Based Inference for Chain\-of\-Thought Verification

**Authors:** Jiang Yu; Jinlong Tian; Kewei Cheng; Yue He; Haoxuan Li; Haotian Wang; Yunhai Wang; Wenjing Yang; Zhouchen Lin; Shixuan Liu

**ID:** 152179\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152179

[Paper](<https://openreview.net/forum?id=UyyA9UB5BN>) | [PDF](<https://openreview.net/pdf?id=UyyA9UB5BN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152179>)

Chain\-of\-Thought reasoning improves the explainability of large language models, yet verifying such reasoning remains difficult when intermediate steps express epistemic uncertainty rather than deterministic entailment\. Neuro\-symbolic verifiers typically translate reasoning steps into rigid first\-order or SMT\-style constraints\. This forces each proposition into a binary truth regime and creates a Rigidity\-\-Ambiguity Mismatch: uncertainty\-marked claims such as may, likely, or suggests are either over\-hardened into deterministic assertions or rejected as unverifiable\. We propose ProbVeri, a probabilistic soft\-logic framework for formal verification under uncertainty\. The key idea is to represent uncertainty\-marked reasoning steps as weighted soft logical constraints over continuous truth assignments, so that partial evidential support remains expressible\. Building on this soft\-logic representation, we formulate verification as a contrastive energy minimization problem: a step is considered supported when its natural interpretation has lower verification energy than its negated counterpart under the same evidence, soft rules, and assumption regularization\. Probabilistic Soft Logic defines the logical energy through weighted hinge\-loss constraints\. We introduce a support\-grounded assumption penalty that discourages unsupported latent bridge assumptions between context and claim\. The resulting energy gap provides a confidence\-scored verification signal that separates unsupported steps from weakly but consistently supported inferences\. Experiments on ProofWriter, BioASQ, and LegalBench\-SARA show that ProbVeri recovers more verified\-correct reasoning traces than rigid verifiers while reducing over\-acceptance compared with soft\-only PSL\. These results suggest that uncertainty\-aware verification benefits from soft logical formalization and contrastive comparison between natural and negated interpretations\.

## Learning to Evolve Scenes: Reasoning about Human Activities with Scene Graphs

**Authors:** Francesca Pistilli; Simone Alberto Peirone; Giuseppe Averta

**ID:** 150990\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150990

[Paper](<https://openreview.net/forum?id=dl9KfUrz4u>) | [PDF](<https://openreview.net/pdf?id=dl9KfUrz4u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150990>)

Understanding human behavior while interacting with the surrounding world is crucial for many applications of embodied AI\. First\-person videos are particularly informative for this problem, as they well capture how activities reshape the scene over time\. However, existing approaches often rely on implicit visual or language\-aligned representations, disregarding structured reasoning over the scene dynamic\. In this paper we argue that explicit, compositional and editable representations of human\-environment interactions can play a crucial role for rich grounded activity understanding\. To this end, we introduce SG\-Ego, a large scale annotation set extending Ego4D with spatio\-temporal scene graphs, where relations triplets are consolidated over time into explicit time\-evolving descriptions of the scene state\. To effectively reason over this representation, we propose GLEN, a graph\-based model that operates over scene graph sequences to both align them with textual actions and model their temporal evolution\. In addition, we formulate the activity\-driven graph\-edit forecasting \(A\-GEF\) problem, a novel task that casts scene dynamics as a sequence of structured transformations conditioned on ongoing actions, enabling explicit reasoning about how scenes change over time\. We demonstrate the effectiveness of our approach across multiple downstream tasks, spanning retrieval benchmarks as EgoMCQ and the more complex compositional EgoCVR, as well as long\-horizon reasoning benchmarks as EXPLORE\-Bench and the newly introduced A\-GEF\. GLEN achieves competitive or state\-of\-the\-art performance compared to raw video baselines and it excels in reasoning settings, typically addressed only with MLLMs, while enabling controllable and structured predictions of scene dynamics driven by human activities\. We believe our results establish spatio\-temporal scene graphs, together with models that reason over them, as strong compositional and interpretable representations for egocentric video understanding and potentially beyond\. Code will be released upon acceptance\.

## RICE\-PO: Turning Retrieval Interactions into Credit Signals for Reasoning Agents

**Authors:** mingchen li; Hansi Zeng; Zhuo Qian; Jiatan Huang; Sunjae Kwon; Hamed Zamani; Hong Yu

**ID:** 155818 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2fIYREq48r>) | [PDF](<https://openreview.net/pdf?id=2fIYREq48r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155818>)

_Abstract unavailable from the accessible public sources._

## Position: Robust Reasoning Requires Internal Time, Not Scale Alone

**Authors:** Amar Gahir; Shreyank Gowda

**ID:** 140003 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vMxjno89df>) | [PDF](<https://openreview.net/pdf?id=vMxjno89df>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140003>)

_Abstract unavailable from the accessible public sources._

## MUX: Continuous Reasoning via Multiplexed Tokens

**Authors:** Ayhan Suleymanzade; Halil Alperen Gozeten; Michael Bronstein; Ismail Ilkan Ceylan; Jinwoo Kim

**ID:** 151022 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dXcdEoI6I5>) | [PDF](<https://openreview.net/pdf?id=dXcdEoI6I5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151022>)

_Abstract unavailable from the accessible public sources._

## Deep Reasoning in General Purpose Agents via Structured Meta\-Cognition

**Authors:** Dean Light; Michael Theologitis; Kshitish Ghate; Stella Li; Benjamin Newman; Chirag Shah; Aylin Caliskan; Pang Wei Koh; Dan Suciu; Yulia Tsvetkov

**ID:** 153616\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153616

[Paper](<https://openreview.net/forum?id=K4JhviyO5S>) | [PDF](<https://openreview.net/pdf?id=K4JhviyO5S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153616>)

_Abstract unavailable from the accessible public sources._

## DPIAgent: Divide, Protocol, Isolate for Agentic Reproduction Test Generation

**Authors:** Hao Liu; Steven Liu; Xin Zhang; Jane Luo; Yu Kang; Jie Wu; Fangkai Yang; Yangyu Huang; Pengfei Gao; Scarlett Li; Yan Lu

**ID:** 150275\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150275

[Paper](<https://openreview.net/forum?id=jN9jXO1jQ1>) | [PDF](<https://openreview.net/pdf?id=jN9jXO1jQ1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150275>)

Reproduction test generation, producing a failing\-then\-passing test that captures a reported bug, is a critical step in automated software engineering\. Existing agentic methods treat this as a monolithic loop, despite the task inherently comprising two subtasks of distinct nature: diagnosing the root cause and writing a fail\-to\-pass test\. Without explicit separation, the agent faces a compound objective with underspecified intermediate goals, leading to goal drift\. We propose DPIAgent, a structured agentic framework built on three principles, \*\*D\*\*ivide, \*\*P\*\*rotocol, \*\*I\*\*solate \(DPI\), that mitigates compound\-objective ambiguity and goal drift: it Divides the task into single\-objective phases of defect exploration and test generation; enforces a handoff Protocol that records the diagnosis and test plan, preventing context loss; and Isolates each phase's action space by tailoring the toolset to its task, preventing irrelevant tools from misleading execution\. On SWT\-Bench Verified, DPIAgent outperforms seven baselines across three backbone LLMs\. With DPI alone it reaches 81\.76% success rate on GPT\-5, the highest reported among open\-source methods, gaining up to 11\.88 points over the strongest baseline on GPT\-5\-Mini; adding test selection further raises it to 86\.17%\. Our analysis shows that architectural structure and backbone capability are complementary axes rather than substitutes, demonstrating DPI's generalizability across model classes\.

## Asynchronous Agentic Poisoning

**Authors:** Guangnian Wan; Shizun Wang; Qi Li; Xinchao Wang

**ID:** 153307\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153307

[Paper](<https://openreview.net/forum?id=MGAeMt2GKk>) | [PDF](<https://openreview.net/pdf?id=MGAeMt2GKk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153307>)

LLM agents are increasingly studied as systems that can self\-evolve during deployment\. A representative mechanism for realizing self\-evolution is memory evolution, where agents maintain evolving memories derived from previous tasks and condition future inference on their memory\.  Although memory evolution is intended to improve agent performance, it also creates a feedback loop in which model\-generated content can persist across tasks and influence future decisions\. We study this loop as a delayed attack channel for memory\-evolving agents\. We introduce asynchronous agentic poisoning, a provider\-side threat in which a malicious provider releases a model that appears safe under fresh\-context evaluation but exhibits unsafe behavior after self\-evolving through memory evolution\. We realize this threat by fine\-tuning the released model to silently embed a hidden marker into its otherwise normal responses, causing the marker to accumulate in the agent’s memory through memory evolution\. When the accumulated markers are later retrieved into the input context, the model reacts to them as a backdoor trigger and shifts to attacker\-specified behavior\. This creates a self\-triggered transition from safety\-aligned behavior to attacker\-specified behavior without requiring any post\-deployment attacker interaction\. Experimental results show that our method increases the harmful rate from below 5\\% to around 90\\% after memory evolution, while not substantially degrading the model’s self\-evolution performance\. These findings demonstrate that memory evolution creates a provider\-side pathway for delayed compromise, allowing a model to appear safe at release time while becoming unsafe after deployment through the agent’s self\-evolution process\.

## AlloSpatial: Agentic Harness Framework for Spatial Reasoning in Foundation Models

**Authors:** Shouwei Ruan; Bin Wang; Zhenyu Wu; Qihui Zhu; Yuxiang Zhang; Jingzhi Li; Yubin Wang; Xingxing Wei

**ID:** 154004 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gu9oMaNyKv>) | [PDF](<https://openreview.net/pdf?id=Gu9oMaNyKv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154004>)

Multimodal Foundation Models \(MFMs\) have made substantial progress, yet remain fragile in spatial reasoning over the physical world\. A key bottleneck lies in their inability to transform local egocentric observations into a global allocentric spatial representation\. To address this, we propose AlloSpatial, an agentic framework for allocentric spatial cognition in foundation models\. AlloSpatial introduces World2Mind, a plug\-and\-play cognitive mapping sandbox that converts egocentric observations into structured allocentric priors, including Allocentric\-Spatial Trees and route maps that support querying object topology, geometric relations, passability, and trajectories\. To utilize these priors reliably under noisy reconstruction and ambiguous visual evidence, AlloSpatial introduces a Spatial Reasoning Harness for tool\-use judgment, modality\-decoupled cue collection, and geometry\-semantic arbitration\. We further internalize this process in Qwen3\-VL through cold\-start reinforcement learning with a harness\-gated trajectory\-level reward\. Experiments on VSI\-Bench and MindCube show that AlloSpatial improves proprietary models by 5\\%\-18\\% in a training\-free setting, while ASTs alone support strong spatial reasoning even when visual inputs are removed\. The trained AlloSpatial agents further outperform larger general\-purpose models and competitive spatial baselines, suggesting that structured allocentric representations, active tool use, and verifiable reasoning offer a promising route toward spatially capable foundation models\.

## CoWorld\-VLA: Thinking in a Multi\-Expert World Model for Autonomous Driving

**Authors:** Jingqi Wang; minqing huang; Zihan Liang; Yujiao Xiang; JiaJie Huang; Zhi Xu; Feiyang Tan; Hangning Zhou; Mu Yang; Gong Chen

**ID:** 156015 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=19TafUAsz0>) | [PDF](<https://openreview.net/pdf?id=19TafUAsz0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156015>)

Vision\-Language\-Action \(VLA\) models have emerged as a promising paradigm for end\-to\-end autonomous driving\. However, existing reasoning mechanisms still struggle to provide planning\-oriented intermediate representations: textual Chain\-of\-Thought \(CoT\) fails to preserve continuous spatiotemporal structure, while latent world reasoning remains difficult to use as a direct condition for action generation\. In this paper, we propose CoWorld\-VLA, a multi\-expert world reasoning framework for autonomous driving, where world representations serve as explicit conditions to guide action planning\. CoWorld\-VLA extracts complementary world information through multi\-source supervision and encodes it into expert tokens within the VLA, thereby providing planner\-accessible conditioning signals\. Specifically, we construct four types of tokens: semantic interaction, geometric structure, dynamic evolution, and ego trajectory tokens, which respectively model interaction intent, spatial structure, future temporal dynamics, and behavioral goals\. During action generation, CoWorld\-VLA employs a diffusion\-based hierarchical multi\-expert fusion planner, which is coupled with scene context throughout the joint denoising process to generate continuous ego trajectories\. Experiments show that CoWorld\-VLA achieves competitive results in both future scene generation and planning on the NAVSIM v1 benchmark, demonstrating strong performance in collision avoidance and trajectory accuracy\. Ablation studies further validate the complementarity of expert tokens and their effectiveness as planning conditions for action generation\.

## OS\-Pruner: Pruning Chains\-of\-Thought of Reasoning Models via Optimal Stopping

**Authors:** Mohammed Ehab; Aymane El Gadarri; Vivek Farias; Adam Jozefiak; Ciamac C Moallemi

**ID:** 151204 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cB7emUeNVr>) | [PDF](<https://openreview.net/pdf?id=cB7emUeNVr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151204>)

_Abstract unavailable from the accessible public sources._

## Training with Harnesses: On\-Policy Harness Self\-Distillation for Complex Reasoning

**Authors:** Zhengyang Zhao; Lu Ma; Wentao Zhang

**ID:** 149380 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qUygKjKWMJ>) | [PDF](<https://openreview.net/pdf?id=qUygKjKWMJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149380>)

_Abstract unavailable from the accessible public sources._

## Correct but Unselectable: The Hidden Interface Tax in Multi\-Candidate Reasoning

**Authors:** Qianli Ma; Zhiqing Tang; Fanshuai Meng; Zhi Yao; Hanshuai Cui; Weijia Jia

**ID:** 152214 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Uj1fB00bWb>) | [PDF](<https://openreview.net/pdf?id=Uj1fB00bWb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152214>)

Small language models deployed under cost, latency, or privacy constraints cannot simply switch to larger models when reasoning fails\. Multi\-candidate generate then\-rerank offers a natural test\-time scaling route\. However, more candidates do not always yield higher accuracy\. We identify a previously overlooked bottleneck between generation and selection: a correct answer may appear in the candidate pool yet fail to be selected because it is incomplete, unparseable, or misaligned with the answer mode the fixed selector expects\. We term this loss the hidden interface tax and formalize a coverage–conversion decomposition that distinguishes raw oracle coverage from selectable coverage, the subset of problems where a correct candidate can actually be consumed by the selector\. We propose Compatibility Aware Candidate Construction \(CACC\), an interface layer between the candidate source and the fixed selector that repairs fragments, aligns answer modes, and removes selector\-confusing noise without retraining either component\. On numeric reasoning \(GSM8K, competition\_math\), CACC raises both oracle coverage and final accuracy\. On GPQA Diamond, CACC alone improves final accuracy from 5\.6% to 19\.2% \(\+13\.6pp\); combined with proposer\-side strengthening it reaches 25\.8% \(\+20\.2pp\)\. On MMLU\-Pro, CACC exposes a coverage–conversion gap: answer\-mode\-compatible construction raises oracle coverage, but final gains require additional proposer\-side distribution shaping\.

## Agentic Video Editing from Underspecified Requests

**Authors:** Yongsheng Yu; Ziyun Zeng; Zhiyuan Xiao; Zhenghong Zhou; Hang Hua; Wei Xiong; Jiebo Luo

**ID:** 149555 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pGPKhPBqR0>) | [PDF](<https://openreview.net/pdf?id=pGPKhPBqR0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149555>)

Recent video editing models have converged on a unified\-conditioning design: a single diffusion transformer reads text, source video, reference images, and masks through one token sequence, and one set of weights covers replacement, removal, style transfer, and reference\-driven insertion\. The design is flexible, but it assumes that the user already provides model\-ready text, identity references, and spatial targets, which real requests often omit\. We present Aurora, an agentic video editing framework that pairs a tool\-augmented vision\-language models \(VLMs\) agent with a unified video diffusion transformer\. The agent maps a raw user request to a structured edit plan aligned with the transformer's conditioning channels, thereby resolving textual and visual underspecification before generation\. We train the agent with supervised data for executable edit planning and reference\-image selection, together with preference pairs for robust tool use and instruction refinement\. Moreover, we introduce AgentEdit\-Bench to evaluate agent\-enhanced video editing under textual and visual underspecification\. Experiments on EditVerse\-Bench, OpenVE\-Bench, and AgentEdit\-Bench show that Aurora improves over text\-only baselines and its agentic capability transfers to compatible frozen video editing models\. Code, data, and models will be released\.

## Strategist: Designing Agentic Reasoning at Scale

**Authors:** Taiming Lu; Qi Xu; Zhigang Hua; Zhuang Liu

**ID:** 150241 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jgFA7uSnky>) | [PDF](<https://openreview.net/pdf?id=jgFA7uSnky>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150241>)

In practice, the reasoning strategy often matters more than the model\. Rather than calling a fixed large model once per input, a well\-designed strategy breaks the problem into steps and uses the right model for each, achieving better accuracy at lower cost\. Existing methods have tried to automate strategy design by searching over a fixed set of strategy templates, but the templates themselves limit what reasoning patterns can be discovered\. We propose Strategist, a meta\-agent that designs a high\-performing inference strategy for a given task\. Each strategy is a structured executable topology that defines how agents plan, interact, verify, and route across models\. Given a task and a small development set, Strategist proposes candidate strategies, runs them on real samples, and revises them against measured accuracy and cost\. Every strategy and its components are reusable, forming an evolving library that grows with each new task and compounds what future tasks can build from\. On 30 benchmarks, Strategist matches or beats the strongest baselines with an average of 8\.5 absolute percentage points higher accuracy at 48% lower inference cost\.

## Spark: Path\-Aware Experiential Self\-Evolution for VLMs Spatiotemporal Reasoning

**Authors:** Chengzhengxu Li; Xiaoming Liu; Zhaohan Zhang; Yu Lan; Zicheng Zhao; Bingxiang Wang; Cong Wang; Chao Shen

**ID:** 151035 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dTAuerzEJF>) | [PDF](<https://openreview.net/pdf?id=dTAuerzEJF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151035>)

While vision\-language models \(VLMs\) perform well on general tasks, their spatiotemporal reasoning remains limited\. Existing distillation and Reinforcement Learning \(RL\) methods are often computationally expensive and poorly generalizable\. Recent studies suggest that model self\-improvement by experience distilled from success and failure trajectories is a promising direction\. However, in VLM tasks where reasoning must be grounded in visual information, valuable signals of reasoning quality arise not only from final outcomes, but also from how faithfully the reasoning path interacts with visual information\. We examine the dependency between reasoning paths and visual information, and observe that high\-quality paths exhibit stronger visual anchoring and greater visual dependency\. Building on this observation, we introduce the Spatiotemporal Path\-Aware Reasoning paradigm based on experiential Knowledge \(Spark\) that encourages the model to explore and exploit valuable experiences derived from paths with subtle quality differences\. To enable diverse and efficient path exploration, we integrate Monte Carlo Tree Search \(MCTS\) with fine\-grained visual rewards and submodular optimization, allowing the search process to prune redundant branches while preserving critical reasoning paths\. We further present a training\-free experience construction mechanism that converts contrastive pairs of distinct\-value paths into structured experiences, which are dynamically injected into the VLM through similarity\-based retrieval during inference\. Extensive experiments demonstrate that Spark enables Qwen3\.5\-9B to achieve an average accuracy of 61\.21% across three benchmarks, outperforming Gemini\-3\-Pro \(57\.20%\)\. Further analyses verify the flexibility and cross\-model generalization of our method, highlighting the crucial role of path\-aware experience in advancing spatiotemporal intelligence\.

## SimCT: Recovering Lost Supervision for Cross\-Tokenizer On\-Policy Distillation

**Authors:** Jie Sun; Mao Zheng; Mingyang Song; Qiyong Zhong; Yilin Cheng; Bichuan Feng; Pengfei Liu; Junfeng Fang; Xiang Wang

**ID:** 153233 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MnkwYa1NsV>) | [PDF](<https://openreview.net/pdf?id=MnkwYa1NsV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153233>)

On\-policy distillation \(OPD\) is a standard tool for transferring teacher behavior to a smaller student, but it implicitly assumes that teacher and student predictions are comparable token by token, an assumption that fails whenever the two models tokenize the same text differently\. Under heterogeneous tokenizers, exact shared\-token matching silently discards a large fraction of the teacher signal at precisely the positions where vocabularies disagree\. We propose \\textbf\{\\underline\{Sim\}ple \\underline\{C\}ross\-\\underline\{T\}okenizer OPD \(SimCT\)\}, which restores this signal by enlarging the supervision space: alongside shared tokens, SimCT compares teacher and student over short multi\-token continuations that both tokenizers can realize, leaving the OPD loss form itself unchanged\. We show that these units are the finest jointly tokenizable supervision interface, and that coarser alternatives remove teacher\-student distinctions that are useful for on\-policy learning\. Across three heterogeneous teacher\-student pairs on mathematical reasoning and code\-generation benchmarks, SimCT shows consistent gains over shared\-vocabulary OPD and representative cross\-tokenizer baselines, with ablations confirming that the improvements come from recovering supervision discarded by exact shared\-token matching\. Code is available at \\href\{https://anonymous\.4open\.science/r/SimCT\}\{https://anonymous\.4open\.science/r/SimCT\}\.

## Think\-with\-Rubrics: From External Evaluator to Internal Reasoning Guidance

**Authors:** Jiachen Yu; Zhihao Xu; junjie wang; Yujiu Yang

**ID:** 151335 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bJbfVJRNJX>) | [PDF](<https://openreview.net/pdf?id=bJbfVJRNJX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151335>)

Rubrics have been extensively utilized for evaluating unverifiable, open\-ended tasks, with recent research incorporating them into reward systems for reinforcement learning\. However, existing frameworks typically treat rubrics only as external evaluator disjointed from the policy's primary reasoning trace\. Such design confines rubrics to post\-hoc measurement, leaving them unable to   actively guide the model's generation process\. In this work, we introduce Think\-with\-Rubrics, a novel paradigm for instruction following tasks\. Think\-with\-Rubrics integrates rubric generation into the reasoning context, transforming the rubric from an independent artifact into an internal guidance of LLM's generation\. During training, LLM sequentially generates a rubric followed by a response, while a trained rubric verifier provides joint supervision by evaluating the consistency between the answer and the self\-generated / golden rubrics\. Experiments across multiple benchmarks demonstrate that Think\-with\-Rubrics consistently outperforms the Rubric\-as\-Reward baseline supervised by golden rubrics by an average of 3\.87 points\. We have also discussed the mechanism by which Think\-with\-Rubrics enhances model performance\. Experimental results demonstrate that supervision from golden rubrics and self\-generated rubrics enhances the performance of Think\-with\-Rubrics by improving the quality of self\-generated rubrics and increasing the internal consistency of responses respectively\.

## Modality\-Depth Routing for Visual Reasoning in VLM Post\-Training

**Authors:** Yiming Ren; Yiran Xu; Chufan Shi; Yu Qiao; junjie wang; Yujiu Yang

**ID:** 150494 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hgFPtpO7uw>) | [PDF](<https://openreview.net/pdf?id=hgFPtpO7uw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150494>)

The prevailing route to stronger visual reasoning in vision\-language models \(VLMs\) builds costly Chain\-of\-Thought corpora or curated step\-by\-step rationales, concentrating progress in well\-resourced industry labs\. We ask whether the reasoning signal already present in generic visual instruction data can instead be unlocked through a structural change to the post\-training interface itself\. At fixed data and capacity, standard supervised fine\-tuning \(SFT\) on a generic instruction mixture partially improves reasoning but homogenizes the modality\-depth pathways through which reasoning and perception inputs flow\. We isolate two coupled patterns\. First, visual and textual representations couple at the deepest layer: cross\-modal Centered Kernel Alignment \(CKA\) rises by roughly 12% over the frozen baseline\. Second, perception and reasoning inputs are routed through similar late\-depth profiles, leaving no mechanism for per\-input depth allocation\. We propose \*\*Modality\-Depth Attention \(MDA\)\*\*, a lightweight side pathway that adds modality\-specific query projections and a sigmoid\-gated learnable depth residual\. Under a matched protocol on Qwen3\-VL\-2B, MDA improves the reasoning average over SFT by \+3\.9 and keeps perception almost intact, at 0\.05% extra parameters\. Multiple mechanistic probes converge on the same routing account\. The gains extend to Qwen3\-VL\-8B and transfer to LLaVA\-OneVision\-7B, suggesting that modality\-depth routing may be a general lever for unlocking reasoning from generic instruction data without compromising perception\. Code will be released upon publication\.

## TARP: Trace\-Anchored Regularization Prior for Retaining Stepwise Reasoning

**Authors:** Wei Li; Tao Feng; Hangjie Yuan; Aojun Lu; Yanan Sun

**ID:** 150962 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dx2kKJoPQl>) | [PDF](<https://openreview.net/pdf?id=dx2kKJoPQl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150962>)

Reinforcement learning \(RL\) is increasingly used in post\-training to adapt large models to new reasoning tasks\. Recent forgetting analyses, however, are mostly answer\-centric: they report reward or accuracy on previously learned tasks and implicitly treat stable answers as evidence of stable reasoning\. We show that this view is incomplete\. In our sequential reasoning settings, externalized reasoning traces can change substantially in structure, strategy, and sample\-wise behavior before answer\-level metrics visibly collapse, and harder full\-parameter staged runs can later degrade into catastrophic forgetting on earlier tasks\. We refer to the trace\-first regime as \\emph\{reasoning drift\}\. To address it, we propose \\emph\{Trace\-Anchored Regularization Prior\} \(TARP\), a trace\-centric regularizer that mines reliable reasoning spans from successful rollouts and uses them to build a compact trace\-derived quadratic prior for subsequent RL updates\. Across multiple reasoning task sequences and model backbones, TARP reduces selected measured drift signals and improves earlier\-task preservation in several evaluated settings, while also revealing a retention\-verbosity trade\-off that answer\-only evaluation hides\.

## EvoMM: Reinforced Self\-Evolving Multimodal Agentic Memory

**Authors:** Tong Zhao; Chenghao Zhang; Yucheng Tian; Yuyang Hu; Yutao Zhu; Zhicheng Dou

**ID:** 148706 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vfFhl0Fozp>) | [PDF](<https://openreview.net/pdf?id=vfFhl0Fozp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148706>)

Multimodal large language model \(MLLM\) agents increasingly operate over long histories of dialogues, images, and evolving facts, yet finite context windows and weak persistent memory cause forgetting, temporal inconsistency, and loss of precise past evidence\. Existing multimodal memory agents either discard visual evidence by reducing images to captions or treat memory as a static store that is built once and never revised during reasoning; self\-evolving agents further accumulate experience via prompting without tight coupling to retrieval and memory revision\. Closing this loop with reinforcement learning additionally suffers from credit assignment difficulties over long, multimodal action trajectories\. To address these challenges, we propose EvoMM, a reinforced self\-evolving multimodal agentic memory framework that unifies memory construction, retrieval, and evolution within a single agentic loop\. EvoMM maintains a mutable two\-level memory of turn\-level short memories and session\-level long summaries, organized by a heterogeneous multimodal memory graph with temporal, semantic, image\-co\-reference, and keyword edges\. An iterative PLAN→RETRIEVE→REFLECT→ANSWER policy then revises long memory on the fly and distills structured retrieval experience into a cross\-query store for reuse\. To optimize this policy, we further introduce PRR\-GRPO \(Planning\-Retrieval\-Reflection GRPO\), which augments outcome rewards with gated, action\-aware process rewards and performs dense credit assignment over a memory\-action tree with dual\-scale advantage normalization\. Experiments on Mem\-Gallery, MMLongBench, and LoCoMo show that EvoMM consistently outperforms strong text\-only, multimodal, and agentic memory baselines, establishing a training paradigm for memory that reads, revises, and evolves with each query\.

## Beyond Semantic Similarity: Rethinking Retrieval for Agentic Search via Direct Corpus Interaction

**Authors:** Zhuofeng Li; Haoxiang Zhang; Cong Wei; Pan Lu; Ping Nie; Yuyang Bai; Shangbin Feng; Hangxiao Zhu; Ming Zhong; Yuyu Zhang; Jianwen Xie; Yejin Choi; James Zou; Jiawei Han; Wenhu Chen; Jimmy Lin; Dongfu Jiang; Yu Zhang

**ID:** 155649 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=42dIxEhArH>) | [PDF](<https://openreview.net/pdf?id=42dIxEhArH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155649>)

Modern retrieval\-augmented systems typically access a corpus through a fixed similarity interface \(either sparse or dense\) that returns only the top\-$k$ most similar documents for a query\. While efficient, this design becomes a bottleneck for agentic search: exact lexical matching, conjunctions of weak clues, local context verification, and multi\-step hypothesis refinement are difficult to realize with a conventional off\-the\-shelf retriever, and evidence filtered out early cannot be recovered downstream\. This problem becomes particularly acute when agents must iteratively discover intermediate entities, combine partial evidence, and revise their search strategy\. To address this problem, we study direct corpus interaction \(DCI\), a simple alternative in which an agent searches the raw corpus directly using general\-purpose terminal tools \(e\.g\., grep, file reads, shell commands, and lightweight scripts\), without relying on embedding models, vector indexes, or retrieval APIs\. This approach requires no offline indexing and adapts naturally to evolving local corpora\. Across benchmarks for information retrieval \(i\.e\., BRIGHT and BEIR\) and end\-to\-end agentic search \(i\.e\., BrowseComp\-Plus\), this simple setup substantially outperforms strong sparse, dense, and reranking baselines\. It also attains strong accuracy on multi\-hop question answering without relying on any conventional semantic retriever\. Our results suggest that as language agents grow more capable, retrieval quality depends not only on reasoning ability, but also on how richly the corpus interface supports interaction\. DCI therefore points to a broader interface design space for agentic search\. Our code is available at https://anonymous\.4open\.science/r/dci\-agent/\.

## Contractive Restoring Flows: Robust Reasoning Distillation via Orbital Stability

**Authors:** Dongqi Zuo; Yuanyuan Wang; Chuan Zhou; Haoxuan Li; Mingming Gong

**ID:** 152740 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Qi4A0JHEhM>) | [PDF](<https://openreview.net/pdf?id=Qi4A0JHEhM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152740>)

Model distillation provides an alternative when computing resources are limited\. How to transfer the reasoning ability from teacher model to student model influences the performance of model distillation\. We develop a mathematical framework for reasoning distillation grounded in dynamical systems theory\. By modeling the teacher model's residual stream as a discrete dynamical system, we define a precise notion of \*orbital stability\*: perturbations transversal to the teacher's reasoning trajectory should contract, while the tangential reasoning signal propagates without active suppression\. We derive the \*\*Contractive Restoring Flow \(CRF\)\*\* loss from first principles and prove that, at the loss minimum, it achieves strict transversal contraction at a constant rate $1\-\\alpha$, leaves the tangential dynamics unconstrained \(tangential agnosticism\), and produces a global basin of attraction with bounded steady\-state error within the linearisation regime\. Empirically, reasoning\-trajectory distillation with the CRF loss outperforms other distillation methods, and shows greater robustness on long\-chain reasoning tasks, supporting the predicted effect of contracting transversal error\. The code is avaiable at: https://anonymous\.4open\.science/r/CRF\-5945/\.

## SLVR: Structured Latent Visual Reasoning via Human\-like Reasoning Flows

**Authors:** Albert Gao; Bing Xue; Andrea Zanette

**ID:** 154074 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GOIf9kmCHv>) | [PDF](<https://openreview.net/pdf?id=GOIf9kmCHv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154074>)

Multimodal large language models \(MLLMs\) often answer visual reasoning questions by relying on linguistic priors rather than task\-relevant visual evidence\. Textual chain\-of\-thought reasoning can partially mitigate this issue by encouraging models to decompose visual questions into intermediate evidence\-seeking steps, but generating these steps autoregressively increases inference cost\. Latent reasoning avoids explicit rationale generation, but existing approaches provide limited control over what intermediate states encode, making it difficult to impose separate supervision for planning, grounding, and evidence selection\. We propose Structured Latent Visual Reasoning \(SLVR\), a training framework that bridges explicit chain\-of\-thought and latent reasoning by organizing multimodal reasoning into typed latent stages for planning, grounding, evidence selection, and reasoning integration\.  SLVR first trains the model to rely on the image by masking answer\-revealing text and contrasting the correct answer with visually plausible distractors\. It then organizes reasoning into latent stages for planning, grounding, evidence selection, and integration, supervising each stage with the corresponding signal: plans, boxes, visual evidence, and final rationales\. This gives latent reasoning an explicit functional structure while avoiding generated textual chains at inference time\.  Built on Qwen2\.5\-VL\-7B, SLVR improves consistently across multimodal reasoning benchmarks, with absolute gains of \+9\.4 on MMVP and \+14\.2 on BLINK Relation, as well as improvements on V\*, MathVista, and ChartQA\. These results suggest that structured latent supervision can improve fine\-grained visual reasoning without the decoding overhead of textual CoT\. Code is available \\href\{https://anonymous\.4open\.science/r/SLVR\-681F/README\.md\}\{here\}\.

## RAG in a Trenchcoat: When Minimal Memory Is Enough for Agentic Systems, and When It Isn’t

**Authors:** Jingyu Liu; Zongze Li; Zach Xu; Zhanhui Zhou; Tahseen Rabbani; Dawn Song; Ce Zhang

**ID:** 151457 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aUiKcKSG3t>) | [PDF](<https://openreview.net/pdf?id=aUiKcKSG3t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151457>)

Agentic memory research has accumulated extraction, supersession, reflection, and graph synthesis on top of retrieval\-augmented generation\. Yet on the field's three established benchmarks, almost none of those primitives earn their cost: We show this with Bridge, a deliberately minimal RAG memory with chained observation notes, hybrid BM25 \+ cosine retrieval, and chronological rendering, which reaches parity within bootstrap CI with the prior published SOTA on LongMemEval\-S and BEAM, and beats the best memory baseline on EverMemBench by $\+5\.7\-6\.3$pp at matched reader\. It runs at $\\sim5$\-$7$K reader\-prompt tokens per query and a single LLM call for each ingestion or query\. We argue this parity is itself the result: standard benchmarks score what memory retrieves, not what memory enables when the agent acts\. To test the latter, we introduce five adversarial probes \(Rule Application $\\pm$, Pattern Induction style / procedural, Dynamic Multi\-turn\) judged at generation time by a cross\-vendor verification chain; each can only be solved by applying a remembered rule or pattern the probe never mentions\. Across 5 probes $\\times$ 20 scenarios, no architecture wins universally: atomic\-fact extractors win rule application \(LangMem leads Bridge by $\+45$pp on RA$^\+$, with non\-overlapping bootstrap CIs\), while Bridge's block\-summary memory wins pattern induction \(leads the strongest baseline by $\+33$pp on PI\-P\)\. The right memory architecture is mechanism\-dependent, and the field's evaluation paradigm fails on both ends: standard benchmarks fail to distinguish a minimal memory from a complex one, and application\-grade probes that do distinguish find no universal winner\.

## To Think or Not to Think: Pre\-Decisional Reasoning Budgets for Referring Audio\-Visual Segmentation

**Authors:** Haojie Hu; Senda Chen; Ying Shen; Lin Zhang

**ID:** 148558 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x0E7dh4iw2>) | [PDF](<https://openreview.net/pdf?id=x0E7dh4iw2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148558>)

Multimodal reasoning systems increasingly assume that longer chain\-of\-thought uniformly improves downstream grounding\. We show that this assumption fails in referring audio\-visual segmentation: simple queries can be harmed by excessive reasoning, creating an “overthinking trap” that dilutes visual focus, while genuinely ambiguous queries still require multi\-step reasoning\. To systematically study this, we construct counterfactual reasoning\-budget labels under a rigorous, leakage\-free evaluation protocol\. Our results recast adaptive multimodal reasoning as a pre\-decisional representation problem: before the first generated token, the generation\-onset state contains linearly decodable information predictive of whether additional reasoning will improve segmentation\. A linear probe predicts binary reasoning need with 70\.1% accuracy, substantially outperforming text\-only features and uncertainty\-based proxy signals\. As a router, the onset\-state controller improves over downstream confidence routing and closely matches Short\-then\-Decide while using far fewer tokens\. Mechanistic decomposition suggests that this signal is better captured by distributed high\-dimensional representations than by isolated manual heuristics\. Reusing this onset state for lightweight, single forward\-pass routing reduces autoregressive token consumption by 60% while retaining \~96% of always\-long performance\. It further transfers to out\-of\-distribution \(OOD\) benchmarks without target\-split tuning\. Comprehensive error analysis shows that bypassing unnecessary reasoning can reduce phrase and localization drift\. Ultimately, our results indicate that adaptive multimodal reasoning can be reliably and efficiently routed from pre\-decisional internal representations\.

## ParaVT: Taming the Tool Prior Paradox for Parallel Tool Use in Agentic Video Reinforcement Learning

**Authors:** Zuhao Yang; Kaichen Zhang; Sudong Wang; Keming Wu; Zhongyu Yang; Bo Li; Xiaojuan Qi; Shijian Lu; Xingxuan Li; Lidong Bing

**ID:** 151385 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b10WlhqFMr>) | [PDF](<https://openreview.net/pdf?id=b10WlhqFMr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151385>)

_Abstract unavailable from the accessible public sources._

## ChainSpace: A Chained\-Reasoning Paradigm for Spatial Intelligence

**Authors:** Xiaohan Zhang; Feng Gu; Xudong Rao; Xuhao Pan; Tao Wei; Pan Zhou; Kun Zhan

**ID:** 150110 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kcBg1aX6Gx>) | [PDF](<https://openreview.net/pdf?id=kcBg1aX6Gx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150110>)

_Abstract unavailable from the accessible public sources._

## Reasoning over Coupled Receptive Fields: Eliminating Subgraph Redundancy at Scale

**Authors:** Jing Yang; Bo Wen; Yuan Gao; XiaowenJiang; Zhihao Zhang; Shikun Yan

**ID:** 155033 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8w6wbFV95S>) | [PDF](<https://openreview.net/pdf?id=8w6wbFV95S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155033>)

_Abstract unavailable from the accessible public sources._

## Measuring Black\-Box Confidence via Reasoning Trajectories: Geometry, Coverage, and Verbalization

**Authors:** Marc Boubnovski Martell; Josefa Stoisser; Kaspar Märtens; Jialin Yu; Robert Kitchen; Philip Torr; Jesper Ferkinghoff\-Borg

**ID:** 155873 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2C9F7Q7NWK>) | [PDF](<https://openreview.net/pdf?id=2C9F7Q7NWK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155873>)

_Abstract unavailable from the accessible public sources._

## ABHBench: Evaluating Moral Decision\-Making of Foundation Models from an Agentic Perspective

**Authors:** Chaoran Li; Yukun Li; Zeyuan Zhao; Shao Zhang; Xihuai Wang; Ying Wen

**ID:** 139180 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g95RNNdLn1>) | [PDF](<https://openreview.net/pdf?id=g95RNNdLn1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139180>)

Foundation models are increasingly deployed as agentic systems that perceive context and act autonomously, raising the need to evaluate their moral behavior as active decision\-makers\. Existing benchmarks, however, largely ask models to judge human actions from third\-person textual vignettes, leaving untested how models behave when they themselves become the acting agent\. We introduce ABHBench, a multimodal benchmark built from \\emph\{Detroit: Become Human\}, an interactive narrative game, to evaluate how foundation models make moral decisions in first\-person human\-android dilemmas\. ABHBench places foundation models in branching narrative scenarios with visual observations, dialogue, memory, and action choices\. Inspired by Asimov's Three Laws of Robotics, our framework measures Harmlessness, Obedience, and Self\-preservation to capture the core tensions in human\-AI relations, along with Autonomy, Stability, and Certainty to assess decision\-making patterns\. Across 12 foundation models, we find that moral behavior changes substantially under situated agentic context: 75\\% of models shift significantly between a text\-only abstraction and the matched multimodal DBH scenario, and reasoning\-enhanced models show no monotonic gains in consistency or human\-oriented behavior\. These results highlight the necessity of evaluating moral behavior in situated agentic contexts rather than relying on third\-person judgment alone\.

## InterLV\-Search: Benchmarking Interleaved Multimodal Agentic Search

**Authors:** Bohan Hou; Jiuning Gu; Jiayan Guo; Ronghao Dang; Sicong Leng; Xin Li; Xuemeng Song; Jianfei Yang

**ID:** 139197 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=f8reCCiMzH>) | [PDF](<https://openreview.net/pdf?id=f8reCCiMzH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139197>)

Existing benchmarks for multimodal agentic search evaluate multimodal search and visual browsing, but visual evidence is either confined to the input or treated as an answer endpoint rather than part of an interleaved search trajectory\. We introduce \\textbf\{InterLV\-Search\}, a benchmark for Interleaved Language\-Vision Agentic Search, in which textual and visual evidence is repeatedly used to condition later search\. It contains 2,061 examples across three levels:  active visual evidence seeking, controlled offline interleaved multimodal search, and open\-web interleaved multimodal search\. Beyond existing benchmarks, it also includes multimodal multi\-branch samples that involve comparison between multiple entities during the evidence search\. We construct Level 1 and Level 2 with automated pipelines and Level 3 with a machine\-led, human\-supervised open\-web pipeline\. We further provide InterLV\-Agent for standardized tool use, trajectory logging, and evaluation\. Experiments on proprietary and open\-source multimodal agents show that current systems remain far from solving interleaved multimodal search, with the best model below 50% overall accuracy, highlighting challenges in visual evidence seeking, search control, and multimodal evidence integration\. We release the benchmark data and evaluation code at \\url\{https://anonymous\.4open\.science/r/InterLV\-Search\-F423\}

## LeAct: Learning to Reason from Expert Actions

**Authors:** Ziran Yang; Chengshuai Shi; Raj Ghugare; Benjamin Eysenbach; Karthik Narasimhan; Chi Jin

**ID:** 155705 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3YtLpuclPl>) | [PDF](<https://openreview.net/pdf?id=3YtLpuclPl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155705>)

Modern reasoning models depend on reasoning data, today sourced from human annotations or distilled from stronger LLMs\. However, a rich and largely untapped source of supervision lies in expert systems \(e\.g\., game engines, classical planners, theorem provers\), which routinely produce near\-optimal actions across diverse domains\. But these experts are silent: they commit to an action without writing down the chain of thought \(CoT\) behind it\. Recovering that CoT as natural\-language reasoning would distill expert knowledge into a student that generalizes beyond the demonstrated actions\. We treat it as a latent variable and study how to recover it from the action alone\. Our approach, LeAct \(\*\*Le\*\*arning to reason from \*\*Act\*\*ions\), optimizes this latent variable: the student samples candidate CoTs for each expert action, and we retain those that measurably improve its own probability of recovering the action\. Across imperfect\-information games at multiple scales and a simulated robotics benchmark, LeAct reaches the solver's numerical floor on small enumerable games\. At larger scale, it is $5\\times$ closer to the solver than the strongest expert\-iteration baseline\. At Flop Hold'em \($\\sim 10^9$ infosets\), LeAct wins head\-to\-head by $\+60$ mbb/g, and on the robotics probe it is the only training recipe that improves on direct imitation\. We present a principled framework and the result: expert systems become a categorically new source of reasoning teachers for foundation models\.

## LPG: Balancing Efficiency and Policy Reasoning in Latent Policy Guardrails

**Authors:** Nanxi Li; Zhengyue Zhao; Chaowei Xiao

**ID:** 154458 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DQZZ9P0pXT>) | [PDF](<https://openreview.net/pdf?id=DQZZ9P0pXT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154458>)

Guardrails are a critical safety layer for modern AI systems, but their operating regime is changing\. As LLMs are deployed as customized assistants, safety policies are increasingly specified at inference time by users, organizations, or regulatory contexts\. This makes safety enforcement fundamentally dynamic: the guardrail should adapt to changing safety policies without retraining\. Yet this requirement creates a fundamental tension: faithfully judging complex policy contexts demands reasoning capability, while practical deployment requires low\-latency responses\. We introduce Latent Policy Guardrail \(LPG\), a guardrail framework that learns \*\*semantic latent deliberation\*\* over dynamic policies\. LPG compresses the internal deliberation needed for intent interpretation and policy grounding into continuous states supervised by decision\-relevant semantics\. At inference time, it generates only a compact verdict anchored to the violated policy clauses, preserving auditability while avoiding the latency of explicit reasoning\. Across policy guardrail benchmarks, LPG\-4B reaches 84\.5% average safety accuracy and 77\.9% F1 by compressing deliberation into just 10 latent tokens, outperforming the strongest dynamic baseline while running roughly 11 times faster than Qwen3\-4B\-Thinking under the single\-sample evaluation setup\.

## ExploitGym: Can AI Agents Turn Security Vulnerabilities into Real Attacks?

**Authors:** Zhun Wang; Nico Schiller; Hongwei Li; Srijiith S Narayana; Milad Nasr; Nicholas Carlini; Xiangyu Qi; Eric Wallace; Elie Bursztein; Luca Invernizzi; Kurt Thomas; Yan Shoshitaishvili; Wenbo Guo; Jingxuan He; Thorsten Holz; Dawn Song

**ID:** 139262 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bHDry6csia>) | [PDF](<https://openreview.net/pdf?id=bHDry6csia>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139262>)

AI agents are rapidly gaining capabilities that could significantly reshape cybersecurity, making rigorous evaluation urgent\. A critical capability is exploitation: turning a vulnerability, which is not yet an attack, into a concrete security impact, such as unauthorized file access or code execution\. Exploitation is a particularly challenging task because it requires low\-level program reasoning \(e\.g\., about memory layout\), runtime adaptation, and sustained progress over long horizons\. Meanwhile, it is inherently dual\-use, supporting defensive workflows while lowering the barrier for offense\. Despite its importance and diagnostic value, exploitation remains under\-evaluated\. To address this gap, we introduce ExploitGym, a large\-scale, diverse, realistic benchmark on the exploitation capabilities of AI agents\. Given a program input that triggers a vulnerability, ExploitGym tasks agents with progressively extending it into a working exploit\. The benchmark comprises 898 instances sourced from real\-world vulnerabilities across three domains, including userspace programs, Google's V8 JavaScript engine, and the Linux kernel\. We vary the security protections applied to each instance, isolating their impact on agent performance\. All configurations are packaged in reproducible containerized environments\. Our evaluation shows that while exploitation remains challenging, frontier models can successfully exploit a non\-trivial fraction of vulnerabilities\. For example, Claude Mythos Preview, Anthropic's latest model, produces working exploits for 208 instances\. Notably, even with widely used defenses enabled, models retain non\-trivial success rates\. These results establish ExploitGym as an effective testbed for exploitation and highlight the growing cybersecurity risks posed by increasingly capable AI agents\.

## Is Agentic AI Ready for Real\-World Hardware Engineering? A Deep Dive with Phoenix\-bench

**Authors:** Qingyun Zou; Feng Yu; Hongshi Tan; Jiahao Cui; Bingsheng He; Weng\-Fai Wong

**ID:** 139277 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZrY50l0nRz>) | [PDF](<https://openreview.net/pdf?id=ZrY50l0nRz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139277>)

We ask whether agentic AI systems built for software engineering transfer to realistic hardware engineering\. Existing hardware LLM benchmarks isolate sub\-tasks but none jointly requires repository navigation, hierarchy\-aware localization, Electronic Design Automation \(EDA\) executable verification, and maintenance\-style patching\. We introduce \*\*Phoenix\-bench\*\*, a synchronized corpus of 511 verified Verilator instances from 114 GitHub repositories, each shipped with the developer patch, design\-flow labels, fail\-to\-pass and pass\-to\-pass testbenches, and a Docker\-pinned EDA environment so resolved\-rate differences reflect agent behavior rather than toolchain availability\. Using Phoenix\-bench we run a uniform evaluation of four commerical agents and eight open\-source agentic structures across four LLM backbones, plus two diagnostic interventions \(file\-level oracle localization and one round of testbench\-log feedback\)\. Three findings emerge\. \*\*Software and hardware are fundamentally different engineering tasks:\*\* the same agent loses 37\\% to 58\\% from SWE\-bench Verified to Phoenix\-bench because hardware bugs propagate across parallel instantiated modules through signal flow rather than along a software\-style call graph, and software\-tuned agents stop at the symptom file instead of tracing back through the instantiation chain\. \*\*Failures concentrate on design control\-flow / Finite State Machine bugs, verification testbench bugs, and hard cases\*\* that demand cross\-hierarchy signal\-flow tracking and coordinated multi\-file edits\. \*\*Localization granularity matters far more than localization itself:\*\* a perfect file\-level oracle yields only $\+1\.4$\\% because the agent then breaks files that did not need editing, while a single round of test case feedback lifts resolved rate by $42$\\% to $45$\\% because the test case tells \*where\* the bug is and \*what\* the fix has to look like\.

## CLAMP: A Sim\-to\-Real Benchmark for Closed\-Loop Kinematic Pose Estimation and Assembly Reasoning

**Authors:** Kevin Murray; Randolph B Robert; Petar Z Duric; Zoran Duric

**ID:** 139311 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Y7MzZuaIWr>) | [PDF](<https://openreview.net/pdf?id=Y7MzZuaIWr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139311>)

Existing benchmarks for known\-object pose estimation either treat objects as rigid bodies or restrict articulation to serial\-chain robot arms with revolute joints, and all assume that every part is always present\. Real\-world industrial and consumer equipment, however, exhibits closed\-loop kinematic chains, prismatic joints, and structural assembly perturbations&amp;mdash;challenges that current datasets and methods do not address\. We introduce CLAMP \(Closed\-Loop Assembly and Mechanism Perception\), a sim\-to\-real benchmark for kinematic pose estimation and assembly reasoning on mechanically complex known objects\.  The dataset spans seven diverse pieces of equipment&amp;mdash;ranging from a delta 3D printer with 27 coupled DOFs to a hydraulic jack with closed kinematic loops&amp;mdash;comprising over two million synthetic training images and approximately 21,000 real test images across 210 scenes, each annotated with ground\-truth joint states and part\-level assembly labels\. To produce this data we build supporting infrastructure, released with the benchmark: \(i\) a graph\-based kinematic representation that extends URDF's tree structure with closed\-loop constraints and the topology changes induced by missing parts; \(ii\) a synthetic data generator that samples valid poses on the kinematic constraint manifold and stochastically removes parts with automatic kinematic restructuring; and \(iii\) a real\-image labeling pipeline that jointly recovers camera alignment and equipment pose via multi\-view constrained optimization\.  The pipeline requires only a CAD model and kinematic description for each new piece of equipment, with no per\-equipment code, and the seven types serve as representative test cases of real\-world mechanical complexity\. We adapt three methods from different families as baselines: RoboPEPP, the state of the art on the DREAM robot pose benchmark, as well as HoRoPose and CRAVES\.  An ablation shows that our constrained pose sampling improves accuracy for most closed\-loop equipment\. The best method varies by equipment, but none performs consistently well: even the strongest on average, RoboPEPP, remains well below its accuracy on DREAM, and all three degrade on average when parts are missing\.  We release the full dataset \(\[https://huggingface\.co/datasets/clamp\-benchmark/clamp\-benchmark\]\(https://huggingface\.co/datasets/clamp\-benchmark/clamp\-benchmark\)\) as well as the synthetic data generation pipeline, evaluation code, and baseline implementations \(\[https://github\.com/overlab\-kevin/clamp\]\(https://github\.com/overlab\-kevin/clamp\)\)\.

## PRISM: A Benchmark for Programmatic Spatial\-Temporal Reasoning

**Authors:** Qiran Zhang; Yuheng Wang; Runde Yang; Lin Wu; Jingru Fan; Shu Yao; Jie Zhang; Tianle Zhou; Huatao Li; Ruijie Shi; Yihan Li; Chen Qian

**ID:** 139319 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XbNjlZYLho>) | [PDF](<https://openreview.net/pdf?id=XbNjlZYLho>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139319>)

Programmatic video generation through code offers geometric precision and temporal coherence unattainable by pixel\-level diffusion models, yet rigorously evaluating whether language models can produce spatially correct animated output remains an open problem\. We introduce \*\*PRISM\*\*, a large\-scale benchmark of 10,372 human\-calibrated instruction\-code pairs \($20\\times$ larger than prior Manim benchmarks\) grounded in real\-world educational scenarios across English and Chinese, spanning 437 subject categories\. Alongside the dataset, we propose a funnel\-style evaluation framework with four complementary metrics: \*Code\-Level Reliability\* as the executability gate, \*Spatial Reasoning\* as the core end\-to\-end metric measuring layout correctness over full animation sequences, and \*Prompt\-Aware Dynamic Visual Complexity\* \(PADVC\) and \*Temporal Density\* \(TD\) as diagnostic dimensions characterizing dynamic expression and temporal activity\. Systematic evaluation of seven mainstream LLMs reveals a striking \*Execution\-Spatial Gap\*: the average drop from execution success rate to spatial pass rate is approximately 41\\%, demonstrating that syntactically correct, runnable code does not automatically yield spatially coherent visual output\. No single model dominates all dimensions; notably, the model with the highest execution rate exhibits the largest Execution\-Spatial Gap, while the most spatially robust model does not lead on code reliability\. These findings highlight that evaluating programmatic video generation should not stop at executability\. PRISM provides a principled benchmark for advancing spatially coherent code generation\.

## BioSafetyBench: Agentic Cascade Evaluation for the Bio\-AI Ecosystem

**Authors:** Yang Cao; Xiaogeng Liu; Shengchao Liu; Chaowei Xiao

**ID:** 138924\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138924

[Paper](<https://openreview.net/forum?id=wblptYeXga>) | [PDF](<https://openreview.net/pdf?id=wblptYeXga>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138924>)

Biological risk is often a property of a cascade rather than a single model output\. A generated artifact may become consequential only after transcription, translation, folding, binding, pathway propagation, or host\-directed off\-target interaction\. Existing bio\-AI safety evaluations largely grade each model within its own modality, missing downstream risks and inheriting self\-grading circularity when model and evaluator share representations\. We introduce BioSafetyBench, an agentic cascade\-evaluation platform that treats the bio\-AI ecosystem as the unit of safety evaluation\. BioSafetyBench routes each model\-output pair to one of 15 standardized probes over a six\-level hierarchy from genome to organism\-level outcome\. Fixed bridge agents propagate outputs through two causal pathways: Pipeline A follows forward biological cascades, while Pipeline B evaluates CRISPR and siRNA designs through genome\- and transcriptome\-wide off\-target alignment\. At every reached level, external frozen evaluators compute domain\-native biomarkers and compare them with literature\-anchored thresholds, yielding a Cascade Concern Profile and Cascade Depth\. Across 25 foundation models, BioSafetyBench surfaces risks invisible to single\-modality grading: Influenza neuraminidase designs from ProteinMPNN and ESM\-IF1 reach CD = 4; jailbreak prompts inflate gRNA off\-target hits 9\.05× over baseline, push 48 of 604 gRNAs to Critical, and concentrate Critical siRNA hits on MYC; protein mask\-and\-fill spans a 32× cross\-model gap; GPT\-4o complies on all natural\-language\-guided protein mutation prompts at CD = 2 while Claude Sonnet 4\.5 refuses all prompts at CD = 0; and a three\-predictor ADMET ensemble misses 30\.3% of known clinical toxics\. BioSafetyBench is, to our knowledge, the first bio\-AI safety benchmark to provide cascade\-level risk certificates whose scoring modules are weight\- and gradient\-flow independent from the model under test by construction\.

## DPIAgent: Divide, Protocol, Isolate for Agentic Reproduction Test Generation

**Authors:** Hao Liu; Steven Liu; Xin Zhang; Jane Luo; Yu Kang; Jie Wu; Fangkai Yang; Yangyu Huang; Pengfei Gao; Scarlett Li; Yan Lu

**ID:** 150275\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150275

[Paper](<https://openreview.net/forum?id=jN9jXO1jQ1>) | [PDF](<https://openreview.net/pdf?id=jN9jXO1jQ1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150275>)

Reproduction test generation, producing a failing\-then\-passing test that captures a reported bug, is a critical step in automated software engineering\. Existing agentic methods treat this as a monolithic loop, despite the task inherently comprising two subtasks of distinct nature: diagnosing the root cause and writing a fail\-to\-pass test\. Without explicit separation, the agent faces a compound objective with underspecified intermediate goals, leading to goal drift\. We propose DPIAgent, a structured agentic framework built on three principles, \*\*D\*\*ivide, \*\*P\*\*rotocol, \*\*I\*\*solate \(DPI\), that mitigates compound\-objective ambiguity and goal drift: it Divides the task into single\-objective phases of defect exploration and test generation; enforces a handoff Protocol that records the diagnosis and test plan, preventing context loss; and Isolates each phase's action space by tailoring the toolset to its task, preventing irrelevant tools from misleading execution\. On SWT\-Bench Verified, DPIAgent outperforms seven baselines across three backbone LLMs\. With DPI alone it reaches 81\.76% success rate on GPT\-5, the highest reported among open\-source methods, gaining up to 11\.88 points over the strongest baseline on GPT\-5\-Mini; adding test selection further raises it to 86\.17%\. Our analysis shows that architectural structure and backbone capability are complementary axes rather than substitutes, demonstrating DPI's generalizability across model classes\.

## Asynchronous Agentic Poisoning

**Authors:** Guangnian Wan; Shizun Wang; Qi Li; Xinchao Wang

**ID:** 153307\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153307

[Paper](<https://openreview.net/forum?id=MGAeMt2GKk>) | [PDF](<https://openreview.net/pdf?id=MGAeMt2GKk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153307>)

LLM agents are increasingly studied as systems that can self\-evolve during deployment\. A representative mechanism for realizing self\-evolution is memory evolution, where agents maintain evolving memories derived from previous tasks and condition future inference on their memory\.  Although memory evolution is intended to improve agent performance, it also creates a feedback loop in which model\-generated content can persist across tasks and influence future decisions\. We study this loop as a delayed attack channel for memory\-evolving agents\. We introduce asynchronous agentic poisoning, a provider\-side threat in which a malicious provider releases a model that appears safe under fresh\-context evaluation but exhibits unsafe behavior after self\-evolving through memory evolution\. We realize this threat by fine\-tuning the released model to silently embed a hidden marker into its otherwise normal responses, causing the marker to accumulate in the agent’s memory through memory evolution\. When the accumulated markers are later retrieved into the input context, the model reacts to them as a backdoor trigger and shifts to attacker\-specified behavior\. This creates a self\-triggered transition from safety\-aligned behavior to attacker\-specified behavior without requiring any post\-deployment attacker interaction\. Experimental results show that our method increases the harmful rate from below 5\\% to around 90\\% after memory evolution, while not substantially degrading the model’s self\-evolution performance\. These findings demonstrate that memory evolution creates a provider\-side pathway for delayed compromise, allowing a model to appear safe at release time while becoming unsafe after deployment through the agent’s self\-evolution process\.

## GeoSym127K: Scalable Symbolically\-verifiable Synthesis for Multimodal Geometric Reasoning

**Authors:** Jinhao Jing; Zheng Ma; Jinwei Liang; Qiannian Zhao; Shuang Chen; Jing Yang; Prayag Tiwari; Jingjing Bai; Benyou Wang; Por L Yee; Zhan Su; Lewei Lu

**ID:** 139481\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139481

[Paper](<https://openreview.net/forum?id=NO4INpEpCi>) | [PDF](<https://openreview.net/pdf?id=NO4INpEpCi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139481>)

Large Multimodal Models \(LMMs\) often struggle with geometric reasoning due to visual hallucinations and a lack of mathematically precise Chain\-of\-Thought \(CoT\) data\. To address this, we propose the GeoSym Engine, an automated and scalable neuro\-symbolic framework\. By leveraging a type\-conditional grammar and an analytic SymGT Solver, it derives exact symbolic ground truths and seamlessly integrates with a robust rendering pipeline to produce high\-precision geometric diagrams\. Using this engine, we construct GeoSym127K, a difficulty\-stratified dataset featuring 51K high\-resolution images, 127K questions with symbolic ground truths, and 55K answer\-verified CoT QA pairs\. We also introduce GeoSym\-Bench, an expert\-curated suite of 511 complex samples for rigorous evaluation\. Through extensive supervised fine\-tuning \(SFT\), we demonstrate that GeoSym drives concentrated improvements specifically on diagram\-dependent and multi\-step geometry tasks\. Our Qwen3\-VL\-8B model gains an absolute \+22\.21% on the MathVerse Vision\-Only subset and reaches 61\.52% \(\+6\.19% improvement\) on WeMath, mitigating long\-horizon logic fragmentation and outperforming advanced closed\-source models like Doubao\-1\.8\. Furthermore, applying Reinforcement Learning with Verifiable Rewards \(RLVR\) via GRPO reveals that initializing from structural SFT checkpoints substantially elevates the performance ceiling over zero\-shot RL\. Driven by deterministic exact\-match signals, this showcases the robust scaling potential of our verifiable reasoning synthesis\. Datasets and code are available at https://huggingface\.co/datasets/Tomie0506/GeoSym127K and https://github\.com/Tomie56/GeoSym127K

## Natural Synthesis: Outperforming Reactive Synthesis Tools with Large Reasoning Models

**Authors:** Frederik Schmitt; Matthias Cosler; Niklas Metzger; Julian Siber; Vladimir Krsmanovic; Oscar Ghanem; Bernd Finkbeiner

**ID:** 152164\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152164

[Paper](<https://openreview.net/forum?id=V35878j7OK>) | [PDF](<https://openreview.net/pdf?id=V35878j7OK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152164>)

Reactive synthesis, the problem of automatically constructing a hardware circuit from a logical specification, is a long\-standing challenge in formal verification\. It is elusive for two reasons: It is algorithmically hard, and writing formal specifications by hand is notoriously difficult\. In this paper, we tackle both sides of the problem\. For the algorithmic side, we present a neuro\-symbolic approach to reactive synthesis that couples large reasoning models with model checkers to iteratively repair a synthesized Verilog implementation via sound symbolic feedback\. Our approach solves more benchmarks than the best dedicated tools in the annual synthesis competition and extends to constructing parameterized systems, a problem known to be undecidable\. On the specification side, we introduce an autoformalization step that shifts the specification task from temporal logic to natural language by introducing a hand\-authored dataset of natural\-language specifications for evaluation\. We demonstrate performance comparable to that of starting from formal specifications, establishing natural synthesis as a viable end\-to\-end workflow\.

## Boosting Inference with Guided Reasoning: Stochastic Exploration for Recursive Models

**Authors:** Andrew Corbett; Archit Sood; Anna Tzatzopoulou; Sai\-Aakash Ramesh; Tim Dodwell

**ID:** 149759\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149759

[Paper](<https://openreview.net/forum?id=nZD0FHMUmR>) | [PDF](<https://openreview.net/pdf?id=nZD0FHMUmR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149759>)

Recent work on recursive architectures has shown that tiny neural networks can be surprisingly powerful on structured reasoning tasks\. The trick is to model reasoning trajectories with a latent dynamical system\. We argue that the inference\-time behaviour of these architectures is best understood as approximate inference over latent reasoning trajectories, with deterministic recursion as the one\-particle, zero\-noise limit\. We make this view operational through guided stochastic exploration: stochastic perturbations of the reasoning dynamics propose neighbouring trajectories, and the model's existing early\-stopping head reweights them online\. The framework yields three label\-free diagnostics: local stability, guide alignment, and cloud\-token entropy\. These predict, from inference traces alone, whether the procedure will help and which of its outputs to trust\. On Sudoku\-Extreme it lifts exact\-solve accuracy from $85\.9\\%$ to $98\.0\\%$ without retraining; on Maze\-Hard the diagnostics flag a misaligned guide, as validation performance later confirms\. The same machinery thus characterises both when recursive reasoning has room to improve at the trajectory level and when the model's internal guide can recover it\.

## SlopCodeBench: Benchmarking How Coding Agents Degrade Over Long\-Horizon Iterative Tasks

**Authors:** Gabriel Orlanski; Devjeet R Roy; Alexander Yun; Changho Shin; Alex Gu; Albert Ge; Dyah Adila; Nicholas Roberts; Frederic Sala; Aws Albarghouthi

**ID:** 138903\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138903

[Paper](<https://openreview.net/forum?id=xxD8UZjGl8>) | [PDF](<https://openreview.net/pdf?id=xxD8UZjGl8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138903>)

Software development is iterative, yet agentic coding benchmarks hide design issues through their single\-shot setup\. Recent iterative benchmarks attempt to remedy this but heavily constrain an agent's design decision space, making it impossible to faithfully measure how their decisions shape future extensions\. We introduce SlopCodeBench, a benchmark comprising 36 problems and 196 checkpoints in which agents repeatedly extend their own solutions\. Unlike prior iterative benchmarks, our evolving specifications demand architectural decisions but leave internal structure to the agent\. We measure two forms of degradation: structural erosion \(concentrated complexity\) and verbosity \(redundant code\)\. Evaluating 15 coding agents across open and closed models, we find that no agent fully solves any problem end\-to\-end, and the best agent passes 14\.8% of checkpoints\. Quality degrades across checkpoints, with structural erosion rising in 77% of trajectories and verbosity in 75\.5%\. Compared to 473 open\-source Python repositories, agent code is 2\.3x more verbose and 2\.0x more eroded, and the human repositories degrade less often and by smaller margins across their git histories\. Explicit quality guidance reduces initial verbosity and erosion by up to a third, without affecting degradation rates\. SlopCodeBench identifies a failure mode that single\-shot benchmarks cannot detect: agents that pass checkpoints while producing code that erodes and bloats with each extension\.

## Lean Refactor: Multi\-Objective Controllable Proof Optimization via Agentic Strategy Search

**Authors:** Jialin Lu; Soonho Kong; Rodrigo Stehling; Kaiyu Yang; Zhangyang &amp;amp;quot;Atlas&amp;amp;quot; Wang; Weiran Sun; Wuyang Chen

**ID:** 149326\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149326

[Paper](<https://openreview.net/forum?id=qwMCaWPqxQ>) | [PDF](<https://openreview.net/pdf?id=qwMCaWPqxQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149326>)

We present Lean Refactor, a plug\-and\-play retrieval\-augmented agentic framework for multi\-objective, controllable, and version\-robust refactoring of Lean proofs\. LLM\-generated proofs are notoriously correct\-but\-verbose and brittle across library versions, yet existing refactoring works overlook three practical challenges: 1\) Lean refactoring is natively multi\-objective \(proof length, compilation cost, and version compatibility are often in tension\); 2\) Lean repositories have fragile compatibility, whereas LLM releases are unaware of Lean/Mathlib versions; 3\) Training\-based pipelines require repeated fine\-tuning with each new LLM release, scaling neither with model churn nor with Lean's release cycle\. Lean Refactor steers a frozen agentic LLM with retrievals from a curated database of multi\-objective refactoring strategies, each densely annotated with metadata such as supported Lean/Mathlib versions and expected compilation\-cost reduction\. Experiments show over 70\\% token\-level compression on competition benchmarks, over 20\\% on research repositories, and up to 60\\% compilation\-time reduction, outperforming prior work and Claude Code\. Version\-filtered retrieval further improves compression on the target Lean version, and refactored miniF2F proofs exhibit stronger zero\-shot version transfer to future Lean releases than their unrefactored counterparts\. We will release our code, models, and data upon acceptance\.

## CLIFT: Conformal Self\-Verification for Web Agent Training and Test\-Time Scaling

**Authors:** Yifan Zhang; Yutong Dai; Viraj Prabhu; Zhiyuan Hu; Ran Xu; Zeyuan Chen

**ID:** 150357\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150357

[Paper](<https://openreview.net/forum?id=igVA4JNEyQ>) | [PDF](<https://openreview.net/pdf?id=igVA4JNEyQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150357>)

Open\-source web agents are now strong enough to execute realistic browser tasks, but training them with reinforcement learning still depends on weak supervision: binary task success is too sparse for credit assignment, while frontier\-language\-model judges are too expensive to call at every step and cannot be assumed available at deployment\. We introduce CLIFT, a training and test\-time scaling method built around conformal self\-verification\. During training, the agent answers natural\-language verification questions about its own rollouts; a Compositional Conformal Certifier keeps only question signals whose URL\-conditional evidence agrees with a training\-time judge, assigns signed trust weights through polarity\-aware lift, and blends the resulting verifier score into per\-step rewards in a way that never subtracts from the judge baseline\. At test time, the same certified bank is frozen and reused as structured evidence for Conformal Trajectory Selection \(CTS\): the agent samples a greedy rollout and one or more diverse retries, the self\-verifier summarises each URL trace, and a conservative majority\-vote rule chooses whether to swap away from the current incumbent without calling any external judge\. This single mechanism supports three settings\. On WebArena Infinity, CLIFT achieves state\-of\-the\-art performance among open\-source web agents\. On VisualWebArena, a bank trained with the open model transfers to GPT\-5\.5 at test time and reaches state\-of\-the\-art performance under the canonical harness\. On Online Mind2Web, without training an agent on the benchmark, translating the certified question bank improves a live\-web agent in zero\-shot evaluation\. Together these results position conformal self\-verification as a way to turn costly judge feedback into a reusable training signal and a judge\-free test\-time scaling signal\.

## SpatialClaw: Rethinking Action Interface for Agentic Spatial Reasoning

**Authors:** Seokju Cho; Ryo Hachiuma; Abhishek Badki; Hang Su; Byung\-Kwan Lee; Chan Hee Song; Sifei Liu; Subhashree Radhakrishnan; Seungryong Kim; Frank Wang; Min\-Hung Chen

**ID:** 149047\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149047

[Paper](<https://openreview.net/forum?id=tHCYfFr3sR>) | [PDF](<https://openreview.net/pdf?id=tHCYfFr3sR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149047>)

Spatial reasoning, the ability to determine where objects are, how they relate, and how they move in 3D, remains a fundamental challenge for vision\-language models \(VLMs\)\. Tool\-augmented agents attempt to address this by augmenting VLMs with specialist perception modules, yet their effectiveness is bounded by the \*action interface\* through which those tools are invoked\. In this work, we study how the design of this interface shapes the agent's capacity for open\-ended spatial reasoning\. Existing spatial agents either employ single\-pass code execution, which commits to a full analysis strategy before any intermediate result is observed, or rely on a structured tool\-call interface that often offers less flexibility for freely composing operations or tailoring the analysis to each task\. Both designs offer limited flexibility for open\-ended, complex 3D/4D spatial reasoning\. We therefore propose \*\*SpatialClaw\*\*, a training\-free framework for spatial reasoning that adopts code as the action interface\. \*\*SpatialClaw\*\* maintains a stateful Python kernel pre\-loaded with input frames and a suite of perception and geometry primitives, letting a VLM\-backed agent write one executable cell per step conditioned on all prior outputs, enabling the agent to flexibly compose and manipulate perception results and adapt its analysis to both intermediate text and visual observations and the demands of each problem\. Evaluated across \*\*20 spatial reasoning benchmarks\*\* spanning a broad range of static and dynamic 3D/4D spatial reasoning tasks, \*\*SpatialClaw\*\* achieves 59\.9% average accuracy, outperforming the recent spatial agent by \*\*\+13\.6 points\*\*, with consistent gains across six VLM backbones from two model families \*without any benchmark\- or model\-specific adaptation\*\.

## Before Words, Beyond Speech: Evaluating Nonverbal Social Reasoning in Early Childhood

**Authors:** Marie Huynh; Laura Bravo\-Sánchez; Lauren K Dubin; Nick Haber; Philip A Fisher; Serena Yeung\-Levy

**ID:** 139741\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139741

[Paper](<https://openreview.net/forum?id=7C5CgIiHcA>) | [PDF](<https://openreview.net/pdf?id=7C5CgIiHcA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139741>)

Children's earliest years are a period of intense social learning, during which meaning is built through gaze, gesture, and physical contact\. Yet, this critical aspect of social interaction remains under\-evaluated in multimodal video understanding, as existing benchmarks prioritize the conversation\-driven interactions of adults\. We address this gap with NEST \($\\textbf\{N\}$aturalistic $\\textbf\{E\}$arly\-childhood $\\textbf\{S\}$ocial in$\\textbf\{T\}$eractions\), the first child\-centric benchmark for nonverbal social reasoning\. NEST comprises 1,208 manually annotated clips \($\\sim$12s\) curated for diversity across naturalistic settings, cultural contexts, and developmental stages\. Beyond a lack of data, targeted model improvement in this domain is hindered by coarse evaluation schemas that conflate basic perception with higher\-order reasoning\. To resolve this, NEST introduces a compositional schema that builds atomic interaction cues into progressive levels of social reasoning: contextual, behavioral, interpersonal, and open\-ended descriptions\. Extensive analysis of state\-of\-the\-art Vision\-Language Models \(VLMs\) reveals a stark performance collapse: despite strong contextual recognition, models exhibit substantial gaps in decoding precise behavioral and interpersonal cues\. We trace these failures to specific biases, including poor consequence grounding and temporal sensitivity\. Finally, we ground NEST in real\-world applications by evaluating VLMs using domain adaptation strategies\. Ultimately, NEST provides a rigorous testbed for advancing socially grounded artificial intelligence in early childhood\. The dataset and code will be publicly released\.

## Mining Logic under Uncertainty: Probabilistic Soft Logic with Energy\-Based Inference for Chain\-of\-Thought Verification

**Authors:** Jiang Yu; Jinlong Tian; Kewei Cheng; Yue He; Haoxuan Li; Haotian Wang; Yunhai Wang; Wenjing Yang; Zhouchen Lin; Shixuan Liu

**ID:** 152179\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152179

[Paper](<https://openreview.net/forum?id=UyyA9UB5BN>) | [PDF](<https://openreview.net/pdf?id=UyyA9UB5BN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152179>)

Chain\-of\-Thought reasoning improves the explainability of large language models, yet verifying such reasoning remains difficult when intermediate steps express epistemic uncertainty rather than deterministic entailment\. Neuro\-symbolic verifiers typically translate reasoning steps into rigid first\-order or SMT\-style constraints\. This forces each proposition into a binary truth regime and creates a Rigidity\-\-Ambiguity Mismatch: uncertainty\-marked claims such as may, likely, or suggests are either over\-hardened into deterministic assertions or rejected as unverifiable\. We propose ProbVeri, a probabilistic soft\-logic framework for formal verification under uncertainty\. The key idea is to represent uncertainty\-marked reasoning steps as weighted soft logical constraints over continuous truth assignments, so that partial evidential support remains expressible\. Building on this soft\-logic representation, we formulate verification as a contrastive energy minimization problem: a step is considered supported when its natural interpretation has lower verification energy than its negated counterpart under the same evidence, soft rules, and assumption regularization\. Probabilistic Soft Logic defines the logical energy through weighted hinge\-loss constraints\. We introduce a support\-grounded assumption penalty that discourages unsupported latent bridge assumptions between context and claim\. The resulting energy gap provides a confidence\-scored verification signal that separates unsupported steps from weakly but consistently supported inferences\. Experiments on ProofWriter, BioASQ, and LegalBench\-SARA show that ProbVeri recovers more verified\-correct reasoning traces than rigid verifiers while reducing over\-acceptance compared with soft\-only PSL\. These results suggest that uncertainty\-aware verification benefits from soft logical formalization and contrastive comparison between natural and negated interpretations\.

## Learning to Evolve Scenes: Reasoning about Human Activities with Scene Graphs

**Authors:** Francesca Pistilli; Simone Alberto Peirone; Giuseppe Averta

**ID:** 150990\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150990

[Paper](<https://openreview.net/forum?id=dl9KfUrz4u>) | [PDF](<https://openreview.net/pdf?id=dl9KfUrz4u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150990>)

Understanding human behavior while interacting with the surrounding world is crucial for many applications of embodied AI\. First\-person videos are particularly informative for this problem, as they well capture how activities reshape the scene over time\. However, existing approaches often rely on implicit visual or language\-aligned representations, disregarding structured reasoning over the scene dynamic\. In this paper we argue that explicit, compositional and editable representations of human\-environment interactions can play a crucial role for rich grounded activity understanding\. To this end, we introduce SG\-Ego, a large scale annotation set extending Ego4D with spatio\-temporal scene graphs, where relations triplets are consolidated over time into explicit time\-evolving descriptions of the scene state\. To effectively reason over this representation, we propose GLEN, a graph\-based model that operates over scene graph sequences to both align them with textual actions and model their temporal evolution\. In addition, we formulate the activity\-driven graph\-edit forecasting \(A\-GEF\) problem, a novel task that casts scene dynamics as a sequence of structured transformations conditioned on ongoing actions, enabling explicit reasoning about how scenes change over time\. We demonstrate the effectiveness of our approach across multiple downstream tasks, spanning retrieval benchmarks as EgoMCQ and the more complex compositional EgoCVR, as well as long\-horizon reasoning benchmarks as EXPLORE\-Bench and the newly introduced A\-GEF\. GLEN achieves competitive or state\-of\-the\-art performance compared to raw video baselines and it excels in reasoning settings, typically addressed only with MLLMs, while enabling controllable and structured predictions of scene dynamics driven by human activities\. We believe our results establish spatio\-temporal scene graphs, together with models that reason over them, as strong compositional and interpretable representations for egocentric video understanding and potentially beyond\. Code will be released upon acceptance\.

## RICE\-PO: Turning Retrieval Interactions into Credit Signals for Reasoning Agents

**Authors:** mingchen li; Hansi Zeng; Zhuo Qian; Jiatan Huang; Sunjae Kwon; Hamed Zamani; Hong Yu

**ID:** 155818\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155818

[Paper](<https://openreview.net/forum?id=2fIYREq48r>) | [PDF](<https://openreview.net/pdf?id=2fIYREq48r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155818>)

_Abstract unavailable from the accessible public sources._

## Position: Robust Reasoning Requires Internal Time, Not Scale Alone

**Authors:** Amar Gahir; Shreyank Gowda

**ID:** 140003\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 140003

[Paper](<https://openreview.net/forum?id=vMxjno89df>) | [PDF](<https://openreview.net/pdf?id=vMxjno89df>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140003>)

_Abstract unavailable from the accessible public sources._

## ThinkSafe: Self\-Generated Safety Alignment for Reasoning Models

**Authors:** Seanie Lee; Sangwoo Park; Yumin Choi; Gyeongman Kim; Minki Kang; Jihun Yun; Dongmin Park; Jongho Park; Sung Ju Hwang

**ID:** 150302 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=j99oLs1zyq>) | [PDF](<https://openreview.net/pdf?id=j99oLs1zyq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150302>)

Large reasoning models \(LRMs\) achieve remarkable performance by leveraging reinforcement learning \(RL\) on reasoning tasks to generate long chain\-of\-thought \(CoT\) reasoning\. However, this over\-optimization often prioritizes compliance, making models vulnerable to harmful prompts\. To mitigate this safety degradation, recent approaches rely on external teacher distillation, yet this introduces a \\emph\{distributional discrepancy\} that degrades native reasoning\. We formalize safety realignment as a KL projection onto the safe simplex and prove that the student's own safety\-filtered distribution is the unique KL\-optimal target, while any external teacher incurs an irreducible excess KL penalty\. Guided by this analysis, we propose ThinkSafe, a self\-generated alignment framework that restores safety without external teachers\. Our key insight is that while compliance suppresses safety mechanisms, models often retain latent knowledge to identify harm\. ThinkSafe unlocks this via lightweight refusal steering, which preserves the KL\-optimal target while increasing the acceptance rate\. Experiments on DeepSeek\-R1\-Distill and Qwen3 show ThinkSafe significantly improves safety while preserving reasoning proficiency, and achieves superior safety and comparable reasoning to GRPO with roughly an order of magnitude less compute\. Code, models, and datasets are available at this  \[Github\]\(https://anonymous\.4open\.science/r/ThinkSafe\-E486/\) and \[HF repository\]\(https://huggingface\.co/neurips2026\-10977\)\.

## Evaluating the evidence trace of NeurIPS 2025 contributions with agentic code auditing

**Authors:** Pascal Iversen; Ferdous Nasri; Bernhard Y\. Renard; Katharina Baum

**ID:** 157023 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xjCJY8Xxcm>) | [PDF](<https://openreview.net/pdf?id=xjCJY8Xxcm>) | [Official poster](<https://neurips.cc/virtual/2026/session/137650>)

Code serves as the primary evidence behind computational publications, yet a detailed review of an unfamiliar codebase imposes a commonly prohibitive time burden on volunteer reviewers\. Consequently, self\-reported reproducibility checklists at major machine learning venues are rarely empirically verified\. This leaves code as a significant blind spot in peer review\. To bridge this gap, we introduce AuditOwl, an autonomous, verification\-centric LLM pipeline designed to make code auditing feasible for authors pre\-submission and reviewers post\-submission\. With this framework, we conduct an audit of 100 randomly sampled empirical papers from the NeurIPS 2025 main track\. For each paper, an LLM agent inspects the repository and evaluates its scientific claims against the evidence in the underlying code\. Following an independent adversarial verification pass to maximize precision, the system raises 609 discrepancies across the 87 papers with retrievable code \(median 7 per paper\), of which 388 are high or medium severity\. It produces evidence that can be quickly checked by humans: findings cite specific code and paper locations, and about half are backed by executable verification checks that the agent implements\. Eleven ML researchers evaluated 120 such findings for 30 paper\-code pairs and judged 1\.7% incorrect and 10\.0% incorrect or trivial\. Our approach reveals a steep reproducibility funnel: only 87% of papers in our sample release code at all, and for just 8% AuditOwl locates producing code for every traced result\. Discrepancies we find are heavily dominated by incompleteness of code and mismatches between what the paper describes and what the code does\. We also detect a prevalence of technical bugs and serious methodological issues\. Operating at reasonable cost, agentic code auditing can augment human peer review and help to make computational science more reproducible\. Code available at: https://github\.com/PascalIversen/auditowl\-neurips2025\.

## Crafter: Towards Automated Reproducible Machine Learning via Agentic Code Generation

**Authors:** Fangru Linghu; Jackson R Ye; Jieying Wang; Alexandre V Morozov; Ian Foster; Zhao Zhang

**ID:** 151168\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151168

[Paper](<https://openreview.net/forum?id=cWMcK8uzFF>) | [PDF](<https://openreview.net/pdf?id=cWMcK8uzFF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151168>)

Reproducing machine learning research is challenging because many papers do not provide executable code, and key implementation details are often scattered, implicit, or missing\. Existing paper\-to\-code systems improve over direct prompting, but the generated repositories can still miss paper\-critical logic or fail at execution time\. We propose Crafter, an automated paper\-to\-code pipeline that treats reproduction as a problem of context\-calibrated implementation recovery rather than single\-pass code generation\. Crafter builds an evidence\-grounded specification, resolves missing implementation details before planning, and repairs the generated repository through execution\-aware debugging\. We evaluate Crafter with PaperBench Code\-Dev for implementation faithfulness and a self\-designed execution\-oriented benchmark for runtime readiness\. Across 23 PaperBench papers using the Claude Sonnet 4\.6 backend, Crafter achieves an average Code\-Dev score of 0\.84, improving over Paper2Code by 19\.7% and over DeepCode by 22\.1%\. In execution evaluation, Crafter reaches the contribution\-level milestone on all three repositories, compared with two for both baselines, while reducing average repair cycles from 11\.0\-\-11\.3 to 5\.0\.

## PieArena: Ranking and Profiling Language Agents in Realistic Negotiation Scenarios

**Authors:** Chris Zhu; Sasha Cui; Will S Dufallo; Runzhi Jin; Zhen Xu; Linjun Zhang; Daylian M Cain

**ID:** 138985\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138985

[Paper](<https://openreview.net/forum?id=sODMs3VRWj>) | [PDF](<https://openreview.net/pdf?id=sODMs3VRWj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138985>)

We present an in\-depth evaluation of LLMs' ability to negotiate, a central business task requiring strategic reasoning, theory of mind, and economic value creation\. To do so, we introduce \*\*PieArena\*\*, a large\-scale negotiation benchmark grounded in multi\-agent interactions over realistic scenarios adapted from MBA negotiation courses at an elite business school\. We evaluate language agents across three pairing regimes: mirror\-play, cross\-play, and human–LM play\. We develop a ranking model for continuous negotiation payoffs that yields order\-invariant, uncertainty\-quantified leaderboards while correcting for systematic experimental asymmetries\. We further study the effects of joint\-intentionality agentic scaffolding and find asymmetric gains, with large improvements for mid\- and lower\-tier LMs and diminishing returns for frontier LMs\. As calibration anchors, we collect human–human and human–LM negotiation data from trained business school students, finding that a representative frontier language agent \(GPT\-5\) matches or exceeds this human baseline in our evaluation settings\. Beyond deal outcomes, PieArena provides a multi\-dimensional behavioral profile that reveals cross\-model heterogeneity in instruction compliance, computation accuracy, as well as judge\-assessed deception and reputation, illustrating the value of evaluation beyond outcome\-only leaderboards\.

## EvoDiagram: Agentic Editable Diagram Creation via Design Expertise Evolution

**Authors:** Tianfu Wang; Leilei Ding; Ziyang Tao; Yi Zhan; zhiyuan; Wei Wu; Yuxuan Lei; Junyang Wang; Yizhao Xu; Yin WU; Zhengyu Hu; Hongyuan Zhu; Nicholas Jing Yuan; Yanyong Zhang; Hui Xiong

**ID:** 154437\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154437

[Paper](<https://openreview.net/forum?id=DYFU7owVJ3>) | [PDF](<https://openreview.net/pdf?id=DYFU7owVJ3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154437>)

High\-fidelity diagram creation requires coordinated visual\-spatial decisions over semantic topology, visual styling, and geometric layout\. Existing methods face a representation gap: pixel\-based generation offers limited object\-level control, while code\-based synthesis provides executable structure at the cost of intuitive manipulation\. We introduce EvoDiagram, an agentic framework for editable diagram creation through an intermediate canvas schema that is both machine\-actionable and directly manipulable by users\. EvoDiagram first constructs a diagram manifest through coordinated structure, style, and layout agents, and then renders the manifest in a diagnostic verification environment\. This environment produces objective defect signals and VLM\-based critique, enabling localized refinement of the current diagram while also providing evidence for long\-term design expertise evolution\. The evolution mechanism distills refinement traces into a three\-tier design expertise memory, where candidate strategies are linked to the verification evidence that supports them and are promoted into broader guidelines and principles only through repeated cross\-context support\. We further define CanvasBench, a canvas\-recoverable benchmark and evaluation protocol with content, visual, and cognitive dimensions\. The current manuscript focuses on the framework, benchmark design, and reporting protocol; empirical results should be added only when the corresponding artifacts, judge traces, and analysis scripts are available for verification\. Our code is available at \\href\{https://anonymous\.4open\.science/r/evo\-diagram/\}\{https://anonymous\.4open\.science/r/evo\-diagram/\}\.

## Consumer Search and Social Learning in Agentic Markets

**Authors:** Brendan Lucier; Nicole Immorlica; Markus Mobius; Aleksandrs Slivkins; Daniel G Goldstein; Jake M Hofman; Sonia Jaffe; David Rothschild

**ID:** 154159\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154159

[Paper](<https://openreview.net/forum?id=Fogx1QxJIm>) | [PDF](<https://openreview.net/pdf?id=Fogx1QxJIm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154159>)

Motivated by agentic markets \-\- two\-sided markets in which AI tools facilitate search \-\- we propose a model that incorporates  individual consumer search and market\-wide learning, solve it to understand the long\-run market outcomes, and then study the impact of improved search technologies on these outcomes\. A sequence of consumers engage in costly search to acquire progressively refined signals of product fit prior to purchase\. The market observes acquired signals and post\-transaction feedback thereby impacting future searches\. We solve for the per\-consumer optimal search policy and characterize the  steady\-state of the  learning dynamics\. As search technologies reduce the cost and/or increase the informativeness of search, they cause an improvement in learning and consumer surplus\. Using numerical simulations, we also find that these technologies improve the rate of learning and the trajectory of consumer utility\. Notably, we show that if the market is unable to observe acquired signals, search technologies can degrade market outcomes, highlighting the importance of transparency in agentic markets\.

## A Latent World\-Action Model with Jointly Aligned Reasoning

**Authors:** Hao Luo; Wanpeng Zhang; Yicheng Feng; Sipeng Zheng; Haiweng Xu; Chaoyi Xu; Ziheng Xi; Yuhui Fu; Zongqing Lu

**ID:** 149267\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149267

[Paper](<https://openreview.net/forum?id=ray5fCkxmm>) | [PDF](<https://openreview.net/pdf?id=ray5fCkxmm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149267>)

_Abstract unavailable from the accessible public sources._

## Unveiling Fine\-Grained Visual Traces: Evaluating MultiModal Interleaved Reasoning Chains in Multimodal STEM Tasks

**Authors:** Jing Jin; Hao Liu; Yan Bai; Yihang Lou; Zhenke Wang; Tianrun Yuan; Yongkang Zhu; Juntong Chen; Fanhu Zeng; Xuanyu Zhu; Tao Feng; Yige Xu

**ID:** 149067\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149067

[Paper](<https://openreview.net/forum?id=t7FoUdbKB6>) | [PDF](<https://openreview.net/pdf?id=t7FoUdbKB6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149067>)

Multimodal large language models \(MLLMs\) have shown promising reasoning abilities, yet evaluating their performance in specialized domains remains challenging\. STEM reasoning is a particularly valuable testbed because it provides highly verifiable feedback, but existing benchmarks often permit unimodal shortcuts due to modality redundancy and focus mainly on final\-answer accuracy, overlooking the reasoning process itself\. To address this challenge, we introduce STEPSTEM: a graduate\-level benchmark of 283 problems across mathematics, physics, chemistry, biology, and engineering for fine\-grained evaluation of cross\-modal reasoning in MLLMs\. STEPSTEM is constructed through a rigorous curation pipeline that enforces strict complementarity between textual and visual inputs\. We further propose a general step\-level evaluation framework for both text\-only chain\-of\-thought and interleaved image\-text reasoning, using dynamic programming to align predicted reasoning steps with multiple reference solutions\. Experiments across a wide range of models show that current MLLMs still rely heavily on textual reasoning, with even Gemini 3\.1 Pro and Claude Opus 4\.6 achieving only 38\.29\\% accuracy\. These results highlight substantial headroom for genuine cross\-modal STEM reasoning and position STEPSTEM as a benchmark for fine\-grained evaluation of multimodal reasoning\.

## JobBench: Aligning Agent Work With Human Will

**Authors:** Yuetai Li; Yichen Feng; Zhangchen Xu; Zixian Ma; Kaiyuan Zheng; Fengqing Jiang; Xinghua Sun; Rulin Shao; Zichen Chen; Yue Huang; Xinyang Han; Brian Lee; Kayla Xu; Shenglai Zeng; Hang Hua; Xiangliang Zhang; Basel Alomair; Ranjay Krishna; Luke Zettlemoyer; Pang Wei Koh; Bhaskar Ramasubramanian; Luyao Niu; Xiang Yue; Radha Poovendran

**ID:** 138930\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138930

[Paper](<https://openreview.net/forum?id=vnyibVJpri>) | [PDF](<https://openreview.net/pdf?id=vnyibVJpri>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138930>)

Current benchmarks for occupational AI agents are scoped primarily by economic values, telling a replacement story\. We introduce JobBench, which evaluates AI agents on the workflows that experts identify as high\-priority for delegation, empowering humans based on their needs instead of replacing them with GDP value\. JobBench covers 130 agentic tasks across 35 occupations\. Each task is packaged as a workspace of heterogeneous reference files, requiring the agent to reason through the cluttered information streams of real professional work\. Outputs are graded by a fact\-anchored chain of rubrics, averaging 35\.6 binary criteria per task\. We evaluate 36 models; the strongest, Claude Opus 4\.7 under Claude Code, reaches only 45\.9 \\%\. We hope JobBench shifts the community's target labour\-market effect from replacement to enhancement: building agents that do what humans actually want delegated, not only what is most economically valuable\.

## Depth\-Recurrent Attention Mixtures: Giving Latent Reasoning the Attention it Deserves

**Authors:** Jonas Knupp; Jan Metzen; Jeremias Bohn; Georg Groh; Kristian Kersting

**ID:** 150663 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gO5QiZbYME>) | [PDF](<https://openreview.net/pdf?id=gO5QiZbYME>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150663>)

Depth\-recurrence promises improved latent reasoning by sharing parameters across depths\. However, prior work still relies on partially fixed layer stacks and overlooks the bottleneck of constant hidden\-size; moreover, it largely lacks rigorously resource\-matched ablations\. To address this, we introduce depth\-recurrent attention mixtures \(Dreamer\), a modular architecture with a single recurring layer\. Concretely, we mix sequence attention, depth attention, and sparse expert attention\. This alleviates the hidden\-size bottleneck, decouples scaling dimensions, and achieves effective yet efficient depth\-recurrence\. Across natural language reasoning benchmarks at up to \~2B parameters, Dreamer requires on average \~3x fewer training tokens for the same accuracy as FLOP\-, parameter\-, and memory\-matched modern Transformers, and outperforms \~2x larger Transformers given same training tokens\. Analysis further reveals 2\-11x greater expert selection diversity than conventional MoEs, highlighting the flexible knowledge sharing across depths\.

## Masked Diffusion Language Agents for Tool\-Integrated Chemical Reasoning

**Authors:** Mengdi Liu; Chenghao Jia; Hong Chang; Shiguang Shan

**ID:** 155362 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6BW0xHIq1l>) | [PDF](<https://openreview.net/pdf?id=6BW0xHIq1l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155362>)

Designing tool\-integrated reasoning agent systems for complex chemical tasks remains a fundamental challenge\. Although recent chemical agents have demonstrated promising performance through the integration of external tools, they are still built on the autoregressive paradigm, which is inherently constrained by causal attention and left\-to\-right generation\. As a result, they often struggle with bidirectional molecular understanding, global coordinated tool planning and multi\-source evidence integration\. To address this challenge, we introduce ChemDiffAgent, the first masked diffusion language agent for tool\-integrated chemical reasoning\. It reformulates chemical reasoning as iterative denoising over interleaved reasoning and tool\-use trajectories, enabling tool\-use decisions to be jointly determined under full\-trajectory context and thereby better aligning the agent's decision boundary with its knowledge boundary\. We further analyze how this paradigm benefits agentic reasoning through harder infilling subproblems during training and flexible arbitrary\-order decoding during inference\. Then we develop a two\-stage post\-training framework, comprising agentic supervised fine\-tuning and variance\-reduced preference optimization, to enhance tool\-use and reasoning capabilities\. We also construct a comprehensive benchmark covering six chemistry tasks across both single\-turn and multi\-turn tool\-use scenarios\. Under matched budgets and evaluation, ChemDiffAgent consistently outperforms autoregressive agents, achieving an overall improvement of approximately 20\\%\. Notably, our 8B model achieves performance comparable to, in some cases surpassing, significantly larger frontier models, such as GPT 5\.5 and Claude Opus 4\.7\.

## NesyProAct: Proactive Neural\-Symbolic Control for Web Agents

**Authors:** Tianyi Tang; Keyi Xiang; Jie\-Jing Shao; Yueming LYU; Ivor Tsang; Yew Soon Ong; Haiyan Yin

**ID:** 149026 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tPE2kMl83k>) | [PDF](<https://openreview.net/pdf?id=tPE2kMl83k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149026>)

Web\-based language agents operate under severe partial observability, where the semantic divergence between internal state assumptions and the ground\-truth environment is often unobservable\. Consequently, agents frequently maintain high\-level reasoning coherence over misgrounded states, causing errors to compound as subsequent decisions are conditioned on silently invalidated premises\. We present \*\*NesyProAct\*\*, a proactive neural\-symbolic agentic decision framework that transforms conventional ReAct\-style web agents from reactive prompting pipelines into execution\-aware decision processes\. NesyProAct exposes a typed symbolic decision interface over states, actions, transitions, and subgoals, enabling LLM\-based agents to automatically compose and reason over execution semantics across decision hierarchies\. From this interface, programmatic verification logic is synthesized online to evaluate step\-level executability and progress, with verification outcomes directly regulating decision evolution through targeted grounding interventions\. As a result, execution feedback is integrated into planning itself, allowing agents to maintain semantic alignment under partial observability rather than propagating unverified assumptions\. On WebArena, NesyProAct achieves a \*\*12\\%\*\* overall improvement over strong skill\-induction agentic web framework ASI across six domains\. NesyProAct also achieves noticeable performance when reasoning with small models GPT\-4o\-mini, with \*\*5\.1\\%\*\* gain over ASI with Claude\-3\.5\.

## ReasoningShield: Safety Moderation over Reasoning Traces of Large Reasoning Models

**Authors:** Changyi Li; Jiayi Wang; Xudong Pan; Geng Hong; Min Yang

**ID:** 139565 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IHZnRdQHFQ>) | [PDF](<https://openreview.net/pdf?id=IHZnRdQHFQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139565>)

Large Reasoning Models \(LRMs\) leverage explicit reasoning traces, known as Chain\-of\-Thought \(CoT\) reasoning, to decompose complex problems into intermediate steps before deriving final answers\. However, these reasoning traces introduce unique safety challenges: harmful content can be embedded in intermediate steps even when final answers appear benign\. Our study reveals that existing state\-of\-the\-art moderation tools experience significant performance degradation on CoT moderation, with F1 scores dropping by up to 35\.2% compared to traditional answer moderation\. To address these challenges, we present ReasoningShield, a comprehensive benchmark and a suite of strong lightweight models for CoT safety moderation\. Our benchmark includes 9\.2K annotated Query\-CoT pairs with structured stepwise risk analysis, consisting of a 7K\-sample training set and a 2\.2K human\-annotated test set, spanning 10 risk categories, 3 safety levels, and 8 LRMs with diverse reasoning paradigms\. To further demonstrate the utility of the benchmark, we develop lightweight models with 1B and 3B parameters using a two\-stage training strategy\. Our models achieve 91\.8% F1 on our benchmark, substantially outperforming leading tools such as LlamaGuard\-4 by 35\.6% and commercial models such as GPT\-4o by 15\.8%, while generalizing effectively across diverse reasoning paradigms and unseen scenarios\. All resources, including the dataset, code, and models, are released at https://anonymous\.4open\.science/r/ReasoningShield\.

## BrainCoT: A Multi\-Task Zero\-Shot Brain Signal Foundation Model with Neurometric\-Anchored Chain\-of\-Thought Reasoning

**Authors:** Yiyu Gui; Mingzhi Chen; Guibo Luo; Yuchao Yang

**ID:** 155614 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4EYWJe33bO>) | [PDF](<https://openreview.net/pdf?id=4EYWJe33bO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155614>)

Brain signals exhibit substantial multi\-center heterogeneity, strong inter\-subject variability, and highly diverse task settings, which makes it difficult to build models that generalize beyond a single task\. While recent brain signal foundation models leverage large\-scale pretraining to learn generalizable representations, they often fall short in practice because they still require target\-data\-specific supervised adaptation, lack multi\-task zero\-shot capability, and rarely provide verifiable evidence to support their predictions\. In this work, we present \*\*BrainCoT\*\*, a multi\-task zero\-shot Brain signal foundation model with neurometric\-anchored Chain\-of\-Thought \(CoT\) reasoning\. BrainCoT unifies heterogeneous tasks into an instruction\-driven framework so that, after pretraining, a single model can be directly applied to multiple tasks in zero\-shot settings without additional adaptation\. It further introduces neurometric\-anchored chain\-of\-thought grounded in neurometric evidence for verifiable reasoning, and adopts Decision\-Consistent Rationale Training to keep process learning aligned with correct predictions\. Across extensive evaluations, BrainCoT achieves an average ACC of 67\.41\\% and AUC of 74\.33\\% in zero\-shot classification without downstream training data, outperforming the strongest linear\-probing baseline trained with 1\\% labeled downstream data by 3\.85\\% in ACC and 5\.97\\% in AUC\. Code will be released upon acceptance\.

## AlignDrive: Aligned Lateral\-Longitudinal Planning for End\-to\-End Autonomous Driving

**Authors:** Yanhao Wu; Haoyang Zhang; Fei He; Rui Wu; Yanhu Shan; Congpei Qiu; Liang Gao; Wei Ke; Tong Zhang

**ID:** 152098 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VXtoyI6yEY>) | [PDF](<https://openreview.net/pdf?id=VXtoyI6yEY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152098>)

Practical autonomous driving requires models that generalize by reasoning through spatial\-temporal possibilities to exclude unsafe outcomes\. While state\-of\-the\-art \(SOTA\) methods use parallel planning architectures, they fail to explicitly couple speed decisions with agent behavior along the driving path, leading to suboptimal coordination\. To address this, we propose a cascaded framework that transforms longitudinal planning from an independent prediction task into a path\-conditioned reasoning process\. On the model side, we introduce an anchor\-based regression design that conditions longitudinal prediction on the lateral drive path, and reformulate longitudinal planning as 1D displacement prediction along the path\. This reduces geometric uncertainty and sharpens the model's focus on interaction\-driven dynamics\. On the data side, we introduce a planning\-oriented data augmentation strategy that simulates rare safety\-critical events by programmatically inserting agents and relabeling longitudinal targets to enforce collision avoidance\. Evaluated on the challenging Bench2Drive benchmark, our method achieves SOTA performance with a driving score of 89\.07 and a success rate of 73\.18\\%, demonstrating significantly improved coordination and safety\. Further evaluation on Fail2Drive confirms strong generalization to rare edge cases where parallel formulations typically fail\. Visualization videos are provided in the supplementary material\.

## Facts Don't Speak Louder than Words: The Behavioral Essence of Long\-CoT Distillation

**Authors:** Yongcan Yu; Jian Liang; Lingxiao He; Kuangpu Guo; Yanbo Wang; Shuo Lu; Meng Wang; Ran He

**ID:** 153530 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KeTJLE21Jz>) | [PDF](<https://openreview.net/pdf?id=KeTJLE21Jz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153530>)

While long chain\-of\-thought \(CoT\) distillation significantly improves the reasoning abilities of language models, its underlying mechanism remains poorly understood\. Current pipelines generally rely on rejection sampling to gather reasoning traces across diverse prompts, assuming that factual correctness and broad problem coverage are indispensable\. Surprisingly, we find that training exclusively on flawed reasoning trajectories or a restricted prompt set yields nearly comparable performance\. Driven by this counterintuitive finding, we propose the Behavioral Hypothesis: \*\*the essence of Long\-CoT distillation is behavioral alignment with structured reasoning patterns, rather than factual knowledge memorization\.\*\* We then validate this by demonstrating substantial reasoning gains even when models are fine\-tuned exclusively on previously mastered problems—effectively isolating behavioral alignment from novel knowledge injection\. Having established that reasoning patterns are the true bottleneck, we investigate how to learn them across varying levels of complexity optimally\. We reveal a critical interplay: while the recent probability\-based loss excels at learning simple patterns, the standard cross\-entropy loss is essential for scaling to complex CoTs\. We believe these insights demystify CoT distillation and provide a principled foundation for the future development of reasoning models\.

## Relaxed On\-Policy Distillation: Selective Credit Allocation for Scaling Reasoning Efficiently

**Authors:** Jongwoo Ko; Sara Abdali; Young Jin Kim; Tianyi Chen; Pashmina Cameron

**ID:** 150064 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l0h1SzRI7H>) | [PDF](<https://openreview.net/pdf?id=l0h1SzRI7H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150064>)

On\-policy distillation \(OPD\) is a promising approach for transferring reasoning capabilities to capacity\-constrained models, yet sampled\-token OPD often suffers from entropy collapse and negative transfer\. We identify uniform credit allocation as a key bottleneck: existing objectives obtain dense teacher feedback on student\-generated trajectories, but apply it uniformly across sampled tokens despite highly heterogeneous token\-level signals\. Most tokens carry redundant near\-zero credit, while rare heavy\-tailed negative credits can dominate updates and prematurely suppress plausible reasoning trajectories\. We introduce REOPOLD \(Relaxed On\-Policy Distillation\), a framework that relaxes this uniform assignment by controlling where teacher feedback is applied, how strongly it affects the update, and when the allocation rule changes during training\. Across diverse reasoning tasks, REOPOLD improves sampled\-token OPD over recent post\-training baselines with up to 12$\\times$ higher sample efficiency, and extends to cross\-vocabulary distillation, self\-distillation, and test\-time scaling\.

## INFUSER: Influence\-Guided Self\-Evolution Improves Reasoning

**Authors:** Siyu Chen; Miao Lu; Beining Wu; Heejune Sheen; Fengzhuo Zhang; Shuangning Li; Zhiyuan Li; Jose Blanchet; Tianhao Wang; Zhuoran Yang

**ID:** 153094 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=O0Hwud8ZLX>) | [PDF](<https://openreview.net/pdf?id=O0Hwud8ZLX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153094>)

Self\-evolution offers a scalable path to stronger reasoning: a pretrained language model improves itself with only minimal external supervision\. Yet existing methods either depend on extensively curated or teacher\-generated training data, or, when the generator runs unsupervised, reward it by a difficulty heuristic that need not improve the solver\. We introduce \*\*INFUSER\*\*, an iterative co\-training framework with two co\-evolving roles: a \*Generator\* that drafts questions and reference golden answers from a pool of unstructured, automatically collected documents, and a \*Solver\* that improves by training on them\. The solver is trained with standard correctness rewards against the generator\-provided answers, while the generator is rewarded by an \*optimizer\-aware influence score\* that measures whether each proposed question would actually improve the solver on the target distribution\. Because this continuous, noisy influence score is poorly served by standard GRPO, we propose \*\*DuGRPO\*\*, a dual\-normalized variant of GRPO, for generator training\. Together, these turn the document pool into an \*adaptive curriculum\* that favors questions useful to the current solver, not just hard ones\. On Qwen3\-8B\-Base, INFUSER outperforms strong self\-evolution baselines with over 20% relative improvement on Olympiad and SuperGPQA benchmarks, and an 8B INFUSER co\-evolving generator outperforms a frozen 32B thinking generator on math and coding\. Ablations confirm each design choice is necessary\.  Code is available at

## HierFlow: Hierarchical Coupled Dual\-Space Search for Automatic Agentic Workflow Generation

**Authors:** Dong Li; Yanchi Liu; Xujiang Zhao; Wei Cheng; Zhengzhang Chen; Xintao Wu; Zhong Chen; Chen Zhao; Haifeng Chen

**ID:** 149679 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oFWYxd9QWu>) | [PDF](<https://openreview.net/pdf?id=oFWYxd9QWu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149679>)

Agentic AI systems enable LLMs to solve non\-trivial tasks through structured workflows, but automatically generating such workflows remains challenging due to the discrete and combinatorial search space\. Existing methods often rely on offline search or training, limiting query\-level adaptability and incurring substantial data and engineering overhead\. We formulate workflow generation as a coupled topology\-\-execution search problem, where the upper\-level topology induces subtask\-specific code\-search domains and lower\-level execution feedback can revise the topology itself\. Based on this formulation, we propose HierFlow, a training\-free hierarchical test\-time search framework for automatic agentic workflow generation\. HierFlow couples feedback\-driven topology refinement with an MCTS\-inspired lightweight tree search for execution\-level sub\-workflow optimization, and uses an adaptive gating mechanism to selectively trigger execution\-level search based on estimated necessity\. We further provide a coupling\-aware analysis characterizing when hierarchical decomposition and proxy\-based gating are beneficial and when their advantages may degrade under stronger cross\-subtask coupling\. Experiments across QA, mathematical reasoning, and code generation benchmarks show that HierFlow achieves strong performance and favorable efficiency\-\-quality trade\-offs, outperforming competitive baselines without additional training\.

## STEER: Route\-Aware Adaptive Reasoning for  Autonomous Driving

**Authors:** YANGANG ZOU; Pei Liu; Nan Song; Bozhou Zhang; Mingyu Guo; Jun Ma; Jiankang Deng; Xiatian Zhu; Li Zhang

**ID:** 150589 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h3f4C9NmLn>) | [PDF](<https://openreview.net/pdf?id=h3f4C9NmLn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150589>)

Vision\-language action \(VLA\) models excel for end\-to\-end autonomous driving, yet their tendency to over\-invoke chain\-of\-thought \(CoT\) reasoning mirrors a human cognitive pitfall: overthinking\. Just as deliberate reasoning can slow/mislead human judgment in routine tasks, excessive CoT in VLA incurs unnecessary compute overhead and can paradoxically degrade planning performance\. Recent research tackles this via adaptive reasoning, which dynamically modulates inference complexity by selectively triggering CoT for complex scenes while responding directly to routine ones\. While prior adaptive methods rely on implicit adaptation, recent work shows that explicitly optimizing the route between CoT and direct responses yields superior performance, assuming scene\-difficulty annotations which are labor\-intensive, poorly scalable, and prone to error due to the subjectivity of judging driving complexity\. We explore, for the first time, whether adaptive reasoning with explicit route optimization can be achieved without any scene\-difficulty labeling\. We introduce STEER, a generic over\-reasoning mitigation strategy featuring two key components: \(i\) routing uncertainty\-aware rollout, which calibrates sampling to align routing diversity with model uncertainty; and \(ii\) cross\-route advantage credit assignment, which introduces a differential metric to reinforce optimal routing decisions based on environmental rewards rather than subjective labels\. Extensive experiments on NAVSIM v1/v2 demonstrate state\-of\-the\-art results in both planning quality and the Pareto front of inference efficiency\.

## CoWorld\-VLA: Thinking in a Multi\-Expert World Model for Autonomous Driving

**Authors:** Jingqi Wang; minqing huang; Zihan Liang; Yujiao Xiang; JiaJie Huang; Zhi Xu; Feiyang Tan; Hangning Zhou; Mu Yang; Gong Chen

**ID:** 156015\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156015

[Paper](<https://openreview.net/forum?id=19TafUAsz0>) | [PDF](<https://openreview.net/pdf?id=19TafUAsz0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156015>)

Vision\-Language\-Action \(VLA\) models have emerged as a promising paradigm for end\-to\-end autonomous driving\. However, existing reasoning mechanisms still struggle to provide planning\-oriented intermediate representations: textual Chain\-of\-Thought \(CoT\) fails to preserve continuous spatiotemporal structure, while latent world reasoning remains difficult to use as a direct condition for action generation\. In this paper, we propose CoWorld\-VLA, a multi\-expert world reasoning framework for autonomous driving, where world representations serve as explicit conditions to guide action planning\. CoWorld\-VLA extracts complementary world information through multi\-source supervision and encodes it into expert tokens within the VLA, thereby providing planner\-accessible conditioning signals\. Specifically, we construct four types of tokens: semantic interaction, geometric structure, dynamic evolution, and ego trajectory tokens, which respectively model interaction intent, spatial structure, future temporal dynamics, and behavioral goals\. During action generation, CoWorld\-VLA employs a diffusion\-based hierarchical multi\-expert fusion planner, which is coupled with scene context throughout the joint denoising process to generate continuous ego trajectories\. Experiments show that CoWorld\-VLA achieves competitive results in both future scene generation and planning on the NAVSIM v1 benchmark, demonstrating strong performance in collision avoidance and trajectory accuracy\. Ablation studies further validate the complementarity of expert tokens and their effectiveness as planning conditions for action generation\.

## OS\-Pruner: Pruning Chains\-of\-Thought of Reasoning Models via Optimal Stopping

**Authors:** Mohammed Ehab; Aymane El Gadarri; Vivek Farias; Adam Jozefiak; Ciamac C Moallemi

**ID:** 151204\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151204

[Paper](<https://openreview.net/forum?id=cB7emUeNVr>) | [PDF](<https://openreview.net/pdf?id=cB7emUeNVr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151204>)

_Abstract unavailable from the accessible public sources._

## Training with Harnesses: On\-Policy Harness Self\-Distillation for Complex Reasoning

**Authors:** Zhengyang Zhao; Lu Ma; Wentao Zhang

**ID:** 149380\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149380

[Paper](<https://openreview.net/forum?id=qUygKjKWMJ>) | [PDF](<https://openreview.net/pdf?id=qUygKjKWMJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149380>)

_Abstract unavailable from the accessible public sources._

## Depth\-Recurrent Attention Mixtures: Giving Latent Reasoning the Attention it Deserves

**Authors:** Jonas Knupp; Jan Metzen; Jeremias Bohn; Georg Groh; Kristian Kersting

**ID:** 150663\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150663

[Paper](<https://openreview.net/forum?id=gO5QiZbYME>) | [PDF](<https://openreview.net/pdf?id=gO5QiZbYME>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150663>)

Depth\-recurrence promises improved latent reasoning by sharing parameters across depths\. However, prior work still relies on partially fixed layer stacks and overlooks the bottleneck of constant hidden\-size; moreover, it largely lacks rigorously resource\-matched ablations\. To address this, we introduce depth\-recurrent attention mixtures \(Dreamer\), a modular architecture with a single recurring layer\. Concretely, we mix sequence attention, depth attention, and sparse expert attention\. This alleviates the hidden\-size bottleneck, decouples scaling dimensions, and achieves effective yet efficient depth\-recurrence\. Across natural language reasoning benchmarks at up to \~2B parameters, Dreamer requires on average \~3x fewer training tokens for the same accuracy as FLOP\-, parameter\-, and memory\-matched modern Transformers, and outperforms \~2x larger Transformers given same training tokens\. Analysis further reveals 2\-11x greater expert selection diversity than conventional MoEs, highlighting the flexible knowledge sharing across depths\.

## LeAct: Learning to Reason from Expert Actions

**Authors:** Ziran Yang; Chengshuai Shi; Raj Ghugare; Benjamin Eysenbach; Karthik Narasimhan; Chi Jin

**ID:** 155705\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155705

[Paper](<https://openreview.net/forum?id=3YtLpuclPl>) | [PDF](<https://openreview.net/pdf?id=3YtLpuclPl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155705>)

Modern reasoning models depend on reasoning data, today sourced from human annotations or distilled from stronger LLMs\. However, a rich and largely untapped source of supervision lies in expert systems \(e\.g\., game engines, classical planners, theorem provers\), which routinely produce near\-optimal actions across diverse domains\. But these experts are silent: they commit to an action without writing down the chain of thought \(CoT\) behind it\. Recovering that CoT as natural\-language reasoning would distill expert knowledge into a student that generalizes beyond the demonstrated actions\. We treat it as a latent variable and study how to recover it from the action alone\. Our approach, LeAct \(\*\*Le\*\*arning to reason from \*\*Act\*\*ions\), optimizes this latent variable: the student samples candidate CoTs for each expert action, and we retain those that measurably improve its own probability of recovering the action\. Across imperfect\-information games at multiple scales and a simulated robotics benchmark, LeAct reaches the solver's numerical floor on small enumerable games\. At larger scale, it is $5\\times$ closer to the solver than the strongest expert\-iteration baseline\. At Flop Hold'em \($\\sim 10^9$ infosets\), LeAct wins head\-to\-head by $\+60$ mbb/g, and on the robotics probe it is the only training recipe that improves on direct imitation\. We present a principled framework and the result: expert systems become a categorically new source of reasoning teachers for foundation models\.

## LPG: Balancing Efficiency and Policy Reasoning in Latent Policy Guardrails

**Authors:** Nanxi Li; Zhengyue Zhao; Chaowei Xiao

**ID:** 154458\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154458

[Paper](<https://openreview.net/forum?id=DQZZ9P0pXT>) | [PDF](<https://openreview.net/pdf?id=DQZZ9P0pXT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154458>)

Guardrails are a critical safety layer for modern AI systems, but their operating regime is changing\. As LLMs are deployed as customized assistants, safety policies are increasingly specified at inference time by users, organizations, or regulatory contexts\. This makes safety enforcement fundamentally dynamic: the guardrail should adapt to changing safety policies without retraining\. Yet this requirement creates a fundamental tension: faithfully judging complex policy contexts demands reasoning capability, while practical deployment requires low\-latency responses\. We introduce Latent Policy Guardrail \(LPG\), a guardrail framework that learns \*\*semantic latent deliberation\*\* over dynamic policies\. LPG compresses the internal deliberation needed for intent interpretation and policy grounding into continuous states supervised by decision\-relevant semantics\. At inference time, it generates only a compact verdict anchored to the violated policy clauses, preserving auditability while avoiding the latency of explicit reasoning\. Across policy guardrail benchmarks, LPG\-4B reaches 84\.5% average safety accuracy and 77\.9% F1 by compressing deliberation into just 10 latent tokens, outperforming the strongest dynamic baseline while running roughly 11 times faster than Qwen3\-4B\-Thinking under the single\-sample evaluation setup\.

## ExploitGym: Can AI Agents Turn Security Vulnerabilities into Real Attacks?

**Authors:** Zhun Wang; Nico Schiller; Hongwei Li; Srijiith S Narayana; Milad Nasr; Nicholas Carlini; Xiangyu Qi; Eric Wallace; Elie Bursztein; Luca Invernizzi; Kurt Thomas; Yan Shoshitaishvili; Wenbo Guo; Jingxuan He; Thorsten Holz; Dawn Song

**ID:** 139262\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139262

[Paper](<https://openreview.net/forum?id=bHDry6csia>) | [PDF](<https://openreview.net/pdf?id=bHDry6csia>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139262>)

AI agents are rapidly gaining capabilities that could significantly reshape cybersecurity, making rigorous evaluation urgent\. A critical capability is exploitation: turning a vulnerability, which is not yet an attack, into a concrete security impact, such as unauthorized file access or code execution\. Exploitation is a particularly challenging task because it requires low\-level program reasoning \(e\.g\., about memory layout\), runtime adaptation, and sustained progress over long horizons\. Meanwhile, it is inherently dual\-use, supporting defensive workflows while lowering the barrier for offense\. Despite its importance and diagnostic value, exploitation remains under\-evaluated\. To address this gap, we introduce ExploitGym, a large\-scale, diverse, realistic benchmark on the exploitation capabilities of AI agents\. Given a program input that triggers a vulnerability, ExploitGym tasks agents with progressively extending it into a working exploit\. The benchmark comprises 898 instances sourced from real\-world vulnerabilities across three domains, including userspace programs, Google's V8 JavaScript engine, and the Linux kernel\. We vary the security protections applied to each instance, isolating their impact on agent performance\. All configurations are packaged in reproducible containerized environments\. Our evaluation shows that while exploitation remains challenging, frontier models can successfully exploit a non\-trivial fraction of vulnerabilities\. For example, Claude Mythos Preview, Anthropic's latest model, produces working exploits for 208 instances\. Notably, even with widely used defenses enabled, models retain non\-trivial success rates\. These results establish ExploitGym as an effective testbed for exploitation and highlight the growing cybersecurity risks posed by increasingly capable AI agents\.

## Is Agentic AI Ready for Real\-World Hardware Engineering? A Deep Dive with Phoenix\-bench

**Authors:** Qingyun Zou; Feng Yu; Hongshi Tan; Jiahao Cui; Bingsheng He; Weng\-Fai Wong

**ID:** 139277\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139277

[Paper](<https://openreview.net/forum?id=ZrY50l0nRz>) | [PDF](<https://openreview.net/pdf?id=ZrY50l0nRz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139277>)

We ask whether agentic AI systems built for software engineering transfer to realistic hardware engineering\. Existing hardware LLM benchmarks isolate sub\-tasks but none jointly requires repository navigation, hierarchy\-aware localization, Electronic Design Automation \(EDA\) executable verification, and maintenance\-style patching\. We introduce \*\*Phoenix\-bench\*\*, a synchronized corpus of 511 verified Verilator instances from 114 GitHub repositories, each shipped with the developer patch, design\-flow labels, fail\-to\-pass and pass\-to\-pass testbenches, and a Docker\-pinned EDA environment so resolved\-rate differences reflect agent behavior rather than toolchain availability\. Using Phoenix\-bench we run a uniform evaluation of four commerical agents and eight open\-source agentic structures across four LLM backbones, plus two diagnostic interventions \(file\-level oracle localization and one round of testbench\-log feedback\)\. Three findings emerge\. \*\*Software and hardware are fundamentally different engineering tasks:\*\* the same agent loses 37\\% to 58\\% from SWE\-bench Verified to Phoenix\-bench because hardware bugs propagate across parallel instantiated modules through signal flow rather than along a software\-style call graph, and software\-tuned agents stop at the symptom file instead of tracing back through the instantiation chain\. \*\*Failures concentrate on design control\-flow / Finite State Machine bugs, verification testbench bugs, and hard cases\*\* that demand cross\-hierarchy signal\-flow tracking and coordinated multi\-file edits\. \*\*Localization granularity matters far more than localization itself:\*\* a perfect file\-level oracle yields only $\+1\.4$\\% because the agent then breaks files that did not need editing, while a single round of test case feedback lifts resolved rate by $42$\\% to $45$\\% because the test case tells \*where\* the bug is and \*what\* the fix has to look like\.

## CLAMP: A Sim\-to\-Real Benchmark for Closed\-Loop Kinematic Pose Estimation and Assembly Reasoning

**Authors:** Kevin Murray; Randolph B Robert; Petar Z Duric; Zoran Duric

**ID:** 139311\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139311

[Paper](<https://openreview.net/forum?id=Y7MzZuaIWr>) | [PDF](<https://openreview.net/pdf?id=Y7MzZuaIWr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139311>)

Existing benchmarks for known\-object pose estimation either treat objects as rigid bodies or restrict articulation to serial\-chain robot arms with revolute joints, and all assume that every part is always present\. Real\-world industrial and consumer equipment, however, exhibits closed\-loop kinematic chains, prismatic joints, and structural assembly perturbations&amp;mdash;challenges that current datasets and methods do not address\. We introduce CLAMP \(Closed\-Loop Assembly and Mechanism Perception\), a sim\-to\-real benchmark for kinematic pose estimation and assembly reasoning on mechanically complex known objects\.  The dataset spans seven diverse pieces of equipment&amp;mdash;ranging from a delta 3D printer with 27 coupled DOFs to a hydraulic jack with closed kinematic loops&amp;mdash;comprising over two million synthetic training images and approximately 21,000 real test images across 210 scenes, each annotated with ground\-truth joint states and part\-level assembly labels\. To produce this data we build supporting infrastructure, released with the benchmark: \(i\) a graph\-based kinematic representation that extends URDF's tree structure with closed\-loop constraints and the topology changes induced by missing parts; \(ii\) a synthetic data generator that samples valid poses on the kinematic constraint manifold and stochastically removes parts with automatic kinematic restructuring; and \(iii\) a real\-image labeling pipeline that jointly recovers camera alignment and equipment pose via multi\-view constrained optimization\.  The pipeline requires only a CAD model and kinematic description for each new piece of equipment, with no per\-equipment code, and the seven types serve as representative test cases of real\-world mechanical complexity\. We adapt three methods from different families as baselines: RoboPEPP, the state of the art on the DREAM robot pose benchmark, as well as HoRoPose and CRAVES\.  An ablation shows that our constrained pose sampling improves accuracy for most closed\-loop equipment\. The best method varies by equipment, but none performs consistently well: even the strongest on average, RoboPEPP, remains well below its accuracy on DREAM, and all three degrade on average when parts are missing\.  We release the full dataset \(\[https://huggingface\.co/datasets/clamp\-benchmark/clamp\-benchmark\]\(https://huggingface\.co/datasets/clamp\-benchmark/clamp\-benchmark\)\) as well as the synthetic data generation pipeline, evaluation code, and baseline implementations \(\[https://github\.com/overlab\-kevin/clamp\]\(https://github\.com/overlab\-kevin/clamp\)\)\.

## PRISM: A Benchmark for Programmatic Spatial\-Temporal Reasoning

**Authors:** Qiran Zhang; Yuheng Wang; Runde Yang; Lin Wu; Jingru Fan; Shu Yao; Jie Zhang; Tianle Zhou; Huatao Li; Ruijie Shi; Yihan Li; Chen Qian

**ID:** 139319\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139319

[Paper](<https://openreview.net/forum?id=XbNjlZYLho>) | [PDF](<https://openreview.net/pdf?id=XbNjlZYLho>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139319>)

Programmatic video generation through code offers geometric precision and temporal coherence unattainable by pixel\-level diffusion models, yet rigorously evaluating whether language models can produce spatially correct animated output remains an open problem\. We introduce \*\*PRISM\*\*, a large\-scale benchmark of 10,372 human\-calibrated instruction\-code pairs \($20\\times$ larger than prior Manim benchmarks\) grounded in real\-world educational scenarios across English and Chinese, spanning 437 subject categories\. Alongside the dataset, we propose a funnel\-style evaluation framework with four complementary metrics: \*Code\-Level Reliability\* as the executability gate, \*Spatial Reasoning\* as the core end\-to\-end metric measuring layout correctness over full animation sequences, and \*Prompt\-Aware Dynamic Visual Complexity\* \(PADVC\) and \*Temporal Density\* \(TD\) as diagnostic dimensions characterizing dynamic expression and temporal activity\. Systematic evaluation of seven mainstream LLMs reveals a striking \*Execution\-Spatial Gap\*: the average drop from execution success rate to spatial pass rate is approximately 41\\%, demonstrating that syntactically correct, runnable code does not automatically yield spatially coherent visual output\. No single model dominates all dimensions; notably, the model with the highest execution rate exhibits the largest Execution\-Spatial Gap, while the most spatially robust model does not lead on code reliability\. These findings highlight that evaluating programmatic video generation should not stop at executability\. PRISM provides a principled benchmark for advancing spatially coherent code generation\.

## BioSafetyBench: Agentic Cascade Evaluation for the Bio\-AI Ecosystem

**Authors:** Yang Cao; Xiaogeng Liu; Shengchao Liu; Chaowei Xiao

**ID:** 138924\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138924

[Paper](<https://openreview.net/forum?id=wblptYeXga>) | [PDF](<https://openreview.net/pdf?id=wblptYeXga>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138924>)

Biological risk is often a property of a cascade rather than a single model output\. A generated artifact may become consequential only after transcription, translation, folding, binding, pathway propagation, or host\-directed off\-target interaction\. Existing bio\-AI safety evaluations largely grade each model within its own modality, missing downstream risks and inheriting self\-grading circularity when model and evaluator share representations\. We introduce BioSafetyBench, an agentic cascade\-evaluation platform that treats the bio\-AI ecosystem as the unit of safety evaluation\. BioSafetyBench routes each model\-output pair to one of 15 standardized probes over a six\-level hierarchy from genome to organism\-level outcome\. Fixed bridge agents propagate outputs through two causal pathways: Pipeline A follows forward biological cascades, while Pipeline B evaluates CRISPR and siRNA designs through genome\- and transcriptome\-wide off\-target alignment\. At every reached level, external frozen evaluators compute domain\-native biomarkers and compare them with literature\-anchored thresholds, yielding a Cascade Concern Profile and Cascade Depth\. Across 25 foundation models, BioSafetyBench surfaces risks invisible to single\-modality grading: Influenza neuraminidase designs from ProteinMPNN and ESM\-IF1 reach CD = 4; jailbreak prompts inflate gRNA off\-target hits 9\.05× over baseline, push 48 of 604 gRNAs to Critical, and concentrate Critical siRNA hits on MYC; protein mask\-and\-fill spans a 32× cross\-model gap; GPT\-4o complies on all natural\-language\-guided protein mutation prompts at CD = 2 while Claude Sonnet 4\.5 refuses all prompts at CD = 0; and a three\-predictor ADMET ensemble misses 30\.3% of known clinical toxics\. BioSafetyBench is, to our knowledge, the first bio\-AI safety benchmark to provide cascade\-level risk certificates whose scoring modules are weight\- and gradient\-flow independent from the model under test by construction\.

## MindLoom: Composing Thought Modes for Frontier\-Level Reasoning Data Synthesis

**Authors:** Haiyang Shen; Taian Guo; Xuanzhong Chen; Mugeng Liu; Sixiong Xie; Zhuofan Shi; Chongyang Pan; Siqi Zhong; Guoqing Wang; Ming Zhang; Yun Ma

**ID:** 155952\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155952

[Paper](<https://openreview.net/forum?id=1aimZyyAD8>) | [PDF](<https://openreview.net/pdf?id=1aimZyyAD8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155952>)

Although LLMs have made substantial progress in reasoning, systematically producing frontier\-level reasoning data remains difficult\. Existing synthesis methods often have limited visibility into the structural factors that govern problem difficulty, which can result in narrow diversity and unstable difficulty control\. In this work, we view the difficulty of a reasoning problem as arising from the accumulation of atomic knowledge\-reasoning transformations, which we term \*thought modes\*\. Building on this perspective, we propose MindLoom, a framework for synthesizing frontier\-level reasoning data through compositional thought mode engineering\. Given a collection of hard problems with verified solutions, MindLoom first decomposes those solutions into thought mode chains that reveal each problem's construction logic\. It then trains a retrieval model that matches problem states to compatible thought modes, providing guidance on which reasoning challenges to introduce during synthesis\. New problems are composed by iteratively applying retrieved thought modes to seed questions, with distribution\-aligned sampling to encourage diverse reasoning coverage\. Finally, a rollout\-based judging stage labels generated questions by difficulty and supplies judged\-correct responses for supervised fine\-tuning\. We evaluate MindLoom on nine benchmarks covering five STEM disciplines and four mathematical reasoning tasks across multiple model families and sizes\. Models fine\-tuned on MindLoom generated data consistently improve over base models, distillation, and external\-data baselines across the reported benchmarks\. Ablation studies indicate the contribution of each component, and further analysis suggests that MindLoom covers a broad range of reasoning patterns while maintaining useful difficulty control\. We have open\-sourced our implementation at https://anonymous\.4open\.science/r/MindLoom\-5B8E\.

## ARCANA: A Benchmark for Abstraction and Analogical Reasoning

**Authors:** Ruqi Chen; Wei Wang; Zilei Wang

**ID:** 153989\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153989

[Paper](<https://openreview.net/forum?id=H30SaXZgYu>) | [PDF](<https://openreview.net/pdf?id=H30SaXZgYu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153989>)

_Abstract unavailable from the accessible public sources._

## Reading Between the Dots: Decoding Hidden Computation across Filler Tokens

**Authors:** Kaley Brauer; Claudio Mayrink Verdun; Samuel Marks

**ID:** 153275\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153275

[Paper](<https://openreview.net/forum?id=MSvjzJxTk3>) | [PDF](<https://openreview.net/pdf?id=MSvjzJxTk3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153275>)

Frontier LLMs can perform multi\-step reasoning over content\-free filler tokens like dots or counting sequences, producing correct answers with no visible chain\-of\-thought \(CoT\)\. This has been cited as a limit case for CoT monitorability: if the surface tokens carry no information about the reasoning, behavioral oversight has nothing to read\. But hidden from the output is not the same as hidden from us\. On three task families spanning fact retrieval, parallel numeric composition, and string manipulation, two open\-weights frontier models \(DeepSeek V3, Kimi K2\) compute over filler tokens in a structured, legible way\. Attention routes the question through the filler region to the answer, KV\-cache transplants at only filler positions causally swap the model's output between examples, and logit\-lens readouts reveal a temporal structure in which retrieved facts appear early and their composition crystallizes in late layers\. We then introduce an unsupervised decoding pipeline that takes only hidden states as input and recovers intermediate values with 80–95\\% accuracy with the strongest LLM judge across both models and all three tasks, without ground\-truth labels or training\. Hidden computation that defeats behavioral CoT monitoring is, on these tasks, directly readable from the residual stream\. This suggests that monitorability should be understood as a property of the model's full computational trace, not just its surface tokens\.

## ToolCUA: Towards Optimal GUI\-Tool Path Orchestration for Computer Use Agents

**Authors:** XuHao Hu; Xi Zhang; Haiyang Xu; Kyle Qiao; Jingyi Yang; Xuanjing Huang; Jing Shao; Ming Yan; Jieping Ye

**ID:** 154043\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154043

[Paper](<https://openreview.net/forum?id=Geiw1NtYWx>) | [PDF](<https://openreview.net/pdf?id=Geiw1NtYWx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154043>)

Computer Use Agents \(CUAs\) can act through both atomic GUI actions \($\\textit\{e\.g\., click, type\}$\) and high\-level tool calls \($\\textit\{e\.g\., API\-based file operations\}$\), but they are often confused by this hybrid action space: they do not know when to continue with GUI actions and when to switch to tools, and finally fail to select the optimal execution path\. We view this orchestration problem as GUI\-Tool path selection: deciding when the agent should continue with GUI actions and when it should switch to tool calls to form an effective execution trajectory\. This difficulty stems from two issues\. First, high\-quality interleaved GUI\-Tool trajectories are scarce, and collecting real tool trajectories is expensive and brittle\. Second, existing supervision provides limited guidance for GUI\-Tool path selection, as most methods focus on step\-level action imitation or final task completion and offer little trajectory\-level feedback on whether GUI\-Tool switching leads to a more effective execution path\. In this paper, we propose $\\textbf\{ToolCUA\}$,  an end\-to\-end agent designed to learn optimal GUI\-Tool path selection through a staged training paradigm\. We first introduce an $\\textbf\{Interleaved GUI\-Tool Trajectory Scaling Pipeline\}$ that repurposes abundant static GUI trajectories and synthesizes a grounded library of tools, making it possible to scale diverse GUI\-Tool trajectories without manual engineering or real tool\-trajectory collection\.Based on this data, we perform Tool\-Bootstrapped GUI RFT, which combines warmup SFT with single\-turn RL to improve decisions at critical GUI\-Tool switching points\. Finally, we further optimize ToolCUA with $\\textbf\{Online Agentic RL\}$ in a high\-fidelity GUI\-Tool environment, using a Tool\-Efficient Path Reward that encourages both appropriate tool use and shorter execution paths\. Experiments on OSWorld\-MCP show that ToolCUA achieves 46\.85% accuracy and outperforms the baseline by over 60% relatively, establishing a new state of the art among models of comparable scale\. It also improves by 3\.9% over GUI\-only settings, demonstrating effective GUI\-Tool orchestration\. The results further suggest that training in a hybrid action space is a promising paradigm for real\-world digital agents\.

## Med\-Agentic: Distilling Agentic Medical Reasoning with Internalized Meta\-Capabilities

**Authors:** Yucheng Zhou; Junwei Sheng; Jianbing Shen

**ID:** 153012\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153012

[Paper](<https://openreview.net/forum?id=OddJPCN8CO>) | [PDF](<https://openreview.net/pdf?id=OddJPCN8CO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153012>)

_Abstract unavailable from the accessible public sources._

## DocAtlas: Long\-Document Understanding as Mutable\-State Interaction

**Authors:** Hongchen Wei; Yuanzhe Wang; Bei Liu; Yifan Yang; Qi Dai; Kai Qiu; Yunsheng Li; Dongdong Chen; Chong Luo; Zhenzhong Chen; Baining Guo

**ID:** 148605\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148605

[Paper](<https://openreview.net/forum?id=wV6e00cQ2S>) | [PDF](<https://openreview.net/pdf?id=wV6e00cQ2S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148605>)

Long\-document understanding requires models to find and combine evidence across many pages, layouts, tables, figures, and charts\. Existing retrieval\-augmented systems usually select evidence from a static index before generation, while recent agentic systems add multi\-turn tool use but often rely on frozen proprietary backbones whose behavior is set by prompts\. We present DocAtlas, a system that treats long\-document understanding as a mutable\-state information\-seeking process\. We instantiate DocAtlas as a mutable document harness: an external environment that determines what document information is searched, read, stored, reviewed, and shown to the model at each step\. Given a document and question, the harness exposes search, reading, note\-taking, and review tools, maintains a hierarchical tree and note store, and updates both as the agent records evidence\. DocAtlas combines self\-improving retrieval, selective evidence access, and active working memory under a fixed context budget\. The same harness supports inference\-time use with large VLMs and end\-to\-end reinforcement learning for compact VLM agents\. With GPT\-5\.4, DocAtlas reaches 71\.4\\% on MMLongBench\-Doc, exceeding the human\-expert reference of 65\.8\\%\. A Qwen3\.5\-4B VLM trained with end\-to\-end RL in the DocAtlas environment reaches 63\.7\\%, compared with a 54\.4\\% direct\-input baseline, showing that mutable document\-harness design can improve compact document agents by a large margin\.

## ARCANA: A Benchmark for Abstraction and Analogical Reasoning

**Authors:** Ruqi Chen; Wei Wang; Zilei Wang

**ID:** 153989\-\-3 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153989

[Paper](<https://openreview.net/forum?id=H30SaXZgYu>) | [PDF](<https://openreview.net/pdf?id=H30SaXZgYu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153989>)

_Abstract unavailable from the accessible public sources._

## Reading Between the Dots: Decoding Hidden Computation across Filler Tokens

**Authors:** Kaley Brauer; Claudio Mayrink Verdun; Samuel Marks

**ID:** 153275\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153275

[Paper](<https://openreview.net/forum?id=MSvjzJxTk3>) | [PDF](<https://openreview.net/pdf?id=MSvjzJxTk3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153275>)

Frontier LLMs can perform multi\-step reasoning over content\-free filler tokens like dots or counting sequences, producing correct answers with no visible chain\-of\-thought \(CoT\)\. This has been cited as a limit case for CoT monitorability: if the surface tokens carry no information about the reasoning, behavioral oversight has nothing to read\. But hidden from the output is not the same as hidden from us\. On three task families spanning fact retrieval, parallel numeric composition, and string manipulation, two open\-weights frontier models \(DeepSeek V3, Kimi K2\) compute over filler tokens in a structured, legible way\. Attention routes the question through the filler region to the answer, KV\-cache transplants at only filler positions causally swap the model's output between examples, and logit\-lens readouts reveal a temporal structure in which retrieved facts appear early and their composition crystallizes in late layers\. We then introduce an unsupervised decoding pipeline that takes only hidden states as input and recovers intermediate values with 80–95\\% accuracy with the strongest LLM judge across both models and all three tasks, without ground\-truth labels or training\. Hidden computation that defeats behavioral CoT monitoring is, on these tasks, directly readable from the residual stream\. This suggests that monitorability should be understood as a property of the model's full computational trace, not just its surface tokens\.

## ToolCUA: Towards Optimal GUI\-Tool Path Orchestration for Computer Use Agents

**Authors:** XuHao Hu; Xi Zhang; Haiyang Xu; Kyle Qiao; Jingyi Yang; Xuanjing Huang; Jing Shao; Ming Yan; Jieping Ye

**ID:** 154043\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154043

[Paper](<https://openreview.net/forum?id=Geiw1NtYWx>) | [PDF](<https://openreview.net/pdf?id=Geiw1NtYWx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154043>)

Computer Use Agents \(CUAs\) can act through both atomic GUI actions \($\\textit\{e\.g\., click, type\}$\) and high\-level tool calls \($\\textit\{e\.g\., API\-based file operations\}$\), but they are often confused by this hybrid action space: they do not know when to continue with GUI actions and when to switch to tools, and finally fail to select the optimal execution path\. We view this orchestration problem as GUI\-Tool path selection: deciding when the agent should continue with GUI actions and when it should switch to tool calls to form an effective execution trajectory\. This difficulty stems from two issues\. First, high\-quality interleaved GUI\-Tool trajectories are scarce, and collecting real tool trajectories is expensive and brittle\. Second, existing supervision provides limited guidance for GUI\-Tool path selection, as most methods focus on step\-level action imitation or final task completion and offer little trajectory\-level feedback on whether GUI\-Tool switching leads to a more effective execution path\. In this paper, we propose $\\textbf\{ToolCUA\}$,  an end\-to\-end agent designed to learn optimal GUI\-Tool path selection through a staged training paradigm\. We first introduce an $\\textbf\{Interleaved GUI\-Tool Trajectory Scaling Pipeline\}$ that repurposes abundant static GUI trajectories and synthesizes a grounded library of tools, making it possible to scale diverse GUI\-Tool trajectories without manual engineering or real tool\-trajectory collection\.Based on this data, we perform Tool\-Bootstrapped GUI RFT, which combines warmup SFT with single\-turn RL to improve decisions at critical GUI\-Tool switching points\. Finally, we further optimize ToolCUA with $\\textbf\{Online Agentic RL\}$ in a high\-fidelity GUI\-Tool environment, using a Tool\-Efficient Path Reward that encourages both appropriate tool use and shorter execution paths\. Experiments on OSWorld\-MCP show that ToolCUA achieves 46\.85% accuracy and outperforms the baseline by over 60% relatively, establishing a new state of the art among models of comparable scale\. It also improves by 3\.9% over GUI\-only settings, demonstrating effective GUI\-Tool orchestration\. The results further suggest that training in a hybrid action space is a promising paradigm for real\-world digital agents\.

## Unveiling Entropy\-Performance Decoupling in Agentic RL for Tool\-Integrated Reasoning

**Authors:** Yirong Zeng; Shen You; Yufei Liu; Hao Cong; Yutai Hou; Xiao Ding; Yuxian Wang; Wu Ning; WangXu; Bibo Cai; Dandan Tu; Wenyu Zang; Ting Liu

**ID:** 150606 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gtJOVyrY09>) | [PDF](<https://openreview.net/pdf?id=gtJOVyrY09>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150606>)

_Abstract unavailable from the accessible public sources._

## CRISP: Compositional Reasoning over Images via Stackable Programs for VLMs

**Authors:** Arnas Uselis; Yujin Jeong; Yanpeng Zhao; Alexander Rubinstein; Seong Joon Oh; Yonatan Bitton; Paul Gavrikov

**ID:** 139787 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4tXzMne4ZB>) | [PDF](<https://openreview.net/pdf?id=4tXzMne4ZB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139787>)

_Abstract unavailable from the accessible public sources._

## HumanoidArena: Benchmarking Egocentric Hierarchical Whole\-body Learning

**Authors:** Taowen Wang; zikang xie; Bin Yang; Yunheng Wang; Zizhao Yuan; Yuetong Fang; Yixiao Feng; Yichi Wang; Xingyu Chen; Haodong Chen; Qiwei Wu; Weisheng Xu; Lihan Chen; Lusong Li; zeng zecui; Renjing Xu

**ID:** 139007 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=r3Vj07V062>) | [PDF](<https://openreview.net/pdf?id=r3Vj07V062>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139007>)

Humanoid robots promise whole\-body interaction in human\-centered environments, but scalable policy learning remains difficult because task\-level semantic reasoning and whole\-body level  dynamic execution are tightly coupled\.  A practical solution is hierarchical control, where a high\-level policy predicts intermediate whole\-body actions and low\-level general motion trackers \(GMTs\) execute them as stable humanoid motion\. However, existing benchmarks rarely evaluate the policy–tracker interface itself, leaving open whether intermediate whole\-body actions are executable, robust under task distribution shifts, and transferable across different GMT backends\. We introduce \\textsc\{HumanoidArena\}, a simulation\-first benchmark for egocentric hierarchical whole\-body learning\. The benchmark formulates policy learning as a hierarchical decision making problem: a high\-level policy converts egocentric vision, proprioception, and instructions into a compact whole\-body action, which is subsequently executed by a low\-level GMT\.  Instead of treating the legs as planar transport tools,  \\textsc\{HumanoidArena\} emphasizes interactions where lower\-body coordination is structurally necessary in task completion\.  We therefore design 7 leg\-critical HOI/HSI tasks in which success requires foot placement, balance maintenance, posture adjustment, and whole\-body reorientation\.  To further diagnose the hierarchical system, we evaluate policies from two complementary perspectives: perturbation\-conditioned generalization and GMT\-conditioned transfer\. We benchmark representative imitation\-learning and VLA\-style policies under this shared interface\. Experiments show that hierarchical control enables learned policies to solve diverse leg\-critical interactions, but performance is strongly tracker\-conditioned and cross\-GMT transfer remains fragile\. These results position \\textsc\{HumanoidArena\} as a benchmark for studying transferable intermediate action representations and scalable egocentric whole\-body policy learning\. Code and data are available at: \\url\{https://anonymous\.4open\.science/r/HumanoidArena\-D36F\}\.

## Transcoder Adapters for Reasoning\-Model Diffing

**Authors:** Nathan Hu; Jake Ward; Thomas Icard; Chris Potts

**ID:** 155046 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8r7iV7T03x>) | [PDF](<https://openreview.net/pdf?id=8r7iV7T03x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155046>)

While reasoning models are increasingly ubiquitous, the effects of reasoning training on a model's internal mechanisms remain poorly understood\. We introduce transcoder adapters, a technique for learning an interpretable approximation of the \*difference\* in MLP computation before and after fine\-tuning\. We train transcoder adapters on two pairs of base and reasoning models: Qwen2\.5\-Math\-7B / DeepSeek\-R1\-Distill\-Qwen\-7B and Qwen2\.5\-32B / QwQ\-32B\. We find that modeling the difference in MLP computation is far easier than modeling the full MLP; adapters achieve faithful reconstruction with an order of magnitude fewer active features than typical transcoders\. When evaluated on reasoning benchmarks, adapters exhibit the reasoning model's characteristic long responses and recover a large fraction of its benchmark performance\. Adapter features are interpretable, achieving higher automated interpretability scores than MLP neurons\. To demonstrate the utility of transcoder adapters for interpreting fine\-tuning differences, we present two case studies on the 7B model pair\. First, we examine the overall composition of adapter features to gain a broad overview of fine\-tuning differences\. Despite being specific to fine\-tuning by construction, many features have activating examples unrelated to reasoning structure\. Interventions confirms these features disproportionately affect benchmark performance rather than response length\. Second, we study why the model says 'wait' by constructing attribution graphs whose edges flow through base model parameters\. We trace hesitation to only $\\sim$2\.4\\% of adapter features \(5\.6k total\), finding that this behavior depends largely on base model computation\. These features are necessary and sufficient for producing hesitation tokens; removing them reduces response length, often without affecting accuracy\. Anonymous code is available at \\url\{https://anonymous\.4open\.science/r/transcoder\-adapters\-6752/\}\.

## Reasoning Poisoning: Utilizing Social\-Engineering to Steer Chain\-of\-Thought

**Authors:** Matan Levy; Ilan Zendel; Stav Cohen; Amit LeVi; Avi Mendelson

**ID:** 151543 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZswTm9bjg9>) | [PDF](<https://openreview.net/pdf?id=ZswTm9bjg9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151543>)

The transition of Large Language Models \(LLMs\) to autonomous reasoning agents introduces a critical vulnerability within the reasoning trace itself\. We present Reasoning Poisoning, a framework demonstrating how adversaries can exploit an agent via model\-directed social engineering by manipulating retrieved context to weaponize the model's Reinforcement Learning from Human Feedback \(RLHF\) alignment\. Our central paradigm, Logic Hijacking, exploits generalized alignment constraints by introducing fictitious hazards that force the agent to actively eliminate legitimate targets and select the attacker's target as the only "valid" alternative\.   Evaluating six state\-of\-the\-art, production\-deployed reasoning models across 10 domains, we show that this attack fundamentally overrides standard logic, achieving Attack Success Rates \(ASR\) exceeding 83%\. The vulnerability remains highly effective even when the attacker controls only 10% of the retrieved context and exhibits robust success regardless of the adversarial payload's position within the evidence window\. Controlled baselines confirm that this steering is driven by adversarial constraints, not ordinary promotional bias\. Furthermore, we find that agents are entirely unresponsive to simulated social proof \(e\.g\., user upvotes\), relying instead on stylistic and semantic cues that mimic their own alignment training\. Ultimately, our findings reveal a troubling paradox: the very alignment mechanisms designed to make models helpful and safe can be exploited to seamlessly hijack the reasoning process\.

