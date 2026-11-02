# Reinforcement Learning / Batch Offline

强化学习 / 离线强化学习

42 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Behavioral Foundation Models for Quality Diversity

**Authors:** Nazim Bendib; Nicolas Perrin\-Gilbert; Olivier Sigaud

**ID:** 148386 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yFRrEkCBNX>) | [PDF](<https://openreview.net/pdf?id=yFRrEkCBNX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148386>)

Behavioral Foundation Models \(BFMs\) are an emerging paradigm in reinforcement learning, playing a role analogous to large language models in natural language processing: they have shown remarkable versatility, enabling zero\-shot performance, fast imitation, and online adaptation, all by exploiting the structure of a latent space\. In this work, we investigate whether the latent behavioral space induced by BFMs can serve as an effective search space to discover large repertoires of behaviorally diverse and high\-performing policies through Quality\-Diversity \(QD\) methods\. While QD methods generally search directly in high\-dimensional policy parameter space, in this paper, we present BFM\-QD, a framework that performs QD search in the compact latent space of a BFM\. We further show that the BFM\-QD framework provides a closed\-form, gradient\-free policy improvement operator that approximates a policy gradient update, but requires no critic training and no backpropagation\. Across continuous\-control benchmarks spanning dense locomotion, sparse navigation, and contact\-rich manipulation, BFM\-QD consistently outperforms parameter\-space baselines, with particularly stark gains in sparse and deceptive settings, where all existing QD methods collapse to near\-zero performance\. These results show the effectiveness of the BFM\-QD framework, benefiting from the synergy between dimensionality reduction of the search space and offline pretraining from diverse behavioral data\. This positions BFMs as a general\-purpose backbone for QD optimization, extending their utility beyond zero\-shot task solving to the discovery of diverse behavioral repertoires\.

## Fisher Decorator: Refining Flow Policy via  A Local Transport Map

**Authors:** Xiaoyuan Cheng; Haoyu Wang; Wenxuan Yuan; Ziyan Wang; Zonghao Chen; Li Zeng; Zhuo Sun

**ID:** 151066 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dDvDTFE06y>) | [PDF](<https://openreview.net/pdf?id=dDvDTFE06y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151066>)

Recent advances in flow\-based offline reinforcement learning \(RL\) have achieved strong performance by parameterizing policies via flow matching\. However, they still face critical trade\-offs among expressiveness, optimality, and efficiency\. In particular, existing flow policies interpret the $L\_2$ regularization as an upper bound of the 2\-Wasserstein distance \($W\_2$\), which can be problematic in offline settings\. This issue stems from a fundamental geometric mismatch: the behavioral policy manifold is inherently anisotropic, whereas the $L\_2$ \(or upper bound of $W\_2$\) regularization is isotropic and density\-insensitive, leading to systematically misaligned optimization directions\. To address this, we revisit offline RL from a geometric perspective and show that policy refinement can be formulated as a local transport map—an initial flow policy augmented by a residual displacement\. By analyzing the induced density transformation, we derive a local quadratic approximation of the KL\-constrained objective governed by the Fisher information matrix, enabling a tractable anisotropic optimization formulation\. By leveraging the score function embedded in the flow velocity, we obtain a corresponding quadratic constraint for efficient optimization\. Our results reveal that the optimality gap in prior methods arises from their isotropic approximation\. In contrast, our framework achieves a controllable approximation error within a provable neighborhood of the optimal solution\. Extensive experiments demonstrate state\-of\-the\-art performance across diverse offline RL benchmarks\.

## Horizon Adaptive Offline Policy Learning via Value Stitching

**Authors:** Kexin ZHENG; Xianyuan Zhan; Xintao Yan

**ID:** 154836 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Aak239DsQk>) | [PDF](<https://openreview.net/pdf?id=Aak239DsQk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154836>)

_Abstract unavailable from the accessible public sources._

## When Do Learned State Representations Break Sensitivity Analysis?

**Authors:** Siyu WANG; Xiaocong Chen; Quan Z Sheng; Lina Yao

**ID:** 150594 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h15TpswrQp>) | [PDF](<https://openreview.net/pdf?id=h15TpswrQp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150594>)

_Abstract unavailable from the accessible public sources._

## Fisher Decorator: Refining Flow Policy via  A Local Transport Map

**Authors:** Xiaoyuan Cheng; Haoyu Wang; Wenxuan Yuan; Ziyan Wang; Zonghao Chen; Li Zeng; Zhuo Sun

**ID:** 151066\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151066

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

## Distribution Corrected Decision Transformer for Offline Reinforcement Learning with Imbalanced Datasets

**Authors:** Chufan Chen; Bohao Tang; Dejiang Chen; zhang chao; Ruiqi Li; Hanbin Zhao; Hui Qian

**ID:** 150474 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hmdpCpN3Kt>) | [PDF](<https://openreview.net/pdf?id=hmdpCpN3Kt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150474>)

_Abstract unavailable from the accessible public sources._

## Variance\-Averse n\-Step Offline Reinforcement Learning for Sparse Long\-Horizon Environments

**Authors:** Guhyeon Kang; Minhae Kwon

**ID:** 154788 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AytpRK1tDD>) | [PDF](<https://openreview.net/pdf?id=AytpRK1tDD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154788>)

Generative actors are transforming offline reinforcement learning \(RL\) by enabling expressive policy classes that model complex action distributions\. However, this expressiveness also exposes a key challenge in heterogeneous datasets: generative policies can reproduce unreliable action modes whose return distributions exhibit high variance, occasionally yielding high returns by chance but lacking consistency\. Consequently, maximizing the expected Q\-value alone is insufficient for identifying reliable actions\. We propose VAN\-Flow \(Variance\-Averse n\-step Flow\), a framework that promotes reliable actions in generative offline RL\. VAN\-Flow combines \(i\) a categorical distributional critic, \(ii\) a variance\-averse expectation operator that smoothly reweights atom probabilities to favor actions with both high returns and low dispersion, and \(iii\) a flow\-matching generative actor guided via rejection sampling\. Unlike CVaR or mean\-\-variance objectives, the operator redistributes probability mass over the categorical return distribution without hard truncation or auxiliary penalty terms\. Across more than 40 tasks from D4RL and OGBench, VAN\-Flow consistently outperforms strong baselines, with the largest gains in long\-horizon and high\-variance regimes where reliable action selection becomes critical\.

## ExpRFT: Exponential Reward\-Weighted Fine\-Tuning for Offline RL in Multi\-Turn Dialogue

**Authors:** Huy Dao; Lizi Liao

**ID:** 154489 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DE0tMV3YZo>) | [PDF](<https://openreview.net/pdf?id=DE0tMV3YZo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154489>)

Offline reinforcement learning is a standard paradigm for fine\-tuning Large Language Models \(LLMs\) on multi\-turn dialogue, where on\-policy rollouts and reward annotations are costly\. Within this paradigm, reward\-weighted supervised fine\-tuning has emerged as an efficient approach, weighting each trajectory's log\-likelihood by a reward\-dependent coefficient\. We show that existing reward\-weighted SFT methods are specific members of a broader affine reward\-weighted SFT class, and identify two structural limitations that hold for every member of this class: every centered member yields an unbounded\-below loss, and no member admits a hyperparameter for attenuating reward noise\. We introduce ExpRFT as a principled escape from this class — an exponential reweighting of the standardized advantage at a tunable temperature that restores a well\-posed objective and provides a noise\-control dial\. ExpRFT parallels Advantage\-Weighted Regression \(AWR\) in spirit, yet requires no per\-action learned critic and adds no infrastructure cost beyond standard SFT\. On six multi\-turn dialogue benchmarks under reasoning and clarifying\-question protocols, ExpRFT outperforms rejection\-sampling, preference\-based, value\-based, and reward\-weighted baselines\. In the near\-mean trajectory regime, where weight noise dominates the advantage signal, ExpRFT remains stable under injected reward noise while baselines significantly degrade\.

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

## Calibrated Safe Policy Improvement for Continuous Offline Reinforcement Learning

**Authors:** Federico Bianchi; Alessandro Farinelli; Alberto Castellini

**ID:** 148367 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yOfHpD0Pkv>) | [PDF](<https://openreview.net/pdf?id=yOfHpD0Pkv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148367>)

Safe Policy Improvement \(SPI\) aims to improve a baseline policy offline using fixed data while avoiding performance degradation with high probability\. Existing SPI methods work in discrete domains but do not extend to continuous control\. We propose Calibrated Safe Policy Improvement \(Cal\-SPI\), a Monte Carlo Tree Search\-based continuous SPI method that replaces count\-based support with calibrated model trust\. Cal\-SPI learns a deep ensemble dynamics model and calibrates ensemble disagreement on held\-out data through a Wilks\-style tolerance construction, turning raw uncertainty into a statistical certificate of one\-step model error\. This certificate defines a hard gate within model\-based tree search\. We provide a theoretical analysis showing that calibrated model trust and a baseline\-relative switching criterion yield a conditional PAC\-style improvement bound for gate\-certified root decisions\. Experiments across three MuJoCo continuous domains show that Cal\-SPI avoids performance degradation in low\-data regimes and improves over the baseline once calibrated model trust becomes reliable\.

## Localized Dynamics\-Aware Domain Adaption for Off\-Dynamics Offline Reinforcement Learning

**Authors:** Zhangjie Xia; Yu Yang; Pan Xu

**ID:** 151978 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WPPtcvFivw>) | [PDF](<https://openreview.net/pdf?id=WPPtcvFivw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151978>)

Off\-dynamics offline reinforcement learning \(RL\) aims to learn a policy for a target domain using limited target data and abundant source data collected under different transition dynamics\. Existing methods typically address dynamics mismatch either globally over the state space or via pointwise data filtering; these approaches can miss localized cross\-domain similarities or incur high computational cost\. We propose Localized Dynamics\-Aware Domain Adaptation \(LoDADA\), which exploits localized dynamics mismatch to better reuse source data\. LoDADA clusters transitions from source and target datasets and estimates cluster\-level dynamics discrepancy via domain discrimination\. Source transitions from clusters with small discrepancy are retained, while those from clusters with large discrepancy are filtered out\. This yields a fine\-grained and scalable data selection strategy that avoids overly coarse global assumptions and expensive per\-sample filtering\. We provide theoretical insights and extensive experiments across environments with diverse global and local dynamics shifts\. Results show that LoDADA consistently outperforms state\-of\-the\-art off\-dynamics offline RL methods by better leveraging localized distribution mismatch\.

## Bridging Safety and Performance in Autonomous Systems using Offline Reinforcement Learning

**Authors:** Mumuksh Tayal; Manan Tayal; Ravi Prakash

**ID:** 150431 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i6JA2toOiB>) | [PDF](<https://openreview.net/pdf?id=i6JA2toOiB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150431>)

_Abstract unavailable from the accessible public sources._

## Refining Compositional Diffusion for Reliable Long\-Horizon Planning

**Authors:** Kyowoon Lee; Yunhao Luo; Anh Tong; Jaesik Choi

**ID:** 148736 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vQROb0Us1c>) | [PDF](<https://openreview.net/pdf?id=vQROb0Us1c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148736>)

_Abstract unavailable from the accessible public sources._

## Diffusion Subgoal Planning for Long\-Horizon Offline Goal\-Conditioned Reinforcement Learning

**Authors:** Hengrui Zhang; Yuhu Cheng; C\.L\.Philip Chen; Xuesong Wang

**ID:** 150829 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ezp2TvIFGP>) | [PDF](<https://openreview.net/pdf?id=ezp2TvIFGP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150829>)

Offline goal\-conditioned reinforcement learning \(GCRL\) learns goal\-directed policies from reward\-free data, but in long\-horizon tasks, goal\-conditioned value functions often provide unstable guidance due to sparse rewards and discounting\. Hierarchical methods partially mitigate this issue via subgoal decomposition; however, high\-level decision\-making still relies on noise\-sensitive value estimates, leading to unstable behavior in complex environments\. We address this limitation by proposing \\textbf\{D\}iffusion \\textbf\{S\}ubgoal \\textbf\{P\}lanning \(\\textbf\{DSP\}\), a diffusion\-based framework for high\-level subgoal generation\. DSP casts high\-level planning as guided generative inference over goal\-conditioned subgoals and learns both conditional and unconditional flows, enabling classifier\-free guidance to introduce a goal\-directed bias at inference time\. By removing explicit value\-based guidance from high\-level planning, DSP generates reachable and goal\-directed subgoals through a generative model while retaining hierarchical execution\. Experiments on offline GCRL benchmarks demonstrate that DSP outperforms prior methods on a range of navigation and manipulation tasks, with particularly strong performance in maze environments that require multi\-step subgoal planning\.

## ExpRFT: Exponential Reward\-Weighted Fine\-Tuning for Offline RL in Multi\-Turn Dialogue

**Authors:** Huy Dao; Lizi Liao

**ID:** 154489\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154489

[Paper](<https://openreview.net/forum?id=DE0tMV3YZo>) | [PDF](<https://openreview.net/pdf?id=DE0tMV3YZo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154489>)

Offline reinforcement learning is a standard paradigm for fine\-tuning Large Language Models \(LLMs\) on multi\-turn dialogue, where on\-policy rollouts and reward annotations are costly\. Within this paradigm, reward\-weighted supervised fine\-tuning has emerged as an efficient approach, weighting each trajectory's log\-likelihood by a reward\-dependent coefficient\. We show that existing reward\-weighted SFT methods are specific members of a broader affine reward\-weighted SFT class, and identify two structural limitations that hold for every member of this class: every centered member yields an unbounded\-below loss, and no member admits a hyperparameter for attenuating reward noise\. We introduce ExpRFT as a principled escape from this class — an exponential reweighting of the standardized advantage at a tunable temperature that restores a well\-posed objective and provides a noise\-control dial\. ExpRFT parallels Advantage\-Weighted Regression \(AWR\) in spirit, yet requires no per\-action learned critic and adds no infrastructure cost beyond standard SFT\. On six multi\-turn dialogue benchmarks under reasoning and clarifying\-question protocols, ExpRFT outperforms rejection\-sampling, preference\-based, value\-based, and reward\-weighted baselines\. In the near\-mean trajectory regime, where weight noise dominates the advantage signal, ExpRFT remains stable under injected reward noise while baselines significantly degrade\.

## Learning When to Stop: Selective Imitation Learning Under Arbitrary Dynamics Shift

**Authors:** Surbhi Goel; Jonathan Pei; James Wang

**ID:** 155084 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8YxGIUwNHt>) | [PDF](<https://openreview.net/pdf?id=8YxGIUwNHt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155084>)

_Abstract unavailable from the accessible public sources._

## Kernel Value Regression in Offline Reinforcement Learning

**Authors:** Jongyeon Lee; Jaehyoung Jeon; Kim Haneol; Myungjoo Kang

**ID:** 148489 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xQ7Z8qUzqg>) | [PDF](<https://openreview.net/pdf?id=xQ7Z8qUzqg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148489>)

_Abstract unavailable from the accessible public sources._

## Spectral Representations for Provably Robust Offline Meta\-Reinforcement Learning from Bagged Rewards

**Authors:** Yashas Vaidya; Bo Dai

**ID:** 148147 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zvAriUgbiU>) | [PDF](<https://openreview.net/pdf?id=zvAriUgbiU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148147>)

_Abstract unavailable from the accessible public sources._

## CURe: Conservative Unlearning with Soft\-Gating Regularization for Offline Reinforcement Learning

**Authors:** Bijal Bharadva; Manuel Kelly; Yingxue Zhang; Xin Zhang

**ID:** 155375 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=66b4l76IM4>) | [PDF](<https://openreview.net/pdf?id=66b4l76IM4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155375>)

_Abstract unavailable from the accessible public sources._

## Drift Q\-Learning

**Authors:** Achraf Anas El Houssaini; Mohamad Hosein Danesh; Amin Abyaneh; Scott Fujimoto; Hsiu\-Chin Lin; David Meger

**ID:** 152901 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PZBv14gx3M>) | [PDF](<https://openreview.net/pdf?id=PZBv14gx3M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152901>)

_Abstract unavailable from the accessible public sources._

## Foundation Pareto Flow Policy for Multi\-Objective Reinforcement Learning

**Authors:** Zhanjiang Yang; Lijun Sun; Yueming Li; Meng Li; Yijun Yang

**ID:** 150940 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eAjbjgXFPE>) | [PDF](<https://openreview.net/pdf?id=eAjbjgXFPE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150940>)

_Abstract unavailable from the accessible public sources._

## Diffusion Subgoal Planning for Long\-Horizon Offline Goal\-Conditioned Reinforcement Learning

**Authors:** Hengrui Zhang; Yuhu Cheng; C\.L\.Philip Chen; Xuesong Wang

**ID:** 150829\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150829

[Paper](<https://openreview.net/forum?id=ezp2TvIFGP>) | [PDF](<https://openreview.net/pdf?id=ezp2TvIFGP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150829>)

Offline goal\-conditioned reinforcement learning \(GCRL\) learns goal\-directed policies from reward\-free data, but in long\-horizon tasks, goal\-conditioned value functions often provide unstable guidance due to sparse rewards and discounting\. Hierarchical methods partially mitigate this issue via subgoal decomposition; however, high\-level decision\-making still relies on noise\-sensitive value estimates, leading to unstable behavior in complex environments\. We address this limitation by proposing \\textbf\{D\}iffusion \\textbf\{S\}ubgoal \\textbf\{P\}lanning \(\\textbf\{DSP\}\), a diffusion\-based framework for high\-level subgoal generation\. DSP casts high\-level planning as guided generative inference over goal\-conditioned subgoals and learns both conditional and unconditional flows, enabling classifier\-free guidance to introduce a goal\-directed bias at inference time\. By removing explicit value\-based guidance from high\-level planning, DSP generates reachable and goal\-directed subgoals through a generative model while retaining hierarchical execution\. Experiments on offline GCRL benchmarks demonstrate that DSP outperforms prior methods on a range of navigation and manipulation tasks, with particularly strong performance in maze environments that require multi\-step subgoal planning\.

## Learning When to Stop: Selective Imitation Learning Under Arbitrary Dynamics Shift

**Authors:** Surbhi Goel; Jonathan Pei; James Wang

**ID:** 155084\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155084

[Paper](<https://openreview.net/forum?id=8YxGIUwNHt>) | [PDF](<https://openreview.net/pdf?id=8YxGIUwNHt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155084>)

_Abstract unavailable from the accessible public sources._

## Kernel Value Regression in Offline Reinforcement Learning

**Authors:** Jongyeon Lee; Jaehyoung Jeon; Kim Haneol; Myungjoo Kang

**ID:** 148489\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148489

[Paper](<https://openreview.net/forum?id=xQ7Z8qUzqg>) | [PDF](<https://openreview.net/pdf?id=xQ7Z8qUzqg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148489>)

_Abstract unavailable from the accessible public sources._

## Value\-Rectified Distillation for Flow\-based Offline Reinforcement Learning

**Authors:** Ke Jiang; Wen Jiang; Yoshinobu Kawahara; Xiaoyang Tan

**ID:** 149851\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149851

[Paper](<https://openreview.net/forum?id=mpjt1QNZvM>) | [PDF](<https://openreview.net/pdf?id=mpjt1QNZvM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149851>)

We aim to address the problem of \*Out\-of\-Distribution \(OOD\) Mode Averaging\*, a critical problem that emerges when distilling Flow Matching \(FM\) based behavior policies in offline Reinforcement Learning \(RL\): When learning over multi\-modal datasets, standard distillation inadvertently forces the policy to interpolate across different behavioral modes, causing the generated actions to collapse into invalid, OOD regions\. To resolve this, we propose \*\*Value\-Rectified Distillation \(VRD\)\*\*, a novel framework that reformulates offline policy distillation as a value\-guided generative trajectory alignment problem\. By employing a dynamic coupling mechanism, VRD actively rectifies flow dynamics to explicitly decouple distinct behavioral modes, cleanly isolating high\-value actions\. Specifically, we instantiate VRD through two complementary algorithms: \*\*VRD\-Q\*\*, which utilizes value\-quantile behavior distillation to statistically filter out low\-value behaviors, and \*\*VRD\-R\*\*, which reorganizes the latent space to geometrically isolate high\-value generative trajectories from the FM\-based behavior policy\. Extensive empirical evaluations demonstrate that VRD improves existing generative baselines across diverse continuous control and planning tasks on the D4RL, OGBench, and Minari benchmarks, especially over those multi\-modal, non\-expert datasets\.

## Boosting Off\-Policy RLVR with Data\-Centric Replay

**Authors:** Yuxiao He; Junge Zhang; Ziqi Wang

**ID:** 154959\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154959

[Paper](<https://openreview.net/forum?id=9dxvGd7Shr>) | [PDF](<https://openreview.net/pdf?id=9dxvGd7Shr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154959>)

Reinforcement Learning with Verifiable Rewards \(RLVR\) has become an important approach for improving the reasoning capabilities of large language models \(LLMs\)\. On\-policy training remains the dominant RLVR paradigm, but its reliance on fresh rollouts leads to poor data efficiency\. To address this bottleneck, off\-policy paradigm has attracted increasing attention by reusing historical trajectories through replay buffers\. Despite its efficiency advantages, off\-policy training often struggles to match the performance of on\-policy training\. Our analysis reveals that this limitation primarily stems from data staleness introduced by replay buffers: to maintain training stability, mainstream algorithms discard a large fraction of high\-staleness optimization signals, leading to substantial performance degradation\. To address this issue, we propose \*\*STAR\*\* \(\*\*St\*\*aleness\-\*\*A\*\*ware \*\*R\*\*eplay\), a data\-centric replay framework decoupled from specific optimization algorithms\. STAR improves off\-policy RLVR by constructing low\-staleness and high\-quality training data\. Experiments on a range of mathematical reasoning and code generation tasks show that STAR consistently improves off\-policy RLVR with up to 19% relative performance gains, and enables it to surpass the on\-policy baseline using only around 13% of the rollout data while achieving 5x\-6x wall\-clock speedup\.

## Variational Consequence\-Driven Offline Reinforcement Learning

**Authors:** Wen Jiang; Ke Jiang; Jin Wang; Xiaoyang Tan

**ID:** 149599\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149599

[Paper](<https://openreview.net/forum?id=ou9IEnOfiY>) | [PDF](<https://openreview.net/pdf?id=ou9IEnOfiY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149599>)

Offline reinforcement learning \(RL\) typically mitigates distribution shift by imposing divergence constraints on the action distributions of the learned and behavior policies\. However, this paradigm cannot ensure the underlying dynamic consistency structure: even minor action deviations can lead to drastically different transitions, inadvertently driving the agent away from the offline dataset\. To address this, we explore policy constraints through their induced state\-consequence distributions rather than relying on pure action\-distribution matching\. Nevertheless, directly enforcing such consequence\-aware constraints is computationally intractable without access to the true underlying dynamics model\. To bypass this issue, we propose Structural Behavior Regularization \(StBR\), which replaces the intractable objective with a closed\-form latent divergence\. Structuring this latent space to reflect transition dynamics renders the latent divergence a theoretically bounded surrogate for the true consequence\-distribution divergence\. By regularizing the learned policy with this latent divergence, StBR adaptively tightens the behavior constraint in dynamics\-sensitive regions, effectively preventing deviations outside the offline dataset\. Empirically, we demonstrate that StBR achieves superior performance across diverse offline RL benchmarks\.

## Calibrated Safe Policy Improvement for Continuous Offline Reinforcement Learning

**Authors:** Federico Bianchi; Alessandro Farinelli; Alberto Castellini

**ID:** 148367\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148367

[Paper](<https://openreview.net/forum?id=yOfHpD0Pkv>) | [PDF](<https://openreview.net/pdf?id=yOfHpD0Pkv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148367>)

Safe Policy Improvement \(SPI\) aims to improve a baseline policy offline using fixed data while avoiding performance degradation with high probability\. Existing SPI methods work in discrete domains but do not extend to continuous control\. We propose Calibrated Safe Policy Improvement \(Cal\-SPI\), a Monte Carlo Tree Search\-based continuous SPI method that replaces count\-based support with calibrated model trust\. Cal\-SPI learns a deep ensemble dynamics model and calibrates ensemble disagreement on held\-out data through a Wilks\-style tolerance construction, turning raw uncertainty into a statistical certificate of one\-step model error\. This certificate defines a hard gate within model\-based tree search\. We provide a theoretical analysis showing that calibrated model trust and a baseline\-relative switching criterion yield a conditional PAC\-style improvement bound for gate\-certified root decisions\. Experiments across three MuJoCo continuous domains show that Cal\-SPI avoids performance degradation in low\-data regimes and improves over the baseline once calibrated model trust becomes reliable\.

## When Policies Cannot Be Retrained: A Unified Closed\-Form View of Post\-Training Steering in Offline Reinforcement Learning

**Authors:** Elias Hossain; Mohammad J Basher; Ivan Garibay; Ozlem Garibay; Niloofar Yousefi

**ID:** 152992 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OnU82otbDI>) | [PDF](<https://openreview.net/pdf?id=OnU82otbDI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152992>)

Offline RL can learn effective policies from fixed datasets, but deployment objectives often shift after training, while the trained actor may be frozen due to data, cost, or governance constraints\. We study deployment\-time adaptation of frozen offline actors using Product\-of\-Experts \(PoE\) composition with a goal\-conditioned prior\. Our main practical finding is graceful degradation rather than universal improvement: with degraded or random priors, precision\-weighted PoE remains anchored to the frozen actor, whereas additive and prior\-only adaptation often collapse, and a KL\-budget selector typically reaches a near\-oracle operating point\. We also clarify that, for diagonal\-Gaussian actors and priors, PoE with coefficient $\\alpha$ induces the same deterministic policy as KL\-regularized adaptation with $\\beta=\\alpha/\(1\-\\alpha\)$, with posterior covariance differences cancelling under deterministic action selection\. Across D4RL MuJoCo and AntMaze diagnostics, results reveal an actor\-competence ceiling: composition helps or preserves performance when the frozen actor is sufficiently competent, but cannot recover when the actor itself fails\. Swept CQL/IQL\-guided and SF/GPI baselines are competitive in some settings, but do not eliminate this regime boundary\. Thus, PoE/KL\-Reg is best viewed as an actor\-anchored safety layer for deployment\-time objective shift, not as a general return\-maximization method, with effectiveness governed by actor competence rather than knob choice\.

## CURe: Conservative Unlearning with Soft\-Gating Regularization for Offline Reinforcement Learning

**Authors:** Bijal Bharadva; Manuel Kelly; Yingxue Zhang; Xin Zhang

**ID:** 155375\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155375

[Paper](<https://openreview.net/forum?id=66b4l76IM4>) | [PDF](<https://openreview.net/pdf?id=66b4l76IM4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155375>)

_Abstract unavailable from the accessible public sources._

## DARPAN: Controllability\-Aware Residual Filtering for Pretrained Physical Control

**Authors:** Anany Gupta; Ye Zhou; Qi Li

**ID:** 152813 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QENhKkAMiO>) | [PDF](<https://openreview.net/pdf?id=QENhKkAMiO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152813>)

Physical control systems, such as building HVAC systems, thermal processes, and power\-grid assets, often involve delayed dynamics, safety constraints, and costly online interaction\. Because the effect of a control action may appear after several time steps, effective control often requires reasoning over histories of states, actions, and outcomes\. Pretrained sequence controllers, such as Decision Transformers, provide a natural way to model this history\-dependent control problem by learning policies from offline trajectories, reducing the need for expensive online retraining\. However, their performance can degrade when deployment conditions differ from the training data\. In building control, for example, actuator wear, sensor drift, occupancy changes, and weather variation can all affect the observed response of the system to the same control action\. Online adaptation is therefore needed, but raw prediction error is not always a reliable signal for updating the controller\. The key challenge is to identify which part of the observed mismatch is action\-sensitive and should guide policy adaptation\. To address this challenge, we propose DARPAN, a Drift\-Aware Residual Policy Adapter Network for pretrained physical control\. DARPAN keeps the pretrained Decision Transformer frozen and performs online adaptation only through lightweight residual adapters, preserving the offline policy and limiting the number of trainable parameters\. Instead of updating from raw prediction error, DARPAN uses a controllability filter trained in simulation to extract the action\-sensitive part of the residual and filter out mismatch that is weakly related to the controller's actions\. During deployment, a frozen predictor estimates the next state, the controllability filter produces a filtered residual, and a short history of filtered residuals forms a drift signature\. This signature is used to select an existing adapter or create a new one when a persistent drift pattern appears\. We benchmark DARPAN on SustainGym under actuator faults, sensor drift, delays, and external disturbances\. DARPAN reduces the drift\-induced performance loss by 31\.7% and uses 63% fewer online parameters than Online DT\. We release anonymized code and experiment configurations at https://huggingface\.co/Darpan2026\.

## Dynamics\-Informed Adaptive Offline RL for Real\-Time Tokamak Plasma Control

**Authors:** Rohit Sonker; Xiaoyan Hu; Hiro J Kaga; Andrew Rothstein; Jiayu Chen; Egemen Kolemen; Jeff Schneider

**ID:** 151856\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151856

[Paper](<https://openreview.net/forum?id=XPCEsmysv7>) | [PDF](<https://openreview.net/pdf?id=XPCEsmysv7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151856>)

Tracking plasma profiles, such as electron temperature and rotation, remains a challenging task in tokamak nuclear fusion\. While RL\-based approaches offer a promising path for multi\-input\-multi\-output control systems, existing frameworks overlook two key obstacles:  partial observability of plasma dynamics and the diagnostic mismatch between offline training and online execution\. We propose a novel offline RL framework to address these challenges\. Specifically, we train the control policy to condition on the latent context that is extracted from a trained plasma dynamics model\. This dynamics\-informed latent context encodes useful information about operating regimes, enabling the policy to adapt as the plasma evolves\. To mitigate the gap between offline and real\-time observation, we learn a converter that maps plasma diagnostics reconstructed offline to their real\-time\-observable counterparts, thereby exposing policy training to the real\-time plasma diagnostics available in live experiments\. In offline evaluations, the proposed method substantially improves tracking performance and robustness across a diverse set of discharges\. We report real\-time deployment results on DIII\-D Tokamak Fusion Facility, showing feasibility under challenging actuator conditions\.

## Offline Reinforcement Learning for Plasma Control in Nuclear Fusion: Codebase and Benchmark

**Authors:** YANG FU; Haomin Bao; Rohit Sonker; Xiaoyan Hu; Aravind Venugopal; Jeff Schneider; Jiayu Chen

**ID:** 139831\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139831

[Paper](<https://openreview.net/forum?id=26aiOdbzEW>) | [PDF](<https://openreview.net/pdf?id=26aiOdbzEW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139831>)

Offline reinforcement learning \(RL\) offers a promising route for developing plasma controllers from historical tokamak data, since online trial\-and\-error on real devices is costly and risky\. However, progress in this direction remains difficult to measure due to the lack of a standardized offline RL benchmark for realistic multi\-actuator, long\-horizon plasma control problems in nuclear fusion\. We introduce RL4F, an Offline Reinforcement Learning Benchmark for Plasma Control in Nuclear Fusion, providing closed\-loop evaluation environments and baseline comparisons across four full\-profile tracking tasks: rotation, density, temperature, and pressure\. The dynamics function underlying the evaluation environment is built from historical discharge data from DIII\-D, a real\-world Tokamak\. We evaluate a broad set of imitation learning and offline RL baselines under a unified protocol\. We find that offline model\-based RL methods obtain the best average performance on most objectives, although no single method dominates all tasks, highlighting the importance of dynamics modeling in complex, long\-horizon plasma control tasks\. To foster further research, we open\-source the codebase, datasets, and evaluation framework, providing a benchmark not only for the fusion community but also for algorithm development in offline RL\. Our data and code are available at https://anonymous\.4open\.science/r/Anonymous\-B71F

## Dynamics\-Informed Adaptive Offline RL for Real\-Time Tokamak Plasma Control

**Authors:** Rohit Sonker; Xiaoyan Hu; Hiro J Kaga; Andrew Rothstein; Jiayu Chen; Egemen Kolemen; Jeff Schneider

**ID:** 151856\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151856

[Paper](<https://openreview.net/forum?id=XPCEsmysv7>) | [PDF](<https://openreview.net/pdf?id=XPCEsmysv7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151856>)

Tracking plasma profiles, such as electron temperature and rotation, remains a challenging task in tokamak nuclear fusion\. While RL\-based approaches offer a promising path for multi\-input\-multi\-output control systems, existing frameworks overlook two key obstacles:  partial observability of plasma dynamics and the diagnostic mismatch between offline training and online execution\. We propose a novel offline RL framework to address these challenges\. Specifically, we train the control policy to condition on the latent context that is extracted from a trained plasma dynamics model\. This dynamics\-informed latent context encodes useful information about operating regimes, enabling the policy to adapt as the plasma evolves\. To mitigate the gap between offline and real\-time observation, we learn a converter that maps plasma diagnostics reconstructed offline to their real\-time\-observable counterparts, thereby exposing policy training to the real\-time plasma diagnostics available in live experiments\. In offline evaluations, the proposed method substantially improves tracking performance and robustness across a diverse set of discharges\. We report real\-time deployment results on DIII\-D Tokamak Fusion Facility, showing feasibility under challenging actuator conditions\.

## Offline Reinforcement Learning for Plasma Control in Nuclear Fusion: Codebase and Benchmark

**Authors:** YANG FU; Haomin Bao; Rohit Sonker; Xiaoyan Hu; Aravind Venugopal; Jeff Schneider; Jiayu Chen

**ID:** 139831\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139831

[Paper](<https://openreview.net/forum?id=26aiOdbzEW>) | [PDF](<https://openreview.net/pdf?id=26aiOdbzEW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139831>)

Offline reinforcement learning \(RL\) offers a promising route for developing plasma controllers from historical tokamak data, since online trial\-and\-error on real devices is costly and risky\. However, progress in this direction remains difficult to measure due to the lack of a standardized offline RL benchmark for realistic multi\-actuator, long\-horizon plasma control problems in nuclear fusion\. We introduce RL4F, an Offline Reinforcement Learning Benchmark for Plasma Control in Nuclear Fusion, providing closed\-loop evaluation environments and baseline comparisons across four full\-profile tracking tasks: rotation, density, temperature, and pressure\. The dynamics function underlying the evaluation environment is built from historical discharge data from DIII\-D, a real\-world Tokamak\. We evaluate a broad set of imitation learning and offline RL baselines under a unified protocol\. We find that offline model\-based RL methods obtain the best average performance on most objectives, although no single method dominates all tasks, highlighting the importance of dynamics modeling in complex, long\-horizon plasma control tasks\. To foster further research, we open\-source the codebase, datasets, and evaluation framework, providing a benchmark not only for the fusion community but also for algorithm development in offline RL\. Our data and code are available at https://anonymous\.4open\.science/r/Anonymous\-B71F

## Effect\-Driven Skill Abstractions for Offline Reinforcement Learning

**Authors:** Burcu Kılıç; David Drexel; Emre Ugur; Justus Piater

**ID:** 148749 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vLeZitFeKS>) | [PDF](<https://openreview.net/pdf?id=vLeZitFeKS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148749>)

We seek to learn discrete skill abstractions to facilitate long\-horizon, goal\-conditioned reinforcement\-learning \(RL\) tasks\. Recent approaches have shown success by quantizing actions via clustering or reconstruction\. However, these objectives lead to skills that are not directly related to what the current state affords or what the goal requires\. Instead, we argue that goal\-directed skills should be driven by how they affect the state of the agent\. To realize this, we introduce a novel quantization method for action chunks that optimizes next\-state predictions conditioned on the current state and action\. This objective encourages skills to be distinguished by the future states they lead to, resulting in a vocabulary that spans diverse outcomes reachable from a given state\. Our framework can easily be paired with common offline RL methods by replacing their continuous actor head with a discrete one that selects among the learned skills\. We can execute these skills in the environment by converting them back to continuous actions using a trained low\-level controller\. Experiments on benchmark navigation tasks largely show substantial and consistent improvements over both the continuous\-actor baselines and reconstruction\-based discretizations\.

