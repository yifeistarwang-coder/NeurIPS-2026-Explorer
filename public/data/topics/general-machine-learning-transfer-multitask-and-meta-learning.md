# General Machine Learning / Transfer, Multitask and Meta\-learning

通用机器学习 / 迁移、多任务与元学习

109 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Prediction\-Powered Inference Across Many Tasks for AI Evaluations and Social Science Research

**Authors:** Nicolas Emmenegger; Ellery Stahler; Chara Podimata

**ID:** 149115 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=smHkoEf2vb>) | [PDF](<https://openreview.net/pdf?id=smHkoEf2vb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149115>)

Many applications require statistically valid inference across many related tasks, while providing only a handful of high\-quality labels per task\. In AI evaluation, these tasks may correspond to model behaviors across prompts, subgroups, or hypotheses; in social science surveys, they may correspond to related questions, populations, or measurement conditions\. Prediction\-powered inference uses inexpensive proxy measurements to improve inference from limited labels, but standard methods operate task\-by\-task and therefore struggle in the small\-label regime\. We introduce a multi\-task prediction\-powered inference framework that borrows strength across tasks without pooling away validity\. Our methods learn surrogate outcomes using labeled data from other tasks while retaining within\-task rectification for valid per\-task confidence intervals\. We prove that efficiency gains beyond power\-tuned PPI require nonlinear structure in the proxy–ground\-truth relationship: affine cross\-task recalibrations are oracle\-equivalent to using the original proxy\. We complement our theoretical findings with experiments on semi\-synthetic datasets and a case study auditing language models on election\-related information during the 2024 U\.S\. presidential election\. Using a large human\-annotation study, we show that cross\-task surrogate learning can substantially reduce confidence interval widths when labels are scarce\.

## Welfare, Improvability, and Variance: A Principal\-Agent Approach to Optimal Benchmark Item Aggregation

**Authors:** Andreas Haupt; Justin Hartenstein; Anka Reuel\-Lamparth; Mykel J Kochenderfer; Sanmi Koyejo

**ID:** 138896 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yF6rmSx7l7>) | [PDF](<https://openreview.net/pdf?id=yF6rmSx7l7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138896>)

AI benchmarks have well\-documented limitations, with prior work examining contamination, saturation, and construct underspecification\. Aggregation has received far less attention: benchmarks are typically summarized by uniformly averaging item\-level scores, implicitly treating every test item as equally valuable\. We model benchmarking as a multitask principal–agent game and show that the welfare loss from a benchmark is determined jointly by three item\-level primitives: alignment with normative welfare priorities, marginal improvability, and performance variance\. We translate the theory into an audit framework that ranks items along each of these three axes, and apply it to OLMES items using WORKBank for welfare, the EvoLM 4B suite for improvability, and the PolyPythias 410M panel for variance\. The framework surfaces items that are Pareto\-inferior within OLMES subject to a pro\-worker welfare operationalization\.

## Contribution\-Aware Structured Sparsity for Model Merging

**Authors:** Yan Li; GUIPING CAO; Meng XU; Tao Jiang; Yaguang Song; Ming Tao; Yaowei Wang; Dongmei Jiang

**ID:** 154890 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A9dM7Hk3BV>) | [PDF](<https://openreview.net/pdf?id=A9dM7Hk3BV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154890>)

Model merging integrates task\-specific fine\-tuned models into a single multi\-task model, but often suffers from parameter interference caused by conflicting task\-vector updates\. Existing methods typically mitigate conflicts by pruning task vectors based on weight magnitude or random heuristics, treating Transformers as unstructured \`\`bags of parameters'' and overlooking their inherent modularity\. In this paper, we propose \\textbf\{C\}ontribution\-\\textbf\{A\}ware \\textbf\{S\}tructured \\textbf\{S\}parsity \(CASS\), a unified framework that reduces parameter interference by identifying and preserving task\-specific components\. At the core of CASS is a contribution\-aware structured mask that identifies task\-relevant attention heads and FFN neurons\. We instantiate this mask in two settings: CASS\-Merging, the primary post\-hoc setting where masks serve as a plug\-and\-play denoising filter for existing merging operators, and CASS\-Tuning, an extension for scenarios with fine\-tuning access where masks constrain gradients to reduce structural overlap between task vectors\. Our analysis shows that task\-relevant components are sparse and partially disjoint, supporting structured component\-level filtering as an effective way to reduce merging interference\. Extensive experiments across vision \(ViT, 20 tasks\) and language \(RoBERTa, 8 tasks; Qwen2\.5, 4 tasks\) benchmarks demonstrate that CASS improves a range of representative merging baselines\.

## You CAN Teach an Old Model New Tricks: Domain Adaptation via Complementary Subspace Expansion

**Authors:** Donghoon Han; SungHyun Moon; SeungJae Lee

**ID:** 149203 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sA9M7Ut7pf>) | [PDF](<https://openreview.net/pdf?id=sA9M7Ut7pf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149203>)

Production retrieval systems require three properties jointly: domain adaptation, preservation of general\-retrieval quality, and compatibility with existing vector indices\. Existing adaptation methods achieve at most two\. Standard parameter\-efficient fine\-tuning \(PEFT\) adapts to a domain but breaks the index and degrades general retrieval; backward\-compatible training \(BCT\) preserves the index approximately via distillation while sacrificing general retrieval under domain shift; frozen\-backbone side networks \(L2C\) preserve general retrieval but still modify the deployed embedding via additive combining, so existing indices are not preserved\. We introduce \\textbf\{CoSE\} \(Complementary Subspace Expansion\), a side\-branch LoRA whose frozen pathway is structurally untouched, so any index built from the base encoder remains valid \-\-\- the adapter is \\emph\{pluggable\}, added on top of an already\-deployed index without modifying existing entries\. A joint training objective converts the frozen\+LoRA concatenation into Pareto\-efficient retrieval\. Across four distinct domains \(Korean broadcast, medical radiology, art paintings, remote sensing\) and 3 seeds, CoSE at $6\.4$M trainable parameters is the only configuration that simultaneously stays within $\\pm 0\.048$ of the frozen base on Flickr, COCO, and ImageNet at the deployment\-default $\\alpha\{=\}0\.5$, is domain\-competitive with standard LoRA \(ties on RSICD, within $\\sim 2\\sigma$ on HAN and SemArt, $\-0\.05$ on ROCO\), and is backward\-compatible by construction\. Deployment\-time knobs \-\-\- $\\alpha$ blending, Matryoshka truncation, partial branching \-\-\- expose further cost/quality trade\-offs without retraining\.

## A Unified Semismooth Newton Approach to Multitask and Multivariate Square\-Root Lasso Problems

**Authors:** Dongwon Kim; Taehyoung Kim; Sungdong Lee; Joong\-Ho \(Johann\) Won

**ID:** 151762 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YEOev9QfVu>) | [PDF](<https://openreview.net/pdf?id=YEOev9QfVu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151762>)

We study scalable second\-order algorithms for high\-dimensional square\-root Lasso problems with multiple responses\. The resulting estimators preserve the scale\-free tuning property of their single\-response counterpart, but accurate large\-scale computation is challenging because both the loss and penalty terms are nonsmooth\. In this paper, we propose a computational framework that universally applies to multitask and multivariate square\-root Lasso models \(which includes the single\-response version\) based on the Douglas\-Rachford splitting\. We solve the nonsmooth equation induced by the splitting by a regularized semismooth Newton method with projection and fixed\-point safeguards\. Despite the nonsmoothness of the problem, the structure of the proximal maps and generalized Jacobian lead to a reduced Newton system in a much smaller dimension than that in the original space, promoting scalability\. Our method enjoys global and locally quadratic convergence under mild conditions\. Experiments on synthetic regression problems and large\-scale multi\-omic data show that the proposed method reaches the same fitted models and predictive performance as latest solvers tailored to individual models, while requiring fewer iterations and less wall\-clock time in large\-scale, high\-dimensional settings\.

## ModelLens: Finding the Best for Your Task from Myriads of Models

**Authors:** Rui Cai; Wenjie Mo; Xiaofei Wen; Qiyao Ma; Wenhui Zhu; Xiwen Chen; Muhao Chen; Zhe Zhao

**ID:** 151420 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aorWdSFrIh>) | [PDF](<https://openreview.net/pdf?id=aorWdSFrIh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151420>)

The open\-source model ecosystem now contains hundreds of thousands of pretrained models, yet picking the best model for a new dataset is increasingly infeasible: new models and unbenchmarked datasets emerge continuously, leaving practitioners with no prior records on either side\. Existing approaches handle only fragments of this in\-the\-wild setting: AutoML and transferability estimation select models from small predefined pools or require expensive per\-model forward passes on the target dataset, while model routing presupposes a given candidate pool\. We introduce ModelLens, a unified framework for model recommendation in the wild\.  Our key insight is that public leaderboard interactions, though scattered and noisy, collectively trace out an implicit atlas of model capabilities across heterogeneous evaluation settings, a signal rich enough to learn from directly\. By learning a performance\-aware latent space over model\-\-dataset\-\-metric tuples, ModelLens ranks unseen models on unseen datasets without running candidates on the target dataset\. On a new benchmark of 1\.62M evaluation records spanning 47K models and 9\.6K datasets, ModelLens surpasses baselines that either rely on metadata alone or require running each candidate on the target dataset\. Its recommended Top\-K pools further improve multiple representative routing methods by up to 81\\% across diverse QA benchmarks\. Case studies on recently released benchmarks confirming generalization to both text and vision\-language tasks\.

## Unlocking Compositional Generalization in Continual Few\-Shot Learning

**Authors:** Phu\-Quy Nguyen\-Lam; Phu\-Hoa Pham; Dao S Minh; Chi Nguyen Tran; Trung\-Kiet Huynh; Long Tran\-Thanh

**ID:** 153657 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JiDX823MQW>) | [PDF](<https://openreview.net/pdf?id=JiDX823MQW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153657>)

Object\-centric representations promise a key property for few\-shot learning: Rather than treating a scene as a single unit, a model can decompose it into individual object\-level parts that can be matched and compared across different concepts\. In practice, this potential is rarely realized\. Continual learners either collapse scenes into global embeddings, or train with part\-level matching objectives that tie representations too closely to seen patterns, leaving them unable to generalize to truly novel concepts\. In this paper, we identify this fundamental structural conflict and pioneer a new paradigm that strictly decouples representation learning from compositional inference\. Leveraging the inherent patch\-level semantic geometry of self\-supervised Vision Transformers \(ViTs\), our framework employs a dual\-phase strategy\. During training, slot representations are optimized entirely toward holistic class identity, preserving highly generalizable, object\-level geometries\. At inference, preserved slots are dynamically composed to match novel scenes\. We demonstrate that this paradigm offers dual structural benefits: The frozen backbone naturally  prevents representation drift, while our lightweight, holistic optimization  preserves the features' capacity for novel\-concept transfer\. Extensive experiments  validate this approach, achieving state\-of\-the\-art unseen\-concept generalization and minimal forgetting across standard continual learning benchmarks\.

## Past, Future, All at Once: Breaking Stability\-Plasticity Dilemma via Post\-hoc JANUS Rectification

**Authors:** Zhilong Zheng; Letian Tao; Yang Guan; Yujie Yang; Wei Xiong; Kehua Sheng; Bo Zhang; Jingliang Duan; Keqiang Li; Shengbo Eben Li

**ID:** 151428 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=amfBq5fDzv>) | [PDF](<https://openreview.net/pdf?id=amfBq5fDzv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151428>)

Fine\-tuning foundation models on new tasks inevitably suffer from catastrophic forgetting\. While existing works attempt to mitigate this on the basis of parameter\-efficient fine\-tuning methods, they adopted an overly restrictive Subspace Orthogonality condition\. In this paper, we introduce a purely \*post\-hoc\* and \*tuning\-agnostic\* weight rectification framework that achieves \*Parameter Space Orthogonality\*, which is the necessary and sufficient condition for preserving historical performance to the first order\. By projecting parameter updates into the JAcobian NUll Space \(JANUS\), our method significantly recovers compromised historical knowledge without interfering with the underlying fine\-tuning process\. To overcome the local validity of the Jacobian approximation, we further propose a Multi\-step Adaptive Rectification mechanism that utilizes the JANUS shift to dynamically verify the valid trust region and adjust step sizes\. Coupled with our proposed ghost projection, ghost orientation comparison, and sequence\-level singular value decomposition compression techniques, JANUS also achieves great temporal and spatial efficiency\. Experiments demonstrate that JANUS seamlessly integrates with various fine\-tuning methods, fundamentally breaking the stability\-plasticity dilemma by recovering historical knowledge while preserving downstream task adaptation\.

## Newton\-PINet: A fast physics\-informed neural network with Newton linearization for meta\-learning nonlinear PDEs

**Authors:** Yuchen Fan; Chang Wei; Pao\-Hsiung Chiu; Chin Chun Ooi; Heyang Wang; Jian Cheng Wong

**ID:** 148607 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wUNTVhsOr7>) | [PDF](<https://openreview.net/pdf?id=wUNTVhsOr7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148607>)

Scientific machine learning has opened new avenues for solving parameterized partial differential equations \(PDEs\), enabling models to learn a family of PDEs and generalize to unseen instances\. In this context, data\-driven operator learning methods typically require large training datasets, while physics\-informed neural networks \(PINNs\) suffer from difficult optimization and limited generalization, especially for nonlinear PDEs\. We propose Newton\-PINet, a physics\-informed network enhanced by Newton linearization, offering an effective meta\-learning framework for nonlinear PDEs\. Newton\-PINet \(i\) employs a physics\-informed multilayer network with skip connections, where the output\-layer weights are solved by least squares; \(ii\) adopts a two\-stage learning strategy that first leverages gradient\-based training to learn robust representations from the available training tasks, and then performs gradient\-free fine\-tuning on the output layer for fast task\-specific generalization; and \(iii\) incorporates a Newton linearization method to speed up the least\-squares iteration for nonlinear PDE problems\. On a challenging nonlinear reaction\-diffusion benchmark, Newton\-PINet achieves up to three orders of magnitude lower relative error than recent neural solvers, while using 16× fewer training tasks and over an order of magnitude less training time \(under 5 minutes versus several hours\)\. This work advances the meta\-learning of PINNs toward data\-efficient, fast, and generalizable physics solvers\. The datasets and code are provided in the supplementary material\.

## Deconstructing Multi\-Task Active Learning: The Paradox of Gradient Conflict and Orthogonal Decomposition

**Authors:** Juho Jung; Seongjae Kang; Jinyoung Han

**ID:** 153116 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NnPRFtAI1U>) | [PDF](<https://openreview.net/pdf?id=NnPRFtAI1U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153116>)

Existing multi\-task active learning \(MTL\-AL\) methods predominantly rely on the linear scalarization of heterogeneous objectives, such as uncertainty, diversity, and gradient conflict\.We argue that this entangled formulation is fundamentally limited, as linear combination fails to capture Pareto\-optimal trade\-offs under conflicting objectives\. To address this limitation, we propose a paradigm shift from combination to deconstruction and introduce a principled framework that rethinks MTL\-AL along three orthogonal dimensions\. First, we identify the Conflict Paradox: contrary to conventional wisdom, samples with high gradient conflict are not noise to be avoided but carry maximal information about unresolved inter\-task trade\-offs\. We therefore decouple sample selection, which embraces conflict, from optimization, which resolves it via gradient surgery\. Second, we introduce Orthogonal Decomposition, separating the acquisition objective into two distinct axes: Informativeness and Exploration\. This two\-stage process, consisting of subspace projection followed by manifold coverage, prevents \`\`diversity dilution'' by excluding uninformative outliers before enforcing diversity\. Third, we propose Cross\-Task Mutual Information \(CTMI\), a distribution\-free proxy for inter\-task dependency derived from a variational lower bound under the Maximum Entropy principle\. Extensive experiments on COCO, Cityscapes, and NYUv2 — including comparisons against recent multi\-task active learning baselines — demonstrate consistent improvements over state\-of\-the\-art MTL\-AL methods, highlighting that structural rethinking of acquisition yields larger gains than incremental heuristic design\. Our code is publicly available at: \\href\{https://anonymous\.4open\.science/r/multitask\_active\_learning\-1545\}\{\\texttt\{https://anonymous/CTMI\}\}

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

## Re\-evaluating Continual Learning with Few\-Shot Adaptation

**Authors:** Amogh Inamdar; Matthew So; Vici I Milenia; Richard Zemel

**ID:** 138902 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xycCkL63TF>) | [PDF](<https://openreview.net/pdf?id=xycCkL63TF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138902>)

Continual learning methods aim to maximize the stability and plasticity of machine learning models that are trained on a sequence of tasks\. The standard measure of stability \(i\.e\., forgetting\) is the 0\-shot performance of a model on previously learned tasks, and plasticity, the performance on the most recently learned task\. However, 0\-shot evaluation does not fully measure a model or method's ability to retain learned information or adapt quickly to new information, as it requires perfect recall across multiple tasks\. In this paper, we propose \*few\-shot evaluation\* as a more comprehensive assessment of the stability and plasticity of a continual learning system\. Through few\-shot evaluation with a novel metric\-\-\-\*per\-shot plasticity\*\-\-\-on task sequences for continual image classification, we show that a mixture of \*foresight\* via the meta\-learning of a short sequence of future tasks and \*hindsight\* via replay on previously learned tasks leads to a model that strikes an ideal balance between stability and plasticity in a continual learning setting\.

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

**ID:** 155543 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4kvpzWhoqH>) | [PDF](<https://openreview.net/pdf?id=4kvpzWhoqH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155543>)

We study issues which may arise when using transformer models to formally reason about problems stated informally using natural language\. In particular, we focus on transfer learning between tasks that are semantically equivalent but phrased differently\. We assume that examples with a particular target label are only available for a subset of tasks, and aim to transfer zero\-shot the ability to predict this label to other tasks\. Using controlled experiments on propositional logic problems, we show that transformers are capable of such transfer, but that it can be impeded by the presence of task\-specific tokens, due to the model picking up on correlations between these  tokens and the label early in the training\. As a simple solution, we show that introducing the target label later in the training dramatically improves transfer\.

## HyperFlow: Gradient\-Free Test\-Time Adaptation for Cross\-Domain Few\-Shot Classification

**Authors:** Donggyun Kim; Chanwoo Kim; Seunghoon Hong

**ID:** 154114 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GACGdvulrX>) | [PDF](<https://openreview.net/pdf?id=GACGdvulrX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154114>)

While test\-time fine\-tuning is beneficial in cross\-domain few\-shot classification, the need for multiple backpropagation steps can be prohibitively expensive in resource\-constrained environments\. We propose HyperFlow, a gradient\-free test\-time adaptation method that amortizes fine\-tuning dynamics into a lightweight conditional drift network\. During offline training, HyperFlow learns from fine\-tuning trajectories collected on meta\-training tasks\. Once trained, it adapts a selected PEFT parameter subspace for a new task by numerical ODE solving, requiring only forward passes of the drift network and no test\-time backpropagation through the target model\. In experiments on Meta\-Dataset and CD\-FSL benchmarks, our method improves out\-of\-domain performance over the direct transfer approach while using only 6\-14\\% of peak memory and about 1\\% of the FLOPs of standard fine\-tuning, positioning HyperFlow as an accuracy–efficiency trade\-off between direct transfer and fine\-tuning\.

## Goal\-Conditioned Supervised Learning for Multi\-Objective Recommendation

**Authors:** Shijun Li; Hilaf Hasson; Jing Hu; Joydeep Ghosh

**ID:** 153765 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IpkrkSg3Jo>) | [PDF](<https://openreview.net/pdf?id=IpkrkSg3Jo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153765>)

Multi\-objective learning endeavors to concurrently optimize multiple objectives using a single model, aiming to achieve high and balanced performance across diverse objectives\. However, this often entails a complex optimization problem to balance the learning of potentially conflicting objectives, leading to solutions with higher memory requirements and computational complexity\. This paper introduces a Multi\-Objective Goal\-Conditioned Supervised Learning \(MOGCSL\) framework for automatically learning to achieve multiple objectives from offline sequential data\. MOGCSL extends the conventional GCSL method to multi\-objective scenarios by redefining goals from one\-dimensional scalars to multi\-dimensional vectors\. It benefits from naturally eliminating the need for complex architectures and optimization constraints\. Moreover, MOGCSL inherently disentangles uninformative or noisy training instances that fail to achieve desirable long\-term rewards across multiple objectives\. We also introduce a novel goal\-selection algorithm for MOGCSL to model and identify desired and achievable goals for inference\.  In this paper, we focus on its application to the next action prediction problem in commercial\-grade recommender systems\. In this context, any viable solution needs to be reasonably scalable and also be robust to large amounts of noisy data that is characteristic of this application space\. We show that MOGCSL performs admirably on both counts by extensive experiments\. Also, analysis and experiments are included to explain its strength in discounting the noisier portions of training data in recommender systems with multiple objectives\. Code is available at: https://anonymous\.4open\.science/r/MOGCSL\-D7A2\.

## Distinguishing Performance From Competence in Evaluations of Humanlike Abstract Reasoning

**Authors:** Claas Beger; Ryan Yi; Shuhao Fu; Kaleda K Denton; Arseny Moskvichev; Sarah Tsai; Sivasankaran Rajamanickam; Melanie Mitchell

**ID:** 139362 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Uc9b3QYaQN>) | [PDF](<https://openreview.net/pdf?id=Uc9b3QYaQN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139362>)

AI reasoning models have exceeded human performance on the ARC\-AGI\-1 benchmark, but does that mean state\-of\-the\-art models have the underlying competence—humanlike abstract reasoning—the benchmark was designed to test? Here we investigate the abstraction abilities of AI models using the closely related but simpler ConceptARC benchmark\. Our evaluations vary input modality \(textual vs\. visual\), use of external Python tools, and reasoning effort\. Beyond output accuracy, we evaluate the natural\-language rules that models generate to explain their solutions, enabling us to assess whether models recognize the abstractions that ConceptARC was designed to elicit\. We show that the best models’ rules are frequently based on less abstract, more domain\-specific concepts, capturing intended abstractions considerably less often than humans\. In the visual modality, AI models’ output accuracy drops sharply; however, our rule\-level analysis reveals that a substantial share of their rules capture intended abstractions, even as the models struggle to apply these concepts to generate correct solutions\. In short, we show that using performance \(accuracy\) alone can substantially overestimate AI competence in textual modalities while underestimating it in visual modalities—an illustration of the risk of mistaking performance for competence\.

## GATE\-AD: Graph Attention Network Encoding for Few\-Shot Industrial Visual Anomaly Detection

**Authors:** ANGELOS PSYRRIS; Yannis Panagakis; Maria Vakalopoulou; Georgios Th\. Papadopoulos

**ID:** 151322 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bN9jwBjZqY>) | [PDF](<https://openreview.net/pdf?id=bN9jwBjZqY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151322>)

Few\-Shot Industrial Visual Anomaly Detection \(FS\-IVAD\) is a critical task in modern manufacturing, where automated product inspection systems must identify rare defects using only a handful of normal, defect\-free training samples\. This paper introduces GATE\-AD, a reconstruction\-based framework that casts few\-shot normality modeling as a masked, representation\-aligned graph reconstruction problem on a $k$\-nearest\-neighbor graph, built from frozen self\-supervised ViT patch tokens\. Since defects typically disrupt the contextual consistency between a patch and its spatial neighbors, GATE\-AD emphasizes such neighborhood relations by attending anisotropically over each patch's local neighborhood using a Graph Attention Network \(GAT\) encoder\. To prevent GAT over\-smoothing in the low\-shot setting, the encoder output is aligned with the input ViT tokens through a learnable latent space, where reconstruction inconsistency is scored with a Scaled Cosine Error \(SCE\) objective\. On the MVTec AD, VisA, and MPDD benchmarks, GATE\-AD attains state\-of\-the\-art image\-level AUROC in the wide majority of $1$\- to $8$\-shot settings, with low per\-image inference cost that does not scale with the size of the support set\. Code is included in the supplement material and will be publicly released upon acceptance\.

## VisualWorldBench: A Fine\-Grained Multi\-Task Benchmark for Evaluating Visual World Knowledge in MLLMs

**Authors:** Chen Chen; Zheming Liang; Jiaqi Wang

**ID:** 139562 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IQSAcPvs2W>) | [PDF](<https://openreview.net/pdf?id=IQSAcPvs2W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139562>)

Visual world knowledge is a core capability of multimodal large language models \(MLLMs\), underpinning knowledge\-intensive visual question answering and fine\-grained visual reasoning\. However, existing benchmarks fall short along two complementary dimensions\. First, category coverage is limited: most benchmarks cover only a few thousand fine\-grained entity categories, often within narrow domains, far from the open\-ended scale of real\-world visual entities\. Second, task diversity is limited: most benchmarks rely on single task formats such as closed\-set classification or attribute QA, and therefore cannot characterize the multi\-dimensional structure of visual world knowledge\. We introduce VisualWorldBench, a taxonomy\-grounded multi\-task diagnostic benchmark built on a hierarchical taxonomy of 21K\+ leaf\-node classes across 8 visual domains, comprising 32K\+ instances across four complementary tasks: closed\-set recognition, contrastive selection, precise localization, and open\-world naming\. To our knowledge, this is the largest category coverage among visual world knowledge benchmarks to date\. VisualWorldBench reveals substantial capability gaps hidden under conventional benchmarks: the strongest closed\-source model achieves only 80\.4% average accuracy, and single\-model spread across tasks can exceed 40 percentage points, indicating that visual world knowledge is multi\-dimensional rather than monolithic\. We further release VisualWorldBench\-50K, a training resource covering 50K\+ categories\. Fine\-tuning on VisualWorldBench\-50K yields over 21 percentage points improvement on VisualWorldBench, with consistent transfer to public fine\-grained recognition and visual knowledge benchmarks\.

## PaLoRA: Paced Low\-Rank Adaptation for Continual Learning

**Authors:** Yuxuan Li; Fanhu Zeng; Hao Tang

**ID:** 150774 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fU1XY23snF>) | [PDF](<https://openreview.net/pdf?id=fU1XY23snF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150774>)

LoRA\-based continual learning methods mitigate catastrophic forgetting through various mechanisms, yet nearly all complement these with \*\*small learning rates as a heuristic to restrict gradient scaling magnitude\*\*\. Such fixed heuristics lack theoretical guidance on how the strength of this restriction should evolve as tasks accumulate\. We reveal that even under directional constraints such as nullspace projection, finite\-precision updates inevitably leak into the subspace of accumulated prior knowledge along multiple directions\. While small learning rates attenuate such leakage, they cannot prevent the accumulated forgetting from intensifying as the effective rank of historical knowledge grows\. We show that the optimal magnitude restriction should adaptively increase with this effective rank to balance \*\*stability and plasticity\*\*, \*i\.e\.\*, preservation of previous knowledge and acquisition of new task information\. Under an anisotropic leakage model, we derive a pacing law $s^\*=\\sqrt\{R/c\}$ that characterizes the optimal \*\*scaling of gradient steps,\*\* \*i\.e\.\*, the magnitude restriction itself, where $R$ is the effective rank of past updates\. Based on this insight, we propose PaLoRA, which compresses historical knowledge via adaptive SVD truncation, projects gradients onto the nullspace of prior tasks, and applies rank\-aware adaptive pacing\. Experiments demonstrate consistent improvements over prior methods, with particularly strong performance in long\-horizon settings, achieving substantial gains of 4% accuracy on challenging 50\-task ImageNet\-A and ImageNet\-R benchmarks\.

## Adaptive Attribute Completion with Representation Space for Incomplete Graph Domain Adaptation

**Authors:** Niya Yang; Di Jin; Zhizhi Yu; Liang Yang; Yuxiao Huang; Dongxiao He; Jianguo Wei

**ID:** 152820 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Q9ifmP2xFG>) | [PDF](<https://openreview.net/pdf?id=Q9ifmP2xFG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152820>)

Graph Domain Adaptation \(GDA\) has emerged as an effective technique for transferring knowledge from a label\-rich source graph to an unlabeled target graph by mitigating cross\-graph discrepancies\. However, in real\-world scenarios, the attributes of partial nodes may be unobserved \(i\.e\., missing\) due to factors such as privacy protection\. This inevitably exacerbates the distribution discrepancy of nodes between graph domains, making it more challenging to transfer effective knowledge to the target graph\. To tackle this issue, we propose an adaptive attribute completion approach with representation space for incomplete graph domain adaptation, namely AC\-GDA\. It mutually assists the attribute completion and dynamically optimizes cross\-graph trustworthy embeddings in an iterative manner, promoting positive knowledge migration while completing attributes\. Specifically, we first propose a joint completion mechanism guided by topology similarity, which leverages cross\-graph trustworthy attribute embeddings with imputation weights to adaptively complete missing node attributes\. We then enhance node embeddings with label information to provide supervision for completed nodes, making nodes of the same category distribute consistently across graph domains\. Furthermore, we introduce the complement confidence score to dynamically adjust the scope of trustworthy embeddings, so as to improve the quality of subsequent cross\-graph imputation\. Extensive experiments on a range of cross\-graph tasks validate the effectiveness of AC\-GDA\.

## Full Fine\-Tuning Is Not the Problem: Why Adam Fails and SGD Succeeds in Few\-Shot CLIP Adaptation

**Authors:** Nairouz Mrabah; Ismail Ayed; Eric Granger

**ID:** 148745 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vMIIW94Dzm>) | [PDF](<https://openreview.net/pdf?id=vMIIW94Dzm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148745>)

Few\-shot CLIP adaptation is often treated as a parameterization problem, where full fine\-tuning is assumed to overfit, so parameter\-efficient fine\-tuning \(PEFT\) methods are preferred\. In this paper, we show that this conclusion conflates parameterization with optimization\. Across 11 datasets, 3 CLIP backbones, and 5 shot levels, dense full fine\-tuning with plain SGD outperforms representative PEFT methods, whereas Adam/AdamW collapses\. We trace this collapse to unreliable support\-set preconditioning\. The few\-shot second moment systematically underestimates the corresponding full\-data statistic, already at initialization\. Adam’s inverse\-square\-root normalization converts this error into an oversized adaptive update\. Matching Adam’s first\-step update budget to SGD resolves most of the collapse, whereas numerator\-side alignment does not explain the failure\. Shampoo and SOAP also fail, showing that the problem is not merely Adam’s diagonal approximation but a broader mismatch between support\-set and full\-data preconditioning geometry\. Theory formalizes how few\-shot estimation error is amplified into unsafe updates\. SGD succeeds because it avoids unreliable preconditioners, stays close to pretrained CLIP, and follows broad, connected, low\-curvature corridors\. These results identify optimizer\-induced preconditioning, not dense full fine\-tuning itself, as the main source of failure in few\-shot CLIP adaptation\. Our code is included in the supplementary materials and will be made public\.

## CivBench: A Long\-Horizon Benchmark for Tool\-Mediated Agents in Civilization VI

**Authors:** Austin T D Andrews; Liam Wilkinson; Jamie Heagerty; Harry Coppock; Jakob Foerster; Rui Costa

**ID:** 139660 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CL2vWOhnZJ>) | [PDF](<https://openreview.net/pdf?id=CL2vWOhnZJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139660>)

We present CivBench, an open\-source benchmark for evaluating language model agents in long\-horizon, tool\-mediated environments through the Model Context Protocol \(MCP\)\. A single episode spans 300\+ turns and produces thousands of tool calls over a large action space, requiring sustained planning, state monitoring, and execution under partial observability\. The environment exposes 76 MCP tools and a narration layer that converts visual game state into structured text\. We use CivBench to characterise agent behaviour across four model families in 23 admissible runs\. The sample is a pilot, not a model ranking: aggregate outcomes do not reliably discriminate models at this scale\. Instead, we introduce two interface\-level metrics that the environment makes measurable: Proactive Monitoring Rate \(PMR\), capturing whether agents actively query latent strategic state, and RAG@10, capturing whether commitments stated in structured planning reflections are executed within ten subsequent turns\. Across runs we observe two consistent patterns under a shared playbook protocol\. Agents under\-monitor strategically relevant state that is available but requires explicit querying: despite playbook guidance to query victory progress every 20 turns, agents do so only every 30–75 turns, and in 7 of 20 detectable defeats they failed to query within the 20\-turn warning window before game end\. Agents also frequently fail to execute near\-term commitments stated in their own planning reflections \(RAG@10 between 48% and 66% across models\)\. Both patterns arise despite tool access and explicit guidance, and we interpret them as deviations under instruction rather than absences of capability\. We release the environment, scenarios, logs, metrics, and analysis pipeline at https://anonymous\.4open\.science/r/civbench/README\.md\.

## PotARCin: Multi\-Dimensional Evaluation of Skill Acquisition in Abstract Reasoning Tasks

**Authors:** Claas Beger; Ryan Yi; Melanie Mitchell

**ID:** 139746 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=73Y8WKXOCP>) | [PDF](<https://openreview.net/pdf?id=73Y8WKXOCP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139746>)

The Abstraction and Reasoning Corpus \(ARC\) has become a prominent benchmark for evaluating skill acquisition in AI models\. Yet standard ARC evaluation considers only a single capability: producing the correct output grid for a test input\. We argue that this narrow format underestimates the diversity of abilities required for genuine abstract skill acquisition\. We introduce PotARCin, a benchmark that extends ARC by assessing understanding of a task’s underlying abstract rule across five dimensions: Definition, Classification, Constrained Generation, Editing, and Inversion\. PotARCin uses explicit generator and verifier programs, enabling dynamic generative sampling beyond fixed input\-output pairs\. Across four state\-of\-the\-art models evaluated on the ARC\-AGI\-1 training set, we observe a 30–50 percentage\-point performance gap between standard ARC evaluation and PotARCin\. We further investigate effects of generative sampling, difficulty of corruption types and questions of self\-consistency\. We also introduce P\-ARC, a hand\-crafted test set with generator and verifier programs, on which models achieve 0\-8% accuracy across all five dimensions, underscoring the difficulty of acquiring versatile abstract skills\.

## KuaiRecV2: Benchmarking Large\-Scale Continual Learning for Diversified and Multi\-task Recommendation

**Authors:** Chenxu Li; Shuchang Liu; Hantao Shu; Wei Yuan; Zhe Xu; Guoqing Hu; Yan Wang; Biao Yang; Xiang Li; Cheng Ling; Fan Yang; Yongqi Liu; Lantao Hu; Han Li; Kaiqiao Zhan; Kun Gai; An Zhang; Xiang Wang

**ID:** 139710 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=95TcP79S4L>) | [PDF](<https://openreview.net/pdf?id=95TcP79S4L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139710>)

Recommender systems, which retrieve items of interest to users based on their interaction histories, have recently witnessed several key technological advancements, benefiting from the semantic representation space and model\-data scaling\. Nevertheless, practitioners and researchers have frequently encountered critical inconsistencies between simple offline evaluations and complex online results, and this gap still exists in the era of large models\. In this work, we address several key factors that contribute to this inconsistency: 1\) the large\-scale continual learning challenge that assumes a practical demand to maintain long\-term model effectiveness under dynamic item pools and distributional shifts; 2\) the combinatorial diversity challenge that requires the generation strategy to solve the accuracy\-diversity trade\-off in both the finer token level and the holistic item level; and 3\) the multi\-task reward balancing challenge, which is particularly critical for modern generative models that can accurately model the sequence distribution but are less controllable for the multi\-task demands\.  To address these challenges and further pave the way for the development of more realistic recommendation solutions, we introduce KuaiRecV2, a deliberately constructed benchmark with industrial\-level datasets from Kuaishou\. Specifically, we provide a large\-scale interaction dataset with million\-scale multi\-modal item information and long\-term interaction records across 30 days, with a dynamic video candidate pool\. Additionally, we provide a rigorous benchmark that evaluates retrieval accuracy, diversity, and multi\-task performance in one rubric system, where an effective advancement occurs if and only if the new method improves all metrics\. The code and data are available at Supplementary Materials\.

## Few\-shot Task Learning via Compositional Concept Inference

**Authors:** Hanming Ye; Yiding Song; Yilun Du

**ID:** 150752 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=feUnReGdA8>) | [PDF](<https://openreview.net/pdf?id=feUnReGdA8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150752>)

Humans can learn new tasks from just a few demonstrations\. Prior methods like behavior cloning struggle to replicate this ability because they imitate demonstrations without learning the underlying concepts, such as goals, positional relations, and constraints\. To address this challenge, we propose COIN, an approach that represents behavior as a composition of reusable concepts\. A new task is learned by inferring its concepts from demonstrations then using a policy to implement them\. We show that this approach is effective at few\-shot learning across diverse domains\. On object rearrangement, goal\-oriented navigation, and human motion generation, COIN recombines previously seen concepts to solve novel tasks at inference time\. On the LIBERO robotics benchmark, COIN achieves a $96\.9$% average success rate on LIBERO\-90, surpassing pretrained policies such as $\\pi\_0$ with roughly $10\\times$ fewer parameters\. This performance gap widens further when fine\-tuning on unseen tasks with limited demonstrations, highlighting the advantage of concept inference over end\-to\-end policy adaptation in the few\-shot regime\.

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

## Virtual Task Prompting for Multi\-Task Scene Understanding

**Authors:** Zedong Wang; Yucheng Wang; Dan Xu

**ID:** 154323 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EXN4VTZJ8q>) | [PDF](<https://openreview.net/pdf?id=EXN4VTZJ8q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154323>)

Multi\-task scene understanding models typically require modifications to the vision encoder or complex decoders for cross\-task interaction, which limits their flexibility and compatibility with off\-the\-shelf vision foundation models \(VFMs\)\. This paper introduces Virtual Task Prompting \(VTP\), which frames multi\-task prompting as retrieving task\-adaptive subsets from a shared virtual state, where both the state and accessing process itself are optimizable in an end\-to\-end manner\. Concretely, VTP maintains a set of virtual tasks alongside the model, and at each layer, learnable routing matrices read an actual task composition as input for interaction with image tokens, then write the processed results back, forming explicit learning pathways that capture the intricacies among tasks before and after the computation of each encoder block\. Since VTP keeps the backbone clean, it integrates seamlessly with recent VFMs like DINOv3, advancing the state of the art on Pascal\-Context and NYUD\-v2\. Stress test on Taskonomy with 13 heterogeneous tasks further shows VTP's robustness in extreme settings\. Ablations and analysis confirm that VTP's gains stem mainly from its prompting design rather than merely increased capacity\.

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

**ID:** 155348 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6IGj3mpXfp>) | [PDF](<https://openreview.net/pdf?id=6IGj3mpXfp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155348>)

There is growing interest in applying Parameter\-Efficient Fine\-Tuning \(PEFT\) to Continual Learning, as it enables faster training, mitigates catastrophic forgetting, and facilitates better adaptation to new tasks\. Prior approaches have explored a range of strategies, including extending new LoRA branches for each incoming task, training under orthogonal loss objectives across all task\-specific LoRA modules, and employing gating mechanisms to integrate new and existing LoRA modules\. However, these methods incur memory costs that grow linearly with the number of tasks, limiting their scalability\. More recent approaches investigate training a single LoRA by leveraging asymmetries in its parameterization; however, they often suffer from insufficient representational alignment across the LoRA parameter space\. To address these limitations, we propose Stiefel Optimization and Aligned Rotation \(SOAR\), a two\-stage framework for continual LoRA learning\. First, we constrain the $\\mathbf\{A\}$ matrix to lie on the Stiefel manifold, thereby reducing coordinate misalignment to the space of orthogonal rotation matrices\. Second, we introduce an Orthogonal Procrustes alignment procedure for the $\\mathbf\{B\}$ matrix to estimate the optimal rotation, coupled with a per\-rank retention merging strategy that quantifies directional agreement between representations of new and previously learned tasks\. We conduct extensive experiments across multiple models and benchmarks, demonstrating that SOAR achieves strong continual learning performance without incurring additional memory overhead\.

## Not All Routing Drift Is Harmful: Trust\-Region Projection for Class\-Incremental Learning

**Authors:** Tae\-Hwan Kim; Sung\-Bae Cho

**ID:** 151931 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WklS219u5L>) | [PDF](<https://openreview.net/pdf?id=WklS219u5L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151931>)

Class\-incremental learning \(CIL\) with pre\-trained models has increasingly adopted Mixture\-of\-Experts \(MoE\) adapters, which freeze the backbone and selectively route inputs to sparse adapter subsets, achieving competitive performance through efficient parameter reuse\. However, as new tasks are learned sequentially, the router's output distribution gradually shifts away from previous states, undermining consistent adapter reuse and accelerating forgetting\. Through a controlled instance\-level analysis, we show that this effect is highly asymmetric, where instances with large routing drift account for most of the performance degradation, while those with small drift remain stable or can even benefit from it\. This finding suggests that only excessive drift requires correction, while small drift may be better preserved than suppressed, and motivates us to propose Trust\-Region Projected Routing \(TRPR\) that adapts the trust\-region principle from constrained optimization to routing stabilization\. It constrains each input's routing distribution within a KL\-bounded trust region around a class\-level anchor, correcting only excessive deviations while leaving small drift intact\. To complement class\-level anchoring with per\-sample adaptability, TRPR additionally introduces an Instance\-Adaptive \(IA\) path for fine\-grained per\-sample specialization, fused with the projected path via a learned gate\. Extensive experiments on four CIL benchmarks show that TRPR consistently outperforms nine representative PEFT\-based baselines, with accuracy gains of up to 3\.06% in average and final accuracy and forgetting reduced by up to 2\.48%\.

## Communication\-Efficient Personalized Adaptation via Federated\-Local Model Merging

**Authors:** Yinan Zou; Md Kamran Chowdhury Shisher; Christopher Brinton; Vishrant Tripathi

**ID:** 150059 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l5U24ix94Z>) | [PDF](<https://openreview.net/pdf?id=l5U24ix94Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150059>)

Parameter\-efficient fine\-tuning methods, such as LoRA, offer a practical way to adapt large vision and language models to client tasks\. However, this becomes particularly challenging under task\-level heterogeneity in federated deployments\. In this regime, personalization requires balancing general knowledge with personalized knowledge, yet existing approaches largely rely on heuristic mixing rules and lack theoretical justification\. Moreover, prior model merging approaches are also computation and communication intensive, making the process inefficient in federated settings\. In this work, we propose Potara, a principled framework for federated personalization that constructs a personalized model for each client by merging two complementary models: \(i\) a federated model capturing general knowledge, and \(ii\) a local model capturing personalized knowledge\. Through the construct of linear mode connectivity, we show that the expected task loss admits a variance trace upper bound, whose minimization yields closed\-form optimal mixing weights that guarantee a tighter bound for the merged model than for either the federated or local model alone\. Experiments on vision and language benchmarks show that Potara consistently improves personalization while reducing communication, leading to a strong performance\-communication trade\-off\.

## Curvature\-Guided Parameter Initialization for Multi\-Task Learning

**Authors:** Linxiao Cao; Zhipeng Zhou; Xutao Huang; Min Zhou; Menglin Yang

**ID:** 152159 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V4iWMobrjM>) | [PDF](<https://openreview.net/pdf?id=V4iWMobrjM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152159>)

Multi\-task learning \(MTL\) aims to jointly optimize multiple related tasks to obtain shared representations within a single model\. Recent research has focused on developing MTL algorithms to alter optimization dynamics through task re\-weighting or gradient manipulation\. However, in this paper, we first empirically identify that current MTL approaches are highly sensitive to the model initialization, complicating empirical evaluation and limiting practical reliability, which has been overlooked but appears to be critical\. To better understand this phenomenon, we provide a local theoretical analysis that motivates the connection between early\-stage MTL optimization behavior and curvature around initialization\. Motivated by this analysis, we propose a Curvature\-guided Parameter Initialization \(CPI\) approach tailored for MTL\. Specifically, CPI performs a short warm\-up phase to probe local curvature around the initial parameters and heuristically biases the initialization toward empirically favorable curvature profiles for subsequent multi\-task optimization\. The proposed approach is optimizer\-agnostic, requires no modification to existing MTL algorithms, and can be seamlessly integrated as a plug\-in prior to standard training\. Extensive experiments on standard MTL benchmarks show that CPI improves the aggregate multi\-task trade\-off while remaining compatible with mainstream MTL methods\.

## MuEdit: An efficient multi\-task editing method towards inter\-domain knowledge conflicts

**Authors:** Songshi Liang; Ting\-En Lin; Zixuan Huang; Yuchuan Wu; Yongbin Li; Zihe Wang; Rui Yan

**ID:** 151125 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=coarrCNoCU>) | [PDF](<https://openreview.net/pdf?id=coarrCNoCU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151125>)

Large language models \(LLMs\) require frequent knowledge updates across heterogeneous domains, but existing editing methods fail when applied sequentially to multi\-task settings\. We trace this collapse to inter\-domain null\-space misalignment: heterogeneous tasks induce distinct Jacobian geometries, causing their common null space to shrink dramatically and leaving insufficient admissible directions for conflict\-free updates\. We propose the Conflict Index to quantify this geometric interference, and introduce Mu\-Edit, which mitigates multi\-task conflicts via \(1\) conflict\-aware ordering to minimize cumulative interference, and \(2\) dynamic low\-rank approximation to expand the null space when ordering alone is insufficient\. Experiments across five functional domains and three backbones show that Mu\-Edit significantly outperforms existing baselines in multi\-task editing performance while preserving general capabilities, and remains effective under incremental task arrival\.

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

## MixRoute: Rethinking Single\-Distribution Training for Generalizable Neural Routing

**Authors:** Hang Yi; Ziwei Huang; Yining Ma; Zhiguang Cao

**ID:** 151615 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZE1vj1F5xY>) | [PDF](<https://openreview.net/pdf?id=ZE1vj1F5xY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151615>)

Neural Combinatorial Optimization \(NCO\) is a promising paradigm for solving routing problems, yet its generalization across diverse data distributions remains a critical bottleneck\. Existing methods typically tackle cross\-distribution generalization through complex multi\-distribution training or intricate meta\-learning schemes, implicitly presuming that single\-distribution training yields a weak zero\-shot baseline\. In this paper, we demonstrate that the potential of single\-distribution training has been substantially underestimated and can be unlocked by a simple architectural inductive bias: Mix Normalization\. To approach this, we first construct a comprehensive benchmark spanning three representative routing problems and 179 fine\-grained datasets, capturing diverse shifts in node coordinates, customer demands, and time windows\. Building on this benchmark, we propose MixRoute, a neural framework that adaptively combines normalization statistics at different granularities to mitigate varying distribution shifts\. Trained exclusively on uniform distributions, MixRoute generalizes effectively to a wide range of unseen distributions without any distribution\-specific adaptation\. Extensive experiments demonstrate that MixRoute consistently achieves state\-of\-the\-art zero\-shot generalization\. Our work revisits normalization as a parsimonious alternative for zero\-shot generalization against complex training\-adaptation schemes\.

## Mixture\-of\-Control: State\-Aware Fine\-Tuning for Transformer\-based Models

**Authors:** Duc Anh Nguyen; Tien N Luu; Tung Pham; Toan Tran

**ID:** 148178 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zi0UrRKjku>) | [PDF](<https://openreview.net/pdf?id=zi0UrRKjku>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148178>)

State\-based fine\-tuning has emerged as a compelling alternative to weight\-based adaptation for transformers, updating lightweight controls into states rather than model weights, offering substantial memory savings while retaining parameter efficiency\. However, most existing state\-based methods typically apply only per\-block control updates, which limits inter\-block information exchange and restricts representational adaptation\. Meanwhile, prior mechanisms that enable cross\-block communication often introduce considerable computational overhead, reducing their practicality for efficient fine\-tuning\. We introduce Mixture\-of\-Control \(MoC\), a lightweight fine\-tuning framework that adaptively integrates local and global control signals to enhance representation learning\. MoC treats block\-wise control states as experts in a sparse mixture\-of\-experts process, enabling efficient communication across transformer blocks\. Experiments on 33 datasets and 10 pretrained models across diverse transformer\-based benchmarks demonstrate that MoC consistently outperforms existing state\-based fine\-tuning methods while maintaining comparable efficiency in memory and compute\.

## MMOU: A Massive Multi\-Task Omni Understanding and Reasoning Benchmark for Long and Complex Real\-World Videos

**Authors:** Arushi Goel; Sreyan Ghosh; Vatsal Agarwal; Nishit Anand; Kaousheik Jayakumar; Lasha Koroshinadze; Yao Xu; Katie Lyons; James Case; Siddharth Gururani; Karan Sapra; Kevin Shih; Abhinav Shrivastava; Ramani Duraiswami; Dinesh Manocha; Andrew Tao; Bryan Catanzaro; Mohammad Shoeybi; Wei Ping

**ID:** 139150 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i7REhEhgfx>) | [PDF](<https://openreview.net/pdf?id=i7REhEhgfx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139150>)

Multimodal Large Language Models \(MLLMs\) have shown strong performance in visual and audio understanding when evaluated in isolation\. However, their ability to jointly reason over omni\-modal \(visual, audio, and textual\) signals in long and complex videos remains largely unexplored\. We introduce MMOU, a new benchmark designed to systematically evaluate multimodal understanding and reasoning under these challenging, real\-world conditions\. MMOU consists of 16,500 carefully curated questions paired with 9800 web\-collected videos of varying length, spanning diverse domains and exhibiting rich, tightly coupled audio\-visual content\. The benchmark covers 13 fundamental skill categories, all of which require integrating evidence across modalities and time\. All questions are manually annotated across multiple turns by professional annotators, ensuring high quality and reasoning fidelity\. We evaluate 20\+ state\-of\-the\-art open\-source and proprietary multimodal models on MMOU\. The results expose substantial performance gaps: the best closed\-source model achieves only 64\.2% accuracy, while the strongest open\-source model reaches just 46\.8%\. Our results highlight the challenges of long\-form omni\-modal understanding, revealing that current models frequently fail to apply even fundamental skills in long videos\. Through detailed analysis, we further identify systematic failure modes and provide insights into where and why current models break\. Project: https://mmou\-2026\.github\.io/

## ALIGN\-Rec: Continual Recommendation under Heterogeneous Unlearning Requests

**Authors:** Nitin Bisht; Sumit Bisht; Tong Zhang; Yu Yang; Huan Huo; Guandong Xu

**ID:** 153461 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L8dS5AKSwG>) | [PDF](<https://openreview.net/pdf?id=L8dS5AKSwG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153461>)

Recommender systems \(RS\) continually learn from new user\-item interactions while addressing heterogeneous deletion requests\. Existing continual recommendation methods focus on retention but do not erase targeted interactions, whereas recommendation unlearning methods are largely offline and do not ensure stability after future learning updates\. This creates a critical failure mode: deleted signals can be reactivated through shared user\-\-item representations, which we call collaborative signal regrowth\.  To address this, we introduce ALIGN\-Rec, a model\-agnostic online framework for continual recommendation under interleaved learn/unlearn requests\. Specifically, ALIGN\-Rec tracks low\-rank curvature surrogates to identify retain and forget subspaces, constructs compact retain/forget summaries, and performs geometry\-aware updates that preserve retained utility while suppressing deleted\-signal directions\. We instantiate ALIGN\-Rec with CARE, an efficient optimizer based on randomized curvature sketching and adaptive summary selection\. We provide theoretical guarantees for geometry tracking, summary approximation, and directional suppression in the forget subspace\. Extensive experiments across datasets, deletion granularities, and stream settings demonstrate effectiveness aligning with our theoretical guarantees\. The code and implementation are available at https://anonymous\.4open\.science/r/alignrec\-FFD8\.

## Revisiting Diffusion Fine\-Tuning for Unsupervised Domain Adaptation

**Authors:** Xuan Qi; Yi Wei; Daniele Berardini; Vito Paolo Pastore; Vittorio Murino

**ID:** 148934 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=u8WasX4zQq>) | [PDF](<https://openreview.net/pdf?id=u8WasX4zQq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148934>)

Diffusion\-based unsupervised domain adaptation \(UDA\) improves cross\-domain transfer by generating target\-specific synthetic data for downstream adaptation\. Existing methods are largely designed for single\-target adaptation: when a model trained on one labeled source domain must be adapted to multiple unlabeled target domains, they typically require separate diffusion fine\-tuning for each source–target pair, causing training, storage, and deployment costs to grow with the number of targets\. In this paper, we study multi\-target data generation for diffusion\-based UDA, where a single source\-guided diffusion fine\-tuning process is reused to generate target\-specific synthetic data for multiple target domains\. We propose MUSE \( M ulti\-target U DA\-oriented S ynthesis with E fficient diffusion fine\-tuning\), a decoupled adaptation framework that separates source\-supervised semantic adaptation from target\-specific style adaptation\. MUSE uses a shared semantic branch updated by labeled source data and target\-private style branches specialized to individual target domains, enabling target\-specific generation while avoiding repeated source\-guided fine\-tuning for each target\. Experiments on standard UDA benchmarks show that MUSE achieves a stronger accuracy–efficiency trade\-off than repeated per\-target diffusion adaptation, reducing diffusion fine\-tuning cost while improving average target\-domain accuracy\.

## MetaKE: Meta\-Learning for Knowledge Editing Toward a Better Accuracy\-Editability Trade\-off

**Authors:** Shuxin Liu; Di Gao; Ou Wu

**ID:** 149932 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m5WISgVTVU>) | [PDF](<https://openreview.net/pdf?id=m5WISgVTVU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149932>)

Existing locate\-then\-edit Knowledge Editing \(KE\) methods typically decompose editing into two stages: upstream target representation optimization and downstream constrained parameter optimization\. The optimization across the two stages is disconnected: upstream applies uniform regularization without observing downstream realization of the planned residual, hindering a refined accuracy–editability trade\-off\. Since this realization is request\-specific and depends on downstream constraints, uniform regularization can over\-shrink high\-association requests, causing insufficient editing, while it can under\-regularize low\-association requests, producing over\-large planned residuals that reduce downstream editability\. To bridge this disconnect, we propose $\\textbf\{MetaKE\}$ \($\\textbf\{Meta\}$\-learning for $\\textbf\{K\}$nowledge $\\textbf\{E\}$diting\), a new framework that unifies upstream and downstream stages into a bi\-level optimization problem\. The inner level optimizes parameter updates for the target representation, while the outer level optimizes representation using feedback from downstream constraints, achieving a better semantic accuracy\-editability trade\-off\.  To avoid costly multi\-layer backpropagation, we introduce a Structural Gradient Proxy to approximate and propagate this feedback\. Extensive experiments show that MetaKE outperforms strong baselines, offering a new perspective on KE\. Code at: https://anonymous\.4open\.science/r/MetaKE\-C160\.

## Transfer Learning of Linear Regression with Multiple Pretrained Models: Benefiting from More Pretrained Models via Overparameterization Debiasing

**Authors:** Daniel Boharon; Yehuda Dar

**ID:** 149647 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oVpl7LvQtc>) | [PDF](<https://openreview.net/pdf?id=oVpl7LvQtc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149647>)

We study transfer learning for a linear regression task using several least\-squares pretrained models that can be overparameterized\. We formulate the target learning task as optimization that minimizes squared errors on the target dataset with penalty on the distance of the learned model from the pretrained models\. We analytically formulate the test error of the learned target model and provide the corresponding empirical evaluations\. Our results elucidate when using more pretrained models can improve transfer learning\. Specifically, if the pretrained models are overparameterized, using sufficiently many of them is important for beneficial transfer learning\. However, the learning may be compromised by overparameterization bias of pretrained models, i\.e\., the minimum L2\-norm solution's restriction to a small subspace spanned by the training examples in the high\-dimensional parameter space\. We propose a simple debiasing via multiplicative correction factor that can reduce the overparameterization bias and leverage more pretrained models to learn a target predictor\.

## Gram\-Calibrated Anchoring for Class\-Incremental Learning

**Authors:** Qi Zhu; Ziang Gan; Libao Zhang

**ID:** 148635 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wGCFSJasYK>) | [PDF](<https://openreview.net/pdf?id=wGCFSJasYK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148635>)

We introduce Gram\-Calibrated Anchoring \(GCA\) for class\-incremental learning \(CIL\) with pre\-trained Vision Transformers\. GCA rests on the observation that, under continual low\-rank adaptation, \`\`\`anchor prototypes\`\`\`\-\-\-class means extracted once from the frozen pre\-trained backbone\-\-\-are effective substitutes for prototypes recomputed from the adapted model; a formal stability analysis bounds decision\-boundary shifts in terms of feature\-level prototype drift, while empirical LoRA perturbation measurements support the small\-drift regime\. This motivates fixing the classification head to anchor prototypes computed upon each task's arrival rather than recalibrating prototypes after training\. The fixed anchor geometry then enables \`\`\`Gram\-Compensated Inference\`\`\` \(GCI\), which applies the regularized inverse of the anchor Gram matrix to deconvolve inter\-class correlation that standard cosine classification ignores, and normalizes each coordinate by its estimation standard deviation for fair cross\-class comparison\. The resulting method trains a single continually evolved LoRA module with no exemplar storage or expanding adapter pools\. Experiments on ImageNet\-R, ImageNet\-A, CIFAR\-100, and CUB\-200 with multiple backbones show that GCA achieves competitive accuracy across four CIL benchmarks while significantly reducing training cost over recent methods\.

## Towards Principled Task Grouping for Multi\-Task Learning

**Authors:** Chenguang Wang; Xuanhao Pan; Tianshu Yu

**ID:** 156798 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/pdf?id=3DeSIpzuro>) | [PDF](<https://openreview.net/pdf?id=3DeSIpzuro>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156798>)

Multi\-task learning \(MTL\) aims to leverage shared information among tasks to improve learning efficiency and accuracy\. However, MTL often struggles to effectively manage positive and negative transfer between tasks, which can hinder performance improvements\. Task grouping addresses this challenge by organizing tasks into meaningful clusters, maximizing beneficial transfer while minimizing detrimental interactions\. 
This paper introduces a principled approach to task grouping in MTL, advancing beyond existing methods by addressing key theoretical and practical limitations\. Unlike prior studies, our method offers a theoretically grounded approach that does not depend on restrictive assumptions for constructing transfer gains\. We also present a flexible mathematical programming formulation that accommodates a wide range of resource constraints, thereby enhancing its versatility\.
Experimental results across diverse domains, including computer vision datasets, combinatorial optimization benchmarks, and time series tasks, demonstrate the superiority of our method over extensive baselines, thereby validating its effectiveness and general applicability in MTL without sacrificing efficiency\.
Code is available at \\url\{https://github\.com/LOGO\-CUHKSZ/Principled\-Task\-Grouping\}\.

## BabyTheorist: A Benchmark for Learning to Theorize the World from Observation Alone

**Authors:** Doojin Baek; Junyeob Baek; Mingyu Jo; Hosung Lee; Taegu Kang; Gyubin Lee; Sungjin Ahn

**ID:** 139168 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hApxBFwJyI>) | [PDF](<https://openreview.net/pdf?id=hApxBFwJyI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139168>)

How would we know whether a machine truly understands the world? We argue that one key capability is \\textit\{observational theory learning\}: acquiring reusable theories from pure observations and applying them to new situations\. Current visual reasoning benchmarks focus primarily on the latter, presenting each task as a few\-shot puzzle grouped by a common rule\. We introduce BabyTheorist, a benchmark for controlled training and evaluation of observational theory learning\. BabyTheorist generates continual streams of before\-after visual observations from hidden compositional programs; during training, learners see only the resulting transitions, with no program labels, task identities, or support sets\. To support theory learning and evaluation, BabyTheorist controls the program language, a curriculum over program complexity, recurring frequent subprograms, and a continual train\-test protocol with level skipping\. Seven representative baselines plateau well below ceiling, with the gap widening as the curriculum advances\-\-\-evidence that BabyTheorist isolates a capability current program\-learning approaches do not yet address\.

## A unified pairwise distribution matching framework for graph domain adaptation under structure shift

**Authors:** Huiyun Noh; Wooseok Ha

**ID:** 154823 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ah6YrDGyzd>) | [PDF](<https://openreview.net/pdf?id=Ah6YrDGyzd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154823>)

Graph domain adaptation \(GDA\) has emerged as an important problem in graph machine learning when the distribution of the source graph used for training differs from that of the target graph used for testing\. While much of the prior work on GDA has focused on aligning node representations across source and target domains, recent studies show that such approaches can be suboptimal in the presence of graph structure shift, where the underlying connection patterns between nodes change across domains\. In this work, we develop a unified pairwise distribution matching framework for mitigating conditional structure shift \(CSS\), a specific form of graph structure shift in which conditional edge distributions vary across domains\. The framework recovers existing GDA methods as instances of moment matching and motivates PLSA, a new likelihood\-based method that uses calibrated probabilistic predictors on connected target node pairs\. Theoretically, we establish finite\-sample guarantees for both the likelihood\-based and moment\-matching estimators under the contextual stochastic block model\. Our analysis uses Bernstein\-type concentration bounds for edge\-weighted U\-statistics, leading to error bounds that reflect both the effective number of observed edges and the conditioning of the corresponding likelihood or moment\-matching problem\. We complement our theoretical results with empirical studies that demonstrate the effectiveness of the proposed framework\.

## AdaWM: Few\-Shot Adaptation of World Models to Unseen Dynamical Regimes

**Authors:** Zian Guan; Guozheng Li; Zilun Zhang; Zecong Tang

**ID:** 151941 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Wg09sf4Nj0>) | [PDF](<https://openreview.net/pdf?id=Wg09sf4Nj0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151941>)

World models predict future states from observations and actions, enabling planning and decision\-making in complex environments\. Most existing approaches assume fixed environment dynamics and struggle to generalize to unseen regimes without retraining\. However, in many real\-world multi\-agent systems, environment dynamics vary across scenarios due to diverse styles and evolving agent behaviors\. Meanwhile, only a small number of demonstration transitions are available in new environments, making adaptation to such unseen dynamical regimes challenging\. In this work, we introduce AdaWM, a world model that achieves zero\-gradient few\-shot adaptation to unseen dynamical regimes through Feature\-wise Linear Modulation \(FiLM\)\. AdaWM is built on a JEPA\-style latent prediction framework with a permutation\-invariant context encoder whose output modulates the model through FiLM, enabling fast adaptation without modifying model parameters\. Across heterogeneous multi\-agent environments, AdaWM consistently reduces prediction error under distribution shift, outperforming fine\-tuning and MAML in both adaptation gain and efficiency\. Specifically, it achieves up to 15% reduction in prediction error with only K=5 demonstrations\. Moreover, we reveal that scaling model capacity alone does not guarantee effective adaptation: fine\-tuning a JEPA\-based model with 3\.9× more parameters degrades performance by 40%, highlighting the importance of explicit conditioning mechanisms over scale alone\. These results show that AdaWM provides an effective approach for adapting world models to novel dynamical regimes\.

## Distilling What Matters: Confidence\-Aware Selective Distillation for Large Language Models

**Authors:** Ayan Sengupta; Vaibhav Seth; Tanmoy Chakraborty

**ID:** 149862 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mhRs8gO4jl>) | [PDF](<https://openreview.net/pdf?id=mhRs8gO4jl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149862>)

Knowledge Distillation \(KD\) trains a smaller\-capacity student model to imitate a larger\-capacity teacher model by matching output distributions, implicitly assuming the teacher to be a reliable oracle\. In large language models \(LLMs\), this assumption often fails: teacher predictions can exhibit high entropy and hallucinations, causing standard KD to degrade well\-calibrated student priors\. We propose CaRE\-KD, a confidence\-gated distillation framework that replaces static objectives with uncertainty\-adaptive optimization\. CaRE\-KD has two components: a token\-level loss \(CaRE\-Divergence\) that adaptively switches between Forward and Reverse KL based on teacher\-\-student confidence, and a batch\-level epistemic rejection mechanism \(Revival\) that suppresses updates when the teacher is more uncertain than the student\. We provide a gradient\-level analysis showing how this dual\-granularity design induces a conditional calibration mechanism that prior static divergences cannot reproduce\. Empirically, across eight teacher\-\-student pairs and eleven benchmarks spanning instruction following, chat alignment, code generation, and mathematical reasoning, CaRE\-KD delivers consistent and significant gains over strong baselines \(Skewed\-KL, $\\alpha$\-\-$\\beta$ divergence\)\. Highlights include up to $\+3\.2$ average ROUGE\-L on instruction\-following tasks, $\+2\.1$ pass@1 on MBPP, $\+1\.7$ accuracy on GSM8k, and $\+1\.8$ accuracy on CollegeMath over the strongest baseline, with consistent gains in LLM\-as\-a\-judge factuality \(up to $\+2\.5$ per task over Skewed\-RKL\)\. Revival further acts as a principled, loss\-agnostic plug\-in that systematically strengthens existing distillation objectives by filtering epistemically unreliable teacher supervision\.

## Bridging CLIP with DINO: Cross\-Modal Information Maximization for Online Test\-Time Adaptation

**Authors:** Taehoon Kim; Wonjun Hwang; Hyunsouk Cho

**ID:** 152887 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PeeVlwPgi8>) | [PDF](<https://openreview.net/pdf?id=PeeVlwPgi8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152887>)

Vision\-language models such as CLIP enable zero\-shot classification from arbitrary class names, but under test\-time corruptions, their visual encoder projects distorted features onto incorrect textual anchors with high confidence—a phenomenon we term \\textbf\{modality bias\}\. Standard entropy minimization reinforces these overconfident errors, triggering a destructive confirmation\-bias loop that collapses the predicted label distribution\. We propose \\textbf\{CDIM\} \(Cross\-Modal Information Maximization\), an online test\-time adaptation method that breaks this loop at three levels\. At the \\textit\{representation level\}, a frozen self\-supervised DINO backbone is combined with CLIP via a cross\-covariance logit ensemble; by projecting text prototypes into DINO's geometric space—rather than the reverse—the classifier operates free of text bias\. At the \\textit\{optimization level\}, a gated information\-maximization objective \(GT\-IM\) pairs per\-sample sharpening with batch\-level diversity, while an adaptive gate excludes unreliable samples from the gradient\. At the \\textit\{prediction level\}, an online logit adjustment corrects the residual class\-distribution skew\. Ultimately, \\textbf\{CDIM\} validates its broad effectiveness by delivering robust, competitive performance across demanding setups, including continual TTA, mixed\-domain shifts, and diverse domain generalization benchmarks\.

## From Small to Large: Cross\-Scale Graph Domain Adaptation via Local\-Global Structural Alignment

**Authors:** Ruiyi Fang; Gezheng Xu; QIUHAO Zeng; Zihao Jing; Jiale Cai; Zhihao Li; Hao Zheng; Xuanting Xie; Shuo Wang; Bingheng Li; RUIZHI PU; Zhao Kang; Charles Ling; Boyu Wang

**ID:** 152509 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Sb0yr9VOw6>) | [PDF](<https://openreview.net/pdf?id=Sb0yr9VOw6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152509>)

Graph domain adaptation \(GDA\) aims to transfer knowledge from a labeled source graph to an unlabeled target graph\. Existing GDA methods typically assume that the source graph provides sufficiently complete information for reliable cross\-domain alignment\. However, this assumption is often unrealistic in practice, where only a small sampled source graph may be available due to privacy, annotation, storage, or data\-collection constraints\. In this paper, we study Cross\-Scale Graph Domain Adaptation \(CSGDA\), where adaptation is performed from a limited\-scale source graph to a larger target graph\. Our empirical results show that CSGDA exhibits larger local and global discrepancies than conventional GDA, as the source graph provides only limited local structures and limited coverage of the global structure\. To address this challenge, we propose a local\-global structural alignment framework that, at the local level, augments neighborhood structures to compensate for limited local structural information\. At the global level, it extracts global structural patterns and aligns source and target distributions\. An adaptive GCN\-MLP module then integrates the compensated local structures and extracted global patterns for domain alignment and target prediction\. Experiments across multiple graph adaptation benchmarks and sampling ratios demonstrate that our method consistently improves adaptation in the presence of severe source\-graph incompleteness\.

## Anchoring Adversarial Trajectories to Data Manifolds: A Bilevel Transfer Optimization Framework

**Authors:** Yaohua Liu; Yifan Guo; Jiaxin Gao

**ID:** 153364 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LvhItGvox7>) | [PDF](<https://openreview.net/pdf?id=LvhItGvox7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153364>)

A key bottleneck in adversarial transfer is a \*trajectory\-level geometric disconnect\*: ambient gradients often drift away from the intrinsic data manifold, causing surrogate\-specific overfitting\. To rectify this, we propose \*Manifold Anchored Bilevel Transfer \(MABT\)\*, a unified framework that anchors adversarial trajectories to the shared semantic subspace\. MABT introduces a relaxed manifold\-anchoring operator as a semantic rectifier to suppress off\-manifold noise\. With this constraint, we cast transfer attack generation as a distributional bilevel optimization problem that learns a geometry\-aligned initialization by minimizing expected transfer risk under a surrogate uncertainty distribution\. We further develop a Hessian\-free solver with linear\-time complexity to handle the resulting hierarchy\. Experiments demonstrate that MABT consistently boosts the transferability of \*\*10\*\* baselines across diverse attack scenarios and defense mechanisms \(e\.g\., \*\*63\.31\\%\*\* average ASR $\\uparrow$ across \*\*28\*\* attacker combinations\)\.

## Learning Causal Orderings for In\-Context Tabular Prediction

**Authors:** Sascha Xu; Sarah Mameche; Jilles Vreeken

**ID:** 153895 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Htb1iiN3Fx>) | [PDF](<https://openreview.net/pdf?id=Htb1iiN3Fx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153895>)

In\-context learning for tabular data sets strong predictive standards in observational settings; it however primarily relies on correlational structure, which becomes unreliable under distribution shift or intervention\. While established methods to discover causal structure exist, they are often focused on structure identifiability and decoupled from the predictive architectures that could benefit from them\.      To bridge these perspectives, we study how to simultaneously infer and enforce causal structure in the form of topological variable orderings into tabular prediction\. Unlike standard architectures, our model TabOrder uses causal order\-constrained attention, basing predictions only on features that precede a target under a learned causal order\. Similar to causal discovery methods, TabOrder learns the optimal variable ordering in an unsupervised manner through a likelihood\-based objective\. We justify this choice under standard functional model classes and also study how sample missingness, a common challenge in tabular data, interacts with causal direction identification\.  Empirically, we confirm that TabOrder recovers accurate variable orderings while addressing prediction and imputation tasks, as well as gives insight into real\-world biological data under intervention\.

## MapPFN: Learning Causal Perturbation Maps in Context

**Authors:** Marvin Sextro; Weronika Kłos; Gabriel Dernbach

**ID:** 149118 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=skdhOj5NkC>) | [PDF](<https://openreview.net/pdf?id=skdhOj5NkC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149118>)

Planning effective interventions in biological systems requires treatment\-effect models that adapt to unseen biological contexts by identifying their specific underlying mechanisms\. Yet single\-cell perturbation datasets span only a handful of biological contexts, and existing methods cannot leverage new interventional evidence at inference time to adapt beyond their training data\. To meta\-learn a perturbation effect estimator, we present MapPFN, a prior\-data fitted network \(PFN\) pre\-trained on a synthetic biological prior with causal interventions, decoupling pre\-training from limited wet\-lab data\. Unlike existing methods, MapPFN uses in\-context learning to map a sequence of experiments to a post\-perturbation distribution, enabling a single pre\-trained model to adapt to new datasets and arbitrary gene sets at inference time\. Zero\-shot, MapPFN identifies differentially expressed genes on par with models trained on real single\-cell data, and fine\-tuning further improves predictions across biological contexts\. Our code is available at https://anonymous\.4open\.science/r/MapPFN\.

## Hyperagents

**Authors:** Jenny Zhang; Bingchen Zhao; Wannan Yang; Jakob Foerster; Jeff Clune; Minqi Jiang; Sam Devlin; Tatiana Shavrina

**ID:** 153670 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jdp9fbYYbz>) | [PDF](<https://openreview.net/pdf?id=Jdp9fbYYbz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153670>)

Self\-improving AI systems aim to reduce reliance on human engineering by learning to improve their own learning and problem\-solving processes\. Existing approaches to self\-improvement rely on fixed, handcrafted meta\-level mechanisms, fundamentally limiting how fast such systems can improve\. The Darwin G\\"odel Machine \(DGM\) achieves open\-ended self\-improvement in coding, but this relies on domain\-specific alignment between task performance and self\-modification skill\. However, this alignment does not generally hold beyond coding domains\. We introduce \\textbf\{hyperagents\}, self\-referential agents that integrate a task agent \(which solves the target task\) and a meta agent \(which modifies itself and the task agent\) into a single editable program\. Crucially, the meta\-level modification procedure is itself editable, enabling metacognitive self\-modification, improving not only the task\-solving behavior, but also the mechanism that generates future improvements\. We instantiate this framework by extending DGM to create DGM\-Hyperagents \(DGM\-H\), eliminating the need for domain\-specific alignment to potentially support self\-accelerating progress on any computable task\. Across diverse domains, the DGM\-H improves performance over time and outperforms baselines without self\-improvement or open\-ended exploration, as well as prior self\-improving systems\. Furthermore, the DGM\-H improves the process by which it generates new agents \(e\.g\., persistent memory, performance tracking\), and these meta\-level improvements transfer across domains and accumulate across runs\. All experiments were conducted with safety precautions \(e\.g\., sandboxing, human oversight\)\. We discuss what safety entails in this setting and the broader implications of self\-improving systems\. DGM\-Hyperagents offer a glimpse of open\-ended AI systems that do not merely search for better solutions, but continually improve their search for how to improve\.

## Synthetic Pre\-Pre\-Training Improves Language Model Robustness to Noisy Pre\-Training Data

**Authors:** Xu Guo; Runyu Peng; Jian Tong; Yunhua Zhou; haijun Lv; Zhihui Lu; Qipeng Guo

**ID:** 154925 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9wSLJmqdd1>) | [PDF](<https://openreview.net/pdf?id=9wSLJmqdd1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154925>)

Large language models \(LLMs\) rely on web\-scale corpora for pre\-training\. The noise inherent in these datasets tends to obscure meaningful patterns and ultimately degrade model performance\. Data curation mitigates but cannot eliminate such noise, so pre\-training corpora remain noisy in practice\. We therefore study whether a lightweight pre\-pre\-training \(PPT\) stage based on synthetic data with learnable temporal structure helps resist noisy data during the pre\-training \(PT\) stage\. % Concretely, we draw PPT sequences from many randomly initialized RNNs and keep the PT recipe unchanged\. Across various corruption settings, our method consistently improves robustness to noise during PT, with larger relative gains at higher noise levels\. % The gains generalize across corruption types and naturally noisy web corpora\.  For a 1B\-parameter model, a synthetic PPT stage with only 65M tokens achieves the same final loss as the baseline while using up to 49% fewer natural\-text PT tokens across different noise levels\. Mechanistic analyses suggest PPT does not immediately suppress attention to noisy tokens\. Rather, PPT\-initialized models gradually downweight attention between corrupted tokens during noisy PT\. This indicates that synthetic PPT inhibits noise self\-modeling and shapes the subsequent optimization trajectory\.

## Learning to Continually Learn via Meta\-learning Agentic Memory Designs

**Authors:** Yiming Xiong; Shengran Hu; Jeff Clune

**ID:** 149494 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pi89FL2Ny8>) | [PDF](<https://openreview.net/pdf?id=pi89FL2Ny8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149494>)

The statelessness of foundation models bottlenecks agentic systems’ ability to continually learn, a core capability for long\-horizon reasoning and adaptation\. To address this limitation, agentic systems commonly incorporate memory modules to retain and reuse past experience, aiming for continual learning during test time\. However, most existing memory designs are human\-crafted and fixed, which limits their ability to adapt to the diversity and non\-stationarity of real\-world tasks\. In this paper, we introduce ALMA \(\*\*A\*\*utomated meta\-\*\*L\*\*earning of \*\*M\*\*emory designs for \*\*A\*\*gentic systems\), a framework that meta\-learns memory designs to replace hand\-engineered memory designs, therefore minimizing human effort and enabling agentic systems to be continual learners across diverse domains\. Our approach employs a Meta Agent that searches over memory designs expressed as executable code in an open\-ended manner, theoretically allowing the discovery of arbitrary memory designs, including database schemas as well as their retrieval and update mechanisms\. Extensive experiments across four sequential decision\-making domains demonstrate that the learned memory designs enable more effective and efficient learning from experience than state\-of\-the\-art human\-crafted memory designs on all benchmarks\. When developed and deployed safely, ALMA represents a step toward self\-improving AI systems that learn to be adaptive, continual learners\.

## DUST: Directional Uncertainty\-aware and Scale\-invariant Transfer Learning

**Authors:** Abhisek Chakraborty

**ID:** 151376 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b3WKmq3X8i>) | [PDF](<https://openreview.net/pdf?id=b3WKmq3X8i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151376>)

Transfer learning seeks to improve  efficiency in a target regression task by borrowing information from related external source dataset\(s\)\. Existing approaches achieve this by enforcing Euclidean proximity between the target and source regression parameters or, more recently, by encouraging  their directional alignment through angle\-based penalties\. While such angle\-based penalties mitigate the sensitivity of the transfer learning methods to the scale differences between source and target regression coefficients, they still rely on a point estimate of the source regression parameter and thus provide no direct mechanism to incorporate uncertainty in the source information\. To that end, we propose a probabilistic framework for transfer learning that operates at the level of a \\emph\{scale\-invariant directional distribution\} of the source regression parameter estimate, rather than its point estimate, to enable robust, scale\-invariant and uncertainty aware transfer under heterogeneous source information\. Specifically, we project the sampling distribution of the source regression estimate onto the unit sphere, thereby extracting its scale\-free directional distribution\. Transfer from source to target is then induced through a novel \\emph\{angular cone prior\} which shrinks the target regression parameter towards directions in which the source distribution assigns high probability, while allowing its magnitude to be learned exclusively from the target dataset\.  The proposed construction admits exact finite\-sample characterizations of posterior angular concentration and posterior computation remains tractable via careful low\-dimensional augmentation in the parameter space\. Simulation studies and application on a benchmark hypertension prediction task based on the National Health and Nutrition Examination Survey \(NHANES\) datasets demonstrate that the proposed method yields marked gains over existing approaches in settings with substantial uncertainty in the source regression estimate and source\-\-target scale mismatch\.

## Hyperbolic Displacement\-Constrained Adaptation for CLIP\-Based Class\-Incremental Learning

**Authors:** Quan Cheng; Zhenhao Wen; Lan Li; Da\-Wei Zhou; Lijun Zhang

**ID:** 154612 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CHvh1192IA>) | [PDF](<https://openreview.net/pdf?id=CHvh1192IA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154612>)

Class\-incremental learning aims to learn a stream of new classes while preserving knowledge from prior tasks, but suffers from catastrophic forgetting when the model is adapted across sessions\. Recently, approaches leveraging vision\-language pretrained models such as CLIP have gained increasing popularity in this setting, due to the strong transferable representations of foundation models\. Most CLIP\-based approaches resist forgetting by retaining data\-derived class memory such as replay samples, visual prototypes, or class distribution information\. In contrast, we ask whether stable adaptation can be achieved by constraining adapter\-induced feature displacement without retaining any data\-derived class memory\. We propose \\textbf\{H\}yperbolic \\textbf\{D\}isplacement\-\\textbf\{C\}onstrained \\textbf\{A\}daptation \(HDCA\), which treats forgetting as a consequence of uncontrolled residual displacement induced by sequential adapter updates\. HDCA keeps the direction of each adapter update but compresses its radial magnitude, so small updates remain almost unchanged while large or accumulated updates are suppressed\. At the per\-task level, a hyperbolic low\-rank adapter makes each task residual grow sublinearly\. At the multi\-task level, a cumulative compression stage further suppresses the summed residual across sessions\. On the classifier side, HDCA introduces a parameter\-free Poincar\\'e distance classifier that preserves cosine\-based ranking for fixed adapted features but reshapes the training gradient in high\-similarity regions\. We conduct experiments on five standard class\-incremental datasets, and the results comprehensively validate the effectiveness of HDCA without retaining any data\-derived class memory during training and inference\.

## DDGE: Disentangled Dirichlet Geodesic Evaluation for Robust Few\-Shot Learning

**Authors:** Yifan Mei; Kun Zhou; Zelei Wu; Jieyu Zhao; Xulun Ye

**ID:** 151036 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dSbq1BWqRS>) | [PDF](<https://openreview.net/pdf?id=dSbq1BWqRS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151036>)

Recent studies have highlighted the crucial role of distance metrics in noisy few\-shot learning\. However, existing approaches heavily rely on Euclidean or cosine measurements, failing to recognize the \`\`deceptive proximity'' where heterogeneous samples from different manifold peaks appear spuriously close in the flat ambient space\. In this paper, we present Disentangled Dirichlet Geodesic Evaluation \(DDGE\), a novel manifold\-aware framework that unifies orthogonal disentanglement and conformal integrals to efficiently evaluate complex topological spaces\. Specifically, we decouple features into orthogonal semantic subspaces and leverage a prior\-guided Dirichlet Process to expand discrete samples into a continuous, noise\-purified semantic terrain\. Upon this landscape, we measure the intrinsic geodesic distance via a density\-aware conformal line integral to capture the authentic class topology\. Extensive experiments demonstrate the state\-of\-the\-art performance of DDGE on multiple benchmark datasets\.

## META\-PAP: Meta\-learning for Prompt\-aware Preference Pairing in LLM Alignment

**Authors:** Pinlong Zhao; Shiyu Hu; Jing Zhang; Mengyang Li

**ID:** 148316 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yiQav1vmSS>) | [PDF](<https://openreview.net/pdf?id=yiQav1vmSS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148316>)

Direct Preference Optimization \(DPO\) has become a popular route for aligning large language models with human preferences, but existing pipelines treat all preference pairs uniformly and ignore prompt\-level heterogeneity\. We show that the optimal pair\-selection strategy varies systematically with prompt characteristics: prompts with concentrated reward distributions benefit from large reward\-gap pairs that provide unambiguous signal, while prompts with diverse responses benefit from moderate\-gap pairs because extreme positions are dominated by outliers\. No fixed strategy is optimal across this heterogeneity\. We propose META\-PAP \(Meta\-learning for Prompt\-aware Preference Pairing\), a framework that turns this observation into a learned algorithm\. META\-PAP generates multiple diverse pairs per prompt via a structured grid over the response reward distribution, extracts a compact prompt\-aware feature vector, and trains a lightweight meta\-network through bilevel optimization to predict per\-pair weights\. The inner loop is a weighted DPO update; the outer loop evaluates a virtual policy on a small clean meta\-set\. Across Llama\-3\-8B, Mistral\-7B\-v0\.3, and Llama\-2\-7B, META\-PAP consistently outperforms vanilla DPO, fixed\-position pairing, reward\-gap weighting, top\-$k$ filtering, curriculum, and statistical rejection sampling, with average gains of $\+3\.9$ points on AlpacaEval\~2\.0 and $\+3\.2$ points on Arena\-Hard, and approaches an oracle that exhaustively searches per prompt\. The learned weighting policy is interpretable: it favors large\-gap pairs on low\-diversity prompts and softly rejects extreme pairs on high\-diversity prompts\. We additionally find that the meta\-network requires only $M\\\!=\\\!150$ pairs to saturate, transfers across domains, tolerates label noise on the meta\-set, and remains effective with as few as $n\\\!=\\\!32$ on\-policy samples per prompt\.

## Safeguarding Mutual Correction in Source\-Free Domain Adaptation via Cut Statistics

**Authors:** Seongjun Lee; Changhee Lee

**ID:** 153109 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NsHE6SsVpK>) | [PDF](<https://openreview.net/pdf?id=NsHE6SsVpK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153109>)

Source\-Free Domain Adaptation \(SFDA\) aims to adapt a source\-pretrained model to an unlabeled target domain without access to the original source domain\. While early single\-model approaches rely on self\-refinement, they are inherently susceptible to confirmation bias and struggle to correct their own systematic errors\. To overcome this limitation, recent methods introduce Vision\-Language \(ViL\) models as external knowledge sources\. However, these approaches operate in a largely unidirectional paradigm, using the ViL model primarily to supervise the source\-pretrained model\. This overlooks a key structural property: the two models exhibit distinct failure modes \-\- where one produces an incorrect prediction, the other may produce a correct one, creating a natural opportunity for mutual correction within the target domain\. Yet, without ground\-truth labels, identifying which model is correct on any given sample is non\-trivial, and naively exchanging predictions risks propagating errors across models\. To address this challenge, we propose SafeCut, a novel approach that leverages the cut statistic as a label\-free measure of prediction reliability to gate cross\-model supervision\. Our approach dynamically controls both the direction and strength of supervision based on relative reliability, selectively amplifying true corrections while suppressing miscorrections on a per\-sample basis\. We further provide theoretical justification showing that this reliability\-gated mechanism guarantees a net\-positive correction signal\. Extensive experiments across diverse SFDA benchmarks demonstrate that SafeCut achieves state\-of\-the\-art performance, highlighting the effectiveness of safeguarding mutual correction in SFDA via cut statistics\. Codes are available https://anonymous\.4open\.science/r/SafeCut\_Source\_Free\_Domain\_Adaptation\-65D0/

## Cross\-Architecture Transferability is Width\-Confounded:Diagnosis and Subspace Correction

**Authors:** QIN LIU; Chen Zhong; Fengshan Zhao

**ID:** 151354 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bAYaurZBBI>) | [PDF](<https://openreview.net/pdf?id=bAYaurZBBI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151354>)

Selecting a pretrained encoder for a downstream task without retraining or labels is a standard preprocessing step in transfer learning\.  The dominant label\-free score, RankMe, was validated within architecture families and is widely applied across them\.  We show that its cross\-architecture use is unsound: rankings are systematically driven by the penultimate\-layer dimension rather than representational quality, and on heterogeneous model pools the score performs worse than uniform random selection\. We give a random\-matrix explanation establishing this failure as inherent to any rotation\-invariant score, and propose Subspace\-Corrected Ranking \(SCR\), a family of label\-free corrections that breaks rotation invariance via alignment with a fixed reference encoder\.  Across three architecturally distinct pools and 23 aggregated task units, the proposed SSR\-dagger reduces mean regret from \+0\.165 \(RankMe\) to \+0\.071 \(95% CI \[\+0\.045, \+0\.099\], p &lt; 1e\-4\)\.  Paired with a within\-family score in a two\-stage pipeline, it matches this quality at one\-third of the forward\-pass cost\.  Five labelled architecture evaluations suffice to match the best fully label\-free strategy; K=35 labelled evaluations reduce regret to \+0\.018 \-\-\- a 5\.7x improvement at the same forward\-pass cost\.

## BDC\-Merge: Cross\-Architecture Model Merging via Dependency Alignment

**Authors:** Yukai Wang; Wenhao Zhao; Xingyu Zhu; Junfeng Fang; Ruipeng Wang; Houcheng Jiang; Xiang Wang

**ID:** 151593 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZOfiCmcwhT>) | [PDF](<https://openreview.net/pdf?id=ZOfiCmcwhT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151593>)

Large language models have achieved remarkable capabilities by scaling model capacity and training data, yet many practical deployments still rely on smaller models with limited resources whose capabilities lag behind their larger counterparts trained with richer resources\. This gap calls for efficient knowledge transfer from source models with richer resources to compact target models\. While model merging provides an effective mechanism, most existing methods are based on the assumption that the source and target models are architecturally compatible, making them inapplicable to heterogeneous source and target pairs\. Although a recent method based on optimal transport extends model merging to settings with different architectures, it remains limited by linear correspondence modeling, iterative transport optimization, and reliance on supervised adaptation after fusion for further performance gains\. To address these limitations, we propose BDC\-Merge, a framework for model merging across different architectures based on Brownian Distance Correlation \(BDCorr\)\. BDC\-Merge uses a small calibration set to estimate dependencies between heterogeneous activations at the feature level and the layer level, and directly lifts these dependencies from activation space into fusion operators in weight space, enabling effective parameter fusion across different architectures without any gradient based optimization or training after fusion\. Extensive experiments across four low resource language and two specialized knowledge benchmarks show that BDC\-Merge consistently outperforms the state of the art baseline for model merging across different architectures and largely preserves the target model’s general capabilities\.

## TOPPO: Rethinking PPO for Multi\-Task Reinforcement Learning with Critic Balancing

**Authors:** Yuanpeng Li; Rui Miao; Gefei Lin; Annie Qu

**ID:** 153864 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IB0sNv6vy7>) | [PDF](<https://openreview.net/pdf?id=IB0sNv6vy7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153864>)

Soft Actor\-Critic \(SAC\) and its variants dominate Multi\-Task Reinforcement Learning \(MTRL\) due to their off\-policy sample efficiency, while on\-policy methods such as Proximal Policy Optimization \(PPO\) remain underexplored\.  We diagnose that PPO in MTRL suffers from a previously overlooked issue: critic\-side gradient ill\-conditioning, which may cause tail tasks to stall while easy tasks dominate the value function's updates\. To address this, we propose TOPPO \(Tail\-Optimized PPO\), a reformulation of PPO via Critic Balancing\-\-\-a set of modules that improve gradient conditioning and balance learning dynamics across tasks\. Unlike prior approaches that rely on modular architectures or large models, TOPPO targets the optimization bottleneck within PPO itself\. Empirically, TOPPO achieves stronger mean and tail\-task performance than published SAC\-family and ARS\-family baselines while using substantially fewer parameters and environment steps on Meta\-World\+ benchmark\. Notably, TOPPO matches or surpasses strong SAC baselines early in training and maintains superior performance at full budget\.  Ablations confirm the effectiveness of each module in TOPPO and provide insights into their interactions\. Our results demonstrate that, with proper optimization, on\-policy methods can rival or exceed off\-policy approaches in MTRL, challenging the prevailing reliance on SAC and highlighting critic\-side gradient conditioning as the central bottleneck\.

## Seeking the Unfamiliar but Memorable: Conceptual Creativity as Meta\-Learning

**Authors:** Mengye Ren

**ID:** 148412 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y1x5OpDg2D>) | [PDF](<https://openreview.net/pdf?id=y1x5OpDg2D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148412>)

What does it mean to create a new concept, rather than retrieve a familiar one? Diffusion models sampled many times at the same prompt vary only within the narrow stylistic envelope set by a fixed prompt embedding\. We propose an operational definition of creativity as the generation of concepts that are initially unfamiliar yet rapidly learnable to an adaptive observer, and formalize it as a bilevel optimization between a Creator that generates and an Appraiser that adapts: the Appraiser's improvement under a brief inner\-loop adaptation provides the reward signal that the Creator maximizes\. We call this framework CAMEL \(Creator\-Appraiser Meta\-Learning\), and instantiate it on MNIST with an autoencoder Appraiser and on natural images with a CLIP Appraiser based on a low\-rank adapter over the text projection\. CAMEL produces outputs that lie outside the basin reachable by vanilla diffusion sampling at any sample count, while remaining recognizable as the prompt's class to an off\-the\-shelf observer\.

## Why Invariance is Not Enough for Biomedical Domain Generalization and How to Fix It

**Authors:** Sebastian Diaz; Polina Golland; Elfar Adalsteinsson; Neel Dey

**ID:** 150548 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hJjwD3TJXH>) | [PDF](<https://openreview.net/pdf?id=hJjwD3TJXH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150548>)

We present MaskGen, a theoretically grounded and deliberately simple approach for domain generalization in 3D biomedical image segmentation\. Modern segmentation models degrade sharply under shifts in modality, disease severity, clinical sites, and more, limiting their reliable adoption\. Existing generalization methods address this using extreme augmentations, hand\-engineered domain statistics mixing, or architectural redesigns that add significant implementation overhead while yielding inconsistent performance across biomedical settings\. MaskGen instead presents a principled learning strategy with marginal overhead that utilizes both source\-domain image intensities and domain\-stable foundation model representations to train robust segmentation models\. As a result, MaskGen achieves strong gains in both fully supervised and few\-shot segmentation across broad clinical shifts in biomedical studies\. Unlike prior approaches, MaskGen is architecture\- and loss\-agnostic, compatible with standard augmentation pipelines, easy to implement, and tackles arbitrary anatomical regions\.

## SpecBridge: Learning Natural\-Language Formalization Plans for the Formal Specification Synthesis Task

**Authors:** Wenjie Zhang; Yun Lin; Zining He; Meiqi Wu; Jin Song Dong

**ID:** 148847 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ui1AYUwFTN>) | [PDF](<https://openreview.net/pdf?id=ui1AYUwFTN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148847>)

Software requirements are usually written in natural language, which is essential for human communication but insufficient as a target for machine\-checked correctness\. While natural\-language descriptions can state intended functionality, verification requires formal specifications with explicit types, relations, quantifiers, guards, witnesses, and edge cases\. To bridge this divide, we study the Formal Specification Synthesis task: given a natural\-language programming requirement and fixed formal signatures, synthesize a proof\-assistant specification for the intended input\-output relation\. This task is difficult for two primary reasons\. First, a large representation gap separates informal natural language from the rigorous structures needed by a proof assistant\. Second, generated formal specifications are notoriously hard to evaluate, as proving full equivalence between specifications is often too complex to serve as routine feedback\. To address these intertwined challenges, we propose SpecBridge, a reconstruction\-guided formalization framework\. At its core, SpecBridge introduces a Natural\-Language Formalization Plan \(NLFP\), a semi\-structured, readable intermediate representation that captures key formalization choices before decoding to a target specification language\. Through reconstruction\-guided pattern mining, SpecBridge learns these NLFPs by reconstructing formal specifications to discover reusable patterns, ultimately transferring them to improve natural\-language task generation\. Furthermore, to tackle the evaluation bottleneck, we introduce a multi\-layer evaluation protocol for formal\-specification correctness\. This protocol utilizes LLM Specification Alignment as an LLM\-based judge, alongside Test\-Driven Computable Validation and Test\-Driven Proof Validation, which approximate "running" testcases on formal specifications by translating propositions into executable pre/post checks and proving testcase obligations in Lean\. In our experiments, SpecBridge outperforms the few\-shot \+ CoT baseline by 6\.1% on LLM Specification Alignment, 15\.2% on Computable Validation Pass Rate, and 28\.4% on Proof Validation Pass Rate\. These results demonstrate that the NLFP bridge and our multi\-layer evaluation protocol make formal specification synthesis significantly more reliable\.

## Distributionally Robust Multi\-Task Reinforcement Learning via Adaptive Task Sampling

**Authors:** Nicholas Corrado; Wenyuan Huang; Josiah Hanna

**ID:** 152819 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QAK203jC3u>) | [PDF](<https://openreview.net/pdf?id=QAK203jC3u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152819>)

Multi\-task reinforcement learning \(MTRL\) aims to train a single agent to efficiently optimize performance across multiple tasks simultaneously\. However, jointly optimizing all tasks often yields imbalanced learning: agents quickly solve easy tasks but learn slowly on harder ones\. While prior work primarily attributes this imbalance to conflicting task gradients and proposes gradient manipulation or specialized architectures to address it, we instead focus on a distinct and underexplored challenge: \\emph\{imbalanced data allocation\}\. Standard MTRL allocates an equal number of environment interactions to each task, which over\-allocates data to easy tasks that require relatively few interactions to solve and under\-allocates data to hard tasks that require substantially more experience to solve\. To address this challenge, we introduce Distributionally Robust Adaptive Task Sampling \(DRATS\), an algorithm that adaptively prioritizes sampling tasks furthest from being solved\. We derive DRATS by formalizing MTRL as a feasibility problem from which we derive a minimax objective for minimizing the worst\-case return gap, the difference between a desired target return and the agent's return on a task\.  In benchmarks like MetaWorld\-MT10 and MT50, DRATS improves data efficiency and increases worst\-task performance compared to existing task sampling algorithms\.

## TILT: Target\-induced loss tilting under covariate shift

**Authors:** Kakei Yamamoto; Martin Wainwright

**ID:** 155899 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=20SLcD77Z4>) | [PDF](<https://openreview.net/pdf?id=20SLcD77Z4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155899>)

We introduce and analyze Target\-Induced Loss Tilting \(TILT\) for unsupervised domain adaptation under covariate shift\.  It is based on a novel objective function that decomposes the source predictor as $f\+b$, fits $f\+b$ on labeled source data while simultaneously penalizing the auxiliary component $b$ on unlabeled target inputs\. The resulting fit $f$ is deployed as the final target predictor\. At the population level, we show that this target\-side penalty implicitly induces relative importance weighting at the population level, but in terms of an estimand $b^\*\_f$ that is \*self\-localized\* to the current error, and remains \*uniformly bounded\* for any source\-target pair \(even those with disjoint supports\)\.  We prove a general finite\-sample oracle inequality on the excess risk, and use it to give an end\-to\-end guarantee for training with sparse ReLU networks\. Experiments on controlled regression problems and shifted CIFAR\-100 distillation show that \\tilt improves target\-domain performance over source\-only training, exact importance weighting, and relative density\-ratio baselines, with a stable dependence on the regularization parameter\.

## Crowded in B\-Space: Calibrating Shared Directions for LoRA Merging

**Authors:** Yixuan Tang; Yi Yang

**ID:** 152853 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PtEkosDXWk>) | [PDF](<https://openreview.net/pdf?id=PtEkosDXWk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152853>)

Merging separately trained LoRA adapters is a practical alternative to joint multi\-task training, but it often hurts performance\. Existing methods usually treat the LoRA update $\\Delta W = BA$ as a single object and do not distinguish the two LoRA matrices\. We show that the main source of LoRA merge interference comes from the output\-side matrix $B$\. Across tasks, $B$ repeatedly uses a small set of shared directions, while $A$ remains much more task\-specific\. As a result, the merged adapter overemphasizes these shared directions, and task\-specific information is lost\. We propose Pico \(Pre\-merge interference calibration in output\-space\), a data\-free method that calibrates $B$ before merge by downscaling over\-shared directions and then rescaling the merged update\. Pico plugs directly into existing merging methods such as Task Arithmetic, TIES, and TSV\-M\. Across eight different benchmarks from math, coding, finance, and medical domains, Pico improves average accuracy by 3\.4\-8\.3 points over the corresponding base method and achieves the best overall average performance\. Pico also enables merged adapters to outperform the LoRA trained with all task data\. These results show that LoRA merging works better when the two LoRA matrices are treated separately\.

## You Don’t Need Aligned Representations: Knowledge Distillation via Random Prototype Spaces

**Authors:** Hamza Etcibasi; Ramazan Gokberk Cinbis

**ID:** 153784 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IgI7pI0qVB>) | [PDF](<https://openreview.net/pdf?id=IgI7pI0qVB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153784>)

A widely held assumption in knowledge distillation is that teacher and student representations must occupy a compatible or explicitly aligned feature space\. We propose RPKD \(Random Prototype Knowledge Distillation\), which discards this assumption by projecting both networks into a shared set of randomly initialized, frozen prototype vectors, requiring no architecture\-specific adapters, no class\-specific alignment, and minimal architectural assumptions\. Two branches handle the transfer: a logit branch aligning global prototype similarity distributions and a feature branch matching spatially\-resolved prototype activation maps\. Both operate within the same fixed prototype space, which can be interpreted as a random feature embedding that approximately preserves inter\-sample similarity structure, keeping RPKD agnostic to the internal dimensions and inductive biases of either network\. In low\-category settings, decoupling the prototype vocabulary from the task label space yields richer supervision than the label space alone, an advantage absent from logit\-based methods, whose supervisory signal collapses as class count shrinks\. This advantage is especially relevant in real\-world scenarios where the label space is typically constrained\. Extensive experiments demonstrate the effectiveness of RPKD, achieving a maximum gain of $\\mathbf\{\+8\.26\\%\}$ over OFA on CIFAR\-100, $\\mathbf\{\+12\.46\\%\}$ on ImageNet\-100, and $\\mathbf\{\+1\.34\\%\}$ on ImageNet\-1K\. Source code will be released upon acceptance\. Source code will be released upon acceptance\.

## Meta\-Learning Preferences for Multilingual LLM Alignment

**Authors:** Jiaying Lin; Seongho Son; Nam P Tran; Long Tran\-Thanh; Ilija Bogunovic; Debmalya Mandal

**ID:** 155916 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1pi7vaFHU1>) | [PDF](<https://openreview.net/pdf?id=1pi7vaFHU1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155916>)

Unequal availability of human preference data across languages poses a significant challenge for aligning large language models in multilingual settings\. To address the lack of sufficient data in low\-resource language alignment, we propose a meta\-learning framework for Reinforcement Learning from Human Feedback and Direct Preference Optimization\. By leveraging preference data from other languages, our framework learns a transferable initialization that enables effective adaptation to a target language with minimal data\. We provide theoretical guarantees for both the meta\-reward modeling and meta\-policy optimization settings, and empirically demonstrate the effectiveness of our approach on multilingual benchmarks\. In an extremely low\-resource setting with only 100 target\-language preference samples, our approach achieves  up to $28\\%$ win\-rate improvements over baseline methods, and consistently outperforms baselines across multiple target languages and model scales\. Our approaches retain these advantages across different combinations of meta\-training languages and varying linguistic distances from the target languages\.

## Semantic Priors Meet Statistical Evidence: Robust Forests for Few\-Shot Tabular Learning

**Authors:** Xuanliang Zhang; Dingzirui Wang; Keyan Xu; Qingfu Zhu; Wanxiang Che

**ID:** 150782 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fRkZEDhU3I>) | [PDF](<https://openreview.net/pdf?id=fRkZEDhU3I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150782>)

Few\-shot tabular learning is challenging because conventional tree\-based methods suffer from unstable split selection and leaf estimation when labeled examples are scarce\.  Although feature engineering based on Large Language Models \(LLMs\) provides useful semantic priors, it can be brittle when table semantics are incomplete or numerical evidence is unstable\.  This raises two key challenges: achieving semantic\-numerical robustness and calibrating multiple weak signals under sparse supervision\.  Therefore, we present LEAF, a train\-time LLM\-guided forest that treats LLM\-derived features and split preferences as calibratable priors rather than direct supervision\.  During tree induction, LEAF aligns semantic guidance with task\-specific statistical evidence, including teacher\-informed predictive signals and data\-dependent partition statistics, through a unified split\-scoring rule\.  At prediction time, it further stabilizes local estimates by blending sparse empirical observations with teacher\-informed support at each leaf\.  Experiments on few\-shot tabular classification and regression datasets show that LEAF consistently outperforms strong conventional and LLM\-based baselines, improving classification performance by 1\.4 points and reducing regression error by 0\.149 over the strongest previous method\.  Robustness analyses further demonstrate that LEAF is more stable than prior LLM\-based feature engineering methods under missing table semantics and numerical perturbations induced by distributional variation across tabular feature spaces and schema descriptions\.

## STABLE: A Continual Learning Optimizer with Adaptive Drift Control

**Authors:** Xiaoyan Li; Lanpei Li; Massimo Coppola; Vincenzo Lomonaco; Antonio Carta

**ID:** 154677 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Br2ANAj8hi>) | [PDF](<https://openreview.net/pdf?id=Br2ANAj8hi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154677>)

Continual learning suffers from catastrophic forgetting, leading to the loss of past knowledge and unstable adaptation across task streams\. Existing approaches typically address this issue through replay buffers, architectural changes, or additional regularization terms\. We argue that forgetting is a consequence of unstable learning dynamics, which may benefit from an optimizer\-level solution\. The main challenge is that learning dynamics are time\-dependent, as demonstrated by empirical phenomena such as the stability gap\. First, we formally prove that, for distance\-based classifiers, bounded parameter drift guarantees bounded margin erosion under a local score\-stability condition\. Based on this insight, we propose STABLE, a primal–dual optimizer with adaptive drift control\. STABLE enforces a drift budget by increasing the dual variable when the budget is violated and decreasing it otherwise\. This results in high stability without penalizing plasticity\. Experiments on long\-horizon unimodal streams and CLIP\-based multimodal streams show that vanilla PEFT baselines trained with STABLE match or outperform specialized continual learning methods\. In the multimodal setting, STABLE further preserves zero\-shot transfer, matching or exceeding dedicated multimodal continual learning methods\.

## Understanding the Curse of Unrolling

**Authors:** Sheheryar Mehmood; Florian Knoll; Peter Ochs

**ID:** 149289 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rOtZp9OVts>) | [PDF](<https://openreview.net/pdf?id=rOtZp9OVts>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149289>)

Algorithm unrolling is ubiquitous in machine learning, particularly in hyperparameter optimization and meta\-learning, where Jacobians of solution mappings are computed by differentiating through iterative algorithms\. Although unrolling is known to yield asymptotically correct Jacobians under suitable conditions, recent work has shown that the derivative iterates may initially diverge from the true Jacobian, a phenomenon known as the curse of unrolling\. In this work, we provide a non\-asymptotic analysis that explains the origin of this behavior and identifies the algorithmic factors that govern it\. We show that truncating early iterations of the derivative computation mitigates the curse while simultaneously reducing memory requirements\. Finally, we validate our theoretical findings both on synthetic problems and in a meta\-learning setting for few\-shot classification, where we study the behavior of gradients obtained via unrolling and implicit differentiation\.

## TabK: Amortized Bayesian Estimation of the Number of Clusters in Tabular Data

**Authors:** Mohammadreza Bakhtyari; Bogdan Mazoure; Renato C de Amorim; Guillaume Rabusseau; Vladimir Makarenkov

**ID:** 148754 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vH1EUKvrHt>) | [PDF](<https://openreview.net/pdf?id=vH1EUKvrHt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148754>)

Estimating the number of clusters, $k$, is a fundamental prerequisite for most clustering algorithms\. Traditionally, this estimation has relied on computationally expensive grid searches over internal cluster validity indices \(CVIs\) or adaptive clustering algorithms, both constrained by specific statistical assumptions\. We introduce TabK, a zero\-shot, permutation\-invariant transformer architecture that frames the estimation of $k$ as an amortized Bayesian inference problem for tabular data\. TabK leverages a novel Quantile Feature Encoder \(QFE\) to extract position\-free, content\-derived representations from empirical marginal distributions\. By learning a generalized structural bias over a diverse synthetic prior, TabK estimates the number of clusters in a single forward pass\. Evaluated across 50 diverse real\-world benchmarks, TabK outperforms its closest competitor, TabClustPFN, reducing the Mean Absolute Error \(MAE\) of the number of clusters estimation by 1\.2 \(from 2\.24 to 1\.04\)\. Furthermore, TabK empirically achieves the best position on the Pareto frontier among 12 evaluated methods, providing predictions of $k$ in an average time of less than one second, which is $2\\times$ faster than TabClustPFN and $30\\times$ faster than traditional CVIs such as Silhouette and Calinski\-Harabasz\. \*Code and data are available at:\* https://anonymous\.4open\.science/r/TabK\.

## Lost or Hidden? A Concept\-Level Forgetting in Supervised Continual Learning

**Authors:** Katarzyna Filus; Kamil Faber; Roberto Corizzo; Christopher Kanan

**ID:** 151099 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d06ZssFH8b>) | [PDF](<https://openreview.net/pdf?id=d06ZssFH8b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151099>)

Continual learning studies how models can adapt to new tasks while retaining previously acquired knowledge\. Although a broad spectrum of methods has been proposed to mitigate catastrophic forgetting, the field remains predominantly performance\-driven, with limited insight into what forgetting actually corresponds to within the vision model's representation space\. Prior work has primarily analyzed forgetting through task\-level performance or coarse measures of representational drift, without disentangling output\-level accessibility from changes in finer\-grained internal structure\.To this end, we propose a diagnostic framework that leverages Sparse Autoencoders \(SAEs\) to define a task\-anchored latent feature space, enabling analysis of how task\-specific information evolves at a finer granularity, where individual SAE latents are treated as concept proxies for recurring and relatively disentangled visual patterns in the model’s internal computations\. Within this framework, we decompose forgetting into apparent concept deletion, recoverability, and decodability\. We show that a large portion of seemingly lost concept\-level information can often be recovered under linearity assumption, with concept decodability degrading as more tasks are introduced\. Overall, our findings suggest that a significant part of concept\-level forgetting can be attributed to changes in the representational accessibility rather than complete information erasure\.

## JEPAWG: Interpretable Hypernetworks for Weight\-Space Physics

**Authors:** Tobias Göbel; Julian R Ebelt; Zier Mensch; Mathis Gerdes; Miranda Cheng

**ID:** 150014 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lPOkD4q1Gx>) | [PDF](<https://openreview.net/pdf?id=lPOkD4q1Gx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150014>)

Lattice field theory is the workhorse of non\-perturbative physics, used to simulate phenomena from the strong nuclear force to critical phenomena in materials\. Its Boltzmann distributions are parametrized analytically by \\emph\{coupling constants\}, but these bare parameters are weak predictors of physical observables\-\-\-extracting physics typically requires extensive simulation\. While machine learning tools such as normalizing flows have emerged as effective samplers at fixed couplings, it remains difficult to interpret what the underlying neural networks have learned\. This raises a natural question: can the flow \\emph\{parameters themselves\} be generated for new theories, and can their physics be read off directly from the network weights? We propose lattice field theory as a testbed for neural network interpretability: because the target physics is qualitatively well\-understood and smoothly varying, it provides ideal synthetic data against which network behavior can be checked against known ground truth\. To this end we introduce \\textbf\{JEPAWG\}, a Joint\-Embedding Predictive Architecture\-\-based Weight Generator that maps couplings directly to flow weights via a learned latent space\. On a scalar theory at lattice sizes $6^2$ and $8^2$, the JEPAWG latent space recovers the correct intrinsic dimension of the underlying manifold, identifies the region of phase transition, encodes a finite\-size shift aligned with the 2D Ising exponent $\\nu \\approx 1$, allowing us to uncover physical structure by studying the network weights alone\. As a generator, JEPAWG also interpolates and extrapolates to unseen couplings effectively and remains robust to weight\-space incongruences deliberately introduced by combining multi\-seed training data, outperforming PCA, AE, and VAE baselines\.

## RESCAST\-100K: A Comprehensive Dataset for Cross\-Domain Residential Load and Indoor Temperature Forecasting

**Authors:** Jainam Dhruva; Yousaf Raza; A\.B\. Siddique; Simone Silvestri

**ID:** 139420 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Rh2FJGGNVR>) | [PDF](<https://openreview.net/pdf?id=Rh2FJGGNVR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139420>)

Accurate short\-term forecasting of residential energy load and indoor temperature is essential for home energy management systems, grid\-level demand response participation, and community\-level energy efficiency programs\. Domain adaptation methods and transfer learning have shown promise in improving forecasting accuracy under data heterogeneity and scarcity scenarios commonly observed at the residential level\. However, progress remains limited by the absence of comprehensive residential datasets: existing ones are narrow in target coverage and lack structured support for cross\-domain evaluation\. To address this, we introduce RESCAST\-100K, a large\-scale residential forecasting benchmark for studying cross\-domain generalization\. It exposes a configuration\-driven interface that instantiates source and target domains along interpretable axes, such as geography, climate zone, wall construction, and heating equipment, supporting systematic evaluation of transfer learning, domain adaptation, and zero\-shot generalization under controlled domain shifts\. The benchmark covers approximately 100,000 EnergyPlus\-simulated U\.S\. homes derived from ResStock, providing 15\-minute time series of three coupled targets per home, namely total load, HVAC \(heating, ventilation, and air conditioning\) load, and indoor temperature, together with weather channels, HVAC setpoints, and over 40 static building covariates\. Finally, it integrates five real\-world residential datasets under a unified schema, supporting sim\-to\-real evaluation on the same tasks\. We benchmark models from recurrent, attention, and MLP\-mixer architectures for zero\-shot performance across different domains, under missing input data conditions, for each task\. Cross\-attention and MLP\-mixer based models consistently outperform recurrent and classical transformer\-based baselines under domain shift\. RESCAST\-100K is intended to support the machine learning and building analytics communities in advancing cross\-domain residential forecasting at the home, community, and grid levels\.

## Umbilic Multinomial Logistic Regression

**Authors:** Zihan Su; Nicu Sebe; Bernhard Schölkopf; Ziheng Chen

**ID:** 150927 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eJ5eydjNyT>) | [PDF](<https://openreview.net/pdf?id=eJ5eydjNyT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150927>)

Multinomial logistic regression \(MLR\) is the default last\-layer classifier in fully supervised recognition, while prototype classifiers are central to few\-shot recognition\. Although they are usually presented as different principles, we show that both can be organized by a geometric notion of class boundaries\. A Euclidean MLR logit is a signed distance to a class hyperplane, so ordinary MLR is already the hyperplane decision\-boundary case of Umbilic Multinomial Logistic Regression \(UMLR\)\. Classical submanifold geometry supplies the matching spherical decision boundary: in Euclidean space, the complete connected totally umbilic hypersurfaces are hyperplanes and spheres\. The spherical UMLR form keeps a prototype\-like center but adds a learnable radius; its signed squared\-distance form contains squared prototype scoring as the radius\-zero case\. Thus UMLR is not a separate replacement for MLR or prototypes, but a boundary\-aware family that places hyperplane logits, spherical logits, mixed heads, and prototype scoring in one framework\. Experiments on low\-shot vision head swaps, prototype comparisons, and mixed hyperplane\-\-sphere heads support this organization and show how the different decision boundaries behave across data regimes\. UMLR provides a compact geometric language for studying when class evidence is better modeled by flat boundaries, spherical boundaries, or their mixture\.

## SMOG: Scalable Meta\-Learning for Multi\-Objective Bayesian Optimization

**Authors:** Leonard Papenmeier; Petru Tighineanu

**ID:** 151366 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b6NzMTXsJw>) | [PDF](<https://openreview.net/pdf?id=b6NzMTXsJw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151366>)

Multi\-objective optimization aims to solve problems with competing objectives\. Evaluating such problems is often slow or expensive, limiting the budget of evaluations\. In many applications, historical data from related optimization tasks is available and can be leveraged via meta\-learning to accelerate optimization\. Bayesian optimization, as a promising technique for expensive black\-box problems, has been extended independently to meta\-learning and multi\-objective optimization, but methods that simultaneously address both settings remain largely unexplored\. We propose SMOG—a scalable and modular meta\-learning model based on a multi\-output Gaussian process—that explicitly learns correlations between objectives\. SMOG builds a structured joint Gaussian process prior across meta\- and target tasks and, after conditioning on metadata, yields a closed\-form prior for the target task\. This construction propagates metadata uncertainty into the target surrogate in a principled way\. SMOG supports hierarchical, parallel training, achieving linear scaling with the number of meta\-tasks\. The resulting surrogate integrates seamlessly with standard multi\-objective Bayesian optimization acquisition functions\. We demonstrate that our method is consistently competitive, delivering strong data efficiency across representative benchmarks and applications\.

## SCDM: Scalable Causal Discovery in Nonlinear Temporal Systems with Meta\-Learning

**Authors:** Jingbo Wang; Kegeng Tang; Zihao Wang; Shaogang Ren

**ID:** 153991 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H2Bm4cicZc>) | [PDF](<https://openreview.net/pdf?id=H2Bm4cicZc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153991>)

Causal discovery from nonlinear multivariate time series is challenging in high\-dimensional systems, where the number of candidate directed relations grows quadratically with the number of variables\. Existing methods are often limited by target\-wise model fitting, repeated conditional testing, or expensive graph\-search procedures\. We propose SCDM, a shared\-parameter meta\-learning framework for scalable temporal causal discovery\. SCDM treats each target variable as a task while learning a shared temporal predictor and a shared causal\-strength matrix across tasks\. Each meta\-episode updates only a subset of target\-variable tasks, allowing the model to accumulate structural evidence across the full system without exhaustive target\-wise optimization\. After training, a post\-training graph readout converts the learned predictor into continuous directed causal scores for threshold\-independent evaluation\. We also provide a finite\-error recovery principle showing that, under fully observed delayed\-system assumptions and a positive risk\-gap condition, thresholding SCDM scores recovers the graph when statistical, meta\-optimization, and readout errors are below the population margin\. Experiments on controlled synthetic, neuroimaging\-inspired, high\-dimensional, and real\-world temporal benchmarks demonstrate competitive causal recovery and improved scalability in large temporal systems\.

## From Matrix Inversion to Constraints: Provably Tighter Confidence Regions for Importance Weights in Label Shift

**Authors:** Mushan Li; Kihyun Han; Yanyuan Ma

**ID:** 154251 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FA5NKoBbAJ>) | [PDF](<https://openreview.net/pdf?id=FA5NKoBbAJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154251>)

Importance weights are essential in domain adaptation under label shift, yet their utility is often undermined by the finite sample uncertainty associated with their estimation\. Existing methods typically analyze this uncertainty through Gaussian elimination on interval\-valued linear systems, which leads to overly conservative confidence regions and inefficient downstream applications\. We propose a paradigm shift from inversion\-based inference to a direct matrix constraint framework\. We use this framework to define a joint confidence region and extract marginal intervals via linear programming, deriving provably tighter bounds for importance weights while maintaining exact finite\-sample validity\. Furthermore, we analyze the confidence region's geometry and provide the theoretical results for its diameter bounds\. Evaluated across text, image, multimodal benchmarks, including AGNews, MNIST, CIFAR\-10, N24News, and a real\-world autonomous driving dataset, nuImages, our approach consistently yields shorter confidence intervals and smaller prediction sets than inversion\-based methods\.

## From Detection to Understanding — A Multi\-Task Dataset for Traffic Anomaly Reasoning

**Authors:** Han Zhang; yilin zhao; Zaid Pervaiz Bhat; Zheng \(Thomas\) Tang; Varun Praveen; Vidya Nariyambut Murali; David Anastasiu; Tomasz Kornuta

**ID:** 139099 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l6GGbeGpVw>) | [PDF](<https://openreview.net/pdf?id=l6GGbeGpVw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139099>)

We present TAR \(Traffic Anomaly Reasoning\), a large\-scale multi\-task dataset for training and evaluating vision\-language models on traffic anomaly understanding\. While video anomaly detection \(VAD\) has traditionally focused on binary classification or temporal localization, TAR moves beyond detection to reasoning\. TAR contains 44,040 training annotations with explicit chain\-of\-thought reasoning traces across 10 task types, covering 3,670 CCTV transportation videos \(\~26 hours\) sourced from eight public datasets\. TAR provides a structured progression of tasks organized into three groups — Question Answering, Temporal Reasoning, and Scene Understanding — reflecting our finding that reliable anomaly understanding demands capabilities far beyond detection\. Annotations are produced by a hierarchical auto\-labeling pipeline using state\-of\-the\-art VLMs, with existing human annotations incorporated as supplementary context for 25% of videos\. Every answer is paired with a step\-by\-step reasoning trace, enabling both supervised training with chain\-of\-thought supervision and fine\-grained evaluation of model reasoning\. We evaluate eight vision\-language models on a held\-out test set of 84 videos \(1,008 annotations\) with human\-reviewed and corrected annotations and find that current models struggle with Temporal Reasoning and Scene Understanding tasks even when they perform well on basic Question Answering — revealing that detection accuracy is a poor proxy for genuine understanding\. A multi\-task ablation study shows that progressively adding task groups during fine\-tuning yields consistent gains, with the full 10\-task model achieving \+44\.5 points on Binary QA accuracy and \+21\.4 points in aggregate score over the zero\-shot baseline, demonstrating the dataset's value as a training resource\. TAR is released under CC\-BY\-4\.0 and serves as the official training data for AI City Challenge 2026 Track 3: Anomalous Events in Transportation\. The annotations and video download scripts are publicly available at https://huggingface\.co/datasets/nvidia/PhysicalAI\-Traffic\-Anomaly\-Reasoning\.

## Geometry over Density: Few\-Shot Cross\-Domain OOD Detection

**Authors:** Li Li; You Qin; Jiate Li; Charith Peris; Lisa Bauer; Roger Zimmermann; Yue Zhao

**ID:** 150707 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g7cJBv2nOf>) | [PDF](<https://openreview.net/pdf?id=g7cJBv2nOf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150707>)

Out\-of\-distribution \(OOD\) detection identifies test samples that fall outside a model's training distribution, a capability critical for safe deployment in high\-stakes applications\. Standard OOD detectors are trained on a specific in\-distribution \(ID\) dataset and detect deviations from that single domain\. In contrast, we study few\-shot cross\-domain OOD detection: given a \\emph\{single\} pre\-trained model, can we perform OOD detection on \\emph\{arbitrary\} new ID\-OOD task pairs using only a handful of ID samples at inference time, with no additional training? We propose \\textbf\{UFCOD\}, a unified framework that achieves this goal through information\-geometric analysis of diffusion trajectories\. Our key insight is that diffusion noise predictions are score functions \(gradients of log\-density\), and we extract two energy features: \\emph\{Path Energy\} \(integrated score magnitude\) and \\emph\{Dynamics Energy\} \(score smoothness\), that form a discrete Sobolev norm capturing how samples interact with the learned diffusion process\.  The central contribution is a \\textbf\{train\-once, deploy\-anywhere\} paradigm: a diffusion model trained on a single dataset serves as a universal feature extractor for OOD detection across semantically unrelated domains\. At deployment, each new task requires only $\\sim$100 unlabeled ID samples for inference: no retraining, no fine\-tuning, no task\-specific adaptation\. Using 100 ID samples per task, UFCOD achieves 93\.7\\% average AUROC across 12 cross\-domain benchmarks, competitive with methods trained on 50k\-\-163k samples, demonstrating $\\sim$500$\\times$ improvement in sample efficiency\. See our code in \\url\{https://anonymous\.4open\.science/r/UFCOD\-22E8/README\.md\}\.

## Hydra: Towards Transferable Multi\-Task Learning on Temporal Graphs

**Authors:** Kiarash Shamsi; Farimah Poursafaei; Tran Gia Bao Ngo; Reihaneh Rabbany; Baris Coskunuzer; Guillaume Rabusseau; Michael Bronstein; Shenyang Huang; Cuneyt Akcora

**ID:** 149441 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q45V4tagJs>) | [PDF](<https://openreview.net/pdf?id=q45V4tagJs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149441>)

Real\-world evolving networks are naturally modeled as temporal graphs \(TGs\), where capturing temporal dynamics is essential for predicting future graph properties that support downstream decision\-making\. Existing temporal graph methods have been developed primarily for single\-task prediction, and little is known about their generalization across tasks or transfer to unseen networks\. This leaves the challenge of multi\-task graph property prediction in TGs largely open\. We address this challenge by introducing Hydra, a novel architecture that integrates local connectivity features from temporal GNNs with a spectral learning module that captures global connectivity patterns\. This design enables joint learning of local and global information under a multi\-task objective\. In multi\-task classification, Hydra achieves an 8\.9% relative gain in AUC over the strongest competitor\. In multi\-task regression, Hydra achieves competitive results in all three tasks, while obtaining the best results in two tasks with a 8\.2% relative gain in MAE compared to the strongest baseline\. Moreover, Hydra delivers these gains with a 22× reduction in training time compared to temporal transfer models\. These results provide the first systematic evidence that multi\-task transferable learning on temporal graphs is effective\. By delivering consistent top\-ranked performance, Hydra highlights multi\-task training on temporal graphs as a promising direction toward adaptable foundation models for temporal graphs\.

## Adapting Actively on the Fly: Relevance\-Guided Online Meta\-Learning with Latent Concepts for Geospatial Discovery

**Authors:** Jowaria Khan; Anindya Sarkar; Yevgeniy Vorobeychik; Elizabeth Bondi\-Kelly

**ID:** 156089 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0SGmhIr9iM>) | [PDF](<https://openreview.net/pdf?id=0SGmhIr9iM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156089>)

In environmental monitoring, data collection is often costly, sparse, and shaped by urgent public\-health needs\. This is particularly true for cancer\-causing PFAS \(Per\- and polyfluoroalkyl substances\) contamination, where discussions with domain experts and environmental organizations highlight the need to strategically identify high\-risk, under\-observed regions under tight sampling budgets\. More broadly, similar challenges arise in disaster response and public health settings, where dynamic environments make it essential to efficiently uncover hidden targets from limited ground truth\. Yet sparse and biased geospatial labels limit the applicability of existing learning\-based methods, such as reinforcement learning\. To address this, we propose a unified geospatial discovery framework that integrates active learning, online meta\-learning, and concept\-guided reasoning\. Our approach introduces two key innovations built on a shared notion of \*concept relevance\*, capturing how domain\-specific factors influence target presence: a \*concept\-weighted uncertainty sampling strategy\*, where uncertainty is modulated by learned relevance from readily available concepts such as land cover and source proximity; and a \*relevance\-aware meta\-batch formation strategy\* that promotes semantic diversity during online\-meta updates, improving generalization in dynamic environments\. We evaluate our framework on PFAS contamination discovery as a real\-world inspired environmental monitoring task, demonstrating robust target discovery under limited data and changing conditions\.

## FedIndex: Federated Domain Adaptation with Continuous Domain Indices

**Authors:** qingyang yu; Hao Wang; Qizhen Zhang; Hao Wang

**ID:** 156743 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fnbGFH0330>) | [PDF](<https://openreview.net/pdf?id=fnbGFH0330>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156743>)

Federated domain adaptation incorporates source clients’ knowledge to improve the model
performance on the target client under the coordination of the server, mitigating the im\-
pact of data insufficiency and domain shift\. Existing federated domain adaptation \(FDA\)
methods focus on domain adaptation with categorical domain indices \(e\.g\., “source” and
“target”\), while many real\-world tasks involve domains with continuous domain indices\. For
instance, hospitals need to adapt disease analysis and prediction across patients via age, a
continuous domain index in medical applications capturing the underlying relation between
patient information and disease analysis\. Prior FDA methods struggle with such tasks due to their ignorance of continuous domain indices\. This paper proposes FedIndex to enable FDA with continuous domain indices\. FedIndex performs adversarial domain adaptation across clients with the help of a global discriminator, aligning all domains’ distributions\. Our
theoretical analysis demonstrates the capability of FedIndex to generate domain\-invariant
features across clients using continuous domain indices without accessing data on clients,
simultaneously maintaining privacy preservation\. Our empirical results show that FedIndex
outperforms the state\-of\-the\-art FDA methods on synthetic and real\-world datasets\.

## PM\-LoRA: Scalable Continual Learning via Progressive Merging of Low Rank Adapters

**Authors:** Xiaobing Yu; Peijie Qiu; Jin Yang; Xiaoqi Zhao; XUANZHAO DONG; Wenhui Zhu; Xiwen Chen; Weiwei Ma; Xiaofeng Liu; Jiangpeng He

**ID:** 153951 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HL68qRLWDM>) | [PDF](<https://openreview.net/pdf?id=HL68qRLWDM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153951>)

In continual learning, most parameter\-efficient fine\-tuning methods rely on task\-specific low\-rank adapters to incrementally adapt pre\-trained models to new tasks\. However, they overlook two critical challenges: one is the accumulation of numerous adapters that leads to linear growth in parameters and memory, and the other is the lack of an explicit mechanism to preserve previously learned knowledge during continual adaptation\. In this work, we propose a simple yet scalable framework, termed Progressive Merging of Low\-Rank Adapters \(PM\-LoRA\), to address both issues simultaneously\. Specifically, PM\-LoRA trains a small task\-specific spectral orthogonal adapter for each new task and progressively integrates it into a single evolving LoRA adapter that encodes all prior knowledge\. This merging process enables continuous knowledge integration while directly mitigating catastrophic forgetting at the parameter level\. Benefiting from this design, PM\-LoRA achieves true scalability by maintaining constant parameter overhead throughout continual training\.  Extensive experiments on four benchmark datasets demonstrate that PM\-LoRA achieves state\-of\-the\-art performance with superior memory and computation efficiency\.

## Trust Region Continual Learning as an Implicit Meta\-Learner

**Authors:** Zekun Wang; Anant Gupta; Chris MacLellan

**ID:** 148571 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wrirlNfjM9>) | [PDF](<https://openreview.net/pdf?id=wrirlNfjM9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148571>)

Continual learning aims to acquire tasks sequentially without catastrophic forgetting, yet standard strategies face a core tradeoff: regularization\-based methods \(e\.g\., EWC\) can overconstrain updates when task optima are weakly overlapping, while replay\-based methods can retain performance but drift due to imperfect replay\. We study a hybrid perspective: \\emph\{trust region continual learning\} that combines generative replay with a Fisher\-metric trust region constraint\. We show that, under local approximations, the resulting update admits a MAML\-style interpretation with a single implicit inner step: replay supplies an old\-task gradient signal \(query\-like\), while the Fisher\-weighted penalty provides an efficient offline curvature shaping \(support\-like\)\. This yields an emergent meta\-learning property in continual learning: the model becomes an initialization that rapidly \\emph\{re\-converges\} to prior task optima after each task transition, without explicitly optimizing a bilevel objective\. Empirically, on task\-incremental diffusion image generation and continual diffusion\-policy control, trust region continual learning achieves the best final performance and retention, and consistently recovers early\-task performance faster than EWC, replay, and continual meta\-learning baselines\.

## Causal Multi\-Task Demand Learning

**Authors:** Varun Gupta; Vijay Kamble

**ID:** 153237 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mk49ilMld8>) | [PDF](<https://openreview.net/pdf?id=Mk49ilMld8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153237>)

We study a canonical multi\-task demand\-learning problem motivated by retail pricing, where a firm seeks to estimate heterogeneous linear price\-response functions across multiple decision contexts\. Each context is described by rich covariates but exhibits limited price variation, motivating transfer learning across tasks\. A central challenge in leveraging cross\-task transfer is endogeneity: prices may be arbitrarily correlated with unobserved task\-level demand determinants across tasks\.  We propose a new meta\-learning framework that identifies the conditional mean of task\-specific causal demand parameters given a subset of task\-specific observables despite such confounding, assuming that each task contains at least two distinct locally exogenous price points\. This subset is carefully designed to include all of the prices to address cross\-task confounding, while masking two demand outcomes that provide randomized supervision to address identifiability issues arising from the inclusion of all prices\. We show that this information design is maximally uniformly valid, in that any refinement of the conditioning set that reveals withheld\-outcome information is not guaranteed to identify the conditional mean causal target\. We validate our method on real and synthetic data, demonstrating improved recovery of demand responses relative to standard transfer\-learning baselines\.

## DeepVoting: Learning and Improving Voting Rules with Fine\-Tuning

**Authors:** Leonardo Matone; Ben Abramowitz; Ben Armstrong; Avinash Balakrishnan; Nicholas Mattei

**ID:** 155301 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6biK4w9ftC>) | [PDF](<https://openreview.net/pdf?id=6biK4w9ftC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155301>)

Recently, social choice theory has been found broadly useful for AI alignment and evaluation, often based on the axiomatic properties for combining preferences provided by social choice functions\. However, for many sets of axioms, functions which $\\textit\{never\}$ violate the axioms are known to not exist, e\.g\., Arrow's Impossibility Theorem\. Recent work on learning novel rules to $\\textit\{minimize\}$ axiom violations shows the effectiveness of machine learning but explores a limited class of axioms\. In this work we show the effectiveness of standard social choice data structures as features for learning existing voting rules, resulting in networks that have better accuracy than past approaches while using an order of magnitude fewer parameters\. Subsequently, we develop a process for $\\textit\{adding axiomatic properties\}$ to existing voting rules\. By building novel axiomatic loss functions we are able to use transfer learning to fine\-tune existing voting rules in a way that quantitatively preserves their original behaviour while also exhibiting strong adherence to previously absent axiomatic properties, resulting in novel voting rules that are $\\textit\{closer\}$ to the impossibility frontier than those in the machine learning or theoretical literature\.

## When Does Subspace Direction Matter for LoRA? Regime Analysis of the Magnitude Principle in Few\-Shot Adaptation

**Authors:** Nischal Subedi; Cencheng Shen; Peng Zhao

**ID:** 154943 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9lfZA1MK8L>) | [PDF](<https://openreview.net/pdf?id=9lfZA1MK8L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154943>)

Low\-Rank Adaptation \(LoRA\) constrains weight updates to a low\-rank subspace, making the choice of that subspace central to adaptation\. We show that the value of LoRA initialization direction is regime\-dependent\. It helps when the representation dimension is large relative to the labeled set size and the estimated activation subspace is aligned with task structure, and is otherwise inconsequential\. We formalize this view with a spiked\-covariance Davis\-\-Kahan argument and a first\-step LoRA analysis showing that the initial learning signal flows through projected target\-token features\. From this analysis we derive an alignment coefficient $\\rho$, computable from a single forward pass, that closely tracks the empirical gain from direction\-aware initialization across tasks\. Motivated by this view, we propose PivotLoRA, an initialization that estimates LoRA adapters from target\-token PCA and applies a single output\-preserving orthogonal pivot after early training drift\. Across $30$ BERT\-base few\-shot settings and $13$ compared methods, PivotLoRA achieves the best average rank and improves over vanilla LoRA on nearly every setting, with the largest gains concentrated on high\-alignment tasks\. Decoder\-scale classification on LLaMA\-2\-7B and Llama\-3\.1\-8B reproduces the low\-shot pattern, while full\-data and generation controls confirm the predicted regime specificity\.

## MAdam: Metric\-Aware Multi\-Objective Adam

**Authors:** Fengbei Liu; Rachit Saluja; Sunwoo Kwak; Ruibo Wang; Ruining Deng; Heejong Kim; Johannes C\. Paetzold; Mert Sabuncu

**ID:** 153932 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HVoKKffUJJ>) | [PDF](<https://openreview.net/pdf?id=HVoKKffUJJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153932>)

Multi\-objective optimization \(MOO\) underlies many machine learning problems, yet MOO solvers across the loss\-balancing, gradient\-balancing, and Pareto\-based families almost universally hand their reconciled directions to Adam\~\\cite\{kingma2015adam\}\. We show this coupling introduces two systematic gaps between the solver's intent and the optimizer's execution\. The first is a \\emph\{weighting mismatch\}: Adam's second\-moment denominator entangles the time\-varying preference vector with gradient statistics, marginalizing the preference into a history average and collapsing distinct Pareto trade\-offs toward a near\-uniform mixture\. The second is a \\emph\{geometric mismatch\}: Adam's adaptive metric distorts the Euclidean geometry MOO solvers assume, turning aligned objectives into apparent conflicts\. To resolve both jointly, we introduce \\textbf\{MAdam\} \(Metric\-Aware Multi\-Objective Adam\), a drop\-in wrapper that leaves both solver and optimizer unchanged\. MAdam preconditions the reconciled direction by the preference\-conditioned curvature of the scalarized objective; on this whitened input, Adam's second moment collapses to identity, so the realized update is governed by the preference\-conditioned metric\. Across multi\-task learning, Pareto\-front recovery, physics\-informed neural networks, and medical imaging, MAdam consistently improves over Adam for every solver family\.

## SCOT: Multi\-Source Cross\-City Transfer with Optimal\-Transport Soft\-Correspondence Objectives

**Authors:** Yuyao Wang; Min Yang; Meng Chen; Weiming Huang; Yilong Yin; Yongshun Gong

**ID:** 155328 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6RasfS5xjb>) | [PDF](<https://openreview.net/pdf?id=6RasfS5xjb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155328>)

Cross\-city transfer leverages labeled data from well\-instrumented cities to improve prediction in label\-scarce ones, but remains challenging when cities adopt incompatible partitions with no ground\-truth region correspondences\. Even with expressive GNN encoders, transfer quality varies dramatically across methods sharing nearly identical backbones\-\-\-indicating that alignment design, not encoder capacity, is the binding constraint\. Existing paradigms exhibit complementary failure modes: heuristic anchor matching collapses to hubness under unequal partitions, while distribution\-level matching over\-mixes embeddings under heterogeneity\. Both stem from a single missing primitive\-\-\-explicit, mass\-controlled soft correspondence between unequal region sets\. The challenge intensifies in multi\-source transfer, where independent source\-to\-target alignments yield conflicting gradients and source domination\. We propose SCOT, which adapts entropic OT to this regime through three application\-specific designs: an OT\-weighted contrastive objective that resolves the geometric\-\-semantic tension, a one\-sided cycle regularizer respecting the rectangular $n\_s\\\!\\neq\\\!n\_t$ geometry, and\-\-\-as our central contribution\-\-\-a shared prototype hub coordinated through balanced entropic OT under a target\-induced prior, bypassing the source\-selection problem in label\-scarce regimes\. Across real\-world cities and tasks, \\scot consistently improves transfer accuracy, achieving 5\-\-50\\% relative MAE/MAPE reductions over the strongest baseline, with learned couplings and hub assignments quantitatively confirming that the diagnosed failure modes are resolved\.

## Grouped Adaptive Head Mixing for Personalized Multi\-Task Federated Reinforcement Learning

**Authors:** Yiran Pang; Zhen Ni; Dimitris Pados; Xiangnan Zhong

**ID:** 155771 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=32D5gvPRnB>) | [PDF](<https://openreview.net/pdf?id=32D5gvPRnB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155771>)

Multi\-task reinforcement learning \(MT\-RL\) trains a single agent to solve multiple tasks by leveraging shared knowledge across task domains\. However, most MT\-RL methods assume centralized access to task data, making them impractical for privacy\-sensitive or large\-scale distributed settings\. Multi\-task federated reinforcement learning \(MT\-FRL\) mitigates this issue by enabling agents to collaborate through shared models rather than raw trajectories, but often suffers from unstable performance under task heterogeneity, negative transfer, and imbalanced learning across tasks\. A fundamental question in MT\-FRL is how each agent should decide with whom to share skills and how strongly to rely on shared knowledge\. To answer this question, we propose GAdapHeadFRL, a personalized MT\-FRL framework based on geometry\-aware grouping and adaptive decision\-layer task\-head mixing\. First, we decompose the local Bellman residual into representation and task\-head estimation errors, and derive a closed\-form optimal sharing strength governed by task mismatch and estimation uncertainty\. Second, we instantiate this insight by identifying compatible client groups from local updated geometry, constructing group\-specific task\-head prototypes, and dynamically mixing them with local heads using lightweight practical proxies\. Experiments on heterogeneous benchmarks, including MiniGrid \(up to 12 tasks\) and MetaWorld \(up to 50 tasks\), show that GAdapHeadFRL consistently outperforms state\-of\-the\-art personalized MT\-FRL baselines\. It achieves up to 24\.5\\% relative improvement on MiniGrid, and increases the converged\-task ratio from 50\.0\\% to 72\.9\\% over the personalized baseline\. In addition, the proposed method reduces performance standard deviation by over 82\.9\\% on the largest task settings compared with centralized MT\-RL references\. These results demonstrate that geometry\-aware grouping and adaptive task\-head mixing provide an effective and scalable principle for heterogeneous MT\-FRL\.

## Efficient Transferable Optimal Transport via Min\-Sliced Transport Plans

**Authors:** Xinran Liu; Elaheh Akbari; Rocio Diaz Martin; Navid NaderiAlizadeh; Soheil Kolouri

**ID:** 154970 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9ZMgjQYFSR>) | [PDF](<https://openreview.net/pdf?id=9ZMgjQYFSR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154970>)

Optimal Transport \(OT\) plans provide correspondences between distributions supporting alignment tasks in various domains\. Sliced transport plans have been recently proposed as a computationally efficient alternative to OT plans\. These methods optimize a one\-dimensional projection \(slice\) to obtain a conditional transport plan that minimizes the transport cost in the ambient space\. Despite their efficiency, it remains unclear whether learned slicers transfer to new distribution pairs under shift, an issue central to evolving data and repeated OT computations over related distributions\. We study the min\-Sliced Transport Plan \(min\-STP\) framework and examine slicer transferability: can a slicer learned on one distribution pair produce effective transport plans for unseen pairs? Theoretically, we show that optimized slicers remain close under slight perturbations of the data distributions, enabling efficient transfer across related tasks\. To further improve scalability, we introduce a minibatch formulation of min\-STP and provide statistical guarantees on its accuracy\. Empirically, we demonstrate that the transferable min\-STP achieves strong one\-shot matching performance and facilitates amortized training for point cloud and image analysis\. Our code is available at https://anonymous\.4open\.science/r/Min\-STP\-CF74\.

## The Master Key Hypothesis: Unlocking Cross\-Model Capability Transfer via Linear Subspace Alignment

**Authors:** Rishab Balasubramanian; Pin\-Jie Lin; Rituraj Sharma; Mohit Bansal; Tu Vu

**ID:** 152307 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U3GUy7xRmI>) | [PDF](<https://openreview.net/pdf?id=U3GUy7xRmI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152307>)

We investigate whether post\-trained capabilities can be transferred across model scales without retraining, and propose the Master Key Hypothesis, which states that model capabilities correspond to directions in a low\-dimensional latent subspace that induce specific behaviors and are transferable across models through linear alignment\. Based on the hypothesis, we introduce UNLOCK, a training\-free and label\-free framework that extracts a capability direction by contrasting activations between capability\-present and capability\-absent Source variants, aligns it with a Target model through a low\-rank linear transformation, and applies it at inference time to elicit the behavior\. Experiments on reasoning behaviors, including Chain\-of\-Thought \(CoT\) and mathematical reasoning, demonstrate substantial improvements across model scales without training\. For example, transferring CoT reasoning from Qwen1\.5\-14B to Qwen1\.5\-7B yields an accuracy gain of 12\.1% on MATH, and transferring a mathematical reasoning direction from Qwen3\-4B\-Base to Qwen3\-14B\-Base improves AGIEval Math accuracy from 61\.1% to 71\.3%, surpassing the 67\.8% achieved by the 14B post\-trained model\. Our analysis shows that the success of transfer depends on the capabilities learned during pre\-training, and that our intervention amplifies latent capabilities by sharpening the output distribution toward successful reasoning trajectories\.

## Uncertainty Aware SURE Transfer Learning for Classification Problems

**Authors:** Haoyue Li; Shubo Li; Runze Li

**ID:** 149259 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rh6BZ4pWDJ>) | [PDF](<https://openreview.net/pdf?id=rh6BZ4pWDJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149259>)

Transfer learning is a powerful approach for improving classification performance when the target dataset contains limited observations\. However, individual\-level source data are often unavailable due to privacy or access constraints\. We propose GSURE\-Trans, an uncertainty\-aware summary\-level transfer learning framework for logistic classification that uses target individual\-level data together with only source coefficient estimates and standard errors\. By introducing and profiling out an auxiliary bridge parameter, GSURE\-Trans induces a coordinatewise Huber penalty that accounts for both source uncertainty and source\-target coefficient discrepancies\. To further prevent negative transfer at study level, we develop a new criterion, generalized Stein unbiased risk estimate \(GSURE\), that adaptively selects the scale of source borrowing\. Theoretically, we establish uniform consistency of GSURE and an oracle inequality for the selected transfer weight\. Simulations and real data application show that GSURE\-Trans improves prediction when sources are compatible and down\-weights heterogeneous sources when transfer is harmful\.

## FLAME: Adaptive Mixture\-of\-Experts for Continual Multimodal Multi\-Task Learning

**Authors:** Xing Han; Shravan Chaudhari; Tanvi Ranade; Rama Chellappa; Suchi Saria

**ID:** 155468 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5NwsnKcAvg>) | [PDF](<https://openreview.net/pdf?id=5NwsnKcAvg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155468>)

Real\-world model deployment across multiple domains requires multimodal models to operate under two complementary regimes: \(1\) multi\-task pretraining, tasks are co\-available at design time where related tasks could borrow representational strength from one another, \(2\) continual adaptation, in which new tasks emerge after deployment with previously unseen modality combinations\. However, neither regime alone suffices: the pretraining task set is never exhaustive, while bypassing joint training forfeits the transfer gains and efficiency among co\-trainable tasks\. Sparse Mixture\-of\-Experts \(MoE\) is a natural fit for this dual requirement: sparse activation enables modular capacity expansion as new tasks arrive, while routing decouples modality\-level computation from task\-level composition\. In this work, we propose a scalable MoE framework for multitask pretraining and continual learning across flexible modality combinations\. The framework is designed to support training on multimodal tasks with diverse modality configurations by leveraging modality\-specific routers that process tokens from each modality across tasks\. Furthermore, it enables continual learning over sequential multimodal tasks within a fixed\-capacity MoE by compressing accumulated expert knowledge into low\-rank memory subspaces, while expanding only the lightweight routers\. We validate the effectiveness of our method on multiple healthcare multimodal benchmarks\. It demonstrates competitive multitask pretraining performance while alleviating catastrophic forgetting and improving parameter efficiency\.

## Combating Catastrophic Forgetting in Continual Domain Adaptation via Knowledge Recasting

**Authors:** Zijie Liu; Zhen Tan; Charles Fleming; Tianlong Chen

**ID:** 148553 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x28eNvC5gp>) | [PDF](<https://openreview.net/pdf?id=x28eNvC5gp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148553>)

Adapting language models to new domains during post\-training risks degrading previously acquired capabilities, a phenomenon commonly known as \\emph\{catastrophic forgetting\}\. Existing mitigation methods largely treat forgetting as a consequence of excessive model drift\. They therefore constrain updates by preserving old outputs, replaying old data, or regularizing changes to parameters and representations so that the updated model remains close to its previous state\. We take a \\textit\{different view\}: \{Rather than pulling the updated model back toward its old state, we translate the new domain into the model’s pre\-existing knowledge space, making unfamiliar knowledge learnable through familiar procedures\}\. Therefore, we propose \\textbf\{Skill Schema Transport \(SST\)\}, a post\-training framework that transports new knowledge into the model's existing skill space\. SST abstracts each example type into a skill schema, preserving its essential operations, dependencies, and verification steps while removing domain\-specific surface forms\. By recasting new examples as instances of reusable procedures, SST turns knowledge update from trajectory memorization into procedural reuse\. In continual domain adaptation settings, SST consistently reduces forgetting while improving generalization to related tasks\. Across two 3B instruction\-tuned backbones, SST improves average final performance on streamed domains by 2\.53\-5\.75 points over sequential post\-training\. It also lowers max\-drop forgetting in all evaluated settings, with the largest reduction from 42\.41 to 7\.10 points on the Qwen\-3B MATH stream, while substantially recovering the OOD degradation induced by sequential updates\.

## ScreenShot: A Foundation Model for Few\-Shot Combination Drug Screening

**Authors:** Antoine de Mathelin; Christopher Tosh; Wesley Tansey

**ID:** 150824 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=f1jlqYKqL6>) | [PDF](<https://openreview.net/pdf?id=f1jlqYKqL6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150824>)

Treating patients with combinations of drugs reduces the risk of resistance to any individual drug\. Finding effective combinations is difficult because the large search space makes combinatorial screens prohibitively expensive, time consuming, and often technically infeasible\. Predictive models can fill this gap, yet existing methods typically require molecular profiling of each sample and per\-cohort training, limiting their applicability when time and tissue are scarce\. To address this challenge, we introduce ScreenShot, a hierarchical transformer pretrained on 40 drug screening datasets covering 3,700 drugs and 6,000 biological samples, whose architecture mirrors the nested structure of screening data\. Given a few\-shot context of observations from a new patient, ScreenShot predicts the response of the sample to combination therapies through in\-context learning, operating directly on functional measurements with no fine\-tuning and no molecular profiling\. On four held\-out datasets, ScreenShot outperforms all baselines in both prediction accuracy and identification of selectively effective treatments\. ScreenShot's internal representations are directly useful for experimental design: we use them to drive a weighted $k$\-means\+\+ active learning strategy that selects which experiments to run, achieving the same hit detection as uniform screening with a third of the budget\. Source code and interactive dashboard: https://github\.com/AnonymousAccount3/screenshot

