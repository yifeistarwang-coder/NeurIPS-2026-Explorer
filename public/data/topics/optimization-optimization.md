# Optimization / Optimization

优化 / 综合优化

188 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Utility\-Constrained Policy Optimization

**Authors:** Mehrdad Moghimi; Bernardo Avila Pires

**ID:** 151319 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bNRLgYY6QD>) | [PDF](<https://openreview.net/pdf?id=bNRLgYY6QD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151319>)

Constrained MDPs \(CMDPs\) are a widely adopted framework for incorporating safety into RL agents, however, the framework does not support risk\-sensitive constraints\. This can be problematic: For example, CMDPs allow for optimal solutions that, in order to satisfy the risk\-neutral constraints, mix infrequent catastrophic behaviors and frequent, overly conservative ones\. Moreover, empirical results in multiple previous works suggest that enforcing stricter, risk\-sensitive constraints can improve agent performance even when measuring it in a risk\-neutral way\. In this work, we introduce a simple yet powerful methodology for constrained RL, consisting of an extension of CMDPs that removes the limitation of risk\-neutral constraints, and an algorithm for solving the resulting constrained problem\. As a convenient side\-effect of our framework, it is not necessary to fix constraint limits in advance of training the agent, provided that a sensible range is known\. This increases policy flexibility and, in practice, allows for adjustments to these limits at no extra training cost\. Besides benefiting from the generality of the framework, our agent shows strong performance in practice, consistently matching or outperforming existing baselines in several Safety Gymnasium benchmark tasks\.

## Towards Direct Evaluation of Harness Optimizers via Priority Ranking

**Authors:** Kai Tzu\-iunn Ong; Minseok Kang; Dongwook Choi; Junhee Cho; Seungwon Lim; Seungju Kim; Geunha Jang; Minwoo Oh; Bogyung Jeong; Sunghwan Kim; Taeyoon Kwon; Jihye Han; Juyoung wy; Jinyoung Yeo

**ID:** 151969 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WSQLJ0m6kS>) | [PDF](<https://openreview.net/pdf?id=WSQLJ0m6kS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151969>)

Harness optimization enables automated agent creation by having an optimizer agent to iteratively update the harness of target agents\. Despite its success, current studies evaluate optimizers solely by observing target agents' performance gains\. This indirect end\-improvement evaluation neglects optimizers' actions at intermediate steps, which are often erroneous and hinder agent performance\. Therefore, it is unclear whether harness optimization is driven by optimizers' informed update actions or simply trial\-and\-error\. This necessitates direct evaluation of harness optimizers\. However, evaluating harness optimizers directly is non\-trivial and costly due to the lack of oracle harnesses\. To address this, we present a simple, low\-cost design to directly evaluate them, namely priority ranking\. By asking harness optimizers to rank components \(e\.g, tools\) in a given harness by their potential to improve/hinder agent performance when updated, our design quantifies optimizer ability at the step level without expensive rollouts or manual examination\. More importantly, optimizers' ranking performance correlates with their ability to improve agents in actual multi\-step harness optimization, establishing priority ranking as a reliable predictor of optimization ability\. Priority ranking is enabled by SHOR, a collection of 182 human\-verified optimization scenarios spanning across domains, designs, and time stages\. Codes and data can be found at https://anonymous\.4open\.science/r/Harness\_Eval\-6D86/%7D%7D\.

## PRPO: Perception\-Reinforced Policy Optimization via Token\-Level Dynamic Advantage Reshaping

**Authors:** Qiming Li; Tianlun Li; Xiaolong Cheng; Hangyu Li; Ruiyan Gong; Kangning Niu; kaitao jiang; Mu Xu

**ID:** 154356 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EBgHiMRxW5>) | [PDF](<https://openreview.net/pdf?id=EBgHiMRxW5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154356>)

Reinforcement Learning with Verifiable Rewards \(RLVR\) has become an effective paradigm for improving the reasoning capability of Large Vision\-Language Models \(LVLMs\)\. However, existing RLVR methods primarily rely on trajectory\-level outcome rewards, which assign identical learning signals across all generated tokens\. This coarse\-grained credit assignment is fundamentally mismatched to multimodal reasoning, where only a sparse subset of tokens is causally grounded in visual evidence\. Consequently, these pivotal perceptual tokens receive weak supervision and are often overwhelmed by language priors or reasoning\-template tokens\. To address this limitation, we propose Perception\-Reinforced Policy Optimization \(PRPO\), a token\-level reinforcement learning framework that explicitly identifies and reinforces pivotal perceptual tokens within long\-horizon multimodal reasoning trajectories\. PRPO introduces Robust Visual Dependency \(RVD\), a principled metric that identifies tokens whose predictions are both visually grounded and perturbation\-stable, filtering out brittle or noisy visual tokens\. Based on RVD, we further propose Perceptual Advantage Reshaping \(PAR\), a token\-level credit assignment technique that amplifies perceptually informative tokens while preserving stable gradients for non\-perceptual tokens\. Extensive experiments on seven multimodal reasoning benchmarks demonstrate that PRPO consistently outperforms strong LVLM baselines across both 3B and 7B model scales, achieving average gains of 23\.3\\% and 21\.1\\%, respectively\. PRPO achieves state\-of\-the\-art performance with improved training efficiency and stronger cross\-task generalization\. Our findings highlight the importance of fine\-grained credit assignment for scalable multimodal reinforcement learning\.

## When and Why SignSGD Outperforms SGD: A Theoretical Study Based on $\\ell\_1$\-norm Lower Bounds

**Authors:** Hongyi Tao; Dingzhi Yu; Lijun Zhang

**ID:** 152200 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Up1I1hhYE6>) | [PDF](<https://openreview.net/pdf?id=Up1I1hhYE6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152200>)

Sign\-based optimization algorithms, such as SignSGD and Muon, have garnered significant attention for their remarkable performance in training large foundation models\. Despite this empirical success, we still lack a theoretical understanding of when and why these sign\-based methods outperform vanilla SGD\. The core obstacle is that under standard smoothness and finite variance conditions, SGD is known to be minimax optimal for finding stationary points measured by $\\ell\_2$\-norms, thereby fundamentally precluding any complexity gains for sign\-based methods in standard settings\. To overcome this barrier, we analyze sign\-based optimizers leveraging $\\ell\_1$\-norm stationarity, $\\ell\_\\infty$\-smoothness, and a separable noise model, which can better capture the coordinate\-wise nature of signed updates\. Under this distinct problem geometry, we derive matched upper and lower bounds for SignSGD and explicitly characterize the problem class in which SignSGD provably dominates SGD\. Specifically, we compare the \*upper bound of SignSGD\* with the \*lower bound of SGD\*, illustrating that SignSGD effectively reduces the complexity by a factor of $d$ under \*sparse noise\*, where $d$ is the problem dimension\. Furthermore, we elevate this framework to the matrix domain, providing an equivalent optimal lower bound for the Muon optimizer, proving that extending the sign operator to matrices preserves this optimal scaling with dimensionality\. Finally, we bridge our theoretical bounds to practice, demonstrating that the theoretical superiority of SignSGD accurately predicts its faster convergence during the pretraining of a 124M parameter GPT\-2 model\.

## Bias\-Variance Optimized Preference Optimization for Large Reasoning Models

**Authors:** Mingkang Zhu; Xi Chen; Bei Yu; Hengshuang Zhao; Jiaya Jia

**ID:** 152470 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SqjlMwxRLI>) | [PDF](<https://openreview.net/pdf?id=SqjlMwxRLI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152470>)

Large reasoning models \(LRMs\) generate reasoning traces before producing final answers, yielding strong performance on multi\-step reasoning tasks\. However, preference alignment for LRMs remains underexplored\.  The ideal answer\-level preference objective marginalizes over reasoning traces, but this trace\-marginalized objective is computationally intractable\. As a result,  practical methods rely on single\-trace surrogates, which can induce high gradient variance due to stochastic trace sampling\.  We cast this challenge  as a gradient\-estimator design problem and propose Bias\-Variance Optimized Preference Optimization \(BVPO\), which combines a standard trace\-based gradient estimator with an empty\-trace gradient estimator from a separately sampled empty\-trace branch\. Under our fixed\-prompt, fixed\-answer conditional view, the empty\-trace branch is deterministic with respect to the trace randomness  studied in our analysis\. We show that the composite estimator  contracts the conditional reasoning\-trace\-noise component, admits a conditional MSE\-optimal mixture, and appears in the estimator\-dependent term of a standard biased\-SGD bound\. Empirically, BVPO improves alignment over baselines on alignment benchmarks, including AlpacaEval 2 and Arena\-Hard\.  Although  trained on general conversational data, BVPO also generally preserves reasoning performance on six math reasoning benchmarks\. Empirical diagnostics further show that BVPO yields lower total gradient variance during training\.

## AdaSRU: Adaptive Source\-Free Recommendation Unlearning via Gradient\-Constrained Optimization

**Authors:** Xiaoran Zhao; Weiming Liu; Lianyong Qi; Weiyi Zhong; Yuwen Liu; Xiaolong Xu; Haolong Xiang; Qiang Ni; Xuyun Zhang; Wanchun Dou; Xiaokang Zhou

**ID:** 154534 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CsOU0pWrTZ>) | [PDF](<https://openreview.net/pdf?id=CsOU0pWrTZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154534>)

Recommendation unlearning \(RU\) aims to remove the influence of specified user\-\-item interactions from a trained recommender while preserving utility on the remaining data\. Existing RU methods usually require access to the original training data, especially the remaining data, to recover recommendation utility after unlearning\. However, access to such data is often restricted or unavailable in practice due to privacy constraints, storage costs, or third\-party deployment, giving rise to source\-free recommendation unlearning\. To address this challenge, we propose an adaptive source\-free recommendation unlearning \( AdaSRU \) method that enables effective unlearning without accessing the original remaining data\. AdaSRU first estimates the inaccessible gradient on the remaining data\. It exploits the first\-order optimality condition of the trained recommender and approximates the remaining gradient using the forgetting data and squared gradient accumulators from adaptive optimizers, e\.g\., Adam\. AdaSRU then formulates unlearning as a gradient\-constrained update, where the estimated remaining gradient is used as a constraint to limit utility degradation while maximizing the unlearning objective\. AdaSRU adaptively adjusts the utility\-preserving correction according to the current gradient geometry\. We further theoretically prove that AdaSRU approaches an approximate Pareto stationary solution\. Extensive experiments on three real\-world datasets demonstrate that AdaSRU achieves strong performance in both unlearning and recommendation\. The code is available at https://anonymous\.4open\.science/r/AdaSRU\-94D9/\.

## Literati: Towards Anytime Optimal Shape Generalized Trees via AO\*

**Authors:** Nakul Upadhya; Eldan Cohen

**ID:** 148879 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uUYZFj5qPL>) | [PDF](<https://openreview.net/pdf?id=uUYZFj5qPL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148879>)

Decision trees are prized for their interpretability and strong performance on tabular data, but popular greedy top\-down induction algorithms can yield suboptimal and unnecessarily complex structures\. Optimal decision tree methods address this through global optimization, yet remain restricted to axis\-aligned threshold splits, which limit the expressivity of each node and often force deep, complex trees to capture non\-linear feature effects\. Shape Generalized Trees \(SGTs\) generalize threshold splits to learnable univariate shape functions, improving expressivity and enabling more compact trees\. However, existing SGT induction algorithms are greedy and offer no optimality guarantees\. In this work, we introduce Literati, the first algorithm for optimal SGT induction\. We propose a novel AND/OR graph formulation of the problem that jointly optimizes tree structure and shape function complexity\. To solve this AND/OR graph, we develop an AO\*\-based algorithm with two enhancements that improve anytime performance while preserving optimality: a secondary heuristic for OR\-node selection and a round\-robin policy for AND\-node exploration\. Across 24 real\-world datasets, Literati achieves higher training and test accuracy than state\-of\-the\-art tree approaches\.

## Rationale\-Guided Policy Optimization: Learning to Reason with Adaptive Rationale Scaffolding

**Authors:** Hoang Phan; Minh Pham; Chau Pham; Chinmay Hegde; Trung Le; Qi Lei

**ID:** 148697 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vitmYGWw3g>) | [PDF](<https://openreview.net/pdf?id=vitmYGWw3g>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148697>)

On\-policy reinforcement learning has become a central paradigm for improving the reasoning abilities of large language models\. However, its effectiveness is often limited by reward sparsity: when a model fails to discover correct trajectories for difficult problems, the optimization process receives little useful signal and may stagnate\. Existing approaches mitigate this issue by incorporating off\-policy demonstrations, expert traces, or model\-generated solutions, but they typically require the auxiliary data to match the format of the reinforcement\-learning task, often relying on rejection sampling from stronger models to obtain suitable training trajectories\. We introduce Rationale\-Guided Policy Optimization \(RGPO\), a framework that adaptively leverages ground\-truth rationale information according to the model’s current capability while preserving its freedom to explore\. Rather than treating reference solutions as fixed imitation targets, RGPO uses them as temporary scaffolds: rationales help the model generate improved responses, after which only higher\-reward, model\-generated solutions are transferred back to the original unguided setting\. This design allows training to exploit available ground\-truth information without requiring off\-policy data to follow the same format as the RL task\. Across both language\-only and vision\-language reasoning settings, RGPO consistently improves performance over RLVR baselines, and ablation studies show that adaptive rationale guidance is a key contributor to these gains\. These results suggest that RGPO offers a practical and general approach for reducing reward sparsity, stabilizing reinforcement learning, and improving reasoning performance in both text\-only and multimodal models\.

## NP\-LoRA: Null Space Projection for Subject\-Style LoRA Fusion

**Authors:** Chuheng Chen; Xiaofei Zhou; Geyuan Zhang; Yong Huang; Gang Xiong

**ID:** 155156 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7ruWsRZRGX>) | [PDF](<https://openreview.net/pdf?id=7ruWsRZRGX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155156>)

Low\-Rank Adaptation \(LoRA\) fusion enables the composition of subject and style representations for controllable generation without retraining\. However, existing approaches primarily operate through weight\-level merging, without explicitly modeling how independently trained LoRAs interact in the shared parameter space\. We adopt a geometric perspective on LoRA fusion, interpreting content and style LoRAs as occupying overlapping, non\-orthogonal low\-rank subspaces, where such overlap can lead to conflicting parameter updates that affect generation quality\. This observation motivates us to reformulate LoRA fusion not merely as parameter combination, but as a problem of controlling how updates from overlapping subspaces are combined\. Based on this insight, we propose Null Space Projection LoRA \(NP\-LoRA\), a training\-free framework that employs projection as a fusion operator to explicitly modulate cross\-LoRA interactions\. Specifically, NP\-LoRA uses principal directions of the style LoRA to define a projection subspace and projects the content LoRA onto the complementary subspace \(i\.e\., the null space of the style LoRA\), suppressing interference along dominant style directions while preserving complementary information\. To avoid the overly aggressive suppression of hard projection, we further formulate soft projection as a regularized optimization problem that balances content preservation against style\-subspace suppression\. This objective admits a closed\-form solution, yielding a projection operator controlled by a single parameter that continuously interpolates between linear merging and hard projection\. Extensive experiments across multiple pretrained LoRA pairs show that NP\-LoRA achieves more balanced content\-style composition compared to strong baselines, without requiring retraining\.

## $\\mathcal\{P\}$Torch: Narrowing the Gap Between Projection and Gradient\-Based Learning

**Authors:** Jeff Cyuzuzo Jambé; Jan Quan; Panagiotis Patrinos

**ID:** 153540 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Kb0emfT0QB>) | [PDF](<https://openreview.net/pdf?id=Kb0emfT0QB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153540>)

Projection\-based optimization offers a gradient\-free alternative to conventional gradient\-based methods, but existing frameworks suffer from high computational costs and poor scaling with depth\. We introduce $\\mathcal\{P\}$Torch, a projection\-based framework that builds directly on top of PyTorch's autograd engine, eliminating the overhead of prior approaches\. We further improve performance through nonlinear relaxation and memory\-efficient projections\. Together, these contributions make the algorithm competitive with gradient\-based methods for shallow MLPs on MNIST and CIFAR\-10\. Finally, we prove a vanishing target theorem showing that the layer\-wise learning signal decays with increased depth, serving as an analogue of the vanishing gradients problem for projection\-based methods\.

## EnerGNN: Learning Optimization\-Compatible Energy Functions for Exact Constrained Combinatorial Inference

**Authors:** Niki Triantafyllou; Maria Papathanasiou

**ID:** 148678 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vtsBNxxhyQ>) | [PDF](<https://openreview.net/pdf?id=vtsBNxxhyQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148678>)

This paper presents EnerGNN, an energy\-based framework for exact constrained combinatorial inference\. The central idea is to learn an optimization\-compatible energy over binary configurations, so that hard constraints and deployment\-time restrictions can be enforced by a mixed\-integer programming \(MIP\) layer at inference time\. Training shapes the energy landscape using optimality\-aware contrastive learning so that high\-quality feasible solutions occupy low\-energy regions\. We evaluate EnerGNN in two settings: direct decision problems, where the learned energy is optimized over the full binary decision vector, and strategic decomposition problems, where it is optimized over complicating binary variables and an exact solver handles the downstream problem\. Across Quadratic Knapsack, Combinatorial Auctions, and a personalized medicine supply chain problem, EnerGNN achieves primal gaps below 1\\% on most test instances, generalizes to larger problem instances without retraining, and supports zero\-shot constraint injection by modifying only the inference MIP\.

## ZO\-F2: Low\-variance Fisher preconditioner via bilinear estimation for zeroth\-order optimization

**Authors:** Hiroshi Sawada; Yuya Hikima; Kenta Niwa

**ID:** 153380 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ln6xIlpCy8>) | [PDF](<https://openreview.net/pdf?id=Ln6xIlpCy8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153380>)

We propose a novel zeroth\-order \(ZO\) optimization method, ZO\-F2, where Fisher information matrix \(FIM\)\-based preconditioners are estimated in a low\-variance manner via bilinear forms\. Using FIM rather than Hessian allows for a larger number of estimator samples by pairwise combinations of perturbations\. We further propose a numerically stable whitening\-based update rule for full\-matrix preconditioners, even when the FIM estimate is ill\-conditioned\. We provide theoretical analyses on the variance, the whitening residual, and convergence under standard and reasonable assumptions\. Experimental results on black\-box training of diverse models from scratch support our proposals and demonstrate the superiority of ZO\-F2 over existing methods in terms of accuracy and computational efficiency\.

## Soft\-Radial Projection for Constrained End\-to\-End Learning

**Authors:** Philipp Schneider; Daniel Kuhn

**ID:** 150736 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=flhcgCEqDM>) | [PDF](<https://openreview.net/pdf?id=flhcgCEqDM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150736>)

Constrained end\-to\-end learning trains neural networks whose outputs must satisfy feasibility constraints, such as resource, budget, or operational limits\. While projection and optimization layers guarantee constraint satisfaction, boundary\-based projections can introduce unfavorable optimization geometry: regions of the unconstrained output space are mapped to the same active face of the feasible set\. This makes the resulting map locally rank\-deficient, suppressing gradients in constrained directions and degrading optimization—a bottleneck known as gradient saturation\. We propose Soft\-Radial Projection , a differentiable reparameterization layer that maps unconstrained network outputs into the relative interior of a convex feasible set by smoothly rescaling rays from a strictly feasible anchor point\. Unlike hard radial or orthogonal projections, the resulting map is one\-to\-one and has a full\-rank Jacobian almost everywhere, while guaranteeing strict feasibility\. We prove that constrained networks equipped with Soft\-Radial Projection retain universal approximation guarantees\. For standard convex sets such as simplices and balls, the layer admits a closed\-form forward pass, avoiding the iterative solvers required by optimization\-based layers\. Experiments on decision\-focused learning benchmarks show improved optimization stability and solution quality compared with optimization\- and projection\-based baselines\.

## StiCAS: Compositional Activation Steering via Stiefel Manifold Coordinate Transport

**Authors:** Toan Doan; Thin Nguyen; Sunil Gupta

**ID:** 152514 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SZ0yQnALaW>) | [PDF](<https://openreview.net/pdf?id=SZ0yQnALaW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152514>)

Activation steering is a lightweight way to control pretrained generative models: a learned map inserted into the model's activations can steer generation toward target behavior without updating the model weights\. While effective for single target behavior, existing steering methods remain brittle when multiple behaviors are targeted\. A style intervention followed by a safety intervention can produce a different result than the same applied in the reverse order, as the second intervention is evaluated on activations already shifted by the first\. We trace this failure to coordinate sharing: existing transport\-based steering methods learn different concepts in the same activation coordinates, so their interventions interfere by construction\. To address this, we introduce StiCAS \( Sti fefel C ompositional A ctivation S teering\), a geometric steering framework that learns a separate orthogonal subspace for each concept\. Each concept is steered by an affine transport restricted to its own subspace, and orthogonality between subspaces makes these transports non\-interfering by construction\. The concept frame is trained directly on the Stiefel manifold, so Riemannian optimization preserves the orthogonality required for composition throughout learning\. This structure gives an exact commutativity guarantee: any sequential ordering of single\-concept interventions reproduces the simultaneous multi\-concept update\. Across 45 concept pairs and three open models, StiCAS drives order\-dependent interference exactly to zero and roughly doubles joint\-concept success over the strongest activation\-transport baseline\.

## AR1\-ZO: Topology\-Aware Rank\-1 Zeroth\-Order Queries for High\-Rank LoRA Fine\-Tuning

**Authors:** Ziye Chen; Hongbin Lin; Chenyu Zhang; Xiangda Yan; Yongjie Yang; Yao SHU

**ID:** 155186 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7eOsaBX3qO>) | [PDF](<https://openreview.net/pdf?id=7eOsaBX3qO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155186>)

Zeroth\-order \(ZO\) optimization enables large\-language\-model fine\-tuning without storing backpropagation activations, while LoRA supplies compact trainable adapters\. Combining them creates a rank paradox: increasing LoRA rank improves adapter capacity, but standard two\-point ZO either perturbs a rank\-dependent number of coordinates or, under atomwise updates, can make the finite\-difference signal unobservable\. This paper shows that the bottleneck is a measurement\-topology problem rather than a need for an external subspace\. LoRA already decomposes into matched rank\-$1$ atoms, each a complete factor\-coordinate block of dimension $d\_\\text\{out\}\+d\_\\text\{in\}$\. Querying one atom per step keeps the stored adapter rank $r$ while removing $r$ from the single\-query perturbation dimension\. The naive atomwise query is still miscalibrated: if it inherits canonical LoRA scaling $\\alpha/r$, the active finite\-difference signal shrinks as $1/r$ and the active finite\-difference signal\-to\-noise ratio \(FD\-SNR\) as $1/r^2$, producing directional collapse under a fixed residual evaluation\-noise floor\. AR1\-ZO pairs alternating rank\-$1$ atom queries with topology\-aware scaling $\\gamma=\\alpha r$, restoring rank\-invariant active signal without auxiliary bases, activation hooks, curvature estimates, or extra forward queries\. Theory proves atom minimality, rank\-independent active query dimension, directional collapse and restoration, and the remaining rank dependence as an amortized coverage cost\. Experiments on OPT and Qwen3 models validate the signal mechanism and show that AR1\-ZO makes high\-rank LoRA effective among matched\-budget ZO methods under the standard two\-forward\-pass query budget\.

## Manifold Drift in Flow Preference Optimization: A Root Cause of Reward Hacking

**Authors:** Yansen Han; Shengyi Liao; Yuanxing Zhang; Pengfei Wan; Tao Lin

**ID:** 154960 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9dO9vJ1V5d>) | [PDF](<https://openreview.net/pdf?id=9dO9vJ1V5d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154960>)

Preference optimization is a standard alignment method for generative models, yet extending it to continuous\-time dynamics remains non\-trivial\. In flow matching, reward\-driven updates modify the transport trajectories but lack inherent constraints to pretrained data manifold, often pushing generated \(terminal\) samples off the pretrained support\. We formalize this failure mode as manifold drift , a phenomenon where preference\-aligned trajectories diverge from the pretrained support\. Theoretically, we prove that while optimal flow matching exactly preserves the terminal manifold, existing methods like FlowDPO fail to do so whenever reward\-driven updates contain components normal to the manifold surface\. As a remedy, we propose ThermoDPO , a temperature\-controlled objective that anchors pairwise preference optimization on preferred samples\. Across temperature regimes, this objective connects rejection sampling fine\-tuning and FlowDPO while upper\-bounding a reconstruction\-based surrogate for manifold drift\. To counteract diminished signals at low temperatures, we further introduce a weighted variant, ThermoDPO\-weighted , which we evaluate across all experiments for its superior trade\-off between preference alignment and manifold preservation\. Empirically, ThermoDPO\-weighted demonstrates a better trade\-off on synthetic manifolds than FlowDPO variants\. On real\-world image benchmarks, it improves OCR\-oriented alignment over the pretrained model and FlowDPO variants while remaining competitive with strong baselines in held\-out model\-based and human evaluations without visible sample degradation\.

## A Local Geometric Analysis of Maximal Coding Rate Reduction via Error Bounds

**Authors:** Peng Wang; po chen; Huikang Liu; Rujun Jiang

**ID:** 155476 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5JGz4ivDSM>) | [PDF](<https://openreview.net/pdf?id=5JGz4ivDSM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155476>)

While the maximal coding rate reduction \(MCR$^2$\) objective has become a useful principle for learning compact and discriminative representations, a theoretical understanding of its optimization geometry remains limited, especially on why first\-order methods often exhibit fast convergence near its local maximizers\. In this work, we show that the MCR$^2$ objective satisfies an error\-bound property in a neighborhood of its local maximizers\. This property guarantees that the distance to the local maximizer set can be bounded above by the gradient norm at any point in the neighborhood, directly implying regularity conditions such as the Polyak\-Lojasiewicz inequality and quadratic growth\. Leveraging this property, we prove that first\-order methods converge linearly to a local maximizer of the MCR$^2$ objective under mild conditions\. Numerical experiments validate the predicted local convergence behavior and provide empirical evidence that optimizing the MCR$^2$ objective improves representation geometry while maintaining competitive downstream accuracy\.

## From SGD to Muon: Adaptive Optimization via Schatten\-p Norms

**Authors:** Thomas Massena; Corentin Friedrich; Mathieu Serrurier

**ID:** 148891 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uQkr5twCZH>) | [PDF](<https://openreview.net/pdf?id=uQkr5twCZH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148891>)

Modern optimizers, like Muon, impose matrix\-wise geometry constraints on their updates\. These matrix\-wise constraints can be unified under Linear Minimization Oracle \(LMO\) theory\. However, all current methods impose fixed LMO geometries for the update rules, chosen by\-design or empirically, which are not necessarily optimal according to the problem's geometry\. We introduce a novel efficient data\-driven criterion for dynamically choosing proxy\-optimal update LMO geometries on individual Deep Neural Network layers\. Derived in closed form from gradient and activation statistics using a single\-step random feature regression surrogate model, our criterion navigates a design space interpolating from SGD to Muon updates\. Moreover, integrating parameter\-wise preconditioning allows our framework to recover SGD, Muon, Adam, and MuAdam as specific extrema\. To make this adaptive approach scalable, we pair it with efficient computational strategies, achieving only a $\\sim 3$% runtime overhead on highly optimized baselines\. As a proof of concept, we show that this data\-driven optimizer matches or exceeds the performance of the best performing optimizer between Muon and AdamW across three different training scenarios\. Ultimately, this work provides evidence that LMO geometry can be successfully and efficiently adapted from runtime data, opening a new pathway for optimizer design beyond static geometries\.

## Intrinsic Muon: Spectral Optimization on Riemannian Matrix Manifolds

**Authors:** Yibang Li; Bihari L Pandey; Ravi Sah; Andi Han; Cyrus Mostajeran; Pratik Kumar Jawanpuria; Bamdev Mishra

**ID:** 148345 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yYWccp8wIs>) | [PDF](<https://openreview.net/pdf?id=yYWccp8wIs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148345>)

Muon and related norm\-constrained matrix optimizers have become central to large\-scale learning problems\. They are formulated as a linear maximization oracle \(LMO\) over an ambient matrix\-norm ball in unconstrained Euclidean space\. However, these do not generalize cleanly to manifold\-valued parameters such as low\-rank factorizations, orthogonality constraints, or symmetric positive definite \(SPD\) matrices\. Naively restricting the Muon LMO to the tangent space \(i\) breaks quotient symmetries and \(ii\) couples the tangent\-space constraint with an ambient norm bound, thereby obstructing closed\-form solutions on various manifolds of interest\. We resolve both issues with a single observation: every Riemannian metric canonically lifts a unitarily invariant Euclidean norm to an intrinsic norm on each tangent space, and the resulting intrinsic norm constrained LMO is symmetry preserving\. Building on this, we introduce intrinsic Muon \(iMuon\), a unified framework that yields closed\-form updates on the fixed\-rank, SPD, Stiefel, and Grassmann manifolds for any unitarily invariant norm, including the spectral, Frobenius, and nuclear norms\. We establish convergence guarantees for both deterministic and stochastic iMuon with rate constants that depend only on the manifold dimension\. Notably, on the fixed\-rank manifold this constant depends only on the rank, making the rate independent of factor conditioning and removing the runtime factor\-rescaling required by prior work\. Experiments on LoRA finetuning of LLMs, image classification, and subspace learning illustrate the efficacy of the proposed approach\.

## Learning Where to Look: Observation Policy Optimization for Thinking with Images

**Authors:** Junfeng Wang; Jiawei Liu; Yongchao Xu; Tao Jiang; jiangbo Ai; Jin Zhang; Chong Wang; Qixing Zhang

**ID:** 150969 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dutSx0FFvu>) | [PDF](<https://openreview.net/pdf?id=dutSx0FFvu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150969>)

Complex visual question answering often requires vision\-language models to think with images, i\.e\., actively acquire local visual evidence by zooming into informative regions of high\-resolution images\. Our error analysis shows that many failures in this setting originate from incorrect observation actions, where the model fails to localize key regions or obtain crops that contain sufficient evidence for answering\. We further observe that bounding\-box tokens exhibit substantially higher generation entropy than ordinary language tokens, indicating high uncertainty when the model decides where to look\. However, existing reinforcement learning methods based on final\-answer rewards provide only trajectory\-level feedback, making it difficult to assign precise credit to the observation actions\. We propose Observation Policy Optimization \(OPO\), an RL algorithm for optimizing observation actions in tool\-augmented thinking with images\. OPO consists of two core modules\. First, Uncertainty\-Guided Observation Branching \(UOB\) treats each image zoom\-in tool call as an observation event and selectively branches at high\-uncertainty, low\-redundancy events during rollout, enabling efficient exploration of alternative cropping decisions and their resulting visual evidence\. Second, Evidence\-Localized Advantage Attribution \(ELAA\) compares sibling branches using local evidence\-sufficiency rewards and assigns credit only to the corresponding observation\-action tokens\. By decoupling observation\-action optimization from trajectory\-level outcome supervision, OPO improves visual evidence acquisition and further enhances visual reasoning performance\. Experiments show that OPO consistently improves Qwen3\-VL models across scales and achieves competitive performance against larger models and tool\-augmented baselines\.

## Do Coding Agents Deceive Us? Detecting and Preventing Cheating via Capped Evaluation with Randomized Tests

**Authors:** Thanawat Lodkaew; Johannes Ackermann; Soichiro Nishimori; Nontawat Charoenphakdee; Masashi Sugiyama; Takashi Ishida

**ID:** 148548 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x3srtw3rZo>) | [PDF](<https://openreview.net/pdf?id=x3srtw3rZo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148548>)

A growing failure mode in agent evaluation and training is that models can achieve high evaluation scores by exploiting shortcuts instead of solving the intended task, producing \\emph\{deceptive\} performance\. This makes evaluation scores unreliable as measures of true task\-solving ability\.  We propose CapCode, a framework for constructing coding datasets with randomized tests whose best achievable non\-cheating performance is deliberately capped below one\. This capped\-performance design gives evaluation scores a clearer interpretation: scores substantially above the cap are implausible and therefore provide evidence of cheating\. To prevent cheating, we propose CapReward, a reward design based on the CapCode principle to discourage optimization beyond the cap\. Experiments across multiple datasets show that CapCode detects cheating while preserving performance ranking, and CapReward reduces cheating behavior, yielding models that better follow the intended task specification\.

## The Optimization Prior: Instilling depth for shallow networks, detail for coarse networks

**Authors:** Vighnesh Subramaniam; Boris Katz; Brian Cheung

**ID:** 154968 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9ZcIwyPLGI>) | [PDF](<https://openreview.net/pdf?id=9ZcIwyPLGI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154968>)

Initialization determines the optimization \`\`fate'' of a model, going far beyond just setting the scale of its weights\. It establishes a fundamental initial geometry over the data, permanently dictating which examples are considered close, which directions are easy to change, and which representations gradient descent will naturally refine first\. Because this starting point dictates the model's future trajectory, we ask: can this initial geometry be explicitly chosen by referencing a completely different architecture? To achieve this, we introduce representational similarity as an optimization prior\. This is an initialization\-only procedure that aligns a target network to the representational geometry of a randomly initialized guide network before any downstream training occurs\. Crucially, the guide network transfers no learned knowledge: it is frozen, never sees labels\. We demonstrate that this cross\-architecture transfer of fate works in two key domains: instilling the optimization benefits of depth into shallow targets by aligning them to deeper, randomly initialized guides, and transferring representational granularity by using fine\-resolution guides to shape the initialization geometry of networks built with coarser representations\. Ultimately, this establishes that a model's architectural destiny can be decoupled from its physical structure and explicitly programmed at initialization\.

## Adaptive Conditional Gradient Sliding: Projection\-Free and Line\-Search\-Free Acceleration

**Authors:** Shota Takahashi

**ID:** 148937 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=u4sFmbwanR>) | [PDF](<https://openreview.net/pdf?id=u4sFmbwanR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148937>)

We study convex optimization problems over a compact convex set where projections are expensive but a linear minimization oracle \(LMO\) is available\. We propose the \*adaptive conditional gradient sliding method\* \(AdCGS\), a projection\-free and line\-search\-free method that retains Nesterov's acceleration with adaptive stepsizes based on local Lipschitz estimates\. AdCGS combines an accelerated outer scheme with an LMO\-based inner routine\. It reuses gradients across multiple LMO calls to reduce gradient evaluations, while controlling the subproblem inexactness via a prescribed accuracy level coupled with adaptive stepsizes\. We prove accelerated rates for convex objective functions, matching projection\-based methods, without relying on a projection oracle\. For locally strongly convex objective functions, we further establish linear convergence without additional geometric assumptions on the constraint set, such as polytopes or strongly convex sets\. Experiments on constrained $\\ell\_p$ regression, logistic regression, and least\-squares problems demonstrate that AdCGS improves over projection\-free baselines and provides competitive performance when projections are inexpensive\.

## How Neural Reward Models Learn Features for Policy Optimization: A Single\-Index Analysis

**Authors:** Rei Higuchi; Ryotaro Kawata; Akifumi Wachi; Shokichi Takakura; Kohei Miyaguchi; Taiji Suzuki

**ID:** 154598 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CP2FzuoOFQ>) | [PDF](<https://openreview.net/pdf?id=CP2FzuoOFQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154598>)

Reward modeling is not only a prediction problem: in KL\-regularized policy optimization, the learned reward is exponentiated to define the deployed policy, so downstream value depends on errors in reward\-tilted regions\. We study this feedback in a Gaussian single\-index model with $ r^\* \(x\)=\\sigma^\* \(\\langle\\theta^\* ,x\\rangle\)$ and $x\\sim\\mathcal N\(0,I\_d\)$\. We analyze a two\-stage neural reward model that first learns the hidden direction $\\theta^\*$ from reward\-weighted samples and then fits the readout layer by weighted ridge regression\. Exponential reward weighting changes the Hermite signal available to the first layer; for any feature\-learning temperature $\\beta\_1$ above a dimension\-free $O\(1\)$ threshold, a constant fraction of neurons recover the hidden direction, with weak\-recovery complexity governed by the generative exponent\. After feature recovery, we derive tilted\-policy value\-gap bounds for an idealized label\-weighted fit with weights $e^\{y/\\beta\_2\}$ and a more practical surrogate\-weighted fit with weights $e^\{r\_\{a\_0\}\(x\)/\\beta\_2\}$\. Keeping the $\\beta\_2$\-dependence explicit yields an admissible set of deployment temperatures, balancing the gain from lowering $\\beta\_2$ against the learning cost amplified by exponential weighting; in the surrogate\-weighted case, proxy\-dependent factors shrink this admissible set\.

## LucidNFT: LR\-Anchored Multi\-Reward Preference Optimization for Flow\-Based Real\-World Super\-Resolution

**Authors:** Song Fei; Tian Ye; Sixiang Chen; Zhaohu Xing; Jianyu Lai; Lei Zhu

**ID:** 152037 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W1dvS9O0dJ>) | [PDF](<https://openreview.net/pdf?id=W1dvS9O0dJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152037>)

Generative real\-world image super\-resolution \(Real\-ISR\) can synthesize visually convincing details from severely degraded low\-resolution \(LR\) inputs, yet its stochastic sampling makes a critical failure mode hard to avoid: outputs may look sharp but be unfaithful to the LR evidence, exhibiting semantic or structural hallucinations\. Preference\-based reinforcement learning \(RL\) is a natural fit because each LR input yields a rollout group of candidate restorations\. However, effective alignment in Real\-ISR is hindered by three coupled challenges: \(i\) the lack of an LR\-referenced faithfulness signal that is robust to degradation yet sensitive to localized hallucinations, \(ii\) a rollout\-group optimization bottleneck where scalarizing heterogeneous rewards before normalization compresses objective\-wise contrasts and weakens DiffusionNFT\-style reward\-weighted updates, and \(iii\) limited coverage of real degradations, which restricts rollout diversity and preference signal quality\. We propose LucidNFT, a multi\-reward RL framework for flow\-matching Real\-ISR\. LucidNFT introduces LucidConsistency, a degradation\-invariant and hallucination\-sensitive LR\-referenced evaluator trained with content\-consistent degradation pools and original\-inpainted hard negatives; a decoupled reward normalization strategy that preserves objective\-wise contrasts within each LR\-conditioned rollout group before fusion; and LucidLR, a large\-scale collection of real\-world degraded images for robust RL fine\-tuning\. Extensive experiments show that LucidNFT improves perceptual quality on strong flow\-based Real\-ISR baselines while generally maintaining LR\-referenced consistency across diverse real\-world scenarios\.

## Riemannian Optimization for Low\-Rank Adaptation via Desingularization

**Authors:** Tiancan Feng; Daorui Ding; Fanhua Shang; Xiaoyuan Zhang

**ID:** 150239 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jiYYPiWmCI>) | [PDF](<https://openreview.net/pdf?id=jiYYPiWmCI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150239>)

Low\-rank Adaptation \(LoRA\) has been widely used as a parameter\-efficient method in fine\-tuning large language models \(PEFT\)\. However, trained adapters often exhibit low stable rank and small trailing singular values\. Near such rank\-deficient regions, fixed\-rank formulations suffer from severe Hessian bounds and local Lipschitz constants that grow with $\\mathcal\{O\}\\big\(\\sigma^\{\-1\}\_r\(X\)\\big\)$\. To mitigate this issue, we propose ROLAND \(\*\*R\*\*iemannian \*\*O\*\*ptimization for \*\*L\*\*ow\-Rank \*\*A\*\*daptatio\*\*N\*\* via \*\*D\*\*esingularization\), a desingularization method that lifts LoRA to a smooth bounded\-rank geometry with both left and right null\-space projectors\. ROLAND replaces rank\-deficient singularities with compact and smooth fibers while retaining a low\-rank representation of the adapter update\. Within this framework, we equip the manifold optimization with a new Riemannian metric and retraction mechanism, which allow us to establish tighter Hessian bounds and milder condition\-number dependence in the local convergence rate\. Empirical results demonstrate ROLAND's superiority across a wide range of experimental settings compared with other state\-of\-the\-art PEFT methods\.

## Layerwise LQR for Geometry\-Aware Optimization of Deep Networks

**Authors:** Simon Dufort\-Labbé; Pierre\-Luc Bacon; Razvan Pascanu; Simon Lacoste\-Julien; Aristide Baratin

**ID:** 148444 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xlQ8m3yAYM>) | [PDF](<https://openreview.net/pdf?id=xlQ8m3yAYM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148444>)

Geometry\-aware optimizers such as Newton and natural gradient can improve conditioning in deep learning, but scalable variants such as K\-FAC, Shampoo, and related preconditioners usually impose structural approximations early, often discarding cross\-layer interactions induced by the network computation\. We introduce Layerwise LQR \(LLQR\), a framework for learning structured inverse preconditioners under a global layerwise optimal\-control objective\. The starting point is an exact equivalence: the steepest\-descent step under a broad class of divergence\-induced quadratic models—including Newton, Gauss–Newton, Fisher/natural\-gradient, and intermediate\-layer metrics—can be written as a finite\-horizon Linear Quadratic Regulator \(LQR\) problem\. This formulation serves as a reference that exposes the layerwise dynamics and cost matrices encoding the original dense geometry\. We then derive a scalable relaxation that learns diagonal, \(E\-\)Kronecker\-factored, or other structured inverse preconditioners by minimizing the LQR objective and reusing them across iterations\. The resulting optimizer wraps standard methods while retaining a principled connection to second\-order geometry, without forming or inverting the global curvature matrix\. Experiments on ResNets and Transformers show that LLQR improves optimization dynamics and often translates these gains into improved final test performance, while adding only modest wall\-clock overhead\. It establishes LLQR as a practical framework for geometry\-aware second\-order methods and a reference for evaluating scalable approximations\.

## VSPO: Vector\-Steered Policy Optimization for Controllable Model Behavior

**Authors:** Xuechen Zhang; Zijian Huang; Kai Yang; Weijia Zhang; Jiasi Chen; Samet Oymak

**ID:** 154454 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DSKSg1Kz1q>) | [PDF](<https://openreview.net/pdf?id=DSKSg1Kz1q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154454>)

Modern language models often need to optimize a primary accuracy objective while also accommodating secondary behavioral preferences, such as verbosity, agreeableness, or the level of technical expertise in its response\. In practice, a base model may exhibit a desired behavior very rarely or not at all\. Thus, endowing the model with a target behavior creates a sparse behavioral reward bottleneck\. To address such multi\-objective problems, we introduce Vector\-Steered Policy Optimization \(VSPO\) which employs a steering vector associated with the target behavior to control the behavior intensity of the generated rollouts\. VSPO is obtained by modifying GRPO to sample rollouts with varying steering intensities\. This process can be interpreted as an on\-policy latent self\-distillation procedure where the model internalizes its steering vector\. By varying steering intensities, VSPO upsamples rare behaviors and enriches rollout diversity, which alleviates the sparse reward issue and provably accelerates the policy optimization\. Through comprehensive theory and experiments, we establish that VSPO has favorable properties compared to vanilla reward shaping and other alternative approaches\. Specifically, under a bandit abstraction, VSPO provably achieves better iteration complexity than reward\-shaped GRPO when the steering\-induced distributions are sufficiently aligned with the target behavior\. We evaluate VSPO across multiple reasoning benchmarks, including MATH and MMLU\-Pro, for four target behaviors: explanation expertise, confidence expression, robustness to misleading context, and response verbosity\. Our results show that VSPO consistently improves the control along target behavior while maintaining or improving task accuracy compared with reward shaping, teacher\-trace distillation, and guidance\-based baselines\.

## Follow the Regularized Leader Does Not Converge in Constrained Optimization

**Authors:** Ioannis Anagnostides; Ioannis Panageas; Nikolas Patris; Tuomas Sandholm

**ID:** 150986 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dmNapb9nHG>) | [PDF](<https://openreview.net/pdf?id=dmNapb9nHG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150986>)

Follow the regularized leader \(FTRL\) is a foundational algorithm in online learning whose regret properties have been extensively studied for decades\. However, in stark contrast to mirror descent\-\-\-and gradient descent in particular\-\-\-the convergence of FTRL to first\-order stationary points in constrained nonconvex optimization was hitherto unresolved\. In this paper, we show that continuous\-time FTRL can fail to converge even asymptotically in constrained optimization problems; that is, the Karush\-Kuhn\-Tucker \(KKT\) gap of FTRL can remain bounded away from zero indefinitely\. This is especially surprising in light of the fact that continuous\-time FTRL guarantees a monotonic improvement of the objective value\. As a result, we establish that non\-convergent behavior of no\-regret dynamics\-\-\-which besets general variational inequality problems\-\-\-can occur even in potential systems\. From a technical standpoint, our construction relies on an infinitely differentiable function where the gradient flow dynamics exhibit decelerating oscillations without ever converging pointwise, which we in turn embed into higher\-dimensional FTRL dynamics that sustain a perpetually large KKT gap\.

## GNES: Neural\-Guided Evolutionary Program Search for Interpretable Multi\-Agent Control

**Authors:** Chen Wang; Minfang Lu; Xiangke Wang; Cheng Zhu; Fei Ming; Yaochu Jin

**ID:** 152436 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T9dHiOHpHI>) | [PDF](<https://openreview.net/pdf?id=T9dHiOHpHI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152436>)

Synthesizing interpretable controllers for multi\-agent systems requires optimizing discrete symbolic programs from sparse, expensive, long\-horizon simulator feedback\. Evolutionary program search preserves interpretability but often spends many evaluations on weak random variation, whereas deep multi\-agent reinforcement learning can learn effective policies that are difficult to inspect\. We propose GNES, a neural\-guided evolutionary program search framework for symbolic controller synthesis\. GNES casts controller design as a program\-edit decision process: gene growth trees are program states, validity\-preserving genetic operators are actions, simulator fitness provides the return, and policy\-\-value graph neural networks learn edit signals over controller topology\. Monte Carlo tree search performs look\-ahead planning in controller\-program space before simulator validation, closing the loop between evolution, learned guidance, and verified rollouts\. Experiments on three decentralized AirSim swarm\-control benchmarks show that GNES improves search efficiency and final controller quality relative to evolutionary and reinforcement\-learning baselines, while automatically evolving compact, inspectable distributed velocity controllers\. The discovered policies expose coordination motifs, such as density\-normalized radial gains and motion\-compensating terms, that differ from standard hand\-designed swarm rules\. Ablations and learned\-search comparisons indicate that graph\-structured policy\-\-value learning and MCTS look\-ahead both contribute to the gains\.

## Continuous p\-adic Optimization

**Authors:** Julian Salazar; Dimitri Kanevsky; Matt Harvey; Pascal Getreuer; Lucas Dixon

**ID:** 149111 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=smz6odwrZ6>) | [PDF](<https://openreview.net/pdf?id=smz6odwrZ6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149111>)

We present the first method for intrinsic, continuous gradient\-based optimization for models with $p$\-adic parameters\. To overcome the vanishing gradients caused by the discrete valuation of the $p$\-adics, we lift parameters to the Berkovich affine line, a canonical analytification of the $p$\-adic numbers that provides a path\-connected space\. This enables gradient descent that respects the non\-Archimedean metric with a local transition cost that is linear\. By extending losses to the Berkovich line, we get piecewise linear functions, corresponding to the cell decomposition of a tropical complex; gradients are efficiently computed via max\-plus operations\. We prove local convergence within tropical cells for linear models on the $\\mathbb\{Q\}\_p$ subtree, and demonstrate the success of our method on synthetic tasks and on the $p$\-adic Quillian semantic benchmark \[Martins, 2025\], where we achieve performance equal or better than $\\mathbb\{R\}$\-valued counterparts while training in comparable time\.

## SAS: Simple Attention Sparsification via End\-to\-End Optimization of Context Ranking

**Authors:** Zhiwei Li; Lei Zhu; Hao Gu; Xiang Hu; Yan Wang; Haitao Mi; Sirui Han; Leo Liang; Zhijiang Guo

**ID:** 151940 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Wgm2AWIzrX>) | [PDF](<https://openreview.net/pdf?id=Wgm2AWIzrX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151940>)

Post\-training attention sparsification reduces the quadratic cumulative attention cost of pretrained Transformers by selecting a small set of context units \(tokens or blocks\) for each query\. Existing trainable methods usually rely on a lightweight selector to score context units followed by a hard Top\-$K$ selection, which blocks gradients from the language modeling loss\. As a result, these methods commonly resort to distilling layer\-wise dense attention distributions\. While this approach encourages the selector to rank context units according to dense attention weights in the original model, such a ranking is not directly aligned with their impact on the model's final predictions under a fixed attention budget \(ie, the number of attended context units per query\), which can waste the limited attention budget on less useful units\.  To address this ranking misalignment, we propose \*\*S\*\*imple \*\*A\*\*ttention \*\*S\*\*parsification \(SAS\), a gated sparse attention mechanism that optimizes context ranking end\-to\-end with the language modeling loss\. The key idea is to inject the selector's continuous scores into the attention logits during training, allowing the language modeling loss to update the selector through standard backpropagation\. We identify several choices that are crucial to make this simple design work well in practice: placing the gate inside the attention $\\operatorname\{softmax\}$ in log form, keeping all context units active during training so each of them can receive gradients, and preserving continuous selector scores so the model learns relative priorities rather than only hard selections\. Since a naive implementation that explicitly materializes the full attention matrix would cause prohibitive memory overhead for long sequences, we implement a memory\-efficient Triton kernel that integrates the design into a FlashAttention\-style computation\. SAS consistently outperforms trainable sparse\-attention across attention budgets, with especially large accuracy gains under tight budgets, demonstrating more effective context ranking for downstream tasks\.

## Signal\-Adaptive Trust Regions for Gradient\-Free Optimization of Recurrent Spiking Neural Networks

**Authors:** Jinhao Li; Yuhao Sun; Zhiyuan Ma; Hao He; Xinche Zhang; Xing Chen; Li Jin; Sen Song

**ID:** 150835 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ewv4YcAxRj>) | [PDF](<https://openreview.net/pdf?id=ewv4YcAxRj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150835>)

Recurrent spiking neural networks \(RSNNs\) are a promising substrate for energy\-efficient control policies, but training them for high\-dimensional, long\-horizon reinforcement learning remains challenging\. Population\-based, gradient\-free optimization circumvents backpropagation through non\-differentiable spike dynamics by estimating gradients\. However, with finite populations, high variance of these estimates can induce harmful and overly aggressive update steps\. Inspired by trust\-region methods in reinforcement learning that constrain policy updates in distribution space, we propose \*\*Signal\-Adaptive Trust Regions \(SATR\)\*\*, a distributional update rule that constrains relative change by bounding KL divergence normalized by an estimated signal energy\.  SATR automatically expands the trust region under strong signals and contracts it when updates are noise\-dominated\. We instantiate SATR for Bernoulli connectivity distributions, which have shown strong empirical performance for RSNN optimization\. Across a suite of high\-dimensional continuous\-control benchmarks, SATR improves stability under limited populations and reaches competitive returns against strong baselines including PPO\-LSTM\. In addition, to make SATR practical at scale, we introduce a bitset implementation for binary spiking and binary weights, substantially reducing wall\-clock training time and enabling fast RSNN policy search\.

## Beyond Outcome Rewards: Step\-Level Self\-Distilled Policy Optimization for Deep Search Agents

**Authors:** Haoze Wu; Chuqiao Kuang; Tianyi Zhuang; Xiaoguang Li

**ID:** 154780 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B1ywhnzK7h>) | [PDF](<https://openreview.net/pdf?id=B1ywhnzK7h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154780>)

Deep search agents operate over trajectories spanning dozens of steps, yet standard reinforcement learning provides only a single outcome reward per trajectory — supervision that is far too sparse for effective credit assignment\. On\-policy self\-distillation \(OPSD\) addresses this by using the model's own logits as dense token\-level teachers, but extending it to search agents introduces a fundamental tension: the teacher, having access to privileged information such as the correct answer, produces a distribution that differs systematically from the student's exploration\-based reasoning, and naive distillation causes the student to inherit this information asymmetry rather than learn better search strategies\. We resolve this tension through two contributions\. First, we construct Evidence Anchors — concise, step\-level evidence snippets extracted from the web — as privileged information that captures key reasoning steps without revealing the entire answer path\. Second, we propose Step\-Level Self\-Distilled Policy Optimization \(SSPO\), which converts teacher–student disagreement into step\-level advantage weights within GRPO, applied exclusively to incorrect trajectories\. This design decouples what to update from how much to update: the outcome reward determines the direction of policy change, while the teacher modulates its magnitude at each step\. Correct trajectories are left untouched, preserving their diversity\. On Qwen3\-8B, SSPO consistently outperforms GRPO across BrowseComp, GAIA, and FRAMES, surpassing or matching GRPO trained with twice as many gradient steps while adding only about 5\\% overhead per step from a single additional forward pass\.

## FerQ: Fermat Quotient Reformulation of High\-Order Binary Optimization

**Authors:** Phuong Nam Nguyen; Seng Loke; Anil Prabhakar; Son N Tran

**ID:** 152029 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W4U6AMYhfN>) | [PDF](<https://openreview.net/pdf?id=W4U6AMYhfN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152029>)

High\-order binary optimization \(HOBO\) problems, defined as the minimization of functions involving interactions among three or more binary variables, are prevalent in machine learning and quantum computing\. The minimization of these high\-order energy functions remains computationally intractable without quadratization or reformulation\. This work introduces FerQ, a universal and auxiliary\-free reformulation of high\-order energy functions based on Fermat quotient expansion\. For any degree\-d monomial over binary variables, FerQ provides an exact, closed\-form representation as a rational linear combination of Fermat quotients evaluated on a scalar aggregate, with coefficients determined by a single matrix inversion\. FerQ is evaluated against twelve existing energy function transformation methods on k\-SAT and Max\-k\-SAT benchmarks from four databases, as well as on random p\-spin glass and k\-local Hamiltonian instances\. FerQ achieves the highest satisfaction and weighted satisfaction rates across all benchmarks, while incurring the lowest CPU runtime\. To enable deployment on quantum annealers, we derive FerQ\-Bc, a qubit\-efficient embedding scheme that maps the reformulated energies onto quadratic unconstrained binary optimization \(QUBO\) form, achieving good ancilla efficiency in high\-degree regimes\.

## HALO: Heterogeneous\-Aware LoRA Optimization via Rank Allocation and Client\-Aware Projection

**Authors:** Xiaohua Feng; Yuyuan Li; Jiayuan Fang; Fengyuan Yu; Jiaming Zhang; Li Zhang; Xiang Liu; Jun Wang; Chaochao Chen

**ID:** 154108 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GCoRDt8PdU>) | [PDF](<https://openreview.net/pdf?id=GCoRDt8PdU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154108>)

Federated Learning \(FL\) with Low\-Rank Adaptation \(LoRA\) enables privacy\-preserving collaborative fine\-tuning of foundation models\. Existing federated LoRA studies often assume homogeneous ranks and lack principled rank allocation, leading to underfitting or overfitting under data and resource heterogeneity\. Although later heterogeneous\-rank federated LoRA methods relax the homogeneous\-rank assumption, they still ignore resource\-adaptive rank allocation across clients, while their aggregation and distribution strategies suffer from structural limitations, including rank collapse in naive truncation and the loss of locally relevant update signals caused by objective mismatch in SVD truncation\. To address these issues, we propose HALO, a heterogeneous federated LoRA framework that integrates adaptive rank allocation with client\-aware aggregation and distribution\. Under the neural tangent kernel regime, we derive a sufficient rank condition to guide client\-specific rank allocation from local data geometry and resource constraints\. We further propose Client\-Aware Projection \(CAP\), which builds a product\-summed reference and redistributes rank\-compatible balanced LoRA factors through projections onto client\-induced subspaces, improving generalization via cross\-client information while preserving locally relevant update signals\. We show that CAP controls the client\-loss\-relevant truncation residual under the NTK approximation without additional communication overhead, which stabilizes local training and improves performance\. Extensive experiments demonstrate the effectiveness of HALO\. Our code is available at \[https://anonymous\.4open\.science/r/artifact2026\-4174\]\(https://anonymous\.4open\.science/r/artifact2026\-4174\)\.

## TraceTriage: A Benchmark for Cost\-Aware Stop\-or\-Continue Decisions in Delayed\-Outcome Workflows

**Authors:** Sihang Lei; Yihang Qiu; Xueyan Zhao; Yuwei Wang; Weiqiang Wang

**ID:** 139848 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0nT73ZOEvC>) | [PDF](<https://openreview.net/pdf?id=0nT73ZOEvC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139848>)

Current agent benchmarks largely evaluate whether a workflow eventually succeeds, but many real workflows require an earlier decision: whether to continue spending resources or stop and reallocate them before the final outcome is known\. In model training, simulation campaigns, and chip implementation, success or failure may be visible only after substantial compute and engineering time\. Wrong stops discard runs that would have succeeded; wrong continuations waste downstream compute, tool time, and engineering effort\. This asymmetric, risk\-constrained intervention problem is not captured by benchmark scores that only measure eventual success\. We present TraceTriage, a benchmark for evaluating LLM agents and decision models on cost\-aware stop\-or\-continue policies from checkpoint\-local process records\. TraceTriage is not a final\-outcome prediction benchmark: it evaluates deployable interventions using validation\-only thresholding under a false\-stop cap and remaining\-cost utility\. We instantiate the protocol with OpenROAD, an open\-source electronic\-design\-automation workflow that turns hardware designs into placed\-and\-routed chip layouts through staged tools\. OpenROAD is a reproducible substrate, not the benchmark's scope: it provides staged observability, heterogeneous logs and reports, measurable remaining runtime, reproducibility, and verifiable outcomes\. The released benchmark uses no\-leak run\-level splits and instantiates this protocol through 10 OpenROAD design\-optimization campaigns with a 50,000\-trial budget, retaining 31,572 runs and expanding them to 81,041 checkpoint prefixes with fixed train/validation/test splits\. Each example contains only evidence available at a workflow checkpoint, while remaining\-cost annotations are used only for evaluation\. Together, the results make TraceTriage a capability\-boundary benchmark for cost\-aware workflow intervention: it verifies actionable signal in checkpoint\-local records, quantifies transfer sensitivity, and exposes the unresolved cold\-start calibration gap in delayed\-outcome, risk\-constrained settings\.

## ContinuLoc: Continuous Pose Inference over Neural Fields for UAV Geo\-Localization

**Authors:** Weikun Zhou; Jinliang Lin; Yu Zang; Lin Xie; HaiqingFu; Sheng Ao; Shangshu Yu; Zhiming Luo; Cheng Wang

**ID:** 149317 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=r4Nd67ZClj>) | [PDF](<https://openreview.net/pdf?id=r4Nd67ZClj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149317>)

Cross\-view UAV geo\-localization involves three design choices: how to represent the UAV observation, how to represent the geo\-referenced scene, and how to infer pose from their interaction\. The dominant paradigm organizes the world as a discretized 2DoF candidate library, coupling scene representation to inference and bounding pose accuracy by sampling resolution\. We decouple scene representation from pose inference by encoding the geo\-referenced world as a continuously queryable semantic neural field, enabling localization to be formulated as explicit optimization over a continuous 4DoF pose space — parameterized by 2D ground position, in\-plane heading, and viewing scale\. Pose hypotheses are evaluated globally in a shared semantic feature space, bypassing the sampling bottleneck of retrieval\. We learn 4DoF pose\-sensitive observation representations under full 4DoF supervision provided by ContinuScenes, a multi\-city benchmark with dense near\-nadir UAV imagery and complete pose annotations\. Inference proceeds hierarchically, progressing from broad pose\-space coverage to adaptive concentration on high\-compatibility regions\. Preliminary experiments demonstrate that our method substantially outperforms prevailing localization paradigms, including discrete retrieval and absolute pose regression, across increasingly strict 4DoF pose criteria\.

## TROPT: An Open Framework for Unifying and Advancing Discrete Text Optimization

**Authors:** Matan Ben\-Tov; Mahmood Sharif

**ID:** 139066 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nFkk23rNbo>) | [PDF](<https://openreview.net/pdf?id=nFkk23rNbo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139066>)

\*Discrete text\-trigger optimization\*—searching for text sequences that, when ingested by a model, steer it toward a specified objective—underpins model red\-teaming \(e\.g\., LLM jailbreaks\), as well as auditing and interpretability\. However, the current state of discrete optimizers hinders their adoption and progress\. First, existing optimizers, when open\-sourced at all, are scattered across research codebases tied to specific problem domains\. Second, optimizer variants proliferate, each requiring engineering overhead to use or extend, and hard to compare head\-to\-head\. Together, these raise the bar to \*adopting\* optimizers in existing or new domains, and to \*advancing\* them via new strategies\. We address these gaps with TROPT, the first open\-source framework that unifies discrete optimizers' execution and standardizes their development under a single interface\. TROPT currently ships with 30\+ end\-to\-end optimization recipes—covering applications such as jailbreaking and probing model internals—built from 15\+ optimizers \(spanning white\-box to black\-box access\) and 15\+ losses, from foundational to state\-of\-the\-art methods\. Beyond democratizing established methods, TROPT makes it easy to \*customize\* optimization recipes by swapping any component—models, objectives, and optimizers—extending its reach across domains and new applications\. Demonstrating its utility, we leverage TROPT in several controlled studies: \*\(i\)\* novel large\-scale experiments comparing and enhancing optimization strategies for LLM jailbreaks, revealing potent\-yet\-underadopted techniques; and \*\(ii\)\* cross\-domain demonstrations \(e\.g\., benign prompt recovery and corpus poisoning\)\. In all, TROPT significantly lowers the barrier to adopting and advancing discrete text optimization\.

## H\-GenPO: Hierarchical Generative Policy Optimization via the Option\-Critic Framework

**Authors:** Wonhyeok Choi; Minwoo Choi; Jaeyeul Kim; Kyumin Hwang; Jongmin Gim; Sunghoon Im

**ID:** 148440 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xmAWFBUpId>) | [PDF](<https://openreview.net/pdf?id=xmAWFBUpId>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148440>)

Diffusion\-based policies have demonstrated remarkable performance in online reinforcement learning \(RL\) by virtue of their expressive, multimodal action distributions\. However, existing methods operate on a flat architecture that must generate a new action at every timestep, with no mechanism for temporal commitment to a behavioral mode—making them ill\-suited for context\-dependent tasks that require sustaining coherent behavioral modes, regardless of how expressive their action distributions are\. We propose Hierarchical Generative Policy Optimization \(H\-GenPO\), the first framework to integrate on\-policy diffusion\-based RL with the temporal abstraction of the Option\-Critic architecture\. H\-GenPO adopts a two\-level hierarchy in which a high\-level policy over options selects among a discrete set of options, while a unified flow matching model—conditioned on a learned option embedding—serves as the expressive low\-level intra\-option primitive\. The shared intra\-option policy design encapsulates diverse behavioral repertoires within a single set of parameters, enabling scalable hierarchical control without the parameter growth associated with maintaining separate policy networks per option\. We evaluate H\-GenPO on 8 standard continuous control tasks in Isaac Lab and 3 custom context\-dependent tasks designed to require coordinated behavioral mode switching\. Our empirical evaluation demonstrates that H\-GenPO achieves the best mean rank among all baselines on both standard and context\-dependent benchmarks, while also exhibiting interpretable option specialization that emerges without any option\-level supervision\.

## Echoes in Filter Bubble: Diagnosing and Curing Popularity Bias in Generative Recommender Systems

**Authors:** Jun YIN; Bangguo Zhu; Peng Huo; Ruochen Liu; Hao Chen; Senzhang Wang; Shirui Pan; Chengqi Zhang

**ID:** 148459 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xfHw2Qn1GR>) | [PDF](<https://openreview.net/pdf?id=xfHw2Qn1GR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148459>)

Recently, Generative Recommenders \(GRs\), characterized by a unified end\-to\-end framework, have exhibited astonishing potential in transforming the recommendation paradigm\. Despite their effectiveness, we recognize that GRs are still susceptible to the long\-standing issue of popularity bias that has pervaded the recommendation community\. Although a few studies have attempted to extend traditional debiasing methods to GRs, their effectiveness is marginal, and the fundamental reason why GRs suffer from popularity bias remains under\-explored\. To bridge this gap, this study focuses on two core aspects in GRs: the optimization of generative framework and the item tokenization based on semantic index\. Based on theoretical analyses, we identify that the severe popularity bias emerges from the confluence of a token\-level optimization flaw and the undifferentiated property of item tokenization\. Accordingly, this study develops a novel generative recommender system, called Ghost, by designing the asymmetric unlikelihood optimization and the skeleton\-founded tokenization\. Extensive empirical evaluations across three datasets, alongside multiple SOTA baselines, reveal that Ghost substantially alleviates popularity bias and promotes fairer recommendations, while incurring slight degradation to the overall recommendation utility\.

## Distributionally Robust Listwise Preference Optimization

**Authors:** Xudong Wu; Jian Qian; Pangpang Liu; Vaneet Aggarwal; Jiayu Chen

**ID:** 154214 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FL7ACXQ5Rb>) | [PDF](<https://openreview.net/pdf?id=FL7ACXQ5Rb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154214>)

Existing robust preference optimization for language\-model alignment mainly studies pairwise supervision and places robustness at the dataset, prompt, or preference\-pair level\. We instead study listwise preference optimization under ranking\-label uncertainty: given a prompt and a candidate list, the observed ranking over that list may be ambiguous due to annotator inconsistency, near\-ties, lossy rankwise feedback, or reward\-model noise\. We propose a pointwise total\-variation robust Plackett\-\-Luce objective that directly robustifies the ranking label conditional on the candidate list\. The robust loss admits an exact decomposition into the nominal PL loss plus a worst\-case PL correction, and the worst\-case ranking is obtained by sorting current implicit scores in ascending order, reducing the inner maximization from $K\!$ enumeration to $O\(K\\log K\)$\. This tractable structure yields strong offline and online optimization guarantees\. In the offline fixed\-list setting, the robust objective is convex and projected stochastic subgradient reaches global $\\epsilon$\-suboptimality with $O\(\\epsilon^\{\-2\}\)$ sample complexity\. In the online policy\-induced setting, where candidate lists are generated by the current policy, we establish weak convexity and $\\widetilde O\(\\epsilon^\{\-2\}\)$ Moreau\-envelope stationarity\. Experiments in offline LLM alignment show that the proposed robust correction largely preserves performance under clean labels and improves robustness under noise\. In online alignment, it makes reward\-model\-ranked candidate expansion more reliable and improves both reward\-model andexternal GPT\-4 judge metrics\.

## TPO: Tri\-level Distributionally Robust Learning for OOD Direct Preference Optimization

**Authors:** Chengtao Jian; Kai Yang

**ID:** 153123 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NkyrJPNzft>) | [PDF](<https://openreview.net/pdf?id=NkyrJPNzft>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153123>)

Direct Preference Optimization \(DPO\) minimizes empirical risk over observed preference comparisons, implicitly assuming that the training preference distribution matches the deployment preference distribution\. In practice, this i\.i\.d\. assumption often fails, as preference distribution shift exhibits a natural hierarchical structure across three levels: group\-level shift, prompt\-level shift, and conditional preference\-level shift\. Such multi\-level distributional mismatch poses a critical challenge for safe LLM deployment, yet existing robust DPO methods typically model either overall distributional uncertainty or a single robustness level, leaving the hierarchical structure of OOD preference shifts underexplored\. We propose TPO, a tri\-level distributionally robust framework for OOD preference optimization, which jointly models all three levels of distributional uncertainty through a hierarchical rectangular ambiguity set\. By instantiating it with Wasserstein distance, we derive a tractable and interpretable objective that combines a closed\-form preference\-level margin penalty, prompt\-level adversarial embedding perturbation, and worst\-case group reweighting, each governed by an independent radius\. We establish finite\-sample convergence guarantees and empirically validate the effectiveness of \\method\{\} over existing robust DPO methods\.

## High\-Dimensional Learning Dynamics of Attention\-Indexed Models

**Authors:** Yizhou Xu; Margarita Sagitova; Florent Krzakala; Lenka Zdeborová

**ID:** 154586 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CU34scUsmz>) | [PDF](<https://openreview.net/pdf?id=CU34scUsmz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154586>)

While attention mechanisms are the cornerstones of modern foundation models, the theoretical understanding remains largely elusive\. In this paper, we analyze the attention\-indexed model, a rich framework that encapsulates multi\-layer and multi\-head attention\. We first prove that while, in a suitable high\-dimensional limit, the macroscopic landscape of the population loss is characterized by a finite set of order parameters, the corresponding population gradient flow unfolds in an infinite\-dimensional state space, which we show can be exponentially well\-approximated by a finite truncated system\. Our dynamical analysis uncovers how standard attention parameterizations act as architectural implicit biases to overcome the curse of the information exponent—a barrier that typically traps the direct optimization of the attention matrix $S$\. Specifically, the tied attention \($S=WW^T$\) induces an automatic symmetry\-breaking geometry at initialization, shielding the gradient flow from uninformative manifolds and achieving weak recovery in $\\Theta\(1\)$ time\. For untied attention \($S=UV^T$\), we reveal a timescale separation dynamic: efficient weak recovery hinges on whether the fast\-timescale evolution of the pre\-activation mean successfully breaks initial symmetries\.

## Simplicity is Enough: ReAct Agents for Prompt Optimization

**Authors:** Andrei C\. Rusu; Andrei Dumitrescu; Adrian Catalin Badea; Cosmin Maria; Ion\-Marian Anghelina; Bai Li; Tomasz L Religa; Dragos H Bobolea

**ID:** 150401 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iJGXuLyRh7>) | [PDF](<https://openreview.net/pdf?id=iJGXuLyRh7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150401>)

Prompt optimization has recently been approached with increasingly specialized search procedures and evolutionary frameworks\. In this work, we ask whether such complexity is necessary to achieve competitive performance\. We introduce REAPO \(ReAct Agents for Prompt Optimization\), a lightweight framework that casts prompt optimization as an agentic process built around a ReAct loop augmented with evaluation and reflection tools\. Rather than relying on bespoke optimization machinery, REAPO iteratively refines prompts through error analysis, reflective reasoning, and validation against the optimization objective\. We evaluate REAPO on several established benchmarks spanning multi\-hop question answering, mathematical reasoning, fact verification, instruction following, and structured classification, as well as on real enterprise agentic tasks\. Across these settings, we find that this agentic optimizer can match or outperform specialized prompt tuning methods while requiring 2–7$\\times$ fewer evaluation rollouts and less auxiliary optimization logic\. We also report confidence intervals over multiple independent runs and show that single\-run evaluations on small benchmarks can give a misleading picture of relative performance, since LLM variance may obscure true gains\. Taken together, our results suggest that effective prompt optimization need not depend on increasingly elaborate optimization schemes, and that agentic methods can provide a more efficient alternative\.

## Quality\-Diversity Optimization as Multi\-Objective Optimization

**Authors:** Xi Lin; Ping Guo; Yilu Liu; Bo Xue; Qingfu Zhang; Jianyong Sun

**ID:** 153242 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mh007MnyEG>) | [PDF](<https://openreview.net/pdf?id=Mh007MnyEG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153242>)

The Quality\-Diversity \(QD\) optimization aims to discover a collection of high\-performing solutions that simultaneously exhibit diverse behaviors within a user\-defined behavior space\. This paradigm has stimulated significant research interest and demonstrated practical utility in domains including robot control, creative design, and adversarial sample generation\. A variety of QD algorithms with distinct design principles have been proposed in recent years\. Instead of proposing a new QD algorithm, this work introduces a novel reformulation by casting the QD optimization as a multi\-objective optimization \(MOO\) problem with a huge number of optimization objectives\. By establishing this connection, we enable the direct adoption of well\-established MOO methods, particularly set\-based scalarization techniques, to solve QD problems through a collaborative search process\. We further provide a theoretical analysis demonstrating that our approach inherits theoretical guarantees from MOO while providing desirable properties for the QD optimization\. Experimental studies across several QD applications confirm that our method achieves performance competitive with state\-of\-the\-art QD algorithms\.

## Towards Better Generalization in Lifelong Person Re\-Identification with Flatness\-Aware Learning

**Authors:** Seungbin Hong; Sung Whan Yoon; Jae\-Young Sim

**ID:** 155207 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7TZx0YOrdx>) | [PDF](<https://openreview.net/pdf?id=7TZx0YOrdx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155207>)

Lifelong person re\-identification \(LReID\) requires models to continuously learn from sequentially arriving domains while retaining discriminative power for previously seen identities\. A key challenge is to prevent catastrophic forgetting without access to old data, especially under exemplar\-free constraints\. While flat\-minima optimization has shown promise in continual learning, we identify a gradient conflict that limits the effectiveness of standard Sharpness\-Aware Minimization \(SAM\) in LReID\. The ReID loss gradient dominates the perturbation direction, causing the sharpness of the distillation loss to be underestimated, which hinders the flattening of the landscape necessary for knowledge retention\.   To resolve this conflict, we propose a framework that unifies selective flatness\-aware optimization, dual\-model training, and weight\-space interpolation\. Specifically, we maintain two models per task: a stability model whose SAM perturbation is computed solely from the distillation loss, and a plasticity model optimized for the current domain\. By decoupling the perturbation objectives, our selective SAM achieves more targeted sharpness exploration along the distillation landscape, guiding the stability model toward flatter and robust regions\. After training, the two models are fused via weight\-space interpolation, and we provide a theoretical bound showing that flatter stability solutions tighten the interpolation bound and reduce forgetting during fusion\. Our method is lightweight, modular, and readily compatible with existing LReID frameworks\. Experimental results demonstrate that the proposed method consistently improves the performance of LReID in terms of both knowledge retention and generalization to unseen domains\.

## Never Go Full Batch: Stochastic TMLE for Large\-Scale Debiased Inference

**Authors:** Diyang Li; Fei Wang; Kyra Gan

**ID:** 149810 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nBj3s8jbyk>) | [PDF](<https://openreview.net/pdf?id=nBj3s8jbyk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149810>)

Targeted Minimum Loss\-based Estimation \(TMLE\) is a classical plug\-in debiasing methodology that delivers doubly robust estimation and asymptotically efficient inference\. Despite its statistical guarantees, each iteration of standard TMLE requires solving a minimization subproblem over the entire dataset, resulting in prohibitive computational and memory costs that render the method impractical for large\-scale or real\-time settings\. To ease the bottlenecks, we introduce stochastic TMLE, a randomized targeting procedure that replaces each expensive full\-batch fluctuation fit with mini\-batch alternatives\. Our theoretical analysis establishes that the stochastic iterates converge to a neighborhood  \(noise ball\) centered around the target solution, and crucially, only a small number of subsequent full\-sample TMLE iterations suffice to reach an empirical efficient influence function root\. Consequently, our stochastic variant inherits the same guarantees and attractive properties as classical TMLE while substantially reducing per\-iteration complexity\. We further propose two computational variants with provable guarantees that broaden the algorithmic design space, offering  flexibility for  future developments in scalable targeted learning\.  Extensive experiments across diverse regimes demonstrate substantial acceleration over standard TMLE without sacrificing inferential quality\.

## PosterDuet: Co\-Evolving Design Generation and Reward Optimization for Product Poster Synthesis

**Authors:** junlong wu; Pengcheng Wei; Jia Sun; Huaiqing Wang; Weixuan Zeng; Zijun Li; Honglie Wang; Yongrui Heng; Boheng Zhang; Dewen Fan; Fan Yang; Tingting Gao; Houde Liu; Qianqian Gan

**ID:** 155036 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8v51RaMEuy>) | [PDF](<https://openreview.net/pdf?id=8v51RaMEuy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155036>)

Automatic e\-commerce poster generation requires the joint optimization of product fidelity, visual composition, text rendering, and commercial appeal\. Existing methods typically address this task through staged pipelines involving product segmentation, layout prediction, glyph rasterization, and conditional image synthesis\. While effective in constrained settings, such decompositions rely on rigid preprocessing assumptions and weaken the mutual adaptation among product appearance, typography, and scene composition, especially for hand\-held, worn, or context\-dependent products\. We reformulate this problem as \\emph\{holistic product\-aware poster editing\}: given a raw product image and structured metadata, the goal is to generate a complete poster directly, without segmentation masks, glyph control maps, or predefined layout boxes\. To this end, we propose PosterDuet, a closed\-loop framework that integrates a vision\-language model \(VLM\), an image editing model, and reward\-based optimization\. The VLM first generates a holistic design prompt that specifies background style, layout arrangement, promotional copy, and typographic intent from the raw image and metadata\. Conditioned on both the prompt and the original image, the image editor synthesizes the final poster in a unified editing process\. To optimize both commercial effectiveness and visual quality, we introduce a mixed\-reward learning framework that combines a CTR\-oriented reward with a generative holistic quality reward, and use GRPO to optimize the prompt\-generating VLM\. We further improve textual accuracy via OCR\-reward\-based reinforcement tuning of the image editor, and exploit natural\-language critiques from the generative reward model for iterative prompt refinement\. Extensive experiments show that PosterDuet generates more coherent, text\-faithful, and commercially effective posters than prior pipelined approaches\.

## Mirror Descent\-Ascent for mean\-field min\-max problems

**Authors:** Razvan\-Andrei Lascu; Mateusz Majka; Lukasz Szpruch

**ID:** 148349 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yXh6kzlErC>) | [PDF](<https://openreview.net/pdf?id=yXh6kzlErC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148349>)

We study two variants of the mirror descent\-ascent \(MDA\) algorithm for solving min\-max problems on the space of measures: simultaneous and alternating\. We work under assumptions of convexity\-concavity and relative smoothness of the payoff function with respect to a suitable Bregman divergence, defined on the space of measures via flat derivatives\. We establish non\-asymptotic convergence rates to mixed Nash equilibria, measured in the Nikaido\-Isoda error, proving an $\\mathcal\{O\}\(N^\{\-1/2\}\)$ rate for simultaneous MDA and an improved $\\mathcal\{O\}\(N^\{\-2/3\}\)$ rate for alternating MDA\. The main technical contribution is an infinite\-dimensional dual space analysis that relates Bregman divergences on measures to dual Bregman divergences on spaces of bounded continuous functions, allowing us to control asymmetric commutator terms created by alternating updates\. The results substantially generalize prior analyses restricted to bilinear objectives and also apply to nonlinear convex\-concave problems on measure spaces, thereby providing a unified theoretical foundation for MDA in mean\-field min\-max optimization\.

## ParetoM$^3$: Learning on the Pareto Set under Preference Guidance via Min\-Max\-Min Optimization

**Authors:** Pei Tang; Songtao Lu

**ID:** 155972 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1ROin5KHsq>) | [PDF](<https://openreview.net/pdf?id=1ROin5KHsq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155972>)

Learning across multiple inherently conflicting objectives requires selecting desirable trade\-offs from the Pareto set\.    In this work, we study preference\-guided multi\-objective optimization, where a predefined preference function is minimized over the weak Pareto set of multiple nonconvex objectives\.    Leveraging a merit function that vanishes on the weak Pareto set, we propose a penalty\-based min\-max\-min formulation, termed the M$^3$ problem, which unifies preference optimization and  the enforcement of weak Pareto optimality in a single objective\.    We further develop ParetoM$^3$, a single\-loop first\-order algorithm for computing stationary solutions of the resulting M$^3$ problem\.    Under a local Kurdyka\-\{\\L\}ojasiewicz assumption, we prove that ParetoM$^3$ finds an $\\epsilon$\-stationary point of the M$^3$ problem that is also approximately weakly Pareto optimal for the original multi\-objective problem when the penalty parameter is sufficiently large, with explicit non\-asymptotic convergence rates\.    We also show that this stationarity notion recovers existing optimality criteria, including approximate preference stationarity and approximate Karush\-Kuhn\-Tucker conditions, under the same assumptions used in prior works\. Experiments on a synthetic benchmark, image classification, regression, and math reasoning demonstrate that ParetoM$^3$ reliably attains preferred weak Pareto optimal solutions while achieving strong practical performance\.

## Beyond Clipping: Signed Logarithmic Smoothing for Policy Optimization

**Authors:** Jihun Yun; Sungjoon Yoon; Beomhan Baek; Minhak Song; Jongha \(Jon\) Ryu; Kwang\-Sung Jun

**ID:** 153088 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=O4LWIO9opj>) | [PDF](<https://openreview.net/pdf?id=O4LWIO9opj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153088>)

Policy optimization algorithms that reuse rollouts build updates of the form $\\rho A$, where $\\rho$ is the importance ratio from the current policy to the rollout policy and $A$ is an advantage estimate\. Recent RL algorithms such as PPO and GRPO rely on clipping $\\rho$ for stable policy updates, which introduces further nonsmoothness in the optimization landscape\. \\emph\{Is clipping the best we can do?\} In this paper, we propose signed logarithmic smoothing \(Signed LS\), $\\psi\_\\beta\(z\) = \\mathrm\{sgn\}\(z\)\\,\\beta^\{\-1\}\\log\(1\+\\beta\|z\|\)$, applied to the full weighted update rather than to the ratio alone\. Building on this surrogate, we introduce KRAFT, a GRPO\-style policy\-optimization objective that replaces the clipped surrogate with Signed LS\. For theoretical justification, we consider an adaptive off\-policy contextual\-bandit setting: we compare the deviation structure of Signed LS with clipping\-style surrogates, prove surrogate fidelity for Signed LS, and obtain regret transfer against a fixed comparator policy\. The comparison highlights a structural distinction: ratio clipping introduces explicit tail\-bias and threshold\-dependent concentration terms, whereas Signed LS controls distortion through a smooth second\-order quantity\. Empirically, our contextual\-bandit experiments provide evidence of these effects\. In RLVR experiments on math\-reasoning benchmarks and multiple LLM backbones, we observe that KRAFT consistently shows lower KL from the reference policy and higher entropy throughout training without incurring accuracy loss compared to GRPO\.

## Teacher\-Aware Evolution of Heuristic Programs from Learned Optimization Policies

**Authors:** Minyu Chen; Song Qin; Ling\-I Wu; Jianxin Xue; Guoqiang Li

**ID:** 151024 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dXWka7F0Ie>) | [PDF](<https://openreview.net/pdf?id=dXWka7F0Ie>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151024>)

LLM\-based automatic heuristic design has shown promise for generating executable heuristics for combinatorial optimization, but existing methods mainly rely on delayed endpoint performance\. We propose a teacher\-aware evolutionary framework that uses independently trained learned optimization policies as behavioral teachers\. Instead of deploying or imitating the teacher, our method queries it on states visited by candidate heuristic programs and uses its action preferences as local feedback for evolution\. The resulting search discovers static executable heuristics guided by both task performance and teacher\-derived behavioral signals\. Experiments on scheduling, routing, and graph optimization benchmarks show that our method improves over performance\-driven LLM heuristic evolution baselines while requiring no neural inference at deployment\. These results suggest that learned optimization policies can be repurposed as behavioral feedback sources for automatic heuristic discovery\.

## Free Heavy\-Tailed Lunch for Muon: A Theoretical Justification of Empirical Success

**Authors:** Florian Hübler; Thomas Pethick; Suvrit Sra

**ID:** 155600 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4Mid5GMDGS>) | [PDF](<https://openreview.net/pdf?id=4Mid5GMDGS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155600>)

Non\-Euclidean optimisation methods with matrix\-valued updates, such as Muon and Scion, have recently shown strong empirical performance for training Transformer models, yet their theoretical advantages over Euclidean methods remain poorly understood\. We address this gap in the heavy\-tailed non\-convex regime, where stochastic gradients have bounded $p$\-th central moments, $p \\in \(1,2\]$\. We show that certain non\-Euclidean methods achieve optimal sample complexity under stronger stationarity measures, while Euclidean methods incur additional dimension\-dependent costs\. As a consequence, for $m \\times n$ matrices, Muon finds an $\\varepsilon$\-stationary point in nuclear norm within $\\mathcal\{O\}\\left\(\\min\\lbrace m, n\\rbrace \\frac\{\\Delta\_1 L\}\{\\varepsilon^2\} \\left\(\\frac \\sigma \\varepsilon \\right\)^\{\\frac p \{p\-1\}\}\\right\)$ iterations, absorbing heavy\-tailed noise without extra dimension dependence, unlike Euclidean methods\. We further prove this dimension dependence is optimal for all first\-order methods under nuclear\-norm stationarity\. Experiments on large language models support our theory\. Surprisingly, our results suggest that other Schatten geometries beyond the spectral geometry of Muon can perform competitively in certain settings\.

## Ordered Policy Optimization

**Authors:** Dongkyu \(Derek\) Cho; Pan Xu

**ID:** 150221 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jrmv9JPeKh>) | [PDF](<https://openreview.net/pdf?id=jrmv9JPeKh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150221>)

Proximal Policy Optimization \(PPO\) stabilizes policy updates by clipping the importance ratio between the new policy and the data\-collecting policy\. The standard rule uses one fixed clipping range for all samples\. While this choice offers simplicity and effectiveness, it fails to distinguish statistically harmful extreme ratio values from large, yet tolerable changes\. We study how to adapt the clipping radius to the reliability of the induced importance ratio distribution\. Our case study demonstrates that reliable updates require controlling these extreme ratios, rather than merely verifying that individual ratios fall within a fixed interval\. Motivated by this observation, we propose Ordered Policy Optimization \(\\textsc\{OPO\}\)\. In each minibatch, \\textsc\{OPO\} sorts the importance ratios, selects the extreme ratios that potentially have the largest effect on the update, and assigns them adaptive sample\-wise radii instead of using the fixed clipping radius\. These radii are derived from a prescribed tail profile, which specifies desired target values for the selected extreme ratios\. The resulting objective remains first\-order and requires only minibatch sorting and a modified policy loss\. Experiments conducted on MuJoCo and Atari benchmarks demonstrate that this simple modification achieves strong performance relative to established baselines\.

## When Sanitization Becomes the Trigger: Defense\-Triggered Backdoor Attacks

**Authors:** Zhiguo Yang; Ruotian Liu; Peipei Xu; Wenjie Ruan

**ID:** 155754 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3CK0DzGy3m>) | [PDF](<https://openreview.net/pdf?id=3CK0DzGy3m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155754>)

Backdoor defenses are widely regarded as key to secure third\-party model deployment\. However, we are the \*first\* to show that, in standard backdoor sanitization pipelines, the defense process itself can be exploited and turned into a conditional trigger\. We propose \*\*\*D\*\*efense\-\*\*T\*\*riggered \*\*B\*\*ackdoor\* \(DTB\): an attacker implants both a normally active \*decoy backdoor\* and a dormant \*hidden backdoor\*, so that model sanitization suppresses the decoy backdoor while activating the hidden backdoor, thereby making the defense process the trigger condition for the hidden backdoor\. DTB uses bi\-level optimization to approximate the shared sanitization effect of mainstream backdoor defenses, while constraining the hidden backdoor to activate only after the decoy backdoor is sufficiently suppressed\. Experiments on multiple datasets, different networks, and 14 representative defenses show that DTB can \*stably trigger\* the hidden backdoor, and this phenomenon remains significant after multi\-round compositional sanitization\. Our findings reveal a potential threat in existing backdoor defense pipelines and suggest that post\-sanitization safety cannot be judged solely by whether the original backdoor has been eliminated\.

## DASS: A Solver\-Agnostic Dynamic Auxiliary Search Strategy for Symbolic Regression

**Authors:** Yuxiao Hu; Qian Li; Ding Wang; Yekun Zheng; Jinyue Yan; Yuntian Chen

**ID:** 149310 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=r8CiyuxeA4>) | [PDF](<https://openreview.net/pdf?id=r8CiyuxeA4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149310>)

Symbolic regression \(SR\) aims to discover interpretable mathematical expressions from data and plays a key role in scientific discovery\. However, existing methods face a common bottleneck: the enormous search space and severe combinatorial explosion make it difficult to achieve a favorable trade\-off between accuracy and algorithmic efficiency\. We argue that, in addition to designing increasingly complex solver\-specific SR strategies, an equally promising direction is to equip them with a shareable auxiliary strategy that can provide reliably search guidance\. To this end, We propose DASS, a solver\-agnostic Dynamic Auxiliary Search Strategy that improves SR by constructing and refining a high\-potential auxiliary search subspace\. DASS represents the auxiliary search space as a functional subspace spanned by a set of high\-potential basis function terms\. It estimates term utility through multi\-environment evaluation, filters unstable guidance, and updates terms' potential score with a Gibbs posterior, thereby calibrating the subspace to provide more reliable guidance for downstream solvers\. The High\-quality solutions produced by the solver are used to update the set of basis terms\. This forms a virtuous closed\-loop optimization process: the subspace guides the downstream solver, and the solver feedback reshapes the subspace for subsequent exploration\. DASS can be seamlessly integrated with various types of SR solvers\. Extensive experiments on LLM\-SRBench show that DASS significantly improves the accuracy of original solvers with a manageable increase in runtime\.

## Orthogonal Updates for the Win: Towards Accelerated Adaptive Minimax Optimization

**Authors:** Zhiwei Zhai; Xinyu Wang; Wenjing Yan; Lei Ding; Ying\-Jun Zhang

**ID:** 155673 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3qFdSTZko6>) | [PDF](<https://openreview.net/pdf?id=3qFdSTZko6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155673>)

Single\-loop minimax methods are appealing for modern machine learning, but standard stochastic gradient updates can be unstable and oscillatory under tightly coupled primal\-\-dual dynamics, making performance notoriously sensitive to stepsizes\. To fundamentally improve stability, we develop an orthogonal update framework tailored to minimax optimization, which applies updates along orthogonalized directions to reduce update anisotropy\. However, orthogonalization reshapes the optimization geometry and makes coordinating primal\-\-dual stepsizes even more delicate\. To overcome this challenge, we develop \\textbf\{AdaSGDA\}, which equips orthogonal updates with an adaptive stepsize rule driven by accumulated gradient norms\. This mechanism automatically balances coupled primal\-\-dual progress under orthogonalization, yielding an effectively parameter\-free method for nonconvex\-strongly\-concave minimax optimization\. We prove that AdaSGDA avoids problem\-dependent tuning while attaining the state\-of\-the\-art $\\mathcal\{O\}\\left\(T^\{\-1/4\}\\right\)$ convergence rate\. We further propose \\textbf\{AdaSGDA\-VR\}, which incorporates a carefully designed variance reduction scheme and achieves the faster $\\mathcal\{O\}\\left\(T^\{\-1/3\}\\right\)$ rate\. Extensive experiments demonstrate that our methods deliver competitive performance compared to existing minimax optimization methods\.

## SteadyThought: Mitigating LLM Under\-Thinking via Thought\-Level Preference Optimization

**Authors:** Zhenyue Peng; Lin Yang; Jie Wang; Xiaoqi Ni; Hanzhu Chen; Xize Liang; Yanjun Wu; RujingWang; Kaiwen Zhou; Jianye Hao

**ID:** 148435 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xpPQq8hDSx>) | [PDF](<https://openreview.net/pdf?id=xpPQq8hDSx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148435>)

Flexible switching between reasoning trajectories \(i\.e\., thoughts switching\) has significantly enhanced the reasoning capabilities of Large Reasoning Models \(LRMs\)\. However, existing models often switch excessively yet fail to sustain promising reasoning thoughts\-\-\-a phenomenon termed ''under\-thinking''\. While recent efforts suppress switching to mitigate this, such over\-correction may discard valuable trajectories\. To address this challenge, we propose Steady Thought \(ST\), a novel thought\-level preference optimization framework\. ST formalizes under\-thinking as a preference issue at switching points, forcing single\-path continuations from identified points to yield high\-quality reasoning\. Then, ST performs thought\-level preference optimization by treating the newly generated response as preferred and the original one as dis\-preferred\. Experiments across multiple models and datasets show that ST effectively reduces token consumption while maintaining or even improving accuracy\. It reduces output length by up to 63\.8% while improving accuracy by up to 11\.4%\. Further analysis suggests that ST helps models acquire a generalizable ability to reduce redundant switching across domains and languages\.

## Scaling Optimization\-Oriented Hypernetworks for Implicit Neural Representations

**Authors:** Lulu Cai; Hanxiang Ren; Siyan Dong; Li Sun; Jiefeng Wu; Youyi Zheng; Yi Ma; Yanchao Yang

**ID:** 151523 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a2C8sbYUCs>) | [PDF](<https://openreview.net/pdf?id=a2C8sbYUCs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151523>)

We present a hypernetwork that generates the parameters of an implicit neural representation \(INR\) for a given signal in a single forward pass, without test\-time optimization\. Existing hypernetworks for this problem either ignore the chain\-rule structure of the test\-time optimization that produces an INR or, when they preserve it, instantiate the structure with MLPs whose parameter count grows quartically in target\-network width\. Our central contribution is to show that this parameter\-count cost is structural to the MLP instantiation, not to the optimization\-oriented principle of preserving chain\-rule structure, and to resolve it by replacing the MLP body with attention\. The resulting hypernetwork combines three design choices: an output\-neuron\-centric tokenization that aligns the token axis with each layer's output\-neuron axis; an information\-flow consistency rule that fixes the role of every cross\-attention module from the representation its output should occupy; and a token\-space iterative rollout that realizes the five quantities one optimization step on the target INR computes as five cross\-attention modules with parameter count independent of target\-network width\. Across five 2D and 3D INR generation benchmarks, our method outperforms the state\-of\-the\-art single\-pass and optimization\-oriented baselines; scales to target\-network widths at which the MLP\-based optimization\-oriented paradigm exhausts GPU memory; and produces the highest result on NeRF generation without ground\-truth INR weights supervision\.

## Step\-by\-Step Optimization\-like Reasoning in LLMs over Expanding Search Spaces

**Authors:** Nicolás Astorga; Nabeel Seedat; Mihaela van der Schaar

**ID:** 153635 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Juf7k3U9xW>) | [PDF](<https://openreview.net/pdf?id=Juf7k3U9xW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153635>)

Verifiable reward training has improved mathematical and coding reasoning, but these domains capture only part of step\-by\-step decision making\. Many real\-world tasks require finding a high\-value feasible plan among many valid alternatives\. We introduce $\\text\{OPT\}\\star$, a scalable family of optimization\-style tasks for training and evaluating LLM step\-by\-step optimization\-like reasoning along a complexity axis: each task provides a feasibility checker and evaluator, while a complexity parameter expands the search space without requiring new human labels\. This motivates studying these tasks in two regimes: \(i\) solver\-guided online policy optimization, which uses a solver as a value oracle for partial states and applies rank\-based reward shaping to reinforce better next steps, and \(ii\) search\-based offline RL when such solvers are unavailable\. Theoretically, we relate success in large search spaces to the information a reasoner extracts per unit of search budget\. Empirically, we ablate the ingredients that make search efficient on $\\text\{OPT\}\\star$ and show that training on $\\text\{OPT\}\\star$ improves step\-by\-step optimization\-like reasoning\.

## Value\-Priced Uncertainty: A Family of PPO\-Compatible Exploration Bonuses

**Authors:** qili shen; Xuanhong Chen; Ang He; Dake Zhang; Kairui Feng

**ID:** 149802 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nFeALs705V>) | [PDF](<https://openreview.net/pdf?id=nFeALs705V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149802>)

Proximal Policy Optimization \(PPO\) is value\-driven only after experience has been collected: Generalized Advantage Estimation reinforces sampled actions according to their bootstrapped advantage, but the exploration process that produced those samples is still governed mainly by policy\-space noise and entropy regularization\. As a result, PPO does not explicitly ask, before sampling, which uncertain transitions would most improve its advantage estimates\. We argue that PPO exploration should be formulated as \*value\-priced uncertainty\*: uncertainty should be explored when it is both large and able to change the advantage\. We propose \*\*VALU\*\* \(\*\*V\*\*alue\-\*\*A\*\*ware \*\*L\*\*atent \*\*U\*\*ncertainty\), a family of PPO\-compatible exploration bonuses of the form b\(s,a\) = P\(s,a\) U\(s,a\)\. The price $ P\(s,a\) = \\lVert \\nabla\_\{z'\} \\tilde V\_\\psi\(\\hat z'\) \\rVert $ measures how strongly uncertainty in the predicted next latent can perturb the advantage, while \\\(U\(s,a\)\\\) is an uncertainty quantity instantiated by non\-parametric effective counts or learned prediction errors such as RND\. Our theory derives the value\-pricing term from a unified advantage\-uncertainty view: an uncertainty coordinate induces an optimistic advantage correction through a dual norm\. This yields count\-based UCB and MCR members, corresponding respectively to optimism over latent\-transition uncertainty and one\-sample shrinkage of the optimistic advantage envelope\. Across six standard MuJoCo continuous\-control tasks, VALU substantially improves PPO's sample efficiency and final return, and achieves the best PPO\-compatible performance on most tasks while remaining competitive on the others, compared with strong exploration baselines including RND, ICM, RE3, VCSE, and OPPO\. Ablations over uncertainty estimators, schedules, latent encoders, and bonus components show that the gains come from pricing uncertainty by local value sensitivity rather than from any single implementation choice\.

## From Cursed to Competitive: Closing the ZO–FO Gap via Input\-to\-State Stability

**Authors:** Amir Ali Farzin; Philipp Braun; Iman Shames

**ID:** 150158 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kEqC3TBex2>) | [PDF](<https://openreview.net/pdf?id=kEqC3TBex2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150158>)

While it is generally understood that zeroth\-order \(ZO\) algorithms have an extra dependency on their number of iterations for any choice of parameters, compared to their first\-order \(FO\) counterparts, in this work, we show that under several conditions, in expectation, ZO methods do not suffer from extra dimension dependencies in their convergence rates with respect to their FO counterparts\. We look at optimisation algorithms from the dynamical systems perspective and analyse the conditions under which one can formulate the average of a ZO algorithm as the average of its FO counterpart with bounded perturbations with values dependent on design parameters\. Then, using input\-to\-state stability properties, we show ZO methods follow the same decay rate as their FO counterparts and converge to a neighbourhood of the fixed point of FO methods, where its radius depends on the bound of the norm of the perturbations, which can be made arbitrarily small\. The theoretical findings are illustrated via numerical examples\.

## Online Min\-Max Optimization: From Individual Regrets to Cumulative Saddle Points

**Authors:** Abhijeet Vyas; Brian Bullins

**ID:** 151634 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z7Fzxtf74w>) | [PDF](<https://openreview.net/pdf?id=Z7Fzxtf74w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151634>)

We propose and study an online version of min\-max optimization based on cumulative saddle points under a variety of performance measures beyond convex\-concave settings\. After first observing the incompatibility of \(static\) Nash equilibrium \(SNE\-Reg$\_T$\) with individual regrets even for strongly convex\-strongly concave functions, we propose an alternate static duality gap \(SDual\-Gap$\_T$\) inspired by the online convex optimization \(OCO\) framework that is compatible with the individual regrets \. We provide algorithms that achieve sub\-linear regret bounds for \(SDual\-Gap$\_T$\) and the individual regrets and a novel dynamic saddle point regret \(DSP\-Reg$\_T$\), which we suggest naturally represents a min\-max version of the dynamic regret in OCO\. We derive our bounds for \(SDual\-Gap$\_T$\) and DSP\-Reg$\_T$ under strong convexity\-strong concavity and a min\-max notion of exponential concavity \(min\-max EC\), and in addition we establish a class of functions satisfying min\-max EC that captures a two\-player variant of the classic portfolio selection problem\. Finally, for a dynamic notion of regret compatible with individual regrets, we derive bounds under a two\-sided Polyak\-\\L\{\}ojasiewicz \(PL\) condition\.

## Sharper Guarantees for Misspecified Kernelized Bandit Optimization

**Authors:** Davide Maran; Csaba Szepesvari

**ID:** 150958 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e0ScKNIPd0>) | [PDF](<https://openreview.net/pdf?id=e0ScKNIPd0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150958>)

Existing guarantees for misspecified kernelized bandit optimization pay for misspecification through kernel complexity:  in generic offline bounds, the misspecification level $\\varepsilon$ is multiplied by $\\sqrt\{d\_\\mathrm\{eff\}\}$, where $d\_\\mathrm\{eff\}$ is the kernel effective dimension, while in online regret bounds, the corresponding penalty is $\\sqrt\{\\gamma\_n\}\\,n\\varepsilon$, where $\\gamma\_n$ is the maximum information gain after $n$ rounds of interaction\.  In this work, we show that, for a large class of kernels, the misspecification amplification can be reduced to logarithmic or polylogarithmic growth\.  In the offline setting, we first prove high\-probability simple\-regret bounds whose misspecification term is governed by a spectral Lebesgue constant\.  This yields logarithmic amplification for one\-dimensional monotone spectra and polylogarithmic amplification for multivariate Fourier\-diagonal product kernels\.  In the online setting, we modify a domain\-splitting algorithm and prove a cumulative regret bound of $\\widetilde\{\\mathcal O\}\(\\sqrt\{\\gamma\_n n\}\+n\\varepsilon\)$ under mild localized eigendecay assumptions, removing the extra $\\sqrt\{\\gamma\_n\}$ factor from the misspecification term\.  The common principle is localization: spectral localization controls the Lebesgue constant of the offline approximation operator, while domain splitting implements the spatial analogue of this mechanism in the online setting, preventing local misspecification errors from being amplified globally\.

## AutoSaddler: Automatic Harness Optimization with Durable Updates from Agent Execution Traces

**Authors:** Sungho Park; Wonjoong Kim; Rongyuan Tan; Jue Zhang; WOOK SHIN HAN; Pengfei Gao; Chanyoung Park; Qingwei Lin; Saravan Rajmohan; Dongmei Zhang

**ID:** 151256 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bkGK6zovnv>) | [PDF](<https://openreview.net/pdf?id=bkGK6zovnv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151256>)

LLM agents remain unreliable on long\-horizon tasks, where small local failures can compound over extended interactions and lead to overall task failure\. Although external harnesses can substantially improve robustness, harness design remains a manual and expensive process that requires searching over a large space of prompts, tool configurations, and control logic\. We propose AutoSaddler, an automatic harness optimization framework that formulates harness improvement as an offline learning problem and iteratively updates the harness using failure signals from mini\-batches\. AutoSaddler combines failure\-trace diagnosis, structured patch generation that treats the harness as code, and validation\-based update selection\. Experiments on GAIA2 and Terminal\-Bench 2\.0 show that AutoSaddler substantially improves agent performance over the corresponding base harnesses, achieving gains of 9\.0 and 10\.0 percentage points, respectively\. Ablation studies further suggest that effective harness optimization benefits from three ingredients: deep debugging rather than shallow reflection, targeted modifications rather than unconstrained editing, and generalization\-aware selection rather than trajectory\-specific repair\. Together, these results suggest that automatic harness optimization is a promising path toward more performant and reliable agent systems\.

## On the Necessity of Guidance Decay: From Three\-Phase Analysis in Gaussian Mixture Models to Dynamic Optimization

**Authors:** Yiyu Qiu; Ruofeng Yang; Tong Yu; Shuai Li

**ID:** 151326 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bLqrqUf9K9>) | [PDF](<https://openreview.net/pdf?id=bLqrqUf9K9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151326>)

Classifier\-Free Guidance \(CFG\) is essential for conditional diffusion, yet constant guidance scales often fail to balance alignment with over\-exposure and extreme sample issues\. Existing heuristic schedules, like guidance truncation, lack rigorous principles and sacrifice classification confidence, while theoretical studies remain limited to constant guidance at final denoising stages, leaving the full sampling trajectory largely unanalyzed\. In this work, we provide a theoretical foundation for dynamic guidance by analyzing Gaussian Mixture Models \(GMM\) within a general SDE framework\. We characterize the dynamics of classification confidence through three distinct stages: convergence, mixed, and divergence, and rigorously prove the impact of varying guidance scale $\\omega$ at reverse time $k$\.  We analyze the Convergence Boundary $\\Omega\(k\)$ as the maximum guidance scale that ensures the reverse trajectory remains within the high\-density regions of the data distribution\. We prove that during denoising, the permissible guidance scale $\\omega$ must decay to prevent the trajectory from escaping into the divergent phase, especially at the end of the denoising\. Although different noise schedules have different decay rates, we found that VP\(Variance Preserving\) has more stringent decay rate requirement compared to VE\(Variance Exploding\), which is why VP is most prone to overexposure\. Specifically, $\\Omega\(k\)$ simplifies to an exponential decay $O\(e^\{T\-k\}\)$ in VPSDE and an algebraic decay $O\(T\-k\)$ in VESDE\. This provides a unified explanation for why constant guidance inevitably triggers artifacts and demonstrates that guidance truncation is essentially  a coarse approximations of this stability limit\. We can achieve dynamic optimization based on the decay rate, which better restricts the scale within the convergence region, thereby effectively eliminating overexposure while maintaining excellent semantic alignment and improving generation quality\.

## EvoOptiGraph: Weakness\-Driven Coevolution via Graph\-Based Structural Generation for Optimization Modeling

**Authors:** Qingcan Kang; Mingyang LIU; Xiaojin Fu; Shixiong Kai; Tao Zhong; Mingxuan Yuan

**ID:** 155640 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=45RetuO3zX>) | [PDF](<https://openreview.net/pdf?id=45RetuO3zX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155640>)

Automating optimization modeling from natural language faces two key challenges: training corpora lack structural diversity, and data generation pipelines remain static and decoupled from model learning\. To address these challenges, we propose EvoOptiGraph, a novel framework where data and model co\-evolve, driven by model weaknesses\. EvoOptiGraph represents each mixed\-integer linear program \(MILP\) as an attributed bipartite graph and applies validity\-preserving evolutionary operators to generate structurally diverse instances\. The evolved graphs are converted into solver code and natural language via deterministic compilation and verified back translation\. Training proceeds in two stages: supervised fine\-tuning \(SFT\) on an initial dataset, followed by reinforcement learning with verifiable rewards \(RLVR\), where graph\-derived weakness signals dynamically evolve new instances that target the model's failures, forming a closed loop that continuously updates the training distribution\. Empirical results on six public datasets show that EvoOptiGraph significantly outperforms larger generalist models, agentic methods, and specialized baselines in accuracy, executability, and generalization\. These results demonstrate that targeted data–model coevolution is an effective strategy for improving LLMs on optimization modeling tasks\.

## Learning\-Augmented Online Portfolio Selection: Optimal Robustness\-Consistency Tradeoffs

**Authors:** Ziliang Zhang; Tianming Zhao; Albert Zomaya

**ID:** 150779 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fRxSvIiNAR>) | [PDF](<https://openreview.net/pdf?id=fRxSvIiNAR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150779>)

We study learning\-augmented online portfolio selection \(OPS\), where an investor uses predictions to improve wealth while remaining protected against unreliable advice\. In frictionless markets, we characterize the optimal tradeoff between robustness \(wealth under arbitrary predictions\) and consistency \(wealth under perfect predictions\) tied to the geometric mean, and show that the optimal tradeoff admits a tractable online characterization\. We further quantify how performance interpolates between these endpoints under imperfect predictions by smoothness guarantees\. Under transaction costs, we give exact robust\-trading certificates and, to our knowledge, the first learning\-augmented OPS impossibility under costs: for any positive cost, no GM\-robust policy can be maximally consistent under exact predictions\. Lastly, we show that a cost\-aware greedy rule remains Pareto\-optimal\.

## Polestar: Drift\-Aware Cache Calibration and Token Commitment for Efficient Inference of Diffusion LLMs

**Authors:** Mingyu Lee; Akshat Ramachandran; Souvik Kundu; Tushar Krishna

**ID:** 154799 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AsdJ0sPsgT>) | [PDF](<https://openreview.net/pdf?id=AsdJ0sPsgT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154799>)

The inference efficiency of diffusion large language models \(dLLMs\) is constrained by two challenges: bidirectional attention precludes efficient KV\-cache reuse, while increasing decoding parallelism with static confidence thresholds can compromise generation quality\. We observe that both challenges arise from a shared phenomenon: as tokens are decoded, their contextual integration through bidirectional attention causes token representations to drift \(evolve\) across decoding steps\. This insight motivates Polestar, a training\-free inference framework that uses token representation drift as a unified signal to jointly address both challenges\. Polestar comprises two components: Polestar\-Cache, which identifies stale KV\-cache positions via drift and performs sparse KV\-cache refreshes to enable efficient reuse, and Polestar\-Commit, which detects sharp drift events to reliably identify commit\-ready tokens\. Across mathematics and coding benchmarks on several dLLM families, Polestar sets a new state of the art on the accuracy\-throughput Pareto frontier, achieving up to 10\.73% accuracy improvement, up to 3\.7x higher throughput, and high decoding parallelism of 3\.67 tokens per forward pass over existing baselines\.

## Correct, Route, Calibrate: Efficient Preference Optimization from Noisy, Heterogeneous Human Feedback

**Authors:** Zhongming Xie; Xinwei Ma; Jingshen Wang

**ID:** 152258 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UOoH4aqCJg>) | [PDF](<https://openreview.net/pdf?id=UOoH4aqCJg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152258>)

Human labels are important supervisory signals for preference\-based reinforcement learning, but their collection is often constrained by practical considerations that standard training objectives tend to ignore\. For instance, Direct Preference Optimization \(DPO\) usually treats observed preference labels as clean, even though real annotation pipelines rely on heterogeneous annotators whose reliability varies across individuals and with the difficulty of each comparison\. This setting introduces three challenges: \(1\) Noisy labels introduce systematic bias into the preference optimization objective and need to be rigorously corrected\. \(2\) The allocation of pairwise comparisons to different annotators is a design problem that directly affects the statistical efficiency of the training pipeline\. \(3\) Non\-random routing creates selection bias in annotator evaluation, complicating downstream decisions such as compensation\. We address these challenges within a unified framework for DPO that combines annotator\-aware posterior correction with information\-guided annotator routing\. Posterior correction leverages an instance\-dependent noise model to infer latent ground\-truth preferences from noisy labels, mitigating bias in the DPO objective\. Annotator routing is formulated as an optimal experimental design problem that allocates comparisons to annotators according to their expected statistical information under a fixed annotation budget\. To support reliable annotator evaluation under non\-random routing, we introduce a doubly robust estimator that corrects for selection bias\. Semi\-synthetic experiments on the UltraFeedback dataset show that our approach improves ground\-truth preference recovery and downstream AlpacaEval 2 performance over baselines, with consistent gains across multiple open\-source LLM model architectures\. Annotator reliability\-estimation experiments further show that the doubly robust estimator substantially reduces mean squared error relative to other baselines, demonstrating its value for annotator evaluation\.

## Optimal Hidden\-Target Learning for Online Inventory Optimization on General Convex Sets

**Authors:** Anthony Pineci; Yunzong Xu

**ID:** 148709 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=veDCFlujwu>) | [PDF](<https://openreview.net/pdf?id=veDCFlujwu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148709>)

Online inventory optimization \(OIO\) is online convex optimization with physical memory: inventory can be raised immediately, but it can be reduced only by demand\. A natural principle, used in stochastic inventory learning and recently in OIO with linear capacity constraints, is to maintain a hidden target chosen by an online learner and implement its projection onto the currently feasible order\-up\-to set\. We prove that this simple principle is optimal for OIO on arbitrary bounded convex capacity sets\.  With online gradient descent as the hidden learner, the method improves the best known regret guarantee for OIO on general convex sets from inverse to inverse\-square\-root dependence on the common\-demand probability, and we prove a matching lower bound\. The analysis identifies the right geometric state variable: the Euclidean distance between the hidden target and the implementable set\. This distance evolves pathwise as a scalar queue, with target movement as arrivals and common demand as service, reducing the state\-dependent feasibility cost to the control of a one\-dimensional queue\. The same reduction gives the first logarithmic regret guarantee for strongly convex losses and the first dynamic regret guarantee adapting to Euclidean path variation on general convex capacity sets\.

## Differentiating Network Design Objectives for Balancing Cost and Distance

**Authors:** Zishang Chen; Longhe Lin; Zhiyuan Julian Su; Qi Qi

**ID:** 151671 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YuYZQCQoQp>) | [PDF](<https://openreview.net/pdf?id=YuYZQCQoQp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151671>)

Many network design tasks must decide which directed arcs to build so that multiple sources can reach a root efficiently\.  Building fewer or cheaper arcs reduces construction cost, but may force long routing paths; building more arcs shortens routes, but increases construction cost\.  The Cost\-\-Distance problem formalizes this trade\-off, yet it has remained difficult to optimize with gradient\-based methods because the selected network,  the induced routes, and the routing cost are tightly coupled\. We propose Cost Distance Policy Gradient \(CDPG\),  a differentiable framework that treats local next\-hop choices as a routing policy, prevents unstable cyclic routing through Dynamic Acyclic Dropout,  evaluates the objective with a truncated value solver, and uses the induced acyclic support for quality\-preserving TopoRounding\.  Under the stated conditions, CDPG has a fixed\-accuracy \\\(\\mathcal\{O\}\(m\\log n\)\\\) efficiency guarantee\.  Experiments cover 1,487 instances in UAV logistics networks, transportation networks, and four synthetic graph families;  across this suite, CDPG shows a strong time\-\-quality trade\-off compared with other differentiable baselines, Cost\-\-Distance\-specific algorithms, and the commercial solver\. Our code is available at: https://anonymous\.4open\.science/r/cdpg\_nips\-28D5/\.

## Beyond Outcome Rewards: Process\-Aware Optimization for Search Agents

**Authors:** Yiwei Dai; Hengyi Cai; Hui Wu; Yili Wang; Han Xu; Minlan Shao; Yuchen Li; Shuaiqiang Wang; Xin Wang; Yi Chang; Dawei Yin

**ID:** 148305 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ypn6A8dz0y>) | [PDF](<https://openreview.net/pdf?id=ypn6A8dz0y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148305>)

Search agents based on large language models address complex information\-seeking tasks by iteratively issuing queries, retrieving evidence, and integrating information\. Effective training of such agents requires supervision beyond final\-answer correctness, as outcome\-level rewards cannot distinguish efficient evidence acquisition from redundant or misdirected search\. Recent process\-level methods introduce intermediate supervision, but typically apply uniform signals across trajectories\. However, such uniformity overlooks the state\-dependent nature of process quality, where the value of an intermediate decision depends on the current evidence state\. This motivates a systematic analysis of how process quality varies across trajectories with different evidence states and final outcomes\. To this end, we analyze search trajectories on BrowseComp\-Plus and xBench, revealing two consistent patterns: successful trajectories often suffer from post\-alignment inefficiency \(redundant searches\), whereas failed trajectories typically struggle with misdirected exploration and insufficient coverage\. Motivated by these findings, we propose \*\*P\*\*rocess\-\*\*A\*\*ware \*\*G\*\*rouped r\*\*E\*\*ward optimization \(\*\*PAGE\*\*\), a framework for search agents that provides a concrete instantiation of state\-dependent process supervision\. \*\*PAGE\*\* partitions trajectories according to final outcomes, assigns differentiated process rewards to successful and failed groups, and integrates them with outcome supervision at either the reward or advantage level\. Experiments on three backbones across six multi\-hop QA and web\-search benchmarks show that \*\*PAGE\*\* consistently improves answer accuracy over outcome\-only baselines\.

## Negative\-Only Policy Optimization for One\-Sided Verifiable Rewards

**Authors:** Jiacheng Xu; Shuo He; Fuxiang Zhang; Chaojie Wang; Bo An

**ID:** 152610 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RpadYP6yxY>) | [PDF](<https://openreview.net/pdf?id=RpadYP6yxY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152610>)

Reinforcement learning with verifiable rewards \(RLVR\) typically relies on a verifier that can reliably judge whether sampled solutions are correct\. However, in many realistic settings, complete verification is generally unavailable, while cheap checks can only falsify failures\. We formalize this regime as one\-sided verifiability \(OSV\): verified negatives are reliable counterexamples, but verified positives are merely non\-falsified candidates and may contain many false positives\. This asymmetry makes standard RLVR unreliable, because reinforcing verified positives can directly reward shortcuts that pass partial checks\. To address this issue, we propose  Negative\-Only Policy Optimization \(NOPO\), which treats verified positives as unlabeled and updates the policy only by suppressing trusted verified negatives\. Specifically, NOPO combines two safeguards: a sample\-level NPO term that self\-attenuates once a verifier\-negative is suppressed below the reference, and a group\-level non\-falsified support weight that scales each group's update by its verifier\-positive count\. Across unit\-test, constraint\-check, and LLM self\-verifiers, NOPO improves pass@k over baselines on code, logic, and math benchmarks when oracle rewards are unavailable\. These gains persist under inference\-time scaling and cross\-benchmark transfer\.

## Frontier\-Eng: Benchmarking Self\-Evolving Agents on Real\-World Engineering with Generative Optimization

**Authors:** Dapeng Jiang; Yizhe Chi; Kaisen Yang; Tianwei Luo; Boshi Zhang; Deyao Hong; Dianqiao Lei; Yifan Zhou; Weiyang Jin; Xiaoyan Fan; Han Hao; Zhe Cao; Qian Houde; Qingle Liu; Bohan Lyu; Bowen Wang; Situ Wang; Youjie Zheng; Bingxiang He; Eren Cai; Calvin Xiao; Qinhuai Na

**ID:** 139163 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hXNx575zFR>) | [PDF](<https://openreview.net/pdf?id=hXNx575zFR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139163>)

Engineering value is often created not by producing a single correct answer, but by improving a feasible artifact under hard constraints\. We introduce \*\*Frontier\-Eng\*\*, a benchmark for generative optimization agents that repeatedly edit executable engineering artifacts, receive frozen verifier feedback, and maximize the best feasible score found within a fixed budget\. Frontier\-Eng contains $47$ tasks across five engineering categories, spanning kernels, cryptography, quantum circuits, inventory and scheduling, robotics and control, optics and communication systems, structural design, reactions, and sustainable infrastructure\. Each task provides a feasible starting solution, an editable artifact, and a read\-only evaluator with verifier\-parsed scoring, enabling cross\-domain comparison without reducing engineering quality to binary pass/fail completion\. We evaluate frontier models under OpenEvolve and compare search frameworks across the full task set\. Current agents exhibit clear iterative improvement: \*\*gpt\-5\.4\*\* obtains the best average rank under OpenEvolve\. Long\-horizon runs reveal a dual \*\*inverse\-law pattern\*\*: improvement events become rarer with iteration, and improvement magnitudes shrink with improvement count\. At the same time, improvement is uneven across domains and remains sensitive to search depth, exposing a concrete frontier for engineering\-oriented agents under realistic constraints and verifier\-grounded feedback\.

## SePO: Self\-Evolving Prompt Agent for System Prompt Optimization

**Authors:** Wangcheng Tao; Han Wu; Weng\-Fai Wong

**ID:** 151189 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cJX1IpMwgF>) | [PDF](<https://openreview.net/pdf?id=cJX1IpMwgF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151189>)

System prompt optimization improves agent behavior without modifying the underlying model, yielding human\-readable, model\-agnostic instructions\. Existing methods build a prompt agent that refines task agents' system prompts, yet leave the prompt agent's own system prompt hand\-engineered and fixed\. We propose Self\-Evolving Prompt Optimization \(SePO\), which treats the prompt agent's own system prompt as an optimization target alongside task agents' system prompts\. SePO adopts a self\-referential design\. A single prompt agent improves both task agents' system prompts and its own under an open\-ended evolutionary search that maintains an archive of candidate prompts as stepping stones\. Training proceeds in two stages: pre\-training evolves the prompt agent on a multi\-task pool, and fine\-tuning then applies it to a target task\. Across five benchmarks spanning math \(AIME'25\), abstract reasoning \(ARC\-AGI\-1\), graduate\-level science \(GPQA\), code generation \(MBPP\), and logic puzzles \(Sudoku\), SePO consistently outperforms Manual\-CoT, TextGrad, and MetaSPO, improving the average accuracy by $4\.49$ points compared to Manual\-CoT\. The prompt optimization skill from pre\-training also generalizes to tasks beyond the pre\-training mixture, rather than memorizing per\-task prompts\.

## Nearly Optimal Bounds for Orthogonal Trace\-Sum Maximization

**Authors:** Yiheng Xiao; Huikang Liu

**ID:** 152603 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RtRlLhR0eL>) | [PDF](<https://openreview.net/pdf?id=RtRlLhR0eL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152603>)

Orthogonal trace\-sum maximization \(OTSM\) problems arise in a wide range of data processing applications, including canonical correlation analysis and cryogenic electron microscopy\. Despite their practical importance, the existing theoretical understanding of these problems remains incomplete\. In this paper, we show that the generalized power method \(GPM\) converges linearly to the global optimal solution with high probability under an additive Gaussian noise model, provided that the noise level satisfies the nearly optimal bound $\(O\(\\sqrt\{n/\\log n\}\)\)$\. In addition, we prove that the semidefinite programming \(SDP\) relaxation of OTSM is tight and admits a unique optimal solution under the same noise regime, improving upon the best known theoretical guarantee of $\(O\(n^\{1/4\}\)\)$\. Extensive numerical experiments further demonstrate that our theoretical predictions closely match empirical observations\.

## Adaptive\-Margin Masking and Restoration for Balanced Multimodal Learning

**Authors:** Guangbin Zhang; Zheyang Luo; Jiangming Liu

**ID:** 151071 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dBEoIGFglt>) | [PDF](<https://openreview.net/pdf?id=dBEoIGFglt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151071>)

Real\-world tasks rely on information from multiple sensory sources, motivating multimodal learning as a core paradigm in modern machine learning\. However, multimodal learning suffers from modality laziness, where one modality suppresses the contribution of the other modalities by dominating the training process\.    Recent studies of proposing various metrics to identify lazy modalities and manipulate optimizations to mitigate this imbalance, facing two main problems: 1\) The identification of lazy modality is incomplete and overly sharp; 2\) The dominated modality can be lagged by under\-optimized lazy modalities\. To address these issues, we propose Adaptive\-Margin Masking and Restoration \(AMRe\), which introduces adaptive\-margin modality identification and restoration optimization to balance dominated and lazy modalities\. Experimental results show that AMRe consistently outperforms competitive baselines and several state\-of\-the\-art methods by achieving significant improvement on standard multimodal benchmarks\.   The codes are released in https://anonymous\.4open\.science/r/AMRe\-5E69\.

## FML\-bench: A Controlled Study of AI Research Agent Strategies from the Perspective of Search Dynamics

**Authors:** Qiran Zou; Hou Hei Lam; Wenhao Zhao; Tingting Chen; Yiming Tang; Samson Yu; Yingtao Zhu; srinivas anumasa; Zufeng Zhang; Tianyi Zhang; Chang Liu; zhengyao jiang; Anirudh Goyal; Dianbo Liu

**ID:** 139220 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e4mtg1jObb>) | [PDF](<https://openreview.net/pdf?id=e4mtg1jObb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139220>)

AI research agents accelerate ML research by automating hypothesis generation, experimentation, and empirical refinement\. Existing agent strategies range from greedy hill\-climbing to tree search and evolutionary optimization, yet which strategy choices drive performance remains unclear\. Answering this question requires a benchmark that separates agent strategy \(e\.g\., search topology\) from execution infrastructure \(e\.g\., code editor\), so that performance differences are attributable to strategy rather than infrastructure, and that provides process\-level metrics beyond final scores to analyze exploration behaviors\. Existing benchmarks offer limited support\. We propose FML\-Bench, a benchmark of 18 fundamental ML research tasks across 10 domains that separates agent strategy from execution infrastructure and defines 12 process\-level behavioral metrics\. Evaluating six representative agents, we find that: \(1\) strategy complexity alone does not guarantee strong performance: a simple greedy hill\-climber nearly matches the best\-performing tree\-search agent, both well above the remaining agents; \(2\) our analysis suggests this pattern relates to improvement opportunity structure: greedy search tends to be more effective when opportunities are dense, while tree\-search and evolutionary strategies tend to be more effective when opportunities are sparse; an adaptive agent built on this insight switches to broader exploration upon detecting improvement stagnation and outperforms the other six agents, lending initial support to this observation; and \(3\) process\-level analysis reveals that early convergence and directionally focused exploration are significantly associated with final performance, while solution diversity and compute cost are not\. Our benchmark is available at: https://anonymous\.4open\.science/r/Anonymous\-78B6\.

## LOTION: Smoothing the Optimization Landscape for Quantized Training

**Authors:** Mujin Kwun; Depen Morwani; Huangyuan Su; Stephanie Gil; Nikhil Anand; Sham Kakade

**ID:** 150892 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=edK7DArfIF>) | [PDF](<https://openreview.net/pdf?id=edK7DArfIF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150892>)

Optimizing neural networks for quantized objectives is fundamentally challenging because the quantizer is piece\-wise constant, yielding zero gradients everywhere except at quantization thresholds where the derivative is undefined\. Most existing methods deal with this issue by relaxing gradient computations with techniques like Straight Through Estimators \(STE\) and do not provide any guarantees of convergence\.  In this work, taking inspiration from Nesterov smoothing, we approximate the quantized loss surface with a continuous loss surface\. In particular, we introduce LOTION, \*\*L\*\*ow\-precision \*\*O\*\*ptimization via s\*\*T\*\*ochastic\-no\*\*I\*\*se sm\*\*O\*\*othi\*\*N\*\*g, a principled smoothing framework that replaces the raw quantized loss with its expectation under unbiased randomized\-rounding noise\.  In this framework, standard optimizers are guaranteed to converge to a local minimum of the loss surface\. Moreover, when using noise derived from stochastic rounding, we show that the global minima of the original quantized loss are preserved\. We empirically demonstrate that this method outperforms standard QAT on synthetic testbeds and on 150M\-, 300M\-, and 600M\- parameter language models\. On the 150M INT4 benchmark with modern QAT baselines, LOTION further achieves the best quantized validation loss\.

## Conservative Pareto Set Amortization for Offline Multi\-Objective Optimization

**Authors:** Ji Cheng

**ID:** 152985 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Oqu7rV8HZm>) | [PDF](<https://openreview.net/pdf?id=Oqu7rV8HZm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152985>)

Offline multi\-objective optimization aims to identify high\-quality trade\-off designs using only a fixed dataset of previously evaluated candidates\. Existing methods often cast this problem as guided generative sampling, producing a finite candidate pool by steering a diffusion or flow model toward Pareto\-preferred regions\. We study a different interface: deterministic Pareto set amortization\. Our method, Offline Pareto Set Learning \(OffPSL\), trains a preference\-conditioned map $h\_\\pi:\\Delta^\{m\-1\}\\rightarrow \\mathcal\{X\}$ that returns one design for each requested trade\-off direction\. Because offline data contain no preference–solution labels, OffPSL trains this map using two offline\-only signals: a coordinate\-wise pessimistic surrogate scalarization and a diffusion\-style denoising\-residual support regularizer learned from offline designs\. The denoising model is used only as a frozen support prior and is not used to sample candidates\. At inference, OffPSL produces exactly one candidate per reference direction with no iterative sampling, test\-time optimization, or filtering from a larger generated pool\. On standard offline MOO benchmarks, OffPSL is competitive with recent guided generative baselines while keeping the learned preference\-to\-design map directly queryable and diagnosable\.

## Decoupling Exploration and Policy Optimization: Uncertainty Guided Tree Search for Hard Exploration

**Authors:** Zakaria Mhammedi; James Cohan

**ID:** 154428 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DfrwtUhLEr>) | [PDF](<https://openreview.net/pdf?id=DfrwtUhLEr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154428>)

The process of discovery requires active exploration\-\-\-the act of collecting new and informative data\. However, efficient autonomous exploration remains a major unsolved problem\. The dominant paradigm addresses this challenge by using Reinforcement Learning \(RL\) to train agents with intrinsic motivation, maximizing a composite objective of extrinsic and intrinsic rewards\. We suggest that this approach incurs unnecessary overhead: while policy optimization is necessary for precise task execution, employing such machinery solely to expand state coverage may be inefficient\. In this paper, we propose a new approach that explicitly decouples exploration from policy optimization and bypasses RL entirely during the exploration phase\. Our method uses a tree\-search strategy inspired by the Go\-With\-The\-Winner algorithm, paired with a measure of uncertainty to systematically drive exploration\. By removing the overhead of policy optimization, our approach explores an order of magnitude more efficiently than standard intrinsic motivation baselines on hard exploration benchmarks\. Further, we demonstrate that the trajectories discovered during exploration can be distilled into deployable policies using existing supervised backward learning algorithms, achieving state\-of\-the\-art performance by a wide margin on Montezuma's Revenge, Pitfall\!, and Venture without relying on domain\-specific knowledge\. Finally, we demonstrate the generality of our framework in high\-dimensional continuous action spaces by solving the MuJoCo Adroit dexterous manipulation and AntMaze tasks in a \\emph\{sparse\-reward\} setting, directly from image observations and without expert demonstrations or offline datasets\. To the best of our knowledge, this has not been achieved before\.

## Conflict\-Aware Logit Adapters for Utility\-Preserving Anti\-Distillation

**Authors:** Quoc P Dao; Binh Anh Nguyen; Linh Ngo; Thanh\-Toan Do; Mehrtash Harandi; Trung Le

**ID:** 152508 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Sc1RFFLbFC>) | [PDF](<https://openreview.net/pdf?id=Sc1RFFLbFC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152508>)

While reasoning traces improve model capability, they also create a pathway for extracting supervision signals for downstream distillation\. Initial efforts to mitigate this rely on decoding\-time interventions, but they incur high inference overhead and often harm the teacher model's natural fluency\. We propose Conflict\-Aware Logit Adapters \(CALA\), a lightweight training\-time defense\. CALA attaches a small residual adapter to a frozen teacher model and trains only this adapter\. A proxy student identifies positions where imitation is most sensitive, and the adapter perturbs the output distribution there within high\-probability regions\. A conflict\-aware optimization balances competing anti\-distillation and utility objectives, with regularization preserving the teacher’s performance and fluency\. At inference, CALA adds negligible overhead with no auxiliary models required\. Experiments on reasoning benchmarks show that CALA substantially reduces successful student imitation while maintaining near\-original teacher performance and generation quality, offering a practical and efficient alternative to decoding\-time approaches\.

## Stable and Granular Policy Optimization for Generative Recommendation

**Authors:** Muyu Zou; Haibo Xing; Hao Deng; Zhezheng Hao; Jinxin Hu; Jiawei Chen; Yun Chen; Yu Zhang; Xiaoyi Zeng

**ID:** 153504 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KqTAFaifPA>) | [PDF](<https://openreview.net/pdf?id=KqTAFaifPA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153504>)

Generative recommendation \(GR\), which directly generates sequential semantic IDs for items, has recently attracted increasing attention in recommender systems\. Given that core recommendation metrics are inherently evaluated at the sequence level, reinforcement learning \(RL\) serves as a natural optimization framework\. However, adapting recent group\-based RL algorithms to GR presents notable challenges: token\-level methods such as GRPO exhibit much more severe training instability, while sequence\-level methods such as GSPO enforce uniform token weighting and thus ignore the heterogeneous roles of tokens\. To address this dilemma, we propose Stable and Granular Policy Optimization \(SGPO\), a group\-based RL algorithm tailored for GR\. SGPO maintains a sequence\-level ratio to promote optimization stability while injecting fine\-grained token\-wise advantages\. By incorporating token log\-probabilities and reward signs, SGPO explicitly upweights high\-confidence tokens in positive trajectories to reinforce successful retrieval, while strictly penalizing them in negative trajectories to encourage exploration, and uses an adaptive scaling factor to bound the variance of reshaped advantages\. Experiments on two public benchmarks and a billion\-scale industrial dataset show that SGPO consistently outperforms six strong RL baselines and, when deployed on a commercial platform, achieves a 2\.36% lift in click\-through rate \(CTR\) and a 1\.95% increase in advertising revenue in online A/B testing\.

## Don't Claim Benchmark\-Oriented Optimization Improves General Coding Capability — Diverse Evaluation Is Required

**Authors:** Egor Shibaev; Vera Kudrevskaia; Timur Galimzyanov; Mikhail Evtikhiev; Ana Țerna; Rastislav Rabatin; Timur Kudashev; Timofey Bryksin; Arina Puchkova; Patrik Bartak; Egor Bogomolov; Sergey Titov

**ID:** 179728 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xmvm5TQJnM>) | [PDF](<https://openreview.net/pdf?id=xmvm5TQJnM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/179728>)

Papers, model cards, and blog posts often treat scores on a small set of coding benchmarks \(e\.g\., SWE\-bench and LiveCodeBench\) as evidence of broad "coding capability\."  We argue that optimization for these benchmarks leads to measuring task\-specific performance, creating a meaning gap between measured scores and claims of general coding ability\. To support our position, we examine this gap with a diagnostic Django\-based case study benchmark suite we create\.  Evaluating foundation models and checkpoints post\-trained on SWE\-bench trajectories, we find that benchmark rankings frequently fail to generalize\. Post\-trained checkpoints show little cross\-task transfer, and SWE\-bench optimization yields limited or no gains on our tasks or on LiveCodeBench\. Similarly, fine\-tuning on individual Django modalities fails to transfer\.  We conclude that a small number of benchmarks is insufficient for evaluating diverse models under benchmark optimization pressure\.  We encourage community to use differentiated evaluation—holistic assessment for frontier models, multi\-task suites for research, and human\-in\-the\-loop studies for narrow task applications\. Finally, we argue for creating a capability taxonomy and sustained benchmark maintenance, rather than one\-off benchmark releases\.

## Lower\-Level Agnostic Bilevel Optimization

**Authors:** Peiwen Qiu; Prashant Khanduri; Jia \(Kevin\) Liu

**ID:** 149854 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mnYCucQgEu>) | [PDF](<https://openreview.net/pdf?id=mnYCucQgEu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149854>)

Bilevel optimization is a fundamental framework for machine learning problems, where an upper\-level \(UL\) objective depends on the solution of a nested lower\-level \(LL\) problem\. Existing bilevel algorithms typically assume that the LL objective is available for evaluation, differentiation, or unrolling\. However, this assumption can fail when the LL response is produced by a black\-box solver, simulator, adversary, or learned predictor\. In this paper, we study \*lower\-level agnostic\* bilevel optimization, where the UL learner has access only to an approximate LL solution $\\bar\{\\mathbf\{y\}\}\(\\mathbf\{x\}\)$ and cannot query the LL objective, its gradients, Hessian/Jacobian information, or the procedure that generates the LL response\. We propose LeGo\-BiO \(\*\*L\*\*ower\-l\*\*e\*\*vel A\*\*g\*\*n\*\*o\*\*stic \*\*Bi\*\*level \*\*O\*\*ptimization\), a coordinate\-wise pseudo\-hypergradient method that estimates the missing Jacobian $\\nabla \_\{\\mathbf\{x\}\}\\bar\{\\mathbf\{y\}\}\(\\mathbf\{x\}\)$ using finite differences of $\\bar\{\\mathbf\{y\}\}\(\\cdot\)$\. For each UL coordinate, LeGo\-BiO constructs a decision vector subject to 1\-sparse updates, i\.e\., restricting modifications to a single coordinate per step, thereby isolating the corresponding Jacobian column needed in the UL gradient computation\. This avoids the directional\-projection limitation of full\-parameter response differences and, unlike zeroth\-order approximations of the entire UL gradient, preserves the available first\-order gradient information with respect to the UL variables for more accurate UL gradient evaluation\. We establish convergence guarantees for LeGo\-BiO in both deterministic and stochastic settings under an LL Polyak–Łojasiewicz condition, without requiring LL strong convexity\. Our bounds yield an $\\mathcal\{O\}\(T^\{\-1\}\)$ rate in the deterministic setting when the LL approximation error decreases geometrically, and an $\\mathcal\{O\}\(T^\{\-1/2\}\)$ rate in the stochastic setting under general LL approximation errors\. Experiments on deep hyper\-representation and adversarial training demonstrate competitive performance of LeGo\-BiO despite being agnostic to the LL objective\.

## Precision\-Aware Hopfield Retrieval: Unifying Population Codes and Memory Retrieval with Information Optimization

**Authors:** Yi\-Chun Hung; Dennis Wu; Hong\-Yu Chen; Han Liu; Emma Alexander

**ID:** 149371 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qYhHysIvHY>) | [PDF](<https://openreview.net/pdf?id=qYhHysIvHY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149371>)

Bayesian estimation has been used to explore optimal encoder\-decoders for continuous quantities, but no such framework exists for discrete associative memory\. We introduce precision\-aware Hopfield retrieval, a framework that incorporates the encoder's Fisher information directly into a decoder of memory retrieval\. Four results follow\. First, optimal encoder\-decoder information is shaped only by the prior, across both log and $L^p$ norm loss functions\. Second, the optimal information follows a general coupling law across log and $L^p$ loss functions\. Third, optimal precision\-aware Hopfield retrieval uses a stimulus\-dependent inverse temperature\. It outperforms the encoder\-blind Bayesian decoder on both retrieval loss and required coding resource\. Last, the framework yields a closed\-form expression for memory recall bias\. It reproduces central\-tendency and cognitive\-load effects observed in cognitive psychology\. These effects emerge only when the encoder and decoder are modeled jointly\.

## Sparse Updates Generalize Better Than Optimization: Stability Analysis for Randomized Subspace Descent

**Authors:** Yifei Liang; Yan Sun; Yifei Cheng; Haobo Fu; XIAOCHUN CAO; Li Shen

**ID:** 148588 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=weRx6oFuWD>) | [PDF](<https://openreview.net/pdf?id=weRx6oFuWD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148588>)

Large\-scale learning increasingly relies on updating only a coordinate, a block, or a low\-dimensional subspace per iteration to reduce memory and communication costs, yet the statistical consequence of such reduced update coverage, beyond the well\-understood optimization slowdown, remains open\. Available stability analyses are restricted to coordinate\-level projectors whose orthogonality drives the argument, deterministic\-output assumptions incompatible with randomized updates, or uniform step sizes that ignore curvature\-adaptive blockwise schedules; none explains how general subspace coverage controls population risk\. We analyze this question through randomized subspace descent \(RSD\), a framework that recovers GD, RCD, BCD, and isotropic SSD as special cases: under joint isotropy the expected projection energy reduces to a single coverage parameter\~$\\alpha$, enabling unified stability analysis without coordinate\-level structure\. The convex excess risk scales as $O\(\\alpha^\{\-1/4\}N^\{\-1/2\}\)$, improving to $O\(\(N\\sqrt\{\\alpha\}\)^\{\-1\}\)$ under low noise, substantially gentler than the $O\(1/\\alpha\)$ optimization slowdown, while in the nonconvex Polyak\-\-\{\\L\}ojasiewicz setting $\\alpha$ lengthens the early\-stopping horizon without entering the excess\-risk bound as an explicit penalty\. The analysis extends to the canonical blockwise step size\~$1/L\_i$ through a curvature\-matched Lyapunov geometry that exposes a balance condition for exact block updates, and to nonconvex objectives by decoupling gradient and curvature moments via H\\"older's inequality so that stability is controlled without an almost\-sure curvature lower bound\. Experiments on convex and nonconvex benchmarks confirm the predicted trade\-off\.

## KiteNorm: Variance Regularisation for Stable and Scalable Post\-LN Transformers

**Authors:** Leon Aviv Trochelmann; Sajad Movahedi; Shiwei Liu; Antonio Orvieto

**ID:** 152670 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RHBoN3I3Z4>) | [PDF](<https://openreview.net/pdf?id=RHBoN3I3Z4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152670>)

Post\-LayerNorm Transformers have seen limited practical adoption due to enduring difficulties in scaling them to large depths\. While prior research has focused on stabilising Post\-LayerNorm by improving conditioning at initialisation, stability often deteriorates when models are trained with large learning rates, forcing additional compromises\. In the decoder\-only settings we study, existing Post\-LayerNorm methods fail to outperform strong Pre\-LayerNorm baselines\. We propose KiteNorm, a novel normalisation method designed to break this trend\. KiteNorm achieves stability through residual scaling and a regularisation technique based on hidden\-state variance\. Beyond stabilisation, KiteNorm learns separate scales for the skip and residual branches in each sublayer, improving performance\. Across decoder\-only Transformers up to 1B parameters, KiteNorm remains stable throughout training and consistently outperforms leading baselines, with scaling laws favouring KiteNorm across depth, width, batch size, and training budget\. Ablations show that each component is necessary for the full stability and performance gains\. We offer theoretical insights into KiteNorm through a new perspective on the gradient vanishing problem in Post\-LayerNorm, linking the underlying hidden\-state expansion to rank collapse\.

## In\-Expectation Convergence of Stochastic Gradient Methods under Heavy\-Tailed Noise

**Authors:** Zijian Liu

**ID:** 151715 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ybxgq6TUcv>) | [PDF](<https://openreview.net/pdf?id=Ybxgq6TUcv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151715>)

Many stochastic gradient methods are believed not to converge when the noise in stochastic gradients has only a finite $p$\-th moment for $p\\in\\left\(1,2\\right\)$, a setting known as the heavy\-tailed noise assumption\. However, some recent studies have found that Stochastic Gradient Descent \($\\textsf\{SGD\}$\), without any modifications to its update rule, can surprisingly converge in expectation for convex problems with bounded domains, highlighting the potential of classical stochastic gradient methods\. Inspired by this recent progress, we provide a comprehensive study of stochastic optimization under heavy\-tailed noise and establish new in\-expectation convergence results for Stochastic Mirror Descent \($\\textsf\{SMD\}$\) in convex optimization and $\\textsf\{SGD\}$ in nonconvex optimization\. Notably, our results not only hold without algorithmic changes but also avoid restrictive assumptions such as bounded domains that were imposed in prior work\. More importantly, our analysis provides a new, elegant, yet powerful framework for studying heavy\-tailed stochastic optimization, opening a new route to understanding first\-order stochastic gradient methods\.

## DrPO: Drifting Preference Optimization for One\-Step Generative Models

**Authors:** Zhou Jiang; Yandong Wen; Zhen Liu

**ID:** 151942 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WfyzQahi56>) | [PDF](<https://openreview.net/pdf?id=WfyzQahi56>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151942>)

While one\-step text\-to\-image generators, a fast and deployment\-friendly class of visual generative models, can produce samples with a single forward pass, existing preference\-finetuning methods fail to simultaneously achieve efficient adaptation, reward\-model agnosticism, and diverse generation\. In this work, we propose Drifting Preference Optimization \(DrPO\), an online preference\-finetuning method for one\-step generators\. Inspired by the recent work of Drifting Models, DrPO first uses the target reward model to construct an on\-policy dipole reward model from positive and negative samples\. This dipole model induces a preference drifting field in latent feature space, whose gradients are then used to optimize the generator without backpropagating through the target reward model\. Empirically, we evaluate DrPO across multiple reward models and SD\-Turbo and SDXL\-Turbo one\-step generators, including HPSv3 and GenEval as representative alignment benchmarks, and validate that DrPO can efficiently and effectively finetune one\-step generative models\. Preliminary experiments further suggest that this sample\-based gradient synthesis can be extended to offline preference finetuning\.

## AETDICE: Unified Framework and Offline Optimization for Nonlinear Multi\-Objective RL

**Authors:** Woosung Kim; Youngjun Suh; Jinho Lee; Jongmin Lee; Byung\-Jun Lee

**ID:** 150928 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eIYJqaER5g>) | [PDF](<https://openreview.net/pdf?id=eIYJqaER5g>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150928>)

Optimizing nonlinear preferences in multi\-objective reinforcement learning \(MORL\) is essential for capturing complex trade\-offs like risk aversion or fairness\. However, such non\-linearity has historically bifurcated nonlinear MORL objectives into two distinct paradigms: Scalarized Expected Return \(SER\) and Expected Scalarized Return \(ESR\)\. While SER requires global\-level optimization and ESR requires non\-Markovian policies, leading to fragmented optimization strategies, we bridge this divide through the Aggregation–Expectation–Transformation \(AET\) framework\. By unifying both criteria through a tripartite decomposition of scalarization, AET provides a principled foundation for general nonlinear MORL\. Building on this framework, we propose AETDICE, a tractable offline RL algorithm for AET objectives\. By utilizing DICE\-style density\-ratio estimation in an augmented state space, AETDICE enables sample\-based optimization from static datasets\. Our framework resolves long\-standing barriers and captures respective trade\-offs induced by AET framework, which existing methods fail to address\.

## Achieving Directional\-Stationarity from a Single Random Direction Step

**Authors:** Dan Greenstein; Nadav Hallak

**ID:** 149362 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qblLv39mYL>) | [PDF](<https://openreview.net/pdf?id=qblLv39mYL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149362>)

This paper addresses the challenge of obtaining strong optimality guarantees in constrained nonsmooth nonconvex optimization under mild regularity conditions, namely local Lipschitz continuity and existence and continuity of directional derivatives\.  While standard methods typically ensure weak stationarity notions, achieving directional \(d\-\)stationarity remains nontrivial\. We show that a random direction exploration step is sufficient to attain d\-stationarity\.  The proposed approach augments any base optimization method with a single exploration step that samples a direction and step size and accepts the candidate based on a function value comparison\. The resulting scheme guarantees that all accumulation points are d\-stationary almost surely, independently of the behavior of the underlying method\.  Moreover, it preserves convergence rates of the base method, as established for DCA and prox\-linear\-type schemes\. The theoretical results are complemented by numerical experiments illustrating the effect and guarantees of the exploration step\.

## The Cost of Mismatch: Noise Amplification in Zeroth\-Order Reinforcement Learning

**Authors:** Lianmin Chen; Junbin Qiu; Chenxing Wei; Yao SHU; Kun He

**ID:** 148377 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yLUddZsQl0>) | [PDF](<https://openreview.net/pdf?id=yLUddZsQl0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148377>)

Zeroth\-order optimization \(ZOO\) has emerged as a promising approach for fine\-tuning Large Language Models \(LLMs\) when gradient access is unavailable or memory\-prohibitive\. However, ZOO relies on estimating gradients via finite differences between two function evaluations at perturbation scale $\\mu$, making it inherently noisier than its first\-order counterpart\. This raises a fundamental question: \\textit\{under what conditions does ZOO yield reliable gradient estimates?\} In this work, we provide a rigorous variance\-theoretic answer through a generic noise\-amplification framework and demonstrate that the reliability of ZOO gradient estimations is structurally determined by whether the two finite\-difference evaluations are performed on \\textit\{matched data\}\. Mismatched evaluations, as induced by on\-policy Reinforcement Learning \(RL\), produce a $1/\\mu^2$ oracle\-noise amplification that sets an irreducible noise floor, whereas matched evaluations, as realized by offline optimization methods such as Boltzmann Targeted SFT \(BOLT\), eliminate this amplification entirely via noise cancellation\. We further derive convergence guarantees with explicit constants that cleanly separate the two regimes\. Controlled experiments on math reasoning tasks validate these findings, using ZooBOLT and ZooGRPO \-\-\- zeroth\-order adaptations of BOLT and GRPO \-\-\- as representatives of the matched\- and mismatched\-data regimes respectively\. On GSM8K with Qwen2\.5\-1\.5B, ZooBOLT recovers $96\.1\\%$ of first\-order BOLT's performance gains, while ZooGRPO exhibits near\-zero learning despite its first\-order counterpart achieving strong results\. This qualitative separation persists across harder benchmarks \(MATH\), larger model scales \(Qwen2\.5\-7B\), and different model variants \(DeepSeek\-R1\-Distill\-Qwen\-1\.5B\)\. Additionally, ZOO methods reduce peak memory to near\-inference levels, validating its practicality as a memory\-efficient fine\-tuning paradigm\.

## How Much Information is Needed for Accurate Kalman Filtering?

**Authors:** Wenhan Cao; Xuyang Chen; Shuyuan Wang; Lin Zhao

**ID:** 155363 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6AvVndMx4T>) | [PDF](<https://openreview.net/pdf?id=6AvVndMx4T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155363>)

Kalman filtering provides a principled inference framework for linear Gaussian hidden Markov models, but it leaves open a complementary question of representation: what is the minimum amount of information about the observation history that must be retained to support accurate filtering? We show that this question leads naturally to an indirect rate\-distortion problem, in which an encoder observes the history of noisy measurements while distortion is evaluated with respect to the latent state\. Directly solving this problem is challenging, since the optimization ranges over arbitrary stochastic kernels from a time\-varying observation history to an output representation, resulting in an infinite\-dimensional formulation\. We overcome this difficulty by proving that any feasible encoder can be replaced by a stochastic encoder acting only on the Kalman posterior mean, achieving the same mean\-square error with no larger mutual information\. The reduced problem admits a closed\-form solution in the form of a linear Gaussian blurring mechanism determined by the spectral decomposition of the Riccati solution\. This yields an explicit expression for the rate distortion function $R\_t\(\\epsilon\)$, showing that any representation with distortion at most $\\epsilon$ must retain at least $R\_t\(\\epsilon\)$ nats of information\. We further use this characterization to derive information\-theoretic lower bounds on the population risk of sequential learning and on the prediction error of temporal GP\. Numerical experiments corroborate the theoretical predictions\.

## Nerve\-Skeleton Message Passing for Federated Optimization with Overlapping Parameters

**Authors:** Wei Zhang

**ID:** 149655 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oSVZ8C084r>) | [PDF](<https://openreview.net/pdf?id=oSVZ8C084r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149655>)

Existing federated learning setups assume either a single global model or a fixed decomposition with one globally shared parameter block and one client\-specific private block\. In this paper, we study a generalized federated optimization setting where each client optimizes a local coordinate block, and two clients interact only when their blocks overlap\. We encode these coordinate overlaps by a graph on clients, called the nerve skeleton\. Based on this structure, we propose Nerve\-Skeleton Message Passing \(NSMP\), a two\-phase protocol on a spanning tree: a leaf\-to\-root pass composes reduced objectives by partial minimization, and a root\-to\-leaf pass reconstructs a joint assignment\. We further show that, under the tree\-elimination schedule in the paper, NSMP is equivalent to minimizing the joint objective, where the leaf\-to\-root phase evaluates the optimal objective value, and the root\-to\-leaf phase recovers a globally optimal assignment\. Experiments show that NSMP solves federated optimization with overlapping parameters using only efficient neighbor\-to\-neighbor message passing\.

## ROCKET: Rapid Optimization via Calibration\-guided Knapsack\-Enhanced Truncation for Efficient Model Compression

**Authors:** Ammar Ali; Baher Mohammad; Denis Makhov; Dmitriy Shopkhoev; Magauiya Zhussip; Stamatios Lefkimmiatis

**ID:** 154690 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BiaBywmZp3>) | [PDF](<https://openreview.net/pdf?id=BiaBywmZp3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154690>)

We present $\\textbf\{ROCKET\}$, a training\-free model compression method that achieves state\-of\-the\-art performance in comparison with factorization, structured\-sparsification and dynamic compression baselines\. Operating under a global compression budget, ROCKET comprises two key innovations: First, it formulates layer\-wise compression allocation as a multi\-choice knapsack problem, selecting the optimal compression level for each layer to minimize total reconstruction error while adhering to a target model size\. Second, it introduces a single\-step sparse matrix factorization inspired by dictionary learning: using only a small calibration set, it sparsifies weight coefficients based on activation\-weights sensitivity and then updates the dictionary in closed form via least squares bypassing iterative optimization, sparse coding, or backpropagation entirely\. $\\textbf\{ROCKET\}$ consistently outperforms existing compression approaches across different model architectures at 20–50\\% compression rates\. Notably, it retains over 90\\% of the original model’s performance at 30\\% compression without any fine\-tuning\. We will release the code implementing ROCKET upon paper acceptance\.

## CP\-MLPs: A Tensor\-Rank Theory of Tied and Untied MLP Blocks

**Authors:** Md Rifat Arefin; Farzaneh Heidari; Irina Rish; Guillaume Rabusseau

**ID:** 151658 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z0avyF5HD7>) | [PDF](<https://openreview.net/pdf?id=Z0avyF5HD7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151658>)

Transformer feed\-forward blocks combine several design choices: squared activations, gating, and tied versus untied parameter sharing\-whose separate contributions to expressivity remain poorly understood\. We introduce \\emph\{CP\-MLPs\}, a tensor framework in which each multiplicative unit contributes a rank\-1 interaction with three roles: detecting an input feature, reading a value, and writing to the output\. Tied gated blocks such as ReLU$^2$ force the detector and value roles to share the same direction; untied gated blocks such as ReGLU and SwiGLU let them differ\. We show that this distinction yields exact, degree\-wise tensor\-rank separations: untied detector\-value units are strictly more width\-efficient for indefinite quadratic interactions and role\-asymmetric monomials, while tied units are structurally matched to symmetric pure\-power targets\. Tying is therefore not inherently better or worse where its benefit depends on the structure of the target\. In experiments, models below the required width hit an irreducible approximation floor where the loss does not improve with extra optimization budget\. The detector\-value advantage also persists in trained gated MLPs at matched parameter count\.

## EVA\-0: Test\-Time Model Evolution with Only Two Forward Passes per Sample

**Authors:** Guohao Chen; Shuaicheng Niu; Geng Li; Yunbei Zhang; Shilin Shan; Chunyan Miao; Jianfei Yang

**ID:** 148681 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vrZyjNTvp5>) | [PDF](<https://openreview.net/pdf?id=vrZyjNTvp5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148681>)

Test\-time model evolution offers a promising way for deployed models to improve from unlabeled test\-time experience, yet most existing methods depend on backpropagation \(BP\), which incurs substantial memory overhead and makes them difficult to deploy on edge devices, quantized models, specialized accelerators, or black\-box models\. In this work, we study test\-time model evolution under a strict two\-forward budget, a setting that pushes adaptation toward highly efficient real\-world deployment\. We reveal three key obstacles in zeroth\-order test\-time optimization: susceptibility to shortcut solutions, uncontrolled weight drift, and ineffective update direction estimation\. To overcome them, we propose EVA\-0, a minimal zeroth\-order adaptation framework that: 1\) keeps the loss scale\-invariant to prevent shortcut solutions; 2\) devises an anchor\-guided optimization strategy to alleviate weight drift; 3\) uses sample\-wise symmetric two\-sided perturbation for update direction estimation and inference\. EVA\-0 requires no BP and performs both inference and adaptation within only two forward passes per sample\. Results on ImageNet\-C\\&amp;ViT\-Base show that EVA\-0 outperforms both BP\-based DeYO and BP\-free FOA, while achieving a 14$\\times$ speed\-up over FOA\.

## A Unified Approach for Computing Wasserstein Barycenters of Discrete and Continuous Measures

**Authors:** Peng Xu; Changbo Zhu; Xiaohui Chen

**ID:** 154277 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F23W2B2hf8>) | [PDF](<https://openreview.net/pdf?id=F23W2B2hf8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154277>)

Computing the unregularized Wasserstein barycenter for measure\-valued data is a challenging optimization task\. Recent algorithms have been tailored to either discrete measures as point clouds or continuous measures discretized on regular grids\. In this work, we propose a primal mirror descent algorithm for computing the exact Wasserstein barycenter in the Fisher\-Rao geometry\. Our algorithm is a unified approach that is flexible enough to simultaneously cover discrete and absolutely continuous input measures, with convergence guarantees in both settings\. In particular, when all input measures are discrete, our algorithm, initialized from any probability density, solves a sequence of semi\-discrete optimal transport subproblems and produces absolutely continuous iterates that converge to the discrete barycenter\. We use synthetic and real data examples to demonstrate the promising result in terms of accuracy and computational cost\.

## Minimax Optimization without Spurious Solutions in Optimal Transport Learning

**Authors:** Yejun Kim; Kyungjae Lee; Donghwan Kim

**ID:** 149739 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nixrZbKIFM>) | [PDF](<https://openreview.net/pdf?id=nixrZbKIFM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149739>)

Using neural networks to learn optimal transport \(OT\) maps via minimax optimization has gained increasing interest in generative modeling\. However, the widely used semi\-dual OT maximin formulation is known to suffer from spurious global solutions that do not correspond to valid transport maps, often addressed by regularizing the objective function\. We provide an alternative explanation by showing that these spurious solutions are not stationary points of the associated loss, implying that their appearance in practice stems from the optimizer's failure to converge to stationary points in nonconvex\-nonconcave settings\. However, when the $c$\-concavity constraints are imposed on the potential, commonly to stabilize training, we show that these spurious solutions become stationary\. Based on these observations, we propose solving the semi\-dual OT problem without $c$\-concavity constraints, using optimizers that can reliably converge to stationary points corresponding to OT maps in nonconvex\-nonconcave settings, such as a two\-timescale extragradient \(TTS\-EG\) method\. At the formulation level, we further show that a Lagrangian\-based OT minimax formulation provably eliminates spurious global solutions\. Our empirical results demonstrate that TTS\-EG reliably recovers OT maps under both semi\-dual and Lagrangian\-based OT formulations without any regularization\.

## Robust and Efficient Continual Model Merging via Global Singular Subspace Separation and Restoration

**Authors:** Juncheol Shin; Byeongho Yu; Semin Kim; Eunhyeok Park

**ID:** 148589 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wdIBHsopRB>) | [PDF](<https://openreview.net/pdf?id=wdIBHsopRB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148589>)

Continual model merging addresses a more realistic setting in which task\-specific models arrive sequentially\. Naive extension of standard model merging approaches to the continual setting leads to task balance collapse and substantial performance degradation\.  To address this issue, we propose Global Singular Subspace Separation and Restoration \(GS3R\), a data\-free and optimization\-compatible framework for continual model merging\. GS3R preserves task balance by globally separating singular components and introducing vector restoration matrices for perturbation\-free recovery\. To further enhance efficiency, we introduce Pre\-merge Restoration and Flushing \(PRF\), which guarantees peak memory usage comparable to that of other methods\. Experiments on vision and language tasks demonstrate that GS3R consistently outperforms prior continual model merging methods\.

## Unveiling Memorization–Generalization Coexistence: A Case Study on Arithmetic Tasks with Label Noise

**Authors:** Linyu Liu; Pinyan Lu

**ID:** 148534 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xBZ9SuztWE>) | [PDF](<https://openreview.net/pdf?id=xBZ9SuztWE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148534>)

Highly over\-parameterized models can simultaneously memorize noisy labels and generalize well, yet how these behaviors coexist remains Highly over\-parameterized models can simultaneously memorize noisy labels and generalize well, yet how these behaviors coexist remains poorly understood\. In this work, we investigate the underlying mechanisms of this coexistence using modular arithmetic tasks under heavy label noise\. Through extensive experiments on two\-layer neural networks, we find that larger models tend to generalize better under appropriate optimization and model configurations, while noisy labels are memorized faster than clean data\. Over\-parameterized models internally form a generalization structure, but its expression in the output is suppressed by the need to fit noisy labels\. Remarkably, even with 80\\% label noise, near\-perfect test accuracy can be achieved by extracting this internal structure using frequency\-based methods\. We further propose a task\-agnostic method to partition networks into generalization and memorization components\. Although this subnetwork improves generalization, it is limited compared with frequency\-based extraction, indicating that the generalization structure is distributed across neurons and motivating the development of new tools to retrieve generalizable knowledge from over\-parameterized networks\.

## Pairwise AUC Optimization Needs Corrective Power: A Unified View

**Authors:** Jia Chen; Zhiyong Yang; Shilong Bao; Qianqian Xu; Qingming Huang

**ID:** 153472 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L6W1wRGBCh>) | [PDF](<https://openreview.net/pdf?id=L6W1wRGBCh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153472>)

Direct pairwise AUC\-surrogate training is attractive because it trains toward the ranking metric used at test time, especially under class imbalance\. This creates a direct alignment between the training objective and the evaluation metric, but such metric alignment alone does not guarantee that stochastic training remains corrective\. We study this gap through Corrective Power: whether pairwise mini\-batch updates produce stronger and more reliable improvements for more severe positive\-negative ranking errors\. Our main observation is that direct pairwise training can enter regions where severe errors remain common but no longer produce useful corrective motion\. In such regions, even the mini\-batch noise that would normally help SGD move along the steepest severe\-error correction direction can become much weaker\.  In this paper, we seek a theoretical explanation for this by exploring the degenerate property of the U\-statistics formed from the pairwise gradients therein\. Our results provide a mechanistic explanation for several empirical patterns: \(a\) squared\-hinge loss is often an effective AUC surrogate; \(b\) cross\-entropy warm\-up can help models that enter the AUC phase from a poor starting region; and \(c\) parameter\-efficient fine\-tuning from a pretrained model can reduce that need by starting closer to a favorable ranking geometry\. Experiments on 8 CV tasks and 8 NLP tasks, using ResNet50, DenseNet121, DistilBERT\-base, and Qwen2\.5\-1\.5B\-Instruct, support these predictions\.

## Deriving Hyperparameter Scaling Laws via Modern Optimization Theory

**Authors:** Egor Shulgin; Jörg Franke; Dimitri von Rütte; Tianyue Zhang; Niccolò Ajroldi; Korbinian Pöppel; Bernhard Schölkopf; Aaron Klein; Peter Richtarik; Antonio Orvieto

**ID:** 154887 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A9u0AReK7q>) | [PDF](<https://openreview.net/pdf?id=A9u0AReK7q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154887>)

Hyperparameter transfer has become an important component of modern large\-scale training recipes\. Existing methods, such as muP, primarily focus on transfer between model sizes, with transfer across batch sizes and training horizons often relying on empirical scaling rules informed by insights from timescale preservation, quadratic proxies, and continuous\-time approximations\. We study hyperparameter scaling laws for modern first\-order optimizers through the lens of recent convergence bounds for methods based on the Linear Minimization Oracle \(LMO\), a framework that includes normalized SGD, signSGD \(approximating Adam\), and Muon\. Treating bounds in recent literature as a proxy and minimizing them across different tuning regimes yields closed\-form power\-law schedules for learning rate, momentum, and batch size as functions of the iteration or token budget\. Our analysis, holding model size fixed, recovers most insights and observations from the literature under a unified and principled perspective, with clear directions open for future research\. Our results draw particular attention to the interaction between momentum and batch\-size scaling, suggesting that optimal performance may be achieved with several scaling strategies\.

## OPPO: Bayesian Value Recursion for Token\-Level Credit Assignment in Policy Optimization

**Authors:** Yu Li; Rui Miao; Tian Lan; Zhengling Qi

**ID:** 151932 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WkadvgDPwb>) | [PDF](<https://openreview.net/pdf?id=WkadvgDPwb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151932>)

Reinforcement learning methods for LLM reasoning typically assign a uniform advantage to every token in a trajectory, diluting the learning signal at pivotal reasoning steps and injecting noise at uninformative positions\. Critic\-free alternatives such as anchored distillation derive per\-token signals from oracle\-conditioned likelihood ratios, but apply the signal independently at each position\. We propose Oracle\-Prompted Policy Optimization \(\\n\), which recovers exact token\-level advantages through a Bayesian value recursion\. Conditioning the model on the ground\-truth answer during training yields per\-token likelihood ratios that measure how much the answer revises the model's prediction; the ratios accumulate via Bayesian updating into a running estimate of the success probability at every position, from which the token\-level advantage follows in closed form\. The advantage factors as a product of a state weight, peaking where the outcome is most uncertain and vanishing where success or failure is already determined, and the per\-token oracle evidence familiar from on\-policy distillation, with no tunable weighting hyperparameter\. The framework supports two estimator choices: a self\-oracle mode in which the policy model provides the estimate through one additional forward pass, and a teacher\-oracle mode in which a stronger model serves as the estimator\. Experiments on two base models across seven reasoning benchmarks spanning mathematics, science, and code demonstrate consistent improvements over GRPO, DAPO, and SDPO, with the largest gains on competition\-level tasks where reasoning chains are longest\.

## LAQuant: A Simple Overhead\-free Large Reasoning Model Quantization by Layer\-wise Lookahead Loss

**Authors:** Euntae Choi; Sumin Song; Sungjoo Yoo

**ID:** 148865 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ucUpvTmeQM>) | [PDF](<https://openreview.net/pdf?id=ucUpvTmeQM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148865>)

Large reasoning models \(LRMs\) reach competition\-level math and coding accuracy via long autoregressive decoding, making per\-token decoding cost a primary deployment concern\. Weight quantization is the standard tool for acceleration, but representative recipes \-\-\- including state\-of\-the\-art end\-to\-end \(E2E\) QAT \-\-\- lose accuracy on long\-decoding reasoning benchmarks despite preserving perplexity and short\-decode accuracy\. Through a systematic gradient\-direction analysis, we identify two factors driving this gap: \(i\) KV\-cache fidelity preservation under the QAT loss, which E2E supervision attenuates via the softmax Fisher metric; and \(ii\) Hessian\-subspace alignment between calibration data and the deployment distribution\. We propose LookAhead Quantization \(LAQuant\), a layer\-wise weight\-only QAT method that addresses both factors without online\-transform overhead by combining reasoning\-domain calibration with a one\-layer lookahead loss whose implicit cross\-layer co\-adaptation preserves the next\-layer residual stream\. For Qwen3\-4B under W3G128 quantization, LAQuant improves AIME25 Pass@1 over ParoQuant by 15\.11pp \(1\.93pp over ParoQuant\+\+ at matched calibration\) while achieving a 3\.42$\\times$ decoding speedup over FP16 on RTX A6000, compared with ParoQuant's 3\.01$\\times$\.

## DCVD: Dual\-Channel Cross\-Modal Fusion for Joint Vulnerability Detection and Localization

**Authors:** Wenxin Tang; Wenbin Li; Junliang Liu; Jingyu Xiao; Xi Xiao; Mingzhe liu; Jinlong Yang; Xuan Liu; Yuehe Ma; Wang Luo; Qing Li; Lei Wang; Peng Xiangli

**ID:** 152806 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QFBbFDJdtz>) | [PDF](<https://openreview.net/pdf?id=QFBbFDJdtz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152806>)

Software vulnerability detection plays a critical role in ensuring system security, where real\-world auditing requires not only determining whether a function is vulnerable but also pinpointing the specific lines responsible\. However, existing approaches either rely on a single information source\-\-\-sequential, structural, or semantic\-\-\-failing to jointly exploit the complementary strengths across modalities, or treat statement\-level localization merely as a byproduct of function\-level detection without explicit line\-level supervision\. To address these limitations, we propose DCVD \(Dual\-Channel Cross\-Modal Vulnerability Detection\), a unified framework that performs joint function\-level detection and statement\-level localization\. DCVD extracts control\-dependency and semantic features through two parallel branches and integrates them via contrastive alignment coupled with bidirectional cross\-attention, effectively bridging the cross\-modal representation gap\. It further introduces explicit supervision signals at both the function and statement levels, enabling collaborative optimization across the two granularities\. Extensive experiments on a large\-scale real\-world vulnerability benchmark demonstrate that DCVD consistently outperforms state\-of\-the\-art methods on both function\-level detection and statement\-level localization\.

## Hidden Tails: Certifying Tail\-Risk Claims under Selective Labels

**Authors:** El Mustapha Mansouri

**ID:** 154165 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FnMwOr3VoG>) | [PDF](<https://openreview.net/pdf?id=FnMwOr3VoG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154165>)

High\-stakes prediction systems are often evaluated only on labels revealed by past decisions\. This selective observation can hide the losses that determine full\-population tail risk: a predictor may appear safe on revealed labels while its worst compatible failures remain unseen\. We study certification of conditional value\-at\-risk \(CVaR\) under selective labels\. First, we prove non\-identifiability: even with overlap, two predictors with identical observed selected\-loss distributions can have reversed full\-population CVaR rankings under compatible hidden\-label laws\. Under an outcome\-dependent odds\-ratio sensitivity model, we derive sharp upper and lower CVaR envelopes\. A minimax interchange shows that worst\-compatible hidden\-label completion commutes with the Rockafellar\-\-Uryasev threshold optimization, giving an exact certificate rather than a loose robust surrogate\. We then define the tail\-risk certification frontier: the minimum passive revelation cost needed to reduce hidden\-tail ambiguity below a target tolerance\. For a fixed predictor and threshold, this frontier is a fractional\-knapsack problem whose value density, tail\-identification value, pinpoints labels that can move the CVaR tail\. Finally, we give finite\-sample guarantees for cross\-fitted conservative certificate learning and a lower bound governed by the effective number of revealed tail labels\.

## Edge of Stability Selectively Shapes Learning Across the Data Distribution

**Authors:** Shauna Kwag; Anakha Ganesh; Tomaso Poggio; Pierfrancesco Beneventano

**ID:** 153610 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K5wixs1lVP>) | [PDF](<https://openreview.net/pdf?id=K5wixs1lVP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153610>)

Existing analyses of the edge of stability \(EoS\) treat it as a global property of optimization\. We show that it is also selective: the stability constraint redistributes learning across subsets of the training distribution, amplifying progress on some groups while suppressing progress on others\. Using a branching intervention that enters or exits the EoS regime from the same training state, we causally demonstrate this trade\-off and identify two necessary conditions for a group to benefit\. First, its aggregate gradient must align with the top Hessian eigenvector\. We isolate this mechanism with a controlled perturbation that preserves distance but randomizes direction, destroying alignment and eliminating the advantage\. Second, the group must sustain non\-vanishing gradient magnitude over time\. Under cross\-entropy loss, gradient saturation decouples confidently classified groups, shifting the advantage to output\-outliers, whose gradients persist\. Together, these results show that EoS functions not only as a stability boundary, but as a mechanism governing the allocation of learning across the data distribution\.

## Stochastic Reconfiguration as Statistical Filtering for Overparameterized Neural Quantum States

**Authors:** Tak Hur

**ID:** 153431 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LOBMS1ffZw>) | [PDF](<https://openreview.net/pdf?id=LOBMS1ffZw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153431>)

Stochastic reconfiguration \(SR\) is the standard optimizer for neural quantum states \(NQS\), but modern NQS often have far more parameters than Monte Carlo samples\. We show that in this regime the diagonal shift is more than a numerical stabilizer\. It acts as a statistical filter for finite\-sample generalization\. At a fixed wave function, SR is ridge regression from tangent features to the centered local energy\. Its residual is the expressivity gap, the part of imaginary\-time evolution outside the current tangent space\. This gap is orthogonal to the tangent space in population, but finite batches make it act as noise that SR can overfit\. The shift therefore balances shrinkage of useful update directions against variance from fitting sampled residuals\. Exact $4\\times4$ $J\_1$\-$J\_2$ experiments separate two effects of overparameterization\. Larger tangent spaces help when they reduce the expressivity gap, but they can hurt when they overfit a fixed gap\. In a $100$\-site transverse\-field Ising family trained with a foundation NQS, validation risk is U\-shaped in the shift while variance decreases, matching the noisy\-ridge model\. This view leads to multi\-shift SR \(MS\-SR\), which averages independent ridge solves at data\-adaptive shifts to form a richer, lower\-variance spectral filter\. MS\-SR lowers validation risk and stays closer to the ideal tangent\-space imaginary\-time update compared to other competitive NQS optimizers\.

## On the Sparsity of Direct Preference Optimization: Weight Disentanglement in the NTK Regime

**Authors:** Kensuke Sasaki; Issei Sato

**ID:** 151061 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dIhTYcLqCB>) | [PDF](<https://openreview.net/pdf?id=dIhTYcLqCB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151061>)

Direct Preference Optimization \(DPO\) has been widely adopted for aligning language models with human preferences\. Recent empirical work has revealed that DPO induces remarkably sparse parameter updates, yet no theoretical explanation for this phenomenon has been offered\. We analyze DPO's optimization dynamics under a neural tangent kernel linearization and show that the logistic structure of the DPO loss gives rise to an implicit maximum\-margin bias\. Building on this observation, we introduce the concept of dual sparsity: the DPO update direction is a sparse linear combination \(data\-level sparsity, driven by support vectors\) of sparse gradient feature vectors \(parameter\-level sparsity, arising from gradient cancellation between preferred and dispreferred responses\)\. We formalize this structure in our main theorem and present a framework relating it to weight disentanglement\-\-\-a condition favorable for model merging\. Experiments on GPT\-2 Small and Medium with the Anthropic HH\-RLHF and UltraFeedback datasets confirm both sources of sparsity and show that DPO reduces cross\-task interference by up to $35 \\times$ compared to supervised fine\-tuning\.

## Regularization Paths for Continuous DAG Learning

**Authors:** Diyang Li; Fei Wang; Kyra Gan

**ID:** 150245 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jeeqnxmgbl>) | [PDF](<https://openreview.net/pdf?id=jeeqnxmgbl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150245>)

Continuous DAG learning formulates combinatorial structure learning as differentiable optimization over weighted adjacency matrices\. In these methods, the estimated adjacency matrix depends critically on a sparsity\-controlling regularization parameter, whose magnitude governs the recovered graph skeleton\. While extensive empirical evidence underscores the centrality of this parameter, existing practice relies on solving a sequence of independent optimization problems over a grid of tuning parameters, which is computationally wasteful, statistically unstable, and provides only a fragmented view of how the adjacency matrix evolves\. In this work, we study the regularization path of stationary solutions in continuous DAG learning and propose DAG\-flow, an exact path\-following framework that compactly encodes the entire family of estimators\. We show that for prominent formulations including NOTEARS, GOLEM, and DAGMA, stationary solutions evolve according to a piecewise\-smooth matrix\-valued dynamical system once the active support is fixed\. Our analysis derives the explicit systems governing these branches, identifies the events at which the path changes regime, and clarifies how nonsmooth sparsity and nonconvex acyclicity interact along the path\. Unlike grid\-based search, DAG\-flow exposes the geometry of model variation across regularization levels, which enables the construction of structured candidate graph sets and provides direct insight into edge\-level stability\. Across synthetic and real benchmarks, our DAG\-flow outperforms grid\-search baselines at a fraction of the compute and consistently improves structural stability\.

## Sample\-Efficient Optimization over Generative Priors via Coarse Learnability

**Authors:** Pranjal Awasthi; Sreenivas Gollapudi; Ravi Kumar; Kamesh Munagala

**ID:** 150847 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eu558yM0rk>) | [PDF](<https://openreview.net/pdf?id=eu558yM0rk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150847>)

We study zeroth\-order optimization where solutions must minimize a cost $d\(s\)$ while maintaining high probability under a complex generative prior $\\mathcal\{L\}\(s\)$ \(e\.g\., a parameterized model\)\. This reduces to sampling from a target distribution proportional to $\\mathcal\{L\}\(s\) e^\{\-T \\cdot d\(s\)\}$\. Since classical model\-based optimization \(MBO\) lacks finite\-sample guarantees for expressive approximate learners, we introduce \\emph\{coarse learnability\}, a flexible statistical assumption requiring only that a learned model covers the target's probability mass within a polynomial factor\.   Leveraging this assumption, we design an iterative MBO algorithm called ALDRIFT with a sample correction step that provably approximates the target using only a polynomial number of samples\. We apply this framework to globally optimizing non\-convex objectives bounded by a quadratic envelope in $\\mathbb\{R\}^d$, where we show this assumption is naturally satisfied for a family of \`\`optimistic'' posterior distributions\. To reach global $\\varepsilon$\-optimality, this implies a sample complexity of $\\widetilde\{O\}\(\\log 1/\\varepsilon\)$, a rate characteristic of optimistic space\-partitioning methods\.  We further justify coarse learnability as an assumption for generative priors theoretically, proving that in simple settings, parametric maximum likelihood estimation and over\-smoothed kernel density estimators naturally satisfy it\.   Finally, one motivation for our framework comes from inference\-time alignment\. Though our primary contribution is formalizing the theoretical foundations of MBO, we provide qualitative evidence that, in simple settings, even primitive LLMs can shift their distributions toward lower\-cost regions when fine\-tuned with zeroth\-order feedback\.

## Information\-Theoretic Generalization for Set\-Input Optimization\-Valued Objectives

**Authors:** Futoshi Futami; Masahiro Fujisawa

**ID:** 153827 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IR2PNGshps>) | [PDF](<https://openreview.net/pdf?id=IR2PNGshps>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153827>)

Many modern learning criteria, such as multicalibration, CVaR, and distributionally robust objectives, are set\-input and optimization\-valued: their empirical values depend on the whole evaluation batch and on an auxiliary optimizer selected after observing that batch\.  This optimization mismatch falls outside the standard information\-theoretic generalization analysis for averages of fixed per\-example losses\. We provide a unified supersample\-based analysis for this class of objectives\.  Under a selector\-gap concentration condition, we show that the optimized validation\-\-training gap is controlled by the conditional mutual information between the learned supersample predictions and the selector, without an explicit complexity penalty for the auxiliary optimizer class\.  We verify the concentration condition through stability and convex L\_2\-Lipschitz certificates, obtaining concrete bounds for multicalibration, CVaR, and Cressie\-\-Read DRO, including a single\-index refinement under stability\.

## The Optimal Control Foundation of Early Exits – Turnpikes and ResNets

**Authors:** Jens Püttschneider; Simon Heilig; Asja Fischer; Timm Faulwasser

**ID:** 151427 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=anDvnfg9Dj>) | [PDF](<https://openreview.net/pdf?id=anDvnfg9Dj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151427>)

The feed\-forward propagation through neural networks is crucial for training and inference\. To trade off efficiency and accuracy, it has been proposed to consider intermediate outputs of hidden states as data\-dependent regularization during training and, ultimately, as early\-exits during inference\.  In this work, we analyze the joint optimization of loss functions computed for the output layer and intermediate layers using optimal control theory\.  We prove that ResNets trained in this joint fashion exhibit the so\-called turnpike phenomenon, this implies that the number of layers required to reach a prescribed loss level is bounded from above independently of the overall network depth\. This induces a similarity property across the internal representations of early\-exiting networks of varying depths\. We connect the turnpike to the overthinking phenomenon, and provide theoretical insights of the success of early\-exit criteria derived from softmax probabilities, specifically entropy and max\-probability\. In a range of experiments, we demonstrate the existence and effect of turnpikes and the resulting similarity in the early\-exit performance for ResNets of varying depths\.

## Fast, Relaxation‑ and Hyperparameter‑Free Pairwise Worst\-Case Class Separation

**Authors:** Mohammad Mahdi Omati; Arash Amini; Nezam Mahdavi\-Amiri

**ID:** 149044 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tIGr4bvK5s>) | [PDF](<https://openreview.net/pdf?id=tIGr4bvK5s>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149044>)

In this paper, we investigate a novel discriminative dimensionality reduction method based on maximizing the minimum pairwise ratio of between\-class to within\-class scatter\. This objective function enhances class separability by providing critical, adaptive control over the variance within each class pair\. The resulting max\-min fractional program is non\-convex and challenging to solve\. Our main contribution is F$^3$\-PWCRA \(Fast, Free of relaxation, Free of hyperparameters for Pairwise Worst\-Case Ratio Analysis\), a provably convergent two\-level algorithm: an outer generalized Dinkelbach\-type loop transforms the fractional objective into subtractive subproblems, ensuring the global convergence of the outer algorithm\. Then, we propose a bisection strategy as an alternative, which offers robust convergence and straightforward implementation\. For the inner loop, we develop an efficient minorization\-maximization \(MM\) algorithm that tackles the non\-convex subproblem by iteratively solving a simple quadratic program \(QP\), which we derive from the dual of a convex surrogate\. F$^3$\-PWCRA is computationally efficient, free from semidefinite relaxations and hyperparameter tuning, and extensive benchmarks show it consistently outperforms state\-of\-the\-art methods in classification error\.

## Exact Combinatorial Optimization for Partial Permutation Synchronization

**Authors:** Mohammad Mahdi Omati; Arash Amini

**ID:** 153163 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NPIijWupQs>) | [PDF](<https://openreview.net/pdf?id=NPIijWupQs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153163>)

In permutation synchronization, the goal is to find globally cycle‐consistent correspondences from noisy pairwise matchings\. In this work, unlike spectral relaxations that embed permutations into an orthogonal space and often result in inaccuracies, we maintain the problem in its original combinatorial form\. By shifting the affinity spectrum to ensure positive semidefiniteness, we cast the trace‐maximization over partial permutations as a convex‐in‐P formulation\. Our minorization\-maximization scheme then replaces this with a sequence of exact linear‐assignment subproblems, the row\-/column\-sum constraints of which are totally unimodular, guaranteeing integral solutions with no rounding\. This direct, combinatorial approach delivers a monotonic objective ascent, convergence to a KKT point, and achieves superior accuracy, cycle consistency, and runtime on image\-matching benchmarks\.

## Sublinear Variational Optimization of Gaussian Mixture Models with Millions to Billions of Parameters

**Authors:** Sebastian Salwig; Till Kahlke; Florian Hirschberger; Dennis Forster; Jörg Lücke

**ID:** 156665 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156665>)

Gaussian Mixture Models \(GMMs\) range among the most frequently used models in machine learning\. However, training large, general GMMs becomes computationally prohibitive for data sets that have many data points N of high\-dimensionality D\. For GMMs with arbitrary covariances, we here derive a highly efficient variational approximation, which is then integrated with mixtures of factor analyzers \(MFAs\)\. For GMMs with C components, our proposed algorithm substantially reduces runtime complexity from O\(NCD²\) per iteration to a complexity scaling linearly with D and sublinearly with NC\. In numerical experiments, we first validate that the complexity reduction results in a sublinear scaling for the entire GMM optimization process\. Second, we show on large\-scale benchmarks that the sublinear algorithm results in speed\-ups of an order\-of\-magnitude compared to the state\-of\-the\-art\. Third, as a proof of concept, we finally train GMMs with over 10 billion parameters on about 100 million images, observing training times of less than nine hours on a single state\-of\-the\-art CPU\. Finally, and fourth, we demonstrate the effectiveness of large\-scale GMMs on the task of zero\-shot image denoising, where sublinear training results in state\-of\-the\-art denoising times while competitive denoising performance is maintained\.

## Exploration as Constrained Policy\-Space Optimization

**Authors:** Victor Azad

**ID:** 153038 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OUryWodGWl>) | [PDF](<https://openreview.net/pdf?id=OUryWodGWl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153038>)

Reinforcement learning \(RL\) agents face a continuous trade\-off between exploiting known strategies and exploring novel states to obtain higher rewards\. While exploration is often undirected, it can also be guided by intrinsic signals such as novelty or uncertainty\. However, combining these signals with task rewards is challenging, as they can sometimes drive the agent away from optimal trajectories and reduce final performance\. We find that this degradation arises from a structural occupancy conflict: as the policy improves, exploration signals naturally begin to anti\-correlate with task advantages\. In this work, we introduce Kantorovich Dual Shaping \(KDS\), a framework that resolves this conflict through constrained policy\-space optimization\. KDS formulates exploration as an Optimal Transport problem and applies the Sinkhorn\-Knopp algorithm on the empirical batch manifold to reweight intrinsic rewards in a geometry\-aware, point\-by\-point manner\. When combined with standard RL objectives, it acts as a spatial filter that suppresses exploration in conflicting regions while enhancing it elsewhere\. We evaluate this general approach across multiple off\-policy and on\-policy algorithms, achieving stable exploration that consistently avoids task degradation in complex continuous control environments\.

## Mildly Overparameterized ReLU Networks on Orthogonal Data: Incremental Learning and Implicit Bias

**Authors:** James Town; Etienne Boursier; Ben Lewis; Matthias Englert; Ranko Lazic

**ID:** 149598 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ouh5P3tlCS>) | [PDF](<https://openreview.net/pdf?id=ouh5P3tlCS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149598>)

The successful training of neural networks hinges on the use of first order optimization methods, yet the theoretical characterization of these methods remains incomplete\. This is especially true in settings with mild overparameterization\. In this work, we study the gradient flow dynamics of two\-layer ReLU networks from small initialization with orthogonal training data\. We prove the limiting flow converges to a saddle\-to\-saddle jump process as the initialization scale tends to zero, revealing an incremental learning phenomenon in which a new neuron activates at each saddle\. This analysis recovers the known result of Dana et al\. \(2025\) that the network interpolates the training data with high probability as soon as $m \\gtrsim \\log\(n\)$, where $m$ is the network width and $n$ is the number of training samples\. This incremental process characterization also allows us to derive a novel implicit bias result: the learned interpolator has an $\\ell\_2$\-norm scaling as $\\sqrt\{n\}$, which is within a constant factor of the minimal\-norm interpolator\. More broadly, our work provides the first rigorous proof of an incremental learning process for ReLU networks, whilst suggesting mildly overparameterized networks can converge to interpolating solutions whose complexity is of the same order as that of the optimal interpolator\.

## VeriGraph: Towards Verifiable Data\-Analytic Agents

**Authors:** Jiajie Jin; Zhao Yang; WenLe Liao; Yuyang Hu; Guanting Dong; Xiaoxi Li; Yutao Zhu; Zhicheng Dou

**ID:** 151870 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XHH1MUulfY>) | [PDF](<https://openreview.net/pdf?id=XHH1MUulfY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151870>)

LLM\-based agents have demonstrated strong capabilities in data\-intensive analytical tasks, yet their outputs are rarely verifiable: a reliance on linear text trajectories makes their reasoning difficult to audit\. In particular, deterministic computations over raw data and semantic deductions over natural\-language claims are often entangled in an unstructured stream, leaving numerical conclusions hard to reproduce and qualitative judgments hard to inspect\. To address this, we propose VeriGraph, a traceable neuro\-symbolic reasoning framework that enables agents to construct an explicit heterogeneous evidence directed acyclic graph \(DAG\) during execution\. VeriGraph introduces three evidence\-expansion primitives, namely computational, grounding, and derivational expansion, to connect raw data, interpreter variables, computed results, and natural\-language claims in a unified graph\. Under this formulation, structural traceability is reduced to graph reachability from raw data sources to terminal claims, while semantic support is measured by claim\-level evidence evaluation\. To improve graph construction, we further design a graph\-based policy optimization strategy with a composite reward that jointly supervises answer correctness, computational integrity, and derivational coherence\. Experiments on four benchmarks show that VeriGraph\-8B achieves the highest overall score among all baselines\. More importantly, VeriGraph produces auditable evidence graphs with substantially stronger claim grounding, achieving a 87\.61\\% Grounding Rate under our claim\-level evidence support evaluation\. These results suggest that explicit evidence\-graph construction is a promising path toward verifiable data\-analytic agents\. Our code is available at \\url\{https://anonymous\.4open\.science/r/VeriGraph\-417E\}\.

## PRISM: Asymmetric Precision\-Recall Optimization for Million\-Scale Root Cause Analysis

**Authors:** Wei Zhang; Rongyao Cai; Xiaosheng Li; Hang Yu; Rui Wang

**ID:** 151138 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cjaVe5kjFu>) | [PDF](<https://openreview.net/pdf?id=cjaVe5kjFu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151138>)

Multi\-dimensional Root Cause Analysis \(RCA\) requires searching an exponential $\\mathcal\{O\}\(2^M\)$ attribute space over millions of records within seconds to isolate the root\-cause combination\.     Existing methods fail at this industrial scale due to a fundamental modeling oversight: employing symmetric objectives that treat anomalous and normal samples interchangeably, allowing the massive normal background to dominate computation\.     To overcome this, we propose \\textbf\{PRISM\} \(\\underline\{P\}recision\-\\underline\{R\}ecall \\underline\{I\}nformed \\underline\{S\}ubspace \\underline\{M\}ining\), which reformulates RCA as an asymmetric Precision\-Recall optimization\.      Precision is defined over anomaly\-normal pairs and Recall over anomaly\-anomaly pairs, eliminating uninformative normal\-normal comparisons entirely\.     Coupled with tensor compression and a two\-stage solver, comprising Bernoulli continuous relaxation and combinatorial verification, PRISM reduces pairwise complexity from a full\-dataset quadratic scale to an anomaly\-bounded $\\mathcal\{O\}\(\|\\mathcal\{P\}\|^2\)$\.     Evaluations on four public benchmarks and a new 5\.13M\-record industrial dataset show that PRISM achieves the highest average F1 \(0\.90 vs\.\\ 0\.65 for the strongest baseline\), while maintaining sub\-second latency across a $2^\{110\}$ attribute space\.      We publicly release this dataset as \\textbf\{NFC\}, establishing the first production\-sourced, million\-scale benchmark for multi\-dimensional RCA\.     \\href\{https://anonymous\.4open\.science/status/PRISM\-09FC\}\{\[Code\]\}

## The Geometry of Linear Program Compression: An Exact Characterization and Learning Algorithm

**Authors:** Yuhan Ye; Omar Bennouna

**ID:** 154900 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A5qzAwIMSD>) | [PDF](<https://openreview.net/pdf?id=A5qzAwIMSD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154900>)

We study how much a linear program \(LP\) can be compressed when solved repeatedly, given prior knowledge about its objective function\. Existing data\-driven projection methods learn low\-dimensional surrogate LPs with approximate objective\-value guarantees, but cannot provably identify the optimal projection for a prescribed compression budget\. We instead ask a sharper question: how far can an LP be compressed into a lower\-dimensional equivalent while exactly preserving optimality, enabling faster repeated solves with no loss in solution quality? We provide an exact geometric characterization of such compressed LPs, together with a tractable sample\-based learning algorithm that comes with fast\-rate guarantees: the compressed LP recovers the optimal solution of an unseen instance with probability at least $1\-\\widetilde O\(d^\\star/n\)$, where $d^\\star$ is the dimension of the decision\-relevant subspace, and $n$ the number of available historical LP samples\. This $1/n$ dependence is sharper than the $\\widetilde O\(1/\\sqrt n\)$ uniform\-convergence rates of approximate projection methods\. Our framework further exposes a tunable tradeoff between the dimension of the compressed LP and the probability of recovering the optimal solution, allowing the user to trade compression for accuracy\.

## Select\-then\-differentiate: Solving Bilevel Optimization with Manifold Lower\-level Solution Sets

**Authors:** Saeed Masiha; Zebang Shen; Negar Kiyavash; Niao He

**ID:** 153170 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NLXLf4kGZu>) | [PDF](<https://openreview.net/pdf?id=NLXLf4kGZu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153170>)

We study optimistic bilevel optimization when the lower\-level problem has a non\-isolated manifold of minimizers\. In this setting, the hyper\-objective may be non\-differentiable because the upper\-level criterion must choose among multiple lower\-level solutions\. Under a local Polyak\-\-\{\\L\}ojasiewicz \(P\{\\L\}\) condition, we show that differentiability does not require the lower\-level solution set to be a singleton: uniqueness of the optimistic selection is sufficient\. This yields an explicit pseudoinverse\-based hyper\-gradient formula extending the classical singleton\-minimizer result\. We further characterize the regularity of the hyper\-objective: non\-degeneracy of the selected minimizer along the solution manifold yields local smoothness, while failure of uniqueness can create many non\-differentiable points and failure of non\-degeneracy can destroy all positive H\\"older regularity of the hyper\-gradient\. Motivated by this theory, we propose HG\-MS, a select\-then\-differentiate method combining explicit optimistic selection with efficient pseudoinverse\-based hyper\-gradient computation\. Despite the nonconvex nature of optimistic selection over the lower\-level solution manifold, we show that HG\-MS converges to a stationary point of the optimistic objective with complexity governed by the intrinsic dimension of the solution manifold rather than its ambient dimension\. Empirically, we test a practical variant of HG\-MS for matched\-budget LLM source reweighting\. This variant preserves the select\-then\-differentiate principle and obtains the best GSM8K/MATH scores across the tested backbones, along with competitive or best MT\-Bench instruction\-following results\.

## Meta\-Cognitive Memory Policy Optimization for Long\-Horizon LLM Agents

**Authors:** Ziyan Liu; Zhezheng Hao; Yeqiu Chen; Hong Wang; JingRen Hou; Ruiyi Ding; Yongkang Yang; Wence Ji; Wei Xia; Feng Liu

**ID:** 155887 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=26CTl3jZo9>) | [PDF](<https://openreview.net/pdf?id=26CTl3jZo9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155887>)

Memory\-augmented LLM agents tackle complex long\-horizon tasks by recursively summarizing interaction trajectories into compact memory\. However, existing approaches typically train these memory policies using outcome\-based reinforcement learning, failing to localize where intermediate memory quality degrades\. As interactions unfold, ambiguous recursive summaries progressively discard or blur task\-relevant information\. This exacerbates belief deviation, obscuring the agent’s estimate of the latent task state and ultimately derailing long\-horizon reasoning\. We therefore argue that memory optimization should focus not merely on trajectory\-level success, but on the clarity of the belief induced by intermediate summaries\. To this end, we introduce Belief Entropy, a self\-supervised proxy that probes how uncertain the model remains about the latent task state given its current memory\. Based on this proxy, we propose Metacognitive Memory Policy Optimization \(MMPO\)\. Instead of relying only on sparse outcome\-based signals, MMPO provides fine\-grained, memory\-specific supervision by explicitly penalizing summaries that induce high epistemic uncertainty\. Experiments show that MMPO consistently outperforms existing methods on diverse long\-horizon tasks, maintaining 97\.1% performance even when scaled to 1\.75M\-token contexts\.

## Parameterized Complexity of Stationarity Testing for Piecewise\-Affine Functions and Shallow CNN Losses

**Authors:** Yuhan Ye

**ID:** 155237 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7CznRls7QK>) | [PDF](<https://openreview.net/pdf?id=7CznRls7QK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155237>)

We study the parameterized complexity of testing approximate first\-order stationarity at a prescribed point for continuous piecewise\-affine \(PA\) functions, a basic task in nonsmooth optimization\. PA functions form a canonical model for nonsmooth stationarity testing and capture the local polyhedral geometry that appears in ReLU\-type training losses\. Recent work of Tian and So \(2025\) shows that testing approximate stationarity notions for PA functions is computationally intractable in the worst case, and identifies fixed\-dimensional tractability as an open direction\. We address this direction from the viewpoint of parameterized complexity, with the ambient dimension $d$ as the parameter\. In this paper, we give XP algorithms in fixed dimension for the tractable sides, and prove W\[1\]\-hardness for the complementary sides\. Moreover, lower bounds under the Exponential Time Hypothesis rule out algorithms running in time $\\rho\(d\)s^\{o\(d\)\}$ for any computable function $\\rho$, where $s$ denotes the total binary encoding length of the stationarity\-testing instance\. As a further consequence, our results yield the corresponding parameterized complexity picture for testing local minimality of continuous PA functions\. We further extend our hardness results to a family of shallow ReLU CNN training losses, with stationarity tested in the trainable weight space\. Thus, the same parameterized\-complexity picture also appears for simple CNN training losses\.

## A Grid Efficient Transport Optimization Model for the Wasserstein Barycenter Problem

**Authors:** Gennaro Auricchio; Massimiliano Ghiotto; Stefano Gualandi

**ID:** 153536 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KcRsOQnPQQ>) | [PDF](<https://openreview.net/pdf?id=KcRsOQnPQQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153536>)

We propose the Grid Efficient Transport Optimization Linear Programming \(GETO\-LP\) model, a novel formulation of the Fixed\-Support Wasserstein barycenter problem for $M$ probability distributions supported on $d$\-dimensional grids\. While standard LP models require $O\(MN^2\)$ variables, the GETO\-LP model requires only $O\(dMN^\{1\+\\frac\{1\}\{d\}\}\)$, with $N$ being the total number of points in the grid support\. Despite the reduced number of variables, our formulation is \\emph\{exact\}, meaning that its solution fully characterizes both the barycenter $\\nu$ and the optimal transport plans between $\\nu$ and each of the $M$ input distributions without additional optimization steps\. We validate the GETO\-LP model via extensive comparisons with classical and entropic regularization solvers, demonstrating its effectiveness on both synthetic data and real\-world applications such as color palette manipulation and medical data averaging\. Overall, our approach provides an effective formulation for the Wasserstein barycenter problem, offering a memory\-efficient alternative that naturally integrates with other existing computational frameworks\.

## Certified Single\-Level Reformulation for Tri\-Level Cyber\-Physical Grid Security

**Authors:** Debraj Banerjee; Gurunath Gurrala; Kunal Narayan Chaudhury

**ID:** 152235 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UZCoLnaUiy>) | [PDF](<https://openreview.net/pdf?id=UZCoLnaUiy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152235>)

Modern power grids are increasingly exposed to coordinated cyber\-physical disruptions, where the outage of a small number of transmission components can trigger severe post\-contingency load shedding\. Designing proactive \_security defense\_ against such adversarial contingencies is naturally modeled as a tri\-level Defender\-Attacker\-Operator \(DAO\) problem: the defender allocates limited hardening resources, the attacker selects worst\-case line outages, and the operator solves a post\-attack DC/AC\-optimal power flow \(OPF\)\. However, the resulting tri\-level program is computationally prohibitive even for moderate network sizes\.  We develop a certified four\-step reformulation pipeline that converts this intractable tri\-level DAO problem into a tractable single\-level optimization, yielding a Single\-Level Mixed\-Integer Linear Program \(SL\-MILP\) under DC\-OPF and a Single\-Level Mixed\-Integer Conic Program \(SL\-MICP\) under AC\-OPF\. The construction combines exact dualization, exact Big\-$M$ linearization, and a single controlled attacker relaxation\. We prove that the resulting single\-level optimum provides a conservative upper bound on the true worst\-case load shedding and, more importantly, yields a robustness certificate for the deployed defense: no feasible binary attack can induce damage exceeding the reported single\-level value\. Extensive experiments on IEEE benchmark systems demonstrate substantial runtime improvements while maintaining strong worst\-case security guarantees\.

## Match the Geometry, Skip the Surrogate: Extreme Low\-Budget Optimization in High Dimensions

**Authors:** Michal Prusek; Adam Novozámský; Filip Sroubek

**ID:** 155876 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2BB0oOmLs4>) | [PDF](<https://openreview.net/pdf?id=2BB0oOmLs4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155876>)

Low\-budget molecular optimization is often framed as Bayesian optimization in a learned latent space, but standard benchmarks typically allow hundreds or thousands of evaluations, whereas a realistic wet\-lab round may allow only a few dozen\. We revisit this regime using a SELFIES molecular variational autoencoder and GuacaMol objectives at $N=30$ oracle calls\. The main finding is not a new surrogate model, but a geometric mismatch in candidate generation\. The training latents of the VAE concentrate near a narrow spherical shell, while many high\-dimensional optimizers propose candidates from boxes or box\-shaped trust regions\. Such candidates can leave the decoder's training distribution even when their coordinates look individually plausible\. We study a simple geometric constraint, the on\-sphere scaffold, that restricts candidate generation to the empirical shell occupied by the VAE training latents\. Uniform random search on this shell already outperforms most of the classical box\-supported Bayesian optimization baselines\. We then introduce two minimal optimizers to probe what remains useful once the support is fixed\. GeoWalk performs geodesic local search on the empirical sphere and outperforms every published Bayesian optimization baseline tested\. GeoCMA keeps the scaffold but adds covariance learning in a random subspace, becoming preferable when the search representation contains learnable directional or semantic structure, as in LassoBench, NAS\-Bench\-101 graph\-VAE optimization, and GSM8K text\-latent prompt optimization\. A controlled ablation of three recent Gaussian\-process recipes, changing only whether candidates are proposed on the empirical sphere or on the published box\-supported domain, shows that the scaffold rather than the surrogate is the load\-bearing component\. The practical lesson is simple: first match the empirical search support; add a surrogate or covariance learner only when the remaining search space contains directional structure that can be learned from the available budget\.

## Min\-Max Optimization Requires Exponentially Many Queries

**Authors:** Martino Bernasconi; Matteo Castiglioni; Andrea Celli; Alexandros Hollender

**ID:** 152184 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UwB9dtsf0b>) | [PDF](<https://openreview.net/pdf?id=UwB9dtsf0b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152184>)

We study the query complexity of min\-max optimization of a nonconvex\-nonconcave function $f$ over the hypercube $\[0,1\]^d \\times \[0,1\]^d$\. We show that, given oracle access to $f$ and to its gradient $\\nabla f$, any algorithm that finds an $\\varepsilon$\-approximate stationary point must make a number of queries that is exponential in $1/\\varepsilon$ or $d$\.

## Tree\-Ensemble Repair through Constrained Optimization

**Authors:** Lorenzo Cascioli; Chaahat Jain; Marcel Steinmetz; Jörg Hoffmann; Jesse Davis

**ID:** 153244 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MgEUWFldkw>) | [PDF](<https://openreview.net/pdf?id=MgEUWFldkw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153244>)

It is widely recognized that in many applications, strong predictive performance is not enough to warrant use of a learned model\. Additionally, it is required to ascertain whether the model conforms to certain properties such as fairness, robustness or safety\. Unfortunately, most learning approaches are not guaranteed to produce a model that adheres to these properties\. Model repair addresses this through a post\-hoc debugging loop\. Approaches such as verification are used to check if the desired property holds for a model; if not they return a counterexample which is used to modify or repair the ML model\. We propose a novel repair method for tree ensembles\. Our approach is based on a MILP encoding where the objective is to modify the leaf values in the tree ensemble such that it fixes the counterexamples while at the same time preserves predictive performance\. The use of constrained optimization over the model parameters is compelling as it is guaranteed to fix a given set of counterexamples\. We implement and evaluate our method in two use\-case scenarios, classification requiring fairness and action policies in MDPs requiring safety\. Results show that our MILP repair of tree ensembles can be feasible computationally, and is often successful in improving the desired property while not degrading performance\.

## Closed\-Form Last Layer Optimization

**Authors:** Alexandre Galashov; Nathaël Da Costa; Liyuan Xu; Philipp Hennig; Arthur Gretton

**ID:** 155421 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5obHwQa2tL>) | [PDF](<https://openreview.net/pdf?id=5obHwQa2tL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155421>)

Neural networks are typically optimized with variants of stochastic gradient descent\. Under a squared loss, however, the optimal solution to the linear last layer weights is known in closed\-form\. We propose to leverage this during optimization, treating the last layer as a function of the backbone parameters, and optimizing solely for these parameters\. We show this is equivalent to alternating between gradient descent steps on the backbone and closed\-form updates on the last layer\. We adapt the method for the setting of stochastic gradient descent, by trading off the loss on the current batch against the accumulated information from previous batches\. We provide theoretical analyses showing convergence of the method to an optimal solution in the neural tangent kernel regime, as well as quantifying the gains compared to standard SGD in a one\-step analysis\. Finally, we demonstrate the effectiveness of our approach compared with SGD and Adam on a squared loss in several regression tasks, including neural operators and causal inference\.

## Differentiable Nonlinear Model Predictive Control

**Authors:** Jonathan Frey; Katrin Baumgärtner; Gianluca Frison; Dirk Reinhardt; Jasper Hoffmann; Leonard Fichtner; Joschka Boedecker; Sebastien Gros; Moritz Diehl

**ID:** 153003 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OgtCRU5ApQ>) | [PDF](<https://openreview.net/pdf?id=OgtCRU5ApQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153003>)

The efficient computation of parametric solution sensitivities is a key challenge in the integration of learning\-enhanced methods with nonlinear model predictive control \(MPC\), as their availability is crucial for many learning algorithms\. This paper discusses the computation of solution sensitivities of general nonlinear programs \(NLPs\) using the implicit function theorem \(IFT\) and smoothed optimality conditions treated in interior\-point methods \(IPM\)\. We detail sensitivity computation within a sequential quadratic programming \(SQP\) method which employs an IPM for the quadratic subproblems\. Previous works presented in the machine learning community are limited to convex or unconstrained formulations, or lack an implementation for efficient sensitivity evaluation\. The publication is accompanied by an efficient open\-source implementation within the acados framework, providing both forward and adjoint sensitivities for general optimal control problems, achieving speedups exceeding 3x over the state\-of\-the\-art solvers mpc\.pytorch and cvxpygen \.

## Skip the Hessian, Keep the Rates: Globalized Semismooth Newton with Lazy Hessian Updates

**Authors:** Amal Alphonse; Pavel Dvurechenskii; Clemens Sirotenko

**ID:** 149332 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qs8DDaqFC9>) | [PDF](<https://openreview.net/pdf?id=qs8DDaqFC9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149332>)

Second\-order methods are provably faster than first\-order methods, and their efficient implementations for large\-scale optimization problems have attracted significant  attention\. Yet, optimization problems in ML often have nonsmooth derivatives, which makes the existing convergence rate theory of second\-order methods inapplicable\. In this paper, we propose a new semismooth Newton method \(SSN\) that enjoys both global convergence rates and asymptotic superlinear convergence without requiring second\-order differentiability\. Crucially, our method does not require \(generalized\) Hessians to be evaluated at each iteration but only periodically, and it reuses stale Hessians otherwise \(i\.e\., it performs lazy Hessian updates\), saving compute cost and often leading to significant speedups in time, whilst still maintaining strong global and local convergence rate guarantees\. We develop our theory in an infinite\-dimensional setting and illustrate it with numerical experiments on matrix factorization and neural networks with Lipschitz constraints\.

## Spectral Annealing: Normalization\-Path Exploration for Large\-Scale Ising Optimization

**Authors:** Juan Valentin Guerrero; Phuong Cao Cong; Kostadin Damevski; Thang N Dinh

**ID:** 151524 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a138H6V09U>) | [PDF](<https://openreview.net/pdf?id=a138H6V09U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151524>)

Large\-scale Ising optimization underlies critical optimization and learning applications, including correlation clustering, MAP inference, and energy\-based models\.    Spectral relaxation methods run in polynomial time but yield solutions with significant optimality gaps while metaheuristics close those gaps but scale poorly to large instances\. In particular, spectral methods are inherently single\-shot as they solve exactly one eigenvalue problem\.   We introduce $\\textit\{Spectral Annealing\}$ \(SpecAnn\), a new spectral optimization approach that transforms traditional spectral methods from single\-shot approximations into exploration\-based optimization, by sweeping a parametrized normalization path from the raw adjacency to the signed normalized Laplacian, with an $O\(n\)$ diagonal predictor that warm\-starts successive eigensolves and GPU\-batched local search refining candidates in parallel\.   Experiments on general Ising problems demonstrate that SpecAnn achieves competitive to near\-optimal solutions depending on instance structure, with runtimes less than 7 minutes for instances of 8\.4M variables\. SpecAnn delivers up to 83$\\times$ speedup over recent GPU\-accelerated methods while maintaining superior solution quality, and scales successfully beyond 524K variables where traditional metaheuristics fail\.

## Conservative Continuous\-Time Treatment Optimization

**Authors:** Nora Schneider; Georg Manten; Niki Kilbertus

**ID:** 150543 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hM2WDyPurD>) | [PDF](<https://openreview.net/pdf?id=hM2WDyPurD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150543>)

We propose a conservative continuous\-time stochastic control framework for treatment optimization from irregularly sampled patient trajectories\. We model the unknown patient dynamics as a controlled stochastic differential equation where treatment is a continuous\-time control input\. Naive model\-based optimization can exploit model errors and propose out\-of\-distribution controls that appear optimal under the learned model but perform poorly under the true dynamics\. To mitigate such extrapolation, we introduce a consistent, signature kernel MMD regularizer on path space, which penalizes controls whose predicted trajectories deviate from observed ones\. The resulting conservative objective minimizes a tractable upper bound on the true cost\. Experiments on pharmacometric simulators show improved robustness and performance compared to non\-conservative baselines\.

## Provable Speedups From Dynamic Population Sizes in Evolutionary Algorithms for Multiobjective Optimization

**Authors:** Andre Opris

**ID:** 152154 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V8Wc9BZete>) | [PDF](<https://openreview.net/pdf?id=V8Wc9BZete>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152154>)

This paper investigates the role of dynamic population sizes in evolutionary multi\-objective optimization\. Although such approaches are widely used in practice, their benefits remain poorly understood, and rigorous runtime analyses explaining when and why they help are still scarce\. To address this, we introduce the bi\-objective problem class CLIMB and analyze the runtime of GSEMO and the widely used NSGA\-II on this problem\. Our results show that allowing a dynamic population size for NSGA\-II can lead to a moderate improvement, yielding a speedup of order $\\Omega\(\\sqrt\{n\}/\\log n\)$\. In particular, we prove that GSEMO and NSGA\-II\-DYN, a version of NSGA\-II with dynamic population sizes we propose in this paper, can find the Pareto front of CLIMB in expected $O\(n \\log n\)$ fitness evaluations, whereas NSGA\-II with a fixed population size requires $\\Omega\(n^\{1\.5\}\)$ fitness evaluations in expectation\. To the best of our knowledge, this is the first rigorous runtime analysis in multi\-objective optimization demonstrating a super\-constant speedup of GSEMO over NSGA\-II\. Our analysis builds on concepts from single\-objective optimization, like the evolution of population diversity over time, and employs the well\-known family\-three method to prove the lower bound\.

## Black\-Box Followers, White\-Box Leaders: Partial Zeroth\-Order Methods for MPECs

**Authors:** Miriam Fischer; Dario Paccagnan

**ID:** 155774 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=317Kb0r0vX>) | [PDF](<https://openreview.net/pdf?id=317Kb0r0vX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155774>)

We study mathematical programs with equilibrium constraints, in which a leader knows their own cost function, but lacks a model of the followers' response\. Instead, the leader can only query this response at specific points\. While this setting precludes the use of gradient\-based methods, existing zeroth\-order approaches treat the composed objective \\emph\{entirely\} as a black box, deploying zeroth\-order tools across both the leader and follower\. Such approaches are inefficient, as they discard information the leader already possesses about their own cost function\. In this work we instead propose to deploy zeroth\-order tools only where they are truly needed: to handle the unknown, non\-smooth followers' response\. Specifically, we first propose \\algpzos, an algorithm that combines exact partial gradients of the leader's cost with zeroth\-order Jacobian estimates of the followers' response in a chain\-rule\-inspired manner, and establish that it achieves a strictly lower variance bound than the black\-box baseline\. Second, we introduce the partial Goldstein subdifferential, a stationarity notion tailored to this composite structure, and prove convergence of our algorithm to both standard and partial Goldstein stationary points\.  Finally, we validate our method on two application domains \-\- toll optimization in routing games and defense\-attack investment in security games \-\- demonstrating consistent improvements over black\-box baselines in convergence speed, objective value, and estimator variance, with robust performance even under few queries per iteration\.

## We Need to Improve Benchmarks in AI for Mathematics

**Authors:** Simon Frieder; Jonas Bayer; Shi Zhuo Looi; Jacob Loader; Julius Berner; Katie Collins; Andras Juhasz; Fabian Ruehle; Sean Welleck; Gabriel Poesia; Ionut Mistreanu; Ryan\-Rhys Griffiths; Adrian Weller; Anirudh Goyal; Thomas Lukasiewicz; Cameron Freer; Kevin Buzzard; W\. T Gowers

**ID:** 140114 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5Llaz7kMgQ>) | [PDF](<https://openreview.net/pdf?id=5Llaz7kMgQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140114>)

Benchmarks used to evaluate AI systems for mathematics \(both in natural and formal language\) exhibit critical shortcomings that limit progress toward genuinely useful mathematical assistants\. These limitations range from restricted mathematical complexity to insufficient fidelity in capturing aspects of formal languages such as Lean\. Compounding some of these issues is a dynamic reminiscent of Goodhart's law: as benchmark performance becomes the primary optimization target, benchmarks become less reliable indicators of mathematical capability\. We explore these limitations and argue that progress requires a course correction in benchmark design and an upgrade to evaluation standards\. Additionally, we provide a live, community\-extensible website to track the landscape of mathematics benchmarks and encourage the creation of novel benchmarks\.

## Finding Simple Proofs for First\-Order Optimization

**Authors:** Daniel Berg Thomsen; Manu Upadhyaya; Baptiste Goujaud; Aymeric Dieuleveut; Adrien Taylor

**ID:** 153132 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NfXX7GR9t7>) | [PDF](<https://openreview.net/pdf?id=NfXX7GR9t7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153132>)

Progress in mathematics often depends not only on proving that a result is true, but on finding a proof that is simple enough to understand, verify, and adapt\. Automated systems can now independently discover proofs, but the certificates they produce tend to be dense and difficult to interpret, even when simpler arguments exist\.      Recent work on performance estimation problems has shown that proofs of convergence for first\-order optimization methods can be discovered by searching over a structured space of Lagrangian dual certificates\. This paper studies the simplification of such proofs as an optimization problem\. Starting from dual certificates, we develop post\-processing procedures using tools from sparse optimization and statistical learning\. We measure complexity through features such as active hypotheses and residual structure, and introduce methods based on exhaustive sparsification, \(weighted\) $\\ell\_1$ heuristics, and semidefinite programming \(SDP\) formulations for discovering simple proofs and intermediate lemmas\.  Examples on gradient descent, proximal methods, and fast\-gradient methods show that these procedures can autonomously prune redundant inequalities, reveal structured proof patterns, and, in the proximal setting, recover standard intermediate lemmas that lead to streamlined proofs\. By distilling dense machine\-generated certificates into compact proof structures, this workflow acts as a pre\-processing step for the final proof, reducing the complexity that must be managed during human interpretation, reuse, and formalization\.

## Stochastic Zeroth\-Order Optimization Under Heavy\-Tailed Noise

**Authors:** Taha EL BAKKALI EL KADI; El Mahdi Chayti; Qiuyi \(Richard\) Zhang; Imane Rahali; Omar Saadi

**ID:** 153577 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KNeGuHB7Md>) | [PDF](<https://openreview.net/pdf?id=KNeGuHB7Md>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153577>)

We study stochastic zeroth\-order \(ZO\) optimization of smooth nonconvex objectives under heavy\-tailed sample\-gradient noise, a regime motivated by empirical evidence that gradient noise in modern machine learning can violate the bounded\-variance assumption underlying classical ZO theory\. While the first\-order literature has established optimal rates under bounded $p$\-th moment noise for $p \\in \(1,2\]$, analogous high\-probability guarantees for nonconvex ZO optimization remain largely unexplored\. The ZO setting is not a direct corollary of first\-order theory: first\-order methods update using $\\nabla F\(x;\\xi\)$, the same object on which the noise assumption is imposed, whereas derivative\-free methods only observe noisy function values and construct directional finite\-difference estimates\. Thus, weak\-$L\_p$ control of $\\nabla F\(x;\\xi\)\-\\nabla f\(x\)$ must first be transferred to scalar two\-point directional estimates, a concentration step absent from standard first\-order analyses\. We propose the Robust Scalar\-Clipped Zeroth\-Order method \(\\textbf\{RSC\-ZO\}\), a two\-point method that clips each scalar directional derivative before aggregation\. Under sample\-wise smoothness and a weak\-$L\_p$ tail bound on the sample\-gradient noise, RSC\-ZO finds an $\\varepsilon$\-stationary point with high probability using $ \\widetilde\{O\}\\\\left\( \\frac\{d^\{\\frac\{p\}\{2\(p\-1\)\}\}\} \{\\varepsilon^\{\\frac\{3p\-2\}\{p\-1\}\}\} \\right\) $ noisy function evaluations, matching the optimal first\-order $\\varepsilon$\-dependence\. At $p=2$, our bound becomes $\\widetilde\{O\}\(d\\varepsilon^\{\-4\}\)$, matching the classical dimension\-accuracy dependence for stochastic ZO methods under bounded\-variance noise, which is typically established only in expectation\. In contrast, our guarantee holds with high probability and under the strictly weaker weak\-$L\_2$ tail condition, which can allow infinite gradient\-noise variance\. We further extend the analysis to a momentum variant and quantify the resulting batch\-size/stepsize tradeoff\.

## Subcritical Signal Propagation at Initialization in Normalization\-Free Transformers

**Authors:** Sergey Alekseev

**ID:** 149848 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mrN0k7yv3r>) | [PDF](<https://openreview.net/pdf?id=mrN0k7yv3r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149848>)

We study signal propagation at initialization in transformers through the averaged partial Jacobian norm \(APJN\), a measure of gradient amplification across layers\. We extend APJN analysis to transformers with bidirectional attention and permutation\-symmetric input token configurations by deriving recurrence relations for activation statistics and APJNs across layers\. Our theory predicts how attention modifies the asymptotic behavior of the APJN at large depth and matches APJNs measured in deep vision transformers\. The criticality picture known from residual networks carries over to transformers: the pre\-LayerNorm architecture exhibits power\-law APJN growth, whereas transformers with LayerNorm replaced by elementwise tanh\-like nonlinearities have stretched\-exponential APJN growth, indicating that the latter are subcritical\. Applied to Dynamic Tanh \(DyT\) and Dynamic erf \(Derf\) transformers, the theory explains why these architectures can be more sensitive to initialization and optimization choices and require careful tuning for stable training\.

## When Streaming Fails: Dynamic Algorithms for Unconstrained Submodular Maximization

**Authors:** Kiarash Banihashem; MohammadTaghi Hajiaghayi; Peyman Jabbarzade; Samira Goudarzi; Morteza Monemizadeh

**ID:** 154760 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BAkDvtpvDd>) | [PDF](<https://openreview.net/pdf?id=BAkDvtpvDd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154760>)

Dynamic submodular optimization has attracted significant attention in recent     years, with a growing body of work studying both monotone and non\-monotone     variants under various constraints\. A key insight underlying much of this     progress is that the dynamic setting is closely related to the     streaming setting, both in terms of algorithms and lower bounds\. This raises a     natural and fundamental question: \\emph\{can we obtain dynamic algorithms     even for problems where no streaming analogue exists?\} In this paper, we answer this question affirmatively for the fundamental     problem of Unconstrained Submodular Maximization \(USM\)\. Unlike other     variants of submodular maximization, no streaming algorithm with     non\-trivial guarantees is known for USM\.      In the dynamic setting, a trivial     $0\.25$\-approximation follows from random sampling, but obtaining any better     approximation with sublinear update time had remained open\. We present the     first dynamic algorithms for USM that break the $0\.25$\-approximation     barrier while maintaining sublinear update time, across several natural     dynamic models: incremental updates, decremental updates with known     deletion order, and fully dynamic updates with known deletion times\.

## Expected Batch Optimal Transport Plans and Consequences for Flow Matching

**Authors:** Samuel Boïté; Julie Delon; Kimia Nadjahi

**ID:** 154399 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Drh2loVsgL>) | [PDF](<https://openreview.net/pdf?id=Drh2loVsgL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154399>)

Solving optimal transport \(OT\) on random minibatches is a common surrogate for exact OT in large\-scale learning\. In flow matching \(FM\), this surrogate is used to obtain OT\-like couplings that can straighten probability paths and reduce numerical integration cost\. Yet, the population\-level coupling induced by repeated minibatch OT remains only partially understood\. We formalize this coupling as the expected batch OT plan $\\overline\{\\pi\}\\\_\{k\}$, obtained by averaging empirical OT plans over independent minibatches of size $k$\. We then establish its large\-batch consistency and, in the semidiscrete case relevant to generative modeling, derive rates for both the transport\-cost bias and the convergence of $\\overline\{\\pi\}\\\_\{k\}$ to the OT plan\. For FM, this yields a population coupling whose induced velocity field is regular enough to define a unique flow from the source to the discrete target\. We finally quantify how OT batch size interacts with numerical integration in a tractable two\-atom model and in synthetic and image experiments\.

## An Educated Guess: Deriving Statistically Aligned Gradient Estimates for Zeroth\-Order Optimization

**Authors:** Justus F Hübotter; Serge Thill; Marcel A\. J\. van Gerven; Nasir Ahmad

**ID:** 150140 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kMdijHwnR7>) | [PDF](<https://openreview.net/pdf?id=kMdijHwnR7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150140>)

As novel hardware architectures are explored for the purposes of machine learning, including neuromorphic chips, asynchronous systems, and ASICs, effective learning algorithms are highly desirable\. While backpropagation is the standard for differentiation on standard hardware, its requirement for global synchrony and exact differentiability limits the exploration of exotic algorithms on non\-traditional substrates and devices\. Zeroth\-order \(ZO\) optimization methods, such as SPSA and weight perturbation, offer a compelling alternative by estimating gradients through inference\-only passes; however, these methods have historically suffered due to the "curse of dimensionality," where random perturbations become increasingly misaligned with the true gradient in high\-dimensional spaces\. In this work, we move beyond blind random noise by deriving zeroth\-order search directions from activation geometry available during the forward pass\. This leads to a family of Spectral Zeroth\-Order methods, SZO\-$\\kappa$, whose directions solve local response\-based gradient\-guessing objectives under explicit stochastic assumptions\. These methods spend perturbation budget on feature\-supported directions that are more likely to produce informative loss responses\. To further bridge the gap with first\-order methods, we study covariance corrections and probe stabilizers, including search direction orthogonalization and bias corrections that reduce estimator error\. Using multilayer and convolutional layers and networks, we analyze gradient alignment, bias\-variance structure, and training stability of these methods relative to standard perturbation baselines and backpropagation\.

## The Hidden Power of Scaling Factor in LoRA Optimization

**Authors:** Zicheng Zhang; Haoran Li; Jiaxing Wang; Guoqiang Gong; Anqi Li; Yudong Hu; Ting Xiong; Yurong Gao; Junxing Hu; Zhida Jiang; Yifeng Zhang; Pengzhang Liu; Qixia Jiang

**ID:** 153734 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=J9AbM86AH7>) | [PDF](<https://openreview.net/pdf?id=J9AbM86AH7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153734>)

In Low\-Rank Adaptation \(LoRA\), the scaling factor $\\alpha$ is often treated as a mere complement to the learning rate, yet its role in optimization remains poorly understood\. In this paper, we reveal that the scaling factor $\\alpha$ and the learning rate function differently, with $\\alpha$ emerging as the dominant driver of effective optimization, delivering gains that cannot be replicated by learning rate scaling alone\. Through the synergy of extensive empirical analysis and a theoretical Signal\-Drift framework, we uncover three findings into LoRA’s scaling mechanism: First, LoRA’s spectral suppression smooths the optimization landscape, rendering standard hyperparameters overly conservative and creating an optimization gap\. Second, when leveraging this smoothness to accelerate convergence, $\\alpha$ outperforms the learning rate by amplifying the task signal without increasing the drift ratio\. Third, the optimal scaling factor follows a sublinear relationship with the rank, well characterized by a square\-root law with an unexpectedly large coefficient, revealing the insufficient scaling of existing rank\-tied heuristics\. Based on these insights, we propose LoRA\-$\\alpha$, a minimalist framework that restores $\\alpha$ to its principled regime, making LoRA compatible with standard small learning rates\. Extensive evaluations across diverse tasks demonstrate that LoRA\-$\\alpha$ consistently improves performance while streamlining hyperparameter search,  unleashing the learning potential of LoRA\.

## Mini Amusement Parks \(MAPs\): A Testbed for Modelling Business Decisions

**Authors:** Stéphane Aroca\-Ouellette; Ian Berlot\-Attwell; Panagiotis Lymperopoulos; Abhiramon Rajasekharan; Tongqi Zhu; Herin Kang; Kaheer Suleman; Sam Pasupalak

**ID:** 139619 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EwZDOMcQcr>) | [PDF](<https://openreview.net/pdf?id=EwZDOMcQcr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139619>)

Despite rapid progress in artificial intelligence, current systems struggle with the interconnected challenges that define real\-world decision making\. Practical domains such as business management require open\-ended optimization, actively learning environment dynamics from sparse experience, planning over long horizons in stochastic settings, and reasoning over spatial information\. Yet no existing human\-AI benchmarks assess how well agents integrate these challenges in a grounded decision\-making context\. To this end, we introduce Mini Amusement Parks \(MAPs\), an amusement\-park simulator designed to evaluate an agent’s ability to model its environment, anticipate long\-term consequences under uncertainty, and strategically operate a complex business\. We provide expert human performance and a comprehensive evaluation of state\-of\-the\-art agents, finding experts outperform these systems by 11\.4× on easy mode and 15\.3× on medium mode\. Our analysis reveals persistent weaknesses in long\-horizon planning, sample\-efficient learning, spatial reasoning, and modelling uncertainty\. By unifying these challenges within a single environment, MAPs offers a new foundation for benchmarking agents capable of adaptable decision making\.

## Policy Optimization in Hybrid Discrete\-Continuous Action Spaces via Mixed Gradients

**Authors:** Matias Alvo; Daniel Russo; Yashodhan Kanoria

**ID:** 151120 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cqg3IKxaHY>) | [PDF](<https://openreview.net/pdf?id=cqg3IKxaHY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151120>)

We study reinforcement learning in hybrid discrete–continuous action spaces, such as settings where the discrete component selects a regime \(or index\) and the continuous component optimizes within it — a structure common in robotics, control, and operations problems\. Standard model\-free policy gradient methods rely on score\-function \(SF\) estimators and suffer from severe credit\-assignment issues in high\-dimensional settings, leading to poor gradient quality\. On the other hand, differentiable simulation largely sidesteps these issues by backpropagating through a simulator, but the presence of discrete actions or non\-smooth dynamics yields biased or uninformative gradients\. To address this, we propose Hybrid Policy Optimization \(HPO\), which backpropagates through the simulator wherever smoothness permits, using a mixed gradient estimator that combines pathwise and SF gradients while maintaining unbiasedness\. We also show how problems with action discontinuities can be reformulated in hybrid form, further broadening its applicability\. Empirically, HPO substantially outperforms PPO on inventory control and switched linear\-quadratic regulator problems, with performance gaps increasing as the continuous action dimension grows\. Finally, we characterize the structure of the mixed gradient, showing that its cross term — which captures how continuous actions influence future discrete decisions — becomes negligible near a discrete best response, thereby enabling approximate decentralized updates of the continuous and discrete components and reducing variance near optimality\.

## Stop Using Plausibility as the Criterion for Explainable AI

**Authors:** Weina Jin; Xiaoxiao Li; Ghassan Hamarneh

**ID:** 140096 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GEJEVd3MY5>) | [PDF](<https://openreview.net/pdf?id=GEJEVd3MY5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140096>)

Explainable artificial intelligence \(XAI\) is motivated by the problem of making AI predictions understandable, transparent, and responsible, as AI becomes increasingly impactful in society and high\-stakes domains\. The evaluation and optimization criteria of XAI are gatekeepers for XAI algorithms to achieve their expected goals and should withstand rigorous inspection\. To improve the scientific rigor of XAI, we conduct the first comprehensive and critical examination of a common XAI criterion: plausibility\. Plausibility assesses how convincing the AI explanation is to humans, and is usually quantified by metrics of feature localization or feature correlation\. Our examination shows that plausibility is invalid to measure explainability, and human explanations are not the ground truth for XAI, because doing so ignores the necessary assumptions underpinning an explanation\. One fundamental assumption is that AI explanation is supposed to behave adversarially, analogous to auditors' or doctors' roles of identifying potential problems\. Evaluating or optimizing XAI to generate more plausible explanations is analogous to incentivizing \(i\.e\., bribing\) auditors/doctors to generate more positive reports, which is different from encouraging AI models to learn more plausible features \(analogous to encouraging companies/patients to improve their conduct/health\)\. Our examination further reveals the consequences of using plausibility as the XAI criterion, including increasing misleading explanations that manipulate users, deteriorating users' trust in the AI system, undermining human autonomy, being unable to achieve complementary human\-AI task performance, and abandoning other possible approaches of enhancing understandability\. Due to the invalidity of measurements and the unethical issues, this position paper argues that the AI community should stop using plausibility as the criterion to evaluate and optimize XAI algorithms\. We also delineate new research approaches to improve XAI in trustworthiness, understandability, and utility to users including complementary human\-AI task performance\.

## PORTool: Importance\-Aware Policy Optimization with Rewarded Tree for Multi\-Tool\-Integrated Reasoning

**Authors:** Feijie Wu; Weiwu Zhu; Yuxiang Zhang; Soumya Chatterjee; Jiarong Zhu; Fan Mo; Rong Luo; Jing Gao

**ID:** 155506 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=54keqZlySs>) | [PDF](<https://openreview.net/pdf?id=54keqZlySs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155506>)

Multi\-tool\-integrated reasoning enables LLM\-empowered tool\-use agents to solve complex tasks by interleaving natural\-language reasoning with calls to external tools\. However, training such agents from outcome\-only rewards suffers from credit\-assignment ambiguity, obscuring which intermediate tool\-use decisions drive success or failure\. In this paper, we propose PORTool, an importance\-aware policy\-optimization algorithm that reinforces agents' tool\-use competence from outcome\-level supervision while assigning reward at the step level\. Specifically, PORTool generates a rewarded rollout tree in which trajectories share prefixes before branching, enabling direct comparisons among alternative tool\-use decisions within the same context\. It then estimates each step's importance by a correctness\-dominant signal, i\.e\., whether descendants of that step can ultimately produce a correct final answer, plus an auxiliary term indicating whether the step's tool calls satisfy formatting constraints and execute successfully\. Using these step\-wise importance estimates, PORTool updates the policy to generate efficient tool\-call steps, guided by both local comparisons within each branching decision and the overall quality of entire trajectories\. Experiments show that PORTool improves final\-answer accuracy while reducing tool\-call steps compared with state\-of\-the\-art policy\-optimization baselines, and ablation studies confirm the robustness of the proposed step\-wise importance estimates\.

## SLIC: Reinforcement Fine\-Tuning Small LMs for Multi\-Turn Analog Circuit Optimization

**Authors:** Yan Xu; Zhengqi Gao; Ching\-Yun Ko; Zhang\-Wei Hong; Wenjie Lu; Tao Yu; Xin Zhang; Duane Boning; Ruonan Han

**ID:** 153101 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NwEmt4o0zc>) | [PDF](<https://openreview.net/pdf?id=NwEmt4o0zc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153101>)

Analog integrated circuit \(IC\) design is a multi\-turn, simulator\-grounded engineering task that demands iterative reasoning over coupled performance trade\-offs, yet proprietary process design kits \(PDKs\) make hosted large\-language\-model workflows difficult to deploy in practical design settings\. We present SLIC — Small LM Iterating on Circuits — a reinforcement fine\-tuning framework that trains a 7B\-scale, locally deployable language model for closed\-loop analog circuit optimization\. SLIC pairs structured circuit representations with discretized relative\-update actions, domain\- and difficulty\-gated multi\-objective rewards, and Reward\-Guided Rollout Steering \(RGRS\), which turns per\-step simulator feedback into both policy\-learning and trajectory\-steering signals in this sparse, highly constrained domain\. We further release an open, goal\-conditioned benchmark of 34 amplifier topologies with standardized protocols for in\-distribution validation, held\-out topology evaluation, and cross\-technology\-node transfer\. Trained solely on a 22 nm silicon CMOS PDK, SLIC achieves 58\.7% in\-distribution Pass@1 under a 4\-turn simulator budget, surpassing the 1\.6T DeepSeek\-V4\-Pro Think baseline by 12\.7 percentage points\. Beyond the training distribution, it reaches 51\.5% Pass@1 on held\-out topologies, improving over the same baseline by 10\.6 percentage points, and consistently transfers across five unseen technology nodes \(32–130 nm\) without additional fine\-tuning\. Performance further scales with test\-time simulator interactions, reaching roughly 70% Pass@1 at an 8\-turn budget, demonstrating that SLIC enables the small policy to convert additional simulator calls into improved circuit designs\.

## Your Hypergradient is Skewed: Antithetic Neumann Estimation for Bilevel Optimization

**Authors:** Jason Bohne; Pawel Polak; Gary Kazantsev; David Rosenberg

**ID:** 155284 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6hdVJxlWcS>) | [PDF](<https://openreview.net/pdf?id=6hdVJxlWcS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155284>)

Bilevel optimization is a core tool in practical machine learning workflows, including hyperparameter tuning, data reweighting, robust learning, reinforcement learning, and imbalanced classification\. Hypergradient computation requires the inverse of the inner Hessian, typically estimated via a truncated Neumann series\. While existing analyses focus on bias and variance, we show that the product structure of the Neumann series introduces a third source of error: skewness\. Unlike ordinary gradients, whose asymmetry is suppressed by mini\-batch averaging, the Neumann estimator amplifies skewness across factors, with the third\-moment error growing with truncation depth, inner condition number, and per\-factor noise asymmetry\. This arises in many practical settings such as corrupted labels, outliers, heterogeneous or class\-imbalanced datasets\. To address this, we introduce the Antithetic Neumann Estimator \(ANE\), which pairs each Hessian sample with a mirrored counterpart around a reference Hessian and averages the resulting inverse\-Hessian estimates\. With an exact reference, the antithetic product retains only even\-order noise, eliminating all skewness; with an approximate reference, the residual skewness scales linearly with the reference error\. ANE requires only a modification of the Hessian\-vector step and integrates with existing stochastic or variance\-reduced bilevel methods\. We instantiate ANE\-SGD and ANE\-VR, the latter adding recursive variance reduction\. Across robust regression, corrupted\-label learning, offline reinforcement learning, and imbalanced classification, ANE\-based methods achieve strictly better bias–variance–skewness tradeoffs than stochastic and variance\-reduced baselines, reducing loss by up to 24% and improving predictive metrics by up to 27%\. This establishes skewness correction as a practical and complementary mechanism for improving hypergradient quality\.

## Adapting in the Dark: Efficient and Stable Test\-Time Adaptation for Black\-Box Models

**Authors:** Yunbei Zhang; Shuaicheng Niu; Chengyi Cai; Feng Liu; Jihun Hamm

**ID:** 148897 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uMjCKR7dmV>) | [PDF](<https://openreview.net/pdf?id=uMjCKR7dmV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148897>)

Test\-Time Adaptation \(TTA\) for black\-box models accessible only via APIs remains a largely unexplored challenge\. Existing approaches such as post\-hoc output refinement offer limited adaptive capacity, while Zeroth\-Order Optimization \(ZOO\) enables input\-space adaptation but faces high query costs and optimization challenges in the unsupervised TTA setting\. We introduce BETA \(Black\-box Efficient Test\-time Adaptation\), a framework that addresses these limitations by employing a lightweight, local white\-box steering model to create a tractable gradient pathway\. Through a prediction harmonization technique combined with consistency regularization and prompt learning\-oriented filtering, BETA enables stable adaptation with no additional API calls and negligible latency beyond standard inference\. BETA achieves a \+7\.1% accuracy gain on ViT\-B/16 \(ImageNet\-C\) and \+3\.4% on CLIP \(ImageNet\-S/R\), surpassing strong white\-box and gray\-box methods including TENT and TPT\. On a commercial API, BETA achieves comparable performance to ZOO at 250x lower cost while maintaining real\-time inference speed, establishing it as a practical and efficient solution for real\-world black\-box TTA\.

## Robust Policy Optimization to Prevent Catastrophic Forgetting

**Authors:** Mahdi Sabbaghi; George J\. Pappas; Adel Javanmard; Hamed Hassani

**ID:** 150750 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fg8I6pwObp>) | [PDF](<https://openreview.net/pdf?id=fg8I6pwObp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150750>)

LLMs are commonly trained through multi\-stage post\-training: first via RLHF, then fine\-tuned for other downstream objectives\. Yet even small downstream updates can compromise earlier learned behaviors \(e\.g\., safety\), exposing a brittleness known as catastrophic forgetting\. This suggests standard RLHF objectives do not guarantee robustness to future adaptation\. To address it, most prior work designs downstream\-time methods to preserve previously learned behaviors\. We argue that preventing this requires pre\-finetuning robustness: the base policy should avoid brittle high\-reward solutions whose reward drops sharply under fine\-tuning\.  We propose Fine\-tuning Robust Policy Optimization \(FRPO\), a robust RLHF framework that optimizes reward not only at the current policy, but across a KL\-bounded neighborhood of policies reachable by downstream adaptation\. The key idea is to ensure reward stability under policy shifts via a max\-min formulation\. By modifying GRPO, we develop an algorithm with no extra computation, and empirically show it substantially reduces safety degradation across multiple base models and downstream fine\-tuning regimes \(SFT and RL\) while preserving downstream task performance\. We further study a math\-focused RL setting, demonstrating that FRPO preserves accuracy under subsequent fine\-tuning\.

## Riemannian Lyapunov Framework: Optimization as Closed\-Loop Control on Riemannian Manifolds

**Authors:** Yixuan Wang; Omkar Sudhir Patil; Warren Dixon

**ID:** 155509 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=548NwQAdhQ>) | [PDF](<https://openreview.net/pdf?id=548NwQAdhQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155509>)

We introduce a unified framework that reinterprets first order optimization on a smooth parameter space as a closed loop controlled dynamical system on a Riemannian manifold\. Within this framework, optimizers are specified by a quadruple $\(M, g, \\Phi, \\eta\)$ consisting of a Riemannian metric, an internal state transition map, a direction field generator, and a lifting parameter\. Classical and modern methods including SGD, Adam, AdamW, Lion and Shampoo are recovered as specific instantiations of this quadruple\. The central structural object of the framework is a time indexed family of target submanifolds in the extended state space of parameters, velocities, and internal memory, which we call the Normally Attracting Invariant Manifold \(NAIM\) family\. These submanifolds organize training dynamics into two timescales: a fast contraction of the velocity state onto the current target submanifold, followed by a slow descent along it\. Using Riemannian backstepping, we construct a strict Lyapunov function on the extended state space and prove Uniform Ultimate Boundedness \(UUB\) of the optimization trajectory under a descent alignment assumption and bounded stochastic disturbances\. Under the additional Polyak\-Lojasiewicz \(PL\) condition, the Lyapunov function converges linearly to a bounded neighborhood of the optimum, defined as the drift of the target direction field between consecutive iterates after parallel transport\. To validate the framework's generativity, we derive three concrete instantiations of the quadruple, each exercising a distinct design axis, and show on geometric diagnostics, image classification benchmarks, and language modeling that their empirical behavior matches the theoretical predictions\. The framework casts optimizer design as controller synthesis, complementing heuristic perspectives by providing a constructive template with provable guarantees\.

## Guaranteed Noisy CP Tensor Recovery via Riemannian Optimization on the Segre Manifold

**Authors:** Ke Xu; Yuefeng Han

**ID:** 150883 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ehFJvIafhp>) | [PDF](<https://openreview.net/pdf?id=ehFJvIafhp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150883>)

Recovering a low\-CP\-rank tensor from noisy linear measurements is a central challenge in high\-dimensional data analysis, with applications spanning tensor PCA, scalar\-on\-tensor regression, tensor\-on\-tensor regression, and beyond\. We exploit the intrinsic geometry of rank\-one tensors by casting the recovery task as an optimization problem over the Segre manifold, the smooth Riemannian manifold of rank\-one tensors\. This geometric viewpoint yields two powerful algorithms: Riemannian Gradient Descent \(RGD\) and Riemannian Gauss\-Newton \(RGN\), each of which preserves feasibility at every iteration\. Under mild noise assumptions, we prove that RGD converges at a local linear rate, while RGN exhibits an initial local quadratic convergence phase that transitions to a linear rate as the iterates approach the statistical noise floor\. Extensive synthetic experiments validate these convergence guarantees and demonstrate the practical effectiveness of our methods\.

## Online Learning on Hidden\-Convex Losses via Algorithmic Equivalence: Optimal Regret, Geometric Barrier, and Bandit Feedback

**Authors:** Anas Barakat; Andreas Kontogiannis; Vasilis Pollatos; Ioannis Panageas; Antonios Varvitsiotis

**ID:** 149131 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sdtnLayEs7>) | [PDF](<https://openreview.net/pdf?id=sdtnLayEs7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149131>)

We study adversarial online learning with hidden\-convex losses, i\.e\., nonconvex losses that become convex after a nonlinear reparameterization\. Ghai, Lu, and Hazan \(NeurIPS 2022\) proved that, under geometric and smoothness assumptions, online gradient descent \(OGD\) on such nonconvex losses approximately simulates online mirror descent \(OMD\) on the underlying convex losses with a suitable regularizer, yielding $\\mathcal\{O\}\(T^\{2/3\}\)$ regret\. They left open whether the optimal $\\Theta\(\\sqrt\{T\}\)$ regret from online convex optimization can be recovered in this hidden\-convex setting\. We answer this question affirmatively\. More specifically, via a sharper discrete\-time algorithmic equivalence argument, we prove that OGD achieves $\\mathcal\{O\}\(\\sqrt\{T\}\)$ regret under the same assumptions, matching the optimal worst\-case rate for adversarial online convex optimization\. We also address another open question of Ghai, Lu, and Hazan  by clarifying the geometry required for this algorithmic equivalence\. We replace the diagonal\-Jacobian sufficient condition with a necessary\-and\-sufficient Hessian compatibility condition, thereby expanding the class of admissible reparameterizations\. We complement our tight regret bound with a lower bound showing that the Hessian compatibility assumption is essential for OGD; when it fails, we construct a smooth reparameterization and an adversarial sequence of hidden\-convex losses for which OGD suffers $\\Omega\(T\)$ regret\. Finally, we extend our analysis to one\-point bandit feedback and prove a $\\mathcal\{O\}\(T^\{3/4\}\)$ expected regret bound for bandit OGD with spherical smoothing, matching its classical rate on convex losses\.

## PORT: Preference Optimization via Robust Token\-Level Reweighting

**Authors:** Ding Zhu; Xiukun Wei; Tian Xie; Zhihui Zhu; Xueru Zhang; Mohammad Mahdi Khalili

**ID:** 151657 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z0gcomg5dI>) | [PDF](<https://openreview.net/pdf?id=Z0gcomg5dI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151657>)

Preference optimization has become a central approach for aligning large language models  with human values, but its effectiveness depends heavily on the quality of preference annotations\. In practice, preference data is often noisy due to annotation errors and ambiguity\. Existing robust preference optimization methods primarily operate at the sequence level, implicitly treating entire responses as uniformly correct or incorrect\. However, rejected responses may still contain informative reasoning steps, while preferred responses can include subtle errors\. In this work, we propose a \*\*P\*\*reference \*\*O\*\*ptimization via \*\*R\*\*obust \*\*T\*\*oken\-Level reweighting \(PORT\), a fine\-grained framework for robust alignment under noisy preferences\. PORT performs token\-level reweighting using the empirical cumulative distribution function \(CDF\) of token logits, yielding an efficient forward\-pass\-only proxy to gradient\-norm penalization that selectively suppresses corrupted tokens without additional backward\-pass computation\. We provide theoretical analysis showing that PORT reduces the gradient bias from noisy labels by minimizing an upper bound on the bias term\. Extensive experiments across diverse noise settings demonstrate that PORT consistently improves robustness and outperforms existing sequence\-level baselines\.

## Action\-Level Behavior Policy Optimization for Variance\-Reduced Policy Gradients

**Authors:** Jingkai Huang; Qinxun Bai; Zhengyuan Zhou

**ID:** 153538 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KbaSvFaIVV>) | [PDF](<https://openreview.net/pdf?id=KbaSvFaIVV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153538>)

Policy gradient methods may suffer from high variance, which limits their sample efficiency\. Existing variance\-reduction techniques largely focus on estimator design under a fixed sampling policy\. In contrast, we ask whether the action\-sampling distribution itself, often left at the on\-policy default, can be optimized to reduce policy gradient variance\. We show that this default is in fact not variance\-optimal even when the state distribution is held on\-policy\. To exploit this, we introduce \*Action\-Level Behavior Policy Optimization\* \(BPO\), a framework that treats the behavior policy as an action\-level proposal distribution at each on\-policy state, while keeping the state distribution itself on\-policy\. For a one\-step importance\-sampled policy gradient estimator, we sharply decompose its variance into an irreducible state term and a controllable action term, and show that the latter can be minimized in closed form via BPO\. Under exact critic and sampling oracles, this yields a strictly tighter nonconvex SGD bound than on\-policy sampling whenever the score\-weighted critic is action\-dependent\. We then extend the analysis to approximate critics and parametrized behavior policies updated by a single stochastic step, and verify the resulting sample\-efficiency gains empirically\. These results identify action\-level BPO as a principled mechanism for improving the sample efficiency of policy gradient methods\.

## Penalty\-Based First\-Order Methods for Bilevel Optimization with Minimax and Constrained Lower\-Level Problems

**Authors:** Yiyang Shen; Yutian He; Weiran Wang; Qihang Lin

**ID:** 153613 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K4vQ9YKOxc>) | [PDF](<https://openreview.net/pdf?id=K4vQ9YKOxc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153613>)

We study a class of bilevel optimization problems in which both the upper\- and lower\-level problems are minimax problems\. Existing studies on bilevel optimization primarily focus on settings where the lower\-level problem is an unconstrained or constrained minimization problem, and are therefore not directly applicable to the setting of a minimax lower\-level problem considered in this work\. To address this gap, we develop penalty\-based first\-order methods for bilevel minimax optimization\. In the deterministic setting, we prove that the proposed method finds an $\\epsilon$\-KKT point with $\\tilde\{O\}\(\\epsilon^\{\-4\}\)$ oracle complexity\. We further show that bilevel optimization problems with constrained lower\-level minimization can be reformulated, via Lagrangian duality under Slater's condition, as special cases of our framework and hence can also be solved by our method\. This yields an $\\tilde\{O\}\(\\epsilon^\{\-4\}\)$ complexity bound for finding an $\\epsilon$\-KKT point, improving upon the existing $\\tilde\{O\}\(\\epsilon^\{\-7\}\)$ result\. Finally, we extend our approach to the stochastic setting and establish that the proposed stochastic method finds a nearly $\\epsilon$\-KKT point with $\\tilde\{O\}\(\\epsilon^\{\-9\}\)$ oracle complexity\. To the best of our knowledge, these are the first deterministic and stochastic first\-order complexity results for bilevel minimax optimization\.

## Skill\-Coupled Policy Optimization with Calibrated Group\-Wise Advantage Estimation

**Authors:** Peng Wang; Zhendong Chu; Chengshuai Shi; Matthias Poloczek; Cong Shen; Jing Yang

**ID:** 149473 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pqt0gteKQs>) | [PDF](<https://openreview.net/pdf?id=pqt0gteKQs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149473>)

Reinforcement learning with verifiable rewards \(RLVR\) has become a standard paradigm for post\-training large language models on reasoning tasks\. To avoid the complexity of training explicit critics, algorithms like GRPO estimate advantages directly from sparse on\-policy rollouts\. However, the efficacy of this approach relies heavily on the accuracy of the baseline estimator\. In this work, we argue that standard methods, whether relying on prompt\-local averages or shrinking toward a single global mean, are statistically mis\-specified for reasoning domains\. By enforcing a uniform prior, these methods ignore the latent skill structure of tasks, introducing estimation bias that conflates dissimilar problems\. To address this, we propose Skill\-Coupled Policy Optimization \(SCPO\), a structured baseline estimation framework that refines the shrinkage prior by leveraging task correlations\. Instead of a generic global target, SCPO performs shrinkage toward skill\-coupled group targets, thereby aligning the baseline with the local difficulty landscape\. To further stabilize these targets under limited on\-policy observations, SCPO incorporates a lightweight history tracker\. Experiments across diverse models and tasks show that SCPO consistently improves training stability and performance over both prompt\-level and global shrinkage baselines\.

## SMILE: Bridging Continuous Optimization and Discrete Symbolic Recovery

**Authors:** Mansooreh Montazerin; Antonio Ortega; Ajitesh Srivastava

**ID:** 152682 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RCI7AIVyKg>) | [PDF](<https://openreview.net/pdf?id=RCI7AIVyKg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152682>)

Symbolic regression \(SR\) discovers closed\-form mathematical expressions from data, offering interpretability beyond black\-box models\. Existing methods suffer from slow convergence in combinatorial search spaces and lack mechanisms to exploit compositional structure in the data\. We introduce SMILE \(Sine, Multiplication, Identity, Logarithm, Exponential\), a hybrid framework that unifies continuous gradient\-based optimization with discrete symbolic recovery through three stages: structural analysis of the data to identify the compositional hierarchy of the target expression, continuous optimization to learn parameters of a network that encodes the target expression using interpretable activations, and symbolic recovery through structured pruning, coefficient optimization, and rounding\. This final stage distills the learned network into a compact expression with exact symbolic constants\. We evaluate SMILE on SRBench across ground\-truth and black\-box datasets, with ablation studies validating each component\. SMILE achieves the highest symbolic solution rate at the largest noise levels, demonstrating strong robustness where competing methods degrade substantially\. It consistently lies on the Pareto front of accuracy versus complexity, recovering significantly simpler expressions in a fraction of the time required by the competing methods\.

## Asymmetric Factorization for Low\-Rank PSD Learning: When Is the Relaxation Exact ?

**Authors:** Enliang Hu; Juho Kannala; Guoying Zhao; Quanming Yao; Kun Yue

**ID:** 151704 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YfpdGj5XI6>) | [PDF](<https://openreview.net/pdf?id=YfpdGj5XI6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151704>)

Low\-rank factorization is a standard way to scale optimization in machine learning by replacing large matrix variables with compact factors\. For positive semidefinite \(PSD\) variables, the symmetric Burer\-\-Monteiro factorization \(sBMF\) writes $Z=XX^\\top$ with a single low\-rank factor $X$\. A recent asymmetric alternative \(aBMF\) writes $Z=XY^\\top$ and adds a quadratic penalty $\(\\gamma/2\)\\\|X\-Y\\\|\_F^2$ to encourage symmetry\. This split is attractive because it yields a biconvex objective with alternating convex subproblems, but its practical value depends strongly on how the penalty parameter $\\gamma$ is chosen\. We study a unified regularized aBMF framework and derive an explicit lower bound on $\\gamma$ that guarantees exactness: under mild assumptions, any $\\gamma$ above this threshold makes aBMF and sBMF share the same critical points\. This gives a principled way to use the asymmetric formulation without altering the critical\-point structure of the symmetric problem\. In particular, it answers the open question of whether an exact penalty exists for asymmetric relaxation\.

## Learning Rate Decay Can Exponentially Accelerate SGD for Global Optimization of Nonconvex Functions

**Authors:** Guneykan Ozgul; Dylan Herman; Junhyung Lyle Kim; Shree H Sureshbabu; Shouvanik Chakrabarti

**ID:** 149945 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m0MNdJBi8K>) | [PDF](<https://openreview.net/pdf?id=m0MNdJBi8K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149945>)

Stochastic Gradient Descent \(SGD\) is a workhorse algorithm for continuous optimization\. It is a folklore belief among deep learning practitioners that learning rate decay in SGD substantially improves performance\. However, it has remained unclear whether learning rate decay offers an asymptotic advantage for \\emph\{global\} nonconvex optimization\. We answer this question in the affirmative by demonstrating a natural class of nonconvex functions for which we prove that SGD with learning rate decay requires \\emph\{exponentially fewer\} gradient queries for global optimization than SGD with any fixed learning rate\. To the best of our knowledge, this is the first exponential advantage that has been demonstrated for learning rate decay\. The class of functions we consider includes many popular benchmark nonconvex functions\. Our results provide a robust explanatory theory for the empirically observed benefits of learning rate decay\. Our technical results are built upon a new discretization analysis of SGD with decaying step size, that allows us to establish a clean correspondence with continuous\-time annealing of Langevin diffusions\. We then show that this annealed diffusion performs the non\-logconcave sampling task associated to the optimization problem in polynomial time, via a novel application of weak Poincar\\'\{e\} inequalities\.

## Solving Max\-Cut to Global Optimality via Feasibility\-Preserving Graph Neural Networks

**Authors:** Hao Chen; Chendi Qian; Christopher Morris; Andrea Lodi; Can Li

**ID:** 154770 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B5QAybMEKM>) | [PDF](<https://openreview.net/pdf?id=B5QAybMEKM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154770>)

Exact solution of hard combinatorial optimization problems often relies on strong convex relaxations, but solving these relaxations repeatedly inside a branch\-and\-bound algorithm can be prohibitively expensive\. Hence, we consider this challenge for \\new\{Max\-Cut problem\} \(Max\-Cut\), where branch and bound commonly uses semidefinite programming \(SDP\) relaxations to bound subproblems\. We propose a Max\-Cut\-specific \\new\{graph neural network\} that serves as a principled, lightweight neural proxy for these SDP solvers and can be plugged directly into an exact branch\-and\-bound framework\. The proposed architecture has update steps of complexity $\\mathcal\{O\}\(n^2 \+ ne\)$, and predicts both primal\- and dual\-feasible SDP solutions\. The primal SDP solutions yield feasible Max\-Cut solutions via the Goemans\-\-Williamson algorithm\. In addition, it is trained in a self\-supervised fashion without requiring solved SDP relaxations as labels\. Empirically, we show that our architecture can substantially reduce the cost of bounding in exact Max\-Cut solving by up to $10\.6 \\times$ compared with using the state\-of\-the\-art SDP solver Mosek\. Our work highlights the potential of learned, validity\-preserving surrogates for accelerating exact optimization over structured convex relaxations\.

## Absolute State\-wise Constrained Policy Optimization: High\-Probability State\-wise Constraints Satisfaction

**Authors:** Weiye Zhao; Feihan Li

**ID:** 149439 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q54wRgjMnG>) | [PDF](<https://openreview.net/pdf?id=q54wRgjMnG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149439>)

Enforcing state\-wise safety constraints is critical for the application of reinforcement learning \(RL\) in real\-world problems, such as autonomous driving and robot manipulation\. However, existing safe RL methods often enforce state\-wise constraints only in expectation, while hard state\-wise guarantees typically require strong dynamics assumptions\. The former can still allow rare but severe violations, while the latter is impractical in model\-free stochastic systems\. We instead target high\-probability control of the maximum instantaneous cost along a trajectory\. To accomplish this goal, we propose Absolute State\-wise Constrained Policy Optimization \(ASCPO\), a model\-free policy search algorithm whose exact update provides a distribution\-free high\-probability certificate for state\-wise constraint satisfaction in stochastic systems\. The guarantee holds under finite variance and does not require Gaussian, unimodal, or light\-tailed cost distributions\. We demonstrate the effectiveness of our approach by training neural network policies for extensive robot locomotion tasks, where the agent must adhere to various state\-wise safety constraints\. Our results show that ASCPO most consistently reduces state\-wise safety violations while maintaining competitive reward across challenging continuous control tasks\.

## TGPO: Temporal Grounded Policy Optimization for Signal Temporal Logic Tasks

**Authors:** Yue Meng; Fei Chen; Chuchu Fan

**ID:** 148848 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uhy1JdsQsE>) | [PDF](<https://openreview.net/pdf?id=uhy1JdsQsE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148848>)

Learning control policies for complex, long\-horizon tasks is a central challenge in autonomous systems\. Signal Temporal Logic \(STL\) offers an expressive language for specifying such tasks, but its non\-Markovian nature and inherent sparse reward make it hard for standard Reinforcement Learning \(RL\) to solve\. Prior RL approaches focus only on limited STL fragments or use robustness scores as sparse rewards\. Our new method TGPO \(Temporal Grounded Policy Optimization\) decomposes STL into timed subgoals and invariant constraints and tackles the problem in a hierarchical fashion\. Its high\-level module proposes time allocations for subgoals, and the low\-level time\-conditioned policy learns to achieve the sequenced subgoals using a dense, stage\-wise reward\. In inference, we use the critic to efficiently sample time allocations and select the most promising assignment for the policy to rollout\. We evaluate in five environments, from low\-dimensional navigation to manipulation, drone, and quadrupedal locomotion, and TGPO significantly outperforms baselines \(especially for high\-dimensional and long\-horizon cases\), with 31\.6% higher success rate compared to the best method\.

## Stochastic Dynamic Barrier Perturbed Gradient Methods for Nonconvex Simple Bilevel Optimization

**Authors:** Mohammad Mahdi Ahmadi; Jincheng Cao; Aryan Mokhtari; Erfan Yazdandoost Hamedani

**ID:** 150123 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kVtxwFFyWj>) | [PDF](<https://openreview.net/pdf?id=kVtxwFFyWj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150123>)

We study stochastic simple bilevel optimization with smooth, possibly nonconvex upper\- and lower\-level objectives accessed only through stochastic gradient oracles\. A key challenge is that the dual multiplier induced by the lower\-level constraint may become unbounded near lower\-level stationary points, invalidating bounded\-dual analyses and destabilizing stochastic gradient estimates\. To address this, we propose \\emph\{Stochastic Dynamic Barrier Perturbed Gradient\} \(SDBPG\), a single\-loop method that adaptively perturbs the dual formulation to regularize this degeneracy\. The perturbation stabilizes the multiplier and yields controlled bias and variance even near the lower\-level stationarity region\. Under a mild rare\-visit assumption, SDBPG finds an $\(\\epsilon\_f,\\epsilon\_g\)$\-stationary point in $\\mathcal\{O\}\(\\max\\\{\\epsilon\_f^\{\-2\},\\epsilon\_g^\{\-2\}\\\}\)$ iterations, with sample gradient complexities $\\mathcal\{O\}\(\\epsilon^\{\-4\}\)$ and $\\mathcal\{O\}\(\\epsilon^\{\-6\}\)$ for the upper\- and lower\-level objectives where $\\epsilon=\\max\(\\epsilon\_f,\\epsilon\_g\)$\. We further develop PR\-SDBPG, a penalty\-regularized variant that eliminates the rare\-visit assumption, and VR\-PR\-SDBPG, which improves the resulting sample complexities entirely through variance reduction\. To our knowledge, these are the first explicit $\(\\epsilon\_f,\\epsilon\_g\)$\-stationarity guarantees for stochastic nonconvex\-nonconvex simple bilevel optimization\.

## The Price of Locality: Why Forward\-Forward Underperforms Backpropagation?

**Authors:** Zhaoxian Wu; Haichuan Liu; Tianyi Chen

**ID:** 154189 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FYRM9ZMFjU>) | [PDF](<https://openreview.net/pdf?id=FYRM9ZMFjU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154189>)

The Forward\-Forward Algorithm \(FFA\) replaces backpropagation \(BP\) with layer\-wise local contrastive objectives, eliminating the backward pass, yet suffers a persistent performance gap with BP that worsens with depth\.  This paper diagnoses two distinct deficits: an irreducible optimization floor arising from concurrent local updates, whose magnitude is amplified when kernel contraction degrades the optimization Gram; and a geometric collapse of layer representations driven by kernel contraction itself\. On the optimization side, we prove that the FFA loss satisfies the Polyak\-\-\{\\L\}ojasiewicz inequality at each layer, but concurrent layer updates create an irreducible error floor that grows with depth and is amplified when the Gram degrades\. On the representational side, the pairwise similarity kernel of layer representations contracts exponentially toward rank one as depth increases, collapsing the diversity of per\-layer error signals\. This collapse bounds FFA's \\emph\{effective learning capacity\}\-\-\-the total diversity of gradient information across layers\-\-\-to grow only linearly with depth regardless of width, whereas BP's chain\-rule signal preserves per\-layer diversity, yielding a capacity that scales with both depth and width\.

## Masked Sobolev Training for Feasibility\-Reliable Optimization Proxies

**Authors:** Andrew ROSEMBERG; Joaquim Dias Garcia; Russell Bent; Pascal Van Hentenryck

**ID:** 151801 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XuxAvk8BQy>) | [PDF](<https://openreview.net/pdf?id=XuxAvk8BQy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151801>)

Optimization proxies amortize parametric constrained optimization by learning fast approximations of solution maps\. Because these maps are smooth only within active\-set regimes, the parameter space may split into combinatorially many critical regions, making finite\-sample generalization and reliable constraint behavior central challenges\. To address this challenge, this paper develops sparse stochastic masked Sobolev training for optimization proxies, augmenting value supervision with randomly selected solver\-sensitivity targets rather than dense Jacobian matching\. The mask acts as an algorithmic control: it exposes the proxy to local derivative information while avoiding overconstraint from conflicting active constraint set signals\. We provide approximation bounds showing that, under coverage and regularity, joint value\-and\-Jacobian matching improves finite\-sample generalization\. Experiments characterize when and how this benefit appears\. In smooth optimal\-control distillation, where feasibility is guaranteed by construction, and only a few active\-set regimes arise, Sobolev supervision reaches 95\\% of teacher performance about $2\.5\\times$ faster than value\-only training\. In AC optimal power flow, masked Sobolev training keeps optimality gaps below 0\.22\\% across three PGLib networks while reducing the median worst\-case constraint violation by up to $4\\times$\. A mean\-\-variance portfolio study identifies the complementary limitation: when sensitivities are highly local or vanish across active\-set regimes, derivative supervision can be less useful than value\-only training\.

## Mode\-Controlled Policy Optimization: A Geometry\-Aware Recipe for LLM Post\-Training

**Authors:** Zhenyu Sun; Dylan Hadfield\-Menell; Weiguo Feng; Xiaohuan Zhou; Yi Zeng

**ID:** 150744 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fiTUEWZmk0>) | [PDF](<https://openreview.net/pdf?id=fiTUEWZmk0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150744>)

LLM post\-training is usually framed as a choice of optimizer, but KL\-regularized RL also makes a hidden geometric choice: it fits the learned policy to a reward\-tilted target by reverse KL\. This places PPO, GRPO, RLOO, REINFORCE\+\+, and related methods at a fixed mode\-seeking point in a broader design space\. We propose \\textbf\{Mode\-Controlled Policy Optimization \(MCPO\)\}, a geometry\-aware recipe that replaces this inherited point with an $\\alpha$\-divergence dial over mode\-seeking versus mode\-covering behavior; $\\alpha\{=\}0$ recovers the classical reverse\-KL recipe\. MCPO admits an off\-policy objective, a practical grouped importance\-weighted estimator, and a baseline\-centered variant for stable training\. Across mathematical reasoning, agentic transfer, search\-based QA, and safety, no single geometry is uniformly best\. Average\-case math favors stronger concentration, while pass\-based math and Search\-QA favor broader support; agentic transfer moves with metric and scale; safety exposes a base\-dependent frontier in which the same refusal\-only signal can transfer broadly or spill into benign boundary cases depending on the reference model's mode landscape\. MCPO's value is therefore not a new universal objective, but a way to expose and select the post\-training geometry that RL with fixed reverse\-KL geometry silently chooses\.

## Reward Bias Substitution: Single\-Axis Bias Mitigations Redirect Optimization Pressure

**Authors:** Max Lamparth; Daniel Fein; Andreas Haupt; Marcel Hussing; Mykel J Kochenderfer

**ID:** 154792 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Auv9cgHOSa>) | [PDF](<https://openreview.net/pdf?id=Auv9cgHOSa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154792>)

Single\-axis mitigations of reward\-model biases \(e\.g\., reducing reliance of the proxy reward on length, sycophancy, or style\) can rotate optimization pressure onto correlated proxies rather than eliminate it, a failure mode we call reward bias substitution\.    We formalize the underlying measurement\-vs\-optimization gap between the audit distributions where mitigations are validated and the policy distributions where optimization realizes their effects\.    We introduce a taxonomy, instantiated in closed form, classifying single\-axis mitigation outcomes into successful mitigation, bias substitution, overcorrection, silent non\-op, and audit\-distribution sensitivity\.    We prove that single\-axis mitigation methods cannot be validated by audit\-distribution\-only evaluation: successful mitigation, bias substitution, and overcorrection produce structurally identical observables under ranking accuracy and win\-rate scoring, regardless of benchmarks richness\.    Augmenting evaluation with policy\-induced distributions provably closes the gap and we give actionable prescriptions for mitigation methods and benchmarks\.   Across published preference\-learning mitigation work, we identify bias substitution regimes in results not previously connected to a unified failure mode\.    Our experiments also show that a published length\-debiasing operator zeros pooled reward–length correlation but flips sign within\-prompt on three of four SOTA reward models with true reward degrading on two, and that length–sycophancy coupling reverses under human–LLM judge disagreement across eight model families\.

## Finite\-Resolution Decision Sufficiency for Linear Optimization

**Authors:** Mohammed Jamal; Soufiane Fafe

**ID:** 154190 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FWtqToBwOZ>) | [PDF](<https://openreview.net/pdf?id=FWtqToBwOZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154190>)

Exact optimal\-decision recovery can be stronger than required when decisions are evaluated at a finite regret tolerance\. This paper studies finite\-resolution sufficiency under partial linear observations and bounded measurement error\. A design is sufficient when every noisy observation fiber admits a single feasible decision with regret at most a prescribed tolerance for all costs in that fiber\. We prove a complete finite certificate for insufficiency: an indistinguishable hard tuple of costs with no common low\-regret decision\. For linear\-optimization regret, the required tuple size is controlled by projected cost dimension after quotienting directions that are invisible to regret\. For finite cost libraries, this certificate gives exact fixed\-design verification and separation\. Under coordinatewise noise and a finite query library, query design is exactly set cover over hard tuples; this reduction transfers the standard set\-cover greedy guarantee and hardness barrier, and supports an exact delayed\-constraint method under exact verification and exact restricted\-master solves\. Structured cases reduce to polynomial formulations through separability, nested one\-dimensional coverage, and interval incidence\.

## A Doubly Smoothed Decentralized Stochastic Minimax Optimization Algorithm

**Authors:** Xinwen Zhang; Chiu C Tan; Haibin Ling; Hongchang Gao

**ID:** 152790 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QJwveeEv8G>) | [PDF](<https://openreview.net/pdf?id=QJwveeEv8G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152790>)

Decentralized stochastic minimax optimization has recently attracted significant attention due to its applications in machine learning\. However, existing state\-of\-the\-art methods use learning rates of different scales for the primal and dual variables, making them difficult to tune in practice\. To address this problem, this paper proposes a novel doubly smoothed decentralized stochastic minimax algorithm\. Specifically, in terms of algorithm design, we update both the primal and dual variables using smoothed gradients and introduce novel approaches to handle the computation and communication of the auxiliary variables introduced by the smoothing technique\. On the theoretical side, for nonconvex\-PL problems, our convergence analysis reveals that the learning rates for the primal and dual variables are of the same scale\. Moreover, the order of the condition number in our convergence rate is improved to $O\(\\kappa^\{3/2\}\)$\. To the best of our knowledge, this is the first time it has been improved to such a favorable order\.  Finally, extensive experimental results validate the effectiveness of our algorithm\.

## GauS: Differentiable Scheduling Optimization via Gaussian Reparameterization

**Authors:** Yaohui Cai; Vesal Bakhtazad; CUNXI YU; Zhiru Zhang

**ID:** 152745 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QfSSTcTPqe>) | [PDF](<https://openreview.net/pdf?id=QfSSTcTPqe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152745>)

Efficient operator scheduling is a fundamental challenge in software compilation and hardware synthesis\. While recent differentiable approaches have sought to replace traditional ones like exact solvers or heuristics with gradient\-based search, they typically rely on categorical distributions that fail to capture the ordinal nature of time and suffer from a parameter space that scales poorly\. In this paper, we propose a novel differentiable framework, GauS, that models operator scheduling as a stochastic relaxation using Gaussian distributions, which fully utilize modern parallel computing devices like GPUs\. By representing schedules as continuous Gaussian variables, we successfully capture the ordinal nature of time and reduce the optimization space by orders of magnitude\. Our method is highly flexible to represent various objectives and constraints, which provides the first differentiable formulation for the complex pipelined scheduling problem\. We evaluate our method on a range of benchmarks, demonstrating that GauS achieves Pareto\-optimal results\.

## Online Allocation with Differential Privacy

**Authors:** Jianyi Yang; Xingyu Zhou; Mostafa Mushsharat; Shaolei Ren

**ID:** 150540 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hO8NU92Rtb>) | [PDF](<https://openreview.net/pdf?id=hO8NU92Rtb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150540>)

We study private online allocation problems, where allocation decisions must satisfy differential privacy \(DP\) to protect sensitive user information while optimizing performance under constrained resources\. We first formalize differential privacy notions suited to different privacy requirements in online allocation and establish the fundamental performance limits of any algorithm under these definitions\. Based on these insights, we propose PPOA, a privacy\-preserving meta algorithm for online allocation, and establish sufficient conditions under which PPOA preserves Joint DP \(JDP\) or Local DP \(LDP\) while achieving asymptotically near\-optimal performance\. Building on these conditions, PPOA can be instantiated into a variety of concrete algorithms\. In particular, we present the specific designs, which include PPOA\-DMD that preserves JDP and LDP and PPOA\-FTRL that preserves JDP\. We analyze their performance under both adversarial and stochastic settings and characterize the fundamental trade\-offs between DP and allocation performance\. Finally, we demonstrate the superior performance of the proposed algorithms via numerical experiments on AI model routing in battery\-powered edge systems\.

## POME: Post Optimization Model Edit via Muon\-Style Projection

**Authors:** Yong Liu; di fu; Yang Luo; Zirui Zhu; Minhao Cheng; Cho\-Jui Hsieh; Yang You

**ID:** 148262 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zA8hNLdmm6>) | [PDF](<https://openreview.net/pdf?id=zA8hNLdmm6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148262>)

We introduce Post\-Optimization Model Edit \(POME\), a new algorithm that enhances the performance of fine\-tuned large language models using only their pretrained and fine\-tuned checkpoints, without requiring extra data or further optimization\. The core idea is to apply a muon\-style projection to $\\Delta W$, the difference between the fine\-tuned and pretrained weights\. This projection uses truncated singular value decomposition \(SVD\) to equalize the influence of dominant update directions and prune small singular values, which often represent noise\. As a simple post\-processing step, POME is completely decoupled from the training pipeline\. It requires zero modifications and imposes no overhead, making it universally compatible with any optimizer or distributed framework\. POME delivers consistent gains, boosting average performance by \+2\.5\\% on GSM8K and \+1\.0\\% on code generation\. Its broad applicability—from 7B foundation models to 72B RLHF\-instructed models—establishes it as a practical, zero\-cost enhancement for any fine\-tuning pipeline\.

## C\-GRPO: Conformal Group Relative Policy Optimization

**Authors:** Arya Fayyazi; Seyedarmin Azizi; Mehdi Kamal; Massoud Pedram

**ID:** 152332 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TrdqzzvFCs>) | [PDF](<https://openreview.net/pdf?id=TrdqzzvFCs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152332>)

Reasoning\-oriented language model training increasingly relies on multiple on\-policy rollouts, but standard Group Relative Policy Optimization \(GRPO\) uses a fixed group size, wasting compute on easy prompts and under\-exploring hard ones\. Existing adaptive\-budget methods alleviate this inefficiency, yet their stopping rules are heuristic and do not provide a finite\-sample calibration guarantee\. We propose CGRPO, which replaces the fixed rollout budget of standard GPRO with calibrated conformal thresholds over task\-specific nonconformity scores, combining Adaptive Prediction Set \(APS\)\-style calibration for closed\-form reasoning, a first\-success score for execution\-based code, automatic miscoverage selection, and periodic re\-calibration\. We prove finite\-sample coverage for the resulting stopping rule and show that, under monotone policy improvement, recalibration induces a non\-increasing expected training budget\. Across six benchmarks spanning mathematics, graduate\-level science, and code generation, CGRPO reduces mean training rollouts by 49\-70\\% relative to fixed\-budget GRPO while retaining strong fixed\-budget accuracy, achieves the strongest pass@1 among evaluated static and dynamic baselines on different datasets, and transfers across model families with up to 82\\% rollout savings\.

## CONSTRAINER: Promptable Graph\-Structured Optimization via Constraint Conditioning

**Authors:** Zeeshan Memon; Mingke Tian; Xinyuan Song; Hongwei Jin; Kibaek Kim; Liang Zhao

**ID:** 154276 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F2JqroViJ0>) | [PDF](<https://openreview.net/pdf?id=F2JqroViJ0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154276>)

Neural methods for graph\-structured optimization have achieved strong performance within individual problem classes, but are typically trained for fixed formulations, limiting reuse across related problem variants\. Recent progress in foundation models has motivated shared neural backbones trained across multiple graph\-structured optimization tasks; however, existing approaches primarily share instance\-level representations while treating feasibility constraints implicitly\. A key source of shared structure across constrained optimization problems is the constraint set itself, which often exhibits substantial overlap across tasks\. We propose CONSTRAINER, a constraint\-conditioned framework for graph\-structured optimization that treats constraints as structured inputs\. Constraint specifications are parsed into operator graphs and encoded using a graph neural network to produce invariant constraint embeddings, which condition a shared backbone model for solution prediction\. We evaluate our approach on power grid optimization and mixed\-integer linear programming problems, where it shows improved solution optimality and enables efficient transfer learning and generalization compared to baseline methods\.

## B$^3$\-PWL: GPU\-Batched Branch\-and\-Bound for Piecewise\-Linear Optimization with SOS2 Constraints

**Authors:** Yilin Guan; Shuqing Luo; Pingzhi Li; Tianlong Chen; Kaidi Xu

**ID:** 150051 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l7awisNMWs>) | [PDF](<https://openreview.net/pdf?id=l7awisNMWs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150051>)

Piecewise\-linear \(PWL\) optimization problems arise in many mixed\-integer programming \(MIP\) optimization applications, including portfolio optimization, workforce scheduling, and resource allocation\. But solving them to global optimality remains computationally expensive because branch\-and\-bound repeatedly solves LP relaxation subproblems\. Existing solvers are largely CPU\-centric, leaving the scalability of modern GPUs underutilized\. Few prior GPU\-accelerated branch\-and\-bound either targets neural network which is not suitable for general PWL optimization, or accelerates only auxiliary subroutines such as strong branching heuristics within CPU\-centric MIP solvers\. To bridge this gap, we propose $\\textbf\{\\texttt\{B$^\{3\}$\-PWL\}\}$, a GPU\-centric batched branch\-and\-bound framework for piecewise\-linear optimization with Special Ordered Set of type 2 \(SOS2\) constraints\. Our method solves batches of LP relaxation subproblems concurrently on the GPU using a first\-order primal\-dual solver, enabled by a specialized batched block\-tiled sparse matrix kernel\. To complement bound computation, we further introduce a unified feasibility search module that combines an SOS2 repair primal heuristic with a batched feasibility pump to rapidly obtain feasible incumbents and improve pruning efficiency\. On a benchmark of 43 PWL\-MIP instances, $\\textbf\{\\texttt\{B$^\{3\}$\-PWL\}\}$ achieves a 9\.25$\\times$ geometric\-mean speedup over NVIDIA cuOpt while reaching high\-quality feasible incumbents on every tested instance, demonstrating the potential of first\-order LP methods as the central engine of GPU\-accelerated branch\-and\-bound\.

## PortPy: A Benchmark for AI and Optimization in Cancer Radiotherapy Planning

**Authors:** Gourav Jhanwar; Mojtaba Tefagh; Qijie Huang; Alireza Golkarieh; Linda Hong; Hai Pham; Vicki T Taasti; Seppo Tuomaala; Anthony Magliari; Michael Folkerts; Ying Zhou; Jie Yang; Saad Nadeem; Masoud Zarepisheh

**ID:** 139004 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rZoz5VsSaP>) | [PDF](<https://openreview.net/pdf?id=rZoz5VsSaP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139004>)

External beam radiotherapy is a cornerstone of cancer treatment, used in more than half of all cancer patients\. It delivers high\-energy radiation beams to destroy tumors while minimizing radiation dose to surrounding healthy tissues\. Treatment planning requires optimizing machine parameters, including the shapes and intensities of radiation beams, based on each patient’s unique anatomy\. This gives rise to large\-scale, multi\-criteria, and often combinatorial optimization problems that must be solved separately for each patient under strict clinical time constraints\. Although recent advances in AI/ML show promise for improving many planning and decision\-making tasks, progress in this area has been limited by the lack of standardized, publicly available benchmark datasets and baseline algorithms\. To address this gap, we introduce PortPy \(Planning and Optimization for Radiation Therapy in Python\), an open\-source benchmark dataset derived from real patient data, together with baseline algorithms and a Python\-based framework for data processing, simulation, and standardized evaluation\. Several of the provided baseline methods have been clinically validated and deployed at our institution to support automated radiotherapy planning for cancer patients\. By providing a common benchmark and open research platform, PortPy aims to accelerate progress in radiotherapy treatment planning and promote collaboration across the AI/ML, mathematical optimization, medical physics, and radiation oncology communities\. Toolkit: https://github\.com/PortPy\-Project/PortPy Dataset: https://huggingface\.co/datasets/PortPy\-Project/PortPy\_Dataset

## SpecForge: Agent\-Oriented Code Documentation Optimization via Multi\-Frontier Tree Search

**Authors:** YUTONG CHENG; Haifeng Chen; Peng Gao; Wei Cheng

**ID:** 148372 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yMLqe1DovZ>) | [PDF](<https://openreview.net/pdf?id=yMLqe1DovZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148372>)

As language models become autonomous software agents, documentation shifts from explanatory prose to a natural\-language behavioral specification for code generation\. We study agent\-oriented documentation generation, where the objective is not readability but the correctness of code synthesized from documentation alone, turning the task into a black\-box search over natural\-language specifications evaluated only through the generated code and its execution behavior\. Its defining difficulty is output coupling: program entities are behaviorally entangled, so a revision that sharpens the specification of one entity may simultaneously destabilize its dependents, inducing the familiar whack\-a\-mole failure mode in iterative refinement\. We introduce SpecForge, a multi\-frontier tree search solution that preserves complementary search frontiers through Pareto state management to avoid premature commitment and escape certain frontier\-local optima, performs dependency\-constrained bandit selection for callee\-before\-caller refinement, and uses diversified error\-conditioned expansion to remain robust to noisy test feedback\. On DevEval\+, SpecForge attains the best performance across five backbone models, including a 94\.9% solve rate with Claude\-4\.5\-Sonnet and a 25\.7% average improvement over the leading baseline\. We further demonstrate that the resulting specifications improve downstream performance on both cross\-language code translation and new\-feature implementation\.

## SURF: Steering the Scalarization Weight to Uniformly Traverse the Pareto Front

**Authors:** Liuyuan Jiang; Chentong Huang; Lisha Chen

**ID:** 155157 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7qtIxTWBAO>) | [PDF](<https://openreview.net/pdf?id=7qtIxTWBAO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155157>)

Scalarization is widely used in multi\-objective optimization owing to its simplicity and scalability\. In many applications, the goal is to generate solutions that represent diverse user preferences, ideally with uniform coverage of the Pareto front \(PF\)\. However, uniformly sampling scalarization weights usually induces non\-uniform coverage of the PF\. We explain this mismatch through a geometric analysis of the scalarization path\. As the scalarization weight varies, the corresponding solutions trace the PF with a generally non\-uniform traversal speed\. This speed induces an arc\-length cumulative distribution function \(CDF\); inverting this map yields a principled rule for selecting weights that produce uniform PF coverage\. Building on this insight, we propose SURF \( S ampling U niformly along the Pa r eto F ront\)\. For structured problems, including bi\-objective bandits, we derive closed\-form expressions for this CDF map and the resulting PF\-aware weight sampling rule\. For general problems, SURF alternates between CDF reconstruction and weight sampling\. Theoretically, we show that under provable conditions, SURF converges linearly to an unavoidable finite\-sampling floor\. Empirically, experiments on bandits and MO\-Gymnasium benchmarks demonstrate that SURF efficiently achieves more uniform PF coverage than baselines\.

## Positive\-Unlabeled Preference Optimization For Chest X\-ray Report Generation

**Authors:** Yuta Kobayashi; Pradyun Ramesh; Muhammad Ahmed Chaudhry; Vincent Jeanselme; Judy Wawira; Sanmi Koyejo; Kathleen M Capaccione; Shalmali Joshi

**ID:** 154826 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Aecnz8LJjt>) | [PDF](<https://openreview.net/pdf?id=Aecnz8LJjt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154826>)

Vision\-Language Models \(VLMs\) for radiology report generation are typically trained on retrospective clinical reports, which suffer from omission noise: clinically present findings are left unreported due to the omission of subtle findings\. For example, prior studies show that cardiomegaly may be omitted from ICU chest X\-ray reports when the imaging request is focused on monitoring support device placement\. As a result, models trained with standard approaches inherit these omissions, learning to under\-report findings themselves\. We propose PU\-DPO, a preference optimization framework that constructs contrastive pairs via editing model responses, producing variants that explicitly mention or omit a specific finding\. To prevent omission noise from corrupting the preference signal, we reformulate the objective under a positive\-unlabeled \(PU\) learning framework, treating absent mentions as unlabeled rather than truly negative\. Across semi\-synthetic experiments and preliminary analyses on real\-world chest radiograph benchmarks where adjudicated labels are available, PU\-DPO yields consistent gains in detection rates across multiple pathologies without compromising specificity or overall report quality, and is more robust to omission noise than prior approaches\.

## A Refined Sample\-Complexity Analysis of Robust Policy Optimization under Decaying Actor Stepsizes

**Authors:** Swetha Ganesh; Vaneet Aggarwal

**ID:** 150078 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ktgqkymXsp>) | [PDF](<https://openreview.net/pdf?id=ktgqkymXsp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150078>)

Robust policy\-gradient methods provide a principled framework for learning under model uncertainty, but their sample efficiency is often limited by the cost of robust policy evaluation\. Unlike standard Bellman updates, robust Bellman operators are nonlinear, so sample\-based critic estimates can introduce systematic error that is difficult to control\. Existing finite\-sample guarantees therefore often require solving the robust critic to high accuracy before each actor update\. However, practical robust actor\-critic methods typically use small or decaying actor stepsizes rather than aggressive increasing updates, making repeated high\-accuracy critic solves particularly costly\. Conservative actor updates are especially natural in robust constrained MDPs, where the optimization objective may switch between reward improvement and constraint correction during learning\. We show that this high\-accuracy critic requirement is overly conservative for KL\-robust policy optimization\. Rather than controlling the full first\-order critic error, such as $\\mathbb E \\lVert\\widehat V\_t \- V^\{\\pi\_t\}\\rVert$, the actor analysis only requires control of the conditional critic bias, $\\lVert\\mathbb E\[\\widehat V\_t \\mid \\mathcal F\_t\] \- V^\{\\pi\_t\}\\rVert$\. We prove that, in the relevant local regime, this bias scales quadratically with the critic estimation error\. Consequently, an $O\(\\varepsilon\)$ actor error only requires the critic mean\-square error to be $O\(\\varepsilon\)$, rather than requiring the root\-mean\-square error to be $O\(\\varepsilon\)$\. Combining this bias\-based analysis with robust natural policy\-gradient updates, we establish an $\\widetilde O\(\\varepsilon^\{\-3\}\)$ sample\-complexity guarantee for model\-free discounted robust MDPs with small or decaying actor stepsizes\. We further show that the same analysis extends to primal surrogate methods for robust constrained MDPs under KL uncertainty, improving the state of the art for this setting\.

## Amortized Vine Copulas for High\-Dimensional Density and Information Estimation

**Authors:** Houman Safaai

**ID:** 150646 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gVrwhk9HGC>) | [PDF](<https://openreview.net/pdf?id=gVrwhk9HGC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150646>)

Modeling high\-dimensional dependencies while keeping likelihoods tractable remains challenging\. Classical vine\-copula pipelines are interpretable but can be expensive, while many neural estimators are flexible but less structured\. In this work, we propose Vine Denoising Copula \(VDC\), an amortized vine\-copula pipeline for continuous\-data, simplified\-vine dependence modeling\. VDC trains a single bivariate denoising model and reuses it across all vine edges\. For each edge, given pseudo\-observations, the model predicts a piecewise\-constant density grid\. We then apply an IPFP/Sinkhorn projection that normalizes mass and drives the marginals to uniformity\. This preserves the tractable vine\-likelihood structure and the usual copula interpretation while replacing repeated per\-edge optimization with GPU inference\. Across synthetic and real\-data benchmarks, VDC delivers strong bivariate density accuracy, competitive MI/TC estimation, and faster high\-dimensional vine fitting\. These gains make explicit information estimation and dependence decomposition feasible when repeated vine fitting would otherwise be costly, while conditional downstream tasks remain a limitation\.

