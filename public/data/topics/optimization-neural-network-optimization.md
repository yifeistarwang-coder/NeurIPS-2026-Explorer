# Optimization / Neural Network Optimization

优化 / 神经网络优化

93 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Equilibrium Matching: Generative Modeling with Implicit Energy\-Based Models

**Authors:** Runqian \(Ray\) Wang; Yilun Du

**ID:** 148529 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xD7V6hlH9d>) | [PDF](<https://openreview.net/pdf?id=xD7V6hlH9d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148529>)

We introduce Equilibrium Matching \(EqM\), a generative modeling framework built from an equilibrium dynamics perspective\. EqM discards the non\-equilibrium, time\-conditional dynamics in traditional diffusion and flow\-based generative models and instead learns the equilibrium gradient of an implicit energy landscape\. Through this approach, we can adopt an optimization\-based sampling process at inference time, where samples are obtained by gradient descent on the learned landscape with adjustable step sizes, adaptive optimizers, and adaptive compute\. EqM surpasses diffusion/flow models empirically, achieving an FID of 1\.90 on ImageNet 256$\\times$256\. EqM is also theoretically justified to learn and sample from the data manifold\. Beyond generation, EqM is a flexible framework that naturally handles tasks including partially noised image denoising, OOD detection, and image composition\. By replacing time\-conditional velocities with a unified equilibrium landscape, EqM offers a tighter bridge between flow and energy\-based models and a simple route to optimization\-driven inference\.

## Trust Region Policy Distillation

**Authors:** Zhengpeng Xie; Li Lyna Zhang; Zeke Xie; Mao Yang

**ID:** 150346 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ioYRAhS4qE>) | [PDF](<https://openreview.net/pdf?id=ioYRAhS4qE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150346>)

Big goals are hard to achieve all at once; breaking them into small steps is wiser\. We present Trust Region Policy Distillation \(TOP\-D\), which transforms the notoriously unstable, high\-variance On\-Policy Distillation \(OPD\) into a stable training paradigm by dynamically constructing a proximal teacher\. Theoretically, we establish a rigorous framework demonstrating that TOP\-D inherently controls gradient variance\. By providing a formal global convergence analysis alongside a monotonic improvement bound, we mathematically formalize the reliability and stability of the overall training dynamics\. Empirically, TOP\-D dramatically enhances training stability, sample efficiency, and final performance on mathematical reasoning tasks\. More importantly, TOP\-D introduces zero additional computational overhead, positioning itself as a promising alternative to the well\-established OPD paradigm\.

## DeltaMomentum: A Key\-Value based Anisotropic Momentum Update via Delta Rule

**Authors:** Euijin Hong; Guannan Qu

**ID:** 151284 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bXrZIgeNoe>) | [PDF](<https://openreview.net/pdf?id=bXrZIgeNoe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151284>)

The first\-moment buffer of most modern optimizers is an exponential moving average \(EMA\) of stochastic gradients with a single scalar decay, with a unified forgetting horizon along every direction in parameter space\. Yet the per\-sample gradient of any linear layer factorizes as a rank\-1 outer product $g\_t = \\delta\_t x\_t^\\top$, exposing the input activation as a natural $\\textit\{key\}$ and the output\-side error as a natural $\\textit\{value\}$, which is the structure that EMA's flat matrix average discards\. We propose $\\textbf\{DeltaMomentum\}$, which interprets the buffer as an online linear associative memory of these key\-\-value pairs and updates it via the classical delta rule\. The resulting update is $\\textit\{anisotropic memory transport\}$: directions queried frequently are forgotten quickly, directions queried rarely are preserved on long horizons, yielding an automatic, data\-driven schedule matched to input statistics\. We prove the buffer's expected fixed point is a Tikhonov\-regularized Wiener predictor of the population gradient, which is equivalent to implicit input\-side natural\-gradient preconditioning at no covariance\-inversion cost, and that the same mechanism strictly accelerates expected tracking\-error contraction along every positive\-density input direction under non\-stationarity and reduces the per\-direction iteration determinant in linear regression\. DeltaMomentum is a drop\-in replacement for the EMA accumulator in any base optimizer; we instantiate it as DeltaSGD and DeltaAdamW\. A $\\mu$P derivation shows the delta coefficient is width\-invariant, enabling zero\-shot hyperparameter transfer; we verify this with a coordinate check across five widths\. The per\-block asymptotic FLOP overhead is $\\approx 15\.74$% at zero persistent\-memory cost \(down to $7\.3$% and $11\.0$% realized at 67M/370M\)\. On FineWeb\-Edu, DeltaAdamW reaches AdamW's terminal validation loss in up to $31\.35$% fewer steps at 67M and $19\.28$% fewer steps at 370M\. On CIFAR\-10, DeltaSGD shows the same pattern against SGD\-momentum, confirming the gain is not specific to Adam\. Mechanistic diagnostics confirm that improvements in gradient\-estimator quality, function\-space prediction error, and input\-feature conditioning are operative throughout training\.

## Rethinking Gradient Approximation in Quantization: A Zeroth\-Order Expectation Perspective

**Authors:** Wenkang Wang; Jia Zhang; Zelin Wei; Dongxu Liu; Jiabao Li; Wanli Shi; Bin Gu

**ID:** 156080 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0ZZ3tyBGyc>) | [PDF](<https://openreview.net/pdf?id=0ZZ3tyBGyc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156080>)

As large language models \(LLMs\) continue to scale, quantization has become a key technique for efficient deployment\. However, multi\-bit quantization employs non\-differentiable rounding, hindering gradient optimization\. Existing methods rely on heuristic surrogate gradients \(e\.g\., STE\), which work empirically but lack a unified theory\. To address this challenge, we propose the Zeroth\-Order Expectation Gradient \(ZOE\-Grad\), a zeroth\-order expectation view of quantization surrogate gradients\. Specifically, we establish an equivalence between the expectations of zeroth\-order gradient estimators and surrogate gradients, providing a unified zeroth\-order interpretation of widely used surrogates\. Under this framework, STE corresponds to a degenerate, discontinuous perturbation that ignores the local geometry of quantization boundaries, limiting its expressiveness\. In contrast, continuous perturbation\-based surrogate gradients capture boundary\-local information and produce smoother, more structured gradients\. We further establish bounded\-error convergence guarantees for the quantized objective\. Through simulations under multiple perturbation distributions, we verify that the proposed framework accurately captures the relationship between the expectations of zeroth\-order gradient estimators and surrogate gradients\. Furthermore, extensive experiments on OPT\-1\.3B, OPT\-6\.7B, LLaMA\-2\-7B, and Qwen3\-8B show that continuous ZOE\-Grad surrogates consistently outperform STE across diverse LLM architectures\.

## Edge of Stochastic Stability: Revisiting the Edge of Stability for SGD

**Authors:** Arseniy Andreyev; Pierfrancesco Beneventano

**ID:** 150004 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lUoXQdMVoe>) | [PDF](<https://openreview.net/pdf?id=lUoXQdMVoe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150004>)

Recent findings by \\citet\{cohen\_gradient\_2021\} demonstrate that when training neural networks with full\-batch gradient descent at step size $\\eta$, the largest eigenvalue $\\lambda\_\{\\max\}$ of the full\-batch Hessian consistently stabilizes      around $2/\\eta$\.     These results have significant implications for convergence and generalization\.      This stabilization, however, does not occur for mini\-batch stochastic gradient descent \(SGD\), so the implications above do not directly transfer\.     We show that SGD trains in a different regime we term Edge of Stochastic Stability \(\\textsc\{EoSS\}\)\.     In this regime, what stabilizes at $2/\\eta$ is \\emph\{Batch Sharpness\}: the expected directional curvature of mini\-batch Hessians along their corresponding mini\-batch gradients\.     As a consequence, $\\lambda\_\{\\max\}$\-\-\-which is generally smaller than \\emph\{Batch Sharpness\}\-\-\-is suppressed, aligning with the long\-standing empirical observation that smaller batches and larger step sizes favor flatter minima\.     We further discuss implications for mathematical modeling of SGD trajectories\.

## FOGO: Forgetting\-aware Orthogonalization Optimizer

**Authors:** Toan Nguyen; Yang Liu; Trung Le; Celso de Melo; Flora Salim

**ID:** 152816 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QBkoiaQrV0>) | [PDF](<https://openreview.net/pdf?id=QBkoiaQrV0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152816>)

We argue that forgetting is not confined to continual learning but is a general optimization phenomenon: during standard training, dominant mini\-batch gradients suppress rare but useful update directions, causing short\-term forgetting at every step\. When such knowledge is never revisited, these losses compound into long\-term forgetting—the classical failure mode of continual learning\. We introduce FOGO, a scalable optimizer that continuously detects and resolves gradient interference across both regimes\. FOGO spectrally orthogonalizes momentum updates to prevent dominant directions from monopolizing optimization, then stores representative past directions in a compact codebook memory built on random projection, where pairwise distances are provably preserved in low\-dimensional space\. At each step, conflicts between the current update and stored directions are resolved via lightweight orthogonal correction and lifted back through a proximal step, with minimal overhead and no data storage\. Across class\-imbalanced classification, continual visual learning under domain and class shifts, continual fine\-tuning of LLaVA\-7B, and GPT\-2 pretraining, FOGO consistently improves convergence and knowledge retention, outperforming Adam and Muon\.

## Sharpness, Stability, and Step\-Size Scaling in Deep Polynomial Networks

**Authors:** Alexandru Crăciun; Debarghya Ghoshdastidar

**ID:** 150505 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hbFl4um2d4>) | [PDF](<https://openreview.net/pdf?id=hbFl4um2d4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150505>)

Predicting the maximum stable learning rate of a neural network from its architecture alone has remained outside the reach of current theory, except for deep linear and shallow scalar models, where exact sharpness expressions are available\. We close this gap for deep polynomial networks by proving the first computable, architecture\-explicit lower bound on the largest Hessian eigenvalue at any interpolating minimum\. The bound factorizes into three independently computable terms: a data\-geometry factor, an architectural\-capacity factor, and a label\-energy factor\. Combining our bound with the dynamical framework of Chemnitz and Engel \[2025\] and the stability conditions of Cohen et al\. \[2022\], we derive critical step\-size upper bounds for a range of optimizers from vanilla gradient descent to adaptive versions like Adam\. The maximum stable learning rate for deep polynomial networks scales as $\(\\text\{activation degree\}\)^\{\(\-2 \\times \\text\{depth\}\)\}$, placing realistic polynomial network training in the Edge of Stability regime\. Our derivation shows that this scaling is a Hessian\-level consequence of the network's algebraic structure, not a property of any specific optimizer or dataset\. With identity activation, our bound recovers the exact deep linear sharpness of Mulayoff and Michaeli \[2020\]\.

## SaMA: Morpho Adaptation via Asymmetric Expansion of Kronecker Product

**Authors:** An Nguyen; Anh Tong

**ID:** 153753 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ixbo0KjNzZ>) | [PDF](<https://openreview.net/pdf?id=Ixbo0KjNzZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153753>)

Low\-rank adaptation \(LoRA\) has attracted significant attention in the parameter\-efficient fine\-tuning \(PEFT\) landscape\. However, its design suffers from two fundamental limitations\. First, its invariance manifold induces flat directions in the loss landscape, creating an optimization bottleneck for adaptive optimizers\. Second, its effective rank scales only linearly with the parameter budget\. In this paper, we propose Scalable Morpho Adaptation \(SaMA\), a PEFT method grounded in a principled generalization of the Kronecker product\. By relaxing the shared\-block constraint in the perfect\-shuffle factorization, SaMA spans from low to full rank and achieves effective rank that scales \\quadratically in parameters\. Furthermore, we show that its invariance manifold collapses to a diagonal group, making it structurally more optimizer\-friendly\. Empirically, SaMA consistently outperforms strong PEFT baselines on commonsense and arithmetic reasoning benchmarks while being more parameter\-efficient\.

## Revisiting the Adam–SGD Gap Beyond Single Factors

**Authors:** Chenxiang Zhang; Rustem Islamov; Enea Monzio Compagnoni; Jun Pang; Aurelien Lucchi; Antonio Orvieto

**ID:** 150610 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gs38iA3FeE>) | [PDF](<https://openreview.net/pdf?id=gs38iA3FeE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150610>)

Prior work has identified several factors that can contribute to the performance gap between Adam and SGD, spanning data properties, architecture design, and optimization dynamics\. Yet these explanations are often studied in isolation, leaving their relative importance unclear\.  In this work, we revisit these hypotheses through a controlled empirical study across vision, language, genomics, and graph tasks, spanning modern and classical architectures, and carefully designed training setups\.  Our results suggest that no single factor consistently explains the Adam\-\-SGD gap\. For instance, the Adam advantage can \(1\) persist under a uniform vocabulary distribution yet nearly disappear under a heavy\-tailed one; \(2\) reverse in favor of SGD in softmax\-attention models; and \(3\) become larger when ReLU is replaced by GeLU nonlinearity\. Instead, the gap emerges from interactions between data and architectural properties\. Yet, we observe a consistent pattern across our settings: a \_crossover batch size\_ at which the relative advantage shifts from SGD to Adam as batch size increases\. This perspective helps reconcile several existing hypotheses while offering practical insights across domains\.

## Tensorion: A Tensor\-Aware Generalization of the Muon Optimizer

**Authors:** Vladimir Bogachev; Vladimir Aletov; Alexander Molozhavenko; Sergei Kudriashov; Maxim Rakhuba

**ID:** 155464 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5PDUovNqbT>) | [PDF](<https://openreview.net/pdf?id=5PDUovNqbT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155464>)

Common first\-order optimizers, such as Adam, implicitly treat each parameter block as an unstructured vector, which disregards the multilinear weight structure present in many modern machine learning models\. Recent work has shown that exploiting matrix structure can improve optimization dynamics\. A notable example is Muon, which performs steepest descent under the spectral norm constraint\. We take the next step and introduce Tensorion, a tensor\-aware optimizer that extends Muon’s constrained optimization perspective from matrices to higher\-order tensors\. Tensorion is built around a linear minimization oracle \(LMO\) over a tensor norm ball\. The norm is carefully chosen to balance two objectives: tightly bounding the tensor spectral norm, while still keeping the LMO tractable\. This LMO becomes computable because it reduces to operations on adaptively selected unfolding matrices\. Notably, when restricted to order‑2 tensors \(i\.e\., matrices\), Tensorion recovers Muon exactly\. Experiments on tensor\-based computer vision problems suggest that Tensorion can offer improved convergence behavior and more stable gradient updates compared with Adam\-based and existing tensor\-aware baselines in the evaluated settings\.

## What Stops SGD on LLM Pre\-Training: The Need for Large Learning Rate and How to Achieve it

**Authors:** Athanasios Glentis; Chung\-Yiu Yau; Dawei Li; Mingyi Hong

**ID:** 148165 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zorIfxhDUM>) | [PDF](<https://openreview.net/pdf?id=zorIfxhDUM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148165>)

It is widely believed that stochastic gradient descent \(SGD\) performs significantly worse than adaptive optimizers such as Adam in pre\-training Large Language Models \(LLMs\)\. Yet the underlying reason for this gap remains unclear\. In this work, we attribute a large part of the discrepancy to SGD's inability to sustain learning rates comparable to Adam's much larger effective learning rates\. Through empirical and theoretical analysis of LLM pre\-training dynamics, we identify that training is characterized by small gradient norms and large weight\-to\-gradient ratios, an effect that becomes more pronounced with larger batch sizes typical in pre\-training, necessitating such large effective learning rates\. However, we find that output\-layer gradient magnitudes become highly uneven across token classes, and that large gradient spikes frequently occur during training\. Together, these effects severely restrict the admissible learning rate of SGD\. Guided by this understanding, we show that simple clipping mechanisms that stabilize SGD at large learning rates enable it to recover most of Adam's performance\. In our large\-scale experiments, the validation loss gap between large\-learning\-rate SGD and Adam shrinks from more than 50% to only about 3\.5% when pre\-training a 1B\-parameter LLaMA model with a 1M\-token batch size\.

## Guaranteed Nonconvex Low\-Rank Tensor Estimation via Scaled Gradient Descent

**Authors:** Tong Wu

**ID:** 156668 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156668>)

Tensors, which give a faithful and effective representation to deliver the intrinsic structure of multi\-dimensional data, play a crucial role in an increasing number of signal processing and machine learning problems\. However, tensor data are often accompanied by arbitrary signal corruptions, including missing entries and sparse noise\. A fundamental challenge is to reliably extract the meaningful information from corrupted tensor data in a statistically and computationally efficient manner\. This paper develops a scaled gradient descent \(ScaledGD\) algorithm to directly estimate the tensor factors with tailored spectral initializations under the tensor\-tensor product \(t\-product\) and tensor singular value decomposition \(t\-SVD\) framework\. With tailored variants for tensor robust principal component analysis, \(robust\) tensor completion and tensor regression, we theoretically show that ScaledGD achieves linear convergence at a constant rate that is independent of the condition number of the ground truth low\-rank tensor, while maintaining the low per\-iteration cost of gradient descent\. To the best of our knowledge, ScaledGD is the first algorithm that provably has such properties for low\-rank tensor estimation with the t\-SVD\. Finally, numerical examples are provided to demonstrate the efficacy of ScaledGD in accelerating the convergence rate of ill\-conditioned low\-rank tensor estimation in a number of applications\.

## High\-Fidelity Boltzmann Samplingvia Physical Prior Lifted Continuous GFlowNets

**Authors:** Xizhi Tian; Wenhao Deng; Haojia Hui; Hang Chen; Long Wei

**ID:** 154030 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GmYzBqp2bI>) | [PDF](<https://openreview.net/pdf?id=GmYzBqp2bI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154030>)

Sampling high\-dimensional Boltzmann distributions is fundamental yet challenging\. Classical MCMC methods incur prohibitive computational costs, while modern generative approaches such as diffusion models and Schrödinger bridges struggle to incorporate informative physical priors\. GFlowNets offer a promising alternative, yet existing continuous variants suffer from training instability\. In this paper, we propose Physical Prior Lifted continuous GFlowNets \(PPL\), a framework that encodes physical prior information through a reference space equipped with a reference distribution and a mapping to the original configuration space\. The sampling process is learned via a Reference\-Weighted Trajectory Balance \(RWTB\) loss, yielding stable training dynamics, efficient learning, and rigorous theoretical guarantees\. Empirically, PPL achieves state\-of\-the\-art performance across five benchmarks spanning synthetic, molecular, and protein systems\. On the synthetic LJ\-55, we obtain significantly lower error than the diffusion\-based ASBS with $\{\\sim\}36\\times$ speedup; Notably, on the 267\-dimensional Chignolin protein, PPL attains near\-ground\-truth sampling fidelity\.

## Accelerating Neural Network Training with Augmented Koopman Dynamics

**Authors:** Jingyi Huang; Keyan Miao; Kostas Margellos; Paul Goulart

**ID:** 149064 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t9EhPQoOTT>) | [PDF](<https://openreview.net/pdf?id=t9EhPQoOTT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149064>)

Neural network training can be viewed as a discrete\-time dynamical system, suggesting that its optimisation trajectory can be learned and extrapolated to reduce the cost of repeated backpropagation\. Motivated by Koopman operator theory, which represents nonlinear dynamics as linear evolution in a lifted space, we propose a training acceleration method based on augmented Koopman dynamics\. Instead of approximating the evolution of parameters alone, our method lifts the training state to include both model parameters and optimiser\-dependent internal states, enabling the learned operator to better capture the dynamics of modern optimisers with momentum or adaptive gradient statistics\. We estimate a strided, multi\-step Koopman operator from training snapshots and use matrix\-vector multiplications to extrapolate future parameters and optimiser states, effectively bypassing an adaptive number of backpropagation steps\. This formulation suppresses high\-frequency stochastic fluctuations induced by mini\-batch training and reduces the storage required for operator estimation\. To improve robustness, we further introduce a safeguarding mechanism that prevents Koopman\-extrapolated states from degrading performance relative to the most recent backpropagation iterate\. The method can be integrated with standard optimisers, including Adam, AdamW, SGD with momentum, Adadelta, and other commonly used variants\. Experiments across multiple optimisers show that the proposed approach significantly reduces both the number of backpropagation steps and the wall\-clock training time required to reach a target accuracy, while maintaining, and in many cases improving, final model performance\.

## Why Learning Rediscovers the Closed\-Form Diagonal Regularizer

**Authors:** Jeahn Han; Pyojin Kim

**ID:** 152121 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VMdJK3PCBi>) | [PDF](<https://openreview.net/pdf?id=VMdJK3PCBi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152121>)

We identify a diagonal saturation principle in modal inverse problems: when truncation noise is isotropic, the Bayes\-optimal Tikhonov shape is a closed\-form power law Γ\_k ∝ λ\_k^\|s\| set by the prior alone, independent of the domain\. Berry's random\-wave conjecture decorrelates the truncation noise across modes, and Weyl's eigenvalue counting law supplies enough modes for the conclusion to survive empirical Berry violations\. Together they predict an approximately flat loss landscape across the per\-mode family, leaving narrow scope for a diagonal regularizer to robustly beat the closed form\. On FEM\-simulated acoustic rooms, the closed form is near\-optimal relative to per\-room oracle tuning across observation windows, and three diagonal architectures trained on the same data match its reconstruction error within 1\\,pp despite learning qualitatively different spectra\. The framework extends to heat diffusion via a known exponential Green's function correction with no new free parameters\. Saturation is restricted to the diagonal family: Learned Iterative Ridge crosses the boundary by exploiting cross\-mode coupling, locating where learning starts to help\.

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

## ASTRA: ADMM\-Accelerated Topology Reconfiguration for Dynamic Satellite Constellations

**Authors:** João Norberto; Ricardo N\. Ferreira; Claudia Soares

**ID:** 156042 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0qiq9LNYTm>) | [PDF](<https://openreview.net/pdf?id=0qiq9LNYTm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156042>)

Dynamic topology reconfiguration is central to the reliability and efficiency of large satellite constellations, yet many existing approaches rely on idealized assumptions such as full constellation deployment or uniform orbital spacing\. We present Adaptive Satellite Topology via Regret\-Aware learning \(ASTRA\), a theoretically\-grounded framework for dynamic satellite topology reconfiguration that builds on an online learning formulation and makes it computationally practical\. ASTRA combines an ADMM\-based offline solver with efficient online updates for both online gradient descent and online conditional gradient, yielding markedly cheaper constrained updates than generic optimization pipelines\. On the theory side, we show that for a relevant class of entry\-wise nonzero utility matrices, the objective is strongly convex, which yields logarithmic static regret for online gradient descent, and we further instantiate known dynamic\-regret guarantees under inexact ADMM inner loops\. Empirically, ASTRA matches or improves topology quality, presenting a good trade\-off with computational time on synthetic constellations, and it remains effective on real Starlink data under partial deployment and non\-uniform spacing, where idealized structural assumptions break down\. These results position ASTRA as an efficient and theoretically grounded approach to topology reconfiguration in realistic Low Earth Orbit networks\.

## Global convergence of adjoint\-optimized neural PDEs

**Authors:** Konstantin Riedl; Justin Sirignano; Konstantinos Spiliopoulos

**ID:** 156667 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156667>)

Many engineering and scientific fields have recently become interested in modeling terms in partial differential equations \(PDEs\) with neural networks, which requires solving the inverse problem of learning neural network terms from observed data in order to approximate missing or unresolved physics in the PDE model\. The resulting neural\-network PDE model, being a function of the neural network parameters, can be calibrated to the available ground truth data by optimizing over the PDE using gradient descent, where the gradient is evaluated in a computationally efficient manner by solving an adjoint PDE\. These neural PDE models have emerged as an important research area in scientific machine learning\. In this paper, we study the convergence of the adjoint gradient descent optimization method for training neural PDE models in the limit where both the number of hidden units and the training time tend to infinity\. Specifically, for a general class of nonlinear parabolic PDEs with a neural network embedded in the source term, we prove convergence of the trained neural\-network PDE solution to the target data \(i\.e\., a global minimizer\)\. The global convergence proof poses a unique mathematical challenge that is not encountered in finite\-dimensional neural network convergence analyses due to \(i\) the neural network training dynamics involving a non\-local neural network kernel operator in the infinite\-width hidden layer limit where the kernel lacks a spectral gap for its eigenvalues and \(ii\) the nonlinearity of the limit PDE system, which leads to a non\-convex optimization problem in the neural network function even in the infinite\-width hidden layer limit \(unlike in typical neural network training cases where the optimization problem becomes convex in the large neuron limit\)\. The theoretical results are illustrated and empirically validated by numerical studies\.

## Convergence Analysis of Newton's Method for Neural Networks in the Overparameterized Limit

**Authors:** Konstantin Riedl; Justin Sirignano; Konstantinos Spiliopoulos

**ID:** 149087 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=szSde6PDAI>) | [PDF](<https://openreview.net/pdf?id=szSde6PDAI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149087>)

A convergence analysis is developed for the regularized Newton method for training neural networks \(NNs\) in the overparameterized limit\. We prove that as the number of hidden units tends to infinity, the NN training dynamics converge in probability to the solution of a deterministic limit equation involving a "Newton neural tangent kernel" \(NNTK\)\. Explicit rates characterizing this convergence are provided and, in the infinite\-width limit, we prove that the NN converges exponentially fast to the target data \(i\.e\., a global minimizer with zero loss\)\. Crucially, we show that this convergence is uniform across the frequency spectrum, addressing the spectral bias inherent in gradient descent\. The eigenvalues of the neural tangent kernel for gradient descent accumulate at zero, leading to slow convergence for target data with high\-frequency components\. In contrast, the NNTK has uniformly lower bounded eigenvalues if the regularization parameter is selected appropriately, allowing Newton's method to converge more quickly for data with high\-frequency components\. Mathematical challenges that need to be addressed in our analysis include the implicit parameter update of the Newton method with a potentially indefinite Hessian matrix and the fact that the dimension of this linear system of equations tends to infinity as the NN width grows\. This substantially complicates deriving the training dynamics in the overparameterized limit as well as proving the convergence of the finite\-width dynamics thereto\. The analysis identifies a scaling formula for selecting the regularization parameter, which we show can vanish at a suitable rate as the number of hidden units becomes larger\. In addition, we prove that, for sufficiently large numbers of hidden units, the regularized Hessian remains positive definite during training and the Newton updates for individual NN parameters converge to zero, demonstrating that the model behaves as a linearization around the initialization\.

## High\-probability Convergence of Gradient Methods under Markovian Stochasticity

**Authors:** Polina Podzorova; Nikolay Spitsyn; Savelii Chezhegov; Aleksandr Beznosikov

**ID:** 149977 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lmm5OfBNv5>) | [PDF](<https://openreview.net/pdf?id=lmm5OfBNv5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149977>)

Markovian stochasticity naturally arises in many modern learning problems, including optimization with dependent data streams and reinforcement learning\. Despite extensive research on convergence of stochastic gradient methods under such stochasticity, high\-probability convergence remains largely unexplored\. To close this gap, we provide the first high\-probability convergence guarantees for gradient\-based methods under Markovian stochasticity\. We study SGD with a specialized mini\-batch\-based gradient estimator and establish high\-probability convergence results in the non\-convex setting under the classical bounded stochasticity assumption, and further extend the analysis to a weaker bounded\-variance assumption by incorporating gradient clipping, yielding convergence guarantees for accelerated stochastic gradient descent in the convex setting\. For both methods, we characterize the oracle complexity via a concentration inequality that explicitly captures the effect of Markovian dependence on the resulting convergence rates\.

## Logarithmic Depth Suffices for In\-Context Gradient Descent

**Authors:** Yingze Li; Dong Wang; Xianglong Liu; Qingyun Zou; Chunnan Wang; Zhiyu Liang; Hongzhi Wang

**ID:** 149279 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rUh3nJ2f7c>) | [PDF](<https://openreview.net/pdf?id=rUh3nJ2f7c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149279>)

Transformers can perform in\-context learning at depths far smaller than the number of optimizer updates suggested by existing gradient\-descent interpretations\. Prior work shows that an L\-layer Transformer can emulate L gradient\-descent updates, but this leaves open whether depth is merely a step counter\. We show that it is not: in linear self\-attention, each layer compounds the algebraic capacity built by previous layers, yielding a tight Θ\(log k\) depth characterization for computing the final result of k gradient\-descent steps on diagonal quadratic tasks\. Controlled experiments validate this mechanism: trained linear\-attention models exhibit the predicted logarithmic depth transition, and kernel and oracle comparisons identify polynomial degree as the governing bottleneck\. Broader experiments show the same depth signal under standard Transformer components, broader ICL regression families, and early\-exit probes on Qwen2\.5\.

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

## CASAM: Consistency\-Anchored Sharpness\-Aware Minimization for Improved Model Generalization

**Authors:** Chengli Tan; Tianyu Wang; Junmin Liu; Yong Xu

**ID:** 152013 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WABAB6cGkw>) | [PDF](<https://openreview.net/pdf?id=WABAB6cGkw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152013>)

Many studies argue that the success of sharpness\-aware minimization \(SAM\) is due to the implicit regularization of the gradient norm or the eigenvalues of the Hessian\. However, they cannot fully explain why the flatness\-based measures do not always correlate well with generalization\. For instance, we can easily construct a counterexample by only optimizing with hard examples\. In this paper, we propose to resolve such a contradiction from the perspective of anti\-overfitting\. First, we show that the sharpness at the mini\-batch level approximately equals the sum of the gradient norm and the Kullback–Leibler \(KL\) divergence between the predictive distributions evaluated at the current point and its adversary\. Second, we show that the \\emph\{gradient consistency\}, which approximately quantifies the inner product between the mini\-batch gradient and the per\-example gradient, decreases consistently during training\. This result explains why SAM is less likely to suffer from overfitting\. At last, building on these insights, we further introduce CASAM, an algorithm that reweights each example according to gradient consistency to enhance the generalization performance\. Extensive experiments on popular benchmarks such as ImageNet\-1K and Clothing1M corroborate its efficacy\.

## Beyond Average Flatness: Domain\-wise Flatness for Domain Generalization

**Authors:** Seungjun Choi; Heeyoung Kim

**ID:** 150477 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hlSHsj1M7I>) | [PDF](<https://openreview.net/pdf?id=hlSHsj1M7I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150477>)

Sharpness\-Aware Minimization \(SAM\) is widely used in domain generalization to promote flat minima that generalize to unseen distributions\. Existing SAM\-based methods typically penalize the sharpness of the \*average\* loss across domains\. We show that this prevailing formulation—termed AvSAM—has a fundamental geometric limitation: it can favor solutions with misaligned domain\-wise dominant Hessian eigenvectors\. As a result, such solutions may appear flat on average while remaining sharp within individual domains\. To address this limitation, we propose an alternative objective that penalizes the average \*domain\-wise\* sharpness\. We show that this objective decomposes into the AvSAM objective plus a non\-negative residual term, which we call the \*Cancellation Gap\*\. This gap is minimized if and only if the domain\-wise dominant eigenvectors are aligned up to sign, indicating that it mitigates AvSAM's tendency to favor misaligned solutions\. However, we further uncover a degeneracy: the Cancellation Gap can become small without improving alignment when sharpness is highly imbalanced across domains\. To mitigate this failure mode, we propose Cancellation Gap Minimization \(CGM\), which augments the objective with a squared coefficient\-of\-variation \($\\mathrm\{CV\}^2$\) regularizer to discourage sharpness imbalance\. Experiments show that CGM achieves the best average performance across standard domain generalization benchmarks among strong baselines\. Diagnostic analyses further confirm reduced domain\-wise sharpness and improved alignment of dominant Hessian eigenvectors\.

## InQuant: In\-Place Mixed\-Precision KV Cache Quantization via Saliency\-Aware Neighbor\-Slot Reuse

**Authors:** Zihan Chang; Shuibing He; Bo Zhou; Ping Chen; Siling Yang

**ID:** 155795 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2qVEX3Ujtr>) | [PDF](<https://openreview.net/pdf?id=2qVEX3Ujtr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155795>)

Key\-value \(KV\) caches are essential for efficient Large Language Model \(LLM\) inference, but their memory footprint grows linearly with context length and batch size\. Low\-bit KV\-cache quantization reduces this footprint, yet uniform quantization is vulnerable to high\-magnitude outlier channels, while outlier\-aware mixed\-precision methods often introduce extra buffers, indexing, or channel permutation that weakens their system\-level benefit\.  This paper presents InQuant, an in\-place mixed\-precision KV\-cache quantization method that preserves salient outlier channels without changing the physical 4\-bit packed layout\. The key observation is that selected low\-saliency channels near outliers can tolerate small approximation error; InQuant therefore reuses their storage slots to hold the extra 4\-bit nibble needed by 8\-bit outlier values\. To make this layout practical, InQuant combines sampling\-based channel saliency estimation, saliency\-aware neighbor\-slot reuse, stride\-based handling for adjacent outlier groups, and descriptor\-guided marker recovery during dequantization\. Across six LLMs and long\-context workloads, InQuant reaches a fixed 4\.0$\\times$ physical KV\-cache compression ratio, preserves accuracy close to strong mixed\-precision baselines, and reduces quantization/dequantization latency by 2\.2$\\times$\-\-3\.4$\\times$ compared with representative outlier\-aware methods\.

## Drive vs\. Decay: On the Training Dynamics of Joint\-Embedding Predictive Architectures

**Authors:** José Lucas De Melo Costa; Seong Woo Ahn; Fabrice Popineau; Arpad Rimmel; Bich\-Liên DOAN

**ID:** 152058 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VofFK184SY>) | [PDF](<https://openreview.net/pdf?id=VofFK184SY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152058>)

Joint\-Embedding Predictive Architectures \(JEPAs\) are prone to representation collapse, typically mitigated through empirical heuristics\. We develop an early\-training stability theory that unifies these heuristics\. Linearising the coupled JEPA gradient flow around the trivial fixed point reveals two competing effects: a driving force \($\\gamma$\) and a decay effect \($\\sigma$\)\. Under approximate spectral decoupling, a per\-mode stability ratio $\\mu\_i = \\gamma\_i / \\sigma\_i$ factorises into independent data\-side and predictor\-side terms and the count of unstable modes tracks the rank of representations that can emerge\. The framework predicts a phase boundary, which we confirm empirically across more than 800 Tabular\-JEPA configurations\. It also unifies predictor scaling, masking ratio, and EMA as distinct mechanisms for shifting $\\mu$\. Guided by this analysis, we introduce ResidualPred, a transformer predictor whose attention is biased toward the identity at initialisation; it improves both effective rank and downstream accuracy on tabular benchmarks and on I\-JEPA pretraining over CIFAR\-10, CIFAR\-100, and STL\-10\. Our framework connects empirical collapse\-avoidance heuristics to an explicit dynamical picture, yielding theory\-driven stabilizers\. Code is available as supplementary material\.

## Emergent Low\-Rank Training Dynamics in MLPs with Smooth Activations

**Authors:** Alec Xu; Can Yaras; Matthew Asato; Qing Qu; Laura Balzano

**ID:** 151342 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bFu308g2iB>) | [PDF](<https://openreview.net/pdf?id=bFu308g2iB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151342>)

Recent empirical studies have shown the training dynamics of  deep neural networks mostly occur within low\-dimensional subspaces\. While this has inspired new research in low\-rank training, compression, and adaptation, theoretical justification for these dynamics in nonlinear networks remains limited\. To address this gap, this paper analyzes the learning dynamics of multi\-layer perceptrons \(MLPs\) under gradient descent \(GD\)\. We demonstrate that the weight dynamics concentrate within invariant low\-dimensional subspaces throughout training\. Theoretically, we precisely characterize these invariant subspaces for two\-layer networks with smooth nonlinear activations, providing insight into their emergence\. Experimentally, we validate that this phenomenon extends well beyond our theoretical setting\. Leveraging these insights, we empirically show there exists a low\-rank MLP parameterization that, when initialized in the appropriate subspaces, nearly matches the performance of their fully\-parameterized counterparts on classification tasks\.

## Matrix\-Free Natural Gradient via Stochastic Truncated Metrics

**Authors:** Ke Sun

**ID:** 152694 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=R6odsq6K6r>) | [PDF](<https://openreview.net/pdf?id=R6odsq6K6r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152694>)

Natural gradient descent is a theoretical pillar of second\-order optimization for neural networks\. Existing implementations either rely on structural approximations of the curvature matrix or incur substantial computational and memory overhead\. Direct application remains difficult at deep\-network scale\. We build an optimizer based on an unbiased stochastic estimator of the Fisher information matrix\. It employs a truncated exponential moving average metric with damping, which we call the Stochastic Truncated Metric \(STM\), and is otherwise closely aligned with the original natural gradient\. This gives a matrix\-free parameter update with strictly $O\(Kd\)$ time and memory per step, where $K$ is a small constant\. It is applicable across network architectures without layer\-wise assumptions\. We bound the error induced by the finite\-memory truncation\. We show that STM is stable and efficient on vision and language benchmarks\.

## Optimal Risk Bounds of Stochastic Gradient Descent for Shallow ReLU Networks

**Authors:** Yuqing Liu; Yunwen Lei

**ID:** 151070 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dBGhQx4fCF>) | [PDF](<https://openreview.net/pdf?id=dBGhQx4fCF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151070>)

Recent work shows that gradient descent \(GD\) can achieve almost optimal risk bounds for shallow ReLU networks with a logarithmic width\. However, these discussions require $O\(n^2\)$ gradient computations to achieve this optimality, which is not appealing for modern machine learning problems with large sample size $n$\. In this paper, we significantly improve the existing gradient complexity by showing that stochastic gradient descent \(SGD\) can achieve similar risk bounds with $O\(n\)$ gradient computations for shallow ReLU networks with a logarithmic width\. As compared to GD, the analysis with SGD is more challenging as there are additional fluctuations incurred by the stochastic gradient noise along the optimization process\. With concentration inequalities to handle these fluctuations, we show that the entire SGD trajectory stays around its initialization point with high probability\. Under an NTK separability condition with margin $\\gamma$, we show SGD achieves near\-optimal risk bounds $\\widetilde\{O\}\(1/\(n\\gamma^2\)\)$ with a logarithmic width\.

## Zeroth\-Order Sharpness\-Aware Learning with Exponential Tilting

**Authors:** Xuchen Gong; Tian Li

**ID:** 155109 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8LXSBQlinu>) | [PDF](<https://openreview.net/pdf?id=8LXSBQlinu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155109>)

Classic zeroth\-order optimization approaches typically optimize for a smoothed version of the original function, i\.e\., the expected objective under randomly perturbed model parameters\. This can be interpreted as encouraging the averaged loss values in the perturbation set to be small\. However, popular sharpness\-aware minimization objectives typically focus on the largest loss within the neighborhood to arrive at flat minima more effectively\. In this work, we connect zeroth\-order optimization \(and its corresponding objectives\) with SAM approaches explicitly, through an exponential tilting objective that provides a smooth transition between the $\\texttt\{average\}$\- and the $\\texttt\{max\}$\-loss formulations\. We explore new zeroth\-order algorithms to solve a $\\textit\{soft\}$ SAM objective parameterized by a tilting parameter $t$\. We theoretically analyze the sharpness of the tilted objective under different perturbations\. Practically, our approach can be used as a gradient\-free and memory\-efficient alternative to SAM variants, and it achieves better generalization compared to vanilla zeroth\-order baselines on a wide range of models and downstream tasks, including classification, multiple choice QA, and language generation\.

## HALO: Homotopy\-Augmented Layer Optimization for Stable LLM Supervised Post\-training

**Authors:** Mengxiang Zhang; Lingyuan Liu

**ID:** 152138 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VEZb4LjBJS>) | [PDF](<https://openreview.net/pdf?id=VEZb4LjBJS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152138>)

Supervised post\-training, including supervised fine\-tuning \(SFT\) and knowledge distillation \(KD\), is essential for adapting large language models \(LLMs\) to specialized domains\. However, traditional supervised post\-training methods often suffer from catastrophic forgetting, training instability, and prohibitive computational costs\. While layer\-wise strategies have emerged as efficient alternatives, they introduce a representation bottleneck, where constrained updates in early stages limit feature diversity and impair final generalization\. To resolve these issues, we develop HALO \(Homotopy\-Augmented Layer Optimization\), a homotopy\-driven layer\-wise strategy for LLM post\-training\. By introducing a continuous homotopy parameter and a sequence of monotonically increasing auxiliary functions, we formulate the post\-training process as a continuous deformation of the optimization problem that progressively incorporates layers into the trainable set\. Specifically, HALO unfreezes the model from the output back to the input in a structured sequence\. We theoretically prove that this approach establishes a differentiable solution path, ensuring a stable transition from a restricted optimization state to a fully converged LLM\. Extensive experiments across diverse model families and sizes demonstrate that HALO consistently enhances performance and generalization\. Notably, HALO exhibits strong robustness in challenging scenarios, especially in low\-resource settings, while significantly reducing convergence time and iteration counts\. Our results position HALO as an effective and accessible framework for high\-performing LLM specialization\.

## RESIST: Resilient Decentralized Learning Using Consensus Gradient Descent

**Authors:** Cheng Fang; Rishabh Dixit; Waheed Bajwa; Mert Gurbuzbalaban

**ID:** 156789 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aNu8S9O6Ug>) | [PDF](<https://openreview.net/pdf?id=aNu8S9O6Ug>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156789>)

Empirical risk minimization \(ERM\) is a cornerstone of modern machine learning \(ML\), supported by advances in optimization theory that ensure efficient solutions with provable algorithmic convergence rates, which measure the speed at which optimization algorithms approach a solution, and statistical learning rates, which characterize how well the solution generalizes to unseen data\. Privacy, memory, computational, and communications constraints increasingly necessitate data collection, processing, and storage across network\-connected devices\. In many applications, these networks operate in decentralized settings where a central server cannot be assumed, requiring decentralized ML algorithms that are both efficient and resilient\. Decentralized learning, however, faces significant challenges, including an increased attack surface for adversarial interference during decentralized learning processes\. This paper focuses on the man\-in\-the\-middle \(MITM\) attack, wherein adversaries exploit communication vulnerabilities between devices to inject malicious updates during training, potentially causing models to deviate significantly from their intended ERM solutions\. To address this challenge, we propose RESIST \(Resilient dEcentralized learning using conSensus gradIent deScenT\), an optimization algorithm designed to be robust against adversarially compromised communication links, where transmitted information may be arbitrarily altered before being received\. RESIST uses a multistep consensus gradient descent framework with robust\-statistics\-based screening of neighbor messages\. It has a design parameter J that controls the frequency of local gradient computation: each local gradient update is preceded by J\-1 communication and robust aggregation rounds\. Compared with methods that perform both communication and a local gradient update at every iteration, RESIST with J&gt;2 uses fewer local gradient updates at the same communication budget, which is useful when local gradient computation is the dominant cost\. We establish geometric algorithmic convergence guarantees for strongly convex and Polyak–Łojasiewicz ERM problems, and sublinear and finite\-horizon guarantees for smooth nonconvex ERM problems\. For heterogeneous local objectives, these guarantees quantify neighborhoods for the relevant iterate, objective\-value, and stationarity errors\. In the strongly convex homogeneous case, convergence becomes exact\. We also establish statistical learning\-rate guarantees under common\-population independent and identically distributed sampling assumptions, including regimes in which the statistical error vanishes as the sample size grows\. Experimental results demonstrate the robustness of RESIST across diverse attack strategies, screening methods, and loss functions\. The J\-ablation experiments further show that larger J can improve convergence and reduce the number of local gradient updates at a fixed communication budget\.

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

## Asymmetric Scaling Laws from Sparse Features

**Authors:** John Sous; Michael Winer

**ID:** 149774 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nPOMra0Pqu>) | [PDF](<https://openreview.net/pdf?id=nPOMra0Pqu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149774>)

We introduce a model for neural scaling laws under sparse activations\. In the model, test loss is often dominated by rare coordinates that are never observed in the training input\. This mechanism induces a novel bottleneck absent from dense models\. We derive the asymptotic population loss in both the underparameterized and overparameterized regimes, and show that the loss exhibits a double\-descent peak near the interpolation threshold\-\-\-where the number of parameters is just sufficient to fit the training data\-\-\-resulting in a loss curve governed by two distinct scaling exponents\-\-\-one for the overparameterized regime and one for the underparameterized regime\-\-\-with a gap determined by the degree of sparsity\. Additionally, we derive a compute\-optimal frontier that favors increasing dataset size over model capacity under fixed compute budgets\. We also analyze gradient\-descent dynamics and identify a scaling law for the probability that fixed\-step gradient descent becomes unstable\. We further show that the sparsity\-induced effect persists under nonlinear activations\. Experiments validating the theory can be found at https://anonymous\.4open\.science/r/sparse\-scaling\-neurips2026\-3CDB/SparseScaling1\.ipynb\.

## An Equivariance Principle for Optimizer Design: Symmetry\-Compatible Updates for Embeddings, LM Heads, and MoE Routers

**Authors:** Tim Tsz\-Kit Lau; Weijie Su

**ID:** 154592 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CROYfMoFTK>) | [PDF](<https://openreview.net/pdf?id=CROYfMoFTK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154592>)

Most modern deep neural networks are trained with Adam and related coordinate\-wise adaptive optimizers, which are efficient but do not respect the natural matrix symmetries, geometry, and spectral structure of neural network parameters\. We develop a symmetry\-based principle for matrix\-gradient optimization, showing that orthogonally equivariant optimizers, especially spectral optimizers such as stochastic spectral descent, Muon, Scion, and polar gradient methods, are better aligned with matrix layers than coordinate\-wise updates\. We show that coordinate\-wise adaptivity breaks orthogonal equivariance, discards gradient spectral structure, and can be viewed as applying spectral updates to a pathological diagonal lifting of the parameter space\. Motivated by permutation and orthogonal symmetries, we derive symmetry\-compatible optimizers for different layer types, including linear layers, embedding and LM head matrices, and MoE routers\. This yields one\-sided spectral optimizers, row\-norm optimizers, and hybrid row\-norm/one\-sided\-spectral variants\. Pre\-training experiments on dense and sparse MoE language models, including Qwen3\-0\.6B\-style, Gemma 3 1B\-style, OLMoE\-1B\-7B\-style, and downsized gpt\-oss models, show that replacing AdamW on large vocabulary\-indexed matrices and router matrices with symmetry\-compatible optimizers consistently improves final validation loss and sometimes training stability\.

## Decomposing SGD Dynamics in Neural Networks: Teacher\-Induced Spikes and Variance Inflation

**Authors:** Samet Demir; Zafer Dogan

**ID:** 149560 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pCMDLPWcuw>) | [PDF](<https://openreview.net/pdf?id=pCMDLPWcuw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149560>)

We study two\-layer neural networks trained by stochastic gradient descent \(SGD\) on a multi\-index teacher model, focusing on how first\-layer parameters orthogonal to the teacher subspace affect generalization\. We decompose the first\-layer weights into a signal component aligned with the teacher and an orthogonal complement, and analyze their joint SGD dynamics together with the second layer in the proportional limit\. We show that although SGD updates to the complement are initially isotropic, the training dynamics induce teacher\-dependent spectral spikes in the complement Gram matrix\. This emergent anisotropy provides a concrete mechanism by which representation variance is amplified, and generalization degrades\. To isolate this effect, we introduce Decomposed Dynamics, an analytically tractable surrogate whose asymptotic test\-error dynamics coincide with those of SGD\. Using this surrogate, we characterize regimes in which freezing the orthogonal complement strictly improves generalization relative to training it, despite identical training error\. Finally, we show that the signal component rapidly aligns with the second\-layer weights, revealing strong cross\-layer coupling even in this shallow setting\. Together, our results provide a precise dynamical explanation for when and how feature learning outside the teacher subspace harms generalization\.

## Random\-Projection Tree Stein Variational Gradient Descent

**Authors:** Shishuo Guo; Xiaoyuan Cheng; Zhuo Sun

**ID:** 150026 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lKDCTsuzQm>) | [PDF](<https://openreview.net/pdf?id=lKDCTsuzQm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150026>)

Vanilla SVGD is known to have a computational cost of $\\mathcal\{O\}\(N^2\)$ per iteration\. In this work, we introduce Random\-Projection Tree Stein Variational Gradient Descent \(RP\-SVGD\) to alleviate this computational challenge\. This is achieved by restricting kernel interactions to spatially proximal particles clustered via a random projection tree, further reducing to a cost of $\\mathcal\{O\}\(N d\(\\log \(N/C\)\+C\)\)$, where $C$ is a hyperparameter representing the maximum leaf node capacity of the spanning tree\. To establish theoretical validity, we introduce a smoothed RP\-Tree kernel for any fixed tree realization and prove that it belongs to the Stein class of the target distribution, thereby ensuring the generation of valid gradient flows\. In addition, by considering the effective kernel as the expectation of random tree partitions, we verify that it preserves regularity along with other necessary conditions, which guarantee convergence under the approximate gradient flow framework\. Extensive experimental results demonstrate that RP\-SVGD tends to have competitive performance and significant speedups across various tasks\.

## Sliced Wasserstein Meets Quantum Optics: Provable Wavefunctions Tomography with Scarce Noisy Measurements

**Authors:** Takahiro Kajisa

**ID:** 152892 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PcQvqasEtZ>) | [PDF](<https://openreview.net/pdf?id=PcQvqasEtZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152892>)

Quantum state tomography of pure non\-Gaussian states is fundamentally limited by scarce and noisy data due to measurement\-induced collapse and experimental drift\. We introduce a novel reconstruction framework that parameterizes the wavefunction directly via an overparameterized neural network, trained using rank\-1 factored gradient descent\. We rigorously prove that this formulation's loss landscape is devoid of spurious local minima and strict saddles, guaranteeing all critical points are global minima\. By utilizing the max\-sliced Wasserstein\-1 distance, our loss perfectly maps to the structure of homodyne measurements, structurally preventing gradient vanishing in low\-shot regimes\. On noisy two\-mode cat states, our method achieves continuous fidelity improvements, successfully bypassing the noise\-floor plateaus that limit standard iterative maximum\-likelihood estimation\.

## Sharpness\-Aware Hybrid Model Learning for Architecture\-Agnostic Parameter Estimation

**Authors:** Naoya Takeishi

**ID:** 150246 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jeJb9vl2gZ>) | [PDF](<https://openreview.net/pdf?id=jeJb9vl2gZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150246>)

Hybrid modeling, the combination of machine learning models and scientific mathematical models, enables flexible and robust data\-driven prediction with partial interpretability\. However, the unknown parameters of the scientific model cannot necessarily be estimated properly, since the flexibility of the machine learning model might make the scientific model part effectively ignored in prediction\. We may avoid it by applying some regularization, but the formulation of such regularizers typically depends on model architectures and domain knowledge\. In this paper, we propose an architecture\-agnostic method to learn hybrid models while properly estimating the scientific parameters\. The idea is to use the flatness of loss minima to achieve model simplicity, based upon the Occam's razor principle\. We employ the idea of sharpness\-aware minimization and adapt it to the hybrid modeling setting\. Numerical experiments demonstrate the effectiveness of the SAM\-based hybrid model learning for scientific parameter estimation\.

## High dimensional theory of two\-phase optimizers

**Authors:** Atish Agarwala

**ID:** 149062 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t9Qd8Imsn2>) | [PDF](<https://openreview.net/pdf?id=t9Qd8Imsn2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149062>)

The trend towards larger training setups has brought a renewed interest in partially asynchronous two\-phase optimizers which optimize locally and then synchronize across workers\. Additionally, recent work suggests that the one\-worker version of one of these algorithms, DiLoCo, shows promising results as a \(synchronous\) optimizer\. Motivated by these studies we present an analysis of LA\-DiLoCo, a simple member of the DiLoCo family, on a high\-dimensional linear regression problem\. We show that the one\-worker variant, LA, provides a different tradeoff between signal and noise than SGD, which is beneficial in many scenarios\. We also show that the multi\-worker version generates more noise than the single worker version, but that this additional noise generation can be ameliorated by appropriate choice of hyperparameters\. We conclude with an analysis of SLA \-\-\- LA with momentum \-\-\- and show that stacking two momentum operators gives an opportunity for acceleration via a non\-linear transformation of the \`\`effective'' Hessian spectrum, which is maximized for Nesterov momentum\. Altogether our results show that two\-phase optimizers represent a fruitful new paradigm for understanding and improving training algorithms\.

## Attention Sinks as Spectral Spikes: A Mechanism Analysis of Gated Attention

**Authors:** Seojin Kim; Yehjin Shin; Noseong Park

**ID:** 153587 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KJKRoPhwQg>) | [PDF](<https://openreview.net/pdf?id=KJKRoPhwQg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153587>)

Transformer attention exhibits attention sinks, where a small subset of source tokens absorbs disproportionate attention mass across layers\. Recent work shows that post\-SDPA output gating strongly reduces attention\-sink behavior, while separate studies link attention sinks to gradient sinks and massive activations through backward training dynamics\. Yet how the same gate affects forward sink structure, backward gradient concentration, and training\-time representation signatures remains unclear\. We address this gap by formulating attention sinks as sink\-induced low\-rank modes in token\-space covariance, with directions aligned to high\-mass attention columns\. Under this view, post\-SDPA gating acts as a mode\-dependent contraction: it attenuates sink\-induced spectral energy in the forward pass and locally reduces value\-path gradients routed through sink columns in the backward pass\. Empirically, random\-matrix diagnostics show that gating reduces outlier mass, weakens sink\-subspace alignment, and increases effective rank, while backward analyses show active\-gate attenuation of first\-token value gradients\. Training\-time diagnostics further show that gating suppresses the co\-emergence of attention concentration, value\-gradient amplification, and representation dominance\.

## Exact\-Form Regret and Conservative Correlated Equilibria

**Authors:** Ashkan Soleymani; Patrick Jaillet; Gabriele Farina

**ID:** 153876 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=I6C1jbK29Z>) | [PDF](<https://openreview.net/pdf?id=I6C1jbK29Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153876>)

Gradient descent is usually studied through external regret, but recent work shows that it controls richer deviations through infinitesimal vector\-field guarantees \\citep\{ahunbay2024first\}, semicoarse constraints \\citep\{ahunbay2025semicoarse\}, and weakly convex proximal maps \\citep\{cai2025proximal\}\.  We identify the finite\-deviation invariant behind these guarantees\.  A feasible deviation \\\(\\phi\\colon K\\to K\\\) induces the displacement field \\\(\\Dphi\(\\xvec\)=\\xvec\-\\phi\(\\xvec\)\\\)\.  Online gradient descent has \\\(O\(\\sqrt T\)\\\) regret against every feasible deviation with exact displacement, \\\(\\Dphi=\\nabla\\Psi\\\) for a potential function $\\Psi$, even when \\\(\\Psi\\\) is nonconvex\.  Feasibility handles the projection boundary term, and exactness makes the potential telescope\.  The condition is sharp for smooth fields on simply connected domains, since any nonzero circulation along a feasible loop can be turned into a bounded cyclic adversary that forces linear regret\.  Semicoarse affine deviations are the linear\-quadratic slice of this class, and proximal deviations are the Moreau\-envelope slice\.  The exact\-form class strictly contains weakly convex proximal deviations\.  For mirror descent, exactness is measured in the mirror geometry through the one\-form \\\(\\Dphi\(\\xvec\)^\{\\transpose\}\\dd\\nabla R\(\\xvec\)\\\), which subsumes Bregman proximal regret and includes multiplicative deviations for multiplicative\-weight updates\.  In convex games, no\-regret with respect to exact\-form deviations yields conservative correlated equilibrium, refining coarse and proximal correlated equilibrium\.

## Characterizing the Edge of Stability in Variational Training Without Priors

**Authors:** Juraj Marusic; Jonathan Wenger; Beau Coker; John Cunningham

**ID:** 153245 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mfhyva9QO7>) | [PDF](<https://openreview.net/pdf?id=Mfhyva9QO7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153245>)

Variational approaches in deep learning promise to deliver improved uncertainty quantification and out\-of\-distribution generalization by inferring a distribution over weights, regularized by a divergence to a chosen prior\. However, prior elicitation presents a significant challenge in deep learning, resulting in the common practice of significantly downweighting the regularization term in the variational objective\. Recently, it was proposed to train solely via the expected loss by relying on implicit regularization from the optimizer, rather than explicit regularization from the divergence to the prior\. While this approach largely sidesteps the issue of prior elicitation, current theory lacks an understanding of how key optimization hyperparameters impact the implicit regularization\. Here, we theoretically and empirically demonstrate that larger learning rates and fewer parameter samples lead to flatter minima of the loss landscape, which are known to generalize better\. We show that training on the expected loss operates at a modified edge of stability, characterized by the signal\-to\-noise ratio of the gradient estimates and the number of Monte Carlo samples\. Experiments on out\-of\-distribution benchmark datasets confirm the practical significance of the theoretical results\.

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

## AdaCubic: An Adaptive Cubic Regularization Optimizer for Deep Learning

**Authors:** Ioannis Tsingalis; Constantine Kotropoulos; Corentin Briat

**ID:** 156754 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156754>)

A novel regularization technique, AdaCubic, is proposed that adapts the weight of the cubic term\. The heart of AdaCubic is an auxiliary optimization problem with cubic constraints that dynamically adjusts the weight of the cubic term in Newton’s cubic regularized method\. We use Hutchinson’s method to approximate the Hessian matrix, thereby reducing computational cost\. We demonstrate that AdaCubic inherits the cubically regularized Newton method’s local convergence guarantees\. Our experiments in Computer Vision, Natural Language Processing, and Signal Processing tasks demonstrate that AdaCubic outperforms or competes with several widely used optimizers\. Unlike other adaptive algorithms that require hyperparameter fine\-tuning, AdaCubic is evaluated with a fixed set of hyperparameters, rendering it a highly attractive optimizer in settings where fine\-tuning is infeasible\. This makes AdaCubic an attractive option for researchers and practitioners alike\. To our knowledge, AdaCubic is the first optimizer to leverage cubic regularization in scalable deep learning applications\.

## Positional Encoding Is All You Need For Scalable Equivariance Constraint Relaxation

**Authors:** Hagay Michaeli; Haggai Maron; Daniel Soudry

**ID:** 151164 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cYC8wdYHgB>) | [PDF](<https://openreview.net/pdf?id=cYC8wdYHgB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151164>)

Equivariant neural networks incorporate known symmetries of the data, such as permutations, rotations, or translations, directly into their architecture, often improving sample efficiency and generalization\.  However, strict equivariance can make optimization difficult, for example, when the data only approximately satisfy the assumed symmetry, or when the equivariance constraints induce a challenging loss landscape\.  Recent studies have shown that relaxing equivariance during training by introducing non\-equivariant dense linear layers can ease optimization in such cases and improve the performance of the resulting strictly equivariant model \(after removing the relaxation layers at test time\)\. While effective, this approach incurs a significant computational overhead, limiting its applicability in scalable architectures\.  In this work, we propose a more efficient constraint\-relaxation method based on positional encoding \(PE\)\.  Our framework injects a positional encoding with learnable scale that breaks the model’s original symmetry\. This positional signal is gradually annealed to zero, recovering the original equivariant model by the end of training\. Empirically, we demonstrate significant improvements for translational and rotational equivariant models with only marginal compute and memory overhead\.

## RoSA: Rotational Sparse Adaptation for Memory\-Efficient Fine\-Tuning

**Authors:** Muhammad Azeem Lodhi; chao zhou; Rebekka Burkholz

**ID:** 152759 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QZlXiCc3kK>) | [PDF](<https://openreview.net/pdf?id=QZlXiCc3kK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152759>)

Parameter\-efficient fine\-tuning \(PEFT\) reduces the cost of adapting foundation models by focusing training on a small parameter subset\. Complementary to this idea, we introduce RoSA \(Rotational Sparse Adaptation\), which narrows adaptation to a subset of layers at a time\. RoSA freezes lower layers close to the input throughout training and rotates a trainable block over later layers, consecutively increasing the number of frozen layers close to the input\. This design reduces optimizer\-state memory, shortens backpropagation, and even forward propagation if activations at the last frozen layer are cached\. Because RoSA is orthogonal to the choice of trainable parameterization, it can be combined with PEFT methods or sparse optimizers inside each active block\. Experiments across multiple LLM architectures and tasks show that RoSA reduces peak memory while maintaining strong fine\-tuning performance\.

## Muon Dynamics as a Spectral Wasserstein Flow

**Authors:** Gabriel Peyré

**ID:** 149106 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sqPfZgXVES>) | [PDF](<https://openreview.net/pdf?id=sqPfZgXVES>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149106>)

Gradient normalization stabilizes deep\-learning optimization, and spectral normalizations are especially natural for matrix\-shaped parameter blocks; Muon is the motivating example\. We study an idealized deterministic, continuous\-time, vanishing\-momentum version of this idea in the mean\-field regime, where wide models are represented by probability measures on parameter space\. Starting from normalized matrix flows, we introduce Spectral Wasserstein distances indexed by norms $\\gamma$ on positive semidefinite matrices: the trace norm gives classical $\\Wtwo$, the operator norm gives the Muon geometry, and Schatten norms interpolate between them\. We develop the static Kantorovich formulation, a max\-min robust\-cost representation, Gaussian reductions extending the Bures formula, and for monotone norms, prove equivalence with a Benamou\-\-Brenier formulation\. This yields a gradient\-flow interpretation of the mean\-field normalized training dynamics\. We illustrate these findings by numerical experiments on MMD flows, Gaussian reductions, two\-layer ReLU models, and shallow attention\.

## Position: Lottery Tickets Do Not Explain Overparameterization\. How About Escape Dimensions?

**Authors:** Flavio Martinelli; Johanni Brea; Wulfram Gerstner

**ID:** 140102 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CaVlKu3gPo>) | [PDF](<https://openreview.net/pdf?id=CaVlKu3gPo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140102>)

Lotteries and tickets are often used as a didactical analogy to explain the success of overparameterized neural networks: “larger networks succeed because they more likely contain a well\-initialized subnetwork that can learn the task in isolation, much like buying more tickets increases the chances of winning a lottery\.” This explanation is intuitive but misleading:  it suggests that subnetworks can be treated in isolation from the rest of the network\.  Following this reasoning leads to interpreting learning in wide networks as a multi\-start optimization process, where gradient descent simply conducts a parallel search over subnetworks\. We argue that this view is flawed since, among other reasons, winning tickets can be made to fail by perturbing the rest of the network\. We put forward a more accurate intuitive picture for the success of overparameterization based on the geometry of loss landscapes:  increasing width expands the set of available dimensions for optimization, making it easier to escape bad local minima\.  Moreover, as width grows, bad minima become increasingly rare relative to good minima\. As the field grows mature, it is important to refine the analogies we use to explain foundational phenomena, such as the apparent redundancy of large networks, reconciling practitioners' intuitions with modern theoretical insights\.

## Optimal scaling laws in learning hierarchical multi\-index models

**Authors:** Leonardo Defilippis; Florent Krzakala; Bruno Loureiro; Antoine Maillard

**ID:** 149630 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=odXDV3exT8>) | [PDF](<https://openreview.net/pdf?id=odXDV3exT8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149630>)

In this work, we provide a sharp theory of scaling laws for two\-layer neural networks trained on a class of hierarchical multi\-index targets, in a genuinely representation\-limited regime\. We derive exact information\-theoretic scaling laws for subspace recovery and prediction error, revealing how the hierarchical features of the target are sequentially learned through a cascade of phase transitions\. We further show that these optimal rates are achieved by a simple, target\-agnostic spectral estimator, which can be interpreted as the small learning\-rate limit of gradient descent on the first\-layer weights\. Once an adapted representation is identified, the readout can be learned statistically optimally, using an efficient procedure\. As a consequence, we provide a unified and rigorous explanation of scaling laws, plateau phenomena, and spectral structure in shallow neural networks trained on such hierarchical targets\.

## Disentangling the Good From the Bad: Quantization\-Induced Flips Are Not Random

**Authors:** Aymen Bouguerra; Alexandra Gomez\-Villa; Chokri Mraidha; Fabio Arnez

**ID:** 151104 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cxWrTgqwLx>) | [PDF](<https://openreview.net/pdf?id=cxWrTgqwLx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151104>)

Model quantization has advanced tremendously in recent years, producing models that require a fraction of the compute while maintaining baseline accuracy and creating the illusion of lossless compression\. Beneath the surface, however, model behavior undergoes severe shifts that simple global accuracy fails to capture\. Notably, quantized models experience a high rate of "flips": individual predictions that change from correct to incorrect \(bad flips\-CI\) and vice versa \(good flips\-IC\)\. Although overall accuracy remains stable, these changes degrade model reliability and introduce unforeseen safety risks\. Current literature largely attributes these flips to random rounding noise, a perspective that ignores the specific precision constraints imposed by quantization with or without training\. In this paper, we show that flips are driven by quantization's implicit regularization, low\-pass filtering, and exacerbated spectral bias\. By analyzing these effects via Singular Value Decomposition \(SVD\), we leverage the model's low\-to\-high rank internal disagreement to disentangle good flips from bad ones\. Building on this insight, we introduce post\-hoc approaches to selectively preserve the former while correcting the latter, and we validate the universality of our disentanglement through extensive experiments spanning Post\-Training Quantization \(PTQ\) to Quantization\-Aware Training \(QAT\) and across vision, language, and multi\-modal models\. With this work, we aim not only to restore the quantized model's hidden reliability degradation but also to elevate it beyond the accuracy ceiling of its full\-precision counterpart\.

## Bug or Feature$^2$: Weight Drift, Activation Sparsity, and Spikes

**Authors:** Egor Shvetsov; Aleksandr Serkov; Shokorov Viacheslav; Redko Dmitry; Vladislav Goloshchapov; Evgeny Burnaev

**ID:** 149709 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o1pategtiw>) | [PDF](<https://openreview.net/pdf?id=o1pategtiw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149709>)

The design of modern neural architectures has converged through incremental empirical choices, yet the mechanisms governing their training dynamics remain only partially understood\. We identify and analyze a negative weight drift induced by the interaction between standard losses and positively biased activation functions\. We prove that under MSE or cross\-entropy loss, the gradient with respect to positive pre\-activations is non\-negative in expectation at initialization, driving downstream weights toward negative values during early training\. The drift is intrinsic to optimization rather than data, and persists across architectures \(MLP, ResNet, ViT, GPT\-nano, MP\-SENe\) and asymmetric activation functions \(ReLU, GELU, SiLU\)\. Coupled with ReLU, weight drift produces activation sparsity reaching up to 90\\% in GPT\-nano\. We characterize the sparsity–accuracy tradeoff across 79 configurations and identify a sharp accuracy cliff above $\\sim$70\\% activation sparsity\. While ReLU$^2$ achieves a good sparsity–accuracy tradeoff, it pathologically amplifies identified activation spikes in intermediate transformer layers\. Clipping resolves this while preserving the representational benefits of squaring: clipped ReLU$^2$ outperforms its unclipped version, and GELU$^2$ achieves the lowest validation loss on GPT\-nano\.

## Jacobian Descent for Multi\-Objective Optimization

**Authors:** Pierre Quinton; Valérian Rey

**ID:** 154209 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FNzk96rWjq>) | [PDF](<https://openreview.net/pdf?id=FNzk96rWjq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154209>)

Many optimization problems require balancing multiple conflicting objectives\. To generalize gradient descent, which is limited to single\-objective optimization, we introduce Jacobian descent \(JD\) and its stochastic variants\. This algorithm iteratively updates parameters using the Jacobian matrix of a vector\-valued objective function, in which each row is the gradient of an individual objective\. While several methods to combine gradients already exist in the literature, they generally struggle when the objectives conflict\. In contrast, we propose projecting gradients to fully resolve conflict\. We prove convergence to the Pareto front in the smooth convex case with this approach, a stronger guarantee than the usual convergence to a weakly Pareto stationary point\. Our method also enables instance\-wise risk minimization \(IWRM\), a novel learning paradigm in which the loss of each training example is considered a separate objective\. Early experimentation on image classification shows promising results for IWRM\. Lastly, we provide an efficient implementation of JD using the Gramian of the Jacobian matrix to drastically reduce memory requirements\.

## Understanding axial attention in TSFMs through single location regression

**Authors:** Andrei Pantea; Aymeric Dieuleveut

**ID:** 153180 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NCYlMi9USZ>) | [PDF](<https://openreview.net/pdf?id=NCYlMi9USZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153180>)

Recent advances in Time Series Foundation Models \(TSFMs\) increasingly rely on axial attention mechanisms, but despite their empirical success, the theoretical properties of axial attention remain largely unexplored\. To bridge this gap, we extend the Single Location Regression framework introduced in Marion et al\. \[2025\] to 2D structured data, in order to study sparse information settings where a target depends on a small number of tokens\. We formulate an analytically tractable axial attention\-type predictor and rigorously analyze its statistical properties and training dynamics\. We prove that under a specific asymptotic regime and with knowledge of the underlying oracle parameters, our predictor achieves Bayes optimality, whereas a class of semi\-linear simplifications strictly fails to do so, underlining the role of the inner non\-linearity\. We prove that for a specific temperature scaling, Projected Gradient Descent converges globally to the optimal oracle parameters\. Extensive numerical experiments validate our theoretical findings and highlight the critical role of inverse temperature scheduling in empirical convergence\.

## Fast Gauss\-Newton for Multiclass Cross\-Entropy

**Authors:** Mikalai Korbit; Mario Zanon

**ID:** 153523 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KiUlDWxNTi>) | [PDF](<https://openreview.net/pdf?id=KiUlDWxNTi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153523>)

In multiclass softmax cross\-entropy, the full generalized Gauss\-Newton \(GGN\) curvature couples all output logits through the softmax covariance, making second\-order updates harder to scale as the number of classes grows\. We show that the standard multiclass GGN can be decomposed exactly into a rank\-one true\-vs\-rest term and a positive semidefinite within\-competitor covariance term\. Fast Gauss\-Newton \(FGN\) retains the first term and drops the second, yielding a positive semidefinite under\-approximation of the multiclass GGN that is exact for binary classification\. The derivation uses an exact true\-vs\-rest scalar\-margin representation of softmax cross\-entropy: the loss and gradient are unchanged, and the approximation enters only at the curvature level\. Exploiting the FGN curvature structure, the damped update can be written as an equivalent whitened row\-space system with one row per mini\-batch example\. We solve this system matrix\-free by conjugate gradient using Jacobian\-vector and vector\-Jacobian products of the scalar margin map\. Targeted mechanism experiments and a fixed\-feature head evaluation support the predictions from the decomposition: FGN stays closest to the full softmax GGN when competitor mass is concentrated or damping is large, and deviates as the dropped within\-competitor covariance grows\.

## Gibbs Gradient Descent: A Langevin Approach to Optimization

**Authors:** Oussama Zekri; Anna Korba; Nicolas Boulle

**ID:** 153445 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LFrMGs6Z6P>) | [PDF](<https://openreview.net/pdf?id=LFrMGs6Z6P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153445>)

Many modern generative modeling and inference methods require optimizing objectives defined on parametric probability distributions\. This leads to costly nested procedures, where each gradient step in first\-order  optimization techniques requires approximate sampling from the iterate parametric distribution\. Gibbs gradient descent \(GGD\) was recently proposed as an efficient \`\`single\-loop'' alternative by coupling sampling and optimization dynamics \(Marion et al\., 2025\)\. However, its theoretical understanding remains limited, especially in the presence of particle approximations\. This work provides a comprehensive analysis of GGD for the ideal infinite\-particle system and its finite\-particle approximation, explicitly quantifying the effect of particle noise via a sharp persistent $\\mathcal\{O\}\(1/n\)$ variance term\. We then identify a finite\-observable structural class for the Gibbs gradient, which contains our motivating examples, and introduce a control\-variate version of GGD that reduces the particle\-induced variance at the observable level\. Our results reveal a fundamental trade\-off between optimization and sampling, driven by the stochastic error induced by finite particle approximations\.

## Implicit Bias of Mirror Flow in Homogeneous Neural Networks: Sparse and Dense Feature Learning

**Authors:** Tom Jacobs; Guido Montufar

**ID:** 149406 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qIshuUKij9>) | [PDF](<https://openreview.net/pdf?id=qIshuUKij9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149406>)

We study the max\-margin solutions reached by mirror flow in deep neural networks with homogeneous activation functions\.      Extend classical results on gradient flow, we derive a novel balance equation for mirror flow from convex duality, enabling a characterization of the horizon function governing the induced margin\. We further establish max\-margin characterizations together with convergence rates and norm growth estimates\. Finally, we support our theory through experiments on synthetic datasets and standard vision tasks\. Concretely, we show that: \(1\) distinct non\-homogeneous mirror maps can induce the same max\-margin solution; \(2\) convergence can be extremely slow, including exponentially slow regimes; and \(3\) although all considered mirror maps exhibit feature learning, they can produce markedly different representations, ranging from sparse to dense neuron activations\. Together, these results provide a unified perspective on sparse and dense feature learning in homogeneous neural networks, highlighting how mirror maps shape both optimization dynamics and the geometry of the learned classifiers\.

## EM\-NeSy: Expectation Maximization for Neurosymbolic Learning

**Authors:** Annegret Seibt; Luc De Raedt; Giuseppe Marra

**ID:** 149935 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m5H4yh6pI7>) | [PDF](<https://openreview.net/pdf?id=m5H4yh6pI7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149935>)

Neurosymbolic \(NeSy\) models integrate neural networks and symbolic reasoning for robust and interpretable AI\. State\-of\-the\-art NeSy models require that the symbolic component is expressed in a differentiable way, often complicating the use of approximate inference\. We propose EM\-NeSy which casts probabilistic NeSy learning as an instance of the Expectation\-Maximization \(EM\) algorithm\. In the expectation step, we compute the posterior over the neurally predicted symbols conditioned on the label via probabilistic inference\. In the maximization step, we update the neural parameters based on this posterior using gradient descent only through the neural component\. This formulation unlocks the full potential of the EM algorithm for NeSy learning\. It allows NeSy to extend naturally to approximate reasoning without any additional modifications or differentiability requirements of the symbolic component\. Furthermore, it recovers the standard end\-to\-end gradient\-based NeSy setting under exact inference\. Our experimental results demonstrate the scalability and computational efficiency of EM\-NeSy\.

## Geometric Factual Recall in Transformers

**Authors:** Shauli Ravfogel; Gilad Yehudai; Joan Bruna; Alberto Bietti

**ID:** 155768 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=34a614De3N>) | [PDF](<https://openreview.net/pdf?id=34a614De3N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155768>)

How do transformer language models memorize factual associations? A common view casts internal weight matrices as associative memories over pairs of embeddings, requiring parameter counts that scale linearly with the number of facts\. We develop a theoretical and empirical account of an alternative, \\emph\{geometric\} form of memorization in which learned embeddings encode relational structure directly, and the MLP plays a qualitatively different role\. In a controlled setting where a single\-layer transformer must memorize random bijections from subjects to a shared attribute set, we prove that a logarithmic embedding dimension suffices: subject embeddings encode \\emph\{linear superpositions\} of their associated attribute vectors, and a small MLP acts as a relation\-conditioned selector that extracts the relevant attribute via ReLU gating, and not as an associative key\-value mapping\. We extend these results to the multi\-hop setting\-\-\-chains of relational queries such as \`\`Who is the mother of the wife of $x$?''\-\-\-providing constructions with and without chain\-of\-thought that exhibit a provable capacity\-\-depth tradeoff, complemented by a matching information\-theoretic lower bound\. Empirically, gradient descent discovers solutions with precisely the predicted structure\. Once trained, the MLP transfers zero\-shot to entirely new bijections when subject embeddings are appropriately re\-initialized, revealing that it has learned a generic selection mechanism rather than memorized any particular set of facts\.

## Generalized Smooth Stochastic Variational Inequalities: Almost Sure Convergence and Convergence Rates

**Authors:** Daniil Vankov; Angelia Nedich; Lalitha Sankar

**ID:** 156744 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EjqSpbUBWU>) | [PDF](<https://openreview.net/pdf?id=EjqSpbUBWU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156744>)

This paper focuses on solving a stochastic variational inequality \(SVI\) problem under relaxed smoothness assumption for a class of structured non\-monotone operators\. The SVI problem has attracted significant interest in the machine learning community due to its immediate application to adversarial training and multi\-agent reinforcement learning\. In many such applications, the resulting operators do not satisfy the smoothness assumption\. To address this issue, we focus on a weaker generalized smoothness assumption called $\\alpha$\-symmetric\. Under p\-quasi sharpness and $\\alpha$\-symmetric assumptions on the operator, we study clipped projection \(gradient descent\-ascent\) and clipped Korpelevich \(extragradient\) methods\. For these clipped methods, we provide the first almost\-sure convergence results without making any assumptions on the boundedness of either the stochastic operator or the stochastic samples\. We also provide the first in\-expectation unbiased convergence rate results for these methods under a relaxed smoothness assumption for $\\alpha \\leq 1/2$\.

## On the Parallel Optimality of Exponentiated Gradient Descent

**Authors:** Xin Jennifer Chen; Andrei Graur; Aaron Sidford

**ID:** 152281 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UFum06hNky>) | [PDF](<https://openreview.net/pdf?id=UFum06hNky>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152281>)

A classic result in learning and optimization theory is that exponentiated gradient descent \(EG\) or the multiplicative weight update method computes an $\\\\epsilon$\-approximate minimizer of an $\\\\ell\_1$\-Lipschitz function over the $d$\-dimensional probability simplex $\\\\Delta\_d :=\\\\\{x \\in \\\\mathbb\{R\}^d\_\{\\\\geq0\}:\\\\sum\_\{i\\in\[d\]\}x\_i=1\\\\\}$ with $\\\\tilde\{O\}\(\\epsilon^\{\-2\}\)$ queries to a first\-order oracle\. We investigate whether there are improved parallel algorithms for this fundamental problem\. We show that, up to logarithmic factors, the answer is negative for $\\\\epsilon=\\\\tilde \\\\Omega\(d^\{\-1/6\}\)$ \- any randomized algorithm that makes $O\(\\\\mathrm\{poly\}\(d\)\)$ subgradient queries per round requires $\\\\tilde\{\\\\Omega\}\(1/\\\\epsilon^2\)$ rounds to output an $\\epsilon$\-optimal point with constant success probability\. Moreover, to obtain this result we provide an analogous characterization of the parallel complexity of minimizing a $\\ell\_1$\-Lipschitz convex function over the unit $\\\\ell\_1$ ball\. Previous lower bounds for non\-constant $\\\\epsilon$ for this $\\\\ell\_1$\-Lipschitz convex optimization problem either made additional assumptions on the domain, or instead attained a bound of $\\\\Omega\(\\\\epsilon^\{\-2/3\}\)$ \[DG19\]\.

## Towards Understanding Momentum Acceleration in River\-Valley Loss Landscape

**Authors:** Miao Lu; zeyu bian; Kaiyue Wen; Beining Wu; Siyu Chen; Tianhao Wang; Zhiyuan Li

**ID:** 152627 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RhiQnfDg2m>) | [PDF](<https://openreview.net/pdf?id=RhiQnfDg2m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152627>)

Momentum is a critical and ubiquitous component of modern optimizers, while the role of momentum remains unclear beyond restricted settings, especially in optimization for large\-scale neural networks\. Recent studies suggest that the highly non\-convex loss landscape for large language models exhibits certain “river\-valley” structure: a low\-loss manifold \(the river\) bordered by sharp, high\-loss directions \(the valley\), where the essential optimization progress is determined primarily by the progress along the river in the long run\. Motivated by this structure, in this work, we investigate the role of heavy\-ball momentum in such an emerging setting\. Specifically, we analyze gradient descent with heavy\-ball momentum and show that compared to vanilla gradient descent, momentum can accelerate the progress along the river by enabling use of a substantially larger learning rate\. In fact, momentum acts as a stabilizer in the presence of oscillations caused by an aggressive choice of learning rate, which the vanilla gradient descent cannot tolerate\. We validate the insights with experiments on synthetic functions and language model training, offering practical guidance for tuning learning rate and momentum parameters\.

## Local linear convergence of gradient methods for overparameterized Gaussian mixtures

**Authors:** Jingxing Wang; Vasileios Charisopoulos; Maryam Fazel

**ID:** 151210 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c9FX4sWgTb>) | [PDF](<https://openreview.net/pdf?id=c9FX4sWgTb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151210>)

We study the problem of learning Gaussian mixture models under overparameterization\. Prior work has shown that, while overparameterization is essential for avoiding spurious local optima and enables global recovery of the ground\-truth model using the gradient\-EM algorithm, it can dramatically slow the local rate of convergence\. Under certain assumptions on the mixture weights, we show that a standard divergence measure minimized by statistical learning procedures possesses a manifold of slow growth on which the well\-known Polyak stepsize reduces the loss geometrically\. We then design a gradient\-based method that converges to minimizers at a locally linear rate\. Additionally, we show that our method converges to nearly optimal solutions—up to a natural misspecification threshold—for mixtures with arbitrary weights\. At a high level, the method alternates between several “short” gradient descent steps that approach the manifold and “long” Polyak steps that contract the distance to minimizers\. Our results suggest that slow convergence is not an intrinsic challenge of overparameterization, but can be overcome by exploiting the favorable structure of the loss landscape\.

## Move on Muon : A Hamiltonian probability gradient flow perspective of Muon optimizer

**Authors:** Aratrika Mustafi; Soumya Mukherjee; Bharath Sriperumbudur

**ID:** 150114 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kausjLR0DW>) | [PDF](<https://openreview.net/pdf?id=kausjLR0DW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150114>)

We develop a gradient flow on the space of probability measures defined on matrix\-valued parameters induced by regularized Muon, an analytically smoothed version of the idealized Muon optimizer\. The key observation is that the regularized orthogonalization map is the gradient of a smooth Fenchel\-dual smoothing of the nuclear norm\. This identifies the \(regularized\) Muon update as a mirror/prox step in the update variable, with momentum acting as the dual coordinate\. We use this structure to lift Muon from a single matrix parameter to finite\-particle probability objectives of the form $J\(\\rho\)=R\\left\(\\int F d \\rho\\right\)$, a setting motivated by mean\-field descriptions of neural\-network training, and derive the inertial continuous\-time limit\. Using this structure, we derive the finite\-particle continuous\-time limit under the inertial scaling of step size and momentum, and then pass to a phase\-space mean\-field equation over probability laws on parameter\-momentum pairs\. The resulting flow can be shown to be a damped Hamiltonian probability dynamics whose kinetic energy is induced by the regularized Muon mirror potential\. We prove an exact Hamiltonian dissipation identity, showing that the Hamiltonian energy decreases monotonically\- leading to the descent of the target objective functional\. Under appropriate gradient dominance assumptions, we obtain continuous and discrete time exponential convergence rates\. We also study the well\-posedness of the mean field limit equation and establish propagation of chaos guarantees for the interacting particle system\. Finally, we extend the formulation to Hilbert\-valued feature maps on product matrix spaces, yielding a blockwise Muon probability flow applicable to smooth transformer mixture\-of\-experts models\.

## No Coin Left Behind: Maximizing Strategic Surplus Against No\-Regret Dynamics

**Authors:** Yiheng Su; Emmanouil\-Vasileios Vlatakis\-Gkaragkounis

**ID:** 155286 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6hTXsq6OkI>) | [PDF](<https://openreview.net/pdf?id=6hTXsq6OkI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155286>)

We investigate the \*\*strategic surplus\*\* obtainable against a \*\*Follow\-the\-Regularized\-Leader \(FTRL\)\*\* learner with constant step size $\\eta$ in $n \\times m$ two\-player zero\-sum games played over $T$ rounds against a clairvoyant optimizer\. In contrast with prior analysis, we show that the extraction of such regret\-scale surplus is an inherent feature of the FTRL family, rather than an artifact of specific instantiations\. First, for a fixed max\-min optimizer, we establish a sweeping law of order $\\Omega\(N/\\eta\)$, proving that utility surplus scales with the number of the learner's suboptimal actions $N$ and vanishes in their absence\. Second, for an alternating optimizer, a surplus of $\\Omega\(\\eta T/\\text\{poly\}\(n,m\)\)$ can be guaranteed regardless of the equilibrium structure, with high probability, in random games\. Our analysis uncovers a sharp geometric dichotomy: \*\*non\-steep\*\* regularizers allow the optimizer to realize the maximal transient surplus via finite\-time elimination of suboptimal actions, whereas \*\*steep\*\* regularizers introduce a vanishing tail correction that can delay surplus saturation\. Finally, we discuss whether this leverage persists under bilateral payoff uncertainty and propose a susceptibility measure quantifying which regularizers are most vulnerable to learner\-aware strategic steering\.

## Tail Wags the Model: Generalization and Membership Privacy Trade\-offs of Sharpness\-Aware Minimization

**Authors:** Young In Kim; Rajiv Khanna

**ID:** 151069 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dBVxJkzvkA>) | [PDF](<https://openreview.net/pdf?id=dBVxJkzvkA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151069>)

Sharpness\-Aware Minimization \(SAM\) has been reported to improve generalization while leaking more membership privacy than SGD\. In this paper, we aim to theoretically explain this phenomenon under long\-tailed distributions\. In long\-tailed settings, typical examples are explained by dominant majority features, whereas atypical tail examples depend on weaker minority features\. We theoretically show that SAM moves farther than gradient descent along a minority\-preserving trajectory under an overparameterized model\. This bias improves the embedding\-space separation between typical and atypical subclasses, reducing their representational entanglement\. However, because the minority cluster is learned from a few atypical training examples, stronger minority alignment can also amplify finite\-sample information from those examples\. Consequently, atypical members become more aligned with the empirical atypical prototype than atypical nonmembers, creating a membership signal that can be exploited by the attacker\. Finally, we validate our findings empirically\. Our analysis explains the generalization\-\-privacy tension of SAM through a single mechanism: in long\-tailed learning, the tail wags the model\.

## Sharpness of Minima in Deep Matrix Factorization

**Authors:** Anıl Kamber; Rahul Parhi

**ID:** 148982 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tin36Zr1Ue>) | [PDF](<https://openreview.net/pdf?id=tin36Zr1Ue>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148982>)

Understanding the loss\-landscape geometry near a minimum is key to explaining the implicit bias of gradient\-based methods in non\-convex optimization problems such as deep neural network training and deep matrix factorization\. A central quantity to characterize this geometry is the maximum eigenvalue of the Hessian of the loss\. Currently, its precise role has been obfuscated because no exact expressions for this sharpness measure were known in general settings\. In this paper, we present the first exact expression for the maximum eigenvalue of the Hessian of the squared\-error loss at \*any\* minimizer in deep matrix factorization/deep linear neural network training problems, resolving an open question posed by Mulayoff &amp; Michaeli \[2020\]\. This expression reveals a fundamental property of the loss landscape in deep matrix factorization: \*Having a constant product of the spectral norms of the left and right intermediate factors across layers is a sufficient condition for flatness\*\. Most notably, in both depth\-$2$ matrix and deep overparameterized scalar factorization, we show that this condition is both necessary and sufficient for flatness, which implies that \*flat minima are spectral\-norm balanced and not necessarily Frobenius\-norm balanced\*\. To complement our theory, we provide an empirical verification of an escape phenomenon during gradient\-based training near a minimizer of a deep matrix factorization problem which relies on our exact expression\.

## A Curvature Phase Transition Governs Coherence Penalty Efficiency Against Feature Absorption in SAEs

**Authors:** Hak Hyun Kim; Yash Raj; Peter Chin; Soroush Vosoughi

**ID:** 153574 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KOLzZ1TkRg>) | [PDF](<https://openreview.net/pdf?id=KOLzZ1TkRg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153574>)

Feature absorption is a structural failure mode of sparse autoencoders, where a single dictionary atom captures multiple distinct concepts rather than one, reducing interpretability\. While prior work has shown that absorption configurations are spurious local minima of the sparse dictionary learning loss, little is known about the geometric mechanisms that determine whether a coherence penalty can escape them\. We study the curvature geometry of pairwise coherence penalties at absorption configurations on the unit sphere\. We show that \(1\) every coherence penalty in the power family $\\mathcal\{R\}p = \\sum\{l 0$, yet the efficiency of this force depends critically on the penalty's curvature; \(2\) a phase transition at $p = 2$ governs this efficiency: the Riemannian Hessian in the splitting direction equals $p\(p\-2\) \\cdot k^\{1\-p/2\}$ in closed form, so concave penalties \($p &lt; 2$\) receive curvature assistance and convert absorption into a strict saddle point, while convex penalties \($p &gt; 2$\) face curvature resistance and deepen the local minimum; \(3\) the boundary at $p = 2$ corresponds precisely to a Parseval invariance that renders the quadratic penalty geometrically neutral; and \(4\) under feature correlation $\\mu^\{\}$, convex penalties reverse above $\\mu^\{\}\_\{crit\} = \(p\-2\)/\(p\+k\-2\)$, giving a closed\-form threshold for when resistance can be overcome\. Experiments on Pythia\-160M and Gemma\-2\-2B confirm the predicted $\\lambda$\-efficiency ordering for competitive\-activation SAEs, with absorption reduction verified as feature\-level improvement rather than feature suppression\. More broadly, our results point toward a principled framework for selecting coherence penalties based on the curvature geometry of the loss landscape rather than empirical tuning\.

## Feature learning in high\-dimensions under structured covariance: Scaling laws in quadratic networks

**Authors:** Qingyuan Yu; Nuri Mert Vural; Xin Tong; Murat Erdogdu

**ID:** 149864 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mftAwZQsHo>) | [PDF](<https://openreview.net/pdf?id=mftAwZQsHo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149864>)

Recent theoretical work has shown that nonlinear solvable models exhibit scaling laws in the feature\-learning regime\. However, these results largely rely on the assumption of isotropic inputs\. Understanding how these laws extend to anisotropic data remains a central open problem\. In this work, we address this question by analyzing the learning dynamics of two\-layer neural networks with quadratic \(second Hermite polynomial\) activations under anisotropic Gaussian inputs\. We provide a sharp characterization of stochastic gradient descent \(SGD\) across both continuous\-time dynamics and finite\-sample \(online\) discretizations, explicitly quantifying how the covariance spectrum influences the scaling exponent and sample complexity\. Furthermore, we provide evidence that normalization techniques strictly improve sample efficiency in anisotropic settings\. Experiments on two\-layer networks with general activations support our theoretical predictions, suggesting that these insights extend well beyond the quadratic model\.

## A Scalable Measure of Loss Landscape Curvature for Analyzing the Training Dynamics of LLMs

**Authors:** Dayal Singh Kalra; Jean\-Christophe Gagnon\-Audet; Andrey Gromov; Ishita Mediratta; Kelvin Niu; Alexander Miller; Michael Shvartsman

**ID:** 155425 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5l3JqAoTnr>) | [PDF](<https://openreview.net/pdf?id=5l3JqAoTnr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155425>)

Understanding the curvature evolution of the loss landscape is fundamental to analyzing the training dynamics of neural networks\. The most commonly studied measure, Hessian sharpness  \($\\lambda\_\{\\max\}^H$\) \\textemdash the largest eigenvalue of the loss Hessian \\textemdash determines local training stability and interacts with the learning rate throughout training\. Despite its significance in analyzing training dynamics, direct measurement of Hessian sharpness remains prohibitive for Large Language Models \(LLMs\) due to high computational cost\. We analyze \\emph\{critical sharpness\} \($\\lambda\_c$\), a computationally efficient measure requiring fewer than $10$ forward passes given the update direction $\\Delta \\bm\{\\theta\}$\. Critically, this measure captures well\-documented Hessian sharpness phenomena, including progressive sharpening and Edge of Stability\. Using this measure, we provide the first demonstration of these sharpness phenomena at scale, up to $7$B parameters, spanning both pre\-training and mid\-training of OLMo\-2 models\. We further introduce \\emph\{relative critical sharpness\} \($\\lambda\_c^\{1\\to 2\}$\), which quantifies the curvature of one loss landscape while optimizing another, to analyze the transition from pre\-training to fine\-tuning and guide data mixing strategies\. Critical sharpness provides practitioners with a practical tool for diagnosing curvature dynamics and informing data composition choices at scale\. More broadly, our work shows that scalable curvature measures can provide actionable insights for large\-scale training\.

## Does Sparse Connectivity Improve Generalization? Convolutional Networks Below the Edge of Stability

**Authors:** Tongtong Liang; Esha Singh; Rahul Parhi; Alex Cloninger; Yu\-Xiang Wang

**ID:** 153905 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Hq5Gl3Qj0N>) | [PDF](<https://openreview.net/pdf?id=Hq5Gl3Qj0N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153905>)

Gradient descent on overparameterized neural networks typically operates at the Edge of Stability \(EoS\), where the largest Hessian eigenvalue hovers around a step\-size\-dependent threshold\. We study how sparse connectivity changes generalization below this threshold in two layer ReLU networks\. Prior results have shown that for fully\-connected networks \(FCNs\), generalization guarantees in this regime degrade and become vacuous on high\-dimensional spherical inputs\. Our analysis reveals that sparse connectivity fundamentally alters this picture\. Under sparse connectivity, the network processes a collection of low\-dimensional patches rather than the full input vector, so the effective constraint imposed by the stability condition is governed by the geometry of the training patch collection\. We prove that when the receptive fields are small relative to the ambient dimension, the effective constraint yields non\-vacuous generalization bounds in precisely the spherical regime where FCNs provably fail\. The same framework also reveals a contrasting failure mode: if the patch collection lacks geometric structure, the constraint becomes unable to prevent overfitting\. We corroborate this theory by analyzing the patch geometry of natural images, showing that standard convolutional designs produce patch multiset with low\-dimensional structure that facilitates generalization\. This provides a principled explanation for the generalization advantage of convolutional networks\. Thus, our analysis yields a unified framework that identifies how architecture, data geometry, and gradient descent jointly govern generalization performance\.

## Global Convergence of Four\-Layer Matrix Factorization under Random Initialization

**Authors:** Minrui Luo; Weihang Xu; Xiang Gao; Maryam Fazel; Simon Du

**ID:** 151546 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZpZNDFkqGD>) | [PDF](<https://openreview.net/pdf?id=ZpZNDFkqGD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151546>)

Gradient descent dynamics on the deep matrix factorization problem is extensively studied as a simplified theoretical model for deep neural networks\. Although the convergence theory for two\-layer matrix factorization is well\-established, no global convergence guarantee for general deep matrix factorization under random initialization has been established to date\.  To address this gap, we provide a polynomial\-time global convergence guarantee for randomly initialized gradient descent on four\-layer matrix factorization, given certain conditions on the target matrix and a standard balanced regularization term\.  Our analysis employs new techniques to show saddle\-avoidance properties of gradient descent dynamics, and extends previous theories to characterize the change in eigenvalues of layer weights\.

## Emergence, Retention and Mitigation of Ill\-conditioning due to Basis Lifting in KANs

**Authors:** Ferhat Arslan; Weihong Guo; Shuo Li

**ID:** 150542 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hNlDDHSyD6>) | [PDF](<https://openreview.net/pdf?id=hNlDDHSyD6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150542>)

Kolmogorov–Arnold Networks \(KANs\) expand each input coordinate through a fixed basis family, yet the optimization role of this basis lifting remains poorly understood\.  We identify basis lifting as a structural source of ill\-conditioning in KANs and provide a mechanism\-level analysis linking lifted feature geometry to convergence, accuracy, and seed sensitivity\. Our analysis studies the evolution of lifted empirical Gram matrices under stochastic gradient descent \(SGD\) and shows that fixed basis lifting induces and preserves near\-rank deficiency through eigenvalue and determinant drift\.  It further concentrates feature energy into a smaller number of directions, amplifying dominant eigenvalues and worsening condition numbers\.  These results show that basis selection is not merely an expressivity choice, but also an optimization and conditioning choice\. Motivated by this mechanism, we introduce T\-KAN, a learnable basis\-coordinate transformation that aligns basis directions before the learned linear map\.  It reshapes lifted Gram geometries while preserving the expressivity and introducing negligible parameter overhead\.  In controlled small\-to\-moderate KAN regimes, T\-KAN often improves conditioning and optimization with B\-spline, Chebyshev, and RBF KANs\.

## Gradient Descent on Two ReLU Neurons: Global Landscape and Bifurcation Dynamics

**Authors:** Binghua Li; Mengzhe Li; Denny Wu; Tianhao Wang

**ID:** 148429 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xtpMOeOcPq>) | [PDF](<https://openreview.net/pdf?id=xtpMOeOcPq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148429>)

Understanding how gradient descent learns features remains a central challenge in neural network theory\. We study this question in a minimal multi\-index setting that already exhibits rich multi\-phase gradient dynamics: a well\-specified two\-neuron ReLU teacher\-student model under isotropic Gaussian inputs, trained by population gradient flow from small random initialization\. We show that the dynamics are organized by two directions: the “easy” bisector direction, which carries the leading signal, and the “hard” splitting direction, which governs specialization\. To characterize the loss structure and learning behavior, we analyze the population squared\-loss landscape and show that every nonzero critical point is either a global minimum or a saddle\. We then track the gradient\-flow trajectory, showing that student neurons first collapse toward a bisector saddle before escaping and specializing to teacher neurons\. Our results provide both a landscape and dynamics account of the multi\-phase symmetry\-breaking behavior that arises in a simple multi\-index model and under standard algorithmic and architectural choices\.

## Optimizer\-Induced Mode Connectivity: From AdamW to Muon

**Authors:** Fangzhao Zhang; Sungyoon Kim; Erica Zhang; Yiqi Jiang; Mert Pilanci

**ID:** 156024 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=15PMEzUEgp>) | [PDF](<https://openreview.net/pdf?id=15PMEzUEgp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156024>)

Mode connectivity has been widely studied, yet the role of the optimizer remains underexplored\. We revisit it through optimizer\-induced implicit regularization, asking how connectivity behaves when restricted to solutions constrained by a given optimizer\. For two\-layer ReLU networks, we show that solutions from a single optimizer \- AdamW, Muon, or others in the Lion\-$\\mathcal\{K\}$ family \- form a connected set at sufficiently large width, a result not implied by prior work\. We then characterize how optimizer\-induced regions interact: at large width two different regions can be disjoint or overlap depending on regularization, while in our small\-width example AdamW and Muon converge to disconnected zero\-loss components separated by a provable loss barrier\. Empirically, in GPT\-2 pretraining, we observe same\-optimizer paths preserve each model’s spectrum while cross\-optimizer paths traverse a smooth transition\. Our results reveal optimizer\-dependent structure beyond classical mode connectivity literature\.

## Transformers Provably Learn Graph Search: Training Dynamics and the Exponential Power of Depth

**Authors:** Xutao Ma; Somayeh Sojoudi

**ID:** 155595 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4QZv5tGC5T>) | [PDF](<https://openreview.net/pdf?id=4QZv5tGC5T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155595>)

Large Language Models \(LLMs\) have achieved remarkable progress on complex reasoning tasks, yet the mechanisms by which they acquire reasoning capabilities and the efficiency of their reasoning remain poorly understood\. In this paper, we investigate the path\-finding problem over directed graphs—a symbolic abstraction of multi\-step reasoning\. We first characterize the architectural requirements for this task, proving that one\-layer transformers require $\\Omega\(N^2\)$ size on dense graphs to implement the key DFS child\-selection primitive\. While a two\-layer transformer implements full DFS with $O\(N\\log\(N\)\)$ size\. Thus, a second layer is necessary and sufficient for near\-linear DFS reasoning\. We then extend this expressivity analysis to deeper models, proving the existence of an $L$\-layer transformer that performs DFS with a look\-ahead horizon of $2^\{L\-3\}$, establishing that increasing depth yields an exponential gain in search efficiency\.     Finally, going beyond the expressivity, given appropriately curated training data, we show that two\-layer transformers can provably learn to execute DFS via gradient flow and generalize to unseen graphs\. Together, our results provide a mechanistic account of how transformers implement graph search, how depth improves reasoning efficiency, and how such reasoning algorithms can emerge through training\.

## Monotone Inclusion Approach to Weakly Monotone Discrete\-Time Finite\-Horizon Mean\-Field Games

**Authors:** Ugur Aydin; Tamer Basar; Naci Saldi

**ID:** 151151 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ceLxtYPsGF>) | [PDF](<https://openreview.net/pdf?id=ceLxtYPsGF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151151>)

We revisit the problem of computing mean\-field equilibria \(MFEs\) in discrete\-time, monotone, finite\-horizon mean\-field games \(MFGs\)\. We show that, when the transition kernel is independent of the state\-measure term and the reward function satisfies the usual weak monotonicity condition and is Lipschitz continuous, anchored proximal   gradient descent methods can be used to compute a monotone MFE\. We also establish last\-iterate convergence results for these methods\. Our approach relies on formulating the computation problem as an optimization problem over the space of occupation measures\. Using this formulation, we show that the problem is equivalent to a class of constrained Lipschitz monotone inclusion problems\. We then apply iterative methods for this monotone inclusion formulation to derive a tractable algorithm\. The resulting algorithm achieves a convergence rate of $O\(1/\\sqrt\{T\}\)$ after $T$ iterations, without requiring any regularization\. This rate holds even in the absence of a uniqueness assumption for the corresponding MFE\.

## Decoupled Descent: Exact Test Error Tracking Via Approximate Message Passing

**Authors:** Max Lovig

**ID:** 152459 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Sycq4iSaqb>) | [PDF](<https://openreview.net/pdf?id=Sycq4iSaqb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152459>)

In modern parametric model training, full\-batch gradient descent \(and its variants\) suffers due to progressively stronger biasing towards the exact realization of training data; this drives the systematic \`\`generalization gap'', where the train error becomes an unreliable proxy for test error\. Existing approaches either argue this gap is benign through complex analysis or sacrifice data to a validation set\. In contrast, we introduce decoupled descent \(DD\), a novel theory\-based training algorithm that satisfies a train\-test identity\-\-\-enforcing the train error to asymptotically track the test error for stylized Gaussian mixture models\. Within this specific regime, leveraging approximate message passing theory, DD iteratively cancels the biases due to data reuse, rigorously demonstrating the feasibility of zero\-cost validation and $100\\%$ data utilization\. Moreover, DD is governed by a low\-dimensional state evolution recursion, rendering the dynamics of the algorithm transparent and tractable\. We validate DD on XOR classification, yielding superior performance compared to GD; additionally, we implement noisy MNIST and non\-linear probing of CIFAR\-10, demonstrating that even when our stylized assumptions are relaxed, DD narrows the generalization gap compared to GD\.

## Gradient descent inference in empirical risk minimization

**Authors:** Qiyang Han; Xiaocong Xu

**ID:** 156635 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156635>)

Gradient descent is one of the most widely used iterative algorithms in modern statistical learning\. However, its precise algorithmic dynamics in high\-dimensional settings remain only partially understood, which has limited its broader potential for statistical inference applications\.

This paper provides a precise, nonasymptotic joint distributional characterization of gradient descent iterates and their debiased statistics in a broad class of empirical risk minimization problems, in the so\-called mean\-field regime where the sample size is proportional to the signal dimension\. Our nonasymptotic state evolution theory holds for both general nonconvex loss functions and non\-Gaussian data, and reveals the central role of two Onsager correction matrices that precisely characterize the nontrivial dependence among all gradient descent iterates in the mean\-field regime\.

Leveraging the joint state evolution characterization, we show that the gradient descent iterate retrieves approximate normality after a debiasing correction via a linear combination of observable loss derivative directions from all past iterates\. Crucially, the debiasing coefficients are directly linked to the Onsager correction matrices, which can be estimated in a fully data\-driven manner via the proposed gradient descent inference algorithm\. This leads to a new algorithmic statistical inference framework based on debiased gradient descent, which \(i\) applies to a broad class of models with both convex and nonconvex losses, \(ii\) remains valid at each iteration without requiring algorithmic convergence and \(iii\) exhibits a certain robustness to possible model misspecification\. As a by\-product, our framework also provides algorithmic estimates of the generalization error at each iteration\.

We demonstrate our theory and inference methods in the canonical single\-index regression model and a generalized logistic regression model, where the natural loss functions may exhibit arbitrarily nonconvex landscapes\. Our analysis further shows that, in linear regression with squared loss, the proposed debiased gradient descent iterate eventually coincides with the debiased convex regularized estimator in a mean\-field distributional sense, and the quality of statistical inference for the unknown signal aligns exactly with the generalization error achieved along the algorithmic trajectory\.

## SGD at the Edge of Stability: The Stochastic Sharpness Gap

**Authors:** Fangshuo Liao; Afroditi Kolomvaki; Anastasios Kyrillidis

**ID:** 150405 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iHSnUlPAyy>) | [PDF](<https://openreview.net/pdf?id=iHSnUlPAyy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150405>)

Edge of Stability \(EoS\) refers to the phenomenon where full\-batch gradient descent \(GD\) training of neural networks with step size $\\eta$ pushes the largest eigenvalue of the Hessian, i\.e\. the sharpness, to $2/\\eta$ and hovers there\. \\citet\{damian2023selfstab\} explains the hovering behavior of the sharpness by \*self\-stabilization\*, a mechanism driven by third\-order structure of the loss, and shows that GD implicitly follows projected gradient descent \(PGD\) on the set where the sharpness is below $2/\\eta$\. For mini\-batch stochastic gradient descent \(SGD\), the sharpness stabilizes \*below\* $2/\\eta$, with the gap widening as the batch size decreases\. However, no theoretical explanation exists for this suppression\. In this paper, we introduce \*stochastic self\-stabilization\* that extends the self\-stabilization framework to SGD\. Our key insight is that gradient noise injects variance into the oscillatory dynamics along the top Hessian eigenvector, strengthening the sharpness\-reducing force and shifting the equilibrium below $2/\\eta$\. Following the approach of \\citet\{damian2023selfstab\}, we define \*stochastic predicted dynamics\* that tracks the deviation of SGD from the PGD trajectory, and prove a stochastic coupling theorem that relates the SGD sharpness and loss to those of PGD\. Based on our predicted dynamic, we derive a closed\-form equilibrium sharpness gap that scales with the variance of the gradient noise projected onto the top eigenvector of the Hessian\. This formula predicts that smaller batch sizes yield flatter solutions, and recovers GD when the batch equals the full dataset\.

## On the Convergence Analysis of Muon

**Authors:** Wei Shen; Ruichuan Huang; Minhui Huang; Cong Shen; Jiawei zhang

**ID:** 156746 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156746>)

The majority of parameters in neural networks are naturally represented as matrices\. However, most commonly used optimizers treat these matrix parameters as flattened vectors during optimization, potentially overlooking their inherent structural properties\. Recently, an optimizer called Muon has been proposed, specifically designed to optimize matrix\-structured parameters\. Extensive empirical evidence shows that Muon can significantly outperform traditional optimizers when training neural networks\. Nonetheless, the theoretical understanding of Muon’s convergence behavior and the reasons behind its superior performance remain limited\. In this work, we present a comprehensive convergence rate analysis of Muon and its comparison with Gradient Descent \(GD\)\. We characterize the conditions under which Muon can outperform GD\. Our theoretical results reveal that Muon can benefit from the low\-rank structure of Hessian matrices, a phenomenon widely observed in practical neural network training\. Our experimental results support and corroborate the theoretical findings\.

## Classification at the Edge of Stability: Unifying Self\-Stabilization and Convergence Rates

**Authors:** Salma Tarmoun; Lachlan MacDonald; Ziqing Xu; Konstantinos Emmanouilidis; Rene Vidal

**ID:** 152056 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VpiPrv9CUK>) | [PDF](<https://openreview.net/pdf?id=VpiPrv9CUK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152056>)

Neural networks are often trained with gradient descent \(GD\) at the edge of stability \(EoS\), where step sizes exceed classical stability thresholds and standard convergence theory no longer applies\. Despite exhibiting non\-monotonic loss and oscillatory dynamics, this regime frequently leads to faster convergence and better generalization\. Existing theoretical perspectives offer complementary but incomplete insights: one identifies a self\-stabilization mechanism that drives GD toward flat regions but does not yield convergence rates; another derives rigorous rates for specific losses but does not explain the underlying stabilization mechanism; and a third unifies these views for overparameterized least squares, but relies on the existence of a minimizer manifold, which is absent in classification settings\. In this work, we extend this unified geometric perspective to exponential\-tail losses, including logistic and cross\-entropy losses, where no finite minimizer exists\. We identify a curvature\-defined reference subspace that replaces the role of the minimizer manifold, yielding a coupled dynamical system in which orthogonal oscillations are damped by parallel progress along directions of decreasing sharpness\. Under regularity conditions, which we verify for logistic and multiclass cross\-entropy losses in symmetric data models, we derive explicit bounds for the iterates, not just the loss, covering both the EoS and stable regimes, and revealing a three\-phase damping structure in the latter\. Our analysis further uncovers a transient implicit bias induced by large step sizes: although GD converges asymptotically to the max\-margin direction, large steps can leave persistent orthogonal residuals and, in certain geometries, amplify them\.

## Feature Learning Dynamics in Infinite\-Depth Neural Networks

**Authors:** Zihan Yao; Ruoyu Wu; Tianxiang Gao

**ID:** 150047 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lBVOJogILX>) | [PDF](<https://openreview.net/pdf?id=lBVOJogILX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150047>)

Deep neural networks \(DNNs\) have achieved remarkable success in practice, yet a mechanistic understanding of how features evolve during training remains incomplete, especially in the large\-depth limit\. For ResNets under depth\-$\\mu$P scaling, previous studies introduce an SDE view of training dynamics by treating the layer index $\\ell$ as a continuous\-time variable $t\_\\ell=\\ell/L$\. A key unresolved issue is that backpropagation reuses each forward weight matrix $W\_\\ell$ through its transpose $W\_\\ell^\\top$, creating correlations between forward features and backward gradients whose behavior and role in training\-time feature learning remain unclear\. We study this reused\-weight forward\-\-backward coupling in one\-layer ResNets under depth\-$\\mu$P scaling\. Using conditional Gaussian representations, we explicitly separate the coupling terms induced by weight reuse from decoupled Gaussian fluctuations\. At initialization, we prove that the coupling is a finite\-width effect and vanishes at rate $O\(n^\{\-1\}\)$, uniformly over depth\. During training, however, SGD induces a nontrivial forward\-\-backward correlation term that survives the infinite\-width limit\. The key depth effect is that, under depth\-$\\mu$P scaling, this surviving term is higher order in depth and its accumulated contribution over layers becomes negligible as $L\\to\\infty$\. This depth\-induced suppression motivates \\textit\{neural feature dynamics\} \(NFD\), a forward\-\-backward SDE system with decoupled backward weights that retains the feature\-gradient covariance structure generated during training\. Under nondegeneracy assumptions, we prove that the finite\-network training dynamics converge to NFD with an $O\(L^\{\-1\}\)$ depth\-discretization error, while the reused\-weight coupling term has a faster $O\(L^\{\-2\}\)$  decay\. These results provide a rigorous infinite\-depth feature\-learning limit for one\-layer ResNets under depth\-$\\mu$P scaling\.

## Uniform\-in\-Time Weak Propagation of Chaos in Shallow Neural Networks

**Authors:** Margalit Glasgow; Joan Bruna

**ID:** 154794 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Aupfb8A52K>) | [PDF](<https://openreview.net/pdf?id=Aupfb8A52K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154794>)

We consider two\-layer neural networks trained in the feature\-learning regime using gradient descent, and relate the output of the finite\-width network $f\_\{\\hat\{\\rho\}\}$ to its infinite\-width counterpart $f\_\{\\rho^\{MF\}\}$, which evolves in the mean\-field dynamics\.   While constant\-time horizon bounds for $\\\|f\_\{\\rho^\{MF\}\} \-f\_\{\\hat\{\\rho\}\}\\\|$ may be obtained via standard Grönwall estimates, the long\-time behavior of the fluctuation is a more delicate matter\. Uniform\-in\-time bounds often rely on \(local\) strong convexity in the landscape or Logarithmic Sobolev inequalities present in noisy gradient dynamics\. % In this work, we study a noiseless setting and do not make  assumptions on the geometry of the landscape near the optimum\. Instead, we impose a weaker condition on the convergence rate of the mean\-field deterministic Wasserstein\-gradient\-flow dynamics\. In this work, we establish non\-asymptotic weak propagation\-of\-chaos that holds uniformly in time, obtained by exploiting instead the convergence rate of the mean\-field deterministic Wasserstein\-gradient\-flow dynamics\. Specifically, denoting by $L\_t$ the mean\-field loss at time $t$ and $m$ the number of neurons, under standard regularity assumptions and the condition $\\int\_0^\\infty L\_t^\{1/2\} dt =O\_d\(1\)$, we obtain the uniform in time bound $\\\|f\_\{\\rho^\{MF\}\} \-f\_\{\\hat\{\\rho\}\}\\\|^2 \\lesssim \\text\{poly\}\(d\) m^\{\-\\min\(1,c/6\)\}$ whenever $L\_t \\lesssim t^\{\-c\}$\. Our result holds in a noiseless setting and does not make any assumptions on the geometry of the landscape near the optimum\. A key implication of our result is that whenever the convergence rate of the mean\-field, population\-loss dynamics is faster than $1/t^2$, we can attain a loss of $\\epsilon$ with only $\\text\{poly\}\(d/\\epsilon\)$ neurons, training samples, and GD steps\.

## Learn Locally, Recurse Globally: Neural Circuit Synthesis Beyond Training Depth

**Authors:** Emile Richard

**ID:** 155721 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3Q6vM6CNIM>) | [PDF](<https://openreview.net/pdf?id=3Q6vM6CNIM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155721>)

Reasoning, planning, and agentic systems demand that neural models extrapolate from the easy training instances to harder, more compositional problem instances they encounter at deployment\. Neural networks trained by gradient descent are reliable interpolators \\emph\{within\} their training domain but struggle to extrapolate beyond it: they learn local generalizers even when global solutions are representable in their architecture class\. We propose a \\emph\{learn locally, recurse globally\} paradigm\-: train a neural model on in\-distribution sub\-problems and apply it iteratively under a verifiable outer loop that decomposes hard instances into a sequence of in\-distribution sub\-instances and reassembles the result\. We instantiate this paradigm in Boolean circuit synthesis from truth\-tables, which we adopt as a faithful, controllable abstraction of logical reasoning: any propositional inference reduces to evaluating a Boolean circuit, and circuit \\emph\{depth\} is a clean proxy for the difficulty of the underlying reasoning task\.  Empirically, a $2\.2$M\-parameter encoder\-decoder Transformer trained on depth\-$\\leq 2$ circuits, wrapped in our outer loops, synthesizes circuits at $5\\times$ training depth and at input arities for which the base model's encoder is too small for direct inference, with synthesis quality matching a standard EDA tool while producing markedly shallower circuits\. We connect the algorithms to classical Boolean decomposition theory \(Shannon, Ashenhurst\-Curtis, Reed\-Muller\) and to recent formal results on the AC$^0$ barrier for constant\-depth Transformers\.

## Why Muon Outperforms Adam: A Curvature Perspective

**Authors:** Shuche Wang; Fengzhuo Zhang; Jiaxiang Li; Dirk Bergemann; Zhuoran Yang

**ID:** 153556 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KWe4ab5CCr>) | [PDF](<https://openreview.net/pdf?id=KWe4ab5CCr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153556>)

Muon improves training efficiency over Adam in large language\-model training by about two times, but the local geometric source of this advantage remains unclear\. Our work takes a first step toward demystifying Muon's superiority over Adam from a curvature perspective\. First, we apply a second\-order Taylor approximation to the training landscape and show that Muon achieves a larger one\-step loss decrease than Adam at matched validation loss\. The two optimizers have comparable first\-order gains, but Muon consistently incurs a smaller second\-order curvature penalty\.  Second, we decompose this curvature penalty into the squared update norm and Normalized Directional Sharpness \(NDS\)\. We find that Muon and Adam have comparable update norms, so Muon's smaller curvature penalty is driven by lower NDS, not update scale\. Third, we study how training data and model structure shape Muon's NDS advantage\. Using Zipf Probabilistic Context\-Free Grammar \(PCFG\) data with controlled imbalance, we show that data imbalance amplifies Muon's NDS advantage over Adam\. A within\-/cross\-layer decomposition further shows that, in the middle and late stages of training, Muon's lower NDS is mainly sustained by smaller within\-layer curvature\.  Beyond empirical evidence, we analyze stylized quadratic problems with heterogeneous curvature and gradient alignment toward high\-curvature modes\.  We prove that Muon attains a smaller average NDS than GD by balancing update energy across curvature groups; when curvature heterogeneity is sufficiently strong, this also yields lower local quadratic loss after the same number of steps\.

