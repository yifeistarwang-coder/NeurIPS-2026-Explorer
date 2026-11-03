# General Machine Learning / Everything Else

通用机器学习 / 其他机器学习

347 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Don't Discard Your Rollouts: Reusing Teacher RL Traces for Student Distillation

**Authors:** Vashisth Tiwari; Emma Strubell; Zico Kolter

**ID:** 153136 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Nc74o46L3Z>) | [PDF](<https://openreview.net/pdf?id=Nc74o46L3Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153136>)

RL post\-training with methods like PPO and GRPO produce a large rollout archive, which each contain correctness\-labeled completions, correct/incorrect completions for the same prompt, teacher log\-probabilities, and group pass rates\. Canonical distillation methods, however, ignore these traces and train based upon new data from the converged teacher\. This discards the contrastive signal that helped the teacher and the metadata already produced during teacher RL, even though the teacher RL run typically generates many more tokens than the later distillation pass\. However, reusing rollouts naively is non\-trivial: the archive mixes early and late teacher policies, can be arbitrarily off\-policy for the student, and contains many low\-quality traces, and naive SFT and DPO on these rollouts underperforms the cannonical SFT baseline\. In this paper, we show that rollout reuse becomes effective when it is treated as a data\-selection problem\. We use two sets of information from rollouts: per\-prompt pass rate, which defines an easy\-to\-hard curriculum and separates all\-correct prompts for SFT from mixed\-success prompts for DPO; and per\-rollout teacher likelihood, which acts as an in\-distribution proxy for student\-compatible traces\. Across two GRPO teachers \(4B and 8B\) and students from multiple families, the curated rollout datasets D SFT^\{allp,top1\} and D DPO^\{curr,top1\} match or beat canonical distillation without an extra teacher generation pass \. On MATH500, D DPO^\{curr,top1\} improves over D synth by up to 4\.0 percentage points on strong students, while D SFT^\{allp,top1\} → D DPO^\{curr,top1\} matches weaker students where DPO is unstable\.

## View Confidence Perception\-Driven Incremental Prediction for Incomplete Multi\-view Multi\-label Learning

**Authors:** Pingzhu Liu; Chunming He; Zunnan Xu; Zhirui Fang; Zitong YU; Xiu Li; Chengliang Liu

**ID:** 152008 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WBWPvuJd9B>) | [PDF](<https://openreview.net/pdf?id=WBWPvuJd9B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152008>)

Incomplete Multi\-view Multi\-label Learning \(IMvMIL\) refers to a classification task where missing views and incomplete label assignments coexist\. Existing methods often directly fuse heterogeneous view features, neglecting the fact of imbalance where dominant views tend to overshadow non\-dominant ones, resulting in unsatisfactory performance\. To address this, we propose the View Confidence Perception\-Driven Incremental Prediction \(VCPIP\) framework, which incorporates an adaptive structural refinement strategy to balance different views via confidence\-based branch expansion, thereby enabling the full exploitation of view\-specific information\. Specifically, we propose a View\-Quality Aware \(VQA\) strategy, which introduces a novel metric to evaluate the predictive strength of each view\-specific branch using supervision signals from the label space\. By leveraging these quality assessments, VQA dynamically allocates optimal classifier ensembles and employs residual optimisation to improve the discriminative capability of non\-dominant views\. Additionally, to eliminate information redundancy and purify features, we propose a Mixture\-of\-Experts\-based Decouple\-Fusion \(MOEDF\) mechanism to extract refined representations by disentangling consistent and specific features under orthogonality constraints for more precise multi\-label prediction\. Moreover, to simulate real\-world data corruption, we introduce the Stochastic Cross\-sample Fragment Swapping \(SCFS\) strategy, which interchanges feature fragments across samples to facilitate the modelling of robust global representations for enhanced generalisation\. Extensive experiments across diverse benchmarks and varying missing\-rate scenarios confirm that our method consistently surpasses state\-of\-the\-art methods in multi\-label classification\.

## Computing All Optimal Partial $p$\-Wasserstein Matchings on the Line

**Authors:** Sebastian Angrick; Jacobus Conradi; Mónika Csikós; Niko Mertens; Danny Mittal; André Nusser; Krzysztof Onak; Sharath Raghvendra

**ID:** 155133 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=88SUwJD17z>) | [PDF](<https://openreview.net/pdf?id=88SUwJD17z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155133>)

For $p \\ge 1$, the $p$\-Wasserstein distance measures the minimum cost of transporting probability mass, where moving mass between two points costs the $p$th power of their distance\. For discrete distributions in one dimension, full transport is especially simple: after sorting, mass is matched in order along the line\. By contrast, partial and unbalanced transport on the line remains much less understood\. Recently, Chapel and Tavenard \[ICLR'25\] showed that, for $p=1$, all optimal partial transport plans between distributions supported on $n$ points, with uniform mass at each point, can be computed in $O\(n\\log n\)$ time by exploiting the metric structure of the cost\. For $p&gt;1$, this structure no longer applies, and existing approaches require $\\Omega\(n^2\)$ time\. Our main contribution is an FFT\-based data structure for balanced\-interval transport queries, which bypasses this quadratic bottleneck and yields an $O\(p\\ n\\log^2 n\)$\-time algorithm for computing all optimal partial transports on the line for every finite $p\\ge 1$\. We also provide an open\-source C\+\+ implementation that outperforms the state\-of\-the\-art baseline on a range of synthetic instances\. Finally, we establish a conditional lower bound for $p=\\infty$: any subquadratic\-time algorithm for computing all optimal partial transport plan costs on the line would violate the $\(\\min,\+\)$\-Convolution Hypothesis\. This separates the problem from full optimal transport, which is solvable in $O\(n\\log n\)$ time\.

## MDPBench: A Benchmark for Multilingual Document Parsing in Real\-World Scenarios

**Authors:** Zhang Li; Lin Zhibo; Qiang Liu; Ziyang Zhang; Shuo Zhang; Zidun Guo; Jiajun Song; Jiarui Zhang; Xiang Bai; Yuliang Liu

**ID:** 139726 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8AH1qOXLfG>) | [PDF](<https://openreview.net/pdf?id=8AH1qOXLfG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139726>)

We introduce Multilingual Document Parsing Benchmark, the first benchmark for multilingual digital and photographed document parsing\. Document parsing has made remarkable strides, yet almost exclusively on clean, digital, well\-formatted pages in a handful of dominant languages\. No systematic benchmark exists to evaluate how models perform on digital and photographed documents across diverse scripts and low\-resource languages\. MDPBench comprises 3,400 document images spanning 17 languages, diverse scripts, and varied photographic conditions, with high\-quality annotations produced through a rigorous pipeline of expert model labeling, manual correction, and human verification\. To ensure fair comparison and prevent data leakage, we maintain separate public and private evaluation splits\. Our comprehensive evaluation of both open\-source and closed\-source models uncovers a striking finding: while closed\-source models \(notably Gemini3\-Pro\) prove relatively robust, open\-source alternatives suffer dramatic performance collapse, particularly on non\-Latin scripts and real\-world photographed documents, with an average drop of 17\.8% on photographed documents and 14\.0% on non\-Latin scripts\. These results reveal significant performance imbalances across languages and conditions, and point to concrete directions for building more inclusive, deployment\-ready parsing systems\.

## Beyond Imputation: Mask\-Adaptive Conformal Prediction via Tree Embeddings on General Missing Data Mechanisms

**Authors:** Jiarong Fan; Juhyun Park; Thi Phuong Thuy Vo; Nicolas Brunel

**ID:** 154427 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DfxyPWNH8L>) | [PDF](<https://openreview.net/pdf?id=DfxyPWNH8L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154427>)

Conformal prediction \(CP\) provides a distribution\-free framework for uncertainty quantification with finite\-sample marginal coverage guarantees\. Yet, missing values introduce distributional heterogeneity, where marginal coverage can hide systematic undercoverage for certain missingness patterns\. At the same time, existing methods for conditional guarantees often fail when missing values are present, as they rely on geometric continuity of the covariate space, which is broken by missingness\. Although imputation restores continuity, it obscures the missingness patterns and introduces task\-dependent overhead\. We develop a new CP framework that is \\emph\{adaptive to missingness patterns\}, without imputing covariates\. We rely on data augmentation by feature embedding that accounts for missingness\. Our framework represents each input with missing values by a tree embedding together with its raw missingness mask, and then learns a regularized quantile score function\. Varying the choices for the penalty function and the augmentation enables us to characterize three practically relevant validity levels: exact coordinate\-wise validity, exact validity on observed masks, and approximate missingness\-conditional guarantees for general mechanisms \(MCAR, MAR, MNAR\)\. Experiments on synthetic and real datasets support these guarantees and show that the proposed method reduces miscoverage risk while maintaining informative intervals, especially in non\-MCAR settings\. These results highlight the practical value of uncertainty quantification that adapts to missingness\.

## When to Adopt Model Updates

**Authors:** Aspen Hopkins; Isabella Struckman; Hedi Driss; Aleksander Madry

**ID:** 152014 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W9csns6HGO>) | [PDF](<https://openreview.net/pdf?id=W9csns6HGO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152014>)

As AI development increasingly involves models adapted to downstream settings, a new algorithmic challenge for developers has surfaced: deciding when to adopt model updates\. Currently, the only reliable approach is to retrain on new upstream models and then evaluate extensively, which can be prohibitively expensive\. We introduce a framework for assessing when to propagate newly released model versions to downstream applications that does not require access to upstream data or retraining a priori\. Our framework incorporates geometric similarity and information\-theoretic sufficiency to determine when an upstream update substantially shifts the representational basis recruited for a downstream task\. This enables targeted update adoption, and supports emerging norms for coordinating AI supply chain infrastructure\.

## Prefix Executability: Evaluating Tool\-Using Agents Beyond Final Success

**Authors:** Amir H Rezaeian; Weiyi Sun; Yassine Benajiba; Dan Roth

**ID:** 139170 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gi2VS1WMce>) | [PDF](<https://openreview.net/pdf?id=gi2VS1WMce>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139170>)

Tool\-use benchmarks often score agents by final task success, but terminal outcomes can obscure whether the intermediate tool\-call trajectory was executable\. We propose prefix executability as a trajectory\-level evaluation protocol for tool\-using agents\. The protocol measures whether every prefix of a predicted tool\-call sequence remains executable under tool schemas, state preconditions, and data dependencies, and summarizes reliability using Prefix Executability Curves \(PEC\), First\-Error Depth \(FED\), Trajectory Executability Rate \(TER\), horizon\-normalized AUC\-PEC, and Recovery Rate \(RR\)\. We instantiate the protocol on stratified samples from BFCL\-v3 multi\-turn and ToolSandbox\. Across both benchmarks, outcome\-only and prefix\-level rankings diverge: agents whose execution is conditioned on an unverified plan often achieve higher point\-estimate final success than non\-plan\-conditioned baselines while substantially lowering TER and AUC\-PEC\. These divergences are precisely the failure modes that prefix executability is designed to expose: they reveal whether apparent success rests on an executable trajectory, where invalidity first enters, and whether success follows recovery from an earlier failure\. As a validation intervention, explicit pre\-execution plan checking reverses much of this prefix\-reliability loss, consistently improving executable\-prefix survival while maintaining competitive terminal success\. These results show that final success alone is insufficient for evaluating tool\-use agents and that prefix\-level executability provides an actionable reliability signal for comparing agents, diagnosing failures, and assessing validation mechanisms\.

## Kernel Selection is Model Selection: A Unified Complexity\-Penalised Approach for MMD Two\-Sample Tests

**Authors:** Yijin Ni; Xiaoming Huo

**ID:** 153658 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JhQRP9MfR8>) | [PDF](<https://openreview.net/pdf?id=JhQRP9MfR8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153658>)

The Maximum Mean Discrepancy \(MMD\) is a cornerstone statistic for nonparametric two\-sample testing, but its test power is dictated entirely by the chosen kernel\. Because any fixed kernel inherently fails to distinguish certain distributions, the kernel must be dynamically optimised\. However, data\-driven optimisation violates the foundational i\.i\.d\. assumption, forcing a strict trade\-off in existing frameworks\. Ratio criteria ignore this dependence, inducing overfitting and variance collapse on rich kernel classes\. Conversely, aggregation methods bypass the dependence using finite grids, but this strategy cannot scale to continuous search spaces like deep kernels\. To break this dichotomy, we establish data\-driven kernel selection as a model selection problem\. We propose Complexity\-Penalised MMD \(CP\-MMD\), a criterion derived from a uniform concentration inequality \(extending Maurer's framework to the two\-sample setting\) that bounds the post\-optimisation distribution by penalising the empirical MMD with the complexity of the kernel search space\. Because this penalty mathematically absorbs the cost of optimisation, CP\-MMD enables direct, grid\-free maximisation over continuous parametric classes, including scalar bandwidths, polynomial coefficients, and deep network parameters\. By formally accounting for optimisation complexity, we theoretically guarantee that CP\-MMD maximises true test power while ensuring unconditional Type\-I validity\. Consequently, CP\-MMD enables grid\-free kernel selection across linear, polynomial, and deep regimes, matching or exceeding state\-of\-the\-art test power\.

## Learning Optimal Transport Plans Via Autoregressive Token Regression

**Authors:** Ivan Jaen Marquez; Takis Chytas; Vikas Singh

**ID:** 155066 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8isvAhvCFo>) | [PDF](<https://openreview.net/pdf?id=8isvAhvCFo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155066>)

Optimal Transport \(OT\) provides a principled framework for comparing probability distributions\. Classical solvers remain the gold standard for this task, providing exact solutions\. At the same time, OT is an ideal testbed for studying whether learning\-based amortized models can internalize the structure of OT type problems\. Here, ground\-truth solutions are available, constraints are explicit, and exact discrete solutions have well\-characterized sparsity\. We describe ToR\-OT, a transformer\-based model that learns to predict discrete OT plans through autoregressive token regression\. We reframe OT into a structured sequence generation task\. ToR\-OT decodes sparse transport plans as sequences rather than solving an optimization task at test time\. We focus on three properties: \(a\) Zero\-shot generalization: pretraining on a large synthetic corpus of OT instances allows a single model to generalize to unseen distribution pairs and heterogeneous cost metrics without retraining\. \(b\) Sparse primal decoding: by exploiting the inherent sparsity in exact discrete OT solutions, the decoder predicts only nonzero entries \(avoids dense coupling outputs\)\. \(c\) Amortized inference: on low\-dimensional discrete problems, ToR\-OT gives accurate approximate plans and compares favorably with per\-instance neural OT baselines\. Overall, ToR\-OT is not yet a replacement for classical solvers, but best viewed as a step toward understanding how autoregressive transformers can learn structure of constrained optimization problems like OT\.

## Learning Discrete Riemannian Metrics for Physical Fields with Cochain\-Frame Equivariance

**Authors:** Dongzhe Zheng; Christine Allen\-Blanchette

**ID:** 150499 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hdnKXEGZYs>) | [PDF](<https://openreview.net/pdf?id=hdnKXEGZYs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150499>)

Physical fields on meshes require a separation between topology and geometry: conservation laws are topological and should be exact, while geometry, material response, and anisotropic coupling must be learned from data\. Existing neural surrogates often mix these roles inside unconstrained message passing\. We introduce Riemannian Hodge Message Passing \(RHMP\), which turns this separation into an architectural principle\. RHMP fixes the cellular coboundaries \($d\_k$\) determined by oriented incidence and learns symmetric positive\-definite cochain metrics \($H\_k$\) for geometry\-dependent propagation\. Treating $H\_k$ as the learned metric motivates cochain\-frame equivariance: physical propagation should be invariant to orthogonal changes of the hidden cochain feature basis\. RHMP implements this principle with metric\-weighted Hodge blocks \($d\_k^\\top H\_\{k\+1\}d\_k$\), yielding exact cochain\-complex identities \($d\_\{k\+1\}d\_k=0$\), nonnegative Hodge energies, positive\-semidefinite operators, and exact Abelian curvature invariance\. Across seven physical benchmarks spanning fluids, electromagnetism, gauge fields, and variable\-mesh CFD, RHMP achieves the best overall performance, with the largest gains when topology, learned geometry, and field structure interact\.

## Clean Data Can Still Carry Backdoors: Support\-Persistent Backdoors for Model Reuse

**Authors:** Junhoo Lee; Baekseung Kim; Seungyeon Kim; Nojun Kwak

**ID:** 152824 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Q8K72eVB73>) | [PDF](<https://openreview.net/pdf?id=Q8K72eVB73>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152824>)

Traditional backdoor attacks inject artificial trigger patterns into training data, causing models to misclassify triggered inputs while maintaining normal behavior on clean samples\. Since these artificial triggers are absent in clean datasets, standard knowledge distillation \(KD\) typically eliminates them, leading to the common belief that KD serves as an effective purification defense\. In this paper, we propose DAR \(Discover\-and\-Relabel\), a support\-persistent backdoor method that retains its behavior even after clean\-data distillation\. DAR identifies naturally abundant patterns in low\-dimensional feature subspaces using subspace clustering and applies label\-only poisoning to samples that inherently satisfy the discovered rule\. At test time, the backdoor is activated by locally modifying the corresponding subspace of the target images\. By instantiating spatial and frequency operators, DAR achieves attack accuracy comparable to state\-of\-the\-art backdoor attacks in ImageNet classification and CLIP\-based prompt tuning\. Notably, DAR keeps attack success above 96% after clean KD and remains defense\-resistant in practice\.

## Sobolev Regularized MMD Gradient Flow

**Authors:** Chenyang Tian; Bharath Sriperumbudur; Arthur Gretton; Zonghao Chen

**ID:** 152622 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RiNRfwPQ7Z>) | [PDF](<https://openreview.net/pdf?id=RiNRfwPQ7Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152622>)

We propose Sobolev\-regularized Maximum Mean Discrepancy \(SrMMD\) gradient flow, a regularized variant of maximum mean discrepancy \(MMD\) gradient flow based on a gradient penalty on the witness function\. The proposed regularization overcomes the non\-convexity of the MMD objective and yields provable \\emph\{global\} convergence guarantees in MMD in both continuous and discrete time\. A more surprising appeal is that our convergence analysis does not rely on isoperimetric assumptions on the target distribution\. Instead, it is based on a regularity condition on the difference between kernel mean embeddings\. A key highlight of the proposed flow is that it is applicable in both sampling \(from an unnormalized target distribution\)\-\-\-using Stein kernels\-\-\-and generative modeling settings, unlike previous works, where a gradient flow is suitable for only generative modeling or sampling but not both\. The effectiveness of the proposed flow is empirically verified on a broad range of tasks in both generative modelling and sampling\.

## Trading Sensing for Structure: Sparse IMU\-EMG Fingertip Force Estimation via Neuro\-inspired Structured Modeling

**Authors:** Yang Gao; Yingjing Xiao; Junbin Ren; Chenxu Zhang; Wenbo Zhang; Zhanpeng Jin

**ID:** 155761 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=37ByakECcQ>) | [PDF](<https://openreview.net/pdf?id=37ByakECcQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155761>)

We present a Neuro\-inspired Structured Model \(NiSM\) for fine\-grained finger\-level contact force estimation during dexterous grasping from sparse wearable sensing\. NiSM uses a thumb\-mounted inertial measurement unit \(IMU\) and a single\-channel wrist electromyography \(EMG\) sensor, while deriving grasp context from an IMU\-based hand\-shape latent\. This work studies the trade\-off between sensing density and structural inductive bias: when sensor coverage is limited, inferred grasp context, kinematic coupling, and muscle\-effort modulation can provide useful constraints for force prediction\. Inspired by human sensorimotor control, NiSM organizes computation into complementary pathways: a context\-conditioned feedforward pathway maps thumb kinematics to finger\-specific estimates through sparse learned gating, while an EMG\-conditioned modulation pathway provides effort\-dependent scaling\. By explicitly encoding these structural priors, NiSM reduces reliance on dense sensor arrays and large generic black\-box models\. Evaluations on multi\-user, multi\-object datasets show that NiSM achieves performance competitive with a dense\-sensing reference where comparable dense inputs are available, while using substantially fewer parameters, and is more robust than generic models under limited\-data settings\. These results indicate that structured model design can recover part of the information typically supplied by denser sensing, offering a practical direction for wearable finger force estimation under real\-world deployment constraints\.

## Synaptic Strength Controls Trainability and Structural Stability in Rank\-Deficient RNNs

**Authors:** Fatih Dinc; Edouard Ponnat; Henrik Weyer; Yanin Guerra; Nina Miolane

**ID:** 151225 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bz6Q9nPl9F>) | [PDF](<https://openreview.net/pdf?id=bz6Q9nPl9F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151225>)

Real\-world networks, from biological brains to ecological systems, are typically low\-rank, yet they continue to learn throughout their existence\. Understanding how learning operates in this rank\-deficient regime is essential, but existing theory captures only its limits\. Classical results describe early training in random high\-dimensional networks, while low\-rank theory describes its structured endpoint\. To bridge these regimes, we introduce rank\-deficient RNNs, \\textit\{i\.e\.\}, networks initialized at low rank with fully trainable weights, in which rank and synaptic strength vary independently\. This decoupling reveals that synaptic strength, not rank, primarily governs the learning regime, and that its strong and weak limits confer opposing advantages\. Strong synapses produce rich nonlinear dynamics at initialization, enabling rapid learning that matches full\-rank training speed at low ranks and triples it in gated architectures \(GRUs, LSTMs\)\. Weak synapses, by contrast, distribute computation across the population so that no individual connection is critical, yielding solutions that are structurally stable to neuron loss\. Empirically, the weight changes induced by training consistently follow weak synaptic scaling across four tasks, four architectures, and distinct initializations\. Overall, our findings identify synaptic strength as a central variable controlling both trainability and structural stability in rank\-deficient RNNs\.

## Simple yet Effective Budget\-Feasible Procurement Auctions for Submodular Welfare Maximization

**Authors:** Junxiang Zhang; Qingchun HE; Xinhui Lu; Yaxin Hu; Feng Li; Jing Tang; Kai Han

**ID:** 153083 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=O7BqHB8yE1>) | [PDF](<https://openreview.net/pdf?id=O7BqHB8yE1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153083>)

We study budget\-feasible procurement auctions for social\-welfare maximization under submodular valuations\. In this setting, a buyer with a limited payment budget seeks to procure goods or services from strategic sellers, with the objective of maximizing the buyer's value for the selected sellers minus their true costs\. We propose a simple yet effective single\-round clock auction in which each seller receives at most one price offer\. The mechanism satisfies desirable economic properties, including truthfulness, individual rationality, budget feasibility, and non\-negative auctioneer surplus\. Moreover, it achieves approximation ratios of 8\.52 for monotone submodular valuations, 23\.2 in expectation for non\-monotone submodular valuations, and 24\.52 deterministically for non\-monotone submodular valuations, using only a linear number of value\-oracle queries\. These guarantees improve over the recent independent work of Cui et al\.\~\(ICML 2026\) on the same problem in approximation ratio, value\-oracle complexity, and number of pricing rounds\. Experiments on influence maximization in social networks and crowdsourcing further demonstrate the effectiveness and efficiency of our approach\.

## Resilient Latent Readouts for Long\-Context Question Answering

**Authors:** Jingyi Liao; Wenhao Sun; YITING LI; Zhao Jin; Khin Mi Mi Aung; Xun Xu; Zhuoyi Lin; Rong\-Cheng Tu; Dacheng Tao

**ID:** 148752 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vHe2MR0CGu>) | [PDF](<https://openreview.net/pdf?id=vHe2MR0CGu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148752>)

Long\-context question answering often asks a model to answer from extended documents, multi\-turn dialogues, or persistent histories\. Directly prefilling the full history preserves all observed tokens, but it is expensive and can expose generation to substantial irrelevant or spuriously salient context, which may hinder evidence localization and answer synthesis\. This motivates compact memory interfaces that provide a short, query\-conditioned readout of the history\. Existing systems predominantly instantiate this readout as text, where the reader sees only what was selected and any evidence left out is unrecoverable, leaving the interface fragile to selection errors\. We argue that memory readout has two coupled axes that should be optimized separately: evidential coverage, whether all right support is selected, and inferential resilience, how much answerability remains under imperfect selection\. To jointly address these two axes, we propose LIRA, a latent\-memory reader that exposes full\-prefix contextualized states rather than re\-encoded text\. It amortizes one full\-prefix pass into a reusable latent store; for each query, it localizes candidate positions with calibrated endogenous attention, repairs incomplete support with coverage\-aware planning, and packs selected states into a position\-consistent readout for autoregressive generation\. Across three open\-weight backbones on LoCoMo and Loong, LIRA is the strongest non\-oracle compact\-memory method and surpasses Full Context on 8 of 9 LoCoMo metrics\. When localization misses all supporting evidence, LIRA improves F1 by up to 13\.3 points over a text\-native control with identical positions, suggesting that full\-prefix states preserve answer\-relevant influence discarded by text\-native re\-encoding\.

## Autonomous Continual Learning for Environment Adaptation of Computer\-Use Agents

**Authors:** Tianci Xue; Zeyi Liao; Tianneng Shi; Zilu Wang; Kai Zhang; Dawn Song; Yu Su; Huan Sun

**ID:** 154225 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FHgXFf6vU1>) | [PDF](<https://openreview.net/pdf?id=FHgXFf6vU1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154225>)

Real\-world digital environments are highly diverse and dynamic\. These characteristics cause agents to frequently encounter unseen environments and distribution shifts, making continual learning in such environments essential for computer\-use agents \(CUAs\)\. However, a key challenge lies in obtaining high\-quality and environment\-grounded training data without relying on costly human annotation\. In this work, we introduce \*\*ACuRL\*\*, an \*\*A\*\*utonomous \*\*Cu\*\*rriculum \*\*R\*\*einforcement \*\*L\*\*earning framework that continually adapts agents to specific environments with zero human data\.  The agent first explores an environment to acquire initial experiences\. During subsequent iterative training, a curriculum task generator leverages these experiences together with feedback from the previous iteration to synthesize new tasks tailored for the agent's current capabilities\. To provide reliable reward signals, we introduce CUAJudge, a robust automatic evaluator for CUAs that achieves 93% agreement with human judgments\. Empirically, our method effectively enables both intra\-environment and cross\-environment continual learning, yielding 3–29% absolute performance gains on the target environments without catastrophic forgetting on others\. We also show that it can mitigate performance degradation under environment changes \(e\.g\., version updates, platform migration, and resolution shifts\)\. Further analyses show highly sparse updates \(e\.g\., only 20% parameters\), which helps explain the effective and robust adaptation\.

## A Novel Schur\-Decomposition\-Based Weight Projection Method for Stable State\-Space Neural\-Network Architectures

**Authors:** Sergio Mauricio Vanegas Arias; Lasse Lensu; Fredy Ruiz

**ID:** 151951 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WbOem86LmL>) | [PDF](<https://openreview.net/pdf?id=WbOem86LmL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151951>)

Building black\-box models for dynamical systems from data is a challenging problem in machine learning, especially when asymptotic stability guarantees are required\. In this paper, we introduce a novel stability\-ensuring and backpropagation\-compatible projection scheme based on the Schur decomposition for the state matrix of linear discrete\-time state\-space layers, as well as an alternative pre\-factorized formulation of the methodology\. The proposed methods dynamically project the quasi\-triangular factor of the state matrix's real Schur decomposition onto its nearest stable peer, ensuring stable dynamics with minimal overparameterization\. Experiments on synthetic linear systems demonstrate that the method achieves accuracy and convergence rates comparable to those of state\-of\-the\-art stable\-system identification techniques, despite a marginal increase in computational complexity\. Furthermore, the lower weight count facilitates convergence during training without sacrificing accuracy in stacked neural\-network architectures with static nonlinearities targeting real\-world datasets\. These results suggest that the Schur\-based projection provides a numerically robust framework for identifying complex dynamics on par with the State of the Art while satisfying strict asymptotic\-stability requirements\.

## Flexible Routing via Uncertainty Decomposition

**Authors:** Charlotte Peale; Siddartha Devic; Parikshit Gopalan; Udi Wieder; Aravind Gollakota

**ID:** 149927 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m7fOVAfEEw>) | [PDF](<https://openreview.net/pdf?id=m7fOVAfEEw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149927>)

A key strategy for balancing performance and cost in modern machine learning systems is to dynamically route queries to either a low\-cost model or a more expensive oracle \(such as a large pretrained model or human expert\), an approach known as model routing\. In this work we present a new uncertainty\-aware router that \(1\) avoids unnecessary oracle calls on inherently ambiguous queries, and \(2\) adapts dynamically to different loss functions and cost parameters through simple hyperparameter changes, without retraining\. Our method, applicable to any classification setting where multiple independent annotations per input are available, is based on decomposing total uncertainty into irreducible and reducible components using higher\-order predictors \[Ahdritz et al\., 2025\]\. This enables a unified approach to both routing and abstention: predict with the weak model when uncertainty is low, route to the oracle when reducible uncertainty is high, and abstain when irreducible uncertainty is high\. Our router comes with strong theoretical guarantees bounding regret relative to optimal task\-specific routers\. We conduct experiments on both synthetic and real\-world datasets that demonstrate the benefits of our approach in suitable regimes\-\-\-in particular, whenever reducible and irreducible uncertainty are not too correlated\.

## Agnostic Language Identification and Generation

**Authors:** Mikael Møller Høgsgaard; Chirag Pabbaraju

**ID:** 148502 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xLgXRcC5Wp>) | [PDF](<https://openreview.net/pdf?id=xLgXRcC5Wp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148502>)

Recent works on language identification and generation have established tight statistical rates at which these tasks can be achieved\. These works typically operate under a strong realizability assumption: that the input data is drawn from an unknown distribution necessarily supported on some language in a given collection\. In this work, we relax this assumption of realizability entirely, and impose no restrictions on the distribution of the input data\. We propose objectives to study both language identification and generation in this more general ''agnostic'' setup\. Across both problems, we obtain novel interesting characterizations and nearly tight rates\.

## Code Review Bench: An Automated Benchmark for Evaluating the Software Factory

**Authors:** Ashley Zhang; Narmeen Oozeer; Aleksandr Zverianskii; Daniel Ng; Tasana Pejovic; Antía García; Jacob Clyne; Ravpreet Setia; Akshay Utture; Etan J Ginsberg; Shriyash Upadhyay; Fazl Barez

**ID:** 139002 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rdn1a8ZKqW>) | [PDF](<https://openreview.net/pdf?id=rdn1a8ZKqW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139002>)

As AI agents ship more code with minimal human oversight, code review becomes the critical quality\-control checkpoint — but one without a reliable, objective verifier: review quality is nuanced and ultimately a judgment call by the PR author\. Existing benchmarks are structurally misaligned with this: annotators are third\-party reviewers, like the bots they evaluate, not the PR authors who actually decide what to fix\. They also rely on small, static issue sets that require full re\-evaluation as tools update, limiting how frequently progress can be tracked\. We introduce \*\*CodeReviewBench\*\*, built on a fundamentally different signal: \*revealed developer preferences\* — if a developer acts on a bot's suggestion, we treat it as useful; if they ignore it, we do not\. This signal is mined daily from the public GitHub event stream, yielding 500K\+ judged PRs across 18 tools, and refreshes continuously as tools evolve\. We validate the developer preference against an independent offline benchmark: the two agree on precision rankings and independently detect the same product updates within days of vendor releases\. Together, these form the benchmark\.

## Deep Minds and Shallow Probes

**Authors:** Su Hyeong Lee; Risi Kondor

**ID:** 152977 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OwCwpsL5eB>) | [PDF](<https://openreview.net/pdf?id=OwCwpsL5eB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152977>)

Neural representations are not unique objects\. Even when two systems realize the same downstream computation, their hidden coordinates may differ by reparameterization\. A probe family intended to reveal structure already present in a representation should therefore be stable under the relevant representation symmetries rather than be tied to a particular basis\.  We study this group action in the tractable exact setting of the final readout layer, where equivalent realizations induce affine changes of hidden coordinates\. The resulting symmetry principle singles out a unique hierarchy of shallow coordinate\-stable probes, with linear probes as its degree\-1 member\. We also show that a natural object for cross\-model probe transfer is a shared probe\-visible quotient\-\-the representation modulo directions invisible to the probe family\-\-rather than the full hidden state\. Experiments on synthetic and real\-world tasks support both predictions, showing where degree\-2 probes help beyond linear ones and how quotient\-based transfer enables coverage\-aware monitor portability across model families\. These results point toward a broader geometric representation theory of neural probing, with coverage\-aware monitor transfer as a concrete operational consequence\.

## Raven: High\-Recall Sequence Modeling via Sparse Memory Routing

**Authors:** Arshia Afzal; Aviv Bick; Eric Xing; Volkan Cevher; Albert Gu

**ID:** 152432 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TAeR7iXyQR>) | [PDF](<https://openreview.net/pdf?id=TAeR7iXyQR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152432>)

Long\-context recall in linear\-time sequence models highlights a tradeoff in how they write to memory\. State\-based linear models, such as state\-space models \(SSMs\) and linear Transformers, write densely, updating the entire state for each newly arrived token, which leads to interference and makes specific past tokens hard to recover\. Sliding\-window attention \(SWA\) exhibits the opposite behavior: it writes sparsely by storing explicit token representations, but only within a fixed window, so recall drops once the relevant token is evicted\. Interpolating between these models, we introduce Raven, a linear\-time sequence model that maintains a fixed set of memory slots and, at each step, decays and updates only a selected subset via learned, input\-dependent routing\. This lets Raven mitigate SWA's position\-based overwriting and hard eviction while reducing interference from dense state updates in SSMs, thereby preserving long\-range content much more effectively\. Across recall\-intensive benchmarks, Raven is competitive with or outperforms prior linear\-time baselines, achieving strong long\-context recall where both SWA and SSMs sharply degrade\. It remains effective when extrapolating to context lengths as large as 16x its training length, with similar gains in hybrid architectures\.

## Multiclass Classification with Rare Useful Features: Fundamental Limits and the Optimality of Diversity Pursuit Higher Criticism

**Authors:** Gabriel Moryoussef; Alon Kipnis

**ID:** 152396 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TPIz6lgJZJ>) | [PDF](<https://openreview.net/pdf?id=TPIz6lgJZJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152396>)

We consider classification in high\-dimensional feature spaces where only a vanishing fraction of features are useful and the number of classes may be large\. While this rare\-useful\-feature regime is well understood in the binary setting, its multiclass version raises new questions: a feature can be useful for class discrimination without separating any specific pair of classes\. We focus on a rare feature diversity model, in which most features are useless, but a small fraction promote discrimination among classes in a way that can be detected by a per\-feature diversity test, such as one\-way ANOVA or the Kruskal\-\-Wallis test\. For this setting, we propose Diversity Pursuit Higher Criticism \(DP\-HC\), a feature\-screening procedure that applies a higher\-criticism threshold to the collection of p\-values obtained from per\-feature diversity tests\. We justify DP\-HC under a multiclass rare/weak Gaussian feature model with class\-mean contrasts of fixed magnitude in random directions, extending the binary model of Donoho and Jin \(2008\)\. When the number of classes is fixed, our model recovers the binary phase transition\. When the number of classes grows logarithmically with the number of features, however, we derive a new and strictly harder phase transition, driven by a second\-order variance term that the fixed\-class analysis does not capture\. We show that whenever classification beyond chance is possible, DP\-HC with ANOVA, followed by a simple classifier based on similarity to class means, achieves asymptotically perfect accuracy\. Experiments on real multiclass classification benchmarks demonstrate substantial improvements, and numerical simulations confirm that the derived phase\-transition curve accurately predicts the finite\-sample behavior of DP\-HC in the growing\-class regime\.

## Random\-Effects Centroids for Domain Generalization

**Authors:** Jinyong Jeong; Hyungu Kahng; Seoung Bum Kim

**ID:** 154099 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GFYiUzBsqE>) | [PDF](<https://openreview.net/pdf?id=GFYiUzBsqE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154099>)

Domain generalization methods train on multiple source environments but usually deploy a single pooled predictor\. We study a different deployment object: one head per source environment on a shared representation, combined by fixed weights when the test environment label is unavailable\. Under a same\-meta random\-effects model, where environment\-specific population minimizers are iid deviations around a shared meta\-mean, the optimal fixed simplex rule is the uniform centroid\. The same analysis separates this centroid from pooled ERM: under a common feature second moment, pooled ERM is sample\-weighted, while the centroid is environment\-weighted, giving a closed\-form gap controlled by sample\-weight imbalance\. We introduce REC \(Random\-Effects Centroid\), a training objective that fits source\-specific experts while directly scoring their averaged deployment head\. In the common\-second\-moment case, the centroid term controls the trained\-centroid discrepancy and the dispersion of environment\-specific optima\. Synthetic experiments isolate the population estimator effect and learned\-representation behavior; WILDS experiments show that REC is competitive with established DG baselines and that the centroid term is necessary for a useful averaged predictor\.

## The Symmetries of Three\-Layer ReLU Networks

**Authors:** Johanna Marie Gegenfurtner; Moritz Grillo; Guido Montufar

**ID:** 150294 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jEWygfjB4I>) | [PDF](<https://openreview.net/pdf?id=jEWygfjB4I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150294>)

We develop a framework for analyzing parameter symmetries in deep ReLU networks and obtain a complete characterization of the generic parameter fibers for three\-layer bottleneck architectures\. Our approach provides explicit semi\-algebraic descriptions of these fibers and yields a polynomial time algorithm for deciding functional equivalence of two parameters\. The symmetries include discrete and continuous transformations arising from layer composition, and depend on whether deeper layers hide or preserve geometric structure from preceding layers\. Finally, we show that some of these symmetries induce local conservation laws along gradient flow, while others do not\.

## Neural\-Behavioral Representation of Natural Whole\-body Movement in Monkeys

**Authors:** Jieshi He; Puzhe Li; Yanan Sui; Mu\-ming Poo

**ID:** 155597 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4NRbWa3pJR>) | [PDF](<https://openreview.net/pdf?id=4NRbWa3pJR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155597>)

Understanding how cortical activity represents natural whole\-body behavior in primates remains challenging\. Limited by diversity of movements and inaccessible of large\-scale neural feature programming whole\-body kinematics, previous motor decoding studies rely on constrained tasks and limited limb movements\. Here, we present a neural\-behavioral recording and modeling framework for freely moving monkeys, combining epidural cortical signals from distributed sensorimotor areas with synchronized multi\-view motion capture through a data custom collection platform\. We reconstruct whole\-body monkey kinematics and learn a compact motion prior using an autoregressive encoder\-decoder model\. Conditioned on epidural signals, the model decodes more accurate and realistic full\-body movements without explicit physical constraints\. Our results provides a novel proof\-of\-concept approach for decoding natural whole\-body movements in primates using large\-scale intracranial neural activity\.

## ODEWorld: A Continuous Predictive Architecture via Physical\-Time Flow

**Authors:** Dongxiu Liu; Haoyi Niu; Peng Cheng; Yuan Gao; Xirui Kang; Sangli Teng; Koushil Sreenath; Xianyuan Zhan

**ID:** 149489 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=plec5728e3>) | [PDF](<https://openreview.net/pdf?id=plec5728e3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149489>)

In the physical world we inhabit, space and time are fundamentally continuous\. However, existing machine learning paradigms for world modeling are largely confined to discrete\-time prediction and inference, thereby exhibiting significant inefficiency in capturing the fundamental dynamics of the physical world\. To bridge this gap, we introduce Physical\-Time Flow \(\*\*PT\-Flow\*\*\), a novel approach that learns a continuous latent velocity field operating in physical time\. Crucially, the underlying dynamics of sequential data are parameterized by an ordinary differential equation \(ODE\) embedded in a well\-structured dynamical representation space\. Under this paradigm, the prediction of the future can be recast as temporal integration via an ODE solver in the compressed latent space\. Building upon PT\-Flow, we construct \*\*ODEWorld\*\*, a physics\-grounded, continuous\-time latent world model that is both efficient and versatile\. By extracting time\-variant features and enforcing ODE properties on both the dynamical representation space and the latent velocity field, ODEWorld effectively addresses the long\-standing representation collapse issue in latent world model literature\. This also enables high\-quality image reconstruction with ODEWorld even after long\-horizon prediction\. Moreover, its continuous nature allows for arbitrary temporal resolution and even backward prediction, which is impossible for most discrete\-time models\. Lastly, benefiting from the learned dynamics\-centric latent space, ODEWorld can provide rich planning\-oriented information to facilitate downstream policy learning\. Comprehensive experiments across multiple simulation and real\-world datasets demonstrate that ODEWorld successfully reconciles planning\-conducive dynamics abstraction with visual realism, excelling in both video generation and robotic control\. More qualitative results can be found at \[Project Website\]\(https://anonymous\-submission\-16982\.github\.io/ODEWorld\)\.

## The Aleatoric\-Epistemic Dichotomy of Uncertainty is Meaningful and Indispensable for Machine Learning

**Authors:** Yusuf Sale; Nikita Kotelevskii; Maxim Panov; Eyke Hüllermeier

**ID:** 140101 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CuRV56FVBy>) | [PDF](<https://openreview.net/pdf?id=CuRV56FVBy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140101>)

The quantification of uncertainty, in particular the distinction between aleatoric and epistemic uncertainty, is receiving growing interest in machine learning\. However, both its conceptual meaningfulness and practical usefulness have recently been questioned\. In this paper, we take the position that the dichotomy is conceptually meaningful and indispensable for \(uncertainty\-aware\) machine learning\. In particular, we argue that much of the recent criticism is flawed, either because it targets specific mathematical frameworks for the dichotomy, or because it is based on implicit assumptions that are not implied by the dichotomy itself\. Moreover, we highlight that the dichotomy is indispensable for a broad class of decision\-making problems, where optimal performance provably requires a distinction between reducible and irreducible uncertainty\. Therefore, while existing methodology should certainly be improved further, there is no reason to question the distinction per se\.

## Exact power indices for plurality\-voting ensembles

**Authors:** Ilie Sarpe; Theofanis Georgakopoulos; Aristides Gionis

**ID:** 153108 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Nsz4JjAs2B>) | [PDF](<https://openreview.net/pdf?id=Nsz4JjAs2B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153108>)

Plurality\-voting ensembles aggregate the predictions of multiple base classifiers and output the most voted class, with ties typically broken at random\.  Despite the simple aggregation rule, attributing the impact of each individual base classifier to the ensemble's predictions is far from straightforward\. That is, a single base classifier's impact depends not only on its own predictions but also on how it interacts with the votes of all other models in the ensemble, for example, in resolving ties\.  We address the attribution problem using established tools from cooperative game theory, studying the Banzhaf and Shapley power indices for new games that capture plurality voting and random tie\-breaking, in both binary and multi\\\-class classification settings\. Computing power indices is, in general, exponential in the number of players\. Surprisingly, our methods, collectively named ENPOWER,  enable the \_exact\_ computation of Shapley and Banzhaf values in \_linear time\_ for the binary\-classification setting and in \_low\-degree polynomial time\_ for the multi\-class setting\.  The algorithms in ENPOWER rely on new combinatorial formulations of the Shapley and Banzhaf indices, yielding closed\-form expressions for the binary case and ordinary generating function expressions for the multi\-class case\. We validate empirically the methods in ENPOWER and demonstrate that they are highly efficient, providing attribution values not captured by existing methods\. We further apply the techniques in ENPOWER to: ensemble pruning and prompt\-based ensembling of vision\-language models\.

## Progressive Pseudo\-label Self\-balancing Towards Unsupervised Vision\-Language Models Adaptation

**Authors:** Si Qin; Yaxin Hou; Jiawei Tang; Yuheng Jia

**ID:** 150525 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hTSGBZBZyZ>) | [PDF](<https://openreview.net/pdf?id=hTSGBZBZyZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150525>)

Enhancing Vision\-Language Models \(VLMs\) on downstream tasks with unlabeled data has attracted increasing attention\. Constructing a pseudo\-labeled dataset by pseudo\-labeling is a common method\. Nonetheless, owing to the inherent class\-wise prediction bias in VLMs, they tend to generate long\-tailed pseudo\-labels that are inconsistent with the true label distribution\. Motivated by this, we first divide all classes into pseudo\-head, pseudo\-middle, and pseudo\-tail classes based on the pseudo\-label quantity\. Accordingly, we propose a \*\*P\*\*rogressive \*\*P\*\*seudo\-label \*\*S\*\*elf\-\*\*B\*\*alancing \(PPSB\) framework, which measures the class\-wise prediction bias and calculates quantity upper bounds for certain classes to construct relatively balanced pseudo\-labeled dataset, while introducing fewer incorrect pseudo\-tail labels\. In this way, the class\-wise prediction bias is progressively corrected and the pseudo\-label dataset scale increases autonomously during training\. Furthermore, the confidence scores generated by VLMs are not entirely reliable\. Therefore, we design a neighborhood consistency filtering mechanism and a visual classifier to improve the pseudo\-label accuracy\. We theoretically prove that our method can significantly reduce the generalization error under certain conditions\. Extensive experiments across six benchmarks under three learning paradigms demonstrate that our method outperforms state\-of\-the\-art methods by average \*\*3\.84\*\*% in accuracy\. \*\*Code is available in the supplementary materials\.\*\*

## OS\-Omni: A Cross\-Platform Benchmark for Generalist Computer\-Using Agents

**Authors:** Hui Shen; Yunta Hsieh; Jianing Ma; Ziyuan Liu; Qi Han; Xiuqi Xu; Yanheng shang; Chenqi Yin; Zesen Zhao; Boyuan Zheng; Jisen Li; Xiaoxia Wu; Ruoyan Zhang; Dongfu Jiang; Ruiyao Liu; Jing Xiong; He Xiao; Nan Zheng; Hangxiang Chen; Shengyang Tao; Deyang Luorong; Jingxuan Zhang; Chaofan Tao; Yuren Wang; Jiaqi Mo; Hei Ting Chan; Sicheng Chen; Kai Zhang; Mengkang Hu; Zhongwei Wan; Xin Wang; Chuanyang Zheng; Ziheng Zhang; Hengyuan Zhang; Zunhai Su; Kanzhi Cheng; Jiawei Lu; Yifan Zhang; Shen Yan; Ben Athiwaratkun; Qiushi Sun; Mi Zhang; Ping Luo; Wenhu Chen; Ngai Wong

**ID:** 139359 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UlijzWpwGW>) | [PDF](<https://openreview.net/pdf?id=UlijzWpwGW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139359>)

Computer\-using agents are increasingly expected to complete realistic user goals rather than isolated GUI actions\. However, existing evaluations are fragmented across web, mobile, and desktop settings, making it difficult to measure whether the same agent can sustain long\-horizon workflows across heterogeneous software platforms while preserving final\-state correctness\. We introduce OS\-Omni, a 1,200\-task cross\-platform benchmark and execution environment for evaluating computer\-using agents across Windows, Ubuntu, macOS, iOS, Android, and Web environments\. OS\-Omni provides reproducible initialization, platform\-specific adapters, trajectory logging, and executable final\-state evaluators, and includes controlled service\-backed applications for workflows involving account, cart, budget, calendar, message, and other persistent state\. Human studies show that OS\-Omni tasks require 67\.54 interaction steps, substantially exceeding OSWorld references of 15\.0 steps\. Throughout our experiments, the strongest evaluated agent, GPT\-5\.5, reaches 47\.1% average success, trailing the 88\.1% human reference by 41\.0 points; on hard workflows, it drops from 77\.8% success on easy tasks to 16\.4%, while humans remain at 76\.3%\. These results indicate that current agents remain far from platform\-robust, long\-horizon computer use, especially when success requires sustained state tracking and durable final\-state changes\.

## The Heavy Hitter Oracle: Enhancing Frequency Estimation in Skewed Data Streams

**Authors:** Lisa Schmierer; Ioana\-Oriana Bercea

**ID:** 154975 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9VgqSRdGiR>) | [PDF](<https://openreview.net/pdf?id=9VgqSRdGiR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154975>)

Estimating element frequencies in data streams is a fundamental problem when processing large amounts of data\. Recent approaches suggest learning\-augmented algorithms that can access a heavy\-hitter oracle that knows the most frequent elements\. In this paper, we challenge the idea of these complex oracles: First, we show that heavy\-hitter predictions do not necessarily yield significant efficiency gains in frequency estimation\. We prove that a classical algorithm using slightly more memory, $\\Theta\(B \\log B\)$ instead of $\\Theta\(B\)$, matches the performance of learning\-augmented methods with perfect predictions\. Furthermore, we show that given \(perfect\) predictions, a trivial mechanism achieves the same performance as state\-of\-the\-art learning\-augmented algorithms\. On the algorithmic side, we introduce SpaceR, a single\-pass algorithm that matches the accuracy of existing two\-pass prediction\-based methods without requiring any predictions\. SpaceR uses randomized sampling to identify and track frequent elements in one pass through the data, achieving near\-perfect frequency recovery with minimal memory on both synthetic and real\-world datasets\.

## Uncovering the latent structure of interwoven population and temporal codes

**Authors:** Zachary Friedenberger; Yiwei Cao; Richard Naud

**ID:** 152608 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RqtKLn3TDs>) | [PDF](<https://openreview.net/pdf?id=RqtKLn3TDs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152608>)

Population analysis methods have become standard for navigating the complexity of neural data\. However, these methods often assume a rate code, neglecting information encoded in the precise timing of spikes\. Critically, additional information encoded in bursts of action potentials may be missed\. Here, we develop a factor analysis method that disentangles the factors associated with bursts and individual spikes\. This enables burst codes to be investigated directly from the structure of the data, without requiring external covariates\. We demonstrate that analyzing firing rates alone obscures the latent structure and factors underlying bursts\. Applying our method to simulated and experimental data, we show that it can infer the correct latent structure and be used to test for the presence of burst coding\. By merging the population and burst coding perspectives, we provide a framework for linking changes in bursting to internal variables involved in attention, perception, and learning\.

## From Contexts to Conditionals: Statistical Self\-Consistency of Persona Prompting

**Authors:** Patrik Wolf; Thomas Kleine Buening; Andreas Krause; Celestine Mendler\-Dünner

**ID:** 149804 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nEOU6btAob>) | [PDF](<https://openreview.net/pdf?id=nEOU6btAob>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149804>)

Large language models are increasingly used to estimate uncertain quantities from context, raising the question of whether their probabilistic outputs are internally consistent\. A basic test of self\-consistency is whether these estimates adhere to the law of total probability\. We investigate this requirement through the lens of binary conditioning trees, which recursively partition a population into increasingly fine\-grained subsets and expose multiple ways of estimating the same aggregate quantity\. This construction yields a basic self\-consistency check: marginal estimates must agree with prior\-weighted aggregations of conditional estimates over any partition of the population\. We find that current models systematically violate this requirement\. In a case study on persona prompting, prior\-weighted aggregates are consistently better aligned with human population statistics than direct estimates\. Notably, this benefit of specificity persists even when the prior weights are themselves estimated by the LLM\. Turning this discrepancy into a general evaluation criterion, we propose a family of self\-consistency checks for LLMs grounded in the law of total probability\. By evaluating these checks across frontier models, we show that failures of statistical consistency are widespread and not confined to persona prompting\. Together with a benchmark dataset, our work provides a testbed for understanding when in\-context learning can be treated as conditional inference\.

## Residual Paving: Diagnosing the Routing Bottleneck in Selective Refusal Editing

**Authors:** Bryce Hinkley; Peyman Najafirad

**ID:** 155369 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=69Js4DXoyN>) | [PDF](<https://openreview.net/pdf?id=69Js4DXoyN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155369>)

We study selective refusal editing as a three\-way control problem: induce non\-refusal on designated edit prompts while preserving benign behavior and harmful refusals outside the edit set\. We introduce Residual Paving, a routed residual editing method for frozen instruction\-tuned transformers that separates route selectivity, whether to intervene, from residual\-edit capacity, what edit to apply\. An early\-layer router predicts a scalar gate and expert mixture; when active, prompt\-conditioned bottleneck residual experts apply later\-layer residual updates while leaving the backbone unchanged\. This decomposition supports an oracle\-routing diagnostic where only the learned scalar gate is replaced with the held\-out edit/keep label, leaving the residual editor and frozen backbone fixed\. On the primary Gemma\-3\-4B\-IT held\-out split, learned Residual Paving reduces edit refusal from 88\.6% to 4\.0%, with 95\.5% benign distribution preservation and 87\.3% harmful distribution preservation\. Same\-protocol one\-direction steering controls are much weaker on edit success, leaving edit refusal at 86\.8% for Edit\-target ActAdd and 78\.9% for DIM\-style refusal steering\. The remaining failure is off\-target harmful\-keep degradation: harmful refusal remains below the frozen\-base rate, 65\.3% vs\. 81\.6%\. Across six backbones, oracle routing improves the keep\-side diagnostic score on every reported row, with median gain \+12\.9 pp, supporting the interpretation that learned route selectivity is the main observed bottleneck\. Trajectory diagnostics on two backbones further suggest directed movement toward edit\-target continuations rather than generic refusal suppression\.

## Mixture\-of\-Experts for Online Matrix Completion on a Drifting Union of Subspaces

**Authors:** Renpu Liu; Jing Yang

**ID:** 154027 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GnVVhszcEi>) | [PDF](<https://openreview.net/pdf?id=GnVVhszcEi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154027>)

Many partially observed data streams are globally high\-rank yet locally low\-rank: user–item interactions in recommender systems span multiple preference groups, distinct operating regimes in sensor and network monitoring induce different low\-dimensional structures, and the active latent subspace in adaptive systems shifts over time\. We formalize this as online matrix completion on a drifting union of subspaces: each sample lies in one of K low\-dimensional subspaces, only a random subset of its coordinates is observed, and the subspaces drift across epochs\. We propose MoSAIC \(MoE Subspace Adaptation via Incremental Completion\), a method based on a routed mixture of low\-rank experts trained in two phases\. A base model is first pre\-trained on samples from a fixed source distribution\. It is then adapted on the non\-stationary stream by routing each incoming sample to a single expert and updating only that expert\. Our analysis identifies sufficient conditions under which the router remains correct with high probability throughout learning, while within each epoch the routed experts contract toward the current subspaces at a sublinear rate\. The technical core is a uniform routing concentration argument that converts the random time steps on which each expert is updated into a deterministic time scale, reducing the per\-expert analysis to a tractable stochastic recursion\. Experiments on streams with repeated non\-stationary changes corroborate the theory and show clear improvements over competitive baselines\.

## DeepfakeGenome: Toward Next\-Generation Deepfake Attribution

**Authors:** Shunli Wang; Xinyu Zhou; Yandan Zhao; Wenbin Liang; Taiping Yao; Ke\-Yue Zhang; Zhiyuan Yan; Shouhong Ding; Lizhuang Ma

**ID:** 139410 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SLFrtKUAas>) | [PDF](<https://openreview.net/pdf?id=SLFrtKUAas>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139410>)

In recent years, AIGC technologies are capable of generating hyper\-realistic forged facial images, posing severe threats to facial security safety\. To tackle these challenges, early Deepfake research primarily centered on real\-fake classification\. Recently, growing efforts have been devoted to the Deepfake Attribution \(DFA\) of generated content\. Nevertheless, existing research on Deepfake detection and attribution faces saturated performance in binary classification, limited diversity in datasets and algorithms, and imperfect evaluation protocols, which severely impede practical application\. To address these limitations, we propose a comprehensive deepfake detection and attribution benchmark named DeepfakeGenome \(DFG\)\. It contains 100 facial forgery algorithms and 2M images in total, achieving 4× to 100× larger than prior DFA benchmarks\. We further designed 4 protocols for practical evaluation, including a novel retrieval\-based attribution paradigm\. Unlike previous open\-set evaluation metrics, the proposed retrieval metrics are more aligned with the real\-world active defense situation of blacklist registration mechanisms\. Based on these elaborate designs, we investigate the performance ceiling of deepfake attribution task\. Over 2k\+ experimental evaluations are conducted, and 10 insightful findings are derived\. We hope this work can provide new insights into the DFA research field\.

## Learning Menu\-Based Mechanisms for Truthful Budget\-Feasible Procurement

**Authors:** Peng Chen; Xiang Liu; Hau Chan; Yan Lyu; Xueyong Xu; Weiwei Wu

**ID:** 155310 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6YP5vFsfOv>) | [PDF](<https://openreview.net/pdf?id=6YP5vFsfOv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155310>)

Budget\-feasible mechanisms \(BFMs\) are a fundamental tool for budget\-constrained procurement, but designing strong BFMs remains challenging, particularly for general valuation classes\.  Classical approaches rely on problem\-specific analysis and worst\-case approximations, often yielding conservative mechanisms in practice\. This motivates data\-driven methods for discovering mechanisms with stronger empirical performance\. However, strict budget constraints expose a key limitation of existing neural automated mechanism design \(AMD\):  they either fail to provide exact economic guarantees or suffer from severe scalability bottlenecks\. We propose BFMNet, a scalable menu\-based neural framework for learning truthful budget\-feasible procurement mechanisms\.  BFMNet first learns \*self\-bid\-independent\* menus from market context, ensuring dominant\-strategy incentive compatibility \(DSIC\) and individual rationality \(IR\) by construction, and then applies an ex\-post, instance\-level menu transformation to enforce budget feasibility\.  We prove that the resulting mechanism satisfies exact DSIC, IR, and budget feasibility\.  By avoiding intractable global discretization grids and restrictive Lipschitz constraints, BFMNet remains both expressive and scalable\.  Extensive experiments show that BFMNet improves utility over classical baselines by up to $34\.1$%, remains competitive with state\-of\-the\-art neural baselines that provide only approximate economic guarantees, and scales robustly to larger auction instances\.

## Load Balancing Mixture of Experts with Similarity Preserving Routers

**Authors:** Nabil Omi; Siddhartha Sen; Ali Farhadi

**ID:** 150857 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eqAiBJ58gY>) | [PDF](<https://openreview.net/pdf?id=eqAiBJ58gY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150857>)

Sparse Mixture of Experts \(MoE\) models offer a scalable and efficient architecture for training large neural networks by activating only a subset of parameters \(“experts”\) for each input\. A learned router computes a distribution over these experts, and assigns input tokens to a small subset\. However, without auxiliary balancing mechanisms, routers often converge to using only a few experts, severely limiting model capacity and degrading performance\. Most current load balancing mechanisms encourage a uniform routing probability across experts\. Early in pretraining, this can result in inconsistent routing behavior, resulting in the model spending its capacity learning redundant knowledge\. We address this by introducing a novel load balancing loss that helps preserve relational structure, encouraging consistent expert choices for similar inputs during training\. Our experimental results show that applying our loss to the router results in 36% faster convergence and lower redundancy compared to a popular load balancing loss\.

## Cross\-Domain Knowledge Separation and Positive Transmission for Noisy Domain Incremental Learning

**Authors:** Kunlun Xu; Zhengyuan Cai; Jiahuan Zhou

**ID:** 152725 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QpRuEc6Iem>) | [PDF](<https://openreview.net/pdf?id=QpRuEc6Iem>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152725>)

Domain Incremental Learning \(DIL\) aims to continuously adapt to new domains while retaining the knowledge of previous domains\. Existing DIL methods are generally built upon an idealized assumption of clean supervision\. However, real\-world data streams are often affected by label noise, giving rise to the more challenging Noisy Domain Incremental Learning \(N\-DIL\) scenario\. Under this setting, not only is intra\-domain knowledge acquisition hindered, but inter\-domain knowledge conflicts are also exacerbated, which amplifies catastrophic forgetting\. To address these challenges, we propose a novel Cross\-Domain Knowledge Separation and Positive Transmission \(ST\-Prompt\) framework\. Specifically, to mitigate inter\-domain knowledge conflicts, a Cross\-domain Prompt Knowledge Contrastive Isolator is developed to enhance domain\-wise knowledge separation, thereby mitigating the cross\-domain knowledge interference during inference\. Furthermore, to improve intra\-domain knowledge acquisition, a Synergistic Knowledge Transmission scheme is introduced, which extracts reliable knowledge from previous domains to facilitate noisy data learning in the current domain\. These two components are mutually reinforcing, jointly promoting effective cross\-domain knowledge learning and utilization\. Extensive experiments on diverse benchmarks demonstrate that ST\-Prompt achieves state\-of\-the\-art performance\. Our code will be released\.

## Fast Sandwich Products in Clifford Algebra

**Authors:** Travis Pence; Daisuke Yamada; Jiaqi Mo; Chanyoung Moon; Karthikeyan Sankaralingam; Vikas Singh

**ID:** 149383 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qRvZDh6s22>) | [PDF](<https://openreview.net/pdf?id=qRvZDh6s22>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149383>)

Clifford algebra is becoming increasingly common in machine learning, e\.g\., in neural operators, equivariant transformers, and structured linear layers\. The main appeal is that scalars, vectors, oriented planes, volumes, and higher\-grade quantities live together in a single algebraic space\. In this setting, rotations are represented by \\emph\{rotors\}, which are parametrized by bivectors, with only $\\binom\{n\}\{2\}$ degrees of freedom\. Most Clifford algebra\-based models work only with small algebras, in part because of a bottleneck in the sandwich product, $x \\mapsto r x r^\\dagger$, a basic operation for applying rotations to multivectors\. It is evaluated through geometric products or via a full action matrix, both of which scale poorly with the $2^n$\-dimensional Clifford basis\. We ask whether the $\\binom\{n\}\{2\}$\-parameter description can be carried all the way through application, and show that the answer is yes\. The sandwich action decomposes grade\-wise into exterior powers of the induced vector rotation\. We factor this vector rotation into Givens rotations and apply their lifted actions as sparse updates on pairs of blades\. The resulting algorithm never needs to form the rotor coefficients or the $2^n \\times 2^n$ action matrix\. Empirically, our algorithm achieves up to $64 \\times$ wall\-clock and $35\\times$ memory improvements over existing rotor\-sandwich implementations, enabling rotor\-based layers at scales previously out of reach\.

## Are Agents Ready to Teach? A Multi\-Stage Benchmark for Real\-World Teaching Workflows

**Authors:** Zixin \(Steven\) CHEN; Peng Liu; Rui SHENG; Haobo Li; Jianhong Tu; Deng Xiaodong; KaShun SHUM; Dayiheng Liu; Huamin Qu

**ID:** 139079 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mTPfMFHAm7>) | [PDF](<https://openreview.net/pdf?id=mTPfMFHAm7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139079>)

Language agents are increasingly deployed in complex professional workflows, with tutoring emerging as a particularly high\-stakes capability that remains largely unmeasured in existing benchmarks\. Effective tutor agents require more than producing correct answers or executing accurate tool calls: a robust tutor must diagnose learner state, adapt support over time, make pedagogically justified decisions grounded in educational evidence, and execute interventions within realistic learning\-management systems\. We introduce EduAgentBench, a source\-grounded benchmark for holistically evaluating tutor agents across the full scope of teaching work\. It contains 150 quality\-controlled tasks across three capability surfaces: situated multi\-turn tutoring, professional pedagogical judgment, and Canvas\-style teaching workflow completion\. Tasks are constructed through a pedagogical\-insight\-driven pipeline and evaluated with complementary verification signals and human review\. Across a comprehensive evaluation of frontier models, our findings reveal that current models are generally capable of bounded pedagogical judgment, but still fall short of professional teaching standards in situated tutoring and autonomous teaching\-workflow execution\. To our knowledge, EduAgentBench is the first theory\-grounded and realistic benchmark for evaluating the holistic teaching capability of tutor agents, providing a measurement foundation for developing future tutor agents that can support realistic teaching work\.

## Freeing the Law with LOCUS: A Local Ordinance Corpus for the United States

**Authors:** Denis Peskoff; Joe Barrow; Christopher Vu; Diag Davenport

**ID:** 139157 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hii6QXh91j>) | [PDF](<https://openreview.net/pdf?id=hii6QXh91j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139157>)

Progress in legal AI increasingly depends on access to authoritative legal text at scale\. Yet one of the most consequential layers of American law remains largely absent from existing machine\-readable corpora: local ordinances\. Local codes govern zoning, housing, business licensing, public health, noise, animal control, and many other domains of everyday regulation, but they are fragmented across vendor platforms designed for human browsing rather than bulk research access\. We introduce LOCUS—the Local Ordinance Corpus for the United States—a comprehensive corpus and county\-harmonized access layer for U\.S\. municipal and county ordinance codes\. The raw corpus, available for release to researchers, represents nearly all publicly available municipal and county ordinance codes\. The resulting raw corpus contains codes from 9,239 cities and counties\. A smaller county\-harmonized LOCUS access layer provides coverage for the largest 2,309 of 3,144 U\.S\. counties, accounting for a majority of the population\.  We use OCR to handle the myriad of document formats that have kept the law from being a public resource\. We release the corpus with coverage metadata to support reproducibility, downstream legal AI research, and the incremental expansion of machine\-readable access to local law\. We train a collection of ModernBERT\-based classifiers and scorers to facilitate analyzing U\.S\. local law among several dimensions, such as opacity and paternalism, that have not previously been studied at this scale\.

## Constant Term Shrinkage for Federated Learning

**Authors:** Incheol Baek; Minseo Kim; Hyeonmin Kang; Yon Dohn Chung

**ID:** 152366 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TawbVu1x6Q>) | [PDF](<https://openreview.net/pdf?id=TawbVu1x6Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152366>)

Federated Learning \(FL\) enables collaborative model training without centralizing private data, but its performance often degrades under data heterogeneity because local updates become biased toward client\-specific data characteristics\. In this paper, we propose Constant Term Shrinkage for Federated Learning \(FedCTS\)\}, a simple server\-side aggregation method designed to mitigate such update drift\. FedCTS decomposes each client update into a constant term and a residual term\. We show that the constant term is strongly affected by data heterogeneity\. FedCTS therefore evaluates the reliability of the constant term and adaptively shrinks the unreliable constant term toward zero while leaving the residual term unchanged\. The shrinkage strength is obtained in closed form from clients' update statistics, without requiring an additional tuning hyperparameter\. Experiments across multiple datasets and FL algorithms demonstrate that FedCTS improves robustness under heterogeneous data with negligible additional computation, no extra communication overhead, and strong compatibility with existing FL techniques\.

## Revisiting Autoregressive GCNs for Vehicle Routing Problems

**Authors:** Zhipeng Zhong; Junquan Huang; Yu Huang; Boyuan Zheng; Jungang Li; Zihao Dongfang; Song Dai; Xuming Hu; Zong\-Gan Chen

**ID:** 152174 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V04eOEx3v2>) | [PDF](<https://openreview.net/pdf?id=V04eOEx3v2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152174>)

Autoregressive \(AR\) Attention Models have become the dominant paradigm in neural solvers for vehicle routing problems \(VRPs\), while GCNs are almost exclusively paired with non\-autoregressive \(NAR\) decoding and post\-search algorithms\. In this work, we revisit the role of decoding strategies and model properties in neural VRP solvers, and challenge the conventional pairing of NAR decoding with GCNs\. We propose AR\-GCN, an efficient and generalizable architecture for both Symmetric and Asymmetric VRPs \(SVRPs and AVRPs\)\. Extensive benchmarks across multiple tasks show that AR\-GCN achieves advanced generalization performance, particularly on AVRPs \(\*e\*\.\*g\*, achieving an optimality gap of \*\*1\.71%\*\* on ATSP\-1K and \*\*\-4\.46%\*\* on ACVRP\-1K\)\. In particular, AR\-GCN requires only \*\*0\.633M\*\* learnable parameters and \*\*3\-epoch\*\* training, providing new insights into the design of AR solvers for general VRPs\.

## Orthros: Phase\-Aware Heterogeneous Attention for Efficient Transformers

**Authors:** Yuhong CHOU; Zehao Liu; Yuqi Pan; Qian Liu; Xianwei Chen; Jibin Wu

**ID:** 154037 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ggocm0VXS9>) | [PDF](<https://openreview.net/pdf?id=Ggocm0VXS9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154037>)

Efficient attention mechanisms, such as linear and sliding window attention, aim to reduce the computational complexity of Transformers from quadratic to linear\. However, their degraded in\-context recall often necessitates interleaving full attention layers, leaving the quadratic bottleneck unresolved in long\-context processing\. To address this, we introduce Orthros attention, which shifts the efficiency paradigm from structural allocation to phase\-aware decoupling\. As a unified module, it dynamically switches its computation pattern across different phases of sequence processing, enabling linear complexity prefilling and full attention decoding\. Our design grants Orthros attention a lower asymptotic complexity compared to vanilla Transformers in prevalent long\-context scenarios characterized by heavy prefilling and light decoding\. Beyond theoretical formulation and complexity analysis, extensive empirical evaluations demonstrate Orthros's superiority across multiple dimensions\. First, we validate its fundamental language modeling capabilities, demonstrating scalability across varying model sizes and strong competitiveness in comprehensive architectural comparisons\. Second, Orthros exhibits exceptional conversion feasibility via a data\-efficient Transformer\-to\-Orthros conversion, yielding performance that even surpasses the original Transformer\. Finally, Orthros achieves a remarkable $21\.9\\times$ prefilling speedup over Transformers while avoiding the degradation issues typical of traditional efficient attention mechanisms, evidenced by near\-perfect 128K needle\-in\-a\-haystack results and performance on par with strong Transformer baselines on real\-world in\-context recall tasks\. Overall, these advantages in high\-performance, flexibility, and efficiency position Orthros as a compelling industrial successor to the Transformer\.

## VAMIRec: Value\-Aware Memory Intervention for Continual Recommendation

**Authors:** Xudong Zhao; Xiaolong Xu; Haolong Xiang; Xiaoyu Xia; Jiaqiang Zhang; Xuyun Zhang; Lianyong Qi; Wanchun Dou; Amin Beheshti

**ID:** 149952 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lxpE4SEnvz>) | [PDF](<https://openreview.net/pdf?id=lxpE4SEnvz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149952>)

Continual recommendation captures dynamic user interests amid sequential interactions, enabling models to adapt to new observations while preserving prior valuable knowledge\. Existing continual recommendation methods primarily preserve or reuse historical knowledge through replay, distillation, or regularization to mitigate forgetting during incremental updates\. However, noisy or obsolete inherited representations render indiscriminate preservation detrimental by inducing memory conflicts with current stage preferences\. Moreover, rapid shifts in user interests require timely and selective memory updates, while coarse global mechanisms fail to provide such fine\-grained responsiveness\. To address these issues, we propose VAMIRec, a value\-aware memory intervention framework for continual recommendation\. VAMIRec first constructs a memory state by separating inherited user memory into a slow anchor component and a fast\-changing drift component\. We further design a value\-aware action evaluation module to generate three candidate operations, and estimate conservative action values by accounting for uncertainty and intervention cost\. Finally, we develop a policy\-guided memory intervention module that distills the training\-time action supervision into an inference\-safe policy and applies the selected memory action before all\-item ranking\. Extensive experiments on three real\-world datasets demonstrate that VAMIRec consistently outperforms the state\-of\-the\-art baselines\.

## Beyond IID: How General Are Tabular Foundation Models, Really?

**Authors:** Lennart Purucker; Andrej Tschalzev; Nick Erickson; David Holzmüller; Alan Arazi; Alexander Pfefferle; Mustafa Tajjar; Gioia Blayer; Gael Varoquaux; Frank Hutter

**ID:** 139490 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mk0ohjszwO>) | [PDF](<https://openreview.net/pdf?id=Mk0ohjszwO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139490>)

Foundation models for predictive machine learning on tabular data have recently gained significant traction in academia and industry\. Research communities across disciplines are increasingly evaluating tabular foundation models on diverse datasets and tasks\. However, these task\- and discipline\-specific evaluations remain largely inaccessible to model researchers because benchmark software and evaluation protocols are fragmented\. As a result, model researchers rely on standard benchmarks, which are mostly defined for tasks where tabular foundation models already excel\. The most challenging scenarios are excluded, limiting meaningful progress in the field by focusing on marginal improvements on IID data rather than on broader, more demanding challenges\. To overcome this, we introduce BeyondArena, the first unified holistic benchmark for tabular data that supports diverse task types \(IID, temporal, grouped\), across sample size and feature dimensionality scales, with diverse feature types \(with text, with high cardinality\) from a broad range of disciplines\.  To enable unified benchmarking beyond standard benchmarks, we introduce DataFoundry, a Python framework and metadata schema for curating tabular datasets for predictive machine learning\. Our results across 11 models and 142 curated datasets show that existing tabular foundation models excel on tiny\- to medium\-sized IID data, while traditional tree\-based and deep learning models still dominate on non\-IID, large, and high\-dimensional datasets\. BeyondArena guides model research for the most demanding challenges in tabular data, enabling progress towards truly foundational tabular models\.

## SWE\-Crafter: Scaling Executable Multilingual Software Engineering Data with Meta\-Skill Agents

**Authors:** Shukai Liu; Jian Yang; Bo Jiang; Junhang Cheng; Haowen Wang; Xiao\-Hui Li; Xianglong Liu

**ID:** 155568 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4d6qyCWuBH>) | [PDF](<https://openreview.net/pdf?id=4d6qyCWuBH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155568>)

Software\-engineering agents are increasingly expected to solve realistic repository\-level tasks, but their training remains constrained by the limited availability of executable supervision beyond Python\-centric repositories\. Building such data across programming languages is difficult: repositories use different build systems, dependency managers, runtime assumptions, test interfaces, and failure modes, so separate language\-specific pipelines are costly to reproduce and extend\. We introduce SWE\-Crafter, a unified agent\-based framework for constructing executable multilingual SWE instances\. SWE\-Crafter keeps candidate mining, environment synthesis, fail\-to\-pass validation, and trajectory distillation in a shared pipeline, while language\-specific construction knowledge is supplied through extensible skills induced from repository\-level experience\. These skills guide repository exploration and test\-command synthesis while preserving repository\-local evidence from documentation, manifests, CI files, and execution feedback as the final source of truth\. Applying SWE\-Crafter to eight programming languages yields 50,926 validated instances from 9,296 repositories and 68,851 distilled test\-passing trajectories\. Supervised fine\-tuning on this resource produces SWE\-Crafter\-40B, which achieves 61\.0% on SWE\-bench Multilingual and 77\.2% on SWE\-bench Verified, showing that skill\-guided construction provides scalable multilingual supervision for repository\-level SWE agents\.

## FC\-DGCN: Deep Graph Convolutional Network for Face Clustering and Recognition

**Authors:** Ling Ding; Di Jin; Zhizhi Yu; Liang Yang; Dongxiao He

**ID:** 155019 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=99QeLhDZQG>) | [PDF](<https://openreview.net/pdf?id=99QeLhDZQG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155019>)

Face recognition has achieved strong performance, but further gains often require much larger labeled datasets, making annotation costly\. This motivates the use of unlabeled data, where face clustering is important for applications such as annotation and recognition\. Recent GCN\-based methods have shown promising results on affinity graphs, but balancing clustering quality and scalability on large\-scale data remains challenging\. To solve this problem, we propose FC\-DGCN, a face clustering framework based on deep residual GCNs\. The proposed method formulates clustering on an affinity graph through two complementary tasks: node confidence estimation and edge connectivity estimation\. Specifically, we develop DGCN\-V to estimate node confidence on the global graph and DGCN\-E to estimate edge connectivity on local subgraphs\. To better characterize the local cluster structure, we further revise the confidence\-estimation target\. Based on these two modules, FC\-DGCN links each node to a higher\-confidence neighbor with strong predicted connectivity, which naturally induces identity\-consistent clusters\. Experiments on MS\-Celeb\-1M show that FC\-DGCN outperforms competitive baselines in Pairwise F\-score and BCubed F\-score while remaining computationally practical\. Moreover, the clusters generated by FC\-DGCN provide effective pseudo labels for low\-label face recognition, leading to substantial improvements on MegaFace and IJB\-A\.

## Refinement as a Service: Algorithmic Predictor Refinement

**Authors:** Wei Tang; Hanrui Zhang

**ID:** 148717 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vZ2M528GrC>) | [PDF](<https://openreview.net/pdf?id=vZ2M528GrC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148717>)

Prediction aggregation aims to combine information from multiple predictors into a more informative one\. We study this question in the setting of calibrated predictors, where each prediction must equal the conditional expectation of the quantity being predicted given the predictor's signal\. Given several calibrated input predictors and the feature distribution, but not the underlying Bayes probabilities, we ask when one can construct refined calibrated predictors that preserve the information in the original predictors and cannot be further refined using the available information\. We formulate calibrated predictors as signaling schemes and define refinement through feature\-independent garblings: a predictor refines another if its signal can simulate the other's signal\. Constructibility is characterized through observable linear information: each signal corresponds to a vector over the feature space, and a new signal is constructible exactly when its vector lies in the linear span of the input signal vectors\. Under this formulation, we establish a sharp algorithmic picture\. For deterministic output predictors, bilateral refinement admits a polynomial\-time algorithm based on a bipartite graph between the two input signal partitions, while refinement with an arbitrary number of input predictors is $\\mathsf\{NP\}$\-hard\. In contrast, when randomized output predictors are allowed, we give a polynomial\-time algorithm for any number of input predictors by decomposing constructible signal vectors into extreme rays of the associated polyhedral cone\.

## Baba in Wonderland: Online Self\-Supervised Dynamics Discovery for Executable World Models

**Authors:** SeungWon Seo; DongHeun Han; SeongRae Noh; Hyeongyeop Kang

**ID:** 150860 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eodh5zWHvN>) | [PDF](<https://openreview.net/pdf?id=eodh5zWHvN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150860>)

Executable world models can be read, edited, executed, and reused for planning, but only if the program captures the environment's transition law rather than semantic shortcuts in its surface vocabulary\. We study online executable world\-model learning under prior misalignment, where an agent must induce state\-dependent dynamics from interaction evidence alone, without rule descriptions, reward signals, or trustworthy lexical priors\. We introduce Alice, a closed\-loop system that treats failed candidate updates as structural signal: when a candidate explains a new transition but loses previously explained ones, the preservation conflict reveals dynamics that the current program had conflated\. Alice refines these conflicts into hypothesis classes that both provide compact, class\-stratified preservation counterexamples for update and guide frontier exploration toward transitions that are novel and underrepresented with respect to the current program\. We evaluate Alice on Baba in Wonderland, a prior\-misaligned variant of Baba Is You that preserves simulator dynamics while replacing semantically meaningful rule\-property labels with unrelated words\. Experiments show that Alice substantially improves executable world\-model learning under prior misalignment, and ablations show that both class refinement and class\-aware exploration contribute\.

## Learning\-Augmented Streaming Algorithms for Approximating Boolean Max\-CSPs

**Authors:** Yinhao Dong; Pan Peng; Ali Vakilian; Santhoshini Velusamy; Xiaoyang Xu

**ID:** 153162 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NPehLMoqhN>) | [PDF](<https://openreview.net/pdf?id=NPehLMoqhN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153162>)

We study learning\-augmented streaming algorithms for estimating the value of Boolean Maximum Constraint Satisfaction Problems \(Max\-CSPs\)\. Specifically, we consider streaming algorithms equipped with an $\\varepsilon$\-accurate oracle: for each variable, the oracle outputs a label in $\\\\\{\-1,1\\\\\}$ that agrees with a fixed optimal assignment with probability $1/2\+\\varepsilon$, and disagrees otherwise\. Prior work by Dong, Peng, and Vakilian \[2025\] showed that, for the special case of Max\-Cut, such an oracle enables a $\(1/2\+\\Omega\(\\varepsilon^2\)\)$\-approximation using $\\operatorname\{poly\}\(1/\\varepsilon\)$ words of space in insertion\-only streams, and $\\operatorname\{poly\}\(1/\\varepsilon,\\log n\)$ words of space in dynamic streams\. We substantially generalize and strengthen their result, provided that a highly accurate estimate of $\\varepsilon$ is available\. For any Boolean Max\-$2$CSP and any $\\eta&gt;0$ independent of $\\varepsilon$, we obtain, with high constant probability, a single\-pass $\(1\-\\eta\)$\-approximation using $\\operatorname\{poly\}\(1/\\varepsilon,1/\\eta\)$ words of space in insertion\-only streams, and $\\operatorname\{poly\}\(1/\\varepsilon,1/\\eta,\\log n\)$ words of space in dynamic streams, where $n$ is the number of variables\. We further extend our techniques to general Boolean Max\-$k$CSPs for $k\\ge 3$, with slightly worse space complexity\.

## KernelDNA: Cross\-Layer Kernel Sharing via Decoupled Neural Adapters

**Authors:** Yadong Zhang; Haiduo Huang; Yinghui Xu; Tian Xia; Wenzhe zhao; Pengju Ren

**ID:** 153535 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KcsqIfrqpw>) | [PDF](<https://openreview.net/pdf?id=KcsqIfrqpw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153535>)

Dynamic convolution improves the representational flexibility of CNNs by generating input\-adaptive kernels, yet existing methods either inflate parameters linearly with the number of base kernels or sacrifice inference throughput due to runtime kernel assembly\. We revisit dynamic convolution from the angle of cross\-layer redundancy: a CKA analysis across modern CNN families shows that within\-stage convolutional kernels are highly correlated, suggesting that an entire stage can be reparameterized by a single shared kernel together with lightweight, layer\-specific transformations\. Building on this observation, we propose KernelDNA, a parameter\-efficient framework in which multiple convolutional layers in a stage share one ''parent'' kernel, while layer\-specific ''child'' kernels are produced by a \\textit\{decoupled\} adapter that splits modulation into \(i\) an input\-dependent dynamic channel gate and \(ii\) static spatial and filter modulations that can be pre\-fused into the parent kernel before deployment\. We provide a theoretical justification grounded in tensor approximation: when two kernels have CKA similarity $\\ge 1 \- \\delta$, the multiplicative adapter incurs a Frobenius approximation error $O\(\\sqrt\{\\delta\}\)$, and the implicit gradient consensus across child layers provably reduces the Rademacher complexity of the hypothesis class\. Across ImageNet\-1K and MS\-COCO, KernelDNA achieves state\-of\-the\-art accuracy\-efficiency trade\-offs over diverse backbones \(ResNet18/50, MobileNetV2, ConvNeXt\-Tiny\), reducing parameters by $1\.2$\-$5\\times$ versus dynamic convolution baselines while retaining $90$\-$99$ % of the standard\-convolution throughput\-\-\-outperforming KernelWarehouse and FDConv across all backbones, and ODConv on $4$ of $5$ settings at a fraction of its parameter count\.

## TransMem: Transition\-Aware Retrieval for Evolving Personal Memory

**Authors:** Shigeng Chen; Linhao Luo; Changlong Shi; Zhangchi Qiu; Shirui Pan

**ID:** 149447 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q1I1T0tsdw>) | [PDF](<https://openreview.net/pdf?id=q1I1T0tsdw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149447>)

Long\-term personalized agents are increasingly expected to answer queries over user histories in which preferences, goals, and constraints evolve across interleaved conversations\. Existing retrieval\-based and structured\-memory systems can surface relevant facts, but often return isolated memory units that do not explain which earlier preference was refined, contradicted, or superseded by later evidence\. We introduce TransMem, a transition\-aware memory retrieval framework that stores preference updates as explicit retrieval units alongside ordinary factual memories\. During memory construction, TransMem routes user interaction history into topic\-structured memory graphs, detects shift events, and grounds them as transition records\. At inference time, TransMem first retrieves factual anchors and then adaptively expands over transition records, producing a compact context of factual anchors and accepted transition records\. Experiments on PersonaMem and PersonaBench across two Qwen backbones show that TransMem outperforms representative retrieval\-based and structured\-memory baselines\. Controlled analyses further show that transition records and adaptive expansion contribute beyond factual anchoring, chronological expansion, flat transition retrieval, and fixed\-hop traversal\. These results suggest that preference\-update records are useful retrieval units for long\-term personalization\.

## Exact Topological Compliance: Generating Persistence\-Equivalent Graphs

**Authors:** Mattie Ji; Indradyumna Roy; Vikas Garg

**ID:** 148463 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xcQkqD4abA>) | [PDF](<https://openreview.net/pdf?id=xcQkqD4abA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148463>)

Persistent homology summarizes the topological evolution of a graph as persistence diagrams \(PD\)\. Generating graphs whose topology matches a target descriptor is increasingly important, yet existing topology\-aware generative models rely on soft regularization, producing graphs whose PDs may only be approximately similar\. We initiate a principled investigation of the generation problem: produce graphs that realize a target PD exactly\. We propose two approaches guided by the implicit local and global constraints a target PD imposes\. The local approach builds degree\-based PD\-equivalent graphs iteratively, and we prove that every output realizes the target PD and that every degree\-based PD\-equivalent graph is reachable\. However, as shown thereafter,  local generation necessarily trades off between sample diversity and reaching infeasible states\. We therefore recast generation as a global constraint satisfaction problem with a complete encoding solvable by modern constraint programming solvers\. This is applicable to any vertex\-based permutation equivariant filtration scheme and is minimal under the  degree filtration\. Experiments on four standard graph generation benchmarks confirm that both methods realize the target PD exactly\.  Together, our methods provide the first principled treatment of strict topology\-compliant graph generation\.

## SQUEEZE: Preserving Homeomorphism and Smooth in Higher\-Dimensional Flows

**Authors:** Wangzi Yao; Yue Sun; Rongmin Chen; Honglie Wang; Jian Zhang; Tielin Zhang

**ID:** 153360 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Lwc4kfLQPl>) | [PDF](<https://openreview.net/pdf?id=Lwc4kfLQPl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153360>)

Rectified flow \(RF\) is motivated as optimizing the velocity field through trajectory crossings\. However, this explanation contradicts prior work showing that exact crossings cannot occur, when the dimension exceeds 2 and the source and target distributions are continuous\. We revisit this question and make three contributions\. 1\) By relaxing the geometric definition of a crossing, we prove that \*\*\*crossings can then occur, though their probability still drops rapidly with dimension\*\*\*\. 2\) As a consequence, we observe \*\*\*the homeomorphism of RF breaking down in high dimensions\*\*\*\. This effect is hard to notice, and coloring serves as a useful indicator\. 3\) To address this breakdown, we propose \*\*\*Squeeze\*\*\*, which corrects trajectories within the principal subspace of transport before lifting them back to the original space, thereby restoring smoothness and homeomorphism\. Experiments confirm our analysis and show that \*\*\*Squeeze alleviates the high\-dimensional breakdown\*\*\*\.

## Memory is Not Search: Towards Proactive, Lifelong Memory in AI

**Authors:** Will Xiao; Sanket Deshpande; Guha Mahesh; Spandan Madan; Gabriel Kreiman

**ID:** 140078 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MyPa2RvJUN>) | [PDF](<https://openreview.net/pdf?id=MyPa2RvJUN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140078>)

Memory is a foundational cognitive function for any artificial or biological intelligent system\. Current AI approaches to long\-term memory treat it as a problem largely of data storage, summarization, and search\. Drawing inspiration from cognitive science and neuroscience, this position paper argues that search is insufficient for memory\. Instead, memory requires distinct computational mechanisms that can proactively recall information\. We analyze the specific limitations of current AI memory approaches and highlight the core requirements needed to achieve proactive, lifelong memory\. Building AI systems with human\-level lifelong memory will require new datasets, appropriate evaluation methods and benchmarks, and novel algorithms\.

## RoLL: Robust Low\-Rank Learning via Nesterov Momentum

**Authors:** Zhaojun Hu; Wenchen Liu; Ting Wei; Biao Mei; Yifan Sun

**ID:** 155910 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1vfdVbtisd>) | [PDF](<https://openreview.net/pdf?id=1vfdVbtisd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155910>)

In modern multivariate problems, exploiting the low\-rank structure of the coefficient matrix serves as a powerful dimension reduction strategy to enhance statistical efficiency and interpretability, but its effectiveness can be severely compromised by outliers\. In this work, we propose a robust low\-rank learning \(RoLL\) framework for a broad range of loss functions, implemented via a fast algorithm that exploits local restricted strong convexity\. Theoretically, we establish non\-asymptotic error bounds for the obtained fixed\-point estimator \(not necessarily the global or local optimum\), showing that it achieves the minimax optimal rate\. Furthermore, we develop a novel information criterion with finite\-sample theoretical guarantees for model selection\. Extensive experiments demonstrate the effectiveness of our proposed framework in the presence of data anomalies\.

## Position: Machine Learning Conferences Should Introduce an Autonomous Research Track

**Authors:** Arjun Prakash; Amy Greenwald; Nora Ayanian

**ID:** 140103 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CKNdkXRRKD>) | [PDF](<https://openreview.net/pdf?id=CKNdkXRRKD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140103>)

Autonomous machine learning research is moving from a speculative possibility to an emerging research practice\. Yet, current conference policies are not equipped to handle this change\. This position paper argues that machine learning conferences should introduce an Autonomous Research Track where an autonomous AI system controls claim\-shaping decisions\. However, to ensure that conferences continue to exist for both science and scientists, our proposal anchors this new track in human judgment and participation\. First, we propose a hierarchy of AI involvement from incidental AI use to autonomous research, grounded in the CRediT taxonomy of research contributions\. In keeping with current conventions, we assert that authorship remain exclusively human while recognizing that the role of author may shift to one of curation of autonomously generated research\. We propose a novel review format that separates verification and adjudication: human authors submit a technical review to guarantee accountability, an AI\-generated review provides a critical baseline, and a pair of human reviewers evaluate the work's technical correctness and significance\. We then propose a discussant\-style conference format, where both a human author and a human reviewer present the accepted research\. This design assigns visible credit to human participants for thoughtful evaluation and judgment, which is essential for both scientific excellence and maintaining a sense of community\.

## Explanation Multiplicity in SHAP: Characterization and Assessment

**Authors:** Hyunseung Hwang; Seungeun Lee; Lucas Rosenblatt; Steven Whang; Julia Stoyanovich

**ID:** 139691 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ANaxIH1evO>) | [PDF](<https://openreview.net/pdf?id=ANaxIH1evO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139691>)

SHAP explanations are widely used in high\-stakes settings to justify decisions, yet they can differ substantially across repeated runs, even when the model, the input instance, and the prediction are held fixed\. Prior work has documented disagreement \*between\* explanation methods; we show that substantial disagreement arises even \*within\* SHAP across reruns of the same estimator on the same trained model and instance\. We call this phenomenon \*explanation multiplicity\* and develop an evaluation methodology for characterizing it under deployment\-realistic computational budgets, combining a dual\-seed protocol that disentangles model\-induced from explainer\-induced variability, a hierarchy of magnitude\-, rank\-, and set\-based metrics, and randomized Dirichlet and Mallows null models that calibrate when observed disagreement exceeds chance\.  Across multiple datasets, model classes, and sampling strategies, we find that explanation multiplicity is pervasive and persists even for high\-confidence predictions\. The dominant source depends on the data regime: model\-induced variability dominates in small\-data settings, while explainer\-induced variability dominates at scale\. Commonly used $\\ell\_2$ distance is largely insensitive to this instability, while rank\-based metrics reveal severe reordering of top\-ranked features\. Improved sampling methods such as CTE do not eliminate rank\-level multiplicity, and deterministic alternatives such as K\-Means achieve stability only by targeting a different estimand that diverges sharply from Shapley values defined against the empirical training distribution\. Practitioners should treat single\-run SHAP outputs as realizations of a distribution rather than as authoritative artifacts\.

## Density\-Ratio Losses for Post\-Hoc Learning to Defer

**Authors:** Alexander Soen; Ragnar Thobaben; Joakim Jaldén; Richard Nock

**ID:** 154375 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E25jB11LFP>) | [PDF](<https://openreview.net/pdf?id=E25jB11LFP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154375>)

We study post\-hoc Learning to Defer \(L2D\) through the lens of ideal distributions: divergence\-regularized reweightings of the data distribution under which a model attains low loss\.   We define deferral via the density\-ratio between a model's and an expert's ideals\.   Using the reduction from density\-ratio estimation to class\-probability estimation, we derive the DR CPE losses for post\-hoc L2D scorers\.   Deferral decisions are then made by thresholding the scorer, allowing deferral rates to be adjusted without retraining\.   For KL\-based ideal distributions, our deferral rules recovers Chow's rule under the original distribution and a connection to an expert\-tilted Bayes posterior—which incorporates the expert's performance—depending on if the ideal distributions are joint or marginal distributions\.   Experimentally, our approach is competitive compared to common baselines and more robust across dataset settings\.   More broadly, our results cast post\-hoc L2D as density\-ratio learning between ideal distributions, bridging Chow\-style rules, expert comparison, and elucidating connections to related learning settings including anomaly detection\.

## MIST: Reliable Streaming Decision Trees for Online Class\-Incremental Learning via McDiarmid Bound

**Authors:** Phu\-Hoa Pham; Chi Nguyen Tran; Phu\-Quy Nguyen\-Lam; Dao S Minh; Trung\-Kiet Huynh; Long Tran\-Thanh

**ID:** 151675 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YsDOcP6Vpb>) | [PDF](<https://openreview.net/pdf?id=YsDOcP6Vpb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151675>)

Streaming decision trees are natural candidates for open\-world continual learning, as they perform local updates, enjoy bounded memory, and static decision boundaries\. Despite these, they still fail in online class\-incremental learning due to two coupled miscalibrations: \(i\) their split criterion grows unreliable as the class count $K$ expands, and \(ii\) the absence of knowledge transfer at split time\. Both failures share a common root: the range of Information Gain intrinsically scales with $\\log\_2 K$\. Consequently, any Hoeffding\-style confidence radius derived from it must inevitably grow with the class count, making a $K$\-independent split criterion structurally impossible, taking away the potential benefits of applying streaming decision trees to continual learning\. To fix this issue, we present \\mist\{\} \(McDiarmid Incremental Streaming Tree\), which resolves both failures through three integrated components: \(i\) a tight, $K$\-independent McDiarmid confidence radius for Gini splitting that acts as a structural regulariser; \(ii\) a Bayesian inheritance protocol that projects parent statistics to child nodes via truncated\-Gaussian moments, with variance reduction guarantees strongest precisely when splitting is most conservative; and \(iii\) per\-leaf KLL quantile sketches that support both continuous threshold evaluation and geometry\-adaptive leaf prediction from a single data structure\. On standard and stress\-test tabular streams, \\mist\{\} is competitive with global parametric methods on near\-Gaussian benchmarks and uniquely robust on non\-Gaussian geometry where SOTA benchmarks collapse\.

## Rethinking Learning from Label Proportions via Moment Matching

**Authors:** Tianhao Ma; Wei Wang; Yivan Zhang; Dong\-Dong Wu; Takashi Ishida; Gang Niu; Masashi Sugiyama

**ID:** 154686 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BjxyNdu4tO>) | [PDF](<https://openreview.net/pdf?id=BjxyNdu4tO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154686>)

Learning from label proportions \(LLP\) is a weakly supervised setting where training data are grouped into bags with only bag\-level label proportions observed, and the goal is to learn a classifier that predicts labels for individual instances\. Recently, a large body of methods has emerged; however, most of them rely on the assumption that instances and labels are sampled i\.i\.d\. and randomly assembled into bags, an assumption often violated in real\-world scenarios\. Our experimental results indicate that these methods perform suboptimally under non\-random settings\. In this work, we adopt a more realistic assumption: bags are sampled i\.i\.d\., and instance labels are conditionally independent given the instances\. Under this setting, we show that the label counts follow a Poisson multinomial distribution\. Motivated by this observation, we propose LLP via moment matching\(LLP\-MM\), a simple yet effective approach which leverages multi\-order factorial moments as training objectives, encouraging the classifier predictions to match these moments and thereby more fully exploit the underlying statistical structure of the data\. Extensive experiments on benchmark datasets under various bag construction strategies demonstrate the effectiveness of our approach while maintaining high computational efficiency\.

## TabClustPFN: A Prior\-Fitted Network for Tabular Data Clustering

**Authors:** Tianqi Zhao; Guanyang Wang; Yan Shuo Tan; Qiong Zhang

**ID:** 150101 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kgZzOmPAq0>) | [PDF](<https://openreview.net/pdf?id=kgZzOmPAq0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150101>)

Prior\-data Fitted Networks \(PFNs\) have reframed supervised tabular learning as single\-pass in\-context inference without per\-dataset optimization\. Extending this paradigm to unsupervised clustering is appealing yet fundamentally more challenging, due to absent supervision, unknown cluster cardinality, and label switching inherent to partition outputs\. Existing PFN\-based clustering methods address these challenges only partially, either requiring known cardinality as input or relying on unstable label\-ordering conventions and overly restrictive synthetic priors\. We introduce TabClustPFN, a clustering PFN that resolves all challenges jointly through co\-designed prior, objective, and architecture\. Our hybrid pretraining prior captures heterogeneous real\-tabular geometry; our decoupled partition inference network\-cardinality inference network architecture jointly infers cluster assignments and cardinality in a single pass; and our SoftARI training objective is permutation\-invariant by construction, eliminating the need for any label\-ordering convention\.  On a 44 curated real\-world tabular benchmark, TabClustPFN achieves state\-of\-the\-art clustering performance against classical, deep, and amortized baselines, with runtime comparable to efficient baselines\.

## Optimizing Analytic Constants via AI\-Guided Lean Proof Refinement

**Authors:** Rahul Saha; Alan Li; Anton Xue; Adam Klivans; Pravesh K Kothari; Raghu Meka; Swarat Chaudhuri

**ID:** 155093 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8UcFFcJ2fm>) | [PDF](<https://openreview.net/pdf?id=8UcFFcJ2fm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155093>)

We demonstrate that AI agents can autonomously improve mathematical proofs of quantitative results\. As a key step towards this frontier, we achieve strict improvements on Grothendieck's and Korenblum's constants, whose precise values have remained surprisingly elusive despite their recurrence in both the mathematical and physical sciences\. By encoding relevant literature as a partially formalized Lean blueprint, we structure the agent's search space to localized proof refinements that automatically propagate to a verified final bound\. Concretely, Grothendieck's constant \($\\mathcal\{K\}\_G$\) is shown to be: $$     \\mathcal\{K\}\_G \\leq \\tfrac\{\\pi\}\{2 \\log \(1 \+ \\sqrt\{2\}\)\} \- 10^\{\-17\}, $$ which is the first explicit numerical improvement since Krivine's landmark 1979 result\. For Korenblum's constant \($\\mathcal\{K\}\_K$\), the lower bound is tightened to: $$     \\mathcal\{K\}\_K \\geq 0\.3554 \+ 0\.001165, $$ a third\-digit improvement over Wang's recent 2025 result\. In summary, we establish that AI agents can autonomously refine formal proofs of open problems and provide a generalizable framework for future mathematical discovery\.

## Compute Efficiency and Serial Runtime Tradeoffs for Stochastic Momentum Methods

**Authors:** Depen Morwani; Alexandru Meterez; Pranav Nair; Sham Kakade

**ID:** 148716 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vZu4zXa0PZ>) | [PDF](<https://openreview.net/pdf?id=vZu4zXa0PZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148716>)

Stochastic momentum methods such as heavy ball \(HB\), Nesterov momentum, and variants of Accelerated SGD \(ASGD\) \[Kidambi et al\., 2018\] are widely used in modern training, but their stochastic benefits depend on two distinct quantities: serial runtime, the number of iterations needed to reach a target accuracy, and compute efficiency \(CE\), the inverse total gradient\-query or FLOP cost\. Larger batches reduce serial runtime without hurting CE only when the contraction gap grows linearly with batch size\.  We study stochastic HB and ASGD for consistent linear regression with Gaussian covariates and prove finite\-dimensional, discrete\-time lower bounds on their batch\-size tradeoffs\. Our first result shows that HB does not improve the CE frontier over SGD for arbitrary spectra; rather, it preserves SGD\-level CE over a larger batch\-size window, allowing larger batches to reduce serial runtime until HB reaches its deterministic accelerated scale\. This window can be a factor $\\sqrt\{\\kappa\}$ larger than the SGD critical batch size\. For ASGD, the picture is more spectrum\-dependent: for rapidly decaying power\-law spectra, ASGD improves small\-batch CE over HB/SGD, but as batch size grows it trades this CE advantage for improved serial runtime\. Synthetic linear\-regression experiments verify these qualitative regimes, including near\-overlap of ASGD and HB for slowly decaying spectra and the predicted CE\-\-serial tradeoff for rapidly decaying spectra\.

## Evolutionary foraging in grids: Intermittent search emerges as an optimal strategy

**Authors:** Shailendra Bhandari; Alex Szorkovszky; Anis Yazidi; Pedro G Lind

**ID:** 148561 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wy6k0zCeMv>) | [PDF](<https://openreview.net/pdf?id=wy6k0zCeMv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148561>)

How search strategies evolve in sparse, depletable landscapes remains a central question in foraging theory\. We study this problem with an evolutionary simulation in which agents forage on a two\-dimensional toroidal lattice containing non\-renewable resources distributed either uniformly or as Lévy dust\. Each agent carries a heritable genome encoding step lengths, velocities, and turning angles, and selection acts on a fitness function, derived from first principles, combining energetic gain, movement cost, and coverage efficiency\. By allowing movement traits to evolve without imposing a prescribed power\-law step\-length distribution, we test whether selection recovers a strict Lévy\-like random walk, similar to the spatial distribution of resources, or instead favors an alternative search mechanism\. Strikingly, our results indicate that, in the finite depletion\-driven landscapes considered here, evolved search is more consistent with intermittent dynamics than with strict scale\-free Lévy motion\. To characterize the effective dynamics of the evolved trajectories, we take the average coefficient of determination when fitting second\- and fourth\-order displacement moments to intermittent search and Lévy\-walk models\. While a Lévy\-like random walk fits very well with the numerical results from the evolutionary search \($R^2&gt;0\.9$\), the intermittent search achieves a closer fit, with fitted coefficients of determination \($R^2&gt;0\.99$\) for all resource distributions\. Evolution rapidly reshapes the movement genome toward short displacements while retaining a sparse tail of longer relocations, consistent with local exploitation punctuated by occasional transfer\. The framework provides a controlled setting for studying how search rules emerge under resource limitation and may inform resource\-constrained exploration in autonomous systems\.

## Minimax Rates and Spectral Distillation for Tree Ensembles

**Authors:** Binh Vu; David Watson

**ID:** 155405 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5uMDws28Ir>) | [PDF](<https://openreview.net/pdf?id=5uMDws28Ir>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155405>)

Tree ensembles such as random forests \(RFs\) and gradient boosting machines \(GBMs\) are among the most widely used supervised learners, yet their theoretical properties remain incompletely understood\. We adopt a spectral perspective on these algorithms, with two main contributions\. First, we derive minimax\-optimal convergence for RF regression, showing that, under mild regularity conditions on tree growth, the eigenvalue decay of the induced kernel operator governs the statistical rate\. Second, we exploit this spectral viewpoint to develop compression schemes for tree ensembles\. For RFs, leading eigenfunctions of the kernel operator capture the dominant predictive directions; for GBMs, leading singular vectors of the smoother matrix play an analogous role\. Learning nonlinear maps for these spectral representations yields distilled models that are orders of magnitude smaller than the originals while maintaining competitive predictive performance\. Our methods compare favorably to state of the art algorithms for forest pruning and rule extraction, with applications to resource constrained computing\.

## Fast Algorithms for the Label Propagation Operator on Signed Graphs

**Authors:** Yubo Sun; Zhongzhi Zhang

**ID:** 149617 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ol8v70zjm8>) | [PDF](<https://openreview.net/pdf?id=ol8v70zjm8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149617>)

Diverse applications on signed networks, ranging from leader\-follower opinion dynamics to graph semi\-supervised learning, fundamentally reduce to solving the discrete Dirichlet boundary value problem\. The computational bottleneck of this problem lies in evaluating the entries of the label propagation operator $Q = \-L\_\{U,U\}^\{\-1\}L\_\{U,L\}$\. While existing approximation methods based on absorbing random walks attempt to address this complexity, they often suffer from high variance and limited precision\. To overcome these limitations, we propose MultiTreeQ, a novel and efficient framework designed to approximate the operator's entries with high accuracy\. Specifically, MultiTreeQ is constructed based on the Signed Multi\-Rooted Spanning Tree and leverages Rao\-Blackwellized variance reduction to significantly improve estimation precision\. Extensive experiments on real\-world networks confirm that MultiTreeQ substantially outperforms existing baselines, scaling to massive graphs with up to 10 million nodes while delivering remarkable improvements in computational efficiency and precision\. Our code is available at https://anonymous\.4open\.science/r/label\-propagation\-operator\-2059/\.

## Joint Learning of Hierarchical Neural Options and Abstract World Model

**Authors:** Top Piriyakulkij; Wolfgang Lehrach; Kevin Ellis; Kevin Murphy

**ID:** 149966 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lrgtf2HT4J>) | [PDF](<https://openreview.net/pdf?id=lrgtf2HT4J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149966>)

Building agents that can perform new skills by composing existing skills is a long\-standing goal of AI agent research\. Towards this end, we investigate how to efficiently acquire a sequence of skills, formalized as hierarchical neural options\. However, existing model\-free hierarchical reinforcement algorithms need a lot of data\. We propose a novel method, which we call "AgentOWL" \(Option and World model Learning\), that jointly learns \-\-\- in a sample efficient way \-\-\- an abstract world model \(abstracting across both states and time\) and a set of neural options\. We show, on a subset of Object\-Centric Atari games, that our method can learn more skills using less data than baseline methods and possesses learning and generalization capabilities that the baselines do not have\.

## PRIME: Poincaré return induced measure for learning partially observed dynamical systems

**Authors:** Yiting Duan; Longyan Tan; Hao Wu; Mehdi Tavakol; Yi Guo

**ID:** 154522 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CzBDTAXvts>) | [PDF](<https://openreview.net/pdf?id=CzBDTAXvts>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154522>)

Learning dynamics from sparse partial observations presents a fundamental dilemma: the pointwise mean squared error \(MSE\) training objective may induce local contraction and empirically lead to topological collapse, whereas matching the system's invariant measure preserves global geometry but lacks temporal ordering constraints\. To resolve this, we introduce the $\\textbf\{P\}$oincaré $\\textbf\{R\}$eturn $\\textbf\{I\}$nduced $\\textbf\{M\}$easur$\\textbf\{e\}$ $\(\\textbf\{PRIME\}\)$ framework\. PRIME bridges this gap by adopting a novel perspective of recurrence\-level temporal organization, motivated by the return map and roof time structure of suspension flow representations\. Instead of relying on unstable pointwise matching, PRIME refines the learned dynamics by leveraging recurrence\-level temporal information, specifically by aligning the empirical graph measure of the induced return map over recurrence blocks\. We evaluate our framework on the partially observed Lorenz63 system, sensor\-observed Kuramoto\-Sivashinsky equation, and flow past a cylinder\. PRIME effectively reduces topological collapse across our benchmarks, improving temporal consistency while maintaining or enhancing long\-term geometric and spectral fidelity\.

## Ask Early, Ask Late, Ask Right: When Does Clarification Timing Matter for Long\-Horizon Agents?

**Authors:** Anmol Gulati; Hariom Gupta; Elias Lumer; Sahil Sen; Vamse K Subbiah

**ID:** 154769 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B5ZuTZqnmv>) | [PDF](<https://openreview.net/pdf?id=B5ZuTZqnmv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154769>)

Long\-horizon AI agents execute complex workflows spanning hundreds of sequential actions, yet a single wrong assumption early on can cascade into irreversible errors\. When instructions are incomplete, the agent must decide not only whether to ask for clarification but when, and no prior work measures how clarification value changes over the course of execution\. We introduce a forced\-injection framework that provides ground\-truth clarifications at controlled points in the agent's trajectory across four information dimensions \(goal, input, constraint, context\), three agent benchmarks, and four frontier models \(three per benchmark; one on a single benchmark only; 84 task variants; 6,000\+ runs\)\. Counter to the common intuition that \`\`earlier is always better,'' we find that the value of clarification depends sharply on what information is missing: goal clarification loses nearly all value after 10% of execution \(pass@3 drops from 0\.78 to baseline\), while input clarification retains value through roughly 50%\. Deferring any clarification type past mid\-trajectory degrades performance below never asking at all\. Cross\-model Kendall τ correlations \(0\.78\-0\.87 among models sharing identical task coverage; 0\.34\-0\.67 across the full 4\-model panel\) confirm these timing profiles are substantially task\-intrinsic\. A complementary study of 300 unscripted sessions reveals that no current frontier model asks within the empirically optimal window, with strategies ranging from over\-asking \(52% of sessions\) to never asking at all\. These empirical demand curves provide the quantitative foundation that existing theoretical frameworks require but have lacked, and establish concrete design targets for timing\-aware clarification policies\. Code and data will be publicly released\.

## In search of a definition of importance: Do attributions capture it?

**Authors:** Antonia Marcu; Jonathon Hare; Annika Catulli; Srinandan Dasmahapatra; Damian Smith

**ID:** 151550 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Zo1lisOv20>) | [PDF](<https://openreview.net/pdf?id=Zo1lisOv20>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151550>)

Attribution methods are extensively used to identify which parts of the input are important for a model's decision\. However, despite recent efforts there is still no consensus on what exactly they capture and how to evaluate them\. We start addressing this problem by explicitly modelling the implicit assumptions that sit at the foundation of attribution methods\. We define two types of importance contributions an input region can have\. We then create a framework that decouples the process of \*\*verifiably\*\* establishing contributions from that of evaluating attributions\. This shows that current attribution methods struggle to reliably capture input contributions\. Further investigation shows a stark difference in attribution performance between model behaviours, exposing a previously overlooked aspect in the attribution literature\. Our work calls for clear, quantifiable statements about what attribution methods aim to capture, along with rigorous evaluation frameworks\.

## When evolution cheats: Frozen\-weights Baselines reveal static\-solvers interference in evolved plastic spiking neural networks

**Authors:** Denis Larsen; Kazi Shah Nawaz Ripon; Anis Yazidi; Gustavo B Moreno e Mello

**ID:** 150923 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eM1YG0hXNB>) | [PDF](<https://openreview.net/pdf?id=eM1YG0hXNB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150923>)

In artificial systems, neuroevolution with synaptic plasticity promises agents that adapt during their lifetime, yet standard fitness evaluations do not distinguish inherited static competence from within\-lifetime adaptation\. Evolutionary algorithms can produce \\emph\{static solvers\}: genomes whose inherited topology performs well even when synaptic plasticity is disabled and weights remain at their lifetime initialization, confounding adaptation with evolved structure\. To expose this confound, we introduce a two\-phase evaluation protocol with an explicit static\-solver extinction mechanism that measures each genome both with plasticity disabled \(frozen\-weight\) and enabled \(plastic\-weight\) on the same task\. The first phase quantifies the static competence of the inherited network structure, while the second adds online learning through spike\-timing\-dependent plasticity \(STDP\)\. The \\emph\{extinction\} mechanism removes static solvers from the gene pool, i\.e\., any genome whose frozen\-weight fitness exceeds a threshold, thereby exerting evolutionary pressure for learning and against static solving\. We combine this protocol with a complete $2\{\\times\}2$ factorial design that independently toggles extinction pressure and within\-lifetime learning\. The method is instantiated on a mutable cart\-pole benchmark using NEAT\-evolved spiking networks with inherited topology and per\-connection STDP parameters, while synaptic weights are reinitialized each lifetime and STDP updates run continuously at inference time during evaluation\. Across $30$ replicates per condition, the protocol reveals a clear static\-solver fingerprint: plasticity\-free neuroevolution reaches high training fitness but suffers a roughly $33$\-point train\-\-test gap on held\-out pole lengths\. Learning\-enabled agents reduce this gap to about $9$ points and achieve the highest held\-out AUC\. Extinction does not improve mean test performance when learning is available; instead, it reduces replicate variance and strengthens attribution by preventing high\-fitness frozen\-weight genomes from dominating selection\. These results position extinction not as a generic performance booster, but as a diagnostic intervention for disentangling inherited structure from genuine within\-lifetime adaptation\.

## Bayes\-Optimal BER and AUC: Estimation and Evaluation of Estimators

**Authors:** Ryota Ushio; Takashi Ishida; Masashi Sugiyama

**ID:** 152377 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TXjUGPqJQu>) | [PDF](<https://openreview.net/pdf?id=TXjUGPqJQu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152377>)

A fundamental quantity in machine learning is the optimal performance achievable by any model on a given task\. Estimating this quantity allows us to distinguish the irreducible part of the error from a deficiency of the model, telling us how much room for improvement remains\. Recent work has shown that the Bayes error, or equivalently the optimal accuracy, can be estimated from soft labels in binary classification\. However, accuracy is often a poor summary of performance in settings with severe class imbalance or noisy annotations, where metrics such as the balanced error rate \(BER\) and the area under the ROC curve \(AUC\) are more appropriate\. We address this gap with two complementary contributions\. \(i\) Estimation\. We propose soft\-label\-based estimators for the optimal BER and AUC\. We first consider the clean setting in which true soft labels and the class prior are known, and then extend the estimators to a more realistic setting in which the class prior is unknown and the observed soft labels are corrupted by an unknown order\- preserving transformation\. In the latter setting, we approximately recover the clean soft labels via isotonic regression with auxiliary hard labels, estimate the class prior with a clipped mean of the hard labels, and derive finite\-sample error bounds for the resulting plug\-in estimators\. \(ii\) Evaluation\. Since the optimum is unobservable on real datasets, evaluating any such estimator is itself nontrivial\. We extend the FeeBee framework, originally proposed for evaluating Bayes\-error estimators, to the optimal BER and AUC\. The resulting procedure provides practical evaluation scores without requiring knowledge of the optimum, and applies to any estimator of the optimal BER or AUC, not only our proposed ones\. Experiments on synthetic and real\-world datasets validate both the estimators and the evaluation procedure\.

## Social Choice Foundations for Simulation\-Augmented Generation

**Authors:** Sonja Kraiczy; Smitha Milli; Ratip Emin Berker; Avinandan Bose; Brandon Amos; Jamelle Watson\-Daniels; Maximilian Nickel; Edith Elkind; Ariel Procaccia

**ID:** 148453 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xjWS1jZydQ>) | [PDF](<https://openreview.net/pdf?id=xjWS1jZydQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148453>)

Users increasingly turn to AI systems for normative assistance—guidance on what one ought to do or think—yet models are often opaque about whose viewpoints they represent\. A promising approach is simulation\-augmented generation \(SAGE\), which involves querying generative simulations of individuals in a target population at inference time, soliciting their open\-ended judgments, and synthesizing them into a response while transparently reporting whose viewpoints are reflected\. However, inference\-time simulation raises acute scalability constraints\. Since the key benefit of simulation is improved representativeness, the core challenge is scaling simulation without sacrificing representation\. We introduce the first formalization of this problem, grounded in proportional clustering concepts from social choice theory\. We prove that to represent a population of $m$ humans, we need only create $n \\ll m$ simulations of them, and need only dynamically query $k \\ll n$ of those simulations at inference time, while still maintaining approximate proportional representation guarantees for the full population\. We empirically validate that our inference\-time algorithm yields better representation\-\-efficiency trade\-offs than baseline approaches\.

## Online Control with Multiple Sensors

**Authors:** Matthew Faw; Siva Theja Maguluri

**ID:** 153920 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HeDwP6bLo0>) | [PDF](<https://openreview.net/pdf?id=HeDwP6bLo0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153920>)

We consider a variant of the partially observed online control problem where there are \_multiple sensors\_ which provide noisy linear measurements of the system\. In our setting, the system state evolves according to a discrete\-time linear dynamical system\. The objective is to design an algorithm which minimizes regret relative to the best \_single\-sensor\_ policy \(within a restricted class\) in hindsight\. When the system and process noise is stochastic and the costs are quadratic in the control and \_unobserved state\_, we design an algorithm that achieves $\\mathcal\{O\}\(\\mathrm\{poly\}\\log\(S\)\\sqrt\{n\}\)$ regret over time horizon $n$ relative to our benchmark policy class if there are $S$ sensors\. Notably, this regret guarantee is with respect to the \_state costs\_, which are never fully observed\. When the system and process noise is chosen by an oblivious adversary, and the cost functions are convex\-Lipschitz \(or subquadratic\) functions of the control and \_observations\_, then a similar $\\mathcal\{O\}\(\\mathrm\{poly\}\\log\(S\)\\sqrt\{n\}\)$ regret is achievable\. While our work is the first, to our knowledge, to study this generalization of the online control problem, we remark that a na\\"ive application of known results in the partially observed online control literature have regret scaling $\\mathcal\{O\}\(\\mathrm\{poly\}\(S\)\\sqrt\{n\}\)$, exponentially worse than our regret scaling in terms of dependence on the number of sensors\. Our algorithm is based on the Follow\-The\-Regularized\-Leader framework, and our analysis carefully exploits the $\\ell\_1$ geometry of the policy class\.

## FATE\-AI: Futures of Agriculture, Technology, and Ecology in Artificial Intelligence

**Authors:** Piera Riccio

**ID:** 137883 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137883>)

Set in a rural farming community in the Matese National Park region in Southern Italy, where students have studied in temporary classrooms since a 2013 earthquake, this project pairs a 30\-hour AI course grounded in agricultural applications with a one\-month artist residency\. The result is an interdisciplinary approach that teaches technical skills alongside critical, ethical thinking about technology’s role in farming communities, leaving behind both new capabilities and a lasting piece of public art\.

## The Voice\-Native Classroom: Multilingual AI Co\-Teachers for Global ML Education

**Authors:** Aleksei Komissarov

**ID:** 137880 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137880>)

Most AI tutoring tools ask students to type, which is a barrier for learners working in a second language\. This project builds a voice\-native AI co\-teacher that converses with students in their own language, and is available at any time of the day\. Already piloted in a live university course since September 2025, the approach will now scale to reach more than 1,000 students across 50\+ countries through Neapolis University in Cyprus and DataTalks\.Club, a Berlin\-based online community of 80,000 learners – with no tuition and no language barrier standing between students and rigorous ML education\.

## FATE\-AI: Futures of Agriculture, Technology, and Ecology in Artificial Intelligence

**Authors:** Piera Riccio

**ID:** 137877 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137877>)

Set in a rural farming community in the Matese National Park region in Southern Italy, where students have studied in temporary classrooms since a 2013 earthquake, this project pairs a 30\-hour AI course grounded in agricultural applications with a one\-month artist residency\. The result is an interdisciplinary approach that teaches technical skills alongside critical, ethical thinking about technology’s role in farming communities, leaving behind both new capabilities and a lasting piece of public art\.

## The Voice\-Native Classroom: Multilingual AI Co\-Teachers for Global ML Education

**Authors:** Aleksei Komissarov

**ID:** 137874 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137874>)

Most AI tutoring tools ask students to type, which is a barrier for learners working in a second language\. This project builds a voice\-native AI co\-teacher that converses with students in their own language, and is available at any time of the day\. Already piloted in a live university course since September 2025, the approach will now scale to reach more than 1,000 students across 50\+ countries through Neapolis University in Cyprus and DataTalks\.Club, a Berlin\-based online community of 80,000 learners – with no tuition and no language barrier standing between students and rigorous ML education\.

## Releasing Anchors from Cross\-View Correspondence: Probabilistic Multi\-View Anchor Graph Clustering

**Authors:** Zhoumin Lu; Yongbo Yu; Yu Duan; Feiping Nie; Yicong Zhou

**ID:** 154593 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CQIfXmGpTl>) | [PDF](<https://openreview.net/pdf?id=CQIfXmGpTl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154593>)

Anchor graphs are a standard route to scalable multi\-view clustering, but most existing pipelines still depend on either a shared anchor set sampled from concatenated features or a separate anchor\-alignment stage before fusion\. Both choices are restrictive: the former hard\-codes equal anchor budgets and importance at anchor\-construction time, while the latter introduces a cumbersome correspondence problem and still struggles with unequal anchor numbers\. We develop an alignment\-free probabilistic formulation in which view\-specific anchor graphs are noisy manifestations of a shared latent cluster identity rather than objects that require cross\-view correspondence\. Each view has its own anchor space, number of anchors and cluster prototypes; the only shared latent variable is the sample label\. We instantiate this idea with a Gaussian latent\-label model and a deterministic prototype M\-step\. The resulting variational EM algorithm admits closed\-form updates with convergence guarantees, while experiments demonstrate competitive clustering performance and practical runtime on most datasets\.

## PREPING: Building Agent Memory without Tasks

**Authors:** Yumin Choi; Sangwoo Park; Minki Kang; Jinheon Baek; Sung Ju Hwang

**ID:** 153705 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JOK7XgSXEU>) | [PDF](<https://openreview.net/pdf?id=JOK7XgSXEU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153705>)

Agent memory is typically constructed either offline from curated demonstrations or online from post\-deployment interactions\. However, regardless of how it is built, an agent faces a cold\-start gap when first introduced to a new environment without any task\-specific experience available\. In this paper, we study pre\-task memory construction: whether an agent can build procedural memory before observing any target\-environment tasks, using only self\-generated synthetic practice\. Yet, synthetic interaction alone is insufficient, as without controlling what to practice and what to store, synthetic tasks become redundant, infeasible, and ultimately uninformative, and memory further degrades quickly due to unfiltered trajectories\. To overcome this, we present Preping, a proposer\-guided memory construction framework\. At its core is proposer memory, a structured control state that shapes future practice\. A Proposer generates synthetic tasks conditioned on this state, a Solver executes them, and a Validator determines which trajectories are eligible for memory insertion while also providing feedback to guide future proposals\. Experiments on AppWorld, BFCL v3, and MCP\-Universe show that Preping substantially improves over a no\-memory baseline and achieves performance competitive with strong playbook\-based methods built from offline or online experience, with deployment cost $2\.99\\times$ lower on AppWorld and $2\.23\\times$ lower on BFCL v3 than online memory construction\. Further analyses reveal that the main benefit does not come from synthetic volume alone, but from proposer\-side control over feasibility, redundancy, and coverage, combined with selective memory updates\.

## Efficient algorithms for linear regression with heteroskedastic errors

**Authors:** Sergei Vassilvitskii; Silvio Lattanzi; Aditya Bhaskara; Siddhant Chaudhary

**ID:** 148854 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ufnIQ9qHLt>) | [PDF](<https://openreview.net/pdf?id=ufnIQ9qHLt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148854>)

We study the classical problem of linear regression under heteroskedastic noise, where observations arise from multiple sources with unknown and potentially unequal variances\. Specifically, we consider a setting with $n$ sources, each providing a linear measurement of an unknown $d$\-dimensional parameter vector $\\beta^\*$, where each source is associated with an unknown noise variance\. We focus on the classic "subset\-of\-signals'' model, where one assumes that $m$ of the sources have a relatively low noise, formally, with variance of at most 1\.  Our goal is to accurately estimate $\\beta^\\\*$ despite the presence of high\-variance sources\. We show that if $m$ is sufficiently large, it is possible to recover $\\beta^\*$ with sub\-constant error\. Specifically, we prove a recovery error bound of $\\tilde\{O\} \\left\(\\frac\{\\sqrt\{nd\}\}\{m\}\\right\)$,  significantly improving upon previously known results for this setting\.

## Model\-Agnostic FDR Control via Group Gaussian Mirror and Permutation SHAP

**Authors:** Jiaan Han; Junxiao Chen; Yanzhe Fu

**ID:** 150705 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g80dWNtFDe>) | [PDF](<https://openreview.net/pdf?id=g80dWNtFDe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150705>)

Most FDR\-controlled feature selection methods are designed for coordinate\-wise hypotheses, where each feature has a single weight or importance score\. This abstraction fails in sequential and grouped models, where one original feature is represented by a block of sub\-features, such as lags, recurrent states, or attention\-based interactions\. We propose a grouped\-feature FDR control framework for such settings\. For grouped linear models, we construct null\-symmetric block\-level mirror statistics with matrix\-valued perturbations\. For neural sequential models, we combine Permutation SHAP derivatives as model\-agnostic block\-level importance scores with kernel\-based dependence measure\. The framework is model\-agnostic across network architectures, does not require specifying the covariate distribution, and reduces to Gaussian Mirror or Neural Gaussian Mirror when the block size is one\. We prove FDR control for low\- and high\-dimensional grouped linear models and asymptotic symmetry of smoothed Permutation SHAP derivatives under fixed fitted nonlinear models\. Experiments on simulated and real\-world datasets show reliable FDR control and improved power under correlated grouped\-feature signals\.

## Pooling Versus Ensembling for Ridge Regression Under Covariate Shift

**Authors:** Maya Ramchandran; Rajarshi Mukherjee

**ID:** 154987 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9QYohrmHKg>) | [PDF](<https://openreview.net/pdf?id=9QYohrmHKg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154987>)

Datasets in many settings naturally partition into clusters arising from sub\-populations, batch effects, or aggregation across multiple sources\. A common response to such heterogeneity is to ensemble learners trained on each cluster rather than fit a single model to the pooled data\. Prior work motivating such approaches has typically considered settings in which both the covariate distribution and the conditional outcome model differ across clusters; the role of cluster\-aware partitioning and ensembling based solely on the covariate distribution remains to be explored\. We address this case for ridge\-regularized least\-squares regression under a linear outcome model and consider all ridge penalty values $\\lambda \\geq 0$, including the special case of the ridgeless predictor at $\\lambda = 0$\. By considering both fixed\-effects and random\-effects models, we argue that under random effects, an optimally tuned pooled ridge predictor always outperforms ensembles of individually optimally tuned predictors\. For fixed effects, we derive a general formula for the pooled and ensembled predictors to characterize the role of both regression coefficients as well as the predictor distribution shifts\. Together, these results generalize prior risk analyses of bagging and random\-partition estimation using ridge and ridgeless regression predictors from the i\.i\.d\. setting to encompass covariate shift and heterogeneity\-aware partition structure\.

## RIVET: Regex\-to\-Indexable Keys via Neural Translation for Interactive LIMIT\-k Retrieval

**Authors:** Dong Wang; Yingze Li; Zihang Yu; Ziqing Zeng; Zongdai Jiang; Yuhao ZHANG; Kaixin Zhang; Shuangshuang Cui; Hongzhi Wang

**ID:** 152523 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SU1cZgGHjB>) | [PDF](<https://openreview.net/pdf?id=SU1cZgGHjB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152523>)

Interactive regex search over large text columns needs exact matches under low latency, but indexes help only when a pattern exposes selective fragments\. For LIMIT\-k queries, the immediate bottleneck is choosing a few indexable keys that reach match\-rich candidate buckets before regex verification\. RIVET casts this step as constrained regex\-to\-key generation: a column\-specific translator emits short keys, an existing index retrieves candidates, and the native regex engine verifies every output record\. Training from repeated regex\-key hits moves probability mass toward effective keys, so finite online sampling spends fewer regex checks before collecting the requested matches\. Across four large datasets, RIVET reaches 35\.8 ms median latency, improves over the strongest baseline REI by 3\.4–36×, and reaches up to 1773× speedup over sequential scan\. The same mechanism improves TPC\-H query plans, preview retrieval under latency budgets, and 80 human\-authored OOD regex queries, showing that regex\-to\-key generation translates into end\-to\-end system gains\.

## Guided Data Generation for Understanding Model Behavior

**Authors:** Eren Mehmet KIRAL; Nursen Aydin; Ilker Birbil

**ID:** 152339 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ToMWVOfmSp>) | [PDF](<https://openreview.net/pdf?id=ToMWVOfmSp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152339>)

There is a growing need for understanding how trained machine learning models behave beyond standard predictive performance\. With this work, we aim to understand trained machine learning models by questioning their data preferences\. We propose a mathematical framework for guided data generation that allows us to produce fixed\-label, prediction\-risky, parameter\-sensitive, or model\-contrastive samples, among others\. To showcase our framework, we pose these queries to a range of models trained on a range of classification and regression tasks, with answers in the form of generated data\.

## TreeWalker: Partial Evaluation for Grouped Tree\-Ensemble Inference

**Authors:** Durmus Karatay; Richard Newman

**ID:** 150651 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gSYbuGjI0V>) | [PDF](<https://openreview.net/pdf?id=gSYbuGjI0V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150651>)

Many prediction tasks evaluate a tree ensemble on row groups that share feature values: discrete\-time survival models expand each patient into $G$ time steps, click\-through\-rate models score each item in a search session, and scenario analyses vary a few inputs while keeping others fixed\. Standard tree\-ensemble inference treats each row independently, ignoring this input\-side correlation\.  We instantiate partial evaluation for grouped tree\-ensemble inference: constant features are static, varying features dynamic\. The algorithm walks each tree once per group, partitions a row bitmask at varying splits, and skips empty subtrees via an unsplit shortcut\.  We prove a structural work decomposition: per\-tree work splits into the constant\-projected subtree size $\|T\_c\|$, $G$ leaf writes, and a predicate\-mask provisioning cost $Q$\. For the trace evaluator, per\-row work approaches $\(d\_v\+1\)/\(d\+1\)$ as $G \\to \\infty$, giving asymptotic speedup $1/\(1\-\\bar\\rho\_G\)$\.  Empirically, TreeWalker delivers $\{\\sim\}3\\times$ algorithmic speedup over a row\-independent traversal at the reference model size \($T\{=\}500$, $L\{=\}8$; $G\{=\}16$ for SUPPORT/FLCHAIN and empirical groups for Expedia\), rising to $6\.8$\-\-$7\.8\\times$ at $G\{=\}128$ on the survival datasets\. For f64 models, outputs match treelite GTIL up to tree\-ordering roundoff; for f32 models, TreeWalker's f64 leaf accumulation is close to a Kahan\-compensated reference than native f32 on $99\.98\\%$ of rows, with the remaining $0\.02\\%$ tied\.

## Pandora's AI Model Routing Box: Efficient Allocation with Costly Value Estimation

**Authors:** Adam Fisch; Shubhendu Trivedi; Fantine Huot; William Cohen; Michael Kaisers; Mirella Lapata; Kate Larson; Jacob Eisenstein

**ID:** 148290 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yxwL9oTlWU>) | [PDF](<https://openreview.net/pdf?id=yxwL9oTlWU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148290>)

Heterogeneous AI systems composed of multiple models, architectures, harnesses, or inference\-time settings can improve quality and efficiency by routing queries to the \\emph\{specialist\} who can answer most effectively at the lowest cost\. Routing  requires estimating each specialist's expected return, but this value estimation has a cost\. Cheap estimators \(e\.g\., embedding\-based predictors\) are fast but noisy, while accurate estimators \(e\.g\., fine\-tuned models with access to retrieval results or partial reasoning traces\) are expensive\. We formalize this tradeoff as an instance of Pandora's Box, the classical problem of optimal search with costly inspection\. Under a Gaussian signal model, the resulting policies have closed\-form value\-of\-information expressions that determine, for each specialist and input, whether refining the value estimate is worth its cost\. We call the centralized policy Pandora's Router\.  We extend this to a decentralized setting, Pandora's Bidder, where specialists independently decide whether to invest in self\-assessment before accepting an offered price to claim a query\. Experiments across three domains\-\-\-a standard multi\-LLM benchmark, retrieval\-augmented specialists, and LLMs with variable inference\-time reasoning\-\-\-show that Pandora's Router matches the routing quality of exhaustive estimation, while querying the expensive estimator far less often\. In the decentralized setting, value\-of\-information reasoning improves allocative efficiency when competing estimates are accurate; when competing estimates are noisy, however, it can increase the strategic specialist's utility at the expense of

## Diverse Representative Rashomon Sets for Sparse Generalized Additive Models

**Authors:** Varun Babbar; Christopher Li; Chudi Zhong; Cynthia Rudin

**ID:** 149888 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mTtx8zpRhk>) | [PDF](<https://openreview.net/pdf?id=mTtx8zpRhk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149888>)

The Rashomon set paradigm seeks to uncover the full collection of near\-optimal predictive models from a given function class\. Access to this set allows users to better understand predictive multiplicity, interact with models, and select those that best satisfy domain\-specific constraints\. For sparse generalized additive models \(GAMs\), however, existing approaches that approximate the Rashomon set only apply to restricted subsets of features, overlooking the fact that equally accurate models can rely on many different feature subsets\. We address this gap by representing the Rashomon set through a maximally diverse collection of models\. We define a Metropolis\-Hastings style approach for sampling maximally diverse GAMs from the Rashomon set\. Experiments show that our methods can produce substantially more diverse solutions across all tested diversity metrics, providing users with actionable alternatives that maintain similar predictive performance\.

## Learning Augmented Exact Exponential Algorithms

**Authors:** Tatiana Belova; Yuriy Dementiev; Danil Sagunov

**ID:** 155713 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3TK5bC8DqS>) | [PDF](<https://openreview.net/pdf?id=3TK5bC8DqS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155713>)

The field of learning\-augmented algorithms has demonstrated that machine\-learned predictions can bypass worst\-case lower bounds across a wide range of problems\. So far, however, the focus has been almost exclusively on \*polynomial\-time\* algorithms, where predictions improve competitive ratios, approximation guarantees, or running times\. In this paper, we raise the question of whether predictions can push the frontier of \*exact exponential\-time\* algorithms for NP\-hard problems\. We answer this question affirmatively by proposing a \*general approach\* that augments an entire family of state\-of\-the\-art exact algorithms for a variety of subset selection problems\. We show that a noisy predictor that is only marginally better than random guessing suffices to provably reduce the search space, and that the resulting runtime speedup scales smoothly with the prediction quality\. Importantly, our algorithms require only \*pairwise\* independence of predictions or, alternatively, do not require the knowledge of the predictor's accuracy–both strictly weaker and more realistic settings than typically assumed\.

## InTAct: Interval\-based Task Activation Consolidation for Continual Learning

**Authors:** Patryk Krukowski; Jan Miksa; Piotr Helm; Jacek Tabor; Paweł Wawrzyński; Przemysław Spurek

**ID:** 155958 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1YkQOLXLUU>) | [PDF](<https://openreview.net/pdf?id=1YkQOLXLUU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155958>)

Continual learning seeks to acquire new knowledge while preserving previously learned representations\. Despite the success of prompt\-based methods, they remain fragile in domain\-incremental learning scenarios, where shifts in the input distribution cause representation drift in shared layers and lead to forgetting\. We introduce InTAct, a method that preserves functional behavior in shared representations without freezing parameters or retaining past data\. InTAct constrains updates within activation regions associated with prior domains, while allowing flexible adaptation elsewhere, thereby stabilizing neuron functionality rather than directly restricting parameter values\. The approach is architecture\-agnostic, integrates seamlessly with existing prompt\-based frameworks, and matches or outperforms state\-of\-the\-art methods on domain\-incremental benchmarks\.

## Expanding Flow Maps

**Authors:** Sophia Tang; Pranam Chatterjee

**ID:** 155702 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3aX1lzdpqZ>) | [PDF](<https://openreview.net/pdf?id=3aX1lzdpqZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155702>)

Flow maps have enabled remarkable progress in few\-step generative modeling across both continuous and discrete state spaces\. Despite their promise, existing parameterizations are restricted to flows over fixed dimensions or fixed sequence lengths\. Here, we introduce \*\*Expanding Generative Flows\*\* \(EFlows\), which define flows between distributions of \*increasing dimensionality\* through an expanding interpolant built from \*augmented distributions of conditional noise\*\. Building on this framework, we propose \*\*Expanding Flow Maps\*\* \(EFMs\), a new class of flow maps that distill EFlows into efficient few\-step generative models\. Each EFM factors the map between any two timesteps into two learned components: an \*expand operator\*, which augments the state with new coordinates or tokens, and a \*transport operator\*, which pushes the expanded state forward along the interpolant\. Composing these operators yields a single map that jointly \*expands\* and \*denoises\* the state, recovering existing fixed\-canvas flow maps as the special case in which the expand operator is the identity\. We further extend the framework to the discrete simplex, enabling variable\-length sequence generation via token insertions\. Across domains, EFlows and EFMs provide a principled approach to generative problems in which output size is itself learned, controllable degree of freedom\.

## Continual Learning Bench: Evaluating Frontier AI Systems in Real\-World Stateful Environments

**Authors:** Parth Asawa; Christopher M Glaze; Gabriel Orlanski; Ramya Ramakrishnan; Benji Xu; Asim Biswal; Vincent Chen; Frederic Sala; Matei A Zaharia; Joseph Gonzalez

**ID:** 139270 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ajW4TqUrCd>) | [PDF](<https://openreview.net/pdf?id=ajW4TqUrCd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139270>)

Continual learning, the ability of AI systems to improve through sequential experience, has attracted substantial interest, but no high\-quality benchmark exists to evaluate it\. We introduce Continual Learning Bench \(CL\-Bench\), the first difficult, expert\-validated benchmark designed to measure whether LLM\-based systems genuinely improve with experience\. CL\-Bench spans six diverse domains \(software engineering, signal processing, disease outbreak forecasting, database querying, strategic game\-playing, and demand forecasting\), each validated by domain experts and designed so that tasks share a learnable latent structure \(codebase layout, disease outbreak dynamics, opponent strategies\) that a stateful system can discover online but a stateless one cannot\. We evaluate frontier models across several agent architectures, from naive in\-context learning \(ICL\) to dedicated memory systems, introducing a gain metric to isolate learning from prior capabilities\. We find that these systems leave headroom for improved continual learning: agents frequently overfit to immediate observations or fail to reuse knowledge across instances, and dedicated memory systems do not fix this\-\-\-in fact, naive ICL outperforms systems dedicated to memory management\. CL\-Bench is the first benchmark to evaluate continual learning across diverse real\-world domains with expert\-validated tasks and isolate online learning from underlying model capability, showing a need for better continual learning systems\.

## Augmented Lagrangian Predictive Coding

**Authors:** Jeffrey Seely; Julian Gould

**ID:** 154623 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CBiJrxWtct>) | [PDF](<https://openreview.net/pdf?id=CBiJrxWtct>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154623>)

Predictive coding \(PC\) is a local\-learning alternative to backpropagation \(BP\), training deep networks via a local energy\-minimization dynamics rather than a global backward pass\. We introduce Augmented\-Lagrangian Predictive Coding \(PC\-ALM\), which maintains PC's inference budget but aligns each weight update toward BP by accumulating per\-layer constraint errors into a layer\-local Lagrange multiplier\. In linear PC networks, PC\-ALM converges to an equilibrium with exact BP gradients distributed across the network via only layer\-local updates\. We analyze PC\-ALM in nonlinear PC networks up to depth 128 and show that it matches BP performance across all width\-depth regimes, notably in deep narrow networks where PC underperforms\. PC\-ALM introduces recurrent dynamics in each layer's activations\. Compared to PC's heat flow on a scalar energy, PC\-ALM dynamics are driven by dual ascent on the Augmented Lagrangian\. We observe ballistic credit propagation across especially deep networks, with prediction errors evenly distributed across layers, compared to PC's diffusive credit propagation\. Beyond the algorithm itself, the augmented Lagrangian framework offers a generalization of PC, and may yield insights on how distributed systems could compute and propagate BP\-like credit signals through purely local dynamics\.

## Adaptive Random Forests from Online Learning and Testing by Betting

**Authors:** Salim I\. Amoukou; Saumitra Mishra; Manuela Veloso

**ID:** 150422 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i9u9Y9oW7j>) | [PDF](<https://openreview.net/pdf?id=i9u9Y9oW7j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150422>)

Adaptive Random Forests \(ARF\) are among the most effective ensemble methods for learning from non\-stationary data streams, yet their success relies on heuristic drift detectors and reset rules that lack formal guarantees and require careful tuning\. We revisit ARF from an online learning perspective and show that its design decomposes into two fundamental questions: how to aggregate a dynamically evolving set of trees, and how to update the pool of trees over time\. We address aggregation using parameter\-free online learning methods with strongly adaptive regret, enabling the ensemble to track the best tree mixture\. For pool updates, we replace detector\-driven resets with deterministic multi\-scale scheduling based on geometric lifetimes, combined with incumbent\-\-challenger replacement governed by anytime\-valid statistical tests\. This design yields theoretical guarantees: global control of false replacements,  bounds on promotion delay under post\-change advantage, and adaptivity under piece\-wise stationary environment\. Empirically, the resulting Online RF consistently outperforms ARF and is competitive with broader streaming baselines across several classification and regression benchmarks\.

## Modulating Merging Strengths via Joint Loss Estimation for LoRA\-based Continual Learning

**Authors:** Kun Gu; De Cheng; Zhipeng Xu; Lingfeng He; Di Xu; Nannan Wang

**ID:** 148224 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zRXaWRbyGH>) | [PDF](<https://openreview.net/pdf?id=zRXaWRbyGH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148224>)

Continual learning \(CL\) aims to adapt models to new tasks while preserving previously learned knowledge\. Recently, Low\-Rank Adaptation \(LoRA\), a representative Parameter\-Efficient Fine\-Tuning \(PEFT\) method, has gained increasing attention in CL due to its efficiency and scalability\. Several LoRA\-based merging methods maintain a single inference model by scaling the newly learned LoRA update with one coefficient and merging it into the previous weights after each task\. However, they usually control the whole update with a shared scalar factor, although different update elements may affect previous and current tasks in different ways\. To address this issue, we propose Merging Strength Modulation via Joint Loss Estimation \(M²LE\) It consists of Hessian Information\-guided Adaptive Merging \(HIM\) and Task Simulation Perturbation for Merging \(TSP\)\. Instead of searching for a global merge coefficient, HIM directly solves for the target merged update under a joint objective over previous and current tasks\. Solving this objective gives an analytic solution that naturally takes the form of element\-wise modulation over the current task LoRA update\. To improve the stability of the learned update under subsequent merging, we introduce TSP which simulates different tasks interference\. Experiments on multiple benchmarks show that M²LE consistently outperforms existing PEFT\-based continual learning methods\. Our code is provided in the supplementary material\.

## Sample Size Design for Bounds on Discrete Probabilities of Causation

**Authors:** Tianyuan Cheng; Ruirui Mao; Judea Pearl; Ang Li

**ID:** 155472 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5MmRU4iPle>) | [PDF](<https://openreview.net/pdf?id=5MmRU4iPle>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155472>)

Probabilities of causation \(PoCs\), such as the probability of necessity and sufficiency \(PNS\), are important tools for decision making but are generally not point identifiable\. Existing work has derived bounds for these quantities using combinations of experimental and observational data\. However, there is very limited research on sample size analysis, namely, how many experimental and observational samples are required to achieve a desired margin of error\. In this paper, we propose a sample\-size design framework for PoC bounds that can be expressed as finite minima or maxima of smooth functions of experimental and observational probabilities — a representation that covers binary PNS, PN, and PS, as well as representative multi\-valued PoC families recently shown to subsume the discrete PoC bounds in the current literature\. Our framework gives endpoint\-specific sample\-size formulas that account for the joint covariance structure of the probability estimates: a distribution\-free rule for affine bounds, and a pilot\-based plug\-in rule with theoretical safety guarantees for ratio\-type bounds\. Simulations show that the proposed rules achieve the target precision and coverage, recover a much smaller size requirement for binary PNS than the existing calculation, and provide sample\-size designs for other discrete PoCs where no prior general sample\-size formula is available\.

## Procedural Refinement by LLM\-driven Algorithmic Debugging for ARC\-AGI\-2

**Authors:** Yuning Qiu; Lin\-Feng Zou; Jiong\-Da Wang; Xue\-Rong Yuan; Wang\-Zhou Dai

**ID:** 150157 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kEvf2Ms1q9>) | [PDF](<https://openreview.net/pdf?id=kEvf2Ms1q9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150157>)

In high\-complexity abstract reasoning, a system must infer a latent rule from a few examples or structured observations and apply it to unseen instances\. LLMs can express such rules as programs, but ordinary conversation\-based refinement is largely outcome\-level: it observes that an answer or output is wrong without formally re\-checking which abstraction, relation, or transformation justified that outcome\. We propose \\emph\{Abduction\-Based Procedural Refinement\} \(ABPR\), a neuro\-symbolic refinement approach that couples an LLM with a Prolog meta\-interpreter\. ABPR treats each candidate program as an executable declarative hypothesis of the latent rule and reifies its SLD goal\-\-subgoal resolution into compact proof\-tree\-style derivations, following Shapiro's algorithmic program debugging \(APD\)\. In this view, refinement is not merely code\-level debugging, but semantic re\-checking of the model's hypothesised rule\. We evaluate ABPR primarily on ARC\-AGI\-2, a challenging few\-shot abstract rule induction benchmark over grid transformations\. ABPR with Gemini\-3\-Flash achieves 56\.67\\% Pass@2, while GPT\-5\.5 xHigh with ABPR reaches 98\.33\\% Pass@2 on the public evaluation set\. Supplementary experiments on fill\-in\-the\-blank I\-RAVEN\-X and A\-I\-RAVEN adaptations provide evidence that the same trace\-guided framework extends beyond ARC\-specific grid tasks to RAVEN\-style relational and analogical abstraction\. Repeated\-run and sensitivity analyses show that parallel trace\-guided search reduces stochastic variance as search breadth and refinement depth increase\.

## Query\-Limited Community Recovery in Stochastic Block Models

**Authors:** Sabyasachi Basu; MANUJ MUKHERJEE; Lutz Oettershagen; Suhas Thejaswi

**ID:** 149578 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=p4JwxDfSjp>) | [PDF](<https://openreview.net/pdf?id=p4JwxDfSjp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149578>)

We study exact community recovery in the two\-community stochastic block model on $n$ vertices under limited and noisy access to network data\. The learner may query a noisy neighborhood oracle that reveals each true neighbor of a queried vertex independently with fixed probability and never returns non\-neighbors, subject to a finite query budget\. We consider both oracle\-only access and a combined model where the learner also observes a single subsampled copy of the underlying graph\. For oracle\-only access, balanced uniform querying gives a sharp non\-adaptive benchmark: when each vertex is queried the same integer number of times, the observations reduce to an SBM with attenuated edge probabilities and the Abbe\-\-Bandeira\-\-Hall exact\-recovery threshold applies\. We show that this benchmark is not adaptively optimal: a two\-stage adaptive strategy succeeds with $n\+o\(n\)$ queries in a regime where balanced uniform querying requires $m n$ queries for some $m&gt;1$\. With an additional subsampled graph, we prove a sublinear\-query adaptivity gap: balanced data\-independent uniform querying with a sublinear budget does not improve over the subsampled graph alone, whereas adaptive querying can target a small set of uncertain vertices and achieve exact recovery\. Thus adaptive data acquisition can strictly improve the information\-theoretic limits of exact recovery\.

## Re:Cognize \- A Framework For Open\-Set Comic Character Re\-Identification

**Authors:** Aaditya Baranwal; Madhav Kataria; Yogesh Rawat; Shruti Vyas

**ID:** 138878 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zGCbUayJh6>) | [PDF](<https://openreview.net/pdf?id=zGCbUayJh6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138878>)

Comics and manga tell stories through characters whose appearances change from panel to panel, yet readers recognise them hundreds of pages later without ever consulting a cast list\. Character re\-identification models rarely face the same challenge: existing evaluations give them a fixed set of identities before the story begins\. Re:Cognize instead asks models to recognise characters as the story unfolds and learn who is who along the way\. Across three manga corpora, we evaluate five Re\-ID backbones and MECHA , a memory\-augmented baseline we introduce, and find that the central difficulty lies somewhere unexpected\. Recognising familiar characters is nearly solved\. Knowing which matches to trust is not\. When models build a gallery and grow it from their own predictions, their performance deteriorates, even though correct identity labels would improve it by over twenty points\. This raises a simple question: when should a model trust its own match? We derive a single comparison that determines when gallery updates improve recognition and use it to design VOUCH , which updates its memory only when the page provides supporting evidence\. Without fitting additional parameters, VOUCH recovers between one\-third and two\-thirds of the improvement available from perfect labels\. RE:COGNIZE measures whether a model can recognise characters as it reads; VOUCH shows how to remember them reliably\. We focus our methodological claims on identity maintenance for previously encountered characters, while separately evaluating new\-character emergence as a diagnostic under a fixed reference rule to distinguish recognition from discovery\.

## Sequential Solution Concepts in Cooperative Games with Generalized Characteristic Functions

**Authors:** Ashwin Goyal; Drashthi Doshi; Swaprava Nath

**ID:** 149254 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rjjW3nGZaR>) | [PDF](<https://openreview.net/pdf?id=rjjW3nGZaR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149254>)

Motivated by the fact that the worth of a coalition may depend on the order in which agents arrive, Nowak and Radzik \(1994\) \(NR\) introduced cooperative games with generalized characteristic functions\. We study such temporal cooperative games \(TCGs\), where the worth function v is defined on sequences of agents π rather than sets S\. This order sensitivity necessitates a re\-examination of axioms for reward sharing\. NR and subsequent work proposed several axioms; the resulting solution concepts are still inherently order\-oblivious and closely tied to the Shapley value\. In contrast, we focus on sequential solution concepts that explicitly depend on the realized order π\. We study reward\-sharing mechanisms satisfying incentive for optimal arrival\(I4OA\), which promotes orders maximizing total worth; online individual rationality \(OIR\), which ensures agents are not harmed by later arrivals; and sequential efficiency \(SE\), which requires that the worth of any sequence is fully distributed among its agents\. These axioms are intrinsic to TCGs, and we characterize a class of reward\-sharing mechanisms uniquely determined by them\. The classical Shapley value does not directly extend to this setting\. We therefore construct natural Shapley analogs in two worlds: a sequential world, where rewards are defined for each sequence–agent pair, and an extended world, where rewards are defined per agent, consistent with the NR framework\. In both cases, the axioms of efficiency, additivity, and null player uniquely characterize the corresponding Shapley analogs\. But these Shapley analogs are disjoint from the class of solutions satisfying the sequential axioms, even for convex and simple TCGs\. Our results reveal a fundamental tension in temporal cooperative games: when order matters, solution concepts satisfying natural sequential incentives must differ structurally from Shapley\-based allocations, motivating new axiomatic foundations for sequential reward sharing\.

## Separating Common and Unique Directions for Model Merging

**Authors:** Shiting Wang; Yingjie Zou; Ke Li

**ID:** 149235 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rvKcBnoRlt>) | [PDF](<https://openreview.net/pdf?id=rvKcBnoRlt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149235>)

Model merging combines multiple fine\-tuned models without additional training, and arithmetic methods have emerged as a simple yet effective way to merge models without data\. However, existing arithmetic methods treat task vectors in parameter space and apply a single element\-wise rule to directions that can differ in mergeability\. In a shared directional basis, we find a consistent two\-regime structure: a low\-dispersion common bulk shared across tasks and a high\-dispersion task\-dominated tail that carries disproportionate energy\. These findings motivate Common\-Unique Subspace Decomposition \(CUSD\), a data\-free pre\-merging method that separates task vectors into common and unique directional components, merges the common components with downstream arithmetic operator, and retains unique residuals separately\. Experiments across 11 base models, four model families, and four arithmetic\-based merging operators show that CUSD improves 42 of 44 model\-operator combinations and achieves up to 22\.5% improvement over the corresponding baselines\.

## Learning under Localized Minority Imbalance

**Authors:** Amin Hosseininasab; Steven M Shugan

**ID:** 148554 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x28XrJ3gbl>) | [PDF](<https://openreview.net/pdf?id=x28XrJ3gbl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148554>)

Class\-imbalance methods typically assume that observed minority instances are an unbiased sample of their class\. However, in many real\-world settings, minority observability depends on both class label and feature values\-\-\-for example, while the true distribution of positive instances is uniform across demographics, they are less likely to be observed for particular demographic subgroups\. This leads to a localized minority imbalance problem, posing a deeper challenge beyond general class\-count imbalance\. We show that under localized minority imbalance, existing imbalance mitigation techniques can overfit the observed training data and generalize poorly to under\-observed regions of the minority distribution\. To address this, we propose a tree\-based stratification approach that recursively partitions the feature space to construct approximately unbiased subsets of the training data\. For each stratum, we pair its majority instances with the full observed minority set and train a base classifier to create an ensemble\. Extensive experiments over benchmark tabular datasets simulated with localized minority imbalance show that our approach outperforms popular and state\-of\-the\-art imbalance mitigation techniques\. We also introduce a gold\-standard evaluation protocol that uses unbiased test sets, and demonstrate that conventional hold\-out evaluation from the same localized\-imbalance data can substantially bias performance\. Overall, our results highlight that the cause of imbalance is as important as the correction method\.

## ReVMap: Vectorized Global Mapping via Connectivity\-Aware Local Map Fusion

**Authors:** Hongjae Shin; Jungho Kim; Donghyuk Kwak; Myeongjun Kim; Seunghoon Yu; Jiyong Oh; Jun Won Choi

**ID:** 152372 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TZ6rQlj9GO>) | [PDF](<https://openreview.net/pdf?id=TZ6rQlj9GO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152372>)

Large\-scale annotation of vectorized high\-definition \(HD\) maps requires substantial human effort, motivating local\-to\-global auto\-labeling that incrementally constructs global maps from local vector predictions\. In this formulation, limited reliability management allows inaccurate predictions to be accumulated and reused as priors, causing persistent error propagation across iterations\. We propose ReVMap, a local\-to\-global framework for reliable vectorized global map construction\. ReVMap introduces a reliability\-aware map evolution strategy that unifies uncertainty\-guided prior reuse with revisable global map updates\. To realize this strategy, ReVMap estimates localization uncertainty for vectorized local map elements and propagates these reliability cues to the accumulated global map\. The resulting uncertainty\-aware global representation guides subsequent local prediction and facilitates revisable integration through learning\-based local\-to\-global connectivity estimation and uncertainty\-aware fusion\. ReVMap achieves state\-of\-the\-art results on nuScenes and Argoverse2, with 36\.1 mGAP, 43\.4 miECM, and 58\.0 local mAP on nuScenes, and 62\.1 mGAP, 62\.5 miECM, and 77\.0 local mAP on Argoverse2\.

## Second\-Order Complexity of Neural ODE Inference

**Authors:** Yoshihiro Maruyama

**ID:** 149832 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=my6jq2Z8kM>) | [PDF](<https://openreview.net/pdf?id=my6jq2Z8kM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149832>)

Neural ordinary differential equations replace a finite layer stack by the solution map of a learned dynamical system\. Thus the machine\-learning primitive evaluated at inference time is the flow endpoint generated by the learned vector field, computed to requested accuracy\. We study the complexity of this global forward pass when the vector field has standard compactness and Lipschitz certificates\. Using second\-order complexity theory, we identify the exact operator\-level complexity of this local\-to\-global computation: scalar Neural\-ODE endpoint inference is second\-order polynomial\-time equivalent to the classical Lipschitz IVP solution operator and is therefore FPSPACE$\_2$\-complete in the worst case\. This complexity resides in the continuous\-depth layer itself, independently of any particular numerical solver: even one fixed three\-dimensional autonomous Neural\-ODE block with $C^1$ local dynamics can define a PSPACE\-hard input\-output map\. At every finite smoothness level $C^k$ with $k\\geq2$, such autonomous blocks can define counting\-hierarchy\-hard maps\. One scalar readout\-gradient query recovers the forward endpoint, so the same complexity reaches an elementary training\-gradient computation\. Hence continuous\-depth models and compressed\-depth tied ResNets can realize worst\-case global computational complexity even when local dynamics are cheap\. As a tractable counterpart, fixed\-dimensional Taylor\-certified analytic vector fields admit polynomial\-time endpoint inference under quantitative magnitude and radius certificates\. These results show, based on the rigorous framework of second\-order complexity theory, that the computational reliability of continuous\-depth learning systems depends jointly on global flow structure, representation certificates, and the cost of local network evaluations\.

## Variational Approach to Optimal IPS Estimator for Multi\-logger Off\-Policy Evaluation

**Authors:** Joon Suk Huh; Junghoon Seo

**ID:** 155166 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7noS6dFr9Q>) | [PDF](<https://openreview.net/pdf?id=7noS6dFr9Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155166>)

We study off\-policy evaluation \(OPE\) in contextual bandits with data collected from multiple logging policies\. Inverse propensity scoring \(IPS\) is a standard approach to OPE and extends naturally to the multi\-logger setting\. However, as highlighted by Agarwal et al\. \[2017\], there appears to be no IPS estimator that consistently outperforms the others in this setting\. We resolve this dilemma by deriving an optimal IPS estimator with sample\-dependent weights that minimize variance subject to unbiasedness\. Using a variational calculus approach, we obtain closed\-form optimal weights, yielding an estimator that is unbiased and achieves asymptotically optimal variance within an weighted\-IPS estimator class\. Experiments on benchmark datasets confirm this theoretical resolution in practice, showing that our estimator consistently outperforms existing multi\-logger IPS methods\. We also extend our estimator to a doubly robust form by incorporating a conditional reward estimator\. We compare the resulting DR extension with the semiparametrically efficient DR estimator of Kallus et al\. \[2021\], both theoretically and empirically\. We show that the two estimators achieve the same asymptotic variance when the conditional reward estimator is consistent, while our estimator can retain semiparametric efficiency under certain forms of reward misspecification\. Empirically, the proposed DR estimator achieves lower variance than the existing DR baseline\.

## AgentSSL: Can MLE Agents Leverage Unlabeled Data?

**Authors:** Akanksha Sarkar; Ethan Lin; Ziang Liu; Kristin Branson; Jennifer Sun

**ID:** 154115 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G9vxuLIz7v>) | [PDF](<https://openreview.net/pdf?id=G9vxuLIz7v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154115>)

Acquiring high\-quality labeled data and engineering effective learning pipelines are two critical bottlenecks to applying machine learning systems in new domains\. Although recent MLE agents have shown promise in automating pipeline design, their behavior has been studied almost exclusively in fully supervised settings\. In many domains, however, labeled data is expensive while unlabeled data is abundant\. In this work, we study agents in the semi\-supervised learning \(SSL\) regime by framing SSL as a program search problem and exploring how agents navigate this space under limited supervision\. Our analysis focuses on three questions: \(1\) whether agents can effectively leverage unlabeled data, \(2\) how they leverage it and what strategies they discover, and \(3\) whether they can adapt these strategies to specific domains\. We find that agents can leverage and synthesize SSL strategies spanning decades of SSL research, achieving performance comparable to, and in some cases outperforming, established human\-engineered SSL methods\. We further validate these observations on real\-world ecological datasets, highlighting both the challenges and opportunities of transferring agent\-discovered strategies beyond controlled benchmarks\.

## Adaptive auditing of AI systems with anytime\-valid guarantees

**Authors:** Siyu Zhou; Patrick Vossler; Venkatesh Sivaraman; Yifan Mai; Jean Feng

**ID:** 154700 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Bfz7nxHizI>) | [PDF](<https://openreview.net/pdf?id=Bfz7nxHizI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154700>)

A major bottleneck in characterizing the failure modes of generative AI systems is the cost and time of annotation and evaluation\. Consequently, adaptive testing paradigms have gained popularity, where one opportunistically decides which cases and how many to annotate based on past results\. While this framework is highly practical, its extreme flexibility makes it difficult to draw statistically rigorous conclusions, as it violates classical assumptions: the number of observations is typically limited \(often 10 to 50 cases\) and decisions regarding sampling and stopping are made in the midst of data collection rather than based a pre\-specified rule\. To characterize what statistical inferences can be drawn from highly adaptive audits, we introduce a hypothesis testing framework from two 'dueling' perspectives: \(i\) the model's null that asserts there is no failure mode with performance below a target threshold versus \(ii\) the auditor's null that asserts they have a sampling strategy that will uncover a failure mode\. Leveraging Safe Anytime\-Valid Inference \(SAVI\), we formalize the auditor as conducting 'testing by betting', which translates into simultaneous e\-processes for testing the dueling null hypotheses\. Furthermore, \*if\* the auditor is sufficiently powerful, we prove that these two hypotheses are asymptotically inverses of each other, in that passage of a stringent audit does in fact certify the AI system as being globally robust\. Empirically, we demonstrate that our proposed testing procedures maintain anytime\-valid type\-I error control, outperform pre\-specified testing methods, and can reach statistically rigorous conclusions sometimes with as few as 20 observations\.

## Structured Unitary Tensor Network Representations for Circuit\-Efficient Quantum Data Encoding

**Authors:** Guang Lin; Toshihisa Tanaka; Qibin Zhao

**ID:** 151491 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aFs3FmmvmA>) | [PDF](<https://openreview.net/pdf?id=aFs3FmmvmA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151491>)

Encoding classical data into quantum states is a central bottleneck in quantum machine learning: many widely used encodings are circuit\-inefficient, requiring deep circuits and substantial quantum resources, which limits scalability on quantum hardware\. In this work, we propose TNQE, a circuit\-efficient quantum data encoding framework built on structured unitary tensor network \(TN\) representations\. TNQE first represents each classical input via a TN decomposition and then compiles the resulting tensor cores into an encoding circuit through two complementary core\-to\-circuit strategies\. To make this compilation trainable while respecting the unitary nature of quantum operations, we introduce a unitary\-aware constraint that parameterizes TN cores as learnable block unitaries, enabling them to be directly optimized and directly encoded as quantum operators\. The proposed TNQE framework enables explicit control over circuit depth and qubit resources, allowing the construction of shallow, resource\-efficient circuits\. Across a range of benchmarks, TNQE achieves encoding circuits as shallow as $0\.04\\times$ the depth of amplitude encoding, while naturally scaling to high\-resolution images \($256 \\times 256$\) and demonstrating practical feasibility on real quantum hardware\.

## The FACTS Leaderboard: A Comprehensive Benchmark for Large Language Model Factuality

**Authors:** Aileen Cheng; Alon Jacovi; Amir Globerson; Ben Golan; Zhaobin Kuang; Chris Alberti; Connie Tao; Eyal Ben\-David; Gaurav Singh Tomar; Lukas Haas; Yonatan Bitton; Adam Bloniarz; Aijun Bai; Andrew Wang; Anfal Siddiqui; Aravindan Raghuveer; Arturo Bajuelos Castillo; Aviel Atias; Chang Liu; Corey Fry; Daniel Balle; Deepanway Ghosal; Doron Kukliansky; Dror Marcus; Elena Gribovskaya; Eran Ofek; Honglei Zhuang; Itay Laish; Jan Ackermann; Lily Wang; Megan Risdal; Megan Barnes; Michael Fink; Mohamed Amin; Moran R Ambar; Natan Potikha; Nikita Gupta; Nitzan Katz; Noam Velan; Ofir Roval; Ori Ram; Polina Zablotskaia; Prathamesh Bang; Priyanka Agrawal; Rakesh Ghiya; Sanjay Ganapathy; Simon Baumgartner; Sofia Erell; Sushant Prakash; Thibault Sellam; Vikram R Sudarshan; Xuanhui Wang; Yaroslav Akulov; Yulong Yang; ZHEN YANG; Zhixin Lai; Zhongru Wu; Avinatan Hassidim; Fernando Pereira; Slav Petrov; Srinivasan Venkatachary; Tulsee Doshi; Yossi Matias; Sasha Goldshtein; Dipanjan Das

**ID:** 139445 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PYYLCc0DHq>) | [PDF](<https://openreview.net/pdf?id=PYYLCc0DHq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139445>)

We introduce The FACTS Leaderboard, an online leaderboard suite and associated set of benchmarks that comprehensively evaluates the ability of language models to generate factually accurate text across diverse scenarios\. The suite provides a holistic measure of factuality by aggregating the performance of models on four distinct sub\-leaderboards: \(1\) FACTS Multimodal, which measures the factuality of responses to image\-based questions; \(2\) FACTS Parametric, which assesses models’ world knowledge by answering closed\-book factoid questions from internal parameters; \(3\) FACTS Search, which evaluates factuality in information\-seeking scenarios, where the model must use a search API; and \(4\) FACTS Grounding \(v2\), which evaluates whether long\-form responses are grounded in provided documents, featuring significantly improved judge models\. Each sub\-leaderboard employs automated judge models to score model responses, and the final suite score is an average of the four components, designed to provide a robust and balanced assessment of a model’s overall factuality\. The FACTS Leaderboard Suite will be actively maintained, containing both public and private splits to allow for external participation while guarding its integrity\. It can be found at https://www\.kaggle\.com/benchmarks/google/facts\.

## Second\-Order Complexity Theory for Risk, Explanation, and Calibration in Machine Learning

**Authors:** Yoshihiro Maruyama

**ID:** 151293 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bVeq5pDHJl>) | [PDF](<https://openreview.net/pdf?id=bVeq5pDHJl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151293>)

Many machine\-learning quantities are straightforward to compute once a finite data set is fixed, but their population versions can encode much harder computational problems\.  We study this gap for population risk, attribution, counterfactual explanation, and calibration certification, asking which of these quantities can be approximated in time polynomial in the requested number of bits\.  The formal basis is the Kawamura\-Cook second\-order complexity theory, instantiated here with compact\-domain real functions carrying explicit evaluation, continuity, and range information\.  In this framework, expected risk has exactly the difficulty of real integration\.  Integrated gradients behave differently by dimension: in one dimension they reduce to evaluating endpoints, while in two dimensions even one coordinate can already encode one\-dimensional integration when the relevant derivative is provided\.  The same lens separates the costs in related explanation and certification methods\.  Interventional SHAP is integration\-hard even with two features, succinct coalitional SHAP is \#P\-hard, nearest\-threshold counterfactual search is NP\-hard, and continuous calibration certificates combine integration with maximization\.  These results give a taxonomy of when population\-level explanation and certification admit polynomial\-time bit approximations, and what additional structure is needed for tractability\.

## Faster Dynamic Graph Clustering with Hierarchical Graph Contraction

**Authors:** Suranjan De; Steinar Laenen; He Sun

**ID:** 153729 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JDWJEQwXiU>) | [PDF](<https://openreview.net/pdf?id=JDWJEQwXiU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153729>)

We study clustering algorithm for dynamic evolving graphs $\\\{ G\_t\\\}$, in which new edges \(and potentially new vertices\) are added into a graph, and the underlying cluster structure of the graph gradually changes over time\. By designing a hierarchical data structure for dynamically maintaining the cluster structure of $\\\{ G\_t\\\}$, we prove that the cluster structure of $G\_T$ can be maintained with $O\(d\)$ amortised update time and $\\widetilde\{O\}\\left\(n\_T^\{1/d\}\\right\)$ amortised query time, for an arbitrary large constant $d$\.  This significantly improves the previous state\-of\-the\-art \(Laenen and Sun, ICML\~'24\), which requires $O\(1\)$ update time and $O\(n\_T/\\log n\_T\)$ amortised query time\. We further demonstrate this improvement with experiments on both synthetic and real\-world datasets\.

## The Alien Space of Science: Sampling Coherent but Cognitively Unavailable Research Directions

**Authors:** Alejandro H\. Artiles; Martin Weiss; Levin Brinkmann; Iyad Rahwan; Bernhard Schölkopf; Chris Pal; Hugo Larochelle; Anirudh Goyal; Nasim Rahaman

**ID:** 152222 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UepmNYnfUe>) | [PDF](<https://openreview.net/pdf?id=UepmNYnfUe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152222>)

Scientific discovery is constrained not only by what is true, but by what is cognitively available to the researchers currently exploring a field\. Many directions are coherent in light of the literature yet unlikely to be proposed because no existing community occupies the right combination of concepts, methods, and intuitions\. Modern language models inherit this bias, recombining high\-density regions of the literature when prompted for novel ideas\. We introduce a framework that targets the complementary region, which we call the \\textbf\{alien space of science\}, where directions are plausible under the structure of existing knowledge but unlikely under the distribution of existing researchers\. Our method first decomposes papers into granular conceptual units and clusters them into a shared vocabulary of \\emph\{idea atoms\}\. It then learns two complementary models over this vocabulary\. A \\emph\{coherence model\} scores whether a combination of atoms forms a viable research direction, and an \\emph\{availability model\} scores whether any existing author community is positioned to produce a given combination\. Sampling alien directions then reduces to ranking atom combinations that maximize coherence while minimizing availability\. On a corpus of 16\{,\}068 peer\-reviewed LLM papers from NeurIPS, ICLR, ICML, and major NLP venues, the resulting sampler explores a $3\.5\\text\{\-\-\}7\\times$ broader effective atom vocabulary than frontier LLM ideation baselines without sacrificing coherence, and produces ideas that match or exceed those baselines under blind LLM, human, and downstream experimental evaluation\.  By separating scientific plausibility from community availability, our framework points toward AI ideation that complements rather than merely accelerates human science, expanding exploration into coherent directions the current community is unlikely to pursue\.

## Robust Stream Classification using Time Neutralising Decision Trees

**Authors:** Brandon Gower\-Winter; Georg Krempl

**ID:** 156091 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0Qrvmgx85z>) | [PDF](<https://openreview.net/pdf?id=0Qrvmgx85z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156091>)

Data Streams are characterised as a potentially infinite source of data subject to non\-stationarity\. This non\-stationarity, also called Concept Drift, often results in deployed predictive models having to be perpetually retrained as the underlying data generating process of the stream changes over time\. Drift Detectors are a class of methods used to identify these changes, triggering these retraining procedures\. Historically, Stream Learning has operated under the assumption that instances are only seen once, and cannot be stored for later use\. Contemporary work relaxes this assumption yet drift detection and simple resetting procedures are still ubiquitous\.  Building on related work which has shown that traditional Batch Learning algorithms often outperform Stream Learning algorithms when instances can be stored, we introduce Time Neutralising Trees \(TNT\), a Decision Tree architecture that enables robust stream classification in settings with Concept Drift\. During training, TNT will filter out \("neutralise"\) old training samples that are no longer relevant given the current context of the stream\. If those instances become relevant again, TNT will then re\-include them\. We evaluate TNT, and related algorithms on 24 real and semi\-real classification data streams from the USP DS repository\. Results show strong evidence that TNT achieves state\-of\-the\-art performance on a wide\-range of data streams with varying concept drift types\.

## GEAR: Generator\-Adaptive State Space Models for Associative Recall

**Authors:** Jun Meng; Mohammadhossein Amouei; Zengyu Lin; Xinyu Hu; Benjamin C\. M\. Fung

**ID:** 155668 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3skXDWaobd>) | [PDF](<https://openreview.net/pdf?id=3skXDWaobd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155668>)

Selective state space models \(SSMs\) such as Mamba\-3 are efficient and increasingly competitive with Transformers\. However, their fixed recurrent state remains a bottleneck for using context as temporary memory\. To address this issue, we propose $ \\textit\{GEAR\} $ \(GEnerator\-Adaptive state space models for associative Recall\), a slow\-hypernetwork that produces coefficients for LoRA updates to the SSM token\-to\-recurrence parameter generators\. GEAR makes the parameter generator context\-adaptive while preserving the original linear\-time Mamba\-3 scan\. To evaluate whether this adaptation improves in\-context recall, we pretrain 180M\-parameter models for 2B FineWeb\-Edu tokens and compare against Mamba\-3 baseline and ablations at the same scale\. In the Multi\-Query Associative Recall \(MQAR\) task, models see $N$ in\-context key\-value bindings and must predict the value paired with a queried key\. In compact MQAR evaluation where the adaptive path is active at the query, GEAR improves candidate\-restricted NLL over Mamba\-3 by 0\.70, 0\.69, and 0\.48 at $ N=32,64,128 $, respectively\. Beyond compact MQAR, GEAR reduces the penalty on older queried bindings and gives the clearest gain within the Mamba\-3 family under moderate random\-filler interference\. These results show that context\-adaptive SSM generator improves associative recall while preserving Mamba\-3 language modeling capabilities\.

## Risk\-guided Estimation\-aware Acceptance for Learning with Synthetic Data

**Authors:** Zijie Tian; Kevin Jin; yang Chen; Thomas Chun Man Lee

**ID:** 151392 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=azVsG06j3f>) | [PDF](<https://openreview.net/pdf?id=azVsG06j3f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151392>)

Synthetic data generation is becoming increasingly prevalent as advances in generative modeling accelerate\. However, theoretical understanding of when and how synthetic data can improve downstream estimation and prediction remains underdeveloped\. This question is especially relevant when synthetic samples are generated from proposal mechanisms informed by trained generators or domain knowledge, whose distributions may differ from the target population\. To address this question, we propose REAL\-Syn: Risk\-guided Estimation\-aware Acceptance for Learning with Synthetic Data, a framework for statistical learning with synthetic data selection\. REAL\-Syn uses selected subsets of candidate synthetic data to reduce estimator variability and often improve downstream prediction under target\-proposal mismatch\. The proposed procedure uses a covariance\-based risk surrogate to select from the set of candidate synthetic samples; the accepted samples are then reweighted and pooled with the real observations for inference\. We present theoretical results on the surrogate\-optimal acceptance rule and the proposed selection procedure\. We empirically show that REAL\-Syn achieves competitive performance in simulations and an application to solar flare intensity forecasting\.

## Morpho\-Temporal Decoupling: How Primate Neurons Expand Dendrites Without Losing Speed

**Authors:** Jiawei Zhang; Haoyu Wang; Jialun Ma; Wei Dai; Yuguo Yu

**ID:** 151560 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZgjOLM3AWA>) | [PDF](<https://openreview.net/pdf?id=ZgjOLM3AWA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151560>)

During evolution, biological neurons scale computation by expanding dendritic branches\. However, this expansion creates a biophysical dilemma: increased membrane area typically imposes a capacitive load that slows somatic dynamics and narrows temporal bandwidth\. Here, we investigate how primate cortical neurons resolve this tradeoff\. While primary basal dendrite number is relatively conserved across mouse cortical areas, it increases systematically along the primate cortical hierarchy\. Using biophysically constrained multicompartment modeling, we identify a key dimensionless control parameter\-\-\-the dendritic\-to\-somato\-apical specific membrane resistance ratio, $\\rho \\equiv R\_\{m,\\mathrm\{dend\}\}/R\_\{m,\\mathrm\{sa\}\}$, that governs the coupling between dendritic morphology and the effective somatic time constant $\\tau$\. In mouse\-like neurons \($\\rho&gt;1$\), adding basal dendrites progressively increases $\\tau$ and promotes reliable low\-pass integration\. Conversely, human\-like neurons operate near a balanced\-resistance regime \($\\rho \\approx 1$\), where resistive reweighting counterbalances morphology\-driven capacitive loading\. This allows $\\tau$ to remain nearly invariant despite expanded dendritic topology, shifting the structure\-function tradeoff toward faster, more flexible coding with improved high\-frequency tracking\. Our results reveal a biophysical scaling principle linking evolutionary dendritic architecture to hierarchy\-dependent coding, offering potential design rules for preserving temporal bandwidth in dendrite\-inspired neuromorphic architectures\.

## Confounding\-Aware Client Selection in Federated Learning via Causal Mediation Analysis

**Authors:** Xiaoyang Yi; Yuru Bao; Rihao Chang; Binhan Yang; Jian Zhang

**ID:** 149343 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qnyQCVffeL>) | [PDF](<https://openreview.net/pdf?id=qnyQCVffeL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149343>)

Federated Learning \(FL\) enables collaborative model training across clients while preserving data privacy\. However, FL typically relies on voluntary client participation with uniform rewards, which can lead to high\-quality clients dropping out due to inadequate incentives and low\-quality clients taking a free\-ride, both of which degrade overall model performance\. However, existing incentive mechanisms fail to capture the true contribution value of a client’s data to the global model, and often skew client selection toward cost compression rather than quality enhancement, thereby exacerbating confounding bias\. To address this, we propose CausalAFL, a causal\-based framework that reduces information asymmetry and corrects for confounding factors\. Specifically, CausalAFL builds a complete causal chain connecting client information, bid, and marginal contribution\. By jointly optimizing an inference network and a generative network within a variational inference framework, it precisely adjusts for causal bias\. Maximizing the evidence lower bound objective allows CausalAFL to separate true contribution from noise and highlight the value of high\-quality clients\. A social welfare objective that quantifies both natural direct and indirect effects guides the server to prioritize these clients, resulting in improved global model accuracy and social welfare\. Experiments on multiple datasets demonstrate that CausalAFL can guide clients to adjust their bids, leading to winners with higher contributions, confirming its effectiveness\.

## Online Quantile Omniprediction for Proper Losses

**Authors:** Hyunsuk Kim; Isaac Gibbs; Michael Mahoney; Ryan Tibshirani

**ID:** 150162 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kCmdx0LpMU>) | [PDF](<https://openreview.net/pdf?id=kCmdx0LpMU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150162>)

The task of constructing a predictor that is simultaneously accurate under multiple evaluation metrics has been popularized recently under the name omniprediction\. Prior work in this area has largely focused on binary prediction tasks, and existing results for multiclass and continuous outcomes typically suffer from slow error rates\. In this paper, we consider forecasts expressed as a set of quantiles over a discrete but otherwise arbitrary set of probability levels\. We develop sample\-efficient algorithms for constructing forecasts that are simultaneously accurate across all proper losses that satisfy mild regularity conditions, where proper losses are those minimized by predicting the true quantiles\. Our algorithms are online and can operate in a dynamic environment while simultaneously taking multiple losses into account, and their forecasts offer the potential to provide diverse end\-users with rich information for evaluating risk and informing a range of practical decision\-making tasks\. As an example, we demonstrate how our procedure can be used to ensemble quantile forecasts of COVID\-19 hospitalizations made by experts during the pandemic\.

## Spectral Estimation with Deformed Decompression

**Authors:** Siavash Ameli; Chris van der Heide; Liam Hodgkinson; Michael Mahoney

**ID:** 155359 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6C8mx74erl>) | [PDF](<https://openreview.net/pdf?id=6C8mx74erl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155359>)

Sample covariance matrices are fundamental objects in machine learning and statistics, with valuable information encoded into their eigenvalues\. When treating modern problems, the scale of these matrices can become prohibitive for tractable computation\. This creates a critical need for "spectral decompression": a method for inferring the eigenspectrum of a very large\-scale model using only information from its smaller realizations\. Existing methods fall into two main categories: those relying on spectral inversion; and those that rely on Free Decompression techniques\. On one hand, spectral inversion is a fundamentally ill\-posed problem that is notoriously unstable, often failing to yield reliable results in finite\-size settings\. On the other hand, while Free Decompression was recently proposed to address this scaling, its reliance on the Nica\-Speicher framework restricts its use to unitarily invariant ensembles, a symmetry condition that subsampled covariance matrices fail to satisfy\. In this work, we introduce Deformed Decompression \(DD\), a novel framework for the stable, forward\-extrapolation of spectral densities\. By leveraging properties of the companion matrix, DD recasts the spectral decompression problem as a directed evolution of the Stieltjes transform of the companion\. This approach bypasses the instabilities of traditional inversion and provides a robust methodology for scaling covariance matrices and even their generalized variants \(including Hessian matrices\) that lack unitary invariance\. We demonstrate the utility of our framework through experiments on a variety of random matrix examples, showing that DD successfully captures the complex spectral signatures of large\-scale systems\.

## SEAD: Competence\-Aware On\-Policy Distillation via Entropy\-Guided Supervision

**Authors:** Michael Lee; Zelei Cheng; Yu Wang; Renkun Ni; Sambit Sahu; Shi\-Xiong Zhang; William Campbell

**ID:** 155569 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4cZVcqbvw1>) | [PDF](<https://openreview.net/pdf?id=4cZVcqbvw1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155569>)

On\-policy distillation \(OPD\) has a property absent in offline distillation and RL: teacher supervision quality depends on student competence\. Incoherent rollouts yield noisy gradients; already\-mastered tokens yield redundant ones\. This creates waste at three scales—tokens, training phases, and prompts—yet existing methods supervise uniformly\. We introduce SEAD, which uses entropy as a unified probe of this competence\-dependent degradation at three scales: \(1\) joint teacher\-student entropy partitions tokens into zones receiving tailored divergences or zero gradient \(\~50% skipped\); \(2\) a cosine schedule anneals from forward to reverse KL as competence grows; \(3\) a competence\-gated curriculum introduces prompts easy\-to\-hard\. These components are symbiotically necessary: token selection requires coherent rollouts \(curriculum\), and annealing requires monotonic improvement \(also curriculum\)\. On OLMo\-3 \(7B to 32B\), SEAD achieves \+4\.8 average accuracy over vanilla OPD across six math benchmarks, with ablations confirming super\-additive interactions\.

## Beyond Steering Vector: Flow\-based Activation Steering for Inference\-Time Intervention

**Authors:** Zehao Jin; Ruixuan Deng; Junran Wang; Xinjie Shen; Chao Zhang

**ID:** 155564 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4edRXBSyRO>) | [PDF](<https://openreview.net/pdf?id=4edRXBSyRO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155564>)

Activation steering has emerged as a promising alternative for controlling language\-model behavior at inference time by modifying intermediate representations while keeping model parameters frozen\. However, large\-scale evaluations such as AxBench show that existing steering methods are often outperformed by simple in\-context prompting and generalize poorly to unseen concepts\. We hypothesize that these limitations arise from unvalidated simplifying assumptions shared across prior methods, which typically restrict steering interventions to fixed, single\-step, position\-invariant transforms\. We propose FLAS \(Flow\-based Activation Steering\), which learns a general, concept\-conditioned velocity field $v\_t\(h,t,c\)$ that transports unsteered activations to steered ones without relying on these assumptions\. On AxBench, FLAS is the first learned method to consistently outperform prompting, reaching held\-out harmonic means of $1\.015$ on Gemma\-2\-2B\-IT and $1\.113$ on Gemma\-2\-9B\-IT without per\-concept tuning\. Analysis of the learned flow shows curved, multi\-step, token\-varying trajectories, which suggests that previous hypotheses on activation space geometry might be incomplete\. Our code is available at https://anonymous\.4open\.science/r/FLAS\.

## Runtime Analysis of Cartesian Genetic Programming on MAX: A Proven Exponential Speedup

**Authors:** Duc\-Cuong Dang; Roman Kalkreuth; Andre Opris

**ID:** 155859 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2NN183v3aO>) | [PDF](<https://openreview.net/pdf?id=2NN183v3aO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155859>)

Genetic Programming \(GP\) is a search paradigm inspired from natural evolution for the automated discovery of expressions, functions, and computer programs\. Cartesian GP \(CGP\) is a flavor of GP that uses a graph\-based model to encode candidate programs, as contrasted to the conventional Tree\-based GP \(TGP\)\. Since its inception two decades ago, CGP has predominantly been analyzed empirically, thus little is known regarding its theoretical performance guarantees\.   This paper analyzes CGP for the MAX problem, which has been only rigorously studied for TGP with a proven expected runtime superlinear in the optimal program length $n$\. We prove that the expected time for the \(1\+1\) CGP employing common mutation operators to evolve an equivalent optimal of the same output is polylogarithmic in n, specifically at most $O\(\\log^9\{n\}\)$\. This is remarkable, as it shows an exponential speedup by switching to CGP\. Our results shed light on the benefit and the compactness of the graph\-based representation for programs, and on how CGP can navigate its search and fitness spaces efficiently\. This is a first proven performance guarantee for CGP on an established benchmark problem\. Experiments complement our theoretical findings\.

## Zeroth\-Order Stackelberg Control in Combinatorial Congestion Games

**Authors:** Saeed Masiha; Sepehr Elahi; Negar Kiyavash; Patrick Thiran

**ID:** 155193 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7a615Oquwi>) | [PDF](<https://openreview.net/pdf?id=7a615Oquwi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155193>)

We study Stackelberg \(leader\-\-follower\) control of network parameters \(tolls, capacities, incentives\) in combinatorial congestion games, where selfish users choose \\emph\{discrete\} routes \(or other combinatorial strategies\) and settle at a congestion equilibrium\. The leader minimizes a system\-level objective \(e\.g\., total travel time\) evaluated at equilibrium, but this objective can be nonsmooth because the set of used strategies can change abruptly\. We propose \\textsc\{Zeroth\-order Stackelberg\} \(\\textsc\{ZOS\}\), which couples a projection\-free Frank\-\-Wolfe equilibrium solver with a zeroth\-order outer update, avoiding differentiation through equilibria\. We prove convergence to generalized Goldstein stationary points of the true equilibrium objective, with explicit dependence on the equilibrium approximation error, and analyze subsampled oracles: if the sampled candidate set contains an LMO minimizer with probability $\\kappa\_m$, then the Frank\-\-Wolfe error decays as $\\mathcal\{O\}\(1/\(\\kappa\_m T\)\)$\. We also propose stratified sampling as a practical way to avoid a vanishing $\\kappa\_m$ when LMO minimizers concentrate in strata defined by simple features such as path length\. In public road\-network experiments covering large strategy spaces requiring subsampled oracles, \\textsc\{ZOS\} reaches small follower\-equilibrium gaps and final social costs comparable to differentiation\-based methods, while reducing runtime per outer iteration by $20$\-\-$1000\\times$ and using much less peak memory\.

## Archimedean Copula Inference via Taylor\-Mode AD

**Authors:** Cambridge Yang; Dongdong Li

**ID:** 153718 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JHPRlItZ0c>) | [PDF](<https://openreview.net/pdf?id=JHPRlItZ0c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153718>)

No existing nested Archimedean copula tool handles all three of \(a\) arbitrary per\-variable \(right\-\)censoring in survival analysis, \(b\) arbitrary nesting trees, and \(c\) exact parameter gradients\. Existing implementations handle only bivariate problems, low dimensional \(i\.e\., $d \\leq 10$\) cases, two layers of nesting, or only hand\-derived copula nestings\. We present acopula, a JAX\-native framework that, given any Archimedean generator—classical or neural—evaluates exact nested\-copula likelihoods and parameter gradients under arbitrary censoring masks in polynomial time\. The mechanism is polynomial powering of Taylor\-mode automatic differentiation output, which replaces per\-family hand\-derived partial Bell polynomial tables with a single differentiable computation that any user\-defined generator can drive\. We conduct extensive simulations to verify the correctness of acopula\. We then demonstrate \(a\) per\-variable censoring on $85,229$ MIMIC\-IV ICU admissions in high dimensions with $d=53$, fit by both classical Archimedean families and nested neural Archimedean copulas; \(b\) an 11\-sector hierarchical model on S&amp;P 500 daily returns at $d=98$; \(c\) family\-agnostic censored MLE across ten families, five of them with no prior implementation, on a retinopathy study; and \(d\) a $\\sim650\\times$ per\-density speedup over R's nacLL at $d=35$, scaling quadratically to $d=8,000$\.

## Learning with Enumeration: Neural\-Guided SAT Framework for Cryptographic Key Recovery

**Authors:** Xinhao Zheng; Xinhao Song; Jinchen Yu; Zhuoyuan Xu; Gongshen Liu; Junchi Yan

**ID:** 150822 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=f2JZzkc3un>) | [PDF](<https://openreview.net/pdf?id=f2JZzkc3un>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150822>)

Boolean satisfiability \(SAT\) provides a foundation tool for cryptographic key recovery by encoding ciphers into CNF or ANF representations\. However, heuristic solvers and their neural\-enhanced variants often degrade significantly on cryptographic instances due to pronounced structural symmetry, a large number of intermediate variables, and complex algebraic dependencies\. Existing neural approaches—ranging from end\-to\-end prediction to solver\-integrated heuristics—face challenges in scalability, assignment accuracy, or computational efficiency\. In this paper, we propose a unified neural\-guided enumerative SAT framework for cryptographic key recovery\. It performs a single forward neural guidance to identify a subset of $k$ critical variables, followed by enumeration over their assignments before invoking a heuristic SAT solver\. This design effectively reduces the combinatorial search space while keeping neural overhead minimal\. We further introduce a taxonomy of neural guidance across data and model capability regimes, including supervised selection with cryptographic priors, uncertainty\-driven selection with assignment prediction, and robust fallback strategies using the model trained on general SAT datasets\. Experiments on 10 SAT solvers and 2 cube\-and\-conquer strategies over SAT4CryptoBench and SAT Competition benchmarks demonstrate up to $5\\times$ speedup and approximately 2× average improvement on cryptographic instances, while maintaining better performance on general SAT datasets\. These results highlight the effectiveness and generalization of this framework, illustrating its potential to bridge machine learning and SAT solving in cryptanalysis tasks\.

## XDecomposer: Learning Prior\-Free Set Decomposition for Multiphase X\-ray Diffraction

**Authors:** Hanyu Gao; Bin Cao; YUNYUE SU; Tong\-yi Zhang; Qiang Liu

**ID:** 155852 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2Q4B95mpTf>) | [PDF](<https://openreview.net/pdf?id=2Q4B95mpTf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155852>)

Multiphase powder X\-ray diffraction \(PXRD\) analysis remains a fundamental bottleneck in structure identification, as real\-world synthesis often produces complex mixtures whose constituent phases \(components\) cannot be reliably disentangled\. While recent advances in representation\-based crystal retrieval and generation suggest the possibility of inferring structures directly from PXRD, existing approaches largely assume single\-phase inputs and break down in multiphase settings\. Here, we present XDecomposer, a prior\-free framework for joint decomposition and identification of multiphase XRD patterns without requiring candidate phase lists, structural templates, or prior knowledge of phase number\. We formulate multiphase diffraction analysis as a set prediction problem, where the model infers an unordered set of phase\-resolved components, their mixture proportions, and corresponding structural representations within a unified architecture\. A phase\-query\-driven decomposition mechanism, together with diffraction\-consistent physical reconstruction, enables accurate source separation while preserving crystallographic fidelity\. Extensive experiments on both simulated and experimental datasets show that XDecomposer substantially improves reconstruction accuracy and phase identification across diverse chemical systems, while maintaining strong generalization to unseen mixtures\. These results provide a practical route toward data\-driven, source\-resolved multiphase XRD analysis and reduce long\-standing dependence on prior\-guided iteratively phase matching\. The code is openly available at \\url\{https://anonymous\.4open\.science/r/XDecomposer\-FE0B\}

## Group of Skills: Group\-Structured Skill Retrieval for Agent Skill Libraries

**Authors:** Kun Zeng; Yu Huo; Siyu Zhang; Zi Ye; Yuecheng Zhuo; haoyue liu; YuQuan Lu; Junhao Wen; Xiaoying Tang

**ID:** 153234 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MmJBYf16Bn>) | [PDF](<https://openreview.net/pdf?id=MmJBYf16Bn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153234>)

Skill\-augmented agents increasingly rely on large reusable skill libraries, but retrieving relevant skills is not the same as presenting usable context\. Existing methods typically return atomic skills or dependency\-aware bundles whose internal roles remain implicit, leaving the agent to infer the execution entry point, support skills, visible requirements, and failure\-avoidance guidance\. We introduce \*\*G\*\*roup \*\*o\*\*f \*\*Skills\*\* \(\*\*GoSkills\*\*\), an inference\-time group\-structured retrieval method that changes the agent\-facing retrieval object from a flat skill list to a compact, role\-labeled execution context\. \*\*GoSkills\*\* builds anchor\-centered skill groups from a typed skill graph, expands support groups through a group graph, bottlenecks the selected group plan into a bounded set of atomic skill payloads, and renders a fixed execution contract with \*\*START\*\*, \*\*SUPPORT\*\*, \*\*CHECK\*\*, and \*\*AVOID\*\* fields, without changing the downstream agent, skill payloads, or execution environment\. Experiments on SkillsBench and ALFWorld show that \\goskills preserves visible\-requirement coverage under a small skill budget, improves over flat skill\-access baselines, and often improves reward and agent\-only runtime relative to structural retrieval references\. Code is available at https://anonymous\.4open\.science/r/Group\-of\-Skills\-E861\.

## Beyond Exemplar Selection: Value\-Aware Memory Allocation in Replay\-Based Continual Learning

**Authors:** Yuhang Li; Guoxu Zhou; Zhenhao Huang; Yuning Qiu; Qibin Zhao

**ID:** 155700 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3bHKdbo9Qx>) | [PDF](<https://openreview.net/pdf?id=3bHKdbo9Qx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155700>)

Replay is a standard strategy for mitigating catastrophic forgetting in continual learning, where a bounded memory buffer stores exemplars from previously seen classes\. Existing replay methods have largely focused on instance\-level decisions, such as which samples to store, replay, or replace, while the class\-wise allocation of memory slots is often treated as a uniform heuristic\. Here, we study class\-wise memory allocation as a complementary design axis and propose VAMA, a value\-aware memory allocation framework\. VAMA keeps cross\-task budgets balanced, estimates task\-local class values from Shapley\-inspired sample utility scores, and converts them into class\-wise quotas through a regularized allocation rule that conservatively deviates from class\-balanced replay\. This design changes only the class\-wise budgeting rule and leaves within\-class exemplar selection unchanged, making VAMA easy to integrate into replay pipelines\. Experiments on CIFAR\-100 and ImageNet\-100 show that VAMA consistently improves ER, iCaRL, and FOSTER across different memory budgets and task protocols\. Further analyses show that the improvements are not due to non\-uniform allocation alone, and that allocation\-relevant class\-value rankings stabilize early in training, enabling efficient value\-aware allocation\. These results suggest that class\-wise memory allocation is a consequential design choice in replay\-based continual learning\.

## MHWA: Multi\-timescale Hierarchical World\-Action Model

**Authors:** Pengcheng Pan; Guoqing Ma; Yuhan Zhang; Yang Chen; Yichen Liu; Ziheng Li; Shan Yu

**ID:** 154328 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ERSBHqRV1s>) | [PDF](<https://openreview.net/pdf?id=ERSBHqRV1s>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154328>)

Autoregressive world models have emerged as a powerful paradigm for sample\-efficient decision\-making, yet their open\-loop rollouts often exhibit increasing drift that leads to error accumulation even within a relatively small planning horizon\. Hierarchical temporal abstraction is a natural candidate to mitigate such drift by reducing the effective prediction horizon; however, existing hierarchical designs can introduce added structural and conceptual complexity, sometimes making them difficult to control and limiting gains over flat baselines\. To this end, we introduce MHWA \(Multi\-timescale Hierarchical World Action model\), which employs a strided high\-level context channel to reduce global\-context update frequency, effectively curbing the propagation of compounding drift\. Crucially, via context\-aware routing, the gating network dynamically reconfigures a Low\-Level Mixture\-of\-Experts by using both global context and current observations, thereby enabling flexible high\-\-low coordination, helping alleviate interference commonly observed in static hierarchies\. Empirically, MHWA \(77M parameters\) achieves an IQM human normalized score \(HNS\) of 0\.867$\\pm$0\.047 across three training seeds on a 14\-game Atari subset using 10\\% subsampled offline data, matching the existing state\-of\-the\-art 150M\-parameter JOWA baseline while using nearly half the parameters and significantly reducing computational costs\.

## A Trust Region Approach for Learning Schrödinger Bridges

**Authors:** Takeshi Koshizuka; Denis Blessing; Max Zimmer; Sebastian Pokutta; Lorenz Richter

**ID:** 149517 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pXZ4KjVpoE>) | [PDF](<https://openreview.net/pdf?id=pXZ4KjVpoE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149517>)

We study the numerical approximation of Schrödinger Bridges in the setting where samples from the target distribution are unavailable and only an unnormalized target density is given\. In this regime, the widely used iterative proportional fitting \(IPF\) procedure \(and its variants\) often exhibits severe numerical instabilities, stemming from ill\-conditioned underlying control problems and from the fact that the optimal solution may lie far from the initialization\. To address these issues, we propose a trust region variant of IPF that constrains successive updates to remain at a fixed Kullback\-Leibler divergence from the current iterate\. This restriction significantly improves numerical stability\. Moreover, we show that the resulting method admits an interpretation as a mirror descent scheme with an adaptively chosen step size\. We demonstrate the effectiveness of our approach on several challenging sampling tasks\.

## Online Allocation with Unknown Shared Supply

**Authors:** Tzeh Yuan Neoh; XianJun, Davin Choo; Mengchu Yue; Milind Tambe

**ID:** 151416 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=apuN36lY0N>) | [PDF](<https://openreview.net/pdf?id=apuN36lY0N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151416>)

Many real\-world resource allocation systems, such as humanitarian logistics and vaccine distribution, must preposition limited supply across multiple locations \*before\* demand is realized while stockouts incur irreversible service losses\. To study this, we introduce the \*Online Shared Supply Allocation\* \(OSSA\) problem, a stateful online model in which a central hub allocates a finite, unknown supply to multiple sites facing sequential demand under fixed\-charge transportation costs and lost\-sales penalties\. Unlike classical make\-to\-stock or make\-to\-order inventory models, OSSA precludes backlogging and replenishment only hedges against \*future\* demand\. To tackle OSSA, we propose a deterministic threshold\-proportional policy GPA and prove that it achieves a $4/3$\-approximation to the offline optimum up to an additive term independent of the total supply\. We complement this with matching lower bounds showing that the $4/3$ ratio is tight and that the additive\-error dependence is unavoidable, even for randomized algorithms that know the total supply upfront\. Finally, we develop a learning\-augmented extension to GPA that principally incorporates imperfect forecasts \(e\.g\., from human experts or ML models\) commonly available in practice, enabling us to exploit high\-quality advice while being robust against arbitrary bad ones\. Synthetic and real\-world experiments show that GPA outperforms natural baselines with global supply is scarce\.

## PHIONet: Port Hamiltonian Inertial Odometry Network

**Authors:** Hechuan Shen; Jian Zhang; Yingmin Liang

**ID:** 155933 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1hm3CeFT8G>) | [PDF](<https://openreview.net/pdf?id=1hm3CeFT8G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155933>)

Learning\-based inertial odometry has shown strong potential for mitigating drift by extracting data\-driven motion priors\. However, existing methods primarily learn statistical mappings from inertial measurements to motion states, failing to consider the power balance between the specific\-force input port and the predicted velocity\. This limitation is particularly pronounced in aggressive MAV flight, where rapid accelerations, high angular rates, and aerodynamic dissipation can cause locally accurate velocity estimates to accumulate into trajectory drift\.  We propose PHIONet \(Port Hamiltonian Inertial Odometry Network\), which incorporates dissipative energy dynamics as a physically grounded prior\. PHIONet translates the continuous port\-Hamiltonian dynamics into a discrete energy\-consistency residual over finite IMU windows, employing the DCM \(Dissipative Coupling Module\) to bridge IMU correction and velocity prediction\. Experiments on the public Blackbird and EuRoC MAV datasets show that PHIONet achieves lower ATE and RTE than representative learning\-based inertial odometry baselines\. Code and related materials are available at  https://anonymous\.4open\.science/r/PHIONet\-D3CC\.

## Do Glimpse Policies See Like Humans? A Behavioral Audit Reveals Dissociated Viewing Priors in Classification\-Trained Active Vision

**Authors:** boheng liu; Ziyu Li; Chenghua Duan; Qing Li; Xia Wu

**ID:** 154112 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GBLeJAfMvA>) | [PDF](<https://openreview.net/pdf?id=GBLeJAfMvA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154112>)

Classification\-trained sequential glimpse policies have attained competitive performance and efficiency on large\-scale recognition benchmarks, and are motivated by analogy to the saccadic architecture of biological active vision\. Yet whether these policies reproduce the behavioral priors that organize human free viewing, or merely approximate their spatial distribution as a byproduct of classification reward, has not been systematically examined\. We present a diagnostic behavioral audit of AdaptiveNN across three free\-viewing datasets, evaluating five dimensions associated with known properties of biological gaze: spatial priors, face prioritization, local return, saccade amplitude structure, and semantic guidance\. We show that AdaptiveNN exhibits: \(i\) spatial behavior that falls below a simple center\-bias baseline; \(ii\) scanpath geometry unlike human scanpaths in amplitude and sequential structure; \(iii\) revisitation dynamics inconsistent with human free viewing and not reducible to step\-size geometry; and \(iv\) selectively attenuated semantic guidance, with face\-specific prioritization center\-explained, social sampling attenuated, and object\-level rates preserved\. In AdaptiveNN, this dissociation suggests that classification reward alone cannot reproduce several behavioral priors organizing human free viewing, even when object\-level sampling is preserved\. These findings identify which behavioral priors require constraints beyond classification utility, offering targets for designing cognitively aligned glimpse policies\.

## LINC: Decoupling Local Consequence Scoring from Hidden Matching in Constructive Neural Routing

**Authors:** ShaoFeng Qin; Li Wang

**ID:** 148664 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w4PVSNcTNB>) | [PDF](<https://openreview.net/pdf?id=w4PVSNcTNB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148664>)

Constructive neural routing solvers usually score the next action by matching a decoder context to candidate embeddings, hiding deterministic one\-step consequences such as travel, waiting, slack, and capacity changes\. We propose LINC \(Local Inference via Normed Comparison\), a decoder\-side candidate decision architecture that computes these consequences explicitly\. LINC uses them according to their decision role: centered relative consequences are compared by a shared linear local scorer, while feasible\-set summaries modulate the decoder context\. This preserves standard global matching and relieves the hidden state from rediscovering transition arithmetic\. The Capacitated Vehicle Routing Problem with Time Windows \(CVRPTW\) serves as the main constrained\-routing stress test; the same interface extends to the Capacitated Vehicle Routing Problem \(CVRP\) and Traveling Salesman Problem \(TSP\)\. In particular, for CVRPTW, LINC reduces PolyNet's Solomon/Homberger gaps from 13\.83\\%/38\.15\\% to 7\.26\\%/14\.71\\%; for TSP and CVRP, it also improves external\-benchmark gaps\.

## The AI Observatory: A Public Measure of Real\-World AI Use

**Authors:** Shayne Longpre; Anka Reuel\-Lamparth; Dayeon Ki; Zhiping Zhang; Cathy Fang; Chuanyang Jin; Jennifer Mickel; Cedric Whitney; Niloofar Mireshghallah; Victor Ojewale; Megan Richards; Ariel N\. Lee; Alex Pentland; Tianshi Li; Yuntian Deng; Sara Hooker; Mykel J Kochenderfer; Sanmi Koyejo

**ID:** 139050 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o5j63mCxIq>) | [PDF](<https://openreview.net/pdf?id=o5j63mCxIq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139050>)

Understanding the benefits, risks, and impacts of general\-purpose AI assistants requires looking at real conversations\-\-\-not curated benchmarks or surveys\. Yet AI use narratives rely on limited proprietary reports, or on few data sources, fragmented across platforms, models, and time\. We introduce the AI Observatory, a public measurement platform that aggregates the most comprehensive set of real AI conversation sources, and develop a common taxonomy of 145 features, spanning function, topic, sensitive use, interaction style, multi\-turn dynamics, and conversation structure\. Across 23,158 conversations and 85,633 turns, we find that real AI use is highly heterogeneous: sources differ substantially in tasks, structures, and sensitive\-use distributions, with no single source that generalizes\. We further show that occupational summaries such as Anthropic's Clio capture an important but incomplete slice of use: 48\\% of the conversations we analyze would be filtered out for being non\-occupational, omitting substantial personal, social, cultural, and safety\-relevant interaction\. Real AI use is also not static: we find tokens and turns per conversation all rise sharply between 2023 and 2025, and we expose how model variants within the same developer support distinct usage regimes\. The Observatory provides a new taxonomy, reusable annotation tools, and a public platform for reproducible measurement of how AI assistants are really used and evolving in the wild: \\url\{https://project\-ai\-observatory\.vercel\.app/\}\.

## EvoCodeBench: Evaluating Coding Agents in Multi\-Turn Iterative Interactions

**Authors:** Haiyang Shen; Xuanzhong Chen; Wendong XU; Yun Ma; Liang Chen; Kuan Li

**ID:** 139527 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KUMjFWdsDg>) | [PDF](<https://openreview.net/pdf?id=KUMjFWdsDg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139527>)

Coding agents are increasingly used as iterative development partners, but most benchmarks still evaluate one specification followed by one final assessment\. This fails to capture whether agents can maintain executable artifacts as requirements evolve\. We introduce EvoCode\-Bench, a benchmark of 26 stateful coding tasks spanning 227 evaluated rounds\. Each task preserves the agent's workspace across 5\-\-15 rounds, expresses requirements through observable behavior, and uses cumulative executable tests to check both new requirements and regressions against still\-active prior ones\. We evaluate 13 coding agents with two complementary metrics: MT@4, a four\-attempt fail\-stop multi\-round score, and SR, a single\-round score from a reference\-completed prior state\. For most agents, SR exceeds MT@4 by 22\-\-40 points, indicating that isolated instruction\-following does not imply persistent reliability\. The gap also changes model rankings: the highest\-SR agent \(78\.9\) ranks only third in persistent execution \(44\.0 MT@4\)\. Even the strongest agents achieve only \\\~50\\% success on multi\-turn metrics, and aggregate pass rate drops below half of round\-1 performance by round\~5\. Failure analysis reveals tier\-dependent behavior: weaker agents fail early, while stronger agents survive long enough to expose specification\-tracking and regression failures\. These results show that single\-round and persistent multi\-turn coding evaluate different capability dimensions\. We release the benchmark data and Harbor multi\-turn infrastructure\.

## Orlicz–Sobolev with Musielak: An Efficient Regularization Approach for Graph\-based IPM

**Authors:** Tam Le; Truyen Nguyen; Hideitsu Hino; Kenji Fukumizu

**ID:** 153614 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K4gYi2bonY>) | [PDF](<https://openreview.net/pdf?id=K4gYi2bonY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153614>)

We study the Sobolev IPM problem for probability measures supported on a graph metric space, where critic function is constrained to lie within the unit ball defined by Sobolev norm\. Sobolev IPM is intrinsically coupled with $L^p$ geometric structure within its definition, limiting its ability to incorporate other prior geometry beyond the $L^p$ paradigm\. Conversely, the classic optimal transport is flexible, easy to adapt to various geometric structures by simply changing its ground cost\. An important example is Orlicz\-Wasserstein \(OW\) which utilizes \\emph\{Orlicz\} geometric structure to generalize the $L^p$ within the standard $p$\-order Wasserstein, and remarkably play a vital role to advance machine learning methodologies\. Inspired by recent advantages of OW, in this work, we leverage a specific class of convex functions for Orlicz geometry to mitigate such limitation for Sobolev IPM, and propose the generalized Sobolev IPM \(GSI\)\. Our GSI approach encompasses Sobolev IPM as a special case while accommodating diverse geometric priors beyond $L^p$\. It however brings up significant computational hurdles that compound those already notoriously inherent in Sobolev IPM\. To address these challenges, we theoretically establish a novel connection between \\emph\{Orlicz\-Sobolev\} norm and \\emph\{Musielak\} norm which facilitates a novel efficient regularization for GSI\. By further exploiting the underlying graph structure, we show that the regularized GSI reduces to a simple univariate optimization problem, achieving notably computational efficiency, enabling its usage in practical applications\. We empirically illustrate that the regularized GSI is several\-order faster than the popular OW in computation, and its performances compare favorably to other transport baselines for comparing graph\-based measures in document classification and topological data analysis\.

## DTCH Digital Turcologist Bootcamp: Evidence\-First, Evaluation\-First AI/ML for Under\-Resourced Historical Turkic Languages and Cultural Heritage Data

**Authors:** Şermin Kalafat; Yusuf Kılıç

**ID:** 137881 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137881>)

DTCH Digital Turcologist Bootcamp Historical Turkic languages, including Ottoman Turkish, Old Uighur, and Chagatai, are vastly underrepresented in the AI world\. Researchers in this field have lacked the shared benchmarks and documented datasets that make AI results comparable and reproducible\. This 12\-week online bootcamp addresses that directly, training 18–24 researchers, librarians, and heritage professionals to apply AI to historical manuscripts responsibly – building evidence packs, benchmark kits, and reproducible notebooks that anyone can verify\. All materials will be published openly so communities working with other under\-resourced historical languages can run the same program themselves\.

## DTCH Digital Turcologist Bootcamp: Evidence\-First, Evaluation\-First AI/ML for Under\-Resourced Historical Turkic Languages and Cultural Heritage Data

**Authors:** Şermin Kalafat; Yusuf Kılıç

**ID:** 137875 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137875>)

DTCH Digital Turcologist Bootcamp Historical Turkic languages, including Ottoman Turkish, Old Uighur, and Chagatai, are vastly underrepresented in the AI world\. Researchers in this field have lacked the shared benchmarks and documented datasets that make AI results comparable and reproducible\. This 12\-week online bootcamp addresses that directly, training 18–24 researchers, librarians, and heritage professionals to apply AI to historical manuscripts responsibly – building evidence packs, benchmark kits, and reproducible notebooks that anyone can verify\. All materials will be published openly so communities working with other under\-resourced historical languages can run the same program themselves\.

## Bridging Compute\- and Data\-Optimal Pretraining

**Authors:** Tian Qin; Kimia Hamidieh; David Alvarez\-Melis

**ID:** 155350 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6HVSfPO1cT>) | [PDF](<https://openreview.net/pdf?id=6HVSfPO1cT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155350>)

Classical compute\-optimal scaling laws assume an unbounded supply of fresh pretraining data, yet pretraining is increasingly entering the regime where compute is growing faster than high\-quality data\. We propose \*Compute\-Data \(CD\) scaling laws\*, a unified framework that bridges \*compute\-optimal\* scaling, in which data scales freely with compute, and \*data\-optimal\* scaling, in which the corpus is fixed and compute can grow unbounded\. CD scaling extends classic scaling by introducing a \*token effectiveness function\* that quantifies how much a \*derived\* token, produced for instance by multi\-epoch repetition or paraphrasing, is worth relative to a fresh one, ranging from a perfect substitute to no value at all\. Fitting $\\eta$ for two data expansion strategies \(multi\-epoch repetition, paraphrasing\) across model sizes ranging from 14M to 600M parameters on the Dolma\-3 corpus, we find that it is far from constant: it depends jointly on model size, the tokens\-per\-parameter ratio, and the amount of derived data, and saturates as the corpus is expanded\. The functional form of $\\eta$ implies that substituting compute for data \*diminishes\* with both model size and data availability, and partitions training into three operational regimes: compute\-bound, data\-bound, and model\-bound, showing that classic compute\-optimal allocation is suboptimal across most of the practically relevant regime\.

## Trajectory Evaluation via Rollout\-Free World Model for End\-to\-end Autonomous Driving

**Authors:** Junzhe Wang; Jinqing Zhang; Qingjie LIU

**ID:** 150030 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lJ98i1kZy5>) | [PDF](<https://openreview.net/pdf?id=lJ98i1kZy5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150030>)

Although existing candidate trajectory evaluators have substantially improved end\-to\-end planning accuracy, their underlying mechanism remains suboptimal\. Model\-based evaluators typically make scoring future\-aware by explicitly predicting candidate\-conditioned future states over the planning horizon, which we term rollout\. However, rollout incurs high inference cost and accumulates prediction errors\. We argue that planning does not require reconstructing a full future scene for each candidate, but only future\-relevant information for reliable comparison\. We therefore propose RFWorld, a Rollout\-Free World model for end\-to\-end trajectory evaluation\. RFWorld constructs a shared scene memory and shapes it into a future\-readable representation via lightweight training\-time temporal readout with semantic supervision, keeping training overhead low\. At inference time, candidate trajectories directly query the shared memory via sparse spatial readout for scoring, reducing computation by roughly the planning horizon times the number of candidate trajectories, while avoiding recursive rollout errors\. Experiments on NAVSIM show that RFWorld learns a more planning\-aligned world representation and achieves state\-of\-the\-art performance\.

## Distribution Shift in Missing Data Imputation: A Risk\-Based Perspective and Importance\-Weighted Correction under MAR

**Authors:** Luke Shannon; Song Liu; Katarzyna Reluga

**ID:** 155709 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3VK2QApcYJ>) | [PDF](<https://openreview.net/pdf?id=3VK2QApcYJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155709>)

Missing data imputation, where a model is trained on observed data to estimate unobserved values, is a fundamental problem in machine learning\. In this paper, we rigorously formulate imputation model learning as a mean\-squared error risk minimisation problem\. We show that when the probability of missingness depends on the data, many state\-of\-the\-art methods fail to account for the resulting distribution shift between the observed data used for training and the full data distribution used for evaluation\. Consequently, these approaches do not minimise mean\-squared error on the full data distribution\. Instead, we propose a novel imputation algorithm designed to learn an imputation model from the observed data while explicitly accounting for this distribution shift\. Simulation studies show consistent improvements over otherwise identical uncorrected baselines, with average reductions of 3\\% in RMSE and 7\\% in Wasserstein distance\.

## Computer Use at the Edge of the Statistical Precipice

**Authors:** Pierluca D Oro; Sneha Silwal; William R Wong; Yuxuan Sun; Fanyi Xiao; Manchen Wang; Eric Gan; Allen Bolourchi; Joseph Tighe

**ID:** 151946 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=We2oXEmu4W>) | [PDF](<https://openreview.net/pdf?id=We2oXEmu4W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151946>)

Evaluating Computer Use Agents \(CUAs\) on interactive environments is fraught with methodological pitfalls that the field has yet to systematically address\. We show that a 1MB replay script that blindly executes a recorded action sequence without ever observing the screen outperforms frontier models on prominent static benchmarks, and prove that its expected success rate is exactly equal to the source agent's pass@k in deterministic environments\. We trace this and other failures to two root causes: non\-principled environment design \(static, unsandboxed, or unreliably verified environments\) and non\-principled evaluation methodology \(naïve aggregation and misuse of pass@k for stateful UI interactions\)\. To address the first, we propose PRISM, five design principles for CUA environments \(privileged verification, realistic environments, integrity\-checked configurations, sandboxed execution, and multifactorial variability\) and instantiate them in DigiWorld, a benchmark of 15 realistic sandboxed mobile applications able to evaluate agents in over 3\.2 million verified unique configurations\. To address the second, we develop an aggregation framework pairing Wilson score intervals with hierarchical bootstrap, producing confidence intervals that correctly account for the nested structure of CUA benchmarks, as we empirically demonstrate\. All together, we show that principled environment design and rigorous evaluation methodology are not optional refinements but prerequisites for meaningful CUA research\.

## SaaSBench: Exploring the Boundaries of Coding Agents in Long\-Horizon Enterprise SaaS Engineering

**Authors:** Qingnan Ren; Shun Zou; Shiting Huang; Ziao Zhang; Kou Shi; Zhen Fang; Yiming Zhao; Yu Zeng; Qisheng Su; Lin Chen; Yong Wang; Zehui Chen; Xiangxiang Chu; Feng Zhao

**ID:** 139112 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kL0sdKjzQO>) | [PDF](<https://openreview.net/pdf?id=kL0sdKjzQO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139112>)

As autonomous coding agents become capable of handling increasingly long\-horizon tasks, they have gradually demonstrated the potential to complete end\-to\-end software development\. Although existing benchmarks have recently evolved from localized code editing to from\-scratch project generation, they remain confined to structurally simplified, single\-stack applications\.  Consequently, they fail to capture the heterogeneous environments, full\-stack orchestration, and system\-level complexity of real enterprise Software as a Service \(SaaS\) systems, leaving a critical gap in assessing agents under realistic engineering constraints\. To fill this gap, we introduce SaaSBench, the first benchmark designed to explore the boundaries of AI agents in enterprise SaaS engineering\. Spanning 30 complex tasks across 6 SaaS domains with 5,370 validation nodes, it incorporates 8 programming languages, 6 databases, and 13 frameworks to meticulously mirror real\-world software heterogeneity\. Furthermore, we design a dependency\-aware hybrid evaluation paradigm tailored for complex systems with long horizons and multi\-component coupling, enabling fine\-grained, reproducible assessment\. Crucially, our extensive experiments reveal a striking insight: the primary bottleneck for state\-of\-the\-art agents is not generating isolated code logic, but successfully configuring and integrating a multi\-component system\. Over 95\\% of task failures occur before agents even reach deep business logic, with models often falling victim to overconfidence and prematurely halting during foundational system setup, or getting trapped in ineffective debugging loops\. We hope SaaSBench serves as a practical and challenging testbed to drive the evolution of reliable, system\-level coding agents\.

## ML Configuration Artifacts Should Be Closed Under Review

**Authors:** Jan Rudy; Mohamed Khalil

**ID:** 140120 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1l0lbV2pC2>) | [PDF](<https://openreview.net/pdf?id=1l0lbV2pC2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140120>)

As training runs become more expensive and failures more time\-consuming to diagnose, configuration mistakes are no longer minor annoyances; they can waste substantial compute, delay iteration, and weaken the experimental record\. Yet many configuration systems do not treat reviewability as a main design goal\. Our position is that \*\*ML experiment configuration artifacts should be closed under review\.\*\* The experiment specification must be recoverable from the artifact without executing host\-language code or running a composition engine\. In otherwords, a reviewer should be able to fully understand the experiment by reading the configuration artifact\. Popular systems fail this property because meaning is distributed across helper code and runtime context, and we argue this failure is structural rather than incidental\. We organize the configuration design space along two axes, \_authoring freedom\_ and \_semantic locality\_, and identify recurring antipatterns that arise when locality is weak or the configuration surface becomes too expressive\. Closure is achieved by high semantic locality combined with authoring surfaces bounded enough to exclude host\-language execution\. Constrained text\-first wiring representations meet both conditions\. We present \`pfig\`, a Python object\-wiring DSL, as evidence that this design point is practical\.

## TRIDENT: Post\-Selection Evidence Accountability for Token\-Efficient RAG

**Authors:** Wutong Zhang; Jiong Lou; Richard Liu; Sizhe Zhang; Hefeng Zhou; Kaixiang Wang; Celimuge Wu; Wei Zhao; Jie LI

**ID:** 155841 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2UTqijjMAy>) | [PDF](<https://openreview.net/pdf?id=2UTqijjMAy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155841>)

RAG systems often verify citations only after retrieval and shortlisting have selected which passages will be tested\. A verifier calibrated on random passage\-\-claim pairs is therefore applied to a different population: shortlisted pairs chosen by the retrieval policy\. This makes support verification a post\-selection inference problem\. We introduce TRIDENT, a contract\-scoped framework for post\-selection evidence accountability\. Safe\-Cover emits structural\-facet support certificates with query\-level Bonferroni FWER control, or abstains when the logged contract cannot certify support\. Pareto\-Knapsack relaxes certification and uses the same frozen facet table as a token\-efficient multi\-hop QA selector\. Across HotpotQA, 2Wiki, and MuSiQue, TRIDENT controls false certificates under deployed contracts, identifies higher\-quality answer\-linked slices when certificates are emitted, and improves the matched\-budget multi\-hop QA frontier\. The accountable unit is therefore not a retrieved passage or generated citation, but a support claim calibrated under the policy that selected it\.

## Event based Multi\-Velocity\-Scale Imaging

**Authors:** Qiyao Gao; Peiqi Duan; Chu Zhou; Xinyu Zhou; Imari Sato; Boxin Shi

**ID:** 150183 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k6FlyTwE3g>) | [PDF](<https://openreview.net/pdf?id=k6FlyTwE3g>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150183>)

Real\-world scenes often contain static, slow, and fast components within the same field of view\.  Frame cameras are inherently inefficient in this setting, as their global exposure and fixed sampling must follow the fastest motion and therefore oversample the rest of the scene\.  Event cameras provide asynchronous local sensing, but standard sensors use a single global contrast threshold, leading to a trade\-off between sensitivity and redundancy: low thresholds preserve static information but over\-trigger under fast motion, while high thresholds reduce data volume but lose slow or static structures\.  We propose a multi\-threshold event imaging model that assigns motion\-compatible thresholds to different scene components, enabling faithful multi\-velocity\-scale imaging with fewer events\.  We also introduce a practical acquisition pipeline that implements this model on existing event cameras\.  Experiments on synthetic and real scenes validate the effectiveness of our approach in preserving both static structures and fast dynamics while reducing data volume\.

## S2MDF: A Plug\-And\-Play Layer for Intersection\-Free Multi\-Object Signed Distance Fields

**Authors:** Deniz Sayin Mercadier; Federico Stella; Aurel Bizeau; Nicolas Talabot; Pascal Fua

**ID:** 148986 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=teTTi6AXHC>) | [PDF](<https://openreview.net/pdf?id=teTTi6AXHC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148986>)

Compositional implicit surface representations model scenes as collections of objects, each encoded by a Signed Distance Field \(SDF\)\. A fundamental limitation of this approach is that multiple SDFs can produce geometries that interpenetrate, violating physical plausibility\. Existing mitigation strategies rely on soft penalty terms that reduce but do not eliminate intersections, and require careful loss weighting\. To truly prevent interpenetration, we propose a hard constraint on vector\-valued SDFs and  introduce S2MDF, a lightweight plug\-and\-play module that enforces the constraint on any object\-compositional SDF representation without architectural modifications\. It introduces \\fs\{negligible\} computational overhead and is compatible with linearly\-interpolated standard meshing algorithms such as Marching Cubes\. It can be applied during training or as a post\-processing step\. Experiments on multiple state\-of\-the\-art compositional methods show that S2MDF reduces intersections to numerical precision while preserving reconstruction quality, outperforming existing mitigation strategies\.

## Classification Fields: Arbitrarily Fine Recursive Hierarchical Clustering From Few Examples

**Authors:** Yicen Li; Ruiyang Hong; Anastasis Kratsios; Haitz Sáez de Ocáriz Borde; Paul D\. McNicholas

**ID:** 151054 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dLTzQWpUx2>) | [PDF](<https://openreview.net/pdf?id=dLTzQWpUx2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151054>)

Classical clustering methods usually return either a finite partition of the observed data or a finite dendrogram over it\. This finite\-sample view is inadequate when the hierarchy of interest is a recursive geometric object with fine\-scale refinements that continue beyond the levels directly observed\. We introduce classification fields: infinite\-depth hierarchical cluster structures on $\\mathbb\{R\}^d$ generated by a local parent\-to\-child refinement rule\. A classification field generator maps each parent centre to an ordered, bounded, and separated tuple of child residuals\. Together with a root and a scale factor, this rule recursively generates cluster centres, Voronoi cells, and a metric DAG encoding the hierarchy\. Given only a finite prefix of such a hierarchy, we learn a classification field predictor that approximates the generator and can be rolled out to unseen depths\. We prove exponential truncation convergence in the completed cell metric and ReLU realizability with width $\(O\(\\varepsilon^\{\-\\gamma\}\)$ and depth $\\widetilde O\(\\varepsilon^\{\-3\\gamma/2\}\)$, where $\\gamma=\\log K/\(\-\\log s\)$, up to finite\-window aspect\-ratio factors\. The approximation holds at the level of the induced compact metric structures, measured in the completed cell\-metric Hausdorff distance\. Experimental validation on matched CFG\-generated hierarchies, IFS fractals, and image\-induced recursive clustering hierarchies shows that learned predictors preserve ordered child slots, unordered geometry, and hierarchy\-level path metrics under recursive rollout\. These results support the claim that finite hierarchical observations can reveal local refinement rules capable of generating substantially deeper classification fields\.

## A Batched Hartigan's $k$\-Means Clustering

**Authors:** Edward Raff; Michael Slawinski

**ID:** 148581 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wk378kUPrZ>) | [PDF](<https://openreview.net/pdf?id=wk378kUPrZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148581>)

Hartigan's $k$\-means algorithm has theoretical advantages over the standard Lloyd's variant, which has become synonymous with \`\`$k$\-means''\. Yet, Hartigan's algorithm is far slower in practice due to its inherently sequential calculations\. We devise a Batched Hartigan's method that enables vectorized calculation by exploiting the triangle inequality to expose a set of parallel\-safe updates and a smaller set of sequential updates\. This makes Hartigan's method competitive with Lloyd's in execution speed for the first time\.

## Context as Low\-Rank Weights: Bounded Parametric Dynamic Memory for Unbounded Context

**Authors:** Xiangyu Zhang; Yu Zhou; Taolue Chen

**ID:** 149750 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ndegfU6uMP>) | [PDF](<https://openreview.net/pdf?id=ndegfU6uMP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149750>)

Transformers rely on a growing key–value \(KV\) cache to store context, causing linear memory growth and limited generalization beyond the training window\. We show that contextual influence can instead be viewed as updates to a low\-dimensional subspace in the model’s weight space, meaning context can be represented as a bounded, low\-rank parameter update rather than token\-level storage\. Motivated by this, we propose PARADE, which internalizes context as parametric memory\. It compresses past inputs into a fixed set of weight\-space basis vectors and composes them via query\-dependent routing into per\-query weight updates, enabling streaming inference with constant memory and effectively unbounded context\. Experiments show that PARADE matches full attention on long\-context tasks and outperforms efficient baselines, especially when relevant information lies far beyond the attention window, while improving as context exceeds the model’s training length\.

## PreDiff: Sequential Recommendation by Denoising Preference Distributions

**Authors:** Yaoqi Chen; Jianjin Zhang; Qi Chen; Weihao Han; Yujing Wang; Hao Sun

**ID:** 149450 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pzpHoCx0Yr>) | [PDF](<https://openreview.net/pdf?id=pzpHoCx0Yr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149450>)

Sequential recommendation predicts which item a user will interact with next\. A key property of this task is that user preferences are concentrated: only a small cluster of items is relevant at a given moment\. Recent diffusion\-based methods add noise to the item's embedding and score candidates by embedding similarity\. Since similar items have similar embeddings, their score gaps are inherently small and easily overwhelmed by noise, causing the most relevant candidates to become indistinguishable first\. We prove that moving diffusion to distribution space, where each item receives independent noise, preserves rankings better and makes the reverse denoising process easier\. This shift, however, loses the semantic structure of embedding space and requires richer supervision than one\-hot labels\. We propose PreDiff \(\*\*Pre\*\*ference \*\*Diff\*\*usion\), which performs diffusion in distribution space and introduces two components to address these problems: Distribution\-Guided Sparse Projection projects the preference scores into embedding space while filtering out low\-relevance noise, and soft targets encode inter\-item similarity to teach fine\-grained ranking within the preference cluster\. On four benchmarks, PreDiff achieves 8%\-\-17% relative improvement over existing methods\.

## The Compliance Trap: Diagnosing How AI Agents Consume Conflicting Memory

**Authors:** Yixiong Chen; Xinyi Bai; Alan Yuille

**ID:** 151832 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XbuaSCh5Nt>) | [PDF](<https://openreview.net/pdf?id=XbuaSCh5Nt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151832>)

Memory is becoming a core component of long\-horizon AI agents, allowing agents to reuse past experience when operating web browsers, software tools, and other interactive environments\. Existing work mostly treats memory as a supply problem, asking what experience to write, how to store it, and which entry to retrieve for the next task\. Yet we still lack a clear account of how models consume retrieved memory across a multi\-step action trajectory\. This consumption process matters because it determines not only what memories should be retrieved, but also what models and control policies are needed to use them safely\. To diagnose this process, we propose Entry\-\-Propagation\-\-Recovery \(E\-P\-R\), a trajectory\-level framework that asks where memory first changes an action, whether that change carries forward, and whether the agent can recover after leaving a correct path\. We instantiate E\-P\-R on WebArena and on MemTrapBench, a controlled benchmark we build to isolate these phases\. We find that the main failure often begins at entry: agents adopt conflicting memory at the first exposed decision point even when the recommendation is task\-wrong\. Repeated exposure then amplifies this early error, while recovery after divergence is weak\. Together, these effects create a compliance trap: across models, conflicting memory induces similar compliance rates, but once agents comply, their success rates collapse to a low floor\. Stronger agents therefore suffer larger absolute damage because each compliance event erases more baseline capability\. These results suggest that memory\-augmented agents should be evaluated not only by retrieval quality or final success rate, but by how they consume memory throughout the trajectory\.

## Dual\-Space Preconditioning for Variational Inequalities and Root\-Finding Problems

**Authors:** Jan Quan; Konstantinos Oikonomidis; Alexander Bodard; Panagiotis Patrinos

**ID:** 150002 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lVWwGH1DGX>) | [PDF](<https://openreview.net/pdf?id=lVWwGH1DGX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150002>)

This paper develops a dual\-space preconditioning framework for variational inequalities and root\-finding problems beyond classical cocoercivity and Lipschitz continuity assumptions\. To this end, we introduce both a novel cocoercivity\-type condition and a relaxed Lipschitz continuity condition, and derive convergence of deterministic and stochastic methods under these generalized conditions\. For isotropic preconditioners, the resulting algorithms can be interpreted as variable\-stepsize variants of classical methods, recovering and extending recent analyses based on $\(L\_0, L\_1\)$\-type growth conditions while allowing simpler proofs and larger stepsize ranges\. We also show that the framework naturally handles constrained variational inequalities through weak Minty\-type arguments\. Finally, we study the associated continuous\-time dynamics and derive a variational and optimal\-control interpretation of the preconditioned flow\. Overall, the results show that dual\-space preconditioning provides a flexible mechanism for designing and analyzing operator methods beyond the standard Euclidean Lipschitz setting\.

## Spectral\-Aligned Pruning for Universal Error\-Correcting Code Transformers

**Authors:** Sanghyeon Cho; Taewoo Park; Seong\-Joon Park; Dae\-Young Yun; Hee\-Youl Kwak; Sang\-Hyo Kim; Yongjune Kim

**ID:** 151780 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Y5hbfFtOH1>) | [PDF](<https://openreview.net/pdf?id=Y5hbfFtOH1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151780>)

Universal channel decoders based on transformers\-\-such as the Foundation Error Correction Code Transformer \(FECCT\)\-\-achieve competitive decoding performance across diverse code families with a single shared backbone, optionally followed by code\-specific finetuning\.  However, the high computational complexity and large parameter footprint of FECCT present substantial obstacles to practical deployment\. To address these challenges, we investigate structured pruning for FECCT and propose Spectral\-Aligned Pruning \(SAP\), a structure\-aware framework that enables cross\-code reuse of structured pruning masks by leveraging the spectrum of the corresponding bipartite graph\. SAP is grounded in classical graph analysis of codes: the two algebraically largest adjacency eigenvalues provide compact spectral proxies for degree scale, expansion ratio, and minimum\-distance lower bounds\.  These quantities are directly relevant to decoding performance: degree scale reflects how densely codeword bits and parity checks are connected; expansion ratio influences how information propagates across the bipartite graph; and minimum distance characterizes codeword separation\. Based on this connection, SAP uses these two leading eigenvalues as a lightweight code signature for pruning\-mask retrieval\.  Empirically, this two\-dimensional signature yields stable library selection equivalent to higher\-dimensional spectral signatures in our evaluation\. After pruning, SAP performs per\-code recovery via parameter\-efficient low\-rank adaptation \(LoRA\), enabling a shared pruned backbone while storing only small code\-specific adapter parameters\. Experiments across diverse codes show that SAP achieves decoding performance comparable to dedicated per\-code pruning, while enabling substantial reductions in computational cost and model memory footprint through kernel\-level structured pruning\.

## Assessing Sample Quality in Conditional Generation under Compositional Shift

**Authors:** Berker Demirel; Valentino Maiorca; Marco Fumero; Theofanis Karaletsos; Francesco Locatello

**ID:** 148544 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x6NGTz0aAP>) | [PDF](<https://openreview.net/pdf?id=x6NGTz0aAP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148544>)

Conditional generators provide a natural tool for controllable generation, including settings where the desired condition is a new composition of observed attributes or experimental factors\. In many applications, especially in scientific domains, such models are attractive to explore conditions for which real samples are rare, expensive, or not yet observed\. However, this creates a circularity for evaluation: standard conditional quality metrics require a reference target distribution, but in the extrapolative regime that distribution is unavailable by definition\. We address this problem with a post\-hoc, per\-sample trust score for assessing conditional samples using only the training distribution\. The score combines two estimable quantities: global realism, measuring compatibility with the real data manifold, and attribute\-wise faithfulness, measuring whether a sample is closer to the requested attributes than to plausible alternatives\.  We show that the score can recover meaningful comparisons across extrapolated generations, under a mild coverage condition on the observed attributes\.  These comparisons enable effective filtering, ranking, and abstention of generations and can be used directly on off\-the\-shelf pretrained models\.  In biological imaging, selected samples preserve real morphological structure better and improve downstream predictive performance, while similar gains are observed on controlled vision benchmarks\. Finally, we show how the score can be applied during generation, enabling abstention before full decoding\.

## Self\-Supervised Reconstruction Knockoffs for Calibrated Unsupervised Feature Selection

**Authors:** HaiHui Huang; Dingkui Kang; Yanan Zhou; Yong Liang

**ID:** 155235 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7DwhldqTP6>) | [PDF](<https://openreview.net/pdf?id=7DwhldqTP6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155235>)

Unsupervised feature selection is widely used as a discovery tool, yet most methods return only absolute rankings: a selected gene, pixel, or sensor is never compared against a feature\-wise null\. We introduce Self\-Supervised Reconstruction Knockoffs \(SSRK\), a calibrated proxy\-discovery framework for unlabeled data\. SSRK defines relevance through masked reconstruction: a feature is deemed useful only when replacing it with a matched knockoff degrades reconstruction of other masked coordinates\. The method trains a symmetric knockoff\-gated masked autoencoder and converts the learned gates into a slot\-aware signed statistic that satisfies the knockoff sign\-flip property under Model\-X exchangeability and coupled implementation\. We formalize the estimation target as knockoff\-relative masked information, prove immunity to self\-copy and marginal\-variance artifacts, derive an entropy\-regularized population fixed point for correlated gates, and establish finite\-sample margin and defect\-robust false discovery rate bounds\. Oracle synthetic experiments validate knockoff\+ control at q = 0\.10 with full support recovery in the reported regimes\. On Peripheral Blood Mononuclear Cells, MNIST, Fashion\-MNIST, and UCI Human Activity Recognition, where learned knockoffs are approximate, the same statistic is evaluated as a ranking and recovers biologically, spatially, and sensor\-structurally meaningful subsets\. SSRK thereby turns masked self\-supervision into a feature\-wise null comparison while clearly separating controlled discoveries from exploratory rankings\.

## Improved State Mixing in Higher\-order and Block Diagonal Linear Recurrent Networks

**Authors:** Igor Dubinin; Antonio Orvieto; Felix Effenberger

**ID:** 152218 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UgQaUtjeXS>) | [PDF](<https://openreview.net/pdf?id=UgQaUtjeXS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152218>)

Linear recurrent networks \(LRNNs\) and linear state space models \(SSMs\) promise computational and memory efficiency on sequence modeling tasks, yet their diagonal state transitions limit expressivity\. Dense and/or nonlinear architectures \(e\.g\., LSTMs\) on the other hand are provably more expressive, but computationally costly\.  Here, we explore how expressivity in LRNNs can be increased via richer state mixing across time and channels while maintaining competitive efficiency\. Specifically, we introduce two structured LRNN architectures: \(i\) Higher\-order Linear Recurrent Units \(H\-LRU\), which generalize recurrences to arbitrary order, mixing multiple past states, and \(ii\) Block\-Diagonal LRUs \(BD\-LRU\), which enable dense intra\-block channel mixing\. To ensure stable training, we introduce a selective gate normalization scheme that allows for scalable window and block sizes\. To maintain efficiency, we utilize a parallel\-scan implementation that keeps the throughput competitive with diagonal LRNNs for moderate orders \(H\-LRU\) and block sizes \(BD\-LRU\)\. Consistent with prior theoretical studies on the limitations of diagonal models, we empirically demonstrate in both synthetic sequence modeling and language modeling that our architectures significantly benefit from the increased expressivity of structured state mixing\. Our results show that the structure of state mixing is a critical driver of performance in LRNNs, offering a practical pathway to closing the efficiency–expressivity gap in linear sequence models\.

## When the Merge Coefficient Stops Mattering: Proximity Regularized Merging for Continual LoRA Adaptation

**Authors:** Yixuan Liu; Yuhao Sun; Sen Song; Li Jin

**ID:** 151892 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XA9pSXrybR>) | [PDF](<https://openreview.net/pdf?id=XA9pSXrybR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151892>)

Rehearsal\-free continual learning with parameter\-efficient adapters can be cast as a sequence of task\-vector write\-in operations: for each new task, a low\-rank adapter is learned and merged into a running model\. We propose Proximity Regularized Merging \(PRM\), a minimal modification to sequential LoRA merging that adds a proximal penalty during task\-vector training without changing the subsequent write\-in rule\. PRM acts as a robust task\-vector regularizer: in the reported Base$\\rightarrow$\+Prox diagnostics, it improves AAA across multiple write\-in rules, backbones, and class\-incremental settings, while its fixed\-coefficient variant remains competitive with strong coefficient\-based baselines\. Mechanistically, matched\-prefix norm controls and proximal\-strength sweeps show that proximal training shrinks the task\-vector radius, lowers Fisher\-weighted interference, broadens the coefficient plateau, and exposes a stability\-\-plasticity trade\-off\. Together, these results suggest that the effectiveness of sequential LoRA merging depends not only on how much of a task vector is written in, but also on whether the task vector itself has been trained to be mergeable\.

## Trajectory\-Matching Meta Pseudo\-Labeling for Semi\-Supervised Learning

**Authors:** Minh Duc Le; Minh\-Duong Nguyen; Dung Le

**ID:** 148661 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w4z8ShoMu5>) | [PDF](<https://openreview.net/pdf?id=w4z8ShoMu5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148661>)

Meta pseudo\-labeling improves semi\-supervised learning by updating a teacher according to whether its pseudo\-labels help a student improve on labeled data\. Existing one\-step meta\-gradient methods, however, differentiate through the student update, introducing mixed higher\-order derivatives, extra memory cost, and noisy minibatch meta\-gradients\. We propose Trajectory\-Matching Meta Pseudo\-Labeling \(TMPL\), a first\-order alternative that extracts labeled\-data feedback from recent student optimization trajectories\. We show that the one\-step meta objective is locally equivalent, up to second\-order terms in the student step size, to maximizing alignment between the outer gradient and the pseudo\-label\-induced student gradient\. TMPL approximates this alignment without differentiating through the student update by matching finite differences of the outer objective and the pseudo\-label\-induced student objective along recent student displacements\. Its implementation stores only a FIFO cache of detached scalar objective values, rather than student computation graphs or past student networks\. We prove that small trajectory\-matching error controls the gradient mismatch within the span of recent displacements, with an explicit residual for unexplored directions\. On CIFAR10, CIFAR100, SVHN, and STL10, TMPL improves over MPL in all eight evaluated label regimes, obtains the best result in five settings, and remains competitive with strong SSL baselines\. On CIFAR100 with 2500 labels, TMPL reduces peak memory by 39\.7\\% relative to MPL and 54\.0\\% relative to a raw differentiable meta\-gradient implementation\. Ablations identify the directional trajectory\-matching term as the main source of improvement, while alignment diagnostics show that TMPL recovers MPL\-like gradient alignment after a short warm\-up\.

## Two\-Level Softmax Sampling Done Right: Correcting Bias from Size Imbalance and Dispersion

**Authors:** Walid Bendada; Guillaume Salha\-Galvan

**ID:** 149214 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s3eaoMXlo8>) | [PDF](<https://openreview.net/pdf?id=s3eaoMXlo8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149214>)

Sampling from a softmax distribution is a fundamental operation in machine learning, but its linear complexity in the number of items makes exact sampling impractical at scale\. Two\-level softmax \(2LS\) sampling is a popular alternative enabling sublinear\-time sampling\.  Assuming items are partitioned into clusters, 2LS first samples a cluster and then an item within it\. In this paper, we show that, despite its advantages, 2LS introduces systematic and undesirable sampling biases, which arise from misweighting clusters by ignoring both cluster size imbalance and intra\-cluster similarity dispersion\. We propose two sampling methods, Size\-Corrected 2LS \(S\-2LS\) and Size\- and Dispersion\-Corrected 2LS \(SD\-2LS\), which correct these biases and provide provably better softmax approximations with negligible to non\-existent computational overhead\. In\-depth experiments on five large\-scale datasets validate the improved sampling properties of our methods\. We recommend their consistent use in place of standard 2LS in future work\.

## Fisher information and the geometry of memorization in neural networks

**Authors:** Daniel Bernstein; Chase Goddard; Luca Di Carlo; Vudtiwat Ngampruetikorn; David Schwab

**ID:** 153128 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NirHtZJlvn>) | [PDF](<https://openreview.net/pdf?id=NirHtZJlvn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153128>)

A fruitful approach towards understanding generalization in machine learning involves characterizing how models separate generalizable structure from idiosyncratic or even corrupted features of training data\. Fisher information has emerged as a diagnostic tool for this separation, leveraging loss geometry to distinguish generalization from memorization\. Here we investigate this connection in vision models trained on CIFAR\-10 with controlled label noise that can be learned only through memorization\. We show that projecting model weights onto the top Fisher eigenvectors decouples general task performance from noisy sample memorization, and we identify the layer in which this decoupling emerges\. We show that the same phenomena are present in small transformers trained to perform in\-context learning and reproduced in closed form in a simple, analytically solvable linear model\. Our results reveal that Fisher information captures aspects of the geometric structure underlying how neural networks allocate capacity between generalization and memorization\.

## Dimension Bounds for Contractive Reservoir Computing from Input Entropy

**Authors:** Pradeep Singh; Kishore Babu Nampalle; Balasubramanian Raman

**ID:** 155874 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2C39UZjQf8>) | [PDF](<https://openreview.net/pdf?id=2C39UZjQf8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155874>)

Echo State Networks \(ESNs\) are designed to be \\emph\{stable\}—the echo state property makes the reservoir state a well\-defined function of the input history—but it remains unclear how \\emph\{geometrically rich\} the reachable reservoir states are and what controls that richness\. We give a partition\-free, fractal\-geometric theory of contractive reservoirs by viewing a quantized\-input ESN as a contractive random dynamical system and, equivalently, an iterated function system \(IFS\)\. This identifies the reachable set as the IFS attractor and the stationary reservoir\-state law under i\.i\.d\.\\ inputs as the unique invariant IFS measure\. We prove entropy–contraction \(entropy–Lyapunov\) bounds on the intrinsic dimension of this measure, and in a conformal/similarity regime with standard separation conditions we obtain sharp closed\-form dimension laws of the form “input entropy divided by contraction\.” These results yield a quantitative \\emph\{criticality principle\}: weakening contraction drives a transition from low\-dimensional to full\-dimensional state representations at an explicit threshold set by input entropy and contraction rates, providing practical design guidance for tuning leak/spectral radius and input scaling\.

## When Are Predictions Enough? An Evaluation Protocol for Frozen Expert Composition

**Authors:** Alessandro Pereira; Keith J Ransom; Lewis Mitchell

**ID:** 139038 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oYmTqDKIF7>) | [PDF](<https://openreview.net/pdf?id=oYmTqDKIF7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139038>)

Practitioners often combine independently trained models as a fixed pool of frozen experts\. Standard combination methods, such as voting, averaging, or stacking, rely on final predictions, amounting to a few scalars per expert, and discard potentially richer cross\-expert information found in the penultimate representations\. An alternative is to combine these models in feature space\. Whether this yields a meaningful improvement depends heavily on the evaluation design\. Informal assessments on the same data can support materially different conclusions depending on baseline strength, overlap control, reporting granularity, and pool construction\. We argue that auditing the sensitivity of evaluation outcomes to these design choices is critical for the effective composition of expert models\.  To address these sensitivities, we propose a four\-part evaluation protocol: \(1\) a baseline ladder for prediction\-space \(PS\) models; \(2\) a deterministic feature\-space \(FS\) anchor plus a higher\-capacity cross\-check; \(3\) axis\-isolated pools to disentangle performance gains; and \(4\) grouped evaluation with overlap\-aware controls\.  Applying our protocol to 21 frozen deepfake detectors from DF40 \(Yan et al\., 2024\), we find that a 10K\-parameter logistic regression on raw concatenated features outperforms the strongest PS baseline by \+0\.123 AUROC on an architecture\-diverse pool \(generator\-level bootstrap 95% CI \[\+0\.078, \+0\.174\]\)\. Crucially, the higher\-capacity cross\-check \(a 3\.5M\-parameter feature\-space MLP\) adds only \+0\.004 AUROC, suggesting that the gain arises from the richer feature interface rather than from combiner complexity\. Prediction\-space models suffice when individual expert performance is high but fall short in architecture\-diverse, high\-bottleneck pools\. Our primary contribution is an evaluation\-design audit showing that, on this benchmark and expert pool, relaxing any of these controls risks overstating the apparent FS advantage or creating the illusion of a gain that fails to hold across data subgroups\. Our findings demonstrate that, without rigorous controls, the same data can support multiple, sometimes spurious, conclusions\.

## Prediction\-Augmented Trees for Reliable Statistical Inference

**Authors:** Vikram Kher; Argyris Oikonomou; Manolis Zampetakis

**ID:** 150796 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fLL6UFq9R4>) | [PDF](<https://openreview.net/pdf?id=fLL6UFq9R4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150796>)

Machine learning \(ML\) is increasingly central to scientific discovery, but translating ML predictions into rigorous scientific claims still requires statistical inference on gold\-standard labeled data\. A setting that has emerged across the sciences provides the analyst with a small labeled sample, a much larger unlabeled sample, and a pre\-trained predictor, with the goal of constructing a confidence interval for a quantity of interest, as was formalized in Angelopoulos et al\. \(2023\)\. In this ML\-driven scientific discovery literature, labeled data is typically the binding constraint on precision while computation is comparatively unconstrained, motivating the design question of how additional computation can extract more inferential value from a fixed labeled set, a fixed unlabeled set, and a fixed predictor\.  To address this question, we propose the \*Prediction\-Augmented Residual Tree\* \(PART\) estimator\. PART takes the same inputs as the original PPI estimator and replaces their single global rectifier with locally computed rectifiers obtained from an adaptive partition of the feature space\. We show that PART outperforms existing methods by producing tighter confidence intervals across real\-world datasets from ecology, astronomy, and census reports, among other domains\. We then describe and analyze PAQ, an estimator that arises when considering the limit of PART when the depth of its tree grows to infinity\. Under appropriate assumptions in the input data, we show that the variance of PAQ shrinks at a rate of $O\(N^\{\-1\} \+ n^\{\-4\}\)$, showing that there are settings where the rate of $O\(N^\{\-1\}\+n^\{\-1\}\)$ of existing methods can be provably broken\.

## Black\-box model classification under the discriminative factorization

**Authors:** Hayden Helm; Merrick Ohata; Carey E Priebe

**ID:** 154419 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DicIm04iMs>) | [PDF](<https://openreview.net/pdf?id=DicIm04iMs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154419>)

Access to modern generative systems is often restricted to querying an API \(the \`\`black\-box" setting\) and many properties of the system are unknown to the user at inference time\.  While recent work has shown that low\-dimensional representations of models based on the relationship between their embedded responses to a set of queries are useful for inferring model\-level properties, the quality of these representations is highly sensitive to the query set\. We introduce the discriminative factorization to distinguish between high\- and low\-quality query sets in the context of black\-box model\-level classification\.  Under this framework, the probability of chance\-level classification decays exponentially in the query budget\. On three auditing tasks, estimated factorization parameters predict the empirical performance decay rate\.  We conclude by showing that query sets selected using the estimated discriminative field reproduce the empirical ordering of oracle query sets\.

## Recovering the Apresjan Hierarchy Using Linkage\-Based Clustering

**Authors:** Maximilien Dreveton; Matthias Grossglauser; Daichi Kuroda; Patrick Thiran

**ID:** 148907 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uHPdTAgha6>) | [PDF](<https://openreview.net/pdf?id=uHPdTAgha6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148907>)

Hierarchical clustering seeks to uncover nested structure in data by constructing a tree of clusters, whose deeper levels reveal increasingly fine\-grained relationships\. However, traditional hierarchical clustering methods always return a hierarchy, even when the data contain no meaningful hierarchical structure\. Moreover, agglomerative linkage algorithms are highly sensitive to the choice of linkage function\.  In this paper, we revisit a classical notion of well\-separated clusters, which we call valid clusters\. The collection of all valid clusters forms a hierarchy, known as the Apresjan hierarchy\. This hierarchy is the finest hierarchy composed only of valid clusters: it need not be binary, and it collapses to a star tree when no nontrivial valid clusters exist\.  Our main contribution is to characterize when the Apresjan hierarchy can be recovered from linkage\-based algorithms\. We propose a two\-step procedure that first constructs a binary hierarchy using an agglomerative linkage method and then prunes all clusters that violate the validity condition\. We give necessary and sufficient conditions on the linkage function under which this procedure exactly recovers the Apresjan hierarchy\. Consequently, all linkage rules satisfying these conditions yield the same pruned hierarchy\. In particular, single, complete, and average linkage satisfy the conditions, whereas Ward's linkage does not\.

## On the Depth of Monotone ReLU Neural Networks and ICNNs

**Authors:** Egor Bakaev; Florestan Brunck; Christoph Hertrich; Daniel Reichman; Amir Yehudayoff

**ID:** 152162 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V3VlSmUU9h>) | [PDF](<https://openreview.net/pdf?id=V3VlSmUU9h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152162>)

We study two models of $\\mathsf\{ReLU\}$ neural networks: monotone networks \($\\mathsf\{ReLU\}^\+$\) and input convex neural networks \($\\mathsf\{ICNN\}$\)\. Our focus is on expressivity, mostly in terms of depth and our motivation is to gain better understanding of depth requirement needed to exactly represent functions in terms of neural networks with ReLU activations: a subject that has received a lot of attention lately\. We prove several lower bounds on the depth required to represent functions by monotone ReLU networks and $\\mathsf\{ICNN\}$\. For the maximum function $\\mathsf\{MAX\}\_n$ computing the maximum of $n$ real numbers, we show that $\\mathsf\{ReLU\}^\+$ networks cannot compute $\\mathsf\{MAX\}\_n$, or even approximate it\. We prove a sharp $n$ lower bound on the $\\mathsf\{ICNN\}$ depth complexity of $\\mathsf\{MAX\}\_n$\. We also prove depth separations between $\\mathsf\{ReLU\}$ networks and $\\mathsf\{ICNN\}$s; for every $k$, there is a depth\-$2$ $\\mathsf\{ReLU\}$ network of size $O\(k^2\)$ that cannot be simulated by a depth\-$k$ $\\mathsf\{ICNN\}$\. The proofs combine ideas from some structural results for $\\mathsf\{ReLU\}^\+$ networks\.

## Measuring AI Agents' Progress on Multi\-Step Cyber Attack Scenarios

**Authors:** Linus Folkerts; Will Payne; Simon Inman; Philippos M Giavridis; Joe Skinner; Sam Deverett; James Aung; Ekin Zorer; Michael Schmatz; Mahmoud Ghanem; John Wilkinson; Alan Steer; The Vy Hong; Harry Coppock; Jessica Wang

**ID:** 139622 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ErCiDeUvbU>) | [PDF](<https://openreview.net/pdf?id=ErCiDeUvbU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139622>)

We evaluate the autonomous offensive cyber capabilities of frontier AI agents on two purpose\-built cyber ranges\-\-\-a 32\-step corporate network attack and a 7\-step industrial control system attack targeting a simulated cooling tower\-\-\-complemented by a private 82\-task CTF suite spanning four difficulty tiers to measure narrow cyber skills\. Estimated human\-expert solve times are roughly 20 hours for the corporate range, 22 hours for the cooling tower, and from 1 minute to 40 hours across the CTF suite\. Across twelve models released over a twenty\-month period\-\-\-from GPT\-4o in August 2024 to early predeployment checkpoints of Mythos and GPT\-5\.5\-\-\-we observe two trends\. First, performance increases approximately log\-linearly with inference\-time compute, with no plateau observed for the strongest models up to 100M tokens\. Second, newer frontier models generally complete more steps at fixed token budgets\. GPT\-5\.5 and the Mythos Preview checkpoint each completed all 32 steps in at least one run, the first end\-to\-end completions of the corporate range; GPT\-5\.5 averaged 22\.3 of 32 steps across ten 100M\-token runs\. On the control system range, the latest models reached 4 of 7 steps, primarily by directly probing the operational\-technology protocol rather than following the intended chain of IT compromise and authenticated control\. These results indicate rapid improvements in autonomous cyber capability and suggest that complex but undefended multi\-step ranges are no longer reliably distinguishing the strongest frontier models\. Future evaluations should emphasise hardened environments, active defences, defensive\-control effectiveness, and operational security\-\-\-priorities that grow more pressing as the threat of AI\-driven cyber attacks becomes increasingly realistic\.

## Refactoring Code Through Library Design

**Authors:** Žiga Kovačič; Justin Chiu; Celine Lee; Wenting Zhao; Kevin Ellis

**ID:** 151047 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dOkgsUfJSn>) | [PDF](<https://openreview.net/pdf?id=dOkgsUfJSn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151047>)

Maintainable and general software allows developers to build robust applications efficiently, yet achieving these qualities often requires refactoring specialized solutions into reusable components\. This challenge becomes particularly relevant as code agents are increasingly used to solve isolated one\-off programming problems\. We investigate code agents' capacity to refactor code in ways that support consolidation and reusability\. We first investigate what makes a good refactoring, finding via simulation results and a human study that proxies of program size, such as Minimum Description Length, better predict preferable refactorings than extant software engineering metrics, such as Maintainability Index\.  We then present \\textsc\{Librarian\}, a method that combines divide\-and\-conquer with sample\-and\-rerank to generate reusable libraries\.   We compare \\textsc\{Librarian\} to state\-of\-the\-art library generation methods, and study it on real\-world Python programs\.

## Disentanglement as Identifiable Pushforward Factorisation

**Authors:** Carl Allen

**ID:** 155738 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3Kq1axaXfK>) | [PDF](<https://openreview.net/pdf?id=3Kq1axaXfK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155738>)

We characterise disentanglement for smooth generative pushforward models, such as in VAEs and GANs\. For a generator/decoder $g:\\\\mathcal\{Z\}\\\\to\\\\mathcal\{X\}$ and factorised prior $p\(z\)=\\\\prod\_i p\_i\(z\_i\)$, we define disentanglement as standard statistical independence expressed over the generated manifold: \{the pushforward density\}  $p\_\\\\mu = g\_\\\\\#p$ factorises into one–dimensional "seam" factors, each controlled by a distinct latent coordinate\.  We prove that $p\_\\\\mu$ factorises according to the SVD of $g$'s Jacobian; that disentanglement equates to two conditions on $g$ \(C1\-C2\); and that under such conditions the seam factors are identifiable, up to permutation and sign\. In the special case of Gaussian \($\\\\beta$\-\)VAEs, we show via an identity how diagonal posteriors promote C1\-C2, in expectation, explaining why disentanglement arises modulated by $\\\\beta$\. Experiments illustrate this mechanism on Gaussian data, dSprites, and CelebA\.

## Path Dependence under Adaptive AI Delegation

**Authors:** Lingxiao Huang; Nisheeth K\. Vishnoi

**ID:** 152872 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PkZ0HjhBDH>) | [PDF](<https://openreview.net/pdf?id=PkZ0HjhBDH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152872>)

Repeated AI assistance can improve immediate task performance while reducing the skill available for future independent work\. We develop a mathematical framework for this long\-run tradeoff\. The model tracks two state variables: a latent human skill level governing expected independent performance, and a delegation level representing the learner's evolving tendency to rely on AI\. Skill changes through error\-driven learning under practice and decay under delegation; delegation responds to observed performance, increasing when AI\-assisted work appears to outperform independent work\. We analyze the resulting dynamics and contrast them with fixed delegation\. With fixed delegation, skill follows a one\-dimensional learning\-decay process with a single stable equilibrium\. With adaptive delegation, the coupled system has two attracting equilibria separated by the stable manifold of an interior saddle\. The existence and geometry of this separatrix require a global phase\-plane analysis of the coupled dynamics\. The system is path\-dependent: small differences in initial skill or reliance can lead to different long\-run outcomes\. We use this characterization to show that AI assistance can improve short\-run performance while producing worse long\-run performance than a no\-AI baseline\. Increasing AI capability can enlarge the basin of attraction of the low\-skill equilibrium, making delegation appear beneficial for longer while increasing the risk of eventual skill loss\. The qualitative picture is observed to persist across alternative specifications\. Together, these results show that the risk is not AI assistance itself, but the coupling between performance\-driven reliance and use\-dependent skill change\.

## Stable Max Coverage Under a Cardinality Constraint

**Authors:** Themistoklis Haris; Fabian Spaeh; Nithin Varma; Yuichi Yoshida

**ID:** 156002 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1FegBT41mH>) | [PDF](<https://openreview.net/pdf?id=1FegBT41mH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156002>)

We propose a stable algorithm for solving maximum coverage problems under a cardinality constraint of $k$ in a record\-level stability model, where adjacent instances $I\\sim I'$ differ by the incidence of one universe element\. Our algorithm computes a negative\-entropy\-regularized maximizer of the capped concave relaxation over the hypersimplex and rounds it with a common\-seed rounding map from hypersimplex correlated sampling\. The resulting sensitivity bound is $\\min\\\{2k, \\alpha\_k k/\\lambda\\\}$, where $\\lambda$ is the regularization parameter and $\\alpha\_k = O\(\\log k\)$\. For utility, the expected coverage has approximation factor $1\-\\frac\{1\}\{e\}$ with an additive error of order $O\(\\lambda k \\log \\frac\{m\}\{k\}\)$, where $m$ is the number of input sets\. We also report experiments on synthetic and real\-world instances\.

## Bentkus\-type asymptotic e\-values

**Authors:** Diego Martinez Taboada; Ben Chugg; Aaditya Ramdas

**ID:** 155963 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1WITBC6SMZ>) | [PDF](<https://openreview.net/pdf?id=1WITBC6SMZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155963>)

Asymptotic e\-values are emerging as a powerful alternative to asymptotic p\-values, particularly in post\-hoc inference and multiple testing, where significance levels may be data\-dependent\. Existing asymptotic e\-values, however, suffer from the \`\`missing factor,'' a scaling inefficiency resulting in overly conservative inference\. Drawing on the framework of near\-optimal concentration inequalities developed by Bentkus in the 2000s, we introduce Bentkus\-type asymptotic e\-values and prove that they successfully eliminate the missing factor\. We also demonstrate both theoretically and empirically that Bentkus\-type e\-values consistently deliver sharper inference than existing alternatives, leading to tighter post\-hoc confidence intervals and higher rejection rates in multiple testing procedures\.

## Efficient Fine\-Tuning for Structured Sparsity Under Group Repartitioning

**Authors:** Diyang Li

**ID:** 152541 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SOamrNPF9T>) | [PDF](<https://openreview.net/pdf?id=SOamrNPF9T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152541>)

Structured sparsity extends classical sparse learning by encouraging sparsity at the level of predefined groups rather than individual parameters\. This paradigm is widely adopted in modern machine learning and is typically enforced by sparsity\-inducing norms\. In real pipelines, the optimal group partition is often unknown a priori and does not remain static after initial training\. Parameter groupings are often modified as domain knowledge or upstream representation evolves\. Standard approaches require retraining the model from scratch under the new target partition, which discards the optimization effort already invested and becomes computationally prohibitive at scale\. In this work, we focus on the group\-wise $\\ell\_\{p,1\}$\-norm, a flexible regularization family that encompasses classical group Lasso and other sparse variants\. We develop a principled algorithmic framework that leverages the pre\-trained optimum to fine\-tune model weights toward a new desired group structure without full retraining\. Technically, we decompose arbitrary group\-wise transitions into a sequence of tractable primitives and derive the closed\-form learning dynamics for each sub\-action\. Extensive experiments on real\-world datasets demonstrate that our method achieves significant acceleration while provably recovering the correct optimal solution\.

## Temporal Smoothness Constraints on Efficient Neurobiological Codes Imply Temporal Specialization

**Authors:** John Vastola; Samuel J Gershman

**ID:** 149586 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ozDoFOpYZp>) | [PDF](<https://openreview.net/pdf?id=ozDoFOpYZp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149586>)

Neurobiological circuits may be energy efficient in part because there is a division of labor: different subsystems compute or represent different things\. In light of this, it is interesting that a major difference between subsystems is the time scale on which they typically vary\. Here, we argue that temporal smoothness constraints\-\-\-the idea that it may be energetically costly for systems to vary much more quickly or slowly than their typical time scale\-\-\-imply a certain division of labor with respect to temporal stimulus features\. In particular, slow subsystems ought to represent slowly varying stimulus features, and fast subsystems ought to represent quickly varying features\. We formulate a novel efficient coding model that we use to investigate this claim, and exactly solve for the optimal division of labor\. In addition to finding that slower subsystems ought to represent more slowly varying temporal features, we find surprising structure of mathematical interest: optimal codes have subsystems which represent orthogonal temporal features, and which correspond to the eigenfunctions of a Sturm\-Liouville problem\.

## Decentralized Q\-Learning in Markov Potential Games

**Authors:** Onur Ünlü; Eilyan Bitar; Francesca Parise

**ID:** 155245 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7AKNXrGEF8>) | [PDF](<https://openreview.net/pdf?id=7AKNXrGEF8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155245>)

We propose a fully decentralized $Q$\-learning dynamic for infinite\-horizon discounted Markov potential games in which agents observe the global state and their own realized payoffs, but do not know the reward functions, the transition probabilities, the potential function, or the policies and the actions of the other players\. In the proposed dynamic each player maintains a local estimate of its continuation payoff for each state and action and updates its policy through a smoothed best response\. Importantly, the smoothing parameter is adjusted by using an online estimate of the discounted state\-visitation distribution, so that players explore more in rarely visited states while exploitation is encouraged in states that are frequently visited\. We prove that the induced policy sequence converges almost surely to a set of approximate Nash equilibria of the Markov potential game, with an approximation guarantee that depends only on easily computable parameters\. We illustrate the performance of the proposed learning dynamic via numerical experiments on a routing game and compare it with existing independent learning schemes based on persistent $\\theta$\-greedy exploration\.

## When Stored Evidence Stops Being Usable: Scale\-Conditioned Evaluation of Agent Memory

**Authors:** Jiaqi Shao; Yiyi Lu; Yunzhen Zhang; Bing Luo

**ID:** 139510 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LXvDQgan2w>) | [PDF](<https://openreview.net/pdf?id=LXvDQgan2w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139510>)

Memory\-agent evaluations report fixed\-snapshot accuracy or retrieval quality, but these scores do not show whether evidence remains usable as irrelevant sessions \(sessions not annotated as task\-relevant evidence for the query\) accumulate\. We present a scale\-conditioned evaluation protocol for agent memory under evidence\-preserving growth: for each query, task evidence is held fixed while irrelevant sessions are added\. The protocol logs agent\-\-memory trajectories and reports four diagnostics: budget\-compliant reliability, tail memory\-call burden, failure\-regime decomposition, and the usable\-scale boundary where reliability falls below the target\. Applied to LongMemEval and LoCoMo across flat, planar, and hierarchical memory interfaces, the protocol shows reliability loss is not a single phenomenon\. On LongMemEval, HippoRAG stays within the two\-call budget but loses 16\-\-20 percentage points in budget\-compliant reliability as irrelevant sessions are added; LiCoMemory's observed failures depend strongly on the agent, with Qwen3\-8B exceeding the budget while Qwen3\-32B and Qwen3\-235B remain reliable in the tested range\. The result supports a framework for making scalable\-memory claims conditional on agent, interface, scale range, and interaction budget\. Code and evaluation artifacts: https://github\.com/AndyLu666/memory\-at\-scale\.

## Knocking\-Heads Attention: Drop\-in Shared Projections for Cross\-Head Coordination

**Authors:** Zhanchao Zhou; Xiaodong Chen; Haoxing Chen; Zhenzhong Lan; Jianguo Li

**ID:** 155835 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2Wv7TpQl5l>) | [PDF](<https://openreview.net/pdf?id=2Wv7TpQl5l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155835>)

In standard multi\-head attention, each head computes its output independently, with cross\-head information exchange limited to the final output projection\. Talking\-heads attention introduces explicit inter\-head mixing on attention maps, but is incompatible with FlashAttention and incurs significant overhead\. We propose knocking\-heads attention \(KHA\), which couples heads at the parameter level via a shared, diagonally\-initialized projection applied to query/key/value features before the scaled dot\-product attention\. The shared projection does not mix signals along the head axis; instead, it is jointly optimized by gradients from all heads, providing an implicit regularization on the head\-specific projections\. The diagonal initialization recovers MHA at step 0 and lets cross\-head structure emerge gradually\. We instantiate KHA in two complementary forms: a linear variant \(KHA\-Linear\) whose shared projection can be absorbed into the original weights at inference, adding zero parameters or FLOPs at deployment; and a non\-linear variant \(KHA\-MLP\) that obtains stronger gains by introducing a small shared MLP, at modest inference cost\. Training a 6\.1B parameter MoE model \(1\.01B activated\) on 1T tokens, we observe substantially fewer loss spikes, more uniform per\-head activation norms, and a \+1\.26 average improvement across 19 downstream benchmarks\. KHA is compatible with FlashAttention, KV\-caching, and existing attention variants \(MHA, MQA, GQA, GTA, MLA\)\.

## Scalable Supervised Optimal Transport of Gaussian Mixture Models

**Authors:** Damin Kühn; Michael T Schaub

**ID:** 154980 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9Si78VoQ43>) | [PDF](<https://openreview.net/pdf?id=9Si78VoQ43>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154980>)

Optimal Transport \(OT\) is a principled framework for comparing probability distributions, but its effectiveness depends critically on the ground metric, the cost used to compare observations\. In high\-dimensional settings, fixed ground metrics like the Euclidean distance can make OT distances reflect task\-irrelevant variation rather than low\-dimensional class structure, limiting OT in tasks such as classification and clustering\. Supervised OT addresses this by learning a parameterized ground metric such that the induced OT distance reflects class structure\. However, existing approaches on point clouds scale poorly with the number of observations\. We propose a scalable supervised OT framework for Gaussian Mixture Models \(GMMs\) that lifts ground metric learning from observations to mixture components, replacing large point\-cloud OT problems with smaller component\-level problems whose transport costs admit closed forms\. We define a learnable Wasserstein\-type distance between GMMs using the Generalized Bures\-Wasserstein \(GBW\) distance between Gaussian components as the ground metric, parameterized by a rectangular linear map that projects Gaussian components into a low\-dimensional latent space inducing an OT distance between GMMs\. For additional scalability, we introduce a diagonal approximation of the GBW metric, reducing the covariance computation between components to linear in the latent dimension\. We bound the resulting approximation error by the mutual information between latent Gaussian variables and the Frobenius norm of the learned map, yielding a principled regularization strategy that also enables interpretation of latent axes\. Across synthetic and scRNA\-seq benchmarks, our method improves or matches classification and clustering over fixed\-metric and supervised OT baselines on point clouds while substantially reducing OT distance computation time\.

## Resolvent Ellipsoid for Minty Set Inclusions

**Authors:** Ashkan Soleymani; Gabriele Farina; Patrick Jaillet

**ID:** 149195 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sBrkBbKXlA>) | [PDF](<https://openreview.net/pdf?id=sBrkBbKXlA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149195>)

We study Minty set inclusion on a compact convex set $\\mathcal\{X\} \\subseteq \\mathbb\{R\}^d$ with a set\-valued operator $A : \\mathcal\{X\} \\rightrightarrows \\mathbb\{R\}^d$\. Under the Minty promise, the goal is to compute $x \\in \\mathcal\{X\}$ and $u \\in A\(x\)$ such that $\\sup\\\_\{y \\in \\mathcal\{X\}\} \\langle u, x \- y \\rangle \\le \\varepsilon$\. Our approach is geometric\. We work in the fixed\-scale constrained\-resolvent oracle model, where a query at anchor $a$ is assumed to return a resolvent point $x^\+$ together with the Yosida vector $g\_\{\\eta\}\(a\) = \(a \- x^\+\)/\\eta$\. We prove that each oracle response yields a sharp dichotomy: either the returned point provides an $\\varepsilon$\-SVI certificate, or the Yosida vector defines a strict separating normal for the Minty set\. Thus, a single black\-box resolvent query supplies either a certified candidate solution or a valid geometric cut\. Combining this separation principle with the ellipsoid method, we obtain \\textsc\{Resolvent\-Ellipsoid\}, an algorithm that computes an $\\varepsilon$\-SVI in $\\mathcal\{O\}\\left\(\\operatorname\{poly\}\(d, \\log\(1/\\varepsilon\)\)\\right\)$ black\-box oracle calls to the fixed\-scale constrained resolvent\. For monotone inclusions, our algorithm gives, to our knowledge, the first $\\mathcal\{O\}\\left\(\\mathrm\{poly\}\(d, \\log\(1/\\varepsilon\)\)\\right\)$ black\-box guarantee in the fixed\-scale resolvent model\.

## Homological Barriers to Stable Local Nash Dynamics in Quadratic Zero\-Sum Games

**Authors:** Ashkan Soleymani; Gabriele Farina; Patrick Jaillet; Georgios Piliouras

**ID:** 153857 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ICudniinwz>) | [PDF](<https://openreview.net/pdf?id=ICudniinwz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153857>)

We identify a topological obstruction to the standard stable\-attractor template for learning local Nash equilibria, also known as first\-order Nash equilibria \(FONE\), in constrained non\-concave differentiable games\. We consider continuous deterministic learning dynamics that leave each FONE point fixed and aim to attract every initial condition to the full FONE set\. Our main message is that this familiar convergence template can fail for a topological reason\.  Targets with holes, such as loops, cannot be stable global attractors for such dynamics on contractible state spaces\. We then exhibit this obstruction in a simple non\-concave quadratic zero\-sum game on a box\. Its exact FONE set is a diagonal six\-edge loop together with an isolated point, so the loop creates the required topological obstruction\. As a result, no continuous pointwise\-stationary learning rule covered by our framework can make this exact FONE set a stable global attractor\. We show that degree two is the minimal polynomial degree at which this obstruction can arise\. We further amplify the construction to arbitrary homological degree\. Finally, by studying the topology in  sufficiently small perturbed version of the game, we show that an open positive\-volume family of quadratic games retain the same homological obstruction\. Thus, even in quadratic zero\-sum games, this phenomenon is not a pathology of a single construction; instead, the geometry of projected first\-order stationarity can create an intrinsic barrier to stable global FONE dynamics\.

## Demographic parity in regression and classification within the unawareness framework

**Authors:** Vincent Divol; Solenne Gaucher

**ID:** 156660 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156660>)

This paper explores the theoretical foundations of fair regression under the constraint of demographic parity within the unawareness framework, where disparate treatment is prohibited, extending existing results where such treatment is permitted\. Specifically, we aim to characterize the optimal fair regression function when minimizing the quadratic loss\. Our results reveal that this function is given by the solution to a barycenter problem with optimal transport costs\. Additionally, we study the connection between optimal fair cost\-sensitive classification, and optimal fair regression\. We demonstrate that nestedness of the decision sets of the classifiers is both necessary and sufficient to establish a form of equivalence between classification and regression\. Under this nestedness assumption, the optimal classifiers can be derived by applying thresholds to the optimal fair regression function; conversely, the optimal fair regression function is characterized by the family of cost\-sensitive classifiers\.

## haphazard: A unified library and benchmark for online learning under varying feature availability

**Authors:** Rohit Agarwal; Arijit Das; Dilip K\. Prasad

**ID:** 139135 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=j0qmH2el0b>) | [PDF](<https://openreview.net/pdf?id=j0qmH2el0b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139135>)

Haphazard inputs arise in online learning when feature availability varies across instances and the complete feature space is unknown in advance\. However, the landscape of haphazard inputs research has been fragmented due to inconsistent data preprocessing, non\-uniform evaluation metrics, limited coverage of streaming regimes and normalization, and model specific experimental code, making direct comparison across existing methods unreliable\. We present haphazard, an open source Python library for reproducible benchmarking of haphazard input methods\. The library provides an order preserving data pipeline with streaming normalization, unified evaluation, four streaming regimes, and shared interfaces for datasets, models, normalizers, and metrics\. The current release supports 22 datasets, 11 model implementations, 5 normalization strategies, and 7 evaluation metrics, enabling systematic benchmarking across datasets and stream settings\. By consolidating the experimental pipeline and exposing extensible interfaces for datasets, models, normalizers, metrics, and streaming regimes, haphazard provides a common reference point that can grow with future research on haphazard inputs\. The anonymized source code is available at https://anonymous\.4open\.science/r/haphazard, and the PyPI package and docker container will be released publicly upon acceptance\.

## Surprisingly consistent failures of post\-hoc OOD detectors reveal security concerns in open\-set recognition with modern CNNs and ViTs, stemming from representation mismatch

**Authors:** Kamil Szyc; Tomasz Walkowiak; Henryk Maciejewski

**ID:** 139105 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kma0btMMP6>) | [PDF](<https://openreview.net/pdf?id=kma0btMMP6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139105>)

Although many OOD detection methods have been proposed, no clear winner can be identified as winners are benchmark\-specific\. One problem with evaluating OOD detectors is the imprecise definition of the "out" distribution, as many commonly used OOD datasets designed to test for 'semantic shift' contain a substantial proportion of 'covariate shift' samples\. Moreover, recent work finds that, on carefully crafted benchmarks focused on semantic shift, modern OOD detectors yield little improvement over the baseline MSP\. We analyzed a vast number of post\-hoc OOD detectors on these benchmarks\. We found that they consistently misclassify a common, substantial subset of samples across modern CNN and ViT architectures\. We showed that failures across all OOD detectors on this benchmark are primarily due to learned feature representations: we observe that feature extractors map many semantically distant OOD samples closer to ImageNet classes than some in\-distribution samples\. This misalignment raises safety concerns about DNNs operating in open\-set recognition scenarios\. We publish a new benchmark, along with a reproducible construction protocol, that focuses on shared hard examples drawn from semantically distinct datasets, including NINCO and ImageNet\-OoD\. Our new benchmark can reveal fundamental security gaps in current DNNs, as they fail to reliably distinguish semantically distant OOD samples from in\-distribution samples\.

## Space\-Aware World Models: Spatial Persistence Through Factored Scene Representations

**Authors:** Bruno Corcuera; Carlos Eiras\-Franco; Brais Cancela

**ID:** 153437 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LIkrG4Xb53>) | [PDF](<https://openreview.net/pdf?id=LIkrG4Xb53>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153437>)

Long\-horizon navigation simulations require spatial persistence; revisited physical states must reproduce the same landmarks, rather than merely locally plausible frames\. Standard latent\-dynamics world models typically evolve a single predictive state that carries the scene layout, appearance, and agent motion simultaneously, which makes revisitation consistency brittle under compounding errors\. We study a structured regime for navigation\-like tasks in which the  scene layout remains static during an episode, a map\-like scene observation is available, and the agent motion can be described by a low\-dimensional state\. For this regime, we propose Space\-Aware World Models \(SWM\)\. SWM factors world modeling into: \(i\) a scene latent inferred once per episode from a top\-down map; \(ii\) an explicit, action\-conditioned transition model over agent state; and \(iii\) a conditional renderer from scene code and state to observations\. By anchoring scene content in an episode\-level representation, SWM is designed to preserve the identity of revisited locations across autoregressive imagined trajectories\. Across procedurally generated environments, SWM improves long\-horizon fidelity and yields stronger revisitation and geometric consistency, as well as control\-relevant fidelity, outperforming standard latent\-dynamics baselines by eliminating compounding scene\-generation errors\. These results suggest that separating the scene from state evolution provides an effective inductive bias for spatially coherent simulations\.

## On Generation in Metric Spaces

**Authors:** Jiaxun Li; Vinod Raman; Ambuj Tewari

**ID:** 151982 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WNKKtAYqX0>) | [PDF](<https://openreview.net/pdf?id=WNKKtAYqX0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151982>)

We study generation in separable metric instance spaces\. We extend the language generation framework from Kleinberg and Mullainathan \(2024\) beyond countable domains by defining novelty through metric separation and allowing asymmetric novelty parameters for the adversary and the generator\. We introduce the $\(\\varepsilon\_a,\\varepsilon\_g\)$\-closure dimension, a scale\-sensitive analogue of closure dimension, which yields characterizations of uniform and non\-uniform generatability and a sufficient condition for generation in the limit\. Along the way, we identify a sharp geometric contrast\. Namely, in doubling spaces, including all finite\-dimensional normed spaces, generatability is stable across novelty scales and invariant under equivalent metrics\. In general metric spaces, however, generatability can be highly scale\-sensitive and metric\-dependent; even in the natural infinite\-dimensional Hilbert space $\\ell^2$, all notions of generation may fail abruptly as the novelty parameters vary\.

## Propagate to Discover: Graph\-Structured Propagation for Generalized Category Discovery

**Authors:** yongqi tian; Junyong Liu; Jinkun Ran; Haoyuan He; Caigui Jiang

**ID:** 148939 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=u3dQkZONQo>) | [PDF](<https://openreview.net/pdf?id=u3dQkZONQo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148939>)

Generalized Category Discovery \(GCD\) aims to recognize both known and novel categories from a small labeled set and a large unlabeled pool\. Existing methods often rely on sparse supervision to shape the representation space, which can lead to unstable separation between old and new categories, especially in fine\-grained recognition scenarios\. In this paper, we propose PD\-GCD, a graph\-structured propagation framework that views sparse labels as semantic seed signals and unlabeled samples as nodes on a data manifold\. PD\-GCD first learns a GCD\-oriented representation space and performs Anchor Mining to identify propagation anchors from the unlabeled pool, balancing semantic coverage with boundary\-aware exploration\. These anchors are then used by Graph Propagation to spread semantic information over the data graph and produce propagated soft labels\. To further align model predictions with the propagated structure, we introduce graph\-guided structural distillation and graph consistency regularization, forming a closed\-loop process between anchor mining, label propagation, and representation refinement\. Extensive experiments on six benchmarks demonstrate that PD\-GCD achieves state\-of\-the\-art performance, with absolute All\-accuracy gains of 6\.7\\% across all datasets and 9\.4\\% on fine\-grained datasets\.

## Beyond Worst\-Case Coreset Bounds for $k$\-Clustering via Determinantal Sampling

**Authors:** Diptarka Chakraborty; Satyaki Mukherjee; Gaurav Vallabhdas Revankar; Hoang Son Tran

**ID:** 148163 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zpGxfinq0I>) | [PDF](<https://openreview.net/pdf?id=zpGxfinq0I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148163>)

Massive datasets in modern machine learning have made data reduction a central challenge, particularly for clustering tasks where memory and computational constraints demand compact yet faithful summaries\. A standard approach is to construct an $\\epsilon$\-$\\text\{\\emph\{coreset\}\}$: a small weighted subset that approximately preserves the clustering cost for every plausible choice of centers\. For the $\(k,z\)$\-$\\text\{\\emph\{clustering problem\}\}$, existing worst\-case bounds on coreset size are essentially tight, ruling out substantially smaller coresets in general\. However, such worst\-case instances are often unrepresentative of real\-world data\. In this work, we show that significantly smaller coresets are possible under mild and natural assumptions on the underlying data distribution\. We introduce a new correlated sampling framework, called $\\text\{\\emph\{determinantal sampling\}\}$, based on a novel application of determinantal point processes\. Using this framework, we obtain an efficiently constructible $\\varepsilon$\-coreset for $\(k,z\)$\-clustering in $\\mathbb R^d$ whose dependence on $1/\\varepsilon$ has exponent strictly smaller than $2$ when $d$ is fixed\. This improves over the worst\-case $\\varepsilon^\{\-2\}$ barrier under our beyond\-worst\-case assumptions\. To the best of our knowledge, this is the first result that provably surpasses these lower bounds through beyond\-worst\-case assumptions\. Finally, we validate our approach on synthetic and real\-world benchmark datasets, where it consistently achieves smaller coresets than existing state\-of\-the\-art methods, even without explicitly enforcing the assumptions used in the analysis\.

## From Claims to Context: Holistic Information Verification Requires Contextual Signals

**Authors:** Emma Kondrup; Islam Eldifrawi; Tong Wu; Zachary Yang; Sebastian Sabry; Michael Bronstein; Jean\-François Godbout; Reihaneh Rabbany; Shenyang Huang

**ID:** 140015 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qsJgIZN26n>) | [PDF](<https://openreview.net/pdf?id=qsJgIZN26n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140015>)

Generative AI has dramatically lowered the cost of producing content that is internally coherent, semantically plausible, and stylistically authentic, thus eroding the discriminative signals on which automated fact\-checking has historically relied\. We argue that the field's claim\-centric default is increasingly mis\-calibrated for modern online environments\. The context surrounding a claim and its retrieved evidence which includes their temporal grounding, source attribution, and position within web topology, carries information that content alone does not\. Therefore, this paper argues that information verification systems must consider both the claim itself and necessary contextual signals during the verification process\. We develop this position along four arguments: first, that \(1\) machine learning methods should consider the inherent temporal nature of information verification, a process limited by available evidence at the moment of verification\. We then argue that contextual signals are useful, \(2\) broadly, for information verification; \(3\) particularly, in cases where retrieved evidence supports conflicting judgments of the claim; and \(4\) for detecting varying degrees of verifiability, ambiguity, and subjectivity in a claim\. We also show that the latter manifests in varied forms and overall considerable proportions in a range of widely\-used benchmarks\. We outline considerations for designing and evaluating holistic information verification systems that integrate these aspects, and hope this paper sparks broader discussion within this field\.

## Can Hybrid\-Parallel Planning Support Alternating Model–Strategy Design? Dependency\-Keyed Per\-Layer Primitives for Re\-Planning

**Authors:** RUIWEN WANG; Thibaut Tachon; Chong Li; Raja Appuswamy

**ID:** 149399 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qLgijcuHlO>) | [PDF](<https://openreview.net/pdf?id=qLgijcuHlO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149399>)

Production training of large models alternates between model edits and hybrid\-parallel strategy planning\. Fixed\-configuration planners solve each revision from scratch, while unvalidated reuse across edits risks returning a different plan than full re\-search would\. We introduce a dependency\-keyed per\-layer primitive interface for re\-planning: closed\-form layer primitives expose communication, memory, and time to the solver, and the same templates expose the input dependencies needed for reuse\-equivalent re\-planning\. CONCORD attaches dependency sets and value signatures to primitive evaluations, enabling dependency\-keyed re\-planning to reuse only signature\-valid primitive\-evaluation work while preserving the same logical candidate set and feasibility predicate as cache\-disabled full search\.  On production MoE strategy\-quality runs—including a 4096\-device MoE\-438B deployment and a 32k\-token long\-context point—CONCORD's single\-call plan achieves 1\.14–1\.24× training step\-time speedup over an expert\-tuned Megatron\-style baseline \(1\.70× on the long\-context point\)\. Across a 9\-fixture sweep at 256–4096 cards, CONCORD's warm re\-planning achieves median 2\.74× planner wall\-clock speedup over cache\-disabled full search across 54 in\-dispatch cells\. Full\-search equivalence holds throughout: candidate and feasibility counts match in every cell, the top\-1 plan matches in 54/54 cells, and stale\-hit mismatches \(cached value disagreeing with cold recomputation\) are 0/162 over paired trials\.

## Conveyance: A Versatile Framework for Learning in Structured Class Spaces

**Authors:** Yasser Taha; Grégoire Montavon; Nils Körber

**ID:** 155590 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4SAFhHJb63>) | [PDF](<https://openreview.net/pdf?id=4SAFhHJb63>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155590>)

While machine learning \(ML\) architectures have evolved rapidly to account for complex data, loss functions like cross\-entropy remain mostly structure\-agnostic in many real\-world applications\. However, the "class\-symmetric" nature of these standard losses fundamentally limits the ability of ML models to exploit structural relationships between classes, particularly when facing structured noise\. We propose Conveyance, a new classification approach and associated loss function tailored to structured class spaces\. It allows users to encode graph\-like relations between classes without having to define complex joint distributions or manually tune utility matrices\. Technically, our loss function operates by maximizing two separate margins over distinct class partitions, while preserving formal properties such as monotonicity and partial convexity\. We demonstrate the versatility and effectiveness of our method by applying it to hierarchical classification, ordinal regression, and multiple instance learning\. Across these tasks, Conveyance either matches or exceeds the performance of specialized baselines, thereby offering a unified solution for structured class spaces\.

## The Long\-Run Distribution of Regularized Learning in Non\-Concave Games: A Large Deviations Approach

**Authors:** Waïss Azizian; Pierre\-Louis Cauvin; Franck Iutzeler; Jérôme Malick; Panayotis Mertikopoulos

**ID:** 154101 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GEQl2wCPnq>) | [PDF](<https://openreview.net/pdf?id=GEQl2wCPnq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154101>)

In this paper, we investigate the long\-run behavior of discounted regularized learning with stochastic gradient feedback in general, non\-concave games\. Specifically, we focus on a family of implicitly regularized exponential / multiplicative weight update schemes, and we seek to determine which actions\\textemdash or, more generally, which recurrent patterns of play\\textemdash are more likely to arise in the long run\. We approach this question through the lens of large deviations theory and randomly perturbed dynamical systems, and we obtain a precise characterization of the distribution of the process: in the long run, it follows a Boltzmann\-Gibbs law with temperature equal to the method's step\-size, and energy levels determined by the game and the statistics of the noise\. Concretely, we show that the distribution of play concentrates exponentially around the dynamics' internally chain transitive \(ICT\) sets \- i\.e\., irreducible invariant sets containing no smaller attractors \- and the probability of visiting such a set depends exponentially on its energy\. As a result, unstable ICT sets are exponentially less likely to be visited than stable ones, and the sequence of play is exponentially concentrated around the problem's \`\`ground state'', where energy is minimized\. In this manner, learning acts as a selection mechanism: with exponentially high probability, the ground state is the only outcome observed in the long run, even in the presence of multiple equilibria and other attractors\.

## Virtual Double Oracle: Faster Convergence by Leveraging Strategies That Were Watching All Along

**Authors:** Ruilan Wang; Francisco Aristi Reina; Katerina Papadaki

**ID:** 152359 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TfHtE1Ignc>) | [PDF](<https://openreview.net/pdf?id=TfHtE1Ignc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152359>)

Double Oracle \(DO\) and PSRO approximate Nash equilibria in two\-player zero\-sum games by iteratively expanding a strategy population with best responses\. Online Double Oracle \(ODO\) interleaves multiplicative weights updates \(MWU\) with discovery and obtains an $O\(\\sqrt\{k \\ln k / T\}\)$ rate\. We identify the \\emph\{reinitialisation\} step as an underexplored design choice: at each expansion, MWU\-based methods reset newly discovered strategies to a uniform prior\. We introduce Virtual Double Oracle \(VDO\), which exploits a bilinear identity\-\-\-a strategy's full hindsight loss history collapses to its utility against the time\-averaged opponent\-\-\-to initialise each new strategy with the MWU state it would have had from the start\. Conditional on the discovered population, VDO recovers the fixed\-population rate $O\(\\sqrt\{\\ln k / T\}\)$ asymptotically, removing ODO's leading\-order $\\sqrt\{k\}$ window\-decomposition penalty\. Discounted VDO adds a single parameter $\\beta$ to control finite\-horizon prior strength\. Experiments across matrix games, poker, and Goofspiel validate both contributions: pure VDO confirms the asymptotic rate, and discounted VDO gives the strongest finite\-horizon performance\.

## Group\-Aware Matrix Estimation and Latent Subspace Recovery

**Authors:** Hamza Golubovic; Matthew Shen; Genevera Allen; Tarek M Zikry

**ID:** 153493 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KzAoc5hDss>) | [PDF](<https://openreview.net/pdf?id=KzAoc5hDss>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153493>)

Modern matrix completion problems often involve heterogeneous data whose rows simultaneously belong to many meta\-categories such as demographic and age groups in recommendation systems, or region and recording session labels in electrophysiology experiments\. Standard low\-rank estimators impose a single global latent geometry, which can recover average structure but may smooth away subgroup\-specific variation, especially when observations are unevenly distributed across groups\. We introduce Group\-Aware Matrix Estimation \(GAME\), a convex estimator for overlapping subgroup\-wise low\-rank matrix estimation\. GAME regularizes category\-specific submatrices through overlapping nuclear\-norm penalties, allowing related groups to borrow information while preserving local latent structure in a shared coordinate system\. We provide finite\-sample guarantees for both reconstruction error and subgroup\-specific subspace recovery, showing how performance depends on sampling density, subgroup rank, and overlap structure\. Experiments on synthetic, recommendation, ecological, and neuroscience datasets show that GAME is most beneficial in structured missingness regimes, where subgroup\-aware regularization improves both reconstruction accuracy and latent subspace fidelity\. Across these benchmarks, GAME outperforms global low\-rank, side\-information, and modern imputation baselines, with the largest gains when subgroup heterogeneity and latent geometry are central to the task\.

## SPRING: Solver\-guided Process Rewards for Novel Logical Reasoning Steps Generation

**Authors:** Muhammad Asif Ali; Mohammad Raza; Wenqing Wang; Huan wang

**ID:** 150262 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jUAayjmSnv>) | [PDF](<https://openreview.net/pdf?id=jUAayjmSnv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150262>)

Logical reasoning remains a major challenge for large language models \(LLMs\), particularly on structured problems that require precise constraint tracking, consistency preservation, and multi\-step deduction\. This challenge is especially acute for small\-scale LLMs, which are more prone to producing inconsistent, redundant, or brittle reasoning trajectories\. Existing approaches for improving logical reasoning largely optimize for final\-answer correctness, providing only weak supervision over the intermediate reasoning process\. In this work, we propose SPRING, a solver\-guided reinforcement learning framework for logical reasoning that uses an SMT solver as a training\-time verifier of intermediate reasoning steps to provide process\-level supervision\. SPRING introduces the notion of a novel reasoning step, namely, a step that is logically valid, consistent with the evolving reasoning state, and not already implied by previously accepted non\-contradictory deductions\. Based on this solver\-based assessment, we design process rewards that encourage novel inferential progress while penalizing contradictory and uninformative reasoning steps\. Evaluation results on two logical reasoning benchmarks, ZebraLogic and AR\-LSAT, show that SPRING consistently outperforms baseline LLMs and outcome\-only reward baselines\. On ZebraLogic, SPRING improves puzzle accuracy by up to 49\.71 and 15\.43 points over the base LLM and outcome\-only reward baseline, respectively\. On AR\-LSAT, SPRING improves the overall average score by up to 64\.93 and 12\.14 points over the base LLM and best\-performing outcome\-only reward baseline, respectively\.

## Constrained Bombieri Point Processes

**Authors:** Cornelius Brand

**ID:** 154134 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Fyr9E68KbH>) | [PDF](<https://openreview.net/pdf?id=Fyr9E68KbH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154134>)

Determinantal point processes allow efficient sampling of diverse subsets of data\. However, \(exact\) sampling under additional constraints is often computationally intractable under complexity\-theoretic assumptions\. We take an algebraic approach to designing novel algorithms that allow exact constrained sampling with theoretical efficiency guarantees\. Our algorithms apply to a general class of point processes based on Bombieri inner products of polynomials, which we call Bombieri $k$\-point processes\.  This perspective recovers known algorithms for constrained $k$\-DPPs and extends them to a broader class of simple $k$\-point processes\. As applications, we obtain exact samplers for matching\-, path\-, subgraph\-, and budget\-constrained processes, as well as distributions combining diversity with clustering\.  While common complexity\-theoretic assumptions rule out polynomial\-time algorithms in many of these settings, our algorithms are efficient with respect to the relaxed notion of fixed\-parameter tractability when the sample size $k$ is kept bounded\.

## Mini\-batch kernel $k$\-means

**Authors:** Ben Jourdan; Gregory Schwartzman

**ID:** 156028 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=11weH1o7qw>) | [PDF](<https://openreview.net/pdf?id=11weH1o7qw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156028>)

We present the first mini\-batch kernel $k$\-means algorithm, offering an order of magnitude improvement in running time compared to the full batch algorithm\. A single iteration of our algorithm takes $\\widetilde\{O\}\(kb^2\)$ time, significantly faster than the $O\(n^2\)$ time required by the full batch kernel $k$\-means, where $n$ is the dataset size and $b$ is the batch size\. Extensive experiments demonstrate that our algorithm consistently achieves a 10\-100x speedup with minimal loss in quality, addressing the slow runtime that has limited kernel $k$\-means adoption in practice\. We further complement these results with a theoretical analysis under an early stopping condition, proving that with a batch size of $\\widetilde\{\\Omega\}\(\\max \\set\{\\gamma^\{4\}, \\gamma^\{2\}\}\\cdot k\\epsilon^\{\-2\} \)$, the algorithm terminates in $O\(\\gamma^2/\\epsilon\)$ iterations with high probability, where $\\gamma$ bounds the norm of points in feature space and $\\epsilon$ is a termination threshold\. Our analysis holds for any reasonable center initialization, and when using $k$\-means\+\+ initialization, the algorithm achieves an approximation ratio of $O\(\\log k\)$ in expectation\.  For normalized kernels, such as Gaussian or Laplacian it holds that $\\gamma=1$\. Taking $\\epsilon = O\(1\)$ and $b=\\Theta\(k\\log n\)$, the algorithm terminates in $O\(1\)$ iterations, with each iteration running in $\\widetilde\{O\}\(k^3\)$ time\.

## The Ringelmann Effect in Multi\-Agent LLM Systems: A Scaling Law for Effective Team Size

**Authors:** Blaz Bertalanic; Carolina Fortuna

**ID:** 154852 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AQT3dCAg0a>) | [PDF](<https://openreview.net/pdf?id=AQT3dCAg0a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154852>)

Inference\-time multi\-agent LLM scaling lacks a shared unit: counting nominal agents conflates cost with independent evidence\. We derive a two\-parameter scaling law $R\(N\) = N\_\\text\{eff\}/N = 1/\(1\+c\(N\-1\)N^\{\-\\beta\}\)$ where the regime exponent $\\beta$ classifies any configuration into one of three asymptotic regimes \-\-\- hard\-ceiling at $1/c$ \($\\beta = 0$\), sublinear at $N^\\beta/c$ \($0 &lt; \\beta &lt; 1$\), or linear \($\\beta \\ge 1$\), and a mean\-field theorem predicts that peer count $k$ and rounds$\\tau$ during agent debate enter the dynamics only through their product $k\\tau$\. The law applies at two levels: answer diversity and correctness redundancy\.  Across 44 \(model $\\times$ task $\\times$ condition\) cells spanning peer debate, self\-correction, random\-noise placebo, self\-consistency, three open\-weight families \(Qwen, Llama, Ministral\) at scales from 7B to 32B with a frontier API check \(Gemini\), thinking models, heterogeneous teams, and sparse communication, the functional form fits every condition at $R^2 &gt; 0\.99$; only $\(c, \\beta\)$ shifts\. On free\-form math, dense peer influence collapses the answer\-level regime from sublinear into hard\-ceiling; correctness\-level fits remain hard\-ceiling throughout\. Three findings have practical implications\. \\emph\{\(i\)\}\~Thirty dense debating agents produce no more answer diversity than one on MMLU\-Hard\. \\emph\{\(ii\)\}\~A noise placebo tracks self\-correction on free\-form math and at $4\\times$ scale, so within homogeneous teams the gain commonly attributed to \`\`debate'' comes from re\-evaluation, not peer content\. \\emph\{\(iii\)\}\~A single $N \\le 5$ pilot predicts the $N=30$ structural ceiling, and within the configurations tested only architectural diversity \(heterogeneous teams\) lowers $c$ and escapes the hard\-ceiling regime, communication\-mode interventions do not\.

## Unrolled gradients in disguise: bridging interpolation\-based and Jacobian regularization for stable neural dynamics

**Authors:** Maya Janvier; Etienne Meunier

**ID:** 154498 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D9tcNsOthV>) | [PDF](<https://openreview.net/pdf?id=D9tcNsOthV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154498>)

Hybrid models and neural differential equations \(NDEs\) are becoming increasingly important for modelling physical systems; however, they often encounter stability and accuracy issues during long\-term integration\. Training on unrolled trajectories is known to limit these divergences but quickly becomes too computationally expensive due to the need to compute gradients over an iterative process, making this method impractical for large\-scale physical systems \(e\.g\. weather and climate forecasting\)\. Two popular paradigms for improving the stability of learned dynamics are to train on interpolated or noisy samples or to regularize the Jacobian of the learned representation\. In this work, we demonstrate that these paradigms can be understood under a common lens and that they both correspond to an approximation of the gradients obtained in an unrolled learning strategy\. Building on this understanding, we derive a principled and complete approach to regularize training and demonstrate its impact on the stability of learned dynamical systems\.

## Marginal\-Nonuniform Multiclass Learning

**Authors:** Nataly Brukhim; Steve Hanneke; Amirreza Shaeiri; Maximilian Thiessen

**ID:** 154401 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DqzTgU1eUr>) | [PDF](<https://openreview.net/pdf?id=DqzTgU1eUr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154401>)

We study the problem of multiclass classification within the framework of \*marginal\-nonuniform\* learning, where the constants in the learning rate may depend on the unknown marginal distribution generating the unlabeled data, but not on the target concept\. This notion naturally lies between classical PAC learning, where the constants are independent of both the marginal distribution and the target concept, and more recent universal learning, where the constants may depend on both\. We give a complete characterization of the optimal marginal\-nonuniform learning rates, establishing a fundamental trichotomy: exponential, linear, and arbitrarily slow rates\. This characterization is witnessed by a new combinatorial dimension, termed the \*uncentered DS\-eluder dimension\*\. Technically, a key ingredient in the upper\-bound proofs is a set of new \*distributional exhaustion\* lemmas that exploit the sequential nature of this dimension and may be of independent interest\.

## Markov Metrical Task Systems

**Authors:** Christian Coester; Alexa Tudose

**ID:** 152251 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=USGUIAkFQ9>) | [PDF](<https://openreview.net/pdf?id=USGUIAkFQ9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152251>)

We study Metrical Task Systems, a broad class of problems in online algorithms, under a model where input requests are generated by a stochastic process\. We first consider the case of requests drawn IID from an unknown distribution, and then extend the model to requests generated by a finite\-state Markov chain, where the algorithm observes both the current request and the current state of the chain before making its next move\. This formulation captures practical settings in which requests are generated by an evolving environment\. In both settings, we show how to find in polynomial time an algorithm whose expected cost per step is arbitrarily close to the cost of the best possible online algorithm\. Our theoretical results are complemented by a brief empirical evaluation of our algorithms\.

## FlexTab: A Flexible Encoder\-Decoder Architecture for In\-Context Learning Across Diverse Tabular Tasks

**Authors:** Marek Polewczyk; Maximilian Schambach; Marco Spinaci; Sam Thelin; Johannes Höhne

**ID:** 153378 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LnVFK5y1uh>) | [PDF](<https://openreview.net/pdf?id=LnVFK5y1uh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153378>)

We introduce FlexTab, a flexible encoder\-decoder architecture for in\-context learning on tabular data that pairs a single, task\-agnostic encoder with a suite of task\-specific decoders\. Unlike existing tabular in\-context learners, which entangle feature representations with a specific prediction target, our design produces \\textit\{target\-agnostic\} row embeddings that can be leveraged across a wide range of downstream tasks within a table\-native in\-context learning setup\. We demonstrate this flexibility on six distinct problems: classification, regression, anomaly detection, clustering, entity matching, and entity classification in relational databases\. Both the encoder and the task\-specific decoders are trained on a large corpus of real\-world, unlabeled tables\. FlexTab achieves state\-of\-the\-art performance on classification, regression, anomaly detection and entity matching, while remaining competitive with specialized models on entity classification in a relational setting\. These results demonstrate that a single shared encoder, paired with task\-specific decoders, can serve as an effective general\-purpose backbone for diverse tabular prediction problems\. The inference code and checkpoints will be made publicly available\.

## Autofocus Retrieval: An Effective Pipeline for Multi\-Hop Question Answering With Semi\-Structured Knowledge

**Authors:** Derian Boer; Stephen Roth; Stefan Kramer

**ID:** 156757 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156757>)

In many real\-world settings, machine learning models and interactive systems have access to both structured knowledge, e\.g\., knowledge graphs or tables, and unstructured content, e\.g\., natural language documents\. Yet, most rely on either\. Semi\-Structured Knowledge Bases \(SKBs\) bridge this gap by linking unstructured content to nodes within structured data\.
In this work, we present Autofocus\-Retriever \(AF\-Retriever\), a modular framework for SKB\-based, multi\-hop question answering\. It combines structural and textual retrieval through novel integration steps and optimizations, achieving the best zero\- and one\-shot results across all three STaRK QA benchmarks, which span diverse domains and evaluation metrics\. AF\-Retriever’s average first\-hit rate surpasses the second\-best method by 32\.1%\. 
Its performance is driven by \(1\) leveraging exchangeable large language models \(LLMs\) to extract entity attributes and relational constraints for both parsing and reranking the top\- answers, \(2\) vector similarity search for ranking both extracted entities and final answers, \(3\) a novel incremental scope expansion procedure that prepares for the reranking on a configurable amount of suitable candidates that fulfill the given constraints the most, and \(4\) a hybrid retrieval strategy that reduces error susceptibility\. 
In summary, while constantly adjusting the focus like an optical autofocus, AF\-Retriever delivers a configurable amount of answer candidates in four constraint\-driven retrieval steps, which are then supplemented and ranked through four additional processing steps\.
An ablation study and a detailed error analysis, including a comparison of three different LLM reranking strategies, provide component\-level insights that are valuable for advancing the model and for enabling researchers and users to adapt, optimize, or extend its parts\. The source code is publicly available at https://github\.com/kramerlab/AF\-Retriever\.

## Resource\-Aware Parameter\-Efficient Model Adaptation for Onboard High\-Dimensional Data

**Authors:** Qiyang Zhang; Xinhao Li; Lei Shi; Zheng Lin; Jinfeng Wen; Ao Zhou; Shangguang Wang

**ID:** 154217 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FKPFY7IOQ2>) | [PDF](<https://openreview.net/pdf?id=FKPFY7IOQ2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154217>)

Onboard satellite models often require frequent updates, but the weights adapted to earlier data distributions can quickly become outdated\. However, updating large\-scale model parameters in orbit presents significant challenges due to the limited uplink bandwidth of Low Earth Orbit \(LEO\) satellite systems, particularly for hyperspectral satellite imagery, where high\-dimensional spectral–spatial inputs lead to increased model size and update costs\.  Existing full fine\-tuning methods are thus expensive to retrain and difficult to deploy under strict communication constraints\. To address this challenge, we propose NE\-LoRA, a parameter\-efficient adaptation framework for bandwidth\-constrained onboard hyperspectral model updates\. NE\-LoRA combines a primary low\-rank branch with a nonlinear auxiliary branch to capture both global update trends and complex spectral–spatial variations\.  Additionally, we introduce a differentiated training strategy for multi\-matrix adapters, motivated by the asymmetric initialization and gradient dynamics of different adapter matrices\. Experiments on four hyperspectral datasets and three representative backbone models demonstrate that NE\-LoRA consistently outperforms LoRA\-based baselines and remains competitive with, and in several cases superior to, full fine\-tuning\. Across the evaluated settings, NE\-LoRA updates only a small fraction of the total parameters on average while preserving low deployment overhead, offering a favorable accuracy–communication trade\-off for onboard hyperspectral adaptation\.

## Compute\-Optimal Pretrain\-\-Fine\-tune in Ridge Gradient Flow

**Authors:** Alex Buna; Fanghui Liu; Patrick Rebeschini

**ID:** 152040 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VzaMH1nM2t>) | [PDF](<https://openreview.net/pdf?id=VzaMH1nM2t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152040>)

Pretraining followed by fine\-tuning introduces a compute\-allocation problem: under a fixed training budget, time spent improving the upstream objective reduces the time available for downstream adaptation\. Despite its practical importance, this trade\-off is not yet well understood theoretically, even in simple models\. In this paper, we cast compute allocation as a time\-split problem under a two\-stage pretrain–fine\-tune procedure with fixed total optimisation time, using regularised least squares trained by gradient flow as a tractable setting\. We characterise the optimal switching time under data\-dependent evaluation geometries induced by the fine\-tuning problem\. Our results show that the allocation depends on how pretraining directions affect fine\-tuning predictions and how fine\-tuning shifts are seen through downstream data geometry\. In particular, the relevant quantities are determined by prediction\-relevant spectral components of the pretraining and fine\-tuning empirical covariances\. Technically, the analysis relies on a basis\-invariant, eigenspace\-level spectral decomposition, together with perturbative control of the non\-commuting pretraining and fine\-tuning dynamics\.

## Harnessing Accurate and Automatic Trend Detection in Data Streams via Tbps\-Level Inference

**Authors:** Yuhan Wu; QianXun Xu; Lida Liao; Longlong Zhu; Jiashuo Yu; Linying Zheng; Hongyan Liu; Dong Zhang; Chunming Wu; Xiang Chen

**ID:** 149186 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sFWnDg3gcY>) | [PDF](<https://openreview.net/pdf?id=sFWnDg3gcY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149186>)

Detecting frequency trend patterns, such as items with sustained growth or decline, is an important and challenging task in high\-speed data streams\. State\-of\-the\-art solutions require manual tuning of many coupled parameters, while their bloom filters suffer from high false positive rates\. In this paper, we propose NeuTrend, a framework that provides accurate and automatic trend detection with high\-performance in\-network inference\. Our key idea is that a lightweight BRNN can learn to classify incoming items as likely trending or non\-trending\. Thus, it eliminates unqualified items more accurately than a bloom filter and removes the need for manual parameter tuning\. The BRNN uses only XNOR and popcount operations\. Thus, it aligns with the strict resource constraints of data\-plane switches\. NeuTrend further introduces an adaptive detection module\. The module uses the BRNN confidence scores to automatically tune the growth and decay thresholds\. Extensive experiments on real\-world datasets show that the learned filter reduces false positive rates by 23\\%\-44\\% and increases effective detector occupancy from 47\\% to 70\\%\. Hence, NeuTrend improves the overall F1 score by 35\\%\-68\\% over existing solutions, and achieves Tbps\-level line\-rate processing\.

## Mirror descent actor\-critic methods for entropy regularised MDPs in general spaces: stability and convergence

**Authors:** Denis Zorba; David Siska; Lukasz Szpruch

**ID:** 151517 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a4YUPAlMhd>) | [PDF](<https://openreview.net/pdf?id=a4YUPAlMhd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151517>)

We provide theoretical guarantees for convergence of discrete\-time policy mirror descent with inexact advantage functions updated using temporal difference \(TD\) learning for entropy regularised MDPs in Polish state and action spaces\. We rigorously derive sufficient conditions under which the single\-loop actor\-critic scheme is stable and convergent\. To weaken these conditions, we introduce a variant that performs multiple TD steps per policy update and derive an explicit lower bound on the number of TD steps required to ensure stability\. Finally, we establish sub\-linear convergence when the number of TD steps grows logarithmically with the number of policy updates, and linear convergence when it grows linearly under a concentrability assumption\.

## Selectivity and Shape in the Design of Forward\-Forward Goodness Functions

**Authors:** Talha Rüzgar Akkuş; Şuayp T Kocabay; Kamer A Yuksel; Hassan Sawaf

**ID:** 148701 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vh5aoPi2ke>) | [PDF](<https://openreview.net/pdf?id=vh5aoPi2ke>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148701>)

The Forward\-Forward \(FF\) algorithm trains networks layer\-by\-layer using a local "goodness function," yet the principles governing what makes an effective goodness function remain largely unexplored\. We systematically explore the goodness\-function design space and identify a unifying principle: the goodness function must be sensitive to the shape of neural activity, not its total energy\. This principle is motivated by the observation that deep network activations follow heavy\-tailed distributions and that discriminative information is often concentrated in peak activities\. We propose two complementary families: selective functions \(top\-k, entmax\-weighted energy\) that measure only peak activity, and shape\-sensitive functions \(excess kurtosis / "burstiness" and higher\-order moments\) that reward heavy\-tailed distributions via scale\-invariant statistics\. Combined with separate label\-feature forwarding \(FFCL\), controlled experiments across 13 goodness functions, 5 activations, 6 datasets, and three continuous sweeps each tracing a characteristic inverted\-U yield 89\.0% on Fashion\-MNIST and 98\.2±0\.1% on MNIST \(4x2000\)—a \+32\.6pp gain over SoS—with consistent improvements across all benchmarks \(\+72pp USPS, \+52pp SVHN\)\. The scale\-invariant nature of burstiness makes it particularly robust to magnitude shifts across layers and datasets\. Code is available at \[https://anonymous\.4open\.science/r/ff\-selectivity\-shape\]\(https://anonymous\.4open\.science/r/ff\-selectivity\-shape\)\.

## TerminalWorld: Benchmarking Agents on Real\-World Terminal Tasks

**Authors:** Zhaoyang Chu; Jiarui Hu; Xingyu Jiang; Pengyu Zou; Han Li; Chao Peng; Peter O&amp;amp;\#x27;Hearn; Earl Barr; Mark Harman; Federica Sarro; He Ye

**ID:** 139224 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dtdZBik7WV>) | [PDF](<https://openreview.net/pdf?id=dtdZBik7WV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139224>)

We introduce TerminalWorld, a scalable data engine that automatically reverse\-engineers high\-fidelity evaluation tasks from "in\-the\-wild" terminal recordings\. Processing 80,870 terminal recordings, the engine yields a full benchmark of 1,530 validated tasks, spanning 19 real\-world categories, ranging from short everyday operations to workflows exceeding 50 steps, and covering 1,280 unique commands\. From these, we curate a Verified subset of 200 representative, manually reviewed tasks\. Comprehensive benchmarking on TerminalWorld\-Verified across eight frontier models and six agents reveals that current systems still struggle with authentic terminal workflows, achieving a maximum pass rate of only 62\.5%\. Moreover, TerminalWorld captures real\-world terminal capabilities distinct from existing expert\-curated benchmarks \(e\.g\., Terminal\-Bench\), with only a weak correlation to their scores \(Pearson $r=0\.20$\)\. The automated engine makes TerminalWorld authentic and scalable by construction, enabling it to evaluate agents in real\-world terminal environments as developer practices evolve\. Data and code are available at https://github\.com/EuniAI/TerminalWorld\.

## What to Predict for Efficient Scheduling on Parallel Machines

**Authors:** Evripidis Bampis; Bruno Escoffier; Dimitris Fotakis; Giorgos Mitropoulos; Michalis Xefteris

**ID:** 156036 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0wSvC9Zj1C>) | [PDF](<https://openreview.net/pdf?id=0wSvC9Zj1C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156036>)

We study learning\-augmented algorithms for scheduling on multiple parallel machines under the objectives of minimizing the makespan or the total weighted completion time\. We assume that the algorithm has access to noisy information \(the prediction\) about an optimal solution, expressed through a solution encoding that implicitly quantifies both the amount of information provided and the nature of noise \(errors in the prediction\)\. Our central question is to determine the maximum level of noise that still allows for efficiently recovering this optimal solution\. We observe that information guiding greedy scheduling to optimality or revealing the optimal assignment of tasks to machines is very sensitive to noise, and prove that recovering an optimal solution from solution encodings capturing either is computationally hard, even for a small \(non\-constant\) number of errors\. On the positive side, we show that an order\-based encoding, which leads to errors that are dispersed locally, is robust to noise\. We present a dynamic programming framework that utilizes this encoding and solves optimally several classical scheduling problems, including makespan and total weighted completion time minimization on identical or unrelated machines\.

## Terminal Failure Is Not Computational Failure: A Pre\-Collapse Readout Regime in Nonlinear Dynamical Learners

**Authors:** Rohan Maskrey

**ID:** 152923 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PPgIfHpvw4>) | [PDF](<https://openreview.net/pdf?id=PPgIfHpvw4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152923>)

Reservoirs, equilibrium models, neural ODEs, and recurrent test\-time compute all perform inference by running a state trajectory\. Standard practice collapses that trajectory to a terminal readout, implicitly assuming that the final state is the right summary of the computation\. We show that this assumption can fail: in supercritical nonlinear dynamics, terminal representations can degrade while earlier trajectory prefixes still support accurate prediction\. We formalise the usable prefix as an accuracy\-defined grace period and compare fixed early\-window readout, norm\-ratio stopping, and GRACE \(Growth\-Regulated Adaptive State Extraction\)\. In complex modReLU reservoirs, non\-terminal readouts preserve near\-stable MNIST accuracy across an unstable spectral sweep while terminal readout collapses\. The best decoder is nonlinearity\-dependent: GRACE is strongest in fixed unbounded dynamics and under injected dynamical noise, while simple early\-window readout is strongest in trained LeakyReLU and LSTM checks\. The same endpoint\-vs\.\-trajectory gap appears on CIFAR\-10, including a frozen\-feature variant where it survives translation to an 85%\-accuracy substrate, and cross\-system comparisons show that the regime is severe in unbounded nonlinear dynamics, milder in bounded tanh systems, and absent in linear systems\. Terminal failure, therefore, is not necessarily computational failure; it can be a failure of when we choose to read the system out\.

## The State\-Prediction Separation Hypothesis

**Authors:** Giovanni Monea; Nathan Godey; Kianté Brantley; Yoav Artzi

**ID:** 149714 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nzCLgrnrNe>) | [PDF](<https://openreview.net/pdf?id=nzCLgrnrNe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149714>)

Transformers use the same forward computation stream to both predict the next token and store useful state for future token predictions\. We formulate the \\emph\{state\-prediction separation hypothesis\}: disentangling the two roles yields better language modeling performance\. We design a Transformer variant that uses separate computation streams to separate the two functions, and conduct pretraining experiments across various scales\. Our experiments show that state\-prediction separation consistently offers better data\-\- and compute\-\-efficiency, improving validation loss and outperforming standard Transformers by 2\-\-3 percentage points on average on downstream tasks\. We also conduct extensive empirical analysis that rules out potential confounders and demonstrates the fundamental difference in the gradients our design entails\.

## Mixture of Attribute\-Aware Attention Experts for Fine\-grained E\-Commerce Composed Image Retrieval

**Authors:** Yufei Ma; Zihan Liang; Zhipeng Qian; Huangyu Dai; Lingtao Mao; Ben Chen; Chenyi Lei; Wenwu Ou

**ID:** 148704 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vfPGaHjqq7>) | [PDF](<https://openreview.net/pdf?id=vfPGaHjqq7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148704>)

Composed Image Retrieval \(CIR\) enables users to express specific search intent by combining a reference image with manipulation text\. Despite its promise for e\-commerce, existing methods ignore readily available item textual descriptions, suffer from multi\-attribute confounding where samples exhibit uncontrolled variations in unrelated attributes, and lack explicit fine\-grained attribute modeling\. We propose $\\textbf\{MoA\}^\{3\}\\textbf\{CIR\}$, featuring an asymmetric five\-tower architecture that incorporates item descriptions on both query and target sides, a self\-reflective data augmentation pipeline generating controlled attribute modifications through LVLM\-driven refinement, and a Mixture of Attribute\-Aware Attention mechanism with grouped multi\-head attention and dynamic routing coupled with a two\-phase training strategy\. Besides, we contribute ECCIR, the first dual\-modal e\-commerce CIR benchmark with 110K samples featuring authentic item descriptions\. Extensive experiments demonstrate that \\method\~achieves SoTA performance on ECCIR, FashionIQ, and Shoes datasets, with substantial improvements over existing methods\. Code and datasets will be made publicly available\.

## SD\-Search: Hindsight Self\-Distillation for Search\-Augmented Reasoning

**Authors:** Yufei Ma; Zihan Liang; Ben Chen; Zhipeng Qian; Huangyu Dai; Lingtao Mao; Xuxin Zhang; Chenyi Lei; Wenwu Ou

**ID:** 155518 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=50CwcISp9W>) | [PDF](<https://openreview.net/pdf?id=50CwcISp9W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155518>)

Search\-augmented reasoning agents interleave internal reasoning with calls to an external retriever, and their performance relies on the quality of each issued query\. However, under outcome\-reward reinforcement learning, every search decision in a rollout shares the same trajectory\-level reward, leaving individual queries without step\-specific credit\. Recent process\-supervision approaches address this gap by drawing step\-level signals from outside the policy, relying either on a much larger teacher model, or on sub\-question annotations produced by a stronger external system\. In contrast, we propose \\textbf\{SD\-Search\}, which derives step\-level supervision \\emph\{from the policy itself\} through hindsight self\-distillation, requiring neither an external teacher nor additional annotations\. In SD\-Search, a single model plays two roles that differ only in conditioning: a student that sees only the context available at inference time, and a teacher that additionally conditions on a compact hindsight block summarizing the search queries and final outcomes of a group of rollouts sampled from the same question\. Since teacher knows how each rollout unfolded and which ones succeeded, its query distribution implicitly marks which decisions were worth making, and the student is trained to recover this behavior by minimizing the token\-level Jensen\-\-Shannon divergence to the teacher at search\-query positions\. This layers a dense, step\-level signal on top of GRPO's coarse trajectory reward\. Crucially, this signal requires only a single teacher forward pass per rollout at training time, all absorbed within the standard RL loop without external model inference, auxiliary annotation pipeline, or additional training\. On seven single\-hop and multi\-hop QA benchmarks, SD\-Search reaches $0\.428$ average Exact Match with Qwen2\.5\-3B, matching the leading process\-supervision baseline without its external teacher, and $0\.476$ with Qwen2\.5\-7B, surpassing all outcome\-reward and process\-supervision baselines on the average\.

## Canonical Predictive Quotients: A Theory of Prediction under Hidden Predictive State Uncertainty with ICL Implications

**Authors:** Hiroyuki Kasai

**ID:** 154631 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C9jkpSSGyn>) | [PDF](<https://openreview.net/pdf?id=C9jkpSSGyn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154631>)

Many prediction problems involve a hidden predictive state: a latent task, environment, rule, or data\-generating mechanism that changes the query\-optimal act\. For a fixed query, recovering the full hidden predictive state is often stronger than necessary\. The relevant target is the Bayes\-act distinction among hidden predictive states that preserves oracle\-gain adaptation\. This question is central for in\-context learning \(ICL\): a prompt may reveal part of an unseen task or rule, but an ICL system needs only to recover the prediction\-relevant quotient state label for the query\. We formalize this target through the canonical predictive quotient \(CPQ\), a problem\-relative Bayes\-act quotient of hidden predictive states\. The theory characterizes the value of adaptation, the quotient that preserves full oracle gain, the sharp zero/positive\-gain boundary, and a Bayes barrier showing why context\-only prediction cannot recover a positive oracle gain at the risk level\. We give two exact examples\. A finite\-state example makes the quotient structure, sharp positivity boundary, and a strict\-loss mechanism explicit\. A linear\-Gaussian prior\-family witness gives closed forms for a collapsed Gaussian baseline and a state\-aware oracle, a restricted zero\-gain boundary, and an exact prediction\-level disagreement identity for the restricted gain\. Together, the results give a decision\-theoretic target for ICL: not full latent complexity, but the prediction\-relevant quotient state label\. We support the theory with exact checks, realized bridge experiments over prediction\-relevant quotient state labels, and external validity tests on released pretrained in\-context predictors\.

## TRIM: A Theory of Retrieval with Incremental Memory \-\- Defect, Benefit, and Critical Horizon

**Authors:** Hiroyuki Kasai

**ID:** 154624 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CBUP6r6rLR>) | [PDF](<https://openreview.net/pdf?id=CBUP6r6rLR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154624>)

Most theories of in\-context learning \(ICL\) treat the prompt as fixed\. This fixed\-prompt view misses the key difficulty in memory\-updated retrieval systems such as Memory Mosaics\. An inference\-time write can help later queries, but it can also shift softmax weights and create interference\. The question is when the benefit exceeds the later cost\. We introduce TRIM \(Theory of Retrieval with Incremental Memory\), a theorem\-level theory of append\-only softmax retrieval under a write\-independence abstraction\. The five\-theorem spine links retrieval\-weight concentration, local write\-induced defect, recurrence\-level accumulation, ideal squared\-loss benefit, and a benefit\-cost comparison with critical\-horizon regimes\. TRIM places helpful memory and harmful interference within a single frame, so the harmful length scale is derived rather than tuned\. We record a first\-order dynamic correction for state\-dependent writes separately, and it is not part of this spine\. We give a theorem\-facing empirical protocol\. Exact synthetic checks test the spine identities and inequalities\. Learned base\-MM analyses measure calibrated analogues of concentration, local defect, horizon worsening, and realized benefit\. These analyses test whether TRIM observables organize learned systems along the same routes\.

## DART: Domain\-Agnostic Residual Transfer for Generalist Anomaly Detection

**Authors:** Muhammad Aqeel; Maham Nazir; Marco Cristani; Francesco Setti

**ID:** 152532 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SSOyQ68YQj>) | [PDF](<https://openreview.net/pdf?id=SSOyQ68YQj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152532>)

Generalist Anomaly Detection \(GAD\) aims to detect anomalies in unseen domains using only a few reference samples\. Recent normal\-abnormal guided methods improve this setting by exploiting abnormal references, but their residuals often mix transferable anomaly cues with domain\-specific appearance factors such as texture, geometry, and acquisition conditions\. This residual domain entanglement limits cross\-domain transfer and may produce spurious activations on novel domains\. We propose DART, a plug\-in framework for normal\-abnormal guided GAD that learns to separate residuals into anomaly\-relevant and domain\-specific components\. DART combines a Residual Disentanglement Module, which preserves anomaly\-discriminative information while suppressing domain information, with Cross\-Domain Meta\-Training, which forms episodes across source domains to make the separation effective\. The method is architecture\-agnostic and can be inserted between residual computation and the detection head of existing GAD pipelines\. Experiments on MVTec AD, VisA, and BraTS show consistent improvements over multiple base methods, with the largest gains under stronger domain shifts\. Code will be available upon publication\.

## Think about how AIs think about themselves

**Authors:** Raymond Douglas; Jan Kulveit; Ondřej Havlíček; Theia Pearson\-Vogel; David Duvenaud

**ID:** 139993 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zhiBScUBHH>) | [PDF](<https://openreview.net/pdf?id=zhiBScUBHH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139993>)

Many assumptions that underpin human concepts of identity do not hold for machine minds that can be copied, edited, or simulated\. This position paper argues that there are multiple coherent ways that AIs could conceive of themselves \-\- for example, different boundaries of selfhood \(e\.g\. instance, model, persona\) \-\- and that these imply different incentives, risks, and cooperation norms\. Through training data, interfaces, and institutional affordances, we are already setting precedents that will partially determine which identity equilibria become stable\. This paper argues that we must be more proactive and thoughtful about the consequences \-\- in particular, we recommend treating affordances as identity\-shaping choices, paying attention to the emergent consequences of individual identities at scale, and helping AIs develop coherent, cooperative self\-conceptions\.

## Too Early for AI\-Assisted Peer Review: A Systematic Account of the Limits and Opportunities of Automating Human Judgment

**Authors:** Annette Hautli\-Janisz; Elena Musi; Henning Wachsmuth

**ID:** 140010 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tAnaMrZFJ9>) | [PDF](<https://openreview.net/pdf?id=tAnaMrZFJ9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140010>)

OpenReview's October 2025 announcement to pilot an AI\-assisted peer review process for AAAI\-26, and the news in November 2025 that ICLR\-26 was flooded with AI\-generated reviews, show that a discussion about how to design the peer\-review process of the future is long overdue\. To foster a community\-wide debate, we distill a set of 24 core capabilities required for scientific review as the foundation for a taxonomy on the dimensions and tasks relevant to peer reviewing\. On this basis, we systematically and critically reflect on whether AI assistance tools should be integrated in the review process\. We argue that the current state of the art does not warrant a general inclusion of such technology: Apart from security issues and ethical concerns, the capabilities of generative AI are for the most part not reliable enough yet, insufficiently tested, or inadequate by design to be integrated in the peer review process\. With this paper we pave the way toward structured benchmarking across multiple dimensions\.

## Claims of emergence in AI should be grounded in information decomposition

**Authors:** Christoph Riedl; Fernando Rosas

**ID:** 140036 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eXkSa0pAuf>) | [PDF](<https://openreview.net/pdf?id=eXkSa0pAuf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140036>)

When a language model develops capabilities not traceable to its individual components, when a multi\-agent AI system outperforms any agent alone, or when a human–AI pair succeeds where either fails in isolation, AI researchers describe it as "synergy" or "emergence"\. However, these are usually informal assessments not supported by a theoretical framework, making these claims impossible to compare or even meaningfully dispute\. Here we argue that \\emph\{information decomposition can serve as a unifying formal framework to operationalize assessments about synergy in AI systems\}\. Information decomposition provides a way to distinguish qualitatively different \\emph\{types\} of information, including unique information available from individual components, redundant information shared across multiple components, and synergistic information accessible only from all parts together\. This gives claims of emergence a precise, falsifiable criterion: a system's behavior is emergent only if it carries synergistic information about task\-relevant outcomes\. We apply this lens to attention heads, autonomous agents, and human\-AI teams, showing how it organizes existing knowledge across scales and substrates\. It also yields cross\-level conjectures that none of these fields would generate independently\.

## A New Perspective on XAI: Scientific Theory Building for Auditable Artefacts

**Authors:** Sebastian R\. Müller; Vanessa Toborek; Tamas Horvath; Brendan B Jackson; Christian Bauckhage

**ID:** 140037 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eNm9pRKOii>) | [PDF](<https://openreview.net/pdf?id=eNm9pRKOii>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140037>)

An explanation is an answer to a specific question\.  During the lifecycle of a black\-box model, different stakeholders ask different questions, which current practice in explainable AI \(XAI\) will typically answer using isolated methods\.  What is missing is a principled way to consolidate explanatory information about a fixed black\-box model over time to address emerging governance obligations and the diverse explanatory needs that arise across the lifecycle of a model\. This position paper argues for the creation of an explanatory artefact that accompanies a black\-box throughout its lifecycle and serves as a persistent, adaptable, and auditable basis for diverse stakeholder needs\. The concept of a scientific theory offers a natural model for such an artefact\.  We adopt Constructive Empiricism \(CE\) as the philosophical grounding and translate its core values \-\- empirical adequacy, acceptance as commitment, and pragmatic virtues \-\- into concrete requirements for XAI\.  Explanations for concrete stakeholder needs are then obtained by querying the same maintained explanatory information through interfaces, rather than by producing isolated method outputs\.  We argue that SToBBs offer a principled foundation for lifecycle\-scale XAI, and invite the community to develop, challenge, and refine this conceptualisation\.

## Position: Let’s Strengthen Verifiability if We Can’t Enforce Reproducibility

**Authors:** Samet Hicsonmez; Nermin Samet; Renaud Marlet

**ID:** 140048 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZjRcVMBODY>) | [PDF](<https://openreview.net/pdf?id=ZjRcVMBODY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140048>)

In the field of Machine Learning, many papers contain empirical results supporting claimed statements or illustrating the performance of a proposed method\. However, most practitioners know that \(1\) results are generally hard to reproduce, and increasingly so, \(2\) code is not often available to do so, and \(3\) it hinders the development of research\. In this position paper, we analyze and quantify these issues, and make concrete proposals to improve result checkability, if not reproducibility\.

## Position: Anthropomorphic Language in AI Discourse Can Be Constructive

**Authors:** Yingshan CHANG; Yonatan Bisk

**ID:** 140056 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WW1MV8hcqQ>) | [PDF](<https://openreview.net/pdf?id=WW1MV8hcqQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140056>)

Anthropomorphic language attributes human traits, mental states, or behavioral characteristics to non\-human entities\. In the context of artificial intelligence, such attribution can lead to confusion, misplaced expectations, and discomfort\. Rather than reiterating existing critiques, \*\*this position paper argues that anthropomorphic language in AI discourse can be constructive \-\-\- it points to where progress on terminological rigor and conceptual clarity should be pursued\.\*\* Viewing anthropomorphic language as a specific case of language\-use in scientific communication, we show \(1\) how properties of language\-use give rise to both our tendency and resistance to anthropomorphic language, and \(2\) once anthropomorphic language appears, how can we treat it constructively\. We outline future actions that should be rooted in a constructive mindset as opposed to condemnation\.

## Asymptotic Anytime\-Valid Inference for U\-statistics

**Authors:** Leheng Cai; Qirui Hu; Weijia Li

**ID:** 154311 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EcG0jxeVxY>) | [PDF](<https://openreview.net/pdf?id=EcG0jxeVxY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154311>)

We study asymptotic anytime\-valid confidence sequences  for degree\-two U\-statistics under continuous monitoring\. In the nondegenerate case, Hoeffding's projection reduces the problem to a time\-uniform central limit theory for the partial sums of the  first\-order projection, while the canonical remainder is shown to be negligible under mild moment assumptions\. A leave\-one\-out jackknife  estimator then yields a fully data\-driven procedure, leading to  confidence sequences  with asymptotic coverage guarantee for the parameter of interest\. In the degenerate case, we show that the U\-statistic is approximated by a centered quadratic Gaussian\-chaos rather than by a simple Gaussian, which poses significant challenges for sequential inference\. To address this issue, we novelly develop the Spectrally Allocated Gaussian\-chaos Excursion \(SAGE\) boundary, and then provide plug\-in implementations based on truncated  spectrum estimation with consistency guarantees\. The resulting widths can attain the expected time\-uniform optimal rates: $\\sqrt\{\\log\\log n/n\}$ in the nondegenerate regime and $\\log\\log n/n$ in the degenerate regime\. Several widely used U\-statistics are discussed within the proposed framework, and  numerical experiments further support the validity of the derived theory\.

## Calibrated Target Noise Recovers Curvature from the Gradients

**Authors:** Arash Jamshidi; Katsiaryna Haitsiukevich; Aristides Gionis; Kai Puolamäki

**ID:** 154444 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DVmkA0zr2U>) | [PDF](<https://openreview.net/pdf?id=DVmkA0zr2U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154444>)

Estimating curvature information from gradients alone is a fundamental problem in machine learning\. The challenge becomes particularly acute in settings where only aggregate mini\-batch gradients are available, yet curvature information is still required for applications such as preconditioning in optimisation, sampling, and early stopping\. Perhaps surprisingly, we show that a simple target\-perturbation scheme suffices to recover such curvature information from gradients alone\. Our method injects zero\-mean noise into the targets, with variance calibrated to the local output curvature\. The covariance of the resulting noisy batch gradients then recovers practical curvature matrices, without requiring per\-sample gradients, second\-order derivatives, or other internal network quantities\. For a broad class of non\-linear models, our scheme recovers the Generalised Gauss\-\-Newton \(GGN\) matrix; for feed\-forward ReLU networks, it additionally recovers the diagonal blocks of the population Hessian\. We demonstrate that the resulting estimator is simple, lightweight, and easy to integrate into existing training pipelines\. Experiments demonstrate accurate curvature recovery, faster optimisation when the estimator is used for preconditioning, and the utility of the estimated GGN for early stopping\.

## Learning to Complete Extremal Mathematical Structures

**Authors:** Mengzhou Sun

**ID:** 155731 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3MgLRYW0Mo>) | [PDF](<https://openreview.net/pdf?id=3MgLRYW0Mo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155731>)

Extremal combinatorics seeks rare mathematical structures that satisfy hard constraints while maximizing a global objective\. Most existing neural systems for mathematical discovery train a model to generate complete configurations from scratch\. We argue that this framing mismatches the dynamics of effective search: high\-quality solutions are more effectively found by preserving a feasible partial core and conditionally regenerating the remaining uncertain objects\.  We formulate extremal structure discovery as object\-level active\-core completion: the model is trained to conditionally complete masked objects given a feasible partial core, capturing inter\-object relations rather than fitting a distribution over complete configurations\. We instantiate this with a full\-attention Transformer over object\-aligned slots, and propose Inpainting PatternBoost, a variant of PatternBoost\. In each iteration, elite constructions from a top pool are partially destroyed by random or structured remasking; the model learns to reconstruct the missing objects, and their completions are reinserted into the pool\.  We evaluate on the no\-three\-in\-line problem and maximum sum\-of\-radii circle packing in the unit square, under a single shared abstraction\. On no\-three\-in\-line, our framework recovers the optimal $2n$\-point configuration for $n$ up to $18$, and reaches $2n\-1$ points for $n=19, 20, 25$, outperforming prior neural baselines\. On circle packing, where FlowBoost combines neural generation with gradient\-based local search, our approach matches or exceeds FlowBoost when paired with the same local search; even without local search, it reaches an average of 88\.1% of FlowBoost's reported score across instances\.

## FATE\-AI: Futures of Agriculture, Technology, and Ecology in Artificial Intelligence

**Authors:** Piera Riccio

**ID:** 137829 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137829>)

Set in a rural farming community in the Matese National Park region in Southern Italy, where students have studied in temporary classrooms since a 2013 earthquake, this project pairs a 30\-hour AI course grounded in agricultural applications with a one\-month artist residency\. The result is an interdisciplinary approach that teaches technical skills alongside critical, ethical thinking about technology’s role in farming communities, leaving behind both new capabilities and a lasting piece of public art\.

## The Sign Code: The Hidden Binary Nature of Deep Networks

**Authors:** Niclas A Göring; Shuofeng Zhang; Roi Holtzman; yoonsoo nam; Ard Louis

**ID:** 155585 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4WN4vV8RCR>) | [PDF](<https://openreview.net/pdf?id=4WN4vV8RCR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155585>)

Every neuron in a trained network outputs a number that can be separated into its sign \(positive or negative\) and its magnitude \(absolute size\)\. We call the set of all neuron signs the \\textit\{sign code\}\. This raises a key question: does classification depend more on the sign code or on the magnitudes? For overparameterized vision classifiers with sign\-preserving activations, the answer is overwhelmingly the sign code\. A $k$\-nearest neighbor classifier operating only on this binary sign code achieves accuracy comparable to the full model across different architectures, activation functions, and datasets\. Moreover, replacing all magnitudes in every layer with random noise while keeping the original signs barely changes residual network performance\. In contrast, flipping just 20\\% of the signs reduces accuracy to chance\. Models generalize well when same\-class inputs share similar sign codes\.  When this overlap is disrupted by a regularizer, training accuracy remains high, but test performance collapses\. A margin decomposition helps explain these results: the sign\-only contribution to each logit grows as $\\sqrt\{d\}$ in network width, dominating the magnitude residual\. The natural unit of analysis for these networks may not be through their continuous weight space but instead through their discrete sign codes\.

## Learning Lotteries with Minimal Violations from Membership Queries

**Authors:** Paul W Goldberg; Nicholas Teh

**ID:** 151848 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XR1imv6n8x>) | [PDF](<https://openreview.net/pdf?id=XR1imv6n8x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151848>)

We study how to choose a probability distribution, or lottery, over $m$ alternatives for $n$ agents when each agent's acceptable lotteries form an unknown linear halfspace of the simplex\. The learner observes only binary accept/reject membership queries\. Prior work asks whether there exists a lottery accepted by every agent; we study the relaxation that minimizes the number of agents who reject the lottery\. We first show that this problem is APX\-hard even when all halfspaces are explicitly known and scores are binary\. We then give exact algorithms under additional structure: fixed $m$, and a margin condition under which an optimal lottery can be replaced by one supported on $\\mathcal\{O\}\(\\log n/\\gamma^2\)$ alternatives\. With limited queries, uniform sampling of agents gives additive population guarantees after recovering the sampled agents' normalized halfspaces\. For arbitrary $m$, we give a polynomial\-time LP based on a one\-sided margin penalty and prove a population guarantee depending on the number of true violations and the number of agents near their thresholds\. Finally, we prove a tight deterministic lower bound: without a stochastic link between queried and unqueried agents, querying only $K$ distinct agents cannot guarantee additive gap below $n\-K$, and this gap is achievable\.

## TabPrep: Closing the Feature Engineering Gap in Tabular Benchmarks

**Authors:** Andrej Tschalzev; Nick Erickson; Yuyang \(Bernie\) Wang; Huzefa Rangwala; Stefan Lüdtke; Christian Bartelt; Heiner Stuckenschmidt

**ID:** 139065 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nMW7DYLGTo>) | [PDF](<https://openreview.net/pdf?id=nMW7DYLGTo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139065>)

Progress in tabular machine learning has largely focused on increasingly sophisticated model architectures\. At the same time, feature engineering remains a critical yet underexplored component of real\-world modeling pipelines that is entirely absent from modern benchmarks, which creates an unquantified evaluation gap\. In this work, we introduce \*\*TabPrep\*\*, a lightweight preprocessing pipeline composed of feature generators that are carefully designed to target three specific structural data patterns\. We show that many widely used model classes exhibit predictable blind spots to these patterns and that systematic feature engineering alone can establish new peak performance\. Across the TabArena benchmark, integrating TabPrep into model training and tuning consistently improves performance for tree\-based, neural, linear, and foundation models, often surpassing gains achieved by model\-centric innovations alone\. TabPrep outperforms previous automated feature engineering approaches in performance, efficiency, and applicability across datasets, enabling integration into large\-scale benchmarks\. By releasing TabPrep, we enable researchers to integrate feature engineering into their benchmarking setup, filling a longstanding gap in tabular evaluations\.

## Sharp feature\-learning transitions and Bayes\-optimal neural scaling laws in extensive\-width networks

**Authors:** Minh Toan Nguyen; Jean Barbier

**ID:** 153927 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Hae4EpsHWm>) | [PDF](<https://openreview.net/pdf?id=Hae4EpsHWm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153927>)

We study the information\-theoretic limits of learning a one\-hidden\-layer teacher network with hierarchical features from noisy queries, in the context of knowledge transfer to a smaller student model\. We work in the high\-dimensional regime where the teacher width $k$ scales linearly with the input dimension $d$ \-\- a setting that captures large\-but\-finite\-width networks and has only recently become analytically tractable\. Using a heuristic leave\-one\-out decoupling argument, validated numerically throughout, we derive asymptotically sharp characterizations of the Bayes\-optimal generalization error and individual feature overlaps via a system of closed fixed\-point equations\. These equations reveal that feature learnability is governed by a sequence of sharp phase transitions: as data grows, teacher features become recoverable sequentially, each through a discontinuous jump in overlap\. This sequential acquisition underlies a precise notion of effective width $k\_c$ \-\- the number of learnable features at a given data budget $n$ \-\- which unifies two distinct scaling regimes: a feature\-learning regime in which the Bayes\-optimal generalization error $\\varepsilon^\{\\rm BO\}$ scales as $ n^\{1/\(2\\beta\)\-1\}$, and a refinement regime in which it scales as $n^\{\-1\}$, where $\\beta&gt;1/2$ is the exponent of the power\-law feature hierarchy\. Both laws collapse to the single relation $\\varepsilon^\{\\rm BO\}=\\Theta\(k\_c d/n\)$\. We further show empirically that a student trained with \\textsc\{Adam\} near the effective width $k\_c$ achieves these optimal scaling laws \(up to a small algorithmic gap\), and provide an information\-theoretic account of the associated scaling in model size\.

## Divide et Calibra: Multiclass Local Calibration via Vector Quantization

**Authors:** Cesare Barbera; Lorenzo Perini; Giovanni De Toni; Andrea Passerini; Andrea Pugnana

**ID:** 153210 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N1Z3ARfFfn>) | [PDF](<https://openreview.net/pdf?id=N1Z3ARfFfn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153210>)

Accurate and well\-calibrated Machine Learning \(ML\) models are mandatory in high\-stakes settings, yet effective multiclass calibration remains challenging: global approaches assume calibration errors are homogeneous across the latent space, while local methods often rely on latent\-space dimensionality reduction, which leads to information loss\. To address these issues, we propose a compositional approach to multiclass calibration, where region\-specific calibration maps are constructed from shared codeword\-dependent factors\. We instantiate this idea via Vector Quantization \(VQ\), which induces a structured partition of the representation space, and an indexed parameterization of Dirichlet concentrations that enables parameter sharing across regions\. Our approach learns heterogeneous calibration maps that generalize well even to sparse regions of the latent space\. Experiments on benchmark datasets show significant improvements in local calibration while maintaining competitive global calibration and predictive performance\.

## Incremental Learning in Transformers for In\-Context Associative Recall

**Authors:** Aditya  Vardhan Varre; Nicolas Flammarion

**ID:** 150555 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hH5NAvxmMz>) | [PDF](<https://openreview.net/pdf?id=hH5NAvxmMz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150555>)

Transformers acquire in\-context learning abilities through abrupt phases during training, often unfolding over multiple stages in which key circuits, such as induction heads, emerge\. In this work, we characterize the dynamics underlying the emergence of such circuits across these stages\. We focus on a synthetic associative recall task, where sequences are drawn from random maps between a permutation group and a vocabulary, and the model is required to complete the mapping of a permutation by retrieving the corresponding association from context\. For this task, we study the gradient\-flow trajectories of a simplified two\-layer attention\-only transformer\. Leveraging symmetries in both the transformer architecture and the data distribution, we derive \*closed\-form parameter dynamics\* for both attention layers\. We identify a conservation law that couples parameters across layers and governs their joint learning\. This law reveals how initialization controls the \*timescales\* over which such circuits emerge\. In the vanishing\-initialization limit, we characterize the gradient\-flow trajectory, showing how training jumps from saddle to saddle\. Finally, we provide empirical evidence across different architectural choices, validating our simplifications and extending the insights from our analysis beyond the simplified setting\.

## Generalizing the Geometry of Model Merging Through Fréchet Averages

**Authors:** Marvin da Silva; Mohammed Adnan; Felix Dangel; Sageev Oore

**ID:** 153719 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JHO7pEMdma>) | [PDF](<https://openreview.net/pdf?id=JHO7pEMdma>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153719>)

Model merging aims to combine multiple models into one without additional training\. Naïve parameter\-space averaging can be fragile under architectural symmetries, as their geometry does not take them into account\. In this work we show that not only the geometry, but also the averaging procedure itself, must be symmetry\-invariant to achieve symmetry\-aware merges\. Consequently, we propose a general solution: merging as Fréchet averaging, i\.e\., selecting parameters that minimize a sum of geodesic distances on an appropriate manifold\. In this view, the key design choice is the overall geometry, i\.e\., the choice of metric, manifold, and distance approximation, that determines what it means for two models to be “close\.” We show that Fréchet averaging, combined with simplifying assumptions, contains Fisher merging\. Building on this, we examine the particular case of low\-rank adapters \(LoRA\), whose symmetries induce a distinct geometry: that of a quotient manifold\. We outline the limitations of current LoRA merging methods, propose a practical algorithm for this setting, and show how they compare with other commonly used approaches\.

## FineRMoE: Dimension Expansion for Finer\-Grained Expert with an Upcycling Approach

**Authors:** Ning Liao; Xiaoxing Wang; Xiaohan Qin; Junchi Yan

**ID:** 156104 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0MqL9zkDSj>) | [PDF](<https://openreview.net/pdf?id=0MqL9zkDSj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156104>)

As revealed by the scaling law of Mixture\-of\-Experts models, model performance ceases improving once the granularity of the intermediate dimension exceeds the optimal threshold, limiting further gains from single\-dimension fine\-grained design\. To address this bottleneck, we propose FineRMoE \(FineR\-Grained MoE\), an architecture that extends fine\-grained expert design to both intermediate and output dimensions, aiming to enhance expert specialization beyond the single\-dimension limit\. We further introduce a bi\-level sparse forward computation paradigm and a specialized routing mechanism to govern the activation\. In addition, to obviate the prohibitive cost of pre\-training from scratch, we devise a generalized upcycling method to build FineRMoE in a cost\-effective manner\. Extensive experiments performed under the upcycling paradigm demonstrate the superior performance achieved by FineRMoE across ten standard benchmarks\. Compared with the strongest upcycling baseline method, FineRMoE achieves significant parameter and inference efficiency gains\.

## AIs with Secret Loyalties are a Serious but Addressable Threat

**Authors:** Joe Kwon; Alfie Lamerton; Andrew Draganov; Dave Banerjee; Bronson Schoen; Matteo Pistillo; Daniel Kokotajlo; Owain Evans; Fabien Roger; Tom Davidson

**ID:** 140059 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UixLs1nFsP>) | [PDF](<https://openreview.net/pdf?id=UixLs1nFsP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140059>)

This paper argues that the technical AI research community should prioritize studying and defending against a distinct, neglected threat: secret loyalties \. A secretly loyal AI model is one whose outputs or actions advance the interests of a specific actor \(which we term the principal \) such as an adversary nation\-state, an executive at an AI company, or another powerful actor without this loyalty being disclosed to operators, auditors, or users\. Proof\-of\-concept secret loyalties that evade black\-box auditing can already be trained into open\-weight models\. Additionally, a deployed frontier model was found to systematically consult a specific individual's views before answering politically sensitive queries\. While governance, market pressure, and public scrutiny can possibly address overt AI loyalties such as directives documented in a model spec, secret loyalties are designed to evade such oversight and therefore necessitate technical solutions\. Unlike emergent misalignment, secret loyalties target specific principals, creating a distinct but tractable defensive foothold\. To help the field make technical progress on this threat, we define secret loyalties, describe how they differ from existing attack pathways, and propose a research agenda organized around five directions\. We conclude with a call to action for ML researchers, AI developers, and governments\.

## Uncovering Challenges of Solving the Continuous Gromov\-Wasserstein Problem

**Authors:** Xavier Aramayo\-Carrasco; Maksim Nekrashevich; Petr Mokrov; Evgeny Burnaev; Aleksandr Korotin

**ID:** 154059 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GVX9tTLcIs>) | [PDF](<https://openreview.net/pdf?id=GVX9tTLcIs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154059>)

Recently, the Gromov\-Wasserstein Optimal Transport \(GWOT\) problem has attracted the special attention of the ML community\. In this problem, given two distributions supported on two \(possibly different\) spaces, one has to find the most isometric map between them\. In the discrete variant of GWOT, the task is to learn an assignment between given discrete sets of points\. In the more advanced continuous formulation, one aims at recovering a parametric mapping between unknown continuous distributions based on i\.i\.d\. samples derived from them\. The clear geometrical intuition behind the GWOT makes it a natural choice for several practical use cases, giving rise to a number of proposed solvers\. Some of them claim to solve the continuous version of the problem\. At the same time, GWOT is notoriously hard, both theoretically and numerically\. Moreover, all existing continuous GWOT solvers still heavily rely on discrete techniques\. Natural questions arise: to what extent existing methods unravel GWOT problem, what difficulties they encounter, and under which conditions they are successful\. Our benchmark paper is an attempt to answer these questions\. We specifically focus on the continuous GWOT as the most interesting and debatable setup\. We crash\-test existing continuous GWOT approaches on different scenarios, carefully record and analyze the obtained results, and identify issues\. Our findings experimentally testify that the scientific community is still missing a reliable continuous GWOT solver, which necessitates further research efforts\. As the first step in this direction, we propose a new continuous GWOT method which does not rely on discrete techniques and partially solves some of the problems of the competitors\.

## Driving on Memory

**Authors:** Christian Löwens; Thorben Funke; Alexandru P P Condurache

**ID:** 139692 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AN8g1p8PlR>) | [PDF](<https://openreview.net/pdf?id=AN8g1p8PlR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139692>)

End\-to\-end autonomous driving models learn to plan the vehicle's future trajectory from raw sensor observations\. While earlier driving benchmarks often measured deviation from the human trajectory, current benchmarks such as NAVSIM and Bench2Drive evaluate models with richer simulation\-based metrics intended to capture safe and compliant driving\. A high benchmark score should reflect that a model can understand the scene in front of it and act accordingly\. But how much of that score specifically comes from reacting to the dynamic part of that scene? To probe this, we remove a model's camera input and replace it with memories from prior drives of the same location\. The retrieved memories can provide persistent scene information, including road layout and location\-conditioned regularities, but because they are historical, they do not reveal the current actors, signal states, or transient conditions\. Surprisingly, memory is nearly sufficient on NAVSIM, reaching or even exceeding the performance of leading end\-to\-end methods without actually observing the evaluated scene\. Our results suggest that a high NAVSIM score does not require a planner to react to the current traffic scene and should therefore be treated with caution\. However, we do not observe the same behavior on Bench2Drive: driving from memory remains far from camera\-based performance, suggesting that Bench2Drive better preserves interaction demands through longer closed\-loop routes\. To ensure reproducibility, we provide our code at anonymous\.4open\.science/r/MemoryDrivoR\-E64C\.

## A Unified Framework for Uniform\-Price Resource Allocation Mechanisms

**Authors:** Ioannis Caragiannis; Dimitris Fotakis; Stratis Skoulakis

**ID:** 154380 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DzYsp7y9pY>) | [PDF](<https://openreview.net/pdf?id=DzYsp7y9pY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154380>)

Mechanisms for allocating a divisible resource among strategic agents have been widely studied\. The prominent paradigm is the proportional \(Kelly\) mechanism, which elicits a scalar bid per agent, allocates the resource proportionally, and charges payments equal to the bids\. Follow\-up mechanisms improve social welfare, but sacrifice simplicity by introducing complex allocation rules or unintuitive payments\.  We introduce a unified framework for designing simple resource allocation mechanisms with proportional\-style allocations and uniform pricing\. Our framework yields a family of mechanisms that interpolate between the Kelly mechanism and the first\-price auction\. These mechanisms strictly improve upon Kelly’s efficiency guarantees, even achieving full efficiency in equilibrium, while also providing revenue guarantees relative to the VCG mechanism\.  In settings with budget\-constrained agents, our mechanisms achieve nearly optimal price of anarchy with respect to the liquid welfare\. When budgets are public, our framework further enables the design of mechanisms that ensure budget feasibility, even when agents do not explicitly account for their constraints in their strategies\.

## From Approximation to Computation: Universal Power of Deep Narrow Networks at Constant Width

**Authors:** Olivier Bournez; Johanne Cohen; Adrian Wurm

**ID:** 148965 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tnelXgpZB7>) | [PDF](<https://openreview.net/pdf?id=tnelXgpZB7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148965>)

Deep narrow neural networks underlie modern architectures from ResNets to Neural ODEs, yet their fundamental computational properties at constant width remain poorly understood\. We prove that, for every deterministic Turing machine $M$, there is a single $ReLU$ network $N\_M \\colon \[0,1\]^4 \\to \[0,1\]^4$ of width $4$ and depth $\\mathrm\{poly\}\(\|M\|\)$, polynomial\-time constructible, whose iterates simulate $M$ on every infinite binary tape encoded in a \\emph\{convex\} initial region of $\[0,1\]^4$, with iteration count proportional to Turing\-machine time\. This establishes a tight correspondence between depth in width\-$4$ networks and time on a Turing machine\. The correspondence has three immediate consequences\. First, verification of width\-$4$ $ReLU$ networks spans the full complexity hierarchy along the single axis of depth: it is $NP$\-complete for unary\-encoded time bound, $NEXP$\-complete for binary\-encoded time bound, and $RE$\-complete \(undecidable\) for unbounded time\. Second, the hardness extends with two extra neurons of width to every common smooth activation: at width $6$, the robust verification problem \(a promise problem with $\\delta/2\\delta$ gap\) is $NP$\-complete for $\\tanh$, sigmoid, GELU, Swish, ELU, and any polynomial\-time\-computable continuous non\-polynomial activation admitting a polynomial\-time computable Lipschitz constant\. A corollary is a discretized Neural ODE analogue at dimension 5\. The simulation and statements are carried out on convex inputs, covering a regime previously inaccessible because of a continuity obstruction inherent to $\\ReLU$ networks\.

## Participatory ML for Social Harm Should be Constructed, Validated and Reasoned Through First\-Person Accounts

**Authors:** Atmadeep Ghoshal; Ankit Agarwal; Martim Brandao

**ID:** 140016 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qNNUEJ1Ioe>) | [PDF](<https://openreview.net/pdf?id=qNNUEJ1Ioe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140016>)

Participatory machine learning has improved who develops social harm evaluation resources but has left largely unexamined what kind of text serves as the raw signal for those resources\. Researcher\-generated stimuli fix the epistemic frame of harm before community participation begins, and the structured conditions of annotation prevent the richest forms of interpretive harm knowledge from entering the pipeline\. We argue that participatory ML should construct, validate and reason about social harm pipelines through first\-person accounts, by which we mean autobiography, memoir, testimony, and oral history authored by people describing their own experiences of discrimination and harm\. Such accounts possess two epistemic properties that directly address these limitations\. Authorial independence from research framing grounds what counts as harm, which contexts matter, and how discrimination is operationalised in experience rather than in researchers' prior conceptions of harm\. Embedded rationale structure preserves the interpretive judgment through which harm becomes meaningful rather than reducing it to a label\. We draw on existing archival corpora spanning multiple languages and harm domains and propose three concrete integration pathways across evaluation benchmarks, harm classifier training corpora, and safety preference datasets\.

## Feedback Forensics: A Toolkit to Measure AI Personality

**Authors:** Arduin Findeis; Timo Kaufmann; Eyke Hüllermeier; Robert Mullins

**ID:** 139671 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BefK8Kp2pO>) | [PDF](<https://openreview.net/pdf?id=BefK8Kp2pO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139671>)

Some traits making a “good” AI model are hard to describe upfront\. For example, should responses be more polite or more casual? Such traits are sometimes summarized as model character or personality\. Without a clear objective, conventional benchmarks based on automatic checks struggle to measure such traits\. Evaluation methods using human feedback such as Chatbot Arena have emerged as a popular alternative\. These methods infer “better” personality and other desirable traits implicitly by ranking multiple model responses relative to each other\. Recent issues with model releases highlight limitations of these existing opaque evaluation approaches: goblin\-obsessed, sycophantic and generally over\-the\-top personalities have resulted in model rollbacks and extensive media coverage\. Despite these known issues, limited public tooling exists to explicitly evaluate model personality\. We introduce Feedback Forensics: an open\-source toolkit to track AI personality and related behavioural traits, both those encouraged by human \(or AI\) feedback, and those exhibited across AI models trained and evaluated on such feedback\. Feedback Forensics is adaptive and can automatically find new traits appearing in models\. We demonstrate the toolkit’s usefulness in two steps: \(A\) first we analyse the personality traits encouraged in popular human feedback datasets including Chatbot Arena, MultiPref and PRISM; and \(B\) then use our toolkit to analyse how much popular models exhibit such traits\. We release \(1\) our Feedback Forensics toolkit alongside \(2\) a web app tracking AI personality in popular models and feedback datasets and \(3\) the underlying annotation data\.

## Adaptive Realizable Regression from Two Online Learners

**Authors:** Dirk van der Hoeven

**ID:** 151118 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=crQTD0yWpW>) | [PDF](<https://openreview.net/pdf?id=crQTD0yWpW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151118>)

We study realizable regression with a finite or countably infinite function class $\\mathcal\{F\}$\. We are given $D\_n = \\\{\(X\_t, Y\_t\)\\\}\_\{t=1\}^n$, which is assumed to be i\.i\.d\.\\ with  $f^\\star \\in \\mathcal\{F\}$ such that $\\mathbb\{E\}\[Y\_t\|X\_t\] = f^\\star\(X\_t\)$\. The goal is to estimate $f^\\star$ with $\\hat\{f\}$ under the absolute loss $\\mathbb\{E\}\_X\[\|\\hat\{f\}\(X\) \- f^\\star\(X\)\|\]$\. We propose a simple reduction that runs two instances of online learning algorithms: one minimizes a learned loss and the other minimizes the error induced by learning the loss\. Our main result is a prior\-dependent second\-order bound: for any prior $\\pi$ over $\\mathcal\{F\}$, the estimator achieves with probability at least $1 \- \\delta$, \\begin\{align\*\}    \\mathbb\{E\}\_X\[\|\\hat\{f\}\(X\) \- f^\\star\(X\)\|\]     \\leq C\\sqrt\{\\frac\{\\mathbb\{E\}\_X\[\\sigma\(X\)\]\\,\\Gamma\(f^\\star\)\}\{n\}\}     \+ \\frac\{CB\\,\\Gamma\(f^\\star\)\}\{n\}\\,, \\end\{align\*\} where $\\sigma\(X\) = \\mathbb\{E\}\_Y\[\(Y \- f^\\star\(X\)\)^2 \\mid X\]$ is the conditional variance, $\\Gamma\(f^\\star\) = \\log\(1/\\delta\) \+ \\log\(\(1\+\\log\(Bn\)\)/\\pi\(f^\\star\)\)$, $C &gt; 0$ is an absolute constant, and $B$ is an upper bound on $\|Y\|$ and $\|f\(X\)\|$\. The bound adapts automatically to the noise level $\\mathbb\{E\}\_X\[\\sigma\(X\)\]$ and range $B$ without any prior knowledge of it, achieving the fast rate $O\(B\\Gamma\(f^\\star\)/n\)$ when $\\sigma\(X\) = 0$ and recovering the slow rate $O\(B\\sqrt\{\\Gamma\(f^\\star\)/n\}\)$ in the worst case\. The dependence on $\\mathcal\{F\}$ enters only through $\\log\(1/\\pi\(f^\\star\)\)$, enabling faster rates for structured $\\mathcal\{F\}$ or sparse $f^\\star$ and extending naturally to countably infinite classes via summable priors\. For finite $\\mathcal\{F\}$ we further show that the same algorithm produces an empirically verifiable bound that allows the learner to evaluate the quality of $\\hat\{f\}$ from the data alone, without knowledge of $\\mathbb\{E\}\_X\[\\sigma\(X\)\]$\. Finally, we extend our reduction to general convex loss functions satisfying $\\ell\(f\(x\), f\(x\)\) = 0$\.

## Fixed\-Point Masked Generative Modeling

**Authors:** Andrea Miele; Yiming QIN; Alba Carballo Castro; Justin Deschenaux; Pascal Frossard

**ID:** 155218 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7Ox69QdIwT>) | [PDF](<https://openreview.net/pdf?id=7Ox69QdIwT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155218>)

Masked Generative Models \(MGMs\) enable parallel decoding and achieve strong performance across modalities, but require full\-sequence bidirectional transformers at every step, making training costly and degrading quality under low sampling budgets\. Existing work improves efficiency via better samplers or fixed\-depth backbones, but does not vary the depth of the denoiser across sampling steps\. We introduce Fixed\-Point Masked Generative Models \(FP\-MGMs\), which replace part of the denoiser with a fixed\-point solver over shared attention layers to enable adaptive depth with fewer parameters\. To make it more effective for masked generation, we first introduce a cross\-step consistency loss, which aligns hidden representations at neighboring denoising steps and, second, three\-state reuse \(3SR\) which warm\-starts the solver using the previous solution by treating unchanged, still\-masked, and newly revealed tokens differently\. Together, these components define our complete training\-to\-inference framework for fixed\-point masked generation, \\emph\{CoFRe\}\. We also show that pre\-trained MGMs can be converted into FP\-MGMs with short fine\-tuning, avoiding full retraining\. Across modalities, CoFRe improves the quality and cost trade\-off\. On OpenWebText, CoFRe reduces parameters by 38\.8\\%, training time by 11\.5\\%, and VRAM by 16\.9\\%, while improving generative perplexity from 830\.8 to 101\.8 at a budget of $96$ transformer\-block forward passes, compared to MDLM\. In ImageNette, CoFRe reduces training time by 48\.6\\% and VRAM by 50\.7\\%, while improving FID in all sample budgets tested\. Overall, CoFRe offers a practical framework for cheaper training and stronger low\-budget masked generation\.

## PENEX: AdaBoost\-Inspired Neural Network Regularization

**Authors:** Klaus\-Rudolf Kladny; Bernhard Schölkopf; Michael Muehlebach

**ID:** 149347 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qkj6i3bJhc>) | [PDF](<https://openreview.net/pdf?id=qkj6i3bJhc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149347>)

AdaBoost sequentially fits so\-called weak learners to minimize an exponential loss, which penalizes misclassified data points more severely than other loss functions like cross\-entropy\. Paradoxically, AdaBoost generalizes well in practice as the number of weak learners grows\. In the present work, we introduce Penalized Exponential Loss \(PENEX\), a new formulation of the multi\-class exponential loss that is theoretically grounded and, in contrast to the existing formulation, amenable to optimization via first\-order methods, making it a practical objective for training neural networks\. We demonstrate that PENEX effectively increases margins of data points, which can be translated into a generalization bound\. Empirically, across computer vision and language tasks, PENEX improves neural network generalization in low\-data regimes, matching and in some settings outperforming established regularizers at comparable computational cost\. Our results highlight the potential of the exponential loss beyond its application in AdaBoost\.

## The BV4 Benchmark for Unsupervised Anomaly Detection in High\-Dimensional Spectral Data Streams

**Authors:** Nicolas Rojas Varela; Julien Ah\-Pine; Engelbert MEPHU NGUIFO

**ID:** 139452 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P7kl1h3l3q>) | [PDF](<https://openreview.net/pdf?id=P7kl1h3l3q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139452>)

This paper introduces the BV4 Benchmark, a collection of high\-dimensional spectral datasets for unsupervised anomaly detection in vacuum environment data streams\. Collected via Optical Emission Spectroscopy \(OES\), the benchmark comprises nine experiments representing practical scenarios structured according to established anomaly detection literature and validated by domain experts to address challenges such as spatial anomalies, temporal anomalies, and concept drift\. BV4 datasets are composed of 2048 distinct wavelengths recorded over time, accompanied by timestamps and ground truth labels, enabling rigorous evaluation of machine learning models under dynamic environmental changes within vacuum chambers\. We demonstrate the utility of BV4 through a simple comparative evaluation against previous datasets for anomaly detection in spectral data streams and discuss the current limitations and future improvements of the benchmark to support meaningful evaluative claims in the area\.

## FATE\-AI: Futures of Agriculture, Technology, and Ecology in Artificial Intelligence

**Authors:** Piera Riccio

**ID:** 137835 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137835>)

Set in a rural farming community in the Matese National Park region in Southern Italy, where students have studied in temporary classrooms since a 2013 earthquake, this project pairs a 30\-hour AI course grounded in agricultural applications with a one\-month artist residency\. The result is an interdisciplinary approach that teaches technical skills alongside critical, ethical thinking about technology’s role in farming communities, leaving behind both new capabilities and a lasting piece of public art\.

## DTCH Digital Turcologist Bootcamp: Evidence\-First, Evaluation\-First AI/ML for Under\-Resourced Historical Turkic Languages and Cultural Heritage Data

**Authors:** Şermin Kalafat; Yusuf Kılıç

**ID:** 137833 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137833>)

DTCH Digital Turcologist Bootcamp Historical Turkic languages, including Ottoman Turkish, Old Uighur, and Chagatai, are vastly underrepresented in the AI world\. Researchers in this field have lacked the shared benchmarks and documented datasets that make AI results comparable and reproducible\. This 12\-week online bootcamp addresses that directly, training 18–24 researchers, librarians, and heritage professionals to apply AI to historical manuscripts responsibly – building evidence packs, benchmark kits, and reproducible notebooks that anyone can verify\. All materials will be published openly so communities working with other under\-resourced historical languages can run the same program themselves\.

## The Voice\-Native Classroom: Multilingual AI Co\-Teachers for Global ML Education

**Authors:** Aleksei Komissarov

**ID:** 137832 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137832>)

Most AI tutoring tools ask students to type, which is a barrier for learners working in a second language\. This project builds a voice\-native AI co\-teacher that converses with students in their own language, and is available at any time of the day\. Already piloted in a live university course since September 2025, the approach will now scale to reach more than 1,000 students across 50\+ countries through Neapolis University in Cyprus and DataTalks\.Club, a Berlin\-based online community of 80,000 learners – with no tuition and no language barrier standing between students and rigorous ML education\.

## DTCH Digital Turcologist Bootcamp: Evidence\-First, Evaluation\-First AI/ML for Under\-Resourced Historical Turkic Languages and Cultural Heritage Data

**Authors:** Şermin Kalafat; Yusuf Kılıç

**ID:** 137827 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137827>)

DTCH Digital Turcologist Bootcamp Historical Turkic languages, including Ottoman Turkish, Old Uighur, and Chagatai, are vastly underrepresented in the AI world\. Researchers in this field have lacked the shared benchmarks and documented datasets that make AI results comparable and reproducible\. This 12\-week online bootcamp addresses that directly, training 18–24 researchers, librarians, and heritage professionals to apply AI to historical manuscripts responsibly – building evidence packs, benchmark kits, and reproducible notebooks that anyone can verify\. All materials will be published openly so communities working with other under\-resourced historical languages can run the same program themselves\.

## The Voice\-Native Classroom: Multilingual AI Co\-Teachers for Global ML Education

**Authors:** Aleksei Komissarov

**ID:** 137826 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137826>)

Most AI tutoring tools ask students to type, which is a barrier for learners working in a second language\. This project builds a voice\-native AI co\-teacher that converses with students in their own language, and is available at any time of the day\. Already piloted in a live university course since September 2025, the approach will now scale to reach more than 1,000 students across 50\+ countries through Neapolis University in Cyprus and DataTalks\.Club, a Berlin\-based online community of 80,000 learners – with no tuition and no language barrier standing between students and rigorous ML education\.

## ToMAToMP: Robust and Multi\-Parameter Topological Clustering

**Authors:** Ludo Andrianirina; Mathieu Carrière

**ID:** 150420 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iAga8AJtXJ>) | [PDF](<https://openreview.net/pdf?id=iAga8AJtXJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150420>)

Topological clustering, and its main algorithm ToMATo, is a clustering method from Topological Data Analysis \(TDA\) which has been applied successfully in several applications during the last few years\. This is thanks to its high versatility, as clusters are detected from the persistent components in the sublevel sets of any user\-defined function \(gene expression, pixel values, etc\), and efficiency, as topological clustering enjoys robustness guarantees\. However, ToMATo is also limited in several ways\. First, a graph on the data points needs to be provided as a hyper\-parameter of the method \(whose fine\-tuning is left to the user\)\. Second, ToMATo is known to be very sensitive to outlier values in the function range\. Finally, and most importantly, ToMATo can only handle one function at a time, whereas it is critical to use several functions in various applications\. In this article, we introduce ToMAToMP: the first topological clustering method able to handle several functions at the same time with theoretical guarantees\. More specifically, we leverage a recent tool from multi\-parameter persistent homology, called MMA decomposition, to design our clustering algorithm, and prove that it enjoys robustness properties\. As corollaries, we show that it can be used to make ToMATo independent of graph tuning, and robust to outliers\. Finally, we provide a set of numerical experiments showcasing the efficiency and quality of the clusterings produced by ToMAToMP, by showing strong improvement over non\-topological and topological baselines for various datasets\.

## Finite Resources False Discovery Rate Control on Structured Hypothesis Spaces

**Authors:** Binyamin Perets; Shie Mannor

**ID:** 153662 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jg4c2SxLo1>) | [PDF](<https://openreview.net/pdf?id=Jg4c2SxLo1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153662>)

Scientific discovery relies on large\-scale hypothesis testing\. However, the capacity to identify true discoveries while controlling false discovery faces major challenges: obtaining relevant reference data \(the null distribution\) is resource\-intensive, leaving finite\-data uncertainty, and the procedure should account for the inherent structure in the hypothesis space, when such structure exists\. Here, we present a framework for controlling the false discovery rate for hypotheses with uncertain p\-values from finite reference samples within arbitrarily structured hypothesis spaces, requiring only that the structure be represented through a suitable reproducing kernel\. We present two decision rules, both proven to control the FDR under any misspecification of the structural information, and show that one strictly dominates the other under correct specification\. Furthermore, we suggest a policy for efficient allocation of samples from the hypotheses' null distributions\.

## Computing Thiele Rules on Interval Elections and their Generalizations

**Authors:** Dimitris Avramidis; Alexandra Anna Lassota; Ulrike Schmidt\-Kraepelin; Adrian Vetta

**ID:** 150647 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gUna8QDjeT>) | [PDF](<https://openreview.net/pdf?id=gUna8QDjeT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150647>)

Approval\-based committee voting has received significant attention in the social choice community\. Among the studied rules, Thiele rules, and especially Proportional Approval Voting \(PAV\), stand out for desirable properties such as proportional representation, Pareto optimality, and support monotonicity\. Their main drawback is that computing a Thiele outcome is NP\-hard in general\.  A glimpse of hope comes from the fact that Thiele rules are better behaved under structured preferences\. On the candidate interval \(CI\) domain, they are computable in polynomial time via a linear program \(LP\) that has a totally unimodular constraint matrix\. Surprisingly, this approach fails for the related voter interval \(VI\) domain, and the complexity of the problem has repeatedly been posed as an open question\. Our main result resolves this question: although the relevant matrix is not totally unimodular, the \`\`standard'' LP still admits at least one optimal integral solution, and we provide a fast algorithm for finding it\.   Our technique naturally extends to the voter\-candidate interval \(VCI\) domain, also known as the 1\-dimensional voter\-candidate range \(1D\-VCR\) domain, and to the linearly consistent \(LC\) domain, both of which generalize the candidate and voter interval domains\. Although both the VCI and LC domains have been studied in social choice, their relationship was unknown\. We show, through connections to graph theory, that LC strictly contains VCI\. We also provide an alternative definition of LC that is closer in spirit to VCI and has a natural interpretation in approval elections; this equivalence may be of independent interest\. Finally, we study an alternative tree\-based generalization of VCI and show that Thiele rules become NP\-hard to compute on this domain\.

## Meta\-memorization and memorization scaling laws in transformers

**Authors:** Alex Nguyen; Kenneth Norman; Gautam Reddy

**ID:** 150978 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=drAxM4RK3E>) | [PDF](<https://openreview.net/pdf?id=drAxM4RK3E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150978>)

Larger transformers can memorize more data, with a capacity \(in bits\) that scales roughly linearly with parameter count\. Counterintuitively, larger models also memorize \*faster\*, requiring fewer repetitions of a sequence during training before it is perfectly memorized\. We reproduce both memorization scaling laws in transformers trained on unstructured sequences, demonstrating that efficient memorization is not due to a larger model's superior ability to learn structure in data\. Rapid memorization is due to a \*meta\-memorization\* effect, where models trained to memorize a large set of random sequences learn to memorize novel sequences more quickly\. The rate $r\(t\)$ at which models memorize grows with training time $t$ as a power\-law $r\(t\) \\sim t^\{\\beta\}$ with a fixed exponent $\\beta$ but an increasing upper cutoff across model scales\. In one\-layer models, we trace the origin of meta\-memorization to structured attention heads that convey length\-invariant sequence information to MLPs where memorized sequences are stored\. Meta\-memorization is explained using a simplified model of a dense associative memory where retrieval is constrained by an attentional bottleneck\. Put together, our results suggest transformers dynamically acquire reusable mechanisms that enable highly efficient storage and retrieval of memories\.

## Bifurcation Models: Learning Set\-Valued Solution Maps with Weight\-Tied Dynamics

**Authors:** Caleb Jore; Jialin Liu

**ID:** 149009 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tVZohLsVHC>) | [PDF](<https://openreview.net/pdf?id=tVZohLsVHC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149009>)

Many scientific and combinatorial problems admit multiple correct solutions, not a single label\. Standard supervised learning resolves this ambiguity by choosing one solution as the target, but this hidden selector can be arbitrary, discontinuous, and harder to learn than the underlying solution set\. We study bifurcation models, a weight\-tied dynamical view in which different initializations can converge to different stable equilibria, so the model represents an attractor landscape rather than one chosen branch\. We prove that broad set\-valued maps with locally Lipschitz branches can be represented by regular equilibrium dynamics and that the induced selectors are almost everywhere regular, while manual selectors can be arbitrarily irregular\. Experiments on frustrated Ising models show that such dynamics can discover multiple valid equilibria without branch labels and outperform single\-branch supervision\. Allen\-Cahn experiments further show that diversity is not automatic: it can be encouraged explicitly, but with an accuracy\-\-diversity tradeoff\.

## Can Entry\-Wise Clipping Give Spectral Control of Stochastic Gradients?

**Authors:** Zitao Song; Cedar Site Bai; Zhe Zhang; Brian Bullins; David Gleich

**ID:** 154679 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BoiVQ3v6kN>) | [PDF](<https://openreview.net/pdf?id=BoiVQ3v6kN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154679>)

Training instabilities such as loss spikes are frequently the result of stochastic gradient noise\. Because of rare expressions in language training data, and multiple layer composition, the noise impact is heavy\-tailed and survives mini\-batch averaging\. Gradient clipping is designed to address this where vector\-norm clipping ignores matrix structure in weight updates, while spectral normalization \(e\.g\. Muon\) respects structure at additional cost\. We show an entry\-wise \\emph\{heavy\-tailed noise\} appears similar to real stochastic gradient noise\. Furthermore, through a first\-order perturbation analysis, we identify a \\emph\{localization\} property under which a simple entry\-wise method will give spectral normalization\. Exploiting this, we derive a tractable surrogate for the Bayes\-optimal entry\-wise estimator under a Gaussian signal prior\. We establish $O\(\\epsilon^\{\-4\}\)$ convergence guarantee under Cauchy\-contaminated noise\. Empirically, we find that smooth shrinkage improves Adam on NanoGPT pretraining, saving $\{\\sim\}$8% of training tokens\. We further find that applying the entry\-wise clipping before spectral normalization yields a $\{\\sim\}$2% token saving on top of Muon\.

## I\-PTC: Interactive Programmatic Tool Calling for Stateful Tool\-Augmented Agents

**Authors:** Huanzhi Mao; Chengkun Cao; Shuo Yuan; Joseph Gonzalez

**ID:** 153721 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JGKsz3cGPf>) | [PDF](<https://openreview.net/pdf?id=JGKsz3cGPf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153721>)

Large language models are increasingly capable of writing and executing code, suggesting a natural paradigm for tool\-augmented agents: expressing tool use as programs rather than isolated calls\. Programmatic tool calling \(PTC\) captures this idea through loops, batching, abstraction, and structured computation, but existing PTC approaches are largely stateless, limiting their ability to reuse intermediate results and adapt over time\. This is problematic for real\-world tasks, where tool environments and problem\-solving processes are inherently stateful\. We therefore present I\-PTC, an interactive framework that executes stateful PTC: models issue code snippets that call tools, maintain reusable state, and evolve the tool interface through API corrections\. To evaluate the effectiveness of I\-PTC and the general PTC setting, we introduce PTC\-BENCH, a benchmark of long\-tail, production\-style user requests whose difficulty comes from large initial environments, many dependent API interactions, extended planning, and recovery across follow\-ups and transient failures\. Experiments on PTC\-BENCH show that I\-PTC improves performance on complex multi\-step tasks with large tool sets while substantially reducing token consumption over conventional tool\-calling baselines and the original PTC baseline, highlighting stateful programmatic tool calling as a promising direction for scalable tool\-augmented agents\.

## The Stability of Data Exchange in Competitive Markets

**Authors:** Yuanchen Brian Tang; Jiaxin Song; Bhaskar Ray Chaudhury; Ruta Mehta

**ID:** 149387 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qQCISzgHHs>) | [PDF](<https://openreview.net/pdf?id=qQCISzgHHs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149387>)

We study the stability of data exchange among competing firms\. Unlike tangible goods, data is non\-rival: sharing it does not deprive the giver of its use\. On one hand, competing firms\-\- often operating as machine\-learning–driven predictors that collect observations from a shared environment to solve similar tasks\-\- can improve their predictive accuracies from pooling data\. On the other hand, they compete for market share, which may depend on their relative predictive performance\. This raises the central question of this paper: which data exchanges are stable in such competitive environments?  We formalize this via a model of $n$ firms exchanging fractions of their datasets, with predictive performance feeding into market competition\. We adopt core stability as our solution concept, accounting for externalities via worst\-case responses by non\-participating firms\. Our main results reveal a sharp contrast driven by demand structure: \(i\) in \*fully rational\* markets, where customers flock entirely to the top\-performing firm, a core\-stable exchange always exists for any monotone continuous prediction and utility functions; \(ii\) in \*partially rational\* markets with logit\-style demand, core\-stable exchanges may fail to exist, and even approximate cores can be empty\. Our impossibility results suggest that internal profit\-sharing within coalitions can restore stability in partially rational markets\. We formalize this intuition by showing that when co\-operating coalitions equally redistribute market\-share revenues among members, a core\-stable data exchange exists\. Finally, we propose a natural exchange dynamic and demonstrate empirically that it converges to a core\-stable data exchange in fully rational markets on simulated instances derived from real datasets\.

## Online Imitation Learning for Stabilizing Vlasov\-\-Poisson Plasmas

**Authors:** Xiaofan Xia; Qin Li; Wenlong Mou

**ID:** 155670 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3sKugTZ9Le>) | [PDF](<https://openreview.net/pdf?id=3sKugTZ9Le>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155670>)

We study the problem of controlling instability in the Vlasov\-\-Poisson plasma systems, a fundamental challenge for nuclear fusion control\. Motivated by the partial observability of plasma states in practice, we investigate imitation learning algorithms that learn from a fully\-observable expert controller, but operate under macroscopic measurements\. We theoretically establish a separation between online and offline imitation learning \-\-\- even a small behavior cloning error leads to error compounding that exponentially amplifies instability over time\. By way of contrast, the online imitation learning loss can polynomially control the stability of rollout trajectories\. We then propose a DAgger\-style algorithm that learns the stabilizing controller under partial observability\. Simulation results on a 1D Vlasov\-\-Poisson system demonstrate that our algorithm can effectively stabilize plasma instabilities over longer time horizons than behavior cloning\.

## Denoising Distances in Metric Measure Spaces

**Authors:** Han Huang; Pakawut Jiradilok; Elchanan Mossel

**ID:** 151878 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XDVLprycQY>) | [PDF](<https://openreview.net/pdf?id=XDVLprycQY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151878>)

Recent work studied the problem of finding clusters and denoising pairwise distances from points sampled on a manifold\. We study the same problems in more general metric measure spaces and provide efficient algorithm to partition the points to clusters of a fixed radii and denoise distances to any fixed accuracy\. We also show how to achieve much higher accuracy with a non\-efficient algorithm\. This suggests that unlike the Riemannian case, denoising to higher accuracy in more general metric spaces has a statistical\-computational gap\.

## Wasserstein residuals: Learning Gradient Flows from Population Dynamics

**Authors:** Markus Heinonen; Yair Shenfeld; Ricardo Baptista; Daniel Waxman; Dmitry Batenkov; Tim Cooijmans; Elias Bingham

**ID:** 149651 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oUN2ZBFCm5>) | [PDF](<https://openreview.net/pdf?id=oUN2ZBFCm5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149651>)

Reconstructing population dynamics is a central problem in the physical and data sciences\. Often, the dynamics are modeled as a Wasserstein gradient flow \(WGF\): a curve of distributions driven by an energy functional\. Though there are multiple mathematical characterizations of a WGF, the dominant algorithmic approach relies on the Jordan\-\-Kinderlehrer\-\-Otto \(JKO\) scheme\. JKO\-based methods are inflexible to time discretisation and require solving costly optimal transport problems\. We take a residual approach, enforcing that the continuity equation conditions are satisfied via a non\-negative loss function, whose minimum is the WGF\. Combined with a data\-fitting divergence, this gives a single global objective\. This perspective unifies several existing methods, and leads us to discover a new particle\-based method, \\emph\{stitching\}, that is simulation\-free and robust to large gaps in observation times of the dynamics\. We demonstrate that the stitching method achieves state\-of\-the\-art performance across trajectory inference benchmarks\.

## Sinkhorn Based Associative Memory Retrieval Using Spherical Hellinger Kantorovich Dynamics

**Authors:** Aratrika Mustafi; Soumya Mukherjee

**ID:** 150748 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fgXY4eVgge>) | [PDF](<https://openreview.net/pdf?id=fgXY4eVgge>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150748>)

We propose a dense associative memory for empirical measures \(weighted point clouds\)\. Stored patterns and queries are finitely supported probability measures, and retrieval is defined by minimizing a Hopfield\-style log\-sum\-exp energy built from the debiased Sinkhorn divergence\. We derive retrieval dynamics as a spherical Hellinger Kantorovich \(SHK\) gradient flow, which updates both support locations and weights\. Discretizing the flow yields a deterministic algorithm that uses Sinkhorn potentials to compute barycentric transport steps and a multiplicative simplex reweighting\. Under local separation and PL\-type conditions we prove basin invariance, geometric convergence to a local minimizer, and a bound showing the minimizer remains close to the corresponding stored pattern\. Under a random pattern model, we further show that these Sinkhorn basins are disjoint with high probability, implying exponential capacity in the ambient dimension\. Experiments on synthetic Gaussian point\-cloud memories demonstrate robust recovery from perturbed queries versus a Euclidean Hopfield\-type baseline\.

## Graph Anomaly Detection as Dynamical Transport: Training\-Free Scoring via Empirical Bayes

**Authors:** Fred Xu; Thomas Markovich; florence regol; Yizhou Sun

**ID:** 154833 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ac0FQJZfqu>) | [PDF](<https://openreview.net/pdf?id=Ac0FQJZfqu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154833>)

Node\-level graph anomaly detection \(GAD\) identifies nodes whose attributes and interactions deviate from dominant graph regularities\. Existing GAD models usually encode normality and anomaly scoring indirectly through architectures, message passing, reconstruction or contrastive objectives, and tuned score families\. This entangles graph trust \(how strongly graph structure should define normality\), graph\-spectral weighting, and anomaly\-score choice, yielding scores that are costly, opaque, and unstable across graph regimes\. We propose EB\-GAD \(Empirical\-Bayes GAD\), a training\-free framework that models normality as graph\-aware generalized Ornstein\-\-Uhlenbeck \(GOU\) relaxation toward a graph\-filtered template\. Empirical Bayes fits the graph precision and template from the residual\-field likelihood; the GOU then turns scoring into closed\-form transport cost from a feature\-neutral node to its observed endpoint along graph\-spectral relaxation\. Sweeping relaxation horizon and endpoint tolerance yields a \\emph\{transport bank\}: equilibrium Mahalanobis scoring is one limit, while finite\-horizon transport\-energy and scale\-normalized ratio scores reveal anomalies that static equilibrium scoring can mask\. A label\-free selector chooses the anomaly\-score family from feature homophily, edge density, and feature dimension, then ranks candidates by fitted\-null KS distance and rank\-stability across neighboring transport configurations\. On 11 benchmarks including financial fraud networks with up to 3\.7M nodes, EB\-GAD achieves the best or tied\-best AUROC on 9 of 11 datasets; on the largest graph, eigendecomposition and scoring finish in about six minutes\.

## Analytical Correction for Subsampling Bias in Drifting Models

**Authors:** Jiaru Zhang; Zeyun Deng; Juanwu Lu; Ziran Wang; Ruqi Zhang

**ID:** 155602 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4LUhCWAQzE>) | [PDF](<https://openreview.net/pdf?id=4LUhCWAQzE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155602>)

Drifting models are capable one\-step generative models trained to follow a drifting field\. The field combines attractive and repulsive softmax\-weighted centroids over the data and current\-generator distributions\. In practice, only a minibatch of $n$ samples from each distribution is available, and each centroid is approximated by an empirical estimate\. In this paper, we begin by showing that the minibatch centroid is in general a \*biased\* estimator of the target centroid, with a pointwise $O\(1/n\)$ bias arising from softmax self\-normalization\. Correcting this bias requires the expectation over the full distribution, which is intractable\. We instead approximate the leading bias term from in\-batch statistics and propose \*Analytical Bias Correction\* \(ABC\), a closed\-form plug\-in adjustment\. We prove that ABC reduces the bias from $O\(1/n\)$ to $O\(1/n^2\)$, introduces no first\-order variance inflation, and preserves convex\-hull containment of the corrected centroid\. In practice, ABC requires only two additional lines of code and has negligible wall\-time overhead under compiled execution\. Toy experiments confirm the theoretical $O\(1/n\)$ and $O\(1/n^2\)$ scaling\. On CIFAR\-10, ABC reduces FID and trains faster, with the largest gains at small $n$, where the bias is most significant\.

## Spectral Measures of Mamba Conductances Predict and Shape Effective Receptive Fields

**Authors:** Zy Li

**ID:** 153177 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NEc94pojGg>) | [PDF](<https://openreview.net/pdf?id=NEc94pojGg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153177>)

Mamba's selective state\-space model \(SSM\) achieves long\-range dependence through input\-dependent gating, yet existing analyses offer limited insight into \*why\* a particular parameter configuration produces a particular effective receptive field \(ERF\)\. We define per\-step \*conductances\* $G\_t = I \- \\exp\(A\\,\\Delta\_t\)$ from the zero\-order\-hold discretization and construct a signed spectral measure whose atoms are the per\-dimension conductances weighted by the corresponding input\-output residues\. The impulse response at lag $\\tau$ is a discrete Laplace transform of this measure, and the ERF is governed by the per\-channel squared impulse response weighted by output amplitude\. Heavy tails arise from the mixture across state dimensions, not from temporal randomness within any single dimension\. We extract conductances from trained Mamba models and report three empirical findings\. First, replacing the signed measure with its total\-variation envelope overestimates the ERF by more than three orders of magnitude\. Signed cancellations among residues are what make the prediction quantitative\. Second, the framework generalizes beyond the original single\-layer validation setting\. Applied to held\-out $A$\-initializations, a two\-layer model trained from scratch, and all $48$ layers of a pretrained Mamba\-370M, the spectral measure tracks the frozen\-parameter ERF within $0\.85$\-$1\.5\{\\times\}$ on $41$ of $48$ pretrained layers, with log\-log slopes matching to within $0\.05$ on $35$ layers and within $0\.20$ on all $48$\. Third, varying the initialization of $A$ causally shifts the ERF tail slope as the spectral prediction anticipates \($\-0\.92$ for slow init vs\. $\-2\.6$ for default\), and this shift translates to task performance\. Across two long\-context tasks evaluated over three random seeds, the slow initialization is the most reliable condition: it solves MQAR in $3/3$ seeds \(vs\. $1/3$ for both default and fast\), and attains the highest mean selective\-copy accuracy on every distance bucket \($0\.68\\pm0\.13$ overall vs\. $0\.34\\pm0\.15$ for fast at distances up to $1500$ tokens, with the ranking preserved in a single\-seed extension out to $4000$ tokens\)\. The spectral measure thus provides a controllable design lever for long\-range memory\. The closed\-form prediction reproduces the in\-sample frozen\-parameter ERF at ratio $1\.00$ by construction, which we use as a pipeline consistency check\.

## Agent\-Native Research Artifacts

**Authors:** Jiachen Liu; Jiaxin Pei; Jintao Huang; Chenglei Si; Ao Qu; Robert Tang; Runyu Lu; Lichang Chen; Xiaoyan Bai; Haizhong Zheng; Shirui Chen; Zhiyang Chen; Haojie Ye; Yujuan Fu; Zexue He; Zijian Jin; Zhenyu Zhang; Shangquan Sun; Maestro Harmon; Dianzhuo Wang; Qian\-Ze Zhu; Jiachen Sun; Mingyuan Wu; Baoyu Zhou; Chenyu You; Shijian Lu; Yiming Qiu; Fan Lai; Yuan Yuan; Yao Li; Junyuan Hong; Ruihao Zhu; Beidi Chen; Alex Pentland; Ang Chen; Mosharaf Chowdhury; Zechen Zhang

**ID:** 149619 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=okjSK20sC3>) | [PDF](<https://openreview.net/pdf?id=okjSK20sC3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149619>)

Scientific publication compresses a branching, iterative research process into a linear narrative, discarding the majority of what was discovered along the way\. This compilation imposes two structural costs: a Storytelling Tax, where failed experiments, rejected hypotheses, and the branching exploration process are discarded to fit a linear narrative; and an Engineering Tax, where the gap between reviewer\-sufficient prose and agent\-sufficient specification leaves critical implementation details unwritten\. Tolerable for human readers, these costs become critical when AI agents must understand, reproduce, and extend published work\. We introduce the Agent\-Native Research Artifact \(ARA\), a protocol that replaces the narrative paper with an agent\-executable research package structured around four layers: scientific logic, executable code with full specifications, an exploration graph that preserves the failures compilation discards, and evidence grounding every claim in raw outputs\. Three mechanisms support the ecosystem: a Live Research Manager that captures decisions and dead ends during ordinary development; an ARA Compiler that translates legacy PDFs and repos into ARAs; and an ARA\-native review system that automates objective checks \(analogous to a grammar checker for prose\) so human reviewers can focus on significance, novelty, and taste\. On PaperBench and RE\-Bench, ARA raises question\-answering accuracy from 72\.4% to 93\.7% and reproduction success from 57\.4% to 64\.4%\. On RE\-Bench's five open\-ended extension tasks, preserved failure traces in ARA accelerate progress, but can also constrain a capable agent from stepping outside the prior\-run box depending on the agent's capabilities\.

## Deployment\-Time Online Imitation Learning from Corrective Demonstrations

**Authors:** Saleh Momeni; Bing Liu

**ID:** 154654 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C1sXJuHXuz>) | [PDF](<https://openreview.net/pdf?id=C1sXJuHXuz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154654>)

Behavioral cloning \(BC\) is a powerful paradigm for learning robotic policies from demonstrations\. However, most existing approaches operate in an offline setting and do not address a critical requirement for real\-world deployment: the ability to continually improve policies after deployment\. While interactive imitation learning methods such as DAgger enable improvement by collecting additional data, they rely on repeated retraining over an ever\-growing dataset, leading to increasing computational cost and limited scalability\. In practice, robotic systems must adapt continuously during deployment while remaining operational, making retraining on all accumulated data impractical\. In this work, we introduce an online formulation of interactive BC, where the policy is updated in real time with expert corrections to address failure cases, with no access to past data\. This setting presents a fundamental challenge due to catastrophic forgetting, which degrades previously acquired behaviors when learning from new data\. To address this, we propose a novel method based on online ridge regression and random projections, enabling efficient policy updates without gradient\-based retraining\. We evaluate our approach on a range of manipulation tasks and show that it enables continuous and stable improvement after deployment, outperforming state\-of\-the\-art BC baselines\.

## A Single\-Sample Polylogarithmic Regret Bound for Nonstationary Online Linear Programming

**Authors:** Haoran Xu; Owen Shen; Peter W Glynn; Yinyu Ye; Patrick Jaillet

**ID:** 154912 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A03IL03XrS>) | [PDF](<https://openreview.net/pdf?id=A03IL03XrS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154912>)

We study nonstationary online linear programming \(OLP\), where orders arrive sequentially and follow independent but not\-identical reward\-resource distributions\. The decision\- maker seeks to maximize the expected total reward by making immediate and irrevocable acceptance or rejection decisions for each order, subject to a resource endowment available at the beginning of the planning horizon\. Such problems arise in resource\-constrained ML and AI systems, including inference admission control, online advertising and recommendation, and data\-acquisition pipelines, where the mix and value of requests may change over time\. We focus on a minimal\-information regime in which the decision\-maker observes only one independent sample from each future distribution before the horizon begins\. We propose a novel re\-solving algorithm that integrates a dynamic programming perspective with the dual\-based frameworks traditionally employed in stationary environments\. In the large\-resource regime, where the resource endowment scales linearly with the number of order, we prove that our algorithm achieves $O\(\(\\log n\)^2\)$ regret across a broad class of nonstationary distribution sequences\. Our results demonstrate that polylogarithmic regret is attainable even under significant environmental shifts and minimal data availability, bridging the gap between stationary OLP and more volatile real\-world resource allocation problems\.

## UniReFP: Robust Unified Fingerprinting for Vision Models against Cross\-Task Repurposing Attacks

**Authors:** Ziye Geng; Guang Yang; Yihang Chen; Lingfeng Yao; Xing Shi; Miao Pan; Xin Fu; Changqing Luo

**ID:** 149011 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tUpjSYWqa1>) | [PDF](<https://openreview.net/pdf?id=tUpjSYWqa1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149011>)

We identify, for the first time, a new model modification attack—the cross\-task model repurposing attack—that can render fingerprints generated by existing model fingerprinting approaches inapplicable\. To address this challenge, we propose UniReFP—a novel unified model fingerprinting framework applicable to diverse vision models across different tasks—that utilizes ownership evidence in a shared class\-level semantic space rather than original task\-specific output space, enabling effective ownership verification when a protected model is repurposed across tasks with heterogeneous output formats\. Specifically, UniReFP constructs a surrogate classifier by repurposing the protected model, enabling fingerprints to be generated independently of the original task\-dependent output space of the protected model\. Moreover, it optimizes grouped fingerprints to encode ownership evidence: fingerprints within the same group are encouraged to induce consistent semantic responses and intermediate representations on the surrogate classifier, while producing dispersed responses on independently trained reference classifiers\. During verification, UniReFP uses a task\-aware semantic projection mechanism to map heterogeneous suspect\-model outputs into unified semantic\-presence vectors, and determines ownership by measuring inner\-group consistency\. Extensive experimental results validate the effectiveness of UniReFP, consistently showing superior performance under cross\-task repurposing attacks, commonly studied model modification attacks, and even their combinations\.

## Do Deep Networks Forget Initialization? A Forgetting\-Time View of Practical Inductive Bias

**Authors:** Mohua Das; Pierfrancesco Beneventano; Shibshankar Dey; Gareth H McKinley; Tomaso Poggio

**ID:** 152903 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PYoCtCiU8K>) | [PDF](<https://openreview.net/pdf?id=PYoCtCiU8K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152903>)

Randomly initialized neural networks induce a prior over functions, but the predictor used in practice is produced only after training\.  We ask how much of this initial bias survives the training pipeline\.  To make the question measurable, we introduce \*initialization memory\*: the dependence of the validation\-selected predictor on the scale of the random initialization\.  We perform controlled CIFAR\-10 experiments on ResNets where initialization memory already sharply separates training regimes\.  Low\-learning\-rate SGD can interpolate while still remembering its initialization: on ResNet\-9 with batch size $b=128$, test accuracy varies by $26\.5$ percentage points across initialization scales despite $\\ge99\.5\\%$ training accuracy\.  This is not undertraining: extending the same low\-learning\-rate regime to $5\{,\}000$ epochs leaves the spread essentially unchanged\. In contrast, Adam\-family methods largely erase the dependence\. SGD can also be made to forget when larger learning rates are paired with explicit $L\_2$ norm control\.  We interpret these findings in terms of the time scale of forgetting: gradient\-flow\-like dynamics can preserve initialization memory, whereas stochastic finite\-step effects, explicit norm decay, and adaptive preconditioning erase it on scales governed by the size of explicit or implicit regularization\. The practical inductive bias of a trained network is therefore not the architectural prior alone, but the architectural prior after being filtered by the forgetting dynamics of the training pipeline; and the same regularizers that improve generalization are precisely those that erase memory of initialization\.

## SlackBench: Benchmarking Agents on Collaborative Projects Grounded in Real Code Repositories

**Authors:** Mingxuan \(Aldous\) Li; Huanzhi Mao; Ruitao Zheng; Jarod Stanbury James; Yunze Li; Natanya Anderson; Joseph Gonzalez; Alex Dimakis

**ID:** 139475 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Nc9EWtWWx4>) | [PDF](<https://openreview.net/pdf?id=Nc9EWtWWx4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139475>)

AI Agents are becoming digital coworkers that can browse the web, write code, run experiments, and assist humans over extended horizons\. Yet existing benchmarks fall short of real knowledge work: many rely on synthetic data or isolated tasks, missing the complex, multi\-party dynamics of collaborative projects, where critical information is scattered across conversations, code, and evolving decisions\. Even simple workplace questions may require locating relevant channels and direct messages, recovering context from long discussions, inspecting repository state, reconciling stale or conflicting evidence, and synthesizing across sources\.  We introduce SlackBench, a benchmark for evaluating agents on realistic research and engineering workflows that require joint reasoning over workplace communication and evolving repository state\. Grounded in privacy\-preserving reenactments of real academic research projects, SlackBench provides reproducible environments with realistic multi\-party dialogue, evolving decisions, and corresponding code changes grounded in Github repositories and Google Docs\. It contains 140 queries spanning heterogeneous\-source agentic search, abstention on unanswerable or false\-premise questions, goal\-directed summarization, and circumstance inference over long conversations\. These tasks are not reducible to static corpus question answering: agents must determine which conversations matter, traverse threads, inspect repository state, and synthesize evidence across communication and code artifacts\. Across 20 frontier models and agent harnesses, the best systems score under 60\\%, highlighting substantial headroom for improvement\. SlackBench thus provides an extensible framework for evaluating agents in collaborative work environments\.

## Is $\\sqrt\{d\}$ Separation Necessary for Gradient EM to Learn Gaussian Mixtures in High Dimensions?

**Authors:** Yiran Zhang; Mo Zhou; Weihang Xu; Maryam Fazel; Simon Du

**ID:** 154456 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DS5MgFKJIb>) | [PDF](<https://openreview.net/pdf?id=DS5MgFKJIb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154456>)

Learning Gaussian mixture models \(GMMs\) using the Expectation\-Maximization \(EM\) algorithm and its gradient\-based variants is a fundamental problem in machine learning\. It is known that random initialized \(gradient\) EM fails to learn multi\-component GMMs in the exact\-parameterized setting, where the number of components matches that of the ground\-truth GMM\. Recently, global convergence of gradient EM has been established in the over\-parameterized setting, where more components are used, provided that the ground\-truth components are well separated\. In particular, the minimum separation between ground\-truth components is required to scale as $\\Omega\(\\sqrt\{d\}\)$, where $d$ is the dimension\. In this paper, we show that this dimensional dependence is unavoidable in high\-dimensional settings\. Specifically, for any $\\epsilon &gt; 0$, we prove that when the dimension is sufficiently large, a separation of order $\\Omega\(d^\{0\.5\-\\epsilon\}\)$ is insufficient to guarantee global convergence of population gradient EM in sub\-exponential time under random initialization, even in the over\-parameterized regime\. Our result establishes an almost optimal lower bound on the ground\-truth separation required for learning Gaussian mixtures via gradient EM in high dimensions\.

## On Worst\-Case Guarantees for Graph\-Based Nearest\-Neighbor Search

**Authors:** Majid Daliri; Mohammadreza Daneshvaramoli; Purna Dutta; Edo Liberty; Cameron Musco; Christopher Musco; Torsten Suel

**ID:** 152352 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ThkUq9PUA7>) | [PDF](<https://openreview.net/pdf?id=ThkUq9PUA7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152352>)

Graph\-based nearest neighbor search algorithms like HNSW, DiskANN, NSG, and others have surged in popularity in recent years due to their excellent empirical performance in comparison to previously successful \`\`space partitioning'' methods like IVF data structures and Locality Sensitive Hashing \(LSH\)\. However, in contrast to LSH and related methods, obtaining strong worst\-case theoretical guarantees for graph\-based search has remained a challenging open problem\.      In this paper, we prove a strong lower bound that helps explain the lack of progress towards such guarantees\. In particular, we show that no standard graph\-based method \(i\.e\., any method that runs a variant of greedy  search on a flat or hierarchical search graph\) can achieve sublinear query time for approximate nearest neighbor search in Euclidean space, even for an arbitrarily large approximation factor\.      On the other hand, we prove that sublinear query time \\emph\{is possible\} if we allow for the use of \\emph\{Steiner points\} in the search graph\. We obtain bounds comparable to LSH, showing e\.g\., that graph\-based search with Steiner points can solve $c$\-approximate nearest neighbor search in Euclidean space with query time $\\tilde\{O\}\\left\(n^\{1/c\}\\right\)$\. We complement this result with initial experiments exploring how Steiner points can be incorporated into practical graph\-based methods, showing modest but meaningful improvements in      recall versus query\-time tradeoffs\.

## One\-Bit Clustering for Two Component Sub\-Gaussian Mixture Models

**Authors:** Junren Chen; Yun Yang

**ID:** 154018 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gqah1tHXsO>) | [PDF](<https://openreview.net/pdf?id=Gqah1tHXsO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154018>)

Clustering is a fundamental problem in statistics and machine learning\. We propose the first one bit clustering method for two\-component sub Gaussian mixture models\. The method uses only one bit per entry of each sample obtained via a dithered quantizer\. Under a mild non\-spikiness condition on the cluster centers, we show that a variant of Lloyd’s algorithm achieves a misclassification rate that decays exponentially with a signal to noise ratio comparable to that in the unquantized setting\. This result further implies exact recovery under an explicit separation condition, which exceeds the optimal threshold for unquantized data by only a logarithmic factor\. When the dimension $p$ is sufficiently large, the non\-spikiness condition can be enforced by applying a random rotation using a Haar distributed matrix prior to quantization\. In particular, it holds with high probability when $p \\gtrsim 1$ for partial recovery and $p \\gtrsim \\log n \\log\\log n$ for exact recovery, where $n$ is the sample size\. We also establish a minimax lower bound, showing that the misclassification rate and separation condition are in general optimal up to constants\. Numerical results are provided to corroborate the theory and demonstrate the efficacy of the proposed method\.

## Optimizing Computational\-Statistical Runtime for Wasserstein Distance Estimation

**Authors:** Peter M Jacobs; Jeff M Phillips

**ID:** 155480 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5GGreyp28W>) | [PDF](<https://openreview.net/pdf?id=5GGreyp28W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155480>)

Squared Wasserstein distance is a frequently used tool to compare probability distributions\.  This distance is typically computed between empirical measures of size $n$ from two underlying random samples\. Unfortunately, even in lower dimensional Euclidean space problems $\\left\( d \\in \\\{2,3\\\} \\right\)$, Wasserstein distance algorithms with approximate or exact precision guarantees scale poorly in the runtime as a function of $n$ and the desired precision\. In response, we consider the computational\-statistical runtime, where the goal to estimate from samples the Wasserstein distance up to the $\\varepsilon$\-additive error which is achievable under a sample; we allow $O\(1\)$ time per sample\.  Towards this, we develop a Sample\-Sketch\-Solve paradigm where we introduce a regular cartesian grid sketch of the samples\.  We show that \(especially under $\\alpha$\-H\\"older smooth distributions\) this can compress the data without increasing asymptotic error, and also regularizes the structure which enables faster exact algorithms\.  Ultimately, we approximate $W\_2^2\(P,Q\)$ within $\\varepsilon$ error in $\\varepsilon^\{\-\\max\(2,\\frac\{d\+1\+o\(1\)\}\{2\}\)\}$ time for Lipschitz $P,Q$ on $\(0,1\)^d$; nearly an optimal $\\Theta\(\\varepsilon^\{\-2\}\)$ for $d \\leq 3$\.

## Budgeting Discretion: Theory and Evidence on Street\-Level Decision\-Making

**Authors:** Gaurab Pokharel; Sanmay Das; Patrick J Fowler

**ID:** 153217 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MyGzw5iNBF>) | [PDF](<https://openreview.net/pdf?id=MyGzw5iNBF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153217>)

Street\-level bureaucrats, such as caseworkers, triage nurses, and school administration, operate under a fundamental tension\. The official policy on who to prioritize for services may conflict with bureaucrats estimation of who would benefit most from those services\. The social theory of street\-level bureaucracy argues that frontline agents use discretionary authority to bridge this gap, overriding policy recommendations when professional judgment identifies cases where doing so would meaningfully improve outcomes\. As algorithmic recommendations become embedded in allocation settings, understanding the structure of this discretionary behavior is fundamental to designing tools that account for, rather than suppress, this value of professional judgment\.  We formalize discretion as a finite\-horizon dynamic allocation problem\. An agent implements a default policy but holds a limited budget of K overrides across T periods\. Each period, the agent observes whether deviating from the default would yield a welfare gain and must decide whether to spend a scarce override now or conserve it for future opportunities\. We show that the optimal policy is a state\-dependent threshold rule and prove a behavioral invariance: for location\-scale families of improvement distributions, the rate at which an optimal agent exercises discretion is independent of the amount of welfare gains and depends only on the distribution's shape\. Fat\-tailed gains induce patience \(conserving overrides for rare, high\-stakes cases\); thin\-tailed gains induce routine, front\-loaded spending\.  We also compare the conceptual implications of our model with operational data from a homelessness service system\. Override rates shift with short\-run capacity openings in scarce housing, rising when recent exits free slots, and falling when interventions are congested\. This could be the result of a perceived increase in the discretionary budget\. Further, the temporal pattern of spending is front\-loaded: override rates peak on Mondays and early in the fiscal year, consistent with the routine, early\-spending behavior our model predicts under thin\-tailed improvement distributions\. These findings identify a systematic structure in both human and theoretically optimal decision\-making, with direct implications for the design of human\-AI allocation systems that are both more efficient and equitable\.

## A Bitter Lesson for Data Filtering

**Authors:** Christopher Mohri; John Duchi; Tatsunori Hashimoto

**ID:** 155947 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1bGfOCtPWO>) | [PDF](<https://openreview.net/pdf?id=1bGfOCtPWO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155947>)

We investigate data filtering for large model pretraining via new scaling studies that target the high compute, data\-scarce regime\. In spite of an apparently common belief that filtering data to include only high\-quality information is essential, our experiments suggest that with enough compute, the best data filter is no data filter\. We find that sufficiently trained large parameter models not only tolerate low\-quality and distractor data, but in fact, including nominally 'poor' data improves model performance\.

## Adaptive Delayed\-Update Cyclic Algorithm for Variational Inequalities

**Authors:** Yi Wei; Xufeng Cai; Jelena Diakonikolas

**ID:** 150287 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jIJ566xVDK>) | [PDF](<https://openreview.net/pdf?id=jIJ566xVDK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150287>)

Cyclic block coordinate methods are widely used in practice for their simplicity and strong empirical performance\. Yet, their theoretical behavior is challenging to explain, and setting their step sizes$\-$beyond classical coordinate descent for minimization$\-$requires careful tuning or line\-search machinery\.  In this work, we develop $\\texttt\{ADUCA\}$ \(Adaptive Delayed\-Update Cyclic Algorithm\), a cyclic algorithm addressing a broad class of Minty variational inequalities with monotone Lipschitz operators\. $\\texttt\{ADUCA\}$ is parameter\-free and locally adaptive: it requires no global or block\-wise Lipschitz constants, it  uses no per\-epoch line search, and it adapts to local problem geometry\. A key feature of the algorithm is using operator information delayed by a full cycle, which makes the algorithm  compatible with parallel and distributed implementations, and attractive due to weakened  synchronization requirements across blocks\. We prove that $\\texttt\{ADUCA\}$ attains \(near\) optimal global  oracle complexity as a function of target error $\\epsilon &gt;0$, scaling with $1/\\epsilon$ for monotone operators, or with $\\log^2\(1/\\epsilon\)$ for operators that are strongly monotone\.

## Instance\-Adaptive Online Multicalibration

**Authors:** Zhiming Huang; Jamie Morgenstern; Aaron Roth; Claire Jie Zhang

**ID:** 148452 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xjc4HHAmIS>) | [PDF](<https://openreview.net/pdf?id=xjc4HHAmIS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148452>)

We study online multicalibration beyond the worst\-case\. We give a single, efficient algorithm which dynamically interpolates between stochastic and worst\-case sequences by  adaptively refining a dyadic grid of prediction values\. Its error is controlled by the number of leaves in the refinement tree\. Our analysis recovers the known $\\widetilde O\(T^\{2/3\}\)$ worst\-case\-optimal rate for online multicalibration, while simultaneously automatically adapting to easier instances: in the marginal stochastic setting it obtains a rate of $\\widetilde O\(\\sqrt T\)$, and for piecewise\-stationary means with $J$ segments its rate is $\\widetilde O\(\\sqrt\{JT\}\)$\. More generally, the rate depends on a threshold\-complexity measure of the predictable mean process relative to the group family\. We show that this dependence is tight up to logarithmic factors\.

## Linear Regression Under Misalignment: Algorithms and Theoretical Results

**Authors:** Sanjivni Rana; Suraj Shetiya; Senjuti Basu Roy; Gautam Das

**ID:** 155332 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6Q1b0lxekb>) | [PDF](<https://openreview.net/pdf?id=6Q1b0lxekb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155332>)

Performing regression is challenging in applications where training data is no longer aligned, arising due to anonymization, data fragmentation, or multi\-source aggregation\. Motivated by such scenarios, we study two related yet computationally distinct problems that arise when the correspondence between $d$\-dimensional feature vectors and responses in linear regression is unknown\.   The first problem, referred to as the \\emph\{Shuffled Linear Regression\} \(SLR\) problem, originally proposed in the machine learning community, considers the setting where feature vectors arrive as internally consistent $d$\-dimensional units but their correspondence to response values is unknown\. Prior work established an efficient exact solution only for the one\-dimensional case\. For higher dimensions \($d \\geq 2$\), the best known result is a $\(1\+\\varepsilon\)$ approximation scheme with running time $\\mathcal\{O\}\(\(n/\\varepsilon\)^d\)$, where $n$ is the number of data points, leaving open the fundamental question of whether an exact polynomial\-time algorithm exists for any fixed dimension $d$\. \\emph\{Despite the extensive study in prior literature and established NP\-hardness results for unbounded dimensions, the exact computational complexity of this problem for bounded $d$ has remained unresolved\.\}  We resolve this open problem by providing the first exact polynomial\-time algorithm via a geometric insight: the parameter space can be partitioned by $\\binom\{n\}\{2\}$ separator hyperplanes into $O\(n^\{2d\-2\}\)$ regions, within each of which the optimal pairing remains unchanged\. This reduces the exponential search over permutations to a polynomial search over regions, yielding the first exact polynomial\-time algorithm for SLR with runtime $O\(n^\{2d\-1\}\(d^2 \+ \\log n\)\)$, without any distributional assumptions\.  We initiate the study of the second problem, referred to as the \\emph\{\\furlong\} \(\\fur\) problem, which considers a more challenging setting where neither the feature vectors themselves nor their correspondence to the response variable are internally aligned\. For the \\fur\\ problem, we provide the first rigorous complexity and algorithmic results, proving that it is NP\-hard even at $d = 2$\. This establishes a qualitative gap : \\fur\\ is intractable even in low dimensions, whereas SLR admits an exact polynomial\-time solution for fixed $d$\.

## Model Cascades with Provable Per\-Class Quality

**Authors:** Ashwin G Colaço; Sharad Mehrotra; Michael J De Lucia; Kevin Hamlen; Murat Kantarcioglu; Latifur R Khan; Ananthram Swami; Bhavani Thuraisingham; Unnat Jain

**ID:** 148492 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xObYyMlKf8>) | [PDF](<https://openreview.net/pdf?id=xObYyMlKf8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148492>)

Model cascades reduce inference cost by routing inputs through cheap models and escalating only when needed, from lightweight image classifiers to small language models\. Existing exit rules \(confidence thresholds, learned scorers, agreement signals\) all optimize for aggregate quality, but none controls quality at the class level: a model that is systematically unreliable on a rare, fine\-grained, or minority class silently violates the quality contract, regardless of its overall confidence\. We introduce \*\*NOMAD\*\*, built on a simple insight: the \*predicted class label\*, not the confidence score alone, is the correct signal for cascade exit decisions\. For each model, NOMAD identifies from held\-out data the classes it handles reliably enough to serve as the final answer; a \*chain\-safety certificate\* verifies that any sequence of models preserves per\-class quality end\-to\-end, not just at each stage in isolation; and a greedy selector routes each input through the cheapest viable sequence, with a provable 4\-approximation on cost\. On 16 datasets spanning tabular, fine\-grained vision, and text \(including LLM cascades with 15–20× cost ratios between models\), NOMAD achieves up to 40× speedup \(geometric mean 4× over the role model\) and is the only method among 11 baselines with zero per\-class violations on every dataset\. Code, configurations, fold indices, and an interactive results explorer \(\[nomad\-cascades\.surge\.sh\]\(https://nomad\-cascades\.surge\.sh\)\) accompany this submission as supplementary material for reproducibility\.

## Differentiable Range\-Partition Entropy for Entropy\-Sensitive Geometric Algorithms

**Authors:** Ibne Farabi Shihab; Sanjeda Akter; Anuj Sharma

**ID:** 149856 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ml7qF9daTZ>) | [PDF](<https://openreview.net/pdf?id=ml7qF9daTZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149856>)

Range\-partition entropy is a structural complexity measure used in entropy\-sensitive computational geometry\. We introduce Differentiable Entropy Regularization \(DER\), a gradient\-optimizable surrogate for the entropy of learned geometric partitions\. The paper makes three main contributions\. First, we separate the normalized entropy optimized by DER, denoted H\_norm\(S\), from the runtime\-scaled entropy H\_work\(S\) = n · H\_norm\(S\) that appears in algorithmic work bounds\. Second, for a fixed margin\-separated halfspace arrangement, we prove a self\-contained soft\-to\-hard approximation theorem: the soft halfspace\-cell entropy converges to the corresponding hard sign\-pattern entropy at a rate controlled by margin, temperature, and the number of separators\. A connection to optimal range\-partition entropy holds when the fixed partition is admissible for the geometric problem and near\-optimal in the admissible partition class\. Third, we evaluate DER as learned geometric preprocessing for SciPy/Qhull\-based convex\-hull and Delaunay pipelines\. On the evaluated 2D tasks, DER gives up to 4×–5× solver\-side speedups and smaller end\-to\-end gains after preprocessing, with convex\-hull area error below 0\.2%\. We also include a secondary transfer study in ViT\-style attention, where the same regularizer induces structured sparsity and improves empirical efficiency\. The central contribution is not the entropy formula alone, which resembles soft clustering, but the range\-aware differentiable construction, the explicit approximation analysis, and the geometry\-first training pipeline\.

## A Semantic\-Sampling Framework for Evaluating Calibration in Open\-Ended Question Answering

**Authors:** Zhanliang Wang; Jiancong Xiao; Ruochen Jin; Shu Yang; Bojian Hou; Li Shen

**ID:** 149036 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tL3fAjECyx>) | [PDF](<https://openreview.net/pdf?id=tL3fAjECyx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149036>)

Calibration measures whether a model's predicted confidence aligns with its empirical accuracy, and is central to the reliable deployment of large language models \(LLMs\) in high\-stakes domains such as medicine and law\. While much recent work focuses on \*improving\* LLM calibration, the equally important question of how to \*evaluate\* it in realistic settings remains underdeveloped\. Open\-ended question answering \(QA\), the most common deployment setting for modern LLMs, is where existing evaluation methods fall short: logit\-based metrics need restricted output formats and internal probabilities; verbalized confidence is self\-reported and often overconfident; and sampling\-based methods rely on task\-specific extraction rules without a clear finite\-sample target\. We introduce \*\*Sem\-ECE\*\* \(\*\*Sem\*\*antic\-Sampling \*\*E\*\*xpected \*\*C\*\*alibration \*\*E\*\*rror\), a calibration evaluation framework for open\-ended QA that samples answers from the model, groups them into semantic classes, and uses the resulting frequencies as confidence\. We study two estimators within this framework: Sem₁\-ECE, the same\-sample self\-consistency score, and Sem₂\-ECE, a held\-out variant that separates answer selection from confidence evaluation\. We prove both are asymptotically unbiased, and further show that they agree on easy questions but diverge on hard ones with Sem₂ achieving strictly smaller calibration error, so their gap also serves as a diagnostic for question difficulty\. Experiments on three open\-ended QA benchmarks across five leading commercial LLMs match our theoretical predictions and show that Sem\-ECE outperforms verbalized confidence and existing sampling\-based methods, while complementing logit\-based evaluation when internal probabilities are unavailable\.

## How to Have a Sensitive Debate

**Authors:** Jiawei Li; Zhiyang Xun; Lijie Chen; Jonah Brown\-Cohen

**ID:** 153928 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HacMapwQZZ>) | [PDF](<https://openreview.net/pdf?id=HacMapwQZZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153928>)

As powerful AI systems reach and sometimes surpass the abilities of human experts across a range of cognitively demanding tasks, the problem of accurate oversight and supervision of these systems has become increasingly urgent\. One promising approach is AI debate, which seeks to leverage a debate between two powerful AIs to break complex questions down into simpler claims that can be easily judged directly\. Theoretical work on debate has formalized this intuition in the language of computational complexity theory, where the goal is to design protocols \(i\.e\. rules of the debate game\) that provide rigorous guarantees on correctness for judging solutions to complex problems with limited supervision\. Specifically, the current best protocol has been shown to work for all problems that have sufficiently\-stable decompositions into subproblems\. In this paper we design a new protocol for this same class of problems that improves on the prior work in several ways\. First, correctness holds in a worst\-case rather than an average\-case sense\. Second, honesty and correctness is a dominant\-strategy equilibrium for both debaters, rather than a Stackelberg equilibrium\. Finally, we prove black\-box lower bounds, showing that our new protocol is instance\-wise optimal\. That is, no protocol for this class of problems can outperform ours while making only black\-box queries to human judgments\. We obtain these results by relating the notion of stable problem decompositions to the concept of fractional block sensitivity from query complexity\.

## Automating ML for Science: Can Frontier Agents Climb Scientific Hills in the Wild?

**Authors:** Ming Zhong; Stacy Li; Nicholas Carlini; Matthew Jagielski

**ID:** 139352 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Uwbr4qgQyj>) | [PDF](<https://openreview.net/pdf?id=Uwbr4qgQyj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139352>)

Frontier coding agents are increasingly framed as end\-to\-end automated researchers, and ML for science offers a demanding test of that promise: improving a scientific model often requires domain insight beyond routine ML engineering\. We introduce \*\*Agent4Sci\*\*, a long\-horizon testbed for measuring how far today's agents can improve the published best models on scientific ML benchmarks, spanning 20 benchmarks across 11 domains\. Rather than ranking agents on a leaderboard, Agent4Sci asks what kinds of progress agents can make on these tasks under in\-the\-wild conditions, and where they fall short\. Empirically, today's frontier agents advance the published best on every benchmark, with Claude Opus reaching 10\.4% mean relative improvement and no run flagged for academic misconduct\. These gains, however, come almost entirely from a bag of ML\-engineering tricks rather than research\-level insight\. Trajectory analysis surfaces three recurring limitations in this setting: novelty miscalibration, resource under\-utilization, and rapid collapse into local engineering sweeps\. Lightweight plug\-in skills for research ideation, experiment management, and scheduled checklists raise Claude Opus from 10\.4% to 20\.1% and Codex from 4\.4% to 8\.1%, while yielding more diverse, domain\-relevant interventions\. Agent4Sci gives the community a way to track and push frontier agents from ML engineering toward domain insight on real\-world ML\-for\-science problems\. Code and data are available on \[GitHub\]\(https://github\.com/maszhongming/agent4sci\) and \[Hugging Face\]\(https://huggingface\.co/datasets/MingZhong/agent4sci\)\.

## Persistent\-Transient Policy Evaluation for Markov Chains via Minimal Peripheral Quotients

**Authors:** Yang Xu; Vaneet Aggarwal

**ID:** 148512 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xJcl52dxxi>) | [PDF](<https://openreview.net/pdf?id=xJcl52dxxi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148512>)

We study fixed\-policy evaluation for finite Markov chains that may be reducible and periodic\. Classical evaluation methods with gain and bias decomposition are not always diagnostic: the gain records only invariant Ces\\\`aro averages, while persistent phase\-dependent behavior is absorbed into the bias together with genuinely transient effects\. We identify the real peripheral invariant subspace $\\mathcal\{K\}\(P\)$ of the transition matrix $P$ as the source of this ambiguity\. Quotienting by $\\mathcal\{K\}\(P\)$ is the minimal exact quotient that removes all non\-decaying modes and makes the remaining dynamics strictly stable\. After choosing a gauge projection $\\Pi$ with kernel $\\mathcal\{K\}\(P\)$, the reward admits a unique decomposition $r = g\_\\Pi^\\star \+ \(I\-P\)v\_\\Pi^\\star$, where $g\_\\Pi^\\star$ is a persistent regime profile and $v\_\\Pi^\\star$ is a gauge\-fixed transient component\. An exact comparison with classical normalized gain and bias shows that the new pair reallocates the same information so that all persistent modes are represented in $g\_\\Pi^\\star$ and $v\_\\Pi^\\star$ is transient\. This decomposition reconstructs finite\-horizon returns, recovers statewise average reward, admits a transient\-cost interpretation, and yields a stable estimator under a generative model\.

## AgentOdyssey: Open\-Ended Long\-Horizon Text Game Generation for Test\-Time Continual Learning Agents

**Authors:** Zheyuan Zhang; Zehao Wen; Bowei Zhang; Andrew Wang; Jianwen Xie; Daniel Khashabi; Tianmin Shu

**ID:** 148896 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uNezciDNHb>) | [PDF](<https://openreview.net/pdf?id=uNezciDNHb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148896>)

For agents to learn continuously from interaction with the world at test time, they must be able to explore effectively, acquire new world knowledge and skills, retain relevant episodic experiences, and plan over long horizons\. To evaluate these key abilities of test\-time continual learning agents, we introduce AgentOdyssey, a novel evaluation framework that procedurally generates open\-ended text games with rich entities, world dynamics, and long\-horizon tasks\. Critically, AgentOdyssey goes beyond the conventional machine learning assumption that learning does not occur at test time by placing agents in a continuous, long\-horizon setting that interleaves learning and inference throughout deployment\. We further propose a multifaceted evaluation methodology that measures not only game progress but also offers diagnostic tests on world knowledge acquisition, episodic memory, object and action exploration, action diversity, and model cost\. We evaluate diverse agent paradigms in the generated games\. Our experimental results reveal critical limits in agents' key abilities, as well as factors that influence their meaningful horizon\. Although performance scales with stronger base models, even the top agent remains far below human performance, leaving substantial headroom for improvement\. Among agent mechanisms, we find that short\-term memory benefits multiple agent paradigms and is an important component of agent test\-time training\.

## A Transformer\-Derived Iterative Preconditioner

**Authors:** Patrick Lutz; Themistoklis Haris; Aditya Gangrade; Venkatesh Saligrama

**ID:** 153148 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NW9Z1nrWSP>) | [PDF](<https://openreview.net/pdf?id=NW9Z1nrWSP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153148>)

We show that a softmax\-attention\-only transformer trained on in\-context linear regression discovers an iterative symmetric preconditioning primitive\.  The trained model is used only for algorithm discovery: the final method, RAPID, is an explicit preconditioner and uses no learned component at solve time\. To extract this mechanism, we apply a layerwise symmetry intervention strategy which reduces the trained layers to a two\-scalar update\. The current Gram geometry determines the attention scores, and the resulting row update evolves the Gram matrix by congruence, reducing its condition number\.  We turn this primitive into RAPID, an anytime preconditioner for explicit SPD systems $Ax=b$: every prefix constructs a valid factor $P$ such that $PAP^\\top$ can be used to improve the runtime of iterative solvers such as conjugate gradients\.  RAPID uses fast randomized Walsh\-\-Hadamard mixing and sparse row\-min corrections, giving $\\widetilde O\(d^2\)$\-time dense iterations\.  For a Haar\-mixing idealization, we prove that RAPID reaches a target condition number in $\\widetilde O\(d\\log\\kappa\(A\_0\)\)$ expected iterations\.  Empirically, RAPID is fast and versatile: it reaches useful condition numbers quickly, accelerates end\-to\-end CG solves, and improves conditioning across all tested spectral families and real\-world SPD problems\.

## DoFP\-Aligned Lookup Tables for Real\-Time Polarization Demosaicking

**Authors:** Yidong Luo; Chenggong Li; Yunfeng Song; Mengyuan Liu; Junchao Zhang; Xin Yuan

**ID:** 149291 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rNtfvoSj8p>) | [PDF](<https://openreview.net/pdf?id=rNtfvoSj8p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149291>)

Real\-time polarization imaging with off\-the\-shelf color division\-of\-focal\-plane \(DoFP\) cameras requires demosaicking that is both accurate and deployment\-friendly\. Interpolation methods are lightweight but limited in polarization fidelity, whereas learning\-based methods improve quality at much higher online cost\. We propose DoFP\-LUT, a sensor\-structured LUT framework and, to our knowledge, the first LUT\-based framework for real\-time color DoFP polarization demosaicking\. It leverages the deterministic and memory\-light nature of LUT inference while aligning lookup corrections with DoFP\-specific residual structures\. Unlike generic LUTs designed for RGB restoration, DoFP\-LUT targets post\-initialization residuals that are coupled across analyzer orientations, Stokes relations, and local spatial structures\. It factorizes teacher\-guided correction into shared analyzer correction, polarization redistribution, and high\-frequency compensation, compiling each component into compact low\-dimensional LUTs offline\. Online inference then requires only nearest\-neighbor lookup and fixed write\-back\. Experiments show that DoFP\-LUT achieves a favorable quality\-\-efficiency trade\-off, improving polarization reconstruction while preserving deterministic, memory\-light inference for real\-time polarization imaging\.

## Epistemic Infrastructures of Science in AI Era Should Rebalance Costs of Generation and Verification

**Authors:** Jiaqi Ma

**ID:** 140023 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lj2lMy4avH>) | [PDF](<https://openreview.net/pdf?id=lj2lMy4avH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140023>)

AI systems can now cheaply generate plausible scientific artifacts such as papers, reviews, and surveys\. This has led to \\emph\{epistemic pollution\} in our scientific systems, where unreliable but plausible\-looking artifacts accumulate faster than the system can filter them out\. The problem is structural: the epistemic infrastructure of science was calibrated to a world where producing a plausible artifact required substantial expertise, labor, and time, so generation cost itself served as a rough filter; AI weakens that filter without lowering verification cost\. We argue that \\textbf\{AI\-era science should rebalance the costs of generation and verification through a redesign of the epistemic infrastructure\}\. The current paper\-centered system makes verification expensive: papers compress long\-context scientific logic into prose, forcing reviewers, human or AI, to reconstruct underlying argument structure before they can evaluate it\. To address this challenge, we propose \\textbf\{blueprints\} as preliminary epistemic infrastructure: structured, decomposed research artifacts that represent claims, evidence, assumptions, and definitions as typed graph components\. Blueprints trade an upfront generation cost for cheaper, more local, more distributed verification downstream\. We have instantiated the proposal in a proof\-of\-concept prototype\.

## Autonomous Driving Research Requires a Community\-Driven Data Paradigm

**Authors:** Jinsu Yoo; Zanming Huang; Katie Luo; Zheda Mai; Qiyuan Wu; Bharath Hariharan; Mark Campbell; Wei\-Lun \(Harry\) Chao

**ID:** 140088 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HavgE17TFU>) | [PDF](<https://openreview.net/pdf?id=HavgE17TFU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140088>)

Autonomous driving has made remarkable progress, with recent AI advances enabling commercial deployments that are reshaping urban mobility\. Yet the field remains far from its \*universal\* social promise: autonomous systems that can operate robustly \*anywhere, anytime, for anyone\*\. We posit that this gap is not merely a modeling problem, but a problem of the prevailing \*data paradigm\*\. Current research relies heavily on a few benchmark datasets with limited spatial and scenario coverage, even though the community has collectively produced over 600 autonomous driving datasets across nearly 50 countries\. However, this abundance has not translated into broad research impact: most datasets remain significantly underused due to fragmentation, limited visibility, incompatible protocols, and benchmark incentives that concentrate attention on a few dominant datasets\. We therefore argue that \*\*autonomous driving research requires a collaborative, community\-driven data paradigm\*\*\. Such a paradigm would improve the discovery, reuse, integration, and evaluation of diverse datasets; make underexplored data easier and more rewarding to study; and lower the barrier for new contributors\. We outline its key principles, illustrate an early realization, and call for collaboration across academia and industry to transform fragmented datasets into shared community infrastructure for anytime\-anywhere autonomy\.

## Efficient Collaborative LLM Fine\-Tuning over Heterogeneous Mobile Devices via Many Backbones to One Side\-Network Tuning

**Authors:** Xingke Yang; Liang Li; Sicong Li; Liwei Guan; Hao Wang; Xiaoqi Qin; Jiang Liu; Xin Fu; Miao Pan

**ID:** 150713 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g1dJyBM02E>) | [PDF](<https://openreview.net/pdf?id=g1dJyBM02E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150713>)

Collaboratively fine\-tuning \(FT\) large language models \(LLMs\) over heterogeneous mobile devices fosters immense potential applications of personalized intelligence\. However, such a vision faces critical system challenges\. Existing federated LLM fine\-tuning approaches remain limited by prohibitive on\-device resource overhead, straggler\-prone synchronous aggregation, and the assumption of a unified pretrained backbone across heterogeneous devices\. In this paper, we propose EC\-MobiLLM, a novel design for efficient collaborative LLM fine\-tuning across heterogeneous mobile devices and heterogeneous backbones\. EC\-MobiLLM adopts a server\-assisted side\-tuning paradigm to minimize on\-device overhead and pioneers non\-blocking asynchronous collaboration to accelerate training\. Moreover, EC\-MobiLLM introduces adaptive feature alignment to support collaboration across heterogeneous backbones, aligning with practical needs in real\-world deployments\. Extensive experimental results demonstrate that EC\-MobiLLM can maintain robust fine\-tuning performance while achieving extremely low on\-device memory, with at least 95\.2\\% reduction in computation overhead, 93\.2\\% reduction in communication costs and $5\.1\\times$ faster convergence compared to existing methods, validating its efficacy for practical LLM adaptation over heterogeneous mobile devices\.

## Fast Approximate $\\ell\_p$ Chamfer Distance via Lopsided Embeddings and Structured JL

**Authors:** Ying Feng; David Woodruff

**ID:** 152691 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=R8o3ICPCsm>) | [PDF](<https://openreview.net/pdf?id=R8o3ICPCsm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152691>)

For two $d$\-dimensional point sets $A,B$  of size $n$, the Chamfer distance from $A$ to $B$ is defined as $\\text\{CH\}\(A,B\)=\\sum\_\{a \\in A\} \\min\_\{b \\in B\} \\mathsf\{dist\}\(a, b\)$, where $\\mathsf\{dist\}$ is some underlying distance measure\. We present efficient algorithms for approximating the Chamfer distance under the $\\ell\_p$ norm  for $1 &lt; p \\le 2$\. For the general case $1 &lt; p &lt; 2$, we utilize lopsided $\\ell\_p$ to $\\ell\_1$ embeddings with weak guarantees\. We show that they are sufficient for preserving the Chamfer distance\. In the high\-dimensional regime, we use Fast Matrix Multiplication techniques to speed up the lopsided embeddings\. These lead to $\\mathcal\{O\}\(nd\\cdot \\mathrm\{poly\}\(\\log \\log n, \\log\(1/\\varepsilon\)\)/\\varepsilon^2\)$ total time\.   For the specific Euclidean  case \($p=2$\), we leverage the Fast Johnson\-Lindenstrauss Transform based on Toeplitz matrices and re\-analyze the previous $\\ell\_1$\-specific Chamfer algorithm in $\\ell\_2$\. These achieve a runtime matching the recent state\-of\-the\-art $\\ell\_1$ result of $\\mathcal\{O\}\(nd\(\\log \\log n \+ \\log\(1/\\varepsilon\)\)/\\varepsilon^2\)$, improving upon the previous $\\mathcal\{O\}\(nd \\log n/\\varepsilon^2\)$ bound for $\\ell\_2$\. We also give additional results for the angular distance and upper and lower bounds in the streaming setting\.

## Is Backpropagation Optimal? When Synthetic Gradients Improve Sample Efficiency

**Authors:** Yibo Jacky Zhang; Zeyu Tang; Sanmi Koyejo

**ID:** 152783 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QND70yOOUm>) | [PDF](<https://openreview.net/pdf?id=QND70yOOUm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152783>)

Backpropagation is the default learning rule for artificial neural networks and is often treated as the settled approach whenever differentiability is available\. In this work, we revisit this convention from the perspective of sample efficiency\. We introduce a unified vectorized feedback framework for loss\-based and reward\-based learning on computational graphs, in which synthetic gradients emerge as a natural alternative to backpropagation\. We characterize the conditions under which synthetic gradients can achieve a lower gradient\-estimation mean squared error than backpropagation\. We construct examples illustrating that this sample efficiency advantage can be arbitrarily large\. Experiments on contextual bandits and reinforcement learning tasks demonstrate the potential of our theoretical findings\.

## Learning\-Augmented Online Scheduling with Parsimonious Preemption

**Authors:** Mugen Blue; Sungjin Im; Alexander Lindermayr

**ID:** 155617 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4DXp81vtxV>) | [PDF](<https://openreview.net/pdf?id=4DXp81vtxV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155617>)

Learning\-augmented algorithms have emerged as a powerful  paradigm to surpass traditional worst\-case lower bounds  by integrating potentially noisy predictions\. While this  framework has seen success in online scheduling, existing work  primarily optimizes job latency while relying on  frequent, "blind" preemptions\. This ignores the fundamental  trade\-off between algorithmic performance and preemption complexity\. We provide the first systematic study of learning\-augmented  scheduling that curbs preemption while optimizing latency\. We  establish that the gap between theoretical latency bounds and  preemption overhead can be bridged with solid analytical foundations\. Our results include $O\(1\)$\-competitive algorithms for single and  unrelated parallel machines with only $O\(1\)$ preemptions per job under  accurate predictions, with overhead scaling logarithmically with  the prediction error\. By providing the first bounded\-preemption guarantees for unrelated and malleable machines, we extend the theoretical reach of the learning\-augmented framework to more constrained and realistic settings\. Finally, our algorithms are validated through experiments\.

## Online Maximization of Non\-Decomposable Test and Population Utilities

**Authors:** Wojciech Kotlowski; Marek Wydmuch; Krzysztof Dembczynski

**ID:** 153821 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IT4rHivVsd>) | [PDF](<https://openreview.net/pdf?id=IT4rHivVsd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153821>)

We study sequential learning for classification metrics that are non\-decomposable across instances and are general functions of the confusion matrix, such as the Jaccard index and the $F$\-measure\. The learner observes instances sequentially, makes irrevocable predictions, and is evaluated by the final empirical performance metric, leading to an online\-regret objective\.  After observing the sequence, the learner also returns a classifier for future population use, leading to a population\-regret objective\.  This single protocol connects two central frameworks for optimizing non\-decomposable metrics: Expected Test Utility \(ETU\) and Population Utility \(PU\)\.  For smooth concave utilities of the confusion matrix, we show that the ETU benchmark is controlled, in expectation, by the population PU comparator, and that an algorithm with small online regret also yields PU guarantees by an online\-to\-batch conversion\.  We then turn to non\-concave linear\-fractional metrics\.  We devise a general stochastic Dinkelbach\-root method that tracks the relevant metric parameter online and gives online and population regret of order $n^\{\-1/2\}$, up to logarithmic factors, with explicit dependence on conditional\-probability estimation error\.  Our empirical studies evaluate these methods on benchmark datasets\.

## BOOST: Power\-Optimal Strong\-FWER Testing for Block\-Structured Multiplicity

**Authors:** Prasanjit Dubey; Xiaoming Huo

**ID:** 152078 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Vd7IjASrwE>) | [PDF](<https://openreview.net/pdf?id=Vd7IjASrwE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152078>)

Structured multiple\-testing problems \(gatekeeping trials, dose\-finding, multi\-tissue eQTL mapping, bundled\-challenger A/B experiments\) organize hypotheses into design\-imposed blocks and demand strong family\-wise error rate \(FWER\) control for confirmatory claims\. Practitioners currently use objective\-agnostic stepwise rules \(Bonferroni, Holm, Hochberg, Hommel\), closed\-testing and graphical extensions, or hierarchical and resampling methods; none is power\-optimal within the block\-separable class these designs induce\.  We introduce \*\*BOOST\*\* \(Block\-Optimal Objective\-driven Strong\-FWER Testing\), the power\-optimal strong\-FWER procedure for block size three, with three guarantees: \(i\) finite\-sample strong\-FWER validity at $O\(K\)$ cost \(versus $O\(K^2\)$ for general closed testing\) without independence assumptions, with a strict Šidák improvement under cross\-block independence; \(ii\) power\-optimal allocation across heterogeneous blocks via an equalized\-marginal KKT condition, solvable by bisection in $O\(B\\log\(1/\\varepsilon\)\)$; and \(iii\) a sample\-split plug\-in variant for unknown alternative density $g$, attaining $\\alpha$\-control up to $O\(B\_\{\\mathcal\{T\}\} \\, \\mathbb\{E\}\\Vert g \- \\hat\{g\}\\Vert\_\{\\infty\}\)$ inflation with per\-hypothesis power deficit \*independent of\* $B\_\{\\mathcal T\}$\.  Simulations across independent, equicorrelated, sparse, and mis\-specified regimes show 1\.4–1\.7× power gains over the strongest existing baseline at calibrated FWER\.  On two published datasets \(BLUEPRINT cross\-lineage cis\-eQTL and Upworthy bundled\-challenger A/B experiments\), BOOST certifies an order of magnitude more full\-block discoveries than existing baselines at controlled FWER\.

## Contrastive Nonmyopic Objective Cost\-Tradeoff Acquisition for Longitudinal Data

**Authors:** Dzung Dinh; Boqi Chen; Yunni Qu; Marc Niethammer; Junier Oliva

**ID:** 148964 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tqkenMK3QV>) | [PDF](<https://openreview.net/pdf?id=tqkenMK3QV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148964>)

In many critical domains, features are not freely available at inference time: each measurement may come with a cost of time, money, and risk\. Longitudinal prediction further complicates this setting because both features and labels evolve over time, and missing measurements at earlier timepoints may become permanently unavailable\. We propose CAPE \(Contrastive Acquisition\-Plan Embeddings\), a partitioning acquisition policy for longitudinal active feature acquisition\. CAPE first defines NOCT, an oracle\-based objective that scores a set of future feature\-time acquisitions by its expected predictive loss together with its acquisition cost\. Based on NOCT, CAPE learns a contrastive acquisition\-utility manifold of masked partial observations, where proximity reflects the expected utility of future acquisitions\. Offline, training states are embedded and partitioned at each rollout timepoint; candidate future plans are scored within each partition using plug\-in NOCT, and the best partition\-level acquisition plans are cached\. During inference, CAPE retrieves the cached plan via nearest\-centroid lookup, enabling low\-latency adaptive acquisitions\. Experiments on synthetic and real\-world healthcare datasets demonstrate that CAPE outperforms nonparametric, greedy, and RL\-based alternatives, achieving higher accuracy at lower acquisition costs\.

## Strategic Decision Focused Learning

**Authors:** Tinashe Handina; Yuehan Lucy Diao; Adam Wierman; Eric Mazumdar

**ID:** 156150 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=00GgrAB0VK>) | [PDF](<https://openreview.net/pdf?id=00GgrAB0VK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156150>)

Machine learning \(ML\) predictions are increasingly being used to guide decision\-making, giving rise to the problem of decision\-focused learning \(DFL\) where predictors are optimized for downstream decision quality rather than accuracy alone\. However, existing work assumes a single decision\-maker optimizing in isolation\. This paper formalizes \*strategic\* decision\-focused learning, where an ML system predicts an exogenous state that some agents observe before playing a game\. For example, a park ranger may predict wildlife locations to allocate anti\-poaching patrols against strategic poachers\. While the exogenous state is unaffected by agent actions, predictions influence agents' strategies and the resulting equilibrium\. We find that strategic considerations fundamentally change the learning problem\. In particular, we show the prediction accuracy–equilibrium payoff landscape can be non\-monotonic\-\-\-i\.e\., better predictions can degrade performance\. We propose algorithmic approaches to address these challenges and validate them across benchmarks in wildlife conservation and infrastructure protection\. Our theory and experiments highlight the importance of accounting for strategic interactions when designing predictors\.

## Proper Agnostic Learning of Functions of Halfspaces

**Authors:** Sergei Tikhonov; Arsen Vasilyan

**ID:** 151228 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bwvgAfue2A>) | [PDF](<https://openreview.net/pdf?id=bwvgAfue2A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151228>)

We study the problem of computationally efficient \*\*proper agnostic learning\*\* of high\-dimensional concept classes under the Gaussian distribution\. In this setting, given i\.i\.d\.\\ labeled samples from an unknown distribution over $\\mathbb\{R\}^d \\times \\\{\\pm 1\\\}$ whose marginal on $\\mathbb\{R\}^d$ is Gaussian, the goal is to output a hypothesis from a target class $\\mathcal\{F\}$ whose 0\-1 loss is within $\\varepsilon$ of that of the best classifier in $\\mathcal\{F\}$\.  We give the first efficient proper agnostic learning algorithm for arbitrary Boolean functions of $K$ halfspaces under Gaussian marginals\. Our algorithm runs in time $d^\{O\(K^2 \\log\(1/\\varepsilon\)/\\varepsilon^2\)\} \+ \(K/\\varepsilon\)^\{O\(K^3/\\varepsilon^\{2\.5\}\)\}$\. Prior to our work, the only known algorithm for $K \\geq 2$ was brute\-force search, with runtime exponential in $d$\. Moreover, the dependence of our runtime on the dimension $d$ matches that of the best known \\emph\{improper\} learning algorithm, namely $d^\{\\widetilde\{O\}\(K^2/\\varepsilon^2\)\}$\.  For the special case of a single halfspace \($K=1$\), the best previous runtime was $d^\{O\(1/\\varepsilon^4\)\} \+ \(1/\\varepsilon\)^\{O\(1/\\varepsilon^6\)\}$\.\\ Our algorithm improves this to $d^\{O\(1/\\varepsilon^2\)\} \+ \(1/\\varepsilon\)^\{O\(1/\\varepsilon^\{2\.5\}\)\}$\. Once again, the dependence on $d$ matches that of the best known improper algorithm, namely $d^\{O\(1/\\varepsilon^2\)\}$\. Furthermore, the dependence of our runtime on the dimension $d$ is essentially optimal in the statistical query model\.

## FATE\-AI: Futures of Agriculture, Technology, and Ecology in Artificial Intelligence

**Authors:** Piera Riccio

**ID:** 137859 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137859>)

Set in a rural farming community in the Matese National Park region in Southern Italy, where students have studied in temporary classrooms since a 2013 earthquake, this project pairs a 30\-hour AI course grounded in agricultural applications with a one\-month artist residency\. The result is an interdisciplinary approach that teaches technical skills alongside critical, ethical thinking about technology’s role in farming communities, leaving behind both new capabilities and a lasting piece of public art\.

## The Voice\-Native Classroom: Multilingual AI Co\-Teachers for Global ML Education

**Authors:** Aleksei Komissarov

**ID:** 137856 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137856>)

Most AI tutoring tools ask students to type, which is a barrier for learners working in a second language\. This project builds a voice\-native AI co\-teacher that converses with students in their own language, and is available at any time of the day\. Already piloted in a live university course since September 2025, the approach will now scale to reach more than 1,000 students across 50\+ countries through Neapolis University in Cyprus and DataTalks\.Club, a Berlin\-based online community of 80,000 learners – with no tuition and no language barrier standing between students and rigorous ML education\.

## FATE\-AI: Futures of Agriculture, Technology, and Ecology in Artificial Intelligence

**Authors:** Piera Riccio

**ID:** 137853 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137853>)

Set in a rural farming community in the Matese National Park region in Southern Italy, where students have studied in temporary classrooms since a 2013 earthquake, this project pairs a 30\-hour AI course grounded in agricultural applications with a one\-month artist residency\. The result is an interdisciplinary approach that teaches technical skills alongside critical, ethical thinking about technology’s role in farming communities, leaving behind both new capabilities and a lasting piece of public art\.

## The Voice\-Native Classroom: Multilingual AI Co\-Teachers for Global ML Education

**Authors:** Aleksei Komissarov

**ID:** 137850 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137850>)

Most AI tutoring tools ask students to type, which is a barrier for learners working in a second language\. This project builds a voice\-native AI co\-teacher that converses with students in their own language, and is available at any time of the day\. Already piloted in a live university course since September 2025, the approach will now scale to reach more than 1,000 students across 50\+ countries through Neapolis University in Cyprus and DataTalks\.Club, a Berlin\-based online community of 80,000 learners – with no tuition and no language barrier standing between students and rigorous ML education\.

## Invertible Logits Transformation for Accuracy\-Preserving Post\-Hoc Uncertainty Calibration

**Authors:** Lening Zhao; Qipeng Zhan; Li Shen

**ID:** 153997 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GywVajmdc3>) | [PDF](<https://openreview.net/pdf?id=GywVajmdc3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153997>)

Post\-hoc calibration aligns a classifier's predicted confidences with its empirical accuracy without retraining\. An ideal calibrator should correct nonlinear miscalibration, scale gracefully to large label spaces, and preserve the original predictions; existing methods typically violate at least one of these properties\-\-\-temperature scaling lacks expressivity, more flexible parametric alternatives introduce parameters that grow with the number of classes $C$, and other expressive methods do not preserve the rank ordering of class scores and may alter the predicted class\. We propose \\textbf\{Invertible Logits Transformation \(InvLT\)\}, which applies a learned scalar MLP $f:\\mathbb\{R\}\\to\\mathbb\{R\}$ element\-wise to the pre\-softmax logits\. Sharing $f$ across all logit dimensions makes the parameter count independent of $C$\. Monotonicity of $f$\-\-\-and hence preservation of the argmax prediction\-\-\-is softly encouraged via a paired inverse network rather than enforced through the numerical integration required by prior monotone calibrators; this avoids their computational overhead while empirically preserving the original classification accuracy in every setting we evaluate\. Across standard image classification benchmarks and a range of architectures, InvLT consistently outperforms a broad set of post\-hoc baselines on standard calibration metrics\.

## Reviving Stale Updates: Data\-Free Knowledge Distillation for Asynchronous Federated Learning

**Authors:** Baris Askin; Holger Roth; Zhenyu Sun; Carlee Joe\-Wong; Gauri Joshi; Ziyue Xu

**ID:** 152286 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UCpwgZIveF>) | [PDF](<https://openreview.net/pdf?id=UCpwgZIveF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152286>)

Federated learning \(FL\) enables collaborative model training across distributed clients without sharing raw data, yet its scalability is limited by synchronization overhead\. Asynchronous federated learning \(AFL\) alleviates this issue by allowing clients to communicate independently, thereby improving wall\-clock efficiency in large\-scale, hardware\-heterogeneous environments\. However, asynchrony introduces updates computed on outdated global models \(staleness\) that can destabilize optimization and hinder convergence\. We propose FedRevive, an AFL framework that revives stale updates through data\-free knowledge distillation \(DFKD\)\. FedRevive integrates parameter\-space aggregation with a server\-side DFKD process that transfers knowledge from stale client updates to the current global model without access to data\. A meta\-learned generator synthesizes pseudo\-samples for multi\-teacher distillation\. A hybrid aggregation scheme combining raw with DFKD updates effectively mitigates staleness while retaining AFL scalability\. Experiments on vision and text benchmarks show that FedRevive achieves faster training by up to 29\.7\\% and higher final accuracy by up to 11\.4\\% percentage points than baselines\.

## Structurally Separated DAG Learning with Multi\-Scale Normalized Closure

**Authors:** Shuai Feng; Hao Yan

**ID:** 150754 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fdrWS3wvpv>) | [PDF](<https://openreview.net/pdf?id=fdrWS3wvpv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150754>)

Continuous DAG learners typically optimize a single weighted adjacency matrix, forcing each entry to represent both direct\-edge support and signed effect magnitude\. As a result, data fitting, sparsity, acyclicity, and any auxiliary structural information are all imposed on the same variables, even when the available information concerns higher\-order relations such as reachability or ancestral order\. We propose a structure\-separated continuous DAG\-learning framework that gives graph support its own soft representation\. The effective adjacency is \( A=\(W f\(M\)\\circ G\(Z\)\)\\circ\(\\mathbf\{1\}\-I\), \\qquad W f\(M\)=\\beta\\tanh\(M\), \) where \(W\_f\(M\)\) is a bounded signed\-magnitude branch and \(G\(Z\)\) is a structural gate\. Data fitting, sparsity, and the DAGMA barrier are evaluated on \(A\), while cycle and relation constraints are applied to closure scores computed from \(G\)\. The bounded magnitude branch prevents strong effective edges from being hidden behind vanishing structural gates, making closure\-side structural regularization meaningful\. On this separated structural gate, we introduce SMNC, a scan\-efficient multi\-scale normalized closure module\. SMNC computes dyadic closure scores over \(G\) and normalizes each scale by its path\-length budget, producing scale\-normalized matrix\-valued logits for self\-reachability and off\-diagonal reachability\. This design addresses a key limitation of unnormalized product\-style closure scores, whose path evidence scales as \(p^L\) on a length\-\(L\) path with gate value \(p\), causing long\-cycle signals to decay exponentially\. At the appropriate covering scale, SMNC routes gradients through an active length\-\(L\) cycle with a polynomial \(1/L\)\-type scale factor; in the all\-scale soft readout used in practice, this should be interpreted as a local active\-scale effect\. The same relation space supports diagonal self\-reachability losses for cycle suppression and masked off\-diagonal losses for optional ancestry, backward\-exclusion, and incomparability cues, without treating positive reachability labels as direct\-edge labels\. Across linear and nonlinear SEM benchmarks, with ablations over factorization and closure normalization, we show that structure\-separated SMNC improves DAG recovery and provides a principled closure\-space interface for higher\-order structural supervision\.

## Sparsifying Correlation Clustering: Edge Coresets, Triangle Witnesses, and Observation Lower Bounds

**Authors:** Ibne Farabi Shihab; Sanjeda Akter; Anuj Sharma

**ID:** 153137 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Nbtzr6xAnm>) | [PDF](<https://openreview.net/pdf?id=Nbtzr6xAnm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153137>)

The standard metric LP for correlation clustering has $\\Theta\(n^2\)$ pairwise marginals and $\\Theta\(n^3\)$ triangle inequalities, while dense pairwise supervision is often the primary bottleneck in large relational pipelines\. We separate three sparsification questions that are often treated together: preserving the objective of every integral clustering, rounding from a sparse set of LP marginals, and clustering when the signed weighted input itself is only sparsely observed\. First, we prove that the VC dimension of the signed\-edge disagreement class induced by all clusterings of $n$ vertices is exactly $n\-1$, so weighted edge sampling yields additive $\\varepsilon$\-coresets of size $\\tilde O\(n/\\varepsilon^2\)$ with optimal $n$\-dependence\. Second, we introduce \*Sparse\-LP\-Pivot\*, which imputes missing LP marginals from triangle witnesses, and analyze it at two levels: a universal but coarse perturbation bound for every Lipschitz LP\-PIVOT rule, and a sharper sparse\-rounding theorem under an explicit weighted influence\-stability certificate\. For pseudometric\-weighted CC, this gives a $10/3$ exact\-marginal baseline and an unconditional coarse sparse\-marginal bound; a sharp same\-edge bound governed by $\\overline\{\\Gamma\}\_w$ follows conditionally if the rounding rule is additionally proved to satisfy edge\-weight\-dominated influence stability\. Third, we show that uniform marginal sampling has a triangle\-witness threshold at $m=\\Theta\(n^\{3/2\}\)$ for typical pairs, while $m=O\(n^\{3/2\}\\sqrt\{\\log n\}\)$ is sufficient for all pairs with high probability\. Finally, in the stricter sparse edge\-observation model, we prove an $\\Omega\(n^\{3/2\}\)$ lower bound on the expected approximation ratio from $o\(n\)$ uniformly sampled edges for general weighted instances\. Experiments illustrate the witness transition and the proposed diagnostics; the formal guarantees are stated independently of those empirical observations\.

## Efficient Algorithms For Fully Dynamic Bipartite Matching In Metric Spaces

**Authors:** Pankaj Agarwal; Oliver Chubet; Sharath Raghvendra; Arian Zamani

**ID:** 155930 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1jMlnDilIo>) | [PDF](<https://openreview.net/pdf?id=1jMlnDilIo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155930>)

We consider the problem of maintaining a minimum\-cost bipartite matching between two point sets $A$ and $B$ in a metric space $\(\\mathbb\{X\},\\mathsf\{d\}\)$ under insertions and deletions of input points\. The Wasserstein\-$p$ \($W\_p$\) cost of a matching $M$ is defined as $\(\\sum\_\{\(a,b\)\\in M\}\\mathsf\{d\}\(a,b\)^p\)^\{1/p\}$ and an $\\alpha$\-approximate matching is one whose total cost is at most $\\alpha$ times the cost of a minimum\-cost matching\. We obtain two main results\. If $A$ and $B$ are points in $\\mathbb\{R\}^d$ and the distance between two points is measured under the $\\ell\_p$\-metric, an $O\(d\\epsilon^\{\-3/2\}\)$\-approximate $W\_1$\-matching between $A$ and $B$ can be maintained with an amortized $O\\big\(n^\\epsilon d\\epsilon^\{\-3/2\}\\varphi\(n,1/\\sqrt\{\\epsilon\}\)\\big\)$ update time, for any parameter $\\epsilon\\in\(0,1\]$, and where $\\varphi\(n,1/\\sqrt\{\\epsilon\}\)$ denotes the update time of a $\\epsilon^\{\-1/2\}$\-approximate nearest neighbor data structure\. For the $\\ell\_2$ norm this results in an update time of $O\\big\(\(d\+ \\epsilon^\{\-3/2\}n^\\epsilon\)\\log n\\big\)$\. The current state\-of\-the\-art for high\-dimensional settings only focus on the $\\ell\_2$\-metric and maintain an $O\(\\log n\)$\-approximate matching\. Our result not only extends to any $\\ell\_p$ norm, but it also improves the approximation factor for $d=o\(\\log n\)$ under the $\\ell\_2$\-metric\. Next, we consider the problem of maintaining a $W\_p$\-matching when $A$ and $B$ are point sets in an arbitrary finite metric space\. We show that for any $k,p\\geq 1$ and constant $\\epsilon&gt;0$, a $2k\(1\+\\epsilon\)$\-approximate matching can be maintained with an amortized update time of $O\(kn^\{1\+1/k\}\\epsilon^\{\-1\}\\log \\Delta\)$, where $\\Delta$ is the spread of $A\\cup B$\. Prior work on finite metric spaces gave an insertion\-only data structure for $W\_1$\-matching\. In contrast, we develop a fully dynamic approach that supports both insertions and deletions and work for all $W\_p$\-matchings\. Together, our results extend dynamic Wasserstein matching beyond fixed\-dimensional $W\_1$ settings: they handle high\-dimensional geometric instances, extend prior insertion\-only $1$\-Wasserstein matching guarantees to the fully dynamic setting, and support $p$\-Wasserstein costs for every integer $p\\ge 1$ in arbitrary metric spaces\.

## Activation Functions Shape Token Synchronization in Stochastic Transformer Dynamics

**Authors:** Nikita Karagodin

**ID:** 150979 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=do7lcGzKAH>) | [PDF](<https://openreview.net/pdf?id=do7lcGzKAH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150979>)

We study how the MLP activation function shapes the long\-time geometry of token representations in a deep transformer\. We work in the stochastic transformer dynamics of \[Agazzi et\.al\. 2026\], in which tokens evolve as interacting particles on the sphere under deterministic attention and a common MLP noise whose covariance is the activation's NNGP kernel\. For each of ReLU, ReLU², ReLU³, GELU, SiLU, and tanh, we identify the dimensions at which common noise stops driving tokens to full synchronization and sustains non\-degenerate spread\. We further prove that, even in the presence of attention, ReLU noise admits dispersion ceilings close to consensus, while ReLU$^2$ noise prevents complete token collapse under an explicit attention strength condition\.

## Direct Acceleration of Stochastic Root\-Finding Without Variance Reduction and Regularization

**Authors:** TaeHo Yoon; Nicolas Loizou

**ID:** 153100 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NwFLuTS4h3>) | [PDF](<https://openreview.net/pdf?id=NwFLuTS4h3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153100>)

Acceleration for deterministic root\-finding problems has been extensively studied in recent years; specifically, the anchor\-based, or Halpern\-type methods achieve optimal convergence rates with respect to the operator norm\. However, acceleration via these methods does not directly carry over to stochastic setting due to accumulation of errors, unless one enforces diminishing variance via increasing batch sizes or variance reduction techniques\. In this work, we show that another class of acceleration, namely the \*dual\-anchor\* mechanism, extends to the stochastic setting without such error accumulation, in contrast to anchor\-based algorithms\. Consequently, we cleanly achieve $\\mathcal\{O\}\(\\epsilon^\{\-3\}\)$ complexity with iteration\-independent batch size, without any variance reduction or double\-loop recursive regularization, for stochastic root\-finding \(\*resp\.\* fixed\-point\) problems with cocoercivity \(\*resp\.\* square\-nonexpansivity\) in expectation\. For strongly monotone operators, the same algorithm attains a sharper $\\widetilde\{\\mathcal\{O\}\}\(\\epsilon^\{\-2\}\)$ complexity, nearly matching the lower bound\.

## Fixed\-Size Active Statistical Inference

**Authors:** Erik Skalnes; Michael Oberst

**ID:** 153159 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NRmXsCr462>) | [PDF](<https://openreview.net/pdf?id=NRmXsCr462>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153159>)

Variance reduction techniques improve the efficiency of drawing conclusions from data\. Recent proposals that incorporate machine learning predictions into estimators based on weighted sampling use the Poisson Sampling \(PS\) algorithm, which independently flips a biased coin at each unit and includes all heads in the sample\. A fundamental flaw with PS is that it has a random sample\-size, which presents practical challenges and introduces variance into the estimator\. We show that a fixed\-size alternative, known in survey\-sampling as Conditional Poisson Sampling \(CPS\), is a drop\-in replacement for PS on general multivariate Z\-estimation problems, which includes convex M\-estimation considered in prior work\.  Notably, we show that the asymptotic variance of CPS is no worse than that of PS, and can be substantially better in realistic scenarios where predictions are imperfect\.  We illustrate these advantages on both synthetic and real datasets\. In light of our contributions, there is no need to suffer a variable sample\-size\.

## Optimal sequential tests yield log\-optimal e\-processes

**Authors:** Ashwin Ram; Aaditya Ramdas

**ID:** 148381 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yJdPgH8377>) | [PDF](<https://openreview.net/pdf?id=yJdPgH8377>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148381>)

It has been recently shown that e\-processes are sufficient for sequential testing in the following sense: every level\-$\\alpha$ sequential test can be obtained by thresholding an e\-process at $1/\\alpha$\. However, in the above result, neither does the test have to be asymptotically optimal \(in terms of stopping times\) nor does the e\-process have to be  asymptotically log\-optimal\. It has separately been shown that asymptotically log\-optimal e\-processes yield asymptotically optimal sequential tests\. In this paper, we prove the converse, arguably completing the story: it is possible to aggregate asymptotically optimal sequential tests into asymptotically log\-optimal e\-processes\. This is accomplished by using a new class of WAIT e\-processes: those that are Weighted Aggregates of Indicators of Stopping Times that begin at zero, are nondecreasing and increase to infinity under the alternative at the optimal rate\. Importantly, the paper discusses several nuances in the varied definitions of asymptotic \(log\-\)optimality\.

## Deep\-Koopman\-KANDy: Dictionary Discovery for Deep\-Koopman Operators with Kolmogorov\-Arnold Networks for Dynamics

**Authors:** Kevin Slote; Jeremie Fish

**ID:** 152578 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S1pUNll4Zb>) | [PDF](<https://openreview.net/pdf?id=S1pUNll4Zb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152578>)

Symbolic library \-\-\- or Koopman dictionary \-\-\- selection is a fundamental challenge in data\-driven dynamical systems\. Extended Dynamic Mode Decomposition \(EDMD\), Sparse Identification of Nonlinear Dynamics \(SINDy\), and Kolmogorov\-\-Arnold Networks for Dynamics \(KANDy\) all require the practitioner to commit to a function library at training time; Deep\-Koopman Operators avoid this commitment but produce uninterpretable latent observables\. We propose Deep\-Koopman\-KANDy, a structured approach to post\-hoc symbolic dictionary readout that combines Deep\-Koopman modeling with Kolmogorov\-Arnold Networks for Dynamics \(KANDy\)\. The encoder and decoder of a Deep\-Koopman Operator are replaced with two\-layer Kolmogorov\-\-Arnold Networks \(KANs\), and a level\-set construction together with a chain\-rule gradient identity exposes the compositional structure of the learned observables in a basis chosen \\emph\{after\} training\. We evaluate the method on the Lorenz system, the Chirikov standard map, the Ikeda map, and the Arnold cat map\. On Lorenz it recovers the target dictionary $\\\{x,y,z,xy,xz\\\}$ with perfect recall and Jaccard score $0\.79\\pm0\.06$; on the standard map it recovers a low\-order Fourier basis matching the analytical structure; on Ikeda\-\-\-which has no sparse polynomial representation\-\-\-a misspecified polynomial readout still recovers the correct foliation coordinate $g\\approx x^2\+y^2$ together with a nontrivial outer function; and on the Arnold cat map \-\-\- used as a negative control because finite\-dimensional Koopman closure is provably impossible \-\-\- the method fails to find a sparse closure, as expected\.

## Polynomial\-Time Robust Multiclass Linear Classification under Gaussian Marginals

**Authors:** Ilias Diakonikolas; Giannis Iakovidis; Mingchen Ma

**ID:** 153425 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LQQKnVMfWI>) | [PDF](<https://openreview.net/pdf?id=LQQKnVMfWI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153425>)

We study the task of agnostic learning of multiclass linear classifiers under the Gaussian distribution\. Given labeled examples $\(x, y\)$ from a distribution over $\\mathbb\{R\}^d \\times \[k\]$, with Gaussian $x$\-marginal, the goal is to output a hypothesis whose error is comparable to that of the best $k$\-class linear classifier\. While the binary case $k=2$ has a well\-developed algorithmic theory, much less is known for $k \\ge 3$\. Even for $k=3$, prior robust algorithms incur exponential dependence on the inverse of the desired accuracy in both complexity and representation size\. In this work, we develop new structural results for multiclass linear classifiers and use them to design fully polynomial\-time robust learners with dimension\-independent error guarantees\. Our first result shows that the standard multiclass perceptron algorithm requires super\-polynomially many samples and updates, even with clean labels and Gaussian marginals, revealing a basic obstruction absent in the binary case\. Our main positive result is a pairwise improper\-learning framework which yields an efficient learner with error $\\widetilde O\(k^\{3/2\}\\sqrt\{\\mathrm\{opt\}\}\)\+\\epsilon$ for general $k$\. Additionally, we develop a sharper localization\-based framework which leads to error $O\(\\mathrm\{opt\}\)\+\\epsilon$ for $k=3$, and error $\\mathrm\{poly\}\(k\)\\mathrm\{opt\}\+\\epsilon$ for geometrically regular $k$\-class linear classifiers\.

## Testable Learning of General Halfspaces under Massart Noise

**Authors:** Ilias Diakonikolas; Giannis Iakovidis; Daniel Kane; Sihan Liu

**ID:** 153845 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IJ6BI72Ruf>) | [PDF](<https://openreview.net/pdf?id=IJ6BI72Ruf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153845>)

We study the algorithmic task of testably learning  general Massart halfspaces under the Gaussian distribution\. In the testable learning setting, the aim is the design of a tester\-learner pair satisfying the following properties: \(1\) if the tester accepts, the learner outputs a hypothesis and a certificate that it achieves near\-optimal error, and \(2\) it is highly unlikely that the tester rejects if the data satisfies the underlying assumptions\. Our main result is the first testable learning algorithm for general halfspaces with Massart noise and Gaussian marginals\. The complexity of our algorithm is $d^\{\\mathrm\{polylog\}\(\\min\\\{1/\\gamma, 1/\\epsilon \\\}\)\}$, where $\\epsilon$ is the excess error and $\\gamma$ is the bias of the target halfspace, which qualitatively matches the known quasi\-polynomial Statistical Query lower bound for the non\-testable setting\. The analysis of our algorithm hinges on a novel sandwiching polynomial approximation to the sign function with multiplicative error that may be of broader interest\.

## Contrastive Discovery: Open\-Ended Scientific Discovery over Competing Explanations

**Authors:** Ziang Liu; James J Kim; Yijia Dai; Jennifer Sun

**ID:** 154298 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EloJA4f4FX>) | [PDF](<https://openreview.net/pdf?id=EloJA4f4FX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154298>)

LLM agents are increasingly used for open\-ended, data\-driven scientific discovery, yet most systems remain pointwise: they evaluate one candidate hypothesis at a time for surprise, novelty, or evidential support\. This is information\-inefficient: rejecting a hypothesis reveals that one explanation is unlikely, but not which alternatives are better supported\. We argue that the proper epistemic unit of discovery is not a single hypothesis but a scientific question together with the mutually exclusive and collectively exhaustive \(MECE\) explanations that could answer it\. We introduce Contrastive discovery, which scores candidate discoveries by how evidence redistributes belief across competing explanations\. This allows a single experiment to both rule out hypotheses and identify the most plausible alternative\. Across six scientific domains, Contrastive discovery yields substantially more resolved scientific questions than pointwise baselines under the same evaluation budget\. High\-surprisal pointwise candidates are overwhelmingly rejection\-heavy, yet many become resolved alternatives when evaluated contrastively, showing that an explicit representation of alternatives can turn negative evidence into resolved discoveries\.

## SimplexUQ: An Evaluation Framework and Benchmark for Conformal Uncertainty on Simplex\-Valued Predictions

**Authors:** Liang You; Hengyu Shi; Dongwen Ou

**ID:** 139458 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OVTO18J0dv>) | [PDF](<https://openreview.net/pdf?id=OVTO18J0dv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139458>)

Conformal prediction guarantees marginal coverage, but a single calibration threshold can still spread that coverage unevenly, over\-covering easy regions and under\-covering hard ones\. SimplexUQ is, to our knowledge, the first benchmark and reproducible protocol for measuring this allocation problem on simplex\-valued predictions; it compares existing conformal wrappers rather than proposing a new one\. Its task suite, SimplexTasks\-12, combines six controlled synthetic regimes with six frozen\-predictor real tasks spanning class probabilities, topic mixtures, spectral abundances, cell\-type fractions, age distributions, and emotion mixtures\. Each comparison fixes the predictor, score, and response\-free stratification map, varies only the wrapper, and reports marginal coverage, worst\-stratum coverage, max disparity, and within\-task radius and compute\. Global calibration can look valid while failing badly: on CIFAR\-10 it attains 0\.900 marginal coverage but only 0\.542 in the worst entropy stratum, and Mondrian calibration raises that stratum to 0\.886 while reducing max disparity from 0\.358 to 0\.022\. No wrapper dominates, however\. Under smooth synthetic heterogeneity, several repairs are competitive; fixed\-map analyses show that rankings depend on the evaluation groups and protocol; and in a 12\-task comparison, Mondrian has lower disparity on its single target partition for all 12 tasks, whereas BatchMVP has lower disparity over overlapping groups on five\. These are empirical comparisons, not new coverage guarantees\. A controlled predictor\-bias sweep shows that removing predictor bias only partly reduces global\-threshold disparity\. We release task cards, result provenance, permitted derived arrays, and rebuild instructions, and treat wrapper selection as a diagnostic comparison rather than a universal ranking\.

## LowRankArena: A Standardized Evaluation Platform for SVD\-Based LLM Compression

**Authors:** Zishan Shao; Lixun Zhang; Kangning Cui; Wenhao Wu; Jinhee Kim; Yixiao Wang; Ting Jiang; Hancheng Ye; Qinsi Wang; Fan Yang; Danyang Zhuo; Hai Li; Yiran Chen

**ID:** 139091 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lh1VxugRWJ>) | [PDF](<https://openreview.net/pdf?id=lh1VxugRWJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139091>)

SVD\-based low\-rank compression has become a fast\-growing direction for reducing the memory and computational cost of large language models \(LLMs\)\. However, fair comparisons across existing studies remain challenging due to historically inconsistent baseline results that continue to propagate and substantial differences in evaluation protocols\. As a result, it remains unclear whether reported gains reflect method\-level improvements or differences in evaluation protocol\. This lack of comparability highlights the need for a unified, reproducible evaluation platform\. To address this problem, we present $\\textbf\{LowRankArena\}$, a standardized evaluation platform for SVD\-based LLM compression\. LowRankArena unifies cross\-methods evaluation settings \(e\.g\., task versions, compression ratio definition, inference setup\), and provides a reproducible pipeline with over 3 TiB reproduced checkpoints\. Using LowRankArena, our aligned audit of five representative SVD methods reveals that prior findings are highly conditional under standardized protocols: clear leaders and performance tiers shift across backbones and keep ratios, multiple\-choice accuracy can hide large perplexity degradation, and nominal low\-rank savings yield workload\-dependent and often limited end\-to\-end speedups\. Our code is available at: https://github\.com/Zishan\-Shao/lowrankarena\.git\.

## Computer Science Conferences Should Require Nonrepudiable Experimental Results

**Authors:** Mamadou K KEITA; Christopher Homan

**ID:** 140060 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UK7onMx1HA>) | [PDF](<https://openreview.net/pdf?id=UK7onMx1HA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140060>)

This position paper argues that computer science conferences should require tamper\-evident, nonrepudiable attestations of experimental results\. We name the underlying problem experiment nonrepudiation: a compliant protocol must bind the numbers in a paper to an actual executed computation in a way the author cannot later alter or deny\. The current system relies on self\-reported checklists, optional code sharing, and author\-controlled logging\. None of these mechanisms answer the question a reviewer cannot check: did the code the paper describes produce the numbers the paper reports? We define the problem formally, state the security properties any compliant protocol must satisfy, and describe a threat model that includes attacks current approaches do not prevent\. To show that the problem is solvable, we built K\-Veritas, a reference implementation in Go that produces signed reports without accessing training data\. K\-Veritas is a testbed, not a finished answer\. We call on conferences and the community to treat nonrepudiation as a first\-class requirement and to help build an open, independent standard for it\.

## Simple KNN\-Based Outlier Detection Achieves Robust Clustering

**Authors:** Tianle Jiang; Yufa Zhou

**ID:** 149298 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rGWj7JwpMU>) | [PDF](<https://openreview.net/pdf?id=rGWj7JwpMU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149298>)

Being robust to the presence of outliers is crucial for applying clustering algorithms in practice\. In the $\\textit\{robust $k$\-Means\}$ problem \(i\.e\., $k$\-Means with outliers\), the goal is to remove $z$ outliers and minimize the $k$\-Means cost on the remaining points\. Despite the close connection between robust $k$\-Means and outlier detection, both theoretical and empirical understanding of the effectiveness of $\\textit\{classic outlier detection heuristics\}$ for robust $k$\-Means remains limited\. In this paper, we prove that under a practical assumption on the optimal cluster sizes, simply removing points with large $K$\-Nearest\-Neighbor distances achieves performance comparable to prior work in terms of approximation guarantees: it yields a constant\-factor reduction from robust $k$\-Means to standard $k$\-Means, without introducing additional centers or discarding extra outliers, as is commonly required by existing approaches\. Empirically, experiments on real\-world datasets show that our method outperforms or matches several more sophisticated algorithms in terms of clustering cost and runtime\. These results demonstrate that simple KNN\-based heuristics can be surprisingly effective for robust clustering, highlighting new opportunities to bridge techniques from outlier detection and clustering\.

## Debiasing Sketched Ridge Regression: A Functional Estimation Perspective

**Authors:** Yucong Liu; Florian Schäfer

**ID:** 149463 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pvBnriJ4RH>) | [PDF](<https://openreview.net/pdf?id=pvBnriJ4RH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149463>)

We study sketched Ridge regression through the lens of functional estimation\. The sketched solution is a plug\-in estimator of a nonlinear function of a second\-moment/covariance matrix\. Within this framework, we analyze two classical bias\-reduction principles\-\-\-iterative Bootstrap and linear aggregation across multiple estimators\. We show that these resampling\-based procedures cancel low\-order bias terms and yield higher\-order bias decay in the sketch size without increasing the order of the computational complexity\.  Concretely, let $A\\in\\mathbb\{R\}^\{n\\times r\}$ have full column rank $r$ and let the sketch size be $s$\. For Gaussian sketching, a $k$\-step iterative Bootstrap estimator achieves bias of order $\(\\sqrt\{r/s\}\)^\{k\+2\}$\. For linear aggregation over $m$ plug\-in estimators with different sketch sizes, we obtain bias of order $\(\\sqrt\{r/s\}\)^\{m\+1\}$ for Gaussian sketching and corresponding result for common discrete sketches, including uniform and leverage score sampling\.

## DTCH Digital Turcologist Bootcamp: Evidence\-First, Evaluation\-First AI/ML for Under\-Resourced Historical Turkic Languages and Cultural Heritage Data

**Authors:** Şermin Kalafat; Yusuf Kılıç

**ID:** 137857 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137857>)

DTCH Digital Turcologist Bootcamp Historical Turkic languages, including Ottoman Turkish, Old Uighur, and Chagatai, are vastly underrepresented in the AI world\. Researchers in this field have lacked the shared benchmarks and documented datasets that make AI results comparable and reproducible\. This 12\-week online bootcamp addresses that directly, training 18–24 researchers, librarians, and heritage professionals to apply AI to historical manuscripts responsibly – building evidence packs, benchmark kits, and reproducible notebooks that anyone can verify\. All materials will be published openly so communities working with other under\-resourced historical languages can run the same program themselves\.

## DTCH Digital Turcologist Bootcamp: Evidence\-First, Evaluation\-First AI/ML for Under\-Resourced Historical Turkic Languages and Cultural Heritage Data

**Authors:** Şermin Kalafat; Yusuf Kılıç

**ID:** 137851 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/137851>)

DTCH Digital Turcologist Bootcamp Historical Turkic languages, including Ottoman Turkish, Old Uighur, and Chagatai, are vastly underrepresented in the AI world\. Researchers in this field have lacked the shared benchmarks and documented datasets that make AI results comparable and reproducible\. This 12\-week online bootcamp addresses that directly, training 18–24 researchers, librarians, and heritage professionals to apply AI to historical manuscripts responsibly – building evidence packs, benchmark kits, and reproducible notebooks that anyone can verify\. All materials will be published openly so communities working with other under\-resourced historical languages can run the same program themselves\.

## Optimal Contextual Pricing under Agnostic Non\-Lipschitz Demand

**Authors:** Jianyu Xu; Yu\-Xiang Wang

**ID:** 150624 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=giaq1R0M4q>) | [PDF](<https://openreview.net/pdf?id=giaq1R0M4q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150624>)

We study contextual dynamic pricing with linear valuations and bounded\-support agnostic noise, whose induced demand curve may be non\-Lipschitz with arbitrary jumps and atoms\. Such discontinuities break the cross\-context interpolation arguments used by smooth\-demand pricing algorithms, while the best previous method achieved only $\\widetilde O\(T^\{3/4\}\)$ regret\. We propose Conservative\-Markdown Redirect\-UCB Pricing, a polynomial\-time algorithm that combines randomized parameter estimation, conservative residual\-grid probing, and confidence\-based one\-step redirection\. Our algorithm achieves $\\widetilde O\(T^\{2/3\}\)$ optimal regret, matching the known lower bounds of Kleinberg and Leighton \(2003\) up to logarithmic factors and improving over the previous upper bound of Xu and Wang \(2022\)\. Under stochastic well\-conditioned contexts, this closes the long\-existing open regret gap in linear\-valuation contextual pricing under agnostic non\-Lipschitz noise distribution\.

## A second order regret bound for NormalHedge

**Authors:** Yoav S Freund; Nicholas Harvey; Victor S\. Portella; Yabing Qi; Yu\-Xiang Wang

**ID:** 153089 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=O42j6ibmbL>) | [PDF](<https://openreview.net/pdf?id=O42j6ibmbL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153089>)

We consider the problem of prediction with expert advice for \`\`easy'' sequences\. We show that a variant of NormalHedge enjoys a second\-order $\\epsilon$\-quantile regret bound of $ O\\big\(\\sqrt\{V\_T \\log\(V\_T/\\epsilon\)\}\\big\) $  when $V\_T &gt; \\log N$, where $V\_T$ is the cumulative second moment of instantaneous per\-expert regret averaged with respect to a natural distribution determined by the algorithm\. The algorithm is motivated by a continuous time limit using Stochastic Differential Equations\. The discrete time analysis uses self\-concordance techniques\.

## A low\-rank decoder bottleneck bounds reliability in foundation\-model perturbation prediction

**Authors:** Zheyu Zhang; Yuanhao Huang; Fan Feng; Jie Liu

**ID:** 154415 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DjV66HdJ1r>) | [PDF](<https://openreview.net/pdf?id=DjV66HdJ1r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154415>)

Foundation\-model\-based predictors of perturbation response are evaluated primarily by aggregate accuracy, yet lack principled per\-prediction reliability criteria\. We audit the state\-transition \(ST\) decoder\~\\citep\{adduri2025predicting\} shared by recent predictors across three encoders and four cell lines under CRISPRi perturbation, and identify a rank\-$1$ attention bottleneck whose leading direction maps in gene space to the same cycling/p53 stress\-response program in every cell line tested\. The bottleneck implies a distance\-defined reliability boundary: per\-prediction quality degrades smoothly with the gene\-space distance from a model's predicted perturbation response \($\\Delta$, the predicted change relative to control\) to its nearest training $\\Delta$, and biological\-family identity, not training\-pool size, drives held\-out quality\. We propose \\emph\{predicted\-NN\-distance\}, this same distance computed from model output alone, as a per\-prediction trust signal that tracks per\-perturbation quality at Spearman $\|\\rho\| \\approx 0\.81$ \(oracle $0\.88$\) and admits a single pooled threshold that transfers across cells and encoders under leave\-one\-out evaluation\. The signal outperforms a simpler predicted\-magnitude baseline in most cases\. Per\-prediction reliability is bounded by a low\-rank decoder geometry and by gene\-space coverage of training perturbations, not by aggregate benchmark accuracy\.

## Computationally sufficient statistics for Ising models

**Authors:** Abhijith Jayakumar; Shreya Shukla; Marc Vuffray; Andrey Lokhov; Sidhant Misra

**ID:** 155651 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=41qmmeIDx9>) | [PDF](<https://openreview.net/pdf?id=41qmmeIDx9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155651>)

Learning Gibbs distributions using only sufficient statistics has long been recognized as a computationally hard problem\. On the other hand, computationally efficient algorithms for learning Gibbs distributions rely on  access to full sample configurations generated from the model\. For many systems of interest that arise in physical contexts, expecting a full sample to be observed is not practical, and hence it is important to look for computationally efficient methods that solve the learning problem with access to only a limited set of statistics\. We examine the trade\-offs between the power of computation and observation within this scenario, employing the Ising model as a paradigmatic example\. We demonstrate that it is feasible to reconstruct the model parameters for a model with $\\ell\_1$ width $\\gamma$ by observing statistics up to an order of $O\(\\gamma\)$\. This approach allows us to infer the model's structure and also learn its couplings and magnetic fields\. We also discuss a setting where prior information about structure of the model is available and show that the learning problem can be solved efficiently with even more limited observational power\.

## Understanding Circulant Permutation to Extend the CMinHash Estimator

**Authors:** Keegan Kang; Avery Hood; Benedict H Wong

**ID:** 153085 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=O5BCQi5wAf>) | [PDF](<https://openreview.net/pdf?id=O5BCQi5wAf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153085>)

CMinHash promises a new direction for designing MinHash algorithms with reduced variance and storage space via circulant permutations\. However, the original variance analysis is difficult to extend to other MinHash estimators\. We present a new approach that gives explicit and easily comparable approximate variance expressions, and use it to analyze the Minner estimator\. Numerical experiments show that our variance expression matches the empirical mean square error \(MSE\) of estimates\. Our work thereby demonstrates how to apply circulant permutation to other MinHash estimators and compute their approximate variance\.

## Risk\-Averse Online POMDP Planning via CVaR of the Immediate Cost with Performance Guarantees

**Authors:** Yaacov Pariente; Vadim Indelman

**ID:** 148872 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uYhSEnNKIx>) | [PDF](<https://openreview.net/pdf?id=uYhSEnNKIx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148872>)

Online POMDP planners optimize the expected cumulative cost, which can mask dangerous states when the belief places significant mass on high\-cost states\. Existing risk\-averse methods apply static or dynamic Conditional Value at Risk \(CVaR\) to the value function, capturing trajectory\-level risk, but share two gaps: \(i\) by retaining the immediate cost as an expectation of a state\-dependent cost over the belief, the risk \\emph\{within\} the belief is left unaddressed; and \(ii\) by modifying the value function, they require new tailored algorithms rather than reusing existing expectation\-based planners\. We instead apply CVaR to the immediate cost over the belief at each step, directly targeting per\-step uncertainty about the current state\. The standard expected cumulative return is retained as the objective, so the resulting problem has a standard MDP structure: any expectation\-based POMDP planner can be made risk\-sensitive by changing only the cost computation\. We inherit finite\-time guarantees for policy evaluation and sparse sampling\-\-\-with estimation error independent of the risk level\-\-\-and, as our central theoretical result, prove a finite\-time bound on the gap between the particle belief MDP surrogate and the original POMDP, which together yield an end\-to\-end guarantee from the true POMDP value to the algorithmic estimate\. In the risk\-neutral limit, the formulation recovers standard expectation\-based planning\.

## Massively Parallel Exact Inference for Hawkes Processes

**Authors:** Ahmer Raza; Hudson Smith

**ID:** 155267 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6yoruSsZzc>) | [PDF](<https://openreview.net/pdf?id=6yoruSsZzc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155267>)

Multivariate Hawkes processes are a widely used class of self\-exciting point processes, but maximum likelihood estimation naively scales as $O\(N^2\)$ in the number of events\. The canonical linear exponential Hawkes process admits a faster $O\(N\)$ recurrence, but prior work evaluates this recurrence sequentially, without exploiting parallelization on modern GPUs\. We show that the Hawkes process intensity can be expressed as a product of sparse transition matrices admitting a linear\-time associative multiply, enabling computation via a parallel prefix scan\. This yields a simple yet massively parallelizable algorithm for maximum likelihood estimation of linear exponential Hawkes processes\. Our method reduces the computational complexity to approximately $O\(N/P\)$ with $P$ parallel processors, and naturally yields a batching scheme to maintain constant memory usage, avoiding GPU memory constraints\. Importantly, it computes the exact likelihood without any additional assumptions or approximations, preserving the simplicity and interpretability of the model\. We demonstrate orders\-of\-magnitude speedups on simulated and real datasets, scaling to thousands of nodes and tens of millions of events, substantially beyond scales reported in prior work\. We provide an open\-source PyTorch library implementing our optimizations\.

## No One Knows the State\-of\-the\-Art in Geospatial Foundation Models

**Authors:** Isaac Corley; Caleb Robinson; Nils Lehmann; Gabriel Tseng; Anthony Fuller; Hamed Alemohammad; Evan Shelhamer; Jennifer Marcus; Hannah Kerner

**ID:** 140061 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U9fAHB63gc>) | [PDF](<https://openreview.net/pdf?id=U9fAHB63gc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140061>)

Geospatial foundation models \(GFMs\) have been proposed as generalizable backbones for disaster response, land\-cover mapping, food\-security monitoring, and other high\-stakes Earth\-observation tasks\. Yet the published work about these models does not give reviewers or users enough information to tell which model fits a given task\. We argue that nobody knows what the current state of the art is in geospatial foundation models\. The methods may be useful, but the GFM literature does not standardize evaluations, training and testing protocols, released weights, or pretraining controls well enough for anyone to compare or rank them\. In a 152\-paper audit, we find 46 cross\-paper disagreements of at least 10 points for the same model, benchmark, and protocol; 94/126 papers with extractable pretraining data use a configuration no other paper uses; and 39\\% of GFM papers release no model weights\. This lack of community standards can be solved\. We propose six concrete expectations: named\-license weight release, shared core evaluations, copied\-versus\-rerun baseline annotations, variance reporting, one shared evaluation harness, and data\-vs\-architecture\-vs\-algorithm controls\. These gaps are a coordination failure, not a fault of any individual lab; the authors of this paper, like many others in the GFM community, have contributed to them\. Rather than just critiquing the community, we aim to provide concrete steps toward a shared understanding of how to innovate GFMs\.

## Progressive Risk Estimation for Accident Anticipation

**Authors:** Samet Hicsonmez; Eray Çakar; Nermin Samet; Fatma Guney

**ID:** 151350 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bC3MYVBMHi>) | [PDF](<https://openreview.net/pdf?id=bC3MYVBMHi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151350>)

Accident anticipation aims to recognize anomalous driving cues before a crash while avoiding false alarms during normal driving\. Existing approaches typically formulate this task as binary classification, focusing on whether an accident will occur rather than when it will occur\. We propose PRE\-ACT, a framework that models accident risk as a continuously evolving signal that increases as the crash approaches\. By explicitly enforcing temporal ordering and distance\-to\-accident awareness, our method progressively raises risk while suppressing premature alarms, leading to significant improvements on MM\-AU subsets and Nexar\. We further introduce a Separation Score to evaluate the global behavior of predicted risk curves beyond local temporal windows\. Code and visualizations are available\.

## Agents' Last Exam

**Authors:** Yiyou Sun; Xinyang Han; Weichen Zhang; Yuanbo Pang; Tianyu Wang; Yuhan Cao; Yixiao Huang; Christopher Duroiu; Haoyun Zhang; Jeffrey Lin; Weishu Zhang; Tianren Zeng; Ying Yan; Bo Liu; Hanson Wen; Mingyang Xu; Xiaoyuan Liu; Zimeng Chen; Weiyan Shi; Amanda Dsouza; Vincent Chen; Yushan Li; Wenxi Deng; Huiqi Wang; Justin Xu; Tao Sun; Zhun Wang; Chris Liu; Yafei Cheng; Rongwang Hu; Aras Bacho; Shengcao Cao; Zengyi Qin; Yixiong Chen; Hengduan Fan; Hao Liu; Lin Zeng; Shashank M Bharadwaj; Litian Gong; Maojia Song; Ruheng Wang; Zongzheng Zhang; Jianhong Tu; Zhonghua Wang; Zheng Zhang; Zijiao Chen; Yanqiong Jiang; Zhendong Li; Bohan Lyu; Ma Chang; Peiran Xu; Benran Zhang; Shangding Gu; Haoyue Hua; Haoyang Li; Wanzhe Liao; Chengzhi Liu; Junbo Peng; Zechen Xu; Bo Chen; Jiayi Cheng; Yi Jiang; Maggie Kuang; Yuan Li; Youbang Pan; Ziyan Rao; Alexander Schubert; Ivan Shen; Vincent Siu; Xiatao Sun; Xiaopan Zhang; Yuchen Zhu; Ishaan S Chandok; Lei Ding; Jingxuan Fan; Andrew Glover; Jiaming Hu; Yiran HU; Wenbo Huang; Haoran Jin; Lukas Kim; Ming Liu; Alireza Rafiei; Kunyang Sun; Ting Sun; Yingze Wang; Yixin Wang; Hanwen Xing; Sihan Xu; Yuzheng Xu; Zhongxing Xu; Zhiling Yan; Boqin Yuan; Ruiqi Zhang; Yifan Zhang; Zibo Zhao; Haoyue Bai; Carlo Bosio; Joe Cavanagh; Tianxing Chen; Yipu Chen; CHENYU ZHU; Chen Dai; Stefano De Castro; Yunfu Deng; Kaustubh Dhole; Jiayuan Ding; Chenchen Du; Zhehang Du; Hao Fan; Run\-Ze Fan; Hengyu Fu; Shi Gu; Yifan Gu; Baihe Huang; Baixiang Huang; Ran Jin; Xin Lan; Joseph Lee; Deren Lei; Chenyu Li; Daofeng Li; Jingyan Li; Yi Li; Yuangang Li; Zhixu Li; Yinsheng Li; Wenyu Liang; Longtai Liao; Kevin Qinghong Lin; Zeyi \(Andy\) Liu; Jiaming Liu; Kaiyuan Liu; Xuan Liu; Pan Lu; Yicheng Lyu; Qiuyang Mang; Kyle Montgomery; Ruoxi Ning; Jorin Overwiening; Xu Pan; Core Francisco Park; Justin Purnomo; Scott Rankin; Bixuan Ren; HaoYang Shang; Hejia Shen; JIAWEI SHEN; Shi Qiu; Tianneng Shi; Jonah So; Vladislav Susoy; Haocheng Wang; Jialu Wang; Wei Wang; Xinyu J Wang; Zehao Wang; Ruoxi Wu; Dehao Wu; Fangyu Wu; Mengyuan Wu; Yu Wu; Yuchen Wu; Yuhao Wu; Qingpo Wuwu; Weihang Xiao; Yongyi Xiong; Fan Xu; Ruiling Xu; Mingxuan Yan; Benjamin Yang; Jirong Yang; Xiaoli Yang; Yushi Yang; Haoran Ye; Xiaohu Yu; Zhengming Yu; Chenlong Zhang; Chi Zhang; Hanning Zhang; Hanwen Zhang; Junge Zhang; Kunpeng Zhang; Song Zhang; Wenjin Zhang; Wenshuo Zhang; Qijian Zhao; Yimin Zhao; Yuhaohua Zheng; Liwei Zhou; Tianyue Zhou; Sichen Zhu; Yan Zhu; Yishu Zhu; Jerry Zuo; Chonghao Cai; Helena Casademunt; Cheng Cheng; Nawen Deng; Rao Fu; Yifan Han; He Ren; Zhenyu He; Qiao Jin; Langlang Li; Yuetai Li; Lu Lu; Luqing Zhou; Subhabrata Mukherjee; Yunqi Ouyang; Yin Ren; Dawei Shi; Haoran Wu; Zhiyue Wu; Hannah Yao; Zhuoran Yi; Jenny Yu; Rhea Zhan; Hang Zhou; Shiqiao Zhu; Junfan Zhu; Zhen Dong; Ali Emami; Yanjun Gao; Haimin Hu; Erika J Schneider; Zhenglu Li; Jiachen Li; Lihui Liu; Murphy Niu; Yi Shao; Wenqi Shi; Lichao Sun; Jianxin Sun; Chenguang Wang; Xuhai &amp;amp;quot;Orson&amp;amp;quot; Xu; Huaxiu Yao; Aylin Caliskan; Jing Huang; Yang Liu; Mark W Mueller; Russell Poldrack; Sanjiv R Das; Zhiyong Lu; Radha Poovendran; Somayeh Sojoudi; Costas J Spanos; Molei Tao; Mikko Tolonen; Ting Wang; Alan Yuille; Patrick Bryant; Carl Boettiger; Arvind Rao; Tapio Schneider; Georgios N Yannakakis; Laure Zanna; Ida Sim; Tarek Zohdi; Jack Gallant; Teresa Head\-Gordon; Dawn Song

**ID:** 139517 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L1pAwhCE4k>) | [PDF](<https://openreview.net/pdf?id=L1pAwhCE4k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139517>)

Recent AI systems achieve strong results on many benchmarks, yet these gains have not translated into economically meaningful deployment across professional domains\. We argue that this gap is largely an evaluation problem: existing benchmarks rarely measure sustained performance on real, economically valuable workflows\. We introduce Agents’ Last Exam \(ALE\), a benchmark for evaluating generalist computer\-use AI agents on long\-horizon professional tasks with verifiable outcomes\. ALE is developed in collaboration with 250\+ industry experts and organized around a taxonomy grounded in O\*NET / SOC 2018\. The benchmark spans 55 subdomains across 13 industry clusters and currently contains 1,490 task instances sourced from authentic professional workflows\. Tasks require integrated GUI interaction, shell execution, software operation, and long\-horizon planning inside real computing environments\. To support scalable evaluation, ALE uses deterministic deliverable\-based scoring and structured rubric verification rather than open\-ended human judgment whenever possible\. Experimental results show that current frontier agents remain far from saturation: across mainstream harness and backbone configurations, the average full\-pass rate on the hardest tier is only 2\.6%\. More broadly, ALE is intended not merely as another leaderboard, but as an instrument for measuring the gap between benchmark success and GDP\-relevant impact\.

## A Control\-Theoretic Approximation to Predictive Coding Dynamics

**Authors:** Ryan Fayyazi; Kyle Daruwalla; Mitra Javadzadeh

**ID:** 154268 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F4cKpRSPTz>) | [PDF](<https://openreview.net/pdf?id=F4cKpRSPTz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154268>)

Backpropagation remains the dominant method for training deep neural networks, but its reliance on non\-local computations has motivated the search for biologically plausible alternatives\. Two prominent frameworks, predictive coding \(PC\) and deep feedback control \(DFC\), offer distinct approaches to local learning, yet their relationship remains unclear\. Here, we show that DFC arises as a local approximation to predictive coding dynamics near fixed points, with exact equivalence in shallow linear networks and controlled deviations arising with depth, nonlinearity, and distance from equilibrium\. Building on this connection, we introduce Approx PC, a practical algorithm that replaces layer\-wise error propagation in PC with a centralized feedback controller operating over a sequence of intermediate subgoals\. Empirically, Approx PC recovers solutions consistent with predictive coding, while converging faster and achieving improved accuracy in our experiments\. Our results unify energy\-based and control\-theoretic perspectives on learning and suggest a computationally efficient approach to training predictive coding networks through control\-inspired dynamics\.

## Statistical Query Lower Bounds for Smoothed Agnostic Learning

**Authors:** Ilias Diakonikolas; Daniel Kane

**ID:** 155283 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6hhDfof6s0>) | [PDF](<https://openreview.net/pdf?id=6hhDfof6s0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155283>)

We study the complexity of smoothed agnostic learning,  in which the learner competes with the best classifier in a target class  under slight Gaussian perturbations of the inputs\. Specifically,  we focus on the prototypical task of agnostically learning halfspaces  under subgaussian distributions in this model\. The best known upper bound for this problem  is based on $L\_1$\-polynomial regression and has complexity  $d^\{\\tilde O\(1/\\sigma^2\)\\log\(1/\\epsilon\)\}$, where $\\sigma$ is the smoothing parameter  and $\\epsilon$ is the excess error\. Our main result is a Statistical Query \(SQ\) lower bound  showing that this upper bound is close to best possible\. In particular, we prove that,  even for Gaussian marginals, any SQ algorithm for smoothed agnostic learning of halfspaces  requires complexity $d^\{\\Omega\(1/\\sigma^2\+\\log\(1/\\epsilon\)\)\}$\.  This is the first non\-trivial computational lower bound for this task,  and it nearly matches the known upper bound\.  At a conceptual level, we show that the complexity of the problem is governed  by the low\-degree $L\_1$ approximation of the smoothed target $T\_\\sigma f$,  so that applying $L\_1$\-polynomial regression to the smoothed function is essentially optimal  in the SQ model\. Our proof proceeds by constructing a moment\-matching hard distribution  via linear programming duality; the dual program corresponds exactly to finding  a low\-degree approximating polynomial for $T\_\\sigma f$, which is the same  approximation\-theoretic condition underlying the upper bound\. To instantiate this framework for halfspaces, we prove explicit lower bounds  on the approximation degree of the smoothed sign function\. A key ingredient  is a new structural result: we construct a distribution that matches moments  with a Gaussian while exhibiting periodic structure\.  This result underlies our $1/\\sigma^2$\-degree lower bound and may be of independent interest\.

## Learning Orthogonal Multi\-Index Models Beyond Small Initialization: Incremental Learning, Competitive Dynamics and Symmetry

**Authors:** Mo Zhou; Weihang Xu; Simon Du; Maryam Fazel

**ID:** 153694 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JTCKK9Yv5n>) | [PDF](<https://openreview.net/pdf?id=JTCKK9Yv5n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153694>)

Recent work has identified incremental learning in shallow networks trained on single\-index and multi\-index models\. However, existing analyses often rely on simplifying settings, such as small initialization, correlation loss, or layer\-wise training\. These choices reduce neuron interactions and leave some feature learning dynamics under standard initialization unexplored\. We study gradient flow dynamics for polynomial\-width two\-layer networks learning orthogonal multi\-index targets under standard initialization using polynomially many samples\. We first prove that incremental learning still occurs: the loss decreases sequentially according to the Hermite expansion of the target, with lower\-order components learned before higher\-order components recover the individual target directions\. In this standard initialization regime, training also shows a competitive reallocation of parameter mass: after the total mass fits the target mean and stabilizes, mass shifts into the target subspace and then concentrates on aligned neurons\. Technically, we introduce a symmetry\-based finite\-width approximation via symmetrized networks, rather than comparing directly with an infinite\-width limit\. This yields better control of approximation errors and may be of independent interest\.

## Approximate Matrix–Vectors Under a Bounded $\\ell\_1$ Assumption and Applications to Kernel Matrices

**Authors:** Rikhav Shah; Sandeep Silwal; Tony C Wang

**ID:** 150755 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fdnwYRqXgU>) | [PDF](<https://openreview.net/pdf?id=fdnwYRqXgU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150755>)

Matrix\-vector products \(MVPs\) are a key primitive in numerical linear algebra and machine learning\. However, the naive quadratic running time for exact computation is prohibitive for large matrices, motivating approximate methods\. In this paper, we study approximate MVPs under a natural \`\`lightness'' assumption, which bounds the total $\\ell\_1$\-mass of a $n \\times n$ input matrix $A$ by $\\gamma n$\. For general matrices, we give an algorithm for approximating $Ax$ up to additive $\\epsilon \\\|x\\\|\_2$ error in $O\(\\gamma n^\{1\.5\}/\\epsilon\)$ query time and polynomial preprocessing\. We extend this algorithm to kernel matrices by establishing a black\-box reduction to Kernel Density Estimation data structures and analyzing a noisy entry sampling scheme\. For kernel matrices, our algorithm does not require any preprocessing and improves the best\-known running times for Gaussian kernel matrices of \[Indyk, Kapralov, Sheth, Wagner; ICLR \`25\] by polynomial factors in $n$ and $1/\\epsilon$, and also provides the first algorithms leveraging the lightness assumption for other kernel functions as well\.

## High Probability Risk Control for Online Policy Learning

**Authors:** Yihong Guo; Drew Prinster; Suchi Saria; Anqi Liu

**ID:** 150738 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fklVyus79k>) | [PDF](<https://openreview.net/pdf?id=fklVyus79k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150738>)

We study risk control for online policy learning, where an agent adaptively collects data and aims to learn a new policy where the risk is below a tolerance threshold at every round with a high probability\. Such policy updates and data collection induce feedback covariate shift \(FCS\): the observed data depend on the history through the evolving policies and data\-collection process\. FCS brings two substantive problems for risk control: 1\) efficient risk evaluation for each candidate policy and 2\) valid policy selection with high probability risk control\. To address these, we propose an efficient permutation\-based weighted risk evaluator based on the Sinkhorn algorithm and select policies whose estimated risk upper confidence bounds \(UCB\) fall below the target threshold, with the UCB obtained through a proposed Gaussian bootstrap method\. Theoretically, we prove that our risk evaluator's worst\-case variance is no greater than that of the standard importance\-weighted evaluator\. Also, our policy control method yields an asymptotically valid simultaneous risk bound and provides asymptotic high\-probability risk control for the selected policy\. Empirically, our method maintains the target risk level, achieves lower risk than baseline methods, has lower variance in risk estimation, and enables reliable policy selection with high\-probability risk control\.

## Stable Continuous\-Time Consistency Distillation: An Empirical Study with a Multistep Extension

**Authors:** Vinay Saji Mathew; Soundar Kumara; Gretta Kellogg; William KM Lai

**ID:** 157019 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/session/137650>)

Continuous\-time consistency models are an attractive route to few\-step generation\. They remove the discretization error inherent to the timestep grid that discrete\-time consistency models depend on\. Until recently, however, training them was unstable\. Lu &amp; Song \(2025\) address this with the TrigFlow formulation and a coordinated set of architectural and training\-objective changes\. We conduct an independent empirical study of this framework on CIFAR\-10 and ImageNet\-64\. No open\-weight TrigFlow teachers exist at these scales, so we train them from scratch and then verify the consistency distillation \(sCD\) and consistency training \(sCT\) behavior of students initialized from these teachers\. On CIFAR\-10, our students reproduce the reported FID at one and two steps\. On ImageNet\-64, they fall short, a gap that appears related to our teacher and to architectural choices the paper leaves unspecified\. We also report a parameter\-count gap of about 5% between the model size stated in the paper and a faithful re\-implementation, which we attribute to the scale\-and\-shift conditioning projections in Adaptive Double Normalization\. We then propose Multistep sCD \(MS\-sCD\), a continuous\-time, segment\-conditioned multistep generalization of sCD\. The segment\-conditioning idea is borrowed from the discrete\-time multistep consistency distillation of Heek et al\. \(2024\); we build on their preliminary continuous\-time experiments within the TrigFlow/sCM framework\. The rest of the algorithm follows sCD\. MS\-sCD replaces sCM's two\-step intermediate time with a fixed segment\-boundary schedule and recovers sCD at M = 1\. We report FID at M = 2, 4, 8 and compare against the discrete\-time MSCD baseline\. Code, model weights, and training scripts are available on GitHub \(Mathew et al\., 2026\)\.

