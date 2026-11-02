# Optimization / Optimization

优化 / 综合优化

187 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## C\-GRPO: Conformal Group Relative Policy Optimization

**Authors:** Arya Fayyazi; Seyedarmin Azizi; Mehdi Kamal; Massoud Pedram

**ID:** 152332 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TrdqzzvFCs>) | [PDF](<https://openreview.net/pdf?id=TrdqzzvFCs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152332>)

Reasoning\-oriented language model training increasingly relies on multiple on\-policy rollouts, but standard Group Relative Policy Optimization \(GRPO\) uses a fixed group size, wasting compute on easy prompts and under\-exploring hard ones\. Existing adaptive\-budget methods alleviate this inefficiency, yet their stopping rules are heuristic and do not provide a finite\-sample calibration guarantee\. We propose CGRPO, which replaces the fixed rollout budget of standard GPRO with calibrated conformal thresholds over task\-specific nonconformity scores, combining Adaptive Prediction Set \(APS\)\-style calibration for closed\-form reasoning, a first\-success score for execution\-based code, automatic miscoverage selection, and periodic re\-calibration\. We prove finite\-sample coverage for the resulting stopping rule and show that, under monotone policy improvement, recalibration induces a non\-increasing expected training budget\. Across six benchmarks spanning mathematics, graduate\-level science, and code generation, CGRPO reduces mean training rollouts by 49\-70\\% relative to fixed\-budget GRPO while retaining strong fixed\-budget accuracy, achieves the strongest pass@1 among evaluated static and dynamic baselines on different datasets, and transfers across model families with up to 82\\% rollout savings\.

## Don't Claim Benchmark\-Oriented Optimization Improves General Coding Capability — Diverse Evaluation Is Required

**Authors:** Egor Shibaev; Vera Kudrevskaia; Timur Galimzyanov; Mikhail Evtikhiev; Ana Țerna; Rastislav Rabatin; Timur Kudashev; Timofey Bryksin; Arina Puchkova; Patrik Bartak; Egor Bogomolov; Sergey Titov

**ID:** 179728 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xmvm5TQJnM>) | [PDF](<https://openreview.net/pdf?id=xmvm5TQJnM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/179728>)

Papers, model cards, and blog posts often treat scores on a small set of coding benchmarks \(e\.g\., SWE\-bench and LiveCodeBench\) as evidence of broad "coding capability\."  We argue that optimization for these benchmarks leads to measuring task\-specific performance, creating a meaning gap between measured scores and claims of general coding ability\. To support our position, we examine this gap with a diagnostic Django\-based case study benchmark suite we create\.  Evaluating foundation models and checkpoints post\-trained on SWE\-bench trajectories, we find that benchmark rankings frequently fail to generalize\. Post\-trained checkpoints show little cross\-task transfer, and SWE\-bench optimization yields limited or no gains on our tasks or on LiveCodeBench\. Similarly, fine\-tuning on individual Django modalities fails to transfer\.  We conclude that a small number of benchmarks is insufficient for evaluating diverse models under benchmark optimization pressure\.  We encourage community to use differentiated evaluation—holistic assessment for frontier models, multi\-task suites for research, and human\-in\-the\-loop studies for narrow task applications\. Finally, we argue for creating a capability taxonomy and sustained benchmark maintenance, rather than one\-off benchmark releases\.

## Lower\-Level Agnostic Bilevel Optimization

**Authors:** Peiwen Qiu; Prashant Khanduri; Jia \(Kevin\) Liu

**ID:** 149854 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mnYCucQgEu>) | [PDF](<https://openreview.net/pdf?id=mnYCucQgEu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149854>)

Bilevel optimization is a fundamental framework for machine learning problems, where an upper\-level \(UL\) objective depends on the solution of a nested lower\-level \(LL\) problem\. Existing bilevel algorithms typically assume that the LL objective is available for evaluation, differentiation, or unrolling\. However, this assumption can fail when the LL response is produced by a black\-box solver, simulator, adversary, or learned predictor\. In this paper, we study \*lower\-level agnostic\* bilevel optimization, where the UL learner has access only to an approximate LL solution $\\bar\{\\mathbf\{y\}\}\(\\mathbf\{x\}\)$ and cannot query the LL objective, its gradients, Hessian/Jacobian information, or the procedure that generates the LL response\. We propose LeGo\-BiO \(\*\*L\*\*ower\-l\*\*e\*\*vel A\*\*g\*\*n\*\*o\*\*stic \*\*Bi\*\*level \*\*O\*\*ptimization\), a coordinate\-wise pseudo\-hypergradient method that estimates the missing Jacobian $\\nabla \_\{\\mathbf\{x\}\}\\bar\{\\mathbf\{y\}\}\(\\mathbf\{x\}\)$ using finite differences of $\\bar\{\\mathbf\{y\}\}\(\\cdot\)$\. For each UL coordinate, LeGo\-BiO constructs a decision vector subject to 1\-sparse updates, i\.e\., restricting modifications to a single coordinate per step, thereby isolating the corresponding Jacobian column needed in the UL gradient computation\. This avoids the directional\-projection limitation of full\-parameter response differences and, unlike zeroth\-order approximations of the entire UL gradient, preserves the available first\-order gradient information with respect to the UL variables for more accurate UL gradient evaluation\. We establish convergence guarantees for LeGo\-BiO in both deterministic and stochastic settings under an LL Polyak–Łojasiewicz condition, without requiring LL strong convexity\. Our bounds yield an $\\mathcal\{O\}\(T^\{\-1\}\)$ rate in the deterministic setting when the LL approximation error decreases geometrically, and an $\\mathcal\{O\}\(T^\{\-1/2\}\)$ rate in the stochastic setting under general LL approximation errors\. Experiments on deep hyper\-representation and adversarial training demonstrate competitive performance of LeGo\-BiO despite being agnostic to the LL objective\.

## Precision\-Aware Hopfield Retrieval: Unifying Population Codes and Memory Retrieval with Information Optimization

**Authors:** Yi\-Chun Hung; Dennis Wu; Hong\-Yu Chen; Han Liu; Emma Alexander

**ID:** 149371 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qYhHysIvHY>) | [PDF](<https://openreview.net/pdf?id=qYhHysIvHY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149371>)

Bayesian estimation has been used to explore optimal encoder\-decoders for continuous quantities, but no such framework exists for discrete associative memory\. We introduce precision\-aware Hopfield retrieval, a framework that incorporates the encoder's Fisher information directly into a decoder of memory retrieval\. Four results follow\. First, optimal encoder\-decoder information is shaped only by the prior, across both log and $L^p$ norm loss functions\. Second, the optimal information follows a general coupling law across log and $L^p$ loss functions\. Third, optimal precision\-aware Hopfield retrieval uses a stimulus\-dependent inverse temperature\. It outperforms the encoder\-blind Bayesian decoder on both retrieval loss and required coding resource\. Last, the framework yields a closed\-form expression for memory recall bias\. It reproduces central\-tendency and cognitive\-load effects observed in cognitive psychology\. These effects emerge only when the encoder and decoder are modeled jointly\.

## Parameterized Complexity of Stationarity Testing for Piecewise\-Affine Functions and Shallow CNN Losses

**Authors:** Yuhan Ye

**ID:** 155237 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7CznRls7QK>) | [PDF](<https://openreview.net/pdf?id=7CznRls7QK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155237>)

We study the parameterized complexity of testing approximate first\-order stationarity at a prescribed point for continuous piecewise\-affine \(PA\) functions, a basic task in nonsmooth optimization\. PA functions form a canonical model for nonsmooth stationarity testing and capture the local polyhedral geometry that appears in ReLU\-type training losses\. Recent work of Tian and So \(2025\) shows that testing approximate stationarity notions for PA functions is computationally intractable in the worst case, and identifies fixed\-dimensional tractability as an open direction\. We address this direction from the viewpoint of parameterized complexity, with the ambient dimension $d$ as the parameter\. In this paper, we give XP algorithms in fixed dimension for the tractable sides, and prove W\[1\]\-hardness for the complementary sides\. Moreover, lower bounds under the Exponential Time Hypothesis rule out algorithms running in time $\\rho\(d\)s^\{o\(d\)\}$ for any computable function $\\rho$, where $s$ denotes the total binary encoding length of the stationarity\-testing instance\. As a further consequence, our results yield the corresponding parameterized complexity picture for testing local minimality of continuous PA functions\. We further extend our hardness results to a family of shallow ReLU CNN training losses, with stationarity tested in the trainable weight space\. Thus, the same parameterized\-complexity picture also appears for simple CNN training losses\.

## Penalty\-Based First\-Order Methods for Bilevel Optimization with Minimax and Constrained Lower\-Level Problems

**Authors:** Yiyang Shen; Yutian He; Weiran Wang; Qihang Lin

**ID:** 153613 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K4vQ9YKOxc>) | [PDF](<https://openreview.net/pdf?id=K4vQ9YKOxc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153613>)

We study a class of bilevel optimization problems in which both the upper\- and lower\-level problems are minimax problems\. Existing studies on bilevel optimization primarily focus on settings where the lower\-level problem is an unconstrained or constrained minimization problem, and are therefore not directly applicable to the setting of a minimax lower\-level problem considered in this work\. To address this gap, we develop penalty\-based first\-order methods for bilevel minimax optimization\. In the deterministic setting, we prove that the proposed method finds an $\\epsilon$\-KKT point with $\\tilde\{O\}\(\\epsilon^\{\-4\}\)$ oracle complexity\. We further show that bilevel optimization problems with constrained lower\-level minimization can be reformulated, via Lagrangian duality under Slater's condition, as special cases of our framework and hence can also be solved by our method\. This yields an $\\tilde\{O\}\(\\epsilon^\{\-4\}\)$ complexity bound for finding an $\\epsilon$\-KKT point, improving upon the existing $\\tilde\{O\}\(\\epsilon^\{\-7\}\)$ result\. Finally, we extend our approach to the stochastic setting and establish that the proposed stochastic method finds a nearly $\\epsilon$\-KKT point with $\\tilde\{O\}\(\\epsilon^\{\-9\}\)$ oracle complexity\. To the best of our knowledge, these are the first deterministic and stochastic first\-order complexity results for bilevel minimax optimization\.

## ContinuLoc: Continuous Pose Inference over Neural Fields for UAV Geo\-Localization

**Authors:** Weikun Zhou; Jinliang Lin; Yu Zang; Lin Xie; HaiqingFu; Sheng Ao; Shangshu Yu; Zhiming Luo; Cheng Wang

**ID:** 149317 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=r4Nd67ZClj>) | [PDF](<https://openreview.net/pdf?id=r4Nd67ZClj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149317>)

Cross\-view UAV geo\-localization involves three design choices: how to represent the UAV observation, how to represent the geo\-referenced scene, and how to infer pose from their interaction\. The dominant paradigm organizes the world as a discretized 2DoF candidate library, coupling scene representation to inference and bounding pose accuracy by sampling resolution\. We decouple scene representation from pose inference by encoding the geo\-referenced world as a continuously queryable semantic neural field, enabling localization to be formulated as explicit optimization over a continuous 4DoF pose space — parameterized by 2D ground position, in\-plane heading, and viewing scale\. Pose hypotheses are evaluated globally in a shared semantic feature space, bypassing the sampling bottleneck of retrieval\. We learn 4DoF pose\-sensitive observation representations under full 4DoF supervision provided by ContinuScenes, a multi\-city benchmark with dense near\-nadir UAV imagery and complete pose annotations\. Inference proceeds hierarchically, progressing from broad pose\-space coverage to adaptive concentration on high\-compatibility regions\. Preliminary experiments demonstrate that our method substantially outperforms prevailing localization paradigms, including discrete retrieval and absolute pose regression, across increasingly strict 4DoF pose criteria\.

## TROPT: An Open Framework for Unifying and Advancing Discrete Text Optimization

**Authors:** Matan Ben\-Tov; Mahmood Sharif

**ID:** 139066 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nFkk23rNbo>) | [PDF](<https://openreview.net/pdf?id=nFkk23rNbo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139066>)

\*Discrete text\-trigger optimization\*—searching for text sequences that, when ingested by a model, steer it toward a specified objective—underpins model red\-teaming \(e\.g\., LLM jailbreaks\), as well as auditing and interpretability\. However, the current state of discrete optimizers hinders their adoption and progress\. First, existing optimizers, when open\-sourced at all, are scattered across research codebases tied to specific problem domains\. Second, optimizer variants proliferate, each requiring engineering overhead to use or extend, and hard to compare head\-to\-head\. Together, these raise the bar to \*adopting\* optimizers in existing or new domains, and to \*advancing\* them via new strategies\. We address these gaps with TROPT, the first open\-source framework that unifies discrete optimizers' execution and standardizes their development under a single interface\. TROPT currently ships with 30\+ end\-to\-end optimization recipes—covering applications such as jailbreaking and probing model internals—built from 15\+ optimizers \(spanning white\-box to black\-box access\) and 15\+ losses, from foundational to state\-of\-the\-art methods\. Beyond democratizing established methods, TROPT makes it easy to \*customize\* optimization recipes by swapping any component—models, objectives, and optimizers—extending its reach across domains and new applications\. Demonstrating its utility, we leverage TROPT in several controlled studies: \*\(i\)\* novel large\-scale experiments comparing and enhancing optimization strategies for LLM jailbreaks, revealing potent\-yet\-underadopted techniques; and \*\(ii\)\* cross\-domain demonstrations \(e\.g\., benign prompt recovery and corpus poisoning\)\. In all, TROPT significantly lowers the barrier to adopting and advancing discrete text optimization\.

## Robust and Efficient Continual Model Merging via Global Singular Subspace Separation and Restoration

**Authors:** Juncheol Shin; Byeongho Yu; Semin Kim; Eunhyeok Park

**ID:** 148589 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wdIBHsopRB>) | [PDF](<https://openreview.net/pdf?id=wdIBHsopRB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148589>)

Continual model merging addresses a more realistic setting in which task\-specific models arrive sequentially\. Naive extension of standard model merging approaches to the continual setting leads to task balance collapse and substantial performance degradation\.  To address this issue, we propose Global Singular Subspace Separation and Restoration \(GS3R\), a data\-free and optimization\-compatible framework for continual model merging\. GS3R preserves task balance by globally separating singular components and introducing vector restoration matrices for perturbation\-free recovery\. To further enhance efficiency, we introduce Pre\-merge Restoration and Flushing \(PRF\), which guarantees peak memory usage comparable to that of other methods\. Experiments on vision and language tasks demonstrate that GS3R consistently outperforms prior continual model merging methods\.

## When Streaming Fails: Dynamic Algorithms for Unconstrained Submodular Maximization

**Authors:** Kiarash Banihashem; MohammadTaghi Hajiaghayi; Peyman Jabbarzade; Samira Goudarzi; Morteza Monemizadeh

**ID:** 154760 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BAkDvtpvDd>) | [PDF](<https://openreview.net/pdf?id=BAkDvtpvDd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154760>)

Dynamic submodular optimization has attracted significant attention in recent     years, with a growing body of work studying both monotone and non\-monotone     variants under various constraints\. A key insight underlying much of this     progress is that the dynamic setting is closely related to the     streaming setting, both in terms of algorithms and lower bounds\. This raises a     natural and fundamental question: \\emph\{can we obtain dynamic algorithms     even for problems where no streaming analogue exists?\} In this paper, we answer this question affirmatively for the fundamental     problem of Unconstrained Submodular Maximization \(USM\)\. Unlike other     variants of submodular maximization, no streaming algorithm with     non\-trivial guarantees is known for USM\.      In the dynamic setting, a trivial     $0\.25$\-approximation follows from random sampling, but obtaining any better     approximation with sublinear update time had remained open\. We present the     first dynamic algorithms for USM that break the $0\.25$\-approximation     barrier while maintaining sublinear update time, across several natural     dynamic models: incremental updates, decremental updates with known     deletion order, and fully dynamic updates with known deletion times\.

## Robust Policy Optimization to Prevent Catastrophic Forgetting

**Authors:** Mahdi Sabbaghi; George J\. Pappas; Adel Javanmard; Hamed Hassani

**ID:** 150750 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fg8I6pwObp>) | [PDF](<https://openreview.net/pdf?id=fg8I6pwObp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150750>)

_Abstract unavailable from the accessible public sources._

## Riemannian Lyapunov Framework: Optimization as Closed\-Loop Control on Riemannian Manifolds

**Authors:** Yixuan Wang; Omkar Sudhir Patil; Warren Dixon

**ID:** 155509 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=548NwQAdhQ>) | [PDF](<https://openreview.net/pdf?id=548NwQAdhQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155509>)

_Abstract unavailable from the accessible public sources._

## VSPO: Vector\-Steered Policy Optimization for Controllable Model Behavior

**Authors:** Xuechen Zhang; Zijian Huang; Kai Yang; Weijia Zhang; Jiasi Chen; Samet Oymak

**ID:** 154454 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DSKSg1Kz1q>) | [PDF](<https://openreview.net/pdf?id=DSKSg1Kz1q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154454>)

_Abstract unavailable from the accessible public sources._

## Follow the Regularized Leader Does Not Converge in Constrained Optimization

**Authors:** Ioannis Anagnostides; Ioannis Panageas; Nikolas Patris; Tuomas Sandholm

**ID:** 150986 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dmNapb9nHG>) | [PDF](<https://openreview.net/pdf?id=dmNapb9nHG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150986>)

Follow the regularized leader \(FTRL\) is a foundational algorithm in online learning whose regret properties have been extensively studied for decades\. However, in stark contrast to mirror descent\-\-\-and gradient descent in particular\-\-\-the convergence of FTRL to first\-order stationary points in constrained nonconvex optimization was hitherto unresolved\. In this paper, we show that continuous\-time FTRL can fail to converge even asymptotically in constrained optimization problems; that is, the Karush\-Kuhn\-Tucker \(KKT\) gap of FTRL can remain bounded away from zero indefinitely\. This is especially surprising in light of the fact that continuous\-time FTRL guarantees a monotonic improvement of the objective value\. As a result, we establish that non\-convergent behavior of no\-regret dynamics\-\-\-which besets general variational inequality problems\-\-\-can occur even in potential systems\. From a technical standpoint, our construction relies on an infinitely differentiable function where the gradient flow dynamics exhibit decelerating oscillations without ever converging pointwise, which we in turn embed into higher\-dimensional FTRL dynamics that sustain a perpetually large KKT gap\.

## When Streaming Fails: Dynamic Algorithms for Unconstrained Submodular Maximization

**Authors:** Kiarash Banihashem; MohammadTaghi Hajiaghayi; Peyman Jabbarzade; Samira Goudarzi; Morteza Monemizadeh

**ID:** 154760\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154760

[Paper](<https://openreview.net/forum?id=BAkDvtpvDd>) | [PDF](<https://openreview.net/pdf?id=BAkDvtpvDd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154760>)

Dynamic submodular optimization has attracted significant attention in recent     years, with a growing body of work studying both monotone and non\-monotone     variants under various constraints\. A key insight underlying much of this     progress is that the dynamic setting is closely related to the     streaming setting, both in terms of algorithms and lower bounds\. This raises a     natural and fundamental question: \\emph\{can we obtain dynamic algorithms     even for problems where no streaming analogue exists?\} In this paper, we answer this question affirmatively for the fundamental     problem of Unconstrained Submodular Maximization \(USM\)\. Unlike other     variants of submodular maximization, no streaming algorithm with     non\-trivial guarantees is known for USM\.      In the dynamic setting, a trivial     $0\.25$\-approximation follows from random sampling, but obtaining any better     approximation with sublinear update time had remained open\. We present the     first dynamic algorithms for USM that break the $0\.25$\-approximation     barrier while maintaining sublinear update time, across several natural     dynamic models: incremental updates, decremental updates with known     deletion order, and fully dynamic updates with known deletion times\.

## Unveiling Memorization–Generalization Coexistence: A Case Study on Arithmetic Tasks with Label Noise

**Authors:** Linyu Liu; Pinyan Lu

**ID:** 148534 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xBZ9SuztWE>) | [PDF](<https://openreview.net/pdf?id=xBZ9SuztWE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148534>)

Highly over\-parameterized models can simultaneously memorize noisy labels and generalize well, yet how these behaviors coexist remains Highly over\-parameterized models can simultaneously memorize noisy labels and generalize well, yet how these behaviors coexist remains poorly understood\. In this work, we investigate the underlying mechanisms of this coexistence using modular arithmetic tasks under heavy label noise\. Through extensive experiments on two\-layer neural networks, we find that larger models tend to generalize better under appropriate optimization and model configurations, while noisy labels are memorized faster than clean data\. Over\-parameterized models internally form a generalization structure, but its expression in the output is suppressed by the need to fit noisy labels\. Remarkably, even with 80\\% label noise, near\-perfect test accuracy can be achieved by extracting this internal structure using frequency\-based methods\. We further propose a task\-agnostic method to partition networks into generalization and memorization components\. Although this subnetwork improves generalization, it is limited compared with frequency\-based extraction, indicating that the generalization structure is distributed across neurons and motivating the development of new tools to retrieve generalizable knowledge from over\-parameterized networks\.

## Expected Batch Optimal Transport Plans and Consequences for Flow Matching

**Authors:** Samuel Boïté; Julie Delon; Kimia Nadjahi

**ID:** 154399 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Drh2loVsgL>) | [PDF](<https://openreview.net/pdf?id=Drh2loVsgL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154399>)

Solving optimal transport \(OT\) on random minibatches is a common surrogate for exact OT in large\-scale learning\. In flow matching \(FM\), this surrogate is used to obtain OT\-like couplings that can straighten probability paths and reduce numerical integration cost\. Yet, the population\-level coupling induced by repeated minibatch OT remains only partially understood\. We formalize this coupling as the expected batch OT plan $\\overline\{\\pi\}\\\_\{k\}$, obtained by averaging empirical OT plans over independent minibatches of size $k$\. We then establish its large\-batch consistency and, in the semidiscrete case relevant to generative modeling, derive rates for both the transport\-cost bias and the convergence of $\\overline\{\\pi\}\\\_\{k\}$ to the OT plan\. For FM, this yields a population coupling whose induced velocity field is regular enough to define a unique flow from the source to the discrete target\. We finally quantify how OT batch size interacts with numerical integration in a tractable two\-atom model and in synthetic and image experiments\.

## RxnOptBench: Benchmarking LLMs for Reaction\-Condition Optimization in Organic Methodology

**Authors:** Lingli Ge; Junyuan Gao; Jiahe Song; Jiaxing Sun; Yubin Wang; Boyu Zhu; Haote Yang; Jingchao Wang; Lixin Ma; Jiang Wu; Yuqiang Li; Conghui He

**ID:** 139063 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nRZPOomuFO>) | [PDF](<https://openreview.net/pdf?id=nRZPOomuFO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139063>)

_Abstract unavailable from the accessible public sources._

## From SGD to Muon: Adaptive Optimization via Schatten\-p Norms

**Authors:** Thomas Massena; Corentin Friedrich; Mathieu Serrurier

**ID:** 148891 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uQkr5twCZH>) | [PDF](<https://openreview.net/pdf?id=uQkr5twCZH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148891>)

Modern optimizers, like Muon, impose matrix\-wise geometry constraints on their updates\. These matrix\-wise constraints can be unified under Linear Minimization Oracle \(LMO\) theory\. However, all current methods impose fixed LMO geometries for the update rules, chosen by\-design or empirically, which are not necessarily optimal according to the problem's geometry\. We introduce a novel efficient data\-driven criterion for dynamically choosing proxy\-optimal update LMO geometries on individual Deep Neural Network layers\. Derived in closed form from gradient and activation statistics using a single\-step random feature regression surrogate model, our criterion navigates a design space interpolating from SGD to Muon updates\. Moreover, integrating parameter\-wise preconditioning allows our framework to recover SGD, Muon, Adam, and MuAdam as specific extrema\. To make this adaptive approach scalable, we pair it with efficient computational strategies, achieving only a $\\sim 3$% runtime overhead on highly optimized baselines\. As a proof of concept, we show that this data\-driven optimizer matches or exceeds the performance of the best performing optimizer between Muon and AdamW across three different training scenarios\. Ultimately, this work provides evidence that LMO geometry can be successfully and efficiently adapted from runtime data, opening a new pathway for optimizer design beyond static geometries\.

## Intrinsic Muon: Spectral Optimization on Riemannian Matrix Manifolds

**Authors:** Yibang Li; Bihari L Pandey; Ravi Sah; Andi Han; Cyrus Mostajeran; Pratik Kumar Jawanpuria; Bamdev Mishra

**ID:** 148345 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yYWccp8wIs>) | [PDF](<https://openreview.net/pdf?id=yYWccp8wIs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148345>)

Muon and related norm\-constrained matrix optimizers have become central to large\-scale learning problems\. They are formulated as a linear maximization oracle \(LMO\) over an ambient matrix\-norm ball in unconstrained Euclidean space\. However, these do not generalize cleanly to manifold\-valued parameters such as low\-rank factorizations, orthogonality constraints, or symmetric positive definite \(SPD\) matrices\. Naively restricting the Muon LMO to the tangent space \(i\) breaks quotient symmetries and \(ii\) couples the tangent\-space constraint with an ambient norm bound, thereby obstructing closed\-form solutions on various manifolds of interest\. We resolve both issues with a single observation: every Riemannian metric canonically lifts a unitarily invariant Euclidean norm to an intrinsic norm on each tangent space, and the resulting intrinsic norm constrained LMO is symmetry preserving\. Building on this, we introduce intrinsic Muon \(iMuon\), a unified framework that yields closed\-form updates on the fixed\-rank, SPD, Stiefel, and Grassmann manifolds for any unitarily invariant norm, including the spectral, Frobenius, and nuclear norms\. We establish convergence guarantees for both deterministic and stochastic iMuon with rate constants that depend only on the manifold dimension\. Notably, on the fixed\-rank manifold this constant depends only on the rank, making the rate independent of factor conditioning and removing the runtime factor\-rescaling required by prior work\. Experiments on LoRA finetuning of LLMs, image classification, and subspace learning illustrate the efficacy of the proposed approach\.

## Fast, Relaxation‑ and Hyperparameter‑Free Pairwise Worst\-Case Class Separation

**Authors:** Mohammad Mahdi Omati; Arash Amini; Nezam Mahdavi\-Amiri

**ID:** 149044 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tIGr4bvK5s>) | [PDF](<https://openreview.net/pdf?id=tIGr4bvK5s>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149044>)

In this paper, we investigate a novel discriminative dimensionality reduction method based on maximizing the minimum pairwise ratio of between\-class to within\-class scatter\. This objective function enhances class separability by providing critical, adaptive control over the variance within each class pair\. The resulting max\-min fractional program is non\-convex and challenging to solve\. Our main contribution is F$^3$\-PWCRA \(Fast, Free of relaxation, Free of hyperparameters for Pairwise Worst\-Case Ratio Analysis\), a provably convergent two\-level algorithm: an outer generalized Dinkelbach\-type loop transforms the fractional objective into subtractive subproblems, ensuring the global convergence of the outer algorithm\. Then, we propose a bisection strategy as an alternative, which offers robust convergence and straightforward implementation\. For the inner loop, we develop an efficient minorization\-maximization \(MM\) algorithm that tackles the non\-convex subproblem by iteratively solving a simple quadratic program \(QP\), which we derive from the dual of a convex surrogate\. F$^3$\-PWCRA is computationally efficient, free from semidefinite relaxations and hyperparameter tuning, and extensive benchmarks show it consistently outperforms state\-of\-the\-art methods in classification error\.

## PORTool: Importance\-Aware Policy Optimization with Rewarded Tree for Multi\-Tool\-Integrated Reasoning

**Authors:** Feijie Wu; Weiwu Zhu; Yuxiang Zhang; Soumya Chatterjee; Jiarong Zhu; Fan Mo; Rong Luo; Jing Gao

**ID:** 155506 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=54keqZlySs>) | [PDF](<https://openreview.net/pdf?id=54keqZlySs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155506>)

Multi\-tool\-integrated reasoning enables LLM\-empowered tool\-use agents to solve complex tasks by interleaving natural\-language reasoning with calls to external tools\. However, training such agents from outcome\-only rewards suffers from credit\-assignment ambiguity, obscuring which intermediate tool\-use decisions drive success or failure\. In this paper, we propose PORTool, an importance\-aware policy\-optimization algorithm that reinforces agents' tool\-use competence from outcome\-level supervision while assigning reward at the step level\. Specifically, PORTool generates a rewarded rollout tree in which trajectories share prefixes before branching, enabling direct comparisons among alternative tool\-use decisions within the same context\. It then estimates each step's importance by a correctness\-dominant signal, i\.e\., whether descendants of that step can ultimately produce a correct final answer, plus an auxiliary term indicating whether the step's tool calls satisfy formatting constraints and execute successfully\. Using these step\-wise importance estimates, PORTool updates the policy to generate efficient tool\-call steps, guided by both local comparisons within each branching decision and the overall quality of entire trajectories\. Experiments show that PORTool improves final\-answer accuracy while reducing tool\-call steps compared with state\-of\-the\-art policy\-optimization baselines, and ablation studies confirm the robustness of the proposed step\-wise importance estimates\.

## Exact Combinatorial Optimization for Partial Permutation Synchronization

**Authors:** Mohammad Mahdi Omati; Arash Amini

**ID:** 153163 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NPIijWupQs>) | [PDF](<https://openreview.net/pdf?id=NPIijWupQs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153163>)

In permutation synchronization, the goal is to find globally cycle‐consistent correspondences from noisy pairwise matchings\. In this work, unlike spectral relaxations that embed permutations into an orthogonal space and often result in inaccuracies, we maintain the problem in its original combinatorial form\. By shifting the affinity spectrum to ensure positive semidefiniteness, we cast the trace‐maximization over partial permutations as a convex‐in‐P formulation\. Our minorization\-maximization scheme then replaces this with a sequence of exact linear‐assignment subproblems, the row\-/column\-sum constraints of which are totally unimodular, guaranteeing integral solutions with no rounding\. This direct, combinatorial approach delivers a monotonic objective ascent, convergence to a KKT point, and achieves superior accuracy, cycle consistency, and runtime on image\-matching benchmarks\.

## Learning Where to Look: Observation Policy Optimization for Thinking with Images

**Authors:** Junfeng Wang; Jiawei Liu; Yongchao Xu; Tao Jiang; jiangbo Ai; Jin Zhang; Chong Wang; Qixing Zhang

**ID:** 150969 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dutSx0FFvu>) | [PDF](<https://openreview.net/pdf?id=dutSx0FFvu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150969>)

Complex visual question answering often requires vision\-language models to think with images, i\.e\., actively acquire local visual evidence by zooming into informative regions of high\-resolution images\. Our error analysis shows that many failures in this setting originate from incorrect observation actions, where the model fails to localize key regions or obtain crops that contain sufficient evidence for answering\. We further observe that bounding\-box tokens exhibit substantially higher generation entropy than ordinary language tokens, indicating high uncertainty when the model decides where to look\. However, existing reinforcement learning methods based on final\-answer rewards provide only trajectory\-level feedback, making it difficult to assign precise credit to the observation actions\. We propose Observation Policy Optimization \(OPO\), an RL algorithm for optimizing observation actions in tool\-augmented thinking with images\. OPO consists of two core modules\. First, Uncertainty\-Guided Observation Branching \(UOB\) treats each image zoom\-in tool call as an observation event and selectively branches at high\-uncertainty, low\-redundancy events during rollout, enabling efficient exploration of alternative cropping decisions and their resulting visual evidence\. Second, Evidence\-Localized Advantage Attribution \(ELAA\) compares sibling branches using local evidence\-sufficiency rewards and assigns credit only to the corresponding observation\-action tokens\. By decoupling observation\-action optimization from trajectory\-level outcome supervision, OPO improves visual evidence acquisition and further enhances visual reasoning performance\. Experiments show that OPO consistently improves Qwen3\-VL models across scales and achieves competitive performance against larger models and tool\-augmented baselines\.

## The Hidden Power of Scaling Factor in LoRA Optimization

**Authors:** Zicheng Zhang; Haoran Li; Jiaxing Wang; Guoqiang Gong; Anqi Li; Yudong Hu; Ting Xiong; Yurong Gao; Junxing Hu; Zhida Jiang; Yifeng Zhang; Pengzhang Liu; Qixia Jiang

**ID:** 153734 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=J9AbM86AH7>) | [PDF](<https://openreview.net/pdf?id=J9AbM86AH7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153734>)

_Abstract unavailable from the accessible public sources._

## Positive\-Unlabeled Preference Optimization For Chest X\-ray Report Generation

**Authors:** Yuta Kobayashi; Pradyun Ramesh; Muhammad Ahmed Chaudhry; Vincent Jeanselme; Judy Wawira; Sanmi Koyejo; Kathleen M Capaccione; Shalmali Joshi

**ID:** 154826 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Aecnz8LJjt>) | [PDF](<https://openreview.net/pdf?id=Aecnz8LJjt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154826>)

_Abstract unavailable from the accessible public sources._

## Bias\-Variance Optimized Preference Optimization for Large Reasoning Models

**Authors:** Mingkang Zhu; Xi Chen; Bei Yu; Hengshuang Zhao; Jiaya Jia

**ID:** 152470 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SqjlMwxRLI>) | [PDF](<https://openreview.net/pdf?id=SqjlMwxRLI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152470>)

_Abstract unavailable from the accessible public sources._

## Conflict\-Aware Logit Adapters for Utility\-Preserving Anti\-Distillation

**Authors:** Quoc P Dao; Binh Anh Nguyen; Linh Ngo; Thanh\-Toan Do; Mehrtash Harandi; Trung Le

**ID:** 152508 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Sc1RFFLbFC>) | [PDF](<https://openreview.net/pdf?id=Sc1RFFLbFC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152508>)

While reasoning traces improve model capability, they also create a pathway for extracting supervision signals for downstream distillation\. Initial efforts to mitigate this rely on decoding\-time interventions, but they incur high inference overhead and often harm the teacher model's natural fluency\. We propose Conflict\-Aware Logit Adapters \(CALA\), a lightweight training\-time defense\. CALA attaches a small residual adapter to a frozen teacher model and trains only this adapter\. A proxy student identifies positions where imitation is most sensitive, and the adapter perturbs the output distribution there within high\-probability regions\. A conflict\-aware optimization balances competing anti\-distillation and utility objectives, with regularization preserving the teacher’s performance and fluency\. At inference, CALA adds negligible overhead with no auxiliary models required\. Experiments on reasoning benchmarks show that CALA substantially reduces successful student imitation while maintaining near\-original teacher performance and generation quality, offering a practical and efficient alternative to decoding\-time approaches\.

## Riemannian Optimization for Low\-Rank Adaptation via Desingularization

**Authors:** Tiancan Feng; Daorui Ding; Fanhua Shang; Xiaoyuan Zhang

**ID:** 150239 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jiYYPiWmCI>) | [PDF](<https://openreview.net/pdf?id=jiYYPiWmCI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150239>)

Low\-rank Adaptation \(LoRA\) has been widely used as a parameter\-efficient method in fine\-tuning large language models \(PEFT\)\. However, trained adapters often exhibit low stable rank and small trailing singular values\. Near such rank\-deficient regions, fixed\-rank formulations suffer from severe Hessian bounds and local Lipschitz constants that grow with $\\mathcal\{O\}\\big\(\\sigma^\{\-1\}\_r\(X\)\\big\)$\. To mitigate this issue, we propose ROLAND \(\*\*R\*\*iemannian \*\*O\*\*ptimization for \*\*L\*\*ow\-Rank \*\*A\*\*daptatio\*\*N\*\* via \*\*D\*\*esingularization\), a desingularization method that lifts LoRA to a smooth bounded\-rank geometry with both left and right null\-space projectors\. ROLAND replaces rank\-deficient singularities with compact and smooth fibers while retaining a low\-rank representation of the adapter update\. Within this framework, we equip the manifold optimization with a new Riemannian metric and retraction mechanism, which allow us to establish tighter Hessian bounds and milder condition\-number dependence in the local convergence rate\. Empirical results demonstrate ROLAND's superiority across a wide range of experimental settings compared with other state\-of\-the\-art PEFT methods\.

## Layerwise LQR for Geometry\-Aware Optimization of Deep Networks

**Authors:** Simon Dufort\-Labbé; Pierre\-Luc Bacon; Razvan Pascanu; Simon Lacoste\-Julien; Aristide Baratin

**ID:** 148444 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xlQ8m3yAYM>) | [PDF](<https://openreview.net/pdf?id=xlQ8m3yAYM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148444>)

Geometry\-aware optimizers such as Newton and natural gradient can improve conditioning in deep learning, but scalable variants such as K\-FAC, Shampoo, and related preconditioners usually impose structural approximations early, often discarding cross\-layer interactions induced by the network computation\. We introduce Layerwise LQR \(LLQR\), a framework for learning structured inverse preconditioners under a global layerwise optimal\-control objective\. The starting point is an exact equivalence: the steepest\-descent step under a broad class of divergence\-induced quadratic models—including Newton, Gauss–Newton, Fisher/natural\-gradient, and intermediate\-layer metrics—can be written as a finite\-horizon Linear Quadratic Regulator \(LQR\) problem\. This formulation serves as a reference that exposes the layerwise dynamics and cost matrices encoding the original dense geometry\. We then derive a scalable relaxation that learns diagonal, \(E\-\)Kronecker\-factored, or other structured inverse preconditioners by minimizing the LQR objective and reusing them across iterations\. The resulting optimizer wraps standard methods while retaining a principled connection to second\-order geometry, without forming or inverting the global curvature matrix\. Experiments on ResNets and Transformers show that LLQR improves optimization dynamics and often translates these gains into improved final test performance, while adding only modest wall\-clock overhead\. It establishes LLQR as a practical framework for geometry\-aware second\-order methods and a reference for evaluating scalable approximations\.

## Robust Policy Optimization to Prevent Catastrophic Forgetting

**Authors:** Mahdi Sabbaghi; George J\. Pappas; Adel Javanmard; Hamed Hassani

**ID:** 150750\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150750

[Paper](<https://openreview.net/forum?id=fg8I6pwObp>) | [PDF](<https://openreview.net/pdf?id=fg8I6pwObp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150750>)

_Abstract unavailable from the accessible public sources._

## Riemannian Lyapunov Framework: Optimization as Closed\-Loop Control on Riemannian Manifolds

**Authors:** Yixuan Wang; Omkar Sudhir Patil; Warren Dixon

**ID:** 155509\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155509

[Paper](<https://openreview.net/forum?id=548NwQAdhQ>) | [PDF](<https://openreview.net/pdf?id=548NwQAdhQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155509>)

_Abstract unavailable from the accessible public sources._

## Towards Better Generalization in Lifelong Person Re\-Identification with Flatness\-Aware Learning

**Authors:** Seungbin Hong; Sung Whan Yoon; Jae\-Young Sim

**ID:** 155207 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7TZx0YOrdx>) | [PDF](<https://openreview.net/pdf?id=7TZx0YOrdx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155207>)

Lifelong person re\-identification \(LReID\) requires models to continuously learn from sequentially arriving domains while retaining discriminative power for previously seen identities\. A key challenge is to prevent catastrophic forgetting without access to old data, especially under exemplar\-free constraints\. While flat\-minima optimization has shown promise in continual learning, we identify a gradient conflict that limits the effectiveness of standard Sharpness\-Aware Minimization \(SAM\) in LReID\. The ReID loss gradient dominates the perturbation direction, causing the sharpness of the distillation loss to be underestimated, which hinders the flattening of the landscape necessary for knowledge retention\.   To resolve this conflict, we propose a framework that unifies selective flatness\-aware optimization, dual\-model training, and weight\-space interpolation\. Specifically, we maintain two models per task: a stability model whose SAM perturbation is computed solely from the distillation loss, and a plasticity model optimized for the current domain\. By decoupling the perturbation objectives, our selective SAM achieves more targeted sharpness exploration along the distillation landscape, guiding the stability model toward flatter and robust regions\. After training, the two models are fused via weight\-space interpolation, and we provide a theoretical bound showing that flatter stability solutions tighten the interpolation bound and reduce forgetting during fusion\. Our method is lightweight, modular, and readily compatible with existing LReID frameworks\. Experimental results demonstrate that the proposed method consistently improves the performance of LReID in terms of both knowledge retention and generalization to unseen domains\.

## Absolute State\-wise Constrained Policy Optimization: High\-Probability State\-wise Constraints Satisfaction

**Authors:** Weiye Zhao; Feihan Li

**ID:** 149439 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q54wRgjMnG>) | [PDF](<https://openreview.net/pdf?id=q54wRgjMnG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149439>)

Enforcing state\-wise safety constraints is critical for the application of reinforcement learning \(RL\) in real\-world problems, such as autonomous driving and robot manipulation\. However, existing safe RL methods often enforce state\-wise constraints only in expectation, while hard state\-wise guarantees typically require strong dynamics assumptions\. The former can still allow rare but severe violations, while the latter is impractical in model\-free stochastic systems\. We instead target high\-probability control of the maximum instantaneous cost along a trajectory\. To accomplish this goal, we propose Absolute State\-wise Constrained Policy Optimization \(ASCPO\), a model\-free policy search algorithm whose exact update provides a distribution\-free high\-probability certificate for state\-wise constraint satisfaction in stochastic systems\. The guarantee holds under finite variance and does not require Gaussian, unimodal, or light\-tailed cost distributions\. We demonstrate the effectiveness of our approach by training neural network policies for extensive robot locomotion tasks, where the agent must adhere to various state\-wise safety constraints\. Our results show that ASCPO most consistently reduces state\-wise safety violations while maintaining competitive reward across challenging continuous control tasks\.

## Online Learning on Hidden\-Convex Losses via Algorithmic Equivalence: Optimal Regret, Geometric Barrier, and Bandit Feedback

**Authors:** Anas Barakat; Andreas Kontogiannis; Vasilis Pollatos; Ioannis Panageas; Antonios Varvitsiotis

**ID:** 149131 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sdtnLayEs7>) | [PDF](<https://openreview.net/pdf?id=sdtnLayEs7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149131>)

We study adversarial online learning with hidden\-convex losses, i\.e\., nonconvex losses that become convex after a nonlinear reparameterization\. Ghai, Lu, and Hazan \(NeurIPS 2022\) proved that, under geometric and smoothness assumptions, online gradient descent \(OGD\) on such nonconvex losses approximately simulates online mirror descent \(OMD\) on the underlying convex losses with a suitable regularizer, yielding $\\mathcal\{O\}\(T^\{2/3\}\)$ regret\. They left open whether the optimal $\\Theta\(\\sqrt\{T\}\)$ regret from online convex optimization can be recovered in this hidden\-convex setting\. We answer this question affirmatively\. More specifically, via a sharper discrete\-time algorithmic equivalence argument, we prove that OGD achieves $\\mathcal\{O\}\(\\sqrt\{T\}\)$ regret under the same assumptions, matching the optimal worst\-case rate for adversarial online convex optimization\. We also address another open question of Ghai, Lu, and Hazan  by clarifying the geometry required for this algorithmic equivalence\. We replace the diagonal\-Jacobian sufficient condition with a necessary\-and\-sufficient Hessian compatibility condition, thereby expanding the class of admissible reparameterizations\. We complement our tight regret bound with a lower bound showing that the Hessian compatibility assumption is essential for OGD; when it fails, we construct a smooth reparameterization and an adversarial sequence of hidden\-convex losses for which OGD suffers $\\Omega\(T\)$ regret\. Finally, we extend our analysis to one\-point bandit feedback and prove a $\\mathcal\{O\}\(T^\{3/4\}\)$ expected regret bound for bandit OGD with spherical smoothing, matching its classical rate on convex losses\.

## Continuous p\-adic Optimization

**Authors:** Julian Salazar; Dimitri Kanevsky; Matt Harvey; Pascal Getreuer; Lucas Dixon

**ID:** 149111 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=smz6odwrZ6>) | [PDF](<https://openreview.net/pdf?id=smz6odwrZ6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149111>)

We present the first method for intrinsic, continuous gradient\-based optimization for models with $p$\-adic parameters\. To overcome the vanishing gradients caused by the discrete valuation of the $p$\-adics, we lift parameters to the Berkovich affine line, a canonical analytification of the $p$\-adic numbers that provides a path\-connected space\. This enables gradient descent that respects the non\-Archimedean metric with a local transition cost that is linear\. By extending losses to the Berkovich line, we get piecewise linear functions, corresponding to the cell decomposition of a tropical complex; gradients are efficiently computed via max\-plus operations\. We prove local convergence within tropical cells for linear models on the $\\mathbb\{Q\}\_p$ subtree, and demonstrate the success of our method on synthetic tasks and on the $p$\-adic Quillian semantic benchmark \[Martins, 2025\], where we achieve performance equal or better than $\\mathbb\{R\}$\-valued counterparts while training in comparable time\.

## SAS: Simple Attention Sparsification via End\-to\-End Optimization of Context Ranking

**Authors:** Zhiwei Li; Lei Zhu; Hao Gu; Xiang Hu; Yan Wang; Haitao Mi; Sirui Han; Leo Liang; Zhijiang Guo

**ID:** 151940 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Wgm2AWIzrX>) | [PDF](<https://openreview.net/pdf?id=Wgm2AWIzrX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151940>)

Post\-training attention sparsification reduces the quadratic cumulative attention cost of pretrained Transformers by selecting a small set of context units \(tokens or blocks\) for each query\. Existing trainable methods usually rely on a lightweight selector to score context units followed by a hard Top\-$K$ selection, which blocks gradients from the language modeling loss\. As a result, these methods commonly resort to distilling layer\-wise dense attention distributions\. While this approach encourages the selector to rank context units according to dense attention weights in the original model, such a ranking is not directly aligned with their impact on the model's final predictions under a fixed attention budget \(ie, the number of attended context units per query\), which can waste the limited attention budget on less useful units\.  To address this ranking misalignment, we propose \*\*S\*\*imple \*\*A\*\*ttention \*\*S\*\*parsification \(SAS\), a gated sparse attention mechanism that optimizes context ranking end\-to\-end with the language modeling loss\. The key idea is to inject the selector's continuous scores into the attention logits during training, allowing the language modeling loss to update the selector through standard backpropagation\. We identify several choices that are crucial to make this simple design work well in practice: placing the gate inside the attention $\\operatorname\{softmax\}$ in log form, keeping all context units active during training so each of them can receive gradients, and preserving continuous selector scores so the model learns relative priorities rather than only hard selections\. Since a naive implementation that explicitly materializes the full attention matrix would cause prohibitive memory overhead for long sequences, we implement a memory\-efficient Triton kernel that integrates the design into a FlashAttention\-style computation\. SAS consistently outperforms trainable sparse\-attention across attention budgets, with especially large accuracy gains under tight budgets, demonstrating more effective context ranking for downstream tasks\.

## Signal\-Adaptive Trust Regions for Gradient\-Free Optimization of Recurrent Spiking Neural Networks

**Authors:** Jinhao Li; Yuhao Sun; Zhiyuan Ma; Hao He; Xinche Zhang; Xing Chen; Li Jin; Sen Song

**ID:** 150835 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ewv4YcAxRj>) | [PDF](<https://openreview.net/pdf?id=ewv4YcAxRj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150835>)

Recurrent spiking neural networks \(RSNNs\) are a promising substrate for energy\-efficient control policies, but training them for high\-dimensional, long\-horizon reinforcement learning remains challenging\. Population\-based, gradient\-free optimization circumvents backpropagation through non\-differentiable spike dynamics by estimating gradients\. However, with finite populations, high variance of these estimates can induce harmful and overly aggressive update steps\. Inspired by trust\-region methods in reinforcement learning that constrain policy updates in distribution space, we propose \*\*Signal\-Adaptive Trust Regions \(SATR\)\*\*, a distributional update rule that constrains relative change by bounding KL divergence normalized by an estimated signal energy\.  SATR automatically expands the trust region under strong signals and contracts it when updates are noise\-dominated\. We instantiate SATR for Bernoulli connectivity distributions, which have shown strong empirical performance for RSNN optimization\. Across a suite of high\-dimensional continuous\-control benchmarks, SATR improves stability under limited populations and reaches competitive returns against strong baselines including PPO\-LSTM\. In addition, to make SATR practical at scale, we introduce a bitset implementation for binary spiking and binary weights, substantially reducing wall\-clock training time and enabling fast RSNN policy search\.

## Beyond Outcome Rewards: Step\-Level Self\-Distilled Policy Optimization for Deep Search Agents

**Authors:** Haoze Wu; Chuqiao Kuang; Tianyi Zhuang; Xiaoguang Li

**ID:** 154780 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B1ywhnzK7h>) | [PDF](<https://openreview.net/pdf?id=B1ywhnzK7h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154780>)

Deep search agents operate over trajectories spanning dozens of steps, yet standard reinforcement learning provides only a single outcome reward per trajectory — supervision that is far too sparse for effective credit assignment\. On\-policy self\-distillation \(OPSD\) addresses this by using the model's own logits as dense token\-level teachers, but extending it to search agents introduces a fundamental tension: the teacher, having access to privileged information such as the correct answer, produces a distribution that differs systematically from the student's exploration\-based reasoning, and naive distillation causes the student to inherit this information asymmetry rather than learn better search strategies\. We resolve this tension through two contributions\. First, we construct Evidence Anchors — concise, step\-level evidence snippets extracted from the web — as privileged information that captures key reasoning steps without revealing the entire answer path\. Second, we propose Step\-Level Self\-Distilled Policy Optimization \(SSPO\), which converts teacher–student disagreement into step\-level advantage weights within GRPO, applied exclusively to incorrect trajectories\. This design decouples what to update from how much to update: the outcome reward determines the direction of policy change, while the teacher modulates its magnitude at each step\. Correct trajectories are left untouched, preserving their diversity\. On Qwen3\-8B, SSPO consistently outperforms GRPO across BrowseComp, GAIA, and FRAMES, surpassing or matching GRPO trained with twice as many gradient steps while adding only about 5\\% overhead per step from a single additional forward pass\.

## Exploration as Constrained Policy\-Space Optimization

**Authors:** Victor Azad

**ID:** 153038 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OUryWodGWl>) | [PDF](<https://openreview.net/pdf?id=OUryWodGWl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153038>)

Reinforcement learning \(RL\) agents face a continuous trade\-off between exploiting known strategies and exploring novel states to obtain higher rewards\. While exploration is often undirected, it can also be guided by intrinsic signals such as novelty or uncertainty\. However, combining these signals with task rewards is challenging, as they can sometimes drive the agent away from optimal trajectories and reduce final performance\. We find that this degradation arises from a structural occupancy conflict: as the policy improves, exploration signals naturally begin to anti\-correlate with task advantages\. In this work, we introduce Kantorovich Dual Shaping \(KDS\), a framework that resolves this conflict through constrained policy\-space optimization\. KDS formulates exploration as an Optimal Transport problem and applies the Sinkhorn\-Knopp algorithm on the empirical batch manifold to reweight intrinsic rewards in a geometry\-aware, point\-by\-point manner\. When combined with standard RL objectives, it acts as a spatial filter that suppresses exploration in conflicting regions while enhancing it elsewhere\. We evaluate this general approach across multiple off\-policy and on\-policy algorithms, achieving stable exploration that consistently avoids task degradation in complex continuous control environments\.

## PORT: Preference Optimization via Robust Token\-Level Reweighting

**Authors:** Ding Zhu; Xiukun Wei; Tian Xie; Zhihui Zhu; Xueru Zhang; Mohammad Mahdi Khalili

**ID:** 151657 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z0gcomg5dI>) | [PDF](<https://openreview.net/pdf?id=Z0gcomg5dI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151657>)

Preference optimization has become a central approach for aligning large language models  with human values, but its effectiveness depends heavily on the quality of preference annotations\. In practice, preference data is often noisy due to annotation errors and ambiguity\. Existing robust preference optimization methods primarily operate at the sequence level, implicitly treating entire responses as uniformly correct or incorrect\. However, rejected responses may still contain informative reasoning steps, while preferred responses can include subtle errors\. In this work, we propose a \*\*P\*\*reference \*\*O\*\*ptimization via \*\*R\*\*obust \*\*T\*\*oken\-Level reweighting \(PORT\), a fine\-grained framework for robust alignment under noisy preferences\. PORT performs token\-level reweighting using the empirical cumulative distribution function \(CDF\) of token logits, yielding an efficient forward\-pass\-only proxy to gradient\-norm penalization that selectively suppresses corrupted tokens without additional backward\-pass computation\. We provide theoretical analysis showing that PORT reduces the gradient bias from noisy labels by minimizing an upper bound on the bias term\. Extensive experiments across diverse noise settings demonstrate that PORT consistently improves robustness and outperforms existing sequence\-level baselines\.

## OPPO: Bayesian Value Recursion for Token\-Level Credit Assignment in Policy Optimization

**Authors:** Yu Li; Rui Miao; Tian Lan; Zhengling Qi

**ID:** 151932 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WkadvgDPwb>) | [PDF](<https://openreview.net/pdf?id=WkadvgDPwb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151932>)

Reinforcement learning methods for LLM reasoning typically assign a uniform advantage to every token in a trajectory, diluting the learning signal at pivotal reasoning steps and injecting noise at uninformative positions\. Critic\-free alternatives such as anchored distillation derive per\-token signals from oracle\-conditioned likelihood ratios, but apply the signal independently at each position\. We propose Oracle\-Prompted Policy Optimization \(\\n\), which recovers exact token\-level advantages through a Bayesian value recursion\. Conditioning the model on the ground\-truth answer during training yields per\-token likelihood ratios that measure how much the answer revises the model's prediction; the ratios accumulate via Bayesian updating into a running estimate of the success probability at every position, from which the token\-level advantage follows in closed form\. The advantage factors as a product of a state weight, peaking where the outcome is most uncertain and vanishing where success or failure is already determined, and the per\-token oracle evidence familiar from on\-policy distillation, with no tunable weighting hyperparameter\. The framework supports two estimator choices: a self\-oracle mode in which the policy model provides the estimate through one additional forward pass, and a teacher\-oracle mode in which a stronger model serves as the estimator\. Experiments on two base models across seven reasoning benchmarks spanning mathematics, science, and code demonstrate consistent improvements over GRPO, DAPO, and SDPO, with the largest gains on competition\-level tasks where reasoning chains are longest\.

## Mildly Overparameterized ReLU Networks on Orthogonal Data: Incremental Learning and Implicit Bias

**Authors:** James Town; Etienne Boursier; Ben Lewis; Matthias Englert; Ranko Lazic

**ID:** 149598 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ouh5P3tlCS>) | [PDF](<https://openreview.net/pdf?id=ouh5P3tlCS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149598>)

The successful training of neural networks hinges on the use of first order optimization methods, yet the theoretical characterization of these methods remains incomplete\. This is especially true in settings with mild overparameterization\. In this work, we study the gradient flow dynamics of two\-layer ReLU networks from small initialization with orthogonal training data\. We prove the limiting flow converges to a saddle\-to\-saddle jump process as the initialization scale tends to zero, revealing an incremental learning phenomenon in which a new neuron activates at each saddle\. This analysis recovers the known result of Dana et al\. \(2025\) that the network interpolates the training data with high probability as soon as $m \\gtrsim \\log\(n\)$, where $m$ is the network width and $n$ is the number of training samples\. This incremental process characterization also allows us to derive a novel implicit bias result: the learned interpolator has an $\\ell\_2$\-norm scaling as $\\sqrt\{n\}$, which is within a constant factor of the minimal\-norm interpolator\. More broadly, our work provides the first rigorous proof of an incremental learning process for ReLU networks, whilst suggesting mildly overparameterized networks can converge to interpolating solutions whose complexity is of the same order as that of the optimal interpolator\.

## FerQ: Fermat Quotient Reformulation of High\-Order Binary Optimization

**Authors:** Phuong Nam Nguyen; Seng Loke; Anil Prabhakar; Son N Tran

**ID:** 152029 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W4U6AMYhfN>) | [PDF](<https://openreview.net/pdf?id=W4U6AMYhfN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152029>)

High\-order binary optimization \(HOBO\) problems, defined as the minimization of functions involving interactions among three or more binary variables, are prevalent in machine learning and quantum computing\. The minimization of these high\-order energy functions remains computationally intractable without quadratization or reformulation\. This work introduces FerQ, a universal and auxiliary\-free reformulation of high\-order energy functions based on Fermat quotient expansion\. For any degree\-d monomial over binary variables, FerQ provides an exact, closed\-form representation as a rational linear combination of Fermat quotients evaluated on a scalar aggregate, with coefficients determined by a single matrix inversion\. FerQ is evaluated against twelve existing energy function transformation methods on k\-SAT and Max\-k\-SAT benchmarks from four databases, as well as on random p\-spin glass and k\-local Hamiltonian instances\. FerQ achieves the highest satisfaction and weighted satisfaction rates across all benchmarks, while incurring the lowest CPU runtime\. To enable deployment on quantum annealers, we derive FerQ\-Bc, a qubit\-efficient embedding scheme that maps the reformulated energies onto quadratic unconstrained binary optimization \(QUBO\) form, achieving good ancilla efficiency in high\-degree regimes\.

## Action\-Level Behavior Policy Optimization for Variance\-Reduced Policy Gradients

**Authors:** Jingkai Huang; Qinxun Bai; Zhengyuan Zhou

**ID:** 153538 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KbaSvFaIVV>) | [PDF](<https://openreview.net/pdf?id=KbaSvFaIVV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153538>)

Policy gradient methods may suffer from high variance, which limits their sample efficiency\. Existing variance\-reduction techniques largely focus on estimator design under a fixed sampling policy\. In contrast, we ask whether the action\-sampling distribution itself, often left at the on\-policy default, can be optimized to reduce policy gradient variance\. We show that this default is in fact not variance\-optimal even when the state distribution is held on\-policy\. To exploit this, we introduce \*Action\-Level Behavior Policy Optimization\* \(BPO\), a framework that treats the behavior policy as an action\-level proposal distribution at each on\-policy state, while keeping the state distribution itself on\-policy\. For a one\-step importance\-sampled policy gradient estimator, we sharply decompose its variance into an irreducible state term and a controllable action term, and show that the latter can be minimized in closed form via BPO\. Under exact critic and sampling oracles, this yields a strictly tighter nonconvex SGD bound than on\-policy sampling whenever the score\-weighted critic is action\-dependent\. We then extend the analysis to approximate critics and parametrized behavior policies updated by a single stochastic step, and verify the resulting sample\-efficiency gains empirically\. These results identify action\-level BPO as a principled mechanism for improving the sample efficiency of policy gradient methods\.

## HALO: Heterogeneous\-Aware LoRA Optimization via Rank Allocation and Client\-Aware Projection

**Authors:** Xiaohua Feng; Yuyuan Li; Jiayuan Fang; Fengyuan Yu; Jiaming Zhang; Li Zhang; Xiang Liu; Jun Wang; Chaochao Chen

**ID:** 154108 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GCoRDt8PdU>) | [PDF](<https://openreview.net/pdf?id=GCoRDt8PdU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154108>)

Federated Learning \(FL\) with Low\-Rank Adaptation \(LoRA\) enables privacy\-preserving collaborative fine\-tuning of foundation models\. Existing federated LoRA studies often assume homogeneous ranks and lack principled rank allocation, leading to underfitting or overfitting under data and resource heterogeneity\. Although later heterogeneous\-rank federated LoRA methods relax the homogeneous\-rank assumption, they still ignore resource\-adaptive rank allocation across clients, while their aggregation and distribution strategies suffer from structural limitations, including rank collapse in naive truncation and the loss of locally relevant update signals caused by objective mismatch in SVD truncation\. To address these issues, we propose HALO, a heterogeneous federated LoRA framework that integrates adaptive rank allocation with client\-aware aggregation and distribution\. Under the neural tangent kernel regime, we derive a sufficient rank condition to guide client\-specific rank allocation from local data geometry and resource constraints\. We further propose Client\-Aware Projection \(CAP\), which builds a product\-summed reference and redistributes rank\-compatible balanced LoRA factors through projections onto client\-induced subspaces, improving generalization via cross\-client information while preserving locally relevant update signals\. We show that CAP controls the client\-loss\-relevant truncation residual under the NTK approximation without additional communication overhead, which stabilizes local training and improves performance\. Extensive experiments demonstrate the effectiveness of HALO\. Our code is available at \[https://anonymous\.4open\.science/r/artifact2026\-4174\]\(https://anonymous\.4open\.science/r/artifact2026\-4174\)\.

## VeriGraph: Towards Verifiable Data\-Analytic Agents

**Authors:** Jiajie Jin; Zhao Yang; WenLe Liao; Yuyang Hu; Guanting Dong; Xiaoxi Li; Yutao Zhu; Zhicheng Dou

**ID:** 151870 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XHH1MUulfY>) | [PDF](<https://openreview.net/pdf?id=XHH1MUulfY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151870>)

LLM\-based agents have demonstrated strong capabilities in data\-intensive analytical tasks, yet their outputs are rarely verifiable: a reliance on linear text trajectories makes their reasoning difficult to audit\. In particular, deterministic computations over raw data and semantic deductions over natural\-language claims are often entangled in an unstructured stream, leaving numerical conclusions hard to reproduce and qualitative judgments hard to inspect\. To address this, we propose VeriGraph, a traceable neuro\-symbolic reasoning framework that enables agents to construct an explicit heterogeneous evidence directed acyclic graph \(DAG\) during execution\. VeriGraph introduces three evidence\-expansion primitives, namely computational, grounding, and derivational expansion, to connect raw data, interpreter variables, computed results, and natural\-language claims in a unified graph\. Under this formulation, structural traceability is reduced to graph reachability from raw data sources to terminal claims, while semantic support is measured by claim\-level evidence evaluation\. To improve graph construction, we further design a graph\-based policy optimization strategy with a composite reward that jointly supervises answer correctness, computational integrity, and derivational coherence\. Experiments on four benchmarks show that VeriGraph\-8B achieves the highest overall score among all baselines\. More importantly, VeriGraph produces auditable evidence graphs with substantially stronger claim grounding, achieving a 87\.61\\% Grounding Rate under our claim\-level evidence support evaluation\. These results suggest that explicit evidence\-graph construction is a promising path toward verifiable data\-analytic agents\. Our code is available at \\url\{https://anonymous\.4open\.science/r/VeriGraph\-417E\}\.

## PRISM: Asymmetric Precision\-Recall Optimization for Million\-Scale Root Cause Analysis

**Authors:** Wei Zhang; Rongyao Cai; Xiaosheng Li; Hang Yu; Rui Wang

**ID:** 151138 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cjaVe5kjFu>) | [PDF](<https://openreview.net/pdf?id=cjaVe5kjFu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151138>)

Multi\-dimensional Root Cause Analysis \(RCA\) requires searching an exponential $\\mathcal\{O\}\(2^M\)$ attribute space over millions of records within seconds to isolate the root\-cause combination\.     Existing methods fail at this industrial scale due to a fundamental modeling oversight: employing symmetric objectives that treat anomalous and normal samples interchangeably, allowing the massive normal background to dominate computation\.     To overcome this, we propose \\textbf\{PRISM\} \(\\underline\{P\}recision\-\\underline\{R\}ecall \\underline\{I\}nformed \\underline\{S\}ubspace \\underline\{M\}ining\), which reformulates RCA as an asymmetric Precision\-Recall optimization\.      Precision is defined over anomaly\-normal pairs and Recall over anomaly\-anomaly pairs, eliminating uninformative normal\-normal comparisons entirely\.     Coupled with tensor compression and a two\-stage solver, comprising Bernoulli continuous relaxation and combinatorial verification, PRISM reduces pairwise complexity from a full\-dataset quadratic scale to an anomaly\-bounded $\\mathcal\{O\}\(\|\\mathcal\{P\}\|^2\)$\.     Evaluations on four public benchmarks and a new 5\.13M\-record industrial dataset show that PRISM achieves the highest average F1 \(0\.90 vs\.\\ 0\.65 for the strongest baseline\), while maintaining sub\-second latency across a $2^\{110\}$ attribute space\.      We publicly release this dataset as \\textbf\{NFC\}, establishing the first production\-sourced, million\-scale benchmark for multi\-dimensional RCA\.     \\href\{https://anonymous\.4open\.science/status/PRISM\-09FC\}\{\[Code\]\}

## The Geometry of Linear Program Compression: An Exact Characterization and Learning Algorithm

**Authors:** Yuhan Ye; Omar Bennouna

**ID:** 154900 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A5qzAwIMSD>) | [PDF](<https://openreview.net/pdf?id=A5qzAwIMSD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154900>)

We study how much a linear program \(LP\) can be compressed when solved repeatedly, given prior knowledge about its objective function\. Existing data\-driven projection methods learn low\-dimensional surrogate LPs with approximate objective\-value guarantees, but cannot provably identify the optimal projection for a prescribed compression budget\. We instead ask a sharper question: how far can an LP be compressed into a lower\-dimensional equivalent while exactly preserving optimality, enabling faster repeated solves with no loss in solution quality? We provide an exact geometric characterization of such compressed LPs, together with a tractable sample\-based learning algorithm that comes with fast\-rate guarantees: the compressed LP recovers the optimal solution of an unseen instance with probability at least $1\-\\widetilde O\(d^\\star/n\)$, where $d^\\star$ is the dimension of the decision\-relevant subspace, and $n$ the number of available historical LP samples\. This $1/n$ dependence is sharper than the $\\widetilde O\(1/\\sqrt n\)$ uniform\-convergence rates of approximate projection methods\. Our framework further exposes a tunable tradeoff between the dimension of the compressed LP and the probability of recovering the optimal solution, allowing the user to trade compression for accuracy\.

## The Cost of Mismatch: Noise Amplification in Zeroth\-Order Reinforcement Learning

**Authors:** Lianmin Chen; Junbin Qiu; Chenxing Wei; Yao SHU; Kun He

**ID:** 148377 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yLUddZsQl0>) | [PDF](<https://openreview.net/pdf?id=yLUddZsQl0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148377>)

Zeroth\-order optimization \(ZOO\) has emerged as a promising approach for fine\-tuning Large Language Models \(LLMs\) when gradient access is unavailable or memory\-prohibitive\. However, ZOO relies on estimating gradients via finite differences between two function evaluations at perturbation scale $\\mu$, making it inherently noisier than its first\-order counterpart\. This raises a fundamental question: \\textit\{under what conditions does ZOO yield reliable gradient estimates?\} In this work, we provide a rigorous variance\-theoretic answer through a generic noise\-amplification framework and demonstrate that the reliability of ZOO gradient estimations is structurally determined by whether the two finite\-difference evaluations are performed on \\textit\{matched data\}\. Mismatched evaluations, as induced by on\-policy Reinforcement Learning \(RL\), produce a $1/\\mu^2$ oracle\-noise amplification that sets an irreducible noise floor, whereas matched evaluations, as realized by offline optimization methods such as Boltzmann Targeted SFT \(BOLT\), eliminate this amplification entirely via noise cancellation\. We further derive convergence guarantees with explicit constants that cleanly separate the two regimes\. Controlled experiments on math reasoning tasks validate these findings, using ZooBOLT and ZooGRPO \-\-\- zeroth\-order adaptations of BOLT and GRPO \-\-\- as representatives of the matched\- and mismatched\-data regimes respectively\. On GSM8K with Qwen2\.5\-1\.5B, ZooBOLT recovers $96\.1\\%$ of first\-order BOLT's performance gains, while ZooGRPO exhibits near\-zero learning despite its first\-order counterpart achieving strong results\. This qualitative separation persists across harder benchmarks \(MATH\), larger model scales \(Qwen2\.5\-7B\), and different model variants \(DeepSeek\-R1\-Distill\-Qwen\-1\.5B\)\. Additionally, ZOO methods reduce peak memory to near\-inference levels, validating its practicality as a memory\-efficient fine\-tuning paradigm\.

## Select\-then\-differentiate: Solving Bilevel Optimization with Manifold Lower\-level Solution Sets

**Authors:** Saeed Masiha; Zebang Shen; Negar Kiyavash; Niao He

**ID:** 153170 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NLXLf4kGZu>) | [PDF](<https://openreview.net/pdf?id=NLXLf4kGZu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153170>)

We study optimistic bilevel optimization when the lower\-level problem has a non\-isolated manifold of minimizers\. In this setting, the hyper\-objective may be non\-differentiable because the upper\-level criterion must choose among multiple lower\-level solutions\. Under a local Polyak\-\-\{\\L\}ojasiewicz \(P\{\\L\}\) condition, we show that differentiability does not require the lower\-level solution set to be a singleton: uniqueness of the optimistic selection is sufficient\. This yields an explicit pseudoinverse\-based hyper\-gradient formula extending the classical singleton\-minimizer result\. We further characterize the regularity of the hyper\-objective: non\-degeneracy of the selected minimizer along the solution manifold yields local smoothness, while failure of uniqueness can create many non\-differentiable points and failure of non\-degeneracy can destroy all positive H\\"older regularity of the hyper\-gradient\. Motivated by this theory, we propose HG\-MS, a select\-then\-differentiate method combining explicit optimistic selection with efficient pseudoinverse\-based hyper\-gradient computation\. Despite the nonconvex nature of optimistic selection over the lower\-level solution manifold, we show that HG\-MS converges to a stationary point of the optimistic objective with complexity governed by the intrinsic dimension of the solution manifold rather than its ambient dimension\. Empirically, we test a practical variant of HG\-MS for matched\-budget LLM source reweighting\. This variant preserves the select\-then\-differentiate principle and obtains the best GSM8K/MATH scores across the tested backbones, along with competitive or best MT\-Bench instruction\-following results\.

## Select\-then\-differentiate: Solving Bilevel Optimization with Manifold Lower\-level Solution Sets

**Authors:** Saeed Masiha; Zebang Shen; Negar Kiyavash; Niao He

**ID:** 153170\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153170

[Paper](<https://openreview.net/forum?id=NLXLf4kGZu>) | [PDF](<https://openreview.net/pdf?id=NLXLf4kGZu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153170>)

We study optimistic bilevel optimization when the lower\-level problem has a non\-isolated manifold of minimizers\. In this setting, the hyper\-objective may be non\-differentiable because the upper\-level criterion must choose among multiple lower\-level solutions\. Under a local Polyak\-\-\{\\L\}ojasiewicz \(P\{\\L\}\) condition, we show that differentiability does not require the lower\-level solution set to be a singleton: uniqueness of the optimistic selection is sufficient\. This yields an explicit pseudoinverse\-based hyper\-gradient formula extending the classical singleton\-minimizer result\. We further characterize the regularity of the hyper\-objective: non\-degeneracy of the selected minimizer along the solution manifold yields local smoothness, while failure of uniqueness can create many non\-differentiable points and failure of non\-degeneracy can destroy all positive H\\"older regularity of the hyper\-gradient\. Motivated by this theory, we propose HG\-MS, a select\-then\-differentiate method combining explicit optimistic selection with efficient pseudoinverse\-based hyper\-gradient computation\. Despite the nonconvex nature of optimistic selection over the lower\-level solution manifold, we show that HG\-MS converges to a stationary point of the optimistic objective with complexity governed by the intrinsic dimension of the solution manifold rather than its ambient dimension\. Empirically, we test a practical variant of HG\-MS for matched\-budget LLM source reweighting\. This variant preserves the select\-then\-differentiate principle and obtains the best GSM8K/MATH scores across the tested backbones, along with competitive or best MT\-Bench instruction\-following results\.

## Parameterized Complexity of Stationarity Testing for Piecewise\-Affine Functions and Shallow CNN Losses

**Authors:** Yuhan Ye

**ID:** 155237\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155237

[Paper](<https://openreview.net/forum?id=7CznRls7QK>) | [PDF](<https://openreview.net/pdf?id=7CznRls7QK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155237>)

We study the parameterized complexity of testing approximate first\-order stationarity at a prescribed point for continuous piecewise\-affine \(PA\) functions, a basic task in nonsmooth optimization\. PA functions form a canonical model for nonsmooth stationarity testing and capture the local polyhedral geometry that appears in ReLU\-type training losses\. Recent work of Tian and So \(2025\) shows that testing approximate stationarity notions for PA functions is computationally intractable in the worst case, and identifies fixed\-dimensional tractability as an open direction\. We address this direction from the viewpoint of parameterized complexity, with the ambient dimension $d$ as the parameter\. In this paper, we give XP algorithms in fixed dimension for the tractable sides, and prove W\[1\]\-hardness for the complementary sides\. Moreover, lower bounds under the Exponential Time Hypothesis rule out algorithms running in time $\\rho\(d\)s^\{o\(d\)\}$ for any computable function $\\rho$, where $s$ denotes the total binary encoding length of the stationarity\-testing instance\. As a further consequence, our results yield the corresponding parameterized complexity picture for testing local minimality of continuous PA functions\. We further extend our hardness results to a family of shallow ReLU CNN training losses, with stationarity tested in the trainable weight space\. Thus, the same parameterized\-complexity picture also appears for simple CNN training losses\.

## Penalty\-Based First\-Order Methods for Bilevel Optimization with Minimax and Constrained Lower\-Level Problems

**Authors:** Yiyang Shen; Yutian He; Weiran Wang; Qihang Lin

**ID:** 153613\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153613

[Paper](<https://openreview.net/forum?id=K4vQ9YKOxc>) | [PDF](<https://openreview.net/pdf?id=K4vQ9YKOxc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153613>)

We study a class of bilevel optimization problems in which both the upper\- and lower\-level problems are minimax problems\. Existing studies on bilevel optimization primarily focus on settings where the lower\-level problem is an unconstrained or constrained minimization problem, and are therefore not directly applicable to the setting of a minimax lower\-level problem considered in this work\. To address this gap, we develop penalty\-based first\-order methods for bilevel minimax optimization\. In the deterministic setting, we prove that the proposed method finds an $\\epsilon$\-KKT point with $\\tilde\{O\}\(\\epsilon^\{\-4\}\)$ oracle complexity\. We further show that bilevel optimization problems with constrained lower\-level minimization can be reformulated, via Lagrangian duality under Slater's condition, as special cases of our framework and hence can also be solved by our method\. This yields an $\\tilde\{O\}\(\\epsilon^\{\-4\}\)$ complexity bound for finding an $\\epsilon$\-KKT point, improving upon the existing $\\tilde\{O\}\(\\epsilon^\{\-7\}\)$ result\. Finally, we extend our approach to the stochastic setting and establish that the proposed stochastic method finds a nearly $\\epsilon$\-KKT point with $\\tilde\{O\}\(\\epsilon^\{\-9\}\)$ oracle complexity\. To the best of our knowledge, these are the first deterministic and stochastic first\-order complexity results for bilevel minimax optimization\.

## ContinuLoc: Continuous Pose Inference over Neural Fields for UAV Geo\-Localization

**Authors:** Weikun Zhou; Jinliang Lin; Yu Zang; Lin Xie; HaiqingFu; Sheng Ao; Shangshu Yu; Zhiming Luo; Cheng Wang

**ID:** 149317\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149317

[Paper](<https://openreview.net/forum?id=r4Nd67ZClj>) | [PDF](<https://openreview.net/pdf?id=r4Nd67ZClj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149317>)

Cross\-view UAV geo\-localization involves three design choices: how to represent the UAV observation, how to represent the geo\-referenced scene, and how to infer pose from their interaction\. The dominant paradigm organizes the world as a discretized 2DoF candidate library, coupling scene representation to inference and bounding pose accuracy by sampling resolution\. We decouple scene representation from pose inference by encoding the geo\-referenced world as a continuously queryable semantic neural field, enabling localization to be formulated as explicit optimization over a continuous 4DoF pose space — parameterized by 2D ground position, in\-plane heading, and viewing scale\. Pose hypotheses are evaluated globally in a shared semantic feature space, bypassing the sampling bottleneck of retrieval\. We learn 4DoF pose\-sensitive observation representations under full 4DoF supervision provided by ContinuScenes, a multi\-city benchmark with dense near\-nadir UAV imagery and complete pose annotations\. Inference proceeds hierarchically, progressing from broad pose\-space coverage to adaptive concentration on high\-compatibility regions\. Preliminary experiments demonstrate that our method substantially outperforms prevailing localization paradigms, including discrete retrieval and absolute pose regression, across increasingly strict 4DoF pose criteria\.

## TROPT: An Open Framework for Unifying and Advancing Discrete Text Optimization

**Authors:** Matan Ben\-Tov; Mahmood Sharif

**ID:** 139066\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139066

[Paper](<https://openreview.net/forum?id=nFkk23rNbo>) | [PDF](<https://openreview.net/pdf?id=nFkk23rNbo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139066>)

\*Discrete text\-trigger optimization\*—searching for text sequences that, when ingested by a model, steer it toward a specified objective—underpins model red\-teaming \(e\.g\., LLM jailbreaks\), as well as auditing and interpretability\. However, the current state of discrete optimizers hinders their adoption and progress\. First, existing optimizers, when open\-sourced at all, are scattered across research codebases tied to specific problem domains\. Second, optimizer variants proliferate, each requiring engineering overhead to use or extend, and hard to compare head\-to\-head\. Together, these raise the bar to \*adopting\* optimizers in existing or new domains, and to \*advancing\* them via new strategies\. We address these gaps with TROPT, the first open\-source framework that unifies discrete optimizers' execution and standardizes their development under a single interface\. TROPT currently ships with 30\+ end\-to\-end optimization recipes—covering applications such as jailbreaking and probing model internals—built from 15\+ optimizers \(spanning white\-box to black\-box access\) and 15\+ losses, from foundational to state\-of\-the\-art methods\. Beyond democratizing established methods, TROPT makes it easy to \*customize\* optimization recipes by swapping any component—models, objectives, and optimizers—extending its reach across domains and new applications\. Demonstrating its utility, we leverage TROPT in several controlled studies: \*\(i\)\* novel large\-scale experiments comparing and enhancing optimization strategies for LLM jailbreaks, revealing potent\-yet\-underadopted techniques; and \*\(ii\)\* cross\-domain demonstrations \(e\.g\., benign prompt recovery and corpus poisoning\)\. In all, TROPT significantly lowers the barrier to adopting and advancing discrete text optimization\.

## Achieving Directional\-Stationarity from a Single Random Direction Step

**Authors:** Dan Greenstein; Nadav Hallak

**ID:** 149362 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qblLv39mYL>) | [PDF](<https://openreview.net/pdf?id=qblLv39mYL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149362>)

This paper addresses the challenge of obtaining strong optimality guarantees in constrained nonsmooth nonconvex optimization under mild regularity conditions, namely local Lipschitz continuity and existence and continuity of directional derivatives\.  While standard methods typically ensure weak stationarity notions, achieving directional \(d\-\)stationarity remains nontrivial\. We show that a random direction exploration step is sufficient to attain d\-stationarity\.  The proposed approach augments any base optimization method with a single exploration step that samples a direction and step size and accepts the candidate based on a function value comparison\. The resulting scheme guarantees that all accumulation points are d\-stationary almost surely, independently of the behavior of the underlying method\.  Moreover, it preserves convergence rates of the base method, as established for DCA and prox\-linear\-type schemes\. The theoretical results are complemented by numerical experiments illustrating the effect and guarantees of the exploration step\.

## From Cursed to Competitive: Closing the ZO–FO Gap via Input\-to\-State Stability

**Authors:** Amir Ali Farzin; Philipp Braun; Iman Shames

**ID:** 150158 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kEqC3TBex2>) | [PDF](<https://openreview.net/pdf?id=kEqC3TBex2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150158>)

While it is generally understood that zeroth\-order \(ZO\) algorithms have an extra dependency on their number of iterations for any choice of parameters, compared to their first\-order \(FO\) counterparts, in this work, we show that under several conditions, in expectation, ZO methods do not suffer from extra dimension dependencies in their convergence rates with respect to their FO counterparts\. We look at optimisation algorithms from the dynamical systems perspective and analyse the conditions under which one can formulate the average of a ZO algorithm as the average of its FO counterpart with bounded perturbations with values dependent on design parameters\. Then, using input\-to\-state stability properties, we show ZO methods follow the same decay rate as their FO counterparts and converge to a neighbourhood of the fixed point of FO methods, where its radius depends on the bound of the norm of the perturbations, which can be made arbitrarily small\. The theoretical findings are illustrated via numerical examples\.

## Provable Speedups From Dynamic Population Sizes in Evolutionary Algorithms for Multiobjective Optimization

**Authors:** Andre Opris

**ID:** 152154 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V8Wc9BZete>) | [PDF](<https://openreview.net/pdf?id=V8Wc9BZete>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152154>)

This paper investigates the role of dynamic population sizes in evolutionary multi\-objective optimization\. Although such approaches are widely used in practice, their benefits remain poorly understood, and rigorous runtime analyses explaining when and why they help are still scarce\. To address this, we introduce the bi\-objective problem class CLIMB and analyze the runtime of GSEMO and the widely used NSGA\-II on this problem\. Our results show that allowing a dynamic population size for NSGA\-II can lead to a moderate improvement, yielding a speedup of order $\\Omega\(\\sqrt\{n\}/\\log n\)$\. In particular, we prove that GSEMO and NSGA\-II\-DYN, a version of NSGA\-II with dynamic population sizes we propose in this paper, can find the Pareto front of CLIMB in expected $O\(n \\log n\)$ fitness evaluations, whereas NSGA\-II with a fixed population size requires $\\Omega\(n^\{1\.5\}\)$ fitness evaluations in expectation\. To the best of our knowledge, this is the first rigorous runtime analysis in multi\-objective optimization demonstrating a super\-constant speedup of GSEMO over NSGA\-II\. Our analysis builds on concepts from single\-objective optimization, like the evolution of population diversity over time, and employs the well\-known family\-three method to prove the lower bound\.

## Reward Bias Substitution: Single\-Axis Bias Mitigations Redirect Optimization Pressure

**Authors:** Max Lamparth; Daniel Fein; Andreas Haupt; Marcel Hussing; Mykel J Kochenderfer

**ID:** 154792 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Auv9cgHOSa>) | [PDF](<https://openreview.net/pdf?id=Auv9cgHOSa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154792>)

Single\-axis mitigations of reward\-model biases \(e\.g\., reducing reliance of the proxy reward on length, sycophancy, or style\) can rotate optimization pressure onto correlated proxies rather than eliminate it, a failure mode we call reward bias substitution\.    We formalize the underlying measurement\-vs\-optimization gap between the audit distributions where mitigations are validated and the policy distributions where optimization realizes their effects\.    We introduce a taxonomy, instantiated in closed form, classifying single\-axis mitigation outcomes into successful mitigation, bias substitution, overcorrection, silent non\-op, and audit\-distribution sensitivity\.    We prove that single\-axis mitigation methods cannot be validated by audit\-distribution\-only evaluation: successful mitigation, bias substitution, and overcorrection produce structurally identical observables under ranking accuracy and win\-rate scoring, regardless of benchmarks richness\.    Augmenting evaluation with policy\-induced distributions provably closes the gap and we give actionable prescriptions for mitigation methods and benchmarks\.   Across published preference\-learning mitigation work, we identify bias substitution regimes in results not previously connected to a unified failure mode\.    Our experiments also show that a published length\-debiasing operator zeros pooled reward–length correlation but flips sign within\-prompt on three of four SOTA reward models with true reward degrading on two, and that length–sycophancy coupling reverses under human–LLM judge disagreement across eight model families\.

## Online Min\-Max Optimization: From Individual Regrets to Cumulative Saddle Points

**Authors:** Abhijeet Vyas; Brian Bullins

**ID:** 151634 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z7Fzxtf74w>) | [PDF](<https://openreview.net/pdf?id=Z7Fzxtf74w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151634>)

We propose and study an online version of min\-max optimization based on cumulative saddle points under a variety of performance measures beyond convex\-concave settings\. After first observing the incompatibility of \(static\) Nash equilibrium \(SNE\-Reg$\_T$\) with individual regrets even for strongly convex\-strongly concave functions, we propose an alternate static duality gap \(SDual\-Gap$\_T$\) inspired by the online convex optimization \(OCO\) framework that is compatible with the individual regrets \. We provide algorithms that achieve sub\-linear regret bounds for \(SDual\-Gap$\_T$\) and the individual regrets and a novel dynamic saddle point regret \(DSP\-Reg$\_T$\), which we suggest naturally represents a min\-max version of the dynamic regret in OCO\. We derive our bounds for \(SDual\-Gap$\_T$\) and DSP\-Reg$\_T$ under strong convexity\-strong concavity and a min\-max notion of exponential concavity \(min\-max EC\), and in addition we establish a class of functions satisfying min\-max EC that captures a two\-player variant of the classic portfolio selection problem\. Finally, for a dynamic notion of regret compatible with individual regrets, we derive bounds under a two\-sided Polyak\-\\L\{\}ojasiewicz \(PL\) condition\.

## SMILE: Bridging Continuous Optimization and Discrete Symbolic Recovery

**Authors:** Mansooreh Montazerin; Antonio Ortega; Ajitesh Srivastava

**ID:** 152682 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RCI7AIVyKg>) | [PDF](<https://openreview.net/pdf?id=RCI7AIVyKg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152682>)

Symbolic regression \(SR\) discovers closed\-form mathematical expressions from data, offering interpretability beyond black\-box models\. Existing methods suffer from slow convergence in combinatorial search spaces and lack mechanisms to exploit compositional structure in the data\. We introduce SMILE \(Sine, Multiplication, Identity, Logarithm, Exponential\), a hybrid framework that unifies continuous gradient\-based optimization with discrete symbolic recovery through three stages: structural analysis of the data to identify the compositional hierarchy of the target expression, continuous optimization to learn parameters of a network that encodes the target expression using interpretable activations, and symbolic recovery through structured pruning, coefficient optimization, and rounding\. This final stage distills the learned network into a compact expression with exact symbolic constants\. We evaluate SMILE on SRBench across ground\-truth and black\-box datasets, with ablation studies validating each component\. SMILE achieves the highest symbolic solution rate at the largest noise levels, demonstrating strong robustness where competing methods degrade substantially\. It consistently lies on the Pareto front of accuracy versus complexity, recovering significantly simpler expressions in a fraction of the time required by the competing methods\.

## Echoes in Filter Bubble: Diagnosing and Curing Popularity Bias in Generative Recommender Systems

**Authors:** Jun YIN; Bangguo Zhu; Peng Huo; Ruochen Liu; Hao Chen; Senzhang Wang; Shirui Pan; Chengqi Zhang

**ID:** 148459 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xfHw2Qn1GR>) | [PDF](<https://openreview.net/pdf?id=xfHw2Qn1GR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148459>)

Recently, Generative Recommenders \(GRs\), characterized by a unified end\-to\-end framework, have exhibited astonishing potential in transforming the recommendation paradigm\. Despite their effectiveness, we recognize that GRs are still susceptible to the long\-standing issue of popularity bias that has pervaded the recommendation community\. Although a few studies have attempted to extend traditional debiasing methods to GRs, their effectiveness is marginal, and the fundamental reason why GRs suffer from popularity bias remains under\-explored\. To bridge this gap, this study focuses on two core aspects in GRs: the optimization of generative framework and the item tokenization based on semantic index\. Based on theoretical analyses, we identify that the severe popularity bias emerges from the confluence of a token\-level optimization flaw and the undifferentiated property of item tokenization\. Accordingly, this study develops a novel generative recommender system, called Ghost, by designing the asymmetric unlikelihood optimization and the skeleton\-founded tokenization\. Extensive empirical evaluations across three datasets, alongside multiple SOTA baselines, reveal that Ghost substantially alleviates popularity bias and promotes fairer recommendations, while incurring slight degradation to the overall recommendation utility\.

## AgentKernelArena: Benchmarking Performance and Generalization of AI Coding Agents on GPU Kernels Optimization

**Authors:** Sharareh Younesian; Wenwen Ouyang; sina rafati; Mehdi Rezagholizadeh; Sharon Zhou; Ji Liu; Yue Liu; Yuchen Yang; Hao Li; Ziqiong Liu; Dong Li; Vikram Appia; Zhenyu Gu; Emad Barsoum

**ID:** 139376 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Twe3Jz6Q0V>) | [PDF](<https://openreview.net/pdf?id=Twe3Jz6Q0V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139376>)

_Abstract unavailable from the accessible public sources._

## Distributionally Robust Listwise Preference Optimization

**Authors:** Xudong Wu; Jian Qian; Pangpang Liu; Vaneet Aggarwal; Jiayu Chen

**ID:** 154214 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FL7ACXQ5Rb>) | [PDF](<https://openreview.net/pdf?id=FL7ACXQ5Rb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154214>)

_Abstract unavailable from the accessible public sources._

## TPO: Tri\-level Distributionally Robust Learning for OOD Direct Preference Optimization

**Authors:** Chengtao Jian; Kai Yang

**ID:** 153123 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NkyrJPNzft>) | [PDF](<https://openreview.net/pdf?id=NkyrJPNzft>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153123>)

Direct Preference Optimization \(DPO\) minimizes empirical risk over observed preference comparisons, implicitly assuming that the training preference distribution matches the deployment preference distribution\. In practice, this i\.i\.d\. assumption often fails, as preference distribution shift exhibits a natural hierarchical structure across three levels: group\-level shift, prompt\-level shift, and conditional preference\-level shift\. Such multi\-level distributional mismatch poses a critical challenge for safe LLM deployment, yet existing robust DPO methods typically model either overall distributional uncertainty or a single robustness level, leaving the hierarchical structure of OOD preference shifts underexplored\. We propose TPO, a tri\-level distributionally robust framework for OOD preference optimization, which jointly models all three levels of distributional uncertainty through a hierarchical rectangular ambiguity set\. By instantiating it with Wasserstein distance, we derive a tractable and interpretable objective that combines a closed\-form preference\-level margin penalty, prompt\-level adversarial embedding perturbation, and worst\-case group reweighting, each governed by an independent radius\. We establish finite\-sample convergence guarantees and empirically validate the effectiveness of \\method\{\} over existing robust DPO methods\.

## AutoSaddler: Automatic Harness Optimization with Durable Updates from Agent Execution Traces

**Authors:** Sungho Park; Wonjoong Kim; Rongyuan Tan; Jue Zhang; WOOK SHIN HAN; Pengfei Gao; Chanyoung Park; Qingwei Lin; Saravan Rajmohan; Dongmei Zhang

**ID:** 151256 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bkGK6zovnv>) | [PDF](<https://openreview.net/pdf?id=bkGK6zovnv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151256>)

_Abstract unavailable from the accessible public sources._

## On the Necessity of Guidance Decay:  From Three\-Phase Analysis in Gaussian Mixture Models to Dynamic Optimization

**Authors:** Yiyu Qiu; Ruofeng Yang; Tong Yu; Shuai Li

**ID:** 151326 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bLqrqUf9K9>) | [PDF](<https://openreview.net/pdf?id=bLqrqUf9K9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151326>)

Classifier\-Free Guidance \(CFG\) is essential for conditional diffusion, yet constant guidance scales often fail to balance alignment with over\-exposure and extreme sample issues\. Existing heuristic schedules, like guidance truncation, lack rigorous principles and sacrifice classification confidence, while theoretical studies remain limited to constant guidance at final denoising stages, leaving the full sampling trajectory largely unanalyzed\. In this work, we provide a theoretical foundation for dynamic guidance by analyzing Gaussian Mixture Models \(GMM\) within a general SDE framework\. We characterize the dynamics of classification confidence through three distinct stages: convergence, mixed, and divergence, and rigorously prove the impact of varying guidance scale $\\omega$ at reverse time $k$\.  We analyze the Convergence Boundary $\\Omega\(k\)$ as the maximum guidance scale that ensures the reverse trajectory remains within the high\-density regions of the data distribution\. We prove that during denoising, the permissible guidance scale $\\omega$ must decay to prevent the trajectory from escaping into the divergent phase, especially at the end of the denoising\. Although different noise schedules have different decay rates, we found that VP\(Variance Preserving\) has more stringent decay rate requirement compared to VE\(Variance Exploding\), which is why VP is most prone to overexposure\. Specifically, $\\Omega\(k\)$ simplifies to an exponential decay $O\(e^\{T\-k\}\)$ in VPSDE and an algebraic decay $O\(T\-k\)$ in VESDE\. This provides a unified explanation for why constant guidance inevitably triggers artifacts and demonstrates that guidance truncation is essentially  a coarse approximations of this stability limit\. We can achieve dynamic optimization based on the decay rate, which better restricts the scale within the convergence region, thereby effectively eliminating overexposure while maintaining excellent semantic alignment and improving generation quality\.

## EvoOptiGraph: Weakness\-Driven Coevolution via Graph\-Based Structural Generation for Optimization Modeling

**Authors:** Qingcan Kang; Mingyang LIU; Xiaojin Fu; Shixiong Kai; Tao Zhong; Mingxuan Yuan

**ID:** 155640 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=45RetuO3zX>) | [PDF](<https://openreview.net/pdf?id=45RetuO3zX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155640>)

Automating optimization modeling from natural language faces two key challenges: training corpora lack structural diversity, and data generation pipelines remain static and decoupled from model learning\. To address these challenges, we propose EvoOptiGraph, a novel framework where data and model co\-evolve, driven by model weaknesses\. EvoOptiGraph represents each mixed\-integer linear program \(MILP\) as an attributed bipartite graph and applies validity\-preserving evolutionary operators to generate structurally diverse instances\. The evolved graphs are converted into solver code and natural language via deterministic compilation and verified back translation\. Training proceeds in two stages: supervised fine\-tuning \(SFT\) on an initial dataset, followed by reinforcement learning with verifiable rewards \(RLVR\), where graph\-derived weakness signals dynamically evolve new instances that target the model's failures, forming a closed loop that continuously updates the training distribution\. Empirical results on six public datasets show that EvoOptiGraph significantly outperforms larger generalist models, agentic methods, and specialized baselines in accuracy, executability, and generalization\. These results demonstrate that targeted data–model coevolution is an effective strategy for improving LLMs on optimization modeling tasks\.

## Sparse Updates Generalize Better Than Optimization: Stability Analysis for Randomized Subspace Descent

**Authors:** Yifei Liang; Yan Sun; Yifei Cheng; Haobo Fu; XIAOCHUN CAO; Li Shen

**ID:** 148588 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=weRx6oFuWD>) | [PDF](<https://openreview.net/pdf?id=weRx6oFuWD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148588>)

Large\-scale learning increasingly relies on updating only a coordinate, a block, or a low\-dimensional subspace per iteration to reduce memory and communication costs, yet the statistical consequence of such reduced update coverage, beyond the well\-understood optimization slowdown, remains open\. Available stability analyses are restricted to coordinate\-level projectors whose orthogonality drives the argument, deterministic\-output assumptions incompatible with randomized updates, or uniform step sizes that ignore curvature\-adaptive blockwise schedules; none explains how general subspace coverage controls population risk\. We analyze this question through randomized subspace descent \(RSD\), a framework that recovers GD, RCD, BCD, and isotropic SSD as special cases: under joint isotropy the expected projection energy reduces to a single coverage parameter\~$\\alpha$, enabling unified stability analysis without coordinate\-level structure\. The convex excess risk scales as $O\(\\alpha^\{\-1/4\}N^\{\-1/2\}\)$, improving to $O\(\(N\\sqrt\{\\alpha\}\)^\{\-1\}\)$ under low noise, substantially gentler than the $O\(1/\\alpha\)$ optimization slowdown, while in the nonconvex Polyak\-\-\{\\L\}ojasiewicz setting $\\alpha$ lengthens the early\-stopping horizon without entering the excess\-risk bound as an explicit penalty\. The analysis extends to the canonical blockwise step size\~$1/L\_i$ through a curvature\-matched Lyapunov geometry that exposes a balance condition for exact block updates, and to nonconvex objectives by decoupling gradient and curvature moments via H\\"older's inequality so that stability is controlled without an almost\-sure curvature lower bound\. Experiments on convex and nonconvex benchmarks confirm the predicted trade\-off\.

## Learning\-Augmented Online Portfolio Selection: Optimal Robustness\-Consistency Tradeoffs

**Authors:** Ziliang Zhang; Tianming Zhao; Albert Zomaya

**ID:** 150779 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fRxSvIiNAR>) | [PDF](<https://openreview.net/pdf?id=fRxSvIiNAR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150779>)

We study learning\-augmented online portfolio selection \(OPS\), where an investor uses predictions to improve wealth while remaining protected against unreliable advice\. In frictionless markets, we characterize the optimal tradeoff between robustness \(wealth under arbitrary predictions\) and consistency \(wealth under perfect predictions\) tied to the geometric mean, and show that the optimal tradeoff admits a tractable online characterization\. We further quantify how performance interpolates between these endpoints under imperfect predictions by smoothness guarantees\. Under transaction costs, we give exact robust\-trading certificates and, to our knowledge, the first learning\-augmented OPS impossibility under costs: for any positive cost, no GM\-robust policy can be maximally consistent under exact predictions\. Lastly, we show that a cost\-aware greedy rule remains Pareto\-optimal\.

## Polestar: Drift\-Aware Cache Calibration and Token Commitment for Efficient Inference of Diffusion LLMs

**Authors:** Mingyu Lee; Akshat Ramachandran; Souvik Kundu; Tushar Krishna

**ID:** 154799 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AsdJ0sPsgT>) | [PDF](<https://openreview.net/pdf?id=AsdJ0sPsgT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154799>)

The inference efficiency of diffusion large language models \(dLLMs\) is constrained by two challenges: bidirectional attention precludes efficient KV\-cache reuse, while increasing decoding parallelism with static confidence thresholds can compromise generation quality\. We observe that both challenges arise from a shared phenomenon: as tokens are decoded, their contextual integration through bidirectional attention causes token representations to drift \(evolve\) across decoding steps\. This insight motivates Polestar, a training\-free inference framework that uses token representation drift as a unified signal to jointly address both challenges\. Polestar comprises two components: Polestar\-Cache, which identifies stale KV\-cache positions via drift and performs sparse KV\-cache refreshes to enable efficient reuse, and Polestar\-Commit, which detects sharp drift events to reliably identify commit\-ready tokens\. Across mathematics and coding benchmarks on several dLLM families, Polestar sets a new state of the art on the accuracy\-throughput Pareto frontier, achieving up to 10\.73% accuracy improvement, up to 3\.7x higher throughput, and high decoding parallelism of 3\.67 tokens per forward pass over existing baselines\.

## Closed\-Form Last Layer Optimization

**Authors:** Alexandre Galashov; Nathaël Da Costa; Liyuan Xu; Philipp Hennig; Arthur Gretton

**ID:** 155421 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5obHwQa2tL>) | [PDF](<https://openreview.net/pdf?id=5obHwQa2tL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155421>)

_Abstract unavailable from the accessible public sources._

## Learning Rate Decay Can Exponentially Accelerate SGD for Global Optimization of Nonconvex Functions

**Authors:** Guneykan Ozgul; Dylan Herman; Junhyung Lyle Kim; Shree H Sureshbabu; Shouvanik Chakrabarti

**ID:** 149945 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m0MNdJBi8K>) | [PDF](<https://openreview.net/pdf?id=m0MNdJBi8K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149945>)

_Abstract unavailable from the accessible public sources._

## TEMPO: Temporal Enforcement via Mode\-Separated Policy Optimization for Trustworthy LLM Backtesting

**Authors:** Zeyu Zhang; Bradly Stadie

**ID:** 148926 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uBLxMX8IFP>) | [PDF](<https://openreview.net/pdf?id=uBLxMX8IFP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148926>)

_Abstract unavailable from the accessible public sources._

## Solving Max\-Cut to Global Optimality via Feasibility\-Preserving Graph Neural Networks

**Authors:** Hao Chen; Chendi Qian; Christopher Morris; Andrea Lodi; Can Li

**ID:** 154770 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B5QAybMEKM>) | [PDF](<https://openreview.net/pdf?id=B5QAybMEKM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154770>)

_Abstract unavailable from the accessible public sources._

## Evolution Fine\-Tuning: Learning to Discover Across 371 Optimization Tasks

**Authors:** Young\-Jun Lee; Seungone Kim; Minki Kang; Alistair Liang Chuen Cheong; Zerui Chen; Seungho Han; Taehee Jung; Dongyeop Kang

**ID:** 148564 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=www9RVeEpg>) | [PDF](<https://openreview.net/pdf?id=www9RVeEpg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148564>)

_Abstract unavailable from the accessible public sources._

## Asymmetric Factorization for Low\-Rank PSD Learning: When Is the Relaxation Exact ?

**Authors:** Enliang Hu; Juho Kannala; Guoying Zhao; Quanming Yao; Kun Yue

**ID:** 151704 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YfpdGj5XI6>) | [PDF](<https://openreview.net/pdf?id=YfpdGj5XI6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151704>)

_Abstract unavailable from the accessible public sources._

## Tree\-Ensemble Repair through Constrained Optimization

**Authors:** Lorenzo Cascioli; Chaahat Jain; Marcel Steinmetz; Jörg Hoffmann; Jesse Davis

**ID:** 153244 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MgEUWFldkw>) | [PDF](<https://openreview.net/pdf?id=MgEUWFldkw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153244>)

_Abstract unavailable from the accessible public sources._

## Closed\-Form Last Layer Optimization

**Authors:** Alexandre Galashov; Nathaël Da Costa; Liyuan Xu; Philipp Hennig; Arthur Gretton

**ID:** 155421\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155421

[Paper](<https://openreview.net/forum?id=5obHwQa2tL>) | [PDF](<https://openreview.net/pdf?id=5obHwQa2tL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155421>)

_Abstract unavailable from the accessible public sources._

## Learning Rate Decay Can Exponentially Accelerate SGD for Global Optimization of Nonconvex Functions

**Authors:** Guneykan Ozgul; Dylan Herman; Junhyung Lyle Kim; Shree H Sureshbabu; Shouvanik Chakrabarti

**ID:** 149945\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149945

[Paper](<https://openreview.net/forum?id=m0MNdJBi8K>) | [PDF](<https://openreview.net/pdf?id=m0MNdJBi8K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149945>)

_Abstract unavailable from the accessible public sources._

## TEMPO: Temporal Enforcement via Mode\-Separated Policy Optimization for Trustworthy LLM Backtesting

**Authors:** Zeyu Zhang; Bradly Stadie

**ID:** 148926\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148926

[Paper](<https://openreview.net/forum?id=uBLxMX8IFP>) | [PDF](<https://openreview.net/pdf?id=uBLxMX8IFP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148926>)

_Abstract unavailable from the accessible public sources._

## Quality\-Diversity Optimization as Multi\-Objective Optimization

**Authors:** Xi Lin; Ping Guo; Yilu Liu; Bo Xue; Qingfu Zhang; Jianyong Sun

**ID:** 153242 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mh007MnyEG>) | [PDF](<https://openreview.net/pdf?id=Mh007MnyEG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153242>)

The Quality\-Diversity \(QD\) optimization aims to discover a collection of high\-performing solutions that simultaneously exhibit diverse behaviors within a user\-defined behavior space\. This paradigm has stimulated significant research interest and demonstrated practical utility in domains including robot control, creative design, and adversarial sample generation\. A variety of QD algorithms with distinct design principles have been proposed in recent years\. Instead of proposing a new QD algorithm, this work introduces a novel reformulation by casting the QD optimization as a multi\-objective optimization \(MOO\) problem with a huge number of optimization objectives\. By establishing this connection, we enable the direct adoption of well\-established MOO methods, particularly set\-based scalarization techniques, to solve QD problems through a collaborative search process\. We further provide a theoretical analysis demonstrating that our approach inherits theoretical guarantees from MOO while providing desirable properties for the QD optimization\. Experimental studies across several QD applications confirm that our method achieves performance competitive with state\-of\-the\-art QD algorithms\.

## Towards Better Generalization in Lifelong Person Re\-Identification with Flatness\-Aware Learning

**Authors:** Seungbin Hong; Sung Whan Yoon; Jae\-Young Sim

**ID:** 155207\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155207

[Paper](<https://openreview.net/forum?id=7TZx0YOrdx>) | [PDF](<https://openreview.net/pdf?id=7TZx0YOrdx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155207>)

Lifelong person re\-identification \(LReID\) requires models to continuously learn from sequentially arriving domains while retaining discriminative power for previously seen identities\. A key challenge is to prevent catastrophic forgetting without access to old data, especially under exemplar\-free constraints\. While flat\-minima optimization has shown promise in continual learning, we identify a gradient conflict that limits the effectiveness of standard Sharpness\-Aware Minimization \(SAM\) in LReID\. The ReID loss gradient dominates the perturbation direction, causing the sharpness of the distillation loss to be underestimated, which hinders the flattening of the landscape necessary for knowledge retention\.   To resolve this conflict, we propose a framework that unifies selective flatness\-aware optimization, dual\-model training, and weight\-space interpolation\. Specifically, we maintain two models per task: a stability model whose SAM perturbation is computed solely from the distillation loss, and a plasticity model optimized for the current domain\. By decoupling the perturbation objectives, our selective SAM achieves more targeted sharpness exploration along the distillation landscape, guiding the stability model toward flatter and robust regions\. After training, the two models are fused via weight\-space interpolation, and we provide a theoretical bound showing that flatter stability solutions tighten the interpolation bound and reduce forgetting during fusion\. Our method is lightweight, modular, and readily compatible with existing LReID frameworks\. Experimental results demonstrate that the proposed method consistently improves the performance of LReID in terms of both knowledge retention and generalization to unseen domains\.

## Absolute State\-wise Constrained Policy Optimization: High\-Probability State\-wise Constraints Satisfaction

**Authors:** Weiye Zhao; Feihan Li

**ID:** 149439\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149439

[Paper](<https://openreview.net/forum?id=q54wRgjMnG>) | [PDF](<https://openreview.net/pdf?id=q54wRgjMnG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149439>)

Enforcing state\-wise safety constraints is critical for the application of reinforcement learning \(RL\) in real\-world problems, such as autonomous driving and robot manipulation\. However, existing safe RL methods often enforce state\-wise constraints only in expectation, while hard state\-wise guarantees typically require strong dynamics assumptions\. The former can still allow rare but severe violations, while the latter is impractical in model\-free stochastic systems\. We instead target high\-probability control of the maximum instantaneous cost along a trajectory\. To accomplish this goal, we propose Absolute State\-wise Constrained Policy Optimization \(ASCPO\), a model\-free policy search algorithm whose exact update provides a distribution\-free high\-probability certificate for state\-wise constraint satisfaction in stochastic systems\. The guarantee holds under finite variance and does not require Gaussian, unimodal, or light\-tailed cost distributions\. We demonstrate the effectiveness of our approach by training neural network policies for extensive robot locomotion tasks, where the agent must adhere to various state\-wise safety constraints\. Our results show that ASCPO most consistently reduces state\-wise safety violations while maintaining competitive reward across challenging continuous control tasks\.

## PosterDuet: Co\-Evolving Design Generation and Reward Optimization for Product Poster Synthesis

**Authors:** junlong wu; Pengcheng Wei; Jia Sun; Huaiqing Wang; Weixuan Zeng; Zijun Li; Honglie Wang; Yongrui Heng; Boheng Zhang; Dewen Fan; Fan Yang; Tingting Gao; Houde Liu; Qianqian Gan

**ID:** 155036 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8v51RaMEuy>) | [PDF](<https://openreview.net/pdf?id=8v51RaMEuy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155036>)

Automatic e\-commerce poster generation requires the joint optimization of product fidelity, visual composition, text rendering, and commercial appeal\. Existing methods typically address this task through staged pipelines involving product segmentation, layout prediction, glyph rasterization, and conditional image synthesis\. While effective in constrained settings, such decompositions rely on rigid preprocessing assumptions and weaken the mutual adaptation among product appearance, typography, and scene composition, especially for hand\-held, worn, or context\-dependent products\. We reformulate this problem as \\emph\{holistic product\-aware poster editing\}: given a raw product image and structured metadata, the goal is to generate a complete poster directly, without segmentation masks, glyph control maps, or predefined layout boxes\. To this end, we propose PosterDuet, a closed\-loop framework that integrates a vision\-language model \(VLM\), an image editing model, and reward\-based optimization\. The VLM first generates a holistic design prompt that specifies background style, layout arrangement, promotional copy, and typographic intent from the raw image and metadata\. Conditioned on both the prompt and the original image, the image editor synthesizes the final poster in a unified editing process\. To optimize both commercial effectiveness and visual quality, we introduce a mixed\-reward learning framework that combines a CTR\-oriented reward with a generative holistic quality reward, and use GRPO to optimize the prompt\-generating VLM\. We further improve textual accuracy via OCR\-reward\-based reinforcement tuning of the image editor, and exploit natural\-language critiques from the generative reward model for iterative prompt refinement\. Extensive experiments show that PosterDuet generates more coherent, text\-faithful, and commercially effective posters than prior pipelined approaches\.

## Geometry\-Aware Zeroth\-Order Optimization for Fine\-Tuning Quantized LLMs

**Authors:** Shaocong Ma; Weidong Cai; Heng Huang

**ID:** 155279 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6r0PI7Q3I7>) | [PDF](<https://openreview.net/pdf?id=6r0PI7Q3I7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155279>)

_Abstract unavailable from the accessible public sources._

## Differentiable Nonlinear Model Predictive Control

**Authors:** Jonathan Frey; Katrin Baumgärtner; Gianluca Frison; Dirk Reinhardt; Jasper Hoffmann; Leonard Fichtner; Joschka Boedecker; Sebastien Gros; Moritz Diehl

**ID:** 153003 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OgtCRU5ApQ>) | [PDF](<https://openreview.net/pdf?id=OgtCRU5ApQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153003>)

_Abstract unavailable from the accessible public sources._

## TGPO: Temporal Grounded Policy Optimization for Signal Temporal Logic Tasks

**Authors:** Yue Meng; Fei Chen; Chuchu Fan

**ID:** 148848 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uhy1JdsQsE>) | [PDF](<https://openreview.net/pdf?id=uhy1JdsQsE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148848>)

Learning control policies for complex, long\-horizon tasks is a central challenge in autonomous systems\. Signal Temporal Logic \(STL\) offers an expressive language for specifying such tasks, but its non\-Markovian nature and inherent sparse reward make it hard for standard Reinforcement Learning \(RL\) to solve\. Prior RL approaches focus only on limited STL fragments or use robustness scores as sparse rewards\. Our new method TGPO \(Temporal Grounded Policy Optimization\) decomposes STL into timed subgoals and invariant constraints and tackles the problem in a hierarchical fashion\. Its high\-level module proposes time allocations for subgoals, and the low\-level time\-conditioned policy learns to achieve the sequenced subgoals using a dense, stage\-wise reward\. In inference, we use the critic to efficiently sample time allocations and select the most promising assignment for the policy to rollout\. We evaluate in five environments, from low\-dimensional navigation to manipulation, drone, and quadrupedal locomotion, and TGPO significantly outperforms baselines \(especially for high\-dimensional and long\-horizon cases\), with 31\.6% higher success rate compared to the best method\.

## Mirror Descent\-Ascent for mean\-field min\-max problems

**Authors:** Razvan\-Andrei Lascu; Mateusz Majka; Lukasz Szpruch

**ID:** 148349 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yXh6kzlErC>) | [PDF](<https://openreview.net/pdf?id=yXh6kzlErC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148349>)

We study two variants of the mirror descent\-ascent \(MDA\) algorithm for solving min\-max problems on the space of measures: simultaneous and alternating\. We work under assumptions of convexity\-concavity and relative smoothness of the payoff function with respect to a suitable Bregman divergence, defined on the space of measures via flat derivatives\. We establish non\-asymptotic convergence rates to mixed Nash equilibria, measured in the Nikaido\-Isoda error, proving an $\\mathcal\{O\}\(N^\{\-1/2\}\)$ rate for simultaneous MDA and an improved $\\mathcal\{O\}\(N^\{\-2/3\}\)$ rate for alternating MDA\. The main technical contribution is an infinite\-dimensional dual space analysis that relates Bregman divergences on measures to dual Bregman divergences on spaces of bounded continuous functions, allowing us to control asymmetric commutator terms created by alternating updates\. The results substantially generalize prior analyses restricted to bilinear objectives and also apply to nonlinear convex\-concave problems on measure spaces, thereby providing a unified theoretical foundation for MDA in mean\-field min\-max optimization\.

## ParetoM$^3$: Learning on the Pareto Set under Preference Guidance via Min\-Max\-Min Optimization

**Authors:** Pei Tang; Songtao Lu

**ID:** 155972 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1ROin5KHsq>) | [PDF](<https://openreview.net/pdf?id=1ROin5KHsq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155972>)

Learning across multiple inherently conflicting objectives requires selecting desirable trade\-offs from the Pareto set\.    In this work, we study preference\-guided multi\-objective optimization, where a predefined preference function is minimized over the weak Pareto set of multiple nonconvex objectives\.    Leveraging a merit function that vanishes on the weak Pareto set, we propose a penalty\-based min\-max\-min formulation, termed the M$^3$ problem, which unifies preference optimization and  the enforcement of weak Pareto optimality in a single objective\.    We further develop ParetoM$^3$, a single\-loop first\-order algorithm for computing stationary solutions of the resulting M$^3$ problem\.    Under a local Kurdyka\-\{\\L\}ojasiewicz assumption, we prove that ParetoM$^3$ finds an $\\epsilon$\-stationary point of the M$^3$ problem that is also approximately weakly Pareto optimal for the original multi\-objective problem when the penalty parameter is sufficiently large, with explicit non\-asymptotic convergence rates\.    We also show that this stationarity notion recovers existing optimality criteria, including approximate preference stationarity and approximate Karush\-Kuhn\-Tucker conditions, under the same assumptions used in prior works\. Experiments on a synthetic benchmark, image classification, regression, and math reasoning demonstrate that ParetoM$^3$ reliably attains preferred weak Pareto optimal solutions while achieving strong practical performance\.

## Stochastic Dynamic Barrier Perturbed Gradient Methods for Nonconvex Simple Bilevel Optimization

**Authors:** Mohammad Mahdi Ahmadi; Jincheng Cao; Aryan Mokhtari; Erfan Yazdandoost Hamedani

**ID:** 150123 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kVtxwFFyWj>) | [PDF](<https://openreview.net/pdf?id=kVtxwFFyWj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150123>)

We study stochastic simple bilevel optimization with smooth, possibly nonconvex upper\- and lower\-level objectives accessed only through stochastic gradient oracles\. A key challenge is that the dual multiplier induced by the lower\-level constraint may become unbounded near lower\-level stationary points, invalidating bounded\-dual analyses and destabilizing stochastic gradient estimates\. To address this, we propose \\emph\{Stochastic Dynamic Barrier Perturbed Gradient\} \(SDBPG\), a single\-loop method that adaptively perturbs the dual formulation to regularize this degeneracy\. The perturbation stabilizes the multiplier and yields controlled bias and variance even near the lower\-level stationarity region\. Under a mild rare\-visit assumption, SDBPG finds an $\(\\epsilon\_f,\\epsilon\_g\)$\-stationary point in $\\mathcal\{O\}\(\\max\\\{\\epsilon\_f^\{\-2\},\\epsilon\_g^\{\-2\}\\\}\)$ iterations, with sample gradient complexities $\\mathcal\{O\}\(\\epsilon^\{\-4\}\)$ and $\\mathcal\{O\}\(\\epsilon^\{\-6\}\)$ for the upper\- and lower\-level objectives where $\\epsilon=\\max\(\\epsilon\_f,\\epsilon\_g\)$\. We further develop PR\-SDBPG, a penalty\-regularized variant that eliminates the rare\-visit assumption, and VR\-PR\-SDBPG, which improves the resulting sample complexities entirely through variance reduction\. To our knowledge, these are the first explicit $\(\\epsilon\_f,\\epsilon\_g\)$\-stationarity guarantees for stochastic nonconvex\-nonconvex simple bilevel optimization\.

## Skip the Hessian, Keep the Rates: Globalized Semismooth Newton with Lazy Hessian Updates

**Authors:** Amal Alphonse; Pavel Dvurechenskii; Clemens Sirotenko

**ID:** 149332 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qs8DDaqFC9>) | [PDF](<https://openreview.net/pdf?id=qs8DDaqFC9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149332>)

_Abstract unavailable from the accessible public sources._

## Beyond Clipping: Signed Logarithmic Smoothing for Policy Optimization

**Authors:** Jihun Yun; Sungjoon Yoon; Beomhan Baek; Minhak Song; Jongha \(Jon\) Ryu; Kwang\-Sung Jun

**ID:** 153088 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=O4LWIO9opj>) | [PDF](<https://openreview.net/pdf?id=O4LWIO9opj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153088>)

_Abstract unavailable from the accessible public sources._

## Teacher\-Aware Evolution of Heuristic Programs from Learned Optimization Policies

**Authors:** Minyu Chen; Song Qin; Ling\-I Wu; Jianxin Xue; Guoqiang Li

**ID:** 151024 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dXWka7F0Ie>) | [PDF](<https://openreview.net/pdf?id=dXWka7F0Ie>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151024>)

_Abstract unavailable from the accessible public sources._

## Free Heavy\-Tailed Lunch for Muon: A Theoretical Justification of Empirical Success

**Authors:** Florian Hübler; Thomas Pethick; Suvrit Sra

**ID:** 155600 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4Mid5GMDGS>) | [PDF](<https://openreview.net/pdf?id=4Mid5GMDGS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155600>)

_Abstract unavailable from the accessible public sources._

## COMPASS: Composable Policy\-Amortized Structured Search for LLM\-Based Optimization Modeling

**Authors:** Nguyen Le Minh Hoang; Van D Cuong; Bui Trong Duc; Huynh Thi Thanh Binh

**ID:** 150292 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jF68qSbugj>) | [PDF](<https://openreview.net/pdf?id=jF68qSbugj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150292>)

_Abstract unavailable from the accessible public sources._

## Ordered Policy Optimization

**Authors:** Dongkyu \(Derek\) Cho; Pan Xu

**ID:** 150221 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jrmv9JPeKh>) | [PDF](<https://openreview.net/pdf?id=jrmv9JPeKh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150221>)

_Abstract unavailable from the accessible public sources._

## Spectral Annealing: Normalization\-Path Exploration for Large\-Scale Ising Optimization

**Authors:** Juan Valentin Guerrero; Phuong Cao Cong; Kostadin Damevski; Thang N Dinh

**ID:** 151524 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a138H6V09U>) | [PDF](<https://openreview.net/pdf?id=a138H6V09U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151524>)

Large\-scale Ising optimization underlies critical optimization and learning applications, including correlation clustering, MAP inference, and energy\-based models\.    Spectral relaxation methods run in polynomial time but yield solutions with significant optimality gaps while metaheuristics close those gaps but scale poorly to large instances\. In particular, spectral methods are inherently single\-shot as they solve exactly one eigenvalue problem\.   We introduce $\\textit\{Spectral Annealing\}$ \(SpecAnn\), a new spectral optimization approach that transforms traditional spectral methods from single\-shot approximations into exploration\-based optimization, by sweeping a parametrized normalization path from the raw adjacency to the signed normalized Laplacian, with an $O\(n\)$ diagonal predictor that warm\-starts successive eigensolves and GPU\-batched local search refining candidates in parallel\.   Experiments on general Ising problems demonstrate that SpecAnn achieves competitive to near\-optimal solutions depending on instance structure, with runtimes less than 7 minutes for instances of 8\.4M variables\. SpecAnn delivers up to 83$\\times$ speedup over recent GPU\-accelerated methods while maintaining superior solution quality, and scales successfully beyond 524K variables where traditional metaheuristics fail\.

## DCVD: Dual\-Channel Cross\-Modal Fusion for Joint Vulnerability Detection and Localization

**Authors:** Wenxin Tang; Wenbin Li; Junliang Liu; Jingyu Xiao; Xi Xiao; Mingzhe liu; Jinlong Yang; Xuan Liu; Yuehe Ma; Wang Luo; Qing Li; Lei Wang; Peng Xiangli

**ID:** 152806 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QFBbFDJdtz>) | [PDF](<https://openreview.net/pdf?id=QFBbFDJdtz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152806>)

Software vulnerability detection plays a critical role in ensuring system security, where real\-world auditing requires not only determining whether a function is vulnerable but also pinpointing the specific lines responsible\. However, existing approaches either rely on a single information source\-\-\-sequential, structural, or semantic\-\-\-failing to jointly exploit the complementary strengths across modalities, or treat statement\-level localization merely as a byproduct of function\-level detection without explicit line\-level supervision\. To address these limitations, we propose DCVD \(Dual\-Channel Cross\-Modal Vulnerability Detection\), a unified framework that performs joint function\-level detection and statement\-level localization\. DCVD extracts control\-dependency and semantic features through two parallel branches and integrates them via contrastive alignment coupled with bidirectional cross\-attention, effectively bridging the cross\-modal representation gap\. It further introduces explicit supervision signals at both the function and statement levels, enabling collaborative optimization across the two granularities\. Extensive experiments on a large\-scale real\-world vulnerability benchmark demonstrate that DCVD consistently outperforms state\-of\-the\-art methods on both function\-level detection and statement\-level localization\.

## DASS: A Solver\-Agnostic Dynamic Auxiliary Search Strategy for Symbolic Regression

**Authors:** Yuxiao Hu; Qian Li; Ding Wang; Yekun Zheng; Jinyue Yan; Yuntian Chen

**ID:** 149310 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=r8CiyuxeA4>) | [PDF](<https://openreview.net/pdf?id=r8CiyuxeA4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149310>)

Symbolic regression \(SR\) aims to discover interpretable mathematical expressions from data and plays a key role in scientific discovery\. However, existing methods face a common bottleneck: the enormous search space and severe combinatorial explosion make it difficult to achieve a favorable trade\-off between accuracy and algorithmic efficiency\. We argue that, in addition to designing increasingly complex solver\-specific SR strategies, an equally promising direction is to equip them with a shareable auxiliary strategy that can provide reliably search guidance\. To this end, We propose DASS, a solver\-agnostic Dynamic Auxiliary Search Strategy that improves SR by constructing and refining a high\-potential auxiliary search subspace\. DASS represents the auxiliary search space as a functional subspace spanned by a set of high\-potential basis function terms\. It estimates term utility through multi\-environment evaluation, filters unstable guidance, and updates terms' potential score with a Gibbs posterior, thereby calibrating the subspace to provide more reliable guidance for downstream solvers\. The High\-quality solutions produced by the solver are used to update the set of basis terms\. This forms a virtuous closed\-loop optimization process: the subspace guides the downstream solver, and the solver feedback reshapes the subspace for subsequent exploration\. DASS can be seamlessly integrated with various types of SR solvers\. Extensive experiments on LLM\-SRBench show that DASS significantly improves the accuracy of original solvers with a manageable increase in runtime\.

## Masked Sobolev Training for Feasibility\-Reliable Optimization Proxies

**Authors:** Andrew ROSEMBERG; Joaquim Dias Garcia; Russell Bent; Pascal Van Hentenryck

**ID:** 151801 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XuxAvk8BQy>) | [PDF](<https://openreview.net/pdf?id=XuxAvk8BQy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151801>)

Optimization proxies amortize parametric constrained optimization by learning fast approximations of solution maps\. Because these maps are smooth only within active\-set regimes, the parameter space may split into combinatorially many critical regions, making finite\-sample generalization and reliable constraint behavior central challenges\. To address this challenge, this paper develops sparse stochastic masked Sobolev training for optimization proxies, augmenting value supervision with randomly selected solver\-sensitivity targets rather than dense Jacobian matching\. The mask acts as an algorithmic control: it exposes the proxy to local derivative information while avoiding overconstraint from conflicting active constraint set signals\. We provide approximation bounds showing that, under coverage and regularity, joint value\-and\-Jacobian matching improves finite\-sample generalization\. Experiments characterize when and how this benefit appears\. In smooth optimal\-control distillation, where feasibility is guaranteed by construction, and only a few active\-set regimes arise, Sobolev supervision reaches 95\\% of teacher performance about $2\.5\\times$ faster than value\-only training\. In AC optimal power flow, masked Sobolev training keeps optimality gaps below 0\.22\\% across three PGLib networks while reducing the median worst\-case constraint violation by up to $4\\times$\. A mean\-\-variance portfolio study identifies the complementary limitation: when sensitivities are highly local or vanish across active\-set regimes, derivative supervision can be less useful than value\-only training\.

## Learning\-Augmented Online Portfolio Selection: Optimal Robustness\-Consistency Tradeoffs

**Authors:** Ziliang Zhang; Tianming Zhao; Albert Zomaya

**ID:** 150779\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150779

[Paper](<https://openreview.net/forum?id=fRxSvIiNAR>) | [PDF](<https://openreview.net/pdf?id=fRxSvIiNAR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150779>)

We study learning\-augmented online portfolio selection \(OPS\), where an investor uses predictions to improve wealth while remaining protected against unreliable advice\. In frictionless markets, we characterize the optimal tradeoff between robustness \(wealth under arbitrary predictions\) and consistency \(wealth under perfect predictions\) tied to the geometric mean, and show that the optimal tradeoff admits a tractable online characterization\. We further quantify how performance interpolates between these endpoints under imperfect predictions by smoothness guarantees\. Under transaction costs, we give exact robust\-trading certificates and, to our knowledge, the first learning\-augmented OPS impossibility under costs: for any positive cost, no GM\-robust policy can be maximally consistent under exact predictions\. Lastly, we show that a cost\-aware greedy rule remains Pareto\-optimal\.

## Polestar: Drift\-Aware Cache Calibration and Token Commitment for Efficient Inference of Diffusion LLMs

**Authors:** Mingyu Lee; Akshat Ramachandran; Souvik Kundu; Tushar Krishna

**ID:** 154799\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154799

[Paper](<https://openreview.net/forum?id=AsdJ0sPsgT>) | [PDF](<https://openreview.net/pdf?id=AsdJ0sPsgT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154799>)

The inference efficiency of diffusion large language models \(dLLMs\) is constrained by two challenges: bidirectional attention precludes efficient KV\-cache reuse, while increasing decoding parallelism with static confidence thresholds can compromise generation quality\. We observe that both challenges arise from a shared phenomenon: as tokens are decoded, their contextual integration through bidirectional attention causes token representations to drift \(evolve\) across decoding steps\. This insight motivates Polestar, a training\-free inference framework that uses token representation drift as a unified signal to jointly address both challenges\. Polestar comprises two components: Polestar\-Cache, which identifies stale KV\-cache positions via drift and performs sparse KV\-cache refreshes to enable efficient reuse, and Polestar\-Commit, which detects sharp drift events to reliably identify commit\-ready tokens\. Across mathematics and coding benchmarks on several dLLM families, Polestar sets a new state of the art on the accuracy\-throughput Pareto frontier, achieving up to 10\.73% accuracy improvement, up to 3\.7x higher throughput, and high decoding parallelism of 3\.67 tokens per forward pass over existing baselines\.

## Correct, Route, Calibrate: Efficient Preference Optimization from Noisy, Heterogeneous Human Feedback

**Authors:** Zhongming Xie; Xinwei Ma; Jingshen Wang

**ID:** 152258 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UOoH4aqCJg>) | [PDF](<https://openreview.net/pdf?id=UOoH4aqCJg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152258>)

Human labels are important supervisory signals for preference\-based reinforcement learning, but their collection is often constrained by practical considerations that standard training objectives tend to ignore\. For instance, Direct Preference Optimization \(DPO\) usually treats observed preference labels as clean, even though real annotation pipelines rely on heterogeneous annotators whose reliability varies across individuals and with the difficulty of each comparison\. This setting introduces three challenges: \(1\) Noisy labels introduce systematic bias into the preference optimization objective and need to be rigorously corrected\. \(2\) The allocation of pairwise comparisons to different annotators is a design problem that directly affects the statistical efficiency of the training pipeline\. \(3\) Non\-random routing creates selection bias in annotator evaluation, complicating downstream decisions such as compensation\. We address these challenges within a unified framework for DPO that combines annotator\-aware posterior correction with information\-guided annotator routing\. Posterior correction leverages an instance\-dependent noise model to infer latent ground\-truth preferences from noisy labels, mitigating bias in the DPO objective\. Annotator routing is formulated as an optimal experimental design problem that allocates comparisons to annotators according to their expected statistical information under a fixed annotation budget\. To support reliable annotator evaluation under non\-random routing, we introduce a doubly robust estimator that corrects for selection bias\. Semi\-synthetic experiments on the UltraFeedback dataset show that our approach improves ground\-truth preference recovery and downstream AlpacaEval 2 performance over baselines, with consistent gains across multiple open\-source LLM model architectures\. Annotator reliability\-estimation experiments further show that the doubly robust estimator substantially reduces mean squared error relative to other baselines, demonstrating its value for annotator evaluation\.

## Optimal Hidden\-Target Learning for Online Inventory Optimization on General Convex Sets

**Authors:** Anthony Pineci; Yunzong Xu

**ID:** 148709 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=veDCFlujwu>) | [PDF](<https://openreview.net/pdf?id=veDCFlujwu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148709>)

Online inventory optimization \(OIO\) is online convex optimization with physical memory: inventory can be raised immediately, but it can be reduced only by demand\. A natural principle, used in stochastic inventory learning and recently in OIO with linear capacity constraints, is to maintain a hidden target chosen by an online learner and implement its projection onto the currently feasible order\-up\-to set\. We prove that this simple principle is optimal for OIO on arbitrary bounded convex capacity sets\.  With online gradient descent as the hidden learner, the method improves the best known regret guarantee for OIO on general convex sets from inverse to inverse\-square\-root dependence on the common\-demand probability, and we prove a matching lower bound\. The analysis identifies the right geometric state variable: the Euclidean distance between the hidden target and the implementable set\. This distance evolves pathwise as a scalar queue, with target movement as arrivals and common demand as service, reducing the state\-dependent feasibility cost to the control of a one\-dimensional queue\. The same reduction gives the first logarithmic regret guarantee for strongly convex losses and the first dynamic regret guarantee adapting to Euclidean path variation on general convex capacity sets\.

## Achieving Directional\-Stationarity from a Single Random Direction Step

**Authors:** Dan Greenstein; Nadav Hallak

**ID:** 149362\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149362

[Paper](<https://openreview.net/forum?id=qblLv39mYL>) | [PDF](<https://openreview.net/pdf?id=qblLv39mYL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149362>)

This paper addresses the challenge of obtaining strong optimality guarantees in constrained nonsmooth nonconvex optimization under mild regularity conditions, namely local Lipschitz continuity and existence and continuity of directional derivatives\.  While standard methods typically ensure weak stationarity notions, achieving directional \(d\-\)stationarity remains nontrivial\. We show that a random direction exploration step is sufficient to attain d\-stationarity\.  The proposed approach augments any base optimization method with a single exploration step that samples a direction and step size and accepts the candidate based on a function value comparison\. The resulting scheme guarantees that all accumulation points are d\-stationary almost surely, independently of the behavior of the underlying method\.  Moreover, it preserves convergence rates of the base method, as established for DCA and prox\-linear\-type schemes\. The theoretical results are complemented by numerical experiments illustrating the effect and guarantees of the exploration step\.

## From Cursed to Competitive: Closing the ZO–FO Gap via Input\-to\-State Stability

**Authors:** Amir Ali Farzin; Philipp Braun; Iman Shames

**ID:** 150158\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150158

[Paper](<https://openreview.net/forum?id=kEqC3TBex2>) | [PDF](<https://openreview.net/pdf?id=kEqC3TBex2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150158>)

While it is generally understood that zeroth\-order \(ZO\) algorithms have an extra dependency on their number of iterations for any choice of parameters, compared to their first\-order \(FO\) counterparts, in this work, we show that under several conditions, in expectation, ZO methods do not suffer from extra dimension dependencies in their convergence rates with respect to their FO counterparts\. We look at optimisation algorithms from the dynamical systems perspective and analyse the conditions under which one can formulate the average of a ZO algorithm as the average of its FO counterpart with bounded perturbations with values dependent on design parameters\. Then, using input\-to\-state stability properties, we show ZO methods follow the same decay rate as their FO counterparts and converge to a neighbourhood of the fixed point of FO methods, where its radius depends on the bound of the norm of the perturbations, which can be made arbitrarily small\. The theoretical findings are illustrated via numerical examples\.

## Provable Speedups From Dynamic Population Sizes in Evolutionary Algorithms for Multiobjective Optimization

**Authors:** Andre Opris

**ID:** 152154\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152154

[Paper](<https://openreview.net/forum?id=V8Wc9BZete>) | [PDF](<https://openreview.net/pdf?id=V8Wc9BZete>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152154>)

This paper investigates the role of dynamic population sizes in evolutionary multi\-objective optimization\. Although such approaches are widely used in practice, their benefits remain poorly understood, and rigorous runtime analyses explaining when and why they help are still scarce\. To address this, we introduce the bi\-objective problem class CLIMB and analyze the runtime of GSEMO and the widely used NSGA\-II on this problem\. Our results show that allowing a dynamic population size for NSGA\-II can lead to a moderate improvement, yielding a speedup of order $\\Omega\(\\sqrt\{n\}/\\log n\)$\. In particular, we prove that GSEMO and NSGA\-II\-DYN, a version of NSGA\-II with dynamic population sizes we propose in this paper, can find the Pareto front of CLIMB in expected $O\(n \\log n\)$ fitness evaluations, whereas NSGA\-II with a fixed population size requires $\\Omega\(n^\{1\.5\}\)$ fitness evaluations in expectation\. To the best of our knowledge, this is the first rigorous runtime analysis in multi\-objective optimization demonstrating a super\-constant speedup of GSEMO over NSGA\-II\. Our analysis builds on concepts from single\-objective optimization, like the evolution of population diversity over time, and employs the well\-known family\-three method to prove the lower bound\.

## Reward Bias Substitution: Single\-Axis Bias Mitigations Redirect Optimization Pressure

**Authors:** Max Lamparth; Daniel Fein; Andreas Haupt; Marcel Hussing; Mykel J Kochenderfer

**ID:** 154792\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154792

[Paper](<https://openreview.net/forum?id=Auv9cgHOSa>) | [PDF](<https://openreview.net/pdf?id=Auv9cgHOSa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154792>)

Single\-axis mitigations of reward\-model biases \(e\.g\., reducing reliance of the proxy reward on length, sycophancy, or style\) can rotate optimization pressure onto correlated proxies rather than eliminate it, a failure mode we call reward bias substitution\.    We formalize the underlying measurement\-vs\-optimization gap between the audit distributions where mitigations are validated and the policy distributions where optimization realizes their effects\.    We introduce a taxonomy, instantiated in closed form, classifying single\-axis mitigation outcomes into successful mitigation, bias substitution, overcorrection, silent non\-op, and audit\-distribution sensitivity\.    We prove that single\-axis mitigation methods cannot be validated by audit\-distribution\-only evaluation: successful mitigation, bias substitution, and overcorrection produce structurally identical observables under ranking accuracy and win\-rate scoring, regardless of benchmarks richness\.    Augmenting evaluation with policy\-induced distributions provably closes the gap and we give actionable prescriptions for mitigation methods and benchmarks\.   Across published preference\-learning mitigation work, we identify bias substitution regimes in results not previously connected to a unified failure mode\.    Our experiments also show that a published length\-debiasing operator zeros pooled reward–length correlation but flips sign within\-prompt on three of four SOTA reward models with true reward degrading on two, and that length–sycophancy coupling reverses under human–LLM judge disagreement across eight model families\.

## Online Min\-Max Optimization: From Individual Regrets to Cumulative Saddle Points

**Authors:** Abhijeet Vyas; Brian Bullins

**ID:** 151634\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151634

[Paper](<https://openreview.net/forum?id=Z7Fzxtf74w>) | [PDF](<https://openreview.net/pdf?id=Z7Fzxtf74w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151634>)

We propose and study an online version of min\-max optimization based on cumulative saddle points under a variety of performance measures beyond convex\-concave settings\. After first observing the incompatibility of \(static\) Nash equilibrium \(SNE\-Reg$\_T$\) with individual regrets even for strongly convex\-strongly concave functions, we propose an alternate static duality gap \(SDual\-Gap$\_T$\) inspired by the online convex optimization \(OCO\) framework that is compatible with the individual regrets \. We provide algorithms that achieve sub\-linear regret bounds for \(SDual\-Gap$\_T$\) and the individual regrets and a novel dynamic saddle point regret \(DSP\-Reg$\_T$\), which we suggest naturally represents a min\-max version of the dynamic regret in OCO\. We derive our bounds for \(SDual\-Gap$\_T$\) and DSP\-Reg$\_T$ under strong convexity\-strong concavity and a min\-max notion of exponential concavity \(min\-max EC\), and in addition we establish a class of functions satisfying min\-max EC that captures a two\-player variant of the classic portfolio selection problem\. Finally, for a dynamic notion of regret compatible with individual regrets, we derive bounds under a two\-sided Polyak\-\\L\{\}ojasiewicz \(PL\) condition\.

## Finite\-Resolution Decision Sufficiency for Linear Optimization

**Authors:** Mohammed Jamal; Soufiane Fafe

**ID:** 154190 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FWtqToBwOZ>) | [PDF](<https://openreview.net/pdf?id=FWtqToBwOZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154190>)

_Abstract unavailable from the accessible public sources._

## AutoSaddler: Automatic Harness Optimization with Durable Updates from Agent Execution Traces

**Authors:** Sungho Park; Wonjoong Kim; Rongyuan Tan; Jue Zhang; WOOK SHIN HAN; Pengfei Gao; Chanyoung Park; Qingwei Lin; Saravan Rajmohan; Dongmei Zhang

**ID:** 151256\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151256

[Paper](<https://openreview.net/forum?id=bkGK6zovnv>) | [PDF](<https://openreview.net/pdf?id=bkGK6zovnv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151256>)

_Abstract unavailable from the accessible public sources._

## On the Necessity of Guidance Decay:  From Three\-Phase Analysis in Gaussian Mixture Models to Dynamic Optimization

**Authors:** Yiyu Qiu; Ruofeng Yang; Tong Yu; Shuai Li

**ID:** 151326\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151326

[Paper](<https://openreview.net/forum?id=bLqrqUf9K9>) | [PDF](<https://openreview.net/pdf?id=bLqrqUf9K9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151326>)

Classifier\-Free Guidance \(CFG\) is essential for conditional diffusion, yet constant guidance scales often fail to balance alignment with over\-exposure and extreme sample issues\. Existing heuristic schedules, like guidance truncation, lack rigorous principles and sacrifice classification confidence, while theoretical studies remain limited to constant guidance at final denoising stages, leaving the full sampling trajectory largely unanalyzed\. In this work, we provide a theoretical foundation for dynamic guidance by analyzing Gaussian Mixture Models \(GMM\) within a general SDE framework\. We characterize the dynamics of classification confidence through three distinct stages: convergence, mixed, and divergence, and rigorously prove the impact of varying guidance scale $\\omega$ at reverse time $k$\.  We analyze the Convergence Boundary $\\Omega\(k\)$ as the maximum guidance scale that ensures the reverse trajectory remains within the high\-density regions of the data distribution\. We prove that during denoising, the permissible guidance scale $\\omega$ must decay to prevent the trajectory from escaping into the divergent phase, especially at the end of the denoising\. Although different noise schedules have different decay rates, we found that VP\(Variance Preserving\) has more stringent decay rate requirement compared to VE\(Variance Exploding\), which is why VP is most prone to overexposure\. Specifically, $\\Omega\(k\)$ simplifies to an exponential decay $O\(e^\{T\-k\}\)$ in VPSDE and an algebraic decay $O\(T\-k\)$ in VESDE\. This provides a unified explanation for why constant guidance inevitably triggers artifacts and demonstrates that guidance truncation is essentially  a coarse approximations of this stability limit\. We can achieve dynamic optimization based on the decay rate, which better restricts the scale within the convergence region, thereby effectively eliminating overexposure while maintaining excellent semantic alignment and improving generation quality\.

## EvoOptiGraph: Weakness\-Driven Coevolution via Graph\-Based Structural Generation for Optimization Modeling

**Authors:** Qingcan Kang; Mingyang LIU; Xiaojin Fu; Shixiong Kai; Tao Zhong; Mingxuan Yuan

**ID:** 155640\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155640

[Paper](<https://openreview.net/forum?id=45RetuO3zX>) | [PDF](<https://openreview.net/pdf?id=45RetuO3zX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155640>)

Automating optimization modeling from natural language faces two key challenges: training corpora lack structural diversity, and data generation pipelines remain static and decoupled from model learning\. To address these challenges, we propose EvoOptiGraph, a novel framework where data and model co\-evolve, driven by model weaknesses\. EvoOptiGraph represents each mixed\-integer linear program \(MILP\) as an attributed bipartite graph and applies validity\-preserving evolutionary operators to generate structurally diverse instances\. The evolved graphs are converted into solver code and natural language via deterministic compilation and verified back translation\. Training proceeds in two stages: supervised fine\-tuning \(SFT\) on an initial dataset, followed by reinforcement learning with verifiable rewards \(RLVR\), where graph\-derived weakness signals dynamically evolve new instances that target the model's failures, forming a closed loop that continuously updates the training distribution\. Empirical results on six public datasets show that EvoOptiGraph significantly outperforms larger generalist models, agentic methods, and specialized baselines in accuracy, executability, and generalization\. These results demonstrate that targeted data–model coevolution is an effective strategy for improving LLMs on optimization modeling tasks\.

## Sparse Updates Generalize Better Than Optimization: Stability Analysis for Randomized Subspace Descent

**Authors:** Yifei Liang; Yan Sun; Yifei Cheng; Haobo Fu; XIAOCHUN CAO; Li Shen

**ID:** 148588\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148588

[Paper](<https://openreview.net/forum?id=weRx6oFuWD>) | [PDF](<https://openreview.net/pdf?id=weRx6oFuWD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148588>)

Large\-scale learning increasingly relies on updating only a coordinate, a block, or a low\-dimensional subspace per iteration to reduce memory and communication costs, yet the statistical consequence of such reduced update coverage, beyond the well\-understood optimization slowdown, remains open\. Available stability analyses are restricted to coordinate\-level projectors whose orthogonality drives the argument, deterministic\-output assumptions incompatible with randomized updates, or uniform step sizes that ignore curvature\-adaptive blockwise schedules; none explains how general subspace coverage controls population risk\. We analyze this question through randomized subspace descent \(RSD\), a framework that recovers GD, RCD, BCD, and isotropic SSD as special cases: under joint isotropy the expected projection energy reduces to a single coverage parameter\~$\\alpha$, enabling unified stability analysis without coordinate\-level structure\. The convex excess risk scales as $O\(\\alpha^\{\-1/4\}N^\{\-1/2\}\)$, improving to $O\(\(N\\sqrt\{\\alpha\}\)^\{\-1\}\)$ under low noise, substantially gentler than the $O\(1/\\alpha\)$ optimization slowdown, while in the nonconvex Polyak\-\-\{\\L\}ojasiewicz setting $\\alpha$ lengthens the early\-stopping horizon without entering the excess\-risk bound as an explicit penalty\. The analysis extends to the canonical blockwise step size\~$1/L\_i$ through a curvature\-matched Lyapunov geometry that exposes a balance condition for exact block updates, and to nonconvex objectives by decoupling gradient and curvature moments via H\\"older's inequality so that stability is controlled without an almost\-sure curvature lower bound\. Experiments on convex and nonconvex benchmarks confirm the predicted trade\-off\.

## In\-Expectation Convergence of Stochastic Gradient Methods under Heavy\-Tailed Noise

**Authors:** Zijian Liu

**ID:** 151715 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ybxgq6TUcv>) | [PDF](<https://openreview.net/pdf?id=Ybxgq6TUcv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151715>)

_Abstract unavailable from the accessible public sources._

## DrPO: Drifting Preference Optimization for One\-Step Generative Models

**Authors:** Zhou Jiang; Yandong Wen; Zhen Liu

**ID:** 151942 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WfyzQahi56>) | [PDF](<https://openreview.net/pdf?id=WfyzQahi56>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151942>)

_Abstract unavailable from the accessible public sources._

## AETDICE: Unified Framework and Offline Optimization for Nonlinear Multi\-Objective RL

**Authors:** Woosung Kim; Youngjun Suh; Jinho Lee; Jongmin Lee; Byung\-Jun Lee

**ID:** 150928 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eIYJqaER5g>) | [PDF](<https://openreview.net/pdf?id=eIYJqaER5g>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150928>)

_Abstract unavailable from the accessible public sources._

## B$^3$\-PWL: GPU\-Batched Branch\-and\-Bound for Piecewise\-Linear Optimization with SOS2 Constraints

**Authors:** Yilin Guan; Shuqing Luo; Pingzhi Li; Tianlong Chen; Kaidi Xu

**ID:** 150051 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l7awisNMWs>) | [PDF](<https://openreview.net/pdf?id=l7awisNMWs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150051>)

_Abstract unavailable from the accessible public sources._

## Beyond Outcome: Trajectory\-Driven Prompt Optimization via Multi\-Dimensional Rewards

**Authors:** Zhixiang Liang; Yixiang Huang; CHENJING CAI; Hao Wu; Peihang Liu; Qi Liu; Qiqi Zhong; Jiuchong Gao; Jinghua Hao; Renqing He

**ID:** 150285 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jJXfMK7Ifb>) | [PDF](<https://openreview.net/pdf?id=jJXfMK7Ifb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150285>)

_Abstract unavailable from the accessible public sources._

## Stochastic Zeroth\-Order Optimization Under Heavy\-Tailed Noise

**Authors:** Taha EL BAKKALI EL KADI; El Mahdi Chayti; Qiuyi \(Richard\) Zhang; Imane Rahali; Omar Saadi

**ID:** 153577 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KNeGuHB7Md>) | [PDF](<https://openreview.net/pdf?id=KNeGuHB7Md>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153577>)

_Abstract unavailable from the accessible public sources._

## Differentiating Network Design Objectives for Balancing Cost and Distance

**Authors:** Zishang Chen; Longhe Lin; Zhiyuan Julian Su; Qi Qi

**ID:** 151671 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YuYZQCQoQp>) | [PDF](<https://openreview.net/pdf?id=YuYZQCQoQp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151671>)

Many network design tasks must decide which directed arcs to build so that multiple sources can reach a root efficiently\.  Building fewer or cheaper arcs reduces construction cost, but may force long routing paths; building more arcs shortens routes, but increases construction cost\.  The Cost\-\-Distance problem formalizes this trade\-off, yet it has remained difficult to optimize with gradient\-based methods because the selected network,  the induced routes, and the routing cost are tightly coupled\. We propose Cost Distance Policy Gradient \(CDPG\),  a differentiable framework that treats local next\-hop choices as a routing policy, prevents unstable cyclic routing through Dynamic Acyclic Dropout,  evaluates the objective with a truncated value solver, and uses the induced acyclic support for quality\-preserving TopoRounding\.  Under the stated conditions, CDPG has a fixed\-accuracy \\\(\\mathcal\{O\}\(m\\log n\)\\\) efficiency guarantee\.  Experiments cover 1,487 instances in UAV logistics networks, transportation networks, and four synthetic graph families;  across this suite, CDPG shows a strong time\-\-quality trade\-off compared with other differentiable baselines, Cost\-\-Distance\-specific algorithms, and the commercial solver\. Our code is available at: https://anonymous\.4open\.science/r/cdpg\_nips\-28D5/\.

## Beyond Outcome Rewards: Process\-Aware Optimization for Search Agents

**Authors:** Yiwei Dai; Hengyi Cai; Hui Wu; Yili Wang; Han Xu; Minlan Shao; Yuchen Li; Shuaiqiang Wang; Xin Wang; Yi Chang; Dawei Yin

**ID:** 148305 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ypn6A8dz0y>) | [PDF](<https://openreview.net/pdf?id=ypn6A8dz0y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148305>)

Search agents based on large language models address complex information\-seeking tasks by iteratively issuing queries, retrieving evidence, and integrating information\. Effective training of such agents requires supervision beyond final\-answer correctness, as outcome\-level rewards cannot distinguish efficient evidence acquisition from redundant or misdirected search\. Recent process\-level methods introduce intermediate supervision, but typically apply uniform signals across trajectories\. However, such uniformity overlooks the state\-dependent nature of process quality, where the value of an intermediate decision depends on the current evidence state\. This motivates a systematic analysis of how process quality varies across trajectories with different evidence states and final outcomes\. To this end, we analyze search trajectories on BrowseComp\-Plus and xBench, revealing two consistent patterns: successful trajectories often suffer from post\-alignment inefficiency \(redundant searches\), whereas failed trajectories typically struggle with misdirected exploration and insufficient coverage\. Motivated by these findings, we propose \*\*P\*\*rocess\-\*\*A\*\*ware \*\*G\*\*rouped r\*\*E\*\*ward optimization \(\*\*PAGE\*\*\), a framework for search agents that provides a concrete instantiation of state\-dependent process supervision\. \*\*PAGE\*\* partitions trajectories according to final outcomes, assigns differentiated process rewards to successful and failed groups, and integrates them with outcome supervision at either the reward or advantage level\. Experiments on three backbones across six multi\-hop QA and web\-search benchmarks show that \*\*PAGE\*\* consistently improves answer accuracy over outcome\-only baselines\.

## Negative\-Only Policy Optimization for One\-Sided Verifiable Rewards

**Authors:** Jiacheng Xu; Shuo He; Fuxiang Zhang; Chaojie Wang; Bo An

**ID:** 152610 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RpadYP6yxY>) | [PDF](<https://openreview.net/pdf?id=RpadYP6yxY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152610>)

Reinforcement learning with verifiable rewards \(RLVR\) typically relies on a verifier that can reliably judge whether sampled solutions are correct\. However, in many realistic settings, complete verification is generally unavailable, while cheap checks can only falsify failures\. We formalize this regime as one\-sided verifiability \(OSV\): verified negatives are reliable counterexamples, but verified positives are merely non\-falsified candidates and may contain many false positives\. This asymmetry makes standard RLVR unreliable, because reinforcing verified positives can directly reward shortcuts that pass partial checks\. To address this issue, we propose  Negative\-Only Policy Optimization \(NOPO\), which treats verified positives as unlabeled and updates the policy only by suppressing trusted verified negatives\. Specifically, NOPO combines two safeguards: a sample\-level NPO term that self\-attenuates once a verifier\-negative is suppressed below the reference, and a group\-level non\-falsified support weight that scales each group's update by its verifier\-positive count\. Across unit\-test, constraint\-check, and LLM self\-verifiers, NOPO improves pass@k over baselines on code, logic, and math benchmarks when oracle rewards are unavailable\. These gains persist under inference\-time scaling and cross\-benchmark transfer\.

## A Doubly Smoothed Decentralized Stochastic Minimax Optimization Algorithm

**Authors:** Xinwen Zhang; Chiu C Tan; Haibin Ling; Hongchang Gao

**ID:** 152790 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QJwveeEv8G>) | [PDF](<https://openreview.net/pdf?id=QJwveeEv8G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152790>)

Decentralized stochastic minimax optimization has recently attracted significant attention due to its applications in machine learning\. However, existing state\-of\-the\-art methods use learning rates of different scales for the primal and dual variables, making them difficult to tune in practice\. To address this problem, this paper proposes a novel doubly smoothed decentralized stochastic minimax algorithm\. Specifically, in terms of algorithm design, we update both the primal and dual variables using smoothed gradients and introduce novel approaches to handle the computation and communication of the auxiliary variables introduced by the smoothing technique\. On the theoretical side, for nonconvex\-PL problems, our convergence analysis reveals that the learning rates for the primal and dual variables are of the same scale\. Moreover, the order of the condition number in our convergence rate is improved to $O\(\\kappa^\{3/2\}\)$\. To the best of our knowledge, this is the first time it has been improved to such a favorable order\.  Finally, extensive experimental results validate the effectiveness of our algorithm\.

## Frontier\-Eng: Benchmarking Self\-Evolving Agents on Real\-World Engineering with Generative Optimization

**Authors:** Dapeng Jiang; Yizhe Chi; Kaisen Yang; Tianwei Luo; Boshi Zhang; Deyao Hong; Dianqiao Lei; Yifan Zhou; Weiyang Jin; Xiaoyan Fan; Han Hao; Zhe Cao; Qian Houde; Qingle Liu; Bohan Lyu; Bowen Wang; Situ Wang; Youjie Zheng; Bingxiang He; Eren Cai; Calvin Xiao; Qinhuai Na

**ID:** 139163 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hXNx575zFR>) | [PDF](<https://openreview.net/pdf?id=hXNx575zFR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139163>)

_Abstract unavailable from the accessible public sources._

## A Grid Efficient Transport Optimization Model for the Wasserstein Barycenter Problem

**Authors:** Gennaro Auricchio; Massimiliano Ghiotto; Stefano Gualandi

**ID:** 153536 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KcRsOQnPQQ>) | [PDF](<https://openreview.net/pdf?id=KcRsOQnPQQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153536>)

We propose the Grid Efficient Transport Optimization Linear Programming \(GETO\-LP\) model, a novel formulation of the Fixed\-Support Wasserstein barycenter problem for $M$ probability distributions supported on $d$\-dimensional grids\. While standard LP models require $O\(MN^2\)$ variables, the GETO\-LP model requires only $O\(dMN^\{1\+\\frac\{1\}\{d\}\}\)$, with $N$ being the total number of points in the grid support\. Despite the reduced number of variables, our formulation is \\emph\{exact\}, meaning that its solution fully characterizes both the barycenter $\\nu$ and the optimal transport plans between $\\nu$ and each of the $M$ input distributions without additional optimization steps\. We validate the GETO\-LP model via extensive comparisons with classical and entropic regularization solvers, demonstrating its effectiveness on both synthetic data and real\-world applications such as color palette manipulation and medical data averaging\. Overall, our approach provides an effective formulation for the Wasserstein barycenter problem, offering a memory\-efficient alternative that naturally integrates with other existing computational frameworks\.

## Skill\-Coupled Policy Optimization with Calibrated Group\-Wise Advantage Estimation

**Authors:** Peng Wang; Zhendong Chu; Chengshuai Shi; Matthias Poloczek; Cong Shen; Jing Yang

**ID:** 149473 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pqt0gteKQs>) | [PDF](<https://openreview.net/pdf?id=pqt0gteKQs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149473>)

Reinforcement learning with verifiable rewards \(RLVR\) has become a standard paradigm for post\-training large language models on reasoning tasks\. To avoid the complexity of training explicit critics, algorithms like GRPO estimate advantages directly from sparse on\-policy rollouts\. However, the efficacy of this approach relies heavily on the accuracy of the baseline estimator\. In this work, we argue that standard methods, whether relying on prompt\-local averages or shrinking toward a single global mean, are statistically mis\-specified for reasoning domains\. By enforcing a uniform prior, these methods ignore the latent skill structure of tasks, introducing estimation bias that conflates dissimilar problems\. To address this, we propose Skill\-Coupled Policy Optimization \(SCPO\), a structured baseline estimation framework that refines the shrinkage prior by leveraging task correlations\. Instead of a generic global target, SCPO performs shrinkage toward skill\-coupled group targets, thereby aligning the baseline with the local difficulty landscape\. To further stabilize these targets under limited on\-policy observations, SCPO incorporates a lightweight history tracker\. Experiments across diverse models and tasks show that SCPO consistently improves training stability and performance over both prompt\-level and global shrinkage baselines\.

## Certified Single\-Level Reformulation for Tri\-Level Cyber\-Physical Grid Security

**Authors:** Debraj Banerjee; Gurunath Gurrala; Kunal Narayan Chaudhury

**ID:** 152235 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UZCoLnaUiy>) | [PDF](<https://openreview.net/pdf?id=UZCoLnaUiy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152235>)

Modern power grids are increasingly exposed to coordinated cyber\-physical disruptions, where the outage of a small number of transmission components can trigger severe post\-contingency load shedding\. Designing proactive \_security defense\_ against such adversarial contingencies is naturally modeled as a tri\-level Defender\-Attacker\-Operator \(DAO\) problem: the defender allocates limited hardening resources, the attacker selects worst\-case line outages, and the operator solves a post\-attack DC/AC\-optimal power flow \(OPF\)\. However, the resulting tri\-level program is computationally prohibitive even for moderate network sizes\.  We develop a certified four\-step reformulation pipeline that converts this intractable tri\-level DAO problem into a tractable single\-level optimization, yielding a Single\-Level Mixed\-Integer Linear Program \(SL\-MILP\) under DC\-OPF and a Single\-Level Mixed\-Integer Conic Program \(SL\-MICP\) under AC\-OPF\. The construction combines exact dualization, exact Big\-$M$ linearization, and a single controlled attacker relaxation\. We prove that the resulting single\-level optimum provides a conservative upper bound on the true worst\-case load shedding and, more importantly, yields a robustness certificate for the deployed defense: no feasible binary attack can induce damage exceeding the reported single\-level value\. Extensive experiments on IEEE benchmark systems demonstrate substantial runtime improvements while maintaining strong worst\-case security guarantees\.

## Match the Geometry, Skip the Surrogate: Extreme Low\-Budget Optimization in High Dimensions

**Authors:** Michal Prusek; Adam Novozámský; Filip Sroubek

**ID:** 155876 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2BB0oOmLs4>) | [PDF](<https://openreview.net/pdf?id=2BB0oOmLs4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155876>)

Low\-budget molecular optimization is often framed as Bayesian optimization in a learned latent space, but standard benchmarks typically allow hundreds or thousands of evaluations, whereas a realistic wet\-lab round may allow only a few dozen\. We revisit this regime using a SELFIES molecular variational autoencoder and GuacaMol objectives at $N=30$ oracle calls\. The main finding is not a new surrogate model, but a geometric mismatch in candidate generation\. The training latents of the VAE concentrate near a narrow spherical shell, while many high\-dimensional optimizers propose candidates from boxes or box\-shaped trust regions\. Such candidates can leave the decoder's training distribution even when their coordinates look individually plausible\. We study a simple geometric constraint, the on\-sphere scaffold, that restricts candidate generation to the empirical shell occupied by the VAE training latents\. Uniform random search on this shell already outperforms most of the classical box\-supported Bayesian optimization baselines\. We then introduce two minimal optimizers to probe what remains useful once the support is fixed\. GeoWalk performs geodesic local search on the empirical sphere and outperforms every published Bayesian optimization baseline tested\. GeoCMA keeps the scaffold but adds covariance learning in a random subspace, becoming preferable when the search representation contains learnable directional or semantic structure, as in LassoBench, NAS\-Bench\-101 graph\-VAE optimization, and GSM8K text\-latent prompt optimization\. A controlled ablation of three recent Gaussian\-process recipes, changing only whether candidates are proposed on the empirical sphere or on the published box\-supported domain, shows that the scaffold rather than the surrogate is the load\-bearing component\. The practical lesson is simple: first match the empirical search support; add a surrogate or covariance learner only when the remaining search space contains directional structure that can be learned from the available budget\.

## H\-GenPO: Hierarchical Generative Policy Optimization via the Option\-Critic Framework

**Authors:** Wonhyeok Choi; Minwoo Choi; Jaeyeul Kim; Kyumin Hwang; Jongmin Gim; Sunghoon Im

**ID:** 148440 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xmAWFBUpId>) | [PDF](<https://openreview.net/pdf?id=xmAWFBUpId>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148440>)

Diffusion\-based policies have demonstrated remarkable performance in online reinforcement learning \(RL\) by virtue of their expressive, multimodal action distributions\. However, existing methods operate on a flat architecture that must generate a new action at every timestep, with no mechanism for temporal commitment to a behavioral mode—making them ill\-suited for context\-dependent tasks that require sustaining coherent behavioral modes, regardless of how expressive their action distributions are\. We propose Hierarchical Generative Policy Optimization \(H\-GenPO\), the first framework to integrate on\-policy diffusion\-based RL with the temporal abstraction of the Option\-Critic architecture\. H\-GenPO adopts a two\-level hierarchy in which a high\-level policy over options selects among a discrete set of options, while a unified flow matching model—conditioned on a learned option embedding—serves as the expressive low\-level intra\-option primitive\. The shared intra\-option policy design encapsulates diverse behavioral repertoires within a single set of parameters, enabling scalable hierarchical control without the parameter growth associated with maintaining separate policy networks per option\. We evaluate H\-GenPO on 8 standard continuous control tasks in Isaac Lab and 3 custom context\-dependent tasks designed to require coordinated behavioral mode switching\. Our empirical evaluation demonstrates that H\-GenPO achieves the best mean rank among all baselines on both standard and context\-dependent benchmarks, while also exhibiting interpretable option specialization that emerges without any option\-level supervision\.

## SMILE: Bridging Continuous Optimization and Discrete Symbolic Recovery

**Authors:** Mansooreh Montazerin; Antonio Ortega; Ajitesh Srivastava

**ID:** 152682\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152682

[Paper](<https://openreview.net/forum?id=RCI7AIVyKg>) | [PDF](<https://openreview.net/pdf?id=RCI7AIVyKg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152682>)

Symbolic regression \(SR\) discovers closed\-form mathematical expressions from data, offering interpretability beyond black\-box models\. Existing methods suffer from slow convergence in combinatorial search spaces and lack mechanisms to exploit compositional structure in the data\. We introduce SMILE \(Sine, Multiplication, Identity, Logarithm, Exponential\), a hybrid framework that unifies continuous gradient\-based optimization with discrete symbolic recovery through three stages: structural analysis of the data to identify the compositional hierarchy of the target expression, continuous optimization to learn parameters of a network that encodes the target expression using interpretable activations, and symbolic recovery through structured pruning, coefficient optimization, and rounding\. This final stage distills the learned network into a compact expression with exact symbolic constants\. We evaluate SMILE on SRBench across ground\-truth and black\-box datasets, with ablation studies validating each component\. SMILE achieves the highest symbolic solution rate at the largest noise levels, demonstrating strong robustness where competing methods degrade substantially\. It consistently lies on the Pareto front of accuracy versus complexity, recovering significantly simpler expressions in a fraction of the time required by the competing methods\.

## Sparse Updates Generalize Better Than Optimization: Stability Analysis for Randomized Subspace Descent

**Authors:** Yifei Liang; Yan Sun; Yifei Cheng; Haobo Fu; XIAOCHUN CAO; Li Shen

**ID:** 148588\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148588

[Paper](<https://openreview.net/forum?id=weRx6oFuWD>) | [PDF](<https://openreview.net/pdf?id=weRx6oFuWD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148588>)

Large\-scale learning increasingly relies on updating only a coordinate, a block, or a low\-dimensional subspace per iteration to reduce memory and communication costs, yet the statistical consequence of such reduced update coverage, beyond the well\-understood optimization slowdown, remains open\. Available stability analyses are restricted to coordinate\-level projectors whose orthogonality drives the argument, deterministic\-output assumptions incompatible with randomized updates, or uniform step sizes that ignore curvature\-adaptive blockwise schedules; none explains how general subspace coverage controls population risk\. We analyze this question through randomized subspace descent \(RSD\), a framework that recovers GD, RCD, BCD, and isotropic SSD as special cases: under joint isotropy the expected projection energy reduces to a single coverage parameter\~$\\alpha$, enabling unified stability analysis without coordinate\-level structure\. The convex excess risk scales as $O\(\\alpha^\{\-1/4\}N^\{\-1/2\}\)$, improving to $O\(\(N\\sqrt\{\\alpha\}\)^\{\-1\}\)$ under low noise, substantially gentler than the $O\(1/\\alpha\)$ optimization slowdown, while in the nonconvex Polyak\-\-\{\\L\}ojasiewicz setting $\\alpha$ lengthens the early\-stopping horizon without entering the excess\-risk bound as an explicit penalty\. The analysis extends to the canonical blockwise step size\~$1/L\_i$ through a curvature\-matched Lyapunov geometry that exposes a balance condition for exact block updates, and to nonconvex objectives by decoupling gradient and curvature moments via H\\"older's inequality so that stability is controlled without an almost\-sure curvature lower bound\. Experiments on convex and nonconvex benchmarks confirm the predicted trade\-off\.

## Learning\-Augmented Online Portfolio Selection: Optimal Robustness\-Consistency Tradeoffs

**Authors:** Ziliang Zhang; Tianming Zhao; Albert Zomaya

**ID:** 150779\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150779

[Paper](<https://openreview.net/forum?id=fRxSvIiNAR>) | [PDF](<https://openreview.net/pdf?id=fRxSvIiNAR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150779>)

We study learning\-augmented online portfolio selection \(OPS\), where an investor uses predictions to improve wealth while remaining protected against unreliable advice\. In frictionless markets, we characterize the optimal tradeoff between robustness \(wealth under arbitrary predictions\) and consistency \(wealth under perfect predictions\) tied to the geometric mean, and show that the optimal tradeoff admits a tractable online characterization\. We further quantify how performance interpolates between these endpoints under imperfect predictions by smoothness guarantees\. Under transaction costs, we give exact robust\-trading certificates and, to our knowledge, the first learning\-augmented OPS impossibility under costs: for any positive cost, no GM\-robust policy can be maximally consistent under exact predictions\. Lastly, we show that a cost\-aware greedy rule remains Pareto\-optimal\.

## Polestar: Drift\-Aware Cache Calibration and Token Commitment for Efficient Inference of Diffusion LLMs

**Authors:** Mingyu Lee; Akshat Ramachandran; Souvik Kundu; Tushar Krishna

**ID:** 154799\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154799

[Paper](<https://openreview.net/forum?id=AsdJ0sPsgT>) | [PDF](<https://openreview.net/pdf?id=AsdJ0sPsgT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154799>)

The inference efficiency of diffusion large language models \(dLLMs\) is constrained by two challenges: bidirectional attention precludes efficient KV\-cache reuse, while increasing decoding parallelism with static confidence thresholds can compromise generation quality\. We observe that both challenges arise from a shared phenomenon: as tokens are decoded, their contextual integration through bidirectional attention causes token representations to drift \(evolve\) across decoding steps\. This insight motivates Polestar, a training\-free inference framework that uses token representation drift as a unified signal to jointly address both challenges\. Polestar comprises two components: Polestar\-Cache, which identifies stale KV\-cache positions via drift and performs sparse KV\-cache refreshes to enable efficient reuse, and Polestar\-Commit, which detects sharp drift events to reliably identify commit\-ready tokens\. Across mathematics and coding benchmarks on several dLLM families, Polestar sets a new state of the art on the accuracy\-throughput Pareto frontier, achieving up to 10\.73% accuracy improvement, up to 3\.7x higher throughput, and high decoding parallelism of 3\.67 tokens per forward pass over existing baselines\.

## Correct, Route, Calibrate: Efficient Preference Optimization from Noisy, Heterogeneous Human Feedback

**Authors:** Zhongming Xie; Xinwei Ma; Jingshen Wang

**ID:** 152258\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152258

[Paper](<https://openreview.net/forum?id=UOoH4aqCJg>) | [PDF](<https://openreview.net/pdf?id=UOoH4aqCJg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152258>)

Human labels are important supervisory signals for preference\-based reinforcement learning, but their collection is often constrained by practical considerations that standard training objectives tend to ignore\. For instance, Direct Preference Optimization \(DPO\) usually treats observed preference labels as clean, even though real annotation pipelines rely on heterogeneous annotators whose reliability varies across individuals and with the difficulty of each comparison\. This setting introduces three challenges: \(1\) Noisy labels introduce systematic bias into the preference optimization objective and need to be rigorously corrected\. \(2\) The allocation of pairwise comparisons to different annotators is a design problem that directly affects the statistical efficiency of the training pipeline\. \(3\) Non\-random routing creates selection bias in annotator evaluation, complicating downstream decisions such as compensation\. We address these challenges within a unified framework for DPO that combines annotator\-aware posterior correction with information\-guided annotator routing\. Posterior correction leverages an instance\-dependent noise model to infer latent ground\-truth preferences from noisy labels, mitigating bias in the DPO objective\. Annotator routing is formulated as an optimal experimental design problem that allocates comparisons to annotators according to their expected statistical information under a fixed annotation budget\. To support reliable annotator evaluation under non\-random routing, we introduce a doubly robust estimator that corrects for selection bias\. Semi\-synthetic experiments on the UltraFeedback dataset show that our approach improves ground\-truth preference recovery and downstream AlpacaEval 2 performance over baselines, with consistent gains across multiple open\-source LLM model architectures\. Annotator reliability\-estimation experiments further show that the doubly robust estimator substantially reduces mean squared error relative to other baselines, demonstrating its value for annotator evaluation\.

## Optimal Hidden\-Target Learning for Online Inventory Optimization on General Convex Sets

**Authors:** Anthony Pineci; Yunzong Xu

**ID:** 148709\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148709

[Paper](<https://openreview.net/forum?id=veDCFlujwu>) | [PDF](<https://openreview.net/pdf?id=veDCFlujwu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148709>)

Online inventory optimization \(OIO\) is online convex optimization with physical memory: inventory can be raised immediately, but it can be reduced only by demand\. A natural principle, used in stochastic inventory learning and recently in OIO with linear capacity constraints, is to maintain a hidden target chosen by an online learner and implement its projection onto the currently feasible order\-up\-to set\. We prove that this simple principle is optimal for OIO on arbitrary bounded convex capacity sets\.  With online gradient descent as the hidden learner, the method improves the best known regret guarantee for OIO on general convex sets from inverse to inverse\-square\-root dependence on the common\-demand probability, and we prove a matching lower bound\. The analysis identifies the right geometric state variable: the Euclidean distance between the hidden target and the implementable set\. This distance evolves pathwise as a scalar queue, with target movement as arrivals and common demand as service, reducing the state\-dependent feasibility cost to the control of a one\-dimensional queue\. The same reduction gives the first logarithmic regret guarantee for strongly convex losses and the first dynamic regret guarantee adapting to Euclidean path variation on general convex capacity sets\.

## Towards Better Generalization in Lifelong Person Re\-Identification with Flatness\-Aware Learning

**Authors:** Seungbin Hong; Sung Whan Yoon; Jae\-Young Sim

**ID:** 155207\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155207

[Paper](<https://openreview.net/forum?id=7TZx0YOrdx>) | [PDF](<https://openreview.net/pdf?id=7TZx0YOrdx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155207>)

Lifelong person re\-identification \(LReID\) requires models to continuously learn from sequentially arriving domains while retaining discriminative power for previously seen identities\. A key challenge is to prevent catastrophic forgetting without access to old data, especially under exemplar\-free constraints\. While flat\-minima optimization has shown promise in continual learning, we identify a gradient conflict that limits the effectiveness of standard Sharpness\-Aware Minimization \(SAM\) in LReID\. The ReID loss gradient dominates the perturbation direction, causing the sharpness of the distillation loss to be underestimated, which hinders the flattening of the landscape necessary for knowledge retention\.   To resolve this conflict, we propose a framework that unifies selective flatness\-aware optimization, dual\-model training, and weight\-space interpolation\. Specifically, we maintain two models per task: a stability model whose SAM perturbation is computed solely from the distillation loss, and a plasticity model optimized for the current domain\. By decoupling the perturbation objectives, our selective SAM achieves more targeted sharpness exploration along the distillation landscape, guiding the stability model toward flatter and robust regions\. After training, the two models are fused via weight\-space interpolation, and we provide a theoretical bound showing that flatter stability solutions tighten the interpolation bound and reduce forgetting during fusion\. Our method is lightweight, modular, and readily compatible with existing LReID frameworks\. Experimental results demonstrate that the proposed method consistently improves the performance of LReID in terms of both knowledge retention and generalization to unseen domains\.

## Absolute State\-wise Constrained Policy Optimization: High\-Probability State\-wise Constraints Satisfaction

**Authors:** Weiye Zhao; Feihan Li

**ID:** 149439\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149439

[Paper](<https://openreview.net/forum?id=q54wRgjMnG>) | [PDF](<https://openreview.net/pdf?id=q54wRgjMnG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149439>)

Enforcing state\-wise safety constraints is critical for the application of reinforcement learning \(RL\) in real\-world problems, such as autonomous driving and robot manipulation\. However, existing safe RL methods often enforce state\-wise constraints only in expectation, while hard state\-wise guarantees typically require strong dynamics assumptions\. The former can still allow rare but severe violations, while the latter is impractical in model\-free stochastic systems\. We instead target high\-probability control of the maximum instantaneous cost along a trajectory\. To accomplish this goal, we propose Absolute State\-wise Constrained Policy Optimization \(ASCPO\), a model\-free policy search algorithm whose exact update provides a distribution\-free high\-probability certificate for state\-wise constraint satisfaction in stochastic systems\. The guarantee holds under finite variance and does not require Gaussian, unimodal, or light\-tailed cost distributions\. We demonstrate the effectiveness of our approach by training neural network policies for extensive robot locomotion tasks, where the agent must adhere to various state\-wise safety constraints\. Our results show that ASCPO most consistently reduces state\-wise safety violations while maintaining competitive reward across challenging continuous control tasks\.

## Online Min\-Max Optimization: From Individual Regrets to Cumulative Saddle Points

**Authors:** Abhijeet Vyas; Brian Bullins

**ID:** 151634\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151634

[Paper](<https://openreview.net/forum?id=Z7Fzxtf74w>) | [PDF](<https://openreview.net/pdf?id=Z7Fzxtf74w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151634>)

We propose and study an online version of min\-max optimization based on cumulative saddle points under a variety of performance measures beyond convex\-concave settings\. After first observing the incompatibility of \(static\) Nash equilibrium \(SNE\-Reg$\_T$\) with individual regrets even for strongly convex\-strongly concave functions, we propose an alternate static duality gap \(SDual\-Gap$\_T$\) inspired by the online convex optimization \(OCO\) framework that is compatible with the individual regrets \. We provide algorithms that achieve sub\-linear regret bounds for \(SDual\-Gap$\_T$\) and the individual regrets and a novel dynamic saddle point regret \(DSP\-Reg$\_T$\), which we suggest naturally represents a min\-max version of the dynamic regret in OCO\. We derive our bounds for \(SDual\-Gap$\_T$\) and DSP\-Reg$\_T$ under strong convexity\-strong concavity and a min\-max notion of exponential concavity \(min\-max EC\), and in addition we establish a class of functions satisfying min\-max EC that captures a two\-player variant of the classic portfolio selection problem\. Finally, for a dynamic notion of regret compatible with individual regrets, we derive bounds under a two\-sided Polyak\-\\L\{\}ojasiewicz \(PL\) condition\.

## Sharper Guarantees for Misspecified Kernelized Bandit Optimization

**Authors:** Davide Maran; Csaba Szepesvari

**ID:** 150958 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e0ScKNIPd0>) | [PDF](<https://openreview.net/pdf?id=e0ScKNIPd0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150958>)

Existing guarantees for misspecified kernelized bandit optimization pay for misspecification through kernel complexity:  in generic offline bounds, the misspecification level $\\varepsilon$ is multiplied by $\\sqrt\{d\_\\mathrm\{eff\}\}$, where $d\_\\mathrm\{eff\}$ is the kernel effective dimension, while in online regret bounds, the corresponding penalty is $\\sqrt\{\\gamma\_n\}\\,n\\varepsilon$, where $\\gamma\_n$ is the maximum information gain after $n$ rounds of interaction\.  In this work, we show that, for a large class of kernels, the misspecification amplification can be reduced to logarithmic or polylogarithmic growth\.  In the offline setting, we first prove high\-probability simple\-regret bounds whose misspecification term is governed by a spectral Lebesgue constant\.  This yields logarithmic amplification for one\-dimensional monotone spectra and polylogarithmic amplification for multivariate Fourier\-diagonal product kernels\.  In the online setting, we modify a domain\-splitting algorithm and prove a cumulative regret bound of $\\widetilde\{\\mathcal O\}\(\\sqrt\{\\gamma\_n n\}\+n\\varepsilon\)$ under mild localized eigendecay assumptions, removing the extra $\\sqrt\{\\gamma\_n\}$ factor from the misspecification term\.  The common principle is localization: spectral localization controls the Lebesgue constant of the offline approximation operator, while domain splitting implements the spatial analogue of this mechanism in the online setting, preventing local misspecification errors from being amplified globally\.

## Finite\-Resolution Decision Sufficiency for Linear Optimization

**Authors:** Mohammed Jamal; Soufiane Fafe

**ID:** 154190\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154190

[Paper](<https://openreview.net/forum?id=FWtqToBwOZ>) | [PDF](<https://openreview.net/pdf?id=FWtqToBwOZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154190>)

_Abstract unavailable from the accessible public sources._

## PosterDuet: Co\-Evolving Design Generation and Reward Optimization for Product Poster Synthesis

**Authors:** junlong wu; Pengcheng Wei; Jia Sun; Huaiqing Wang; Weixuan Zeng; Zijun Li; Honglie Wang; Yongrui Heng; Boheng Zhang; Dewen Fan; Fan Yang; Tingting Gao; Houde Liu; Qianqian Gan

**ID:** 155036\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155036

[Paper](<https://openreview.net/forum?id=8v51RaMEuy>) | [PDF](<https://openreview.net/pdf?id=8v51RaMEuy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155036>)

Automatic e\-commerce poster generation requires the joint optimization of product fidelity, visual composition, text rendering, and commercial appeal\. Existing methods typically address this task through staged pipelines involving product segmentation, layout prediction, glyph rasterization, and conditional image synthesis\. While effective in constrained settings, such decompositions rely on rigid preprocessing assumptions and weaken the mutual adaptation among product appearance, typography, and scene composition, especially for hand\-held, worn, or context\-dependent products\. We reformulate this problem as \\emph\{holistic product\-aware poster editing\}: given a raw product image and structured metadata, the goal is to generate a complete poster directly, without segmentation masks, glyph control maps, or predefined layout boxes\. To this end, we propose PosterDuet, a closed\-loop framework that integrates a vision\-language model \(VLM\), an image editing model, and reward\-based optimization\. The VLM first generates a holistic design prompt that specifies background style, layout arrangement, promotional copy, and typographic intent from the raw image and metadata\. Conditioned on both the prompt and the original image, the image editor synthesizes the final poster in a unified editing process\. To optimize both commercial effectiveness and visual quality, we introduce a mixed\-reward learning framework that combines a CTR\-oriented reward with a generative holistic quality reward, and use GRPO to optimize the prompt\-generating VLM\. We further improve textual accuracy via OCR\-reward\-based reinforcement tuning of the image editor, and exploit natural\-language critiques from the generative reward model for iterative prompt refinement\. Extensive experiments show that PosterDuet generates more coherent, text\-faithful, and commercially effective posters than prior pipelined approaches\.

## Geometry\-Aware Zeroth\-Order Optimization for Fine\-Tuning Quantized LLMs

**Authors:** Shaocong Ma; Weidong Cai; Heng Huang

**ID:** 155279\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155279

[Paper](<https://openreview.net/forum?id=6r0PI7Q3I7>) | [PDF](<https://openreview.net/pdf?id=6r0PI7Q3I7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155279>)

_Abstract unavailable from the accessible public sources._

## Differentiable Nonlinear Model Predictive Control

**Authors:** Jonathan Frey; Katrin Baumgärtner; Gianluca Frison; Dirk Reinhardt; Jasper Hoffmann; Leonard Fichtner; Joschka Boedecker; Sebastien Gros; Moritz Diehl

**ID:** 153003\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153003

[Paper](<https://openreview.net/forum?id=OgtCRU5ApQ>) | [PDF](<https://openreview.net/pdf?id=OgtCRU5ApQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153003>)

_Abstract unavailable from the accessible public sources._

## PORT: Preference Optimization via Robust Token\-Level Reweighting

**Authors:** Ding Zhu; Xiukun Wei; Tian Xie; Zhihui Zhu; Xueru Zhang; Mohammad Mahdi Khalili

**ID:** 151657\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151657

[Paper](<https://openreview.net/forum?id=Z0gcomg5dI>) | [PDF](<https://openreview.net/pdf?id=Z0gcomg5dI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151657>)

Preference optimization has become a central approach for aligning large language models  with human values, but its effectiveness depends heavily on the quality of preference annotations\. In practice, preference data is often noisy due to annotation errors and ambiguity\. Existing robust preference optimization methods primarily operate at the sequence level, implicitly treating entire responses as uniformly correct or incorrect\. However, rejected responses may still contain informative reasoning steps, while preferred responses can include subtle errors\. In this work, we propose a \*\*P\*\*reference \*\*O\*\*ptimization via \*\*R\*\*obust \*\*T\*\*oken\-Level reweighting \(PORT\), a fine\-grained framework for robust alignment under noisy preferences\. PORT performs token\-level reweighting using the empirical cumulative distribution function \(CDF\) of token logits, yielding an efficient forward\-pass\-only proxy to gradient\-norm penalization that selectively suppresses corrupted tokens without additional backward\-pass computation\. We provide theoretical analysis showing that PORT reduces the gradient bias from noisy labels by minimizing an upper bound on the bias term\. Extensive experiments across diverse noise settings demonstrate that PORT consistently improves robustness and outperforms existing sequence\-level baselines\.

## OPPO: Bayesian Value Recursion for Token\-Level Credit Assignment in Policy Optimization

**Authors:** Yu Li; Rui Miao; Tian Lan; Zhengling Qi

**ID:** 151932\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151932

[Paper](<https://openreview.net/forum?id=WkadvgDPwb>) | [PDF](<https://openreview.net/pdf?id=WkadvgDPwb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151932>)

Reinforcement learning methods for LLM reasoning typically assign a uniform advantage to every token in a trajectory, diluting the learning signal at pivotal reasoning steps and injecting noise at uninformative positions\. Critic\-free alternatives such as anchored distillation derive per\-token signals from oracle\-conditioned likelihood ratios, but apply the signal independently at each position\. We propose Oracle\-Prompted Policy Optimization \(\\n\), which recovers exact token\-level advantages through a Bayesian value recursion\. Conditioning the model on the ground\-truth answer during training yields per\-token likelihood ratios that measure how much the answer revises the model's prediction; the ratios accumulate via Bayesian updating into a running estimate of the success probability at every position, from which the token\-level advantage follows in closed form\. The advantage factors as a product of a state weight, peaking where the outcome is most uncertain and vanishing where success or failure is already determined, and the per\-token oracle evidence familiar from on\-policy distillation, with no tunable weighting hyperparameter\. The framework supports two estimator choices: a self\-oracle mode in which the policy model provides the estimate through one additional forward pass, and a teacher\-oracle mode in which a stronger model serves as the estimator\. Experiments on two base models across seven reasoning benchmarks spanning mathematics, science, and code demonstrate consistent improvements over GRPO, DAPO, and SDPO, with the largest gains on competition\-level tasks where reasoning chains are longest\.

## Mildly Overparameterized ReLU Networks on Orthogonal Data: Incremental Learning and Implicit Bias

**Authors:** James Town; Etienne Boursier; Ben Lewis; Matthias Englert; Ranko Lazic

**ID:** 149598\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149598

[Paper](<https://openreview.net/forum?id=ouh5P3tlCS>) | [PDF](<https://openreview.net/pdf?id=ouh5P3tlCS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149598>)

The successful training of neural networks hinges on the use of first order optimization methods, yet the theoretical characterization of these methods remains incomplete\. This is especially true in settings with mild overparameterization\. In this work, we study the gradient flow dynamics of two\-layer ReLU networks from small initialization with orthogonal training data\. We prove the limiting flow converges to a saddle\-to\-saddle jump process as the initialization scale tends to zero, revealing an incremental learning phenomenon in which a new neuron activates at each saddle\. This analysis recovers the known result of Dana et al\. \(2025\) that the network interpolates the training data with high probability as soon as $m \\gtrsim \\log\(n\)$, where $m$ is the network width and $n$ is the number of training samples\. This incremental process characterization also allows us to derive a novel implicit bias result: the learned interpolator has an $\\ell\_2$\-norm scaling as $\\sqrt\{n\}$, which is within a constant factor of the minimal\-norm interpolator\. More broadly, our work provides the first rigorous proof of an incremental learning process for ReLU networks, whilst suggesting mildly overparameterized networks can converge to interpolating solutions whose complexity is of the same order as that of the optimal interpolator\.

## FerQ: Fermat Quotient Reformulation of High\-Order Binary Optimization

**Authors:** Phuong Nam Nguyen; Seng Loke; Anil Prabhakar; Son N Tran

**ID:** 152029\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152029

[Paper](<https://openreview.net/forum?id=W4U6AMYhfN>) | [PDF](<https://openreview.net/pdf?id=W4U6AMYhfN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152029>)

High\-order binary optimization \(HOBO\) problems, defined as the minimization of functions involving interactions among three or more binary variables, are prevalent in machine learning and quantum computing\. The minimization of these high\-order energy functions remains computationally intractable without quadratization or reformulation\. This work introduces FerQ, a universal and auxiliary\-free reformulation of high\-order energy functions based on Fermat quotient expansion\. For any degree\-d monomial over binary variables, FerQ provides an exact, closed\-form representation as a rational linear combination of Fermat quotients evaluated on a scalar aggregate, with coefficients determined by a single matrix inversion\. FerQ is evaluated against twelve existing energy function transformation methods on k\-SAT and Max\-k\-SAT benchmarks from four databases, as well as on random p\-spin glass and k\-local Hamiltonian instances\. FerQ achieves the highest satisfaction and weighted satisfaction rates across all benchmarks, while incurring the lowest CPU runtime\. To enable deployment on quantum annealers, we derive FerQ\-Bc, a qubit\-efficient embedding scheme that maps the reformulated energies onto quadratic unconstrained binary optimization \(QUBO\) form, achieving good ancilla efficiency in high\-degree regimes\.

## Action\-Level Behavior Policy Optimization for Variance\-Reduced Policy Gradients

**Authors:** Jingkai Huang; Qinxun Bai; Zhengyuan Zhou

**ID:** 153538\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153538

[Paper](<https://openreview.net/forum?id=KbaSvFaIVV>) | [PDF](<https://openreview.net/pdf?id=KbaSvFaIVV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153538>)

Policy gradient methods may suffer from high variance, which limits their sample efficiency\. Existing variance\-reduction techniques largely focus on estimator design under a fixed sampling policy\. In contrast, we ask whether the action\-sampling distribution itself, often left at the on\-policy default, can be optimized to reduce policy gradient variance\. We show that this default is in fact not variance\-optimal even when the state distribution is held on\-policy\. To exploit this, we introduce \*Action\-Level Behavior Policy Optimization\* \(BPO\), a framework that treats the behavior policy as an action\-level proposal distribution at each on\-policy state, while keeping the state distribution itself on\-policy\. For a one\-step importance\-sampled policy gradient estimator, we sharply decompose its variance into an irreducible state term and a controllable action term, and show that the latter can be minimized in closed form via BPO\. Under exact critic and sampling oracles, this yields a strictly tighter nonconvex SGD bound than on\-policy sampling whenever the score\-weighted critic is action\-dependent\. We then extend the analysis to approximate critics and parametrized behavior policies updated by a single stochastic step, and verify the resulting sample\-efficiency gains empirically\. These results identify action\-level BPO as a principled mechanism for improving the sample efficiency of policy gradient methods\.

## HALO: Heterogeneous\-Aware LoRA Optimization via Rank Allocation and Client\-Aware Projection

**Authors:** Xiaohua Feng; Yuyuan Li; Jiayuan Fang; Fengyuan Yu; Jiaming Zhang; Li Zhang; Xiang Liu; Jun Wang; Chaochao Chen

**ID:** 154108\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154108

[Paper](<https://openreview.net/forum?id=GCoRDt8PdU>) | [PDF](<https://openreview.net/pdf?id=GCoRDt8PdU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154108>)

Federated Learning \(FL\) with Low\-Rank Adaptation \(LoRA\) enables privacy\-preserving collaborative fine\-tuning of foundation models\. Existing federated LoRA studies often assume homogeneous ranks and lack principled rank allocation, leading to underfitting or overfitting under data and resource heterogeneity\. Although later heterogeneous\-rank federated LoRA methods relax the homogeneous\-rank assumption, they still ignore resource\-adaptive rank allocation across clients, while their aggregation and distribution strategies suffer from structural limitations, including rank collapse in naive truncation and the loss of locally relevant update signals caused by objective mismatch in SVD truncation\. To address these issues, we propose HALO, a heterogeneous federated LoRA framework that integrates adaptive rank allocation with client\-aware aggregation and distribution\. Under the neural tangent kernel regime, we derive a sufficient rank condition to guide client\-specific rank allocation from local data geometry and resource constraints\. We further propose Client\-Aware Projection \(CAP\), which builds a product\-summed reference and redistributes rank\-compatible balanced LoRA factors through projections onto client\-induced subspaces, improving generalization via cross\-client information while preserving locally relevant update signals\. We show that CAP controls the client\-loss\-relevant truncation residual under the NTK approximation without additional communication overhead, which stabilizes local training and improves performance\. Extensive experiments demonstrate the effectiveness of HALO\. Our code is available at \[https://anonymous\.4open\.science/r/artifact2026\-4174\]\(https://anonymous\.4open\.science/r/artifact2026\-4174\)\.

## VeriGraph: Towards Verifiable Data\-Analytic Agents

**Authors:** Jiajie Jin; Zhao Yang; WenLe Liao; Yuyang Hu; Guanting Dong; Xiaoxi Li; Yutao Zhu; Zhicheng Dou

**ID:** 151870\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151870

[Paper](<https://openreview.net/forum?id=XHH1MUulfY>) | [PDF](<https://openreview.net/pdf?id=XHH1MUulfY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151870>)

LLM\-based agents have demonstrated strong capabilities in data\-intensive analytical tasks, yet their outputs are rarely verifiable: a reliance on linear text trajectories makes their reasoning difficult to audit\. In particular, deterministic computations over raw data and semantic deductions over natural\-language claims are often entangled in an unstructured stream, leaving numerical conclusions hard to reproduce and qualitative judgments hard to inspect\. To address this, we propose VeriGraph, a traceable neuro\-symbolic reasoning framework that enables agents to construct an explicit heterogeneous evidence directed acyclic graph \(DAG\) during execution\. VeriGraph introduces three evidence\-expansion primitives, namely computational, grounding, and derivational expansion, to connect raw data, interpreter variables, computed results, and natural\-language claims in a unified graph\. Under this formulation, structural traceability is reduced to graph reachability from raw data sources to terminal claims, while semantic support is measured by claim\-level evidence evaluation\. To improve graph construction, we further design a graph\-based policy optimization strategy with a composite reward that jointly supervises answer correctness, computational integrity, and derivational coherence\. Experiments on four benchmarks show that VeriGraph\-8B achieves the highest overall score among all baselines\. More importantly, VeriGraph produces auditable evidence graphs with substantially stronger claim grounding, achieving a 87\.61\\% Grounding Rate under our claim\-level evidence support evaluation\. These results suggest that explicit evidence\-graph construction is a promising path toward verifiable data\-analytic agents\. Our code is available at \\url\{https://anonymous\.4open\.science/r/VeriGraph\-417E\}\.

## PRISM: Asymmetric Precision\-Recall Optimization for Million\-Scale Root Cause Analysis

**Authors:** Wei Zhang; Rongyao Cai; Xiaosheng Li; Hang Yu; Rui Wang

**ID:** 151138\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151138

[Paper](<https://openreview.net/forum?id=cjaVe5kjFu>) | [PDF](<https://openreview.net/pdf?id=cjaVe5kjFu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151138>)

Multi\-dimensional Root Cause Analysis \(RCA\) requires searching an exponential $\\mathcal\{O\}\(2^M\)$ attribute space over millions of records within seconds to isolate the root\-cause combination\.     Existing methods fail at this industrial scale due to a fundamental modeling oversight: employing symmetric objectives that treat anomalous and normal samples interchangeably, allowing the massive normal background to dominate computation\.     To overcome this, we propose \\textbf\{PRISM\} \(\\underline\{P\}recision\-\\underline\{R\}ecall \\underline\{I\}nformed \\underline\{S\}ubspace \\underline\{M\}ining\), which reformulates RCA as an asymmetric Precision\-Recall optimization\.      Precision is defined over anomaly\-normal pairs and Recall over anomaly\-anomaly pairs, eliminating uninformative normal\-normal comparisons entirely\.     Coupled with tensor compression and a two\-stage solver, comprising Bernoulli continuous relaxation and combinatorial verification, PRISM reduces pairwise complexity from a full\-dataset quadratic scale to an anomaly\-bounded $\\mathcal\{O\}\(\|\\mathcal\{P\}\|^2\)$\.     Evaluations on four public benchmarks and a new 5\.13M\-record industrial dataset show that PRISM achieves the highest average F1 \(0\.90 vs\.\\ 0\.65 for the strongest baseline\), while maintaining sub\-second latency across a $2^\{110\}$ attribute space\.      We publicly release this dataset as \\textbf\{NFC\}, establishing the first production\-sourced, million\-scale benchmark for multi\-dimensional RCA\.     \\href\{https://anonymous\.4open\.science/status/PRISM\-09FC\}\{\[Code\]\}

## Nerve\-Skeleton Message Passing for Federated Optimization with Overlapping Parameters

**Authors:** Wei Zhang

**ID:** 149655 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oSVZ8C084r>) | [PDF](<https://openreview.net/pdf?id=oSVZ8C084r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149655>)

Existing federated learning setups assume either a single global model or a fixed decomposition with one globally shared parameter block and one client\-specific private block\. In this paper, we study a generalized federated optimization setting where each client optimizes a local coordinate block, and two clients interact only when their blocks overlap\. We encode these coordinate overlaps by a graph on clients, called the nerve skeleton\. Based on this structure, we propose Nerve\-Skeleton Message Passing \(NSMP\), a two\-phase protocol on a spanning tree: a leaf\-to\-root pass composes reduced objectives by partial minimization, and a root\-to\-leaf pass reconstructs a joint assignment\. We further show that, under the tree\-elimination schedule in the paper, NSMP is equivalent to minimizing the joint objective, where the leaf\-to\-root phase evaluates the optimal objective value, and the root\-to\-leaf phase recovers a globally optimal assignment\. Experiments show that NSMP solves federated optimization with overlapping parameters using only efficient neighbor\-to\-neighbor message passing\.

## EVA\-0: Test\-Time Model Evolution with Only Two Forward Passes per Sample

**Authors:** Guohao Chen; Shuaicheng Niu; Geng Li; Yunbei Zhang; Shilin Shan; Chunyan Miao; Jianfei Yang

**ID:** 148681 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vrZyjNTvp5>) | [PDF](<https://openreview.net/pdf?id=vrZyjNTvp5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148681>)

Test\-time model evolution offers a promising way for deployed models to improve from unlabeled test\-time experience, yet most existing methods depend on backpropagation \(BP\), which incurs substantial memory overhead and makes them difficult to deploy on edge devices, quantized models, specialized accelerators, or black\-box models\. In this work, we study test\-time model evolution under a strict two\-forward budget, a setting that pushes adaptation toward highly efficient real\-world deployment\. We reveal three key obstacles in zeroth\-order test\-time optimization: susceptibility to shortcut solutions, uncontrolled weight drift, and ineffective update direction estimation\. To overcome them, we propose EVA\-0, a minimal zeroth\-order adaptation framework that: 1\) keeps the loss scale\-invariant to prevent shortcut solutions; 2\) devises an anchor\-guided optimization strategy to alleviate weight drift; 3\) uses sample\-wise symmetric two\-sided perturbation for update direction estimation and inference\. EVA\-0 requires no BP and performs both inference and adaptation within only two forward passes per sample\. Results on ImageNet\-C\\&amp;ViT\-Base show that EVA\-0 outperforms both BP\-based DeYO and BP\-free FOA, while achieving a 14$\\times$ speed\-up over FOA\.

## Subcritical Signal Propagation at Initialization in Normalization\-Free Transformers

**Authors:** Sergey Alekseev

**ID:** 149848 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mrN0k7yv3r>) | [PDF](<https://openreview.net/pdf?id=mrN0k7yv3r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149848>)

We study signal propagation at initialization in transformers through the averaged partial Jacobian norm \(APJN\), a measure of gradient amplification across layers\. We extend APJN analysis to transformers with bidirectional attention and permutation\-symmetric input token configurations by deriving recurrence relations for activation statistics and APJNs across layers\. Our theory predicts how attention modifies the asymptotic behavior of the APJN at large depth and matches APJNs measured in deep vision transformers\. The criticality picture known from residual networks carries over to transformers: the pre\-LayerNorm architecture exhibits power\-law APJN growth, whereas transformers with LayerNorm replaced by elementwise tanh\-like nonlinearities have stretched\-exponential APJN growth, indicating that the latter are subcritical\. Applied to Dynamic Tanh \(DyT\) and Dynamic erf \(Derf\) transformers, the theory explains why these architectures can be more sensitive to initialization and optimization choices and require careful tuning for stable training\.

## SpecForge:  Agent\-Oriented Code Documentation Optimization via Multi\-Frontier Tree Search

**Authors:** YUTONG CHENG; Haifeng Chen; Peng Gao; Wei Cheng

**ID:** 148372 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yMLqe1DovZ>) | [PDF](<https://openreview.net/pdf?id=yMLqe1DovZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148372>)

As language models become autonomous software agents, documentation shifts from explanatory prose to a natural\-language behavioral specification for code generation\. We study agent\-oriented documentation generation, where the objective is not readability but the correctness of code synthesized from documentation alone, turning the task into a black\-box search over natural\-language specifications evaluated only through the generated code and its execution behavior\. Its defining difficulty is output coupling: program entities are behaviorally entangled, so a revision that sharpens the specification of one entity may simultaneously destabilize its dependents, inducing the familiar whack\-a\-mole failure mode in iterative refinement\. We introduce SpecForge, a multi\-frontier tree search solution that preserves complementary search frontiers through Pareto state management to avoid premature commitment and escape certain frontier\-local optima, performs dependency\-constrained bandit selection for callee\-before\-caller refinement, and uses diversified error\-conditioned expansion to remain robust to noisy test feedback\. On DevEval\+, SpecForge attains the best performance across five backbone models, including a 94\.9% solve rate with Claude\-4\.5\-Sonnet and a 25\.7% average improvement over the leading baseline\. We further demonstrate that the resulting specifications improve downstream performance on both cross\-language code translation and new\-feature implementation\.

## In\-Expectation Convergence of Stochastic Gradient Methods under Heavy\-Tailed Noise

**Authors:** Zijian Liu

**ID:** 151715\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151715

[Paper](<https://openreview.net/forum?id=Ybxgq6TUcv>) | [PDF](<https://openreview.net/pdf?id=Ybxgq6TUcv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151715>)

_Abstract unavailable from the accessible public sources._

## DrPO: Drifting Preference Optimization for One\-Step Generative Models

**Authors:** Zhou Jiang; Yandong Wen; Zhen Liu

**ID:** 151942\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151942

[Paper](<https://openreview.net/forum?id=WfyzQahi56>) | [PDF](<https://openreview.net/pdf?id=WfyzQahi56>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151942>)

_Abstract unavailable from the accessible public sources._

## AETDICE: Unified Framework and Offline Optimization for Nonlinear Multi\-Objective RL

**Authors:** Woosung Kim; Youngjun Suh; Jinho Lee; Jongmin Lee; Byung\-Jun Lee

**ID:** 150928\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150928

[Paper](<https://openreview.net/forum?id=eIYJqaER5g>) | [PDF](<https://openreview.net/pdf?id=eIYJqaER5g>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150928>)

_Abstract unavailable from the accessible public sources._

## B$^3$\-PWL: GPU\-Batched Branch\-and\-Bound for Piecewise\-Linear Optimization with SOS2 Constraints

**Authors:** Yilin Guan; Shuqing Luo; Pingzhi Li; Tianlong Chen; Kaidi Xu

**ID:** 150051\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150051

[Paper](<https://openreview.net/forum?id=l7awisNMWs>) | [PDF](<https://openreview.net/pdf?id=l7awisNMWs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150051>)

_Abstract unavailable from the accessible public sources._

## Beyond Outcome: Trajectory\-Driven Prompt Optimization via Multi\-Dimensional Rewards

**Authors:** Zhixiang Liang; Yixiang Huang; CHENJING CAI; Hao Wu; Peihang Liu; Qi Liu; Qiqi Zhong; Jiuchong Gao; Jinghua Hao; Renqing He

**ID:** 150285\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150285

[Paper](<https://openreview.net/forum?id=jJXfMK7Ifb>) | [PDF](<https://openreview.net/pdf?id=jJXfMK7Ifb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150285>)

_Abstract unavailable from the accessible public sources._

## Stochastic Zeroth\-Order Optimization Under Heavy\-Tailed Noise

**Authors:** Taha EL BAKKALI EL KADI; El Mahdi Chayti; Qiuyi \(Richard\) Zhang; Imane Rahali; Omar Saadi

**ID:** 153577\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153577

[Paper](<https://openreview.net/forum?id=KNeGuHB7Md>) | [PDF](<https://openreview.net/pdf?id=KNeGuHB7Md>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153577>)

_Abstract unavailable from the accessible public sources._

## How Much Information is Needed for Accurate Kalman Filtering?

**Authors:** Wenhan Cao; Xuyang Chen; Shuyuan Wang; Lin Zhao

**ID:** 155363 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6AvVndMx4T>) | [PDF](<https://openreview.net/pdf?id=6AvVndMx4T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155363>)

Kalman filtering provides a principled inference framework for linear Gaussian hidden Markov models, but it leaves open a complementary question of representation: what is the minimum amount of information about the observation history that must be retained to support accurate filtering? We show that this question leads naturally to an indirect rate\-distortion problem, in which an encoder observes the history of noisy measurements while distortion is evaluated with respect to the latent state\. Directly solving this problem is challenging, since the optimization ranges over arbitrary stochastic kernels from a time\-varying observation history to an output representation, resulting in an infinite\-dimensional formulation\. We overcome this difficulty by proving that any feasible encoder can be replaced by a stochastic encoder acting only on the Kalman posterior mean, achieving the same mean\-square error with no larger mutual information\. The reduced problem admits a closed\-form solution in the form of a linear Gaussian blurring mechanism determined by the spectral decomposition of the Riccati solution\. This yields an explicit expression for the rate distortion function $R\_t\(\\epsilon\)$, showing that any representation with distortion at most $\\epsilon$ must retain at least $R\_t\(\\epsilon\)$ nats of information\. We further use this characterization to derive information\-theoretic lower bounds on the population risk of sequential learning and on the prediction error of temporal GP\. Numerical experiments corroborate the theoretical predictions\.

## PortPy: A Benchmark for AI and Optimization in Cancer Radiotherapy Planning

**Authors:** Gourav Jhanwar; Mojtaba Tefagh; Qijie Huang; Alireza Golkarieh; Linda Hong; Hai Pham; Vicki T Taasti; Seppo Tuomaala; Anthony Magliari; Michael Folkerts; Ying Zhou; Jie Yang; Saad Nadeem; Masoud Zarepisheh

**ID:** 139004 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rZoz5VsSaP>) | [PDF](<https://openreview.net/pdf?id=rZoz5VsSaP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139004>)

External beam radiotherapy is a cornerstone of cancer treatment, used in more than half of all cancer patients\. It delivers high\-energy radiation beams to destroy tumors while minimizing radiation dose to surrounding healthy tissues\. Treatment planning requires optimizing machine parameters, including the shapes and intensities of radiation beams, based on each patient’s unique anatomy\. This gives rise to large\-scale, multi\-criteria, and often combinatorial optimization problems that must be solved separately for each patient under strict clinical time constraints\. Although recent advances in AI/ML show promise for improving many planning and decision\-making tasks, progress in this area has been limited by the lack of standardized, publicly available benchmark datasets and baseline algorithms\. To address this gap, we introduce PortPy \(Planning and Optimization for Radiation Therapy in Python\), an open\-source benchmark dataset derived from real patient data, together with baseline algorithms and a Python\-based framework for data processing, simulation, and standardized evaluation\. Several of the provided baseline methods have been clinically validated and deployed at our institution to support automated radiotherapy planning for cancer patients\. By providing a common benchmark and open research platform, PortPy aims to accelerate progress in radiotherapy treatment planning and promote collaboration across the AI/ML, mathematical optimization, medical physics, and radiation oncology communities\. Toolkit: https://github\.com/PortPy\-Project/PortPy Dataset: https://huggingface\.co/datasets/PortPy\-Project/PortPy\_Dataset

## Nerve\-Skeleton Message Passing for Federated Optimization with Overlapping Parameters

**Authors:** Wei Zhang

**ID:** 149655\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149655

[Paper](<https://openreview.net/forum?id=oSVZ8C084r>) | [PDF](<https://openreview.net/pdf?id=oSVZ8C084r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149655>)

Existing federated learning setups assume either a single global model or a fixed decomposition with one globally shared parameter block and one client\-specific private block\. In this paper, we study a generalized federated optimization setting where each client optimizes a local coordinate block, and two clients interact only when their blocks overlap\. We encode these coordinate overlaps by a graph on clients, called the nerve skeleton\. Based on this structure, we propose Nerve\-Skeleton Message Passing \(NSMP\), a two\-phase protocol on a spanning tree: a leaf\-to\-root pass composes reduced objectives by partial minimization, and a root\-to\-leaf pass reconstructs a joint assignment\. We further show that, under the tree\-elimination schedule in the paper, NSMP is equivalent to minimizing the joint objective, where the leaf\-to\-root phase evaluates the optimal objective value, and the root\-to\-leaf phase recovers a globally optimal assignment\. Experiments show that NSMP solves federated optimization with overlapping parameters using only efficient neighbor\-to\-neighbor message passing\.

## A Grid Efficient Transport Optimization Model for the Wasserstein Barycenter Problem

**Authors:** Gennaro Auricchio; Massimiliano Ghiotto; Stefano Gualandi

**ID:** 153536\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153536

[Paper](<https://openreview.net/forum?id=KcRsOQnPQQ>) | [PDF](<https://openreview.net/pdf?id=KcRsOQnPQQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153536>)

We propose the Grid Efficient Transport Optimization Linear Programming \(GETO\-LP\) model, a novel formulation of the Fixed\-Support Wasserstein barycenter problem for $M$ probability distributions supported on $d$\-dimensional grids\. While standard LP models require $O\(MN^2\)$ variables, the GETO\-LP model requires only $O\(dMN^\{1\+\\frac\{1\}\{d\}\}\)$, with $N$ being the total number of points in the grid support\. Despite the reduced number of variables, our formulation is \\emph\{exact\}, meaning that its solution fully characterizes both the barycenter $\\nu$ and the optimal transport plans between $\\nu$ and each of the $M$ input distributions without additional optimization steps\. We validate the GETO\-LP model via extensive comparisons with classical and entropic regularization solvers, demonstrating its effectiveness on both synthetic data and real\-world applications such as color palette manipulation and medical data averaging\. Overall, our approach provides an effective formulation for the Wasserstein barycenter problem, offering a memory\-efficient alternative that naturally integrates with other existing computational frameworks\.

## Skill\-Coupled Policy Optimization with Calibrated Group\-Wise Advantage Estimation

**Authors:** Peng Wang; Zhendong Chu; Chengshuai Shi; Matthias Poloczek; Cong Shen; Jing Yang

**ID:** 149473\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149473

[Paper](<https://openreview.net/forum?id=pqt0gteKQs>) | [PDF](<https://openreview.net/pdf?id=pqt0gteKQs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149473>)

Reinforcement learning with verifiable rewards \(RLVR\) has become a standard paradigm for post\-training large language models on reasoning tasks\. To avoid the complexity of training explicit critics, algorithms like GRPO estimate advantages directly from sparse on\-policy rollouts\. However, the efficacy of this approach relies heavily on the accuracy of the baseline estimator\. In this work, we argue that standard methods, whether relying on prompt\-local averages or shrinking toward a single global mean, are statistically mis\-specified for reasoning domains\. By enforcing a uniform prior, these methods ignore the latent skill structure of tasks, introducing estimation bias that conflates dissimilar problems\. To address this, we propose Skill\-Coupled Policy Optimization \(SCPO\), a structured baseline estimation framework that refines the shrinkage prior by leveraging task correlations\. Instead of a generic global target, SCPO performs shrinkage toward skill\-coupled group targets, thereby aligning the baseline with the local difficulty landscape\. To further stabilize these targets under limited on\-policy observations, SCPO incorporates a lightweight history tracker\. Experiments across diverse models and tasks show that SCPO consistently improves training stability and performance over both prompt\-level and global shrinkage baselines\.

## Certified Single\-Level Reformulation for Tri\-Level Cyber\-Physical Grid Security

**Authors:** Debraj Banerjee; Gurunath Gurrala; Kunal Narayan Chaudhury

**ID:** 152235\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152235

[Paper](<https://openreview.net/forum?id=UZCoLnaUiy>) | [PDF](<https://openreview.net/pdf?id=UZCoLnaUiy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152235>)

Modern power grids are increasingly exposed to coordinated cyber\-physical disruptions, where the outage of a small number of transmission components can trigger severe post\-contingency load shedding\. Designing proactive \_security defense\_ against such adversarial contingencies is naturally modeled as a tri\-level Defender\-Attacker\-Operator \(DAO\) problem: the defender allocates limited hardening resources, the attacker selects worst\-case line outages, and the operator solves a post\-attack DC/AC\-optimal power flow \(OPF\)\. However, the resulting tri\-level program is computationally prohibitive even for moderate network sizes\.  We develop a certified four\-step reformulation pipeline that converts this intractable tri\-level DAO problem into a tractable single\-level optimization, yielding a Single\-Level Mixed\-Integer Linear Program \(SL\-MILP\) under DC\-OPF and a Single\-Level Mixed\-Integer Conic Program \(SL\-MICP\) under AC\-OPF\. The construction combines exact dualization, exact Big\-$M$ linearization, and a single controlled attacker relaxation\. We prove that the resulting single\-level optimum provides a conservative upper bound on the true worst\-case load shedding and, more importantly, yields a robustness certificate for the deployed defense: no feasible binary attack can induce damage exceeding the reported single\-level value\. Extensive experiments on IEEE benchmark systems demonstrate substantial runtime improvements while maintaining strong worst\-case security guarantees\.

## Match the Geometry, Skip the Surrogate: Extreme Low\-Budget Optimization in High Dimensions

**Authors:** Michal Prusek; Adam Novozámský; Filip Sroubek

**ID:** 155876\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155876

[Paper](<https://openreview.net/forum?id=2BB0oOmLs4>) | [PDF](<https://openreview.net/pdf?id=2BB0oOmLs4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155876>)

Low\-budget molecular optimization is often framed as Bayesian optimization in a learned latent space, but standard benchmarks typically allow hundreds or thousands of evaluations, whereas a realistic wet\-lab round may allow only a few dozen\. We revisit this regime using a SELFIES molecular variational autoencoder and GuacaMol objectives at $N=30$ oracle calls\. The main finding is not a new surrogate model, but a geometric mismatch in candidate generation\. The training latents of the VAE concentrate near a narrow spherical shell, while many high\-dimensional optimizers propose candidates from boxes or box\-shaped trust regions\. Such candidates can leave the decoder's training distribution even when their coordinates look individually plausible\. We study a simple geometric constraint, the on\-sphere scaffold, that restricts candidate generation to the empirical shell occupied by the VAE training latents\. Uniform random search on this shell already outperforms most of the classical box\-supported Bayesian optimization baselines\. We then introduce two minimal optimizers to probe what remains useful once the support is fixed\. GeoWalk performs geodesic local search on the empirical sphere and outperforms every published Bayesian optimization baseline tested\. GeoCMA keeps the scaffold but adds covariance learning in a random subspace, becoming preferable when the search representation contains learnable directional or semantic structure, as in LassoBench, NAS\-Bench\-101 graph\-VAE optimization, and GSM8K text\-latent prompt optimization\. A controlled ablation of three recent Gaussian\-process recipes, changing only whether candidates are proposed on the empirical sphere or on the published box\-supported domain, shows that the scaffold rather than the surrogate is the load\-bearing component\. The practical lesson is simple: first match the empirical search support; add a surrogate or covariance learner only when the remaining search space contains directional structure that can be learned from the available budget\.

## H\-GenPO: Hierarchical Generative Policy Optimization via the Option\-Critic Framework

**Authors:** Wonhyeok Choi; Minwoo Choi; Jaeyeul Kim; Kyumin Hwang; Jongmin Gim; Sunghoon Im

**ID:** 148440\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148440

[Paper](<https://openreview.net/forum?id=xmAWFBUpId>) | [PDF](<https://openreview.net/pdf?id=xmAWFBUpId>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148440>)

Diffusion\-based policies have demonstrated remarkable performance in online reinforcement learning \(RL\) by virtue of their expressive, multimodal action distributions\. However, existing methods operate on a flat architecture that must generate a new action at every timestep, with no mechanism for temporal commitment to a behavioral mode—making them ill\-suited for context\-dependent tasks that require sustaining coherent behavioral modes, regardless of how expressive their action distributions are\. We propose Hierarchical Generative Policy Optimization \(H\-GenPO\), the first framework to integrate on\-policy diffusion\-based RL with the temporal abstraction of the Option\-Critic architecture\. H\-GenPO adopts a two\-level hierarchy in which a high\-level policy over options selects among a discrete set of options, while a unified flow matching model—conditioned on a learned option embedding—serves as the expressive low\-level intra\-option primitive\. The shared intra\-option policy design encapsulates diverse behavioral repertoires within a single set of parameters, enabling scalable hierarchical control without the parameter growth associated with maintaining separate policy networks per option\. We evaluate H\-GenPO on 8 standard continuous control tasks in Isaac Lab and 3 custom context\-dependent tasks designed to require coordinated behavioral mode switching\. Our empirical evaluation demonstrates that H\-GenPO achieves the best mean rank among all baselines on both standard and context\-dependent benchmarks, while also exhibiting interpretable option specialization that emerges without any option\-level supervision\.

## SMILE: Bridging Continuous Optimization and Discrete Symbolic Recovery

**Authors:** Mansooreh Montazerin; Antonio Ortega; Ajitesh Srivastava

**ID:** 152682\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152682

[Paper](<https://openreview.net/forum?id=RCI7AIVyKg>) | [PDF](<https://openreview.net/pdf?id=RCI7AIVyKg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152682>)

Symbolic regression \(SR\) discovers closed\-form mathematical expressions from data, offering interpretability beyond black\-box models\. Existing methods suffer from slow convergence in combinatorial search spaces and lack mechanisms to exploit compositional structure in the data\. We introduce SMILE \(Sine, Multiplication, Identity, Logarithm, Exponential\), a hybrid framework that unifies continuous gradient\-based optimization with discrete symbolic recovery through three stages: structural analysis of the data to identify the compositional hierarchy of the target expression, continuous optimization to learn parameters of a network that encodes the target expression using interpretable activations, and symbolic recovery through structured pruning, coefficient optimization, and rounding\. This final stage distills the learned network into a compact expression with exact symbolic constants\. We evaluate SMILE on SRBench across ground\-truth and black\-box datasets, with ablation studies validating each component\. SMILE achieves the highest symbolic solution rate at the largest noise levels, demonstrating strong robustness where competing methods degrade substantially\. It consistently lies on the Pareto front of accuracy versus complexity, recovering significantly simpler expressions in a fraction of the time required by the competing methods\.

## Echoes in Filter Bubble: Diagnosing and Curing Popularity Bias in Generative Recommender Systems

**Authors:** Jun YIN; Bangguo Zhu; Peng Huo; Ruochen Liu; Hao Chen; Senzhang Wang; Shirui Pan; Chengqi Zhang

**ID:** 148459\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148459

[Paper](<https://openreview.net/forum?id=xfHw2Qn1GR>) | [PDF](<https://openreview.net/pdf?id=xfHw2Qn1GR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148459>)

Recently, Generative Recommenders \(GRs\), characterized by a unified end\-to\-end framework, have exhibited astonishing potential in transforming the recommendation paradigm\. Despite their effectiveness, we recognize that GRs are still susceptible to the long\-standing issue of popularity bias that has pervaded the recommendation community\. Although a few studies have attempted to extend traditional debiasing methods to GRs, their effectiveness is marginal, and the fundamental reason why GRs suffer from popularity bias remains under\-explored\. To bridge this gap, this study focuses on two core aspects in GRs: the optimization of generative framework and the item tokenization based on semantic index\. Based on theoretical analyses, we identify that the severe popularity bias emerges from the confluence of a token\-level optimization flaw and the undifferentiated property of item tokenization\. Accordingly, this study develops a novel generative recommender system, called Ghost, by designing the asymmetric unlikelihood optimization and the skeleton\-founded tokenization\. Extensive empirical evaluations across three datasets, alongside multiple SOTA baselines, reveal that Ghost substantially alleviates popularity bias and promotes fairer recommendations, while incurring slight degradation to the overall recommendation utility\.

## AgentKernelArena: Benchmarking Performance and Generalization of AI Coding Agents on GPU Kernels Optimization

**Authors:** Sharareh Younesian; Wenwen Ouyang; sina rafati; Mehdi Rezagholizadeh; Sharon Zhou; Ji Liu; Yue Liu; Yuchen Yang; Hao Li; Ziqiong Liu; Dong Li; Vikram Appia; Zhenyu Gu; Emad Barsoum

**ID:** 139376\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139376

[Paper](<https://openreview.net/forum?id=Twe3Jz6Q0V>) | [PDF](<https://openreview.net/pdf?id=Twe3Jz6Q0V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139376>)

_Abstract unavailable from the accessible public sources._

## Expected Batch Optimal Transport Plans and Consequences for Flow Matching

**Authors:** Samuel Boïté; Julie Delon; Kimia Nadjahi

**ID:** 154399\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154399

[Paper](<https://openreview.net/forum?id=Drh2loVsgL>) | [PDF](<https://openreview.net/pdf?id=Drh2loVsgL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154399>)

Solving optimal transport \(OT\) on random minibatches is a common surrogate for exact OT in large\-scale learning\. In flow matching \(FM\), this surrogate is used to obtain OT\-like couplings that can straighten probability paths and reduce numerical integration cost\. Yet, the population\-level coupling induced by repeated minibatch OT remains only partially understood\. We formalize this coupling as the expected batch OT plan $\\overline\{\\pi\}\\\_\{k\}$, obtained by averaging empirical OT plans over independent minibatches of size $k$\. We then establish its large\-batch consistency and, in the semidiscrete case relevant to generative modeling, derive rates for both the transport\-cost bias and the convergence of $\\overline\{\\pi\}\\\_\{k\}$ to the OT plan\. For FM, this yields a population coupling whose induced velocity field is regular enough to define a unique flow from the source to the discrete target\. We finally quantify how OT batch size interacts with numerical integration in a tractable two\-atom model and in synthetic and image experiments\.

## Pairwise AUC Optimization Needs Corrective Power: A Unified View

**Authors:** Jia Chen; Zhiyong Yang; Shilong Bao; Qianqian Xu; Qingming Huang

**ID:** 153472 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L6W1wRGBCh>) | [PDF](<https://openreview.net/pdf?id=L6W1wRGBCh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153472>)

Direct pairwise AUC\-surrogate training is attractive because it trains toward the ranking metric used at test time, especially under class imbalance\. This creates a direct alignment between the training objective and the evaluation metric, but such metric alignment alone does not guarantee that stochastic training remains corrective\. We study this gap through Corrective Power: whether pairwise mini\-batch updates produce stronger and more reliable improvements for more severe positive\-negative ranking errors\. Our main observation is that direct pairwise training can enter regions where severe errors remain common but no longer produce useful corrective motion\. In such regions, even the mini\-batch noise that would normally help SGD move along the steepest severe\-error correction direction can become much weaker\.  In this paper, we seek a theoretical explanation for this by exploring the degenerate property of the U\-statistics formed from the pairwise gradients therein\. Our results provide a mechanistic explanation for several empirical patterns: \(a\) squared\-hinge loss is often an effective AUC surrogate; \(b\) cross\-entropy warm\-up can help models that enter the AUC phase from a poor starting region; and \(c\) parameter\-efficient fine\-tuning from a pretrained model can reduce that need by starting closer to a favorable ranking geometry\. Experiments on 8 CV tasks and 8 NLP tasks, using ResNet50, DenseNet121, DistilBERT\-base, and Qwen2\.5\-1\.5B\-Instruct, support these predictions\.

## An Educated Guess: Deriving Statistically Aligned Gradient Estimates for Zeroth\-Order Optimization

**Authors:** Justus F Hübotter; Serge Thill; Marcel A\. J\. van Gerven; Nasir Ahmad

**ID:** 150140 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kMdijHwnR7>) | [PDF](<https://openreview.net/pdf?id=kMdijHwnR7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150140>)

As novel hardware architectures are explored for the purposes of machine learning, including neuromorphic chips, asynchronous systems, and ASICs, effective learning algorithms are highly desirable\. While backpropagation is the standard for differentiation on standard hardware, its requirement for global synchrony and exact differentiability limits the exploration of exotic algorithms on non\-traditional substrates and devices\. Zeroth\-order \(ZO\) optimization methods, such as SPSA and weight perturbation, offer a compelling alternative by estimating gradients through inference\-only passes; however, these methods have historically suffered due to the "curse of dimensionality," where random perturbations become increasingly misaligned with the true gradient in high\-dimensional spaces\. In this work, we move beyond blind random noise by deriving zeroth\-order search directions from activation geometry available during the forward pass\. This leads to a family of Spectral Zeroth\-Order methods, SZO\-$\\kappa$, whose directions solve local response\-based gradient\-guessing objectives under explicit stochastic assumptions\. These methods spend perturbation budget on feature\-supported directions that are more likely to produce informative loss responses\. To further bridge the gap with first\-order methods, we study covariance corrections and probe stabilizers, including search direction orthogonalization and bias corrections that reduce estimator error\. Using multilayer and convolutional layers and networks, we analyze gradient alignment, bias\-variance structure, and training stability of these methods relative to standard perturbation baselines and backpropagation\.

## The Hidden Power of Scaling Factor in LoRA Optimization

**Authors:** Zicheng Zhang; Haoran Li; Jiaxing Wang; Guoqiang Gong; Anqi Li; Yudong Hu; Ting Xiong; Yurong Gao; Junxing Hu; Zhida Jiang; Yifeng Zhang; Pengzhang Liu; Qixia Jiang

**ID:** 153734\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153734

[Paper](<https://openreview.net/forum?id=J9AbM86AH7>) | [PDF](<https://openreview.net/pdf?id=J9AbM86AH7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153734>)

_Abstract unavailable from the accessible public sources._

## Positive\-Unlabeled Preference Optimization For Chest X\-ray Report Generation

**Authors:** Yuta Kobayashi; Pradyun Ramesh; Muhammad Ahmed Chaudhry; Vincent Jeanselme; Judy Wawira; Sanmi Koyejo; Kathleen M Capaccione; Shalmali Joshi

**ID:** 154826\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154826

[Paper](<https://openreview.net/forum?id=Aecnz8LJjt>) | [PDF](<https://openreview.net/pdf?id=Aecnz8LJjt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154826>)

_Abstract unavailable from the accessible public sources._

## Unveiling Memorization–Generalization Coexistence: A Case Study on Arithmetic Tasks with Label Noise

**Authors:** Linyu Liu; Pinyan Lu

**ID:** 148534\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148534

[Paper](<https://openreview.net/forum?id=xBZ9SuztWE>) | [PDF](<https://openreview.net/pdf?id=xBZ9SuztWE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148534>)

Highly over\-parameterized models can simultaneously memorize noisy labels and generalize well, yet how these behaviors coexist remains Highly over\-parameterized models can simultaneously memorize noisy labels and generalize well, yet how these behaviors coexist remains poorly understood\. In this work, we investigate the underlying mechanisms of this coexistence using modular arithmetic tasks under heavy label noise\. Through extensive experiments on two\-layer neural networks, we find that larger models tend to generalize better under appropriate optimization and model configurations, while noisy labels are memorized faster than clean data\. Over\-parameterized models internally form a generalization structure, but its expression in the output is suppressed by the need to fit noisy labels\. Remarkably, even with 80\\% label noise, near\-perfect test accuracy can be achieved by extracting this internal structure using frequency\-based methods\. We further propose a task\-agnostic method to partition networks into generalization and memorization components\. Although this subnetwork improves generalization, it is limited compared with frequency\-based extraction, indicating that the generalization structure is distributed across neurons and motivating the development of new tools to retrieve generalizable knowledge from over\-parameterized networks\.

## Expected Batch Optimal Transport Plans and Consequences for Flow Matching

**Authors:** Samuel Boïté; Julie Delon; Kimia Nadjahi

**ID:** 154399\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154399

[Paper](<https://openreview.net/forum?id=Drh2loVsgL>) | [PDF](<https://openreview.net/pdf?id=Drh2loVsgL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154399>)

Solving optimal transport \(OT\) on random minibatches is a common surrogate for exact OT in large\-scale learning\. In flow matching \(FM\), this surrogate is used to obtain OT\-like couplings that can straighten probability paths and reduce numerical integration cost\. Yet, the population\-level coupling induced by repeated minibatch OT remains only partially understood\. We formalize this coupling as the expected batch OT plan $\\overline\{\\pi\}\\\_\{k\}$, obtained by averaging empirical OT plans over independent minibatches of size $k$\. We then establish its large\-batch consistency and, in the semidiscrete case relevant to generative modeling, derive rates for both the transport\-cost bias and the convergence of $\\overline\{\\pi\}\\\_\{k\}$ to the OT plan\. For FM, this yields a population coupling whose induced velocity field is regular enough to define a unique flow from the source to the discrete target\. We finally quantify how OT batch size interacts with numerical integration in a tractable two\-atom model and in synthetic and image experiments\.

## Solving Max\-Cut to Global Optimality via Feasibility\-Preserving Graph Neural Networks

**Authors:** Hao Chen; Chendi Qian; Christopher Morris; Andrea Lodi; Can Li

**ID:** 154770\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154770

[Paper](<https://openreview.net/forum?id=B5QAybMEKM>) | [PDF](<https://openreview.net/pdf?id=B5QAybMEKM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154770>)

_Abstract unavailable from the accessible public sources._

## Evolution Fine\-Tuning: Learning to Discover Across 371 Optimization Tasks

**Authors:** Young\-Jun Lee; Seungone Kim; Minki Kang; Alistair Liang Chuen Cheong; Zerui Chen; Seungho Han; Taehee Jung; Dongyeop Kang

**ID:** 148564\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148564

[Paper](<https://openreview.net/forum?id=www9RVeEpg>) | [PDF](<https://openreview.net/pdf?id=www9RVeEpg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148564>)

_Abstract unavailable from the accessible public sources._

## Simplicity is Enough: ReAct Agents for Prompt Optimization

**Authors:** Andrei C\. Rusu; Andrei Dumitrescu; Adrian Catalin Badea; Cosmin Maria; Ion\-Marian Anghelina; Bai Li; Tomasz L Religa; Dragos H Bobolea

**ID:** 150401 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iJGXuLyRh7>) | [PDF](<https://openreview.net/pdf?id=iJGXuLyRh7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150401>)

Prompt optimization has recently been approached with increasingly specialized search procedures and evolutionary frameworks\. In this work, we ask whether such complexity is necessary to achieve competitive performance\. We introduce REAPO \(ReAct Agents for Prompt Optimization\), a lightweight framework that casts prompt optimization as an agentic process built around a ReAct loop augmented with evaluation and reflection tools\. Rather than relying on bespoke optimization machinery, REAPO iteratively refines prompts through error analysis, reflective reasoning, and validation against the optimization objective\. We evaluate REAPO on several established benchmarks spanning multi\-hop question answering, mathematical reasoning, fact verification, instruction following, and structured classification, as well as on real enterprise agentic tasks\. Across these settings, we find that this agentic optimizer can match or outperform specialized prompt tuning methods while requiring 2–7$\\times$ fewer evaluation rollouts and less auxiliary optimization logic\. We also report confidence intervals over multiple independent runs and show that single\-run evaluations on small benchmarks can give a misleading picture of relative performance, since LLM variance may obscure true gains\. Taken together, our results suggest that effective prompt optimization need not depend on increasingly elaborate optimization schemes, and that agentic methods can provide a more efficient alternative\.

## Amortized Vine Copulas for High\-Dimensional Density and Information Estimation

**Authors:** Houman Safaai

**ID:** 150646 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gVrwhk9HGC>) | [PDF](<https://openreview.net/pdf?id=gVrwhk9HGC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150646>)

Modeling high\-dimensional dependencies while keeping likelihoods tractable remains challenging\. Classical vine\-copula pipelines are interpretable but can be expensive, while many neural estimators are flexible but less structured\. In this work, we propose Vine Denoising Copula \(VDC\), an amortized vine\-copula pipeline for continuous\-data, simplified\-vine dependence modeling\. VDC trains a single bivariate denoising model and reuses it across all vine edges\. For each edge, given pseudo\-observations, the model predicts a piecewise\-constant density grid\. We then apply an IPFP/Sinkhorn projection that normalizes mass and drives the marginals to uniformity\. This preserves the tractable vine\-likelihood structure and the usual copula interpretation while replacing repeated per\-edge optimization with GPU inference\. Across synthetic and real\-data benchmarks, VDC delivers strong bivariate density accuracy, competitive MI/TC estimation, and faster high\-dimensional vine fitting\. These gains make explicit information estimation and dependence decomposition feasible when repeated vine fitting would otherwise be costly, while conditional downstream tasks remain a limitation\.

## Information\-Theoretic Generalization for Set\-Input Optimization\-Valued Objectives

**Authors:** Futoshi Futami; Masahiro Fujisawa

**ID:** 153827 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IR2PNGshps>) | [PDF](<https://openreview.net/pdf?id=IR2PNGshps>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153827>)

Many modern learning criteria, such as multicalibration, CVaR, and distributionally robust objectives, are set\-input and optimization\-valued: their empirical values depend on the whole evaluation batch and on an auxiliary optimizer selected after observing that batch\.  This optimization mismatch falls outside the standard information\-theoretic generalization analysis for averages of fixed per\-example losses\. We provide a unified supersample\-based analysis for this class of objectives\.  Under a selector\-gap concentration condition, we show that the optimized validation\-\-training gap is controlled by the conditional mutual information between the learned supersample predictions and the selector, without an explicit complexity penalty for the auxiliary optimizer class\.  We verify the concentration condition through stability and convex L\_2\-Lipschitz certificates, obtaining concrete bounds for multicalibration, CVaR, and Cressie\-\-Read DRO, including a single\-index refinement under stability\.

