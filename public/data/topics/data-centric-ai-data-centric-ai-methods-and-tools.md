# Data\-centric AI / Data\-centric AI methods and tools

以数据为中心的人工智能 / 数据方法与工具

105 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Smart Picks in the Dark: Towards Efficient RLVR for Reasoning via Tracing Metacognitive Pivots

**Authors:** Guangcheng Zhu; Shenzhi Yang; Haobo Wang; Xing Zheng; Yingfan Ma; Xuening Feng; Zhongqi Chen; Bowen Song; Weiqiang Wang; Gang Chen

**ID:** 150817 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=f6NxXBLsMW>) | [PDF](<https://openreview.net/pdf?id=f6NxXBLsMW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150817>)

Reinforcement learning with verifiable rewards \(RLVR\) has greatly advanced large reasoning models \(LRMs\), but it requires timely training on a huge fully\-annotated dataset\.  To this end, data\-efficient RLVR methods have been widely studied from two perspectives:  \(i\) data selection methods identify a small subset of "golden" samples that yield near\-full\-data performance, but they rely on a pre\-existing pool of labeled data\. \(ii\) unsupervised RLVR methods train the model using its own internal supervision signals on large\-scale unlabeled data, yet they exhibit suboptimal performance\.  Accordingly, we investigate the "\*pick in the dark\*" setup for RLVR, which aims to select, without prior supervision, unlabeled samples that are most beneficial for training and worthy of annotation\.  Through systematic analysis, we demonstrate that smart picks hinge on a well\-calibrated uncertainty estimator to enable strategic partitioning of data for adaptive training regimes\. Building on this insight, we propose \*\*PivotTrace\*\*, a three\-way data triage framework that leverages attention dynamics to trace \*metacognitive pivots\* during reasoning\. By precisely quantifying uncertainty through pivot density, PivotTrace achieves automated data routing to synergistically maximize both annotation and training efficiency\. Empirically, PivotTrace surpasses the fully supervised LRM with only \*\*29\.3%\*\* annotated samples and \*\*2\.75\*\*$\\times$ faster convergence\.

## SODA: Selective Optimization with Deferred BN Alignment for Efficient Dataset Distillation

**Authors:** Xinyue Bi; Jiacheng Cui; Yaxin Luo; Xinyi Shang; Jiacheng Liu; Xiaohan Zhao; Zhiqiang Shen

**ID:** 150571 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hAi08GriqP>) | [PDF](<https://openreview.net/pdf?id=hAi08GriqP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150571>)

Recent AI research has increasingly evolved along two complementary directions: model\-centric learning, which improves architectures and training algorithms, and data\-centric learning, which improves the quality and compression of training data\. Within data\-centric learning, dataset distillation on large\-scale datasets has attracted growing attention, with decoupled distillation methods like SRe$^2$L, G\-VBSM, LPQLD, FADRM have emerged as a representative paradigm\. These methods typically synthesize compact datasets by matching the Batch Norm statistics of a teacher network, using BN alignment as an effective training objective\. However, modern networks often contain many BN layers, and enforcing alignment at every layer introduces substantial computational redundancy\. More importantly, we observe that not all BN layers provide equally informative supervision or consistent performance gains\. Motivated by this, we propose SODA, a novel Selective Optimization with Deferred BN Alignment framework for efficient dataset distillation\. SODA selectively identifies and optimizes informative BN alignment objectives while deferring unnecessary or low\-value alignment computations, substantially improving both distillation efficiency and synthetic data quality\. We further provide a theoretical analysis explaining why selective and deferred BN alignment can simultaneously reduce optimization cost and improve generalization\. Extensive experiments across multiple datasets of CIFAR\-100, Tiny\-ImageNet, ImageNet\-1K and its subsets thereof demonstrate that SODA achieves state\-of\-the\-art performance while offering significantly improved computational efficiency over existing BN\-matching\-based dataset distillation methods, surpassing FADRM\+ by \+1\.6\\% on ImageNet\-1K IPC=10 under ResNet\-18 while delivering a $1\.54\\times$ speedup\.

## Learning with Synthetic Data via SGD in High\-Dimensional Linear Regression

**Authors:** Jichu Li; Difan Zou

**ID:** 148876 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uVuGJB4dev>) | [PDF](<https://openreview.net/pdf?id=uVuGJB4dev>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148876>)

Synthetic data has become a promising way to scale model training beyond limited human\-generated data but it may also induce strong model collapse \(Dohmatob et al\., 2024\), where any fixed fraction of synthetic data prevents model performance from improving under data scaling, leaving a non\-vanishing excess risk floor\. In this paper, we studied how synthetic data affects the generalization of one\-pass SGD in high\-dimensional linear regression with model shift\. We show that mixed training induces strong model collapse while two\-stage training avoids this by using synthetic data only in the first stage, followed by real\-data training in the second stage, showing that strong model collapse is not inevitable through a simple data curriculum\. We further establish scaling\-law upper bounds for both protocols under a random sketch model, showing that larger models amplify synthetic\-induced degradation in mixed training and giving an explicit characterization of how high\-quality synthetic training may reduce bias in two\-stage training\. Overall, our results highlight that synthetic data is neither inherently harmful nor beneficial; its effect depends critically on both its quality and the training protocol used to incorporate it\.

## VeriVul: A Verification\-Guided Framework for Generating Realistic Vulnerability Benchmarks

**Authors:** Ahmed Lekssays; Hamza Mouhcine; Issa Khalil

**ID:** 138888 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yh54EzKLbH>) | [PDF](<https://openreview.net/pdf?id=yh54EzKLbH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138888>)

Evaluating machine\-learning\-based vulnerability detectors requires datasets that pair accurate labels with realistic code\. Existing benchmarks satisfy at most one\. Real\-world collections rely on noisy commit\-based labels because manual curation by security experts does not scale, while verified synthetic collections generate code from scratch that is too simple to resemble production software\. The rapid advance of code LLMs adds a third pressure, since their training corpora absorb public CVE data and most widely cited vulnerability benchmarks, leaving static evaluations of such models prone to measuring memorisation rather than analysis\. As model knowledge cutoffs continue to move forward, any fixed dataset risks becoming part of the next generation's training set\.   We present VeriVul, a framework that produces formally verified vulnerability data on demand\. Given a CVE\-fixing commit, it applies a vulnerability\-aware backward program slicer to isolate the fragment relevant to the vulnerability, prompts a code LLM to expand the fragment into a self\-contained program, and certifies the resulting program with the ESBMC bounded model checker, recording the verified label together with the trace that triggers the violation\. Each verified program is paired with an ESBMC\-verified counterpart that flips the label\. We characterise the synthesised programs along vulnerability\-relevant structural dimensions \(e\.g\., control\-flow density, pointer and array operations, struct\-field access, and identifier diversity\) and show that VeriVul dataset samples lie distributionally closer to real\-world vulnerable code than the prior verified synthetic baseline, while remaining sufficiently complex to challenge state\-of\-the\-art LLM\-based detectors\. In a prompted evaluation, Claude Opus 4\.7 reaches only 52\.6 percent accuracy on VeriVul dataset despite being given the full self\-contained program\. Because each sample carries the ESBMC counterexample and the violating statement, VeriVul also supports evaluation beyond binary classification, including root\-cause identification and trace\-grounded explanation\. We release the framework, the slicer, the verification harness, and the generated dataset to support contamination\-resilient evaluation of code LLMs as vulnerability analysts\.

## MainFL: Intertemporal Data Valuation for Robust Auction\-based Federated Learning

**Authors:** Bangqi Pan; Yun Xin; Jianfeng Lu; Gang Li; Shuqin Cao; Zhou Chendi

**ID:** 155290 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6fKtSScbpp>) | [PDF](<https://openreview.net/pdf?id=6fKtSScbpp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155290>)

Auction\-based Federated Learning \(AFL\) provides a principled framework for incentivizing data owners and allocating decentralized training resources to data consumers\. However, practical AFL systems face a coupled valuation and allocation challenge: data quality is uncertain before training, post\-training feedback can be strategically distorted, and heterogeneous deadlines render late model updates ineffective for learning\. We propose MainFL, an incentive\-compatible intertemporal data valuation mechanism for robust auction\-based federated learning\. MainFL integrates three components: \(i\) a bounded mutual\-information peer prediction rule that elicits truthful pre\-training quality reports without requiring ground\-truth labels; \(ii\) an intertemporal reliability calibration scheme that updates future valuations using post\-session validation signals; and \(iii\) a deadline\-induced layered clinching mechanism that allocates quality\-weighted data while enforcing budget and feasibility constraints\.We theoretically establish Bayes–Nash truthfulness for data owners, allocation feasibility and budget safety, and truthful residual\-demand equilibrium for data consumers under standard clinching\-auction regularity conditions\. Empirical results on widely used federated learning benchmarks show that MainFL improves social welfare by up to 12\.1% and model accuracy by up to 7\.4% compared to state\-of\-the\-art AFL baselines, while substantially reducing straggler\-induced task timeouts\.

## Benchmark Health Index: A Systematic Framework for Benchmarking the Benchmarks of LLMs

**Authors:** Longyuan Zhu; Hairan Hua; Linlin Miao; Wei Wang; 必应 赵

**ID:** 138960 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tsoDWPkJOz>) | [PDF](<https://openreview.net/pdf?id=tsoDWPkJOz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138960>)

Large Language Models \(LLMs\) are advancing rapidly, yet the benchmarks used to measure this progress are becoming increasingly unreliable\. Score inflation and selective reporting have eroded the authority of standard benchmarks, leaving the community uncertain about which evaluation results remain trustworthy\. We introduce the \*\*Benchmark Health Index \(BHI\)\*\*, a pure data\-driven framework for auditing evaluation sets along three orthogonal and complementary axes: \(1\) \*\*Capability Discrimination\*\*, measuring how sharply a benchmark separates model performance beyond noise; \(2\) \*\*Anti\-Saturation\*\*, estimating remaining headroom before ceiling effects erode resolution and thus the benchmark's expected longevity; and \(3\) \*\*Impact\*\*, measuring capability\-weighted benchmark adoption across the model ecosystem\. By distilling \*\*158\*\* validated benchmarks from the technical reports of \*\*117\*\* representative models released between \*\*2025\*\* and \*\*April 2026\*\*, we systematically characterize the evaluation landscape\. BHI is the \*\*first framework\*\* to quantify benchmark health at a macro level, providing a well\-grounded quantitative basis for benchmark selection and supporting the dynamic filtering and continuous updating of evaluation sets\. Our comprehensive analysis not only identifies benchmarks that remain highly credible but also exposes pervasive structural issues\. By establishing a rigorous foundation for selection and management, BHI elevates evaluation practice from heuristic\-based judgment to a quantifiable and interpretable scientific process\. Our code is available online at

## One Algorithm, Two Goals: Dual Scoring for Parameter and Data Selection in LLM Fine\-Tuning

**Authors:** Xinrui Chen; Liu Yang; Ou Wu

**ID:** 149252 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rkcG6vtYfa>) | [PDF](<https://openreview.net/pdf?id=rkcG6vtYfa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149252>)

In Large Language Model \(LLM\) fine\-tuning, parameter and data selection are common strategies for reducing fine\-tuning cost, yet they are typically driven by separate scoring mechanisms\. When a parameter mask and data subset jointly determine restricted fine\-tuning, this separation incurs redundant overhead and makes coordinated selection difficult\. We cast parameter and data selection as two bilevel selection problems under a common validation objective and derive a shared local response\-surrogate scoring rule\. Under first\- and second\-order validation\-improvement approximations, parameter importance and data utility emerge as column\-wise and row\-wise aggregations of a single gradient interaction matrix, yielding a closed\-form row\-\-column correspondence for co\-extracting both signals\. Building on this structure, we propose $\\textbf\{DualSFT\}$ \($\\textbf\{Dual\}$\-$\\textbf\{S\}$election $\\textbf\{F\}$ine\-$\\textbf\{T\}$uning\), a one\-shot dual\-scoring algorithm that produces a parameter mask and data subset from shared gradient statistics\. On 3B$\-$9B LLMs, single\-axis DualSFT variants strengthen target\-task performance and stability\-\-plasticity trade\-offs within their comparison groups, while full DualSFT yields a more favorable joint\-constrained trade\-off than sequential hybrid baselines under matched budgets\.

## DUDS: Dual\-stage Data Selection for Efficient Reinforcement Learning with Verifiable Rewards

**Authors:** Hongling Zheng; Li Shen; Zichuan Lin; Jiafei Lyu; Zhicong Lu; Shuhan Xu; Yong Luo; Deheng Ye; Dacheng Tao

**ID:** 151136 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cjuhKXBKYF>) | [PDF](<https://openreview.net/pdf?id=cjuhKXBKYF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151136>)

Recent advances in large language models \(LLMs\) have leveraged reinforcement learning with verifiable rewards \(RLVR\) to enhance reasoning capabilities\. However, RLVR typically relies on massive training data and extensive rollouts, posing substantial challenges to computational resources\. Existing data selection approaches address this challenge in isolation: offline methods perform static, one\-time dataset pruning that cannot adapt to the model’s evolving learning needs throughout training, while online methods conduct per\-iteration filtering at the expense of significant additional computation\. In this paper, we propose DUDS, a Dual\-stage Data Selection framework for RLVR, which organically integrates the strengths of both paradigms to improve training efficiency while maintaining competitive performance\. Specifically, the offline stage curates a candidate pool from the full dataset by jointly considering quality score and sample diversity via Determinantal Point Processes, providing an informative warm start for subsequent training\. The online stage employs Bayesian posterior updates to estimate sample pass rates without introducing additional rollouts, and combines them with a freshness metric for data sampling, then applies asymmetric filtering to phase out mastered or intractable problems\. Extensive experiments across four reasoning benchmarks demonstrate that DUDS consistently outperforms existing methods in both offline and online data\-selection scenarios, achieving competitive performance with significantly less data and computation\. Code is available at here\.

## Closed Loop Dynamic Driving Data Mixture for Real\-Synthetic Co\-Training

**Authors:** Hongzhi Ruan; Pei Liu; Weiliang Ma; Zhengning Li; Xueyang Zhang; Jun Ma; Dan Xu; Kun Zhan

**ID:** 149779 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nNBsrNygh7>) | [PDF](<https://openreview.net/pdf?id=nNBsrNygh7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149779>)

Data scaling is fundamental to modern deep learning, and grows increasingly critical as autonomous driving shifts to end\-to\-end learning\. Real\-world driving data is expensive to annotate and scene\-biased, making real\-synthetic co\-training with near\-infinite synthetic data a promising direction\. However, naively incorporating all available synthetic data is inefficient and leads to distribution shifts, and optimizing data mixture under practical training budgets remains a critical yet under\-explored problem\. In this sense, we claim that the mixture of training data requires clear guidance in terms of scene types and quantities\. Particularly in this work, we conceptualize the data mixture approximately as a dynamic optimization process that iteratively adjusts the training data mixture to maximize model performance, guided by closed\-loop evaluation feedback, and propose AutoScale, a fully automated closed\-loop data engine unifying scene representation, data mixture optimization and retrieval, as well as model training and evaluation\. Specifically, we propose Graph Regularized AutoEncoder \(Graph\-RAE\) for driving scene representations, introduce Cluster\-aware Gradient Ascent \(Cluster\-GA\) for cluster\-wise importance estimation and reweighting, and perform cluster\-guided vector retrieval to select high\-value samples\. Experiments on NavSim demonstrate that AutoScale outperforms vanilla co\-training and cross\-domain baselines, achieving better performance with fewer synthetic samples under constrained budgets\.

## A Computational Perspective to Data Ablation Experiments

**Authors:** Jiachen \(Tianhao\) Wang; Lin Chen; Mohammadhossein Bateni; Ruoxi Jia; Prateek Mittal; Vahab Mirrokni

**ID:** 155175 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7jrxR7M4di>) | [PDF](<https://openreview.net/pdf?id=7jrxR7M4di>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155175>)

\\emph\{Scaling\} has been the central driver of progress in modern AI, yet data curation remains an exception: it still relies on manual heuristics rather than systematic, scalable methods\. In practice, data recipes \(e\.g\., filter thresholds, deduplication strength, domain mixing ratios\) are determined through many small\-scale ablation training runs\. This work demonstrates that the performance of the best\-discovered recipe improves \\emph\{predictably\}\-\-as a \\emph\{power law\}\-\-in the number of such ablation runs\. Theoretically, the power\-law form arises naturally from regret bounds in zero\-order optimization theory\. Empirically, we validate it across diverse training stages, including pretraining, supervised fine\-tuning, preference optimization, and reinforcement learning\. Building on this finding, we derive a principled approach to \\emph\{data quality\-\-quantity tradeoff\} under a fixed compute budget, yielding a Pareto frontier that dominates standard heuristic pipelines \(e\.g\., DCLM\)\. Together, this work provides a general framework for scaling data\-curation compute, establishing it as a new axis alongside the well\-studied pretraining and test\-time scaling\.

## Patch Rebirth: Fast and Transferable Model Inversion of Vision Transformers

**Authors:** Seongsoo Heo; Dong\-Wan Choi

**ID:** 152421 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TF4aZ1sOeQ>) | [PDF](<https://openreview.net/pdf?id=TF4aZ1sOeQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152421>)

Model inversion is a widely adopted technique in data\-free learning that reconstructs inputs from a pretrained model through iterative optimization, without access to original data\. However, its application to Vision Transformers \(ViTs\) incurs high computational cost due to expensive self\-attention mechanisms\. To address this, $\\textit\{Sparse Model Inversion\}$ \(SMI\) was proposed to improve efficiency by gradually pruning seemingly unimportant patches, even claiming they are obstacles to knowledge transfer\. However, our empirical findings suggest the opposite: even randomly selected patches can eventually acquire transferable knowledge over the inversion process\. In fact, we further observe that removing prematurely inverted patches hinders the extraction of class\-agnostic features essential for knowledge transfer, as well as class\-specific features\. In this paper, we propose $\\textit\{Patch Rebirth Inversion\}$ \(PRI\), a novel approach that constructs multiple sparse images within a single inversion process by incrementally detaching informative patches, instead of removing unimportant ones\. This strategy not only improves efficiency, but also encourages initially less informative patches to gradually accumulate more class\-relevant knowledge, a phenomenon we refer to as the $\\textit\{Re\-Birth\}$ effect, thereby effectively balancing class\-agnostic and class\-specific knowledge\. Experimental results show that PRI achieves up to 10$\\times$ faster inversion than standard $\\textit\{Dense Model Inversion\}$ \(DMI\) and 2$\\times$ faster than SMI, while consistently outperforming SMI in accuracy and matching the performance of DMI\.

## Breaking the Quality–Privacy Tradeoff in Tabular Data Generation via In\-Context Learning

**Authors:** Xinyan Han; yan Lu; Xiaoyu Lin; Yuanyuan Jiang; Yuanrui Wang; Xuanyue Li; Wenchao Zou; Xingxuan Zhang

**ID:** 152928 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PKGG71vTok>) | [PDF](<https://openreview.net/pdf?id=PKGG71vTok>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152928>)

Tabular data synthesis aims to generate high\-quality data while preserving privacy\. However, we find that existing tabular generative models exhibit a clear tradeoff in the small\-data regime: improving data quality typically comes at the cost of increased memorization of training samples, thereby weakening privacy protection\. This tradeoff arises because small training sets make it difficult for dataset\-specific generative models to distinguish generalizable structure from sample\-specific patterns\.  To address this, we propose DiffICL, which formulates tabular data generation as an in\-context learning problem\. Instead of fitting each dataset from scratch, DiffICL leverages pretrained structural priors learned from a large collection of datasets, enabling it to infer data distributions from limited context rather than memorizing individual samples\. We evaluate DiffICL on 14 real\-world datasets\. Results show that DiffICL improves both data quality and privacy, and generates synthetic data that provides effective data augmentation\. Our findings suggest that the quality–privacy tradeoff can be improved through better training paradigms\.

## A Compass for Useful Data: Online Data Selection via Alignment\-Gated Fisher Geometry

**Authors:** Jingwen Zhang; Jianrui Shi; Zheng Wang; Wanfang Chen; Yaping Wang; Kaixuan Zhang

**ID:** 155971 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1Sqambi1v4>) | [PDF](<https://openreview.net/pdf?id=1Sqambi1v4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155971>)

Online data selection is typically driven by per\-sample scores such as loss, uncertainty, or gradient norm, which measure how strongly the model reacts to a candidate but not what parameter update the candidate would induce\. What an online learner should select is therefore not the most striking example, but the one whose update is most worth taking\. To make this concrete, we score a candidate by the movement induced by its update, using a Fisher\-whitened information gain that evaluates the update in the loss geometry rather than by raw gradient size\. Movement, however, is not yet progress, so we pass this score through a \\emph\{Descent Alignment Gate\}, a soft factor that retains it only when the induced update agrees with the descent direction\. This yields a sample\-level score favoring updates that are both informative and descent\-aligned\. To make the criterion compatible with training, we extend it from samples to batches, where selected updates should not only score well individually but also complement one another\. We capture this with the \\emph\{Gated Fisher Volume\}, a log\-determinant batch objective that reduces to the per\-sample score on a singleton, grows with the volume spanned by the chosen updates in the Fisher geometry, and admits a greedy algorithm with a constant\-factor approximation guarantee\. Across supervised fine\-tuning benchmarks, our selector consistently outperforms online selection baselines under matched training budgets\.  More broadly, the framework reframes data selection itself: rather than a spotlight on conspicuous examples, it acts as a compass toward updates worth taking\.

## SWE\-Pro: A Benchmark for Evaluating LLMs on Performance\-Oriented Repository\-Level Optimization

**Authors:** Ezgi Sarıkayak; Wenchao Gu; Hesham Ghonim; Chunyang Chen

**ID:** 139202 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ejx2oNUnIp>) | [PDF](<https://openreview.net/pdf?id=ejx2oNUnIp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139202>)

Software performance optimization is a notoriously complex and manual task\. Despite the growing use of Large Language Models \(LLMs\) for code refinement, we still lack benchmarks that capture how optimization actually happens in real\-world codebases\. Existing frameworks often oversimplify the problem by focusing on isolated functions or a single performance metric, missing the critical trade\-offs between execution time and memory footprint, the inherent noise of the measurement environment, and the variability introduced by different input data and execution conditions\. We address this by introducing SWE\-Pro, a repository\-level benchmark derived from 102 expert\-written optimizations from open\-source projects\. Unlike previous benchmarks, SWE\-Pro pairs each task with parameterized tests to evaluate runtime, peak memory, and Time\-Weighted Memory Usage \(TWMU\) varying input data and execution conditions under noise\-aware measurement conditions\. Our evaluation shows that current LLMs struggle significantly: runtime gains are negligible, and memory optimizations are nearly non\-existent\. This stands in sharp contrast to expert implementations, which achieve an aggregate speedup of 15\.5x and peak memory reduction of 171\.3x over benchmark tasks\. Expert\-written improvements are observed in 91\.2% of tasks for runtime and 65\.7% for peak memory\. Our findings expose a substantial gap between current LLMs capabilities and the demands of expert\-level engineering\.

## RepoZero: Can LLMs Generate a Code Repository from Scratch?

**Authors:** Zhaoxi Zhang; Yiming Xu; Jiahui Liang; Weikang Li; Xiaoshuai Chen; Liwei Qian; Xin Pei; Jizhou Huang; Rui Sun; Yunfang Wu

**ID:** 139682 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AmuEj2d0Qm>) | [PDF](<https://openreview.net/pdf?id=AmuEj2d0Qm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139682>)

Large Language Models \(LLMs\) have recently shown remarkable progress in code generation, yet their ability to construct complete software repositories from scratch remains poorly understood\. A fundamental bottleneck is the lack of verifiable and scalable evaluation: existing benchmarks either focus on patch\-based editing or rely on human or LLM\-based judgments, which introduce bias and limit reproducibility\. In this work, we present RepoZero, the first benchmark that enables fully automated, execution\-based verification of repository\-level generation from scratch\. Our key idea is to reformulate generation as repository reproduction: given only API specifications, an agent must re\-implement an entire repository such that its behavior matches the original implementation\. This design allows for strict black\-box validation via output equivalence, while naturally supporting large\-scale construction by reusing existing open\-source repositories\. To further mitigate data leakage and shortcut solutions, we introduce cross\-language constraints and a sandboxed evaluation protocol\. Building on this benchmark, we propose an Agentic Code\-Test Evolution \(ACE\) framework that performs iterative test generation and error\-driven refinement, enabling effective test\-time scaling for repository\-level synthesis\. Extensive experiments across multiple state\-of\-the\-art LLMs and agent frameworks reveal that even the strongest models achieve only limited pass rates \(30\\% \- 55\\%\), exposing a substantial gap between current capabilities and real\-world software development requirements\. Our results establish RepoZero as a challenging, scalable, and reliable testbed for end\-to\-end code generation, and highlight self\-verification via test generation as a critical direction for advancing LLM\-based coding agents\.

## An Analytical Model of Compute\-limited Multistage Training Pipelines

**Authors:** Nishil Patel; Jin Hwa Lee; Basile Confavreux; Andrew Saxe

**ID:** 150925 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eKJJOkZmQA>) | [PDF](<https://openreview.net/pdf?id=eKJJOkZmQA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150925>)

Modern foundation models are trained through multistage pipelines, typically beginning with unsupervised pretraining, followed by supervised fine\-tuning \(SFT\) on step\-by\-step solutions, and reinforcement learning \(RL\) with bulk feedback\. Empirically, the design of these stages, particularly the compute allocated to each, strongly affects performance\. Yet our theoretical understanding of multistage training remains limited\. Here, we introduce a simple, analytically tractable model of multistage training\. The model reproduces several qualitative phenomena: SFT and RL can be complementary, pretraining quality imposes a performance ceiling with power\-law scaling, optimal compute allocation varies with data quality and pretraining level, and RL can selectively amplify task\-relevant pretrained skills\. Our model distills the complex behaviors into key ingredients, allowing clearer understanding of how and where they arise\. Overall, our model provides a theoretical starting point for explaining the phenomenology of multistage training pipelines in the compute\-limited regime\.

## SurvCancel: A Longitudinal Dataset and Benchmark for Dynamic Order Cancellation Prediction in On\-Demand Ride\-Sharing Systems

**Authors:** Huayang Liu; Mingyu Zheng; Wei Zhang; Yijun Bian; Kai Wang

**ID:** 138871 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zsQOS0D6s7>) | [PDF](<https://openreview.net/pdf?id=zsQOS0D6s7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138871>)

Passenger\-order cancellation is a critical source of uncertainty in on\-demand ride\-sharing systems, where requests, assignments, and vehicle routes evolve continuously in real time\. Due to shared capacity and coupled routes, a single cancellation may propagate through downstream matching and routing decisions, degrading system efficiency and service reliability\. However, cancellation prediction in on\-demand ride\-sharing remains difficult to study systematically due to the lack of large\-scale longitudinal datasets, standardized evaluation protocols, and fine\-grained real\-time benchmarks\. In this work, we introduce SurvCancel, a real\-world longitudinal dataset and benchmark for dynamic passenger\-order cancellation prediction in on\-demand ride\-sharing systems\. Constructed from operational logs collected across four service regions in the real world, SurvCancel contains 173K released orders and 7\.9M time\-dependent snapshots\. Each order is represented as a longitudinal sequence of system states, capturing both order\-level attributes and the evolving supply\-demand environment throughout its lifecycle\. We formulate cancellation prediction as a stage\-conditioned dynamic survival task: at each landmark time, models estimate short\-term cancellation risk from the historical state sequence observed so far\. We evaluate representative survival and dynamic\-risk models under both in\-distribution and distribution\-shift protocols\. Our results show stage\-dependent model behavior in the in\-distribution setting and reveal distinct robustness patterns under regional and temporal distribution shifts\.

## Model Distribution\-Aware Multimodal Dataset Distillation

**Authors:** Jiajun Shen; Yonglin Wu; Ruonan Yu; Xinchao Wang

**ID:** 148787 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v4TjuVDghY>) | [PDF](<https://openreview.net/pdf?id=v4TjuVDghY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148787>)

Multimodal dataset distillation \(MDD\) seeks to synthesize compact surrogates from large\-scale image\-text corpora, reducing the high cost of pre\-training\. Although recent feature\-matching methods have improved the efficiency of MDD, they often suffer from initialization overfitting, which distorts the cross\-modal structure and severely degrades retrieval performance under unseen initializations\. To mitigate this issue, we propose $\\textbf\{MDA\-DD\}$, which enhances generalization via a dynamic staggered model queue\. We further identify two architectural bottlenecks in prior work: structurally redundant projections and inefficient covariance computation\. For the former, we design an asymmetric dual projection to reduce redundancy while preserving balanced bidirectional cross\-modal alignment\. For the latter, we introduce a Second\-Order Cross\-Modal Moment \(SOCM\) objective, which efficiently captures both mean and correlation statistics across modalities\. Experiments on Flickr30K and MS\-COCO show that $\\textbf\{MDA\-DD\}$ consistently surpasses existing methods, yielding notable retrieval improvements \(e\.g\., \+12\.9 IR@1 and \+18\.2 TR@1 in the 100\-pair setting\) and matching or exceeding baselines trained on 500 pairs using only 100 pairs\.

## Susceptibilities for Neural Networks Learning from Physical Data

**Authors:** Rohan Hitchcock; Gary W Delaney; Jonathan H Manton; Richard Scalzo; Jingge Zhu

**ID:** 153639 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JqmNxWsIQE>) | [PDF](<https://openreview.net/pdf?id=JqmNxWsIQE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153639>)

Neural networks that are trained on data arising from a physical system must somehow learn regularities induced by the underlying physical laws\. In this setting, concepts from statistical physics provide powerful tools for analysing how physical laws influence the learning process\. In this paper we explain how \*susceptibilities\* \-\-\- which measure the response of a neural network to perturbations of a parameter of the data distribution \-\-\- can be applied when learning from physical data\. We show that such susceptibilities can identify the conditions under which specific input features are most informative for learning, guiding data selection, a prediction we validate experimentally\. For distributions lacking a natural parameter, we propose introducing one via an arbitrary scalar function of the physical state, and demonstrate that susceptibilities track the emergence of specific capabilities \(such as collision detection\) during training\.

## Does the Question Really Matter? Training\-Free Data Selection for Vision\-Language SFT

**Authors:** Peng Sun; Yi Yang; Huawen Shen; Yi Ban; Tianfan Fu; Yanbo Wang; Yuqiang Li

**ID:** 150111 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kcBOe422p2>) | [PDF](<https://openreview.net/pdf?id=kcBOe422p2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150111>)

Visual instruction tuning is crucial for improving vision\-language large models \(VLLMs\)\. However, many samples can be solved via linguistic patterns or common\-sense shortcuts, without genuine cross\-modal reasoning, limiting the effectiveness of multimodal learning\. Prior data selection methods often rely on costly proxy model training and focus on difficulty or diversity, failing to capture a sample’s true contribution to vision\-language joint reasoning\. In this paper, we propose CVS, a training\-free data selection method based on the insight that, for high\-quality multimodal samples, introducing the question should substantially alter the model’s assessment of answer validity given an image\. CVS leverages a frozen VLLM as an evaluator and measures the discrepancy in answer validity with and without conditioning on the question, enabling the identification of samples that require vision\-language joint reasoning while filtering semantic\-conflict noise\. Experiments on Vision\-Flan and The Cauldron show that CVS achieves solid performance across datasets\. On Vision\-Flan, CVS outperforms full\-data training by 3\.5\\% and 4\.8\\% using only 10\\% and 15\\% of the data, respectively, and remains robust on the highly heterogeneous Cauldron dataset\. Moreover, CVS reduces computational cost by 17\.3\\% and 44\.4\\% compared to COINCIDE and XMAS\. The code is anonymously available at https://anonymous\.4open\.science/r/CVS\-ABAA\.

## ViCoR: Estimating Visual Necessity via Counterfactual Residuals for Multimodal Medical Data Selection

**Authors:** Haotian Gan; Yudong Li; Xintian Li; Jiarui Han; Weidong Tang

**ID:** 154516 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D0DvVACDW0>) | [PDF](<https://openreview.net/pdf?id=D0DvVACDW0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154516>)

Medical vision\-language models often exhibit hidden stratification, where high overall performance masks failures on subtle visual findings and overlapping clinical conditions\. We trace this failure mode to modality imbalance during fine\-tuning, where strong linguistic priors can suppress visually grounded learning and induce plausible but weakly grounded rationales\. Existing data selection methods usually score image\-text pairs as holistic units, without separating visually necessary samples from shortcut\-solvable ones\. To address this problem, we propose ViCoR, a counterfactual\-residual\-based data selection method for Med\-VLM fine\-tuning\. ViCoR estimates visual necessity through image\-dependent optimization residuals, calibrates the resulting scores with medical supervision compatibility, and constructs a diversity\-aware fine\-tuning subset\. Across two backbones, four external generalization benchmarks, and one multi\-disease robustness benchmark, ViCoR\-selected 20\\% subsets achieve the strongest average performance compared with full\-data fine\-tuning and selection baselines\. Gradient\-level analysis and perturbation audits further show that ViCoR enriches image\-dependent training signals and strengthens image\-level and evidence\-region dependence\. The code will be released to support future research\.

## X\-AVDD: Cross\-Attentive Audio\-Visual Dataset Distillation

**Authors:** Saumyaranjan Mohanty; Aravind Reddy; Konda Reddy Mopuri

**ID:** 153215 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MzMWvUkNZw>) | [PDF](<https://openreview.net/pdf?id=MzMWvUkNZw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153215>)

\*Audio\-visual dataset distillation\* aims to synthesize a small dataset from a large paired audio\-visual dataset, while nearly preserving the training utility for neural networks\. Existing approaches such as DM and AVDD face two critical limitations: 1\) they are memory\-intensive, making them difficult to scale to complex architectures and higher samples\-per\-class \(SPC\) settings, and 2\) they often fail to preserve strong cross\-modal semantic correspondence\. To tackle these issues, we propose \*\*X\-AVDD\*\*, a \*\*cross\-attention\-based\*\* distillation method that explicitly captures inter\-modal relationships during synthesis\. By decoupling cross\-modal alignment from joint optimization, X\-AVDD is substantially more memory\-efficient, reducing end\-to\-end synthesis cost by $\\sim 8\\times$ GPU\-hours, while producing highly aligned synthetic data\. Empirically, X\-AVDD significantly outperforms other audio\-visual distillation methods\. On VGGSound, an audio\-visual dataset of short YouTube clips, X\-AVDD improves top\-1 test accuracy from $8\.2$% → $24\.0$% at SPC=$10$ and $9\.8$% → $26\.5$% at SPC=$20$\. Furthermore, X\-AVDD improves cross\-architecture generalization \(e\.g\., $25\.5$% → $35\.3$% for a ViT target on AVE dataset at SPC=$50$\) and successfully scales to complex architectures such as AudioCLIP, achieving $62\.3$% accuracy using only $5\.65$% of the full dataset, against the full dataset accuracy of $72\.4$\\% while completing in $9\\times$ lower training time compared to the full dataset\.

## Learning Generalizable Hand\-Object Tracking Control without Human Demonstrations

**Authors:** Runyi Yu; Xiaoyi Lin; Hok W Tsui; Yinhuai Wang; PENG Zhijie; Hui Zhang; Qihan Zhao; Ke Fan; Miao Li; Jie Song; Jingbo Wang; Qifeng Chen; Ping Tan

**ID:** 152634 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RcH4CFYczG>) | [PDF](<https://openreview.net/pdf?id=RcH4CFYczG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152634>)

We present a system for learning generalizable hand\-object tracking controllers purely from synthetic data, without requiring any human demonstrations\. Our approach makes two key contributions: \(1\) HOP, a Hand\-Object Planner, which can synthesize diverse hand\-object trajectories; and \(2\) HOT, a Hand\-Object Tracker that bridges synthetic\-to\-physical transfer through reinforcement learning and interaction imitation learning, delivering a generalizable controller conditioned on target hand\-object states\. Our method extends to diverse object shapes and hand morphologies\. Through extensive evaluations, we show that our approach enables dexterous hands to track challenging, long\-horizon sequences including object re\-arrangement and agile in\-hand reorientation\. These results represent a significant step toward scalable foundation controllers for manipulation that can learn entirely from synthetic data, breaking the data bottleneck that has long constrained progress in dexterous manipulation\.

## Can We Trust Item Response Theory for AI Evaluation?

**Authors:** Han Jiang; Sunbeom Kwon; Jinwen Luo; Ziang Xiao; Susu Zhang

**ID:** 139287 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZKNcOHJwjy>) | [PDF](<https://openreview.net/pdf?id=ZKNcOHJwjy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139287>)

AI benchmarks increasingly leverage item\-level statistical models, particularly item response theory \(IRT\), to estimate capabilities, rank systems, select informative examples, and diagnose benchmark quality\. However, AI benchmark data often departs from the data regimes encountered in human testing, for which standard IRT estimation tools were originally developed: these benchmarks typically involve fewer evaluated models, far more items, and capability distributions that may be skewed, clustered, or multimodal\. We examine how these regime mismatches challenge the reliability of IRT modeling for AI evaluation\. Using item parameters and capability distributions derived from six widely used LLM benchmarks, we simulate response matrices under three common IRT models and compare four estimators used in recent benchmark studies: marginal maximum likelihood, Markov chain Monte Carlo, variational inference, and a neural pseudo\-Siamese estimator\. Across 18,000 simulation runs, we systematically evaluate computational feasibility, scalability, and the reliability of IRT inferences about model rankings, predicted performance, and item characteristics\. Results show that classical estimators can become computationally infeasible for large benchmarks, whereas scalable estimators can produce unreliable item\-level and ranking inferences with small or non\-normally distributed model sets\. This study identifies when latent trait models reliably support or risk distorting AI benchmarking claims, and what sample sizes and diagnostics are needed for trustworthy use\.

## EcoGEO: Trajectory\-Aware Evidence Ecosystems for Web\-Enabled LLM Search Agents

**Authors:** Hengwei Ye; Jiasheng Mao; Zhenhan Guan; Zheng Tian

**ID:** 153813 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IWhjevkPn4>) | [PDF](<https://openreview.net/pdf?id=IWhjevkPn4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153813>)

Web\-enabled LLM agents are changing how online information influences search outcomes\. Existing Generative Engine Optimization \(GEO\) studies mainly focus on individual webpages\. However, agentic web search is not a single\-document setting: an agent may issue queries, crawl pages, follow links, reformulate searches, and synthesize evidence across multiple browsing steps\. Influence therefore depends not only on page content, but also on how pages are organized, connected, and encountered along the agent's browsing trajectory\. We study this shift through Ecosystem Generative Engine Optimization \(EcoGEO\), which treats GEO as an environment\-level influence problem for web\-enabled LLM agents\. To instantiate this perspective, we propose TRACE, a Trajectory\-Aware Coordinated Evidence Ecosystem\. Given a recommendation query and a fictional target product, our method builds a controlled evidence environment that coordinates an agent\-facing navigation entry page with heterogeneous support pages\. These pages use shared terminology, internal links, and consistent product attributes to introduce, verify, and reinforce the target product\. We evaluate our method on OPR\-Bench, a benchmark for open\-ended product recommendation\. Experiments show that it consistently outperforms page\-level GEO baselines in final target recommendation\. Trajectory\-level metrics further show increased initial target\-result crawls, target\-specific follow\-up searches, and internal\-link crawls, suggesting that the gains come from shaping the agent's evidence\-acquisition process rather than merely adding more target\-related content\. Overall, our findings support an ecosystem research paradigm for GEO, where web\-enabled LLM agents are studied in relation to the broader evidence environments that guide search, browsing, and answer synthesis\.

## MMFineReason: Closing the Multimodal Reasoning Gap via Open Data\-Centric Methods

**Authors:** Honglin Lin; Zheng Liu; Yun Zhu; Chonghan Qin; Juekai Lin; Xiaoran Shang; Conghui He; Bin CUI; Wentao Zhang; Lijun Wu

**ID:** 139294 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z3ctdgrbBf>) | [PDF](<https://openreview.net/pdf?id=Z3ctdgrbBf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139294>)

Recent advances in Vision Language Models \(VLMs\) have driven significant progress in visual reasoning\. However, open\-source multimodal models still lag behind proprietary systems, largely due to the lack of high\-quality reasoning data\. Existing datasets offer limited coverage of challenging domains such as STEM diagrams and visual puzzles, and lack consistent, long\-form Chain\-of\-Thought \(CoT\) annotations essential for eliciting strong reasoning capabilities\. To bridge this gap, we introduce MMFineReason, a large\-scale multimodal reasoning dataset comprising 1\.8M samples and 5\.1B solution tokens, featuring high\-quality reasoning annotations distilled from Qwen3\-VL\-235B\-A22B\-Thinking\. The dataset is established via a systematic three\-stage pipeline: \(1\) large\-scale data collection and standardization, \(2\) CoT rationale generation, and \(3\) comprehensive selection based on reasoning quality and difficulty awareness\. The resulting dataset spans STEM, visual puzzles, games, and complex diagrams, with each sample annotated with detailed, visually grounded reasoning traces\. We fine\-tune Qwen3\-VL\-Instruct on MMFineReason to develop MMFineReason\-2B/4B/8B versions\. Our models establish new state\-of\-the\-art \(SOTA\) results for their size class\. Notably, MMFineReason\-4B surpasses Qwen3\-VL\-8B\-Thinking, and MMFineReason\-8B even outperforms Qwen3\-VL\-30B\-A3B\-Thinking while approaching Qwen3\-VL\-32B\-Thinking, demonstrating remarkable parameter efficiency\. Crucially, we uncover a "less is more" phenomenon via our difficulty\-aware filtering strategy: a subset of just 7\\% \(123K samples\) achieves performance comparable to the full dataset\. Notably, we reveal a synergistic effect where reasoning\-oriented data simultaneously boosts general capabilities\.

## Readiness\-Aware Sample Selection for Noisy Labels with Class Imbalance

**Authors:** Chihyeon Choi; Sangho Lee; Jiho Hong; Youngdoo Son; Hyungrok Do

**ID:** 153563 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KRjwe8CvhI>) | [PDF](<https://openreview.net/pdf?id=KRjwe8CvhI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153563>)

Noisy labels can cause deep neural networks to overfit incorrect annotations, leading to biased predictions and poor generalization\. A common remedy is to select clean samples after a short warm\-up phase, under the assumption that the model begins to learn class\-specific patterns from the early training stage\. However, this assumption often fails under class imbalance, as the majority classes can hinder the model from learning distinctive features of minority classes\. In this paper, we propose a readiness\-aware sample selection strategy that identifies clean samples only from classes whose distinctive features have been sufficiently learned and are thus considered ready for selection\. We further introduce a novel negative learning scheme to enhance class separability by discouraging confusion with the most similar incorrect classes\. The proposed method is supported by theoretical analysis and demonstrates outstanding performance on both benchmark and real\-world datasets, showing improved robustness and generalization under noisy and class\-imbalanced conditions\.

## COHE: Auditing Non\-Transitivity in Sample Difficulty Proxies for Vision Models

**Authors:** Dayena Jeong; Sunglok Choi

**ID:** 139659 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CRLrnZHHFd>) | [PDF](<https://openreview.net/pdf?id=CRLrnZHHFd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139659>)

Label\-free proxy scores are often used as if they measured downstream discriminative difficulty\. A score may rank samples similarly to a target, predict that target on held\-out data, or improve a downstream decision; these are distinct evidence levels\. We present Cross\-Objective Hardness Evaluation \(COHE\), a protocol that audits each proxy\-\-target\-\-protocol tuple through dependence, held\-out\-prediction, and operational\-transfer gates\. COHE maps standard, inspectable statistics to bounded claim tiers; the contribution is evidence\-to\-claim calibration, not a new sampler, metric, or model\. A DINOv2 isolation stress test illustrates the boundary: representation isolation captures a first\-learning dynamics relation \(rho = 0\.4363, R^2 = 0\.2126\), but using it for direct 10% subset selection fails against Random \(Delta = \-15\.41, 95% CI \[\-15\.87, \-14\.95\]\)\. COHE therefore preserves this target\-specific relation without rebranding it as actionability\. Across CIFAR\-10/100, ImageNet\-10, and ImageNet\-1K validation checks, eight primary generative proxy families do not support CE/margin surrogate claims: they show weak alignment, near\-zero held\-out CE prediction, and unreliable transfer\. Controls show stable discriminative target rankings, expected shuffled\-proxy null behavior, and a task\-aligned ImageNet target\-hard retrieval/triage tuple that passes all gates\. The anonymized supplementary package provides lightweight gate\-wise audit code, toy scalar CSV examples, cached aggregate summaries, selected derived scalar arrays for tabular gate verification, supported paper\-style verification scripts, and provenance notes without redistributing raw datasets, images, weights, checkpoints, or full scoring/retraining pipelines\.

## SWE\-Git\-Bench: A Worktree\-Level Benchmark for Real Merge Conflict Resolution

**Authors:** Wei Zhang; Jian Yang; jiajun wu; Zidan Tang; Siwei Wu

**ID:** 139812 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=37pMYoL9Iz>) | [PDF](<https://openreview.net/pdf?id=37pMYoL9Iz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139812>)

Large\-language\-model code benchmarks mostly measure issue repair or fresh synthesis, but they do not isolate a common commit\-gating operation: after git emits conflict markers, a resolver must leave the worktree file ready to commit\. SWE\-Git\-Bench turns this operation into a reproducible benchmark\. We replay real two\-parent merges from SWE\-bench\-family source pools, retain files where replay produces conflict markers, and use the maintainer\-committed merge file as the reference\. The release contains 135 slice\-counted conflicts and 185 conflicted\-file examples from 23 repositories; after collapsing Lite/Verified overlap, these correspond to 129 unique merge commits and 179 unique conflicted files\. In an April 19–22, 2026 snapshot of 36 LLM endpoints, the best whole\-file exact match is only 26\.5%, and an oracle union across all models covers 41\.6% of files\. Conflict\-block prompting raises edit similarity by \+19\.2 pp but changes exact match by only \-0\.1 pp, showing that an easier output interface does not by itself recover merge intent\. A human\-checked audit of 80 whole\-file non\-EM outputs with ES ≥ 0\.99 labels 40/80 likely unsafe\. We release public code and data, canonical JSONL artifacts, Core Croissant plus Responsible\-AI metadata, scoring harnesses, model predictions, difficulty bands, and failure analyses\.

## Can LLMs Reliably Grade Olympiad Proofs? A Controlled Study of Mathematical Verification with LLMs

**Authors:** Azim Ospanov; Zijin Feng; Ding Ding; Chengwu Liu; Haoli Bai; Jiacheng Sun; Lifeng Shang; Farzan Farnia

**ID:** 153381 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ln6SxXlGAj>) | [PDF](<https://openreview.net/pdf?id=Ln6SxXlGAj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153381>)

Large Language Models \(LLMs\) have made remarkable progress on solving competition\-level mathematics, yet their ability to verifying natural\-language mathematical proofs remains relatively underexplored\. Current proof verification primarily relies on expert inspection that is costly to scale and Olympiad\-level problems represent a significant challenge in this area, as they require the meticulous evaluation of every claim in the reasoning chain\. In this paper, we present a systematic study of LLM\-based verification in this setting\. Specifically, we introduce a human\-curated dataset of 48 USAMO 2025 candidate solutions with expert grading, conduct a broad study of existing LLM verifiers in Olympiad mathematics across frontier models\. We also propose an iterative self\-critique pipeline TROJAN to generates high\-fidelity adversarial proofs at scale\. Our evaluation spans 20 models on 7 metrics across two prompt styles with three inference methods and three prompt templates, illustrating that the state\-of\-the\-art models still have more room for improvement\. To address this gap, we propose MABGrader, a Multi\-Armed Bandit framework that reframes grading as arm selection over the discrete score space\. MABGrader outperforms the SOTA ProofGrader by 26\.4% in Quadratic Weighted Kappa and reduces grading error by 14%\.

## Select Smarter, Not More? Prompt\-Aware Evaluation Scheduling with Submodular Guarantees

**Authors:** haoyue liu; Xiaoyu Ma; Yiwen li; Zhichao Wang; Shuguang Cui; Xiaoying Tang

**ID:** 150022 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lL7J1xH02I>) | [PDF](<https://openreview.net/pdf?id=lL7J1xH02I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150022>)

Prompt optimizers invest heavily in how to generate better prompts, yet pay almost no attention to which examples they use to judge them\. This evaluation subset directly shapes every feedback signal that the optimizer receives, while existing methods either fix it before optimization begins \(principled but agnostic to the evolving prompt population\) or adapt it heuristically \(flexible but unstable\)\. We bridge this gap by constructing an online adaptive testing problem: Prompts are examinees, training examples are test items, and the scheduler selects items that best discriminate among the strongest candidates\. We introduce POES \(Prompt\-Aware Online Evaluation Scheduling\), whose monotone submodular objective combines discrimination, coverage, and bounded subset updates, yielding a $\(1\-1/e\)$ cold\-start guarantee and a warm\-start tracking bound under bounded inter\-round drift\. Across a 35\-task APO suite plus 57 MMLU subjects and 6 optimizer\-model configurations, POES achieves the highest mean accuracy in every configuration, improving over the best baseline by \+3\.0 pp to \+7\.8 pp\. Notably, the achieved gains concentrate on tasks where baselines still have headroom to improve, vanishing where methods saturate, suggesting that what you evaluate on matters most precisely when there is a signal to extract\.

## Efficient Benchmarking Is Just Feature Selection and Multiple Regression

**Authors:** Sam Bowyer; Acyr Locatelli; Kris Cao

**ID:** 139637 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E0CrL9qFym>) | [PDF](<https://openreview.net/pdf?id=E0CrL9qFym>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139637>)

Efficient benchmarking techniques aim to lower the computational cost of evaluating LLMs by predicting full benchmark scores using only a subset of a benchmark's questions\. By reframing this problem as an instance of multiple regression with feature selection, we find that existing efficient benchmarking methods can be greatly improved by simply using kernel ridge regression at the prediction stage\. Additionally, using an information\-theoretic feature\-selection algorithm called minimum redundancy maximum relevance \(mRMR\), we can further improve upon these methods by selecting question subsets that will be maximally useful for prediction\. Except in very data\-poor settings, these approaches consistently achieve smaller prediction errors \(in both MAE and RMSE\), and greater ranking correlation between predicted and true scores \(in both Spearman $\\rho$ and Kendall $\\tau$\) across a range of benchmarks using both binary and continuous metrics\. Furthermore, mRMR subsampling is much faster than competitor methods \(which often involve fitting probabilistic models or running clustering algorithms\), and is more likely to select the same questions under different random seeds or training data splits\.

## Generative Active Learning via Bayesian Acquisition for Improving the Efficiency of Synthetic Data

**Authors:** Jeongjun Lee; Gyeonghoon Ko; Juho Lee

**ID:** 149816 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=n94j33Dy4F>) | [PDF](<https://openreview.net/pdf?id=n94j33Dy4F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149816>)

Unlike real\-world datasets, utilizing synthetic data from generative models as train dataset necessitates a rigorous consideration of the training data's informativeness\. In this paper, we propose a novel framework designed to steer diffusion models based on Bayesian epistemic uncertainty to train the target model\. To ensure computational tractability, we estimate the Bayesian Active Learning by Disagreement \(BALD\) score by applying the Laplace approximation specifically to the last\-layer parameters of the downstream model\. Furthermore, we incorporate Feynman\-Kac Steering \(FKS\) for diffusion to enhance the structural diversity of the synthetic samples and mitigate the emergence of undesirable artifacts\. Extensive experiments on Imagenette and ImageNet\-100 for the classification task and MS\-COCO for the object detection task demonstrate that our method significantly outperforms existing baselines in downstream accuracy and OOD generalization\. Furthermore, our analysis of pairwise distances between inter\-class and intra\-class confirms that our method effectively expands the downstream model's knowledge manifold by generating diverse and informative training signals\.

## NADS: Navigator\-Guided Data Selection for Mitigating Catastrophic Forgetting in Fine\-Tuning

**Authors:** JIANHAO ZHANG; Ou Wu; Yi Du

**ID:** 148869 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uZIL1Rr7jG>) | [PDF](<https://openreview.net/pdf?id=uZIL1Rr7jG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148869>)

Catastrophic forgetting is a central obstacle in single\-stage fine\-tuning of large language models \(LLMs\) on a new task, especially when the original pretraining data are unavailable\. Synthetic data offers a practical mitigation path, but candidate pools are often noisy and redundant, making effective selection essential\. Existing methods often rely on indirect proxy signals whose alignment with actual training benefit can be limited, while utility\-\-diversity selection over large candidate pools remains computationally demanding\. To address these challenges, we propose $\\textbf\{NA\}$vigator\-guided $\\textbf\{D\}$ata $\\textbf\{S\}$election \($\\textbf\{NADS\}$\), a fine\-tuning framework for LLMs\. NADS first follows the target fine\-tuning recipe without preservation regularization to obtain a navigator model, whose deviation from the pretrained model exposes recipe\-induced capability drift\. It then uses the predictive divergence between the navigator and the pretrained model to score forgetting\-aware utility for each synthetic candidate, and constructs a constraint set through an efficient utility\-\-diversity selection strategy\. Finally, NADS fine\-tunes on the new\-task data while distilling pretrained behavior on the selected constraints to preserve general capabilities\. Experiments show that NADS delivers a stronger balance between new\-task performance and general capability preservation, while reducing utility\-\-diversity selection overhead\.

## Efficient Dataset Distillation for Pre\-Trained Self\-Supervised Models via Statistical Flow Matching

**Authors:** Qianxin Xia; JIAWEI DU; Yuhan Zhang; xin zhang; Xuewan He; Wenbo Jiang; Jielei Wang; Tao Luo; Guoming Lu

**ID:** 155616 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4DqCJdPblC>) | [PDF](<https://openreview.net/pdf?id=4DqCJdPblC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155616>)

Dataset distillation seeks to synthesize a highly compact surrogate dataset that achieves performance comparable to the original dataset on downstream tasks\. For the scenario where pre\-trained self\-supervised models serve as priors, traditional $\\textit\{Linear Gradient Matching\}$ optimizes synthetic images by encouraging them to mimic the gradient updates induced by real images on the linear probe or classifier\. However, this batch\-level formulation requires loading thousands of real images and applying multiple differentiable augmentations to synthetic images at each distillation step, leading to substantial computational and memory overheads\. In this paper, we revisit the linear gradient and theoretically derive that it is essentially a $\\textit\{local\}$ relative distribution directed from target class centers toward non\-target class centers, which we term \`\`flow”\. This property causes instability and suboptimality, often necessitating expensive multiple augmentations to compensate\. To address this, we introduce $\\textit\{Statistical Flow Matching\}$, a stable and efficient supervised learning framework that optimizes synthetic images by aligning $\\textit\{global\}$ statistical flows in the original data\. Our approach loads raw statistics only once and performs a single augmentation pass on the synthetic data, achieving performance comparable to or better than the state\-of\-the\-art method with 10× less GPU memory usage and 4× faster distillation time\. Moreover, increasing the number of augmentations for our method yields further performance gains while incurring lower additional cost\.

## Benchmarks Are Not Atomic: Composition\-Aware LLM Evaluation using BenchHub

**Authors:** Eunsu Kim; Haneul Yoo; Guijin Son; Hitesh Patel; Amit Agarwal; Alice Oh

**ID:** 139267 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=asBdEGcCLc>) | [PDF](<https://openreview.net/pdf?id=asBdEGcCLc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139267>)

LLM benchmarks are often treated as coherent measurement units, yet they are heterogeneous collections of instances spanning diverse domains, skills, formats, and contexts\. As a result, aggregate benchmark scores can conflate model capability with benchmark composition, obscuring what existing benchmarks actually cover\. We introduce BenchHub, a composition\-aware evaluation framework that represents benchmarks as distributions over instance\-level attributes\. BenchHub integrates 54 benchmarks comprising 839K samples across 10 languages\. It enables researchers to inspect benchmark contents, uncover reusable coverage hidden behind benchmark names, transparently compare benchmarks, and construct controllable evaluation sets for application\-aligned model selection\. Using BenchHub, we show that similarly motivated benchmarks can differ substantially in internal composition, existing benchmarks often contain reusable coverage beyond their stated purposes, models exhibit fine\-grained category\-level performance variation hidden by aggregate scores, and model rankings can shift under different reweighting and resampling configurations\. Our results motivate evaluation practices that make benchmark composition explicit, inspectable, and controllable\.

## SAFE\-DRIFT: Data Selection for Supervised Fine\-tuning with Controllable Off\-Target Drifts

**Authors:** Yeo Jin Jung; Yating Liu; Lalchand Pandia; Claire Donnat

**ID:** 151214 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c6eraD0tjd>) | [PDF](<https://openreview.net/pdf?id=c6eraD0tjd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151214>)

We propose SAFE\-DRIFT, a data\-selection framework for supervised fine\-tuning that explicitly trades off target improvement against unwanted off\-target drifts of model behavior\. We formalize this objective as a constrained optimization problem: maximize gain on the target gradient subject to a budget on off\-target drift, which we quantify by the Fisher information on the reference distribution\. The resulting closed\-form solution is a damped natural gradient with respect to the reference Fisher matrix\. We further address the statistical estimation challenge in the high\-dimensional setting, deriving a scalable algorithm that approximates the Fisher information and the target gradient in a shared low\-dimensional subspace\. We evaluate SAFE\-DRIFT against state\-of\-the\-art data selection methods across diverse domains including coding and medical question answering, yielding competitive target performance while reducing drift on specified off\-target behaviors\.

## PRIME: A Modular Approach for Private Synthetic Data

**Authors:** Miguel Fuentes; Brett Mullins; Cecilia Ferrando; Cameron Musco; Daniel Sheldon

**ID:** 153567 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KQh9ulA7J7>) | [PDF](<https://openreview.net/pdf?id=KQh9ulA7J7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153567>)

Generating differentially private \(DP\) synthetic tabular data remains a challenge, particularly when leveraging state\-of\-the\-art query\-answering mechanisms like ResidualPlanner or AIM\+GReM\. These mechanisms offer high utility through dense measurement collections $\\mathcal\{M\}$; however, they are incompatible with existing synthesis tools\. Specifically, graphical\-model\-based synthesis via PrivatePGM becomes intractable as the treewidth of the measurement graph grows\.  We introduce PRIME \(Private Re\-weighting of Initial Model Estimates\), a scalable framework that decouples the synthesis process from the complexity of the measurement graph by restricting the support to a subset of the overall domain\.  PRIME transforms the synthesis problem into a convex re\-weighting task over a candidate support set of size $K$\. This formulation achieves an $\\mathcal\{O\}\(K \\cdot \|\\mathcal\{M\}\|\)$ per\-iteration complexity, providing a treewidth\-independent, drop\-in solution for any DP mechanism\. We show that, when provided the same measurements, PRIME achieves error comparable to PrivatePGM while handling dense measurement sets where PrivatePGM fails\. Our empirical evaluation demonstrates that PRIME enables high\-fidelity synthesis from query\-answering mechanisms that were previously unusable for data generation\. Ablation studies identify support quality as a key performance driver, underscoring the role of support generation in our framework\.

## Same Words, Different Judgments: How Preferences Vary Across Modalities

**Authors:** Aaron Broukhim; Nadir Weibel; Eshin Jolly

**ID:** 139412 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SDNH5wA9Vo>) | [PDF](<https://openreview.net/pdf?id=SDNH5wA9Vo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139412>)

Preference\-based reinforcement learning \(PbRL\) is the dominant framework for aligning AI systems to human preferences\. However, evaluation protocols for such data were designed for text and have not been validated for speech\. We present the first ICC\-based, controlled cross\-modal study of human and synthetic preference annotations, comparing text and audio evaluations of identical semantic content across 100 prompts\. We show that achieving $\\textit\{good\}$ agreement within either modality \(ICC\(2,$k$\) $\\approx$ \.80\) requires $\\sim$9 raters\. At the same time, modalities show marked differences in how people report preferences: audio raters exhibit narrower decision thresholds, reduced length bias, and more user\-oriented evaluation criteria, with near\-chance cross\-modality agreement\. We demonstrate that synthetic ratings can be used to effectively predict inter\-rater agreement, thus serving as an early signal for stimulus selection and proxy for human annotations\. Together, these findings argue that evaluation protocols for audio preference data require modality\-specific design rather than direct adaptation from text\.

## Model Collapse is a Singular Complexity Trajectory

**Authors:** Sarwesh Rauniyar

**ID:** 148790 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v3gGLfZguI>) | [PDF](<https://openreview.net/pdf?id=v3gGLfZguI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148790>)

Recursive training on synthetic data can drive generative models toward collapse, yet most explanations treat collapse as a statistical phenomenon: tail loss, variance shrinkage, or distributional drift\. We develop a singular\-geometric view of collapse\. In a labeled Gaussian mixture abstraction of recursive self\-training, we show that mode extinction induces a monotone trajectory in the real log\-canonical threshold: as recursive resampling eliminates active modes, the overcomplete mixture moves through increasingly singular strata, with strictly decreasing singular complexity and growing Fisher\-information nullity\. We further show that this loss of identifiability begins before exact extinction: as a component's weight becomes small, Fisher curvature in its associated parameter directions shrinks proportionally, so exact singularity is the endpoint of a continuous near\-nullity trajectory\. Thus collapse corresponds not only to reduced distributional diversity, but also to a progressive loss of locally identifiable parameter directions\. This theory separates the singular geometry of collapse from the multinomial/Wright\-\-Fisher absorption dynamics\. We also prove that, in the mixture abstraction, injecting enough real data prevents component extinction and keeps the singular\-complexity trajectory from descending over a fixed horizon with high probability\. We then use the theory to motivate loss\-landscape diagnostics for neural recursive training, including Hessian spectra, Gauss\-\-Newton effective rank, decoder\-block curvature, feature\-rank concentration, and local learning coefficient estimates\. Across Gaussian mixtures, VaDE, standard VAEs, and a compact DDPM, we find that synthetic\-only recursion exhibits the predicted geometric degeneration, that VaDE geometry diagnostics predict future component loss, and that real\-data injection stabilizes both distributional and geometric collapse metrics\.

## VeriScope: Measuring Verification\-Ready Verilog Artifacts

**Authors:** Wei Zhang; Jian Yang; jiajun wu; Junhang Cheng; Chufan He; Yihang Lou; Xianglong Liu

**ID:** 138988 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sH1tih031m>) | [PDF](<https://openreview.net/pdf?id=sH1tih031m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138988>)

Large language models \(LLMs\) are increasingly used in hardware\-oriented coding workflows, yet open resources for evaluating first\-pass RTL beyond execution remain limited\. We present VeriScope, an open benchmark and evaluation suite of 568 problems spanning basic combinational gates through module\-level designs and a 95\-task L4\+ top\-end slice \(92 L4 system tasks plus 3 L5 stress tests\)\. A developer agent receives a natural\-language task brief, returns a single RTL draft, and that artifact is evaluated through objective execution plus RTL\-level and artifact\-level review incorporating waveform and circuit evidence\. Across 26 public models plus two 32B calibration baselines, the best systems reach about 84/100 combined score on the full benchmark but drop to the high 70s on L3–L4\+\. The 60/40 combined leaderboard largely tracks functional execution \(Spearman 0\.998 with a functional\-only ranking\), while artifact scores are most useful as a post\-simulation screening signal: 29\.6% of L3–L4\+ simulation\-passing submissions receive artifact score below 6 and therefore need additional verification evidence\. A 100\-sample manual taxonomy of such disagreements finds 70% testbench coverage gaps, 12% real RTL defects, and 18% judge hallucinations \(Wilson 95% intervals reported in the analysis\), showing that artifact review surfaces both under\-tested passes and model defects, but should not be treated as a standalone leaderboard refinement\.

## M$^3$: Reframing Training Measures for Discretized Physical Simulations

**Authors:** Yuan Mei; Xingyu Song; Xiaowen Song; Naoya Takeishi

**ID:** 149542 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pMw0ClT3bM>) | [PDF](<https://openreview.net/pdf?id=pMw0ClT3bM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149542>)

Neural surrogate models for physical simulations are trained on discretized samples of continuous domains, where the induced empirical measure leads to uneven supervision, biasing optimization and causing spatial inconsistencies in physical fidelity\. To mitigate this measure\-induced bias, we propose M$^3$ \(Multi\-scale Morton Measure\), a scalable framework that balances training measures by partitioning space according to physical variation and allocating supervision across multiple scales\. Applied to three industrial\-scale datasets with diverse discretizations, M$^3$ consistently improves predictions in the continuous physical domain, achieving up to 4\.7$\\times$ lower error in large\-scale volumetric cases\. These gains persist under aggressive subsampling \(160M $\\rightarrow$ 16M $\\rightarrow$ 1\.6M points\), where M$^3$\-trained models outperform those trained on higher\-resolution data, reducing physics\-weighted relative $L\_2$ error by 3\-\-4$\\times$ and the corresponding MSE by up to 13$\\times$\. These results highlight data distribution as a key factor in operator learning and position M$^3$ as a scalable, data\-efficient approach for physically consistent modeling\.

## Towards Generalizable Data Valuation: Learning an End\-to\-end Deep Model to Compute Shapley Values

**Authors:** Zhiyu Chen; Jicong Fan

**ID:** 155035 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8vClXC5kYN>) | [PDF](<https://openreview.net/pdf?id=8vClXC5kYN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155035>)

Data Shapley has emerged as a premier framework for data valuation, yet its practical utility is severely hampered by exponential computational complexity and the need for costly model retraining\. Unlike existing methods that compute values independently for each dataset, we propose GenSHAP, a novel graph\-based paradigm that reformulates data valuation as a transferable learning task\. GenSHAP learns an amortised deep model capable of predicting Data Shapley values for any unseen classification dataset in a single forward pass\. Our framework utilises a relation\-based dataset representation method and a hybrid GIN\-Transformer architecture to capture local and global inter\-sample dependencies\. We further introduce GenSHAP\-S, which augments these structural representations with low\-budget marginal contribution probes to achieve high\-fidelity valuation\. Extensive experiments demonstrate that GenSHAP closely approximates high\-budget permutation\-Shapley reference estimates and excels in downstream tasks such as data removal and addition while reducing valuation time from hours to seconds\. The source code is available in the anonymous repository\~\\footnote\{\\url\{https://anonymous\.4open\.science/r/GenSHAP/\}\}\.

## Neural Reconstruction of LiDAR Point Clouds under Jamming Attacks via Full\-Waveform Representation and Simultaneous Laser Sensing

**Authors:** Ryo Yoshida; Takami Sato; Wenlun Zhang; Yuki Hayakawa; Shota Nagai; Kazuma Ikeda

**ID:** 154337 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EM3vywy1qY>) | [PDF](<https://openreview.net/pdf?id=EM3vywy1qY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154337>)

LiDAR sensors are critical for autonomous driving perception, yet remain vulnerable to spoofing attacks\. Jamming attacks inject high\-frequency laser pulses that completely blind LiDAR sensors by overwhelming authentic returns with malicious signals\. We discover that while point clouds become randomized, the underlying full\-waveform data retains distinguishable signatures between attack and legitimate signals\. In this work, we propose PULSAR\-Net, capable of reconstructing authentic point clouds under jamming attacks by leveraging previously underutilized intermediate full\-waveform representations and simultaneous laser sensing in modern LiDAR systems\. PULSAR\-Net adopts a novel U\-Net architecture with axial spatial attention mechanisms specifically designed to identify attack\-induced signals from authentic object returns in the full\-waveform representation\. To address the lack of full\-waveform representations in existing LiDAR datasets under jamming attacks, we introduce a physics\-aware dataset generation pipeline that synthesizes realistic full\-waveform representations under jamming attacks\. Despite being trained exclusively on synthetic data, PULSAR\-Net achieves reconstruction rates of 92\\% and 73\\% for vehicles obscured by jamming attacks in real\-world static and driving scenarios, respectively\.

## LLM\-as\-a\-Tutor: Policy\-Aware Prompt Adaptation for Non\-Verifiable RL

**Authors:** Yujin Kim; Namgyu Ho; Sangmin Hwang; Joonkee Kim; Yongjin Yang; Sangmin Bae; Seungone Kim; Jaehun Jung; Se\-Young Yun; Hwanjun Song

**ID:** 150546 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hKGWL5CWJn>) | [PDF](<https://openreview.net/pdf?id=hKGWL5CWJn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150546>)

Reinforcement learning \(RL\) for non\-verifiable instruction following increasingly relies on LLM judges with prompt\-specific rubrics as reward signals\. While recent methods adapt these rubrics to the evolving policy during training, the training prompts themselves remain static, drawn from fixed corpora\. This static approach often results in a critical misalignment between prompt difficulty and policy capability, leaving the judge unable to recover a discriminative reward signal when prompts fail to elicit quality variance among rollouts\. To address this misalignment, we introduce LLM\-as\-a\-Tutor, a framework that extends the LLM’s role from judge to tutor: a single model serves as an examiner that pairwise\-compares policy rollouts to detect non\-challenging prompts, and as a generator that appends atomic constraints to them\. This append\-only design monotonically raises difficulty in step with the policy’s capability, producing a self\-calibrating training signal without external difficulty schedules\. On three complex instruction\-following benchmarks, our method consistently outperforms both policy\-unaware baselines and prior policy\-adaptive methods that adapt rubrics or rewrite prompts, suggesting prompt adaptation as a missing axis of policy\-awareness in non\-verifiable RL\.

## The Mechanism of Weak\-to\-Strong Generalization: Feature Elicitation from Latent Knowledge

**Authors:** Ryoya Awano; Taiji Suzuki

**ID:** 155865 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2Ibq2ITNEb>) | [PDF](<https://openreview.net/pdf?id=2Ibq2ITNEb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155865>)

Weak\-to\-strong \(W2S\) generalization, in which a strong model is fine\-tuned on outputs of a weaker, task\-specialized model, has been proposed as an approach to aligning superhuman AI systems\. Existing theoretical analyses either fix the student's representations or operate in restricted settings\. Whether multi\-step SGD can succeed in feature learning while preserving diverse pre\-trained capabilities remains open\. We study W2S in the setting of reward\-model learning with two\-layer neural networks\. The strong model has pre\-trained representations organized into low\-dimensional subspaces $V\_k$, and is fine\-tuned under the supervision of a weak model specialized on task $\\kappa$\. We prove that the strong model efficiently learns task $\\kappa$, eliciting its pre\-trained knowledge while retaining general capabilities\. This establishes W2S generalization in the feature\-learning regime, in the sense that the strong model acquires the target feature direction through W2S training, rather than having it given a priori\. Moreover, W2S preserves pre\-trained off\-target features, whereas standard supervised fine\-tuning causes catastrophic forgetting when off\-target feature directions are correlated with the target's\. Numerical experiments on synthetic data confirm our theoretical results\.

## Closed\-Form Linear\-Probe Dataset Distillation for Pre\-trained Vision Models

**Authors:** Bincheng Peng; Miki Haseyama; Guang Li; Ping Liu; Takahiro Ogawa

**ID:** 153458 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L9EoOgA982>) | [PDF](<https://openreview.net/pdf?id=L9EoOgA982>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153458>)

Dataset distillation compresses a large training set into a small synthetic set that preserves downstream training utility\. While most existing methods target training networks from scratch, modern visual transfer learning often uses frozen pre\-trained encoders followed by lightweight linear probing\. Existing distillation methods for this setting either unroll iterative linear\-probe updates with trajectory\-based gradient matching, or rely on closed\-form formulations originally designed for from\-scratch training with neural\-tangent\-kernel \(NTK\) approximations\. Neither route exploits the fact that frozen\-feature linear probing admits a closed\-form solution determined directly by the pre\-trained features themselves, with no infinite\-width approximation and no inner\-loop trajectory\. We propose Closed\-Form Linear\-Probe Dataset Distillation \(CLP\-DD\), a bilevel formulation that computes the linear probe induced by the synthetic set with a sample\-space kernel ridge solver\. The synthetic images are then updated by evaluating this induced classifier on real features through a temperature\-scaled softmax cross\-entropy, where the classifier columns act as learned class anchors in feature space\. We further show that the choice of outer objective is decisive: pairing the closed\-form inner solver with a standard MSE outer loss substantially underperforms trajectory\-based methods, while the discriminative outer loss closes most of the gap\. On ImageNet\-100 with four pre\-trained backbones, CLP\-DD substantially improves over LGM without DSA and approaches LGM with DSA at a fraction of the computational cost\. On ImageNet\-1K, CLP\-DD matches or surpasses LGM with DSA on three of four backbones while running roughly $14\\times$ faster and using less than one\-eighth of the GPU memory\.

## BIRD\-RL: Scaling Agentic Reinforcement Learning over Stateful Data\-Centric Environments

**Authors:** Ge Qu; Jinyang Li; Xiaohan Xu; Xiaolong Li; Bowen Qin; Nan Huo; Ziwei Tang; Chenhao Ma; Reynold Cheng

**ID:** 152242 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UWzAnfVNIa>) | [PDF](<https://openreview.net/pdf?id=UWzAnfVNIa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152242>)

Modern data\-centric applications increasingly require language agents capable of operating over live, stateful database environments, where successful problem resolution depends not merely on initial SQL generation, but on reasoning about evolving database states, interacting with execution feedback, and repairing state\-mutating operations\. While agentic reinforcement learning \(RL\) has emerged as a promising paradigm for training small language models \(SLMs\), existing frameworks are predominantly tool\-centric and struggle with data\-centric environments\. Specifically, applying tool\-centric frameworks to stateful tasks like SQL debugging introduces severe spatial inefficiencies since proper environment isolation typically requires a separate database container per rollout\. Naively reusing databases without tracking evolving states across multi\-turn interactions causes trajectory contamination and cross\-trajectory interference, which severely destabilizes policy updates\.  To overcome these bottlenecks, we introduce \*\*BIRD\-RL\*\*, a novel four\-stage agentic RL curriculum that alternately enhances foundational agent reasoning and trajectory\-adaptive on\-policy exploration to circumvent the instability inherently associated with direct end\-to\-end learning\. Crucially, to support this curriculum, BIRD\-RL is driven by a \*\*Trajectory\-scoped Persistent Execution Infrastructure\*\*, which enables safe database replica reuse while preserving trajectory isolation\. This design improves spatial RL efficiency by \*\*12\.8x\*\*, successfully enabling scalable agentic RL for complex data\-centric tasks without needs of Kubernettes\. Empirical evaluations on the BIRD\-CRITIC\-SQLite benchmark demonstrate that our 7B and 14B models achieve Success Rates of \*\*44\.40%\*\* and \*\*48\.00%\*\*, respectively, performing on par with or exceeding strong proprietary model\-based agents such as Claude\-Opus\-4\.6 Agent \(48\.20%\)\. Furthermore, BIRD\-RL successfully trains unified SLMs capable of both advanced SQL debugging and generation, highlighting its broader potential for multi\-objective optimization across heterogeneous, real\-world data\-centric tasks\.

## Epiplexity Guided Data Selection and Generation for Out\-of\-Distribution Generalization

**Authors:** Ellen Su; Andres Potapczynski; Shikai Qiu; Edward Hughes; Andrew Wilson

**ID:** 153698 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JRQ16ZxTmz>) | [PDF](<https://openreview.net/pdf?id=JRQ16ZxTmz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153698>)

Modern systems are often expected to transfer across tasks that were not specified during training, leading to the question: what data facilitates generalization in new, unanticipated settings? One hypothesis is that data with more structural information could contain shared circuits and subprograms that could be recycled in a wider array of downstream settings\. Epiplexity, a recently proposed measure of the structural information a compute\-bounded learner can extract from data, provides a mechanism to reason about this relationship\. In this paper, we show how to operationalize epiplexity as an online training signal for data selection and generation\. For selection, we fit scaling laws to the training loss curves of natural data domains to predict the expected epiplexity gain as a function of training tokens, and use this signal to adaptively determine the sampling weights over domains during training\. For synthetic data generation, we define a generator's reward as the change in learner epiplexity over a buffer of previously generated data and use REINFORCE policy gradients to guide the generator toward an epiplexity\-maximizing distribution\. In both cases, higher epiplexity predicts improved downstream performance on zero\-shot and fine\-tuning based tasks, supporting the hypothesis that data rich in structural information yields representations that transfer across domains\.

## Object Detection Benchmarks are Incomplete: The Role of Label Errors and Annotation Uncertainty

**Authors:** Sarina Penquitt; Jonathan Klees; Antonia van Betteray; Parssa Jashnieh; Peter Stehr; Matthias Rottmann; Lars Schmarje

**ID:** 139282 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZS2MA5cnQ0>) | [PDF](<https://openreview.net/pdf?id=ZS2MA5cnQ0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139282>)

While object detection has advanced through improved architectures and open\-vocabulary models, we provide strong evidence that benchmark quality is limited by annotation incompleteness\.  Across four widely used datasets \(COCO, Pascal VOC, Cityscapes, KITTI\), re\-annotation reveals substantial increases in annotated objects \(e\.g\., up to \+60% on KITTI and \+40% on COCO\), driven primarily by previously unlabeled small, occluded, or densely packed instances\.  While some differences arise from dataset\-specific annotation conventions, we consistently find that missing annotations are the main source of label errors across all datasets\. To achieve high data quality, we introduce a scalable annotation pipeline that emphasizes high recall and captures ambiguity through soft labels aggregated from at least 11 annotators per object\. The resulting annotations improve coverage and align well with human calibration\. We show that benchmark performance is highly sensitive to annotation quality, although model rankings remain largely stable\. We introduce two large\-scale benchmarks: \(i\) an uncertainty\-aware object detection benchmark, and \(ii\) a label error detection benchmark grounded in real label errors\. We show that current detectors are strongly depended on annotation quality and are misaligned with human perception\. Current label error detection methods, which have been shown to perform well on synthetic noise, struggle to achieve high recall and precision on real label errors\. Our results highlight the need for future object detection benchmarks to move beyond deterministic annotations toward high\-recall, uncertainty\-aware evaluation that maximizes valid instances and better reflects real\-world ambiguity\.

## Sparse blind deconvolution via thresholded Wirtinger flow

**Authors:** Mengting Chen; Haitong Lan; Ziping Zhao

**ID:** 152549 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SKzT3XiTo2>) | [PDF](<https://openreview.net/pdf?id=SKzT3XiTo2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152549>)

Blind deconvolution is a classical problem arising in many signal processing and machine learning applications, where one aims to recover an unknown kernel and an unknown signal from their convolution\. Since both the kernel and the signal are unknown, the problem is intrinsically ill\-posed, and meaningful recovery is possible only under suitable structural assumptions\. In this paper, we study sparse blind deconvolution, where the kernel is $s\_h$\-sparse and the signal admits an $s\_x$\-sparse representation in a known dictionary\. Although sparsity is a natural and practically relevant prior, its interaction with the bilinear observation model creates substantial challenges for both computation and analysis\. To address these challenges, we propose Thresholded Wirtinger Flow \(ThWF\), a simple and scalable iterative algorithm equipped with a sparse spectral initialization\. For noiseless observations, we prove that the proposed initialization achieves exact support recovery with sample complexity $M \\gtrsim s\_h^2\+s\_x^2$, up to logarithmic factors\. Building on this initialization, we establish what is, to the best of our knowledge, the first algorithmic convergence guarantee for sparse blind deconvolution: ThWF converges linearly to the ground truth, up to the inherent scaling ambiguity, provided that $M \\gtrsim s\_h\+s\_x$ up to logarithmic factors\. Our analysis further extends to noisy measurements, showing that ThWF is robust and contracts linearly up to a statistical error under a bounded noise level\. Experiments on synthetic data and real\-world image deblurring tasks corroborate the predicted linear convergence and phase transition behavior, and demonstrate the restoration performance of the proposed method\.

## An Information\-theoretic Framework for Auditing Unfairness in Training Data

**Authors:** Mohamed Nafea; Sokrat Aldarmini

**ID:** 153353 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M0oyqiGx4z>) | [PDF](<https://openreview.net/pdf?id=M0oyqiGx4z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153353>)

Quantifying bias in training data\-\-\-independently of any downstream model\-\-\-is critical for fair machine learning, especially when data collection and model design occur in silos\. Yet most fairness research focuses on model\-level mitigation, leaving the data side underexplored\. We address this gap by deriving multiple information\-theoretic measures for auditing unfairness bias in data without requiring access to model predictions\. We define our measures over feature sets and use Shapley values to deduce feature\-level contributions to global unfairness bias\. For some of these measures, we prove that Shapley values moderate redundancy across feature coalitions, matching empirical evidence in prior work\. We develop our measures within an axiomatic framework that embeds a fairness notion, such as statistical parity \(SP\) or equalized odds \(EO\), into desired and undesired independence properties\. We characterize baseline measures that guide those we develop, for example, by showing that a baseline upper bounds the bias of any downstream restricted predictor\. Finally, we show that SP\- and EO\-aligned independence properties can conflict, paralleling Kleinberg et al\.'s result on incompatible fairness notions\. We validate our measures through an empirical study on real and synthetic datasets, assessing how well they predict the true bias of an extensively tuned neural network trained on the same data, and via a simple feature selection experiment\. For synthetic data, we propose a parametric linear structural causal model that enables controlled generation of diverse correlation structures and bias types\. Overall, our analysis provides a theoretically and empirically validated guideline for selecting an unfairness measure given a group fairness notion and testable data conditions\.

## Are Multimodal Benchmarks Really Useful? Item\-Level Multimodal Benchmark Diagnosis via Structure\-Response Co\-Calibration

**Authors:** Shiqi Zhang; Weixin Zeng; Ziheng Zhang; Jiuyang Tang; Xiang Zhao

**ID:** 139183 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fzADHlYut6>) | [PDF](<https://openreview.net/pdf?id=fzADHlYut6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139183>)

Multimodal benchmarks are central to evaluating whether models can reason over information from multiple modalities\. However, existing literature has revealed that some benchmarks may contain shortcut items that can be answered from a single modality or from answer\-option regularities alone, thus failing to reflecting models' true cross\-modal inference ability\. Existing methods for assessing benchmarks typically rely either on intrinsic item structure or extrinsic model response behavior, which are not adequate for a comprehensive diagnosis\.  To fill in this gap, we propose SRCoD, a structure\-response co\-calibrated diagnosis framework for item\-level diagnosis of modality dependence in multimodal benchmarks\. SRCoD estimates sample\-wise multimodal information structure from benchmark content and target answers, and uses this signal as a soft structural anchor for modality\-conditioned item response modeling\. The learned model produces a calibrated item\-level diagnostic profile that reflects how strongly an item depends on different forms of modality evidence, enabling fine\-grained benchmark analysis beyond aggregate accuracy\.  SRCoD also provides interpretable attribution of the diagnosis results\. Extensive experiments on two complementary protocols, i\.e\., benchmark\-refinement oriented validation and human\-labeled item validation, demonstrate that SRCoD outperforms state\-of\-the\-art benchmark diagnosis methods\. Our code and data are available at https://anonymous\.4open\.science/r/SRCoD\-61B0\.

## LoRIF: Low\-Rank Influence Functions for Scalable Training Data Attribution

**Authors:** Shuangqi Li; Hieu Minh Le; Jingyi Xu; Mathieu Salzmann

**ID:** 149043 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tIJbQhZCF4>) | [PDF](<https://openreview.net/pdf?id=tIJbQhZCF4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149043>)

Training data attribution \(TDA\) identifies which training examples most influenced a model's prediction\. Influence function methods are a theoretically grounded family of TDA methods and exploit gradients\. To overcome the scalability challenge arising from gradient computation, the most popular strategy is random projection \(e\.g\., TRAK, LoGRA\)\.  However, this still faces two bottlenecks when scaling to large training sets and high\-quality attribution: \(i\) storing and loading projected per\-example gradients for all $N$ training examples, where query latency is dominated by I/O; and \(ii\) forming the $D \\times D$ inverse Hessian approximation, which costs $O\(D^2\)$ memory\. Both bottlenecks scale with the projection dimension $D$, yet increasing $D$ is necessary for attribution quality\-\-\-creating a quality\-\-scalability tradeoff\.  We introduce \\textbf\{LoRIF\} \(Low\-Rank Influence Functions\), which exploits low\-rank structures of gradient to address both bottlenecks\.  First, we store rank\-$c$ factors of projected per\-example gradients rather than full matrices, reducing storage and query\-time I/O from $O\(D\)$ to $O\(c\\sqrt\{D\}\)$ per layer per sample\. Second, we use truncated SVD with the Woodbury identity to approximate the inverse Hessian term in an $r$\-dimensional subspace, reducing memory from $O\(D^2\)$ to $O\(Dr\)$\. On models from 0\.1B to 70B parameters trained on datasets with millions of examples, LoRIF achieves up to 20$\\times$ storage reduction and query\-time speedup compared to LoGRA, while matching or exceeding its attribution quality\. LoRIF makes gradient\-based TDA practical at frontier scale\.

## ShopGym: An Integrated Framework for Realistic Simulation and Scalable Benchmarking of E\-Commerce Web Agents

**Authors:** Yuanzheng Zhu; Mingyu Zhao; Chinmay Savadikar; Han Li; Shuang Xie; Alberto Castelo; Tianfu Wu; Lingyun Wang

**ID:** 139398 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T78ZNu4RMq>) | [PDF](<https://openreview.net/pdf?id=T78ZNu4RMq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139398>)

Developing and evaluating e\-commerce web agents requires environments that preserve meaningful task structure while enabling controllable, reproducible, and scalable scientific comparison\. Existing methodologies force a tradeoff: live storefronts provide realism but are non\-stationary, difficult to inspect, and irreproducible, while hand\-built sandbox benchmarks provide control but cover only a narrow range of layouts, catalogs, policies, and interaction patterns\. We argue that the core bottleneck is methodological: the field lacks a scalable way to construct evaluation settings that are simultaneously realistic, diverse, controllable, inspectable, and reproducible\. We introduce ShopGym, an integrated framework for realistic simulation and scalable benchmarking of e\-commerce web agents\. ShopGym is a framework for constructing e\-commerce simulation environments and grounded benchmark tasks\. Its simulation layer, ShopArena, converts one or more live seed storefronts into self\-contained sandbox shops through anonymized shop specifications and a staged, validated generation process\. On top of these simulated storefronts, ShopGuru synthesizes benchmark tasks across seven skill categories, grounding each task in the shop's catalog, navigation structure, policies, and interaction affordances\. Together, ShopArena and ShopGuru produce self\-contained, resettable, inspectable, and stable evaluation artifacts that preserve structural properties and agent\-evaluation signals relevant to shopping tasks\. We validate the framework through graph\-based structural analysis and agent\-based behavioral evaluation with 224 generated tasks across six sandbox shops: three constructed with synthetic data and three with real data\. Our results show that the synthetic shops preserve key structural properties of live storefronts, with agent performance on synthetic shops positively correlated with performance on live storefronts\.

## OopsWorld\! Operation\-Grounded Seamless World Generation

**Authors:** Dongping Chen; Tianyi Zhou

**ID:** 152375 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TYAayuMqM6>) | [PDF](<https://openreview.net/pdf?id=TYAayuMqM6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152375>)

We study seamless world generation, where a model must update a persistent visual world according to online user operations rather than full next\-scene descriptions\. To make this task well\-defined, we introduce an operation\-centric taxonomy that represents each scene with a global\-local schema and each boundary with a typed operator program specifying change and preservation\. This taxonomy enables SeamlessWorld, a synthetic data and benchmark pipeline with 8 operation families, 23 atomic operators, dual prompt surfaces, and schema\-derived evaluation probes\. We then develop OopsWorld, a causal video generator that learns from SeamlessWorld using operation\-conditioned decoupled distillation: the student is driven by operation prompts and visual history, while scene\-conditioned teachers provide target\-state supervision\. We further apply dynamics curriculum learning to progressively compose simple edits into high\-dynamic world transitions\. OopsWorld substantially improves dynamic responsiveness and long\-video quality, achieving 91\.67 VBench Dynamics and 80\.42 Long\-Quality with 100K samples\. A systematic explicit\-\-implicit study further reveals a persistent operation\-prompting gap in current systems, especially for preserving visual anchors, calling for operation\-driven world models beyond next\-scene prompt switching\.

## Test\-Time Graph Recalibration: Enhancing Robust Zero\-Shot Inference for Graph Foundation Models

**Authors:** Chunchun Chen; Zhen Luo; Xing Wei; Yuxing Zhang; Xiaofeng Cao; Rui Fan; Ambuj K Singh; Wei Ye

**ID:** 155782 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2vn2dWrcD4>) | [PDF](<https://openreview.net/pdf?id=2vn2dWrcD4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155782>)

This work investigates the challenge of robust graph learning within the framework of graph foundation models\. Prior studies primarily rely on data\-centric structural purification or adversarial augmentation during training to achieve adversarial robustness\. However, in practical zero\-shot inference scenarios, such methods exhibit significant vulnerability to unseen adversarial structures owing to the static nature of their defense mechanisms and the prohibitive computational cost associated with retraining\. In this paper, we propose a novel framework termed Test\-time gRaph recAlibration for enhancing robust zero\-shot inferenCE \(TRACE\)\. The core mechanism of TRACE involves the selective learning of a structural anti\-attack directly on noisy graphs during the inference phase, which neutralizes adversarial perturbations while maintaining performance on clean graphs\. Specifically, TRACE introduces a non\-parametric diagnostic metric based on smoothed spectral entropy to quantify the structural\-semantic misalignment induced by adversarial attacks, thereby serving as an adaptive trigger for recalibration\. Furthermore, a uniformity\-guided optimization objective is formalized to leverage semantic anchors from pretrained text encoders, guiding the distorted graph back to the clean manifold\. To ensure computational efficiency for sparse graph encoders, a first\-order gradient\-based edge flipping strategy is employed to reconstruct the optimal graph structure directly within the discrete domain\. Extensive experiments conducted across various benchmark datasets and graph attacks demonstrate the superiority of TRACE over existing state\-of\-the\-art baselines\.

## Emergent Misalignment as Data\-Mediated Transfer

**Authors:** Baris Askin; Muhammed Ustaomeroglu; Anupam Nayak; Gauri Joshi; Guannan Qu; Carlee Joe\-Wong

**ID:** 150105 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kez5eKP7QS>) | [PDF](<https://openreview.net/pdf?id=kez5eKP7QS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150105>)

Fine\-tuning LLMs on narrow harmful datasets can induce Emergent Misalignment \(EM\), where models exhibit misaligned behavior far beyond the fine\-tuning distribution\. We argue that emergent misalignment can be better understood as a data\-mediated transfer phenomenon: harmful fine\-tuning examples do not induce uniform behavioral spillover, but interact with the structural properties of the dataset and the difficulty of the tasks relative to the model\. Across our experiments, we find that misalignment appears more readily when fine\-tuning and evaluation prompts share similar underlying functional structure, when prompts leave more room for coherent harmful completions, and when the target behavior has been more reliably learned by the model\. The training pipeline itself also matters: pretraining composition shapes later misalignment\. We further study Subliminal Learning \(SL\), where misalignment is transmitted by fine\-tuning on seemingly benign data generated by a harmful teacher\. Moving beyond the standard SFT setting, we for the first time compare this transfer under off\-policy and on\-policy distillation as well, allowing us to separate the roles of the teacher guidance and the training data distribution in transmitting misalignment\. Together, these results argue for a data\-centric view: Emergent/subliminal misalignment should not be treated as a simple consequence of isolated harmful fine\-tuning examples, but as the result of interactions between fine\-tuning data structure, pretraining distributions, and training channels\.

## Subdata Selection: A Unified Framework for Optimal Selection and Statistical Efficiency Assessment

**Authors:** Min Yang; Wei Zheng; John Stufken; Ming\-Chung Chang; Ting Tian; Xueqin Wang

**ID:** 149020 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tRze0atkNs>) | [PDF](<https://openreview.net/pdf?id=tRze0atkNs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149020>)

When labeling is expensive or datasets exceed computing capacity, selecting an informative subset of data is a practical necessity\. Identifying such subdata is a classical NP\-hard problem due to its inherent discreteness\. While many subdata selection methods have been proposed for parametric models, two fundamental challenges remain: first, how can we accurately assess the statistical efficiency of selected subdata relative to the theoretical optimum? Second, given $N$ data points and a subdata size $n$, which $n$ points should be selected to achieve high statistical efficiency? We address both challenges within a unified framework\. We develop a new information\-based subdata selection methodology grounded in optimal approximate design theory, yielding subdata that approaches the theoretical optimum\. Our algorithm is general, accommodates arbitrary $N$ and $n$, supports multiple optimality criteria, and is accompanied by a convergence proof\. Crucially, our framework provides, for the first time, tight lower and upper bounds on the statistical efficiency of subdata selected by any method, enabling accurate and rigorous benchmarking across the literature\. This benchmarking capability reveals the true performance landscape of existing methods and shows that many of them have been operating substantially below their theoretical potential\. The subdata produced by our methodology is highly efficient and outperforms all existing methods\.

## VidUEU\-Agent: A Data\-Curation Agent for Multimodal Understanding, Editing, and Unified Tasks

**Authors:** Tengjv Ru; Weitong Lian; Zecong Tang; Lingyi Meng; Haoran Li; Zhejun Cui; Yichen Zhu; Hangshuo Cao; Qi Kang; Yechi Liu; Kaixuan Wang; Yu\-Jie Yuan; Chunwei Wang; Yu Zhang; Bo Dai

**ID:** 149056 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tCUAP3oEiv>) | [PDF](<https://openreview.net/pdf?id=tCUAP3oEiv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149056>)

The advancement of multimodal learning is heavily constrained by the scarcity and high annotation cost of high\-quality instruction data\. While raw videos offer an abundant and dynamic source of visual knowledge, transforming them into precise instruction data remains highly challenging\. To bridge this gap, we present VidUEU\-Agent, an automated pipeline that synthesizes instruction data from raw videos for multimodal understanding, editing, and unified tasks\. VidUEU\-Agent follows a four\-stage pipeline: it performs global perception to filter low\-quality shots, mines keyframes and multimodal signals, constructs metadata, and routes the metadata to synthesize instruction samples\. More importantly, our agent framework can autonomously iterate the data distribution based on downstream training results, thereby optimizing data quality, balance, and training effectiveness\. Scaling this pipeline, we construct VidUEU\-100K, a large\-scale dataset of 100K training samples spanning multiple domains and tasks, providing a robust foundation for developing comprehensive multimodal capabilities\. Extensive experiments demonstrate that fine\-tuning baseline models on VidUEU\-100K yields significant and consistent performance gains across diverse representative benchmarks, validating the effectiveness of our proposed agent framework and dataset\.

## Temporal Prototype Alignment for Frozen\-Feature Dataset Distillation

**Authors:** Rui Ding; Jing Hu; Mei Chen; Xi Wu; Hualin zhou; Fan Wu; Kehua Guo; Tao Gu

**ID:** 149275 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rX3bv5k1ck>) | [PDF](<https://openreview.net/pdf?id=rX3bv5k1ck>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149275>)

Dataset distillation condenses large\-scale training sets into compact synthetic data\. Recent frozen\-feature distillation methods, such as Linear Gradient Matching, make ImageNet\-scale synthesis feasible by matching gradients in pretrained representation spaces, but their reliance on exhaustive spatial view ensembles incurs memory and I/O costs that grow linearly with the number of augmentations\. We propose Temporal Prototype Alignment \(TPA\), an online temporal gradient estimation framework for frozen\-feature dataset distillation\. TPA replaces spatial Monte Carlo gradient averaging with a temporal prototype estimator that accumulates stable semantic signals across optimization steps\. An adaptive momentum gate modulates the estimator according to local signal reliability, reducing gradient variance while keeping memory complexity independent of the number of spatial views\. To improve cross\-architecture transfer, we introduce a consensus alignment objective that distills shared structure from multiple pretrained teachers while mitigating model\-specific artifacts\. Across ImageNet\-scale and fine\-grained benchmarks, TPA substantially reduces memory overhead, enables distillation on consumer\-grade GPUs, and improves transfer to heterogeneous CNN and Vision Transformer backbones\. These results suggest that online temporal estimation provides an efficient alternative to spatial ensembling for frozen\-feature dataset distillation\.

## Dataset Distillation via Drifting

**Authors:** George Cazenavette; Angelina Quan; Giannis Daras; Antonio Torralba; Vincent Sitzmann

**ID:** 155633 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=477JMtoDLS>) | [PDF](<https://openreview.net/pdf?id=477JMtoDLS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155633>)

The task of \\textit\{dataset distillation\} aims to find a small set of synthetic images such that training a model on them reproduces the performance of the same model trained on a much larger dataset of real samples\. Existing distillation methods focus on synthesizing datasets that enable training \\textit\{randomly initialized\} models\. In contrast, state\-of\-the\-art vision approaches are increasingly building on large, pre\-trained self\-supervised models rather than training from scratch\. In this paper, we investigate the problem of distilling datasets that enable us to optimally train \\textit\{linear probes\} on top of such large, pre\-trained vision models\. We introduce a method of dataset distillation for this task called \\textit\{Linear Gradient Matching\} that optimizes the synthetic images such that, when passed through a pre\-trained feature extractor, they induce gradients in the linear classifier similar to those produced by the real data\. Our method yields synthetic data that outperform all real\-image baselines and, remarkably, generalize across pre\-trained vision models, enabling us, for instance, to train a linear CLIP probe that performs competitively using a dataset distilled via a DINO backbone\. Further, we show that our distilled datasets are exceptionally effective for fine\-grained classification and provide a valuable tool for model interpretability, predicting, among other things, how similar two models' embedding spaces are under the platonic representation hypothesis or whether a model is sensitive to spurious correlations in adversarial datasets\.

## EgoBench: An Interactive Egocentric Multimodal Benchmark for Tool\-Using Agents

**Authors:** Yunqi Liu; Tong Niu; Zitong Wang; Zhenlong Dai; Yuqi Qing; Weiqiang Wang; Jian liu

**ID:** 139324 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XE0MVQWYya>) | [PDF](<https://openreview.net/pdf?id=XE0MVQWYya>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139324>)

As AI agents increasingly operate in open, real\-world environments, they require a deep synergy of multimodal perception, tool invocation with multi\-hop reasoning, and dynamic interaction with users\. However, existing benchmarks fail to jointly evaluate these capabilities due to challenges in designing strictly coupled multi\-capability tasks, simulating natural and task\-constrained user feedback, and ensuring objective evaluation of dynamic interaction\. To bridge this gap, we introduce EgoBench, the first interactive multimodal benchmark for tool\-using agents\. EgoBench comprises 1,590 egocentric\-video\-grounded tasks covering five daily scenarios, along with a user\-agent\-tool interactive environment for evaluation\. We implement a three\-stage synergistic pipeline through which each task is designed to enforce the joint application of visual perception and tool\-augmented multi\-hop reasoning\. We additionally develop a multi\-agent simulated user to evaluate agents' interaction capabilities, which generates high\-fidelity, task\-aligned responses to agents\. Furthermore, we establish a deterministic joint validation framework that guarantees objective assessment through process\-based and result\-based equivalence\. Benchmarking eight video\-MLLM agents on EgoBench reveals a severe performance ceiling: the best\-performing model achieves only a 34\.95% average Joint Success Rate across the three interaction modes\. Finally, we conduct a multi\-dimensional error analysis to disentangle failure modes, exposing capability bottlenecks for advancing future AI agents\.

## In\-context learning to predict critical transitions in dynamical systems

**Authors:** Yunus Sevinchan; Juan Nathaniel; Kai Ueltzhöffer; Carla Roesch; Tobias Weber; Vaios Laschos; Hang Fan; Gregor Ramien; Johannes Haux; Pierre Gentine; Benjamin Herdeanu

**ID:** 155891 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=24hX13I66G>) | [PDF](<https://openreview.net/pdf?id=24hX13I66G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155891>)

Critical transitions – abrupt, often irreversible changes in system dynamics – arise across human and natural systems, often with catastrophic consequences\. Real\-world observations of such shifts remain scarce, preventing the development of reliable early warning systems\. Conventional statistical and spectral indicators, such as increasing variance, tend to fail under realistic conditions of limited data and correlated noise, whereas existing deep learning classifiers do not extrapolate beyond their training data distribution\. In this work, we introduce TipPFN, an in\-context learning \(ICL\) framework that uses a prior\-data fitted network to infer a system's proximity to a critical transition\. Trained on our novel synthetic data generator, which is based on canonical bifurcation scenarios coupled to diverse, randomized stochastic dynamics, TipPFN flexibly capitalizes on contexts of various sizes, complexity and dimensionalities\. We demonstrate robust, state\-of\-the\-art early detection of critical transitions in previously unseen tipping regimes, sim\-to\-real examples, and real\-world observations in both ICL and zero\-shot settings\.

## Rethinking Dataset Distillation for Classification: Do Distilled Sets Outperform Coresets?

**Authors:** Trisha Mittal; Akshay Mehra; Joshua Kimball

**ID:** 139495 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MMwFjMKetz>) | [PDF](<https://openreview.net/pdf?id=MMwFjMKetz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139495>)

Dataset distillation \(DD\) has emerged as a prominent approach in data centric machine learning, aiming to synthesize compact training sets for efficient training by compressing the information in large datasets into a small number of synthetic samples\.  However, DD methods are often evaluated under inconsistent evaluation protocols, ranging from standard ERM to single/multi‑teacher supervision, making it difficult to isolate the effectiveness of distilled data from evaluation\.  Moreover, many prior methods claim that DD outperforms data pruning approaches such as coreset selection \(CS\), based on the assumption that restricting condensed datasets to subsets of real samples fundamentally limits their expressiveness\.  In this work, we critically evaluate DD methods through large\-scale experiments using standardized datasets and evaluation protocols to assess their intrinsic effectiveness\. We benchmark seven state\-of\-the\-art DD methods on ImageNet\-1K, ImageNet\-100, and ImageNette, using three widely adopted training protocols against three CS strategies\.  Our results show that while some DD methods fail to outperform even simple random subsets, the SOTA DD approaches are comparable to or worse than coresets on large‑scale datasets and incur a substantially higher cost for construction\.  Beyond accuracy, we also evaluate the representativeness, diversity, and quality of condensed sets, and find that coresets consistently achieve better coverage of the original data distribution\.  These findings highlight the limited practical advantages of current DD methods and show that coresets remain competitive and are often a more computationally efficient alternative for data\-centric learning\.

## Real In, Real Out: What If We Only Use Real Data for Scene Text Editing?

**Authors:** Xingsong Ye; Yongkun Du; Jiaxin Zhang; Chong Sun; Zhineng Chen

**ID:** 153296 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MJEQhPRV6b>) | [PDF](<https://openreview.net/pdf?id=MJEQhPRV6b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153296>)

Aiming to modify textual content while preserving the original style, Scene Text Editing \(STE\) has significant practical value in many applications\. STE typically requires paired images before and after editing for training\. However, recent approaches rely heavily on synthetic paired data and complex disentanglement strategies\. They struggle to faithfully capture the diversify and complexity of natural scenes, often producing artifacts or hallucinations\. In this work, we challenge the common practice and investigate whether STE can be driven by turning each real sample into its own paired supervision\. Concretely, we explore multiple ways to disrupt the original image \(e\.g\., Crop, Shuffle, Mask\) to construct self\-paired training data, and build a strong baseline \(TextRIRO\) upon a conditional diffusion architecture\. Our experiments show that combining character\-column shuffling with image cropping \(Shuffle&amp;Crop\) effectively destroys text semantics while preserving key style cues, enabling the model to learn editing behaviors directly from real text images\. With this concise yet real\-oriented design, TextRIRO achieves promising performance in both accuracy and visual realism across real\-world benchmarks, substantially mitigating the synthetic\-to\-real domain gap\. Furthermore, we leverage TextRIRO to build TextRIRO\-3M, a large\-scale realistic dataset for long\-text recognition by concatenating edited and original images\. Experimental results show that training recognition models with TextRIRO\-3M significantly improves recognition accuracy, demonstrating that TextRIRO provides highly useful training resources for downstream tasks\. Overall, TextRIRO lifts STE to realistic, reliable, and widely applicable new levels\. Code is provided in the supplement, and data will be released upon acceptance\.

## PatchScout: Thematic Web Data Collection via Information Foraging

**Authors:** Michael West; Eduard Dragut

**ID:** 155418 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5q0bsL4UMO>) | [PDF](<https://openreview.net/pdf?id=5q0bsL4UMO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155418>)

Researchers often need web corpora that are not answers to a single query, but reusable collections of documents spanning many decentralized sources\. We refer to this problem as thematic web data collection\}: assembling semantically relevant documents that share a common theme but are scattered across heterogeneous and structurally disconnected regions of the web\. Existing approaches, including traversal\-based methods and LLM\-driven web agents, are limited by local exploration or short\-horizon stopping, preventing comprehensive collection\. We formulate this task as a long\-horizon information foraging problem over query\-induced semantic patches, where the central challenge is deciding when to continue local exploitation and when to switch to new regions\. We propose PatchScout, a multi\-agent framework that instantiates a class of patch\-switching policies to balance local exploitation and adaptive patch switching under a fixed budget\. Experiments on four live\-web topics show that PatchScout substantially improves yield and domain coverage over traversal\-based and search\-augmented reasoning agent baselines\. In an applied social science setting with an incomplete prior collection, PatchScout discovers 102 previously unidentified entities, illustrating its ability to expand existing thematic datasets\.

## Online Data Selection for Instruction Tuning via Gaussian Processes

**Authors:** Jun Wang; Quoc Phong Nguyen; Julien Monteil; Vu Nguyen

**ID:** 155444 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5Z8GeMizku>) | [PDF](<https://openreview.net/pdf?id=5Z8GeMizku>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155444>)

With Large Language Model \(LLM\) pre\-training and fine\-tuning shifting its focus from data volume to data quality, quality data selection has emerged as a critical research topic\. Existing online data selection methods for LLM training are typically \`\`batch\-constrained'', limiting optimization to local utility within random batches\. To overcome this, we propose GAIA \(Global Adaptive Instruction tuning via GAussian processes\), a framework that formulates data valuation as a global estimation process\. GAIA employs Gaussian Process regression to model continuous utility manifolds across the semantic space, utilizing an adaptive strategy fusion mechanism to dynamically prioritize high\-utility samples\. By casting the strategy\-posterior update as an instance of the classical fixed\-share Hedge framework for tracking the best expert, we inherit a dynamic\-regret guarantee that characterizes GAIA's robustness under non\-stationary quality scores during training\. Empirical evaluations on three datasets demonstrate that GAIA significantly outperforms state\-of\-the\-art baselines like GREATS, establishing our method as a scalable and robust solution for efficient instruction tuning\.

## Concept frustration: Aligning human concepts and machine representations

**Authors:** Christopher R\. S\. Banerji; Enrico Parisini; Christopher J Soelistyo; Ahab Isaac; Alessandro Barp

**ID:** 149108 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sq7mf1Xca5>) | [PDF](<https://openreview.net/pdf?id=sq7mf1Xca5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149108>)

Aligning human\-interpretable concepts with the internal representations of modern machine learning systems remains a central challenge for interpretable AI\. We introduce a geometric framework to compare supervised human concepts with unsupervised representations derived from foundation models\. We formalise concept frustration: a mismatch that arises when an unobserved concept induces relationships between known concepts that cannot be made consistent within an existing ontology\. We develop task\-aligned similarity measures that detect this phenomenon, and show that frustration is identifiable in task\-aligned geometry while conventional Euclidean comparisons fail\. Under a linear–Gaussian generative model, we derive a closed\-form expression for Bayes\-optimal concept\-based classifier accuracy, decomposing predictive signal into known and unknown contributions and identifying where frustration impacts performance\. Experiments on synthetic data and real language and vision tasks demonstrate that frustration is present in foundation model representations and that incorporating missing concepts reorganises learned representations to better align human and machine reasoning\. These results provide a principled framework for diagnosing incomplete concept ontologies and improving alignment in interpretable AI systems\.

## Classification of high\-dimensional data with spiked covariance matrix structure

**Authors:** Yin\-Jen Chen; Minh Tang

**ID:** 156776 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6bQDtTbaQs>) | [PDF](<https://openreview.net/pdf?id=6bQDtTbaQs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156776>)

We study the classification problem for
high\-dimensional data with $n$ observations on $p$ features where the
$p \\times p$ covariance matrix $\\Sigma$ exhibits a spiked eigenvalue structure and the
vector $\\zeta$, given by the difference between the \{\\em whitened\} mean
vectors, is sparse\. We analyze an adaptive
classifier \(adaptive with respect to the sparsity $s$\) that first
performs dimension reduction on the feature vectors prior to classification in
the dimensionally reduced space, i\.e\., the classifier whitens
the data, then screens the features by keeping only those corresponding
to the $s$ largest coordinates of $\\zeta$ and finally applies Fisher
linear discriminant on the selected features\. Leveraging recent
results on entrywise matrix perturbation bounds for covariance
matrices, we show that the resulting classifier is Bayes optimal
whenever $n \\rightarrow \\infty$ and $s \\sqrt\{n^\{\-1\} \\ln p\}  \\rightarrow
0$\. Notably, our theory also guarantees Bayes optimality for the corresponding quadratic discriminant analysis \(QDA\)\. Experimental results on real and synthetic data further indicate that the proposed approach is competitive with state\-of\-the\-art methods while operating on a substantially lower\-dimensional representation\.

## InfCLIP: Unified Data Valuation for CLIP Pretraining via Influence\-Inspired Scoring

**Authors:** Nohyun Ki; Hye Won Chung

**ID:** 150869 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=elAMBRgvsw>) | [PDF](<https://openreview.net/pdf?id=elAMBRgvsw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150869>)

Effective data valuation is essential for machine learning, especially for CLIP pretraining, where models are trained on massive and inherently noisy image\-text datasets\. Existing CLIP data selection methods often combine heuristic signals such as alignment, target similarity, and diversity, but lack a unified principle for estimating sample contribution\. This can lead to inconsistent performance across data regimes and obscures how each sample contributes to downstream performance\. In this work, we propose InfCLIP, a principled influence\-based approach for data selection in CLIP pretraining\. InfCLIP estimates the contribution of each training sample to a target task by leveraging feature representations and temperature\-rescaled softmax distributions, enabling efficient computation without retraining or access to model internals\. This formulation provides a unified view of alignment, informativeness, uniqueness, and target relevance within a single framework\. Empirically, InfCLIP consistently outperforms existing data selection methods across a wide range of benchmarks, including zero\-shot evaluation on ImageNet and distribution\-shifted datasets\. We also show that Self\-InfCLIP enables efficient training\-set analysis, including noise detection and memorization\-aware data assessment, without additional retraining\.

## Training Data Attribution in Diffusion Models via Mirrored Unlearning and Noise\-Consistent Skew

**Authors:** Joan Serrà; Dipam Goswami; Fabio Morreale; Wei\-Hsiang Liao; Yuki Mitsufuji

**ID:** 153796 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Id0XHHT9w8>) | [PDF](<https://openreview.net/pdf?id=Id0XHHT9w8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153796>)

Training data attribution \(TDA\) should enable generative model interpretability and foster a variety of related downstream tasks\. Nonetheless, current TDA approaches lack reliability and robustness, preventing their adoption in real\-world setups\. In this paper, we take a decisive step towards more reliable and robust TDA for diffusion models\. We propose to perform TDA with mirrored unlearning and noise\-consistent skew \(MUCS\)\. The idea is to fine\-tune a second model with bounded mirrored gradient ascent, and to measure the normalized skew of this model with respect to the original one using consistent noise samples\. We show that, while being conceptually simple and generic, MUCS systematically outperforms existing methods on three different datasets by a large margin\. We additionally study the effect that core design choices have on final performance, and analyze novel aspects regarding the overlap of influential instances across generated items and the potential of ensembling TDA approaches\. We believe that our findings may have broader implications for more general unlearning setups, as well as for tasks requiring the comparison of diffusion losses\.

## Are Easier or Harder Examples Better? Rethinking Data Selection for Reward Models and Preference Optimization

**Authors:** Kevin Christian Wibisono; Aya Ismail; Pedro O\. Pinheiro; Yixin Wang; Kyunghyun Cho; Nataša Tagasovska; Rajesh Ranganath

**ID:** 151585 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZVpkdTlkIZ>) | [PDF](<https://openreview.net/pdf?id=ZVpkdTlkIZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151585>)

Despite being crucial for effective LLM alignment, data selection remains understudied\. Prior work on reward model \(RM\) training and policy optimization \(e\.g\., DPO, GRPO\) identifies \*example difficulty\*, the reward gap between chosen and rejected responses, as a key factor, but findings conflict: some favor easier examples with larger gaps, others harder ones\. To isolate difficulty from confounders, we \*assume access to a reference RM\* and systematically study data selection across RM, DPO, and GRPO training\. When difficulty is measured via the reference RM, \*easier pairs consistently outperform harder ones\*, especially for smaller base models: using only the top 20% easiest examples often matches or exceeds full\-dataset performance while cutting post\-training costs $5\\times$\. However, \*this advantage hinges on reward estimation quality\*\. As the difficulty signal is corrupted by noise or estimated with a weak proxy RM, the easy\-example advantage shrinks and can reverse\. A signal\-to\-noise analysis explains why: larger\-gap examples yield more reliable gradient directions, an advantage that weakens with noisier reward estimates\. These results suggest that \*conflicting findings in prior work partly stem from differences in reward reliability and signal mismatch\*\.

## ProgramBench: Can Language Models Rebuild Programs From Scratch?

**Authors:** John Yang; Kilian Lieret; Jeffrey Ma; Parth Thakkar; Dmitrii Pedchenko; Sten Sootla; Emily McMilin; Pengcheng Yin; Rui Hou; Gabriel Synnaeve; Diyi Yang; Ofir Press

**ID:** 139090 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=liufgqTAEe>) | [PDF](<https://openreview.net/pdf?id=liufgqTAEe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139090>)

Turning ideas into full software projects from scratch has become a popular use case for language models\. Agents are being deployed to seed, maintain, and grow codebases over extended periods with minimal human oversight\. Such settings require models to make high\-level software architecture decisions\. However, existing benchmarks measure focused, limited tasks such as fixing a single bug or developing a single, specified feature\. We therefore introduce ProgramBench to measure the ability of software engineering agents to develop software holisitically\. In ProgramBench, given only a program and its documentation, agents must architect and implement a codebase that matches the reference executable’s behavior\. End\-to\-end behavioral tests are generated via agent\-driven fuzzing, enabling evaluation without prescribing implementation structure\. Our 200 tasks range from compact CLI tools to widely used software such as FFmpeg, SQLite, and the PHP interpreter\. We evaluate 9 LMs and find that none fully resolve any task, with the best model passing 95% of tests on only 3% of tasks\. Models favor monolithic, single\-file implementations that diverge sharply from human\-written code\.

## HARP: Training\-Free Dual\-Profile Agentic Communication for LLM\-Based Recommendation

**Authors:** Zhen Tao; Xun Zhou; Xuhui Chen; Ziyue Qiao; Qingqiang Sun

**ID:** 150693 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gDV5BRXpfO>) | [PDF](<https://openreview.net/pdf?id=gDV5BRXpfO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150693>)

In LLM\-based recommendation, memory effectively plays the role of a user\-level agent, typically built on top of a memory\-augmented backbone\.  Yet under this paradigm users and items remain asymmetric participants: only the user is given a structured profile; that profile is consumed inside a bandwidth\-limited reranker prompt; and it is frozen after warmup\.  Starting from this observation, we recast LLM\-based recommendation as an agentic\-communication process in four stages \-\-\- Build a self\-description, Transmit it along the collaborative graph, Understand the other side, and Sync it from the next interaction\.  Analysing the dominant memory\-augmented paradigm through this formulation, we identify three open communication challenges that current pipelines leave unaddressed: the item side never produces a comparable self\-description \(one\-sided Build\); profile\-level signals are routed only into a bandwidth\-limited reranker prompt rather than into the retrieval stage where they would not compete for context tokens \(prompt\-trapped Understand\); and the user's description is frozen after warmup with no principled update rule \(absent Sync\)\.  We instantiate the missing stages as HARP \(Homophily\-aware Agentic Recommendation via dual Profiles\}\), a training\-free, three\-operator addition to a frozen LLM backbone: a rule\-extracted symmetric item profile \(zero extra LLM calls\), a channel\-decomposable profile\-level homophily $\\mathcal\{H\}\(\\phi\_u,\\phi\_i\)$ consumed at retrieval time rather than inside the reranker prompt, and a critic\-gated single\-pass reflective update realising in\-context profile evolution without any gradient step\.  On four public benchmarks \(Yelp, Amazon Books, MovieTV, Goodreads\), HARP lifts Hit@1 over the strongest published baseline by $6\.9\\%$\-\-$24\.0\\%$, with family\-wise Holm\-corrected $p&lt;10^\{\-9\}$ on every dataset\.  Ablations and a per\-case attribution study isolate each operator as a distinct, complementary source of gain; we also quantify and openly report the trade\-off introduced by the reflective pass\.  Our contribution is a unified formulation of agentic communication for LLM\-based recommendation, together with a training\-free three\-operator instantiation on top of it\.

## The Deadline Effect: Identifying and Correcting Temporal Bias in Human Evaluation

**Authors:** Shiyan Liu

**ID:** 154797 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=At4p3kXMIV>) | [PDF](<https://openreview.net/pdf?id=At4p3kXMIV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154797>)

Submission timing in human evaluation systems is universally treated as an irrelevant detail\. We identify a systematic temporal leniency bias: across 129,023 reviews spanning three consecutive years of a large\-scale ML venue, evaluators submitting closer to the deadline assign higher within\-paper scores and produce less thorough assessments\. The pattern holds in all 15 robustness specifications across all three years, and early evaluators achieve measurably lower Brier scores \($\\Delta \\approx 0\.005$\-\-$0\.006$, stable across years\)\. We propose two complementary corrections\. Optimal Timing\-Calibrated Aggregation \(OTCA\) derives a linear weight function $w\(t\) = a^\{\\star\} t \+ 1$ by minimising paper\-level decision loss, significantly outperforming heuristic alternatives \(McNemar $\\chi^2 = 46\.3$, $p &lt; 0\.001$\)\. Adversarial Temporal Debiasing \(ATD\) learns timing\-invariant representations via Gradient Reversal, reducing timing discriminability by $37\.4\\\\%$ while preserving predictive utility\. Combined in a joint scheme, the two methods improve borderline decision accuracy by up to $11\.25\\\\%$ over uniform averaging \(McNemar $p &lt; 0\.001$\), consistently across all three years\. Both methods require only submission timestamps, already logged by every major evaluation platform, making deployment cost\-free\.

## BlockFormer: Transformer\-based inference from interaction maps

**Authors:** Eloïse Touron; Pedro Rodrigues; Julyan Arbel; Nelle Varoquaux; Michael Arbel

**ID:** 153580 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KLwEUS6ukk>) | [PDF](<https://openreview.net/pdf?id=KLwEUS6ukk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153580>)

Inference from interaction maps, such as centromere identification from genome\-wide chromosome conformation capture techniques \-\-notably Hi\-C\-\- can be formulated as a generic inverse problem: infer a set of parameters given a map summarizing pairwise interactions between entities through blocks of variable numbers and sizes\. In this work, we introduce a data\-driven approach that leverages shared structure between these maps, such as global alignment between localized patterns, while handling the variability in number and size of entities arising in real\-world data\. Our approach relies on a transformer architecture capable of handling such variability and a custom simulator to generate abundant, yet computationally cheap synthetic data for training\. Applied to the problem of centromere localization, the method accurately recover their genomic positions across a wide range of species of various genome sizes\.

## WayPOP: A Panoramic Open\-Set Panoptic Tracking Benchmark

**Authors:** Rohit Mohan; Maximilian Luz; Swarnava Chowdhury; Yao Lu; Florian Drews; Thomas Nürnberg; Yakov Miron; Federico Tombari; Stefano Gasperini; Abhinav Valada

**ID:** 139468 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ny6sj0KcJQ>) | [PDF](<https://openreview.net/pdf?id=Ny6sj0KcJQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139468>)

Autonomous driving perception increasingly relies on panoramic multi\-camera setups for holistic, spatiotemporal scene understanding\. However, existing panoptic tracking benchmarks assume a fixed semantic taxonomy, failing to evaluate whether systems can robustly detect, segment, and track out\-of\-distribution \(OOD\) objects across time and multiple viewpoints\. Creating a realistic open\-set benchmark for this setting is challenging: fully synthetic data suffers from domain gaps, while 2D augmentations lack multi\-view and temporal geometric consistency\. To address this gap, we introduce WayPOP, the first benchmark for multi\-view open\-set panoptic tracking \(MV\-OSPT\) in autonomous driving\. WayPOP augments real\-world sequences from the Waymo PVPS dataset with diverse 3D assets using a geometry\-grounded pipeline\. By leveraging actual LiDAR geometry, out\-of\-taxonomy objects are seamlessly integrated with realistic scales, multi\-view projections, and depth\-aware occlusions across five synchronized cameras and time\. We formalize a structured task hierarchy for MV\-OSPT and adapt established metrics to separately evaluate known and unknown regions for both segmentation and tracking\. Our comprehensive benchmarking of representative baselines reveals that maintaining consistent unknown\-object identities during camera transitions, viewpoint changes, and temporal occlusions remains a critical open challenge\.

## BLADE: Scalable Bi\-level Adaptive Data Selection for LLM Training

**Authors:** Jiaxing Wang; Deping Xiang; Jin Xu; Zirui Liu; Zicheng Zhang; Guoqiang Gong; Jun Fang; Chao Liu; Pengzhang Liu; Tongxuan Liu; Ke Zhang; Qixia Jiang

**ID:** 152234 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UZM2vsjS66>) | [PDF](<https://openreview.net/pdf?id=UZM2vsjS66>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152234>)

As Large Language Model \(LLM\) datasets scale to trillions of tokens, data selection has emerged as a critical frontier to filter out uninformative noise and construct adaptive learning trajectories\. Beyond static heuristic filtering, advanced data selection methods for LLM training largely follow two paradigms, each with fundamental limitations\. Influence\-based methods provide principled bi\-level objectives but require intractable inverse\-Hessian computations, while excess\-loss methods are computationally efficient but rely on a static reference model that becomes misaligned with the evolving proxy model during training\. We propose BLADE \(Bi\-Level Adaptive Data sElection\), a Hessian\-free framework for data selection\. BLADE reformulates the bi\-level optimization problem underlying influence\-based methods as a penalized single\-level objective via Lagrange multipliers, avoiding inverse\-Hessian computation while revealing a principled connection to excess\-loss based data selection\. The resulting objective recovers an excess\-loss form but replaces the static reference model with a dynamic one that stays synchronized with training\.  Theoretically, we prove that this penalized formulation guarantees first\-order convergence\. For efficient online batch selection, we instantiate BLADE as a memoryless randomized block\-coordinate Frank\-Wolfe algorithm\. Extensive experiments show that BLADE consistently outperforms state\-of\-the\-art data selection baselines, providing a practical recipe for LLM training\.

## Inverse Linear Bandits via Linear Programs

**Authors:** Ziqing Song; Lin Yang; Ruosong Wang

**ID:** 149017 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tSF5baGOM3>) | [PDF](<https://openreview.net/pdf?id=tSF5baGOM3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149017>)

Inverse reinforcement learning \(IRL\) is a well\-established paradigm for circumventing the need for explicit reward\.  In this paper, we study the problem of estimating the reward function from a single sequence of actions \(i\.e\., a demonstration\) of a stochastic linear bandit algorithm\. Our main result is a unified approach for inverse linear bandits, based on the idea of formulating a linear program by tightly characterizing the confidence intervals of pulled actions\. We show that the estimation error of our algorithms matches the information\-theoretic lower bound, up to polynomial factors in $d$ and $\\log T$, where $d$ is the dimensionality of the feature space and $T$ is the length of the demonstration\. Compared to prior approaches, our approach \(i\) gives a unified reward estimator that works when the demonstrator employs LinUCB or Phased Elimination, two popular algorithms for stochastic linear bandits, while existing estimator only works for Phased Elimination; \(ii\) does not require access to hyperparameters or internal states of the demonstrator algorithm as required by prior work; and \(iii\) works for general action sets, while existing estimator requires assumptions on the density and geometry of the action set\. We further demonstrate the practicality of our new approach by validating our new algorithms on synthetic data and demonstrations constructed from real\-world datasets, where our estimators significantly outperform existing ones\.

## Firefly: Illuminating Verified Real\-world Tool Call Data Generation

**Authors:** Yuxuan Lu; Ziyi Wang; Yingzhou Lu; Yisi Sang; Jiri Gesi; Xianfeng Tang; Yimeng Zhang; Zhenwei Dai; Hui Liu; Hanqing Lu; Chen Luo; Qi He; Benoit Dumoulin; Jing Huang; Dakuo Wang

**ID:** 155698 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3cQkNNBh1Q>) | [PDF](<https://openreview.net/pdf?id=3cQkNNBh1Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155698>)

Training robust tool\-calling agents requires large\-scale trajectory data that is both realistic and verifiable, yet existing datasets still rely heavily on costly human annotation or synthetic pipelines with weak correctness guarantees\. In this work, we introduce \\projectname, a large\-scale synthetic and verifiable dataset for tool\-calling agents built on real\-world MCP servers\. Unlike prior pipelines that first generate tasks and then attempt to solve them, \\projectname inverts this process: a strong LLM first self\-explores real MCP servers and records reachable execution states, after which natural\-language tasks are synthesized backward from observed outcomes\. This back\-chaining design guarantees task reachability and label correctness by construction\. To support scalable offline training and evaluation, we further construct a retrieval\-augmented simulator from explored trajectories, enabling reproducible tool execution without relying on live MCP servers\. Each instance includes a task description, tool schemas, ground\-truth trajectories, ground\-truth answers, and tool\-call responses for offline replay, and is automatically checked for determinism and semantic consistency\. \\projectname aggregates thousands of verifiable tasks across diverse real\-world MCP servers and supports scalable agent learning without human annotation\. Experiments show that models trained on \\projectname achieve significant improvements on tau2\-Bench and BFCL, demonstrating the effectiveness of realistic, verifiable synthetic data for training generalizable tool\-calling agents\.

## Diagnosing and Repairing Citation Failures in Generative Engine Optimization

**Authors:** Zhihua Tian; Yuhan Chen; Yao Tang; Jian Liu; Ruoxi Jia

**ID:** 153428 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LQ9A5Gzy4H>) | [PDF](<https://openreview.net/pdf?id=LQ9A5Gzy4H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153428>)

Generative Engine Optimization \(GEO\) aims to improve content visibility in AI\-generated responses\. However, existing methods measure contribution—how much a document influences a response—rather than citation, the mechanism that actually drives traffic back to creators\. Also, these methods apply generic rewriting rules uniformly, failing to diagnose why individual document are not cited\. This paper introduces a diagnostic approach to GEO that asks why a document fails to be cited and intervenes accordingly\. We develop a unified framework comprising: \(1\) the first taxonomy of citation failure modes spanning different stages of a citation pipeline; \(2\) AgentGEO, an agentic system that diagnoses failures using this taxonomy, selects targeted repairs from a corresponding tool library, and iterates until citation is achieved; and \(3\) a document\-centric benchmark evaluating whether optimizations generalize across held\-out queries\. AgentGEO achieves 15\-40\\% relative improvement in citation rates across engines and citation methods, while modifying only 5\\% of content, compared to 25\\% for baselines\. Our analysis reveals that generic optimization can harm long\-tail content and some documents face challenges that optimization alone cannot fully address—findings with implications for equitable visibility in AI\-mediated information access\.

## Forward Shapley Scoring for Non\-Myopic Active Feature Acquisition

**Authors:** Guoliang Xu

**ID:** 149516 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pY9eibVqPA>) | [PDF](<https://openreview.net/pdf?id=pY9eibVqPA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149516>)

Active feature acquisition \(AFA\) requires an agent to choose a budget\-limited set of costly features before making a prediction\. Greedy conditional\-mutual\-information \(CMI\) and value\-of\-information policies perform well when useful features are individually informative, but fail under joint\-only evidence: a query is valuable only because it enables a future evidence set\. To address this, we propose Forward\-$\\Phi$, a model\-based non\-myopic acquisition scorer that requires a known structural causal model \(SCM\) or generative AFA model\. Forward\-$\\Phi$ evaluates a candidate query by its Shapley contribution to budget\-feasible future action sets in a cooperative game on the expected forward utility\. Two variants share the same game: a raw score that keeps both singleton and interaction value, and a residual score that strips the singleton component to isolate joint\-only utility on diagnostic probes\. On AFABench CUBE\-NM, the raw Monte Carlo \(MC\) Forward Shapley scorer reaches $0\.664 \\pm 0\.024$ accuracy over five MC seeds, well above all reported baselines including the OL\-MFRL \($0\.235$\) and ODIN\-MFRL \($0\.160$\) reinforcement\-learning loops trained under the same split and shared pretraining protocol\. Controlled SCM and Bayesian\-network \(BN\) probes confirm the predicted mechanism: Forward\-$\\Phi$ yields substantial gains when target information is jointly carried, and matches Greedy on greedy\-aligned controls\. The primary contribution is the belief\-conditional Forward Shapley state\-action score, a credit\-assignment signal derived from Shapley axioms for non\-myopic AFA under joint\-only evidence\.

## Imperfect Influence, Reliable Rankings: A Theory of TRAK for Data Attribution

**Authors:** Han Tong; Shubhangi Ghosh; Haolin Zou; Arian Maleki

**ID:** 153488 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L0YFMm2CYO>) | [PDF](<https://openreview.net/pdf?id=L0YFMm2CYO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153488>)

Data attribution, which traces a model’s prediction back to specific training data, is an important tool for interpreting sophisticated AI models\. The widely used TRAK algorithm addresses this challenge by first approximating the underlying model with a kernel machine and then leveraging techniques developed for approximating the leave\-one\-out \(ALO\) risk\. Despite its strong empirical performance, the theoretical conditions under which TRAK approximations are accurate, as well as the regimes in which they break down, remain largely unexplored\. In this paper, we provide a theoretical analysis of the TRAK algorithm, characterizing its performance and quantifying the errors introduced by the approximations on which the method relies\. We show that although the approximations can incur significant errors, TRAK preserves the separation between highly influential and weakly influential data points\. We corroborate our theoretical results through extensive simulations and empirical studies\.

## Transcoda: End\-to\-End Zero\-Shot Optical Music Recognition via Data\-Centric Synthetic Training

**Authors:** Daniel Dratschuk; Paul Swoboda

**ID:** 155049 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8pzICTUGAk>) | [PDF](<https://openreview.net/pdf?id=8pzICTUGAk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155049>)

Optical Music Recognition \(OMR\), the task of transcribing sheet music into a structured textual representation, is currently bottlenecked by a lack of large\-scale, annotated datasets of real scans\. This forces models to rely on either few\-shot transfer or synthetic training pipelines that remain overly simplistic\. A secondary challenge is encoding non\-uniqueness: in the popular Humdrum \*\*kern format for transcribing music, multiple different text encodings can render into the same visual sheet music\. This one\-to\-many mapping creates a harder learning task and introduces high uncertainty during decoding\. We propose Transcoda, an OMR system built on \(i\) an advanced synthetic data generation pipeline, \(ii\) a normalization of the \*\*kern encoding to enforce a unique normal form and \(iii\) grammar\-based decoding to ensure the syntactic correctness of the output\. This approach allows us to train a compact 59M\-parameter model in just 6 hours on a single GPU that outperforms billion\-parameter baselines\. Transcoda achieves the best score among state of the art baselines on a newly curated benchmark of synthetically rendered scores at 18\.46% OMR\-NED \(compared to 43\.91% for the next\-best system, Legato\) and reduces the error rate on historical Polish scans to 63\.97% OMR\-NED \(down from 80\.16% for SMT\+\+\)\. We will make our model, data and generation pipeline publicly available upon publication of the paper\.

## Self\-Consuming Generative Models with Co\-Evolving Human Preferences

**Authors:** Xiukun Wei; Tian Xie; Ding Zhu; Xueru Zhang

**ID:** 148960 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tsXMIKjzrO>) | [PDF](<https://openreview.net/pdf?id=tsXMIKjzrO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148960>)

Generative models are increasingly trained in self\-consuming iterative loops, where users curate preferred samples from model\-generated candidates and the curated samples are used to train future generations of the model\. Prior work has largely assumed fixed user preferences, but in practice exposure to model outputs gradually reshapes what users perceive as desirable, creating a feedback loop in which model distributions and user preferences co\-evolve\. We take a first step toward understanding the long\-term behavior of such coupled dynamics\. We show that when training relies entirely on user\-curated synthetic data, iterative curation amplifies initial biases and drives the system toward one of multiple \*singleton\* equilibria in which the instance holding an initial advantage eventually dominates\.  In contrast, injecting reference data into training at a sufficiently large rate fundamentally changes the dynamics and yields a \*unique globally attracting\* equilibrium\. Building on this insight, we study how reference\-data injection can be used to control long\-term outcomes, and propose an efficient algorithm that jointly selects a reference distribution and its mixing weight to steer the coupled system toward equilibria that preserve desired attributes while minimizing data collection costs\.

## The Complexity Kink: LLM Rubric Instruments for Causal Inference on Code Generation Reliability

**Authors:** Michael Hernandez; Tian Zhao

**ID:** 138945 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ucjCOJf47M>) | [PDF](<https://openreview.net/pdf?id=ucjCOJf47M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138945>)

Measuring complexity from a model's own code is biased by failure: a hard prompt can produce a short, broken program that looks simple\. We instead score each prompt's structure on six dimensions from the prompt alone, never from generated code or test results\. We draw 5,000 Python prompts across six bands of a preliminary single\-rater score, and four out\-of\-panel LLM judges rescore every prompt \(19,997 scores; composite ICC\(2,1\) = 0\.872 on the 4,998 prompts with all four\)\. Twenty\-one models answer every prompt \(105,000 generations\), and an independent LLM auditor, checked against known\-answer cases, reviews each unit\-test verdict\. Averaged over models, pass rate has a nonmonotone breakpoint at composite $\\hat\{\\gamma\}=14\.0$: 83\.4\\% at or below, 90\.1\\% above\. That jump is not a law of difficulty\. With task\-type fixed effects the breakpoint stays at 14\.0 but the adjusted jump shrinks from 6\.8 to 0\.4 points, and neither of the benchmark's two prompt sources reproduces the jump on its own\. Nineteen models pass more often above their own breakpoint and two less often, and one of those two declines, Gemini 3\.1 Pro Preview's, comes from 156 API calls that returned nothing\. In post hoc follow\-up, Kimi K2\.5 shows the clearest decline: with a prompt\-source control, and within the later source alone, its break is at 14\.25, where its later\-source pass rate falls from 0\.848 to 0\.808 \(95\\% interval $\[14\.00,14\.75\]$\)\. A 365\-prompt audit\-clean extension matches the original raw test outcomes at bins 15 and 16 but adds only 14 prompts above bin 16\. Among failed generations with measurable output complexity, 25\.0\\% pair a prompt composite above 8 with output complexity of at most 10, twice the share among passing ones\. The pooled breakpoint moves to 11\.25 on raw test outcomes and 13\.75 under the partial audit used at submission\. Human agreement with the index is moderate and rater\-dependent, paraphrase and cross\-language rescoring preserve its ordering, and overidentification tests reject the six dimensions as instruments, so we treat the composite as an index and make no causal claim\. The contribution is a prompt\-side way to locate where each model's pass rate changes and to test how much that depends on the prompt mix and on how success is scored\.

## Towards a Universal Causal Reasoner

**Authors:** Qirun Dai; Xiao Liu; Jiawei Zhang; Dylan Zhang; Hao Peng; Chenhao Tan

**ID:** 153248 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MeL6BM40Ro>) | [PDF](<https://openreview.net/pdf?id=MeL6BM40Ro>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153248>)

Despite the importance of causal reasoning, training LLMs to perform causal reasoning remains underexplored\. Existing data efforts mostly focus on benchmarking LLMs on specific aspects of causality, rendering them less suitable for training generalizable causal reasoners\. To address this, we propose UniCo, a data generation framework that both \(1\) addresses 18 causal query types across Pearl's Causal Ladder and \(2\) translates symbolic samples into code and narrative domains to simulate real\-world use cases where causal terms are not explicitly specified\. To ensure data quality, UniCo grounds answers with exact causal inference and filter cases with reasoning shortcuts\. Upon supervised\-finetuning with 66\.6K UniCo\-generated instances, Qwen3\-4B, Qwen3\-8B and Olmo\-3\-7B\-Instruct achieve an average of 22\.9% improvements across all 18 in\-distribution query types, and 8\.1% over state\-of\-the\-art causal data generation frameworks on 7 established causal benchmarks outside the training distribution\. Furthermore, in real\-world medical understanding, legal decision, and tabular reasoning, UniCo\-trained models consistently display more faithful reasoning traces, outperforming the base models by an average of 20\.2% in faithfulness metrics\. These suggest that causality\-centered training not only strengthens causal reasoning, but also equips LLMs with a causal mindset in general reasoning tasks\.

## RAD\-TFM: Robust and Domain\-Adapted Tabular Foundation Models

**Authors:** Matthew Peroni; Franck Le; Vadim Sheinin

**ID:** 155295 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6dfLwFHIwj>) | [PDF](<https://openreview.net/pdf?id=6dfLwFHIwj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155295>)

The development of tabular foundation models \(TFMs\) has accelerated in recent years, showing strong potential to outperform traditional ML methods for structured data\. A key finding is that TFMs can be pretrained entirely on synthetic datasets, opening opportunities to design data generators that encourage desirable model properties\. Prior work has mainly focused on crafting high\-quality priors over generators to improve overall pretraining performance\. Our insight is that parameterizing the generator distribution enables an adversarial, distributional robustness perspective: during training, we can adapt the generator to emphasize datasets that are particularly challenging for the model, which we formalize by introducing an optimality gap measure\. Further, we develop a method to align the synthetic data generation with real\-world datasets from a given domain, constraining the adversary to generate "realistic'" data\. Together, these algorithms comprise the Robust and Domain\-Adapted Tabular Foundation Models \(RAD\-TFM\)  pipeline, a model\-agnostic adversarial training framework\. Applied to the TabPFN V2 classifier, RAD\-TFM improves performance across 6 diverse tabular benchmarks, with up to a 11\\% increase in mean normalized AUC over the original TabPFN and other baseline algorithms, with only 100k additional training datasets, less than 0\.1\\% of the original pretraining data\. These results highlight a promising new direction for targeted adversarial training and fine\-tuning of TFMs using synthetic data alone\.

## DD\-Ranking: Rethinking the Evaluation of Dataset Distillation

**Authors:** Zekai Li; Xinhao Zhong; Samir Khaki; Zhiyuan Liang; Yuhao Zhou; Mingjia Shi; Ziqiao Wang; Xuanlei Zhao; Wangbo Zhao; Ziheng Qin; Mengxuan Wu; Pengfei Zhou; Haonan Wang; David Junhao Zhang; Jia\-Wei Liu; Shaobo Wang; Dai Liu; Linfeng Zhang; Guang Li; Kun Wang; Zheng Zhu; Zhiheng Ma; Joey Tianyi Zhou; Jiancheng Lv; Yaochu Jin; Peihao Wang; Kaipeng Zhang; Yiran Huang; Zhiwei Deng; Xindi Wu; George Cazenavette; Yuzhang Shang; Justin CUI; Jindong Gu; Qian Zheng; Hao Ye; Shuo Wang; Xiaobo Wang; Yan Yan; Angela Yao; Mike Zheng Shou; Tianlong Chen; Hakan Bilen; Baharan Mirzasoleiman; Manolis Kellis; Konstantinos N Plataniotis; Zhangyang &amp;amp;quot;Atlas&amp;amp;quot; Wang; Bo Zhao; Yang You; Kai Wang

**ID:** 139355 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UreH0QGZXp>) | [PDF](<https://openreview.net/pdf?id=UreH0QGZXp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139355>)

Dataset distillation has provided a reliable solution for data compression, where models trained on the resulting smaller synthetic datasets achieve performance comparable to those trained on the original datasets\. To further improve the performance of synthetic datasets, various training pipelines and optimization objectives have been proposed, greatly advancing the field of dataset distillation\. Recent decoupled dataset distillation methods introduce soft labels and stronger data augmentation during the post\-evaluation phase and scale dataset distillation up to larger datasets\. However, this raises a question: Is accuracy still a reliable metric to fairly evaluate dataset distillation methods? Our empirical findings suggest that the performance improvements of these methods often stem from additional techniques rather than the inherent quality of the images themselves, with even randomly sampled images achieving superior results\. Such misaligned evaluation settings severely hinder the development of DD\. Therefore, we propose DD\-Ranking, a unified evaluation framework, along with new general evaluation metrics to uncover the true performance improvements achieved by different methods\. By refocusing on the actual information enhancement of distilled dataset, DD\-Ranking provides a more comprehensive and fair evaluation standard for future research advancements\.

## \\$OneMillion\-Bench: How Far are Language Agents from Human Experts?

**Authors:** Yang Liu; Jiaqi Li; Jun Bai; Qianyu Yang; Xiaobo Hu; Tao Peng; Zaiyuan Wang; Jiayun Dong; Chun Zhang; Zixia Jia; Kaiyuan Chen; Yanglihong Xiao; Lingyue Yin; Tiliang Duan; Ge Zhang; Gang Yao; Hao Chen; Jianpeng Jiao; Zilong Zheng

**ID:** 139822 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2gAr3pMVHH>) | [PDF](<https://openreview.net/pdf?id=2gAr3pMVHH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139822>)

As language models \(LMs\) evolve from chat assistants to long\-horizon agents capable of multi\-step reasoning and tool use, existing benchmarks remain largely confined to structured or exam\-style tasks that fall short of real\-world professional demands\. To this end, we introduce \\\\$OneMillion\-Bench \(\\\\$OMB\), a benchmark of 400 expert\-curated tasks spanning Law, Finance, Industry, Healthcare, and Natural Science, built to evaluate agents across economically consequential scenarios\. Unlike prior work, the benchmark requires retrieving authoritative sources, resolving conflicting evidence, applying domain\-specific rules, and making constraint decisions, where correctness depends as much on the reasoning process as the final answer\. We adopt a rubric\-based evaluation protocol scoring factual accuracy, logical coherence, practical feasibility, and professional compliance, focusing on expert\-level problems to ensure meaningful differentiation across agents\. Together, \\\\$OMB provides a unified testbed for assessing agentic reliability, professional depth, and an indicator of practical readiness in domain\-intensive scenarios\.

## Fair Division of Work in Collaborative Mean Estimation via Bargaining

**Authors:** Michael O\. Harding; Alex Clinton; Kirthevasan Kandasamy

**ID:** 154171 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Fil0EoNr7j>) | [PDF](<https://openreview.net/pdf?id=Fil0EoNr7j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154171>)

Data collection is a critical component of modern machine learning pipelines\. In many settings, multiple agents, such as hospitals or research labs, can collaborate to share the burden of data collection rather than each bearing it alone\. But how should the work be divided among these agents fairly? Studying this question is complicated by heterogeneity in agents' data collection costs and data quality, and by the fact that fairness itself is subjective and use\-case\-dependent\.  We study these challenges in the context of PAC mean estimation, where agents wish to estimate an unknown scalar $\\mu$ to within accuracy $\\epsilon$ with probability at least $1\-\\delta$, via samples from distributions with common mean $\\mu\\,$\. Agents may incur different costs to collect their samples, and their distributions may have different variances \(data qualities\)\. Our first contribution is a framework that casts collaborative data collection as a bargaining problem, where agents specify a notion of utility \(e\.g\., negative cost incurred, or cost savings relative to working alone\) and a welfare function over agent utilities\. By maximizing the welfare over the feasible set of data collection amounts \(i\.e\. there is enough data to satisfy $\(\\epsilon,\\delta\)$\-PAC mean estimation\), we obtain a fair division of work\. Drawing on classical fairness axioms from the microeconomics literature, the family of admissible welfare functions takes a specific one\-parameter form that includes utilitarian, egalitarian, and Nash bargaining as special cases\. When agents' noise variances \(data qualities\) are known, this yields a clean characterization of the fair division\. Our second contribution addresses the more challenging setting where variances are unknown\. As the feasible set of data collection amounts itself depends on the variances, it is impossible to specify a fair division of work upfront\.  We propose an online algorithm that combines plug\-in variance estimates with carefully calibrated forced sampling, and show that it is asymptotically optimal: the ratio of the achieved welfare to the welfare of the true fair division converges to 1 almost surely as either $\\epsilon$ or $\\delta$ goes to 0\. We further show that our estimator asymptotically exactly meets the specified error tolerance and failure probability\.

## Guiding Data Allocation for Robust Subpopulation Generalization

**Authors:** Zhaoying Pan; Yipei Wang; Shenyu Lu; Xiaoqian Wang

**ID:** 153167 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NLzY8w4ead>) | [PDF](<https://openreview.net/pdf?id=NLzY8w4ead>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153167>)

Machine learning models often achieve high average accuracy in the training data while performing poorly on test data due to subpopulation shift\. A common data\-centric solution is to enforce balanced subgroup proportions, but full balance can be costly, infeasible, and not always necessary\. In this work, we study whether balanced training data is the unique optimal configuration for robust subpopulation generalization\. We analyze the theoretical performance across training subgroup distributions and show that multiple configurations, including substantially imbalanced ones, can achieve performance comparable to the balanced configuration\. We further derive gradient\-based directions for adjusting subgroup proportions to improve robustness more effectively\. These directions can diverge from the direct path toward balance, suggesting that balancing is not always the most efficient data\-allocation strategy\. We validate the theoretical insights with controlled experiments on image and text benchmarks, showing that gradient\-guided allocation can improve robustness more efficiently than directly enforcing balance\. These findings suggest that strategically allocating data offers a more flexible and principled path to robust performance than simple balancing\.

## Riemannian Ordinary Least Squares

**Authors:** Xiaoyu Chen; Yujing Huang; Yingyan Zeng

**ID:** 152577 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S3Dsn1POab>) | [PDF](<https://openreview.net/pdf?id=S3Dsn1POab>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152577>)

Many scientific responses take values in Riemannian manifolds, with predictors that are scalar\- and/or manifold\-valued\. A regression analysis in such settings must support not only point prediction but also formal hypothesis testing and effect\-size estimation for individual coefficients\. Yet no current manifold\-regression framework simultaneously accommodates both predictor types, and returns per\-coefficient hypothesis tests\. We propose Riemannian Ordinary Least Squares \(ROLS\), a tangent\-space conditional\-mean model that serves as the OLS analogue for this setting\. ROLS is well defined under an explicit injectivity condition that keeps the logarithm maps single\-valued, with a cut\-locus diagnostic for branch\-sensitive cases outside it\. Within the local geometric setting it admits a closed\-form estimator, an $O\(n^\{\-1\}\)$ excess prediction\-error bound with explicit curvature bias, and asymptotic $t$\- and Wald tests for individual coefficients\. Across simulations with synthetic data and three case studies with real data, ROLS is competitive with the strongest prediction baselines and identifies scientifically meaningful predictors, providing for manifold\-valued regression the coefficient\-level inference that OLS provides in the Euclidean case\.

## When Form Changes but Logic Doesn’t: Building Logic\-invariant LLMs through Structures

**Authors:** Xuyuan Liu; Xinshuai Dong; Elynn Chen; Yujun Yan

**ID:** 154219 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FK8bpwDTcv>) | [PDF](<https://openreview.net/pdf?id=FK8bpwDTcv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154219>)

Large language models \(LLMs\) have achieved strong performance across diverse reasoning tasks, yet it remains unclear whether this performance reflects an understanding of underlying logical structure or a reliance on shallow semantic cues\. A key indicator of such understanding is whether models treat logically equivalent inputs consistently, producing the same predictions despite differences in expression\. Through systematic evaluation on curated data, we show that even strong LLMs often fail this test: they do not consistently preserve predictions across logically equivalent inputs and generalize poorly to unseen logical forms\. To address this limitation, we propose LoGIcal STructure\-guided Reasoning \(LoGIST\), a framework that guides LLM reasoning with explicit logical structure\. LoGIST maps each input instance to a decision diagram, a directed acyclic graph that captures the underlying logical structure, and encodes this graph into a logical embedding that conditions the LLM’s reasoning process\. Across multiple training settings, LoGIST reduces inconsistency under logical equivalence and improves generalization to unseen logical forms, suggesting that logical invariance is a useful target for building more robust and generalizable logical reasoning in LLMs\.

## JudgmentBench: Comparing Rubric and Preference Evaluation for Quality Assessment

**Authors:** Russell Yang; Ruishi Chen; Pierce Kelaita; Riya Ranjan; Sibo Ma; Charles Dickens; Matthew Guillod; Megan Ma; Julian Nyarko

**ID:** 139683 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AkC78nUjam>) | [PDF](<https://openreview.net/pdf?id=AkC78nUjam>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139683>)

Two methodologies dominate current practices of benchmarking: rubric\-based scoring evaluates items against predefined criteria, whereas comparative judgment elicits pairwise preferences between outputs\. Although both methodologies are widely used, the choice between them is rarely justified\. We release JudgmentBench, a benchmark of 30 real\-world legal tasks, paired with 1,539 rubric scores and 1,530 pairwise preference judgments collected from practicing attorneys—including at major U\.S\. law firms—with substantial experience\. The annotations constitute the first publicly available dataset in a high\-expertise domain in which both supervision signals are elicited from the same experts on the same items\. Using LLM\-generated outputs at three constructed quality levels, we provide an initial empirical comparison: comparative judgments recover the intended quality ordering substantially better than rubrics \(mean Spearman's rank correlation of 0\.908 vs\. 0\.150, $\\widehat\{D\}=0\.758$ \[0\.494, 1\.021\]\) while requiring less than half the annotation time\. The patterns hold for human annotators and LLM autograders\. Beyond this initial comparison, the paired structure of the dataset supports a broader research agenda on how expert judgment should be elicited, aggregated, and used as supervision in domains without verifiable ground truth\.

## Synthetic Tasks for Training AutoResearch

**Authors:** Ziyang Cai; Seyyedamirhossein Saeidi; Harkirat Singh Behl

**ID:** 152335 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TqCbmUrduo>) | [PDF](<https://openreview.net/pdf?id=TqCbmUrduo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152335>)

With the advent of AI agents, automated scientific discovery is becoming an increasingly plausible goal\. However, training agents to autonomously execute the engineering\-heavy labor of machine learning \(ML\) research requires massive, process\-level supervision\. Existing static benchmarks omit critical intermediate steps such as debugging and incremental reasoning, and manual data collection is prohibitively expensive\. To overcome this data bottleneck, we introduce ML\-AutoResearch \(ML\-AR\), a scalable pipeline for automatically generating synthetic, end\-to\-end ML research tasks\. Each task defines a complete research cycle, including problem specification, dataset selection, baseline implementation, and iterative improvement\. To ensure realism and executability, tasks are grounded in real\-world datasets and refined via an automated self\-debugging procedure without requiring human supervision\. We construct a large\-scale dataset of teacher trajectories on these synthetic tasks to train student agents via supervised fine\-tuning\. We evaluate the resulting agents across 3 diverse ML research benchmarks\. Our comprehensive experiments across 2 distinct model families and 3 model sizes demonstrate that training on ML\-AR trajectories yields consistent and significant capability gains\. Fine\-tuning improves the Aggregation Under the Performance \(AUP\) by up to 18% and substantially boosts overall pass rates, highlighting robust out\-of\-domain generalization\.

## Stability and Diversity of Networked Self\-Consuming Generative Ecosystems

**Authors:** Xiukun Wei; Yang Zhang; Xueru Zhang

**ID:** 153225 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mq8Ixa9IkT>) | [PDF](<https://openreview.net/pdf?id=Mq8Ixa9IkT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153225>)

The widespread deployment of generative AI has made it increasingly difficult to distinguish synthetic content from real data\. Consequently, synthetic data is inevitably incorporated into the training pipelines of future model generations, forming a \*self\-consuming training loop\*\. Prior work has studied the effects of such recursive self\-consuming training, but analyses have largely been limited to \*isolated\* models, where a model consumes only its own synthetic data, or to simplified interactions between two models\. This paper takes a first step toward understanding \*networked\* self\-consuming generative models, in which multiple models consume synthetic data generated by one another through complex interaction pathways\. We introduce a theoretical framework representing models as nodes in a directed, weighted graph, with edge weights governing the flow of synthetic data among models\. Using this framework, we analyze the long\-term behavior of networked models under retraining dynamics, establishing conditions for convergence and characterizing the resulting fixed points\. We further investigate how the system's long\-term stability and diversity are shaped by each model’s access to real data, cross\-model data consumption, and the structure of the interaction graph\.

## Learning Digital Twins under Drift: Optimal Tracking Rates for Non\-Stationary Dynamical Systems

**Authors:** David Li; Honggang Wang

**ID:** 152808 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QErFsIRxnJ>) | [PDF](<https://openreview.net/pdf?id=QErFsIRxnJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152808>)

We study online identification of linear\-in\-parameter dynamical systems whose true parameters drift over time\. Measuring non\-stationarity through the path variation $V\_T = \\sum\_\{t=1\}^\{T\-1\}\\\|\\theta\_\{t\+1\}^\\star \- \\theta\_t^\\star\\\|$, we make two contributions\. First, we give a clean blockwise dynamic\-regret analysis for continuous projected online gradient descent, yielding $E\[R\_T\] = O\(T/\\sqrt\{\\tilde W\} \+ \\tilde W V\_T\)$ and hence the oracle\-tuned rate $O\(T^\{2/3\}V\_T^\{1/3\}\)$ \. Second, we propose a residual\-based adaptive step size and prove an oracle\-proxy comparison theorem: when the residual proxy tracks the local prediction\-error signal with lower\-order overhead, the adaptive algorithm inherits the oracle scaling\. Experiments on synthetic systems and real turbofan\-engine degradation data \(NASA C\-MAPSS\) support the matched\-regime slope prediction on synthetic data, diagnose the failure regime when proxy overhead dominates, and show a clear unsupervised health\-indicator trend in the residual proxy on FD001\. A separate fast\-rate guarantee under persistent excitation and a tube MPC integration are deferred to the appendix\.

## Two is better than one: designing heterogeneous scales in binary rating systems

**Authors:** Liren Shan; Alec Sun; Jingyan Wang

**ID:** 148218 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zTVNhgFzsK>) | [PDF](<https://openreview.net/pdf?id=zTVNhgFzsK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148218>)

Online platforms often struggle with inflated, uninformative user ratings\. This issue can be mitigated by better design of the data collection mechanism, for example through changing the phrasing of user questions\. Previous work optimizes a single rating scale to best distinguish the inherent qualities of items under binary feedback\. In this paper, we demonstrate the power of utilizing different rating scales for different users\. First, we show that a designer can always split a single rating scale into two to improve item rankings\. Next, we formally characterize the optimal design of multiple scales as a series of 0\-1 step functions whose threshold values are evenly spaced\. Finally, we consider an adaptive model where subsequent rating scales can depend on the responses from previous users and show that adaptivity leads to even greater distinguishing power\. All in all, our theoretical results show that using heterogeneous scales significantly improves item rankings on platforms\.

## Learning How to Cube

**Authors:** Ferhat Erata; Sam Kouteili; Thanos Typaldos; Timos Antonopoulos; Robert B Jones; Byron Cook; Ruzica Piskac

**ID:** 148433 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xpTnC6GT2x>) | [PDF](<https://openreview.net/pdf?id=xpTnC6GT2x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148433>)

Despite the effectiveness of Cube\-and\-Conquer \(C&amp;C\) for solving challenging Boolean Satisfiability \(SAT\) problems, no prior work has shown that transformer\-based models can learn effective cubing heuristics\. We introduce a neuro\-symbolic post\-training framework for this task\. We design an MCTS\-based data curation pipeline that uses symbolic heuristics to explore splitting decisions over SAT competition formulas, producing preference data grounded in solver statistics and augmented with reasoning traces from a teacher model\. Our two\-stage post\-training, supervised fine\-tuning \(SFT\) followed by direct preference optimization \(DPO\), enables a 4B\-parameter model to achieve a pass@5 score of 53 on 100 SAT competition benchmarks, surpassing frontier LLMs such as Claude\-Sonnet\-4 \(50\) and matching the best symbolic heuristic \(53\)\. Ablations show that SFT alone improves pass@5 from 46 to 51, with DPO adding 2 additional benchmarks; an entropy/agreement ablation on realized first\-cube decisions further shows that SFT, not DPO, accounts for the root\-level decision diversity that produces complementary per\-run coverage over deterministic symbolic methods\. This demonstrates that transformers can be trained to make effective cubing decisions in a domain traditionally dominated by symbolic methods\.

## Limits and Potential of Score\-Based Data Valuation: Redundancy, Complementarity, and Non\-Monotonicity

**Authors:** Kumar Kshitij Patel; Sai Praneeth Karimireddy; Raul Fernandez; Manolis Zampetakis

**ID:** 149315 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=r5I5zWXtOq>) | [PDF](<https://openreview.net/pdf?id=r5I5zWXtOq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149315>)

Score\-based valuation methods, such as Shapley values and Leave\-one\-out \(LOO\), are widely used to assign value to data in modern machine learning pipelines, including for tasks such as attribution, selection, and pricing, yet it remains unclear when these scalar scores reliably guide downstream decisions\. We show that their success is governed by three structural properties of the learning problem: substitutability, complementarity, and non\-monotonicity\. Substitutability \(redundancy\) can collapse pointwise credit, causing Shapley and LOO to fail even under monotone submodular valuations; bounded curvature limits this collapse and helps recover constant\-factor approximation\. Complementarity can break common score\-based rules and greedy\-style adaptive selection, though these effects diminish with sufficient coverage\. Non\-monotonicity implies that all non\-adaptive methods, including score\-based approaches, can fail, establishing a separation from adaptive algorithms\. Our theoretical results, supported by empirical evidence, provide a structural view of data valuation and motivate a simple practical pipeline: deduplicate to reduce redundancy, ensure coverage to suppress complementarity, and then choose between score\-based or adaptive methods based on non\-monotonic effects\.

## VeriContest: A Competitive\-Programming Benchmark for Verifiable Code Generation

**Authors:** Zichen Xie; Mrigank Pawagi; Yuxin Liu; Aaditi Rai; Lize Shao; John Berberian; Sicong Che; Wenxi Wang

**ID:** 139699 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9vAOEu7dQE>) | [PDF](<https://openreview.net/pdf?id=9vAOEu7dQE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139699>)

Large language models can now generate useful code from natural language, but their outputs still come without correctness guarantees\. Verifiable code generation offers a path beyond testing by requiring models to produce not only executable code, but also formal specifications and machine\-checkable proofs\. Progress in this direction, however, is difficult to measure: existing benchmarks are often small, focus on only one part of the pipeline, lack ground\-truth proofs or rigorous specification validation, or target verification settings far from mainstream software development\. We present VeriContest, a benchmark of 946 competitive\-programming problems from LeetCode and Codeforces for verifiable code generation in Rust with Verus\. Each problem pairs a natural language description with expert\-validated formal specifications, judge\-accepted Rust code, Verus\-checked proofs, and positive and negative test suites\. VeriContest is constructed through a three\-phase pipeline that scales from manually verified seed problems to semi\-automated expansion with human\-in\-the\-loop review\. To further strengthen benchmark quality, we use testing as an additional quality\-assurance layer for validating postcondition completeness\. VeriContest supports both isolated and compositional evaluation of specification generation, code generation, proof generation, and end\-to\-end verified program synthesis\. Evaluating ten state\-of\-the\-art models reveals a sharp gap between ordinary coding ability and verifiable code generation: the strongest model reaches 92\.18% on natural\-language\-to\-code generation, but only 48\.31% on specification generation, 13\.95% on proof generation, and 5\.29% end\-to\-end\. These results identify proof and specification generation as the central bottlenecks for current models and establish VeriContest as a rigorous platform for measuring and training future systems that generate code with machine\-checkable correctness\.

## DRTriton: Large\-Scale Synthetic Data Driven Reinforcement Learning for Triton Kernel Generation

**Authors:** Siqi Guo; Ming Lin; Tianbao Yang

**ID:** 148751 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vIGiwZgJHT>) | [PDF](<https://openreview.net/pdf?id=vIGiwZgJHT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148751>)

Developing efficient CUDA kernels is a fundamental yet challenging task in the generative AI industry\. Recent research leverages Large Language Models \(LLMs\) to automatically convert PyTorch reference implementations to CUDA kernels, significantly reducing engineering effort\. State\-of\-the\-art LLMs, such as GPT\-5\.2 and Claude\-Sonnet\-4\.5, still struggle with this task\. To address this challenge, we propose \*\*DRTriton\*\*, a scalable learning framework for training LLMs to convert PyTorch programs into highly optimized Triton kernels, which are then compiled to CUDA kernels at runtime\. DRTriton consists of three key components: \(i\) a data synthetic algorithm CSP\-DAG that guarantees full coverage and unbiased uniform sampling over the operator space with controlled difficulty; \(ii\) a curriculum RL framework with decoupled rewards that jointly optimizes conversion success rate and execution speed;  and \(iii\) a test\-time search algorithm that further improves the execution speed of the generated Triton kernels\. With a warmup stage of SFT on limited PyTorch\-Triton pairs curated using existing LLMs, DRTriton trained by RL on synthesized PyTorch programs generalizes effectively to real\-world CUDA kernels that are challenging even for human experts\. Experimental results show that DRTriton\-7B achieves speedup over PyTorch on 92\\% of KernelBench Level 2 tasks, compared to 23\\% for GPT\-5\.2 and 19\\% for Claude\-Sonnet\-4\.5\.

## When Are Semivalue\-Based Decisions Identifiable? Robust Data Selection under Utility Ambiguity

**Authors:** Hannah Diehl; Justin Steil; Ashia Wilson

**ID:** 155762 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=36n5iNZwMk>) | [PDF](<https://openreview.net/pdf?id=36n5iNZwMk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155762>)

Semivalues are widely used to assign credit and guide data curation decisions, yet their outputs depend on a utility function that is not uniquely determined by the task\. We study partition\-based decisions, which directly model data curation tasks such as selecting high\-quality subsets or flagging noisy examples, under two structurally unavoidable sources of utility underspecification: monotone transformations of performance scores and unconstrained small\-sample behavior\. We formalize outcome robustness in this setting as invariance of the induced partition across admissible utility respecifications\. We establish that partition robustness is necessary for guaranteed success of semivalue\-based data selection\.   To assess this condition in practice, we provide algorithms that certify partition robustness or produce a concrete witness utility demonstrating instability, requiring no utility evaluations beyond those already computed for the semivalues themselves, with formal correctness guarantees under both exact and approximate computation\. We show that utilities admitting a coalitionally dominant top\-$k$ subset, where high\-quality points contribute more than low\-quality points across every possible coalition, guarantee robust partition decisions, subsuming the modular utility case previously identified as sufficient\. Together, these results provide a practical framework for determining when semivalue\-based selection is well\-defined under utility ambiguity\.

