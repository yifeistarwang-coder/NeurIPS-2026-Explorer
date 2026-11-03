# Optimization / Optimization and Learning under Uncertainty

优化 / 不确定性下的优化与学习

18 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Online Decision\-Focused Learning under Semi\-Bandit Feedback

**Authors:** Aabhash Dhakal; Tim Lachner; Jayanta Mandi; Marco Foschini; Christoph M Flath

**ID:** 150539 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hOOVrWbGun>) | [PDF](<https://openreview.net/pdf?id=hOOVrWbGun>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150539>)

Decision\-focused learning \(DFL\) improves on the Predict\-then\-optimize \(PtO\) pipeline by training predictive models to minimize decision regret rather than prediction loss\. Most DFL methods assume offline full\-feedback data with complete action cost vectors\. Many real\-world decision systems instead operate in an online setting: in each round, the agent acts using past feedback and observes costs only for the selected components, yielding semi\-bandit feedback\. Bandit methods optimize regret in this regime, but train models with predictive updates rather than decision\-focused updates\. In this paper, we formalize online semi\-bandit DFL: decision\-focused learning for online optimization problems with semi\-bandit feedback\. The most straightforward extension would impute unobserved components with the model's own predictions and compute the decision\-focused gradient\. But this creates a self\-confirming imputation degeneracy: imputation errors can flip counterfactual decisions that define the decision\-focused gradient, biasing the representation update and reinforcing errors in later imputations\. To address this degeneracy, we propose BayesianSPO, which combines an analytically updated Bayesian last\-layer head with masked decision\-focused learning\. The Bayesian head supplies both \(i\) uncertainty to balance exploration and exploitation and \(ii\) stable imputations for unobserved components, while masking unobserved component gradients prevents those imputations from directly corrupting the representation update\. Across knapsack, shortest\-path, and portfolio benchmarks, BayesianSPO achieves the lowest mean cumulative regret on all five instances and the improvement is statistically significant on four of them\.

## Adaptive Generate\-Rank\-Verify: Inference\-Time Search with Costly Verification

**Authors:** Shaddin Dughmi; Mahdi Haghifam; Yusuf H Kalayci

**ID:** 152362 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Tcux9XpSfo>) | [PDF](<https://openreview.net/pdf?id=Tcux9XpSfo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152362>)

Many inference\-time language\-model pipelines combine a cheap reward signal with an expensive verifier, such as exact answer checking in mathematical reasoning or hidden\-test execution in code generation\. We formalize this setting using a learning\-theoretic lens as generative active search: a cost\-sensitive first\-positive search problem in which a policy adaptively samples candidates from an unknown distribution, observes cheap scores, and pays for verifier labels until it finds a positive example\. For a fixed prompt, the generator and reward model induce two unknown objects: a distribution over reward scores and a score\-conditioned success function\. When these quantities are known, we characterize the distribution\-aware optimal policy using a dynamic programming approach\. In the realistic and practical setting where both the score distribution and success function are unknown, we propose ADAP, a shellwise adaptive generate\-rank\-verify algorithm that progressively increases the number of sampled responses and top\-ranked verifications\. Under the monotonicity assumption that higher reward scores are no less likely to pass verification, we show that ADAP achieves expected cost within a constant factor of the distribution\-aware optimum\. We complement this result with learning\-theoretic lower bounds, based on a centered star number, showing that structural assumptions on the score\-\-label relationship are necessary\. Experiments on mathematical reasoning and competitive programming validate the predicted advantage over both fixed non\-adaptive policies and difficulty\-adaptive baselines\.

## Group Distributionally Robust Optimization with Flexible Sample Queries

**Authors:** Haomin Bai; Dingzhi Yu; Shuai Li; Haipeng Luo; Lijun Zhang

**ID:** 154085 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GKDd9FPubr>) | [PDF](<https://openreview.net/pdf?id=GKDd9FPubr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154085>)

Group distributionally robust optimization \(GDRO\) aims to learn models that perform well across $m$ distributions simultaneously\. Existing methods either \(i\) query $m$ samples per round, which imposes strict implementation requirements, or \(ii\) query only a single sample per round, which requires many rounds to converge and therefore leads to long runtime\. To avoid these limitations, we introduce a novel setting called \\emph\{flexible sample queries\} \(FSQ\), which allows the number of samples that can be queried to vary across rounds\. Under the FSQ setting, we cast GDRO as a two\-player game: one performs non\-oblivious online convex optimization, while the other tackles a non\-oblivious prediction with limited advice \(PLA\) problem\. In this game, the first player updates its decision using follow\-the\-regularized\-leader with stochastic gradients\. For the second player, we develop a new PLA method equipped with an adaptive exploration strategy that can leverage an arbitrary per\-round sample size\. We then establish the \*first\* high\-probability regret bound for non\-oblivious PLA\. By integrating these components, we develop an anytime GDRO algorithm that supports FSQ, and derive a high\-probability optimization error bound of $O\\left\(\\frac\{1\}\{t\}\\sqrt\{\\sum\_\{j=1\}^t \\frac\{m\}\{r\_j\}\\log m\}\\right\)$, where $r\_j$ is the sample size at round $j$\. This result demonstrates that the optimization error decreases as the per\-round sample sizes increase, and implies the same near\-optimal sample complexity of $O\(m\\log \(m\)/\\epsilon^2\)$ for any fixed sample size $r\\in\[m\]$\.

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

## Ballad: Bandit\-Based LLM Routing for Automated Heuristic Discovery

**Authors:** Samidha Verma; Ankit Anand; Sayan Ranu

**ID:** 154569 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CdDR7cp69H>) | [PDF](<https://openreview.net/pdf?id=CdDR7cp69H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154569>)

Modern automated heuristic discovery \(AHD\) systems increasingly rival hand\-crafted heuristics by leveraging Large Language Models \(LLMs\) to iteratively mutate and refine solutions\. A natural assumption is that more powerful and more expensive models consistently yield better heuristics\. We challenge this empirically: across multiple NP\-hard combinatorial optimization problems, we find no consistent advantage for larger, costlier models\. This raises a deeper question: given a pool of LLMs spanning frontier and freely hosted or open\-weight models, how should one adaptively select which model to invoke at each step of the search? The challenge is non\-trivial\. The optimal LLM may shift over the course of a run, and because one LLM's output seeds the context for subsequent calls, each model's reward signal is non\-stationary and entangled across the heuristic population, thus violating the independence assumptions of classical online decision\-making settings\. We address this through Ballad \(Bandit\-based LLM Routing for Automated Heuristic Discovery\), an online bandit algorithm that learns to orchestrate a pool of LLMs into an ensemble that matches or exceeds what any soloist LLM achieves alone\. This orchestration is powered by an LLM selection policy that favors rare, high\-scoring heuristics over stable averages, a DAG\-based credit propagation mechanism through the genealogy of the heuristic population, and discounting of stale observations to remain attuned to each model's current utility\. Across five NP\-hard combinatorial optimization problems and a pool of four models of varying capability and cost, Ballad not only matches the best individual LLM in hindsight but, in several cases, surpasses every individual model while reducing API cost by up to 65\.6% relative to always using the strongest model\.

## Reduced Cost Influence Functions for Predict\-then\-Optimize under Noisy Data

**Authors:** William Zhang; Saurabh Amin; Georgia Perakis

**ID:** 154555 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CiBySOXzK9>) | [PDF](<https://openreview.net/pdf?id=CiBySOXzK9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154555>)

Machine learning models deployed in decision\-making pipelines, from vehicle routing to dynamic pricing to clinical decision support, must remain reliable in the face of low\-quality training data\. We study a predict\-then\-optimize setting in which an upstream model predicts the cost vector of a downstream linear program, with a large pool of noisy training data supplemented by a small curated set of clean data\. We introduce Reduced Cost Influence Functions \(RCIFs\), which combine influence functions from robust statistics with the geometry of linear optimization to estimate how each training point shifts downstream decisions\. Building on this, we propose a reweighting algorithm that uses RCIFs to downweight harmful training points and reduce downstream regret\. Experiments on random linear programs and shortest\-path problems show that our approach reduces regret, and accompanying theory characterizes properties of RCIFs and identifies regimes favorable to our method relative to baselines\.

## Multi\-Variable Conformal Prediction: Optimizing Prediction Sets without Data Splitting

**Authors:** Laura Lützow; Simone Garatti; Marco Campi; Lars Lindemann; Matthias Althoff

**ID:** 152406 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TKl1c8WCXr>) | [PDF](<https://openreview.net/pdf?id=TKl1c8WCXr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152406>)

Conformal prediction constructs prediction sets with finite\-sample coverage guarantees, but its calibration stage is structurally constrained to a scalar score function and a single threshold variable — forcing shapes of prediction sets to be fixed before calibration, typically through data splitting\. We introduce multi\-variable conformal prediction \(MCP\), a framework that extends conformal prediction to vector\-valued score functions with multiple simultaneous calibration variables\. Building on scenario theory as a principled framework for certifying data\-driven decisions, MCP unifies prediction set design and calibration into a single optimization problem, eliminating data splitting without sacrificing coverage guarantees\. We propose two computationally efficient variants: RemMCP, grounded in constrained optimization with constraint removal, which admits a clean generalization of split conformal prediction; and RelMCP, based on iterative optimization with constraint relaxation, which supports non\-convex score functions at the cost of possibly greater conservatism\. Through numerical experiments on ellipsoidal and multi\-modal prediction sets, we demonstrate that RemMCP and RelMCP consistently meet the target coverage with prediction set sizes smaller than or comparable to those of baselines with data split, while considerably reducing variance across calibration runs — a direct consequence of using all available data for shape optimization and calibration simultaneously\.

## Resolution\-Aware Structural Density Peak Clustering

**Authors:** Jie Yang; Hsiang\-Ting Chen; Yan Ma; Xinyan Liang; Avinash Singh; Liang Du; Cheng\-You Lu; Chenglong Zhang; Bingbing Jiang; Weiping Ding; Wei Chen

**ID:** 154801 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Arqu5rMwrd>) | [PDF](<https://openreview.net/pdf?id=Arqu5rMwrd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154801>)

Density Peak Clustering \(DPC\) focuses on identifying centers and propagates labels at the sample level, which makes density estimation cutoff\-sensitive and assignment chain\-vulnerable, yielding suboptimal performance under heterogeneous densities and complex cluster structures\. This paper argues that density peaks inference should instead be performed on resolution\-controlled structural units: density becomes a stable count statistic, relative distance inherits the separation of the enclosing hierarchy, and assignment runs over a compact graph of structural units rather than long sample\-to\-sample chains\. This view is realized in Resolution\-Aware Structural Density Peak Clustering \(RSDP\), which builds a constrained hierarchy, selects an admissible level via a single resolution parameter, and applies a one\-pass DPC rule on the selected structural units\. Under a faithful\-realization condition, it is proved that RSDP's empirical $\\gamma$\-ranking recovers the dominant population units and that its one\-pass assignment recovers the sampled ground\-truth partition\. On synthetic and real\-world datasets, RSDP achieves the highest ACC and NMI against state\-of\-the\-art DPC variants, exceeding the strongest by 19\.91% and 9\.09% in average ACC and NMI, respectively\.

## Learning Scenario Reduction for Two\-Stage Robust Optimization with Discrete Uncertainty

**Authors:** TIANJUE LIN; Jianan Zhou; Jieyi Bi; Yaoxin Wu; Wen Song; Zhiguang Cao; Jie Zhang

**ID:** 148281 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z2LE8XaW7F>) | [PDF](<https://openreview.net/pdf?id=z2LE8XaW7F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148281>)

Two\-Stage Robust Optimization \(2RO\) with discrete uncertainty is challenging, often rendering exact solutions prohibitive\. Scenario reduction alleviates this issue by selecting a small, representative subset of scenarios to enable tractable computation\. However, existing methods are largely \*problem\-agnostic\*, operating solely on the uncertainty set without consulting the feasible region or recourse structure\. In this paper, we introduce PRISE, a \*problem\-driven\* sequential lookahead heuristic that constructs reduced scenario sets by evaluating the marginal impact of each scenario\. While PRISE yields high\-quality scenario subsets, each selection step requires solving multiple subproblems, making it computationally expensive at scale\. To address this, we propose NeurPRISE, a neural surrogate model built on a GNN\-Transformer backbone that encodes the per\-scenario structure via graph convolution and captures cross\-scenario interactions through attention\. NeurPRISE is trained via imitation learning with a gain\-aware ranking objective, which distills marginal gain information from PRISE into a learned scoring function for scenario ranking and selection\. Extensive results on three 2RO problems show that NeurPRISE consistently achieves competitive regret relative to comprehensive methods, maintains strong scalability with varying numbers of scenarios, and delivers $7$\-\-$200\\times$ speedup over PRISE\. NeurPRISE also exhibits strong zero\-shot generalization, effectively handling instances with larger problem scales \(up to $5\\times$\), more scenarios \(up to $4\\times$\), and distribution shifts\.

## Rethinking Bayesian Optimization for Co\-Optimizing LLM Training Configurations

**Authors:** Zhiliang Chen; Alfred Leong; Shao Yong Ong; Apivich Hemachandra; Gregory Kang Ruey Lau; Chuan Sheng Foo; Zhengyuan Liu; Nancy F Chen; Bryan Kian Hsiang Low

**ID:** 148264 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z9znD1Pnfb>) | [PDF](<https://openreview.net/pdf?id=z9znD1Pnfb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148264>)

Fine\-tuning an LLM to maximize performance on a downstream task requires finding the optimal data and model configuration\. This is a black\-box optimization problem that Bayesian optimization \(BO\) addresses by sequentially evaluating training configurations and using observed performance feedback to adaptively guide the search towards better configurations\. However, directly applying BO to the joint data\-model space suffers from two fundamental challenges: the prohibitive cost of full LLM training at each iteration, and the large number of BO iterations required for effective exploration due to the high problem dimensionality\. This paper introduces JoBS, a BO\-based approach that co\-optimizes data and model configurations without requiring a full training run at every iteration\. JoBS allocates an initial portion of the optimization budget to learn a scaling\-law\-inspired performance predictor that estimates fully trained LLM performance from only a small number of training steps\. The remaining budget is then used to run BO with this predictor, eliminating the need for full training runs and enabling JoBS to explore significantly more data and model configurations within the same budget\. We analyze JoBS' average regret and derive the optimal budget allocation between predictor learning and BO iterations\. Empirically, JoBS outperforms independent data and model optimization methods and existing multi\-fidelity BO baselines across a diverse set of downstream tasks\. Our code is available at https://github\.com/a35453779/JoBS\.

## A Little Robustness Is All You Need: Leveraging Predictions for Contextual Optimization

**Authors:** Billy Jin; Thomas Lavastida

**ID:** 150467 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hofrVF7K3J>) | [PDF](<https://openreview.net/pdf?id=hofrVF7K3J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150467>)

A common approach for contextual optimization first trains a model to predict the unknown state from the context, and then takes the action that is optimal for the predicted state\.  We show that this follow\-the\-prediction policy can be brittle: for several standard problems, even a minimum\-variance predictor with arbitrarily small RMSE can incur constant excess loss\.  We propose a simple policy that robustifies any black\-box predictor by optimizing against the worst case in an $\\varepsilon$\-neighborhood of the prediction\.  We identify a problem\-specific quantity, the \\emph\{robust optimization gap\}, that captures the price of this hedging, and prove a general bound on the loss\. We instantiate the framework for contextual posted pricing, ski rental, and house flipping, deriving closed\-form robust policies and $O\(\\eta^\{2/3\}\)$ loss bounds in all three settings, where $\\eta$ is the RMSE of the predictor\.  For posted pricing, this improves upon a result of Medina and Vassilvitskii \(2017\), and with a substantially simpler argument\.

## Regret\-Optimal Wasserstein\-Robust Regression

**Authors:** Sloan Nietert; Daniel Kuhn

**ID:** 155805 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2kzyCdrkUn>) | [PDF](<https://openreview.net/pdf?id=2kzyCdrkUn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155805>)

Wasserstein distributionally robust optimization \(DRO\) is a prominent paradigm for robust decision\-making in the face of distributional uncertainty\. Given a nominal data distribution, DRO selects a decision which minimizes the risk for a worst\-case data distribution within a prescribed Wasserstein radius $\\varepsilon$ of the nominal distribution\. In this paper, we investigate the quality of DRO decisions when evaluated on a worst\-case distribution within a 2\-Wasserstein $\\varepsilon$\-neighborhood of the nominal distribution, as measured by excess risk or ex\-ante regret\. Beginning with multivariate linear regression and extending to ridge regression, we first identify the asymptotic complexity of robust decision\-making in the $\\varepsilon \\to 0$ limit, characterized by a problem\-specific condition number $\\kappa$\. In this regime, a wide spectrum of simple algorithms, including DRO, achieve the instance\-optimal rate of $O\(\\kappa \\varepsilon^2\)$\. For fixed $\\varepsilon &gt; 0$, we prove that DRO still achieves the minimax rate if the problem is of an appropriate \`\`low rank''\. On the other hand, we identify significant failure modes where DRO is provably suboptimal by dimension\-dependent factors\. To resolve this, we introduce a new condition number reduction \(CNR\) procedure which achieves the optimal rate and admits tractable approximation algorithms\. We support these theoretical results with numerical experiments comparing the performance of various estimators including DRO and CNR\.

## POETS: Uncertainty\-Aware LLM Optimization via Compute\-Efficient Policy Ensembles

**Authors:** Nicolas Menet; Andreas Krause; Abbas Rahimi

**ID:** 152181 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UxxhCpGK1B>) | [PDF](<https://openreview.net/pdf?id=UxxhCpGK1B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152181>)

Balancing exploration and exploitation is a core challenge in sequential decision\-making and black\-box optimization\. We introduce POETS \(Policy Ensembles for Thompson Sampling\), a novel framework that bridges uncertainty quantification and policy optimization\. Our approach is grounded in the insight that policies trained with Kullback\-Leibler \(KL\) regularization implicitly encode an underlying reward function\. Building on this, POETS bypasses the complex, nested process of training an uncertainty\-aware reward model and separately fitting a policy to this model\. Instead, we directly train a policy ensemble to capture epistemic uncertainty by matching implicitly encoded reward functions to online, bootstrapped data\. To overcome the prohibitive compute and memory constraints of ensembling Large Language Models \(LLMs\), POETS utilizes an efficient architecture: the ensemble shares a pre\-trained backbone while maintaining diversity through independent Low\-Rank Adaptation \(LoRA\) branches\. Theoretically, we prove that POETS implicitly conducts KL\-regularized Thompson sampling and thus inherits strong cumulative regret bounds of $O\(\\sqrt\{T \\gamma\_T\}\)$\. Empirically, we demonstrate that POETS achieves state\-of\-the\-art sample efficiency across diverse scientific discovery domains, including protein search and quantum circuit design\. Furthermore, it improves the optimization trajectories of reinforcement learning, proving particularly robust in off\-policy settings with experience replay or in small dataset regimes\.

## Decision Focused Scenario Learning for Contextual Stochastic Programming

**Authors:** Jonathan Hornewall; Tito Homem\-De\-Mello; Vincent Leclere

**ID:** 151045 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dPKq7jP43J>) | [PDF](<https://openreview.net/pdf?id=dPKq7jP43J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151045>)

Decision\-focused scenario learning for contextual two\-stage stochastic programming has emerged as a promising research direction, but open questions remain\. A general theory for when scenario generators can yield optimal decision policies is currently lacking\. Many existing methods require strict assumptions on which second\-stage data are allowed to be random\. Generally, the non\-differentiability of the decision\-focused objective is a source of difficulty\. This paper makes three theoretical contributions, each aiming to remedy one of these challenges\. First, we present a comprehensive theory for when scenario generators can induce optimal policies, showing that learning a single out\-of\-support scenario component is often sufficient\. Second, we demonstrate a theoretical and methodological equivalence result between learning different second\-stage data components, relaxing assumptions required for applying existing methods\. Third, we study log\-barrier smoothing enabled training, presenting representability and optimization results\. Finally, leveraging the theory, we propose a novel method inspired by interior\-point methods from classical optimization, and validate it on standard benchmarks\.

## Learning Polyhedral Conformal Sets for Robust Optimization

**Authors:** Shuyi Chen; Wenbin Zhou; Shixiang Zhu

**ID:** 150887 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eeozf66KYf>) | [PDF](<https://openreview.net/pdf?id=eeozf66KYf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150887>)

Robust optimization is a widely used framework for decision\-making under uncertainty, particularly in high\-stakes applications where reliability is critical\. A key challenge in this paradigm lies in constructing uncertainty sets that balance robustness and performance: overly conservative sets lead to pessimistic decisions, while insufficient coverage risks failure in practice\. Recent approaches based on conformal prediction provide finite\-sample, distribution\-free guarantees for uncertainty sets, but remain largely task\-agnostic and disconnected from downstream decision objectives\. In this paper, we propose a decision\-aware conformal prediction framework that directly learns the geometry of uncertainty sets to improve robust decision\-making\. Our approach introduces a polyhedral nonconformity score that induces feature\-dependent uncertainty sets, and a three\-step procedure that integrates conformal calibration, robust\-decision\-aware learning, and re\-calibration to correct for post\-selection bias\. We establish finite\-sample coverage guarantees for the final, data\-dependent uncertainty set, while achieving improved decision performance by reducing unnecessary conservativeness\. This work bridges the gap between statistical validity and decision optimality, providing a principled framework for data\-driven robust optimization\.

## Global Optimality for Constrained Exploration via Penalty Regularization

**Authors:** Florian Wolf; Ilyas Fatkhullin; Niao He

**ID:** 152447 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T2vHX7E0dN>) | [PDF](<https://openreview.net/pdf?id=T2vHX7E0dN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152447>)

Efficient exploration is a central problem in reinforcement learning and is often formalized as maximizing the entropy of the state\-action occupancy measure\. While unconstrained maximum\-entropy exploration is relatively well understood, real\-world exploration is often constrained by safety, resource, or imitation requirements\. This constrained setting is particularly challenging because entropy maximization lacks additive structure, rendering Bellman\-equation\-based methods inapplicable\. Moreover, scalable approaches require policy parameterization, inducing non\-convexity in both the objective and the constraints\. To our knowledge, the only prior model\-free policy\-gradient approach for this setting under general policy parameterization is due to Ying et al\. \(2025\)\. Unfortunately, their guarantees are limited to weak regret and ergodic averages, which do not imply that the final output is a single deployable policy that is near\-optimal and nearly feasible\. In this work we take a different approach to this problem, and propose Policy Gradient Penalty \(PGP\) method, a single\-loop policy\-space method that enforces general convex occupancy\-measure constraints via quadratic\-penalty regularization\. PGP constructs pseudo\-rewards that yield gradient estimates of the penalized objective, subsequently exploiting the classical Policy Gradient Theorem\. We further establish the regularity of the penalized objective, providing the smoothness properties needed to justify the convergence of PGP\. Leveraging hidden convexity and strong duality, we then establish global last\-iterate convergence guarantees, attaining an $\\epsilon$\-optimal constrained entropy value with $\\epsilon$\-bounded constraint violation despite policy\-induced non\-convexity\. We validate PGP through ablations on a grid\-world benchmark and further demonstrate scalability on two challenging continuous\-control tasks\.

## EpiPivot: Learning to Control the Simplex Method under Epistemic Uncertainty

**Authors:** Guantao Zhao; Mahdi Noorizadegan; Shihao Yang; Nicoleta Serban

**ID:** 153200 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N65zIjBufL>) | [PDF](<https://openreview.net/pdf?id=N65zIjBufL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153200>)

The simplex method is one of the most widely used algorithms for linear programming, but its practical efficiency is highly sensitive to pivot selection and difficult to predict due to structural uncertainty in the search process\. We propose EpiPivot, which casts pivot selection as a controllable decision process under epistemic uncertainty\. EpiPivot identifies this uncertainty as two\-dimensional: temporal dependence across the optimization trajectory and joint uncertainty across candidate pivot rules, and addresses both through temporal attention and an Epistemic Neural Network with shared latent sampling\. At decision time, Thompson sampling combines these uncertainty\-aware predictions into robust pivot choices\. EpiPivot achieves significant improvements over classical and learning\-based baselines, reducing pivot cost by up to 79\\% over the best\-performing classical rule on large\-scale instances where most classical rules fail to converge within the time limit\.

