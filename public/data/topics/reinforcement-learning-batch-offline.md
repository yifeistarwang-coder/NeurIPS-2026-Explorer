# Reinforcement Learning / Batch Offline

强化学习 / 离线强化学习

47 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Distribution Corrected Decision Transformer for Offline Reinforcement Learning with Imbalanced Datasets

**Authors:** Chufan Chen; Bohao Tang; Dejiang Chen; zhang chao; Ruiqi Li; Hanbin Zhao; Hui Qian

**ID:** 150474 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hmdpCpN3Kt>) | [PDF](<https://openreview.net/pdf?id=hmdpCpN3Kt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150474>)

Decision Transformer \(DT\) has emerged as a powerful paradigm for offline reinforcement learning\. For complex tasks with imbalanced datasets, where high\-quality samples constitute only a small fraction of the data while the majority is suboptimal, the performance of DT methods usually degrade significantly due to the the offline data distribution deviates substantially from the stationary distribution of the optimal policy\. In this paper, we construct a dual\-based correction mechanism to mitigate the distribution shift problem and propose a Distribution Corrected Decision Transformer method\. Specifically, we investigate the Lagrangian duality of the reward maximizing objective in the standard Markov decision problem and recover the optimal correction weights between the static offline data and optimal stationary distribution\. Note that a double\-KL regularizer is integrated in the objective to prioritize high\-return state\-action pairs while remaining anchored to valid data support\. Subsequently, we use the learned weights to correct distributional bias in two critical components of DT: stabilizing policy evaluation through weighted temporal\-difference learning, and improving policy extraction by prioritizing DT training on weighted dataset aligned with the corrected target distribution\. We theoretically analyze the performance guarantee, proving our method improves upon standard baselines, and empirically demonstrate strong performance on D4RL benchmarks, particularly on highly imbalanced datasets where prior methods fail\.

## Higher\-Order Action Supervision Makes A Strong Policy Class

**Authors:** Peng Cheng; Yunxian Hou; Zhi Zhou; Qian Zhang; Chang Huang; Xianyuan Zhan

**ID:** 151538 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZusaOFN1fJ>) | [PDF](<https://openreview.net/pdf?id=ZusaOFN1fJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151538>)

Modern data\-driven decision\-making methods, such as imitation learning \(IL\) and reinforcement learning \(RL\), have achieved great success in solving many complex tasks\. However, these methods often suffer from serious control instability and robustness issues when applied in real\-world applications such as robotics and autonomous driving, posing notable challenges for their practical deployment\. We argue that this instability issue stems largely from their limitations on solely supervising and optimizing zeroth\-order actions \(i\.e\., the action labels\), failing to account for higher\-order action dynamics and temporal consistency\. In this paper, we show that simultaneously supervising both zeroth\- and first\-order actions can dramatically enhance policies' performance and control robustness\. To achieve this, we introduce a novel and elegant loss scheme supported by formal theoretical guarantees that can equip any off\-the\-shelf policy model \(e\.g\., deterministic, stochastic, or flow policies\) with the capability for higher\-order action supervision, without requiring any structural modifications\. Moreover, our proposed method can serve as a lightweight plug\-and\-play module that seamlessly integrates with a broad spectrum of existing offline RL frameworks\. Extensive evaluations on OGBench and D4RL demonstrate that our approach yields substantial performance and robustness improvements across a wide range of continuous control environments\. Notably, our method can also enhance policies' out\-of\-distribution \(OOD\) generalization capability in the challenging low\-data regime, making it an ideal tool in tackling many real\-world control problems\.

## Horizon Adaptive Offline Policy Learning via Value Stitching

**Authors:** Kexin ZHENG; Xianyuan Zhan; Xintao Yan

**ID:** 154836 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Aak239DsQk>) | [PDF](<https://openreview.net/pdf?id=Aak239DsQk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154836>)

Learning accurate value functions plays a decisive role for reinforcement learning \(RL\) agents to solve long\-horizon, complex tasks\. Conventional temporal\-difference \(TD\) learning objectives suffer from value\-estimation bias that accumulates over the horizon, while extended\-horizon modeling methods, such as $n$\-step TD backups and Q\-chunking, adopt a rigid, fixed\-horizon value\-modeling recipe that is often not flexible enough to capture complex value structures in long\-horizon, multi\-stage tasks\. In this paper, we show that enabling value updates with dynamic horizon composition can yield a strong offline policy learning scheme\. Our method, \_Horizon Adaptive Offline Policy Learning via \*\*VA\*\*lue \*\*ST\*\*itching\_ \(\*\*\_VAST\_\*\*\), replaces fixed\-horizon backups with recursive, horizon\-adaptive value composition\. Its key ingredient is to couple value optimization with a future state\- and horizon\-length\-conditioned \*\*\_auxiliary value function\_\*\* that is learned through direct data supervision, and a \*\*\_stitching policy\_\*\* that optimally selects the reward\-maximizing horizon length and future sub\-goal to achieve horizon\-adaptive value stitching\. This design enables direct estimation and compositional “stitching” of variable\-length returns grounded in actionable sub\-goal states, providing an accurate and greedily exploitable value\-supervision signal for offline policy optimization\. Across 50 tasks on OGBench, \_VAST\_ outperforms fixed\-step, extended\-horizon methods, and generative\-value offline RL baselines, achieving strong performance particularly in high\-complexity, long\-horizon decision\-making tasks\.

## Iterative Latent Refinement for Value Learning in Offline Goal\-Conditioned RL

**Authors:** Daoxin Li; Songcheng Xu; Guozhang Chen

**ID:** 154947 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9ifoNWFpH3>) | [PDF](<https://openreview.net/pdf?id=9ifoNWFpH3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154947>)

Offline goal\-conditioned reinforcement learning \(GCRL\) enables goal\-reaching from static datasets, but the learned value, critic, or compatibility score must support both long\-horizon reachability inference and offline policy extraction\. We study iterative latent refinement as an architecture\-level replacement for the feedforward value or critic backbone used by existing offline GCRL algorithms\. Instead of emitting a score after a single feedforward computation, the network repeatedly updates a latent representation using shared recurrent update weights and lightweight step\-specific parameters before exposing the final actor\-facing signal\. On the recent benchmark datasets reported in this study, recurrent variants improve performance across several algorithms without changing their losses, data, actors, or training protocol; across the 21 reported algorithm\-dataset rows, the mean improvement is $10\.7$ percentage points, with the largest gains on stitching and bottleneck maze tasks\. CRL diagnostics are consistent with an improved policy\-extraction interface: recurrent critics increase normalized separation between matched and mismatched goals and produce actors that remain closer to dataset actions under several behavior\-support proxies\. Depth and update\-capacity studies further suggest that the effect depends on how computation is allocated between recurrent depth and per\-step expressivity\.

## When Do Learned State Representations Break Sensitivity Analysis?

**Authors:** Siyu WANG; Xiaocong Chen; Quan Z Sheng; Lina Yao

**ID:** 150594 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h15TpswrQp>) | [PDF](<https://openreview.net/pdf?id=h15TpswrQp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150594>)

Causal sensitivity analysis bounds the policy value of off\-policy evaluation under unobserved confounding\. In offline reinforcement learning, however, sensitivity bounds are typically applied not to raw states but to learned representations\. We show that this two\-stage pipeline can silently break the coverage guarantee: state aggregation under hidden confounding amplifies the effective sensitivity parameter in the latent space, so bounds computed at the nominal confounding level may exclude the true policy value\. We characterise the amplification mechanism, give a sufficient condition for preservation, and prove a continuity result showing the safety condition is not an isolated point: amplification grows continuously with the conditional\-independence violation\. Neither unsupervised nor standard task\-aware representation objectives target the right quantity\. We propose Sensitivity\-Preserving Representation Learning \(SPRL\), which augments latent dynamics prediction with a kernel\-weighted within\-cell propensity homogeneity penalty, an observable surrogate for the unobservable safety condition, and show across synthetic and semi\-synthetic benchmarks that SPRL is the only method tested that simultaneously preserves coverage in regimes where unsupervised representations break it and prevents amplification in regimes where task\-aware baselines fail\.

## Variance\-Averse n\-Step Offline Reinforcement Learning for Sparse Long\-Horizon Environments

**Authors:** Guhyeon Kang; Minhae Kwon

**ID:** 154788 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AytpRK1tDD>) | [PDF](<https://openreview.net/pdf?id=AytpRK1tDD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154788>)

Generative actors are transforming offline reinforcement learning \(RL\) by enabling expressive policy classes that model complex action distributions\. However, this expressiveness also exposes a key challenge in heterogeneous datasets: generative policies can reproduce unreliable action modes whose return distributions exhibit high variance, occasionally yielding high returns by chance but lacking consistency\. Consequently, maximizing the expected Q\-value alone is insufficient for identifying reliable actions\. We propose VAN\-Flow \(Variance\-Averse n\-step Flow\), a framework that promotes reliable actions in generative offline RL\. VAN\-Flow combines \(i\) a categorical distributional critic, \(ii\) a variance\-averse expectation operator that smoothly reweights atom probabilities to favor actions with both high returns and low dispersion, and \(iii\) a flow\-matching generative actor guided via rejection sampling\. Unlike CVaR or mean\-\-variance objectives, the operator redistributes probability mass over the categorical return distribution without hard truncation or auxiliary penalty terms\. Across more than 40 tasks from D4RL and OGBench, VAN\-Flow consistently outperforms strong baselines, with the largest gains in long\-horizon and high\-variance regimes where reliable action selection becomes critical\.

## Jump Start Your Policy Learning with Lessons from 145,000 Training Runs

**Authors:** Nabil Omi; Chung Yik Edward Yeung; Eric Bae; Siddhartha Sen; Ali Farhadi

**ID:** 155981 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1O4mp1Q5FY>) | [PDF](<https://openreview.net/pdf?id=1O4mp1Q5FY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155981>)

Reliable progress in offline policy learning depends on a small set of methodological practices, including careful reporting, well\-tuned baselines, and evaluation across diverse conditions\. Prior work has noted that results can be sensitive to reporting choices, hyperparameter tuning, and dataset properties independently, but these sources of variability have not been systematically investigated at the scale needed to understand how they shape conclusions\. To address this gap, we present a large\-scale empirical study of offline reinforcement and imitation learning, training over 145,000 policies across 114 datasets\. At this scale, no algorithm dominates: aggregate performance across top methods is often close, but the leaders differ substantially across environments\. We find that proper hyperparameter tuning frequently reshuffles perceived algorithm rankings; and simple baselines, including behavior cloning, are often stronger than is commonly assumed after extensive tuning\. We also study hyperparameter transfer and sensitivity across environments, identifying a simple strategy that generalizes well\. From these analyses we distill practical recommendations, and release JumpStart: a resource suite of trained models, per\-model hyperparameter and reward data, strong baselines across all environments, and a website to make retrieval and analysis trivial\. Together, these resources aim to make offline policy learning research more reliable and to open new directions for work beyond the scope of this study\.

## AEGIS: Almost Surely Safe Offline Reinforcement Learning

**Authors:** Junseo Lee; Hyeokjin Kwon; Songhwai Oh

**ID:** 152975 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ox9slbd8dG>) | [PDF](<https://openreview.net/pdf?id=Ox9slbd8dG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152975>)

Ensuring safety guarantees in offline reinforcement learning remains challenging, especially when safety constraints must hold almost surely\. Moreover, as pre\-specifying a single safety budget \(constraint threshold\) is often challenging, it is desirable to learn a foundation policy that can be deployed across a broad range of budgets\. We introduce AEGIS \(Almost\-sure Epigraph\-Guided Implicit Safety\), a safe offline RL framework that can guide diffusion policy training via critics that respect almost\-sure constraints across various feasible budgets\. AEGIS characterizes the feasible set of initial state\-budget pairs as the epigraph of a feasibility critic updated via the worst\-case backup\. Building on the proposed characterization, we extend implicit Q\-learning \(IQL\) to train both feasibility and reward critics\. We use these critics to bias a diffusion policy toward high\-value feasible actions\. Consequently, AEGIS turns diffusion from a generative prior into a safety\-aware controller, enabling a single general policy to respect various budgets without further tuning\. Empirical results on the DSRL benchmark and humanoid locomotion tasks show that AEGIS achieves high feasibility with competitive returns, generalizing across feasible constraint thresholds\.

## From Static Policies to Adaptive Priors in Offline Reinforcement Learning

**Authors:** Tianwei Ni; Vineet Jain; Akash Karthikeyan; Pierre\-Luc Bacon

**ID:** 140092 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gp3C4kngKi>) | [PDF](<https://openreview.net/pdf?id=Gp3C4kngKi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140092>)

Offline reinforcement learning \(RL\) has traditionally focused on learning policies for direct deployment under conservative objectives, where uncertainty outside the offline dataset is treated pessimistically to ensure robustness\. We argue that this formulation becomes incomplete when an offline\-trained policy is subsequently updated through online interaction, as increasingly occurs in modern intelligent systems through test\-time adaptation and online fine\-tuning\. This position paper argues that, in such settings, the objective of offline RL should extend beyond immediate deployment and instead prioritize learning \*adaptive policy priors\*: policies that preserve the capacity to improve during subsequent interaction through memory, exploration, and self\-correction\. We formalize this perspective as \*adaptive offline reinforcement learning\* \(AORL\), distinguish it from offline\-to\-online RL, and explain why adaptability becomes important under distributional shift, limited dataset coverage, and changing test\-time conditions\. We further discuss Bayesian offline RL as one principled direction for constructing adaptive policy priors by preserving epistemic uncertainty over plausible environments\. Finally, we outline connections, open challenges, and research directions for treating offline RL as preparation for future experience rather than as a static deployment problem\.

## DeFlow: Decoupling Behavior\-Prior Modeling and Value Maximization for Offline Policy Extraction

**Authors:** Zhancun Mu; Chi Zhang

**ID:** 155920 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1oqxe0EmlH>) | [PDF](<https://openreview.net/pdf?id=1oqxe0EmlH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155920>)

We present DeFlow, a decoupled offline RL framework for extracting high\-value actions from a learned multi\-step flow prior\. Directly optimizing iterative generative policies typically requires backpropagation through ODE solvers, while shortcut policies trade off expressivity, inference cost, and policy\-improvement objectives\. DeFlow keeps the flow model as a behavior prior and trains a lightweight action\-conditioned residual module for value improvement under an adaptive trust\-region penalty\. This design bypasses solver differentiation and encourages proximity to the learned prior without treating the trust region as exact data\-support preservation\. Empirically, DeFlow is competitive with recent generative offline RL baselines, with the clearest gains on selected multimodal manipulation and offline\-to\-online settings\.

## Value\-Rectified Distillation for Flow\-based Offline Reinforcement Learning

**Authors:** Ke Jiang; Wen Jiang; Yoshinobu Kawahara; Xiaoyang Tan

**ID:** 149851 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mpjt1QNZvM>) | [PDF](<https://openreview.net/pdf?id=mpjt1QNZvM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149851>)

We aim to address the problem of \*Out\-of\-Distribution \(OOD\) Mode Averaging\*, a critical problem that emerges when distilling Flow Matching \(FM\) based behavior policies in offline Reinforcement Learning \(RL\): When learning over multi\-modal datasets, standard distillation inadvertently forces the policy to interpolate across different behavioral modes, causing the generated actions to collapse into invalid, OOD regions\. To resolve this, we propose \*\*Value\-Rectified Distillation \(VRD\)\*\*, a novel framework that reformulates offline policy distillation as a value\-guided generative trajectory alignment problem\. By employing a dynamic coupling mechanism, VRD actively rectifies flow dynamics to explicitly decouple distinct behavioral modes, cleanly isolating high\-value actions\. Specifically, we instantiate VRD through two complementary algorithms: \*\*VRD\-Q\*\*, which utilizes value\-quantile behavior distillation to statistically filter out low\-value behaviors, and \*\*VRD\-R\*\*, which reorganizes the latent space to geometrically isolate high\-value generative trajectories from the FM\-based behavior policy\. Extensive empirical evaluations demonstrate that VRD improves existing generative baselines across diverse continuous control and planning tasks on the D4RL, OGBench, and Minari benchmarks, especially over those multi\-modal, non\-expert datasets\.

## Boosting Off\-Policy RLVR with Data\-Centric Replay

**Authors:** Yuxiao He; Junge Zhang; Ziqi Wang

**ID:** 154959 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9dxvGd7Shr>) | [PDF](<https://openreview.net/pdf?id=9dxvGd7Shr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154959>)

Reinforcement Learning with Verifiable Rewards \(RLVR\) has become an important approach for improving the reasoning capabilities of large language models \(LLMs\)\. On\-policy training remains the dominant RLVR paradigm, but its reliance on fresh rollouts leads to poor data efficiency\. To address this bottleneck, off\-policy paradigm has attracted increasing attention by reusing historical trajectories through replay buffers\. Despite its efficiency advantages, off\-policy training often struggles to match the performance of on\-policy training\. Our analysis reveals that this limitation primarily stems from data staleness introduced by replay buffers: to maintain training stability, mainstream algorithms discard a large fraction of high\-staleness optimization signals, leading to substantial performance degradation\. To address this issue, we propose \*\*STAR\*\* \(\*\*St\*\*aleness\-\*\*A\*\*ware \*\*R\*\*eplay\), a data\-centric replay framework decoupled from specific optimization algorithms\. STAR improves off\-policy RLVR by constructing low\-staleness and high\-quality training data\. Experiments on a range of mathematical reasoning and code generation tasks show that STAR consistently improves off\-policy RLVR with up to 19% relative performance gains, and enables it to surpass the on\-policy baseline using only around 13% of the rollout data while achieving 5x\-6x wall\-clock speedup\.

## Variational Consequence\-Driven Offline Reinforcement Learning

**Authors:** Wen Jiang; Ke Jiang; Jin Wang; Xiaoyang Tan

**ID:** 149599 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ou9IEnOfiY>) | [PDF](<https://openreview.net/pdf?id=ou9IEnOfiY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149599>)

Offline reinforcement learning \(RL\) typically mitigates distribution shift by imposing divergence constraints on the action distributions of the learned and behavior policies\. However, this paradigm cannot ensure the underlying dynamic consistency structure: even minor action deviations can lead to drastically different transitions, inadvertently driving the agent away from the offline dataset\. To address this, we explore policy constraints through their induced state\-consequence distributions rather than relying on pure action\-distribution matching\. Nevertheless, directly enforcing such consequence\-aware constraints is computationally intractable without access to the true underlying dynamics model\. To bypass this issue, we propose Structural Behavior Regularization \(StBR\), which replaces the intractable objective with a closed\-form latent divergence\. Structuring this latent space to reflect transition dynamics renders the latent divergence a theoretically bounded surrogate for the true consequence\-distribution divergence\. By regularizing the learned policy with this latent divergence, StBR adaptively tightens the behavior constraint in dynamics\-sensitive regions, effectively preventing deviations outside the offline dataset\. Empirically, we demonstrate that StBR achieves superior performance across diverse offline RL benchmarks\.

## Localized Dynamics\-Aware Domain Adaption for Off\-Dynamics Offline Reinforcement Learning

**Authors:** Zhangjie Xia; Yu Yang; Pan Xu

**ID:** 151978 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WPPtcvFivw>) | [PDF](<https://openreview.net/pdf?id=WPPtcvFivw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151978>)

Off\-dynamics offline reinforcement learning \(RL\) aims to learn a policy for a target domain using limited target data and abundant source data collected under different transition dynamics\. Existing methods typically address dynamics mismatch either globally over the state space or via pointwise data filtering; these approaches can miss localized cross\-domain similarities or incur high computational cost\. We propose Localized Dynamics\-Aware Domain Adaptation \(LoDADA\), which exploits localized dynamics mismatch to better reuse source data\. LoDADA clusters transitions from source and target datasets and estimates cluster\-level dynamics discrepancy via domain discrimination\. Source transitions from clusters with small discrepancy are retained, while those from clusters with large discrepancy are filtered out\. This yields a fine\-grained and scalable data selection strategy that avoids overly coarse global assumptions and expensive per\-sample filtering\. We provide theoretical insights and extensive experiments across environments with diverse global and local dynamics shifts\. Results show that LoDADA consistently outperforms state\-of\-the\-art off\-dynamics offline RL methods by better leveraging localized distribution mismatch\.

## Bridging Safety and Performance in Autonomous Systems using Offline Reinforcement Learning

**Authors:** Mumuksh Tayal; Manan Tayal; Ravi Prakash

**ID:** 150431 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i6JA2toOiB>) | [PDF](<https://openreview.net/pdf?id=i6JA2toOiB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150431>)

Offline reinforcement learning \(RL\) offers a promising framework for deploying autonomous systems in safety\-critical settings without the risks of online exploration\. However, learning policies that simultaneously achieve high performance and strong safety guarantees from fixed datasets remains a fundamental challenge\. Many existing safe offline RL approaches typically rely on soft constraint formulations, which may permit safety violations and are sensitive to distributional shift\. In contrast, formal methods such as Hamilton–Jacobi \(HJ\) reachability and Control Barrier Functions \(CBFs\) provide rigorous safety guarantees, but often yield overly conservative solutions, often neglecting performance\. In this work, we bridge this gap by formulating safe offline RL as a state\-constrained optimal control problem, where safety is enforced through hard state constraints and performance is captured via a reward function\. The resulting value function satisfies a Hamilton–Jacobi–Bellman \(HJB\) equation, which we approximate using offline RL on fixed datasets\. This formulation enables principled integration of safety guarantees with data\-driven policy optimization\. Empirically, across safety\-critical benchmarks including boat navigation and Safety\-Gymnasium tasks, our approach achieves competitive returns while exhibiting near\-zero constraint violations, demonstrating a favorable balance between safety and performance in the offline setting\.

## Refining Compositional Diffusion for Reliable Long\-Horizon Planning

**Authors:** Kyowoon Lee; Yunhao Luo; Anh Tong; Jaesik Choi

**ID:** 148736 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vQROb0Us1c>) | [PDF](<https://openreview.net/pdf?id=vQROb0Us1c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148736>)

Compositional diffusion planning generates long\-horizon trajectories by stitching together overlapping short\-horizon segments through score composition\. However, when local plan distributions are multimodal, existing compositional methods suffer from mode\-averaging, where averaging incompatible local modes leads to plans that are neither locally feasible nor globally coherent\. We propose \*Refining Compositional Diffusion\* \(RCD\), a training\-free guidance method that steers compositional sampling toward high\-density, globally coherent plans\. RCD leverages the \*self\-reconstruction error\* of a pretrained diffusion model as a proxy for the log\-density of composed plans, combined with an \*overlap consistency\* term that enforces consistency at segment boundaries\. We show that the combined guidance concentrates sampling on high\-density plans that mitigate mode\-averaging\. Experiments on challenging long\-horizon tasks from OGBench, including locomotion, object manipulation, and pixel\-based observations, demonstrate that RCD consistently outperforms existing methods\. Project website at \[https://refining\-compositional\-diffusion\.github\.io/\]\(https://refining\-compositional\-diffusion\.github\.io/\)\.

## ExpRFT: Exponential Reward\-Weighted Fine\-Tuning for Offline RL in Multi\-Turn Dialogue

**Authors:** Huy Dao; Lizi Liao

**ID:** 154489 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DE0tMV3YZo>) | [PDF](<https://openreview.net/pdf?id=DE0tMV3YZo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154489>)

Offline reinforcement learning is a standard paradigm for fine\-tuning Large Language Models \(LLMs\) on multi\-turn dialogue, where on\-policy rollouts and reward annotations are costly\. Within this paradigm, reward\-weighted supervised fine\-tuning has emerged as an efficient approach, weighting each trajectory's log\-likelihood by a reward\-dependent coefficient\. We show that existing reward\-weighted SFT methods are specific members of a broader affine reward\-weighted SFT class, and identify two structural limitations that hold for every member of this class: every centered member yields an unbounded\-below loss, and no member admits a hyperparameter for attenuating reward noise\. We introduce ExpRFT as a principled escape from this class — an exponential reweighting of the standardized advantage at a tunable temperature that restores a well\-posed objective and provides a noise\-control dial\. ExpRFT parallels Advantage\-Weighted Regression \(AWR\) in spirit, yet requires no per\-action learned critic and adds no infrastructure cost beyond standard SFT\. On six multi\-turn dialogue benchmarks under reasoning and clarifying\-question protocols, ExpRFT outperforms rejection\-sampling, preference\-based, value\-based, and reward\-weighted baselines\. In the near\-mean trajectory regime, where weight noise dominates the advantage signal, ExpRFT remains stable under injected reward noise while baselines significantly degrade\.

## When Does Interaction Help? Representational Tradeoffs in Value\-Based Imitation Learning

**Authors:** Luca Viano; Antoine Moulin; Audrey Huang; Volkan Cevher; Philip Amortila; Dylan J Foster

**ID:** 150132 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kRq9hKJYQU>) | [PDF](<https://openreview.net/pdf?id=kRq9hKJYQU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150132>)

Imitation learning \(IL\)—training an agent to replicate expert behavior from demonstrations—underpins applications from robotics to language model training\. Standard approaches such as Behavior Cloning \(BC\) are known to suffer from compounding errors and performance plateaus, particularly when the learner cannot perfectly represent the expert’s policy \(e\.g\., as is typical in distillation\)\. Two interventions are widely understood empirically to improve performance: querying the expert interactively along the learner’s own trajectories, and using value function estimation en route to generating a policy\. We investigate the nature of these improvements and their potentially surprising interplay\.   Our main finding is that expert interaction relaxes the representational demands on the learner: one only needs a model capable of realizing the expert’s value function, bypassing the \(often stricter\) requirement of realizing the expert’s policy itself\. Concretely, we introduce OVI, an interactive IL algorithm that is statistically and computationally efficient whenever the learner can represent the expert’s value function\. We complement this with a negative result showing that interaction is necessary: without significantly stronger representational assumptions than expert\-value realizability alone, a broad class of value\-based IL algorithms cannot succeed in the offline setting\. These findings bear out empirically: OVI outperforms offline policy\-based \(BC\), interactive policy\-based \(DAgger\), and offline value\-based IL methods, with the largest gains when the learner network is substantially less expressive than the expert’s\.

## Learning When to Stop: Selective Imitation Learning Under Arbitrary Dynamics Shift

**Authors:** Surbhi Goel; Jonathan Pei; James Wang

**ID:** 155084 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8YxGIUwNHt>) | [PDF](<https://openreview.net/pdf?id=8YxGIUwNHt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155084>)

Behavior cloning provides strong imitation learning guarantees when training and test environments share the same dynamics\. However, in many deployment settings the test environment's transitions differ from training, and classical offline IL offers no recourse: the learner must commit to an action at every state, even when its demonstrations are uninformative and could lead to arbitrary degradation of performance\. This motivates the study of \_selective\_ imitation, where the learner may choose to \_stop\_ when it cannot act reliably\. We introduce a model for selective imitation under arbitrary dynamics shift: given labeled expert demonstrations from a training environment and unlabeled state trajectories from the same expert in a test environment, the learner outputs a \_selective policy\_ that is \_complete\_ \(rarely stops in training\) and \_sound\_ \(incurs low regret before stopping in test\)\. Our algorithm, $\\operatorname\{SeqRejectron\}$, constructs a stopping rule using a small set of \_validator policies\_ whose size is independent of the horizon or policy class\. For deterministic policies, this yields horizon\-free $\\tilde\{O\}\(\\log\|\\Pi\|/\\epsilon^2\)$ sample complexity, assuming sparse costs\. For stochastic policies, we obtain analogous horizon\-free guarantees using a cumulative Hellinger stopping time\. We extend the framework to misspecified experts and different expert policies across train and test and obtain results that gracefully degrade with the amount of misspecification\.

## Kernel Value Regression in Offline Reinforcement Learning

**Authors:** Jongyeon Lee; Jaehyoung Jeon; Kim Haneol; Myungjoo Kang

**ID:** 148489 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xQ7Z8qUzqg>) | [PDF](<https://openreview.net/pdf?id=xQ7Z8qUzqg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148489>)

Value overestimation is a central challenge in offline reinforcement learning \(RL\), arising when Bellman backups propagate out\-of\-distribution \(OOD\) errors that lead to catastrophic inflation of $Q$\-values\. Prior approaches address this issue by encouraging the learned policy to stay close to the behavior policy, but they often result in suboptimal policies or require significant training complexity\. More recent work attempts to tackle this issue through minimal modifications to the critic network, yet it remains limited in either theoretical grounding or practical implementation\. In this work, we present Kernel Value Regression \(KVR\), a simple critic regularization method based on kernel regression\. KVR builds on the vanishing extrapolation property of kernel ridge regression, which encourages value estimates to decay toward zero away from the data support\. This inductive bias naturally suppresses $Q$\-values for OOD actions without auxiliary regularizers, providing a structural mechanism for addressing value overestimation\. Using random Fourier features, KVR can be incorporated into standard actor\-critic algorithms with only minimal modifications\. We empirically demonstrate that these properties persist in complex offline RL environments, leading to strong performance across diverse tasks in the D4RL and OGBench benchmarks\.

## Spectral Representations for Provably Robust Offline Meta\-Reinforcement Learning from Bagged Rewards

**Authors:** Yashas Vaidya; Bo Dai

**ID:** 148147 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zvAriUgbiU>) | [PDF](<https://openreview.net/pdf?id=zvAriUgbiU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148147>)

Context\-based offline meta\-reinforcement learning \(COMRL\) aims to learn adaptable policies entirely from static datasets by inferring latent task representations from small contexts\. Most COMRL methods rely on immediate, per\-step reward signals\. This can be generalized by aggregating rewards into \`\`bags'' and being delivered after a sequence of actions \(where bag size $n=1$ is the per\-step case\)\. We formally prove that under Bagged Rewards, existing per\-transition COMRL methods suffer an information\-theoretic collapse \($\\mathcal\{O\}\(1/n\)$\), causing their task inference to degrade to behavior cloning\. To solve this, we introduce SpectralMeta, an algorithm that fully decouples dynamics representation from task inference\. By pre\-training an energy\-based spectral representation on reward\-free transitions, we recast task identification as a closed\-form Bayesian linear regression over bagged rewards\. SpectralMeta comes with finite\-sample bounds on reward recovery and policy sub\-optimality\. In continuous\-control meta\-RL benchmarks, SpectralMeta maintains robust task inference and competitive returns even when rewards are reduced to a single episode\-level scalar, a regime where existing baselines fail to recover task\-relevant structure\.

## Diffusion Subgoal Planning for Long\-Horizon Offline Goal\-Conditioned Reinforcement Learning

**Authors:** Hengrui Zhang; Yuhu Cheng; C\.L\.Philip Chen; Xuesong Wang

**ID:** 150829 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ezp2TvIFGP>) | [PDF](<https://openreview.net/pdf?id=ezp2TvIFGP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150829>)

Offline goal\-conditioned reinforcement learning \(GCRL\) learns goal\-directed policies from reward\-free data, but in long\-horizon tasks, goal\-conditioned value functions often provide unstable guidance due to sparse rewards and discounting\. Hierarchical methods partially mitigate this issue via subgoal decomposition; however, high\-level decision\-making still relies on noise\-sensitive value estimates, leading to unstable behavior in complex environments\. We address this limitation by proposing \\textbf\{D\}iffusion \\textbf\{S\}ubgoal \\textbf\{P\}lanning \(\\textbf\{DSP\}\), a diffusion\-based framework for high\-level subgoal generation\. DSP casts high\-level planning as guided generative inference over goal\-conditioned subgoals and learns both conditional and unconditional flows, enabling classifier\-free guidance to introduce a goal\-directed bias at inference time\. By removing explicit value\-based guidance from high\-level planning, DSP generates reachable and goal\-directed subgoals through a generative model while retaining hierarchical execution\. Experiments on offline GCRL benchmarks demonstrate that DSP outperforms prior methods on a range of navigation and manipulation tasks, with particularly strong performance in maze environments that require multi\-step subgoal planning\.

## Drift Q\-Learning

**Authors:** Achraf Anas El Houssaini; Mohamad Hosein Danesh; Amin Abyaneh; Scott Fujimoto; Hsiu\-Chin Lin; David Meger

**ID:** 152901 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PZBv14gx3M>) | [PDF](<https://openreview.net/pdf?id=PZBv14gx3M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152901>)

Offline reinforcement learning requires improving a policy from fixed data while avoiding out\-of\-distribution actions with unreliable value estimates\. Diffusion and flow policies handle this trade\-off by modeling the behavior distribution to regularize the RL objective, but they require iterative denoising, solver integrations, and in more efficient variants, distillation or other approximations at inference\. We propose DriftQL, which combines a drift\-based behavioral regularizer with critic\-driven policy improvement\. The value signal biases the policy toward high\-value regions of the data support, while attraction and repulsion together keep generated actions near the data and prevent collapse onto a single mode\. DriftQL is implemented as a single network with a unified training objective and generates actions in a single forward pass\. On D4RL and OGBench, DriftQL consistently outperforms diffusion and flow methods, advancing the state of the art\. Under degraded data quality, where the baselines visibly struggle, DriftQL remains close to its clean\-data performance, positioning it as a promising alternative to diffusion and flow\-based methods while maintaining the simplicity and efficiency of deterministic approaches\.

## Foundation Pareto Flow Policy for Multi\-Objective Reinforcement Learning

**Authors:** Zhanjiang Yang; Lijun Sun; Yueming Li; Meng Li; Yijun Yang

**ID:** 150940 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eAjbjgXFPE>) | [PDF](<https://openreview.net/pdf?id=eAjbjgXFPE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150940>)

The overarching goal of reinforcement learning \(RL\) is to efficiently optimize the agent's policy for various environments, tasks, dynamics, and even user preferences, which often consist of multiple and potentially conflicting rewards/objectives\. This necessitates the learning of Pareto\-optimal policies that can navigate different trade\-offs among objectives\. However, existing multi\-objective RL \(MORL\) methods, whether trained online or offline, are typically limited to task\- or objective\-specific policy learning and do not address generalization of learned skills to unseen tasks/objectives\. In this work, we propose the \*\*F\*\*oundation \*\*P\*\*areto \*\*F\*\*low \*\*P\*\*olicy \(\*\*FP2\*\*\) for MORL, inspired by the pre\-mid\-post\-training paradigm underlying recent foundation models\. Specifically, we instantiate FP2 as a multi\-modal diffusion transformer equipped with a likelihood\-free flow matching loss, enabling unified, scalable, and instructable learning of diverse Pareto\-optimal trajectories\.  We further develop a three\-stage training pipeline to gradually optimize the policy: \(1\) pre\-training on a large\-scale MORL dataset, \(2\) mid\-training on a carefully curated high\-quality dataset, and \(3\) post\-training on few collected trajectory data from new tasks and trade\-offs\. Empirical results demonstrate that FP2 consistently outperforms previous state\-of\-the\-arts on the D4MORL benchmark, achieving superior zero\-shot interpolation and extrapolation on complex Pareto manifolds as well as efficient few\-shot adaptation to new task/dynamics scenarios\.

## Trajectory\-Consistent Diffusion Policies for Offline Reinforcement Learning

**Authors:** Yichao Fu; Shangde Gao; Zhuoling Li; Wen Wang; Shangqi Gao; Ke Liu

**ID:** 149671 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oJ8GvcK2vI>) | [PDF](<https://openreview.net/pdf?id=oJ8GvcK2vI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149671>)

Diffusion policies have emerged as a powerful policy class for offline reinforcement learning \(RL\) due to their ability to model complex, multimodal action distributions through iterative denoising\. However, in offline RL, expressivity alone is not enough\. Generated actions are supposed to remain within value\-reliable regions of the action space to avoid extrapolation error\. We find that standard diffusion policies often produce unstable denoising trajectories whose intermediate and final action candidates drift toward weakly supported regions, making critic\-guided action selection unreliable and degrading teacher quality for one\-step distillation\. This issue is particularly pronounced on mixed\-quality offline datasets, where suboptimal behaviors amplify trajectory instability\. To address this problem, we propose Trajectory Consistency Rectification \(TCR\), a framework designed to promote denoising stability during both training and inference\. At inference time, TCR aggregates locally consistent, high\-value action candidates across denoising steps to suppress critic\-unreliable outliers\. During training, it adaptively reweights denoising steps to improve trajectory\-level coherence\.  We show that this stabilization provides a more reliable teacher for one\-step flow\-matching distillation\. Extensive experiments on D4RL and OGBench show that TCR consistently improves over diffusion\-policy baselines, with significant gains in sparse\-reward domains like AntMaze and Adroit\. Moreover, one\-step policies distilled from TCR achieve competitive performance among efficient single\-step methods\. These results suggest that enhancing the temporal consistency of denoising trajectories is a key ingredient for robust offline diffusion reinforcement learning\.

## Objective\-Aligned Amortized Inference for Offline Bayes\-Adaptive MDP Model Learning

**Authors:** Toru Hishinuma; Kei Senda

**ID:** 151331 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bKLjQijakE>) | [PDF](<https://openreview.net/pdf?id=bKLjQijakE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151331>)

Learning latent environment representations from offline datasets is an important challenge for Bayes\-adaptive Markov decision process model learning\. A key difficulty is that offline datasets collected under heterogeneous protocols can differ in state\-\-action visitation even when the underlying dynamics are identical\. Visitation\-decoupled objectives address this by evaluating transition predictive fit under a protocol\-independent reference distribution via a change of measure\. We show, however, that the resulting objective\-induced invariances need not be inherited by amortized inference\. An unconstrained encoder can depend on protocol\-induced visitation variations that are invisible to the objective, a structural failure mode we term \\emph\{amortization mismatch\}\. To address this issue, we formalize an \\emph\{objective\-aligned\} design principle as an objective\-\-inference compatibility condition: the encoder should factor through the objective\-induced dataset signature\. We instantiate this principle in multiple set\-encoder families and, through targeted experiments, provide evidence that objective\-aligned encoders improve posterior consistency and can mitigate downstream planning discrepancy across protocols\.

## Behavioral Foundation Models for Quality Diversity

**Authors:** Nazim Bendib; Nicolas Perrin\-Gilbert; Olivier Sigaud

**ID:** 148386 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yFRrEkCBNX>) | [PDF](<https://openreview.net/pdf?id=yFRrEkCBNX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148386>)

Behavioral Foundation Models \(BFMs\) are an emerging paradigm in reinforcement learning, playing a role analogous to large language models in natural language processing: they have shown remarkable versatility, enabling zero\-shot performance, fast imitation, and online adaptation, all by exploiting the structure of a latent space\. In this work, we investigate whether the latent behavioral space induced by BFMs can serve as an effective search space to discover large repertoires of behaviorally diverse and high\-performing policies through Quality\-Diversity \(QD\) methods\. While QD methods generally search directly in high\-dimensional policy parameter space, in this paper, we present BFM\-QD, a framework that performs QD search in the compact latent space of a BFM\. We further show that the BFM\-QD framework provides a closed\-form, gradient\-free policy improvement operator that approximates a policy gradient update, but requires no critic training and no backpropagation\. Across continuous\-control benchmarks spanning dense locomotion, sparse navigation, and contact\-rich manipulation, BFM\-QD consistently outperforms parameter\-space baselines, with particularly stark gains in sparse and deceptive settings, where all existing QD methods collapse to near\-zero performance\. These results show the effectiveness of the BFM\-QD framework, benefiting from the synergy between dimensionality reduction of the search space and offline pretraining from diverse behavioral data\. This positions BFMs as a general\-purpose backbone for QD optimization, extending their utility beyond zero\-shot task solving to the discovery of diverse behavioral repertoires\.

## Fisher Decorator: Refining Flow Policy via A Local Transport Map

**Authors:** Xiaoyuan Cheng; Haoyu Wang; Wenxuan Yuan; Ziyan Wang; Zonghao Chen; Li Zeng; Zhuo Sun

**ID:** 151066 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dDvDTFE06y>) | [PDF](<https://openreview.net/pdf?id=dDvDTFE06y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151066>)

Recent advances in flow\-based offline reinforcement learning \(RL\) have achieved strong performance by parameterizing policies via flow matching\. However, they still face critical trade\-offs among expressiveness, optimality, and efficiency\. In particular, existing flow policies interpret the $L\_2$ regularization as an upper bound of the 2\-Wasserstein distance \($W\_2$\), which can be problematic in offline settings\. This issue stems from a fundamental geometric mismatch: the behavioral policy manifold is inherently anisotropic, whereas the $L\_2$ \(or upper bound of $W\_2$\) regularization is isotropic and density\-insensitive, leading to systematically misaligned optimization directions\. To address this, we revisit offline RL from a geometric perspective and show that policy refinement can be formulated as a local transport map—an initial flow policy augmented by a residual displacement\. By analyzing the induced density transformation, we derive a local quadratic approximation of the KL\-constrained objective governed by the Fisher information matrix, enabling a tractable anisotropic optimization formulation\. By leveraging the score function embedded in the flow velocity, we obtain a corresponding quadratic constraint for efficient optimization\. Our results reveal that the optimality gap in prior methods arises from their isotropic approximation\. In contrast, our framework achieves a controllable approximation error within a provable neighborhood of the optimal solution\. Extensive experiments demonstrate state\-of\-the\-art performance across diverse offline RL benchmarks\.

## Dynamics\-Informed Adaptive Offline RL for Real\-Time Tokamak Plasma Control

**Authors:** Rohit Sonker; Xiaoyan Hu; Hiro J Kaga; Andrew Rothstein; Jiayu Chen; Egemen Kolemen; Jeff Schneider

**ID:** 151856 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XPCEsmysv7>) | [PDF](<https://openreview.net/pdf?id=XPCEsmysv7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151856>)

Tracking plasma profiles, such as electron temperature and rotation, remains a challenging task in tokamak nuclear fusion\. While RL\-based approaches offer a promising path for multi\-input\-multi\-output control systems, existing frameworks overlook two key obstacles:  partial observability of plasma dynamics and the diagnostic mismatch between offline training and online execution\. We propose a novel offline RL framework to address these challenges\. Specifically, we train the control policy to condition on the latent context that is extracted from a trained plasma dynamics model\. This dynamics\-informed latent context encodes useful information about operating regimes, enabling the policy to adapt as the plasma evolves\. To mitigate the gap between offline and real\-time observation, we learn a converter that maps plasma diagnostics reconstructed offline to their real\-time\-observable counterparts, thereby exposing policy training to the real\-time plasma diagnostics available in live experiments\. In offline evaluations, the proposed method substantially improves tracking performance and robustness across a diverse set of discharges\. We report real\-time deployment results on DIII\-D Tokamak Fusion Facility, showing feasibility under challenging actuator conditions\.

## Offline Reinforcement Learning for Plasma Control in Nuclear Fusion: Codebase and Benchmark

**Authors:** YANG FU; Haomin Bao; Rohit Sonker; Xiaoyan Hu; Aravind Venugopal; Jeff Schneider; Jiayu Chen

**ID:** 139831 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=26aiOdbzEW>) | [PDF](<https://openreview.net/pdf?id=26aiOdbzEW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139831>)

Offline reinforcement learning \(RL\) offers a promising route for developing plasma controllers from historical tokamak data, since online trial\-and\-error on real devices is costly and risky\. However, progress in this direction remains difficult to measure due to the lack of a standardized offline RL benchmark for realistic multi\-actuator, long\-horizon plasma control problems in nuclear fusion\. We introduce RL4F, an Offline Reinforcement Learning Benchmark for Plasma Control in Nuclear Fusion, providing closed\-loop evaluation environments and baseline comparisons across four full\-profile tracking tasks: rotation, density, temperature, and pressure\. The dynamics function underlying the evaluation environment is built from historical discharge data from DIII\-D, a real\-world Tokamak\. We evaluate a broad set of imitation learning and offline RL baselines under a unified protocol\. We find that offline model\-based RL methods obtain the best average performance on most objectives, although no single method dominates all tasks, highlighting the importance of dynamics modeling in complex, long\-horizon plasma control tasks\. To foster further research, we open\-source the codebase, datasets, and evaluation framework, providing a benchmark not only for the fusion community but also for algorithm development in offline RL\. Our data and code are available at https://anonymous\.4open\.science/r/Anonymous\-B71F

## DaCe\-DT: Data\-Centric Offline Multi\-Task Reinforcement Learning via Adaptive Prompts and Trajectory Correction for Heterogeneous Tasks

**Authors:** Shudong Wang; Xinfei Wang; Chenhao Zhang; Shanchen Pang; Wenhao Ji; Haiyuan Gui; Meng Han; Xiaojian Liao

**ID:** 156146 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=01tycO9CPF>) | [PDF](<https://openreview.net/pdf?id=01tycO9CPF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156146>)

Offline multi\-task reinforcement learning \(Offline MTRL\) heavily depends on the quality and distribution of pre\-collected data\. However, existing methods mainly focus on algorithmic optimization, with less emphasis on data\-level improvements to enhance learning ability and generalization performance\. This paper, from a data perspective, reveals three key bottlenecks that limit Offline MTRL performance:\(i\) ineffective utilization of prompts length under diverse task complexities, and \(ii\) semantic irrelevance of randomly sampled prompt segments, \(iii\) misleading supervision induced by fragmented and discontinuous trajectories\. To address these challenges, we propose DaCe\-DT, a robust offline MTRL framework designed to be insensitive to heterogeneous task complexities and data quality, featuring length\-gated prompt masking \(LGPM\), retrieval\-augmented prompt construction \(RAPC\), and value\-adaptive return calibration \(VARC\)\. Together, these mechanisms enable DaCe\-DT to deliver data\-centric prompt adaptation and trajectory refinement, resulting in robust multi\-task generalization and stable policy learning amid heterogeneous offline data and tasks\. Experimental results on Meta\-World show that DaCe\-DT consistently outperforms state\-of\-the\-art methods, achieving an average improvement of 11\.73\\% on optimal datasets and an improvement of 13\.34\\% on suboptimal datasets, demonstrating its effectiveness in learning stably from imperfect data and improving overall multi\-task performance\.

## Robust Offline Reinforcement Learning against Out\-of\-Distribution Dynamics in Autonomous Driving

**Authors:** Haozhe Liu; Jie Wang; Rui Yang; Chunyang Liu; Xize Liang

**ID:** 148793 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v2pep2iQuH>) | [PDF](<https://openreview.net/pdf?id=v2pep2iQuH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148793>)

Real\-world autonomous driving data inherently exhibits out\-of\-distribution \(OOD\) dynamics, as diverse interactions and unpredictable human behaviors cause vehicle trajectory distributions to vary significantly across different scenarios, even for similar road structures\. Such OOD dynamics typically induce uncontrollable extrapolation errors in neural networks\. We observe that in offline reinforcement learning \(RL\), these errors manifest as heavy\-tailed estimates of action values with significant biases, which existing robust methods fail to address, hindering effective generalization\. To address this problem, we propose a robusT offline RL algorithm under heavy\-tailed action\-valUe eSTimates \(TRUST\), which models perturbed states associated with heavy\-tailed action\-value estimates to effectively mitigate such estimation biases\. Specifically, TRUST uses a first\-order gradient\-regularized target to model perturbed states that approximate data under worst\-case dynamics\. It then introduces a statistical measure to identify perturbations that induce heavy\-tailed action\-value estimates\. By re\-weighting the training objective to emphasize correcting these biased estimates, TRUST can reduce the heavy\-tailed behavior in action values for robustness against OOD driving data\. We further derive an error bound that justifies the gradient\-regularized target as an approximation to the robust Bellman target\. Extensive experiments on three large\-scale real\-world datasets show that TRUST achieves strong overall performance across all benchmarks, with a general performance improvement of 41\.21\\%\.

## Effect\-Driven Skill Abstractions for Offline Reinforcement Learning

**Authors:** Burcu Kılıç; David Drexel; Emre Ugur; Justus Piater

**ID:** 148749 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vLeZitFeKS>) | [PDF](<https://openreview.net/pdf?id=vLeZitFeKS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148749>)

We seek to learn discrete skill abstractions to facilitate long\-horizon, goal\-conditioned reinforcement\-learning \(RL\) tasks\. Recent approaches have shown success by quantizing actions via clustering or reconstruction\. However, these objectives lead to skills that are not directly related to what the current state affords or what the goal requires\. Instead, we argue that goal\-directed skills should be driven by how they affect the state of the agent\. To realize this, we introduce a novel quantization method for action chunks that optimizes next\-state predictions conditioned on the current state and action\. This objective encourages skills to be distinguished by the future states they lead to, resulting in a vocabulary that spans diverse outcomes reachable from a given state\. Our framework can easily be paired with common offline RL methods by replacing their continuous actor head with a discrete one that selects among the learned skills\. We can execute these skills in the environment by converting them back to continuous actions using a trained low\-level controller\. Experiments on benchmark navigation tasks largely show substantial and consistent improvements over both the continuous\-actor baselines and reconstruction\-based discretizations\.

## Automatic Constraint Policy Optimization based on Continuous Constraint Interpolation Framework for Offline Reinforcement Learning

**Authors:** Xinchen Han; Qiuyang Fang; Hossam Afifi; Michel Marot

**ID:** 151401 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=axBS5thYfz>) | [PDF](<https://openreview.net/pdf?id=axBS5thYfz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151401>)

Offline Reinforcement Learning \(RL\) relies on policy constraints to mitigate extrapolation error, where both the constraint form and constraint strength critically shape performance\. However, most existing methods commit to a single constraint family: weighted behavior cloning, density regularization, or support constraints, without a unified principle that explains their connections or trade\-offs\. In this work, we propose Continuous Constraint Interpolation \(CCI\), a unified optimization framework in which these three constraint families arise as special cases along a common constraint spectrum\. The CCI framework introduces a single interpolation parameter that enables smooth transitions and principled combinations across constraint types\. Building on CCI, we develop Automatic Constraint Policy Optimization \(ACPO\), a practical primal\-\-dual algorithm that adapts the interpolation parameter via a Lagrangian dual update\. Moreover, we establish a maximum\-entropy performance difference lemma and derive performance lower bounds for both the closed\-form optimal policy and its parametric projection\. Experiments on D4RL and NeoRL2 demonstrate robust gains across diverse domains, achieving state\-of\-the\-art performance overall\.

## Calibrated Safe Policy Improvement for Continuous Offline Reinforcement Learning

**Authors:** Federico Bianchi; Alessandro Farinelli; Alberto Castellini

**ID:** 148367 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yOfHpD0Pkv>) | [PDF](<https://openreview.net/pdf?id=yOfHpD0Pkv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148367>)

Safe Policy Improvement \(SPI\) aims to improve a baseline policy offline using fixed data while avoiding performance degradation with high probability\. Existing SPI methods work in discrete domains but do not extend to continuous control\. We propose Calibrated Safe Policy Improvement \(Cal\-SPI\), a Monte Carlo Tree Search\-based continuous SPI method that replaces count\-based support with calibrated model trust\. Cal\-SPI learns a deep ensemble dynamics model and calibrates ensemble disagreement on held\-out data through a Wilks\-style tolerance construction, turning raw uncertainty into a statistical certificate of one\-step model error\. This certificate defines a hard gate within model\-based tree search\. We provide a theoretical analysis showing that calibrated model trust and a baseline\-relative switching criterion yield a conditional PAC\-style improvement bound for gate\-certified root decisions\. Experiments across three MuJoCo continuous domains show that Cal\-SPI avoids performance degradation in low\-data regimes and improves over the baseline once calibrated model trust becomes reliable\.

## Temporal Consistency Improves Generalization in Contextual Offline Meta Reinforcement Learning

**Authors:** Mohammadreza Nakhaeinezhad; Aidan Scannell; Kevin Luck; Joni Pajarinen

**ID:** 153572 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KOlHCpKZ40>) | [PDF](<https://openreview.net/pdf?id=KOlHCpKZ40>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153572>)

Offline meta\-reinforcement learning seeks to learn a policy that generalizes to new related tasks online\. Context\-based methods infer a task representation from transition histories, yet learning an effective task representation without supervision remains challenging\. Existing methods relying on contrastive learning learn discriminative task representations, but fail to identify task\-specific dynamics, while relying on reconstruction can be insufficient to model long\-horizon dependencies, limiting generalization to new tasks\. We investigate the impact of temporal consistency in latent space on task representation learning, showing that enforcing multi\-step predictions in latent space encourages task representations that are able to capture task\-dependent dynamics while preventing representation collapse\. We provide theoretical analysis characterizing sources of error in value estimation and show through extensive experiments on MuJoCo, Contextual DeepMind Control, and MetaWorld benchmarks that temporal consistency significantly improves both zero\-shot and few\-shot generalization\.

## CS\-DICE: Offline Reinforcement Learning with Coherent Occupancy Regularization

**Authors:** Jeremías Figueiredo Paschmann

**ID:** 153299 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MI1dfW9mTi>) | [PDF](<https://openreview.net/pdf?id=MI1dfW9mTi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153299>)

Offline RL methods often regularize toward the empirical occupancy of the dataset, but this reference can mismatch the deployed policy\. In partially observed or decentralized settings, data may be pooled from hidden modes, histories, or conventions that are unavailable at execution time\. The pooled occupancy can then require incompatible action laws for the same deployed input, or joint correlations that a decentralized policy class cannot represent, so regularization toward it can favor a low return projection\. We formalize this failure through \*reference coherence\*: a reference is coherent when it does not rely on information hidden from the deployed policy, and when its action law is representable by that policy\. We propose \*Closest Slice DICE \(CS\-DICE\)\*, a DICE variant that regularizes toward a coherent slice of the training data rather than the pooled occupancy\. A hard or soft selector chooses the slice used as the reference term, while the deployed observations, actor class, and factorization constraints remain unchanged\. Most of the results focus on the soft reverse\-$KL$ case, where the selector only changes the reference used by an otherwise standard DICE update\. Controlled examples show that incoherent pooled references collapse to suboptimal behavior, while CS\-DICE recovers high return policies when the selected or inferred slice is coherent with the deployed interface\. We also identify a boundary case where pooling is benign because the relevant signal is revealed before the conflict\. Finally, a CS\-CoMA\-DICE study on MaMuJoCo shows that selected references can be integrated into a neural cooperative MARL pipeline while preserving decentralized execution\.

## LASER: Latent Space Adjoint Matching for Support Constrained Entropy Regularized Offline RL

**Authors:** Songyuan Zhang; Oswin So; Eric Yu; Matthew Cleaveland; Peter Crowley\-Dolen; Chuchu Fan

**ID:** 149822 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=n2D2Gf0jYw>) | [PDF](<https://openreview.net/pdf?id=n2D2Gf0jYw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149822>)

While offline reinforcement learning \(RL\) enables policy optimization from static datasets without costly online interaction, it remains bottlenecked by the risk of executing out\-of\-distribution \(OOD\) actions\. Recent generative\-model\-based approaches mitigate this by performing RL within a constrained latent space, but they often sacrifice policy expressiveness or suffer from vanishing gradients\. In this work, we identify that entropy regularization is essential to prevent mode collapse in latent\-space RL, though applying it without introducing numerical instability or compromising expressiveness remains a significant open challenge\. We introduce LASER, a novel offline RL algorithm that applies latent\-space adjoint matching to achieve entropy\-regularized RL with expressive flow policies\. By design, our approach satisfies dataset support constraints and prevents mode collapse\. Through comprehensive experiments on 40 challenging OGBench tasks with varying dataset qualities, we show that LASER achieves state\-of\-the\-art performance\. Notably, LASER uses a single, constant set of hyperparameters to outperform baselines even with their hand\-tuned hyperparameters, highlighting its robust applicability\.

## Model\-based Bootstrap of Controlled Markov Chains

**Authors:** Ziwei Su; Imon Banerjee; Diego Klabjan

**ID:** 156045 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0pYlkhyLTf>) | [PDF](<https://openreview.net/pdf?id=0pYlkhyLTf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156045>)

We propose and analyze a model\-based bootstrap for transition kernels in finite controlled Markov chains \(CMCs\) with possibly nonstationary or history\-dependent control policies, a setting that arises naturally in offline reinforcement learning \(RL\) when the behavior policy generating the data is unknown\. We establish distributional consistency of the bootstrap transition estimator in both a single long\-chain regime and the episodic offline RL regime\. The key technical tools are a novel bootstrap law of large numbers \(LLN\) for the visitation counts and a novel use of the martingale central limit theorem \(CLT\) for the bootstrap transition increments\. We extend bootstrap distributional consistency to the downstream targets of offline policy evaluation \(OPE\) and optimal policy recovery \(OPR\) via the delta method by verifying Hadamard differentiability of the Bellman operators, yielding asymptotically valid confidence intervals for value and $Q$\-functions\. Experiments on the RiverSwim problem show that the proposed bootstrap confidence intervals \(CIs\), especially the percentile CIs, outperform the episodic bootstrap and plug\-in CLT CIs, and are often close to nominal \($50\\%$, $90\\%$, $95\\%$\) coverage, while the baselines are poorly calibrated at small sample sizes and short episode lengths\.

## A$^2$IQL: Adaptive Asymmetric Implicit Q Learning for Automated Warehouse Consolidation

**Authors:** Guangyi Liu; Andrea Angiuli; Mirko Ristivojevic; Joseph W Durham; Michael Caldara; Michael Zavlanos

**ID:** 148721 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vXRQ63UjQR>) | [PDF](<https://openreview.net/pdf?id=vXRQ63UjQR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148721>)

We apply offline reinforcement learning to large\-scale warehouse consolidation, an application that requires ranking tens of thousands of candidates at each decision epoch with an architecture that scales gracefully with variable\-cardinality action spaces\. Since the available reward signal is only an approximation of the true target\-domain objective, the policy must also transfer robustly\. We propose a two\-stage framework, Asymmetric Implicit Q\-Learning \(AIQL\) and its adaptive cross\-domain extension A$^2$IQL\. First, AIQL learns a scoring policy from fixed offline consolidation logs by decoupling a per\-candidate scoring actor from an aggregate\-statistic critic, keeping value estimation tractable and within the support of logged data\. Second, A$^2$IQL adapts the source\-domain\-trained policy to a new target objective using scarce target\-domain data: a Bayesian reward predictor supplies an uncertainty\-penalized conservative bonus that modifies only the advantage\-weighted actor extraction, leaving the source critic unchanged\. On a single\-domain benchmark, AIQL improves throughput by 20% over a heuristic baseline using offline data alone\. When adapted to a new target objective via A$^2$IQL, the method outperforms source\-only training, data pooling, and off\-dynamics baselines by up to 23% under a $30\{:\}1$ source\-to\-target data ratio while achieving the lowest variance across all methods\.

## Flow Matching for Offline Reinforcement Learning with Discrete Actions

**Authors:** Fairoz Nower Khan; Nabuat Zaman Nahim; Ruiquan Huang; Haibo Yang; Peizhong Ju

**ID:** 153771 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ImlV9V1zY1>) | [PDF](<https://openreview.net/pdf?id=ImlV9V1zY1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153771>)

Generative policies based on diffusion models and flow matching have shown strong promise for offline reinforcement learning \(RL\), but their applicability remains largely confined to continuous action spaces\. To address a broader range of offline RL settings, we extend flow matching to a general framework that supports discrete action spaces with multiple objectives\. Specifically, we replace continuous flows with continuous\-time Markov chains, trained using a Q\-weighted flow matching objective\. We then extend our design to multi\-agent settings, mitigating the exponential growth of joint action spaces via a factorized conditional path\. We theoretically show that, under idealized conditions, optimizing this objective recovers the optimal policy\. Extensive experiments further demonstrate that our method performs robustly across diverse settings and benchmarks, including high\-dimensional control, multi\-agent games, and dynamically changing preferences over multiple objectives, while outperforming traditional offline RL methods in practical multi\-modal decision\-making scenarios\. Our discrete framework can also be applied to continuous\-control problems through action quantization, providing a flexible trade\-off between representational complexity and performance\.

## CURe: Conservative Unlearning with Soft\-Gating Regularization for Offline Reinforcement Learning

**Authors:** Bijal Bharadva; Manuel Kelly; Yingxue Zhang; Xin Zhang

**ID:** 155375 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=66b4l76IM4>) | [PDF](<https://openreview.net/pdf?id=66b4l76IM4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155375>)

Offline reinforcement learning \(RL\) trains policies from static datasets, but deployed agents may later need to attenuate the influence of specific data for privacy, safety, or fairness\. This is challenging in the overlap regime, where the forget set and retained data share state\-action support: unlearning cannot be uniform as suppressing values on shared support can inadvertently erase behaviors required for high performance\. We propose Conservative Unlearning with soft\-gating Regularization \(CURE\), a selective unlearning framework tailored to overlap\. CURE assigns each forget trajectory an overlap\-interference score via cosine alignment between its temporal difference \(TD\) semi\-gradient and a retained reference gradient, and uses it to soft\-gate i\) conservative, state\-conditional critic suppression relative to a retained baseline and ii\) coupled actor updates, selectively modulating forgetting based on interference, reducing impact on aligned data\. We provide a first\-order analysis showing that CURE descends a forget surrogate while controlling retained drift via alignment\-dependent coupling\. Across MuJoCo benchmarks and offline RL backbones, CURE consistently improves the forget\-utility trade\-off over baselines, achieving low auditor\-detectable forget influence with near\-original returns at a fraction of retraining cost\.

## DARPAN: Controllability\-Aware Residual Filtering for Pretrained Physical Control

**Authors:** Anany Gupta; Ye Zhou; Qi Li

**ID:** 152813 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QENhKkAMiO>) | [PDF](<https://openreview.net/pdf?id=QENhKkAMiO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152813>)

Physical control systems, such as building HVAC systems, thermal processes, and power\-grid assets, often involve delayed dynamics, safety constraints, and costly online interaction\. Because the effect of a control action may appear after several time steps, effective control often requires reasoning over histories of states, actions, and outcomes\. Pretrained sequence controllers, such as Decision Transformers, provide a natural way to model this history\-dependent control problem by learning policies from offline trajectories, reducing the need for expensive online retraining\. However, their performance can degrade when deployment conditions differ from the training data\. In building control, for example, actuator wear, sensor drift, occupancy changes, and weather variation can all affect the observed response of the system to the same control action\. Online adaptation is therefore needed, but raw prediction error is not always a reliable signal for updating the controller\. The key challenge is to identify which part of the observed mismatch is action\-sensitive and should guide policy adaptation\. To address this challenge, we propose DARPAN, a Drift\-Aware Residual Policy Adapter Network for pretrained physical control\. DARPAN keeps the pretrained Decision Transformer frozen and performs online adaptation only through lightweight residual adapters, preserving the offline policy and limiting the number of trainable parameters\. Instead of updating from raw prediction error, DARPAN uses a controllability filter trained in simulation to extract the action\-sensitive part of the residual and filter out mismatch that is weakly related to the controller's actions\. During deployment, a frozen predictor estimates the next state, the controllability filter produces a filtered residual, and a short history of filtered residuals forms a drift signature\. This signature is used to select an existing adapter or create a new one when a persistent drift pattern appears\. We benchmark DARPAN on SustainGym under actuator faults, sensor drift, delays, and external disturbances\. DARPAN reduces the drift\-induced performance loss by 31\.7% and uses 63% fewer online parameters than Online DT\. We release anonymized code and experiment configurations at https://huggingface\.co/Darpan2026\.

## When Policies Cannot Be Retrained: A Unified Closed\-Form View of Post\-Training Steering in Offline Reinforcement Learning

**Authors:** Elias Hossain; Mohammad J Basher; Ivan Garibay; Ozlem Garibay; Niloofar Yousefi

**ID:** 152992 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OnU82otbDI>) | [PDF](<https://openreview.net/pdf?id=OnU82otbDI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152992>)

Offline RL can learn effective policies from fixed datasets, but deployment objectives often shift after training, while the trained actor may be frozen due to data, cost, or governance constraints\. We study deployment\-time adaptation of frozen offline actors using Product\-of\-Experts \(PoE\) composition with a goal\-conditioned prior\. Our main practical finding is graceful degradation rather than universal improvement: with degraded or random priors, precision\-weighted PoE remains anchored to the frozen actor, whereas additive and prior\-only adaptation often collapse, and a KL\-budget selector typically reaches a near\-oracle operating point\. We also clarify that, for diagonal\-Gaussian actors and priors, PoE with coefficient $\\alpha$ induces the same deterministic policy as KL\-regularized adaptation with $\\beta=\\alpha/\(1\-\\alpha\)$, with posterior covariance differences cancelling under deterministic action selection\. Across D4RL MuJoCo and AntMaze diagnostics, results reveal an actor\-competence ceiling: composition helps or preserves performance when the frozen actor is sufficiently competent, but cannot recover when the actor itself fails\. Swept CQL/IQL\-guided and SF/GPI baselines are competitive in some settings, but do not eliminate this regime boundary\. Thus, PoE/KL\-Reg is best viewed as an actor\-anchored safety layer for deployment\-time objective shift, not as a general return\-maximization method, with effectiveness governed by actor competence rather than knob choice\.

## Dynamic Treatment on Networks

**Authors:** Bengusu Nar; Jiguang Li; Veronika Rockova; Panos Toulis

**ID:** 151886 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XBaSY8b78r>) | [PDF](<https://openreview.net/pdf?id=XBaSY8b78r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151886>)

In networks, effective dynamic treatment allocation requires deciding both whom to treat and also when, so as to amplify policy impact through spillovers\. An early intervention at a well\-connected node can trigger cascades that change which nodes are worth targeting in the next period\. Existing treatment strategies under network interference are largely static while dynamic treatment frameworks typically ignore network structure altogether\. We integrate these perspectives and propose Q\-Ising, a three\-stage pipeline that \(i\) estimates network adoption dynamics via a Bayesian dynamic Ising model from a single observed panel, \(ii\) augments treatment adoption histories with continuous posterior latent states, and \(iii\) learns a dynamic policy via offline reinforcement learning\. The Bayesian mechanism enables uncertainty quantification over dynamic decisions, yielding posterior ensemble policies with interpretable spillover estimates\. We provide a finite\-sample regret upper bound that decomposes into standard offline\-RL uncertainty, network abstraction error, and first stage error in Ising state estimation\. We apply our method to data from Indian village microfinance networks and synthetic stochastic block models under simulated heterogeneous susceptible\-infected\-susceptible \(SIS\) dynamics and demonstrate that adaptive targeting outperforms static centrality benchmarks\.

## On the Complexity of Offline Reinforcement Learning with Q\*\-Approximation and Partial Coverage

**Authors:** Haolin Liu; Braham Snyder; Chen\-Yu Wei

**ID:** 149090 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=syfyAxAGkx>) | [PDF](<https://openreview.net/pdf?id=syfyAxAGkx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149090>)

We study offline reinforcement learning under $Q^\\star$\-approximation and partial coverage, a setting that motivates practical algorithms such as Conservative $Q$\-Learning \(CQL\) \[KZTL20\] but has received limited theoretical attention\. Our work is inspired by the following open question: \\emph\{Are $Q^\\star$\-realizability and Bellman completeness sufficient for sample\-efficient offline RL under partial coverage?\}  We answer this question in the negative through an information\-theoretic lower bound\. To identify additional structure that enables sample\-efficient offline RL under partial coverage, we introduce a general decision\-estimation framework, inspired by model\-free decision\-estimation coefficients \(DEC\) for online RL \[FGO$^\+$23, LWZ25b\]\. Our framework decomposes the complexity of offline RL into two parts: the \\emph\{decision complexity\} and the \\emph\{value estimation error\}\. This decomposition allows us to study the two sub\-problems in a modular way\. Our result not only unifies existing results in the $Q^\\star$\-approximation and partial coverage regime \[CJ22, UKLS23\], but further improves and generalizes them\. On the decision complexity side, our improvement includes: the first $\\epsilon^\{\-2\}$ sample complexity bound for soft $Q$\-learning under partial coverage that improves \[UKLS23\]'s $\\epsilon^\{\-4\}$ bound, the removal of the need for additional online interaction in the gap\-dependent setting of \[CJ22\], and new learnable settings beyond the above two cases\. On the value estimation side, we provide the first characterization of offline learnability for general low\-Bellman\-rank MDPs \[JKA$^\+$17, DKL$^\+$21, JLM21\], a canonical online RL setting that has remained unexplored in offline RL outside special cases\. As a side contribution, our techniques give the first analysis of CQL in the function approximation setting\.

## \[Re\] FairDICE: A Fair Tradeoff in Multi\-objective Offline RL

**Authors:** Peter Adema; Karim Galliamov; Aleksey Evstratovskiy; Ross Geurts

**ID:** 157017 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/session/137650>)

Offline Reinforcement Learning \(RL\) is an emerging field of RL in which policies are learned solely from demonstrations\. Within offline RL, some environments involve balancing multiple objectives, but existing multi\-objective offline RL algorithms do not provide an efficient way to find a fair compromise\. FairDICE seeks to fill this gap by adapting OptiDICE \(an offline RL algorithm\) to automatically learn weights for multiple objectives to e\.g\. incentivise fairness among objectives\. As this would be a valuable contribution, this replication study examines the replicability of claims made regarding FairDICE\. We find that many theoretical claims are supported, but an error in the code reduces FairDICE to standard behaviour cloning in continuous environments, and many important hyperparameters were underspecified\. After rectifying this, we show in experiments extending the original paper that FairDICE can scale to complex environments and high\-dimensional rewards, though it can be reliant on \(online\) hyperparameter tuning\. We conclude that FairDICE is a theoretically interesting method, but the experimental justification requires significant revision\.

