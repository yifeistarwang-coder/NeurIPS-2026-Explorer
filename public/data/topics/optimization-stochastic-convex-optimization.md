# Optimization / Stochastic &amp; Convex Optimization

优化 / 随机与凸优化

67 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Normalized SGD in the Convex Regime: First High\-Probability Guarantees and Momentum Extension

**Authors:** Savelii Chezhegov; Eduard Gorbunov

**ID:** 150821 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=f322xYHDgN>) | [PDF](<https://openreview.net/pdf?id=f322xYHDgN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150821>)

_Abstract unavailable from the accessible public sources._

## What’s in a Smoothness Constant? Tight Rates for Local SGD with Bounded Second\-order Heterogeneity

**Authors:** Kumar Kshitij Patel; Rustem Islamov; Sebastian Stich; Aurelien Lucchi; Eduard Gorbunov; Lingxiao Wang

**ID:** 148945 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=u0RipLyQNB>) | [PDF](<https://openreview.net/pdf?id=u0RipLyQNB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148945>)

_Abstract unavailable from the accessible public sources._

## Exact Instance Compression for Convex Empirical Risk Minimization via Color Refinement

**Authors:** Bryan Zhu; Ziang Chen

**ID:** 153709 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JM5piPXaA4>) | [PDF](<https://openreview.net/pdf?id=JM5piPXaA4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153709>)

Empirical risk minimization \(ERM\) can be computationally expensive, with standard solvers scaling poorly even in the convex setting\. We propose a novel lossless compression framework for convex ERM based on color refinement, extending prior work from linear programs and convex quadratic programs to general differentiable convex optimization problems\. We develop concrete algorithms for a range of models, including linear and polynomial regression, binary and multiclass logistic regression, regression with elastic\-net regularization, and kernel methods such as kernel ridge regression and kernel logistic regression\. Numerical experiments on representative datasets demonstrate the effectiveness of the proposed approach\.

## Nonconvex Decentralized Stochastic Bilevel Optimization under Heavy\-Tailed Noise

**Authors:** Xinwen Zhang; Yihan Zhang; Heng Liang; Hongchang Gao

**ID:** 156022 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=15yIjsQCrh>) | [PDF](<https://openreview.net/pdf?id=15yIjsQCrh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156022>)

Existing decentralized stochastic optimization methods  assume the lower\-level loss function is strongly convex and the stochastic gradient noise has finite variance\. These strong assumptions typically are not satisfied in real\-world machine learning models\. For example, learning on language data typically leads to heavy\-tailed gradient\.  To address these limitations, we develop a novel decentralized stochastic bilevel optimization algorithm for the nonconvex bilevel optimization problem under heavy\-tailed noise\. Specifically, we develop a normalized stochastic variance\-reduced bilevel gradient descent algorithm, which does not rely on any clipping operation\. Moreover, we establish its convergence rate by innovatively bounding interdependent gradient sequences under heavy\-tailed noise for nonconvex decentralized bilevel optimization problems\. As far as we know, this is the first decentralized bilevel optimization algorithm with rigorous theoretical guarantees under heavy\-tailed noise\. The extensive experimental results confirm the effectiveness of our algorithm in handling heavy\-tailed noise\.

## Strongly Adaptive Online Learning with Time\-Varying Movement Cost

**Authors:** Andrew Jacobsen; Hao Qiu; Emmanuel Esposito; Mengxiao Zhang

**ID:** 152024 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W60Ur3HSOV>) | [PDF](<https://openreview.net/pdf?id=W60Ur3HSOV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152024>)

We study strongly adaptive regret for Online Convex Optimization \(OCO\) with time\-varying movement costs, a setting that evaluates a learner's performance over arbitrary sub\-intervals\. This framework captures complex sequential decision\-making problems where both the environment and the cost of switching decisions fluctuate over time\. We propose a novel algorithm which, for any interval $\[a,b\] \\subseteq \[T\]$, achieves a data\-dependent regret bound of $ \\widetilde\{\\mathcal\{O\}\}\\left\( \\sqrt\{\(D^2\+DP\_\{\[a,b\]\}\)\\sum\_\{t \\in \[a,b\]\}\(\\\\\|g\_t\\\\\|^2\+\\lambda\_t\\\\\|g\_t\\\\\|\)\} \\right\) $, where $D$ is the diameter of the decision domain, $P\_\{\[a,b\]\}$ is the path length of the comparator sequence over $\[a,b\]$, $g\_t$ is the gradient of the loss, and $\\lambda\_t$ is the movement\-cost coefficient at round $t$\. Key to our approach is a novel reduction to sleeping experts with movement costs, a previously unexplored variant that is of independent interest\. As a result of this development, we further establish the first strongly\-adaptive guarantees under delayed feedback\.  Our approach also naturally extends to OCO with time\-varying memory, where we obtain  strongly\-adaptive guarantees which improve the best\-known bounds\.

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

## Decision\-Focused Learning in MDPs: An Occupancy Measure Approach

**Authors:** Zihao Zhao; Ashwath K Karunakaram; Ali Eshragh; Yuexing Li; Kai Wang

**ID:** 149225 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rzZPOKJV34>) | [PDF](<https://openreview.net/pdf?id=rzZPOKJV34>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149225>)

In this work, we consider decision\-focused learning \(DFL\) for a Markov decision process \(MDP\), where existing methods differentiate through the KKT conditions of the Bellman equation and require solving a linear system over all state\-action pairs, limiting its scalability\. We address this by reformulating the MDP as an occupancy measure\-based linear program \(LP\), whose feasible region is induced by predicted dynamics, and we derive a closed\-form gradient by identifying the active constraints in the feasible polyhedron via the pivoting algorithm\.  This occupancy measure\-based LP layer raises two challenges: \(1\) LP's solution gradient is discontinuous when active constraints change, and \(2\) the LP backward cost still scales with the state size, which is costly for large or continuous state spaces\. We address the challenges with an augmented Lagrangian surrogate and smooth the boundary jumps by random row sketching of the constraints, and a learnable soft state\-aggregation layer and its function\-approximation generalization that scales the LP to large finite and continuous\-state MDPs\. Across multiple tasks, our methods reach lower regret than KKT\-based DFL and two\-stage baselines with significantly lower computation cost\. The source code for all experiments is available \[here\]\(https://anonymous\.4open\.science/r/State\_Aggregation\_Project\-3E64/\)\.

## Towards Settling the Complexity of Non\-Euclidean Parallel Convex Optimization

**Authors:** Xin Jennifer Chen; Andrei Graur; Aaron Sidford; Chenyi Zhang

**ID:** 152983 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Osw9F2KQ2g>) | [PDF](<https://openreview.net/pdf?id=Osw9F2KQ2g>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152983>)

_Abstract unavailable from the accessible public sources._

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

## Dynamic Regret in Online Convex Optimization with Indicator Switching Costs

**Authors:** Naram Mhaisen; George Iosifidis

**ID:** 150727 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=frpCLd0FIr>) | [PDF](<https://openreview.net/pdf?id=frpCLd0FIr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150727>)

We study dynamic regret in online convex optimization with an \\emph\{indicator switching cost\}: a fixed penalty incurred whenever two consecutive decisions differ\. This captures startup overheads such as server activation, model deployment, and cache updates, and on a bounded domain it recovers norm\-based movement costs as a special case\. Existing guarantees for indicator costs handle only static comparators\. We show that a direct extension of these techniques to dynamic regret provably fails, motivating a different approach\. We propose a meta\-learning framework: a set of randomized lazy FTRL base learners restarted at dyadic time scales, aggregated by a movement\-aware master that mixes their proposal densities and samples actions via maximal coupling of consecutive mixtures\. The resulting algorithm satisfies, in expectation, $\\mathcal\{R\}^\{\\mathbf\{1\}\}\_T \\le \\tilde\{\\mathcal\{O\}\}\(\\min\\\{\\sqrt\{T\(S\_T\{\+\}1\)\},T^\{2/3\}\(P\_T\+1\)^\{1/3\}\\\}\)$, where $\\mathcal\{R\}^\{\\mathbf\{1\}\}\_T$ is the dynamic regret plus the cumulative indicator switching cost, $S\_T$ counts comparator switches, and $P\_T$ is the comparator path length\. The bound holds simultaneously for all sequences and requires no prior knowledge of $S\_T$ or $P\_T$: it is minimax\-optimal \(up to logarithmic factors\) for tracking piecewise\-constant comparators, and also captures frequently moving comparators with small total path length\.

## Take It or Leave It: Intent\-Controlled Partial Optimal Transport

**Authors:** Parth TRIPATHI; bertrand chapron; Fabrice collard; Nicolas Courty; ronan fablet

**ID:** 153778 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IjSvYhsV0a>) | [PDF](<https://openreview.net/pdf?id=IjSvYhsV0a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153778>)

While optimal transport \(OT\) enforces a rigid constraint by requiring two measures to be matched exactly, partial optimal transport relaxes this requirement by allowing mass to remain unmatched through a global budget, scalar rebate, or uniform rejection rule\. However, many applications call for more structured, pointwise rejection mechanisms, where the decision to leave mass unmatched depends on side\-specific reliability, support geometry, or external information about which components should participate in the comparison\. We introduce \\emph\{intent\-controlled partial optimal transport\} \(IC\-POT\), a targeted generalization of partial transport that replaces the global rejection paradigm with pointwise rejection costs over both measures\. We show that the resulting optimization problem admits a dual interpretation in terms of local acceptance thresholds and can be solved by recasting it as a balanced Kantorovich OT problem on an augmented support\. Beyond theoretical analysis, we demonstrate the practical relevance of IC\-POT in settings where rejection is driven by side information\. In positive\-unlabeled learning and open\-partial domain adaptation, incorporating pointwise rejection rules that encode statistical structure improves fixed baseline pipelines\. Finally, we motivate the use of IC\-POT with a geophysical practical case: multi\-modal satellite ocean measurements, for which physical and instrumental priors naturally inform the rejection mechanism and define the retrieved comparable signal information\.

## Constraint\-Aware Influence Estimation in Deep Constrained Learning

**Authors:** Xin Wang; R\.Tyrrell Rockafellar; Xuegang Ban

**ID:** 155081 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8au0CJzVts>) | [PDF](<https://openreview.net/pdf?id=8au0CJzVts>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155081>)

Constrained learning has been increasingly applied to various domains to ensure explicit feasibility requirements due to fairness, safety, robustness, regularization, and physics or logic constraints\. Understanding how training samples influence the solution \(e\.g\., learned parameters\) of constrained learning is crucial for interpretability and robustness\. The classical influence function may become unreliable in constrained settings: data perturbations can reshape both the objective and the feasible region, leading to estimates that violate feasibility\. In response, we propose the Directional Influence Function \(DIF\), a new estimator that explicitly incorporates the constraints into influence estimation\. DIF formulates the optimality conditions of constrained learning as a variational inequality \(VI\) and analyzes how perturbing training data affects this VI\. We validate DIF in constrained linear regression and demonstrate that it recovers leave\-one\-out retraining results, whereas IF and penalty\-based IF exhibit significant bias\. We further apply DIF to fairness\-constrained CNNs, where DIF accurately predicts test loss changes under data removal and aligns closely with actual retraining\. Our results establish DIF as an efficient and reliable tool for data attribution in constrained learning\.

## Adaptively Incorporating Directional Hints into Zeroth\-Order Optimization

**Authors:** Alexander Ryabchenko; Jian Qian; Wenlong Mou

**ID:** 149625 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ofyCInS0Mr>) | [PDF](<https://openreview.net/pdf?id=ofyCInS0Mr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149625>)

We study zeroth\-order optimization of non\-convex functions with the aid of directional hints, which are cheap but potentially inaccurate approximations of the true gradient direction, given by linear subspaces at each iteration\. To leverage these hints adaptively while maintaining robustness to their quality, we introduce Control\-Variate Zeroth\-Order Descent \(CV\-ZOD\), a new framework that refines the classical zeroth\-order gradient estimator with a control variate that can be set based on the directional hints\. We first show that the oracle algorithm that optimally sets the reference vector and step size at each iteration achieves a convergence rate that interpolates between the first\-order $O\(1/T\)$ rate and the zeroth\-order $O\(d/T\)$ rate, depending on the quality of the hints along the trajectory\. We then develop a practical variant of CV\-ZOD that achieves the same oracle guarantee up to logarithmic factors, without any prior knowledge of the hint quality\. We validate the method empirically on simulation\-based scientific optimization tasks, demonstrating sustained progress on nonconvex landscapes where zeroth\-order descent is slower and existing guided methods stall as guidance deteriorates\.

## $\\gamma$\-weakly $\\theta$\-up\-concavity: A Unified Framework for Non\-Convex Optimization Beyond DR\-Submodular and OSS Functions

**Authors:** Mohammad Pedramfar; Vaneet Aggarwal

**ID:** 150269 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jQTFBOtCPz>) | [PDF](<https://openreview.net/pdf?id=jQTFBOtCPz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150269>)

_Abstract unavailable from the accessible public sources._

## A Provably Convergent and Practical Algorithm for Gromov–Wasserstein Optimal Transport

**Authors:** Ling Liang; Lei Yang

**ID:** 148839 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=umKsf7P52m>) | [PDF](<https://openreview.net/pdf?id=umKsf7P52m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148839>)

Gromov\-\-Wasserstein optimal transport \(GWOT\) aligns metric measure spaces by matching their within\-domain relational structures, but large\-scale GWOT remains challenging because its objective is nonconvex and projection onto the transport polytope is often solved only approximately in practice\. This leads to a gap between practical projected\-gradient implementations and convergence theory, which typically assumes exact projections\. For squared\-loss GWOT, we propose an inexact projected\-gradient framework with a verifiable feasibility\-residual\-based inexact condition for the projection subproblem\. This condition is directly computable and avoids unknown quantities such as the exact projection point\. Under this implementable condition, we prove subsequential convergence to stationary points and, with a mild tolerance\-decay condition, convergence of the whole sequence\. The resulting method retains the simplicity and sparsity of projected\-gradient schemes while providing rigorous convergence guarantees, turning projected\-gradient methods into a principled and scalable approach for GWOT with provable reliability\.

## Stochastic Optimization with Random Search

**Authors:** El Mahdi Chayti; Taha EL BAKKALI EL KADI; Omar Saadi; Martin Jaggi

**ID:** 153206 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N3J3P9FOP9>) | [PDF](<https://openreview.net/pdf?id=N3J3P9FOP9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153206>)

_Abstract unavailable from the accessible public sources._

## Stochastic Optimization with Random Search

**Authors:** El Mahdi Chayti; Taha EL BAKKALI EL KADI; Omar Saadi; Martin Jaggi

**ID:** 153206\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153206

[Paper](<https://openreview.net/forum?id=N3J3P9FOP9>) | [PDF](<https://openreview.net/pdf?id=N3J3P9FOP9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153206>)

_Abstract unavailable from the accessible public sources._

## Distributed Online Convex Optimization with Compressed Communication: Optimal Regret and Applications

**Authors:** Sifan Yang; Danyue Li; Lijun Zhang

**ID:** 151072\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151072

[Paper](<https://openreview.net/forum?id=dA7fbAenM6>) | [PDF](<https://openreview.net/pdf?id=dA7fbAenM6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151072>)

Distributed online convex optimization \(D\-OCO\) is a powerful paradigm for modeling distributed scenarios with streaming data\.  However, the communication cost between local learners and the central server is substantial in large\-scale applications\. To alleviate this bottleneck, we initiate the study of  D\-OCO with compressed communication\. Firstly, to quantify the compression impact, we establish the $\\Omega\(\\delta^\{\-1/2\}\\sqrt\{T\}\)$ and $\\Omega\(\\delta^\{\-1\}\\log\{T\}\)$ lower bounds for convex and strongly convex loss functions, respectively, where $\\delta \\in \(0,1\]$ is the compression ratio\.  Secondly, we propose an optimal algorithm, which enjoys regret bounds of $O\(\\delta^\{\-1/2\}\\sqrt\{T\}\)$ and $O\(\\delta^\{\-1\} \\log T\)$ for convex and strongly convex loss functions, respectively\. Our method innovatively incorporates the  error feedback mechanism into the Follow\-the\-Regularized\-Leader framework to address the coupling between the compression error and the projection error\. Furthermore, we employ the online compression strategy to mitigate the accumulated error arising from the bidirectional compression\. Our online method has great generality, and can be extended to the offline stochastic setting via online\-to\-batch conversion\.  We establish convergence rates of $O\(\\delta^\{\-1/2\}T^\{\-1/2\}\)$ and $O\(\\delta^\{\-1\} T^\{\-1\}\)$ for convex and strongly convex loss functions, respectively, providing the first  guarantees for distributed non\-smooth optimization with compressed communication and domain constraints\.

## Median\-of\-Means under Structured Heavy\-Tailed Noise: High\-Probability Bounds for Clipped Stochastic Optimization

**Authors:** Ahmed El Bajdali; Ohad Shamir; Samuel Horváth; Eduard Gorbunov

**ID:** 148757\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148757

[Paper](<https://openreview.net/forum?id=vGEUrQdO7l>) | [PDF](<https://openreview.net/pdf?id=vGEUrQdO7l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148757>)

Optimization under heavy\-tailed stochastic noise remains a major challenge in modern machine learning, where classical moment assumptions often fail to capture realistic gradient distributions\. In this work, we revisit robust estimation techniques and provide a systematic analysis of the Median\-of\-Means \(MoM\) estimator under a structured noise model that interpolates between a symmetric heavy\-tailed distribution with bounded $\\beta$\-th moment \($\\beta \\in \(0, 1\]$\) and a mean\-zero distribution with bounded $\\alpha$\-th moment \($\\alpha \\in \(1, 2\]$\)\. We derive new upper bounds on the variance and bias of MoM in this setting, thereby extending the applicability of existing results beyond purely symmetric or bounded\-moment settings\. Building on these properties, we study clipped stochastic optimization methods with MoM gradient estimation and establish high\-probability convergence guarantees that hold for general $\\beta \\in \(0, 1\]$ and $\\alpha \\in \(1, 2\]$\. Our bounds match or improve upon prior complexity guarantees while requiring weaker distributional assumptions, and they reveal that bias only affects the final neighborhood of convergence\. Overall, this work advances the theoretical foundations for robust stochastic optimization in the presence of extreme gradient noise\.

## The Denoising Wrapper: A Modular Post\-Processing Framework for Noisy First\-Order Optimizers

**Authors:** Meisam Razaviyayn; Weiwei Kong; Grigoris Velegkas; Vahab Mirrokni

**ID:** 155970\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155970

[Paper](<https://openreview.net/forum?id=1UGggkyD1E>) | [PDF](<https://openreview.net/pdf?id=1UGggkyD1E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155970>)

Noisy gradient estimates are ubiquitous in machine learning, arising from stochastic sampling, distributed computations, or privacy\- preserving mechanisms like Differential Privacy \(DP\)\. This paper introduces a general, optimizer\-agnostic framework for denoising these estimates\. Our approach operates as a modular wrapper that intercepts noisy gradient observations and provides denoised estimates to the optimizer, requiring no internal modifications to algorithms like SGD or Adam\. We start by studying the problem of optimal denoising gradients in quadratic and cubic optimization problems\. We develop maximum likelihood estimation of gradient and Hessian of the objective\. We also develop other computationally\-efficient order optimal algorithms for denoising gradients in such a setting\. Finally, we utilize the developments for the cubic and quadratic setting to develop a more general denoising mechanisms for general smooth nonconvex optimization problems\. Theoretically, by leveraging higher\-order smoothness, we establish an improved convergence rate of $O\(T^\{\-12/19\}\)$ for smooth non\-convex optimization\. While our recursive algorithm requires two gradient queries per iteration, we show that the improved convergence rate yields a lower total oracle complexity than the standard $O\(T^\{\-1/2\}\)$ rate of SGD\. This implies the gain in convergence speed asymptotically outweighs the additional computational cost\. We apply our algorithm to various denoising problems, particularly nonconvex DP\-training\. Our experiments, including training private classifiers on CIFAR\-10, demonstrate significant improvements over  baselines\.

## Riemannian Bilevel Optimization under the Polyak–Łojasiewicz Condition

**Authors:** Zhixuan Li; Yuyang Zhang; Luke Jones; Muztaba Syed; William Chang; Andi Han

**ID:** 154402 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DqfoM1UJnq>) | [PDF](<https://openreview.net/pdf?id=DqfoM1UJnq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154402>)

_Abstract unavailable from the accessible public sources._

## Achieving Better Local Regret Bound for Online Non\-Convex Bilevel Optimization

**Authors:** Tingkai Jia; Haiguang Wang; Ting Wang; Cheng Chen

**ID:** 148523 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xFpqYVlNo9>) | [PDF](<https://openreview.net/pdf?id=xFpqYVlNo9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148523>)

Online bilevel optimization \(OBO\) has emerged as a powerful framework for many machine learning problems\. Prior works have developed several algorithms that minimize the standard bilevel local regret or the window\-averaged bilevel local regret of the OBO problem, but the optimality of existing regret bounds remains unclear\.  In this work, we establish optimal regret bounds for both settings\.  For standard bilevel local regret, we propose an algorithm with adaptive iteration strategy that achieves the optimal regret $\\Omega\(1\+V\_T\)$ with at most $O\(T\\log T\)$ total inner\-level gradient evaluations\. We further develop a fully single\-loop algorithm whose regret bound includes an additional gradient\-variation terms\. For the window\-averaged bilevel local regret, we design an algorithm that captures linear environmental variation through a novel window\-based analysis and achieves the optimal regret $\\Omega\(T/W^2\)$\.  The algorithm also supports an efficient single\-loop structure, achieving an $O\(T/W\)$ regret bound with $O\(WT\)$ total gradient evaluations\. Experiments validate our theoretical findings and demonstrate the practical effectiveness of the proposed methods\.

## A Provably Convergent and Practical Algorithm for Gromov–Wasserstein Optimal Transport

**Authors:** Ling Liang; Lei Yang

**ID:** 148839\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148839

[Paper](<https://openreview.net/forum?id=umKsf7P52m>) | [PDF](<https://openreview.net/pdf?id=umKsf7P52m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148839>)

Gromov\-\-Wasserstein optimal transport \(GWOT\) aligns metric measure spaces by matching their within\-domain relational structures, but large\-scale GWOT remains challenging because its objective is nonconvex and projection onto the transport polytope is often solved only approximately in practice\. This leads to a gap between practical projected\-gradient implementations and convergence theory, which typically assumes exact projections\. For squared\-loss GWOT, we propose an inexact projected\-gradient framework with a verifiable feasibility\-residual\-based inexact condition for the projection subproblem\. This condition is directly computable and avoids unknown quantities such as the exact projection point\. Under this implementable condition, we prove subsequential convergence to stationary points and, with a mild tolerance\-decay condition, convergence of the whole sequence\. The resulting method retains the simplicity and sparsity of projected\-gradient schemes while providing rigorous convergence guarantees, turning projected\-gradient methods into a principled and scalable approach for GWOT with provable reliability\.

## Gradient Descent’s Last Iterate is Often \(slightly\) Suboptimal

**Authors:** Guy Kornowski; Ohad Shamir

**ID:** 154735 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BPdZSMMob3>) | [PDF](<https://openreview.net/pdf?id=BPdZSMMob3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154735>)

_Abstract unavailable from the accessible public sources._

## Adam under Generalized Smoothness with Second\-Moment\-Type Stochastic Gradients

**Authors:** ruinan Jin; Difei Cheng; Ling Chen; Jun Luo; Hao Zhou; Youzhi Zhang

**ID:** 151271 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bchuh1xaSe>) | [PDF](<https://openreview.net/pdf?id=bchuh1xaSe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151271>)

It has been widely observed that Adam can remain stable even when the objective function deviates significantly from global smoothness\. However, under the generalized smoothness framework, existing theoretical analyses typically rely on strong tail assumptions on stochastic gradients, such as almost\-sure boundedness or sub\-Gaussianity\. Whether one can establish the convergence of Adam on generalized smooth objectives under only second moment information on the stochastic gradients, without imposing such strong concentration assumptions, was explicitly identified as an important open direction by \\citet\{li2023convex\}\. This paper gives an affirmative answer to this question under fairly general conditions\. Specifically, we prove that such strong tail assumptions are not necessary\. We show that the key mechanism by which Adam remains stable and achieves convergence under the \\\(L\_0\\\)\-\-\\\(L\_p\\\) generalized smoothness condition is the self\-normalization effect induced by its adaptive coordinate\-wise scaling\. Based on this mechanism, we prove that even under a very general stochastic\-gradient condition, namely a generalized second moment ABC condition that provides only second moment information, the stochastic trajectory of Adam remains in a locally well\-behaved smoothness region with stretched\-exponential tail decay\. As a consequence, we establish high\-probability convergence rate guarantees over the full range \\\(p&lt;2\\\), with a confidence dependence of order \\\(\\delta^\{\-1/2\}\\\), while the required stepsize calibration depends on \\\(\\delta\\\) only through polylogarithmic factors in \\\(\\polylog\(1/\\delta\)\\\)\. Furthermore, we construct a hard instance proving that, under only second\-moment information on the stochastic gradients, this \\\(\\delta^\{\-1/2\}\\\)\-type confidence dependence is sharp\. Finally, in the more favorable regime \\\(p&lt;1\\\), we combine the above trajectory control with polynomial\-growth estimates on rare events to further obtain convergence rate guarantees in expectation\.

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

## On the Last\-Iterate Convergence of Clipped Gradient Methods

**Authors:** Zijian Liu

**ID:** 148182 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zgEpuLdwBv>) | [PDF](<https://openreview.net/pdf?id=zgEpuLdwBv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148182>)

_Abstract unavailable from the accessible public sources._

## Bridging Graph Worlds: Neural Approximation of Gromov\-Wasserstein Distances

**Authors:** Dong Qiao; Chris Ding; Jicong Fan

**ID:** 151656 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z1aNhxbf76>) | [PDF](<https://openreview.net/pdf?id=Z1aNhxbf76>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151656>)

Graph\-structured data is crucial in various domains like biology and social networks\. Comparing graphs, which is a fundamental problem in graph data analysis, is nonetheless highly challenging\. Recently, the Gromov\-Wasserstein \(GW\) distance has provided a principled way to compare two graphs\. However, computing the GW distance involves solving a complex non\-convex optimization problem, making it computationally expensive, especially when the graphs are large\.  In this work, we propose a neural approximation of the GW distance, called NeuralGW\. In NeuralGW, we use a combination of a graph isomorphism network and a transformer to represent the nodes of two graphs as two sets of vectors, treated as two discrete distributions, on which we compute multiple maximum mean discrepancy values given by different kernels\. We then use a multilayer perceptron to convert the vector formed by these values into a single value, which is the prediction of the GW distance\. Once trained, the model allows for efficient inference, enabling fast structural comparisons between graphs across diverse domains\. We also provide a theoretical guarantee for the generalization ability of NeuralGW\. Experiments demonstrate the effectiveness and practical applicability of our approach on real\-world datasets, in comparison to baselines\.

## Sample complexity of stochastic optimization with integer variables

**Authors:** Hongyu Cheng; Yinghao Zheng; Marco Molinaro; Amitabh Basu

**ID:** 151103 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cyH7eWP6OZ>) | [PDF](<https://openreview.net/pdf?id=cyH7eWP6OZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151103>)

We establish sample complexity results for stochastic optimization over the integers, especially with a view to understand the complexity with respect to the corresponding continuous optimization problem\. We show that integer optimization can sometimes require strictly more samples and sometimes strictly smaller number of samples, depending on the structure of the objective and constraints\.  1\. For Lipschitz objectives over subsets of the $\\ell\_\\infty$ ball, the statistical complexity of general stochastic mixed\-integer, nonlinear, nonconvex optimization is exactly the same as stochastic linear optimization with just bound constraints\. 2\. For Lipschitz objectives over subsets of the $\\ell\_2$ ball, we show that integer optimization can require strictly \*smaller\* sample size compared to the continuous setting in a certain regime\. To get to this result, we also establish tight sample complexity results for nonconvex continuous stochastic optimization which, to the best of our knowledge, do not appear in prior work\. 3\. For strongly convex, smooth objectives, integer optimization has high statistical complexity compared to the continuous setting\. In particular, we show that integer optimization requires $\\Omega\(1/\\epsilon^2\)$ samples to report an $\\epsilon$\-approximate solution, compared to the well\-known $O\(1/\\epsilon\)$ sample complexity from the continuous optimization literature\.

## Complexity of Classical Acceleration for $\\ell\_1$\-Regularized PageRank

**Authors:** Kimon Fountoulakis; David Martínez\-Rubio

**ID:** 153053 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OO2ZfxkCzc>) | [PDF](<https://openreview.net/pdf?id=OO2ZfxkCzc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153053>)

_Abstract unavailable from the accessible public sources._

## Frank\-Wolfe Beyond 1/t Convergence

**Authors:** Sebastian Pokutta

**ID:** 156093 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0Q5L0kJ3W4>) | [PDF](<https://openreview.net/pdf?id=0Q5L0kJ3W4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156093>)

_Abstract unavailable from the accessible public sources._

## A Provably Convergent and Practical Algorithm for Gromov–Wasserstein Optimal Transport

**Authors:** Ling Liang; Lei Yang

**ID:** 148839\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148839

[Paper](<https://openreview.net/forum?id=umKsf7P52m>) | [PDF](<https://openreview.net/pdf?id=umKsf7P52m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148839>)

Gromov\-\-Wasserstein optimal transport \(GWOT\) aligns metric measure spaces by matching their within\-domain relational structures, but large\-scale GWOT remains challenging because its objective is nonconvex and projection onto the transport polytope is often solved only approximately in practice\. This leads to a gap between practical projected\-gradient implementations and convergence theory, which typically assumes exact projections\. For squared\-loss GWOT, we propose an inexact projected\-gradient framework with a verifiable feasibility\-residual\-based inexact condition for the projection subproblem\. This condition is directly computable and avoids unknown quantities such as the exact projection point\. Under this implementable condition, we prove subsequential convergence to stationary points and, with a mild tolerance\-decay condition, convergence of the whole sequence\. The resulting method retains the simplicity and sparsity of projected\-gradient schemes while providing rigorous convergence guarantees, turning projected\-gradient methods into a principled and scalable approach for GWOT with provable reliability\.

## Distributed Online Convex Optimization with Compressed Communication: Optimal Regret and Applications

**Authors:** Sifan Yang; Danyue Li; Lijun Zhang

**ID:** 151072\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151072

[Paper](<https://openreview.net/forum?id=dA7fbAenM6>) | [PDF](<https://openreview.net/pdf?id=dA7fbAenM6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151072>)

Distributed online convex optimization \(D\-OCO\) is a powerful paradigm for modeling distributed scenarios with streaming data\.  However, the communication cost between local learners and the central server is substantial in large\-scale applications\. To alleviate this bottleneck, we initiate the study of  D\-OCO with compressed communication\. Firstly, to quantify the compression impact, we establish the $\\Omega\(\\delta^\{\-1/2\}\\sqrt\{T\}\)$ and $\\Omega\(\\delta^\{\-1\}\\log\{T\}\)$ lower bounds for convex and strongly convex loss functions, respectively, where $\\delta \\in \(0,1\]$ is the compression ratio\.  Secondly, we propose an optimal algorithm, which enjoys regret bounds of $O\(\\delta^\{\-1/2\}\\sqrt\{T\}\)$ and $O\(\\delta^\{\-1\} \\log T\)$ for convex and strongly convex loss functions, respectively\. Our method innovatively incorporates the  error feedback mechanism into the Follow\-the\-Regularized\-Leader framework to address the coupling between the compression error and the projection error\. Furthermore, we employ the online compression strategy to mitigate the accumulated error arising from the bidirectional compression\. Our online method has great generality, and can be extended to the offline stochastic setting via online\-to\-batch conversion\.  We establish convergence rates of $O\(\\delta^\{\-1/2\}T^\{\-1/2\}\)$ and $O\(\\delta^\{\-1\} T^\{\-1\}\)$ for convex and strongly convex loss functions, respectively, providing the first  guarantees for distributed non\-smooth optimization with compressed communication and domain constraints\.

## Median\-of\-Means under Structured Heavy\-Tailed Noise: High\-Probability Bounds for Clipped Stochastic Optimization

**Authors:** Ahmed El Bajdali; Ohad Shamir; Samuel Horváth; Eduard Gorbunov

**ID:** 148757\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148757

[Paper](<https://openreview.net/forum?id=vGEUrQdO7l>) | [PDF](<https://openreview.net/pdf?id=vGEUrQdO7l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148757>)

Optimization under heavy\-tailed stochastic noise remains a major challenge in modern machine learning, where classical moment assumptions often fail to capture realistic gradient distributions\. In this work, we revisit robust estimation techniques and provide a systematic analysis of the Median\-of\-Means \(MoM\) estimator under a structured noise model that interpolates between a symmetric heavy\-tailed distribution with bounded $\\beta$\-th moment \($\\beta \\in \(0, 1\]$\) and a mean\-zero distribution with bounded $\\alpha$\-th moment \($\\alpha \\in \(1, 2\]$\)\. We derive new upper bounds on the variance and bias of MoM in this setting, thereby extending the applicability of existing results beyond purely symmetric or bounded\-moment settings\. Building on these properties, we study clipped stochastic optimization methods with MoM gradient estimation and establish high\-probability convergence guarantees that hold for general $\\beta \\in \(0, 1\]$ and $\\alpha \\in \(1, 2\]$\. Our bounds match or improve upon prior complexity guarantees while requiring weaker distributional assumptions, and they reveal that bias only affects the final neighborhood of convergence\. Overall, this work advances the theoretical foundations for robust stochastic optimization in the presence of extreme gradient noise\.

## The Denoising Wrapper: A Modular Post\-Processing Framework for Noisy First\-Order Optimizers

**Authors:** Meisam Razaviyayn; Weiwei Kong; Grigoris Velegkas; Vahab Mirrokni

**ID:** 155970\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155970

[Paper](<https://openreview.net/forum?id=1UGggkyD1E>) | [PDF](<https://openreview.net/pdf?id=1UGggkyD1E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155970>)

Noisy gradient estimates are ubiquitous in machine learning, arising from stochastic sampling, distributed computations, or privacy\- preserving mechanisms like Differential Privacy \(DP\)\. This paper introduces a general, optimizer\-agnostic framework for denoising these estimates\. Our approach operates as a modular wrapper that intercepts noisy gradient observations and provides denoised estimates to the optimizer, requiring no internal modifications to algorithms like SGD or Adam\. We start by studying the problem of optimal denoising gradients in quadratic and cubic optimization problems\. We develop maximum likelihood estimation of gradient and Hessian of the objective\. We also develop other computationally\-efficient order optimal algorithms for denoising gradients in such a setting\. Finally, we utilize the developments for the cubic and quadratic setting to develop a more general denoising mechanisms for general smooth nonconvex optimization problems\. Theoretically, by leveraging higher\-order smoothness, we establish an improved convergence rate of $O\(T^\{\-12/19\}\)$ for smooth non\-convex optimization\. While our recursive algorithm requires two gradient queries per iteration, we show that the improved convergence rate yields a lower total oracle complexity than the standard $O\(T^\{\-1/2\}\)$ rate of SGD\. This implies the gain in convergence speed asymptotically outweighs the additional computational cost\. We apply our algorithm to various denoising problems, particularly nonconvex DP\-training\. Our experiments, including training private classifiers on CIFAR\-10, demonstrate significant improvements over  baselines\.

## Gradient Descent’s Last Iterate is Often \(slightly\) Suboptimal

**Authors:** Guy Kornowski; Ohad Shamir

**ID:** 154735\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154735

[Paper](<https://openreview.net/forum?id=BPdZSMMob3>) | [PDF](<https://openreview.net/pdf?id=BPdZSMMob3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154735>)

_Abstract unavailable from the accessible public sources._

## Normalized SGD in the Convex Regime: First High\-Probability Guarantees and Momentum Extension

**Authors:** Savelii Chezhegov; Eduard Gorbunov

**ID:** 150821\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150821

[Paper](<https://openreview.net/forum?id=f322xYHDgN>) | [PDF](<https://openreview.net/pdf?id=f322xYHDgN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150821>)

_Abstract unavailable from the accessible public sources._

## What’s in a Smoothness Constant? Tight Rates for Local SGD with Bounded Second\-order Heterogeneity

**Authors:** Kumar Kshitij Patel; Rustem Islamov; Sebastian Stich; Aurelien Lucchi; Eduard Gorbunov; Lingxiao Wang

**ID:** 148945\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148945

[Paper](<https://openreview.net/forum?id=u0RipLyQNB>) | [PDF](<https://openreview.net/pdf?id=u0RipLyQNB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148945>)

_Abstract unavailable from the accessible public sources._

## Riemannian Bilevel Optimization under the Polyak–Łojasiewicz Condition

**Authors:** Zhixuan Li; Yuyang Zhang; Luke Jones; Muztaba Syed; William Chang; Andi Han

**ID:** 154402\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154402

[Paper](<https://openreview.net/forum?id=DqfoM1UJnq>) | [PDF](<https://openreview.net/pdf?id=DqfoM1UJnq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154402>)

_Abstract unavailable from the accessible public sources._

## Breaking Curse of Dimensionality for Mutual Information Estimation with Vine Copulas

**Authors:** Sigurd Holmsen; Berit Øksnes; Ingrid Hobæk Haff; Sylvia Richardson; Ali Ramezani\-Kebrya

**ID:** 154130\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154130

[Paper](<https://openreview.net/forum?id=G2wwtzIvKy>) | [PDF](<https://openreview.net/pdf?id=G2wwtzIvKy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154130>)

We propose a computationally efficient vine copula\-based mutual information \(MI\) estimator\. Unlike existing non\-parametric density estimators that suffer from the curse of dimensionality, a non\-parametric vine copula has a convergence rate that is independent of the dimensionality of data\. We leverage this property to tackle the challenging task of MI estimation and propose an interpretable MI estimator\. Extensive experiments on datasets with known ground\-truth MI values across dimensions, data types, and \(input, output\) dependence structures demonstrate a superior trade\-off between MI estimation error and computational time compared to SotA neural MI estimators\.

## A Reduction from Delayed to Immediate Feedback for Online Convex Optimization with Improved Guarantees

**Authors:** Alexander Ryabchenko; Idan Attias; Dan Roy

**ID:** 155853\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155853

[Paper](<https://openreview.net/forum?id=2PgCkZnWDO>) | [PDF](<https://openreview.net/pdf?id=2PgCkZnWDO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155853>)

We develop a reduction\-based framework for online learning with delayed feedback that recovers and improves upon existing results for both first\-order and bandit convex optimization\. Our approach introduces a continuous\-time model under which regret decomposes into a delay\-independent learning term and a delay\-induced drift term, yielding a delay\-adaptive reduction that converts any algorithm for online linear optimization into one that handles round\-dependent delays\. For bandit convex optimization, we significantly improve existing regret bounds, with delay\-dependent terms matching optimal first\-order rates\. For first\-order feedback, we recover optimal regret bounds via a simpler, unified analysis\. Quantitatively, for bandit convex optimization we obtain $O\(\\sqrt\{d\_\{\\text\{tot\}\}\} \+ T^\{\\frac\{3\}\{4\}\}\\sqrt\{k\}\)$ regret, improving the delay\-dependent term from $O\(\\min\\\{\\sqrt\{T d\_\{\\text\{max\}\}\},\(Td\_\{\\text\{tot\}\}\)^\{\\frac\{1\}\{3\}\}\\\}\)$ in previous work to $O\(\\sqrt\{d\_\{\\text\{tot\}\}\}\)$\. Here, $k$, $T$, $d\_\{\\text\{max\}\}$, and $d\_\{\\text\{tot\}\}$ denote the dimension, time horizon, maximum delay, and total delay, respectively\. Under strong convexity, we achieve $O\(\\min\\\{\\sigma\_\{\\text\{max\}\} \\ln T, \\sqrt\{d\_\{\\text\{tot\}\}\}\\\} \+ \(T^2\\ln T\)^\{\\frac\{1\}\{3\}\} \{k\}^\{\\frac\{2\}\{3\}\}\)$, improving the delay\-dependent term from $O\(d\_\{\\textnormal\{max\}\} \\ln T\)$ in previous work to $O\(\\min\\\{\\sigma\_\{\\text\{max\}\} \\ln T, \\sqrt\{d\_\{\\text\{tot\}\}\}\\\}\)$, where $\\sigma\_\{\\text\{max\}\}$ denotes the maximum number of outstanding observations and may be considerably smaller than $d\_\{\\text\{max\}\}$\.

## Capacity\-Constrained Online Convex Optimization with Delayed Feedback

**Authors:** Alexander Ryabchenko; Idan Attias; Dan Roy

**ID:** 151561\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151561

[Paper](<https://openreview.net/forum?id=ZgUQ4y3khF>) | [PDF](<https://openreview.net/pdf?id=ZgUQ4y3khF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151561>)

Online learning with delayed feedback typically assumes that the learner can track all pending rounds until their feedback arrives\. In practice, tracking resources are finite, and feedback from rounds that cannot be tracked is permanently lost\. In this paper, we study delayed online convex optimization \(OCO\) under a hard capacity constraint, where at most $C$ pending rounds can be tracked at any time\. To model delay information, we introduce a semi\-clairvoyant model that refines the clairvoyant assumption from prior work: rather than requiring delays to be known at prediction time, the learner observes delay expirations online, consistent with the classical unconstrained delayed setting\. Our approach proceeds via a reduction to a novel \`\`delayed and weighted" OCO problem, using a scheduler that randomizes which rounds are tracked and importance\-weights the resulting observations\. For the base problem, we propose and analyze Delayed\-Weighted FTRL and its bandit analogue, obtaining regret bounds that characterize how weights interact with delayed feedback in both settings\. Combining these bounds with our schedulers yields regret guarantees for capacity\-constrained OCO under convex and strongly convex losses, for both first\-order and bandit feedback\. For first\-order feedback, capacity $C = \\Omega\(\\log T\)$ suffices to recover the standard delayed OCO rates up to logarithmic factors\. For bandit feedback, the standard delayed BCO rates are instead modulated by $\(1 \+ \\sigma\_\{\\text\{max\}\}/C\)$ factors, where $\\sigma\_\{\\text\{max\}\}$ is the maximum number of pending observations\. This allows the regret bound to degrade gracefully when $C &lt; \\sigma\_\{\\text\{max\}\}$, while remaining sublinear\.

## Dynamic Regret in Online Convex Optimization with Indicator Switching Costs

**Authors:** Naram Mhaisen; George Iosifidis

**ID:** 150727\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150727

[Paper](<https://openreview.net/forum?id=frpCLd0FIr>) | [PDF](<https://openreview.net/pdf?id=frpCLd0FIr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150727>)

We study dynamic regret in online convex optimization with an \\emph\{indicator switching cost\}: a fixed penalty incurred whenever two consecutive decisions differ\. This captures startup overheads such as server activation, model deployment, and cache updates, and on a bounded domain it recovers norm\-based movement costs as a special case\. Existing guarantees for indicator costs handle only static comparators\. We show that a direct extension of these techniques to dynamic regret provably fails, motivating a different approach\. We propose a meta\-learning framework: a set of randomized lazy FTRL base learners restarted at dyadic time scales, aggregated by a movement\-aware master that mixes their proposal densities and samples actions via maximal coupling of consecutive mixtures\. The resulting algorithm satisfies, in expectation, $\\mathcal\{R\}^\{\\mathbf\{1\}\}\_T \\le \\tilde\{\\mathcal\{O\}\}\(\\min\\\{\\sqrt\{T\(S\_T\{\+\}1\)\},T^\{2/3\}\(P\_T\+1\)^\{1/3\}\\\}\)$, where $\\mathcal\{R\}^\{\\mathbf\{1\}\}\_T$ is the dynamic regret plus the cumulative indicator switching cost, $S\_T$ counts comparator switches, and $P\_T$ is the comparator path length\. The bound holds simultaneously for all sequences and requires no prior knowledge of $S\_T$ or $P\_T$: it is minimax\-optimal \(up to logarithmic factors\) for tracking piecewise\-constant comparators, and also captures frequently moving comparators with small total path length\.

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

## On the Last\-Iterate Convergence of Clipped Gradient Methods

**Authors:** Zijian Liu

**ID:** 148182\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148182

[Paper](<https://openreview.net/forum?id=zgEpuLdwBv>) | [PDF](<https://openreview.net/pdf?id=zgEpuLdwBv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148182>)

_Abstract unavailable from the accessible public sources._

## BROS: Bias\-Corrected Randomized Subspaces for Memory\-Efficient Single\-Loop Bilevel Optimization

**Authors:** Hengrui Zhang; Boao Kong; Engao Zhang; Kun Yuan

**ID:** 149705\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149705

[Paper](<https://openreview.net/forum?id=o4aIX9knRi>) | [PDF](<https://openreview.net/pdf?id=o4aIX9knRi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149705>)

Stochastic bilevel optimization \(SBO\) has become a standard framework for hyperparameter learning, data reweighting, representation learning, and data\-mixture optimization in deep learning\. Existing exact single\-loop SBO methods and memory\-efficient surrogate SBO methods either create severe memory pressure for large lower\-level neural networks or lack competitive convergence guarantees under standard assumptions\. In this paper, we propose BROS, a memory\-efficient single\-loop SBO method with the same convergence rate order as exact single\-loop SBO methods\. BROS performs lower and auxiliary updates in randomized subspaces with a Rademacher bi\-probe correction that recovers an unbiased Hessian\-action estimator\. We prove that BROS preserves the $\\mathcal O\(\\varepsilon^\{\-2\}\)$ sample complexity of MA\-SOBA for finding an $\\varepsilon$\-stationary point under only standard assumptions\. Experiments on hyper\-data cleaning, data\-mixture learning, hyper\-representation learning, and ViT sample reweighting show that BROS reduces peak memory by up to 44\.9% while closely matching full\-space baseline performance\.

## Revisiting Value Iteration: Unified Analysis of Discounted and Average\-Reward Cases

**Authors:** Arsenii Mustafin; Xinyi Sheng; Dominik Baumann

**ID:** 149535\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149535

[Paper](<https://openreview.net/forum?id=pPySJfE8ap>) | [PDF](<https://openreview.net/pdf?id=pPySJfE8ap>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149535>)

While Value Iteration \(VI\) is one of the most fundamental algorithms in  Reinforcement Learning, its theoretical convergence guarantees still exhibit  a persistent mismatch with empirical behavior\. In the discounted\-reward case,  classical theory guarantees geometric convergence with rate $\\gamma$, while  in the average\-reward case recent work suggests that only sublinear  convergence can be expected\. In practice, however, VI is often observed to  converge significantly faster\. In this work, we show through a unified  geometry\-based analysis that, under an assumption of a unique and unichain  optimal policy, \(i\) convergence is geometric in \*both\* the  discounted\- and average\-reward settings and \(ii\) the convergence rate  is faster than previous analyses suggest\.

## On Rate\-Optimal Partitioning Classification from Observable and from Privatised Data

**Authors:** Balázs Cs\. Csáji; László Györfi; Ambrus Tamás; Harro Walk

**ID:** 156765 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/pdf?id=KYYvIrtgK0>) | [PDF](<https://openreview.net/pdf?id=KYYvIrtgK0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156765>)

In this paper we revisit the classical method of partitioning classification and prove novel
convergence rates under relaxed conditions, both for observable \(non\-privatised\) and for
privatised data\. We consider the problem of classification in a d dimensional Euclidean space\. Previous results on the partitioning classifier worked with the strong density assumption \(SDA\), which is restrictive, as we demonstrate through simple examples\. Here, we study the problem under much milder assumptions\. We presuppose that the distribution of the inputs is a mixture of an absolutely continuous and a discrete distribution, such that the absolutely continuous component is concentrated on a d\_a dimensional subspace\. In addition to the standard Lipschitz and margin conditions, a novel characteristic of the absolutely continuous component is introduced, by which the convergence rate of the classification error probability is computed, both for the binary and for the multi\-class cases\. This bound can reach the minimax optimal convergence rate achievable using SDA, but under much milder distributional assumptions\. Interestingly, this convergence rate depends only on the intrinsic dimension of the continuous inputs, d\_a, and not on d\. Under privacy constraints, the data cannot be directly observed, and the constructed classifiers are functions of the randomised outcome of a suitable local differential privacy mechanism\. In this paper we add Laplace distributed noises to the discretisations of all possible locations of the feature vector and to its label\. Again, tight upper bounds on the convergence rate of the classification error probability can be derived, without using SDA, such that this rate depends on 2d\_a\.

## Decision\-Focused Learning in MDPs: An Occupancy Measure Approach

**Authors:** Zihao Zhao; Ashwath K Karunakaram; Ali Eshragh; Yuexing Li; Kai Wang

**ID:** 149225\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149225

[Paper](<https://openreview.net/forum?id=rzZPOKJV34>) | [PDF](<https://openreview.net/pdf?id=rzZPOKJV34>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149225>)

In this work, we consider decision\-focused learning \(DFL\) for a Markov decision process \(MDP\), where existing methods differentiate through the KKT conditions of the Bellman equation and require solving a linear system over all state\-action pairs, limiting its scalability\. We address this by reformulating the MDP as an occupancy measure\-based linear program \(LP\), whose feasible region is induced by predicted dynamics, and we derive a closed\-form gradient by identifying the active constraints in the feasible polyhedron via the pivoting algorithm\.  This occupancy measure\-based LP layer raises two challenges: \(1\) LP's solution gradient is discontinuous when active constraints change, and \(2\) the LP backward cost still scales with the state size, which is costly for large or continuous state spaces\. We address the challenges with an augmented Lagrangian surrogate and smooth the boundary jumps by random row sketching of the constraints, and a learnable soft state\-aggregation layer and its function\-approximation generalization that scales the LP to large finite and continuous\-state MDPs\. Across multiple tasks, our methods reach lower regret than KKT\-based DFL and two\-stage baselines with significantly lower computation cost\. The source code for all experiments is available \[here\]\(https://anonymous\.4open\.science/r/State\_Aggregation\_Project\-3E64/\)\.

## Learning inexact alternating minimization

**Authors:** Paul Häusner; Jevgenija Rudzusika; Jens Sjölund; Ozan Öktem

**ID:** 150173\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150173

[Paper](<https://openreview.net/forum?id=k9PxLgUe1g>) | [PDF](<https://openreview.net/pdf?id=k9PxLgUe1g>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150173>)

Alternating minimization is a standard tool for optimization problems with two coupled variable blocks\. Its cost is dominated by the inner subproblem solvers, which rarely have a closed\-form solution\. In this paper, we propose to learn an inexact alternating scheme in which neural networks approximate the subproblem solution at each iteration\. We derive a worst\-case bound on the optimality gap that exposes the per\-iteration error that each network is trained to minimize in a greedy fashion\. To show convergence of the learned scheme on unseen problem instances, we combine the bound with a PAC\-Bayes argument that controls the expected optimality gap with high probability\. We apply the learned scheme to low\-dose CT reconstruction with dictionary regularization, demonstrating a $13\\times$ speedup over the inexact first\-order baseline at matched accuracy\. A brief end\-to\-end fine\-tuning stage extends this to $30\\times$ and outperforms other  learned schemes\.

## BROS: Bias\-Corrected Randomized Subspaces for Memory\-Efficient Single\-Loop Bilevel Optimization

**Authors:** Hengrui Zhang; Boao Kong; Engao Zhang; Kun Yuan

**ID:** 149705\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149705

[Paper](<https://openreview.net/forum?id=o4aIX9knRi>) | [PDF](<https://openreview.net/pdf?id=o4aIX9knRi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149705>)

Stochastic bilevel optimization \(SBO\) has become a standard framework for hyperparameter learning, data reweighting, representation learning, and data\-mixture optimization in deep learning\. Existing exact single\-loop SBO methods and memory\-efficient surrogate SBO methods either create severe memory pressure for large lower\-level neural networks or lack competitive convergence guarantees under standard assumptions\. In this paper, we propose BROS, a memory\-efficient single\-loop SBO method with the same convergence rate order as exact single\-loop SBO methods\. BROS performs lower and auxiliary updates in randomized subspaces with a Rademacher bi\-probe correction that recovers an unbiased Hessian\-action estimator\. We prove that BROS preserves the $\\mathcal O\(\\varepsilon^\{\-2\}\)$ sample complexity of MA\-SOBA for finding an $\\varepsilon$\-stationary point under only standard assumptions\. Experiments on hyper\-data cleaning, data\-mixture learning, hyper\-representation learning, and ViT sample reweighting show that BROS reduces peak memory by up to 44\.9% while closely matching full\-space baseline performance\.

## Revisiting Value Iteration: Unified Analysis of Discounted and Average\-Reward Cases

**Authors:** Arsenii Mustafin; Xinyi Sheng; Dominik Baumann

**ID:** 149535\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149535

[Paper](<https://openreview.net/forum?id=pPySJfE8ap>) | [PDF](<https://openreview.net/pdf?id=pPySJfE8ap>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149535>)

While Value Iteration \(VI\) is one of the most fundamental algorithms in  Reinforcement Learning, its theoretical convergence guarantees still exhibit  a persistent mismatch with empirical behavior\. In the discounted\-reward case,  classical theory guarantees geometric convergence with rate $\\gamma$, while  in the average\-reward case recent work suggests that only sublinear  convergence can be expected\. In practice, however, VI is often observed to  converge significantly faster\. In this work, we show through a unified  geometry\-based analysis that, under an assumption of a unique and unichain  optimal policy, \(i\) convergence is geometric in \*both\* the  discounted\- and average\-reward settings and \(ii\) the convergence rate  is faster than previous analyses suggest\.

## On Rate\-Optimal Partitioning Classification from Observable and from Privatised Data

**Authors:** Balázs Cs\. Csáji; László Györfi; Ambrus Tamás; Harro Walk

**ID:** 156765\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156765

[Paper](<https://openreview.net/pdf?id=KYYvIrtgK0>) | [PDF](<https://openreview.net/pdf?id=KYYvIrtgK0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156765>)

In this paper we revisit the classical method of partitioning classification and prove novel
convergence rates under relaxed conditions, both for observable \(non\-privatised\) and for
privatised data\. We consider the problem of classification in a d dimensional Euclidean space\. Previous results on the partitioning classifier worked with the strong density assumption \(SDA\), which is restrictive, as we demonstrate through simple examples\. Here, we study the problem under much milder assumptions\. We presuppose that the distribution of the inputs is a mixture of an absolutely continuous and a discrete distribution, such that the absolutely continuous component is concentrated on a d\_a dimensional subspace\. In addition to the standard Lipschitz and margin conditions, a novel characteristic of the absolutely continuous component is introduced, by which the convergence rate of the classification error probability is computed, both for the binary and for the multi\-class cases\. This bound can reach the minimax optimal convergence rate achievable using SDA, but under much milder distributional assumptions\. Interestingly, this convergence rate depends only on the intrinsic dimension of the continuous inputs, d\_a, and not on d\. Under privacy constraints, the data cannot be directly observed, and the constructed classifiers are functions of the randomised outcome of a suitable local differential privacy mechanism\. In this paper we add Laplace distributed noises to the discretisations of all possible locations of the feature vector and to its label\. Again, tight upper bounds on the convergence rate of the classification error probability can be derived, without using SDA, such that this rate depends on 2d\_a\.

## Inexact Bregman Sparse Newton Method for Efficient Optimal Transport

**Authors:** Jianting Pan; Jian Li; Sirong Dai; Ming Yan

**ID:** 155946 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1bW1n2cWFS>) | [PDF](<https://openreview.net/pdf?id=1bW1n2cWFS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155946>)

Computing exact Optimal Transport \(OT\) distances for large\-scale datasets is computationally prohibitive\. While entropy\-regularized alternatives offer speed, they sacrifice precision and frequently suffer from numerical instability in high\-accuracy regimes\. To address these limitations, we propose the Inexact Bregman Sparse Newton \(IBSN\) method, which efficiently solves the exact OT problems\. Our approach utilizes a Bregman proximal point framework through a sequence of semi\-dual subproblems\. By solving these subproblems inexactly, we significantly reduce per\-iteration complexity while maintaining a theoretical guarantee of convergence to the true optimal plan\. To further accelerate the algorithm, we develop a sparse Newton\-type solver for the subproblem and employ a Hessian sparsification strategy that drastically lowers memory and time costs without sacrificing accuracy\. We provide rigorous theoretical guarantees for the global convergence of the algorithm\. Extensive experiments demonstrate that IBSN consistently outperforms state\-of\-the\-art methods in both computational speed and solution precision\.

## Curvature\-Dependent Lower Bounds for Frank\-Wolfe

**Authors:** Jannis Halbey; Christophe Roux; Sebastian Pokutta

**ID:** 154986 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9QiqOqCKsr>) | [PDF](<https://openreview.net/pdf?id=9QiqOqCKsr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154986>)

The Frank\-Wolfe \(FW\) algorithm achieves a convergence rate of $\\mathcal\{O\}\(1/T\)$ for smooth convex optimization over compact convex domains, accelerating to $\\mathcal\{O\}\(1/T^2\)$ when both the objective and the feasible set are strongly convex\. This acceleration extends beyond strong convexity: Kerdreux et al\. \(2021a\} proved rates of $\\mathcal\{O\}\(T^\{\-p/\(p\-1\)\}\)$ over $p$\-uniformly convex feasible sets, a class that interpolates between strongly convex sets and more general curved domains such as $\\ell\_p$ balls\. In this work, we establish a matching $\\Omega \(T^\{\-p/\(p\-1\)\}\)$ lower bound for every $p\\ge 3$ under exact line search or short steps, and extend the lower bound to objectives satisfying a Hölderian error bound\. The proofs analyze the dynamics of FW iterates on simple instances and hence are not limited to the high\-dimensional setting, unlike information\-theoretic lower bounds\.

## A Frank\-Wolfe Approach to Goldstein Stationarity

**Authors:** Swati Padmanabhan; Zitao Song; Zhe Zhang

**ID:** 150421 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iAYv33Isy5>) | [PDF](<https://openreview.net/pdf?id=iAYv33Isy5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150421>)

We investigate the problem of finding $\(\\delta, \\varepsilon\)$\-stationary    points \(also called Goldstein stationary points\) for nonsmooth nonconvex Lipschitz functions\. This problem has recently garnered significant attention, with several non\-asymptotic convergence guarantees\. However, existing methods for such guarantees require prior knowledge of problem parameters and lack anytime     convergence\. Our work addresses these issues by providing an algorithm that satisfies two properties:     Firstly, our algorithm is parameter\-free; secondly, it generates a sequence of    $\(\\varepsilon, \\varepsilon\)$\-stationary points with monotonically    decreasing $\\varepsilon$\. This algorithm achieves the \(non\-stochastic\) state\-of\-the\-art complexity for    any $\\varepsilon &gt; 0$ and ensuring convergence to a Clarke stationary    point in the limit\.    Central to our result is the insight that one can slightly modify prior algorithms for this problem and view them within the framework of the classic  Frank\-Wolfe algorithm\.

