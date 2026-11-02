# Theory / Reinforcement Learning and Planning

理论 / 强化学习与规划理论

48 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## A Single Deep Preference\-Conditioned Policy for Learning Pareto Coverage Sets

**Authors:** Akihiro Kubo; Kosuke Nakanishi; Shin Ishii

**ID:** 150514 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hX6SBd1fFp>) | [PDF](<https://openreview.net/pdf?id=hX6SBd1fFp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150514>)

Preference\-conditioned multi\-objective reinforcement learning aims to learn a single policy that captures trade\-offs across preferences,  but under nonlinear scalarization the uniqueness and continuity of the preference\-to\-solution correspondence remain unclear\. We study this problem in tabular multi\-objective Markov decision processes \(MDPs\)  using smooth Tchebycheff scalarization as a monotone utility\. Under mild interior conditions on the preference set,  we prove that each preference induces a unique Pareto\-optimal return vector and that this vector depends Lipschitz\-continuously on the preference,  providing a principled foundation for preference sweeping toward dense Pareto\-front coverage\. To compute these targets, we formulate the problem over occupancy measures and derive Concave Mirror Descent Policy Iteration \(CMDPI\),  which achieves an $O\(1/k\)$ objective\-suboptimality rate\. We further show that each update is equivalent to solving a Kullback\-Leibler\-regularized MDP with the previous policy as reference,  yielding a policy\-iteration interpretation and finite\-iterate policy continuity across preferences\. We instantiate the update as a deep actor\-critic algorithm preserving previous\-policy regularization\. On eight MO\-Gymnasium tasks, it achieves the best average hypervolume rank among recent baselines and strong expected\-utility performance\.  Continuous\-control experiments indicate gains beyond the discrete\-action setting\.

## Q\-MMR: Off\-Policy Evaluation via Recursive Reweighting and Moment Matching

**Authors:** Nan Jiang; Xiang Li

**ID:** 148484 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xTSX3ivXEZ>) | [PDF](<https://openreview.net/pdf?id=xTSX3ivXEZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148484>)

_Abstract unavailable from the accessible public sources._

## Reinforcement Learning\-Guided Symbolic Execution for Efficient and Exploitable Smart Contract Analysis

**Authors:** Zhaoxuan Li; Ziming Zhao; Siqi Lu; Rui Zhang; Wenhao Li; Xiaofei Yue; Fan T Zhang

**ID:** 156101 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0NgpgjG8bV>) | [PDF](<https://openreview.net/pdf?id=0NgpgjG8bV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156101>)

Currently, frequent security incidents of Ethereum contracts have caused billions of dollars in losses\. There is a pressing need to identify defective contract code and generate exploit call sequences to reproduce attacks and ensure detection accuracy\. Nevertheless, the state\-of\-the\-art \(SOTA\) detection methods based on symbolic execution and fuzzy testing cannot achieve the desired performance due to the state explosion problem caused by contract characteristics such as cross\-contract calls and loop branches, especially in large wild contracts\. To tackle this problem, we propose RSymX, an assembly strategy\-guided symbolic execution for contracts that leverages reinforcement learning to dynamically balance code coverage and vulnerability discovery\. Extensive experiments on open\-sourced datasets demonstrate that RSymX achieves an overlap score of 92\.39% and identifies many vulnerable wild instances that SOTAs misreport\. Especially, its dynamic strategies improve the efficiency of state exploration by 2x\~4x, and in some cases up to 10x, offering guidance for future symbolic\-execution\-based analyzers\. The code and data are available in https://github\.com/ContractAudit/Code\.

## Statistical field theory for Markov decision processes under uncertainty

**Authors:** George Stamatescu

**ID:** 156672 | **Topic source:** official | **Abstract source:** missing | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156672>)

_Abstract unavailable from the accessible public sources._

## A Geometric Perspective on Reward Function Updates in Inverse Reinforcement Learning

**Authors:** Anish Abhijit Diwan; Jan Peters; Oleg Arenz

**ID:** 149606 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oqLzCT1cus>) | [PDF](<https://openreview.net/pdf?id=oqLzCT1cus>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149606>)

_Abstract unavailable from the accessible public sources._

## MemPlan: Memory\-Conditioned PDDL Planning for Partially Observable Text Environments

**Authors:** Tengwei Song; Robert Hoehndorf

**ID:** 150108 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kdC8R9ryni>) | [PDF](<https://openreview.net/pdf?id=kdC8R9ryni>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150108>)

_Abstract unavailable from the accessible public sources._

## Reinforcement Learning\-Guided Symbolic Execution for Efficient and Exploitable Smart Contract Analysis

**Authors:** Zhaoxuan Li; Ziming Zhao; Siqi Lu; Rui Zhang; Wenhao Li; Xiaofei Yue; Fan T Zhang

**ID:** 156101\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156101

[Paper](<https://openreview.net/forum?id=0NgpgjG8bV>) | [PDF](<https://openreview.net/pdf?id=0NgpgjG8bV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156101>)

Currently, frequent security incidents of Ethereum contracts have caused billions of dollars in losses\. There is a pressing need to identify defective contract code and generate exploit call sequences to reproduce attacks and ensure detection accuracy\. Nevertheless, the state\-of\-the\-art \(SOTA\) detection methods based on symbolic execution and fuzzy testing cannot achieve the desired performance due to the state explosion problem caused by contract characteristics such as cross\-contract calls and loop branches, especially in large wild contracts\. To tackle this problem, we propose RSymX, an assembly strategy\-guided symbolic execution for contracts that leverages reinforcement learning to dynamically balance code coverage and vulnerability discovery\. Extensive experiments on open\-sourced datasets demonstrate that RSymX achieves an overlap score of 92\.39% and identifies many vulnerable wild instances that SOTAs misreport\. Especially, its dynamic strategies improve the efficiency of state exploration by 2x\~4x, and in some cases up to 10x, offering guidance for future symbolic\-execution\-based analyzers\. The code and data are available in https://github\.com/ContractAudit/Code\.

## Inverting the Bellman Equation: From $Q$\-Values to World Models

**Authors:** Alistair Letcher; Mattie Fellows; Alexander D\. Goldie; Jonathan Richens; Jakob Foerster; Oliver Richardson

**ID:** 153840 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ILIYkAejvy>) | [PDF](<https://openreview.net/pdf?id=ILIYkAejvy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153840>)

_Abstract unavailable from the accessible public sources._

## The Sampling Complexity of Condorcet Winner Identification in Dueling Bandits

**Authors:** El Mehdi Saad; Victor Thuot; Nicolas Verzelen

**ID:** 151146 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cgQkpwR4Mx>) | [PDF](<https://openreview.net/pdf?id=cgQkpwR4Mx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151146>)

_Abstract unavailable from the accessible public sources._

## Playing Markov Games Without Observing Payoffs

**Authors:** Daniel Ablin; Alon Peled\-Cohen

**ID:** 152236 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UYFUhufFHG>) | [PDF](<https://openreview.net/pdf?id=UYFUhufFHG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152236>)

Optimization under uncertainty is a fundamental problem in learning and decision\-making, particularly in multi\-agent systems\.  Previously, Feldman, Kalai, and Tennenholtz \[2010\] demonstrated the ability to efficiently compete in repeated symmetric two\-player matrix games without observing payoffs, as long as the opponent’s actions are observed\.  Extending this capability to the Markovian setting remains an open problem\. In this paper, we introduce and formalize a new class of zero\-sum symmetric Markov games, which extends the notion of symmetry from matrix games to the Markovian setting\.  We prove that a learner observing only the opponent's action sequence, without access to payoff information can successfully compete against an adversary possessing complete knowledge of the game\. We formalize three distinct notions of symmetry in this domain and reveal a surprising structural hierarchy: the most holistic definitions of symmetry impose restrictive constraints that actually simplify the learning landscape, whereas the \`\`simplest'' definition represents the most general and challenging setting\. We provide polynomial\-time algorithms for all three settings that achieve sublinear regret\. Crucially, we demonstrate that despite the complex Markovian dynamics, a simple strategy of locally mimicking the opponent's actions suffices to guarantee robustness\.  This finding significantly broadens the class of games where robust learning is possible under severe informational disadvantage, proving that knowledge of the transition laws is not required to force a draw\.

## Offline\-Online Reinforcement Learning for Linear Mixture MDPs

**Authors:** Zhongjun Zhang; Sean R\. Sinclair

**ID:** 156103 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0NMnfMyUHF>) | [PDF](<https://openreview.net/pdf?id=0NMnfMyUHF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156103>)

We study offline\-online reinforcement learning in linear mixture Markov decision processes \(MDPs\) under environment shift\.  In the offline phase, data are collected by an unknown behavior policy and may come from a mismatched environment, while in the online phase the learner interacts with the target environment\.  We propose an algorithm that adaptively leverages offline data\. When the offline data are informative, either due to sufficient coverage or small environment shift, the algorithm provably improves over purely online learning\. When the offline data are uninformative, it safely ignores them and matches the online\-only performance\.  We establish regret upper bounds that explicitly characterize when offline data are informative, together with nearly matching lower bounds\.  Numerical experiments further corroborate our theoretical findings\.

## Statistical field theory for Markov decision processes under uncertainty

**Authors:** George Stamatescu

**ID:** 156672\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** missing

**Repeated source row:** 156672

[Official poster](<https://neurips.cc/virtual/2026/poster/156672>)

_Abstract unavailable from the accessible public sources._

## A Geometric Perspective on Reward Function Updates in Inverse Reinforcement Learning

**Authors:** Anish Abhijit Diwan; Jan Peters; Oleg Arenz

**ID:** 149606\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149606

[Paper](<https://openreview.net/forum?id=oqLzCT1cus>) | [PDF](<https://openreview.net/pdf?id=oqLzCT1cus>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149606>)

_Abstract unavailable from the accessible public sources._

## Bellman Residual Minimization for Control: Geometry, Stationarity, and Convergence

**Authors:** Donghwan Lee; Hyukjun Yang

**ID:** 152752 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QblP84vh1D>) | [PDF](<https://openreview.net/pdf?id=QblP84vh1D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152752>)

Markov decision problems are most commonly solved via dynamic programming\. Another approach is Bellman residual minimization, which directly minimizes the squared Bellman residual objective function\. However, compared to dynamic programming, this approach has received relatively less attention, mainly because it is often less efficient in practice and can be more difficult to extend to model\-free settings such as reinforcement learning\. Nonetheless, Bellman residual minimization has several advantages that make it worth investigating, such as more stable convergence with function approximation for value functions\. While Bellman residual methods for policy evaluation have been widely studied, methods for policy optimization \(control tasks\) have been scarcely explored\. In this paper, we establish foundational results for the control Bellman residual minimization for policy optimization\.

## On the Bias of Group\-Based Advantage Estimation

**Authors:** Fengkai Yang; Zherui Chen; Xiaohan Wang; Xiaodong Lu; Jiajun Chai; Guojun Yin; Wei Lin; Fuzhen Zhuang; Shuai Ma; deqing wang; Yaodong Yang; Yikun Ban

**ID:** 151904 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=X4PMPm6QA7>) | [PDF](<https://openreview.net/pdf?id=X4PMPm6QA7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151904>)

Reinforcement Learning from Verifier Rewards \(RLVR\) has emerged as a widely used approach for post\-training large language models on reasoning tasks, with group\-based methods such as GRPO and its variants gaining broad adoption\. These methods rely on group\-relative advantage estimation to avoid learned critics, yet its theoretical properties remain poorly understood\. In this work, we uncover a fundamental issue of group\-based RL: the group\-relative advantage estimator is inherently biased relative to the true \(expected\) advantage\. We provide the first theoretical analysis showing that it systematically underestimates advantages for hard prompts and overestimates them for easy prompts, leading to imbalanced exploration and exploitation\. To address this issue, we propose History\-Aware Adaptive Difficulty Weighting \(HA\-DW\), an adaptive reweighting scheme that adjusts advantage estimates based on an evolving difficulty anchor and training dynamics\. Both theoretical analysis and experiments on five mathematical reasoning benchmarks demonstrate that HA\-DW consistently improves performance when integrated into GRPO and its variants\. Our results suggest that correcting biased advantage estimation is critical for robust and efficient RLVR training\. The code is available at https://anonymous\.4open\.science/r/HA\-DW\-037C\.

## Emergence of Physical Intelligence via Controllable Information Production

**Authors:** Tristan Shah; Stas Tiomkin

**ID:** 152582 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S15gujrcKN>) | [PDF](<https://openreview.net/pdf?id=S15gujrcKN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152582>)

Intrinsic Motivation \(IM\) aims to train agents without external rewards, enabling useful behavior to emerge from the agent's interaction with its environment alone\. However, the dominant IM approaches rely on information\-theoretic quantities with designer\-chosen variables, introducing bias and lacking a principled connection to dynamics or optimal control \(OC\)\. We introduce Controllable Information Production \(CIP\), a new foundation for IM explicitly grounded in dynamical systems and OC\. CIP measures the rate at which an agent produces information, capturing controllable complexity without external knowledge or bias\. CIP unifies IM and OC into a single framework, formalizing physical intelligence as the control of information production\. It further reveals connections between the structure of the value function and Kolmogorov–Sinai entropy\. CIP consistently outperforms prior IM methods on standard benchmarks in robot learning and solves tasks they fail on, including humanoid self\-righting\. These results support a general organizing principle: physical intelligence emerges from driving systems toward the edge of controllable chaos\.

## Q\-MMR: Off\-Policy Evaluation via Recursive Reweighting and Moment Matching

**Authors:** Nan Jiang; Xiang Li

**ID:** 148484\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148484

[Paper](<https://openreview.net/forum?id=xTSX3ivXEZ>) | [PDF](<https://openreview.net/pdf?id=xTSX3ivXEZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148484>)

_Abstract unavailable from the accessible public sources._

## A Surrogate Perspective on Convergence of Fixed\-Target DQN

**Authors:** Zichu Liu; Nneka M Okolo; Ryan D&amp;amp;\#x27;Orazio; Danilo Vucetic; Ioannis Mitliagkas; Gauthier Gidel

**ID:** 155836 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2W16djzTLs>) | [PDF](<https://openreview.net/pdf?id=2W16djzTLs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155836>)

Deep Q\-Networks \(DQNs\) approximate value iteration by freezing a target network, forming Bellman\-optimality targets, and running an inner regression loop that minimizes a smooth \\emph\{surrogate loss\} \(e\.g\., MSE/Huber loss\) on data from a replay buffer\. Yet, control is governed by the Bellman optimality operator's $\\gamma$\-contraction in $\\ell\_\\infty$, whereas common objectives \(MSE/Huber loss\) measure progress in an averaged $\\ell\_2/\\ell\_1$ geometry; thus, improving the surrogate need not reduce the worst\-case Bellman error that drives performance\. To bridge this gap we connect the progress in the inner loop for each surrogate to the Bellman residual under the $\\ell\_\\infty$ norm\. Our analysis provides explicit thresholds denoted by $\\alpha$ under which sufficient progress guarantees a $\\ell\_\\infty$ contraction up to a standard approximation floor\. This yields new convergence guarantees for DQN with fixed targets trained using MSE or Huber\-type losses, and motivates a novel soft\-$\\ell\_\\infty$ surrogate that smoothly approximates the sup\-norm and better matches the $\\ell\_\\infty$ geometry resulting in the least stringent inner loop accuracy requirements\. Across Atari benchmarks, soft\-$\\ell\_\\infty$ consistently reduces the worst\-case Bellman residual and matches or improves returns relative to standard objectives, providing a practical, geometry\-aligned recipe for stable DQN training\.

## Improved Regret Analysis For Parallel Gaussian Process Bandit Optimization

**Authors:** Shion Takeno; Shogo Iwazaki

**ID:** 153555 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KXCNleX2pP>) | [PDF](<https://openreview.net/pdf?id=KXCNleX2pP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153555>)

This paper studies the regret analysis for parallel Gaussian process \(GP\) bandit optimization\. The known regret upper bounds for the widely used GP batched upper confidence bound and GP batched Thompson sampling \(GP\-BTS\) suffer from a multiplicative factor with respect to the batch size $Q$\. To avoid this degradation, existing analyses require a polynomial number of uncertainty sampling \(US\) for $Q$ at the beginning of optimization\. However, this initial US phase is often ineffective in practice\. This paper shows that the regret upper bound without the multiplicative factor on $Q$ can be achieved without the initial US phase, using GP\-BTS as an example\. Furthermore, we show much better regret upper bounds in the noiseless setting than in the noisy setting, as in the sequential GP bandit setting\.

## From Likelihood Convergence to Parameter Convergence in POMDPs

**Authors:** Jack Zhang; Saurabh Amin; Jiawei zhang; Patrick Jaillet

**ID:** 150517 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hWP93Z7A1J>) | [PDF](<https://openreview.net/pdf?id=hWP93Z7A1J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150517>)

Likelihood\-based methods are widely used to learn the parameters of partially observable Markov decision processes \(POMDPs\), but their finite\-sample behavior is not well understood\. We establish a different kind of finite\-sample guarantee\. For any candidate POMDP parameter, we bound its parameter recovery error in terms of its likelihood gap to the ground truth, the structural conditioning of the observation and transition kernels, and the behavior policy used to collect data\. The bound applies in both the undercomplete and overcomplete observation regimes, with the overcomplete case following naturally from the undercomplete analysis\. Because the result applies to any sufficiently good candidate, it yields finite\-sample guarantees for the maximum\-likelihood estimator, OMLE\-style algorithms, and any procedure that produces a parameter with controlled likelihood gap\. This is particularly useful for downstream tasks such as infinite\-horizon planning with state\-dependent rewards, where accurate recovery of the kernels themselves is required to obtain near\-optimal policies\. The bound separates the contribution of the behavior policy from that of the model, making explicit how data\-collection choices, including action coverage and mixing rate, accelerate parameter learning\.

## Reinforcement Learning for Exponential Utility: Algorithms and Convergence in Discounted MDPs

**Authors:** Gugan Chandrashekhar Mallika Thoppe; Prashanth L\.A\.; Ankur Naskar; Sanjay P\. Bhat

**ID:** 151794 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XyLfduvyWq>) | [PDF](<https://openreview.net/pdf?id=XyLfduvyWq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151794>)

Reinforcement learning \(RL\) for exponential\-utility optimization in discounted Markov decision processes \(MDPs\) lacks principled value\-based algorithms\. We address this gap in the fixed risk\-aversion setting\. Building on the Bellman\-type equation for exponential utility studied in Porteus \[1975\], we derive two Q\-value\-style extensions and show that the associated operators are contractions in the $L\_\\infty$ and sup\-log/Thompson metrics, respectively\. We characterize their fixed points and prove that the induced greedy stationary policy is optimal for the exponential\-utility objective among stationary policies\. These structural results lead to two model\-free algorithms: a two\-timescale Q\-learning\-\-style algorithm, for which we establish almost\-sure convergence and provide finite\-time convergence rates via timescale separation, and a one\-timescale algorithm governed by a sublinear power\-law operator\. Since the latter does not admit a global contraction in standard metrics, we prove its convergence using delicate arguments based on local Lipschitzness, monotonicity, homogeneity, and Dini derivatives, and provide a scalar finite\-time analysis that highlights the challenges in obtaining convergence rates  in the vector case\. Our work provides a foundation for value\-based RL under exponential\-utility objectives\.

## Bellman Residual Minimization for Control: Geometry, Stationarity, and Convergence

**Authors:** Donghwan Lee; Hyukjun Yang

**ID:** 152752\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152752

[Paper](<https://openreview.net/forum?id=QblP84vh1D>) | [PDF](<https://openreview.net/pdf?id=QblP84vh1D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152752>)

Markov decision problems are most commonly solved via dynamic programming\. Another approach is Bellman residual minimization, which directly minimizes the squared Bellman residual objective function\. However, compared to dynamic programming, this approach has received relatively less attention, mainly because it is often less efficient in practice and can be more difficult to extend to model\-free settings such as reinforcement learning\. Nonetheless, Bellman residual minimization has several advantages that make it worth investigating, such as more stable convergence with function approximation for value functions\. While Bellman residual methods for policy evaluation have been widely studied, methods for policy optimization \(control tasks\) have been scarcely explored\. In this paper, we establish foundational results for the control Bellman residual minimization for policy optimization\.

## Contrastive Pretraining Scales Agentic Exploration

**Authors:** Jesse Zymet

**ID:** 149777 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nO7QFPhYra>) | [PDF](<https://openreview.net/pdf?id=nO7QFPhYra>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149777>)

_Abstract unavailable from the accessible public sources._

## Signature Approach for Contextual Bandits with Nonlinear and Path\-dependent Rewards

**Authors:** Xin Guo; Grace He; Xinyu Li

**ID:** 154702 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BfjQPRAfuN>) | [PDF](<https://openreview.net/pdf?id=BfjQPRAfuN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154702>)

_Abstract unavailable from the accessible public sources._

## Dynamic Latent Routing

**Authors:** Fangyuan Yu; Xin Su; Amir Abdullah

**ID:** 153785 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IgAxk6rEiw>) | [PDF](<https://openreview.net/pdf?id=IgAxk6rEiw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153785>)

_Abstract unavailable from the accessible public sources._

## Adaptive Joint Testing of Policies in Discounted Markov Decision Processes

**Authors:** Po\-An Wang; Kaito Ariu

**ID:** 148204 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zaV6HqToRX>) | [PDF](<https://openreview.net/pdf?id=zaV6HqToRX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148204>)

_Abstract unavailable from the accessible public sources._

## Posterior Sampling\-based Online Learning for Episodic POMDPs

**Authors:** Dengwang Tang; Dongze Ye; Rahul Jain; Ashutosh Nayyar; Pierluigi Nuzzo

**ID:** 155289 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6fR2Ocenmx>) | [PDF](<https://openreview.net/pdf?id=6fR2Ocenmx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155289>)

_Abstract unavailable from the accessible public sources._

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

## From Likelihood Convergence to Parameter Convergence in POMDPs

**Authors:** Jack Zhang; Saurabh Amin; Jiawei zhang; Patrick Jaillet

**ID:** 150517\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150517

[Paper](<https://openreview.net/forum?id=hWP93Z7A1J>) | [PDF](<https://openreview.net/pdf?id=hWP93Z7A1J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150517>)

Likelihood\-based methods are widely used to learn the parameters of partially observable Markov decision processes \(POMDPs\), but their finite\-sample behavior is not well understood\. We establish a different kind of finite\-sample guarantee\. For any candidate POMDP parameter, we bound its parameter recovery error in terms of its likelihood gap to the ground truth, the structural conditioning of the observation and transition kernels, and the behavior policy used to collect data\. The bound applies in both the undercomplete and overcomplete observation regimes, with the overcomplete case following naturally from the undercomplete analysis\. Because the result applies to any sufficiently good candidate, it yields finite\-sample guarantees for the maximum\-likelihood estimator, OMLE\-style algorithms, and any procedure that produces a parameter with controlled likelihood gap\. This is particularly useful for downstream tasks such as infinite\-horizon planning with state\-dependent rewards, where accurate recovery of the kernels themselves is required to obtain near\-optimal policies\. The bound separates the contribution of the behavior policy from that of the model, making explicit how data\-collection choices, including action coverage and mixing rate, accelerate parameter learning\.

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

## Reinforcement Learning with Multi\-Step Lookahead Information Via Adaptive Batching

**Authors:** Nadav Merlis

**ID:** 151980 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WOddCmkhLw>) | [PDF](<https://openreview.net/pdf?id=WOddCmkhLw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151980>)

_Abstract unavailable from the accessible public sources._

## Robust PAC Learning of Concurrent Stochastic Games

**Authors:** Angel Y He; David Parker

**ID:** 154906 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A36NpIVJiV>) | [PDF](<https://openreview.net/pdf?id=A36NpIVJiV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154906>)

We introduce the first Probably Approximately Correct \(PAC\) learning framework for general\-sum concurrent stochastic games \(CSGs\) with transition uncertainty, while addressing the challenge of Nash equilibrium \(NE\) existence\. Our algorithm maintains data\-driven $L^1$ confidence sets over transition kernels and solves a robust CSG to compute a social\-welfare optimal $\\varepsilon$\-NE, using a novel robust MDP\-based exploration mechanism to drive joint state\-action coverage without unilateral control\. Crucially, we introduce a Nash margin characterisation that enables principled reasoning about equilibrium existence: the framework either returns an $\\varepsilon$\-approximate NE whose social\-welfare value is $\\varepsilon$\-close to optimal, or provides a sound certificate that no exact NE exists\. Under a minimum reachability condition $p\_\{\\mathrm\{reach\}\} &gt; 0$ over all state\-action pairs, the algorithm terminates after a polynomial number of interactions, with sample complexity $\\widetilde\{\\mathcal\{O\}\}\\left\( \{R\_\{\\max\}^2 H^4 \|S\|^2 \|A\| / \(p\_\{\\mathrm\{reach\}\} \\varepsilon^2\)\} \\right\)$\. Empirical results on benchmark CSGs demonstrate near\-optimal performance, correct handling of equilibrium \(non\-\)existence, and sample complexity consistent with theory; implementation available at: https://anonymous\.4open\.science/r/pg1\.

## Reinforcement Learning for Exponential Utility: Algorithms and Convergence in Discounted MDPs

**Authors:** Gugan Chandrashekhar Mallika Thoppe; Prashanth L\.A\.; Ankur Naskar; Sanjay P\. Bhat

**ID:** 151794\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151794

[Paper](<https://openreview.net/forum?id=XyLfduvyWq>) | [PDF](<https://openreview.net/pdf?id=XyLfduvyWq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151794>)

Reinforcement learning \(RL\) for exponential\-utility optimization in discounted Markov decision processes \(MDPs\) lacks principled value\-based algorithms\. We address this gap in the fixed risk\-aversion setting\. Building on the Bellman\-type equation for exponential utility studied in Porteus \[1975\], we derive two Q\-value\-style extensions and show that the associated operators are contractions in the $L\_\\infty$ and sup\-log/Thompson metrics, respectively\. We characterize their fixed points and prove that the induced greedy stationary policy is optimal for the exponential\-utility objective among stationary policies\. These structural results lead to two model\-free algorithms: a two\-timescale Q\-learning\-\-style algorithm, for which we establish almost\-sure convergence and provide finite\-time convergence rates via timescale separation, and a one\-timescale algorithm governed by a sublinear power\-law operator\. Since the latter does not admit a global contraction in standard metrics, we prove its convergence using delicate arguments based on local Lipschitzness, monotonicity, homogeneity, and Dini derivatives, and provide a scalar finite\-time analysis that highlights the challenges in obtaining convergence rates  in the vector case\. Our work provides a foundation for value\-based RL under exponential\-utility objectives\.

## Bellman Residual Minimization for Control: Geometry, Stationarity, and Convergence

**Authors:** Donghwan Lee; Hyukjun Yang

**ID:** 152752\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152752

[Paper](<https://openreview.net/forum?id=QblP84vh1D>) | [PDF](<https://openreview.net/pdf?id=QblP84vh1D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152752>)

Markov decision problems are most commonly solved via dynamic programming\. Another approach is Bellman residual minimization, which directly minimizes the squared Bellman residual objective function\. However, compared to dynamic programming, this approach has received relatively less attention, mainly because it is often less efficient in practice and can be more difficult to extend to model\-free settings such as reinforcement learning\. Nonetheless, Bellman residual minimization has several advantages that make it worth investigating, such as more stable convergence with function approximation for value functions\. While Bellman residual methods for policy evaluation have been widely studied, methods for policy optimization \(control tasks\) have been scarcely explored\. In this paper, we establish foundational results for the control Bellman residual minimization for policy optimization\.

## A Surrogate Perspective on Convergence of Fixed\-Target DQN

**Authors:** Zichu Liu; Nneka M Okolo; Ryan D&amp;amp;\#x27;Orazio; Danilo Vucetic; Ioannis Mitliagkas; Gauthier Gidel

**ID:** 155836\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155836

[Paper](<https://openreview.net/forum?id=2W16djzTLs>) | [PDF](<https://openreview.net/pdf?id=2W16djzTLs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155836>)

Deep Q\-Networks \(DQNs\) approximate value iteration by freezing a target network, forming Bellman\-optimality targets, and running an inner regression loop that minimizes a smooth \\emph\{surrogate loss\} \(e\.g\., MSE/Huber loss\) on data from a replay buffer\. Yet, control is governed by the Bellman optimality operator's $\\gamma$\-contraction in $\\ell\_\\infty$, whereas common objectives \(MSE/Huber loss\) measure progress in an averaged $\\ell\_2/\\ell\_1$ geometry; thus, improving the surrogate need not reduce the worst\-case Bellman error that drives performance\. To bridge this gap we connect the progress in the inner loop for each surrogate to the Bellman residual under the $\\ell\_\\infty$ norm\. Our analysis provides explicit thresholds denoted by $\\alpha$ under which sufficient progress guarantees a $\\ell\_\\infty$ contraction up to a standard approximation floor\. This yields new convergence guarantees for DQN with fixed targets trained using MSE or Huber\-type losses, and motivates a novel soft\-$\\ell\_\\infty$ surrogate that smoothly approximates the sup\-norm and better matches the $\\ell\_\\infty$ geometry resulting in the least stringent inner loop accuracy requirements\. Across Atari benchmarks, soft\-$\\ell\_\\infty$ consistently reduces the worst\-case Bellman residual and matches or improves returns relative to standard objectives, providing a practical, geometry\-aligned recipe for stable DQN training\.

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

## On the Bias of Group\-Based Advantage Estimation

**Authors:** Fengkai Yang; Zherui Chen; Xiaohan Wang; Xiaodong Lu; Jiajun Chai; Guojun Yin; Wei Lin; Fuzhen Zhuang; Shuai Ma; deqing wang; Yaodong Yang; Yikun Ban

**ID:** 151904\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151904

[Paper](<https://openreview.net/forum?id=X4PMPm6QA7>) | [PDF](<https://openreview.net/pdf?id=X4PMPm6QA7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151904>)

Reinforcement Learning from Verifier Rewards \(RLVR\) has emerged as a widely used approach for post\-training large language models on reasoning tasks, with group\-based methods such as GRPO and its variants gaining broad adoption\. These methods rely on group\-relative advantage estimation to avoid learned critics, yet its theoretical properties remain poorly understood\. In this work, we uncover a fundamental issue of group\-based RL: the group\-relative advantage estimator is inherently biased relative to the true \(expected\) advantage\. We provide the first theoretical analysis showing that it systematically underestimates advantages for hard prompts and overestimates them for easy prompts, leading to imbalanced exploration and exploitation\. To address this issue, we propose History\-Aware Adaptive Difficulty Weighting \(HA\-DW\), an adaptive reweighting scheme that adjusts advantage estimates based on an evolving difficulty anchor and training dynamics\. Both theoretical analysis and experiments on five mathematical reasoning benchmarks demonstrate that HA\-DW consistently improves performance when integrated into GRPO and its variants\. Our results suggest that correcting biased advantage estimation is critical for robust and efficient RLVR training\. The code is available at https://anonymous\.4open\.science/r/HA\-DW\-037C\.

## Emergence of Physical Intelligence via Controllable Information Production

**Authors:** Tristan Shah; Stas Tiomkin

**ID:** 152582\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152582

[Paper](<https://openreview.net/forum?id=S15gujrcKN>) | [PDF](<https://openreview.net/pdf?id=S15gujrcKN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152582>)

Intrinsic Motivation \(IM\) aims to train agents without external rewards, enabling useful behavior to emerge from the agent's interaction with its environment alone\. However, the dominant IM approaches rely on information\-theoretic quantities with designer\-chosen variables, introducing bias and lacking a principled connection to dynamics or optimal control \(OC\)\. We introduce Controllable Information Production \(CIP\), a new foundation for IM explicitly grounded in dynamical systems and OC\. CIP measures the rate at which an agent produces information, capturing controllable complexity without external knowledge or bias\. CIP unifies IM and OC into a single framework, formalizing physical intelligence as the control of information production\. It further reveals connections between the structure of the value function and Kolmogorov–Sinai entropy\. CIP consistently outperforms prior IM methods on standard benchmarks in robot learning and solves tasks they fail on, including humanoid self\-righting\. These results support a general organizing principle: physical intelligence emerges from driving systems toward the edge of controllable chaos\.

## Bellman Contraction under MMD: A Unified Framework

**Authors:** Baptiste Debes; Tinne Tuytelaars

**ID:** 150640 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ga3QB4bSSV>) | [PDF](<https://openreview.net/pdf?id=ga3QB4bSSV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150640>)

We introduce a mathematical framework for studying contraction of the distributional Bellman operator under Maximum Mean Discrepancy \(MMD\)\. We show that contraction reduces to conditional positive definiteness of an associated kernel constructed from the base kernel, which we call the Bellman difference kernel\. Focusing on radial kernels, we use Schoenberg's theorem to connect this condition to Bernstein functions, yielding contraction criteria, valid in arbitrary dimension, that can be checked analytically or numerically\. Our framework unifies known results for the Gaussian RBF, power\-distance, and multiquadric kernels; using numerical search, we further identify 12 new contraction\-inducing kernels\. We also propose \*chaining\*, a general construction that produces contraction\-inducing kernels at any prescribed rate\. To reconcile theory with practice, we introduce conditional positive definiteness on a set, which explains why the Gaussian RBF kernel can remain a valid choice on bounded supports despite its lack of global contraction\. Finally, we identify a fundamental tradeoff between contraction rate and discriminative power, where kernels that contract faster tend to discriminate less between distributions\.

## Behaving Better, Thinking Worse: Sycophancy Across Post\-Training Stages

**Authors:** Sonnet Xu; Kritika Singh; Sheharbano Jafry; Roxana Daneshjou; Sanmi Koyejo

**ID:** 153819\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153819

[Paper](<https://openreview.net/forum?id=IUAXqLsMTC>) | [PDF](<https://openreview.net/pdf?id=IUAXqLsMTC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153819>)

We trace factual sycophancy across three post\-training pipelines \(OLMo 3 7B Think and Instruct, Llama 3\.1 8B Instruct, Tulu 3\) on AMPS and MedQuAD with a dual\-track evaluation: a GPT\-4o\-judged generative track and a log\-probability track reporting $\\Delta$LogOdds separately under \\emph\{in\-context\} rebuttals and \\emph\{preemptive\} wrong\-answer assertions\. Decomposing by challenge type $\\times$ context reveals three patterns\. \(1\) \\textbf\{Challenge type:\} the sycophantic shift is alternative\-conditioned, so simple pushback with no asserted answer produces no shift, while ethos/justification/citation challenges produce substantial positive shifts\. \(2\) \\textbf\{Context:\} every base model's sycophantic shift concentrates preemptively, with weak or defensive in\-context response\. On computational, IC diverges into four pipeline\-specific endpoints\. On medical, the same four pipelines converge with no defensive IC developing on any recipe\. \(3\) \\textbf\{Behavioral vs log\-probability:\} post\-training produces a \\emph\{surface\-predictive dissociation\}: matched\-subset behavioral flip rate drops significantly on identical items while preemptive $\\Delta$LogOdds on those same items grows\.

## Bellman Contraction under MMD: A Unified Framework

**Authors:** Baptiste Debes; Tinne Tuytelaars

**ID:** 150640\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150640

[Paper](<https://openreview.net/forum?id=ga3QB4bSSV>) | [PDF](<https://openreview.net/pdf?id=ga3QB4bSSV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150640>)

We introduce a mathematical framework for studying contraction of the distributional Bellman operator under Maximum Mean Discrepancy \(MMD\)\. We show that contraction reduces to conditional positive definiteness of an associated kernel constructed from the base kernel, which we call the Bellman difference kernel\. Focusing on radial kernels, we use Schoenberg's theorem to connect this condition to Bernstein functions, yielding contraction criteria, valid in arbitrary dimension, that can be checked analytically or numerically\. Our framework unifies known results for the Gaussian RBF, power\-distance, and multiquadric kernels; using numerical search, we further identify 12 new contraction\-inducing kernels\. We also propose \*chaining\*, a general construction that produces contraction\-inducing kernels at any prescribed rate\. To reconcile theory with practice, we introduce conditional positive definiteness on a set, which explains why the Gaussian RBF kernel can remain a valid choice on bounded supports despite its lack of global contraction\. Finally, we identify a fundamental tradeoff between contraction rate and discriminative power, where kernels that contract faster tend to discriminate less between distributions\.

## Robust PAC Learning of Concurrent Stochastic Games

**Authors:** Angel Y He; David Parker

**ID:** 154906\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154906

[Paper](<https://openreview.net/forum?id=A36NpIVJiV>) | [PDF](<https://openreview.net/pdf?id=A36NpIVJiV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154906>)

We introduce the first Probably Approximately Correct \(PAC\) learning framework for general\-sum concurrent stochastic games \(CSGs\) with transition uncertainty, while addressing the challenge of Nash equilibrium \(NE\) existence\. Our algorithm maintains data\-driven $L^1$ confidence sets over transition kernels and solves a robust CSG to compute a social\-welfare optimal $\\varepsilon$\-NE, using a novel robust MDP\-based exploration mechanism to drive joint state\-action coverage without unilateral control\. Crucially, we introduce a Nash margin characterisation that enables principled reasoning about equilibrium existence: the framework either returns an $\\varepsilon$\-approximate NE whose social\-welfare value is $\\varepsilon$\-close to optimal, or provides a sound certificate that no exact NE exists\. Under a minimum reachability condition $p\_\{\\mathrm\{reach\}\} &gt; 0$ over all state\-action pairs, the algorithm terminates after a polynomial number of interactions, with sample complexity $\\widetilde\{\\mathcal\{O\}\}\\left\( \{R\_\{\\max\}^2 H^4 \|S\|^2 \|A\| / \(p\_\{\\mathrm\{reach\}\} \\varepsilon^2\)\} \\right\)$\. Empirical results on benchmark CSGs demonstrate near\-optimal performance, correct handling of equilibrium \(non\-\)existence, and sample complexity consistent with theory; implementation available at: https://anonymous\.4open\.science/r/pg1\.

## Inverting the Bellman Equation: From $Q$\-Values to World Models

**Authors:** Alistair Letcher; Mattie Fellows; Alexander D\. Goldie; Jonathan Richens; Jakob Foerster; Oliver Richardson

**ID:** 153840\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153840

[Paper](<https://openreview.net/forum?id=ILIYkAejvy>) | [PDF](<https://openreview.net/pdf?id=ILIYkAejvy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153840>)

_Abstract unavailable from the accessible public sources._

## Inverting the Bellman Equation: From $Q$\-Values to World Models

**Authors:** Alistair Letcher; Mattie Fellows; Alexander D\. Goldie; Jonathan Richens; Jakob Foerster; Oliver Richardson

**ID:** 153840\-\-3 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153840

[Paper](<https://openreview.net/forum?id=ILIYkAejvy>) | [PDF](<https://openreview.net/pdf?id=ILIYkAejvy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153840>)

_Abstract unavailable from the accessible public sources._

