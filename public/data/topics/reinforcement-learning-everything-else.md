# Reinforcement Learning / Everything Else

强化学习 / 其他强化学习

95 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Action Chunking Proximal Policy Optimization with Feedback Correction

**Authors:** Sanghyun Hahn; Jonghyun Choi

**ID:** 154625 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CBSS9HNaVp>) | [PDF](<https://openreview.net/pdf?id=CBSS9HNaVp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154625>)

_Abstract unavailable from the accessible public sources._

## Understanding Reasoning from Pretraining to Post\-Training: Chess as a Controlled Testbed

**Authors:** Jingyan Shen; Ang Li; Salman Rahman; Yifan Sun; Micah Goldblum; Matus Telgarsky; Pavel Izmailov

**ID:** 152950 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PALFTMGRb5>) | [PDF](<https://openreview.net/pdf?id=PALFTMGRb5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152950>)

_Abstract unavailable from the accessible public sources._

## OPSRL\-SSP: Optimistic Posterior Sampling for Stochastic Shortest Path with Minimax\-Optimal Regret

**Authors:** YIMING XU; Xian Wei; Cheng Chen

**ID:** 149166 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sMu4oJ1wW2>) | [PDF](<https://openreview.net/pdf?id=sMu4oJ1wW2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149166>)

We consider online reinforcement learning for the Stochastic Shortest Path \(SSP\) problem with unknown transition dynamics\. Since standard posterior sampling in SSP lacks an explicit mechanism to enforce uniform optimism and therefore fails to attain minimax\-optimal regret, we propose OPSRL\-SSP, the first optimistic posterior sampling algorithm for the SSP problem\. The algorithm operates in epochs and uses a logarithmic, time\-dependent posterior sampling schedule\. To ensure optimism, it incorporates a pseudo\-state with an optimistic value evaluation into the posterior distribution\. We establish a high\-probability regret bound of $\\tilde\{\\mathcal\{O\}\}\(B\_\\star \\sqrt\{SAK\} \+ B\_\\star S^2 A\)$, where $B\_\\star$ is an upper bound on the expected cost of the optimal policy, $S$ and $A$ are the numbers of states and actions, respectively, and $K$ is the number of episodes\. The key technical challenge is to turn these optimistic posterior samples into a uniform optimism guarantee despite the random and potentially unbounded episode lengths of SSP\. We address this through an SSP\-specific analysis based on dynamic posterior inflation and a contraction argument over the pseudo\-state\-augmented model\.  In addition, we extend the analysis to general zero\-cost SSPs via a universal cost\-perturbation argument\. Our dominant term matches the minimax lower bound  $\\Omega\(B\_\\star \\sqrt\{SAK\}\)$, thereby answering the open problem raised by \\citet\{jafarniajahromi2021onlinelearningstochasticshortest\} for posterior sampling in the SSP setting\.

## Reformulate LLM Reinforcement Learning for Stable Training under Black\-box Discrepancy

**Authors:** Jiashun Liu; Runze Liu; Xu Wan; Jing Liang; Hongyao Tang; Ling Pan

**ID:** 148877 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uVkQ6LV9Jd>) | [PDF](<https://openreview.net/pdf?id=uVkQ6LV9Jd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148877>)

Reinforcement Learning \(RL\) has emerged as a pivotal post\-training paradigm for Large Language Models \(LLMs\), yet it frequently suffers from unpredictable training collapses\. Recent findings attribute these failures to a hidden train\-inference discrepancy \(or mismatch\), such a discrepancy will increase as training goes on, stemming from the disparate underlying engines and precisions required to balance generation throughput and training fidelity\. Such Existing mitigations either sacrifice numerical stability or rely on heuristic masking that fails to explicitly optimize the ultimately deployed policy\. In this paper, we discover that training policies inherently possess the capability to heal this common and harmful discrepancy\. To operationalize this, we transition the standard RL objective into a Discrepancy\-Constrained Markov Decision Process \(\\texttt\{DCMDP\}\)\. In order to practice this new paradigm at the algorithmic level, we first introduce a robust, trajectory\-level geometric penalty that provides black\-box feedback of inter\-policy deviations, enabling autonomous self\-correction under any specific trigger, e\.g\., infrastructure level or model architecture level\. Furthermore, capitalizing on our empirical discovery of a \\textit\{discrepancy tolerance region\} in various models, we employ an adaptive performance\-discrepancy balancing mechanism that penalizes the policy only when deviations exceed a safe boundary, achieving stable dual\-objective optimization\. Our approach not only eradicates mismatch\-induced collapses and shatters performance bottlenecks, but crucially unlocks a heterogeneous training paradigm—leveraging high\-fidelity training environments to natively optimize LLMs for low\-cost, resource\-constrained deployments\.

## OPSRL\-SSP: Optimistic Posterior Sampling for Stochastic Shortest Path with Minimax\-Optimal Regret

**Authors:** YIMING XU; Xian Wei; Cheng Chen

**ID:** 149166\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149166

[Paper](<https://openreview.net/forum?id=sMu4oJ1wW2>) | [PDF](<https://openreview.net/pdf?id=sMu4oJ1wW2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149166>)

We consider online reinforcement learning for the Stochastic Shortest Path \(SSP\) problem with unknown transition dynamics\. Since standard posterior sampling in SSP lacks an explicit mechanism to enforce uniform optimism and therefore fails to attain minimax\-optimal regret, we propose OPSRL\-SSP, the first optimistic posterior sampling algorithm for the SSP problem\. The algorithm operates in epochs and uses a logarithmic, time\-dependent posterior sampling schedule\. To ensure optimism, it incorporates a pseudo\-state with an optimistic value evaluation into the posterior distribution\. We establish a high\-probability regret bound of $\\tilde\{\\mathcal\{O\}\}\(B\_\\star \\sqrt\{SAK\} \+ B\_\\star S^2 A\)$, where $B\_\\star$ is an upper bound on the expected cost of the optimal policy, $S$ and $A$ are the numbers of states and actions, respectively, and $K$ is the number of episodes\. The key technical challenge is to turn these optimistic posterior samples into a uniform optimism guarantee despite the random and potentially unbounded episode lengths of SSP\. We address this through an SSP\-specific analysis based on dynamic posterior inflation and a contraction argument over the pseudo\-state\-augmented model\.  In addition, we extend the analysis to general zero\-cost SSPs via a universal cost\-perturbation argument\. Our dominant term matches the minimax lower bound  $\\Omega\(B\_\\star \\sqrt\{SAK\}\)$, thereby answering the open problem raised by \\citet\{jafarniajahromi2021onlinelearningstochasticshortest\} for posterior sampling in the SSP setting\.

## Reformulate LLM Reinforcement Learning for Stable Training under Black\-box Discrepancy

**Authors:** Jiashun Liu; Runze Liu; Xu Wan; Jing Liang; Hongyao Tang; Ling Pan

**ID:** 148877\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148877

[Paper](<https://openreview.net/forum?id=uVkQ6LV9Jd>) | [PDF](<https://openreview.net/pdf?id=uVkQ6LV9Jd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148877>)

Reinforcement Learning \(RL\) has emerged as a pivotal post\-training paradigm for Large Language Models \(LLMs\), yet it frequently suffers from unpredictable training collapses\. Recent findings attribute these failures to a hidden train\-inference discrepancy \(or mismatch\), such a discrepancy will increase as training goes on, stemming from the disparate underlying engines and precisions required to balance generation throughput and training fidelity\. Such Existing mitigations either sacrifice numerical stability or rely on heuristic masking that fails to explicitly optimize the ultimately deployed policy\. In this paper, we discover that training policies inherently possess the capability to heal this common and harmful discrepancy\. To operationalize this, we transition the standard RL objective into a Discrepancy\-Constrained Markov Decision Process \(\\texttt\{DCMDP\}\)\. In order to practice this new paradigm at the algorithmic level, we first introduce a robust, trajectory\-level geometric penalty that provides black\-box feedback of inter\-policy deviations, enabling autonomous self\-correction under any specific trigger, e\.g\., infrastructure level or model architecture level\. Furthermore, capitalizing on our empirical discovery of a \\textit\{discrepancy tolerance region\} in various models, we employ an adaptive performance\-discrepancy balancing mechanism that penalizes the policy only when deviations exceed a safe boundary, achieving stable dual\-objective optimization\. Our approach not only eradicates mismatch\-induced collapses and shatters performance bottlenecks, but crucially unlocks a heterogeneous training paradigm—leveraging high\-fidelity training environments to natively optimize LLMs for low\-cost, resource\-constrained deployments\.

## Offline Inverse Reinforcement Learning with Unified Diffusion Planning

**Authors:** Hongmin Zhao; Jiyuan Yin; Kexi Yan; Qinglai Wei; Jie ZHANG

**ID:** 153682 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JZw9JG0jN0>) | [PDF](<https://openreview.net/pdf?id=JZw9JG0jN0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153682>)

Offline Inverse Reinforcement Learning \(IRL\) aims to recover a reward function and imitate expert behavior solely from offline demonstrations\. While recent Offline IRL approaches employ approximate dynamics to mitigate distribution shift, their performance is constrained by the unstable minimax framework as well as simplified representation and utilization\. To address these issues, we propose Offline Inverse Reinforcement Learning with Diffusion Planner \(OIDP\), which leverages diffusion models to achieve stable Offline IRL\. OIDP formulates a model\-based conservative Q\-optimization through inverse soft Q\-learning, which is provably concave in Q\-space with a controllable performance gap\. Accordingly, we introduce a unified diffusion planner that models dynamics, uncertainty estimator, and policy, it captures multimodal distributions, directly tightens the objective gap bound, and at execution performs trajectory\-guided policy sampling using the internalized dynamics knowledge\. Experimental results on D4RL benchmarks demonstrate that OIDP outperforms state\-of\-the\-art offline approaches\.

## Unifying Goal\-Conditioned RL and Unsupervised Skill Learning via Control\-Maximization

**Authors:** Alireza Modirshanechi; Benjamin Eysenbach; Peter Dayan; Eric Schulz

**ID:** 153300 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MHeZHmPRnt>) | [PDF](<https://openreview.net/pdf?id=MHeZHmPRnt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153300>)

_Abstract unavailable from the accessible public sources._

## Graph Sparse Sampling: Breaking the Curse of the Horizon in Continuous MDP Planning

**Authors:** Idan Lev\-Yehudi; Vadim Indelman

**ID:** 148152 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zuBW1RbCZQ>) | [PDF](<https://openreview.net/pdf?id=zuBW1RbCZQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148152>)

Planning under uncertainty in continuous domains poses significant challenges, yet remains essential for autonomous systems\. Tree\-based search methods such as Monte Carlo Tree Search \(MCTS\) remain popular, but their branching structure can require sampling budgets that grow exponentially with lookahead depth in the worst case\. From a tree perspective, continuous state or action spaces become especially challenging, since the planner must decide where to search in an infinite branching hierarchy\. We propose Graph Sparse Sampling \(GSS\), an online planning algorithm that shares sampled futures across many candidate decisions, rather than sampling separate successors for each candidate action\. This branch\-free graph exposes large GPU\-friendly batches, while using heuristics to focus computation\. We prove finite\-sample performance guarantees for GSS covering full\-rank or low\-rank generative simulators via smoothed backups, and discrete or sampled continuous action spaces\. Under suitable overlap, regularity, and action\-coverage conditions, these bounds have polynomial dependence on the planning horizon, formalizing when shared futures can avoid the exponential horizon dependence of tree\-shaped sparse sampling\. We demonstrate continuous\-control simulations where GSS substantially outperforms tree\-based planners on long horizons or achieves near\-optimal performance, supporting no\-branching graph planning as a useful complementary design principle for online control\.

## Stabilizing Off\-policy LLM Optimization with Prefix Importance Ratio

**Authors:** Shiye Lei; Zhihao Cheng; Dacheng Tao

**ID:** 149900 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mN7OOSKVlg>) | [PDF](<https://openreview.net/pdf?id=mN7OOSKVlg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149900>)

Reinforcement learning \(RL\) post\-training has increasingly demonstrated strong ability to elicit reasoning behaviors in large language models \(LLMs\)\. For training efficiency, rollouts are typically generated in an off\-policy manner using an older sampling policy and then used to update the current target policy\. To correct the resulting discrepancy between the sampling and target policies, most existing RL objectives rely on a token\-level importance sampling ratio, primarily due to its computational simplicity and numerical stability\. However, we observe that token\-level correction often leads to unstable training dynamics when the degree of off\-policyness is large\. In this paper, we revisit LLM policy optimization under off\-policy conditions and show that the theoretically rigorous correction term is the prefix importance ratio, and that relaxing it to a token\-level approximation can induce instability in RL post\-training\. To stabilize LLM optimization under large off\-policy drift, we propose a simple yet effective objective, Minimum Prefix Ratio \(MinPRO\)\. MinPRO replaces the unstable cumulative prefix ratio with a non\-cumulative surrogate based on the minimum token\-level ratio observed in the preceding prefix\. Extensive experiments on both dense and mixture\-of\-experts LLMs, across multiple mathematical reasoning benchmarks, demonstrate that MinPRO substantially improves training stability and peak performance in off\-policy regimes\.

## Worst\-Case Regret Bounds for Combinatorial Bandits with Ranking Feedback

**Authors:** Cristiano Migali; Gianmarco Genalti; Alberto Maria Metelli; Marco Mussi

**ID:** 151976 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WQRctuq1Rz>) | [PDF](<https://openreview.net/pdf?id=WQRctuq1Rz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151976>)

Combinatorial bandits with \*ranking feedback\* model a sequential decision\-making problem in which the learner observes a \*top\-$m$\* ranking of the set of $k$ arms played in each round\. The setting has been examined under the lens of \*top\-$k$ regret minimization\*, which accounts for the cost of pulling arms that are not among the best $k$\. Existing works rely on the assumption that latent rankings are generated by a \*Plackett\-Luce\* \(PL\) distribution and consider the special case of full\-ranking feedback \($m = k$\)\. They provide instance\-dependent regret upper bounds which match the asymptotic logarithmic scaling in the learning horizon $T$, but suffer from a burn\-in term which becomes $\\Omega\(T\)$ for some choices of the PL parameters, preventing the derivation of sublinear worst\-case bounds\.     In this work, we study the setting under the general top\-$m$ feedback \($m \\leq k$\) and provide a worst\-case regret lower bound of order $\\Omega\(\\sqrt\{T\}\)$\. Then, by introducing a novel algorithmic strategy, we derive an instance\-dependent regret upper bound which does not suffer from the exploding burn\-in term and a corresponding worst\-case bound of order $\\tilde\{\\mathcal\{O\}\}\(\\sqrt\{T\}\)$, proving for the first time that it is possible to achieve sublinear worst\-case regret w\.r\.t\. the PL parameters\.     Moreover, we translate our algorithmic ideas to \*multinomial logit\* bandits, in which the learner receives \*winner feedback\* \($m = 1$\) with non\-zero probability of observing "no\-choice"\. The existing regret bounds suffer from an exploding burn\-in term, inversely proportional to the no\-choice probability, that we avoid through our novel approach\.

## Pessimistic Latent Task\-aware Optimization for Robust Offline Meta\-Reinforcement Learning

**Authors:** Chang\-Hoon Jeong; Kisung Shin; Hanwool Sul; Byoung\-Tak Zhang

**ID:** 151379 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b2o4Aci1XF>) | [PDF](<https://openreview.net/pdf?id=b2o4Aci1XF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151379>)

Context\-based offline meta\-reinforcement learning \(COMRL\) has progressed almost entirely through better task representations: separating task identity from behavior\-policy artifacts so that the latent reflects the task information alone\. The implicit expectation has been that a clean representation will transfer to out\-of\-distribution \(OOD\) tasks\. However, on an OOD task the encoder produces a latent outside the training support, where the policy has never been trained\. We address this gap with Pessimistic Latent Task\-aware Optimization \(PLATO\), which exposes the policy to off\-support latents at training time\. PLATO assumes a mild manifold hypothesis: task latents lie on a low\-dimensional manifold, with OOD tasks further from the training centroid\. It exploits this geometry by perturbing inferred latents outward from the centroid to synthesize counterfactual tasks; a learned decoder ensemble then rolls out short trajectories at the perturbed latent, and the policy is updated on the imagined transitions under a pessimism weight that down\-weights steps where the ensemble is unconfident\. We prove that the perturbation reaches off\-support by a controllable margin, that the epistemic disagreement at the perturbed latent is non\-vanishing, and that the OOD generalization gap is bounded by the same perturbation reach\. On eight MuJoCo continuous\-control benchmarks, PLATO consistently improves out\-of\-distribution returns over strong COMRL baselines while remaining competitive in\-distribution\.

## ToolSearcher: Optimizing Tool Selection at Scale via Reinforcement Learning

**Authors:** Zhenlong Dai; Xujie Song; Zitong Wang; Tong Niu; Jian liu; Weiqiang Wang; Xiu Tang; Sai Wu; Chang Yao; Jingyuan Chen

**ID:** 154349 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EFnOrwjviv>) | [PDF](<https://openreview.net/pdf?id=EFnOrwjviv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154349>)

Large language models \(LLMs\) excel at natural language processing but struggle to interact with external environments\.  Tool learning provides a promising way to extend LLMs into actionable agents, where tool selection is a critical prerequisite for successful tool use\. Existing work often assumes a small or predefined set of tools, leaving large\-scale tool selection underexplored\.  Real\-world repositories contain a vast and diverse array of tools, making it difficult for LLMs to effectively search, distinguish, and compose tools under context\-length constraints\. We identify large\-scale tool selection as a new challenge for agentic reinforcement learning, highlighting that existing RL methods for knowledge\-based question answering are inadequate for selecting tools while considering compatibility\. To address this challenge, we propose ToolSearcher, a novel RL framework for effective multi\-turn search and fine\-grained optimization in large\-scale tool selection\. Specifically, we introduce category\-constrained tool discrimination to improve the model's ability to distinguish functionally similar tools, event\-level search modeling to explicitly optimize the discovery of target tools during multi\-turn search, and trajectory\-aligned credit allocation to provide fine\-grained reward signals for different stages of the search\-selection process\. Extensive experiments on large\-scale tool selection benchmarks demonstrate that ToolSearcher consistently outperforms a set of strong baselines in challenging settings involving iterative search and complex tool composition\.

## Towards Convergence of PPO: An Approximate Descent Approach

**Authors:** Leif Döring; Daniel A Schmidt; Moritz Melcher; Sebastian Kassing; Benedikt Wille; Tilman Aach; Simon Weissmann

**ID:** 155526 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4w3wfZ8itN>) | [PDF](<https://openreview.net/pdf?id=4w3wfZ8itN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155526>)

Proximal Policy Optimization \(PPO\) and it's variants are the most widely used policy\-gradient methods in reinforcement learning, yet the role of its actor update mechanism is still poorly understood theoretically\. In particular, standard PPO combines clipped surrogate gradients, multiple epochs of minibatch updates, and reuse of rollout data, but existing convergence analyses do not fully capture this update structure\. In this work, we theoretically study PPO policy updates with symmetric clipping from a policy\-gradient perspective and interpret its actor updates as a cyclic biased\-gradient method with sample reuse and random reshuffling\. Our first contribution is a clean formalization of PPO clipped actor updates through surrogate gradients that approximate the true policy gradient\. Using the performance difference lemma, we prove a linear bias bound which quantifies how the surrogate gradient drifts as the policy moves away from the sampling policy\. Our second contribution is a convergence analysis of cyclic surrogate\-gradient ascent, showing that additional PPO\-style biased updates can improve progress under conservative learning rates without requiring additional samples\. Finally, we analyze the stochastic minibatch version with reshuffling and obtain convergence\-to\-stationarity guarantees under standard smoothness assumptions and a bounded critic\-bias condition\. Overall, our results provide a theoretical interpretation of PPO’s multi\-epoch actor updates: extra clipped surrogate steps introduce bias, but can still improve optimization efficiency by compensating for small, stable step sizes through sample reuse\.

## Simulation\-aided Reinforcement Learning with Control Variates

**Authors:** Omer Hemo; Ido Sefi; Mirco Mutti; Aviv Tamar; Kfir Y\. Levy

**ID:** 152094 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VYeUnrk9Ch>) | [PDF](<https://openreview.net/pdf?id=VYeUnrk9Ch>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152094>)

Reinforcement Learning \(RL\) algorithms often rely on data collected from a target environment, which can be expensive and noisy\. Although simulators can generate large amounts of additional data, standard simulation mixing approaches—which directly combine simulated and real experience—can degrade performance due to simulator inaccuracies, especially when they bias the solution away from the optimal policy\. We propose a conservative simulation\-aided learning method based on control variates, where simulated data is used solely to reduce variance in the learning process rather than directly shaping the learning target\. We develop our approach for Policy\-Evaluation, which is a fundamental building block of RL algorithms\. Then we combine it within the actor\-critic framework towards policy improvement, as well as extend it towards offline RL scenarios\. Experiments on multiple MuJoCo benchmark tasks demonstrate improvements over standard simulation mixing approaches, highlighting control variates as an effective tool for simulation\-aided reinforcement learning\.

## DUET: Optimize Token\-Budget Allocation for Reinforcement Learning with Verifiable Rewards

**Authors:** Haoyu Hu; Xuandong Zhao; Nori Jacoby; Xuhai &amp;amp;quot;Orson&amp;amp;quot; Xu

**ID:** 153196 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N80WSnmidb>) | [PDF](<https://openreview.net/pdf?id=N80WSnmidb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153196>)

Reinforcement learning with verifiable rewards \(RLVR\) generates thousands of tokens per training step, with rollout generation dominating the computational cost\. The overall token budget can be controlled along two main dimensions: \(i\) deciding which prompts to allocate rollouts to, and \(ii\) deciding how long each rollout should be\. Prior work has generally controlled only one of these dimensions at a time\. We show that jointly tuning both decisions under a shared compute budget improves both reasoning quality and wall\-clock training time\. We instantiate this view as \\textbf\{DU\}al\-controlled tok\\textbf\{E\}n alloca\\textbf\{T\}ion \(DUET\), a computationally efficient layer over GRPO, in which we have a lightweight pre\-rollout surrogate of prompt informativeness to set how many rollouts each prompt receives and a marker\-gated abort rule with importance reweighting set when to stop them\. On Qwen3\-1\.7B trained on MATH, DUET outperforms full\-budget GRPO and the other three budget\-aware baseline methods\. DUET's advantage was further generalized to other benchmarks across math and coding, and was on par with the best baseline on the scientific Q\\&amp;A domain, while also achieving a $1\.62\\times$ wall\-clock speedup\. More notably, using only 50\\% of the token budget, DUET still outperforms all baseline methods, and performance often increases rather than reduces with the more limited budget, achieving an even higher $2\.51\\times$ speedup\. We verified the high performance of DUET on other backbone LLMs, including Qwen\-4B and Llama\-3\.2\-3B\-Instruct\. Notably, the gap between DUET and the strongest baseline \\emph\{widens\} as the budget tightens, contrary to the usual pattern in which efficient methods trade off quality as compute decreases\.  More broadly, these results suggest that DUET budget\-aware control strategies are valuable not only for accelerating training, but also for improving the quality of the learning signal\.

## Ergodic Risk Measures: Towards a Risk\-Aware Foundation for Continual Reinforcement Learning

**Authors:** Juan Rojas; Chi\-Guhn Lee

**ID:** 152958 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P7WboKVZGN>) | [PDF](<https://openreview.net/pdf?id=P7WboKVZGN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152958>)

Continual reinforcement learning \(continual RL\) seeks to formalize the notions of lifelong learning and endless adaptation in RL\. In particular, the aim of continual RL is to develop RL agents that can maintain a careful balance between retaining useful information and adapting to new situations\. To date, continual RL has been explored almost exclusively through the lens of risk\-neutral decision\-making, in which the agent aims to optimize the expected long\-run performance\. In this work, we present the first formal theoretical treatment of continual RL through the lens of risk\-aware decision\-making, in which the behaviour of the agent is directed towards optimizing a measure of long\-run performance beyond the mean\. In particular, we show that the classical theory of risk measures, widely used as a theoretical foundation in non\-continual risk\-aware RL, is, in its current form, incompatible with continual learning\. Then, building on this insight, we extend risk measure theory into the continual setting by introducing a new class of ergodic risk measures, and showing that it is compatible with continual learning\. Finally, we provide a case study of continual risk\-aware learning, along with empirical results, which show the intuitive appeal of ergodic risk measures in continual settings\.

## Active Context Selection Improves Simple Regret in Contextual Bandits

**Authors:** Mohammad Shahverdikondori; Jalal Etesami; Negar Kiyavash

**ID:** 151058 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dJqzCskE60>) | [PDF](<https://openreview.net/pdf?id=dJqzCskE60>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151058>)

We study the contextual multi\-armed bandit problem with a finite context space \(a\.k\.a\. subpopulations\),  where the learner recommends a best action for each context and is evaluated by context\-weighted simple regret\. Our guarantees are worst\-case over the reward distributions, while remaining instance\-dependent with respect to the context distribution vector $\\mathbf p$\. Akin to experimental design problems where the population of interest is fixed but the sampled subpopulation can be controlled, we allow the learner to actively choose which context to sample from\. For a known $\\mathbf p$, we characterize tight regret rates: passive sampling where contexts are randomly revealed achieves regret of order  $\\sqrt\{n/T \\lVert \{\\mathbf\{p\}\} \\rVert\_\{1/2\}\}$,  whereas active sampling with allocation  $q\_j \\propto p\_j^\{2/3\}$ achieves the tight rate $\\sqrt\{n/T\} \\lVert \{\\mathbf\{p\}\} \\rVert\_\{2/3\}$\.  The resulting improvement can be as large as  $\\Theta\(k^\{1/4\}\)$,  where $k$ is the number of contexts\.  We further extend the analysis to budgeted active sampling, characterize the corresponding tight rate, and identify when a limited active budget suffices to recover the fully active rate\. When $\\mathbf p$ is unknown, we propose the Explore\-Explore\-Then\-Commit \(EETC\) algorithm, which optimally balances estimating the context distribution and the time to switch to active allocation, such that for large horizons, it matches the known\-$\\mathbf p$ active rate up to constants\.  Experiments on synthetic and real\-world data support our theoretical findings\.

## Reinforcement Learning Agents Are Swimmers

**Authors:** Juan Rojas; Jacob Adamczyk; Abhishek Naik; Volodymyr Makarenko; Gautham Vasan; Nikhil Mukund; Stas Tiomkin; Rahul Kulkarni; Chi\-Guhn Lee

**ID:** 140046 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aL3MYGqI5m>) | [PDF](<https://openreview.net/pdf?id=aL3MYGqI5m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140046>)

To date, the field of reinforcement learning \(RL\) has primarily focused on developing discounted methods, which are designed to optimize the short\-term or transient performance of RL agents\. Conversely, the field has been reluctant to explore and invest in methods that are designed to optimize the long\-term or steady\-state performance of RL agents\. In this position paper, we challenge this reluctance under the framing that RL agents should be viewed as competitive swimmers\. That is, we argue that, like competitive swimmers, RL agents cannot hope to win all races, or solve all tasks, based on transient performance alone\. To this end, we first motivate the need for RL agents that can adequately optimize both the transient and steady\-state performance\. Then, we summarize recent works which show that discounted methods have deficiencies when it comes to optimizing the steady\-state performance\. Finally, we argue in favor of more attention and investment from the community towards average\-reward methods, which are designed to optimize the steady\-state performance\. Namely, we challenge common misconceptions associated with average\-reward methods, and highlight recent advancements which suggest that such methods present a viable and potentially superior alternative\.

## Stabilizing Knowledge, Promoting Reasoning: Dual\-Token Constraints for RLVR

**Authors:** Jiakang Wang; Runze Liu; Fuzheng Zhang; Xiu Li; Guorui Zhou; Kun Gai; Ling Pan

**ID:** 151790 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XzRoRbdbXp>) | [PDF](<https://openreview.net/pdf?id=XzRoRbdbXp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151790>)

Reinforcement Learning with Verifiable Rewards \(RLVR\) has become an effective post\-training method for improving the reasoning abilities of Large Language Models \(LLMs\)\. However, existing methods mainly apply uniform optimization constraints across all tokens, ignoring their heterogeneous roles\. Prior work shows that high\-entropy tokens are closely tied to reasoning, while low\-entropy tokens primarily encode factual knowledge, and recent approaches attempt to exploit this distinction by isolating token updates via masking or asynchronous training\. We argue that such isolation breaks the sequential dependency structure of autoregressive generation, leading to suboptimal learning\. To address this, we propose \\textbf\{Archer\}, an entropy\-aware RLVR framework with \\textbf\{dual\-token constraints\} that preserves joint optimization while modulating update strength across token types\. Our method introduces response\-level entropy normalization for stable token classification and applies differentiated clipping ranges and KL regularization to encourage exploration on reasoning tokens while preserving knowledge tokens\. Experiments on mathematical reasoning and code generation benchmarks show that Archer consistently outperforms strong baselines across multiple model scales, improving both \\textit\{pass@1\} and \\textit\{pass@K\} performance\. These results highlight the importance of respecting sequence\-level dependencies when designing fine\-grained RL optimization strategies for LLMs\.

## When Dynamics Shift, Robust Task Inference Wins: Offline Imitation Learning with Behavior Foundation Models Revisited

**Authors:** Rishabh Agrawal; Rahul Jain; Ashutosh Nayyar

**ID:** 148762 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vFC88YZZSH>) | [PDF](<https://openreview.net/pdf?id=vFC88YZZSH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148762>)

Behavior Foundation Models \(BFMs\) enable scalable imitation learning \(IL\) by pretraining task\-agnostic representations that can be rapidly adapted to new tasks\. However, existing BFMs assume fixed environment dynamics, limiting their robustness under real\-world shifts such as changes in friction, actuation, or sensor noise\. We address this by formulating BFM task\-inference as a robust minimax optimization problem, enabling adaptation to worst\-case dynamics perturbations without modifying pretraining\. To the best of our knowledge, this is the first BFM\-based framework that achieves robustness to dynamics shifts while relying solely on offline data from a single nominal environment\. Our approach significantly outperforms standard BFM and robust offline IL baselines under dynamics shifts\. These results demonstrate that robust policy can be achieved entirely at task\-inference time, improving the practicality of BFMs in dynamic settings\.

## Planning as Dynamics Relaxation: Hippocampal Recurrent Network Realizes Optimal Goal\-Directed Navigation

**Authors:** 宇航 他; Junfeng Zuo; Tianhao Chu; Si Wu

**ID:** 150211 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=juTALxlaPs>) | [PDF](<https://openreview.net/pdf?id=juTALxlaPs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150211>)

Neural correlates of spatial cognitive map are well documented, yet exactly how neural circuits perform spatial navigation in complex environments — e\.g\., reaching a goal while avoiding obstacles — remains largely unclear\. Here, we show that a hippocampal network with appropriate recurrent connections can naturally achieve optimal goal\-directed navigation via its relaxation dynamics\. Specifically, we consider that the recurrent weights between the neurons represent the transition probabilities between spatial locations encoded by neurons; obstacles such as walls and blocked corridors are therefore reflected by the vanishing of connection weights\. This connection pattern can be learned in the hippocampus via behavioral\-timescale synaptic plasticity \(BTSP\)  while the animal is exploring the environment\. When a goal signal is presented, the network dynamics will relax into an activity field representing the goal location\. We prove that this field is mathematically equivalent to the desirability field of a Linearly\-solvable Markov Decision Process \(LMDP\), and the local log\-gradient of the field indicates the navigation direction\. Both theoretical analyses and simulations demonstrate that this recurrent network dynamics\-mediated navigation is efficient and robust in environments with complex obstacle layouts\. Moreover, only low\-rank updates of the network's connection pattern are needed when the environment has local changes\. We hope this study offers insight into a general circuit principle for planning in abstract rational maps in the brain beyond spatial navigation\.

## Plan2Sense: Open\-World Task Planning in Epistemic States via Interleaved Ontic and Sensing Actions

**Authors:** Xiaotian Liu; Armin Toroghi; Jiazhou Liang; Ali Pesaranghader; Scott Sanner

**ID:** 150699 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g9ZhljQuww>) | [PDF](<https://openreview.net/pdf?id=g9ZhljQuww>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150699>)

Open\-world task planning requires not only generating feasible plans but also acquiring the knowledge needed to execute them\. Existing task planners for egocentric agents either attempt to exhaustively gather information from the environment or generate plans under prior assumptions of the world and replan as new observations arrive\. Both strategies are impractical in complex environments and can potentially expose agents to undesirable or unsafe situations\. To enable effective planning in open\-world settings, we propose Plan2Sense, a framework that grounds planning in the agent’s epistemic state to determine what information is required for plan feasibility and how to acquire it\. We formalize decision\-making as a three\-valued first\-order Knowledge\-State Markov Decision Process \(KS\-MDP\) and develop a knowledge state goal regression algorithm KSR to construct sensing\-aware conditional plans in the open\-world setting\. Our formulation supports sensing actions for both predicate disambiguation and knowledge acquisition via object binding without assuming a fully known initial state or a closed set of predefined objects\. Across three open\-world egocentric benchmarks requiring active knowledge acquisition, \\textsc\{Plan2Sense\} achieves higher success rates and improved efficiency over existing baselines while consistently avoiding undesirable and potentially unsafe states\.

## From POMDP Theory to Deep RL with Particle Filters

**Authors:** Kevin Tan; Ziping Xu

**ID:** 151710 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YcveAbhXYA>) | [PDF](<https://openreview.net/pdf?id=YcveAbhXYA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151710>)

_Abstract unavailable from the accessible public sources._

## Two\-Fidelity Best\-Action Identification for Stochastic Minimax Tree

**Authors:** Peter Chen; Xi Chen

**ID:** 151717 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YbPKvD833D>) | [PDF](<https://openreview.net/pdf?id=YbPKvD833D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151717>)

We study fixed\-confidence best\-action identification \(BAI\) in stochastic minimax trees\. This problem is increasingly relevant in modern AI planning, where deep minimax search and Monte Carlo Tree Search \(MCTS\) with language model long rollouts face a fundamental tradeoff: heuristic evaluations are cheap but biased, while accurate rollouts are reliable but prohibitively expensive\.  We propose 2FFS, a two\-fidelity tree\-search algorithm that brings multi\-fidelity flat bandit ideas into trees\. The algorithm combines minimax\-style fast expansion with MCTS\-style stochastic sampling, adaptively deciding when to exploit cheap biased evaluations and when to invoke expensive accurate evaluations for local certification\. We prove fixed\-confidence correctness, establish finite stopping for exact identification, and give a polynomial\-depth cost upper bound for general\-depth trees\. Across numerical stochastic\-tree experiments, 2FFS uses substantially fewer samples and computational operations comparing to existing BAI\-MCTS baseline\.

## TIER: Trajectory\-Invariant Execution Rewards for Multi\-Step Tool Composition

**Authors:** Anay Kulkarni; Allen Lu; Dheeraj Mekala; Jayanth Srinivasa; Gaowen Liu; Jingbo Shang

**ID:** 154119 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G82YnmxBx8>) | [PDF](<https://openreview.net/pdf?id=G82YnmxBx8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154119>)

Tool use enables large language models to solve complex tasks through sequences of API calls, yet existing reinforcement learning approaches fail to scale to multi\-step composition settings\. Outcome\-based rewards provide only sparse feedback, while trajectory\-supervised rewards depend on annotated reference solutions, penalizing valid alternatives and limiting scalability\. We propose TIER: Trajectory\-Invariant Execution Rewards, a reward framework that derives supervision directly from function schemas and runtime execution, rather than from reference trajectories\. The reward decomposes into format validity, schema adherence, execution success, and answer correctness, providing dense, interpretable sequence\-level feedback derived from fine\-grained verification of individual steps of tool use\. This design allows any valid execution path to receive credit, naturally supporting multiple solution strategies and adapting to evolving tool interfaces\. On DepthBench, a compositional benchmark stratified by depth \(1 to 6 steps\), TIER achieves &gt;90% accuracy across steps, where trajectory\-supervised rewards collapse beyond step\-4\. We further demonstrate consistent gains on benchmarks like BFCL v3 and NestFUL\. Ablation studies confirm that all reward components are necessary, highlighting the importance of multi\-level supervision for compositional reasoning\.

## From Anti\-Forgetting to Fast Adaptation: Continual Reinforcement Learning with World Models

**Authors:** Qiyang Zhou; Yuliang Cai; Peng Wang; Senquan Yi; Yanming Li; Haobo Fu; Li Shen

**ID:** 150468 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hoG3Hx7DHo>) | [PDF](<https://openreview.net/pdf?id=hoG3Hx7DHo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150468>)

Continual Reinforcement Learning \(CRL\) requires agents to adapt to sequentially arriving tasks while retaining performance on previous ones\. Most existing CRL methods rely on model\-free frameworks, addressing catastrophic forgetting via regularization, parameter isolation, or experience replay\. World models offer a promising alternative by accumulating transferable dynamics knowledge and enabling planning\-based decision\-making\. However, existing world model approaches suffer from slow adaptation at task boundaries: abrupt reward shifts mislead the planner, fixed planning horizons accumulate prediction errors when the dynamics model is unreliable, and quality\-agnostic replay dilutes training while exacerbating forgetting\. We propose HERD \(Horizon\-adaptive Elite Replay with reward Disagreement\), which addresses these challenges from two complementary perspectives: for $\\textbf\{\\emph\{how to learn\}\}$, Uncertainty\-aware Reward Planning leverages ensemble disagreement to accelerate reward calibration and guide exploration, while Adaptive Planning Horizon adjusts rollout depth based on dynamics prediction error to prevent error accumulation; for $\\textbf\{\\emph\{what to learn\}\}$, Elite Experience Replay applies quality\-stratified reweighting of historical trajectories to strengthen knowledge retention\. Together, these components $\\textbf\{\\emph\{accelerate new\-task adaptation and mitigate catastrophic forgetting\.\}\}$ Experiments on Continual World, Continual Bench, and DM Control show that HERD consistently outperforms existing methods in overall performance, forgetting mitigation, and new\-task adaptation\.

## The Laplacian Keyboard: Beyond the Linear Span

**Authors:** Siddarth Chandrasekar; Marlos C\. Machado

**ID:** 155777 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2xN81qKlwF>) | [PDF](<https://openreview.net/pdf?id=2xN81qKlwF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155777>)

Across scientific disciplines, Laplacian eigenvectors serve as a fundamental basis for simplifying complex systems, from signal processing to quantum mechanics\. In reinforcement learning \(RL\), they similarly form a basis over the state space, enabling reward functions to be approximated by projection onto a small set of eigenvectors\. This projection makes zero\-shot control possible, but it also imposes a fundamental limitation: the induced policies are only as expressive as the linear span of the chosen eigenvectors\. We introduce the Laplacian Keyboard \(LK\), a hierarchical framework that goes beyond this linear span\. LK constructs a task\-agnostic library of behaviors from these eigenvectors, forming a behavior basis guaranteed to contain the optimal policy for any reward within the linear span\. A meta\-policy learns to stitch these behaviors dynamically, enabling efficient learning of policies outside the original linear constraints\. We establish theoretical bounds on zero\-shot approximation error and demonstrate empirically that LK improves over the zero\-shot solution while achieving better sample efficiency compared to standard RL methods\.

## On the Token Value Inequality in Efficient Reasoning

**Authors:** Runjia Zeng; Hang Hua; Yiyang Liu; Zhiqiang Tao; Ruixiang Tang; Qifan Wang; Cheng Han; Dongfang Liu

**ID:** 150461 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hrWCDkWrpQ>) | [PDF](<https://openreview.net/pdf?id=hrWCDkWrpQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150461>)

Chain\-of\-Thought reasoning has enabled large language models to achieve substantial performance gains on complex tasks\. However, these gains come at the cost of dramatically increased token consumption\. This raises a fundamental question: is every token in the reasoning trace equally valuable? We present a diagnostic and optimization framework grounded in a key empirical finding: the value of tokens within a CoT reasoning sequence is highly non\-uniform, and this non\-uniformity can be effectively characterized by token\-level log probability signals\. We show that normalized log probability helps distinguish core tokens, which carry structural and decisive reasoning content, from redundant tokens, which are exploratory, low\-confidence filler that contributes less directly to the final answer\. Building on these findings, we formulate the TokenProbe framework around two empirical findings and one claim: findings identify token value inequality first and then establish TokenProbe as a core\-token proxy, and the claim introduces an efficient GRPO objective positing that selectively compressing redundant tokens can yield Pareto improvements in the accuracy–token efficiency space\. Empirically, our method preserves reasoning quality while reducing the token usage by 76% of the baseline\. Under matched reasoning\-length budgets, we show that it can even outperform strong flagship baselines like Gemini\-3\.1\-Pro\.

## SFT\-then\-RL Outperforms Mixed\-Policy Methods for LLM Reasoning

**Authors:** Alexis Limozin; Eduard F Ďurech; Torsten Hoefler; Imanol Schlag; Valentina Pyatkin

**ID:** 139026 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pWkCETOQnA>) | [PDF](<https://openreview.net/pdf?id=pWkCETOQnA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139026>)

Recent mixed\-policy optimization methods for LLM reasoning that interleave or blend supervised and reinforcement learning signals report improvements over the standard SFT\-then\-RL pipeline\. We show that numerous recently published research papers rely on a faulty baseline caused by two distinct bugs: a CPU\-offloaded optimizer bug in DeepSpeed that silently drops intermediate micro\-batches during gradient accumulation \(affecting multiple downstream frameworks including TRL, OpenRLHF and Llama\-Factory\), and a loss aggregation bug in OpenRLHF that incorrectly weights per\-mini\-batch losses\. Together they suppress SFT performance, with the optimizer bug accounting for most of the gap and the loss aggregation bug contributing a smaller additional effect\. Once corrected, the standard SFT\-then\-RL pipeline surpasses every published mixed\-policy method we evaluate by \+3\.8 points on math benchmarks with Qwen2\.5\-Math\-7B and by \+22\.2 points with Llama\-3\.1\-8B\. Even a truncated variant with just 50 RL steps outperforms mixed\-policy methods on math benchmarks while using fewer FLOPs\.

## Behavior Cloning is Not All You Need: The Optimality of On\-Policy Distillation for Noisy Expert Feedback

**Authors:** Ved Sriraman; Peihan Liu; Daniel Hsu; Adam Block

**ID:** 150673 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gLfGap1Y0U>) | [PDF](<https://openreview.net/pdf?id=gLfGap1Y0U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150673>)

Imitation Learning \(IL\) is a natural framework for learning in sequential decision\-making systems and has emerged as the dominant paradigm through which we understand language model training\.  A central puzzle is that, while in theory offline IL can be horizon\-free and optimal, in practice online methods such as on\-policy distillation \(OPD\) often outperform offline methods such as supervised fine\-tuning \(SFT\)\.  We propose a noisy expert model to explain this gap, in which the learner only has access to a noisy version of the expert's policy, but wishes to compete against the reward achieved by a clean expert, motivated by the fact that in many applications, e\.g\. training language models to perform long chains of thought, the expert is often imperfect\.  In this setting, we show a sharp separation between offline and online IL\. Offline learning from noisy trajectories is fundamentally hard: to compete with the clean expert, the sample complexity must grow exponentially, in contradistinction to the clean expert setting where no explicit horizon dependence exists\.  In contrast, we prove that online interaction with the noisy expert via a novel variant of OPD enables horizon\-free guarantees in some settings and polynomial dependence on horizon in general\.  Our analysis leads to an alternative loss function form that is commonly considered empirically for LM training\.  We further provide algorithms and lower bounds, and extend our results to the more realistic setting of unknown corruption when the clean expert is deterministic, thereby providing a theoretical foundation for why on\-policy distillation can outperform standard supervised fine\-tuning when training language models from imperfect teachers\. We complement our theoretical results with experiments on synthetic and natural\-language tasks, showing that the OPD variant suggested by our theory outperforms both offline BC and existing OPD objectives under noisy expert feedback\.

## Sparse Planning in Visual World Models via Cost Gradients

**Authors:** Yingchen Xu; Edward Grefenstette

**ID:** 153731 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JDEHvMtOmX>) | [PDF](<https://openreview.net/pdf?id=JDEHvMtOmX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153731>)

Token\-based world models enable fine\-grained latent planning, but iterative search inside the predictor is dominated by the number of spatial tokens processed during rollout\. We introduce COSTGRAD, a training\-free, goal\-conditioned selector that ranks spatial tokens by the gradient norm of the planning cost with respect to each input token\. By deriving importance from the downstream control objective, COSTGRAD targets tokens that matter for planning rather than merely for prediction\. On AdaLN\-conditioned predictors at $50\\%$ sparsity, COSTGRAD matches or exceeds full\-token planning on three of four continuous\-control benchmarks, while giving a measured $2\.6\\times$ wall\-clock speedup per environment planning step\. The sparsity dividend can be combined with reduced CEM search, yielding a $\\sim5\\times$ total speedup while still exceeding the full\-token baseline\. We also identify an architecture\-dependent failure mode: in a matched AdaLN\-vs\-concat comparison, concat maintains comparable full\-token performance but pure COSTGRAD loses its advantage over random selection\. This failure tracks action\-pathway drift under selected token removal: AdaLN largely preserves how actions affect kept tokens, whereas concat perturbs the action\-conditioned computation\. Mixing in random anchors partially recovers COSTGRAD's advantage on some matched\-concat checkpoints, suggesting selector\-\-architecture compatibility as a design axis for sparse world\-model planning\.

## Pessimistic Latent Task\-aware Optimization for Robust Offline Meta\-Reinforcement Learning

**Authors:** Chang\-Hoon Jeong; Kisung Shin; Hanwool Sul; Byoung\-Tak Zhang

**ID:** 151379\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151379

[Paper](<https://openreview.net/forum?id=b2o4Aci1XF>) | [PDF](<https://openreview.net/pdf?id=b2o4Aci1XF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151379>)

Context\-based offline meta\-reinforcement learning \(COMRL\) has progressed almost entirely through better task representations: separating task identity from behavior\-policy artifacts so that the latent reflects the task information alone\. The implicit expectation has been that a clean representation will transfer to out\-of\-distribution \(OOD\) tasks\. However, on an OOD task the encoder produces a latent outside the training support, where the policy has never been trained\. We address this gap with Pessimistic Latent Task\-aware Optimization \(PLATO\), which exposes the policy to off\-support latents at training time\. PLATO assumes a mild manifold hypothesis: task latents lie on a low\-dimensional manifold, with OOD tasks further from the training centroid\. It exploits this geometry by perturbing inferred latents outward from the centroid to synthesize counterfactual tasks; a learned decoder ensemble then rolls out short trajectories at the perturbed latent, and the policy is updated on the imagined transitions under a pessimism weight that down\-weights steps where the ensemble is unconfident\. We prove that the perturbation reaches off\-support by a controllable margin, that the epistemic disagreement at the perturbed latent is non\-vanishing, and that the OOD generalization gap is bounded by the same perturbation reach\. On eight MuJoCo continuous\-control benchmarks, PLATO consistently improves out\-of\-distribution returns over strong COMRL baselines while remaining competitive in\-distribution\.

## Pessimistic Latent Task\-aware Optimization for Robust Offline Meta\-Reinforcement Learning

**Authors:** Chang\-Hoon Jeong; Kisung Shin; Hanwool Sul; Byoung\-Tak Zhang

**ID:** 151379\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151379

[Paper](<https://openreview.net/forum?id=b2o4Aci1XF>) | [PDF](<https://openreview.net/pdf?id=b2o4Aci1XF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151379>)

Context\-based offline meta\-reinforcement learning \(COMRL\) has progressed almost entirely through better task representations: separating task identity from behavior\-policy artifacts so that the latent reflects the task information alone\. The implicit expectation has been that a clean representation will transfer to out\-of\-distribution \(OOD\) tasks\. However, on an OOD task the encoder produces a latent outside the training support, where the policy has never been trained\. We address this gap with Pessimistic Latent Task\-aware Optimization \(PLATO\), which exposes the policy to off\-support latents at training time\. PLATO assumes a mild manifold hypothesis: task latents lie on a low\-dimensional manifold, with OOD tasks further from the training centroid\. It exploits this geometry by perturbing inferred latents outward from the centroid to synthesize counterfactual tasks; a learned decoder ensemble then rolls out short trajectories at the perturbed latent, and the policy is updated on the imagined transitions under a pessimism weight that down\-weights steps where the ensemble is unconfident\. We prove that the perturbation reaches off\-support by a controllable margin, that the epistemic disagreement at the perturbed latent is non\-vanishing, and that the OOD generalization gap is bounded by the same perturbation reach\. On eight MuJoCo continuous\-control benchmarks, PLATO consistently improves out\-of\-distribution returns over strong COMRL baselines while remaining competitive in\-distribution\.

## ToolSearcher: Optimizing Tool Selection at Scale via Reinforcement Learning

**Authors:** Zhenlong Dai; Xujie Song; Zitong Wang; Tong Niu; Jian liu; Weiqiang Wang; Xiu Tang; Sai Wu; Chang Yao; Jingyuan Chen

**ID:** 154349\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154349

[Paper](<https://openreview.net/forum?id=EFnOrwjviv>) | [PDF](<https://openreview.net/pdf?id=EFnOrwjviv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154349>)

Large language models \(LLMs\) excel at natural language processing but struggle to interact with external environments\.  Tool learning provides a promising way to extend LLMs into actionable agents, where tool selection is a critical prerequisite for successful tool use\. Existing work often assumes a small or predefined set of tools, leaving large\-scale tool selection underexplored\.  Real\-world repositories contain a vast and diverse array of tools, making it difficult for LLMs to effectively search, distinguish, and compose tools under context\-length constraints\. We identify large\-scale tool selection as a new challenge for agentic reinforcement learning, highlighting that existing RL methods for knowledge\-based question answering are inadequate for selecting tools while considering compatibility\. To address this challenge, we propose ToolSearcher, a novel RL framework for effective multi\-turn search and fine\-grained optimization in large\-scale tool selection\. Specifically, we introduce category\-constrained tool discrimination to improve the model's ability to distinguish functionally similar tools, event\-level search modeling to explicitly optimize the discovery of target tools during multi\-turn search, and trajectory\-aligned credit allocation to provide fine\-grained reward signals for different stages of the search\-selection process\. Extensive experiments on large\-scale tool selection benchmarks demonstrate that ToolSearcher consistently outperforms a set of strong baselines in challenging settings involving iterative search and complex tool composition\.

## Near\-Optimal Learning in Parametric Bandits with Action\-Dependent Coarsened Feedback

**Authors:** Zhuohua Li; MAOLI LIU; Yuwen Huang; Cheng Wen; Jie Su; Cong Tian; Shengchao Qin; John C\. S\. Lui

**ID:** 148628 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wKZIaaXYmQ>) | [PDF](<https://openreview.net/pdf?id=wKZIaaXYmQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148628>)

We study a structured stochastic multi\-armed bandit problem in which each decision simultaneously determines the learner's reward and the feedback available for learning\. At each round, the learner selects a task and an option\. Each task is associated with an unknown parameter that governs its reward, while each option has a known reward function of this parameter and determines how information about that reward is observed\. Some options may provide fine\-grained feedback at the cost of lower immediate reward, whereas others may yield higher reward but return only coarse feedback\. This creates an intrinsic trade\-off between reward maximization and information acquisition\. We formalize this setting as parametric bandits with action\-dependent coarsened feedback\. For stationary tasks, we propose ACF\-UCB, an optimistic algorithm that constructs task\-level confidence sets by aggregating information from all atoms of the option\-dependent feedback distributions\. For piecewise\-stationary tasks, we develop SW\-ACF\-UCB, a sliding\-window variant that adapts to temporal changes\. We prove high\-probability regret bounds for stationary environments and dynamic regret guarantees for piecewise\-stationary environments\. We also establish lower bounds showing that the dependence on the number of tasks and the horizon is unavoidable, while methods that ignore the shared parametric structure suffer substantially larger regret\.

## Tree\-Guided Identify Then Exploit: A Unified Framework of Pure Exploration and Regret Minimization for Dueling Bandits

**Authors:** Pu Wang; Yao\-Xiang Ding

**ID:** 148936 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=u6hEKKPhn2>) | [PDF](<https://openreview.net/pdf?id=u6hEKKPhn2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148936>)

_Abstract unavailable from the accessible public sources._

## Can In\-Context Learning Support Intrinsic Curiosity?

**Authors:** Eric Elmoznino; Sangnie Bhardwaj; Johannes von Oswald; Rajai Nasser; Blaise Aguera y Arcas; João Sacramento; Rif A\. Saurous; Guillaume Lajoie

**ID:** 151481 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aHSKeImV3Z>) | [PDF](<https://openreview.net/pdf?id=aHSKeImV3Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151481>)

Effective machine learning depends not only on how we model data, but also on what data we choose to collect\. While large sequence models have revolutionized data modeling, the problem of automated data selection, or "intrinsic curiosity", remains a significant challenge\. Classic approaches incentivize exploration by rewarding an agent based on its "learning progress", which measures how much a newly acquired observation improves a world model's predictive ability\. However, evaluating these rewards traditionally requires expensive inner loops of gradient descent updates within each trajectory, rendering them computationally impractical at scale\. In this work, we investigate whether the emergent in\-context learning \(ICL\) capabilities of sequence models can eliminate this bottleneck by serving as immediate, update\-free world models\. Specifically, we evaluate whether an exploration policy can be trained to maximize learning progress, using solely the prediction errors and counterfactual context manipulations of an in\-context learner\. We first prove that in general Markov decision processes, this is in fact impossible in an unbiased way: the resulting intrinsic rewards either suffer from nuisance terms that bias their estimation of true learning progress, or they cannot be implemented using an in\-context learner's prediction errors\. Conversely, we prove a positive result for a broad subclass of non\-temporal settings, encompassing active learning and Bayesian Experimental Design: here, ICL\-derived rewards successfully bound and asymptotically converge to the true learning progress\. We corroborate our theory with controlled experiments across continuous and symbolic environments, demonstrating that our ICL\-driven framework successfully trains curious data\-collection policies that explore optimally\.

## Bandits via Additive Quantized Representations

**Authors:** Ami Tavory; Noam Touitou; Tal Sarig; Frank Cheng; Ido Guy

**ID:** 155168 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7n363oEuwb>) | [PDF](<https://openreview.net/pdf?id=7n363oEuwb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155168>)

Contextual bandits require balancing nonlinear reward modeling with online efficiency\. Tree ensembles capture nonlinearities but require periodic retraining and large replay buffers\. Linear models update efficiently per observation with $O\(1\)$ memory, but are fundamentally restricted to linear reward structures\. We propose Residual Quantization \(RQ\) as a representation layer to bridge this gap\. An offline\-trained RQ codebook maps continuous contexts into discrete centroid assignments across $\\ell$ levels, set dynamically through a shadow mechanism\. This enables a spectrum of additive bandit algorithms that achieve nonlinear expressivity with strictly bounded memory\. Across 13 datasets, RQ variants beat their non\-RQ counterparts on 11 of 13 datasets, often by wide margins, while matching doubling\-retrain XGBoost and neural baselines at up to $1000\\times$ less memory\.

## DiReCL: Learning Differentiable Reward Code with Inverse Reinforcement Learning

**Authors:** Aoran Wang; Jingtao Zhang; Maosen Li; Zongzhang Zhang

**ID:** 148348 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yXtaGQVE33>) | [PDF](<https://openreview.net/pdf?id=yXtaGQVE33>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148348>)

In reinforcement learning \(RL\), reward specification plays the fundamental role in shaping policy optimization\. Inverse RL \(IRL\) offers a data\-driven approach to inferring rewards from demonstrations, but prevalent neural\-network\-based methods often produce rewards lacking interpretability and flexibility for manual inspection or revision\. In contrast, human\-written or large language model \(LLM\)\-generated reward code provides explicit semantic structure, yet its precise numerical parameters are often difficult to calibrate and prone to specification errors\. To bridge this gap, we propose DiReCL \(\\textbf\{Di\}fferentiable \\textbf\{Re\}ward \\textbf\{C\}ode \\textbf\{L\}earning\), a novel framework that unifies these two paradigms by formulating reward learning in a differentiable reward code space\. DiReCL first prompts an LLM to synthesize the reward code templates, then converts the numeric elements in these templates into differentiable parameters and align them with expert demonstrations through IRL\. We further introduce a reflection mechanism that uses IRL diagnostics to provide evidence of inadequacies in the reward structure and guide template revision\. Extensive experiments on MuJoCo locomotion and autonomous driving benchmarks demonstrate that DiReCL achieves over $1\.25 \\times$ the performance of both standard IRL and LLM\-assisted reward design baselines, while preserving the crucial benefits of explicit, interpretable reward semantics\.

## Leveraging Psychophysical Attentional Distribution for Gaze\-Augmented Reward Modeling

**Authors:** Chaeho Lee; Junyup Kim; Wansoo Kim; Young Min Jung; Sang Ho Lee

**ID:** 154188 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FYcuG9h4hx>) | [PDF](<https://openreview.net/pdf?id=FYcuG9h4hx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154188>)

_Abstract unavailable from the accessible public sources._

## Transferability for General Reasoning: An Automated Curriculum for Multi\-Domain LLM RL

**Authors:** Yongjin Yang; Jiarui Liu; Yinghui He; Lechen Zhang; Bernhard Schölkopf; Zhijing Jin

**ID:** 153605 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K8uod6RgUG>) | [PDF](<https://openreview.net/pdf?id=K8uod6RgUG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153605>)

_Abstract unavailable from the accessible public sources._

## Learning POMDP World Models from Observations with Language\-Model Priors

**Authors:** Valentin Six; Frederik Panse; Mathis Fajeau; Lancelot Da Costa; Mridul Sharma; Alfonso Amayuelas; Tim Xiao; David Hyland; Philipp Hennig; Bernhard Schölkopf

**ID:** 155829 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2a3onHQUa2>) | [PDF](<https://openreview.net/pdf?id=2a3onHQUa2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155829>)

_Abstract unavailable from the accessible public sources._

## Informed Posterior Sampling: More Efficient Online Learning with Few Offline Demonstrations in Average\-Reward MDPs

**Authors:** Dengwang Tang; Rahul Jain; Botao Hao; Zheng Wen; Dongze Ye

**ID:** 155089 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8WF7tRvbkZ>) | [PDF](<https://openreview.net/pdf?id=8WF7tRvbkZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155089>)

_Abstract unavailable from the accessible public sources._

## Neglected Free Lunch from Post\-training: Progress Advantage for LLM Agents

**Authors:** Changdae Oh; Wendi Li; Seongheon Park; Samuel \(Min\-Hsuan\) Yeh; Tanwi Mallick; Sharon Li

**ID:** 153134 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Nd0oMzLk1y>) | [PDF](<https://openreview.net/pdf?id=Nd0oMzLk1y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153134>)

Process reward models enable fine\-grained, step\-level evaluation of LLMs, yet building them for agentic settings remains prohibitively difficult: long\-horizon interactions, irreversible actions, and stochastic environment feedback make both human annotation and Monte Carlo estimation infeasible at scale\. In this work, we show that reinforcement learning \(RL\) post\-training already provides the ingredients for effective step\-level scoring, eliminating the need for dedicated reward model training altogether\. Concretely, we derive an implicit advantage under a general stochastic Markov Decision Process, which we term progress advantage\-\-\-log\-probability ratio between the RL\-trained policy and its reference policy exactly recovers the optimal advantage function\. This signal is annotation\-free, domain\-agnostic, and available as a byproduct of the standard RL post\-training pipeline\. We validate the effectiveness of the progress advantage across three different applications: test\-time scaling, uncertainty quantification, and failure attribution on five benchmarks and four model families\. Across all settings, progress advantage consistently outperforms confidence\-based baselines and, despite requiring no task\-specific training, surpasses dedicated trained reward models\. We complement these results with deeper analyses on characteristics of progress advantage, offering practical guidance for adoption in real\-world agentic systems\.

## On the Complexity of Discounted Robust MDPs with $L\_p$ Uncertainty Sets

**Authors:** Ali Asadi; Krishnendu Chatterjee; Alipasha Montaseri; Ali Shafiee

**ID:** 149658 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oRGmtkHwly>) | [PDF](<https://openreview.net/pdf?id=oRGmtkHwly>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149658>)

A basic model in sequential decision making is the Markov decision process \(MDP\), which is extended to Robust MDPs \(RMDPs\) by allowing uncertainty in transition probabilities and optimizing against the worst\-case transition probabilities from the uncertainty sets\.      The class of $\(s,a\)$\-rectangular RMDPs with $L\_p$ uncertainty sets provides a flexible and expressive model for such problems\. We study this class of RMDPs with discounted\-sum objectives and a constant discount factor\.      The existence of an efficient algorithm for this class is a fundamental theoretical question in optimization and sequential decision making\.     Previous results only establish a strongly polynomial\-time algorithm for $L\_\\infty$ uncertainty sets\.     In this work, our main results are as follows:    \(a\) we show that for any compact uncertainty set, the policy iteration algorithm for RMDPs is strongly polynomial with oracle access to solutions of Robust Markov chains \(RMCs\);    \(b\) we present strongly polynomial\-time bounds on the policy iteration algorithm for RMCs with $L\_1$ and $L\_\\infty$ uncertainty sets; and     \(c\) we establish hardness results for RMCs with $L\_p$ uncertainty sets for integer $p$ satisfying $1&lt;p&lt;\\infty$\.    Finally, motivated by our theoretical bounds, we present experimental results showing the practical efficiency of policy iteration for RMDPs with $L\_1, L\_\\infty$ uncertainty sets\.

## ESSAM: A Novel Competitive Evolution Strategies Approach to Reinforcement Learning for Memory Efficient LLMs Fine\-Tuning

**Authors:** Zhishen Sun; Sizhe Dang; Guang Dai; Haishan Ye

**ID:** 154196 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FU76df5Sqr>) | [PDF](<https://openreview.net/pdf?id=FU76df5Sqr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154196>)

Reinforcement learning \(RL\) has become a key training step for improving mathematical reasoning in large language models \(LLMs\), but it often has high GPU memory usage, which makes it hard to use in settings with limited resources\. To reduce these issues, we propose Evolution Strategies with Sharpness\-Aware Maximization \(ESSAM\), a full parameter fine\-tuning framework that tightly combines the zeroth\-order search in parameter space from Evolution Strategies \(ES\) with the Sharpness\-Aware Maximization \(SAM\) to improve generalization\. We conduct fine\-tuning experiments on the mainstream mathematica reasoning task GSM8K\. The results show that ESSAM achieves an average accuracy of 78\.27\\% across all models and its overall performance is comparable to RL methods\. It surpasses classic RL algorithm PPO with an accuracy of 77\.72\\% and is comparable to GRPO with an accuracy of 78\.34\\%, and even surpassing them on some models\. Further generalization experiments show that the models trained with ESSAM exhibit stronger generalization ability\. Their average performance achieves the best results on 5 out of 6 datasets, indicating that ESSAM can effectively improve the generalization performance of fine\-tuned models\. In terms of GPU memory usage, ESSAM reduces the average GPU memory usage by $18\\times$ compared to PPO and by $10\\times$ compared to GRPO, achieving an extremely low GPU memory usage\. In addition, we design an accelerated variant of ESSAM, which achieves nearly a twofold speedup while maintaining the same GPU memory usage as ESSAM, and attains an average accuracy of 78\.02\\% across all models, outperforming PPO\. Code: https://anonymous\.4open\.science/r/ESSAM\-3F4F/

## From Anti\-Forgetting to Fast Adaptation: Continual Reinforcement Learning with World Models

**Authors:** Qiyang Zhou; Yuliang Cai; Peng Wang; Senquan Yi; Yanming Li; Haobo Fu; Li Shen

**ID:** 150468\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150468

[Paper](<https://openreview.net/forum?id=hoG3Hx7DHo>) | [PDF](<https://openreview.net/pdf?id=hoG3Hx7DHo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150468>)

Continual Reinforcement Learning \(CRL\) requires agents to adapt to sequentially arriving tasks while retaining performance on previous ones\. Most existing CRL methods rely on model\-free frameworks, addressing catastrophic forgetting via regularization, parameter isolation, or experience replay\. World models offer a promising alternative by accumulating transferable dynamics knowledge and enabling planning\-based decision\-making\. However, existing world model approaches suffer from slow adaptation at task boundaries: abrupt reward shifts mislead the planner, fixed planning horizons accumulate prediction errors when the dynamics model is unreliable, and quality\-agnostic replay dilutes training while exacerbating forgetting\. We propose HERD \(Horizon\-adaptive Elite Replay with reward Disagreement\), which addresses these challenges from two complementary perspectives: for $\\textbf\{\\emph\{how to learn\}\}$, Uncertainty\-aware Reward Planning leverages ensemble disagreement to accelerate reward calibration and guide exploration, while Adaptive Planning Horizon adjusts rollout depth based on dynamics prediction error to prevent error accumulation; for $\\textbf\{\\emph\{what to learn\}\}$, Elite Experience Replay applies quality\-stratified reweighting of historical trajectories to strengthen knowledge retention\. Together, these components $\\textbf\{\\emph\{accelerate new\-task adaptation and mitigate catastrophic forgetting\.\}\}$ Experiments on Continual World, Continual Bench, and DM Control show that HERD consistently outperforms existing methods in overall performance, forgetting mitigation, and new\-task adaptation\.

## The Laplacian Keyboard: Beyond the Linear Span

**Authors:** Siddarth Chandrasekar; Marlos C\. Machado

**ID:** 155777\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155777

[Paper](<https://openreview.net/forum?id=2xN81qKlwF>) | [PDF](<https://openreview.net/pdf?id=2xN81qKlwF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155777>)

Across scientific disciplines, Laplacian eigenvectors serve as a fundamental basis for simplifying complex systems, from signal processing to quantum mechanics\. In reinforcement learning \(RL\), they similarly form a basis over the state space, enabling reward functions to be approximated by projection onto a small set of eigenvectors\. This projection makes zero\-shot control possible, but it also imposes a fundamental limitation: the induced policies are only as expressive as the linear span of the chosen eigenvectors\. We introduce the Laplacian Keyboard \(LK\), a hierarchical framework that goes beyond this linear span\. LK constructs a task\-agnostic library of behaviors from these eigenvectors, forming a behavior basis guaranteed to contain the optimal policy for any reward within the linear span\. A meta\-policy learns to stitch these behaviors dynamically, enabling efficient learning of policies outside the original linear constraints\. We establish theoretical bounds on zero\-shot approximation error and demonstrate empirically that LK improves over the zero\-shot solution while achieving better sample efficiency compared to standard RL methods\.

## On the Token Value Inequality in Efficient Reasoning

**Authors:** Runjia Zeng; Hang Hua; Yiyang Liu; Zhiqiang Tao; Ruixiang Tang; Qifan Wang; Cheng Han; Dongfang Liu

**ID:** 150461\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150461

[Paper](<https://openreview.net/forum?id=hrWCDkWrpQ>) | [PDF](<https://openreview.net/pdf?id=hrWCDkWrpQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150461>)

Chain\-of\-Thought reasoning has enabled large language models to achieve substantial performance gains on complex tasks\. However, these gains come at the cost of dramatically increased token consumption\. This raises a fundamental question: is every token in the reasoning trace equally valuable? We present a diagnostic and optimization framework grounded in a key empirical finding: the value of tokens within a CoT reasoning sequence is highly non\-uniform, and this non\-uniformity can be effectively characterized by token\-level log probability signals\. We show that normalized log probability helps distinguish core tokens, which carry structural and decisive reasoning content, from redundant tokens, which are exploratory, low\-confidence filler that contributes less directly to the final answer\. Building on these findings, we formulate the TokenProbe framework around two empirical findings and one claim: findings identify token value inequality first and then establish TokenProbe as a core\-token proxy, and the claim introduces an efficient GRPO objective positing that selectively compressing redundant tokens can yield Pareto improvements in the accuracy–token efficiency space\. Empirically, our method preserves reasoning quality while reducing the token usage by 76% of the baseline\. Under matched reasoning\-length budgets, we show that it can even outperform strong flagship baselines like Gemini\-3\.1\-Pro\.

## SFT\-then\-RL Outperforms Mixed\-Policy Methods for LLM Reasoning

**Authors:** Alexis Limozin; Eduard F Ďurech; Torsten Hoefler; Imanol Schlag; Valentina Pyatkin

**ID:** 139026\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139026

[Paper](<https://openreview.net/forum?id=pWkCETOQnA>) | [PDF](<https://openreview.net/pdf?id=pWkCETOQnA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139026>)

Recent mixed\-policy optimization methods for LLM reasoning that interleave or blend supervised and reinforcement learning signals report improvements over the standard SFT\-then\-RL pipeline\. We show that numerous recently published research papers rely on a faulty baseline caused by two distinct bugs: a CPU\-offloaded optimizer bug in DeepSpeed that silently drops intermediate micro\-batches during gradient accumulation \(affecting multiple downstream frameworks including TRL, OpenRLHF and Llama\-Factory\), and a loss aggregation bug in OpenRLHF that incorrectly weights per\-mini\-batch losses\. Together they suppress SFT performance, with the optimizer bug accounting for most of the gap and the loss aggregation bug contributing a smaller additional effect\. Once corrected, the standard SFT\-then\-RL pipeline surpasses every published mixed\-policy method we evaluate by \+3\.8 points on math benchmarks with Qwen2\.5\-Math\-7B and by \+22\.2 points with Llama\-3\.1\-8B\. Even a truncated variant with just 50 RL steps outperforms mixed\-policy methods on math benchmarks while using fewer FLOPs\.

## The Post\-Training Dilemma: Why We Should Rethink the Sequential SFT\-RL Paradigm

**Authors:** Xueyan Niu; Bo Bai; Wei Han; Weixi Zhang

**ID:** 140043 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cFJUO84S9g>) | [PDF](<https://openreview.net/pdf?id=cFJUO84S9g>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140043>)

This position paper argues that the sequential supervised fine\-tuning followed by reinforcement learning \(SFT\-then\-RL\) pipeline\-\-\-the de facto paradigm for large language model \(LLM\) post\-training\-\-\-has a fundamental property that cannot be fixed by hyperparameter tuning: SFT and RL optimize over nearly orthogonal parameter subspaces, so RL inevitably degrades the capabilities acquired during the preceding SFT phase\. Under the PL condition, we show that this degradation scales linearly with the number of model parameters\. Although the KL penalty can constrain distributional shift, it cannot correct the underlying gradient misalignment between the two objectives\. Experiments on Qwen3\-0\.6B across four tasks confirm the theoretical predictions: on MATH\-500, Alpaca, HH\-RLHF, and SST\-2, the SFT loss increases after the RL phase\. We identify the underlying mechanism as persistent near\-orthogonality between the gradients of the two objectives \(   $\\cos\(g\_\\mathrm\{SFT\}, g\_\\mathrm\{RL\}\) \\approx 0$\), paired with opposing curvature dynamics: SFT flattens the loss landscape while RL re\-sharpens it\. Based on our analysis, we propose three promising research directions: \(1\) joint optimization of the two objectives with gradient surgery to resolve conflicting updates; \(2\) landscape\-aware scheduling that terminates RL training precisely at the theoretically optimal point; and \(3\) characterizing the model scale threshold above which SFT becomes unnecessary\.

## Stabilizing Knowledge, Promoting Reasoning: Dual\-Token Constraints for RLVR

**Authors:** Jiakang Wang; Runze Liu; Fuzheng Zhang; Xiu Li; Guorui Zhou; Kun Gai; Ling Pan

**ID:** 151790\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151790

[Paper](<https://openreview.net/forum?id=XzRoRbdbXp>) | [PDF](<https://openreview.net/pdf?id=XzRoRbdbXp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151790>)

Reinforcement Learning with Verifiable Rewards \(RLVR\) has become an effective post\-training method for improving the reasoning abilities of Large Language Models \(LLMs\)\. However, existing methods mainly apply uniform optimization constraints across all tokens, ignoring their heterogeneous roles\. Prior work shows that high\-entropy tokens are closely tied to reasoning, while low\-entropy tokens primarily encode factual knowledge, and recent approaches attempt to exploit this distinction by isolating token updates via masking or asynchronous training\. We argue that such isolation breaks the sequential dependency structure of autoregressive generation, leading to suboptimal learning\. To address this, we propose \\textbf\{Archer\}, an entropy\-aware RLVR framework with \\textbf\{dual\-token constraints\} that preserves joint optimization while modulating update strength across token types\. Our method introduces response\-level entropy normalization for stable token classification and applies differentiated clipping ranges and KL regularization to encourage exploration on reasoning tokens while preserving knowledge tokens\. Experiments on mathematical reasoning and code generation benchmarks show that Archer consistently outperforms strong baselines across multiple model scales, improving both \\textit\{pass@1\} and \\textit\{pass@K\} performance\. These results highlight the importance of respecting sequence\-level dependencies when designing fine\-grained RL optimization strategies for LLMs\.

## When Dynamics Shift, Robust Task Inference Wins: Offline Imitation Learning with Behavior Foundation Models Revisited

**Authors:** Rishabh Agrawal; Rahul Jain; Ashutosh Nayyar

**ID:** 148762\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148762

[Paper](<https://openreview.net/forum?id=vFC88YZZSH>) | [PDF](<https://openreview.net/pdf?id=vFC88YZZSH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148762>)

Behavior Foundation Models \(BFMs\) enable scalable imitation learning \(IL\) by pretraining task\-agnostic representations that can be rapidly adapted to new tasks\. However, existing BFMs assume fixed environment dynamics, limiting their robustness under real\-world shifts such as changes in friction, actuation, or sensor noise\. We address this by formulating BFM task\-inference as a robust minimax optimization problem, enabling adaptation to worst\-case dynamics perturbations without modifying pretraining\. To the best of our knowledge, this is the first BFM\-based framework that achieves robustness to dynamics shifts while relying solely on offline data from a single nominal environment\. Our approach significantly outperforms standard BFM and robust offline IL baselines under dynamics shifts\. These results demonstrate that robust policy can be achieved entirely at task\-inference time, improving the practicality of BFMs in dynamic settings\.

## Planning as Dynamics Relaxation: Hippocampal Recurrent Network Realizes Optimal Goal\-Directed Navigation

**Authors:** 宇航 他; Junfeng Zuo; Tianhao Chu; Si Wu

**ID:** 150211\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150211

[Paper](<https://openreview.net/forum?id=juTALxlaPs>) | [PDF](<https://openreview.net/pdf?id=juTALxlaPs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150211>)

Neural correlates of spatial cognitive map are well documented, yet exactly how neural circuits perform spatial navigation in complex environments — e\.g\., reaching a goal while avoiding obstacles — remains largely unclear\. Here, we show that a hippocampal network with appropriate recurrent connections can naturally achieve optimal goal\-directed navigation via its relaxation dynamics\. Specifically, we consider that the recurrent weights between the neurons represent the transition probabilities between spatial locations encoded by neurons; obstacles such as walls and blocked corridors are therefore reflected by the vanishing of connection weights\. This connection pattern can be learned in the hippocampus via behavioral\-timescale synaptic plasticity \(BTSP\)  while the animal is exploring the environment\. When a goal signal is presented, the network dynamics will relax into an activity field representing the goal location\. We prove that this field is mathematically equivalent to the desirability field of a Linearly\-solvable Markov Decision Process \(LMDP\), and the local log\-gradient of the field indicates the navigation direction\. Both theoretical analyses and simulations demonstrate that this recurrent network dynamics\-mediated navigation is efficient and robust in environments with complex obstacle layouts\. Moreover, only low\-rank updates of the network's connection pattern are needed when the environment has local changes\. We hope this study offers insight into a general circuit principle for planning in abstract rational maps in the brain beyond spatial navigation\.

## Plan2Sense: Open\-World Task Planning in Epistemic States via Interleaved Ontic and Sensing Actions

**Authors:** Xiaotian Liu; Armin Toroghi; Jiazhou Liang; Ali Pesaranghader; Scott Sanner

**ID:** 150699\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150699

[Paper](<https://openreview.net/forum?id=g9ZhljQuww>) | [PDF](<https://openreview.net/pdf?id=g9ZhljQuww>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150699>)

Open\-world task planning requires not only generating feasible plans but also acquiring the knowledge needed to execute them\. Existing task planners for egocentric agents either attempt to exhaustively gather information from the environment or generate plans under prior assumptions of the world and replan as new observations arrive\. Both strategies are impractical in complex environments and can potentially expose agents to undesirable or unsafe situations\. To enable effective planning in open\-world settings, we propose Plan2Sense, a framework that grounds planning in the agent’s epistemic state to determine what information is required for plan feasibility and how to acquire it\. We formalize decision\-making as a three\-valued first\-order Knowledge\-State Markov Decision Process \(KS\-MDP\) and develop a knowledge state goal regression algorithm KSR to construct sensing\-aware conditional plans in the open\-world setting\. Our formulation supports sensing actions for both predicate disambiguation and knowledge acquisition via object binding without assuming a fully known initial state or a closed set of predefined objects\. Across three open\-world egocentric benchmarks requiring active knowledge acquisition, \\textsc\{Plan2Sense\} achieves higher success rates and improved efficiency over existing baselines while consistently avoiding undesirable and potentially unsafe states\.

## DORA: A Scalable Asynchronous Reinforcement Learning System for Language Model Training

**Authors:** Tianhao Hu; Xiangcheng Liu; Yuchun Miao; Youshao Xiao; Hong Yu Zang; Yang Zheng; huang xuan; Jinrui Ding; Yufei Zhang; Yu Yang; Yi\-Kai Zhang; Yueqing Sun; Chengcheng Han; Xiandi Ma; Wei Wang; Qi GU; Yerui Sun; Yuchen Xie; Xunliang Cai

**ID:** 154440 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DXbHLaGcFU>) | [PDF](<https://openreview.net/pdf?id=DXbHLaGcFU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154440>)

_Abstract unavailable from the accessible public sources._

## From POMDP Theory to Deep RL with Particle Filters

**Authors:** Kevin Tan; Ziping Xu

**ID:** 151710\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151710

[Paper](<https://openreview.net/forum?id=YcveAbhXYA>) | [PDF](<https://openreview.net/pdf?id=YcveAbhXYA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151710>)

_Abstract unavailable from the accessible public sources._

## Two\-Fidelity Best\-Action Identification for Stochastic Minimax Tree

**Authors:** Peter Chen; Xi Chen

**ID:** 151717\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151717

[Paper](<https://openreview.net/forum?id=YbPKvD833D>) | [PDF](<https://openreview.net/pdf?id=YbPKvD833D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151717>)

We study fixed\-confidence best\-action identification \(BAI\) in stochastic minimax trees\. This problem is increasingly relevant in modern AI planning, where deep minimax search and Monte Carlo Tree Search \(MCTS\) with language model long rollouts face a fundamental tradeoff: heuristic evaluations are cheap but biased, while accurate rollouts are reliable but prohibitively expensive\.  We propose 2FFS, a two\-fidelity tree\-search algorithm that brings multi\-fidelity flat bandit ideas into trees\. The algorithm combines minimax\-style fast expansion with MCTS\-style stochastic sampling, adaptively deciding when to exploit cheap biased evaluations and when to invoke expensive accurate evaluations for local certification\. We prove fixed\-confidence correctness, establish finite stopping for exact identification, and give a polynomial\-depth cost upper bound for general\-depth trees\. Across numerical stochastic\-tree experiments, 2FFS uses substantially fewer samples and computational operations comparing to existing BAI\-MCTS baseline\.

## TIER: Trajectory\-Invariant Execution Rewards for Multi\-Step Tool Composition

**Authors:** Anay Kulkarni; Allen Lu; Dheeraj Mekala; Jayanth Srinivasa; Gaowen Liu; Jingbo Shang

**ID:** 154119\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154119

[Paper](<https://openreview.net/forum?id=G82YnmxBx8>) | [PDF](<https://openreview.net/pdf?id=G82YnmxBx8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154119>)

Tool use enables large language models to solve complex tasks through sequences of API calls, yet existing reinforcement learning approaches fail to scale to multi\-step composition settings\. Outcome\-based rewards provide only sparse feedback, while trajectory\-supervised rewards depend on annotated reference solutions, penalizing valid alternatives and limiting scalability\. We propose TIER: Trajectory\-Invariant Execution Rewards, a reward framework that derives supervision directly from function schemas and runtime execution, rather than from reference trajectories\. The reward decomposes into format validity, schema adherence, execution success, and answer correctness, providing dense, interpretable sequence\-level feedback derived from fine\-grained verification of individual steps of tool use\. This design allows any valid execution path to receive credit, naturally supporting multiple solution strategies and adapting to evolving tool interfaces\. On DepthBench, a compositional benchmark stratified by depth \(1 to 6 steps\), TIER achieves &gt;90% accuracy across steps, where trajectory\-supervised rewards collapse beyond step\-4\. We further demonstrate consistent gains on benchmarks like BFCL v3 and NestFUL\. Ablation studies confirm that all reward components are necessary, highlighting the importance of multi\-level supervision for compositional reasoning\.

## From Anti\-Forgetting to Fast Adaptation: Continual Reinforcement Learning with World Models

**Authors:** Qiyang Zhou; Yuliang Cai; Peng Wang; Senquan Yi; Yanming Li; Haobo Fu; Li Shen

**ID:** 150468\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150468

[Paper](<https://openreview.net/forum?id=hoG3Hx7DHo>) | [PDF](<https://openreview.net/pdf?id=hoG3Hx7DHo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150468>)

Continual Reinforcement Learning \(CRL\) requires agents to adapt to sequentially arriving tasks while retaining performance on previous ones\. Most existing CRL methods rely on model\-free frameworks, addressing catastrophic forgetting via regularization, parameter isolation, or experience replay\. World models offer a promising alternative by accumulating transferable dynamics knowledge and enabling planning\-based decision\-making\. However, existing world model approaches suffer from slow adaptation at task boundaries: abrupt reward shifts mislead the planner, fixed planning horizons accumulate prediction errors when the dynamics model is unreliable, and quality\-agnostic replay dilutes training while exacerbating forgetting\. We propose HERD \(Horizon\-adaptive Elite Replay with reward Disagreement\), which addresses these challenges from two complementary perspectives: for $\\textbf\{\\emph\{how to learn\}\}$, Uncertainty\-aware Reward Planning leverages ensemble disagreement to accelerate reward calibration and guide exploration, while Adaptive Planning Horizon adjusts rollout depth based on dynamics prediction error to prevent error accumulation; for $\\textbf\{\\emph\{what to learn\}\}$, Elite Experience Replay applies quality\-stratified reweighting of historical trajectories to strengthen knowledge retention\. Together, these components $\\textbf\{\\emph\{accelerate new\-task adaptation and mitigate catastrophic forgetting\.\}\}$ Experiments on Continual World, Continual Bench, and DM Control show that HERD consistently outperforms existing methods in overall performance, forgetting mitigation, and new\-task adaptation\.

## Split\-RL: Local Conflict Resolution in Reinforcement Learning

**Authors:** Benjamin Fuhrer; Chen Tessler; Gal Dalal

**ID:** 152641 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RUIN0YgMdQ>) | [PDF](<https://openreview.net/pdf?id=RUIN0YgMdQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152641>)

_Abstract unavailable from the accessible public sources._

## SEAR: Sample Efficient Action Chunking Reinforcement Learning

**Authors:** C F Maximilian Nagy; Onur Celik; Emiliyan Gospodinov; Florian Seligmann; Weiran Liao; Aryan Kaushik; Gerhard Neumann

**ID:** 151301 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bTE6KrCVKn>) | [PDF](<https://openreview.net/pdf?id=bTE6KrCVKn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151301>)

Action chunking improves exploration and accelerates value propagation in long\-horizon reinforcement learning, but naively applying off\-policy methods to the temporally extended action space at reduced decision frequency offsets these gains, leading to poor sample efficiency\. Existing action chunking methods address these issues through computationally expensive critic\-only approaches or by relying on offline data\. We introduce SEAR, a sample\-efficient off\-policy algorithm that enables online reinforcement learning with action chunks by addressing both challenges\. To handle high\-dimensional action sequences, SEAR employs a causal transformer critic trained with multi\-horizon targets that provide a training signal for every prefix of an action chunk, effectively increasing the useful gradients per sample\. To restore decision frequency, SEAR operates with a receding horizon and random replanning, ensuring uniform state coverage while combining the fast value propagation of large chunks with the reactivity of small ones\. SEAR outperforms state\-of\-the\-art online reinforcement learning methods including SimbaV2 on challenging Metaworld manipulation tasks\. Beyond online RL, applying SEAR to the offline\-to\-online method QC improves its performance on the demanding OGBench cube\-triple tasks\.

## Towards Optimal Pre\-training Data Mixtures for Empowering Reinforcement Learning in LLMs

**Authors:** Xue Han; Qian Hu; Yitong Wang; WenChun Gao; Lianlian Zhang; Qing Wang; Lijun Mei; Zhaoxuefeng; Junlan Feng

**ID:** 152676 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RFyOhPRUnL>) | [PDF](<https://openreview.net/pdf?id=RFyOhPRUnL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152676>)

Optimal pre\-training data mixtures are vital for Large Language Models \(LLMs\), yet post\-RL reasoning performance varies significantly across base models\. This suggests that identifying "RL\-friendly" pre\-training data mixtures is a critical but under\-explored prerequisite\. This motivates us to ask: Which specific data mixtures in pre\-training enhance post\-RL effectiveness, and how can we evaluate a base model's suitability for RL fine\-tuning? Through large\-scale experiments with proxy models, we observe that \(1\) domain\-specific data correlation strongly predicts post\-RL performance, and \(2\) the average perplexity of the base model on $k$ RL\-generated responses, $\\text\{avg\}\(k\\text\{\-ppl\}\)$, is a more stable and correlated predictor than traditional metrics\. Building on these insights, we propose BridgeRL, a framework that treats finding optimal mixing ratios as a regression task, using $\\text\{avg\}\(k\\text\{\-ppl\}\)$ as the fitting objective\. We train 1M/60M\-parameter proxy models for regression and scale the findings to 1B/3B\-parameter models\. Results across online and offline RL algorithms demonstrate that BridgeRL\-optimized mixtures consistently yield superior base models for RL fine\-tuning\.

## Two\-Sided Learning in Matching Markets with Interviews

**Authors:** Amirmahdi Mirfakhar; Xuchuang Wang; Mengfan Xu; Hedyeh Beyhaghi; Mohammad Hajiesmaili

**ID:** 154403 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DqHt1Uj0DI>) | [PDF](<https://openreview.net/pdf?id=DqHt1Uj0DI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154403>)

Two\-sided matching platforms rely on preferences from both sides, yet participants can evaluate only a small fraction of potential partners\. In practice, they use low\-cost pre\-match screening,  e\.g\., interviews, profile views, or trial tasks, to form noisy impressions before committing to applications and offers\. We study bandit learning in matching markets with interviews, modeling these interactions as queried \*hints\* \[Bhaskara et al\., 2022\] that reveal partial preference information to both sides while constraining subsequent applications\. Our framework also allows firm\-side uncertainty: firms, like agents, learn their preferences and may make early hiring mistakes\. To address this, we introduce strategic deferral, a firm\-side action that permits temporary vacancy, corrects premature commitments, and enables decentralized learning under coarse anonymous feedback\. We design algorithms for centralized and decentralized markets and show that a constant number of interviews per round suffices for horizon\-independent regret, improving over the $O\(\\log T\)$ guarantees known without interviews\. Our bounds are near\-optimal: the centralized guarantee is within a factor $m$ of an information\-theoretic lower bound, while decentralized algorithms match it up to polynomial factors in structured markets and remain horizon\-independent in general markets\.

## TIER: Trajectory\-Invariant Execution Rewards for Multi\-Step Tool Composition

**Authors:** Anay Kulkarni; Allen Lu; Dheeraj Mekala; Jayanth Srinivasa; Gaowen Liu; Jingbo Shang

**ID:** 154119\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154119

[Paper](<https://openreview.net/forum?id=G82YnmxBx8>) | [PDF](<https://openreview.net/pdf?id=G82YnmxBx8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154119>)

Tool use enables large language models to solve complex tasks through sequences of API calls, yet existing reinforcement learning approaches fail to scale to multi\-step composition settings\. Outcome\-based rewards provide only sparse feedback, while trajectory\-supervised rewards depend on annotated reference solutions, penalizing valid alternatives and limiting scalability\. We propose TIER: Trajectory\-Invariant Execution Rewards, a reward framework that derives supervision directly from function schemas and runtime execution, rather than from reference trajectories\. The reward decomposes into format validity, schema adherence, execution success, and answer correctness, providing dense, interpretable sequence\-level feedback derived from fine\-grained verification of individual steps of tool use\. This design allows any valid execution path to receive credit, naturally supporting multiple solution strategies and adapting to evolving tool interfaces\. On DepthBench, a compositional benchmark stratified by depth \(1 to 6 steps\), TIER achieves &gt;90% accuracy across steps, where trajectory\-supervised rewards collapse beyond step\-4\. We further demonstrate consistent gains on benchmarks like BFCL v3 and NestFUL\. Ablation studies confirm that all reward components are necessary, highlighting the importance of multi\-level supervision for compositional reasoning\.

## From Anti\-Forgetting to Fast Adaptation: Continual Reinforcement Learning with World Models

**Authors:** Qiyang Zhou; Yuliang Cai; Peng Wang; Senquan Yi; Yanming Li; Haobo Fu; Li Shen

**ID:** 150468\-\-4 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150468

[Paper](<https://openreview.net/forum?id=hoG3Hx7DHo>) | [PDF](<https://openreview.net/pdf?id=hoG3Hx7DHo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150468>)

Continual Reinforcement Learning \(CRL\) requires agents to adapt to sequentially arriving tasks while retaining performance on previous ones\. Most existing CRL methods rely on model\-free frameworks, addressing catastrophic forgetting via regularization, parameter isolation, or experience replay\. World models offer a promising alternative by accumulating transferable dynamics knowledge and enabling planning\-based decision\-making\. However, existing world model approaches suffer from slow adaptation at task boundaries: abrupt reward shifts mislead the planner, fixed planning horizons accumulate prediction errors when the dynamics model is unreliable, and quality\-agnostic replay dilutes training while exacerbating forgetting\. We propose HERD \(Horizon\-adaptive Elite Replay with reward Disagreement\), which addresses these challenges from two complementary perspectives: for $\\textbf\{\\emph\{how to learn\}\}$, Uncertainty\-aware Reward Planning leverages ensemble disagreement to accelerate reward calibration and guide exploration, while Adaptive Planning Horizon adjusts rollout depth based on dynamics prediction error to prevent error accumulation; for $\\textbf\{\\emph\{what to learn\}\}$, Elite Experience Replay applies quality\-stratified reweighting of historical trajectories to strengthen knowledge retention\. Together, these components $\\textbf\{\\emph\{accelerate new\-task adaptation and mitigate catastrophic forgetting\.\}\}$ Experiments on Continual World, Continual Bench, and DM Control show that HERD consistently outperforms existing methods in overall performance, forgetting mitigation, and new\-task adaptation\.

## The Laplacian Keyboard: Beyond the Linear Span

**Authors:** Siddarth Chandrasekar; Marlos C\. Machado

**ID:** 155777\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155777

[Paper](<https://openreview.net/forum?id=2xN81qKlwF>) | [PDF](<https://openreview.net/pdf?id=2xN81qKlwF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155777>)

Across scientific disciplines, Laplacian eigenvectors serve as a fundamental basis for simplifying complex systems, from signal processing to quantum mechanics\. In reinforcement learning \(RL\), they similarly form a basis over the state space, enabling reward functions to be approximated by projection onto a small set of eigenvectors\. This projection makes zero\-shot control possible, but it also imposes a fundamental limitation: the induced policies are only as expressive as the linear span of the chosen eigenvectors\. We introduce the Laplacian Keyboard \(LK\), a hierarchical framework that goes beyond this linear span\. LK constructs a task\-agnostic library of behaviors from these eigenvectors, forming a behavior basis guaranteed to contain the optimal policy for any reward within the linear span\. A meta\-policy learns to stitch these behaviors dynamically, enabling efficient learning of policies outside the original linear constraints\. We establish theoretical bounds on zero\-shot approximation error and demonstrate empirically that LK improves over the zero\-shot solution while achieving better sample efficiency compared to standard RL methods\.

## On the Token Value Inequality in Efficient Reasoning

**Authors:** Runjia Zeng; Hang Hua; Yiyang Liu; Zhiqiang Tao; Ruixiang Tang; Qifan Wang; Cheng Han; Dongfang Liu

**ID:** 150461\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150461

[Paper](<https://openreview.net/forum?id=hrWCDkWrpQ>) | [PDF](<https://openreview.net/pdf?id=hrWCDkWrpQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150461>)

Chain\-of\-Thought reasoning has enabled large language models to achieve substantial performance gains on complex tasks\. However, these gains come at the cost of dramatically increased token consumption\. This raises a fundamental question: is every token in the reasoning trace equally valuable? We present a diagnostic and optimization framework grounded in a key empirical finding: the value of tokens within a CoT reasoning sequence is highly non\-uniform, and this non\-uniformity can be effectively characterized by token\-level log probability signals\. We show that normalized log probability helps distinguish core tokens, which carry structural and decisive reasoning content, from redundant tokens, which are exploratory, low\-confidence filler that contributes less directly to the final answer\. Building on these findings, we formulate the TokenProbe framework around two empirical findings and one claim: findings identify token value inequality first and then establish TokenProbe as a core\-token proxy, and the claim introduces an efficient GRPO objective positing that selectively compressing redundant tokens can yield Pareto improvements in the accuracy–token efficiency space\. Empirically, our method preserves reasoning quality while reducing the token usage by 76% of the baseline\. Under matched reasoning\-length budgets, we show that it can even outperform strong flagship baselines like Gemini\-3\.1\-Pro\.

## SFT\-then\-RL Outperforms Mixed\-Policy Methods for LLM Reasoning

**Authors:** Alexis Limozin; Eduard F Ďurech; Torsten Hoefler; Imanol Schlag; Valentina Pyatkin

**ID:** 139026\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139026

[Paper](<https://openreview.net/forum?id=pWkCETOQnA>) | [PDF](<https://openreview.net/pdf?id=pWkCETOQnA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139026>)

Recent mixed\-policy optimization methods for LLM reasoning that interleave or blend supervised and reinforcement learning signals report improvements over the standard SFT\-then\-RL pipeline\. We show that numerous recently published research papers rely on a faulty baseline caused by two distinct bugs: a CPU\-offloaded optimizer bug in DeepSpeed that silently drops intermediate micro\-batches during gradient accumulation \(affecting multiple downstream frameworks including TRL, OpenRLHF and Llama\-Factory\), and a loss aggregation bug in OpenRLHF that incorrectly weights per\-mini\-batch losses\. Together they suppress SFT performance, with the optimizer bug accounting for most of the gap and the loss aggregation bug contributing a smaller additional effect\. Once corrected, the standard SFT\-then\-RL pipeline surpasses every published mixed\-policy method we evaluate by \+3\.8 points on math benchmarks with Qwen2\.5\-Math\-7B and by \+22\.2 points with Llama\-3\.1\-8B\. Even a truncated variant with just 50 RL steps outperforms mixed\-policy methods on math benchmarks while using fewer FLOPs\.

## The Post\-Training Dilemma: Why We Should Rethink the Sequential SFT\-RL Paradigm

**Authors:** Xueyan Niu; Bo Bai; Wei Han; Weixi Zhang

**ID:** 140043\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 140043

[Paper](<https://openreview.net/forum?id=cFJUO84S9g>) | [PDF](<https://openreview.net/pdf?id=cFJUO84S9g>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140043>)

This position paper argues that the sequential supervised fine\-tuning followed by reinforcement learning \(SFT\-then\-RL\) pipeline\-\-\-the de facto paradigm for large language model \(LLM\) post\-training\-\-\-has a fundamental property that cannot be fixed by hyperparameter tuning: SFT and RL optimize over nearly orthogonal parameter subspaces, so RL inevitably degrades the capabilities acquired during the preceding SFT phase\. Under the PL condition, we show that this degradation scales linearly with the number of model parameters\. Although the KL penalty can constrain distributional shift, it cannot correct the underlying gradient misalignment between the two objectives\. Experiments on Qwen3\-0\.6B across four tasks confirm the theoretical predictions: on MATH\-500, Alpaca, HH\-RLHF, and SST\-2, the SFT loss increases after the RL phase\. We identify the underlying mechanism as persistent near\-orthogonality between the gradients of the two objectives \(   $\\cos\(g\_\\mathrm\{SFT\}, g\_\\mathrm\{RL\}\) \\approx 0$\), paired with opposing curvature dynamics: SFT flattens the loss landscape while RL re\-sharpens it\. Based on our analysis, we propose three promising research directions: \(1\) joint optimization of the two objectives with gradient surgery to resolve conflicting updates; \(2\) landscape\-aware scheduling that terminates RL training precisely at the theoretically optimal point; and \(3\) characterizing the model scale threshold above which SFT becomes unnecessary\.

## Pessimistic Latent Task\-aware Optimization for Robust Offline Meta\-Reinforcement Learning

**Authors:** Chang\-Hoon Jeong; Kisung Shin; Hanwool Sul; Byoung\-Tak Zhang

**ID:** 151379\-\-4 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151379

[Paper](<https://openreview.net/forum?id=b2o4Aci1XF>) | [PDF](<https://openreview.net/pdf?id=b2o4Aci1XF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151379>)

Context\-based offline meta\-reinforcement learning \(COMRL\) has progressed almost entirely through better task representations: separating task identity from behavior\-policy artifacts so that the latent reflects the task information alone\. The implicit expectation has been that a clean representation will transfer to out\-of\-distribution \(OOD\) tasks\. However, on an OOD task the encoder produces a latent outside the training support, where the policy has never been trained\. We address this gap with Pessimistic Latent Task\-aware Optimization \(PLATO\), which exposes the policy to off\-support latents at training time\. PLATO assumes a mild manifold hypothesis: task latents lie on a low\-dimensional manifold, with OOD tasks further from the training centroid\. It exploits this geometry by perturbing inferred latents outward from the centroid to synthesize counterfactual tasks; a learned decoder ensemble then rolls out short trajectories at the perturbed latent, and the policy is updated on the imagined transitions under a pessimism weight that down\-weights steps where the ensemble is unconfident\. We prove that the perturbation reaches off\-support by a controllable margin, that the epistemic disagreement at the perturbed latent is non\-vanishing, and that the OOD generalization gap is bounded by the same perturbation reach\. On eight MuJoCo continuous\-control benchmarks, PLATO consistently improves out\-of\-distribution returns over strong COMRL baselines while remaining competitive in\-distribution\.

## ToolSearcher: Optimizing Tool Selection at Scale via Reinforcement Learning

**Authors:** Zhenlong Dai; Xujie Song; Zitong Wang; Tong Niu; Jian liu; Weiqiang Wang; Xiu Tang; Sai Wu; Chang Yao; Jingyuan Chen

**ID:** 154349\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154349

[Paper](<https://openreview.net/forum?id=EFnOrwjviv>) | [PDF](<https://openreview.net/pdf?id=EFnOrwjviv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154349>)

Large language models \(LLMs\) excel at natural language processing but struggle to interact with external environments\.  Tool learning provides a promising way to extend LLMs into actionable agents, where tool selection is a critical prerequisite for successful tool use\. Existing work often assumes a small or predefined set of tools, leaving large\-scale tool selection underexplored\.  Real\-world repositories contain a vast and diverse array of tools, making it difficult for LLMs to effectively search, distinguish, and compose tools under context\-length constraints\. We identify large\-scale tool selection as a new challenge for agentic reinforcement learning, highlighting that existing RL methods for knowledge\-based question answering are inadequate for selecting tools while considering compatibility\. To address this challenge, we propose ToolSearcher, a novel RL framework for effective multi\-turn search and fine\-grained optimization in large\-scale tool selection\. Specifically, we introduce category\-constrained tool discrimination to improve the model's ability to distinguish functionally similar tools, event\-level search modeling to explicitly optimize the discovery of target tools during multi\-turn search, and trajectory\-aligned credit allocation to provide fine\-grained reward signals for different stages of the search\-selection process\. Extensive experiments on large\-scale tool selection benchmarks demonstrate that ToolSearcher consistently outperforms a set of strong baselines in challenging settings involving iterative search and complex tool composition\.

## Plan2Sense: Open\-World Task Planning in Epistemic States via Interleaved Ontic and Sensing Actions

**Authors:** Xiaotian Liu; Armin Toroghi; Jiazhou Liang; Ali Pesaranghader; Scott Sanner

**ID:** 150699\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150699

[Paper](<https://openreview.net/forum?id=g9ZhljQuww>) | [PDF](<https://openreview.net/pdf?id=g9ZhljQuww>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150699>)

Open\-world task planning requires not only generating feasible plans but also acquiring the knowledge needed to execute them\. Existing task planners for egocentric agents either attempt to exhaustively gather information from the environment or generate plans under prior assumptions of the world and replan as new observations arrive\. Both strategies are impractical in complex environments and can potentially expose agents to undesirable or unsafe situations\. To enable effective planning in open\-world settings, we propose Plan2Sense, a framework that grounds planning in the agent’s epistemic state to determine what information is required for plan feasibility and how to acquire it\. We formalize decision\-making as a three\-valued first\-order Knowledge\-State Markov Decision Process \(KS\-MDP\) and develop a knowledge state goal regression algorithm KSR to construct sensing\-aware conditional plans in the open\-world setting\. Our formulation supports sensing actions for both predicate disambiguation and knowledge acquisition via object binding without assuming a fully known initial state or a closed set of predefined objects\. Across three open\-world egocentric benchmarks requiring active knowledge acquisition, \\textsc\{Plan2Sense\} achieves higher success rates and improved efficiency over existing baselines while consistently avoiding undesirable and potentially unsafe states\.

## DORA: A Scalable Asynchronous Reinforcement Learning System for Language Model Training

**Authors:** Tianhao Hu; Xiangcheng Liu; Yuchun Miao; Youshao Xiao; Hong Yu Zang; Yang Zheng; huang xuan; Jinrui Ding; Yufei Zhang; Yu Yang; Yi\-Kai Zhang; Yueqing Sun; Chengcheng Han; Xiandi Ma; Wei Wang; Qi GU; Yerui Sun; Yuchen Xie; Xunliang Cai

**ID:** 154440\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154440

[Paper](<https://openreview.net/forum?id=DXbHLaGcFU>) | [PDF](<https://openreview.net/pdf?id=DXbHLaGcFU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154440>)

_Abstract unavailable from the accessible public sources._

## Learning Where It Matters: Geometric Anchoring for Robust Preference Alignment

**Authors:** Youngjae Cho; Jongsuk Kim; Ji\-Hoon Kim

**ID:** 153014 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ockny0oU9m>) | [PDF](<https://openreview.net/pdf?id=Ockny0oU9m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153014>)

Preference optimization aligns large language models from pairwise preferences by increasing the margin between preferred and dispreferred responses\. However, margin\-based losses alone do not test whether each pair's preference signal is locally stable enough to trust with full update strength\. We propose Geometric Anchor Preference Optimization \(GAPO\), a geometry\-aware objective that introduces a batch\-conditioned stress test for preference learning\. For each mini\-batch, GAPO constructs a pessimistic anchor by perturbing the current policy in the first\-order direction that decreases the batch\-average preference margin\. The resulting Anchor Gap measures how much each pair's margin degrades under this shared pessimistic probe and converts this degradation into an instance\-wise update weight\. Pairs with larger Anchor Gap receive smaller update weights, while non\-brittle pairs retain their preference\-gradient direction\. Under smoothness assumptions, we characterize the Anchor Gap as a batch\-directional proxy for local margin degradation\. Across multiple open\-weight model families, GAPO matches or improves strong preference\-optimization baselines on instruction\-following and reasoning benchmarks\. It also improves robustness under random and structured preference noise without explicitly modeling label corruption\. Mechanistic diagnostics show that the pairs receiving the smallest GAPO weights are statistically enriched in corrupted supervision, suggesting that GAPO improves robustness by reducing the cumulative influence of brittle preference signals\.

## LADDERS: Length\-Aware Data Distribution and Existing\-Response Speculation for Fast RL Rollout Generation

**Authors:** Shengpeng Yin; Hui\-Ling Zhen; Xing Li; Mingxuan Yuan; Zishuo Wang; Yuxin Peng

**ID:** 148499 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xMa3rFEald>) | [PDF](<https://openreview.net/pdf?id=xMa3rFEald>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148499>)

Reinforcement learning \(RL\) has become central to post\-training large language models, but its rollout generation stage is often the dominant system bottleneck\. The inefficiency comes from two sources\. First, autoregressive decoding makes latency grow with response length\. Second, response lengths vary widely within a batch: short sequences finish early, but the batch remains blocked by the longest sequence, leaving GPU capacity underutilized\. This effect is amplified in multi\-sample rollouts, where long responses can also concentrate on a few decoding workers and delay synchronization\. We propose LADDERS \(Length\-Aware Data Distribution and Existing\-Response Speculation\), a lightweight framework for accelerating RL rollout generation\. LADDERS first uses hidden\-state\-based length prediction to group prompts with similar expected response lengths, and then applies an S\-shaped allocation rule to balance multi\-sample requests across workers\. It further reuses responses already generated by the policy as draft continuations through prompt\-specific suffix trees, enabling speculative decoding without an auxiliary draft model\. Experiments on Qwen3\-1\.7B and Qwen3\-8B show that LADDERS reduces rollout generation time by up to 56% while preserving final task performance, and can be integrated into existing RL systems with minimal engineering effort\.

## Action Chunking Proximal Policy Optimization with Feedback Correction

**Authors:** Sanghyun Hahn; Jonghyun Choi

**ID:** 154625\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154625

[Paper](<https://openreview.net/forum?id=CBSS9HNaVp>) | [PDF](<https://openreview.net/pdf?id=CBSS9HNaVp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154625>)

_Abstract unavailable from the accessible public sources._

## Understanding Reasoning from Pretraining to Post\-Training: Chess as a Controlled Testbed

**Authors:** Jingyan Shen; Ang Li; Salman Rahman; Yifan Sun; Micah Goldblum; Matus Telgarsky; Pavel Izmailov

**ID:** 152950\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152950

[Paper](<https://openreview.net/forum?id=PALFTMGRb5>) | [PDF](<https://openreview.net/pdf?id=PALFTMGRb5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152950>)

_Abstract unavailable from the accessible public sources._

## Near\-Optimal Learning in Parametric Bandits with Action\-Dependent Coarsened Feedback

**Authors:** Zhuohua Li; MAOLI LIU; Yuwen Huang; Cheng Wen; Jie Su; Cong Tian; Shengchao Qin; John C\. S\. Lui

**ID:** 148628\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148628

[Paper](<https://openreview.net/forum?id=wKZIaaXYmQ>) | [PDF](<https://openreview.net/pdf?id=wKZIaaXYmQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148628>)

We study a structured stochastic multi\-armed bandit problem in which each decision simultaneously determines the learner's reward and the feedback available for learning\. At each round, the learner selects a task and an option\. Each task is associated with an unknown parameter that governs its reward, while each option has a known reward function of this parameter and determines how information about that reward is observed\. Some options may provide fine\-grained feedback at the cost of lower immediate reward, whereas others may yield higher reward but return only coarse feedback\. This creates an intrinsic trade\-off between reward maximization and information acquisition\. We formalize this setting as parametric bandits with action\-dependent coarsened feedback\. For stationary tasks, we propose ACF\-UCB, an optimistic algorithm that constructs task\-level confidence sets by aggregating information from all atoms of the option\-dependent feedback distributions\. For piecewise\-stationary tasks, we develop SW\-ACF\-UCB, a sliding\-window variant that adapts to temporal changes\. We prove high\-probability regret bounds for stationary environments and dynamic regret guarantees for piecewise\-stationary environments\. We also establish lower bounds showing that the dependence on the number of tasks and the horizon is unavoidable, while methods that ignore the shared parametric structure suffer substantially larger regret\.

## Tree\-Guided Identify Then Exploit: A Unified Framework of Pure Exploration and Regret Minimization for Dueling Bandits

**Authors:** Pu Wang; Yao\-Xiang Ding

**ID:** 148936\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148936

[Paper](<https://openreview.net/forum?id=u6hEKKPhn2>) | [PDF](<https://openreview.net/pdf?id=u6hEKKPhn2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148936>)

_Abstract unavailable from the accessible public sources._

## DUET: Optimize Token\-Budget Allocation for Reinforcement Learning with Verifiable Rewards

**Authors:** Haoyu Hu; Xuandong Zhao; Nori Jacoby; Xuhai &amp;amp;quot;Orson&amp;amp;quot; Xu

**ID:** 153196\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153196

[Paper](<https://openreview.net/forum?id=N80WSnmidb>) | [PDF](<https://openreview.net/pdf?id=N80WSnmidb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153196>)

Reinforcement learning with verifiable rewards \(RLVR\) generates thousands of tokens per training step, with rollout generation dominating the computational cost\. The overall token budget can be controlled along two main dimensions: \(i\) deciding which prompts to allocate rollouts to, and \(ii\) deciding how long each rollout should be\. Prior work has generally controlled only one of these dimensions at a time\. We show that jointly tuning both decisions under a shared compute budget improves both reasoning quality and wall\-clock training time\. We instantiate this view as \\textbf\{DU\}al\-controlled tok\\textbf\{E\}n alloca\\textbf\{T\}ion \(DUET\), a computationally efficient layer over GRPO, in which we have a lightweight pre\-rollout surrogate of prompt informativeness to set how many rollouts each prompt receives and a marker\-gated abort rule with importance reweighting set when to stop them\. On Qwen3\-1\.7B trained on MATH, DUET outperforms full\-budget GRPO and the other three budget\-aware baseline methods\. DUET's advantage was further generalized to other benchmarks across math and coding, and was on par with the best baseline on the scientific Q\\&amp;A domain, while also achieving a $1\.62\\times$ wall\-clock speedup\. More notably, using only 50\\% of the token budget, DUET still outperforms all baseline methods, and performance often increases rather than reduces with the more limited budget, achieving an even higher $2\.51\\times$ speedup\. We verified the high performance of DUET on other backbone LLMs, including Qwen\-4B and Llama\-3\.2\-3B\-Instruct\. Notably, the gap between DUET and the strongest baseline \\emph\{widens\} as the budget tightens, contrary to the usual pattern in which efficient methods trade off quality as compute decreases\.  More broadly, these results suggest that DUET budget\-aware control strategies are valuable not only for accelerating training, but also for improving the quality of the learning signal\.

## Ergodic Risk Measures: Towards a Risk\-Aware Foundation for Continual Reinforcement Learning

**Authors:** Juan Rojas; Chi\-Guhn Lee

**ID:** 152958\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152958

[Paper](<https://openreview.net/forum?id=P7WboKVZGN>) | [PDF](<https://openreview.net/pdf?id=P7WboKVZGN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152958>)

Continual reinforcement learning \(continual RL\) seeks to formalize the notions of lifelong learning and endless adaptation in RL\. In particular, the aim of continual RL is to develop RL agents that can maintain a careful balance between retaining useful information and adapting to new situations\. To date, continual RL has been explored almost exclusively through the lens of risk\-neutral decision\-making, in which the agent aims to optimize the expected long\-run performance\. In this work, we present the first formal theoretical treatment of continual RL through the lens of risk\-aware decision\-making, in which the behaviour of the agent is directed towards optimizing a measure of long\-run performance beyond the mean\. In particular, we show that the classical theory of risk measures, widely used as a theoretical foundation in non\-continual risk\-aware RL, is, in its current form, incompatible with continual learning\. Then, building on this insight, we extend risk measure theory into the continual setting by introducing a new class of ergodic risk measures, and showing that it is compatible with continual learning\. Finally, we provide a case study of continual risk\-aware learning, along with empirical results, which show the intuitive appeal of ergodic risk measures in continual settings\.

## Active Context Selection Improves Simple Regret in Contextual Bandits

**Authors:** Mohammad Shahverdikondori; Jalal Etesami; Negar Kiyavash

**ID:** 151058\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151058

[Paper](<https://openreview.net/forum?id=dJqzCskE60>) | [PDF](<https://openreview.net/pdf?id=dJqzCskE60>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151058>)

We study the contextual multi\-armed bandit problem with a finite context space \(a\.k\.a\. subpopulations\),  where the learner recommends a best action for each context and is evaluated by context\-weighted simple regret\. Our guarantees are worst\-case over the reward distributions, while remaining instance\-dependent with respect to the context distribution vector $\\mathbf p$\. Akin to experimental design problems where the population of interest is fixed but the sampled subpopulation can be controlled, we allow the learner to actively choose which context to sample from\. For a known $\\mathbf p$, we characterize tight regret rates: passive sampling where contexts are randomly revealed achieves regret of order  $\\sqrt\{n/T \\lVert \{\\mathbf\{p\}\} \\rVert\_\{1/2\}\}$,  whereas active sampling with allocation  $q\_j \\propto p\_j^\{2/3\}$ achieves the tight rate $\\sqrt\{n/T\} \\lVert \{\\mathbf\{p\}\} \\rVert\_\{2/3\}$\.  The resulting improvement can be as large as  $\\Theta\(k^\{1/4\}\)$,  where $k$ is the number of contexts\.  We further extend the analysis to budgeted active sampling, characterize the corresponding tight rate, and identify when a limited active budget suffices to recover the fully active rate\. When $\\mathbf p$ is unknown, we propose the Explore\-Explore\-Then\-Commit \(EETC\) algorithm, which optimally balances estimating the context distribution and the time to switch to active allocation, such that for large horizons, it matches the known\-$\\mathbf p$ active rate up to constants\.  Experiments on synthetic and real\-world data support our theoretical findings\.

## SAGE: Mitigating Long\-Horizon Reasoning Biases via Topological Guidance

**Authors:** Xinyue Zeng; Jiawei zhang; Yujun Yan; Dawei Zhou

**ID:** 151519 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a3nWqajGnm>) | [PDF](<https://openreview.net/pdf?id=a3nWqajGnm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151519>)

Long\-horizon reasoning remains a central challenge for large language models \(LLMs\) under sparse\-reward regimes\. We argue that this brittleness arises from two biases induced by complex reasoning spaces: an exploration bias, where models are drawn toward locally plausible but structurally unstable branches, and a compounding bias, where small local deviations accumulate across depth and suppress rare rewards\. We introduce Symbolic Closure Analysis \(SCA\) as a theoretical lens characterizing how branching structures and sparse rewards induce these biases in long\-horizon reasoning with local admissibility, and as a design principle for structural priors in less formal reasoning tasks\. Motivated by this analysis, we propose \\model\{\} \(\\textbf\{S\}tructural \\textbf\{A\}dmissibility\-\\textbf\{G\}uided \\textbf\{E\}xploration\), a unified framework that injects structural guidance to alleviate exploration bias and compounding bias in long\-horizon reasoning\. \\model\{\} combines two complementary structural dimensions: algebraic sparsification, which projects locally admissible candidates onto operator\-indexed algebraic subspaces to suppress spurious branching and mitigate exploration bias, and hyperbolic structural guidance, which embeds reasoning states into a negatively curved space to provide dense depth\-wise signals and mitigate compounding bias\. Across 12 benchmarks and 7 model families, \\model\{\} outperforms competitive baselines\. In particular, \\model\{\} achieves up to an 8\-fold improvement on the Andrews\-Curtis problem, an open real\-world long\-horizon task\. Code is available at: \\url\{https://anonymous\.4open\.science/r/SAGE\-Long\-Horizon\-Reasoning\-AD70\}\.

## Test\-time Risk Adaptation with Mixture of Agents

**Authors:** Mohamad Chehade; Amrit Singh Bedi; Souradip Chakraborty; Amy Zhang; Hao Zhu

**ID:** 148449 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xjpWCBDACk>) | [PDF](<https://openreview.net/pdf?id=xjpWCBDACk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148449>)

Deployed reinforcement learning agents often face safety requirements that are specified only after training: new hazard maps, revised risk thresholds, or behavioral alignment constraints\. We study zero\-update deployment\-time adaptation in which a fixed library of risk\-neutral source policies must be reused under a newly specified reward–risk tradeoff\. We propose \*\*TRAM\*\* \(\*Test\-time Risk Adaptation via Mixture of Agents\*\), a source\-scored composition rule that evaluates each source under the target reward and an occupancy\-based deployment risk, then selects actions using risk\-adjusted source scores\. Unlike training\-time risk\-sensitive methods tied to a fixed surrogate such as return variance, TRAM supports spatial barrier exposure, divergence to a reference behavior, and local volatility risks specified at test time\. We make the surrogate nature of the method explicit: TRAM is not claimed to solve the full occupancy\-control problem of the stitched policy, but it admits a measurable source\-hull mismatch term connecting source\-scored risk to realized risk\. Experiments in gridworlds, MuJoCo Reacher, Safety\-Gymnasium, and an LLM alignment setting show that TRAM improves deployment risk while preserving reward and requires no parameter updates at test time\.

## IFDECORATOR: Wrapping Instruction Following Reinforcement Learning with Verifiable Rewards

**Authors:** Xu Guo; Tianyi Liang; Jian Tong; Xiaogui Yang; Ling\-I Wu; Chenhui Li; Zhihui Lu; Qipeng Guo; Kai Chen

**ID:** 148764 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vEcdUTiDxm>) | [PDF](<https://openreview.net/pdf?id=vEcdUTiDxm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148764>)

Reinforcement Learning with Verifiable Rewards \(RLVR\) has emerged as a promising approach to enhance Instruction Following \(IF\) capabilities of large language models \(LLMs\)\.  However, RLVR for instruction following remains sample\-inefficient and prone to reward hacking, where LLMs exploit verification shortcuts rather than fulfilling the core intent\. To address these challenges, we frame RLVR for instruction following as an integrated environment that unifies dynamic task generation and robust training\.  We introduce Instruction Following Decorator \(IFDecorator\}, a framework coupling difficulty adaptation, intent alignment, and hack diagnostics\.  It features: \(1\) a cooperative\-adversarial data flywheel that yields challenging yet solvable tasks for sample\-efficient training;  \(2\) IntentCheck, a gating module to mitigate reward hacking; and  \(3\) TripWires, a proactive diagnostic tool for eliciting hacking behaviors and quantifying their prevalence\. Extensive experiments show our Qwen2\.5\-32B\-Instruct trained with IFDecorator using only 3,625 training examples achieves 87\.43% on IFEval \(outperforming GPT\-4o\) and improves FollowBench by 4\.2%, while preserving general capabilities\. Diagnostics confirm that our method effectively reduces reward hacking\. The approach generalizes across model architectures and scales\. We will release code and data for future research\.

## Split\-RL: Local Conflict Resolution in Reinforcement Learning

**Authors:** Benjamin Fuhrer; Chen Tessler; Gal Dalal

**ID:** 152641\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152641

[Paper](<https://openreview.net/forum?id=RUIN0YgMdQ>) | [PDF](<https://openreview.net/pdf?id=RUIN0YgMdQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152641>)

_Abstract unavailable from the accessible public sources._

## D\-VLA: A High\-Concurrency Distributed Asynchronous RL Framework for Vision\-Language\-Action Models

**Authors:** Guo Yucheng; Yongjian Guo; Zhong Guan; Wen Huang; Haodong Yue; shuai di; Junwu Xiong; Yicheng Gong

**ID:** 155352 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6GnB2rJTzx>) | [PDF](<https://openreview.net/pdf?id=6GnB2rJTzx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155352>)

The rapid evolution of Embodied AI has enabled Vision\-Language\-Action \(VLA\) models to excel in multimodal perception and task execution\. However, applying Reinforcement Learning \(RL\) to these massive models in large\-scale distributed environments faces severe systemic bottlenecks, primarily due to the resource conflict between high\-fidelity physical simulation and the intensive VRAM/bandwidth demands of deep learning\. This conflict often leaves overall throughput constrained by execution\-phase inefficiencies\. To address these challenges, we propose D\-VLA, a high\-concurrency, low\-latency distributed RL framework for large\-scale embodied foundation models\. D\-VLA introduces "Plane Decoupling," physically isolating high\-frequency training data from low\-frequency weight control to eliminate interference between simulation and optimization\. We further design a four\-thread asynchronous "Swimlane" pipeline, enabling full parallel overlap of sampling, inference, gradient computation, and parameter distribution\. Additionally, a dual\-pool VRAM management model and topology\-aware replication resolve memory fragmentation and optimize communication efficiency\. Experiments on benchmarks like LIBERO show that D\-VLA significantly outperforms mainstream RL frameworks in throughput and sampling efficiency for billion\-parameter VLA models\. In trillion\-parameter scalability tests, our framework maintains exceptional stability and linear speedup, providing a robust system for high\-performance general\-purpose VLA Models\.

## Towards Optimal Pre\-training Data Mixtures for Empowering Reinforcement Learning in LLMs

**Authors:** Xue Han; Qian Hu; Yitong Wang; WenChun Gao; Lianlian Zhang; Qing Wang; Lijun Mei; Zhaoxuefeng; Junlan Feng

**ID:** 152676\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152676

[Paper](<https://openreview.net/forum?id=RFyOhPRUnL>) | [PDF](<https://openreview.net/pdf?id=RFyOhPRUnL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152676>)

Optimal pre\-training data mixtures are vital for Large Language Models \(LLMs\), yet post\-RL reasoning performance varies significantly across base models\. This suggests that identifying "RL\-friendly" pre\-training data mixtures is a critical but under\-explored prerequisite\. This motivates us to ask: Which specific data mixtures in pre\-training enhance post\-RL effectiveness, and how can we evaluate a base model's suitability for RL fine\-tuning? Through large\-scale experiments with proxy models, we observe that \(1\) domain\-specific data correlation strongly predicts post\-RL performance, and \(2\) the average perplexity of the base model on $k$ RL\-generated responses, $\\text\{avg\}\(k\\text\{\-ppl\}\)$, is a more stable and correlated predictor than traditional metrics\. Building on these insights, we propose BridgeRL, a framework that treats finding optimal mixing ratios as a regression task, using $\\text\{avg\}\(k\\text\{\-ppl\}\)$ as the fitting objective\. We train 1M/60M\-parameter proxy models for regression and scale the findings to 1B/3B\-parameter models\. Results across online and offline RL algorithms demonstrate that BridgeRL\-optimized mixtures consistently yield superior base models for RL fine\-tuning\.

## Two\-Sided Learning in Matching Markets with Interviews

**Authors:** Amirmahdi Mirfakhar; Xuchuang Wang; Mengfan Xu; Hedyeh Beyhaghi; Mohammad Hajiesmaili

**ID:** 154403\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154403

[Paper](<https://openreview.net/forum?id=DqHt1Uj0DI>) | [PDF](<https://openreview.net/pdf?id=DqHt1Uj0DI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154403>)

Two\-sided matching platforms rely on preferences from both sides, yet participants can evaluate only a small fraction of potential partners\. In practice, they use low\-cost pre\-match screening,  e\.g\., interviews, profile views, or trial tasks, to form noisy impressions before committing to applications and offers\. We study bandit learning in matching markets with interviews, modeling these interactions as queried \*hints\* \[Bhaskara et al\., 2022\] that reveal partial preference information to both sides while constraining subsequent applications\. Our framework also allows firm\-side uncertainty: firms, like agents, learn their preferences and may make early hiring mistakes\. To address this, we introduce strategic deferral, a firm\-side action that permits temporary vacancy, corrects premature commitments, and enables decentralized learning under coarse anonymous feedback\. We design algorithms for centralized and decentralized markets and show that a constant number of interviews per round suffices for horizon\-independent regret, improving over the $O\(\\log T\)$ guarantees known without interviews\. Our bounds are near\-optimal: the centralized guarantee is within a factor $m$ of an information\-theoretic lower bound, while decentralized algorithms match it up to polynomial factors in structured markets and remain horizon\-independent in general markets\.

## Offline Inverse Reinforcement Learning with Unified Diffusion Planning

**Authors:** Hongmin Zhao; Jiyuan Yin; Kexi Yan; Qinglai Wei; Jie ZHANG

**ID:** 153682\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153682

[Paper](<https://openreview.net/forum?id=JZw9JG0jN0>) | [PDF](<https://openreview.net/pdf?id=JZw9JG0jN0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153682>)

Offline Inverse Reinforcement Learning \(IRL\) aims to recover a reward function and imitate expert behavior solely from offline demonstrations\. While recent Offline IRL approaches employ approximate dynamics to mitigate distribution shift, their performance is constrained by the unstable minimax framework as well as simplified representation and utilization\. To address these issues, we propose Offline Inverse Reinforcement Learning with Diffusion Planner \(OIDP\), which leverages diffusion models to achieve stable Offline IRL\. OIDP formulates a model\-based conservative Q\-optimization through inverse soft Q\-learning, which is provably concave in Q\-space with a controllable performance gap\. Accordingly, we introduce a unified diffusion planner that models dynamics, uncertainty estimator, and policy, it captures multimodal distributions, directly tightens the objective gap bound, and at execution performs trajectory\-guided policy sampling using the internalized dynamics knowledge\. Experimental results on D4RL benchmarks demonstrate that OIDP outperforms state\-of\-the\-art offline approaches\.

## Reward\-free Pretraining for Reinforcement Learning via Occupancy Coverage Maximization

**Authors:** Marco Pratticò; Pietro Novelli; Massimiliano Pontil; Carlo Ciliberto

**ID:** 148947 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tzOD9WpnO4>) | [PDF](<https://openreview.net/pdf?id=tzOD9WpnO4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148947>)

Sparse rewards pose a central challenge in reinforcement learning, since agents receive no informative signal until they reach their goal\. Intrinsic\-reward methods address this issue by optimizing non\-stationary objectives such as novelty, prediction error, or skill diversity, thereby injecting a supervision signal into the problem\. While effective, these methods often require that the extrinsic \(sparse\) reward can be evaluated \-\- either online or during offline relabeling of the stored transitions\. This limitation is particularly vexing for multi\-task, meta\-, and continual reinforcement learning, where agents' interactions with the environment are usually \{\\em reward\-free\}\. In this work, we present a method to pre\-train \{\\em transferable exploration policies\} that rapidly adapt to sparse rewards at downstream task time\. Our objective maximizes state\-space covering for the occupancy measure, and can be framed in terms of entropy maximization\. Its algorithmic implementation, ROVER, leverages recent advances on the operatorial formulation of RL to estimate occupancy with a learned resolvent world model, bypassing common hurdles associated with density and entropy estimation\. ROVER further introduces a virtual \`\`sink" state for unexplored regions, balancing coverage of known states with expansion into unseen ones and preventing cyclic expansion–collapse behavior during learning\. In tabular and pixel\-based sparse navigation tasks, ROVER produces more uniform aggregate coverage and stronger initializations for downstream tasks than standard reward\-free baselines\.

## Closing the Reflection Gap: A Free Calibration Bonus for Agentic RL

**Authors:** Yinglun Zhu

**ID:** 149208 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s8QIIohE8t>) | [PDF](<https://openreview.net/pdf?id=s8QIIohE8t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149208>)

LLMs are increasingly deployed as agents that interact with external environments and observe feedback such as execution results, error messages, and tool outputs\. A well\-functioning agent should leverage this evidence to assess its own performance\. Yet we find that standard RL algorithms systematically undermine this ability: agents drift toward miscalibration, error flags become unreliable, and reflection carries no information beyond raw task accuracy\. The root cause is a credit assignment mismatch in outcome\-based RL: for instance, relying on outcome alone can penalize honest error detection on failed trajectories\. We propose a simple yet effective fix that augments the outcome reward with a free calibration bonus, computed by contrasting the agent's reflection with the actual outcome\-\-\-requiring no additional reward model, LLM judge, or external annotation\. In a text\-to\-SQL environment across five benchmarks, our method not only improves task accuracy from 75\.1\\% to 76\.5\\% but also reduces underconfidence rate from 44\.4\\% to 7\.7\\%\. The resulting calibrated reflection further enables more effective selective prediction, and supports self\-improvement using reflections as pseudo\-rewards without outcome supervision\.

## Shellsort as Multi\-Scale Relaxation: Learning Spectrum\-Matched Gap Schedules

**Authors:** Qingyun Li; Ruoyun Li; Yunqi Li; Yunjin Li

**ID:** 151687 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ym8pFbqtzJ>) | [PDF](<https://openreview.net/pdf?id=Ym8pFbqtzJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151687>)

A Shellsort gap sequence is a multi\-scale relaxation schedule\. Each pass at gap $h$ eliminates inversions at length scale $h$, and the sequence cools the array from coarse to fine, analogous to a multigrid V\-cycle or simulated\-annealing schedule\. This view suggests that the right gap sequence should depend on the input's \*disorder spectrum\*: the inversion rate measured across logarithmic strides\. Classical sequences such as Ciura, Sedgewick, and Tokuda are instead fixed schedules, applying the same coarse\-to\-fine relaxation to every input\. We test this spectrum\-matching view by formulating gap selection as a Markov decision process whose state is the current disorder spectrum and whose action selects the next gap\. A small PPO\-trained policy improves comparison count by \*\*15\-16%\*\* over Sedgewick across array sizes $N\{=\}128$ to $N\{=\}16\{,\}384$ on a seven\-family input mixture, with training under 10 minutes on a consumer CPU\. But the main value of the learned policy is not only that it improves Shellsort: it provides a probe into what effective gap schedules are doing\. The learned schedules organize into three distinct relaxation regimes: gradual Brownian\-like cooling for flat\-spectrum inputs, faster Lévy\-flight\-like cooling for coarse\-scale structure, and direct fine\-scale relaxation for inputs whose disorder is already local\. Spectrum statistics predict schedule statistics, training only on flat\-spectrum inputs recovers a dense Ciura\-like regime, and an ablation that replaces the adaptive policy with one global learned sequence reduces the gain from 15\.6% to 0\.9%\. Input adaptivity, not the discovery of another static sequence, accounts for the gain\. The marginal spectrum has blind spots: pipe\-organ inputs share the random spectrum but their bipartite structure becomes visible only after the first pass, so sequential adaptation provides an additional margin\. For known target distributions the policy can be used offline as a schedule compiler: run it on representative inputs, extract a per\-distribution schedule, and hardcode that fixed sequence as a drop\-in replacement for the existing static gaps with no neural runtime overhead\. Together, these results recast Shellsort gap design as spectrum\-matched scheduling\.

