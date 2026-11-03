# Theory / Reinforcement Learning and Planning

理论 / 强化学习与规划理论

49 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Tail\-Risk\-Aware Stackelberg Learning

**Authors:** Yujing Chen

**ID:** 153252 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MdGZGoFqFn>) | [PDF](<https://openreview.net/pdf?id=MdGZGoFqFn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153252>)

We study Stackelberg learning in which followers use lower\-tail CVaR as a reward utility\.  In cooperative bandits, where both agents share the CVaR objective, we prove a spectral\-risk lower bound that gives $\\Omega\(\\sqrt\{K\(AB\-1\)/\\tau\}\)$ for CVaR and give a Stackelberg\-factorized CVaR\-UCB algorithm with matching $\\widetilde O\\sqrt\{ABK/\\tau\}\)$ regret up to logarithmic factors\.  Thus CVaR learning admits a minimax\-optimal realizable response certificate in bandits\.  In Markov games, a risk\-neutral leader faces a CVaR\-sensitive follower\.  We introduce a certified follower\-response oracle based on shortfall planning and decompose true Stackelberg regret into certified oracle regret and benchmark response certification error\.  The first term is sublinear without coverage, while true regret requires comparison coverage and response compatibility\.

## Statistical field theory for Markov decision processes under uncertainty

**Authors:** George Stamatescu

**ID:** 156672 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156672>)

A statistical field theory is introduced for finite state and action Markov decision processes with unknown parameters, in a Bayesian setting\. The Bellman equation, for policy evaluation and the optimal value function in finite and discounted infinite horizon problems, is studied as a disordered interacting dynamical system\. The Markov decision process transition probabilities and mean\-rewards are interpreted as quenched random variables and the value functions, or the iterates of the Bellman equation, are deterministic variables that evolve dynamically\. The posterior over value functions is then equivalent to the quenched average of the Fourier inverse of the Martin\-Siggia\-Rose\-De Dominicis\-Janssen generating function\. The formalism enables the use of methods from field theory to compute posterior moments of value functions\. The paper presents two such methods, corresponding to two distinct asymptotic limits\. First, the classical approximation is applied, corresponding to the asymptotic data limit\. This approximation recovers so\-called plug\-in estimators for the mean of the value functions\. Second, a dynamic mean field theory is derived, showing that under certain assumptions the state\-action values are statistically independent across state\-action pairs in the asymptotic state space limit\. The state\-action value statistics can be computed from a set of self\-consistent mean field equations, which we call dynamic mean field programming \(DMFP\)\. Collectively, the results provide analytic insight into the structure of model uncertainty in Markov decision processes, and pave the way toward more advanced field theoretic techniques and applications to planning and reinforcement learning problems\.

## A Geometric Perspective on Reward Function Updates in Inverse Reinforcement Learning

**Authors:** Anish Abhijit Diwan; Jan Peters; Oleg Arenz

**ID:** 149606 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oqLzCT1cus>) | [PDF](<https://openreview.net/pdf?id=oqLzCT1cus>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149606>)

Inverse Reinforcement Learning \(IRL\) is classically solved using Lagrangian optimization, by jointly optimizing a primal\-dual problem with gradient descent to obtain the optimal reward function parameters and corresponding optimal policy\. While this algorithmic view of IRL has been highly influential, gradient\-based reward updates only paint a partial picture, largely ignoring the geometry of the problem in occupancy space\. In this paper, we present an occupancy\-space view of reward updates in IRL\. We leverage the insight that both the optimal solution and its geometry in occupancy space are known, and show that the geometry along the e\-geodesic \(straight line in occupancy space\) toward the optimal occupancy directly affects the gradient of the IRL dual problem in reward parameter space\. This perspective naturally suggests preconditioning the dual gradient with the average Fisher information along the occupancy trajectory\. We show that this preconditioned gradient is just a convex interpolation of the old reward and a new target reward, yielding efficient natural\-gradient\-style updates with little additional computational overhead\. We then analyse these occupancy\-space reward updates from a Mirror Descent \(MD\) perspective, and show that policy search over the resulting rewards induces approximate entropic MD on the policy\. Finally, we conclude with convergence results of such geometry\-aware IRL algorithms\.

## Emergence of Physical Intelligence via Controllable Information Production

**Authors:** Tristan Shah; Stas Tiomkin

**ID:** 152582 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S15gujrcKN>) | [PDF](<https://openreview.net/pdf?id=S15gujrcKN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152582>)

Intrinsic Motivation \(IM\) aims to train agents without external rewards, enabling useful behavior to emerge from the agent's interaction with its environment alone\. However, the dominant IM approaches rely on information\-theoretic quantities with designer\-chosen variables, introducing bias and lacking a principled connection to dynamics or optimal control \(OC\)\. We introduce Controllable Information Production \(CIP\), a new foundation for IM explicitly grounded in dynamical systems and OC\. CIP measures the rate at which an agent produces information, capturing controllable complexity without external knowledge or bias\. CIP unifies IM and OC into a single framework, formalizing physical intelligence as the control of information production\. It further reveals connections between the structure of the value function and Kolmogorov–Sinai entropy\. CIP consistently outperforms prior IM methods on standard benchmarks in robot learning and solves tasks they fail on, including humanoid self\-righting\. These results support a general organizing principle: physical intelligence emerges from driving systems toward the edge of controllable chaos\.

## Robust PAC Learning of Concurrent Stochastic Games

**Authors:** Angel Y He; David Parker

**ID:** 154906 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A36NpIVJiV>) | [PDF](<https://openreview.net/pdf?id=A36NpIVJiV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154906>)

We introduce the first Probably Approximately Correct \(PAC\) learning framework for general\-sum concurrent stochastic games \(CSGs\) with transition uncertainty, while addressing the challenge of Nash equilibrium \(NE\) existence\. Our algorithm maintains data\-driven $L^1$ confidence sets over transition kernels and solves a robust CSG to compute a social\-welfare optimal $\\varepsilon$\-NE, using a novel robust MDP\-based exploration mechanism to drive joint state\-action coverage without unilateral control\. Crucially, we introduce a Nash margin characterisation that enables principled reasoning about equilibrium existence: the framework either returns an $\\varepsilon$\-approximate NE whose social\-welfare value is $\\varepsilon$\-close to optimal, or provides a sound certificate that no exact NE exists\. Under a minimum reachability condition $p\_\{\\mathrm\{reach\}\} &gt; 0$ over all state\-action pairs, the algorithm terminates after a polynomial number of interactions, with sample complexity $\\widetilde\{\\mathcal\{O\}\}\\left\( \{R\_\{\\max\}^2 H^4 \|S\|^2 \|A\| / \(p\_\{\\mathrm\{reach\}\} \\varepsilon^2\)\} \\right\)$\. Empirical results on benchmark CSGs demonstrate near\-optimal performance, correct handling of equilibrium \(non\-\)existence, and sample complexity consistent with theory; implementation available at: https://anonymous\.4open\.science/r/pg1\.

## Improved Regret Analysis For Parallel Gaussian Process Bandit Optimization

**Authors:** Shion Takeno; Shogo Iwazaki

**ID:** 153555 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KXCNleX2pP>) | [PDF](<https://openreview.net/pdf?id=KXCNleX2pP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153555>)

This paper studies the regret analysis for parallel Gaussian process \(GP\) bandit optimization\. The known regret upper bounds for the widely used GP batched upper confidence bound and GP batched Thompson sampling \(GP\-BTS\) suffer from a multiplicative factor with respect to the batch size $Q$\. To avoid this degradation, existing analyses require a polynomial number of uncertainty sampling \(US\) for $Q$ at the beginning of optimization\. However, this initial US phase is often ineffective in practice\. This paper shows that the regret upper bound without the multiplicative factor on $Q$ can be achieved without the initial US phase, using GP\-BTS as an example\. Furthermore, we show much better regret upper bounds in the noiseless setting than in the noisy setting, as in the sequential GP bandit setting\.

## A Memory Efficient Unified Algorithm for Online Learning of Linear Dynamical Systems

**Authors:** Yuval Ran\-Milo; Angelos Assos; Elad Hazan

**ID:** 155619 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4D7dKjdRtk>) | [PDF](<https://openreview.net/pdf?id=4D7dKjdRtk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155619>)

Motivated by the challenge of stabilizing unknown linear dynamical systems \(LDS\) from observations, we study the fundamental prerequisite of online prediction\. Our goal is to achieve sublinear regret with a memory footprint that adapts to the intrinsic complexity of the dynamics rather than the full hidden\-state dimension\. We focus on the practically central regime of systems with low \*instability complexity\*—eigenvalues outside the real stable interval that do not decay rapidly, together with non\-semisimple modes—potentially embedded in an otherwise stable real spectrum of much higher dimension; we write $k$ for this count\. This regime is the primary setting in which stabilization is plausible: we show that many systems with high instability complexity cannot be stabilized without exponentially large controls\. Thus, prediction is meaningful for stabilization precisely when the instability complexity is small\. Within this regime, we introduce a unified online algorithm that handles every LDS \(including systems with complex or exploding modes\) with a learnable parameter count of $\\widetilde\{O\}\(k^2\)$, completely independent of the number of stable real modes\. Finally, we show that any bounded\-coefficient filter\-based predictor requires at least $k$ filter directions\.

## Reinforcement Learning for Exponential Utility: Algorithms and Convergence in Discounted MDPs

**Authors:** Gugan Chandrashekhar Mallika Thoppe; Prashanth L\.A\.; Ankur Naskar; Sanjay P\. Bhat

**ID:** 151794 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XyLfduvyWq>) | [PDF](<https://openreview.net/pdf?id=XyLfduvyWq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151794>)

Reinforcement learning \(RL\) for exponential\-utility optimization in discounted Markov decision processes \(MDPs\) lacks principled value\-based algorithms\. We address this gap in the fixed risk\-aversion setting\. Building on the Bellman\-type equation for exponential utility studied in Porteus \[1975\], we derive two Q\-value\-style extensions and show that the associated operators are contractions in the $L\_\\infty$ and sup\-log/Thompson metrics, respectively\. We characterize their fixed points and prove that the induced greedy stationary policy is optimal for the exponential\-utility objective among stationary policies\. These structural results lead to two model\-free algorithms: a two\-timescale Q\-learning\-\-style algorithm, for which we establish almost\-sure convergence and provide finite\-time convergence rates via timescale separation, and a one\-timescale algorithm governed by a sublinear power\-law operator\. Since the latter does not admit a global contraction in standard metrics, we prove its convergence using delicate arguments based on local Lipschitzness, monotonicity, homogeneity, and Dini derivatives, and provide a scalar finite\-time analysis that highlights the challenges in obtaining convergence rates  in the vector case\. Our work provides a foundation for value\-based RL under exponential\-utility objectives\.

## Bellman Residual Minimization for Control: Geometry, Stationarity, and Convergence

**Authors:** Donghwan Lee; Hyukjun Yang

**ID:** 152752 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QblP84vh1D>) | [PDF](<https://openreview.net/pdf?id=QblP84vh1D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152752>)

Markov decision problems are most commonly solved via dynamic programming\. Another approach is Bellman residual minimization, which directly minimizes the squared Bellman residual objective function\. However, compared to dynamic programming, this approach has received relatively less attention, mainly because it is often less efficient in practice and can be more difficult to extend to model\-free settings such as reinforcement learning\. Nonetheless, Bellman residual minimization has several advantages that make it worth investigating, such as more stable convergence with function approximation for value functions\. While Bellman residual methods for policy evaluation have been widely studied, methods for policy optimization \(control tasks\) have been scarcely explored\. In this paper, we establish foundational results for the control Bellman residual minimization for policy optimization\.

## Dynamic Latent Routing

**Authors:** Fangyuan Yu; Xin Su; Amir Abdullah

**ID:** 153785 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IgAxk6rEiw>) | [PDF](<https://openreview.net/pdf?id=IgAxk6rEiw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153785>)

We investigate the temporal concatenation of sub\-policies in Markov Decision Processes \(MDP\) with time\-varying reward functions\. We introduce General Dijkstra Search \(GDS\), and prove that it discovers optimal goal\-reaching policies by concatenating sub\-policies optimal for intermediate goals\. Motivated by the \`\`search, select, update'' principle underlying GDS, we propose Dynamic Latent Routing \(DLR\), a language\-model post\-training method that jointly learns discrete latent codes, routing policies, and model parameters through dynamic search in a single training stage\. In low\-data fine\-tuning settings, DLR matches or outperforms supervised fine\-tuning across four datasets and six models, achieving a mean gain of $\+6\.6$ percentage points, while prior discrete\-latent baselines consistently underperform SFT\. Mechanistic analyses and targeted code ablations show that DLR learns structured routing behaviors with distinct causal roles\. In six\-digit arithmetic, a canonical mechanistic interpretability benchmark, DLR externalizes into discrete routing tokens algorithmic subtasks previously studied through activation and circuit analysis\.

## Adaptive Joint Testing of Policies in Discounted Markov Decision Processes

**Authors:** Po\-An Wang; Kaito Ariu

**ID:** 148204 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zaV6HqToRX>) | [PDF](<https://openreview.net/pdf?id=zaV6HqToRX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148204>)

We study fixed\-confidence joint policy testing in discounted tabular Markov decision processes under active exploration\. Given a finite family of target policies, the learner observes a single adaptive trajectory and must certify the sign of every target\-policy value with probability at least $1\-\\delta$\. We identify the instance\-specific first\-order benchmark for this problem: a characteristic time $T^\\star\(p\)$, defined by a max\-\-min program over stationary occupancy measures and sign\-flipped alternatives\. We then develop PT\-ACE$\(\\mu\)$, an online algorithm that couples stabilized exchange\-based learning of a bottleneck occupancy allocation, trajectory\-compatible navigation from averaged occupancies, and parallel certified policywise stopping via scalar frontier tests\. Under a trajectory\-side anchor\-policy ergodicity condition, and when run with certified numerical subroutines and vanishing input tolerances, PT\-ACE$\(\\mu\)$ is $\\delta$\-correct and, for every sufficiently small admissible fixed floor $\\mu&gt;0$, satisfies $$ \\limsup\_\{\\delta\\downarrow0\} \\frac\{\\mathbb E\_p\[\\tau\_\\delta\]\}\{\\log\(1/\\delta\)\} \\le \(1\+c\(\\mu,p\)\)T^\\star\(p\), \\qquad c\(\\mu,p\)\\to0\\quad\\text\{as \}\\mu\\downarrow0\. $$ Thus a single adaptive trajectory can certify multiple policy signs at the instance\-specific lower\-bound rate in the vanishing\-floor limit\.

## Posterior Sampling\-based Online Learning for Episodic POMDPs

**Authors:** Dengwang Tang; Dongze Ye; Rahul Jain; Ashutosh Nayyar; Pierluigi Nuzzo

**ID:** 155289 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6fR2Ocenmx>) | [PDF](<https://openreview.net/pdf?id=6fR2Ocenmx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155289>)

Learning in POMDPs is known to be significantly harder than in MDPs\. In this paper, we consider the online learning problem for episodic POMDPs with unknown transition and observation models\. We propose a Posterior Sampling\-based reinforcement learning algorithm for POMDPs \(PS4POMDP\), which is much simpler and more implementable compared to state\-of\-the\-art optimism\-based online learning algorithms for POMDPs\. We show that the Bayesian regret of the proposed algorithm scales as the square root of the number of episodes and is polynomial in the other parameters\. In a general setting, the regret scales exponentially in the horizon length $H$, and we show that this is inevitable by providing a lower bound\. However, when the POMDP is undercomplete and weakly revealing \(a common assumption in the recent literature\), we establish a polynomial Bayesian regret bound\. We finally propose a posterior sampling algorithm for multi\-agent POMDPs, and show it too has sublinear regret\.

## Statistical Complexity of Soft Bellman Residual Minimization

**Authors:** Enoch H\. Kang; Kyoungseok Jang

**ID:** 152791 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QJrpoS9mBV>) | [PDF](<https://openreview.net/pdf?id=QJrpoS9mBV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152791>)

Bellman residual minimization \(BRM\) provides a scalable, gradient\-based approach to offline reinforcement learning in large state spaces\. While globally convergent gradient\-based soft \(i\.e\., entropy\-regularized\) BRM methods for neural networks have recently been established, their statistical complexity under stochastic gradient descent remains largely unknown\. In this paper, we address this theoretical gap for soft BRM\. Through a novel Lyapunov\-based analysis, we establish an $\\mathcal\{O\}\(1 / n\)$ average argument stability bound, which translates directly into a $\\mathcal\{O\}\(1 / n\)$ statistical complexity for the soft BRM objective\.

## Posterior\-Tracking for Best\-Arm Identification in Bernoulli Bandits

**Authors:** Kaito Ariu; Junpei Komiyama

**ID:** 152621 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RiUqt2Ryf5>) | [PDF](<https://openreview.net/pdf?id=RiUqt2Ryf5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152621>)

We study fixed\-confidence best\-arm identification in Bernoulli bandits\. A learner sequentially samples from $K$ arms and aims to identify the unique best arm while keeping the error probability at most $\\delta$\. We ask whether the classical lower bound on expected sample complexity can be matched asymptotically without ongoing forced exploration\.  We propose a posterior\-tracking algorithm that first samples each arm once, then repeatedly draws a bandit instance from the posterior, computes the oracle allocation for that instance, and randomly selects the next arm according to that allocation\. Stopping is based on a Bernoulli generalized likelihood ratio test\. Since the algorithm has no explicit forced\-exploration mechanism after initialization, the main technical challenge is to show that posterior randomness alone sustains sufficient exploration\. We prove that, with summable tail probabilities, every arm is sampled at least logarithmically often\. This yields an integrable stabilization time after which the true best arm remains the empirical leader and the corresponding generalized likelihood ratio statistic grows linearly at the information\-theoretic lower\-bound rate\. Consequently, the proposed procedure is $\\delta$\-correct and achieves asymptotically optimal expected sample complexity as $\\delta \\to 0$\.

## Graph\-Based Stochastic\-Power\-UCT: Monte\-Carlo Graph Search with Power Mean Estimation

**Authors:** Tung Tran; Viet Bao; Hoang Ta; Tuan Dam

**ID:** 154641 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C61SqbC0JZ>) | [PDF](<https://openreview.net/pdf?id=C61SqbC0JZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154641>)

Tree\-based Monte\-Carlo Tree Search \(MCTS\) duplicates the same state when it is reached through different trajectories, which can waste simulations in stochastic MDPs\. We introduce Graph\-Based Stochastic\-Power\-UCT \(GS\-Power\-UCT\), which shares states reached at the same planning depth while keeping separate values for states reached at different depths\. This design applies to general stochastic MDPs, including problems with cycles\. We prove that for a fixed planning horizon, the root estimate converges to the finite\-horizon value at rate $O\(n^\{\-1/2\}\)$, matching tree\-based Stochastic\-Power\-UCT while reusing samples across shared states\. We also study two full\-state variants: GS\-Power\-UCT\-F, which stores one node per physical state to increase sample sharing but may mix values from different remaining horizons, and GS\-Power\-UCT\-F$^\+$, which uses an adaptive horizon to control this bias\. The latter converges to $V^\{\\star\}\(s\_0\)$, the optimal infinite\-horizon  discounted value at the root state $s\_0$, when the remaining cross\-depth gap vanishes\. Experiments on stochastic planning benchmarks show improved sample efficiency over tree\-based and graph\-based baselines\.

## Reinforcement Learning with Multi\-Step Lookahead Information Via Adaptive Batching

**Authors:** Nadav Merlis

**ID:** 151980 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WOddCmkhLw>) | [PDF](<https://openreview.net/pdf?id=WOddCmkhLw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151980>)

We study tabular reinforcement learning problems with multiple steps of lookahead information\. Before acting, the learner observes $\\ell$ steps of future transition and reward realizations: the exact state the agent would reach and the rewards it would collect under any possible course of action\.  While it has been shown that such information can drastically boost the value, finding the optimal policy is NP\-hard, and it is common to apply one of two tractable heuristics: processing the lookahead in chunks of predefined sizes \('fixed batching policies'\), and model predictive control\. We first illustrate the problems with these two approaches and propose utilizing the lookahead in adaptive \(state\-dependent\) batches; we refer to such policies as adaptive batching policies \(ABPs\)\. We derive the optimal Bellman equations for these strategies and design an optimistic regret\-minimizing algorithm that enables learning the optimal ABP when interacting with unknown environments\. Our regret bounds are order\-optimal up to a potential factor of the lookahead horizon $\\ell$, which can usually be considered a small constant\.

## Nearly Optimal Fixed\-Confidence Best\-Arm Identification with 1\-Bit Feedback

**Authors:** Khang Luong; Thai Son Dinh; Hoang Ta; Hung TRAN; Tuan Dam

**ID:** 155304 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6ZgRA8gi3F>) | [PDF](<https://openreview.net/pdf?id=6ZgRA8gi3F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155304>)

We study fixed\-confidence best\-arm identification under strict 1\-bit feedback constraints\. At each round, the learner selects an arm and a query set, and receives only a single bit indicating whether the sampled reward belongs to that set\. We consider a distribution\-free finite\-variance setting with arm\-wise localization, where direct empirical mean estimation is no longer available and clipping becomes unavoidable\. We first formulate a time\-uniform 1\-bit mean\-estimation primitive based on randomized threshold queries and a clipped tail\-integral identity\. We then embed this primitive into candidate\-challenger best\-arm identification algorithms\. A fixed\-clipping algorithm gives a simple anytime $\(\\epsilon,\\delta\)$\-PAC guarantee, while a phased adaptive\-clipping algorithm matches the clipping level to the current resolution and yields a gap\-adaptive sample complexity\. We also prove a two\-arm information\-theoretic lower bound showing that the logarithmic penalty caused by finite\-variance 1\-bit feedback is intrinsic\. Consequently, the phased algorithm is optimal in the leading dependence up to lower\-order $\\log\\log$ factors\.

## Lyapunov\-Driven Optimistic Learning for Online Scheduling with Multi\-Stage Tasks

**Authors:** Yutong Huang; Xin Liu

**ID:** 151855 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XPHswP8j6l>) | [PDF](<https://openreview.net/pdf?id=XPHswP8j6l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151855>)

We study online scheduling in a shared\-resource system where tasks of different types arrive sequentially and compete for limited resources\. Each task is modeled as an $H$\-stage episodic Markov decision process, which captures the sequential resource\-allocation decisions made within the task\. At the system level, the learner must coordinate resource sharing across tasks to maximize the long\-term ratio of cumulative reward to cumulative cost over $K$ tasks, without knowledge of the task distribution\. The key challenges are coupled intra\-task Markovian dynamics and inter\-task ratio maximization, further complicated by unknown models and large or continuous state spaces\. To address these challenges, we propose Contextual Optimistic Lyapunov Decomposition \(COLD\), a Lyapunov\-driven optimistic learning algorithm\. COLD converts the long\-term ratio objective into a queue\-adjusted per\-task surrogate, thereby decoupling reward\-cost optimization from statistical value estimation\. It uses double\-optimistic least\-squares value iteration to estimate reward and cost values under linear function approximation, and a softmax policy to smooth the greedy update with only a controlled approximation error\. We prove a regret bound of $\\tilde\{\\mathcal\{O\}\}\(\\sqrt\{Md^3H^3T\}\)$, where $M$ is the number of task types, $d$ is the feature dimension, $H$ is the episode horizon, and $T=KH$ is the number of interaction steps\. The $\\sqrt\{T\}$ dependence is order\-optimal up to logarithmic factors, and the bound scales with the feature dimension rather than the size of the state space\. Experiments on synthetic environments and an empirical KuaiRand\-based MDP demonstrate the effectiveness of the proposed method\.

## Primal\-Dual Representation Learning for Low\-Rank Constrained MDPs

**Authors:** Chenhao Zhou; zhang chao; Wensong Bai; Hanbin Zhao; Hui Qian

**ID:** 151600 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZKslJI2cOt>) | [PDF](<https://openreview.net/pdf?id=ZKslJI2cOt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151600>)

Representation learning has substantially improved the efficiency of unconstrained continuous\-state Markov Decision Processes \(MDPs\), but its extension to Constrained MDPs \(CMDPs\) is difficult because the transition representation must be learned while constraint violation is controlled\. In this paper, we study representation learning for low\-rank CMDPs with continuous state spaces, and propose REP\-PD\-TEG for the soft cumulative\-violation setting\. In the feature learning period, the algorithm interacts with the environment using a decaying\-$\\epsilon$\-greedy mixture execution policy, and uses the collected samples to learn transition features by maximum likelihood\. Based on the learned features, it constructs uncertainty bonuses and plans with an optimistic Lagrangian objective to obtain the return policy\. We prove regret and soft\-violation guarantees for the return policies, and quantify the influence of the decaying\-$\\epsilon$\-greedy exploration\. In particular, REP\-PD\-TEG achieves the optimal \\\(\\widetilde O\(\\sqrt K\)\\\) return policy bound, and gives a \\\(\\widetilde O\(K^\{3/4\}\)\\\) overall sample bound when exploratory actions are charged\. For the stricter hard cumulative violation, where feasibility must be verified episode by episode, we propose REP\-PD\-H\-TEG\. It plans under a bonus\-corrected lower\-confidence utility certificate with the learned representation, and performs a stabilized dual search to obtain the return policy, yielding regret and hard\-violation bounds\. Together, these results give the first theoretically guaranteed representation\-learning method for low\-rank continuous\-state CMDPs with both soft cumulative guarantees and certified hard\-violation control\.

## Toward Online Robust Zero\-Sum Markov Games with Function Approximation

**Authors:** Chenhao Zhou; Jiyu Wei

**ID:** 153979 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H60bYmRIUG>) | [PDF](<https://openreview.net/pdf?id=H60bYmRIUG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153979>)

Online robust zero\-sum Markov games pose a coupled operator\-learning and game\-solving problem:   from nominal interaction data, the learner must recover a worst\-case minimax Bellman operator   while maintaining strategic coverage and controlling stage\-game approximation error\. Existing   robust reinforcement\-learning theory does not yet provide such an operator\-learning perspective   beyond specialized multi\-agent settings\. We develop an optimistic dual robust Bellman framework that   combines dual robust Bellman fitting, optimistic minimax planning, backward\-validated confidence   sets, and exploiter\-mix data collection\. Our analysis is organized around the robust Bellman   residuals induced by the candidate value class and yields a regret reduction that separates   exploration complexity, robust operator\-estimation error, stage\-game solution error, and   misspecification\. Under explicit interpretable assumptions, we obtain conditional theorem   interfaces for general and projected function approximation, together with closed results in   several structured regimes, including tabular, epochwise/cross\-fit linear, self\-normalized   pure\-online linear / finite\-rank kernel, and projected RKHS truncation\. We also provide   numerical experiments that validate the theoretical predictions\.

## A Single Deep Preference\-Conditioned Policy for Learning Pareto Coverage Sets

**Authors:** Akihiro Kubo; Kosuke Nakanishi; Shin Ishii

**ID:** 150514 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hX6SBd1fFp>) | [PDF](<https://openreview.net/pdf?id=hX6SBd1fFp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150514>)

Preference\-conditioned multi\-objective reinforcement learning aims to learn a single policy that captures trade\-offs across preferences,  but under nonlinear scalarization the uniqueness and continuity of the preference\-to\-solution correspondence remain unclear\. We study this problem in tabular multi\-objective Markov decision processes \(MDPs\)  using smooth Tchebycheff scalarization as a monotone utility\. Under mild interior conditions on the preference set,  we prove that each preference induces a unique Pareto\-optimal return vector and that this vector depends Lipschitz\-continuously on the preference,  providing a principled foundation for preference sweeping toward dense Pareto\-front coverage\. To compute these targets, we formulate the problem over occupancy measures and derive Concave Mirror Descent Policy Iteration \(CMDPI\),  which achieves an $O\(1/k\)$ objective\-suboptimality rate\. We further show that each update is equivalent to solving a Kullback\-Leibler\-regularized MDP with the previous policy as reference,  yielding a policy\-iteration interpretation and finite\-iterate policy continuity across preferences\. We instantiate the update as a deep actor\-critic algorithm preserving previous\-policy regularization\. On eight MO\-Gymnasium tasks, it achieves the best average hypervolume rank among recent baselines and strong expected\-utility performance\.  Continuous\-control experiments indicate gains beyond the discrete\-action setting\.

## A Surrogate Perspective on Convergence of Fixed\-Target DQN

**Authors:** Zichu Liu; Nneka M Okolo; Ryan D&amp;amp;\#x27;Orazio; Danilo Vucetic; Ioannis Mitliagkas; Gauthier Gidel

**ID:** 155836 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2W16djzTLs>) | [PDF](<https://openreview.net/pdf?id=2W16djzTLs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155836>)

Deep Q\-Networks \(DQNs\) approximate value iteration by freezing a target network, forming Bellman\-optimality targets, and running an inner regression loop that minimizes a smooth \\emph\{surrogate loss\} \(e\.g\., MSE/Huber loss\) on data from a replay buffer\. Yet, control is governed by the Bellman optimality operator's $\\gamma$\-contraction in $\\ell\_\\infty$, whereas common objectives \(MSE/Huber loss\) measure progress in an averaged $\\ell\_2/\\ell\_1$ geometry; thus, improving the surrogate need not reduce the worst\-case Bellman error that drives performance\. To bridge this gap we connect the progress in the inner loop for each surrogate to the Bellman residual under the $\\ell\_\\infty$ norm\. Our analysis provides explicit thresholds denoted by $\\alpha$ under which sufficient progress guarantees a $\\ell\_\\infty$ contraction up to a standard approximation floor\. This yields new convergence guarantees for DQN with fixed targets trained using MSE or Huber\-type losses, and motivates a novel soft\-$\\ell\_\\infty$ surrogate that smoothly approximates the sup\-norm and better matches the $\\ell\_\\infty$ geometry resulting in the least stringent inner loop accuracy requirements\. Across Atari benchmarks, soft\-$\\ell\_\\infty$ consistently reduces the worst\-case Bellman residual and matches or improves returns relative to standard objectives, providing a practical, geometry\-aligned recipe for stable DQN training\.

## Time\-Sensitive Anytime\-Valid Testing

**Authors:** Eugenio Clerico; Tobias Wegel; Iskander Azangulov; Patrick Rebeschini

**ID:** 148853 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ugSaVm063Y>) | [PDF](<https://openreview.net/pdf?id=ugSaVm063Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148853>)

Anytime\-valid tests allow evidence to be checked  during data collection: one can either continue testing or stop and reject the null while still controlling type\-I error\. Yet, in many applications rejection is useful only if it comes soon enough\. We introduce a time\-sensitive testing\-by\-betting framework that favours early rejection by assigning rewards to rejection times and maximising their expected value under a given alternative\. This encompasses hard deadlines and softer time preferences\. The resulting optimal control problem admits a Bellman representation in terms only of time and  evidence against the null, rather than the full history\. For hard deadlines, we identify a canonical optimal test in the simple\-vs\-simple case\. We  show that exponentially decaying rewards admit a stationary approximation that yields a finite\-time\-scale counterpart to the classical growth\-rate\-optimal \(GRO\) viewpoint in anytime\-valid statistics, recovering it in the large\-time\-scale limit\.

## Behaving Better, Thinking Worse: Sycophancy Across Post\-Training Stages

**Authors:** Sonnet Xu; Kritika Singh; Sheharbano Jafry; Roxana Daneshjou; Sanmi Koyejo

**ID:** 153819 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IUAXqLsMTC>) | [PDF](<https://openreview.net/pdf?id=IUAXqLsMTC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153819>)

We trace factual sycophancy across three post\-training pipelines \(OLMo 3 7B Think and Instruct, Llama 3\.1 8B Instruct, Tulu 3\) on AMPS and MedQuAD with a dual\-track evaluation: a GPT\-4o\-judged generative track and a log\-probability track reporting $\\Delta$LogOdds separately under \\emph\{in\-context\} rebuttals and \\emph\{preemptive\} wrong\-answer assertions\. Decomposing by challenge type $\\times$ context reveals three patterns\. \(1\) \\textbf\{Challenge type:\} the sycophantic shift is alternative\-conditioned, so simple pushback with no asserted answer produces no shift, while ethos/justification/citation challenges produce substantial positive shifts\. \(2\) \\textbf\{Context:\} every base model's sycophantic shift concentrates preemptively, with weak or defensive in\-context response\. On computational, IC diverges into four pipeline\-specific endpoints\. On medical, the same four pipelines converge with no defensive IC developing on any recipe\. \(3\) \\textbf\{Behavioral vs log\-probability:\} post\-training produces a \\emph\{surface\-predictive dissociation\}: matched\-subset behavioral flip rate drops significantly on identical items while preemptive $\\Delta$LogOdds on those same items grows\.

## When Does Sequential Detection Collapse to a Scalar? A Necessary and Sufficient Characterisation

**Authors:** PRAKUL S HIREMATH; PeerAhammad M Bagawan; Sahil Bhekane

**ID:** 149453 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pyACmQx0Yt>) | [PDF](<https://openreview.net/pdf?id=pyACmQx0Yt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149453>)

For $K=2$ regimes, scalar thresholding of the Bayesian posterior is Bayes\-optimal\. For $K \\geq 3$, the posterior evolves on a $\(K\-1\)$\-dimensional simplex $\\Delta^\{K\-1\}$, yet virtually all deployed detection systems reduce it to a scalar score without theoretical justification\. We resolve this question completely\.  We introduce \*\*Extended Decision Sufficiency \(EDS\)\*\*—three linear constraints on emission densities and transition dynamics \(Rank\-One Emissions, Markov Factorisation, Normal Factorisation\), verifiable in $O\(K^2\)$ operations from model parameters alone—and prove the following exact characterisation:  \*\*Main result\.\*\* EDS holds if and only if the Bayes\-optimal stopping value function is constant on every level set of a scalar statistic $\\phi : \\Delta^\{K\-1\} \\to \\mathbb\{R\}$\.  Sufficiency follows from algebraic closure of the Bellman operator $\\mathcal\{B\}$ under EDS\. Necessity is proved by a coupling\-based fixed\-point contradiction: for each failure mode we exhibit an explicit belief pair with equal $\\phi$\-values but a strictly positive total\-variation gap on predictive densities, which propagates to a value\-function gap via the Lipschitz bound on $\\mathcal\{B\}$ and the $\\rho$\-contraction of $\\mathcal\{T\}$, without assuming any structure on $V$ beyond continuity\.  Three consequences are sharp and quantitative:  \* \*\*\(i\)\*\* When EDS fails, \*every\* scalar rule—regardless of architecture, capacity, or training data—incurs a strictly positive, computable, algorithm\-independent lead\-time loss\. \* \*\*\(ii\)\*\* When EDS holds, optimal expected lead time is given in closed form by a hitting\-time functional of a scalar Markov chain\. \* \*\*\(iii\)\*\* Under approximate EDS with deviation $\\eta$, performance degrades at rate $O\(\\eta/\(1\-\\rho\)\)$, making $\\eta$ a practical model\-diagnostic with direct performance implications\.  Across 72 synthetic configurations and the CICIDS2017 benchmark, predicted and observed lead times agree within 0\.4 steps \(MAE\)\. A controlled experiment with matched parameter counts confirms that the lead\-time advantage is structural, not a regularisation artefact, thereby validating the theory as the sole causal mechanism\.

## Reinforcement Learning\-Guided Symbolic Execution for Efficient and Exploitable Smart Contract Analysis

**Authors:** Zhaoxuan Li; Ziming Zhao; Siqi Lu; Rui Zhang; Wenhao Li; Xiaofei Yue; Fan T Zhang

**ID:** 156101 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0NgpgjG8bV>) | [PDF](<https://openreview.net/pdf?id=0NgpgjG8bV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156101>)

Currently, frequent security incidents of Ethereum contracts have caused billions of dollars in losses\. There is a pressing need to identify defective contract code and generate exploit call sequences to reproduce attacks and ensure detection accuracy\. Nevertheless, the state\-of\-the\-art \(SOTA\) detection methods based on symbolic execution and fuzzy testing cannot achieve the desired performance due to the state explosion problem caused by contract characteristics such as cross\-contract calls and loop branches, especially in large wild contracts\. To tackle this problem, we propose RSymX, an assembly strategy\-guided symbolic execution for contracts that leverages reinforcement learning to dynamically balance code coverage and vulnerability discovery\. Extensive experiments on open\-sourced datasets demonstrate that RSymX achieves an overlap score of 92\.39% and identifies many vulnerable wild instances that SOTAs misreport\. Especially, its dynamic strategies improve the efficiency of state exploration by 2x\~4x, and in some cases up to 10x, offering guidance for future symbolic\-execution\-based analyzers\. The code and data are available in https://github\.com/ContractAudit/Code\.

## Inverting the Bellman Equation: From $Q$\-Values to World Models

**Authors:** Alistair Letcher; Mattie Fellows; Alexander D\. Goldie; Jonathan Richens; Jakob Foerster; Oliver Richardson

**ID:** 153840 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ILIYkAejvy>) | [PDF](<https://openreview.net/pdf?id=ILIYkAejvy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153840>)

Model\-based and model\-free reinforcement learning are traditionally viewed as separate paradigms: while the former learns an explicit model of the transition dynamics $P$, model\-free agents typically estimate value functions tied to a specific policy and reward\. In this paper, we challenge this dichotomy by proving that value\-based agents trained on a sufficiently rich set of reward functions, e\.g\. using goal\-conditioned RL, implicitly encode a unique and accurate world model\. To extract this model in practice, we introduce $P$\-learning; analogous to $Q$\-learning, which approximates $Q^\\star$ using samples from the environment, $P$\-learning extracts an agent's model of the environment $P^\\star$ by sampling from its $Q$\-values, policies, and rewards, effectively inverting the Bellman equation\. In deterministic MDPs, we prove that the true kernel $P$ can be recovered from an agent trained on a single generic goal for finite state spaces $\\mathcal\{S\}$, and a finite number of Gaussian goals for continuous $\\mathcal\{S\} \\subseteq \\mathbb\{R\}^d$, provided $Q$\-values are accurate\. In the stochastic setting, these conditions generalise to larger sets of goals depending on the reward function family\. Even when our assumptions are violated, we empirically demonstrate that agents trained with a small number of sparse rewards encode accurate dynamics in \(i\) stochastic variants of FourRooms, \(ii\) MountainCar, and \(iii\) Reacher\. This is further validated by training policies inside the extracted world model, for goals far beyond the training distribution, suggesting that goal\-conditioned agents secretly contain implicit generalisation capabilities and providing a new lens into the connection between model\-based, model\-free, and goal\-conditioned RL\.

## On the Convergence of Success Conditioning for Policy Optimization

**Authors:** Matthew Brun; Andy Sun

**ID:** 154843 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AV3w1FufSn>) | [PDF](<https://openreview.net/pdf?id=AV3w1FufSn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154843>)

Success conditioning is a strategy for improving decision\-making policies in stochastic environments; it updates a policy by increasing the probability of taking actions that yield successful outcomes\.  Success conditioning is common to many reinforcement learning applications, yet its limiting behavior and convergence rates are not well understood\.  In this work, we demonstrate that success conditioning converges to an optimal policy on a broad class of Markov decision processes \(MDP\)\.  We also derive convergence rates in some common settings\.  For discounted MDPs, we prove convergence within $\\mathcal\{O\}\(1/\\varepsilon^p\)$ iterations to an $\\varepsilon$\-optimal policy, where the exponent $p$ depends on problem data\.  For single\-period MDPs, $\\mathcal\{O\}\(1/\\varepsilon\)$ iterations are required\.

## The Sample Complexity of Multiple Change Point Identification under Bandit Feedback

**Authors:** Maximilian Graf; Victor Thuot

**ID:** 152674 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RG9xCWr9Oj>) | [PDF](<https://openreview.net/pdf?id=RG9xCWr9Oj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152674>)

We study multiple change point localization under bandit feedback\. An unknown piecewise\-constant function on a compact interval can be queried sequentially at adaptively chosen inputs, and each query returns a noisy evaluation of the function\. The goal is to identify a prescribed number of discontinuities, known as change points, within a target precision $\\eta$ and confidence level $1\-\\delta$, while using as few samples as possible\. We propose an adaptive algorithm that first detects intervals likely to contain change points and then refines their locations to precision $\\eta$\. We establish non\-asymptotic upper bounds on its sample budget, together with corresponding lower bounds\. Prior work shows that jump magnitudes alone determine the asymptotic sample complexity as $\\delta\\to 0$\. We reveal that this picture is incomplete beyond this regime\. We demonstrate, both empirically and theoretically, that for general $\\delta$ and $\\eta$, the complexity is jointly governed by the jumps and the relative positions of the change points\.

## The Sampling Complexity of Condorcet Winner Identification in Dueling Bandits

**Authors:** El Mehdi Saad; Victor Thuot; Nicolas Verzelen

**ID:** 151146 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cgQkpwR4Mx>) | [PDF](<https://openreview.net/pdf?id=cgQkpwR4Mx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151146>)

We study best\-arm identification in  large\-scale stochastic dueling bandits under the sole assumption that a Condorcet winner exists, i\.e\., an arm that wins each noisy pairwise comparison with probability at least $1/2$\. We introduce a new identification procedure that exploits the full gap matrix $\\Delta\_\{i,j\}=q\_\{i,j\}\-\\tfrac12$ \(where $q\_\{i,j\}$ is the probability that arm $i$ beats arm $j$\), rather than only the gaps between the Condorcet winner and the other arms\. We derive high\-probability, instance\-dependent sample\-complexity guarantees that \(up to logarithmic factors\) improve the best known ones by leveraging informative comparisons beyond those involving the winner\. We complement these results with matching lower bounds that establish the optimality of our procedures in all regimes\.   Overall, our results reveal the general form of the sampling complexity, characterized by a trade\-off between the cost of locating informative entries and the verification cost required to achieve the desired confidence\. In particular, this complexity  drastically differs from what is suggested by pure asymptotic results or by procedures that are tailored to Strongly Stochastic Transitive models\.

## Playing Markov Games Without Observing Payoffs

**Authors:** Daniel Ablin; Alon Peled\-Cohen

**ID:** 152236 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UYFUhufFHG>) | [PDF](<https://openreview.net/pdf?id=UYFUhufFHG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152236>)

Optimization under uncertainty is a fundamental problem in learning and decision\-making, particularly in multi\-agent systems\.  Previously, Feldman, Kalai, and Tennenholtz \[2010\] demonstrated the ability to efficiently compete in repeated symmetric two\-player matrix games without observing payoffs, as long as the opponent’s actions are observed\.  Extending this capability to the Markovian setting remains an open problem\. In this paper, we introduce and formalize a new class of zero\-sum symmetric Markov games, which extends the notion of symmetry from matrix games to the Markovian setting\.  We prove that a learner observing only the opponent's action sequence, without access to payoff information can successfully compete against an adversary possessing complete knowledge of the game\. We formalize three distinct notions of symmetry in this domain and reveal a surprising structural hierarchy: the most holistic definitions of symmetry impose restrictive constraints that actually simplify the learning landscape, whereas the \`\`simplest'' definition represents the most general and challenging setting\. We provide polynomial\-time algorithms for all three settings that achieve sublinear regret\. Crucially, we demonstrate that despite the complex Markovian dynamics, a simple strategy of locally mimicking the opponent's actions suffices to guarantee robustness\.  This finding significantly broadens the class of games where robust learning is possible under severe informational disadvantage, proving that knowledge of the transition laws is not required to force a draw\.

## MemPlan: Memory\-Conditioned PDDL Planning for Partially Observable Text Environments

**Authors:** Tengwei Song; Robert Hoehndorf

**ID:** 150108 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kdC8R9ryni>) | [PDF](<https://openreview.net/pdf?id=kdC8R9ryni>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150108>)

LLM agents are flexible in language interaction, but using them as long\-horizon planners is costly and prone to hallucinated or invalid actions\. This paper targets a different role for LLMs: constrained bridges between language and symbolic planning\. We propose MemPlan, a memory\-conditioned PDDL planning framework for partially observable interactive text environments\. MemPlan keeps the PDDL domain fixed and reconstructs the PDDL problem at each step from parsed observations, candidate hypotheses, and interaction memory\. Positive graph memory assigns relevance\-based action costs to candidate hypotheses for missing objects, locations, or conditions, guiding the planner toward more plausible checks\. Negative memory records execution\-refuted assumptions and compiles them into exclusion constraints, preventing repeated attempts at candidates already contradicted by feedback\. A unified schema\-conditioned language\-\-symbol interface, trained offline with supervised fine\-tuning, connects text environments to the planning loop through observation\-to\-fact parsing and symbolic\-action\-to\-command grounding\. Experiments on TextWorld, ALFWorld, and Robotouille show that MemPlan improves task completion and step efficiency over language\-only and PDDL\-aware baselines, while substantially reducing online token cost compared with LLM\-planning baselines such as ReAct\. The same fine\-tuned interface is also reused across TextWorld task types without task\-specific fine\-tuning\. Our code and data are available at: \\url\{https://anonymous\.4open\.science/r/MemPlan\-1EE5/\}\.

## On the Bias of Group\-Based Advantage Estimation

**Authors:** Fengkai Yang; Zherui Chen; Xiaohan Wang; Xiaodong Lu; Jiajun Chai; Guojun Yin; Wei Lin; Fuzhen Zhuang; Shuai Ma; deqing wang; Yaodong Yang; Yikun Ban

**ID:** 151904 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=X4PMPm6QA7>) | [PDF](<https://openreview.net/pdf?id=X4PMPm6QA7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151904>)

Reinforcement Learning from Verifier Rewards \(RLVR\) has emerged as a widely used approach for post\-training large language models on reasoning tasks, with group\-based methods such as GRPO and its variants gaining broad adoption\. These methods rely on group\-relative advantage estimation to avoid learned critics, yet its theoretical properties remain poorly understood\. In this work, we uncover a fundamental issue of group\-based RL: the group\-relative advantage estimator is inherently biased relative to the true \(expected\) advantage\. We provide the first theoretical analysis showing that it systematically underestimates advantages for hard prompts and overestimates them for easy prompts, leading to imbalanced exploration and exploitation\. To address this issue, we propose History\-Aware Adaptive Difficulty Weighting \(HA\-DW\), an adaptive reweighting scheme that adjusts advantage estimates based on an evolving difficulty anchor and training dynamics\. Both theoretical analysis and experiments on five mathematical reasoning benchmarks demonstrate that HA\-DW consistently improves performance when integrated into GRPO and its variants\. Our results suggest that correcting biased advantage estimation is critical for robust and efficient RLVR training\. The code is available at https://anonymous\.4open\.science/r/HA\-DW\-037C\.

## Probabilistic Guarantees for Adversarial Linear Contextual Bandits

**Authors:** Guyon Phoelich; Julia Olkhovskaya; Tim van Erven

**ID:** 150858 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=epfMK9vZOu>) | [PDF](<https://openreview.net/pdf?id=epfMK9vZOu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150858>)

We study the adversarial linear contextual bandit problem, in which an oblivious adversary fixes a sequence of loss vectors while the per\-round context \(action set\) is generated stochastically\. In the standard setting where contexts are drawn i\.i\.d\. from a fixed distribution, near\-optimal regret bounds are known, but only in expectation\. We prove the first such bound that holds with high probability, resolving an open problem stated by Neu and Olkhovskaya \[2020\], Olkhovskaya et al\. \[2023\] and Dai et al\. \[2024\]\. Specifically, the regret is at most $O\\big\( d^3\\sqrt\{\\log\(K\)T\}\\mathrm\{polylog\}\(T/\\delta\) \\big\)$ with probability at least $1\-\\delta$ over $T$ rounds, where $K$ is the number of actions and $d$ is the dimension of the actions\. We then ask whether high\-probability guarantees can be extended beyond i\.i\.d\. contexts\. Although fully adversarial contexts make sublinear regret impossible in this setting, we show that two natural relaxations remain tractable: \(i\) non\-stationary but independent contexts, whose per\-round distributions do not deviate too much from a fixed reference distribution, for which we obtain a high\-probability regret bound of $O\\big\(d^3 \\sqrt\{\\log\(K\)T\}\\mathrm\{polylog\}\(T/\\delta\) \+ d^\{5/2\}V\\mathrm\{polylog\}\(T/\\delta\)\\big\)$, where $V$ is the cumulative total variation distance of the per\-round distributions from the reference; and \(ii\) stationary but dependent exponentially mixing contexts, like, for instance, uniformly ergodic Markov chains, for which we obtain a high\-probability bound of $O\\big\(C\_\\textrm\{mix\} d^3 \\sqrt\{\\log\(K\)T\}\\mathrm\{polylog\}\(T/\\delta\) \\big\)$, where $C\_\\textrm\{mix\}$ is a constant that depends on the mixing time\. Technically, our results build on the recent reduction from adversarial linear contextual bandits to misspecified linear bandits by Van Erven et al\. \[2025\]\. All three results are obtained from a single base algorithm under different hyperparameter choices, some of which are functions of data\-dependent quantities that are unknown in advance\. We resolve this by automatically tuning the hyperparameters using the Corral algorithm of Agarwal et al\. \[2017\]\. For this purpose, we develop a new high\-probability variant of Corral, since the original version only has guarantees in expectation\.

## Learning to Bid in Repeated Second\-Price Auctions with Dynamic Values and Aggregated Feedback

**Authors:** Benjamin Heymann; Otmane Sakhi

**ID:** 149706 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o3ehGWSI8H>) | [PDF](<https://openreview.net/pdf?id=o3ehGWSI8H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149706>)

We study the problem of learning to bid when the bidder’s \*value is dynamic\*, i\.e\., when the current value depends on past outcomes\. Specifically, we consider a bidder participating in repeated second\-price auctions whose value depends on the time elapsed since their last successful bid, with auctions arriving in continuous time and only aggregated feedback revealed at the end of the horizon\. Such a bidder must \*\*\(1\)\*\* balance the immediate benefit of winning the current auction against its impact on future values and \*\*\(2\)\*\* learn unknown environmental parameters\. We derive regret bounds for a class of learning methods that combine plug\-in estimators with a differential\-equation characterization of the optimal policy, and show that a specific confidence bound algorithm learns the optimal policy with a near optimal regret of $\\tilde\{\\mathcal\{O\}\}\(\\log N\)$ for piecewise linear primitives, and $\\tilde\{\\mathcal\{O\}\}\(N^\{1/3\}\)$ for general, smooth primitives, achieving these regrets without explicit randomization\. These theoretical results are supported by numerical experiments\.

## Implicit\-Euler Value Iteration: Long\-Horizon Planning via Stable Integration of the Bellman Residual Flow

**Authors:** Nimrod De La Vega; Amir\-massoud Farahmand

**ID:** 151746 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YPZmHZA1Ut>) | [PDF](<https://openreview.net/pdf?id=YPZmHZA1Ut>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151746>)

Value iteration \(VI\) is the unit\-step explicit\-Euler discretization of a continuous\-time \*Bellman residual flow\* $\\dot V=\\operatorname\{BR\}\(V\)$, and its standard linear dependence on the effective horizon $1/\(1\-\\gamma\)$ can be viewed as reflecting the step\-size restriction that explicit integration imposes on stiff dynamics\. We propose \*Implicit\-Euler Value Iteration\* \(IE\-VI\): a planning routine equivalent to the implicit\-Euler discretization of the same flow, in which each step is unconditionally stable and contracts at rate $1/\(1\+h\(1\-\\gamma\)\)$ for every step size $h&gt;0$\. The implicit step requires solving an equation in the true Bellman operator, which we realize at finite cost by \*iterative defect correction\*: a short sequence of cheap planning rounds in an approximate model $\\hat\{\\mathcal\{P\}\} \\approx \\mathcal\{P\}$ \(a simulator or a learned dynamics model\), with the true model queried once per round to refresh a residual correction term\. For Policy Evaluation and Control, IE\-VI converges to the value function of $\\mathcal\{P\}$ for any $\\hat\{\\mathcal\{P\}\}$, however inaccurate\-\-\-in contrast to model\-based planners, which generally converge to a biased fixed point\. When the model error shrinks at a sublinear\-in\-horizon rate, IE\-VI attains polylogarithmic iteration complexity in $1/\(1\-\\gamma\)$, an exponential improvement over VI; outside this regime its complexity stays within a logarithmic factor of VI\. We also give an adaptive variant A\-IE\-VI, which removes the need to know the model\-error scale, and a Dyna\-style sample\-based variant IE\-Dyna for tabular RL\.

## Bellman Contraction under MMD: A Unified Framework

**Authors:** Baptiste Debes; Tinne Tuytelaars

**ID:** 150640 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ga3QB4bSSV>) | [PDF](<https://openreview.net/pdf?id=ga3QB4bSSV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150640>)

We introduce a mathematical framework for studying contraction of the distributional Bellman operator under Maximum Mean Discrepancy \(MMD\)\. We show that contraction reduces to conditional positive definiteness of an associated kernel constructed from the base kernel, which we call the Bellman difference kernel\. Focusing on radial kernels, we use Schoenberg's theorem to connect this condition to Bernstein functions, yielding contraction criteria, valid in arbitrary dimension, that can be checked analytically or numerically\. Our framework unifies known results for the Gaussian RBF, power\-distance, and multiquadric kernels; using numerical search, we further identify 12 new contraction\-inducing kernels\. We also propose \*chaining\*, a general construction that produces contraction\-inducing kernels at any prescribed rate\. To reconcile theory with practice, we introduce conditional positive definiteness on a set, which explains why the Gaussian RBF kernel can remain a valid choice on bounded supports despite its lack of global contraction\. Finally, we identify a fundamental tradeoff between contraction rate and discriminative power, where kernels that contract faster tend to discriminate less between distributions\.

## An Anytime Algorithm for Good Arm Identification

**Authors:** Marc Jourdan; Andrée Delahaye\-Duriez; Clémence Réda

**ID:** 156663 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156663>)

In good arm identification \(GAI\), the goal is to identify one arm whose average performance exceeds a given threshold, referred to as a good arm, if it exists\. Few works have studied GAI in the fixed\-budget setting when the sampling budget is fixed beforehand, or in the anytime setting, when a recommendation can be asked at any time\. We propose APGAI, an anytime and parameter\-free sampling rule for GAI in stochastic bandits\. APGAI can be straightforwardly used in fixed\-confidence and fixed\-budget settings\. First, we derive upper bounds on its probability of error at any time\. They show that adaptive strategies can be more efficient in detecting the absence of good arms than uniform sampling in several diverse instances\. Second, when APGAI is combined with a stopping rule, we prove upper bounds on the expected sampling complexity, holding at any confidence level\. Finally, we show the good empirical performance of APGAI on synthetic and real\-world data\. Our work offers an extensive overview of the GAI problem in all settings\.

## Property\-Guided LLM Program Synthesis for Planning

**Authors:** André G\. Pereira; Augusto B\. Corrêa; Jendrik Seipp

**ID:** 150731 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fp1k5OEAzu>) | [PDF](<https://openreview.net/pdf?id=fp1k5OEAzu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150731>)

LLMs have shown impressive success in program synthesis, discovering programs that surpass previously known solutions\. However, these approaches rely on simple numeric scores to signal program quality, such as the value of the solution or the number of passed tests\. Because such a score offers no guidance on \*why\* a program failed, the system must generate and evaluate many candidates per problem in the hope that some succeed, increasing both LLM inference and evaluation costs\. We study a different approach: property\-guided LLM program synthesis\. Instead of scoring programs after evaluation, we check whether a candidate satisfies a formally defined property\. When the property is violated, we stop the evaluation early and provide the LLM with a concrete counterexample showing exactly how the program failed\. This feedback drastically reduces both the number of program generations and the evaluation cost, and can guide the LLM to generate stronger programs\. We evaluate this approach on PDDL planning domains, asking the LLM to synthesize \*direct\* heuristic functions: every state reachable by strictly improving transitions has a strictly improving successor\. A heuristic with this property leads hill\-climbing search directly to a goal state\. A counterexample\-guided repair loop generates one candidate program, checks the property over a training set, and returns the first case that violates the property\. We evaluate our approach on ten planning domains with an out\-of\-distribution test set\. The synthesized heuristics are effectively \\emph\{direct\} on virtually all test tasks, and compared to the best prior generation method our approach generates seven times fewer programs per domain on average, solves more tasks without using search, and requires several orders of magnitude less computation to evaluate candidates\. Whenever a problem admits a verifiable property, property\-guided LLM program synthesis can reduce synthesis and evaluation cost while improving program quality\.

## The Horizon Threshold in Cooperative Multi\-Agent Reward\-Free Exploration

**Authors:** Idan Barnea; Orin Levy; Yishay Mansour

**ID:** 149477 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ppLDIdDiWm>) | [PDF](<https://openreview.net/pdf?id=ppLDIdDiWm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149477>)

We study cooperative multi\-agent reinforcement learning in the setting of reward\-free exploration, where multiple agents jointly explore an unknown MDP in order to learn its dynamics \(without observing rewards\)\. We focus on a tabular finite\-horizon MDP and adopt a phased learning framework\. In each learning phase, multiple agents independently interact with the environment\. More specifically, in each learning phase, each agent is assigned a policy, executes it, and observes the resulting trajectory\. Our primary goal is to characterize the tradeoff between the number of learning phases and the number of agents, especially when the number of learning phases is small\.  Our results identify a regime change governed by the horizon $H$\. When the number of learning phases equals $H$, we present a computationally efficient algorithm that uses only $\\tilde\{O\}\(S^6 H^6 A / \\epsilon^2\)$ agents to obtain an $\\epsilon$ approximation of the dynamics \(i\.e\., yields an $\\epsilon$\-optimal policy for any reward function\)\. We complement our algorithm with a lower bound showing that any algorithm restricted to $\\rho &lt; H$ phases requires at least $A^\{H/\\rho\}$ agents to achieve constant accuracy\.  Thus, we show that having $\\Theta\(H\)$ learning phases is both necessary and sufficient when restricting the number of agents to be polynomial\.

## Ordinal Geometry Complements Reconstruction: Diagnosing Planning with Compressed Value Functions

**Authors:** Shiheng Zhang

**ID:** 152754 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QbTBLTxehl>) | [PDF](<https://openreview.net/pdf?id=QbTBLTxehl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152754>)

Goal\-conditioned planning requires compressing value functions into low\-dimensional representations, yet which property of the compression best predicts planning quality remains unclear\. We show that reconstruction accuracy and ordinal fidelity\-\-\-how faithfully the ranking of successor states by value is preserved\-\-\-are two projections of the same approximation error: in smooth geometry they couple tightly and $L^2$ is a sufficient summary; when topology creates dense small\-gap regions they decouple, and the ordinal projection carries complementary planning\-relevant information beyond $L^2$\. Through experiments on gridworld, continuous navigation \(640 runs, 8 environments\), and Maze2D \(240 runs, 3 D4RL layouts\), we establish three results\. First, neighbor\-restricted ordinal fidelity \($\\tau^\{\\mathrm\{nbr\}\}$\) adds $\\Delta R^2 = 0\.106$ of incremental explanatory power beyond $L^2$ after environment fixed effects\. Second, monotone recalibration degrades $L^2$ by up to $\\sim\\\!400\\times$ while preserving $\\tau^\{\\mathrm\{nbr\}\}$ and planning success\. Third, in matched\-pair comparisons controlling for $L^2$, higher $\\tau^\{\\mathrm\{nbr\}\}$ predicts better planning 76\\% of the time\. We provide theoretical grounding via a gap\-weighted Bellman\-excess decomposition that links reconstruction error, local ordinal inversions, and planning regret\.

## Offline\-Online Reinforcement Learning for Linear Mixture MDPs

**Authors:** Zhongjun Zhang; Sean R\. Sinclair

**ID:** 156103 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0NMnfMyUHF>) | [PDF](<https://openreview.net/pdf?id=0NMnfMyUHF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156103>)

We study offline\-online reinforcement learning in linear mixture Markov decision processes \(MDPs\) under environment shift\.  In the offline phase, data are collected by an unknown behavior policy and may come from a mismatched environment, while in the online phase the learner interacts with the target environment\.  We propose an algorithm that adaptively leverages offline data\. When the offline data are informative, either due to sufficient coverage or small environment shift, the algorithm provably improves over purely online learning\. When the offline data are uninformative, it safely ignores them and matches the online\-only performance\.  We establish regret upper bounds that explicitly characterize when offline data are informative, together with nearly matching lower bounds\.  Numerical experiments further corroborate our theoretical findings\.

## A New Framework for Quantum Reinforcement Learning

**Authors:** Alireza Tavakoli; Mohsen Heidari

**ID:** 149569 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=p9Lz3Nd5c2>) | [PDF](<https://openreview.net/pdf?id=p9Lz3Nd5c2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149569>)

Quantum reinforcement learning \(QRL\) has emerged as a promising approach for controlling quantum systems and accelerating learning tasks with quantum resources\. However, most existing QRL formulations still retain a classical reinforcement learning interface: states and actions are often encoded in computational bases and rewards are extracted through measurement\. This is less natural for fully quantum environments in which the relevant state information may live in an unknown basis and intermediate measurements can disturb the trajectory\. This motivates a fully QRL framework in which the agent, environment, rewards, and return accumulation are all represented quantum mechanically\. In this paper, we take a step toward this goal and introduce a new QRL framework in which state, action, reward, and reward\-accumulation registers evolve without intermediate measurement\. In this framework, both the policy and the environment are modeled by conditional quantum channels : the policy updates the action register conditioned on the state, while the environment updates the state and reward registers conditioned on the action, without measuring or overwriting the corresponding control register\. We then propose a quantum policy\-gradient algorithm for parameterized conditional quantum channels with a trainable control basis\. We also derive finite\- and infinite\-horizon gradient estimators using a new parameter\-shift rule\. The algorithm samples a single shifted policy block from a geometric distribution, yielding an unbiased gradient estimator under bounded rewards\. Finally, we establish convergence of the resulting stochastic gradient\-ascent procedure to stationary points under standard smoothness and step\-size assumptions\.

## Q\-MMR: Off\-Policy Evaluation via Recursive Reweighting and Moment Matching

**Authors:** Nan Jiang; Xiang Li

**ID:** 148484 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xTSX3ivXEZ>) | [PDF](<https://openreview.net/pdf?id=xTSX3ivXEZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148484>)

We present a novel theoretical framework, Q\-MMR, for off\-policy evaluation in finite\-horizon MDPs\. Q\-MMR learns a set of scalar weights, one for each data point, such that the reweighted rewards approximates the expected return under the target policy\. The weights are learned inductively in a top\-down manner via a moment matching objective against a value\-function discriminator class\. Notably, and perhaps surprisingly, a data\-dependent finite\-sample guarantee for general function approximation can be established under only the realizability of $Q^\\pi$, with a \*\*dimension\-free\*\* bound\-\-\-that is, the error does \*\*not\*\* depend on the statistical complexity of the function class\. We also establish connections to several existing methods, such as linear FQE\. Further theoretical analyses shed new light on the nature of coverage, a concept of fundamental importance to offline RL\.

## StaRPO: Stability\-Augmented Reinforcement Policy Optimization

**Authors:** Jinghan Zhang; Fengran Mo; Tharindu Cyril Weerasooriya; Ruimin Dai; Xiaoyan Han; Yanjie Fu; Dakuo Wang; Kunpeng Liu

**ID:** 151434 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aklS0AbZVw>) | [PDF](<https://openreview.net/pdf?id=aklS0AbZVw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151434>)

Reinforcement learning \(RL\) is effective in enhancing the accuracy of large language models in complex reasoning tasks\. Existing RL policy optimization frameworks rely on final\-answer correctness as feedback signals and rarely capture the internal logical structure of the reasoning process\. Consequently, the models would generate fluent and semantically relevant responses but logically inconsistent, structurally erratic, or redundant\. To this end, we propose StaRPO, a stability\-augmented reinforcement learning framework that explicitly incorporates reasoning stability into the optimization objective\. Our StaRPO decomposes stability into two computable lightweight metrics: the Autocorrelation Function \(ACF\) to evaluate local step\-to\-step coherence, and Path Efficiency \(PE\) to evaluate global goal\-directedness of the reasoning trajectory\. These stability rewards are combined with task rewards to provide complementary and process\-aware feedback\. We validate the effectiveness of using ACF and PE rewards by showing their correlation with logic errors on two backbone models\. Experiments on four reasoning benchmarks show that StaRPO consistently outperforms compared baselines and can enhance both final\-answer accuracy and logical stability\.

## Contrastive Pretraining Scales Agentic Exploration

**Authors:** Jesse Zymet

**ID:** 149777 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nO7QFPhYra>) | [PDF](<https://openreview.net/pdf?id=nO7QFPhYra>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149777>)

This paper concerns the problem of scaling agents to large action spaces demanding pretrained world knowledge\. What type of representation pretraining would enable policies such as language models to generalize rewards to appropriate actions? Contrastive learning aligns similar inputs and otherwise enforces distancing of representations, while non\-contrastive alternatives omit distancing terms and so learn anisotropic representations that collapse distinctive clusters\. Though contrastive pretraining has been proven to promote supervised learning efficiency, non\-contrastive pretraining nevertheless remains canonical for language agents\. Here we examine the extent to which these pretraining types support on\-policy finetuning, in which efficiency is coextensive with online performance\. Broadly, we argue that contrastive pretraining optimizes efficient exploration of large spaces\. We prove that anisotropic representations collapse distinct actions and necessitate complex policies, whereas contrastive pretraining retains distinctions and enables reward transfer through spectral regularization\. We validate our conclusions empirically by providing spectral analyses of language data and simulations involving multimodal personalization policies as well as self\-improving reasoning agents finetuned online using a policy gradient\. Our latter simulations suggest contrastive pretraining for language agents exploring diverse reasoning paths\.

## Signature Approach for Contextual Bandits with Nonlinear and Path\-dependent Rewards

**Authors:** Xin Guo; Grace He; Xinyu Li

**ID:** 154702 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BfjQPRAfuN>) | [PDF](<https://openreview.net/pdf?id=BfjQPRAfuN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154702>)

We study contextual bandits with nonlinear and path\-dependent rewards through a novel signature\-transform\-based approach\. Leveraging the universal nonlinearity property of signatures, we approximate continuous path\-dependent reward functionals by linear functionals in the signature space\. This representation enables the use of efficient linear contextual bandit methods while preserving expressive sequential structure\. Building on this framework, we propose $\\texttt\{DisSigUCB\}$, a signature\-based disjoint upper confidence bound \(UCB\) algorithm\. Under boundedness and non\-degeneracy assumptions, we prove a high\-probability data\-dependent sublinear regret bound of order $\\tilde\{\\mathcal O\}\(\\sqrt\{\(d\+m\)KT\}\)$ where $d$ is the context dimension and $m$ is the signature feature dimension\. Experiments on temperature sensor monitoring, sleep\-stage classification, and hospital nurse staffing demonstrate that $\\texttt\{DisSigUCB\}$ consistently outperforms classical linear and kernelized contextual bandit baselines in nonlinear and path\-dependent settings\.

## From Likelihood Convergence to Parameter Convergence in POMDPs

**Authors:** Jack Zhang; Saurabh Amin; Jiawei zhang; Patrick Jaillet

**ID:** 150517 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hWP93Z7A1J>) | [PDF](<https://openreview.net/pdf?id=hWP93Z7A1J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150517>)

Likelihood\-based methods are widely used to learn the parameters of partially observable Markov decision processes \(POMDPs\), but their finite\-sample behavior is not well understood\. We establish a different kind of finite\-sample guarantee\. For any candidate POMDP parameter, we bound its parameter recovery error in terms of its likelihood gap to the ground truth, the structural conditioning of the observation and transition kernels, and the behavior policy used to collect data\. The bound applies in both the undercomplete and overcomplete observation regimes, with the overcomplete case following naturally from the undercomplete analysis\. Because the result applies to any sufficiently good candidate, it yields finite\-sample guarantees for the maximum\-likelihood estimator, OMLE\-style algorithms, and any procedure that produces a parameter with controlled likelihood gap\. This is particularly useful for downstream tasks such as infinite\-horizon planning with state\-dependent rewards, where accurate recovery of the kernels themselves is required to obtain near\-optimal policies\. The bound separates the contribution of the behavior policy from that of the model, making explicit how data\-collection choices, including action coverage and mixing rate, accelerate parameter learning\.

## Safe Score Matching: Diffusion Policies with Hamilton\-Jacobi Reachability for Online Safe Reinforcement Learning

**Authors:** Boyang Li; Matthew Kim; Sylvia Herbert

**ID:** 148840 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ulU0SYntCo>) | [PDF](<https://openreview.net/pdf?id=ulU0SYntCo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148840>)

Online safe reinforcement learning \(RL\) seeks policies that maximize reward while satisfying safety constraints\. A popular line of research in safe RL relaxes safety to a soft expected\-cost constraint and solves the resulting Constrained Markov Decision Process \(CMDP\) via primal\-dual Lagrangian updates that only enforce safety on average\. To address this limitation, hard, state\-wise constraints are introduced and often imposed through Hamilton\-Jacobi \(HJ\) reachability\. Yet such constraints require solving different objectives in the feasible and infeasible regions of the state space: reward maximization in the former, recovery toward the feasible regions in the latter\. The resulting target action distributions are inherently multimodal, and this structure poses a fundamental challenge for the Gaussian or deterministic actors used in existing HJ\-based safe RL, which often collapse onto suboptimal modes\. Diffusion policies provide the expressiveness needed to represent such distributions, and recent work on Q\-score matching offers a route to training them for online RL by score regression\-\-\-but has been applied only to reward maximization\. Building on this framework, we propose Safe Score Matching \(SSM\), an off\-policy actor\-critic method that adapts Q\-score matching to hard\-constrained safe RL by gating a two\-branch score target with HJ reachability: inside the feasible set, the denoising process degenerates to Q\-score matching on actions classified as viable by the HJ critic, encouraging reward maximization; outside, a recovery branch biases denoising toward regions with lower worst\-case violation, guided by the negative action gradient of the HJ safety value\. Across high\-dimensional quadrotor and fixed\-wing trajectory\-tracking and stabilize\-and\-avoid benchmarks, SSM achieves competitive performance without sacrificing safety, in contrast to primal\-dual and reachability\-based baselines, which tend to trade off performance for safety and are thus overly conservative\.

