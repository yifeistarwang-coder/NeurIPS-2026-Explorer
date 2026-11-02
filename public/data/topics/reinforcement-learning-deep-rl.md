# Reinforcement Learning / Deep RL

强化学习 / 深度强化学习

280 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Test\-Time Gradient Guidance of Flow Policies in Reinforcement Learning

**Authors:** Zhiyuan \(Paul\) Zhou; Andy Peng; Charles Xu; Qiyang Li; Jost Springenberg; Kevin Frans; Sergey Levine

**ID:** 153144 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NYzL9idgNU>) | [PDF](<https://openreview.net/pdf?id=NYzL9idgNU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153144>)

Expressive continuous control policies, such as diffusion and flow models, form the backbone of recent advances in scaling imitation learning for simulated and real robot control\. While they are known to scale stably in the supervised imitation learning setting, incorporating them into reinforcement learning \(RL\) pipelines for policy improvement has proven more difficult\. It often requires specialized training objectives or back\-propagating through denoising processes, which cause well known issues with stability and affects scalability\. In this paper we study the question of whether simple policy improvement schemes at test time alone, leaving stable supervised policy training intact, can be a competitive alternative which side\-steps these issues\. To this end, we propose QGF \(Q\-Guided Flow\), a new RL algorithm that performs policy optimization entirely during test time\. QGF works by pre\-training both a reference flow policy \(via a standard behavioral cloning objective\) and a value function critic and, during test\-time, using the value gradient to guide the reference policy to generate higher\-value actions without any additional policy learning\. Empirically, QGF outperforms prior test\-time RL methods while being much cheaper to run, and is competitive with state\-of\-the\-art training\-time algorithms on single\-task and goal\-conditioned offline RL benchmarks with high\-dimensional action spaces\. Moreover, it exhibits favorable scaling with model size by avoiding the instability of actor\-critic training, offering a practical and effective alternative RL algorithm with expressive policies\.

## SALT: When More Rollouts Don’t Help in Group\-Based Policy Optimization and How to Make Them Matter

**Authors:** Powei Chang; Jinpeng Zhang; Chaoqun Sun; MiniWell Tsao; Lianrui Li; JianXiang Xiang; Chenyu Wang; Yukang Gao; Dongying kong

**ID:** 153988 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H3EiJWynbi>) | [PDF](<https://openreview.net/pdf?id=H3EiJWynbi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153988>)

Reinforcement learning with verifiable rewards \(RLVR\) often adopts GRPO\-style group\-relative updates, sampling multiple rollouts per prompt to construct normalized learning signals\. However, merely increasing the number of rollouts does not reliably strengthen learning: under GRPO\-style group normalization, per\-rollout policy\-gradient features can concentrate into a low\-rank, signed geometry, causing substantial cancellation during aggregation and weakening the effective update\.  We address this failure mode with SALT, a Subspace\-Adaptive geometry pLug\-in componenT that uses sample\-wise gradient geometry to reweight the coefficients of group\-relative updates\. SALT estimates a dominant shared subspace from the mini\-batch Gram geometry, decomposes group\-relative coefficients into shared and residual channels, and adaptively amplifies the residual channel when signed cancellation is severe\. Across diverse reasoning\-oriented RLVR benchmarks and model scales, SALT improves effective update geometry and performance without modifying the reward model or the rollout sampling procedure\.

## Skill\-Level Effects in Behavioral Cloning: When Low\-Skill Data Improves Performance

**Authors:** Saumik Narayanan; Kassa Korley; Siddhartha Sen; Chien\-Ju Ho

**ID:** 151198 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cELixXL3SO>) | [PDF](<https://openreview.net/pdf?id=cELixXL3SO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151198>)

Behavioral cloning \(BC\), which trains models from offline demonstrations, is a common approach in reinforcement learning settings\. Prior work argues that BC requires expert demonstrations and performs poorly when trained on low\-skill data\. We challenge this assumption by showing that, in certain regimes, training on low\-skill data can yield models that outperform those trained on high\-skill data\. Because low\-skill data is often cheaper and more easily acquirable, this finding has important practical implications\. To explain this result, we introduce the notion of fragility, characterizing how a policy's reward degrades under errors, and provide theoretical insights on how fragility can predict low\-skill outperformance\. We test our approach in a synthetic environment and MuJoCo and validate it using human data from chess and racing\. Motivated by these findings, we connect our results to curriculum learning by structuring training according to demonstrator skill, rather than task difficulty as in standard curriculum design, and show that such skill\-based curricula can improve performance relative to standard BC approaches\.

## Factorized Spectral Representations for Reinforcement Learning

**Authors:** Junyi Wu; Dan Li

**ID:** 149364 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qZTX18AAiX>) | [PDF](<https://openreview.net/pdf?id=qZTX18AAiX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149364>)

Learning a compact model of the world from interaction data is central to sample\-efficient deep reinforcement learning\. Spectral representation methods have become the leading paradigm for representation learning in continuous control by taking a matrix view of the transition kernel, with state\-action pairs on one side and next states on the other, and learning a low\-rank factorization through self\-supervised contrastive objectives\. We take this view one step further\. The transition kernel is naturally a three\-mode tensor over states, actions, and next states, and a CP decomposition gives one feature map per mode\. We propose FaStR, which fits this decomposition with a noise contrastive objective, producing separate state, action, and next\-state encoders that together form a single spectral representation\. The factored form yields a smaller hypothesis class, and the sample size needed for representation learning shrinks by a factor that scales with the smaller of the state and action dimensions\. Empirically, FaStR delivers its largest gains on high\-dimensional locomotion tasks whose dynamics align with the factored structure, and the learned state encoder transfers intact across actuator shift while only the action encoder is retrained\.

## Almost Sure Convergence of Linear Temporal Difference Learning with Arbitrary Features

**Authors:** Jiuqi Wang; Shangtong Zhang

**ID:** 156657 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156657>)

Temporal difference \(TD\) learning with linear function approximation \(linear TD\) is a classic and powerful prediction algorithm in reinforcement learning\. While it is well\-understood that linear TD converges almost surely to a unique point, this convergence traditionally requires the assumption that the features used by the approximator are linearly independent\. However, this linear independence assumption does not hold in many practical scenarios\. This work is the first to establish the almost sure convergence of linear TD without requiring linearly independent features\. We prove that the weight iterates of linear TD converge to a bounded set, and that the value estimates derived from the weights in that set are the same almost everywhere\. We also establish a notion of local stability of the weight iterates\. Importantly, we do not impose assumptions tailored to feature dependence and do not modify the linear TD algorithm\. Key to our analysis is a novel characterization of bounded invariant sets of the mean ODE of linear TD\.

## On the Divergence of Differential Temporal Difference Learning without Local Clocks

**Authors:** David Antrobius; Shangtong Zhang

**ID:** 152272 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UJzniNLXaL>) | [PDF](<https://openreview.net/pdf?id=UJzniNLXaL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152272>)

Learning rate is a critical component of reinforcement learning \(RL\)\.     This work uses global and local clocks to distinguish two types of learning rates\.     The former is of the standard form $\\alpha\_t$ that depends only on the time step $t$ \(i\.e\., a global clock\)\.     The latter is of the form $\\alpha\_\{\\nu\(S\_t, t\)\}$,     where $\\nu\(s, t\)$ counts the number of visits to state $s$ until time $t$ \(i\.e\., a local clock\)\.     In discounted RL, an RL algorithm that is convergent with a local clock is always also convergent with a global clock, and vice versa\.     We are not aware of any counterexample\.     The key contribution of this work is to show that this nice correspondence breaks down in average\-reward RL\.     Specifically,     we construct a counterexample showing that although differential temporal difference learning is convergent with a local clock, it can diverge with a global clock\.     This counterexample closes the open problem in Wan et al\. \[2021\], Blaser et al\. \[2026\]\.

## Almost Sure Convergence Rates of Stochastic Approximation and Reinforcement Learning via a Poisson\-Moreau Drift

**Authors:** Xinyu Liu; Zixuan Xie; Shangtong Zhang

**ID:** 151239 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=brmKAqSWd0>) | [PDF](<https://openreview.net/pdf?id=brmKAqSWd0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151239>)

Establishing almost sure convergence rates for stochastic approximation and reinforcement learning under Markovian noise is a fundamental theoretical challenge\. We make progress towards this challenge for a class of stochastic approximation algorithms whose expected updates are contractive, a setting that arises in many reinforcement learning algorithms such as $Q$\-learning and linear temporal difference learning\. Specifically, for a power\-law learning rate $\\mathcal\{O\}\(n^\{\-\\eta\}\)$ with $\\eta \\in \(1/2, 1\)$, we obtain an almost sure convergence rate arbitrarily close to $o\(n^\{1 \- 2\\eta\}\)$\. For a harmonic learning rate $\\mathcal\{O\}\(n^\{\-1\}\)$, we obtain an almost sure convergence rate arbitrarily close to $o\(n^\{\-1\}\)$, which we argue is a strong result because it is close to the optimal rate $\\mathcal\{O\}\(n^\{\-1\}\\log\\log n\)$ given by the law of the iterated logarithm \(for a special case of i\.i\.d\. noise\)\. Key to our analysis is a novel Lyapunov drift construction that applies a Poisson\-equation based correction for Markovian noise to the well\-established Moreau\-envelope smoothing for the contractive mapping\.

## Latent Q\-Barrier Shielding for Safe In\-Context Reinforcement Learning

**Authors:** Minjae Kwon; Amir Moeini; Shangtong Zhang; Lu Feng

**ID:** 150569 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hB8HKO6xwv>) | [PDF](<https://openreview.net/pdf?id=hB8HKO6xwv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150569>)

Safe in\-context reinforcement learning \(ICRL\) adapts online from interaction history without test\-time parameter updates while controlling episode cost under a safety budget\. Under out\-of\-distribution \(OOD\) deployment shifts, pretraining\-only safe ICRL can give poor reward\-safety tradeoffs because the remaining budget affects behavior only through frozen policy conditioning, not an explicit action\-level check against predicted future cost\.  We propose a latent Q\-Barrier shield that learns a context representation, latent dynamics, and an ensemble cost critic before deployment\.  Without parameter updates, the shield infers context from history and filters or softly reweights candidate actions using the remaining budget and predicted future cost\. We prove a conditional, error\-decomposed barrier\-margin result: a Q\-Barrier\-satisfying action leaves the next latent\-budget state with an approximately budget\-safe continuation under the learned critic, up to Bellman and latent\-prediction errors\.  Across five safe ICRL benchmarks, the shield improves deployment\-time reward\-safety tradeoffs over a strong safe\-ICRL baseline: after a short context window, it achieves higher return in four of five benchmarks while matching or lowering average episode cost in all five\.

## CasePlay: Self\-Play Reinforcement Learning from Case Reports for Medical Reasoning

**Authors:** Hao Wang; Zihan Wang; Kai WU; Jian Yao; Yiwen Ye; Yongcan Luo; Dapeng Wu; Jiale Chen; Haihua Yang

**ID:** 153097 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Nx6gxXwb7V>) | [PDF](<https://openreview.net/pdf?id=Nx6gxXwb7V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153097>)

_Abstract unavailable from the accessible public sources._

## Submodular Multi\-Agent Reinforcement Learning for Effective Online Distributed Task Allocation

**Authors:** Jing Liu; Yangyang YANG; Luca Ballotta; Fangfei Li; Yang Tang; Ruggero Carli

**ID:** 149944 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m1AFEitkDl>) | [PDF](<https://openreview.net/pdf?id=m1AFEitkDl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149944>)

This paper studies multi\-agent reinforcement learning with submodular team utilities, which models scenarios where $N$ agents solve a non\-additive task allocation problem in a distributed manner online\. Since each agent selects one action from a local categorical distribution at each time step, feasible joint actions form a partition matroid over agent\-action pairs\. The standard continuous relaxation of set utility functions, the Multilinear Extension, does not encode categorical constraints on  factorized policies and may yield inconsistent gradient estimation\. To remedy this, we propose the \\emph\{Partition Multilinear Extension\}, a continuous relaxation that equals the expected team utility with factorized categorical policies under partition matroid constraint\. We prove that submodular difference rewards provide unbiased PME marginal\-gradient information and induce a stagewise score\-function policy\-gradient estimator for factorized categorical policies\. Building on these results, we propose \\emph\{SubMAPG\}, a centralized training with decentralized execution \(CTDE\) multi\-agent policy\-gradient framework that implements submodular difference\-reward training signals and masked categorical policies for partition\-feasible decentralized execution\. For the associated PME marginal\-space projected stochastic\-gradient dynamics, we establish a stagewise $\\frac\{1\}\{2\}$\-approximation guarantee and sublinear dynamic regret under slowly varying environments, measured by the path length of the optimal PME marginals\. Finally, to handle open systems where agents and targets may leave and join over time \(e\.g\., modeling failure and recovery of robots or smart sensors\), we implement SubMAPG with a graph neural network policy model\. Numerical experiments on multi\-robot coverage and multi\-target tracking show that SubMAPG outperforms local greedy and shared\-reward baselines, and is competitive with centralized myopic greedy strategies\.

## Tool Verification for Test\-Time Reinforcement Learning

**Authors:** Ruotong Liao; Nikolai Röhrich; Xiaohan Wang; Yuhui Zhang; Yasaman Samadzadeh; Volker Tresp; Serena Yeung\-Levy

**ID:** 153674 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jd7P3rhNnN>) | [PDF](<https://openreview.net/pdf?id=Jd7P3rhNnN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153674>)

Test\-time reinforcement learning \(TTRL\) has emerged as a promising paradigm for adapting large reasoning models \(LRMs\) on unlabeled test inputs, using self\-consensus rewards derived from majority voting over sampled rollouts\. However, majority voting can mistake popularity for correctness: a spurious yet high\-frequency unverified consensus may become a biased reward signal, causing test\-time RL to reinforce frequent but wrong answers and collapse into an incorrect mode\. We address this false\-popular failure mode with T^3RL \(Tool\-Verification for Test\-Time Reinforcement Learning\), a verification\-aware test\-time RL framework\. T^3RL grounds pseudo\-label construction in external tool evidence\. Concretely, a verifier uses external tool evidence, such as code execution, to upweight verified rollouts during verification\-aware voting, producing more reliable pseudo\-labels for training\. Across mathematical reasoning benchmarks of varying difficulty, including MATH\-500, AMC, and AIME 2024, and diverse backbone families, T^3RL significantly improves over TTRL, with stronger performance on harder problems\. More broadly, T^3RL is positioned as a verified online data synthesizer, highlighting the role of test\-time tool verification in reliable online adaptation\.

## ECHO\-2: A Large\-Scale Distributed Rollout Framework for Cost\-Efficient Reinforcement Learning

**Authors:** Jingwei Song; Meng Chen; Jie Xiao; Qingnan Ren; Jiaqi Huang; Yangshen Deng; Senyu Tong; Wanyi Chen; Suli Wang; Zhisheng Chen; Ziqian Bi; Shuo Lu; Yiqun Duan; Xu Wang; Rymon Yu; Lynn Ai; Eric Yang; TIANYU SHI

**ID:** 152365 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TbGdYIqIoF>) | [PDF](<https://openreview.net/pdf?id=TbGdYIqIoF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152365>)

Reinforcement learning \(RL\) is a critical stage in post\-training large language models \(LLMs\), involving repeated interaction between rollout generation, reward evaluation, and centralized learning\. Distributing rollout execution offers opportunities to leverage more cost\-efficient inference resources, but introduces challenges in wide\-area coordination and policy dissemination\. We present ECHO\-2, a distributed RL framework for post\-training with remote inference workers and non\-negligible dissemination latency\. ECHO\-2 combines centralized learning with distributed rollouts and treats bounded policy staleness as a user\-controlled parameter, enabling rollout generation, dissemination, and training to overlap\. We introduce an overlap\-based capacity model that relates training time, dissemination latency, and rollout throughput, yielding a practical provisioning rule for sustaining learner utilization\. To mitigate dissemination bottlenecks and lower cost, ECHO\-2 employs peer\-assisted pipelined broadcast and cost\-aware activation of heterogeneous workers\. Experiments on GRPO post\-training of LLMs ranging from 4B to 32B parameters under real wide\-area bandwidth regimes show that ECHO\-2 significantly improves cost efficiency while preserving RL reward comparable to strong baselines\.

## Finite\-Sample Convergence in Networked Average Reward MARL: Decentralization Pitfalls and Entropy Remedies

**Authors:** Yizhou Zhang; Yashaswini Murthy; Laixi Shi; Adam Wierman

**ID:** 149372 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qYNPFUuBkL>) | [PDF](<https://openreview.net/pdf?id=qYNPFUuBkL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149372>)

We study the problem of average reward Multi\-Agent Reinforcement Learning \(MARL\) where agents interact within a network\. Each agent in the network conducts local updates with information within its $k$\-hop neighborhood and collaboratively maximizes the overall reward of the entire network\. We first provide impossibility results in achieving convergence to the global optimal joint policies in our setting\. These impossibility results highlight the challenges of decentralized learning with local information in multi\-agent systems, namely the issues of multiagency, where each agent independently optimizes its policy, and partial observability, where agents have limited visibility into the global state\. Given these challenges which indicate that decentralized policy optimization can generally be certiﬁed only up to stationarity, we provide finite\-sample convergence guarantees for a decentralized actor\-critic algorithm with linear function approximation that converges to an approximate stationary point with small gradient norm\. To overcome such impossibility results, we further show that adding fixed\-state entropy regularization reshapes the objective landscape which leads to even stronger global convergence guarantees for our proposed actor\-critic algorithm\.

## Training Generalizable Collaborative Agents via Strategic Risk Aversion

**Authors:** Chengrui Qu; Yizhou Zhang; Nicolas Lanzetti; Eric Mazumdar

**ID:** 151685 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YmGCdpjNNh>) | [PDF](<https://openreview.net/pdf?id=YmGCdpjNNh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151685>)

Many emerging agentic paradigms require agents to collaborate with one another \(or people\) to achieve shared goals\. However, existing approaches to learning policies for such collaborative problems produce brittle solutions that fail when paired with new partners\. We attribute these failures to a combination of free\-riding during training and a lack of strategic robustness\. To address these problems, we study the concept of strategic risk aversion and interpret it as a principled inductive bias for generalizable cooperation with unseen partners\. While strategically risk\-averse players are robust to deviations in their partner's behavior by design, we show that, in collaborative games,  they also \(1\) can have better equilibrium outcomes than those at classical game\-theoretic concepts like Nash, and \(2\) exhibit less or no free\-riding\. Inspired by these insights, we develop a multi\-agent reinforcement learning \(MARL\) algorithm that integrates strategic risk aversion into standard policy optimization methods\. Our empirical results across collaborative benchmarks \(including an LLM collaboration task\) validate our theory and demonstrate that our approach consistently achieves reliable collaboration with heterogeneous and previously unseen partners across collaborative tasks\.

## High\-Dimensional Robotic Reinforcement Learning with Developing Synergies

**Authors:** Junyi Shen; Yasuo Kuniyoshi; Kohei Nakajima

**ID:** 151314 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bPifcfpxsk>) | [PDF](<https://openreview.net/pdf?id=bPifcfpxsk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151314>)

High\-dimensional robotic reinforcement learning \(RL\) is often bottlenecked by inefficient exploration in large, redundant actuator spaces\. We introduce Devyn \(Developing synergies\), a lightweight framework that learns a structured low\-dimensional action parameterization directly during policy optimization\. Unlike methods that require precomputed synergies or structured exploration in the full action space, Devyn starts from a randomly initialized latent\-to\-action map and shapes it online through task interaction\. The policy acts strictly in a reduced latent space, while a learnable synergy matrix decodes latent actions into actuator commands\. To make this evolving decoder stable and useful for policy learning, Devyn combines slow decoder evolution with structural regularization, reducing latent\-action semantic drift while encouraging compact coordination patterns\. Across diverse continuous\-control benchmarks, including high\-dimensional humanoid and overactuated musculoskeletal systems, Devyn improves upon standard SAC and achieves competitive or better performance than recent methods designed for high\-dimensional robotic control\. Ablations show that the gains do not come from a generic latent\-action bottleneck alone, but rather from the slow, structured evolution of the synergy matrix\. Our results suggest that learning the action parameterization itself can be a simple and effective route to scaling RL for high\-dimensional robots\.

## STAPO: Stabilizing Reinforcement Learning for LLMs by Silencing Rare Spurious Tokens

**Authors:** Shiqi Liu; Zeyu He; Guojian Zhan; Letian Tao; Zhilong Zheng; Jiang Wu; yinuo Wang; Yang Guan; Kehua Sheng; Bo Zhang; Keqiang Li; Jingliang Duan; Shengbo Eben Li

**ID:** 148439 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xnL7HqJSHm>) | [PDF](<https://openreview.net/pdf?id=xnL7HqJSHm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148439>)

Reinforcement Learning \(RL\) has significantly improved large language model reasoning, but existing RL fine\-tuning methods rely heavily on heuristic techniques such as entropy regularization and reweighting to maintain stability\. In practice, they often suffer from late\-stage performance collapse, leading to degraded reasoning quality and unstable training\. We identify a key factor behind this instability: a small fraction of tokens, termed spurious tokens \(around 0\.01\\%\), which contribute little to the reasoning outcome but receive disproportionately amplified gradient updates due to inheriting the full sequence\-level reward\. We present a unified framework for evaluating token\-level optimization impacts across spurious risk, gradient norms, and entropy changes\. Building the analysis of token characteristics that severely disrupt optimization, we propose the Silencing Spurious Tokens \(S2T\) mechanism to efficiently suppress their gradient perturbations\. Incorporating this mechanism into a group\-based objective, we propose Spurious\-Token\-Aware Policy Optimization \(STAPO\), which promotes stable and effective large\-scale model refinement\. Across six mathematical benchmarks and three model scales, STAPO consistently demonstrates superior entropy stability and achieves average accuracy improvements over baselines including GRPO, 20\-Entropy, and JustRL under two widely\-adopted evaluation settings\.

## Your Language Model is Its Own Critic: Reinforcement Learning with Value Estimation from Actor’s Internal States

**Authors:** Yunho Choi; Jongwon Lim; woojin Ahn; Minjae Oh; Jeonghoon Shim; Yohan Jo

**ID:** 153139 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NbI2sR01d3>) | [PDF](<https://openreview.net/pdf?id=NbI2sR01d3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153139>)

Reinforcement learning with verifiable rewards \(RLVR\) for Large Reasoning Models hinges on baseline estimation for variance reduction, but existing approaches pay a heavy price: PPO requires a policy\-model scale critic, while GRPO needs multiple rollouts per prompt to keep its empirical group mean stable\. We introduce $\\textbf\{POISE\}$ \($\\underline\{P\}$olicy $\\underline\{O\}$ptimization with $\\underline\{I\}$nternal $\\underline\{S\}$tate Value $\\underline\{E\}$stimation\), which obtains a baseline at negligible cost by using the policy model's internal signals already computed during the policy forward pass\. A lightweight probe predicts the expected verifiable reward from the hidden states of the prompt and generated trajectory, as well as token\-entropy statistics, and is trained online alongside the policy\. To preserve gradient unbiasedness despite using trajectory\-conditioned features, we introduce a cross\-rollout construction that predicts each rollout's value from an independent rollout's internal states\. Because POISE estimates prompt value using only a single rollout, it enables higher prompt diversity for a fixed compute budget during training\. This reduces gradient variance for more stable learning and also eliminates the compute overhead of sampling costs for detecting zero\-advantage prompts\. On Qwen3\-4B and DeepSeek\-R1\-Distill\-Qwen\-1\.5B across math reasoning benchmarks, POISE matches DAPO while requiring less compute\. Moreover, its value estimator shows similar performance to a separate LLM\-scale value model and generalizes to various verifiable tasks\. By leveraging the model's own internal representations, POISE enables more stable and efficient policy optimization\.

## Grounding Agent Reasoning with Structured Process Supervision for Multi\-turn Reinforcement Learning

**Authors:** Renting Rui; Yulei Qin; Weiwen Liu; Yunjia Xi; Ke Li; Xing Sun; Weinan Zhang; Yong Yu

**ID:** 155516 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=519KXHiEy2>) | [PDF](<https://openreview.net/pdf?id=519KXHiEy2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155516>)

Long\-horizon LLM agents trained with outcome\-based RL exhibit a systematic failure mode: reasoning diverges from environmental observations at some step, and the error compounds across subsequent turns\. We find that 74\\% of failed trajectories contain reasoning–observation inconsistency, and once it appears, 62\\% of subsequent turns remain inconsistent\. Process rewards reduce but do not eliminate this: under free\-form reasoning, agents learn to avoid penalties without genuinely tracking task progress or anticipating action outcomes\. We propose ARC \(Anchored Reasoning with Commitment\), which requires the agent to make two explicit commitments at each step: a global progress statement that reconciles the agent's understanding of task state with accumulated observations, and a local outcome prediction that must be borne out by the next observation\. Together, these commitments anchor the agent's reasoning to the actual environment state across turns, and provide well\-defined targets for process supervision\. To prevent interference between sparse outcome and dense process signals, we decouple their advantages via independent group normalization\. On ALFWorld, WebShop, and WebArena, ARC improves over the strongest baseline by 6\.4, 3\.5, and 9\.6 points respectively\.

## Policy Gradient Algorithms in Average\-Reward Multichain MDPs

**Authors:** Jongmin Lee; Ernest Ryu

**ID:** 154239 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FCz7YgJAYl>) | [PDF](<https://openreview.net/pdf?id=FCz7YgJAYl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154239>)

While there is an extensive body of research analyzing policy gradient methods for discounted cumulative\-reward MDPs, prior work on policy gradient methods for average\-reward MDPs has been limited, with most existing results restricted to ergodic or unichain settings\. In this work, we first establish a policy gradient theorem for average\-reward multichain MDPs based on the invariance of the classification of recurrent and transient states\. Building on this foundation, we develop refined analyses and obtain a collection of convergence and sample\-complexity results that advance the understanding of this setting\. In particular, we show that the proposed $\\alpha$\-clipped policy mirror ascent algorithm attains an $\\epsilon$\-optimal policy with respect to positive policies\.

## FastDSAC: Unlocking the Potential of Maximum Entropy RL in High\-Dimensional Humanoid Control

**Authors:** JUN XUE; Junze Wang; Shanze Wang; Xinming Zhang; Yanjun Chen; Wei Zhang

**ID:** 151622 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZBAe6ak1l6>) | [PDF](<https://openreview.net/pdf?id=ZBAe6ak1l6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151622>)

Scaling Maximum Entropy Reinforcement Learning \(RL\) to high\-dimensional humanoid control remains a fundamental challenge, as the ''curse of dimensionality'' induces severe exploration inefficiency and training instability\. Consequently, highly optimized deterministic policy gradients currently dominate high\-throughput regimes\. We address this limitation with FastDSAC, a framework that effectively unlocks the potential of maximum entropy stochastic policies for complex continuous control\. We introduce Dimension\-wise Entropy Modulation \(DEM\) to dynamically redistribute the exploration budget, alongside a continuous distributional critic tailored to ensure accurate value estimation by mitigating both high\-dimensional overestimation and discrete quantization artifacts\. Extensive evaluations on HumanoidBench and a diverse set of continuous control tasks demonstrate that FastDSAC establishes state\-of\-the\-art performance for high\-dimensional stochastic policies on the evaluated benchmarks\. Our method is competitive with and often outperforms strong deterministic baselines, with gains of 180\\% and 350\\% on the challenging \*Basketball\* and \*Balance Hard\* tasks, respectively\.

## Fast Rates for Offline Contextual Bandits with Forward\-KL Regularization under Single\-Policy Concentrability

**Authors:** Qingyue Zhao; Kaixuan Ji; Heyang Zhao; Quanquan Gu

**ID:** 149055 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tDL6QlELOi>) | [PDF](<https://openreview.net/pdf?id=tDL6QlELOi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149055>)

\*Kullback\-Leibler\* \(KL\) regularization is ubiquitous in reinforcement learning \(RL\) algorithms in the form of \*reverse\* or \*forward\* KL\. Recent studies have demonstrated $\\epsilon^\{\-1\}$\-type fast rates for RL under reverse KL regularization, in contrast to the standard $\\epsilon^\{\-2\}$\-type sample complexity\. However, for forward\-KL\-regularized objectives, existing statistical analyses are either not applicable or resulting in $\\tilde\{O\}\(\\epsilon^\{\-2\}\)$ slow rates\. We take the first step towards addressing this problem via a streamlined analysis of forward\-KL\-regularized offline contextual bandits\. We give the first $\\tilde\{O\}\(\\epsilon^\{\-1\}\)$ upper bounds in tabular and general function approximation settings, both under notions of \*single\-policy concentrability\*\. In particular, our convex\-analytical pipeline unifies these settings by exploiting the pessimism principle in a novel way and completely bypasses the proof routines in previous works based on the mean\-value theorem, which might be of independent interest\. Moreover, we provide rate\-optimal lower bounds, manifesting the tightness of our upper bounds in terms of statistical rates\. Our lower bounds also demonstrate that the forward\-KL\-regularized sample complexity recovers the unregularized slow rate in the low\-regularization regime, similarly to the reverse\-KL regularization\.

## A Constrained Bi\-level Optimization Framework for Constrained Preference\-Based Reinforcement Learning

**Authors:** Yue Mao; Siyuan Xu; Shicheng Liu; Minghui Zhu

**ID:** 152347 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TjhQ07qEGv>) | [PDF](<https://openreview.net/pdf?id=TjhQ07qEGv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152347>)

_Abstract unavailable from the accessible public sources._

## Interactive Combinatorial Reinforcement Learning for Knowledge Graph Reasoning

**Authors:** Jun Nie; Yonggang Zhang; Tongliang Liu; Chengqi Zhang; Xinmei Tian; Bo Han

**ID:** 155091 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8Vo01NLzG6>) | [PDF](<https://openreview.net/pdf?id=8Vo01NLzG6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155091>)

_Abstract unavailable from the accessible public sources._

## Actor\-Accelerated Policy Dual Averaging for Reinforcement Learning in Continuous Action Spaces

**Authors:** Ji Gao; Caleb Ju; Guanghui Lan; Zhaohui Tong

**ID:** 155769 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=34NGCK5xuh>) | [PDF](<https://openreview.net/pdf?id=34NGCK5xuh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155769>)

_Abstract unavailable from the accessible public sources._

## Exploring Lifelong Adaptation: In\-Context Reinforcement Learning in Non\-Stationary Environments

**Authors:** Ye Wang; Kaiqian Cui; Xinrun Xu; Tao Zhang; Qin Jin

**ID:** 154772 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B4sdRfOm1V>) | [PDF](<https://openreview.net/pdf?id=B4sdRfOm1V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154772>)

_Abstract unavailable from the accessible public sources._

## Heterogeneous Agent Collaborative Reinforcement Learning

**Authors:** Zhixia Zhang; Zixuan Huang; Gonxun Li; Huaiyang Wang; Chengyi Yuan; Xin Xia; deqing wang; Fuzhen Zhuang; Shuai Ma; Ning Ding; Yaodong Yang; Yikun Ban

**ID:** 148552 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x2ON3LiaLg>) | [PDF](<https://openreview.net/pdf?id=x2ON3LiaLg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148552>)

_Abstract unavailable from the accessible public sources._

## FastDSAC: Unlocking the Potential of Maximum Entropy RL in High\-Dimensional Humanoid Control

**Authors:** JUN XUE; Junze Wang; Shanze Wang; Xinming Zhang; Yanjun Chen; Wei Zhang

**ID:** 151622\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151622

[Paper](<https://openreview.net/forum?id=ZBAe6ak1l6>) | [PDF](<https://openreview.net/pdf?id=ZBAe6ak1l6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151622>)

Scaling Maximum Entropy Reinforcement Learning \(RL\) to high\-dimensional humanoid control remains a fundamental challenge, as the ''curse of dimensionality'' induces severe exploration inefficiency and training instability\. Consequently, highly optimized deterministic policy gradients currently dominate high\-throughput regimes\. We address this limitation with FastDSAC, a framework that effectively unlocks the potential of maximum entropy stochastic policies for complex continuous control\. We introduce Dimension\-wise Entropy Modulation \(DEM\) to dynamically redistribute the exploration budget, alongside a continuous distributional critic tailored to ensure accurate value estimation by mitigating both high\-dimensional overestimation and discrete quantization artifacts\. Extensive evaluations on HumanoidBench and a diverse set of continuous control tasks demonstrate that FastDSAC establishes state\-of\-the\-art performance for high\-dimensional stochastic policies on the evaluated benchmarks\. Our method is competitive with and often outperforms strong deterministic baselines, with gains of 180\\% and 350\\% on the challenging \*Basketball\* and \*Balance Hard\* tasks, respectively\.

## Fast Rates for Offline Contextual Bandits with Forward\-KL Regularization under Single\-Policy Concentrability

**Authors:** Qingyue Zhao; Kaixuan Ji; Heyang Zhao; Quanquan Gu

**ID:** 149055\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149055

[Paper](<https://openreview.net/forum?id=tDL6QlELOi>) | [PDF](<https://openreview.net/pdf?id=tDL6QlELOi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149055>)

\*Kullback\-Leibler\* \(KL\) regularization is ubiquitous in reinforcement learning \(RL\) algorithms in the form of \*reverse\* or \*forward\* KL\. Recent studies have demonstrated $\\epsilon^\{\-1\}$\-type fast rates for RL under reverse KL regularization, in contrast to the standard $\\epsilon^\{\-2\}$\-type sample complexity\. However, for forward\-KL\-regularized objectives, existing statistical analyses are either not applicable or resulting in $\\tilde\{O\}\(\\epsilon^\{\-2\}\)$ slow rates\. We take the first step towards addressing this problem via a streamlined analysis of forward\-KL\-regularized offline contextual bandits\. We give the first $\\tilde\{O\}\(\\epsilon^\{\-1\}\)$ upper bounds in tabular and general function approximation settings, both under notions of \*single\-policy concentrability\*\. In particular, our convex\-analytical pipeline unifies these settings by exploiting the pessimism principle in a novel way and completely bypasses the proof routines in previous works based on the mean\-value theorem, which might be of independent interest\. Moreover, we provide rate\-optimal lower bounds, manifesting the tightness of our upper bounds in terms of statistical rates\. Our lower bounds also demonstrate that the forward\-KL\-regularized sample complexity recovers the unregularized slow rate in the low\-regularization regime, similarly to the reverse\-KL regularization\.

## Learn from the Gap: Differential\-Aware Advantage Pruning with Adaptive Rollout Sampling for GRPO

**Authors:** Jiahua Yang; Chuangchuang Wang; Zhiwei Yang; Xianpeng Zhang; Dongyu Chen; Xing Chen; Tianhuang Su; Haonan Lu; Quanlong Guan; Kai Tang

**ID:** 153498 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Kw9cIpaixY>) | [PDF](<https://openreview.net/pdf?id=Kw9cIpaixY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153498>)

_Abstract unavailable from the accessible public sources._

## Amortizing Generative Guidance for Model\-Based Reinforcement Learning

**Authors:** Xiangteng Zhang; Guojian Zhan; Likun Wang; Jingliang Duan; Yang Guan; Shengbo Eben Li

**ID:** 152395 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TPXx2a0pW6>) | [PDF](<https://openreview.net/pdf?id=TPXx2a0pW6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152395>)

_Abstract unavailable from the accessible public sources._

## Look\-ahead Variational Flow for Generative Online Reinforcement Learning

**Authors:** Tianyi Zhang; Likun Wang; Tianze Zhu; Guojian Zhan; yinuo Wang; Feihong Zhang; Yang Guan; Yao Lyu; Shengbo Eben Li

**ID:** 154685 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BkbldiALe2>) | [PDF](<https://openreview.net/pdf?id=BkbldiALe2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154685>)

_Abstract unavailable from the accessible public sources._

## Selected\-Tail Reliability in Verifier\-Guided Best\-of\-$N$ Inference

**Authors:** Teresa Zhang

**ID:** 155878 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2A1ozLhi9p>) | [PDF](<https://openreview.net/pdf?id=2A1ozLhi9p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155878>)

Today, verifier\-guided best\-of\-$N$ inference is a common way to spend test\-time compute in language modeling, code generation, and alignment: generate $N$ candidates, score them with a verifier or reward model, and deploy the highest\-scoring output\. This paper argues that the relevant reliability object is not average verifier accuracy but \\emph\{selected\-tail reliability\}, namely the behavior of the output chosen after optimizing over $N$ noisy public scores; we derive exact selected\-rank exposure laws for best\-of\-$N$ selection and finite\-verifier resource laws showing that selected public optimism scales at the $\\sqrt\{\\log N/m\}$ regime under $m$ units of verifier evidence\. We then separate public optimism from hidden utility harm, showing that public\-score inflation alone is not a harm claim and that harm or uncertifiability requires public\-hidden mismatch, tail dominance, count imbalance, or an unresolved selected\-tail regime\. Building on these results, we introduce Tail\-Certified Compute Caps, a conservative procedure that certifies candidate budgets or refuses certification using selected\-tail intervals, verifier\-resource penalties, mismatch envelopes, and feasibility gates\. In exact\-verifier/public\-hidden experiments, the theory predicts selected false\-positive exposure and supports resource\-aware cap decisions over an all\-attempted denominator, while non\-code candidate tables with pre\-existing public human annotations serve as secondary scoped $K\\ge16$ consistency checks under proxy/model\-prior/verifier\-style scores across Arena55K and Stanford SHP\. Overall, the paper provides a reliability framework for verifier\-guided inference\-time scaling: candidate budgets should be justified by evidence about the selected tail that is actually deployed, not only by average verifier validation\.

## When Does Non\-Uniform Replay Matter in Reinforcement Learning?

**Authors:** Michal Korniak; Mikołaj Czarnecki; Yarden As; Piotr Miłoś; Pieter Abbeel; Michal Nauman

**ID:** 153281 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MQaqQTPeHp>) | [PDF](<https://openreview.net/pdf?id=MQaqQTPeHp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153281>)

Modern off\-policy reinforcement learning algorithms often rely on simple uniform replay sampling and it remains unclear when and why non\-uniform replay improves over this strong baseline\. Across diverse RL settings, we show that the effectiveness of non\-uniform replay is governed by three factors: replay volume, the number of replayed transitions per environment step; expected recency, how recent sampled transitions are; and the entropy of the replay sampling distribution\. Our main contribution is  clarifying when non\-uniform replay is beneficial and providing practical guidance for replay design in modern off\-policy RL\. Namely, we find that non\-uniform replay is most beneficial when replay volume is low, and that high\-entropy sampling is important even at comparable expected recency\. Motivated by these findings, we adopt a simple Truncated Geometric replay that biases sampling toward recent experience while preserving high entropy and incurring negligible computational overhead\. Across large\-scale parallel simulation, single\-task, and multi\-task settings, including three modern algorithms evaluated on five RL benchmark suites, this replay sampling strategy improves sample efficiency in low\-volume regimes while remaining competitive when replay volume is high\.

## Rethinking Ratio\-Based Trust Regions for Policy Optimization in Multi\-Agent Reinforcement Learning

**Authors:** Chulabhaya Wijesundara; Andrea Baisero; Zhongheng Li; Gregory D Castanon; Alan S Carlin; Christopher Amato

**ID:** 148870 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uZ0Ls2oCg3>) | [PDF](<https://openreview.net/pdf?id=uZ0Ls2oCg3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148870>)

Centralized training with decentralized execution \(CTDE\) is a standard framework for cooperative multi\-agent policy\-gradient reinforcement learning, allowing agents to learn from joint information while acting from local observations\. Ratio\-based trust\-region methods such as Multi\-Agent Proximal Policy Optimization \(MAPPO\) and Multi\-Agent Simple Policy Optimization \(MASPO\) update decentralized actors using per\-agent probability ratios weighted by joint advantage estimates\. Teammate non\-stationarity increases the variance of these advantages, which in turn increases the variance in the local ratio updates\. This exposes two method\-specific failure modes: MAPPO's additive clipping removes gradients for outlier samples and weakens recovery from policy drift, while MASPO's soft quadratic penalty can allow probability collapse\. We introduce Multi\-Agent Ratio Symmetry \(MARS\), a novel policy optimization objective that replaces these additive ratio\-based trust\-region mechanisms with a multiplicatively symmetric geometric barrier\. MARS preserves corrective gradients while assigning unbounded cost as probability ratios approach zero\. Across 47 tasks spanning eight multi\-agent environments, including novel JAX benchmarks PaxMen and AeroJAX, MARS matches or exceeds MAPPO and MASPO in aggregate environment\-level performance\. Ablations show that these gains arise from the geometry of the symmetric barrier rather than from flexible trust\-region boundaries alone\.

## Meta\-Reinforcement Learning with Zero\-Shot Reinforcement Learning

**Authors:** Jake Grigsby; Siddhant Agarwal; Yu Lei; Leonidas Varveropoulos; Yuke Zhu

**ID:** 154250 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FAb595Jqbg>) | [PDF](<https://openreview.net/pdf?id=FAb595Jqbg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154250>)

Meta\-reinforcement learning \(meta\-RL\) agents adapt to novel tasks from test\-time experience, but require diverse training sets of environments and reward functions that are expensive to construct\. Behavior Foundation Models \(BFMs\) learn policies from reward\-free data that are capable of zero\-shot RL \(ZSRL\), adapting to new objectives at test time when given a large reward\-labeled dataset\. Recent work has shown that BFM task inference can be performed online, making BFMs and meta\-RL direct competitors for generalization in fixed environments\. We ask whether BFMs can be extended to adapt to novel reward functions in novel environments, and identify four key limitations: environment identification, online data collection, test\-time exploration\-exploitation, and mixed reward supervision\. We study these subproblems through toy domains, standard BFM benchmarks, and simulated humanoid locomotion, then propose a unified framework that addresses all four\. The resulting method, MetaBFM, is a hybrid RL agent spanning meta\-RL, ZSRL, and intrinsic exploration\. During training, MetaBFM combines supervised reward\-following with unsupervised reward\-free learning; at test time, it interpolates between exploration, exploitation, and ZSRL\-style reward inference\. We evaluate MetaBFM on two toy meta\-RL domains and at scale in MetaWorld, showing that hybrid meta\-RL/ZSRL agents can learn more general behavior from the same set of reward functions and may reduce the need for future meta\-RL domains to hand\-design diverse training sets\.

## Self\-Calibrated GUI Reward Model via Inverse Dynamic Modeling

**Authors:** Zeyi Sun; Shengyuan Ding; Xingpeng Xia; Jinsong Li; Xie Chen; Dahua Lin; Jiaqi Wang

**ID:** 153048 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OPejG5R0IO>) | [PDF](<https://openreview.net/pdf?id=OPejG5R0IO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153048>)

_Abstract unavailable from the accessible public sources._

## Reward\-Estimated Hypergradient for Bilevel Reinforcement Learning with Black\-Box Follower

**Authors:** Shigeki Kusaka; Mikoto Kudo; Takumi Tanabe; Akifumi Wachi; Youhei Akimoto

**ID:** 150355 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ijYiE70M5J>) | [PDF](<https://openreview.net/pdf?id=ijYiE70M5J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150355>)

_Abstract unavailable from the accessible public sources._

## SIRAS: Sibling\-Relative Advantage Shaping for Reinforcement Learning from Verifiable Rewards

**Authors:** Zairun Yang; Jun Xu; Lei Liang; Huajun Chen; Qiang Zhang

**ID:** 151147 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cgLXIEtoqC>) | [PDF](<https://openreview.net/pdf?id=cgLXIEtoqC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151147>)

_Abstract unavailable from the accessible public sources._

## Riemannian Admissibility Flow for Offline\-to\-Online Safe Reinforcement Learning

**Authors:** Yuan Chu; Xuewu Ji

**ID:** 155552 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4hjf2AG9Vo>) | [PDF](<https://openreview.net/pdf?id=4hjf2AG9Vo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155552>)

Offline\-to\-Online \(O2O\) reinforcement learning \(RL\) is essential for policy adaptation but frequently suffers from initialization collapse due to evaluation and improvement mismatches across the learning transition\.  In safety\-critical domains, safety\-constrained model\-free O2O RL without offline data retention remains significantly under\-explored\. Existing O2O fine\-tuning methods, typically relying on policy regularization or value recalibration within Euclidean spaces, lack the structural capacity to strictly sequester policies from hazardous regions\. To facilitate a geometric paradigm for safe policy fine\-tuning, we propose Riemannian Admissibility Flow \(RAF\), which lifts safety constraints into a geometric framework by reformulating policy optimization as probability transport on anisotropic Riemannian manifolds\.  By fusing safety and uncertainty into the metric tensor, RAF transforms extrinsic scalar penalties into intrinsic topological barriers with directional gating, enabling target\-free geodesic flow matching for hazard circumvention without offline data retention\. Evaluation on representative safe O2O benchmarks shows that RAF achieves competitive performance in constraint satisfaction and task execution while effectively mitigating initialization collapse\.

## GEAR: Bridging the Planner\-Actor Gap via Gradient\-Aligned Policy Extraction

**Authors:** Yao\-Hui Li; Xin Li; Hasnaa Bennis; Meiju Li; Boya Zhang; Yingfang Yuan; Wei Pang

**ID:** 152259 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UOmajXNPS7>) | [PDF](<https://openreview.net/pdf?id=UOmajXNPS7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152259>)

Hybrid model\-based reinforcement learning \(MBRL\) integrates lookahead planning with actor\-critic optimization for exceptional sample efficiency\. However, this decoupled architecture suffers from a critical planner\-actor mismatch\. Existing policy alignment methods face a structural dilemma: forward KL triggers mode\-covering objective conflicts, while reverse KL relies on brittle proxies that bottleneck expressivity\. To address this challenge, we propose \*\*G\*\*radient\-\*\*E\*\*mbedded \*\*A\*\*lignment \*\*R\*\*egularization \(\*\*GEAR\*\*\), a unified in\-sample extraction framework\. At its core, we derive a first\-order geometric alignment metric from the continuous\-time Hamilton\-Jacobi\-Bellman \(HJB\) equation to evaluate action evolution against the local value gradient\. By embedding this metric as an absolute modulation weight, GEAR eliminates spurious imitation and transforms the inherently diffuse forward KL into a focused, mode\-seeking objective\. Evaluations on the challenging HumanoidBench suite demonstrate GEAR achieves significantly higher sample efficiency and asymptotic performance than state\-of\-the\-art baselines\. The project code is available at https://anonymous\.4open\.science/r/GEAR\-5E80\.

## FalconPerception\-HD: High Density Perception via Reinforcement Learning

**Authors:** Sofian Chaybouti; YASSER ABDELAZIZ DAHOU DJILALI; Ngoc D Huynh; REDA ALAMI; Hilde Kuehne

**ID:** 150365 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=icSHR3O8rl>) | [PDF](<https://openreview.net/pdf?id=icSHR3O8rl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150365>)

Autoregressive perception models trained to localize visual entities under the open\-vocabulary setting are mostly trained using Supervised fine\-tuning \(SFT\) with maximum likelihood, yet it optimizes a proxy objective \(per\-token cross\-entropy\) that is fundamentally misaligned with perception metrics such as precision and recall\. In this paper, we explore post\-training reinforcement learning \(RL\), specifically GRPO, to directly align these models with their evaluation metrics\. Building up on the recently introduced Falcon Perception, we design an RL framework that addresses perception\-specific challenges: reward design for set\-structured outputs and multi\-head sampling control\. We discover multiple benefits from RL for perception: first, RL unlocks unprecedented performance in very dense scenes \(up to 500 objects per scene\) and to the best of our knowledge, no other system has such capabilities at this scale; furthermore it fixes common issues in autoregressive perception models like mask repetitions and removes almost entirely the need for NMS and coordinate deduplication, which improve both performance and efficiency and remove the need for hyperparameters tuning; overall, we notice improvements on all levels of difficulties in referring expression segmentation \(on PBench and SACO\-Gold\), and we find an elegant way to preserve the knowledge of whether an object exists or not \(as evaluated by MCC\) without training on negative samples\. We show that a simple reward penalizing false negatives and positives is enough\. We develop two hybrid self\-annotation pipelines, respectively tailored for difficult referring expressions and very dense scenes, and show their benefits on RL\-training\. Model weights and datasets will be made public\.

## RRL\-HOI: Reflective Reinforcement Learning for Open\-Vocabulary HOI Detection

**Authors:** Yongchao Xu; Jiawei Liu; Junfeng Wang; Yufei Zheng; Sen Tao; Tao Jiang; jiangbo Ai; Jin Zhang; Zheng\-Jun Zha

**ID:** 156124 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0ETD6EefF3>) | [PDF](<https://openreview.net/pdf?id=0ETD6EefF3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156124>)

Open\-Vocabulary Human\-Object Interaction \(HOI\) detection aims to localize interacting human\-object pairs while generalizing to novel interaction categories beyond the training set\. Although Multimodal Large Language Models \(MLLMs\) exhibit strong open\-vocabulary understanding, directly applying MLLMs to HOI detection remains challenging, as language\-prior hallucinations and coupled localization\-semantic errors can destabilize structured HOI predictions\. To address these issues, we propose RRL\-HOI, a novel Reflective Reinforcement Learning framework that trains MLLMs to follow a verify\-and\-revise self\-correction policy\. Specifically, RRL\-HOI first adapts MLLMs to produce box\-grounded HOI triplets, and then introduces an executable reflection mechanism that targets the two failure modes through structured edits over localization, human\-object pairing, and interaction semantics\. In this way, localization and pairing edits mitigate localization\-semantic coupling, while interaction\-semantic edits suppress visually unsupported language\-prior predictions\. To further improve this reflection mechanism, RRL\-HOI formulates reflection as a reinforcement learning objective trained with GRPO, where the reward jointly considers localization quality, pair\-association correctness, interaction correctness, and edit consistency\. Through reward\-driven policy learning, RRL\-HOI turns open\-vocabulary recognition from a single\-step generative prediction into an explicit verify\-and\-revise decision process, thereby bridging the gap between general multimodal understanding and precise interaction detection\. Extensive experiments on two standard open\-vocabulary HOI detection benchmarks demonstrate the effectiveness of our method\.

## Designing Reinforcement Learning for Diffusion Models: A Unified Path\-Space View

**Authors:** Yixian Xu; Yuanrui Zhang; Shengjie Luo; Kaiyuan Gao; Liwei Wang; Di He

**ID:** 155438 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5e4jcilj33>) | [PDF](<https://openreview.net/pdf?id=5e4jcilj33>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155438>)

_Abstract unavailable from the accessible public sources._

## AdaMAP: Learning Adaptive Multi\-Action Prediction with Grounded Dreaming Guidance

**Authors:** Muyao Li; Zihao Wang; XuJing Li; Xiangyang Li; Jiabo Ye; Zhiyong Wu; Yaodong Yang; Yujia Qin

**ID:** 155834 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2Wzu7RgcCE>) | [PDF](<https://openreview.net/pdf?id=2Wzu7RgcCE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155834>)

_Abstract unavailable from the accessible public sources._

## Generative Actor\-Critic with Soft Bridge Policies

**Authors:** Ke He; Le He; Shunpu Tang; Yafei Wang; Lisheng Fan

**ID:** 155388 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=62FfbuBmjc>) | [PDF](<https://openreview.net/pdf?id=62FfbuBmjc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155388>)

_Abstract unavailable from the accessible public sources._

## Hodge Laplacian Quasi\-Harmonic Flows for Option Discovery

**Authors:** Andreas Theophilou; Özgür Şimşek

**ID:** 153764 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ipo5Xh353j>) | [PDF](<https://openreview.net/pdf?id=Ipo5Xh353j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153764>)

Prior Laplacian\-based option\-discovery methods build options from 0\-form Laplacians defined on nodes, where the resulting eigenvectors induce routes toward isolated boundaries or extrema, thereby skewing visitation toward specific states\. In contrast, kernel eigenvectors of the 1\-form Hodge Laplacian represent interpretable, topology\-aware edge flows and naturally capture cyclic behaviour known as harmonic flows\. These kernel eigenvectors are particularly attractive because they define zero\-divergence edge flows, offering a natural solution for non\-isolated visitation to sources and sinks in regions in which they are active\. Despite this appeal, harmonic flows have not previously been explored as a basis for option discovery in reinforcement learning\. This is what we do here\. We first introduce harmonic\-flow skills and show that, on state graphs with tree\-like “dead\-end” appendages, purely harmonic flows can become nearly inactive in those regions, which can limit coverage\. To address this limitation, we propose quasi\-harmonic flow options: skill\-inducing edge flows that preserve harmonic cycles where harmonic activity is strong, while injecting drift into appendages using the lowest\-magnitude non\-harmonic eigenvector of the Hodge Laplacian, a low divergence solution, where harmonic activity is weak\. Our approach is eigenvector\-only, relying solely on spectral components of the Hodge Laplacian\. We compare quasi\-harmonic flow options against a harmonic\-flow options baseline and state\-of\-the\-art skill\-discovery methods from the literature, demonstrating empirical gains and analytical improvements on hitting\-time\-based metrics\.

## Breaking the Grid: Distance\-Guided Reinforcement Learning in Large Discrete Action Spaces

**Authors:** Heiko Hoppe; Fabian Akkerman; Wouter van Heeswijk; Maximilian Schiffer

**ID:** 151813 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XosdW9LFxs>) | [PDF](<https://openreview.net/pdf?id=XosdW9LFxs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151813>)

Reinforcement Learning \(RL\) is increasingly applied to large\-scale decision\-making problems like logistics, scheduling, and recommender systems, but existing algorithms struggle with the curse of dimensionality in such large discrete action spaces\. We propose Distance\-Guided Reinforcement Learning \(DGRL\), combining Sampled Dynamic Neighborhoods and Distance\-Based Updates to enable efficient RL in problems with up to $10^\{20\}$ actions\. Unlike prior methods, DGRL performs stochastic volumetric exploration and transforms policy optimization into a stable regression task, decoupling gradient variance from action space cardinality\. On structured tasks, DGRL provably guarantees local value improvement\.DGRL naturally generalizes to hybrid continuous\-discrete action spaces\. We demonstrate performance improvements of up to 66% against state\-of\-the\-art benchmarks across regularly and irregularly structured environments, while simultaneously improving convergence speed and computational complexity\.

## Overcoming Catastrophic Forgetting in Visual Continual Learning with Reinforcement Fine\-Tuning

**Authors:** Meng Lou; Hanzhong Guo; Linwei Chen; Yizhou Yu

**ID:** 151854 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XQ0Bir2SLj>) | [PDF](<https://openreview.net/pdf?id=XQ0Bir2SLj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151854>)

Reinforcement Fine\-Tuning \(RFT\) with verifiable rewards has emerged as a powerful learning paradigm for eliciting reasoning capabilities in Multi\-modal Large Language Models \(MLLMs\)\.  Recent studies also suggest that RFT \(e\.g\., GRPO\) is inherently more resilient to catastrophic forgetting than Supervised Fine\-Tuning \(SFT\)\.  However, whether RFT can effectively overcome forgetting in challenging visual continual learning settings, such as class\-incremental learning \(CIL\) and domain\-incremental learning \(DIL\), remains an open problem\. Through a pilot study on rehearsal\-free CIL, we confirm that while RFT consistently outperforms SFT, it still suffers from non\-negligible forgetting\.  We empirically trace this bottleneck to Trajectory\-level Drift Agnosticism: among candidate rollouts achieving identical task rewards, the KL divergence from the preceding\-task policy varies substantially, which strongly correlates with catastrophic forgetting across sequential tasks\. Motivated by this insight, we propose Retention\-aware Policy Optimization \(RaPO\), a simple yet effective RFT framework that explicitly mitigates forgetting through trajectory\-level reward shaping\.  Specifically, RaPO comprises two core components:  \(1\) Retention Reward that converts trajectory\-level distribution drift into a continuous reward signal, preferentially reinforcing knowledge\-preserving rollouts within each group;  \(2\) Cross\-Task Advantage Normalization \(CTAN\), which maintains a persistent exponential moving average of reward statistics across task boundaries to stabilize the optimization progress during continual learning\.  Leveraging the free\-form textual generalization of MLLMs, we comprehensively evaluate RaPO across five visual continual learning settings, spanning class\- and domain\-incremental image classification, class\-incremental video classification, and class\- and domain\-incremental object detection\.  Extensive experiments demonstrate that RaPO achieves leading performance, substantially reducing catastrophic forgetting while preserving strong plasticity\.  To the best of our knowledge, this work represents the first systematic exploration of RFT in visual continual learning, offering insights that we hope will inspire future research\.

## From Expert Knowledge to Optimization Modeling: Prototype\-Based Data Synthesis and Logical Reinforcement Learning

**Authors:** Bo Hu; Qingcan Kang; Qian Liu; Mingxuan Yuan

**ID:** 153007 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OfaHY0TIwp>) | [PDF](<https://openreview.net/pdf?id=OfaHY0TIwp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153007>)

Existing approaches to optimization modeling using large language models \(LLMs\) treat tasks through from\-scratch construction, generating variables, objectives, and constraints without leveraging reusable structural knowledge\. However, in real\-world scenarios, expert modelers typically begin by identifying the canonical type or core structure of a problem, followed by iterative refinements based on specific task requirements\. To incorporate this expert incremental logic, we propose a novel two\-stage framework\. In the first stage, we conduct Logic\-Anchored Data Synthesis starting from 17 canonical prototypes, preserving critical bottleneck constraints and generating synthetic problem–formulation pairs\. These pairs, together with the OR\-Instruct dataset, are used for supervised fine\-tuning \(SFT\) to initialize a policy\. Separately, for each generated problem, we produce multiple modeling trajectories that follow a prototype\-grounded order with variables preceding expressions\. These trajectories are ranked according to criteria of accuracy and efficiency, and subsequently used to train a Logical Reward Model \(LRM\)\. In the second stage, we introduce Logic\-Test\-Time Group Relative Policy Optimization \(Logic\-TGRPO\), which leverages the LRM during test\-time reinforcement learning to reward accurate prototype identification and disciplined structural adherence while penalizing illogical patterns\. Evaluated across seven benchmarks, our 8B parameter model achieves an average accuracy of 79\.9%, outperforming comparably scaled baselines and competing effectively with heavyweight multi\-agent systems with far fewer parameters\. Strong performance on out\-of\-distribution tasks confirms that the model exhibits genuine incremental reasoning rather than mere memorization\. Ablation studies further validate that both stages in our framework are essential\.

## Focal Reward: Balanced Reinforcement Learning under Rubric\-Based Rewards

**Authors:** Yu Huang; Zihua Zhao; Zhaoxin Huan; Wanli Gu; Feng Hong; Xinmu Ge; Lin Yuan; Qiang Hu; Weichang Wu; Xiaolu Zhang; Jun Zhou; Jiangchao Yao

**ID:** 150481 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hkAx0LeHmi>) | [PDF](<https://openreview.net/pdf?id=hkAx0LeHmi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150481>)

The open\-ended generation in LLMs usually requires multi\-dimensional rubrics to adequately assess quality and guide the improvement of reinforcement learning\. However, a critical dilemma inherent in this training paradigm is the imbalanced reward polarization along different rubric dimensions\. Under this bottleneck, even if LLMs achieve relatively high rewards after training, they may still exhibit severe deficiencies in certain dimensions, leading to a direct deterioration in user experience\. To address this problem, we propose \\emph\{Focal Reward\}, a novel objective to automatically balance the training of reinforcement learning under rubric\-based rewards\. Specifically, we first leverage an inverse reward projection mechanism to estimate the saturation degree of each criterion in the rubric, which forms the basis to calibrate the reward direction\. Then, the final objective is designed with an automatically reweighting coefficient for each criterion to achieve the fine\-grained balancing\. Extensive experiments across three model scales and six benchmarks demonstrate that our \\emph\{Focal Reward\} method outperforms the strongest static aggregation baseline in all 18 model\-\-benchmark comparisons\. Rollout, mechanism, and ablation analyses further show that these gains arise from online, saturation\-aware reallocation toward rubrics that still have room for improvement\.

## Trust Region Q Adjoint Matching

**Authors:** Yonghoon Dong; Kyungmin Lee; Changyeon Kim; Jaehyuk Kim; Jinwoo Shin

**ID:** 149711 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o0QcqHlW1x>) | [PDF](<https://openreview.net/pdf?id=o0QcqHlW1x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149711>)

_Abstract unavailable from the accessible public sources._

## Focusing Influence Mechanism for Multi\-Agent Reinforcement Learning

**Authors:** Yisak Park; Sunwoo Lee; Seungyul Han

**ID:** 155238 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7CsZY8dhlN>) | [PDF](<https://openreview.net/pdf?id=7CsZY8dhlN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155238>)

_Abstract unavailable from the accessible public sources._

## Moment\-Constrained Latent Steering for Flow Policy

**Authors:** Wenxin Zhao; Letian Tao; Zhilong Zheng; Guojian Zhan; Yujie Yang; Likun Wang; yinuo Wang; Feihong Zhang; Tianze Zhu; Jingliang Duan; Yang Guan; Shengbo Eben Li

**ID:** 154706 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BdvmNiLvIV>) | [PDF](<https://openreview.net/pdf?id=BdvmNiLvIV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154706>)

Fine\-tuning continuous\-time generative models, such as flow models, via reinforcement learning \(RL\) is a promising approach for complex continuous control, but directly updating the network weights often leads to catastrophic forgetting of the pre\-trained prior\. Latent steering method mitigates this by freezing the generative backbone and optimizing a latent policy to generate the initial noise\. However, existing methods typically enforce hard support boundaries to prevent out\-of\-distribution \(OOD\) shifts in the latent space, inducing a fundamental trade\-off between prior preservation and policy expressiveness\. To resolve this dilemma, we propose Moment Constraint Parameterization, which regulates the latent distribution through a statistical budget\. By decoupling this budget into inter\-statistic constraints and intra\-statistic flexibility, our method acts as a probabilistic safeguard against OOD shifts while providing the degrees of freedom to retain policy expressiveness\. Furthermore, while moment constraints define a flexible search space, effectively optimizing the latent policy within it requires accurate gradient signals\. To address the optimization lag and bias caused by proxy latent critics in existing methods, we introduce Adjoint Q\-Gradient Propagation\. By exploiting the white\-box structure of flow models, this technique backpropagates exact analytical gradients from the action\-space critic directly to the initial noise\. Integrating these two mechanisms, we present Moment Constraint Flow Steering \(MCFS\)\. Empirical results on D4RL and OGBench show that MCFS consistently delivers stronger online adaptation performance than prior latent steering and flow\-policy baselines, with particularly pronounced gains on challenging long\-horizon compositional manipulation tasks\.

## Self\-Adjoint Flow Policy Optimization

**Authors:** Guojian Zhan; Feihong Zhang; Likun Wang; Xiangteng Zhang; Letian Tao; Tianyi Zhang; Wenxin Zhao; yinuo Wang; Tianze Zhu; Jingliang Duan; Yang Guan; Shengbo Eben Li

**ID:** 152160 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V4bnZAJAx7>) | [PDF](<https://openreview.net/pdf?id=V4bnZAJAx7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152160>)

Generative policies offer a promising alternative to Gaussian policies in reinforcement learning \(RL\) due to their ability to represent expressive and multimodal action distributions\. However, integrating such policies into likelihood\-based policy optimization remains challenging, since accurate and differential action likelihoods are intractable for standard generative policies\. In this paper, we propose \\emph\{Self\-Adjoint Flow Policy Optimization\} \(\\textsc\{SAFlow\}\), a likelihood\-tractable generative policy with self\-adjoint structure\.  \\textsc\{SAFlow\} parameterizes the policy as an invertible flow in a doubled action space and uses a Verlet\-style self\-adjoint composition for generation\. This structure makes the inverse map obtainable by stepsize reversal, aligning forward sampling and backward likelihood evaluation under the same time\-symmetric numerical rule\. It also provides a second\-order approximation accuracy to the learned continuous flow, improving the numerical consistency of likelihood and policy\-ratio computation\. We instantiate \\textsc\{SAFlow\} within an on\-policy optimization framework and evaluate it on eight IsaacLab continuous\-control tasks\. \\textsc\{SAFlow\} consistently outperforms Gaussian\-policy baselines and recent generative\-policy methods, highlighting the value of self\-adjoint numerical structure for likelihood\-based generative policy optimization\.

## Truncate Bad, Upweight Good: BoN\-Style Distillation via Rank\-Based Classification

**Authors:** Yarin Bar; Yaniv Romano

**ID:** 152325 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TunY4IfXnt>) | [PDF](<https://openreview.net/pdf?id=TunY4IfXnt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152325>)

Inference\-time selection methods, such as Best\-of\-N, improve generation by sampling a pool of candidates and selecting the top completion according to a reward model\. Distillation seeks to amortize this procedure into a single policy by replacing raw rewards with in\-pool ranks and learning a policy that upweights higher\-ranked completions\. However, existing rank\-based policies typically use smooth full\-support reweighting, so low\-ranked completions receive less mass but remain in the target support\. Although a sharper reweighting reduces lower\-tail mass, it also increases reliance on brittle ranking at the top made by a single reward model\. We propose \\textbf\{TUP\}: a \\textbf\{T\}runcate\-bad, \\textbf\{U\}pweight\-good \\textbf\{P\}olicy that removes low\-ranked completions from the support and reweights only the retained upper tail with a tunable sharpness\. TUP admits a closed\-form, prompt\-independent normalization and can be trained fully offline via binary cross\-entropy, using shifted\-truncated win\-rates as soft labels and distilled\-to\-reference log\-likelihood ratios as logits\.  Theoretically, under certain assumptions, we show that for any unknown oracle reward, the best monotone rank\-reweighting can be matched by a lower\-tail truncation rule, providing formal support for removing the lower tail rather than merely downweighting it\.  Empirically, we show that TUP is competitive with strong offline alignment baselines\.

## What Probing Reveals about Autonomous Driving: Better Predictions Lead to Better Planning

**Authors:** Hyeonchang Jeon; Kyungbeom Kim; Eugene Vinitsky; KyungJoong Kim

**ID:** 153263 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MYtWiWcp1j>) | [PDF](<https://openreview.net/pdf?id=MYtWiWcp1j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153263>)

Large\-scale datasets and fast simulators have enabled improvements in driving policies that appear safe and robust, yet strong performance in nominal scenarios can still mask flawed reasoning and unsafe heuristics\. Moreover, existing closed\-loop simulations often reveal only the resulting behavior, making it difficult to determine whether driving policies truly predict the motion of surrounding vehicles or how the ego vehicle generates future plans, or merely rely on brittle heuristics that happen to succeed in nominal scenarios\. To better understand the limits and weaknesses of driving policies, we focus on probing for forms of $prediction$, i\.e\., where surrounding vehicles will move next, and $planning$, i\.e\., understanding how to generate safe trajectories\. We focus on these two capabilities because they reflect behaviors expected of effective driving policies, and use their presence or absence to assess policy quality across data\-driven behavior cloning and simulation\-driven reinforcement learning policies\. To evaluate the presence of these capabilities, we investigate them as a function of scale, asking whether the closed\-loop gains from larger datasets and longer simulation training reflect stronger prediction and planning or merely better behavioral heuristics\. We use linear probing and targeted perturbations in both imitation learning and reinforcement learning models to track when these internal signals emerge, plateau, or fail\. Despite good closed\-loop performance, prediction signals are often mistimed or even degraded during simulated near\-collision events\. Finally, we demonstrate that these internal predictive capabilities go beyond correlation and that correcting mistaken predictions causally steers the planner toward safer, more appropriate trajectories\.

## Beyond One\-Size\-Fits\-All: Diagnosis\-Driven Online Reinforcement Learning with Offline Priors

**Authors:** Guozheng Ma; Lu Li; Zilin Wang; Pierre\-Luc Bacon; Dacheng Tao

**ID:** 140053 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XZmIeAgd6e>) | [PDF](<https://openreview.net/pdf?id=XZmIeAgd6e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140053>)

Online reinforcement learning \(RL\) agents increasingly depend on knowledge acquired offline to achieve practical efficiency\. Originally studied in offline\-to\-online RL, this paradigm now spans foundation model post\-training and embodied intelligence, with prior types expanding from offline datasets and pre\-trained policies to increasingly diverse knowledge sources such as multimodal foundation models and generative world models\. Offline priors have become central to how deep RL is developed and deployed\. However, this reliance introduces a challenge that the prevailing benchmark\-driven paradigm cannot resolve: because prior validity varies across deployments and shifts during training, no single approach to managing it is universally optimal, and benchmark rankings offer limited guidance for real\-world deployments\. Rather than pursuing universal solutions, we argue that the field should shift to diagnosis\-driven tension management, in which deployment\-specific evidence guides how the learner relates to its priors throughout training, enabling both flexible and adaptive deployment\. We support this position with a framework characterizing how priors reshape online optimization through three functional roles, controlled experiments demonstrating help\-or\-hurt reversals, cross\-domain evidence from foundation model post\-training to embodied intelligence, and engagement with five substantive counterarguments\.

## Towards Optimism\-Pessimism Trade\-off in Model\-based Offline\-to\-Online Reinforcement Learning

**Authors:** Guochen Zhou; Yijun Yang; Qiqi Duan; Qing Su; Weiming Ou; Li Shen; Shihao Ji; Yuhui Shi; Zhisong Zhang

**ID:** 154067 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GPyvq8xYFz>) | [PDF](<https://openreview.net/pdf?id=GPyvq8xYFz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154067>)

Model\-based offline\-to\-online reinforcement learning \(RL\) enables sample\-efficient adaptation by leveraging offline pre\-training for online fine\-tuning\. However, the distribution shifts between offline and online stages often hinder fine\-tuning performance\. Many existing methods approach this problem by adjusting the optimism\-pessimism trade\-off via a single\-objective formulation, requiring costly online bi\-level optimization\. We identify this trade\-off during offline training as a key challenge: optimistic policies generalize better to novel tasks by exploring out\-of\-distribution states and actions, while pessimistic policies remain constrained to the offline data distribution and excel on similar tasks\. To address this challenge, we propose a bi\-objective formulation that captures this trade\-off, yielding a Pareto policy pool during offline training\. These policies enable flexible selection for various online tasks\. To generate the pool, we introduce Multi\-Objective Soft Actor\-critIC \(MOSAIC\), which solves bi\-objective problems and constructs diverse Pareto policies\. After offline training, a contextual bandit algorithm hierarchically selects the most suitable policy for fine\-tuning at each online interaction step\. Empirically, our pipeline, \*\*Hi\*\*erarchical \*\*P\*\*areto\*\*P\*\*olicy \*\*P\*\*ool \(\*\*HiP3\*\*\), achieves state\-of\-the\-art performance on a suite of continuous\-control offline\-to\-online benchmarks, particularly under shifted online tasks\. Comprehensive ablations further clarify the roles of the policy pool and the online selection mechanism, as well as the robustness of the overall framework\.

## ECHO: Terminal Agents Learn World Models for Free

**Authors:** Vaishnavi Shrivastava; Ahmed Awadallah; Dimitris Papailiopoulos

**ID:** 154932 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9rkAbf5ICO>) | [PDF](<https://openreview.net/pdf?id=9rkAbf5ICO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154932>)

CLI agents are the closest thing language models have to an embodied setting: the model emits commands, the terminal executes them, and the returned stream\-\-\-stdout, errors, file contents\-\-\-records the consequences of its actions\. We argue that this stream is a supervision signal, but standard agent RL largely discards it: GRPO\-style training updates action tokens while ignoring environment responses, even though rollouts already contain them\. We introduce ECHO \(Environment Cross\-entropy Hybrid Objective\), an auxiliary loss that trains the policy to predict observation tokens alongside the policy gradient\. ECHO reuses the same forward pass, requires no additional rollouts, and turns terminal feedback into a dense signal that remains informative even on failed trajectories\.  This objective shapes the policy toward a world model of terminal dynamics, plausibly improving its priors over which actions are likely to succeed\. On TerminalBench 2, ECHO nearly doubles pass@1: Qwen3\-8B improves from 2\.70% to 5\.17%, and Qwen3\-14B from 5\.17% to 10\.79%\. From base Qwen3\-8B, ECHO\+GRPO matches expert\-SFT\-then\-GRPO on held\-out terminal tasks without the expert demonstrations required for SFT, and closes roughly half this gap on TerminalBench 2\. Without verifier rewards, ECHO can lead to self\-improvement through exploration alone, suggesting environment observations are not merely context for actions but supervision for the policy itself\.

## From Weak Data to Strong Policy: Q\-Targets Enable Provable In\-Context Reinforcement Learning

**Authors:** yichen lin; Xuyuan Xiong; xue wang; Xiangfu Meng; Mike Wei; Tao Yao

**ID:** 152260 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UNtPiyXC2w>) | [PDF](<https://openreview.net/pdf?id=UNtPiyXC2w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152260>)

Existing in\-context reinforcement learning methods mainly pretrain Transformers with supervised behavior\-prediction objectives\. While such objectives support task inference from context, they tie the learned policy to the quality of offline actions and can fail when trajectories are weak or suboptimal\. We propose Q\-Target Pretrained Transformers \(QTPT\), which preserves context\-conditioned inference but replaces behavior cloning with a Bellman\-style Q\-target objective\. QTPT learns to estimate action values from contextual rewards and transitions, rather than simply imitating the behavior policy\. We analyze QTPT in stochastic linear bandits and finite\-horizon MDPs, deriving suboptimality bounds that separate offline\-data effects from Transformer approximation error\. Empirically, QTPT is most beneficial under weak offline data across controlled RL benchmarks, and controlled ablations show that context conditioning is essential while Bellman/TD targets provide additional gains\. We further include D4RL experiments as higher\-dimensional stress tests under matched Transformer baselines\.

## Learning to Inject: Automated Prompt Injection via Reinforcement Learning

**Authors:** Xin Chen, Cynthia; Jie Zhang; Florian Tramer

**ID:** 152341 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TmeVCourtc>) | [PDF](<https://openreview.net/pdf?id=TmeVCourtc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152341>)

Prompt injection is a critical vulnerability in LLM agents, yet the strongest methods still rely on human red\-teamers and hand\-crafted prompts\. Adapting automated jailbreak optimizers does not close this gap: jailbreaks shape models toward generic compliance, while prompt injection requires emitting specific tool calls with correct parameters\. The success signal is binary, and randomly sampled suffixes almost never trigger it—so standard optimizers have no gradient to follow\. We present AutoInject, a black\-box reinforcement learning \(RL\) framework that learns adversarial suffixes for prompt injection\. A learned comparison\-based reward scores each candidate against the best suffix seen so far, turning the binary signal into a dense reward suitable for RL optimization\. The framework supports both online query\-based attacks and offline\-trained transferable suffixes that need no utility access at deployment, and incorporates a utility objective when task\-completion feedback is available\. On AgentDojo, AutoInject outperforms template attacks, GCG, TAP, and adaptive attack across production models, with statistically significant improvements under McNemar's test with $p&lt;0\.05$\. Suffixes learned by AutoInject also break Meta\-SecAlign\-70B, a model fine\-tuned specifically to resist prompt injection, where template attacks fail outright\. The results establish an automated baseline for prompt injection and expose a gap between preference\-based defenses and adaptive optimization\-based attackers\.

## Leveraging Error Diversity in Group Rollouts for Reinforcement Learning

**Authors:** Wenpu Liu; Yuqi Xu; Weichu Xie; Yongfu Zhu; Shuai Dong; Ziyue Wang; Wenqi Shao; Xiaoying Zhang; Tong Yang; Nan Duan; Jiaqi Wang

**ID:** 154049 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GbhCgaAr80>) | [PDF](<https://openreview.net/pdf?id=GbhCgaAr80>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154049>)

Reinforcement Learning from Verifiable Rewards \(RLVR\) typically samples multiple responses per prompt and assigns binary rewards based on individual correctness, yet the collective structure of the group output, specifically, the distribution of errors is largely discarded\. We identify this as a missed opportunity: empirical analysis reveals that error diversity within a group is a strong predictor of training success, with problems eliciting diverse wrong answers benefiting substantially more from RLVR than those producing homogeneous failures\. Motivated by this observation, we propose $\\textbf\{Error Diversity Advantage Shaping \(EDAS\)\}$, a lightweight, algorithm\-agnostic technique that modulates the advantage signal for incorrect rollouts based on intra\-group error diversity\. EDAS amplifies penalties for dominant, repeated errors and attenuates penalties for rare, exploratory ones, thereby encouraging the model to maintain diverse reasoning paths and discouraging error perseveration\. Crucially, EDAS operates as a simple post\-hoc adjustment that can be seamlessly integrated into any RLVR algorithm\. We validate EDAS on top of several mainstream RLVR methods across a series of models and seven challenging math benchmarks, demonstrating consistent improvements\. Notably, EDAS yields an average improvement of $\\textbf\{6\.29\}$ points over DAPO on Qwen3\-8B across seven benchmarks, confirming that exploiting the latent information in group rollouts is a broadly effective strategy for strengthening RLVR\.

## CAST: Certifiable Aggregation of Smoothed Teachers for Robust Policy Adaptation

**Authors:** Zhongrui Zhao; Yanan Cai; Zhigang Lu; Longkun Guo; Ickjai Lee; Shuchao Pang; Minhui Xue

**ID:** 151249 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bmqxbwQYk6>) | [PDF](<https://openreview.net/pdf?id=bmqxbwQYk6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151249>)

Transfer learning \(TL\)\-based policy adaptation in deep reinforcement learning \(DRL\) usually relies on target\-side data information for retraining when facing new tasks\. However, two important issues remain underexplored in practical scenarios: existing DRL transfer learning methods usually lack theoretical guarantees against adversarial attacks, and target\-side data information may be unavailable for retraining\. In this paper, we propose Certifiable Aggregation of Smoothed Teachers \(CAST\), which adapts source policies by aggregating multiple certified smoothed teachers without any form of retraining, and further certifies the robustness of the adapted policy at both the action level and the cumulative reward level\. CAST certification faces three key challenges: \(i\) value\-function transfer in DRL cannot preserve certified robustness without robust retraining; \(ii\) reward changes break the direct reusability of source teachers' action\-level certificates; and \(iii\) existing certified robustness transfer results provide limited guidance for certifying the student's cumulative reward\. These challenges prevent us from directly using existing TL techniques in DRL\. To address them, CAST constructs robustness signals from source certificates, incorporates them into policy aggregation to obtain action\-level certificates, and bridges the adapted policy's action\-level certificates to its target\-task cumulative\-reward certificate\. Experiments on five multi\-objective DRL benchmarks show that CAST exceeds the best source teacher in 17 out of 40 attack configurations and largely remains within the performance range of the source teachers\. When testing whether smoothing benefits can be transferred, CAST improves in 39 out of 40 configurations, with a maximum relative gain of 183\.9\\%\.

## A Constrained Bi\-level Optimization Framework for Constrained Preference\-Based Reinforcement Learning

**Authors:** Yue Mao; Siyuan Xu; Shicheng Liu; Minghui Zhu

**ID:** 152347\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152347

[Paper](<https://openreview.net/forum?id=TjhQ07qEGv>) | [PDF](<https://openreview.net/pdf?id=TjhQ07qEGv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152347>)

_Abstract unavailable from the accessible public sources._

## Interactive Combinatorial Reinforcement Learning for Knowledge Graph Reasoning

**Authors:** Jun Nie; Yonggang Zhang; Tongliang Liu; Chengqi Zhang; Xinmei Tian; Bo Han

**ID:** 155091\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155091

[Paper](<https://openreview.net/forum?id=8Vo01NLzG6>) | [PDF](<https://openreview.net/pdf?id=8Vo01NLzG6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155091>)

_Abstract unavailable from the accessible public sources._

## Actor\-Accelerated Policy Dual Averaging for Reinforcement Learning in Continuous Action Spaces

**Authors:** Ji Gao; Caleb Ju; Guanghui Lan; Zhaohui Tong

**ID:** 155769\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155769

[Paper](<https://openreview.net/forum?id=34NGCK5xuh>) | [PDF](<https://openreview.net/pdf?id=34NGCK5xuh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155769>)

_Abstract unavailable from the accessible public sources._

## Unleashing the Power of Intrinsic\-Entropy\-Driven Exploration for Off\-Policy Generative RL

**Authors:** Feihong Zhang; Guojian Zhan; yinuo Wang; Letian Tao; Likun Wang; Shiqi Liu; Yao Lyu; Shengbo Eben Li

**ID:** 150470 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hnh5y3DwoB>) | [PDF](<https://openreview.net/pdf?id=hnh5y3DwoB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150470>)

Generative models, such as diffusion and flow\-based models, have emerged as powerful policy approximators in deep reinforcement learning \(RL\) due to their ability to represent multi\-modal action distributions\. However, their potential for maximum entropy RL remains largely untapped, as most existing methods treat generative processes as black\-box samplers or rely on heuristic noise\. In this paper, we propose GENIEO, a novel off\-policy generative RL framework that leverages the exact intrinsic entropy of an augmented dummy\-action policy to drive principled exploration\. By designing a structurally invertible affine dual\-variable flow, we bypass the numerical approximations of standard ODE solvers\. This innovation allows us to rigorously apply the change\-of\-variables formula to derive a tractable and exact formulation for the augmented dummy\-action policy entropy, enabling its direct integration into the off\-policy learning objective\. Experimental evaluations across 14 challenging tasks from the DMControl and HumanoidBench suites demonstrate that GENIEO achieves state\-of\-the\-art \(SOTA\) performance\. By effectively discovering optimal strategies in complex, high\-dimensional environments, our approach bridges the gap between expressive generative modeling and maximum entropy RL\.

## Non\-Asymptotic Best Policy Identification Guarantees in Online Reinforcement Learning

**Authors:** Joseph Lazzaro; Alessio Russo; Aldo Pacchiano

**ID:** 155132 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8AVpizcVK2>) | [PDF](<https://openreview.net/pdf?id=8AVpizcVK2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155132>)

In this work we study the Best Policy Identification \(BPI\) problem in online, tabular Reinforcement Learning\. This is an active sequential hypothesis testing problem in which the learner's objective is to identify an optimal policy in a Markov Decision Process \(MDP\) with high confidence, while minimizing the expected sample complexity to do so\. We consider an online setting with deterministic rewards, where the agent must strategically navigate through the MDP in order to effectively explore\. Previous works in the literature have provided asymptotically optimal methods for BPI, such as the Navigate and Stop \(NaS\) algorithm and its variants, however existing analysis remains asymptotic\. In this work, we fill that gap by providing the first non\-asymptotic sample complexity guarantees for NaS, showing that its sample complexity depends not only on the characteristic time, but also on the connectivity of the underlying MDP, the curvature of the optimal characteristic time, and other instance\-dependent quantities\. We identify these additional attributes and make explicit their contributions to the overall sample complexity\.

## HiFloat4 Format for End\-To\-End Reinforcement Learning Post\-Training of Large Language Models

**Authors:** Hei Yi Mak; Shadan Golestan; Hoang Le; Mehran Taghian Jazi; Yunke Peng; Yaoyuan Wang; Yao Wang; JUNSONG WANG; Tianchi Hu; Fengchen He; Guipeng Hu; Tanzila Rahman; Anandharaju D Raju

**ID:** 154752 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BDwmB9cg99>) | [PDF](<https://openreview.net/pdf?id=BDwmB9cg99>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154752>)

We present, to our knowledge, the first end\-to\-end FP4 RL post\-training, in which both the rollout and training policies, including their forward and backward passes, operate at 4\-bit precision\. A systematic study reveals that the dominant source of degradation in FP4 RL is not training\-side quantization error but rollout activation quantization: outliers stretch the dynamic range so far that a large number of activation values underflow to zero under FP4\. Counterintuitively, restoring the training policy to higher precision while keeping the rollout in FP4 makes accuracy worse than full FP4 baseline, exposing rollout–training mismatch as the principal failure mode and ruling out standard pretraining\-style fixes\. We address this with Rollout Residual Quantization \(Rollout\-ResQ\): a single residual correction term constrained to a hardware\-friendly sparsity pattern, added only to the FP4 rollout matmul — a lightweight correction that recovers most of the precision lost to outlier\-driven  underflow without inflating the rollout’s compute footprint\. On Qwen2\.5\-3B and Qwen2\.5\-Math\-7B, Rollout\-ResQ paired with the HiFloat4 \(HiF4\) format — whose three\-level hierarchical scaling preserves resolution under FP4’s tight 4\-bit budget — closes the accuracy gap to BF16 from 4\.9% to 1\.1%, bringing fully quantized FP4 RL within striking distance of full precision\. Applied to the open\-standard  MXFP4, the same recipe narrows the gap from 13\.6% to 5\.3%, revealing that FP4 format choice is a key factor that determines the ceiling on recoverable accuracy\. Together, these results establish HiF4 as the enabling format for end\-to\- end FP4 RL post\-training, and Rollout\-ResQ as the activation\-side mechanism that makes the gap to BF16 closable\.

## Tuning the Tuner

**Authors:** Jacob Adkins; Michael Bowling; Adam White

**ID:** 153184 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NBWT71jwtz>) | [PDF](<https://openreview.net/pdf?id=NBWT71jwtz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153184>)

Properly tuned hyperparameters are critical for reinforcement learning algorithms to perform well, limiting their use in real world applications\. AutoRL aims to to address this by nesting the reinforcement learning problem within an outer optimization loop, where a black\-box optimizer tunes the reinforcement learning algorithm's hyperparameters leaving the AutoRL algorithm's hyperparameters \(hyper\-hyperparameters\) fixed\. We provide the first empirical study of an AutoRL algorithm's sensitivity with respect to its hyper\-hyperparameters\. Our results demonstrate that SMAC3 with Hyperband, used to tune PPO, is sensitive to its hyper\-hyperparameters, albeit less so than PPO is to its hyperparameters, and this reduction comes at a significant computational cost\. The per\-environment tuned performance gains do not outperform random search, suggesting the reduction in sensitivity may not justify the substantial compute and engineering overhead AutoRL imposes\.

## Context Value Informed In\-Context Reinforcement Learning

**Authors:** Wenhao Zhang; Shao Zhang; Xihuai Wang; Yang Li; Ying Wen

**ID:** 149025 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tPPn7WBWDR>) | [PDF](<https://openreview.net/pdf?id=tPPn7WBWDR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149025>)

In\-context reinforcement learning \(ICRL\) has emerged as an effective paradigm for test time adaptation to unseen tasks without parameter updates\. However, existing ICRL methods can exhibit brittle and unstable adaptions, and the mechanisms underlying such adaptions remain poorly understood\.  We provide a policy\-gradient view of ICRL and argue that relying on trajectory\-level return feedback can lead to high\-variance updates when test time rollout is limited\. Motivated by the actor\-\-critic principle, we propose \*\*Context Value Informed ICRL \(CV\-ICRL\)\*\*, which equips the in\-context policy with an explicit \*context value\*: the expected discounted return conditioned on the current state and accumulated interaction context\. CV\-ICRL trains a value head and writes its prediction back into the context as a value token, enabling TD\-style return targets for lower\-variance policy updates\. Experiments on the Dark Room, Minigrid, and Procgen testbeds show that CV\-ICRL substantially improves the stability of test time adaptation and achieves higher returns across tasks and environments\. The source code and data of this paper are available at  https://anonymous\.4open\.science/r/CV\-ICRL\-D161\.

## Underlying Functional Structure of Reinforcement Learning

**Authors:** Ezgi Korkmaz

**ID:** 155953 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1aSms6I8hy>) | [PDF](<https://openreview.net/pdf?id=1aSms6I8hy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155953>)

Advances in deep reinforcement learning have enabled the development of policies capable of solving complex, high\-dimensional problems, allowing AI agents to strategize and reason purely through interaction without supervision\.  Despite these successes, our knowledge on the functional properties and the underlying structure of the deep neural policy manifold remains limited\. In this paper, we uncover a fundamental functional property in reinforcement learning: the intrinsic alignment between the advantage function and the gradient of the loss targeting directions of incoherence\. We provide a rigorous theoretical foundation for this relationship, demonstrating that this intrinsic alignment characterizes how policies learn and internalize the underlying value function and how this process governs policy decisions\.  By leveraging this fundamental functional property, we propose a novel algorithm that can diagnose and identify deep neural policy decision volatilities\. We conduct extensive empirical analysis in high\-dimensional MDPs\.  From algorithmic and architectural changes to natural distributional shifts and worst\-case perturbations, our proposed method can identify and audit the differences by leveraging the underlying structure of the deep neural policy manifold and the intrinsic correlation\.  Our analysis reveals foundational properties of policies trained in high\-dimensional MDPs, and our paper provides a principled step toward constructing scalable, stable, and generalizable deep reinforcement learning agents\.

## CurveRL: Principled Distribution\-Aware Context Reweighting for LLM Reasoning

**Authors:** Ke Sun; Yizhou Zhao; Jiayi Xin; Qi Long; Weijie Su

**ID:** 149893 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mSNQ3ZeCPi>) | [PDF](<https://openreview.net/pdf?id=mSNQ3ZeCPi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149893>)

Context or prompt\-level reweighting has emerged as a central algorithmic lever in Reinforcement Learning with Verified Rewards \(RLVR\) for improving the reasoning capability of large language models, yet the principle determining what constitutes an optimal weighting remains poorly understood\. We address this gap by formulating prompt reweighting as a functional derivative of a utility functional defined in the pass\-rate function space, yielding a unified optimality framework that accommodates existing schemes, including REINFORCE and GRPO\. Building on this optimality framework, we propose a distribution\-aware prompt reweighting approach, called CurveRL, based on a quantile coordinate transform, in which the weight assigned to each prompt depends not on the absolute value of pass rates but on its rank and density to reflect the distributional structure of the pass rates in the learning dynamics\. Extensive experiments across multiple benchmarks demonstrate that our proposed CurveRL consistently outperforms GRPO and other RLVR baselines\. Our study identifies context\-distribution control as a principled axis for analyzing and designing prompt\-reweighted RLVR algorithms\.

## Optimistic Q\-value Adaptation for Offline\-to\-Online Reinforcement Learning

**Authors:** Hao Wu; Shunhao Zhang; Shuai Lü

**ID:** 155898 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=20yOoplUQb>) | [PDF](<https://openreview.net/pdf?id=20yOoplUQb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155898>)

Offline\-to\-online reinforcement learning \(O2O RL\) aims to improve offline RL agents with limited online interaction\. Prior work has shown that, in conservative value\-regularized methods such as CQL, pessimistic offline critics can underestimate values and hinder online fine\-tuning\. We show that this issue is more general: critic underestimation also appears in explicit policy\-constraint methods such as TD3\+BC, and can persist or become more severe through bootstrapped Bellman updates during fine\-tuning\. To address this problem, we propose Optimistic Q\-value Adaptation \(OQA\), a framework that corrects underestimation at the Bellman\-backup level\. OQA constructs an additional offline\-pretrained actor\-\-critic pair and uses it together with the original pair to form a controlled optimistic backup that mitigates inherited pessimism during fine\-tuning\. Unlike trajectory\-return calibration methods, OQA does not rely on return lower bounds and is not tied to CQL\-style regularization\. Across D4RL MuJoCo locomotion, Maze2D, AntMaze, and Adroit benchmarks, OQA instantiations based on TD3\+BC and CQL consistently outperform the corresponding backbones and strong O2O RL baselines\.

## When Policy Entropy Constraint Fails: Preserving Diversity in Flow\-based RLHF via Perceptual Entropy

**Authors:** Xiaofeng Tan; Jun Liu; Bin\-Bin Gao; Yuanting Fan; Xi Jiang; Chengjie Wang; Hongsong Wang; Feng Zheng

**ID:** 155843 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2TmlUKr7RZ>) | [PDF](<https://openreview.net/pdf?id=2TmlUKr7RZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155843>)

RLHF is widely used to align flow\-matching text\-to\-image models with human preferences, but often leads to severe diversity collapse after fine\-tuning\. In RL, diversity is often assumed to correlate with policy entropy, motivating entropy regularization\. However, we show this intuition breaks in flow models: policy entropy remains constant, even while perceptual diversity collapses\. We explain this mismatch both theoretically and empirically: the constant entropy arises from the fixed, pre\-defined noise schedule, while the diversity collapse is driven by the mode\-seeking nature of policy gradients\. As a result, policy entropy fails to prevent the model from converging to a narrow high\-reward region in the perceptual space\. To this end, we introduce perceptual entropy that captures diversity in a perceptual space and maintains the property of standard entropy\. Building upon this insight, we propose two entropy\-regularized strategies, Perceptual Entropy Constraint and Perceptual Constraints on Generation Space, to preserve perceptual diversity and improve the quality\. Experiments across two base models, neural and rule\-based rewards, and three perceptual spaces demonstrate consistent gains in the quality\-diversity trade\-off; PEC achieves the best overall score of 0\.734 \(vs\.\\ baseline's 0\.366\); a complementary setting of PEC further reaches a diversity average of 0\.989 \(vs\.\\ baseline's 0\.047\)\. Code will be released\.

## Outbidding and Outbluffing Elite Humans: Mastering Liar’s Poker via Self\-Play and Reinforcement Learning

**Authors:** Richard Dewey; Janos Botyanszki; Ciamac C Moallemi; Andrew Zheng

**ID:** 153303 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MGjtyMonYy>) | [PDF](<https://openreview.net/pdf?id=MGjtyMonYy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153303>)

AI researchers have long focused on poker\-like games as a testbed for environments characterized by multi\-player dynamics, imperfect information, and reasoning under uncertainty\. While recent breakthroughs have matched elite human play at no\-limit Texas hold'em, the multi\-player dynamics are subdued: most hands converge quickly with only two players engaged through multiple rounds of bidding\. In this paper, we present Solly, the first AI agent to achieve elite human play in reduced\-format Liar’s Poker, a game characterized by extensive multi\-player engagement\. We trained Solly using self\-play with Regularized Nash Dynamics \(R\-NaD\), a model\-free, actor\-critic, deep reinforcement learning algorithm, and we successfully extend R\-NaD to the multi\-player scenario for the first time\. Solly played at an elite human level as measured by win rate \(won over 50\\% of hands\) and equity \(money won\) in heads\-up and multi\-player Liar’s Poker\. Solly also outperformed large language models \(LLMs\), including those with reasoning abilities, on the same metrics\. Solly developed novel bidding strategies, randomized play effectively, and was not easily exploitable by world\-class human players\.

## Explaining and Preventing Alignment Collapse in Iterative RLHF

**Authors:** Etienne Gauthier; Francis Bach; Michael Jordan

**ID:** 155701 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3azE5mTgC1>) | [PDF](<https://openreview.net/pdf?id=3azE5mTgC1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155701>)

Reinforcement learning from human feedback \(RLHF\) typically assumes a static or non\-strategic reward model \(RM\)\. In iterative deployment, however, the policy generates the data on which the RM is retrained, creating a feedback loop\. Building on the Stackelberg game formulation of this interaction, we derive an analytical decomposition of the policy's true optimization gradient into a standard policy gradient and a parameter\-steering term that captures the policy's influence on the RM's future parameters\. We show that standard iterative RLHF, which drops this steering term entirely, suffers from alignment collapse: the policy systematically exploits the RM's blind spots, producing low\-quality, high\-reward outputs whose feedback reinforces the very errors it exploits\. To mitigate this, we propose foresighted policy optimization \(FPO\), a mechanism\-design intervention that restores the missing steering term by regularizing the policy's parameter\-steering effect on RM updates\. We instantiate FPO via a scalable first\-order approximation and demonstrate that it prevents alignment collapse on both controlled environments and an LLM alignment pipeline using Llama\-3\.2\-1B\.

## Multi\-Step Likelihood\-Ratio Correction for Reinforcement Learning with Verifiable Rewards

**Authors:** Deokgyu Yoon; Hyungkyu Kang; Joongkyu Lee; Byeongchan Kim; Gyungin Shin; Sungrae Park; Min\-hwan Oh

**ID:** 152849 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PtwpyBrzB0>) | [PDF](<https://openreview.net/pdf?id=PtwpyBrzB0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152849>)

Reinforcement learning with verifiable rewards \(RLVR\) plays a pivotal role in improving the reasoning ability of large language models\. However, widely used PPO surrogate objectives are fundamentally \*local\*, as they rely on a local approximation of the exact policy gradient objective\. While this approximation improves stability by reducing the variance induced by importance sampling, it also introduces structural bias into the surrogate objective, which must be controlled through trust region mechanisms\. In this work, we introduce the $N$\-step forward trace, which augments the PPO surrogate objective using the cumulative likelihood ratio of the next $N\-1$ tokens\. Building on this idea, we propose $N$\-Step Forward\-Trace Policy Optimization \(NFPO\), a practical RLVR algorithm that integrates the $N$\-step forward trace into the masked policy gradient framework\. NFPO provides a continuous bridge between the PPO surrogate objective and the exact policy gradient objective, offering a principled mechanism for controlling the bias–variance trade\-off\. Our theoretical analysis shows that, with an appropriate choice of $N$, the proposed objective yields a tighter policy\-improvement bound than the standard PPO surrogate\. Experiments on comprehensive reasoning benchmarks demonstrate that NFPO consistently improves performance, supporting our theoretical findings\.

## Understanding the Effects of Neuron Dominance in Deep Reinforcement Learning

**Authors:** Zifan Wu; Qian Lin; Blake Lawlor; Haijun Zhao; Daniel Brown

**ID:** 156752 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VNV1h77UnH>) | [PDF](<https://openreview.net/pdf?id=VNV1h77UnH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156752>)

Recent studies in deep reinforcement learning have revealed that neural networks tend to lose their capacity to adapt to new targets over the course of training\. The proliferation of inactive neurons, i\.e\., the so\-called \`\`dormant neurons'', has been identified as one source of capacity loss\. This paper investigates \\textit\{dominant neurons\}, neurons whose activation values are significantly larger than average, as a potential cause for neuron dormancy\. We demonstrate the existence of dominant neurons in a number of visual control tasks, and perform an analysis of the learning dynamics showing how dominant neurons can induce dormancy in the subsequent layer\. To gain a better understanding of this phenomenon, we examine it through the lens of representation learning and establish its connection with representation collapse\. Furthermore, this paper evaluates several mitigation strategies for dominant neurons  across a variety of visual control tasks\. Our results show that strategies that induce lower peak activation scores tend to exhibit greater representational capacity, lower dormant neuron percentage, and better performance\. Among these mitigation strategies, LayerNorm with weight decay has the strongest performance, despite its simplicity\. Moreover, switching the value learning loss from regression to a classification loss also significantly mitigates the neuron dominance issue and improves the performance\. As a potential explanation of the effectiveness of classification losses, we provide an analysis that shows how a classification loss can prevent representation collapse\.

## AEM: Adaptive Entropy Modulation for Multi\-Turn Agentic Reinforcement Learning

**Authors:** Haotian Zhao; Songlin Zhou; Yuxin Zhang; Stephen S Yau; Wenyu Zhang; Tianlun; Tianshu Zhu; Yifeng Huang; yucheng\-zeng; Jingnan gu; Daxiang Dong; Jianmin Wu

**ID:** 154854 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AOIuq1ld4R>) | [PDF](<https://openreview.net/pdf?id=AOIuq1ld4R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154854>)

Reinforcement learning \(RL\) has substantially improved the ability of large language model \(LLM\) agents to interact with environments and solve multi\-turn tasks\. However, effective agentic RL remains challenging: sparse outcome\-only rewards provide limited guidance for assigning credit to individual steps within long interaction trajectories\. Existing approaches often introduce dense intermediate supervision, such as process reward models or auxiliary self\-supervised signals, which increases supervision and tuning complexity and may limit generalization across tasks and domains\.  We present AEM, a supervision\-free credit assignment method that adaptively modulates entropy dynamics during RL training to improve the exploration\-exploitation trade\-off\. Since in agentic RL the environment is typically affected by a complete response, rather than an individual token, our analysis lifts entropy dynamics from the token level to the response level, aligning uncertainty estimation with the effective action granularity of LLM agents and reducing sensitivity to token\-level sampling noise\. We further show that entropy drift under natural\-gradient updates is governed by the interaction between the sampled\-response advantage and its relative surprisal\. Motivated by this result, AEM derives a practical response\-level uncertainty proxy and uses it to rescale advantages, leveraging the evolving balance between positive and negative samples to naturally transition from exploration to exploitation\. Extensive experiments on ALFWorld, WebShop, and SWE\-bench\-Verified with models ranging from 1\.5B to 32B demonstrate that AEM consistently improves strong RL baselines, including a \+1\.4\\% gain when integrated into a state\-of\-the\-art software\-engineering RL training framework\.

## Rollout Pass\-Rate Control: Steering Binary\-Reward RL Toward Its Most Informative Regime

**Authors:** Tianshu Zhu; Wenyu Zhang; Xiaoying Zuo; Tianlun; Haotian Zhao; yucheng\-zeng; Jingnan gu; Daxiang Dong; Jianmin Wu

**ID:** 155471 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5MwSociabw>) | [PDF](<https://openreview.net/pdf?id=5MwSociabw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155471>)

Agentic reinforcement learning \(RL\) for software engineering spends much of its compute on stateful trajectories whose grouped binary rewards are highly skewed and weakly contrastive\. We frame this as pass\-rate control and show that the binary reward\-side signal is strongest near a 50% rollout pass rate under four criteria: reward entropy, group\-filtering survival, leave\-one\-out \(RLOO\) advantage energy under Group Relative Policy Optimization \(GRPO\), and success\-failure pair count\. We propose \*Prefix Sampling\* \(PS\), which replays self\-generated trajectory prefixes to steer skewed groups toward this regime: successful prefixes give mostly failing groups a head start, while failing prefixes handicap mostly passing groups\. Replayed states are reconstructed through the existing rollout path, and replayed tokens are masked from the loss so optimization applies only to current\-policy continuations\. On SWE\-bench Verified, PS reaches the baseline high\-score regime within evaluation variability while delivering $2\.01\\times$/$1\.55\\times$ end\-to\-end wall\-clock speedups on Qwen3\-14B/32B; the 14B peak improves from $0\.274$ to $0\.295$\. AIME 2025 experiments on 4B/8B show the same pass\-rate\-control pattern, and 4B ablations attribute gains to replay, bidirectional coverage, and adaptive control\.

## Temporal Behavior Trees for Reinforcement Learning: Specifications as Rewards, Curricula, and Diagnostics

**Authors:** Vladimir Krsmanovic; Bernd Finkbeiner

**ID:** 153832 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IOFQf2UdfY>) | [PDF](<https://openreview.net/pdf?id=IOFQf2UdfY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153832>)

Reinforcement learning from formal specifications often separates task definition, reward shaping, curriculum design, and policy diagnostics into different mathematical objects\. This fragmentation introduces   additional conversion steps and discards structure already present in the specification, such as sub\-task boundaries, ordering constraints, and quantitative margins\. We introduce TBTCL, a framework that uses   Temporal Behaviour Trees \(TBTs\) as a unified interface for specification\-guided reinforcement learning\. A single TBT specifies the task, induces dense robustness\-based rewards, defines a curriculum, and   supports better understanding of learnt policies \-  grounded in the formal semantics of the specification language\. By adapting TBT syntax and semantics for specification guided reinforcement learning, we provide a formalism that is more expressive than popular specification languages such LTL and inherently hierarchical\. We present algorithms to automatically extract a curriculum DAG and derive dense, robustness\-based rewards directly from TBT semantics, requiring no additional user inputs like region predicates or demonstrations\. Furthermore, we utilize TBT trace segmentation to provide build understandable competence profiles and automatically adapt the reward toward bottlenecks\. We evaluate TBTCL on six specifications across discrete and continuous domains\. The   results show that TBTCL matches dense STL shaping on simpler tasks and improves over baselines on reach\-avoid specifications, while also exposing interpretable sub\-task failures through the same formal   object used for training\. We show that a Temporal Behaviour Tree act as a specification, and a reward, and a curriculum and a diagnostic\.

## Decoupling is the Key: Scaling Deep Value Networks in Reinforcement Leanring

**Authors:** Yunsheng Xue; Ziyi Zhang; zhihao wu; Youfang Lin

**ID:** 149216 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s2GEGdj4Dh>) | [PDF](<https://openreview.net/pdf?id=s2GEGdj4Dh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149216>)

Scaling laws have driven remarkable performance breakthroughs in Computer Vision \(CV\) and Natural Language Processing \(NLP\) by increasing model depth\. Compared to increasing width, deeper networks provide higher parameter efficiency and more expressive representations\. However, increasing network depth in reinforcement learning \(RL\) still yields limited performance gains\. In this paper, through theoretical and empirical analysis, we reveal that this performance degradation is primarily attributed to implicit low\-rank bias and overfitting\. While these two issues also exist in shallow networks, the detrimental effects caused by component coupling are significantly amplified as the network depth increases, leading to severe performance degradation\. For the first issue, we theoretically prove the existence of bootstrapped spectral coupling, which causes high\-frequency spectral components to couple with the low\-frequency spectral components of the value network, thereby driving representations of deep value networks into severe rank collapse\. For the second issue, we reveal that deep value networks severely overfit the noise induced by TD target couplings, which means the construction of TD targets is influenced by other components, such as the boundary of value distribution or current policy\. Therefore, our insight is that decoupling is the key to successfully scaling deep value networks in RL\. Motivated by this insight, we propose two simple yet effective solutions respectively: policy\-independent spectral decoupling and boundary\-target decoupling\. Moreover, decoupling policy and value learning \(as in AWR\) is also a necessary target decoupling for deep value network training in offline RL\. By integrating these decoupling components, we propose Spectrally Decoupled Distributional Learning \(SEED\)\. Empirically, to the best of our knowledge, SEED is the first approach to successfully unlock the potential of depth in both online and offline RL settings, enabling value networks to scale effectively from 3 to 32 layers with consistent performance gains\.

## Permanent and Transient Representations for Continual Reinforcement Learning

**Authors:** Nishanth Anand; Doina Precup

**ID:** 149172 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sLgM3e4pXf>) | [PDF](<https://openreview.net/pdf?id=sLgM3e4pXf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149172>)

Continual Reinforcement Learning \(CRL\) agents struggle to adapt to new situations while retaining prior knowledge, leading to a stability–plasticity trade\-off\. One approach to solving this problem is by using complementary learning systems: one for slow, long\-term learning and another for quick, transient adaptation\. Anand &amp; Precup \(2023\) instantiated this idea using permanent and transient value functions, but used the same features in both systems\. Intuitively, long\-term learning should rely more on parametric representations for broad generalization, while transient learning would be best served by non\-parametric representations for situation\-specific adaptation\. In this paper, we explore this idea both theoretically and empirically\. We propose a novel non\-parametric approximation for estimating the transient value function in complex tasks\. And, demonstrate that our method enables online learning and outperforms competitive baselines on image\-based tasks and Craftax\-Classic, underscoring the effectiveness of our system\-level decomposition\.

## K\-prop: Deep Online Learning by Backpropagating Temporal Kernels

**Authors:** Bingkun Liu; Paul Haider; Federico Benitez; Mihai A\. Petrovici; Walter Senn

**ID:** 153851 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IGznB40U3i>) | [PDF](<https://openreview.net/pdf?id=IGznB40U3i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153851>)

Self\-recurrence represents an important component for temporal processing in neural networks, both artificial and biological, where it appears naturally in the form of leaky integration\. However, due to the complex temporal dependencies of the gradient, an efficient and effective method of online training is still lacking\. Here we propose K\-prop, a novel online learning method for leaky neural networks\. It dramatically reduces the computational and memory cost of real time recurrent learning \(RTRL\) by propagating kernel gains\. K\-prop also outperforms existing RTRL approximations and achieves performance comparable to backpropagation through time in sequence learning, classification, and reinforcement learning tasks\. We further analyze how its sole approximation affects gradient quality and identify conditions under which K\-prop remains accurate and effective\.

## Joint Adaptive Neighborhood Constraint for Offline Multi\-Agent Reinforcement Learning

**Authors:** Xiancheng Gao; Mingxiao Feng; Lin Liu; Yuanrui Duan; Yufeng Shi; Wengang Zhou; Houqiang Li

**ID:** 149793 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nHitPSOoEp>) | [PDF](<https://openreview.net/pdf?id=nHitPSOoEp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149793>)

Offline reinforcement learning suffers from distributional shift and extrapolation errors\. These issues are particularly severe in multi\-agent settings\. As the number of agents increases, the joint action space grows exponentially while agent behaviors become highly coupled\. Consequently, even if individual actions remain within the data distribution, their combination may still result in out\-of\-distribution \(OOD\) joint actions\. Directly extending single\-agent constraints to multi\-agent settings is difficult, as they fail to effectively constrain joint actions\. This often results in poor coordination or excessive conservatism\. To bridge this gap, we propose the joint adaptive neighborhood constraint \(JANC\), which explicitly constructs controlled neighborhoods in the joint action space to suppress extrapolation while preserving reliable generalization\. Moreover, JANC adaptively scales neighborhood radii based on joint advantages to align generalization with value structures\. In practice, our method first performs adaptive neighborhood Q learning to explore high\-value behaviors and then conducts value and policy learning based on the refined actions\. Experiments on offline benchmarks, including multi\-agent Mujoco and StarCraft II, show that JANC outperforms state\-of\-the\-art methods on the majority of tasks in complex cooperative scenarios\. We will release our source code to the public\.

## Breaking $\\textit\{Winner\-Takes\-All\}$: Cooperative Policy Optimization Improves Diverse LLM Reasoning

**Authors:** Haoxuan Chen; Tianming Liang; Wei\-Shi Zheng; Jian\-Fang Hu

**ID:** 150356 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iiwmhPUMvv>) | [PDF](<https://openreview.net/pdf?id=iiwmhPUMvv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150356>)

Reinforcement learning with verifiers \(RLVR\) has become a central paradigm for improving LLM reasoning, yet popular group\-based optimization algorithms like GRPO often suffer from exploration collapse, where the models prematurely converge on a narrow set of high\-scoring patterns, lacking the ability to explore new solutions\. Recent efforts attempt to alleviate this by adding entropy regularization or diversity bonus\. However, these approaches do not change the \\textit\{winner\-takes\-all\} nature, where rollouts still compete for individual advantage rather than cooperating for maximizing global diversity\. In this work, we propose Group Cooperative Policy Optimization \(GCPO\), which shifts the training paradigm from rollout competition to team cooperation\. Specifically, GCPO replaces independent rollout scoring with team\-level credit assignment: a rollout is rewarded by how much it contributes to the team's valid solution coverage, rather than its individual accuracy\. This coverage is described as a determinant volume over reward\-weighted semantic embeddings, where only correct and non\-redundant rollouts contribute to this volume\. During advantage estimation, GCPO redistributes the collective team reward to each single rollout according to its average marginal contribution to the team\. This cooperative training paradigm routes optimization toward non\-redundant correct reasoning paths\. Experiments across multiple reasoning benchmarks demonstrate that GCPO significantly improves both reasoning accuracy and solution diversity over existing approaches\. Code will be made available\.

## When Does Knowing the State Help? Diagnosing Process vs\. Outcome Reward Design

**Authors:** Wenpei Shao; Ross Jacobucci

**ID:** 152959 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P61QuZf0Po>) | [PDF](<https://openreview.net/pdf?id=P61QuZf0Po>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152959>)

Process reward models \(PRMs\) dramatically outperform outcome reward models \(ORMs\) for math reasoning and agent tasks, yet provide no benefit for chat and QA\. No theory explains why, and practitioners choose between them by expensive trial and error\. We introduce state\-lift, a diagnostic that predicts whether a PRM is worth training for a new domain — in minutes, from \~500 labeled steps, before committing to expensive reward model training\. State\-lift measures how much step quality depends on trajectory state versus action text alone, and an accompanying effective gap distinguishes two regimes: state\-noise\-dominant \(PRM essential\) and action\-gap\-dominant \(ORM sufficient\)\. Across ten domains and eleven published PRM\-ORM comparisons, state\-lift correctly predicts PRM advantage, and a minutes\-scale linear estimate matches the outcome of full Llama\-3\.1\-8B reward model training — including CaSiNo negotiation \(\+0\.055 lift at SL = 0\.22\)\. The accompanying two\-branch decision protocol turns state\-lift into an actionable PRM\-vs\-ORM workflow that runs in minutes on a single CPU\.

## What should post\-training optimize? A test\-time scaling law perspective

**Authors:** Muheng Li; Jian Qian; Wenlong Mou

**ID:** 148944 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=u0f6gRsMJ0>) | [PDF](<https://openreview.net/pdf?id=u0f6gRsMJ0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148944>)

Large language models are increasingly deployed with test\-time strategies: sample $N$ responses, score them with a reward model or verifier, and return the best\. This deployment rule exposes a mismatch in post\-training: standard objectives optimize the mean reward of a single response, whereas best\-of\-$N$ performance is governed by the upper tail of the reward distribution\. Recent test\-time\-aware objectives partly address this mismatch, but typically assume that training can use the same per\-prompt rollout budget as deployment, which is impractical when post\-training must cover many prompts while deployment can allocate much larger per\-prompt test\-time compute\. We study this budget\-mismatch regime, where only $m\\ll N$ per\-prompt rollouts are available during training but the target objective is best\-of\-$N$ deployment\. Under structural assumptions on the reward tails, we show that the policy gradient of the best\-of\-$N$ objective can be approximated from a much smaller rollout group by extrapolating upper\-tail statistics\. This yields a family of Tail\-Extrapolated estimators for best\-of\-$N$\-oriented post\-training: a simple direct estimator, Tail\-Extrapolated Advantage \(TEA\), and a fixed\-order debiased Prefix\-TEA estimator based on moment cancellation\. Experiments on instruction\-following tasks show that TEA and Prefix\-TEA improve best\-of\-$N$ performance across different language models, reward models and datasets under various training and test\-time budget settings\.

## Preference Conditioned Multi\-Objective Reinforcement Learning: Decomposed, Diversity\-Driven Policy Optimization

**Authors:** Tanmay Ambadkar; Sourav Panda; Shreyash Kale; Jonathan Dodge; Abhinav Verma

**ID:** 149722 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ntjuLx6iMB>) | [PDF](<https://openreview.net/pdf?id=ntjuLx6iMB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149722>)

Multi\-objective reinforcement learning \(MORL\) seeks to train agents capable of balancing conflicting objectives\. While single preference\-conditioned policies offer a highly scalable solution, existing approaches remain brittle in practice, frequently failing to recover dense Pareto fronts\. We demonstrate that this failure stems from two structural pathologies: destructive advantage cancellation caused by premature Early Scalarization \(ES\), and representational mode collapse across the preference space\. To overcome these bottlenecks, we introduce \\toolname\{\}, a PPO\-based framework that fundamentally reorganizes multi\-objective optimization\. By preserving per\-objective learning signals through a decomposed pipeline and integrating preferences only after trust\-region stabilization \(Late\-Stage Weighting\), \\toolname\{\} improves credit assignment under conflicting objectives\. Concurrently, a scaled diversity regularizer encourages behavioral divergence proportional to preference distance\. \\toolname\{\} operates entirely within the efficient linear scalarization regime shared by standard deep MORL baselines\. By reducing information loss caused due to linear scalarization rather than relying on expensive non\-linear utility functions, it suggests that optimization bottlenecks play a significant role\. Across available standard benchmarks, including high\-dimensional and many\-objective environments, \\toolname\{\} consistently discovers broader, higher\-quality Pareto fronts than prior methods, exceeding state\-of\-the\-art hypervolume and expected utility using a single deployable policy\.

## ToS: Tree\-of\-Skill Reinforcement Learning driven by Behavior Tree for Long\-Horizon Manipulation

**Authors:** Xinglin Chen; Yishuai Cai; Yunxin Mao; Minglong Li; Kefei Zhu; Wenjing Yang; Yaodong Yang; Ji Wang; Yuanpei Chen

**ID:** 151185 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cKguVoE2ry>) | [PDF](<https://openreview.net/pdf?id=cKguVoE2ry>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151185>)

Behavior Trees \(BTs\) are known for their modular nature, making them a promising control architecture for long\-horizon manipulation tasks\. BT planning leverages high\-level symbolic behavior models to effectively generate reliable BTs\. However, low\-level skill design often involves dependencies between skills that are difficult to model or reason about using symbols, such as precise object poses\. Existing skill chaining methods typically focus on connecting a predefined sequence of skills but struggle to handle multiple possible subsequent branches\. This paper proposes Tree\-of\-Skill \(ToS\), the first neural\-symbolic framework for dynamic skill chaining in BT\-driven Reinforcement Learning \(RL\)\. In ToS, subsequent skills are predicted using behavior models during BT execution, and the current skill is dynamically chained to its successor via the goal generated by the successor’s guiding network\. Guidance is applied when two adjacent skills have dependencies, which may be explicitly modeled or implicit\. We introduce the goal mask for skills to support heterogeneous goal spaces or to enable execute without a successor\-provided goal\. The training process of ToS includes goal\-conditioned skill learning, guiding network learning, and optional task\-specific fine\-tuning\. Experiments are conducted on a robot equipped with two Realman RM75\-6F arms and two PsiBot G0\-R hands\. We train 8 skills in simulation and evaluate them on 7 two\-step tasks and 5 long\-horizon \(3–5 steps\) tasks\. Results show that ToS generally achieves higher success rates than the baselines, particularly on unseen tasks\. Ablation studies further demonstrate the effectiveness of the guiding network\. Finally, real\-world deployment confirms the practical applicability of ToS for long\-horizon manipulation\.

## ToS: Tree\-of\-Skill Reinforcement Learning driven by Behavior Tree for Long\-Horizon Manipulation

**Authors:** Xinglin Chen; Yishuai Cai; Yunxin Mao; Minglong Li; Kefei Zhu; Wenjing Yang; Yaodong Yang; Ji Wang; Yuanpei Chen

**ID:** 151185\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151185

[Paper](<https://openreview.net/forum?id=cKguVoE2ry>) | [PDF](<https://openreview.net/pdf?id=cKguVoE2ry>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151185>)

Behavior Trees \(BTs\) are known for their modular nature, making them a promising control architecture for long\-horizon manipulation tasks\. BT planning leverages high\-level symbolic behavior models to effectively generate reliable BTs\. However, low\-level skill design often involves dependencies between skills that are difficult to model or reason about using symbols, such as precise object poses\. Existing skill chaining methods typically focus on connecting a predefined sequence of skills but struggle to handle multiple possible subsequent branches\. This paper proposes Tree\-of\-Skill \(ToS\), the first neural\-symbolic framework for dynamic skill chaining in BT\-driven Reinforcement Learning \(RL\)\. In ToS, subsequent skills are predicted using behavior models during BT execution, and the current skill is dynamically chained to its successor via the goal generated by the successor’s guiding network\. Guidance is applied when two adjacent skills have dependencies, which may be explicitly modeled or implicit\. We introduce the goal mask for skills to support heterogeneous goal spaces or to enable execute without a successor\-provided goal\. The training process of ToS includes goal\-conditioned skill learning, guiding network learning, and optional task\-specific fine\-tuning\. Experiments are conducted on a robot equipped with two Realman RM75\-6F arms and two PsiBot G0\-R hands\. We train 8 skills in simulation and evaluate them on 7 two\-step tasks and 5 long\-horizon \(3–5 steps\) tasks\. Results show that ToS generally achieves higher success rates than the baselines, particularly on unseen tasks\. Ablation studies further demonstrate the effectiveness of the guiding network\. Finally, real\-world deployment confirms the practical applicability of ToS for long\-horizon manipulation\.

## CasePlay: Self\-Play Reinforcement Learning from Case Reports for Medical Reasoning

**Authors:** Hao Wang; Zihan Wang; Kai WU; Jian Yao; Yiwen Ye; Yongcan Luo; Dapeng Wu; Jiale Chen; Haihua Yang

**ID:** 153097\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153097

[Paper](<https://openreview.net/forum?id=Nx6gxXwb7V>) | [PDF](<https://openreview.net/pdf?id=Nx6gxXwb7V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153097>)

_Abstract unavailable from the accessible public sources._

## Submodular Multi\-Agent Reinforcement Learning for Effective Online Distributed Task Allocation

**Authors:** Jing Liu; Yangyang YANG; Luca Ballotta; Fangfei Li; Yang Tang; Ruggero Carli

**ID:** 149944\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149944

[Paper](<https://openreview.net/forum?id=m1AFEitkDl>) | [PDF](<https://openreview.net/pdf?id=m1AFEitkDl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149944>)

This paper studies multi\-agent reinforcement learning with submodular team utilities, which models scenarios where $N$ agents solve a non\-additive task allocation problem in a distributed manner online\. Since each agent selects one action from a local categorical distribution at each time step, feasible joint actions form a partition matroid over agent\-action pairs\. The standard continuous relaxation of set utility functions, the Multilinear Extension, does not encode categorical constraints on  factorized policies and may yield inconsistent gradient estimation\. To remedy this, we propose the \\emph\{Partition Multilinear Extension\}, a continuous relaxation that equals the expected team utility with factorized categorical policies under partition matroid constraint\. We prove that submodular difference rewards provide unbiased PME marginal\-gradient information and induce a stagewise score\-function policy\-gradient estimator for factorized categorical policies\. Building on these results, we propose \\emph\{SubMAPG\}, a centralized training with decentralized execution \(CTDE\) multi\-agent policy\-gradient framework that implements submodular difference\-reward training signals and masked categorical policies for partition\-feasible decentralized execution\. For the associated PME marginal\-space projected stochastic\-gradient dynamics, we establish a stagewise $\\frac\{1\}\{2\}$\-approximation guarantee and sublinear dynamic regret under slowly varying environments, measured by the path length of the optimal PME marginals\. Finally, to handle open systems where agents and targets may leave and join over time \(e\.g\., modeling failure and recovery of robots or smart sensors\), we implement SubMAPG with a graph neural network policy model\. Numerical experiments on multi\-robot coverage and multi\-target tracking show that SubMAPG outperforms local greedy and shared\-reward baselines, and is competitive with centralized myopic greedy strategies\.

## Tool Verification for Test\-Time Reinforcement Learning

**Authors:** Ruotong Liao; Nikolai Röhrich; Xiaohan Wang; Yuhui Zhang; Yasaman Samadzadeh; Volker Tresp; Serena Yeung\-Levy

**ID:** 153674\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153674

[Paper](<https://openreview.net/forum?id=Jd7P3rhNnN>) | [PDF](<https://openreview.net/pdf?id=Jd7P3rhNnN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153674>)

Test\-time reinforcement learning \(TTRL\) has emerged as a promising paradigm for adapting large reasoning models \(LRMs\) on unlabeled test inputs, using self\-consensus rewards derived from majority voting over sampled rollouts\. However, majority voting can mistake popularity for correctness: a spurious yet high\-frequency unverified consensus may become a biased reward signal, causing test\-time RL to reinforce frequent but wrong answers and collapse into an incorrect mode\. We address this false\-popular failure mode with T^3RL \(Tool\-Verification for Test\-Time Reinforcement Learning\), a verification\-aware test\-time RL framework\. T^3RL grounds pseudo\-label construction in external tool evidence\. Concretely, a verifier uses external tool evidence, such as code execution, to upweight verified rollouts during verification\-aware voting, producing more reliable pseudo\-labels for training\. Across mathematical reasoning benchmarks of varying difficulty, including MATH\-500, AMC, and AIME 2024, and diverse backbone families, T^3RL significantly improves over TTRL, with stronger performance on harder problems\. More broadly, T^3RL is positioned as a verified online data synthesizer, highlighting the role of test\-time tool verification in reliable online adaptation\.

## ECHO\-2: A Large\-Scale Distributed Rollout Framework for Cost\-Efficient Reinforcement Learning

**Authors:** Jingwei Song; Meng Chen; Jie Xiao; Qingnan Ren; Jiaqi Huang; Yangshen Deng; Senyu Tong; Wanyi Chen; Suli Wang; Zhisheng Chen; Ziqian Bi; Shuo Lu; Yiqun Duan; Xu Wang; Rymon Yu; Lynn Ai; Eric Yang; TIANYU SHI

**ID:** 152365\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152365

[Paper](<https://openreview.net/forum?id=TbGdYIqIoF>) | [PDF](<https://openreview.net/pdf?id=TbGdYIqIoF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152365>)

Reinforcement learning \(RL\) is a critical stage in post\-training large language models \(LLMs\), involving repeated interaction between rollout generation, reward evaluation, and centralized learning\. Distributing rollout execution offers opportunities to leverage more cost\-efficient inference resources, but introduces challenges in wide\-area coordination and policy dissemination\. We present ECHO\-2, a distributed RL framework for post\-training with remote inference workers and non\-negligible dissemination latency\. ECHO\-2 combines centralized learning with distributed rollouts and treats bounded policy staleness as a user\-controlled parameter, enabling rollout generation, dissemination, and training to overlap\. We introduce an overlap\-based capacity model that relates training time, dissemination latency, and rollout throughput, yielding a practical provisioning rule for sustaining learner utilization\. To mitigate dissemination bottlenecks and lower cost, ECHO\-2 employs peer\-assisted pipelined broadcast and cost\-aware activation of heterogeneous workers\. Experiments on GRPO post\-training of LLMs ranging from 4B to 32B parameters under real wide\-area bandwidth regimes show that ECHO\-2 significantly improves cost efficiency while preserving RL reward comparable to strong baselines\.

## Reinforcement Learning from Rich Feedback with Distributional DAgger

**Authors:** Rishabh Agrawal; Jacob Fein\-Ashley; Paria Rashidinejad

**ID:** 155273 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6ux7PyTXx9>) | [PDF](<https://openreview.net/pdf?id=6ux7PyTXx9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155273>)

Reasoning models have advanced rapidly, but the dominant reinforcement learning from verifiable rewards \(RLVR\) recipe remains surprisingly narrow: sample many responses and reward each with a single bit indicating whether the final answer is correct\. Yet many settings provide $\\textit\{rich feedback\}$, including execution traces, tool outputs, expert corrections, and model self\-evaluations\. We study how to use such feedback through a distributional variant of the classic imitation learning algorithm DAgger, where the learner has local access to an expert distribution on states visited by the current policy\. This yields a simple forward cross\-entropy objective that admits a blackbox expert and whose sequence\-level gradient \{conduct rich credit assignment by propagating\} future expert\-student disagreement back to earlier decisions\. We show that prior RL with self\-distillation objectives based on reverse KL or Jensen\-Shannon fail to guarantee monotonic policy improvement: even when the expert has higher reward, their updates may increase probability on worse actions\. In contrast, we show that forward cross\-entropy admits monotonic policy improvement and enjoys guarantees on regret\. We further show that our objective optimizes a teacher\-weighted maximum\-likelihood RL lower bound, leading to improved Pass@N\. Empirically, our approach, DistIL, consistently improves over RLVR and RL with self\-distillation baselines across a variety of domains: scientific reasoning, mathematical reasoning, and coding\.

## Boosting Multiagent Reinforcement Learning at High Replay Ratios with Ensemble Reset

**Authors:** Yaodong Yang; Hongyao Tang; Guangyong Chen; Pheng\-Ann Heng

**ID:** 149143 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sW2PazNAB1>) | [PDF](<https://openreview.net/pdf?id=sW2PazNAB1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149143>)

Increasing the replay ratio, where an agent's network is updated multiple times per environment interaction, is an effective strategy for improving sample efficiency in reinforcement learning\. However, its effects on the network capacity of multiagent reinforcement learning \(MARL\) are not yet well investigated\. In this paper, we show that high replay ratios induce a severe dormant neuron problem in the centralized global Q\-network of MARL, where a large fraction of neurons become inactive, thereby reducing network capacity and destabilizing learning\. To address this problem, we propose Ensemble Reset \(EnSet\) to stabilize MARL training at high replay ratios\. First, guided by theoretical analysis, EnSet employs an ensemble of global Q\-value networks with periodic resets to mitigate neuron dormancy during frequent updates\. Second, EnSet diversifies replay experience by exploiting multiagent translation invariance as an inductive bias in the global Q\-value function to prevent overfitting\. Extensive experiments in SMAC, MPE, and SMACv2 environments demonstrate that EnSet consistently improves various MARL algorithms at high replay ratios with fewer environment steps\.

## UniForm: Segment\-Aware GRPO for Joint Punctuation Restoration and Inverse Text Normalization

**Authors:** Junhao Gong; Weiwei Li; Rilin Chen

**ID:** 153759 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=It6ljjakNn>) | [PDF](<https://openreview.net/pdf?id=It6ljjakNn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153759>)

Punctuation Restoration and Inverse Text Normalization \(ITN\) are essential post\-processing tasks for ASR systems\. Traditionally, these are handled by separate models in a sequential pipeline, which suffers from error propagation and suboptimal latency\. We propose UniForm, a unified framework that jointly solves both tasks using a single compact language model\. UniForm is trained via a three\-stage progressive paradigm: large\-scale supervised fine\-tuning on punctuation data, joint fine\-tuning with ITN span masks, and reinforcement learning alignment\. To enable effective reinforcement learning in this inherently low\-entropy setting, we introduce Segment\-Aware GRPO \(SA\-GRPO\), which optimizes model performance through two synergistic components: a structured reward decomposition mechanism that provides dedicated signals for distinct segment types, and a token\-level adaptive credit assignment mechanism that dynamically redistributes gradients toward difficult tokens based on sampling consensus and model entropy\. This integrated approach effectively eliminates the need for manual sub\-task weighting and ensures fine\-grained optimization for both tasks\. We train UniForm\-0\.8B on over 238 million multilingual samples\. Extensive evaluations across diverse languages, domains, and code\-switching scenarios demonstrate that UniForm\-0\.8B outperforms prior specialized models and larger general\-purpose LMs on both tasks while maintaining real\-time inference latency\. Furthermore, our analysis reveals a strong synergistic effect, proving that joint training mutually benefits both punctuation and ITN performance\.

## SkillForge: Co\-Evolving Skills and Agents via Dynamic Skill Lifecycles

**Authors:** Yuyao Ge; Yiwei Wang; Yuchen He; Baolong Bi; Lingrui Mei; Jiayu Yao; Lizhe Chen; Shenghua Liu

**ID:** 151649 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z3a0qCfhFi>) | [PDF](<https://openreview.net/pdf?id=Z3a0qCfhFi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151649>)

Memory\-augmented reinforcement learning strengthens LLM agents' ability to solve complex long\-horizon tasks\. Skills are one such form of memory, pairing instructions with an applicability condition over task types\. However, retaining every skill indiscriminately as the policy improves lets obsolete or harmful entries accumulate and mislead the agent\. We propose SkillForge, an agentic RL method that compiles and evolves the skill library through a fitness\-driven skill lifecycle of trial, active, stable, and retired states, so that the skills and the model co\-evolve throughout training\. A preliminary evaluation phase first uses the base model's own rollouts to pre\-retire low\-fitness skills, yielding a filtered library that then seeds supervised fine\-tuning\. Reinforcement learning takes over from this checkpoint, and at each iteration selective retirement, stabilization, and LLM\-guided mutation continue to forge the skill library alongside policy optimization\. Across multiple interactive agent benchmarks, SkillForge achieves the highest aggregate success rate, delivering up to 7\.8\\% relative improvement over the strongest baseline while keeping the skill library compact throughout training\. We introduce Skillfurnace, a dataset of 5k\+ annotated records bundling retirement\-filtered SFT trajectories, evolved skill libraries with fitness annotations, and retirement events with human\-annotated failure categories to support research on skill quality and lifecycle management\.

## SAIR: Cost\-Efficient Multi\-Stage ML Pipeline Autoscaling via In\-Context Reinforcement Learning

**Authors:** Jianchang Su; Yifan Zhang; Shengkai Lin; Shizhen Zhao; YUSHENG ZHENG; Yiwei Yang; Wei Zhang

**ID:** 155120 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8GrzZnygOz>) | [PDF](<https://openreview.net/pdf?id=8GrzZnygOz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155120>)

Multi\-stage ML inference pipelines are difficult to autoscale because of heterogeneous resources, cross\-stage coupling, and dynamic bottleneck migration\. Production controllers ignore cross\-stage effects, and learning\-based autoscalers require offline training data that is unavailable for new pipelines\. We present SAIR, an autoscaler for the zero\-shot deployment regime that uses an LLM as an in\-context reinforcement learning controller, improving its policy online from reward\-labeled experience tuples in the LLM's context with no gradient updates\. SAIR combines Pareto\-dominance reward shaping with a provable separation margin between dominated and non\-dominated actions, Bayesian\-surprise experience retrieval, and a user\-space CUDA interception layer that delivers continuous GPU rate control with sub\-millisecond actuation overhead\. We prove a regret bound that decomposes into retrieval coverage and LLM selection components, each mapping to a concrete SAIR mechanism\. On four ML serving pipelines under three workload patterns, SAIR achieves the best or tied\-best P99 latency in every configuration \(up to 50\\% reduction over the next baseline\); billable cost is reduced through replica consolidation, and effective cost \(which captures GPU rate\-control savings under co\-location or MIG\) by up to 97\\%\. SAIR reaches 86\\% bottleneck detection accuracy without any offline training\.

## Scalable Multi\-Agent Contrastive Reinforcement Learning

**Authors:** Victor Augusto Kich; Satoshi Yamamori; Jun Morimoto

**ID:** 151201 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cCWvLZocDZ>) | [PDF](<https://openreview.net/pdf?id=cCWvLZocDZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151201>)

_Abstract unavailable from the accessible public sources._

## Breaking the Bias Barrier in Concave Multi\-Objective Reinforcement Learning

**Authors:** Swetha Ganesh; Jason Chia; Vaneet Aggarwal

**ID:** 154531 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ctg1L7RlkF>) | [PDF](<https://openreview.net/pdf?id=Ctg1L7RlkF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154531>)

_Abstract unavailable from the accessible public sources._

## DiversePlace: Diversity\-Seeking Curriculum Reinforcement Learning for Macro Placement

**Authors:** Wenrui Zhou; Jiashun Liu; Wenji Fang; Zhiyao Xie; Ling Pan

**ID:** 154452 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DSqfxgcLo1>) | [PDF](<https://openreview.net/pdf?id=DSqfxgcLo1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154452>)

Macro placement is a critical early\-stage decision in physical design because macro locations strongly constrain subsequent implementation stages\. The task is difficult because these high\-impact discrete decisions must be made before downstream quality can be measured accurately, forcing training to rely on fast but imperfect training\-time oracles such as half\-perimeter wirelength \(HPWL\)\. Existing RL\-based placers therefore mostly optimize single HPWL\-driven solutions, and their long sequential horizons often require heavy search assistance or offline expert data while leaving little room to preserve multiple competitive layouts\. We address this gap by making quality\-controlled diversity an explicit objective for macro placement\. Instead of relying on a single proxy\-optimal solution, we maintain a compact archive of HPWL\-competitive yet meaningfully different placements for downstream selection\. We realize this idea in DiversePlace, a curriculum proximal policy optimization \(PPO\) framework that combines a quality\-gated diversity reward with an expanding placement horizon, enabling from\-scratch RL optimization while keeping exploration inside competitive HPWL regions\. On the ISPD2005 benchmarks, DiversePlace consistently improves top\-5, top\-10, and top\-20 archive diversity and achieves lower or virtually identical HPWL on all eight designs with better efficiency\. Our code is available at https://anonymous\.4open\.science/r/NIPS2026\-DiversePlace\-A615\.

## Two is better than one: A Collapse\-free Multi\-Reward RLIF Training Framework

**Authors:** Shourov Joarder; Diganta Sikdar; Ahsan H Akash; Binod Bhattarai; Prashnna K Gyawali

**ID:** 154502 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D8K5QK3kwT>) | [PDF](<https://openreview.net/pdf?id=D8K5QK3kwT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154502>)

Reinforcement learning with verifiable rewards \(RLVR\) has substantially improved the reasoning ability of LLMs, but often depends on external supervision from human annotations or gold\-standard solutions\. Reinforcement learning from internal feedback \(RLIF\) has recently emerged as a scalable unsupervised alternative, using signals extracted from the model itself\. However, existing RLIF methods typically rely on a single internal reward, which can lead to reward hacking, entropy collapse, and degraded reasoning structure\. We propose a multi\-reward RLIF framework that decomposes the training signal into two complementary components: an answer\-level reward based on cluster voting and a completion\-level reward based on token\-wise self\-certainty\. To combine these signals robustly, we apply GDPO\-based normalization to reduce reward\-scale imbalance\. We further introduce KL\-Cov regularization, which targets low\-entropy token distributions responsible for disproportionate entropy reduction, preserving exploration and preventing late\-stage collapse\. Across mathematical reasoning and code\-generation benchmarks, our method improves stability and robustness over prior unsupervised RL approaches, while achieving performance close to supervised RLVR methods\. These results show that complementary internal rewards, combined with targeted regularization, can support stable long\-horizon reasoning without relying on external ground\-truth supervision\.

## Learning to Audit ML Models with Theory of Mind

**Authors:** Yao Rong; Vaibhav Unhelkar

**ID:** 155783 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2vhiHLMdzi>) | [PDF](<https://openreview.net/pdf?id=2vhiHLMdzi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155783>)

When auditing machine learning models, human experts sequentially inspect model predictions and explanations, gradually building a mental model of the model’s behavior to uncover errors\. This manual process is critical for safe deployment in high\-stakes domains but fundamentally limited in scalability\. In this work, we propose a novel method to simulate this human auditing behavior for automating the auditing process\. We formalize auditing as a sequential decision\-making problem, modeled as a Markov decision process\. Our state representation summarizes the auditor’s accumulated knowledge of model predictions and feature usage\. Building on this formalization, we solve the MDP using reinforcement learning, yielding RLAuditor, which learns to select informative test samples to efficiently uncover model errors\. We further connect our formalization to Theory of Mind, showing that our state mirrors how human auditors build mental models: its update rule is equivalent to Bayesian belief revision and it converges to the model’s behavioral pattern at an interpretable rate\. We validate our approach on multiple ML models and datasets across different data modalities\. In a human subject study, we demonstrate that RLAuditor helps human auditors produce more accurate audit reports in less time\.

## Generalized Intention Modeling in Multi\-Agent Reinforcement Learning

**Authors:** Mateusz Odrowaz\-Sypniewski; Jasmine Bayrooti; Ajay Shankar; Amanda Prorok

**ID:** 151588 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZSayYS6nBW>) | [PDF](<https://openreview.net/pdf?id=ZSayYS6nBW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151588>)

Modeling an opponent’s intent is critical for effective decision\-making in non\-cooperative, competitive, and general\-sum multi\-agent reinforcement learning\. Existing opponent modeling methods encode intent using an embedding derived from episode information chosen a priori, such as the opponent’s next action or a future environment state, and use this to guide the ego\-agent’s behavior\. These approaches assume that the chosen information is universally representative of intent; however, we show empirically that this is not the case as intentions are often task\- and environment\-dependent\. To address this, we introduce a task\-adaptive opponent modeling framework that learns a performance\-driven mixture of multiple intent representations\. We further introduce a new intention representation that maximizes mutual information with the ego\-agent’s future returns, thereby capturing opponent information that is most directly relevant to performance\. Our approach consistently matches or exceeds the performance of state\-of\-the\-art baselines across diverse tasks and yields insights into when and why different opponent modeling strategies succeed\.

## GDMD: Guiding Distribution Matching Distillation with Gradient\-Based Reinforcement Learning

**Authors:** Linwei Dong; Ruoyu Guo; Ge Bai; Quan Zheng; Yawei Luo; Changqing Zou

**ID:** 152678 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RFJrFfNSEC>) | [PDF](<https://openreview.net/pdf?id=RFJrFfNSEC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152678>)

Diffusion distillation, exemplified by Distribution Matching Distillation \(DMD\), has shown great promise in few\-step generation but often sacrifices quality for sampling speed\. While integrating Reinforcement Learning \(RL\) into distillation offers potential, a naive fusion of these two objectives relies on suboptimal raw sample evaluation\. This sample\-based scoring creates inherent conflicts with the distillation trajectory and produces unreliable rewards due to the noisy nature of early\-stage generation\. To overcome these limitations, we propose GDMD, a novel framework that redefines the reward mechanism by prioritizing distillation gradients over raw pixel outputs as the primary signal for optimization\. By reinterpreting the DMD gradients as implicit target tensors, our framework enables existing reward models to directly evaluate the quality of distillation updates\. This gradient\-level guidance functions as an adaptive weighting that synchronizes the RL policy with the distillation objective, effectively neutralizing optimization divergence\. Empirical results show that GDMD sets a new SOTA for few\-step generation\. Specifically, our 4\-NFE \(Number of Function Evaluations\) models outperform the quality of their multi\-step teacher and substantially exceed previous DMDR results in GenEval and human\-preference metrics, exhibiting strong scalability potential\.

## PAIR: Prefix\-Aware Internal Reward Model for Multi\-Turn Agent Optimization

**Authors:** Wonjoong Kim; Yeonjun In; Sangwu Park; Dongha Lee; Chanyoung Park

**ID:** 156086 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0Ut88MX4Oj>) | [PDF](<https://openreview.net/pdf?id=0Ut88MX4Oj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156086>)

A significant hurdle for current LLMs is the execution of complex, multi\-stage tasks\.  Group Relative Policy Optimization \(GRPO\) has been emerging as a leading choice, but its reliance on sparse outcome rewards severely limits credit assignment across intermediate steps\. Existing remedies—running full rollouts to assign step\-level advantages, calling external LLM judges at each step, or computing intrinsic rewards that require ground\-truth answers at every evaluation—introduce significant costs or practical constraints\.  We hypothesize that internal correctness probing over LLM hidden states can be repurposed as a step\-level reward signal, potentially addressing all of these limitations at once\.  However, existing probing research assumes clean inputs, and we first show that this assumption breaks down in multi\-step settings: hidden\-state probes degrade severely under prefix contamination—tracking coherence with the \(possibly corrupted\) prefix rather than grounded correctness—while attention\-based features remain robust to contamination but underperform on clean prefixes\. Building on this complementary relationship, we propose the Prefix\-Aware Internal Reward \(PAIR\)—a two\-stage model with a frozen hidden\-state probe estimating belief\-consistency and a lightweight attention\-based head correcting it toward grounded correctness\. Experimental results show that PAIR achieves the highest AUROC on contaminated trajectories while operating at negligible inference cost, enabling dense step\-level reward signals for GRPO training without external model calls, ground\-truth dependencies, or full\-trajectory rollouts\.

## Learning to Explore with Parameter\-Space Noise: A Deep Dive into Parameter\-Space Noise for Reinforcement Learning with Verifiable Rewards

**Authors:** Bizhe Bai; Xinyue Wang; Peng Ye; Tao Chen

**ID:** 154785 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B0ocUGMRAN>) | [PDF](<https://openreview.net/pdf?id=B0ocUGMRAN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154785>)

Reinforcement Learning with Verifiable Rewards \(RLVR\)  enhances large language model \(LLM\) reasoning, yet growing evidence indicates an \\emph\{exploration ceiling\}: they tend to reweight existing solution traces and produce low\-diversity rollouts\. This restricts the discovery of novel solution perspective and weakens out\-of\-distribution generalization\. We address this limitation by directly perturbing the rollout policy's parameters while updating the clean policy model as usual, an approach that achieves better temporal consistency and yields more complex behavior patterns\. To stabilize learning from these perturbed rollouts, which are inherently off\-policy, we incorporate truncated importance sampling\. Furthermore, we introduce a lightweight, dynamic noise scheduler based on semantic diversity and model self\-certainty to optimally adjust the noise scale\. Instantiated on GRPO, our method \(PSN\-GRPO\) demonstrates its efficacy through four key contributions: \(1\) it improves high\-budget pass@$k$, increases semantic and operational diversity, increases CoT consistency, and remains complementary to  exploration\-oriented RLVR techniques; \(2\) it validates efficacy across multiple models, including Qwen2\.5, Qwen3, and Llama\-3\.1; \(3\) it shows robust performance on out\-of\-distribution science and coding benchmarks; and \(4\) it uncovers novel solution perspectives for problems the original model could not solve, as shown by qualitative analysis\.

## Shared Modular Recurrence in Contextual MDPs for Universal Morphology Control

**Authors:** Laurens Engwegen; Max Weltevrede; Caroline Horsch; Daan Brinks; Wendelin Boehmer

**ID:** 154044 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gegwgu6VmY>) | [PDF](<https://openreview.net/pdf?id=Gegwgu6VmY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154044>)

A universal controller for any robot morphology would greatly improve computational and data efficiency\. Steps have been made towards such multi\-robot control by utilizing \*contextual\* information about the properties of individual robots and exploiting their modular structure in the architecture of deep reinforcement learning agents\. When the robots have highly dissimilar morphologies, however, this becomes a challenging problem, especially when the agent must generalize to new, unseen robots\. In this paper, we posit that contextual features are often only partially available, but that they can be recovered through modular interactions\. This can allow for better multi\-robot control and generalization to contexts that are not seen during training\. To this extent, we implement a transformer\-based architecture with shared modular recurrence and evaluate its \(generalization\) performance on a large set of MuJoCo robots\. The results show a substantial improvement in zero\-shot generalization performance on robots with unseen dynamics, kinematics, and topologies, in four different environments\.

## Unveiling Implicit Advantage Symmetry: Why GRPO Struggles with Exploration and Difficulty Adaptation

**Authors:** zhiqi yu; Zhangquan Chen; Mengting Liu; Heye Zhang; Liangqiong Qu

**ID:** 153467 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L7H48b3yB6>) | [PDF](<https://openreview.net/pdf?id=L7H48b3yB6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153467>)

Reinforcement Learning with Verifiable Rewards \(RLVR\), particularly GRPO, has become the standard for eliciting LLM reasoning\. However, its efficiency in exploration and difficulty adaptation remains an open challenge\. In this work, we identify an implicit advantage symmetry inherent in Group Relative Advantage Estimation \(GRAE\) as a structural property that provides a new perspective for understanding these bottlenecks\. This symmetry induces two critical limitations: \(i\) at the group level, strict symmetry in weights between correct and incorrect trajectories leaves unsampled action logits unchanged, thereby hindering the exploration of novel correct solution\. \(ii\) at the sample level, the algorithm implicitly prioritizes medium\-difficulty samples, remaining agnostic to the non\-stationary demands of difficulty focus\. Through controlled experiments, we reveal that this symmetric property is sub\-optimal, yielding two pivotal insights: \(i\) asymmetrically down\-weighting the advantages of correct trajectories encourages essential exploration but risks instability; \(ii\) learning efficiency can be boosted by a curriculum\-like transition—prioritizing simpler samples initially before gradually shifting to complex ones\. Motivated by these findings, we propose Asymmetric GRAE \(A\-GRAE\), which dynamically modulates exploration incentives and sample\-difficulty focus\. Experiments across seven benchmarks demonstrate that A\-GRAE consistently improves GRPO and its variants across both LLMs and MLLMs\.

## Reinforcement Learning for View\-Adaptive Distillation in 3D Gaussian Compression

**Authors:** Hongji Zhao; Mingrui Zhu; Xin Wei; Nannan Wang

**ID:** 154966 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9Zj1SPUYtA>) | [PDF](<https://openreview.net/pdf?id=9Zj1SPUYtA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154966>)

_Abstract unavailable from the accessible public sources._

## The Mirage of Optimizing Training Policies: Monotonic Inference Policies as the Real Objective for LLM Reinforcement Learning

**Authors:** Jing Liang; Hongyao Tang; Yi Ma; Yancheng He; Weixun Wang; Xiaoyang Li; Wenbo Su; Jinyi Liu; YAN ZHENG; Jianye Hao; Bo Zheng

**ID:** 151835 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XZFFNg98QZ>) | [PDF](<https://openreview.net/pdf?id=XZFFNg98QZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151835>)

_Abstract unavailable from the accessible public sources._

## Benign Reinforcement Learning Can Amplify Latent Backdoors

**Authors:** Chen Lai; Javier Rando; Nicholas Carlini; Yiming Zhang

**ID:** 149677 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oGkR8QUVmY>) | [PDF](<https://openreview.net/pdf?id=oGkR8QUVmY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149677>)

_Abstract unavailable from the accessible public sources._

## Distill to Think, Foresee to Act: Cognitive\-Physical Reinforcement Learning for Autonomous Driving

**Authors:** Yang Wu; Qiang Meng; Zhaojiang Liu; Youquan Liu; Jian Yang; Jin Xie

**ID:** 153115 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Nnj4imYoT2>) | [PDF](<https://openreview.net/pdf?id=Nnj4imYoT2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153115>)

_Abstract unavailable from the accessible public sources._

## Improved Regret bounds in Tabular Reinforcement Learning under Local Differential Privacy

**Authors:** Hugo Richard

**ID:** 153585 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KKggS9jfaS>) | [PDF](<https://openreview.net/pdf?id=KKggS9jfaS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153585>)

_Abstract unavailable from the accessible public sources._

## Reinforcement Learning for View\-Adaptive Distillation in 3D Gaussian Compression

**Authors:** Hongji Zhao; Mingrui Zhu; Xin Wei; Nannan Wang

**ID:** 154966\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154966

[Paper](<https://openreview.net/forum?id=9Zj1SPUYtA>) | [PDF](<https://openreview.net/pdf?id=9Zj1SPUYtA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154966>)

_Abstract unavailable from the accessible public sources._

## The Mirage of Optimizing Training Policies: Monotonic Inference Policies as the Real Objective for LLM Reinforcement Learning

**Authors:** Jing Liang; Hongyao Tang; Yi Ma; Yancheng He; Weixun Wang; Xiaoyang Li; Wenbo Su; Jinyi Liu; YAN ZHENG; Jianye Hao; Bo Zheng

**ID:** 151835\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151835

[Paper](<https://openreview.net/forum?id=XZFFNg98QZ>) | [PDF](<https://openreview.net/pdf?id=XZFFNg98QZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151835>)

_Abstract unavailable from the accessible public sources._

## Benign Reinforcement Learning Can Amplify Latent Backdoors

**Authors:** Chen Lai; Javier Rando; Nicholas Carlini; Yiming Zhang

**ID:** 149677\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149677

[Paper](<https://openreview.net/forum?id=oGkR8QUVmY>) | [PDF](<https://openreview.net/pdf?id=oGkR8QUVmY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149677>)

_Abstract unavailable from the accessible public sources._

## EDEN: Emergent Dynamics in Evolutionary Neural\-networks for Robust Continuous Control

**Authors:** Chi Zhang; Jinge Li; Yifei Wang; Lei Wang; Tianyi Qian

**ID:** 149481 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=poYoNCBETT>) | [PDF](<https://openreview.net/pdf?id=poYoNCBETT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149481>)

Biological neural systems leverage neuronal heterogeneity and diverse firing patterns to generate rich nonlinear dynamics, yet these mechanisms are largely abstracted away in conventional artificial neural networks \(ANNs\) and simplified spiking neural networks \(SNNs\)\. Detailed differential\-equation neural models are biologically expressive, but spike discontinuities and complex state evolution pose challenges for gradient\-based optimization in complex functional tasks\. To address this challenge, we introduce EDEN \(Emergent Dynamics in Evolutionary Neural\-Networks\), a neural dynamic model training framework inspired by natural evolutionary processes\. Built upon a continuous\-time network of heterogeneous Izhikevich neurons, EDEN integrates efficient parallel neural dynamics simulation with advanced evolutionary strategies, enabling the joint optimization of intrinsic single\-neuron\-level parameters and network\-level synaptic connections without backpropagation\. Comprehensive evaluations across multiple MuJoCo continuous motor control tasks indicate that EDEN achieves robust control performance comparable to mainstream deep reinforcement learning baselines\. Furthermore, neurodynamic analysis reveals that the trained EDEN models exhibit strong biological plausibility, characterized by functional differentiation across individual neurons and emergent low\-dimensional latent manifolds governing population dynamics\. EDEN demonstrates that the combination of gradient\-free evolutionary strategies and biological neurodynamic networks provides an alternative yet efficient paradigm alongside mainstream reinforcement learning, thereby offering a highly promising pathway towards truly biologically\-inspired intelligence\.

## Self\-Evolving Agents Should Build Internal and External Models of the World

**Authors:** Luiz Felipe Vecchietti; Bryan Nathanael Wijaya; Wenchao Dong; Meeyoung Cha

**ID:** 140109 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7rbDYy6sQn>) | [PDF](<https://openreview.net/pdf?id=7rbDYy6sQn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140109>)

Developing self\-evolving agents that learn continuously from streams of information represents an emerging frontier in artificial intelligence\. This capability is critical for efficiently updating computationally expensive systems such as foundation models\. When agents learn by exploring the environment and interacting with other agents to achieve multiple tasks over time, two sources of non\-stationarity emerge: shifting task distributions and co\-evolving peers\. However, developing frameworks for continual multi\-agent reinforcement learning \(CMARL\) and effective policy improvement remains challenging\. In this paper, we argue that training self\-evolving agents should incorporate two classes of model\-based principles: internal models that allow an agent to compare policy checkpoints, monitor its learning capacity, and represent its current objective; and external models that learn environment dynamics and the behavior of other agents\. We anticipate that discussion on these principles will facilitate the design of algorithms, architectures, and benchmarks that explicitly evaluate model\-based components in CMARL\.

## There are Levels to It: Red Teaming LLMs with Hierarchical Reinforcement Learning

**Authors:** Roman Belaire; Arunesh Sinha; Pradeep Varakantham

**ID:** 153243 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MgRh8Pu9er>) | [PDF](<https://openreview.net/pdf?id=MgRh8Pu9er>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153243>)

Red teaming is essential for securing Large Language Models, yet current automated methods remain limited by templates and single\-turn attacks\. To simulate the complex, interactive nature of real\-world adversarial attacks, we introduce a novel red teaming paradigm designed to maximize expected cumulative harm through strategic interaction\. By formalizing red teaming as a Markov Decision Process in a hierarchical reinforcement learning framework, we navigate the challenges of sparse rewards and long\-horizon planning\. Our generative agent learns diverse, multi\-turn attacks using a token\-level harm reward, consistently uncovering vulnerabilities that bypass baselines\. This approach achieves a new state of the art and reframes LLM red teaming as a principled, trajectory\-based process\.

## RAHF: Reward\-Amplified Human Feedback for Closed\-Loop Policy Fine\-Tuning

**Authors:** Haoyuan Cai; Seth Zhao; Jason Zhang; Bolei Zhou

**ID:** 148691 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vlvxAFUKlx>) | [PDF](<https://openreview.net/pdf?id=vlvxAFUKlx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148691>)

Policies trained on offline logs can perform well in open\-loop evaluation but fail in closed\-loop deployment, because they never learn to recover from their own mistakes\. Fine\-tuning these policies typically requires either many human demonstrations or large\-scale reinforcement learning rollouts, both of which are expensive\. We propose RAHF, a two\-stage closed\-loop fine\-tuning framework that reduces human effort by amplifying a small number of human corrections with a cheap verifiable reward\. In Stage 1, a human operator monitors the policy during closed\-loop rollout and intervenes at dangerous states, producing a small but targeted correction dataset that also keeps the training process safe\. In Stage 2, the improved policy runs without any human involvement\. At each step, the verifiable reward scores the policy's candidate proposals\. We use these reward scores to construct group\-normalized advantages and fine\-tune the policy toward the higher\-advantage proposals\. To prevent the policy from forgetting its pretrained knowledge, we propose a Policy Adaptation Module \(PAM\) that freezes the pretrained weights and learns closed\-loop corrections through a separate trainable branch\. On BridgeSim\-NavHard, RAHF with a human teacher reaches a driving score of 78\.90, surpassing all baselines including DAgger, HG\-DAgger, GRPO, and AWR\. In addition, PAM reduces forgetting and enables zero\-shot transfer to HUGSIM without any additional fine\-tuning\.

## Mitigating Overgeneralization in RND via Spectral Target Design

**Authors:** Minseok Jeong; Yechan Lee; Hyewon Choi; Jeongyong Yang; SooJean Han

**ID:** 148343 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yYvDH6yl2q>) | [PDF](<https://openreview.net/pdf?id=yYvDH6yl2q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148343>)

Random Network Distillation \(RND\) is a scalable novelty signal for reinforcement learning, but it can overgeneralize: the predictor extrapolates the random target off the data manifold, causing novelty scores to collapse on unfamiliar inputs\. This paper analyzes this failure through a kernel\-theoretic lens\. Under a GP target model and an NTK\-regime predictor, we show that the expected RND energy is a cross\-kernel residual governed jointly by the target covariance kernel and the predictor interpolation kernel\. This identifies overgeneralization as spectral under\-excitation of modes where predictor residuals would otherwise survive\. We then explicitly formulate spectral target design as a principle for shaping RND residual geometry; one concrete instance is replacing to replace the implicit random\-network target with a bandwidth\-controlled Random Fourier Feature \(RFF\) target\. Numerical experiments across offline D4RL and online Atari benchmarks show this target\-design approach improves novelty discrimination and downstream RL performance\.

## Meta\-TTRL: A Metacognitive Framework for Self\-Improving Test\-Time Reinforcement Learning for T2I Generation in Unified Multimodal Models

**Authors:** Lit Sin Tan; Junzhe Chen; Xiaolong Fu; Lichen Ma; Junshi Huang; Jianzhong Shi; Yan Li; Lijie Wen

**ID:** 154244 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FCG3whxlfW>) | [PDF](<https://openreview.net/pdf?id=FCG3whxlfW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154244>)

Test\-time scaling \(TTS\) improves text\-to\-image \(T2I\) generation in unified multimodal models \(UMMs\), but existing TTS methods typically rely on frozen\-parameter search or sampling, yielding only ephemeral, instance\-level improvements\. We propose Meta\-TTRL, a metacognitive test\-time reinforcement learning \(TTRL\) framework that converts test\-time generation experience into learning signals, enabling UMMs to self\-improve during T2I generation without external reward models\. Meta\-TTRL formulates test\-time learning as a closed\-loop interaction between an object\-level generator and a meta\-level introspector\. The introspector decomposes prompts into structured verification rubrics and produces confidence\-enhanced intrinsic monitoring signals, which are used to optimize the generator policy through reinforcement learning \(RL\)\. Extensive experiments demonstrate that Meta\-TTRL generalizes well across three representative UMMs, including Janus\-Pro\-7B, BAGEL, and Qwen\-Image, achieving significant gains on compositional reasoning tasks and multiple T2I benchmarks with limited data\. Further analyses with external introspectors, RL leakage, and alternative monitoring signals reveal a key principle for effective TTRL: metacognitive synergy, where monitoring signals must align with the model's own optimization regime\.

## Escaping Path Mirages in Offline Goal\-Conditioned Reinforcement Learning

**Authors:** Seungyul Han; Junhyeon Bae; Jaebak Hwang; Gwanwoo Choi; Minung Kim

**ID:** 151359 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b9QDpSzHr4>) | [PDF](<https://openreview.net/pdf?id=b9QDpSzHr4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151359>)

Offline goal\-conditioned reinforcement learning remains challenging in stochastic long\-horizon settings, where compounding value estimation errors hinder reliable goal reaching\. While prior methods have sought to address this challenge through various approaches, a key challenge remains path mirage, where agents overcommit to spuriously successful trajectories in offline datasets induced by stochasticity, often leading to failure on difficult tasks\. To address this issue, we propose Branch\-aware Graph Planning \(BGP\), which captures stochastic branching structures by identifying high\-variability points as graph nodes and designing goal\-conditioned edges with segmented learning to avoid unreliable branches and reduce unnecessary stochasticity along paths\. As a result, BGP enables reliable goal reaching even in highly stochastic long\-horizon environments, and experiments on diverse OGBench tasks show that it substantially outperforms prior state\-of\-the\-art offline goal\-conditioned RL methods\.

## Escaping Path Mirages in Offline Goal\-Conditioned Reinforcement Learning

**Authors:** Seungyul Han; Junhyeon Bae; Jaebak Hwang; Gwanwoo Choi; Minung Kim

**ID:** 151359\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151359

[Paper](<https://openreview.net/forum?id=b9QDpSzHr4>) | [PDF](<https://openreview.net/pdf?id=b9QDpSzHr4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151359>)

Offline goal\-conditioned reinforcement learning remains challenging in stochastic long\-horizon settings, where compounding value estimation errors hinder reliable goal reaching\. While prior methods have sought to address this challenge through various approaches, a key challenge remains path mirage, where agents overcommit to spuriously successful trajectories in offline datasets induced by stochasticity, often leading to failure on difficult tasks\. To address this issue, we propose Branch\-aware Graph Planning \(BGP\), which captures stochastic branching structures by identifying high\-variability points as graph nodes and designing goal\-conditioned edges with segmented learning to avoid unreliable branches and reduce unnecessary stochasticity along paths\. As a result, BGP enables reliable goal reaching even in highly stochastic long\-horizon environments, and experiments on diverse OGBench tasks show that it substantially outperforms prior state\-of\-the\-art offline goal\-conditioned RL methods\.

## Unleashing the Power of Intrinsic\-Entropy\-Driven Exploration for Off\-Policy Generative RL

**Authors:** Feihong Zhang; Guojian Zhan; yinuo Wang; Letian Tao; Likun Wang; Shiqi Liu; Yao Lyu; Shengbo Eben Li

**ID:** 150470\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150470

[Paper](<https://openreview.net/forum?id=hnh5y3DwoB>) | [PDF](<https://openreview.net/pdf?id=hnh5y3DwoB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150470>)

Generative models, such as diffusion and flow\-based models, have emerged as powerful policy approximators in deep reinforcement learning \(RL\) due to their ability to represent multi\-modal action distributions\. However, their potential for maximum entropy RL remains largely untapped, as most existing methods treat generative processes as black\-box samplers or rely on heuristic noise\. In this paper, we propose GENIEO, a novel off\-policy generative RL framework that leverages the exact intrinsic entropy of an augmented dummy\-action policy to drive principled exploration\. By designing a structurally invertible affine dual\-variable flow, we bypass the numerical approximations of standard ODE solvers\. This innovation allows us to rigorously apply the change\-of\-variables formula to derive a tractable and exact formulation for the augmented dummy\-action policy entropy, enabling its direct integration into the off\-policy learning objective\. Experimental evaluations across 14 challenging tasks from the DMControl and HumanoidBench suites demonstrate that GENIEO achieves state\-of\-the\-art \(SOTA\) performance\. By effectively discovering optimal strategies in complex, high\-dimensional environments, our approach bridges the gap between expressive generative modeling and maximum entropy RL\.

## Non\-Asymptotic Best Policy Identification Guarantees in Online Reinforcement Learning

**Authors:** Joseph Lazzaro; Alessio Russo; Aldo Pacchiano

**ID:** 155132\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155132

[Paper](<https://openreview.net/forum?id=8AVpizcVK2>) | [PDF](<https://openreview.net/pdf?id=8AVpizcVK2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155132>)

In this work we study the Best Policy Identification \(BPI\) problem in online, tabular Reinforcement Learning\. This is an active sequential hypothesis testing problem in which the learner's objective is to identify an optimal policy in a Markov Decision Process \(MDP\) with high confidence, while minimizing the expected sample complexity to do so\. We consider an online setting with deterministic rewards, where the agent must strategically navigate through the MDP in order to effectively explore\. Previous works in the literature have provided asymptotically optimal methods for BPI, such as the Navigate and Stop \(NaS\) algorithm and its variants, however existing analysis remains asymptotic\. In this work, we fill that gap by providing the first non\-asymptotic sample complexity guarantees for NaS, showing that its sample complexity depends not only on the characteristic time, but also on the connectivity of the underlying MDP, the curvature of the optimal characteristic time, and other instance\-dependent quantities\. We identify these additional attributes and make explicit their contributions to the overall sample complexity\.

## HiFloat4 Format for End\-To\-End Reinforcement Learning Post\-Training of Large Language Models

**Authors:** Hei Yi Mak; Shadan Golestan; Hoang Le; Mehran Taghian Jazi; Yunke Peng; Yaoyuan Wang; Yao Wang; JUNSONG WANG; Tianchi Hu; Fengchen He; Guipeng Hu; Tanzila Rahman; Anandharaju D Raju

**ID:** 154752\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154752

[Paper](<https://openreview.net/forum?id=BDwmB9cg99>) | [PDF](<https://openreview.net/pdf?id=BDwmB9cg99>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154752>)

We present, to our knowledge, the first end\-to\-end FP4 RL post\-training, in which both the rollout and training policies, including their forward and backward passes, operate at 4\-bit precision\. A systematic study reveals that the dominant source of degradation in FP4 RL is not training\-side quantization error but rollout activation quantization: outliers stretch the dynamic range so far that a large number of activation values underflow to zero under FP4\. Counterintuitively, restoring the training policy to higher precision while keeping the rollout in FP4 makes accuracy worse than full FP4 baseline, exposing rollout–training mismatch as the principal failure mode and ruling out standard pretraining\-style fixes\. We address this with Rollout Residual Quantization \(Rollout\-ResQ\): a single residual correction term constrained to a hardware\-friendly sparsity pattern, added only to the FP4 rollout matmul — a lightweight correction that recovers most of the precision lost to outlier\-driven  underflow without inflating the rollout’s compute footprint\. On Qwen2\.5\-3B and Qwen2\.5\-Math\-7B, Rollout\-ResQ paired with the HiFloat4 \(HiF4\) format — whose three\-level hierarchical scaling preserves resolution under FP4’s tight 4\-bit budget — closes the accuracy gap to BF16 from 4\.9% to 1\.1%, bringing fully quantized FP4 RL within striking distance of full precision\. Applied to the open\-standard  MXFP4, the same recipe narrows the gap from 13\.6% to 5\.3%, revealing that FP4 format choice is a key factor that determines the ceiling on recoverable accuracy\. Together, these results establish HiF4 as the enabling format for end\-to\- end FP4 RL post\-training, and Rollout\-ResQ as the activation\-side mechanism that makes the gap to BF16 closable\.

## DetailAnywhere: Fashion Detail Generation via Cross\-Modal Feature Alignment Distillation

**Authors:** Zijun Li; Yimin Zhou; Jia Sun; Honglie Wang; Pengcheng Wei; junlong wu; Yongrui Heng; Jiyuan Wang; Huan Ouyang; Boheng Zhang; Huaiqing Wang; Dewen Fan; Qianqian Gan; Fan Yang; Tingting Gao

**ID:** 151134 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ckGG0WagkI>) | [PDF](<https://openreview.net/pdf?id=ckGG0WagkI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151134>)

Diffusion\-based generative AI has achieved remarkable success in e\-commerce applications such as virtual try\-on, poster generation, and product background synthesis\. However, when making online purchasing decisions for apparel, consumers also desire the freedom to examine specific detail regions of interest, such as collars, cuffs, and fabric textures, yet existing methods have not explicitly studied this setting\. We therefore formalize a new, non\-template task: Fashion Detail Generation with focus conditioning, and release \*\*FDBench\*\*, the first dataset and benchmark comprising 40K\+ human\-verified reference\-detail pairs across 41 different categories\. This task poses a unique semantic gap challenge: the model must bridge the correspondence between a focus marker on a product reference image and a photorealistic close\-up view of the indicated region, while faithfully preserving the garment's identity, without any precise prompt\. To bridge this gap, we propose Cross\-modal Feature Alignment Distillation \(\*\*CFAD\*\*\), which leverages a fine\-tuned DINOv3 teacher to align both branches of a Multimodal Diffusion Transformer in a shared semantic space via dual\-branch distillation\. To further improve consistency between generated details and reference images, we introduce a consistency reward model that jointly scores image pairs along three quality axes and optimizes generation via reinforcement learning\. Experiments show that our model \*\*DetailAnywhere\*\* significantly outperforms all state\-of\-the\-art opensource methods across all metrics and human evaluations\.

## Distribution\-Adaptive Policy Optimization

**Authors:** Yuxiao He; Ziqi Wang; Xingzhou Lou; Xiaoqian Liu; Junge Zhang

**ID:** 155766 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=35C6J7b2RQ>) | [PDF](<https://openreview.net/pdf?id=35C6J7b2RQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155766>)

Reinforcement Learning with Verifiable Rewards empowers Large Language Models to enhance their reasoning capabilities\. Most algorithms rely on on\-policy training, which is stable but inefficient due to its strict dependency on fresh samples\. To overcome this inefficiency, off\-policy RL decouples experience generation from policy optimization via Importance Sampling \(IS\)\. However, this introduces a policy discrepancy between the behavior policy and the target policy\. We observe that mainstream RLVR algorithms struggle to maintain a balance between performance and stability in off\-policy scenarios, suffering from either severe performance degradation or training collapse\. We identify the root cause as the failure of static trust regions to maintain the bias\-\-variance trade\-off associated with IS ratios in off\-policy settings\. To address this, we propose \*\*DI\*\*stribution\-adaptive \*\*P\*\*olicy \*\*O\*\*ptimization \(\*\*DIPO\*\*\), a novel hyperparameter\-free RLVR algorithm employing an adaptive trust region\. DIPO leverages the intrinsic statistics of the IS ratio distribution to achieve a robust bias\-\-variance trade\-off\. Experimental results demonstrate that DIPO enables stable training in extreme off\-policy scenarios, achieving performance comparable to or even surpassing the on\-policy baseline, and outperforming other off\-policy baselines by 13\.9%\.

## LEAD: Length\-Efficient Adaptive and Dynamic Reasoning for Large Language Models

**Authors:** Songtao Wei; Yi Li; Zhikai Li; Xu Hu; Yuede Ji; Guanpeng Li; Feng Chen; Carl Yang; Zhichun Guo; Bingzhe Li

**ID:** 149222 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rztqc0ADFS>) | [PDF](<https://openreview.net/pdf?id=rztqc0ADFS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149222>)

Large reasoning models, such as OpenAI o1 and DeepSeek\-R1, tend to become increasingly verbose as their reasoning capabilities improve\. These inflated Chain\-of\-Thought \(CoT\) trajectories often exceed what the underlying problems require, wasting compute, latency, and context budgets\. While introducing length\-based efficiency rewards during reinforcement learning offers a natural remedy, existing methods struggle with two fundamental challenges: the optimal balance between correctness and efficiency is non\-stationary throughout training, and intrinsic reasoning budgets vary drastically across problems\. Relying on static reward weights and global length constraints inevitably forces a compromise between degraded accuracy and unrealized compression\. To overcome these limitations, we propose LEAD \(Length\-Efficient Adaptive and Dynamic reasoning\), a method that replaces static heuristics with online, self\-adaptive mechanisms\. LEAD dynamically calibrates the correctness\-efficiency trade\-off at each step using a Potential\-Scaled Instability, directing optimization capacity to the most informative learning signal\. Furthermore, it estimates an adaptive per\-problem target length online based on the model’s own correct rollouts, applying a symmetric efficiency reward that penalizes both overthinking and over\-compression\. Evaluated on five mathematical reasoning benchmarks, LEAD achieves the highest accuracy and Accuracy\-Efficiency Score among RL\-trained efficient\-reasoning methods while producing substantially shorter outputs than the base model\.

## Learning When to Think: Adaptive Internal Computation for Reinforcement Learning

**Authors:** Rohit Kumar Salla; Simon Stepputtis

**ID:** 153029 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OYg4xrS03l>) | [PDF](<https://openreview.net/pdf?id=OYg4xrS03l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153029>)

_Abstract unavailable from the accessible public sources._

## Parameter Exploration for RLVR via Variational Learning

**Authors:** Vatsal Venkatkrishna; Nico Carlsen Daheim; Iryna Gurevych

**ID:** 149580 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=p3hX7ae4x4>) | [PDF](<https://openreview.net/pdf?id=p3hX7ae4x4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149580>)

_Abstract unavailable from the accessible public sources._

## Low\-Rank Adaptation for Critic Learning in Off\-Policy Reinforcement Learning

**Authors:** Yuan Zhuang; Yuexin Bian; Sihong He; Jie Feng; Qing Su; Songyang Han; Jonathan Petit; Shihao Ji; Yuanyuan Shi; Fei Miao

**ID:** 151208 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c9yifwVOw7>) | [PDF](<https://openreview.net/pdf?id=c9yifwVOw7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151208>)

Scaling critic capacity is a promising direction for enhancing off\-policy reinforcement learning \(RL\)\. However, larger critics are prone to overfitting and unstable in replay\-buffer\-based bootstrap training\. This paper leverages Low\-Rank Adaptation \(LoRA\) as a structural\-sparsity regularizer for off\-policy critics\. Our approach freezes randomly initialized base matrices and solely optimizes low\-rank adapters, thereby constraining critic updates to a low\-dimensional subspace\. Built on top of SimbaV2, we further develop a LoRA formulation, compatible with SimbaV2, that preserves its hyperspherical normalization geometry under frozen\-backbone training\. We evaluate our method with SAC and FastTD3 on DeepMind Control locomotion and IsaacLab robotics benchmarks\. LoRA consistently achieves lower critic loss during training and stronger policy performance\. Extensive experiments demonstrate that adaptive low\-rank updates provide a simple, scalable, and effective structural regularization for critic learning in off\-policy RL\.

## Offline Constrained Reinforcement Learning under Partial Data Coverage

**Authors:** Seokmin Ko; Ambuj Tewari; Kihyuk Hong

**ID:** 151729 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YXF70sZQPU>) | [PDF](<https://openreview.net/pdf?id=YXF70sZQPU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151729>)

We study offline constrained reinforcement learning with general function approximation in discounted constrained Markov decision processes\. Existing methods either require full data coverage for evaluating unsupported intermediate policies, are not oracle efficient, or requires the knowledge of data\-generating distribution for policy extraction\. We propose PDOCRL, an oracle\-efficient primal\-dual algorithm based on a decomposed linear\-programming formulation\. The decomposition makes the policy an explicit optimization variable, avoiding policy extraction through the unknown distribution $\\mu\_D$\. We show that naive restricted saddle\-point formulations may have spurious saddle points, so realizability of an optimal solution alone is insufficient\. We then show that, under a stronger but explicit realizability assumption, every restricted saddle point is optimal, avoiding the regularization and auxiliary function classes used in prior LP\-based analyses\. These ingredients yield PDOCRL, an oracle\-efficient primal\-dual algorithm that computes a near saddle point of the empirical decomposed LP Lagrangian and returns a near\-optimal, near\-feasible policy with a $\\widetilde\{\\mathcal O\}\(\\epsilon^\{\-2\}\)$ sample guarantee under partial coverage, without access to $\\mu\_D$ or a reference policy\. Empirically, PDOCRL is competitive with strong baselines on standard offline constrained RL benchmarks\.

## Learning to Follow In\-Context Watermark Instructions via Self\-Distillation

**Authors:** Yepeng Liu; Tianyi Chen; Xuandong Zhao; Dawn Song; Yuheng Bu

**ID:** 150382 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iRs3boK4tO>) | [PDF](<https://openreview.net/pdf?id=iRs3boK4tO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150382>)

In\-context watermarking \(ICW\) prepends an instruction to a query asking the model to embed a statistically detectable signal in its response\. It thus equips LLMs with a watermarking interface that third parties can invoke without access to model internals\. Its reliability hinges on the LLM following the instruction without degrading answer quality, yet how well current LLMs do so has not been measured\. We introduce ICWBench, a benchmark of three verifiable ICW instruction families, each scored on both detectability and answer quality\. Evaluating 14 frontier proprietary and open\-source LLMs, we find that none of the evaluated LLMs achieves both objectives across all three families\. To address this, we propose a self\-contained two\-stage training method, requiring no distillation from a stronger model, no manual annotation, and no pre\-existing ICW IF ability\. The first stage, self\-distillation with logits perturbation \(SDLP\), uses the same base LLM as both teacher and student: an instruction\-equivalent decoding\-time logits perturbation makes the teacher follow the ICW instruction, and the student is trained to match the teacher's output distribution\. The second stage applies reinforcement learning with the automatic verifier as the reward\. Applied to Qwen3\-14B, the weakest of the 14 evaluated LLMs in ICW IF, our method raises average TPR@$1\\%$FPR across three ICW instructions from $0\.100$ to $0\.974$, achieving a more favorable trade\-off than the frontier proprietary LLMs we evaluate\.

## Conservatism Controllable Compositional Guidance for Offline Safe Reinforcement Learning

**Authors:** Ruiqi Xue; Shenghe Hu; Xin Gao; Jing\-Wen Yang

**ID:** 149132 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=schnHNuzz8>) | [PDF](<https://openreview.net/pdf?id=schnHNuzz8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149132>)

Learning constraint\-satisfying policies from offline data without risky online interaction is crucial for reliable deployment of reinforcement learning \(RL\) agents\.  Representative methods leverage Implicit Q\-Learning and advantage\-weighted regression to learn value functions and balance the reward–safety trade\-off, demonstrating solid safety performance in safety\-critical hard constraint scenarios\. However, these methods typically couple reward and safety optimization during offline training and rely on a predefined unified factor to balance the reward–safety trade\-off \(conservatism\)\. Which ignores the fact that different tasks, due to their distinct reward and cost functions, may require different degrees of conservatism to satisfy safety constraints, resulting in sub\-optimal performance\. To address this limitation, we propose Co3G, a compositional generative model with test\-time controllable conservatism for offline safe RL\. During training, Co3G decouples the optimization objectives by separately employing reward\-optimal guidance and safety\-optimal guidance to induce high\-reward and high\-safety actions\. During deployment, Co3G combines the reward and safety objectives via compositional generation, and further provides three mechanisms—manual tuning, rejection sampling, and RL—to balance the reward and safety guidance scales during deployment, thereby achieving a superior reward–safety trade\-off\. Extensive experiments on the OSRL benchmark show that Co3G delivers strong safety performance under stringent safety constraints while retaining flexible control over conservatism, significantly outperforming previous hard\-constraint and soft\-constraint baselines\.

## Bootstrapped Bipartite Actor\-Critic for Diffusion RL

**Authors:** Tianze Zhu; yinuo Wang; Letian Tao; Tianyi Zhang; Likun Wang; Feihong Zhang; Yao Lyu; Jingliang Duan; Shengbo Eben Li

**ID:** 155139 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=85aIcxYmr9>) | [PDF](<https://openreview.net/pdf?id=85aIcxYmr9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155139>)

Diffusion policies have achieved strong performance in reinforcement learning \(RL\) due to the exceptional expressivity in capturing complex action distributions\. However, existing approaches focus primarily on positive samples and lack explicit modeling of negative samples, thereby failing to fully exploit this representation capacity and ultimately limiting performance\. To mitigate this problem, we propose BOBAC \(BOotstrapped Bipartite Actor\-Critic\), a novel method for diffusion policy optimization via pairwise preference learning\. Bridging the gap between distribution modeling and preference learning, we reformulate diffusion policy optimization within a preference\-aware framework via the Bradley\-Terry \(BT\) modeling, which enables the effective exploitation of negative samples through relative ranking\. Since the original BT loss assigns the same weight to all pairs regardless of their varying importances, we further design a soft\-gate mechanism to adaptively weight each pair according to its Q\-gap\. Experimental results on 6 MuJoCo tasks and 4 H1Bench tasks demonstrate that, compared with representative model\-free and generative\-policy RL baselines, BOBAC achieves state\-of\-the\-art performance with consistent improvements in all continuous\-control environments\.

## Finite Time Analysis of Risk\-Sensitive RL via Noisy Power Iteration

**Authors:** Waqar Mirza; Yashaswini Murthy; Laixi Shi; Eric Mazumdar; Adam Wierman

**ID:** 154039 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GgJJI06sBX>) | [PDF](<https://openreview.net/pdf?id=GgJJI06sBX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154039>)

Estimating the principal eigenpair of a positive operator from stochastic evaluations gives rise to a noisy form of normalized power iteration: each step applies a sampled operator estimate and then renormalizes\. We establish finite\-time stochastic\-approximation guarantees for this procedure, working in Hilbert's projective metric, which is well\-suited to the multiplicative geometry of Perron\-\-Frobenius eigenproblems\. Our main application is risk\-sensitive average\-cost reinforcement learning \(RL\) with exponential utility\. In this setting the Bellman equations are multiplicative, and value functions are characterized by nonlinear eigenvalue problems rather than additive fixed points\. We cast both policy evaluation and control in this framework, obtaining risk\-sensitive TD\- and Q\-learning algorithms that learn from a single Markovian trajectory\. Under explicit positivity, mixing, and linear function approximation assumptions, we prove finite\-time bounds on the recovered eigenvector and eigenvalue with $\\tilde\{O\}\(\\epsilon^\{\-2\}\)$ sample complexity up to problem\-dependent constants\. The results cover both tabular and linear function approximation regimes, and through the duality between exponential utility and KL\-robust control yield finite\-time guarantees for KL\-robust average\-cost RL as well\.

## Beyond Pairs: Your Language Model is Secretly Optimizing a Preference Graph

**Authors:** Ning Liu; Chuanneng Sun; Kristina L Klinkner; Shervin Malmasi

**ID:** 150929 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eIAc9sNGjK>) | [PDF](<https://openreview.net/pdf?id=eIAc9sNGjK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150929>)

_Abstract unavailable from the accessible public sources._

## Canopy: Tree\-Aware Rollout Scheduling for Agent Reinforcement Learning

**Authors:** Feiyuan Zhang; LI Pengbo; Ziniu Li; Yuhao Jiang; Di Chai; Han Tian; Junhao Wang; Taiqiang Wu; Guanhua Huang; Chaoliang Zeng; Yihao Liu; Kai Chen

**ID:** 154204 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FPJ4b4JwEE>) | [PDF](<https://openreview.net/pdf?id=FPJ4b4JwEE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154204>)

_Abstract unavailable from the accessible public sources._

## Addressing Sparse\-Rewards in RL with Scalable Hierarchical Novel Eigen Options

**Authors:** Priyesh Vijayan; Élodie Côté\-Gauthier; Mathieu Reymond; Sarath Chandar; Doina Precup; Isabeau Prémont\-Schwarz

**ID:** 150071 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ky5vzGwUTU>) | [PDF](<https://openreview.net/pdf?id=ky5vzGwUTU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150071>)

_Abstract unavailable from the accessible public sources._

## Variance\-Optimal State Resampling for Reinforcement Learning with Verifiable Rewards

**Authors:** Yibo Wang; Yuanxin Liu; Zhaoran Wang

**ID:** 151544 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZqLrUQLTaa>) | [PDF](<https://openreview.net/pdf?id=ZqLrUQLTaa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151544>)

_Abstract unavailable from the accessible public sources._

## TrustFlow: Adaptive Trust Calibration for Language Model Guided Reinforcement Learning

**Authors:** Hao Chen; Zhiwei Xu; Hu Fu; Yuelin Ma; Hangyu Mao; Yiqun Chen; Bin Zhang; Guoliang Fan

**ID:** 149919 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mDpGbO5PSA>) | [PDF](<https://openreview.net/pdf?id=mDpGbO5PSA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149919>)

_Abstract unavailable from the accessible public sources._

## BECON: Belief\-Conditioned Constrained Multi\-Objective Reinforcement Learning under Drifting Preferences and Budgets

**Authors:** Bui Trong Duc; Huynh Thi Thanh Binh

**ID:** 153172 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NKKhc57p17>) | [PDF](<https://openreview.net/pdf?id=NKKhc57p17>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153172>)

_Abstract unavailable from the accessible public sources._

## Prospective Hindsight: Self\-Calibrating Reinforcement Learning via Prediction–Reality Gaps

**Authors:** Jiaxin Zhang; XIANGYU PENG; Qinglin Chen; Yu Li; Hiroaki Hayashi; Chien\-Sheng Wu

**ID:** 152351 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TikYXZwMNh>) | [PDF](<https://openreview.net/pdf?id=TikYXZwMNh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152351>)

_Abstract unavailable from the accessible public sources._

## ReCon: Toward Balanced Learning under Inter\-Context and Context\-Memory Conflicts

**Authors:** Huipeng Ma; Dandan Song; Shaonan Ma; Changzhi Zhou; Jun Yang; Yuhang Tian; Luan Zhang; Chenhao Li; Xudong Li; Fang Xi; Guangyuan Feng

**ID:** 149688 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oAsMvB15yW>) | [PDF](<https://openreview.net/pdf?id=oAsMvB15yW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149688>)

In retrieval\-augmented generation \(RAG\), knowledge conflicts arise when retrieved contexts disagree with each other or with the model's parametric memory\. Reinforcement Learning with Verifiable Rewards \(RLVR\) has emerged as a standard approach to address such conflicts\. However, existing RLVR\-based methods are typically formulated under a single\-conflict assumption\. As a result, the type with stronger advantage signals dominates policy updates, leaving the other under\-optimized and thus yielding imbalanced performance across conflict types\. To address this challenge, we propose ReCon, a type\-aware RLVR framework for balanced learning across Inter\-Context and Context\-Memory conflicts\. Specifically, ReCon computes a step\-level imbalance signal from type\-wise cumulative advantages and triggers resampling on the weaker conflict type\. Instead of resampling from scratch, ReCon branches from informative failures\. It selects an informative failed trajectory using uncertainty and closeness signals, then branches at an entropy\-jump point, concentrating additional rollouts on critical reasoning decisions\. Experiments show that ReCon yields stronger and more balanced performance across knowledge\-conflict and multi\-hop QA benchmarks, and also generalizing well under mixed\-conflict settings\.

## Distributionally Robust Token Optimization in RLHF

**Authors:** Yeping Jin; Jiaming Hu; Yannis Paschalidis

**ID:** 154916 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9zSXz3TUrv>) | [PDF](<https://openreview.net/pdf?id=9zSXz3TUrv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154916>)

Large Language Models \(LLMs\) tend to respond correctly to prompts that align well with the data they were trained and fine\-tuned on\. Yet, small shifts in wording, format, or language can trigger surprisingly large failures, especially on multi\-step reasoning problems\. To address this problem, we propose a $\\textbf\{Distributionally Robust Token Optimization \(DRTO\)\}$ approach, which combines token\-level Reinforcement Learning from Human Feedback \(RLHF\) with  $\\textit\{Distributionally Robust Optimization \(DRO\)\}$\. DRTO constructs f\-divergence ambiguity sets over span\-level actor losses, providing a principled way to emphasize difficult response segments during policy optimization\. Empirically, DRTO enhances consistency under distribution shifts in multiple reasoning benchmarks among different tasks\.

## Test Time Search Requires Training for Diversity

**Authors:** Ryan Bahlous\-Boldi; Isha Puri; Idan Shenfeld; Akarsh Kumar; Mehul Damani; Sebastian Risi; Omar Khattab; Zhang\-Wei Hong; Pulkit Agrawal

**ID:** 155492 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5BCRUa67R0>) | [PDF](<https://openreview.net/pdf?id=5BCRUa67R0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155492>)

Language models are increasingly deployed alongside test\-time search\. We argue that we should therefore shift the role of RL post\-training from converging on a single best response to producing a diverse pool of competent candidates\. Standard policy gradient methods such as GRPO optimize a fixed scalar reward and drive the policy toward near\-duplicate responses, erasing the diversity search needs\.  We propose Vector Policy Optimization \(VPO\), which exploits the fact that practical rewards are vector\-valued, e\.g\., per\-test\-case correctness, per\-criterion ratings, or per\-hop credit\. Instead of collapsing these into one scalarization, VPO samples randomized scalarizations from a distribution over the reward simplex, incentivizing candidates to specialize to different trade\-offs along the Pareto front\. The model emits multiple candidates per prompt, with each conditioning on the previous ones, allowing for directed diversification\. VPO is a drop\-in replacement for the GRPO advantage estimator\. Across four domains, VPO consistently improves test\-time best@$k$ over scalar baselines, with gains widening as the test\-time budget grows\.

## Reconciling Operational Energy Trilemma: A Heterogeneous Risk\-Constrained MDP Framework with Residual Policy Learning

**Authors:** Yujian Ye; Siqi Qian; Yizhi Wu; Tianxiang Cui; Goran Strbac

**ID:** 153171 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NKm6gfgKzW>) | [PDF](<https://openreview.net/pdf?id=NKm6gfgKzW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153171>)

Deep decarbonization is transforming power grids into safety\-critical, low\-carbon cyber\-physical systems, where AI controllers must jointly manage economic efficiency, carbon reduction, and operational security\. This operational energy trilemma is challenging for reinforcement learning: cost and carbon objectives are naturally optimized in expectation, whereas security violations are rare, heavy\-tailed events whose consequences can be catastrophic and therefore require explicit tail\-risk control\. Existing safe reinforcement learning methods either constrain safety only in expectation or rely on light\-tailed approximations, which can underestimate rare but severe grid violations\. We propose a heterogeneous risk\-constrained reinforcement learning framework for low\-carbon grid operation\. The key idea is to assign different risk semantics to different objectives: safety\-critical security constraints are enforced through Conditional Value\-at\-Risk \(CVaR\), while economic and carbon\-related objectives are optimized in expectation to preserve operational flexibility\. To better capture extreme scenarios, a mixture distribution model is introduced to characterize heavy\-tailed constraint violations\. We further develop a residual policy learning scheme built on a distributionally robust chance\-constrained reference module: the robust module provides a feasible and economically efficient baseline policy, and the learned residual refines it toward lower\-carbon operation while respecting tail\-risk bounds\. Experiments on power\-system operation tasks show that the proposed framework reduces economic cost by over 25% compared with expectation\-based CMDP baselines and improves safety by two orders of magnitude over Gaussian\-tail methods\. These results suggest that risk\-aware reinforcement learning can support reliable decarbonization by reconciling efficiency, sustainability, and security within a unified decision\-making framework\.

## Hide to Guide: Learning via Semantic Masking

**Authors:** Ruitao Liu; Qinghao Hu; Alex Hu; Yecheng Wu; Shang Yang; Luke J Huang; Zhuoyang Zhang; Han Cai; Song Han

**ID:** 154951 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9hZDtNqGcn>) | [PDF](<https://openreview.net/pdf?id=9hZDtNqGcn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154951>)

Reinforcement learning with verifiable rewards \(RLVR\) has become a powerful paradigm for improving language models on reasoning\-intensive tasks, but its effectiveness is often limited by exploration\. For example, models often fail on hard problems, leaving little useful reward signal\. External expert traces offer a natural source of guidance, yet they may also expose reward\-relevant content along the critical path to the verifier target, such as final answers, intermediate values, executable implementations, or answer\-related entities\. This content can create an unintended reward hacking channel, allowing the policy to obtain reward by copying the trace rather than learning the underlying reasoning or agentic behavior\.  Existing guided\-RL methods reduce this risk by using partial trajectories, but they mainly control how much expert information is shown heuristically rather than which parts should be hidden\. To this end, we propose Semantic Masked Expert Policy Optimization \(SMEPO\), a fine\-grained semantic masking strategy for expert\-guided RLVR\. Instead of truncating traces coarsely or revealing them unchanged, SMEPO masks reward\-relevant semantic spans along the critical path while preserving the expert’s decomposition, plan, and procedural structure\. This turns hard problems from reasoning from scratch into a fill\-in\-the\-blank process: the policy can follow the expert’s problem\-solving route, but must still reconstruct the missing values, code, or entities by itself\. SMEPO is simple to apply and requires no changes to the reward function or RL objective\. Across diverse domains, including math, code, and agentic search, SMEPO improves accuracy by up to 3\.2 points over GRPO and reduces training time by up to 4\.2$\\times$\.

## Quotient\-Categorical Representations for Bellman\-Compatible Average\-Reward Distributional Reinforcement Learning

**Authors:** Ege C\. Kaya; Aliasghar Pourghanitazehshahri; Vijay Gupta; Abolfazl Hashemi

**ID:** 149377 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qVHRXJt8X2>) | [PDF](<https://openreview.net/pdf?id=qVHRXJt8X2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149377>)

Average\-reward reinforcement learning requires estimating the gain and the bias, which is defined only up to an additive constant\. This makes direct distributional analogues ill\-posed on the real line\. We introduce a quotient\-space formulation in which state\-indexed bias laws are identified up to a common translation, together with a categorical parameterization that respects this symmetry\. On this quotient\-categorical space, we define a projected average\-reward distributional operator and show that it is well\-defined, non\-expansive in a coordinate Cram\\'er metric, and admits fixed points\. We then study sampled recursions whose mean\-field maps are asynchronous relaxations of this operator\. In an idealized centered\-reward setting, a one\-state temporal\-difference update enjoys almost sure convergence together with finite\-iteration residual bounds under both i\.i\.d\. and Markovian sampling\. When the gain is unknown, we augment the recursion with an online gain estimator, and prove non\-expansiveness and Markovian convergence of the resulting coupled scheme\. Finally, we show that synchronous exact updates are gain\-independent at the quotient\-law level, isolating a structural contrast between ideal quotient distributions and practical fixed\-grid categorical representations\.

## Learning to Trigger:  Reinforcement Learning at the Large Hadron Collider

**Authors:** Zixin Ding; Shaghayegh Emami; Giovanna Salvi; Cecilia Tosciri; Abhijith Gandrakota; Jennifer Ngadiuba; Nhan Tran; Christian Herwig; David W Miller; Yuxin Chen

**ID:** 148470 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xahR4qVXvQ>) | [PDF](<https://openreview.net/pdf?id=xahR4qVXvQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148470>)

High\-throughput scientific facilities such as the Large Hadron Collider depend on real\-time event filtering \(\\textit\{triggering\}\) under tight constraints on bandwidth, latency, and storage\. In practice, trigger menus are largely static and hand\-tuned and can become suboptimal as detector conditions, pileup, and background composition drift over time\. We cast online threshold tuning as a sequential decision\-making problem: a reinforcement learning agent ingests streaming summaries of recent rates and signal\-sensitive features and updates trigger thresholds to maximize signal efficiency while tracking a target background rate within a tolerance band\. We adapt Group\-Filtered Policy Optimization \(GFPO\) to streaming control and introduce two variants \(GFPO\-F, GFPO\-FR\) that enforce background rate feasibility during training\. On a benchmark that emulates realistic collider operation, we study two representative triggers: a total transverse energy \($H\_\{T\}$\) trigger sensitive to pileup variation, and an anomaly\-detection \(AD\) trigger based on reconstruction loss for rare or non\-standard  signatures\. On Monte Carlo streams, our agent increases the fraction of in\-tolerance time intervals by 38\\% \($H\_T$\) and 30\\% \(AD\), with a cumulative gain of up to 5\\% in conditional signal efficiency\. Transferring from simulation to \\emph\{real\} collision data \(CMS Run 283408\), the same agent, without fine\-tuning, achieves a 40\\% \($H\_T$\) and 25\\% \(AD\) in\-tolerance improvement over baselines, with an additional 1\\% signal\-efficiency gain on both triggers\. To our knowledge, this is the \\textit\{first\} demonstration of RL\-based trigger control on real Large Hadron Collider collision data\.

## Iterative Gumbel Planning for Continuous Control

**Authors:** Shaohuai Liu; Weirui Ye; Yilun Du; Le Xie

**ID:** 150597 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gxzYBTetUi>) | [PDF](<https://openreview.net/pdf?id=gxzYBTetUi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150597>)

Search\-based planning is a powerful policy improvement paradigm in reinforcement learning, with milestone successes on discrete\-action domains through the AlphaZero and MuZero families\. Extending it to continuous control, however, faces a structural mismatch between the search operator and the policy class: search at each state evaluates a finite candidate set and returns a discrete distribution, while the parametric Gaussian policy commonly used in continuous control is a continuous density\. We prove that distilling the search output into a Gaussian induces a non\-vanishing projection error that inflates policy variance and produces a return gap that persists even when the policy mean is locally optimal, and is not closed by additional search compute or data\. Inspired by the iterative refinement of MPPI in continuous control, we propose \\textbf\{Iterative Gumbel Planning \(IGP\)\}, which adapts this principle to a discrete policy class\. IGP represents the policy as a per\-dimension factorized categorical distribution aligned with the search support, eliminating the projection error and reducing the residual approximation to a bounded discretization error controllable by the grid resolution\. Joint candidates are drawn by Gumbel Top\-$K$ sampling without replacement, avoiding the $V^\{\|A\|\}$ combinatorial explosion of joint discretization, and search\-refine iteration runs for multiple rounds at the same state\. On DMControl and HumanoidBench, IGP achieves state\-of\-the\-art performance, with improved sample efficiency and lower temporal action variance at evaluation\.

## StarWM:  Self\-Supervised Trained Attention Routing for Robust World Models

**Authors:** Zeqiang Zhang; Fabian Wurzberger; Maximilian Otte; Daniel Schmid; Sebastian Gottwald; Arne P Raulf; Daniel A Braun

**ID:** 148796 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v2NzTOEOfM>) | [PDF](<https://openreview.net/pdf?id=v2NzTOEOfM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148796>)

A robust world model must strike the balance between faithfully capturing environmental dynamics and abstracting away from irrelevant content\. While reconstruction\-based world models ensure faithful supervision, they misallocate representational capacity by pixel area rather than dynamics relevance, which can cause task\-irrelevant content to dominate the learned representation\. Alternatively, reconstruction\-free methods avoid this bias but risk discarding possibly relevant information\. We propose StarWM, which combines advantages of both paradigms through a cross\-attention module gated by self\-supervised dynamics signals that decides where reconstruction applies, while a dual\-stream decoder lets reconstruction shape only what is extracted at attended locations, with stop\-gradient barriers preventing the two objectives from interfering\. This allows reconstruction to supervise the visual content of attended regions without contaminating the latent with non\-predictive information\. On DeepMind Control with dynamic video backgrounds, StarWM outperforms reconstruction\-based baselines while keeping competitive with the concurrent reconstruction\-free approach, and is the only method that performs consistently well across clean, sequential\-video, and random\-video distractor settings\. Mechanistic probing confirms StarWM preserves state attributes with near\-perfect fidelity through long\-horizon imagination while systematically discarding distractors\.

## Learning to Audit ML Models with Theory of Mind

**Authors:** Yao Rong; Vaibhav Unhelkar

**ID:** 155783\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155783

[Paper](<https://openreview.net/forum?id=2vhiHLMdzi>) | [PDF](<https://openreview.net/pdf?id=2vhiHLMdzi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155783>)

When auditing machine learning models, human experts sequentially inspect model predictions and explanations, gradually building a mental model of the model’s behavior to uncover errors\. This manual process is critical for safe deployment in high\-stakes domains but fundamentally limited in scalability\. In this work, we propose a novel method to simulate this human auditing behavior for automating the auditing process\. We formalize auditing as a sequential decision\-making problem, modeled as a Markov decision process\. Our state representation summarizes the auditor’s accumulated knowledge of model predictions and feature usage\. Building on this formalization, we solve the MDP using reinforcement learning, yielding RLAuditor, which learns to select informative test samples to efficiently uncover model errors\. We further connect our formalization to Theory of Mind, showing that our state mirrors how human auditors build mental models: its update rule is equivalent to Bayesian belief revision and it converges to the model’s behavioral pattern at an interpretable rate\. We validate our approach on multiple ML models and datasets across different data modalities\. In a human subject study, we demonstrate that RLAuditor helps human auditors produce more accurate audit reports in less time\.

## Generalized Intention Modeling in Multi\-Agent Reinforcement Learning

**Authors:** Mateusz Odrowaz\-Sypniewski; Jasmine Bayrooti; Ajay Shankar; Amanda Prorok

**ID:** 151588\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151588

[Paper](<https://openreview.net/forum?id=ZSayYS6nBW>) | [PDF](<https://openreview.net/pdf?id=ZSayYS6nBW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151588>)

Modeling an opponent’s intent is critical for effective decision\-making in non\-cooperative, competitive, and general\-sum multi\-agent reinforcement learning\. Existing opponent modeling methods encode intent using an embedding derived from episode information chosen a priori, such as the opponent’s next action or a future environment state, and use this to guide the ego\-agent’s behavior\. These approaches assume that the chosen information is universally representative of intent; however, we show empirically that this is not the case as intentions are often task\- and environment\-dependent\. To address this, we introduce a task\-adaptive opponent modeling framework that learns a performance\-driven mixture of multiple intent representations\. We further introduce a new intention representation that maximizes mutual information with the ego\-agent’s future returns, thereby capturing opponent information that is most directly relevant to performance\. Our approach consistently matches or exceeds the performance of state\-of\-the\-art baselines across diverse tasks and yields insights into when and why different opponent modeling strategies succeed\.

## GDMD: Guiding Distribution Matching Distillation with Gradient\-Based Reinforcement Learning

**Authors:** Linwei Dong; Ruoyu Guo; Ge Bai; Quan Zheng; Yawei Luo; Changqing Zou

**ID:** 152678\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152678

[Paper](<https://openreview.net/forum?id=RFJrFfNSEC>) | [PDF](<https://openreview.net/pdf?id=RFJrFfNSEC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152678>)

Diffusion distillation, exemplified by Distribution Matching Distillation \(DMD\), has shown great promise in few\-step generation but often sacrifices quality for sampling speed\. While integrating Reinforcement Learning \(RL\) into distillation offers potential, a naive fusion of these two objectives relies on suboptimal raw sample evaluation\. This sample\-based scoring creates inherent conflicts with the distillation trajectory and produces unreliable rewards due to the noisy nature of early\-stage generation\. To overcome these limitations, we propose GDMD, a novel framework that redefines the reward mechanism by prioritizing distillation gradients over raw pixel outputs as the primary signal for optimization\. By reinterpreting the DMD gradients as implicit target tensors, our framework enables existing reward models to directly evaluate the quality of distillation updates\. This gradient\-level guidance functions as an adaptive weighting that synchronizes the RL policy with the distillation objective, effectively neutralizing optimization divergence\. Empirical results show that GDMD sets a new SOTA for few\-step generation\. Specifically, our 4\-NFE \(Number of Function Evaluations\) models outperform the quality of their multi\-step teacher and substantially exceed previous DMDR results in GenEval and human\-preference metrics, exhibiting strong scalability potential\.

## PAIR: Prefix\-Aware Internal Reward Model for Multi\-Turn Agent Optimization

**Authors:** Wonjoong Kim; Yeonjun In; Sangwu Park; Dongha Lee; Chanyoung Park

**ID:** 156086\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156086

[Paper](<https://openreview.net/forum?id=0Ut88MX4Oj>) | [PDF](<https://openreview.net/pdf?id=0Ut88MX4Oj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156086>)

A significant hurdle for current LLMs is the execution of complex, multi\-stage tasks\.  Group Relative Policy Optimization \(GRPO\) has been emerging as a leading choice, but its reliance on sparse outcome rewards severely limits credit assignment across intermediate steps\. Existing remedies—running full rollouts to assign step\-level advantages, calling external LLM judges at each step, or computing intrinsic rewards that require ground\-truth answers at every evaluation—introduce significant costs or practical constraints\.  We hypothesize that internal correctness probing over LLM hidden states can be repurposed as a step\-level reward signal, potentially addressing all of these limitations at once\.  However, existing probing research assumes clean inputs, and we first show that this assumption breaks down in multi\-step settings: hidden\-state probes degrade severely under prefix contamination—tracking coherence with the \(possibly corrupted\) prefix rather than grounded correctness—while attention\-based features remain robust to contamination but underperform on clean prefixes\. Building on this complementary relationship, we propose the Prefix\-Aware Internal Reward \(PAIR\)—a two\-stage model with a frozen hidden\-state probe estimating belief\-consistency and a lightweight attention\-based head correcting it toward grounded correctness\. Experimental results show that PAIR achieves the highest AUROC on contaminated trajectories while operating at negligible inference cost, enabling dense step\-level reward signals for GRPO training without external model calls, ground\-truth dependencies, or full\-trajectory rollouts\.

## Learning to Explore with Parameter\-Space Noise: A Deep Dive into Parameter\-Space Noise for Reinforcement Learning with Verifiable Rewards

**Authors:** Bizhe Bai; Xinyue Wang; Peng Ye; Tao Chen

**ID:** 154785\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154785

[Paper](<https://openreview.net/forum?id=B0ocUGMRAN>) | [PDF](<https://openreview.net/pdf?id=B0ocUGMRAN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154785>)

Reinforcement Learning with Verifiable Rewards \(RLVR\)  enhances large language model \(LLM\) reasoning, yet growing evidence indicates an \\emph\{exploration ceiling\}: they tend to reweight existing solution traces and produce low\-diversity rollouts\. This restricts the discovery of novel solution perspective and weakens out\-of\-distribution generalization\. We address this limitation by directly perturbing the rollout policy's parameters while updating the clean policy model as usual, an approach that achieves better temporal consistency and yields more complex behavior patterns\. To stabilize learning from these perturbed rollouts, which are inherently off\-policy, we incorporate truncated importance sampling\. Furthermore, we introduce a lightweight, dynamic noise scheduler based on semantic diversity and model self\-certainty to optimally adjust the noise scale\. Instantiated on GRPO, our method \(PSN\-GRPO\) demonstrates its efficacy through four key contributions: \(1\) it improves high\-budget pass@$k$, increases semantic and operational diversity, increases CoT consistency, and remains complementary to  exploration\-oriented RLVR techniques; \(2\) it validates efficacy across multiple models, including Qwen2\.5, Qwen3, and Llama\-3\.1; \(3\) it shows robust performance on out\-of\-distribution science and coding benchmarks; and \(4\) it uncovers novel solution perspectives for problems the original model could not solve, as shown by qualitative analysis\.

## Shared Modular Recurrence in Contextual MDPs for Universal Morphology Control

**Authors:** Laurens Engwegen; Max Weltevrede; Caroline Horsch; Daan Brinks; Wendelin Boehmer

**ID:** 154044\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154044

[Paper](<https://openreview.net/forum?id=Gegwgu6VmY>) | [PDF](<https://openreview.net/pdf?id=Gegwgu6VmY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154044>)

A universal controller for any robot morphology would greatly improve computational and data efficiency\. Steps have been made towards such multi\-robot control by utilizing \*contextual\* information about the properties of individual robots and exploiting their modular structure in the architecture of deep reinforcement learning agents\. When the robots have highly dissimilar morphologies, however, this becomes a challenging problem, especially when the agent must generalize to new, unseen robots\. In this paper, we posit that contextual features are often only partially available, but that they can be recovered through modular interactions\. This can allow for better multi\-robot control and generalization to contexts that are not seen during training\. To this extent, we implement a transformer\-based architecture with shared modular recurrence and evaluate its \(generalization\) performance on a large set of MuJoCo robots\. The results show a substantial improvement in zero\-shot generalization performance on robots with unseen dynamics, kinematics, and topologies, in four different environments\.

## Unveiling Implicit Advantage Symmetry: Why GRPO Struggles with Exploration and Difficulty Adaptation

**Authors:** zhiqi yu; Zhangquan Chen; Mengting Liu; Heye Zhang; Liangqiong Qu

**ID:** 153467\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153467

[Paper](<https://openreview.net/forum?id=L7H48b3yB6>) | [PDF](<https://openreview.net/pdf?id=L7H48b3yB6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153467>)

Reinforcement Learning with Verifiable Rewards \(RLVR\), particularly GRPO, has become the standard for eliciting LLM reasoning\. However, its efficiency in exploration and difficulty adaptation remains an open challenge\. In this work, we identify an implicit advantage symmetry inherent in Group Relative Advantage Estimation \(GRAE\) as a structural property that provides a new perspective for understanding these bottlenecks\. This symmetry induces two critical limitations: \(i\) at the group level, strict symmetry in weights between correct and incorrect trajectories leaves unsampled action logits unchanged, thereby hindering the exploration of novel correct solution\. \(ii\) at the sample level, the algorithm implicitly prioritizes medium\-difficulty samples, remaining agnostic to the non\-stationary demands of difficulty focus\. Through controlled experiments, we reveal that this symmetric property is sub\-optimal, yielding two pivotal insights: \(i\) asymmetrically down\-weighting the advantages of correct trajectories encourages essential exploration but risks instability; \(ii\) learning efficiency can be boosted by a curriculum\-like transition—prioritizing simpler samples initially before gradually shifting to complex ones\. Motivated by these findings, we propose Asymmetric GRAE \(A\-GRAE\), which dynamically modulates exploration incentives and sample\-difficulty focus\. Experiments across seven benchmarks demonstrate that A\-GRAE consistently improves GRPO and its variants across both LLMs and MLLMs\.

## Safe\-Fair MACPO: Burden\-Fair Constrained Policy Optimization for Safe Multi\-Agent Reinforcement  Learning

**Authors:** Ankita Kushwaha; KIRAN RAVISH; Preeti; Pawan Kumar

**ID:** 151944 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Wff0AXdNL4>) | [PDF](<https://openreview.net/pdf?id=Wff0AXdNL4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151944>)

Safe multi\-agent reinforcement learning usually constrains team\-level safety cost, but a safe team can still assign the same agent to repeatedly wait, yield, detour, absorb intervention, or lose access to a scarce resource\. We study this failure mode as \*burden unfairness under hard safety\*\. Safe\-Fair multi\-agent constrained policy optimization \(Safe\-Fair MACPO\) augments MACPO with agent\-wise burden logging, a temporal fairness\-debt state, a fairness critic, and a two\-cost trust\-region update\. Safety is lexicographically primary: recovery may override fairness to avoid unsafe actions, while the resulting imbalance is stored as debt and penalized later\. We give a safety\-first Pareto theory showing that the exact safe\-fair constrained selector is strongly Pareto efficient for reward, safety, and fairness, with hard\-safety and temporal burden\-gap certificates\. Empirically, the primary reported rows keep zero hard violations while improving useful burden balance: HalfCheetah\-2x3\-Fair improves selected safe return from $2145\.5$ to $2637\.4$ and Jain burden from $0\.903$ to $0\.977$; Safety\-Gym MultiGoal\-Fair reaches the lowest matched\-budget scalar fairness cost with zero safety cost; and VMAS\-SafeMultiGoal improves over recovery\-only attribution controls\. We separate social/resource fairness from mechanical workload imbalance and reserve mixed or recovery\-explained rows for qualified appendix analysis\.

## Group\-Graph Policy Optimization for Long\-Horizon Agentic Reinforcement Learning

**Authors:** Yunan Wang; Minghui Song; Zihan Zhang; Shaohan Huang; Haizhen Huang; Furu Wei; Weiwei Deng; Feng Sun; Qi Zhang

**ID:** 149985 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=li8veKFGaF>) | [PDF](<https://openreview.net/pdf?id=li8veKFGaF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149985>)

Group\-based Reinforcement Learning \(RL\) has significantly enhanced Large Language Models \(LLMs\) in agentic scenarios\. To achieve finer\-grained policy updates, recent agentic RL frameworks have shifted from trajectory\-level to step\-level training\. However, long\-horizon agentic RL suffers from severe reward sparsity and delay, as feedback is often deferred for dozens of interaction steps\. While existing step\-level frameworks refine training granularity, their credit assignment remains coarse\-grained and still treats agent exploration as isolated, linear trajectories\. This oversimplified perspective ignores the inherent graph structure of state transitions, leading to high\-variance state\-value estimation and myopic, localized credit assignment\. To overcome these critical bottlenecks, we propose Group\-Graph Policy Optimization \(G2PO\), a novel group\-based RL algorithm tailored for multi\-turn agentic tasks\. G2PO explicitly transforms linear interaction trajectories into a global state\-transition graph\. By aggregating identical observations across different trajectories, we introduce group\-aggregation state\-value estimation that reduces sampling variance and trajectory\-dependent bias\. Furthermore, we redefine agent actions as transitions between state nodes and propose an edge\-centric advantage estimation strategy\. By globally standardizing Temporal Difference \(TD\) errors across the entire graph, G2PO explicitly identifies and prioritizes critical transitions that drive absolute task progress\. Extensive experiments on representative long\-horizon benchmarks—WebShop, ALFWorld, and AppWorld—demonstrate that G2PO substantially outperforms state\-of\-the\-art prompt\-based and RL baselines, achieving remarkable success rate improvements of up to 22\.2\\% over GRPO\.

## NitroBox: Lightning\-Fast Sandbox for Large\-Scale RL Training

**Authors:** Yuzhou Nie; Ruilin Zhou; Zhaorun Chen; Jingyang Zhang; Yan Shao; Hongwei Li; Bo Li; Dawn Song; Wenbo Guo

**ID:** 148578 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wmjiv6thuV>) | [PDF](<https://openreview.net/pdf?id=wmjiv6thuV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148578>)

Recent work on agentic training efficiency has mainly focused on improving learning algorithms, rollout strategies, or model\-hardware co\-design\. However, these approaches overlook an important source of training latency: the sandbox that runs the environments\. Recent studies show that creating, executing, and resetting containers accounts for an important portion of the rollout process in RL training, substantially slowing down overall training\. This overhead largely stems from the centralized management mechanisms \(e\.g\., DAEMON\) of existing sandboxes, along with additional features \(e\.g\., multi\-tenancy\) that are unnecessary for reinforcement learning \(RL\)\. Moreover, existing sandboxes are designed for general\-purpose isolated execution, making them a poor fit for the requirements of RL rollout and training\. We propose NitroBox, a novel sandbox system purpose\-built for agentic RL that significantly accelerates the rollout and training process\. Technically speaking, we first comprehensively redesign NitroBox's lifecycle to eliminate the dependency on DAEMON, so that every sandbox instance is fully independent during creation, startup, and reset \(e\.g\., via rootless full\-namespace isolation\)\. Furthermore, we introduce a copy\-on\-write mechanism to enable fast startup across multiple instances\. Second, we knock off features that are time\-consuming but unnecessary for RL — such as multi\-tenancy — while preserving the core functionality and security guarantees needed for RL training\. Finally, we introduce some RL\-nature features to further improve efficiency, such as optional CRIU\-based process checkpoint saving and restoring for mid\-trajectory branching\. Our experiments show that NitroBox is faster than Docker across the entire lifecycle: 10\.6× faster in sandbox creation, 24\.6× in reset, and 19\.1× in deletion\. When training Qwen2\.5\-Coder\-32B\-Instruct with GRPO at c=32 concurrency, end\-to\-end wall\-clock training time drops from 40\.6 hours to 28\.4 hours when replacing Docker with NitroBox, while preserving the same task pass rate\.

## HDCS: Hierarchy Discovery and Critic Shaping for Reinforcement Learning with Automaton Specification

**Authors:** Duo XU; Faramarz Fekri

**ID:** 156745 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BGoRme2MfG>) | [PDF](<https://openreview.net/pdf?id=BGoRme2MfG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156745>)

Training reinforcement learning \(RL\) agents by scalar reward signals is often infeasible when an environment has sparse and non\-Markovian rewards\. Deterministic finite\-state automaton \(DFA\) provides a streamlined method for specifying tasks in reinforcement learning \(RL\) that surpass the limitations of traditional discounted return formulations\. However, existing RL algorithms designed to address DFA tasks face unresolved challenges, hindering their practical application\. One key issue is that subgoals in the DFA may exhibit hidden hierarchical structures, with some macro\-subgoals comprising multiple micro\-subgoals in certain orders\. Without understanding this hierarchy, RL algorithms may struggle to efficiently solve tasks involving such macro\-subgoals\. Additionally, the sparse reward problem remains inadequately addressed\. Previous approaches, such as potential\-based reward shaping, often encounter inefficiencies or result in suboptimal solutions\.
To address these challenges, we propose a novel RL framework designed to uncover the hierarchical structure of subgoals and accelerating the solving of DFA tasks without changing the original optimal policies, short as HDCS\. The framework operates in two phases: first, a hierarchical RL method is used to identify the prerequisites of subgoals and build the hierarchy; second, given any task specification \(DFA\), the subgoal hierarchy is incorporated into task DFA to make a product DFA, and then a simple and novel critic shaping approach is proposed to accelerate the satisfaction of product DFA, which does not change optimal policies of the original problem\. The effectiveness of HDCS is demonstrated through experiments conducted across various domains\. Especially, compared with representative baselines, the critic shaping can have 2X or 3X acceleration on task solving\.

## Understanding Multimodal Failure in Action\-Chunking Behavioral Cloning

**Authors:** Lorenzo Mazza; Massimiliano Datres; Ariel Rodriguez; Sebastian Bodenstedt; Gitta Kutyniok; Stefanie Speidel

**ID:** 149297 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rH2Cz9se1a>) | [PDF](<https://openreview.net/pdf?id=rH2Cz9se1a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149297>)

Behavioral cloning becomes difficult when the same observation admits several valid actions\. We study this problem for action\-chunking policies and show that different multimodal parameterizations fail in different ways\. For latent\-variable policies, posterior\-prior regularization makes deployment\-time sampling more reliable, but excessive regularization removes the action\-conditioned information needed to distinguish demonstrated modes\. Reducing this regularization can preserve mode information, but then success depends on whether the prior covers the relevant latent regions\. For action\-space generative policies, multimodality is constrained by the smoothness of the base\-to\-action transport: a map with small Lipschitz constant cannot assign substantial probability to many well\-separated modes\. Covering many modes therefore requires either sharp transitions in base space or off\-support bridge regions in action space\. Experiments on synthetic multimodal tasks and robotic simulation benchmarks support these mechanisms\.

## PoEM: Predicting New RL Outcomes from Existing Policies

**Authors:** Kimia Hamidieh; Giannis Daras; Antonio Torralba

**ID:** 154423 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Dh60W6N12a>) | [PDF](<https://openreview.net/pdf?id=Dh60W6N12a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154423>)

Pre\-trained models are routinely post\-trained with reinforcement learning \(RL\) to maximize specific rewards, such as human alignment, correctness, or instruction following\. This post\-training process is computationally intensive, sometimes unstable, and has to be run from scratch every time the reward model changes or when we want to combine multiple rewards\. We hence ask: given a new reward function, is it possible to predict the RL outcomes without actually running RL on it? We answer this in the affirmative by introducing PoEM, a framework to predict the outputs of RL on a new reward function using a set of models already post\-trained on other rewards\. First, we show that if the new reward function can be written as a linear combination of existing ones, then the new policy in log\-space can be written as a linear combination of the existing log\-policies\. Surprisingly, even in cases where the rewards are not linearly connected, we observe that often log\-policies from RL training span an approximately low\-rank subspace across rewards\. To our benefit, the weighting coefficients for this combination can be estimated using only the reward or basis policy outputs on the samples\. We turn these observations into an algorithm that takes post\-trained models and a new reward function, and approximates the target RL policy without actually running any additional RL training\. We experimentally validate our approach across synthetic and real experiments, spanning both text and image modalities\.

## Reinforcement Learning from Rich Feedback with Distributional DAgger

**Authors:** Rishabh Agrawal; Jacob Fein\-Ashley; Paria Rashidinejad

**ID:** 155273\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155273

[Paper](<https://openreview.net/forum?id=6ux7PyTXx9>) | [PDF](<https://openreview.net/pdf?id=6ux7PyTXx9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155273>)

Reasoning models have advanced rapidly, but the dominant reinforcement learning from verifiable rewards \(RLVR\) recipe remains surprisingly narrow: sample many responses and reward each with a single bit indicating whether the final answer is correct\. Yet many settings provide $\\textit\{rich feedback\}$, including execution traces, tool outputs, expert corrections, and model self\-evaluations\. We study how to use such feedback through a distributional variant of the classic imitation learning algorithm DAgger, where the learner has local access to an expert distribution on states visited by the current policy\. This yields a simple forward cross\-entropy objective that admits a blackbox expert and whose sequence\-level gradient \{conduct rich credit assignment by propagating\} future expert\-student disagreement back to earlier decisions\. We show that prior RL with self\-distillation objectives based on reverse KL or Jensen\-Shannon fail to guarantee monotonic policy improvement: even when the expert has higher reward, their updates may increase probability on worse actions\. In contrast, we show that forward cross\-entropy admits monotonic policy improvement and enjoys guarantees on regret\. We further show that our objective optimizes a teacher\-weighted maximum\-likelihood RL lower bound, leading to improved Pass@N\. Empirically, our approach, DistIL, consistently improves over RLVR and RL with self\-distillation baselines across a variety of domains: scientific reasoning, mathematical reasoning, and coding\.

## Boosting Multiagent Reinforcement Learning at High Replay Ratios with Ensemble Reset

**Authors:** Yaodong Yang; Hongyao Tang; Guangyong Chen; Pheng\-Ann Heng

**ID:** 149143\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149143

[Paper](<https://openreview.net/forum?id=sW2PazNAB1>) | [PDF](<https://openreview.net/pdf?id=sW2PazNAB1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149143>)

Increasing the replay ratio, where an agent's network is updated multiple times per environment interaction, is an effective strategy for improving sample efficiency in reinforcement learning\. However, its effects on the network capacity of multiagent reinforcement learning \(MARL\) are not yet well investigated\. In this paper, we show that high replay ratios induce a severe dormant neuron problem in the centralized global Q\-network of MARL, where a large fraction of neurons become inactive, thereby reducing network capacity and destabilizing learning\. To address this problem, we propose Ensemble Reset \(EnSet\) to stabilize MARL training at high replay ratios\. First, guided by theoretical analysis, EnSet employs an ensemble of global Q\-value networks with periodic resets to mitigate neuron dormancy during frequent updates\. Second, EnSet diversifies replay experience by exploiting multiagent translation invariance as an inductive bias in the global Q\-value function to prevent overfitting\. Extensive experiments in SMAC, MPE, and SMACv2 environments demonstrate that EnSet consistently improves various MARL algorithms at high replay ratios with fewer environment steps\.

## UniForm: Segment\-Aware GRPO for Joint Punctuation Restoration and Inverse Text Normalization

**Authors:** Junhao Gong; Weiwei Li; Rilin Chen

**ID:** 153759\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153759

[Paper](<https://openreview.net/forum?id=It6ljjakNn>) | [PDF](<https://openreview.net/pdf?id=It6ljjakNn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153759>)

Punctuation Restoration and Inverse Text Normalization \(ITN\) are essential post\-processing tasks for ASR systems\. Traditionally, these are handled by separate models in a sequential pipeline, which suffers from error propagation and suboptimal latency\. We propose UniForm, a unified framework that jointly solves both tasks using a single compact language model\. UniForm is trained via a three\-stage progressive paradigm: large\-scale supervised fine\-tuning on punctuation data, joint fine\-tuning with ITN span masks, and reinforcement learning alignment\. To enable effective reinforcement learning in this inherently low\-entropy setting, we introduce Segment\-Aware GRPO \(SA\-GRPO\), which optimizes model performance through two synergistic components: a structured reward decomposition mechanism that provides dedicated signals for distinct segment types, and a token\-level adaptive credit assignment mechanism that dynamically redistributes gradients toward difficult tokens based on sampling consensus and model entropy\. This integrated approach effectively eliminates the need for manual sub\-task weighting and ensures fine\-grained optimization for both tasks\. We train UniForm\-0\.8B on over 238 million multilingual samples\. Extensive evaluations across diverse languages, domains, and code\-switching scenarios demonstrate that UniForm\-0\.8B outperforms prior specialized models and larger general\-purpose LMs on both tasks while maintaining real\-time inference latency\. Furthermore, our analysis reveals a strong synergistic effect, proving that joint training mutually benefits both punctuation and ITN performance\.

## SkillForge: Co\-Evolving Skills and Agents via Dynamic Skill Lifecycles

**Authors:** Yuyao Ge; Yiwei Wang; Yuchen He; Baolong Bi; Lingrui Mei; Jiayu Yao; Lizhe Chen; Shenghua Liu

**ID:** 151649\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151649

[Paper](<https://openreview.net/forum?id=Z3a0qCfhFi>) | [PDF](<https://openreview.net/pdf?id=Z3a0qCfhFi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151649>)

Memory\-augmented reinforcement learning strengthens LLM agents' ability to solve complex long\-horizon tasks\. Skills are one such form of memory, pairing instructions with an applicability condition over task types\. However, retaining every skill indiscriminately as the policy improves lets obsolete or harmful entries accumulate and mislead the agent\. We propose SkillForge, an agentic RL method that compiles and evolves the skill library through a fitness\-driven skill lifecycle of trial, active, stable, and retired states, so that the skills and the model co\-evolve throughout training\. A preliminary evaluation phase first uses the base model's own rollouts to pre\-retire low\-fitness skills, yielding a filtered library that then seeds supervised fine\-tuning\. Reinforcement learning takes over from this checkpoint, and at each iteration selective retirement, stabilization, and LLM\-guided mutation continue to forge the skill library alongside policy optimization\. Across multiple interactive agent benchmarks, SkillForge achieves the highest aggregate success rate, delivering up to 7\.8\\% relative improvement over the strongest baseline while keeping the skill library compact throughout training\. We introduce Skillfurnace, a dataset of 5k\+ annotated records bundling retirement\-filtered SFT trajectories, evolved skill libraries with fitness annotations, and retirement events with human\-annotated failure categories to support research on skill quality and lifecycle management\.

## Target\-Aligned Reinforcement Learning

**Authors:** Leonard S\. Pleiss; James Harrison; Maximilian Schiffer

**ID:** 150631 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=geGOtycFCT>) | [PDF](<https://openreview.net/pdf?id=geGOtycFCT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150631>)

_Abstract unavailable from the accessible public sources._

## Local Policy Manifolds for Efficient Multi\-Objective Reinforcement Learning

**Authors:** Qiyue Xia; Tianwei Wang; J\. Michael Herrmann

**ID:** 149916 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mF8mCetv02>) | [PDF](<https://openreview.net/pdf?id=mF8mCetv02>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149916>)

_Abstract unavailable from the accessible public sources._

## Two is better than one: A Collapse\-free Multi\-Reward RLIF Training Framework

**Authors:** Shourov Joarder; Diganta Sikdar; Ahsan H Akash; Binod Bhattarai; Prashnna K Gyawali

**ID:** 154502\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154502

[Paper](<https://openreview.net/forum?id=D8K5QK3kwT>) | [PDF](<https://openreview.net/pdf?id=D8K5QK3kwT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154502>)

Reinforcement learning with verifiable rewards \(RLVR\) has substantially improved the reasoning ability of LLMs, but often depends on external supervision from human annotations or gold\-standard solutions\. Reinforcement learning from internal feedback \(RLIF\) has recently emerged as a scalable unsupervised alternative, using signals extracted from the model itself\. However, existing RLIF methods typically rely on a single internal reward, which can lead to reward hacking, entropy collapse, and degraded reasoning structure\. We propose a multi\-reward RLIF framework that decomposes the training signal into two complementary components: an answer\-level reward based on cluster voting and a completion\-level reward based on token\-wise self\-certainty\. To combine these signals robustly, we apply GDPO\-based normalization to reduce reward\-scale imbalance\. We further introduce KL\-Cov regularization, which targets low\-entropy token distributions responsible for disproportionate entropy reduction, preserving exploration and preventing late\-stage collapse\. Across mathematical reasoning and code\-generation benchmarks, our method improves stability and robustness over prior unsupervised RL approaches, while achieving performance close to supervised RLVR methods\. These results show that complementary internal rewards, combined with targeted regularization, can support stable long\-horizon reasoning without relying on external ground\-truth supervision\.

## TIC\-GRPO: Provable and Efficient Optimization for Reinforcement Learning from Human Feedback

**Authors:** Lei pang; Jun Luo; ruinan Jin

**ID:** 150989 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dlQ6zVz4Qq>) | [PDF](<https://openreview.net/pdf?id=dlQ6zVz4Qq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150989>)

Group Relative Policy Optimization \(GRPO\) is a critic\-free reinforcement learning algorithm for fine\-tuning large language models, but its token\-level importance sampling mechanism creates a subtle variance bottleneck\. We separate this bottleneck into two mechanisms\. First, the standard GRPO clipping rule is incomplete: on the negative\-advantage branch, it can pass uncontrolled upper\-tail importance weights\. This motivates up\-only clipping as a standalone correction\. Second, up\-only clipping alone is not enough if the update remains token\-level: the clipped token\-weighted score increments need not be martingale differences, so cross terms survive in the squared update\. This motivates trajectory\-level importance correction\.  We propose Trajectory\-level Importance\-Corrected GRPO \(TIC\-GRPO\), which follows this progression: it first caps upper\-tail ratios by up\-only clipping and then replaces token\-level importance ratios with a single trajectory\-level probability ratio\. The latter restores the measure\-change identity needed for trajectory\-level martingale cancellation\. Our variance theory gives upper bounds, hard\-instance lower bounds, and induced convergence lower bounds that separate original GRPO, the token\-level up\-clipped comparator GRPO$\_2$, and TIC\-GRPO\. Experiments on math reasoning and coding benchmarks further confirm that TIC\-GRPO improves optimization stability and final performance\.

## Scalable Maximum Entropy Reinforcement Learning for Diffusion Policies via Adjoint Matching

**Authors:** Serge Thilges; Onur Celik; Denis Blessing; Emiliyan Gospodinov; Gerhard Neumann

**ID:** 150581 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h8DYJlF7Jt>) | [PDF](<https://openreview.net/pdf?id=h8DYJlF7Jt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150581>)

Diffusion policies have recently emerged as a powerful paradigm for representing complex action distributions in reinforcement learning \(RL\)\. However, their application to online RL remains limited by the challenge of scalable training in the absence of ground\-truth data, where standard optimization techniques such as score matching are not directly applicable\. In this work, we introduce a highly efficient algorithm for optimizing diffusion policies by leveraging recent advances in stochastic optimal control\. Our approach is based on adjoint matching, which enables simulation\-free training and circumvents the need for explicit likelihood estimation or costly backpropagation through the diffusion process\. Furthermore, we propose several extensions that improve the robustness and stability of the method in practical settings\. Empirical results demonstrate that our approach achieves competitive performance while significantly reducing computational overhead, making diffusion policies more viable for online RL scenarios\.

## Soft Forward\-Backward Representations for Zero\-shot Reinforcement Learning with General Utilities

**Authors:** Marco Bagatella; Thomas Rupf; Georg Martius; Andreas Krause

**ID:** 151016 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=da88i4IpCj>) | [PDF](<https://openreview.net/pdf?id=da88i4IpCj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151016>)

_Abstract unavailable from the accessible public sources._

## Treat Bias as Noise: Training Bias\-Robust LLM Reasoning via Reinforcement Learning

**Authors:** Qian Wang; Xuandong Zhao; Zirui Zhang; Zhanzhi Lou; Nuo Chen; Dawn Song; Bingsheng He

**ID:** 150271 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jPnZFyHo4X>) | [PDF](<https://openreview.net/pdf?id=jPnZFyHo4X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150271>)

_Abstract unavailable from the accessible public sources._

## Learning to Undo: Transfer Reinforcement Learning under State Space Transformations

**Authors:** Mridul Mahajan; Aldo Pacchiano; Xuezhou Zhang

**ID:** 149546 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pKncWGhXfk>) | [PDF](<https://openreview.net/pdf?id=pKncWGhXfk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149546>)

_Abstract unavailable from the accessible public sources._

## HDCS: Hierarchy Discovery and Critic Shaping for Reinforcement Learning with Automaton Specification

**Authors:** Duo XU; Faramarz Fekri

**ID:** 156745\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156745

[Paper](<https://openreview.net/forum?id=BGoRme2MfG>) | [PDF](<https://openreview.net/pdf?id=BGoRme2MfG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156745>)

Training reinforcement learning \(RL\) agents by scalar reward signals is often infeasible when an environment has sparse and non\-Markovian rewards\. Deterministic finite\-state automaton \(DFA\) provides a streamlined method for specifying tasks in reinforcement learning \(RL\) that surpass the limitations of traditional discounted return formulations\. However, existing RL algorithms designed to address DFA tasks face unresolved challenges, hindering their practical application\. One key issue is that subgoals in the DFA may exhibit hidden hierarchical structures, with some macro\-subgoals comprising multiple micro\-subgoals in certain orders\. Without understanding this hierarchy, RL algorithms may struggle to efficiently solve tasks involving such macro\-subgoals\. Additionally, the sparse reward problem remains inadequately addressed\. Previous approaches, such as potential\-based reward shaping, often encounter inefficiencies or result in suboptimal solutions\.
To address these challenges, we propose a novel RL framework designed to uncover the hierarchical structure of subgoals and accelerating the solving of DFA tasks without changing the original optimal policies, short as HDCS\. The framework operates in two phases: first, a hierarchical RL method is used to identify the prerequisites of subgoals and build the hierarchy; second, given any task specification \(DFA\), the subgoal hierarchy is incorporated into task DFA to make a product DFA, and then a simple and novel critic shaping approach is proposed to accelerate the satisfaction of product DFA, which does not change optimal policies of the original problem\. The effectiveness of HDCS is demonstrated through experiments conducted across various domains\. Especially, compared with representative baselines, the critic shaping can have 2X or 3X acceleration on task solving\.

## Who Watches the Watchers? Semantically\-Constrained Reinforcement Learning for Red\-Teaming Provenance Intrusion Detectors

**Authors:** Brayden Killeen; Derui Wang; Nasrin Sohrabi; Qin Wang; Zahir Tari; Minhui Xue

**ID:** 155171 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7lUWeTEm0T>) | [PDF](<https://openreview.net/pdf?id=7lUWeTEm0T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155171>)

Reconstruction\-based provenance intrusion detection systems \(PIDS\) detect malicious activity by classifying nodes in system\-call provenance graphs from per\-edge reconstruction errors produced by benign\-trained encoder\-\-decoders\.  Because these detectors run on the endpoints they monitor, adversarial robustness is a critical deployment concern, yet it remains rarely evaluated systematically\. We introduce ProvRL, a reinforcement\-learning framework for automated red\-teaming of these detectors, and use it to characterise the robustness of four leading PIDS spanning the four encoder families used in the field\. ProvRL casts red\-teaming as a semantically constrained graph\-editing MDP, with a factored autoregressive policy masked by transition relations mined from benign data and a GRU belief state, to model the multi\-step consequences of message passing on GNN\-based detectors\. ProvRL causes targeted false negatives in white\-, grey\-, and black\-box settings on three of four encoder families \(GNN, linear, VAE\) using 5\-99x fewer queries than exhaustive search; direct\-reconstruction encoders resist insertion attacks structurally, suggesting an architectural direction for robust detection\. No threshold\-adaptive aggregation policy maintains both a deployable false\-positive rate and meaningful evasion resistance, leaving adversarial retraining as the only viable defence on the vulnerable families\. ProvRL trains on CPU within hours and produces attack chains that replay as real Linux syscalls\. We release ProvRL as an open\-source red\-teaming tool for PIDS\.

## MemRL: Self\-Evolving Agents via Runtime Reinforcement Learning on Episodic Memory

**Authors:** Jiaqian Wang; Shengtao Zhang; Ruiwen Zhou; Junwei Liao; Yuchen Feng; Zhuo Li; Yujie Zheng; Weinan Zhang; Ying Wen; Zhiyu li; Feiyu Xiong; Yutao Qi; Bo Tang; Muning Wen

**ID:** 154245 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FBlIaSaXnX>) | [PDF](<https://openreview.net/pdf?id=FBlIaSaXnX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154245>)

The hallmark of human intelligence is the self\-evolving ability to master new skills by learning from past experiences\. However, current AI agents struggle to emulate this self\-evolution: fine\-tuning is computationally expensive and can introduce destabilizing weight updates, increasing the risk of catastrophic forgetting, while existing memory\-based methods rely on passive semantic matching that often retrieves noise\. To address these challenges, we propose MemRL, a non\-parametric approach that evolves via reinforcement learning on episodic memory\. By decoupling stable reasoning from plastic memory, MemRL employs a Two\-Phase Retrieval mechanism to filter noise and identify high\-utility strategies through environmental feedback\. Extensive experiments on Humanity's Last Exam, BigCodeBench, ALFWorld, and Lifelong Agent Bench demonstrate that MemRL significantly outperforms state\-of\-the\-art baselines, suggesting that MemRL offers a practical way to balance stability and plasticity during runtime improvement\.

## Efficient and Transferable Agentic Knowledge Graph RAG via Reinforcement Learning

**Authors:** Junhong Lin; Shicheng Liu; Jinyeop Song; Song Wang; Julian Shun; Yada Zhu

**ID:** 151304 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bSGKwc24We>) | [PDF](<https://openreview.net/pdf?id=bSGKwc24We>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151304>)

Knowledge\-graph retrieval\-augmented generation \(KG\-RAG\) couples large language models \(LLMs\) with structured, verifiable knowledge graphs \(KGs\) to reduce hallucination and provide reasoning traces\. However, current KG\-RAG systems often rely on fixed pipelines of multiple LLM modules \(e\.g\., planning, reasoning, and responding\), which inflate inference costs and tie performance to specific graph schemas\. To address this, we introduce KG\-R1, an agentic framework that optimizes KG\-RAG through reinforcement learning \(RL\)\. Unlike modular workflows, KG\-R1 uses a single agent that interacts with KGs as its environment, learning to retrieve information at each step and incorporating it into its reasoning and generation in a unified process\. Across Knowledge\-Graph Question Answering \(KGQA\) benchmarks, KG\-R1 demonstrates both efficiency and transferability—using Qwen 2\.5\-3B, KG\-R1 improves answer accuracy with fewer generation tokens than prior multi\-module workflow methods that use much larger foundation or fine\-tuned models\. Furthermore, KG\-R1 exhibits strong plug\-and\-play capability: after training, maintaining accuracy on unseen KGs without retraining\. These properties make KG\-R1 a promising KG\-RAG framework for real\-world deployment\. Our code is publicly available at anonymous\.4open\.science/r/KG\-R1\-B881/\.

## Tool\-Integrated Reasoning via Hierarchical Multi\-Agent Reinforcement Learning

**Authors:** Yiwei Dai; Hengyi Cai; Yili Wang; Zexu Sun; Shuaiqiang Wang; Yuchen Li; Xin Wang; Yi Chang; Dawei Yin

**ID:** 148956 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tu0xIum8Fk>) | [PDF](<https://openreview.net/pdf?id=tu0xIum8Fk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148956>)

Tool\-Integrated Reasoning \(TIR\) enables large language models to solve complex tasks by invoking external tools during reasoning\. Existing methods typically rely on either single\-agent reinforcement learning for unified optimization or multi\-agent systems for explicit role decomposition\. However, single\-agent RL often entangles high\-level planning with low\-level execution, while multi\-agent systems may suffer from role mismatch when different roles are optimized independently\. To address this limitation, we introduce the principle of decoupled inference with hierarchical alignment: high\-level planning and low\-level execution should remain separated during inference, while their policies should be aligned through shared task feedback during training\. We instantiate this principle as \*\*HATR\*\*, a \*\*H\*\*ierarchically \*\*A\*\*ligned framework for \*\*T\*\*ool \*\*R\*\*easoning\. At inference time, \*\*HATR\*\* represents each reasoning turn as a tree\-structured decision process, where a high\-level planning role determines the action branch and step goal, and a low\-level execution role realizes this decision through tool use or internal reasoning\. During training, \*\*HATR\*\* performs hierarchical multi\-agent reinforcement learning by sampling online trajectories, deriving preference signals from task\-level rewards, and alternately optimizing policies across decision levels\. This cross\-level optimization aligns roles across the multi\-agent hierarchy while preserving their functional boundaries\. Experiments on mathematical reasoning and question\-answering benchmarks across multiple backbones show that \*\*HATR\*\* consistently improves task performance over single\-agent and multi\-agent baselines\.

## SurgReasoner: Surgical Reasoning Segmentation with Dynamic Difficulty\-Aware Reinforcement Learning

**Authors:** Dong Zhang; Cheng Xue

**ID:** 155715 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3S2PCXYUIS>) | [PDF](<https://openreview.net/pdf?id=3S2PCXYUIS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155715>)

Surgical reasoning segmentation requires a model to infer the target instrument or anatomical structure from an implicit clinical query and produce a pixel\-level mask\. This setting is far more challenging than category\-level surgical segmentation, as targets are specified by functional role, spatial relation, or anatomical interaction rather than explicit class names\. It also exposes a key limitation of existing reinforcement learning\-based visual grounding methods: standard reward normalization tends to under\-optimize clinically important hard samples, such as small instruments, occluded organs, and ambiguous targets\. To address this, we introduce SurgSeg\-14K, a surgical reasoning segmentation benchmark with over 14K image\-mask pairs across seven surgical scenarios and 30 fine\-grained categories\. Each sample links an implicit clinical query to a binary mask, spatial annotations, and a reasoning trajectory\. We further propose SurgReasoner, which decomposes the task into two stages: clinical query interpretation for spatial prompt generation, and prompt\-based mask generation with a frozen segmentation model\. To improve reinforcement learning for spatial reasoning, we introduce a dynamic difficulty\-aware reweighting strategy that combines intrinsic target difficulty with rollout correctness, enabling training to focus on challenging targets\. Experiments on SurgSeg\-14K show that SurgReasoner outperforms the strongest grounding baseline by large margins, with consistent gains especially on hard samples, suggesting a practical path toward reasoning\-driven surgical visual perception\.

## SOLE\-R1: Video\-Language Reasoning as the Sole Reward for On\-Robot Reinforcement Learning

**Authors:** Philip Schroeder; Thomas Weng; Karl Schmeckpeper; Eric Rosen; Stephen Hart; Ondrej Biza

**ID:** 153893 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HvikTXllja>) | [PDF](<https://openreview.net/pdf?id=HvikTXllja>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153893>)

Vision\-language models \(VLMs\) have shown impressive capabilities across diverse tasks, motivating efforts to leverage these models to supervise robot learning\. However, when used as evaluators in reinforcement learning \(RL\), today’s strongest models often fail under partial observability and distribution shift, enabling policies to exploit perceptual errors rather than solve the task\. We introduce SOLE\-R1 \(Self\-Observing LEarner\), a video\-language reasoning model explicitly designed to serve as the sole reward signal for online RL\. Given only raw video observations and a natural\-language goal, SOLE\-R1 performs per\-timestep spatiotemporal chain\-of\-thought \(CoT\) reasoning and produces dense estimates of task progress that can be used directly as rewards\. To train SOLE\-R1, we develop a large\-scale video trajectory and reasoning synthesis pipeline that generates temporally grounded CoT traces aligned with continuous progress supervision\. This data is combined with foundational spatial and multi\-frame temporal reasoning, and used to train the model with a hybrid framework that couples supervised fine\-tuning with RL from verifiable rewards\. Across four different simulation environments and a real\-robot setting, SOLE\-R1 enables zero\-shot online RL from random initialization: robots learn previously unseen manipulation tasks without ground\-truth rewards, success indicators, demonstrations, or task\-specific tuning\. SOLE\-R1 succeeds on 24 unseen tasks and substantially outperforms strong vision\-language rewarders, including GPT\-5 and Gemini\-3\-Pro, while exhibiting markedly greater robustness to reward hacking\.

## DGRAF: Observation\-Quality\-Aware Reinforcement Learning for Dynamic Reconfigurable Batteries

**Authors:** Jiasong Chen; Jingwei Hu; Zheng Fang; Zhihong Zhang

**ID:** 155974 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1QZxzf78Bp>) | [PDF](<https://openreview.net/pdf?id=1QZxzf78Bp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155974>)

_Abstract unavailable from the accessible public sources._

## One for All: A Non\-Linear Transformer can enable Cross\-Domain Generalization for In\-Context Reinforcement Learning

**Authors:** Bowen He; Juncheng Dong; Lin Lin; Xiang Cheng

**ID:** 151574 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZZh6M076fq>) | [PDF](<https://openreview.net/pdf?id=ZZh6M076fq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151574>)

_Abstract unavailable from the accessible public sources._

## Think2SQL: Blueprinting Reward Density and Advantage Scaling for Effective Text\-to\-SQL Reasoning

**Authors:** Simone Papicchio; Simone Rossi; Luca Cagliero; Papotti Paolo

**ID:** 156768 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NxU1KWnpOG>) | [PDF](<https://openreview.net/pdf?id=NxU1KWnpOG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156768>)

_Abstract unavailable from the accessible public sources._

## Information\-Directed Offline\-to\-Online Reinforcement Learning

**Authors:** Keru Chen

**ID:** 154972 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9YV37OfwpJ>) | [PDF](<https://openreview.net/pdf?id=9YV37OfwpJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154972>)

_Abstract unavailable from the accessible public sources._

## Uncertainty\-Guided Reward Labeling for Reinforcement Learning under Limited Feedback

**Authors:** Renhao Zhang; Shreyas Chaudhari; Bruno Silva

**ID:** 149046 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tHUPLE3JIc>) | [PDF](<https://openreview.net/pdf?id=tHUPLE3JIc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149046>)

In reinforcement learning from limited feedback \(RLLF\), only a small fraction of an offline dataset can be labeled with rewards, and the central question is \*which\* samples should be labeled to learn a strong policy from the resulting partially labeled dataset\. Prior work formalized this as a reward\-selection problem by focusing on the selection stage while treating downstream policy learning as a black box, in a regime where queried rewards are not retained for reward\-model training\. We instead study the retained\-label setting, where queried rewards can be stored and used to fit a reward model before policy learning\. We bound the suboptimality of the learned policy by two sources of error: one from offline RL on an offline dataset, and one from reward\-model uncertainty\.  Since reward selection cannot change the offline dataset, the limited labeling budget must be used to strategically reduce reward uncertainty\. Motivated by RLLF's observation that useful rewards tend to keep the agent on high\-return trajectories, we propose successor\-guided uncertainty reduction \(SURE\), which uses successor features to select rewards that are both reachable to high\-valued states and uncertainty\-reducing\. Theoretically, we derive SURE from a bound\-induced design objective and characterize its exact one\-step marginal gain\. Empirically, SURE reaches near full\-feedback performance with few reward labels across a variety of domains, yielding a strong method for feedback\-efficient reinforcement learning\.

## Drifting Field Policy: Wasserstein Gradient Flow on Policy Space for Offline\-to\-Online RL

**Authors:** Juil Koo; Mingue Park; Jiwon Choi; Yunhong Min; Minhyuk Sung

**ID:** 151871 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XGZrKnM8Qo>) | [PDF](<https://openreview.net/pdf?id=XGZrKnM8Qo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151871>)

We propose Drifting Field Policy \(DFP\), a non\-ODE one\-step generative policy built on the drifting model paradigm\. Under online RL finetuning, we frame the policy update as a reverse\-KL Wasserstein\-2 gradient flow toward a soft target policy, realized by DFP as a steepest\-descent step on probability space\. By construction, this gradient step is decomposed into an ascent toward higher action\-value regions and a score matching with the anchor policy as a trust region\. We further derive a simple, tractable surrogate of the otherwise intractable update loss, akin to behavior cloning on top\-K critic\-selected actions\. We find empirically that this mechanism uniquely benefits the drifting backbone owing to its non\-ODE parameterization\. With one\-step inference, DFP achieves state\-of\-the\-art performance on several manipulation tasks across Robomimic and OGBench, outperforming ODE\-based policies\.

## Beyond Self\-Play and Scale: A Behavior Benchmark for Generalization in Autonomous Driving

**Authors:** Aron Distelzweig; Faris Janjos; Andreas Look; Anna Rothenhäusler; Daniel Jost; Oliver Scheel; Raghu Rajan; Daphne Cornelisse; Eugene Vinitsky; Joschka Boedecker

**ID:** 139295 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z1EcOqde6o>) | [PDF](<https://openreview.net/pdf?id=Z1EcOqde6o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139295>)

Recent Autonomous Driving \(AD\) works such as GigaFlow and PufferDrive have unlocked Reinforcement Learning \(RL\) at scale as a training strategy for driving policies\. Yet such policies remain disconnected from established benchmarks, leaving the performance of large\-scale RL for driving on standardized evaluations unknown\. We present BehaviorBench \-\- a comprehensive test suite that closes this gap along three axes: Evaluation, Complexity, and Behavior Diversity\. In terms of Evaluation, we provide an interface connecting PufferDrive to nuPlan, which, for the first time, enables policies trained via RL at scale to be evaluated on an established planning benchmark for autonomous driving\. Complementarily, we offer an evaluation framework that allows planners to be benchmarked directly inside the PufferDrive simulation, at a fraction of the time\. Regarding Complexity, we observe that today's standardized benchmarks are so simple that near\-perfect scores are achievable by straight lane following with collision checking\. We extract a meaningful, interaction\-rich split from the Waymo Open Motion Dataset \(WOMD\) on which strong performance is impossible without multi\-agent reasoning\.  Lastly, we address Behavior Diversity\. Existing benchmarks commonly evaluate planners against a single rule\-based traffic model, the Intelligent Driver Model \(IDM\)\. We provide a diverse suite of interactive traffic agents to stress\-test policies under heterogeneous behaviors, beyond just using IDM\. Overall, our benchmarking analysis uncovers the following insight: despite learning interactive behaviors in an emergent manner, policies trained via pure self\-play under standard reward functions overfit to their training opponents and fail to generalize to other traffic agent behaviors\. Building on this observation, we propose a hybrid planner that combines a PPO policy with a rule\-based planner, providing a baseline for our new benchmark\.  Code is available at https://anonymous\.4open\.science/r/behavior\-bench\-707C

## Learning to Audit ML Models with Theory of Mind

**Authors:** Yao Rong; Vaibhav Unhelkar

**ID:** 155783\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155783

[Paper](<https://openreview.net/forum?id=2vhiHLMdzi>) | [PDF](<https://openreview.net/pdf?id=2vhiHLMdzi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155783>)

When auditing machine learning models, human experts sequentially inspect model predictions and explanations, gradually building a mental model of the model’s behavior to uncover errors\. This manual process is critical for safe deployment in high\-stakes domains but fundamentally limited in scalability\. In this work, we propose a novel method to simulate this human auditing behavior for automating the auditing process\. We formalize auditing as a sequential decision\-making problem, modeled as a Markov decision process\. Our state representation summarizes the auditor’s accumulated knowledge of model predictions and feature usage\. Building on this formalization, we solve the MDP using reinforcement learning, yielding RLAuditor, which learns to select informative test samples to efficiently uncover model errors\. We further connect our formalization to Theory of Mind, showing that our state mirrors how human auditors build mental models: its update rule is equivalent to Bayesian belief revision and it converges to the model’s behavioral pattern at an interpretable rate\. We validate our approach on multiple ML models and datasets across different data modalities\. In a human subject study, we demonstrate that RLAuditor helps human auditors produce more accurate audit reports in less time\.

## Generalized Intention Modeling in Multi\-Agent Reinforcement Learning

**Authors:** Mateusz Odrowaz\-Sypniewski; Jasmine Bayrooti; Ajay Shankar; Amanda Prorok

**ID:** 151588\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151588

[Paper](<https://openreview.net/forum?id=ZSayYS6nBW>) | [PDF](<https://openreview.net/pdf?id=ZSayYS6nBW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151588>)

Modeling an opponent’s intent is critical for effective decision\-making in non\-cooperative, competitive, and general\-sum multi\-agent reinforcement learning\. Existing opponent modeling methods encode intent using an embedding derived from episode information chosen a priori, such as the opponent’s next action or a future environment state, and use this to guide the ego\-agent’s behavior\. These approaches assume that the chosen information is universally representative of intent; however, we show empirically that this is not the case as intentions are often task\- and environment\-dependent\. To address this, we introduce a task\-adaptive opponent modeling framework that learns a performance\-driven mixture of multiple intent representations\. We further introduce a new intention representation that maximizes mutual information with the ego\-agent’s future returns, thereby capturing opponent information that is most directly relevant to performance\. Our approach consistently matches or exceeds the performance of state\-of\-the\-art baselines across diverse tasks and yields insights into when and why different opponent modeling strategies succeed\.

## GDMD: Guiding Distribution Matching Distillation with Gradient\-Based Reinforcement Learning

**Authors:** Linwei Dong; Ruoyu Guo; Ge Bai; Quan Zheng; Yawei Luo; Changqing Zou

**ID:** 152678\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152678

[Paper](<https://openreview.net/forum?id=RFJrFfNSEC>) | [PDF](<https://openreview.net/pdf?id=RFJrFfNSEC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152678>)

Diffusion distillation, exemplified by Distribution Matching Distillation \(DMD\), has shown great promise in few\-step generation but often sacrifices quality for sampling speed\. While integrating Reinforcement Learning \(RL\) into distillation offers potential, a naive fusion of these two objectives relies on suboptimal raw sample evaluation\. This sample\-based scoring creates inherent conflicts with the distillation trajectory and produces unreliable rewards due to the noisy nature of early\-stage generation\. To overcome these limitations, we propose GDMD, a novel framework that redefines the reward mechanism by prioritizing distillation gradients over raw pixel outputs as the primary signal for optimization\. By reinterpreting the DMD gradients as implicit target tensors, our framework enables existing reward models to directly evaluate the quality of distillation updates\. This gradient\-level guidance functions as an adaptive weighting that synchronizes the RL policy with the distillation objective, effectively neutralizing optimization divergence\. Empirical results show that GDMD sets a new SOTA for few\-step generation\. Specifically, our 4\-NFE \(Number of Function Evaluations\) models outperform the quality of their multi\-step teacher and substantially exceed previous DMDR results in GenEval and human\-preference metrics, exhibiting strong scalability potential\.

## PAIR: Prefix\-Aware Internal Reward Model for Multi\-Turn Agent Optimization

**Authors:** Wonjoong Kim; Yeonjun In; Sangwu Park; Dongha Lee; Chanyoung Park

**ID:** 156086\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156086

[Paper](<https://openreview.net/forum?id=0Ut88MX4Oj>) | [PDF](<https://openreview.net/pdf?id=0Ut88MX4Oj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156086>)

A significant hurdle for current LLMs is the execution of complex, multi\-stage tasks\.  Group Relative Policy Optimization \(GRPO\) has been emerging as a leading choice, but its reliance on sparse outcome rewards severely limits credit assignment across intermediate steps\. Existing remedies—running full rollouts to assign step\-level advantages, calling external LLM judges at each step, or computing intrinsic rewards that require ground\-truth answers at every evaluation—introduce significant costs or practical constraints\.  We hypothesize that internal correctness probing over LLM hidden states can be repurposed as a step\-level reward signal, potentially addressing all of these limitations at once\.  However, existing probing research assumes clean inputs, and we first show that this assumption breaks down in multi\-step settings: hidden\-state probes degrade severely under prefix contamination—tracking coherence with the \(possibly corrupted\) prefix rather than grounded correctness—while attention\-based features remain robust to contamination but underperform on clean prefixes\. Building on this complementary relationship, we propose the Prefix\-Aware Internal Reward \(PAIR\)—a two\-stage model with a frozen hidden\-state probe estimating belief\-consistency and a lightweight attention\-based head correcting it toward grounded correctness\. Experimental results show that PAIR achieves the highest AUROC on contaminated trajectories while operating at negligible inference cost, enabling dense step\-level reward signals for GRPO training without external model calls, ground\-truth dependencies, or full\-trajectory rollouts\.

## Learning to Explore with Parameter\-Space Noise: A Deep Dive into Parameter\-Space Noise for Reinforcement Learning with Verifiable Rewards

**Authors:** Bizhe Bai; Xinyue Wang; Peng Ye; Tao Chen

**ID:** 154785\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154785

[Paper](<https://openreview.net/forum?id=B0ocUGMRAN>) | [PDF](<https://openreview.net/pdf?id=B0ocUGMRAN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154785>)

Reinforcement Learning with Verifiable Rewards \(RLVR\)  enhances large language model \(LLM\) reasoning, yet growing evidence indicates an \\emph\{exploration ceiling\}: they tend to reweight existing solution traces and produce low\-diversity rollouts\. This restricts the discovery of novel solution perspective and weakens out\-of\-distribution generalization\. We address this limitation by directly perturbing the rollout policy's parameters while updating the clean policy model as usual, an approach that achieves better temporal consistency and yields more complex behavior patterns\. To stabilize learning from these perturbed rollouts, which are inherently off\-policy, we incorporate truncated importance sampling\. Furthermore, we introduce a lightweight, dynamic noise scheduler based on semantic diversity and model self\-certainty to optimally adjust the noise scale\. Instantiated on GRPO, our method \(PSN\-GRPO\) demonstrates its efficacy through four key contributions: \(1\) it improves high\-budget pass@$k$, increases semantic and operational diversity, increases CoT consistency, and remains complementary to  exploration\-oriented RLVR techniques; \(2\) it validates efficacy across multiple models, including Qwen2\.5, Qwen3, and Llama\-3\.1; \(3\) it shows robust performance on out\-of\-distribution science and coding benchmarks; and \(4\) it uncovers novel solution perspectives for problems the original model could not solve, as shown by qualitative analysis\.

## Shared Modular Recurrence in Contextual MDPs for Universal Morphology Control

**Authors:** Laurens Engwegen; Max Weltevrede; Caroline Horsch; Daan Brinks; Wendelin Boehmer

**ID:** 154044\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154044

[Paper](<https://openreview.net/forum?id=Gegwgu6VmY>) | [PDF](<https://openreview.net/pdf?id=Gegwgu6VmY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154044>)

A universal controller for any robot morphology would greatly improve computational and data efficiency\. Steps have been made towards such multi\-robot control by utilizing \*contextual\* information about the properties of individual robots and exploiting their modular structure in the architecture of deep reinforcement learning agents\. When the robots have highly dissimilar morphologies, however, this becomes a challenging problem, especially when the agent must generalize to new, unseen robots\. In this paper, we posit that contextual features are often only partially available, but that they can be recovered through modular interactions\. This can allow for better multi\-robot control and generalization to contexts that are not seen during training\. To this extent, we implement a transformer\-based architecture with shared modular recurrence and evaluate its \(generalization\) performance on a large set of MuJoCo robots\. The results show a substantial improvement in zero\-shot generalization performance on robots with unseen dynamics, kinematics, and topologies, in four different environments\.

## Unveiling Implicit Advantage Symmetry: Why GRPO Struggles with Exploration and Difficulty Adaptation

**Authors:** zhiqi yu; Zhangquan Chen; Mengting Liu; Heye Zhang; Liangqiong Qu

**ID:** 153467\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153467

[Paper](<https://openreview.net/forum?id=L7H48b3yB6>) | [PDF](<https://openreview.net/pdf?id=L7H48b3yB6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153467>)

Reinforcement Learning with Verifiable Rewards \(RLVR\), particularly GRPO, has become the standard for eliciting LLM reasoning\. However, its efficiency in exploration and difficulty adaptation remains an open challenge\. In this work, we identify an implicit advantage symmetry inherent in Group Relative Advantage Estimation \(GRAE\) as a structural property that provides a new perspective for understanding these bottlenecks\. This symmetry induces two critical limitations: \(i\) at the group level, strict symmetry in weights between correct and incorrect trajectories leaves unsampled action logits unchanged, thereby hindering the exploration of novel correct solution\. \(ii\) at the sample level, the algorithm implicitly prioritizes medium\-difficulty samples, remaining agnostic to the non\-stationary demands of difficulty focus\. Through controlled experiments, we reveal that this symmetric property is sub\-optimal, yielding two pivotal insights: \(i\) asymmetrically down\-weighting the advantages of correct trajectories encourages essential exploration but risks instability; \(ii\) learning efficiency can be boosted by a curriculum\-like transition—prioritizing simpler samples initially before gradually shifting to complex ones\. Motivated by these findings, we propose Asymmetric GRAE \(A\-GRAE\), which dynamically modulates exploration incentives and sample\-difficulty focus\. Experiments across seven benchmarks demonstrate that A\-GRAE consistently improves GRPO and its variants across both LLMs and MLLMs\.

## Safe\-Fair MACPO: Burden\-Fair Constrained Policy Optimization for Safe Multi\-Agent Reinforcement  Learning

**Authors:** Ankita Kushwaha; KIRAN RAVISH; Preeti; Pawan Kumar

**ID:** 151944\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151944

[Paper](<https://openreview.net/forum?id=Wff0AXdNL4>) | [PDF](<https://openreview.net/pdf?id=Wff0AXdNL4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151944>)

Safe multi\-agent reinforcement learning usually constrains team\-level safety cost, but a safe team can still assign the same agent to repeatedly wait, yield, detour, absorb intervention, or lose access to a scarce resource\. We study this failure mode as \*burden unfairness under hard safety\*\. Safe\-Fair multi\-agent constrained policy optimization \(Safe\-Fair MACPO\) augments MACPO with agent\-wise burden logging, a temporal fairness\-debt state, a fairness critic, and a two\-cost trust\-region update\. Safety is lexicographically primary: recovery may override fairness to avoid unsafe actions, while the resulting imbalance is stored as debt and penalized later\. We give a safety\-first Pareto theory showing that the exact safe\-fair constrained selector is strongly Pareto efficient for reward, safety, and fairness, with hard\-safety and temporal burden\-gap certificates\. Empirically, the primary reported rows keep zero hard violations while improving useful burden balance: HalfCheetah\-2x3\-Fair improves selected safe return from $2145\.5$ to $2637\.4$ and Jain burden from $0\.903$ to $0\.977$; Safety\-Gym MultiGoal\-Fair reaches the lowest matched\-budget scalar fairness cost with zero safety cost; and VMAS\-SafeMultiGoal improves over recovery\-only attribution controls\. We separate social/resource fairness from mechanical workload imbalance and reserve mixed or recovery\-explained rows for qualified appendix analysis\.

## Meta\-TTRL: A Metacognitive Framework for Self\-Improving Test\-Time Reinforcement Learning for T2I Generation in Unified Multimodal Models

**Authors:** Lit Sin Tan; Junzhe Chen; Xiaolong Fu; Lichen Ma; Junshi Huang; Jianzhong Shi; Yan Li; Lijie Wen

**ID:** 154244\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154244

[Paper](<https://openreview.net/forum?id=FCG3whxlfW>) | [PDF](<https://openreview.net/pdf?id=FCG3whxlfW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154244>)

Test\-time scaling \(TTS\) improves text\-to\-image \(T2I\) generation in unified multimodal models \(UMMs\), but existing TTS methods typically rely on frozen\-parameter search or sampling, yielding only ephemeral, instance\-level improvements\. We propose Meta\-TTRL, a metacognitive test\-time reinforcement learning \(TTRL\) framework that converts test\-time generation experience into learning signals, enabling UMMs to self\-improve during T2I generation without external reward models\. Meta\-TTRL formulates test\-time learning as a closed\-loop interaction between an object\-level generator and a meta\-level introspector\. The introspector decomposes prompts into structured verification rubrics and produces confidence\-enhanced intrinsic monitoring signals, which are used to optimize the generator policy through reinforcement learning \(RL\)\. Extensive experiments demonstrate that Meta\-TTRL generalizes well across three representative UMMs, including Janus\-Pro\-7B, BAGEL, and Qwen\-Image, achieving significant gains on compositional reasoning tasks and multiple T2I benchmarks with limited data\. Further analyses with external introspectors, RL leakage, and alternative monitoring signals reveal a key principle for effective TTRL: metacognitive synergy, where monitoring signals must align with the model's own optimization regime\.

## Escaping Path Mirages in Offline Goal\-Conditioned Reinforcement Learning

**Authors:** Seungyul Han; Junhyeon Bae; Jaebak Hwang; Gwanwoo Choi; Minung Kim

**ID:** 151359\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151359

[Paper](<https://openreview.net/forum?id=b9QDpSzHr4>) | [PDF](<https://openreview.net/pdf?id=b9QDpSzHr4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151359>)

Offline goal\-conditioned reinforcement learning remains challenging in stochastic long\-horizon settings, where compounding value estimation errors hinder reliable goal reaching\. While prior methods have sought to address this challenge through various approaches, a key challenge remains path mirage, where agents overcommit to spuriously successful trajectories in offline datasets induced by stochasticity, often leading to failure on difficult tasks\. To address this issue, we propose Branch\-aware Graph Planning \(BGP\), which captures stochastic branching structures by identifying high\-variability points as graph nodes and designing goal\-conditioned edges with segmented learning to avoid unreliable branches and reduce unnecessary stochasticity along paths\. As a result, BGP enables reliable goal reaching even in highly stochastic long\-horizon environments, and experiments on diverse OGBench tasks show that it substantially outperforms prior state\-of\-the\-art offline goal\-conditioned RL methods\.

## Unleashing the Power of Intrinsic\-Entropy\-Driven Exploration for Off\-Policy Generative RL

**Authors:** Feihong Zhang; Guojian Zhan; yinuo Wang; Letian Tao; Likun Wang; Shiqi Liu; Yao Lyu; Shengbo Eben Li

**ID:** 150470\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150470

[Paper](<https://openreview.net/forum?id=hnh5y3DwoB>) | [PDF](<https://openreview.net/pdf?id=hnh5y3DwoB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150470>)

Generative models, such as diffusion and flow\-based models, have emerged as powerful policy approximators in deep reinforcement learning \(RL\) due to their ability to represent multi\-modal action distributions\. However, their potential for maximum entropy RL remains largely untapped, as most existing methods treat generative processes as black\-box samplers or rely on heuristic noise\. In this paper, we propose GENIEO, a novel off\-policy generative RL framework that leverages the exact intrinsic entropy of an augmented dummy\-action policy to drive principled exploration\. By designing a structurally invertible affine dual\-variable flow, we bypass the numerical approximations of standard ODE solvers\. This innovation allows us to rigorously apply the change\-of\-variables formula to derive a tractable and exact formulation for the augmented dummy\-action policy entropy, enabling its direct integration into the off\-policy learning objective\. Experimental evaluations across 14 challenging tasks from the DMControl and HumanoidBench suites demonstrate that GENIEO achieves state\-of\-the\-art \(SOTA\) performance\. By effectively discovering optimal strategies in complex, high\-dimensional environments, our approach bridges the gap between expressive generative modeling and maximum entropy RL\.

## Non\-Asymptotic Best Policy Identification Guarantees in Online Reinforcement Learning

**Authors:** Joseph Lazzaro; Alessio Russo; Aldo Pacchiano

**ID:** 155132\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155132

[Paper](<https://openreview.net/forum?id=8AVpizcVK2>) | [PDF](<https://openreview.net/pdf?id=8AVpizcVK2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155132>)

In this work we study the Best Policy Identification \(BPI\) problem in online, tabular Reinforcement Learning\. This is an active sequential hypothesis testing problem in which the learner's objective is to identify an optimal policy in a Markov Decision Process \(MDP\) with high confidence, while minimizing the expected sample complexity to do so\. We consider an online setting with deterministic rewards, where the agent must strategically navigate through the MDP in order to effectively explore\. Previous works in the literature have provided asymptotically optimal methods for BPI, such as the Navigate and Stop \(NaS\) algorithm and its variants, however existing analysis remains asymptotic\. In this work, we fill that gap by providing the first non\-asymptotic sample complexity guarantees for NaS, showing that its sample complexity depends not only on the characteristic time, but also on the connectivity of the underlying MDP, the curvature of the optimal characteristic time, and other instance\-dependent quantities\. We identify these additional attributes and make explicit their contributions to the overall sample complexity\.

## HiFloat4 Format for End\-To\-End Reinforcement Learning Post\-Training of Large Language Models

**Authors:** Hei Yi Mak; Shadan Golestan; Hoang Le; Mehran Taghian Jazi; Yunke Peng; Yaoyuan Wang; Yao Wang; JUNSONG WANG; Tianchi Hu; Fengchen He; Guipeng Hu; Tanzila Rahman; Anandharaju D Raju

**ID:** 154752\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154752

[Paper](<https://openreview.net/forum?id=BDwmB9cg99>) | [PDF](<https://openreview.net/pdf?id=BDwmB9cg99>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154752>)

We present, to our knowledge, the first end\-to\-end FP4 RL post\-training, in which both the rollout and training policies, including their forward and backward passes, operate at 4\-bit precision\. A systematic study reveals that the dominant source of degradation in FP4 RL is not training\-side quantization error but rollout activation quantization: outliers stretch the dynamic range so far that a large number of activation values underflow to zero under FP4\. Counterintuitively, restoring the training policy to higher precision while keeping the rollout in FP4 makes accuracy worse than full FP4 baseline, exposing rollout–training mismatch as the principal failure mode and ruling out standard pretraining\-style fixes\. We address this with Rollout Residual Quantization \(Rollout\-ResQ\): a single residual correction term constrained to a hardware\-friendly sparsity pattern, added only to the FP4 rollout matmul — a lightweight correction that recovers most of the precision lost to outlier\-driven  underflow without inflating the rollout’s compute footprint\. On Qwen2\.5\-3B and Qwen2\.5\-Math\-7B, Rollout\-ResQ paired with the HiFloat4 \(HiF4\) format — whose three\-level hierarchical scaling preserves resolution under FP4’s tight 4\-bit budget — closes the accuracy gap to BF16 from 4\.9% to 1\.1%, bringing fully quantized FP4 RL within striking distance of full precision\. Applied to the open\-standard  MXFP4, the same recipe narrows the gap from 13\.6% to 5\.3%, revealing that FP4 format choice is a key factor that determines the ceiling on recoverable accuracy\. Together, these results establish HiF4 as the enabling format for end\-to\- end FP4 RL post\-training, and Rollout\-ResQ as the activation\-side mechanism that makes the gap to BF16 closable\.

## SkillForge: Co\-Evolving Skills and Agents via Dynamic Skill Lifecycles

**Authors:** Yuyao Ge; Yiwei Wang; Yuchen He; Baolong Bi; Lingrui Mei; Jiayu Yao; Lizhe Chen; Shenghua Liu

**ID:** 151649\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151649

[Paper](<https://openreview.net/forum?id=Z3a0qCfhFi>) | [PDF](<https://openreview.net/pdf?id=Z3a0qCfhFi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151649>)

Memory\-augmented reinforcement learning strengthens LLM agents' ability to solve complex long\-horizon tasks\. Skills are one such form of memory, pairing instructions with an applicability condition over task types\. However, retaining every skill indiscriminately as the policy improves lets obsolete or harmful entries accumulate and mislead the agent\. We propose SkillForge, an agentic RL method that compiles and evolves the skill library through a fitness\-driven skill lifecycle of trial, active, stable, and retired states, so that the skills and the model co\-evolve throughout training\. A preliminary evaluation phase first uses the base model's own rollouts to pre\-retire low\-fitness skills, yielding a filtered library that then seeds supervised fine\-tuning\. Reinforcement learning takes over from this checkpoint, and at each iteration selective retirement, stabilization, and LLM\-guided mutation continue to forge the skill library alongside policy optimization\. Across multiple interactive agent benchmarks, SkillForge achieves the highest aggregate success rate, delivering up to 7\.8\\% relative improvement over the strongest baseline while keeping the skill library compact throughout training\. We introduce Skillfurnace, a dataset of 5k\+ annotated records bundling retirement\-filtered SFT trajectories, evolved skill libraries with fitness annotations, and retirement events with human\-annotated failure categories to support research on skill quality and lifecycle management\.

## Target\-Aligned Reinforcement Learning

**Authors:** Leonard S\. Pleiss; James Harrison; Maximilian Schiffer

**ID:** 150631\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150631

[Paper](<https://openreview.net/forum?id=geGOtycFCT>) | [PDF](<https://openreview.net/pdf?id=geGOtycFCT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150631>)

_Abstract unavailable from the accessible public sources._

## Local Policy Manifolds for Efficient Multi\-Objective Reinforcement Learning

**Authors:** Qiyue Xia; Tianwei Wang; J\. Michael Herrmann

**ID:** 149916\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149916

[Paper](<https://openreview.net/forum?id=mF8mCetv02>) | [PDF](<https://openreview.net/pdf?id=mF8mCetv02>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149916>)

_Abstract unavailable from the accessible public sources._

## Test\-Time Gradient Guidance of Flow Policies in Reinforcement Learning

**Authors:** Zhiyuan \(Paul\) Zhou; Andy Peng; Charles Xu; Qiyang Li; Jost Springenberg; Kevin Frans; Sergey Levine

**ID:** 153144\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153144

[Paper](<https://openreview.net/forum?id=NYzL9idgNU>) | [PDF](<https://openreview.net/pdf?id=NYzL9idgNU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153144>)

Expressive continuous control policies, such as diffusion and flow models, form the backbone of recent advances in scaling imitation learning for simulated and real robot control\. While they are known to scale stably in the supervised imitation learning setting, incorporating them into reinforcement learning \(RL\) pipelines for policy improvement has proven more difficult\. It often requires specialized training objectives or back\-propagating through denoising processes, which cause well known issues with stability and affects scalability\. In this paper we study the question of whether simple policy improvement schemes at test time alone, leaving stable supervised policy training intact, can be a competitive alternative which side\-steps these issues\. To this end, we propose QGF \(Q\-Guided Flow\), a new RL algorithm that performs policy optimization entirely during test time\. QGF works by pre\-training both a reference flow policy \(via a standard behavioral cloning objective\) and a value function critic and, during test\-time, using the value gradient to guide the reference policy to generate higher\-value actions without any additional policy learning\. Empirically, QGF outperforms prior test\-time RL methods while being much cheaper to run, and is competitive with state\-of\-the\-art training\-time algorithms on single\-task and goal\-conditioned offline RL benchmarks with high\-dimensional action spaces\. Moreover, it exhibits favorable scaling with model size by avoiding the instability of actor\-critic training, offering a practical and effective alternative RL algorithm with expressive policies\.

## SALT: When More Rollouts Don’t Help in Group\-Based Policy Optimization and How to Make Them Matter

**Authors:** Powei Chang; Jinpeng Zhang; Chaoqun Sun; MiniWell Tsao; Lianrui Li; JianXiang Xiang; Chenyu Wang; Yukang Gao; Dongying kong

**ID:** 153988\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153988

[Paper](<https://openreview.net/forum?id=H3EiJWynbi>) | [PDF](<https://openreview.net/pdf?id=H3EiJWynbi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153988>)

Reinforcement learning with verifiable rewards \(RLVR\) often adopts GRPO\-style group\-relative updates, sampling multiple rollouts per prompt to construct normalized learning signals\. However, merely increasing the number of rollouts does not reliably strengthen learning: under GRPO\-style group normalization, per\-rollout policy\-gradient features can concentrate into a low\-rank, signed geometry, causing substantial cancellation during aggregation and weakening the effective update\.  We address this failure mode with SALT, a Subspace\-Adaptive geometry pLug\-in componenT that uses sample\-wise gradient geometry to reweight the coefficients of group\-relative updates\. SALT estimates a dominant shared subspace from the mini\-batch Gram geometry, decomposes group\-relative coefficients into shared and residual channels, and adaptively amplifies the residual channel when signed cancellation is severe\. Across diverse reasoning\-oriented RLVR benchmarks and model scales, SALT improves effective update geometry and performance without modifying the reward model or the rollout sampling procedure\.

## DetailAnywhere: Fashion Detail Generation via Cross\-Modal Feature Alignment Distillation

**Authors:** Zijun Li; Yimin Zhou; Jia Sun; Honglie Wang; Pengcheng Wei; junlong wu; Yongrui Heng; Jiyuan Wang; Huan Ouyang; Boheng Zhang; Huaiqing Wang; Dewen Fan; Qianqian Gan; Fan Yang; Tingting Gao

**ID:** 151134\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151134

[Paper](<https://openreview.net/forum?id=ckGG0WagkI>) | [PDF](<https://openreview.net/pdf?id=ckGG0WagkI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151134>)

Diffusion\-based generative AI has achieved remarkable success in e\-commerce applications such as virtual try\-on, poster generation, and product background synthesis\. However, when making online purchasing decisions for apparel, consumers also desire the freedom to examine specific detail regions of interest, such as collars, cuffs, and fabric textures, yet existing methods have not explicitly studied this setting\. We therefore formalize a new, non\-template task: Fashion Detail Generation with focus conditioning, and release \*\*FDBench\*\*, the first dataset and benchmark comprising 40K\+ human\-verified reference\-detail pairs across 41 different categories\. This task poses a unique semantic gap challenge: the model must bridge the correspondence between a focus marker on a product reference image and a photorealistic close\-up view of the indicated region, while faithfully preserving the garment's identity, without any precise prompt\. To bridge this gap, we propose Cross\-modal Feature Alignment Distillation \(\*\*CFAD\*\*\), which leverages a fine\-tuned DINOv3 teacher to align both branches of a Multimodal Diffusion Transformer in a shared semantic space via dual\-branch distillation\. To further improve consistency between generated details and reference images, we introduce a consistency reward model that jointly scores image pairs along three quality axes and optimizes generation via reinforcement learning\. Experiments show that our model \*\*DetailAnywhere\*\* significantly outperforms all state\-of\-the\-art opensource methods across all metrics and human evaluations\.

## Distribution\-Adaptive Policy Optimization

**Authors:** Yuxiao He; Ziqi Wang; Xingzhou Lou; Xiaoqian Liu; Junge Zhang

**ID:** 155766\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155766

[Paper](<https://openreview.net/forum?id=35C6J7b2RQ>) | [PDF](<https://openreview.net/pdf?id=35C6J7b2RQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155766>)

Reinforcement Learning with Verifiable Rewards empowers Large Language Models to enhance their reasoning capabilities\. Most algorithms rely on on\-policy training, which is stable but inefficient due to its strict dependency on fresh samples\. To overcome this inefficiency, off\-policy RL decouples experience generation from policy optimization via Importance Sampling \(IS\)\. However, this introduces a policy discrepancy between the behavior policy and the target policy\. We observe that mainstream RLVR algorithms struggle to maintain a balance between performance and stability in off\-policy scenarios, suffering from either severe performance degradation or training collapse\. We identify the root cause as the failure of static trust regions to maintain the bias\-\-variance trade\-off associated with IS ratios in off\-policy settings\. To address this, we propose \*\*DI\*\*stribution\-adaptive \*\*P\*\*olicy \*\*O\*\*ptimization \(\*\*DIPO\*\*\), a novel hyperparameter\-free RLVR algorithm employing an adaptive trust region\. DIPO leverages the intrinsic statistics of the IS ratio distribution to achieve a robust bias\-\-variance trade\-off\. Experimental results demonstrate that DIPO enables stable training in extreme off\-policy scenarios, achieving performance comparable to or even surpassing the on\-policy baseline, and outperforming other off\-policy baselines by 13\.9%\.

## LEAD: Length\-Efficient Adaptive and Dynamic Reasoning for Large Language Models

**Authors:** Songtao Wei; Yi Li; Zhikai Li; Xu Hu; Yuede Ji; Guanpeng Li; Feng Chen; Carl Yang; Zhichun Guo; Bingzhe Li

**ID:** 149222\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149222

[Paper](<https://openreview.net/forum?id=rztqc0ADFS>) | [PDF](<https://openreview.net/pdf?id=rztqc0ADFS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149222>)

Large reasoning models, such as OpenAI o1 and DeepSeek\-R1, tend to become increasingly verbose as their reasoning capabilities improve\. These inflated Chain\-of\-Thought \(CoT\) trajectories often exceed what the underlying problems require, wasting compute, latency, and context budgets\. While introducing length\-based efficiency rewards during reinforcement learning offers a natural remedy, existing methods struggle with two fundamental challenges: the optimal balance between correctness and efficiency is non\-stationary throughout training, and intrinsic reasoning budgets vary drastically across problems\. Relying on static reward weights and global length constraints inevitably forces a compromise between degraded accuracy and unrealized compression\. To overcome these limitations, we propose LEAD \(Length\-Efficient Adaptive and Dynamic reasoning\), a method that replaces static heuristics with online, self\-adaptive mechanisms\. LEAD dynamically calibrates the correctness\-efficiency trade\-off at each step using a Potential\-Scaled Instability, directing optimization capacity to the most informative learning signal\. Furthermore, it estimates an adaptive per\-problem target length online based on the model’s own correct rollouts, applying a symmetric efficiency reward that penalizes both overthinking and over\-compression\. Evaluated on five mathematical reasoning benchmarks, LEAD achieves the highest accuracy and Accuracy\-Efficiency Score among RL\-trained efficient\-reasoning methods while producing substantially shorter outputs than the base model\.

## Learning When to Think: Adaptive Internal Computation for Reinforcement Learning

**Authors:** Rohit Kumar Salla; Simon Stepputtis

**ID:** 153029\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153029

[Paper](<https://openreview.net/forum?id=OYg4xrS03l>) | [PDF](<https://openreview.net/pdf?id=OYg4xrS03l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153029>)

_Abstract unavailable from the accessible public sources._

## Parameter Exploration for RLVR via Variational Learning

**Authors:** Vatsal Venkatkrishna; Nico Carlsen Daheim; Iryna Gurevych

**ID:** 149580\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149580

[Paper](<https://openreview.net/forum?id=p3hX7ae4x4>) | [PDF](<https://openreview.net/pdf?id=p3hX7ae4x4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149580>)

_Abstract unavailable from the accessible public sources._

## Temporal Behavior Trees for Reinforcement Learning: Specifications as Rewards, Curricula, and Diagnostics

**Authors:** Vladimir Krsmanovic; Bernd Finkbeiner

**ID:** 153832\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153832

[Paper](<https://openreview.net/forum?id=IOFQf2UdfY>) | [PDF](<https://openreview.net/pdf?id=IOFQf2UdfY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153832>)

Reinforcement learning from formal specifications often separates task definition, reward shaping, curriculum design, and policy diagnostics into different mathematical objects\. This fragmentation introduces   additional conversion steps and discards structure already present in the specification, such as sub\-task boundaries, ordering constraints, and quantitative margins\. We introduce TBTCL, a framework that uses   Temporal Behaviour Trees \(TBTs\) as a unified interface for specification\-guided reinforcement learning\. A single TBT specifies the task, induces dense robustness\-based rewards, defines a curriculum, and   supports better understanding of learnt policies \-  grounded in the formal semantics of the specification language\. By adapting TBT syntax and semantics for specification guided reinforcement learning, we provide a formalism that is more expressive than popular specification languages such LTL and inherently hierarchical\. We present algorithms to automatically extract a curriculum DAG and derive dense, robustness\-based rewards directly from TBT semantics, requiring no additional user inputs like region predicates or demonstrations\. Furthermore, we utilize TBT trace segmentation to provide build understandable competence profiles and automatically adapt the reward toward bottlenecks\. We evaluate TBTCL on six specifications across discrete and continuous domains\. The   results show that TBTCL matches dense STL shaping on simpler tasks and improves over baselines on reach\-avoid specifications, while also exposing interpretable sub\-task failures through the same formal   object used for training\. We show that a Temporal Behaviour Tree act as a specification, and a reward, and a curriculum and a diagnostic\.

## Decoupling is the Key: Scaling Deep Value Networks in Reinforcement Leanring

**Authors:** Yunsheng Xue; Ziyi Zhang; zhihao wu; Youfang Lin

**ID:** 149216\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149216

[Paper](<https://openreview.net/forum?id=s2GEGdj4Dh>) | [PDF](<https://openreview.net/pdf?id=s2GEGdj4Dh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149216>)

Scaling laws have driven remarkable performance breakthroughs in Computer Vision \(CV\) and Natural Language Processing \(NLP\) by increasing model depth\. Compared to increasing width, deeper networks provide higher parameter efficiency and more expressive representations\. However, increasing network depth in reinforcement learning \(RL\) still yields limited performance gains\. In this paper, through theoretical and empirical analysis, we reveal that this performance degradation is primarily attributed to implicit low\-rank bias and overfitting\. While these two issues also exist in shallow networks, the detrimental effects caused by component coupling are significantly amplified as the network depth increases, leading to severe performance degradation\. For the first issue, we theoretically prove the existence of bootstrapped spectral coupling, which causes high\-frequency spectral components to couple with the low\-frequency spectral components of the value network, thereby driving representations of deep value networks into severe rank collapse\. For the second issue, we reveal that deep value networks severely overfit the noise induced by TD target couplings, which means the construction of TD targets is influenced by other components, such as the boundary of value distribution or current policy\. Therefore, our insight is that decoupling is the key to successfully scaling deep value networks in RL\. Motivated by this insight, we propose two simple yet effective solutions respectively: policy\-independent spectral decoupling and boundary\-target decoupling\. Moreover, decoupling policy and value learning \(as in AWR\) is also a necessary target decoupling for deep value network training in offline RL\. By integrating these decoupling components, we propose Spectrally Decoupled Distributional Learning \(SEED\)\. Empirically, to the best of our knowledge, SEED is the first approach to successfully unlock the potential of depth in both online and offline RL settings, enabling value networks to scale effectively from 3 to 32 layers with consistent performance gains\.

## Permanent and Transient Representations for Continual Reinforcement Learning

**Authors:** Nishanth Anand; Doina Precup

**ID:** 149172\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149172

[Paper](<https://openreview.net/forum?id=sLgM3e4pXf>) | [PDF](<https://openreview.net/pdf?id=sLgM3e4pXf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149172>)

Continual Reinforcement Learning \(CRL\) agents struggle to adapt to new situations while retaining prior knowledge, leading to a stability–plasticity trade\-off\. One approach to solving this problem is by using complementary learning systems: one for slow, long\-term learning and another for quick, transient adaptation\. Anand &amp; Precup \(2023\) instantiated this idea using permanent and transient value functions, but used the same features in both systems\. Intuitively, long\-term learning should rely more on parametric representations for broad generalization, while transient learning would be best served by non\-parametric representations for situation\-specific adaptation\. In this paper, we explore this idea both theoretically and empirically\. We propose a novel non\-parametric approximation for estimating the transient value function in complex tasks\. And, demonstrate that our method enables online learning and outperforms competitive baselines on image\-based tasks and Craftax\-Classic, underscoring the effectiveness of our system\-level decomposition\.

## K\-prop: Deep Online Learning by Backpropagating Temporal Kernels

**Authors:** Bingkun Liu; Paul Haider; Federico Benitez; Mihai A\. Petrovici; Walter Senn

**ID:** 153851\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153851

[Paper](<https://openreview.net/forum?id=IGznB40U3i>) | [PDF](<https://openreview.net/pdf?id=IGznB40U3i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153851>)

Self\-recurrence represents an important component for temporal processing in neural networks, both artificial and biological, where it appears naturally in the form of leaky integration\. However, due to the complex temporal dependencies of the gradient, an efficient and effective method of online training is still lacking\. Here we propose K\-prop, a novel online learning method for leaky neural networks\. It dramatically reduces the computational and memory cost of real time recurrent learning \(RTRL\) by propagating kernel gains\. K\-prop also outperforms existing RTRL approximations and achieves performance comparable to backpropagation through time in sequence learning, classification, and reinforcement learning tasks\. We further analyze how its sole approximation affects gradient quality and identify conditions under which K\-prop remains accurate and effective\.

## Joint Adaptive Neighborhood Constraint for Offline Multi\-Agent Reinforcement Learning

**Authors:** Xiancheng Gao; Mingxiao Feng; Lin Liu; Yuanrui Duan; Yufeng Shi; Wengang Zhou; Houqiang Li

**ID:** 149793\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149793

[Paper](<https://openreview.net/forum?id=nHitPSOoEp>) | [PDF](<https://openreview.net/pdf?id=nHitPSOoEp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149793>)

Offline reinforcement learning suffers from distributional shift and extrapolation errors\. These issues are particularly severe in multi\-agent settings\. As the number of agents increases, the joint action space grows exponentially while agent behaviors become highly coupled\. Consequently, even if individual actions remain within the data distribution, their combination may still result in out\-of\-distribution \(OOD\) joint actions\. Directly extending single\-agent constraints to multi\-agent settings is difficult, as they fail to effectively constrain joint actions\. This often results in poor coordination or excessive conservatism\. To bridge this gap, we propose the joint adaptive neighborhood constraint \(JANC\), which explicitly constructs controlled neighborhoods in the joint action space to suppress extrapolation while preserving reliable generalization\. Moreover, JANC adaptively scales neighborhood radii based on joint advantages to align generalization with value structures\. In practice, our method first performs adaptive neighborhood Q learning to explore high\-value behaviors and then conducts value and policy learning based on the refined actions\. Experiments on offline benchmarks, including multi\-agent Mujoco and StarCraft II, show that JANC outperforms state\-of\-the\-art methods on the majority of tasks in complex cooperative scenarios\. We will release our source code to the public\.

## Breaking $\\textit\{Winner\-Takes\-All\}$: Cooperative Policy Optimization Improves Diverse LLM Reasoning

**Authors:** Haoxuan Chen; Tianming Liang; Wei\-Shi Zheng; Jian\-Fang Hu

**ID:** 150356\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150356

[Paper](<https://openreview.net/forum?id=iiwmhPUMvv>) | [PDF](<https://openreview.net/pdf?id=iiwmhPUMvv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150356>)

Reinforcement learning with verifiers \(RLVR\) has become a central paradigm for improving LLM reasoning, yet popular group\-based optimization algorithms like GRPO often suffer from exploration collapse, where the models prematurely converge on a narrow set of high\-scoring patterns, lacking the ability to explore new solutions\. Recent efforts attempt to alleviate this by adding entropy regularization or diversity bonus\. However, these approaches do not change the \\textit\{winner\-takes\-all\} nature, where rollouts still compete for individual advantage rather than cooperating for maximizing global diversity\. In this work, we propose Group Cooperative Policy Optimization \(GCPO\), which shifts the training paradigm from rollout competition to team cooperation\. Specifically, GCPO replaces independent rollout scoring with team\-level credit assignment: a rollout is rewarded by how much it contributes to the team's valid solution coverage, rather than its individual accuracy\. This coverage is described as a determinant volume over reward\-weighted semantic embeddings, where only correct and non\-redundant rollouts contribute to this volume\. During advantage estimation, GCPO redistributes the collective team reward to each single rollout according to its average marginal contribution to the team\. This cooperative training paradigm routes optimization toward non\-redundant correct reasoning paths\. Experiments across multiple reasoning benchmarks demonstrate that GCPO significantly improves both reasoning accuracy and solution diversity over existing approaches\. Code will be made available\.

## $f$\-GRPO &amp; Beyond: Divergence\-Based Reinforcement Learning Algorithms for General LLM Alignment

**Authors:** Rajdeep Haldar; Lantao Mei; Guang Lin; Yue XING; Qifan Song

**ID:** 153358 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LyjBw9qa3a>) | [PDF](<https://openreview.net/pdf?id=LyjBw9qa3a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153358>)

Recent work shows that preference alignment objectives can be interpreted as divergence estimators between aligned \(preferred\) \\&amp; unaligned \(less\-preferred\) distributions, yielding a principled recipe for designing alignment losses\. However, this view has so far been limited to preference\-based supervision\. We extend it to general LLM alignment, including reinforcement learning with verifiable rewards \(RLVR\), where alignment feedback is given only as scalar rewards\. We introduce $f$\-Group Relative Policy Optimization \($f$\-GRPO\), a class of on\-policy RL objectives, and $f$\-Hybrid Alignment Loss \($f$\-HAL\), which combines on\-policy reward optimization with off\-policy preference supervision\. We show that these objectives estimate $f$\-divergences between reward\-aligned \\&amp; reward\-unaligned distributions induced by above\- \\&amp; below\-average reward responses, and prove expected reward improvement after alignment\. Empirically, $f$\-GRPO improves over GRPO on math\-reasoning RLVR tasks, while hybrid $f$\-HAL mitigates reward hacking in on\-policy safety alignment when verifiable rewards are unavailable and learned reward models must be used\.

## WTF?\! Simulation\-Free Reinforcement Learning with Wasserstein\-Tilted Flow Maps

**Authors:** Abbas Mammadov; Jerry Huang; Justin Lin; Partha Kaushik; Sheel Shah; Kartik Nair; Yee Whye Teh; Nicholas Boffi

**ID:** 150454 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hvPxti2lt3>) | [PDF](<https://openreview.net/pdf?id=hvPxti2lt3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150454>)

Fine\-tuning aims to update a pre\-trained flow\-based generative model to improve the downstream reward of its generated samples\. Existing methods typically frame this problem as sampling from a reward\-tilted distribution, which arises as the solution to a KL\-regularized reward\-maximization problem\. Here we take an alternative approach and introduce an \*optimal transport\* regularizer built directly from the pre\-trained drift; we show that the resulting fine\-tuning problem is equivalent to a \*deterministic optimal\-control problem\* on the flow\. Assuming access to a pre\-trained flow map, we exploit this equivalence to devise a simulation\-free reinforcement\-learning algorithm for fine\-tuning generative flows\. We call the resulting framework \*\*Wasserstein\-Tilted Flow Maps \(WTF\)\*\*, the first end\-to\-end fine\-tuning recipe native to flow maps\. The output of our approach is itself a fine\-tuned flow map, retaining few\-step reward\-aligned inference at deployment\. Numerical experiments at text\-to\-image scale highlight both the efficiency and the efficacy of our approach\. More broadly, our work argues that accelerated samplers such as flow maps are essential infrastructure for efficient post\-training, and that the dominant KL\-regularized formulation of fine\-tuning is only one of many choices worth revisiting\.

## VI\-CuRL: Stabilizing Verifier\-Independent RL Reasoning via Confidence\-Guided Variance Reduction

**Authors:** Xin\-Qiang Cai; Masashi Sugiyama

**ID:** 155000 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9JXekpggtg>) | [PDF](<https://openreview.net/pdf?id=9JXekpggtg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155000>)

Reinforcement Learning with Verifiable Rewards \(RLVR\) has emerged as a dominant paradigm for enhancing Large Language Models \(LLMs\) reasoning, yet its reliance on external verifiers limits its scalability\. Recent findings suggest that RLVR primarily functions by eliciting latent capabilities, motivating the development of verifier\-free algorithms\. However, in such settings, standard methods like Group Relative Policy Optimization face a critical challenge: destructive gradient variance that often leads to training collapse\. To address this issue, we introduce \*\*Verifier\-Independent Curriculum Reinforcement Learning \(VI\-CuRL\)\*\*, a framework that leverages the model's intrinsic confidence to construct a curriculum independent from external verifiers\. By prioritizing high\-confidence samples, VI\-CuRL effectively manages the bias\-variance trade\-off, specifically targeting the reduction of \*action\* and \*problem variance\*\. We provide a rigorous theoretical analysis, proving that our estimator guarantees asymptotic unbiasedness\. Empirically, VI\-CuRL promotes stability and consistently outperforms verifier\-dependent/independent baselines across math and general reasoning benchmarks with/without verifiers\.

## Compose Your Oracles: Off Policy Improvement with Aggregated Guidance

**Authors:** Jingtian Ji; Xuefeng Liu; Matthew Walter

**ID:** 149600 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ou8C3NZhp9>) | [PDF](<https://openreview.net/pdf?id=ou8C3NZhp9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149600>)

Learning from multiple imperfect oracles is a practical way to improve reinforcement learning \(RL\) under limited interaction\. However, most contemporary robust multi\-oracle methods are on\-policy and equire frequent fresh rollouts, which limits sample efficiency in domains where data collection is expensive\. We propose Oracle\-Aggregated Policy Improvement \(OPI\), an off\-policy framework for policy  improvement with multiple suboptimal oracles\. OPI augments the oracle set with the learner, constructs an oracle\-guided behavior policy through candidate\-action pooling and source\-aware critic scoring, and trains the learner using a generalized advantage\-weighted behavior cloning objective combined with deterministic policy gradients\. The method is motivated by a tractable proxy for the max\-advantage objective and a policy\-improvement relative to a strong oracle baseline\. We evaluate OPI on diverse tasks across MetaWorld, the DeepMind Control Suite, and customized Box2D environments with heterogeneous oracles\. Across sparse\-reward manipulation, dense\-reward locomotion, and customized control settings, OPI is strongest in sparse\-reward and complementary\-oracle regimes and remains competitive with representative baselines in dense\-reward environments\. Additional analyses show that oracle composition is most beneficial when oracle skills are complementary and that estimating oracle\-specific action values is particularly helpful in sparse\-reward regimes

## Reinforcement Learning for Diffusion LLMs with Entropy\-Guided Step Selection and Stepwise Advantages

**Authors:** Vishnu Teja Kunde; Fatemeh Doudi; Mahdi Farahbakhsh; Dileep Kalathil; Krishna Narayanan; JF Chamberland

**ID:** 154650 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C2Jvfl4xzR>) | [PDF](<https://openreview.net/pdf?id=C2Jvfl4xzR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154650>)

Reinforcement learning \(RL\) has been effective for post\-training autoregressive \(AR\) language models, but extending these methods to diffusion language models \(DLMs\) is challenging due to intractable sequence\-level likelihoods\. Existing approaches therefore rely on surrogate likelihoods or heuristic approximations, which can introduce bias and obscure the sequential structure of denoising\. We formulate diffusion\-based sequence generation as a finite\-horizon Markov decision process over the denoising trajectory and derive the policy gradient that decomposes over denoising steps in terms of stepwise advantages, without requiring explicit evaluation of the sequence likelihood\. Grounded in this theorem, we develop tractable approximations for large\-scale training: \(i\) denoising steps are selected for policy updates via an entropy\-guided approximation bound, and \(ii\) stepwise advantages are estimated using a one\-step denoising completion naturally provided by the diffusion model, avoiding costly multi\-step rollouts or auxiliary value networks\. Experiments demonstrate state\-of\-the\-art results on nearly all benchmarks spanning coding, logical reasoning, and mathematical reasoning, outperforming existing RL post\-training approaches for DLMs\.

## From Reasoning Chains to Verifiable Subproblems: Curriculum Reinforcement Learning Enables Credit Assignment for LLM Reasoning

**Authors:** Xitai Jiang; Wenze Lin; Zihan Tang; Yang Yue; Shenzhi Wang; Gao Huang

**ID:** 152795 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QIDIchi6N0>) | [PDF](<https://openreview.net/pdf?id=QIDIchi6N0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152795>)

Reinforcement learning from verifiable rewards \(RLVR\) has shown strong promise   for LLM reasoning, but typical outcome\-based RLVR methods remain inefficient on   hard problems\. Correct final\-answer rollouts are rare, and standard   sample\-level credit assignment fails to leverage partial reasoning progress   embedded in unsuccessful attempts\. To address this problem, we introduce \*\*SCRL\*\* \(\*\*S\*\*ubproblem \*\*C\*\*urriculum \*\*R\*\*einforcement   \*\*L\*\*earning\), a curriculum reinforcement learning framework built on verifiable   subproblems derived from reasoning chains\. Given a reference solution, SCRL derives a series of verifiable subproblems and constructs a subproblem curriculum, with the final subproblem   fixed as the original problem\. This converts partial progress on hard problems   into verifiable learning signals\. Algorithmically, we propose \*subproblem\-level normalization\*, a training technique based on RLVR   that normalizes rewards independently at each subproblem position within the rollout group\. By assigning the resulting advantages to the corresponding answer   spans, we enable finer\-grained credit assignment without external rubrics or   reward models\. Our theoretical analysis shows that this subproblem curriculum makes hard problems more learnable by   lifting them out of gradient dead zones, with larger relative gains as the   original problem becomes harder\. Across seven mathematical reasoning benchmarks, SCRL outperforms strong   curriculum\-learning baselines, yielding \+4\.1 and \+1\.9 average\-point gains   compared to GRPO on Qwen3\-4B\-Base and Qwen3\-14B\-Base respectively\. On three   hard benchmarks \(AIME24, AIME25, and IMO\-Bench\), SCRL further yields point gains of \+3\.7 in pass@$1$ and \+4\.6 in pass@$64$ on   Qwen3\-4B\-Base, suggesting improved exploration on hard reasoning problems\. Further ablations show that the proposed credit   assignment is effective and that the gains do not require highly curated   subproblems or strong external generators, highlighting SCRL as a practical curriculum framework that enables fine\-grained credit   assignment for LLM reasoning\.

## Efficient Gradient\-Aware Asynchronous Reinforcement Learning for LLM Post\-Training

**Authors:** Songhan Yang; Jie Wang; Yinqi Bai; Xialiang Tong; Jianye Hao; Mingxuan Yuan; Feng Wu

**ID:** 148273 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z4T5PEbHgJ>) | [PDF](<https://openreview.net/pdf?id=z4T5PEbHgJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148273>)

Asynchronous reinforcement learning \(RL\) is an effective paradigm for improving the training efficiency of large language model \(LLM\) post\-training by decoupling rollout generation from policy optimization\. However, this decoupling introduces stale off\-policy samples generated by earlier behavior policies, leading to distribution shift and unstable policy updates\. Recent replay selection methods such as D\-ARL mitigate this issue by selecting variance\-aware samples, but require expensive current\-policy evaluation over replay responses and mainly rely on variance reduction or current\-policy matching as the selection criterion\. To address these limitations, we propose GA\-ARL, an efficient Gradient\-Aware Asynchronous Reinforcement Learning framework for LLM post\-training\. GA\-ARL derives an analytic target distribution from the KL\-regularized RL objective and introduces an advantage\-weighted variant to account for both policy preference and gradient strength\. During training, GA\-ARL maintains a replay buffer containing samples from recent behavior policies and selects low\-discrepancy samples according to the advantage\-weighted analytic target, avoiding additional current\-policy evaluation during replay scoring\. GA\-ARL outperforms SOTA asynchronous methods across mathematical, logical, and code reasoning benchmarks, achieving the best average accuracy on both Qwen3\-1\.7B and Qwen3\-4B, with improvements of up to 6\.1%\. Meanwhile, compared with the SOTA D\-ARL, GA\-ARL reduces wall\-clock training time by 25\.3% on average by avoiding additional current\-policy evaluation during replay selection\.

## Gradient Routing Localizes and Removes Unintended Behaviors in RL

**Authors:** Jake Ward; Shawn Hu; Aria Wong; Nathan Hu; Bryce Woodworth; Alexander Turner; Alex Cloud

**ID:** 153255 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mc1ip92n6o>) | [PDF](<https://openreview.net/pdf?id=Mc1ip92n6o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153255>)

We propose a novel solution to reward hacking in reinforcement learning\. Our setup involves a misspecified reward function corresponding to task completion, and a classifier that flags invalid solutions\. As in frontier LLM development, the classifier makes systematic errors\. Consequently, reward penalties and data filtering based on the classifier fail to prevent reward hacking\. To address this limitation, we introduce GRAFT: Gradient Routing Adapter Fine Tuning\. Rather than penalizing or filtering flagged behaviors during training, we constrain \(\`\`route''\) gradient updates to specific parameters\. This has two benefits\. First, the model does not learn to exploit classifier errors, i\.e\., it does not learn to hide the unintended behavior\. Second, the unintended behavior can be disabled by ablating the parameters to which they were localized\. We demonstrate these benefits in a variety of RL environments where reward penalties result in monitor\-subverting policies\. Additionally, we show that our method remains effective when we scale model size and task complexity by distilling frontier LLM trajectories into Qwen3\-32B\. Overall, we show that GRAFT is a promising approach for leveraging unreliable monitors during post\-training in environments where true performance is difficult to evaluate\.

## SkillRL: Evolving Agents via Recursive Skill\-Augmented Reinforcement Learning

**Authors:** Peng Xia; Jianwen Chen; Hanyang Wang; Jiaqi Liu; Kaide Zeng; Yu Wang; Siwei Han; Yiyang Zhou; Xujiang Zhao; Haifeng Chen; Zeyu Zheng; Cihang Xie; Huaxiu Yao

**ID:** 156011 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1BZdDrOyJH>) | [PDF](<https://openreview.net/pdf?id=1BZdDrOyJH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156011>)

Large Language Model \(LLM\) agents have shown stunning results in complex tasks, yet they often operate in isolation, failing to learn from past experiences\. Existing memory\-based methods primarily store raw trajectories, which are often redundant and noise\-heavy\. This prevents agents from extracting high\-level, reusable behavioral patterns that are essential for generalization\. In this paper, we propose SkillRL, a framework that bridges the gap between raw experience and policy improvement through automatic skill discovery and recursive evolution\. Our approach introduces an experience\-based distillation mechanism to build a hierarchical skill library SkillBank, an adaptive retrieval strategy for general and task\-specific heuristics, and a recursive evolution mechanism that allows the skill library to co\-evolve with the agent's policy during reinforcement learning\. These innovations significantly reduce the token footprint while enhancing reasoning utility\. Experimental results on ALFWorld, WebShop and seven search\-augmented tasks demonstrate that SkillRL achieves state\-of\-the\-art performance, outperforming strong baselines over 15\.3% and maintaining robustness as task complexity increases\.

## Soft Forward\-Backward Representations for Zero\-shot Reinforcement Learning with General Utilities

**Authors:** Marco Bagatella; Thomas Rupf; Georg Martius; Andreas Krause

**ID:** 151016\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151016

[Paper](<https://openreview.net/forum?id=da88i4IpCj>) | [PDF](<https://openreview.net/pdf?id=da88i4IpCj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151016>)

_Abstract unavailable from the accessible public sources._

## Treat Bias as Noise: Training Bias\-Robust LLM Reasoning via Reinforcement Learning

**Authors:** Qian Wang; Xuandong Zhao; Zirui Zhang; Zhanzhi Lou; Nuo Chen; Dawn Song; Bingsheng He

**ID:** 150271\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150271

[Paper](<https://openreview.net/forum?id=jPnZFyHo4X>) | [PDF](<https://openreview.net/pdf?id=jPnZFyHo4X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150271>)

_Abstract unavailable from the accessible public sources._

## Learning to Undo: Transfer Reinforcement Learning under State Space Transformations

**Authors:** Mridul Mahajan; Aldo Pacchiano; Xuezhou Zhang

**ID:** 149546\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149546

[Paper](<https://openreview.net/forum?id=pKncWGhXfk>) | [PDF](<https://openreview.net/pdf?id=pKncWGhXfk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149546>)

_Abstract unavailable from the accessible public sources._

## Cooperative Multi\-Agent Reinforcement Learning via Epigraph\-Form Guided Exploration

**Authors:** Sungil Son; Hoseong Jung; Dahyun Oh; H\. Jin Kim

**ID:** 153701 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JQUxXMC9Es>) | [PDF](<https://openreview.net/pdf?id=JQUxXMC9Es>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153701>)

Discovering cooperative behavior in multi\-agent reinforcement learning \(MARL\) is challenging due to the combinatorial complexity of joint state\-action spaces, which hinders the emergence of coordinated behaviors from trial\-and\-error alone\. Intrinsic rewards are often used to aid discovery, but naively combining them with team objectives can distort the learning signal, compromising task performance\. In this paper, we propose EFXPLORER, a constrained exploration framework that maximizes exploration objectives subject to a constraint that preserves established task performance\. We solve it via an epigraph reformulation that introduces adaptive exploration budgets\. This approach separates intrinsic rewards from task objectives and regulates exploration through task feasibility\. To further encourage diverse and temporally extended exploration, we incorporate a successor distance\-based intrinsic reward that captures long\-horizon dependencies\. Empirically, our method outperforms strong baselines and induces novel cooperative strategies across SMAX, VMAS, and MPE benchmark suites\.

## Drifting Field Policy: Wasserstein Gradient Flow on Policy Space for Offline\-to\-Online RL

**Authors:** Juil Koo; Mingue Park; Jiwon Choi; Yunhong Min; Minhyuk Sung

**ID:** 151871\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151871

[Paper](<https://openreview.net/forum?id=XGZrKnM8Qo>) | [PDF](<https://openreview.net/pdf?id=XGZrKnM8Qo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151871>)

We propose Drifting Field Policy \(DFP\), a non\-ODE one\-step generative policy built on the drifting model paradigm\. Under online RL finetuning, we frame the policy update as a reverse\-KL Wasserstein\-2 gradient flow toward a soft target policy, realized by DFP as a steepest\-descent step on probability space\. By construction, this gradient step is decomposed into an ascent toward higher action\-value regions and a score matching with the anchor policy as a trust region\. We further derive a simple, tractable surrogate of the otherwise intractable update loss, akin to behavior cloning on top\-K critic\-selected actions\. We find empirically that this mechanism uniquely benefits the drifting backbone owing to its non\-ODE parameterization\. With one\-step inference, DFP achieves state\-of\-the\-art performance on several manipulation tasks across Robomimic and OGBench, outperforming ODE\-based policies\.

## Beyond Self\-Play and Scale: A Behavior Benchmark for Generalization in Autonomous Driving

**Authors:** Aron Distelzweig; Faris Janjos; Andreas Look; Anna Rothenhäusler; Daniel Jost; Oliver Scheel; Raghu Rajan; Daphne Cornelisse; Eugene Vinitsky; Joschka Boedecker

**ID:** 139295\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139295

[Paper](<https://openreview.net/forum?id=Z1EcOqde6o>) | [PDF](<https://openreview.net/pdf?id=Z1EcOqde6o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139295>)

Recent Autonomous Driving \(AD\) works such as GigaFlow and PufferDrive have unlocked Reinforcement Learning \(RL\) at scale as a training strategy for driving policies\. Yet such policies remain disconnected from established benchmarks, leaving the performance of large\-scale RL for driving on standardized evaluations unknown\. We present BehaviorBench \-\- a comprehensive test suite that closes this gap along three axes: Evaluation, Complexity, and Behavior Diversity\. In terms of Evaluation, we provide an interface connecting PufferDrive to nuPlan, which, for the first time, enables policies trained via RL at scale to be evaluated on an established planning benchmark for autonomous driving\. Complementarily, we offer an evaluation framework that allows planners to be benchmarked directly inside the PufferDrive simulation, at a fraction of the time\. Regarding Complexity, we observe that today's standardized benchmarks are so simple that near\-perfect scores are achievable by straight lane following with collision checking\. We extract a meaningful, interaction\-rich split from the Waymo Open Motion Dataset \(WOMD\) on which strong performance is impossible without multi\-agent reasoning\.  Lastly, we address Behavior Diversity\. Existing benchmarks commonly evaluate planners against a single rule\-based traffic model, the Intelligent Driver Model \(IDM\)\. We provide a diverse suite of interactive traffic agents to stress\-test policies under heterogeneous behaviors, beyond just using IDM\. Overall, our benchmarking analysis uncovers the following insight: despite learning interactive behaviors in an emergent manner, policies trained via pure self\-play under standard reward functions overfit to their training opponents and fail to generalize to other traffic agent behaviors\. Building on this observation, we propose a hybrid planner that combines a PPO policy with a rule\-based planner, providing a baseline for our new benchmark\.  Code is available at https://anonymous\.4open\.science/r/behavior\-bench\-707C

## SAIR: Cost\-Efficient Multi\-Stage ML Pipeline Autoscaling via In\-Context Reinforcement Learning

**Authors:** Jianchang Su; Yifan Zhang; Shengkai Lin; Shizhen Zhao; YUSHENG ZHENG; Yiwei Yang; Wei Zhang

**ID:** 155120\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155120

[Paper](<https://openreview.net/forum?id=8GrzZnygOz>) | [PDF](<https://openreview.net/pdf?id=8GrzZnygOz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155120>)

Multi\-stage ML inference pipelines are difficult to autoscale because of heterogeneous resources, cross\-stage coupling, and dynamic bottleneck migration\. Production controllers ignore cross\-stage effects, and learning\-based autoscalers require offline training data that is unavailable for new pipelines\. We present SAIR, an autoscaler for the zero\-shot deployment regime that uses an LLM as an in\-context reinforcement learning controller, improving its policy online from reward\-labeled experience tuples in the LLM's context with no gradient updates\. SAIR combines Pareto\-dominance reward shaping with a provable separation margin between dominated and non\-dominated actions, Bayesian\-surprise experience retrieval, and a user\-space CUDA interception layer that delivers continuous GPU rate control with sub\-millisecond actuation overhead\. We prove a regret bound that decomposes into retrieval coverage and LLM selection components, each mapping to a concrete SAIR mechanism\. On four ML serving pipelines under three workload patterns, SAIR achieves the best or tied\-best P99 latency in every configuration \(up to 50\\% reduction over the next baseline\); billable cost is reduced through replica consolidation, and effective cost \(which captures GPU rate\-control savings under co\-location or MIG\) by up to 97\\%\. SAIR reaches 86\\% bottleneck detection accuracy without any offline training\.

## Learn from the Gap: Differential\-Aware Advantage Pruning with Adaptive Rollout Sampling for GRPO

**Authors:** Jiahua Yang; Chuangchuang Wang; Zhiwei Yang; Xianpeng Zhang; Dongyu Chen; Xing Chen; Tianhuang Su; Haonan Lu; Quanlong Guan; Kai Tang

**ID:** 153498\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153498

[Paper](<https://openreview.net/forum?id=Kw9cIpaixY>) | [PDF](<https://openreview.net/pdf?id=Kw9cIpaixY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153498>)

_Abstract unavailable from the accessible public sources._

## Amortizing Generative Guidance for Model\-Based Reinforcement Learning

**Authors:** Xiangteng Zhang; Guojian Zhan; Likun Wang; Jingliang Duan; Yang Guan; Shengbo Eben Li

**ID:** 152395\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152395

[Paper](<https://openreview.net/forum?id=TPXx2a0pW6>) | [PDF](<https://openreview.net/pdf?id=TPXx2a0pW6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152395>)

_Abstract unavailable from the accessible public sources._

## Look\-ahead Variational Flow for Generative Online Reinforcement Learning

**Authors:** Tianyi Zhang; Likun Wang; Tianze Zhu; Guojian Zhan; yinuo Wang; Feihong Zhang; Yang Guan; Yao Lyu; Shengbo Eben Li

**ID:** 154685\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154685

[Paper](<https://openreview.net/forum?id=BkbldiALe2>) | [PDF](<https://openreview.net/pdf?id=BkbldiALe2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154685>)

_Abstract unavailable from the accessible public sources._

## Selected\-Tail Reliability in Verifier\-Guided Best\-of\-$N$ Inference

**Authors:** Teresa Zhang

**ID:** 155878\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155878

[Paper](<https://openreview.net/forum?id=2A1ozLhi9p>) | [PDF](<https://openreview.net/pdf?id=2A1ozLhi9p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155878>)

Today, verifier\-guided best\-of\-$N$ inference is a common way to spend test\-time compute in language modeling, code generation, and alignment: generate $N$ candidates, score them with a verifier or reward model, and deploy the highest\-scoring output\. This paper argues that the relevant reliability object is not average verifier accuracy but \\emph\{selected\-tail reliability\}, namely the behavior of the output chosen after optimizing over $N$ noisy public scores; we derive exact selected\-rank exposure laws for best\-of\-$N$ selection and finite\-verifier resource laws showing that selected public optimism scales at the $\\sqrt\{\\log N/m\}$ regime under $m$ units of verifier evidence\. We then separate public optimism from hidden utility harm, showing that public\-score inflation alone is not a harm claim and that harm or uncertifiability requires public\-hidden mismatch, tail dominance, count imbalance, or an unresolved selected\-tail regime\. Building on these results, we introduce Tail\-Certified Compute Caps, a conservative procedure that certifies candidate budgets or refuses certification using selected\-tail intervals, verifier\-resource penalties, mismatch envelopes, and feasibility gates\. In exact\-verifier/public\-hidden experiments, the theory predicts selected false\-positive exposure and supports resource\-aware cap decisions over an all\-attempted denominator, while non\-code candidate tables with pre\-existing public human annotations serve as secondary scoped $K\\ge16$ consistency checks under proxy/model\-prior/verifier\-style scores across Arena55K and Stanford SHP\. Overall, the paper provides a reliability framework for verifier\-guided inference\-time scaling: candidate budgets should be justified by evidence about the selected tail that is actually deployed, not only by average verifier validation\.

## When Does Non\-Uniform Replay Matter in Reinforcement Learning?

**Authors:** Michal Korniak; Mikołaj Czarnecki; Yarden As; Piotr Miłoś; Pieter Abbeel; Michal Nauman

**ID:** 153281\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153281

[Paper](<https://openreview.net/forum?id=MQaqQTPeHp>) | [PDF](<https://openreview.net/pdf?id=MQaqQTPeHp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153281>)

Modern off\-policy reinforcement learning algorithms often rely on simple uniform replay sampling and it remains unclear when and why non\-uniform replay improves over this strong baseline\. Across diverse RL settings, we show that the effectiveness of non\-uniform replay is governed by three factors: replay volume, the number of replayed transitions per environment step; expected recency, how recent sampled transitions are; and the entropy of the replay sampling distribution\. Our main contribution is  clarifying when non\-uniform replay is beneficial and providing practical guidance for replay design in modern off\-policy RL\. Namely, we find that non\-uniform replay is most beneficial when replay volume is low, and that high\-entropy sampling is important even at comparable expected recency\. Motivated by these findings, we adopt a simple Truncated Geometric replay that biases sampling toward recent experience while preserving high entropy and incurring negligible computational overhead\. Across large\-scale parallel simulation, single\-task, and multi\-task settings, including three modern algorithms evaluated on five RL benchmark suites, this replay sampling strategy improves sample efficiency in low\-volume regimes while remaining competitive when replay volume is high\.

## Rethinking Ratio\-Based Trust Regions for Policy Optimization in Multi\-Agent Reinforcement Learning

**Authors:** Chulabhaya Wijesundara; Andrea Baisero; Zhongheng Li; Gregory D Castanon; Alan S Carlin; Christopher Amato

**ID:** 148870\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148870

[Paper](<https://openreview.net/forum?id=uZ0Ls2oCg3>) | [PDF](<https://openreview.net/pdf?id=uZ0Ls2oCg3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148870>)

Centralized training with decentralized execution \(CTDE\) is a standard framework for cooperative multi\-agent policy\-gradient reinforcement learning, allowing agents to learn from joint information while acting from local observations\. Ratio\-based trust\-region methods such as Multi\-Agent Proximal Policy Optimization \(MAPPO\) and Multi\-Agent Simple Policy Optimization \(MASPO\) update decentralized actors using per\-agent probability ratios weighted by joint advantage estimates\. Teammate non\-stationarity increases the variance of these advantages, which in turn increases the variance in the local ratio updates\. This exposes two method\-specific failure modes: MAPPO's additive clipping removes gradients for outlier samples and weakens recovery from policy drift, while MASPO's soft quadratic penalty can allow probability collapse\. We introduce Multi\-Agent Ratio Symmetry \(MARS\), a novel policy optimization objective that replaces these additive ratio\-based trust\-region mechanisms with a multiplicatively symmetric geometric barrier\. MARS preserves corrective gradients while assigning unbounded cost as probability ratios approach zero\. Across 47 tasks spanning eight multi\-agent environments, including novel JAX benchmarks PaxMen and AeroJAX, MARS matches or exceeds MAPPO and MASPO in aggregate environment\-level performance\. Ablations show that these gains arise from the geometry of the symmetric barrier rather than from flexible trust\-region boundaries alone\.

## Meta\-Reinforcement Learning with Zero\-Shot Reinforcement Learning

**Authors:** Jake Grigsby; Siddhant Agarwal; Yu Lei; Leonidas Varveropoulos; Yuke Zhu

**ID:** 154250\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154250

[Paper](<https://openreview.net/forum?id=FAb595Jqbg>) | [PDF](<https://openreview.net/pdf?id=FAb595Jqbg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154250>)

Meta\-reinforcement learning \(meta\-RL\) agents adapt to novel tasks from test\-time experience, but require diverse training sets of environments and reward functions that are expensive to construct\. Behavior Foundation Models \(BFMs\) learn policies from reward\-free data that are capable of zero\-shot RL \(ZSRL\), adapting to new objectives at test time when given a large reward\-labeled dataset\. Recent work has shown that BFM task inference can be performed online, making BFMs and meta\-RL direct competitors for generalization in fixed environments\. We ask whether BFMs can be extended to adapt to novel reward functions in novel environments, and identify four key limitations: environment identification, online data collection, test\-time exploration\-exploitation, and mixed reward supervision\. We study these subproblems through toy domains, standard BFM benchmarks, and simulated humanoid locomotion, then propose a unified framework that addresses all four\. The resulting method, MetaBFM, is a hybrid RL agent spanning meta\-RL, ZSRL, and intrinsic exploration\. During training, MetaBFM combines supervised reward\-following with unsupervised reward\-free learning; at test time, it interpolates between exploration, exploitation, and ZSRL\-style reward inference\. We evaluate MetaBFM on two toy meta\-RL domains and at scale in MetaWorld, showing that hybrid meta\-RL/ZSRL agents can learn more general behavior from the same set of reward functions and may reduce the need for future meta\-RL domains to hand\-design diverse training sets\.

## MaxIM: Maximally Informative Incremental Summarization via Reinforcement Learning

**Authors:** Jihwan Jeong; Guy Tennenholtz; Yinlam Chow; Chih\-wei Hsu; Craig Boutilier

**ID:** 152443 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T6lIK4rfd3>) | [PDF](<https://openreview.net/pdf?id=T6lIK4rfd3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152443>)

AI systems must often maintain bounded memory of unbounded interaction histories\. However, optimizing the memory representation, and its updates, for downstream task utility is difficult for standard reinforcement learning \(RL\) due to severe credit assignment bottlenecks induced by sparse, delayed rewards\. We introduce MaxIM \(Maximally Informative Incremental Memory\), a framework that formulates incremental summarization as a capacity\-constrained, information\-theoretic reward\-shaping problem\. Grounded in value suboptimality bounds, we prove that minimizing sequential information loss requires maximizing the predictive log\-likelihood of future, task\-relevant targets \(predictive sufficiency\)\. We introduce a recursive consistency condition to ensure summaries are grounded by maximizing mutual information with the observed history\. We mitigate credit assignment issues with a parameterized critic that computes step\-wise variational lower bounds for dense reward shaping\. Empirical evaluation on long\-horizon benchmarks shows that MaxIM outperforms state\-of\-the\-art baselines on comprehensive autorater metrics and downstream task utility, without expensive human preference labels\.

## Designing Reinforcement Learning for Diffusion Models: A Unified Path\-Space View

**Authors:** Yixian Xu; Yuanrui Zhang; Shengjie Luo; Kaiyuan Gao; Liwei Wang; Di He

**ID:** 155438\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155438

[Paper](<https://openreview.net/forum?id=5e4jcilj33>) | [PDF](<https://openreview.net/pdf?id=5e4jcilj33>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155438>)

_Abstract unavailable from the accessible public sources._

## AdaMAP: Learning Adaptive Multi\-Action Prediction with Grounded Dreaming Guidance

**Authors:** Muyao Li; Zihao Wang; XuJing Li; Xiangyang Li; Jiabo Ye; Zhiyong Wu; Yaodong Yang; Yujia Qin

**ID:** 155834\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155834

[Paper](<https://openreview.net/forum?id=2Wzu7RgcCE>) | [PDF](<https://openreview.net/pdf?id=2Wzu7RgcCE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155834>)

_Abstract unavailable from the accessible public sources._

## Generative Actor\-Critic with Soft Bridge Policies

**Authors:** Ke He; Le He; Shunpu Tang; Yafei Wang; Lisheng Fan

**ID:** 155388\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155388

[Paper](<https://openreview.net/forum?id=62FfbuBmjc>) | [PDF](<https://openreview.net/pdf?id=62FfbuBmjc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155388>)

_Abstract unavailable from the accessible public sources._

## Hodge Laplacian Quasi\-Harmonic Flows for Option Discovery

**Authors:** Andreas Theophilou; Özgür Şimşek

**ID:** 153764\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153764

[Paper](<https://openreview.net/forum?id=Ipo5Xh353j>) | [PDF](<https://openreview.net/pdf?id=Ipo5Xh353j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153764>)

Prior Laplacian\-based option\-discovery methods build options from 0\-form Laplacians defined on nodes, where the resulting eigenvectors induce routes toward isolated boundaries or extrema, thereby skewing visitation toward specific states\. In contrast, kernel eigenvectors of the 1\-form Hodge Laplacian represent interpretable, topology\-aware edge flows and naturally capture cyclic behaviour known as harmonic flows\. These kernel eigenvectors are particularly attractive because they define zero\-divergence edge flows, offering a natural solution for non\-isolated visitation to sources and sinks in regions in which they are active\. Despite this appeal, harmonic flows have not previously been explored as a basis for option discovery in reinforcement learning\. This is what we do here\. We first introduce harmonic\-flow skills and show that, on state graphs with tree\-like “dead\-end” appendages, purely harmonic flows can become nearly inactive in those regions, which can limit coverage\. To address this limitation, we propose quasi\-harmonic flow options: skill\-inducing edge flows that preserve harmonic cycles where harmonic activity is strong, while injecting drift into appendages using the lowest\-magnitude non\-harmonic eigenvector of the Hodge Laplacian, a low divergence solution, where harmonic activity is weak\. Our approach is eigenvector\-only, relying solely on spectral components of the Hodge Laplacian\. We compare quasi\-harmonic flow options against a harmonic\-flow options baseline and state\-of\-the\-art skill\-discovery methods from the literature, demonstrating empirical gains and analytical improvements on hitting\-time\-based metrics\.

## Breaking the Grid: Distance\-Guided Reinforcement Learning in Large Discrete Action Spaces

**Authors:** Heiko Hoppe; Fabian Akkerman; Wouter van Heeswijk; Maximilian Schiffer

**ID:** 151813\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151813

[Paper](<https://openreview.net/forum?id=XosdW9LFxs>) | [PDF](<https://openreview.net/pdf?id=XosdW9LFxs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151813>)

Reinforcement Learning \(RL\) is increasingly applied to large\-scale decision\-making problems like logistics, scheduling, and recommender systems, but existing algorithms struggle with the curse of dimensionality in such large discrete action spaces\. We propose Distance\-Guided Reinforcement Learning \(DGRL\), combining Sampled Dynamic Neighborhoods and Distance\-Based Updates to enable efficient RL in problems with up to $10^\{20\}$ actions\. Unlike prior methods, DGRL performs stochastic volumetric exploration and transforms policy optimization into a stable regression task, decoupling gradient variance from action space cardinality\. On structured tasks, DGRL provably guarantees local value improvement\.DGRL naturally generalizes to hybrid continuous\-discrete action spaces\. We demonstrate performance improvements of up to 66% against state\-of\-the\-art benchmarks across regularly and irregularly structured environments, while simultaneously improving convergence speed and computational complexity\.

## Overcoming Catastrophic Forgetting in Visual Continual Learning with Reinforcement Fine\-Tuning

**Authors:** Meng Lou; Hanzhong Guo; Linwei Chen; Yizhou Yu

**ID:** 151854\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151854

[Paper](<https://openreview.net/forum?id=XQ0Bir2SLj>) | [PDF](<https://openreview.net/pdf?id=XQ0Bir2SLj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151854>)

Reinforcement Fine\-Tuning \(RFT\) with verifiable rewards has emerged as a powerful learning paradigm for eliciting reasoning capabilities in Multi\-modal Large Language Models \(MLLMs\)\.  Recent studies also suggest that RFT \(e\.g\., GRPO\) is inherently more resilient to catastrophic forgetting than Supervised Fine\-Tuning \(SFT\)\.  However, whether RFT can effectively overcome forgetting in challenging visual continual learning settings, such as class\-incremental learning \(CIL\) and domain\-incremental learning \(DIL\), remains an open problem\. Through a pilot study on rehearsal\-free CIL, we confirm that while RFT consistently outperforms SFT, it still suffers from non\-negligible forgetting\.  We empirically trace this bottleneck to Trajectory\-level Drift Agnosticism: among candidate rollouts achieving identical task rewards, the KL divergence from the preceding\-task policy varies substantially, which strongly correlates with catastrophic forgetting across sequential tasks\. Motivated by this insight, we propose Retention\-aware Policy Optimization \(RaPO\), a simple yet effective RFT framework that explicitly mitigates forgetting through trajectory\-level reward shaping\.  Specifically, RaPO comprises two core components:  \(1\) Retention Reward that converts trajectory\-level distribution drift into a continuous reward signal, preferentially reinforcing knowledge\-preserving rollouts within each group;  \(2\) Cross\-Task Advantage Normalization \(CTAN\), which maintains a persistent exponential moving average of reward statistics across task boundaries to stabilize the optimization progress during continual learning\.  Leveraging the free\-form textual generalization of MLLMs, we comprehensively evaluate RaPO across five visual continual learning settings, spanning class\- and domain\-incremental image classification, class\-incremental video classification, and class\- and domain\-incremental object detection\.  Extensive experiments demonstrate that RaPO achieves leading performance, substantially reducing catastrophic forgetting while preserving strong plasticity\.  To the best of our knowledge, this work represents the first systematic exploration of RFT in visual continual learning, offering insights that we hope will inspire future research\.

## From Expert Knowledge to Optimization Modeling: Prototype\-Based Data Synthesis and Logical Reinforcement Learning

**Authors:** Bo Hu; Qingcan Kang; Qian Liu; Mingxuan Yuan

**ID:** 153007\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153007

[Paper](<https://openreview.net/forum?id=OfaHY0TIwp>) | [PDF](<https://openreview.net/pdf?id=OfaHY0TIwp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153007>)

Existing approaches to optimization modeling using large language models \(LLMs\) treat tasks through from\-scratch construction, generating variables, objectives, and constraints without leveraging reusable structural knowledge\. However, in real\-world scenarios, expert modelers typically begin by identifying the canonical type or core structure of a problem, followed by iterative refinements based on specific task requirements\. To incorporate this expert incremental logic, we propose a novel two\-stage framework\. In the first stage, we conduct Logic\-Anchored Data Synthesis starting from 17 canonical prototypes, preserving critical bottleneck constraints and generating synthetic problem–formulation pairs\. These pairs, together with the OR\-Instruct dataset, are used for supervised fine\-tuning \(SFT\) to initialize a policy\. Separately, for each generated problem, we produce multiple modeling trajectories that follow a prototype\-grounded order with variables preceding expressions\. These trajectories are ranked according to criteria of accuracy and efficiency, and subsequently used to train a Logical Reward Model \(LRM\)\. In the second stage, we introduce Logic\-Test\-Time Group Relative Policy Optimization \(Logic\-TGRPO\), which leverages the LRM during test\-time reinforcement learning to reward accurate prototype identification and disciplined structural adherence while penalizing illogical patterns\. Evaluated across seven benchmarks, our 8B parameter model achieves an average accuracy of 79\.9%, outperforming comparably scaled baselines and competing effectively with heavyweight multi\-agent systems with far fewer parameters\. Strong performance on out\-of\-distribution tasks confirms that the model exhibits genuine incremental reasoning rather than mere memorization\. Ablation studies further validate that both stages in our framework are essential\.

## Focal Reward: Balanced Reinforcement Learning under Rubric\-Based Rewards

**Authors:** Yu Huang; Zihua Zhao; Zhaoxin Huan; Wanli Gu; Feng Hong; Xinmu Ge; Lin Yuan; Qiang Hu; Weichang Wu; Xiaolu Zhang; Jun Zhou; Jiangchao Yao

**ID:** 150481\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150481

[Paper](<https://openreview.net/forum?id=hkAx0LeHmi>) | [PDF](<https://openreview.net/pdf?id=hkAx0LeHmi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150481>)

The open\-ended generation in LLMs usually requires multi\-dimensional rubrics to adequately assess quality and guide the improvement of reinforcement learning\. However, a critical dilemma inherent in this training paradigm is the imbalanced reward polarization along different rubric dimensions\. Under this bottleneck, even if LLMs achieve relatively high rewards after training, they may still exhibit severe deficiencies in certain dimensions, leading to a direct deterioration in user experience\. To address this problem, we propose \\emph\{Focal Reward\}, a novel objective to automatically balance the training of reinforcement learning under rubric\-based rewards\. Specifically, we first leverage an inverse reward projection mechanism to estimate the saturation degree of each criterion in the rubric, which forms the basis to calibrate the reward direction\. Then, the final objective is designed with an automatically reweighting coefficient for each criterion to achieve the fine\-grained balancing\. Extensive experiments across three model scales and six benchmarks demonstrate that our \\emph\{Focal Reward\} method outperforms the strongest static aggregation baseline in all 18 model\-\-benchmark comparisons\. Rollout, mechanism, and ablation analyses further show that these gains arise from online, saturation\-aware reallocation toward rubrics that still have room for improvement\.

## Fast Rates for Offline Contextual Bandits with Forward\-KL Regularization under Single\-Policy Concentrability

**Authors:** Qingyue Zhao; Kaixuan Ji; Heyang Zhao; Quanquan Gu

**ID:** 149055\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149055

[Paper](<https://openreview.net/forum?id=tDL6QlELOi>) | [PDF](<https://openreview.net/pdf?id=tDL6QlELOi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149055>)

\*Kullback\-Leibler\* \(KL\) regularization is ubiquitous in reinforcement learning \(RL\) algorithms in the form of \*reverse\* or \*forward\* KL\. Recent studies have demonstrated $\\epsilon^\{\-1\}$\-type fast rates for RL under reverse KL regularization, in contrast to the standard $\\epsilon^\{\-2\}$\-type sample complexity\. However, for forward\-KL\-regularized objectives, existing statistical analyses are either not applicable or resulting in $\\tilde\{O\}\(\\epsilon^\{\-2\}\)$ slow rates\. We take the first step towards addressing this problem via a streamlined analysis of forward\-KL\-regularized offline contextual bandits\. We give the first $\\tilde\{O\}\(\\epsilon^\{\-1\}\)$ upper bounds in tabular and general function approximation settings, both under notions of \*single\-policy concentrability\*\. In particular, our convex\-analytical pipeline unifies these settings by exploiting the pessimism principle in a novel way and completely bypasses the proof routines in previous works based on the mean\-value theorem, which might be of independent interest\. Moreover, we provide rate\-optimal lower bounds, manifesting the tightness of our upper bounds in terms of statistical rates\. Our lower bounds also demonstrate that the forward\-KL\-regularized sample complexity recovers the unregularized slow rate in the low\-regularization regime, similarly to the reverse\-KL regularization\.

## Learn from the Gap: Differential\-Aware Advantage Pruning with Adaptive Rollout Sampling for GRPO

**Authors:** Jiahua Yang; Chuangchuang Wang; Zhiwei Yang; Xianpeng Zhang; Dongyu Chen; Xing Chen; Tianhuang Su; Haonan Lu; Quanlong Guan; Kai Tang

**ID:** 153498\-\-3 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153498

[Paper](<https://openreview.net/forum?id=Kw9cIpaixY>) | [PDF](<https://openreview.net/pdf?id=Kw9cIpaixY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153498>)

_Abstract unavailable from the accessible public sources._

## Amortizing Generative Guidance for Model\-Based Reinforcement Learning

**Authors:** Xiangteng Zhang; Guojian Zhan; Likun Wang; Jingliang Duan; Yang Guan; Shengbo Eben Li

**ID:** 152395\-\-3 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152395

[Paper](<https://openreview.net/forum?id=TPXx2a0pW6>) | [PDF](<https://openreview.net/pdf?id=TPXx2a0pW6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152395>)

_Abstract unavailable from the accessible public sources._

## Look\-ahead Variational Flow for Generative Online Reinforcement Learning

**Authors:** Tianyi Zhang; Likun Wang; Tianze Zhu; Guojian Zhan; yinuo Wang; Feihong Zhang; Yang Guan; Yao Lyu; Shengbo Eben Li

**ID:** 154685\-\-3 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154685

[Paper](<https://openreview.net/forum?id=BkbldiALe2>) | [PDF](<https://openreview.net/pdf?id=BkbldiALe2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154685>)

_Abstract unavailable from the accessible public sources._

## Selected\-Tail Reliability in Verifier\-Guided Best\-of\-$N$ Inference

**Authors:** Teresa Zhang

**ID:** 155878\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155878

[Paper](<https://openreview.net/forum?id=2A1ozLhi9p>) | [PDF](<https://openreview.net/pdf?id=2A1ozLhi9p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155878>)

Today, verifier\-guided best\-of\-$N$ inference is a common way to spend test\-time compute in language modeling, code generation, and alignment: generate $N$ candidates, score them with a verifier or reward model, and deploy the highest\-scoring output\. This paper argues that the relevant reliability object is not average verifier accuracy but \\emph\{selected\-tail reliability\}, namely the behavior of the output chosen after optimizing over $N$ noisy public scores; we derive exact selected\-rank exposure laws for best\-of\-$N$ selection and finite\-verifier resource laws showing that selected public optimism scales at the $\\sqrt\{\\log N/m\}$ regime under $m$ units of verifier evidence\. We then separate public optimism from hidden utility harm, showing that public\-score inflation alone is not a harm claim and that harm or uncertifiability requires public\-hidden mismatch, tail dominance, count imbalance, or an unresolved selected\-tail regime\. Building on these results, we introduce Tail\-Certified Compute Caps, a conservative procedure that certifies candidate budgets or refuses certification using selected\-tail intervals, verifier\-resource penalties, mismatch envelopes, and feasibility gates\. In exact\-verifier/public\-hidden experiments, the theory predicts selected false\-positive exposure and supports resource\-aware cap decisions over an all\-attempted denominator, while non\-code candidate tables with pre\-existing public human annotations serve as secondary scoped $K\\ge16$ consistency checks under proxy/model\-prior/verifier\-style scores across Arena55K and Stanford SHP\. Overall, the paper provides a reliability framework for verifier\-guided inference\-time scaling: candidate budgets should be justified by evidence about the selected tail that is actually deployed, not only by average verifier validation\.

## When Does Non\-Uniform Replay Matter in Reinforcement Learning?

**Authors:** Michal Korniak; Mikołaj Czarnecki; Yarden As; Piotr Miłoś; Pieter Abbeel; Michal Nauman

**ID:** 153281\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153281

[Paper](<https://openreview.net/forum?id=MQaqQTPeHp>) | [PDF](<https://openreview.net/pdf?id=MQaqQTPeHp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153281>)

Modern off\-policy reinforcement learning algorithms often rely on simple uniform replay sampling and it remains unclear when and why non\-uniform replay improves over this strong baseline\. Across diverse RL settings, we show that the effectiveness of non\-uniform replay is governed by three factors: replay volume, the number of replayed transitions per environment step; expected recency, how recent sampled transitions are; and the entropy of the replay sampling distribution\. Our main contribution is  clarifying when non\-uniform replay is beneficial and providing practical guidance for replay design in modern off\-policy RL\. Namely, we find that non\-uniform replay is most beneficial when replay volume is low, and that high\-entropy sampling is important even at comparable expected recency\. Motivated by these findings, we adopt a simple Truncated Geometric replay that biases sampling toward recent experience while preserving high entropy and incurring negligible computational overhead\. Across large\-scale parallel simulation, single\-task, and multi\-task settings, including three modern algorithms evaluated on five RL benchmark suites, this replay sampling strategy improves sample efficiency in low\-volume regimes while remaining competitive when replay volume is high\.

## Rethinking Ratio\-Based Trust Regions for Policy Optimization in Multi\-Agent Reinforcement Learning

**Authors:** Chulabhaya Wijesundara; Andrea Baisero; Zhongheng Li; Gregory D Castanon; Alan S Carlin; Christopher Amato

**ID:** 148870\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148870

[Paper](<https://openreview.net/forum?id=uZ0Ls2oCg3>) | [PDF](<https://openreview.net/pdf?id=uZ0Ls2oCg3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148870>)

Centralized training with decentralized execution \(CTDE\) is a standard framework for cooperative multi\-agent policy\-gradient reinforcement learning, allowing agents to learn from joint information while acting from local observations\. Ratio\-based trust\-region methods such as Multi\-Agent Proximal Policy Optimization \(MAPPO\) and Multi\-Agent Simple Policy Optimization \(MASPO\) update decentralized actors using per\-agent probability ratios weighted by joint advantage estimates\. Teammate non\-stationarity increases the variance of these advantages, which in turn increases the variance in the local ratio updates\. This exposes two method\-specific failure modes: MAPPO's additive clipping removes gradients for outlier samples and weakens recovery from policy drift, while MASPO's soft quadratic penalty can allow probability collapse\. We introduce Multi\-Agent Ratio Symmetry \(MARS\), a novel policy optimization objective that replaces these additive ratio\-based trust\-region mechanisms with a multiplicatively symmetric geometric barrier\. MARS preserves corrective gradients while assigning unbounded cost as probability ratios approach zero\. Across 47 tasks spanning eight multi\-agent environments, including novel JAX benchmarks PaxMen and AeroJAX, MARS matches or exceeds MAPPO and MASPO in aggregate environment\-level performance\. Ablations show that these gains arise from the geometry of the symmetric barrier rather than from flexible trust\-region boundaries alone\.

## Meta\-Reinforcement Learning with Zero\-Shot Reinforcement Learning

**Authors:** Jake Grigsby; Siddhant Agarwal; Yu Lei; Leonidas Varveropoulos; Yuke Zhu

**ID:** 154250\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154250

[Paper](<https://openreview.net/forum?id=FAb595Jqbg>) | [PDF](<https://openreview.net/pdf?id=FAb595Jqbg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154250>)

Meta\-reinforcement learning \(meta\-RL\) agents adapt to novel tasks from test\-time experience, but require diverse training sets of environments and reward functions that are expensive to construct\. Behavior Foundation Models \(BFMs\) learn policies from reward\-free data that are capable of zero\-shot RL \(ZSRL\), adapting to new objectives at test time when given a large reward\-labeled dataset\. Recent work has shown that BFM task inference can be performed online, making BFMs and meta\-RL direct competitors for generalization in fixed environments\. We ask whether BFMs can be extended to adapt to novel reward functions in novel environments, and identify four key limitations: environment identification, online data collection, test\-time exploration\-exploitation, and mixed reward supervision\. We study these subproblems through toy domains, standard BFM benchmarks, and simulated humanoid locomotion, then propose a unified framework that addresses all four\. The resulting method, MetaBFM, is a hybrid RL agent spanning meta\-RL, ZSRL, and intrinsic exploration\. During training, MetaBFM combines supervised reward\-following with unsupervised reward\-free learning; at test time, it interpolates between exploration, exploitation, and ZSRL\-style reward inference\. We evaluate MetaBFM on two toy meta\-RL domains and at scale in MetaWorld, showing that hybrid meta\-RL/ZSRL agents can learn more general behavior from the same set of reward functions and may reduce the need for future meta\-RL domains to hand\-design diverse training sets\.

## MaxIM: Maximally Informative Incremental Summarization via Reinforcement Learning

**Authors:** Jihwan Jeong; Guy Tennenholtz; Yinlam Chow; Chih\-wei Hsu; Craig Boutilier

**ID:** 152443\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152443

[Paper](<https://openreview.net/forum?id=T6lIK4rfd3>) | [PDF](<https://openreview.net/pdf?id=T6lIK4rfd3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152443>)

AI systems must often maintain bounded memory of unbounded interaction histories\. However, optimizing the memory representation, and its updates, for downstream task utility is difficult for standard reinforcement learning \(RL\) due to severe credit assignment bottlenecks induced by sparse, delayed rewards\. We introduce MaxIM \(Maximally Informative Incremental Memory\), a framework that formulates incremental summarization as a capacity\-constrained, information\-theoretic reward\-shaping problem\. Grounded in value suboptimality bounds, we prove that minimizing sequential information loss requires maximizing the predictive log\-likelihood of future, task\-relevant targets \(predictive sufficiency\)\. We introduce a recursive consistency condition to ensure summaries are grounded by maximizing mutual information with the observed history\. We mitigate credit assignment issues with a parameterized critic that computes step\-wise variational lower bounds for dense reward shaping\. Empirical evaluation on long\-horizon benchmarks shows that MaxIM outperforms state\-of\-the\-art baselines on comprehensive autorater metrics and downstream task utility, without expensive human preference labels\.

## Distill to Think, Foresee to Act: Cognitive\-Physical Reinforcement Learning for Autonomous Driving

**Authors:** Yang Wu; Qiang Meng; Zhaojiang Liu; Youquan Liu; Jian Yang; Jin Xie

**ID:** 153115\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153115

[Paper](<https://openreview.net/forum?id=Nnj4imYoT2>) | [PDF](<https://openreview.net/pdf?id=Nnj4imYoT2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153115>)

_Abstract unavailable from the accessible public sources._

## Improved Regret bounds in Tabular Reinforcement Learning under Local Differential Privacy

**Authors:** Hugo Richard

**ID:** 153585\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153585

[Paper](<https://openreview.net/forum?id=KKggS9jfaS>) | [PDF](<https://openreview.net/pdf?id=KKggS9jfaS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153585>)

_Abstract unavailable from the accessible public sources._

## DynamAuction: a reinforcement learning environment for repeated auction with dynamic value

**Authors:** Benjamin Heymann; Eugénie Patard; Corentin Pla; Patrick Loiseau

**ID:** 139757 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6XRllANbTD>) | [PDF](<https://openreview.net/pdf?id=6XRllANbTD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139757>)

_Abstract unavailable from the accessible public sources._

## Stop Calling It Reinforcement Learning in Language Models Without Clear Improvement Claims: Decision\-Process Cards as a Reporting Standard

**Authors:** Anvi Kohli; Vedant Khandelwal; Rishit Agarwal; Rahul Maity; Amit Sheth

**ID:** 140028 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jMvxCPH2k0>) | [PDF](<https://openreview.net/pdf?id=jMvxCPH2k0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140028>)

_Abstract unavailable from the accessible public sources._

## Follow the Winners: Conservative Policy Improvement with the Cross\-Entropy Method for Critic\-Free RFT

**Authors:** Joery A de Vries; Neil Lawrence; Zhenwen Dai

**ID:** 148167 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=znxdUBOoQP>) | [PDF](<https://openreview.net/pdf?id=znxdUBOoQP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148167>)

_Abstract unavailable from the accessible public sources._

## Adaptive Robust Estimator for Policy Optimization in Reinforcement Learning

**Authors:** Zhongyi Li; Wan Tian; Jingyu Chen; Kangyao Huang; Huiming Zhang; Hui Yang; Tao Ren; Ruijie Wang; Yijie Peng; Yikun Ban; Fuzhen Zhuang

**ID:** 153985 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H47ygC2MKi>) | [PDF](<https://openreview.net/pdf?id=H47ygC2MKi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153985>)

Reinforcement learning \(RL\) has become a key ingredient in post\-training large language models \(LLMs\), with Group Relative Policy Optimization \(GRPO\) and its variants widely adopted for improving reasoning performance\. Despite their success, these methods rely on batch\-level reward normalization, where the empirical mean can be severely distorted by noisy, skewed, heavy\-tailed, or contaminated rewards\. Such distortion directly affects advantage estimation and may lead to unstable or inefficient policy updates\. We propose an \\emph\{Adaptive Robust Estimator\} \(ARE\), a plug\-and\-play robustification module for GRPO\-style policy optimization\. ARE replaces the empirical batch mean with a two\-level robust location estimator: adaptive loss minimization suppresses extreme rewards within each block, while median\-of\-means aggregation limits the influence of corrupted blocks\. This design preserves the original policy optimization objective while improving the reliability of reward centering\. We prove that ARE is consistent and achieves high\-probability deviation guarantees under both finite\-variance and heavy\-tailed reward distributions\. Experiments on mathematical reasoning benchmarks show that ARE improves GRPO\-based training in both single\-agent and multi\-agent settings, with particularly clear gains under noisy and out\-of\-distribution evaluations\. We further validate its generality on embodied vision\-and\-language navigation tasks, where ARE improves training stability and downstream navigation \(VLN\) performance\.

## Freshness\-Gated Imagination: Step\-Level Trust for Latent World Models

**Authors:** Chunqi Guo

**ID:** 150248 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jdqdKenIoy>) | [PDF](<https://openreview.net/pdf?id=jdqdKenIoy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150248>)

Model\-based reinforcement learning agents optimize policies by backpropagating through imagined latent trajectories\. However, model reliability can vary substantially within a single rollout: some imagined steps produce useful gradients while others introduce harmful bias\. Existing adaptive methods address this at either the rollout level \(adaptive horizons, priority replay\) or the per\-step level \(gradient truncation\); their interaction remains unexplored\. In this paper, Freshness\-Gated Imagination \(FGI\), a lightweight trust layer for latent world models that combines rollout\-level adaptation with per\-step entropy\-based soft gating at zero additional forward\-pass cost, is proposed\. Through systematic factorial ablation on Crafter \(10 seeds\), a superadditive synergy is uncovered: per\-step gating alone harms performance \(−6\.2%\), rollout\-level adaptation alone is ineffective \(\+0\.6%\), while their combination achieves \+14\.8% improvement in terms of the Crafter geometric\-mean score \(Wilcoxon signed\-rank p=0\.032, Cohen's d=0\.74\)\. A bias\-variance analysis shows that this synergy arises because rollout\-level priority replay improves the calibration of the entropy signal on which the per\-step gate depends\. On DMC continuous control tasks, FGI preserves baseline performance, confirming no\-harm in well\-modeled environments\. Code is available at https://anonymous\.4open\.science/r/FGI\-89D9\.

## Understanding Goal Generalisation in Sequential Reinforcement Learning

**Authors:** Jason Brown; Edward Young

**ID:** 150898 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ebbWZdCWlR>) | [PDF](<https://openreview.net/pdf?id=ebbWZdCWlR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150898>)

Reinforcement learning agents often exhibit unintended goal\-directed behaviour outside their training distribution, but we currently lack a principled understanding of how such agents will generalise to novel environments based on their training history\. We address this gap for agents trained sequentially on one or more tasks\. We study over 100 sequential training pipelines, evaluating behaviour across over 250 out\-of\-distribution environments\. We find that salient features drive generalisation, and that goals learnt early in training can persist and influence those acquired later\. To explain these phenomena, we introduce \_latent policy gradients\_, a method that predicts what out\-of\-distribution behaviour a training pipeline will likely induce\. Our method simulates the evolution of low\-dimensional latent variables during training according to what would achieve high reward on the training objective with respect to a simple model of how the latent variables map to behaviour\. It achieves strong predictive accuracy, generalises to unseen types of training pipeline, and is interpretable\. Our findings demonstrate that while out\-of\-distribution RL agent behaviour is dependent on the whole training pipeline, this dependence has an underlying structure we can capture, laying groundwork for understanding goal generalisation from a developmental perspective\.

## Designing Effective Monitor\-Based Interventions for Mitigating Reward Hacking During RL

**Authors:** Aria Wong; Joshua Engels; Neel Nanda

**ID:** 153178 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NERzW49Ahm>) | [PDF](<https://openreview.net/pdf?id=NERzW49Ahm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153178>)

Reinforcement learning \(RL\) rewards are notoriously difficult to design and control, often leading to the model learning unintended behaviors such as eward hacking\. One potential solution is to monitor for reward hacking and penalize it when detected; however, training against a monitor could lead to evasive behavior, and our general understanding of how to apply monitors effectively during training is limited\. To study how best to use monitors to mitigate reward hacking, we introduce and open source three realistic environments where Qwen3\-4B reward hacks: a coding environment hackable via test overwriting, a medical chat environment hackable via sycophancy, and a biography generation environment hackable via hallucination\. We first focus on the coding environment, where we find that: \(1\) models can learn to evade highly accurate monitors by exploiting systemic flaws in probes and LLM judges; \(2\) monitors that leak more learning signal during RL suppress reward hacking but are more often evaded; and \(3\) including easier problems in training can decrease reward hacking\. We apply our findings to build better reward hacking monitors for the medical chat and biography generation environments that improve upon naive baselines to reduce reward hacking rates across seeds from 70\-100\\% to 0\\%\. Our results demonstrate that our takeaways translate to new settings and that better monitor intervention designs are possible\.

## Anatomy of Off\-Policy Policy Gradient: Importance Sampling, KL Regularization, and Baselines

**Authors:** Haoqun Cao; Yurun Yuan; Tengyang Xie

**ID:** 155331 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6QcGiRb4iq>) | [PDF](<https://openreview.net/pdf?id=6QcGiRb4iq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155331>)

Reinforcement learning has become a central tool for large language model \(LLM\) post\-training, where policy gradient methods are routinely deployed off\-policy, even though vanilla policy gradient assumes on\-policy sampling\. We study when such off\-policy deployment is justified, and what roles its core ingredients, including importance sampling, KL regularization, and baselines, play in correcting the resulting distribution shift\. We show that for a general class of off\-policy policy gradient objectives, only two corrections preserve the optimal policy as a stationary point: trajectory\-level importance weighting, which suffers from the well\-known curse of horizon, and KL regularization paired with a grouped\-mean baseline\. Focusing on the KL route, we identify it with the group\-relative policy gradient \(GRPG\) update, establish an equivalence to a trajectory\-level Bellman residual minimization objective, and obtain a finite\-sample regret bound under all\-policy coverage\. This also gives a theoretical account of the empirically successful GRPO objective\. We further uncover a hidden role of baselines in the off\-policy setting: a constant shift in the baseline implements pessimism, the standard remedy in offline RL for partial data coverage\. We instantiate this via the asymmetric REINFORCE objective, and connect it to the game\-theoretic offline RL framework, showing a regret bound with single\-policy coverage\.  Together, these results offer a unified theoretical view of off\-policy policy gradient in LLM post\-training and connect it to classical ideas in offline RL\.

## Reward Budgeting Reduces Premature Convergence in Reinforcement Learning for LLM Reasoning

**Authors:** Mengni Jia; Mengyu Zhou; xiaoxi jiang; Guanjun Jiang

**ID:** 152882 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PgTu2nTEh7>) | [PDF](<https://openreview.net/pdf?id=PgTu2nTEh7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152882>)

RL often plateaus early: policies sharpen quickly, and further training yields little gain despite remaining model\- and data\-capacity\.  Entropy is recently used to combat this plateau, but its promotion alone is not a sufficient intervention target in the settings we study\. By analyzing RL's dynamics through the optimal policy, we instead identify a sharpness factor $\\kappa$ as a more effective alternative\. We then introduce a plug\-in reward\-budget mechanism, which allocates a fixed total reward budget to each prompt and distributes it among correct rollouts\. Theoretically, this induces a more regulated $\\kappa$\-trajectory that deviates from many RL methods, and its updates are equivalent to optimizing a concave objective, approximately $\\mathbb\{E\}\(\\log R\)$\.  Empirically, our method achieves significant gains on Qwen3\-8B and Llama3\.2\-3B\-Instruct \(up to \+12\.50 on AMC23 and \+10\.00 on AIME24 \\&amp; AIME25\)\. Together, these results suggest that regulating algorithm\-induced sharpening is more effective for mitigating premature convergence than directly preserving entropy\.

## Tropical Gaussian Anticoncentration: Settling Optimal Instance\-Dependent Bounds for Online Learning in Extensive\-Form Games

**Authors:** Ashkan Soleymani; Zhiyuan Fan; Lillian Ratliff; Patrick Jaillet; Gabriele Farina

**ID:** 156030 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=11bmxkuuog>) | [PDF](<https://openreview.net/pdf?id=11bmxkuuog>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156030>)

We study the minimax regret of full\-information online decision making in extensive\-form games\. For prediction with expert advice, the optimal regret is $\\Theta\(\\sqrt\{T\\log K\}\)$, where $K$ is the number of experts, or equivalently, the number of normal\-form actions\. For treeplex strategy spaces, existing efficient algorithms, including KOMWU and online mirror descent with the weight\-one dilated entropy regularizer, achieve regret $\\mathcal\{O\}\(\\sqrt\{T\\log\|\\mathcal\{V\}\|\}\)$, where $\\mathcal\{V\}$ is the set of reduced normal\-form strategies\. We prove that this logarithmic dependence is minimax optimal in the worst\-case full\-information reward model\. The main difficulty is that pure plans in a treeplex are not independent experts: their rewards are correlated through the recursive structure of decisions and observations\. To capture this correlation, we introduce tropical Gaussian formulae, recursive Gaussian expressions built from maxima and normalized sums which preserve the variance\. The index count of such a formula matches the number of reduced normal\-form continuation plans in the corresponding subtree\. Our main analytic result shows that every log\-balanced tropical Gaussian formula with index count $N$ has Gaussian width $\\Omega\(\\sqrt\{\\log N\}\)$\.  While direct approach struggles to recover this lower bound, our proof uses a spherical entropy profile to measure scale\-dependent separation among the Gaussian directions, and then applies Tur\\'an's theorem and Sudakov minoration to obtain the width lower bound\. Applying this result to treeplexes gives an oblivious hard distribution with valid transition outcome and Rademacher terminal rewards, establishing a regret lower bound of $\\Omega\(\\sqrt\{T\\log\|\\mathcal\{V\}\|\}\)$\. This matches known upper bounds up to universal constants and shows that the DilEnt/KOMWU dependence on the reduced normal\-form complexity is unavoidable\.

## GAE Falls Short in Imperfect\-Information Self\-Play Reinforcement Learning

**Authors:** Zhiyuan Fan; Gabriele Farina

**ID:** 154242 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FCbPPpvjv6>) | [PDF](<https://openreview.net/pdf?id=FCbPPpvjv6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154242>)

Competitive multi\-agent reinforcement learning in imperfect\-information games requires agents to act under partial observability and against adversarial opponents, necessitating stochastic policies\. While self\-play reinforcement learning with Proximal Policy Optimization \(PPO\) has achieved strong empirical success, its standard advantage estimator, generalized advantage estimation, suffers from additional variance due to the sampling of stochastic future actions\. This variance is amplified in equilibrium self\-play because of the stochastic nature of the equilibrium policy and persists even when the critic is exact\. We address this bottleneck by introducing $Q$\-boosting, a variance\-reduced advantage estimator based on a centralized action\-value critic, and propose Variance\-Reduced Policy Optimization \(VRPO\), incorporating this new estimator\. The algorithm replaces sampled multi\-step backups with a multi\-step Expected SARSA$\(\\lambda\)$ trace, computing policy expectations at each step to average out action\-sampling noise, while retaining PPO's clipped objective and on\-policy actor updates\. Empirically, VRPO consistently achieves strong performance from mid\-sized to large\-scale games including Dou Dizhu and Heads\-Up No\-Limit Texas Hold’em\.

