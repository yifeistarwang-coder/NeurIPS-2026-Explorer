# Optimization / Neural Network Optimization

优化 / 神经网络优化

92 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Zeroth\-Order Sharpness\-Aware Learning with Exponential Tilting

**Authors:** Xuchen Gong; Tian Li

**ID:** 155109 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8LXSBQlinu>) | [PDF](<https://openreview.net/pdf?id=8LXSBQlinu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155109>)

_Abstract unavailable from the accessible public sources._

## Gibbs Gradient Descent: A Langevin Approach to Optimization

**Authors:** Oussama Zekri; Anna Korba; Nicolas Boulle

**ID:** 153445 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LFrMGs6Z6P>) | [PDF](<https://openreview.net/pdf?id=LFrMGs6Z6P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153445>)

_Abstract unavailable from the accessible public sources._

## Implicit Bias of Mirror Flow in Homogeneous Neural Networks: Sparse and Dense Feature Learning

**Authors:** Tom Jacobs; Guido Montufar

**ID:** 149406 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qIshuUKij9>) | [PDF](<https://openreview.net/pdf?id=qIshuUKij9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149406>)

We study the max\-margin solutions reached by mirror flow in deep neural networks with homogeneous activation functions\.      Extend classical results on gradient flow, we derive a novel balance equation for mirror flow from convex duality, enabling a characterization of the horizon function governing the induced margin\. We further establish max\-margin characterizations together with convergence rates and norm growth estimates\. Finally, we support our theory through experiments on synthetic datasets and standard vision tasks\. Concretely, we show that: \(1\) distinct non\-homogeneous mirror maps can induce the same max\-margin solution; \(2\) convergence can be extremely slow, including exponentially slow regimes; and \(3\) although all considered mirror maps exhibit feature learning, they can produce markedly different representations, ranging from sparse to dense neuron activations\. Together, these results provide a unified perspective on sparse and dense feature learning in homogeneous neural networks, highlighting how mirror maps shape both optimization dynamics and the geometry of the learned classifiers\.

## A Theoretical Analysis of Backdoor Learning as Simplicity\-Biased Optimization Dynamics

**Authors:** Hong Cheng; Qiang Zhou; Sinno Pan

**ID:** 151187 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cK7pT6o85e>) | [PDF](<https://openreview.net/pdf?id=cK7pT6o85e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151187>)

Backdoor attacks implant a trigger\-target association into a model, causing malicious behavior at test time while largely preserving clean performance\. Despite extensive empirical study, a unified explanation for why standard training dynamics learn backdoors so effectively remains largely missing\. We argue that backdoor learning can be understood as a consequence of simplicity\-biased optimization dynamics: trigger features are dynamically simpler than semantic features under stochastic gradient descent \(SGD\) because they induce more coherent gradient alignment, more stable gating behavior, and stronger early\-stage amplification\. To formalize this perspective, we introduce a directional data model that separates semantic and trigger features and study a one\-hidden\-layer ReLU network trained by SGD\. Our analysis identifies a frozen\-gate signal that governs group\-wise early\-stage loss decrease up to controlled gate\-drift and gate\-flip errors, yielding a quantitative explanation for faster poisoned\-sample fitting and its dependence on the poisoning ratio\. Beyond optimization dynamics, we show that this early\-stage bias can induce trigger\-dominant neurons with selective activation on poisoned inputs, explaining why vanilla clean fine\-tuning can attenuate backdoor behavior without necessarily erasing the underlying trigger\-related representation\. Empirically, we validate the predicted signatures of early\-stage optimization bias, representation\-level trigger dominance, and post\-training residual behavior using ResNet\-18 on standard image classification benchmarks\.

## MultiSTEVE\-1s: A Model Zoo and Interpretability Suite for Instruction\-Following Vision Agents

**Authors:** Karolis Jucys; George Adamopoulos; Özgür Şimşek

**ID:** 149156 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sR3tHXbQxm>) | [PDF](<https://openreview.net/pdf?id=sR3tHXbQxm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149156>)

A striking case of goal misgeneralization was previously observed in OpenAI's Minecraft agent VPT: it killed villagers standing under some leaves, mistaking them for trees\.  Although this agent was released publicly, enabling white\-box interpretability research, few open\-weight model organisms of misalignment exist outside the LLM space\. In this work, we release MultiSTEVE\-1s \-\- a model zoo of 140 fine\-tuned versions of VPT, over 1,000 training checkpoints, and an interpretability suite for analysing them\. Specifically, we use the STEVE\-1 training procedure to add instruction\-following capabilities to VPT with fixed hyperparameters and controlled variations in training randomness\. We demonstrate the utility of MultiSTEVE\-1s by showcasing the research it enables\. First, for some training runs, the only difference is a least\-significant bit flip in a single initialised weight\. Others differ in the full randomness for weight initialisation and data\. Yet, the single bit\-flip setting produces agents that act nearly as differently from each other as the full randomness ones\. Second, we use our interpretability suite to show that several known VPT attention heads retain their roles after STEVE\-1 fine\-tuning, while attention strength to the same behaviourally meaningful frame can vary substantially across agents and checkpoints\. Finally, even though the agents are similarly capable in in\-distribution tasks, the out\-of\-distribution behaviour of villager killing can differ substantially between them \-\- in one setting, an agent kills villagers less than 5\\% of the time, while another agent kills them nearly 50\\% of the time\. Our results show the value of studying multiple similarly trained agents, rather than acting like a behavioural biology lab with only one rat\.

## SMoA: Spectrum Modulation Adapter for Parameter\-Efficient Fine\-Tuning

**Authors:** Yongkang Liu; Xing Li; Mengjie Zhao; Shanru Zhang; Zijing Wang; Qian Li; Shi Feng; Feiliang Ren; Daling Wang; Hinrich Schuetze

**ID:** 153896 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HtLt3XukFH>) | [PDF](<https://openreview.net/pdf?id=HtLt3XukFH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153896>)

As the number of model parameters increases, parameter\-efficient fine\-tuning \(PEFT\) has become the go\-to choice for tailoring pre\-trained large language models\. Low\-rank Adaptation  \(LoRA\) uses a low\-rank update method to simulate full parameter fine\-tuning, which is widely  used to reduce resource requirements\. However, decreasing the rank encounters challenges with  limited representational capacity\. Theory suggests that LoRA fine\-tuning with rank $r$ converges toward the top $r$ singular values of the pre\-trained weight matrix\. As the rank increases, more principal singular directions are preserved, which generally improves the model’s performance\. However, a larger rank also introduces more trainable parameters, leading to higher computational cost\. To overcome this dilemma, we propose SMoA, a \\textbf\{S\}pectrum \\textbf\{Mo\}dulation \\textbf\{A\}dapter that enlarges the accessible family of spectrum\-aware updates under a smaller parameter budget\. SMoA partitions the layer into multiple aligned spectral blocks and applies one in\-block Hadamard\-modulated low\-rank branch to each diagonal block, yielding broader coverage of pretrained spectral directions\. We provide theoretical analysis and empirical results on multiple tasks\. In our experiments, SMoA improves average performance in the current lower\-budget setting over LoRA and competitive LoRA\-style baselines\. Our repository is on https://anonymous\.4open\.science/r/SMoA\-904F/\.

## Sharpness, Stability, and Step\-Size Scaling in Deep Polynomial Networks

**Authors:** Alexandru Crăciun; Debarghya Ghoshdastidar

**ID:** 150505 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hbFl4um2d4>) | [PDF](<https://openreview.net/pdf?id=hbFl4um2d4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150505>)

_Abstract unavailable from the accessible public sources._

## SMoA: Spectrum Modulation Adapter for Parameter\-Efficient Fine\-Tuning

**Authors:** Yongkang Liu; Xing Li; Mengjie Zhao; Shanru Zhang; Zijing Wang; Qian Li; Shi Feng; Feiliang Ren; Daling Wang; Hinrich Schuetze

**ID:** 153896\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153896

[Paper](<https://openreview.net/forum?id=HtLt3XukFH>) | [PDF](<https://openreview.net/pdf?id=HtLt3XukFH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153896>)

As the number of model parameters increases, parameter\-efficient fine\-tuning \(PEFT\) has become the go\-to choice for tailoring pre\-trained large language models\. Low\-rank Adaptation  \(LoRA\) uses a low\-rank update method to simulate full parameter fine\-tuning, which is widely  used to reduce resource requirements\. However, decreasing the rank encounters challenges with  limited representational capacity\. Theory suggests that LoRA fine\-tuning with rank $r$ converges toward the top $r$ singular values of the pre\-trained weight matrix\. As the rank increases, more principal singular directions are preserved, which generally improves the model’s performance\. However, a larger rank also introduces more trainable parameters, leading to higher computational cost\. To overcome this dilemma, we propose SMoA, a \\textbf\{S\}pectrum \\textbf\{Mo\}dulation \\textbf\{A\}dapter that enlarges the accessible family of spectrum\-aware updates under a smaller parameter budget\. SMoA partitions the layer into multiple aligned spectral blocks and applies one in\-block Hadamard\-modulated low\-rank branch to each diagonal block, yielding broader coverage of pretrained spectral directions\. We provide theoretical analysis and empirical results on multiple tasks\. In our experiments, SMoA improves average performance in the current lower\-budget setting over LoRA and competitive LoRA\-style baselines\. Our repository is on https://anonymous\.4open\.science/r/SMoA\-904F/\.

## ChunkFT: Byte\-Streamed Optimization for Memory\-Efficient Full Fine\-Tuning

**Authors:** Yongkang Liu; Zijing Wang; Mengjie Zhao; Ercong Nie; Mingyang Wang; Qian Li; Feiliang Ren; Shi Feng; Daling Wang; Hinrich Schuetze

**ID:** 155153 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7uCEIbODMO>) | [PDF](<https://openreview.net/pdf?id=7uCEIbODMO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155153>)

This work presents \\textsc\{ChunkFT\}, a memory\-efficient fine\-tuning framework that reformulates full\-parameter fine\-tuning around a dynamically activated working set\. \\textsc\{ChunkFT\} enables gradient computation for arbitrary sub\-tensors without modifying the network architecture, providing an algorithmic foundation for optimizing arbitrary sub\-networks while avoiding standard dense gradient computation\. We provide a theoretical convergence analysis of \\textsc\{ChunkFT\} in the deterministic setting\. Empirically, we apply \\textsc\{ChunkFT\} to fine\-tune Llama 3\-8B and Llama 3\-70B using a single RTX 4090\-24GB GPU and 2$\\times$ H800\-80GB GPUs, respectively\. Full\-parameter fine\-tuning of a 7B model with a 1K input length requires only 13\.72GB of GPU memory\. The results demonstrate the effectiveness of \\textsc\{ChunkFT\} in memory usage, running time, and optimization quality\. Moreover, downstream evaluations on language understanding, mathematical reasoning, and MT\-Bench show that \\textsc\{ChunkFT\} consistently outperforms existing memory\-efficient baselines\. Notably, \\textsc\{ChunkFT\} achieves performance comparable to, and in some cases exceeding, full\-parameter fine\-tuning\. Our repository is on https://anonymous\.4open\.science/r/chunk\-B48E\.

## VALOR: Vector\-Aware Low\-Rank Restructuring of Neural Networks for RISC\-V Inference

**Authors:** Zhihao Xu; Xiaoning Du; Bixin Li; Wang Lulu; Li Liao; Zhou Ying

**ID:** 151755 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YInGApIIvH>) | [PDF](<https://openreview.net/pdf?id=YInGApIIvH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151755>)

The RISC\-V Vector Extension \(RVV\) provides SIMD\-style vector execution for accelerating deep learning \(DL\) inference on edge processors\. However, existing low\-rank compression methods mainly select ranks according to accuracy preservation and theoretical floating\-point operation \(FLOP\) reduction, without considering whether the selected ranks are profitable under a target RVV effective vector length\. As a result, a low\-rank factorization that reduces FLOPs may still introduce tail\-handling overhead or even increase the RVV instruction count under specific vector configurations\. To address this problem, we propose VALOR, a low\-rank restructuring framework for efficient DL deployment on RISC\-V processors\. Given a pretrained model and a target RVV configuration, VALOR identifies decomposable layers in the pretrained model, filters rank candidates using an RVV instruction\-profitable condition, and searches for a global restructuring strategy with minimal accuracy loss\. Furthermore, to avoid repeated end\-to\-end evaluation, VALOR uses a Hessian\-aware accuracy predictor that combines layer\-wise factorization error with inter\-layer coupling\. Experiments on Spike and a real RISC\-V vector processor, SpacemiT X60, show that VALOR achieves a better accuracy\-efficiency trade\-off than baseline methods\.

## Rethinking Gradient Approximation in Quantization: A Zeroth\-Order Expectation Perspective

**Authors:** Wenkang Wang; Jia Zhang; Zelin Wei; Dongxu Liu; Jiabao Li; Wanli Shi; Bin Gu

**ID:** 156080 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0ZZ3tyBGyc>) | [PDF](<https://openreview.net/pdf?id=0ZZ3tyBGyc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156080>)

_Abstract unavailable from the accessible public sources._

## Edge of Stochastic Stability: Revisiting the Edge of Stability for SGD

**Authors:** Arseniy Andreyev; Pierfrancesco Beneventano

**ID:** 150004 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lUoXQdMVoe>) | [PDF](<https://openreview.net/pdf?id=lUoXQdMVoe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150004>)

Recent findings by \\citet\{cohen\_gradient\_2021\} demonstrate that when training neural networks with full\-batch gradient descent at step size $\\eta$, the largest eigenvalue $\\lambda\_\{\\max\}$ of the full\-batch Hessian consistently stabilizes      around $2/\\eta$\.     These results have significant implications for convergence and generalization\.      This stabilization, however, does not occur for mini\-batch stochastic gradient descent \(SGD\), so the implications above do not directly transfer\.     We show that SGD trains in a different regime we term Edge of Stochastic Stability \(\\textsc\{EoSS\}\)\.     In this regime, what stabilizes at $2/\\eta$ is \\emph\{Batch Sharpness\}: the expected directional curvature of mini\-batch Hessians along their corresponding mini\-batch gradients\.     As a consequence, $\\lambda\_\{\\max\}$\-\-\-which is generally smaller than \\emph\{Batch Sharpness\}\-\-\-is suppressed, aligning with the long\-standing empirical observation that smaller batches and larger step sizes favor flatter minima\.     We further discuss implications for mathematical modeling of SGD trajectories\.

## Does Weight Decay Enhance Training Stability?

**Authors:** Marius Sæther; Amir Kolić; Pierfrancesco Beneventano; Tomaso Poggio

**ID:** 154047 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GcAFI8YYmu>) | [PDF](<https://openreview.net/pdf?id=GcAFI8YYmu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154047>)

In modern deep learning, weight decay is often credited with "stabilizing" training dynamics, diverging from its classical role as a static regularization penalty\. We investigate a fundamental question: does weight decay stabilize training dynamics, and if so, through which mechanism? Indeed, training stability is understood through different but related notions in the literature\. We consider how weight decay affects the parameter\-space dynamics and loss sharpness by analyzing its effects at the Edge of Stability \(EoS\)\. We show that weight decay robustly slows progressive sharpening\. Furthermore, we uncover a striking architecture\-dependent phase transition\. In CNNs, weight decay dampens the oscillations at the EoS, while in MLPs, increasing weight decay causes a phase transition in which the sharpness stabilizes at a threshold significantly below the theoretical $\\frac\{2\}\{\\eta\}$ boundary\. We develop a mathematical framework that accurately models these phenomena and identify the global alignment of the parameter vector and the sharpness gradient as the mechanistic driver of the phase transition\. Importantly, we show that these phenomena translate into stability in terms of search in function\-space \(NTK\)\.

## Momentum Smooths the Path to Gradient Equilibrium

**Authors:** João Vitor Romano; Margaux Zaffran; Ryan Tibshirani

**ID:** 154672 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BtK0caAJ21>) | [PDF](<https://openreview.net/pdf?id=BtK0caAJ21>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154672>)

Online gradient descent has recently been shown to satisfy gradient equilibrium for a broad class of loss functions\. This means that the average of the gradients of the losses along the sequence of estimates converges to zero, a property that allows for quantile calibration and debiasing of predictions, among other useful statistical properties\. A shortcoming of online gradient descent when optimized for gradient equilibrium is that the sequence of estimates is jagged, leading to volatile paths\. In this work, we propose the generalized momentum method, defined as a weighting of past gradients, as a broader algorithmic framework with guarantees to smoothly postprocess \(e\.g\., calibrate or debias\) predictions from black\-box algorithms, yielding estimates that are more meaningful in practice\. We prove it achieves gradient equilibrium at the same convergence rates and under assumptions similar to those of plain online gradient descent, all the while producing smoother paths that preserve the original signal amplitude\. Of particular importance are the consequences for sequential decision\-making, where more stable paths translate to less variability in statistical applications\. These theoretical insights are corroborated by experiments on real data, showcasing the benefits of adding momentum\.

## Asymmetric Scaling Laws from Sparse Features

**Authors:** John Sous; Michael Winer

**ID:** 149774 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nPOMra0Pqu>) | [PDF](<https://openreview.net/pdf?id=nPOMra0Pqu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149774>)

We introduce a model for neural scaling laws under sparse activations\. In the model, test loss is often dominated by rare coordinates that are never observed in the training input\. This mechanism induces a novel bottleneck absent from dense models\. We derive the asymptotic population loss in both the underparameterized and overparameterized regimes, and show that the loss exhibits a double\-descent peak near the interpolation threshold\-\-\-where the number of parameters is just sufficient to fit the training data\-\-\-resulting in a loss curve governed by two distinct scaling exponents\-\-\-one for the overparameterized regime and one for the underparameterized regime\-\-\-with a gap determined by the degree of sparsity\. Additionally, we derive a compute\-optimal frontier that favors increasing dataset size over model capacity under fixed compute budgets\. We also analyze gradient\-descent dynamics and identify a scaling law for the probability that fixed\-step gradient descent becomes unstable\. We further show that the sparsity\-induced effect persists under nonlinear activations\. Experiments validating the theory can be found at https://anonymous\.4open\.science/r/sparse\-scaling\-neurips2026\-3CDB/SparseScaling1\.ipynb\.

## An Equivariance Principle for Optimizer Design: Symmetry\-Compatible Updates for Embeddings, LM Heads, and MoE Routers

**Authors:** Tim Tsz\-Kit Lau; Weijie Su

**ID:** 154592 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CROYfMoFTK>) | [PDF](<https://openreview.net/pdf?id=CROYfMoFTK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154592>)

_Abstract unavailable from the accessible public sources._

## Random\-Projection Tree Stein Variational Gradient Descent

**Authors:** Shishuo Guo; Xiaoyuan Cheng; Zhuo Sun

**ID:** 150026 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lKDCTsuzQm>) | [PDF](<https://openreview.net/pdf?id=lKDCTsuzQm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150026>)

Vanilla SVGD is known to have a computational cost of $\\mathcal\{O\}\(N^2\)$ per iteration\. In this work, we introduce Random\-Projection Tree Stein Variational Gradient Descent \(RP\-SVGD\) to alleviate this computational challenge\. This is achieved by restricting kernel interactions to spatially proximal particles clustered via a random projection tree, further reducing to a cost of $\\mathcal\{O\}\(N d\(\\log \(N/C\)\+C\)\)$, where $C$ is a hyperparameter representing the maximum leaf node capacity of the spanning tree\. To establish theoretical validity, we introduce a smoothed RP\-Tree kernel for any fixed tree realization and prove that it belongs to the Stein class of the target distribution, thereby ensuring the generation of valid gradient flows\. In addition, by considering the effective kernel as the expectation of random tree partitions, we verify that it preserves regularity along with other necessary conditions, which guarantee convergence under the approximate gradient flow framework\. Extensive experimental results demonstrate that RP\-SVGD tends to have competitive performance and significant speedups across various tasks\.

## On the Parallel Optimality of Exponentiated Gradient Descent

**Authors:** Xin Jennifer Chen; Andrei Graur; Aaron Sidford

**ID:** 152281 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UFum06hNky>) | [PDF](<https://openreview.net/pdf?id=UFum06hNky>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152281>)

_Abstract unavailable from the accessible public sources._

## Towards Understanding Momentum Acceleration in River\-Valley Loss Landscape

**Authors:** Miao Lu; zeyu bian; Kaiyue Wen; Beining Wu; Siyu Chen; Tianhao Wang; Zhiyuan Li

**ID:** 152627 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RhiQnfDg2m>) | [PDF](<https://openreview.net/pdf?id=RhiQnfDg2m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152627>)

_Abstract unavailable from the accessible public sources._

## AdaCubic: An Adaptive Cubic Regularization Optimizer for Deep Learning

**Authors:** Ioannis Tsingalis; Constantine Kotropoulos; Corentin Briat

**ID:** 156754 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pZBQ7J37lk>) | [PDF](<https://openreview.net/pdf?id=pZBQ7J37lk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156754>)

A novel regularization technique, AdaCubic, is proposed that adapts the weight of the cubic term\. The heart of AdaCubic is an auxiliary optimization problem with cubic constraints that dynamically adjusts the weight of the cubic term in Newton’s cubic regularized method\. We use Hutchinson’s method to approximate the Hessian matrix, thereby reducing computational cost\. We demonstrate that AdaCubic inherits the cubically regularized Newton method’s local convergence guarantees\. Our experiments in Computer Vision, Natural Language Processing, and Signal Processing tasks demonstrate that AdaCubic outperforms or competes with several widely used optimizers\. Unlike other adaptive algorithms that require hyperparameter fine\-tuning, AdaCubic is evaluated with a fixed set of hyperparameters, rendering it a highly attractive optimizer in settings where fine\-tuning is infeasible\. This makes AdaCubic an attractive option for researchers and practitioners alike\. To our knowledge, AdaCubic is the first optimizer to leverage cubic regularization in scalable deep learning applications\.

## A Curvature Phase Transition Governs Coherence Penalty Efficiency Against Feature Absorption in SAEs

**Authors:** Hak Hyun Kim; Yash Raj; Peter Chin; Soroush Vosoughi

**ID:** 153574 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KOLzZ1TkRg>) | [PDF](<https://openreview.net/pdf?id=KOLzZ1TkRg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153574>)

Feature absorption is a structural failure mode of sparse autoencoders, where a single dictionary atom captures multiple distinct concepts rather than one, reducing interpretability\. While prior work has shown that absorption configurations are spurious local minima of the sparse dictionary learning loss, little is known about the geometric mechanisms that determine whether a coherence penalty can escape them\. We study the curvature geometry of pairwise coherence penalties at absorption configurations on the unit sphere\. We show that \(1\) every coherence penalty in the power family $\\mathcal\{R\}p = \\sum\{l 0$, yet the efficiency of this force depends critically on the penalty's curvature; \(2\) a phase transition at $p = 2$ governs this efficiency: the Riemannian Hessian in the splitting direction equals $p\(p\-2\) \\cdot k^\{1\-p/2\}$ in closed form, so concave penalties \($p &lt; 2$\) receive curvature assistance and convert absorption into a strict saddle point, while convex penalties \($p &gt; 2$\) face curvature resistance and deepen the local minimum; \(3\) the boundary at $p = 2$ corresponds precisely to a Parseval invariance that renders the quadratic penalty geometrically neutral; and \(4\) under feature correlation $\\mu^\{\}$, convex penalties reverse above $\\mu^\{\}\_\{crit\} = \(p\-2\)/\(p\+k\-2\)$, giving a closed\-form threshold for when resistance can be overcome\. Experiments on Pythia\-160M and Gemma\-2\-2B confirm the predicted $\\lambda$\-efficiency ordering for competitive\-activation SAEs, with absorption reduction verified as feature\-level improvement rather than feature suppression\. More broadly, our results point toward a principled framework for selecting coherence penalties based on the curvature geometry of the loss landscape rather than empirical tuning\.

## From Generic to Dedicated: A Novel Optimizer for Online Continual Learning

**Authors:** Yongyi Wu; Zheng Wang; Sen Lin

**ID:** 149657 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oReUobH6m9>) | [PDF](<https://openreview.net/pdf?id=oReUobH6m9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149657>)

Online Continual Learning \(OCL\) requires models to learn from non\-stationary data streams under a strict single\-pass constraint, making them highly susceptible to catastrophic forgetting\. While existing studies have explored various strategies from data, architecture, and optimization perspectives, the optimizer often directly uses generic approaches such as SGD and AdamW\. In this work, we reveal a new link between optimization dynamics and OCL needs by recasting Polyak\-Ruppert averaging as the engine of "plasticity" and Primal averaging as the anchor of "stability"\. This inspires our novel optimizer, SPIN \(\*\*S\*\*tability\-\*\*P\*\*lasticity \*\*IN\*\*terpolation\), which explicitly decouples plasticity and stability by interpolating between a fast\-moving "plasticity" sequence and an adaptive "stability" sequence\. We theoretically demonstrate that SPIN implicitly employs an inverse Hessian approximation, providing crucial Tikhonov regularization to damp noisy, single\-sample Hessian estimates and mitigate forgetting\. More importantly, SPIN can be seamlessly integrated existing OCL methods by taking resulted gradients as input and replacing standard optimizers\. Extensive experiments show that using SPIN instead of standard optimizers yields consistent and significant performance gains across multiple OCL approaches, including the challenging rehearsal\-free setting and under strict memory constraints\.

## Towards Understanding the Power and Limits of the Muon Optimizer: A River\-Valley Perspective

**Authors:** Tianqi Shen; Jinji Yang; Runze SHI; Jianhao Ma; Jiaye Teng; Ziye Ma

**ID:** 155813 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2hczCV54xy>) | [PDF](<https://openreview.net/pdf?id=2hczCV54xy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155813>)

Recently, Muon has gained substantial attention as an appealing alternative to Adam, with many works highlighting its advantages through spectral normalization and improved conditioning\. Yet this positive theoretical narrative contrasts with its empirical performance in large language model \(LLM\) training, where Muon’s gains over Adam/AdamW are often mixed, schedule\-sensitive, and not uniformly superior\. To address this gap, we develop a trajectory\-level theory characterizing both the strengths and limitations of Muon\. We introduce a mixed\-spiked matrix sensing model whose sensing operator decomposes into signal, spike, and bulk components, capturing a mixture of anisotropic structure and long\-tail information reminiscent of LLM training\. On top of it, we adopted a river\-valley perspective in which we view the landscape as composed of a river direction flowing to the desired solution and hill directions encoding nuisance or task\-irrelevant information\. In the momentum\-free setting, we show that Muon moves faster along the information\-bearing river direction during early optimization, but can converge much more slowly near the river bottom than gradient descent\. We then extend the river\-valley perspective to general nonconvex objectives with momentum by studying points on the spectral river\. There, while Muon converges faster early on, its orthogonalized update removes residual scale information, making it prone to overshooting and oscillation near the target solution\. Together, these results suggest that our characterizations extend beyond spiked matrix sensing and motivate switching to GD\-like refinement optimizers in the final phase, rather than relying only on a fixed learning\-rate schedule for Muon\. We also provide preliminary evidence supporting this two\-stage approach in language model training experiments\.

## SaMA:  Morpho Adaptation via Asymmetric Expansion of Kronecker Product

**Authors:** An Nguyen; Anh Tong

**ID:** 153753 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ixbo0KjNzZ>) | [PDF](<https://openreview.net/pdf?id=Ixbo0KjNzZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153753>)

Low\-rank adaptation \(LoRA\) has attracted significant attention in the parameter\-efficient fine\-tuning \(PEFT\) landscape\. However, its design suffers from two fundamental limitations\. First, its invariance manifold induces flat directions in the loss landscape, creating an optimization bottleneck for adaptive optimizers\. Second, its effective rank scales only linearly with the parameter budget\. In this paper, we propose Scalable Morpho Adaptation \(SaMA\), a PEFT method grounded in a principled generalization of the Kronecker product\. By relaxing the shared\-block constraint in the perfect\-shuffle factorization, SaMA spans from low to full rank and achieves effective rank that scales \\quadratically in parameters\. Furthermore, we show that its invariance manifold collapses to a diagonal group, making it structurally more optimizer\-friendly\. Empirically, SaMA consistently outperforms strong PEFT baselines on commonsense and arithmetic reasoning benchmarks while being more parameter\-efficient\.

## Feature learning  in high\-dimensions under structured covariance: Scaling laws in quadratic networks

**Authors:** Qingyuan Yu; Nuri Mert Vural; Xin Tong; Murat Erdogdu

**ID:** 149864 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mftAwZQsHo>) | [PDF](<https://openreview.net/pdf?id=mftAwZQsHo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149864>)

Recent theoretical work has shown that nonlinear solvable models exhibit scaling laws in the feature\-learning regime\. However, these results largely rely on the assumption of isotropic inputs\. Understanding how these laws extend to anisotropic data remains a central open problem\. In this work, we address this question by analyzing the learning dynamics of two\-layer neural networks with quadratic \(second Hermite polynomial\) activations under anisotropic Gaussian inputs\. We provide a sharp characterization of stochastic gradient descent \(SGD\) across both continuous\-time dynamics and finite\-sample \(online\) discretizations, explicitly quantifying how the covariance spectrum influences the scaling exponent and sample complexity\. Furthermore, we provide evidence that normalization techniques strictly improve sample efficiency in anisotropic settings\. Experiments on two\-layer networks with general activations support our theoretical predictions, suggesting that these insights extend well beyond the quadratic model\.

## Revisiting the Adam–SGD Gap Beyond Single Factors

**Authors:** Chenxiang Zhang; Rustem Islamov; Enea Monzio Compagnoni; Jun Pang; Aurelien Lucchi; Antonio Orvieto

**ID:** 150610 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gs38iA3FeE>) | [PDF](<https://openreview.net/pdf?id=gs38iA3FeE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150610>)

Prior work has identified several factors that can contribute to the performance gap between Adam and SGD, spanning data properties, architecture design, and optimization dynamics\. Yet these explanations are often studied in isolation, leaving their relative importance unclear\.  In this work, we revisit these hypotheses through a controlled empirical study across vision, language, genomics, and graph tasks, spanning modern and classical architectures, and carefully designed training setups\.  Our results suggest that no single factor consistently explains the Adam\-\-SGD gap\. For instance, the Adam advantage can \(1\) persist under a uniform vocabulary distribution yet nearly disappear under a heavy\-tailed one; \(2\) reverse in favor of SGD in softmax\-attention models; and \(3\) become larger when ReLU is replaced by GeLU nonlinearity\. Instead, the gap emerges from interactions between data and architectural properties\. Yet, we observe a consistent pattern across our settings: a \_crossover batch size\_ at which the relative advantage shifts from SGD to Adam as batch size increases\. This perspective helps reconcile several existing hypotheses while offering practical insights across domains\.

## Positional Encoding Is All You Need For Scalable Equivariance Constraint Relaxation

**Authors:** Hagay Michaeli; Haggai Maron; Daniel Soudry

**ID:** 151164 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cYC8wdYHgB>) | [PDF](<https://openreview.net/pdf?id=cYC8wdYHgB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151164>)

Equivariant neural networks incorporate known symmetries of the data, such as permutations, rotations, or translations, directly into their architecture, often improving sample efficiency and generalization\.  However, strict equivariance can make optimization difficult, for example, when the data only approximately satisfy the assumed symmetry, or when the equivariance constraints induce a challenging loss landscape\.  Recent studies have shown that relaxing equivariance during training by introducing non\-equivariant dense linear layers can ease optimization in such cases and improve the performance of the resulting strictly equivariant model \(after removing the relaxation layers at test time\)\. While effective, this approach incurs a significant computational overhead, limiting its applicability in scalable architectures\.  In this work, we propose a more efficient constraint\-relaxation method based on positional encoding \(PE\)\.  Our framework injects a positional encoding with learnable scale that breaks the model’s original symmetry\. This positional signal is gradually annealed to zero, recovering the original equivariant model by the end of training\. Empirically, we demonstrate significant improvements for translational and rotational equivariant models with only marginal compute and memory overhead\.

## Tensorion: A Tensor\-Aware Generalization of the Muon Optimizer

**Authors:** Vladimir Bogachev; Vladimir Aletov; Alexander Molozhavenko; Sergei Kudriashov; Maxim Rakhuba

**ID:** 155464 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5PDUovNqbT>) | [PDF](<https://openreview.net/pdf?id=5PDUovNqbT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155464>)

Common first\-order optimizers, such as Adam, implicitly treat each parameter block as an unstructured vector, which disregards the multilinear weight structure present in many modern machine learning models\. Recent work has shown that exploiting matrix structure can improve optimization dynamics\. A notable example is Muon, which performs steepest descent under the spectral norm constraint\. We take the next step and introduce Tensorion, a tensor\-aware optimizer that extends Muon’s constrained optimization perspective from matrices to higher\-order tensors\. Tensorion is built around a linear minimization oracle \(LMO\) over a tensor norm ball\. The norm is carefully chosen to balance two objectives: tightly bounding the tensor spectral norm, while still keeping the LMO tractable\. This LMO becomes computable because it reduces to operations on adaptively selected unfolding matrices\. Notably, when restricted to order‑2 tensors \(i\.e\., matrices\), Tensorion recovers Muon exactly\. Experiments on tensor\-based computer vision problems suggest that Tensorion can offer improved convergence behavior and more stable gradient updates compared with Adam\-based and existing tensor\-aware baselines in the evaluated settings\.

## A Scalable Measure of Loss Landscape Curvature for Analyzing the Training Dynamics of LLMs

**Authors:** Dayal Singh Kalra; Jean\-Christophe Gagnon\-Audet; Andrey Gromov; Ishita Mediratta; Kelvin Niu; Alexander Miller; Michael Shvartsman

**ID:** 155425 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5l3JqAoTnr>) | [PDF](<https://openreview.net/pdf?id=5l3JqAoTnr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155425>)

Understanding the curvature evolution of the loss landscape is fundamental to analyzing the training dynamics of neural networks\. The most commonly studied measure, Hessian sharpness  \($\\lambda\_\{\\max\}^H$\) \\textemdash the largest eigenvalue of the loss Hessian \\textemdash determines local training stability and interacts with the learning rate throughout training\. Despite its significance in analyzing training dynamics, direct measurement of Hessian sharpness remains prohibitive for Large Language Models \(LLMs\) due to high computational cost\. We analyze \\emph\{critical sharpness\} \($\\lambda\_c$\), a computationally efficient measure requiring fewer than $10$ forward passes given the update direction $\\Delta \\bm\{\\theta\}$\. Critically, this measure captures well\-documented Hessian sharpness phenomena, including progressive sharpening and Edge of Stability\. Using this measure, we provide the first demonstration of these sharpness phenomena at scale, up to $7$B parameters, spanning both pre\-training and mid\-training of OLMo\-2 models\. We further introduce \\emph\{relative critical sharpness\} \($\\lambda\_c^\{1\\to 2\}$\), which quantifies the curvature of one loss landscape while optimizing another, to analyze the transition from pre\-training to fine\-tuning and guide data mixing strategies\. Critical sharpness provides practitioners with a practical tool for diagnosing curvature dynamics and informing data composition choices at scale\. More broadly, our work shows that scalable curvature measures can provide actionable insights for large\-scale training\.

## What Stops SGD on LLM Pre\-Training: The Need for Large Learning Rate and How to Achieve it

**Authors:** Athanasios Glentis; Chung\-Yiu Yau; Dawei Li; Mingyi Hong

**ID:** 148165 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zorIfxhDUM>) | [PDF](<https://openreview.net/pdf?id=zorIfxhDUM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148165>)

It is widely believed that stochastic gradient descent \(SGD\) performs significantly worse than adaptive optimizers such as Adam in pre\-training Large Language Models \(LLMs\)\. Yet the underlying reason for this gap remains unclear\. In this work, we attribute a large part of the discrepancy to SGD's inability to sustain learning rates comparable to Adam's much larger effective learning rates\. Through empirical and theoretical analysis of LLM pre\-training dynamics, we identify that training is characterized by small gradient norms and large weight\-to\-gradient ratios, an effect that becomes more pronounced with larger batch sizes typical in pre\-training, necessitating such large effective learning rates\. However, we find that output\-layer gradient magnitudes become highly uneven across token classes, and that large gradient spikes frequently occur during training\. Together, these effects severely restrict the admissible learning rate of SGD\. Guided by this understanding, we show that simple clipping mechanisms that stabilize SGD at large learning rates enable it to recover most of Adam's performance\. In our large\-scale experiments, the validation loss gap between large\-learning\-rate SGD and Adam shrinks from more than 50% to only about 3\.5% when pre\-training a 1B\-parameter LLaMA model with a 1M\-token batch size\.

## What Stops SGD on LLM Pre\-Training: The Need for Large Learning Rate and How to Achieve it

**Authors:** Athanasios Glentis; Chung\-Yiu Yau; Dawei Li; Mingyi Hong

**ID:** 148165\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148165

[Paper](<https://openreview.net/forum?id=zorIfxhDUM>) | [PDF](<https://openreview.net/pdf?id=zorIfxhDUM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148165>)

It is widely believed that stochastic gradient descent \(SGD\) performs significantly worse than adaptive optimizers such as Adam in pre\-training Large Language Models \(LLMs\)\. Yet the underlying reason for this gap remains unclear\. In this work, we attribute a large part of the discrepancy to SGD's inability to sustain learning rates comparable to Adam's much larger effective learning rates\. Through empirical and theoretical analysis of LLM pre\-training dynamics, we identify that training is characterized by small gradient norms and large weight\-to\-gradient ratios, an effect that becomes more pronounced with larger batch sizes typical in pre\-training, necessitating such large effective learning rates\. However, we find that output\-layer gradient magnitudes become highly uneven across token classes, and that large gradient spikes frequently occur during training\. Together, these effects severely restrict the admissible learning rate of SGD\. Guided by this understanding, we show that simple clipping mechanisms that stabilize SGD at large learning rates enable it to recover most of Adam's performance\. In our large\-scale experiments, the validation loss gap between large\-learning\-rate SGD and Adam shrinks from more than 50% to only about 3\.5% when pre\-training a 1B\-parameter LLaMA model with a 1M\-token batch size\.

## Gradient Descent on Two ReLU Neurons: Global Landscape and Bifurcation Dynamics

**Authors:** Binghua Li; Mengzhe Li; Denny Wu; Tianhao Wang

**ID:** 148429 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xtpMOeOcPq>) | [PDF](<https://openreview.net/pdf?id=xtpMOeOcPq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148429>)

Understanding how gradient descent learns features remains a central challenge in neural network theory\. We study this question in a minimal multi\-index setting that already exhibits rich multi\-phase gradient dynamics: a well\-specified two\-neuron ReLU teacher\-student model under isotropic Gaussian inputs, trained by population gradient flow from small random initialization\. We show that the dynamics are organized by two directions: the “easy” bisector direction, which carries the leading signal, and the “hard” splitting direction, which governs specialization\. To characterize the loss structure and learning behavior, we analyze the population squared\-loss landscape and show that every nonzero critical point is either a global minimum or a saddle\. We then track the gradient\-flow trajectory, showing that student neurons first collapse toward a bisector saddle before escaping and specializing to teacher neurons\. Our results provide both a landscape and dynamics account of the multi\-phase symmetry\-breaking behavior that arises in a simple multi\-index model and under standard algorithmic and architectural choices\.

## Random Matrix Theory of Early\-Stopped Gradient Flow: A Transient BBP Scenario

**Authors:** Florentin Coeurdoux; Grégoire Ferré; jean\-philippe bouchaud

**ID:** 149949 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lycAOHlEXy>) | [PDF](<https://openreview.net/pdf?id=lycAOHlEXy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149949>)

Empirical studies of trained models often report a transient regime in which signal is detectable in a finite gradient descent time window before overfitting dominates\. We provide an analytically tractable random\-matrix model that reproduces this phenomenon for gradient flow in a linear teacher\-\-student setting\. In this framework, learning occurs when an isolated eigenvalue separates from a noisy bulk, before eventually disappearing in the overfitting regime\. The key ingredient is anisotropy in the input covariance, which induces fast and slow directions in the learning dynamics\. In a two\-block covariance model, we derive the full time\-dependent bulk spectrum of the symmetrized weight matrix through a $2\\times 2$ Dyson equation, and we obtain an explicit outlier condition for a rank\-one teacher via a rank\-two determinant formula\. This yields a transient Baik\-\-Ben Arous\-\-P\\'ech\\'e \(BBP\) transition: depending on signal strength and covariance anisotropy, the teacher spike may never emerge, emerge and persist, or emerge only during an intermediate time interval before being reabsorbed into the bulk\. We map the corresponding phase diagrams and validate the theory against finite\-size simulations\. Our results provide a minimal solvable mechanism for early stopping as a transient spectral effect driven by anisotropy and noise\.

## Optimistic Dual Averaging Unifies Modern Optimizers

**Authors:** Thomas Pethick; Wanyun Xie; Roman Machacek; Volkan Cevher

**ID:** 150725 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fsvzA0o8vh>) | [PDF](<https://openreview.net/pdf?id=fsvzA0o8vh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150725>)

We introduce SODA, a generalization of Optimistic Dual Averaging, which provides a common perspective on state\-of\-the\-art optimizers like Muon, Lion, AdEMAMix and NAdam, showing that they can all be viewed as optimistic instances of this framework\. Based on this framing, we propose a practical SODA wrapper for any base optimizer that eliminates weight decay tuning through a theoretically\-grounded $1/k$ decay schedule\. Empirical results across various scales and training horizons show that SODA consistently improves performance without any additional hyperparameter tuning\.

## Optimizer\-Induced Mode Connectivity: From AdamW to Muon

**Authors:** Fangzhao Zhang; Sungyoon Kim; Erica Zhang; Yiqi Jiang; Mert Pilanci

**ID:** 156024 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=15PMEzUEgp>) | [PDF](<https://openreview.net/pdf?id=15PMEzUEgp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156024>)

Mode connectivity has been widely studied, yet the role of the optimizer remains underexplored\. We revisit it through optimizer\-induced implicit regularization, asking how connectivity behaves when restricted to solutions constrained by a given optimizer\. For two\-layer ReLU networks, we show that solutions from a single optimizer \- AdamW, Muon, or others in the Lion\-$\\mathcal\{K\}$ family \- form a connected set at sufficiently large width, a result not implied by prior work\. We then characterize how optimizer\-induced regions interact: at large width two different regions can be disjoint or overlap depending on regularization, while in our small\-width example AdamW and Muon converge to disconnected zero\-loss components separated by a provable loss barrier\. Empirically, in GPT\-2 pretraining, we observe same\-optimizer paths preserve each model’s spectrum while cross\-optimizer paths traverse a smooth transition\. Our results reveal optimizer\-dependent structure beyond classical mode connectivity literature\.

## High\-Fidelity Boltzmann Samplingvia Physical Prior Lifted Continuous GFlowNets

**Authors:** Xizhi Tian; Wenhao Deng; Haojia Hui; Hang Chen; Long Wei

**ID:** 154030 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GmYzBqp2bI>) | [PDF](<https://openreview.net/pdf?id=GmYzBqp2bI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154030>)

Sampling high\-dimensional Boltzmann distributions is fundamental yet challenging\. Classical MCMC methods incur prohibitive computational costs, while modern generative approaches such as diffusion models and Schrödinger bridges struggle to incorporate informative physical priors\. GFlowNets offer a promising alternative, yet existing continuous variants suffer from training instability\. In this paper, we propose Physical Prior Lifted continuous GFlowNets \(PPL\), a framework that encodes physical prior information through a reference space equipped with a reference distribution and a mapping to the original configuration space\. The sampling process is learned via a Reference\-Weighted Trajectory Balance \(RWTB\) loss, yielding stable training dynamics, efficient learning, and rigorous theoretical guarantees\. Empirically, PPL achieves state\-of\-the\-art performance across five benchmarks spanning synthetic, molecular, and protein systems\. On the synthetic LJ\-55, we obtain significantly lower error than the diffusion\-based ASBS with $\{\\sim\}36\\times$ speedup; Notably, on the 267\-dimensional Chignolin protein, PPL attains near\-ground\-truth sampling fidelity\.

## Accelerating Neural Network Training with Augmented Koopman Dynamics

**Authors:** Jingyi Huang; Keyan Miao; Kostas Margellos; Paul Goulart

**ID:** 149064 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t9EhPQoOTT>) | [PDF](<https://openreview.net/pdf?id=t9EhPQoOTT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149064>)

_Abstract unavailable from the accessible public sources._

## InQuant: In\-Place Mixed\-Precision KV Cache Quantization via Saliency\-Aware Neighbor\-Slot Reuse

**Authors:** Zihan Chang; Shuibing He; Bo Zhou; Ping Chen; Siling Yang

**ID:** 155795 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2qVEX3Ujtr>) | [PDF](<https://openreview.net/pdf?id=2qVEX3Ujtr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155795>)

Key\-value \(KV\) caches are essential for efficient Large Language Model \(LLM\) inference, but their memory footprint grows linearly with context length and batch size\. Low\-bit KV\-cache quantization reduces this footprint, yet uniform quantization is vulnerable to high\-magnitude outlier channels, while outlier\-aware mixed\-precision methods often introduce extra buffers, indexing, or channel permutation that weakens their system\-level benefit\.  This paper presents InQuant, an in\-place mixed\-precision KV\-cache quantization method that preserves salient outlier channels without changing the physical 4\-bit packed layout\. The key observation is that selected low\-saliency channels near outliers can tolerate small approximation error; InQuant therefore reuses their storage slots to hold the extra 4\-bit nibble needed by 8\-bit outlier values\. To make this layout practical, InQuant combines sampling\-based channel saliency estimation, saliency\-aware neighbor\-slot reuse, stride\-based handling for adjacent outlier groups, and descriptor\-guided marker recovery during dequantization\. Across six LLMs and long\-context workloads, InQuant reaches a fixed 4\.0$\\times$ physical KV\-cache compression ratio, preserves accuracy close to strong mixed\-precision baselines, and reduces quantization/dequantization latency by 2\.2$\\times$\-\-3\.4$\\times$ compared with representative outlier\-aware methods\.

## Position: Lottery Tickets Do Not Explain Overparameterization\. How About Escape Dimensions?

**Authors:** Flavio Martinelli; Johanni Brea; Wulfram Gerstner

**ID:** 140102 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CaVlKu3gPo>) | [PDF](<https://openreview.net/pdf?id=CaVlKu3gPo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140102>)

Lotteries and tickets are often used as a didactical analogy to explain the success of overparameterized neural networks: “larger networks succeed because they more likely contain a well\-initialized subnetwork that can learn the task in isolation, much like buying more tickets increases the chances of winning a lottery\.” This explanation is intuitive but misleading:  it suggests that subnetworks can be treated in isolation from the rest of the network\.  Following this reasoning leads to interpreting learning in wide networks as a multi\-start optimization process, where gradient descent simply conducts a parallel search over subnetworks\. We argue that this view is flawed since, among other reasons, winning tickets can be made to fail by perturbing the rest of the network\. We put forward a more accurate intuitive picture for the success of overparameterization based on the geometry of loss landscapes:  increasing width expands the set of available dimensions for optimization, making it easier to escape bad local minima\.  Moreover, as width grows, bad minima become increasingly rare relative to good minima\. As the field grows mature, it is important to refine the analogies we use to explain foundational phenomena, such as the apparent redundancy of large networks, reconciling practitioners' intuitions with modern theoretical insights\.

## From Generic to Dedicated: A Novel Optimizer for Online Continual Learning

**Authors:** Yongyi Wu; Zheng Wang; Sen Lin

**ID:** 149657\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149657

[Paper](<https://openreview.net/forum?id=oReUobH6m9>) | [PDF](<https://openreview.net/pdf?id=oReUobH6m9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149657>)

Online Continual Learning \(OCL\) requires models to learn from non\-stationary data streams under a strict single\-pass constraint, making them highly susceptible to catastrophic forgetting\. While existing studies have explored various strategies from data, architecture, and optimization perspectives, the optimizer often directly uses generic approaches such as SGD and AdamW\. In this work, we reveal a new link between optimization dynamics and OCL needs by recasting Polyak\-Ruppert averaging as the engine of "plasticity" and Primal averaging as the anchor of "stability"\. This inspires our novel optimizer, SPIN \(\*\*S\*\*tability\-\*\*P\*\*lasticity \*\*IN\*\*terpolation\), which explicitly decouples plasticity and stability by interpolating between a fast\-moving "plasticity" sequence and an adaptive "stability" sequence\. We theoretically demonstrate that SPIN implicitly employs an inverse Hessian approximation, providing crucial Tikhonov regularization to damp noisy, single\-sample Hessian estimates and mitigate forgetting\. More importantly, SPIN can be seamlessly integrated existing OCL methods by taking resulted gradients as input and replacing standard optimizers\. Extensive experiments show that using SPIN instead of standard optimizers yields consistent and significant performance gains across multiple OCL approaches, including the challenging rehearsal\-free setting and under strict memory constraints\.

## From Generic to Dedicated: A Novel Optimizer for Online Continual Learning

**Authors:** Yongyi Wu; Zheng Wang; Sen Lin

**ID:** 149657\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149657

[Paper](<https://openreview.net/forum?id=oReUobH6m9>) | [PDF](<https://openreview.net/pdf?id=oReUobH6m9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149657>)

Online Continual Learning \(OCL\) requires models to learn from non\-stationary data streams under a strict single\-pass constraint, making them highly susceptible to catastrophic forgetting\. While existing studies have explored various strategies from data, architecture, and optimization perspectives, the optimizer often directly uses generic approaches such as SGD and AdamW\. In this work, we reveal a new link between optimization dynamics and OCL needs by recasting Polyak\-Ruppert averaging as the engine of "plasticity" and Primal averaging as the anchor of "stability"\. This inspires our novel optimizer, SPIN \(\*\*S\*\*tability\-\*\*P\*\*lasticity \*\*IN\*\*terpolation\), which explicitly decouples plasticity and stability by interpolating between a fast\-moving "plasticity" sequence and an adaptive "stability" sequence\. We theoretically demonstrate that SPIN implicitly employs an inverse Hessian approximation, providing crucial Tikhonov regularization to damp noisy, single\-sample Hessian estimates and mitigate forgetting\. More importantly, SPIN can be seamlessly integrated existing OCL methods by taking resulted gradients as input and replacing standard optimizers\. Extensive experiments show that using SPIN instead of standard optimizers yields consistent and significant performance gains across multiple OCL approaches, including the challenging rehearsal\-free setting and under strict memory constraints\.

## Towards Understanding the Power and Limits of the Muon Optimizer: A River\-Valley Perspective

**Authors:** Tianqi Shen; Jinji Yang; Runze SHI; Jianhao Ma; Jiaye Teng; Ziye Ma

**ID:** 155813\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155813

[Paper](<https://openreview.net/forum?id=2hczCV54xy>) | [PDF](<https://openreview.net/pdf?id=2hczCV54xy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155813>)

Recently, Muon has gained substantial attention as an appealing alternative to Adam, with many works highlighting its advantages through spectral normalization and improved conditioning\. Yet this positive theoretical narrative contrasts with its empirical performance in large language model \(LLM\) training, where Muon’s gains over Adam/AdamW are often mixed, schedule\-sensitive, and not uniformly superior\. To address this gap, we develop a trajectory\-level theory characterizing both the strengths and limitations of Muon\. We introduce a mixed\-spiked matrix sensing model whose sensing operator decomposes into signal, spike, and bulk components, capturing a mixture of anisotropic structure and long\-tail information reminiscent of LLM training\. On top of it, we adopted a river\-valley perspective in which we view the landscape as composed of a river direction flowing to the desired solution and hill directions encoding nuisance or task\-irrelevant information\. In the momentum\-free setting, we show that Muon moves faster along the information\-bearing river direction during early optimization, but can converge much more slowly near the river bottom than gradient descent\. We then extend the river\-valley perspective to general nonconvex objectives with momentum by studying points on the spectral river\. There, while Muon converges faster early on, its orthogonalized update removes residual scale information, making it prone to overshooting and oscillation near the target solution\. Together, these results suggest that our characterizations extend beyond spiked matrix sensing and motivate switching to GD\-like refinement optimizers in the final phase, rather than relying only on a fixed learning\-rate schedule for Muon\. We also provide preliminary evidence supporting this two\-stage approach in language model training experiments\.

## ASTRA: ADMM\-Accelerated Topology Reconfiguration for Dynamic Satellite Constellations

**Authors:** João Norberto; Ricardo N\. Ferreira; Claudia Soares

**ID:** 156042 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0qiq9LNYTm>) | [PDF](<https://openreview.net/pdf?id=0qiq9LNYTm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156042>)

Dynamic topology reconfiguration is central to the reliability and efficiency of large satellite constellations, yet many existing approaches rely on idealized assumptions such as full constellation deployment or uniform orbital spacing\. We present Adaptive Satellite Topology via Regret\-Aware learning \(ASTRA\), a theoretically\-grounded framework for dynamic satellite topology reconfiguration that builds on an online learning formulation and makes it computationally practical\. ASTRA combines an ADMM\-based offline solver with efficient online updates for both online gradient descent and online conditional gradient, yielding markedly cheaper constrained updates than generic optimization pipelines\. On the theory side, we show that for a relevant class of entry\-wise nonzero utility matrices, the objective is strongly convex, which yields logarithmic static regret for online gradient descent, and we further instantiate known dynamic\-regret guarantees under inexact ADMM inner loops\. Empirically, ASTRA matches or improves topology quality, presenting a good trade\-off with computational time on synthetic constellations, and it remains effective on real Starlink data under partial deployment and non\-uniform spacing, where idealized structural assumptions break down\. These results position ASTRA as an efficient and theoretically grounded approach to topology reconfiguration in realistic Low Earth Orbit networks\.

## Optimal scaling laws in learning hierarchical multi\-index models

**Authors:** Leonardo Defilippis; Florent Krzakala; Bruno Loureiro; Antoine Maillard

**ID:** 149630 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=odXDV3exT8>) | [PDF](<https://openreview.net/pdf?id=odXDV3exT8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149630>)

In this work, we provide a sharp theory of scaling laws for two\-layer neural networks trained on a class of hierarchical multi\-index targets, in a genuinely representation\-limited regime\. We derive exact information\-theoretic scaling laws for subspace recovery and prediction error, revealing how the hierarchical features of the target are sequentially learned through a cascade of phase transitions\. We further show that these optimal rates are achieved by a simple, target\-agnostic spectral estimator, which can be interpreted as the small learning\-rate limit of gradient descent on the first\-layer weights\. Once an adapted representation is identified, the readout can be learned statistically optimally, using an efficient procedure\. As a consequence, we provide a unified and rigorous explanation of scaling laws, plateau phenomena, and spectral structure in shallow neural networks trained on such hierarchical targets\.

## Disentangling the Good From the Bad: Quantization\-Induced Flips Are Not Random

**Authors:** Aymen Bouguerra; Alexandra Gomez\-Villa; Chokri Mraidha; Fabio Arnez

**ID:** 151104 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cxWrTgqwLx>) | [PDF](<https://openreview.net/pdf?id=cxWrTgqwLx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151104>)

_Abstract unavailable from the accessible public sources._

## Decomposing SGD Dynamics in Neural Networks: Teacher\-Induced Spikes and Variance Inflation

**Authors:** Samet Demir; Zafer Dogan

**ID:** 149560 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pCMDLPWcuw>) | [PDF](<https://openreview.net/pdf?id=pCMDLPWcuw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149560>)

We study two\-layer neural networks trained by stochastic gradient descent \(SGD\) on a multi\-index teacher model, focusing on how first\-layer parameters orthogonal to the teacher subspace affect generalization\. We decompose the first\-layer weights into a signal component aligned with the teacher and an orthogonal complement, and analyze their joint SGD dynamics together with the second layer in the proportional limit\. We show that although SGD updates to the complement are initially isotropic, the training dynamics induce teacher\-dependent spectral spikes in the complement Gram matrix\. This emergent anisotropy provides a concrete mechanism by which representation variance is amplified, and generalization degrades\. To isolate this effect, we introduce Decomposed Dynamics, an analytically tractable surrogate whose asymptotic test\-error dynamics coincide with those of SGD\. Using this surrogate, we characterize regimes in which freezing the orthogonal complement strictly improves generalization relative to training it, despite identical training error\. Finally, we show that the signal component rapidly aligns with the second\-layer weights, revealing strong cross\-layer coupling even in this shallow setting\. Together, our results provide a precise dynamical explanation for when and how feature learning outside the teacher subspace harms generalization\.

## Global convergence of adjoint\-optimized neural PDEs

**Authors:** Konstantin Riedl; Justin Sirignano; Konstantinos Spiliopoulos

**ID:** 156667 | **Topic source:** official | **Abstract source:** missing | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156667>)

_Abstract unavailable from the accessible public sources._

## Convergence Analysis of Newton's Method for Neural Networks in the Overparameterized Limit

**Authors:** Konstantin Riedl; Justin Sirignano; Konstantinos Spiliopoulos

**ID:** 149087 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=szSde6PDAI>) | [PDF](<https://openreview.net/pdf?id=szSde6PDAI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149087>)

_Abstract unavailable from the accessible public sources._

## Global Convergence of Four\-Layer Matrix Factorization under Random Initialization

**Authors:** Minrui Luo; Weihang Xu; Xiang Gao; Maryam Fazel; Simon Du

**ID:** 151546 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZpZNDFkqGD>) | [PDF](<https://openreview.net/pdf?id=ZpZNDFkqGD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151546>)

Gradient descent dynamics on the deep matrix factorization problem is extensively studied as a simplified theoretical model for deep neural networks\. Although the convergence theory for two\-layer matrix factorization is well\-established, no global convergence guarantee for general deep matrix factorization under random initialization has been established to date\.  To address this gap, we provide a polynomial\-time global convergence guarantee for randomly initialized gradient descent on four\-layer matrix factorization, given certain conditions on the target matrix and a standard balanced regularization term\.  Our analysis employs new techniques to show saddle\-avoidance properties of gradient descent dynamics, and extends previous theories to characterize the change in eigenvalues of layer weights\.

## InQuant: In\-Place Mixed\-Precision KV Cache Quantization via Saliency\-Aware Neighbor\-Slot Reuse

**Authors:** Zihan Chang; Shuibing He; Bo Zhou; Ping Chen; Siling Yang

**ID:** 155795\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155795

[Paper](<https://openreview.net/forum?id=2qVEX3Ujtr>) | [PDF](<https://openreview.net/pdf?id=2qVEX3Ujtr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155795>)

Key\-value \(KV\) caches are essential for efficient Large Language Model \(LLM\) inference, but their memory footprint grows linearly with context length and batch size\. Low\-bit KV\-cache quantization reduces this footprint, yet uniform quantization is vulnerable to high\-magnitude outlier channels, while outlier\-aware mixed\-precision methods often introduce extra buffers, indexing, or channel permutation that weakens their system\-level benefit\.  This paper presents InQuant, an in\-place mixed\-precision KV\-cache quantization method that preserves salient outlier channels without changing the physical 4\-bit packed layout\. The key observation is that selected low\-saliency channels near outliers can tolerate small approximation error; InQuant therefore reuses their storage slots to hold the extra 4\-bit nibble needed by 8\-bit outlier values\. To make this layout practical, InQuant combines sampling\-based channel saliency estimation, saliency\-aware neighbor\-slot reuse, stride\-based handling for adjacent outlier groups, and descriptor\-guided marker recovery during dequantization\. Across six LLMs and long\-context workloads, InQuant reaches a fixed 4\.0$\\times$ physical KV\-cache compression ratio, preserves accuracy close to strong mixed\-precision baselines, and reduces quantization/dequantization latency by 2\.2$\\times$\-\-3\.4$\\times$ compared with representative outlier\-aware methods\.

## Gradient Descent on Two ReLU Neurons: Global Landscape and Bifurcation Dynamics

**Authors:** Binghua Li; Mengzhe Li; Denny Wu; Tianhao Wang

**ID:** 148429\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148429

[Paper](<https://openreview.net/forum?id=xtpMOeOcPq>) | [PDF](<https://openreview.net/pdf?id=xtpMOeOcPq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148429>)

Understanding how gradient descent learns features remains a central challenge in neural network theory\. We study this question in a minimal multi\-index setting that already exhibits rich multi\-phase gradient dynamics: a well\-specified two\-neuron ReLU teacher\-student model under isotropic Gaussian inputs, trained by population gradient flow from small random initialization\. We show that the dynamics are organized by two directions: the “easy” bisector direction, which carries the leading signal, and the “hard” splitting direction, which governs specialization\. To characterize the loss structure and learning behavior, we analyze the population squared\-loss landscape and show that every nonzero critical point is either a global minimum or a saddle\. We then track the gradient\-flow trajectory, showing that student neurons first collapse toward a bisector saddle before escaping and specializing to teacher neurons\. Our results provide both a landscape and dynamics account of the multi\-phase symmetry\-breaking behavior that arises in a simple multi\-index model and under standard algorithmic and architectural choices\.

## Random Matrix Theory of Early\-Stopped Gradient Flow: A Transient BBP Scenario

**Authors:** Florentin Coeurdoux; Grégoire Ferré; jean\-philippe bouchaud

**ID:** 149949\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149949

[Paper](<https://openreview.net/forum?id=lycAOHlEXy>) | [PDF](<https://openreview.net/pdf?id=lycAOHlEXy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149949>)

Empirical studies of trained models often report a transient regime in which signal is detectable in a finite gradient descent time window before overfitting dominates\. We provide an analytically tractable random\-matrix model that reproduces this phenomenon for gradient flow in a linear teacher\-\-student setting\. In this framework, learning occurs when an isolated eigenvalue separates from a noisy bulk, before eventually disappearing in the overfitting regime\. The key ingredient is anisotropy in the input covariance, which induces fast and slow directions in the learning dynamics\. In a two\-block covariance model, we derive the full time\-dependent bulk spectrum of the symmetrized weight matrix through a $2\\times 2$ Dyson equation, and we obtain an explicit outlier condition for a rank\-one teacher via a rank\-two determinant formula\. This yields a transient Baik\-\-Ben Arous\-\-P\\'ech\\'e \(BBP\) transition: depending on signal strength and covariance anisotropy, the teacher spike may never emerge, emerge and persist, or emerge only during an intermediate time interval before being reabsorbed into the bulk\. We map the corresponding phase diagrams and validate the theory against finite\-size simulations\. Our results provide a minimal solvable mechanism for early stopping as a transient spectral effect driven by anisotropy and noise\.

## Optimistic Dual Averaging Unifies Modern Optimizers

**Authors:** Thomas Pethick; Wanyun Xie; Roman Machacek; Volkan Cevher

**ID:** 150725\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150725

[Paper](<https://openreview.net/forum?id=fsvzA0o8vh>) | [PDF](<https://openreview.net/pdf?id=fsvzA0o8vh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150725>)

We introduce SODA, a generalization of Optimistic Dual Averaging, which provides a common perspective on state\-of\-the\-art optimizers like Muon, Lion, AdEMAMix and NAdam, showing that they can all be viewed as optimistic instances of this framework\. Based on this framing, we propose a practical SODA wrapper for any base optimizer that eliminates weight decay tuning through a theoretically\-grounded $1/k$ decay schedule\. Empirical results across various scales and training horizons show that SODA consistently improves performance without any additional hyperparameter tuning\.

## CASAM: Consistency\-Anchored Sharpness\-Aware Minimization for Improved Model Generalization

**Authors:** Chengli Tan; Tianyu Wang; Junmin Liu; Yong Xu

**ID:** 152013 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WABAB6cGkw>) | [PDF](<https://openreview.net/pdf?id=WABAB6cGkw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152013>)

_Abstract unavailable from the accessible public sources._

## Feature Learning Dynamics in Infinite\-Depth Neural Networks

**Authors:** Zihan Yao; Ruoyu Wu; Tianxiang Gao

**ID:** 150047 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lBVOJogILX>) | [PDF](<https://openreview.net/pdf?id=lBVOJogILX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150047>)

Deep neural networks \(DNNs\) have achieved remarkable success in practice, yet a mechanistic understanding of how features evolve during training remains incomplete, especially in the large\-depth limit\. For ResNets under depth\-$\\mu$P scaling, previous studies introduce an SDE view of training dynamics by treating the layer index $\\ell$ as a continuous\-time variable $t\_\\ell=\\ell/L$\. A key unresolved issue is that backpropagation reuses each forward weight matrix $W\_\\ell$ through its transpose $W\_\\ell^\\top$, creating correlations between forward features and backward gradients whose behavior and role in training\-time feature learning remain unclear\. We study this reused\-weight forward\-\-backward coupling in one\-layer ResNets under depth\-$\\mu$P scaling\. Using conditional Gaussian representations, we explicitly separate the coupling terms induced by weight reuse from decoupled Gaussian fluctuations\. At initialization, we prove that the coupling is a finite\-width effect and vanishes at rate $O\(n^\{\-1\}\)$, uniformly over depth\. During training, however, SGD induces a nontrivial forward\-\-backward correlation term that survives the infinite\-width limit\. The key depth effect is that, under depth\-$\\mu$P scaling, this surviving term is higher order in depth and its accumulated contribution over layers becomes negligible as $L\\to\\infty$\. This depth\-induced suppression motivates \\textit\{neural feature dynamics\} \(NFD\), a forward\-\-backward SDE system with decoupled backward weights that retains the feature\-gradient covariance structure generated during training\. Under nondegeneracy assumptions, we prove that the finite\-network training dynamics converge to NFD with an $O\(L^\{\-1\}\)$ depth\-discretization error, while the reused\-weight coupling term has a faster $O\(L^\{\-2\}\)$  decay\. These results provide a rigorous infinite\-depth feature\-learning limit for one\-layer ResNets under depth\-$\\mu$P scaling\.

## HALO: Homotopy\-Augmented Layer Optimization for Stable LLM Supervised Post\-training

**Authors:** Mengxiang Zhang; Lingyuan Liu

**ID:** 152138 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VEZb4LjBJS>) | [PDF](<https://openreview.net/pdf?id=VEZb4LjBJS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152138>)

_Abstract unavailable from the accessible public sources._

## RESIST: Resilient Decentralized Learning Using Consensus Gradient Descent

**Authors:** Cheng Fang; Rishabh Dixit; Waheed Bajwa; Mert Gurbuzbalaban

**ID:** 156789 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aNu8S9O6Ug>) | [PDF](<https://openreview.net/pdf?id=aNu8S9O6Ug>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156789>)

_Abstract unavailable from the accessible public sources._

## Transformers Provably Learn Graph Search: Training Dynamics and the Exponential Power of Depth

**Authors:** Xutao Ma; Somayeh Sojoudi

**ID:** 155595 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4QZv5tGC5T>) | [PDF](<https://openreview.net/pdf?id=4QZv5tGC5T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155595>)

_Abstract unavailable from the accessible public sources._

## Drive vs\. Decay: On the Training Dynamics of Joint\-Embedding Predictive Architectures

**Authors:** José Lucas De Melo Costa; Seong Woo Ahn; Fabrice Popineau; Arpad Rimmel; Bich\-Liên DOAN

**ID:** 152058 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VofFK184SY>) | [PDF](<https://openreview.net/pdf?id=VofFK184SY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152058>)

_Abstract unavailable from the accessible public sources._

## Emergent Low\-Rank Training Dynamics in MLPs with Smooth Activations

**Authors:** Alec Xu; Can Yaras; Matthew Asato; Qing Qu; Laura Balzano

**ID:** 151342 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bFu308g2iB>) | [PDF](<https://openreview.net/pdf?id=bFu308g2iB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151342>)

_Abstract unavailable from the accessible public sources._

## InQuant: In\-Place Mixed\-Precision KV Cache Quantization via Saliency\-Aware Neighbor\-Slot Reuse

**Authors:** Zihan Chang; Shuibing He; Bo Zhou; Ping Chen; Siling Yang

**ID:** 155795\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155795

[Paper](<https://openreview.net/forum?id=2qVEX3Ujtr>) | [PDF](<https://openreview.net/pdf?id=2qVEX3Ujtr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155795>)

Key\-value \(KV\) caches are essential for efficient Large Language Model \(LLM\) inference, but their memory footprint grows linearly with context length and batch size\. Low\-bit KV\-cache quantization reduces this footprint, yet uniform quantization is vulnerable to high\-magnitude outlier channels, while outlier\-aware mixed\-precision methods often introduce extra buffers, indexing, or channel permutation that weakens their system\-level benefit\.  This paper presents InQuant, an in\-place mixed\-precision KV\-cache quantization method that preserves salient outlier channels without changing the physical 4\-bit packed layout\. The key observation is that selected low\-saliency channels near outliers can tolerate small approximation error; InQuant therefore reuses their storage slots to hold the extra 4\-bit nibble needed by 8\-bit outlier values\. To make this layout practical, InQuant combines sampling\-based channel saliency estimation, saliency\-aware neighbor\-slot reuse, stride\-based handling for adjacent outlier groups, and descriptor\-guided marker recovery during dequantization\. Across six LLMs and long\-context workloads, InQuant reaches a fixed 4\.0$\\times$ physical KV\-cache compression ratio, preserves accuracy close to strong mixed\-precision baselines, and reduces quantization/dequantization latency by 2\.2$\\times$\-\-3\.4$\\times$ compared with representative outlier\-aware methods\.

## From Generic to Dedicated: A Novel Optimizer for Online Continual Learning

**Authors:** Yongyi Wu; Zheng Wang; Sen Lin

**ID:** 149657\-\-4 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149657

[Paper](<https://openreview.net/forum?id=oReUobH6m9>) | [PDF](<https://openreview.net/pdf?id=oReUobH6m9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149657>)

Online Continual Learning \(OCL\) requires models to learn from non\-stationary data streams under a strict single\-pass constraint, making them highly susceptible to catastrophic forgetting\. While existing studies have explored various strategies from data, architecture, and optimization perspectives, the optimizer often directly uses generic approaches such as SGD and AdamW\. In this work, we reveal a new link between optimization dynamics and OCL needs by recasting Polyak\-Ruppert averaging as the engine of "plasticity" and Primal averaging as the anchor of "stability"\. This inspires our novel optimizer, SPIN \(\*\*S\*\*tability\-\*\*P\*\*lasticity \*\*IN\*\*terpolation\), which explicitly decouples plasticity and stability by interpolating between a fast\-moving "plasticity" sequence and an adaptive "stability" sequence\. We theoretically demonstrate that SPIN implicitly employs an inverse Hessian approximation, providing crucial Tikhonov regularization to damp noisy, single\-sample Hessian estimates and mitigate forgetting\. More importantly, SPIN can be seamlessly integrated existing OCL methods by taking resulted gradients as input and replacing standard optimizers\. Extensive experiments show that using SPIN instead of standard optimizers yields consistent and significant performance gains across multiple OCL approaches, including the challenging rehearsal\-free setting and under strict memory constraints\.

## Towards Understanding the Power and Limits of the Muon Optimizer: A River\-Valley Perspective

**Authors:** Tianqi Shen; Jinji Yang; Runze SHI; Jianhao Ma; Jiaye Teng; Ziye Ma

**ID:** 155813\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155813

[Paper](<https://openreview.net/forum?id=2hczCV54xy>) | [PDF](<https://openreview.net/pdf?id=2hczCV54xy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155813>)

Recently, Muon has gained substantial attention as an appealing alternative to Adam, with many works highlighting its advantages through spectral normalization and improved conditioning\. Yet this positive theoretical narrative contrasts with its empirical performance in large language model \(LLM\) training, where Muon’s gains over Adam/AdamW are often mixed, schedule\-sensitive, and not uniformly superior\. To address this gap, we develop a trajectory\-level theory characterizing both the strengths and limitations of Muon\. We introduce a mixed\-spiked matrix sensing model whose sensing operator decomposes into signal, spike, and bulk components, capturing a mixture of anisotropic structure and long\-tail information reminiscent of LLM training\. On top of it, we adopted a river\-valley perspective in which we view the landscape as composed of a river direction flowing to the desired solution and hill directions encoding nuisance or task\-irrelevant information\. In the momentum\-free setting, we show that Muon moves faster along the information\-bearing river direction during early optimization, but can converge much more slowly near the river bottom than gradient descent\. We then extend the river\-valley perspective to general nonconvex objectives with momentum by studying points on the spectral river\. There, while Muon converges faster early on, its orthogonalized update removes residual scale information, making it prone to overshooting and oscillation near the target solution\. Together, these results suggest that our characterizations extend beyond spiked matrix sensing and motivate switching to GD\-like refinement optimizers in the final phase, rather than relying only on a fixed learning\-rate schedule for Muon\. We also provide preliminary evidence supporting this two\-stage approach in language model training experiments\.

## Optimistic Dual Averaging Unifies Modern Optimizers

**Authors:** Thomas Pethick; Wanyun Xie; Roman Machacek; Volkan Cevher

**ID:** 150725\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150725

[Paper](<https://openreview.net/forum?id=fsvzA0o8vh>) | [PDF](<https://openreview.net/pdf?id=fsvzA0o8vh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150725>)

We introduce SODA, a generalization of Optimistic Dual Averaging, which provides a common perspective on state\-of\-the\-art optimizers like Muon, Lion, AdEMAMix and NAdam, showing that they can all be viewed as optimistic instances of this framework\. Based on this framing, we propose a practical SODA wrapper for any base optimizer that eliminates weight decay tuning through a theoretically\-grounded $1/k$ decay schedule\. Empirical results across various scales and training horizons show that SODA consistently improves performance without any additional hyperparameter tuning\.

## Optimizer\-Induced Mode Connectivity: From AdamW to Muon

**Authors:** Fangzhao Zhang; Sungyoon Kim; Erica Zhang; Yiqi Jiang; Mert Pilanci

**ID:** 156024\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156024

[Paper](<https://openreview.net/forum?id=15PMEzUEgp>) | [PDF](<https://openreview.net/pdf?id=15PMEzUEgp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156024>)

Mode connectivity has been widely studied, yet the role of the optimizer remains underexplored\. We revisit it through optimizer\-induced implicit regularization, asking how connectivity behaves when restricted to solutions constrained by a given optimizer\. For two\-layer ReLU networks, we show that solutions from a single optimizer \- AdamW, Muon, or others in the Lion\-$\\mathcal\{K\}$ family \- form a connected set at sufficiently large width, a result not implied by prior work\. We then characterize how optimizer\-induced regions interact: at large width two different regions can be disjoint or overlap depending on regularization, while in our small\-width example AdamW and Muon converge to disconnected zero\-loss components separated by a provable loss barrier\. Empirically, in GPT\-2 pretraining, we observe same\-optimizer paths preserve each model’s spectrum while cross\-optimizer paths traverse a smooth transition\. Our results reveal optimizer\-dependent structure beyond classical mode connectivity literature\.

## CASAM: Consistency\-Anchored Sharpness\-Aware Minimization for Improved Model Generalization

**Authors:** Chengli Tan; Tianyu Wang; Junmin Liu; Yong Xu

**ID:** 152013\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152013

[Paper](<https://openreview.net/forum?id=WABAB6cGkw>) | [PDF](<https://openreview.net/pdf?id=WABAB6cGkw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152013>)

_Abstract unavailable from the accessible public sources._

## On the Convergence Analysis of Muon

**Authors:** Wei Shen; Ruichuan Huang; Minhui Huang; Cong Shen; Jiawei zhang

**ID:** 156746 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4nH4CulGaP>) | [PDF](<https://openreview.net/pdf?id=4nH4CulGaP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156746>)

The majority of parameters in neural networks are naturally represented as matrices\. However, most commonly used optimizers treat these matrix parameters as flattened vectors during optimization, potentially overlooking their inherent structural properties\. Recently, an optimizer called Muon has been proposed, specifically designed to optimize matrix\-structured parameters\. Extensive empirical evidence shows that Muon can significantly outperform traditional optimizers when training neural networks\. Nonetheless, the theoretical understanding of Muon’s convergence behavior and the reasons behind its superior performance remain limited\. In this work, we present a comprehensive convergence rate analysis of Muon and its comparison with Gradient Descent \(GD\)\. We characterize the conditions under which Muon can outperform GD\. Our theoretical results reveal that Muon can benefit from the low\-rank structure of Hessian matrices, a phenomenon widely observed in practical neural network training\. Our experimental results support and corroborate the theoretical findings\.

## Classification at the Edge of Stability: Unifying Self\-Stabilization and Convergence Rates

**Authors:** Salma Tarmoun; Lachlan MacDonald; Ziqing Xu; Konstantinos Emmanouilidis; Rene Vidal

**ID:** 152056 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VpiPrv9CUK>) | [PDF](<https://openreview.net/pdf?id=VpiPrv9CUK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152056>)

Neural networks are often trained with gradient descent \(GD\) at the edge of stability \(EoS\), where step sizes exceed classical stability thresholds and standard convergence theory no longer applies\. Despite exhibiting non\-monotonic loss and oscillatory dynamics, this regime frequently leads to faster convergence and better generalization\. Existing theoretical perspectives offer complementary but incomplete insights: one identifies a self\-stabilization mechanism that drives GD toward flat regions but does not yield convergence rates; another derives rigorous rates for specific losses but does not explain the underlying stabilization mechanism; and a third unifies these views for overparameterized least squares, but relies on the existence of a minimizer manifold, which is absent in classification settings\. In this work, we extend this unified geometric perspective to exponential\-tail losses, including logistic and cross\-entropy losses, where no finite minimizer exists\. We identify a curvature\-defined reference subspace that replaces the role of the minimizer manifold, yielding a coupled dynamical system in which orthogonal oscillations are damped by parallel progress along directions of decreasing sharpness\. Under regularity conditions, which we verify for logistic and multiclass cross\-entropy losses in symmetric data models, we derive explicit bounds for the iterates, not just the loss, covering both the EoS and stable regimes, and revealing a three\-phase damping structure in the latter\. Our analysis further uncovers a transient implicit bias induced by large step sizes: although GD converges asymptotically to the max\-margin direction, large steps can leave persistent orthogonal residuals and, in certain geometries, amplify them\.

## Zeroth\-Order Sharpness\-Aware Learning with Exponential Tilting

**Authors:** Xuchen Gong; Tian Li

**ID:** 155109\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155109

[Paper](<https://openreview.net/forum?id=8LXSBQlinu>) | [PDF](<https://openreview.net/pdf?id=8LXSBQlinu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155109>)

_Abstract unavailable from the accessible public sources._

## Gibbs Gradient Descent: A Langevin Approach to Optimization

**Authors:** Oussama Zekri; Anna Korba; Nicolas Boulle

**ID:** 153445\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153445

[Paper](<https://openreview.net/forum?id=LFrMGs6Z6P>) | [PDF](<https://openreview.net/pdf?id=LFrMGs6Z6P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153445>)

_Abstract unavailable from the accessible public sources._

## ASTRA: ADMM\-Accelerated Topology Reconfiguration for Dynamic Satellite Constellations

**Authors:** João Norberto; Ricardo N\. Ferreira; Claudia Soares

**ID:** 156042\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156042

[Paper](<https://openreview.net/forum?id=0qiq9LNYTm>) | [PDF](<https://openreview.net/pdf?id=0qiq9LNYTm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156042>)

Dynamic topology reconfiguration is central to the reliability and efficiency of large satellite constellations, yet many existing approaches rely on idealized assumptions such as full constellation deployment or uniform orbital spacing\. We present Adaptive Satellite Topology via Regret\-Aware learning \(ASTRA\), a theoretically\-grounded framework for dynamic satellite topology reconfiguration that builds on an online learning formulation and makes it computationally practical\. ASTRA combines an ADMM\-based offline solver with efficient online updates for both online gradient descent and online conditional gradient, yielding markedly cheaper constrained updates than generic optimization pipelines\. On the theory side, we show that for a relevant class of entry\-wise nonzero utility matrices, the objective is strongly convex, which yields logarithmic static regret for online gradient descent, and we further instantiate known dynamic\-regret guarantees under inexact ADMM inner loops\. Empirically, ASTRA matches or improves topology quality, presenting a good trade\-off with computational time on synthetic constellations, and it remains effective on real Starlink data under partial deployment and non\-uniform spacing, where idealized structural assumptions break down\. These results position ASTRA as an efficient and theoretically grounded approach to topology reconfiguration in realistic Low Earth Orbit networks\.

## Optimal scaling laws in learning hierarchical multi\-index models

**Authors:** Leonardo Defilippis; Florent Krzakala; Bruno Loureiro; Antoine Maillard

**ID:** 149630\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149630

[Paper](<https://openreview.net/forum?id=odXDV3exT8>) | [PDF](<https://openreview.net/pdf?id=odXDV3exT8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149630>)

In this work, we provide a sharp theory of scaling laws for two\-layer neural networks trained on a class of hierarchical multi\-index targets, in a genuinely representation\-limited regime\. We derive exact information\-theoretic scaling laws for subspace recovery and prediction error, revealing how the hierarchical features of the target are sequentially learned through a cascade of phase transitions\. We further show that these optimal rates are achieved by a simple, target\-agnostic spectral estimator, which can be interpreted as the small learning\-rate limit of gradient descent on the first\-layer weights\. Once an adapted representation is identified, the readout can be learned statistically optimally, using an efficient procedure\. As a consequence, we provide a unified and rigorous explanation of scaling laws, plateau phenomena, and spectral structure in shallow neural networks trained on such hierarchical targets\.

## Disentangling the Good From the Bad: Quantization\-Induced Flips Are Not Random

**Authors:** Aymen Bouguerra; Alexandra Gomez\-Villa; Chokri Mraidha; Fabio Arnez

**ID:** 151104\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151104

[Paper](<https://openreview.net/forum?id=cxWrTgqwLx>) | [PDF](<https://openreview.net/pdf?id=cxWrTgqwLx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151104>)

_Abstract unavailable from the accessible public sources._

## Feature learning  in high\-dimensions under structured covariance: Scaling laws in quadratic networks

**Authors:** Qingyuan Yu; Nuri Mert Vural; Xin Tong; Murat Erdogdu

**ID:** 149864\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149864

[Paper](<https://openreview.net/forum?id=mftAwZQsHo>) | [PDF](<https://openreview.net/pdf?id=mftAwZQsHo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149864>)

Recent theoretical work has shown that nonlinear solvable models exhibit scaling laws in the feature\-learning regime\. However, these results largely rely on the assumption of isotropic inputs\. Understanding how these laws extend to anisotropic data remains a central open problem\. In this work, we address this question by analyzing the learning dynamics of two\-layer neural networks with quadratic \(second Hermite polynomial\) activations under anisotropic Gaussian inputs\. We provide a sharp characterization of stochastic gradient descent \(SGD\) across both continuous\-time dynamics and finite\-sample \(online\) discretizations, explicitly quantifying how the covariance spectrum influences the scaling exponent and sample complexity\. Furthermore, we provide evidence that normalization techniques strictly improve sample efficiency in anisotropic settings\. Experiments on two\-layer networks with general activations support our theoretical predictions, suggesting that these insights extend well beyond the quadratic model\.

## Revisiting the Adam–SGD Gap Beyond Single Factors

**Authors:** Chenxiang Zhang; Rustem Islamov; Enea Monzio Compagnoni; Jun Pang; Aurelien Lucchi; Antonio Orvieto

**ID:** 150610\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150610

[Paper](<https://openreview.net/forum?id=gs38iA3FeE>) | [PDF](<https://openreview.net/pdf?id=gs38iA3FeE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150610>)

Prior work has identified several factors that can contribute to the performance gap between Adam and SGD, spanning data properties, architecture design, and optimization dynamics\. Yet these explanations are often studied in isolation, leaving their relative importance unclear\.  In this work, we revisit these hypotheses through a controlled empirical study across vision, language, genomics, and graph tasks, spanning modern and classical architectures, and carefully designed training setups\.  Our results suggest that no single factor consistently explains the Adam\-\-SGD gap\. For instance, the Adam advantage can \(1\) persist under a uniform vocabulary distribution yet nearly disappear under a heavy\-tailed one; \(2\) reverse in favor of SGD in softmax\-attention models; and \(3\) become larger when ReLU is replaced by GeLU nonlinearity\. Instead, the gap emerges from interactions between data and architectural properties\. Yet, we observe a consistent pattern across our settings: a \_crossover batch size\_ at which the relative advantage shifts from SGD to Adam as batch size increases\. This perspective helps reconcile several existing hypotheses while offering practical insights across domains\.

## Positional Encoding Is All You Need For Scalable Equivariance Constraint Relaxation

**Authors:** Hagay Michaeli; Haggai Maron; Daniel Soudry

**ID:** 151164\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151164

[Paper](<https://openreview.net/forum?id=cYC8wdYHgB>) | [PDF](<https://openreview.net/pdf?id=cYC8wdYHgB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151164>)

Equivariant neural networks incorporate known symmetries of the data, such as permutations, rotations, or translations, directly into their architecture, often improving sample efficiency and generalization\.  However, strict equivariance can make optimization difficult, for example, when the data only approximately satisfy the assumed symmetry, or when the equivariance constraints induce a challenging loss landscape\.  Recent studies have shown that relaxing equivariance during training by introducing non\-equivariant dense linear layers can ease optimization in such cases and improve the performance of the resulting strictly equivariant model \(after removing the relaxation layers at test time\)\. While effective, this approach incurs a significant computational overhead, limiting its applicability in scalable architectures\.  In this work, we propose a more efficient constraint\-relaxation method based on positional encoding \(PE\)\.  Our framework injects a positional encoding with learnable scale that breaks the model’s original symmetry\. This positional signal is gradually annealed to zero, recovering the original equivariant model by the end of training\. Empirically, we demonstrate significant improvements for translational and rotational equivariant models with only marginal compute and memory overhead\.

## Tensorion: A Tensor\-Aware Generalization of the Muon Optimizer

**Authors:** Vladimir Bogachev; Vladimir Aletov; Alexander Molozhavenko; Sergei Kudriashov; Maxim Rakhuba

**ID:** 155464\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155464

[Paper](<https://openreview.net/forum?id=5PDUovNqbT>) | [PDF](<https://openreview.net/pdf?id=5PDUovNqbT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155464>)

Common first\-order optimizers, such as Adam, implicitly treat each parameter block as an unstructured vector, which disregards the multilinear weight structure present in many modern machine learning models\. Recent work has shown that exploiting matrix structure can improve optimization dynamics\. A notable example is Muon, which performs steepest descent under the spectral norm constraint\. We take the next step and introduce Tensorion, a tensor\-aware optimizer that extends Muon’s constrained optimization perspective from matrices to higher\-order tensors\. Tensorion is built around a linear minimization oracle \(LMO\) over a tensor norm ball\. The norm is carefully chosen to balance two objectives: tightly bounding the tensor spectral norm, while still keeping the LMO tractable\. This LMO becomes computable because it reduces to operations on adaptively selected unfolding matrices\. Notably, when restricted to order‑2 tensors \(i\.e\., matrices\), Tensorion recovers Muon exactly\. Experiments on tensor\-based computer vision problems suggest that Tensorion can offer improved convergence behavior and more stable gradient updates compared with Adam\-based and existing tensor\-aware baselines in the evaluated settings\.

## HALO: Homotopy\-Augmented Layer Optimization for Stable LLM Supervised Post\-training

**Authors:** Mengxiang Zhang; Lingyuan Liu

**ID:** 152138\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152138

[Paper](<https://openreview.net/forum?id=VEZb4LjBJS>) | [PDF](<https://openreview.net/pdf?id=VEZb4LjBJS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152138>)

_Abstract unavailable from the accessible public sources._

## RESIST: Resilient Decentralized Learning Using Consensus Gradient Descent

**Authors:** Cheng Fang; Rishabh Dixit; Waheed Bajwa; Mert Gurbuzbalaban

**ID:** 156789\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156789

[Paper](<https://openreview.net/forum?id=aNu8S9O6Ug>) | [PDF](<https://openreview.net/pdf?id=aNu8S9O6Ug>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156789>)

_Abstract unavailable from the accessible public sources._

## High\-Fidelity Boltzmann Samplingvia Physical Prior Lifted Continuous GFlowNets

**Authors:** Xizhi Tian; Wenhao Deng; Haojia Hui; Hang Chen; Long Wei

**ID:** 154030\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154030

[Paper](<https://openreview.net/forum?id=GmYzBqp2bI>) | [PDF](<https://openreview.net/pdf?id=GmYzBqp2bI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154030>)

Sampling high\-dimensional Boltzmann distributions is fundamental yet challenging\. Classical MCMC methods incur prohibitive computational costs, while modern generative approaches such as diffusion models and Schrödinger bridges struggle to incorporate informative physical priors\. GFlowNets offer a promising alternative, yet existing continuous variants suffer from training instability\. In this paper, we propose Physical Prior Lifted continuous GFlowNets \(PPL\), a framework that encodes physical prior information through a reference space equipped with a reference distribution and a mapping to the original configuration space\. The sampling process is learned via a Reference\-Weighted Trajectory Balance \(RWTB\) loss, yielding stable training dynamics, efficient learning, and rigorous theoretical guarantees\. Empirically, PPL achieves state\-of\-the\-art performance across five benchmarks spanning synthetic, molecular, and protein systems\. On the synthetic LJ\-55, we obtain significantly lower error than the diffusion\-based ASBS with $\{\\sim\}36\\times$ speedup; Notably, on the 267\-dimensional Chignolin protein, PPL attains near\-ground\-truth sampling fidelity\.

## Accelerating Neural Network Training with Augmented Koopman Dynamics

**Authors:** Jingyi Huang; Keyan Miao; Kostas Margellos; Paul Goulart

**ID:** 149064\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149064

[Paper](<https://openreview.net/forum?id=t9EhPQoOTT>) | [PDF](<https://openreview.net/pdf?id=t9EhPQoOTT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149064>)

_Abstract unavailable from the accessible public sources._

## VALOR: Vector\-Aware Low\-Rank Restructuring of Neural Networks for RISC\-V Inference

**Authors:** Zhihao Xu; Xiaoning Du; Bixin Li; Wang Lulu; Li Liao; Zhou Ying

**ID:** 151755\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151755

[Paper](<https://openreview.net/forum?id=YInGApIIvH>) | [PDF](<https://openreview.net/pdf?id=YInGApIIvH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151755>)

The RISC\-V Vector Extension \(RVV\) provides SIMD\-style vector execution for accelerating deep learning \(DL\) inference on edge processors\. However, existing low\-rank compression methods mainly select ranks according to accuracy preservation and theoretical floating\-point operation \(FLOP\) reduction, without considering whether the selected ranks are profitable under a target RVV effective vector length\. As a result, a low\-rank factorization that reduces FLOPs may still introduce tail\-handling overhead or even increase the RVV instruction count under specific vector configurations\. To address this problem, we propose VALOR, a low\-rank restructuring framework for efficient DL deployment on RISC\-V processors\. Given a pretrained model and a target RVV configuration, VALOR identifies decomposable layers in the pretrained model, filters rank candidates using an RVV instruction\-profitable condition, and searches for a global restructuring strategy with minimal accuracy loss\. Furthermore, to avoid repeated end\-to\-end evaluation, VALOR uses a Hessian\-aware accuracy predictor that combines layer\-wise factorization error with inter\-layer coupling\. Experiments on Spike and a real RISC\-V vector processor, SpacemiT X60, show that VALOR achieves a better accuracy\-efficiency trade\-off than baseline methods\.

## Asymmetric Scaling Laws from Sparse Features

**Authors:** John Sous; Michael Winer

**ID:** 149774\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149774

[Paper](<https://openreview.net/forum?id=nPOMra0Pqu>) | [PDF](<https://openreview.net/pdf?id=nPOMra0Pqu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149774>)

We introduce a model for neural scaling laws under sparse activations\. In the model, test loss is often dominated by rare coordinates that are never observed in the training input\. This mechanism induces a novel bottleneck absent from dense models\. We derive the asymptotic population loss in both the underparameterized and overparameterized regimes, and show that the loss exhibits a double\-descent peak near the interpolation threshold\-\-\-where the number of parameters is just sufficient to fit the training data\-\-\-resulting in a loss curve governed by two distinct scaling exponents\-\-\-one for the overparameterized regime and one for the underparameterized regime\-\-\-with a gap determined by the degree of sparsity\. Additionally, we derive a compute\-optimal frontier that favors increasing dataset size over model capacity under fixed compute budgets\. We also analyze gradient\-descent dynamics and identify a scaling law for the probability that fixed\-step gradient descent becomes unstable\. We further show that the sparsity\-induced effect persists under nonlinear activations\. Experiments validating the theory can be found at https://anonymous\.4open\.science/r/sparse\-scaling\-neurips2026\-3CDB/SparseScaling1\.ipynb\.

## An Equivariance Principle for Optimizer Design: Symmetry\-Compatible Updates for Embeddings, LM Heads, and MoE Routers

**Authors:** Tim Tsz\-Kit Lau; Weijie Su

**ID:** 154592\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154592

[Paper](<https://openreview.net/forum?id=CROYfMoFTK>) | [PDF](<https://openreview.net/pdf?id=CROYfMoFTK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154592>)

_Abstract unavailable from the accessible public sources._

## Random\-Projection Tree Stein Variational Gradient Descent

**Authors:** Shishuo Guo; Xiaoyuan Cheng; Zhuo Sun

**ID:** 150026\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150026

[Paper](<https://openreview.net/forum?id=lKDCTsuzQm>) | [PDF](<https://openreview.net/pdf?id=lKDCTsuzQm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150026>)

Vanilla SVGD is known to have a computational cost of $\\mathcal\{O\}\(N^2\)$ per iteration\. In this work, we introduce Random\-Projection Tree Stein Variational Gradient Descent \(RP\-SVGD\) to alleviate this computational challenge\. This is achieved by restricting kernel interactions to spatially proximal particles clustered via a random projection tree, further reducing to a cost of $\\mathcal\{O\}\(N d\(\\log \(N/C\)\+C\)\)$, where $C$ is a hyperparameter representing the maximum leaf node capacity of the spanning tree\. To establish theoretical validity, we introduce a smoothed RP\-Tree kernel for any fixed tree realization and prove that it belongs to the Stein class of the target distribution, thereby ensuring the generation of valid gradient flows\. In addition, by considering the effective kernel as the expectation of random tree partitions, we verify that it preserves regularity along with other necessary conditions, which guarantee convergence under the approximate gradient flow framework\. Extensive experimental results demonstrate that RP\-SVGD tends to have competitive performance and significant speedups across various tasks\.

## SMoA: Spectrum Modulation Adapter for Parameter\-Efficient Fine\-Tuning

**Authors:** Yongkang Liu; Xing Li; Mengjie Zhao; Shanru Zhang; Zijing Wang; Qian Li; Shi Feng; Feiliang Ren; Daling Wang; Hinrich Schuetze

**ID:** 153896\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153896

[Paper](<https://openreview.net/forum?id=HtLt3XukFH>) | [PDF](<https://openreview.net/pdf?id=HtLt3XukFH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153896>)

As the number of model parameters increases, parameter\-efficient fine\-tuning \(PEFT\) has become the go\-to choice for tailoring pre\-trained large language models\. Low\-rank Adaptation  \(LoRA\) uses a low\-rank update method to simulate full parameter fine\-tuning, which is widely  used to reduce resource requirements\. However, decreasing the rank encounters challenges with  limited representational capacity\. Theory suggests that LoRA fine\-tuning with rank $r$ converges toward the top $r$ singular values of the pre\-trained weight matrix\. As the rank increases, more principal singular directions are preserved, which generally improves the model’s performance\. However, a larger rank also introduces more trainable parameters, leading to higher computational cost\. To overcome this dilemma, we propose SMoA, a \\textbf\{S\}pectrum \\textbf\{Mo\}dulation \\textbf\{A\}dapter that enlarges the accessible family of spectrum\-aware updates under a smaller parameter budget\. SMoA partitions the layer into multiple aligned spectral blocks and applies one in\-block Hadamard\-modulated low\-rank branch to each diagonal block, yielding broader coverage of pretrained spectral directions\. We provide theoretical analysis and empirical results on multiple tasks\. In our experiments, SMoA improves average performance in the current lower\-budget setting over LoRA and competitive LoRA\-style baselines\. Our repository is on https://anonymous\.4open\.science/r/SMoA\-904F/\.

## ChunkFT: Byte\-Streamed Optimization for Memory\-Efficient Full Fine\-Tuning

**Authors:** Yongkang Liu; Zijing Wang; Mengjie Zhao; Ercong Nie; Mingyang Wang; Qian Li; Feiliang Ren; Shi Feng; Daling Wang; Hinrich Schuetze

**ID:** 155153\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155153

[Paper](<https://openreview.net/forum?id=7uCEIbODMO>) | [PDF](<https://openreview.net/pdf?id=7uCEIbODMO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155153>)

This work presents \\textsc\{ChunkFT\}, a memory\-efficient fine\-tuning framework that reformulates full\-parameter fine\-tuning around a dynamically activated working set\. \\textsc\{ChunkFT\} enables gradient computation for arbitrary sub\-tensors without modifying the network architecture, providing an algorithmic foundation for optimizing arbitrary sub\-networks while avoiding standard dense gradient computation\. We provide a theoretical convergence analysis of \\textsc\{ChunkFT\} in the deterministic setting\. Empirically, we apply \\textsc\{ChunkFT\} to fine\-tune Llama 3\-8B and Llama 3\-70B using a single RTX 4090\-24GB GPU and 2$\\times$ H800\-80GB GPUs, respectively\. Full\-parameter fine\-tuning of a 7B model with a 1K input length requires only 13\.72GB of GPU memory\. The results demonstrate the effectiveness of \\textsc\{ChunkFT\} in memory usage, running time, and optimization quality\. Moreover, downstream evaluations on language understanding, mathematical reasoning, and MT\-Bench show that \\textsc\{ChunkFT\} consistently outperforms existing memory\-efficient baselines\. Notably, \\textsc\{ChunkFT\} achieves performance comparable to, and in some cases exceeding, full\-parameter fine\-tuning\. Our repository is on https://anonymous\.4open\.science/r/chunk\-B48E\.

## VALOR: Vector\-Aware Low\-Rank Restructuring of Neural Networks for RISC\-V Inference

**Authors:** Zhihao Xu; Xiaoning Du; Bixin Li; Wang Lulu; Li Liao; Zhou Ying

**ID:** 151755\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151755

[Paper](<https://openreview.net/forum?id=YInGApIIvH>) | [PDF](<https://openreview.net/pdf?id=YInGApIIvH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151755>)

The RISC\-V Vector Extension \(RVV\) provides SIMD\-style vector execution for accelerating deep learning \(DL\) inference on edge processors\. However, existing low\-rank compression methods mainly select ranks according to accuracy preservation and theoretical floating\-point operation \(FLOP\) reduction, without considering whether the selected ranks are profitable under a target RVV effective vector length\. As a result, a low\-rank factorization that reduces FLOPs may still introduce tail\-handling overhead or even increase the RVV instruction count under specific vector configurations\. To address this problem, we propose VALOR, a low\-rank restructuring framework for efficient DL deployment on RISC\-V processors\. Given a pretrained model and a target RVV configuration, VALOR identifies decomposable layers in the pretrained model, filters rank candidates using an RVV instruction\-profitable condition, and searches for a global restructuring strategy with minimal accuracy loss\. Furthermore, to avoid repeated end\-to\-end evaluation, VALOR uses a Hessian\-aware accuracy predictor that combines layer\-wise factorization error with inter\-layer coupling\. Experiments on Spike and a real RISC\-V vector processor, SpacemiT X60, show that VALOR achieves a better accuracy\-efficiency trade\-off than baseline methods\.

## Why Learning Rediscovers the Closed\-Form Diagonal Regularizer

**Authors:** Jeahn Han; Pyojin Kim

**ID:** 152121 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VMdJK3PCBi>) | [PDF](<https://openreview.net/pdf?id=VMdJK3PCBi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152121>)

We identify a diagonal saturation principle in modal inverse problems: when truncation noise is isotropic, the Bayes\-optimal Tikhonov shape is a closed\-form power law Γ\_k ∝ λ\_k^\|s\| set by the prior alone, independent of the domain\. Berry's random\-wave conjecture decorrelates the truncation noise across modes, and Weyl's eigenvalue counting law supplies enough modes for the conclusion to survive empirical Berry violations\. Together they predict an approximately flat loss landscape across the per\-mode family, leaving narrow scope for a diagonal regularizer to robustly beat the closed form\. On FEM\-simulated acoustic rooms, the closed form is near\-optimal relative to per\-room oracle tuning across observation windows, and three diagonal architectures trained on the same data match its reconstruction error within 1\\,pp despite learning qualitatively different spectra\. The framework extends to heat diffusion via a known exponential Green's function correction with no new free parameters\. Saturation is restricted to the diagonal family: Learned Iterative Ridge crosses the boundary by exploiting cross\-mode coupling, locating where learning starts to help\.

## Attention Sinks as Spectral Spikes: A Mechanism Analysis of Gated Attention

**Authors:** Seojin Kim; Yehjin Shin; Noseong Park

**ID:** 153587 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KJKRoPhwQg>) | [PDF](<https://openreview.net/pdf?id=KJKRoPhwQg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153587>)

Transformer attention exhibits attention sinks, where a small subset of source tokens absorbs disproportionate attention mass across layers\. Recent work shows that post\-SDPA output gating strongly reduces attention\-sink behavior, while separate studies link attention sinks to gradient sinks and massive activations through backward training dynamics\. Yet how the same gate affects forward sink structure, backward gradient concentration, and training\-time representation signatures remains unclear\. We address this gap by formulating attention sinks as sink\-induced low\-rank modes in token\-space covariance, with directions aligned to high\-mass attention columns\. Under this view, post\-SDPA gating acts as a mode\-dependent contraction: it attenuates sink\-induced spectral energy in the forward pass and locally reduces value\-path gradients routed through sink columns in the backward pass\. Empirically, random\-matrix diagnostics show that gating reduces outlier mass, weakens sink\-subspace alignment, and increases effective rank, while backward analyses show active\-gate attenuation of first\-token value gradients\. Training\-time diagnostics further show that gating suppresses the co\-emergence of attention concentration, value\-gradient amplification, and representation dominance\.

## Why Muon Outperforms Adam: A Curvature Perspective

**Authors:** Shuche Wang; Fengzhuo Zhang; Jiaxiang Li; Dirk Bergemann; Zhuoran Yang

**ID:** 153556 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KWe4ab5CCr>) | [PDF](<https://openreview.net/pdf?id=KWe4ab5CCr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153556>)

Muon improves training efficiency over Adam in large language\-model training by about two times, but the local geometric source of this advantage remains unclear\. Our work takes a first step toward demystifying Muon's superiority over Adam from a curvature perspective\. First, we apply a second\-order Taylor approximation to the training landscape and show that Muon achieves a larger one\-step loss decrease than Adam at matched validation loss\. The two optimizers have comparable first\-order gains, but Muon consistently incurs a smaller second\-order curvature penalty\.  Second, we decompose this curvature penalty into the squared update norm and Normalized Directional Sharpness \(NDS\)\. We find that Muon and Adam have comparable update norms, so Muon's smaller curvature penalty is driven by lower NDS, not update scale\. Third, we study how training data and model structure shape Muon's NDS advantage\. Using Zipf Probabilistic Context\-Free Grammar \(PCFG\) data with controlled imbalance, we show that data imbalance amplifies Muon's NDS advantage over Adam\. A within\-/cross\-layer decomposition further shows that, in the middle and late stages of training, Muon's lower NDS is mainly sustained by smaller within\-layer curvature\.  Beyond empirical evidence, we analyze stylized quadratic problems with heterogeneous curvature and gradient alignment toward high\-curvature modes\.  We prove that Muon attains a smaller average NDS than GD by balancing update energy across curvature groups; when curvature heterogeneity is sufficiently strong, this also yields lower local quadratic loss after the same number of steps\.

## Exact\-Form Regret and Conservative Correlated Equilibria

**Authors:** Ashkan Soleymani; Patrick Jaillet; Gabriele Farina

**ID:** 153876 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=I6C1jbK29Z>) | [PDF](<https://openreview.net/pdf?id=I6C1jbK29Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153876>)

Gradient descent is usually studied through external regret, but recent work shows that it controls richer deviations through infinitesimal vector\-field guarantees \\citep\{ahunbay2024first\}, semicoarse constraints \\citep\{ahunbay2025semicoarse\}, and weakly convex proximal maps \\citep\{cai2025proximal\}\.  We identify the finite\-deviation invariant behind these guarantees\.  A feasible deviation \\\(\\phi\\colon K\\to K\\\) induces the displacement field \\\(\\Dphi\(\\xvec\)=\\xvec\-\\phi\(\\xvec\)\\\)\.  Online gradient descent has \\\(O\(\\sqrt T\)\\\) regret against every feasible deviation with exact displacement, \\\(\\Dphi=\\nabla\\Psi\\\) for a potential function $\\Psi$, even when \\\(\\Psi\\\) is nonconvex\.  Feasibility handles the projection boundary term, and exactness makes the potential telescope\.  The condition is sharp for smooth fields on simply connected domains, since any nonzero circulation along a feasible loop can be turned into a bounded cyclic adversary that forces linear regret\.  Semicoarse affine deviations are the linear\-quadratic slice of this class, and proximal deviations are the Moreau\-envelope slice\.  The exact\-form class strictly contains weakly convex proximal deviations\.  For mirror descent, exactness is measured in the mirror geometry through the one\-form \\\(\\Dphi\(\\xvec\)^\{\\transpose\}\\dd\\nabla R\(\\xvec\)\\\), which subsumes Bregman proximal regret and includes multiplicative deviations for multiplicative\-weight updates\.  In convex games, no\-regret with respect to exact\-form deviations yields conservative correlated equilibrium, refining coarse and proximal correlated equilibrium\.

