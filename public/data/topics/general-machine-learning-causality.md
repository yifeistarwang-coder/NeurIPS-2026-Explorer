# General Machine Learning / Causality

通用机器学习 / 因果学习

102 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Controllable Generative Sandbox for Causal Inference

**Authors:** Qi Zhang; Harsh Parikh; Ashley I Naimi; Razieh Nabi; Christopher Kim; Timothy L Lash

**ID:** 155513 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=52BMkNkLA7>) | [PDF](<https://openreview.net/pdf?id=52BMkNkLA7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155513>)

Method validation and study design in causal inference rely on synthetic data with known counterfactuals\. Existing simulators trade off \*distributional realism\*, the ability to capture mixed\-type and multimodal tabular data, against \*causal controllability\*, including explicit control over overlap, unmeasured confounding, and treatment effect heterogeneity\. We introduce \*\*CausalMix\*\*, a variational generative framework that closes this gap by coupling a mixture of Gaussian latent priors with data\-type\-specific decoders for continuous, binary, and categorical variables\. The model incorporates explicit causal controls: an overlap regularizer shaping propensity\-score distributions, alongside direct parameterizations of confounding strength and effect heterogeneity\. This unified objective preserves fidelity to the observed data while enabling factorial manipulation of causal mechanisms, allowing overlap, confounding strength, and treatment effect heterogeneity to be varied independently at design time\. Across evaluation settings, \*\*CausalMix\*\* achieves strong distributional fidelity on mixed\-type tables while providing stable, fine\-grained causal control\. We demonstrate practical utility in a comparative safety study of metastatic castration\-resistant prostate cancer treatments, using \*\*CausalMix\*\* to compare estimators under calibrated data\-generating processes, tune hyperparameters, and conduct simulation\-based power analyses under targeted treatment effect heterogeneity scenarios\.

## Phase Space Attention: A Hairer Lift Resolves the Single\-Layer Induction Obstruction

**Authors:** Kingsuk Maitra; Shagun Sood; Morteza Hosseini; Suman Gunnala; Vikram Gupta

**ID:** 149119 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sk3TDpwOR9>) | [PDF](<https://openreview.net/pdf?id=sk3TDpwOR9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149119>)

We resolve the Sanford\-Hsu\-Telgarsky \(SHT\) single\-layer induction obstruction within the linear, one\-step, causal, bilinear, symplectically consistent design class C\_PSA on the post\-RoPE substrate, by lifting standard transformer attention onto a symplectic phase space in direct correspondence with Hairer’s lift of Stormer\-Verlet onto a one\-step symplectic integrator\. The reframing recasts SHT as a filter\-order gap: a standard one\-layer bilinear score realises a z\-transform of joint order \(0,0\), whereas the induction discriminator requires \(1,1\)\. We close the gap by applying the symplectic upper shear M\_gamma : \(q,p\) \-&gt; \(q \+ gamma p, p\) to the post\-RoPE query and key streams\. We prove that this lift is the unique solution within C\_PSA \(Theorem 4\); is operator\-level symplectic with zero secular drift \(Theorem 6\); requires post\-RoPE placement \(Corollary 7\); and, under explicit Assumption Set A, induces a closed\-form induction phase transition at gamma\_c = \(d\_k log\(T\-1\)\)^\(1/4\) \(Theorem 8\)\. The SHT lower bound binds where total parameter budget approaches the bit budget of the two\-layer induction circuit it forbids: negligible at frontier scale \(&gt;= 1B\), but decisive in the sub\-100M regime that ships in the billions on consumer edge form factors – phones, wearables, microcontrollers, embedded controllers – where it governs whether on\-device in\-context learning is feasible\. We work at 4\-92M by design\. We report 74\.2% single\-layer induction at gamma = 2\.0, Pearson r &gt;= 0\.998 for the closed\-form transfer function, r = \-0\.679 for the embedding\-axis low\-pass induction filter; and the post\-softmax map Frechet\-linearises to Differential Transformer \(Ye et al\., 2024\) at first order under the small\-signal regime \(SS\)\.

## PRIM: Meta\-Learned Bayesian Root Cause Analysis

**Authors:** Christopher Lohse; Anish Dhir; Amadou Ba; Bradley Eck; Marco Ruffini; Jonas Wahl

**ID:** 150891 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=edcYZi5wbN>) | [PDF](<https://openreview.net/pdf?id=edcYZi5wbN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150891>)

Root cause analysis \(RCA\) in complex systems is challenging due to error propagation across multiple variables, the need for structural causal knowledge, and the computational cost of inference at test time\. We introduce PRIM \(Prior\-fitted Root cause Identification with Meta\-learning\), a causal meta\-learning approach that frames RCA as a Bayesian inference task over a synthetic prior of causal models\. By marginalising out structural uncertainty, PRIM implicitly identifies changes in the data\-generating mechanism between baseline and anomalous periods\. In doing so, PRIM infers distributional differences without explicit statistical testing, and implicitly learns causal structure without model fitting at test time\. Following the simulation\-based meta\-learning paradigm of prior\-fitted networks, PRIM uses a Model\-Averaged Causal Estimation \(MACE\) transformer neural process that jointly attends over observational and anomalous samples and the causal structure of nodes, enabling zero\-shot inference in 17\\,ms for systems with up to 100 variables\. Across synthetic benchmarks and two realistic benchmark datasets, PetShop and CausRCA, PRIM is competitive  with methods that are aware of the system's causal graphical structure a priori while outperforming graph\-unaware methods on several tasks\. Lightweight fine\-tuning to specific domains and data dynamics improves performance further\.

## Counterfactual Estimation under Composite Treatments via Progressive Distribution Alignment

**Authors:** Abhirup Mondal; Anirban Majumder; Vineet Chaoji

**ID:** 151311 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bQvJDLN27X>) | [PDF](<https://openreview.net/pdf?id=bQvJDLN27X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151311>)

Estimating counterfactual outcomes when multiple treatments are applied simultaneously, the composite treatment setting, is fundamentally harder than the single\-cause case: the treatment space grows combinatorially, most combinations are unobserved, and confounding is entangled across dimensions\. We propose PACE \(Progressive Alignment for Composite Effects\), which exploits a known causal DAG over treatment variables to progressively transform the observational data distribution into the target interventional distribution\. PACE performs K sequential augmentation steps in reverse topological order, each isolating a single treatment component and conditioning only on its parents in the DAG\. We derive the closed\-form optimal augmentation density minimizing KL divergence at each step, establish finite\-sample bounds prescribing the augmentation budget via DAG\-aware selection bias ratios, and show that the DAG provides a deterministic processing order that eliminates the need for random permutation averaging\. On semi\-synthetic benchmarks with real covariates \(IHDP, Twins, Hillstrom\) and controlled synthetic environments, PACE substantially outperforms seven baselines on both continuous and binary outcomes, with the largest gains on rare treatment combinations where confounding is most severe\. Ablations confirm consistent improvements over the closest prior method across varying DAG topologies, confounding strengths, and under DAG misspecification\.

## Root Cause Analysis of Measurement and Mechanistic Anomalies

**Authors:** Hendrik Suhr; David Kaltenpoth; Jilles Vreeken

**ID:** 155790 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2sxylzR1R2>) | [PDF](<https://openreview.net/pdf?id=2sxylzR1R2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155790>)

Root cause analysis of anomalies aims to identify how and why a sample deviates from the normal process\.  Existing methods primarily focus on telling which features are responsible, ignoring that anomalies can arise through two fundamentally different processes: measurement errors, where the sample is generated normally but one or more values is recorded incorrectly, and mechanism shifts, where the causal process that generated the sample was changed\. While measurement errors can often be safely corrected, mechanistic anomalies require careful consideration\. In this paper, we  formally define a causal model that explicitly captures both types by treating outliers as latent interventions on latent \(“true”\) and observed \(“measured”\) variables and show under which conditions the distinction is possible\. Based on this model, we develop an efficient inference procedure for localizing root causes and distinguishing anomaly types\. Experiments on synthetic and real\-world data show that our method provides state\-of\-the\-art and highly robust performance in both root cause localization and classification of anomaly types\.

## Attention\-Based Pretraining for Unsupervised Amortized Causal Discovery

**Authors:** Naiyu Yin; Tian Gao; Yue Yu

**ID:** 153811 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IWyVTvkGab>) | [PDF](<https://openreview.net/pdf?id=IWyVTvkGab>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153811>)

Directed Acyclic Graphs \(DAGs\) are foundational to many areas of AI research, providing a formal language for causal reasoning and model interpretability\. However, learning DAGs remains  challenging, due to  super\-exponential computational cost and diminished accuracy in small sample regimes\. To address these challenges, we introduce Attention\-DAG \(ADAG\), a novel linear transformer architecture for unsupervised amortized DAG learning\. Unlike traditional unsupervised DAG learning methods which recover the graph structure from data of each individual domain, ADAG leverages the knowledge from multiple domains\. It provides a nonlinear mapping from observational data of each domain to both the corresponding graph structure and the underlying parameters of Structural Equation Models \(SEMs\)\. This enables efficient zero\-shot inference of causal structures in new domains with unseen SEM parameters\. Remarkably, we demonstrate that for DAG learning problem attention acts as a fixed\-point iterative scheme, so the training on multiple domains effectively discovers an efficient solver for the constraint optimization problem\. Extensive evaluations on synthetic and realistic benchmarks demonstrate that ADAG significantly outperforms existing baselines in accuracy and efficiency, particularly when data is scarce\.

## Long\-Lived AI Agents Age Too: They Quietly Decay After Deployment

**Authors:** Jianing Zhu; Yeonju Ro; John Robertson; Kevin Wang; Junbo Li; Haris Vikalo; Aditya Akella; Zhangyang &amp;amp;quot;Atlas&amp;amp;quot; Wang

**ID:** 148330 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ye3N1zTJyc>) | [PDF](<https://openreview.net/pdf?id=ye3N1zTJyc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148330>)

The reliability of any long\-running system degrades over time: databases accumulate stale indices, software accrues technical debts, and human memory fades with age\. Memory\-enabled agents are no exception: Even with frozen weights, their system state continues to change as they accumulate context across sessions, and their ability to store, retrieve, and apply knowledge deteriorates in ways that standard snapshot evaluation cannot capture\. Recent benchmarks have begun to measure static degradation over long\-horizon tasks, yet they do not diagnose \*what kind\* of degradation occurs, \*where\* in the agent memory architecture it originates, or \*how\* routine operational events reshape it\. In this work, we introduce AgingBench, a longitudinal reliability benchmark suite organized around four aging mechanisms: \*compression aging\*, \*interference aging\*, \*revision aging\*, and \*maintenance aging\*\. To localize aging, we perform \*component\-level attribution\* via counterfactual analysis, identifying whether degradation originates in the write, retrieval, or utilization stage of the agent’s memory pipeline\. We evaluated across 7 scenarios, 14 models, various memory policies and agent frameworks, ranging from a fully controlled runner to practical automatic agents such as Claude Code\. Over \~400 runs across 8\-200 sessions, we find aging is not one\-dimensional: it can be invisible to behavioral tests while silently decaying; structurally sharp, with a single model shifting from perfect to zero accuracy on derived\-state tracking; and stage\-dependent, as strong models fail not at writing but at reusing their memory\. Our findings demonstrate that as agents take on longer operational lifetimes, understanding the internal structure of how they age is as important as measuring how well they perform on day one\.

## Orthogonal Uplift Learning with Permutation\-Invariant Representations for Combinatorial Treatments

**Authors:** Jiacan Gao; Xinyan Su; Mingyuan Ma; Xiao Xu; Xinrui Wan; Tianqi Gu; Enyun Yu; Jiecheng Guo; zhiheng zhang

**ID:** 154343 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EIVfHEXb1P>) | [PDF](<https://openreview.net/pdf?id=EIVfHEXb1P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154343>)

We study uplift estimation for combinatorial treatments\. Uplift measures the pure incremental causal effect of an intervention, such as sending a coupon or a marketing message, on user behavior, modeled as a conditional individual treatment effect\. Many real\-world interventions are combinatorial: a treatment is a policy that specifies context\-dependent action distributions rather than a single atomic label\.  Although recent work considers structured treatments, most methods rely on categorical or opaque encodings, limiting robustness and generalization to rare or newly deployed policies\. We propose an uplift estimation framework that aligns treatment representation with causal semantics\.  Each policy is represented by the mixture it induces over context\-action components and embedded via a permutation\-invariant aggregation\. This representation is integrated into an orthogonalized low\-rank uplift model, extending Robinson\-style decompositions to learned, vector\-valued treatments\.  We show that the resulting estimator is expressive for policy\-induced causal effects, orthogonally robust to nuisance estimation errors, and stable under small policy perturbations\. Experiments on large\-scale randomized platform data demonstrate improved uplift accuracy and stability in long\-tailed policy regimes\.

## COSAC: Counterfactual Credit Assignment in Sequential Cooperative Teams

**Authors:** Shripad Deshmukh; Jayakumar Subramanian; Raghavendra Addanki; Nikos Vlassis

**ID:** 150611 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gs2iunr5fs>) | [PDF](<https://openreview.net/pdf?id=gs2iunr5fs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150611>)

_Abstract unavailable from the accessible public sources._

## Causal Discovery Under Hard Selection Bias: A New Robust Score\-Matching Approach

**Authors:** Yiwen Qiu; Francesco Montagna; Shimeng Huang; Francesco Locatello

**ID:** 153240 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mhcp2GSL1c>) | [PDF](<https://openreview.net/pdf?id=Mhcp2GSL1c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153240>)

Selection bias is a difficult yet widespread problem in causal discovery, occurring whenever non\-random selection processes lead to data that is not representative of the underlying populations\.  Due to its practical importance, related works have been proposed to address the problem under local  \[Versteeg et al\., 2022\] or interventional settings \[Dai et al\., 2025a\], but general algorithms for observational data remain elusive\.  In this paper, we focus on truncated data \(hard selection\), and provide a general result for Additive Noise Models \(ANM\)\. We show that score\-based methods are a surprisingly suitable candidate due to a special property of the score function \($\\nabla \\log p\(x\)$\): \*deterministic truncation preserves both the score\* of the joint distribution as well as the Jacobian of the score\. While established score\-matching algorithms still fail in most settings, we actively leverage this observation to propose a new method for causal discovery that is robust under truncated data with ANMs\. Overall, our approach offers a general, robust solution that is agnostic to external information about the selection process and still achieves comparable performance to the state\-of\-the\-art approaches when selection is not present\.

## Long\-Lived AI Agents Age Too: They Quietly Decay After Deployment

**Authors:** Jianing Zhu; Yeonju Ro; John Robertson; Kevin Wang; Junbo Li; Haris Vikalo; Aditya Akella; Zhangyang &amp;amp;quot;Atlas&amp;amp;quot; Wang

**ID:** 148330\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148330

[Paper](<https://openreview.net/forum?id=ye3N1zTJyc>) | [PDF](<https://openreview.net/pdf?id=ye3N1zTJyc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148330>)

The reliability of any long\-running system degrades over time: databases accumulate stale indices, software accrues technical debts, and human memory fades with age\. Memory\-enabled agents are no exception: Even with frozen weights, their system state continues to change as they accumulate context across sessions, and their ability to store, retrieve, and apply knowledge deteriorates in ways that standard snapshot evaluation cannot capture\. Recent benchmarks have begun to measure static degradation over long\-horizon tasks, yet they do not diagnose \*what kind\* of degradation occurs, \*where\* in the agent memory architecture it originates, or \*how\* routine operational events reshape it\. In this work, we introduce AgingBench, a longitudinal reliability benchmark suite organized around four aging mechanisms: \*compression aging\*, \*interference aging\*, \*revision aging\*, and \*maintenance aging\*\. To localize aging, we perform \*component\-level attribution\* via counterfactual analysis, identifying whether degradation originates in the write, retrieval, or utilization stage of the agent’s memory pipeline\. We evaluated across 7 scenarios, 14 models, various memory policies and agent frameworks, ranging from a fully controlled runner to practical automatic agents such as Claude Code\. Over \~400 runs across 8\-200 sessions, we find aging is not one\-dimensional: it can be invisible to behavioral tests while silently decaying; structurally sharp, with a single model shifting from perfect to zero accuracy on derived\-state tracking; and stage\-dependent, as strong models fail not at writing but at reusing their memory\. Our findings demonstrate that as agents take on longer operational lifetimes, understanding the internal structure of how they age is as important as measuring how well they perform on day one\.

## Orthogonal Uplift Learning with Permutation\-Invariant Representations for Combinatorial Treatments

**Authors:** Jiacan Gao; Xinyan Su; Mingyuan Ma; Xiao Xu; Xinrui Wan; Tianqi Gu; Enyun Yu; Jiecheng Guo; zhiheng zhang

**ID:** 154343\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154343

[Paper](<https://openreview.net/forum?id=EIVfHEXb1P>) | [PDF](<https://openreview.net/pdf?id=EIVfHEXb1P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154343>)

We study uplift estimation for combinatorial treatments\. Uplift measures the pure incremental causal effect of an intervention, such as sending a coupon or a marketing message, on user behavior, modeled as a conditional individual treatment effect\. Many real\-world interventions are combinatorial: a treatment is a policy that specifies context\-dependent action distributions rather than a single atomic label\.  Although recent work considers structured treatments, most methods rely on categorical or opaque encodings, limiting robustness and generalization to rare or newly deployed policies\. We propose an uplift estimation framework that aligns treatment representation with causal semantics\.  Each policy is represented by the mixture it induces over context\-action components and embedded via a permutation\-invariant aggregation\. This representation is integrated into an orthogonalized low\-rank uplift model, extending Robinson\-style decompositions to learned, vector\-valued treatments\.  We show that the resulting estimator is expressive for policy\-induced causal effects, orthogonally robust to nuisance estimation errors, and stable under small policy perturbations\. Experiments on large\-scale randomized platform data demonstrate improved uplift accuracy and stability in long\-tailed policy regimes\.

## Optimal Experiments for Partial Causal Effect Identification

**Authors:** Tobias Maringgele; Jalal Etesami

**ID:** 154125 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G61y8qp0of>) | [PDF](<https://openreview.net/pdf?id=G61y8qp0of>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154125>)

Causal queries are often only partially identifiable from observational data, and experiments that could tighten the resulting bounds are typically costly\. We study the problem of selecting, prior to observing experimental outcomes, a cost\-constrained subset of experiments that maximally tightens bounds on a target query\. We formalize this as the max\-potency problem, where epistemic potency measures the worst\-case reduction in bound width guaranteed by an experiment, and show that this problem is NP\-hard via a reduction from 0\-1 knapsack\. Building on the polynomial\-programming framework of Duarte et al\. \(2023\), we give a general procedure for evaluating epistemic potency in discrete settings\. To control the super\-exponential search space, we introduce two graphical pruning criteria that depend only on the causal graph and the query: a novel path\-interception rule that exploits district structure to certify zero potency in linear time, and an identifiability check based on the ID algorithm\. On Erdős–Rényi random graphs and 11 bnlearn benchmark networks, the two criteria together prune 50\-88% of candidate experiments on average without solving a single polynomial program\. For the general subset search, we show that ID\-pruned experiments are combinatorially inert, yielding a super\-exponential reduction in the number of subsets evaluated\. We close with an end\-to\-end demonstration on observational NHANES data, selecting optimal experiments for estimating the effect of physical activity on diabetes\.

## LACE: Latent Alignment via Counterfactual Embeddings

**Authors:** Harsh Udai; Konda Reddy Mopuri

**ID:** 153001 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OhzpFEscSy>) | [PDF](<https://openreview.net/pdf?id=OhzpFEscSy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153001>)

_Abstract unavailable from the accessible public sources._

## Tracing Actual Causes with Counterfactual Witness Maps

**Authors:** Tim Woydt; Matej Zečević; Kristian Kersting; Moritz Willig

**ID:** 152706 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=R0MXum0YPw>) | [PDF](<https://openreview.net/pdf?id=R0MXum0YPw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152706>)

Halpernian actual causation, the formal study of which events in a specific situation caused a specific outcome in acyclic structural causal models, underpins legal responsibility, moral blame, and the assessment of causal harm\. Despite the rich logical framework, no prior sound and complete enumeration procedure is known for finding \*all\* actual causes in a given setting, blocking downstream tasks such as responsibility attribution, blame assessment, and causal\-harm grading that aggregate over the full cause set\. We close this gap by introducing \*witness targets\*: sets of joint configurations containing every counterfactual witness\. In combination with an \*ancestor intervention grammar\* we derive a finite directed acyclic \*witness map\*\. We prove that for every actual cause there exists a contingency set such that the joint intervention set appears as a node of this map, and present an algorithm for \*Tracing Actual Causes \(TrAC\)\* that is sound and complete for enumerating all actual causes of any target event\. We compare TrAC empirically with existing single\-cause baselines on random Boolean structural causal models, demonstrating practical feasibility for graphs of up to 15 nodes\.

## Offloading Score: Measuring AI Reliance through Counterfactual Workflows

**Authors:** Vishakh Padmakumar; Lujain Ibrahim; Zora Wang; Jennifer Wang; Q\.Vera Liao; Diyi Yang

**ID:** 139388 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TT3ACb02l4>) | [PDF](<https://openreview.net/pdf?id=TT3ACb02l4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139388>)

AI tools are increasingly integrated into real\-world workflows\. However, existing measures of reliance on these tools focus on AI output adoption or on self\-reported indicators, rather than how task effort is distributed between users and tools\.  Here, we introduce offloading score, a measure of reliance that quantifies the fraction of cognitive effort offloaded to an AI tool\. Offloading score is simulation\-based\-\-\-we construct a counterfactual workflow by estimating how the user would have completed the task without the tool, and then computing the fraction of steps saved by using the tool\.  We validate offloading score through intrinsic evaluations of metric validity, and a controlled user study \($n=40$\) with developers performing programming tasks using AI tools\.  We vary time pressure to test whether reliance measures capture the known increase in reliance under time pressure\. We show that offloading score detects significantly higher reliance in time\-constrained settings \($\+43\\%$, $p=0\.018$\), while usage\-based and self\-reported baseline measures do not distinguish the conditions\.  We complement this with descriptive insights showing that higher reliance manifests as greater delegation and more direct reuse of AI outputs\. Finally, we demonstrate an approach of using offloading score in combination with target outcomes of reliance \(e\.g\., task understanding\) to identify when reliance may be \(in\)appropriate\. Our framework offers two contributions: an instrument users can apply to measure and reflect on their own reliance, and a quantitative signal that agent designers can utilize to mitigate overreliance\.

## CRAFT: Counterfactual\-to\-Interactive Reinforcement Fine\-Tuning for Driving Policies

**Authors:** Keyu Chen; Nanfei Ye; Yida Wang; Wenchao Sun; Danqi Zhao; Hao Cheng; Sifa Zheng

**ID:** 150208 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jvYypWtfPg>) | [PDF](<https://openreview.net/pdf?id=jvYypWtfPg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150208>)

_Abstract unavailable from the accessible public sources._

## Improving Causal Explanations

**Authors:** Kai\-Zhan Lee; Drago Plecko; Elias Bareinboim

**ID:** 153775 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IkOHPX9dDS>) | [PDF](<https://openreview.net/pdf?id=IkOHPX9dDS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153775>)

Explaining model predictions in high\-stakes settings requires knowing \*why\* a prediction was made, a central challenge in modern AI\. Yet existing methods lack a principled causal framework for explanation, leading to a disagreement problem: explanation methods produce conflicting attributions with no way to determine which is correct\. Based on the literature in cognitive science, law, and philosophy, and using the language of causality, we formalize four desiderata for explanation methods that assign numerical credit to variables\. We show that no prior explanation method including SHAP and LIME satisfies all desiderata, and prove the Explanatory Impossibility Theorem, which shows that even in principle, no method can satisfy all desiderata without causal assumptions\. We introduce \*counterfactual Shapley values\*, an aggregation of a novel counterfactual quantity we call the \*natural total effect\*, and prove they satisfy all desiderata\. We develop an algorithm for computing tight bounds on counterfactual Shapley values\. Experiments corroborate our theory\.

## Budgeted Multi\-Source Counterfactual Annotation for Off\-Policy Evaluation

**Authors:** Biao Xiang; Ali Eshragh; Yuexing Li; Kai Wang

**ID:** 155643 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=446GKdY1L2>) | [PDF](<https://openreview.net/pdf?id=446GKdY1L2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155643>)

Off\-policy evaluation \(OPE\) estimates the value of a target policy from logged data, but limited behavior\-policy coverage can force high\-variance reweighting or reward\-model extrapolation\. Counterfactual annotations can add evidence about unobserved actions, yet practical sources, including domain experts and LLMs, may be costly, biased, or noisy\. We study budgeted acquisition of such annotations for contextual\-bandit OPE\. Given source\-specific costs and error profiles, we formulate an integer allocation problem over context\-action pairs and annotation sources to minimize the component of estimator variance that depends on the annotation plan\. We characterize when annotations are valuable through a first\-annotation threshold and local annotation\-value regimes\. For the coupled multi\-source problem, we develop a majorization\-minimization algorithm with dynamic\-programming subroutines that monotonically improves the objective\. Experiments in synthetic clinical and LLM\-annotated education bandits show that our proposed allocation method reduces the optimized variance component by $20\.58$% and $10\.77$%, respectively, relative to no\-annotation baseline\.

## Conditional Counterfactual Mean Embeddings: Doubly Robust Estimation and Learning Rates

**Authors:** Thatchanon Anancharoenkij; Donlapark Ponnoprat

**ID:** 152006 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WBrsTgkHw7>) | [PDF](<https://openreview.net/pdf?id=WBrsTgkHw7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152006>)

A complete understanding of heterogeneous treatment effects requires fully capturing the conditional distribution of the counterfactual outcomes\. To this end, we propose the \*Conditional Counterfactual Mean Embeddings\* \(CCME\), a framework that embeds conditional distributions of counterfactual outcomes into a reproducing kernel Hilbert space \(RKHS\)\. Under this framework, we develop a two\-stage meta\-estimator for CCME that accommodates any RKHS\-valued regression in each stage\. Based on this meta\-estimator, we develop three practical CCME estimators: \(1\) \*Ridge Regression\* estimator, \(2\) \*Deep Feature\* estimator that parameterizes the feature map by a neural network, and \(3\) \*Neural\-Kernel\* estimator that performs RKHS\-valued regression, with the coefficients parameterized by a neural network\. We provide finite\-sample convergence rates for all estimators, establishing that they possess the double robustness property\. Our experiments demonstrate that our estimators accurately recover distributional features including multimodal structure of conditional counterfactual distributions\.

## Learning Deployable Causal Action Geometry under Temporal Non\-Stationarity

**Authors:** Changjian Liu; Tianyu Wang; Yuwei Xu; Xiaoxuan Deng; Zhilin Zhang; Yong Gao; Chuan Yu; Jian Xu; Bo Zheng

**ID:** 154378 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E0O9X7qd9h>) | [PDF](<https://openreview.net/pdf?id=E0O9X7qd9h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154378>)

Learning a response law for continuous decisions from observational time series is central to many real\-world decision systems, yet temporal non\-stationarity poses a fundamental challenge: outcome levels drift over time, causing naive models that fit raw outcomes to conflate treatment effects with shifting baseline conditions\. Even when the one\-step response is identifiable, unrestricted cross\-time generalization remains fundamentally ill\-posed\. Thus, we introduce a constrained decision target based on a causal action geometry with anchored link\-scale morphologies\. Our approach constructs anchored contrasts over a family of link functions, isolating the action\-dependent component of the response that can be shared across periods while allowing flexible, period\-specific calibration\. This yields a morphology\-restricted oracle target for continuous decision making under temporal drift\. Building on this formulation, we develop a two\-stage orthogonal estimator that first obtains cross\-fitted pilot estimates of anchored responses and then performs honest profiled selection over morphology and representation classes\. The resulting estimator admits oracle guarantees for the restricted target and, under approximate persistence, produces decision rules that remain near optimal in future periods\. Experiments on synthetic data and a large\-scale e\-commerce pricing application support the proposed target and its decision benefits under temporal shift\.

## Estimating Continuous Treatment Effects with Recourse Data

**Authors:** Alessandro Marchese; Jeroen Berrevoets; Niels Martin; Sam Verboven

**ID:** 149123 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sipan8Hqx1>) | [PDF](<https://openreview.net/pdf?id=sipan8Hqx1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149123>)

Recourse explanations describe what would need to change for a different outcome to occur, yet they are not typically used for treatment effect estimation\. We study how such recourse data can be used for causal inference with continuous treatments\. This provides counterfactual supervision beyond observed outcomes at realized treatment values, and is especially useful when routine treatment assignment leaves parts of the treatment domain unsupported, as in diverse applications such as drug dosing, healthcare operations, and recommendation systems\. We formalize recourse explanations as structural boundary samples and show how they identify continuous dose\-response curves under a positivity condition fundamentally distinct from standard overlap\. Because recourses are observed only for negative\-outcome units, the boundary distribution is left\-truncated relative to the population; we correct this selection using Lynden\-\-Bell inversion\. We translate this result into an auxiliary recourse loss for neural dose\-response estimators, converting recourse\-derived boundaries into counterfactual supervision\. Experiments on synthetic and semi\-synthetic data show consistent improvements over standard baselines\. More broadly, our work shows that recourse explanations can serve as structured causal evidence, expanding what can be learned from observational data\.

## ML\-assisted Randomization Tests for A/B Experiments

**Authors:** Wenxuan Guo; JungHo Lee; Panos Toulis

**ID:** 150264 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jSH9fXOyOf>) | [PDF](<https://openreview.net/pdf?id=jSH9fXOyOf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150264>)

We study the problem of detecting treatment effects in randomized A/B experiments when the effects are potentially small and complex\. A common approach in such settings is to fit machine learning \(ML\) models of outcomes on observed features and then apply classical $t$\-tests to residualized outcomes\. We show that this approach can suffer substantial power loss under treatment effect heterogeneity\. We propose a randomization\-based test whose statistic measures the out\-of\-sample predictive gain from including the treatment variable in a flexible ML model\. Leveraging experimental randomization and sample splitting, our test is finite\-sample valid for arbitrary models and loss functions\. We establish power guarantees under heterogeneous treatment effects and demonstrate substantial empirical gains in simulations and large\-scale A/B experiments\.

## Beyond IPS: Reliable Counterfactual Evaluation in Multi\-Stage Ad Systems without Logged Propensities

**Authors:** Mohsen Malmir; Mohamed A Radwan; houssam nassif; Murat Bayir

**ID:** 151796 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xwazdb6LB8>) | [PDF](<https://openreview.net/pdf?id=Xwazdb6LB8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151796>)

Offline evaluation of ad ranking policies in multi stage delivery systems is fundamentally challenging because action propensities are often unavailable, limiting inverse propensity scoring \(IPS\) estimators\. While reward model based estimators such as Direct Method \(DM\) do not rely on propensity estimates, they can suffer from bias when candidate policies induce impression distributions that differ from the logging mixture\. In this work, we formalize DM based counterfactual replay under mixture logging and propose a mixture targeted shift correction based on density ratio weighting through domain classifier\. We further derive a per policy value estimation error and characterize an asymptotic error ceiling governed by the cold start mass\. Experiments on both ads delivery simulator and one week of production traffic from a large scale industrial CTR ranking system demonstrate that the proposed mixture weighted reward model consistently outperforms its unweighted counterpart under distribution shift\.

## Characterizing Underrepresentation in Generalizing Causal Survival Estimates

**Authors:** Bolun Liu; Sean McGrath; Yiren Hou; Elizabeth Stuart; Harsh Parikh

**ID:** 153000 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OiKgzKcvqA>) | [PDF](<https://openreview.net/pdf?id=OiKgzKcvqA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153000>)

Randomized trial findings are routinely generalized to broader target populations to inform decisions in medicine and public policy\. When the trial sample is misaligned with the target population, generalized effect estimates can yield suboptimal decisions\. We identify and characterize the target subgroups that are underrepresented in the trial cohort in time\-to\-event settings\. Here, underrepresentation arises in two distinct ways: baseline underrepresentation, when a subgroup's covariate profile is rare in the trial relative to the target, and time\-varying underrepresentation, when differential censoring erodes a subgroup over follow\-up\. Existing diagnostics either conflate these mechanisms or address only the baseline case\. We show that the asymptotic variance of the efficient generalizability estimator admits a decomposition in which only two terms can diverge as representation weakens: a sampling\-weight term capturing baseline misalignment and a censoring\-weight term capturing differential loss to follow\-up\. Underrepresented subgroups are therefore precisely those the trial estimates with poor precision, and the decomposition reveals which channel is responsible\.We exploit this operationally in $\\textbf\{TRACE\}$ \($\\textbf\{T\}$emporal $\\textbf\{R\}$ashomon $\\textbf\{A\}$nalysis of $\\textbf\{CE\}$nsored data\), which combines a self\-normalized variance objective with a tree\-based search to localize underrepresented subgroups, attribute each to baseline mismatch or censoring, and pinpoint the follow\-up intervals where censoring drives the variance inflation; the joint problem is solved by a parametric dynamic program nested inside a Rashomon ensemble of near\-optimal trees\. On synthetic benchmarks and a case study generalizing the National Job Training Partnership Act \(JTPA\) Study to U\.S\. JTPA\-eligible adults, the framework recovers underrepresented regions, correctly attributes each mechanism, and identifies the follow\-up windows driving temporal underrepresentation; refining the trial and target samples to reliably generalizable subgroups substantially reduces generalized effect\-estimate variance\.

## Shepherd: A Runtime Substrate Empowering Meta\-Agents with a Formalized Execution Trace

**Authors:** Simon Yu; Derek Chong; Ananjan Nandi; Dilara Soylu; Jiuding Sun; Christopher D Manning; Weiyan Shi

**ID:** 153027 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OZ3EtBIrwP>) | [PDF](<https://openreview.net/pdf?id=OZ3EtBIrwP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153027>)

As LLM\-based agentic systems grow more complex, they increasingly rely on meta\-agents: higher\-order agents that act on other agents, much like managers supervise employees\. Yet existing agentic runtimes expose execution only as static environmental states, limiting the kinds of live and post\-hoc interventions a meta\-agent requires\. To unlock these capabilities, we introduce Shepherd, a functional programming model that formalizes meta\-agent operations on target agents as functions, with core operations mechanized in Lean\. Shepherd records every agent–environment interaction as a typed event in a principled Git\-like execution trace where any past state can be cheaply forked and replayed\. Even at scale, Shepherd forks the agent process and its filesystem 5x faster than Docker, with &gt;95% prompt\-cache reuse on replay\. We exemplify Shepherd's versatility in three use cases: \(1\) runtime intervention, where a live supervisor improves pair coding pass rate from 28\.8% to 54\.7% on CooperBench; \(2\) counterfactual meta\-optimization, where a meta\-agent branches to explore alternative paths, beating MetaHarness and GEPA across four benchmarks by up to 11 points with up to 58% lower wall\-clock; and \(3\) Tree\-RL training, where a meta\-agent forks rollouts at chosen turns, lifting TerminalBench\-2 from 34\.2% to 39\.4% on Qwen3\.5\-35B\-A3B\. These use cases show Shepherd is a performant and efficient substrate for programming meta\-agents; we open\-source it to advance future research\.

## Covariate\-Adjusted Deep Causal Learning for Heterogeneous Panel Data Models

**Authors:** Guanhao Zhou; Yuefeng Han; Xiufan Yu

**ID:** 153186 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NBIkiyBee2>) | [PDF](<https://openreview.net/pdf?id=NBIkiyBee2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153186>)

This paper studies the task of estimating heterogeneous treatment effects in causal panel data models with covariate effects\. We propose a novel \*\*Co\*\*variate\-Adjusted \*\*DE\*\*ep C\*\*A\*\*usal \*\*L\*\*earning \(\*\*CoDEAL\*\*\) framework, that cohesively deal with the underlying heterogeneity and nonlinearity of both panel units and covariate effects\. CoDEAL integrates nonlinear covariate effect components \(parameterized by a feed\-forward neural network\) with nonlinear factor structures \(modeled by a multi\-output autoencoder\) to form a heterogeneous causal panel model\. The nonlinear covariate component flexibly captures complex covariate influences on outcomes, and the nonlinear factor decomposition enables CoDEAL to effectively capture both cross\-sectional and temporal dependencies inherent in the data panel\. This latent structural information is subsequently integrated into a customized matrix completion algorithm, thereby facilitating more accurate counterfactual imputation\. Moreover, the use of a multi\-output autoencoder explicitly accounts for heterogeneity across units and enhances the model interpretability of the latent factors\. We establish theoretical guarantees on the convergence of the estimated counterfactuals and demonstrate the compelling performance of the proposed method using extensive simulation studies and real\-world data applications\.

## Transporting the Past: An Optimal Transport View of Backtracking Counterfactuals

**Authors:** Zhangyi Liu; Sayedpouria Fatemi; Suvrit Sra

**ID:** 153288 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MNVvTXlGGM>) | [PDF](<https://openreview.net/pdf?id=MNVvTXlGGM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153288>)

We study backtracking counterfactual inference for \*Structural Causal Models\* \(SCMs\) through the lens of optimal transport\. In SCMs, a factual observation generally induces a posterior distribution over exogenous variables, making counterfactual inference inherently distributional\. We introduce two complementary frameworks that transport this posterior onto the set of exogenous configurations satisfying a desired counterfactual query\. The first constructs a natural pointwise projection and is suitable when the transported exogenous distribution can be used directly\. The second enforces mutual independence among counterfactual exogenous variables, so that the transported variables remain interpretable as genuine exogenous noises of the same SCM\. We show that both frameworks are consistent with the original backtracking counterfactual principle, and we propose marginal, penalty\-based, and hard\-constrained solvers for finite\-posterior settings\. Synthetic experiments on non\-bijective SCMs illustrate the geometry of the problem and reveal trade\-offs among transport cost, counterfactual constraint satisfaction, and preservation of exogenous independence\.

## Causal Discovery from Unseen Environments

**Authors:** Sophia Xiao; Bijan Mazaheri

**ID:** 151347 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bDH6pbl4W5>) | [PDF](<https://openreview.net/pdf?id=bDH6pbl4W5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151347>)

Existing causal discovery methods for interventional data typically follow one of two paradigms: they either require explicit environment labels and known intervention targets, or, in the absence of such metadata, they rely on computationally intensive procedures such as first inferring intervention targets or employing complex models to account for the latent variables of environment labels\. Surprisingly, we show that neither explicit environment labels nor auxiliary inference algorithms are strictly necessary: under certain conditions, the classical ICA\-LiNGAM algorithm consistently recovers the causal graph from simply pooled interventional and observational data\. We first demonstrate that in linear Gaussian structural equation models where interventions independently perturb the noise distributions across nodes, pooling produces exactly independent, non\-Gaussian sources, the appropriate setting for Independent Component Analysis \(ICA\)\. Because the assumption of strictly independent interventions can be overly restrictive, we extend our analysis to the practical setting of single\-node \(atomic\) interventions\. While pooling atomic interventions induces the necessary non\-Gaussianity, it also introduces source \*dependence\*, violating a core ICA assumption\. However, theoretical analysis establishes that this dependence decays as $\\mathcal\{O\}\(1/n^2\)$ with the number of variables $n$, whereas non\-Gaussianity decays only as $\\mathcal\{O\}\(1/n\)$\. This yields a regime of mild misspecification at moderate $n$ where sources are near\-independent yet sufficiently non\-Gaussian for ICA to succeed\. In synthetic experiments, where data is pooled across many different environments, our label\-free approach matches or exceeds label\-aware methods\. On real\-world data, our approach performs comparably to methods that explicitly require environment labels\. Ultimately, our work challenges the assumed necessity of environment labels and complex inference mechanisms in interventional causal discovery and suggests a re\-evaluation of the often\-overlooked classical ICA\-LiNGAM algorithm\.

## Order\-based structure learning for zero\-inflated count data under data heterogeneity

**Authors:** Fariha Taskin; Junsouk Choi; Hyunwoong Chang

**ID:** 151587 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZTJFimR2y9>) | [PDF](<https://openreview.net/pdf?id=ZTJFimR2y9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151587>)

We propose a structure learning method for directed acyclic graph \(DAG\) models of zero\-inflated multivariate count data\. Although causal structure learning with zero\-inflated Poisson models is identifiable, existing algorithms rely on local search over the DAG space, leading to poor scalability and a tendency to converge to suboptimal solutions\. To address these limitations, we develop a novel order\-based scoring framework that searches over variable orderings rather than directly over DAGs\. Building on this framework, we further extend the method to multiple heterogeneous datasets by identifying a shared variable ordering while allowing each dataset to have its own edge set\. We implement a stochastic hill climbing algorithm with a random\-to\-random \(R2R\) proposal operator to efficiently explore the ordering space\. Simulation studies show that the proposed method outperforms competing approaches and improves graph estimation accuracy under increasing heterogeneity when a shared causal ordering is preserved\. We apply the method to single\-nucleus RNA sequencing data from a major depressive disorder study\.

## Statistical Inference in Causal Partial Identification under Smooth Densities

**Authors:** Sirui Lin; Zijun Gao; Jose Blanchet; Peter W Glynn

**ID:** 152254 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UQOO8NDAjo>) | [PDF](<https://openreview.net/pdf?id=UQOO8NDAjo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152254>)

_Abstract unavailable from the accessible public sources._

## Causal Survival Forests with Negative Controls

**Authors:** Zijun Gao; Kyoungeui Hong; Leyi Ma; Qianli Wu; Zachary Izzo; Ruishan Liu

**ID:** 153856 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IDeaI3k5kC>) | [PDF](<https://openreview.net/pdf?id=IDeaI3k5kC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153856>)

_Abstract unavailable from the accessible public sources._

## Effect\-Level Validation for Causal Discovery in Interactive Telemetry

**Authors:** Dang Van Cong Hoang; Luan Pham; Minh Nguyen

**ID:** 139471 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NqsvRZNvpb>) | [PDF](<https://openreview.net/pdf?id=NqsvRZNvpb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139471>)

Causal discovery is increasingly used to analyze telemetry from interactive systems, but a plausible graph does not guarantee an identifiable or reliable product decision\. We study this problem for one query: whether early competitive gameplay increases Day\-1 retention in a deployed Role\-playing game \(RPG\)\. We propose an admissibility\-first framework that treats discovered graphs as structural hypotheses, keeps only graphs that identify the target effect and have adequate treatment\-control overlap, and validates admissible effects through cross\-algorithm stability, placebo, subsampling, and E\-value diagnostics\. On real telemetry, only about one third of discovery runs support the target effect after temporal and semantic constraints\. Some admissible Directed Acyclic Graphs \(DAGs\) converge to a positive risk\-difference average treatment effect \(ATE\), down from a raw retention gap, and the estimate survives all refutation checks\. Graph\-level recovery is therefore an inadequate proxy for causal reliability; discovery pipelines for decision support should be evaluated at the query and effect level\.

## S3Former: Sequential, Structural, and Statistical Fusion for Continuous\-Time Dynamic Graphs

**Authors:** Ziyan Li; Xiangyu Hu; Tianqing Zhu; Wanlun Ma; Ke Qin

**ID:** 155501 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=56lSllQiF5>) | [PDF](<https://openreview.net/pdf?id=56lSllQiF5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155501>)

Continuous\-time dynamic graphs model evolving systems with irregularly timed interactions, where predicting future links requires reasoning over temporal evolution, local topology, and historical relation patterns\. Existing memory\-based and sequence\-based methods capture temporal dependencies effectively, but they often organize historical interactions as node memories or serialized neighbor sequences\. As a result, they lack explicit analysis of the interaction structure around candidate nodes which prevents them from explicitly modeling local topological patterns of candidate nodes at inference time\. They also lack explicit causal statistical memory for activity, recency, and repeated pairwise interactions\. Motivated by these drawbacks, we propose S3Former, a temporal graph framework that jointly models sequential dynamics, shared pair\-centered structure, and online statistical memory\. For each candidate interaction, S3Former encodes long\-term and short\-term historical sequences, constructs a history\-induced shared pair subgraph around the two endpoints, and computes node\-level and pair\-level statistics from past events only\. A two\-level context\-aware fusion mechanism further combines these signals: NodeCCF learns reliable endpoint representations, while PairCCF performs candidate\-specific relation correction using explicit pair memory\. Experiments on 10 dynamic graph benchmarks show that S3Former achieves state\-of\-the\-art performance on most datasets in both transductive and inductive link prediction\. Ablation studies confirm the effectiveness of shared pair\-subgraph modeling, online statistical memory, and hierarchical fusion\.

## Joint Treatment Effect Estimation from Incomplete Healthcare Data: Temporal Causal Normalizing Flows with LLM\-driven Evolutionary MNAR Imputation

**Authors:** Olivia Jullian Parra; Sara Zoccheddu; David C Cerezo; Tom Forzy; Franziska S Ulrich; William Sutcliffe; Jakob M Burgstaller; Oliver Senn; Patrick Owen; Nicola Serra

**ID:** 150903 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eYP8uXiZtE>) | [PDF](<https://openreview.net/pdf?id=eYP8uXiZtE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150903>)

_Abstract unavailable from the accessible public sources._

## Joint Treatment Effect Estimation from Incomplete Healthcare Data: Temporal Causal Normalizing Flows with LLM\-driven Evolutionary MNAR Imputation

**Authors:** Olivia Jullian Parra; Sara Zoccheddu; David C Cerezo; Tom Forzy; Franziska S Ulrich; William Sutcliffe; Jakob M Burgstaller; Oliver Senn; Patrick Owen; Nicola Serra

**ID:** 150903\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150903

[Paper](<https://openreview.net/forum?id=eYP8uXiZtE>) | [PDF](<https://openreview.net/pdf?id=eYP8uXiZtE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150903>)

_Abstract unavailable from the accessible public sources._

## Causality can systematically address the monsters under the bench\(marks\)

**Authors:** Felix Leeb; Zhijing Jin; Bernhard Schölkopf

**ID:** 140063 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U7mzwCsCwV>) | [PDF](<https://openreview.net/pdf?id=U7mzwCsCwV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140063>)

Effective and reliable evaluation is essential for advancing empirical machine learning\.  However, the increasing accessibility of generalist models and the progress towards ever more complex, high\-level tasks make systematic evaluation more challenging\. Benchmarks are plagued by various biases, artifacts, or leakage, while models may behave unreliably due to poorly explored failure modes\. Haphazard treatments and inconsistent formulations of such \`\`monsters'' leads to a duplication of efforts, a lack of trust in results, and unsupported inferences\. In this position paper, we argue causality offers an ideal framework to systematically address these challenges\. By making causal assumptions in an approach explicit, we can faithfully model phenomena, formulate testable hypotheses with explanatory power, and leverage principled tools for analysis\. To make causal model design more accessible, we identify several useful Common Abstract Topologies \(CATs\) in causal graphs which help gain insight into the reasoning abilities in large language models\. Through a series of case studies, we demonstrate how the precise yet pragmatic language of causality clarifies the strengths and limitations of a method and inspires new approaches for systematic progress\.

## Counterfactual Rollout Replay: Forkable Environments as Free Process Rewards for Software Engineering Agents

**Authors:** Yuanhao li; Hongbo Wang; Xuhong Chen; Yiming Cao; Xunzhu Tang

**ID:** 151386 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b0yS7nonHU>) | [PDF](<https://openreview.net/pdf?id=b0yS7nonHU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151386>)

Reinforcement learning has rapidly become the dominant paradigm for training software engineering \(SWE\) agents on long\-horizon, multi\-turn tasks such as resolving real\-world GitHub issues\. Yet existing pipelines suffer from a fundamental credit\-assignment bottleneck: rewards arrive only at the end of trajectories that may span dozens of file edits, shell commands, and test invocations, leaving every intermediate decision indistinguishable from luck\. We observe that containerised SWE tasks provide a particularly useful form of environment forkability: a commit hash plus a container image specifies a real executable software state that can be restored cheaply and exactly, with auditable provenance and without a simulator\-to\-reality gap\. We exploit this property by introducing Counterfactual Rollout Replay \(CRR\), a training\-time procedure that re\-executes the environment from selected decision points with alternative actions and assigns each selected step an advantage equal to the sampled on\-policy versus counterfactual return differential\. CRR requires no learned process reward model, no human rubric annotation, and no oracle hindsight signal; it is free of auxiliary process labels and reward\-model training, while still incurring extra environment\-replay compute\. Applied to a 14B base model on SWE\-Gym and evaluated on SWE\-bench Verified and SWE\-rebench, CRR\-trained agents reach higher resolution rates with substantially fewer trajectories than outcome\-only GRPO and complement orthogonal advances such as PRM\-based scoring and trajectory search\.

## ML\-assisted Randomization Tests for A/B Experiments

**Authors:** Wenxuan Guo; JungHo Lee; Panos Toulis

**ID:** 150264\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150264

[Paper](<https://openreview.net/forum?id=jSH9fXOyOf>) | [PDF](<https://openreview.net/pdf?id=jSH9fXOyOf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150264>)

We study the problem of detecting treatment effects in randomized A/B experiments when the effects are potentially small and complex\. A common approach in such settings is to fit machine learning \(ML\) models of outcomes on observed features and then apply classical $t$\-tests to residualized outcomes\. We show that this approach can suffer substantial power loss under treatment effect heterogeneity\. We propose a randomization\-based test whose statistic measures the out\-of\-sample predictive gain from including the treatment variable in a flexible ML model\. Leveraging experimental randomization and sample splitting, our test is finite\-sample valid for arbitrary models and loss functions\. We establish power guarantees under heterogeneous treatment effects and demonstrate substantial empirical gains in simulations and large\-scale A/B experiments\.

## Beyond IPS: Reliable Counterfactual Evaluation in Multi\-Stage Ad Systems without Logged Propensities

**Authors:** Mohsen Malmir; Mohamed A Radwan; houssam nassif; Murat Bayir

**ID:** 151796\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151796

[Paper](<https://openreview.net/forum?id=Xwazdb6LB8>) | [PDF](<https://openreview.net/pdf?id=Xwazdb6LB8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151796>)

Offline evaluation of ad ranking policies in multi stage delivery systems is fundamentally challenging because action propensities are often unavailable, limiting inverse propensity scoring \(IPS\) estimators\. While reward model based estimators such as Direct Method \(DM\) do not rely on propensity estimates, they can suffer from bias when candidate policies induce impression distributions that differ from the logging mixture\. In this work, we formalize DM based counterfactual replay under mixture logging and propose a mixture targeted shift correction based on density ratio weighting through domain classifier\. We further derive a per policy value estimation error and characterize an asymptotic error ceiling governed by the cold start mass\. Experiments on both ads delivery simulator and one week of production traffic from a large scale industrial CTR ranking system demonstrate that the proposed mixture weighted reward model consistently outperforms its unweighted counterpart under distribution shift\.

## Causal Inference for Sequential Settings under Interference and Latent Confounding

**Authors:** Phevos Paschalidis; Constantinos Daskalakis; Devavrat Shah

**ID:** 149757 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nZvLqHKKp6>) | [PDF](<https://openreview.net/pdf?id=nZvLqHKKp6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149757>)

We study causal inference under outcome interference for sequential, observational settings\.      We consider settings where the binary outcomes over $N$ units are Markovian across $T$ time steps;      at each time step, the outcomes of $N$ units have pairwise dependencies captured through an Ising model;      and, each outcome is impacted through a latent external field capturing effects of latent confounders\.      Similar to panel data literature, these latent confounders are modeled to have a low\-rank factor     structure\. Our data is a single sample from this high\-dimensional distribution\. To estimate causal quantities of interest, we provide a computationally efficient method based on Maximum Pseudolikelihood Estimation \(MPLE\) for learning the model parameters\. Under reasonable assumptions, we establish non\-asymptotic consistency for parameter estimation\. Therefore,      sampling from the learnt model enables faithful estimation of causal quantities of interest\.      We demonstrate the efficacy of the method through synthetic experiments as well as a real\-world case\-study      investigating causal effects of vaccine rates on COVID\-19 death rates within US counties nationwide\.

## Coarsening Linear Non\-Gaussian Causal Models with Cycles

**Authors:** Francisco Madaleno; Francisco Pereira; Alex Markham

**ID:** 152930 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PIqUM6XQI4>) | [PDF](<https://openreview.net/pdf?id=PIqUM6XQI4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152930>)

_Abstract unavailable from the accessible public sources._

## From Groups to Rings: Causal Evidence for Algebraic Decomposition in Grokked Transformers

**Authors:** Shurui Zheng; Fanhong Li; Zhixing Huang; Zixi Li; Lei Ji

**ID:** 155317 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6WDYFB6ALB>) | [PDF](<https://openreview.net/pdf?id=6WDYFB6ALB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155317>)

Prior work has shown that grokked Transformers implement discrete Fourier transforms or group character representations for modular arithmetic\. We unify these findings under the Wedderburn\-\-Artin decomposition: using interchange intervention accuracy \(IIA\), a causal method stronger than ablation, we show that grokked models decompose computation along the Wedderburn components of the target algebra\. Across 11 commutative algebras over $\\F\_p$ \($p = 2,3,5,7$\)\-\-\-including 6 with nontrivial Jacobson radical\-\-\-all grokked models achieve raw IIA $\\geq 0\.97$\. When models predict incorrectly, errors remain compartmentalized by component \($3\.8\\times$ chance\), confirming that independence is structural, not a byproduct of accuracy\. Training dynamics reveal that Wedderburn alignment emerges synchronously with grokking\. For non\-commutative groups, models exhibit \\emph\{selective\} Wedderburn alignment; non\-commutativity raises a capacity threshold that larger models overcome\.

## Identification and Bounding of Joint Expectation over Potential Outcomes

**Authors:** Yuta Kawakami; Jin Tian

**ID:** 150669 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gMaaGOx3Yl>) | [PDF](<https://openreview.net/pdf?id=gMaaGOx3Yl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150669>)

The joint expectation of functions of potential outcomes $\(Y\_1,Y\_0\)$ is a fundamental quantity in causal inference, particularly when investigating the variation or heterogeneity of causal effects\. This paper provides novel  assumptions for their identification:  comonotonicity and countercomonotonicity\. These assumptions offer a unified framework for their identification  across discrete, continuous, and mixed outcome variables\. In the absence of these assumptions, we derive sharp bounds for two broad classes of functions, yielding new results for bounding moments of individual causal effects, which are central to measuring effect heterogeneity\. We present corresponding estimation methods and illustrate them in simulation studies and real\-world datasets\.

## Observable Neural ODEs for Identifiable Causal Forecasting in Continuous Time

**Authors:** Jennifer Wendland; Nicolas Freitag; Maik Kschischo

**ID:** 153828 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IQwsfl9G8s>) | [PDF](<https://openreview.net/pdf?id=IQwsfl9G8s>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153828>)

Causal inference in continuous\-time sequential decision problems is challenged by hidden confounders\. We show that, in latent state\-space models with time\-varying interventions, observability of the latent dynamics from observed data is necessary for identifying dynamic treatment effects, linking control\-theoretic observability to causal identifiability, even when hidden confounders affect both treatments and outcomes\.  We derive a continuous\-time adjustment formula expressing potential outcome dis\- tributions under treatment trajectories via the measurement model, latent dynamics, and the filtering distribution over latent states given observed histories\. We propose Observable Neural ODEs \(ObsNODEs\), Neural ODE models in ob\- servable normal form for causal forecasting\. ObsNODEs learn continuous\-time dynamics with states reconstructible from observations, enabling outcome predic\- tion under alternative treatment paths\.  Experiments on synthetic cancer data, semi\-synthetic data based on MIMIC\-IV, and real\-world sepsis data show strong performance over recent sequence models\.

## Fiedler\-Regularized Causal Discovery for Sparse Connected DAGs

**Authors:** Amine M&amp;amp;\#x27;Charrak; Gowtham Reddy Abbavaram; Thomas Lukasiewicz; Michael Bronstein; Krikamol Muandet

**ID:** 152438 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T86xx1y8TJ>) | [PDF](<https://openreview.net/pdf?id=T86xx1y8TJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152438>)

_Abstract unavailable from the accessible public sources._

## Decomposing Effects in Neural Causal Models

**Authors:** Matej Zečević; Devendra Singh Dhami; Kristian Kersting

**ID:** 151693 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Yjey5dh4Et>) | [PDF](<https://openreview.net/pdf?id=Yjey5dh4Et>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151693>)

_Abstract unavailable from the accessible public sources._

## Causal Abstractions, Categorically Unified

**Authors:** Markus Englberger; Devendra Singh Dhami

**ID:** 153629 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JyGppnYf3i>) | [PDF](<https://openreview.net/pdf?id=JyGppnYf3i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153629>)

_Abstract unavailable from the accessible public sources._

## Causal Effects with Unobserved Unit Types in Interacting Human–AI Systems

**Authors:** William Overman; Mohamad Sadegh Shirani Faradonbeh; Mohsen Bayati

**ID:** 149288 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rPEiQxSWEc>) | [PDF](<https://openreview.net/pdf?id=rPEiQxSWEc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149288>)

_Abstract unavailable from the accessible public sources._

## A Characterization of Latent Variable Causal Models Consistent with Observational Data

**Authors:** Hongshuo Yang; Adiba Ejaz; Yushu Pan; Elias Bareinboim

**ID:** 148646 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wBBL9K3qVC>) | [PDF](<https://openreview.net/pdf?id=wBBL9K3qVC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148646>)

_Abstract unavailable from the accessible public sources._

## Neural Causal Models under Markov Equivalence

**Authors:** Yushu Pan; Hongshuo Yang; Adiba Ejaz; Elias Bareinboim

**ID:** 150107 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kdCfYqLJze>) | [PDF](<https://openreview.net/pdf?id=kdCfYqLJze>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150107>)

_Abstract unavailable from the accessible public sources._

## On\-Policy Counterfactual Influence

**Authors:** Rhys Gould; Yaowen Ye; Stuart J Russell; Jacob Steinhardt

**ID:** 148864 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uca0HSKmnM>) | [PDF](<https://openreview.net/pdf?id=uca0HSKmnM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148864>)

On\-policy training plays an important role in modern machine learning, especially in reinforcement learning \(RL\) for language models\. However, quantifying how training data influences the policy's behavior is difficult in on\-policy settings: one must account for the cascading effect by which a training event affects its immediate policy update, which in turn affects future action samples, which further affects future policy updates, and so on\. Attribution methods developed for off\-policy and supervised learning \(e\.g\. influence functions\) do not account for such \\emph\{policy\-data interaction\}, and can therefore fail in on\-policy settings\. In this work, we formalize the problem of attributing behaviors to individual training events in the on\-policy setting\. We derive an influence measure that accounts for policy\-data interaction while also being tractable to compute in practical training setups \(e\.g\. LM finetuning\) and for realistic optimizers \(e\.g\. AdamW\) at a cost that scales linearly in the total number of training events\. Empirically, our influence measure accurately predicts the true effect of ablating specific events during RL, while traditional methods fail to do so\. Further, we show that this influence accurately identifies helpful and harmful RL training events, allowing us to improve performance via influence\-weighted retraining\. Overall, we show that accounting for policy\-data interaction is both necessary and tractable, allowing for principled training intervention in modern RL pipelines\.

## CounterFlowNet: From Minimal Changes to Meaningful Counterfactual Explanations

**Authors:** Oleksii Furman; Patryk Marszałek; Jan Masłowski; Marek Śmieja; Maciej Zieba; Piotr Gaiński

**ID:** 148627 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wL6SWD7afK>) | [PDF](<https://openreview.net/pdf?id=wL6SWD7afK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148627>)

Counterfactual explanations \(CFs\) provide human\-interpretable insights into model's predictions by identifying minimal changes to input features that would alter the model's output\. However, existing methods struggle to generate multiple high\-quality explanations that \(1\) affect only a small portion of the features, \(2\) can be applied to tabular data with heterogeneous features, and \(3\) are consistent with the user\-defined constraints\. We proposeCounterFlowNet, a generative approach that formulates CF generation as sequential feature modification using conditional Generative Flow Networks \(GFlowNet\)\. CounterFlowNet is trained to sample CFs proportionally to a user\-specified reward function that can encode key CF desiderata: validity, sparsity, proximity and plausibility, encouraging high\-quality explanations\. The sequential formulation yields highly sparse edits, while a unified action space seamlessly supports continuous and categorical features\. Moreover, actionability constraints, such as immutability and monotonicity of features, can be enforced at inference time via action masking, without retraining\. Experiments on eight datasets under two evaluation protocols demonstrate that CounterFlowNet achieves superior trade\-offs between validity, sparsity, plausibility, and diversity with full satisfaction of the given constraints\.

## From Baselines to Transport Geodesics: Axiomatic Attribution via Optimal Generative Flows

**Authors:** Cenwei Zhang; Lin Zhu; Manxi Lin; Lei You

**ID:** 155282 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6mst9gKX4f>) | [PDF](<https://openreview.net/pdf?id=6mst9gKX4f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155282>)

Feature attributions often hide a critical modeling choice: they explain a prediction along a counterfactual path from a reference state to an input\. Different baselines, interpolations, and generative trajectories define different paths and can therefor produce different explanations\. We study this path ambiguity as a modeling problem\. Our central question is whether the path can be chosen by the data\-generating transport process, rather than by a hand\-designed interpolation or by the sensitivity geometry of the model being explained\. We separate attribution into fixed\-path credit allocation and path selection\. For a fixed path, we prove that the Aumann\-Shapley line integral is the unique attribution rule under standard fixed\-path axioms and explicit coordinate\-trace regularity\. For path selection, we minimize kinetic action over flows that transport a reference distribution to the data distribution, yielding a transport\-geodesic attribution principle\. We approximate this ideal with Rectified Flow and Reflow and derive stability bounds linking vector\-field error to attribution error\. Experiments show that lower\-action, transport\-consistent paths produce more stable and structured explanations, preserving competitive deletion faithfulness, without claiming data\-manifold membership\. Our code is available at https://anonymous\.4open\.science/r/temp\_OTshap\-6119\.

## S3Former: Sequential, Structural, and Statistical Fusion for Continuous\-Time Dynamic Graphs

**Authors:** Ziyan Li; Xiangyu Hu; Tianqing Zhu; Wanlun Ma; Ke Qin

**ID:** 155501\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155501

[Paper](<https://openreview.net/forum?id=56lSllQiF5>) | [PDF](<https://openreview.net/pdf?id=56lSllQiF5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155501>)

Continuous\-time dynamic graphs model evolving systems with irregularly timed interactions, where predicting future links requires reasoning over temporal evolution, local topology, and historical relation patterns\. Existing memory\-based and sequence\-based methods capture temporal dependencies effectively, but they often organize historical interactions as node memories or serialized neighbor sequences\. As a result, they lack explicit analysis of the interaction structure around candidate nodes which prevents them from explicitly modeling local topological patterns of candidate nodes at inference time\. They also lack explicit causal statistical memory for activity, recency, and repeated pairwise interactions\. Motivated by these drawbacks, we propose S3Former, a temporal graph framework that jointly models sequential dynamics, shared pair\-centered structure, and online statistical memory\. For each candidate interaction, S3Former encodes long\-term and short\-term historical sequences, constructs a history\-induced shared pair subgraph around the two endpoints, and computes node\-level and pair\-level statistics from past events only\. A two\-level context\-aware fusion mechanism further combines these signals: NodeCCF learns reliable endpoint representations, while PairCCF performs candidate\-specific relation correction using explicit pair memory\. Experiments on 10 dynamic graph benchmarks show that S3Former achieves state\-of\-the\-art performance on most datasets in both transductive and inductive link prediction\. Ablation studies confirm the effectiveness of shared pair\-subgraph modeling, online statistical memory, and hierarchical fusion\.

## Can the Parts Fool the Test? Counterfactual Pairing Cycles for Relational OOD

**Authors:** Yibo Zhou; Yirong Xiang

**ID:** 149781 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nLCr7f3CZV>) | [PDF](<https://openreview.net/pdf?id=nLCr7f3CZV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149781>)

Relational out\-of\-distribution errors are easy to describe and hard to evaluate cleanly\. An image may be natural, a caption may be fluent, and all mentioned objects may be common, yet the caption may describe the wrong relation in the image\. Many evaluations intended to test this behavior can be solved without checking the pairing at all, because negatives differ in caption style, template, length, object frequency, or image statistics\. We propose counterfactual pairing cycles, a blocked evaluation primitive that reuses the same two images and the same two captions on both sides of the comparison, changing only which image is paired with which caption\. This makes image\-only, text\-only, and additive component shortcuts cancel exactly in finite samples\. The same contrast also gives a training loss for relational outlier exposure and a diagnostic for bilinear vision\-language scores\. Across synthetic controls, GQA, and COCO, cycles separate coarse image\-caption matching from stricter role\-binding failures\. In a shortcut\-contaminated COCO outlier\-exposure stress test, a model selected by a perfect shortcut validation AUROC transfers poorly to exact relational cycles, while cycle training improves CycleAcc from \\\(0\.576\\\) to \\\(0\.911\\\)\. The main lesson is simple: to test whether a model understands a pairing, the benchmark should keep the parts fixed, change the pairing, and ask only about coupling\.

## Order\-based structure learning for zero\-inflated count data under data heterogeneity

**Authors:** Fariha Taskin; Junsouk Choi; Hyunwoong Chang

**ID:** 151587\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151587

[Paper](<https://openreview.net/forum?id=ZTJFimR2y9>) | [PDF](<https://openreview.net/pdf?id=ZTJFimR2y9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151587>)

We propose a structure learning method for directed acyclic graph \(DAG\) models of zero\-inflated multivariate count data\. Although causal structure learning with zero\-inflated Poisson models is identifiable, existing algorithms rely on local search over the DAG space, leading to poor scalability and a tendency to converge to suboptimal solutions\. To address these limitations, we develop a novel order\-based scoring framework that searches over variable orderings rather than directly over DAGs\. Building on this framework, we further extend the method to multiple heterogeneous datasets by identifying a shared variable ordering while allowing each dataset to have its own edge set\. We implement a stochastic hill climbing algorithm with a random\-to\-random \(R2R\) proposal operator to efficiently explore the ordering space\. Simulation studies show that the proposed method outperforms competing approaches and improves graph estimation accuracy under increasing heterogeneity when a shared causal ordering is preserved\. We apply the method to single\-nucleus RNA sequencing data from a major depressive disorder study\.

## Perception Without Engagement: Dissecting the Causal Discovery Deficit in LMMs

**Authors:** Jiafeng Liang; Zhihao Zhu; Zihan Zhang; Baoqi Ren; Tao Ren; Shixin Jiang; Runxuan Liu; Ming Liu; See\-Kiong Ng; Bing Qin

**ID:** 154291 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EsnHyvhAN4>) | [PDF](<https://openreview.net/pdf?id=EsnHyvhAN4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154291>)

_Abstract unavailable from the accessible public sources._

## Identifying Structural Biases from Causal Mechanism Shifts

**Authors:** Praharsh Nanavati; Jilles Vreeken; David Kaltenpoth

**ID:** 151733 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YUeprsuXFc>) | [PDF](<https://openreview.net/pdf?id=YUeprsuXFc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151733>)

_Abstract unavailable from the accessible public sources._

## Causal Discovery under Time\-Varying Delays

**Authors:** Lénaïg Cornanguer; David Kaltenpoth; Jilles Vreeken

**ID:** 152445 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T4HWDl4y39>) | [PDF](<https://openreview.net/pdf?id=T4HWDl4y39>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152445>)

_Abstract unavailable from the accessible public sources._

## Decision\-Aware Proximal Bridge Learning for Optimal Treatment Selection

**Authors:** Tomas Garriga; Alejandro Almodóvar; Axel Brando; Gerard Sanz; Eduard Serrahima de Cambra; Juan Parras

**ID:** 155924 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1mkWNVA6c7>) | [PDF](<https://openreview.net/pdf?id=1mkWNVA6c7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155924>)

Individualized treatment selection with continuous actions requires accurate causal response estimation in decision\-relevant regions, rather than uniformly over the entire action space\. Estimating a global causal response surface and then choosing the treatment that maximizes it can therefore be suboptimal, since standard estimation objectives allocate modeling effort according to the observed treatment distribution rather than the regions that determine the optimal decision\. While decision\-aware approaches have been studied in unconfounded settings, this problem remains underexplored in proximal causal inference, where proxy variables and bridge functions enable identification under suitable assumptions even in the presence of hidden confounding\. Despite recent progress, proximal methods have primarily focused on treatment\-effect and potential\-outcome estimation rather than treatment selection and optimal decision\-making\. To bridge this gap, we introduce a policy\-targeted weighted bridge loss that emphasizes decision\-relevant treatment regions while retaining global stabilization\. We prove a regret bound showing that the proposed weighted bridge loss controls treatment\-selection regret through a weighted ill\-posedness constant\. We instantiate the framework in decision\-aware variants of several proximal bridge solvers, yielding practical algorithms that alternate between weighted bridge estimation, response\-surface projection, policy update, and weight refinement\. Empirically, we find that decision\-aware weighting reduces regret across several bridge solvers, suggesting improved treatment selection in proximal settings\.

## When Actions Matter: Causal Affordances for Long\-Horizon Credit Assignment in World Models

**Authors:** Pradeep Kumar Banerjee; Frank Röder; Nihat Ay

**ID:** 155260 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=71oPZLHKsN>) | [PDF](<https://openreview.net/pdf?id=71oPZLHKsN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155260>)

Long\-horizon tasks require identifying which past decisions actually mattered for distant outcomes\. In deep achievement chains, a single early decision can determine success thousands of steps later, far beyond the reach of short\-horizon imagination\. We introduce WHAM, a world\-model agent for causal credit assignment in long\-horizon tasks\. WHAM ascends Pearl's causal hierarchy within a learned world model to identify decision\-critical bottleneck states, prioritizes replay and imagination around them, and propagates value through sparse bottleneck chains using replay\-derived returns\. A hierarchical bottleneck critic bridges credit across thousands of timesteps with provably controlled error\. On Crafter, WHAM achieves $67\.1\\%$ \($\+8\.2$ over a state\-of\-the\-art baseline\), with gains that grow systematically with achievement\-chain depth: diamond collection rises $17\\times$ to $8\.5\\%$, and the best seed reaches $12\.5\\%$, exceeding the human expert rate\. Long\-horizon credit flows where actions shape distant outcomes\.

## Act, Validate, Adapt: Closing the Causal Discovery\-Control Loop

**Authors:** Taqiya Ehsan; Shuren Xia; Jorge Ortiz

**ID:** 153013 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OdP0tR9M9Z>) | [PDF](<https://openreview.net/pdf?id=OdP0tR9M9Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153013>)

Every control action on a physical system is already a do\-operator intervention, yet causal discovery and control are typically treated as separate stages\. This separation leaves deployed controllers unable to test whether the causal graph they rely on remains valid under changing operating conditions\. We present \\textsc\{PolicyGRID\}, a closed\-loop framework that uses actuator interventions to validate candidate causal edges, fits a structural causal model over the validated graph, and reuses that graph for both policy optimization and latent\-regime monitoring\. In a multi\-actuator physical simulation with latent operating regimes \(building energy management\), interventional graph validation reduces closed\-loop energy use by 21\\% at a standard comfort target relative to an otherwise identical observation\-only graph, while improving four\-way latent\-context identification from 61\.2\\% to 80\.8\\%\. A targeted ablation shows that the gains originate in graph pruning\. Validation removes 16 of 47 candidate edges; with coefficient training held fixed, the validated graph reduces closed\-loop energy relative to the unvalidated candidate set, while refitting coefficients on the same graph does not\. On a live physical testbed, the same pipeline runs without code changes, performs 21 physical interventions, discovers 16 edges, and produces a target\-responsive control policy where the observation\-only baseline is insensitive to the comfort\-energy target\. These results show that physical controllers can use their own actions to validate causal structure and improve downstream control under latent regime shifts\.

## BASIL\-DCM: Biophysical Amortized Scalable Inference for Latent Dynamic Causal Modeling

**Authors:** Moein Khajehnejad; Forough Habibollahi; Leonardo Novelli; Adeel Razi

**ID:** 152400 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TNI4xmMH1Y>) | [PDF](<https://openreview.net/pdf?id=TNI4xmMH1Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152400>)

_Abstract unavailable from the accessible public sources._

## Weighted Sampling for Online Causal Discovery

**Authors:** Arnab Bhattacharyya; Philips George John; Sayantan Sen; Naganand Yadati

**ID:** 149926 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m8tnzuLcen>) | [PDF](<https://openreview.net/pdf?id=m8tnzuLcen>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149926>)

_Abstract unavailable from the accessible public sources._

## Integrating Background Knowledge for Scalable Causal Discovery

**Authors:** Mátyás Schubert; Theofanis Aslanidis; Tom Claassen; Sara Magliacane

**ID:** 154111 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GBk2ivbt6U>) | [PDF](<https://openreview.net/pdf?id=GBk2ivbt6U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154111>)

Expert background knowledge is often available in practical applications of causal discovery\. Such constraints on the true causal graph can help causal discovery in terms of identifiability of causal effects and accuracy of the learned structure, but also in reducing the space of candidate causal graphs\. As causal discovery can become computationally expensive for large number of variables, it is crucial to utilize background knowledge effectively  \\emph\{during\} the causal discovery process\. However, most current methods only use background knowledge in a postprocessing step after causal discovery to refine the learned graph\. In this work, we develop a framework for utilizing background knowledge during the causal discovery process, focusing especially on scalable causal discovery methods that recover only a subset of the whole graph\. We implement our framework for multiple algorithms and empirically show that utilizing background knowledge can both reduce computational requirements and increase the quality of the learned structures\.

## Graph Distance Based on Cause\-Effect Estimands with Latents

**Authors:** Zhufeng Li; Niki Kilbertus

**ID:** 155722 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3PbzWjbwZ4>) | [PDF](<https://openreview.net/pdf?id=3PbzWjbwZ4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155722>)

Causal discovery aims to recover graphs that represent causal relations among given variables from observations, and new methods are constantly being proposed\. Increasingly, the community raises questions about how much progress is made, because properly evaluating discovered graphs remains notoriously difficult, particularly under latent confounding\. We propose a graph distance measure for acyclic directed mixed graphs \(ADMGs\) based on the downstream task of cause\-effect estimation under unobserved confounding\. Our approach uses identification via fixing and a symbolic verifier to quantify how graph differences distort cause\-effect estimands for different treatment\-outcome pairs\. We analyze the behavior of the measure under different graph perturbations and demonstrate how it complements existing distance metrics\.

## Many Circuits, One Mechanism: Input Variation and Evaluation Granularity in Circuit Discovery

**Authors:** Alireza Bayat Makou; Jingcheng Niu; Subhabrata Dutta; Iryna Gurevych

**ID:** 156762 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ur42Xx1QPv>) | [PDF](<https://openreview.net/pdf?id=Ur42Xx1QPv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156762>)

Circuit discovery methods identify subgraphs that explain specific model behaviors, and structural differences between discovered circuits are commonly interpreted as evidence of distinct mechanisms\. We test this assumption by drawing input tokens from bands defined by their frequency in the pretraining data while holding the task fixed\. The discovered circuits appear specialized by frequency when compared structurally, but functional and representational analyses show no reliable evidence of corresponding differences in their computations\. We term this mismatch phantom specialization\. Using the Literal Sequence Copying task across four frequency bands plus a control sampled according to token frequency, we extract 75 circuits from five Pythia models \(70M\-1\.4B\)\. We find that structurally distinct circuits implement the same computation: band\-specific edges transfer broadly across bands, a core shared across most bands recovers at least 99% of circuit performance in models above 70M, and causal interchange interventions confirm that internal representations are interchangeable across frequency bands\. A smaller replication on a subject\-verb agreement task shows the same pattern: circuits differ structurally, transfer broadly across bands, and the core shared by most bands recovers nearly all of the circuit's accuracy in all five models\. Repeated extractions within the same frequency band further suggest that discovery algorithms sample from an equivalence class of valid subgraphs rather than recovering a unique mechanism\. Standard evaluation practice obscures this pattern: source\-level evaluation inflates apparent faithfulness, while edge\-level evaluation reveals the many\-to\-one mapping from structure to function\. We find no reliable evidence that frequency bands are processed by different computations\. In this work, we do not test specialization at the level of token positions or of features inside a component\. Our results show that structural differences between circuits are not sufficient evidence for distinct mechanisms, and that exposing this requires edge\-level evaluation and cross\-condition transfer tests\.

## S3Former: Sequential, Structural, and Statistical Fusion for Continuous\-Time Dynamic Graphs

**Authors:** Ziyan Li; Xiangyu Hu; Tianqing Zhu; Wanlun Ma; Ke Qin

**ID:** 155501\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155501

[Paper](<https://openreview.net/forum?id=56lSllQiF5>) | [PDF](<https://openreview.net/pdf?id=56lSllQiF5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155501>)

Continuous\-time dynamic graphs model evolving systems with irregularly timed interactions, where predicting future links requires reasoning over temporal evolution, local topology, and historical relation patterns\. Existing memory\-based and sequence\-based methods capture temporal dependencies effectively, but they often organize historical interactions as node memories or serialized neighbor sequences\. As a result, they lack explicit analysis of the interaction structure around candidate nodes which prevents them from explicitly modeling local topological patterns of candidate nodes at inference time\. They also lack explicit causal statistical memory for activity, recency, and repeated pairwise interactions\. Motivated by these drawbacks, we propose S3Former, a temporal graph framework that jointly models sequential dynamics, shared pair\-centered structure, and online statistical memory\. For each candidate interaction, S3Former encodes long\-term and short\-term historical sequences, constructs a history\-induced shared pair subgraph around the two endpoints, and computes node\-level and pair\-level statistics from past events only\. A two\-level context\-aware fusion mechanism further combines these signals: NodeCCF learns reliable endpoint representations, while PairCCF performs candidate\-specific relation correction using explicit pair memory\. Experiments on 10 dynamic graph benchmarks show that S3Former achieves state\-of\-the\-art performance on most datasets in both transductive and inductive link prediction\. Ablation studies confirm the effectiveness of shared pair\-subgraph modeling, online statistical memory, and hierarchical fusion\.

## ML\-assisted Randomization Tests for A/B Experiments

**Authors:** Wenxuan Guo; JungHo Lee; Panos Toulis

**ID:** 150264\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150264

[Paper](<https://openreview.net/forum?id=jSH9fXOyOf>) | [PDF](<https://openreview.net/pdf?id=jSH9fXOyOf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150264>)

We study the problem of detecting treatment effects in randomized A/B experiments when the effects are potentially small and complex\. A common approach in such settings is to fit machine learning \(ML\) models of outcomes on observed features and then apply classical $t$\-tests to residualized outcomes\. We show that this approach can suffer substantial power loss under treatment effect heterogeneity\. We propose a randomization\-based test whose statistic measures the out\-of\-sample predictive gain from including the treatment variable in a flexible ML model\. Leveraging experimental randomization and sample splitting, our test is finite\-sample valid for arbitrary models and loss functions\. We establish power guarantees under heterogeneous treatment effects and demonstrate substantial empirical gains in simulations and large\-scale A/B experiments\.

## Beyond IPS: Reliable Counterfactual Evaluation in Multi\-Stage Ad Systems without Logged Propensities

**Authors:** Mohsen Malmir; Mohamed A Radwan; houssam nassif; Murat Bayir

**ID:** 151796\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151796

[Paper](<https://openreview.net/forum?id=Xwazdb6LB8>) | [PDF](<https://openreview.net/pdf?id=Xwazdb6LB8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151796>)

Offline evaluation of ad ranking policies in multi stage delivery systems is fundamentally challenging because action propensities are often unavailable, limiting inverse propensity scoring \(IPS\) estimators\. While reward model based estimators such as Direct Method \(DM\) do not rely on propensity estimates, they can suffer from bias when candidate policies induce impression distributions that differ from the logging mixture\. In this work, we formalize DM based counterfactual replay under mixture logging and propose a mixture targeted shift correction based on density ratio weighting through domain classifier\. We further derive a per policy value estimation error and characterize an asymptotic error ceiling governed by the cold start mass\. Experiments on both ads delivery simulator and one week of production traffic from a large scale industrial CTR ranking system demonstrate that the proposed mixture weighted reward model consistently outperforms its unweighted counterpart under distribution shift\.

## Order\-based structure learning for zero\-inflated count data under data heterogeneity

**Authors:** Fariha Taskin; Junsouk Choi; Hyunwoong Chang

**ID:** 151587\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151587

[Paper](<https://openreview.net/forum?id=ZTJFimR2y9>) | [PDF](<https://openreview.net/pdf?id=ZTJFimR2y9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151587>)

We propose a structure learning method for directed acyclic graph \(DAG\) models of zero\-inflated multivariate count data\. Although causal structure learning with zero\-inflated Poisson models is identifiable, existing algorithms rely on local search over the DAG space, leading to poor scalability and a tendency to converge to suboptimal solutions\. To address these limitations, we develop a novel order\-based scoring framework that searches over variable orderings rather than directly over DAGs\. Building on this framework, we further extend the method to multiple heterogeneous datasets by identifying a shared variable ordering while allowing each dataset to have its own edge set\. We implement a stochastic hill climbing algorithm with a random\-to\-random \(R2R\) proposal operator to efficiently explore the ordering space\. Simulation studies show that the proposed method outperforms competing approaches and improves graph estimation accuracy under increasing heterogeneity when a shared causal ordering is preserved\. We apply the method to single\-nucleus RNA sequencing data from a major depressive disorder study\.

## Controllable Generative Sandbox for Causal Inference

**Authors:** Qi Zhang; Harsh Parikh; Ashley I Naimi; Razieh Nabi; Christopher Kim; Timothy L Lash

**ID:** 155513\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155513

[Paper](<https://openreview.net/forum?id=52BMkNkLA7>) | [PDF](<https://openreview.net/pdf?id=52BMkNkLA7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155513>)

Method validation and study design in causal inference rely on synthetic data with known counterfactuals\. Existing simulators trade off \*distributional realism\*, the ability to capture mixed\-type and multimodal tabular data, against \*causal controllability\*, including explicit control over overlap, unmeasured confounding, and treatment effect heterogeneity\. We introduce \*\*CausalMix\*\*, a variational generative framework that closes this gap by coupling a mixture of Gaussian latent priors with data\-type\-specific decoders for continuous, binary, and categorical variables\. The model incorporates explicit causal controls: an overlap regularizer shaping propensity\-score distributions, alongside direct parameterizations of confounding strength and effect heterogeneity\. This unified objective preserves fidelity to the observed data while enabling factorial manipulation of causal mechanisms, allowing overlap, confounding strength, and treatment effect heterogeneity to be varied independently at design time\. Across evaluation settings, \*\*CausalMix\*\* achieves strong distributional fidelity on mixed\-type tables while providing stable, fine\-grained causal control\. We demonstrate practical utility in a comparative safety study of metastatic castration\-resistant prostate cancer treatments, using \*\*CausalMix\*\* to compare estimators under calibrated data\-generating processes, tune hyperparameters, and conduct simulation\-based power analyses under targeted treatment effect heterogeneity scenarios\.

## Causal Inference for Sequential Settings under Interference and Latent Confounding

**Authors:** Phevos Paschalidis; Constantinos Daskalakis; Devavrat Shah

**ID:** 149757\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149757

[Paper](<https://openreview.net/forum?id=nZvLqHKKp6>) | [PDF](<https://openreview.net/pdf?id=nZvLqHKKp6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149757>)

We study causal inference under outcome interference for sequential, observational settings\.      We consider settings where the binary outcomes over $N$ units are Markovian across $T$ time steps;      at each time step, the outcomes of $N$ units have pairwise dependencies captured through an Ising model;      and, each outcome is impacted through a latent external field capturing effects of latent confounders\.      Similar to panel data literature, these latent confounders are modeled to have a low\-rank factor     structure\. Our data is a single sample from this high\-dimensional distribution\. To estimate causal quantities of interest, we provide a computationally efficient method based on Maximum Pseudolikelihood Estimation \(MPLE\) for learning the model parameters\. Under reasonable assumptions, we establish non\-asymptotic consistency for parameter estimation\. Therefore,      sampling from the learnt model enables faithful estimation of causal quantities of interest\.      We demonstrate the efficacy of the method through synthetic experiments as well as a real\-world case\-study      investigating causal effects of vaccine rates on COVID\-19 death rates within US counties nationwide\.

## Coarsening Linear Non\-Gaussian Causal Models with Cycles

**Authors:** Francisco Madaleno; Francisco Pereira; Alex Markham

**ID:** 152930\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152930

[Paper](<https://openreview.net/forum?id=PIqUM6XQI4>) | [PDF](<https://openreview.net/pdf?id=PIqUM6XQI4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152930>)

_Abstract unavailable from the accessible public sources._

## From Groups to Rings: Causal Evidence for Algebraic Decomposition in Grokked Transformers

**Authors:** Shurui Zheng; Fanhong Li; Zhixing Huang; Zixi Li; Lei Ji

**ID:** 155317\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155317

[Paper](<https://openreview.net/forum?id=6WDYFB6ALB>) | [PDF](<https://openreview.net/pdf?id=6WDYFB6ALB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155317>)

Prior work has shown that grokked Transformers implement discrete Fourier transforms or group character representations for modular arithmetic\. We unify these findings under the Wedderburn\-\-Artin decomposition: using interchange intervention accuracy \(IIA\), a causal method stronger than ablation, we show that grokked models decompose computation along the Wedderburn components of the target algebra\. Across 11 commutative algebras over $\\F\_p$ \($p = 2,3,5,7$\)\-\-\-including 6 with nontrivial Jacobson radical\-\-\-all grokked models achieve raw IIA $\\geq 0\.97$\. When models predict incorrectly, errors remain compartmentalized by component \($3\.8\\times$ chance\), confirming that independence is structural, not a byproduct of accuracy\. Training dynamics reveal that Wedderburn alignment emerges synchronously with grokking\. For non\-commutative groups, models exhibit \\emph\{selective\} Wedderburn alignment; non\-commutativity raises a capacity threshold that larger models overcome\.

## Transporting the Past: An Optimal Transport View of Backtracking Counterfactuals

**Authors:** Zhangyi Liu; Sayedpouria Fatemi; Suvrit Sra

**ID:** 153288\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153288

[Paper](<https://openreview.net/forum?id=MNVvTXlGGM>) | [PDF](<https://openreview.net/pdf?id=MNVvTXlGGM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153288>)

We study backtracking counterfactual inference for \*Structural Causal Models\* \(SCMs\) through the lens of optimal transport\. In SCMs, a factual observation generally induces a posterior distribution over exogenous variables, making counterfactual inference inherently distributional\. We introduce two complementary frameworks that transport this posterior onto the set of exogenous configurations satisfying a desired counterfactual query\. The first constructs a natural pointwise projection and is suitable when the transported exogenous distribution can be used directly\. The second enforces mutual independence among counterfactual exogenous variables, so that the transported variables remain interpretable as genuine exogenous noises of the same SCM\. We show that both frameworks are consistent with the original backtracking counterfactual principle, and we propose marginal, penalty\-based, and hard\-constrained solvers for finite\-posterior settings\. Synthetic experiments on non\-bijective SCMs illustrate the geometry of the problem and reveal trade\-offs among transport cost, counterfactual constraint satisfaction, and preservation of exogenous independence\.

## Causal\-Geo: Neuro\-Symbolic Spatial Grounding for Situated Agent Planning

**Authors:** Sanbi Luo

**ID:** 155379 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=642y9PfzJm>) | [PDF](<https://openreview.net/pdf?id=642y9PfzJm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155379>)

Foundation Models \(LLMs/VLMs\) exhibit strong semantic reasoning capabilities but remain challenged by situated planning in unstructured physical environments\. A key limitation is the Semantic\-Geometric Gap: while models interpret linguistic and visual intent, they lack explicit grounding in continuous spatial structures, yielding physically infeasible or unsafe plans\. We propose Causal\-Geo, a neuro\-symbolic framework that bridges this gap by integrating LLM reasoning with rigorous geometric planning\. Rather than treating physical constraints heuristically, we model the environment as a continuous metric tensor field\. LLMs translate high\-level semantic intents into potential functions that dynamically warp this manifold via conformal scaling\. This casts intent\-driven planning as a geodesic optimization problem, solved efficiently via discrete graph search\. Experiments across diverse domains—from a macro\-scale $12\.2 \\text\{ km\}^2$ wetland digital twin to micro\-scale indoor robotic navigation—demonstrate that Causal\-Geo enables robust zero\-shot planning\. It significantly outperforms reinforcement learning in sparse\-reward settings and prevents the \`\`physical hallucinations'' common in representative hierarchical LLM planners\. Crucially, Causal\-Geo acts as a rigorous physical gatekeeper, guaranteeing invariant safety against foundation model variance and demonstrating graceful degradation under contradictory prompts\. These results establish continuous geometric grounding as a principled, domain\-agnostic pathway toward physically consistent situated agent planning\.

## Identifying Structural Biases from Causal Mechanism Shifts

**Authors:** Praharsh Nanavati; Jilles Vreeken; David Kaltenpoth

**ID:** 151733\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151733

[Paper](<https://openreview.net/forum?id=YUeprsuXFc>) | [PDF](<https://openreview.net/pdf?id=YUeprsuXFc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151733>)

_Abstract unavailable from the accessible public sources._

## Causal Discovery under Time\-Varying Delays

**Authors:** Lénaïg Cornanguer; David Kaltenpoth; Jilles Vreeken

**ID:** 152445\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152445

[Paper](<https://openreview.net/forum?id=T4HWDl4y39>) | [PDF](<https://openreview.net/pdf?id=T4HWDl4y39>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152445>)

_Abstract unavailable from the accessible public sources._

## Data\-Driven Covariate Selection for Nonparametric and Cycle\-Agnostic Causal Effect Estimation

**Authors:** Ana L Vicente; Gijs van Seeventer; Saber Salehkaleybar

**ID:** 155410 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5rgmG7fjJh>) | [PDF](<https://openreview.net/pdf?id=5rgmG7fjJh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155410>)

Estimating causal effects from observational data requires identifying valid adjustment sets\. This task is especially challenging in realistic settings where latent confounding and feedback loops are present\. Existing approaches typically assume acyclicity or rely on global causal structure learning, limiting applicability and computational efficiency\. In this work, we study a local, data\-driven method for covariate selection based on conditional independence information\. While this method is known to be sound and complete in acyclic causal models, its validity in the presence of cycles has remained unclear\. Our main contribution is to show that these guarantees extend to cyclic causal models\. In particular, our result relies on the invariance of conditional independence assertions under $\\sigma$\-acyclification\. These findings establish a unified, cycle\-agnostic perspective on covariate selection and causal effect estimation, showing that the method applies across cyclic and acyclic settings without modification\. Empirically, we validate this on extensive synthetic data, showing reliable performance in cyclic causal models\.

## Integrating Background Knowledge for Scalable Causal Discovery

**Authors:** Mátyás Schubert; Theofanis Aslanidis; Tom Claassen; Sara Magliacane

**ID:** 154111\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154111

[Paper](<https://openreview.net/forum?id=GBk2ivbt6U>) | [PDF](<https://openreview.net/pdf?id=GBk2ivbt6U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154111>)

Expert background knowledge is often available in practical applications of causal discovery\. Such constraints on the true causal graph can help causal discovery in terms of identifiability of causal effects and accuracy of the learned structure, but also in reducing the space of candidate causal graphs\. As causal discovery can become computationally expensive for large number of variables, it is crucial to utilize background knowledge effectively  \\emph\{during\} the causal discovery process\. However, most current methods only use background knowledge in a postprocessing step after causal discovery to refine the learned graph\. In this work, we develop a framework for utilizing background knowledge during the causal discovery process, focusing especially on scalable causal discovery methods that recover only a subset of the whole graph\. We implement our framework for multiple algorithms and empirically show that utilizing background knowledge can both reduce computational requirements and increase the quality of the learned structures\.

## Graph Distance Based on Cause\-Effect Estimands with Latents

**Authors:** Zhufeng Li; Niki Kilbertus

**ID:** 155722\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155722

[Paper](<https://openreview.net/forum?id=3PbzWjbwZ4>) | [PDF](<https://openreview.net/pdf?id=3PbzWjbwZ4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155722>)

Causal discovery aims to recover graphs that represent causal relations among given variables from observations, and new methods are constantly being proposed\. Increasingly, the community raises questions about how much progress is made, because properly evaluating discovered graphs remains notoriously difficult, particularly under latent confounding\. We propose a graph distance measure for acyclic directed mixed graphs \(ADMGs\) based on the downstream task of cause\-effect estimation under unobserved confounding\. Our approach uses identification via fixing and a symbolic verifier to quantify how graph differences distort cause\-effect estimands for different treatment\-outcome pairs\. We analyze the behavior of the measure under different graph perturbations and demonstrate how it complements existing distance metrics\.

## Many Circuits, One Mechanism: Input Variation and Evaluation Granularity in Circuit Discovery

**Authors:** Alireza Bayat Makou; Jingcheng Niu; Subhabrata Dutta; Iryna Gurevych

**ID:** 156762\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156762

[Paper](<https://openreview.net/forum?id=Ur42Xx1QPv>) | [PDF](<https://openreview.net/pdf?id=Ur42Xx1QPv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156762>)

Circuit discovery methods identify subgraphs that explain specific model behaviors, and structural differences between discovered circuits are commonly interpreted as evidence of distinct mechanisms\. We test this assumption by drawing input tokens from bands defined by their frequency in the pretraining data while holding the task fixed\. The discovered circuits appear specialized by frequency when compared structurally, but functional and representational analyses show no reliable evidence of corresponding differences in their computations\. We term this mismatch phantom specialization\. Using the Literal Sequence Copying task across four frequency bands plus a control sampled according to token frequency, we extract 75 circuits from five Pythia models \(70M\-1\.4B\)\. We find that structurally distinct circuits implement the same computation: band\-specific edges transfer broadly across bands, a core shared across most bands recovers at least 99% of circuit performance in models above 70M, and causal interchange interventions confirm that internal representations are interchangeable across frequency bands\. A smaller replication on a subject\-verb agreement task shows the same pattern: circuits differ structurally, transfer broadly across bands, and the core shared by most bands recovers nearly all of the circuit's accuracy in all five models\. Repeated extractions within the same frequency band further suggest that discovery algorithms sample from an equivalence class of valid subgraphs rather than recovering a unique mechanism\. Standard evaluation practice obscures this pattern: source\-level evaluation inflates apparent faithfulness, while edge\-level evaluation reveals the many\-to\-one mapping from structure to function\. We find no reliable evidence that frequency bands are processed by different computations\. In this work, we do not test specialization at the level of token positions or of features inside a component\. Our results show that structural differences between circuits are not sufficient evidence for distinct mechanisms, and that exposing this requires edge\-level evaluation and cross\-condition transfer tests\.

## LACE: Latent Alignment via Counterfactual Embeddings

**Authors:** Harsh Udai; Konda Reddy Mopuri

**ID:** 153001\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153001

[Paper](<https://openreview.net/forum?id=OhzpFEscSy>) | [PDF](<https://openreview.net/pdf?id=OhzpFEscSy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153001>)

_Abstract unavailable from the accessible public sources._

## Tracing Actual Causes with Counterfactual Witness Maps

**Authors:** Tim Woydt; Matej Zečević; Kristian Kersting; Moritz Willig

**ID:** 152706\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152706

[Paper](<https://openreview.net/forum?id=R0MXum0YPw>) | [PDF](<https://openreview.net/pdf?id=R0MXum0YPw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152706>)

Halpernian actual causation, the formal study of which events in a specific situation caused a specific outcome in acyclic structural causal models, underpins legal responsibility, moral blame, and the assessment of causal harm\. Despite the rich logical framework, no prior sound and complete enumeration procedure is known for finding \*all\* actual causes in a given setting, blocking downstream tasks such as responsibility attribution, blame assessment, and causal\-harm grading that aggregate over the full cause set\. We close this gap by introducing \*witness targets\*: sets of joint configurations containing every counterfactual witness\. In combination with an \*ancestor intervention grammar\* we derive a finite directed acyclic \*witness map\*\. We prove that for every actual cause there exists a contingency set such that the joint intervention set appears as a node of this map, and present an algorithm for \*Tracing Actual Causes \(TrAC\)\* that is sound and complete for enumerating all actual causes of any target event\. We compare TrAC empirically with existing single\-cause baselines on random Boolean structural causal models, demonstrating practical feasibility for graphs of up to 15 nodes\.

## Offloading Score: Measuring AI Reliance through Counterfactual Workflows

**Authors:** Vishakh Padmakumar; Lujain Ibrahim; Zora Wang; Jennifer Wang; Q\.Vera Liao; Diyi Yang

**ID:** 139388\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139388

[Paper](<https://openreview.net/forum?id=TT3ACb02l4>) | [PDF](<https://openreview.net/pdf?id=TT3ACb02l4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139388>)

AI tools are increasingly integrated into real\-world workflows\. However, existing measures of reliance on these tools focus on AI output adoption or on self\-reported indicators, rather than how task effort is distributed between users and tools\.  Here, we introduce offloading score, a measure of reliance that quantifies the fraction of cognitive effort offloaded to an AI tool\. Offloading score is simulation\-based\-\-\-we construct a counterfactual workflow by estimating how the user would have completed the task without the tool, and then computing the fraction of steps saved by using the tool\.  We validate offloading score through intrinsic evaluations of metric validity, and a controlled user study \($n=40$\) with developers performing programming tasks using AI tools\.  We vary time pressure to test whether reliance measures capture the known increase in reliance under time pressure\. We show that offloading score detects significantly higher reliance in time\-constrained settings \($\+43\\%$, $p=0\.018$\), while usage\-based and self\-reported baseline measures do not distinguish the conditions\.  We complement this with descriptive insights showing that higher reliance manifests as greater delegation and more direct reuse of AI outputs\. Finally, we demonstrate an approach of using offloading score in combination with target outcomes of reliance \(e\.g\., task understanding\) to identify when reliance may be \(in\)appropriate\. Our framework offers two contributions: an instrument users can apply to measure and reflect on their own reliance, and a quantitative signal that agent designers can utilize to mitigate overreliance\.

## Automated Causal Effect Estimation through Self\-Evolving AI

**Authors:** Can Wang; Hongyu Zhao; Yiqun Chen

**ID:** 150563 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hEJF4xVLvo>) | [PDF](<https://openreview.net/pdf?id=hEJF4xVLvo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150563>)

Causal inference is central to scientific discovery, yet choosing appropriate methods remains challenging due to the complexity of statistical methodology and real\-world data\. Inspired by the success of artificial intelligence in accelerating scientific software, we introduce an evolutionary framework that uses large language models to discover and iteratively refine causal methods\. Across benchmarks, our estimators consistently outperform established baselines: our best estimator lay on the Pareto frontier of 58 human submissions for a recent community competition\. We also extend the algorithm to achieve competitive results in settings with estimated rewards\. Analysis of the evolutionary trajectories shows that agents progressively discover sophisticated strategies tailored to unrevealed data\-generating mechanisms\. Our findings suggest that language\-model\-guided evolution could be used in scientific settings with partially observed rewards such as causal inference\.

## Budgeted Multi\-Source Counterfactual Annotation for Off\-Policy Evaluation

**Authors:** Biao Xiang; Ali Eshragh; Yuexing Li; Kai Wang

**ID:** 155643\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155643

[Paper](<https://openreview.net/forum?id=446GKdY1L2>) | [PDF](<https://openreview.net/pdf?id=446GKdY1L2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155643>)

Off\-policy evaluation \(OPE\) estimates the value of a target policy from logged data, but limited behavior\-policy coverage can force high\-variance reweighting or reward\-model extrapolation\. Counterfactual annotations can add evidence about unobserved actions, yet practical sources, including domain experts and LLMs, may be costly, biased, or noisy\. We study budgeted acquisition of such annotations for contextual\-bandit OPE\. Given source\-specific costs and error profiles, we formulate an integer allocation problem over context\-action pairs and annotation sources to minimize the component of estimator variance that depends on the annotation plan\. We characterize when annotations are valuable through a first\-annotation threshold and local annotation\-value regimes\. For the coupled multi\-source problem, we develop a majorization\-minimization algorithm with dynamic\-programming subroutines that monotonically improves the objective\. Experiments in synthetic clinical and LLM\-annotated education bandits show that our proposed allocation method reduces the optimized variance component by $20\.58$% and $10\.77$%, respectively, relative to no\-annotation baseline\.

## Conditional Counterfactual Mean Embeddings: Doubly Robust Estimation and Learning Rates

**Authors:** Thatchanon Anancharoenkij; Donlapark Ponnoprat

**ID:** 152006\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152006

[Paper](<https://openreview.net/forum?id=WBrsTgkHw7>) | [PDF](<https://openreview.net/pdf?id=WBrsTgkHw7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152006>)

A complete understanding of heterogeneous treatment effects requires fully capturing the conditional distribution of the counterfactual outcomes\. To this end, we propose the \*Conditional Counterfactual Mean Embeddings\* \(CCME\), a framework that embeds conditional distributions of counterfactual outcomes into a reproducing kernel Hilbert space \(RKHS\)\. Under this framework, we develop a two\-stage meta\-estimator for CCME that accommodates any RKHS\-valued regression in each stage\. Based on this meta\-estimator, we develop three practical CCME estimators: \(1\) \*Ridge Regression\* estimator, \(2\) \*Deep Feature\* estimator that parameterizes the feature map by a neural network, and \(3\) \*Neural\-Kernel\* estimator that performs RKHS\-valued regression, with the coefficients parameterized by a neural network\. We provide finite\-sample convergence rates for all estimators, establishing that they possess the double robustness property\. Our experiments demonstrate that our estimators accurately recover distributional features including multimodal structure of conditional counterfactual distributions\.

## Learning Deployable Causal Action Geometry under Temporal Non\-Stationarity

**Authors:** Changjian Liu; Tianyu Wang; Yuwei Xu; Xiaoxuan Deng; Zhilin Zhang; Yong Gao; Chuan Yu; Jian Xu; Bo Zheng

**ID:** 154378\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154378

[Paper](<https://openreview.net/forum?id=E0O9X7qd9h>) | [PDF](<https://openreview.net/pdf?id=E0O9X7qd9h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154378>)

Learning a response law for continuous decisions from observational time series is central to many real\-world decision systems, yet temporal non\-stationarity poses a fundamental challenge: outcome levels drift over time, causing naive models that fit raw outcomes to conflate treatment effects with shifting baseline conditions\. Even when the one\-step response is identifiable, unrestricted cross\-time generalization remains fundamentally ill\-posed\. Thus, we introduce a constrained decision target based on a causal action geometry with anchored link\-scale morphologies\. Our approach constructs anchored contrasts over a family of link functions, isolating the action\-dependent component of the response that can be shared across periods while allowing flexible, period\-specific calibration\. This yields a morphology\-restricted oracle target for continuous decision making under temporal drift\. Building on this formulation, we develop a two\-stage orthogonal estimator that first obtains cross\-fitted pilot estimates of anchored responses and then performs honest profiled selection over morphology and representation classes\. The resulting estimator admits oracle guarantees for the restricted target and, under approximate persistence, produces decision rules that remain near optimal in future periods\. Experiments on synthetic data and a large\-scale e\-commerce pricing application support the proposed target and its decision benefits under temporal shift\.

## Validating Causal Abstraction Metrics on Simulated Complex Systems

**Authors:** Maxime Méloux; Tiago Pimentel; François Portet; Maxime Peyrard

**ID:** 149449 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q05m7XZ9Y9>) | [PDF](<https://openreview.net/pdf?id=q05m7XZ9Y9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149449>)

A central goal of science is to produce valid explanations of complex systems: high\-level causal accounts that faithfully reflect the behavior of lower\-level mechanisms\. Yet no consensus exists on how to measure whether a proposed high\-level explanation is actually valid\. We introduce a benchmark of ten complex systems spanning discrete and continuous state spaces and static and dynamical regimes, each equipped with consensual ground\-truth causal explanations and invalid contrastive conditions\. Within a unified causal abstraction framework, we systematically evaluate over thirty candidate metrics drawn from observational, functional, information\-theoretic, and causal families\. Our results show that only the latter reliably discriminates valid from invalid abstractions, and only when incorporating faithfulness testing over unmapped variables\. Building on these findings, we introduce the Causal Abstraction Error \(CAE\), a continuous validity metric with an explicit faithfulness test, which passes all discrimination tests across every system and converges with as few as 30 sampled interventions\. We offer it as a general\-purpose metric for the discovery and validation of high\-level explanations of complex systems\.

## Orthogonal Uplift Learning with Permutation\-Invariant Representations for Combinatorial Treatments

**Authors:** Jiacan Gao; Xinyan Su; Mingyuan Ma; Xiao Xu; Xinrui Wan; Tianqi Gu; Enyun Yu; Jiecheng Guo; zhiheng zhang

**ID:** 154343\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154343

[Paper](<https://openreview.net/forum?id=EIVfHEXb1P>) | [PDF](<https://openreview.net/pdf?id=EIVfHEXb1P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154343>)

We study uplift estimation for combinatorial treatments\. Uplift measures the pure incremental causal effect of an intervention, such as sending a coupon or a marketing message, on user behavior, modeled as a conditional individual treatment effect\. Many real\-world interventions are combinatorial: a treatment is a policy that specifies context\-dependent action distributions rather than a single atomic label\.  Although recent work considers structured treatments, most methods rely on categorical or opaque encodings, limiting robustness and generalization to rare or newly deployed policies\. We propose an uplift estimation framework that aligns treatment representation with causal semantics\.  Each policy is represented by the mixture it induces over context\-action components and embedded via a permutation\-invariant aggregation\. This representation is integrated into an orthogonalized low\-rank uplift model, extending Robinson\-style decompositions to learned, vector\-valued treatments\.  We show that the resulting estimator is expressive for policy\-induced causal effects, orthogonally robust to nuisance estimation errors, and stable under small policy perturbations\. Experiments on large\-scale randomized platform data demonstrate improved uplift accuracy and stability in long\-tailed policy regimes\.

## Optimal Experiments for Partial Causal Effect Identification

**Authors:** Tobias Maringgele; Jalal Etesami

**ID:** 154125\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154125

[Paper](<https://openreview.net/forum?id=G61y8qp0of>) | [PDF](<https://openreview.net/pdf?id=G61y8qp0of>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154125>)

Causal queries are often only partially identifiable from observational data, and experiments that could tighten the resulting bounds are typically costly\. We study the problem of selecting, prior to observing experimental outcomes, a cost\-constrained subset of experiments that maximally tightens bounds on a target query\. We formalize this as the max\-potency problem, where epistemic potency measures the worst\-case reduction in bound width guaranteed by an experiment, and show that this problem is NP\-hard via a reduction from 0\-1 knapsack\. Building on the polynomial\-programming framework of Duarte et al\. \(2023\), we give a general procedure for evaluating epistemic potency in discrete settings\. To control the super\-exponential search space, we introduce two graphical pruning criteria that depend only on the causal graph and the query: a novel path\-interception rule that exploits district structure to certify zero potency in linear time, and an identifiability check based on the ID algorithm\. On Erdős–Rényi random graphs and 11 bnlearn benchmark networks, the two criteria together prune 50\-88% of candidate experiments on average without solving a single polynomial program\. For the general subset search, we show that ID\-pruned experiments are combinatorially inert, yielding a super\-exponential reduction in the number of subsets evaluated\. We close with an end\-to\-end demonstration on observational NHANES data, selecting optimal experiments for estimating the effect of physical activity on diabetes\.

## LACE: Latent Alignment via Counterfactual Embeddings

**Authors:** Harsh Udai; Konda Reddy Mopuri

**ID:** 153001\-\-3 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153001

[Paper](<https://openreview.net/forum?id=OhzpFEscSy>) | [PDF](<https://openreview.net/pdf?id=OhzpFEscSy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153001>)

_Abstract unavailable from the accessible public sources._

## Tracing Actual Causes with Counterfactual Witness Maps

**Authors:** Tim Woydt; Matej Zečević; Kristian Kersting; Moritz Willig

**ID:** 152706\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152706

[Paper](<https://openreview.net/forum?id=R0MXum0YPw>) | [PDF](<https://openreview.net/pdf?id=R0MXum0YPw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152706>)

Halpernian actual causation, the formal study of which events in a specific situation caused a specific outcome in acyclic structural causal models, underpins legal responsibility, moral blame, and the assessment of causal harm\. Despite the rich logical framework, no prior sound and complete enumeration procedure is known for finding \*all\* actual causes in a given setting, blocking downstream tasks such as responsibility attribution, blame assessment, and causal\-harm grading that aggregate over the full cause set\. We close this gap by introducing \*witness targets\*: sets of joint configurations containing every counterfactual witness\. In combination with an \*ancestor intervention grammar\* we derive a finite directed acyclic \*witness map\*\. We prove that for every actual cause there exists a contingency set such that the joint intervention set appears as a node of this map, and present an algorithm for \*Tracing Actual Causes \(TrAC\)\* that is sound and complete for enumerating all actual causes of any target event\. We compare TrAC empirically with existing single\-cause baselines on random Boolean structural causal models, demonstrating practical feasibility for graphs of up to 15 nodes\.

## Offloading Score: Measuring AI Reliance through Counterfactual Workflows

**Authors:** Vishakh Padmakumar; Lujain Ibrahim; Zora Wang; Jennifer Wang; Q\.Vera Liao; Diyi Yang

**ID:** 139388\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139388

[Paper](<https://openreview.net/forum?id=TT3ACb02l4>) | [PDF](<https://openreview.net/pdf?id=TT3ACb02l4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139388>)

AI tools are increasingly integrated into real\-world workflows\. However, existing measures of reliance on these tools focus on AI output adoption or on self\-reported indicators, rather than how task effort is distributed between users and tools\.  Here, we introduce offloading score, a measure of reliance that quantifies the fraction of cognitive effort offloaded to an AI tool\. Offloading score is simulation\-based\-\-\-we construct a counterfactual workflow by estimating how the user would have completed the task without the tool, and then computing the fraction of steps saved by using the tool\.  We validate offloading score through intrinsic evaluations of metric validity, and a controlled user study \($n=40$\) with developers performing programming tasks using AI tools\.  We vary time pressure to test whether reliance measures capture the known increase in reliance under time pressure\. We show that offloading score detects significantly higher reliance in time\-constrained settings \($\+43\\%$, $p=0\.018$\), while usage\-based and self\-reported baseline measures do not distinguish the conditions\.  We complement this with descriptive insights showing that higher reliance manifests as greater delegation and more direct reuse of AI outputs\. Finally, we demonstrate an approach of using offloading score in combination with target outcomes of reliance \(e\.g\., task understanding\) to identify when reliance may be \(in\)appropriate\. Our framework offers two contributions: an instrument users can apply to measure and reflect on their own reliance, and a quantitative signal that agent designers can utilize to mitigate overreliance\.

## Automated Causal Effect Estimation through Self\-Evolving AI

**Authors:** Can Wang; Hongyu Zhao; Yiqun Chen

**ID:** 150563\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150563

[Paper](<https://openreview.net/forum?id=hEJF4xVLvo>) | [PDF](<https://openreview.net/pdf?id=hEJF4xVLvo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150563>)

Causal inference is central to scientific discovery, yet choosing appropriate methods remains challenging due to the complexity of statistical methodology and real\-world data\. Inspired by the success of artificial intelligence in accelerating scientific software, we introduce an evolutionary framework that uses large language models to discover and iteratively refine causal methods\. Across benchmarks, our estimators consistently outperform established baselines: our best estimator lay on the Pareto frontier of 58 human submissions for a recent community competition\. We also extend the algorithm to achieve competitive results in settings with estimated rewards\. Analysis of the evolutionary trajectories shows that agents progressively discover sophisticated strategies tailored to unrevealed data\-generating mechanisms\. Our findings suggest that language\-model\-guided evolution could be used in scientific settings with partially observed rewards such as causal inference\.

## Causal Discovery via Transformed Low\-Rank Quantile Surfaces

**Authors:** Ryo Kamimura; Thong Pham

**ID:** 149402 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qKXBoHz41o>) | [PDF](<https://openreview.net/pdf?id=qKXBoHz41o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149402>)

_Abstract unavailable from the accessible public sources._

## Localizing and Repairing Sparse\-Prompt Failure in SAM Decoders via Box\-to\-Point Counterfactual

**Authors:** Xiaobing Yu; Peijie Qiu; Jin Yang; Zhaoqi An; Weiwei Ma; Xiao Wu; XUANZHAO DONG; Wenhui Zhu; Xiwen Chen; Xiaoqi Zhao; Xiaofeng Liu

**ID:** 148596 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wYJKrfS22K>) | [PDF](<https://openreview.net/pdf?id=wYJKrfS22K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148596>)

_Abstract unavailable from the accessible public sources._

## A Topological Sorting Criterion for Random Causal Directed Acyclic Graphs

**Authors:** Alexander Reisach; Antoine Chambaz; Gilles Blanchard; Sebastian Weichwald

**ID:** 154767 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B65Mjlgily>) | [PDF](<https://openreview.net/pdf?id=B65Mjlgily>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154767>)

Random directed acyclic graphs \(DAGs\) based on imposing an order on Erdős–Rényi and scale free random graphs are widely used for evaluating causal discovery algorithms\. We show that in such DAGs, the set of nodes reachable via open paths, termed relatives, increases monotonically along the causal order\. We assess the prevalence of this pattern numerically, and demonstrate that it can be exploited for causal order recovery via sorting by the estimated number of relatives\. We note that many simulations in the literature feature settings where this yields an excellent proxy for the causal order, and show that a strict increase of relatives along the causal order leads to a singular Markov equivalence class\. We propose sampling time\-series DAGs as a possible alternative and discuss implications for causal discovery algorithms and their evaluation on synthetic data\.

## Causal Edit Serialization

**Authors:** Louis Robinson

**ID:** 153668 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jed6Feg5uv>) | [PDF](<https://openreview.net/pdf?id=Jed6Feg5uv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153668>)

We study \\emph\{Causal Edit Serialization\} \(CES\), a decoder\-only transformer extension that emits explicit edit programs while preserving a standard causal mask\. CES supports \\emph\{insert\}, \\emph\{delete\}, \\emph\{replace\}, \\emph\{move\}, and \\emph\{copy\} operations through a serialized edit domain\-specific language \(DSL\), a lightweight localization head, and dual\-index rotary position embeddings that separate generation order from source\-token addressing\. We train on both self\-supervised random corruptions and a large GPT\-5\-mini edit corpus built from ClimbMix documents by generating approximate human\-like revisions and parsing them into the same edit DSL; copy examples are added from a separate repeated\-span mining pipeline\. We compare CES against standard autoregressive training and an autoregressive DSL baseline that emits textualized positions directly\. Across model scales and data regimes, CES learns strong source\-position localization, improves human\-target similarity on WikiAtomic/CoEdIT\-style source\-target pairs, and produces higher valid\-edit rates than the AR\-DSL baseline, while incurring only a modest degradation in ordinary language\-modeling quality in the best regimes\. Arithmetic experiments further show that edit\-aware training can improve standard autoregressive generation quality and validity across sampling temperatures, even relative to a clean\-data AR baseline\. These results suggest that explicit causal editing is a viable way to give decoder\-only models compositional control over earlier tokens, both for revision and, in some settings, for generation itself\.

