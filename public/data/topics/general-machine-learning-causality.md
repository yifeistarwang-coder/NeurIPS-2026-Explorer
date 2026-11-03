# General Machine Learning / Causality

通用机器学习 / 因果学习

123 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Remembering What Matters: From Markovian to Subtask\-Causal Memory in VLA Policies

**Authors:** Peishuo Wang; Fengshuo Bai; Yufeng Li; Tawei Chou; Yinda Xu; Ying Wen; Yaodong Yang; Chen Gao; Zhenzhe Zheng; Fan Wu

**ID:** 153954 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HIcqPaIuYq>) | [PDF](<https://openreview.net/pdf?id=HIcqPaIuYq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153954>)

Long\-horizon robotic manipulation is often non\-Markovian: the correct action can depend on earlier state changes that are no longer visible in the current observation\. Vision\-language\-action \(VLA\) models provide strong generalist robot policies, but their performance can drop when a task requires remembering which earlier subtasks changed the world\. Existing memory mechanisms extend context through recent\-frame windows, compressed latent stores, or similarity\-based keyframe retrieval\. They do not explicitly distinguish which completed subtasks are relevant from which frames within those subtasks carry the needed evidence\. We introduce TTC\-MEMORY, a two\-tier memory framework for long\-horizon VLA policies\. The first tier segments execution into subtasks and constructs a dependency directed acyclic graph \(DAG\), so retrieval is restricted to ancestors of the current subtask\. The second tier adaptively stores state\-change keyframes within each retained subtask and injects them into a frozen VLA backbone through graph\-aware cross\-attention, with fallback to recent history when planning or clustering is uncertain\. We evaluate TTC\-MEMORY on LIBERO, RMBench, SimplerEnv\-Bridge, the SafeLab chemistry\-lab simulation benchmark, and Franka real\-robot tasks\. The comparisons use a shared VLA backbone, training budget, simulation seed protocol, and physical\-trial protocol\. TTC\-MEMORY improves the long\-horizon and memory\-dependent slices in this matched setting\. On the 10\-subtask SafeLab slice, it reaches 58\.3% success, compared with 38\.2% for the strongest matched prior memory baseline, MemER, and 45\.1% for DAG\-only retrieval\. Real\-robot trials provide supporting transfer evidence rather than the main claim\. Ablations show that the two tiers are complementary: DAG retrieval increases long\-range dependency recall, while adaptive keyframe selection removes redundant history and preserves attention on task\-critical state changes\.

## DARTS: Targeting Prognostic Covariates in Budget\-Constrained Sequential Experiments

**Authors:** Kateryna Husar; Alexander Volfovsky

**ID:** 151821 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xj4Qs8GucY>) | [PDF](<https://openreview.net/pdf?id=Xj4Qs8GucY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151821>)

Randomized controlled trials typically assume that prognostic covariates are known and available at no cost\. In practice, obtaining high\-dimensional pretreatment data is costly, forcing a trade\-off between covariate\-adaptive precision and a measurement budget\. We introduce Dynamic Adaptive Rerandomization via Thompson Sampling \(DARTS\), which treats covariate acquisition as a sequential optimization problem embedded within a design\-based causal inference task\.  A budgeted combinatorial Thompson sampler learns which covariates are most prognostic across successive batches; selected covariates then drive rerandomization and regression adjustment to reduce batch\-level average treatment effect variance\. Our primary theoretical contribution is a decoupling result: adaptive covariate selection based on past batches preserves batch\-level randomization validity, and the cumulative inverse\-variance weighted estimator achieves at least nominal asymptotic coverage\. We further derive a Bayes risk bound for the acquisition layer that matches the minimax lower bound up to logarithmic factors\. Empirically, DARTS systematically concentrates budget on informative features, significantly closing the efficiency gap to oracle designs while maintaining strict inferential validity\.

## GenAI Evaluation Results are Largely Artifacts of Evaluation Design Choices: Evidence from Audit Studies of Resume Screening

**Authors:** Nicole Meister; Hannah Cha; Mohammed Alsobay; Alexandra Chouldechova; Alex Dow; Hanna Wallach; Jennifer Wortman Vaughan; Carlos Guestrin; Tatsunori Hashimoto; Solon Barocas

**ID:** 138976 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sy5IWI4jWC>) | [PDF](<https://openreview.net/pdf?id=sy5IWI4jWC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138976>)

Generative AI is designed to support many tasks, many ways of framing those tasks, and seemingly endless variation in task inputs\. But the same flexibility that makes these systems powerful also makes them difficult to evaluate reliably\.  This flexibility exacerbates the numerous, but often underrecognized and consequential, \\emph\{researcher degrees of freedom\} where even seemingly minor experiment design decisions can substantially affect findings\. We demonstrate this problem through an analysis of 36 papers on gender and racial bias in generative AI\-assisted resume screening\. Although these studies address the same broad research question, they reach strikingly divergent conclusions\. To explain this divergence, we adapt recent work on integrative experiment design from the social sciences, and decompose the dimensions along which the studies vary\. We then run 1,134 counterfactual experiments by combinatorially varying the experimental modules \(names, job\-resume pairings, and models\) across three baseline experimental frameworks\. We find the results prove remarkably brittle: a different design choice flips the conclusion of the reproduced experiment around 22\\% of the time\. For example, seemingly inconsequential design choices, such as the phrasing of a job description, can reverse the observed conclusion\. However, this instability is not always purely stochastic\. In some settings, we can build a model that predicts the result of unseen counterfactual experiments with a mean held\-out predictive $R^2$ of 0\.807\. This suggests that despite sensitivities to difference in evaluation design, there exists a learnable structure\.

## PACO: Partial\-order\-Augmented Continuous Optimization for Differentiable Causal Discovery

**Authors:** Xiaoxuan Li; Junda Wu; Julian McAuley; Lina Yao; Tong Yu

**ID:** 155276 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6snQ8zlSKn>) | [PDF](<https://openreview.net/pdf?id=6snQ8zlSKn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155276>)

Differentiable structure learning transforms DAG discovery from a combinatorial search into a continuous optimization problem, enabling gradient\-based recovery of causal structures\. In many applications, researchers possess partial\-order priors over the variables \(e\.g\., from biological signaling cascades or temporal ordering\), which substantially narrow the space of plausible causal graphs\. Existing approaches integrate such priors by decomposing the prior order graph into a collection of paths and evaluating prior\-aware acyclicity constraints path by path; this is correct but its constraint\-evaluation cost scales linearly with the number of induced maximal paths, a bottleneck for multi\-chain priors\. We propose PACO, Partial\-order\-Augmented Continuous Optimization, which encodes the same partial\-order compatibility through a single masked\-reachability matrix, that masks the matrix exponential of the learned graph by the strict transitive closure of the prior\. The constraint and its Frechet\-adjoint gradient are computed in a single $2d\{\\times\}2d$ block matrix exponential whose dominant cost is independent of the number of induced prior paths\. We prove that PACO has the same exact zero\-level feasible set as the path\-decomposition formulation\. Across synthetic and real\-data experiments under matched priors and dataset seeds, PACO matches path\-decomposition on structural recovery and substantially reduces wall\-clock cost in multi\-chain prior settings\.

## Estimating Continuous Treatment Effects with Recourse Data

**Authors:** Alessandro Marchese; Jeroen Berrevoets; Niels Martin; Sam Verboven

**ID:** 149123 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sipan8Hqx1>) | [PDF](<https://openreview.net/pdf?id=sipan8Hqx1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149123>)

Recourse explanations describe what would need to change for a different outcome to occur, yet they are not typically used for treatment effect estimation\. We study how such recourse data can be used for causal inference with continuous treatments\. This provides counterfactual supervision beyond observed outcomes at realized treatment values, and is especially useful when routine treatment assignment leaves parts of the treatment domain unsupported, as in diverse applications such as drug dosing, healthcare operations, and recommendation systems\. We formalize recourse explanations as structural boundary samples and show how they identify continuous dose\-response curves under a positivity condition fundamentally distinct from standard overlap\. Because recourses are observed only for negative\-outcome units, the boundary distribution is left\-truncated relative to the population; we correct this selection using Lynden\-\-Bell inversion\. We translate this result into an auxiliary recourse loss for neural dose\-response estimators, converting recourse\-derived boundaries into counterfactual supervision\. Experiments on synthetic and semi\-synthetic data show consistent improvements over standard baselines\. More broadly, our work shows that recourse explanations can serve as structured causal evidence, expanding what can be learned from observational data\.

## Intern\-Atlas: A Methodological Evolution Graph as Research Infrastructure for AI Scientists

**Authors:** Yujun Wu; Dongxu Zhang; Xinchen Li; Jinhang Xu; Yiling Duan; Yumou Liu; Jiabao Pan; Qiyuan Zhu; Xuanhe Zhou; Jingxuan Wei; Siyuan Li; Jintao Chen; Conghui He; Cheng Tan

**ID:** 152947 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PBFQonL9J2>) | [PDF](<https://openreview.net/pdf?id=PBFQonL9J2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152947>)

Existing research infrastructure is fundamentally document\-centric, providing citation links between papers but lacking explicit representations of methodological evolution\. In particular, it does not capture the structured relationships that explain how and why research methods emerge, adapt, and build upon one another\. With the rise of AI\-driven research agents as a new class of consumers of scientific knowledge, this limitation becomes increasingly consequential, as such agents cannot reliably reconstruct method evolution topologies from unstructured text\. We introduce Intern\-Atlas, a methodological evolution graph that automatically identifies method\-level entities, infers lineage relationships among methodologies, and captures the bottlenecks that drive transitions between successive innovations\. Built from $1\{,\}030\{,\}314$ papers spanning AI conferences, journals, and arXiv preprints, the resulting graph comprises $9\{,\}410\{,\}201$ semantically typed edges, forming a queryable causal network of methodological development\. To operationalize this structure, we further propose a self\-guided temporal tree search algorithm for constructing evolution chains that trace the progression of methods over time\. We evaluate the quality of the resulting graph against expert\-curated ground\-truth evolution chains and observe strong alignment\. In addition, we demonstrate that Intern\-Atlas enables downstream applications in idea evaluation and automated idea generation\. We position methodological evolution graphs as a foundational data layer for the emerging field of automated scientific discovery\.

## Strategic Causal Policy Learning: Welfare, Safety, and Fairness Thresholds

**Authors:** Suhwan Bong

**ID:** 151459 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aU5nzy3oAK>) | [PDF](<https://openreview.net/pdf?id=aU5nzy3oAK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151459>)

The standard rule in unconstrained causal policy learning is simple: treat individuals with nonnegative CATE\. We show that this rule can fail when treatment eligibility is strategically manipulable\. Agents may move or report covariates after a policy is announced, so treatment is assigned using manipulated covariates while welfare remains determined by baseline CATEs\. This creates a mismatch between who receives treatment and who benefits from treatment\. We formalize this setting as strategic causal policy learning and show that strategic welfare equals the CATE\-weighted mass of baseline types that can reach the treatment region\. This access\-burden representation leads to three distinct strategic thresholds: a welfare threshold, a safe threshold, and a fair threshold\. For linear CATE models, we derive closed\-form threshold corrections\. Homogeneous costs admit a single buffer correction that recovers the ideal positive\-CATE allocation, while heterogeneous costs make welfare maximization, no\-exploit safety, and subgroup fairness select different policies\. Experiments illustrate these tradeoffs and show when group\-specific corrections can restore the ideal allocation\.

## Module Specialization in Transformer Factual Recall under Correlated Fact Distributions

**Authors:** DongJae Lee; Junmo Kim

**ID:** 148263 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zA0npfmnIS>) | [PDF](<https://openreview.net/pdf?id=zA0npfmnIS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148263>)

The standard mechanistic interpretation of transformer factual recall attributes storage to deep MLP modules and routing to attention\. We study how module roles change when the fact distribution carries subject, relation, or answer\-collision structure rather than independent facts\. Which module performs the recall depends on the correlation axis and on the model's capacity load\. Probes and matched\-counterfactual patching disagree systematically on every motif: probes credit the deepest MLP while patching credits the first attention module\. We show that probes and patching measure structurally different quantities\-\-\-cumulative linear decodability versus irreplaceable causal contribution\-\-\-which under correlated fact distributions need not coincide\. A parameter\-counting argument singles out subject\-axis collision as the unique compression that the attention\-routing pathway can exploit cheaply, predicting an order\-of\-magnitude crossover for that pathway class that we observe empirically: the layer\-2 probe gap collapses sharply for subject collisions, and only subject\-axis specialization survives the capacity\-tight regime\. Edge\-level path patching uncovers a three\-step chain \(Attn \-&gt; MLP1 \-&gt; MLP2\) whose dominance tracks the predicted threshold, with a causal\-scrubbing test corroborating that the chain is causally relevant on every motif and sharpest in the subject regime\. A dense joint sweep shows that subject and answer compressions compete rather than amplify, with the dominant axis set by the stronger compression\. On natural CounterFact strata across four frozen pretrained LMs \(Pythia\-1\.4B/2\.8B, LLaMA\-3\.2\-1B\-Inst/3\.1\-8B\), edge\-level path patching reproduces the synthetic ranking: the answer\-collision stratum is the most localized on every model\. A two\-hop extension shows the binding\-locality structure carries to compositional facts\.

## TrunkFish: Making Model Width Incrementally Refinable

**Authors:** Owen M Dugan; Liam Dugan; Aaryan Singhal; Christopher De Sa; Christopher Ré

**ID:** 148418 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xy4Di1S8IP>) | [PDF](<https://openreview.net/pdf?id=xy4Di1S8IP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148418>)

Width is a central axis for scaling LLM families, but widening a standard transformer typically changes the hidden representation rather than continuing the smaller\-width computation\. We introduce Trunkfish, a recipe for converting model architectures into a hierarchy of models with incrementally refinable width \(a Trunkfish hierarchy\) by enforcing causal hidden dimensions and cumulative prefix readouts: new width may depend on old width, but old width may not depend on new width\. This enables schooling, which trains all models in a hierarchy from forward/backward passes of only the largest model, and restart\-free cascades, which enable adaptively scaling up inference compute without wasting compute already spent on smaller models\. Trunkfish improves the validation\-loss/active\-parameter frontier over independently trained standard hierarchies under matched hierarchy\-training FLOPs, with substantial training\-FLOP savings for both full\-width and prefix\-heavy schooling\. In cascade simulations over the same trained hierarchy, exact width continuation also meaningfully reduces matched\-loss expected active\-parameter traffic relative to restart cascades\.

## CRAFT: Counterfactual\-to\-Interactive Reinforcement Fine\-Tuning for Driving Policies

**Authors:** Keyu Chen; Nanfei Ye; Yida Wang; Wenchao Sun; Danqi Zhao; Hao Cheng; Sifa Zheng

**ID:** 150208 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jvYypWtfPg>) | [PDF](<https://openreview.net/pdf?id=jvYypWtfPg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150208>)

Open\-loop imitation learning has advanced modern autonomous driving policy architectures, but closed\-loop deployment remains vulnerable to policy\-induced distribution shift\. Existing post\-training paradigms exhibit fundamental trade\-offs: closed\-loop RL fine\-tuning provides grounded feedback from executed actions but is constrained by the sparsity of informative events, whereas counterfactual fine\-tuning provides dense supervision over candidate futures but inherits bias from imperfect future estimates\. We introduce Counterfactual\-to\-Interactive Reinforcement Fine\-Tuning \(CRAFT\), an on\-policy framework that formulates closed\-loop post\-training as proxy\-residual optimization\. CRAFT uses group\-normalized counterfactual advantages as a dense proxy for real closed\-loop advantages and aligns this proxy with the closed\-loop world through grounded residual correction from interaction\-critical events\. To stabilize adaptation, CRAFT regularizes the online policy toward an EMA teacher via asymmetric KL self\-distillation\. Theoretically, CRAFT decomposes the real closed\-loop policy gradient into proxy and residual terms under the same visited\-state distribution, reducing residual variance with an aligned proxy while mitigating proxy bias through grounded residual approximation\. Empirically, CRAFT achieves the strongest closed\-loop gains on Bench2Drive across hierarchical planning, vision\-language\-action, and vocabulary\-scoring architectures\. Ablations, scaling behavior, stability analyses, and transfer results further validate the complementary roles of dense counterfactual proxy and grounded residual correction\.

## DegradeQuery: Counterfactual Tuple Pretraining for Context\-Aware PROTAC Degradation Prediction

**Authors:** Dong Xu; Zhangfan Yang; Jiantao Wu; Zexuan Zhu; Jianqiang Li; Junkai Ji

**ID:** 150093 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kkmgMw3XBB>) | [PDF](<https://openreview.net/pdf?id=kkmgMw3XBB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150093>)

Proteolysis\-targeting chimeras \(PROTACs\) induce protein degradation through coordinated interactions among a degrader molecule, a target protein, and an E3 ubiquitin ligase\. Yet computational prediction is often framed as if degradation were an intrinsic property of the degrader alone, overlooking the tuple\-level context that determines activity\. This mismatch is especially consequential in public PROTAC datasets, where degradation labels are sparse but molecule–target–E3 records are abundant\. We introduce DegradeQuery, a tuple\-conditioned framework that uses unlabeled records as structured relational evidence rather than incomplete labeled examples\. DegradeQuery first performs counterfactual tuple pretraining, learning to distinguish observed molecule–target–E3 tuples from alternatives generated by replacing the target, the E3 ligase, or both\. This objective induces a conditional compatibility representation before degradation labels are used, enabling the model to capture how degrader activity depends on biological context\. The pretrained representation is then fine\-tuned for high/low degradation prediction\. On the official PROTAC\-8K benchmark, DegradeQuery achieves 0\.9065 AUROC and 0\.8500 accuracy, outperforming reported semi\-supervised results without pseudo\-labeling, teacher models, distillation, or ensembles\. Ablations, scaffold holdout, target–E3 holdout, and target\-wise few\-shot adaptation further support PROTAC degradation prediction as a tuple\-conditioned rather than molecule\-only problem\.

## Predicting What Changes: Causal Delta World Models for Risk\-Aware LLM Agent Planning

**Authors:** Guo Yue; YANG LIU; Donghui Zhang; Tang Qingkang; Rong Fu; Li Aoyu

**ID:** 154820 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AiYvJPM2Oy>) | [PDF](<https://openreview.net/pdf?id=AiYvJPM2Oy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154820>)

Modern LLM agents repeatedly fall into a familiar trap: they execute irreversible actions whose consequences they did not anticipate, such as confirming a non\-refundable booking or sending an unrecoverable message\. World models are a natural remedy, yet two dominant lines of work both fail this use case\. Generative pixel and HTML world models pay a heavy compute cost to produce vivid but often unfaithful continuations of the full observation, while reward and value models only summarise how good an action is and tell the agent nothing about what it will change or whether the change can be undone\. We argue that what an agent really needs is a model of what changes, not of what comes next\. We introduce Causal Delta World Models \(CDWM\), which represent each transition as a typed structured delta over an entity, attribute and relation graph, and explicitly factor out reversibility, irreversible cost and prediction confidence\. A learnable causal sparsity mask binds each action class to the delta dimensions it can plausibly affect, providing a strong inductive bias for unseen actions and environments\. We post\-train CDWM with a verifiable composite reward that aligns delta accuracy, action following, calibration error and closed\-loop task success\. The resulting world model is consumed by a risk\-aware closed\-loop planner that prunes catastrophic candidates, performs short\-horizon model\-predictive control, and abstains when confidence is low\. On four interactive benchmarks \(WebArena, Mind2Web, ALFWorld, ScienceWorld\) and two visual control suites \(Procgen and Atari 100k\), CDWM trained on four NVIDIA A100 \(80 GB\) GPUs improves task success by 6\.0 to 11\.7 absolute points over strong agentic and world model baselines, reduces irreversible failures by 47 to 71 percent, lowers token cost per successful trajectory by 27 to 45 percent, and shows substantially better generalisation to unseen websites and rule perturbations\. We conclude that the right unit for an agent's world model is the structured delta and not the full observa

## Bayesian Causal Experimental Design for CATE Estimation under Noncompliance

**Authors:** Erdun Gao; Yuanyuan Wang; Liang Zhang; Yuhang Liu; Haoxuan Li; Mingming Gong; Dino Sejdinovic

**ID:** 154028 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gn2UDJPl9p>) | [PDF](<https://openreview.net/pdf?id=Gn2UDJPl9p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154028>)

Causal experimental design often assumes direct control over treatment assignment, but many experiments can only assign encouragements that affect treatment receipt indirectly\. We formulate this as adaptive instrumental variable \(IV\) design under noncompliance: the experimenter chooses unit\-\-instrument queries, observes stochastic treatment realizations and outcomes, and seeks the treatment\-level conditional average treatment effect \(CATE\)\. This creates an acquisition mismatch: uncertainty in prospective feedback does not necessarily correspond to uncertainty in the target causal estimand, so outcome\-predictive or marginal variance\-based criteria may select queries weakly informative for CATE\. We introduce instrumental variable information gain \(IVIG\), a Bayesian acquisition principle that scores queries by the expected information their joint treatment\-realization and outcome feedback provides about CATE values over a target population\. Under the working Bayesian posterior, IVIG is Bayes\-risk aligned under logarithmic loss; we also characterize the residual information discarded by outcome\-only acquisition and connect greedy IVIG\-style acquisition to target posterior\-variance reduction under a fixed\-covariance analysis\. To approximate IVIG, we use an empirical\-Bayes Gaussian Process IV posterior approximation with first\-stage treatment\-realization modeling and treatment\-realization\-specific fantasy updates\. Experiments on synthetic and two semi\-synthetic IV benchmarks show improved CATE sample efficiency over adaptive\-design baselines; a real\-label diagnostic shows improved recovery of full\-data CATE estimates from observed IV data\.

## Causal Discovery Under Hard Selection Bias: A New Robust Score\-Matching Approach

**Authors:** Yiwen Qiu; Francesco Montagna; Shimeng Huang; Francesco Locatello

**ID:** 153240 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mhcp2GSL1c>) | [PDF](<https://openreview.net/pdf?id=Mhcp2GSL1c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153240>)

Selection bias is a difficult yet widespread problem in causal discovery, occurring whenever non\-random selection processes lead to data that is not representative of the underlying populations\.  Due to its practical importance, related works have been proposed to address the problem under local  \[Versteeg et al\., 2022\] or interventional settings \[Dai et al\., 2025a\], but general algorithms for observational data remain elusive\.  In this paper, we focus on truncated data \(hard selection\), and provide a general result for Additive Noise Models \(ANM\)\. We show that score\-based methods are a surprisingly suitable candidate due to a special property of the score function \($\\nabla \\log p\(x\)$\): \*deterministic truncation preserves both the score\* of the joint distribution as well as the Jacobian of the score\. While established score\-matching algorithms still fail in most settings, we actively leverage this observation to propose a new method for causal discovery that is robust under truncated data with ANMs\. Overall, our approach offers a general, robust solution that is agnostic to external information about the selection process and still achieves comparable performance to the state\-of\-the\-art approaches when selection is not present\.

## Causal learning with the invariance principle

**Authors:** Francesco Montagna; Francesco Locatello

**ID:** 148923 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uC8JCLIwIA>) | [PDF](<https://openreview.net/pdf?id=uC8JCLIwIA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148923>)

Causal discovery, the problem of inferring the direction of causality, is generally ill\-posed\. We use the language of structural causal models \(SCM\) to show that assuming that the causal relations are acyclic and invariant across multiple environments \(e\.g\., the way minimum wage affects employment rate is stable across different geographical regions\), \\textit\{only\} two auxiliary environments are sufficient to infer the causal graph for arbitrary nonlinear mechanisms\. Moreover, we demonstrate that this implies identifiability of the SCM functional mechanisms: as a corollary, we show that \\textit\{two\} auxiliary environments are sufficient to guarantee correct counterfactual inference\. We empirically support our theoretical results on synthetic data\.

## Shepherd: A Runtime Substrate Empowering Meta\-Agents with a Formalized Execution Trace

**Authors:** Simon Yu; Derek Chong; Ananjan Nandi; Dilara Soylu; Jiuding Sun; Christopher D Manning; Weiyan Shi

**ID:** 153027 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OZ3EtBIrwP>) | [PDF](<https://openreview.net/pdf?id=OZ3EtBIrwP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153027>)

As LLM\-based agentic systems grow more complex, they increasingly rely on meta\-agents: higher\-order agents that act on other agents, much like managers supervise employees\. Yet existing agentic runtimes expose execution only as static environmental states, limiting the kinds of live and post\-hoc interventions a meta\-agent requires\. To unlock these capabilities, we introduce Shepherd, a functional programming model that formalizes meta\-agent operations on target agents as functions, with core operations mechanized in Lean\. Shepherd records every agent–environment interaction as a typed event in a principled Git\-like execution trace where any past state can be cheaply forked and replayed\. Even at scale, Shepherd forks the agent process and its filesystem 5x faster than Docker, with &gt;95% prompt\-cache reuse on replay\. We exemplify Shepherd's versatility in three use cases: \(1\) runtime intervention, where a live supervisor improves pair coding pass rate from 28\.8% to 54\.7% on CooperBench; \(2\) counterfactual meta\-optimization, where a meta\-agent branches to explore alternative paths, beating MetaHarness and GEPA across four benchmarks by up to 11 points with up to 58% lower wall\-clock; and \(3\) Tree\-RL training, where a meta\-agent forks rollouts at chosen turns, lifting TerminalBench\-2 from 34\.2% to 39\.4% on Qwen3\.5\-35B\-A3B\. These use cases show Shepherd is a performant and efficient substrate for programming meta\-agents; we open\-source it to advance future research\.

## Effect\-Level Validation for Causal Discovery in Interactive Telemetry

**Authors:** Dang Van Cong Hoang; Luan Pham; Minh Nguyen

**ID:** 139471 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NqsvRZNvpb>) | [PDF](<https://openreview.net/pdf?id=NqsvRZNvpb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139471>)

Causal discovery is increasingly used to analyze telemetry from interactive systems, but a plausible graph does not guarantee an identifiable or reliable product decision\. We study this problem for one query: whether early competitive gameplay increases Day\-1 retention in a deployed Role\-playing game \(RPG\)\. We propose an admissibility\-first framework that treats discovered graphs as structural hypotheses, keeps only graphs that identify the target effect and have adequate treatment\-control overlap, and validates admissible effects through cross\-algorithm stability, placebo, subsampling, and E\-value diagnostics\. On real telemetry, only about one third of discovery runs support the target effect after temporal and semantic constraints\. Some admissible Directed Acyclic Graphs \(DAGs\) converge to a positive risk\-difference average treatment effect \(ATE\), down from a raw retention gap, and the estimate survives all refutation checks\. Graph\-level recovery is therefore an inadequate proxy for causal reliability; discovery pipelines for decision support should be evaluated at the query and effect level\.

## Causal heteroscedastic structure learning from incomplete temporal data

**Authors:** Abdellah Rahmani; Pascal Frossard

**ID:** 151770 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YB8beKwrFO>) | [PDF](<https://openreview.net/pdf?id=YB8beKwrFO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151770>)

Discovering causal structures in multivariate time series \(MTS\) is critical in domains such as finance and neuroscience, yet remains difficult in practice due to three intertwined obstacles\. First, MTS are routinely corrupted by missing values, and naive \*impute then discover\* pipelines can distort the underlying data distribution, leading to false causal graphs\. Second, recovering instantaneous links is already hard on complete data, and missingness further entangles imputation with graph learning\. Third, real world data often exhibits heteroscedastic noise, whose variance depends on both instantaneous and lagged causes, violating the assumptions of standard causal discovery algorithms\. Existing methods fail to address these challenges concurrently, typically assuming complete data, homoscedastic noise, or purely time lagged relationships\. To address these gaps, we introduce Cheesefill, an optimal transport framework for causal structure learning under missingness\. Cheesefill parameterizes causal mechanisms with conditional normalizing flows to capture heteroscedastic noise, and \*jointly\* learns a stochastic correction map that refines naive imputations into trajectories consistent with the inferred mechanisms\. Theoretically, we show that optimizing over stochastic correction maps is equivalent to a conditional kernel reformulation of the Kantorovich problem; the neural parameterization used by Cheesefill then yields a tractable objective\. Extensive experiments on synthetic and real data show that Cheesefill consistently outperforms existing baselines across different missingness mechanisms\.

## Gluing Local Contexts into Global Meaning: A Sheaf\-Theoretic Decomposition of Transformer Representations

**Authors:** Bryce Grant; Edward Wang

**ID:** 152961 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P5J2YE6sLF>) | [PDF](<https://openreview.net/pdf?id=P5J2YE6sLF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152961>)

A paraphrase pair is a small piece of evidence that two activations should agree\. We treat that as a sheaf condition and ask what its cohomology looks like at scale\. A cellular sheaf over a paraphrase graph defines a coboundary δ⁰; its kernel is the space of activations that paste consistently across the graph, and the rest of the sheaf Laplacian's spectrum reads off how badly they fail to\. On a matching graph this collapses to projected within\-pair covariance, so the framework only earns its keep once depth supplies cycles: stacking the same activations across the transformer's own layers turns the construction into a 2\-D grid with b₁ = N\(L−1\) algebraic 1\-cycles, one per elementary square asking whether layer\-l → l\+1 commutes with paraphrase equivalence\. The model\-derived Hodge harmonic mass at L=2 varies by four orders of magnitude across architectures \(from 10⁻⁴ on Mistral\-7B and 10⁻³ on Llama\-3\-8B to 0\.08 on Llama\-2\-7B\), and the ordering by harmonic mass matches the ordering by steering fragility we measure independently\. The framework supplies a mechanistic prediction that variance\-matched and probe baselines do not\. Three validations follow\. \(i\) Across nine architectures from 124M to 13B, the spectral complement of L\_F carries 5\.6 to 26\.5× the causal influence of variance\-matched controls \(p &lt; 10⁻¹⁵\)\. \(ii\) On held\-out CounterFact across eight architectures, sheaf H⁰ at 20 dimensions beats LEACE's preserved subspace at full hidden dimension: 85\.6% vs\. 42\.7% on GPT\-2, 87\.1% vs\. 77\.7% on Mistral\-7B, mean gap \+17\.9 pp\. \(iii\) On Llama\-2\-7B, contrastive sheaf steering preserves 7\.4× more facts than random under style transfer \(31\.0% vs\. 4\.2%, n=1000, McNemar p &lt; 10⁻⁵⁰\)\. The same operators read off representational collapse: tr\(L\_F\) − β log det Cov reproduces VICReg's invariance \+ variance \+ covariance recipe in coordinates and holds encoder rank at 57–60/64 where naive consistency collapses to 14–42/64 across seven architectures\.

## Attention Sinks Induce Gradient Sinks: Massive Activations as Gradient Regulators in Transformers

**Authors:** Yihong Chen; Zhouchen Lin; Quanming Yao

**ID:** 151217 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c49EUKrp1G>) | [PDF](<https://openreview.net/pdf?id=c49EUKrp1G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151217>)

Attention sinks and massive activations are recurring and closely related phenomena in Transformer models\. Existing explanations have largely focused on the forward pass, yet in pre\-norm Transformers, large residual\-stream norms play only an indirect forward role because sublayers operate on normalized inputs\. We study this relationship from the perspective of backpropagation\. Empirically and theoretically, we show that under causal masking, attention sinks can induce pronounced gradient concentration, which we term gradient sinks\. Since the RMSNorm Jacobian attenuates gradients roughly in inverse proportion to input norm, massive activations can be understood as adaptive regulators of this localized gradient pressure during training\. This interpretation predicts that attenuating sink\-induced gradients should weaken massive activations\. We test this prediction with V\-scale, a modification that adjusts backpropagated gradients on the value path\. In V\-scale models, attention sinks are preserved, whereas massive activations are suppressed\. These results identify gradient sinks as a backward\-pass counterpart of attention sinks, and massive activations as an adaptive RMSNorm\-mediated response that attenuates the resulting localized training pressure\. Our code is available at https://anonymous\.4open\.science/r/GradientSinkCode\-B309\.

## Where Root Cause Analysis Fails: A Retrieval\-Reranking Decomposition

**Authors:** Hada Melino Muhammad; Luan Pham; Laure Barrière; Sachin Shetty; Leonardo Pulga; Flora Salim

**ID:** 139698 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A2XdbroU25>) | [PDF](<https://openreview.net/pdf?id=A2XdbroU25>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139698>)

Identifying root cause of an anomaly among hundreds of sensors is critical for preventing safety incidents and costly downtime in complex monitored systems\. Existing studies evaluate root cause analysis \(RCA\) methods using top\-k accuracy\. We show that this metric has a fundamental blind spot: it conflates two failure modes: \*retrieval failure\*, where the true cause is never considered, and \*reranking failure\*, where it is considered but ranked too low\. In this work, we introduce a retrieval\-reranking decomposition and audit four well\-known benchmarks to expose this blind spot\. Our experiments show that, on benchmarks with complex faults, statistical baselines mis\-rank the true cause 78\-100\\% of the time, and graph\-based methods perform poorly because of unreliable causal graphs constructed using short fault windows\. Meanwhile, on simple benchmarks where faults manifest significantly at their origin, retrieval is trivially solved at 100\\%\. Guided by the decomposition, we build a two\-stage pipeline combining a multi\-signal retriever with an LLM reranker that lifts top\-1 accuracy by $\+$2 to $\+$26 points over the best baseline on complex\-fault benchmarks and $\+$9 to $\+$13 points on simple benchmarks, with no causal graph or labeled data required\.

## Causality can systematically address the monsters under the bench\(marks\)

**Authors:** Felix Leeb; Zhijing Jin; Bernhard Schölkopf

**ID:** 140063 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U7mzwCsCwV>) | [PDF](<https://openreview.net/pdf?id=U7mzwCsCwV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140063>)

Effective and reliable evaluation is essential for advancing empirical machine learning\.  However, the increasing accessibility of generalist models and the progress towards ever more complex, high\-level tasks make systematic evaluation more challenging\. Benchmarks are plagued by various biases, artifacts, or leakage, while models may behave unreliably due to poorly explored failure modes\. Haphazard treatments and inconsistent formulations of such \`\`monsters'' leads to a duplication of efforts, a lack of trust in results, and unsupported inferences\. In this position paper, we argue causality offers an ideal framework to systematically address these challenges\. By making causal assumptions in an approach explicit, we can faithfully model phenomena, formulate testable hypotheses with explanatory power, and leverage principled tools for analysis\. To make causal model design more accessible, we identify several useful Common Abstract Topologies \(CATs\) in causal graphs which help gain insight into the reasoning abilities in large language models\. Through a series of case studies, we demonstrate how the precise yet pragmatic language of causality clarifies the strengths and limitations of a method and inspires new approaches for systematic progress\.

## Online Causal Configuration for Networked Systems via Doubly Robust Steady\-State Learning

**Authors:** Yuli Liu; zhiheng zhang

**ID:** 149162 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sO7mOWC5TC>) | [PDF](<https://openreview.net/pdf?id=sO7mOWC5TC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149162>)

Large\-scale networked systems are increasingly controlled through a small number of global configuration variables while their local controllers remain black\-box, adaptive, and mutually interfering\. The operator observes only post\-burn\-in telemetry, so neither independent\-unit causal estimators nor immediate\-feedback bandits directly apply\. We propose \\emph\{CAUSAL\-UCB\}, a causal\-optimistic framework for online steady\-state configuration\. The framework turns raw network operation into a linked pipeline: an exposure interface maps neighborhood interference into an auditable context; measurement\-level exploration creates overlap while the target remains the no\-exploration steady\-state value $\\Winf\(z;0\)$; a clipped doubly robust evaluator converts exploratory logs into value certificates; and an OFU rule selects the next configuration\. We prove a unified high\-probability deviation bound that decomposes statistical fluctuation, nuisance product error, clipping bias, exposure approximation, cross\-configuration mismatch, context shift, and residual dependence\. We also give an identification\-\-deployment frontier showing that reliable counterfactual identification and low deployment cost cannot be optimized independently\. Controlled semi\-realistic replay and real\-data\-driven semi\-synthetic replay on METR\-LA and FlockLab validate the resulting benefit\-\-reliability trade\-off across regret, optimality gap, ATE error, confidence width, deployment gap, sensitivity, ablation, and frontier visualizations\.

## Causal Inference for Sequential Settings under Interference and Latent Confounding

**Authors:** Phevos Paschalidis; Constantinos Daskalakis; Devavrat Shah

**ID:** 149757 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nZvLqHKKp6>) | [PDF](<https://openreview.net/pdf?id=nZvLqHKKp6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149757>)

We study causal inference under outcome interference for sequential, observational settings\.      We consider settings where the binary outcomes over $N$ units are Markovian across $T$ time steps;      at each time step, the outcomes of $N$ units have pairwise dependencies captured through an Ising model;      and, each outcome is impacted through a latent external field capturing effects of latent confounders\.      Similar to panel data literature, these latent confounders are modeled to have a low\-rank factor     structure\. Our data is a single sample from this high\-dimensional distribution\. To estimate causal quantities of interest, we provide a computationally efficient method based on Maximum Pseudolikelihood Estimation \(MPLE\) for learning the model parameters\. Under reasonable assumptions, we establish non\-asymptotic consistency for parameter estimation\. Therefore,      sampling from the learnt model enables faithful estimation of causal quantities of interest\.      We demonstrate the efficacy of the method through synthetic experiments as well as a real\-world case\-study      investigating causal effects of vaccine rates on COVID\-19 death rates within US counties nationwide\.

## Coarsening Linear Non\-Gaussian Causal Models with Cycles

**Authors:** Francisco Madaleno; Francisco Pereira; Alex Markham

**ID:** 152930 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PIqUM6XQI4>) | [PDF](<https://openreview.net/pdf?id=PIqUM6XQI4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152930>)

Recent work on causal abstraction, in particular graphical approaches focusing on causal structure between clusters of variables, aims to summarize a high\-dimensional causal structure in terms of a low\-dimensional one\. Existing methods for learning such summaries from data assume that both the high\- and low\-dimensional structures are acyclic, which is helpful for causal effect identification and reasoning but excludes many high\-dimensional models and thus limits applicability\. We show that in the linear non\-Gaussian \(LiNG\) setting, the high\-dimensional acyclicity assumption can be relaxed while still allowing recovery of a low\-dimensional causal directed acyclic graph \(DAG\)\. We further connect identifiability of this low\-dimensional DAG to existing results: LiNG models with cycles are observationally identifiable only up to an equivalence class whose members differ by reversals of directed cycles; our low\-dimensional DAG, which is invariant across all members of a given equivalence class, thus forms a natural representative of the class\. While existing approaches for learning this observational equivalence class over high\-dimensional variables have exponential time complexity, our low\-dimensional summary is learned in worst\-case cubic time and comes with explicit bounds on the sample complexity\. We provide open source code and experiments on synthetic data to corroborate our theoretical results\.

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

## Fiedler\-Regularized Causal Discovery for Sparse Connected DAGs

**Authors:** Amine M&amp;amp;\#x27;Charrak; Gowtham Reddy Abbavaram; Thomas Lukasiewicz; Michael Bronstein; Krikamol Muandet

**ID:** 152438 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T86xx1y8TJ>) | [PDF](<https://openreview.net/pdf?id=T86xx1y8TJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152438>)

Causal discovery often starts from a set of variables that were measured together because they are believed to describe related parts of the same underlying process\. Standard continuous DAG learners encode data fit, sparsity, and acyclicity, but they can still return graphs that fragment into isolated variables or disconnected components\. We study a simple structural prior for this setting: the learned causal DAG should remain sparse while its undirected skeleton should be weakly connected\. We introduce Fiedler regularization, a differentiable spectral penalty based on the algebraic connectivity of a smooth support\-preserving skeleton of the learned weighted adjacency matrix\. The resulting penalty can be added modularly to differentiable causal discovery objectives, providing connectivity control without changing the underlying learner\. We instantiate the approach for GOLEM, graph autoencoder, and DAG\-GNN models\. Across sparse connected synthetic DAGs up to 200 variables, including connected\-conditioned Erdős\-Rényi, sparse connected, scale\-free, and small\-world graph families, Fiedler\-regularized learners improve fragmentation control and structural recovery across learner families\. These results position algebraic connectivity as a principled and practical prior for learning sparse causal DAGs in settings where the measured variables are expected to have a connected causal structure\.

## Decomposing Effects in Neural Causal Models

**Authors:** Matej Zečević; Devendra Singh Dhami; Kristian Kersting

**ID:** 151693 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Yjey5dh4Et>) | [PDF](<https://openreview.net/pdf?id=Yjey5dh4Et>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151693>)

Structural causal models \(SCMs\) provide a principled foundation for causal reasoning, and neural causal models \(NCMs\) extend this framework by parameterizing causal mechanisms with neural networks\. The classical formulation of NCMs assumes a specific architectural choice: a single function approximator per structural equation\. In this work, we revisit this assumption and show that it represents only one point in a broader family of valid neural causal model parameterizations\. Using interventions as an analytical lens and graph\-based neural architectures as a concrete construction, we characterize how different parameter\-sharing schemes over sub\-mechanisms induce distinct members of the NCM family while preserving the same causal graph\. This perspective yields two additional regimes beyond the classical formulation, which differ in how causal mechanisms are decomposed and parameterized within a unified structural framework\. Together, these regimes demonstrate that architectural choices shape the causal semantics and expressivity of neural causal models, even when graphical structure is fixed\. Relaxing structural assumptions further, we identify a class of partially causal models \(PCMs\) that support limited interventional or counterfactual queries without satisfying full SCM requirements, offering alternative trade\-offs between causal fidelity and tractability\. We place NCMs and PCMs within a unified expressivity spectrum between purely associational models and fully causal generative models, and illustrate these distinctions empirically using a graph\-based variational autoencoder with interventional structure\.

## A Characterization of Latent Variable Causal Models Consistent with Observational Data

**Authors:** Hongshuo Yang; Adiba Ejaz; Yushu Pan; Elias Bareinboim

**ID:** 148646 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wBBL9K3qVC>) | [PDF](<https://openreview.net/pdf?id=wBBL9K3qVC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148646>)

Causal reasoning from observational data becomes significantly challenging when the underlying causal structure is only partially known\. In this work, we study the the equivalence class of structural causal models \(SCMs\) with latent variables sharing the same set of conditional independencies, as represented by a partial ancestral graph \(PAG\)\. Specifically, we provide a new characterization of SCM\-induced causal diagrams in this equivalence class using differentiable parameters\. Building on this characterization, we introduce a new model class called PAG\-constrained neural causal models \($\\mathcal\{P\}$\-NCMs\) which parameterize this equivalence class of SCMs\. We prove that $\\mathcal\{P\}$\-NCMs are expressive enough to represent counterfactual distributions induced by any SCM in the class, while remaining consistent with the structural constraints shared across all its members\. Finally, we demonstrate how the differentiable parameterization of this model class enables causal inference under Markov equivalence by reducing counterfactual partial identification to an optimization problem over $\\mathcal\{P\}$\-NCMs\. We establish the theoretical soundness of this approach and validate its performance on simulations\.

## Neural Causal Models under Markov Equivalence

**Authors:** Yushu Pan; Hongshuo Yang; Adiba Ejaz; Elias Bareinboim

**ID:** 150107 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kdCfYqLJze>) | [PDF](<https://openreview.net/pdf?id=kdCfYqLJze>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150107>)

Neural causal models can simulate interventions in complex, high\-dimensional settings, but typically require a known causal graph\. Observational data, however, generally identifies only a Markov equivalence class of graphs, represented by a CPDAG, and causal queries may vary across DAGs in that class\. We introduce \\textit\{Masked Neural Causal Models \}\(NCMs\), a  provably expressive nonparametric framework for simulating and bounding interventional queries over all models compatible with a given CPDAG given observational data\. We give an optimization objective in the space of Masked NCMs that asymptotically recovers the true bounds of the causal effect\. To enable this optimization in practice, we introduce an attention\-based architecture and a novel optimization strategy that recovers highly accurate bounds in discrete nonparametric settings\.

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

## CausalTab: Pretraining Across Causal Environments for Tabular Causal Discovery

**Authors:** Zi\-Rong Li; Si\-Yang Liu; Tian\-Zuo Wang; Han\-Jia Ye

**ID:** 150884 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eg7EMDLpBt>) | [PDF](<https://openreview.net/pdf?id=eg7EMDLpBt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150884>)

Causal discovery aims to recover directed causal relations from observational and interventional data, providing a basis for mechanistic understanding and reliable decision\-making\.  Causal discovery foundation models \(CDFMs\) seek to amortize this problem by mapping a dataset directly to a causal graph in a single forward pass, avoiding per\-dataset testing, search, or optimization\.  However, existing CDFMs remain limited, often failing to consistently match strong classical methods, and we find that a key bottleneck lies not only in model architecture but also in how causal pretraining tasks are constructed\. Based on this observation, we propose CausalTab, a data\-driven CDFM trained with broad causal pretraining over diverse graph priors, structural mechanisms, noise models, dimensions, sample sizes, and intervention regimes\.  A dynamic task construction strategy composes these causal environments into varied discovery tasks, enabling more transferable structural learning from observational and mixed\-interventional data\.  On large\-scale synthetic benchmarks, CausalTab achieves stronger and more robust performance than diverse causal discovery baselines\.  To further bridge abstract synthetic generators and realistic causal reasoning scenarios, we introduce an expert\-knowledge\-guided and LLM\-audited semantic causal environment benchmark, where domain\-grounded SCMs generate interpretable observational and interventional datasets for out\-of\-distribution analysis\. Across both synthetic and semantic environments,CausalTab demonstrates robust structure recovery, especially under interventional evidence, highlighting broad causal pretraining as a key ingredient for transferable amortized causal discovery\.

## Learning in Causal Markov Games

**Authors:** Aurghya Maiti; Elias Bareinboim

**ID:** 152310 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U2PDn8kme7>) | [PDF](<https://openreview.net/pdf?id=U2PDn8kme7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152310>)

Markov Games are the standard formal model for multi\-agent reinforcement learning, capturing agents that act in a shared state and optimize rewards over time\. However, in real\-world settings, agents’ decisions are often influenced by unobserved factors, such as cognitive biases, behavioral tendencies, or intuitive signals, that also affect rewards and future states\. Ignoring these unobserved confounders can make standard learning methods converge to suboptimal policies\. In such settings, optimal play may require policies that condition on counterfactual signals, requiring reasoning at the counterfactual layer of the Pearl Causal Hierarchy\. In this paper, we introduce Causal Markov Games \(CMGs\), a framework for modeling sequential multi\-agent decision making in the presence of unobserved confounding\. We show that CMGs strictly generalize Markov Games, with arbitrarily large gaps between classical interventional equilibria and causal counterparts\. We then develop two learning algorithms under different observability assumptions\. The first, CNash\-VI\-FO, is a model\-based learner with finite\-sample guarantees when agents’ natural actions or intuitions are revealed post hoc\. The second, CNash\-VI\-NO, is an explore\-then\-exploit procedure with asymptotic guarantees for the setting in which opponents’ natural actions are never observed\. To address scalability, we further provide a drop\-in counterfactual augmentation of deep MARL\. Empirically, on a confounded windy variant of the Multi\-Particle Environment and the Iterated Causal Prisoner’s Dilemma, counterfactual agents strictly dominate their non\-causal counterparts\.

## CAPER: Clause\-Aligned Process Supervision for Text\-to\-SQL

**Authors:** Lujie Ban; Jiasheng Shi; Jinyang Li; Xiaolin Han; Tsz Nam Chan; Chenhao Ma

**ID:** 149623 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oj9P3hyKy9>) | [PDF](<https://openreview.net/pdf?id=oj9P3hyKy9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149623>)

Text\-to\-SQL systems are typically evaluated by query\-level execution correctness, but this terminal signal provides little guidance about which intermediate SQL decision caused success or failure\. Token\-level dense supervision is also ill\-suited: SQL tokens do not align with complete semantic decisions, can penalize execution\-equivalent queries, and are difficult to label reliably at scale\. We therefore propose CAPER, which automatically derives clause\-level supervision via counterfactual intervention on the SQL abstract syntax tree \(AST\), enabling root\-cause error localization for reward modeling; the resulting data is used to train CAPER\-9B, a lightweight Clause\-PRM that provides clause\-boundary feedback for policy optimization and candidate verification\. Experiments on BIRD and Spider show that clause\-aligned supervision not only improves execution accuracy, achieving up to a 15\.3\\% relative EX improvement over GPT\-5\.4, but also strengthens failure\-localization capability, reaching 84\.53\\% accuracy and 90\.60\\% MRR on held\-out failures\.

## S3Former: Sequential, Structural, and Statistical Fusion for Continuous\-Time Dynamic Graphs

**Authors:** Ziyan Li; Xiangyu Hu; Tianqing Zhu; Wanlun Ma; Ke Qin

**ID:** 155501 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=56lSllQiF5>) | [PDF](<https://openreview.net/pdf?id=56lSllQiF5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155501>)

Continuous\-time dynamic graphs model evolving systems with irregularly timed interactions, where predicting future links requires reasoning over temporal evolution, local topology, and historical relation patterns\. Existing memory\-based and sequence\-based methods capture temporal dependencies effectively, but they often organize historical interactions as node memories or serialized neighbor sequences\. As a result, they lack explicit analysis of the interaction structure around candidate nodes which prevents them from explicitly modeling local topological patterns of candidate nodes at inference time\. They also lack explicit causal statistical memory for activity, recency, and repeated pairwise interactions\. Motivated by these drawbacks, we propose S3Former, a temporal graph framework that jointly models sequential dynamics, shared pair\-centered structure, and online statistical memory\. For each candidate interaction, S3Former encodes long\-term and short\-term historical sequences, constructs a history\-induced shared pair subgraph around the two endpoints, and computes node\-level and pair\-level statistics from past events only\. A two\-level context\-aware fusion mechanism further combines these signals: NodeCCF learns reliable endpoint representations, while PairCCF performs candidate\-specific relation correction using explicit pair memory\. Experiments on 10 dynamic graph benchmarks show that S3Former achieves state\-of\-the\-art performance on most datasets in both transductive and inductive link prediction\. Ablation studies confirm the effectiveness of shared pair\-subgraph modeling, online statistical memory, and hierarchical fusion\.

## BASIL\-DCM: Biophysical Amortized Scalable Inference for Latent Dynamic Causal Modeling

**Authors:** Moein Khajehnejad; Forough Habibollahi; Leonardo Novelli; Adeel Razi

**ID:** 152400 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TNI4xmMH1Y>) | [PDF](<https://openreview.net/pdf?id=TNI4xmMH1Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152400>)

Estimating directed, weighted, and signed interactions among brain regions \($\\textit\{effective connectivity\}$\) from fMRI requires disentangling neural dynamics from delayed and nonlinear hemodynamic transformations\. Dynamic Causal Modeling \(DCM\) provides a principled solution by inverting a biophysical generative model, but the standard Variational Laplace inversion method is computationally prohibitive for large parcellations and cohort\-scale datasets\. We introduce $\\textbf\{BASIL\-DCM\}$, a physics\-informed amortized inference model that estimates subject\-specific effective connectivity and biophysical DCM parameters, including ROI\-wise hemodynamic transit time, spectral properties of endogenous neural fluctuations, and observation noise, $\\textit\{in a single forward pass\}$\. BASIL\-DCM combines a linear\-time state\-space temporal encoder with an ROI\-wise Transformer to capture long\-range temporal dependencies and inter\-regional interactions\. The model is trained on data informed by Human Connectome Project resting\-state fMRI, with effective connectivity initialized from regression DCM and complementary biophysical parameters sampled from physiologically plausible ranges\. Learning is further constrained by a differentiable spectral\-consistency objective derived from the DCM forward model\. This approach enables fast, uncertainty\-aware whole\-brain network inference while preserving mechanistic interpretability and ensuring consistency with biophysical dynamics\.

## Information\-Theoretic Generalization Bounds for Sequential Decision Making

**Authors:** Futoshi Futami; Masahiro Fujisawa

**ID:** 149551 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pIr4aHBv2v>) | [PDF](<https://openreview.net/pdf?id=pIr4aHBv2v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149551>)

Information\-theoretic generalization bounds based on the supersample construction are a central tool for algorithm\-dependent generalization analysis in the batch i\.i\.d\.\~setting\. However, existing supersample conditional mutual information \(CMI\) bounds do not directly apply to sequential decision\-making problems such as online learning, streaming active learning, and bandits, where data are revealed adaptively and the learner evolves along a causal trajectory\. To address this limitation, we develop a sequential supersample framework that separates the learner filtration from a proof\-side enlargement used for ghost\-coordinate comparisons\. Under a row\-wise exchangeability assumption, the sequential generalization gap is controlled by sequential CMI, a sum of roundwise selector\-\-loss information terms\. We also establish a Bernstein\-type refinement that yields faster rates under suitable variance conditions\. The resulting bounds specialize to online learning, streaming active learning with importance weighting, and stochastic multi\-armed bandits\.

## Causal discovery needs explicit epistemic standards

**Authors:** Harald Kugler; Leonard Henckel; Sebastian Weichwald

**ID:** 140029 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iyUZ5kB4ar>) | [PDF](<https://openreview.net/pdf?id=iyUZ5kB4ar>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140029>)

There are many causal discovery algorithms, but few guiding principles for choosing between them\. Methods are usually compared through three lenses: identifiability, consistency, and benchmarks\. Each introduces assumptions about the data\-generating process that are often untestable\. We argue that there are no shared standards for comparing, prioritizing, or even discussing those assumptions\. We support this claim by showing that \(i\) identifiability assumptions are often preferred by convention rather than by principle, \(ii\) uniform consistency requires further untestable assumptions, while also the weaker pointwise consistency has arguably narrowed algorithm design, and \(iii\) benchmarks are not neutral tests but carry an epistemic role of their own: they quietly fix which regimes matter, which guarantees come into play, and what counts as success\. In doing so, they shape what algorithm comparisons are taken to show and thus perform some of the same epistemic work as theory, but less transparently\. In this position paper we argue for a more transparent, integrated practice: Make the epistemic standards for discussing identifiability and consistency assumptions explicit, especially their failure modes and scope conditions; design benchmarks to operationalize those standards, by stress\-testing and ablating both\. Then, theoretical and empirical results jointly clarify when, why, and how algorithms may work rather than accumulate as disconnected advances\.

## Decision Path Tracing for Causal Analysis in Transformers

**Authors:** Won Jo; Dahee Kwon; Jongeun Baek; Cheongwoong Kang; Jaesik Choi

**ID:** 153801 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IbpdnkjhTP>) | [PDF](<https://openreview.net/pdf?id=IbpdnkjhTP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153801>)

Investigating the causal structures of transformers often entails a trade\-off between the granularity of the explanation and computational overhead\. Existing approaches either bypass the full internal chain, potentially missing critical decision\-relevant links, or struggle with the combinatorial explosion of path enumeration\. To address these challenges, we propose an efficient automated path\-tracing method that ensures both causal reliability and algorithmic feasibility\. Through extensive verification, we find that \(i\) the identified paths are the primary sources for decision signals, as evidenced by a marked decrease in self\-repair compared to non\-path components; and \(ii\) transformers utilize modular, class\-shared path mechanisms to process categorical information\. Beyond these findings, we show that the potential implications of our method can stem from sparse manipulation, highlighting efficient applicability to downstream tasks such as model debugging and pruning\.

## Causal Effect Identification with a Single Agnostic Proxy

**Authors:** Xiu\-Chuan Li; Tongliang Liu

**ID:** 149771 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nQbOFhMDIB>) | [PDF](<https://openreview.net/pdf?id=nQbOFhMDIB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149771>)

Latent confounding poses a significant obstacle to identifying the causal effect of a treatment on an outcome\. To address this, many existing studies leverage proxies of the latent confounder to indirectly adjust for the confounding bias\. However, they impose specific structural constraints on the proxies and typically require multiple proxies\. In this paper, focusing on the latent variable linear non\-Gaussian acyclic model \(lvLiNGAM\), we propose a causal effect identification procedure requiring only a single agnostic proxy\. Crucially, the term "agnostic" means that the causal connections between the proxy and the treatment\-outcome pair can be arbitrary and are not required to be known a priori\. This structural complexity precludes identifying the causal effect via a simple closed\-form formula\. Consequently, our identification procedure is designed to first derive candidate solutions from cumulants and then isolate the valid solution by examining certain independence relationships\. We present a series of new theoretical results, which collectively establish the soundness of our identification procedure: given the observational population distribution, it correctly identifies the true causal effect when identifiable, and correctly reports unidentifiability otherwise\. Finally, we empirically validate our theoretical results\.

## Reconciling Causality and Non\-Equilibrium Thermodynamics with Hamiltonian Causal Models

**Authors:** Dario Rancati; Max Welling; Francesco Locatello

**ID:** 150701 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g91WplfN3n>) | [PDF](<https://openreview.net/pdf?id=g91WplfN3n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150701>)

Causal modeling of physical temporal phenomena must handle interventions that act along trajectories, nonstationary induced laws, path\-dependent effects, and feedback mediated by dynamics, all challenging in standard causal models\. We introduce \\emph\{Hamiltonian Causal Models\} \(HCMs\), a trajectory\-level framework in which observed variables interact with local environments and interventions act as controls of Hamiltonian mechanisms\. HCMs separate immutable equations of motion from intervenable mechanisms and define causal effects as discrepancies between interventional path laws\. A key motivation for HCMs is their natural interface with non\-equilibrium thermodynamics\. Entropy production quantifies the irreversibility of a process and is a central causal observable: it is estimable from data and witnesses causal effects along the system's evolution that are invisible to endpoint and cumulative versions of the standard average treatment effect\. As in physics, cause\-and effect are not primitives of the relation between two random variables but arise from the non\-invertibility of the thermodynamic arrow\. With this, our paper reconciles the language of statistical causal models and non\-stationary thermodynamics, offering new tools to describe causality in a wide range of physical systems\.

## CTE\-Bench: Audited Counterfactual Trace Evaluation for Stateful Software Simulators

**Authors:** Xinran Zhang

**ID:** 139020 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q9lApBA60Y>) | [PDF](<https://openreview.net/pdf?id=q9lApBA60Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139020>)

Coding agents built from large language models increasingly inspect and modify stateful services\. Before such an agent chooses or explains a patch, it needs a basic engineering skill: predicting how a local code or state change will affect future service behavior\. CTE\-Bench isolates this simulator\-fidelity question from agent policy success\. Each item gives the model service source, a factual interaction prefix, a post\-prefix source patch or hidden\-state overwrite, and a fixed suffix query schedule; an executable oracle supplies the counterfactual response trace\. CTE\-Bench\-Core\-v1 contains 255 counterfactual items over six deterministic Python services and 10,200 scored suffix decisions per model configuration\. The main score is effect\-step value\-match \(VM\): exact response equality restricted to the 2,476 suffix positions where the intervention changes the oracle response\. DeepSeek V4\-Lite, Kimi K2\.5, and Claude Sonnet 4\.6 reach 60\.7%, 61\.5%, and 58\.4% effect\-step VM under teacher\-forced one\-step prompting, where each prediction sees earlier oracle suffix responses; hiding those responses while preserving the factual prefix reduces them to 11\.4%, 28\.9%, and 25\.0%\. As an additional probe, we run self\-conditioned free\-rollout on DeepSeek and Kimi; effect\-step VM is 27\.1% and 33\.2%, and exact whole\-trace match is at most 1\.2%\. These probes show that CTE\-Bench helps identify dependence on oracle suffix feedback and compounding error in self\-conditioned service simulation\. We release Core\-v1, the executable oracle, metadata, and evaluation scripts, with an evaluation card tying each supported claim to its memory protocol and metric\.

## Structural Causal Bottleneck Models

**Authors:** Simon Bing; Jonas Wahl; Jakob Runge

**ID:** 155742 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3KALmCyLoY>) | [PDF](<https://openreview.net/pdf?id=3KALmCyLoY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155742>)

We introduce structural causal bottleneck models \(SCBMs\), a novel class of structural causal models in which causal effects between high\-dimensional variables are mediated by low\-dimensional summary statistics, or \*bottlenecks\*\. SCBMs provide a flexible framework for mechanism\-specific, target\-dependent dimension reduction while remaining estimable via standard learning algorithms\. We prove that bottleneck variables are identifiable up to bijection from observational data, and validate this experimentally\. We then study causal effect estimation in linear SCBMs under three standard adjustment strategies\. For instrumental variables, we identify a population\-level non\-identifiability of naïve two\-stage least squares when all variables are high\-dimensional, and show that bottleneck representations restore identification\. For mediation and backdoor adjustment, we prove that conditioning on bottleneck variables yields valid effect estimates with explicit finite\-sample efficiency gains over conditioning on full high\-dimensional variables\. We argue that SCBMs provide a principled alternative to existing causal dimension reduction frameworks such as causal representation learning and causal abstractions\.

## Stable Partial Order Constraints for Temporal Causal Structure Learning

**Authors:** Changxin Rong; Xiangyu Wang; Taiyu Ban; Yanze Gao; Xingjian Lin; Huanhuan Chen

**ID:** 148586 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wgAOX8Wvbf>) | [PDF](<https://openreview.net/pdf?id=wgAOX8Wvbf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148586>)

Temporal causal structure learning aims to recover lag\-aware causal relations from multivariate time series\. While prior knowledge has been widely used to improve static structure learning, its integration into lag\-aware structure learning remains limited, because available priors are often lag\-agnostic\. Recent studies have explored lag\-agnostic edge presence priors, but partial order priors, which can prune the ordering space and improve structure learning, remain underexplored\. A key challenge is that variables may influence each other at different lags, leading to cyclic variable\-level relations where ordering is no longer naturally defined\. Moreover, directly applying static differentiable formulations of partial order constraints can be unstable due to repeated\-walk accumulation on cycles\. To address this gap, we represent partial order priors on the summary graph and follow the natural idea of the order relation that only allows a single direction of possible causality between two variables, which is equivalent to forbidding all reversed causality, direct or indirect\. This converts partial order constraints into path prohibition constraints that can be extended to cyclic summary structures\. For stable differentiable characterization, we propose a decoupled partial order constraint method\. The method preserves the original lag\-aware structure for data fitting, imposes partial order constraints through a normalized summary representation, and captures higher\-order reachability with a closed\-form connectivity characterization\. Experiments further demonstrate its effectiveness in nonstationary settings\.

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

## Identifying Structural Biases from Causal Mechanism Shifts

**Authors:** Praharsh Nanavati; Jilles Vreeken; David Kaltenpoth

**ID:** 151733 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YUeprsuXFc>) | [PDF](<https://openreview.net/pdf?id=YUeprsuXFc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151733>)

Causal discovery methods commonly assume that all data is independently and identically distributed \(i\.i\.d\.\) and that there are no unmeasured variables affecting the system\. In practice, these assumptions are often violated, leading to inaccurate inference\. In this paper, we study how to identify hidden confounding and selection biases from causal mechanism shifts\. In particular, we show that structural biases lead to dependent mechanism shifts\. That is, by considering for which variables the mechanisms change given data from different environments, we can tell which variables are unbiased, which are subject to hidden confounding, and which are undergoing selection bias\. We formalize this into an empirically testable criterion based on mutual information, and show under which conditions it identifies structural biases\. To tell which nodes are subject to what kind of bias, we introduce the StruBI algorithm\. Experiments on synthetic and real\-world data show that StruBI works well in practice, accurately recovering affected variable sets and types of biases, outperforming the state\-of\-the\-art by a wide margin\.

## Causal Discovery under Time\-Varying Delays

**Authors:** Lénaïg Cornanguer; David Kaltenpoth; Jilles Vreeken

**ID:** 152445 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T4HWDl4y39>) | [PDF](<https://openreview.net/pdf?id=T4HWDl4y39>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152445>)

Causal discovery aims to uncover the causal relationships among variables beyond correlations from observational data\. On time series, a major challenge is nonstationarity, which is typically modeled as regime\-based shifts or drifting causal strength\. In contrast, we consider non\-stationarity arising from varying cause\-to\-effect delay, and introduce a causal model that is identifiable with few assumptions\.  To discover causal relationships with varying causal delay in practice, we formalize the problem in terms of the algorithmic model of causation, and propose STRETCH to discover causal graphs\. We show on synthetic data that our method correctly recovers the causal relationships, and show the relevance of this causal model on a case study on the impact of El Niño climatic phenomenon on Indian monsoon\.

## Integrating Background Knowledge for Scalable Causal Discovery

**Authors:** Mátyás Schubert; Theofanis Aslanidis; Tom Claassen; Sara Magliacane

**ID:** 154111 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GBk2ivbt6U>) | [PDF](<https://openreview.net/pdf?id=GBk2ivbt6U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154111>)

Expert background knowledge is often available in practical applications of causal discovery\. Such constraints on the true causal graph can help causal discovery in terms of identifiability of causal effects and accuracy of the learned structure, but also in reducing the space of candidate causal graphs\. As causal discovery can become computationally expensive for large number of variables, it is crucial to utilize background knowledge effectively  \\emph\{during\} the causal discovery process\. However, most current methods only use background knowledge in a postprocessing step after causal discovery to refine the learned graph\. In this work, we develop a framework for utilizing background knowledge during the causal discovery process, focusing especially on scalable causal discovery methods that recover only a subset of the whole graph\. We implement our framework for multiple algorithms and empirically show that utilizing background knowledge can both reduce computational requirements and increase the quality of the learned structures\.

## Causal\-Geo: Neuro\-Symbolic Spatial Grounding for Situated Agent Planning

**Authors:** Sanbi Luo

**ID:** 155379 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=642y9PfzJm>) | [PDF](<https://openreview.net/pdf?id=642y9PfzJm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155379>)

Foundation Models \(LLMs/VLMs\) exhibit strong semantic reasoning capabilities but remain challenged by situated planning in unstructured physical environments\. A key limitation is the Semantic\-Geometric Gap: while models interpret linguistic and visual intent, they lack explicit grounding in continuous spatial structures, yielding physically infeasible or unsafe plans\. We propose Causal\-Geo, a neuro\-symbolic framework that bridges this gap by integrating LLM reasoning with rigorous geometric planning\. Rather than treating physical constraints heuristically, we model the environment as a continuous metric tensor field\. LLMs translate high\-level semantic intents into potential functions that dynamically warp this manifold via conformal scaling\. This casts intent\-driven planning as a geodesic optimization problem, solved efficiently via discrete graph search\. Experiments across diverse domains—from a macro\-scale $12\.2 \\text\{ km\}^2$ wetland digital twin to micro\-scale indoor robotic navigation—demonstrate that Causal\-Geo enables robust zero\-shot planning\. It significantly outperforms reinforcement learning in sparse\-reward settings and prevents the \`\`physical hallucinations'' common in representative hierarchical LLM planners\. Crucially, Causal\-Geo acts as a rigorous physical gatekeeper, guaranteeing invariant safety against foundation model variance and demonstrating graceful degradation under contradictory prompts\. These results establish continuous geometric grounding as a principled, domain\-agnostic pathway toward physically consistent situated agent planning\.

## Causal Discovery over Clusters of Variables in Non\-Markovian Systems

**Authors:** Tara Anand; Adèle H Ribeiro; Jin Tian; George Hripcsak; Elias Bareinboim

**ID:** 152473 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SoPlIu3TgX>) | [PDF](<https://openreview.net/pdf?id=SoPlIu3TgX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152473>)

Causal discovery is the task of leveraging observational data to uncover causal relationships between variables\. Recent work has extended these methods to operate over clusters of variables to improve scalability in high\-dimensions and enable reasoning over higher\-level entities\. These approaches have been limited by strong assumptions including causal sufficiency\. In this work, we introduce an approach for causal discovery over clusters in non\-Markovian systems\. First, we extend theory of graphical models in a knowledge\-based context, to motivate introduction of a novel graphical equivalence class that can accommodate unobserved confounding\. Then, we present a sound algorithm for causal discovery of learnable relationships between clusters of variables\.

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

## Orthogonal Uplift Learning with Permutation\-Invariant Representations for Combinatorial Treatments

**Authors:** Jiacan Gao; Xinyan Su; Mingyuan Ma; Xiao Xu; Xinrui Wan; Tianqi Gu; Enyun Yu; Jiecheng Guo; zhiheng zhang

**ID:** 154343 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EIVfHEXb1P>) | [PDF](<https://openreview.net/pdf?id=EIVfHEXb1P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154343>)

We study uplift estimation for combinatorial treatments\. Uplift measures the pure incremental causal effect of an intervention, such as sending a coupon or a marketing message, on user behavior, modeled as a conditional individual treatment effect\. Many real\-world interventions are combinatorial: a treatment is a policy that specifies context\-dependent action distributions rather than a single atomic label\.  Although recent work considers structured treatments, most methods rely on categorical or opaque encodings, limiting robustness and generalization to rare or newly deployed policies\. We propose an uplift estimation framework that aligns treatment representation with causal semantics\.  Each policy is represented by the mixture it induces over context\-action components and embedded via a permutation\-invariant aggregation\. This representation is integrated into an orthogonalized low\-rank uplift model, extending Robinson\-style decompositions to learned, vector\-valued treatments\.  We show that the resulting estimator is expressive for policy\-induced causal effects, orthogonally robust to nuisance estimation errors, and stable under small policy perturbations\. Experiments on large\-scale randomized platform data demonstrate improved uplift accuracy and stability in long\-tailed policy regimes\.

## LACE: Latent Alignment via Counterfactual Embeddings

**Authors:** Harsh Udai; Konda Reddy Mopuri

**ID:** 153001 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OhzpFEscSy>) | [PDF](<https://openreview.net/pdf?id=OhzpFEscSy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153001>)

Improving compositional understanding in CLIP\-style vision\-language models remains difficult, models with strong coarse alignment often fail on attribute binding, relations, and multi\-object semantics\. A common remedy is text\-side hard negatives \(negations, perturbations, or mined confusions\), but concentrating difficulty on the text branch can skew the training signal, exacerbate modality asymmetry, and distort joint\-space geometry \(e\.g\., increased hubness and reduced mutual reciprocity\), even when Recall@K improves\. We propose LACE \(Latent Alignment via Counterfactual Embeddings\), a lightweight approach that injects structured, semantics\-preserving latent edits into the image and text embedding streams without pixel\-space editing or external generators\. LACE synthesizes counterfactual image and text embeddings by attenuating, swapping, or transplanting a small set of factors tied to target objects, attributes, or relations, producing image\-side and text\-side hard negatives that rebalance supervision while preserving global alignment\. Across compositional and retrieval benchmarks, LACE improves robustness to binding and relational confusions and yields a healthier embedding geometry with improved reciprocity and competitive hubness/local\-stability trade\-offs\.

## Offloading Score: Measuring AI Reliance through Counterfactual Workflows

**Authors:** Vishakh Padmakumar; Lujain Ibrahim; Zora Wang; Jennifer Wang; Q\.Vera Liao; Diyi Yang

**ID:** 139388 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TT3ACb02l4>) | [PDF](<https://openreview.net/pdf?id=TT3ACb02l4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139388>)

AI tools are increasingly integrated into real\-world workflows\. However, existing measures of reliance on these tools focus on AI output adoption or on self\-reported indicators, rather than how task effort is distributed between users and tools\.  Here, we introduce offloading score, a measure of reliance that quantifies the fraction of cognitive effort offloaded to an AI tool\. Offloading score is simulation\-based\-\-\-we construct a counterfactual workflow by estimating how the user would have completed the task without the tool, and then computing the fraction of steps saved by using the tool\.  We validate offloading score through intrinsic evaluations of metric validity, and a controlled user study \($n=40$\) with developers performing programming tasks using AI tools\.  We vary time pressure to test whether reliance measures capture the known increase in reliance under time pressure\. We show that offloading score detects significantly higher reliance in time\-constrained settings \($\+43\\%$, $p=0\.018$\), while usage\-based and self\-reported baseline measures do not distinguish the conditions\.  We complement this with descriptive insights showing that higher reliance manifests as greater delegation and more direct reuse of AI outputs\. Finally, we demonstrate an approach of using offloading score in combination with target outcomes of reliance \(e\.g\., task understanding\) to identify when reliance may be \(in\)appropriate\. Our framework offers two contributions: an instrument users can apply to measure and reflect on their own reliance, and a quantitative signal that agent designers can utilize to mitigate overreliance\.

## Automated Causal Effect Estimation through Self\-Evolving AI

**Authors:** Can Wang; Hongyu Zhao; Yiqun Chen

**ID:** 150563 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hEJF4xVLvo>) | [PDF](<https://openreview.net/pdf?id=hEJF4xVLvo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150563>)

Causal inference is central to scientific discovery, yet choosing appropriate methods remains challenging due to the complexity of statistical methodology and real\-world data\. Inspired by the success of artificial intelligence in accelerating scientific software, we introduce an evolutionary framework that uses large language models to discover and iteratively refine causal methods\. Across benchmarks, our estimators consistently outperform established baselines: our best estimator lay on the Pareto frontier of 58 human submissions for a recent community competition\. We also extend the algorithm to achieve competitive results in settings with estimated rewards\. Analysis of the evolutionary trajectories shows that agents progressively discover sophisticated strategies tailored to unrevealed data\-generating mechanisms\. Our findings suggest that language\-model\-guided evolution could be used in scientific settings with partially observed rewards such as causal inference\.

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

## Causal Discovery with False Positive Error Control

**Authors:** Erik Jahn; Venkat Chandrasekaran; Frederick Eberhardt; Leonard Schulman

**ID:** 151569 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZbSa2GSJNV>) | [PDF](<https://openreview.net/pdf?id=ZbSa2GSJNV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151569>)

Causal discovery methods produce data\-driven hypotheses about causal relationships, which may become new scientific findings or inform decisions about downstream interventions\. In such settings, false positive causal claims can be more consequential than false negatives\. Yet few methods target false positive error control in causal discovery, and existing error guarantees are often asymptotic and require strong versions of the faithfulness assumption\. We introduce the $m$\-conservative PC algorithm and prove that it controls false discovery rate in the linear Gaussian setting under an extremely weak version of the faithfulness assumption\. In our framework, false positive error for causal graphs is defined based on the conditional\-independence information they entail, yielding a metric that penalizes both false adjacencies and incorrect edge orientations\. The parameter $m$ quantifies a trade\-off between algorithmic complexity and the strength of the required faithfulness assumption\. The $m$\-conservative PC algorithm combines undirected graph learning, a Benjamini\-Yekutieli\-style procedure for conditional independence testing, and a conservative orientation step that marks unresolved or contradictory edge directions as ambiguous\. Our algorithm produces valid outputs and retains error guarantees even in the finite\-sample setting, despite possible random errors in the conditional independence tests\.

## Causal Bias Detection in Generative Artifical Intelligence

**Authors:** Drago Plecko

**ID:** 149915 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mFaRwEs0bN>) | [PDF](<https://openreview.net/pdf?id=mFaRwEs0bN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149915>)

Automated systems built on artificial intelligence \(AI\) are increasingly deployed across high\-stakes domains, raising critical concerns about fairness and the perpetuation of demographic disparities that exist in the world\.  In this context, causal inference provides a principled framework for reasoning about fairness, as it links observed disparities to underlying mechanisms and aligns naturally with human intuition and legal notions of discrimination\.  Prior work on causal fairness primarily focuses on the standard machine learning setting, where a decision\-maker constructs a single predictive mechanism $f\_\{\\widehat Y\}$ for an outcome variable $Y$, while inheriting the causal mechanisms of all other covariates from the real world\. The generative AI setting, however, is markedly more complex: generative models can sample from arbitrary conditionals over any set of variables, implicitly constructing their own beliefs about all causal mechanisms rather than learning a single predictive function\. This fundamental difference requires new developments in causal fairness methodology\. We formalize the problem of causal fairness in generative AI and unify it with the standard ML setting under a common theoretical framework\. We then derive new causal decomposition results that enable granular quantification of fairness impacts along both \(a\) different causal pathways and \(b\) the replacement of real\-world mechanisms by the generative model's mechanisms\. We establish identification conditions and introduce efficient estimators for causal quantities of interest, and demonstrate the value of our methodology by analyzing race and gender bias in large language models across different datasets\.

## Two\-Clustering Regime of Token Dynamics in Causal Attention

**Authors:** Trinh Nguyen; Duy\-Tung Pham; Hoang\-Son Do; Tan Nguyen; Thieu Vo

**ID:** 154853 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=APlaj5UkCk>) | [PDF](<https://openreview.net/pdf?id=APlaj5UkCk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154853>)

We partially resolve Conjecture 1 of \\textit\{Karagodin  et al\., Clustering in Causal Attention Masking \(NeurIPS 2024\)\} and extend it to time\-dependent parameter regimes\. The conjecture predicts that causal attention dynamics converge to two clusters aligned with the eigenvectors associated with the largest eigenvalue $\\lambda\_\{\\max\}$ of the value transformation\. We prove that this behavior holds when $\\lambda\_\{\\max\}&gt;0$ and is generally false when $\\lambda\_\{\\max\}\\le0$\. The resulting two\-cluster regime is common in practice and substantially more challenging than the classical single\-cluster setting studied previously\. A central contribution of our work is the identification of a rigorous dimension deduction phenomenon: despite evolving in a high\-dimensional embedding space, token trajectories collapse onto a two\-dimensional structure governed by a small number of dominant directions\. Building on this insight, we introduce a new analytical framework\-\-instability within the flow\-\-inspired by instability phenomena in physical systems\. This framework enables the analysis of steady\-regime behavior in non\-monotone, non\-autonomous attention dynamics\. Our theoretical findings are illustrated through simulations and experimental studies using  Group Query Attention \(GQA\) layers\.

## Distributionally\-Robust Policy Learning from Observational Data

**Authors:** Debmalya Mandal

**ID:** 151620 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZBROlVYoFY>) | [PDF](<https://openreview.net/pdf?id=ZBROlVYoFY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151620>)

Policy learning from observational data is fundamental to applications ranging from personalized medicine to welfare\-program targeting, but standard approaches optimize empirical performance and may fail when the deployment distribution differs from the training distribution\. We study \\emph\{distributionally\-robust policy learning\}: given observational data $\\\\\{\(X\_i,W\_i,Y\_i\)\\\\\}\_\{i=1\}^n$ with binary treatment $W$, we seek a policy $\\pi \\in \\Pi$ that maximizes the worst\-case policy value over an $f$\-divergence ball of radius $\\rho$ around the data\-generating distribution\. We propose an estimator built on cross\-fitted doubly\-robust scores for the conditional treatment effect, paired with a DRO solver that handles \\texttt\{KL\}, $\\chi^2$, and \\texttt\{CVaR\} ambiguity sets\. We establish two convergence guarantees\. First, the estimated policy attains the standard $\\widetilde\{O\}\(n^\{\-1/2\}\)$ rate on its DRO regret, and inherits the doubly\-robust property from its non\-DRO counterpart \-\- the rate continues to hold whenever either the outcome model or the propensity model is consistently estimated, even at slow nonparametric rates\.  We then propose a sample\-splitting bias\-correction algorithm derived from the Lagrangian dual, and show that under a Tsybakov\-style margin condition on the worst\-case treatment\-effect contrast, the estimator attains a fast rate of $\\widetilde\{O\}\(n^\{\-\(1\+\\alpha\)/\(2\+\\alpha\)\}\)$ , interpolating between $\\widetilde\{O\}\(1/\\sqrt\{n\}\)$ and $\\widetilde\{O\}\(1/n\)$  as the margin parameter $\\alpha$ ranges over $\[0,\\infty\)$\. To our knowledge, this is the first work to incorporate a Tsybakov margin condition into the analysis of distributionally\-robust policy learning, and the first to obtain fast rates in this setting\. Empirically, on semi\-synthetic experiments calibrated to a welfare\-to\-work program, distributional robustness yields meaningful improvements over empirical welfare maximization when training and test distributions differ structurally, while remaining competitive when no shift is present\.

## Position Without Positional Embeddings: A Directional Mechanism in NoPE Transformers

**Authors:** Matan Avitan; Ido Nachum; Yanai Elazar; Yoav Goldberg

**ID:** 152488 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Sje2qgTHl2>) | [PDF](<https://openreview.net/pdf?id=Sje2qgTHl2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152488>)

Autoregressive transformers with no positional embeddings \(NoPE\) can recover absolute position\. A common explanation is that causal attention creates a position\-dependent variance signal, but this account is incomplete because LayerNorm removes per\-token scale, so a viable mechanism must encode position in \*direction\*, not magnitude\. We describe the most compact mechanism with two\-layer NoPE transformers that accurately extract position\. In Layer1, prefix averaging creates a shared beginning of sequence \(BOS\)\-direction component\. In Layer2,  the attention's output\-value matrix maps the \\bos\{\} and \\nbos\{\} contributions into two distinct directions, and a position\-dependent \\bos\{\} attention weight acts as a mixing coefficient that interpolates between them\. The resulting directional trajectory is linearly decodable for position\. Interestingly, we show two transformer variants that converge to the same theoretical mechanism and instantiate it when trained to predict position\.

## Externalized CPDAG Summaries Improve LLM Causal Deduction

**Authors:** Wentao Sun; João P Nogueira; Dominique Verchere; Mathieu Acher; Alonso Silva

**ID:** 150273 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jNkJv4Cfma>) | [PDF](<https://openreview.net/pdf?id=jNkJv4Cfma>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150273>)

Corr2Cause asks whether a causal claim holds in every DAG compatible with observed correlations and conditional independencies\. We frame this as latent\-object reasoning: the label is defined by a CPDAG query, but free\-form chain\-of\-thought often collapses the Markov\-equivalence\-class problem into local pattern matching\. We propose Structured Thinking, a two\-turn pipeline that first externalizes a typed, schema\-constrained CPDAG summary and then answers against that graph state\. On the Corr2Cause full test, Structured Thinking raises Qwen3\.5\-27B from 73\.0 to 86\.4 F1\(Yes\) over a strong PC\-instruction baseline in the primary paired run \(\+13\.4 percentage points; McNemar $p=2\.4\\times10^\{\-6\}$; bootstrap 95% CI \[\+8\.4, \+18\.6\]\); across three full\-ID seeds, the mean gain is $\+8\.1 \\pm 5\.3$ percentage points\. A PC\-scaffolded two\-turn prose control reaches only 67\.6 F1, indicating that a detailed PC scaffold plus a schema\-free prose intermediate is not sufficient\. The same pattern holds on Qwen3\.6\-27B, Paraphrase\-OOD, and GPT\-5\.4\-mini\. Scrambling the emitted CPDAG costs 12\.0 percentage points in F1, and a full\-split audit shows close agreement with the reference CPDAG, with ID skeleton F1 of 0\.960 and exact CPDAG match of 75\.9%\. These results support a bounded design principle: externalize the latent object that defines the label, constrain its form, and test whether downstream answers use it\.

## Improving Causal Explanations

**Authors:** Kai\-Zhan Lee; Drago Plecko; Elias Bareinboim

**ID:** 153775 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IkOHPX9dDS>) | [PDF](<https://openreview.net/pdf?id=IkOHPX9dDS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153775>)

Explaining model predictions in high\-stakes settings requires knowing \*why\* a prediction was made, a central challenge in modern AI\. Yet existing methods lack a principled causal framework for explanation, leading to a disagreement problem: explanation methods produce conflicting attributions with no way to determine which is correct\. Based on the literature in cognitive science, law, and philosophy, and using the language of causality, we formalize four desiderata for explanation methods that assign numerical credit to variables\. We show that no prior explanation method including SHAP and LIME satisfies all desiderata, and prove the Explanatory Impossibility Theorem, which shows that even in principle, no method can satisfy all desiderata without causal assumptions\. We introduce \*counterfactual Shapley values\*, an aggregation of a novel counterfactual quantity we call the \*natural total effect\*, and prove they satisfy all desiderata\. We develop an algorithm for computing tight bounds on counterfactual Shapley values\. Experiments corroborate our theory\.

## Causal Attribution via Activation Patching

**Authors:** Amirmohammad Izadi; Mohammadali Banayeeanzade; Alireza Mirrokni; Hosein Hasani; Mobin Bagherian; Faridoun Mehri; Mahdieh Baghshah

**ID:** 155095 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8SdGwDmfly>) | [PDF](<https://openreview.net/pdf?id=8SdGwDmfly>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155095>)

Attribution methods for Vision Transformers \(ViTs\) aim to identify image regions that influence model predictions, but producing faithful and well\-localized attributions remains challenging\. Existing attribution methods face several limitations, with gradient\-based, relevance\-propagation, and attention\-based methods relying on local approximations, while perturbation or optimization\-based methods intervene on inputs, tokens, or surrogates rather than internal patch representations\. The key challenge is that class\-relevant evidence is formed through interactions between patch tokens across layers; methods that operate only on input changes, attention weights, or backward relevance signals may therefore provide indirect proxies for patch importance rather than directly testing the predictive effect of contextualized patch representations\. We propose Causal Attribution via Activation Patching \(CAAP\), which estimates the contribution of individual image patches to the ViT’s prediction by directly intervening on internal activations rather than using learned masks or synthetic perturbation patterns\. For each patch, CAAP inserts the corresponding source\-image activations into a neutral target context over an intermediate range of layers and uses the resulting target\-class score as the attribution signal\. The resulting attribution map reflects the causal contribution of patch\-associated internal representations on the model’s prediction\. The causal intervention serves as a principled measure of patch influence by capturing semantic evidence after initial representation formation, while avoiding late\-layer global mixing that can reduce spatial specificity\. Across multiple ViT backbones and standard metrics, CAAP consistently outperforms existing methods in various settings and produces more faithful and localized attributions\.

## xWhy: Causal Learning from Explanations

**Authors:** Nicholas Tagliapietra; Florian Peter Busch; Moritz Willig; Matej Zečević; Lavdim Halilaj; Juergen Luettin; Kristian Kersting

**ID:** 149735 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nl4FBxtsew>) | [PDF](<https://openreview.net/pdf?id=nl4FBxtsew>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149735>)

Explanations are central to causal reasoning, and cognitive science has long established that the human drive to explain is itself a mechanism for learning about causality\. Despite this, learning from those abductive signals is largely ignored in artificial intelligence\. While explainable AI \(XAI\) increasingly draws on causal models to generate explanations, the converse direction about what explanations can do for causality remains largely unexplored\. To fill this gap, we propose xWhyL, a formal framework connecting causality and XAI by learning causal models from explanations\. We develop a mathematical theory that translates explanations into a learning signal complementary to observational data, and demonstrate how it enables overcoming the limits of observational causal discovery\. As explanations can be derived from incorrect beliefs and clash with data, a tension we call the Causal Tug\-of\-War , we prove conditions under which our framework rejects misspecified explanations rather than absorbing them\. Our practical instantiation, Causal Interactive Learning \(CIL\), shows how expert explanations can efficiently support causal discovery and distinguish correct from incorrect explanations\.

## Counterfactual Maps: What They Are and How to Find Them

**Authors:** Awa Khouna; Julien Ferry; Thibaut Vidal

**ID:** 153015 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Oc0x3mRg64>) | [PDF](<https://openreview.net/pdf?id=Oc0x3mRg64>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153015>)

Counterfactual explanations are a central tool in interpretable machine learning, yet computing them exactly for complex models remains challenging\. For tree ensembles, predictions are piecewise constant over a large collection of axis\-aligned hyperrectangles, implying that an optimal counterfactual for a point corresponds to its projection onto the nearest rectangle with an alternative label under a chosen metric\. Existing methods largely overlook this geometric structure, relying either on heuristics with no optimality guarantees or on mixed\-integer programming formulations that do not scale to interactive use\. In this work, we revisit counterfactual generation through the lens of nearest\-region search and introduce counterfactual maps , a global representation of recourse for tree ensembles\. Leveraging the fact that any tree ensemble can be compressed into an equivalent partition of labeled hyperrectangles, we cast counterfactual search as the problem of identifying the generalized Voronoi cell associated with the nearest rectangle of an alternative label\. This leads to an exact, amortized algorithm based on volumetric k\-dimensional \(KD\) trees, which performs branch\-and\-bound nearest\-region queries with explicit optimality certificates and sublinear average query time after a one\-time preprocessing phase\. Our experimental analyses across several real datasets from high\-stakes application domains show that this approach delivers globally optimal counterfactual explanations with millisecond\-level latency, achieving query times that are orders of magnitude faster than existing exact, cold\-start optimization methods\.

## Prediction\-Intervention Games and Invariant Sets

**Authors:** Linus Kühne; Felix Schur; Jonas Peters

**ID:** 151847 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XRaoy63niz>) | [PDF](<https://openreview.net/pdf?id=XRaoy63niz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151847>)

We consider the following two\-player game: using observational data, the leader chooses a prediction function for a response variable $Y$ from given covariates\. The follower then reacts with an intervention on some covariates in the underlying structural causal model to maximize their own objective\. The leader knows the intervention targets, but may have limited knowledge of the follower's objective\. We call this setup a prediction\-intervention game, a special case of a Stackelberg game\. Finding an optimal strategy for the leader is generally difficult\. To avoid severe performance loss, the leader may base their prediction on the causal parents of $Y$, or more generally on an invariant subset of covariates\. We prove that predictors based on the stable blanket, a specific invariant subset, weakly dominate those based on the causal parents in the game for two common classes of follower objectives\. We further upper bound the leader's post\-intervention risk by a worst\-case risk over allowed interventions and strengthen existing distribution generalization results to analyze this bound: we give sufficient conditions under which stable\-blanket predictors are worst\-case optimal, and show by examples that these conditions cannot in general be dropped\. Finally, we discuss practical strategies when the causal graph is unknown and test them on simulated and real\-world data\.

## Causal Gradient Steering: Exposing Shortcut Gradients by Destroying Causal Signal

**Authors:** Ahmed Radwan; Ahmad Abdel\-Qader; Mahmoud Soliman; Omar Abdelaziz; Ahmed Elgazwy; Shan Du; Mohamed Shehata

**ID:** 148981 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tiohpJvNdL>) | [PDF](<https://openreview.net/pdf?id=tiohpJvNdL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148981>)

It is often easier to destroy the causal content of a training sample than to isolate it\. We use this observation to expose shortcut gradients during training\. If an intervention removes the semantic evidence that justifies a sample's label while preserving nuisance structure, then any predictive gradient the model still produces on the destroyed view points toward features that can support the label without the causal signal\. The destroyed view is constructed from the same sample as the clean view, and the implemented optimizer estimates this shortcut direction on the current minibatch and applies the steering step periodically\. Thus CGS injects a recurring within\-sample shortcut\-correction signal while remaining domain\-label\-free and close to ERM in cost\. We formalize this principle through a nuisance\-only Distributionally Robust Optimization geometry, in which an adversary may perturb nuisance factors while holding the semantic component fixed\. The resulting local Danskin majorizer induces a first\-order robust\-feasible cone in parameter space, and Causal Gradient Steering \(CGS\) is the closed\-form projection of the ERM step onto a tractable single\-normal approximation of this cone\. We further prove target\-risk and probe\-admissibility guarantees, showing that exact counterfactual generation in pixel space is unnecessary\. CGS is compatible with standard first\-order training and can act either as a standalone optimizer or as a plug\-in correction for existing DG algorithms\. It achieves state\-of\-the\-art performance across five standard domain generalization benchmarks\. Moreover, using a single locked CGS hyperparameter configuration, it improves seventeen prior DG methods by up to \+15\.8 percentage points without method\-specific retuning, improves OSTrack\-256 across GOT\-10k, UAV123, and OTB2015, and establishes new matched\-protocol state of the art for domain\-generalized semantic segmentation by improving SCSD from 51\.42 to 52\.35 mIoU on GTAV\+SYNTHIA$\\rightarrow$\\\{Cityscapes, BDD, Mapillary\\\} and from 35\.66 to 36\.99 mIoU on GTAV$\\rightarrow$ACDC\. Beyond this algorithm, causal signal destruction defines a research direction parallel to data augmentation\. The destruction operator is a design axis, and task\-specific destroyers can turn shortcut suppression into a reusable tool for broader vision problems\.

## Transporting the Past: An Optimal Transport View of Backtracking Counterfactuals

**Authors:** Zhangyi Liu; Sayedpouria Fatemi; Suvrit Sra

**ID:** 153288 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MNVvTXlGGM>) | [PDF](<https://openreview.net/pdf?id=MNVvTXlGGM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153288>)

We study backtracking counterfactual inference for \*Structural Causal Models\* \(SCMs\) through the lens of optimal transport\. In SCMs, a factual observation generally induces a posterior distribution over exogenous variables, making counterfactual inference inherently distributional\. We introduce two complementary frameworks that transport this posterior onto the set of exogenous configurations satisfying a desired counterfactual query\. The first constructs a natural pointwise projection and is suitable when the transported exogenous distribution can be used directly\. The second enforces mutual independence among counterfactual exogenous variables, so that the transported variables remain interpretable as genuine exogenous noises of the same SCM\. We show that both frameworks are consistent with the original backtracking counterfactual principle, and we propose marginal, penalty\-based, and hard\-constrained solvers for finite\-posterior settings\. Synthetic experiments on non\-bijective SCMs illustrate the geometry of the problem and reveal trade\-offs among transport cost, counterfactual constraint satisfaction, and preservation of exogenous independence\.

## Graph Distance Based on Cause\-Effect Estimands with Latents

**Authors:** Zhufeng Li; Niki Kilbertus

**ID:** 155722 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3PbzWjbwZ4>) | [PDF](<https://openreview.net/pdf?id=3PbzWjbwZ4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155722>)

Causal discovery aims to recover graphs that represent causal relations among given variables from observations, and new methods are constantly being proposed\. Increasingly, the community raises questions about how much progress is made, because properly evaluating discovered graphs remains notoriously difficult, particularly under latent confounding\. We propose a graph distance measure for acyclic directed mixed graphs \(ADMGs\) based on the downstream task of cause\-effect estimation under unobserved confounding\. Our approach uses identification via fixing and a symbolic verifier to quantify how graph differences distort cause\-effect estimands for different treatment\-outcome pairs\. We analyze the behavior of the measure under different graph perturbations and demonstrate how it complements existing distance metrics\.

## Many Circuits, One Mechanism: Input Variation and Evaluation Granularity in Circuit Discovery

**Authors:** Alireza Bayat Makou; Jingcheng Niu; Subhabrata Dutta; Iryna Gurevych

**ID:** 156762 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156762>)

Circuit discovery methods identify subgraphs that explain specific model behaviors, and structural differences between discovered circuits are commonly interpreted as evidence of distinct mechanisms\. We test this assumption by drawing input tokens from bands defined by their frequency in the pretraining data while holding the task fixed\. The discovered circuits appear specialized by frequency when compared structurally, but functional and representational analyses show no reliable evidence of corresponding differences in their computations\. We term this mismatch phantom specialization\. Using the Literal Sequence Copying task across four frequency bands plus a control sampled according to token frequency, we extract 75 circuits from five Pythia models \(70M\-1\.4B\)\. We find that structurally distinct circuits implement the same computation: band\-specific edges transfer broadly across bands, a core shared across most bands recovers at least 99% of circuit performance in models above 70M, and causal interchange interventions confirm that internal representations are interchangeable across frequency bands\. A smaller replication on a subject\-verb agreement task shows the same pattern: circuits differ structurally, transfer broadly across bands, and the core shared by most bands recovers nearly all of the circuit's accuracy in all five models\. Repeated extractions within the same frequency band further suggest that discovery algorithms sample from an equivalence class of valid subgraphs rather than recovering a unique mechanism\. Standard evaluation practice obscures this pattern: source\-level evaluation inflates apparent faithfulness, while edge\-level evaluation reveals the many\-to\-one mapping from structure to function\. We find no reliable evidence that frequency bands are processed by different computations\. In this work, we do not test specialization at the level of token positions or of features inside a component\. Our results show that structural differences between circuits are not sufficient evidence for distinct mechanisms, and that exposing this requires edge\-level evaluation and cross\-condition transfer tests\.

## Statistical Inference in Causal Partial Identification under Smooth Densities

**Authors:** Sirui Lin; Zijun Gao; Jose Blanchet; Peter W Glynn

**ID:** 152254 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UQOO8NDAjo>) | [PDF](<https://openreview.net/pdf?id=UQOO8NDAjo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152254>)

Many causal quantities are only partially identifiable due to the inherent missingness of potential outcomes, and the associated partial identification \(PI\) sets can be obtained by solving an optimal transport \(OT\) problem\. Covariates often provide additional information about the potential outcomes and thus yield tighter PI sets, which can be obtained via conditional optimal transport \(COT\)\. However, COT\-based PI set estimators are susceptible to the curse of dimensionality in the covariates, which precludes the asymptotic normality and hinders statistical inference\. In this paper, we exploit the smoothness in the marginal densities of covariates and potential outcomes, and develop a wavelet\-based primal approach for COT that attains a faster convergence rate\. Moreover, for quadratic cost functions, we establish a stability result for COT and prove asymptotic normality of the proposed estimator, enabling valid statistical inference for the PI set\. Empirically, we validate the estimation and inference performance of our approach through numerical experiments in comparison with existing benchmarks\.

## Joint Treatment Effect Estimation from Incomplete Healthcare Data: Temporal Causal Normalizing Flows with LLM\-driven Evolutionary MNAR Imputation

**Authors:** Olivia Jullian Parra; Sara Zoccheddu; David C Cerezo; Tom Forzy; Franziska S Ulrich; William Sutcliffe; Jakob M Burgstaller; Oliver Senn; Patrick Owen; Nicola Serra

**ID:** 150903 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eYP8uXiZtE>) | [PDF](<https://openreview.net/pdf?id=eYP8uXiZtE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150903>)

Target trial emulation \(TTE\) provides a framework for answering causal questions using observational data when randomized controlled trials \(RCTs\) are infeasible\. However, standard methods for treatment effect estimation have been developed in isolation, failing to jointly address the compounding challenges inherent to analyses of observational data such as electronic health records \(EHRs\)\. In particular, these challenges include time\-varying confounding and missing\-not\-at\-random \(MNAR\) missingness reaching 50\\%\-80\\% for critical biomarkers\. To address this gap, we propose a two\-stage pipeline that jointly handles MNAR missingness and causal structure across time\. CausalFlow\-T, a Directed Acyclic Graph \(DAG\)\-constrained normalizing flow with Long Short\-Term Memory \(LSTM\)\-encoded patient history, performs exact invertible counterfactual inference, eliminating the approximation errors and confounding biases where existing variational and adversarial methods fail silently\. Ablations on four synthetic and one semi\-synthetic dataset with known counterfactuals confirm that its two core design choices address strictly non\-overlapping failure modes \(DAG constraints for confounding separation, exact inference for structural propagation\) with neither compensating for the absence of the other\. To handle the incomplete data CausalFlow\-T receives as input, we propose an LLM\-driven evolutionary imputer and evaluate it with three LLM backends, including two open\-source models\. Across 30\\%\-80\\% MNAR missingness, the imputer achieves the best pooled rank across biomarker and causal metrics, leading on point\-wise accuracy and temporal extrapolation while maintaining average treatment effect \(ATE\) recovery where statistical methods progressively degrade\. Applied to a cohort of adults with type 2 diabetes in Swiss primary care initiating a GLP\-1 receptor agonist or SGLT\-2 inhibitor, the pipeline recovers a per\-protocol weight\-loss difference of $\-0\.98$ kg \[$95\\%$ CI $\-1\.01$, $\-0\.96$\] favoring GLP\-1 receptor agonists, consistent with RCT evidence and estimated directly from realistically incomplete real\-world EHR data\.

## Causal Discovery via Transformed Low\-Rank Quantile Surfaces

**Authors:** Ryo Kamimura; Thong Pham

**ID:** 149402 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qKXBoHz41o>) | [PDF](<https://openreview.net/pdf?id=qKXBoHz41o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149402>)

We propose Low\-Rank Quantile Surfaces \(LRQS\), a bivariate causal model in which, in the causal direction, an unknown monotone transformation of the conditional quantile surface admits a low\-rank functional decomposition\. LRQS subsumes location\-scale noise models and post\-nonlinear heteroscedastic noise models, while allowing multiple quantile bases to represent changes beyond location\-scale effects\. We prove generic identifiability of LRQS: the transformed quantile surface is low rank in the causal direction, whereas reverse representability under the corresponding constraints occurs only for exceptional, fine\-tuned cause marginals\. We provide a simple\-yet\-powerful causal score using a nonparametric fitting procedure that alternates between rank\-constrained approximation of discretized quantile surfaces and isotonic estimation of the unknown monotone transformation\. Experiments on synthetic mechanisms with higher\-rank distributional shape variation and strong nonlinear distortions, together with standard bivariate benchmarks, show that LRQS is especially effective when conditional distributional shape or observation distortion goes beyond existing location\-scale assumptions\.

## Observable Neural ODEs for Identifiable Causal Forecasting in Continuous Time

**Authors:** Jennifer Wendland; Nicolas Freitag; Maik Kschischo

**ID:** 153828 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IQwsfl9G8s>) | [PDF](<https://openreview.net/pdf?id=IQwsfl9G8s>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153828>)

Causal inference in continuous\-time sequential decision problems is challenged by hidden confounders\. We show that, in latent state\-space models with time\-varying interventions, observability of the latent dynamics from observed data is necessary for identifying dynamic treatment effects, linking control\-theoretic observability to causal identifiability, even when hidden confounders affect both treatments and outcomes\.  We derive a continuous\-time adjustment formula expressing potential outcome dis\- tributions under treatment trajectories via the measurement model, latent dynamics, and the filtering distribution over latent states given observed histories\. We propose Observable Neural ODEs \(ObsNODEs\), Neural ODE models in ob\- servable normal form for causal forecasting\. ObsNODEs learn continuous\-time dynamics with states reconstructible from observations, enabling outcome predic\- tion under alternative treatment paths\.  Experiments on synthetic cancer data, semi\-synthetic data based on MIMIC\-IV, and real\-world sepsis data show strong performance over recent sequence models\.

## From Baselines to Transport Geodesics: Axiomatic Attribution via Optimal Generative Flows

**Authors:** Cenwei Zhang; Lin Zhu; Manxi Lin; Lei You

**ID:** 155282 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6mst9gKX4f>) | [PDF](<https://openreview.net/pdf?id=6mst9gKX4f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155282>)

Feature attributions often hide a critical modeling choice: they explain a prediction along a counterfactual path from a reference state to an input\. Different baselines, interpolations, and generative trajectories define different paths and can therefor produce different explanations\. We study this path ambiguity as a modeling problem\. Our central question is whether the path can be chosen by the data\-generating transport process, rather than by a hand\-designed interpolation or by the sensitivity geometry of the model being explained\. We separate attribution into fixed\-path credit allocation and path selection\. For a fixed path, we prove that the Aumann\-Shapley line integral is the unique attribution rule under standard fixed\-path axioms and explicit coordinate\-trace regularity\. For path selection, we minimize kinetic action over flows that transport a reference distribution to the data distribution, yielding a transport\-geodesic attribution principle\. We approximate this ideal with Rectified Flow and Reflow and derive stability bounds linking vector\-field error to attribution error\. Experiments show that lower\-action, transport\-consistent paths produce more stable and structured explanations, preserving competitive deletion faithfulness, without claiming data\-manifold membership\. Our code is available at https://anonymous\.4open\.science/r/temp\_OTshap\-6119\.

## CorridorLight: Cooperation as Task Negotiation with Causal Gating for Traffic Signal Control

**Authors:** Pak Lon Ip; Pengfei Ren; Yuteng Lin; Rongqin Chen; Tsz Nam Chan; Leong Hou U

**ID:** 155914 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1rJLK6fsvX>) | [PDF](<https://openreview.net/pdf?id=1rJLK6fsvX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155914>)

Network\-level traffic signal control \(TSC\) involves coordination under partial observability and strict real\-time constraints\. In real\-world urban networks with dozens or hundreds of intersections, direct coordination incurs an intractably large joint action space, making centralized cooperation difficult to deploy in practice\. We propose CorridorLight, which tackles this challenge by casting cooperation as task negotiation\. A high\-level Corridor Agent represents the network as a direction\-level graph and periodically generates a small set of junction\-disjoint corridor tasks via a seed\-and\-grow procedure\. These tasks provide lane\-level preference guidance, while Intersection Agents maintain fast decentralized control and selectively support the active corridor task\. By learning when to cooperate versus act selfishly, CorridorLight enables an adaptive trade\-off between local delay minimization and corridor\-level relief, leading to improved global performance\. To this end, we derive a closed\-form, Lipschitz\-continuous gating function by maximizing a counterfactual net gain between cooperative and selfish behavior, yielding smooth, interpretable cooperation without brittle heuristics\. Experiments on synthetic grids and real\-world networks show consistent system\-level improvements and outperform cooperative TSC baselines across diverse topologies and demand patterns\.

## Perception Without Engagement: Dissecting the Causal Discovery Deficit in LMMs

**Authors:** Jiafeng Liang; Zhihao Zhu; Zihan Zhang; Baoqi Ren; Tao Ren; Shixin Jiang; Runxuan Liu; Ming Liu; See\-Kiong Ng; Bing Qin

**ID:** 154291 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EsnHyvhAN4>) | [PDF](<https://openreview.net/pdf?id=EsnHyvhAN4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154291>)

Although Large Multimodal Models \(LMMs\) have achieved strong performance on general video understanding, their susceptibility to textual prior shortcuts during causal discovery has been recognized as a critical deficit\. The underlying mechanisms of this phenomenon remain incompletely understood, as existing benchmarks only measure response accuracy without revealing the sources and extent of the deficit\. We introduce ProCauEval, a perturbation\-based evaluation protocol that shifts from outcome assessment to mechanism diagnosis, probing causal discovery through five controlled configurations that systematically manipulate visual and textual modalities to decompose their respective contributions to model behavior and dissect the failure modes\. Evaluating 17 mainstream LMMs, we find that models faithfully perceive video content yet systematically underexploit it during causal reasoning\. We further observe that stronger post\-training amplifies rather than mitigates textual prior reliance, and that higher baseline performance correlates with greater fragility under perturbation\. To address these, we propose Anti\-Distillation Policy Optimization \(ADPO\), a reinforcement learning framework built on negative teacher alignment, which augments GRPO by explicitly pushing the policy away from a prior\-only counterfactual teacher induced by visual corruption\. Specifically, ADPO maximizes the divergence between the policy distributions conditioned on the original and visually corrupted inputs, thereby forcing the model to ground its reasoning in visual evidence rather than textual shortcuts\. Extensive experiments show that ADPO improves visual engagement without sacrificing fundamental comprehension, thus offering a preliminary step toward reliable causal discovery\.

## Can the Parts Fool the Test? Counterfactual Pairing Cycles for Relational OOD

**Authors:** Yibo Zhou; Yirong Xiang

**ID:** 149781 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nLCr7f3CZV>) | [PDF](<https://openreview.net/pdf?id=nLCr7f3CZV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149781>)

Relational out\-of\-distribution errors are easy to describe and hard to evaluate cleanly\. An image may be natural, a caption may be fluent, and all mentioned objects may be common, yet the caption may describe the wrong relation in the image\. Many evaluations intended to test this behavior can be solved without checking the pairing at all, because negatives differ in caption style, template, length, object frequency, or image statistics\. We propose counterfactual pairing cycles, a blocked evaluation primitive that reuses the same two images and the same two captions on both sides of the comparison, changing only which image is paired with which caption\. This makes image\-only, text\-only, and additive component shortcuts cancel exactly in finite samples\. The same contrast also gives a training loss for relational outlier exposure and a diagnostic for bilinear vision\-language scores\. Across synthetic controls, GQA, and COCO, cycles separate coarse image\-caption matching from stricter role\-binding failures\. In a shortcut\-contaminated COCO outlier\-exposure stress test, a model selected by a perfect shortcut validation AUROC transfers poorly to exact relational cycles, while cycle training improves CycleAcc from \\\(0\.576\\\) to \\\(0\.911\\\)\. The main lesson is simple: to test whether a model understands a pairing, the benchmark should keep the parts fixed, change the pairing, and ask only about coupling\.

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

## Weighted Sampling for Online Causal Discovery

**Authors:** Arnab Bhattacharyya; Philips George John; Sayantan Sen; Naganand Yadati

**ID:** 149926 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m8tnzuLcen>) | [PDF](<https://openreview.net/pdf?id=m8tnzuLcen>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149926>)

Discovering the underlying causal structure of a system is a fundamental challenge in machine learning, requiring interventional data to distinguish between observationally equivalent models\. In this paper, we study the problem of learning causal Bayesian networks in an online setting, where a learner sequentially observes individual samples from a stream of unknown interventional and observational distributions\. We formulate this task as an online sequence prediction problem\. To overcome the super\-exponential size of the DAG search space, we extend dynamic programming algorithms originally developed for uniform DAG counting and sampling within Markov Equivalence Classes to support score\-decomposable, weighted sampling\.  We prove that the posterior distribution maintained by our algorithm competes with the optimal causal structure in hindsight, outputting a distribution that is close to the true data\-generating mechanism as measured by the Interventional Kullback\-Leibler divergence\.

## The Causal Description Gap: Information\-Theoretic Separations Across Pearl's Hierarchy

**Authors:** Seyedmorteza Emadi

**ID:** 154347 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EHJ28rBFTV>) | [PDF](<https://openreview.net/pdf?id=EHJ28rBFTV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154347>)

Pearl's causal hierarchy shows that observational, interventional, and counterfactual queries are qualitatively distinct\. We ask a quantitative version of this question: how many additional bits are needed to specify higher\-rung causal answers once lower\-rung answers are known? We formalize this via query\-class description length, the Kolmogorov complexity of the answer oracle induced by an SCM for a class of queries\. Our main construction gives binary acyclic SCMs whose observational distribution has constant description length, while the single\-variable interventional answer oracle has description length $\\Theta\(n^2\)$\. A degree\-sensitive upper bound shows that finite\-gate\-schema SCMs of indegree $d$ have observational–interventional gap at most $O\(nd\\log\(en/d\)\+n\\log n\)$, making the quadratic construction order\-optimal in the dense regime and a rooted\-tree construction order\-optimal for bounded indegree\. The quadratic separation persists under $\\varepsilon$\-accurate total\-variation descriptions for every fixed $\\varepsilon &lt; 1/4$\. At the next rung, the full hard\-do interventional oracle can still leave a $\\Theta\(n\)$ counterfactual description gap\. A general ambiguity\-to\-bits theorem and Shannon analogue show that these gaps equal the logarithm of residual higher\-rung ambiguity up to lower\-order terms\.

## Who caused $Y$? Local identifiability for learning causal parents

**Authors:** Felix Schur; Sorawit Saengkyongam; Jonas Peters

**ID:** 150074 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kvVc2NQe9H>) | [PDF](<https://openreview.net/pdf?id=kvVc2NQe9H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150074>)

We study identifiability   and estimation of the direct causes, that is, the parents, of a designated target      $Y$ in a structural causal model using only observational data\. Our main assumption is an additive\-noise model for      $Y$: the value of      $Y$ equals some function of its parents plus noise that is independent of those parents\. We allow     for general functional relationships and hidden confounding among all other variables\. We prove that under a \`no\-backward'     additive\-noise condition     the true parent set, $\\mathrm\{PA\}\(Y\)$, is identified from the observational distribution by a simple population principle: among all candidate variable sets that make the regression residual of      $Y$ independent of the regressors, choose the one with the smallest residual variance, and—if several tie—the smallest set\.     To justify the \`\`no\-backward'' condition, we propose a novel identifiability scheme based on identifiability witnesses:      we prove that in finite\-dimensional analytic model classes,      for which we have an identifiability witness \(that is, a single identifiable model\),     residual independence for sets containing     descendants of \\\(Y\\\)      holds only on     Lebesgue\-null exceptional parameter sets\. This scheme is strong enough to recover known identifiability results\.     For finite data, we propose Independent Risk Minimization \(IndRM\), which     offers a simple, local, and non\-interventional route to isolating the direct causes of $Y$ in multivariate systems, avoiding global model assumptions and full\-graph search\.

## Causal Abstractions, Categorically Unified

**Authors:** Markus Englberger; Devendra Singh Dhami

**ID:** 153629 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JyGppnYf3i>) | [PDF](<https://openreview.net/pdf?id=JyGppnYf3i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153629>)

We introduce a categorical framework for causal abstraction that unifies and extends existing approaches\. Modeling causal systems as Markov functors from free Markov categories generated by directed acyclic graphs, we define a causal abstraction as a deterministic natural transformation together with an embedding of restricted free Markov categories\. This separates graphical compatibility under interventions from domain\-level clustering of variables or values\. Our framework provides an explicit characterization of admissible high\-level graphs and recovers prior notions such as constructive \-abstractions and cluster\-DAG abstractions with unobserved confounders\. We give concise categorical proofs that interventional distributions factorize over graphical abstractions and that do\-calculus applied to the high\-level graph yields valid conclusions for the low\-level model\.

## Data\-Driven Covariate Selection for Nonparametric and Cycle\-Agnostic Causal Effect Estimation

**Authors:** Ana L Vicente; Gijs van Seeventer; Saber Salehkaleybar

**ID:** 155410 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5rgmG7fjJh>) | [PDF](<https://openreview.net/pdf?id=5rgmG7fjJh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155410>)

Estimating causal effects from observational data requires identifying valid adjustment sets\. This task is especially challenging in realistic settings where latent confounding and feedback loops are present\. Existing approaches typically assume acyclicity or rely on global causal structure learning, limiting applicability and computational efficiency\. In this work, we study a local, data\-driven method for covariate selection based on conditional independence information\. While this method is known to be sound and complete in acyclic causal models, its validity in the presence of cycles has remained unclear\. Our main contribution is to show that these guarantees extend to cyclic causal models\. In particular, our result relies on the invariance of conditional independence assertions under $\\sigma$\-acyclification\. These findings establish a unified, cycle\-agnostic perspective on covariate selection and causal effect estimation, showing that the method applies across cyclic and acyclic settings without modification\. Empirically, we validate this on extensive synthetic data, showing reliable performance in cyclic causal models\.

## Optimal Experiments for Partial Causal Effect Identification

**Authors:** Tobias Maringgele; Jalal Etesami

**ID:** 154125 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G61y8qp0of>) | [PDF](<https://openreview.net/pdf?id=G61y8qp0of>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154125>)

Causal queries are often only partially identifiable from observational data, and experiments that could tighten the resulting bounds are typically costly\. We study the problem of selecting, prior to observing experimental outcomes, a cost\-constrained subset of experiments that maximally tightens bounds on a target query\. We formalize this as the max\-potency problem, where epistemic potency measures the worst\-case reduction in bound width guaranteed by an experiment, and show that this problem is NP\-hard via a reduction from 0\-1 knapsack\. Building on the polynomial\-programming framework of Duarte et al\. \(2023\), we give a general procedure for evaluating epistemic potency in discrete settings\. To control the super\-exponential search space, we introduce two graphical pruning criteria that depend only on the causal graph and the query: a novel path\-interception rule that exploits district structure to certify zero potency in linear time, and an identifiability check based on the ID algorithm\. On Erdős–Rényi random graphs and 11 bnlearn benchmark networks, the two criteria together prune 50\-88% of candidate experiments on average without solving a single polynomial program\. For the general subset search, we show that ID\-pruned experiments are combinatorially inert, yielding a super\-exponential reduction in the number of subsets evaluated\. We close with an end\-to\-end demonstration on observational NHANES data, selecting optimal experiments for estimating the effect of physical activity on diabetes\.

## Tracing Actual Causes with Counterfactual Witness Maps

**Authors:** Tim Woydt; Matej Zečević; Kristian Kersting; Moritz Willig

**ID:** 152706 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=R0MXum0YPw>) | [PDF](<https://openreview.net/pdf?id=R0MXum0YPw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152706>)

Halpernian actual causation, the formal study of which events in a specific situation caused a specific outcome in acyclic structural causal models, underpins legal responsibility, moral blame, and the assessment of causal harm\. Despite the rich logical framework, no prior sound and complete enumeration procedure is known for finding \*all\* actual causes in a given setting, blocking downstream tasks such as responsibility attribution, blame assessment, and causal\-harm grading that aggregate over the full cause set\. We close this gap by introducing \*witness targets\*: sets of joint configurations containing every counterfactual witness\. In combination with an \*ancestor intervention grammar\* we derive a finite directed acyclic \*witness map\*\. We prove that for every actual cause there exists a contingency set such that the joint intervention set appears as a node of this map, and present an algorithm for \*Tracing Actual Causes \(TrAC\)\* that is sound and complete for enumerating all actual causes of any target event\. We compare TrAC empirically with existing single\-cause baselines on random Boolean structural causal models, demonstrating practical feasibility for graphs of up to 15 nodes\.

## Validating Causal Abstraction Metrics on Simulated Complex Systems

**Authors:** Maxime Méloux; Tiago Pimentel; François Portet; Maxime Peyrard

**ID:** 149449 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q05m7XZ9Y9>) | [PDF](<https://openreview.net/pdf?id=q05m7XZ9Y9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149449>)

A central goal of science is to produce valid explanations of complex systems: high\-level causal accounts that faithfully reflect the behavior of lower\-level mechanisms\. Yet no consensus exists on how to measure whether a proposed high\-level explanation is actually valid\. We introduce a benchmark of ten complex systems spanning discrete and continuous state spaces and static and dynamical regimes, each equipped with consensual ground\-truth causal explanations and invalid contrastive conditions\. Within a unified causal abstraction framework, we systematically evaluate over thirty candidate metrics drawn from observational, functional, information\-theoretic, and causal families\. Our results show that only the latter reliably discriminates valid from invalid abstractions, and only when incorporating faithfulness testing over unmapped variables\. Building on these findings, we introduce the Causal Abstraction Error \(CAE\), a continuous validity metric with an explicit faithfulness test, which passes all discrimination tests across every system and converges with as few as 30 sampled interventions\. We offer it as a general\-purpose metric for the discovery and validation of high\-level explanations of complex systems\.

## Targeted Synthetic Control Method

**Authors:** Yuxin Wang; Dennis Frauen; Emil Javurek; Konstantin Hess; Yuchen Ma; Stefan Feuerriegel

**ID:** 152635 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RcGYPQDaKH>) | [PDF](<https://openreview.net/pdf?id=RcGYPQDaKH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152635>)

The \*synthetic control method\* \(SCM\) estimates causal effects in panel data with a single\-treated unit by constructing a counterfactual outcome as a weighted combination of untreated control units that matches the pre\-treatment trajectory\. In this paper, we introduce the \*\*targeted synthetic control \(TSC\)\*\* method, a new two\-stage estimator that directly estimates the counterfactual outcome\. Specifically, our TSC method \(1\) yields a targeted debiasing estimator, in the sense that the targeted updating refines the initial weights to produce more stable weights; and \(2\) ensures that the final counterfactual estimation is a convex combination of observed control outcomes to enable direct interpretation of the synthetic control weights\. TSC is flexible and can be instantiated with arbitrary machine learning models\. Methodologically, TSC starts from an initial set of synthetic\-control weights via a one\-dimensional targeted update through the weight\-tilting submodel, which calibrates the weights to reduce bias of weights estimation arising from pre\-treatment fit\. Furthermore, TSC avoids key shortcomings of existing methods \(e\.g\., the augmented SCM\), which can produce unbounded counterfactual estimates\. Across extensive synthetic and real\-world experiments, TSC consistently improves estimation accuracy over state\-of\-the\-art SCM baselines\.

## Generalized Bayes for Causal Inference

**Authors:** Emil Javurek; Dennis Frauen; Yuxin Wang; Stefan Feuerriegel

**ID:** 151689 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ym1qwTHLhL>) | [PDF](<https://openreview.net/pdf?id=Ym1qwTHLhL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151689>)

Uncertainty quantification is central to many applications of causal machine learning, yet principled Bayesian inference for causal effects remains challenging\. Standard Bayesian approaches typically require specifying a probabilistic model for the data\-generating process, including high\-dimensional nuisance components such as propensity scores and outcome regressions\. Standard posteriors are thus vulnerable to strong modeling choices, including complex prior elicitation\. In this paper, we propose a \\textit\{generalized Bayesian framework for causal inference\}\. Our framework avoids explicit likelihood modeling; instead, we place priors directly on the causal estimands and update these using an identification\-driven loss function, which yields generalized posteriors for causal effects\. As a result, our framework turns existing loss\-based causal estimators into estimators with full uncertainty quantification\. Our framework is flexible and applicable to a broad range of causal estimands \(e\.g\., ATE, CATE\)\. Further, our framework can be applied on top of state\-of\-the\-art causal machine learning pipelines \(e\.g\., Neyman\-orthogonal meta\-learners\)\. For Neyman\-orthogonal losses, we show that the generalized posteriors converge to their oracle counterparts and remain robust to first\-stage nuisance estimation error\. With calibration, we thus obtain valid frequentist uncertainty even when nuisance estimators converge at slower\-than\-parametric rates\. Empirically, we demonstrate that our proposed framework offers causal effect estimation with calibrated uncertainty across several causal inference settings\. To the best of our knowledge, this is the first flexible framework for constructing generalized Bayesian posteriors for causal machine learning\.

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

## Causal Concept Explanations for Deep Neural Models

**Authors:** Josh Rountree; Pulkit Verma; Oswin So; Chuchu Fan; Julie A Shah

**ID:** 149967 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lrgD8sYBzf>) | [PDF](<https://openreview.net/pdf?id=lrgD8sYBzf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149967>)

Concept\-based explanations in neural models tie their outputs to human\-meaningful concepts that users can understand, troubleshoot, and trust\. But these explanations are typically correlational rather than causal: a concept can fire alongside an output without driving it, yielding interpretability that looks right but misleads\. We introduce Causal Concept Wrapper Network \(CCW\-Net\), the first use of mediation analysis as a training objective in deep networks\. We further apply mediation analysis as an evaluation tool to quantify, per sample, how much of any model's output is causally attributable to each concept\. As a training objective, CCW\-Net shapes a model's concept embeddings such that each concept's contribution to the output is both locally necessary and sufficient for the share it is credited with, and independent of contributions from other concepts\. Counterfactual concept samples drawn from a learned per\-concept flow anchor a set of causal alignment criteria: necessity drives the effect of every irrelevant concept toward zero; sufficiency requires relevant concepts to fully reconstruct the model's output; and independence enforces that the total effect decomposes linearly across concepts\. We evaluate CCW\-Net across aircraft control, driving, and fine\-grained image classification\. The result is a step toward concept\-based explanations that are not merely interpretable, but quantifiably causal, supporting safer deployment, evaluation, and certification of transparent and trustworthy neural systems\.

## Missing data and cluster graphs: cluster\-level missingness vs variable\-level missingness

**Authors:** Willow J\. Scott; Eugenio Valdano; Charles Assaad

**ID:** 151277 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ba7kfTovXS>) | [PDF](<https://openreview.net/pdf?id=ba7kfTovXS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151277>)

Missing data is pervasive in many scientific domains such as public health, environmental science, and the social sciences\. Recoverability from missing data is typically studied using fully specified variable\-level missingness models despite that, in many applications, only coarse structural information is available, for instance when variables are grouped into clusters due to limited knowledge or interpretability reasons\. In this paper, we investigate recoverability from such abstract representations\. We introduce two classes of cluster\-based missingness graphs: the m\-C\-DMG, which retains variable\-specific missingness indicators, and the cm\-C\-DMG, which aggregates missingness mechanisms at the cluster level\. We formalize the notion of compatibility between these abstract graphs and underlying variable\-level missingness models, and study how this abstraction affects the recoverability of probabilistic and causal queries\. In particular, we give graphical conditions of recovering the joint distribution as well as graphical conditions of recovering a macro causal effect\. Overall, our results clarify when cluster\-level missingness information is sufficient for valid inference, and when finer\-grained modeling is necessary\.

## Mixture\-of\-Chains: Learning Causal Graphs from Human Knowledge

**Authors:** Yuantao Wei; Huiling Liao; Ryan \(Feng\) Lin; Xiaoning Qian; Shuai Huang

**ID:** 148842 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ujzBKW4K95>) | [PDF](<https://openreview.net/pdf?id=ujzBKW4K95>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148842>)

Human causal knowledge offers a valuable yet underexplored source of structural information for causal discovery\. However, eliciting and using such knowledge can be nontrivial, since causal beliefs are typically heterogeneous across individuals and human judgments can be noisy\. Existing methods tend to treat human input as auxiliary constraints or priors, failing to capture the underlying causal structure and frequently yielding unreliable or cyclic graphs\. In this paper, we propose Mixture\-of\-Chains \(MOC\), a framework for directly learning causal graphs from human causal judgments by modeling them as a mixture of latent causal chains\. Each chain represents a coherent pathway in human belief structures, allowing MOC to capture variability across reasoning contexts or different individuals\. The framework adaptively extracts these chains from noisy inputs and integrates them into a globally consistent causal graph\. Experiments on synthetic Bayesian network benchmarks and real human data show that MOC can effectively recover the ground\-truth causal structures with strong robustness to input noise and inter\-subject variability, supported by the theoretical analysis for recovery conditions\. These results suggest that human knowledge can serve not merely as a supplement to data\-driven methods, but as a primary source for causal graph learning, and highlight the promise of chain\-level modeling for reliable causal discovery\.

## Structure\-Adaptive Estimation of Heterogeneous Treatment Effects with Kernel Methods

**Authors:** Seok\-Jin Kim

**ID:** 154765 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B6if6B55a9>) | [PDF](<https://openreview.net/pdf?id=B6if6B55a9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154765>)

We study conditional average treatment effect \(CATE\) estimation from observational data in regimes with potentially weak overlap, when the nuisance response functions lie in a reproducing kernel Hilbert space \(RKHS\), but the contrast function is structurally simpler\. We consider three forms of such simplicity: \(i\) membership in a lower\-complexity RKHS with faster eigenvalue decay, \(ii\) a source condition relative to the nuisance kernel, or \(iii\) dependence on a known low\-dimensional covariate representation\. We develop a unified two\-stage kernel ridge regression procedure that remains valid under weak overlap and attains minimax rates determined by the complexity of the contrast function\. Unlike existing methods that rely on propensity\-score estimation and stronger nuisance error control, our procedure avoids propensity\-score estimation altogether and requires only that the outcome nuisance class be well specified, which is especially advantageous under weak overlap\. We also show that a simple model\-selection step over candidate contrast spaces and regularization levels satisfies an oracle inequality, enabling adaptation to unknown CATE regularity\.

## COSAC: Counterfactual Credit Assignment in Sequential Cooperative Teams

**Authors:** Shripad Deshmukh; Jayakumar Subramanian; Raghavendra Addanki; Nikos Vlassis

**ID:** 150611 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gs2iunr5fs>) | [PDF](<https://openreview.net/pdf?id=gs2iunr5fs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150611>)

In cooperative teams where agents act in a fixed order and share a single team\-level reward \(multi\-agent language systems, sequential robotic tasks\), per\-agent credit assignment is under\-determined\. Critic\-based approaches scale poorly as the number of agents grows owing to the costly maintenance of joint/factored critic\(s\), whereas the existing critic\-free alternatives have other issues: common credit across agents that couples every agent's signal to teammate noise, importance\-sampling corrections for upstream\-update staleness that incur variance exponential in team size, or per\-agent counterfactual replay that isolates each agent's effect at the price of extra environment or reward calls\.  We propose COSAC, a critic\-free per\-agent policy gradient for sequential cooperative teams\. COSAC fits an additive per\-agent decomposition of the team reward by a single ridge regression on the rollout batch \(giving each agent a learning signal decoupled from teammate noise\), and computes each agent's counterfactual advantage from fictitious continuations of the current policy \(policy forward passes that replace both importance\-sampling reweighting and per\-agent environment replay, at no extra environment or reward cost\)\. The estimator instantiates the \*\*Sequential Aristocrat Utility\*\* \(SeqAU\), our extension of Wolpert and Tumer's \(2001\) aristocrat utility to sequential teams\. We prove bias and variance bounds on SeqAU credits that stay controlled as the team grows\. Our controlled study on sequential bandits demonstrates that COSAC attains the lowest advantage MSE and consistently low learning regret across team sizes up to $K = 16$\. On the AI2 Reasoning Challenge \(ARC\) task, where four Qwen3\-0\.6B agents reason in turn about a grade\-school science question, COSAC attains faster convergence than the other critic\-free baselines\.

## Characterizing Underrepresentation in Generalizing Causal Survival Estimates

**Authors:** Bolun Liu; Sean McGrath; Yiren Hou; Elizabeth Stuart; Harsh Parikh

**ID:** 153000 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OiKgzKcvqA>) | [PDF](<https://openreview.net/pdf?id=OiKgzKcvqA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153000>)

Randomized trial findings are routinely generalized to broader target populations to inform decisions in medicine and public policy\. When the trial sample is misaligned with the target population, generalized effect estimates can yield suboptimal decisions\. We identify and characterize the target subgroups that are underrepresented in the trial cohort in time\-to\-event settings\. Here, underrepresentation arises in two distinct ways: baseline underrepresentation, when a subgroup's covariate profile is rare in the trial relative to the target, and time\-varying underrepresentation, when differential censoring erodes a subgroup over follow\-up\. Existing diagnostics either conflate these mechanisms or address only the baseline case\. We show that the asymptotic variance of the efficient generalizability estimator admits a decomposition in which only two terms can diverge as representation weakens: a sampling\-weight term capturing baseline misalignment and a censoring\-weight term capturing differential loss to follow\-up\. Underrepresented subgroups are therefore precisely those the trial estimates with poor precision, and the decomposition reveals which channel is responsible\.We exploit this operationally in $\\textbf\{TRACE\}$ \($\\textbf\{T\}$emporal $\\textbf\{R\}$ashomon $\\textbf\{A\}$nalysis of $\\textbf\{CE\}$nsored data\), which combines a self\-normalized variance objective with a tree\-based search to localize underrepresented subgroups, attribute each to baseline mismatch or censoring, and pinpoint the follow\-up intervals where censoring drives the variance inflation; the joint problem is solved by a parametric dynamic program nested inside a Rashomon ensemble of near\-optimal trees\. On synthetic benchmarks and a case study generalizing the National Job Training Partnership Act \(JTPA\) Study to U\.S\. JTPA\-eligible adults, the framework recovers underrepresented regions, correctly attributes each mechanism, and identifies the follow\-up windows driving temporal underrepresentation; refining the trial and target samples to reliably generalizable subgroups substantially reduces generalized effect\-estimate variance\.

## Covariate\-Adjusted Deep Causal Learning for Heterogeneous Panel Data Models

**Authors:** Guanhao Zhou; Yuefeng Han; Xiufan Yu

**ID:** 153186 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NBIkiyBee2>) | [PDF](<https://openreview.net/pdf?id=NBIkiyBee2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153186>)

This paper studies the task of estimating heterogeneous treatment effects in causal panel data models with covariate effects\. We propose a novel \*\*Co\*\*variate\-Adjusted \*\*DE\*\*ep C\*\*A\*\*usal \*\*L\*\*earning \(\*\*CoDEAL\*\*\) framework, that cohesively deal with the underlying heterogeneity and nonlinearity of both panel units and covariate effects\. CoDEAL integrates nonlinear covariate effect components \(parameterized by a feed\-forward neural network\) with nonlinear factor structures \(modeled by a multi\-output autoencoder\) to form a heterogeneous causal panel model\. The nonlinear covariate component flexibly captures complex covariate influences on outcomes, and the nonlinear factor decomposition enables CoDEAL to effectively capture both cross\-sectional and temporal dependencies inherent in the data panel\. This latent structural information is subsequently integrated into a customized matrix completion algorithm, thereby facilitating more accurate counterfactual imputation\. Moreover, the use of a multi\-output autoencoder explicitly accounts for heterogeneity across units and enhances the model interpretability of the latent factors\. We establish theoretical guarantees on the convergence of the estimated counterfactuals and demonstrate the compelling performance of the proposed method using extensive simulation studies and real\-world data applications\.

## Causal Discovery from Unseen Environments

**Authors:** Sophia Xiao; Bijan Mazaheri

**ID:** 151347 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bDH6pbl4W5>) | [PDF](<https://openreview.net/pdf?id=bDH6pbl4W5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151347>)

Existing causal discovery methods for interventional data typically follow one of two paradigms: they either require explicit environment labels and known intervention targets, or, in the absence of such metadata, they rely on computationally intensive procedures such as first inferring intervention targets or employing complex models to account for the latent variables of environment labels\. Surprisingly, we show that neither explicit environment labels nor auxiliary inference algorithms are strictly necessary: under certain conditions, the classical ICA\-LiNGAM algorithm consistently recovers the causal graph from simply pooled interventional and observational data\. We first demonstrate that in linear Gaussian structural equation models where interventions independently perturb the noise distributions across nodes, pooling produces exactly independent, non\-Gaussian sources, the appropriate setting for Independent Component Analysis \(ICA\)\. Because the assumption of strictly independent interventions can be overly restrictive, we extend our analysis to the practical setting of single\-node \(atomic\) interventions\. While pooling atomic interventions induces the necessary non\-Gaussianity, it also introduces source \*dependence\*, violating a core ICA assumption\. However, theoretical analysis establishes that this dependence decays as $\\mathcal\{O\}\(1/n^2\)$ with the number of variables $n$, whereas non\-Gaussianity decays only as $\\mathcal\{O\}\(1/n\)$\. This yields a regime of mild misspecification at moderate $n$ where sources are near\-independent yet sufficiently non\-Gaussian for ICA to succeed\. In synthetic experiments, where data is pooled across many different environments, our label\-free approach matches or exceeds label\-aware methods\. On real\-world data, our approach performs comparably to methods that explicitly require environment labels\. Ultimately, our work challenges the assumed necessity of environment labels and complex inference mechanisms in interventional causal discovery and suggests a re\-evaluation of the often\-overlooked classical ICA\-LiNGAM algorithm\.

## Causal Survival Forests with Negative Controls

**Authors:** Zijun Gao; Kyoungeui Hong; Leyi Ma; Qianli Wu; Zachary Izzo; Ruishan Liu

**ID:** 153856 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IDeaI3k5kC>) | [PDF](<https://openreview.net/pdf?id=IDeaI3k5kC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153856>)

We study heterogeneous treatment\-effect \(HTE\) estimation in observational survival studies commonly associated with both censored outcomes and unmeasured confounding\. We integrate causal survival forests \(CSF\) with negative controls \(NC\) from proximal causal inference and introduce Negative Control Causal Survival Forests \(NC\-CSF\), a flexible nonparametric HTE learner for survival analysis\.  In particular, our approach uses a loss that incorporates proxy variables and Neyman orthogonalization to train the random forest, thereby mitigating bias from unobserved confounding and gaining robustness to nuisance estimation\. Through extensive simulations spanning varying levels of confounding, proxy relevance, and censoring mechanisms, we demonstrate that NC\-CSF substantially reduces bias and estimation error \(root mean squared error\) relative to existing baselines\. We further demonstrate the practical utility of our method on real\-world clinical datasets, where it confirms several existing findings and also reveals new interpretable patterns of treatment\-effect heterogeneity\.  To facilitate practical use, we provide an end\-to\-end Python implementation of NC\-CSF that carefully handles implementation details such as nuisance estimation and clipping\.

## Localizing and Repairing Sparse\-Prompt Failure in SAM Decoders via Box\-to\-Point Counterfactual

**Authors:** Xiaobing Yu; Peijie Qiu; Jin Yang; Zhaoqi An; Weiwei Ma; Xiao Wu; XUANZHAO DONG; Wenhui Zhu; Xiwen Chen; Xiaoqi Zhao; Xiaofeng Liu

**ID:** 148596 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wYJKrfS22K>) | [PDF](<https://openreview.net/pdf?id=wYJKrfS22K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148596>)

Promptable segmentation foundation models such as SAM and its variants achieve strong performance with informative prompts, yet exhibit a striking prompt asymmetry where dense prompts like bounding boxes yield accurate segmentation, whereas sparse point prompts substantially degrade performance\. This performance gap is widely observed, yet its internal decoder mechanism remains underexplored\. In this work, we revisit the failure of point prompts from a causal perspective\. By adapting activation patching to SAM\-style decoders with a token\-aligned intervention scheme, we localize the earliest recoverable divergence to a single early operation, i\.e\., the first decoder image\-to\-token cross\-attention update, where prompt\-conditioned information first enters the image stream\. A sparse autoencoder further reveals that this mediation is concentrated in approximately 50 feature directions out of 4,096, and reverse corruption confirms that the identified layer is the entry point of a propagated image\-stream route rather than a locally sufficient state\. Guided by this localization, we propose the Causal Bottleneck Adapter \(CBA\), a lightweight residual module placed at the identified entry layer with the base model frozen\. Evaluated on 97,996 medical image\-target pairs across CT, MRI, ultrasound, and endoscopy, and validated across various SAM\-family models, CBA closes 0\.891 of the box\-to\-point gap with fewer than 9K trainable parameters, outperforming prior repair baselines up to 50× larger\.

## Counterfactual Rollout Replay: Forkable Environments as Free Process Rewards for Software Engineering Agents

**Authors:** Yuanhao li; Hongbo Wang; Xuhong Chen; Yiming Cao; Xunzhu Tang

**ID:** 151386 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b0yS7nonHU>) | [PDF](<https://openreview.net/pdf?id=b0yS7nonHU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151386>)

Reinforcement learning has rapidly become the dominant paradigm for training software engineering \(SWE\) agents on long\-horizon, multi\-turn tasks such as resolving real\-world GitHub issues\. Yet existing pipelines suffer from a fundamental credit\-assignment bottleneck: rewards arrive only at the end of trajectories that may span dozens of file edits, shell commands, and test invocations, leaving every intermediate decision indistinguishable from luck\. We observe that containerised SWE tasks provide a particularly useful form of environment forkability: a commit hash plus a container image specifies a real executable software state that can be restored cheaply and exactly, with auditable provenance and without a simulator\-to\-reality gap\. We exploit this property by introducing Counterfactual Rollout Replay \(CRR\), a training\-time procedure that re\-executes the environment from selected decision points with alternative actions and assigns each selected step an advantage equal to the sampled on\-policy versus counterfactual return differential\. CRR requires no learned process reward model, no human rubric annotation, and no oracle hindsight signal; it is free of auxiliary process labels and reward\-model training, while still incurring extra environment\-replay compute\. Applied to a 14B base model on SWE\-Gym and evaluated on SWE\-bench Verified and SWE\-rebench, CRR\-trained agents reach higher resolution rates with substantially fewer trajectories than outcome\-only GRPO and complement orthogonal advances such as PRM\-based scoring and trajectory search\.

## ML\-assisted Randomization Tests for A/B Experiments

**Authors:** Wenxuan Guo; JungHo Lee; Panos Toulis

**ID:** 150264 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jSH9fXOyOf>) | [PDF](<https://openreview.net/pdf?id=jSH9fXOyOf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150264>)

We study the problem of detecting treatment effects in randomized A/B experiments when the effects are potentially small and complex\. A common approach in such settings is to fit machine learning \(ML\) models of outcomes on observed features and then apply classical $t$\-tests to residualized outcomes\. We show that this approach can suffer substantial power loss under treatment effect heterogeneity\. We propose a randomization\-based test whose statistic measures the out\-of\-sample predictive gain from including the treatment variable in a flexible ML model\. Leveraging experimental randomization and sample splitting, our test is finite\-sample valid for arbitrary models and loss functions\. We establish power guarantees under heterogeneous treatment effects and demonstrate substantial empirical gains in simulations and large\-scale A/B experiments\.

## Causal Effects with Unobserved Unit Types in Interacting Human–AI Systems

**Authors:** William Overman; Mohamad Sadegh Shirani Faradonbeh; Mohsen Bayati

**ID:** 149288 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rPEiQxSWEc>) | [PDF](<https://openreview.net/pdf?id=rPEiQxSWEc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149288>)

We study experiments on interacting populations of humans and AI agents, where both unit types and the interaction network remain unobserved\. Although causal effects propagate throughout the system, the goal is to estimate effects on humans\. Examples include online platforms where human users interact alongside AI\-driven accounts\. We assume a human–AI prior that gives each unit a probability of being human\. While humans cannot be distinguished at the unit level, the prior allows us to compute the average human composition within large subpopulations\. We then model outcome dynamics through a causal message passing \(CMP\) framework and analyze sample\-mean outcomes across subpopulations\. We show that by constructing subpopulations that vary in expected human composition and treatment exposure, one can consistently recover human\-specific causal effects\. Our results characterize when distributional knowledge of population composition \(without observing unit types or the interaction network\) is sufficient for identification\. We validate the approach on a simulated human–AI platform driven by behaviorally differentiated LLM agents\. Together, these results provide a theoretical and practical framework for experimentation in emerging human–AI systems\.

## Order\-based structure learning for zero\-inflated count data under data heterogeneity

**Authors:** Fariha Taskin; Junsouk Choi; Hyunwoong Chang

**ID:** 151587 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZTJFimR2y9>) | [PDF](<https://openreview.net/pdf?id=ZTJFimR2y9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151587>)

We propose a structure learning method for directed acyclic graph \(DAG\) models of zero\-inflated multivariate count data\. Although causal structure learning with zero\-inflated Poisson models is identifiable, existing algorithms rely on local search over the DAG space, leading to poor scalability and a tendency to converge to suboptimal solutions\. To address these limitations, we develop a novel order\-based scoring framework that searches over variable orderings rather than directly over DAGs\. Building on this framework, we further extend the method to multiple heterogeneous datasets by identifying a shared variable ordering while allowing each dataset to have its own edge set\. We implement a stochastic hill climbing algorithm with a random\-to\-random \(R2R\) proposal operator to efficiently explore the ordering space\. Simulation studies show that the proposed method outperforms competing approaches and improves graph estimation accuracy under increasing heterogeneity when a shared causal ordering is preserved\. We apply the method to single\-nucleus RNA sequencing data from a major depressive disorder study\.

## Act, Validate, Adapt: Closing the Causal Discovery\-Control Loop

**Authors:** Taqiya Ehsan; Shuren Xia; Jorge Ortiz

**ID:** 153013 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OdP0tR9M9Z>) | [PDF](<https://openreview.net/pdf?id=OdP0tR9M9Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153013>)

Every control action on a physical system is already a do\-operator intervention, yet causal discovery and control are typically treated as separate stages\. This separation leaves deployed controllers unable to test whether the causal graph they rely on remains valid under changing operating conditions\. We present \\textsc\{PolicyGRID\}, a closed\-loop framework that uses actuator interventions to validate candidate causal edges, fits a structural causal model over the validated graph, and reuses that graph for both policy optimization and latent\-regime monitoring\. In a multi\-actuator physical simulation with latent operating regimes \(building energy management\), interventional graph validation reduces closed\-loop energy use by 21\\% at a standard comfort target relative to an otherwise identical observation\-only graph, while improving four\-way latent\-context identification from 61\.2\\% to 80\.8\\%\. A targeted ablation shows that the gains originate in graph pruning\. Validation removes 16 of 47 candidate edges; with coefficient training held fixed, the validated graph reduces closed\-loop energy relative to the unvalidated candidate set, while refitting coefficients on the same graph does not\. On a live physical testbed, the same pipeline runs without code changes, performs 21 physical interventions, discovers 16 edges, and produces a target\-responsive control policy where the observation\-only baseline is insensitive to the comfort\-energy target\. These results show that physical controllers can use their own actions to validate causal structure and improve downstream control under latent regime shifts\.

## Specialist Mediators: Causal Localization of Dense Fine\-Tuning

**Authors:** Amir Asiaee

**ID:** 148508 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xK0zRemqmT>) | [PDF](<https://openreview.net/pdf?id=xK0zRemqmT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148508>)

Dense fine\-tuning can turn a base language model into a domain specialist, but task accuracy alone does not reveal which internal computations mediate the new behavior\. We introduce specialist mediators : internal mechanisms through which a dense specialist's lift over its base causally flows\. We identify these mediators by patching specialist activations into the base model and asking which patches recover in\-domain performance while minimally perturbing off\-domain behavior\. This separates three questions that are often conflated: where the specialist behavior is localized, how much of it can be recovered by activation patching, and whether a sparse trainable update can implement the same behavior\. We formalize these links with exact recovery results, a first\-order recovery approximation, and a bound showing when patching recovery can transfer to localized training\. In synthetic transformers and structural causal models with planted mediators, patching recovers the true causal mechanisms even when activation\-magnitude baselines are misled by non\-causal distractors\. In Pythia\-410M specialists for math \(GSM8K\), multitask knowledge \(MMLU\), and biomedical QA \(PubMedQA\), single\-patch localization ranks first on every domain and seed by area under the recovery curve, with small mechanism budgets recovering much of the patchable specialist gap\. A localized\-LoRA stress test then shows why the separation matters: patching\-localized adapters improve negative log\-likelihood when the selected attention mechanisms carry the specialist gap, but fail on GSM8K where MLP blocks carry substantial lift\. Thus specialist localization is useful both as a route to sparse adaptation and as a diagnostic for when sparse adaptation fails\.

## Counterfactual Predictive State Representations: The Intrinsic Dimension of Partial\-Information Games

**Authors:** Manoj Saravanan; Rohit Kumar Salla; Shrikar Reddy Kota

**ID:** 148259 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zBs8IFbJ3b>) | [PDF](<https://openreview.net/pdf?id=zBs8IFbJ3b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148259>)

We study finite\-horizon two\-player zero\-sum perfect\-recall partial\-information games and ask for the minimal finite\-dimensional state sufficient to answer all rooted observation\-measurable unilateral continuation queries\. For each player $i$ and information set $I$, we consider the span $\\mathcal L\_i\(I\)$ of feasible counterfactual beliefs and the effective local query space $\\mathcal E\_i\(I\)$ generated by rooted continuation queries restricted to $\\mathcal L\_i\(I\)$\. We prove that its dimension $d\_i\(I\)$ is simultaneously the rank of the local counterfactual query operator, the minimum core\-query basis size, the minimum exact local realization dimension, and the dimension of the canonical quotient $\\mathcal L\_i\(I\)/\\mathcal N\_i\(I\)$, yielding reduced counterfactual predictive\-state representations, unique up to similarity, with exact first\-return update operators\. Aggregating the local ranks defines the deviation\-conditioned predictive\-state dimensions $d\_t^i$, $d\_t$, $d\_\\star$, and $D\_\\star$\. We then prove that local rooted payoff\-query control transfers to global exploitability, and under local design richness and bounded one\-step parameter norms obtain a rollout\-based upper bound in these minimal coordinates\. We complement this with a minimax lower bound showing that $\\Omega\(d/\\gamma^2\)$ local rollouts are necessary even when the peak DCPSD equals $d$, and with an exponential separation theorem exhibiting games with $d\_\\star=m$ but observable continuation\-trace complexity $2^m$\. Finally, we show that DCPSD recovers finite\-rank predictive\-state, observable\-equivalence, and linearly parameterized continuation\-law models as special cases\.

## Proximal Difference\-in\-Differences for Long\-Term Causal Learning under Confounding and Outcome Drift

**Authors:** Sihyung Park; Shu Yang; Mingyang Shan; Wenyu Ye; Ilya Lipkovich

**ID:** 153371 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LrHGwL3QXG>) | [PDF](<https://openreview.net/pdf?id=LrHGwL3QXG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153371>)

Estimating long\-term treatment effects is essential for scientific and industrial evaluation, yet the limited follow\-up duration of randomized controlled trials \(RCTs\) poses a significant challenge\. Even the growing use of open\-label extensions fails to resolve this issue, as such designs systematically censor long\-term control trajectories\. While supplementing RCTs with real\-world evidence is a common strategy, existing methods often rely on restrictive exchangeability assumptions that fail under latent confounding\. We propose a novel proximal framework to integrate long\-term real\-world evidence into RCTs with open\-label extensions\. Our approach successfully identifies long\-term effects even in the presence of time\-varying latent confounding effects and inter\-study outcome drift\. We provide a doubly robust locally efficient estimator that provides further resilience to model misspecification\. Empirical results demonstrate that our framework maintains validity in complex data\-generating processes that compromise standard approaches\.

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

## Beyond IPS: Reliable Counterfactual Evaluation in Multi\-Stage Ad Systems without Logged Propensities

**Authors:** Mohsen Malmir; Mohamed A Radwan; houssam nassif; Murat Bayir

**ID:** 151796 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xwazdb6LB8>) | [PDF](<https://openreview.net/pdf?id=Xwazdb6LB8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151796>)

Offline evaluation of ad ranking policies in multi stage delivery systems is fundamentally challenging because action propensities are often unavailable, limiting inverse propensity scoring \(IPS\) estimators\. While reward model based estimators such as Direct Method \(DM\) do not rely on propensity estimates, they can suffer from bias when candidate policies induce impression distributions that differ from the logging mixture\. In this work, we formalize DM based counterfactual replay under mixture logging and propose a mixture targeted shift correction based on density ratio weighting through domain classifier\. We further derive a per policy value estimation error and characterize an asymptotic error ceiling governed by the cold start mass\. Experiments on both ads delivery simulator and one week of production traffic from a large scale industrial CTR ranking system demonstrate that the proposed mixture weighted reward model consistently outperforms its unweighted counterpart under distribution shift\.

## Budgeted Multi\-Source Counterfactual Annotation for Off\-Policy Evaluation

**Authors:** Biao Xiang; Ali Eshragh; Yuexing Li; Kai Wang

**ID:** 155643 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=446GKdY1L2>) | [PDF](<https://openreview.net/pdf?id=446GKdY1L2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155643>)

Off\-policy evaluation \(OPE\) estimates the value of a target policy from logged data, but limited behavior\-policy coverage can force high\-variance reweighting or reward\-model extrapolation\. Counterfactual annotations can add evidence about unobserved actions, yet practical sources, including domain experts and LLMs, may be costly, biased, or noisy\. We study budgeted acquisition of such annotations for contextual\-bandit OPE\. Given source\-specific costs and error profiles, we formulate an integer allocation problem over context\-action pairs and annotation sources to minimize the component of estimator variance that depends on the annotation plan\. We characterize when annotations are valuable through a first\-annotation threshold and local annotation\-value regimes\. For the coupled multi\-source problem, we develop a majorization\-minimization algorithm with dynamic\-programming subroutines that monotonically improves the objective\. Experiments in synthetic clinical and LLM\-annotated education bandits show that our proposed allocation method reduces the optimized variance component by $20\.58$% and $10\.77$%, respectively, relative to no\-annotation baseline\.

## Multi\-Objective Causal Bandits: Minimal Intervention Space and Policy\-Level Learning

**Authors:** Muhammad Qasim Elahi; Mahsa Ghasemi; Murat Kocaoglu

**ID:** 150149 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kKN0pnu3u0>) | [PDF](<https://openreview.net/pdf?id=kKN0pnu3u0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150149>)

Many decision\-making problems involve multiple objectives, where actions affect several performance metrics, fairness criteria, or safety constraints\. We study multi\-objective causal bandits with multiple reward nodes, where actions correspond to interventions on subsets of variables in a causal graph and performance is evaluated through Pareto optimality\. Existing approaches to multi\-objective bandits typically define optimality at the level of individual actions, using pairwise dominance or scalarization\. In contrast, randomized decision rules induce convex combinations of action\-level reward vectors, so the relevant achievable set is the convex hull of these rewards\. Thus, an intervention may be suboptimal even if no single intervention dominates it, because it can be dominated by a randomized policy over other interventions\. We formalize this policy\-level phenomenon and show that it has consequences for both causal action\-space reduction and online learning\. First, we provide a necessary\-and\-sufficient graphical characterization of possibly Pareto\-optimal minimal intervention sets \(PPOMISs\)\. Our characterization yields a minimal, sound, and complete candidate intervention family from the graph alone, correcting prior formulations that may include intervention sets that are never Pareto\-optimal under any compatible structural causal model\. Second, over this reduced intervention space, we design an online UCB\-style algorithm that eliminates actions using dominance tests against convex combinations of other actions, and prove logarithmic gap\-dependent Pareto regret\. Finally, we study constrained multi\-objective causal bandits, where feasibility and optimality may be realized only with randomized policies, and develop an online UCB\-style constrained bandit algorithm with sublinear regret and constraint\-violation guarantees\.

## PAIR\-CI: Calibrated Conditional Independence Testing for Causal Discovery with Incomplete Data

**Authors:** Thomas S\. Robinson; Ranjit Lall

**ID:** 155370 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=699aXIZ0uv>) | [PDF](<https://openreview.net/pdf?id=699aXIZ0uv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155370>)

The standard constraint\-based paradigm for causal discovery with incomplete data\-\-\-impute first, test second\-\-\-is frequently miscalibrated: any consistent conditional independence \(CI\) test rejects a true null with probability approaching 1 when imputation error induces spurious conditional dependence\. We introduce \*PAIR\-CI\*, a nonparametric CI test that restores calibration by integrating multiple imputation directly into the inferential procedure via a paired permutation design\. PAIR\-CI compares cross\-validated models that include and exclude the candidate variable while receiving the same imputed conditioning set, forcing imputation error to cancel in their loss difference rather than contaminate the test statistic\. A provably consistent variance estimator jointly accounts for uncertainty arising from cross\-validation and multiple imputation\-\-\-to our knowledge, the first formal unification of these two inferential frameworks\. In simulations, existing imputation\-based CI tests exhibit false positive rates of 28\-\-45\\% when data are missing not at random \(MNAR\), whereas PAIR\-CI averages below the nominal 5\\% level across data\-generating processes and missingness mechanisms\. These gains are largest in nonlinear settings and grow with causal graph size: when integrated into the PC algorithm, PAIR\-CI reduces structural Hamming distance by 8\\% on 10\-variable nonlinear graphs, 15\\% on 30\-variable equivalents, and up to 44\\% on the 56\-variable HAILFINDER network, with stable performance in all settings\.

