# Applications / Everything Else

应用 / 其他应用

25 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Rigel3D: Rig\-aware Latents for Animation\-Ready 3D Asset Generation

**Authors:** Nikitas Chatzis; Marios Loizou; Evangelos Kalogerakis

**ID:** 148245 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zKGmCGx8bP>) | [PDF](<https://openreview.net/pdf?id=zKGmCGx8bP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148245>)

Recent 3D generative models can synthesize high\-quality assets, but their outputs are typically static: they lack the skeletal rigs, joint hierarchies, and skinning weights required for animation\. This limits their use in games, film, simulation, virtual agents, and embodied AI, where assets must not only look plausible but also move plausibly\. We introduce Rigel3D, a generative method for animation\-ready 3D assets represented as rigged meshes\. Unlike post\-hoc auto\-rigging methods that attach rigs to completed shapes, our method jointly models geometry and rig structure through coupled surface and skeleton structured latent representations\. A rig\-aware autoencoder decodes these representations into mesh geometry, skeleton topology, joint coordinates, and skinning weights, while a two\-stage latent generative model synthesizes both surface and skeleton representations for image\-conditioned generation\. To support downstream animation workflows, we further introduce an open\-vocabulary joint labeling module that embeds generated joints into a shared vision\-language space, enabling correspondence to arbitrary retargeting templates\. Experiments on large\-scale rigged asset datasets demonstrate that our method generates diverse, high\-quality animation\-ready assets and outperforms existing rigging baselines across multiple metrics\.

## Language\-Based Agent Control

**Authors:** Timothy Zhou; Loris D&amp;amp;\#x27;Antoni; Nadia Polikarpova

**ID:** 156018 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=16tteJWMPL>) | [PDF](<https://openreview.net/pdf?id=16tteJWMPL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156018>)

This paper introduces language\-based agent control \(LBAC\), a method to apply techniques from language\-based security to the control of AI agents\. Unlike systems\-level defenses such as I/O sandboxing, LBAC can express application\-level policies\. Moreover, in LBAC agents may perform computations and recursively invoke subagents with tool access\.  Language\-based techniques enable the design of APIs which, through a combination of typing discipline and internal runtime checks, ensure that any well\-typed program obeys a desired property\. The core idea of LBAC is to have agents interact with the world by generating programs against such APIs rather than by issuing tool calls directly\. These programs may themselves contain recursive calls to subagents, which retain full tool access; the type checker rejects ill\-typed programs before execution, and policies thereby extend uniformly across the entire agentic system, including its scaffolding and control flow\. We demonstrate LBAC with three case studies: I/O sandboxing via filesystem capabilities, data provenance, and information\-flow control\.

## Targeted Review for AI\-Assisted Biodiversity Surveys: Active Continuous\-Score Occupancy Modeling

**Authors:** Timm Haucke; Lauren Harrell; Justin Kay; Mary K Clapp; Sara Beery

**ID:** 155443 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5ZEdikiayy>) | [PDF](<https://openreview.net/pdf?id=5ZEdikiayy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155443>)

_Abstract unavailable from the accessible public sources._

## LiveOption: Evaluating LLM Agents in Structured Option Trading with Nonlinear Payoffs

**Authors:** Haochen Luo; YIFAN LI; An B Minh; Xiaolong Luo; Zhengzhao Lai; Yuan Zhang; Chen Liu

**ID:** 139572 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Hq0yW7Gvva>) | [PDF](<https://openreview.net/pdf?id=Hq0yW7Gvva>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139572>)

Large language models \(LLMs\) and multi\-agent systems \(MAS\) have shown promise in financial decision\-making, yet existing evaluations focus on equity trading and primarily assess directional prediction, overlooking the structural complexity of derivative markets\.  Option trading introduces fundamentally different challenges, including nonlinear payoffs and multi\-leg strategy construction, requiring structured decisions rather than simple directional bets\. We introduce LiveOption, an evaluation framework for LLM\-based and reinforcement learning agents in option trading\. LiveOption formulates the problem as structured sequential decision\-making under realistic execution and capital constraints, and provides a reproducible environment with standardized interaction protocols\. The framework includes several task suites covering portfolio overlays, open\-ended strategy construction, event\-driven earnings trading, and 0DTE intraday trading\. We further propose a hierarchical metric suite that evaluates action validity, decision quality, risk characteristics, and outcome\-level performance\. Experiments show that current agents often fail to construct valid strategies and handle nonlinear payoff dynamics, or achieve competitive returns in most scenarios\. LiveOption offers a principled testbed for evaluating structured decision\-making beyond outcome\-based metrics\.

## Beyond Raw Observations: Distilling and Storing Invariant Driving Memories for Generalizable Autonomous Driving

**Authors:** Xue Zhao; Cewu Lu; Xinbing Wang; Nanyang Ye

**ID:** 152198 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Uq77mTjfhS>) | [PDF](<https://openreview.net/pdf?id=Uq77mTjfhS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152198>)

Modern end\-to\-end autonomous driving systems often suffer from fragile out\-of\-distribution \(OOD\) generalization and limited decision transparency, largely due to their reliance on raw sensory observations and susceptibility to spurious visual correlations\. Although memory\-augmented approaches have been explored to improve generalization, existing methods typically store raw observations, symbolic rules, or entangled latent features, making retrieval sensitive to surface\-level similarity rather than decision\-relevant driving structure\. To address this limitation, we propose DriveMem, a plug\-and\-play framework that moves beyond raw observations by distilling and storing invariant driving memories for generalizable driving systems\. DriveMem integrates two core components: Invariant Feature Abstraction that first distills perturbation\-stable, decision\-relevant representations from visual tokens, and Prototype Memory Bank that then stores and retrieves prototypical driving experiences grounded in invariant representations\. Extensive open\-loop and closed\-loop experiments demonstrate that DriveMem improves OOD generalization and safety\-related planning metrics across diverse unseen scenarios\. Notably, under severe sensor disruptions, DriveMem achieves up to a 39\.5\\% relative reduction in Collision Rate compared with a strong domain\-generalization baseline\. These results suggest that building prototype memory in an invariant representation space is a promising approach for improving robustness, while offering prototype\-grounded traceability for model behavior\.

## CURE: Coupled User\-Grouped Reinforcement Learning for Cross\-Domain Recommendation with Non\-Overlapping Users

**Authors:** Hyeongjun Yun; Taesan Kim; Dongjoon Hong; Junui Hong; Jihoon Oh; Kijung Park; MinCheol Cho; Kihyuk Song; Jaegul Choo; Chung Park

**ID:** 151750 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YNBa2nmHd0>) | [PDF](<https://openreview.net/pdf?id=YNBa2nmHd0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151750>)

Cross\-Domain Recommendation is essential for enabling cross\-sell in multi\-service platforms; however, limited user overlap and strict cross\-service data\-sharing constraints often result in little to no ground\-truth supervision for cross\-domain learning\. To bridge this gap, we propose an LLM\-based framework for cross\-domain recommendation in the non\-overlapping user scenario\. First, we propose an agentic pipeline that constructs cross\-domain pseudo supervision, which is unavailable in the non\-overlapping user scenario, by leveraging a user’s source\-domain history to generate a target\-domain item recommendation\.  Using this dataset, we further propose \\underline\{C\}oupled \\underline\{U\}ser\-G\\underline\{R\}ouped R\\underline\{E\}inforcement Learning \(CURE\), which induces coupling between in\- and cross\-domain gradient updates via user\-level joint normalization, thereby calibrating synthetic cross\-domain updates against reliable in\-domain signals\. We provide a theoretical analysis showing that user\-level coupling stabilizes policy updates under imperfect pseudo supervision and improves cross\-domain generalization\. Experiments on Amazon Reviews and MovieLens show consistent gains over baselines in cross\-domain recommendation, while also improving in\-domain performance\. An online A/B test demonstrates a statistically significant 56\\% lift in click\-through rate over existing ML methods\.

## UniRank: Unified List\-wise Reranking via Confidence\-Ordered Denoising

**Authors:** Pengyue Jia; HailanYang; Shuchang Liu; Xiaobei Wang; Wanyu Wang; Xiang Li; Yongqi Liu; Kaiqiao Zhan; Kun Gai; Xiangyu Zhao

**ID:** 152871 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PkjxTBCYCU>) | [PDF](<https://openreview.net/pdf?id=PkjxTBCYCU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152871>)

List\-wise reranking arranges a request\-specific pool of candidate items into an ordered slate that maximizes user satisfaction\. Existing generative rerankers fall into two paradigms: Autoregressive \(AR\) rerankers construct the slate left to right and capture inter\-item dependencies in the exposure list, but they suffer from error propagation because early mistakes affect subsequent slots\. Non\-autoregressive \(NAR\) rerankers predict all slots in parallel and avoid error propagation, but they weaken inter\-item interaction modeling under a slot independence assumption\. This raises a central question: is there a unified architecture that combines the strengths of both paradigms and delivers stronger reranking performance? We answer this question with UniRank, a unified list\-wise reranking framework whose inference time variants recover AR and NAR rerankers as special cases\. UniRank integrates bidirectional slate modeling into an iterative denoising process and fills the most confident slot at each step\. To instantiate this framework for reranking, we introduce the Task Grounded Diffusion Interface \(TGD\), which performs denoising at the item level and restricts prediction to the request\-specific candidate pool\. TGD aggregates each item's semantic tokens into a single item embedding and scores each slot directly against the candidate pool\. Experiments on Amazon Books, MovieLens\-1M, and an industrial short video dataset show that UniRank consistently outperforms state\-of\-the\-art baselines\. Our code is available online\.

## HSCO\-Bench: An Agent\-Driven End\-to\-End Hardware\-Software Co\-design Benchmark for Systems\-on\-Chip

**Authors:** Pei\-Huan Tsai; Kuan\-Lin Chiu; William Baisi; Pin\-Yu Chen; Luca P Carloni

**ID:** 139247 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cPhwxK5hja>) | [PDF](<https://openreview.net/pdf?id=cPhwxK5hja>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139247>)

Large language models \(LLMs\) are increasingly adopted for software and hardware design, yet these domains are still evaluated separately\. Software benchmarks typically assume fixed hardware targets, while hardware benchmarks focus on component\-level optimization without considering the full hardware\-software stack\. Consequently, no existing benchmark evaluates whether an LLM agent can perform end\-to\-end, system\-level hardware\-software co\-design\. Such a process requires: 1\) analyzing applications to identify kernels requiring acceleration, 2\) designing and \\emph\{integrating\} heterogeneous accelerators into a System\-on\-Chip \(SoC\) under resource constraints, and 3\) mapping kernels onto the generated accelerators\. We present \\hsco\{\}, an end\-to\-end hardware\-software co\-design benchmark for accelerator\-rich heterogeneous SoC generation\. Built upon an open\-source SoC platform with a curated repository structure, HSCO\-Bench evaluates the ability of LLMs to jointly optimize software and hardware stacks, producing SoC prototypes deployed on the AMD Virtex\-7 FPGA VC707 Evaluation Kit\. Experimental results show that end\-to\-end integration remains challenging for current models, with widespread failures\. Among the five frontier models evaluated, only two of them could successfully generate valid SoC prototypes\. Yet, even in these successful instances, the generated designs are far from optimal\. While we observe a promising peak speedup of 16\.22x, the maximum additional resource utilization reaches only 23\.67%\. This highlights that while state\-of\-the\-art models demonstrate an emerging capability for hardware acceleration, they still heavily underutilize the available hardware capacity, leaving substantial room for future optimization\. To the best of our knowledge, HSCO\-Bench is the first benchmark targeting this complete co\-design flow, enabling LLMs to jointly reason about and modify both the software and hardware stacks of heterogeneous SoCs\.

## End\-to\-End Neural Modeling of EM Response and Design Performance for Free\-Form RFIC Passives

**Authors:** Yuhao Mao; Chenhao Chu; Martin Vechev; Hua Wang

**ID:** 155932 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1jB1kt5Wfx>) | [PDF](<https://openreview.net/pdf?id=1jB1kt5Wfx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155932>)

Passive matching networks are critical components in radio\-frequency integrated circuits \(RFICs\), but their design is bottlenecked by expensive finite\-difference\-based electromagnetic \(EM\) simulation\. We propose an end\-to\-end neural framework for free\-form RFIC passives that predicts both EM response and downstream design performance under varying frequency and circuit contexts, combining a frequency\-conditioned neural simulator with a circuit\-conditioned neural solver\. To improve design performance prediction, the simulator outputs a neural EM response consisting of both the explicit EM response and a complementary response, together with a dependence regularizer that encourages the two responses to capture orthogonal information\. To evaluate the proposed framework, we construct a large\-scale dataset of free\-form passive layouts, synthesized from both expert\-designed contours and random paths\. Our 21M\-parameter model achieves high accuracy across a broad frequency range, circuit contexts and passive matching settings, with $R^2&gt;0\.98$ for almost all targets, while providing orders\-of\-magnitude faster evaluation than traditional EM simulation\.

## Language\-Based Agent Control

**Authors:** Timothy Zhou; Loris D&amp;amp;\#x27;Antoni; Nadia Polikarpova

**ID:** 156018\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156018

[Paper](<https://openreview.net/forum?id=16tteJWMPL>) | [PDF](<https://openreview.net/pdf?id=16tteJWMPL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156018>)

This paper introduces language\-based agent control \(LBAC\), a method to apply techniques from language\-based security to the control of AI agents\. Unlike systems\-level defenses such as I/O sandboxing, LBAC can express application\-level policies\. Moreover, in LBAC agents may perform computations and recursively invoke subagents with tool access\.  Language\-based techniques enable the design of APIs which, through a combination of typing discipline and internal runtime checks, ensure that any well\-typed program obeys a desired property\. The core idea of LBAC is to have agents interact with the world by generating programs against such APIs rather than by issuing tool calls directly\. These programs may themselves contain recursive calls to subagents, which retain full tool access; the type checker rejects ill\-typed programs before execution, and policies thereby extend uniformly across the entire agentic system, including its scaffolding and control flow\. We demonstrate LBAC with three case studies: I/O sandboxing via filesystem capabilities, data provenance, and information\-flow control\.

## OmniTraffic: A Controllable Generation Pipeline and Benchmark for Spatio\-Temporal Traffic Reasoning

**Authors:** Maonan Wang; Zhengyan Huang; Kemou Jiang; Yuhang Fu; Jiayue Zhu; Yuxin Cai; Xingchen Zou; Qiaosheng Zhang; Yi Yu; Ding Wang; XI CHEN; Ben Chen; Yuxuan Liang; Zhiyong Cui; Man On Pun; Yirong Chen

**ID:** 139772 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5fv0JAYAwL>) | [PDF](<https://openreview.net/pdf?id=5fv0JAYAwL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139772>)

Traffic scene understanding requires models to reason beyond object recognition, including lane topology, multi\-view geometry, temporal evolution, and signal\-phase semantics\. However, existing traffic\-oriented multimodal benchmarks largely emphasize passive visual recognition or isolated video understanding, offering limited support for evaluating structure\-aware traffic reasoning under controlled conditions\. We introduce \\textbf\{OmniTraffic\}, a controllable generation pipeline and benchmark for spatio\-temporal traffic reasoning\. Built around 12 real\-world intersections reconstructed into editable 3D traffic environments and complemented by surveillance footage from two countries, OmniTraffic supports both controlled and natural\-condition evaluation\. It defines a three\-level task hierarchy spanning scene perception, multi\-view and temporal reasoning, and decision support\. Using structured traffic metadata, OmniTraffic generates synchronized multi\-view VQA samples covering vehicle states, lane functions, view\-\-BEV correspondence, temporal dynamics, and signal\-phase analysis, resulting in 8M VQA samples and a 3K human\-verified test set\. Evaluation of eleven frontier MLLMs reveals a large human\-\-model gap, with the most pronounced failures in topology\-grounded and spatio\-temporal reasoning tasks\. Fine\-tuning a lightweight MLLM on simulated OmniTraffic data further improves performance on real\-world traffic scenes, demonstrating the value of simulation\-generated supervision for traffic\-specific multimodal reasoning\. Beyond a fixed dataset, OmniTraffic provides an extensible pipeline with configurable intersections, camera views, traffic demands, signal phases, visual conditions, and rare events\.

## UniRank: Unified List\-wise Reranking via Confidence\-Ordered Denoising

**Authors:** Pengyue Jia; HailanYang; Shuchang Liu; Xiaobei Wang; Wanyu Wang; Xiang Li; Yongqi Liu; Kaiqiao Zhan; Kun Gai; Xiangyu Zhao

**ID:** 152871\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152871

[Paper](<https://openreview.net/forum?id=PkjxTBCYCU>) | [PDF](<https://openreview.net/pdf?id=PkjxTBCYCU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152871>)

List\-wise reranking arranges a request\-specific pool of candidate items into an ordered slate that maximizes user satisfaction\. Existing generative rerankers fall into two paradigms: Autoregressive \(AR\) rerankers construct the slate left to right and capture inter\-item dependencies in the exposure list, but they suffer from error propagation because early mistakes affect subsequent slots\. Non\-autoregressive \(NAR\) rerankers predict all slots in parallel and avoid error propagation, but they weaken inter\-item interaction modeling under a slot independence assumption\. This raises a central question: is there a unified architecture that combines the strengths of both paradigms and delivers stronger reranking performance? We answer this question with UniRank, a unified list\-wise reranking framework whose inference time variants recover AR and NAR rerankers as special cases\. UniRank integrates bidirectional slate modeling into an iterative denoising process and fills the most confident slot at each step\. To instantiate this framework for reranking, we introduce the Task Grounded Diffusion Interface \(TGD\), which performs denoising at the item level and restricts prediction to the request\-specific candidate pool\. TGD aggregates each item's semantic tokens into a single item embedding and scores each slot directly against the candidate pool\. Experiments on Amazon Books, MovieLens\-1M, and an industrial short video dataset show that UniRank consistently outperforms state\-of\-the\-art baselines\. Our code is available online\.

## SiliciclasticReservoirs: A Million\-Reservoir Dataset and Flow\-Matching Foundation Model for 3D Siliciclastic Reservoir Generation

**Authors:** Ilgar Baghishov; Elnara Rustamzade; Graeme Henkelman; John Foster; Michael J Pyrcz

**ID:** 139173 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gWNElQCrUU>) | [PDF](<https://openreview.net/pdf?id=gWNElQCrUU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139173>)

3D subsurface geological models underpin hydrocarbon exploration, geothermal energy, underground gas storage, and geological carbon storage\. A decade of deep generative facies modeling has yet to yield a model that generalizes across geological settings, scales to realistic reservoir extents, and conditions naturally on well data, bottlenecked by the absence of a large\-scale, multi\-environment, property\-rich dataset\. We release SiliciclasticReservoirs, the largest and most diverse public 3D dataset of siliciclastic \(sandstone\-bearing\) subsurface reservoirs to date: $10^6$ voxelized reservoirs at $64\{\\times\}64\{\\times\}32$ resolution spanning eight depositional settings \(deep\-water turbidite lobes, deltas, and six fluvial channel architectures from the Alluvsim family\), each annotated with binary and six\-class facies labels, per\-voxel porosity and permeability, and a natural\-language caption describing the reservoir's geological setting and petrophysical attributes\. To our knowledge, it is the first siliciclastic dataset to pair 3D geological models with petrophysical properties at this scale, the first to span this breadth of settings in a unified release, and the first to ship text captions, supporting future multimodal and language\-conditioned training for text\-to\-reservoir generation and retrieval\. Building on SiliciclasticReservoirs, we train ResFlow, a flow\-matching foundation model that, from a single set of weights, generates any environment under continuous parametric control, conditions on arbitrary well configurations via classifier\-free guidance, and assembles reservoirs at arbitrary spatial extent through overlapping\-tile MultiDiffusion, with no retraining\. SiliciclasticReservoirs \(CC\-BY 4\.0\), ResFlow \(MIT\), and the data\-generation engine ResMill \(MIT\) are publicly released\.

## FaithSieve: Fine\-Grained Evaluation of Math Proofs with Faithful Formal Evidence

**Authors:** Ziyu Wang; Qiming Dai; Yishan Wu; Zaiwen Wen

**ID:** 149124 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=si7lviFpgb>) | [PDF](<https://openreview.net/pdf?id=si7lviFpgb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149124>)

_Abstract unavailable from the accessible public sources._

## OmniTraffic: A Controllable Generation Pipeline and Benchmark for Spatio\-Temporal Traffic Reasoning

**Authors:** Maonan Wang; Zhengyan Huang; Kemou Jiang; Yuhang Fu; Jiayue Zhu; Yuxin Cai; Xingchen Zou; Qiaosheng Zhang; Yi Yu; Ding Wang; XI CHEN; Ben Chen; Yuxuan Liang; Zhiyong Cui; Man On Pun; Yirong Chen

**ID:** 139772\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139772

[Paper](<https://openreview.net/forum?id=5fv0JAYAwL>) | [PDF](<https://openreview.net/pdf?id=5fv0JAYAwL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139772>)

Traffic scene understanding requires models to reason beyond object recognition, including lane topology, multi\-view geometry, temporal evolution, and signal\-phase semantics\. However, existing traffic\-oriented multimodal benchmarks largely emphasize passive visual recognition or isolated video understanding, offering limited support for evaluating structure\-aware traffic reasoning under controlled conditions\. We introduce \\textbf\{OmniTraffic\}, a controllable generation pipeline and benchmark for spatio\-temporal traffic reasoning\. Built around 12 real\-world intersections reconstructed into editable 3D traffic environments and complemented by surveillance footage from two countries, OmniTraffic supports both controlled and natural\-condition evaluation\. It defines a three\-level task hierarchy spanning scene perception, multi\-view and temporal reasoning, and decision support\. Using structured traffic metadata, OmniTraffic generates synchronized multi\-view VQA samples covering vehicle states, lane functions, view\-\-BEV correspondence, temporal dynamics, and signal\-phase analysis, resulting in 8M VQA samples and a 3K human\-verified test set\. Evaluation of eleven frontier MLLMs reveals a large human\-\-model gap, with the most pronounced failures in topology\-grounded and spatio\-temporal reasoning tasks\. Fine\-tuning a lightweight MLLM on simulated OmniTraffic data further improves performance on real\-world traffic scenes, demonstrating the value of simulation\-generated supervision for traffic\-specific multimodal reasoning\. Beyond a fixed dataset, OmniTraffic provides an extensible pipeline with configurable intersections, camera views, traffic demands, signal phases, visual conditions, and rare events\.

## LogicTree\-RAG: Logic Tree\-guided Retrieval\-Augmented Generation for Long\-form Patent Drafting

**Authors:** Jiaqi Zhu; Naili Xing; Pan Hexiang; Haotian Gao; Jianwei Yin; Xiaokui Xiao; Beng Chin Ooi

**ID:** 153327 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M9Gxp6XTlc>) | [PDF](<https://openreview.net/pdf?id=M9Gxp6XTlc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153327>)

Long\-form technical text generation underpins knowledge\-intensive workflows, yet remains challenging for large language models \(LLMs\) due to the need for globally consistent logical structuring and faithful technical reasoning beyond local coherence\. Patent drafting is a canonical instance of this challenge, demanding holistic generation of a legally compliant and technically exhaustive document through sustained multi\-expert collaboration\. Existing approaches often focus on partial section generation or rely on manually crafted outlines, limiting scalable automation in realistic settings\. In this work, we propose LogicTree\-RAG, a logic tree\-guided retrieval\-augmented generation framework that induces a hierarchical logic tree as a global organizational backbone to organize and ground technical disclosures, without relying on expert\-defined drafting priors\. Each node in the logic tree represents a technical element and is constructed through evidence\-guided recursive generation\. A hybrid traversal mechanism then maps the logic tree into patent sections, enabling controllable and section\-balanced generation\. Extensive experiments show that LogicTree\-RAG consistently improves content quality and language conformity over strong LLM\-based baselines and achieves longer structured generation with high token efficiency, demonstrating the effectiveness of logic\-centric generation for complex technical document drafting\.

## AgentTailor: Dual\-Gate LLM\-Assisted Re\-ranking for Personalized Long\-Tail Recommendation

**Authors:** Jinpeng Chen; Zhenye Yang; Huan Li; Kaimin Wei; Senzhang Wang; Hongbo Gao

**ID:** 154386 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DyNI87FtpG>) | [PDF](<https://openreview.net/pdf?id=DyNI87FtpG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154386>)

_Abstract unavailable from the accessible public sources._

## Can Complementary Signals Bridge Similarity Islands?  Manifold\-Augmented Graph Embedding for Multimodal Recommendation

**Authors:** Zhenye Yang; Jinpeng Chen; Wenbo Fu; Jun Ma; Huan Li; Qimin Zhou; Tao Wang; Li Sun; Senzhang Wang

**ID:** 155124 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8F0Eozje37>) | [PDF](<https://openreview.net/pdf?id=8F0Eozje37>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155124>)

_Abstract unavailable from the accessible public sources._

## UniRank: Unified List\-wise Reranking via Confidence\-Ordered Denoising

**Authors:** Pengyue Jia; HailanYang; Shuchang Liu; Xiaobei Wang; Wanyu Wang; Xiang Li; Yongqi Liu; Kaiqiao Zhan; Kun Gai; Xiangyu Zhao

**ID:** 152871\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152871

[Paper](<https://openreview.net/forum?id=PkjxTBCYCU>) | [PDF](<https://openreview.net/pdf?id=PkjxTBCYCU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152871>)

List\-wise reranking arranges a request\-specific pool of candidate items into an ordered slate that maximizes user satisfaction\. Existing generative rerankers fall into two paradigms: Autoregressive \(AR\) rerankers construct the slate left to right and capture inter\-item dependencies in the exposure list, but they suffer from error propagation because early mistakes affect subsequent slots\. Non\-autoregressive \(NAR\) rerankers predict all slots in parallel and avoid error propagation, but they weaken inter\-item interaction modeling under a slot independence assumption\. This raises a central question: is there a unified architecture that combines the strengths of both paradigms and delivers stronger reranking performance? We answer this question with UniRank, a unified list\-wise reranking framework whose inference time variants recover AR and NAR rerankers as special cases\. UniRank integrates bidirectional slate modeling into an iterative denoising process and fills the most confident slot at each step\. To instantiate this framework for reranking, we introduce the Task Grounded Diffusion Interface \(TGD\), which performs denoising at the item level and restricts prediction to the request\-specific candidate pool\. TGD aggregates each item's semantic tokens into a single item embedding and scores each slot directly against the candidate pool\. Experiments on Amazon Books, MovieLens\-1M, and an industrial short video dataset show that UniRank consistently outperforms state\-of\-the\-art baselines\. Our code is available online\.

## SiliciclasticReservoirs: A Million\-Reservoir Dataset and Flow\-Matching Foundation Model for 3D Siliciclastic Reservoir Generation

**Authors:** Ilgar Baghishov; Elnara Rustamzade; Graeme Henkelman; John Foster; Michael J Pyrcz

**ID:** 139173\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139173

[Paper](<https://openreview.net/forum?id=gWNElQCrUU>) | [PDF](<https://openreview.net/pdf?id=gWNElQCrUU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139173>)

3D subsurface geological models underpin hydrocarbon exploration, geothermal energy, underground gas storage, and geological carbon storage\. A decade of deep generative facies modeling has yet to yield a model that generalizes across geological settings, scales to realistic reservoir extents, and conditions naturally on well data, bottlenecked by the absence of a large\-scale, multi\-environment, property\-rich dataset\. We release SiliciclasticReservoirs, the largest and most diverse public 3D dataset of siliciclastic \(sandstone\-bearing\) subsurface reservoirs to date: $10^6$ voxelized reservoirs at $64\{\\times\}64\{\\times\}32$ resolution spanning eight depositional settings \(deep\-water turbidite lobes, deltas, and six fluvial channel architectures from the Alluvsim family\), each annotated with binary and six\-class facies labels, per\-voxel porosity and permeability, and a natural\-language caption describing the reservoir's geological setting and petrophysical attributes\. To our knowledge, it is the first siliciclastic dataset to pair 3D geological models with petrophysical properties at this scale, the first to span this breadth of settings in a unified release, and the first to ship text captions, supporting future multimodal and language\-conditioned training for text\-to\-reservoir generation and retrieval\. Building on SiliciclasticReservoirs, we train ResFlow, a flow\-matching foundation model that, from a single set of weights, generates any environment under continuous parametric control, conditions on arbitrary well configurations via classifier\-free guidance, and assembles reservoirs at arbitrary spatial extent through overlapping\-tile MultiDiffusion, with no retraining\. SiliciclasticReservoirs \(CC\-BY 4\.0\), ResFlow \(MIT\), and the data\-generation engine ResMill \(MIT\) are publicly released\.

## End\-to\-End Neural Modeling of EM Response and Design Performance for Free\-Form RFIC Passives

**Authors:** Yuhao Mao; Chenhao Chu; Martin Vechev; Hua Wang

**ID:** 155932\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155932

[Paper](<https://openreview.net/forum?id=1jB1kt5Wfx>) | [PDF](<https://openreview.net/pdf?id=1jB1kt5Wfx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155932>)

Passive matching networks are critical components in radio\-frequency integrated circuits \(RFICs\), but their design is bottlenecked by expensive finite\-difference\-based electromagnetic \(EM\) simulation\. We propose an end\-to\-end neural framework for free\-form RFIC passives that predicts both EM response and downstream design performance under varying frequency and circuit contexts, combining a frequency\-conditioned neural simulator with a circuit\-conditioned neural solver\. To improve design performance prediction, the simulator outputs a neural EM response consisting of both the explicit EM response and a complementary response, together with a dependence regularizer that encourages the two responses to capture orthogonal information\. To evaluate the proposed framework, we construct a large\-scale dataset of free\-form passive layouts, synthesized from both expert\-designed contours and random paths\. Our 21M\-parameter model achieves high accuracy across a broad frequency range, circuit contexts and passive matching settings, with $R^2&gt;0\.98$ for almost all targets, while providing orders\-of\-magnitude faster evaluation than traditional EM simulation\.

## Modelling Opinion Dynamics at Scale with Deep MARL

**Authors:** Lukas Seier; Brandon Kaplowitz; Sebastian Towers; Richard M Bailey; Jakob Foerster

**ID:** 152381 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TWF54YaFwi>) | [PDF](<https://openreview.net/pdf?id=TWF54YaFwi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152381>)

Modelling opinion dynamics typically relies on hand\-crafted local interaction rules to study emergent macroscopic phenomena such as consensus and polarisation\. In contrast, multi\-agent reinforcement learning \(MARL\) enables agents to learn such behaviours directly by optimising simple rewards\. To explore the potential of MARL for opinion dynamics, we introduce a GPU\-accelerated \*consensus and truth\-finding game\* that scales to populations of up to 1000 agents, comparable to many real\-world social sub\-networks\. To prevent unrealistic conventions, we extend other\-play to general\-sum social interactions\. We next validate our model on a subset of the Bluesky network by recovering agent importance structures from graph topology alone via a learned attention layer, finding that \*highly conforming\* populations most closely match human data\. In large social media networks such high levels of conforming significantly reduce collective accuracy and promote dishonest agents that lie to fit in\. By contrast, small, dynamic hunter\-gatherer networks are less affected; here, conformity can even improve collective agreement\. This suggests a mismatch between evolved human conformity heuristics and modern social media environments as a potential contributor to misinformation\.

## LiveOption: Evaluating LLM Agents in Structured Option Trading with Nonlinear Payoffs

**Authors:** Haochen Luo; YIFAN LI; An B Minh; Xiaolong Luo; Zhengzhao Lai; Yuan Zhang; Chen Liu

**ID:** 139572\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139572

[Paper](<https://openreview.net/forum?id=Hq0yW7Gvva>) | [PDF](<https://openreview.net/pdf?id=Hq0yW7Gvva>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139572>)

Large language models \(LLMs\) and multi\-agent systems \(MAS\) have shown promise in financial decision\-making, yet existing evaluations focus on equity trading and primarily assess directional prediction, overlooking the structural complexity of derivative markets\.  Option trading introduces fundamentally different challenges, including nonlinear payoffs and multi\-leg strategy construction, requiring structured decisions rather than simple directional bets\. We introduce LiveOption, an evaluation framework for LLM\-based and reinforcement learning agents in option trading\. LiveOption formulates the problem as structured sequential decision\-making under realistic execution and capital constraints, and provides a reproducible environment with standardized interaction protocols\. The framework includes several task suites covering portfolio overlays, open\-ended strategy construction, event\-driven earnings trading, and 0DTE intraday trading\. We further propose a hierarchical metric suite that evaluates action validity, decision quality, risk characteristics, and outcome\-level performance\. Experiments show that current agents often fail to construct valid strategies and handle nonlinear payoff dynamics, or achieve competitive returns in most scenarios\. LiveOption offers a principled testbed for evaluating structured decision\-making beyond outcome\-based metrics\.

## Beyond Raw Observations: Distilling and Storing Invariant Driving Memories for Generalizable Autonomous Driving

**Authors:** Xue Zhao; Cewu Lu; Xinbing Wang; Nanyang Ye

**ID:** 152198\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152198

[Paper](<https://openreview.net/forum?id=Uq77mTjfhS>) | [PDF](<https://openreview.net/pdf?id=Uq77mTjfhS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152198>)

Modern end\-to\-end autonomous driving systems often suffer from fragile out\-of\-distribution \(OOD\) generalization and limited decision transparency, largely due to their reliance on raw sensory observations and susceptibility to spurious visual correlations\. Although memory\-augmented approaches have been explored to improve generalization, existing methods typically store raw observations, symbolic rules, or entangled latent features, making retrieval sensitive to surface\-level similarity rather than decision\-relevant driving structure\. To address this limitation, we propose DriveMem, a plug\-and\-play framework that moves beyond raw observations by distilling and storing invariant driving memories for generalizable driving systems\. DriveMem integrates two core components: Invariant Feature Abstraction that first distills perturbation\-stable, decision\-relevant representations from visual tokens, and Prototype Memory Bank that then stores and retrieves prototypical driving experiences grounded in invariant representations\. Extensive open\-loop and closed\-loop experiments demonstrate that DriveMem improves OOD generalization and safety\-related planning metrics across diverse unseen scenarios\. Notably, under severe sensor disruptions, DriveMem achieves up to a 39\.5\\% relative reduction in Collision Rate compared with a strong domain\-generalization baseline\. These results suggest that building prototype memory in an invariant representation space is a promising approach for improving robustness, while offering prototype\-grounded traceability for model behavior\.

## CURE: Coupled User\-Grouped Reinforcement Learning for Cross\-Domain Recommendation with Non\-Overlapping Users

**Authors:** Hyeongjun Yun; Taesan Kim; Dongjoon Hong; Junui Hong; Jihoon Oh; Kijung Park; MinCheol Cho; Kihyuk Song; Jaegul Choo; Chung Park

**ID:** 151750\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151750

[Paper](<https://openreview.net/forum?id=YNBa2nmHd0>) | [PDF](<https://openreview.net/pdf?id=YNBa2nmHd0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151750>)

Cross\-Domain Recommendation is essential for enabling cross\-sell in multi\-service platforms; however, limited user overlap and strict cross\-service data\-sharing constraints often result in little to no ground\-truth supervision for cross\-domain learning\. To bridge this gap, we propose an LLM\-based framework for cross\-domain recommendation in the non\-overlapping user scenario\. First, we propose an agentic pipeline that constructs cross\-domain pseudo supervision, which is unavailable in the non\-overlapping user scenario, by leveraging a user’s source\-domain history to generate a target\-domain item recommendation\.  Using this dataset, we further propose \\underline\{C\}oupled \\underline\{U\}ser\-G\\underline\{R\}ouped R\\underline\{E\}inforcement Learning \(CURE\), which induces coupling between in\- and cross\-domain gradient updates via user\-level joint normalization, thereby calibrating synthetic cross\-domain updates against reliable in\-domain signals\. We provide a theoretical analysis showing that user\-level coupling stabilizes policy updates under imperfect pseudo supervision and improves cross\-domain generalization\. Experiments on Amazon Reviews and MovieLens show consistent gains over baselines in cross\-domain recommendation, while also improving in\-domain performance\. An online A/B test demonstrates a statistically significant 56\\% lift in click\-through rate over existing ML methods\.

