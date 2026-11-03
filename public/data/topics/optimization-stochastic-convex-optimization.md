# Optimization / Stochastic &amp; Convex Optimization

优化 / 随机与凸优化

71 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Hessian\-Dependent Sample Complexity in Zeroth\-Order Stochastic Optimization: Suboptimality of Convex\-Support Sampling and Optimal Sample Complexity

**Authors:** Mengtian Hong; Jason Lee; Qian Yu

**ID:** 153326 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M9Iy6jM9oZ>) | [PDF](<https://openreview.net/pdf?id=M9Iy6jM9oZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153326>)

Zeroth\-order stochastic optimization is a fundamental formulation that arises in real\-world design problems where gradients are inaccessible\. A central challenge in this pursuit is to design gradient estimators and optimization algorithms under noisy, function\-only feedback that exploit local Hessian geometry to achieve optimal sample efficiency\. We introduce the Spectrally Grouped Estimator \(SGE\), a novel gradient estimator that samples over a non\-convex union of sphere sections, and utilize it to build an algorithm that achieves order\-wise improved Hessian\-dependent simple regrets over second\-order smooth, strongly convex functions compared to conventional convex\-sets sampling baseline methods\. We complement these results with the first tight analyses of the baseline schemes, revealing a shared performance bottleneck and thus emphasizing the necessity of non\-convex sampling for optimality\. We further establish matching converse bounds that tightly characterize the optimal sample complexities within general subclasses of functions sharing the same Hessian at the global minimum, thereby proving the universal optimality of SGE with respect to the Hessian\-dependent rates\. This fully resolves an open conjecture from the preliminary version of this work\. This fully resolves an open conjecture in the preliminary version of this work\.

## Gradient Regularized Newton Boosting Trees with Global Convergence

**Authors:** Nikita Zozoulenko; Daniel Falkowski; Thomas Cass; Lukas Gonon

**ID:** 154992 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9MjVpTTm7u>) | [PDF](<https://openreview.net/pdf?id=9MjVpTTm7u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154992>)

Gradient Boosting Decision Trees \(GBDTs\) dominate tabular machine learning, with modern implementations like XGBoost, LightGBM, and CatBoost being based on Newton boosting: a second\-order descent step in the space of decision trees\. Despite its empirical success, the global convergence of Newton boosting is poorly understood compared to first\-order boosting\. In this paper, we introduce Restricted Newton Descent, a framework for convex optimization with Newton's method on Hilbert spaces with inexact iterates, based on the concepts of cosine angle and weak gradient edge\.  Within this framework, we recover Newton boosting with GBDTs and classical finite\-dimensional theory as special cases\. We first prove that vanilla Newton boosting achieves a linear rate of convergence for smooth, strongly convex losses that satisfy a Hessian\-dominance condition\. To handle general convex losses with Lipschitz Hessians, we extend a recent gradient regularized Newton scheme to the restricted weak learner setting, establishing the first global $\\mathcal\{O\}\(\\frac\{1\}\{k^2\}\)$ convergence rate for second\-order GBDTs\. This scheme minimally modifies the classical algorithm by introducing an adaptive $\\ell\_2$\-regularization term proportional to the square root of the gradient norm at each iteration\. In numerical experiments, we show that this scheme converges while vanilla Newton boosting may diverge\.

## Multi\-Constrained Randomized Smoothing Certificates

**Authors:** Jimin Cao; Aleksandar Bojchevski

**ID:** 149199 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sAdaZuWvkE>) | [PDF](<https://openreview.net/pdf?id=sAdaZuWvkE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149199>)

Randomized Smoothing \(RS\) is a principled and widely adopted approach for certifying the robustness of black\-box models, such as neural networks, against adversarial perturbations\. We propose an optimization perspective that unifies several prior randomized smoothing certificates\. We then show how to reduce the underlying high\-dimensional worst\-case optimization problem to an equivalent two\-dimensional formulation under a double\- or multi\-sampling scheme, enabling efficient solutions via convex optimization\. By exploiting additional information about the variance of the smoothed classifier across different smoothing distributions, we derive certified bounds that improve upon standard certificates\. We show results on both classification and regression tasks\.

## Quantum Speedups for Stochastic Optimization with Heavy\-Tailed Noise

**Authors:** Bin Luo; Chengchang Liu; Jonathan Allcock; Shengyu Zhang; John C\. S\. Lui

**ID:** 154210 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FNK56s7wNr>) | [PDF](<https://openreview.net/pdf?id=FNK56s7wNr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154210>)

We study stochastic optimization with heavy\-tailed gradient noise\. We first propose a novel quantum mean estimator for multivariate heavy\-tailed random variables that achieves lower query complexity than optimal classical estimators in the low\-dimensional regime\. We further develop an unbiased quantum mean estimator by applying a generalized multi\-level Monte Carlo technique\. We prove quantum lower bounds showing that, when the dimension $d$ of the random vector is small and can be viewed as a constant, our quantum estimators are optimal up to logarithmic factors; while for the high\-dimensional regime, no quantum speedup is available compared to optimal classical mean estimators\. Based on these estimators, we propose a quantum normalized stochastic gradient descent method \($\\texttt\{QNSGD\}$\), which finds an $\\epsilon$\-stationary point of a nonconvex objective using $\\tilde\{\\mathcal\{O\}\}\\big\(d^\{\\frac\{p\}\{4\(p\-1\)\}\}\\epsilon^\{\-\\frac\{5p\-4\}\{2p\-2\}\}\\big\)$ queries to the stochastic gradient, where $p\\in\(1,2\]$ is the tail index\. For a convex objective function, we propose a quantum projected stochastic gradient descent method \($\\texttt\{QPSGD\}$\), which computes an $\\epsilon$\-optimal solution with query complexity $\\tilde\{\\mathcal\{O\}\}\\big\(d^\{\\frac\{p\}\{4\(p\-1\)\}\}\\epsilon^\{\-\\frac\{3p\-2\}\{2p\-2\}\}\\big\)$\. Our results improve upon the classical lower bounds $\\Omega\\big\(\\epsilon^\{\-\\frac\{3p\-2\}\{p\-1\}\}\\big\)$ for nonconvex problems and $\\Omega\\big\(\\epsilon^\{\-\\frac\{p\}\{p\-1\}\}\\big\)$ for convex problems, demonstrating a quantum speedup when $d$ is relatively small\.

## Multi\-Nonsmooth\-Nonconvex\-Objective Optimization

**Authors:** Ru Wang; Chengchang Liu

**ID:** 151903 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=X4hipg80Qj>) | [PDF](<https://openreview.net/pdf?id=X4hipg80Qj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151903>)

We study stochastic multi\-objective optimization when each objective may be non\-smooth and non\-convex\. We introduce the notion of $\(\\delta,\\epsilon\)$\-Pareto Goldstein stationary points \(PGSP\) to characterize the convergence of solving multi objective optimization\. The $\(\\delta,\\epsilon\)$ generalizes the definition of $\(\\delta,\\epsilon\)$\-Goldstein stationary point for single objective non\-smooth non\-convex optimization and the $\\epsilon$\-Pareto stationary point for solving multi objective optimization with smooth objectives\. We propose the multi\-gradient\-free method \(MGFM\), which finds $\(\\delta,\\epsilon\)$\-PGSP with $\\tilde\{\\mathcal\{O\}\}\(m^2d^\{3/2\}\\delta^\{\-1\}\\epsilon^\{\-4\}\)$ oracle complexity to the stochastic function values, where $m$ is the number of objectives and $d$ is the problem dimension\. We further propose MGFM\+, a faster multi\-gradient\-free method based on variance reduction, which improves the complexity to $\\tilde\{\\mathcal\{O\}\}\(m^2d^\{3/2\}\\delta^\{\-1\}\\epsilon^\{\-3\}\)$\. These provide the first non\-asymptotic analysis for multi\-nonsmooth\-nonconvex\-objective optimization\. \\end\{abstract\}

## Fully First\-Order Algorithms for Online Non\-Convex Bilevel Optimization

**Authors:** Tingkai Jia; Ting Wang; Cheng Chen

**ID:** 149567 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pACG95YX0v>) | [PDF](<https://openreview.net/pdf?id=pACG95YX0v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149567>)

In this work, we study nonconvex–strongly convex online bilevel optimization \(OBO\) using only first\-order oracle\. Existing OBO algorithms are mainly based on hypergradient descent, which requires access to a Hessian\-vector product \(HVP\) oracle and potentially incurs high computational costs\. By reformulating the original OBO problem as a single\-level online problem with inequality constraints and constructing a sequence of Lagrangian function, we eliminate the need for HVPs arising from implicit differentiation\. Specifically, we propose a fully first\-order algorithm for OBO, and provide theoretical guarantees showing that it achieves regret of $O\(1 \+ V\_T \+ H\_\{2,T\}\)$ with a total of $O\(T\\log T\)$ iterations, where $V\_T$ measures the variation in function values and $H\_\{2,T\}$ characterizes the drift variation of the inner\-level optimal solution\. We also establish a sublinear regret bound under the single\-loop structure by introducing additional gradient\-variation terms\. Furthermore, we develop an improved variant with an adaptive inner\-iteration scheme, which removes the dependence on $H\_\{2,T\}$ and achieves regret of $O\(\\log T \+ V\_T\)$\. Finally, under the stochastic OBO setting, we establish the regret bound for the fully first\-order algorithm, i\.e\., $O\(T^\{2/3\}\(1 \+ \\sigma^2\) \+ V\_T \+ H\_\{2,T\}\)$\. Numerical experiments demonstrate the feasibility of our algorithm and support our theoretical findings\.

## Fréchet Regression on the Bures\-Wasserstein Manifold

**Authors:** Duc Toan Nguyen; Cesar Uribe

**ID:** 155894 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=22DNrMNMe0>) | [PDF](<https://openreview.net/pdf?id=22DNrMNMe0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155894>)

Fréchet regression, or conditional barycenters, is a flexible framework for modeling relationships between covariates \(usually Euclidean\) and response variables on general metric spaces, e\.g\., probability distributions or positive definite matrices\. However, in contrast to classical barycenter problems, computing conditional counterparts in many non\-Euclidean spaces remains an open challenge, as they yield non\-convex optimization problems with an affine structure\. In this work, we study the existence and computation of conditional barycenters, specifically in the space of symmetric positive definite \(SPD\) matrices with the Bures\-Wasserstein metric, which connects SPD regression to optimal transport, avoids matrix logarithms, and preserves well\-posedness under signed weights\. We provide a sufficient condition for the existence of a minimizer of the conditional barycenter problem that characterizes the regression range of extrapolation\. Moreover, we further characterize the optimization landscape, proving that under this condition, the objective is free of local maxima\. Additionally, we develop a projection\-free and provably correct algorithm for the approximate computation of first\-order stationary points\. Finally, we provide a stochastic reformulation that enables the use of off\-the\-shelf stochastic Riemannian optimization methods for large\-scale setups\. Numerical experiments validate the performance of the proposed methods on regression problems of real\-world biological networks and on large\-scale synthetic Diffusion Tensor Imaging problems\.

## LensDesigner: A Self\-Improving Agent for Optical Lens Design

**Authors:** Lei Sun; Haoran Liang; Dannong Xu; Yao Gao; Yuyu Geng; Jinjin Gu; Kaiwei Wang; Danda Pani Paudel; Luc V Gool

**ID:** 152681 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RCJQSQ83mu>) | [PDF](<https://openreview.net/pdf?id=RCJQSQ83mu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152681>)

Optical lens design is a complex, non\-convex optimization challenge that relies heavily on human experience and intuition\. Existing optimized\-based automatic lens design methods struggle to navigate this vast parameter space without meticulous manual tuning\. In this paper, we present LensDesigner, an autonomous agent framework that mirrors the problem\-solving workflow of expert opticians\. To overcome the initial cold start problem, we construct LensLib100K, an extensive optical lens library, and employ Optics\-Aware Retrieval to supply physically valid structural seeds\. Within an interactive physical simulation environment, the agent executes macroscopic orchestration while receiving immediate optical feedback\. Furthermore, we introduce a continuous self\-evolving mechanism guided by a curriculum agent\. By iteratively solving design tasks with progressively increasing difficulty, the agent autonomously extracts, accumulates, and reuses design heuristics, effectively evolving its optical lens design expertise over time\. At the evaluation level, we introduce LensArena, a standardized evaluation benchmark comprising 120 diverse optical design tasks, covering extreme configurations\. Extensive experiments on this benchmark demonstrate that LensDesigner significantly outperforms publicly available baseline algorithms, achieving superior success rates and optimization efficiency\. We hope this work sheds light on the emerging field of intelligent optics\. The code will be publicly available\.

## From Non\-Convex to Strongly Convex: Curvature\-Adaptive FTPL for Online Optimization

**Authors:** Moses Charikar; Chirag Pabbaraju; Ambuj Tewari

**ID:** 150800 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fIWVuCJFiG>) | [PDF](<https://openreview.net/pdf?id=fIWVuCJFiG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150800>)

Curvature adaptivity is a classical theme in online optimization: for convex Lipschitz losses, adaptive methods interpolate between the optimal $O\(\\sqrt\{T\}\)$ regret for general convex losses and $O\(\\log T\)$ regret under strong convexity\. Recent work has shown that Follow\-the\-Perturbed\-Leader \(FTPL\) achieves optimal $O\(\\sqrt\{T\}\)$ regret even for online non\-convex Lipschitz losses, assuming access to an approximate offline\-optimization oracle, but these guarantees do not exploit curvature\. We show that FTPL can be made curvature\-adaptive in the non\-convex setting, without knowing in advance how curvature will accumulate over time\. Our algorithm replaces the fixed perturbation scale of standard FTPL with a time\-varying scale chosen using only past information\. We give a simple follow\-the\-leader tuning rule for this scale and show that it competes, up to constants, with the best choice in hindsight\. The resulting method achieves $O\(\\sqrt\{T\}\)$ regret for arbitrary non\-convex Lipschitz losses and improves as cumulative curvature grows; with sufficiently accurate oracle calls, it achieves $O\(\\log T\)$ regret when cumulative curvature grows linearly, which includes the classical strongly convex regime\. We complement these upper bounds with matching lower bounds for prescribed cumulative\-curvature sequences, already for one\-dimensional convex losses, showing that the tradeoff between worst\-case non\-convex regret and curvature\-driven fast rates is intrinsic\.

## AT\-SKM\-Net: An Accelerated Trainable Sampling Kaczmarz\-Motzkin Framework for Linear Hard\-Constraint Feasibility on Dynamic Graphs

**Authors:** Xiaochen Zhang; Haoyu Zhu; Yao Zhang; Qingchun Hou

**ID:** 149152 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sSAcXhJXvH>) | [PDF](<https://openreview.net/pdf?id=sSAcXhJXvH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149152>)

Graph\-structured optimization with linear constraints is fundamental to critical infrastructure but faces scalability limits due to massive strict hard constraints and high dimensionality\. While recent projection\-based methods such as Trainable Sampling Kaczmarz\-Motzkin Net \(T\-SKM\-Net\) guarantee feasibility, they face high computational costs in dynamic environments by processing the entire constraint set and requiring expensive matrix factorizations\. To bridge this gap, we propose the Accelerated Trainable\-SKM \(AT\-SKM\) Net framework\. To concentrate computation on the active constraints and eliminate redundant calculations, we introduce a hybrid sampling strategy guided by a topology\-aware heterogeneous GNN model\. To efficiently handle topological shifts in graph\-based constraints, we employ a Cholesky Update mechanism that theoretically reduces the equality projection complexity from $\\mathcal\{O\}\(N^3\)$ to $\\mathcal\{O\}\(N^2\)$ under low\-rank perturbations\. Experiments on random geometric graphs, N\-1 Security\-Constrained DC\-OPF, and minimum\-cost gas transport problem demonstrate that AT\-SKM reduces iteration counts by up to 85% and achieves 2\.95$\\times$\-7\.29$\\times$ SKM layer speedups, while maintaining zero constraint violations\. Our code is available at \[https://anonymous\.4open\.science/status/Anonymous\_Submission\-CFC7\]\(https://anonymous\.4open\.science/status/Anonymous\_Submission\-CFC7\)

## Stabilizing RL\+Search for Imperfect\-Information Extensive\-Form Games

**Authors:** Yinghao Li

**ID:** 153095 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NzsjoeFQ45>) | [PDF](<https://openreview.net/pdf?id=NzsjoeFQ45>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153095>)

RL\+Search is the computational backbone of modern AI systems for imperfect\-information extensive\-form games\. The Recursive Belief\-based Learning \(ReBeL\) framework already mitigates one source of training fragility by sampling the pivot iteration uniformly from the iteration budget; we identify a second, hitherto unaddressed source: the budget itself is held fixed across all subgames, creating a rigid coupling between solver maturity and outer\-loop learning that propagates variance through the recursive self\-play and produces noisy, seed\-dependent training trajectories\. We propose \\textbf\{Stochastic Horizon Annealing \(SHA\)\}, which randomizes only this remaining static degree of freedom: at each subgame the total CFR iteration count is drawn from a Gaussian centered at the expected budget\. Combined with ReBeL's existing uniform pivot, the procedure smooths the learning objective across a continuum of solving depths and behaves as an implicit ensemble at zero additional cost\. SHA is a one\-line change to any ReBeL\-style trainer\. We give a complete theoretical treatment with three results, all proved in the main text: \(i\) SHA preserves the $O\(N^\{\-1/2\}\)$ convergence rate of linear CFR; \(ii\) the per\-subgame target variance is bounded by $C\_\\beta^2\\sigma^2/\(4N^3\)$, vanishing rapidly with the budget; and \(iii\) the recursive variance of the value\-network targets scales as $\\Theta\(D\)$ for SHA versus $\\Theta\(D^2\)$ for the fixed\-horizon ReBeL, where $D$ is the recursion depth\. On Liar's Dice 1$\\times$4f, 1$\\times$5f, and 1$\\times$6f \(30 seeds each\) at the ReBeL reference setting of depth\-2 subgames and 1024 search iterations, SHA reduces mean final exploitability by 9\-\-18\\% and shrinks the 95\\% confidence interval across seeds by 34\-\-63\\%, with larger games benefiting more as predicted by the theory, establishing stability as a first\-class, theoretically supported contribution for RL\+Search on imperfect\-information games\.

## On the Convergence of Multicalibration Gradient Boosting

**Authors:** Daniel Haimovich; Fridolin Linder; Lorenzo Perini; Niek Tax; Milan Vojnovic

**ID:** 152609 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RqJ9ykENaV>) | [PDF](<https://openreview.net/pdf?id=RqJ9ykENaV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152609>)

Multicalibration gradient boosting has recently emerged as a scalable method that empirically produces approximately multicalibrated predictors and has been deployed at web scale\. Despite this empirical success, its convergence properties are not well understood\. In this paper, we provide computational guarantees for multicalibration gradient boosting algorithms\. We show that the magnitude of successive prediction updates decays at $O\(1/\\sqrt\{T\}\)$, which implies the same convergence rate bound for the empirical multicalibration error over rounds\. Under additional smoothness assumptions on the weak learners, this rate improves to linear convergence\. We further establish convergence for adaptive variants\. Experiments on real\-world datasets support our theory and clarify the regimes in which the method achieves fast convergence\.

## SDS\-LoRA: Overcoming Anisotropic Gradient Scaling in Low\-Rank Adaptation

**Authors:** JungHun Oh; Sungyong Baik; Kyoung Mu Lee

**ID:** 150783 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fQrxSvxZkd>) | [PDF](<https://openreview.net/pdf?id=fQrxSvxZkd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150783>)

Low\-Rank Adaptation \(LoRA\) enables efficient adaptation of large pre\-trained models to downstream tasks by parameterizing weight updates with low\-rank matrices\. In this paper, we investigate the limitations of the LoRA parameterization from a geometric perspective\. Specifically, we show that when a full fine\-tuning gradient is backpropagated to the low\-rank matrices, it undergoes anisotropic scaling driven by their singular values\. We argue that this phenomenon is undesirable because it distorts the full fine\-tuning gradient by skewing it toward dominant singular directions while suppressing others\. Our analyses demonstrate that anisotropic gradient scaling reduces the effective rank of the low\-rank matrices' gradients and results in suboptimal alignment between the full fine\-tuning gradient and its low\-rank approximation in LoRA, thereby exacerbating the gap to full fine\-tuning\. To address these limitations, we propose a new low\-rank parameterization, SDS\-LoRA, which structurally decouples singular values from the backward pass\. Our method ensures that the full fine\-tuning gradient backpropagates only through the orthonormal bases of the low\-rank matrices' subspaces, independent of their scales\. Convergence analysis demonstrates that while LoRA’s convergence rate degrades with the condition number of the low\-rank matrices, SDS\-LoRA remains independent of it\. Experimental results across natural language and vision benchmarks show that SDS\-LoRA improves loss convergence and reduces the gap to full fine\-tuning, significantly enhancing adaptation performance\.

## Breaking Curse of Dimensionality for Mutual Information Estimation with Vine Copulas

**Authors:** Sigurd Holmsen; Berit Øksnes; Ingrid Hobæk Haff; Sylvia Richardson; Ali Ramezani\-Kebrya

**ID:** 154130 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G2wwtzIvKy>) | [PDF](<https://openreview.net/pdf?id=G2wwtzIvKy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154130>)

We propose a computationally efficient vine copula\-based mutual information \(MI\) estimator\. Unlike existing non\-parametric density estimators that suffer from the curse of dimensionality, a non\-parametric vine copula has a convergence rate that is independent of the dimensionality of data\. We leverage this property to tackle the challenging task of MI estimation and propose an interpretable MI estimator\. Extensive experiments on datasets with known ground\-truth MI values across dimensions, data types, and \(input, output\) dependence structures demonstrate a superior trade\-off between MI estimation error and computational time compared to SotA neural MI estimators\.

## A Reduction from Delayed to Immediate Feedback for Online Convex Optimization with Improved Guarantees

**Authors:** Alexander Ryabchenko; Idan Attias; Dan Roy

**ID:** 155853 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2PgCkZnWDO>) | [PDF](<https://openreview.net/pdf?id=2PgCkZnWDO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155853>)

We develop a reduction\-based framework for online learning with delayed feedback that recovers and improves upon existing results for both first\-order and bandit convex optimization\. Our approach introduces a continuous\-time model under which regret decomposes into a delay\-independent learning term and a delay\-induced drift term, yielding a delay\-adaptive reduction that converts any algorithm for online linear optimization into one that handles round\-dependent delays\. For bandit convex optimization, we significantly improve existing regret bounds, with delay\-dependent terms matching optimal first\-order rates\. For first\-order feedback, we recover optimal regret bounds via a simpler, unified analysis\. Quantitatively, for bandit convex optimization we obtain $O\(\\sqrt\{d\_\{\\text\{tot\}\}\} \+ T^\{\\frac\{3\}\{4\}\}\\sqrt\{k\}\)$ regret, improving the delay\-dependent term from $O\(\\min\\\{\\sqrt\{T d\_\{\\text\{max\}\}\},\(Td\_\{\\text\{tot\}\}\)^\{\\frac\{1\}\{3\}\}\\\}\)$ in previous work to $O\(\\sqrt\{d\_\{\\text\{tot\}\}\}\)$\. Here, $k$, $T$, $d\_\{\\text\{max\}\}$, and $d\_\{\\text\{tot\}\}$ denote the dimension, time horizon, maximum delay, and total delay, respectively\. Under strong convexity, we achieve $O\(\\min\\\{\\sigma\_\{\\text\{max\}\} \\ln T, \\sqrt\{d\_\{\\text\{tot\}\}\}\\\} \+ \(T^2\\ln T\)^\{\\frac\{1\}\{3\}\} \{k\}^\{\\frac\{2\}\{3\}\}\)$, improving the delay\-dependent term from $O\(d\_\{\\textnormal\{max\}\} \\ln T\)$ in previous work to $O\(\\min\\\{\\sigma\_\{\\text\{max\}\} \\ln T, \\sqrt\{d\_\{\\text\{tot\}\}\}\\\}\)$, where $\\sigma\_\{\\text\{max\}\}$ denotes the maximum number of outstanding observations and may be considerably smaller than $d\_\{\\text\{max\}\}$\.

## Capacity\-Constrained Online Convex Optimization with Delayed Feedback

**Authors:** Alexander Ryabchenko; Idan Attias; Dan Roy

**ID:** 151561 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZgUQ4y3khF>) | [PDF](<https://openreview.net/pdf?id=ZgUQ4y3khF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151561>)

Online learning with delayed feedback typically assumes that the learner can track all pending rounds until their feedback arrives\. In practice, tracking resources are finite, and feedback from rounds that cannot be tracked is permanently lost\. In this paper, we study delayed online convex optimization \(OCO\) under a hard capacity constraint, where at most $C$ pending rounds can be tracked at any time\. To model delay information, we introduce a semi\-clairvoyant model that refines the clairvoyant assumption from prior work: rather than requiring delays to be known at prediction time, the learner observes delay expirations online, consistent with the classical unconstrained delayed setting\. Our approach proceeds via a reduction to a novel \`\`delayed and weighted" OCO problem, using a scheduler that randomizes which rounds are tracked and importance\-weights the resulting observations\. For the base problem, we propose and analyze Delayed\-Weighted FTRL and its bandit analogue, obtaining regret bounds that characterize how weights interact with delayed feedback in both settings\. Combining these bounds with our schedulers yields regret guarantees for capacity\-constrained OCO under convex and strongly convex losses, for both first\-order and bandit feedback\. For first\-order feedback, capacity $C = \\Omega\(\\log T\)$ suffices to recover the standard delayed OCO rates up to logarithmic factors\. For bandit feedback, the standard delayed BCO rates are instead modulated by $\(1 \+ \\sigma\_\{\\text\{max\}\}/C\)$ factors, where $\\sigma\_\{\\text\{max\}\}$ is the maximum number of pending observations\. This allows the regret bound to degrade gracefully when $C &lt; \\sigma\_\{\\text\{max\}\}$, while remaining sublinear\.

## Take It or Leave It: Intent\-Controlled Partial Optimal Transport

**Authors:** Parth TRIPATHI; bertrand chapron; Fabrice collard; Nicolas Courty; ronan fablet

**ID:** 153778 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IjSvYhsV0a>) | [PDF](<https://openreview.net/pdf?id=IjSvYhsV0a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153778>)

While optimal transport \(OT\) enforces a rigid constraint by requiring two measures to be matched exactly, partial optimal transport relaxes this requirement by allowing mass to remain unmatched through a global budget, scalar rebate, or uniform rejection rule\. However, many applications call for more structured, pointwise rejection mechanisms, where the decision to leave mass unmatched depends on side\-specific reliability, support geometry, or external information about which components should participate in the comparison\. We introduce \\emph\{intent\-controlled partial optimal transport\} \(IC\-POT\), a targeted generalization of partial transport that replaces the global rejection paradigm with pointwise rejection costs over both measures\. We show that the resulting optimization problem admits a dual interpretation in terms of local acceptance thresholds and can be solved by recasting it as a balanced Kantorovich OT problem on an augmented support\. Beyond theoretical analysis, we demonstrate the practical relevance of IC\-POT in settings where rejection is driven by side information\. In positive\-unlabeled learning and open\-partial domain adaptation, incorporating pointwise rejection rules that encode statistical structure improves fixed baseline pipelines\. Finally, we motivate the use of IC\-POT with a geophysical practical case: multi\-modal satellite ocean measurements, for which physical and instrumental priors naturally inform the rejection mechanism and define the retrieved comparable signal information\.

## Adaptively Incorporating Directional Hints into Zeroth\-Order Optimization

**Authors:** Alexander Ryabchenko; Jian Qian; Wenlong Mou

**ID:** 149625 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ofyCInS0Mr>) | [PDF](<https://openreview.net/pdf?id=ofyCInS0Mr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149625>)

We study zeroth\-order optimization of non\-convex functions with the aid of directional hints, which are cheap but potentially inaccurate approximations of the true gradient direction, given by linear subspaces at each iteration\. To leverage these hints adaptively while maintaining robustness to their quality, we introduce Control\-Variate Zeroth\-Order Descent \(CV\-ZOD\), a new framework that refines the classical zeroth\-order gradient estimator with a control variate that can be set based on the directional hints\. We first show that the oracle algorithm that optimally sets the reference vector and step size at each iteration achieves a convergence rate that interpolates between the first\-order $O\(1/T\)$ rate and the zeroth\-order $O\(d/T\)$ rate, depending on the quality of the hints along the trajectory\. We then develop a practical variant of CV\-ZOD that achieves the same oracle guarantee up to logarithmic factors, without any prior knowledge of the hint quality\. We validate the method empirically on simulation\-based scientific optimization tasks, demonstrating sustained progress on nonconvex landscapes where zeroth\-order descent is slower and existing guided methods stall as guidance deteriorates\.

## Stochastic Optimization with Random Search

**Authors:** El Mahdi Chayti; Taha EL BAKKALI EL KADI; Omar Saadi; Martin Jaggi

**ID:** 153206 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N3J3P9FOP9>) | [PDF](<https://openreview.net/pdf?id=N3J3P9FOP9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153206>)

We study stochastic random search for nonconvex optimization with only noisy function evaluations\. We propose Mi2P, a two\-point variant of stochastic three\-point methods, and analyze it under generalized $\(L\_0,L\_1\)$\-smoothness\. Two regimes are considered\. When the mean objective $f$ is $\(L\_0,L\_1\)$\-smooth and component variance is bounded, Mi2P achieves $\\widetilde\{O\}\(d^3\\sigma\_0^2/\\varepsilon^\{6\}\)$, matching the rate of \\citet\{boucherouite2024mistp\} under a strictly weaker assumption \(they require $f$ to be $L$\-smooth, i\.e\., $L\_1=0$\)\. When an $L^1$\-average $\(L\_0,L\_1\)$\-smoothness holds across $\\xi$, Mi2P attains the optimal $\\widetilde\{O\}\(d\\sigma^2/\\varepsilon^\{4\}\)$ rate; the per\-sample $L$\-smoothness used by gradient\-estimation methods such as RSGF \\citep\{ghadimi2013stochastic\} \(i\.e\., each $f\_\\xi$ is $L$\-smooth, $L\_1 = 0$ pointwise in $\\xi$\) is a special case of this condition\. For finite sums with $G$\-Lipschitz components, a translation\-symmetric variance\-reduction scheme yields $\\widetilde\{O\}\(\\min\\\{d^\{4/3\}n^\{2/3\}/\\varepsilon^\{8/3\},\\, dn/\\varepsilon^2\\\}\)$ without storing snapshots\. We also extend the framework to $\\delta$\-inexact comparison feedback \(e\.g\., RLHF, A/B testing\), giving an $O\(\\sqrt\{d\\delta\}\)$ accuracy floor\. Our analysis is presented for directional distributions with bounded support; the same rates hold for any rotation\-invariant distribution with sub\-Gaussian tails on the norm of $s$ \(including Gaussian\) under a step\-size restriction that does not affect the asymptotic complexity\.

## Inexact Bregman Sparse Newton Method for Efficient Optimal Transport

**Authors:** Jianting Pan; Jian Li; Sirong Dai; Ming Yan

**ID:** 155946 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1bW1n2cWFS>) | [PDF](<https://openreview.net/pdf?id=1bW1n2cWFS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155946>)

Computing exact Optimal Transport \(OT\) distances for large\-scale datasets is computationally prohibitive\. While entropy\-regularized alternatives offer speed, they sacrifice precision and frequently suffer from numerical instability in high\-accuracy regimes\. To address these limitations, we propose the Inexact Bregman Sparse Newton \(IBSN\) method, which efficiently solves the exact OT problems\. Our approach utilizes a Bregman proximal point framework through a sequence of semi\-dual subproblems\. By solving these subproblems inexactly, we significantly reduce per\-iteration complexity while maintaining a theoretical guarantee of convergence to the true optimal plan\. To further accelerate the algorithm, we develop a sparse Newton\-type solver for the subproblem and employ a Hessian sparsification strategy that drastically lowers memory and time costs without sacrificing accuracy\. We provide rigorous theoretical guarantees for the global convergence of the algorithm\. Extensive experiments demonstrate that IBSN consistently outperforms state\-of\-the\-art methods in both computational speed and solution precision\.

## Understanding Schedule\-Free Methods in Nonconvex Optimization: Rate Guarantees and Escaping Saddles

**Authors:** Jiseok Chae; Donghwan Kim

**ID:** 150650 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gT7jTKUJcw>) | [PDF](<https://openreview.net/pdf?id=gT7jTKUJcw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150650>)

Schedule\-Free methods have attracted growing interest for alleviating the burden of designing and tuning a learning rate scheduler, while matching and sometimes even outperforming optimizers with tuned schedulers\.    Despite their strong empirical results, their convergence theory in nonconvex optimization, where modern machine learning objectives typically arise, has remained largely unexplored\.    In this paper, we provide worst\-case analyses of Schedule\-Free gradient descent and Schedule\-Free stochastic gradient descent, in their standard form and without auxiliary modifications or restrictive conditions, for smooth but possibly nonconvex objectives\.   Based on a Lyapunov analysis derived from the continuous\-time limiting ordinary differential equation associated with these methods, we show that Schedule\-Free gradient descent and Schedule\-Free stochastic gradient descent achieve the optimal worst\-case convergence rates attainable among first\-order methods\.   We further formulate Schedule\-Free gradient descent as a nonautonomous dynamical system and prove strict\-saddle avoidance under an arbitrarily small one\-time perturbation\.   These theoretical results provide a better understanding of the strong performance that Schedule\-Free methods demonstrate\.

## Distributed Online Convex Optimization with Compressed Communication: Optimal Regret and Applications

**Authors:** Sifan Yang; Danyue Li; Lijun Zhang

**ID:** 151072 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dA7fbAenM6>) | [PDF](<https://openreview.net/pdf?id=dA7fbAenM6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151072>)

Distributed online convex optimization \(D\-OCO\) is a powerful paradigm for modeling distributed scenarios with streaming data\.  However, the communication cost between local learners and the central server is substantial in large\-scale applications\. To alleviate this bottleneck, we initiate the study of  D\-OCO with compressed communication\. Firstly, to quantify the compression impact, we establish the $\\Omega\(\\delta^\{\-1/2\}\\sqrt\{T\}\)$ and $\\Omega\(\\delta^\{\-1\}\\log\{T\}\)$ lower bounds for convex and strongly convex loss functions, respectively, where $\\delta \\in \(0,1\]$ is the compression ratio\.  Secondly, we propose an optimal algorithm, which enjoys regret bounds of $O\(\\delta^\{\-1/2\}\\sqrt\{T\}\)$ and $O\(\\delta^\{\-1\} \\log T\)$ for convex and strongly convex loss functions, respectively\. Our method innovatively incorporates the  error feedback mechanism into the Follow\-the\-Regularized\-Leader framework to address the coupling between the compression error and the projection error\. Furthermore, we employ the online compression strategy to mitigate the accumulated error arising from the bidirectional compression\. Our online method has great generality, and can be extended to the offline stochastic setting via online\-to\-batch conversion\.  We establish convergence rates of $O\(\\delta^\{\-1/2\}T^\{\-1/2\}\)$ and $O\(\\delta^\{\-1\} T^\{\-1\}\)$ for convex and strongly convex loss functions, respectively, providing the first  guarantees for distributed non\-smooth optimization with compressed communication and domain constraints\.

## Median\-of\-Means under Structured Heavy\-Tailed Noise: High\-Probability Bounds for Clipped Stochastic Optimization

**Authors:** Ahmed El Bajdali; Ohad Shamir; Samuel Horváth; Eduard Gorbunov

**ID:** 148757 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vGEUrQdO7l>) | [PDF](<https://openreview.net/pdf?id=vGEUrQdO7l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148757>)

Optimization under heavy\-tailed stochastic noise remains a major challenge in modern machine learning, where classical moment assumptions often fail to capture realistic gradient distributions\. In this work, we revisit robust estimation techniques and provide a systematic analysis of the Median\-of\-Means \(MoM\) estimator under a structured noise model that interpolates between a symmetric heavy\-tailed distribution with bounded $\\beta$\-th moment \($\\beta \\in \(0, 1\]$\) and a mean\-zero distribution with bounded $\\alpha$\-th moment \($\\alpha \\in \(1, 2\]$\)\. We derive new upper bounds on the variance and bias of MoM in this setting, thereby extending the applicability of existing results beyond purely symmetric or bounded\-moment settings\. Building on these properties, we study clipped stochastic optimization methods with MoM gradient estimation and establish high\-probability convergence guarantees that hold for general $\\beta \\in \(0, 1\]$ and $\\alpha \\in \(1, 2\]$\. Our bounds match or improve upon prior complexity guarantees while requiring weaker distributional assumptions, and they reveal that bias only affects the final neighborhood of convergence\. Overall, this work advances the theoretical foundations for robust stochastic optimization in the presence of extreme gradient noise\.

## The Denoising Wrapper: A Modular Post\-Processing Framework for Noisy First\-Order Optimizers

**Authors:** Meisam Razaviyayn; Weiwei Kong; Grigoris Velegkas; Vahab Mirrokni

**ID:** 155970 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1UGggkyD1E>) | [PDF](<https://openreview.net/pdf?id=1UGggkyD1E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155970>)

Noisy gradient estimates are ubiquitous in machine learning, arising from stochastic sampling, distributed computations, or privacy\- preserving mechanisms like Differential Privacy \(DP\)\. This paper introduces a general, optimizer\-agnostic framework for denoising these estimates\. Our approach operates as a modular wrapper that intercepts noisy gradient observations and provides denoised estimates to the optimizer, requiring no internal modifications to algorithms like SGD or Adam\. We start by studying the problem of optimal denoising gradients in quadratic and cubic optimization problems\. We develop maximum likelihood estimation of gradient and Hessian of the objective\. We also develop other computationally\-efficient order optimal algorithms for denoising gradients in such a setting\. Finally, we utilize the developments for the cubic and quadratic setting to develop a more general denoising mechanisms for general smooth nonconvex optimization problems\. Theoretically, by leveraging higher\-order smoothness, we establish an improved convergence rate of $O\(T^\{\-12/19\}\)$ for smooth non\-convex optimization\. While our recursive algorithm requires two gradient queries per iteration, we show that the improved convergence rate yields a lower total oracle complexity than the standard $O\(T^\{\-1/2\}\)$ rate of SGD\. This implies the gain in convergence speed asymptotically outweighs the additional computational cost\. We apply our algorithm to various denoising problems, particularly nonconvex DP\-training\. Our experiments, including training private classifiers on CIFAR\-10, demonstrate significant improvements over  baselines\.

## SOC\-ICNN: From Polyhedral to Conic Geometry for Learning Convex Surrogate Functions

**Authors:** Kang Liu; Jianchen Hu; Wei Peng

**ID:** 150828 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=f1AOGYk9aS>) | [PDF](<https://openreview.net/pdf?id=f1AOGYk9aS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150828>)

Classical ReLU\-based Input Convex Neural Networks \(ICNNs\) are equivalent to the optimal value functions of Linear Programming \(LP\)\. This intrinsic structural equivalence restricts their representational capacity to piecewise\-linear polyhedral functions\. To overcome this representational bottleneck, we propose the SOC\-ICNN, an architecture that generalizes the underlying optimization class from LP to Second\-Order Cone Programming \(SOCP\)\. By explicitly injecting positive semi\-definite curvature and Euclidean norm\-based conic primitives, our formulation introduces native smooth curvature into the representation while preserving a rigorous optimization\-theoretic interpretation\. We formally prove that SOC\-ICNNs strictly expand the representational space of ReLU\-ICNNs without increasing the asymptotic order of forward\-pass complexity\. Extensive experiments demonstrate that SOC\-ICNN substantially improves function approximation, while delivering competitive downstream decision quality\. The code is available at \\url\{https://anonymous\.4open\.science/r/SOC\-ICNN\-4B18/\}\.

## Achieving Better Local Regret Bound for Online Non\-Convex Bilevel Optimization

**Authors:** Tingkai Jia; Haiguang Wang; Ting Wang; Cheng Chen

**ID:** 148523 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xFpqYVlNo9>) | [PDF](<https://openreview.net/pdf?id=xFpqYVlNo9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148523>)

Online bilevel optimization \(OBO\) has emerged as a powerful framework for many machine learning problems\. Prior works have developed several algorithms that minimize the standard bilevel local regret or the window\-averaged bilevel local regret of the OBO problem, but the optimality of existing regret bounds remains unclear\.  In this work, we establish optimal regret bounds for both settings\.  For standard bilevel local regret, we propose an algorithm with adaptive iteration strategy that achieves the optimal regret $\\Omega\(1\+V\_T\)$ with at most $O\(T\\log T\)$ total inner\-level gradient evaluations\. We further develop a fully single\-loop algorithm whose regret bound includes an additional gradient\-variation terms\. For the window\-averaged bilevel local regret, we design an algorithm that captures linear environmental variation through a novel window\-based analysis and achieves the optimal regret $\\Omega\(T/W^2\)$\.  The algorithm also supports an efficient single\-loop structure, achieving an $O\(T/W\)$ regret bound with $O\(WT\)$ total gradient evaluations\. Experiments validate our theoretical findings and demonstrate the practical effectiveness of the proposed methods\.

## Gradient Descent’s Last Iterate is Often \(slightly\) Suboptimal

**Authors:** Guy Kornowski; Ohad Shamir

**ID:** 154735 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BPdZSMMob3>) | [PDF](<https://openreview.net/pdf?id=BPdZSMMob3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154735>)

We consider the well\-studied setting of minimizing a convex Lipschitz function using either gradient descent \(GD\) or its stochastic variant \(SGD\), and examine the last iterate convergence\. By now, it is known that standard stepsize choices lead to a last iterate convergence rate of $\\log T/\\sqrt\{T\}$ after $T$ steps\. A breakthrough result of Jain et al\. \[2019\] recovered the optimal $1/\\sqrt\{T\}$ rate by constructing a non\-standard stepsize sequence\. However, this sequence requires choosing $T$ in advance, as opposed to common stepsize schedules which apply for any time horizon\. Moreover, Jain et al\. conjectured that without prior knowledge of $T$, no stepsize sequence can ensure the optimal error for SGD's last iterate, a claim which so far remained unproven\. We prove this conjecture, and in fact show that even in the noiseless case of GD, it is impossible to avoid an excess poly\-log factor in $T$ when considering an anytime last iterate guarantee\. Our proof further suggests that such \(slightly\) suboptimal stopping times are unavoidably common\.

## Bridging Graph Worlds: Neural Approximation of Gromov\-Wasserstein Distances

**Authors:** Dong Qiao; Chris Ding; Jicong Fan

**ID:** 151656 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z1aNhxbf76>) | [PDF](<https://openreview.net/pdf?id=Z1aNhxbf76>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151656>)

Graph\-structured data is crucial in various domains like biology and social networks\. Comparing graphs, which is a fundamental problem in graph data analysis, is nonetheless highly challenging\. Recently, the Gromov\-Wasserstein \(GW\) distance has provided a principled way to compare two graphs\. However, computing the GW distance involves solving a complex non\-convex optimization problem, making it computationally expensive, especially when the graphs are large\.  In this work, we propose a neural approximation of the GW distance, called NeuralGW\. In NeuralGW, we use a combination of a graph isomorphism network and a transformer to represent the nodes of two graphs as two sets of vectors, treated as two discrete distributions, on which we compute multiple maximum mean discrepancy values given by different kernels\. We then use a multilayer perceptron to convert the vector formed by these values into a single value, which is the prediction of the GW distance\. Once trained, the model allows for efficient inference, enabling fast structural comparisons between graphs across diverse domains\. We also provide a theoretical guarantee for the generalization ability of NeuralGW\. Experiments demonstrate the effectiveness and practical applicability of our approach on real\-world datasets, in comparison to baselines\.

## A Unifying View of Anchoring via Operator\-Side Tikhonov Regularization

**Authors:** Zihao Chen

**ID:** 153667 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jf0hmlMAUC>) | [PDF](<https://openreview.net/pdf?id=Jf0hmlMAUC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153667>)

Anchored fixed point and monotone equation methods, including Halpern iteration, extra anchored gradient, and their relatives, add a vanishing pull toward a reference point to obtain last\-iterate guarantees\. Existing anchored variants often achieve sharp last\-iterate guarantees, but from the update\-level perspective the placement of the anchor can be algorithm\-specific and conceptually opaque\. We show that anchoring admits a single operator\-side construction: regularize the operator queried by the base method with a vanishing Tikhonov term, then run the unmodified base method\. Applied to the Picard iteration, this recipe reproduces the Halpern iteration; applied to the forward step, extragradient, and Popov methods, it yields three variants whose anchor placements inherit the base method's query pattern\. The four analyses share a residual recurrence, recovering the \(O\(1/k\)\) Halpern residual\-norm convergence rate, giving \(O\(1/\\sqrt\{k\}\)\) for the regularized forward step, and giving \(O\(1/k\)\) for the regularized extragradient and Popov variants in the unconstrained monotone Lipschitz setting\.

## Second\-Order Complexity Theory for Neural Networks

**Authors:** Yoshihiro Maruyama

**ID:** 148474 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xXBheTjwdK>) | [PDF](<https://openreview.net/pdf?id=xXBheTjwdK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148474>)

Machine learning relies on gradient\-based training procedures whose empirical efficiency is usually analyzed through finite\-dimensional arithmetic counts rather than formal complexity over continuous real\-valued data\. This paper studies neural\-network training primitives as represented\-real operators in the second\-order complexity framework of Kawamura and Cook\. Here, second\-order polynomial time means computing a real\-valued operator to accuracy $2^\{\-n\}$ in time polynomial in the requested precision, architecture size, primitive evaluation costs, and supplied analytic certificates\. We prove that dense backpropagation, convolutional backpropagation, soft attention, fixed finite SGD/Adam\-style updates, and related smooth local primitives are second\-order polynomial\-time computable over the relevant represented real spaces\. More precisely, dense one\-sample backpropagation has tight arithmetic complexity $\\Theta\(s\)$ for $s$ weights and polynomial bit complexity; convolutional backpropagation is polynomial in the number of active convolution incidences; dense soft\-attention backpropagation has arithmetic cost $\\Theta\(\\ell d^2\+\\ell^2d\)$; and fixed finite smooth optimizer updates remain second\-order polynomial\-time computable under explicit smoothness and lower\-bound certificates\. Higher complexity enters through three distinct mechanisms: discontinuous selection, global optimization, and continuous\-time flow solving\. Hard routing, top\-$k$ sparsification, argmax decisions, ReLU kink conventions, exact line search, and idealized gradient flow therefore change the second\-order complexity status of the training operator\. Overall, this work provides a rigorous mathematical language for precision, conditioning, and certificate dependence, which are often implicit in floating\-point analyses, thus enabling a unifying complexity account for dense networks, CNNs, attention, Transformers, and standard optimizers\.

## Normalized SGD in the Convex Regime: First High\-Probability Guarantees and Momentum Extension

**Authors:** Savelii Chezhegov; Eduard Gorbunov

**ID:** 150821 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=f322xYHDgN>) | [PDF](<https://openreview.net/pdf?id=f322xYHDgN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150821>)

Normalized stochastic gradient descent \(Normalized SGD\) is a classical scale\-invariant method that updates only along the gradient direction\. While Normalized SGD has recently been analyzed in non\-convex stochastic settings, its convex theory remains much less developed\. We address this gap by studying normalized gradient methods for smooth convex optimization\. First, we obtain the theory of deterministic approaches, including first convergence results for momentum variants\. Next, we establish first high\-probability convergence for mini\-batch Normalized SGD with and without momentum, under heavy\-tailed stochastic noise with a bounded $\\alpha$\-central moment\. Addressing the key challenge \-\- bias introduced by normalizing a noisy mini\-batch gradient \-\- we demonstrate that incorporation of a new bias lemma and modified inductive proof allows to control it\. As a result, we obtain first high\-probability convergence of Normalized SGD in function value, together with explicit oracle complexity bounds\.

## Adam under Generalized Smoothness with Second\-Moment\-Type Stochastic Gradients

**Authors:** ruinan Jin; Difei Cheng; Ling Chen; Jun Luo; Hao Zhou; Youzhi Zhang

**ID:** 151271 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bchuh1xaSe>) | [PDF](<https://openreview.net/pdf?id=bchuh1xaSe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151271>)

It has been widely observed that Adam can remain stable even when the objective function deviates significantly from global smoothness\. However, under the generalized smoothness framework, existing theoretical analyses typically rely on strong tail assumptions on stochastic gradients, such as almost\-sure boundedness or sub\-Gaussianity\. Whether one can establish the convergence of Adam on generalized smooth objectives under only second moment information on the stochastic gradients, without imposing such strong concentration assumptions, was explicitly identified as an important open direction by \\citet\{li2023convex\}\. This paper gives an affirmative answer to this question under fairly general conditions\. Specifically, we prove that such strong tail assumptions are not necessary\. We show that the key mechanism by which Adam remains stable and achieves convergence under the \\\(L\_0\\\)\-\-\\\(L\_p\\\) generalized smoothness condition is the self\-normalization effect induced by its adaptive coordinate\-wise scaling\. Based on this mechanism, we prove that even under a very general stochastic\-gradient condition, namely a generalized second moment ABC condition that provides only second moment information, the stochastic trajectory of Adam remains in a locally well\-behaved smoothness region with stretched\-exponential tail decay\. As a consequence, we establish high\-probability convergence rate guarantees over the full range \\\(p&lt;2\\\), with a confidence dependence of order \\\(\\delta^\{\-1/2\}\\\), while the required stepsize calibration depends on \\\(\\delta\\\) only through polylogarithmic factors in \\\(\\polylog\(1/\\delta\)\\\)\. Furthermore, we construct a hard instance proving that, under only second\-moment information on the stochastic gradients, this \\\(\\delta^\{\-1/2\}\\\)\-type confidence dependence is sharp\. Finally, in the more favorable regime \\\(p&lt;1\\\), we combine the above trajectory control with polynomial\-growth estimates on rare events to further obtain convergence rate guarantees in expectation\.

## On the Last\-Iterate Convergence of Clipped Gradient Methods

**Authors:** Zijian Liu

**ID:** 148182 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zgEpuLdwBv>) | [PDF](<https://openreview.net/pdf?id=zgEpuLdwBv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148182>)

In stochastic \(strongly\) convex optimization, establishing last\-iterate convergence guarantees for first\-order methods has recently garnered increasing attention, as this not only deepens the theoretical understanding of these algorithms but also aligns more closely with practice\. Notably, people have demonstrated that one of the most famous, simple, and popular methods, Stochastic Gradient Descent \($\\mathtt\{SGD\}$\), provably achieves last\-iterate convergence\. However, the existing results may have limited applicability, since they typically rely on strong conditions on the gradient noise \(e\.g\., an exponentially decaying tail\) rather than the more realistic heavy\-tailed noise\. Unfortunately, when faced with heavy\-tailed noise, $\\mathtt\{SGD\}$ is known to exhibit undesirable behavior or even fail to converge\. To address the challenge of heavy\-tailed noise, people have proposed $\\mathtt\{Clipped\}\\text\{\-\}\\mathtt\{SGD\}$, an algorithm that combines $\\mathtt\{SGD\}$ with a simple mechanism, gradient clipping\. Although $\\mathtt\{Clipped\}\\text\{\-\}\\mathtt\{SGD\}$ performs well in practice, its last\-iterate convergence property remains highly underexplored\. In this work, we prove the first optimal last\-iterate rates in high probability for $\\mathtt\{Clipped\}\\text\{\-\}\\mathtt\{SGD\}$ under heavy\-tailed noise, thereby closing a gap in the literature\.

## Affine\-invariant Cubic Newton with Weak Learners

**Authors:** Nikita Zozoulenko; Daniel Falkowski; Thomas Cass; Lukas Gonon

**ID:** 150741 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fjyjg3gCmx>) | [PDF](<https://openreview.net/pdf?id=fjyjg3gCmx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150741>)

Modern gradient boosting algorithms are based on Newton's method, which excels empirically but lacks global convergence guarantees\. While recent work on Gradient\-Regularized Newton \(GRN\) boosting achieved a global $\\mathcal\{O\}\(1/\\gamma^\{12\}k^2\)$ rate, its analysis was not able to exploit the natural Hessian geometry and suffers from a $\\gamma^\{12\}$ dependence on a worst\-case \`weak gradient edge' $\\gamma$\. In this paper, we tackle these theoretical drawbacks by generalizing the Affine\-Invariant Cubic Newton \(AICN\) scheme to convex optimization with weak learners\. Our analysis is based on average cosine values $\\overline\{\\Theta\}\_k$ along the optimization path and directional improvements $\\delta\_k$ in the Hessian\-induced norm\. We show that the weak\-AICN update reduces to a damped weak\-Newton step with an explicit stepsize determined by $\\delta\_k$\. Under semi\-strong self\-concordance, we establish a global $\\mathcal\{O\}\(1/\\overline\{\\Theta\}\_k^4 k^2\)$ rate, significantly improving upon the weak\-GRN bound\. We further prove a local linear rate, global linear convergence for Hessian\-dominated losses, and cosine angle lower bounds\. Finally, we demonstrate the broader applicability of this framework beyond gradient boosting by showing that Newton coordinate descent emerges naturally as a special case of optimization with weak learners\.

## Functional Gradient Descent with Adaptive Representations

**Authors:** Daniel Csillag; Rodrigo Schuller; Pedro Dall’Antonia; Leonidas Guibas; Luiz Velho; Tiago Novello

**ID:** 148533 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xCAaTAUix7>) | [PDF](<https://openreview.net/pdf?id=xCAaTAUix7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148533>)

Functional optimization problems are typically solved by optimizing the parameters of a fixed representation, such as a neural network, resulting in highly nonconvex losses that complicate both training and theoretical analysis\. An interesting alternative is functional gradient descent \(FGD\) \-\-\- that is, gradient descent directly in function space \-\-\- which benefits from strong convergence results and admits a clean theory\. However, FGD is difficult to implement in practice because functional gradients are infinite\-dimensional, and thus cannot be fully computed nor stored in memory\. Existing implementations therefore rely on fixed approximations, which introduce approximation error\. We propose a new, theoretically\-grounded FGD algorithm that adapts the representation of the functional gradients over the course of optimization\. By explicitly incorporating this approximation into the analysis, we establish convergence to a stationary point \(for smooth losses\) and to a global minimizer \(under smoothness \+ a Polyak\-Łojasiewicz\-type condition\) regardless of our approximations\. To the best of our knowledge, this is the first implementable FGD method with such guarantees in a general setting\. We demonstrate the effectiveness of our method on regression, numerical solution of PDEs, and modern computer vision\. Across settings, our method consistently outperforms both FGD with fixed approximations and neural network baselines in efficiency and accuracy\.

## Universal Adaptive Proximal Gradient Methods via Gradient Mapping Accumulation

**Authors:** Zimeng Wang; Alp Yurtsever

**ID:** 149234 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rvbSXHFunT>) | [PDF](<https://openreview.net/pdf?id=rvbSXHFunT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149234>)

We propose an adaptive proximal gradient method for minimizing the sum of two functions, where one is a simple convex function, and the other belongs to one of the three classes: nonconvex smooth, convex nonsmooth, or convex smooth\. The key feature of the method is an adaptive step size that accumulates historical gradient mapping norms in the denominator\. Without any modification or knowledge of problem parameters, the method converges across all three problem classes under mild bounded\-iterates and bounded\-variance assumptions, with rates matching those of the proximal gradient method up to logarithmic factors, in both deterministic and stochastic settings\. For the convex setting, we further propose an accelerated variant\. It retains a similar near\-optimal convergence rate for the nonsmooth case and achieves an improved rate of order $\\widetilde\{O\}\\big\(1/t^2 \+ \\sigma/\\sqrt\{t\}\\big\)$ for the smooth case, which is optimal up to logarithmic factors\. Notably, we develop new techniques for controlling the effect of stochastic noise, which are applicable across all three problem classes in the stochastic setting and enable simplified analysis\.

## Constrained Stochastic Spectral Preconditioning Converges for Nonconvex Objectives

**Authors:** Konstantinos Oikonomidis; Jan Quan; Kimon Antonakopoulos; Antonio Silveti\-Falls; Volkan Cevher; Panagiotis Patrinos

**ID:** 149304 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rCGJvUIOsM>) | [PDF](<https://openreview.net/pdf?id=rCGJvUIOsM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149304>)

In this work, we develop proximal preconditioned gradient methods with a focus on spectral gradient methods providing a proximal extension to the Muon and Scion optimizers\. We introduce a family of stochastic algorithms that can handle a wide variety of convex and nonconvex constraints and study its convergence under heavy\-tailed noise, through a novel analysis tailored to the geometry of the proposed methods\. We further propose a variance\-reduced version, which achieves faster convergence under standard noise assumptions\. Finally, we show that the polynomial iterations used in Muon are more accurately captured by a nonlinear preconditioner than by the ideal matrix sign, leading to a convergence analysis that more faithfully reflects practical implementations\.

## Learning inexact alternating minimization

**Authors:** Paul Häusner; Jevgenija Rudzusika; Jens Sjölund; Ozan Öktem

**ID:** 150173 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k9PxLgUe1g>) | [PDF](<https://openreview.net/pdf?id=k9PxLgUe1g>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150173>)

Alternating minimization is a standard tool for optimization problems with two coupled variable blocks\. Its cost is dominated by the inner subproblem solvers, which rarely have a closed\-form solution\. In this paper, we propose to learn an inexact alternating scheme in which neural networks approximate the subproblem solution at each iteration\. We derive a worst\-case bound on the optimality gap that exposes the per\-iteration error that each network is trained to minimize in a greedy fashion\. To show convergence of the learned scheme on unseen problem instances, we combine the bound with a PAC\-Bayes argument that controls the expected optimality gap with high probability\. We apply the learned scheme to low\-dose CT reconstruction with dictionary regularization, demonstrating a $13\\times$ speedup over the inexact first\-order baseline at matched accuracy\. A brief end\-to\-end fine\-tuning stage extends this to $30\\times$ and outperforms other  learned schemes\.

## BROS: Bias\-Corrected Randomized Subspaces for Memory\-Efficient Single\-Loop Bilevel Optimization

**Authors:** Hengrui Zhang; Boao Kong; Engao Zhang; Kun Yuan

**ID:** 149705 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o4aIX9knRi>) | [PDF](<https://openreview.net/pdf?id=o4aIX9knRi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149705>)

Stochastic bilevel optimization \(SBO\) has become a standard framework for hyperparameter learning, data reweighting, representation learning, and data\-mixture optimization in deep learning\. Existing exact single\-loop SBO methods and memory\-efficient surrogate SBO methods either create severe memory pressure for large lower\-level neural networks or lack competitive convergence guarantees under standard assumptions\. In this paper, we propose BROS, a memory\-efficient single\-loop SBO method with the same convergence rate order as exact single\-loop SBO methods\. BROS performs lower and auxiliary updates in randomized subspaces with a Rademacher bi\-probe correction that recovers an unbiased Hessian\-action estimator\. We prove that BROS preserves the $\\mathcal O\(\\varepsilon^\{\-2\}\)$ sample complexity of MA\-SOBA for finding an $\\varepsilon$\-stationary point under only standard assumptions\. Experiments on hyper\-data cleaning, data\-mixture learning, hyper\-representation learning, and ViT sample reweighting show that BROS reduces peak memory by up to 44\.9% while closely matching full\-space baseline performance\.

## Revisiting Value Iteration: Unified Analysis of Discounted and Average\-Reward Cases

**Authors:** Arsenii Mustafin; Xinyi Sheng; Dominik Baumann

**ID:** 149535 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pPySJfE8ap>) | [PDF](<https://openreview.net/pdf?id=pPySJfE8ap>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149535>)

While Value Iteration \(VI\) is one of the most fundamental algorithms in  Reinforcement Learning, its theoretical convergence guarantees still exhibit  a persistent mismatch with empirical behavior\. In the discounted\-reward case,  classical theory guarantees geometric convergence with rate $\\gamma$, while  in the average\-reward case recent work suggests that only sublinear  convergence can be expected\. In practice, however, VI is often observed to  converge significantly faster\. In this work, we show through a unified  geometry\-based analysis that, under an assumption of a unique and unichain  optimal policy, \(i\) convergence is geometric in \*both\* the  discounted\- and average\-reward settings and \(ii\) the convergence rate  is faster than previous analyses suggest\.

## Exact Instance Compression for Convex Empirical Risk Minimization via Color Refinement

**Authors:** Bryan Zhu; Ziang Chen

**ID:** 153709 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JM5piPXaA4>) | [PDF](<https://openreview.net/pdf?id=JM5piPXaA4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153709>)

Empirical risk minimization \(ERM\) can be computationally expensive, with standard solvers scaling poorly even in the convex setting\. We propose a novel lossless compression framework for convex ERM based on color refinement, extending prior work from linear programs and convex quadratic programs to general differentiable convex optimization problems\. We develop concrete algorithms for a range of models, including linear and polynomial regression, binary and multiclass logistic regression, regression with elastic\-net regularization, and kernel methods such as kernel ridge regression and kernel logistic regression\. Numerical experiments on representative datasets demonstrate the effectiveness of the proposed approach\.

## Locally\-Additive Regret for Delayed Non\-stationary Bandit Convex Optimization

**Authors:** Wentao Zhang; Yifan Zhu; Yutong Zhang

**ID:** 151248 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bnpbr6NXNG>) | [PDF](<https://openreview.net/pdf?id=bnpbr6NXNG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151248>)

We study bandit convex optimization \(BCO\) when feedback is adversarially delayed and the comparator sequence is also adversarially non\-stationary\. This setting arises in online advertising, recommender systems, and adaptive dosing, but existing algorithms either absorb one of the two axes into a black\-box global penalty or pay a worst\-case cost that ignores the local interaction between delay and drift\. We propose Oracle\-DARS\-DBCO, a delay\-aware blocking algorithm whose block length $K$ and one\-point smoothing radius $\\delta$ satisfy the single identity $K\\delta^\{2\}\\asymp n^\{2\}$\. This identity cancels the multiplicative coupling between delay deviation and one\-point estimator variance, so the regret of each segment is paid only on that segment\. We prove matching upper and lower bounds on the expected dynamic regret: $\\widetilde\{O\}\\bigl\(\\sqrt\{n\}\\,m^\{1/4\}T^\{3/4\}\+\\sqrt\{d\_\{\\max\}\\,mT\}\\bigr\)$ for convex losses and $\\widetilde\{O\}\\bigl\(n^\{2/3\}m^\{1/3\}T^\{2/3\}\+d\_\{\\max\}\\,m\\log\(eT/m\)\\bigr\)$ for $\\alpha$\-strongly convex losses, where $m=S\_\{T\}\+1$ is the number of stationary segments and $d\_\{\\max\}$ is the worst\-case delay\. The matching Rademacher\-sign lower bounds $\\Omega\\bigl\(\\sqrt\{d\(S\_\{T\}\+1\)\\,T\}\\bigr\)$ and $\\Omega\\bigl\(d\(S\_\{T\}\+1\)\\bigr\)$ show that the delay price is segment\-local\. On fourteen scaling experiments, the fitted log\-\-log exponents agree with the predicted ones within $0\.04$, and Oracle\-DARS\-DBCO reduces regret by up to $9\.17\\times$ relative to the strongest non\-restarting baseline on a piecewise\-stationary benchmark\.

## When Graph Structure Provably Helps Classification: Non\-Asymptotic Recovery Guarantees

**Authors:** Firooz Shahriari\-Mehr; Javad Aliakbari; Alexandre Graell i Amat; Ashkan Panahi

**ID:** 155258 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=72fw0DX1I8>) | [PDF](<https://openreview.net/pdf?id=72fw0DX1I8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155258>)

The joint use of graph structure and node\-specific information is central to transductive node classification, yet a fundamental theoretical question remains unanswered: when does graph structure actually help? We provide the first non\-asymptotic, distribution\-free answer to this question\. We build on nuclear\-norm graph clustering and classical convex clustering, generalizing the latter to incorporate node features, partial labels, and general convex loss functions, making it suitable for transductive node classification\. We analyze each problem separately to characterize when graph structure alone, or node information alone, is sufficient for perfect recovery\. We then formulate a unified convex optimization problem through a shared atomic norm representation, and prove that there exist conditions under which neither source alone achieves perfect recovery  but using both jointly does, revealing a bidirectional synergy: node information improves clustering, while graph structure improves classification\.

## A Frank\-Wolfe Approach to Goldstein Stationarity

**Authors:** Swati Padmanabhan; Zitao Song; Zhe Zhang

**ID:** 150421 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iAYv33Isy5>) | [PDF](<https://openreview.net/pdf?id=iAYv33Isy5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150421>)

We investigate the problem of finding $\(\\delta, \\varepsilon\)$\-stationary    points \(also called Goldstein stationary points\) for nonsmooth nonconvex Lipschitz functions\. This problem has recently garnered significant attention, with several non\-asymptotic convergence guarantees\. However, existing methods for such guarantees require prior knowledge of problem parameters and lack anytime     convergence\. Our work addresses these issues by providing an algorithm that satisfies two properties:     Firstly, our algorithm is parameter\-free; secondly, it generates a sequence of    $\(\\varepsilon, \\varepsilon\)$\-stationary points with monotonically    decreasing $\\varepsilon$\. This algorithm achieves the \(non\-stochastic\) state\-of\-the\-art complexity for    any $\\varepsilon &gt; 0$ and ensuring convergence to a Clarke stationary    point in the limit\.    Central to our result is the insight that one can slightly modify prior algorithms for this problem and view them within the framework of the classic  Frank\-Wolfe algorithm\.

## Adapting to Conflict: Equilibrium Structure and Adaptive Learning in Harmonic Games

**Authors:** Davide Legacci; Panayotis Mertikopoulos; Bary Pradelski

**ID:** 148344 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yYe40MToUb>) | [PDF](<https://openreview.net/pdf?id=yYe40MToUb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148344>)

Zero\-sum games are the textbook model of strategic competition—yet they can fail to capture conflict even in simple settings\. \*Harmonic games\* provide a more robust framework for opposed interests: they are invariant under strategic equivalence, and naturally extend beyond pairwise competition\. This generality comes at a structural cost\. We show that, in odd\-dimensional harmonic games, the set of totally mixed Nash equilibria is a generically non\-convex real algebraic variety of dimension at least one, extending to the boundary of the strategy space\. As a result, learning becomes delicate: although finely tuned methods are known, whether adaptive, parameter\-agnostic learning is possible has remained open\. We resolve this question in the affirmative\. We introduce a flexible extrapolation\-based variant of follow\-the\-regularized\-leader \(FTRL\+\) that converges to Nash equilibrium while achieving order\-optimal regret: $\\mathcal\{O\}\(1\)$ in self\-play and $\\mathcal\{O\}\(\\sqrt\{T\}\)$ against arbitrary opponents\. The method is fully adaptive—each player updates from locally observable information alone, without access to global problem parameters or shared signals—yielding the first parameter\-agnostic learning dynamics provably convergent in this class\.

## Dynamic Regret in Online Convex Optimization with Indicator Switching Costs

**Authors:** Naram Mhaisen; George Iosifidis

**ID:** 150727 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=frpCLd0FIr>) | [PDF](<https://openreview.net/pdf?id=frpCLd0FIr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150727>)

We study dynamic regret in online convex optimization with an \\emph\{indicator switching cost\}: a fixed penalty incurred whenever two consecutive decisions differ\. This captures startup overheads such as server activation, model deployment, and cache updates, and on a bounded domain it recovers norm\-based movement costs as a special case\. Existing guarantees for indicator costs handle only static comparators\. We show that a direct extension of these techniques to dynamic regret provably fails, motivating a different approach\. We propose a meta\-learning framework: a set of randomized lazy FTRL base learners restarted at dyadic time scales, aggregated by a movement\-aware master that mixes their proposal densities and samples actions via maximal coupling of consecutive mixtures\. The resulting algorithm satisfies, in expectation, $\\mathcal\{R\}^\{\\mathbf\{1\}\}\_T \\le \\tilde\{\\mathcal\{O\}\}\(\\min\\\{\\sqrt\{T\(S\_T\{\+\}1\)\},T^\{2/3\}\(P\_T\+1\)^\{1/3\}\\\}\)$, where $\\mathcal\{R\}^\{\\mathbf\{1\}\}\_T$ is the dynamic regret plus the cumulative indicator switching cost, $S\_T$ counts comparator switches, and $P\_T$ is the comparator path length\. The bound holds simultaneously for all sequences and requires no prior knowledge of $S\_T$ or $P\_T$: it is minimax\-optimal \(up to logarithmic factors\) for tracking piecewise\-constant comparators, and also captures frequently moving comparators with small total path length\.

## Complexity of Classical Acceleration for $\\ell\_1$\-Regularized PageRank

**Authors:** Kimon Fountoulakis; David Martínez\-Rubio

**ID:** 153053 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OO2ZfxkCzc>) | [PDF](<https://openreview.net/pdf?id=OO2ZfxkCzc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153053>)

We study the degree\-weighted work required to compute $\\ell\_1$\-regularized PageRank using the standard one\-gradient\-per\-iteration accelerated proximal\-gradient method \(FISTA\)\.      For non\-accelerated local methods \(ISTA\), the best known worst\-case work scales as $\\widetilde\{O\} \(\(\\alpha\\rho\)^\{\-1\}\)$, where $\\alpha$ is the teleportation parameter and $\\rho$ is the $\\ell\_1$\-regularization parameter\.      A natural question is whether FISTA can improve the dependence on $\\alpha$ from $1/\\alpha$ to $1/\\sqrt\{\\alpha\}$ while preserving the $1/\\rho$ locality scaling\. The challenge is that acceleration can break locality by transiently activating nodes that are zero at optimality, thereby increasing the cost of gradient evaluations\. We analyze FISTA with respect to a less regularized objective and show that, under a checkable confinement condition, all spurious activations remain inside a boundary set $\\mathcal\{B\}$\.      This yields a bound consisting of an accelerated $\(\\rho\\sqrt\{\\alpha\}\)^\{\-1\}\\log\(\\alpha/\\varepsilon\)$ term plus a boundary overhead $\\sqrt\{vol\(\\mathcal\{B\}\)\}/\(\\rho\\alpha^\{3/2\}\)$\. We provide graph\-structural conditions that imply such confinement\. Experiments on synthetic and real graphs show the resulting speedup and slowdown regimes under the degree\-weighted work model\.

## Frank\-Wolfe Beyond 1/t Convergence

**Authors:** Sebastian Pokutta

**ID:** 156093 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0Q5L0kJ3W4>) | [PDF](<https://openreview.net/pdf?id=0Q5L0kJ3W4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156093>)

We consider smooth convex minimization over compact convex sets, i\.e\., $\\min\_\{x \\in \\mathcal C\} f\(x\)$ with the \(vanilla\) Frank\-\-Wolfe algorithm\. Well\-known lower bounds establish a worst\-case $\\Omega\(1/t\)$ primal\-gap barrier in the general smooth convex case, and faster convergence usually requires favorable function properties such as Hölder error bounds or strong convexity\. We present a new Local Dual Sharpness \(LDS\) condition, essentially a property of the feasible region and its LMO, under which the Frank\-\-Wolfe algorithm converges in $o\(1/t\)$ for any smooth convex function, ruling out an $\\Omega\(1/t\)$ lower bound under LDS\. The condition is a generalization \(and localization\) of uniform convexity of sets and it is satisfied by any uniformly convex set\. To our knowledge, this is the first unconditional $o\(1/t\)$ convergence result for uniformly convex sets\. Combining LDS with stronger function properties, e\.g\., a local variant of Hölder error bounds, allows us to quantify the actual rates\.

## Near\-Optimal Decentralized Stochastic Convex Optimization over Networks

**Authors:** Amit Attia; Nitai Kluger; Tomer Koren

**ID:** 149643 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oYnS7HBW5L>) | [PDF](<https://openreview.net/pdf?id=oYnS7HBW5L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149643>)

We study decentralized stochastic smooth convex optimization, where $M$ workers minimize an average objective using local stochastic gradients and neighbor\-only communication over a fixed gossip network\. A central question in this setting is to determine the largest number of workers that can be used under a total budget of $N$ gradient samples while still preserving the centralized $O\(1/\\sqrt N\)$ statistical rate\. We introduce an accelerated decentralized method that preserves this rate for $M \\lesssim \\sqrt\{\\rho\} N^\{3/4\}$ workers up to logarithmic factors, where $\\rho$ is the spectral gap of the gossip network, improving the best prior scaling of $M \\lesssim \\rho\\sqrt N$ \[Eisen et al\., 2025\]\. The method is based on a one\-step\-delayed stochastic acceleration scheme that enables workers to interleave minibatching with accelerated gossip while controlling residual disagreement, and its guarantee depends only logarithmically on the optimum\-local heterogeneity\. We also establish a matching lower bound for linear\-span decentralized first\-order methods, showing that the method is optimal up to logarithmic factors\.

## What’s in a Smoothness Constant? Tight Rates for Local SGD with Bounded Second\-order Heterogeneity

**Authors:** Kumar Kshitij Patel; Rustem Islamov; Sebastian Stich; Aurelien Lucchi; Eduard Gorbunov; Lingxiao Wang

**ID:** 148945 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=u0RipLyQNB>) | [PDF](<https://openreview.net/pdf?id=u0RipLyQNB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148945>)

Local SGD, also known as Federated Averaging, is a widely used distributed optimization algorithm\. Although it frequently outperforms alternatives such as Mini\-batch SGD in practice, its theoretical advantage under realistic data heterogeneity remains only partially understood\. Recent work demonstrates that bounded second\-order heterogeneity accounts for the benefits of Local SGD for strongly convex objectives and conjectures similar advantages for general convex objectives\. In this paper, we establish such gains for general convex objectives by providing an improved convergence guarantee for Local SGD under bounded second\-order heterogeneity\. We also improve the best\-known lower bounds for Local SGD in this setting, showing that our upper bounds are almost tight\. Using our techniques, we also improve the convergence guarantee of SGD\-with\-replacement under bounded second\-order heterogeneity and obtain an almost\-matching lower bound\.

## Geometry\-Aware Optimal Transport: Fast Intrinsic Dimension and Wasserstein Distance Estimation

**Authors:** Ferdinand Genans; Olivier Wintenberger

**ID:** 151644 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z4hdha21ac>) | [PDF](<https://openreview.net/pdf?id=Z4hdha21ac>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151644>)

Solving large scale Optimal Transport \(OT\) in machine learning typically relies on sampling measures to obtain a tractable discrete problem\. While the discrete solver's accuracy is controllable, the rate of convergence of the discretization error is governed by the intrinsic dimension of our data\. Therefore, the true bottleneck is the knowledge and control of the sampling error\. In this work, we tackle this issue by introducing novel estimators for both sampling error and intrinsic dimension\. The key finding is a simple, tuning\-free estimator of $\\text\{OT\}\_c\(\\rho, \\hat\\rho\)$ that utilizes the semi\-dual OT functional and, remarkably, requires no OT solver\. Furthermore, we derive a fast intrinsic dimension estimator from the multi\-scale decay of our sampling error estimator\. This framework unlocks significant computational and statistical advantages in practice, enabling us to \(i\) quantify the convergence rate of the discretization error, \(ii\) calibrate the entropic regularization of Sinkhorn divergences to the data's intrinsic geometry, and \(iii\) introduce a novel, intrinsic\-dimension\-based Richardson extrapolation estimator that strongly debiases Wasserstein distance estimation\. Numerical experiments demonstrate that our geometry\-aware pipeline effectively mitigates the discretization error bottleneck while maintaining computational efficiency\.

## Gradient Span Algorithms Make Predictable Progress in High Dimension

**Authors:** Felix Benning; Leif Döring

**ID:** 156662 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156662>)

We prove that all 'gradient span algorithms' have asymptotically deterministic behavior on scaled Gaussian random functions as the dimension tends to infinity\. This is a functional generalization of similar results for random quadratic functions and spin glasses\. They explain the counterintuitive phenomenon that different training runs of many large machine learning models result in approximately equal cost curves despite random initialization on a complicated non\-convex landscape\. This 'predictable progress' phenomenon is exploited by the AutoML community: Since the optimization progress of a single run is already representative, multiple retries with the same hyperparameters are not necessary\.

## Strongly Adaptive Online Learning with Time\-Varying Movement Cost

**Authors:** Andrew Jacobsen; Hao Qiu; Emmanuel Esposito; Mengxiao Zhang

**ID:** 152024 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W60Ur3HSOV>) | [PDF](<https://openreview.net/pdf?id=W60Ur3HSOV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152024>)

We study strongly adaptive regret for Online Convex Optimization \(OCO\) with time\-varying movement costs, a setting that evaluates a learner's performance over arbitrary sub\-intervals\. This framework captures complex sequential decision\-making problems where both the environment and the cost of switching decisions fluctuate over time\. We propose a novel algorithm which, for any interval $\[a,b\] \\subseteq \[T\]$, achieves a data\-dependent regret bound of $ \\widetilde\{\\mathcal\{O\}\}\\left\( \\sqrt\{\(D^2\+DP\_\{\[a,b\]\}\)\\sum\_\{t \\in \[a,b\]\}\(\\\\\|g\_t\\\\\|^2\+\\lambda\_t\\\\\|g\_t\\\\\|\)\} \\right\) $, where $D$ is the diameter of the decision domain, $P\_\{\[a,b\]\}$ is the path length of the comparator sequence over $\[a,b\]$, $g\_t$ is the gradient of the loss, and $\\lambda\_t$ is the movement\-cost coefficient at round $t$\. Key to our approach is a novel reduction to sleeping experts with movement costs, a previously unexplored variant that is of independent interest\. As a result of this development, we further establish the first strongly\-adaptive guarantees under delayed feedback\.  Our approach also naturally extends to OCO with time\-varying memory, where we obtain  strongly\-adaptive guarantees which improve the best\-known bounds\.

## On Rate\-Optimal Partitioning Classification from Observable and from Privatised Data

**Authors:** Balázs Cs\. Csáji; László Györfi; Ambrus Tamás; Harro Walk

**ID:** 156765 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156765>)

In this paper we revisit the classical method of partitioning classification and prove novel
convergence rates under relaxed conditions, both for observable \(non\-privatised\) and for
privatised data\. We consider the problem of classification in a d dimensional Euclidean space\. Previous results on the partitioning classifier worked with the strong density assumption \(SDA\), which is restrictive, as we demonstrate through simple examples\. Here, we study the problem under much milder assumptions\. We presuppose that the distribution of the inputs is a mixture of an absolutely continuous and a discrete distribution, such that the absolutely continuous component is concentrated on a d\_a dimensional subspace\. In addition to the standard Lipschitz and margin conditions, a novel characteristic of the absolutely continuous component is introduced, by which the convergence rate of the classification error probability is computed, both for the binary and for the multi\-class cases\. This bound can reach the minimax optimal convergence rate achievable using SDA, but under much milder distributional assumptions\. Interestingly, this convergence rate depends only on the intrinsic dimension of the continuous inputs, d\_a, and not on d\. Under privacy constraints, the data cannot be directly observed, and the constructed classifiers are functions of the randomised outcome of a suitable local differential privacy mechanism\. In this paper we add Laplace distributed noises to the discretisations of all possible locations of the feature vector and to its label\. Again, tight upper bounds on the convergence rate of the classification error probability can be derived, without using SDA, such that this rate depends on 2d\_a\.

## Curvature\-Dependent Lower Bounds for Frank\-Wolfe

**Authors:** Jannis Halbey; Christophe Roux; Sebastian Pokutta

**ID:** 154986 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9QiqOqCKsr>) | [PDF](<https://openreview.net/pdf?id=9QiqOqCKsr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154986>)

The Frank\-Wolfe \(FW\) algorithm achieves a convergence rate of $\\mathcal\{O\}\(1/T\)$ for smooth convex optimization over compact convex domains, accelerating to $\\mathcal\{O\}\(1/T^2\)$ when both the objective and the feasible set are strongly convex\. This acceleration extends beyond strong convexity: Kerdreux et al\. \(2021a\} proved rates of $\\mathcal\{O\}\(T^\{\-p/\(p\-1\)\}\)$ over $p$\-uniformly convex feasible sets, a class that interpolates between strongly convex sets and more general curved domains such as $\\ell\_p$ balls\. In this work, we establish a matching $\\Omega \(T^\{\-p/\(p\-1\)\}\)$ lower bound for every $p\\ge 3$ under exact line search or short steps, and extend the lower bound to objectives satisfying a Hölderian error bound\. The proofs analyze the dynamics of FW iterates on simple instances and hence are not limited to the high\-dimensional setting, unlike information\-theoretic lower bounds\.

## Beyond Bounded Variance: Variance\-Reduced Normalized Methods for Nonconvex Optimization under Blum\-Gladyshev Noise

**Authors:** Antesh Upadhyay; Arda Fazla; Abolfazl Hashemi

**ID:** 150036 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lFix7rA9Yq>) | [PDF](<https://openreview.net/pdf?id=lFix7rA9Yq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150036>)

We study nonconvex stochastic optimization under the Blum\-Gladyshev \($\\mathsf\{BG\}$\-0\) noise model, where the stochastic gradient variance grows quadratically with the distance from the initialization\. We consider this problem under both standard smoothness and the symmetric generalized\-smoothness framework, which captures objectives whose local curvature can scale with the gradient norm\. We prove that normalized stochastic gradient descent with momentum, using only one stochastic gradient per iteration, converges under $\\mathsf\{BG\}$\-0 noise with oracle complexity $\\mathcal\{O\}\(\\varepsilon^\{\-6\}\)$\. This rate holds both for standard smoothness and for $\\alpha$\-symmetric generalized smoothness, showing that generalized smoothness is rate\-neutral for normalized momentum in this setting\. We then study a variance\-reduced normalized STORM method\. Under mean\-square smoothness and sharp initialization, the method achieves the minimax optimal $\\mathcal\{O\}\(\\varepsilon^\{\-4\}\)$ complexity, matching the lower bound\. Under expected $\\alpha$\-symmetric generalized smoothness, the STORM recursion couples gradient\-dependent smoothness with distance\-dependent noise, leading to complexity $\\mathcal\{O\}\(\\varepsilon^\{\-\(4\+\\alpha\)\}\)$ for $\\alpha \\in \(0,1\)$ and $\\mathcal\{O\}\(\\varepsilon^\{\-5\}\)$ for $\\alpha=1$\. When the distance\-growth parameter in the noise model vanishes, our guarantees recover the standard bounded\-variance rates: $\\mathcal\{O\}\(\\varepsilon^\{\-4\}\)$ for momentum, $\\mathcal\{O\}\(\\varepsilon^\{\-3\}\)$ for variance reduction, and $\\mathcal\{O\}\(\\varepsilon^\{\-2\}\)$ in the deterministic case\. To our knowledge, these are the first convergence guarantees for normalized methods in non\-convex stochastic optimization under $\\mathsf\{BG\}$\-0 noise without bounded domains, increasing batch sizes, or explicit anchoring, covering both standard and generalized smoothness regimes\.

## Unified High\-Probability Analysis of Stochastic Variance\-Reduced Estimation

**Authors:** Zhankun Luo; Antesh Upadhyay; M\. B Sahin; Sang Bin Moon; Anuran Makur; Abolfazl Hashemi

**ID:** 150668 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gMtipgueZ4>) | [PDF](<https://openreview.net/pdf?id=gMtipgueZ4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150668>)

Stochastic estimators are fundamental to large\-scale optimization, where population quantities must be inferred from noisy oracle observations\. Although influential methods such as momentum, SPIDER, STORM, and PAGE have been highly successful, their analyses are largely estimator\-specific and expectation\-based, obscuring the structural tradeoffs that determine reliability\. In this paper, we develop a unified framework for stochastic variance\-reduced estimation based on a recursion with three components: memory retention, reset probability, and a correction term for iterate movement\. This framework recovers several classical estimators, motivates new second\-order variants, and yields a bias\-variance decomposition of estimation error\. Our main result is a unified high\-probability bound proved using a new dimension\-free vector\-valued Freedman inequality, valid for smooth normed spaces involving random sums of vector martingales\. The result applies in both Euclidean and non\-Euclidean settings, including the analysis of mirror\-descent\-based methods in Banach spaces\. As applications, we obtain high\-probability oracle complexities for unconstrained optimization with mirror descent, establishing the logarithmic dependence on the confidence level\. We also derive the first $\\tilde\{\\mathcal\{O\}\}\(\\varepsilon^\{\-3\}\)$ oracle\-complexity bounds for stochastic optimization with expectation constraints, improving upon the existing $\\tilde\{\\mathcal\{O\}\}\(\\varepsilon^\{\-4\}\)$ complexity by leveraging variance\-reduced estimation for the first time in this setting\.

## Towards Settling the Complexity of Non\-Euclidean Parallel Convex Optimization

**Authors:** Xin Jennifer Chen; Andrei Graur; Aaron Sidford; Chenyi Zhang

**ID:** 152983 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Osw9F2KQ2g>) | [PDF](<https://openreview.net/pdf?id=Osw9F2KQ2g>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152983>)

In this paper, we provide improved bounds on the complexity of solving $\\ell\_p$\-Lipchitz convex optimization problem in parallel\. We lower bound the depth of highly\-parallel algorithms, i\.e\., the number of rounds required by a parallel algorithm making $O\(\\mathrm\{poly\}\(d\)\)$ queries per round to compute an $\\epsilon$\-approximate minimizer of a $\\ell\_p$\-Lipschitz, $d$\-dimensional convex function over the unit $\\ell\_p$ ball\. We provide a framework for proving lower bounds for parallel $\\ell\_p$\-Lipschitz convex optimization that generalizes prior lower bound proofs and for all $p \\in \(1,\\infty\)$ \(other than 2\) improves the depth for which it can be shown that no super\-polylogarithmic improvement over sequential algorithms is possible\. We also prove a variety of new lower bounds for $p&gt;2$\. Notably, for $p=\\infty$, we establish the near optimal parallel complexity of the class of ball\-acceleration methods up to depth $\\tilde\{O\}\(\\sqrt\{d\}\)$, which is the first near\-optimality result in the parallel convex optimization setting for an algorithm other than mirror descent\. Additionally, by providing new algorithms we characterize the optimal depth needed to solve to accuracy $\\epsilon = d^\{\-1/4\}$ for all $p \\geq 2$ \(up to polylogarithmic factors\)\. We also provide extensions of our lower bounds to parallel quantum $\\ell\_p$\-Lipschitz convex optimization\.

## Optimal and Efficient Contextual Combinatorial Semi\-bandits with General Function Approximation

**Authors:** Hao Qin; Chicheng Zhang

**ID:** 155961 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1XBZJBTBc2>) | [PDF](<https://openreview.net/pdf?id=1XBZJBTBc2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155961>)

We study the contextual combinatorial semi\-bandit \(CCSB\) problem with general reward function approximation\. At each round, the learner observes a context, selects a combinatorial action consisting of a subset of basic arms, and receives the reward of each selected arm; the goal is to maximize the cumulative reward over time\. We propose SquareCB\.Comb, a computationally efficient algorithm that, at each round, solves a convex optimization problem to sample a combinatorial action that balances exploration and exploitation\. SquareCB\.Comb scales to large arm sets and imposes no structural assumptions on the action set beyond a cardinality bound of $m$ on each combinatorial action\. We prove that SquareCB\.Comb achieves a minimax optimal regret bound of $\\tilde\{O\}\{\\sqrt\{m A T \\log \|\\mathcal\{F\}\|\}\}$, where $A$ is the number of arms, $m$ is the maximum number of arms in a combinatorial action, $T$ is the time horizon, and $\\mathcal\{F\}$ is the reward function class\. In the realizable setting, this bound matches the state\-of\-the\-art regret guarantees achieved by policy search\-based algorithms in the more restricted slate recommendation settings, while simultaneously generalizing to arbitrary combinatorial action structures and general reward function approximation\.

## Accelerating Inference of Discrete Autoregressive Normalizing Flows by Selective Jacobi Decoding

**Authors:** Jiaru Zhang; Juanwu Lu; Xiaoyu Wu; Ziran Wang; Ruqi Zhang

**ID:** 156738 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156738>)

Discrete normalizing flows are promising generative models with advantages such as analytical log\-likelihood computation and end\-to\-end training\. However, the architectural constraints to ensure invertibility and tractable Jacobian computation limit their expressive power and practical usability\. Recent advancements utilize autoregressive modeling, significantly enhancing expressive power and generation quality\. Nevertheless, such sequential modeling inherently restricts parallel computation during inference, leading to slow generation that impedes practical deployment\. In this paper, we first identify that strict sequential dependency in inference is unnecessary to generate high\-quality samples\. We observe that sub\-variables in sequential modeling can also be approximated without strictly conditioning on all preceding sub\-variables\. Moreover, the models tend to exhibit low dependency redundancy in the initial layer and higher redundancy in subsequent layers\. Leveraging these observations, we propose to selectively use Jacobi decoding strategy that accelerates its autoregressive inference through parallel iterative optimization\. Theoretical analyses demonstrate the method's superlinear convergence rate and guarantee that the number of iterations required is no greater than the original sequential approach\. Empirical evaluations across multiple datasets validate the generality and effectiveness of our acceleration technique, achieving up to 4\.7 times faster inference on modern normalizing flow models while preserving generation quality\.

## Constraint\-Aware Influence Estimation in Deep Constrained Learning

**Authors:** Xin Wang; R\.Tyrrell Rockafellar; Xuegang Ban

**ID:** 155081 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8au0CJzVts>) | [PDF](<https://openreview.net/pdf?id=8au0CJzVts>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155081>)

Constrained learning has been increasingly applied to various domains to ensure explicit feasibility requirements due to fairness, safety, robustness, regularization, and physics or logic constraints\. Understanding how training samples influence the solution \(e\.g\., learned parameters\) of constrained learning is crucial for interpretability and robustness\. The classical influence function may become unreliable in constrained settings: data perturbations can reshape both the objective and the feasible region, leading to estimates that violate feasibility\. In response, we propose the Directional Influence Function \(DIF\), a new estimator that explicitly incorporates the constraints into influence estimation\. DIF formulates the optimality conditions of constrained learning as a variational inequality \(VI\) and analyzes how perturbing training data affects this VI\. We validate DIF in constrained linear regression and demonstrate that it recovers leave\-one\-out retraining results, whereas IF and penalty\-based IF exhibit significant bias\. We further apply DIF to fairness\-constrained CNNs, where DIF accurately predicts test loss changes under data removal and aligns closely with actual retraining\. Our results establish DIF as an efficient and reliable tool for data attribution in constrained learning\.

## Nonconvex Decentralized Stochastic Bilevel Optimization under Heavy\-Tailed Noise

**Authors:** Xinwen Zhang; Yihan Zhang; Heng Liang; Hongchang Gao

**ID:** 156022 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=15yIjsQCrh>) | [PDF](<https://openreview.net/pdf?id=15yIjsQCrh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156022>)

Existing decentralized stochastic optimization methods  assume the lower\-level loss function is strongly convex and the stochastic gradient noise has finite variance\. These strong assumptions typically are not satisfied in real\-world machine learning models\. For example, learning on language data typically leads to heavy\-tailed gradient\.  To address these limitations, we develop a novel decentralized stochastic bilevel optimization algorithm for the nonconvex bilevel optimization problem under heavy\-tailed noise\. Specifically, we develop a normalized stochastic variance\-reduced bilevel gradient descent algorithm, which does not rely on any clipping operation\. Moreover, we establish its convergence rate by innovatively bounding interdependent gradient sequences under heavy\-tailed noise for nonconvex decentralized bilevel optimization problems\. As far as we know, this is the first decentralized bilevel optimization algorithm with rigorous theoretical guarantees under heavy\-tailed noise\. The extensive experimental results confirm the effectiveness of our algorithm in handling heavy\-tailed noise\.

## $\\gamma$\-weakly $\\theta$\-up\-concavity: A Unified Framework for Non\-Convex Optimization Beyond DR\-Submodular and OSS Functions

**Authors:** Mohammad Pedramfar; Vaneet Aggarwal

**ID:** 150269 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jQTFBOtCPz>) | [PDF](<https://openreview.net/pdf?id=jQTFBOtCPz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150269>)

Optimizing non\-convex functions is a fundamental challenge across machine learning and combinatorial optimization\. We introduce and study $\\gamma$\-weakly $\\theta$\-up\-concavity, a novel first\-order condition that characterizes a broad class of such functions\. This condition provides a powerful unifying framework, strictly generalizing both DR\-submodular and One\-Sided Smooth \(OSS\) functions while capturing broader forms of scale\-dependent curvature, including accumulating\-then\-diminishing returns and flat\-start behavior\. Our central theoretical contribution demonstrates that $\\gamma$\-weakly $\\theta$\-up\-concave functions are upper\-linearizable: for any feasible point, we can construct a linear surrogate whose gains provably approximate the original non\-linear objective\. A key technical contribution is a nonuniform upper\-linearization argument yielding approximation coefficients that depend explicitly on the curvature parameters and the geometry of the feasible region\. This linearizability yields immediate and unified approximation guarantees for a wide range of problems\. Specifically, we obtain unified approximation guarantees for offline optimization as well as static and dynamic regret bounds in online settings via standard reductions to linear optimization\. Moreover, our framework recovers the optimal approximation coefficient for DR\-submodular maximization and improves existing approximation coefficients for OSS optimization, particularly over matroid constraints\.

## Riemannian Bilevel Optimization under the Polyak–Łojasiewicz Condition

**Authors:** Zhixuan Li; Yuyang Zhang; Luke Jones; Muztaba Syed; William Chang; Andi Han

**ID:** 154402 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DqfoM1UJnq>) | [PDF](<https://openreview.net/pdf?id=DqfoM1UJnq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154402>)

This paper studies bilevel optimization on Riemannian manifolds where the upper\-level objective is nonconvex and the lower\-level problem satisfies a Riemannian Polyak \- Łojasiewicz condition rather than geodesic strong convexity\. The classical hypergradient formula then breaks down, since the lower\-level Hessian may be singular or indefinite away from the minimizer\. We address this with an intrinsic regularized tangent\-space formulation based on spectral clipping, and develop a Riemannian bilevel algorithm that avoids Hessian\-inverse solves and inner\-loop differentiation\. We establish an $O\(1/T\)$ rate on the averaged squared Riemannian gradient mapping and $O\(\\varepsilon^\{\-1\}\)$ iteration complexity, and extend the method to the stochastic finite\-sum setting\. Experiments on Stiefel, Grassmannian, and Poincar\\'e\-ball problems with rank\-deficient Hessians \(BCI\~IV\-2a, UCI Superconductivity\) and Stiefel\-constrained meta\-learning on MiniImageNet show that the proposed method is the only one whose linear\-system error stays at machine precision and whose Riemannian gradient norm decreases monotonically, while Hessian\-inversion and Neumann\-series baselines fail to descend; the stochastic complexity exhibits the predicted $\\Theta\(1/B\)$ decay\.

## Fully Distributed Tâtonnement for Chores Markets

**Authors:** Bhaskar Ray Chaudhury; Christian Kroer; Ruta Mehta; Tianlong Nan

**ID:** 154377 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E0qPQ0rDjg>) | [PDF](<https://openreview.net/pdf?id=E0qPQ0rDjg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154377>)

We study price\-adjustment dynamics for computing competitive equilibria \(CE\) in Fisher markets with chores\. Unlike in classical goods markets, prices in chores markets are payments for taking on undesirable tasks, and natural excess\-demand dynamics can fail; even the naïve analogue of Walrasian tâtonnement may diverge\. Recent work of Chaudhury et al\. \(2025\) overcomes this obstacle via \\emph\{relative tâtonnement\}, which subtracts the average excess\-demand signal from the excess demand vector\. This recovers convergence, but at the cost of coupling the price updates across all chores\. This leaves open whether such global coupling is inherent, or whether convergent tâtonnement can be recovered through a genuinely local update in which each chore reacts only to its own excess demand\.      We answer this question affirmatively through \\emph\{multiplicative tâtonnement\}, a fully distributed dynamics in which each chore price is updated using only its current price and its own excess\-demand signal\. Although the update contains no explicit normalization term, Walras' law and the multiplicative form of the update implicitly preserve the relevant aggregate price geometry\. We prove that multiplicative tâtonnement converges to a CE in any chores Fisher market with continuous, convex, and 1\-homogeneous \(CCH\) disutilities\. For convex CES disutilities, we further prove an approximate\-CE convergence rate with the same O\(1/\\varepsilon^2\) dependence as relative tâtonnement, but with improved dependence on problem constants\. Experiments on real\-world and simulated instances show that multiplicative tâtonnement is substantially faster in practice, often by an order of magnitude\.

## A Provably Convergent and Practical Algorithm for Gromov–Wasserstein Optimal Transport

**Authors:** Ling Liang; Lei Yang

**ID:** 148839 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=umKsf7P52m>) | [PDF](<https://openreview.net/pdf?id=umKsf7P52m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148839>)

Gromov\-\-Wasserstein optimal transport \(GWOT\) aligns metric measure spaces by matching their within\-domain relational structures, but large\-scale GWOT remains challenging because its objective is nonconvex and projection onto the transport polytope is often solved only approximately in practice\. This leads to a gap between practical projected\-gradient implementations and convergence theory, which typically assumes exact projections\. For squared\-loss GWOT, we propose an inexact projected\-gradient framework with a verifiable feasibility\-residual\-based inexact condition for the projection subproblem\. This condition is directly computable and avoids unknown quantities such as the exact projection point\. Under this implementable condition, we prove subsequential convergence to stationary points and, with a mild tolerance\-decay condition, convergence of the whole sequence\. The resulting method retains the simplicity and sparsity of projected\-gradient schemes while providing rigorous convergence guarantees, turning projected\-gradient methods into a principled and scalable approach for GWOT with provable reliability\.

## Sample complexity of stochastic optimization with integer variables

**Authors:** Hongyu Cheng; Yinghao Zheng; Marco Molinaro; Amitabh Basu

**ID:** 151103 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cyH7eWP6OZ>) | [PDF](<https://openreview.net/pdf?id=cyH7eWP6OZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151103>)

We establish sample complexity results for stochastic optimization over the integers, especially with a view to understand the complexity with respect to the corresponding continuous optimization problem\. We show that integer optimization can sometimes require strictly more samples and sometimes strictly smaller number of samples, depending on the structure of the objective and constraints\.  1\. For Lipschitz objectives over subsets of the $\\ell\_\\infty$ ball, the statistical complexity of general stochastic mixed\-integer, nonlinear, nonconvex optimization is exactly the same as stochastic linear optimization with just bound constraints\. 2\. For Lipschitz objectives over subsets of the $\\ell\_2$ ball, we show that integer optimization can require strictly \*smaller\* sample size compared to the continuous setting in a certain regime\. To get to this result, we also establish tight sample complexity results for nonconvex continuous stochastic optimization which, to the best of our knowledge, do not appear in prior work\. 3\. For strongly convex, smooth objectives, integer optimization has high statistical complexity compared to the continuous setting\. In particular, we show that integer optimization requires $\\Omega\(1/\\epsilon^2\)$ samples to report an $\\epsilon$\-approximate solution, compared to the well\-known $O\(1/\\epsilon\)$ sample complexity from the continuous optimization literature\.

## Optimal Rates for Pure $\\varepsilon$\-Differentially Private Stochastic Convex Optimization with Heavy Tails

**Authors:** Andrew Lowy

**ID:** 148362 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yRKg6vh4uv>) | [PDF](<https://openreview.net/pdf?id=yRKg6vh4uv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148362>)

We study stochastic convex optimization \(SCO\) with heavy\-tailed gradients under pure $\\varepsilon$\-differential privacy \(DP\)\. Instead of assuming a bound on the worst\-case Lipschitz parameter of the loss, we assume only a bounded $k$\-th moment\. This assumption allows for unbounded, heavy\-tailed stochastic gradient distributions, and can yield sharper excess risk bounds\. Prior work characterized the minimax optimal rate for $\\rho$\-zero\-concentrated DP SCO up to logarithmic factors in this setting, but the pure $\\varepsilon$\-DP case has remained open\. We characterize the minimax optimal excess\-risk rate for pure $\\varepsilon$\-DP heavy\-tailed SCO up to logarithmic factors\. Our algorithm achieves this rate in polynomial time with high probability\. Moreover, it runs in deterministic polynomial time when the worst\-case Lipschitz parameter is polynomially bounded\. For important structured problem classes \-\-\- including hinge/ReLU\-type and absolute\-value losses on Euclidean balls, ellipsoids, and polytopes \-\-\- we achieve deterministic polynomial time even when the worst\-case Lipschitz parameter is infinite\. Our approach is based on a novel framework for privately optimizing Lipschitz extensions of the empirical loss\. We complement our upper bound with a nearly matching high\-probability lower bound\.

## How Accurately Can a Gaussian Approximate Stochastic Approximation Iterates?

**Authors:** Shaan U Haque; Zedong Wang; Zixuan Zhang; Siva Theja Maguluri

**ID:** 154488 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DE5fL6A9eH>) | [PDF](<https://openreview.net/pdf?id=DE5fL6A9eH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154488>)

Stochastic approximation \(SA\) is a method for finding the root of an operator perturbed by noise\. The focus of this paper is studying the distribution of SA iterates in finite time\. In general, it is not possible to characterize the exact distribution, and therefore our goal is to find an approximation which can yield useful tail bounds\. Inspired by the rich literature on the asymptotic normality of rescaled SA iterates, we approximate the pre\-limit distributions by a sequence of Gaussians whose covariance is recursively defined\. In particular, we establish explicit bounds on the Wasserstein\-1 distance between the rescaled iterate at time $k$ and the aforementioned Gaussian for various choices of step\-sizes\. Since these covariances converge to the classical asymptotic limit, our analysis also provides a convergence rate for asymptotic normality as a by\-product\. As an immediate consequence of our bounds, we obtain tail bounds on the error of SA iterates at any time\. Finally, we establish the sharpness of our rates by providing matching lower bounds and validate our findings through simulations\.    We obtain the sharp rates by first studying the convergence rate of the discrete Ornstein–Uhlenbeck \(O\-U\) process driven by general noise, whose stationary distribution is identical to the limiting Gaussian distribution of the rescaled SA iterates\. We believe that this is of independent interest, given its connection to sampling literature\. The analysis involves adapting Stein’s method for Gaussian approximation to handle the matrix weighted sum of i\.i\.d\. random variables\. The desired finite\-time bounds for SA are obtained by characterizing the error dynamics between the rescaled SA iterate and the discrete time O\-U process and combining it with the convergence rate of the latter process\.

## Beyond Maximum Likelihood: Variational Inequality Estimation for Generalized Linear Models

**Authors:** Linglingzhi Zhu; Jonghyeok Lee; Yao Xie

**ID:** 152448 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T2rkOi7SfE>) | [PDF](<https://openreview.net/pdf?id=T2rkOi7SfE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152448>)

Generalized linear models \(GLMs\) are fundamental tools for statistical modeling, with maximum likelihood estimation \(MLE\) serving as the classical approach for parameter inference\. While MLE performs well for canonical GLMs, it can become computationally challenging in more general settings with non\-canonical, non\-smooth, or nonlinear link functions, where the resulting optimization landscape may be ill\-conditioned, non\-convex, or non\-differentiable\. In this paper, we study an alternative estimation framework based on variational inequalities \(VIs\), which formulates GLM estimation through an operator\-based equilibrium condition rather than likelihood minimization\. We analyze the VI estimator from a statistical perspective and establish finite\-sample error bounds and asymptotic normality under mild regularity conditions, together with convergence guarantees for fixed\-point and stochastic approximation algorithms\. The framework accommodates a broad class of link functions, including non\-canonical and non\-monotone cases satisfying a strong Minty\-type condition, and extends naturally to generalized additive models via basis expansion\. Numerical experiments demonstrate that the VI approach achieves competitive finite\-sample accuracy and improved numerical stability relative to MLE, particularly in GLMs and GAMs with non\-canonical or non\-smooth link functions\.

## Decision\-Focused Learning in MDPs: An Occupancy Measure Approach

**Authors:** Zihao Zhao; Ashwath K Karunakaram; Ali Eshragh; Yuexing Li; Kai Wang

**ID:** 149225 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rzZPOKJV34>) | [PDF](<https://openreview.net/pdf?id=rzZPOKJV34>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149225>)

In this work, we consider decision\-focused learning \(DFL\) for a Markov decision process \(MDP\), where existing methods differentiate through the KKT conditions of the Bellman equation and require solving a linear system over all state\-action pairs, limiting its scalability\. We address this by reformulating the MDP as an occupancy measure\-based linear program \(LP\), whose feasible region is induced by predicted dynamics, and we derive a closed\-form gradient by identifying the active constraints in the feasible polyhedron via the pivoting algorithm\.  This occupancy measure\-based LP layer raises two challenges: \(1\) LP's solution gradient is discontinuous when active constraints change, and \(2\) the LP backward cost still scales with the state size, which is costly for large or continuous state spaces\. We address the challenges with an augmented Lagrangian surrogate and smooth the boundary jumps by random row sketching of the constraints, and a learnable soft state\-aggregation layer and its function\-approximation generalization that scales the LP to large finite and continuous\-state MDPs\. Across multiple tasks, our methods reach lower regret than KKT\-based DFL and two\-stage baselines with significantly lower computation cost\. The source code for all experiments is available \[here\]\(https://anonymous\.4open\.science/r/State\_Aggregation\_Project\-3E64/\)\.

