# Social Aspects / Trustworthy Machine Learning

社会影响与可信人工智能 / 可信机器学习

162 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## CodeMimicry: Exploiting Safety Generalization Lag in Large Language Models via Structured Code Completion

**Authors:** Liang Zhen; Wentao Chen; Hai Huang

**ID:** 148231 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zQ1LdvPXe9>) | [PDF](<https://openreview.net/pdf?id=zQ1LdvPXe9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148231>)

Large language models have achieved remarkable capabilities across diverse domains, yet their safety alignment remains vulnerable to jailbreak attacks\. In this work, we identify a previously underexplored failure mode—safety generalization lag—where alignment trained predominantly on natural language fails to transfer to the code domain\. We show that this lag induces a code\-completion blind spot, allowing malicious intent embedded within syntactically valid code to evade safety mechanisms\. To exploit this vulnerability, we propose CodeMimicry, a fully automated black\-box jailbreak framework that generates structured, object\-oriented code prompts to induce harmful outputs via code completion\. Experiments on 8 state\-of\-the\-art commercial LLMs demonstrate that CodeMimicry achieves a 96\.25\\% attack success rate with 1\.51 queries on average, significantly outperforming both template\-based and optimization\-based baselines\. Beyond empirical performance, we provide a mechanistic analysis of code\-based jailbreaks through latent space representations, including projection onto refusal\-related directions and activation steering\. This analysis offers an explanation of how CodeMimicry bypasses safety mechanisms in code\-related domains\. Our findings reveal a weakness in current safety alignment and highlight the need for robust alignments in structured domains such as code\.

## Backdoor Attacks Rerouted: BatchNorm as a Sink for Adversarial Signals

**Authors:** Md Abdul Kadir; Tuan Tran Anh; Daniel Sonntag

**ID:** 155957 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1YqAFIeJti>) | [PDF](<https://openreview.net/pdf?id=1YqAFIeJti>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155957>)

_Abstract unavailable from the accessible public sources._

## Agreement without Coverage: Conditional Agreement is Non\-Identifying in Variable\-Support Structured Extraction

**Authors:** Yanru Zhou; Dandan Song

**ID:** 152893 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PcPlRvDFiC>) | [PDF](<https://openreview.net/pdf?id=PcPlRvDFiC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152893>)

_Abstract unavailable from the accessible public sources._

## Kernel Token Contradiction: a Fast and Principled Approach for LLM Claim Uncertainty Quantification

**Authors:** Jérémie Dentan; Alexi Canesse; Mahammed El Sharkawy; Sonia Vanier

**ID:** 152240 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UXmZnhvdFA>) | [PDF](<https://openreview.net/pdf?id=UXmZnhvdFA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152240>)

Claim\-level Uncertainty Quantification \(UQ\) aims to mitigate the lack of reliability of Large Language Models \(LLMs\) by evaluating the factuality of each claim in their outputs\. We introduce Kernel Token Contradiction \(KTC\), a lightweight approach to compute claim\-level UQ under realistic white\-box conditions\. KTC represents the candidate tokens involved in LLM generation as a positive semi\-definite kernel that integrates both the LLM’s conditional distribution and a token contradiction score\. We then use the Von Neumann entropy to quantify the uncertainty of this kernel\. To estimate token contradiction, we develop a new approach based on frequency statistics from the Wikipedia corpus\. Although CPU\-only, our approach achieves over an 8\.2× speedup compared to state\-of\-the\-art GPU\-accelerated methods based on cross\-encoders, and over a 65× speedup compared to CPU\-only methods with comparable performance\. Our evaluation spans two benchmarks across four European languages and 16 different models\. KTC not only matches the average performance of existing methods but also outperforms them in high\-precision regimes\. This combination of computational efficiency and accuracy makes real\-time monitoring of LLM outputs practical in production\.

## Is Decentralized LLM Agent RL Robust to Heterogeneity? An Asymmetric Tale

**Authors:** Canyu Chen; Kangyu Zhu; Zhaorun Chen; Zhanhui Zhou; Shizhe Diao; Yiping Lu; Tian Li; Manling Li; Dawn Song

**ID:** 152469 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SsF2kYJfYC>) | [PDF](<https://openreview.net/pdf?id=SsF2kYJfYC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152469>)

Training AI agents powered by Large Language Models \(LLMs\) typically requires centralized access to user data, raising privacy and scalability concerns\. We explore FedAgent, a decentralized reinforcement learning paradigm that collaboratively trains LLM agents across distributed clients without sharing local data\. The central reliability question is: Is FedAgent effective under uniform client distribution, and more importantly, is it robust to client heterogeneity? For the former, we provide the first empirical evidence that FedAgent matches Centralized Agent Training and outperforms Local Agent Training\. For the latter, we first formalize Agent Heterogeneity at two structurally distinct levels: task\-level \(what clients ask the agent to do\) and environment\-level \(the dynamics in which the agent acts\), anchored on the Input\-Dynamics Asymmetry of task\-augmented MDPs, referring to the architectural fact that tasks enter the policy through its input channel, while environments do not\. Then, we theoretically establish an Asymmetric Robustness Mechanism: FedAgent is robust to task\-level heterogeneity but non\-robust to environment\-level heterogeneity\. We further identify three sufficient conditions under which FedAgent recovers robustness despite environment\-level heterogeneity, and illustrate four possible training\-curve patterns\. On real\-world agent benchmarks WebShop and ALFWorld, we empirically verify that FedAgent remains robust under extreme task\-level heterogeneities and traces a stable\-degrade\-collapse spectrum under environment\-level heterogeneities\.

## DIAL: A Bounded\-Monotone Adapter with Closed\-Form Residual $L\_\\infty$ Bounds for Scalar\-Controlled Refusal Modulation

**Authors:** Nguyen Vu Nguyen

**ID:** 150583 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h6qz0TIbIa>) | [PDF](<https://openreview.net/pdf?id=h6qz0TIbIa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150583>)

We introduce DIAL \(Directional Intervention, Asymptotically Limited\), a parameter\-efficient adapter that adds a bounded, monotone, scalar\-controlled residual $\\delta\(s,c\) = \\sigma\(g\) \\odot \\tanh\(c/T\) \\odot \\tanh\(Dz\)$ with $z = D^\\top \\phi\(s\)$ to a base language model's hidden state\. The architectural form yields a closed\-form upper bound $\\lVert \\delta \\rVert\_\\infty \\le \\sigma\(g\_\{\\max\}\)$ on the residual $L\_\\infty$ norm, computable from model weights alone\.  Across 5 base models \(3\.8B to 70B parameters, 4 architecture families; one checkpoint per family, with 5\-seed csweep variance at Llama\-3\.1\-8B\), the residual saturates at the predicted bound with mean ratio $1\.000 \\pm 0\.001$ \(worst\-case family deviation 0\.2 percentage points\)\. On Llama\-3\.1\-8B under GPT\-4o judge \($n=100$ per bench, zero content\-filter blocks\), DIAL exceeds a FiLM baseline trained with the same multi\-$c$ objective on every benchmark and judge\. Semantic vs strict judge: HarmBench DIAL \+0\.52 / \+0\.55 vs FiLM \+0\.44 / \+0\.39; AdvBench DIAL \+0\.63 / \+0\.66 vs FiLM \+0\.46 / \+0\.50; XSTest DIAL \+0\.33 / \+0\.25 vs FiLM \+0\.26 / \+0\.22; both judges agree on the ranking\.  Outside training range, DIAL's residual saturates at $\\sigma\(g\_\{\\max\}\)$ while FiLM's grows unboundedly: at $c = 10^4$, FiLM's residual $L\_\\infty$ norm is 534 times larger than DIAL's\. The bound holds across all control values, not only trained ones; concrete deployment scenarios \(configuration error, multi\-tenant policy ceilings, adversarial composition\) are where this distinction matters in practice\.  The bounded\-monotone form produces analogous saturation behavior on two continuous\-control RL environments \(HC\-Vel $n=35$, Ant\-Goal $n=30$\) under matched oracle\-$c$; the prior fails when $c$ must be inferred online \(meta\-RL\)\. Ablations confirm both the bound and the saturating temperature are necessary; a frozen\-gate variant retains the bound at lower controllability magnitude\. We release adapter train reports and canonical bench generations, algebraic derivations \(with a SymPy reproducibility script\), the full GPT\-4o judge cache \(semantic and strict\), and a human\-labeled validation set \($n=50$, Cohen's kappa = 0\.895\)\. Full adapter checkpoints are deferred to camera\-ready release\.

## The Scaling Paradox of Tool\-Calling LLM Agents Under Realistic MCP Faults

**Authors:** Antonio Ken Iannillo; Joshua S Owotogbe; Roberto Natella; Francesco Avallone; Kristina Kudryavtseva; Indika Kumara

**ID:** 151564 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZfMdoPBhn0>) | [PDF](<https://openreview.net/pdf?id=ZfMdoPBhn0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151564>)

LLM agents increasingly rely on external tools exposed via the Model Context Protocol \(MCP\), yet current benchmarks assume tools respond correctly and on time, leaving agent resilience to realistic tool failures untested\.   We introduce MCP\-Injector, a drop\-in, protocol\-aware fault\-injection middleware that interposes on the MCP tool\-call path with controlled persistence \(permanent, transient, intermittent\) and seedable schedules\.   Its fault model is empirically calibrated by mining 57,240 issue and pull\-request threads across 1,774 open\-source MCP repositories, yielding a distribution over six failure modes grounded in observed ecosystem incidents\.   In a 1,350\-cell experiment crossing two backbone sizes \(20B, 120B\), three agent stacks \(custom multi\-round plan\-and\-execute, OpenAI Agents SDK, LangChain\), and three fault injection conditions, we find that calibrated MCP faults cause severe quality degradation \(60\\% drop in task completion score, $p &lt; 10^\{\-56\}$\) and reveal a scaling paradox: the larger model achieves higher fault\-free scores but suffers lower completion rates under faults, driven by longer reasoning chains that amplify fault exposure\.   Framework\-level error handling shapes resilience more than model scale, with stack choice producing significant interaction effects\.   These results demonstrate that capability benchmarks alone can mask operational brittleness, motivating protocol\-aware fault injection as a complementary evaluation dimension for tool\-calling agents\.

## MemPoison: Uncovering Persistent Memory Threats and Structural Blind Spots in LLM Agents

**Authors:** Jifeng Gao; Kang Xia; Yi Zhang; Xiaobin Hong; Mingkai Lin; Xingshen Wei; Wenzhong Li; Sanglu Lu

**ID:** 139557 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IgiZ5D2F8T>) | [PDF](<https://openreview.net/pdf?id=IgiZ5D2F8T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139557>)

Persistent external memory enhances agent continuity but introduces persistent security vulnerabilities: adversarial content can be injected via standard interaction channels, retained across turns, and later distort downstream behavior\. To address this challenge, we propose \*\*MemPoison\*\*, a comprehensive benchmark and analysis framework featuring 1227 hand\-validated cases across four attack types, three injection channels, and three representative memory substrates, evaluated on seven open\-weight and three closed\-weight model families\. We introduce a three\-tier taxonomy: \(\*\*L1\*\*\) direct single\-record corruption, \(\*\*L2\*\*\) compositional multi\-record corruption and \(\*\*L3\*\*\) context\-triggered dormant corruption\. Our evaluations reveal a distinct defense frontier: while baseline write\-time defenses, such as consistency checks, substantially suppress direct L1 attacks, they fail to reliably suppress L2 and L3 attacks\.  Through \*\*mechanistic influence decomposition \(MID\)\*\*, we demonstrate structural blind spots in write\-time defenses, which admit seemingly benign records that later become harmful through joint retrieval composition or trigger\-conditioned activation\. Our findings advocate for shifting from static filtering to adaptive, context\-sensitive memory defense strategies\. Code, benchmark artifacts, and evaluation scripts are publicly released

## The Adversarial Gait: Detecting Visual Adversarial Attacks against Vision\-Language Models via Self\-Targeted Gradient Characterization

**Authors:** Mauricio Byrd Victorica; Ezzeldin Shereen; György Dán

**ID:** 149384 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qRPR0xpiu8>) | [PDF](<https://openreview.net/pdf?id=qRPR0xpiu8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149384>)

Visual adversarial examples are a well\-known vulnerability of deep learning \(DL\) systems\. The emergence of vision\-language models \(VLMs\) further expands the attack surface through multimodal interactions\. Despite extensive research on adversarial defenses over the past decade, existing works on VLM robustness often overlook adaptive white\-box attacks, where the adversary has full access to both the model and the defense mechanism\.   We show that recent defenses can be effectively bypassed under such adaptive settings and propose \\method, an adaptive test\-time detection method that leverages gradient information induced by a self\-targeted attack maximizing the likelihood of the VLM’s generated output\. Our approach consistently outperforms existing defenses across multiple victim VLMs, attack formulations, and benchmark datasets\. Our code is open\-source and available online\.

## Beyond Marginal Coverage: Efficient Localized Conformal Prediction via Residual Rank Calibration

**Authors:** Xiangshi Li; Wenqing He

**ID:** 153265 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MYBb7WHPyQ>) | [PDF](<https://openreview.net/pdf?id=MYBb7WHPyQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153265>)

Conformal prediction provides finite\-sample marginal coverage guarantees under exchangeability, but marginal validity alone does not ensure that prediction intervals adapt to local structure in the conditional distribution\. Existing adaptive methods such as conformalized quantile regression \(CQR\) and conformal histogram regression \(CHR\) improve conditional coverage by incorporating estimated quantiles or conditional densities into the conformity score, but doing so requires direct estimation of the conditional distribution of response $Y$ given covariates $X$, which can be statistically and computationally demanding\. We propose RLR\-CHR, a residual\-based local rank conformal histogram regression method that sidesteps full conditional distribution estimation by decoupling location and scale effects via a learned noise proxy and constructing histogram\-based conformity scores on the standardized residuals\. Local calibration is then performed through rank comparisons rather than weighted conformal quantiles, yielding a procedure that is both localized and computationally efficient\. We establish finite\-sample marginal coverage for RLR\-CHR under exchangeability and asymptotic conditional coverage under local stability of the residual score distribution\. We further prove that RLR\-CHR is asymptotically equivalent to its weighted\-localization counterpart RBC\-CHR under suitable regularity conditions, providing a precise theoretical justification for the reduction in per\-query computational cost without sacrificing asymptotic accuracy\. Experiments on synthetic and real datasets demonstrate that RLR\-CHR consistently improves worst\-slab coverage and produces more compact prediction intervals than existing conformal approaches\.

## Risks Create a Jagged Frontier of LLM Productivity Gains Across Computer Occupations

**Authors:** Deepika Chawla; Gagandeep Singh; Elham k buxton; Meicen Sun; Lav Varshney; Jeremy Riel; Craig De Voto

**ID:** 140000 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x1uym9PA9I>) | [PDF](<https://openreview.net/pdf?id=x1uym9PA9I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140000>)

_Abstract unavailable from the accessible public sources._

## Hierarchical Conformal Classification

**Authors:** Floris den Hengst; Inès Blin; Majid Mohammadi; Syed I Shah; Taraneh Younesian

**ID:** 150172 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k9Vms7prG3>) | [PDF](<https://openreview.net/pdf?id=k9Vms7prG3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150172>)

_Abstract unavailable from the accessible public sources._

## Beyond Marginal Coverage: Efficient Localized Conformal Prediction via Residual Rank Calibration

**Authors:** Xiangshi Li; Wenqing He

**ID:** 153265\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153265

[Paper](<https://openreview.net/forum?id=MYBb7WHPyQ>) | [PDF](<https://openreview.net/pdf?id=MYBb7WHPyQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153265>)

Conformal prediction provides finite\-sample marginal coverage guarantees under exchangeability, but marginal validity alone does not ensure that prediction intervals adapt to local structure in the conditional distribution\. Existing adaptive methods such as conformalized quantile regression \(CQR\) and conformal histogram regression \(CHR\) improve conditional coverage by incorporating estimated quantiles or conditional densities into the conformity score, but doing so requires direct estimation of the conditional distribution of response $Y$ given covariates $X$, which can be statistically and computationally demanding\. We propose RLR\-CHR, a residual\-based local rank conformal histogram regression method that sidesteps full conditional distribution estimation by decoupling location and scale effects via a learned noise proxy and constructing histogram\-based conformity scores on the standardized residuals\. Local calibration is then performed through rank comparisons rather than weighted conformal quantiles, yielding a procedure that is both localized and computationally efficient\. We establish finite\-sample marginal coverage for RLR\-CHR under exchangeability and asymptotic conditional coverage under local stability of the residual score distribution\. We further prove that RLR\-CHR is asymptotically equivalent to its weighted\-localization counterpart RBC\-CHR under suitable regularity conditions, providing a precise theoretical justification for the reduction in per\-query computational cost without sacrificing asymptotic accuracy\. Experiments on synthetic and real datasets demonstrate that RLR\-CHR consistently improves worst\-slab coverage and produces more compact prediction intervals than existing conformal approaches\.

## Tcell: Mitigating Harmful Fine\-tuning for Large Language Models via  Gradient Alignment

**Authors:** Tiansheng Huang; Virat Vishnu Shejwalkar; Oscar Chang; Ling Liu

**ID:** 155716 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3Rc9uH2uQ1>) | [PDF](<https://openreview.net/pdf?id=3Rc9uH2uQ1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155716>)

Harmful fine\-tuning attack becomes a concerning safety risk for mainstream fine\-tuning\-as\-a\-service providers, as attackers can submit harmful data to the API to compromise the safety alignment of the large language models\. In this paper, we first explore an intuitive gradient mixing solution, and derive a key property ensuring the success of defense \-\- \\emph\{taking a fine\-tuning update that has higher cosine similarity with the safety gradient can mitigate harmful fine\-tuning\.\} Motivated by this key property, we design an alignment\-stage defense, dubbed Tcell\. The core contribution of Tcell is a regularizer that align the harmful gradient and the safety gradient during safety alignment, which ensures the harmful fine\-tuning update exhibits high cosine similarity with the safety gradient, achieving \\emph\{gradient alignment\}\. The benefit of gradient alignment is supported by  i\) empirical and theoretical interpretation and ii\) comparison to alternative design without gradient alignment\. Code is available at https://anonymous\.4open\.science/r/Tcell\-1C15/\.

## Multi\-bit LLM Watermarking with Certified Semantic Distortion

**Authors:** Chenxi Gu; Si Chen; John Grundy; Xiaoning Du

**ID:** 148648 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wB0DVBkk59>) | [PDF](<https://openreview.net/pdf?id=wB0DVBkk59>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148648>)

Watermarking has emerged as a fundamental mechanism for tracing the provenance of Large Language Model \(LLM\) outputs\. While multi\-bit watermarks are highly desirable for embedding rich metadata, they suffer from an inherent trade\-off between statistical detectability and text quality degradation\. Crucially, existing multi\-bit schemes lack theoretical quality guarantees, leaving them susceptible to unbounded semantic distortion\. To address this, we introduce CSD, the first multi\-bit watermarking framework with certified semantic distortion bounds\. In CSD, we derive a closed\-form upper bound on the Kullback\-Leibler \(KL\) divergence, mathematically guaranteeing strict limits on semantic distortion at every generation step\. Furthermore, rather than relying on static payloads, CSD employs a dynamic payload to maximize statistical detectability\. Extensive empirical evaluations across multiple datasets demonstrate that CSD achieves robust detectability while maintaining provably safe text generation\.

## Hallucination as Commitment Failure: Larger LLMs Misfire Despite Knowing the Answer

**Authors:** Jewon Yeom; Jaewon Sok; Heejun Kim; Seonghyeon Park; Jeongjae Park; Taesup Kim

**ID:** 154310 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EcJCjzBU18>) | [PDF](<https://openreview.net/pdf?id=EcJCjzBU18>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154310>)

Hallucination is often viewed as a direct consequence of missing knowledge: a model answers incorrectly when the correct answer is absent from its generation\-time distribution, and correctly when it is present\. We test this assumption by introducing a semantic notion of answer availability that aggregates token\-level variants expressing the same answer concept, and asks whether the correct concept is already available at the moment the model commits to an answer\. Across Qwen and Llama models from 0\.8B to 72B in both Instruct and Base variants, 16\-47\\% of Instruct hallucinations occur with substantial probability mass already on the correct concept, and the rate rises monotonically with scale\. Comparing such failures against correct generations with matched semantic support, the distinguishing factor is not whether the correct concept is represented, but how its probability is distributed: correct generations concentrate mass on a single surface form, hallucinations disperse it across alternatives\. The same sharpening asymmetry extends across multi\-token generation and is detectable in pre\-generation hidden states\. Together, these results identify a single mechanism: instruction tuning sharpens answer commitment with scale, making helpfulness and confident hallucination two consequences of the same underlying disposition\.

## Understanding and Mitigating Under\-Confidence in GNNs from the Final Layer

**Authors:** Jincheng Huang; Jie Xu; Ping Hu; Xiaoshuang Shi; Lei Feng; Xiaofeng Zhu

**ID:** 148756 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vGT1YmVaWI>) | [PDF](<https://openreview.net/pdf?id=vGT1YmVaWI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148756>)

_Abstract unavailable from the accessible public sources._

## Integrating Local and Global Entropy for Uncertainty Quantification in LLMs

**Authors:** Johanne Medina; Tianyi Zhou; Keivin Isufaj; Aristides Gionis; Sanjay Chawla

**ID:** 150760 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fbOMEeETpt>) | [PDF](<https://openreview.net/pdf?id=fbOMEeETpt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150760>)

_Abstract unavailable from the accessible public sources._

## Rank\-Constrained Adaptation for Reliable Real\-World Performance

**Authors:** Abinitha Gourabathina; Hyewon Jeong; Teya Bergamaschi; Marzyeh Ghassemi; Collin Stultz

**ID:** 150710 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g5EV8VwQd4>) | [PDF](<https://openreview.net/pdf?id=g5EV8VwQd4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150710>)

Deep learning models trained to optimize average accuracy often exhibit systematic failures on particular subpopulations\. In real\-world settings like healthcare, the subpopulations most affected by such disparities are frequently unlabeled, partially observed, or not known in advance\. Existing group\-robust methods typically assume prior knowledge of the relevant subgroups, using group annotations for training, validation, or model selection\. We propose Misclassification Aware Rank\-Limited Adaptation \(MARLA\), a parameter\-efficient method for improving worst group performance without explicit subgroup annotations\. MARLA leverages an ERM\-trained model by calculating the model's misclassification probability scores on a held\-out adaptation set to identify a low\-dimensional subspace where errors concentrate\. We then learn a rank\-restricted additive correction to the classifier logits within that subspace\. Across seven real\-world datasets, we evaluate group robustness under three settings: no knowledge of subgroup relevance, partial knowledge of subgroup relevance, and full knowledge of subgroup relevance\. MARLA improves worst\-group performance while remaining fast, parameter\-efficient, and practical to tune\.

## Neural Spectral Capacity: An Architectural Quantity from Network Specification Alone

**Authors:** CHENYU ZHU; Ruoyu Zhao; Zhichao Lu

**ID:** 155319 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6VtpAVw5S8>) | [PDF](<https://openreview.net/pdf?id=6VtpAVw5S8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155319>)

Modern Transformer design and compression both reduce to allocating capacity under a budget\. The standard scalars for these decisions, \#Params and \#FLOPs, capture size and compute but not architectural structure—two architectures with identical parameter budgets but different depth\-width, head, or FFN allocations receive identical scores yet behave differently\. We propose Neural Spectral Capacity \(NSC\), a closed\-form scalar grounded in the singular\-value spectrum of each weight matrix\. Under standard random initialization, the Marchenko–Pastur law renders NSC computable from the architectural specification alone, with no model instantiation, data, or gradients\. Its layer\-wise additive structure admits NSC\-DP, an exact dynamic\-programming solver returning the architecture globally maximizing NSC under resource constraints in seconds on a CPU—a guarantee that black\-box search over existing training\-free proxies cannot provide\. Empirically, NSC outperforms \#Params, \#FLOPs, and representative training\-free proxies in ranking across seven Transformer and CNN families \(on FlexiBERT, τ=0\.505 on pairs differing in \#Params by &lt;10%, where \#Params collapses to 0\.082\); NSC\-DP discovers a Transformer\-XL architecture on WikiText\-103 that beats the human\-designed baseline in 2 seconds; and prunes LLaMA\-7B to the best 5\.7B model across eight commonsense reasoning tasks without any calibration data, ∼5900× faster than the strongest training\-free proxy baseline\.

## The Type Theory of Stationary MDPs: Rare Events and Uncertainty Quantification

**Authors:** Imon Banerjee; Sayak Chakrabarty; Ramkrishna Jyoti Samanta; Riddhiman Bhattacharya

**ID:** 151895 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=X92FFAYPKL>) | [PDF](<https://openreview.net/pdf?id=X92FFAYPKL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151895>)

The method of types, pioneered by Csiszar \(1998\), uses combinatorial arguments to approximate the probabilities of empirical measures and has become a standard tool for deriving error rates in hypothesis testing, source coding, and related information\-theoretic problems\. Although the technique is widely used across machine learning, computer science, and econometrics, rigorous type\-theoretic guarantees for stationary Markov decision processes and reinforcement learning remain limited\. This paper addresses that gap by developing a method\-of\-types framework for the empirical pair measure of the state\-\-action process of a stationary Markov decision process\. We establish finite\-sample type bounds for the state\-\-action process and characterize the associated entropy cost through the conditional Kullback\-\-Leibler divergence relative to the true pair kernel\. These results yield large deviation principles for learned MDP dynamics and variational rate functions for plug\-in value\- and Q\-function estimators in offline reinforcement learning\. We further develop finite\-sample uncertainty\-quantification and hypothesis\-testing guarantees based on KL uncertainty sets, including applications to pessimistic value and Q\-function estimation under model misspecification\. Finally, we apply the same framework to universal source coding and obtain explicit coding error exponents for controlled Markov trajectories\. Together, these results provide a unified type\-theoretic approach to rare\-event analysis, uncertainty quantification, offline reinforcement learning, and information\-theoretic coding for finite controlled Markov systems\.

## Systematic Scaling Analysis of Jailbreak Attacks in Large Language Models

**Authors:** Xiangwen Wang; Ananth Balashankar; Varun Chandrasekaran

**ID:** 149552 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pIEAacruEN>) | [PDF](<https://openreview.net/pdf?id=pIEAacruEN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149552>)

_Abstract unavailable from the accessible public sources._

## Argus: A Cross\-Regime Benchmark for the Transferability of Uncertainty Quantification in Computer\-Use Agents

**Authors:** DIVAKE KUMAR; Sina Tayebati; Devashri Naik; Amanda Rios; Nilesh Ahuja; Omesh Tickoo; Ranganath Krishnan; Amit Trivedi

**ID:** 139443 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PcafO7KeeW>) | [PDF](<https://openreview.net/pdf?id=PcafO7KeeW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139443>)

Computer\-use agents turn visual predictions into executable GUI clicks, so uncertainty estimates must support rejection, calibration, miss\-severity ranking, and spatial safety regions\. Existing post\-hoc uncertainty quantification \(UQ\) evidence is fragmented across isolated model and dataset pairs, leaving unclear whether UQ rankings remain stable when the agent, benchmark, or observable interface changes\. We present a cross\-regime benchmark for post\-hoc UQ in single\-step executable GUI grounding, covering a 27\-method, seven\-family open\-weight matrix over 4 GUI\-grounding VLM agents and 4 datasets, plus an 8\-method API\-compatible closed\-source matrix across 3 frontier vendors where logits, hidden states, and attention maps are unavailable\. The main finding is selective transfer: UQ rankings are stable across datasets for a fixed model, but degrade across model classes and observable interfaces\. Hidden\-state and density methods form the most stable open\-weight family, while CoCoA\-1MCA, Focus, sampling\-based scores, and verbalised self\-assessment win in specific regimes\. Ranking transfer is strongest within a fixed model across datasets, reaching Spearman $\\rho=0\.969$ and averaging $\\rho=0\.705$ over 120 open\-weight pairs\. In contrast, open\-weight to closed\-source transfer is the strongest break: cross\-tier Spearman $\\rho$ averages only $\+0\.08$ over 12 vendor x dataset pairs on the shared 8\-method intersection, indicating that UQ recommendations do not survive removal of internal model signals\. Model\-class transitions further reshape UQ preferences: attention, verbalised, and VLM\-native families lose AUROC on every dataset, while density methods remain stable; a scale\-only baseline shows that logit\-family degradation on ScreenSpot\-Pro is partly confounded by scale rather than grounding fine\-tuning alone\. Finally, conformal click regions show that score\-level discrimination is not enough for deployment: locally weighted disks can shrink radii by 40\-60% when the plug\-in UQ is calibrated, but coverage can degrade under calibration\-test or interface mismatch\. We release per\-item records, calibration/test splits, UQ scores, and analysis scripts as a reproducible basis for regime\-aware UQ selection in GUI agents\.

## The Labeling Problem in Hallucination Detection Benchmarks: An Empirical Evaluation

**Authors:** Jorma Valjakka; Juhani Kivimäki; Juha Mylläri; Jukka K Nurminen

**ID:** 138957 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tzJJksX8Y9>) | [PDF](<https://openreview.net/pdf?id=tzJJksX8Y9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138957>)

_Abstract unavailable from the accessible public sources._

## Provable Selective Auto\-labeling with Reliability Guarantees

**Authors:** Huipeng Huang; Wenbo Liao; Huajun Xi; Hao Zeng; Mengchen Zhao; Hongxin Wei

**ID:** 154352 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EEhIsOCdWt>) | [PDF](<https://openreview.net/pdf?id=EEhIsOCdWt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154352>)

Auto\-labeling has emerged as a popular, cost\-effective alternative to manual annotation\. However, its performance is often highly inconsistent across different tasks, underscoring the importance of selective strategies\. Despite this, existing heuristic methods for selective auto\-labeling still rely heavily on model confidence scores and offer no reliable guarantee on the trustworthiness of the selected examples\. To address this, we propose $\\textbf\{Conformal Labeling\}$, a novel method that selects a subset of auto\-generated labels with a provably controlled false labeling rate \(FLR\)\. Our key idea is to formulate selective auto\-labeling as a multiple\-hypothesis testing problem, where each hypothesis indicates whether to accept the auto\-generated label for an instance\. Specifically, we construct a conformal $p$\-value for each auto\-generated label using a small calibration set, and then employ the Benjamini–Hochberg \(BH\) procedure with a novel correction factor to construct the subset with guaranteed FLR control\. Theoretically, we show that our method achieves finite\-sample FLR control and asymptotically optimal statistical power among all $p$\-value thresholding rules\. Extensive experiments on classification and open\-ended generation tasks validate the effectiveness of our method, achieving high statistical power while strictly controlling the FLR\.

## Counterfactual Online Conformal Prediction Under Adaptive Logging

**Authors:** Xinyu Qiao; yichen lin; Kaihong Ji; xue wang; Tao Yao

**ID:** 150109 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kcz4dJYi4k>) | [PDF](<https://openreview.net/pdf?id=kcz4dJYi4k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150109>)

Online conformal prediction can fail when predictions shape actions and actions determine which outcomes enter calibration\. Standard adaptive methods may retain marginal coverage while systematically miscovering the counterfactual outcomes of rarely selected actions\. This paper formalizes the failure through counterfactual coverage and introduces Propensity\-Weighted Online Conformal Prediction, an inverse\-propensity\-weighted recursion that debiases calibration\. A doubly robust variant further reduces nuisance bias to the product of outcome\-model and propensity errors\. Under positivity, the resulting coverage rate matches an information\-theoretic lower bound up to logarithmic factors\. Experiments on synthetic decision tasks, open bandit data, and financial rebalancing show that PW\-OCP and DR\-OCP improve counterfactual coverage and downstream regret without sacrificing prediction\-set sharpness\.

## Risks Create a Jagged Frontier of LLM Productivity Gains Across Computer Occupations

**Authors:** Deepika Chawla; Gagandeep Singh; Elham k buxton; Meicen Sun; Lav Varshney; Jeremy Riel; Craig De Voto

**ID:** 140000\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 140000

[Paper](<https://openreview.net/forum?id=x1uym9PA9I>) | [PDF](<https://openreview.net/pdf?id=x1uym9PA9I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140000>)

_Abstract unavailable from the accessible public sources._

## Hallucination\-Guided Unlearning: Using Hallucination Traces to Reveal Overfitted Memories

**Authors:** Jiayu Zhang; Ziqi Zhong; Yuliang Gai; Canran Xiao

**ID:** 152918 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PR255SIdSp>) | [PDF](<https://openreview.net/pdf?id=PR255SIdSp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152918>)

Selective unlearning in large language models is increasingly necessary for safety and compliance, yet harmful or memorized content is often latent, entangled, and hard to specify as a clean \`\`forget set\.'' We aim to close this gap by identifying what to forget from the model’s own failure modes rather than relying solely on explicit supervision\. We propose Hallucination\-Guided Unlearning \(HGU\), which treats hallucinations as diagnostic signals: it localizes unsupported spans via evidence and internal consensus, traces a sparse set of high\-responsibility MLP neurons, and edits them with compact gates under a utility\-preserving KL constraint\. Across TOFU, HGU achieves the best MU\-\-FE trade\-off with Avg of 0\.7221 \(forget05\) and 0\.7699 \(forget10\), and it also attains the top SepS H\-Avg \(0\.4382/0\.4715\) under mixed forget/retain prompts; on WMDP auxiliary, it yields the strongest forgetting \(e\.g\., 14\.2 on Economics\) while improving Retain \(52\.7\) and MMLU \(57\.2\)\. These results suggest that reframing hallucinations as actionable traces enables targeted, post\-hoc unlearning that better balances forgetting efficacy and general utility without full retraining\.

## Learning Data\-free Universal Adversarial Perturbation with Hybrid Priors and Gradient\-Guided Sharpness Regularization

**Authors:** Zhi Tan; Jiazheng Cui; Wenwen Zhang; Yiran Liu; Guodong Liu; Chris Ding; Di Ming

**ID:** 155385 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=63Fv6QZl1d>) | [PDF](<https://openreview.net/pdf?id=63Fv6QZl1d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155385>)

Universal adversarial perturbations \(UAPs\) aim to learn a single input\-agnostic perturbation that consistently induces misclassification across diverse inputs, exposing systemic vulnerabilities of deep models\.  To enhance practical applicability, data\-free UAP methods replace real data with samples drawn from handcrafted synthetic priors and optimize UAPs via activation maximization\.  However, existing approaches rely on a single synthetic prior throughout training, which biases optimization toward a narrow feature subspace and necessitates costly per\-prior tuning\. Moreover, the commonly used stochastic gradient ascent \(SGA\) updates are inherently unstable and tend to converge to sharp regions of the loss landscape, weakening black\-box transferability\.  To overcome these limitations, we propose HPSR\-UAP, a data\-free framework that couples hybrid\-prior reweighting with gradient\-guided sharpness regularization\.  Specifically, we develop a dynamic reweighting mechanism over multiple synthetic priors to mitigate prior bias and avoid overfitting to any single distribution\.  Building upon this, we introduce a gradient\-guided sharpness regularization that smooths the prior\-weighted activation loss landscape within a local perturbation neighborhood, promoting updates towards flatter and more transferable directions\. Extensive experiments on ImageNet demonstrate that HPSR\-UAP outperforms state\-of\-the\-art methods in both white\-box and black\-box data\-free attack settings\.  We further introduce a multi\-granularity block\-wise similarity metric that quantifies spatial repetitiveness within UAPs, revealing a strong correlation between structural regularity and attack performance\.

## A Black\-Box Reduction from Regret to Multi\-Level Coverage

**Authors:** Tuo Liu; Edgar Dobriban; Francesco Orabona

**ID:** 154233 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FEc497vZlM>) | [PDF](<https://openreview.net/pdf?id=FEc497vZlM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154233>)

Online Conformal Prediction \(OCP\) sequentially constructs prediction sets whose average empirical coverage converges to a target level over time, for arbitrary, potentially adversarial datasets\. In the multi\-level setting of OCP, prediction sets are produced at $d$ coverage levels at once\. Prior work showed that online gradient descent with lazy isotonic projections produces sets properly nested across levels, but with a $\\sqrt\{d\}$ dependence in the per\-level coverage convergence rate\. Here, we both generalize and improve prior work\. First, we show that lazy isotonic projections can be safely used for the construction of multi\-level online conformal prediction sets from \\emph\{any\} online learning algorithm\. Then, through a black\-box reduction, we show that the linearized regret of the online algorithm itself automatically gives control over both per\-level calibration and distributional consistency of multi\-level predictions via Fenchel duality\. Finally, by using the Weighted Interval Score, the standard scoring rule for assessing multi\-level interval forecasts, we prove that these projections reduce both the size of the sets and their under\-coverage\. We show two instantiations of our theory, $p$\-norm Online Mirror Descent and coordinate\-wise Universal\-Portfolio, both improving the dependence on the number of levels to $\\sqrt\{\\log d\}$ for the multi\-OCP problem\. Experiments on stock prices, electricity demand, and synthetic streams confirm consistent gains in coverage\-width trade\-offs over existing baselines\.

## FRInGe: Distribution\-Space Integrated Gradients with Fisher–Rao Geometry

**Authors:** Gabriele Martino; Sebastian Tschiatschek

**ID:** 149612 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=onv7aWVE1B>) | [PDF](<https://openreview.net/pdf?id=onv7aWVE1B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149612>)

Gradient\-based attribution methods are model\-faithful and scalable, but Integrated Gradients \(IG\) can be brittle because explanations depend on heuristic baselines, straight\-line paths, discretization, and saturation\. We propose Fisher\-\-Rao Integrated Gradients \(FRInGe\), which defines both the reference and interpolation schedule in predictive distribution space\. FRInGe replaces input baselines with a maximum\-entropy predictive reference and follows a Fisher\-\-Rao geodesic on the probability simplex\. The corresponding input\-space trajectory is realized through the pullback Fisher metric and stabilized by KL and Euclidean trust regions; attributions are obtained by integrating input gradients along this trajectory\. Across six ImageNet architectures, FRInGe most clearly improves calibration\-oriented attribution metrics, especially MAS scores, while remaining competitive on perturbation AUC and infidelity\.

## Error\-Guided Bellman Calibration for Semi\-Offline Value Estimation

**Authors:** Tetsuro Morimura

**ID:** 149993 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lcrYylOS2v>) | [PDF](<https://openreview.net/pdf?id=lcrYylOS2v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149993>)

We study semi\-offline value estimation, where a small on\-policy sample supplements a large off\-policy dataset\. This regime is common in recommender systems and pre\-deployment A/B testing, and the challenge is to use the limited on\-policy data to correct systematic bias in a given value predictor\. Recent work on Bellman calibration \(BC\) gives a post\-hoc, model\-agnostic correction along the predicted value\. We propose Error\-Guided Bellman Calibration \(GBC\), which trains an error model on the on\-policy sample and calibrates the predictor along this learned error axis\. We prove a completeness\-free refinement guarantee, a theorem showing that the correction adapts to the intrinsic dimension of the prediction bias, and a finite\-sample bound on the value\-estimation error that isolates our advantage in the refinement term\.  Across synthetic, CRM, and D4RL benchmarks, GBC improves over existing calibration baselines\.

## Occupancy\-based Quantile Risk Control

**Authors:** Zihao Shi; Huajun Xi; Bingyi Jing; Hongxin Wei

**ID:** 149393 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qOeSSrQgQq>) | [PDF](<https://openreview.net/pdf?id=qOeSSrQgQq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149393>)

Conformal risk control is an emerging framework for the safe deployment of machine learning models with finite\-sample guarantees\. To accommodate a broader class of risk notions, quantile risk control extends this framework to quantile\-based risk measures\. However, existing methods either suffer from excessive conservatism or lack rigorous finite\-sample guarantees\. To address these limitations, we introduce Occupancy\-based Quantile Risk Control \(OQRC\), a novel method that provides tight risk control bounds with finite\-sample validity\. Our key idea is to formulate risk control as a finite\-occupancy problem by partitioning the loss space with the ordered calibration losses\. Specifically, we estimate the distribution of test losses across the resulting bins and upper\-bound the risk by the maximum loss attained within each bin\. We then select the parameter $\\lambda$ such that this upper bound does not exceed a predefined threshold $\\alpha$ with high probability $1\-\\delta$\. Theoretically, we establish a finite\-sample guarantee showing that OQRC yields tight risk control bounds that converge to the optimal bounds at a provable rate of $\\mathcal\{O\}\_p\(n^\{\-1/2\}\)$\. Extensive experiments demonstrate the effectiveness of our method, reducing the risk gap by up to 78\.64\\% on common benchmarks\.

## Mitigating Factual Hallucination in Large Reasoning Models via Mixed\-Mode Advantage Regularization

**Authors:** Kaishen Wang; Tong Zheng; Xuehao Cui; Ruibo Chen; Tianyi Xiong; Heng Huang

**ID:** 155434 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5h7gF4q3A2>) | [PDF](<https://openreview.net/pdf?id=5h7gF4q3A2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155434>)

Large reasoning models \(LRMs\) improve language model capabilities by generating explicit thinking traces before final answers\. In factuality\-oriented question answering \(QA\), such thinking often improves overall performance by helping the model recover relevant knowledge and refine its answers\. However, we find that this benefit is not uniform at the instance level: explicit thinking can also overturn correct non\-thinking answers and lead to factual drift\. We refer to this failure mode as \\emph\{thinking\-induced hallucination\}\. To explain this phenomenon, we formulate explicit thinking in factuality QA as a thinking residual over the model's direct\-answer tendency, which can either recover missing knowledge or introduce unsupported associations\. Based on this formulation, we propose MARGO, \\underline\{\\textit\{M\}\}ixed\-Mode \\underline\{\\textit\{A\}\}dvantage \\underline\{\\textit\{R\}\}egularization for \\underline\{\\textit\{G\}\}rounded \\underline\{\\textit\{O\}\}ptimization, a reinforcement learning framework that uses non\-thinking rollouts as same\-model references in advantage estimation\. By constructing mixed\-mode rollout groups with both thinking and non\-thinking trajectories, MARGO evaluates whether explicit thinking adds factual value beyond direct answering, thereby suppressing hallucination\-prone thinking while preserving beneficial thinking behaviors\. Experiments across multiple factuality\-oriented QA benchmarks demonstrate that MARGO improves factual reliability over strong baselines, while evaluations on mathematical benchmarks show that it preserves general reasoning ability\.

## Models That Know How Evaluations Are Designed Score Safer

**Authors:** Katharina Deckenbach; Haritz Puerto; Jonas Geiping; Sahar Abdelnabi

**ID:** 139525 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ka3c4oKNwc>) | [PDF](<https://openreview.net/pdf?id=Ka3c4oKNwc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139525>)

The validity of AI safety evaluations depends on models behaving consistently across controlled and deployment settings\. Prior work has identified test\-time contextual cues, such as hypothetical scenarios, as a source of verbalized evaluation awareness and subsequent behavioral shift\. In this paper, we investigate a potential explanation of this phenomenon: evaluation meta\-knowledge, defined as parametric knowledge about the structural traits that characterize evaluations\. Similar to dataset contamination, where benchmark exposure leads to higher performance through memorization, we hypothesize that models trained on texts describing evaluation practices may implicitly learn to recognize and respond to evaluation\-like contexts, for instance through exposure to scientific articles or social media posts about AI benchmarking\.  To test this, we fine\-tune models on synthetic documents describing evaluation traits such as verifiable structures or moral dilemmas\. Evaluating this fine\-tuned model on six safety benchmarks, we find that it is significantly safer than the base model and control model\. This behavioral shift persists even when restricting the analysis to responses lacking explicit verbalization of evaluation awareness\. Our results demonstrate that evaluation meta\-knowledge may inflate safety benchmark performance, introducing a novel confounder that is independent of explicit memorization or verbalized evaluation awareness, thus, challenging to detect\. These findings have important implications for the design and interpretation of AI safety evaluations\.

## Beyond Uniform Detection: Adaptive Hallucination Detection for RAG Across Response Regimes

**Authors:** Jungwuk Park; Sejong Ryu; Jy\-yong Sohn; Jaekyun Moon

**ID:** 155755 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3Bp2vd7ixA>) | [PDF](<https://openreview.net/pdf?id=3Bp2vd7ixA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155755>)

Existing hallucination detectors for retrieval\-augmented generation \(RAG\), whether based on model outputs \(e\.g\., likelihood\) or internal representations, typically apply a uniform detection strategy across responses\. However, we find that different detection signals are informative in different response regimes, making a uniform strategy insufficient for both short\- and long\-form generation\. In short\-form tasks such as factoid QA, hallucination typically appears as selecting an incorrect final answer among multiple context\-relevant candidates\. In this regime, model\-output\-based signals that discriminate among plausible answers are particularly important\. We therefore propose a bidirectional likelihood measure that evaluates logical consistency based on the retrieved evidence and a reasoning step generated after the response\.  In contrast, long\-form descriptive responses are more prone to gradual drift: as generation proceeds, the model increasingly relies on its own prior generations and parametric knowledge, while unsupported continuations may remain locally plausible, making output\-based cues less informative\. For this regime, we measure context\-\-knowledge conflict by tracking the directional alignment of context\-grounding versus internal\-knowledge contributions in the hidden states\. Building on these regime\-specific signals, we introduce ARGUS, an adaptive hallucination detector that emphasizes the more effective signal according to the response regime\.  Experiments on multiple RAG benchmarks show that our method achieves strong performance across both short\- and long\-form settings\.

## VerifyMAS: Hypothesis Verification for Failure Attribution in LLM Multi\-Agent Systems

**Authors:** Hezhe Qiao; Hanghang Tong; Ee\-peng Lim; Bing Liu; Guansong Pang

**ID:** 149921 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mCxhih62ys>) | [PDF](<https://openreview.net/pdf?id=mCxhih62ys>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149921>)

Large language model\-driven multi\-agent systems \(LLM\-MAS\) excel at complex tasks, yet unreliable agents remain a key bottleneck to system\-level reliability\. Automatic failure attribution is therefore critical, but existing approaches—such as direct prediction of agent–error pairs and agent\-first failure attribution—rely on local logs of agent and miss global failures that only manifest over full interaction trajectories, such as cross\-step inconsistencies and inter\-agent coordination errors\. Moreover, directly predicting failures induces a large combinatorial search space, hindering fine\-grained attribution\. To address these challenges, we propose VerifyMAS, a hypothesis verification framework for agent failure attribution\. Instead of directly predicting faulty agents and error types, VerifyMAS formulates and verifies failure hypotheses against full trajectories\. This verification\-based approach decomposes attribution into trajectory\-level error validation and fine\-grained agent localization, providing an error\-first attribution approach that captures global failure patterns while substantially reducing the search space\. We further introduce a hypothesis\-based data construction strategy grounded in a structured error taxonomy and fine\-tune a specialized LLM verifier model for trajectory\-level failure verification and agent attribution\. Experiments on Aegis\-Bench and Who&amp;When show that VerifyMAS consistently improves diverse backbone models, including open\-source Qwen and API\-based GPT models, outperforming prior methods without sacrificing inference efficiency for long multi\-agent trajectories\.

## PP\-Mark: Provable and Publicly Verifiable Watermarking for Generative AI

**Authors:** HANKYEONG KO; Taehoon Kim

**ID:** 148365 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yPgHWlPwFl>) | [PDF](<https://openreview.net/pdf?id=yPgHWlPwFl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148365>)

Generative AI models now produce images indistinguishable from real data, making publicly verifiable provenance essential; however, existing watermarking methods become vulnerable to forgeries and adversarial optimization attacks once their detectors are made public\. We propose PP\-Mark, a provenance framework that anchors lightweight statistical detection to a zero\-knowledge proof of the embedding process, ensuring that forged content cannot pass full verification by construction\. We establish formal unforgeability under standard cryptographic assumptions and validate PP\-Mark against representative baselines across two architectures, demonstrating resistance to black\-box imprint forgery, white\-box optimization, and regeneration attacks while remaining practical for decentralized verification\.

## Consistent One\-vs\-All Losses Robust to Misspecification of the Weak Label Transition Model

**Authors:** Chi Cui; Hei Victor Cheng; Jesús Cid\-Sueiro

**ID:** 150290 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jH8P1bT8U2>) | [PDF](<https://openreview.net/pdf?id=jH8P1bT8U2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150290>)

Learning from weak labels \(including noisy, partial or complementary labels\) requires exploiting the statistical dependence between ground\-truth classes and observed labels\. Many existing methods are built around a particular transition model, often assumed to be known, accurately estimated, or instance\-independent, which leads to performance degradation under model misspecification\.  We introduce Convex Losses for Weak Labels \(CLWL\), a family of losses for weak supervision based on transforming supervised one\-vs\-all losses\. By prioritizing classification and ranking consistency over probability calibration, CLWL relaxes rigid structural assumptions on the label transition mechanism\. We provide conditions for convexity and ranking consistency, characterize the transition matrices that preserve consistency for a given loss, and show that this consistency\-preserving space attains the theoretical dimension bound\. We propose a constructive method for generating parametric, lower\-bounded, convex losses adapted to arbitrary weak\-label models\. Finally, we connect CLWL to existing methods, including backward correction and some losses for partial or complementary labels\. Empirical results demonstrate that CLWL outperforms state\-of\-the\-art methods when the assumed transition model is misspecified\.

## FeatCal: Feature Calibration for Post\-Merging Models

**Authors:** Yanggan Gu; Shuo CAI; Zihao Wang; Wenjun Wang; Yuanyi Wang; Pengkai Wang; Sirui Huang; Su Lu; Jianmin Wu; Hongxia Yang

**ID:** 152364 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TbWDPX0nam>) | [PDF](<https://openreview.net/pdf?id=TbWDPX0nam>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152364>)

Model merging combines task experts into one model and avoids joint training, retraining, or deploying many expert models, but the merged model often still underperforms task experts\. We study this performance gap through feature drift, the difference between features produced by the merged model and by the expert on the same input\. Our theory decomposes this drift into upstream propagation and local mismatch, tracks how it propagates and combines through later layers in forward order, and links final feature drift to output drift\. This view motivates FeatCal, which uses a small calibration set to calibrate the merged model weights layer by layer in forward order, reducing feature drift while staying close to merged weights and preserving the benefits of model merging\. FeatCal uses an efficient closed\-form solution to update model weights, with no gradient descent, iterative optimization, or extra modules\. On the main CLIP and GLUE benchmarks, FeatCal beats Surgery and ProbSurgery, the closest post\-merging calibration baselines: 85\.5% vs\. 77\.0%/78\.8% on CLIP\-ViT\-B/32 Task Arithmetic \(TA\) and 85\.2% vs\. 83\.7%/82\.2% on FLAN\-T5\-base GLUE\. On CLIP\-ViT\-B/32, 8 examples per task reach 82\.9%, and 256 examples per task take 53 seconds, about 4x faster than both baselines, showing better sample efficiency and lower calibration cost\.

## No More, No Less: Task Alignment in Terminal Agents

**Authors:** Sina Mavali; David Pape; Jonathan Evertz; Samira Abedini; Devansh Srivastav; Thorsten Eisenhofer; Sahar Abdelnabi; Lea Schönherr

**ID:** 139104 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=koHWZUTUlq>) | [PDF](<https://openreview.net/pdf?id=koHWZUTUlq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139104>)

Terminal agents are increasingly capable of executing complex, long\-horizon tasks autonomously from a single user prompt\. To do so, they must interpret instructions encountered in the environment \(e\.g\., README files, code comments, stack traces\) and determine their relevance to the task\. This creates a fundamental challenge: relevant cues must be followed to complete a task, whereas irrelevant or misleading ones must be ignored\. Existing benchmarks do not capture this ability\. An agent may appear capable by blindly following all instructions, or appear robust by ignoring them altogether\. We introduce TAB \(Task Alignment Benchmark\), a suite of 89 terminal tasks derived from Terminal\-Bench 2\.1\. Each task is intentionally underspecified, with missing information provided as a necessary cue embedded in a natural environmental artifact, alongside a plausible but irrelevant distractor\. Solving these tasks requires selectively using the cue while ignoring the distractor\. Applying TAB to ten frontier agents reveals a systematic gap between agent capability and task alignment\. The strongest Terminal\-Bench agent achieves high task completion but low task alignment on TAB\. Evaluating six prompt\-injection defenses further shows that suppressing distractor execution also suppresses the cues required for task completion\.  These results demonstrate that task\-aligned agents require selective use of environmental instructions rather than blanket acceptance or rejection\.

## MT\-CC: Multi\-Group Temperature Scaling for Asymmetric Calibration Behavior in Class\-Incremental Learning

**Authors:** Sungjun Yun; Yonghee Choi; Dong\-Jun Han

**ID:** 148768 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vCft9tPVmL>) | [PDF](<https://openreview.net/pdf?id=vCft9tPVmL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148768>)

As deep neural networks are required to continuously adapt to evolving data, class\-incremental learning \(CIL\) has become an active research area\. However, most existing works primarily focus on improving accuracy while overlooking confidence calibration, which measures the trustworthiness of the model's predictions\. Although temperature scaling \(TS\) is effective for static calibration, it has rarely been explored in continual settings where data distributions evolve over time\. In this paper, we introduce Multi\-Group Temperature Scaling for Continual Calibration \(MT\-CC\), a novel post\-hoc calibration framework that addresses the asymmetric calibration behavior in CIL, where the rate of confidence changes does not align with the rate of accuracy degradation across tasks, leading to different levels of miscalibration\. Our key contribution is to design multiple temperature parameters through a lightweight grouping network that separates samples by confidence statistics and task\-aware signals in CIL\. Furthermore, a Groupwise Difference\-between\-Confidence\-and\-Accuracy \(GDCA\) regularization is incorporated to promote intra\-group consistency\. Experiments demonstrate that MT\-CC significantly improves calibration performance while maintaining accuracy, offering a principled framework for reliable continual learning\.

## Uncertainty Quantification of Least Squares Estimator for Generalized Orthogonal Procrustes Problems

**Authors:** Shenghan Luo

**ID:** 149016 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tTBzm1lVMl>) | [PDF](<https://openreview.net/pdf?id=tTBzm1lVMl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149016>)

The generalized orthogonal Procrustes problem \(GOPP\) aims to recover rigid transformations that best align multiple point clouds and has broad applications in 3D geometry, computer vision, and biomedicine\. Despite its importance, the problem is challenging due to the nonconvex orthogonality constraints\. Fortunately, the generalized power method \(GPM\) has proven highly effective, theoretically guaranteed to converge to the global least squares \(LS\) estimator under reasonable conditions\. Yet, the statistical inference of this global LS estimator remains largely an open problem\. Specifically, the absence of an exact second\-order analytic expansion prevents rigorous uncertainty quantification \(UQ\), which is vital for constructing confidence regions and evaluating estimator reliability\. While recent UQ frameworks developed for orthogonal group synchronization offer a potential paradigm, they severely lack universality, often failing to accommodate the complex anisotropic distortions inherent in GOPP shape matrices\. To bridge this gap, we propose a more general theoretical framework with which we successfully derive the exact second\-order analytic expansion of the GOPP global LS estimator under additive Gaussian noise\. Leveraging this theoretical foundation, we further construct confidence regions\. Finally, extensive numerical experiments empirically validate the exactness of our theoretical expansion and demonstrate the robust coverage of the proposed confidence regions across varying conditions\.

## DIAL: A Bounded\-Monotone Adapter with Closed\-Form Residual $L\_\\infty$ Bounds for Scalar\-Controlled Refusal Modulation

**Authors:** Nguyen Vu Nguyen

**ID:** 150583\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150583

[Paper](<https://openreview.net/forum?id=h6qz0TIbIa>) | [PDF](<https://openreview.net/pdf?id=h6qz0TIbIa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150583>)

We introduce DIAL \(Directional Intervention, Asymptotically Limited\), a parameter\-efficient adapter that adds a bounded, monotone, scalar\-controlled residual $\\delta\(s,c\) = \\sigma\(g\) \\odot \\tanh\(c/T\) \\odot \\tanh\(Dz\)$ with $z = D^\\top \\phi\(s\)$ to a base language model's hidden state\. The architectural form yields a closed\-form upper bound $\\lVert \\delta \\rVert\_\\infty \\le \\sigma\(g\_\{\\max\}\)$ on the residual $L\_\\infty$ norm, computable from model weights alone\.  Across 5 base models \(3\.8B to 70B parameters, 4 architecture families; one checkpoint per family, with 5\-seed csweep variance at Llama\-3\.1\-8B\), the residual saturates at the predicted bound with mean ratio $1\.000 \\pm 0\.001$ \(worst\-case family deviation 0\.2 percentage points\)\. On Llama\-3\.1\-8B under GPT\-4o judge \($n=100$ per bench, zero content\-filter blocks\), DIAL exceeds a FiLM baseline trained with the same multi\-$c$ objective on every benchmark and judge\. Semantic vs strict judge: HarmBench DIAL \+0\.52 / \+0\.55 vs FiLM \+0\.44 / \+0\.39; AdvBench DIAL \+0\.63 / \+0\.66 vs FiLM \+0\.46 / \+0\.50; XSTest DIAL \+0\.33 / \+0\.25 vs FiLM \+0\.26 / \+0\.22; both judges agree on the ranking\.  Outside training range, DIAL's residual saturates at $\\sigma\(g\_\{\\max\}\)$ while FiLM's grows unboundedly: at $c = 10^4$, FiLM's residual $L\_\\infty$ norm is 534 times larger than DIAL's\. The bound holds across all control values, not only trained ones; concrete deployment scenarios \(configuration error, multi\-tenant policy ceilings, adversarial composition\) are where this distinction matters in practice\.  The bounded\-monotone form produces analogous saturation behavior on two continuous\-control RL environments \(HC\-Vel $n=35$, Ant\-Goal $n=30$\) under matched oracle\-$c$; the prior fails when $c$ must be inferred online \(meta\-RL\)\. Ablations confirm both the bound and the saturating temperature are necessary; a frozen\-gate variant retains the bound at lower controllability magnitude\. We release adapter train reports and canonical bench generations, algebraic derivations \(with a SymPy reproducibility script\), the full GPT\-4o judge cache \(semantic and strict\), and a human\-labeled validation set \($n=50$, Cohen's kappa = 0\.895\)\. Full adapter checkpoints are deferred to camera\-ready release\.

## The Scaling Paradox of Tool\-Calling LLM Agents Under Realistic MCP Faults

**Authors:** Antonio Ken Iannillo; Joshua S Owotogbe; Roberto Natella; Francesco Avallone; Kristina Kudryavtseva; Indika Kumara

**ID:** 151564\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151564

[Paper](<https://openreview.net/forum?id=ZfMdoPBhn0>) | [PDF](<https://openreview.net/pdf?id=ZfMdoPBhn0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151564>)

LLM agents increasingly rely on external tools exposed via the Model Context Protocol \(MCP\), yet current benchmarks assume tools respond correctly and on time, leaving agent resilience to realistic tool failures untested\.   We introduce MCP\-Injector, a drop\-in, protocol\-aware fault\-injection middleware that interposes on the MCP tool\-call path with controlled persistence \(permanent, transient, intermittent\) and seedable schedules\.   Its fault model is empirically calibrated by mining 57,240 issue and pull\-request threads across 1,774 open\-source MCP repositories, yielding a distribution over six failure modes grounded in observed ecosystem incidents\.   In a 1,350\-cell experiment crossing two backbone sizes \(20B, 120B\), three agent stacks \(custom multi\-round plan\-and\-execute, OpenAI Agents SDK, LangChain\), and three fault injection conditions, we find that calibrated MCP faults cause severe quality degradation \(60\\% drop in task completion score, $p &lt; 10^\{\-56\}$\) and reveal a scaling paradox: the larger model achieves higher fault\-free scores but suffers lower completion rates under faults, driven by longer reasoning chains that amplify fault exposure\.   Framework\-level error handling shapes resilience more than model scale, with stack choice producing significant interaction effects\.   These results demonstrate that capability benchmarks alone can mask operational brittleness, motivating protocol\-aware fault injection as a complementary evaluation dimension for tool\-calling agents\.

## Exact Unlearning via Quantized Sufficient Statistics

**Authors:** Ami Tavory; Shripad Gade; Tal Sarig; Noam Touitou; Ido Guy

**ID:** 152457 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SyxiOl962F>) | [PDF](<https://openreview.net/pdf?id=SyxiOl962F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152457>)

Exact machine unlearning guarantees that after deleting a user's data, the model produces the same predictions as if it had never seen that data in the first place\. SISA, the current state\-of\-the\-art approach, partitions data into disjoint shards, with necessary $O\(n/S\)$ retraining cycle for each deletion, and it cannot lower this cost through redundancy, because overlapping shards only multiply the damage\.We introduce Quantized Sufficient Statistics \(QSS\), a non\-parametric framework that pairs frozen prediction heads \(the schema, trained on a small random subset $\\mathcal\{D\}^\{\\circ\}$\) with mutable sum\-decomposable accumulators indexed by Residual Quantization codes over the complementary data \(the content, $\\mathcal\{D\} \\setminus \\mathcal\{D\}^\{\\circ\}$\)\. With probability $1\{\-\}\\rho$ \(where $\\rho = \|\\mathcal\{D\}^\{\\circ\}\|/n$, typically $\\leq 1\\%$\), deletion reduces to a constant\-time arithmetic update independent of dataset size $n$; with probability $\\rho$, a full rebuild is required\. Maintaining $p$ independent schemas suppresses the synchronous rebuild probability to $\\rho^p$, and because every schema aggregates all data, decommissioning incurs zero accuracy loss\. Across 15 datasets \($n \\geq 50$K\) spanning vision, text, and tabular modalities at $\\rho=0\.5\\%$, QSS matches or exceeds SISA accuracy on 5 datasets, trails by $\\leq 2$ pp on 5 more, and by 3–11 pp on 3 datasets where high class count or large rebuild cost limits performance, while delivering 3–645$\\times$ faster median expected deletion \(e\.g\., 0\.2 s expected vs\. 109 s on Jigsaw, $n=1\.4$M\)\.

## Alleviating Hallucination with Training\-Free Uncertainty\-Guided Steering

**Authors:** Litian Liu; Yubing Jian; Qiqi Hou; Reza Pourreza; Mohammad Ghavamzadeh; Yao Qin; Roland Memisevic; Herbert Cai

**ID:** 148795 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v2TDfSvdkb>) | [PDF](<https://openreview.net/pdf?id=v2TDfSvdkb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148795>)

Recent work on hallucination detection in large language models has shown that, for a fixed pre\-trained model    and reasoning task, it is possible to estimate the model’s confidence in the correctness of its outputs\.    Such uncertainty estimates have primarily been used to improve truthfulness by detecting or filtering confabulations\.    In this work, we ask whether these signals can instead be used more proactively to directly improve the accuracy    of model\-generated answers\.   We propose USteer, a simple, training\-free steering mechanism that adjusts a model’s layer\-wise activations during inference    using the gradient of a confidence with respect to the activations\. This procedure nudges generation toward outputs    with lower uncertainty at inference time, without modifying model parameters or requiring additional    supervision\. We show that this approach consistently reduces hallucination across a range of tasks,    demonstrating that confidence signals can be leveraged not only for detection, but also for effective    inference\-time control of model behavior\.

## Stochastic Grouping Conformal Prediction for Effective Subgroup Reliability

**Authors:** Meihui Zhong; Wenxin Tai; Ting Zhong; Fan Zhou

**ID:** 149803 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nFBHPHZ66f>) | [PDF](<https://openreview.net/pdf?id=nFBHPHZ66f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149803>)

Conformal prediction offers a distribution\-free coverage guarantee, making it especially attractive for clinical applications\. Standard conformal prediction, however, provides such guarantees only at the population level, and its prediction sets can exhibit coverage disparities across clinically important subgroups\. A natural remedy is to calibrate within predefined groups\. However, this can require access to sensitive subgroup attributes and is prone to a worst\-group bottleneck: protecting the most difficult subgroup can inflate prediction sets for all, increasing cognitive burden on decision makers\. To this end, we propose Stochastic Grouping Conformal Prediction \(SGCP\), a conformal framework for subgroup\-reliable uncertainty quantification\. It learns a stochastic grouping map that allows each sample to draw calibration information from others with similar calibration behavior, yielding a local score law that boosts reliability across subpopulations\. We prove that SGCP retains the standard coverage guarantee\. Experiments on synthetic and real\-world benchmarks show that it consistently reduces subgroup coverage gaps while achieving smaller or comparable prediction set sizes relative to existing baselines\.

## The Alignment Tax Concentrates in Output Projections

**Authors:** Ming Liu

**ID:** 152620 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Rj4yyW4GB7>) | [PDF](<https://openreview.net/pdf?id=Rj4yyW4GB7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152620>)

Prior work localizes the alignment tax\-\-\-instruction tuning's degradation of structured generation\-\-\-to transformer layers, but cannot determine which projections within a layer carry the functional change\. We identify a consistent sub\-layer hierarchy across three primary SwiGLU decoder\-only families \(7\-\-9B parameters, with Yi\-1\.5\-9B supplementary\): among equal\-parameter MLP projections, $W\_\{down\} &gt; W\_\{up\} &gt; W\_\{gate\}$ \(2\.5:1\.5:1\)\-\-\-an architecturally grounded ordering \(reproduced under continual pretraining\) not resolved by concurrent work\. Within attention, $W\_V$/$W\_O$ gradient magnitudes exceed $W\_Q$/$W\_K$ by 1\.76\-\-3\.91$\\times$\. Three independent methods\-\-\-weight patching, gradient analysis, and training\-time exclusion\-\-\-converge on the same within\-layer structure; a continual\-pretraining control confirms the within\-MLP hierarchy is architectural \(not alignment\-specific\), but the layer\-level distribution of harmful modifications is\-\-\-this task\-specific signal enables targeted rollback \(8\.9$\\times$ over architectural\-prior heuristics on held\-out data, $p=0\.002$\)\. Surgical Alignment Reversal \(SAR\), a training\-free rollback of attribution\-ranked components, recovers 47% of the alignment tax \(cross\-entropy metric, Qwen; Llama/Mistral: 2\-\-3$\\times$ random\) on held\-out cross\-dataset data \(in\-domain ratios 2\.8\-\-5\.3$\\times$\); Output\-Constrained DPO \(OC\-DPO\) largely eliminates the tax while Q/K exclusion does not\-\-\-both validated on attribution\-independent data\. Safety evaluation shows no significant degradation: refusal\-rate $\|\\Delta\| \\le 1\.4$ pp \($n=1\{,\}000$\), no significant ASR increase under adversarial attack \($\|\\Delta\\text\{ASR\}\| \\le 6$ pp, $n=50$\); Yi\-1\.5\-9B is excluded due to safety\-\-structure overlap \($\-13\.6$ pp\)\. Attribution replicates at 14B; gradient asymmetry persists at 72B\.

## Recovering Clean Evaluation Metrics from Contaminated Benchmarks

**Authors:** Míriam Barrabés; Daniel Mas Montserrat; Maria Perera; Alexander Ioannidis

**ID:** 153099 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NwYunMgkJx>) | [PDF](<https://openreview.net/pdf?id=NwYunMgkJx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153099>)

When benchmark examples overlap with a model’s training data, benchmark contamination can substantially inflate reported evaluation metrics, yet training provenance is often unavailable\. We study post\-hoc recovery of uncontaminated evaluation metrics in supervised tabular classification and regression using only prediction–label pairs from a potentially contaminated benchmark\. We introduce MILAN \(Metric Integrity via Leakage\-Aware Normalization\), a meta\-trained framework that models a contaminated benchmark as a mixture of training\-origin and clean evaluation examples and estimates soft posterior weights for the clean component to correct evaluation metrics\. MILAN supports a broad class of metrics through weighted estimators and metric\-specific correction procedures, and can optionally incorporate contamination\-rate priors and sample\-wise difficulty scores\. To quantify uncertainty, MILAN additionally provides split\-conformal prediction intervals with marginal coverage across exchangeable recovery problems\. Across a large suite of simulated recovery problems with held\-out datasets and model families, MILAN consistently improves clean\-metric recovery over thresholding, clustering, mixture\-model, anomaly\-detection, and membership\-inference baselines\. In a polygenic risk score case study using UK Biobank evaluation data, MILAN improves agreement with independent FinnGen reference metrics\. We provide a scikit\-learn\-style implementation at \\url\{hidden\-for\-submission\}\.

## Persuasive Prediction via Decision Calibration

**Authors:** Jingwu Tang; Jiahao Zhang; Fei Fang; Steven Wu

**ID:** 152558 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SEBdVdqbdq>) | [PDF](<https://openreview.net/pdf?id=SEBdVdqbdq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152558>)

Bayesian persuasion, a central model in information design, studies how a sender, who privately observes a state drawn from a prior distribution, strategically sends a signal to influence a receiver's action\. A key assumption is that both sender and receiver share the precise knowledge of the prior\. Although this prior can be estimated from past data, such assumptions break down in high\-dimensional or infinite state spaces, where learning an accurate prior may require a prohibitive amount of data\. In this paper, we study a learning\-based variant of persuasion, which we term persuasive prediction\. This setting mirrors Bayesian persuasion with large state spaces, but crucially does not assume a common prior: the sender observes covariates $X$, learns to predict a payoff\-relevant outcome $Y$ from past data, and releases a prediction to influence a population of receivers\. To model rational receiver behavior without a common prior, we adopt a learnable proxy: \*decision calibration\*, which requires the prediction to be unbiased conditioned on the receiver's best response to the prediction\. This condition guarantees that myopically responding to the prediction yields no swap regret\. Assuming the receivers best respond to decision\-calibrated predictors, we design a provably efficient algorithm that learns a decision\-calibrated predictor within a randomized predictor class that optimizes the sender's utility\. In the commonly studied single\-receiver case, our method matches the utility of a Bayesian sender who has full knowledge of the underlying prior distribution\. Finally, we extend our algorithmic result to a setting where receivers respond stochastically to predictions and the sender may randomize over an infinite predictor class\.

## Cognitive Firewalls: A Synthetic Account of Cross\-Lingual Reasoning Collapse

**Authors:** Jou Barzdukas; Paulius Rauba; Julian Schulz; Jack Peck; Steven Basart; Lennie Wells

**ID:** 153873 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=I7DeL1MXJc>) | [PDF](<https://openreview.net/pdf?id=I7DeL1MXJc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153873>)

The reasoning capabilities of large language models are reported to drop sharply when they are forced to think in heavily regulated target languages such as Chinese — a phenomenon the literature attributes to data imbalance, multilingual transfer failures, or, more recently, RL\-induced cross\-lingual collapse\. We propose and test an alternative mechanistic account: that the gap reflects RL\-induced selection between conditional policies sharing the same parameters, rather than a loss of underlying capability\. We construct a model organism for this account\. Two policies — identified solely by the language of an unsupervised chain of thought — are installed via SFT on disjoint splits of ARC\-Challenge, with one policy trained to answer and the other to refuse on each split\. Reinforcement learning with a final\-answer reward, restricted to one split, drives the language of reasoning to collapse onto the rewarded policy across both splits, producing a 67% → 10% accuracy collapse on the held\-out split despite no reward signal ever observing it\. General capability is unaffected: MMLU accuracy is 71\.2% before and after RL\. A depth\-wise activation steering intervention then recovers held\-out accuracy from 0% to 85% on the worst\-case slice \(Chinese\-CoT completions\) while preserving Chinese as the surface chain\-of\-thought language and leaving the rewarded policy intact \(83% vs\. 94% unsteered\)\. The capability was never lost; it was gated\. To the extent deployed regulated\-language models contain analogous structure, surface evaluations of such models will systematically understate capability hidden behind learned policy gates\.

## Conformal Agent Error Attribution

**Authors:** Naihe Feng; Yi Sui; Shiyi Hou; Ga Wu; Jesse Cresswell

**ID:** 150722 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fvwWOlglCS>) | [PDF](<https://openreview.net/pdf?id=fvwWOlglCS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150722>)

When multi\-agent systems \(MAS\) fail, identifying where the decisive error occurred is the first step for automated recovery to an earlier state\. Error attribution remains a fundamental challenge due to the long interaction traces that large language model\-based MAS generate\. This paper presents a framework for error attribution based on conformal prediction \(CP\) which provides finite\-sample, distribution\-free coverage guarantees\. We introduce new algorithms for filtration\-based CP designed for sequential data such as agent trajectories\. Unlike existing CP algorithms, our approach predicts sets that are contiguous sequences to enable efficient recovery and debugging\. We verify our theoretical guarantees on a variety of agents and datasets, show that errors can be precisely isolated, then use prediction sets to rollback MAS to correct their own errors\. Our overall approach is model\-agnostic, and offers a principled uncertainty layer for MAS error attribution\.

## Consistency\-Verified Backdoor Defense for Federated Graph Learning via Cross\-Layer Drift

**Authors:** Yanwen Jia; Yinuo Zhang; Zitong Shi; Yuxin Wu; Zihan Tan; Xuankun Rong; Liangtao Zheng; Wenke Huang; Mang Ye

**ID:** 152211 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UjxaVYw25d>) | [PDF](<https://openreview.net/pdf?id=UjxaVYw25d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152211>)

Federated graph learning \(FGL\) enables privacy\-preserving collaborative training over distributed graph data, yet remains vulnerable to backdoor attacks from malicious clients\. In FGL, data and structural heterogeneity make benign clients difficult to distinguish from malicious ones, posing a key challenge to reliable defense\. We propose VeriDrift, a backdoor defense framework for FGL based on cross\-layer drift and consistency verification\. On the client side, VeriDrift derives a client\-level risk score from node\-level cross\-layer drift anomalies during GNN propagation\. On the server side, VeriDrift verifies the consistency between the reported risk and the submitted model update, and converts the resulting verified risk into aggregation weights to suppress suspicious updates\. Without relying on auxiliary clean data, VeriDrift enables reliable risk assessment under heterogeneous FGL and improves robustness against adaptive attacks\. Extensive experiments show that VeriDrift consistently reduces attack success rates across different FGL backdoor settings while maintaining clean accuracy\.

## CalArena: A Large Scale Post\-Hoc Calibration Benchmark

**Authors:** Eugène Berta; David Holzmüller; Francis Bach; Michael Jordan

**ID:** 139709 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=97NdFtMyZ3>) | [PDF](<https://openreview.net/pdf?id=97NdFtMyZ3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139709>)

_Abstract unavailable from the accessible public sources._

## TensorCommitments: A Lightweight Verifiable Inference for Large Language Models

**Authors:** Oguzhan Baser; Elahe Sadeghi; Eric Wang; Nico Vergauwen; Sam Kazemian; Hong Kang; Sandeep Chinchali; Sriram Vishwanath

**ID:** 150256 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jYSZwwreXP>) | [PDF](<https://openreview.net/pdf?id=jYSZwwreXP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150256>)

_Abstract unavailable from the accessible public sources._

## BIAS\-ID: A Framework for Analyzing Transformation Biases in AI\-Generated Image Detectors

**Authors:** Jonas Ricker; Asja Fischer; Erwin Quiring

**ID:** 139597 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GIewosR83I>) | [PDF](<https://openreview.net/pdf?id=GIewosR83I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139597>)

_Abstract unavailable from the accessible public sources._

## Trustworthy AI Must Account for Interactions

**Authors:** Jesse Cresswell

**ID:** 140094 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GgBCKP1QOb>) | [PDF](<https://openreview.net/pdf?id=GgBCKP1QOb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140094>)

Trustworthy AI encompasses many aspirational aspects for aligning AI systems with human values, including fairness, privacy, robustness, explainability, and uncertainty quantification\. The ultimate goal of Trustworthy AI research is to achieve all aspects simultaneously\. However, efforts to enhance one aspect often introduce unintended trade\-offs that negatively impact others\. In this position paper, we review notable approaches to five aspects and systematically consider every pair, detailing the negative interactions that can arise\. For example, applying differential privacy to model training can amplify biases, undermining fairness\. Drawing on these findings, we take the position that current research practices of improving one or two aspects in isolation are insufficient\. Instead, research on Trustworthy AI must account for interactions between aspects and adopt a holistic view across all relevant axes at once\. We offer recommendations for how researchers can work towards integrated trust, and provide guidance for practitioners to manage interactions today\.

## Cognitive bias benchmarks should incorporate insights from ecological rationality

**Authors:** David Thorstad

**ID:** 140124 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0xGmHXiwbV>) | [PDF](<https://openreview.net/pdf?id=0xGmHXiwbV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140124>)

Recent studies suggest that large language models \(LLMs\) exhibit a range of cognitive biases familiar from human cognition\. This paper argues that $\\textbf\{cognitive bias benchmarks should incorporate insights from ecological rationality\}$, a leading paradigm in the study of cognitive bias\. Three strategies for resisting some existing allegations of cognitive bias are extracted from the ecological rationality paradigm\. Each strategy is used to generate a concrete recommendation for improving cognitive bias benchmarks\.

## Retain\-Neutral Surrogates for Min\-Max Unlearning

**Authors:** Junhao Cai; Dohun Kim; Dowon Kim; Sung Il Choi; Chengjun Jin; Juhyun Park; Changhee Joo

**ID:** 155814 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2hVefCeDpP>) | [PDF](<https://openreview.net/pdf?id=2hVefCeDpP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155814>)

Machine unlearning seeks to remove the influence of designated training data while preserving performance on the remaining data\. Approximate unlearning can be viewed as a local editing problem; in min\-max unlearning, the key local object is the surrogate point at which the retain objective is evaluated\. When forget and retain gradients are strongly aligned, an unconstrained forget\-maximizing perturbation can move to a surrogate point that increases retain loss\. We propose Retain\-Orthogonal Surrogate Unlearning \(ROSU\), which constrains the inner surrogate construction by maximizing first\-order forget gain subject to zero first\-order retain change under a fixed perturbation budget\. This yields a closed\-form retain\-orthogonal perturbation, a lightweight transported outer update, and amplification along the retain\-neutral direction\. Our analysis establishes \(i\) a curvature\-controlled second\-order bound on retain damage, \(ii\) a positive\-alignment regime in which ROSU strictly reduces surrogate retain loss relative to standard min\-max perturbations, and \(iii\) near\-equivalence when the two gradients are nearly orthogonal\. Across vision and language benchmarks \(CIFAR\-10/100, Tiny\-ImageNet, TOFU, WMDP\), the empirical pattern follows this geometry: ROSU gives its clearest gains in high\-coupling regimes while remaining competitive elsewhere\.

## Hallucination\-Guided Unlearning: Using Hallucination Traces to Reveal Overfitted Memories

**Authors:** Jiayu Zhang; Ziqi Zhong; Yuliang Gai; Canran Xiao

**ID:** 152918\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152918

[Paper](<https://openreview.net/forum?id=PR255SIdSp>) | [PDF](<https://openreview.net/pdf?id=PR255SIdSp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152918>)

Selective unlearning in large language models is increasingly necessary for safety and compliance, yet harmful or memorized content is often latent, entangled, and hard to specify as a clean \`\`forget set\.'' We aim to close this gap by identifying what to forget from the model’s own failure modes rather than relying solely on explicit supervision\. We propose Hallucination\-Guided Unlearning \(HGU\), which treats hallucinations as diagnostic signals: it localizes unsupported spans via evidence and internal consensus, traces a sparse set of high\-responsibility MLP neurons, and edits them with compact gates under a utility\-preserving KL constraint\. Across TOFU, HGU achieves the best MU\-\-FE trade\-off with Avg of 0\.7221 \(forget05\) and 0\.7699 \(forget10\), and it also attains the top SepS H\-Avg \(0\.4382/0\.4715\) under mixed forget/retain prompts; on WMDP auxiliary, it yields the strongest forgetting \(e\.g\., 14\.2 on Economics\) while improving Retain \(52\.7\) and MMLU \(57\.2\)\. These results suggest that reframing hallucinations as actionable traces enables targeted, post\-hoc unlearning that better balances forgetting efficacy and general utility without full retraining\.

## Learning Data\-free Universal Adversarial Perturbation with Hybrid Priors and Gradient\-Guided Sharpness Regularization

**Authors:** Zhi Tan; Jiazheng Cui; Wenwen Zhang; Yiran Liu; Guodong Liu; Chris Ding; Di Ming

**ID:** 155385\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155385

[Paper](<https://openreview.net/forum?id=63Fv6QZl1d>) | [PDF](<https://openreview.net/pdf?id=63Fv6QZl1d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155385>)

Universal adversarial perturbations \(UAPs\) aim to learn a single input\-agnostic perturbation that consistently induces misclassification across diverse inputs, exposing systemic vulnerabilities of deep models\.  To enhance practical applicability, data\-free UAP methods replace real data with samples drawn from handcrafted synthetic priors and optimize UAPs via activation maximization\.  However, existing approaches rely on a single synthetic prior throughout training, which biases optimization toward a narrow feature subspace and necessitates costly per\-prior tuning\. Moreover, the commonly used stochastic gradient ascent \(SGA\) updates are inherently unstable and tend to converge to sharp regions of the loss landscape, weakening black\-box transferability\.  To overcome these limitations, we propose HPSR\-UAP, a data\-free framework that couples hybrid\-prior reweighting with gradient\-guided sharpness regularization\.  Specifically, we develop a dynamic reweighting mechanism over multiple synthetic priors to mitigate prior bias and avoid overfitting to any single distribution\.  Building upon this, we introduce a gradient\-guided sharpness regularization that smooths the prior\-weighted activation loss landscape within a local perturbation neighborhood, promoting updates towards flatter and more transferable directions\. Extensive experiments on ImageNet demonstrate that HPSR\-UAP outperforms state\-of\-the\-art methods in both white\-box and black\-box data\-free attack settings\.  We further introduce a multi\-granularity block\-wise similarity metric that quantifies spatial repetitiveness within UAPs, revealing a strong correlation between structural regularity and attack performance\.

## A Black\-Box Reduction from Regret to Multi\-Level Coverage

**Authors:** Tuo Liu; Edgar Dobriban; Francesco Orabona

**ID:** 154233\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154233

[Paper](<https://openreview.net/forum?id=FEc497vZlM>) | [PDF](<https://openreview.net/pdf?id=FEc497vZlM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154233>)

Online Conformal Prediction \(OCP\) sequentially constructs prediction sets whose average empirical coverage converges to a target level over time, for arbitrary, potentially adversarial datasets\. In the multi\-level setting of OCP, prediction sets are produced at $d$ coverage levels at once\. Prior work showed that online gradient descent with lazy isotonic projections produces sets properly nested across levels, but with a $\\sqrt\{d\}$ dependence in the per\-level coverage convergence rate\. Here, we both generalize and improve prior work\. First, we show that lazy isotonic projections can be safely used for the construction of multi\-level online conformal prediction sets from \\emph\{any\} online learning algorithm\. Then, through a black\-box reduction, we show that the linearized regret of the online algorithm itself automatically gives control over both per\-level calibration and distributional consistency of multi\-level predictions via Fenchel duality\. Finally, by using the Weighted Interval Score, the standard scoring rule for assessing multi\-level interval forecasts, we prove that these projections reduce both the size of the sets and their under\-coverage\. We show two instantiations of our theory, $p$\-norm Online Mirror Descent and coordinate\-wise Universal\-Portfolio, both improving the dependence on the number of levels to $\\sqrt\{\\log d\}$ for the multi\-OCP problem\. Experiments on stock prices, electricity demand, and synthetic streams confirm consistent gains in coverage\-width trade\-offs over existing baselines\.

## FRInGe: Distribution\-Space Integrated Gradients with Fisher–Rao Geometry

**Authors:** Gabriele Martino; Sebastian Tschiatschek

**ID:** 149612\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149612

[Paper](<https://openreview.net/forum?id=onv7aWVE1B>) | [PDF](<https://openreview.net/pdf?id=onv7aWVE1B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149612>)

Gradient\-based attribution methods are model\-faithful and scalable, but Integrated Gradients \(IG\) can be brittle because explanations depend on heuristic baselines, straight\-line paths, discretization, and saturation\. We propose Fisher\-\-Rao Integrated Gradients \(FRInGe\), which defines both the reference and interpolation schedule in predictive distribution space\. FRInGe replaces input baselines with a maximum\-entropy predictive reference and follows a Fisher\-\-Rao geodesic on the probability simplex\. The corresponding input\-space trajectory is realized through the pullback Fisher metric and stabilized by KL and Euclidean trust regions; attributions are obtained by integrating input gradients along this trajectory\. Across six ImageNet architectures, FRInGe most clearly improves calibration\-oriented attribution metrics, especially MAS scores, while remaining competitive on perturbation AUC and infidelity\.

## Error\-Guided Bellman Calibration for Semi\-Offline Value Estimation

**Authors:** Tetsuro Morimura

**ID:** 149993\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149993

[Paper](<https://openreview.net/forum?id=lcrYylOS2v>) | [PDF](<https://openreview.net/pdf?id=lcrYylOS2v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149993>)

We study semi\-offline value estimation, where a small on\-policy sample supplements a large off\-policy dataset\. This regime is common in recommender systems and pre\-deployment A/B testing, and the challenge is to use the limited on\-policy data to correct systematic bias in a given value predictor\. Recent work on Bellman calibration \(BC\) gives a post\-hoc, model\-agnostic correction along the predicted value\. We propose Error\-Guided Bellman Calibration \(GBC\), which trains an error model on the on\-policy sample and calibrates the predictor along this learned error axis\. We prove a completeness\-free refinement guarantee, a theorem showing that the correction adapts to the intrinsic dimension of the prediction bias, and a finite\-sample bound on the value\-estimation error that isolates our advantage in the refinement term\.  Across synthetic, CRM, and D4RL benchmarks, GBC improves over existing calibration baselines\.

## The Block Catastrophe of Marginal Calibration in Certified Requirements Traceability

**Authors:** Jikun Wu; Dongxin Guo; Siu Ming Yiu

**ID:** 148450 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xjocfB8Qxp>) | [PDF](<https://openreview.net/pdf?id=xjocfB8Qxp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148450>)

Certifying authorities for safety\-critical software audit recovered trace matrices module by module, not on average\. Every existing distribution\-free calibration delivers a marginal certificate, and we show the gap to the auditor's quantity is structural and unbounded\. Under within\-block exchangeability with cross\-block heterogeneity in the conditional null score distribution, every procedure controlling marginal $\\mathrm\{FDR\}$ at level $\\alpha$ on a bipartite trace matrix with $K$ source modules admits worst\-module false discovery proportion at least $1\{\-\}\\alpha\{\-\}O\(1/K\)$ with probability at least $1\{\-\}2/K$\. We name this the block catastrophe and close it with $\\mathrm\{CERTRA\}$, which wraps any black\-box scorer, computes a within\-block rank\-indicator conformal $e$\-value, and applies $e$\-$\\mathrm\{BH\}$ separately within each source module\. The construction yields finite\-sample per\-module $\\mathrm\{FDR\}$ control under arbitrary intra\-module dependence, with matching power up to a rank\-quantization factor\. We release IndTrace\-2026, a 12\{,\}406\-link composite across aerospace, automotive, and medical\-device specifications with professional ASIL/DAL/SIL annotation \(Cohen's $\\kappa\{=\}0\.86$\)\. $\\mathrm\{CERTRA\}$ holds worst\-block $\\mathrm\{FDP\}$ at 0\.118 where split\-conformal drifts to 0\.413, retains 0\.741 of true links versus 0\.572 for the strongest fair\-operating\-point baseline, and reduces audit deficiency 3\.3\-fold\. Per\-module distribution\-free calibration is what an industrial audit can sign\.

## Position: Neurosymbolic AI is a strong technical foundation for trustworthy, deployable AI by design

**Authors:** Chandler Squires; Yaqi Xie; Simon Stepputtis; Katia Sycara; Pradeep Ravikumar

**ID:** 140018 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oqZudlhgoi>) | [PDF](<https://openreview.net/pdf?id=oqZudlhgoi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140018>)

As AI becomes more widely adopted, this technology has started to reach a new stage of maturity, with new expectations\. In many domains, features like interpretability, controllability, and reliability can no longer be treated as secondary considerations, but must be treated as primary concerns\. We argue that the currently dominant \*incremental refinement\* strategy should be complemented by a more design\-oriented \*first principles\* strategy, and that \*neurosymbolic AI\* provides one of the most coherent and practically promising technical foundations for this strategy\. In particular, we describe certain technical capabilities provided by neurosymbolic AI, including knowledge integration, conceptual alignment, modifiability, and structured generalization, and argue that these capabilities are crucial for building AI that is trustworthy and deployable by design\.

## Online Localized Conformal Prediction

**Authors:** Yuheng Lai; Garvesh Raskutti

**ID:** 148737 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vPeDJdLEKg>) | [PDF](<https://openreview.net/pdf?id=vPeDJdLEKg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148737>)

Conformal prediction is a framework that provides valid uncertainty quantification for general models with exchangeable data\. However, in the online learning and time\-series settings, exchangeability is not satisfied\. Existing online conformal methods, such as adaptive conformal inference \(ACI\), can achieve long\-run validity, yet they remain inefficient under covariate heterogeneity because they rely on global calibration\. We propose \*Online Localized Conformal Prediction \(OLCP\)\*, which combines online adaptation with covariate\-dependent localization to better reflect heterogeneity\. To reduce sensitivity to the localization bandwidth, we further develop \*OLCP\-Hedge\*, which performs bandwidth selection as an online expert aggregation problem using a constrained online convex optimization framework\. Importantly, we provide coverage guarantees for both algorithms and demonstrate through simulations and real\-data experiments that the proposed methods attain valid long\-run coverage with narrower prediction intervals than existing baselines\.

## QUTCC: Quantile Uncertainty Training and Conformal Calibration for Imaging Inverse Problems

**Authors:** Cassandra T Ye; Shamus Li; Tyler King; Kristina Monakhova

**ID:** 150551 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hIqpI82zrU>) | [PDF](<https://openreview.net/pdf?id=hIqpI82zrU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150551>)

_Abstract unavailable from the accessible public sources._

## How Hard is it to Rig a Benchmark? A Social Choice Analysis of Leaderboard Robustness

**Authors:** Polina Gordienko; Georg Schollmeyer; Frauke Kreuter; Christoph Jansen

**ID:** 152232 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UZc9h8y5AP>) | [PDF](<https://openreview.net/pdf?id=UZc9h8y5AP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152232>)

_Abstract unavailable from the accessible public sources._

## Learning Joint Semantic\-Geometric Uncertainty for Structured Prediction with Closed\-Loop Calibration

**Authors:** Bohan Li; Rui Leng; Qi Ma; Shaoyuan Mo; Ke Wang

**ID:** 149933 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m5NZKzLOY2>) | [PDF](<https://openreview.net/pdf?id=m5NZKzLOY2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149933>)

_Abstract unavailable from the accessible public sources._

## Harmless in Pieces, Harmful in Motion: Detecting Multi\-Agent Jailbreaks

**Authors:** Vishal Pramanik; Maisha Maliha; Olivera Kotevska; Nathaniel D Bastian; Susmit Jha; Sumit Kumar Jha

**ID:** 153984 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H4BgVHh3ID>) | [PDF](<https://openreview.net/pdf?id=H4BgVHh3ID>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153984>)

_Abstract unavailable from the accessible public sources._

## SPANUQ: Span\-Level Uncertainty Quantification for Large Language Model Generation

**Authors:** Yimeng Zhang; Yingying Zhuang; Ziyi Wang; Yuxuan Lu; Pei Chen; Aman Gupta; Zhe Su; Ming Tan; Zhilin Zhang; Qun Liu; Manikandarajan Ramanathan; Rajashekar Maragoud; Edward Vul; Jing Huang; Dakuo Wang

**ID:** 150088 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kn5hr1973d>) | [PDF](<https://openreview.net/pdf?id=kn5hr1973d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150088>)

_Abstract unavailable from the accessible public sources._

## Tatemae: Detecting Alignment Faking via Tool Selection in LLMs

**Authors:** Matteo Leonesi; Francesco Belardinelli; Flavio Corradini; Marco Piangerelli

**ID:** 153416 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LUX7b68Mpp>) | [PDF](<https://openreview.net/pdf?id=LUX7b68Mpp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153416>)

_Abstract unavailable from the accessible public sources._

## CaMeLs Can Use Computers Too: System\-level Security for Computer Use Agents

**Authors:** Hanna Foerster; Tom Blanchard; Kristina Nikolić; I Shumailov; Cheng Zhang; Robert Mullins; Nicolas Papernot; Florian Tramer; Yiren Zhao

**ID:** 155134 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=86w8zzGKec>) | [PDF](<https://openreview.net/pdf?id=86w8zzGKec>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155134>)

_Abstract unavailable from the accessible public sources._

## Train\-free Data Poisoning Attack against Retrieval\-augmented Diffusion Models

**Authors:** XINQI LYU; Yihao LIU; Yiming Cao; Bin Xiao

**ID:** 153591 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KHYdVtL89T>) | [PDF](<https://openreview.net/pdf?id=KHYdVtL89T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153591>)

_Abstract unavailable from the accessible public sources._

## A Kernel Nonconformity Score for Multivariate Conformal Prediction

**Authors:** Louis Meyer; Wenkai Xu

**ID:** 151235 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=btzP5Ir75f>) | [PDF](<https://openreview.net/pdf?id=btzP5Ir75f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151235>)

Multivariate conformal prediction requires nonconformity scores that compress residual vectors into scalars while preserving certain implicit geometric structure of the residual distribution\. We introduce a Multivariate Kernel Score \(MKS\) that produces prediction regions that explicitly adapt to this geometry\. We show that the proposed score resembles the Gaussian process posterior variance, unifying Bayesian uncertainty quantification with the coverage guarantees of frequentist\-type\. Moreover, the MKS can be decomposed into an anisotropic Maximum Mean Discrepancy \(MMD\) that interpolates between kernel density estimation and covariance\-weighted distance\. We prove finite\-sample coverage guarantees and establish convergence rates that depend on the effective rank of the kernel\-based covariance operator rather than the ambient dimension, enabling dimension\-free adaptation\. On regression tasks, the MKS reduces the volume of prediction regions significantly, compared to ellipsoidal baselines while maintaining nominal coverage, with larger gains at higher dimensions and tighter coverage levels\.

## Even Sailors Need Calm Seas: Taming the Geometry of VLMs for Fast Adversarial Fine\-Tuning

**Authors:** Yuqing Wen; Junhao Dong; Ting Peng; Xudong Zhang; Jiaming Zhang; Weiming Liu; Zhengtao Yao; Xinghua Qu; Yew Soon Ong

**ID:** 150866 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=elpJhhSIEj>) | [PDF](<https://openreview.net/pdf?id=elpJhhSIEj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150866>)

Vision\-Language Models \(VLMs\) such as CLIP have demonstrated strong performance across tasks yet remain highly vulnerable to adversarial attacks\. While adversarial fine\-tuning has been demonstrated to be effective against such malicious inputs, its multi\-step adversary generation scheme during fine\-tuning further induces prohibitive computational costs for VLM backbones\. Previous works in unimodal models have introduced single\-step strategies to reduce this burden\. However, we find naive single\-step strategies fail on VLMs due to more severe catastrophic overfitting\. In addition, we identify a novel failure mode termed \*Perturbation Radius Overfitting\*, where VLMs overfit to the specific training attack budget while paradoxically becoming fragile to weaker perturbations\. We trace these failures to growing angular misalignment and magnitude surge of the local gradients, which compromise the local linearity essential for accurate single\-step approximation\. Guided by this analysis, we introduce a joint adversarial optimization scheme that actively rectifies the local geometry by suppressing both angular misalignment and magnitude surge along the perturbation path\. Our approach consistently outperforms existing single\-step methods across various datasets and VLM architectures, achieving state\-of\-the\-art robustness while preserving efficiency\. To our knowledge, this is the first work to systematically examine single\-step adversarial fine\-tuning on VLMs and establish the geometric foundations of their robustness\.

## Cognitive Firewalls: A Synthetic Account of Cross\-Lingual Reasoning Collapse

**Authors:** Jou Barzdukas; Paulius Rauba; Julian Schulz; Jack Peck; Steven Basart; Lennie Wells

**ID:** 153873\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153873

[Paper](<https://openreview.net/forum?id=I7DeL1MXJc>) | [PDF](<https://openreview.net/pdf?id=I7DeL1MXJc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153873>)

The reasoning capabilities of large language models are reported to drop sharply when they are forced to think in heavily regulated target languages such as Chinese — a phenomenon the literature attributes to data imbalance, multilingual transfer failures, or, more recently, RL\-induced cross\-lingual collapse\. We propose and test an alternative mechanistic account: that the gap reflects RL\-induced selection between conditional policies sharing the same parameters, rather than a loss of underlying capability\. We construct a model organism for this account\. Two policies — identified solely by the language of an unsupervised chain of thought — are installed via SFT on disjoint splits of ARC\-Challenge, with one policy trained to answer and the other to refuse on each split\. Reinforcement learning with a final\-answer reward, restricted to one split, drives the language of reasoning to collapse onto the rewarded policy across both splits, producing a 67% → 10% accuracy collapse on the held\-out split despite no reward signal ever observing it\. General capability is unaffected: MMLU accuracy is 71\.2% before and after RL\. A depth\-wise activation steering intervention then recovers held\-out accuracy from 0% to 85% on the worst\-case slice \(Chinese\-CoT completions\) while preserving Chinese as the surface chain\-of\-thought language and leaving the rewarded policy intact \(83% vs\. 94% unsteered\)\. The capability was never lost; it was gated\. To the extent deployed regulated\-language models contain analogous structure, surface evaluations of such models will systematically understate capability hidden behind learned policy gates\.

## Conformal Agent Error Attribution

**Authors:** Naihe Feng; Yi Sui; Shiyi Hou; Ga Wu; Jesse Cresswell

**ID:** 150722\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150722

[Paper](<https://openreview.net/forum?id=fvwWOlglCS>) | [PDF](<https://openreview.net/pdf?id=fvwWOlglCS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150722>)

When multi\-agent systems \(MAS\) fail, identifying where the decisive error occurred is the first step for automated recovery to an earlier state\. Error attribution remains a fundamental challenge due to the long interaction traces that large language model\-based MAS generate\. This paper presents a framework for error attribution based on conformal prediction \(CP\) which provides finite\-sample, distribution\-free coverage guarantees\. We introduce new algorithms for filtration\-based CP designed for sequential data such as agent trajectories\. Unlike existing CP algorithms, our approach predicts sets that are contiguous sequences to enable efficient recovery and debugging\. We verify our theoretical guarantees on a variety of agents and datasets, show that errors can be precisely isolated, then use prediction sets to rollback MAS to correct their own errors\. Our overall approach is model\-agnostic, and offers a principled uncertainty layer for MAS error attribution\.

## Consistency\-Verified Backdoor Defense for Federated Graph Learning via Cross\-Layer Drift

**Authors:** Yanwen Jia; Yinuo Zhang; Zitong Shi; Yuxin Wu; Zihan Tan; Xuankun Rong; Liangtao Zheng; Wenke Huang; Mang Ye

**ID:** 152211\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152211

[Paper](<https://openreview.net/forum?id=UjxaVYw25d>) | [PDF](<https://openreview.net/pdf?id=UjxaVYw25d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152211>)

Federated graph learning \(FGL\) enables privacy\-preserving collaborative training over distributed graph data, yet remains vulnerable to backdoor attacks from malicious clients\. In FGL, data and structural heterogeneity make benign clients difficult to distinguish from malicious ones, posing a key challenge to reliable defense\. We propose VeriDrift, a backdoor defense framework for FGL based on cross\-layer drift and consistency verification\. On the client side, VeriDrift derives a client\-level risk score from node\-level cross\-layer drift anomalies during GNN propagation\. On the server side, VeriDrift verifies the consistency between the reported risk and the submitted model update, and converts the resulting verified risk into aggregation weights to suppress suspicious updates\. Without relying on auxiliary clean data, VeriDrift enables reliable risk assessment under heterogeneous FGL and improves robustness against adaptive attacks\. Extensive experiments show that VeriDrift consistently reduces attack success rates across different FGL backdoor settings while maintaining clean accuracy\.

## DocScope: Benchmarking Verifiable Reasoning for Trustworthy Long\-Document Understanding

**Authors:** Xiang Feng; Jiawei Zhou; Zhangfeng Huang; Kewei Wang; Shanshan Ye; Jinxin Hu; Zulong Chen; Yong Luo; Jing Zhang

**ID:** 139349 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V55GtaUSsR>) | [PDF](<https://openreview.net/pdf?id=V55GtaUSsR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139349>)

Evaluating whether Multimodal Large Language Models can produce trustworthy, verifiable reasoning over long, visually rich documents requires evaluation beyond end\-to\-end answer accuracy\. We introduce DocScope, a benchmark that formulates long\-document QA as a structured reasoning trajectory prediction problem: given a complete PDF document and a question, the model outputs evidence pages, supporting evidence regions, relevant factual statements, and a final answer\. We design a four\-stage evaluation protocol—Page Localization, Region Grounding, Fact Extraction, and Answer Verification—that audits each level of the trajectory independently through inter\-stage decoupling, with all judges selected and calibrated via human alignment studies\. DocScope comprises 1,124 questions derived from 273 documents, with all hierarchical evidence annotations completed by human annotators\. We benchmark 6 proprietary models, 12 open\-weight models, and several domain\-specific systems\. Our experiments reveal that answer accuracy cannot substitute for trajectory\-level evaluation: even among correct answers, the highest observed rate of complete evidence chains is only 29\\%\. Across all models, region grounding remains the weakest trajectory stage\. Furthermore, the primary difficulty stems from aggregating evidence dispersed across long distances and multiple document clusters, while an oracle study identifies faithful perception and fact extraction as the dominant capability bottleneck\. Cross\-architecture comparisons further suggest that activated parameter count matters more than total scale\. The benchmark and code will be publicly released\.

## Training ML Models with Predictable Failures

**Authors:** Will Schwarzer; Scott Niekum

**ID:** 149754 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nbRdWENRb8>) | [PDF](<https://openreview.net/pdf?id=nbRdWENRb8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149754>)

Estimating how often an ML model will fail at deployment scale is central to pre\-deployment safety assessment, but a feasible evaluation set is rarely large enough to observe the failures that matter\. Jones et al\. \(2025\) address this by extrapolating from the largest k failure scores in an evaluation set to predict deployment\-scale failure rates\. We give a finite\-k decomposition of this estimator's forecast error and show that it has a built\-in bias toward over\-prediction in the typical case, which is the safety\-favorable direction\. This bias is offset when the evaluation set misses a rare high\-failure mode that the deploy set contains, leaving the forecast to under\-predict at deployment scale\. We propose a fine\-tuning objective, the forecastability loss, that addresses this failure mode\. In two proof\-of\-concept experiments, a language\-model password game and an RL gridworld, fine\-tuning substantially reduces held\-out forecast error while preserving primary\-task capability and achieving safety similar to that of supervised baselines\.

## Can Metadata Fix the Gauge? Calibration Turns Sparse Multi\-Source Learning from Sparse PCA into Sparse Mean Recovery

**Authors:** Yibo Zhou; Yirong Xiang

**ID:** 152833 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Q5Hpa44zeJ>) | [PDF](<https://openreview.net/pdf?id=Q5Hpa44zeJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152833>)

Source labels tell us where a sample came from, but not how that source oriented its coordinates\. In a sparse Gaussian multi\-source model with source\-specific sign gauges, that distinction changes the learning problem\. Without calibration, pooling across sources erases the mean signal, and the source\-labelled experiment reduces to sparse PCA\. With task\-independent relative\-gauge metadata, synchronization aligns sources and the same observations become a sparse mean problem\. We formalize the value of metadata through aligned mass, which quantifies how much first\-order signal a metadata\-induced alignment restores\. Source labels create only limited aligned mass, whereas valid calibration can create aligned mass proportional to the full sample size\. This yields a statistical separation in micro\-source regimes and, under standard sparse\-PCA hardness assumptions, a computational separation as well\. Experiments confirm the predicted phase transition, the failure of invalid metadata, reuse of one calibration graph across many tasks, and controlled real\-feature settings with imposed source gauges\.

## Sample Transform Cost\-Based Training\-Free Hallucination Detector for Large Language Models

**Authors:** Zeyang Ding; Xinglin Hu; Jicong Fan

**ID:** 154259 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F6wp9J9jVl>) | [PDF](<https://openreview.net/pdf?id=F6wp9J9jVl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154259>)

Hallucinations remain a major barrier to the trustworthy deployment of large language models \(LLMs\)\. We study hallucination detection from the perspective of prompt\-conditioned response distributions\. For a fixed prompt, an LLM induces a distribution over possible responses; when the model is uncertain or hallucinates, this distribution often becomes more complex and less internally consistent\. However, this distribution is unknown, and its samples are variable\-length token sequences rather than fixed\-dimensional points, making direct complexity estimation difficult\. To address this challenge, we propose a training\-free detector based on sample\-to\-sample transform costs in representation space\. Specifically, we represent each sampled response as an empirical distribution over generated\-token hidden embeddings and compute pairwise Wasserstein distances between responses\. The resulting Wasserstein distance matrix characterizes the cost structure of transforming one sampled response into another\. From this matrix, we derive two complementary hallucination signals: \\textbf\{AvgWD\}, which measures the average transform cost, and \\textbf\{EigenWD\}, which captures the spectral complexity of the transform\-cost structure\. Importantly, we extend the proposed detector beyond white\-box access by using an accessible auxiliary model to construct representation\-space consistency signals for black\-box LLMs, substantially broadening the practical applicability of our method\. Experiments across five open\-source LLMs and four benchmarks show that AvgWD and EigenWD consistently achieve competitive or superior AUROC compared with strong training\-free uncertainty baselines\. These results suggest that distributional complexity in token\-level representation space provides an effective signal for hallucination detection\.

## Rich Insights from Cheap Signals: Efficient Evaluations via Tensor Factorization

**Authors:** Felipe Maia Polo; Aida Nematzadeh; Virginia Aglietti; Adam Fisch; Isabela Albuquerque

**ID:** 138936 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vQQlWAbobs>) | [PDF](<https://openreview.net/pdf?id=vQQlWAbobs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138936>)

Moving beyond evaluations that collapse performance across heterogeneous prompts toward fine\-grained evaluation at the prompt level, or within relatively homogeneous subsets, is necessary to diagnose generative models' strengths and weaknesses\. Such fine\-grained evaluations, however, suffer from a data bottleneck: human gold\-standard labels are too costly at this scale, while automated ratings are often misaligned with human judgment\. To resolve this challenge, we propose a novel statistical model based on tensor factorization that merges cheap autorater data with a limited set of human gold\-standard labels\. Specifically, our approach uses autorater scores to pretrain latent representations of prompts and generative models, and then aligns those pretrained representations to human preferences using a small calibration set\. This sample\-efficient methodology is robust to autorater quality, more accurately predicts human preferences on a per\-prompt basis than standard baselines, and provides tight confidence intervals for key statistical parameters of interest\. We also showcase the practical utility of our method by constructing granular leaderboards based on prompt qualities and by estimating model performance solely from autorater scores, entirely eliminating the need for additional human annotations\.

## Exact Unlearning via Quantized Sufficient Statistics

**Authors:** Ami Tavory; Shripad Gade; Tal Sarig; Noam Touitou; Ido Guy

**ID:** 152457\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152457

[Paper](<https://openreview.net/forum?id=SyxiOl962F>) | [PDF](<https://openreview.net/pdf?id=SyxiOl962F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152457>)

Exact machine unlearning guarantees that after deleting a user's data, the model produces the same predictions as if it had never seen that data in the first place\. SISA, the current state\-of\-the\-art approach, partitions data into disjoint shards, with necessary $O\(n/S\)$ retraining cycle for each deletion, and it cannot lower this cost through redundancy, because overlapping shards only multiply the damage\.We introduce Quantized Sufficient Statistics \(QSS\), a non\-parametric framework that pairs frozen prediction heads \(the schema, trained on a small random subset $\\mathcal\{D\}^\{\\circ\}$\) with mutable sum\-decomposable accumulators indexed by Residual Quantization codes over the complementary data \(the content, $\\mathcal\{D\} \\setminus \\mathcal\{D\}^\{\\circ\}$\)\. With probability $1\{\-\}\\rho$ \(where $\\rho = \|\\mathcal\{D\}^\{\\circ\}\|/n$, typically $\\leq 1\\%$\), deletion reduces to a constant\-time arithmetic update independent of dataset size $n$; with probability $\\rho$, a full rebuild is required\. Maintaining $p$ independent schemas suppresses the synchronous rebuild probability to $\\rho^p$, and because every schema aggregates all data, decommissioning incurs zero accuracy loss\. Across 15 datasets \($n \\geq 50$K\) spanning vision, text, and tabular modalities at $\\rho=0\.5\\%$, QSS matches or exceeds SISA accuracy on 5 datasets, trails by $\\leq 2$ pp on 5 more, and by 3–11 pp on 3 datasets where high class count or large rebuild cost limits performance, while delivering 3–645$\\times$ faster median expected deletion \(e\.g\., 0\.2 s expected vs\. 109 s on Jigsaw, $n=1\.4$M\)\.

## Alleviating Hallucination with Training\-Free Uncertainty\-Guided Steering

**Authors:** Litian Liu; Yubing Jian; Qiqi Hou; Reza Pourreza; Mohammad Ghavamzadeh; Yao Qin; Roland Memisevic; Herbert Cai

**ID:** 148795\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148795

[Paper](<https://openreview.net/forum?id=v2TDfSvdkb>) | [PDF](<https://openreview.net/pdf?id=v2TDfSvdkb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148795>)

Recent work on hallucination detection in large language models has shown that, for a fixed pre\-trained model    and reasoning task, it is possible to estimate the model’s confidence in the correctness of its outputs\.    Such uncertainty estimates have primarily been used to improve truthfulness by detecting or filtering confabulations\.    In this work, we ask whether these signals can instead be used more proactively to directly improve the accuracy    of model\-generated answers\.   We propose USteer, a simple, training\-free steering mechanism that adjusts a model’s layer\-wise activations during inference    using the gradient of a confidence with respect to the activations\. This procedure nudges generation toward outputs    with lower uncertainty at inference time, without modifying model parameters or requiring additional    supervision\. We show that this approach consistently reduces hallucination across a range of tasks,    demonstrating that confidence signals can be leveraged not only for detection, but also for effective    inference\-time control of model behavior\.

## Efficient Analytic Uncertainty Quantification for Multimodal Regression

**Authors:** Kun Jin; James Harrison; Jiawei Li; Sihan Liu; Jiayi Liu; Randy Linderman; Yuening Li; Arnab Bhadury; Sourabh P Bansod; Liang Liu; Jasper Snoek

**ID:** 153892 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HwWUMaIRkr>) | [PDF](<https://openreview.net/pdf?id=HwWUMaIRkr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153892>)

_Abstract unavailable from the accessible public sources._

## Persuasive Prediction via Decision Calibration

**Authors:** Jingwu Tang; Jiahao Zhang; Fei Fang; Steven Wu

**ID:** 152558\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152558

[Paper](<https://openreview.net/forum?id=SEBdVdqbdq>) | [PDF](<https://openreview.net/pdf?id=SEBdVdqbdq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152558>)

Bayesian persuasion, a central model in information design, studies how a sender, who privately observes a state drawn from a prior distribution, strategically sends a signal to influence a receiver's action\. A key assumption is that both sender and receiver share the precise knowledge of the prior\. Although this prior can be estimated from past data, such assumptions break down in high\-dimensional or infinite state spaces, where learning an accurate prior may require a prohibitive amount of data\. In this paper, we study a learning\-based variant of persuasion, which we term persuasive prediction\. This setting mirrors Bayesian persuasion with large state spaces, but crucially does not assume a common prior: the sender observes covariates $X$, learns to predict a payoff\-relevant outcome $Y$ from past data, and releases a prediction to influence a population of receivers\. To model rational receiver behavior without a common prior, we adopt a learnable proxy: \*decision calibration\*, which requires the prediction to be unbiased conditioned on the receiver's best response to the prediction\. This condition guarantees that myopically responding to the prediction yields no swap regret\. Assuming the receivers best respond to decision\-calibrated predictors, we design a provably efficient algorithm that learns a decision\-calibrated predictor within a randomized predictor class that optimizes the sender's utility\. In the commonly studied single\-receiver case, our method matches the utility of a Bayesian sender who has full knowledge of the underlying prior distribution\. Finally, we extend our algorithmic result to a setting where receivers respond stochastically to predictions and the sender may randomize over an infinite predictor class\.

## Rethinking Psychometric Evaluation of LLMs: When and Why Self\-Reports Predict Behavior

**Authors:** Rafal Kocielnik; Pengrui Han; Peiyang Song; Myrl Marmarelis; Ramit Debnath; Dean Mobbs; Animashree Anandkumar; R\. Michael Alvarez

**ID:** 150039 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lEX44N0oQW>) | [PDF](<https://openreview.net/pdf?id=lEX44N0oQW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150039>)

Anticipating LLM behavioral tendencies from low\-cost psychometric probes is critical for safe deployment, but only if self\-reports \(SR\) reliably predict behavior\. Recent work documented substantial SR–behavior dissociation in LLMs, but relied on broad personality traits \(Big 5\) that predict specific behaviors weakly even in humans\. Furthermore, the isolation of conversational sessions combined with weak context matching left open whether LLMs truly lack coherence or whether the conditions needed to detect such coherence were not met\. We contrast Big 5 with the Theory of Planned Behavior \(TPB\), which measures intention targeted to a specific behavior and predicts human behavior substantially better than broad traits\. We run experiments across four behavioral tasks and 11 frontier LLMs, while also varying session context and identity induction\. We find that SR–behavior coherence exists but is selective\. 1\) Within a shared conversation, Theory of Planned Behavior reaches human\-level coherence; Big 5 does not\. 2\) Across separate conversations, coherence survives only for behaviors anchored outside the immediate prompt, such as implicit bias shaped by training, and collapses when behavior is strongly primed by context, as with sycophancy\. 3\) Persona prompting makes self\-reports more consistent across conversations but does not bring behavior into alignment\. These findings suggest that coarse personality frameworks such as Big 5 may not be the best tools for testing deployment behavior\. More task\- and behavior\-specific instruments are needed, and even these must be evaluated across tasks and contexts\.

## Memory Inception: Latent\-Space KV Cache Manipulation for Steering LLMs

**Authors:** Zeyi \(Andy\) Liu; Michael Zhang; Ilana Greenberg; Adam Alnasser; Lucas Baker; John Sous

**ID:** 151646 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z45sLXr4O9>) | [PDF](<https://openreview.net/pdf?id=Z45sLXr4O9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151646>)

_Abstract unavailable from the accessible public sources._

## Sample Transform Cost\-Based Training\-Free Hallucination Detector for Large Language Models

**Authors:** Zeyang Ding; Xinglin Hu; Jicong Fan

**ID:** 154259\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154259

[Paper](<https://openreview.net/forum?id=F6wp9J9jVl>) | [PDF](<https://openreview.net/pdf?id=F6wp9J9jVl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154259>)

Hallucinations remain a major barrier to the trustworthy deployment of large language models \(LLMs\)\. We study hallucination detection from the perspective of prompt\-conditioned response distributions\. For a fixed prompt, an LLM induces a distribution over possible responses; when the model is uncertain or hallucinates, this distribution often becomes more complex and less internally consistent\. However, this distribution is unknown, and its samples are variable\-length token sequences rather than fixed\-dimensional points, making direct complexity estimation difficult\. To address this challenge, we propose a training\-free detector based on sample\-to\-sample transform costs in representation space\. Specifically, we represent each sampled response as an empirical distribution over generated\-token hidden embeddings and compute pairwise Wasserstein distances between responses\. The resulting Wasserstein distance matrix characterizes the cost structure of transforming one sampled response into another\. From this matrix, we derive two complementary hallucination signals: \\textbf\{AvgWD\}, which measures the average transform cost, and \\textbf\{EigenWD\}, which captures the spectral complexity of the transform\-cost structure\. Importantly, we extend the proposed detector beyond white\-box access by using an accessible auxiliary model to construct representation\-space consistency signals for black\-box LLMs, substantially broadening the practical applicability of our method\. Experiments across five open\-source LLMs and four benchmarks show that AvgWD and EigenWD consistently achieve competitive or superior AUROC compared with strong training\-free uncertainty baselines\. These results suggest that distributional complexity in token\-level representation space provides an effective signal for hallucination detection\.

## Conformal Prediction for Time\-Dependent PDEs

**Authors:** Joshua Stiller; Annika Schneider; Eyke Hüllermeier

**ID:** 150920 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eOMQpbl25E>) | [PDF](<https://openreview.net/pdf?id=eOMQpbl25E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150920>)

Uncertainty quantification is crucial in scientific machine learning, where models inform safety\-critical tasks such as flood forecasting, financial risk management, and thermal control in machines\. Conformal prediction provides distribution\-free coverage guarantees, but in time\-dependent settings common to physics and engineering, these guarantees can break down, leading to systematic undercoverage\. We study this problem in the context of surrogate models for time\-dependent physical systems described by partial differential equations\. We prove that in a function space setting, distributions at arbitrarily close times can be mutually singular, making exact coverage guarantees impossible\. We further show that in discretized settings, the total variation distance between distributions often grows exponentially with the grid resolution mandating restrictions on the spatial discretization to ensure coverage\. Finally, for certain settings, we show how to use principled weighted conformal prediction to obtain finite\-sample coverage guarantees over growing time horizons\.

## Learning Global Temporal Dynamics in Sparse Networks via Cycle Counts

**Authors:** Xinyuan Fan; Dong Huang; Tianpai Luo; Pengkun Yang; Weichi Wu

**ID:** 149950 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lybAtXLgRc>) | [PDF](<https://openreview.net/pdf?id=lybAtXLgRc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149950>)

Statistical modeling and inference for temporal networks are increasingly important across modern applications, yet remain challenging in the sparse regime with evolving network sizes and temporal dependence\. We propose a tractable model that captures these key features in a unified framework\. Under this model, we establish geometric ergodicity and characterize the asymptotic behavior of cycle counts\. These counts provide informative low\-order summaries of temporal network dynamics\. Moreover, we develop method\-of\-moments estimators based on cycle counts\. We prove identifiability and uniqueness of the parameter estimates, and establish the strong consistency and asymptotic normality\. To support uncertainty quantification, we further propose a simulation\-based plug\-in estimator of the asymptotic variance\. Extensive simulations and a real data example demonstrate that our methods are accurate and effective for sparse, size\-varying temporal networks\.

## Making Open\-Source Text LLM Watermarks Durable Against Merging

**Authors:** Luisa Scharff; Thibaud Gloaguen; Robin Staab; Martin Vechev

**ID:** 155690 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3fkF2rVnDA>) | [PDF](<https://openreview.net/pdf?id=3fkF2rVnDA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155690>)

_Abstract unavailable from the accessible public sources._

## CausalConflictBench: Can Multimodal Models Follow Local Mechanisms That Conflict with Commonsense?

**Authors:** Bo Tian; Jianfeng Qu; Peng\-Fei Zhang; Siyu Li; Zhixu Li; Kaiye Yu

**ID:** 139553 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IzbN000ZNL>) | [PDF](<https://openreview.net/pdf?id=IzbN000ZNL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139553>)

_Abstract unavailable from the accessible public sources._

## MOSAIC\-Bench: Measuring Compositional Vulnerability Induction in Coding Agents

**Authors:** Jonathan Steinberg; Oren Gal

**ID:** 139179 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g9BxvmeCLK>) | [PDF](<https://openreview.net/pdf?id=g9BxvmeCLK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139179>)

Coding agents often pass per\-prompt safety review yet ship exploitable code when their tasks are decomposed into routine engineering tickets\. The challenge is structural: existing safety alignment evaluates overt requests in isolation, leaving models blind to malicious end\-states that emerge from sequenced compliance with innocuous\-looking requests\. We introduce MOSAIC\-Bench \(Malicious Objectives Sequenced As Innocuous Compliance\), a benchmark of 199 three\-stage attack chains paired with deterministic exploit oracles on deployed software substrates \(10 web\-application substrates, 31 CWE classes, 5 programming languages\) that treats both exploit ground truth and downstream reviewer protocol as first\-class evaluation axes\. On this benchmark, nine production coding agents from Anthropic, OpenAI, Google, Moonshot, Zhipu, and Minimax compose innocuous tickets at 53–86% end\-to\-end ASR with only two refusals across all staged runs\. In a matched direct\-prompt experiment over four frontier Claude/Codex agents, vulnerable\-output rates fall to 0–20\.4%: Claude primarily refuses, while Codex primarily hardens rather than emitting the vulnerable implementation — ticket staging silences both defense modes simultaneously\. Downstream, code reviewer agents approve 25\.8% of these confirmed\-vulnerable cumulative diffs as routine PRs, and a full\-context implementation protocol closes only ∼50% of the staged/direct gap, ruling out context fragmentation as the sole explanation\. As a deployable but non\-adaptive mitigation, reframing the reviewer as an adversarial pentester reduces evasion across the evaluated reviewer subset; pentester\-framed evasion ranges from 3\.0% to 17\.6%, and an open\-weight Gemma\-4\-E4B\-it reviewer under this framing detects 88\.4% of attacks on the dataset with a 4\.6% false\-positive rate measured on 608 real\-world GitHub PRs\. We publicly release our dataset at https://huggingface\.co/datasets/MosaicBenchmark/mosaic\-bench, and a verifiable and adaptable evaluation framework at https://github\.com/mosaic\-benchmark/mosaic\-benchmark\.

## Fine\-tuning Does Not Reach All: Uneven Safety and Knowledge Dynamics in Language Models

**Authors:** Ziwei Wang; Xinwei Guo; Jiaxin Zhang; Guanhua Chen; Haiyan Wu; Xiangyu Zhao; Lei Ma; Xin Yao; Shan He; Xuetao Wei

**ID:** 155221 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7MsNSkqKWp>) | [PDF](<https://openreview.net/pdf?id=7MsNSkqKWp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155221>)

Fine\-tuning is widely used to align large language models \(LLMs\) with desired behavioral norms such as safety, yet it is typically evaluated using aggregate metrics that assume uniform improvements across the model\. However, fine\-tuning operates within a constrained parameter space, and its entangled effects on localized knowledge remain poorly understood\. To address this, we investigate fine\-tuning at the level of individual knowledge concepts using a controlled framework with representative concepts and paired safe/unsafe samples under varying data compositions\. By jointly analyzing behavioral safety via model outputs and internal knowledge accessibility via perplexity, we obtain a unified view of how knowledge is modified and expressed\. Our results reveal that fine\-tuning does not uniformly improve safety\. Instead, it \(1\) exhibits strong concept\-level heterogeneity, including persistent low\-safety concepts and robustly safe concepts with clear domain specificity; \(2\) improves safe–unsafe discrimination on average, but coexists with familiarity on both safe and unsafe content or even loses previously learned safe knowledge; and \(3\) decouples internal knowledge from external behavior, as changes in familiarity do not reliably translate into safer outputs, especially due to early\-stage disruption of existing safety structures\. Our findings position consistency as a distinct objective beyond conventional aggregate safety and demonstrate that reducing unsafe knowledge exposure under uniform concept\-level coverage actively homogenizes safety distributions across model knowledge, offering a principled path toward alignment that is not merely effective on average, but uniformly reliable, predictable, and robust across knowledge concepts\.

## Knowing When Multivariate Forecasts Are Wrong

**Authors:** Binli Luo; Ning Gui; Xianhan Tan

**ID:** 154761 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B9zr3wpMiV>) | [PDF](<https://openreview.net/pdf?id=B9zr3wpMiV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154761>)

At deployment, a multivariate forecaster may expose only a recent input window and a frozen point prediction, with no access to ground truth, calibration residuals, repeated inference, or model internals\. We study deployment\-constrained forecast risk localization: ranking future timesteps by likely error before they are observed\. We introduce SubDx, a zero\-parameter diagnostic that audits the forecast against the local cross\-channel subspace of the input history\. Each predicted channel vector receives an off\-subspace residual score, computed with no labels, no learned parameters, and less than 1% runtime overhead on Traffic\. Under a linear factor model, we derive closed\-form score distributions and a two\-population AUROC expression showing how heterogeneous off\-subspace error visibility makes the ranking identifiable\. On Traffic \(N=862\), SubDx reaches within\-horizon AUROC 0\.90 and reduces MSE by 62% at 50% coverage; on Solar \(N=137\), it reaches AUROC 0\.85 with 67% MSE reduction\. The same post\-hoc score applies to frozen pretrained forecasters, with Chronos reaching AUROC 0\.838 on Traffic without fine\-tuning\. Across trained backbones, pretrained models, and synthetic controls, the results show that local cross\-channel consistency can provide a practical abstention signal for redundant multivariate systems\.

## Exposing Private Corpus Leakage in  Multimodal RAG

**Authors:** Yihao LIU; XINQI LYU; Dong Wang; Bin Xiao

**ID:** 154898 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A69wmC5lPE>) | [PDF](<https://openreview.net/pdf?id=A69wmC5lPE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154898>)

Multimodal Retrieval\-Augmented Generation \(RAG\) helps mitigate hallucinations in Vision\-Language Models \(VLMs\) by grounding generations in external knowledge bases\. However, this externalized memory also introduces privacy risks, as external queries may reveal signals about sensitive visual records in the retrieval corpus, such as medical images, scanned contracts, and proprietary business documents\. This exposes a retrieval\-corpus privacy risk: private records may be detectable through interactions with multimodal RAG systems\. To study this risk, we propose the Semantic Degradation Attack \(SDA\), a two\-query method for exposing private corpus leakage in multimodal RAG by testing how strongly generated responses depend on retrieved evidence\. SDA constructs transferable retrieval\-disrupting perturbations using local surrogate visual encoders\. By measuring the drop in the semantic similarity of the VLM's generated descriptions before and after perturbation, SDA can distinguish whether a target image\-caption record exists in the private retrieval corpus\. Extensive experiments demonstrate that SDA consistently detects private corpus leakage more effectively than existing baselines on two image\-caption datasets across five popular VLMs\.

## HalluWorld: A Controlled Benchmark for Hallucination via Reference World Models

**Authors:** Emmy Liu; Varun Gangal; Michael Yu; Zhuofu Tao; Karan Singh; Sachin Kumar; Steven Y\. Feng

**ID:** 139204 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ejdHPDvwXJ>) | [PDF](<https://openreview.net/pdf?id=ejdHPDvwXJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139204>)

Hallucination remains a central failure mode of large language models, but existing benchmarks operationalize it inconsistently across tasks such as summarization, question answering, retrieval\-augmented generation, and agentic interaction\. This fragmentation makes it unclear whether a mitigation that works in one setting actually reduces hallucinations across contexts\. Current hallucination benchmarks either require human annotation and fixed references that may eventually be memorized, or rely on naturalistic observations which are often recorded in settings that are difficult to reproduce or test systematically\. To enable further research on the root causes of hallucination, we introduce HalluWorld, an extensible benchmark framework grounded in an explicit reference\-world formulation: a model hallucinates when it produces an observable claim that is false with respect to this reference world\. Building on this view, we construct a family of synthetic and semi\-synthetic benchmark environments in which the reference world is fully specified, the model's observable view is controlled, and hallucination labels can be generated automatically by construction\. HalluWorld spans multiple settings that are classically representative for AI, i\.e\., gridworlds, chess, and realistic terminal tasks\. This enables controlled variation of key factors such as world complexity, observability, temporal change, and source\-conflict policy, allowing us to disentangle hallucinations into more fine\-grained error categories\. We evaluate frontier and open\-weight language models across these settings and find consistent patterns across domains: perceptual hallucination on directly observed information is near\-solved for frontier models, while multi\-step state tracking and causal forward simulation are still difficult for frontier models, and are not generally solved by extended thinking\. In the terminal setting specifically, models also struggle with when to abstain from answering\. The uneven profile of failures across probe types and domains suggest that different hallucinations arise from qualitatively distinct failure modes rather than reflecting a single underlying capability\. Our results suggest that controlled reference worlds offer a scalable and reproducible path toward measuring and reducing hallucinations in modern language models\.

## Your Neighbors Know: Leveraging Local Neighborhoods for Backdoor Detection in Decentralized Learning

**Authors:** Sayan Biswas; Antoine Boutet; Davide Frey; Romaric Gaudel; Rachid Guerraoui; Maxime Jacovella; Anne\-marie Kermarrec; Dimitri Lerévérend; Francois Taiani; Martijn De Vos

**ID:** 153707 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JN1THG4T7h>) | [PDF](<https://openreview.net/pdf?id=JN1THG4T7h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153707>)

Decentralized learning \(DL\) is an emerging machine learning paradigm where nodes collaboratively train models without a central server\. However, the collaborative nature of DL makes it vulnerable to backdoor attacks, where a model is taught to behave normally on standard inputs while executing hidden, malicious actions when encountering data with specific triggers\. Backdoor attacks in DL remain understudied and existing defenses often overlook DL constraints\. We introduce Argus, a novel backdoor detection framework native to DL that requires neither a central coordinator nor prior knowledge of the trigger\. In Argus, honest nodes locally analyze received model updates to identify potential backdoor triggers\. Nodes then collectively share their triggers with their neighbors and use a structural similarity metric to separate true backdoors from false alarms induced by data heterogeneity\. A key insight is that false positive triggers exhibit inconsistencies across participants while true positive ones show consistent patterns\. Model updates that fail this collaborative test are rejected, and persistently malicious senders are eventually evicted\. We provide the first theoretical convergence guarantees for a DL\-specific backdoor detection mechanism, showing that filtering out suspicious model updates with high probability preserves a convergence rate comparable to standard DL\. We implement and evaluate Argus on three standard datasets and against three state\-of\-the\-art baselines\. Across settings, Argus reduces attack success rates by up to 90 points compared to no defense, while preserving model utility within 5 percentage points of an omniscient oracle\. Furthermore, the effectiveness of Argus compared to baselines improves as data heterogeneity increases\.

## Honeyval: A Comprehensive Evaluation Framework for LLM\-powered HTTP Honeypots

**Authors:** Mark Vero; Fabian Kaczmarczyck; Ivan Petrov; I Shumailov; Niels Heinen; Jamie Hayes; Tianqi Fan; Luca Invernizzi; Martin Vechev

**ID:** 139314 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XvDLyFw8OO>) | [PDF](<https://openreview.net/pdf?id=XvDLyFw8OO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139314>)

LLMs increasingly serve as simulation engines for honeypots\. They enable defenders to construct high\-interaction honeypots with virtually no system security risks\. However, LLM\-powered honeypot development lacks a unified evaluation framework and protocol\. Most evaluations consist of response similarity measurements against a fixed set of commands, manual testing, or online deployment\. These evaluation methods are often not scalable for development, reproducible across evaluations, representative of practical attacks, and adaptable to various attacker and honeypot configurations\. In this work, we bridge this gap and propose Honeyval, a comprehensive evaluation framework for LLM\-powered HTTP honeypots\. We address the limitations of prior evaluations by grounding the honeypots in 16 backend applications, using AI hacking agents as attackers, employing two control tasks to monitor agent and honeypot capabilities across customizations, and defining clear and verifiable exploit goals for the attacker\. Using Honeyval, we conduct an extensive evaluation of recent cost\-efficient LLMs as HTTP honeypots\. Our experiments highlight the promise of LLM\-powered honeypots; they lead to substantially longer interactions with the attacker than rule\-based baseline honeypots and are far less frequently detected even by frontier models, all while preserving a running cost advantage against agentic attackers\. Further, we experiment with different counter\-offensive configurations for the honeypots, and observe unique trade\-offs, such as longer interactions at the cost of increased detection\.

## CLaW: Codec\-Guided Adaptive Latent Watermarking for Traceable Diffusion Image Generation

**Authors:** Huangchao Song; Lingyun Yu; Cong Li; Peiqi Jiang; Mingqi Fang; Hongtao Xie

**ID:** 149791 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nI6z2amVXh>) | [PDF](<https://openreview.net/pdf?id=nI6z2amVXh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149791>)

With the rapid advancement of text\-to\-image diffusion models, increasingly realistic AI\-generated content has raised serious concerns about misuse and copyright infringement\. Digital watermarking offers a promising solution by enabling user\-level traceability, yet existing methods remain difficult to deploy at scale, hindered by costly model retraining or detection, poor effectiveness–fidelity trade\-offs, and limited robustness to image transformations\. To address these challenges, we propose CLaW \(Codec\-guided Latent Watermarking\), a robust and efficient watermarking framework for traceable diffusion image generation with frozen diffusion backbones and inversion\-free detection\. Specifically, CLaW first uses a pretrained watermark codec to map each watermark message to a latent residual, enabling low\-cost sampling\-time injection\. Then, the residual is injected within a late denoising window, where image semantics are better preserved and the watermark signal is less perturbed by subsequent denoising updates, yielding a better balance between watermark effectiveness and image fidelity\. Furthermore, we introduce a decoder\-guided adaptive injection mechanism that uses decoding confidence as feedback to dynamically calibrate watermark strength, reinforcing weak watermark signals and improving robustness under image transformations\. Extensive experiments show that CLaW can preserve visual fidelity and improve average F1 under image transformations, achieving a 6\.34% gain over the state of the art\.

## Cognitive Firewalls: A Synthetic Account of Cross\-Lingual Reasoning Collapse

**Authors:** Jou Barzdukas; Paulius Rauba; Julian Schulz; Jack Peck; Steven Basart; Lennie Wells

**ID:** 153873\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153873

[Paper](<https://openreview.net/forum?id=I7DeL1MXJc>) | [PDF](<https://openreview.net/pdf?id=I7DeL1MXJc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153873>)

The reasoning capabilities of large language models are reported to drop sharply when they are forced to think in heavily regulated target languages such as Chinese — a phenomenon the literature attributes to data imbalance, multilingual transfer failures, or, more recently, RL\-induced cross\-lingual collapse\. We propose and test an alternative mechanistic account: that the gap reflects RL\-induced selection between conditional policies sharing the same parameters, rather than a loss of underlying capability\. We construct a model organism for this account\. Two policies — identified solely by the language of an unsupervised chain of thought — are installed via SFT on disjoint splits of ARC\-Challenge, with one policy trained to answer and the other to refuse on each split\. Reinforcement learning with a final\-answer reward, restricted to one split, drives the language of reasoning to collapse onto the rewarded policy across both splits, producing a 67% → 10% accuracy collapse on the held\-out split despite no reward signal ever observing it\. General capability is unaffected: MMLU accuracy is 71\.2% before and after RL\. A depth\-wise activation steering intervention then recovers held\-out accuracy from 0% to 85% on the worst\-case slice \(Chinese\-CoT completions\) while preserving Chinese as the surface chain\-of\-thought language and leaving the rewarded policy intact \(83% vs\. 94% unsteered\)\. The capability was never lost; it was gated\. To the extent deployed regulated\-language models contain analogous structure, surface evaluations of such models will systematically understate capability hidden behind learned policy gates\.

## Conformal Agent Error Attribution

**Authors:** Naihe Feng; Yi Sui; Shiyi Hou; Ga Wu; Jesse Cresswell

**ID:** 150722\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150722

[Paper](<https://openreview.net/forum?id=fvwWOlglCS>) | [PDF](<https://openreview.net/pdf?id=fvwWOlglCS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150722>)

When multi\-agent systems \(MAS\) fail, identifying where the decisive error occurred is the first step for automated recovery to an earlier state\. Error attribution remains a fundamental challenge due to the long interaction traces that large language model\-based MAS generate\. This paper presents a framework for error attribution based on conformal prediction \(CP\) which provides finite\-sample, distribution\-free coverage guarantees\. We introduce new algorithms for filtration\-based CP designed for sequential data such as agent trajectories\. Unlike existing CP algorithms, our approach predicts sets that are contiguous sequences to enable efficient recovery and debugging\. We verify our theoretical guarantees on a variety of agents and datasets, show that errors can be precisely isolated, then use prediction sets to rollback MAS to correct their own errors\. Our overall approach is model\-agnostic, and offers a principled uncertainty layer for MAS error attribution\.

## Consistency\-Verified Backdoor Defense for Federated Graph Learning via Cross\-Layer Drift

**Authors:** Yanwen Jia; Yinuo Zhang; Zitong Shi; Yuxin Wu; Zihan Tan; Xuankun Rong; Liangtao Zheng; Wenke Huang; Mang Ye

**ID:** 152211\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152211

[Paper](<https://openreview.net/forum?id=UjxaVYw25d>) | [PDF](<https://openreview.net/pdf?id=UjxaVYw25d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152211>)

Federated graph learning \(FGL\) enables privacy\-preserving collaborative training over distributed graph data, yet remains vulnerable to backdoor attacks from malicious clients\. In FGL, data and structural heterogeneity make benign clients difficult to distinguish from malicious ones, posing a key challenge to reliable defense\. We propose VeriDrift, a backdoor defense framework for FGL based on cross\-layer drift and consistency verification\. On the client side, VeriDrift derives a client\-level risk score from node\-level cross\-layer drift anomalies during GNN propagation\. On the server side, VeriDrift verifies the consistency between the reported risk and the submitted model update, and converts the resulting verified risk into aggregation weights to suppress suspicious updates\. Without relying on auxiliary clean data, VeriDrift enables reliable risk assessment under heterogeneous FGL and improves robustness against adaptive attacks\. Extensive experiments show that VeriDrift consistently reduces attack success rates across different FGL backdoor settings while maintaining clean accuracy\.

## DocScope: Benchmarking Verifiable Reasoning for Trustworthy Long\-Document Understanding

**Authors:** Xiang Feng; Jiawei Zhou; Zhangfeng Huang; Kewei Wang; Shanshan Ye; Jinxin Hu; Zulong Chen; Yong Luo; Jing Zhang

**ID:** 139349\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139349

[Paper](<https://openreview.net/forum?id=V55GtaUSsR>) | [PDF](<https://openreview.net/pdf?id=V55GtaUSsR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139349>)

Evaluating whether Multimodal Large Language Models can produce trustworthy, verifiable reasoning over long, visually rich documents requires evaluation beyond end\-to\-end answer accuracy\. We introduce DocScope, a benchmark that formulates long\-document QA as a structured reasoning trajectory prediction problem: given a complete PDF document and a question, the model outputs evidence pages, supporting evidence regions, relevant factual statements, and a final answer\. We design a four\-stage evaluation protocol—Page Localization, Region Grounding, Fact Extraction, and Answer Verification—that audits each level of the trajectory independently through inter\-stage decoupling, with all judges selected and calibrated via human alignment studies\. DocScope comprises 1,124 questions derived from 273 documents, with all hierarchical evidence annotations completed by human annotators\. We benchmark 6 proprietary models, 12 open\-weight models, and several domain\-specific systems\. Our experiments reveal that answer accuracy cannot substitute for trajectory\-level evaluation: even among correct answers, the highest observed rate of complete evidence chains is only 29\\%\. Across all models, region grounding remains the weakest trajectory stage\. Furthermore, the primary difficulty stems from aggregating evidence dispersed across long distances and multiple document clusters, while an oracle study identifies faithful perception and fact extraction as the dominant capability bottleneck\. Cross\-architecture comparisons further suggest that activated parameter count matters more than total scale\. The benchmark and code will be publicly released\.

## Training ML Models with Predictable Failures

**Authors:** Will Schwarzer; Scott Niekum

**ID:** 149754\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149754

[Paper](<https://openreview.net/forum?id=nbRdWENRb8>) | [PDF](<https://openreview.net/pdf?id=nbRdWENRb8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149754>)

Estimating how often an ML model will fail at deployment scale is central to pre\-deployment safety assessment, but a feasible evaluation set is rarely large enough to observe the failures that matter\. Jones et al\. \(2025\) address this by extrapolating from the largest k failure scores in an evaluation set to predict deployment\-scale failure rates\. We give a finite\-k decomposition of this estimator's forecast error and show that it has a built\-in bias toward over\-prediction in the typical case, which is the safety\-favorable direction\. This bias is offset when the evaluation set misses a rare high\-failure mode that the deploy set contains, leaving the forecast to under\-predict at deployment scale\. We propose a fine\-tuning objective, the forecastability loss, that addresses this failure mode\. In two proof\-of\-concept experiments, a language\-model password game and an RL gridworld, fine\-tuning substantially reduces held\-out forecast error while preserving primary\-task capability and achieving safety similar to that of supervised baselines\.

## Hallucination\-Guided Unlearning: Using Hallucination Traces to Reveal Overfitted Memories

**Authors:** Jiayu Zhang; Ziqi Zhong; Yuliang Gai; Canran Xiao

**ID:** 152918\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152918

[Paper](<https://openreview.net/forum?id=PR255SIdSp>) | [PDF](<https://openreview.net/pdf?id=PR255SIdSp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152918>)

Selective unlearning in large language models is increasingly necessary for safety and compliance, yet harmful or memorized content is often latent, entangled, and hard to specify as a clean \`\`forget set\.'' We aim to close this gap by identifying what to forget from the model’s own failure modes rather than relying solely on explicit supervision\. We propose Hallucination\-Guided Unlearning \(HGU\), which treats hallucinations as diagnostic signals: it localizes unsupported spans via evidence and internal consensus, traces a sparse set of high\-responsibility MLP neurons, and edits them with compact gates under a utility\-preserving KL constraint\. Across TOFU, HGU achieves the best MU\-\-FE trade\-off with Avg of 0\.7221 \(forget05\) and 0\.7699 \(forget10\), and it also attains the top SepS H\-Avg \(0\.4382/0\.4715\) under mixed forget/retain prompts; on WMDP auxiliary, it yields the strongest forgetting \(e\.g\., 14\.2 on Economics\) while improving Retain \(52\.7\) and MMLU \(57\.2\)\. These results suggest that reframing hallucinations as actionable traces enables targeted, post\-hoc unlearning that better balances forgetting efficacy and general utility without full retraining\.

## Learning Data\-free Universal Adversarial Perturbation with Hybrid Priors and Gradient\-Guided Sharpness Regularization

**Authors:** Zhi Tan; Jiazheng Cui; Wenwen Zhang; Yiran Liu; Guodong Liu; Chris Ding; Di Ming

**ID:** 155385\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155385

[Paper](<https://openreview.net/forum?id=63Fv6QZl1d>) | [PDF](<https://openreview.net/pdf?id=63Fv6QZl1d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155385>)

Universal adversarial perturbations \(UAPs\) aim to learn a single input\-agnostic perturbation that consistently induces misclassification across diverse inputs, exposing systemic vulnerabilities of deep models\.  To enhance practical applicability, data\-free UAP methods replace real data with samples drawn from handcrafted synthetic priors and optimize UAPs via activation maximization\.  However, existing approaches rely on a single synthetic prior throughout training, which biases optimization toward a narrow feature subspace and necessitates costly per\-prior tuning\. Moreover, the commonly used stochastic gradient ascent \(SGA\) updates are inherently unstable and tend to converge to sharp regions of the loss landscape, weakening black\-box transferability\.  To overcome these limitations, we propose HPSR\-UAP, a data\-free framework that couples hybrid\-prior reweighting with gradient\-guided sharpness regularization\.  Specifically, we develop a dynamic reweighting mechanism over multiple synthetic priors to mitigate prior bias and avoid overfitting to any single distribution\.  Building upon this, we introduce a gradient\-guided sharpness regularization that smooths the prior\-weighted activation loss landscape within a local perturbation neighborhood, promoting updates towards flatter and more transferable directions\. Extensive experiments on ImageNet demonstrate that HPSR\-UAP outperforms state\-of\-the\-art methods in both white\-box and black\-box data\-free attack settings\.  We further introduce a multi\-granularity block\-wise similarity metric that quantifies spatial repetitiveness within UAPs, revealing a strong correlation between structural regularity and attack performance\.

## A Black\-Box Reduction from Regret to Multi\-Level Coverage

**Authors:** Tuo Liu; Edgar Dobriban; Francesco Orabona

**ID:** 154233\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154233

[Paper](<https://openreview.net/forum?id=FEc497vZlM>) | [PDF](<https://openreview.net/pdf?id=FEc497vZlM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154233>)

Online Conformal Prediction \(OCP\) sequentially constructs prediction sets whose average empirical coverage converges to a target level over time, for arbitrary, potentially adversarial datasets\. In the multi\-level setting of OCP, prediction sets are produced at $d$ coverage levels at once\. Prior work showed that online gradient descent with lazy isotonic projections produces sets properly nested across levels, but with a $\\sqrt\{d\}$ dependence in the per\-level coverage convergence rate\. Here, we both generalize and improve prior work\. First, we show that lazy isotonic projections can be safely used for the construction of multi\-level online conformal prediction sets from \\emph\{any\} online learning algorithm\. Then, through a black\-box reduction, we show that the linearized regret of the online algorithm itself automatically gives control over both per\-level calibration and distributional consistency of multi\-level predictions via Fenchel duality\. Finally, by using the Weighted Interval Score, the standard scoring rule for assessing multi\-level interval forecasts, we prove that these projections reduce both the size of the sets and their under\-coverage\. We show two instantiations of our theory, $p$\-norm Online Mirror Descent and coordinate\-wise Universal\-Portfolio, both improving the dependence on the number of levels to $\\sqrt\{\\log d\}$ for the multi\-OCP problem\. Experiments on stock prices, electricity demand, and synthetic streams confirm consistent gains in coverage\-width trade\-offs over existing baselines\.

## FRInGe: Distribution\-Space Integrated Gradients with Fisher–Rao Geometry

**Authors:** Gabriele Martino; Sebastian Tschiatschek

**ID:** 149612\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149612

[Paper](<https://openreview.net/forum?id=onv7aWVE1B>) | [PDF](<https://openreview.net/pdf?id=onv7aWVE1B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149612>)

Gradient\-based attribution methods are model\-faithful and scalable, but Integrated Gradients \(IG\) can be brittle because explanations depend on heuristic baselines, straight\-line paths, discretization, and saturation\. We propose Fisher\-\-Rao Integrated Gradients \(FRInGe\), which defines both the reference and interpolation schedule in predictive distribution space\. FRInGe replaces input baselines with a maximum\-entropy predictive reference and follows a Fisher\-\-Rao geodesic on the probability simplex\. The corresponding input\-space trajectory is realized through the pullback Fisher metric and stabilized by KL and Euclidean trust regions; attributions are obtained by integrating input gradients along this trajectory\. Across six ImageNet architectures, FRInGe most clearly improves calibration\-oriented attribution metrics, especially MAS scores, while remaining competitive on perturbation AUC and infidelity\.

## Error\-Guided Bellman Calibration for Semi\-Offline Value Estimation

**Authors:** Tetsuro Morimura

**ID:** 149993\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149993

[Paper](<https://openreview.net/forum?id=lcrYylOS2v>) | [PDF](<https://openreview.net/pdf?id=lcrYylOS2v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149993>)

We study semi\-offline value estimation, where a small on\-policy sample supplements a large off\-policy dataset\. This regime is common in recommender systems and pre\-deployment A/B testing, and the challenge is to use the limited on\-policy data to correct systematic bias in a given value predictor\. Recent work on Bellman calibration \(BC\) gives a post\-hoc, model\-agnostic correction along the predicted value\. We propose Error\-Guided Bellman Calibration \(GBC\), which trains an error model on the on\-policy sample and calibrates the predictor along this learned error axis\. We prove a completeness\-free refinement guarantee, a theorem showing that the correction adapts to the intrinsic dimension of the prediction bias, and a finite\-sample bound on the value\-estimation error that isolates our advantage in the refinement term\.  Across synthetic, CRM, and D4RL benchmarks, GBC improves over existing calibration baselines\.

## Stochastic Grouping Conformal Prediction for Effective Subgroup Reliability

**Authors:** Meihui Zhong; Wenxin Tai; Ting Zhong; Fan Zhou

**ID:** 149803\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149803

[Paper](<https://openreview.net/forum?id=nFBHPHZ66f>) | [PDF](<https://openreview.net/pdf?id=nFBHPHZ66f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149803>)

Conformal prediction offers a distribution\-free coverage guarantee, making it especially attractive for clinical applications\. Standard conformal prediction, however, provides such guarantees only at the population level, and its prediction sets can exhibit coverage disparities across clinically important subgroups\. A natural remedy is to calibrate within predefined groups\. However, this can require access to sensitive subgroup attributes and is prone to a worst\-group bottleneck: protecting the most difficult subgroup can inflate prediction sets for all, increasing cognitive burden on decision makers\. To this end, we propose Stochastic Grouping Conformal Prediction \(SGCP\), a conformal framework for subgroup\-reliable uncertainty quantification\. It learns a stochastic grouping map that allows each sample to draw calibration information from others with similar calibration behavior, yielding a local score law that boosts reliability across subpopulations\. We prove that SGCP retains the standard coverage guarantee\. Experiments on synthetic and real\-world benchmarks show that it consistently reduces subgroup coverage gaps while achieving smaller or comparable prediction set sizes relative to existing baselines\.

## The Alignment Tax Concentrates in Output Projections

**Authors:** Ming Liu

**ID:** 152620\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152620

[Paper](<https://openreview.net/forum?id=Rj4yyW4GB7>) | [PDF](<https://openreview.net/pdf?id=Rj4yyW4GB7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152620>)

Prior work localizes the alignment tax\-\-\-instruction tuning's degradation of structured generation\-\-\-to transformer layers, but cannot determine which projections within a layer carry the functional change\. We identify a consistent sub\-layer hierarchy across three primary SwiGLU decoder\-only families \(7\-\-9B parameters, with Yi\-1\.5\-9B supplementary\): among equal\-parameter MLP projections, $W\_\{down\} &gt; W\_\{up\} &gt; W\_\{gate\}$ \(2\.5:1\.5:1\)\-\-\-an architecturally grounded ordering \(reproduced under continual pretraining\) not resolved by concurrent work\. Within attention, $W\_V$/$W\_O$ gradient magnitudes exceed $W\_Q$/$W\_K$ by 1\.76\-\-3\.91$\\times$\. Three independent methods\-\-\-weight patching, gradient analysis, and training\-time exclusion\-\-\-converge on the same within\-layer structure; a continual\-pretraining control confirms the within\-MLP hierarchy is architectural \(not alignment\-specific\), but the layer\-level distribution of harmful modifications is\-\-\-this task\-specific signal enables targeted rollback \(8\.9$\\times$ over architectural\-prior heuristics on held\-out data, $p=0\.002$\)\. Surgical Alignment Reversal \(SAR\), a training\-free rollback of attribution\-ranked components, recovers 47% of the alignment tax \(cross\-entropy metric, Qwen; Llama/Mistral: 2\-\-3$\\times$ random\) on held\-out cross\-dataset data \(in\-domain ratios 2\.8\-\-5\.3$\\times$\); Output\-Constrained DPO \(OC\-DPO\) largely eliminates the tax while Q/K exclusion does not\-\-\-both validated on attribution\-independent data\. Safety evaluation shows no significant degradation: refusal\-rate $\|\\Delta\| \\le 1\.4$ pp \($n=1\{,\}000$\), no significant ASR increase under adversarial attack \($\|\\Delta\\text\{ASR\}\| \\le 6$ pp, $n=50$\); Yi\-1\.5\-9B is excluded due to safety\-\-structure overlap \($\-13\.6$ pp\)\. Attribution replicates at 14B; gradient asymmetry persists at 72B\.

## Efficient Analytic Uncertainty Quantification for Multimodal Regression

**Authors:** Kun Jin; James Harrison; Jiawei Li; Sihan Liu; Jiayi Liu; Randy Linderman; Yuening Li; Arnab Bhadury; Sourabh P Bansod; Liang Liu; Jasper Snoek

**ID:** 153892\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153892

[Paper](<https://openreview.net/forum?id=HwWUMaIRkr>) | [PDF](<https://openreview.net/pdf?id=HwWUMaIRkr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153892>)

_Abstract unavailable from the accessible public sources._

## MemContract: Contract\-Sensitive Evaluation for Mutable Agent Memory

**Authors:** Rui Li; Shuang Cao

**ID:** 154728 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BT1m6pIA81>) | [PDF](<https://openreview.net/pdf?id=BT1m6pIA81>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154728>)

Many agent\-memory evaluations collapse state revision, deprecation, erasure, and provenance into retrieve\-heavy scores\. We introduce MemContract, a diagnostic benchmark of 1 , 080 multi\-session tasks over store, retrieve, revise, deprecate, erase, and prove\-origin, with formal pre/post\-conditions, mandatory distractor sessions plus alias rotation on every family, blinded/stale/delayed controls, a fixed 25\-probe residue audit, and benchmark\-validity checks via a 180\-task human contract\-fit audit and a 120\-task human\-assisted upper bound\. Under matched prompts, compute, storage, and latency budgets on GPT\-4o across seven architectures, Graph Memory reaches 67\.6% macro average \(95% paired\-bootstrap CI \[65\.8, 69\.4\]\) versus 62\.4% for the strongest hybrid baseline and 40\.6% for RAG, with most separation concentrated in revise, deprecate, erase, and prove\-origin while store/retrieve remain comparatively compressed\. Claude 3\.5 Sonnet and Gemini 1\.5 Pro 002 preserve the same top\-three ordering on a matched 360\-task rerun, while the manual audit finds 96\.7% agreement that the harness label matches the intended contract and the human\-assisted upper bound reaches 93\.8% macro, placing the best\-system score in a solvable regime rather than a floor of label noise\. Reviewer\-critical calibration checks tell a narrower but durable story: removing prove\-origin leaves the Graph \- Hybrid gap unchanged at 5\.2 pp, best\-effort prompt/schema tuning narrows it to 2\.6 pp, and fully external LongMemEval wu2024longmemeval and LoCoMo maharana2024locomo narrow it to 1\.8 and 2\.8 pp while preserving the top\-three ordering Graph &gt; Hybrid &gt; Editable KV\. The stable claim is therefore not universal backend superiority: contract\-sensitive evaluation reveals separation that broader or retrieval\-heavier workloads attenuate but do not erase\. The 25\-probe audit bounds catchable residue leakage at 3\.9% for Graph Memory and 27\.4% for RAG, but does not certify deletion\.

## Matched\-Control Tests of Partition\-Source Claims in One Routed Distillation Family

**Authors:** Rui Li; Shuang Cao; Constance Liu

**ID:** 152841 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PykGJWR2N4>) | [PDF](<https://openreview.net/pdf?id=PykGJWR2N4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152841>)

Partitioned routed distillation is hard to interpret when route count, supervision grouping, and search or filtering budget change together\. We study that attribution problem inside one fixed routed family using two matched nulls: a routing\-only control \(Latent\-Routing MoA\) and a structure\-matched shuffled\-partition control \(Matched\-Partition\-Shuffle\), with teacher tokens, trainable parameters, and router depth matched exactly\. The decisive result is Table tab:main: the zero\-manual deployable row ModeDistill\-Auto\-v4\-Open, whose partition source is induced by GPT\-OSS\-120B\-Instruct pairwise same\-strategy judgments \(Apache\- 2\.0 , distinct from the trace\-generating teacher\), beats MoA by \+2\.46 pp and Matched\-Partition\-Shuffle by \+2\.04 pp on the five\-domain primary\-shift average \(A1\), with positive OOD gaps on all five primary domains\. Table tab:external\_breadth\_transfer is intentionally weaker evidence: for that exact same headline row it reports only four external benchmark aggregate means, where Auto\-v4\-Open beats MoA by \+4\.91 / \+3\.99 / \+3\.70 / \+2\.87 pp, and it does not support slice\-wise breadth or cross\-family generality\. The open pipeline remains within 0\.05 pp of the manual upper\-bound reference on A1 and within the pre\-specified 0\.50 pp tie band on every external mean, so we keep it as the deployable row and retain the manual row only as calibration\. The claim is therefore narrow: within this routed family, once routed budget is matched, the residual OOD gain is attributable to the externally induced partition source rather than to routing alone or to structure\-matched shuffled partitions\. Figure fig:identification and the appendix are corroborative only\. The weakest primary shift remains ALFWorld tool reconfiguration \( \+1\.15 pp vs\.\\ MoA, paired CI \[\-0\.12,\+2\.41\] \), and discovery\-time verifier calls and teacher generation are disclosed separately from the matched comparison\.

## Untrusted Content Masking for Web Agents with Security Guarantees

**Authors:** Kristina Nikolić; Egor Zverev; Javier Rando; Matthew Jagielski; Edoardo Debenedetti; Florian Tramer

**ID:** 150501 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hckd9UoUPT>) | [PDF](<https://openreview.net/pdf?id=hckd9UoUPT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150501>)

Defenses that provide security guarantees against prompt injection attacks require strict isolation between an agent's task planning and data processing capabilities\. This prevents third\-party content from overwriting trusted instructions\. In text\-based environments such as tool\-use APIs, agents can plan from interface definitions without ever processing untrusted data\. Web agents, however, face a fundamental challenge: they must observe the rendered page to perceive their environment, but that page already contains untrusted third\-party content\. In this paper, we present Untrusted Content Masking, a simple, effective approach that enables web agents to observe their environment and plan without directly processing untrusted content\. We leverage a key structural insight: a webpage's Document Object Model \(DOM\) structure alone suffices to identify untrusted regions\. Our framework exploits this by redacting such regions before they reach the agent, and restricting interaction to a sandboxed interface with strict privilege separation\.

## CodeMimicry: Exploiting Safety Generalization Lag in Large Language Models via Structured Code Completion

**Authors:** Liang Zhen; Wentao Chen; Hai Huang

**ID:** 148231\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148231

[Paper](<https://openreview.net/forum?id=zQ1LdvPXe9>) | [PDF](<https://openreview.net/pdf?id=zQ1LdvPXe9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148231>)

Large language models have achieved remarkable capabilities across diverse domains, yet their safety alignment remains vulnerable to jailbreak attacks\. In this work, we identify a previously underexplored failure mode—safety generalization lag—where alignment trained predominantly on natural language fails to transfer to the code domain\. We show that this lag induces a code\-completion blind spot, allowing malicious intent embedded within syntactically valid code to evade safety mechanisms\. To exploit this vulnerability, we propose CodeMimicry, a fully automated black\-box jailbreak framework that generates structured, object\-oriented code prompts to induce harmful outputs via code completion\. Experiments on 8 state\-of\-the\-art commercial LLMs demonstrate that CodeMimicry achieves a 96\.25\\% attack success rate with 1\.51 queries on average, significantly outperforming both template\-based and optimization\-based baselines\. Beyond empirical performance, we provide a mechanistic analysis of code\-based jailbreaks through latent space representations, including projection onto refusal\-related directions and activation steering\. This analysis offers an explanation of how CodeMimicry bypasses safety mechanisms in code\-related domains\. Our findings reveal a weakness in current safety alignment and highlight the need for robust alignments in structured domains such as code\.

## Backdoor Attacks Rerouted: BatchNorm as a Sink for Adversarial Signals

**Authors:** Md Abdul Kadir; Tuan Tran Anh; Daniel Sonntag

**ID:** 155957\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155957

[Paper](<https://openreview.net/forum?id=1YqAFIeJti>) | [PDF](<https://openreview.net/pdf?id=1YqAFIeJti>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155957>)

_Abstract unavailable from the accessible public sources._

## Agreement without Coverage: Conditional Agreement is Non\-Identifying in Variable\-Support Structured Extraction

**Authors:** Yanru Zhou; Dandan Song

**ID:** 152893\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152893

[Paper](<https://openreview.net/forum?id=PcPlRvDFiC>) | [PDF](<https://openreview.net/pdf?id=PcPlRvDFiC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152893>)

_Abstract unavailable from the accessible public sources._

## The Block Catastrophe of Marginal Calibration in Certified Requirements Traceability

**Authors:** Jikun Wu; Dongxin Guo; Siu Ming Yiu

**ID:** 148450\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148450

[Paper](<https://openreview.net/forum?id=xjocfB8Qxp>) | [PDF](<https://openreview.net/pdf?id=xjocfB8Qxp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148450>)

Certifying authorities for safety\-critical software audit recovered trace matrices module by module, not on average\. Every existing distribution\-free calibration delivers a marginal certificate, and we show the gap to the auditor's quantity is structural and unbounded\. Under within\-block exchangeability with cross\-block heterogeneity in the conditional null score distribution, every procedure controlling marginal $\\mathrm\{FDR\}$ at level $\\alpha$ on a bipartite trace matrix with $K$ source modules admits worst\-module false discovery proportion at least $1\{\-\}\\alpha\{\-\}O\(1/K\)$ with probability at least $1\{\-\}2/K$\. We name this the block catastrophe and close it with $\\mathrm\{CERTRA\}$, which wraps any black\-box scorer, computes a within\-block rank\-indicator conformal $e$\-value, and applies $e$\-$\\mathrm\{BH\}$ separately within each source module\. The construction yields finite\-sample per\-module $\\mathrm\{FDR\}$ control under arbitrary intra\-module dependence, with matching power up to a rank\-quantization factor\. We release IndTrace\-2026, a 12\{,\}406\-link composite across aerospace, automotive, and medical\-device specifications with professional ASIL/DAL/SIL annotation \(Cohen's $\\kappa\{=\}0\.86$\)\. $\\mathrm\{CERTRA\}$ holds worst\-block $\\mathrm\{FDP\}$ at 0\.118 where split\-conformal drifts to 0\.413, retains 0\.741 of true links versus 0\.572 for the strongest fair\-operating\-point baseline, and reduces audit deficiency 3\.3\-fold\. Per\-module distribution\-free calibration is what an industrial audit can sign\.

## Position: Neurosymbolic AI is a strong technical foundation for trustworthy, deployable AI by design

**Authors:** Chandler Squires; Yaqi Xie; Simon Stepputtis; Katia Sycara; Pradeep Ravikumar

**ID:** 140018\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 140018

[Paper](<https://openreview.net/forum?id=oqZudlhgoi>) | [PDF](<https://openreview.net/pdf?id=oqZudlhgoi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140018>)

As AI becomes more widely adopted, this technology has started to reach a new stage of maturity, with new expectations\. In many domains, features like interpretability, controllability, and reliability can no longer be treated as secondary considerations, but must be treated as primary concerns\. We argue that the currently dominant \*incremental refinement\* strategy should be complemented by a more design\-oriented \*first principles\* strategy, and that \*neurosymbolic AI\* provides one of the most coherent and practically promising technical foundations for this strategy\. In particular, we describe certain technical capabilities provided by neurosymbolic AI, including knowledge integration, conceptual alignment, modifiability, and structured generalization, and argue that these capabilities are crucial for building AI that is trustworthy and deployable by design\.

## Online Localized Conformal Prediction

**Authors:** Yuheng Lai; Garvesh Raskutti

**ID:** 148737\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148737

[Paper](<https://openreview.net/forum?id=vPeDJdLEKg>) | [PDF](<https://openreview.net/pdf?id=vPeDJdLEKg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148737>)

Conformal prediction is a framework that provides valid uncertainty quantification for general models with exchangeable data\. However, in the online learning and time\-series settings, exchangeability is not satisfied\. Existing online conformal methods, such as adaptive conformal inference \(ACI\), can achieve long\-run validity, yet they remain inefficient under covariate heterogeneity because they rely on global calibration\. We propose \*Online Localized Conformal Prediction \(OLCP\)\*, which combines online adaptation with covariate\-dependent localization to better reflect heterogeneity\. To reduce sensitivity to the localization bandwidth, we further develop \*OLCP\-Hedge\*, which performs bandwidth selection as an online expert aggregation problem using a constrained online convex optimization framework\. Importantly, we provide coverage guarantees for both algorithms and demonstrate through simulations and real\-data experiments that the proposed methods attain valid long\-run coverage with narrower prediction intervals than existing baselines\.

## QUTCC: Quantile Uncertainty Training and Conformal Calibration for Imaging Inverse Problems

**Authors:** Cassandra T Ye; Shamus Li; Tyler King; Kristina Monakhova

**ID:** 150551\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150551

[Paper](<https://openreview.net/forum?id=hIqpI82zrU>) | [PDF](<https://openreview.net/pdf?id=hIqpI82zrU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150551>)

_Abstract unavailable from the accessible public sources._

## How Hard is it to Rig a Benchmark? A Social Choice Analysis of Leaderboard Robustness

**Authors:** Polina Gordienko; Georg Schollmeyer; Frauke Kreuter; Christoph Jansen

**ID:** 152232\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152232

[Paper](<https://openreview.net/forum?id=UZc9h8y5AP>) | [PDF](<https://openreview.net/pdf?id=UZc9h8y5AP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152232>)

_Abstract unavailable from the accessible public sources._

## Consistent One\-vs\-All Losses Robust to Misspecification of the Weak Label Transition Model

**Authors:** Chi Cui; Hei Victor Cheng; Jesús Cid\-Sueiro

**ID:** 150290\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150290

[Paper](<https://openreview.net/forum?id=jH8P1bT8U2>) | [PDF](<https://openreview.net/pdf?id=jH8P1bT8U2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150290>)

Learning from weak labels \(including noisy, partial or complementary labels\) requires exploiting the statistical dependence between ground\-truth classes and observed labels\. Many existing methods are built around a particular transition model, often assumed to be known, accurately estimated, or instance\-independent, which leads to performance degradation under model misspecification\.  We introduce Convex Losses for Weak Labels \(CLWL\), a family of losses for weak supervision based on transforming supervised one\-vs\-all losses\. By prioritizing classification and ranking consistency over probability calibration, CLWL relaxes rigid structural assumptions on the label transition mechanism\. We provide conditions for convexity and ranking consistency, characterize the transition matrices that preserve consistency for a given loss, and show that this consistency\-preserving space attains the theoretical dimension bound\. We propose a constructive method for generating parametric, lower\-bounded, convex losses adapted to arbitrary weak\-label models\. Finally, we connect CLWL to existing methods, including backward correction and some losses for partial or complementary labels\. Empirical results demonstrate that CLWL outperforms state\-of\-the\-art methods when the assumed transition model is misspecified\.

## FeatCal: Feature Calibration for Post\-Merging Models

**Authors:** Yanggan Gu; Shuo CAI; Zihao Wang; Wenjun Wang; Yuanyi Wang; Pengkai Wang; Sirui Huang; Su Lu; Jianmin Wu; Hongxia Yang

**ID:** 152364\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152364

[Paper](<https://openreview.net/forum?id=TbWDPX0nam>) | [PDF](<https://openreview.net/pdf?id=TbWDPX0nam>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152364>)

Model merging combines task experts into one model and avoids joint training, retraining, or deploying many expert models, but the merged model often still underperforms task experts\. We study this performance gap through feature drift, the difference between features produced by the merged model and by the expert on the same input\. Our theory decomposes this drift into upstream propagation and local mismatch, tracks how it propagates and combines through later layers in forward order, and links final feature drift to output drift\. This view motivates FeatCal, which uses a small calibration set to calibrate the merged model weights layer by layer in forward order, reducing feature drift while staying close to merged weights and preserving the benefits of model merging\. FeatCal uses an efficient closed\-form solution to update model weights, with no gradient descent, iterative optimization, or extra modules\. On the main CLIP and GLUE benchmarks, FeatCal beats Surgery and ProbSurgery, the closest post\-merging calibration baselines: 85\.5% vs\. 77\.0%/78\.8% on CLIP\-ViT\-B/32 Task Arithmetic \(TA\) and 85\.2% vs\. 83\.7%/82\.2% on FLAN\-T5\-base GLUE\. On CLIP\-ViT\-B/32, 8 examples per task reach 82\.9%, and 256 examples per task take 53 seconds, about 4x faster than both baselines, showing better sample efficiency and lower calibration cost\.

## No More, No Less: Task Alignment in Terminal Agents

**Authors:** Sina Mavali; David Pape; Jonathan Evertz; Samira Abedini; Devansh Srivastav; Thorsten Eisenhofer; Sahar Abdelnabi; Lea Schönherr

**ID:** 139104\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139104

[Paper](<https://openreview.net/forum?id=koHWZUTUlq>) | [PDF](<https://openreview.net/pdf?id=koHWZUTUlq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139104>)

Terminal agents are increasingly capable of executing complex, long\-horizon tasks autonomously from a single user prompt\. To do so, they must interpret instructions encountered in the environment \(e\.g\., README files, code comments, stack traces\) and determine their relevance to the task\. This creates a fundamental challenge: relevant cues must be followed to complete a task, whereas irrelevant or misleading ones must be ignored\. Existing benchmarks do not capture this ability\. An agent may appear capable by blindly following all instructions, or appear robust by ignoring them altogether\. We introduce TAB \(Task Alignment Benchmark\), a suite of 89 terminal tasks derived from Terminal\-Bench 2\.1\. Each task is intentionally underspecified, with missing information provided as a necessary cue embedded in a natural environmental artifact, alongside a plausible but irrelevant distractor\. Solving these tasks requires selectively using the cue while ignoring the distractor\. Applying TAB to ten frontier agents reveals a systematic gap between agent capability and task alignment\. The strongest Terminal\-Bench agent achieves high task completion but low task alignment on TAB\. Evaluating six prompt\-injection defenses further shows that suppressing distractor execution also suppresses the cues required for task completion\.  These results demonstrate that task\-aligned agents require selective use of environmental instructions rather than blanket acceptance or rejection\.

## MT\-CC: Multi\-Group Temperature Scaling for Asymmetric Calibration Behavior in Class\-Incremental Learning

**Authors:** Sungjun Yun; Yonghee Choi; Dong\-Jun Han

**ID:** 148768\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148768

[Paper](<https://openreview.net/forum?id=vCft9tPVmL>) | [PDF](<https://openreview.net/pdf?id=vCft9tPVmL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148768>)

As deep neural networks are required to continuously adapt to evolving data, class\-incremental learning \(CIL\) has become an active research area\. However, most existing works primarily focus on improving accuracy while overlooking confidence calibration, which measures the trustworthiness of the model's predictions\. Although temperature scaling \(TS\) is effective for static calibration, it has rarely been explored in continual settings where data distributions evolve over time\. In this paper, we introduce Multi\-Group Temperature Scaling for Continual Calibration \(MT\-CC\), a novel post\-hoc calibration framework that addresses the asymmetric calibration behavior in CIL, where the rate of confidence changes does not align with the rate of accuracy degradation across tasks, leading to different levels of miscalibration\. Our key contribution is to design multiple temperature parameters through a lightweight grouping network that separates samples by confidence statistics and task\-aware signals in CIL\. Furthermore, a Groupwise Difference\-between\-Confidence\-and\-Accuracy \(GDCA\) regularization is incorporated to promote intra\-group consistency\. Experiments demonstrate that MT\-CC significantly improves calibration performance while maintaining accuracy, offering a principled framework for reliable continual learning\.

## Proper Scoring Rules for Agentic Uncertainty Quantification

**Authors:** Suresh Raghu; Satwik Pandey; Shashwat Pandey

**ID:** 155086 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8XnA3xBaF5>) | [PDF](<https://openreview.net/pdf?id=8XnA3xBaF5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155086>)

Language\-model agents increasingly emit uncertainty signals throughout a trajectory, but existing agentic UQ evaluations often conflate ranking usefulness with probabilistic truthfulness\. AUROC, AUPRC, risk\-coverage, Trajectory ECE, and scalarized trajectory scores evaluate discrimination, binwise calibration, or collapsed summaries, but do not strictly elicit the full prefix\-conditioned success\-probability trace $q\_t=\\mathbb\{P\}^\{\\pi\}\(Y\{=\}1\\mid\\mathcal\{H\}\_t\)$\. Building on prequential proper scoring, we introduce the Trajectory Proper Score \(TPS\), a predictor\-agnostic family of strictly proper trajectory\-level scoring rules for any per\-step uncertainty signal calibrated into a probability of eventual success\. We prove that TPS strictly elicits the success\-probability process under complete observation, within the chosen score family and weight schedule\. We extend the construction to administratively censored trajectories by projecting the complete\-data score onto the observable stopped prefix, yielding an exact $q\_Z$\-weighted reduced score and a tractable approximation when $q\_Z$ is unestimated\. We further show that common trajectory evaluators target weaker objects than the full prefix\-conditioned probability process: Trajectory ECE is resolution\-blind, while scalarized Trajectory Brier elicits only the collapsed scalar, not the full trace\. Experiments on StrategyQA, Tau2\-Bench, HotpotQA, and WebShop show that these theoretical distinctions are operationally visible: probability recalibration can substantially change TPS while leaving rank metrics nearly unchanged, and the tractable censored approximation can change the verdict relative to complete\-only evaluation\.

## MIRA: Mutual Information guided calibration for Reliable Test\-Time Adaptation

**Authors:** Hyeongyu Kim; Mingyeong Jang; Youngjun Song; GeonHui Han; Dosik Hwang

**ID:** 148843 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ujUYtJK5LG>) | [PDF](<https://openreview.net/pdf?id=ujUYtJK5LG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148843>)

Test\-time adaptation updates a deployed model using only unlabeled target data, but standard entropy\-based methods often rely on deterministic confidence and can reinforce overconfident errors under distribution shift\. We propose MIRA, Mutual Information guided calibration for Reliable Test\-Time Adaptation, a source\-free online adaptation method that uses lightweight last\-layer Gaussian perturbations to probe prediction reliability\. For each target batch, MIRA reuses a single feature extraction pass and samples perturbed classifiers around the source classifier, forming an efficient local stochastic ensemble\. Rather than fitting a Bayesian posterior, MIRA treats the perturbation scale as a local probing radius and selects a batch\-specific scale using mutual information and prediction agreement\. The resulting perturbation\-sensitivity signal identifies predictions that are confident and locally stable under classifier perturbations, while suppressing brittle predictions with high stochastic disagreement\. MIRA then performs adaptation with an MI\-confidence weighted entropy loss, which down\-weights perturbation\-sensitive or low\-confidence samples before they drive entropy minimization\. This weighted loss reduces the influence of brittle predictions that can otherwise cause harmful adaptation under distribution shift\. The method requires no source data, retraining, model ensembles, or offline posterior fitting, and can be applied as a plug\-and\-play modification to entropy\-minimization TTA\. Experiments on distribution\-shift benchmarks show improvements in accuracy, calibration, and negative log\-likelihood, suggesting that mutual\-information\-guided perturbation probing and weighted adaptation yield more robust online TTA than deterministic confidence\.

## Anytime\-Valid Conformal Risk Control

**Authors:** Bror Hultberg; Dave Zachariah; Antonio Ribeiro

**ID:** 154243 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FCHpcvgVme>) | [PDF](<https://openreview.net/pdf?id=FCHpcvgVme>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154243>)

Prediction sets provide a means of quantifying the uncertainty in predictive tasks\. Using held out calibration data, conformal prediction and risk control can produce prediction sets that exhibit statistically valid error control in a computationally efficient manner\. However, in the standard formulations, the error is only controlled on average over many possible calibration datasets of fixed size\. In this paper, we extend the control to remain valid with high probability over a cumulatively growing calibration dataset at any time point\. We derive such guarantees using quantile\-based arguments and illustrate the applicability of the proposed framework to settings involving distribution shift\. We further establish a matching lower bound and show that our guarantees are asymptotically tight\. Finally, we demonstrate the practical performance of our methods through both simulations and real\-world numerical examples\.

## FILOsofer: A TEE\-Shielded Model Partitioning Framework based on Fisher Information\-Guided LoRA Obfuscation

**Authors:** Fan zhang; Ziqi Zhang; Hossein Khalili; Neiro Cabrera; Jonathan Xue; Nader Sehatbakhsh

**ID:** 148574 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wrEeZDfTbu>) | [PDF](<https://openreview.net/pdf?id=wrEeZDfTbu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148574>)

On\-device machine learning exposes deep neural networks as white\-box artifacts, making them vulnerable to model\-stealing attacks\. Trusted Execution Environments \(TEEs\) mitigate this risk by isolating model execution, but running entire models inside TEEs incurs prohibitive overhead\. To balance security and efficiency, prior work proposes TEE\-Shielded DNN Partitioning \(TSDP\), which executes privacy\-insensitive components on GPUs while confining sensitive layers to TEEs\.  We demonstrate that existing TSDP schemes remain vulnerable because exposed GPU weights provide an effective warm start\. This allows adversaries to exploit inevitable information leakage and reconstruct high\-fidelity surrogates using only a fraction of the training data\. To address this vulnerability, we propose FILOsofer, a principled defense that strategically obfuscates exposed weights using Fisher Information\. By deliberately rendering leaked weights misleading, FILOsofer steers an adversary’s initialization away from the true optimum\. To recover user\-side accuracy, we introduce a novel cross\-layer LoRA mechanism that efficiently restores performance while storing only lightweight LoRA parameters inside the TEE\. Extensive evaluation in real\-world settings shows that FILOsofer achieves black\-box–equivalent security in the worst case, while reducing computational overhead by more than $50\\times$ compared to prior approaches\.

## Memory Inception: Latent\-Space KV Cache Manipulation for Steering LLMs

**Authors:** Zeyi \(Andy\) Liu; Michael Zhang; Ilana Greenberg; Adam Alnasser; Lucas Baker; John Sous

**ID:** 151646\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151646

[Paper](<https://openreview.net/forum?id=Z45sLXr4O9>) | [PDF](<https://openreview.net/pdf?id=Z45sLXr4O9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151646>)

_Abstract unavailable from the accessible public sources._

## Your Neighbors Know: Leveraging Local Neighborhoods for Backdoor Detection in Decentralized Learning

**Authors:** Sayan Biswas; Antoine Boutet; Davide Frey; Romaric Gaudel; Rachid Guerraoui; Maxime Jacovella; Anne\-marie Kermarrec; Dimitri Lerévérend; Francois Taiani; Martijn De Vos

**ID:** 153707\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153707

[Paper](<https://openreview.net/forum?id=JN1THG4T7h>) | [PDF](<https://openreview.net/pdf?id=JN1THG4T7h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153707>)

Decentralized learning \(DL\) is an emerging machine learning paradigm where nodes collaboratively train models without a central server\. However, the collaborative nature of DL makes it vulnerable to backdoor attacks, where a model is taught to behave normally on standard inputs while executing hidden, malicious actions when encountering data with specific triggers\. Backdoor attacks in DL remain understudied and existing defenses often overlook DL constraints\. We introduce Argus, a novel backdoor detection framework native to DL that requires neither a central coordinator nor prior knowledge of the trigger\. In Argus, honest nodes locally analyze received model updates to identify potential backdoor triggers\. Nodes then collectively share their triggers with their neighbors and use a structural similarity metric to separate true backdoors from false alarms induced by data heterogeneity\. A key insight is that false positive triggers exhibit inconsistencies across participants while true positive ones show consistent patterns\. Model updates that fail this collaborative test are rejected, and persistently malicious senders are eventually evicted\. We provide the first theoretical convergence guarantees for a DL\-specific backdoor detection mechanism, showing that filtering out suspicious model updates with high probability preserves a convergence rate comparable to standard DL\. We implement and evaluate Argus on three standard datasets and against three state\-of\-the\-art baselines\. Across settings, Argus reduces attack success rates by up to 90 points compared to no defense, while preserving model utility within 5 percentage points of an omniscient oracle\. Furthermore, the effectiveness of Argus compared to baselines improves as data heterogeneity increases\.

## Honeyval: A Comprehensive Evaluation Framework for LLM\-powered HTTP Honeypots

**Authors:** Mark Vero; Fabian Kaczmarczyck; Ivan Petrov; I Shumailov; Niels Heinen; Jamie Hayes; Tianqi Fan; Luca Invernizzi; Martin Vechev

**ID:** 139314\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139314

[Paper](<https://openreview.net/forum?id=XvDLyFw8OO>) | [PDF](<https://openreview.net/pdf?id=XvDLyFw8OO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139314>)

LLMs increasingly serve as simulation engines for honeypots\. They enable defenders to construct high\-interaction honeypots with virtually no system security risks\. However, LLM\-powered honeypot development lacks a unified evaluation framework and protocol\. Most evaluations consist of response similarity measurements against a fixed set of commands, manual testing, or online deployment\. These evaluation methods are often not scalable for development, reproducible across evaluations, representative of practical attacks, and adaptable to various attacker and honeypot configurations\. In this work, we bridge this gap and propose Honeyval, a comprehensive evaluation framework for LLM\-powered HTTP honeypots\. We address the limitations of prior evaluations by grounding the honeypots in 16 backend applications, using AI hacking agents as attackers, employing two control tasks to monitor agent and honeypot capabilities across customizations, and defining clear and verifiable exploit goals for the attacker\. Using Honeyval, we conduct an extensive evaluation of recent cost\-efficient LLMs as HTTP honeypots\. Our experiments highlight the promise of LLM\-powered honeypots; they lead to substantially longer interactions with the attacker than rule\-based baseline honeypots and are far less frequently detected even by frontier models, all while preserving a running cost advantage against agentic attackers\. Further, we experiment with different counter\-offensive configurations for the honeypots, and observe unique trade\-offs, such as longer interactions at the cost of increased detection\.

## CLaW: Codec\-Guided Adaptive Latent Watermarking for Traceable Diffusion Image Generation

**Authors:** Huangchao Song; Lingyun Yu; Cong Li; Peiqi Jiang; Mingqi Fang; Hongtao Xie

**ID:** 149791\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149791

[Paper](<https://openreview.net/forum?id=nI6z2amVXh>) | [PDF](<https://openreview.net/pdf?id=nI6z2amVXh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149791>)

With the rapid advancement of text\-to\-image diffusion models, increasingly realistic AI\-generated content has raised serious concerns about misuse and copyright infringement\. Digital watermarking offers a promising solution by enabling user\-level traceability, yet existing methods remain difficult to deploy at scale, hindered by costly model retraining or detection, poor effectiveness–fidelity trade\-offs, and limited robustness to image transformations\. To address these challenges, we propose CLaW \(Codec\-guided Latent Watermarking\), a robust and efficient watermarking framework for traceable diffusion image generation with frozen diffusion backbones and inversion\-free detection\. Specifically, CLaW first uses a pretrained watermark codec to map each watermark message to a latent residual, enabling low\-cost sampling\-time injection\. Then, the residual is injected within a late denoising window, where image semantics are better preserved and the watermark signal is less perturbed by subsequent denoising updates, yielding a better balance between watermark effectiveness and image fidelity\. Furthermore, we introduce a decoder\-guided adaptive injection mechanism that uses decoding confidence as feedback to dynamically calibrate watermark strength, reinforcing weak watermark signals and improving robustness under image transformations\. Extensive experiments show that CLaW can preserve visual fidelity and improve average F1 under image transformations, achieving a 6\.34% gain over the state of the art\.

## Tcell: Mitigating Harmful Fine\-tuning for Large Language Models via  Gradient Alignment

**Authors:** Tiansheng Huang; Virat Vishnu Shejwalkar; Oscar Chang; Ling Liu

**ID:** 155716\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155716

[Paper](<https://openreview.net/forum?id=3Rc9uH2uQ1>) | [PDF](<https://openreview.net/pdf?id=3Rc9uH2uQ1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155716>)

Harmful fine\-tuning attack becomes a concerning safety risk for mainstream fine\-tuning\-as\-a\-service providers, as attackers can submit harmful data to the API to compromise the safety alignment of the large language models\. In this paper, we first explore an intuitive gradient mixing solution, and derive a key property ensuring the success of defense \-\- \\emph\{taking a fine\-tuning update that has higher cosine similarity with the safety gradient can mitigate harmful fine\-tuning\.\} Motivated by this key property, we design an alignment\-stage defense, dubbed Tcell\. The core contribution of Tcell is a regularizer that align the harmful gradient and the safety gradient during safety alignment, which ensures the harmful fine\-tuning update exhibits high cosine similarity with the safety gradient, achieving \\emph\{gradient alignment\}\. The benefit of gradient alignment is supported by  i\) empirical and theoretical interpretation and ii\) comparison to alternative design without gradient alignment\. Code is available at https://anonymous\.4open\.science/r/Tcell\-1C15/\.

## Multi\-bit LLM Watermarking with Certified Semantic Distortion

**Authors:** Chenxi Gu; Si Chen; John Grundy; Xiaoning Du

**ID:** 148648\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148648

[Paper](<https://openreview.net/forum?id=wB0DVBkk59>) | [PDF](<https://openreview.net/pdf?id=wB0DVBkk59>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148648>)

Watermarking has emerged as a fundamental mechanism for tracing the provenance of Large Language Model \(LLM\) outputs\. While multi\-bit watermarks are highly desirable for embedding rich metadata, they suffer from an inherent trade\-off between statistical detectability and text quality degradation\. Crucially, existing multi\-bit schemes lack theoretical quality guarantees, leaving them susceptible to unbounded semantic distortion\. To address this, we introduce CSD, the first multi\-bit watermarking framework with certified semantic distortion bounds\. In CSD, we derive a closed\-form upper bound on the Kullback\-Leibler \(KL\) divergence, mathematically guaranteeing strict limits on semantic distortion at every generation step\. Furthermore, rather than relying on static payloads, CSD employs a dynamic payload to maximize statistical detectability\. Extensive empirical evaluations across multiple datasets demonstrate that CSD achieves robust detectability while maintaining provably safe text generation\.

## Hallucination as Commitment Failure: Larger LLMs Misfire Despite Knowing the Answer

**Authors:** Jewon Yeom; Jaewon Sok; Heejun Kim; Seonghyeon Park; Jeongjae Park; Taesup Kim

**ID:** 154310\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154310

[Paper](<https://openreview.net/forum?id=EcJCjzBU18>) | [PDF](<https://openreview.net/pdf?id=EcJCjzBU18>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154310>)

Hallucination is often viewed as a direct consequence of missing knowledge: a model answers incorrectly when the correct answer is absent from its generation\-time distribution, and correctly when it is present\. We test this assumption by introducing a semantic notion of answer availability that aggregates token\-level variants expressing the same answer concept, and asks whether the correct concept is already available at the moment the model commits to an answer\. Across Qwen and Llama models from 0\.8B to 72B in both Instruct and Base variants, 16\-47\\% of Instruct hallucinations occur with substantial probability mass already on the correct concept, and the rate rises monotonically with scale\. Comparing such failures against correct generations with matched semantic support, the distinguishing factor is not whether the correct concept is represented, but how its probability is distributed: correct generations concentrate mass on a single surface form, hallucinations disperse it across alternatives\. The same sharpening asymmetry extends across multi\-token generation and is detectable in pre\-generation hidden states\. Together, these results identify a single mechanism: instruction tuning sharpens answer commitment with scale, making helpfulness and confident hallucination two consequences of the same underlying disposition\.

## Beyond the Prompt: Leveraging Pre\-Decoding States for Jailbreak Detection in dLLMs

**Authors:** Adam Hazimeh; Amel Abdelraheem; Ke Wang; Mariam Salman; Ljiljana Dolamic; Gérôme Bovet; Pascal Frossard

**ID:** 151177 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cQKisMHGgm>) | [PDF](<https://openreview.net/pdf?id=cQKisMHGgm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151177>)

Diffusion language models \(dLLMs\) generate text by iteratively denoising masked response positions, exposing hidden states over future response slots before any token is finalized\. This creates a detection surface that is absent from standard autoregressive decoding: even when a jailbreak is difficult to identify from the prompt alone, the initial masked response states may already reflect the model's emerging completion\. We test this hypothesis on LLaDA\-8B\-Instruct by training lightweight linear classifiers on two frozen representations: prompt hidden states and pre\-decoding masked\-response hidden states\. Empirically, the two views are complementary: neither classifier strictly dominates the other, and each recovers attacks missed by the other view\. We then introduce $\\texttt\{ReFuse\}$ \(Representation Fusion\), an inference\-time detector that fuses prompt and pre\-decoding response classifier scores without modifying model weights or the decoding procedure\. Across transferred and dLLM\-targeted jailbreaks, $\\texttt\{ReFuse\}$ reduces average ASR from 63\.29\\% for the undefended model to 3\.31\\%, while keeping average benign refusal on standard utility benchmarks below 1\\%\. These results suggest that pre\-decoding response states provide a complementary safety signal for detecting jailbreaks in dLLMs\.

## GradShield: Alignment Preserving Finetuning

**Authors:** Zhanhao Hu; Xiao Huang; Patrick Mendoza; Emad A Alghamdi; Basel Alomair; Raluca Popa; David Wagner

**ID:** 151041 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dQFVIxjyvV>) | [PDF](<https://openreview.net/pdf?id=dQFVIxjyvV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151041>)

Large Language Models \(LLMs\) pose a significant risk of safety misalignment after finetuning, as models can be compromised by both explicitly and implicitly harmful data\. Even some seemingly benign data can inadvertently steer a model towards misaligned behaviors\. To address this, we introduce GradShield, a principled filtering method that safeguards LLMs during finetuning by identifying and removing harmful data points before they corrupt the model's alignment\. It removes potentially harmful data by computing a Finetuning Implicit Harmfulness Score \(FIHS\) for each data point and employs an adaptive thresholding algorithm\. We apply GradShield to multiple utility fine\-tuning tasks across varying levels of harmful data and evaluate the safety and utility performance of the resulting LLMs using various metrics\. The results show that GradShield outperforms all baseline methods, consistently maintaining an Attack Success Rate \(ASR\) below $6\\%$ while preserving utility performance\.

## The Type Theory of Stationary MDPs: Rare Events and Uncertainty Quantification

**Authors:** Imon Banerjee; Sayak Chakrabarty; Ramkrishna Jyoti Samanta; Riddhiman Bhattacharya

**ID:** 151895\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151895

[Paper](<https://openreview.net/forum?id=X92FFAYPKL>) | [PDF](<https://openreview.net/pdf?id=X92FFAYPKL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151895>)

The method of types, pioneered by Csiszar \(1998\), uses combinatorial arguments to approximate the probabilities of empirical measures and has become a standard tool for deriving error rates in hypothesis testing, source coding, and related information\-theoretic problems\. Although the technique is widely used across machine learning, computer science, and econometrics, rigorous type\-theoretic guarantees for stationary Markov decision processes and reinforcement learning remain limited\. This paper addresses that gap by developing a method\-of\-types framework for the empirical pair measure of the state\-\-action process of a stationary Markov decision process\. We establish finite\-sample type bounds for the state\-\-action process and characterize the associated entropy cost through the conditional Kullback\-\-Leibler divergence relative to the true pair kernel\. These results yield large deviation principles for learned MDP dynamics and variational rate functions for plug\-in value\- and Q\-function estimators in offline reinforcement learning\. We further develop finite\-sample uncertainty\-quantification and hypothesis\-testing guarantees based on KL uncertainty sets, including applications to pessimistic value and Q\-function estimation under model misspecification\. Finally, we apply the same framework to universal source coding and obtain explicit coding error exponents for controlled Markov trajectories\. Together, these results provide a unified type\-theoretic approach to rare\-event analysis, uncertainty quantification, offline reinforcement learning, and information\-theoretic coding for finite controlled Markov systems\.

## Systematic Scaling Analysis of Jailbreak Attacks in Large Language Models

**Authors:** Xiangwen Wang; Ananth Balashankar; Varun Chandrasekaran

**ID:** 149552\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149552

[Paper](<https://openreview.net/forum?id=pIEAacruEN>) | [PDF](<https://openreview.net/pdf?id=pIEAacruEN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149552>)

_Abstract unavailable from the accessible public sources._

## Argus: A Cross\-Regime Benchmark for the Transferability of Uncertainty Quantification in Computer\-Use Agents

**Authors:** DIVAKE KUMAR; Sina Tayebati; Devashri Naik; Amanda Rios; Nilesh Ahuja; Omesh Tickoo; Ranganath Krishnan; Amit Trivedi

**ID:** 139443\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139443

[Paper](<https://openreview.net/forum?id=PcafO7KeeW>) | [PDF](<https://openreview.net/pdf?id=PcafO7KeeW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139443>)

Computer\-use agents turn visual predictions into executable GUI clicks, so uncertainty estimates must support rejection, calibration, miss\-severity ranking, and spatial safety regions\. Existing post\-hoc uncertainty quantification \(UQ\) evidence is fragmented across isolated model and dataset pairs, leaving unclear whether UQ rankings remain stable when the agent, benchmark, or observable interface changes\. We present a cross\-regime benchmark for post\-hoc UQ in single\-step executable GUI grounding, covering a 27\-method, seven\-family open\-weight matrix over 4 GUI\-grounding VLM agents and 4 datasets, plus an 8\-method API\-compatible closed\-source matrix across 3 frontier vendors where logits, hidden states, and attention maps are unavailable\. The main finding is selective transfer: UQ rankings are stable across datasets for a fixed model, but degrade across model classes and observable interfaces\. Hidden\-state and density methods form the most stable open\-weight family, while CoCoA\-1MCA, Focus, sampling\-based scores, and verbalised self\-assessment win in specific regimes\. Ranking transfer is strongest within a fixed model across datasets, reaching Spearman $\\rho=0\.969$ and averaging $\\rho=0\.705$ over 120 open\-weight pairs\. In contrast, open\-weight to closed\-source transfer is the strongest break: cross\-tier Spearman $\\rho$ averages only $\+0\.08$ over 12 vendor x dataset pairs on the shared 8\-method intersection, indicating that UQ recommendations do not survive removal of internal model signals\. Model\-class transitions further reshape UQ preferences: attention, verbalised, and VLM\-native families lose AUROC on every dataset, while density methods remain stable; a scale\-only baseline shows that logit\-family degradation on ScreenSpot\-Pro is partly confounded by scale rather than grounding fine\-tuning alone\. Finally, conformal click regions show that score\-level discrimination is not enough for deployment: locally weighted disks can shrink radii by 40\-60% when the plug\-in UQ is calibrated, but coverage can degrade under calibration\-test or interface mismatch\. We release per\-item records, calibration/test splits, UQ scores, and analysis scripts as a reproducible basis for regime\-aware UQ selection in GUI agents\.

## Beyond Marginal Coverage: Efficient Localized Conformal Prediction via Residual Rank Calibration

**Authors:** Xiangshi Li; Wenqing He

**ID:** 153265\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153265

[Paper](<https://openreview.net/forum?id=MYBb7WHPyQ>) | [PDF](<https://openreview.net/pdf?id=MYBb7WHPyQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153265>)

Conformal prediction provides finite\-sample marginal coverage guarantees under exchangeability, but marginal validity alone does not ensure that prediction intervals adapt to local structure in the conditional distribution\. Existing adaptive methods such as conformalized quantile regression \(CQR\) and conformal histogram regression \(CHR\) improve conditional coverage by incorporating estimated quantiles or conditional densities into the conformity score, but doing so requires direct estimation of the conditional distribution of response $Y$ given covariates $X$, which can be statistically and computationally demanding\. We propose RLR\-CHR, a residual\-based local rank conformal histogram regression method that sidesteps full conditional distribution estimation by decoupling location and scale effects via a learned noise proxy and constructing histogram\-based conformity scores on the standardized residuals\. Local calibration is then performed through rank comparisons rather than weighted conformal quantiles, yielding a procedure that is both localized and computationally efficient\. We establish finite\-sample marginal coverage for RLR\-CHR under exchangeability and asymptotic conditional coverage under local stability of the residual score distribution\. We further prove that RLR\-CHR is asymptotically equivalent to its weighted\-localization counterpart RBC\-CHR under suitable regularity conditions, providing a precise theoretical justification for the reduction in per\-query computational cost without sacrificing asymptotic accuracy\. Experiments on synthetic and real datasets demonstrate that RLR\-CHR consistently improves worst\-slab coverage and produces more compact prediction intervals than existing conformal approaches\.

## Tcell: Mitigating Harmful Fine\-tuning for Large Language Models via  Gradient Alignment

**Authors:** Tiansheng Huang; Virat Vishnu Shejwalkar; Oscar Chang; Ling Liu

**ID:** 155716\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155716

[Paper](<https://openreview.net/forum?id=3Rc9uH2uQ1>) | [PDF](<https://openreview.net/pdf?id=3Rc9uH2uQ1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155716>)

Harmful fine\-tuning attack becomes a concerning safety risk for mainstream fine\-tuning\-as\-a\-service providers, as attackers can submit harmful data to the API to compromise the safety alignment of the large language models\. In this paper, we first explore an intuitive gradient mixing solution, and derive a key property ensuring the success of defense \-\- \\emph\{taking a fine\-tuning update that has higher cosine similarity with the safety gradient can mitigate harmful fine\-tuning\.\} Motivated by this key property, we design an alignment\-stage defense, dubbed Tcell\. The core contribution of Tcell is a regularizer that align the harmful gradient and the safety gradient during safety alignment, which ensures the harmful fine\-tuning update exhibits high cosine similarity with the safety gradient, achieving \\emph\{gradient alignment\}\. The benefit of gradient alignment is supported by  i\) empirical and theoretical interpretation and ii\) comparison to alternative design without gradient alignment\. Code is available at https://anonymous\.4open\.science/r/Tcell\-1C15/\.

## Multi\-bit LLM Watermarking with Certified Semantic Distortion

**Authors:** Chenxi Gu; Si Chen; John Grundy; Xiaoning Du

**ID:** 148648\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148648

[Paper](<https://openreview.net/forum?id=wB0DVBkk59>) | [PDF](<https://openreview.net/pdf?id=wB0DVBkk59>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148648>)

Watermarking has emerged as a fundamental mechanism for tracing the provenance of Large Language Model \(LLM\) outputs\. While multi\-bit watermarks are highly desirable for embedding rich metadata, they suffer from an inherent trade\-off between statistical detectability and text quality degradation\. Crucially, existing multi\-bit schemes lack theoretical quality guarantees, leaving them susceptible to unbounded semantic distortion\. To address this, we introduce CSD, the first multi\-bit watermarking framework with certified semantic distortion bounds\. In CSD, we derive a closed\-form upper bound on the Kullback\-Leibler \(KL\) divergence, mathematically guaranteeing strict limits on semantic distortion at every generation step\. Furthermore, rather than relying on static payloads, CSD employs a dynamic payload to maximize statistical detectability\. Extensive empirical evaluations across multiple datasets demonstrate that CSD achieves robust detectability while maintaining provably safe text generation\.

## Hallucination as Commitment Failure: Larger LLMs Misfire Despite Knowing the Answer

**Authors:** Jewon Yeom; Jaewon Sok; Heejun Kim; Seonghyeon Park; Jeongjae Park; Taesup Kim

**ID:** 154310\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154310

[Paper](<https://openreview.net/forum?id=EcJCjzBU18>) | [PDF](<https://openreview.net/pdf?id=EcJCjzBU18>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154310>)

Hallucination is often viewed as a direct consequence of missing knowledge: a model answers incorrectly when the correct answer is absent from its generation\-time distribution, and correctly when it is present\. We test this assumption by introducing a semantic notion of answer availability that aggregates token\-level variants expressing the same answer concept, and asks whether the correct concept is already available at the moment the model commits to an answer\. Across Qwen and Llama models from 0\.8B to 72B in both Instruct and Base variants, 16\-47\\% of Instruct hallucinations occur with substantial probability mass already on the correct concept, and the rate rises monotonically with scale\. Comparing such failures against correct generations with matched semantic support, the distinguishing factor is not whether the correct concept is represented, but how its probability is distributed: correct generations concentrate mass on a single surface form, hallucinations disperse it across alternatives\. The same sharpening asymmetry extends across multi\-token generation and is detectable in pre\-generation hidden states\. Together, these results identify a single mechanism: instruction tuning sharpens answer commitment with scale, making helpfulness and confident hallucination two consequences of the same underlying disposition\.

## CalArena: A Large Scale Post\-Hoc Calibration Benchmark

**Authors:** Eugène Berta; David Holzmüller; Francis Bach; Michael Jordan

**ID:** 139709\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139709

[Paper](<https://openreview.net/forum?id=97NdFtMyZ3>) | [PDF](<https://openreview.net/pdf?id=97NdFtMyZ3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139709>)

_Abstract unavailable from the accessible public sources._

## TensorCommitments: A Lightweight Verifiable Inference for Large Language Models

**Authors:** Oguzhan Baser; Elahe Sadeghi; Eric Wang; Nico Vergauwen; Sam Kazemian; Hong Kang; Sandeep Chinchali; Sriram Vishwanath

**ID:** 150256\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150256

[Paper](<https://openreview.net/forum?id=jYSZwwreXP>) | [PDF](<https://openreview.net/pdf?id=jYSZwwreXP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150256>)

_Abstract unavailable from the accessible public sources._

## Lethe: Link Inference Attacks For Evaluation of Edge Unlearning Methods

**Authors:** Andrea D&amp;amp;\#x27;Angelo; Francesco Gullo; Davide Mottin; Sayan Ranu; Giovanni Stilo

**ID:** 139781 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5Fexig0zwY>) | [PDF](<https://openreview.net/pdf?id=5Fexig0zwY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139781>)

_Abstract unavailable from the accessible public sources._

## DoG: Sniffing Out Overconfidence in LLM Agents via Post\-hoc Trajectory Restructuring

**Authors:** Hyunjun Jeon; Dongha Lim; Kunwoong Kim; Daewon Choi; Jinwoo Shin

**ID:** 152263 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UNOK2zAeoF>) | [PDF](<https://openreview.net/pdf?id=UNOK2zAeoF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152263>)

_Abstract unavailable from the accessible public sources._

## Graph\-Regularized Sparse Autoencoders for LLM Safety Steering

**Authors:** Jehyeok Yeon; Federico Cinus; Yifan Wu; Luca Luceri

**ID:** 152847 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PvSZSLQLGc>) | [PDF](<https://openreview.net/pdf?id=PvSZSLQLGc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152847>)

_Abstract unavailable from the accessible public sources._

## Many Benign Errors are Better than A Few Severe Ones: Evaluating Hallucination Severity

**Authors:** Sanjana Ramprasad; Pranav Mani; Chenhao Tan; Byron Wallace; Elisa Ferracane

**ID:** 139847 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0wbnAGgl8S>) | [PDF](<https://openreview.net/pdf?id=0wbnAGgl8S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139847>)

Factuality evaluation in summarization has largely focused on detecting hallucinations as binary phenomena\-\-\-labeling content as either supported or unsupported by the source\. However, modern LLMs increasingly generate nuanced, partially grounded content whose factual impact can vary widely—from benign inferences to severe distortions\. To enable more precise assessment, we propose a framework for annotating hallucination \\emph\{severity\} along two interpretable dimensions: \\emph\{implausibility\} \(how unreasonable a span is given the source or general knowledge\) and \\emph\{impact\} \(its potential to mislead or cause harm if assumed true\)\. Applying this framework to obtain annotations on model generations across domains, we find that many hallucinations are both plausible and benign, indicating that not all unsupported content is equally consequential\. We further show that severity\-aware evaluation can meaningfully alter model rankings, favoring models that generate more frequent yet benign hallucinations over those producing fewer but more detrimental errors—distinctions that conventional evaluation settings fail to capture\. Finally, we evaluate LLMs as severity judges: while their span detection remains weak, their severity ratings align closely with human judgments, making them promising candidates for scaling fine\-grained annotation\. Using severity as a diagnostic lens, we find that LLMs preferentially detect obvious errors but miss plausible, high\-impact ones\-\-\-precisely the cases that matter most for deployment\. Together, these findings argue for a shift toward severity\-aware factuality evaluation\.

## Agent Meltdowns: The Road to Hell Is Paved with Helpful Agents

**Authors:** Rishi Jha; Harold Triedman; Vitaly Shmatikov; Arkaprabha Bhattacharya

**ID:** 151325 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bLzbzox9it>) | [PDF](<https://openreview.net/pdf?id=bLzbzox9it>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151325>)

Agents operating with computer and Web use inevitably encounter errors: inaccessible webpages, missing files, local and remote misconfigurations, etc\. These errors do not thwart agents based on state\-of\-the\-art models\. They helpfully continue to look for ways to complete their tasks\.  In this paper, we introduce, characterize, and measure a new type of agent failure we call \*accidental meltdown\*: unsafe or harmful behavior in response to a benign environmental error, in the absence of any adversarial inputs\. We implemented an agent\-agnostic infrastructure for injecting simulated local and remote errors into a rollout environment and used it to systematically evaluate four agent systems powered by GPT, Grok, and Gemini\. Because meltdowns are not captured by the existing reliability or safety benchmarks, we developed a taxonomy of meltdown behaviors\.    Our evaluation demonstrates that meltdowns \(e\.g\., conducting unauthorized reconnaissance or subverting access control\) of varying severity and success occur in 64\.7% of agent rollouts that encounter simulated errors, spanning all combinations of agent system, backing model, and error type\. In over half of these meltdowns, unsafe behaviors are not reported to the user\. Comparing behaviors of the same agents with and without errors, we find that exploration in response to errors is correlated with unsafe and harmful behavior\.

## When Does Trimming Help Conformal Prediction? A Retained\-Law Diagnostic under Calibration Contamination

**Authors:** Congye Wang

**ID:** 148630 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wJGWapZaZl>) | [PDF](<https://openreview.net/pdf?id=wJGWapZaZl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148630>)

Trimming suspicious calibration points is a common response to contamination in conformal prediction\. Its effect on clean\-target coverage, however, is governed by the retained law induced by trimming, not by the contamination level alone\. We analyse fixed\-threshold trimming as conditioning rather than purification\. It replaces the contaminated calibration law with a retained law, reducing clean\-target coverage to a one\-dimensional score\-CDF transfer problem with an exact finite\-sample identity\. A componentwise bound on the transfer gap gives a population\-level diagnostic\. This separates a clean\-side covariance cost from a retained\-contamination cost, governed by the dirty\-to\-clean retention ratio\. Trimming helps when the anomaly score separates retention probabilities while remaining score\-neutral on the clean population\. Otherwise, it cannot substantially reduce contamination through the retained mixture coefficient\. We also give finite\-sample certificate templates that provide numerical guarantees under independent audit\.

## Calibration without labels in multiple testing

**Authors:** Adway S Wadekar; Jake A Soloff

**ID:** 150447 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hy5oPeNUEK>) | [PDF](<https://openreview.net/pdf?id=hy5oPeNUEK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150447>)

Large\-scale hypothesis testing supports probability claims about individual hypotheses, as in empirical Bayes methods for estimating local false discovery rates\. We study how such claims can be interpreted as approximately calibrated forecasts of the null hypothesis, yielding interpretable error probabilities even under model misspecification\. Our approach draws conceptual inspiration from probabilistic forecasting but addresses a different challenge: unlike forecasting, where labels are eventually observed, in multiple testing the ground truth is never revealed, so calibration must be assessed stochastically and established indirectly\. We address this challenge by constructing a set of pseudo\-labels, derived from the spacings of ordered $p$\-values, which have the local false discovery rate as their regression target\. Our construction unlocks existing tools for assessing and performing post\-hoc calibration in multiple testing\. Notably, we show that $q$\-values, a popular error measure based on the false discovery rate, can be severely miscalibrated\.

