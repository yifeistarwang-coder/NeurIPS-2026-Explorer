# Optimization / Optimization and Learning under Uncertainty

优化 / 不确定性下的优化与学习

17 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## EpiPivot: Learning to Control the Simplex Method under Epistemic Uncertainty

**Authors:** Guantao Zhao; Mahdi Noorizadegan; Shihao Yang; Nicoleta Serban

**ID:** 153200 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N65zIjBufL>) | [PDF](<https://openreview.net/pdf?id=N65zIjBufL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153200>)

The simplex method is one of the most widely used algorithms for linear programming, but its practical efficiency is highly sensitive to pivot selection and difficult to predict due to structural uncertainty in the search process\. We propose EpiPivot, which casts pivot selection as a controllable decision process under epistemic uncertainty\. EpiPivot identifies this uncertainty as two\-dimensional: temporal dependence across the optimization trajectory and joint uncertainty across candidate pivot rules, and addresses both through temporal attention and an Epistemic Neural Network with shared latent sampling\. At decision time, Thompson sampling combines these uncertainty\-aware predictions into robust pivot choices\. EpiPivot achieves significant improvements over classical and learning\-based baselines, reducing pivot cost by up to 79\\% over the best\-performing classical rule on large\-scale instances where most classical rules fail to converge within the time limit\.

## Rethinking Bayesian Optimization for Co\-Optimizing LLM Training Configurations

**Authors:** Zhiliang Chen; Alfred Leong; Shao Yong Ong; Apivich Hemachandra; Gregory Kang Ruey Lau; Chuan Sheng Foo; Zhengyuan Liu; Nancy F Chen; Bryan Kian Hsiang Low

**ID:** 148264 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z9znD1Pnfb>) | [PDF](<https://openreview.net/pdf?id=z9znD1Pnfb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148264>)

Fine\-tuning an LLM to maximize performance on a downstream task requires finding the optimal data and model configuration\. This is a black\-box optimization problem that Bayesian optimization \(BO\) addresses by sequentially evaluating training configurations and using observed performance feedback to adaptively guide the search towards better configurations\. However, directly applying BO to the joint data\-model space suffers from two fundamental challenges: the prohibitive cost of full LLM training at each iteration, and the large number of BO iterations required for effective exploration due to the high problem dimensionality\. This paper introduces JoBS, a BO\-based approach that co\-optimizes data and model configurations without requiring a full training run at every iteration\. JoBS allocates an initial portion of the optimization budget to learn a scaling\-law\-inspired performance predictor that estimates fully trained LLM performance from only a small number of training steps\. The remaining budget is then used to run BO with this predictor, eliminating the need for full training runs and enabling JoBS to explore significantly more data and model configurations within the same budget\. We analyze JoBS' average regret and derive the optimal budget allocation between predictor learning and BO iterations\. Empirically, JoBS outperforms independent data and model optimization methods and existing multi\-fidelity BO baselines across a diverse set of downstream tasks\. Our code is available at https://github\.com/a35453779/JoBS\.

## Ballad: Bandit\-Based LLM Routing for Automated Heuristic Discovery

**Authors:** Samidha Verma; Ankit Anand; Sayan Ranu

**ID:** 154569 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CdDR7cp69H>) | [PDF](<https://openreview.net/pdf?id=CdDR7cp69H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154569>)

Modern automated heuristic discovery \(AHD\) systems increasingly rival hand\-crafted heuristics by leveraging Large Language Models \(LLMs\) to iteratively mutate and refine solutions\. A natural assumption is that more powerful and more expensive models consistently yield better heuristics\. We challenge this empirically: across multiple NP\-hard combinatorial optimization problems, we find no consistent advantage for larger, costlier models\. This raises a deeper question: given a pool of LLMs spanning frontier and freely hosted or open\-weight models, how should one adaptively select which model to invoke at each step of the search? The challenge is non\-trivial\. The optimal LLM may shift over the course of a run, and because one LLM's output seeds the context for subsequent calls, each model's reward signal is non\-stationary and entangled across the heuristic population, thus violating the independence assumptions of classical online decision\-making settings\. We address this through Ballad \(Bandit\-based LLM Routing for Automated Heuristic Discovery\), an online bandit algorithm that learns to orchestrate a pool of LLMs into an ensemble that matches or exceeds what any soloist LLM achieves alone\. This orchestration is powered by an LLM selection policy that favors rare, high\-scoring heuristics over stable averages, a DAG\-based credit propagation mechanism through the genealogy of the heuristic population, and discounting of stale observations to remain attuned to each model's current utility\. Across five NP\-hard combinatorial optimization problems and a pool of four models of varying capability and cost, Ballad not only matches the best individual LLM in hindsight but, in several cases, surpasses every individual model while reducing API cost by up to 65\.6% relative to always using the strongest model\.

## POETS: Uncertainty\-Aware LLM Optimization via Compute\-Efficient Policy Ensembles

**Authors:** Nicolas Menet; Andreas Krause; Abbas Rahimi

**ID:** 152181 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UxxhCpGK1B>) | [PDF](<https://openreview.net/pdf?id=UxxhCpGK1B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152181>)

Balancing exploration and exploitation is a core challenge in sequential decision\-making and black\-box optimization\. We introduce POETS \(Policy Ensembles for Thompson Sampling\), a novel framework that bridges uncertainty quantification and policy optimization\. Our approach is grounded in the insight that policies trained with Kullback\-Leibler \(KL\) regularization implicitly encode an underlying reward function\. Building on this, POETS bypasses the complex, nested process of training an uncertainty\-aware reward model and separately fitting a policy to this model\. Instead, we directly train a policy ensemble to capture epistemic uncertainty by matching implicitly encoded reward functions to online, bootstrapped data\. To overcome the prohibitive compute and memory constraints of ensembling Large Language Models \(LLMs\), POETS utilizes an efficient architecture: the ensemble shares a pre\-trained backbone while maintaining diversity through independent Low\-Rank Adaptation \(LoRA\) branches\. Theoretically, we prove that POETS implicitly conducts KL\-regularized Thompson sampling and thus inherits strong cumulative regret bounds of $O\(\\sqrt\{T \\gamma\_T\}\)$\. Empirically, we demonstrate that POETS achieves state\-of\-the\-art sample efficiency across diverse scientific discovery domains, including protein search and quantum circuit design\. Furthermore, it improves the optimization trajectories of reinforcement learning, proving particularly robust in off\-policy settings with experience replay or in small dataset regimes\.

## Instance\-Dependent Bandit Convex Optimization in One Dimension

**Authors:** Felix Breuer; Alireza Bakhtiari; Kevin Jamieson

**ID:** 153738 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=J6eKxKuBeW>) | [PDF](<https://openreview.net/pdf?id=J6eKxKuBeW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153738>)

We study the instance\-dependent sample complexity of one\-dimensional stochastic bandit convex optimization in the fixed\-confidence setting\. First, we consider minimizer localization, where the learner seeks to identify a point within distance $\\varepsilon$ of the unique minimizer\. We introduce a new instance\-dependent quantity $\\Delta\_\\varepsilon\(f\)$, corresponding to the threshold for which the sublevel set of $f\-\\min f$ has length $2\\varepsilon$\. We prove a lower bound of order $\\Delta\_\\varepsilon\(f\)^\{\-2\}$ and give a bisection\-style algorithm that matches this rate up to logarithmic factors\. We then revisit the simple\-regret setting, where the goal is to identify an $\\varepsilon$\-optimal point\. Surprisingly, no comparable instance\-dependent improvement is possible: every correct algorithm has sample complexity of order $\\varepsilon^\{\-2\}$ on every instance, matching the minimax rate up to constants\. Together, these results separate the statistical complexity of minimizer localization from that of simple\-regret optimization in one\-dimensional convex bandits\.

## When do Prophets Profit in Prediction Markets?

**Authors:** Anri Gu; Nicole Kagan; Alec Sun; Jibang Wu; Haifeng Xu

**ID:** 150204 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jx8WQWUych>) | [PDF](<https://openreview.net/pdf?id=jx8WQWUych>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150204>)

Prediction markets aggregate dispersed beliefs into prices that act as probabilistic forecasts of uncertain events\. Classical theory establishes a clean equivalence between forecasting accuracy and trading profit, but only for the specific automated market maker \(AMM\) design\. However, the largest exchanges today are based on central limit order books in which informed forecasters routinely lose money while uninformed strategies can profit on simple heuristics\. We resolve this discrepancy by establishing a formal equivalence between predictive accuracy and profitability\. For any strictly proper scoring rule $S$, we exhibit a \`\`proper'' betting strategy that depends only on the forecaster's prediction $\\mathbf\{p\}$ and the market price $\\mathbf\{q\}$ and earns positive expected profit whenever $\\mathbf\{p\}$ outperforms $\\mathbf\{q\}$ under $S$ and the market has sufficient liquidity\. The proof rests on a decomposition of expected profit that strictly generalizes the classical AMM guarantee and also explains how strategies can profit without an accuracy edge\. Empirically, across thousands of forecasts from AI models, proper betting is the only strategy that reliably converts accuracy into profit, and we further identify systematic forecasting personas and show how the optimal proper strategy varies across them\. A month\-long live deployment achieves $\+80\.33$% return on investment with a Sharpe ratio of $3\.35$\.

## When do Prophets Profit in Prediction Markets?

**Authors:** Anri Gu; Nicole Kagan; Alec Sun; Jibang Wu; Haifeng Xu

**ID:** 150204\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150204

[Paper](<https://openreview.net/forum?id=jx8WQWUych>) | [PDF](<https://openreview.net/pdf?id=jx8WQWUych>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150204>)

Prediction markets aggregate dispersed beliefs into prices that act as probabilistic forecasts of uncertain events\. Classical theory establishes a clean equivalence between forecasting accuracy and trading profit, but only for the specific automated market maker \(AMM\) design\. However, the largest exchanges today are based on central limit order books in which informed forecasters routinely lose money while uninformed strategies can profit on simple heuristics\. We resolve this discrepancy by establishing a formal equivalence between predictive accuracy and profitability\. For any strictly proper scoring rule $S$, we exhibit a \`\`proper'' betting strategy that depends only on the forecaster's prediction $\\mathbf\{p\}$ and the market price $\\mathbf\{q\}$ and earns positive expected profit whenever $\\mathbf\{p\}$ outperforms $\\mathbf\{q\}$ under $S$ and the market has sufficient liquidity\. The proof rests on a decomposition of expected profit that strictly generalizes the classical AMM guarantee and also explains how strategies can profit without an accuracy edge\. Empirically, across thousands of forecasts from AI models, proper betting is the only strategy that reliably converts accuracy into profit, and we further identify systematic forecasting personas and show how the optimal proper strategy varies across them\. A month\-long live deployment achieves $\+80\.33$% return on investment with a Sharpe ratio of $3\.35$\.

## Ballad: Bandit\-Based LLM Routing for Automated Heuristic Discovery

**Authors:** Samidha Verma; Ankit Anand; Sayan Ranu

**ID:** 154569\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154569

[Paper](<https://openreview.net/forum?id=CdDR7cp69H>) | [PDF](<https://openreview.net/pdf?id=CdDR7cp69H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154569>)

Modern automated heuristic discovery \(AHD\) systems increasingly rival hand\-crafted heuristics by leveraging Large Language Models \(LLMs\) to iteratively mutate and refine solutions\. A natural assumption is that more powerful and more expensive models consistently yield better heuristics\. We challenge this empirically: across multiple NP\-hard combinatorial optimization problems, we find no consistent advantage for larger, costlier models\. This raises a deeper question: given a pool of LLMs spanning frontier and freely hosted or open\-weight models, how should one adaptively select which model to invoke at each step of the search? The challenge is non\-trivial\. The optimal LLM may shift over the course of a run, and because one LLM's output seeds the context for subsequent calls, each model's reward signal is non\-stationary and entangled across the heuristic population, thus violating the independence assumptions of classical online decision\-making settings\. We address this through Ballad \(Bandit\-based LLM Routing for Automated Heuristic Discovery\), an online bandit algorithm that learns to orchestrate a pool of LLMs into an ensemble that matches or exceeds what any soloist LLM achieves alone\. This orchestration is powered by an LLM selection policy that favors rare, high\-scoring heuristics over stable averages, a DAG\-based credit propagation mechanism through the genealogy of the heuristic population, and discounting of stale observations to remain attuned to each model's current utility\. Across five NP\-hard combinatorial optimization problems and a pool of four models of varying capability and cost, Ballad not only matches the best individual LLM in hindsight but, in several cases, surpasses every individual model while reducing API cost by up to 65\.6% relative to always using the strongest model\.

## Reduced Cost Influence Functions for Predict\-then\-Optimize under Noisy Data

**Authors:** William Zhang; Saurabh Amin; Georgia Perakis

**ID:** 154555 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CiBySOXzK9>) | [PDF](<https://openreview.net/pdf?id=CiBySOXzK9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154555>)

Machine learning models deployed in decision\-making pipelines, from vehicle routing to dynamic pricing to clinical decision support, must remain reliable in the face of low\-quality training data\. We study a predict\-then\-optimize setting in which an upstream model predicts the cost vector of a downstream linear program, with a large pool of noisy training data supplemented by a small curated set of clean data\. We introduce Reduced Cost Influence Functions \(RCIFs\), which combine influence functions from robust statistics with the geometry of linear optimization to estimate how each training point shifts downstream decisions\. Building on this, we propose a reweighting algorithm that uses RCIFs to downweight harmful training points and reduce downstream regret\. Experiments on random linear programs and shortest\-path problems show that our approach reduces regret, and accompanying theory characterizes properties of RCIFs and identifies regimes favorable to our method relative to baselines\.

## Learning Polyhedral Conformal Sets for Robust Optimization

**Authors:** Shuyi Chen; Wenbin Zhou; Shixiang Zhu

**ID:** 150887 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eeozf66KYf>) | [PDF](<https://openreview.net/pdf?id=eeozf66KYf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150887>)

Robust optimization is a widely used framework for decision\-making under uncertainty, particularly in high\-stakes applications where reliability is critical\. A key challenge in this paradigm lies in constructing uncertainty sets that balance robustness and performance: overly conservative sets lead to pessimistic decisions, while insufficient coverage risks failure in practice\. Recent approaches based on conformal prediction provide finite\-sample, distribution\-free guarantees for uncertainty sets, but remain largely task\-agnostic and disconnected from downstream decision objectives\. In this paper, we propose a decision\-aware conformal prediction framework that directly learns the geometry of uncertainty sets to improve robust decision\-making\. Our approach introduces a polyhedral nonconformity score that induces feature\-dependent uncertainty sets, and a three\-step procedure that integrates conformal calibration, robust\-decision\-aware learning, and re\-calibration to correct for post\-selection bias\. We establish finite\-sample coverage guarantees for the final, data\-dependent uncertainty set, while achieving improved decision performance by reducing unnecessary conservativeness\. This work bridges the gap between statistical validity and decision optimality, providing a principled framework for data\-driven robust optimization\.

## Learning Scenario Reduction for Two\-Stage Robust Optimization with Discrete Uncertainty

**Authors:** TIANJUE LIN; Jianan Zhou; Jieyi Bi; Yaoxin Wu; Wen Song; Zhiguang Cao; Jie Zhang

**ID:** 148281 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z2LE8XaW7F>) | [PDF](<https://openreview.net/pdf?id=z2LE8XaW7F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148281>)

_Abstract unavailable from the accessible public sources._

## Global Optimality for Constrained Exploration via Penalty Regularization

**Authors:** Florian Wolf; Ilyas Fatkhullin; Niao He

**ID:** 152447 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T2vHX7E0dN>) | [PDF](<https://openreview.net/pdf?id=T2vHX7E0dN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152447>)

Efficient exploration is a central problem in reinforcement learning and is often formalized as maximizing the entropy of the state\-action occupancy measure\. While unconstrained maximum\-entropy exploration is relatively well understood, real\-world exploration is often constrained by safety, resource, or imitation requirements\. This constrained setting is particularly challenging because entropy maximization lacks additive structure, rendering Bellman\-equation\-based methods inapplicable\. Moreover, scalable approaches require policy parameterization, inducing non\-convexity in both the objective and the constraints\. To our knowledge, the only prior model\-free policy\-gradient approach for this setting under general policy parameterization is due to Ying et al\. \(2025\)\. Unfortunately, their guarantees are limited to weak regret and ergodic averages, which do not imply that the final output is a single deployable policy that is near\-optimal and nearly feasible\. In this work we take a different approach to this problem, and propose Policy Gradient Penalty \(PGP\) method, a single\-loop policy\-space method that enforces general convex occupancy\-measure constraints via quadratic\-penalty regularization\. PGP constructs pseudo\-rewards that yield gradient estimates of the penalized objective, subsequently exploiting the classical Policy Gradient Theorem\. We further establish the regularity of the penalized objective, providing the smoothness properties needed to justify the convergence of PGP\. Leveraging hidden convexity and strong duality, we then establish global last\-iterate convergence guarantees, attaining an $\\epsilon$\-optimal constrained entropy value with $\\epsilon$\-bounded constraint violation despite policy\-induced non\-convexity\. We validate PGP through ablations on a grid\-world benchmark and further demonstrate scalability on two challenging continuous\-control tasks\.

## Multi\-Variable Conformal Prediction: Optimizing Prediction Sets without Data Splitting

**Authors:** Laura Lützow; Simone Garatti; Marco Campi; Lars Lindemann; Matthias Althoff

**ID:** 152406 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TKl1c8WCXr>) | [PDF](<https://openreview.net/pdf?id=TKl1c8WCXr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152406>)

Conformal prediction constructs prediction sets with finite\-sample coverage guarantees, but its calibration stage is structurally constrained to a scalar score function and a single threshold variable — forcing shapes of prediction sets to be fixed before calibration, typically through data splitting\. We introduce multi\-variable conformal prediction \(MCP\), a framework that extends conformal prediction to vector\-valued score functions with multiple simultaneous calibration variables\. Building on scenario theory as a principled framework for certifying data\-driven decisions, MCP unifies prediction set design and calibration into a single optimization problem, eliminating data splitting without sacrificing coverage guarantees\. We propose two computationally efficient variants: RemMCP, grounded in constrained optimization with constraint removal, which admits a clean generalization of split conformal prediction; and RelMCP, based on iterative optimization with constraint relaxation, which supports non\-convex score functions at the cost of possibly greater conservatism\. Through numerical experiments on ellipsoidal and multi\-modal prediction sets, we demonstrate that RemMCP and RelMCP consistently meet the target coverage with prediction set sizes smaller than or comparable to those of baselines with data split, while considerably reducing variance across calibration runs — a direct consequence of using all available data for shape optimization and calibration simultaneously\.

## When do Prophets Profit in Prediction Markets?

**Authors:** Anri Gu; Nicole Kagan; Alec Sun; Jibang Wu; Haifeng Xu

**ID:** 150204\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150204

[Paper](<https://openreview.net/forum?id=jx8WQWUych>) | [PDF](<https://openreview.net/pdf?id=jx8WQWUych>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150204>)

Prediction markets aggregate dispersed beliefs into prices that act as probabilistic forecasts of uncertain events\. Classical theory establishes a clean equivalence between forecasting accuracy and trading profit, but only for the specific automated market maker \(AMM\) design\. However, the largest exchanges today are based on central limit order books in which informed forecasters routinely lose money while uninformed strategies can profit on simple heuristics\. We resolve this discrepancy by establishing a formal equivalence between predictive accuracy and profitability\. For any strictly proper scoring rule $S$, we exhibit a \`\`proper'' betting strategy that depends only on the forecaster's prediction $\\mathbf\{p\}$ and the market price $\\mathbf\{q\}$ and earns positive expected profit whenever $\\mathbf\{p\}$ outperforms $\\mathbf\{q\}$ under $S$ and the market has sufficient liquidity\. The proof rests on a decomposition of expected profit that strictly generalizes the classical AMM guarantee and also explains how strategies can profit without an accuracy edge\. Empirically, across thousands of forecasts from AI models, proper betting is the only strategy that reliably converts accuracy into profit, and we further identify systematic forecasting personas and show how the optimal proper strategy varies across them\. A month\-long live deployment achieves $\+80\.33$% return on investment with a Sharpe ratio of $3\.35$\.

## Ballad: Bandit\-Based LLM Routing for Automated Heuristic Discovery

**Authors:** Samidha Verma; Ankit Anand; Sayan Ranu

**ID:** 154569\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154569

[Paper](<https://openreview.net/forum?id=CdDR7cp69H>) | [PDF](<https://openreview.net/pdf?id=CdDR7cp69H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154569>)

Modern automated heuristic discovery \(AHD\) systems increasingly rival hand\-crafted heuristics by leveraging Large Language Models \(LLMs\) to iteratively mutate and refine solutions\. A natural assumption is that more powerful and more expensive models consistently yield better heuristics\. We challenge this empirically: across multiple NP\-hard combinatorial optimization problems, we find no consistent advantage for larger, costlier models\. This raises a deeper question: given a pool of LLMs spanning frontier and freely hosted or open\-weight models, how should one adaptively select which model to invoke at each step of the search? The challenge is non\-trivial\. The optimal LLM may shift over the course of a run, and because one LLM's output seeds the context for subsequent calls, each model's reward signal is non\-stationary and entangled across the heuristic population, thus violating the independence assumptions of classical online decision\-making settings\. We address this through Ballad \(Bandit\-based LLM Routing for Automated Heuristic Discovery\), an online bandit algorithm that learns to orchestrate a pool of LLMs into an ensemble that matches or exceeds what any soloist LLM achieves alone\. This orchestration is powered by an LLM selection policy that favors rare, high\-scoring heuristics over stable averages, a DAG\-based credit propagation mechanism through the genealogy of the heuristic population, and discounting of stale observations to remain attuned to each model's current utility\. Across five NP\-hard combinatorial optimization problems and a pool of four models of varying capability and cost, Ballad not only matches the best individual LLM in hindsight but, in several cases, surpasses every individual model while reducing API cost by up to 65\.6% relative to always using the strongest model\.

## Rethinking Bayesian Optimization for Co\-Optimizing LLM Training Configurations

**Authors:** Zhiliang Chen; Alfred Leong; Shao Yong Ong; Apivich Hemachandra; Gregory Kang Ruey Lau; Chuan Sheng Foo; Zhengyuan Liu; Nancy F Chen; Bryan Kian Hsiang Low

**ID:** 148264\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148264

[Paper](<https://openreview.net/forum?id=z9znD1Pnfb>) | [PDF](<https://openreview.net/pdf?id=z9znD1Pnfb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148264>)

Fine\-tuning an LLM to maximize performance on a downstream task requires finding the optimal data and model configuration\. This is a black\-box optimization problem that Bayesian optimization \(BO\) addresses by sequentially evaluating training configurations and using observed performance feedback to adaptively guide the search towards better configurations\. However, directly applying BO to the joint data\-model space suffers from two fundamental challenges: the prohibitive cost of full LLM training at each iteration, and the large number of BO iterations required for effective exploration due to the high problem dimensionality\. This paper introduces JoBS, a BO\-based approach that co\-optimizes data and model configurations without requiring a full training run at every iteration\. JoBS allocates an initial portion of the optimization budget to learn a scaling\-law\-inspired performance predictor that estimates fully trained LLM performance from only a small number of training steps\. The remaining budget is then used to run BO with this predictor, eliminating the need for full training runs and enabling JoBS to explore significantly more data and model configurations within the same budget\. We analyze JoBS' average regret and derive the optimal budget allocation between predictor learning and BO iterations\. Empirically, JoBS outperforms independent data and model optimization methods and existing multi\-fidelity BO baselines across a diverse set of downstream tasks\. Our code is available at https://github\.com/a35453779/JoBS\.

## Rethinking Bayesian Optimization for Co\-Optimizing LLM Training Configurations

**Authors:** Zhiliang Chen; Alfred Leong; Shao Yong Ong; Apivich Hemachandra; Gregory Kang Ruey Lau; Chuan Sheng Foo; Zhengyuan Liu; Nancy F Chen; Bryan Kian Hsiang Low

**ID:** 148264\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148264

[Paper](<https://openreview.net/forum?id=z9znD1Pnfb>) | [PDF](<https://openreview.net/pdf?id=z9znD1Pnfb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148264>)

Fine\-tuning an LLM to maximize performance on a downstream task requires finding the optimal data and model configuration\. This is a black\-box optimization problem that Bayesian optimization \(BO\) addresses by sequentially evaluating training configurations and using observed performance feedback to adaptively guide the search towards better configurations\. However, directly applying BO to the joint data\-model space suffers from two fundamental challenges: the prohibitive cost of full LLM training at each iteration, and the large number of BO iterations required for effective exploration due to the high problem dimensionality\. This paper introduces JoBS, a BO\-based approach that co\-optimizes data and model configurations without requiring a full training run at every iteration\. JoBS allocates an initial portion of the optimization budget to learn a scaling\-law\-inspired performance predictor that estimates fully trained LLM performance from only a small number of training steps\. The remaining budget is then used to run BO with this predictor, eliminating the need for full training runs and enabling JoBS to explore significantly more data and model configurations within the same budget\. We analyze JoBS' average regret and derive the optimal budget allocation between predictor learning and BO iterations\. Empirically, JoBS outperforms independent data and model optimization methods and existing multi\-fidelity BO baselines across a diverse set of downstream tasks\. Our code is available at https://github\.com/a35453779/JoBS\.

