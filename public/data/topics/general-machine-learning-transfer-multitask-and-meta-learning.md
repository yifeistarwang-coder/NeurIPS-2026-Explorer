# General Machine Learning / Transfer, Multitask and Meta\-learning

通用机器学习 / 迁移、多任务与元学习

115 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Distilling What Matters: Confidence\-Aware Selective Distillation for Large Language Models

**Authors:** Ayan Sengupta; Vaibhav Seth; Tanmoy Chakraborty

**ID:** 149862 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mhRs8gO4jl>) | [PDF](<https://openreview.net/pdf?id=mhRs8gO4jl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149862>)

Knowledge Distillation \(KD\) trains a smaller\-capacity student model to imitate a larger\-capacity teacher model by matching output distributions, implicitly assuming the teacher to be a reliable oracle\. In large language models \(LLMs\), this assumption often fails: teacher predictions can exhibit high entropy and hallucinations, causing standard KD to degrade well\-calibrated student priors\. We propose CaRE\-KD, a confidence\-gated distillation framework that replaces static objectives with uncertainty\-adaptive optimization\. CaRE\-KD has two components: a token\-level loss \(CaRE\-Divergence\) that adaptively switches between Forward and Reverse KL based on teacher\-\-student confidence, and a batch\-level epistemic rejection mechanism \(Revival\) that suppresses updates when the teacher is more uncertain than the student\. We provide a gradient\-level analysis showing how this dual\-granularity design induces a conditional calibration mechanism that prior static divergences cannot reproduce\. Empirically, across eight teacher\-\-student pairs and eleven benchmarks spanning instruction following, chat alignment, code generation, and mathematical reasoning, CaRE\-KD delivers consistent and significant gains over strong baselines \(Skewed\-KL, $\\alpha$\-\-$\\beta$ divergence\)\. Highlights include up to $\+3\.2$ average ROUGE\-L on instruction\-following tasks, $\+2\.1$ pass@1 on MBPP, $\+1\.7$ accuracy on GSM8k, and $\+1\.8$ accuracy on CollegeMath over the strongest baseline, with consistent gains in LLM\-as\-a\-judge factuality \(up to $\+2\.5$ per task over Skewed\-RKL\)\. Revival further acts as a principled, loss\-agnostic plug\-in that systematically strengthens existing distillation objectives by filtering epistemically unreliable teacher supervision\.

## Bridging CLIP with DINO: Cross\-Modal Information Maximization for Online Test\-Time Adaptation

**Authors:** Taehoon Kim; Wonjun Hwang; Hyunsouk Cho

**ID:** 152887 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PeeVlwPgi8>) | [PDF](<https://openreview.net/pdf?id=PeeVlwPgi8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152887>)

_Abstract unavailable from the accessible public sources._

## From Small to Large: Cross\-Scale Graph Domain Adaptation via Local\-Global Structural Alignment

**Authors:** Ruiyi Fang; Gezheng Xu; QIUHAO Zeng; Zihao Jing; Jiale Cai; Zhihao Li; Hao Zheng; Xuanting Xie; Shuo Wang; Bingheng Li; RUIZHI PU; Zhao Kang; Charles Ling; Boyu Wang

**ID:** 152509 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Sb0yr9VOw6>) | [PDF](<https://openreview.net/pdf?id=Sb0yr9VOw6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152509>)

_Abstract unavailable from the accessible public sources._

## On the Effect of Token Correlations on Semantic Transfer in Transformers

**Authors:** Nevena Lazic; Julian Zimmert; Alan Malek; Tor Lattimore; Csaba Szepesvari; András György

**ID:** 155543 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4kvpzWhoqH>) | [PDF](<https://openreview.net/pdf?id=4kvpzWhoqH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155543>)

_Abstract unavailable from the accessible public sources._

## HyperFlow: Gradient\-Free Test\-Time Adaptation for Cross\-Domain Few\-Shot Classification

**Authors:** Donggyun Kim; Chanwoo Kim; Seunghoon Hong

**ID:** 154114 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GACGdvulrX>) | [PDF](<https://openreview.net/pdf?id=GACGdvulrX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154114>)

While test\-time fine\-tuning is beneficial in cross\-domain few\-shot classification, the need for multiple backpropagation steps can be prohibitively expensive in resource\-constrained environments\. We propose HyperFlow, a gradient\-free test\-time adaptation method that amortizes fine\-tuning dynamics into a lightweight conditional drift network\. During offline training, HyperFlow learns from fine\-tuning trajectories collected on meta\-training tasks\. Once trained, it adapts a selected PEFT parameter subspace for a new task by numerical ODE solving, requiring only forward passes of the drift network and no test\-time backpropagation through the target model\. In experiments on Meta\-Dataset and CD\-FSL benchmarks, our method improves out\-of\-domain performance over the direct transfer approach while using only 6\-14\\% of peak memory and about 1\\% of the FLOPs of standard fine\-tuning, positioning HyperFlow as an accuracy–efficiency trade\-off between direct transfer and fine\-tuning\.

## Adapting Actively on the Fly: Relevance\-Guided Online Meta\-Learning with Latent Concepts for Geospatial Discovery

**Authors:** Jowaria Khan; Anindya Sarkar; Yevgeniy Vorobeychik; Elizabeth Bondi\-Kelly

**ID:** 156089 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0SGmhIr9iM>) | [PDF](<https://openreview.net/pdf?id=0SGmhIr9iM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156089>)

In environmental monitoring, data collection is often costly, sparse, and shaped by urgent public\-health needs\. This is particularly true for cancer\-causing PFAS \(Per\- and polyfluoroalkyl substances\) contamination, where discussions with domain experts and environmental organizations highlight the need to strategically identify high\-risk, under\-observed regions under tight sampling budgets\. More broadly, similar challenges arise in disaster response and public health settings, where dynamic environments make it essential to efficiently uncover hidden targets from limited ground truth\. Yet sparse and biased geospatial labels limit the applicability of existing learning\-based methods, such as reinforcement learning\. To address this, we propose a unified geospatial discovery framework that integrates active learning, online meta\-learning, and concept\-guided reasoning\. Our approach introduces two key innovations built on a shared notion of \*concept relevance\*, capturing how domain\-specific factors influence target presence: a \*concept\-weighted uncertainty sampling strategy\*, where uncertainty is modulated by learned relevance from readily available concepts such as land cover and source proximity; and a \*relevance\-aware meta\-batch formation strategy\* that promotes semantic diversity during online\-meta updates, improving generalization in dynamic environments\. We evaluate our framework on PFAS contamination discovery as a real\-world inspired environmental monitoring task, demonstrating robust target discovery under limited data and changing conditions\.

## Goal\-Conditioned Supervised Learning for Multi\-Objective Recommendation

**Authors:** Shijun Li; Hilaf Hasson; Jing Hu; Joydeep Ghosh

**ID:** 153765 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IpkrkSg3Jo>) | [PDF](<https://openreview.net/pdf?id=IpkrkSg3Jo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153765>)

Multi\-objective learning endeavors to concurrently optimize multiple objectives using a single model, aiming to achieve high and balanced performance across diverse objectives\. However, this often entails a complex optimization problem to balance the learning of potentially conflicting objectives, leading to solutions with higher memory requirements and computational complexity\. This paper introduces a Multi\-Objective Goal\-Conditioned Supervised Learning \(MOGCSL\) framework for automatically learning to achieve multiple objectives from offline sequential data\. MOGCSL extends the conventional GCSL method to multi\-objective scenarios by redefining goals from one\-dimensional scalars to multi\-dimensional vectors\. It benefits from naturally eliminating the need for complex architectures and optimization constraints\. Moreover, MOGCSL inherently disentangles uninformative or noisy training instances that fail to achieve desirable long\-term rewards across multiple objectives\. We also introduce a novel goal\-selection algorithm for MOGCSL to model and identify desired and achievable goals for inference\.  In this paper, we focus on its application to the next action prediction problem in commercial\-grade recommender systems\. In this context, any viable solution needs to be reasonably scalable and also be robust to large amounts of noisy data that is characteristic of this application space\. We show that MOGCSL performs admirably on both counts by extensive experiments\. Also, analysis and experiments are included to explain its strength in discounting the noisier portions of training data in recommender systems with multiple objectives\. Code is available at: https://anonymous\.4open\.science/r/MOGCSL\-D7A2\.

## Geometry over Density: Few\-Shot Cross\-Domain OOD Detection

**Authors:** Li Li; You Qin; Jiate Li; Charith Peris; Lisa Bauer; Roger Zimmermann; Yue Zhao

**ID:** 150707 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g7cJBv2nOf>) | [PDF](<https://openreview.net/pdf?id=g7cJBv2nOf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150707>)

_Abstract unavailable from the accessible public sources._

## You Don’t Need Aligned Representations: Knowledge Distillation via Random Prototype Spaces

**Authors:** Hamza Etcibasi; Ramazan Gokberk Cinbis

**ID:** 153784 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IgI7pI0qVB>) | [PDF](<https://openreview.net/pdf?id=IgI7pI0qVB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153784>)

_Abstract unavailable from the accessible public sources._

## Hydra: Towards Transferable Multi\-Task Learning on Temporal Graphs

**Authors:** Kiarash Shamsi; Farimah Poursafaei; Tran Gia Bao Ngo; Reihaneh Rabbany; Baris Coskunuzer; Guillaume Rabusseau; Michael Bronstein; Shenyang Huang; Cuneyt Akcora

**ID:** 149441 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q45V4tagJs>) | [PDF](<https://openreview.net/pdf?id=q45V4tagJs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149441>)

_Abstract unavailable from the accessible public sources._

## DDGE: Disentangled Dirichlet Geodesic Evaluation for Robust Few\-Shot Learning

**Authors:** Yifan Mei; Kun Zhou; Zelei Wu; Jieyu Zhao; Xulun Ye

**ID:** 151036 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dSbq1BWqRS>) | [PDF](<https://openreview.net/pdf?id=dSbq1BWqRS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151036>)

_Abstract unavailable from the accessible public sources._

## META\-PAP: Meta\-learning for Prompt\-aware Preference Pairing in LLM Alignment

**Authors:** Pinlong Zhao; Shiyu Hu; Jing Zhang; Mengyang Li

**ID:** 148316 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yiQav1vmSS>) | [PDF](<https://openreview.net/pdf?id=yiQav1vmSS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148316>)

Direct Preference Optimization \(DPO\) has become a popular route for aligning large language models with human preferences, but existing pipelines treat all preference pairs uniformly and ignore prompt\-level heterogeneity\. We show that the optimal pair\-selection strategy varies systematically with prompt characteristics: prompts with concentrated reward distributions benefit from large reward\-gap pairs that provide unambiguous signal, while prompts with diverse responses benefit from moderate\-gap pairs because extreme positions are dominated by outliers\. No fixed strategy is optimal across this heterogeneity\. We propose META\-PAP \(Meta\-learning for Prompt\-aware Preference Pairing\), a framework that turns this observation into a learned algorithm\. META\-PAP generates multiple diverse pairs per prompt via a structured grid over the response reward distribution, extracts a compact prompt\-aware feature vector, and trains a lightweight meta\-network through bilevel optimization to predict per\-pair weights\. The inner loop is a weighted DPO update; the outer loop evaluates a virtual policy on a small clean meta\-set\. Across Llama\-3\-8B, Mistral\-7B\-v0\.3, and Llama\-2\-7B, META\-PAP consistently outperforms vanilla DPO, fixed\-position pairing, reward\-gap weighting, top\-$k$ filtering, curriculum, and statistical rejection sampling, with average gains of $\+3\.9$ points on AlpacaEval\~2\.0 and $\+3\.2$ points on Arena\-Hard, and approaches an oracle that exhaustively searches per prompt\. The learned weighting policy is interpretable: it favors large\-gap pairs on low\-diversity prompts and softly rejects extreme pairs on high\-diversity prompts\. We additionally find that the meta\-network requires only $M\\\!=\\\!150$ pairs to saturate, transfers across domains, tolerates label noise on the meta\-set, and remains effective with as few as $n\\\!=\\\!32$ on\-policy samples per prompt\.

## ModelLens: Finding the Best for Your Task from Myriads of Models

**Authors:** Rui Cai; Wenjie Mo; Xiaofei Wen; Qiyao Ma; Wenhui Zhu; Xiwen Chen; Muhao Chen; Zhe Zhao

**ID:** 151420 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aorWdSFrIh>) | [PDF](<https://openreview.net/pdf?id=aorWdSFrIh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151420>)

_Abstract unavailable from the accessible public sources._

## Unlocking Compositional Generalization in Continual Few\-Shot Learning

**Authors:** Phu\-Quy Nguyen\-Lam; Phu\-Hoa Pham; Dao S Minh; Chi Nguyen Tran; Trung\-Kiet Huynh; Long Tran\-Thanh

**ID:** 153657 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JiDX823MQW>) | [PDF](<https://openreview.net/pdf?id=JiDX823MQW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153657>)

_Abstract unavailable from the accessible public sources._

## ScreenShot: A Foundation Model for Few\-Shot Combination Drug Screening

**Authors:** Antoine de Mathelin; Christopher Tosh; Wesley Tansey

**ID:** 150824 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=f1jlqYKqL6>) | [PDF](<https://openreview.net/pdf?id=f1jlqYKqL6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150824>)

_Abstract unavailable from the accessible public sources._

## Cross\-Architecture Transferability is Width\-Confounded:Diagnosis and Subspace Correction

**Authors:** QIN LIU; Chen Zhong; Fengshan Zhao

**ID:** 151354 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bAYaurZBBI>) | [PDF](<https://openreview.net/pdf?id=bAYaurZBBI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151354>)

_Abstract unavailable from the accessible public sources._

## BDC\-Merge: Cross\-Architecture Model Merging via Dependency Alignment

**Authors:** Yukai Wang; Wenhao Zhao; Xingyu Zhu; Junfeng Fang; Ruipeng Wang; Houcheng Jiang; Xiang Wang

**ID:** 151593 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZOfiCmcwhT>) | [PDF](<https://openreview.net/pdf?id=ZOfiCmcwhT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151593>)

Large language models have achieved remarkable capabilities by scaling model capacity and training data, yet many practical deployments still rely on smaller models with limited resources whose capabilities lag behind their larger counterparts trained with richer resources\. This gap calls for efficient knowledge transfer from source models with richer resources to compact target models\. While model merging provides an effective mechanism, most existing methods are based on the assumption that the source and target models are architecturally compatible, making them inapplicable to heterogeneous source and target pairs\. Although a recent method based on optimal transport extends model merging to settings with different architectures, it remains limited by linear correspondence modeling, iterative transport optimization, and reliance on supervised adaptation after fusion for further performance gains\. To address these limitations, we propose BDC\-Merge, a framework for model merging across different architectures based on Brownian Distance Correlation \(BDCorr\)\. BDC\-Merge uses a small calibration set to estimate dependencies between heterogeneous activations at the feature level and the layer level, and directly lifts these dependencies from activation space into fusion operators in weight space, enabling effective parameter fusion across different architectures without any gradient based optimization or training after fusion\. Extensive experiments across four low resource language and two specialized knowledge benchmarks show that BDC\-Merge consistently outperforms the state of the art baseline for model merging across different architectures and largely preserves the target model’s general capabilities\.

## Deconstructing Multi\-Task Active Learning: The Paradox of Gradient Conflict and Orthogonal Decomposition

**Authors:** Juho Jung; Seongjae Kang; Jinyoung Han

**ID:** 153116 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NnPRFtAI1U>) | [PDF](<https://openreview.net/pdf?id=NnPRFtAI1U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153116>)

Existing multi\-task active learning \(MTL\-AL\) methods predominantly rely on the linear scalarization of heterogeneous objectives, such as uncertainty, diversity, and gradient conflict\.We argue that this entangled formulation is fundamentally limited, as linear combination fails to capture Pareto\-optimal trade\-offs under conflicting objectives\. To address this limitation, we propose a paradigm shift from combination to deconstruction and introduce a principled framework that rethinks MTL\-AL along three orthogonal dimensions\. First, we identify the Conflict Paradox: contrary to conventional wisdom, samples with high gradient conflict are not noise to be avoided but carry maximal information about unresolved inter\-task trade\-offs\. We therefore decouple sample selection, which embraces conflict, from optimization, which resolves it via gradient surgery\. Second, we introduce Orthogonal Decomposition, separating the acquisition objective into two distinct axes: Informativeness and Exploration\. This two\-stage process, consisting of subspace projection followed by manifold coverage, prevents \`\`diversity dilution'' by excluding uninformative outliers before enforcing diversity\. Third, we propose Cross\-Task Mutual Information \(CTMI\), a distribution\-free proxy for inter\-task dependency derived from a variational lower bound under the Maximum Entropy principle\. Extensive experiments on COCO, Cityscapes, and NYUv2 — including comparisons against recent multi\-task active learning baselines — demonstrate consistent improvements over state\-of\-the\-art MTL\-AL methods, highlighting that structural rethinking of acquisition yields larger gains than incremental heuristic design\. Our code is publicly available at: \\href\{https://anonymous\.4open\.science/r/multitask\_active\_learning\-1545\}\{\\texttt\{https://anonymous/CTMI\}\}

## Geometry over Density: Few\-Shot Cross\-Domain OOD Detection

**Authors:** Li Li; You Qin; Jiate Li; Charith Peris; Lisa Bauer; Roger Zimmermann; Yue Zhao

**ID:** 150707\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150707

[Paper](<https://openreview.net/forum?id=g7cJBv2nOf>) | [PDF](<https://openreview.net/pdf?id=g7cJBv2nOf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150707>)

_Abstract unavailable from the accessible public sources._

## You Don’t Need Aligned Representations: Knowledge Distillation via Random Prototype Spaces

**Authors:** Hamza Etcibasi; Ramazan Gokberk Cinbis

**ID:** 153784\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153784

[Paper](<https://openreview.net/forum?id=IgI7pI0qVB>) | [PDF](<https://openreview.net/pdf?id=IgI7pI0qVB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153784>)

_Abstract unavailable from the accessible public sources._

## Hydra: Towards Transferable Multi\-Task Learning on Temporal Graphs

**Authors:** Kiarash Shamsi; Farimah Poursafaei; Tran Gia Bao Ngo; Reihaneh Rabbany; Baris Coskunuzer; Guillaume Rabusseau; Michael Bronstein; Shenyang Huang; Cuneyt Akcora

**ID:** 149441\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149441

[Paper](<https://openreview.net/forum?id=q45V4tagJs>) | [PDF](<https://openreview.net/pdf?id=q45V4tagJs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149441>)

_Abstract unavailable from the accessible public sources._

## Understanding the Curse of Unrolling

**Authors:** Sheheryar Mehmood; Florian Knoll; Peter Ochs

**ID:** 149289 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rOtZp9OVts>) | [PDF](<https://openreview.net/pdf?id=rOtZp9OVts>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149289>)

Algorithm unrolling is ubiquitous in machine learning, particularly in hyperparameter optimization and meta\-learning, where Jacobians of solution mappings are computed by differentiating through iterative algorithms\. Although unrolling is known to yield asymptotically correct Jacobians under suitable conditions, recent work has shown that the derivative iterates may initially diverge from the true Jacobian, a phenomenon known as the curse of unrolling\. In this work, we provide a non\-asymptotic analysis that explains the origin of this behavior and identifies the algorithmic factors that govern it\. We show that truncating early iterations of the derivative computation mitigates the curse while simultaneously reducing memory requirements\. Finally, we validate our theoretical findings both on synthetic problems and in a meta\-learning setting for few\-shot classification, where we study the behavior of gradients obtained via unrolling and implicit differentiation\.

## Meta\-Learning Preferences for Multilingual LLM Alignment

**Authors:** Jiaying Lin; Seongho Son; Nam P Tran; Long Tran\-Thanh; Ilija Bogunovic; Debmalya Mandal

**ID:** 155916 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1pi7vaFHU1>) | [PDF](<https://openreview.net/pdf?id=1pi7vaFHU1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155916>)

Unequal availability of human preference data across languages poses a significant challenge for aligning large language models in multilingual settings\. To address the lack of sufficient data in low\-resource language alignment, we propose a meta\-learning framework for Reinforcement Learning from Human Feedback and Direct Preference Optimization\. By leveraging preference data from other languages, our framework learns a transferable initialization that enables effective adaptation to a target language with minimal data\. We provide theoretical guarantees for both the meta\-reward modeling and meta\-policy optimization settings, and empirically demonstrate the effectiveness of our approach on multilingual benchmarks\. In an extremely low\-resource setting with only 100 target\-language preference samples, our approach achieves  up to $28\\%$ win\-rate improvements over baseline methods, and consistently outperforms baselines across multiple target languages and model scales\. Our approaches retain these advantages across different combinations of meta\-training languages and varying linguistic distances from the target languages\.

## DriftWeight: Repulsive Drift in Mean\-Flow Space for Neural Network Weight Generation

**Authors:** Reo Iizuka; shioya hiroaki; Naoto YOKOYA

**ID:** 153675 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JcoLKE2ih2>) | [PDF](<https://openreview.net/pdf?id=JcoLKE2ih2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153675>)

Generating neural network weights in a single forward pass promises to amortize model training for fast sampling, transfer, and model\-set construction\.  Yet accuracy alone is insufficient: existing generators can map diverse latent inputs to weights that remain functionally close to their training checkpoints\.  We study this functional mode collapse in the one\-step regime and introduce DriftWeight, a MeanFlow\-based generator with temperature\-scaled repulsive drift in a checkpoint\-augmented PCA proxy space\. The method uses structured negatives from the current batch and optimization history to push generated weights away from observed clusters while preserving task performance\. Our key finding is that repulsion is not automatically compatible with one\-step inference\.  In a controlled ablation, applying the drift loss at the same boundary evaluation used for sampling collapses one\-step accuracy even though multi\-step integration remains accurate\.  DriftWeight mitigates this boundary\-localized failure with a consistency objective that anchors the inference point to the training\-weight manifold\. Across MNIST, Fashion\-MNIST, and CIFAR\-10, DriftWeight matches or exceeds reported 100\-step DeepWeightFlow accuracy in a single forward pass\.  On MNIST, where we directly evaluate error\-set functional overlap, it reduces MaxIoU from the DeepWeightFlow regime of approximately $0\.82$ to $0\.66$\. On CIFAR\-100 with a ViT\-Base target \($\\sim$86M parameters\), one\-step samples remain within $1\.7$ percentage points of the training\-population mean\.

## Beyond Normal References: Discriminative Few\-Shot Anomaly Detection

**Authors:** Huan Wang; Jun Shen; Jun Yan; Guansong Pang

**ID:** 153262 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MZQzx0Papt>) | [PDF](<https://openreview.net/pdf?id=MZQzx0Papt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153262>)

This paper considers a practical few\-shot anomaly detection \(FSAD\) setting, termed \*\*discriminative FSAD\*\*, where a limited number of both normal and anomalous examples are available as references during inference\. Existing FSAD methods rely on normal\-only references through normality matching, ignoring the discriminative clues in anomalous references, while directly fitting both references can overfit to the seen anomalies\. We introduce \*\*IDEAL\*\*, an intrinsic deviation learning framework that leverages both reference types to learn intrinsic deviation patterns characterizing generalizable abnormality as deviations from normality\. IDEAL decomposes the learning process into two novel components: 1\) a Normal Variation Eraser to suppress nuisance normal variations that may lead to noisy deviations from normality, thereby highlighting anomaly\-relevant deviation representations; 2\) an Intrinsic Deviation Encoder to decompose these denoised deviation representations into intrinsic deviation vectors capturing the most discriminative orthogonal deviation directions\. At inference, IDEAL scores query\-to\-normal deviations preserved after projection onto the learned intrinsic deviation vectors, enabling generalization for both seen and unseen anomalies\. Extensive experiments on eight real\-world datasets show that IDEAL generalizes effectively to unseen anomalies and consistently outperforms existing state\-of\-the\-art FSAD methods\.

## RAIL: Representation\-Aligned Imitation Learning for Student\-Compatible Teacher Policies

**Authors:** Meraj Mammadov; Pedro Zuidberg Dos Martires; Johannes A\. Stork

**ID:** 154487 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DEj92qDbTo>) | [PDF](<https://openreview.net/pdf?id=DEj92qDbTo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154487>)

Reinforcement learning \(RL\) from raw sensory inputs such as images or onboard sensors can be challenging due to high\-dimensional observations and sparse rewards\. A common strategy is to train a teacher policy with access to privileged state information and then distill it into a student policy that acts from raw inputs alone\. However, when the teacher relies on information unavailable to the student, exact imitation may be impossible, creating an irreducible imitation gap\. Existing approaches typically mitigate this mismatch through careful reward shaping or additional reinforcement learning on the student policy after the teacher has been trained\. Instead, we introduce Representation\-Aligned Imitation Learning \(RAIL\), which addresses the mismatch during teacher training itself\. RAIL learns a latent representation shared across teacher and student observations using contrastive learning, and trains the teacher policy directly in this space\. Because the teacher policy is constrained to operate on this shared space, it learns behaviors that are reproducible from student observations\. This substantially reduces the imitation gap while preserving task performance\. Across multiple environments, RAIL outperforms strong baselines without reward modification or post\-hoc student fine\-tuning, and surpasses direct reinforcement learning from raw observations\. The learned representations further enable zero\-shot transfer to new tasks through teacher\-only training\.

## Semantic Priors Meet Statistical Evidence: Robust Forests for Few\-Shot Tabular Learning

**Authors:** Xuanliang Zhang; Dingzirui Wang; Keyan Xu; Qingfu Zhu; Wanxiang Che

**ID:** 150782 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fRkZEDhU3I>) | [PDF](<https://openreview.net/pdf?id=fRkZEDhU3I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150782>)

Few\-shot tabular learning is challenging because conventional tree\-based methods suffer from unstable split selection and leaf estimation when labeled examples are scarce\.  Although feature engineering based on Large Language Models \(LLMs\) provides useful semantic priors, it can be brittle when table semantics are incomplete or numerical evidence is unstable\.  This raises two key challenges: achieving semantic\-numerical robustness and calibrating multiple weak signals under sparse supervision\.  Therefore, we present LEAF, a train\-time LLM\-guided forest that treats LLM\-derived features and split preferences as calibratable priors rather than direct supervision\.  During tree induction, LEAF aligns semantic guidance with task\-specific statistical evidence, including teacher\-informed predictive signals and data\-dependent partition statistics, through a unified split\-scoring rule\.  At prediction time, it further stabilizes local estimates by blending sparse empirical observations with teacher\-informed support at each leaf\.  Experiments on few\-shot tabular classification and regression datasets show that LEAF consistently outperforms strong conventional and LLM\-based baselines, improving classification performance by 1\.4 points and reducing regression error by 0\.149 over the strongest previous method\.  Robustness analyses further demonstrate that LEAF is more stable than prior LLM\-based feature engineering methods under missing table semantics and numerical perturbations induced by distributional variation across tabular feature spaces and schema descriptions\.

## Re\-evaluating Continual Learning with Few\-Shot Adaptation

**Authors:** Amogh Inamdar; Matthew So; Vici I Milenia; Richard Zemel

**ID:** 138902 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xycCkL63TF>) | [PDF](<https://openreview.net/pdf?id=xycCkL63TF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138902>)

Continual learning methods aim to maximize the stability and plasticity of machine learning models that are trained on a sequence of tasks\. The standard measure of stability \(i\.e\., forgetting\) is the 0\-shot performance of a model on previously learned tasks, and plasticity, the performance on the most recently learned task\. However, 0\-shot evaluation does not fully measure a model or method's ability to retain learned information or adapt quickly to new information, as it requires perfect recall across multiple tasks\. In this paper, we propose \*few\-shot evaluation\* as a more comprehensive assessment of the stability and plasticity of a continual learning system\. Through few\-shot evaluation with a novel metric\-\-\-\*per\-shot plasticity\*\-\-\-on task sequences for continual image classification, we show that a mixture of \*foresight\* via the meta\-learning of a short sequence of future tasks and \*hindsight\* via replay on previously learned tasks leads to a model that strikes an ideal balance between stability and plasticity in a continual learning setting\.

## STABLE: A Continual Learning Optimizer with Adaptive Drift Control

**Authors:** Xiaoyan Li; Lanpei Li; Massimo Coppola; Vincenzo Lomonaco; Antonio Carta

**ID:** 154677 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Br2ANAj8hi>) | [PDF](<https://openreview.net/pdf?id=Br2ANAj8hi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154677>)

Continual learning suffers from catastrophic forgetting, leading to the loss of past knowledge and unstable adaptation across task streams\. Existing approaches typically address this issue through replay buffers, architectural changes, or additional regularization terms\. We argue that forgetting is a consequence of unstable learning dynamics, which may benefit from an optimizer\-level solution\. The main challenge is that learning dynamics are time\-dependent, as demonstrated by empirical phenomena such as the stability gap\. First, we formally prove that, for distance\-based classifiers, bounded parameter drift guarantees bounded margin erosion under a local score\-stability condition\. Based on this insight, we propose STABLE, a primal–dual optimizer with adaptive drift control\. STABLE enforces a drift budget by increasing the dual variable when the budget is violated and decreasing it otherwise\. This results in high stability without penalizing plasticity\. Experiments on long\-horizon unimodal streams and CLIP\-based multimodal streams show that vanilla PEFT baselines trained with STABLE match or outperform specialized continual learning methods\. In the multimodal setting, STABLE further preserves zero\-shot transfer, matching or exceeding dedicated multimodal continual learning methods\.

## Subspace\-Guided Continual Learning: Hessian Based Stable–Plastic Decomposition for Exemplar\-Free Class\-Incremental Learning

**Authors:** Qi Zhu; Ziang Gan; Wanting Zhang; Libao Zhang

**ID:** 150615 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gp622AVLX9>) | [PDF](<https://openreview.net/pdf?id=gp622AVLX9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150615>)

Exemplar\-Free Class\-Incremental Learning \(EFCIL\) is a challenging continual learning paradigm where a model must learn new classes sequentially without access to old data, making it susceptible to catastrophic forgetting\. The core difficulty lies in balancing stability \(preserving old knowledge\) and plasticity \(acquiring new knowledge\)\. We propose Subspace\-Guided Continual Learning \(SGCL\), a novel method that tackles this dilemma from a geometric perspective\. SGCL decomposes the feature space into two orthogonal subspaces: a \`\`\`stable subspace\`\`\` containing directions critical for previous tasks, and a \`\`\`plastic subspace\`\`\` where new knowledge can be learned with minimal interference\. This decomposition is efficiently identified via the feature\-space Hessian, where high\-curvature eigendirections define the stable subspace\. Building on this, SGCL introduces two synergistic components: 1\) Subspace\-Guided Regularization \(SGR\), which imposes curvature\-weighted penalties on feature drifts within the stable subspace, and 2\) Subspace\-Guided Prototype Alignment \(SGPA\), which adaptively corrects the shift of old\-class prototypes to recalibrate the classifier\. Extensive experiments on standard benchmarks show that SGCL consistently achieves competitive or superior performance compared to existing state\-of\-the\-art methods, offering a principled approach to mitigating forgetting through loss landscape analysis\.

## CHORD: Cross\-Model Hallucination Detection via Relational Graph Discrimination

**Authors:** Yongxin Deng; Zhen Fang; Guansong Pang; Sharon Li; Ling Chen

**ID:** 153626 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jz5BMGep1M>) | [PDF](<https://openreview.net/pdf?id=Jz5BMGep1M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153626>)

Hallucination detection is critical for deploying large language models \(LLMs\) in real\-world applications\. Due to strong empirical performance, internal representation–based methods have emerged as the prevailing direction for detecting hallucinations, yet they remain largely model\-specific and often fail to generalize to unseen LLMs\. In this paper, we study an important yet underexplored problem, termed cross\-model hallucination detection \(CMHD\), which aims to train hallucination detectors on source LLMs while ensuring performance on unseen target LLMs\. The core challenge of CMHD lies in cross\-model representation heterogeneity: hidden states from different LLMs exhibit severe semantic inconsistency, which limits the transferability of classical representation\-based detectors\. Through analysis and empirical validation, we show that relational structures over layers, tokens, and features capture transferable detection signals despite semantic inconsistency\. Based on this observation, we propose cross\-model hallucination detection via heterogeneity\-oriented relational discrimination \(CHORD\), a relational graph discrimination framework that represents hidden states as joint relational graphs over layers, tokens, and features\. It feeds these graphs into relation\-aware attention to obtain structure\-aware features, and uses meta\-learning to shape these features toward transferable detection signals\. Extensive experiments show that CHORD outperforms representative detection methods in cross\-model generalization\.

## On the Effect of Token Correlations on Semantic Transfer in Transformers

**Authors:** Nevena Lazic; Julian Zimmert; Alan Malek; Tor Lattimore; Csaba Szepesvari; András György

**ID:** 155543\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155543

[Paper](<https://openreview.net/forum?id=4kvpzWhoqH>) | [PDF](<https://openreview.net/pdf?id=4kvpzWhoqH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155543>)

_Abstract unavailable from the accessible public sources._

## HyperFlow: Gradient\-Free Test\-Time Adaptation for Cross\-Domain Few\-Shot Classification

**Authors:** Donggyun Kim; Chanwoo Kim; Seunghoon Hong

**ID:** 154114\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154114

[Paper](<https://openreview.net/forum?id=GACGdvulrX>) | [PDF](<https://openreview.net/pdf?id=GACGdvulrX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154114>)

While test\-time fine\-tuning is beneficial in cross\-domain few\-shot classification, the need for multiple backpropagation steps can be prohibitively expensive in resource\-constrained environments\. We propose HyperFlow, a gradient\-free test\-time adaptation method that amortizes fine\-tuning dynamics into a lightweight conditional drift network\. During offline training, HyperFlow learns from fine\-tuning trajectories collected on meta\-training tasks\. Once trained, it adapts a selected PEFT parameter subspace for a new task by numerical ODE solving, requiring only forward passes of the drift network and no test\-time backpropagation through the target model\. In experiments on Meta\-Dataset and CD\-FSL benchmarks, our method improves out\-of\-domain performance over the direct transfer approach while using only 6\-14\\% of peak memory and about 1\\% of the FLOPs of standard fine\-tuning, positioning HyperFlow as an accuracy–efficiency trade\-off between direct transfer and fine\-tuning\.

## Adapting Actively on the Fly: Relevance\-Guided Online Meta\-Learning with Latent Concepts for Geospatial Discovery

**Authors:** Jowaria Khan; Anindya Sarkar; Yevgeniy Vorobeychik; Elizabeth Bondi\-Kelly

**ID:** 156089\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156089

[Paper](<https://openreview.net/forum?id=0SGmhIr9iM>) | [PDF](<https://openreview.net/pdf?id=0SGmhIr9iM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156089>)

In environmental monitoring, data collection is often costly, sparse, and shaped by urgent public\-health needs\. This is particularly true for cancer\-causing PFAS \(Per\- and polyfluoroalkyl substances\) contamination, where discussions with domain experts and environmental organizations highlight the need to strategically identify high\-risk, under\-observed regions under tight sampling budgets\. More broadly, similar challenges arise in disaster response and public health settings, where dynamic environments make it essential to efficiently uncover hidden targets from limited ground truth\. Yet sparse and biased geospatial labels limit the applicability of existing learning\-based methods, such as reinforcement learning\. To address this, we propose a unified geospatial discovery framework that integrates active learning, online meta\-learning, and concept\-guided reasoning\. Our approach introduces two key innovations built on a shared notion of \*concept relevance\*, capturing how domain\-specific factors influence target presence: a \*concept\-weighted uncertainty sampling strategy\*, where uncertainty is modulated by learned relevance from readily available concepts such as land cover and source proximity; and a \*relevance\-aware meta\-batch formation strategy\* that promotes semantic diversity during online\-meta updates, improving generalization in dynamic environments\. We evaluate our framework on PFAS contamination discovery as a real\-world inspired environmental monitoring task, demonstrating robust target discovery under limited data and changing conditions\.

## Goal\-Conditioned Supervised Learning for Multi\-Objective Recommendation

**Authors:** Shijun Li; Hilaf Hasson; Jing Hu; Joydeep Ghosh

**ID:** 153765\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153765

[Paper](<https://openreview.net/forum?id=IpkrkSg3Jo>) | [PDF](<https://openreview.net/pdf?id=IpkrkSg3Jo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153765>)

Multi\-objective learning endeavors to concurrently optimize multiple objectives using a single model, aiming to achieve high and balanced performance across diverse objectives\. However, this often entails a complex optimization problem to balance the learning of potentially conflicting objectives, leading to solutions with higher memory requirements and computational complexity\. This paper introduces a Multi\-Objective Goal\-Conditioned Supervised Learning \(MOGCSL\) framework for automatically learning to achieve multiple objectives from offline sequential data\. MOGCSL extends the conventional GCSL method to multi\-objective scenarios by redefining goals from one\-dimensional scalars to multi\-dimensional vectors\. It benefits from naturally eliminating the need for complex architectures and optimization constraints\. Moreover, MOGCSL inherently disentangles uninformative or noisy training instances that fail to achieve desirable long\-term rewards across multiple objectives\. We also introduce a novel goal\-selection algorithm for MOGCSL to model and identify desired and achievable goals for inference\.  In this paper, we focus on its application to the next action prediction problem in commercial\-grade recommender systems\. In this context, any viable solution needs to be reasonably scalable and also be robust to large amounts of noisy data that is characteristic of this application space\. We show that MOGCSL performs admirably on both counts by extensive experiments\. Also, analysis and experiments are included to explain its strength in discounting the noisier portions of training data in recommender systems with multiple objectives\. Code is available at: https://anonymous\.4open\.science/r/MOGCSL\-D7A2\.

## When Does Subspace Direction Matter for LoRA? Regime Analysis of the Magnitude Principle in Few\-Shot Adaptation

**Authors:** Nischal Subedi; Cencheng Shen; Peng Zhao

**ID:** 154943 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9lfZA1MK8L>) | [PDF](<https://openreview.net/pdf?id=9lfZA1MK8L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154943>)

Low\-Rank Adaptation \(LoRA\) constrains weight updates to a low\-rank subspace, making the choice of that subspace central to adaptation\. We show that the value of LoRA initialization direction is regime\-dependent\. It helps when the representation dimension is large relative to the labeled set size and the estimated activation subspace is aligned with task structure, and is otherwise inconsequential\. We formalize this view with a spiked\-covariance Davis\-\-Kahan argument and a first\-step LoRA analysis showing that the initial learning signal flows through projected target\-token features\. From this analysis we derive an alignment coefficient $\\rho$, computable from a single forward pass, that closely tracks the empirical gain from direction\-aware initialization across tasks\. Motivated by this view, we propose PivotLoRA, an initialization that estimates LoRA adapters from target\-token PCA and applies a single output\-preserving orthogonal pivot after early training drift\. Across $30$ BERT\-base few\-shot settings and $13$ compared methods, PivotLoRA achieves the best average rank and improves over vanilla LoRA on nearly every setting, with the largest gains concentrated on high\-alignment tasks\. Decoder\-scale classification on LLaMA\-2\-7B and Llama\-3\.1\-8B reproduces the low\-shot pattern, while full\-data and generation controls confirm the predicted regime specificity\.

## MuEdit:  An efficient multi\-task editing method towards inter\-domain knowledge conflicts

**Authors:** Songshi Liang; Ting\-En Lin; Zixuan Huang; Yuchuan Wu; Yongbin Li; Zihe Wang; Rui Yan

**ID:** 151125 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=coarrCNoCU>) | [PDF](<https://openreview.net/pdf?id=coarrCNoCU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151125>)

Large language models \(LLMs\) require frequent knowledge updates across heterogeneous domains, but existing editing methods fail when applied sequentially to multi\-task settings\. We trace this collapse to inter\-domain null\-space misalignment: heterogeneous tasks induce distinct Jacobian geometries, causing their common null space to shrink dramatically and leaving insufficient admissible directions for conflict\-free updates\. We propose the Conflict Index to quantify this geometric interference, and introduce Mu\-Edit, which mitigates multi\-task conflicts via \(1\) conflict\-aware ordering to minimize cumulative interference, and \(2\) dynamic low\-rank approximation to expand the null space when ordering alone is insufficient\. Experiments across five functional domains and three backbones show that Mu\-Edit significantly outperforms existing baselines in multi\-task editing performance while preserving general capabilities, and remains effective under incremental task arrival\.

## JEPAWG: Interpretable Hypernetworks for Weight\-Space Physics

**Authors:** Tobias Göbel; Julian R Ebelt; Zier Mensch; Mathis Gerdes; Miranda Cheng

**ID:** 150014 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lPOkD4q1Gx>) | [PDF](<https://openreview.net/pdf?id=lPOkD4q1Gx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150014>)

Lattice field theory is the workhorse of non\-perturbative physics, used to simulate phenomena from the strong nuclear force to critical phenomena in materials\. Its Boltzmann distributions are parametrized analytically by \\emph\{coupling constants\}, but these bare parameters are weak predictors of physical observables\-\-\-extracting physics typically requires extensive simulation\. While machine learning tools such as normalizing flows have emerged as effective samplers at fixed couplings, it remains difficult to interpret what the underlying neural networks have learned\. This raises a natural question: can the flow \\emph\{parameters themselves\} be generated for new theories, and can their physics be read off directly from the network weights? We propose lattice field theory as a testbed for neural network interpretability: because the target physics is qualitatively well\-understood and smoothly varying, it provides ideal synthetic data against which network behavior can be checked against known ground truth\. To this end we introduce \\textbf\{JEPAWG\}, a Joint\-Embedding Predictive Architecture\-\-based Weight Generator that maps couplings directly to flow weights via a learned latent space\. On a scalar theory at lattice sizes $6^2$ and $8^2$, the JEPAWG latent space recovers the correct intrinsic dimension of the underlying manifold, identifies the region of phase transition, encodes a finite\-size shift aligned with the 2D Ising exponent $\\nu \\approx 1$, allowing us to uncover physical structure by studying the network weights alone\. As a generator, JEPAWG also interpolates and extrapolates to unseen couplings effectively and remains robust to weight\-space incongruences deliberately introduced by combining multi\-seed training data, outperforming PCA, AE, and VAE baselines\.

## S²MoE: Shared\-Subspace Mixture of Sparse Experts

**Authors:** Feihong He; Anke Tang; Enneng Yang; Hao Jiang; Guojie Zhu; Gang Li; XIAOCHUN CAO; Li Shen

**ID:** 152479 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SmZteLWKCK>) | [PDF](<https://openreview.net/pdf?id=SmZteLWKCK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152479>)

Model merging offers a training\-free paradigm for integrating multiple specialized models into a unified multi\-task system, enabling efficient knowledge reuse from models\. However, parameter interference remains a critical challenge, limiting the scalability and efficacy of merged models\. SVD\-based merging techniques represent the current state\-of\-the\-art, excelling in alleviating interference through task\-specific knowledge extraction and subspace orthogonalization\. % due to aggressive parameter truncation Despite these advances, they inevitably incur performance degradation due to aggressive parameter truncation, which discards valuable information and hinders inference accuracy\. Our analysis reveals this truncation\-induced knowledge loss as the fundamental bottleneck, motivating the need for mechanisms that preserve and recover discarded expertise without retraining\. To address this, we introduce S MoE, a novel framework that augments SVD\-based merging with a mixture of sparse experts to refine the truncation gap\. S MoE comprises three key components: \(1\) a shared module that aggregates multi\-task knowledge, \(2\) sparse experts that selectively recover truncation knowledge, and \(3\) a subspace mapping router to achieve precise training\-free routing\. Extensive experiments across vision and language benchmarks demonstrate up to 1\.6% and 1\.2% performance gains over SOTA methods, effectively validating robust and scalable model merging\.

## Stage\-Aware Dual Alignment for Covariate Shift in Graph Domain Adaptation

**Authors:** Hongwei Wen; Can Zhang; Haoyu He; Xintao Zhao; Hanyuan Hang; Minglong Lei

**ID:** 149801 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nFn17qZZSS>) | [PDF](<https://openreview.net/pdf?id=nFn17qZZSS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149801>)

The performance of \*Graph Domain Adaptation\* \(\*GDA\*\) is fundamentally limited by \*covariate\-driven\* discrepancies between source and target graphs, captured by \*Covariate Shift\* \(\*CS\*\) in the joint feature\-structure space beyond label\-related formulations\. We show that CS induces bias at two non\-interchangeable stages of \*Graph Neural Network\* \(\*GNN\*\) computation: \*Feature Shift\* \(\*FS\*\) distorts representations before message passing, while \*Feature\-Conditional Structure Shift\* \(\*FCSS\*\) biases propagation, rendering single\-stage alignment intrinsically insufficient\. Based on this, we propose \*Dual Alignment for Covariate Shift\* \(\*DACS\*\), a stage\-aware GDA framework that aligns discrepancies at their source\. DACS mitigates FS via adversarial feature alignment and addresses FCSS through layer\-wise reweighting to correct propagation bias, followed by final adversarial alignment for residual mismatch\. This design follows directly from the stage\-wise structure of CS rather than heuristic combinations of alignment modules\. We further show that representation and propagation biases correspond to distinct components of target\-domain error that cannot be eliminated in isolation\. Experiments on synthetic and real\-world benchmarks demonstrate that DACS consistently outperforms prior methods, especially under complex and coupled distribution shifts\.

## Large\-Scale Pretraining unlocks Few\-Shot Prediction for Relational Data

**Authors:** Rishabh Ranjan; Vignesh Kothapalli; Harshvardhan Agarwal; Charilaos Kanatsoulis; Roshan Upendra; Tom Palczewski; Carlos Guestrin; Jure Leskovec

**ID:** 149169 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sMFUopPlwy>) | [PDF](<https://openreview.net/pdf?id=sMFUopPlwy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149169>)

The ability to learn a new task from a few examples has been crucial to the success of foundation models such as large language models \(LLMs\)\. However, current foundation models for structured data like tables and relational databases still require tens of thousands of labeled examples to perform well on new tasks\. Here we show that when pretrained at scale with the right recipe, Relational Transformers \(RTs\) can make state\-of\-the\-art \(SoTA\) predictions with only hundreds of labels\. This capability arises from the following ingredients: First, we assemble THE JOIN, the largest pretraining corpus of relational data to date, comprising 6k forecasting tasks across 650 real\-world databases from diverse domains\. Second, we develop a pretraining recipe that combines \(1\) mixed context sizes for multi\-scale learning, \(2\) multi\-cell masking for dense supervision, and \(3\) a novel random\- walk\-based retriever to efficiently gather relevant context\. Third, we identify context ensembling and context tuning as complementary axes for scaling test\-time compute to further improve few\-shot performance\. Pretrained with our recipe on THE JOIN, RT achieves parity with LLM Agent \+ TabICLv2 and RDBLearn \+ TabICLv2 pipelines with 32–23×fewer labels respectively, and even surpasses the prior SoTA of full task\-specific training, on average nMAE for RelBench regression tasks\. Context ensembling and tuning improves this further by up to 3%, and 4% respectively\. Our ablations highlight the importance of schema semantics, multi\-cell masking, and random\-walk retrieval\. Overall, our work paves the way for developing relational foundation models with strong few\-shot capabilities\.

## Distinguishing Performance From Competence in Evaluations of Humanlike Abstract Reasoning

**Authors:** Claas Beger; Ryan Yi; Shuhao Fu; Kaleda K Denton; Arseny Moskvichev; Sarah Tsai; Sivasankaran Rajamanickam; Melanie Mitchell

**ID:** 139362 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Uc9b3QYaQN>) | [PDF](<https://openreview.net/pdf?id=Uc9b3QYaQN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139362>)

AI reasoning models have exceeded human performance on the ARC\-AGI\-1 benchmark, but does that mean state\-of\-the\-art models have the underlying competence—humanlike abstract reasoning—the benchmark was designed to test? Here we investigate the abstraction abilities of AI models using the closely related but simpler ConceptARC benchmark\. Our evaluations vary input modality \(textual vs\. visual\), use of external Python tools, and reasoning effort\. Beyond output accuracy, we evaluate the natural\-language rules that models generate to explain their solutions, enabling us to assess whether models recognize the abstractions that ConceptARC was designed to elicit\. We show that the best models’ rules are frequently based on less abstract, more domain\-specific concepts, capturing intended abstractions considerably less often than humans\. In the visual modality, AI models’ output accuracy drops sharply; however, our rule\-level analysis reveals that a substantial share of their rules capture intended abstractions, even as the models struggle to apply these concepts to generate correct solutions\. In short, we show that using performance \(accuracy\) alone can substantially overestimate AI competence in textual modalities while underestimating it in visual modalities—an illustration of the risk of mistaking performance for competence\.

## FedIndex: Federated Domain Adaptation with Continuous Domain Indices

**Authors:** qingyang yu; Hao Wang; Qizhen Zhang; Hao Wang

**ID:** 156743 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fnbGFH0330>) | [PDF](<https://openreview.net/pdf?id=fnbGFH0330>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156743>)

_Abstract unavailable from the accessible public sources._

## GATE\-AD: Graph Attention Network Encoding for Few\-Shot Industrial Visual Anomaly Detection

**Authors:** ANGELOS PSYRRIS; Yannis Panagakis; Maria Vakalopoulou; Georgios Th\. Papadopoulos

**ID:** 151322 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bN9jwBjZqY>) | [PDF](<https://openreview.net/pdf?id=bN9jwBjZqY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151322>)

_Abstract unavailable from the accessible public sources._

## MapPFN: Learning Causal Perturbation Maps in Context

**Authors:** Marvin Sextro; Weronika Kłos; Gabriel Dernbach

**ID:** 149118 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=skdhOj5NkC>) | [PDF](<https://openreview.net/pdf?id=skdhOj5NkC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149118>)

Planning effective interventions in biological systems requires treatment\-effect models that adapt to unseen biological contexts by identifying their specific underlying mechanisms\. Yet single\-cell perturbation datasets span only a handful of biological contexts, and existing methods cannot leverage new interventional evidence at inference time to adapt beyond their training data\. To meta\-learn a perturbation effect estimator, we present MapPFN, a prior\-data fitted network \(PFN\) pre\-trained on a synthetic biological prior with causal interventions, decoupling pre\-training from limited wet\-lab data\. Unlike existing methods, MapPFN uses in\-context learning to map a sequence of experiments to a post\-perturbation distribution, enabling a single pre\-trained model to adapt to new datasets and arbitrary gene sets at inference time\. Zero\-shot, MapPFN identifies differentially expressed genes on par with models trained on real single\-cell data, and fine\-tuning further improves predictions across biological contexts\. Our code is available at https://anonymous\.4open\.science/r/MapPFN\.

## CivBench: A Long\-Horizon Benchmark for Tool\-Mediated Agents in Civilization VI

**Authors:** Austin T D Andrews; Liam Wilkinson; Jamie Heagerty; Harry Coppock; Jakob Foerster; Rui Costa

**ID:** 139660 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CL2vWOhnZJ>) | [PDF](<https://openreview.net/pdf?id=CL2vWOhnZJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139660>)

_Abstract unavailable from the accessible public sources._

## PaLoRA: Paced Low\-Rank Adaptation for Continual Learning

**Authors:** Yuxuan Li; Fanhu Zeng; Hao Tang

**ID:** 150774 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fU1XY23snF>) | [PDF](<https://openreview.net/pdf?id=fU1XY23snF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150774>)

_Abstract unavailable from the accessible public sources._

## Adaptive Attribute Completion with Representation Space for Incomplete Graph Domain Adaptation

**Authors:** Niya Yang; Di Jin; Zhizhi Yu; Liang Yang; Yuxiao Huang; Dongxiao He; Jianguo Wei

**ID:** 152820 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Q9ifmP2xFG>) | [PDF](<https://openreview.net/pdf?id=Q9ifmP2xFG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152820>)

_Abstract unavailable from the accessible public sources._

## Full Fine\-Tuning Is Not the Problem: Why Adam Fails and SGD Succeeds in Few\-Shot CLIP Adaptation

**Authors:** Nairouz Mrabah; Ismail Ayed; Eric Granger

**ID:** 148745 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vMIIW94Dzm>) | [PDF](<https://openreview.net/pdf?id=vMIIW94Dzm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148745>)

_Abstract unavailable from the accessible public sources._

## CivBench: A Long\-Horizon Benchmark for Tool\-Mediated Agents in Civilization VI

**Authors:** Austin T D Andrews; Liam Wilkinson; Jamie Heagerty; Harry Coppock; Jakob Foerster; Rui Costa

**ID:** 139660\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139660

[Paper](<https://openreview.net/forum?id=CL2vWOhnZJ>) | [PDF](<https://openreview.net/pdf?id=CL2vWOhnZJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139660>)

_Abstract unavailable from the accessible public sources._

## PGSB: Pretrained\-Guided Shared Basis for LoRA Model Merging

**Authors:** Muqing Liu; Chongjie Si; Zhuoya Liu; Yuheng Jia

**ID:** 152671 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RH9XxRniDK>) | [PDF](<https://openreview.net/pdf?id=RH9XxRniDK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152671>)

Large pretrained models have achieved remarkable success across diverse domains, yet adapting them to multiple downstream tasks remains challenging: full fine\-tuning is costly, while maintaining separate task\-specific models is storage\-inefficient and fails to produce a unified multi\-task model\. Low\-Rank Adaptation \(LoRA\) offers an efficient alternative for Model Merging by representing each task adaptation as a low\-rank update over frozen pretrained weights\. However, existing LoRA merging methods often treat task\-specific updates as directly comparable objects and merge them in their original low\-rank parameter spaces\. This overlooks two key factors: which update directions provide reliable shared support across tasks, and how these directions should be re\-parameterized with respect to the pretrained weights before merging\. To address this limitation, we propose Pretrained\-Guided Shared Basis \(PGSB\), a two\-stage framework for LoRA model merging\. PGSB first identifies shared directions among task\-specific LoRA updates, and then re\-parameterizes these directions using their interaction with the pretrained weights, producing a more suitable basis for merging\. Extensive experiments demonstrate that PGSB consistently outperforms state\-of\-the\-art baselines across multiple benchmarks\.

## Balanced Multi\-Task Learning from an Optimality\-Gap Perspective

**Authors:** Ce Liu; Jianing Huang; HUANG Sicheng; Shu Liu; Xinyu Huang; Hao Yang

**ID:** 153699 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JQs8iJ1C2j>) | [PDF](<https://openreview.net/pdf?id=JQs8iJ1C2j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153699>)

Multi\-task learning requires a shared update that makes balanced progress across multiple objectives\. A key obstacle is that progress is difficult to compare across tasks with different loss scales, units, and local optimization dynamics\. We study this problem from an optimality\-gap perspective\. For each task, we compare the improvement induced by the shared update with the best one\-step improvement achievable by optimizing that task in isolation\. This comparison yields a scale\-invariant normalized improvement rate, which measures how well the shared update serves each task relative to its own local improvement bound\. We formulate balanced multi\-task optimization as a max\-min problem over the normalized improvement rates, thereby prioritizing the worst\-served task\. A local quadratic approximation leads to the Karush\-Kuhn\-Tucker \(KKT\) optimality conditions, showing that the optimal shared update is determined by a small set of bottleneck tasks\. Under an isotropic Hessian approximation, the update admits a closed\-form expression that depends only on task gradients and a regularized Gram matrix, while the bottleneck set is identified by an active\-set procedure\. Experiments on diverse benchmarks show improved task balance and competitive performance\.

## Understanding the Curse of Unrolling

**Authors:** Sheheryar Mehmood; Florian Knoll; Peter Ochs

**ID:** 149289\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149289

[Paper](<https://openreview.net/forum?id=rOtZp9OVts>) | [PDF](<https://openreview.net/pdf?id=rOtZp9OVts>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149289>)

Algorithm unrolling is ubiquitous in machine learning, particularly in hyperparameter optimization and meta\-learning, where Jacobians of solution mappings are computed by differentiating through iterative algorithms\. Although unrolling is known to yield asymptotically correct Jacobians under suitable conditions, recent work has shown that the derivative iterates may initially diverge from the true Jacobian, a phenomenon known as the curse of unrolling\. In this work, we provide a non\-asymptotic analysis that explains the origin of this behavior and identifies the algorithmic factors that govern it\. We show that truncating early iterations of the derivative computation mitigates the curse while simultaneously reducing memory requirements\. Finally, we validate our theoretical findings both on synthetic problems and in a meta\-learning setting for few\-shot classification, where we study the behavior of gradients obtained via unrolling and implicit differentiation\.

## Understanding the Curse of Unrolling

**Authors:** Sheheryar Mehmood; Florian Knoll; Peter Ochs

**ID:** 149289\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149289

[Paper](<https://openreview.net/forum?id=rOtZp9OVts>) | [PDF](<https://openreview.net/pdf?id=rOtZp9OVts>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149289>)

Algorithm unrolling is ubiquitous in machine learning, particularly in hyperparameter optimization and meta\-learning, where Jacobians of solution mappings are computed by differentiating through iterative algorithms\. Although unrolling is known to yield asymptotically correct Jacobians under suitable conditions, recent work has shown that the derivative iterates may initially diverge from the true Jacobian, a phenomenon known as the curse of unrolling\. In this work, we provide a non\-asymptotic analysis that explains the origin of this behavior and identifies the algorithmic factors that govern it\. We show that truncating early iterations of the derivative computation mitigates the curse while simultaneously reducing memory requirements\. Finally, we validate our theoretical findings both on synthetic problems and in a meta\-learning setting for few\-shot classification, where we study the behavior of gradients obtained via unrolling and implicit differentiation\.

## Trust Region Continual Learning as an Implicit Meta\-Learner

**Authors:** Zekun Wang; Anant Gupta; Chris MacLellan

**ID:** 148571 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wrirlNfjM9>) | [PDF](<https://openreview.net/pdf?id=wrirlNfjM9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148571>)

Continual learning aims to acquire tasks sequentially without catastrophic forgetting, yet standard strategies face a core tradeoff: regularization\-based methods \(e\.g\., EWC\) can overconstrain updates when task optima are weakly overlapping, while replay\-based methods can retain performance but drift due to imperfect replay\. We study a hybrid perspective: \\emph\{trust region continual learning\} that combines generative replay with a Fisher\-metric trust region constraint\. We show that, under local approximations, the resulting update admits a MAML\-style interpretation with a single implicit inner step: replay supplies an old\-task gradient signal \(query\-like\), while the Fisher\-weighted penalty provides an efficient offline curvature shaping \(support\-like\)\. This yields an emergent meta\-learning property in continual learning: the model becomes an initialization that rapidly \\emph\{re\-converges\} to prior task optima after each task transition, without explicitly optimizing a bilevel objective\. Empirically, on task\-incremental diffusion image generation and continual diffusion\-policy control, trust region continual learning achieves the best final performance and retention, and consistently recovers early\-task performance faster than EWC, replay, and continual meta\-learning baselines\.

## Virtual Task Prompting for Multi\-Task Scene Understanding

**Authors:** Zedong Wang; Yucheng Wang; Dan Xu

**ID:** 154323 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EXN4VTZJ8q>) | [PDF](<https://openreview.net/pdf?id=EXN4VTZJ8q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154323>)

Multi\-task scene understanding models typically require modifications to the vision encoder or complex decoders for cross\-task interaction, which limits their flexibility and compatibility with off\-the\-shelf vision foundation models \(VFMs\)\. This paper introduces Virtual Task Prompting \(VTP\), which frames multi\-task prompting as retrieving task\-adaptive subsets from a shared virtual state, where both the state and accessing process itself are optimizable in an end\-to\-end manner\. Concretely, VTP maintains a set of virtual tasks alongside the model, and at each layer, learnable routing matrices read an actual task composition as input for interaction with image tokens, then write the processed results back, forming explicit learning pathways that capture the intricacies among tasks before and after the computation of each encoder block\. Since VTP keeps the backbone clean, it integrates seamlessly with recent VFMs like DINOv3, advancing the state of the art on Pascal\-Context and NYUD\-v2\. Stress test on Taskonomy with 13 heterogeneous tasks further shows VTP's robustness in extreme settings\. Ablations and analysis confirm that VTP's gains stem mainly from its prompting design rather than merely increased capacity\.

## TabK: Amortized Bayesian Estimation of the Number of Clusters in Tabular Data

**Authors:** Mohammadreza Bakhtyari; Bogdan Mazoure; Renato C de Amorim; Guillaume Rabusseau; Vladimir Makarenkov

**ID:** 148754 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vH1EUKvrHt>) | [PDF](<https://openreview.net/pdf?id=vH1EUKvrHt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148754>)

Estimating the number of clusters, $k$, is a fundamental prerequisite for most clustering algorithms\. Traditionally, this estimation has relied on computationally expensive grid searches over internal cluster validity indices \(CVIs\) or adaptive clustering algorithms, both constrained by specific statistical assumptions\. We introduce TabK, a zero\-shot, permutation\-invariant transformer architecture that frames the estimation of $k$ as an amortized Bayesian inference problem for tabular data\. TabK leverages a novel Quantile Feature Encoder \(QFE\) to extract position\-free, content\-derived representations from empirical marginal distributions\. By learning a generalized structural bias over a diverse synthetic prior, TabK estimates the number of clusters in a single forward pass\. Evaluated across 50 diverse real\-world benchmarks, TabK outperforms its closest competitor, TabClustPFN, reducing the Mean Absolute Error \(MAE\) of the number of clusters estimation by 1\.2 \(from 2\.24 to 1\.04\)\. Furthermore, TabK empirically achieves the best position on the Pareto frontier among 12 evaluated methods, providing predictions of $k$ in an average time of less than one second, which is $2\\times$ faster than TabClustPFN and $30\\times$ faster than traditional CVIs such as Silhouette and Calinski\-Harabasz\. \*Code and data are available at:\* https://anonymous\.4open\.science/r/TabK\.

## Bridging Sequence and Structure with Unified Domain Adaptation for Drug\-Target Interaction Prediction

**Authors:** Mingcan Yuan; He Li; Zhiyi Ju; Mang Ye; Qingxiong Tan

**ID:** 156127 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0BfFtmb9Zv>) | [PDF](<https://openreview.net/pdf?id=0BfFtmb9Zv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156127>)

Drug\-target interaction \(DTI\) prediction is pivotal for accelerating drug discovery, yet existing methods struggle with generalization under cross\-domain distribution shifts\. Conventional approaches typically rely on static protein representations and assume distributional consistency between source and target domains, often resulting in poor calibration when encountering novel protein families or scaffolds\. To address this issue, we present $\\textbf\{Bi\}$\-view $\\textbf\{Fold\}$\-aware prediction \(BiFold\), a novel unified interaction\-adaptive framework that enhances generalization via dual\-view representation learning and calibration\-aware adaptation\. BiFold synergistically models sequence and structural evidence, introducing a routing module to dynamically fuse the two views at the feature\-channel level and exploit complementary information\. Furthermore, we design a calibration\-aware training principle that aligns domain statistics and encourages flatter source solutions\. Crucially, target supervision is introduced only after a forward\-only warm\-up phase to prevent reinforcement of miscalibrated early predictions, effectively mitigating confirmation bias in pseudo\-label learning\. Extensive experiments demonstrate that BiFold consistently outperforms the state\-of\-the\-art methods across diverse datasets in both in\-domain and cross\-domain settings\. Additionally, interpretability analysis reveals that the routing module partitions the feature space into view\-dominant and view\-neutral subspaces, providing concrete evidence of adaptive multi\-modal complementarity\.

## Delve into the Applicability of Advanced Optimizers for Multi\-Task Learning

**Authors:** Zhipeng Zhou; Linxiao Cao; Yiming Cao; Pengcheng Wu; Peilin Zhao; Chunyan Miao

**ID:** 149197 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sBSgNPZhSj>) | [PDF](<https://openreview.net/pdf?id=sBSgNPZhSj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149197>)

Multi\-Task Learning \(MTL\) is a fundamental problem in machine learning that has been extensively studied over the past decade\. Recently, a variety of optimization\-based MTL approaches have been proposed to jointly learn multiple tasks by modifying the optimization trajectory\. In this paper, we argue that the design of mainstream optimization\-based MTL methods implicitly assumes compatibility with momentum\-free optimizers, which may limit the understanding of their effectiveness in modern training regimes\. In practice, the instantaneously derived gradients from MTL operations contribute only marginally to the final parameter updates when momentum is present, resulting in an amortized rather than instant de\-conflicting effect\. Moreover, this amortized behavior can be further degraded under high\-curvature optimization dynamics\. To address this issue and enable the effective integration of mainstream MTL methods with advanced optimizers \(e\.g\., Adam and Muon\), we propose \\texttt\{APT\} \(Applicability of advanced oPTimizers\), a lightweight framework featuring an adaptive momentum mechanism that balances the trade\-off between instant and amortized de\-conflicting\. Furthermore, we show that the Muon optimizer can be interpreted as an implicit MTL learner, and we introduce a lightweight direction preservation strategy to better align with its orthogonalization process\. Extensive experiments across four standard MTL benchmarks demonstrate that \\texttt\{APT\} consistently enhances existing MTL approaches, yielding substantial performance gains\.

## Making LoRA Identifiable: Orthogonal Alignment for Continual Learning

**Authors:** Pratik Rakesh Singh; Mohammadi Zaki; Akash Saha; Aneesh Mukkamala; Pankaj Wasnik

**ID:** 155348 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6IGj3mpXfp>) | [PDF](<https://openreview.net/pdf?id=6IGj3mpXfp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155348>)

_Abstract unavailable from the accessible public sources._

## Not All Routing Drift Is Harmful: Trust\-Region Projection for Class\-Incremental Learning

**Authors:** Tae\-Hwan Kim; Sung\-Bae Cho

**ID:** 151931 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WklS219u5L>) | [PDF](<https://openreview.net/pdf?id=WklS219u5L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151931>)

_Abstract unavailable from the accessible public sources._

## Causal Multi\-Task Demand Learning

**Authors:** Varun Gupta; Vijay Kamble

**ID:** 153237 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mk49ilMld8>) | [PDF](<https://openreview.net/pdf?id=Mk49ilMld8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153237>)

_Abstract unavailable from the accessible public sources._

## Communication\-Efficient Personalized Adaptation via Federated\-Local Model Merging

**Authors:** Yinan Zou; Md Kamran Chowdhury Shisher; Christopher Brinton; Vishrant Tripathi

**ID:** 150059 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l5U24ix94Z>) | [PDF](<https://openreview.net/pdf?id=l5U24ix94Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150059>)

Parameter\-efficient fine\-tuning methods, such as LoRA, offer a practical way to adapt large vision and language models to client tasks\. However, this becomes particularly challenging under task\-level heterogeneity in federated deployments\. In this regime, personalization requires balancing general knowledge with personalized knowledge, yet existing approaches largely rely on heuristic mixing rules and lack theoretical justification\. Moreover, prior model merging approaches are also computation and communication intensive, making the process inefficient in federated settings\. In this work, we propose Potara, a principled framework for federated personalization that constructs a personalized model for each client by merging two complementary models: \(i\) a federated model capturing general knowledge, and \(ii\) a local model capturing personalized knowledge\. Through the construct of linear mode connectivity, we show that the expected task loss admits a variance trace upper bound, whose minimization yields closed\-form optimal mixing weights that guarantee a tighter bound for the merged model than for either the federated or local model alone\. Experiments on vision and language benchmarks show that Potara consistently improves personalization while reducing communication, leading to a strong performance\-communication trade\-off\.

## Lost or Hidden? A Concept\-Level Forgetting in Supervised Continual Learning

**Authors:** Katarzyna Filus; Kamil Faber; Roberto Corizzo; Christopher Kanan

**ID:** 151099 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d06ZssFH8b>) | [PDF](<https://openreview.net/pdf?id=d06ZssFH8b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151099>)

Continual learning studies how models can adapt to new tasks while retaining previously acquired knowledge\. Although a broad spectrum of methods has been proposed to mitigate catastrophic forgetting, the field remains predominantly performance\-driven, with limited insight into what forgetting actually corresponds to within the vision model's representation space\. Prior work has primarily analyzed forgetting through task\-level performance or coarse measures of representational drift, without disentangling output\-level accessibility from changes in finer\-grained internal structure\.To this end, we propose a diagnostic framework that leverages Sparse Autoencoders \(SAEs\) to define a task\-anchored latent feature space, enabling analysis of how task\-specific information evolves at a finer granularity, where individual SAE latents are treated as concept proxies for recurring and relatively disentangled visual patterns in the model’s internal computations\. Within this framework, we decompose forgetting into apparent concept deletion, recoverability, and decodability\. We show that a large portion of seemingly lost concept\-level information can often be recovered under linearity assumption, with concept decodability degrading as more tasks are introduced\. Overall, our findings suggest that a significant part of concept\-level forgetting can be attributed to changes in the representational accessibility rather than complete information erasure\.

## MixRoute: Rethinking Single\-Distribution Training for Generalizable Neural Routing

**Authors:** Hang Yi; Ziwei Huang; Yining Ma; Zhiguang Cao

**ID:** 151615 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZE1vj1F5xY>) | [PDF](<https://openreview.net/pdf?id=ZE1vj1F5xY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151615>)

Neural Combinatorial Optimization \(NCO\) is a promising paradigm for solving routing problems, yet its generalization across diverse data distributions remains a critical bottleneck\. Existing methods typically tackle cross\-distribution generalization through complex multi\-distribution training or intricate meta\-learning schemes, implicitly presuming that single\-distribution training yields a weak zero\-shot baseline\. In this paper, we demonstrate that the potential of single\-distribution training has been substantially underestimated and can be unlocked by a simple architectural inductive bias: Mix Normalization\. To approach this, we first construct a comprehensive benchmark spanning three representative routing problems and 179 fine\-grained datasets, capturing diverse shifts in node coordinates, customer demands, and time windows\. Building on this benchmark, we propose MixRoute, a neural framework that adaptively combines normalization statistics at different granularities to mitigate varying distribution shifts\. Trained exclusively on uniform distributions, MixRoute generalizes effectively to a wide range of unseen distributions without any distribution\-specific adaptation\. Extensive experiments demonstrate that MixRoute consistently achieves state\-of\-the\-art zero\-shot generalization\. Our work revisits normalization as a parsimonious alternative for zero\-shot generalization against complex training\-adaptation schemes\.

## RESCAST\-100K: A Comprehensive Dataset for Cross\-Domain Residential Load and Indoor Temperature Forecasting

**Authors:** Jainam Dhruva; Yousaf Raza; A\.B\. Siddique; Simone Silvestri

**ID:** 139420 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Rh2FJGGNVR>) | [PDF](<https://openreview.net/pdf?id=Rh2FJGGNVR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139420>)

Accurate short\-term forecasting of residential energy load and indoor temperature is essential for home energy management systems, grid\-level demand response participation, and community\-level energy efficiency programs\. Domain adaptation methods and transfer learning have shown promise in improving forecasting accuracy under data heterogeneity and scarcity scenarios commonly observed at the residential level\. However, progress remains limited by the absence of comprehensive residential datasets: existing ones are narrow in target coverage and lack structured support for cross\-domain evaluation\. To address this, we introduce RESCAST\-100K, a large\-scale residential forecasting benchmark for studying cross\-domain generalization\. It exposes a configuration\-driven interface that instantiates source and target domains along interpretable axes, such as geography, climate zone, wall construction, and heating equipment, supporting systematic evaluation of transfer learning, domain adaptation, and zero\-shot generalization under controlled domain shifts\. The benchmark covers approximately 100,000 EnergyPlus\-simulated U\.S\. homes derived from ResStock, providing 15\-minute time series of three coupled targets per home, namely total load, HVAC \(heating, ventilation, and air conditioning\) load, and indoor temperature, together with weather channels, HVAC setpoints, and over 40 static building covariates\. Finally, it integrates five real\-world residential datasets under a unified schema, supporting sim\-to\-real evaluation on the same tasks\. We benchmark models from recurrent, attention, and MLP\-mixer architectures for zero\-shot performance across different domains, under missing input data conditions, for each task\. Cross\-attention and MLP\-mixer based models consistently outperform recurrent and classical transformer\-based baselines under domain shift\. RESCAST\-100K is intended to support the machine learning and building analytics communities in advancing cross\-domain residential forecasting at the home, community, and grid levels\.

## When Does Subspace Direction Matter for LoRA? Regime Analysis of the Magnitude Principle in Few\-Shot Adaptation

**Authors:** Nischal Subedi; Cencheng Shen; Peng Zhao

**ID:** 154943\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154943

[Paper](<https://openreview.net/forum?id=9lfZA1MK8L>) | [PDF](<https://openreview.net/pdf?id=9lfZA1MK8L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154943>)

Low\-Rank Adaptation \(LoRA\) constrains weight updates to a low\-rank subspace, making the choice of that subspace central to adaptation\. We show that the value of LoRA initialization direction is regime\-dependent\. It helps when the representation dimension is large relative to the labeled set size and the estimated activation subspace is aligned with task structure, and is otherwise inconsequential\. We formalize this view with a spiked\-covariance Davis\-\-Kahan argument and a first\-step LoRA analysis showing that the initial learning signal flows through projected target\-token features\. From this analysis we derive an alignment coefficient $\\rho$, computable from a single forward pass, that closely tracks the empirical gain from direction\-aware initialization across tasks\. Motivated by this view, we propose PivotLoRA, an initialization that estimates LoRA adapters from target\-token PCA and applies a single output\-preserving orthogonal pivot after early training drift\. Across $30$ BERT\-base few\-shot settings and $13$ compared methods, PivotLoRA achieves the best average rank and improves over vanilla LoRA on nearly every setting, with the largest gains concentrated on high\-alignment tasks\. Decoder\-scale classification on LLaMA\-2\-7B and Llama\-3\.1\-8B reproduces the low\-shot pattern, while full\-data and generation controls confirm the predicted regime specificity\.

## MuEdit:  An efficient multi\-task editing method towards inter\-domain knowledge conflicts

**Authors:** Songshi Liang; Ting\-En Lin; Zixuan Huang; Yuchuan Wu; Yongbin Li; Zihe Wang; Rui Yan

**ID:** 151125\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151125

[Paper](<https://openreview.net/forum?id=coarrCNoCU>) | [PDF](<https://openreview.net/pdf?id=coarrCNoCU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151125>)

Large language models \(LLMs\) require frequent knowledge updates across heterogeneous domains, but existing editing methods fail when applied sequentially to multi\-task settings\. We trace this collapse to inter\-domain null\-space misalignment: heterogeneous tasks induce distinct Jacobian geometries, causing their common null space to shrink dramatically and leaving insufficient admissible directions for conflict\-free updates\. We propose the Conflict Index to quantify this geometric interference, and introduce Mu\-Edit, which mitigates multi\-task conflicts via \(1\) conflict\-aware ordering to minimize cumulative interference, and \(2\) dynamic low\-rank approximation to expand the null space when ordering alone is insufficient\. Experiments across five functional domains and three backbones show that Mu\-Edit significantly outperforms existing baselines in multi\-task editing performance while preserving general capabilities, and remains effective under incremental task arrival\.

## JEPAWG: Interpretable Hypernetworks for Weight\-Space Physics

**Authors:** Tobias Göbel; Julian R Ebelt; Zier Mensch; Mathis Gerdes; Miranda Cheng

**ID:** 150014\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150014

[Paper](<https://openreview.net/forum?id=lPOkD4q1Gx>) | [PDF](<https://openreview.net/pdf?id=lPOkD4q1Gx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150014>)

Lattice field theory is the workhorse of non\-perturbative physics, used to simulate phenomena from the strong nuclear force to critical phenomena in materials\. Its Boltzmann distributions are parametrized analytically by \\emph\{coupling constants\}, but these bare parameters are weak predictors of physical observables\-\-\-extracting physics typically requires extensive simulation\. While machine learning tools such as normalizing flows have emerged as effective samplers at fixed couplings, it remains difficult to interpret what the underlying neural networks have learned\. This raises a natural question: can the flow \\emph\{parameters themselves\} be generated for new theories, and can their physics be read off directly from the network weights? We propose lattice field theory as a testbed for neural network interpretability: because the target physics is qualitatively well\-understood and smoothly varying, it provides ideal synthetic data against which network behavior can be checked against known ground truth\. To this end we introduce \\textbf\{JEPAWG\}, a Joint\-Embedding Predictive Architecture\-\-based Weight Generator that maps couplings directly to flow weights via a learned latent space\. On a scalar theory at lattice sizes $6^2$ and $8^2$, the JEPAWG latent space recovers the correct intrinsic dimension of the underlying manifold, identifies the region of phase transition, encodes a finite\-size shift aligned with the 2D Ising exponent $\\nu \\approx 1$, allowing us to uncover physical structure by studying the network weights alone\. As a generator, JEPAWG also interpolates and extrapolates to unseen couplings effectively and remains robust to weight\-space incongruences deliberately introduced by combining multi\-seed training data, outperforming PCA, AE, and VAE baselines\.

## S²MoE: Shared\-Subspace Mixture of Sparse Experts

**Authors:** Feihong He; Anke Tang; Enneng Yang; Hao Jiang; Guojie Zhu; Gang Li; XIAOCHUN CAO; Li Shen

**ID:** 152479\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152479

[Paper](<https://openreview.net/forum?id=SmZteLWKCK>) | [PDF](<https://openreview.net/pdf?id=SmZteLWKCK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152479>)

Model merging offers a training\-free paradigm for integrating multiple specialized models into a unified multi\-task system, enabling efficient knowledge reuse from models\. However, parameter interference remains a critical challenge, limiting the scalability and efficacy of merged models\. SVD\-based merging techniques represent the current state\-of\-the\-art, excelling in alleviating interference through task\-specific knowledge extraction and subspace orthogonalization\. % due to aggressive parameter truncation Despite these advances, they inevitably incur performance degradation due to aggressive parameter truncation, which discards valuable information and hinders inference accuracy\. Our analysis reveals this truncation\-induced knowledge loss as the fundamental bottleneck, motivating the need for mechanisms that preserve and recover discarded expertise without retraining\. To address this, we introduce S MoE, a novel framework that augments SVD\-based merging with a mixture of sparse experts to refine the truncation gap\. S MoE comprises three key components: \(1\) a shared module that aggregates multi\-task knowledge, \(2\) sparse experts that selectively recover truncation knowledge, and \(3\) a subspace mapping router to achieve precise training\-free routing\. Extensive experiments across vision and language benchmarks demonstrate up to 1\.6% and 1\.2% performance gains over SOTA methods, effectively validating robust and scalable model merging\.

## Stage\-Aware Dual Alignment for Covariate Shift in Graph Domain Adaptation

**Authors:** Hongwei Wen; Can Zhang; Haoyu He; Xintao Zhao; Hanyuan Hang; Minglong Lei

**ID:** 149801\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149801

[Paper](<https://openreview.net/forum?id=nFn17qZZSS>) | [PDF](<https://openreview.net/pdf?id=nFn17qZZSS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149801>)

The performance of \*Graph Domain Adaptation\* \(\*GDA\*\) is fundamentally limited by \*covariate\-driven\* discrepancies between source and target graphs, captured by \*Covariate Shift\* \(\*CS\*\) in the joint feature\-structure space beyond label\-related formulations\. We show that CS induces bias at two non\-interchangeable stages of \*Graph Neural Network\* \(\*GNN\*\) computation: \*Feature Shift\* \(\*FS\*\) distorts representations before message passing, while \*Feature\-Conditional Structure Shift\* \(\*FCSS\*\) biases propagation, rendering single\-stage alignment intrinsically insufficient\. Based on this, we propose \*Dual Alignment for Covariate Shift\* \(\*DACS\*\), a stage\-aware GDA framework that aligns discrepancies at their source\. DACS mitigates FS via adversarial feature alignment and addresses FCSS through layer\-wise reweighting to correct propagation bias, followed by final adversarial alignment for residual mismatch\. This design follows directly from the stage\-wise structure of CS rather than heuristic combinations of alignment modules\. We further show that representation and propagation biases correspond to distinct components of target\-domain error that cannot be eliminated in isolation\. Experiments on synthetic and real\-world benchmarks demonstrate that DACS consistently outperforms prior methods, especially under complex and coupled distribution shifts\.

## Large\-Scale Pretraining unlocks Few\-Shot Prediction for Relational Data

**Authors:** Rishabh Ranjan; Vignesh Kothapalli; Harshvardhan Agarwal; Charilaos Kanatsoulis; Roshan Upendra; Tom Palczewski; Carlos Guestrin; Jure Leskovec

**ID:** 149169\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149169

[Paper](<https://openreview.net/forum?id=sMFUopPlwy>) | [PDF](<https://openreview.net/pdf?id=sMFUopPlwy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149169>)

The ability to learn a new task from a few examples has been crucial to the success of foundation models such as large language models \(LLMs\)\. However, current foundation models for structured data like tables and relational databases still require tens of thousands of labeled examples to perform well on new tasks\. Here we show that when pretrained at scale with the right recipe, Relational Transformers \(RTs\) can make state\-of\-the\-art \(SoTA\) predictions with only hundreds of labels\. This capability arises from the following ingredients: First, we assemble THE JOIN, the largest pretraining corpus of relational data to date, comprising 6k forecasting tasks across 650 real\-world databases from diverse domains\. Second, we develop a pretraining recipe that combines \(1\) mixed context sizes for multi\-scale learning, \(2\) multi\-cell masking for dense supervision, and \(3\) a novel random\- walk\-based retriever to efficiently gather relevant context\. Third, we identify context ensembling and context tuning as complementary axes for scaling test\-time compute to further improve few\-shot performance\. Pretrained with our recipe on THE JOIN, RT achieves parity with LLM Agent \+ TabICLv2 and RDBLearn \+ TabICLv2 pipelines with 32–23×fewer labels respectively, and even surpasses the prior SoTA of full task\-specific training, on average nMAE for RelBench regression tasks\. Context ensembling and tuning improves this further by up to 3%, and 4% respectively\. Our ablations highlight the importance of schema semantics, multi\-cell masking, and random\-walk retrieval\. Overall, our work paves the way for developing relational foundation models with strong few\-shot capabilities\.

## MapPFN: Learning Causal Perturbation Maps in Context

**Authors:** Marvin Sextro; Weronika Kłos; Gabriel Dernbach

**ID:** 149118\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149118

[Paper](<https://openreview.net/forum?id=skdhOj5NkC>) | [PDF](<https://openreview.net/pdf?id=skdhOj5NkC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149118>)

Planning effective interventions in biological systems requires treatment\-effect models that adapt to unseen biological contexts by identifying their specific underlying mechanisms\. Yet single\-cell perturbation datasets span only a handful of biological contexts, and existing methods cannot leverage new interventional evidence at inference time to adapt beyond their training data\. To meta\-learn a perturbation effect estimator, we present MapPFN, a prior\-data fitted network \(PFN\) pre\-trained on a synthetic biological prior with causal interventions, decoupling pre\-training from limited wet\-lab data\. Unlike existing methods, MapPFN uses in\-context learning to map a sequence of experiments to a post\-perturbation distribution, enabling a single pre\-trained model to adapt to new datasets and arbitrary gene sets at inference time\. Zero\-shot, MapPFN identifies differentially expressed genes on par with models trained on real single\-cell data, and fine\-tuning further improves predictions across biological contexts\. Our code is available at https://anonymous\.4open\.science/r/MapPFN\.

## FLAME: Adaptive Mixture\-of\-Experts for Continual Multimodal Multi\-Task Learning

**Authors:** Xing Han; Shravan Chaudhari; Tanvi Ranade; Rama Chellappa; Suchi Saria

**ID:** 155468 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5NwsnKcAvg>) | [PDF](<https://openreview.net/pdf?id=5NwsnKcAvg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155468>)

Real\-world model deployment across multiple domains requires multimodal models to operate under two complementary regimes: \(1\) multi\-task pretraining, tasks are co\-available at design time where related tasks could borrow representational strength from one another, \(2\) continual adaptation, in which new tasks emerge after deployment with previously unseen modality combinations\. However, neither regime alone suffices: the pretraining task set is never exhaustive, while bypassing joint training forfeits the transfer gains and efficiency among co\-trainable tasks\. Sparse Mixture\-of\-Experts \(MoE\) is a natural fit for this dual requirement: sparse activation enables modular capacity expansion as new tasks arrive, while routing decouples modality\-level computation from task\-level composition\. In this work, we propose a scalable MoE framework for multitask pretraining and continual learning across flexible modality combinations\. The framework is designed to support training on multimodal tasks with diverse modality configurations by leveraging modality\-specific routers that process tokens from each modality across tasks\. Furthermore, it enables continual learning over sequential multimodal tasks within a fixed\-capacity MoE by compressing accumulated expert knowledge into low\-rank memory subspaces, while expanding only the lightweight routers\. We validate the effectiveness of our method on multiple healthcare multimodal benchmarks\. It demonstrates competitive multitask pretraining performance while alleviating catastrophic forgetting and improving parameter efficiency\.

## Learning Causal Orderings for In\-Context Tabular Prediction

**Authors:** Sascha Xu; Sarah Mameche; Jilles Vreeken

**ID:** 153895 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Htb1iiN3Fx>) | [PDF](<https://openreview.net/pdf?id=Htb1iiN3Fx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153895>)

_Abstract unavailable from the accessible public sources._

## Combating Catastrophic Forgetting in Continual Domain Adaptation via Knowledge Recasting

**Authors:** Zijie Liu; Zhen Tan; Charles Fleming; Tianlong Chen

**ID:** 148553 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x28eNvC5gp>) | [PDF](<https://openreview.net/pdf?id=x28eNvC5gp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148553>)

_Abstract unavailable from the accessible public sources._

## Hyperagents

**Authors:** Jenny Zhang; Bingchen Zhao; Wannan Yang; Jakob Foerster; Jeff Clune; Minqi Jiang; Sam Devlin; Tatiana Shavrina

**ID:** 153670 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jdp9fbYYbz>) | [PDF](<https://openreview.net/pdf?id=Jdp9fbYYbz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153670>)

Self\-improving AI systems aim to reduce reliance on human engineering by learning to improve their own learning and problem\-solving processes\. Existing approaches to self\-improvement rely on fixed, handcrafted meta\-level mechanisms, fundamentally limiting how fast such systems can improve\. The Darwin G\\"odel Machine \(DGM\) achieves open\-ended self\-improvement in coding, but this relies on domain\-specific alignment between task performance and self\-modification skill\. However, this alignment does not generally hold beyond coding domains\. We introduce \\textbf\{hyperagents\}, self\-referential agents that integrate a task agent \(which solves the target task\) and a meta agent \(which modifies itself and the task agent\) into a single editable program\. Crucially, the meta\-level modification procedure is itself editable, enabling metacognitive self\-modification, improving not only the task\-solving behavior, but also the mechanism that generates future improvements\. We instantiate this framework by extending DGM to create DGM\-Hyperagents \(DGM\-H\), eliminating the need for domain\-specific alignment to potentially support self\-accelerating progress on any computable task\. Across diverse domains, the DGM\-H improves performance over time and outperforms baselines without self\-improvement or open\-ended exploration, as well as prior self\-improving systems\. Furthermore, the DGM\-H improves the process by which it generates new agents \(e\.g\., persistent memory, performance tracking\), and these meta\-level improvements transfer across domains and accumulate across runs\. All experiments were conducted with safety precautions \(e\.g\., sandboxing, human oversight\)\. We discuss what safety entails in this setting and the broader implications of self\-improving systems\. DGM\-Hyperagents offer a glimpse of open\-ended AI systems that do not merely search for better solutions, but continually improve their search for how to improve\.

## Mixture\-of\-Control: State\-Aware Fine\-Tuning for Transformer\-based Models

**Authors:** Duc Anh Nguyen; Tien N Luu; Tung Pham; Toan Tran

**ID:** 148178 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zi0UrRKjku>) | [PDF](<https://openreview.net/pdf?id=zi0UrRKjku>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148178>)

State\-based fine\-tuning has emerged as a compelling alternative to weight\-based adaptation for transformers, updating lightweight controls into states rather than model weights, offering substantial memory savings while retaining parameter efficiency\. However, most existing state\-based methods typically apply only per\-block control updates, which limits inter\-block information exchange and restricts representational adaptation\. Meanwhile, prior mechanisms that enable cross\-block communication often introduce considerable computational overhead, reducing their practicality for efficient fine\-tuning\. We introduce Mixture\-of\-Control \(MoC\), a lightweight fine\-tuning framework that adaptively integrates local and global control signals to enhance representation learning\. MoC treats block\-wise control states as experts in a sparse mixture\-of\-experts process, enabling efficient communication across transformer blocks\. Experiments on 33 datasets and 10 pretrained models across diverse transformer\-based benchmarks demonstrate that MoC consistently outperforms existing state\-based fine\-tuning methods while maintaining comparable efficiency in memory and compute\.

## MMOU: A Massive Multi\-Task Omni Understanding and Reasoning Benchmark for Long and Complex Real\-World Videos

**Authors:** Arushi Goel; Sreyan Ghosh; Vatsal Agarwal; Nishit Anand; Kaousheik Jayakumar; Lasha Koroshinadze; Yao Xu; Katie Lyons; James Case; Siddharth Gururani; Karan Sapra; Kevin Shih; Abhinav Shrivastava; Ramani Duraiswami; Dinesh Manocha; Andrew Tao; Bryan Catanzaro; Mohammad Shoeybi; Wei Ping

**ID:** 139150 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i7REhEhgfx>) | [PDF](<https://openreview.net/pdf?id=i7REhEhgfx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139150>)

_Abstract unavailable from the accessible public sources._

## SCOT: Multi\-Source Cross\-City Transfer with Optimal\-Transport Soft\-Correspondence Objectives

**Authors:** Yuyao Wang; Min Yang; Meng Chen; Weiming Huang; Yilong Yin; Yongshun Gong

**ID:** 155328 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6RasfS5xjb>) | [PDF](<https://openreview.net/pdf?id=6RasfS5xjb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155328>)

_Abstract unavailable from the accessible public sources._

## ALIGN\-Rec: Continual Recommendation under Heterogeneous Unlearning Requests

**Authors:** Nitin Bisht; Sumit Bisht; Tong Zhang; Yu Yang; Huan Huo; Guandong Xu

**ID:** 153461 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L8dS5AKSwG>) | [PDF](<https://openreview.net/pdf?id=L8dS5AKSwG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153461>)

_Abstract unavailable from the accessible public sources._

## MixRoute: Rethinking Single\-Distribution Training for Generalizable Neural Routing

**Authors:** Hang Yi; Ziwei Huang; Yining Ma; Zhiguang Cao

**ID:** 151615\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151615

[Paper](<https://openreview.net/forum?id=ZE1vj1F5xY>) | [PDF](<https://openreview.net/pdf?id=ZE1vj1F5xY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151615>)

Neural Combinatorial Optimization \(NCO\) is a promising paradigm for solving routing problems, yet its generalization across diverse data distributions remains a critical bottleneck\. Existing methods typically tackle cross\-distribution generalization through complex multi\-distribution training or intricate meta\-learning schemes, implicitly presuming that single\-distribution training yields a weak zero\-shot baseline\. In this paper, we demonstrate that the potential of single\-distribution training has been substantially underestimated and can be unlocked by a simple architectural inductive bias: Mix Normalization\. To approach this, we first construct a comprehensive benchmark spanning three representative routing problems and 179 fine\-grained datasets, capturing diverse shifts in node coordinates, customer demands, and time windows\. Building on this benchmark, we propose MixRoute, a neural framework that adaptively combines normalization statistics at different granularities to mitigate varying distribution shifts\. Trained exclusively on uniform distributions, MixRoute generalizes effectively to a wide range of unseen distributions without any distribution\-specific adaptation\. Extensive experiments demonstrate that MixRoute consistently achieves state\-of\-the\-art zero\-shot generalization\. Our work revisits normalization as a parsimonious alternative for zero\-shot generalization against complex training\-adaptation schemes\.

## RESCAST\-100K: A Comprehensive Dataset for Cross\-Domain Residential Load and Indoor Temperature Forecasting

**Authors:** Jainam Dhruva; Yousaf Raza; A\.B\. Siddique; Simone Silvestri

**ID:** 139420\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139420

[Paper](<https://openreview.net/forum?id=Rh2FJGGNVR>) | [PDF](<https://openreview.net/pdf?id=Rh2FJGGNVR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139420>)

Accurate short\-term forecasting of residential energy load and indoor temperature is essential for home energy management systems, grid\-level demand response participation, and community\-level energy efficiency programs\. Domain adaptation methods and transfer learning have shown promise in improving forecasting accuracy under data heterogeneity and scarcity scenarios commonly observed at the residential level\. However, progress remains limited by the absence of comprehensive residential datasets: existing ones are narrow in target coverage and lack structured support for cross\-domain evaluation\. To address this, we introduce RESCAST\-100K, a large\-scale residential forecasting benchmark for studying cross\-domain generalization\. It exposes a configuration\-driven interface that instantiates source and target domains along interpretable axes, such as geography, climate zone, wall construction, and heating equipment, supporting systematic evaluation of transfer learning, domain adaptation, and zero\-shot generalization under controlled domain shifts\. The benchmark covers approximately 100,000 EnergyPlus\-simulated U\.S\. homes derived from ResStock, providing 15\-minute time series of three coupled targets per home, namely total load, HVAC \(heating, ventilation, and air conditioning\) load, and indoor temperature, together with weather channels, HVAC setpoints, and over 40 static building covariates\. Finally, it integrates five real\-world residential datasets under a unified schema, supporting sim\-to\-real evaluation on the same tasks\. We benchmark models from recurrent, attention, and MLP\-mixer architectures for zero\-shot performance across different domains, under missing input data conditions, for each task\. Cross\-attention and MLP\-mixer based models consistently outperform recurrent and classical transformer\-based baselines under domain shift\. RESCAST\-100K is intended to support the machine learning and building analytics communities in advancing cross\-domain residential forecasting at the home, community, and grid levels\.

## Balanced Multi\-Task Learning from an Optimality\-Gap Perspective

**Authors:** Ce Liu; Jianing Huang; HUANG Sicheng; Shu Liu; Xinyu Huang; Hao Yang

**ID:** 153699\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153699

[Paper](<https://openreview.net/forum?id=JQs8iJ1C2j>) | [PDF](<https://openreview.net/pdf?id=JQs8iJ1C2j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153699>)

Multi\-task learning requires a shared update that makes balanced progress across multiple objectives\. A key obstacle is that progress is difficult to compare across tasks with different loss scales, units, and local optimization dynamics\. We study this problem from an optimality\-gap perspective\. For each task, we compare the improvement induced by the shared update with the best one\-step improvement achievable by optimizing that task in isolation\. This comparison yields a scale\-invariant normalized improvement rate, which measures how well the shared update serves each task relative to its own local improvement bound\. We formulate balanced multi\-task optimization as a max\-min problem over the normalized improvement rates, thereby prioritizing the worst\-served task\. A local quadratic approximation leads to the Karush\-Kuhn\-Tucker \(KKT\) optimality conditions, showing that the optimal shared update is determined by a small set of bottleneck tasks\. Under an isotropic Hessian approximation, the update admits a closed\-form expression that depends only on task gradients and a regularized Gram matrix, while the bottleneck set is identified by an active\-set procedure\. Experiments on diverse benchmarks show improved task balance and competitive performance\.

## Understanding the Curse of Unrolling

**Authors:** Sheheryar Mehmood; Florian Knoll; Peter Ochs

**ID:** 149289\-\-4 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149289

[Paper](<https://openreview.net/forum?id=rOtZp9OVts>) | [PDF](<https://openreview.net/pdf?id=rOtZp9OVts>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149289>)

Algorithm unrolling is ubiquitous in machine learning, particularly in hyperparameter optimization and meta\-learning, where Jacobians of solution mappings are computed by differentiating through iterative algorithms\. Although unrolling is known to yield asymptotically correct Jacobians under suitable conditions, recent work has shown that the derivative iterates may initially diverge from the true Jacobian, a phenomenon known as the curse of unrolling\. In this work, we provide a non\-asymptotic analysis that explains the origin of this behavior and identifies the algorithmic factors that govern it\. We show that truncating early iterations of the derivative computation mitigates the curse while simultaneously reducing memory requirements\. Finally, we validate our theoretical findings both on synthetic problems and in a meta\-learning setting for few\-shot classification, where we study the behavior of gradients obtained via unrolling and implicit differentiation\.

## JEPAWG: Interpretable Hypernetworks for Weight\-Space Physics

**Authors:** Tobias Göbel; Julian R Ebelt; Zier Mensch; Mathis Gerdes; Miranda Cheng

**ID:** 150014\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150014

[Paper](<https://openreview.net/forum?id=lPOkD4q1Gx>) | [PDF](<https://openreview.net/pdf?id=lPOkD4q1Gx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150014>)

Lattice field theory is the workhorse of non\-perturbative physics, used to simulate phenomena from the strong nuclear force to critical phenomena in materials\. Its Boltzmann distributions are parametrized analytically by \\emph\{coupling constants\}, but these bare parameters are weak predictors of physical observables\-\-\-extracting physics typically requires extensive simulation\. While machine learning tools such as normalizing flows have emerged as effective samplers at fixed couplings, it remains difficult to interpret what the underlying neural networks have learned\. This raises a natural question: can the flow \\emph\{parameters themselves\} be generated for new theories, and can their physics be read off directly from the network weights? We propose lattice field theory as a testbed for neural network interpretability: because the target physics is qualitatively well\-understood and smoothly varying, it provides ideal synthetic data against which network behavior can be checked against known ground truth\. To this end we introduce \\textbf\{JEPAWG\}, a Joint\-Embedding Predictive Architecture\-\-based Weight Generator that maps couplings directly to flow weights via a learned latent space\. On a scalar theory at lattice sizes $6^2$ and $8^2$, the JEPAWG latent space recovers the correct intrinsic dimension of the underlying manifold, identifies the region of phase transition, encodes a finite\-size shift aligned with the 2D Ising exponent $\\nu \\approx 1$, allowing us to uncover physical structure by studying the network weights alone\. As a generator, JEPAWG also interpolates and extrapolates to unseen couplings effectively and remains robust to weight\-space incongruences deliberately introduced by combining multi\-seed training data, outperforming PCA, AE, and VAE baselines\.

## S²MoE: Shared\-Subspace Mixture of Sparse Experts

**Authors:** Feihong He; Anke Tang; Enneng Yang; Hao Jiang; Guojie Zhu; Gang Li; XIAOCHUN CAO; Li Shen

**ID:** 152479\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152479

[Paper](<https://openreview.net/forum?id=SmZteLWKCK>) | [PDF](<https://openreview.net/pdf?id=SmZteLWKCK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152479>)

Model merging offers a training\-free paradigm for integrating multiple specialized models into a unified multi\-task system, enabling efficient knowledge reuse from models\. However, parameter interference remains a critical challenge, limiting the scalability and efficacy of merged models\. SVD\-based merging techniques represent the current state\-of\-the\-art, excelling in alleviating interference through task\-specific knowledge extraction and subspace orthogonalization\. % due to aggressive parameter truncation Despite these advances, they inevitably incur performance degradation due to aggressive parameter truncation, which discards valuable information and hinders inference accuracy\. Our analysis reveals this truncation\-induced knowledge loss as the fundamental bottleneck, motivating the need for mechanisms that preserve and recover discarded expertise without retraining\. To address this, we introduce S MoE, a novel framework that augments SVD\-based merging with a mixture of sparse experts to refine the truncation gap\. S MoE comprises three key components: \(1\) a shared module that aggregates multi\-task knowledge, \(2\) sparse experts that selectively recover truncation knowledge, and \(3\) a subspace mapping router to achieve precise training\-free routing\. Extensive experiments across vision and language benchmarks demonstrate up to 1\.6% and 1\.2% performance gains over SOTA methods, effectively validating robust and scalable model merging\.

## Stage\-Aware Dual Alignment for Covariate Shift in Graph Domain Adaptation

**Authors:** Hongwei Wen; Can Zhang; Haoyu He; Xintao Zhao; Hanyuan Hang; Minglong Lei

**ID:** 149801\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149801

[Paper](<https://openreview.net/forum?id=nFn17qZZSS>) | [PDF](<https://openreview.net/pdf?id=nFn17qZZSS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149801>)

The performance of \*Graph Domain Adaptation\* \(\*GDA\*\) is fundamentally limited by \*covariate\-driven\* discrepancies between source and target graphs, captured by \*Covariate Shift\* \(\*CS\*\) in the joint feature\-structure space beyond label\-related formulations\. We show that CS induces bias at two non\-interchangeable stages of \*Graph Neural Network\* \(\*GNN\*\) computation: \*Feature Shift\* \(\*FS\*\) distorts representations before message passing, while \*Feature\-Conditional Structure Shift\* \(\*FCSS\*\) biases propagation, rendering single\-stage alignment intrinsically insufficient\. Based on this, we propose \*Dual Alignment for Covariate Shift\* \(\*DACS\*\), a stage\-aware GDA framework that aligns discrepancies at their source\. DACS mitigates FS via adversarial feature alignment and addresses FCSS through layer\-wise reweighting to correct propagation bias, followed by final adversarial alignment for residual mismatch\. This design follows directly from the stage\-wise structure of CS rather than heuristic combinations of alignment modules\. We further show that representation and propagation biases correspond to distinct components of target\-domain error that cannot be eliminated in isolation\. Experiments on synthetic and real\-world benchmarks demonstrate that DACS consistently outperforms prior methods, especially under complex and coupled distribution shifts\.

## Large\-Scale Pretraining unlocks Few\-Shot Prediction for Relational Data

**Authors:** Rishabh Ranjan; Vignesh Kothapalli; Harshvardhan Agarwal; Charilaos Kanatsoulis; Roshan Upendra; Tom Palczewski; Carlos Guestrin; Jure Leskovec

**ID:** 149169\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149169

[Paper](<https://openreview.net/forum?id=sMFUopPlwy>) | [PDF](<https://openreview.net/pdf?id=sMFUopPlwy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149169>)

The ability to learn a new task from a few examples has been crucial to the success of foundation models such as large language models \(LLMs\)\. However, current foundation models for structured data like tables and relational databases still require tens of thousands of labeled examples to perform well on new tasks\. Here we show that when pretrained at scale with the right recipe, Relational Transformers \(RTs\) can make state\-of\-the\-art \(SoTA\) predictions with only hundreds of labels\. This capability arises from the following ingredients: First, we assemble THE JOIN, the largest pretraining corpus of relational data to date, comprising 6k forecasting tasks across 650 real\-world databases from diverse domains\. Second, we develop a pretraining recipe that combines \(1\) mixed context sizes for multi\-scale learning, \(2\) multi\-cell masking for dense supervision, and \(3\) a novel random\- walk\-based retriever to efficiently gather relevant context\. Third, we identify context ensembling and context tuning as complementary axes for scaling test\-time compute to further improve few\-shot performance\. Pretrained with our recipe on THE JOIN, RT achieves parity with LLM Agent \+ TabICLv2 and RDBLearn \+ TabICLv2 pipelines with 32–23×fewer labels respectively, and even surpasses the prior SoTA of full task\-specific training, on average nMAE for RelBench regression tasks\. Context ensembling and tuning improves this further by up to 3%, and 4% respectively\. Our ablations highlight the importance of schema semantics, multi\-cell masking, and random\-walk retrieval\. Overall, our work paves the way for developing relational foundation models with strong few\-shot capabilities\.

## Distilling What Matters: Confidence\-Aware Selective Distillation for Large Language Models

**Authors:** Ayan Sengupta; Vaibhav Seth; Tanmoy Chakraborty

**ID:** 149862\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149862

[Paper](<https://openreview.net/forum?id=mhRs8gO4jl>) | [PDF](<https://openreview.net/pdf?id=mhRs8gO4jl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149862>)

Knowledge Distillation \(KD\) trains a smaller\-capacity student model to imitate a larger\-capacity teacher model by matching output distributions, implicitly assuming the teacher to be a reliable oracle\. In large language models \(LLMs\), this assumption often fails: teacher predictions can exhibit high entropy and hallucinations, causing standard KD to degrade well\-calibrated student priors\. We propose CaRE\-KD, a confidence\-gated distillation framework that replaces static objectives with uncertainty\-adaptive optimization\. CaRE\-KD has two components: a token\-level loss \(CaRE\-Divergence\) that adaptively switches between Forward and Reverse KL based on teacher\-\-student confidence, and a batch\-level epistemic rejection mechanism \(Revival\) that suppresses updates when the teacher is more uncertain than the student\. We provide a gradient\-level analysis showing how this dual\-granularity design induces a conditional calibration mechanism that prior static divergences cannot reproduce\. Empirically, across eight teacher\-\-student pairs and eleven benchmarks spanning instruction following, chat alignment, code generation, and mathematical reasoning, CaRE\-KD delivers consistent and significant gains over strong baselines \(Skewed\-KL, $\\alpha$\-\-$\\beta$ divergence\)\. Highlights include up to $\+3\.2$ average ROUGE\-L on instruction\-following tasks, $\+2\.1$ pass@1 on MBPP, $\+1\.7$ accuracy on GSM8k, and $\+1\.8$ accuracy on CollegeMath over the strongest baseline, with consistent gains in LLM\-as\-a\-judge factuality \(up to $\+2\.5$ per task over Skewed\-RKL\)\. Revival further acts as a principled, loss\-agnostic plug\-in that systematically strengthens existing distillation objectives by filtering epistemically unreliable teacher supervision\.

## Bridging CLIP with DINO: Cross\-Modal Information Maximization for Online Test\-Time Adaptation

**Authors:** Taehoon Kim; Wonjun Hwang; Hyunsouk Cho

**ID:** 152887\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152887

[Paper](<https://openreview.net/forum?id=PeeVlwPgi8>) | [PDF](<https://openreview.net/pdf?id=PeeVlwPgi8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152887>)

_Abstract unavailable from the accessible public sources._

## From Small to Large: Cross\-Scale Graph Domain Adaptation via Local\-Global Structural Alignment

**Authors:** Ruiyi Fang; Gezheng Xu; QIUHAO Zeng; Zihao Jing; Jiale Cai; Zhihao Li; Hao Zheng; Xuanting Xie; Shuo Wang; Bingheng Li; RUIZHI PU; Zhao Kang; Charles Ling; Boyu Wang

**ID:** 152509\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152509

[Paper](<https://openreview.net/forum?id=Sb0yr9VOw6>) | [PDF](<https://openreview.net/pdf?id=Sb0yr9VOw6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152509>)

_Abstract unavailable from the accessible public sources._

## TabK: Amortized Bayesian Estimation of the Number of Clusters in Tabular Data

**Authors:** Mohammadreza Bakhtyari; Bogdan Mazoure; Renato C de Amorim; Guillaume Rabusseau; Vladimir Makarenkov

**ID:** 148754\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148754

[Paper](<https://openreview.net/forum?id=vH1EUKvrHt>) | [PDF](<https://openreview.net/pdf?id=vH1EUKvrHt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148754>)

Estimating the number of clusters, $k$, is a fundamental prerequisite for most clustering algorithms\. Traditionally, this estimation has relied on computationally expensive grid searches over internal cluster validity indices \(CVIs\) or adaptive clustering algorithms, both constrained by specific statistical assumptions\. We introduce TabK, a zero\-shot, permutation\-invariant transformer architecture that frames the estimation of $k$ as an amortized Bayesian inference problem for tabular data\. TabK leverages a novel Quantile Feature Encoder \(QFE\) to extract position\-free, content\-derived representations from empirical marginal distributions\. By learning a generalized structural bias over a diverse synthetic prior, TabK estimates the number of clusters in a single forward pass\. Evaluated across 50 diverse real\-world benchmarks, TabK outperforms its closest competitor, TabClustPFN, reducing the Mean Absolute Error \(MAE\) of the number of clusters estimation by 1\.2 \(from 2\.24 to 1\.04\)\. Furthermore, TabK empirically achieves the best position on the Pareto frontier among 12 evaluated methods, providing predictions of $k$ in an average time of less than one second, which is $2\\times$ faster than TabClustPFN and $30\\times$ faster than traditional CVIs such as Silhouette and Calinski\-Harabasz\. \*Code and data are available at:\* https://anonymous\.4open\.science/r/TabK\.

## RAIL: Representation\-Aligned Imitation Learning for Student\-Compatible Teacher Policies

**Authors:** Meraj Mammadov; Pedro Zuidberg Dos Martires; Johannes A\. Stork

**ID:** 154487\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154487

[Paper](<https://openreview.net/forum?id=DEj92qDbTo>) | [PDF](<https://openreview.net/pdf?id=DEj92qDbTo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154487>)

Reinforcement learning \(RL\) from raw sensory inputs such as images or onboard sensors can be challenging due to high\-dimensional observations and sparse rewards\. A common strategy is to train a teacher policy with access to privileged state information and then distill it into a student policy that acts from raw inputs alone\. However, when the teacher relies on information unavailable to the student, exact imitation may be impossible, creating an irreducible imitation gap\. Existing approaches typically mitigate this mismatch through careful reward shaping or additional reinforcement learning on the student policy after the teacher has been trained\. Instead, we introduce Representation\-Aligned Imitation Learning \(RAIL\), which addresses the mismatch during teacher training itself\. RAIL learns a latent representation shared across teacher and student observations using contrastive learning, and trains the teacher policy directly in this space\. Because the teacher policy is constrained to operate on this shared space, it learns behaviors that are reproducible from student observations\. This substantially reduces the imitation gap while preserving task performance\. Across multiple environments, RAIL outperforms strong baselines without reward modification or post\-hoc student fine\-tuning, and surpasses direct reinforcement learning from raw observations\. The learned representations further enable zero\-shot transfer to new tasks through teacher\-only training\.

## Semantic Priors Meet Statistical Evidence: Robust Forests for Few\-Shot Tabular Learning

**Authors:** Xuanliang Zhang; Dingzirui Wang; Keyan Xu; Qingfu Zhu; Wanxiang Che

**ID:** 150782\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150782

[Paper](<https://openreview.net/forum?id=fRkZEDhU3I>) | [PDF](<https://openreview.net/pdf?id=fRkZEDhU3I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150782>)

Few\-shot tabular learning is challenging because conventional tree\-based methods suffer from unstable split selection and leaf estimation when labeled examples are scarce\.  Although feature engineering based on Large Language Models \(LLMs\) provides useful semantic priors, it can be brittle when table semantics are incomplete or numerical evidence is unstable\.  This raises two key challenges: achieving semantic\-numerical robustness and calibrating multiple weak signals under sparse supervision\.  Therefore, we present LEAF, a train\-time LLM\-guided forest that treats LLM\-derived features and split preferences as calibratable priors rather than direct supervision\.  During tree induction, LEAF aligns semantic guidance with task\-specific statistical evidence, including teacher\-informed predictive signals and data\-dependent partition statistics, through a unified split\-scoring rule\.  At prediction time, it further stabilizes local estimates by blending sparse empirical observations with teacher\-informed support at each leaf\.  Experiments on few\-shot tabular classification and regression datasets show that LEAF consistently outperforms strong conventional and LLM\-based baselines, improving classification performance by 1\.4 points and reducing regression error by 0\.149 over the strongest previous method\.  Robustness analyses further demonstrate that LEAF is more stable than prior LLM\-based feature engineering methods under missing table semantics and numerical perturbations induced by distributional variation across tabular feature spaces and schema descriptions\.

## Re\-evaluating Continual Learning with Few\-Shot Adaptation

**Authors:** Amogh Inamdar; Matthew So; Vici I Milenia; Richard Zemel

**ID:** 138902\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138902

[Paper](<https://openreview.net/forum?id=xycCkL63TF>) | [PDF](<https://openreview.net/pdf?id=xycCkL63TF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138902>)

Continual learning methods aim to maximize the stability and plasticity of machine learning models that are trained on a sequence of tasks\. The standard measure of stability \(i\.e\., forgetting\) is the 0\-shot performance of a model on previously learned tasks, and plasticity, the performance on the most recently learned task\. However, 0\-shot evaluation does not fully measure a model or method's ability to retain learned information or adapt quickly to new information, as it requires perfect recall across multiple tasks\. In this paper, we propose \*few\-shot evaluation\* as a more comprehensive assessment of the stability and plasticity of a continual learning system\. Through few\-shot evaluation with a novel metric\-\-\-\*per\-shot plasticity\*\-\-\-on task sequences for continual image classification, we show that a mixture of \*foresight\* via the meta\-learning of a short sequence of future tasks and \*hindsight\* via replay on previously learned tasks leads to a model that strikes an ideal balance between stability and plasticity in a continual learning setting\.

## Synthetic Pre\-Pre\-Training Improves Language Model Robustness to Noisy Pre\-Training Data

**Authors:** Xu Guo; Runyu Peng; Jian Tong; Yunhua Zhou; haijun Lv; Zhihui Lu; Qipeng Guo

**ID:** 154925 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9wSLJmqdd1>) | [PDF](<https://openreview.net/pdf?id=9wSLJmqdd1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154925>)

Large language models \(LLMs\) rely on web\-scale corpora for pre\-training\. The noise inherent in these datasets tends to obscure meaningful patterns and ultimately degrade model performance\. Data curation mitigates but cannot eliminate such noise, so pre\-training corpora remain noisy in practice\. We therefore study whether a lightweight pre\-pre\-training \(PPT\) stage based on synthetic data with learnable temporal structure helps resist noisy data during the pre\-training \(PT\) stage\. % Concretely, we draw PPT sequences from many randomly initialized RNNs and keep the PT recipe unchanged\. Across various corruption settings, our method consistently improves robustness to noise during PT, with larger relative gains at higher noise levels\. % The gains generalize across corruption types and naturally noisy web corpora\.  For a 1B\-parameter model, a synthetic PPT stage with only 65M tokens achieves the same final loss as the baseline while using up to 49% fewer natural\-text PT tokens across different noise levels\. Mechanistic analyses suggest PPT does not immediately suppress attention to noisy tokens\. Rather, PPT\-initialized models gradually downweight attention between corrupted tokens during noisy PT\. This indicates that synthetic PPT inhibits noise self\-modeling and shapes the subsequent optimization trajectory\.

## Learning Causal Orderings for In\-Context Tabular Prediction

**Authors:** Sascha Xu; Sarah Mameche; Jilles Vreeken

**ID:** 153895\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153895

[Paper](<https://openreview.net/forum?id=Htb1iiN3Fx>) | [PDF](<https://openreview.net/pdf?id=Htb1iiN3Fx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153895>)

_Abstract unavailable from the accessible public sources._

## Combating Catastrophic Forgetting in Continual Domain Adaptation via Knowledge Recasting

**Authors:** Zijie Liu; Zhen Tan; Charles Fleming; Tianlong Chen

**ID:** 148553\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148553

[Paper](<https://openreview.net/forum?id=x28eNvC5gp>) | [PDF](<https://openreview.net/pdf?id=x28eNvC5gp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148553>)

_Abstract unavailable from the accessible public sources._

## Hyperagents

**Authors:** Jenny Zhang; Bingchen Zhao; Wannan Yang; Jakob Foerster; Jeff Clune; Minqi Jiang; Sam Devlin; Tatiana Shavrina

**ID:** 153670\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153670

[Paper](<https://openreview.net/forum?id=Jdp9fbYYbz>) | [PDF](<https://openreview.net/pdf?id=Jdp9fbYYbz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153670>)

Self\-improving AI systems aim to reduce reliance on human engineering by learning to improve their own learning and problem\-solving processes\. Existing approaches to self\-improvement rely on fixed, handcrafted meta\-level mechanisms, fundamentally limiting how fast such systems can improve\. The Darwin G\\"odel Machine \(DGM\) achieves open\-ended self\-improvement in coding, but this relies on domain\-specific alignment between task performance and self\-modification skill\. However, this alignment does not generally hold beyond coding domains\. We introduce \\textbf\{hyperagents\}, self\-referential agents that integrate a task agent \(which solves the target task\) and a meta agent \(which modifies itself and the task agent\) into a single editable program\. Crucially, the meta\-level modification procedure is itself editable, enabling metacognitive self\-modification, improving not only the task\-solving behavior, but also the mechanism that generates future improvements\. We instantiate this framework by extending DGM to create DGM\-Hyperagents \(DGM\-H\), eliminating the need for domain\-specific alignment to potentially support self\-accelerating progress on any computable task\. Across diverse domains, the DGM\-H improves performance over time and outperforms baselines without self\-improvement or open\-ended exploration, as well as prior self\-improving systems\. Furthermore, the DGM\-H improves the process by which it generates new agents \(e\.g\., persistent memory, performance tracking\), and these meta\-level improvements transfer across domains and accumulate across runs\. All experiments were conducted with safety precautions \(e\.g\., sandboxing, human oversight\)\. We discuss what safety entails in this setting and the broader implications of self\-improving systems\. DGM\-Hyperagents offer a glimpse of open\-ended AI systems that do not merely search for better solutions, but continually improve their search for how to improve\.

## Umbilic Multinomial Logistic Regression

**Authors:** Zihan Su; Nicu Sebe; Bernhard Schölkopf; Ziheng Chen

**ID:** 150927 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eJ5eydjNyT>) | [PDF](<https://openreview.net/pdf?id=eJ5eydjNyT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150927>)

Multinomial logistic regression \(MLR\) is the default last\-layer classifier in fully supervised recognition, while prototype classifiers are central to few\-shot recognition\. Although they are usually presented as different principles, we show that both can be organized by a geometric notion of class boundaries\. A Euclidean MLR logit is a signed distance to a class hyperplane, so ordinary MLR is already the hyperplane decision\-boundary case of Umbilic Multinomial Logistic Regression \(UMLR\)\. Classical submanifold geometry supplies the matching spherical decision boundary: in Euclidean space, the complete connected totally umbilic hypersurfaces are hyperplanes and spheres\. The spherical UMLR form keeps a prototype\-like center but adds a learnable radius; its signed squared\-distance form contains squared prototype scoring as the radius\-zero case\. Thus UMLR is not a separate replacement for MLR or prototypes, but a boundary\-aware family that places hyperplane logits, spherical logits, mixed heads, and prototype scoring in one framework\. Experiments on low\-shot vision head swaps, prototype comparisons, and mixed hyperplane\-\-sphere heads support this organization and show how the different decision boundaries behave across data regimes\. UMLR provides a compact geometric language for studying when class evidence is better modeled by flat boundaries, spherical boundaries, or their mixture\.

## Distinguishing Performance From Competence in Evaluations of Humanlike Abstract Reasoning

**Authors:** Claas Beger; Ryan Yi; Shuhao Fu; Kaleda K Denton; Arseny Moskvichev; Sarah Tsai; Sivasankaran Rajamanickam; Melanie Mitchell

**ID:** 139362\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139362

[Paper](<https://openreview.net/forum?id=Uc9b3QYaQN>) | [PDF](<https://openreview.net/pdf?id=Uc9b3QYaQN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139362>)

AI reasoning models have exceeded human performance on the ARC\-AGI\-1 benchmark, but does that mean state\-of\-the\-art models have the underlying competence—humanlike abstract reasoning—the benchmark was designed to test? Here we investigate the abstraction abilities of AI models using the closely related but simpler ConceptARC benchmark\. Our evaluations vary input modality \(textual vs\. visual\), use of external Python tools, and reasoning effort\. Beyond output accuracy, we evaluate the natural\-language rules that models generate to explain their solutions, enabling us to assess whether models recognize the abstractions that ConceptARC was designed to elicit\. We show that the best models’ rules are frequently based on less abstract, more domain\-specific concepts, capturing intended abstractions considerably less often than humans\. In the visual modality, AI models’ output accuracy drops sharply; however, our rule\-level analysis reveals that a substantial share of their rules capture intended abstractions, even as the models struggle to apply these concepts to generate correct solutions\. In short, we show that using performance \(accuracy\) alone can substantially overestimate AI competence in textual modalities while underestimating it in visual modalities—an illustration of the risk of mistaking performance for competence\.

## DDGE: Disentangled Dirichlet Geodesic Evaluation for Robust Few\-Shot Learning

**Authors:** Yifan Mei; Kun Zhou; Zelei Wu; Jieyu Zhao; Xulun Ye

**ID:** 151036\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151036

[Paper](<https://openreview.net/forum?id=dSbq1BWqRS>) | [PDF](<https://openreview.net/pdf?id=dSbq1BWqRS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151036>)

_Abstract unavailable from the accessible public sources._

## META\-PAP: Meta\-learning for Prompt\-aware Preference Pairing in LLM Alignment

**Authors:** Pinlong Zhao; Shiyu Hu; Jing Zhang; Mengyang Li

**ID:** 148316\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148316

[Paper](<https://openreview.net/forum?id=yiQav1vmSS>) | [PDF](<https://openreview.net/pdf?id=yiQav1vmSS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148316>)

Direct Preference Optimization \(DPO\) has become a popular route for aligning large language models with human preferences, but existing pipelines treat all preference pairs uniformly and ignore prompt\-level heterogeneity\. We show that the optimal pair\-selection strategy varies systematically with prompt characteristics: prompts with concentrated reward distributions benefit from large reward\-gap pairs that provide unambiguous signal, while prompts with diverse responses benefit from moderate\-gap pairs because extreme positions are dominated by outliers\. No fixed strategy is optimal across this heterogeneity\. We propose META\-PAP \(Meta\-learning for Prompt\-aware Preference Pairing\), a framework that turns this observation into a learned algorithm\. META\-PAP generates multiple diverse pairs per prompt via a structured grid over the response reward distribution, extracts a compact prompt\-aware feature vector, and trains a lightweight meta\-network through bilevel optimization to predict per\-pair weights\. The inner loop is a weighted DPO update; the outer loop evaluates a virtual policy on a small clean meta\-set\. Across Llama\-3\-8B, Mistral\-7B\-v0\.3, and Llama\-2\-7B, META\-PAP consistently outperforms vanilla DPO, fixed\-position pairing, reward\-gap weighting, top\-$k$ filtering, curriculum, and statistical rejection sampling, with average gains of $\+3\.9$ points on AlpacaEval\~2\.0 and $\+3\.2$ points on Arena\-Hard, and approaches an oracle that exhaustively searches per prompt\. The learned weighting policy is interpretable: it favors large\-gap pairs on low\-diversity prompts and softly rejects extreme pairs on high\-diversity prompts\. We additionally find that the meta\-network requires only $M\\\!=\\\!150$ pairs to saturate, transfers across domains, tolerates label noise on the meta\-set, and remains effective with as few as $n\\\!=\\\!32$ on\-policy samples per prompt\.

## Safeguarding Mutual Correction in Source\-Free Domain Adaptation via Cut Statistics

**Authors:** Seongjun Lee; Changhee Lee

**ID:** 153109 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NsHE6SsVpK>) | [PDF](<https://openreview.net/pdf?id=NsHE6SsVpK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153109>)

Source\-Free Domain Adaptation \(SFDA\) aims to adapt a source\-pretrained model to an unlabeled target domain without access to the original source domain\. While early single\-model approaches rely on self\-refinement, they are inherently susceptible to confirmation bias and struggle to correct their own systematic errors\. To overcome this limitation, recent methods introduce Vision\-Language \(ViL\) models as external knowledge sources\. However, these approaches operate in a largely unidirectional paradigm, using the ViL model primarily to supervise the source\-pretrained model\. This overlooks a key structural property: the two models exhibit distinct failure modes \-\- where one produces an incorrect prediction, the other may produce a correct one, creating a natural opportunity for mutual correction within the target domain\. Yet, without ground\-truth labels, identifying which model is correct on any given sample is non\-trivial, and naively exchanging predictions risks propagating errors across models\. To address this challenge, we propose SafeCut, a novel approach that leverages the cut statistic as a label\-free measure of prediction reliability to gate cross\-model supervision\. Our approach dynamically controls both the direction and strength of supervision based on relative reliability, selectively amplifying true corrections while suppressing miscorrections on a per\-sample basis\. We further provide theoretical justification showing that this reliability\-gated mechanism guarantees a net\-positive correction signal\. Extensive experiments across diverse SFDA benchmarks demonstrate that SafeCut achieves state\-of\-the\-art performance, highlighting the effectiveness of safeguarding mutual correction in SFDA via cut statistics\. Codes are available https://anonymous\.4open\.science/r/SafeCut\_Source\_Free\_Domain\_Adaptation\-65D0/

## ScreenShot: A Foundation Model for Few\-Shot Combination Drug Screening

**Authors:** Antoine de Mathelin; Christopher Tosh; Wesley Tansey

**ID:** 150824\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150824

[Paper](<https://openreview.net/forum?id=f1jlqYKqL6>) | [PDF](<https://openreview.net/pdf?id=f1jlqYKqL6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150824>)

_Abstract unavailable from the accessible public sources._

## Cross\-Architecture Transferability is Width\-Confounded:Diagnosis and Subspace Correction

**Authors:** QIN LIU; Chen Zhong; Fengshan Zhao

**ID:** 151354\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151354

[Paper](<https://openreview.net/forum?id=bAYaurZBBI>) | [PDF](<https://openreview.net/pdf?id=bAYaurZBBI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151354>)

_Abstract unavailable from the accessible public sources._

## BDC\-Merge: Cross\-Architecture Model Merging via Dependency Alignment

**Authors:** Yukai Wang; Wenhao Zhao; Xingyu Zhu; Junfeng Fang; Ruipeng Wang; Houcheng Jiang; Xiang Wang

**ID:** 151593\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151593

[Paper](<https://openreview.net/forum?id=ZOfiCmcwhT>) | [PDF](<https://openreview.net/pdf?id=ZOfiCmcwhT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151593>)

Large language models have achieved remarkable capabilities by scaling model capacity and training data, yet many practical deployments still rely on smaller models with limited resources whose capabilities lag behind their larger counterparts trained with richer resources\. This gap calls for efficient knowledge transfer from source models with richer resources to compact target models\. While model merging provides an effective mechanism, most existing methods are based on the assumption that the source and target models are architecturally compatible, making them inapplicable to heterogeneous source and target pairs\. Although a recent method based on optimal transport extends model merging to settings with different architectures, it remains limited by linear correspondence modeling, iterative transport optimization, and reliance on supervised adaptation after fusion for further performance gains\. To address these limitations, we propose BDC\-Merge, a framework for model merging across different architectures based on Brownian Distance Correlation \(BDCorr\)\. BDC\-Merge uses a small calibration set to estimate dependencies between heterogeneous activations at the feature level and the layer level, and directly lifts these dependencies from activation space into fusion operators in weight space, enabling effective parameter fusion across different architectures without any gradient based optimization or training after fusion\. Extensive experiments across four low resource language and two specialized knowledge benchmarks show that BDC\-Merge consistently outperforms the state of the art baseline for model merging across different architectures and largely preserves the target model’s general capabilities\.

## DDGE: Disentangled Dirichlet Geodesic Evaluation for Robust Few\-Shot Learning

**Authors:** Yifan Mei; Kun Zhou; Zelei Wu; Jieyu Zhao; Xulun Ye

**ID:** 151036\-\-3 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151036

[Paper](<https://openreview.net/forum?id=dSbq1BWqRS>) | [PDF](<https://openreview.net/pdf?id=dSbq1BWqRS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151036>)

_Abstract unavailable from the accessible public sources._

## META\-PAP: Meta\-learning for Prompt\-aware Preference Pairing in LLM Alignment

**Authors:** Pinlong Zhao; Shiyu Hu; Jing Zhang; Mengyang Li

**ID:** 148316\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148316

[Paper](<https://openreview.net/forum?id=yiQav1vmSS>) | [PDF](<https://openreview.net/pdf?id=yiQav1vmSS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148316>)

Direct Preference Optimization \(DPO\) has become a popular route for aligning large language models with human preferences, but existing pipelines treat all preference pairs uniformly and ignore prompt\-level heterogeneity\. We show that the optimal pair\-selection strategy varies systematically with prompt characteristics: prompts with concentrated reward distributions benefit from large reward\-gap pairs that provide unambiguous signal, while prompts with diverse responses benefit from moderate\-gap pairs because extreme positions are dominated by outliers\. No fixed strategy is optimal across this heterogeneity\. We propose META\-PAP \(Meta\-learning for Prompt\-aware Preference Pairing\), a framework that turns this observation into a learned algorithm\. META\-PAP generates multiple diverse pairs per prompt via a structured grid over the response reward distribution, extracts a compact prompt\-aware feature vector, and trains a lightweight meta\-network through bilevel optimization to predict per\-pair weights\. The inner loop is a weighted DPO update; the outer loop evaluates a virtual policy on a small clean meta\-set\. Across Llama\-3\-8B, Mistral\-7B\-v0\.3, and Llama\-2\-7B, META\-PAP consistently outperforms vanilla DPO, fixed\-position pairing, reward\-gap weighting, top\-$k$ filtering, curriculum, and statistical rejection sampling, with average gains of $\+3\.9$ points on AlpacaEval\~2\.0 and $\+3\.2$ points on Arena\-Hard, and approaches an oracle that exhaustively searches per prompt\. The learned weighting policy is interpretable: it favors large\-gap pairs on low\-diversity prompts and softly rejects extreme pairs on high\-diversity prompts\. We additionally find that the meta\-network requires only $M\\\!=\\\!150$ pairs to saturate, transfers across domains, tolerates label noise on the meta\-set, and remains effective with as few as $n\\\!=\\\!32$ on\-policy samples per prompt\.

## PotARCin: Multi\-Dimensional Evaluation of Skill Acquisition in Abstract Reasoning Tasks

**Authors:** Claas Beger; Ryan Yi; Melanie Mitchell

**ID:** 139746 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=73Y8WKXOCP>) | [PDF](<https://openreview.net/pdf?id=73Y8WKXOCP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139746>)

_Abstract unavailable from the accessible public sources._

## PM\-LoRA: Scalable Continual Learning via Progressive Merging of Low Rank Adapters

**Authors:** Xiaobing Yu; Peijie Qiu; Jin Yang; Xiaoqi Zhao; XUANZHAO DONG; Wenhui Zhu; Xiwen Chen; Weiwei Ma; Xiaofeng Liu; Jiangpeng He

**ID:** 153951 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HL68qRLWDM>) | [PDF](<https://openreview.net/pdf?id=HL68qRLWDM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153951>)

_Abstract unavailable from the accessible public sources._

## KuaiRecV2: Benchmarking Large\-Scale Continual Learning for Diversified and Multi\-task Recommendation

**Authors:** Chenxu Li; Shuchang Liu; Hantao Shu; Wei Yuan; Zhe Xu; Guoqing Hu; Yan Wang; Biao Yang; Xiang Li; Cheng Ling; Fan Yang; Yongqi Liu; Lantao Hu; Han Li; Kaiqiao Zhan; Kun Gai; An Zhang; Xiang Wang

**ID:** 139710 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=95TcP79S4L>) | [PDF](<https://openreview.net/pdf?id=95TcP79S4L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139710>)

_Abstract unavailable from the accessible public sources._

## Few\-shot Task Learning via Compositional Concept Inference

**Authors:** Hanming Ye; Yiding Song; Yilun Du

**ID:** 150752 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=feUnReGdA8>) | [PDF](<https://openreview.net/pdf?id=feUnReGdA8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150752>)

Humans can learn new tasks from just a few demonstrations\. Prior methods like behavior cloning struggle to replicate this ability because they imitate demonstrations without learning the underlying concepts, such as goals, positional relations, and constraints\. To address this challenge, we propose COIN, an approach that represents behavior as a composition of reusable concepts\. A new task is learned by inferring its concepts from demonstrations then using a policy to implement them\. We show that this approach is effective at few\-shot learning across diverse domains\. On object rearrangement, goal\-oriented navigation, and human motion generation, COIN recombines previously seen concepts to solve novel tasks at inference time\. On the LIBERO robotics benchmark, COIN achieves a $96\.9$% average success rate on LIBERO\-90, surpassing pretrained policies such as $\\pi\_0$ with roughly $10\\times$ fewer parameters\. This performance gap widens further when fine\-tuning on unseen tasks with limited demonstrations, highlighting the advantage of concept inference over end\-to\-end policy adaptation in the few\-shot regime\.

## DUST: Directional Uncertainty\-aware and Scale\-invariant Transfer Learning

**Authors:** Abhisek Chakraborty

**ID:** 151376 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b3WKmq3X8i>) | [PDF](<https://openreview.net/pdf?id=b3WKmq3X8i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151376>)

Transfer learning seeks to improve  efficiency in a target regression task by borrowing information from related external source dataset\(s\)\. Existing approaches achieve this by enforcing Euclidean proximity between the target and source regression parameters or, more recently, by encouraging  their directional alignment through angle\-based penalties\. While such angle\-based penalties mitigate the sensitivity of the transfer learning methods to the scale differences between source and target regression coefficients, they still rely on a point estimate of the source regression parameter and thus provide no direct mechanism to incorporate uncertainty in the source information\. To that end, we propose a probabilistic framework for transfer learning that operates at the level of a \\emph\{scale\-invariant directional distribution\} of the source regression parameter estimate, rather than its point estimate, to enable robust, scale\-invariant and uncertainty aware transfer under heterogeneous source information\. Specifically, we project the sampling distribution of the source regression estimate onto the unit sphere, thereby extracting its scale\-free directional distribution\. Transfer from source to target is then induced through a novel \\emph\{angular cone prior\} which shrinks the target regression parameter towards directions in which the source distribution assigns high probability, while allowing its magnitude to be learned exclusively from the target dataset\.  The proposed construction admits exact finite\-sample characterizations of posterior angular concentration and posterior computation remains tractable via careful low\-dimensional augmentation in the parameter space\. Simulation studies and application on a benchmark hypertension prediction task based on the National Health and Nutrition Examination Survey \(NHANES\) datasets demonstrate that the proposed method yields marked gains over existing approaches in settings with substantial uncertainty in the source regression estimate and source\-\-target scale mismatch\.

