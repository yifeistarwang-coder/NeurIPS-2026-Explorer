# Optimization / Bayesian &amp; Black\-box Optimization

优化 / 贝叶斯与黑盒优化

48 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Thompson Sampling using Prior\-fitted Diffusion Transformers

**Authors:** Sihwa Park; Jingsen Zhu; Vinamr Jain; Sheng\-Yen Chou; Alexander Terenin

**ID:** 150531 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hRNiI7uR2f>) | [PDF](<https://openreview.net/pdf?id=hRNiI7uR2f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150531>)

Thompson sampling is natural randomized strategy for optimizing unknown functions in a black\-box manner\. In continuous global optimization, Thompson sampling has largely been restricted to Gaussian process priors, as these are essentially the only class for which computing the posterior distribution has been tractable in practice\. In this work, we introduce Prior\-fitted Diffusion Transformers, which are diffusion models that perform Thompson sampling at inference time, after being pre\-trained using the prior\-fitted network paradigm\. To apply these models, we develop a set of practical non\-Gaussian priors for general black\-box functions \- including those that have characteristics that cannot be achieved under Gaussianity, such as priors over unimodal functions\. We also quantify the tradeoff between model size and the number of pre\-training iterations, and show that these models follow scaling laws akin to those observed in transformers defined over other modalities\. Across a set of global optimization benchmarks, we show that prior\-fitted diffusion transformers with non\-Gaussian priors can achieve improved performance compared to traditional pipelines built on Gaussian processes\.

## It Cancels: O\(r²\) Cholesky Updates for Whitened Operators

**Authors:** Anupama Sridhar; Jack Shi; Ravi Deshpande; Jack Li; Alexander R Johansen; Michael P Snyder

**ID:** 154420 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DiPStsh1m2>) | [PDF](<https://openreview.net/pdf?id=DiPStsh1m2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154420>)

Many sequential Bayesian methods maintain a whitened operator $A\_w = L^\{\-1\}ML^\{\-\\top\}$, where $L$ is the Cholesky factor of a kernel, precision, or curvature matrix\. When the underlying matrix changes by a rank\-$1$ perturbation, existing techniques propagate only one\-sided quantities $L^\{\-1\}B$; refreshing the sandwiched operator $A\_w$ requires a full $O\(r^3\)$ re\-factorization that dominates iteration cost, consuming up to 91% of per\-step time in natural gradient methods\. We show that this cost is unnecessary\. For pre\-whitened inputs, intermediate factors of $L$ cancel exactly from both sides of the augmented Givens rotations, and the updated $\(L^\+\)^\{\-1\}M^\+\(L^\+\)^\{\-\\top\}$ can be recovered in $O\(r^2\)$ time by applying the rotations double\-sidedly to a zero\-padded matrix, followed by a rank\-1 correction\. We provide a self\-contained derivation, stability bounds, and implementations as a C\+\+ extension, MLX kernel, and Triton GPU kernel\. On streaming sparse GP regression, online Bayesian optimization on protein fitness landscapes, and natural gradient preconditioning, the method matches full re\-factorization in accuracy with up to $5\.4\\times$ speedups\. At $r = 1024$, training time drops from 1075s to 198s, making larger curvature charts affordable and producing strictly better test MSE\.

## Deferred Aggregation in Hierarchical Bayesian Optimization

**Authors:** Valentin Margraf; Jonas Hanselle; Julian Rodemann; Marcel Wever; Sebastian Vollmer; Eyke Hüllermeier

**ID:** 149951 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ly7pYI9c0U>) | [PDF](<https://openreview.net/pdf?id=ly7pYI9c0U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149951>)

To account for uncertainty, hierarchical Bayesian optimization marginalizes over Gaussian process hyperparameters, usually averaging models or acquisition functions\. However, this early aggregation discards information about model disagreement and is sensitive to outliers\. To address these  limitations, we propose to defer aggregation to the decision level: each  model independently proposes a candidate, and we aggregate over these  candidates via the medoid\. We study a misspecified hierarchical Gaussian process setting in  which most models have low misspecification error, while a minority are  severely misspecified\. Theoretically, we derive regret bounds showing that the misspecification penalty of early aggregation depends on the average error across all models, whereas decision\-level aggregation depends only on the low\-misspecification majority\. Empirically, we validate these findings on toy examples and further demonstrate that, across a wide range of low\- to high\-dimensional synthetic and real\-world benchmarks, decision\-level aggregation outperforms standard Bayesian optimization baselines in most cases while remaining competitive in the others\.

## Understanding the Co\-evolutionary Solution Exchange of the MOEA/D: Minimal Communication Gives Maximal Speed\-Ups

**Authors:** Benjamin Doerr; Moaad Elmoutassim; Martin S\. Krejca; Guy Mushiata Kibulu

**ID:** 149325 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qxu78iDNg8>) | [PDF](<https://openreview.net/pdf?id=qxu78iDNg8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149325>)

Besides domination\-based algorithms such as the NSGA\-II, the decomposition\-based MOEA/D is one of the most popular and successful optimization heuristic for multi\-objective problems\. It decomposes the problem into several, single\-objective subproblems\. By solving these in a co\-evolutionary manner and archiving non\-dominated solutions, it approximates or computes the Pareto front\. Interestingly, so far no advantages from the co\-evolutionary communication of subproblem solutions were proven\. In this first mathematical runtime analysis addressing this research question, we investigate how the mutation\-based MOEA/D solves the classic OMM benchmark when solutions are exchanged among subproblems in different distances $r$\. We show, for the first time, that the MOEA/D profits from an exchange of solutions, and that already very small communication radii $r$ are sufficient to maximally profit from this feature of the algorithm\. More precisely, for all values $r \\ge 1$ we prove a tight runtime guarantee of $\\Theta\(n^2\)$, where $n$ is the problem size\. This is asymptotically faster than the known bound of $O\(n^2 \\log n\)$ guarantee for $r=0$, which we complement with a matching bound of $\\Omega\(n^2 \\log n\)$\.

## A Dynamic Decomposition Strategy for the MOEA/D With Proven Performance Guarantees

**Authors:** Benjamin Doerr; Martin S\. Krejca; Noé Weeks

**ID:** 151518 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a3xSiMutbk>) | [PDF](<https://openreview.net/pdf?id=a3xSiMutbk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151518>)

The MOEA/D is one of the most successful multi\-objective evolutionary algorithms\. It operates by decomposing the optimization problem into single\-objective subproblems, which are then solved in a co\-evolutionary manner\. The performance of the MOEA/D depends critically on this decomposition\. In this work, we propose a novel way to adjust this decomposition on the fly, for the case of discrete bi\-objective optimization\. Different from all previous works in this direction, we support our new algorithm with a proven performance guarantee\. This is the first work that rigorously proves the runtime of a dynamic multi\-objective evolutionary algorithm\. For monotonic distortions of the simple LOTZ benchmark, it is known that classic decompositions leave large holes in the Pareto front, making it very hard for the MOEA/D to cover the entire Pareto front\. In contrast, we prove that our self\-adjusting MOEA/D solves all these LOTZ problems in an expected number of $O\(n^4\)$ function evaluations\. This relatively low runtime as well as the details of our mathematical proof show that the dynamic decomposition strategy indeed evolves a decomposition adjusted to each of these problem instances\.

## Regret\-Based $\(\\epsilon,\\delta\)$\-optimal Stopping Criteria for Bayesian Optimization

**Authors:** Haowei Wang; Jingyi Wang; Qiyu Wei

**ID:** 152096 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VY7fcL71Yf>) | [PDF](<https://openreview.net/pdf?id=VY7fcL71Yf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152096>)

Bayesian optimization \(BO\) is a widely used iterative black\-box optimization method that utilizes Gaussian process \(GP\) surrogate models\. In practice, BO is typically terminated after a fixed evaluation budget is exhausted, which can incur unnecessary cost and provides no optimality guarantee on solution quality\. Recent research in developing a practical stopping criterion has made empirical progress, yet a theoretically sound stopping criterion remains a work in progress\. In this work, we present provably tighter instantaneous regret bounds for GP upper confidence bound \(GP\-UCB\) at any given iteration\. Then, we propose stopping criteria for GP\-UCB based on this tighter bound that ensures an $\\epsilon$\-optimal solution with high probability $1\-\\delta$ upon termination\. Numerical experiments are performed to validate and demonstrate the effectiveness and efficiency of our stopping criteria\.

## TagBO: LLM\-Driven Task\-Aware Graph Bayesian Optimization for Scientific Discovery

**Authors:** Xinzhe Yuan; Zimu Zeng; Zhuo Chen; Jianshu Zhang; Jinzong Dong; Jingyi Chen; Nanyang Ye; Huan Xiong; Qinying Gu

**ID:** 148670 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vzC2M3GkhW>) | [PDF](<https://openreview.net/pdf?id=vzC2M3GkhW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148670>)

We study mixed\-variable optimization in scientific discovery, where the key challenge is to efficiently explore the search space under expensive experimental evaluations\. Traditional Bayesian optimization \(BO\) methods typically rely on structural descriptors \(e\.g\., molecular fingerprints\) to measure similarity among categorical variables\. However, such task\-agnostic similarity often fails to reflect task\-specific objectives, leading to biased generalization\. To address this limitation, we propose \\textbf\{TagBO\} \(\\textbf\{T\}ask\-\\textbf\{a\}ware \\textbf\{G\}raph \\textbf\{B\}ayesian \\textbf\{O\}ptimization\), a method that integrates LLM\-derived relational priors with descriptor\-based structural information for mixed\-variable Bayesian optimization\. Rather than directly using LLM outputs as predictive scores, TagBO treats LLM outputs as a potentially noisy source of task\-aware relational priors and extracts coarse ordinal relational signals from LLM reasoning to construct task\-aware similarity structures for scientific optimization\. TagBO then performs constrained Gaussian process Bayesian optimization over the resulting joint discrete\-continuous representation space\. Experiments on diverse chemistry and materials formulation tasks demonstrate that TagBO consistently improves sample efficiency under fixed evaluation budgets across LLMs of varying capabilities\.

## Tree\-Structured Synergy of Large Language Models and Bayesian Optimization for Efficient CASH

**Authors:** Beicheng Xu; Weitong Qian; Lingching Tung; Yupeng Lu; Bin CUI

**ID:** 150619 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gmg28fq6Rq>) | [PDF](<https://openreview.net/pdf?id=gmg28fq6Rq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150619>)

To lower the expertise barrier in machine learning, the AutoML community has focused on the CASH problem, which jointly automates algorithm selection and hyperparameter tuning\. While traditional methods like Bayesian Optimization \(BO\) struggle with cold\-start issues, Large Language Models \(LLMs\) can mitigate these through semantic priors\. However, existing LLM\-based optimizers generalize poorly to high\-dimensional, structured CASH spaces\. In this paper, we propose LB\-MCTS, a trajectory\-structured optimization framework that uses a Monte Carlo Tree Search tree as a shared state for algorithm selection, hyperparameter refinement, and BO–LLM proposer synergy\. Within this shared state, BO provides algorithm\-specific surrogate modeling for quantitative search, while the LLM exploits path\-aware selective memory to generate semantic proposals and reflections\. As the surrogate model improves, a reliability\-aware proposer policy adaptively shifts from LLM\-driven to BO\-driven proposals within a unified search trajectory\. Experiments on 104 AMLB datasets demonstrate that LB\-MCTS consistently outperforms BO\-based, LLM\-based, and hybrid baselines\.

## BO\-Arena: An Evolving Benchmark for High\-Dimensional Bayesian Optimisation

**Authors:** Thomas Christie; Colin Doumont; Henry Moss; Philipp Hennig

**ID:** 138938 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vGjqfKbR8v>) | [PDF](<https://openreview.net/pdf?id=vGjqfKbR8v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138938>)

_Abstract unavailable from the accessible public sources._

## AgentCBO: Causal Belief Routing for Bayesian Optimization under Unknown Graphs

**Authors:** Qiyu Wei; Xin Zhang; Richard Allmendinger; Mauricio A Álvarez

**ID:** 155417 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5qGuryamh7>) | [PDF](<https://openreview.net/pdf?id=5qGuryamh7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155417>)

Causal Bayesian optimization \(CBO\) typically relies on the unrealistic assumption of a perfectly known causal graph\. Recent methods relax this constraint by coupling optimization with structure learning, but they often waste sample budgets on structural uncertainties that are irrelevant to the optimizer\. In this paper, we formalize \\emph\{routing\-equivalence\} to shift the objective from full causal\-graph recovery to causal belief routing, where structural differences only matter when they alter optimizer\-facing objects such as admissible exploration sets and \\emph\{do\}\-priors\. Furthermore, we propose \\agentcbo\{\}, a graph\-belief routing framework that incorporates LLM causal priors through guarded proposal and commit mechanisms\. Specifically, a \\textsc\{Language\-Prior Agent\} combines LLM beliefs with constraint\-based discovery to extract a protected causal backbone alongside residual uncertain edges\. A \\textsc\{Calibration Agent\} and a \\textsc\{Residual Repair Agent\} then refine only these uncertain structures through score\-gated bounded local edits\. Finally, a deterministic commit gate evaluates candidate updates using routing\-proxy checks before allowing them to influence intervention selection\. Across ten benchmarks, \\agentcbo\{\} performs comparably to known\-graph CBO, demonstrating that guarded LLM priors can improve fixed\-budget CBO performance\.

## An Open\-Source Training Dataset for Foundation Models for Black\-box Optimization

**Authors:** Aaron Klein; Herilalaina Rakotoarison; Luca Thale\-Bombien; David Salinas

**ID:** 139368 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UOjM1q3o4A>) | [PDF](<https://openreview.net/pdf?id=UOjM1q3o4A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139368>)

Most black\-box optimization methods require extensive hyperparameter tuning, often limiting their ability to generalize across different optimization domains\. Foundation models for black\-box optimization that learn optimization principles from a large collection of optimization trajectories offer a promising alternative, with the potential to outperform manually designed methods across diverse problem classes\.  However, prior work has either relied on non\-public datasets or on purely synthetic data, limiting reproducibility and generalization to real\-world problems\.  As a result, progress in this area has been constrained by the lack of large\-scale, real\-world, publicly available pre\-training data\. We introduce BBO\-Pile, the first open\-source dataset comprising over 500K optimization trajectories evaluated across 3095 different black\-boxes for different optimizers which represents by far the largest public dataset for this task\. Using this dataset, we train a family of foundation models at multiple scales, ranging from 2M to 80M parameters and from 200M to 2B training tokens, and study their scaling behavior with respect to compute\.  Our results demonstrate that large\-scale pre\-training is a viable and effective approach to imitate black\-box optimization methods, paving the way for future research in this direction\.

## BBOWP\-Bench: Evaluating LLMs on Black\-Box Optimization Word Problems

**Authors:** Yutaro Yamada; Kei Hiroshima; Nozomu Yoshinari; Kento Uchida; Shinichi Shirakawa

**ID:** 139160 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=heroYEMhh0>) | [PDF](<https://openreview.net/pdf?id=heroYEMhh0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139160>)

_Abstract unavailable from the accessible public sources._

## Simple Extensions of Single\-Objective Acquisition Functions and Hedge Strategies for Multi\-Objective Bayesian Optimization

**Authors:** Haris Moazam Sheikh

**ID:** 151368 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b5xkf7NyNR>) | [PDF](<https://openreview.net/pdf?id=b5xkf7NyNR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151368>)

_Abstract unavailable from the accessible public sources._

## BBOWP\-Bench: Evaluating LLMs on Black\-Box Optimization Word Problems

**Authors:** Yutaro Yamada; Kei Hiroshima; Nozomu Yoshinari; Kento Uchida; Shinichi Shirakawa

**ID:** 139160\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139160

[Paper](<https://openreview.net/forum?id=heroYEMhh0>) | [PDF](<https://openreview.net/pdf?id=heroYEMhh0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139160>)

_Abstract unavailable from the accessible public sources._

## AgentCBO: Causal Belief Routing for Bayesian Optimization under Unknown Graphs

**Authors:** Qiyu Wei; Xin Zhang; Richard Allmendinger; Mauricio A Álvarez

**ID:** 155417\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155417

[Paper](<https://openreview.net/forum?id=5qGuryamh7>) | [PDF](<https://openreview.net/pdf?id=5qGuryamh7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155417>)

Causal Bayesian optimization \(CBO\) typically relies on the unrealistic assumption of a perfectly known causal graph\. Recent methods relax this constraint by coupling optimization with structure learning, but they often waste sample budgets on structural uncertainties that are irrelevant to the optimizer\. In this paper, we formalize \\emph\{routing\-equivalence\} to shift the objective from full causal\-graph recovery to causal belief routing, where structural differences only matter when they alter optimizer\-facing objects such as admissible exploration sets and \\emph\{do\}\-priors\. Furthermore, we propose \\agentcbo\{\}, a graph\-belief routing framework that incorporates LLM causal priors through guarded proposal and commit mechanisms\. Specifically, a \\textsc\{Language\-Prior Agent\} combines LLM beliefs with constraint\-based discovery to extract a protected causal backbone alongside residual uncertain edges\. A \\textsc\{Calibration Agent\} and a \\textsc\{Residual Repair Agent\} then refine only these uncertain structures through score\-gated bounded local edits\. Finally, a deterministic commit gate evaluates candidate updates using routing\-proxy checks before allowing them to influence intervention selection\. Across ten benchmarks, \\agentcbo\{\} performs comparably to known\-graph CBO, demonstrating that guarded LLM priors can improve fixed\-budget CBO performance\.

## Bidirectional Information Flow \(BIF\) \- A Sample Efficient Hierarchical Gaussian Process for Bayesian Optimization

**Authors:** Juan D\. Guerra; Thomas Garbay; Numa Dancause; Guillaume Lajoie; Marco Bonizzato

**ID:** 149175 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sK7iG9MsXe>) | [PDF](<https://openreview.net/pdf?id=sK7iG9MsXe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149175>)

_Abstract unavailable from the accessible public sources._

## FoMEMO: Towards Foundation Models for Expensive Multi\-objective Optimization

**Authors:** Yiming Yao; Fei Liu; Liang Zhao; Xi Lin; Yilu Liu; Qingfu Zhang

**ID:** 154247 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FBTD1aJKiR>) | [PDF](<https://openreview.net/pdf?id=FBTD1aJKiR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154247>)

_Abstract unavailable from the accessible public sources._

## Automated Kernel Discovery Towards Understanding High\-dimensional Bayesian Optimization

**Authors:** Taeyoung Yun; Woocheol Shin; Inhyuck Song; Jaewoo Lee; Jinkyoo Park

**ID:** 149210 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s7NsKU2IcH>) | [PDF](<https://openreview.net/pdf?id=s7NsKU2IcH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149210>)

_Abstract unavailable from the accessible public sources._

## Search at the Cost of Sampling: Nearly\-Instant Latent Space Bayesian Optimization

**Authors:** Donney Fan; Colin Doumont; Aleksandra Kalisz; Paul Duckworth; Jacob Gardner; Henry Moss; Geoff Pleiss

**ID:** 150226 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jqZgN0DS0E>) | [PDF](<https://openreview.net/pdf?id=jqZgN0DS0E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150226>)

Generative models are increasingly central to many de novo discovery pipelines, in which designs are generated at scale and filtered through virtual screens   to determine a set of candidates to experimentally validate\.   While Bayesian optimization \(BO\) is a natural fit for this setting, as it uses past evaluations to guide future proposals,   the computational overhead required for its sequential decision\-making becomes a bottleneck when virtual screens are relatively cheap\.   We make BO practical in this regime by exploiting the unique combination of a linear model constrained to a spherical domain where high\-dimensional latents concentrate\.    We build off recent work justifying the use of linear surrogates,   while deriving nearly closed\-form solutions to the surrogate modelling and acquisition problems that exploit spherical symmetry\.   The result is a $100\\times$ speedup over state\-of\-the\-art baselines, with matching or improved performance across molecular and image generation benchmarks\.   Altogether, our method makes BO a practical drop\-in for de novo pipelines where it was previously too slow to consider\.

## Truncated Riemannian \(1\+1\)\-ES for Black\-Box Optimization with Intrinsic Dimension Guarantees

**Authors:** Zixu Wu; Hualin Zhang; Zhiqiang Xu

**ID:** 153518 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KlMraKGdCH>) | [PDF](<https://openreview.net/pdf?id=KlMraKGdCH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153518>)

$\(1\+1\)$\-evolution strategy \(ES\) is a classic variant of evolution strategy for black\-box optimization via direct and random search while keeping only a single solution per generation in $\\mathbb\{R\}^n$\. Despite convergence with different step\-size adaptations, it often remains impractical due to dependence on the unfavorable high dimension of the search space $\\mathbb\{R\}^n$\. In fact, many modern optimization problems are naturally constrained to low\-dimensional manifolds embedded in very high\-dimensional ambient spaces\. To see the potential of intrinsic dimensionality reduction for improving practicality, we consider the truncated Riemannian $\(1\+1\)$\-ES on a compact Riemannian submanifold $\\mathcal\{M\}\\subset\\mathbb\{R\}^n$ and establish its non\-asymptotic stationarity guarantee at the standard nonconvex zeroth\-order rate of $\\widetilde\{\\mathcal\{O\}\}\(\\varepsilon^\{\-4\}\)$ function evaluations\. The explicit Gaussian second\-moment term in the bound scales with the intrinsic tangent dimension $d=\\dim\\mathcal\{M\}$ rather than the ambient dimension $n$, while the remaining truncation dependence is captured by an explicit small\-ball drift constant $\\alpha\_d\(R/\\sigma\_0\)$\. To the best of our knowledge, this gives the first non\-asymptotic stationarity analysis for a comparison\-based ES\-type method on compact nonconvex Riemannian submanifolds under localized pullback smoothness\. Numerical illustrations on sparse PCA over spheres and smooth\-surrogate stationarity diagnostics illustrate behavior consistent with the theory and its limitations, while additional experimental studies on truncation radius diagnostics, black\-box tuning, and classical evolutionary computation benchmarks support the practical relevance of geometry\-aware comparison\-based search under limited function\-evaluation budgets\.

## DisCoMBO: Steering Expert\-in\-the\-Loop Black Box Optimization via Distributional Conformance

**Authors:** Jonas Seng; Bennet Wittelsbach; Kristian Kersting

**ID:** 153999 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gy6WP1zaMc>) | [PDF](<https://openreview.net/pdf?id=Gy6WP1zaMc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153999>)

_Abstract unavailable from the accessible public sources._

## Posterior Inference in Latent Space for Scalable Constrained Black\-box Optimization

**Authors:** Kiyoung Om; Kyuil Sim; Taeyoung Yun; Hyeongyu Kang; Jinkyoo Park

**ID:** 153789 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IeYOphyASD>) | [PDF](<https://openreview.net/pdf?id=IeYOphyASD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153789>)

Optimizing high\-dimensional black\-box functions under black\-box constraints is a pervasive task in a wide range of scientific and engineering problems\.  These problems are typically harder than unconstrained problems due to hard\-to\-find feasible regions\.  In this paper, we propose a new framework to solve high\-dimensional, constrained black\-box optimization problems via posterior inference in the latent space of generative models\. Our method iterates through two stages\. First, we train flow\-based models to capture the data distribution and surrogate models that predict both function values and constraint violations\. Second, we cast the candidate selection problem as a posterior inference problem to effectively search for promising candidates that have high objective values while not violating the constraints\.  Concretely, we utilize diffusion models to amortize the sampling from the posterior distribution in the latent space of flow\-based models, which can bypass the issue of mode collapse\.  We empirically demonstrate that our method achieves superior performance across synthetic and real\-world tasks\. Our code is available \[here\]\(https://anonymous\.4open\.science/r/CiBO\-3869/\)\.

## Efficient Knowledge Transfer in Federated Bayesian Optimization through Neural Network Surrogates

**Authors:** Alexander Gräfe; Max van Gemmeren; Paul Brunzema; Sebastian Trimpe

**ID:** 151479 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aIvRw0SLDY>) | [PDF](<https://openreview.net/pdf?id=aIvRw0SLDY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151479>)

Federated Bayesian Optimization \(FedBO\) has emerged as a powerful paradigm for enhancing Bayesian Optimization \(BO\) in distributed, privacy\-sensitive settings, enabling agents to accelerate the optimization of their local objectives by sharing knowledge about their similarities without exposing raw data\. However, existing methods rely on restrictive assumptions, such as near\-identical objective functions or shared Gaussian process hyperparameters that are often violated in heterogeneous real\-world applications\. We present GLOBAFED, a novel framework that enables efficient knowledge transfer across different but related objectives without compromising privacy\. At its core is a probabilistic neural network surrogate with a shared feature\-extracting backbone and agent\-specific heads equipped with variational Bayesian last layers to provide uncertainty estimates\. During optimization, agents use federated learning on the shared backbone to collaboratively build a common latent feature representation, while agent\-specific heads adapt to their individual objectives\. Our empirical results demonstrate that GLOBAFED significantly accelerates convergence and reaches better final performance compared to state\-of\-the\-art FedBO baselines, and enables agents to warm\-start their optimization from previously learned global features\.

## SGEvolve: Semantic Gradient Guidance for LLM\-Driven Evolutionary Search

**Authors:** Kewei Feng; Jinbiao Nie; Xiaoyuan Zhang; Quanhua Liu

**ID:** 153601 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KAggF6KCUl>) | [PDF](<https://openreview.net/pdf?id=KAggF6KCUl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153601>)

_Abstract unavailable from the accessible public sources._

## Robust Latent Space Bayesian Optimization with Marginalized Kernel

**Authors:** Ziyi Yang; Yifan Zhu; Jinghui Zhong

**ID:** 150781 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fRlRq8PSjh>) | [PDF](<https://openreview.net/pdf?id=fRlRq8PSjh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150781>)

_Abstract unavailable from the accessible public sources._

## MOBO\-CAPS: Multi\-objective Bayesian Optimization with Cardinality\-Aware Pareto Selection

**Authors:** Hanyang Wang; Juergen Branke; Matthias Poloczek

**ID:** 150853 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=et2iSrb8f6>) | [PDF](<https://openreview.net/pdf?id=et2iSrb8f6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150853>)

_Abstract unavailable from the accessible public sources._

## DT\-PBO: an Interpretable Tree\-based Surrogate Model for Preferential Bayesian Optimization

**Authors:** Thomas Quadt; Nick Leenders; Roy Lindelauf; Herman Monsuur; Mark Voskuijl; Joost van Oijen; Boris Cule

**ID:** 149513 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pZmJu3EXrO>) | [PDF](<https://openreview.net/pdf?id=pZmJu3EXrO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149513>)

_Abstract unavailable from the accessible public sources._

## AgentCBO: Causal Belief Routing for Bayesian Optimization under Unknown Graphs

**Authors:** Qiyu Wei; Xin Zhang; Richard Allmendinger; Mauricio A Álvarez

**ID:** 155417\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155417

[Paper](<https://openreview.net/forum?id=5qGuryamh7>) | [PDF](<https://openreview.net/pdf?id=5qGuryamh7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155417>)

Causal Bayesian optimization \(CBO\) typically relies on the unrealistic assumption of a perfectly known causal graph\. Recent methods relax this constraint by coupling optimization with structure learning, but they often waste sample budgets on structural uncertainties that are irrelevant to the optimizer\. In this paper, we formalize \\emph\{routing\-equivalence\} to shift the objective from full causal\-graph recovery to causal belief routing, where structural differences only matter when they alter optimizer\-facing objects such as admissible exploration sets and \\emph\{do\}\-priors\. Furthermore, we propose \\agentcbo\{\}, a graph\-belief routing framework that incorporates LLM causal priors through guarded proposal and commit mechanisms\. Specifically, a \\textsc\{Language\-Prior Agent\} combines LLM beliefs with constraint\-based discovery to extract a protected causal backbone alongside residual uncertain edges\. A \\textsc\{Calibration Agent\} and a \\textsc\{Residual Repair Agent\} then refine only these uncertain structures through score\-gated bounded local edits\. Finally, a deterministic commit gate evaluates candidate updates using routing\-proxy checks before allowing them to influence intervention selection\. Across ten benchmarks, \\agentcbo\{\} performs comparably to known\-graph CBO, demonstrating that guarded LLM priors can improve fixed\-budget CBO performance\.

## Thompson Sampling using Prior\-fitted Diffusion Transformers

**Authors:** Sihwa Park; Jingsen Zhu; Vinamr Jain; Sheng\-Yen Chou; Alexander Terenin

**ID:** 150531\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150531

[Paper](<https://openreview.net/forum?id=hRNiI7uR2f>) | [PDF](<https://openreview.net/pdf?id=hRNiI7uR2f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150531>)

Thompson sampling is natural randomized strategy for optimizing unknown functions in a black\-box manner\. In continuous global optimization, Thompson sampling has largely been restricted to Gaussian process priors, as these are essentially the only class for which computing the posterior distribution has been tractable in practice\. In this work, we introduce Prior\-fitted Diffusion Transformers, which are diffusion models that perform Thompson sampling at inference time, after being pre\-trained using the prior\-fitted network paradigm\. To apply these models, we develop a set of practical non\-Gaussian priors for general black\-box functions \- including those that have characteristics that cannot be achieved under Gaussianity, such as priors over unimodal functions\. We also quantify the tradeoff between model size and the number of pre\-training iterations, and show that these models follow scaling laws akin to those observed in transformers defined over other modalities\. Across a set of global optimization benchmarks, we show that prior\-fitted diffusion transformers with non\-Gaussian priors can achieve improved performance compared to traditional pipelines built on Gaussian processes\.

## Bidirectional Information Flow \(BIF\) \- A Sample Efficient Hierarchical Gaussian Process for Bayesian Optimization

**Authors:** Juan D\. Guerra; Thomas Garbay; Numa Dancause; Guillaume Lajoie; Marco Bonizzato

**ID:** 149175\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149175

[Paper](<https://openreview.net/forum?id=sK7iG9MsXe>) | [PDF](<https://openreview.net/pdf?id=sK7iG9MsXe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149175>)

_Abstract unavailable from the accessible public sources._

## Variational Active Flow Matching for Discrete Online Black\-Box Optimization

**Authors:** Yashvir Singh Grewal; Daniel M Steinberg; Thang Bui; Cheng Soon Ong; Edwin Bonilla

**ID:** 154622 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CBre2rbyZ1>) | [PDF](<https://openreview.net/pdf?id=CBre2rbyZ1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154622>)

Many scientific design problems require identifying rare high\-fitness objects in vast discrete spaces using costly black\-box feedback\. Variational active\-generation methods, including variational search distributions \(VSD\) and conditioning by adaptive sampling \(CbAS\), address this by learning a distribution over high\-fitness designs via inference on a level\-set posterior\. However, these methods rely on generators with explicit likelihoods, most commonly autoregressive models, creating a mismatch with modern non\-autoregressive approaches, such as discrete diffusion and flow\-based models, which refine designs in parallel and better capture multi\-modal structure but have implicit marginal likelihoods\. We introduce \\textit\{Active Flow Matching\} \(AFM\), a variational active\-generation framework that removes this likelihood bottleneck by reformulating level\-set KL objectives over the conditional endpoint distributions of discrete flow models\. AFM yields forward\-, reverse\-, and symmetric\-KL objectives without requiring density evaluation\. We show that forward\-KL AFM is target\-consistent, recovering the level\-set posterior without access to marginal likelihoods\. Empirically, across protein and small\-molecule design tasks, AFM outperforms strong baselines, including autoregressive VSD and CbAS, inference\-time guidance, KL\-regularised fine\-tuning, and Top\-$K$ retraining\.

## Randomized Kriging Believer For Parallel Bayesian Optimization With Regret Bounds

**Authors:** Shuhei Sugiura; Ichiro Takeuchi; Shion Takeno

**ID:** 151768 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YBb07S0dsK>) | [PDF](<https://openreview.net/pdf?id=YBb07S0dsK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151768>)

We consider the optimization problem of an expensive\-to\-evaluate black\-box function, in which we can obtain noisy function values in parallel\. For this problem, parallel Bayesian optimization \(PBO\) is a promising approach, which aims to optimize with fewer function evaluations by selecting a diverse input set for parallel evaluation\. However, existing PBO methods suffer from poor practical performance or lack theoretical guarantees\. In this study, we propose a PBO method, called randomized kriging believer \(KB\), based on a well\-known KB heuristic and inheriting the advantages of the original KB: low computational complexity, a simple implementation, versatility across various BO methods, and applicability to asynchronous parallelization\. Furthermore, we show that our randomized KB achieves Bayesian expected regret guarantees\. We demonstrate the effectiveness of the proposed method through experiments, including those on real\-data emulators\.

## Post\-ADC Inference: Valid Inference After Active Data Collection

**Authors:** Shuichi Nishino; Tomohiro Shiraishi; Teruyuki Katsuoka; Ichiro Takeuchi

**ID:** 151721 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YauynQOvHf>) | [PDF](<https://openreview.net/pdf?id=YauynQOvHf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151721>)

The validity of statistical inference depends critically on how data are collected\.When data gathered through active data collection \(ADC\) are reused for a post\-hoc inferential task, conventional inference can fail because the sampling process is adaptively biased toward regions favored by the collection strategy\. This issue is especially pronounced in black\-box optimization, where sequential model\-based optimization \(SMBO\) methods such as the tree\-structured Parzen estimator \(TPE\) and Gaussian process upper confidence bound \(GP\-UCB\) preferentially concentrate evaluations in promising regions\. We study statistical inference on actively collected data when the inferential target is constructed in a data\-dependent manner after data collection\. To enable valid inference in this setting, we propose post\-ADC inference, a framework that accounts for the biases arising from both the active data collection process and the subsequent data\-driven target construction\. Our method builds on selective inference and provides valid $p$\-values and confidence intervals that correct for both sources of bias\. The framework applies to a broad class of ADC processes by imposing only assumptions on the observation noise, without requiring any assumptions on the underlying black\-box function or the surrogate model used by the SMBO algorithm\. Empirical results also show that post\-ADC inference provides valid inference for data collected by GP\-UCB and TPE\.

## Truncated Riemannian \(1\+1\)\-ES for Black\-Box Optimization with Intrinsic Dimension Guarantees

**Authors:** Zixu Wu; Hualin Zhang; Zhiqiang Xu

**ID:** 153518\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153518

[Paper](<https://openreview.net/forum?id=KlMraKGdCH>) | [PDF](<https://openreview.net/pdf?id=KlMraKGdCH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153518>)

$\(1\+1\)$\-evolution strategy \(ES\) is a classic variant of evolution strategy for black\-box optimization via direct and random search while keeping only a single solution per generation in $\\mathbb\{R\}^n$\. Despite convergence with different step\-size adaptations, it often remains impractical due to dependence on the unfavorable high dimension of the search space $\\mathbb\{R\}^n$\. In fact, many modern optimization problems are naturally constrained to low\-dimensional manifolds embedded in very high\-dimensional ambient spaces\. To see the potential of intrinsic dimensionality reduction for improving practicality, we consider the truncated Riemannian $\(1\+1\)$\-ES on a compact Riemannian submanifold $\\mathcal\{M\}\\subset\\mathbb\{R\}^n$ and establish its non\-asymptotic stationarity guarantee at the standard nonconvex zeroth\-order rate of $\\widetilde\{\\mathcal\{O\}\}\(\\varepsilon^\{\-4\}\)$ function evaluations\. The explicit Gaussian second\-moment term in the bound scales with the intrinsic tangent dimension $d=\\dim\\mathcal\{M\}$ rather than the ambient dimension $n$, while the remaining truncation dependence is captured by an explicit small\-ball drift constant $\\alpha\_d\(R/\\sigma\_0\)$\. To the best of our knowledge, this gives the first non\-asymptotic stationarity analysis for a comparison\-based ES\-type method on compact nonconvex Riemannian submanifolds under localized pullback smoothness\. Numerical illustrations on sparse PCA over spheres and smooth\-surrogate stationarity diagnostics illustrate behavior consistent with the theory and its limitations, while additional experimental studies on truncation radius diagnostics, black\-box tuning, and classical evolutionary computation benchmarks support the practical relevance of geometry\-aware comparison\-based search under limited function\-evaluation budgets\.

## DisCoMBO: Steering Expert\-in\-the\-Loop Black Box Optimization via Distributional Conformance

**Authors:** Jonas Seng; Bennet Wittelsbach; Kristian Kersting

**ID:** 153999\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153999

[Paper](<https://openreview.net/forum?id=Gy6WP1zaMc>) | [PDF](<https://openreview.net/pdf?id=Gy6WP1zaMc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153999>)

_Abstract unavailable from the accessible public sources._

## Variational Active Flow Matching for Discrete Online Black\-Box Optimization

**Authors:** Yashvir Singh Grewal; Daniel M Steinberg; Thang Bui; Cheng Soon Ong; Edwin Bonilla

**ID:** 154622\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154622

[Paper](<https://openreview.net/forum?id=CBre2rbyZ1>) | [PDF](<https://openreview.net/pdf?id=CBre2rbyZ1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154622>)

Many scientific design problems require identifying rare high\-fitness objects in vast discrete spaces using costly black\-box feedback\. Variational active\-generation methods, including variational search distributions \(VSD\) and conditioning by adaptive sampling \(CbAS\), address this by learning a distribution over high\-fitness designs via inference on a level\-set posterior\. However, these methods rely on generators with explicit likelihoods, most commonly autoregressive models, creating a mismatch with modern non\-autoregressive approaches, such as discrete diffusion and flow\-based models, which refine designs in parallel and better capture multi\-modal structure but have implicit marginal likelihoods\. We introduce \\textit\{Active Flow Matching\} \(AFM\), a variational active\-generation framework that removes this likelihood bottleneck by reformulating level\-set KL objectives over the conditional endpoint distributions of discrete flow models\. AFM yields forward\-, reverse\-, and symmetric\-KL objectives without requiring density evaluation\. We show that forward\-KL AFM is target\-consistent, recovering the level\-set posterior without access to marginal likelihoods\. Empirically, across protein and small\-molecule design tasks, AFM outperforms strong baselines, including autoregressive VSD and CbAS, inference\-time guidance, KL\-regularised fine\-tuning, and Top\-$K$ retraining\.

## An Open\-Source Training Dataset for Foundation Models for Black\-box Optimization

**Authors:** Aaron Klein; Herilalaina Rakotoarison; Luca Thale\-Bombien; David Salinas

**ID:** 139368\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139368

[Paper](<https://openreview.net/forum?id=UOjM1q3o4A>) | [PDF](<https://openreview.net/pdf?id=UOjM1q3o4A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139368>)

Most black\-box optimization methods require extensive hyperparameter tuning, often limiting their ability to generalize across different optimization domains\. Foundation models for black\-box optimization that learn optimization principles from a large collection of optimization trajectories offer a promising alternative, with the potential to outperform manually designed methods across diverse problem classes\.  However, prior work has either relied on non\-public datasets or on purely synthetic data, limiting reproducibility and generalization to real\-world problems\.  As a result, progress in this area has been constrained by the lack of large\-scale, real\-world, publicly available pre\-training data\. We introduce BBO\-Pile, the first open\-source dataset comprising over 500K optimization trajectories evaluated across 3095 different black\-boxes for different optimizers which represents by far the largest public dataset for this task\. Using this dataset, we train a family of foundation models at multiple scales, ranging from 2M to 80M parameters and from 200M to 2B training tokens, and study their scaling behavior with respect to compute\.  Our results demonstrate that large\-scale pre\-training is a viable and effective approach to imitate black\-box optimization methods, paving the way for future research in this direction\.

## Understanding the Co\-evolutionary Solution Exchange of the MOEA/D: Minimal Communication Gives Maximal Speed\-Ups

**Authors:** Benjamin Doerr; Moaad Elmoutassim; Martin S\. Krejca; Guy Mushiata Kibulu

**ID:** 149325\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149325

[Paper](<https://openreview.net/forum?id=qxu78iDNg8>) | [PDF](<https://openreview.net/pdf?id=qxu78iDNg8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149325>)

Besides domination\-based algorithms such as the NSGA\-II, the decomposition\-based MOEA/D is one of the most popular and successful optimization heuristic for multi\-objective problems\. It decomposes the problem into several, single\-objective subproblems\. By solving these in a co\-evolutionary manner and archiving non\-dominated solutions, it approximates or computes the Pareto front\. Interestingly, so far no advantages from the co\-evolutionary communication of subproblem solutions were proven\. In this first mathematical runtime analysis addressing this research question, we investigate how the mutation\-based MOEA/D solves the classic OMM benchmark when solutions are exchanged among subproblems in different distances $r$\. We show, for the first time, that the MOEA/D profits from an exchange of solutions, and that already very small communication radii $r$ are sufficient to maximally profit from this feature of the algorithm\. More precisely, for all values $r \\ge 1$ we prove a tight runtime guarantee of $\\Theta\(n^2\)$, where $n$ is the problem size\. This is asymptotically faster than the known bound of $O\(n^2 \\log n\)$ guarantee for $r=0$, which we complement with a matching bound of $\\Omega\(n^2 \\log n\)$\.

## A Dynamic Decomposition Strategy for the MOEA/D With Proven Performance Guarantees

**Authors:** Benjamin Doerr; Martin S\. Krejca; Noé Weeks

**ID:** 151518\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151518

[Paper](<https://openreview.net/forum?id=a3xSiMutbk>) | [PDF](<https://openreview.net/pdf?id=a3xSiMutbk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151518>)

The MOEA/D is one of the most successful multi\-objective evolutionary algorithms\. It operates by decomposing the optimization problem into single\-objective subproblems, which are then solved in a co\-evolutionary manner\. The performance of the MOEA/D depends critically on this decomposition\. In this work, we propose a novel way to adjust this decomposition on the fly, for the case of discrete bi\-objective optimization\. Different from all previous works in this direction, we support our new algorithm with a proven performance guarantee\. This is the first work that rigorously proves the runtime of a dynamic multi\-objective evolutionary algorithm\. For monotonic distortions of the simple LOTZ benchmark, it is known that classic decompositions leave large holes in the Pareto front, making it very hard for the MOEA/D to cover the entire Pareto front\. In contrast, we prove that our self\-adjusting MOEA/D solves all these LOTZ problems in an expected number of $O\(n^4\)$ function evaluations\. This relatively low runtime as well as the details of our mathematical proof show that the dynamic decomposition strategy indeed evolves a decomposition adjusted to each of these problem instances\.

## Regret\-Based $\(\\epsilon,\\delta\)$\-optimal Stopping Criteria for Bayesian Optimization

**Authors:** Haowei Wang; Jingyi Wang; Qiyu Wei

**ID:** 152096\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152096

[Paper](<https://openreview.net/forum?id=VY7fcL71Yf>) | [PDF](<https://openreview.net/pdf?id=VY7fcL71Yf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152096>)

Bayesian optimization \(BO\) is a widely used iterative black\-box optimization method that utilizes Gaussian process \(GP\) surrogate models\. In practice, BO is typically terminated after a fixed evaluation budget is exhausted, which can incur unnecessary cost and provides no optimality guarantee on solution quality\. Recent research in developing a practical stopping criterion has made empirical progress, yet a theoretically sound stopping criterion remains a work in progress\. In this work, we present provably tighter instantaneous regret bounds for GP upper confidence bound \(GP\-UCB\) at any given iteration\. Then, we propose stopping criteria for GP\-UCB based on this tighter bound that ensures an $\\epsilon$\-optimal solution with high probability $1\-\\delta$ upon termination\. Numerical experiments are performed to validate and demonstrate the effectiveness and efficiency of our stopping criteria\.

## Bayesian Optimization with Fisher Information Geometry: Gradient Bounds and Trust\-Region Methods

**Authors:** Saksham Kiroriwal; Julius Pfrommer; Jürgen Beyerer

**ID:** 156134 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=09tcl9K6o8>) | [PDF](<https://openreview.net/pdf?id=09tcl9K6o8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156134>)

We study Bayesian optimization \(BO\) through the lens of information geometry\. Pulling back the Fisher information metric through the surrogate posterior map yields a local sensitivity tensor on the input space, which leads to an upper bound on the gradient of reparameterizable acquisition functions\. This view explains vanishing\-gradient behavior in high\-dimensional BO and provides a common interpretation of heuristics such as RAASP and dimension\-scaled lengthscales\. Building on this analysis, we propose FITR, a trust\-region\-based BO method that replaces lengthscale\-based scaling by local pullback\-Fisher weights\. FITR is not restricted to GP kernels with explicit lengthscales\. On GP benchmarks with an SE kernel, experiments show competitive performance using FITR\. The proposed method also easily generalizes to non\-isotropic surrogates, although the gains are more task\-dependent in that setting\.

## Deferred Aggregation in Hierarchical Bayesian Optimization

**Authors:** Valentin Margraf; Jonas Hanselle; Julian Rodemann; Marcel Wever; Sebastian Vollmer; Eyke Hüllermeier

**ID:** 149951\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149951

[Paper](<https://openreview.net/forum?id=ly7pYI9c0U>) | [PDF](<https://openreview.net/pdf?id=ly7pYI9c0U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149951>)

To account for uncertainty, hierarchical Bayesian optimization marginalizes over Gaussian process hyperparameters, usually averaging models or acquisition functions\. However, this early aggregation discards information about model disagreement and is sensitive to outliers\. To address these  limitations, we propose to defer aggregation to the decision level: each  model independently proposes a candidate, and we aggregate over these  candidates via the medoid\. We study a misspecified hierarchical Gaussian process setting in  which most models have low misspecification error, while a minority are  severely misspecified\. Theoretically, we derive regret bounds showing that the misspecification penalty of early aggregation depends on the average error across all models, whereas decision\-level aggregation depends only on the low\-misspecification majority\. Empirically, we validate these findings on toy examples and further demonstrate that, across a wide range of low\- to high\-dimensional synthetic and real\-world benchmarks, decision\-level aggregation outperforms standard Bayesian optimization baselines in most cases while remaining competitive in the others\.

## Understanding the Co\-evolutionary Solution Exchange of the MOEA/D: Minimal Communication Gives Maximal Speed\-Ups

**Authors:** Benjamin Doerr; Moaad Elmoutassim; Martin S\. Krejca; Guy Mushiata Kibulu

**ID:** 149325\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149325

[Paper](<https://openreview.net/forum?id=qxu78iDNg8>) | [PDF](<https://openreview.net/pdf?id=qxu78iDNg8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149325>)

Besides domination\-based algorithms such as the NSGA\-II, the decomposition\-based MOEA/D is one of the most popular and successful optimization heuristic for multi\-objective problems\. It decomposes the problem into several, single\-objective subproblems\. By solving these in a co\-evolutionary manner and archiving non\-dominated solutions, it approximates or computes the Pareto front\. Interestingly, so far no advantages from the co\-evolutionary communication of subproblem solutions were proven\. In this first mathematical runtime analysis addressing this research question, we investigate how the mutation\-based MOEA/D solves the classic OMM benchmark when solutions are exchanged among subproblems in different distances $r$\. We show, for the first time, that the MOEA/D profits from an exchange of solutions, and that already very small communication radii $r$ are sufficient to maximally profit from this feature of the algorithm\. More precisely, for all values $r \\ge 1$ we prove a tight runtime guarantee of $\\Theta\(n^2\)$, where $n$ is the problem size\. This is asymptotically faster than the known bound of $O\(n^2 \\log n\)$ guarantee for $r=0$, which we complement with a matching bound of $\\Omega\(n^2 \\log n\)$\.

## A Dynamic Decomposition Strategy for the MOEA/D With Proven Performance Guarantees

**Authors:** Benjamin Doerr; Martin S\. Krejca; Noé Weeks

**ID:** 151518\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151518

[Paper](<https://openreview.net/forum?id=a3xSiMutbk>) | [PDF](<https://openreview.net/pdf?id=a3xSiMutbk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151518>)

The MOEA/D is one of the most successful multi\-objective evolutionary algorithms\. It operates by decomposing the optimization problem into single\-objective subproblems, which are then solved in a co\-evolutionary manner\. The performance of the MOEA/D depends critically on this decomposition\. In this work, we propose a novel way to adjust this decomposition on the fly, for the case of discrete bi\-objective optimization\. Different from all previous works in this direction, we support our new algorithm with a proven performance guarantee\. This is the first work that rigorously proves the runtime of a dynamic multi\-objective evolutionary algorithm\. For monotonic distortions of the simple LOTZ benchmark, it is known that classic decompositions leave large holes in the Pareto front, making it very hard for the MOEA/D to cover the entire Pareto front\. In contrast, we prove that our self\-adjusting MOEA/D solves all these LOTZ problems in an expected number of $O\(n^4\)$ function evaluations\. This relatively low runtime as well as the details of our mathematical proof show that the dynamic decomposition strategy indeed evolves a decomposition adjusted to each of these problem instances\.

## Regret\-Based $\(\\epsilon,\\delta\)$\-optimal Stopping Criteria for Bayesian Optimization

**Authors:** Haowei Wang; Jingyi Wang; Qiyu Wei

**ID:** 152096\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152096

[Paper](<https://openreview.net/forum?id=VY7fcL71Yf>) | [PDF](<https://openreview.net/pdf?id=VY7fcL71Yf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152096>)

Bayesian optimization \(BO\) is a widely used iterative black\-box optimization method that utilizes Gaussian process \(GP\) surrogate models\. In practice, BO is typically terminated after a fixed evaluation budget is exhausted, which can incur unnecessary cost and provides no optimality guarantee on solution quality\. Recent research in developing a practical stopping criterion has made empirical progress, yet a theoretically sound stopping criterion remains a work in progress\. In this work, we present provably tighter instantaneous regret bounds for GP upper confidence bound \(GP\-UCB\) at any given iteration\. Then, we propose stopping criteria for GP\-UCB based on this tighter bound that ensures an $\\epsilon$\-optimal solution with high probability $1\-\\delta$ upon termination\. Numerical experiments are performed to validate and demonstrate the effectiveness and efficiency of our stopping criteria\.

## Simple Extensions of Single\-Objective Acquisition Functions and Hedge Strategies for Multi\-Objective Bayesian Optimization

**Authors:** Haris Moazam Sheikh

**ID:** 151368\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151368

[Paper](<https://openreview.net/forum?id=b5xkf7NyNR>) | [PDF](<https://openreview.net/pdf?id=b5xkf7NyNR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151368>)

_Abstract unavailable from the accessible public sources._

## Expert\-guided Bayesian optimization for sustainable protein formulation

**Authors:** Anna Thomas; Georgios Zaverdinos; Petros Mandalis; Andreas Orfanoudakis; Akihiro Takino; Sohum Patnaik; David J Kraus; Panos Kostopoulos; Caroline Cotto; Nikos Tsiaparas; Dan Jurafsky; Aadit Patel

**ID:** 152852 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PtKZzOYrLi>) | [PDF](<https://openreview.net/pdf?id=PtKZzOYrLi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152852>)

Diversifying protein sources away from animal agriculture is critical for climate change mitigation and food security, but formulating sustainable protein sources that match or improve upon the properties of their animal\-based counterparts remains an expensive trial\-and\-error process\. We frame this challenge as high\-dimensional black\-box optimization with sparse approximate solutions and formalize Expert\-Guided Bayesian Optimization \(EGBO\), in which an expert, e\.g\. a human or LLM, selects a low\-dimensional subspace for BO and may adaptively expand it over time\.  We decompose EGBO's suboptimality into a selection gap and an optimization gap, and characterize the coverage–dimension tradeoff governing when expert guidance helps\. To support in silico prototyping before costly real\-world deployment, we introduce FormulateBench, a suite of 24 plant\-based formulation tasks, on which LLM\-guided EGBO outperforms all tested baselines\. When deployed to optimize two plant\-based dairy products, EGBO improves utility, as assessed by a trained human panel, by 29\\% and 26\\% in 10 iterations each\. In a comparison with a professional human food scientist given the same time budget,  EGBO achieved near\-perfect utility of 0\.992, vs\. 0\.850 for the food scientist\.

## Bayesian Optimization on Function Spaces via Sparse RKHS Manifolds

**Authors:** Davide Sartor; Meghan E Huber; Donghyun Kim; Nathan Wycoff

**ID:** 150567 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hBh55r5Asy>) | [PDF](<https://openreview.net/pdf?id=hBh55r5Asy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150567>)

Bayesian Optimization has become an established methodology for minimizing black\-box functions of a vector input\. Often, however, this parameter vector arises from the discretization of an inherently functional relationship\.  Several recent articles have considered the Functional Bayesian Optimization \(FBO\) setting, in which the variable to be optimized is not a member of a finite dimensional vector space, but rather an infinite dimensional function space\. In this work, we propose $L^0$ Manifold Optimization \(L0MO\), a simple approach to FBO which searches a sub\-manifold of a Reproducing Kernel Hilbert Space consisting of functions with a sparse representation in the kernel functions\. This results in simpler, more effective functional solutions than existing methods\. We discuss in detail the relationship between our method and existing ones, providing a unifying lens through which to view prior works\. To assess our method against the state of the art, we conduct an extensive computational study, and along the way develop a novel set of benchmark test functions which port standard finite\-dimensional ones to the infinite dimensional domain\. Our experiments demonstrate that the proposed method achieves superior performance across a wide range of test benchmarks\.

