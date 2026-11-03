# Deep Learning / Theory

深度学习 / 深度学习理论

57 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Stability and Generalization in Looped Transformers

**Authors:** Asher Labovich

**ID:** 154011 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gs9Aw1utOC>) | [PDF](<https://openreview.net/pdf?id=Gs9Aw1utOC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154011>)

Looped transformers promise test\-time compute scaling by spending more iterations on harder problems, but it remains unclear which architectural choices let them extrapolate to harder problems at test time rather than memorize training\-specific solutions\. We introduce a fixed\-point based framework for analyzing looped architectures along three axes of stability \-\- reachability, input\-dependence, and geometry \-\- and use it to characterize when fixed\-point iteration yields meaningful predictions\. Theoretically, we prove that looped networks without recall have countable fixed points and cannot achieve strong input\-dependence at any spectral regime, while recall with outer normalization reliably produces a regime in which fixed points are simultaneously reachable, locally smooth in the input, and supported by stable backpropagation\. Empirically, we train single\-layer looped transformers on chess, sudoku, and prefix\-sums and find that downstream performance tracks the framework's predictions across tasks and architectural configurations\. We additionally introduce internal recall, a novel recall placement variant allowing an identity residual path, and exploit its contrasting fixed\-point behavior to test our framework's predictions in a controlled setting\.

## How Hard Is It for Message\-Passing GNNs to Simulate One Weisfeiler\-Lehman Color\-Refinement Step?

**Authors:** Guanyu Cui; Yuhe Guo; Zhewei Wei; Hsin\-Hao Su

**ID:** 151609 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZHXIlyKr8l>) | [PDF](<https://openreview.net/pdf?id=ZHXIlyKr8l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151609>)

Message\-passing graph neural networks \(MPGNNs\) are commonly compared with the Weisfeiler\-Lehman \(WL\) color\-refinement procedure, but this comparison does not quantify the resource parameters a network needs to realize color refinement with bounded\-size messages and finite numerical precision\. We study the cost of simulating a single color\-refinement step on unattributed graphs\. We distinguish input\-independent, or oblivious, simulation from instance\-dependent simulation\. In the former, the parameters, or their distributions in randomized models, are fixed before the input instance is known\. Our results show that the local form of WL color refinement hides a global relabeling problem\. In the oblivious setting, deterministic and zero\-error randomized MPGNNs cannot solve this problem in the worst case using only shallow networks with small messages\. We complement this lower bound with a nearly matching construction in a stronger rooted, port\-aware model\. By contrast, when the color set is large, bounded\-error randomness can greatly reduce the cost, and a one\-layer MPGNN with messages of logarithmic size and a logarithmic number of random bits suffices\. We show that this logarithmic number of random bits is essentially necessary for shallow, small\-message simulations\. When the color set is small, we still obtain a rooted, port\-aware simulation, but this construction requires more layers or larger messages\. We also prove that this extra cost is partly unavoidable, as small color sets force a nontrivial trade\-off between the number of layers and the message size\. Finally, instance\-dependent simulation can be much shallower, but the required instance\-specific parameters are not necessarily easy to find\. Together, these results reveal quantitative structure hidden behind the statement that MPGNNs match WL color refinement\.

## Active Learning of Conditional Generative Models via the Transport Neural Tangent Kernel

**Authors:** Jayoung Ryu; Kyunghyun Cho; Romain Lopez

**ID:** 151935 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WioQm89GJJ>) | [PDF](<https://openreview.net/pdf?id=WioQm89GJJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151935>)

Many high\-throughput scientific experiments produce distributional outputs, requiring conditional generative models to interpret the data, and to predict outcomes at new inputs\. Acquiring experimental data at new conditions \(e\.g\., for a new antigen or a new cell type\) is often expensive, motivating the need for automated experimental design methods\. However, existing active learning frameworks are limited as they assume scalar or vector\-valued outputs\. We first show that the Wasserstein test risk of a conditional generative task decomposes into a mean term and a shape term, demonstrating why mean\-based active learning is blind to distributional shape\. To capture both, we propose the transport Neural Tangent Kernel \(tNTK\), a tractable kernel that measures how sensitive a generative model's predicted distribution is with respect to its parameters\. The tNTK recovers the standard NTK in the deterministic limit and upper\-bounds the posterior Fréchet variance of the prediction under small parameter perturbations\. It admits a closed form for affine Gaussian transport and tractable Monte Carlo estimators otherwise\. Treating the tNTK as a Gaussian process covariance function, we greedily select inputs that minimize the total GP posterior variance across the pool, yielding a distribution\-aware active learning strategy\. We evaluate this strategy across four classes of conditional generative models, including conditional flow matching and conditional Monge gap, on synthetic distributions, intent\-labeled sentences, and single\-cell perturbation responses\. In these experiments, the tNTK outperforms the baseline NTK computed from the conditional mean, demonstrating the value of distribution\-aware active learning for generative\-modeling tasks\.

## Most ReLU Networks Admit Identifiable Parameters

**Authors:** Moritz Grillo; Guido Montufar

**ID:** 153608 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K82GYaldLY>) | [PDF](<https://openreview.net/pdf?id=K82GYaldLY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153608>)

We study the realization map of deep ReLU networks, focusing on when a function determines its parameters up to scaling and permutation\. To analyze hidden redundancies beyond these standard symmetries, we introduce a framework based on weighted polyhedral complexes\. Our main result shows that for every architecture whose input and hidden layers have width at least two, there exists an open set of identifiable parameters\. This implies that the functional dimension of every such architecture is exactly the number of parameters minus the number of hidden neurons\. We further show that minimal functional representations can still have non\-trivial parameter redundancies\. Finally, we establish a generic depth hierarchy, whereby for an open set of parameters the realized function cannot be represented generically by any shallower network\.

## How Much Evidence Should Retrieval\-Augmented In\-Context Learning Use Under Distribution Shift?

**Authors:** Chen Wang

**ID:** 149872 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mZD68mJapq>) | [PDF](<https://openreview.net/pdf?id=mZD68mJapq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149872>)

Retrieval\-augmented in\-context learning faces a budget problem under distribution shift: increasing top\-$k$ can improve evidence coverage, but it can also add off\-direction, conflicting, or overly long context that a finite reader cannot use\. We introduce a theory\-guided diagnostic framework based on \\emph\{effective evidence coverage\}: retrieval is useful only while aligned evidence grows faster than reader\-facing ambiguity\. In a local linear\-ICL model, coupled covariate and task\-prior shifts create a mixed risk term that aligned retrieval can reduce up to a residual ambiguity term; a conditional transfer result extends the same budget boundary to frozen readers satisfying a prompt\-level stability condition\. This yields a falsifiable prediction: recall can keep rising after answer accuracy has saturated or declined\. Across QA, verification, and NLI tasks, dense top\-$k$ sweeps together with oracle and shuffled\-context controls expose this recall\-\-accuracy decoupling\. The resulting framework separates coverage\- and saturation\-limited QA from interference\-limited verification/NLI, while calibrated selected\-context controllers are reported only as operational probes of the diagnosis\.

## Power Distribution Bridges Sampling, Self\-Reward RL, and Self\-Distillation

**Authors:** Akiyoshi Tomihari; Issei Sato

**ID:** 154816 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AjW8i6kx9F>) | [PDF](<https://openreview.net/pdf?id=AjW8i6kx9F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154816>)

Recent analyses question whether reinforcement learning \(RL\) is responsible for strong reasoning in large language models \(LLMs\)\. At the same time, distillation and inference\-time sampling, including power sampling, have emerged as effective ways to improve LLM performance\. However, the relationship among RL, distillation, and sampling remains unclear\. In this study, we focus on the power distribution, the target distribution of power sampling, and show that the power distribution bridges sampling, self\-reward KL\-regularized RL, and self\-distillation\. From the sampling perspective, we show that inexpensive local approximations cannot reproduce sequence\-level power without information about possible suffixes\. From the RL perspective, the power distribution is the closed\-form optimizer of KL\-regularized RL when the model's sequence\-level log\-probabilities are used as the reward\. This identification leads to \\emph\{power self\-distillation\}, an offline distillation surrogate that shares the same target distribution and amortizes the cost of power sampling into supervised training on teacher samples\. We further show that power self\-distillation can achieve self\-reward sharpening, while improvement in a downstream true reward is governed by the covariance between true reward and self\-reward under the power distribution\. Experiments on reasoning tasks support our analysis: power sampling raises self\-reward, true\-reward gains depend on alignment with self\-reward, and power self\-distillation can match or exceed the performance of power sampling at much lower inference cost\.

## GOAT\-AL: Pseudo Neural Collapse Guides Adaptive Coverage for All\-Budget Active Learning

**Authors:** Yoel Marcu; Daphna Weinshall

**ID:** 154845 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AT9sJa7Rk1>) | [PDF](<https://openreview.net/pdf?id=AT9sJa7Rk1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154845>)

A central challenge in deep Active Learning is that optimal selection strategies depend on the labeling budget, shifting from coverage in low\-budget regimes to uncertainty in high\-budget regimes\.  Existing methods attempt to bridge this gap via heuristic switching or interpolation, but lack a principled mechanism to determine when such transitions should occur\. We address this with pseudo\-CDNV \(pCDNV\), a label\-free proxy for neural collapse that tracks representation maturity\. We show that pCDNV exhibits a characteristic peak that reliably signals when learned representations become suitable for uncertainty\-based selection\.  Building on this insight, we propose Geometry\-Oriented Adaptive Targeting \(GOAT\-AL\), a unified query strategy that operates across all budget regimes\. Rather than switching objectives, GOAT\-AL maintains a single coverage\-based objective while adapting the underlying feature space from self\-supervised to task\-aligned representations\. Experiments on CIFAR\-10, CIFAR\-100, and TinyImageNet demonstrate that GOAT\-AL consistently matches or outperforms state\-of\-the\-art methods across low\-, mid\-, and high\-budget regimes\.

## Comparing Linear Regions in ReLU\-Type Networks: Theory and Monte Carlo Methods

**Authors:** Yuan Wang

**ID:** 153164 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NOrlEjE8dx>) | [PDF](<https://openreview.net/pdf?id=NOrlEjE8dx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153164>)

In this work, we provide a complete characterization of the uniqueness of linear patterns for generic fully connected neural networks activated by ReLU or leaky ReLU functions\. With this result, together with several tools from geometry and probability, we compare the numbers of linear regions for a wide variety of networks from both theoretical and practical perspectives, with minimal prerequisites\. More specifically, on the theoretical side, we show that networks with neurons arranged as $pq\\times2$ \(2 hidden layers, each having $pq$ neurons\) are expected to have more linear regions than those arranged as $p\\times 2q$ for $p\\ge 1$ and $q\\ge 2$; on the empirical side, we show the validity of a Monte\-Carlo approach for comparing linear regions via linear patterns, and carry out experiments for networks in various scenarios\. Our results indicate that neurons closer to the input layer tend to have more impact on the number of linear regions\. Moreover, along the way, we find the precise value of the expected number of linear regions for networks with 2 hidden layers, and an explicit upper bound for networks whose layer widths are non\-increasing\. The implementations for this paper are available through the following link:  https://github\.com/temp\-repo\-259848/Regions\-ReLU\-Network

## The Weight Gram Matrix Captures Sequential Feature Linearization in Deep Networks

**Authors:** Taehun Cha; Daniel Beaglehole; Adityanarayanan Radhakrishnan; Donghun Lee

**ID:** 152900 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PZQcUnAHHK>) | [PDF](<https://openreview.net/pdf?id=PZQcUnAHHK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152900>)

Understanding how deep neural networks learn representations remains a central challenge in machine learning theory\.  In this work, we propose a feature\-centric framework for analyzing neural network training by relating weight updates to feature evolution\.  We introduce a simple identity, the \*Feature Learning Equation\*, which identifies the weight Gram matrix as the key object capturing feature dynamics\.  This enables us to interpret gradient descent as implicitly inducing a hypothetical evolution of features, whose covariance structure — termed the \*Virtual Covariance\* — characterizes how representations evolve during training\. Building on this perspective, we introduce \*Target Linearity\*, a measure quantifying the linear alignment between features and targets\.  By analyzing the training and layer\-wise dynamics, we show that deep networks learn to \*sequentially\* transform representations toward target\-linear structure\.  This linearization perspective provides a unified interpretation of several empirical phenomena, including Neural Collapse and linear interpolation in generative models\.

## Spectral Asymptotics of Neural Network Jacobians: Convergency, Universality, and Phase Transition

**Authors:** Huiqin Li; Guangming Pan; Yanqing Yin

**ID:** 156640 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156640>)

We study the spectral properties of the Jacobian matrix in artificial neural networks and establish both its limiting spectral distribution and the second\-order fluctuations of its spectrum\. Our analysis uncovers fundamental phenomena, including universality properties with respect to the weight distribution and a phase transition in spectral behavior driven by the choice of activation function\. Leveraging tools from random matrix theory, we first analyze a class of nonlinear covariance ensembles, which may be of independent interest in high\-dimensional statistics, and subsequently characterize the spectral fluctuations of the Jacobian matrix, highlighting their dependence on weight initialization, layer widths, activation functions, and network depth\. These findings provide finite\-width distributional calibration for Jacobian\-based stability diagnostics and quantify initialization\-induced uncertainty in signal propagation, gradient stability, and local sensitivity of high\-dimensional neural networks\.

## Mamba Can Learn Low\-Dimensional Targets In\-Context via Test\-Time Feature Learning

**Authors:** Junsoo Oh; Wei Huang; Taiji Suzuki

**ID:** 150684 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gGRd5Ll8TD>) | [PDF](<https://openreview.net/pdf?id=gGRd5Ll8TD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150684>)

Mamba, a recently proposed linear\-time sequence model, has attracted significant attention for its computational efficiency and strong empirical performance\. However, a rigorous theoretical understanding of its underlying mechanisms remains limited\. In this work, we provide a theoretical analysis of Mamba's in\-context learning \(ICL\) capability by focusing on tasks defined by low\-dimensional nonlinear target functions\. Specifically, we study in\-context learning of a single\-index model $y \\approx g\_\*\(\\langle \\boldsymbol\{\\beta\}, \\boldsymbol\{x\} \\rangle\)$, which depends on only a single relevant direction $\\boldsymbol\{\\beta\}$, referred to as \*feature\*\. We prove that Mamba, pretrained by gradient\-based methods, can achieve efficient ICL via \*test\-time feature learning\*, extracting the relevant direction directly from context examples\. Consequently, we establish a test\-time sample complexity that improves upon linear Transformers\-\-\-analyzed to behave like kernel methods\-\-\-and is comparable to nonlinear Transformers, which have been shown to surpass the Correlational Statistical Query \(CSQ\) lower bound and achieve near information\-theoretically optimal rate in previous works\. Our analysis reveals the crucial role of the \*nonlinear gating\* mechanism in Mamba for feature extraction, highlighting it as the fundamental driver behind Mamba’s ability to achieve both computational efficiency and high performance\.

## Positional LSH: Binary Block Matrix Approximation for Attention with Linear Biases

**Authors:** Daniel Wolfson; Tal Wagner

**ID:** 148423 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xvvSJ2zQyy>) | [PDF](<https://openreview.net/pdf?id=xvvSJ2zQyy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148423>)

Positional encoding in transformers is commonly implemented through positional embeddings, attention masks, or bias terms, but formal connections between these mechanisms remain limited\. We study attention with positional bias through the lens of locality\-sensitive hashing \(LSH\), focusing on Attention with Linear Biases \(ALiBi\)\. We show that the ALiBi bias matrix is the expectation of contiguous block\-diagonal binary masks induced by a \`\`positional LSH'' scheme\. The empirical mean of masks sampled from this scheme yields spectral norm and max\-norm approximation guarantees with bounded block sizes with high probability\. This structural theorem implies a uniform approximation theorem for ALiBi\-biased attention: with high probability over the sampled masks, the approximate attention output is accurate simultaneously for all query\-key\-value inputs and can be computed in near\-linear time in the context length, reducing long\-context ALiBi to a collection of randomized short\-context regular \(positionally unbiased\) attention operations\. Conceptually, this connects positional bias, masks, and positional embeddings in a single formal framework and suggests an approach to efficient ALiBi\-biased attention\. Experiments on large language models validate our theoretical findings\.

## MinMax Recurrent Neural Cascades

**Authors:** Alessandro Ronca

**ID:** 155043 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8sPcuoX2cj>) | [PDF](<https://openreview.net/pdf?id=8sPcuoX2cj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155043>)

We show that the MinMax algebra provides a form of recurrence that is expressively powerful, efficiently implementable, and most importantly it is not affected by vanishing or exploding gradient\. We call MinMax Recurrent Neural Cascades \(RNCs\) the models obtained by cascading several layers of neurons that employ such recurrence\. We show that MinMax RNCs enjoy many favourable theoretical properties\. First, their formal expressivity includes all regular languages, arguably the maximal expressivity for a finite\-memory system\. Second, they can be evaluated in parallel with a runtime that is logarithmic in the input length given enough processors—and they can also be evaluated sequentially\. Third, their state and activations are bounded uniformly for all input lengths\. Fourth, at almost all points, their loss gradient exists and it is bounded\. Fifth, they do not exhibit a vanishing state gradient: the gradient of a state w\.r\.t\. a past state can have constant value one regardless of the time distance between the two states\. Finally, we find empirical evidence that the favourable theoretical properties of MinMax RNCs are matched by their practical capabilities: they are able to perfectly solve a number of synthetic tasks, showing superior performance compared to the considered state\-of\-the\-art recurrent neural networks; also, we train a MinMax RNC of 127M parameters on next\-token prediction, and the obtained model shows competitive performance for its size, providing evidence of the potential of MinMax RNCs on real\-world tasks\.

## Greedy Alignment Principle for Optimizer Selection

**Authors:** Jaerin Lee; Kyoung Mu Lee

**ID:** 154812 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Alx4pHbiDI>) | [PDF](<https://openreview.net/pdf?id=Alx4pHbiDI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154812>)

Recent works have shown that gradient\-update alignment is a powerful signal for modulating optimizer updates and improving training dynamics\. We promote this update\-wise heuristic into a mathematically grounded principle for selecting and tuning optimizer hyperparameters\. By treating gradients and updates as signals, and an optimizer as a causal filter that maps between them, we formulate optimizer selection as maximizing the expected drop rate in loss over a prescribed family of optimizers\. We show that this objective is exactly the inner product between the optimizer filter and the gradient autocorrelation, and prove that a greedy optimum exists and has a stability bound under perturbations of the estimated gradient statistics\. Specializing in momentum\-based optimizers, the theory yields simple dynamic momentum selection rules for both SGD\+Momentum and Adam/AdamW\. Experiments across image classification, language model fine\-tuning, and vision transformer fine\-tuning show that the resulting dynamic momentum rules match or improve upon the best fixed hyperparameters found via manual sweeps, reducing the need for exhaustive momentum sweeps\.

## Does Mixed Label Imbalance Matter to Minority Collapse in Imbalanced Learning?

**Authors:** Hoyong Kim; Kangil kim

**ID:** 156069 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0g48FtWsjv>) | [PDF](<https://openreview.net/pdf?id=0g48FtWsjv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156069>)

Minority collapse , where minority classes become indistinguishable, is a significant challenge in imbalanced learning\. This challenge is addressed by methods such as Mixup with class\-balanced sampling\. Although minority collapse has been mathematically analyzed using the layer\-peeled model alongside Neural Collapse, no prior work has analyzed minority collapse under Mixup, particularly from the perspective of mixed labels\. We investigate this overlooked factor and raise the question: Is mixed label balance important for alleviating minority collapse? Our analysis reveals that \(i\) mixed labels should be balanced, and \(ii\) in this setting, interpreting mixed labels as singletons is beneficial\. Motivated by this analysis, we propose a Balanced Mixed Label Sampler and a Mixed\-Singleton classifier , which balance mixed labels and treat them as singleton labels\. Through theoretical analysis and experimental results, we highlight the importance of balancing mixed labels in imbalanced learning\.

## Training\-Induced Escape from Token Clustering in a Mean\-Field Formulation of Transformers

**Authors:** Noboru Isobe; Daisuke Inoue; Masaaki Imaizumi

**ID:** 153798 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IcdBtJcDy7>) | [PDF](<https://openreview.net/pdf?id=IcdBtJcDy7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153798>)

Transformers perform inference by iteratively transforming token representations across layers\. This layerwise computation has been studied empirically, and recent mean\-field theories of Transformer dynamics explain how attention can drive token distributions toward clustering\. However, existing mean\-field analyses largely treat model parameters as prescribed, leaving open how training reshapes this clustering picture\. We study this question in a noisy mean\-field Transformer in which only a parameter\-linear FFN is trained under $L^2$ regularization\. We find and analyze a training\-induced phase in the dynamics: after initially following attention\-driven clustering, the token distribution can leave the clustered regime near the final layers\. Our mathematical analysis is based on an entropy\-regularized interaction energy that captures the clustering bias of attention\. More broadly, our results point toward a training\-aware mean\-field theory of Transformer dynamics, in which training and inference dynamics are treated together\.

## Aligning Inductive Bias for Data\-Efficient Generalization in State Space Models

**Authors:** Qiyu Chen; Guozhang Chen

**ID:** 150462 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hr5OmcgyP5>) | [PDF](<https://openreview.net/pdf?id=hr5OmcgyP5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150462>)

The remarkable success of modern AI has been closely tied to scaling laws, yet the finite supply of high\-quality data makes data efficiency—learning more from less—an increasingly important frontier\. A model’s inductive bias is a critical lever for data efficiency, but foundational sequence models such as State Space Models \(SSMs\) often rely on fixed, task\-agnostic biases\. When this fixed prior is misaligned with the underlying structure of a task, the model may require additional samples to overcome its own bias before learning the relevant signal\. In this work, we introduce a principled framework for understanding and aligning the inductive bias of linear time\-invariant SSMs\. We first formalize this bias through an SSM\-induced kernel and show theoretically and empirically that its spectrum is governed by the model’s frequency response\. This characterization motivates Task\-Dependent Initialization \(TDI\), a fast power\-spectrum matching method that aligns the initial SSM bias with the task’s spectral characteristics before downstream training\. Across controlled synthetic experiments, trainable one\-layer SSMs, and deep SSMs on diverse real\-world benchmarks, TDI can improve data\-efficient generalization primarily when task\-relevant spectral structure is present and the default SSM bias is spectrally mismatched\. Our results provide both a theoretical lens and a practical tool for task\-adaptive inductive bias, suggesting a path toward more data\-efficient sequence modeling\.

## When and Why Adversarial Training Improves PINNs: A Neural Tangent Kernel Perspective

**Authors:** Yuandong Cao; Chi C So; Jun\-Min Wang; He Wang

**ID:** 152854 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PtBaGypLzm>) | [PDF](<https://openreview.net/pdf?id=PtBaGypLzm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152854>)

Physics\-informed neural networks \(PINNs\) are powerful surrogates for differential equations but are notoriously difficult to train due to spectral bias, stiffness, and poor accuracy on high\-frequency or multiscale solutions\. Adversarial training based on generative adversarial networks \(GANs\) has recently gained surprisingly strong empirical results in improving training, but the underlying mechanisms remain elusive\. To this end, we propose a new analysis framework for adversarially trained PINNs, based on the key observation of how the discriminator in GANs can influence the training dynamics of PINNs\. The framework first provides a much needed theoretical grounding to why and when adversarial training is effective in PINNs, then presents a unified analysis of GANs variants in such training, and finally leads to a new, practical, efficient training algorithm for PINNs\. Empirical results demonstrate that our method can significantly reduce the pathology of PINNs training, thereby providing better models with superior performances, often several magnitudes more accurate than alternative methods\.

## A Theoretical Analysis of Test\-Driven Code Generation

**Authors:** Nicolas Menet; Michael Hersche; Andreas Krause; Abbas Rahimi

**ID:** 149483 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pnb7TQTzC2>) | [PDF](<https://openreview.net/pdf?id=pnb7TQTzC2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149483>)

Code assistants are increasingly utilized in test\-driven software development, yet the theoretical mechanisms behind their environment\-interaction strategies remain underexplored\. We provide a probabilistic framework for two dominant paradigms: code selection after generation using the execution environment, and code generation conditioned on environment feedback\. First, we formalize several well\-established selection heuristics as environment\-aware estimators of code correctness\. We theoretically prove that estimators based on fuzzy functional similarity add an inductive bias and strictly dominate estimators based on functional equivalence in terms of signal\-to\-noise ratio\. Second, we frame backprompting as an in\-context approximation of Thompson sampling\. We derive a novel regret bound for reward functions with unobservable components, theoretically explaining why the effectiveness of backprompting is limited by the ambiguity of the informal task description \(an irreducible regret\)\. Using five state\-of\-the\-art open weight models, we corroborate these findings across BigCodeBenchHard, LeetCodeDataset, and QiskitHumanEvalSim\. Our formalization also suggests how to improve task descriptions effectively, leading to a new benchmark, QiskitHumanEvalSimX\.

## Test time training enhances in\-context learning of nonlinear functions

**Authors:** Kento Kuwataka; Taiji Suzuki

**ID:** 152817 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QApUDGBavW>) | [PDF](<https://openreview.net/pdf?id=QApUDGBavW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152817>)

Test\-time training \(TTT\) enhances model performance by explicitly updating designated parameters prior to each prediction to adapt to the test data\.  While TTT has demonstrated considerable empirical success, its theoretical underpinnings remain limited, particularly for nonlinear models\.  In this paper, we investigate the combination of TTT with in\-context learning \(ICL\), where the model is given a few examples from the target distribution at inference time\.  We analyze this framework in the setting of single\-index models, where the feature vector is drawn from a hidden low\-dimensional subspace\.  For single\-layer transformers trained with gradient\-based algorithms and adopting TTT, we establish an upper bound on the prediction risk\.  Our theory reveals that TTT enables the single\-layer transformers to adapt to both the feature vector and the link function, which vary across tasks\.  This creates a sharp contrast with ICL alone, which is theoretically difficult to adapt to shifts in the link function\.  Moreover, we provide the convergence rate with respect to the data length, showing the predictive error can be driven arbitrarily close to the noise level as the context size and the network width grow\.

## The Multiscale Single\-Index Model: A Toy Model for Hierarchical Feature Learning

**Authors:** Gordon Dai; Joan Bruna

**ID:** 152129 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VI6PExULcy>) | [PDF](<https://openreview.net/pdf?id=VI6PExULcy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152129>)

We introduce the Multiscale Single\-Index Model, a stylized model for deep hierarchical feature learning with scale separation\. Each layer extracts a shared single\-index feature at one physical scale and passes it to the next, giving a tractable setting in which to study how deep architectures learn local multiscale representations\. Under non\-degeneracy and delocalization assumptions on the link function and planted features respectively, we prove two complementary recovery guarantees\.   First, for any fixed depth $K$ and local scale $d$, corresponding to an input of size $d^K$, the first Wiener chaos expansion of the target behaves as a perturbed spiked tensor, where the perturbation comes from the non\-linearity; we then leverage this fact to show that a spectral method based on tensor unfolding strongly recovers all planted directions with $O\(d^\{\\lceil K/2\\rceil\}\\log d\)$ samples\. Second, for the two hidden\-layer case, we analyze joint online spherical SGD and show that it achieves weak recovery from random initialization in $O\(d\\log^2 d\)$ samples, followed by strong recovery to accuracy $\\varepsilon$ in $O\(d\\log\(1/\\varepsilon\)\)$ additional samples\. The main technical challenge is that the second layer observes non\-Gaussian learned features; we overcome this through a quantitative Gaussian comparison using delocalization, combined with sharp trajectory\-level control of the coupled SGD dynamics\.

## Fast and slow gradient descent dynamics of logistic regression through weak alignment

**Authors:** Han Bao

**ID:** 152237 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UYEfZQ9sax>) | [PDF](<https://openreview.net/pdf?id=UYEfZQ9sax>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152237>)

Gradient descent has been of particular interest in modern machine learning beyond sole focus on optimization because some specific structures emerge through the optimization dynamics\. Such behaviors result from optimization even though the learning objective does not explicitly encode the target structure, collectively called implicit bias, often preventing overparametrized models from fitting to spurious patterns\. A typical instance is the max\-margin implicit bias of a linear classifier, widely established for exponentially tailed loss functions\. Even after having a given dataset separated, the parameter vector continues to evolve towards the max\-margin direction asymptotically along the gradient descent dynamics\. This phenomenon corroborates a frequent empirical observation of \`\`train longer, generalize better\.'' However, the max\-margin convergence is an asymptotic phenomenon, and what is worse, this asymptotic convergence rate is significantly slower than convergence in optimization\. Even so, the parameter vector along gradient descent dynamics commonly correlates with the max\-margin direction positively \(though not exactly\) within considerably fewer iterations than the asymptotic rate\. By shedding another light on this classical yet profound problem, this work aims to understand the mechanism of this early\-stage alignment phenomenon\. Our theoretical results demonstrate that the parameter vector weakly aligns with the max\-margin direction within $O\(\\exp\(\\exp\(\-\\delta\)\)\)$ iterations, where $\\delta&gt;0$ is the permissible alignment error, which is shown to be tight\. By tracking the radial and tangential flows, our proof operates on the alignment dynamics directly with dataset geometry and gets rid of the asymptotic expansion, which is a key insight to enabling faster weak alignment\.

## Uniform Stability and Generalization Error of GD and SGD on Fixed\-Point Parameters

**Authors:** Jonghyun Shin; Sejun Park

**ID:** 155017 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9AzGTXBJJC>) | [PDF](<https://openreview.net/pdf?id=9AzGTXBJJC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155017>)

We analyze generalization error, uniform stability, and uniform argument stability of gradient descent \(GD\) and stochastic gradient descent \(SGD\) over discrete parameter spaces, where each update involves deterministic or stochastic rounding\. We show that deterministic rounding degrades the generalization error of GD on convex, Lipschitz, and smooth loss functions, increasing the rate from $O\(T/n\)$ to $O\(T/\\sqrt\{n\}\)$, and establish matching lower bounds\. We further prove that uniform stability of GD becomes $\\Omega\(T\)$, showing that stability\-based generalization bounds are vacuous in this setting\. In contrast, for the same losses, stochastic gradient descent with deterministic rounding admits nontrivial uniform stability guarantees, which differ qualitatively from the real\-valued case and exhibit distinct dependencies on the number of iterations and the dimension: we prove tight bounds $O\(T/n\)$ for one dimension and $O\(T^2/n\)$ for higher dimensions\. We also show that stochastic rounding can introduce generalization error that increases with the dimension; such a phenomenon is absent in standard real\-valued optimization and in the deterministic rounding case\. Finally, we provide upper bounds on uniform argument stability for stochastic rounding schemes and show that these bounds are tight when the loss can be represented as a sum of coordinate\-wise functions\.

## SGD in Multiclass Logistic Regression: Sequential Learning and Scaling Laws

**Authors:** Konstantinos Tsiolis; Denny Wu; Christos Thrampoulidis; Murat Erdogdu

**ID:** 150037 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lF5Y8IbCiq>) | [PDF](<https://openreview.net/pdf?id=lF5Y8IbCiq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150037>)

We study the training dynamics of multiclass logistic regression on high\-dimensional Gaussian mixture models with a large number of classes and establish precise scaling laws governing the cross\-entropy risk under gradient\-based optimization\. We show that learning proceeds sequentially across classes, from most to least frequent\. When the class priors follow a power law distribution, the risk dynamics decompose into three phases: an initial plateau until the first class is learned, a power\-law decay regime during which sequential learning occurs, and a final convergence regime\.   We then analyze how model capacity interacts with optimization under a fixed compute budget\. When the effective dimension is restricted via projection onto leading principal components, the risk decomposes into a capacity term \(a power law in the retained dimension\) and an optimization term \(a power law in training time\)\. Optimizing this tradeoff yields a compute\-optimal scaling law for logistic regression, with explicit prescriptions for model size and training time as functions of compute\. These results extend theoretical scaling laws from linear regression to multiclass classification, while connecting to empirical scaling laws observed in large\-scale neural networks\.

## Foundations of Categorical Equivariant Deep Learning

**Authors:** Yoshihiro Maruyama

**ID:** 150485 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hjObz8dLml>) | [PDF](<https://openreview.net/pdf?id=hjObz8dLml>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150485>)

Symmetry\-aware learning is typically framed as equivariance to a single group action, but many real\-world distribution shifts are typed, partial/non\-invertible, and compositional \(e\.g\., modality changes, occlusion, subsampling, intervention chains\)\. These shifts are better modeled by a category of transformations whose objects represent data contexts and whose morphisms represent admissible transformations between contexts\. We thus extend symmetry\-aware machine learning from groups to such transformation categories; enforcing categorical equivariance on neural architectures gives stronger robustness than group equivariance\. We ground this in both theory and experiments\. We formulate a universal approximation theorem for category\-equivariant architectures and show density in the space of equivariant continuous transformations\. We present experiments on compositional OOD shifts, demonstrating that enforcing categorical equivariance yields measurable robustness gains over group\-equivariant and non\-equivariant baselines\.

## Data\-Free Metrics Are Not Invariant Under Functionality\-Preserving Reparametrisations

**Authors:** Gabryel Mason\-Williams; Israel Mason\-Williams; Fredrik Dahlqvist

**ID:** 152919 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PQie2dx3oX>) | [PDF](<https://openreview.net/pdf?id=PQie2dx3oX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152919>)

Data\-free methods for analysing and understanding the layers of neural networks offer many metrics for quantifying notions of \`strong' versus \`weak' layers, with the promise of increased interpretability\. In particular,  random matrix theory \(RMT\) offers data\-free metrics that claim predictive power over the quality of pre\-trained models at a layerwise precision and the ability to identify model pathologies, indicating a unique relationship with generalisation\. As a result, metrics from RMT are championed for pre\-training optimisation strategies and post\-training compression\.  We establish that RMT\-based metrics are unrelated to performance or training by showing that functionally indistinguishable reparametrisations of a pre\-trained model can have arbitrary metrics\. We show this across a range of architectures and scales\. To create functionally indistinguishable reparametrisations, we exploit the well\-established phenomenon of criticality: some layers can be re\-initialised or re\-randomised without affecting the functional behaviour of the model \-\- they are called robust \-\- while others cannot \-\- they are called critical\. Re\-initialising or re\-randomising robust layers provides functionally indistinguishable reparametrisations for which RMT\-based metrics are arbitrary\. Moreover, we show that relationships between metrics offered by RMT are spuriously related to generalisation\. We conclude by showing that if many pre\-trained models have data\-free metrics in a \`good' range, it is, in part, dependent on model initialisation\.

## Why Geometric Continuity Emerges in Deep Neural Networks: Residual Connections and Rotational Symmetry Breaking

**Authors:** Kyungwon Jeong; Won\-Gi Paeng; Honggyo Suh

**ID:** 152913 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PT9wd2ehVL>) | [PDF](<https://openreview.net/pdf?id=PT9wd2ehVL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152913>)

Weight matrices in deep networks exhibit geometric continuity\-\-\-principal singular vectors of adjacent layers point in similar directions\. While this property has been widely observed, its origin remains unexplained\. Through experiments on toy MLPs and small transformers, we identify two mechanisms: residual connections create cross\-layer gradient coherence that aligns weight updates across layers, and symmetry\-breaking nonlinearities constrain all layers to a shared coordinate frame, preventing the rotation drift that would otherwise destabilize weight structure\. Crucially, a nonlinear but rotation\-preserving activation fails to retain continuity, isolating symmetry breaking\-\-\-not nonlinearity itself\-\-\-as the active ingredient\. Activation and normalization play distinct roles: activation concentrates continuity in the leading singular direction, while normalization distributes it across multiple directions\. In transformers, continuity is \\emph\{projection\-specific\}: Q, K, Gate, and Up \(which read from the residual stream\) develop input\-space \($\\mathbf\{v\}\_1$\) continuity; O and Down \(which write to it\) develop output\-space \($\\mathbf\{u\}\_1$\) continuity; V alone, lacking an adjacent nonlinearity, develops only low continuity\.

## How Finite\-Rank Bottleneck Shape the Low\-Rank Adaptation Landscape

**Authors:** Long Nguyen\-Chi; Quynh Nguyen; Thanh Nguyen Cung; Binh T\. Nguyen

**ID:** 150830 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eyfZvKjtnQ>) | [PDF](<https://openreview.net/pdf?id=eyfZvKjtnQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150830>)

Low\-rank adaptation \(LoRA\) has become the standard method for parameter\-efficient fine\-tuning of large pretrained models, yet theoretical explanations for why low\-rank updates suffice remain incomplete\. Most existing analyses rely on the Neural Tangent Kernel \(NTK\) regime, which linearizes the network around the pretrained weights\. In this work, we take a different approach that requires no linearization: our key observation is that, once the backbone is frozen, the loss sees each adapted weight matrix only through a finite\-rank linear map induced by the frozen activations\. Trace\-norm regularization then forces the optimizer to pick a low\-rank matrix among all matrices that produce the same observed output\. This yields global minimizers whose ranks are controlled by the rank of this map, which we call the \\emph\{bottleneck rank\}, rather than the sample size\. For multi\-head attention, we obtain tighter rank upper bounds by exploiting two additional invariances: row\-wise softmax is insensitive to additive row constants in the score matrix, and value updates are observable only after attention weighting and frozen output projection\. For the factorized LoRA objective with weight decay, we prove a complementary result on the nonconvex side: after an arbitrarily small generic positive semidefinite perturbation, every first\-order stationary point is rank\-deficient once the LoRA rank exceeds a threshold determined by the bottleneck rank\. Finally, we show that global minimizers of the perturbed objective are near\-optimal for the original trace\-norm problem, and we provide uniform generalization bounds governed by the spectral structure of the frozen features\.

## Continual Learning in Modern Hopfield Networks with an Application to Diffusion Models

**Authors:** Ken Takeda; Masafumi Oizumi; Ryo Karakida

**ID:** 152180 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UyZlLEPgiU>) | [PDF](<https://openreview.net/pdf?id=UyZlLEPgiU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152180>)

Generative models, including diffusion models, are increasingly used as foundation models and adapted through sequential fine\-tuning, making continual learning an essential problem setting\. However, continual learning in such generative models remains poorly understood: after a task change, what aspects of the learned distribution are most easily lost, and what replay samples should be prioritized?  We address these questions through the modern Hopfield energy\. Recent links between modern Hopfield networks \(MHNs\) and diffusion models allow analyses in MHNs to be transferred to diffusion models\. We introduce intrinsic forgetting as an increase in Hopfield energy after the task change\. In tractable  settings in an MHN, we prove that high\-energy, outlier\-like samples undergo a larger energy increase than cluster\-like samples, implying that samples located in sharp, isolated basins are more forgettable\. We further analyze memory replay and show that replay is particularly effective for high\-energy samples, enabling an energy\-based  selection of replay samples\. We validate these predictions in experiments on MHNs and two diffusion models under continual\-learning settings: Stable Diffusion and a pixel\-space DDPM\. In these diffusion models, Hopfield energy tracks reconstruction\-based forgetting, and replay experiments reveal energy\-dependent mitigation of forgetting that is consistent with the MHN analysis\.

## Geometric Analysis of Neural Regression Collapse via Intrinsic Dimension

**Authors:** George Andriopoulos; Zixuan Dong; Bimarsha Adhikari; Keith Ross

**ID:** 148252 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zGe5UWouYJ>) | [PDF](<https://openreview.net/pdf?id=zGe5UWouYJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148252>)

Neural multivariate regression underpins a wide range of domains such as control, robotics, and finance, yet the geometry of its learned representations remains poorly characterized\. While neural collapse has been shown to benefit generalization in classification, we find that analogous collapse in regression consistently degrades performance\. To explain this contrast, we analyze models through the lens of intrinsic dimension\. Across control tasks and synthetic datasets, we estimate the intrinsic dimension of last\-layer features \($ID\_H$\) and compare it with that of the regression targets \($ID\_Y$\)\. Collapsed models exhibit $ID\_H &lt; ID\_Y$, leading to over\-compression and poor generalization, whereas non\-collapsed models typically maintain $ID\_H &gt; ID\_Y$\. For the non\-collapsed models, performance with respect to $ID\_H$ depends on the data quantity and noise levels\. From these observations, we identify two regimes—over\-compressed and under\-compressed—that determine when expanding or reducing feature dimensionality improves performance\. Our results provide new geometric insights into neural regression and suggest practical strategies for enhancing generalization\.

## Positional Encoding and Prompt\-Order Sensitivity in In\-Context Learning

**Authors:** Zhijie Wang; Bo Jiang; Shuai Li

**ID:** 151605 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZJxEzyLoXN>) | [PDF](<https://openreview.net/pdf?id=ZJxEzyLoXN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151605>)

Transformer models have demonstrated a remarkable ability to perform a wide range of tasks through in\-context learning \(ICL\), where the model infers patterns from a small number of example prompts provided during inference\. However, empirical studies have shown that the effectiveness of ICL can be significantly influenced by the order in which these prompts are presented\. Despite its significance, this phenomenon has been largely unexplored from a theoretical perspective\. In this paper, we theoretically investigate how positional encoding \(PE\) affects the ICL capabilities of linear attention transformer models, particularly in tasks where prompt order plays a crucial role\. We examine two distinct cases: linear regression, which represents an order\-invariant task, and dynamical systems, a classic time\-series task that is inherently sensitive to the order of input prompts\. Theoretically, we evaluated the change in the model output when two types of positional encoding \(one\-hot and RoPE\) is incorporated and the prompt order is altered\. In all cases, the leading dependence on the permutation size and context length is $k/N$, with constants determined by the positional encoding, model weights, input dimension, and task dependent parameters\. These theoretical findings are experimentally validated\.

## When and How to Canonize: a Generalization Perspective

**Authors:** Yonatan Sverdlov; Benjy Friedmann; Snir Hordan; Nadav Dym

**ID:** 151406 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=auino4yMsg>) | [PDF](<https://openreview.net/pdf?id=auino4yMsg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151406>)

While equivariant architectures are standard for processing symmetric data, there is growing interest in achieving equivariance by applying group averaging or canonization to non\-equivariant backbones\. However, the theoretical generalization properties of these alternative strategies remain poorly understood\. We introduce a theoretical framework to analyze the generalization error of these methods by bounding their covering numbers\. We establish a rigorous generalization hierarchy: the error bounds of canonized models are at best equal to the error bounds of structurally equivariant and group\-averaged models, and at worst equal to the bounds of  non\-equivariant baselines\. Furthermore, we show that there exist "optimal" canonizations which attain the optimal error bounds, and "poor" canonizations which attain the non\-equivariant error bounds, and that this depends on the regularity of the canonization\. Finally, applying this framework to permutation groups in point cloud processing, we rigorously prove that the covering number of lexicographical sorting grows exponentially with point cloud dimension, whereas Hilbert curve canonization guarantees polynomial growth\. This  provides the first formal theoretical justification for the empirical success of Hilbert curve serialization in state\-of\-the\-art point cloud architectures\. We conclude with experiments which support our theoretical claims\.

## Sup\-Norm Error under Proportional Asymptotics: Phase Transitions under Linear Regression

**Authors:** Lin Liu; Debarghya Mukherjee; Rajarshi Mukherjee; Zixiao Jolene Wang

**ID:** 151827 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XfpASsxBGU>) | [PDF](<https://openreview.net/pdf?id=XfpASsxBGU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151827>)

This paper characterizes the sharp asymptotics of the $\\ell\_\{\\infty\}$\-norm estimation error for estimating the coefficient vector in linear regression under proportional asymptotics\. While $\\ell\_2$\-error is well\-documented, we demonstrate that the $\\ell\_\{\\infty\}$\-error exhibits a distinct phase transition governed by the structure of the underlying signal\. We explore this through the lens of a class of estimators that include ridge\-regularized estimators, a method\-of\-moments estimator, and the ordinary least squares estimator for the under\-parametrized regime\. Our results provide a comparative study of these estimators and characterize regimes \(as identified by  the maximal signal component, number of large signals, total signal strength, and noise variance\)  where one estimator is preferable to the others\. As a by\-product, we obtain new double descent curves in $\\ell\_\{\\infty\}$\-error metric for the ridgeless regression, as well as ingredients for uniform confidence intervals for the signal coordinates\. Our theoretical results are supported by extensive numerical simulations that confirm the predicted phase transitions and error limits\.

## Parallel Computation Algorithms and Convergence Guarantees for Mean\-Field Langevin Dynamics

**Authors:** Yoshihito Okamoto; Huanjian Zhou; Taiji Suzuki

**ID:** 153482 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L2cmR58g9Y>) | [PDF](<https://openreview.net/pdf?id=L2cmR58g9Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153482>)

Entropy\-regularized optimization problems arise in various areas of machine learning, including mean\-field neural networks, variational inference, and reinforcement learning\. Mean\-field Langevin dynamics \(MFLD\) is a dynamics capable of sampling from the optimal solution of such problems under appropriate conditions, and has been the subject of extensive recent research\. As machine learning models grow in scale and parameter dimension,  computational efficiency becomes increasingly important, especially in reducing the adaptive complexity of computation of MFLD, that is, the number of sequential rounds they require\. In this work, we initiate the study of the adaptive complexity of MFLD and provide the first theoretical evidence that MFLD can indeed be accelerated through parallelism\. In particular, we provide polylogarithmic convergence guarantees for both the infinite\-particle and finite\-particle setting under the log\-Sobolev inequality\.

## Laplacian Heads Improve Transformers by Smoothing Token Representations

**Authors:** Yuchong Zhang; Vardan Papyan

**ID:** 149696 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o6wVXdc2L1>) | [PDF](<https://openreview.net/pdf?id=o6wVXdc2L1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149696>)

Transformers update token representations through multi\-head attention and residual connections as $X \\leftarrow X \+ \\sum\_\{i\} P^\{\(i\)\}XW\_\{V\_i\}W\_\{o\_i\}$, where $P^\{\(i\)\}$ is the softmax attention matrix in head $i$\. We propose replacing a subset of $P^\{\(i\)\}$'s with the Laplacian $I \- P^\{\(i\)\}$, giving $X \\leftarrow X \+ \\sum\_\{i \\in \\mathcal\{A\}\} P^\{\(i\)\}XW\_\{V\_i\}W\_\{o\_i\} \+ \\sum\_\{i \\in \\mathcal\{L\}\} \(I \- P^\{\(i\)\}\)XW\_\{V\_i\}W\_\{o\_i\}$\. Our proposal has two motivations\. First, it allows attention heads to update the mean of token representations, while Laplacian heads can directly control within\-sequence variance\. Second,      if tokens are viewed as nodes in a graph with edge weights \\\(P^\{\(i\)\}\\\), then \\\(I \- P^\{\(i\)\}\\\) is the corresponding graph Laplacian, and the update can be interpreted as one step of heat diffusion on the graph\. We show that this simple modification improves performance across supervised learning, language modeling, and self\-supervised learning tasks\. To investigate why, we examine the token representations learned with and without Laplacian heads\. In supervised learning, Laplacian heads collapse token representations within the same sequence and align the sequence means with the geometry of Neural Collapse\. In language modeling, they increase the separability of token representations that share the same next\-token prediction\. In self\-supervised learning, they produce token representations whose principal components are better suited for segmentation\. Across modalities, they also lead to faster\-decaying spectra, indicating stronger token smoothing\. Overall, our findings challenge the prevailing view that token oversmoothing is inherently harmful, showing instead that certain forms of smoothing can be beneficial\.

## Generalization in Neural Networks Through the Lens of Magnitude Potential

**Authors:** Sahel Torkamani; Henry Gouk; Rik Sarkar

**ID:** 152152 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V9A3lPMU5E>) | [PDF](<https://openreview.net/pdf?id=V9A3lPMU5E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152152>)

Explaining the generalization and training dynamics in neural networks remains a challenge, and various approaches have been developed to study different aspects of these phenomena\.  In this paper, we introduce the \*magnitude potential\* to this study \-\- a quantity based on the theory of metric magnitude \-\- that reflects how well an arbitrary point is represented by a given set\. We find that this basic quantity can be applied to examine various features in neural generalization\. The ratio between the magnitude potential with respect to a class and with respect to the entire data, computed at the logit layer, is informative of the representation of the point\. In experiments, these ratios for individual training points are found to be correlated with the Feldman memorization scores\.  Magnitude potential ratios aggregated across points detect structural changes in the decision boundaries and provide a geometric indicator of grokking in modular arithmetic\. Although the magnitude potential ratio and neural collapse are both closely associated with intra\-class and inter\-class geometric structure, the magnitude potential ratio remains informative even when neural collapse is explicitly suppressed\.

## Spherical Boltzmann machines: a solvable theory of learning and generation in energy\-based models

**Authors:** Thomas Tulinski; Simona Cocco; Remi Monasson; Jorge FERNANDEZ\-DE\-COSSIO\-DIAZ

**ID:** 148834 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=umxDs0EMN1>) | [PDF](<https://openreview.net/pdf?id=umxDs0EMN1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148834>)

Energy\-based models \(EBMs\) are flexible generative architectures inspired by statistical physics, but their learning and generative properties remain poorly understood\. Here, we analyze a solvable EBM in the high\-dimensional limit: the spherical Boltzmann machine \(SBM\)\. Combining tools from random matrix theory and dynamical mean\-field theory, we: solve exact equations describing the training dynamics of the SBM; compute the Bayesian evidence, which acts as a partition function in parameter space and encodes global properties of the trained model; and uncover cascades of phase transitions that occur both during training and as a function of hyperparameters, related to successive alignment and condensation of the top modes of the coupling matrix to the data\. We connect these transitions to sampling\-time generative phenomena in a teacher\-student scenario, including: sampling temperature tuning, double descent as a function of regularization strength, tempered posterior effects, and out\-of\-equilibrium effects during training that induce biases in the trained model\. We provide numerical evidence demonstrating that all these phenomena appear in standard generative architectures, beyond the SBM\.

## Global Convergence in Deep Networks via the Second Law of Thermodynamics

**Authors:** Matan Tsipory; Ofir Gaash; Itamar Harel; Nati Srebro; Daniel Soudry

**ID:** 154684 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BkwQDuwKFM>) | [PDF](<https://openreview.net/pdf?id=BkwQDuwKFM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154684>)

Existing convergence analyses of finite\-width overparameterized deep neural networks under standard parameterization often rely on parameters remaining close to their initialization and typically neglect the role of noise, despite empirical evidence that stochasticity can improve optimization and generalization\. To bridge this gap, we study $L\_2$\-regularized continuous\-time Langevin dynamics\~\(CLD\) for training a feedforward neural network with smooth activations\. We introduce a change\-of\-measure inequality, inspired by the second law of thermodynamics, that enables control of key properties of the training dynamics under the time\-evolving parameter distribution\. Leveraging a sharpened lower bound on the minimum eigenvalue of the Neural Tangent Kernel \(NTK\) at initialization, we show that injected noise helps preserve NTK stability with high probability without confining the weights to a small neighborhood of their initialization\. As a result, we derive a non\-asymptotic upper bound on the expected training loss\. Our analysis yields explicit conditions on width and noise temperature that guarantee convergence to a finite loss floor\. Finally, we experimentally show the network Jacobian can change from initialization, departing the commonly analyzed lazy regime\.

## Outcome\-Based RL Provably Leads Transformers to Reason, but Only With the Right Data

**Authors:** Yuval Ran\-Milo; ‪Yotam Alexander‬‏; Shahar Mendel; Nadav Cohen

**ID:** 151111 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ctcKsexBkZ>) | [PDF](<https://openreview.net/pdf?id=ctcKsexBkZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151111>)

Transformers trained via Reinforcement Learning \(RL\) with outcome\-based supervision can spontaneously develop the ability to generate intermediate reasoning steps \(Chain\-of\-Thought\)\.      Yet the mechanism by which sparse rewards drive policy gradient to discover such systematic reasoning remains poorly understood\.      We address this by analyzing the policy gradient dynamics of single\-layer Transformers on a synthetic graph traversal task that cannot be solved without Chain\-of\-Thought but admits a simple iterative solution\.     We prove that despite training solely on final\-answer correctness, policy gradient drives the Transformer to converge to a structured, interpretable algorithm that iteratively traverses the graph vertex\-by\-vertex\.      We characterize the distributional properties required for this emergence, identifying the critical role of \`\`simple examples'': instances requiring fewer reasoning steps\.     When the training distribution places sufficient mass on these simpler examples, the Transformer learns a generalizable traversal strategy that extrapolates to longer chains; when this mass vanishes, policy gradient learning becomes infeasible\.     We corroborate our theoretical results through experiments on synthetic data and with real\-world language models on mathematical reasoning tasks, validating that our theoretical findings carry over to practical settings\.

## Parameter symmetries determine representational geometry in overparameterized nonlinear networks

**Authors:** Marvin Theiss; Lukas Braun; Andrew Saxe; Erin Grant

**ID:** 150568 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hBTMHDGZsj>) | [PDF](<https://openreview.net/pdf?id=hBTMHDGZsj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150568>)

Representations are routinely used in machine learning, psychology, and neuroscience to probe the computations of biological and artificial systems\. Yet it remains unclear to what extent computation constrains representation in artificial neural networks\. Neural networks admit \*parameter symmetries\*: transformations of the parameters that preserve function exactly but reshape representational geometry\. We show that known parameter symmetries act on representations through just three primitives: \*addition\*, \*duplication\*, and \*scaling\*, giving a closed\-form descriptor of representational geometry as task\-linked features plus symmetry\-induced noise\. This decomposition yields analytic bounds on representational similarity between networks related by parameter symmetry, which reveal when functionally equivalent networks become arbitrarily \*dis\*similar\. Finally, we identify \*privileged\* representational geometries, which weight features by their computational importance and recover a stable link between representation and computation\. Overall, our results delineate when representation can support inferences about computation, and when it cannot\.

## Large language models suffer from a curse of ambiguity

**Authors:** Nicolas Zucchet; Hyun Dong Lee; Scott Linderman

**ID:** 150511 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hY4qGi3waD>) | [PDF](<https://openreview.net/pdf?id=hY4qGi3waD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150511>)

Large language models increasingly rely on sampling as a driver of their own improvement, making the fidelity of their learned distributions more critical than ever\. Yet, not all distributions are equally easy to learn\. In this work, we identify a curse of ambiguity: in large language models, and more broadly in all neural networks that produce discrete probability distributions, the more ambiguous a next\-token distribution is, the harder it is to learn accurately\. Through an extensive theoretical analysis, we trace this curse to architectural and learning roots\. More ambiguous distributions require more capacity to be stored, larger embeddings to be represented, more steps to be fitted, and amplify token\-sampling noise\. We validate these findings on synthetic tasks with controlled ground truth and observe the same signatures in language models trained on real data\. Our results provide a new perspective on the statistical capabilities of large language models and a practical framework for when to trust their output distribution\.

## How to Scale Mixture\-of\-Experts: From muP to the Maximally Scale\-Stable Parameterization

**Authors:** Leena Chennuru Vankadara; Moritz Haas; Luke Hayward; Sebastian Bordt; Alessandro Breccia

**ID:** 155300 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6c5MRDWXkL>) | [PDF](<https://openreview.net/pdf?id=6c5MRDWXkL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155300>)

Recent frontier large language models predominantly rely on Mixture\-of\-Experts \(MoE\) architectures\. Despite empirical progress, there is still no principled understanding of how hyperparameters should scale with network width $N$, expert width $N\_e$, number of experts $M$, sparsity $K$, and depth $L$ to ensure both stability and optimal performance at scale\. We take a principled step toward resolving this gap by analyzing three different scaling regimes: \(I\) co\-scaling $N\\asymp N\_e$, \(II\) co\-scaling $N\\asymp M\\asymp K$, and \(III\) full proportional scaling of $N, N\_e, M$, and $K$\. For each regime, we develop a novel Dynamical Mean Field Theory \(DMFT\) description of the limiting training dynamics of MoEs that provides a formal foundation for our analysis\. Within this framework, we derive the unique parameterization for SGD and Adam satisfying all maximal\-update \($\\mu$\) desiderata\. We then show that the resulting $\\mu$P prescription induces neither monotonic improvement with scale nor robust learning\-rate transfer\. We trace these pathologies to scale\-dependent observables in the aggregation dynamics, which motivates a refined set of desiderata that we term \*maximal scale stability\*\. Guided by this principle, we derive a \*Maximally Scale\-Stable Parameterization\* \(MSSP\) for both SGD and Adam in all three scaling regimes, and characterize the corresponding limiting dynamics \- qualitatively distinct from the $\\mu$P limit \- through a separate DMFT analysis\. Experiments verify that MSSP robustly recovers learning rate transfer and monotonic improvement with scale across regimes\. Combined with existing depth\-scaling theory, these results provide a complete scaling prescription for MoE architectures as a function of width, depth, expert width, and number of experts\.

## TropNNC: Structured Neural Network Compression Using Tropical Geometry

**Authors:** Konstantinos Fotopoulos; Petros Maragos; Panagiotis Misiakos

**ID:** 156769 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156769>)

We present TropNNC, a framework for compressing neural networks with linear and convolutional layers and ReLU\-type activations using tropical geometry\. By representing a network’s output as a tropical rational function, TropNNC enables structured compression via reduction of the corresponding tropical polynomials\. Our method identifies redundancy via similarity and improves upon the geometric approximation of previous work by adaptively selecting the weights of retained neurons\. We relate it to SVD and spectral clustering, and provide insights into network compression beyond the specific setting considered\. We provide the tightest known theoretical compression bound, and the first successful application of tropical geometry to convolutional layers\. TropNNC requires access only to network weights – no training data – and achieves competitive performance on MNIST, CIFAR, and ImageNet, matching strong baselines such as ThiNet and CUP\.

## Controlling for Omitted Variable Bias in Deep Neural Networks

**Authors:** Manuel Pfeuffer; Roshan P Rane; Kerstin Ritter; Sonja Greven

**ID:** 153604 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K9sgYlq0Bi>) | [PDF](<https://openreview.net/pdf?id=K9sgYlq0Bi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153604>)

Control variables are widely used in statistical modelling to account for omitted variable bias\. However, they have largely been underexplored in deep learning\. This is surprising, given that deep learning models encode image\-inferable covariates, such as demographic variables, into their predictions when these covariates are correlated with the outcome\-\-\-a form of omitted variable bias referred to as 'shortcut learning'\. While many existing confound\-control or fairness methods try to restrict the correlation of such covariates with model predictions, we show that this fails to correct for omitted variable bias\. We therefore propose a control variable approach for deep learning models, based on generalised additive modelling of the effects of model inputs and covariates\. As flexible additive models can suffer from concurvity, we introduce an estimation procedure that refits the final layer of a pre\-trained network to include covariate effects, using cross\-fitting with ridge penalisation\. We show how these effects can be orthogonalised with respect to covariates to exclude their mediated effects and that model predictions can be marginalised over the covariate distribution to control for their effect\. This yields unbiased, interpretable predictions and offers flexibility to model the desired effects depending on the scientific or fairness objective\. We verify our approach using simulated images, where it recovers the true covariate effects, even in small samples\. Existing methods either require more data or fail to recover the true effects\. We apply our method to real neuroimaging data with experimentally induced confounding, where it recovers prediction performance to near the level of a model trained on unconfounded data\.

## Causal pieces: analysing and improving spiking neural networks piece by piece

**Authors:** Dominik Dold; Philipp Petersen

**ID:** 148689 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vmQvISAYfP>) | [PDF](<https://openreview.net/pdf?id=vmQvISAYfP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148689>)

We introduce \*causal pieces\*, a novel concept for analysing spiking neural networks \(SNNs\), inspired by \*linear pieces\* used to study expressivity and trainability in artificial neural networks \(ANNs\)\. Causal pieces partition the input and parameter space of a feedforward SNN with single\-spike coding into distinct regions where the same subnetwork causes the output spikes\. For networks of current\-based leaky integrate\-and\-fire \(LIF\) neurons with large membrane time constants, we show that within each causal piece, output spike times are locally Lipschitz continuous with respect to inputs and network parameters\. We further prove a lower bound on the approximation error that depends on the number of causal pieces\. Thus, the number of causal pieces is a measure of the approximation capabilities of SNNs, which is valid despite spike\-time discontinuities and applies to networks with both excitatory and inhibitory synapses\. Empirically, we find that parameter initialisations yielding more causal pieces on the training set strongly correlate with SNN training success across multiple benchmarks, including Yin\-Yang, Fashion\-MNIST, and EuroSAT\. Moreover, simulations with standard single\-spike LIF neurons indicate that our findings extend beyond the theoretically analysed regime\. These results establish causal pieces as a powerful and principled tool for analysing and improving the computational capabilities of SNNs\.

## Unlocking the Duality between Flow and Field Matching

**Authors:** Daniil Shlenskii; Alexander Varlamov; Nazar Buzun; Aleksandr Korotin

**ID:** 151730 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YWRpiQXslM>) | [PDF](<https://openreview.net/pdf?id=YWRpiQXslM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151730>)

Conditional Flow Matching \(CFM\) unifies conventional generative paradigms such as diffusion and flow\-based models\. Interaction Field Matching \(IFM\) is a recently proposed framework that generalizes Electrostatic Field Matching \(EFM\), rooted in Poisson Flow Generative Models \(PFGM\)\. While both frameworks define generative dynamics, they start from different objects: CFM specifies a conditional probability path in data space, whereas IFM specifies a physics\-inspired interaction field in an augmented data space\. This raises a basic question: \*\*are CFM and IFM genuinely different, or are they two descriptions of the same underlying dynamics?\*\* We show that they coincide for a natural subclass of IFM, which we call \*forward\-only\* IFM\. Specifically, we construct mappings between CFM and forward\-only IFM and show that they induce the same generative dynamics\. We further show that general IFM is strictly more expressive: it includes EFM and other interaction fields that cannot be realized within the standard CFM formulation\. Our findings suggest developing generative models using both interpretations rather than treating them separately\. Moreover, they highlight a novel direction for generative modeling based on backward\-oriented field lines, which lies outside the conventional CFM formalism and may lead to new generative properties\.

## Grokking or Glitching? How Low\-Precision Drives Slingshot Loss Spikes

**Authors:** LIU Hanqing; Jianjun Cao; Yuanze Li; Zijian Zhou

**ID:** 150726 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fs99JEN6m5>) | [PDF](<https://openreview.net/pdf?id=fs99JEN6m5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150726>)

Deep neural networks exhibit periodic loss spikes during unregularized long\-term training, a phenomenon known as the "Slingshot Mechanism\." Existing work usually attributes this phenomenon to intrinsic optimization dynamics, but its triggering mechanism remains unclear\. This paper shows that, under commonly used floating\-point precision, the Cross\-Entropy loss itself can produce a deterministic numerical instability\. As training enters a high\-confidence stage, the difference between the correct\-class logit and the other logits may exceed the absorption\-error threshold of float\-point number\. Then during backpropagation, the gradient of the correct class is rounded exactly to zero, while the gradients of the incorrect classes remain nonzero\. This breaks the zero\-sum constraint of gradients across classes and introduces a systematic drift in the parameter update of the classifier layer\. We prove that this drift forms a positive feedback loop with the feature, causing the global classifier mean and the global feature mean to grow exponentially\. We call this mechanism \_Numerical Feature Inflation\_ \($\\mathcal\{NFI\}$\)\. This mechanism explains the rapid norm growth before a Slingshot spike, the subsequent reappearance of gradients, and the resulting loss spike\. We further show that $\\mathcal\{NFI\}$ is not equivalent to an observed loss spike: in more practical tasks, absorption errors may affect only a subset of samples, so spikes do not necessarily occur, while the same zero\-sum\-breaking mechanism can still drive rapid growth of parameter norms\. Our results reinterpret Slingshot as a numerical dynamic of finite\-precision training, and provide a testable explanation for abnormal parameter growth and logit divergence in late\-stage training\.

## NTK Regression under dual power\-law model: Deterministic Equivalents via SDE and PDE Methods

**Authors:** Collin Cranston; Zhichao Wang; Todd Kemp

**ID:** 151078 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d7UcR23Mnc>) | [PDF](<https://openreview.net/pdf?id=d7UcR23Mnc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151078>)

In the infinite\-width limit, training a neural network \(NN\) via gradient descent reduces to kernel ridge regression \(KRR\) on a deterministic kernel, the Neural Tangent Kernel \(NTK\)\. While the isotropic\-input case of the NTK is well understood, the spectra of real world inputs always exhibit power\-law decay, and the alignment between this spectrum and the target signal has been shown to govern the generalization behavior of the model\. Motivated by this, we study finite\-width NTK regression under a dual power\-law dataset, where data $\\boldsymbol\{x\} \\in \\mathbb\{R\}^\{p\}$ is drawn with covariance $\\boldsymbol\{\\Sigma\}\_\{jj\} = j^\{\-\\alpha\}$ and labels are generated from power\-law truth vector $\\boldsymbol\{\\beta\}\_j = j^\{\-r\}$\.   We introduce a novel technique combining random matrix theory \(RMT\) and stochastic matrix calculus to derive deterministic equivalents for random matrix functionals that determine the prediction risk, including a new $\\textit\{signal\-weighted\}$ resolvent, which yields an explicit formula for the bias\-variance decomposition of NTK regression in the high\-dimensional proportional regime\.   As an application we prove a scaling law for finite\-width NTK regression, explicitly characterizing the decay rate of the optimally\-tuned excess risk jointly in the data and width resources\.

## Two Speeds of Learning: A Representation\-Readout Decomposition of Grokking and Double Descent

**Authors:** Chi\-Ning Chou; Oscar Uzdelewicz; Neng\-Chun Chiu; Yao\-Yuan Yang; SueYeon Chung

**ID:** 153791 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ie9GknsUHy>) | [PDF](<https://openreview.net/pdf?id=Ie9GknsUHy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153791>)

Training loss and accuracy are the standard signals used to monitor generalization during deep neural network training\. Two well\-documented phenomena complicate this picture: in grokking, train loss falls rapidly while test performance improves abruptly only after a long delay; in epoch\-wise double descent, train loss decreases monotonically while test loss or error rises and falls\. Existing accounts are often task\-specific, and a task\-agnostic analysis framework for diagnosing and explaining these phenomena across realistic tasks and architectures is missing\. We address this challenge by analyzing two competing processes that underlie learning dynamics: representation learning in the encoder and readout calibration in the final classifier\. Using tools from representational geometry, neural tangent kernels, and linear probing, we show that both processes are active throughout training, with the fluctuations of their relative speed giving rise to seemingly anomalous generalization dynamics\. Applying the representation\-readout decomposition to grokking across a wide range of tasks and architectures, we find that the readout is train\-biased before grokking onset, and representation learning is gradual but not absent—contrary to the lazy\-to\-rich account\. The framework further provides diagnostic signatures distinguishing spurious from genuine generalization: in a previously reported MNIST grokking example and an epoch\-wise double descent example, apparent delayed or non\-monotone generalization is shown to arise from representation degradation and readout misalignment induced by non\-standard training recipes\. Together, these results establish the representation\-readout decomposition as a top\-down framework for understanding learning dynamics and revealing underlying algorithms for interpretability research\.

## Convergence of Near\-Linear Width ReLU Networks with Unbalanced Initialization

**Authors:** Zhenghao Xu; Rachel Ward; Molei Tao; Tuo Zhao

**ID:** 149591 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=owJpOXaqDm>) | [PDF](<https://openreview.net/pdf?id=owJpOXaqDm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149591>)

Linear\-width convergence for two\-layer ReLU networks is known in random\-feature or conjugate kernel \(CK\) regimes whose analyses exploit nearly fixed hidden features\. However, the corresponding neural tangent kernel \(NTK\) regime, where hidden\-layer training is active, still suffers from substantially larger width requirements\. The obstacle is the ReLU\-induced kernel shift: activation\-pattern changes can induce empirical NTK drift that breaks the contraction argument\. We show that an output\-dominant unbalanced Gaussian initialization creates an NTK\-dominated training regime in which this kernel shift remains controllable\. This single mechanism yields near\-linear width, Nesterov acceleration, and low\-rank adaptivity for two\-layer ReLU networks with vector\-valued outputs and a shared first layer\. We prove that gradient descent \(GD\) achieves linear convergence for networks with $\\tilde\{\\Omega\}\(Nn/\\lambda\)$ neurons, where $N$ is the sample size, $n$ is the output dimension, and $\\lambda$ is the standard smallest eigenvalue of the limiting NTK\. Within the same framework, Nesterov's accelerated gradient \(NAG\) attains a provable speedup without sacrificing near\-linear width, improving the iteration complexity from $O\(n\\kappa\\log\\frac\{1\}\{\\epsilon\}\)$ to $O\(\\sqrt\{n\\kappa\}\\log\\frac\{1\}\{\\epsilon\}\)$, where $\\kappa$ is the limiting NTK condition number\. Finally, our analysis establishes low\-rank adaptivity: by introducing a sketching step at initialization and a subspace analysis, the width requirement reduces to $\\tilde\{\\Omega\}\(Nr\\kappa^2\(\\mathbf\{Y\}\)/\\lambda\)$ for responses $\\mathbf\{Y\}$ of rank $r \\ll n$, matching the ambient\-dimensional result in the leading polynomial dependence, up to polylogarithmic factors, with $n$ replaced by $r$ when $\\kappa\(\\mathbf\{Y\}\)=O\(1\)$\. In contrast to CK/random\-feature analyses that exploit nearly fixed hidden features, our proof controls hidden\-layer NTK contributions, ReLU activation\-pattern changes, and kernel shift; this control enables both acceleration and low\-rank adaptivity in the NTK\-dominated regime\.

## Understanding Double Descent through Universal Compression

**Authors:** Jiaxuan Cheng; Addison Spiegel

**ID:** 150359 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=igJU8aUjWw>) | [PDF](<https://openreview.net/pdf?id=igJU8aUjWw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150359>)

Many deep learning models exhibit a double\-descent phenomenon, where test loss exhibits a sharp peak near the interpolation threshold and then descends a second time as model size grows further, contrary to the U\-shape predicted by the classical bias–variance tradeoff\. The double\-descent phenomenon has been found and explained in toy classical models, but is not well\-understood in modern deep learning despite extensive empirical study\. We interpret double descent through the novel lens of universal compression\. Specifically, we upper bound the maximum\-likelihood test loss as a sum of three terms: an approximation error, a minimax batch regret, and an MLE\-vs\-Bayes gap\. We show that the minimax Bayes predictor, unlike the MLE, does not exhibit the double\-descent peak\. Furthermore, we isolate each term through experiments with uniform random labels, and show that double descent is primarily caused by the MLE\-vs\-Bayes gap in this setting; here, the MLE cross\-entropy grows to be roughly five times larger at the double\-descent peak, while the minimax Bayes predictor cross\-entropy remains flat\. Additionally, we show the possibility of a second ascent in test loss at very large model sizes, and motivate this theoretically through the minimax batch regret term of our decomposition\.

## Stop Quantum Machine Learning; do AI\-for\-Quantum instead

**Authors:** ziqing Guo; Ziwen Pan

**ID:** 140038 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e80kgYrU8n>) | [PDF](<https://openreview.net/pdf?id=e80kgYrU8n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140038>)

This paper argues that the NeurIPS community should prioritize AI\-for\-Quantum \(AI4Q\) over Quantum Machine Learning \(QML\) on classical data, and should review the two directions by different evidentiary standards\. We argue that QML on classical data has not earned high priority because its leading advantage claims rely on strong input assumptions, face trainability and noise barriers, and still lacks persuasive wall\-clock wins on the standard benchmarks\. By contrast, AI4Q has already produced concrete gains in decoding, compilation, neural\-state representation, tomography and readout, and error mitigation\. We make the evidentiary standard explicit through falsification criteria and concrete review\-process recommendations\.

## Minimax\-Optimal Transformer Classification for Functional Data with Dense\-Sparse Phase Transition

**Authors:** Shuoyang Wang; Yidan Tian; Guanqun Cao

**ID:** 153031 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OXHtCTuaLv>) | [PDF](<https://openreview.net/pdf?id=OXHtCTuaLv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153031>)

Despite the remarkable empirical success of transformer models in natural language processing, their theoretical foundations for functional data classification remain largely unexplored\. This paper takes a first step toward closing this gap by developing a rigorous statistical framework for transformer\-based functional classifiers\.  We show that a transformer architecture with an expanding attention window in the latent representation attains minimax\-optimal excess\-risk rates up to logarithmic factors in infinite\-dimensional functional classification, without relying on conventional dimension\-reduction procedures\. Our analysis further reveals a dense\-to\-sparse phase transition: when the sampling frequency exceeds a critical threshold relative to the sample size, the proposed classifier achieves the optimal dense\-observation rate; otherwise, we precisely characterize the degradation in convergence under sparse sampling\. Extensive simulations and real\-data experiments support the theory and demonstrate that transformers provide a competitive and theoretically justified approach to functional classification\.

## Continuity Laws for Sequential Models

**Authors:** Annan Yu; Dongwei Lyu; N\. Benjamin Erichson

**ID:** 149660 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oQ3dzYdHDJ>) | [PDF](<https://openreview.net/pdf?id=oQ3dzYdHDJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149660>)

Inductive biases influence the behavior and performance of sequential models\. In this work, we study an underexplored inductive bias in sequential modeling: continuity in time\. We ask a simple question: do models motivated by continuous\-time formulations, such as state\-space models, actually behave continuously in time, and does this translate into better performance on tasks with continuous temporal structure? To answer this, we formalize model continuity as convergence under temporal refinement, where a model is continuous if its predictions approach an underlying continuous trajectory as the temporal discretization is refined\. We show that S4 exhibits stable continuous behavior, whereas S6 \(the core of Mamba\) can be more sensitive to input amplitude and selective dynamics, despite being derived from a continuous dynamical system\. To study whether this distinction matters for learning, we also need a corresponding notion of task continuity\. We therefore introduce a metric to quantify the continuity of datasets directly from their temporal structure\. Across benchmarks, we find a clear empirical alignment between task continuity, model continuity, and model performance\. Beyond an inductive bias, continuity also has practical consequences: we show that it enables a simple temporal subsampling strategy that improves both efficiency and performance\.

## Function graph transformers universally approximate operators between function spaces

**Authors:** Takashi Furuya; S David Mis; Ivan Dokmanić; Maarten V\. de Hoop; Matti Lassas

**ID:** 149521 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pW2Yazkjyc>) | [PDF](<https://openreview.net/pdf?id=pW2Yazkjyc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149521>)

We study the approximation of nonlinear operators between function spaces by transformers\. Our approach is to lift functions to measures supported on their graphs and leverage a recently introduced measure\-theoretic view of transformers\. A function $h$ is represented by its graph measure $\\gamma\_h$, with finite tokens $\\\{\(x\_j,h\(x\_j\)\)\\\}\_\{j=1\}^N$ being its empirical approximations\.  We show that this framework elegantly models discretization refinement via convergence of measures and provides a natural setting for operator learning\.  Within this framework, we introduce function graph transformers, a graph\-preserving subclass of measure\-theoretic transformers that maps graph measures to graph measures, which is to say that outputs remain single\-valued functions\. Crucially, this additional structure does not reduce generality: we prove that the resulting graph\-preserving maps can be approximated by finite compositions of standard softmax self\-attention layers and pointwise MLPs, yielding universal approximation results for broad classes of nonlinear operators\.  Unlike existing theoretical approaches to operator learning with transformers, the measure\-theoretic framework also accommodates regularized negative\-order Sobolev inputs for which discretization invariance is particularly challenging, as well as query points on different output domains\. Overall, function graph transformers provide a continuum viewpoint and mathematical toolkit for transformer\-based operator learning, clarifying the roles of positional embeddings, graph structure, regularization, and ensuring consistency across discretizations\.

## Estimating the expected output of wide random MLPs more efficiently than sampling

**Authors:** Wilson Wu; Victor Lecomte; Michael Winer; George Robinson; Jacob Hilton; Paul Christiano

**ID:** 152169 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V2CWyf8875>) | [PDF](<https://openreview.net/pdf?id=V2CWyf8875>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152169>)

By far the most common way to estimate an expected loss in machine learning is to draw samples, compute the loss on each one, and take the empirical average\. However, sampling is not necessarily optimal\. Given an MLP at initialization, we show how to estimate its expected output over Gaussian inputs without running samples through the network at all\. Instead, we produce approximate representations of the distributions of activations at each layer, leveraging tools such as cumulants and Hermite expansions\. We show both theoretically and empirically that for sufficiently wide networks, our estimator achieves a target mean squared error using substantially fewer FLOPs than Monte Carlo sampling\. We find moreover that our methods perform particularly well at estimating the probabilities of rare events, and additionally demonstrate how they can be used for model training\. Together, these findings suggest a path to producing models with a greatly reduced probability of catastrophic tail risks\.

## Fixed Universal Transformers

**Authors:** Jingwen Liu; Alexandr Andoni; Daniel Hsu

**ID:** 149666 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oLOTrZMfSu>) | [PDF](<https://openreview.net/pdf?id=oLOTrZMfSu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149666>)

We introduce \\emph\{universal transformers\}: fixed\-parameter architectures that can simulate any transformer in a given class via a suitable input embedding\. Analogous to a universal Turing machine, the input embedding encodes a description of the target model while all internal parameters remain fixed\.  We provide explicit sparse constructions achieving universality when the embedding dimension is sufficiently large, and further show that universality is generic: randomly initialized transformers are universal almost surely, which aligns with recent empirical results of Zhong and Andreas \(2024\)\. We empirically validate our theory on the algorithmic tasks of parenthesis balancing and multi\-hop reasoning\. Our results suggest that much of a transformer’s expressive power may reside in its input representation rather than its learned weights\.

