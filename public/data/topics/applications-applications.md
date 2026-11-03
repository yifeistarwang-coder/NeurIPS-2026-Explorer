# Applications / Applications

应用 / 综合应用

19 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Verigrad: Verification\-Driven Multi\-Agent GPU Kernel Generation for High\-Order MLIP Derivatives

**Authors:** Yao Liu; Yuanchang Zhou; Hongtao Xu; Mingzhen Li

**ID:** 152112 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VRYRAXIrum>) | [PDF](<https://openreview.net/pdf?id=VRYRAXIrum>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152112>)

High\-order derivative kernels in machine learning interatomic potentials \(MLIPs\) are a dominant cost in scientific ML, yet current autonomous GPU\-kernel agents do not reliably target this workload\. They generate kernels against local tensor\-level references, whereas MLIP derivative workloads span forward, backward, and higher\-order automatic differentiation \(AD\) phases with cross\-phase saved tensors and reconstruction rules\. We introduce \\textsc\{Verigrad\}, a verification\-driven multi\-agent harness that makes high\-order derivative generation a first\-class kernel\-generation workload\. \\textsc\{Verigrad\} first exposes derivative semantics through \\texttt\{DerivativeTask\} and a derivative\-aware IR, and then decomposes the workload into verifiable kernel contracts\. An execution\-based derivative verifier validates the generated artifacts; the same verifier then gates hardware\-guided refinement, so optimized kernels replace earlier candidates only when the derivative checks continue to pass\. We integrate the generated kernels into MatRIS training and inference, where \\textsc\{Verigrad\} attains 1\.33\-\-1\.55$\\times$ end\-to\-end speedup over PyTorch eager across energy\-only, energy\-\-force, and full\-derivative inference and training workloads\.

## Z\-AXIS: From Deterministic Ground to Agentic Depth for Enterprise Evaluation

**Authors:** Zifan Song; Mianzhi Chang; Ziyang Liao; haiyan xu; Yutong Liu; Cairong Zhao

**ID:** 150216 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jsW1UycJqY>) | [PDF](<https://openreview.net/pdf?id=jsW1UycJqY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150216>)

Agentic systems powered by large language models have advanced rapidly yet current architectures treat information acquisition as a homogeneous process, issuing broad searches, accumulating heterogeneous evidence, and deferring verification to post\-hoc reconciliation\. This neglect of acquisition\-mode structure leaves factual grounding and epistemic reliability as emergent rather than engineered properties\. In this paper, we formalize the Deterministic\-Agentic \(D/A\) Separation Principle, which partitions the task\-relevant information space into programmable \($\\mathcal\{D\}$\) and emergent \($\\mathcal\{A\}$\) zones, establishing $\\mathcal\{D\}$ as both epistemic anchor and investigative compass for $\\mathcal\{A\}$\-directed exploration\. We instantiate this principle as Z\-AXIS, a three\-phase cascade that front\-loads deterministic grounding, deploys hierarchical wave agents for macro\-to\-micro deep research, and synthesizes evidence through tension\-aware cross\-dimensional analysis\. Key mechanisms include authority\-calibrated evidence fusion, D\-conditioned coverage tracking, and temporal awareness for longitudinal evaluation\. Extensive evaluation across multiple industries demonstrates that Z\-AXIS achieves superior factual accuracy and epistemic reliability compared to existing deep research systems, with architecture\-determined reliability remaining stable across a wide range of backbone scales, confirming that structured governance, not model scale, governs epistemic reliability\.

## Boost Reasoning Evolution via Responsive Rollout Difficulty Manipulation

**Authors:** Ziheng Li; Zexu Sun; Jinman Zhao; Erxue Min; Yongcheng Zeng; Hui Wu; Hengyi Cai; Shuaiqiang Wang; Xu Chen; Zhihong Deng; Dawei Yin

**ID:** 154872 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AG7LEXWKt1>) | [PDF](<https://openreview.net/pdf?id=AG7LEXWKt1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154872>)

Reinforcement learning with verifiable rewards \(RLVR\) has advanced the reasoning capabilities of large language models \(LLMs\)\. However, existing RLVR methods often suffer from exploration inefficiency due to mismatches between problem difficulty and model capability: overly difficult problems hinder reasoning path discovery, while overly simple problems offer little learning signal\. To address this, we first formalize the effect of problem difficulty by quantifying the relationship between loss descent magnitude and rollout accuracy\. Building on this analysis, we propose SEELE, a supervision\-aided RLVR framework that dynamically adjusts problem difficulty to lie within the high\-performance region\. SEELE augments each training sample by appending a hint \(part of a full solution\) for difficulty reduction\. Unlike previous hint\-based approaches, SEELE deliberately computes the hint length for each individual problem to achieve an optimal difficulty\. The optimal hint length is determined via multi\-round rollout sampling, where an item response theory model fits accuracy–hint pairs from previous rounds to predict the next\-round hint\. This instance\-level, real\-time difficulty adjustment aligns problem difficulty with the evolving model capability, thereby improving exploration efficiency\. Experiments show that SEELE outperforms Group Relative Policy Optimization \(GRPO\) and Supervised Fine\-tuning \(SFT\) by \+10\.0 and \+8\.4 points, respectively, and exceeds the best prior supervision\-aided approach by \+3\.8 points on average across six math reasoning benchmarks\.

## More Than Meets the Eye? Uncovering the Reasoning\-Planning Disconnect in Training Vision\-Language Driving Models

**Authors:** Xurui Song; Shuo Huai; Jingjing Jiang; Jiayi Kong; Jun Luo

**ID:** 155441 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5a6bX3yV0u>) | [PDF](<https://openreview.net/pdf?id=5a6bX3yV0u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155441>)

Vision\-Language Model \(VLM\) driving agents promise explainable end\-to\-end autonomy by first producing natural\-language reasoning and then predicting trajectory planning\. However, whether planning is \*\*causally\*\* driven by this reasoning remains a critical but unverified assumption\. To investigate this, we build DriveMind, a large\-scale driving Visual Question Answering corpus with plan\-aligned Chain\-of\-Thought \(CoT\), automatically generated from nuPlan\. Our data generation process converts sensors and annotations into structured inputs and, crucially, separates priors from to\-be\-reasoned signals, enabling clean information ablations\. Using DriveMind, we train representative VLM agents with Supervised Fine\-Tuning and Group Relative Policy Optimization and evaluate them with nuPlan’s metrics\. Our results, unfortunately, indicate a consistent \*\*causal disconnect\*\* in reasoning\-planning: removing ego/navigation priors causes large drops in planning scores, whereas removing CoT produces only minor changes\. Attention analysis further shows that planning primarily focuses on priors rather than the CoT\. Based on this evidence, we propose the Reasoning\-Planning Decoupling Hypothesis, positing that the training\-yielded reasoning is an ancillary byproduct rather than a causal mediator\. To enable efficient diagnosis, we introduce a novel, training\-free probe that measures an agent's reliance on priors by evaluating its planning robustness against minor input perturbations\. In summary, we provide the community with a new dataset and a diagnostic tool to evaluate the \*\*causal fidelity\*\* of future models\.

## EditFlowSR: Revisable Expression Generation for Symbolic Regression

**Authors:** Yuhong Xu; Ziyi Yang; Jinghui Zhong

**ID:** 152491 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SiqvujQlIz>) | [PDF](<https://openreview.net/pdf?id=SiqvujQlIz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152491>)

Symbolic regression \(SR\) aims to discover compact, interpretable mathematical expressions from data\.  This goal inherently requires iterative refinement rather than one\-shot construction\.  Autoregressive methods lack the ability to perform targeted corrections, so whenever structural flaws appear, the remainder of the sequence must be discarded and regenerated\.   Meanwhile, search\-based methods rely on costly and indirect replacement through enumeration\. We propose EditFlowSR, which reframes SR as iterative editing of expression trees through insertions, deletions, and substitutions\. To reconcile fitting accuracy with algebraic simplicity, we introduce dual trajectory supervision\. One trajectory teaches the model to construct expressions from data, while the other teaches it to algebraically simplify them, and both are unified under the shared editing framework\. At inference time, EditFlowSR starts from a randomly initialized expression and progressively refines it through iterative editing, simultaneously constructing valid structure and removing redundancy\. Across the standard SRBench, EditFlowSR achieves first\-rank Pareto dominance in predictive accuracy, expression tree size, and time complexity\. These results establish edit\-based generation as a principled and effective paradigm for end\-to\-end symbolic regression\. Code is available at \\url\{https://anonymous\.4open\.science/r/EditFlowSR\_NIPS2026\}\.

## Federated Logic Gate Networks via Boolean Feature Selection

**Authors:** Felix Kunze; Antonio Di Maio

**ID:** 151627 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z9KHpOrNHS>) | [PDF](<https://openreview.net/pdf?id=Z9KHpOrNHS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151627>)

Federating a LGN is challenging because each gate is parameterised by a distribution over 16 Boolean operations, so averaging parameters across clients does not correspond to averaging the underlying functions\. Under non\-IID data, such parameter\-space merging collapses to near\-chance accuracy\. Boolean Feature Selection \(BFS\) avoids this issue by selecting discrete Boolean functions rather than averaging parameters\.  We propose Federated Boolean Feature Selection \(FBFS\), which extends BFS to LGNs by treating hardened last\-layer gates as candidate Boolean features and aggregating per\-class, per\-gate sufficient statistics across clients\. Clients share only firing aggregates computed on a held\-out split, allowing the server to reconstruct discriminative scores, defined as the gap between a gate's mean firing for a class and for the remaining classes, without accessing raw data\. This procedure is equivalent to centralized BFS on the union of client data\. We further introduce a diversity\-regularized variant of FBFS that encourages complementary feature selection across gates\.  Empirically, FBFS is the only data\-free method we evaluate whose performance remains stable under extreme non\-IID settings, outperforming parameter\-space merging and other baselines by large margins\. It maintains high accuracy across a wide range of heterogeneity levels and scales to large architectures\. In addition, FBFS enables efficient deployment: the resulting models compile to hardware\-efficient logic representations with substantially fewer post\-synthesis cells than ensemble\-based alternatives while remaining bit\-exact with their software counterparts\.

## Agentic Geometry Problem Solving via Human\-like Parallel Bidirectional Reasoning

**Authors:** Xiaokai Zhang; Ruiqing Xia; Liang Chen; Zhenhai Sun; Yuchang Yang; Tuo Leng

**ID:** 148892 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uPyHEd0byJ>) | [PDF](<https://openreview.net/pdf?id=uPyHEd0byJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148892>)

Formal Geometric Problem Solving requires every step of reasoning within a strict logical framework, and has been a core challenge in artificial intelligence\. This paper presents a unified neuro\-symbolic reasoning framework, named Reflect Agent Verified Solve \(RAVS\), which deeply integrates large language models, agent architectures, and formal symbolic solvers\. The core innovations of RAVS lie in two parts\. First, we propose a role\-separated neuro\-symbolic collaboration mechanism: the LLM serves as a planner responsible for high\-level semantic understanding and path reflection, while the symbolic solver acts as an executor responsible for formal verification and rigorous theorem application\. The neural reasoning capability of the LLM and the logical completeness of the symbolic system complement each other, fundamentally eliminating the risk of hallucinations\. Second, we construct the first bidirectional symbolic reasoning engine that fully unifies forward and backward solving\. For each theorem, we define two reversible operations: forward application and backward decomposition\. We further provide a theoretical analysis that bidirectional reasoning achieves an exponential complexity advantage over unidirectional reasoning\. Together, these two mechanisms form an iterative closed loop between neural planning and symbolic execution\. On the FormalGeo7K benchmark, RAVS achieves a 95\.8% solving accuracy, substantially outperforming existing state\-of\-the\-art methods, without requiring any additional problem\-specific annotated data\.

## Agentic AI Scientists Are Not Built For Autonomous Scientific Discovery

**Authors:** Harshit Bisht; Vinay Kumar; Kevin Maik Jablonka; Mausam; N M Anoop Krishnan

**ID:** 140033 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gwehHE2dU8>) | [PDF](<https://openreview.net/pdf?id=gwehHE2dU8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140033>)

A growing body of work pursues AI scientists capable of end\-to\-end autonomous scientific discovery\. This position paper argues that although they already function as co\-scientists, $\\textbf\{agentic AI scientists are not built for autonomous scientific discovery\}$\. We identify the following challenges in building and deploying autonomous AI scientists: \(1\) Problem selection is influenced by the McNamara fallacy; \(2\) Agents are built on large language models \(LLMs\) whose training corpora omit tacit procedural and failure knowledge of laboratory practice; \(3\) Preference optimisation during post\-training compresses output diversity toward consensus; and \(4\) Most scientific benchmarks measure single\-turn prediction accuracy and lack feedback from physical experiments back to the computational model\. These challenges are not just questions of scale and scaffolding; they require revisiting fundamental design choices\. To build truly autonomous AI scientists, we recommend the use of scientific simulations as verifiers for training, the design of persistent world models that represent the shifting objectives governing real investigations, the establishment of a centralized preregistration repository for all AI\-generated hypotheses, and application driven by scientific need rather than tool affordance\.

## AutoScientists: Self\-Organizing Agent Teams for Long\-Running Scientific Experimentation

**Authors:** Shanghua Gao; Ada Fang; Marinka Zitnik

**ID:** 151734 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YTZM5qShYw>) | [PDF](<https://openreview.net/pdf?id=YTZM5qShYw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151734>)

Scientific research proceeds through iterative cycles of hypothesis generation, experiment design, execution, and revision, often requiring researchers to explore multiple competing directions as evidence accumulates and priorities shift\. LLM agents can automate parts of this process, but existing agents either concentrate reasoning within a single research thread or coordinate through a central planner with fixed objectives\. As a result, they struggle to sustain parallel exploration across research directions or reorganize as promising and unproductive directions emerge over time\. We introduce AutoScientists, a decentralized team of AI agents for long\-running computational scientific experimentation\. Rather than following decisions from a central orchestrator, agents independently interpret a shared experimental state, self\-organize into teams around research directions, critique and filter proposals with a discussion phase before committing experimental compute, and exchange both successful and failed findings across teams to avoid redundant exploration\. Under matched experimental budgets, AutoScientists outperforms prior agentic systems across biomedical machine learning, language\-model training optimization, and protein fitness prediction\. On BioML\-Bench, spanning biomedical imaging, protein engineering, single\-cell omics, and drug discovery, AutoScientists achieves a mean leaderboard percentile of 74\.4% across 24 tasks, improving over the strongest prior biomedical agent by \+8\.33%\. On GPT training optimization, AutoScientists reaches a target validation bits\-per\-byte 1\.9x faster than autoresearch and continues discovering improvements from a stronger starting champion where the single\-agent approach finds none \(7 vs\. 0 accepted improvements\)\. On ProteinGym fitness prediction, AutoScientists discovers a method for ACE2\-spike binding that improves over current state\-of\-the\-art model by \+12\.5% Spearman correlation\. Applied without modification to all 217 ProteinGym assays, the same method improves over the prior state of the art by \+6\.5% in Spearman correlation\. Code: https://anonymous\.4open\.science/r/autoscientists\_anonymize\-D10C

## StepCAD: Mesh\-to\-CAD Code Generation via LLM Policy and Geometry\-Guided Search

**Authors:** Ghadi Nehme; Faez Ahmed

**ID:** 149665 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oLvC2AljNY>) | [PDF](<https://openreview.net/pdf?id=oLvC2AljNY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149665>)

Recovering executable CAD programs from 3D meshes is fundamentally challenging due to the long\-horizon, compositional nature of CAD construction and the need for precise estimation of both discrete operations and continuous parameters\. Existing learning\-based methods primarily treat mesh\-to\-CAD reconstruction as one\-shot sequence prediction and are largely limited to simple sketch\-extrude pipelines, restricting operation diversity and preventing the use of intermediate geometric feedback, with no mechanism for refining generated programs\. To address this limitation, we introduce StepCAD, a generative optimization approach that performs step\-by\-step, geometry\-conditioned program synthesis followed by explicit refinement in program space\. Given an input mesh, StepCAD first predicts construction sequences using a state\-conditioned CAD policy conditioned on both target and intermediate geometry, then refines them through IoU\-guided tree search over local program edits\. To address the limited operation diversity in prior work, we further introduce ARCADE\-1\.5M, a large\-scale dataset of 1\.5M executable CAD programs with diverse operations, long\-horizon sequences up to 150\+ operations, and 12\.5M intermediate state\-action transitions\. Experiments on multiple CAD reconstruction benchmarks show that StepCAD achieves state\-of\-the\-art reconstruction accuracy, validity, and robustness, with up to 87\.2\\% relative IoU improvement over the best prior method and increasingly larger gains as shape complexity increases\.

## TopoScope: A Graph\-Scoped LLM Agent for Printed Circuit Board Schematic Design

**Authors:** Jiale Guo; Shiji Tong; Weihao Li; Yu Wu; Boxian Lin; Mengji Shi

**ID:** 150854 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=et1Tk9D1jg>) | [PDF](<https://openreview.net/pdf?id=et1Tk9D1jg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150854>)

Printed circuit boards \(PCBs\) are the hardware foundation of modern electronic systems\. However, automating PCB schematic design remains difficult\. A valid schematic must respect real\-IC pin\-level constraints and cross\-component topological relations, neither of which is captured by generic simulation, local rule checks, or direct LLM generation\. To address this challenge, we present TopoScope, a training\-free LLM agent that uses the schematic graph not only as the final output, but also to guide generation and verification at runtime\. TopoScope couples two mechanisms: Topology\-Guided Context Scoping, which computes a scoped view for each component\-level wiring decision, and Pattern\-Based Rule Verification, which expresses datasheet\-derived electrical constraints as graph patterns and uses them as in\-loop feedback\. We also introduce a 20\-design benchmark spanning three complexity tiers and six application domains, with functional assertions evaluated on the generated schematic graph and calibrated against expert judgments\. Across seven recent LLMs, TopoScope improves functional correctness, reduces invalid graph references, and enables more reliable generation of medium and hard multi\-IC schematics compared with knowledge\-provided baselines\.

## $\\texttt\{RNAGenScape\}$: property\-guided, optimized generation of mRNA sequences with manifold Langevin dynamics

**Authors:** Danqi Liao; Chen Liu; Xingzhi Sun; Dié Tang; Haochen Wang; Scott E Youlten; Srikar Gopinath; Haejeong Lee; Ethan C Strayer; Antonio J Giraldez; Smita Krishnaswamy

**ID:** 151375 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b3kPBsyO9t>) | [PDF](<https://openreview.net/pdf?id=b3kPBsyO9t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151375>)

Generating property\-optimized mRNA sequences is central to applications such as vaccine design and protein replacement therapy, but remains challenging due to limited data, complex sequence\-function relationships, and the narrow space of biologically viable sequences\. Generative methods that drift away from the data manifold can yield sequences that fail to fold, translate poorly, or are otherwise nonfunctional\. We present RNAGenScape, a property\-guided manifold Langevin dynamics framework for mRNA sequence generation that operates directly on a learned manifold of real data\. By performing iterative local optimization constrained to this manifold, RNAGenScape preserves biological viability, accesses reliable guidance, and avoids excursions into nonfunctional regions of the ambient sequence space\. The framework integrates three components: \(1\) an autoencoder jointly trained with a property predictor to learn a property\-organized latent manifold, \(2\) a denoising autoencoder that projects updates back onto the manifold, and \(3\) a property\-guided Langevin dynamics procedure that performs optimization along the manifold\. Across three real\-world mRNA datasets spanning two orders of magnitude in size, RNAGenScape increases median property gain by up to 148% and success rate by up to 30% while ensuring biological viability of generated sequences, and achieves competitive inference efficiency relative to existing generative approaches\.

## Q\-Probe: Scaling Image Quality Assessment to High Resolution via Context\-Aware Agentic Probing

**Authors:** Xiang Li; Xueheng Li; Yu Wang; Xuanhua He; Zhangchi Hu; Chengjun Xie

**ID:** 150587 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h4QXlRy2S0>) | [PDF](<https://openreview.net/pdf?id=h4QXlRy2S0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150587>)

Reinforcement Learning \(RL\) has empowered Multimodal Large Language Models \(MLLMs\) to achieve superior human preference alignment in Image Quality Assessment \(IQA\)\. However, existing RL\-based IQA models typically rely on coarse\-grained global views, failing to capture subtle local degradations in high\-resolution scenarios\. While emerging "Thinking with Images" paradigms enable multi\-scale visual perception via zoom\-in mechanisms, their direct adaptation to IQA induces spurious "cropping\-implies\-degradation'' biases and misinterprets natural depth\-of\-field as artifacts\. To address these challenges, we propose Q\-Probe, the first agentic IQA framework designed to scale IQA to high resolution via context\-aware probing\. First, we construct Vista\-Bench, a pioneering benchmark tailored for fine\-grained local degradation analysis in high\-resolution IQA settings\. Furthermore, we propose a three\-stage training paradigm that progressively aligns the model with human preferences, while simultaneously eliminating causal bias through a novel context\-aware cropping strategy\. Extensive experiments demonstrate that Q\-Probe achieves state\-of\-the\-art performance in high\-resolution settings while maintaining superior efficacy across resolution scales\.

## VVTRec: Radio Interferometric Reconstruction through Visual and Textual Modality Enrichment

**Authors:** Kai Cheng; Ruoqi Wang; Qiong Luo

**ID:** 152911 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PU6YZTeoHa>) | [PDF](<https://openreview.net/pdf?id=PU6YZTeoHa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152911>)

Radio astronomy is an indispensable discipline for studying distant celestial objects\. Measurements of wave signals from radio telescopes, called visibility, need to be transformed into images for astronomical observations\. These dirty images blend information from real sources and artifacts\. Therefore, astronomers usually perform reconstruction before imaging to obtain cleaner images\. Existing methods consider only a single modality of sparse visibility data, resulting in images with remaining artifacts and insufficient modeling of correlation\. We propose VVTRec, a multimodal radio interferometric data reconstruction method, to enhance visibility information extraction and improve image\-domain output quality\. Since the information in sparse visibility is inherently limited, we transform it into image\-form and text\-form features\. Therefore, we can leverage vision\-language models to process the two derived modalities, providing knowledge banks as a supplement for reconstruction\. The sparse visibility is accordingly utilized as the query to perform the integration and selection of multimodal external knowledge\. Consequently, VVTRec improves the structural integrity and accuracy of reconstructed images by enriching spatial and semantic information\. Our experiments demonstrate that VVTRec effectively enhances imaging results by exploiting multimodal information without introducing excessive computational overhead\.

## NeuralBES: A Differentiable, Control\-Aware Emulator for Scalable Building Energy Modeling

**Authors:** Ting\-Yu Dai; Takuya Kurihana; Wing Yee Au; YUNG WONG

**ID:** 154743 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BK43ekBKEC>) | [PDF](<https://openreview.net/pdf?id=BK43ekBKEC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154743>)

Demand\-side flexibility, i\.e\., forecasting, shifting, and curtailing residential energy loads, depends on thermal models trusted across millions of heterogeneous buildings\. Existing tools force a hard tradeoff: high\-fidelity physics simulators such as EnergyPlus are accurate but sequential and require per\-building calibration, while purely data\-driven sequence models scale but abandon the physical structure that makes their predictions trustworthy\.  We introduce NeuralBES \(Building Energy Simulation\), a differentiable emulator that resolves this tradeoff by parameterizing a resistance\-\-capacitance \(RC\) based thermal model with a shared neural encoder: static building metadata such as floor area, vintage, and HVAC type is mapped to physically bounded capacitances, conductances, and equipment coefficients, which become the coefficients of a scalar linear recurrence solved via a log\-space parallel scan, and a predictor\-\-corrector loop closes the thermostat\-\-temperature nonlinearity while preserving full\-horizon gradient flow\. Trained on the ResStock dataset across three climate zones, NeuralBES handles heterogeneous building archetypes, vintages, and climate zones within a single trained encoder, while black\-box baselines produce statistically plausible but physically inconsistent trajectories\. On the annual full\-year rollout, NeuralBES is the only data\-conditioned model that is simultaneously physics\-valid and accurate to within 4 MAPE points of the strongest raw\-error baseline, while operating at roughly an order of magnitude fewer parameters than the transformer and recurrent baselines; among physics\-valid baselines at parameter parity it more than halves the MAPE of the grey\-box RC alternative\.

## Mapping Uncharted Symmetries: Machine Discovery in Combinatorics

**Authors:** Eugenio Cainelli; Lorenzo Luccioli; Alessandro Iraci; Michele D&amp;amp;\#x27;Adderio; Giovanni Paolini

**ID:** 154886 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AA9eN8iG05>) | [PDF](<https://openreview.net/pdf?id=AA9eN8iG05>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154886>)

Inspired by long\-standing open problems in algebraic combinatorics, we show that modern machine learning can meaningfully contribute to verifiable mathematical discoveries\. In particular, we focus on the construction of simple mathematical functions under exact distributional constraints, a setting we formalize as Simple Learning Under Rigid Proportions \(SLURP\)\. We tackle this problem by introducing two methods: MapSeek\-Functional, which models the desired function alternating pseudo\-labeling and supervised training steps; and MapSeek\-Symbolic, designed to directly produce symbolic formulas\. We successfully apply both methods to a research problem in algebraic combinatorics, discovering a new combinatorial interpretation of the $q,t$\-Narayana polynomials arising from representation theory\. To our knowledge, this is the first such interpretation based on noncrossing partitions\. Using one discovered statistic, we find a combinatorial proof of the symmetry of these polynomials in a previously unsolved case\. To streamline verification and reproducibility, we release all code, including a formalization of the mathematical discoveries of this paper in Lean 4\.

## AutoExpert: Automating 3D LiDAR Annotation from Expert\-Crafted Guidelines

**Authors:** Yechi Ma; Wei Hua; Shu Kong

**ID:** 139399 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T24nnfn2Jn>) | [PDF](<https://openreview.net/pdf?id=T24nnfn2Jn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139399>)

The contemporary paradigm of scaling data annotation, crucial for developing machine learning solutions, is to hire ordinary human annotators and instruct them with expert\-crafted guidelines to label data\. This paradigm is laborious, tedious, and costly, motivating us to study an open problem, auto\-annotation with expert\-crafted guidelines \(dubbed AutoExpert\)\. We develop benchmarks by redesigning the evaluation protocol and re\-annotating data with nuScenes and PandaSet, two 3D detection datasets for autonomous driving research that provide expert\-crafted annotation guidelines\. Their guidelines define 18 and 25 object classes, respectively, using nuanced language descriptions and a few visual examples\. Following the guidelines that require using 3D cuboids to label LiDAR data, AutoExpert requires algorithms to learn on few\-shot labeled images and texts to perform the task of 3D detection on LiDAR data\. Apparently, the challenges of AutoExpert lie in the data\-modality and task discrepancy\. Nevertheless, public foundation models \(FMs\) serve as promising tools to tackle these challenges\. To address AutoExpert, we adopt a conceptually simple pipeline consisting of three components: \(1\) 2D object detection and segmentation in RGB images, \(2\) lifting 2D detections into 3D using known sensor poses, and \(3\) 3D cuboids generation for the 2D detections\. Within this pipeline, we enhance and evaluate a variety of methods such as open\-vocabulary detectors, few\-shot detectors, and self\-supervised learned detectors\. We also develop novel techniques, leading to refined components that boost 3D detection mAP from 12\.1 to 25\.4 on the AutoExpert\-nuScenes benchmark\.

## Generative OOD\-regularized Model\-based Policy Optimization

**Authors:** Aysin Tumay; Jiahe Huang; Elise Jortberg; Rose Yu

**ID:** 155741 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3KDoYUU2CU>) | [PDF](<https://openreview.net/pdf?id=3KDoYUU2CU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155741>)

We study sequential decision\-making with offline reinforcement learning \(RL\)\. Traditional offline RL policies may result in out\-of\-distribution \(OOD\) actions when training relies only on sparse offline representations\. To ensure safe offline policies in a sparse state\-action space, we explore how density estimation models can be integrated into model\-based RL methods to avoid the OOD regions\. Generative models are capable of explicitly modeling the density in sparse state\-action spaces\. Building on this, we introduce \*\*G\*\*enerative \*\*O\*\*OD\-\*\*r\*\*egularized \*\*M\*\*odel\-based \*\*P\*\*olicy \*\*O\*\*ptimization \*\*\(GORMPO\)\*\*, a density\-regularized offline RL algorithm that uses generative density modeling to restrict policy updates to high\-density areas of the dataset\. We present theoretical results on GORMPO's performance\. Furthermore, we examine whether better OOD detection corresponds to better model\-based offline policies\.   We compare \(1\) the OOD detection capabilities of various density estimators and \(2\) their performance within the GORMPO framework on a real\-world medical dataset and sparse offline RL datasets\. We theoretically guarantee GORMPO's performance under mild assumptions\. Empirically, GORMPO outperforms state\-of\-the\-art baselines by 17\\% on a real\-world medical dataset and enhances the base model on the offline RL datasets\. Our empirical findings show that better OOD detection generally results in improved policies in environments with stable dynamics, while conservative penalties with poor density estimation are favored when dynamics are uncertain\.

## Coupled Integral PINN for Discontinuity

**Authors:** Yeping Wang; Shihao Yang

**ID:** 153205 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N3iBY93EZ6>) | [PDF](<https://openreview.net/pdf?id=N3iBY93EZ6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153205>)

Physics\-Informed Neural Networks \(PINNs\) solve forward PDEs by minimizing residual losses from the governing equations with initial and boundary conditions, but they often struggle with discontinuities such as shocks\. In contrast, finite volume methods \(FVM\) handle discontinuities by enforcing integral conservation, which admits weak solutions\. Motivated by this, we propose a \\emph\{Coupled Integral PINN \(CI\-PINN\)\} that augments a standard PINN with an auxiliary network for integral potentials and coupled integral constraints\. This improves robustness near shocks while avoiding meshing and the numerical flux integration/reconstruction used in classical schemes\. We validate CI\-PINN on forward benchmarks including Burgers, Buckley\-\-Leverett, the Euler system, and the Shallow\-Water equations\.

