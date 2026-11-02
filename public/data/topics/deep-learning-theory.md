# Deep Learning / Theory

深度学习 / 深度学习理论

58 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Why Geometric Continuity Emerges in Deep Neural Networks: Residual Connections and Rotational Symmetry Breaking

**Authors:** Kyungwon Jeong; Won\-Gi Paeng; Honggyo Suh

**ID:** 152913 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PT9wd2ehVL>) | [PDF](<https://openreview.net/pdf?id=PT9wd2ehVL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152913>)

_Abstract unavailable from the accessible public sources._

## Geometric Analysis of Neural Regression Collapse via Intrinsic Dimension

**Authors:** George Andriopoulos; Zixuan Dong; Bimarsha Adhikari; Keith Ross

**ID:** 148252 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zGe5UWouYJ>) | [PDF](<https://openreview.net/pdf?id=zGe5UWouYJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148252>)

Neural multivariate regression underpins a wide range of domains such as control, robotics, and finance, yet the geometry of its learned representations remains poorly characterized\. While neural collapse has been shown to benefit generalization in classification, we find that analogous collapse in regression consistently degrades performance\. To explain this contrast, we analyze models through the lens of intrinsic dimension\. Across control tasks and synthetic datasets, we estimate the intrinsic dimension of last\-layer features \($ID\_H$\) and compare it with that of the regression targets \($ID\_Y$\)\. Collapsed models exhibit $ID\_H &lt; ID\_Y$, leading to over\-compression and poor generalization, whereas non\-collapsed models typically maintain $ID\_H &gt; ID\_Y$\. For the non\-collapsed models, performance with respect to $ID\_H$ depends on the data quantity and noise levels\. From these observations, we identify two regimes—over\-compressed and under\-compressed—that determine when expanding or reducing feature dimensionality improves performance\. Our results provide new geometric insights into neural regression and suggest practical strategies for enhancing generalization\.

## Outcome\-Based RL Provably Leads Transformers to Reason, but Only With the Right Data

**Authors:** Yuval Ran\-Milo; ‪Yotam Alexander‬‏; Shahar Mendel; Nadav Cohen

**ID:** 151111 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ctcKsexBkZ>) | [PDF](<https://openreview.net/pdf?id=ctcKsexBkZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151111>)

_Abstract unavailable from the accessible public sources._

## Positional Encoding and Prompt\-Order Sensitivity in In\-Context Learning

**Authors:** Zhijie Wang; Bo Jiang; Shuai Li

**ID:** 151605 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZJxEzyLoXN>) | [PDF](<https://openreview.net/pdf?id=ZJxEzyLoXN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151605>)

Transformer models have demonstrated a remarkable ability to perform a wide range of tasks through in\-context learning \(ICL\), where the model infers patterns from a small number of example prompts provided during inference\. However, empirical studies have shown that the effectiveness of ICL can be significantly influenced by the order in which these prompts are presented\. Despite its significance, this phenomenon has been largely unexplored from a theoretical perspective\. In this paper, we theoretically investigate how positional encoding \(PE\) affects the ICL capabilities of linear attention transformer models, particularly in tasks where prompt order plays a crucial role\. We examine two distinct cases: linear regression, which represents an order\-invariant task, and dynamical systems, a classic time\-series task that is inherently sensitive to the order of input prompts\. Theoretically, we evaluated the change in the model output when two types of positional encoding \(one\-hot and RoPE\) is incorporated and the prompt order is altered\. In all cases, the leading dependence on the permutation size and context length is $k/N$, with constants determined by the positional encoding, model weights, input dimension, and task dependent parameters\. These theoretical findings are experimentally validated\.

## Global Convergence in Deep Networks via the Second Law of Thermodynamics

**Authors:** Matan Tsipory; Ofir Gaash; Itamar Harel; Nati Srebro; Daniel Soudry

**ID:** 154684 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BkwQDuwKFM>) | [PDF](<https://openreview.net/pdf?id=BkwQDuwKFM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154684>)

_Abstract unavailable from the accessible public sources._

## Function graph transformers universally approximate operators between  function spaces

**Authors:** Takashi Furuya; S David Mis; Ivan Dokmanić; Maarten V\. de Hoop; Matti Lassas

**ID:** 149521 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pW2Yazkjyc>) | [PDF](<https://openreview.net/pdf?id=pW2Yazkjyc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149521>)

We study the approximation of nonlinear operators between function spaces by transformers\. Our approach is to lift functions to measures supported on their graphs and leverage a recently introduced measure\-theoretic view of transformers\. A function $h$ is represented by its graph measure $\\gamma\_h$, with finite tokens $\\\{\(x\_j,h\(x\_j\)\)\\\}\_\{j=1\}^N$ being its empirical approximations\.  We show that this framework elegantly models discretization refinement via convergence of measures and provides a natural setting for operator learning\.  Within this framework, we introduce function graph transformers, a graph\-preserving subclass of measure\-theoretic transformers that maps graph measures to graph measures, which is to say that outputs remain single\-valued functions\. Crucially, this additional structure does not reduce generality: we prove that the resulting graph\-preserving maps can be approximated by finite compositions of standard softmax self\-attention layers and pointwise MLPs, yielding universal approximation results for broad classes of nonlinear operators\.  Unlike existing theoretical approaches to operator learning with transformers, the measure\-theoretic framework also accommodates regularized negative\-order Sobolev inputs for which discretization invariance is particularly challenging, as well as query points on different output domains\. Overall, function graph transformers provide a continuum viewpoint and mathematical toolkit for transformer\-based operator learning, clarifying the roles of positional embeddings, graph structure, regularization, and ensuring consistency across discretizations\.

## When and How to Canonize: a Generalization Perspective

**Authors:** Yonatan Sverdlov; Benjy Friedmann; Snir Hordan; Nadav Dym

**ID:** 151406 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=auino4yMsg>) | [PDF](<https://openreview.net/pdf?id=auino4yMsg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151406>)

While equivariant architectures are standard for processing symmetric data, there is growing interest in achieving equivariance by applying group averaging or canonization to non\-equivariant backbones\. However, the theoretical generalization properties of these alternative strategies remain poorly understood\. We introduce a theoretical framework to analyze the generalization error of these methods by bounding their covering numbers\. We establish a rigorous generalization hierarchy: the error bounds of canonized models are at best equal to the error bounds of structurally equivariant and group\-averaged models, and at worst equal to the bounds of  non\-equivariant baselines\. Furthermore, we show that there exist "optimal" canonizations which attain the optimal error bounds, and "poor" canonizations which attain the non\-equivariant error bounds, and that this depends on the regularity of the canonization\. Finally, applying this framework to permutation groups in point cloud processing, we rigorously prove that the covering number of lexicographical sorting grows exponentially with point cloud dimension, whereas Hilbert curve canonization guarantees polynomial growth\. This  provides the first formal theoretical justification for the empirical success of Hilbert curve serialization in state\-of\-the\-art point cloud architectures\. We conclude with experiments which support our theoretical claims\.

## Stability and Generalization in Looped Transformers

**Authors:** Asher Labovich

**ID:** 154011 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gs9Aw1utOC>) | [PDF](<https://openreview.net/pdf?id=Gs9Aw1utOC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154011>)

_Abstract unavailable from the accessible public sources._

## How Hard Is It for Message\-Passing GNNs to Simulate One Weisfeiler\-Lehman Color\-Refinement Step?

**Authors:** Guanyu Cui; Yuhe Guo; Zhewei Wei; Hsin\-Hao Su

**ID:** 151609 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZHXIlyKr8l>) | [PDF](<https://openreview.net/pdf?id=ZHXIlyKr8l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151609>)

Message\-passing graph neural networks \(MPGNNs\) are commonly compared with the Weisfeiler\-Lehman \(WL\) color\-refinement procedure, but this comparison does not quantify the resource parameters a network needs to realize color refinement with bounded\-size messages and finite numerical precision\. We study the cost of simulating a single color\-refinement step on unattributed graphs\. We distinguish input\-independent, or oblivious, simulation from instance\-dependent simulation\. In the former, the parameters, or their distributions in randomized models, are fixed before the input instance is known\. Our results show that the local form of WL color refinement hides a global relabeling problem\. In the oblivious setting, deterministic and zero\-error randomized MPGNNs cannot solve this problem in the worst case using only shallow networks with small messages\. We complement this lower bound with a nearly matching construction in a stronger rooted, port\-aware model\. By contrast, when the color set is large, bounded\-error randomness can greatly reduce the cost, and a one\-layer MPGNN with messages of logarithmic size and a logarithmic number of random bits suffices\. We show that this logarithmic number of random bits is essentially necessary for shallow, small\-message simulations\. When the color set is small, we still obtain a rooted, port\-aware simulation, but this construction requires more layers or larger messages\. We also prove that this extra cost is partly unavoidable, as small color sets force a nontrivial trade\-off between the number of layers and the message size\. Finally, instance\-dependent simulation can be much shallower, but the required instance\-specific parameters are not necessarily easy to find\. Together, these results reveal quantitative structure hidden behind the statement that MPGNNs match WL color refinement\.

## Most ReLU Networks Admit Identifiable Parameters

**Authors:** Moritz Grillo; Guido Montufar

**ID:** 153608 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K82GYaldLY>) | [PDF](<https://openreview.net/pdf?id=K82GYaldLY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153608>)

We study the realization map of deep ReLU networks, focusing on when a function determines its parameters up to scaling and permutation\. To analyze hidden redundancies beyond these standard symmetries, we introduce a framework based on weighted polyhedral complexes\. Our main result shows that for every architecture whose input and hidden layers have width at least two, there exists an open set of identifiable parameters\. This implies that the functional dimension of every such architecture is exactly the number of parameters minus the number of hidden neurons\. We further show that minimal functional representations can still have non\-trivial parameter redundancies\. Finally, we establish a generic depth hierarchy, whereby for an open set of parameters the realized function cannot be represented generically by any shallower network\.

## Outcome\-Based RL Provably Leads Transformers to Reason, but Only With the Right Data

**Authors:** Yuval Ran\-Milo; ‪Yotam Alexander‬‏; Shahar Mendel; Nadav Cohen

**ID:** 151111\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151111

[Paper](<https://openreview.net/forum?id=ctcKsexBkZ>) | [PDF](<https://openreview.net/pdf?id=ctcKsexBkZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151111>)

_Abstract unavailable from the accessible public sources._

## Positional LSH: Binary Block Matrix Approximation for Attention with Linear Biases

**Authors:** Daniel Wolfson; Tal Wagner

**ID:** 148423 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xvvSJ2zQyy>) | [PDF](<https://openreview.net/pdf?id=xvvSJ2zQyy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148423>)

Positional encoding in transformers is commonly implemented through positional embeddings, attention masks, or bias terms, but formal connections between these mechanisms remain limited\. We study attention with positional bias through the lens of locality\-sensitive hashing \(LSH\), focusing on Attention with Linear Biases \(ALiBi\)\. We show that the ALiBi bias matrix is the expectation of contiguous block\-diagonal binary masks induced by a \`\`positional LSH'' scheme\. The empirical mean of masks sampled from this scheme yields spectral norm and max\-norm approximation guarantees with bounded block sizes with high probability\. This structural theorem implies a uniform approximation theorem for ALiBi\-biased attention: with high probability over the sampled masks, the approximate attention output is accurate simultaneously for all query\-key\-value inputs and can be computed in near\-linear time in the context length, reducing long\-context ALiBi to a collection of randomized short\-context regular \(positionally unbiased\) attention operations\. Conceptually, this connects positional bias, masks, and positional embeddings in a single formal framework and suggests an approach to efficient ALiBi\-biased attention\. Experiments on large language models validate our theoretical findings\.

## TropNNC: Structured Neural Network Compression Using Tropical Geometry

**Authors:** Konstantinos Fotopoulos; Petros Maragos; Panagiotis Misiakos

**ID:** 156769 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=u7DRq1icmY>) | [PDF](<https://openreview.net/pdf?id=u7DRq1icmY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156769>)

We present TropNNC, a framework for compressing neural networks with linear and convolutional layers and ReLU\-type activations using tropical geometry\. By representing a network’s output as a tropical rational function, TropNNC enables structured compression via reduction of the corresponding tropical polynomials\. Our method identifies redundancy via similarity and improves upon the geometric approximation of previous work by adaptively selecting the weights of retained neurons\. We relate it to SVD and spectral clustering, and provide insights into network compression beyond the specific setting considered\. We provide the tightest known theoretical compression bound, and the first successful application of tropical geometry to convolutional layers\. TropNNC requires access only to network weights – no training data – and achieves competitive performance on MNIST, CIFAR, and ImageNet, matching strong baselines such as ThiNet and CUP\.

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

## Large language models suffer from a curse of ambiguity

**Authors:** Nicolas Zucchet; Hyun Dong Lee; Scott Linderman

**ID:** 150511 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hY4qGi3waD>) | [PDF](<https://openreview.net/pdf?id=hY4qGi3waD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150511>)

Large language models increasingly rely on sampling as a driver of their own improvement, making the fidelity of their learned distributions more critical than ever\. Yet, not all distributions are equally easy to learn\. In this work, we identify a curse of ambiguity: in large language models, and more broadly in all neural networks that produce discrete probability distributions, the more ambiguous a next\-token distribution is, the harder it is to learn accurately\. Through an extensive theoretical analysis, we trace this curse to architectural and learning roots\. More ambiguous distributions require more capacity to be stored, larger embeddings to be represented, more steps to be fitted, and amplify token\-sampling noise\. We validate these findings on synthetic tasks with controlled ground truth and observe the same signatures in language models trained on real data\. Our results provide a new perspective on the statistical capabilities of large language models and a practical framework for when to trust their output distribution\.

## Why Geometric Continuity Emerges in Deep Neural Networks: Residual Connections and Rotational Symmetry Breaking

**Authors:** Kyungwon Jeong; Won\-Gi Paeng; Honggyo Suh

**ID:** 152913\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152913

[Paper](<https://openreview.net/forum?id=PT9wd2ehVL>) | [PDF](<https://openreview.net/pdf?id=PT9wd2ehVL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152913>)

_Abstract unavailable from the accessible public sources._

## Minimax\-Optimal Transformer Classification for Functional Data with Dense\-Sparse Phase Transition

**Authors:** Shuoyang Wang; Yidan Tian; Guanqun Cao

**ID:** 153031 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OXHtCTuaLv>) | [PDF](<https://openreview.net/pdf?id=OXHtCTuaLv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153031>)

Despite the remarkable empirical success of transformer models in natural language processing, their theoretical foundations for functional data classification remain largely unexplored\. This paper takes a first step toward closing this gap by developing a rigorous statistical framework for transformer\-based functional classifiers\.  We show that a transformer architecture with an expanding attention window in the latent representation attains minimax\-optimal excess\-risk rates up to logarithmic factors in infinite\-dimensional functional classification, without relying on conventional dimension\-reduction procedures\. Our analysis further reveals a dense\-to\-sparse phase transition: when the sampling frequency exceeds a critical threshold relative to the sample size, the proposed classifier achieves the optimal dense\-observation rate; otherwise, we precisely characterize the degradation in convergence under sparse sampling\. Extensive simulations and real\-data experiments support the theory and demonstrate that transformers provide a competitive and theoretically justified approach to functional classification\.

## Test time training enhances in\-context learning of nonlinear functions

**Authors:** Kento Kuwataka; Taiji Suzuki

**ID:** 152817 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QApUDGBavW>) | [PDF](<https://openreview.net/pdf?id=QApUDGBavW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152817>)

Test\-time training \(TTT\) enhances model performance by explicitly updating designated parameters prior to each prediction to adapt to the test data\.  While TTT has demonstrated considerable empirical success, its theoretical underpinnings remain limited, particularly for nonlinear models\.  In this paper, we investigate the combination of TTT with in\-context learning \(ICL\), where the model is given a few examples from the target distribution at inference time\.  We analyze this framework in the setting of single\-index models, where the feature vector is drawn from a hidden low\-dimensional subspace\.  For single\-layer transformers trained with gradient\-based algorithms and adopting TTT, we establish an upper bound on the prediction risk\.  Our theory reveals that TTT enables the single\-layer transformers to adapt to both the feature vector and the link function, which vary across tasks\.  This creates a sharp contrast with ICL alone, which is theoretically difficult to adapt to shifts in the link function\.  Moreover, we provide the convergence rate with respect to the data length, showing the predictive error can be driven arbitrarily close to the noise level as the context size and the network width grow\.

## The Weight Gram Matrix Captures Sequential Feature Linearization in Deep Networks

**Authors:** Taehun Cha; Daniel Beaglehole; Adityanarayanan Radhakrishnan; Donghun Lee

**ID:** 152900 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PZQcUnAHHK>) | [PDF](<https://openreview.net/pdf?id=PZQcUnAHHK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152900>)

_Abstract unavailable from the accessible public sources._

## Stop Quantum Machine Learning; do AI\-for\-Quantum instead

**Authors:** ziqing Guo; Ziwen Pan

**ID:** 140038 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e80kgYrU8n>) | [PDF](<https://openreview.net/pdf?id=e80kgYrU8n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140038>)

This paper argues that the NeurIPS community should prioritize AI\-for\-Quantum \(AI4Q\) over Quantum Machine Learning \(QML\) on classical data, and should review the two directions by different evidentiary standards\. We argue that QML on classical data has not earned high priority because its leading advantage claims rely on strong input assumptions, face trainability and noise barriers, and still lacks persuasive wall\-clock wins on the standard benchmarks\. By contrast, AI4Q has already produced concrete gains in decoding, compilation, neural\-state representation, tomography and readout, and error mitigation\. We make the evidentiary standard explicit through falsification criteria and concrete review\-process recommendations\.

## Causal pieces: analysing and improving spiking neural networks piece by piece

**Authors:** Dominik Dold; Philipp Petersen

**ID:** 148689 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vmQvISAYfP>) | [PDF](<https://openreview.net/pdf?id=vmQvISAYfP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148689>)

We introduce \*causal pieces\*, a novel concept for analysing spiking neural networks \(SNNs\), inspired by \*linear pieces\* used to study expressivity and trainability in artificial neural networks \(ANNs\)\. Causal pieces partition the input and parameter space of a feedforward SNN with single\-spike coding into distinct regions where the same subnetwork causes the output spikes\. For networks of current\-based leaky integrate\-and\-fire \(LIF\) neurons with large membrane time constants, we show that within each causal piece, output spike times are locally Lipschitz continuous with respect to inputs and network parameters\. We further prove a lower bound on the approximation error that depends on the number of causal pieces\. Thus, the number of causal pieces is a measure of the approximation capabilities of SNNs, which is valid despite spike\-time discontinuities and applies to networks with both excitatory and inhibitory synapses\. Empirically, we find that parameter initialisations yielding more causal pieces on the training set strongly correlate with SNN training success across multiple benchmarks, including Yin\-Yang, Fashion\-MNIST, and EuroSAT\. Moreover, simulations with standard single\-spike LIF neurons indicate that our findings extend beyond the theoretically analysed regime\. These results establish causal pieces as a powerful and principled tool for analysing and improving the computational capabilities of SNNs\.

## Continuity Laws for Sequential Models

**Authors:** Annan Yu; Dongwei Lyu; N\. Benjamin Erichson

**ID:** 149660 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oQ3dzYdHDJ>) | [PDF](<https://openreview.net/pdf?id=oQ3dzYdHDJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149660>)

Inductive biases influence the behavior and performance of sequential models\. In this work, we study an underexplored inductive bias in sequential modeling: continuity in time\. We ask a simple question: do models motivated by continuous\-time formulations, such as state\-space models, actually behave continuously in time, and does this translate into better performance on tasks with continuous temporal structure? To answer this, we formalize model continuity as convergence under temporal refinement, where a model is continuous if its predictions approach an underlying continuous trajectory as the temporal discretization is refined\. We show that S4 exhibits stable continuous behavior, whereas S6 \(the core of Mamba\) can be more sensitive to input amplitude and selective dynamics, despite being derived from a continuous dynamical system\. To study whether this distinction matters for learning, we also need a corresponding notion of task continuity\. We therefore introduce a metric to quantify the continuity of datasets directly from their temporal structure\. Across benchmarks, we find a clear empirical alignment between task continuity, model continuity, and model performance\. Beyond an inductive bias, continuity also has practical consequences: we show that it enables a simple temporal subsampling strategy that improves both efficiency and performance\.

## How to Scale Mixture\-of\-Experts: From muP to the Maximally Scale\-Stable Parameterization

**Authors:** Leena Chennuru Vankadara; Moritz Haas; Luke Hayward; Sebastian Bordt; Alessandro Breccia

**ID:** 155300 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6c5MRDWXkL>) | [PDF](<https://openreview.net/pdf?id=6c5MRDWXkL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155300>)

_Abstract unavailable from the accessible public sources._

## Positional LSH: Binary Block Matrix Approximation for Attention with Linear Biases

**Authors:** Daniel Wolfson; Tal Wagner

**ID:** 148423\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148423

[Paper](<https://openreview.net/forum?id=xvvSJ2zQyy>) | [PDF](<https://openreview.net/pdf?id=xvvSJ2zQyy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148423>)

Positional encoding in transformers is commonly implemented through positional embeddings, attention masks, or bias terms, but formal connections between these mechanisms remain limited\. We study attention with positional bias through the lens of locality\-sensitive hashing \(LSH\), focusing on Attention with Linear Biases \(ALiBi\)\. We show that the ALiBi bias matrix is the expectation of contiguous block\-diagonal binary masks induced by a \`\`positional LSH'' scheme\. The empirical mean of masks sampled from this scheme yields spectral norm and max\-norm approximation guarantees with bounded block sizes with high probability\. This structural theorem implies a uniform approximation theorem for ALiBi\-biased attention: with high probability over the sampled masks, the approximate attention output is accurate simultaneously for all query\-key\-value inputs and can be computed in near\-linear time in the context length, reducing long\-context ALiBi to a collection of randomized short\-context regular \(positionally unbiased\) attention operations\. Conceptually, this connects positional bias, masks, and positional embeddings in a single formal framework and suggests an approach to efficient ALiBi\-biased attention\. Experiments on large language models validate our theoretical findings\.

## TropNNC: Structured Neural Network Compression Using Tropical Geometry

**Authors:** Konstantinos Fotopoulos; Petros Maragos; Panagiotis Misiakos

**ID:** 156769\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156769

[Paper](<https://openreview.net/forum?id=u7DRq1icmY>) | [PDF](<https://openreview.net/pdf?id=u7DRq1icmY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156769>)

We present TropNNC, a framework for compressing neural networks with linear and convolutional layers and ReLU\-type activations using tropical geometry\. By representing a network’s output as a tropical rational function, TropNNC enables structured compression via reduction of the corresponding tropical polynomials\. Our method identifies redundancy via similarity and improves upon the geometric approximation of previous work by adaptively selecting the weights of retained neurons\. We relate it to SVD and spectral clustering, and provide insights into network compression beyond the specific setting considered\. We provide the tightest known theoretical compression bound, and the first successful application of tropical geometry to convolutional layers\. TropNNC requires access only to network weights – no training data – and achieves competitive performance on MNIST, CIFAR, and ImageNet, matching strong baselines such as ThiNet and CUP\.

## Controlling for Omitted Variable Bias in Deep Neural Networks

**Authors:** Manuel Pfeuffer; Roshan P Rane; Kerstin Ritter; Sonja Greven

**ID:** 153604 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K9sgYlq0Bi>) | [PDF](<https://openreview.net/pdf?id=K9sgYlq0Bi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153604>)

Control variables are widely used in statistical modelling to account for omitted variable bias\. However, they have largely been underexplored in deep learning\. This is surprising, given that deep learning models encode image\-inferable covariates, such as demographic variables, into their predictions when these covariates are correlated with the outcome\-\-\-a form of omitted variable bias referred to as 'shortcut learning'\. While many existing confound\-control or fairness methods try to restrict the correlation of such covariates with model predictions, we show that this fails to correct for omitted variable bias\. We therefore propose a control variable approach for deep learning models, based on generalised additive modelling of the effects of model inputs and covariates\. As flexible additive models can suffer from concurvity, we introduce an estimation procedure that refits the final layer of a pre\-trained network to include covariate effects, using cross\-fitting with ridge penalisation\. We show how these effects can be orthogonalised with respect to covariates to exclude their mediated effects and that model predictions can be marginalised over the covariate distribution to control for their effect\. This yields unbiased, interpretable predictions and offers flexibility to model the desired effects depending on the scientific or fairness objective\. We verify our approach using simulated images, where it recovers the true covariate effects, even in small samples\. Existing methods either require more data or fail to recover the true effects\. We apply our method to real neuroimaging data with experimentally induced confounding, where it recovers prediction performance to near the level of a model trained on unconfounded data\.

## Greedy Alignment Principle for Optimizer Selection

**Authors:** Jaerin Lee; Kyoung Mu Lee

**ID:** 154812 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Alx4pHbiDI>) | [PDF](<https://openreview.net/pdf?id=Alx4pHbiDI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154812>)

Recent works have shown that gradient\-update alignment is a powerful signal for modulating optimizer updates and improving training dynamics\. We promote this update\-wise heuristic into a mathematically grounded principle for selecting and tuning optimizer hyperparameters\. By treating gradients and updates as signals, and an optimizer as a causal filter that maps between them, we formulate optimizer selection as maximizing the expected drop rate in loss over a prescribed family of optimizers\. We show that this objective is exactly the inner product between the optimizer filter and the gradient autocorrelation, and prove that a greedy optimum exists and has a stability bound under perturbations of the estimated gradient statistics\. Specializing in momentum\-based optimizers, the theory yields simple dynamic momentum selection rules for both SGD\+Momentum and Adam/AdamW\. Experiments across image classification, language model fine\-tuning, and vision transformer fine\-tuning show that the resulting dynamic momentum rules match or improve upon the best fixed hyperparameters found via manual sweeps, reducing the need for exhaustive momentum sweeps\.

## Training\-Induced Escape from Token Clustering in a Mean\-Field Formulation of Transformers

**Authors:** Noboru Isobe; Daisuke Inoue; Masaaki Imaizumi

**ID:** 153798 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IcdBtJcDy7>) | [PDF](<https://openreview.net/pdf?id=IcdBtJcDy7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153798>)

Transformers perform inference by iteratively transforming token representations across layers\. This layerwise computation has been studied empirically, and recent mean\-field theories of Transformer dynamics explain how attention can drive token distributions toward clustering\. However, existing mean\-field analyses largely treat model parameters as prescribed, leaving open how training reshapes this clustering picture\. We study this question in a noisy mean\-field Transformer in which only a parameter\-linear FFN is trained under $L^2$ regularization\. We find and analyze a training\-induced phase in the dynamics: after initially following attention\-driven clustering, the token distribution can leave the clustered regime near the final layers\. Our mathematical analysis is based on an entropy\-regularized interaction energy that captures the clustering bias of attention\. More broadly, our results point toward a training\-aware mean\-field theory of Transformer dynamics, in which training and inference dynamics are treated together\.

## Aligning Inductive Bias for Data\-Efficient Generalization in State Space Models

**Authors:** Qiyu Chen; Guozhang Chen

**ID:** 150462 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hr5OmcgyP5>) | [PDF](<https://openreview.net/pdf?id=hr5OmcgyP5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150462>)

_Abstract unavailable from the accessible public sources._

## When and Why Adversarial Training Improves PINNs: A Neural Tangent Kernel Perspective

**Authors:** Yuandong Cao; Chi C So; Jun\-Min Wang; He Wang

**ID:** 152854 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PtBaGypLzm>) | [PDF](<https://openreview.net/pdf?id=PtBaGypLzm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152854>)

_Abstract unavailable from the accessible public sources._

## A Theoretical Analysis of Test\-Driven Code Generation

**Authors:** Nicolas Menet; Michael Hersche; Andreas Krause; Abbas Rahimi

**ID:** 149483 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pnb7TQTzC2>) | [PDF](<https://openreview.net/pdf?id=pnb7TQTzC2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149483>)

Code assistants are increasingly utilized in test\-driven software development, yet the theoretical mechanisms behind their environment\-interaction strategies remain underexplored\. We provide a probabilistic framework for two dominant paradigms: code selection after generation using the execution environment, and code generation conditioned on environment feedback\. First, we formalize several well\-established selection heuristics as environment\-aware estimators of code correctness\. We theoretically prove that estimators based on fuzzy functional similarity add an inductive bias and strictly dominate estimators based on functional equivalence in terms of signal\-to\-noise ratio\. Second, we frame backprompting as an in\-context approximation of Thompson sampling\. We derive a novel regret bound for reward functions with unobservable components, theoretically explaining why the effectiveness of backprompting is limited by the ambiguity of the informal task description \(an irreducible regret\)\. Using five state\-of\-the\-art open weight models, we corroborate these findings across BigCodeBenchHard, LeetCodeDataset, and QiskitHumanEvalSim\. Our formalization also suggests how to improve task descriptions effectively, leading to a new benchmark, QiskitHumanEvalSimX\.

## Causal pieces: analysing and improving spiking neural networks piece by piece

**Authors:** Dominik Dold; Philipp Petersen

**ID:** 148689\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148689

[Paper](<https://openreview.net/forum?id=vmQvISAYfP>) | [PDF](<https://openreview.net/pdf?id=vmQvISAYfP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148689>)

We introduce \*causal pieces\*, a novel concept for analysing spiking neural networks \(SNNs\), inspired by \*linear pieces\* used to study expressivity and trainability in artificial neural networks \(ANNs\)\. Causal pieces partition the input and parameter space of a feedforward SNN with single\-spike coding into distinct regions where the same subnetwork causes the output spikes\. For networks of current\-based leaky integrate\-and\-fire \(LIF\) neurons with large membrane time constants, we show that within each causal piece, output spike times are locally Lipschitz continuous with respect to inputs and network parameters\. We further prove a lower bound on the approximation error that depends on the number of causal pieces\. Thus, the number of causal pieces is a measure of the approximation capabilities of SNNs, which is valid despite spike\-time discontinuities and applies to networks with both excitatory and inhibitory synapses\. Empirically, we find that parameter initialisations yielding more causal pieces on the training set strongly correlate with SNN training success across multiple benchmarks, including Yin\-Yang, Fashion\-MNIST, and EuroSAT\. Moreover, simulations with standard single\-spike LIF neurons indicate that our findings extend beyond the theoretically analysed regime\. These results establish causal pieces as a powerful and principled tool for analysing and improving the computational capabilities of SNNs\.

## Continuity Laws for Sequential Models

**Authors:** Annan Yu; Dongwei Lyu; N\. Benjamin Erichson

**ID:** 149660\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149660

[Paper](<https://openreview.net/forum?id=oQ3dzYdHDJ>) | [PDF](<https://openreview.net/pdf?id=oQ3dzYdHDJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149660>)

Inductive biases influence the behavior and performance of sequential models\. In this work, we study an underexplored inductive bias in sequential modeling: continuity in time\. We ask a simple question: do models motivated by continuous\-time formulations, such as state\-space models, actually behave continuously in time, and does this translate into better performance on tasks with continuous temporal structure? To answer this, we formalize model continuity as convergence under temporal refinement, where a model is continuous if its predictions approach an underlying continuous trajectory as the temporal discretization is refined\. We show that S4 exhibits stable continuous behavior, whereas S6 \(the core of Mamba\) can be more sensitive to input amplitude and selective dynamics, despite being derived from a continuous dynamical system\. To study whether this distinction matters for learning, we also need a corresponding notion of task continuity\. We therefore introduce a metric to quantify the continuity of datasets directly from their temporal structure\. Across benchmarks, we find a clear empirical alignment between task continuity, model continuity, and model performance\. Beyond an inductive bias, continuity also has practical consequences: we show that it enables a simple temporal subsampling strategy that improves both efficiency and performance\.

## Minimax\-Optimal Transformer Classification for Functional Data with Dense\-Sparse Phase Transition

**Authors:** Shuoyang Wang; Yidan Tian; Guanqun Cao

**ID:** 153031\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153031

[Paper](<https://openreview.net/forum?id=OXHtCTuaLv>) | [PDF](<https://openreview.net/pdf?id=OXHtCTuaLv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153031>)

Despite the remarkable empirical success of transformer models in natural language processing, their theoretical foundations for functional data classification remain largely unexplored\. This paper takes a first step toward closing this gap by developing a rigorous statistical framework for transformer\-based functional classifiers\.  We show that a transformer architecture with an expanding attention window in the latent representation attains minimax\-optimal excess\-risk rates up to logarithmic factors in infinite\-dimensional functional classification, without relying on conventional dimension\-reduction procedures\. Our analysis further reveals a dense\-to\-sparse phase transition: when the sampling frequency exceeds a critical threshold relative to the sample size, the proposed classifier achieves the optimal dense\-observation rate; otherwise, we precisely characterize the degradation in convergence under sparse sampling\. Extensive simulations and real\-data experiments support the theory and demonstrate that transformers provide a competitive and theoretically justified approach to functional classification\.

## Test time training enhances in\-context learning of nonlinear functions

**Authors:** Kento Kuwataka; Taiji Suzuki

**ID:** 152817\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152817

[Paper](<https://openreview.net/forum?id=QApUDGBavW>) | [PDF](<https://openreview.net/pdf?id=QApUDGBavW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152817>)

Test\-time training \(TTT\) enhances model performance by explicitly updating designated parameters prior to each prediction to adapt to the test data\.  While TTT has demonstrated considerable empirical success, its theoretical underpinnings remain limited, particularly for nonlinear models\.  In this paper, we investigate the combination of TTT with in\-context learning \(ICL\), where the model is given a few examples from the target distribution at inference time\.  We analyze this framework in the setting of single\-index models, where the feature vector is drawn from a hidden low\-dimensional subspace\.  For single\-layer transformers trained with gradient\-based algorithms and adopting TTT, we establish an upper bound on the prediction risk\.  Our theory reveals that TTT enables the single\-layer transformers to adapt to both the feature vector and the link function, which vary across tasks\.  This creates a sharp contrast with ICL alone, which is theoretically difficult to adapt to shifts in the link function\.  Moreover, we provide the convergence rate with respect to the data length, showing the predictive error can be driven arbitrarily close to the noise level as the context size and the network width grow\.

## The Multiscale Single\-Index Model: A Toy Model for Hierarchical Feature Learning

**Authors:** Gordon Dai; Joan Bruna

**ID:** 152129 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VI6PExULcy>) | [PDF](<https://openreview.net/pdf?id=VI6PExULcy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152129>)

_Abstract unavailable from the accessible public sources._

## Causal pieces: analysing and improving spiking neural networks piece by piece

**Authors:** Dominik Dold; Philipp Petersen

**ID:** 148689\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148689

[Paper](<https://openreview.net/forum?id=vmQvISAYfP>) | [PDF](<https://openreview.net/pdf?id=vmQvISAYfP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148689>)

We introduce \*causal pieces\*, a novel concept for analysing spiking neural networks \(SNNs\), inspired by \*linear pieces\* used to study expressivity and trainability in artificial neural networks \(ANNs\)\. Causal pieces partition the input and parameter space of a feedforward SNN with single\-spike coding into distinct regions where the same subnetwork causes the output spikes\. For networks of current\-based leaky integrate\-and\-fire \(LIF\) neurons with large membrane time constants, we show that within each causal piece, output spike times are locally Lipschitz continuous with respect to inputs and network parameters\. We further prove a lower bound on the approximation error that depends on the number of causal pieces\. Thus, the number of causal pieces is a measure of the approximation capabilities of SNNs, which is valid despite spike\-time discontinuities and applies to networks with both excitatory and inhibitory synapses\. Empirically, we find that parameter initialisations yielding more causal pieces on the training set strongly correlate with SNN training success across multiple benchmarks, including Yin\-Yang, Fashion\-MNIST, and EuroSAT\. Moreover, simulations with standard single\-spike LIF neurons indicate that our findings extend beyond the theoretically analysed regime\. These results establish causal pieces as a powerful and principled tool for analysing and improving the computational capabilities of SNNs\.

## How Finite\-Rank Bottleneck Shape the Low\-Rank Adaptation Landscape

**Authors:** Long Nguyen\-Chi; Quynh Nguyen; Thanh Nguyen Cung; Binh T\. Nguyen

**ID:** 150830 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eyfZvKjtnQ>) | [PDF](<https://openreview.net/pdf?id=eyfZvKjtnQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150830>)

_Abstract unavailable from the accessible public sources._

## Fast and slow gradient descent dynamics of logistic regression through weak alignment

**Authors:** Han Bao

**ID:** 152237 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UYEfZQ9sax>) | [PDF](<https://openreview.net/pdf?id=UYEfZQ9sax>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152237>)

Gradient descent has been of particular interest in modern machine learning beyond sole focus on optimization because some specific structures emerge through the optimization dynamics\. Such behaviors result from optimization even though the learning objective does not explicitly encode the target structure, collectively called implicit bias, often preventing overparametrized models from fitting to spurious patterns\. A typical instance is the max\-margin implicit bias of a linear classifier, widely established for exponentially tailed loss functions\. Even after having a given dataset separated, the parameter vector continues to evolve towards the max\-margin direction asymptotically along the gradient descent dynamics\. This phenomenon corroborates a frequent empirical observation of \`\`train longer, generalize better\.'' However, the max\-margin convergence is an asymptotic phenomenon, and what is worse, this asymptotic convergence rate is significantly slower than convergence in optimization\. Even so, the parameter vector along gradient descent dynamics commonly correlates with the max\-margin direction positively \(though not exactly\) within considerably fewer iterations than the asymptotic rate\. By shedding another light on this classical yet profound problem, this work aims to understand the mechanism of this early\-stage alignment phenomenon\. Our theoretical results demonstrate that the parameter vector weakly aligns with the max\-margin direction within $O\(\\exp\(\\exp\(\-\\delta\)\)\)$ iterations, where $\\delta&gt;0$ is the permissible alignment error, which is shown to be tight\. By tracking the radial and tangential flows, our proof operates on the alignment dynamics directly with dataset geometry and gets rid of the asymptotic expansion, which is a key insight to enabling faster weak alignment\.

## Uniform Stability and Generalization Error of GD and SGD on Fixed\-Point Parameters

**Authors:** Jonghyun Shin; Sejun Park

**ID:** 155017 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9AzGTXBJJC>) | [PDF](<https://openreview.net/pdf?id=9AzGTXBJJC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155017>)

_Abstract unavailable from the accessible public sources._

## Causal pieces: analysing and improving spiking neural networks piece by piece

**Authors:** Dominik Dold; Philipp Petersen

**ID:** 148689\-\-4 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148689

[Paper](<https://openreview.net/forum?id=vmQvISAYfP>) | [PDF](<https://openreview.net/pdf?id=vmQvISAYfP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148689>)

We introduce \*causal pieces\*, a novel concept for analysing spiking neural networks \(SNNs\), inspired by \*linear pieces\* used to study expressivity and trainability in artificial neural networks \(ANNs\)\. Causal pieces partition the input and parameter space of a feedforward SNN with single\-spike coding into distinct regions where the same subnetwork causes the output spikes\. For networks of current\-based leaky integrate\-and\-fire \(LIF\) neurons with large membrane time constants, we show that within each causal piece, output spike times are locally Lipschitz continuous with respect to inputs and network parameters\. We further prove a lower bound on the approximation error that depends on the number of causal pieces\. Thus, the number of causal pieces is a measure of the approximation capabilities of SNNs, which is valid despite spike\-time discontinuities and applies to networks with both excitatory and inhibitory synapses\. Empirically, we find that parameter initialisations yielding more causal pieces on the training set strongly correlate with SNN training success across multiple benchmarks, including Yin\-Yang, Fashion\-MNIST, and EuroSAT\. Moreover, simulations with standard single\-spike LIF neurons indicate that our findings extend beyond the theoretically analysed regime\. These results establish causal pieces as a powerful and principled tool for analysing and improving the computational capabilities of SNNs\.

## Continuity Laws for Sequential Models

**Authors:** Annan Yu; Dongwei Lyu; N\. Benjamin Erichson

**ID:** 149660\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149660

[Paper](<https://openreview.net/forum?id=oQ3dzYdHDJ>) | [PDF](<https://openreview.net/pdf?id=oQ3dzYdHDJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149660>)

Inductive biases influence the behavior and performance of sequential models\. In this work, we study an underexplored inductive bias in sequential modeling: continuity in time\. We ask a simple question: do models motivated by continuous\-time formulations, such as state\-space models, actually behave continuously in time, and does this translate into better performance on tasks with continuous temporal structure? To answer this, we formalize model continuity as convergence under temporal refinement, where a model is continuous if its predictions approach an underlying continuous trajectory as the temporal discretization is refined\. We show that S4 exhibits stable continuous behavior, whereas S6 \(the core of Mamba\) can be more sensitive to input amplitude and selective dynamics, despite being derived from a continuous dynamical system\. To study whether this distinction matters for learning, we also need a corresponding notion of task continuity\. We therefore introduce a metric to quantify the continuity of datasets directly from their temporal structure\. Across benchmarks, we find a clear empirical alignment between task continuity, model continuity, and model performance\. Beyond an inductive bias, continuity also has practical consequences: we show that it enables a simple temporal subsampling strategy that improves both efficiency and performance\.

## Positional LSH: Binary Block Matrix Approximation for Attention with Linear Biases

**Authors:** Daniel Wolfson; Tal Wagner

**ID:** 148423\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148423

[Paper](<https://openreview.net/forum?id=xvvSJ2zQyy>) | [PDF](<https://openreview.net/pdf?id=xvvSJ2zQyy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148423>)

Positional encoding in transformers is commonly implemented through positional embeddings, attention masks, or bias terms, but formal connections between these mechanisms remain limited\. We study attention with positional bias through the lens of locality\-sensitive hashing \(LSH\), focusing on Attention with Linear Biases \(ALiBi\)\. We show that the ALiBi bias matrix is the expectation of contiguous block\-diagonal binary masks induced by a \`\`positional LSH'' scheme\. The empirical mean of masks sampled from this scheme yields spectral norm and max\-norm approximation guarantees with bounded block sizes with high probability\. This structural theorem implies a uniform approximation theorem for ALiBi\-biased attention: with high probability over the sampled masks, the approximate attention output is accurate simultaneously for all query\-key\-value inputs and can be computed in near\-linear time in the context length, reducing long\-context ALiBi to a collection of randomized short\-context regular \(positionally unbiased\) attention operations\. Conceptually, this connects positional bias, masks, and positional embeddings in a single formal framework and suggests an approach to efficient ALiBi\-biased attention\. Experiments on large language models validate our theoretical findings\.

## TropNNC: Structured Neural Network Compression Using Tropical Geometry

**Authors:** Konstantinos Fotopoulos; Petros Maragos; Panagiotis Misiakos

**ID:** 156769\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156769

[Paper](<https://openreview.net/forum?id=u7DRq1icmY>) | [PDF](<https://openreview.net/pdf?id=u7DRq1icmY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156769>)

We present TropNNC, a framework for compressing neural networks with linear and convolutional layers and ReLU\-type activations using tropical geometry\. By representing a network’s output as a tropical rational function, TropNNC enables structured compression via reduction of the corresponding tropical polynomials\. Our method identifies redundancy via similarity and improves upon the geometric approximation of previous work by adaptively selecting the weights of retained neurons\. We relate it to SVD and spectral clustering, and provide insights into network compression beyond the specific setting considered\. We provide the tightest known theoretical compression bound, and the first successful application of tropical geometry to convolutional layers\. TropNNC requires access only to network weights – no training data – and achieves competitive performance on MNIST, CIFAR, and ImageNet, matching strong baselines such as ThiNet and CUP\.

## Minimax\-Optimal Transformer Classification for Functional Data with Dense\-Sparse Phase Transition

**Authors:** Shuoyang Wang; Yidan Tian; Guanqun Cao

**ID:** 153031\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153031

[Paper](<https://openreview.net/forum?id=OXHtCTuaLv>) | [PDF](<https://openreview.net/pdf?id=OXHtCTuaLv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153031>)

Despite the remarkable empirical success of transformer models in natural language processing, their theoretical foundations for functional data classification remain largely unexplored\. This paper takes a first step toward closing this gap by developing a rigorous statistical framework for transformer\-based functional classifiers\.  We show that a transformer architecture with an expanding attention window in the latent representation attains minimax\-optimal excess\-risk rates up to logarithmic factors in infinite\-dimensional functional classification, without relying on conventional dimension\-reduction procedures\. Our analysis further reveals a dense\-to\-sparse phase transition: when the sampling frequency exceeds a critical threshold relative to the sample size, the proposed classifier achieves the optimal dense\-observation rate; otherwise, we precisely characterize the degradation in convergence under sparse sampling\. Extensive simulations and real\-data experiments support the theory and demonstrate that transformers provide a competitive and theoretically justified approach to functional classification\.

## Test time training enhances in\-context learning of nonlinear functions

**Authors:** Kento Kuwataka; Taiji Suzuki

**ID:** 152817\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152817

[Paper](<https://openreview.net/forum?id=QApUDGBavW>) | [PDF](<https://openreview.net/pdf?id=QApUDGBavW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152817>)

Test\-time training \(TTT\) enhances model performance by explicitly updating designated parameters prior to each prediction to adapt to the test data\.  While TTT has demonstrated considerable empirical success, its theoretical underpinnings remain limited, particularly for nonlinear models\.  In this paper, we investigate the combination of TTT with in\-context learning \(ICL\), where the model is given a few examples from the target distribution at inference time\.  We analyze this framework in the setting of single\-index models, where the feature vector is drawn from a hidden low\-dimensional subspace\.  For single\-layer transformers trained with gradient\-based algorithms and adopting TTT, we establish an upper bound on the prediction risk\.  Our theory reveals that TTT enables the single\-layer transformers to adapt to both the feature vector and the link function, which vary across tasks\.  This creates a sharp contrast with ICL alone, which is theoretically difficult to adapt to shifts in the link function\.  Moreover, we provide the convergence rate with respect to the data length, showing the predictive error can be driven arbitrarily close to the noise level as the context size and the network width grow\.

## Controlling for Omitted Variable Bias in Deep Neural Networks

**Authors:** Manuel Pfeuffer; Roshan P Rane; Kerstin Ritter; Sonja Greven

**ID:** 153604\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153604

[Paper](<https://openreview.net/forum?id=K9sgYlq0Bi>) | [PDF](<https://openreview.net/pdf?id=K9sgYlq0Bi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153604>)

Control variables are widely used in statistical modelling to account for omitted variable bias\. However, they have largely been underexplored in deep learning\. This is surprising, given that deep learning models encode image\-inferable covariates, such as demographic variables, into their predictions when these covariates are correlated with the outcome\-\-\-a form of omitted variable bias referred to as 'shortcut learning'\. While many existing confound\-control or fairness methods try to restrict the correlation of such covariates with model predictions, we show that this fails to correct for omitted variable bias\. We therefore propose a control variable approach for deep learning models, based on generalised additive modelling of the effects of model inputs and covariates\. As flexible additive models can suffer from concurvity, we introduce an estimation procedure that refits the final layer of a pre\-trained network to include covariate effects, using cross\-fitting with ridge penalisation\. We show how these effects can be orthogonalised with respect to covariates to exclude their mediated effects and that model predictions can be marginalised over the covariate distribution to control for their effect\. This yields unbiased, interpretable predictions and offers flexibility to model the desired effects depending on the scientific or fairness objective\. We verify our approach using simulated images, where it recovers the true covariate effects, even in small samples\. Existing methods either require more data or fail to recover the true effects\. We apply our method to real neuroimaging data with experimentally induced confounding, where it recovers prediction performance to near the level of a model trained on unconfounded data\.

## Greedy Alignment Principle for Optimizer Selection

**Authors:** Jaerin Lee; Kyoung Mu Lee

**ID:** 154812\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154812

[Paper](<https://openreview.net/forum?id=Alx4pHbiDI>) | [PDF](<https://openreview.net/pdf?id=Alx4pHbiDI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154812>)

Recent works have shown that gradient\-update alignment is a powerful signal for modulating optimizer updates and improving training dynamics\. We promote this update\-wise heuristic into a mathematically grounded principle for selecting and tuning optimizer hyperparameters\. By treating gradients and updates as signals, and an optimizer as a causal filter that maps between them, we formulate optimizer selection as maximizing the expected drop rate in loss over a prescribed family of optimizers\. We show that this objective is exactly the inner product between the optimizer filter and the gradient autocorrelation, and prove that a greedy optimum exists and has a stability bound under perturbations of the estimated gradient statistics\. Specializing in momentum\-based optimizers, the theory yields simple dynamic momentum selection rules for both SGD\+Momentum and Adam/AdamW\. Experiments across image classification, language model fine\-tuning, and vision transformer fine\-tuning show that the resulting dynamic momentum rules match or improve upon the best fixed hyperparameters found via manual sweeps, reducing the need for exhaustive momentum sweeps\.

## GOAT\-AL: Pseudo Neural Collapse Guides Adaptive Coverage for All\-Budget Active Learning

**Authors:** Yoel Marcu; Daphna Weinshall

**ID:** 154845\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154845

[Paper](<https://openreview.net/forum?id=AT9sJa7Rk1>) | [PDF](<https://openreview.net/pdf?id=AT9sJa7Rk1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154845>)

A central challenge in deep Active Learning is that optimal selection strategies depend on the labeling budget, shifting from coverage in low\-budget regimes to uncertainty in high\-budget regimes\.  Existing methods attempt to bridge this gap via heuristic switching or interpolation, but lack a principled mechanism to determine when such transitions should occur\. We address this with pseudo\-CDNV \(pCDNV\), a label\-free proxy for neural collapse that tracks representation maturity\. We show that pCDNV exhibits a characteristic peak that reliably signals when learned representations become suitable for uncertainty\-based selection\.  Building on this insight, we propose Geometry\-Oriented Adaptive Targeting \(GOAT\-AL\), a unified query strategy that operates across all budget regimes\. Rather than switching objectives, GOAT\-AL maintains a single coverage\-based objective while adapting the underlying feature space from self\-supervised to task\-aligned representations\. Experiments on CIFAR\-10, CIFAR\-100, and TinyImageNet demonstrate that GOAT\-AL consistently matches or outperforms state\-of\-the\-art methods across low\-, mid\-, and high\-budget regimes\.

## Comparing Linear Regions in ReLU\-Type Networks: Theory and Monte Carlo Methods

**Authors:** Yuan Wang

**ID:** 153164\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153164

[Paper](<https://openreview.net/forum?id=NOrlEjE8dx>) | [PDF](<https://openreview.net/pdf?id=NOrlEjE8dx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153164>)

In this work, we provide a complete characterization of the uniqueness of linear patterns for generic fully connected neural networks activated by ReLU or leaky ReLU functions\. With this result, together with several tools from geometry and probability, we compare the numbers of linear regions for a wide variety of networks from both theoretical and practical perspectives, with minimal prerequisites\. More specifically, on the theoretical side, we show that networks with neurons arranged as $pq\\times2$ \(2 hidden layers, each having $pq$ neurons\) are expected to have more linear regions than those arranged as $p\\times 2q$ for $p\\ge 1$ and $q\\ge 2$; on the empirical side, we show the validity of a Monte\-Carlo approach for comparing linear regions via linear patterns, and carry out experiments for networks in various scenarios\. Our results indicate that neurons closer to the input layer tend to have more impact on the number of linear regions\. Moreover, along the way, we find the precise value of the expected number of linear regions for networks with 2 hidden layers, and an explicit upper bound for networks whose layer widths are non\-increasing\. The implementations for this paper are available through the following link:  https://github\.com/temp\-repo\-259848/Regions\-ReLU\-Network

## How Finite\-Rank Bottleneck Shape the Low\-Rank Adaptation Landscape

**Authors:** Long Nguyen\-Chi; Quynh Nguyen; Thanh Nguyen Cung; Binh T\. Nguyen

**ID:** 150830\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150830

[Paper](<https://openreview.net/forum?id=eyfZvKjtnQ>) | [PDF](<https://openreview.net/pdf?id=eyfZvKjtnQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150830>)

_Abstract unavailable from the accessible public sources._

## Continual Learning in Modern Hopfield Networks with an Application to Diffusion Models

**Authors:** Ken Takeda; Masafumi Oizumi; Ryo Karakida

**ID:** 152180 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UyZlLEPgiU>) | [PDF](<https://openreview.net/pdf?id=UyZlLEPgiU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152180>)

Generative models, including diffusion models, are increasingly used as foundation models and adapted through sequential fine\-tuning, making continual learning an essential problem setting\. However, continual learning in such generative models remains poorly understood: after a task change, what aspects of the learned distribution are most easily lost, and what replay samples should be prioritized?  We address these questions through the modern Hopfield energy\. Recent links between modern Hopfield networks \(MHNs\) and diffusion models allow analyses in MHNs to be transferred to diffusion models\. We introduce intrinsic forgetting as an increase in Hopfield energy after the task change\. In tractable  settings in an MHN, we prove that high\-energy, outlier\-like samples undergo a larger energy increase than cluster\-like samples, implying that samples located in sharp, isolated basins are more forgettable\. We further analyze memory replay and show that replay is particularly effective for high\-energy samples, enabling an energy\-based  selection of replay samples\. We validate these predictions in experiments on MHNs and two diffusion models under continual\-learning settings: Stable Diffusion and a pixel\-space DDPM\. In these diffusion models, Hopfield energy tracks reconstruction\-based forgetting, and replay experiments reveal energy\-dependent mitigation of forgetting that is consistent with the MHN analysis\.

## Positional Encoding and Prompt\-Order Sensitivity in In\-Context Learning

**Authors:** Zhijie Wang; Bo Jiang; Shuai Li

**ID:** 151605\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151605

[Paper](<https://openreview.net/forum?id=ZJxEzyLoXN>) | [PDF](<https://openreview.net/pdf?id=ZJxEzyLoXN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151605>)

Transformer models have demonstrated a remarkable ability to perform a wide range of tasks through in\-context learning \(ICL\), where the model infers patterns from a small number of example prompts provided during inference\. However, empirical studies have shown that the effectiveness of ICL can be significantly influenced by the order in which these prompts are presented\. Despite its significance, this phenomenon has been largely unexplored from a theoretical perspective\. In this paper, we theoretically investigate how positional encoding \(PE\) affects the ICL capabilities of linear attention transformer models, particularly in tasks where prompt order plays a crucial role\. We examine two distinct cases: linear regression, which represents an order\-invariant task, and dynamical systems, a classic time\-series task that is inherently sensitive to the order of input prompts\. Theoretically, we evaluated the change in the model output when two types of positional encoding \(one\-hot and RoPE\) is incorporated and the prompt order is altered\. In all cases, the leading dependence on the permutation size and context length is $k/N$, with constants determined by the positional encoding, model weights, input dimension, and task dependent parameters\. These theoretical findings are experimentally validated\.

## When and How to Canonize: a Generalization Perspective

**Authors:** Yonatan Sverdlov; Benjy Friedmann; Snir Hordan; Nadav Dym

**ID:** 151406\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151406

[Paper](<https://openreview.net/forum?id=auino4yMsg>) | [PDF](<https://openreview.net/pdf?id=auino4yMsg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151406>)

While equivariant architectures are standard for processing symmetric data, there is growing interest in achieving equivariance by applying group averaging or canonization to non\-equivariant backbones\. However, the theoretical generalization properties of these alternative strategies remain poorly understood\. We introduce a theoretical framework to analyze the generalization error of these methods by bounding their covering numbers\. We establish a rigorous generalization hierarchy: the error bounds of canonized models are at best equal to the error bounds of structurally equivariant and group\-averaged models, and at worst equal to the bounds of  non\-equivariant baselines\. Furthermore, we show that there exist "optimal" canonizations which attain the optimal error bounds, and "poor" canonizations which attain the non\-equivariant error bounds, and that this depends on the regularity of the canonization\. Finally, applying this framework to permutation groups in point cloud processing, we rigorously prove that the covering number of lexicographical sorting grows exponentially with point cloud dimension, whereas Hilbert curve canonization guarantees polynomial growth\. This  provides the first formal theoretical justification for the empirical success of Hilbert curve serialization in state\-of\-the\-art point cloud architectures\. We conclude with experiments which support our theoretical claims\.

## Positional Encoding and Prompt\-Order Sensitivity in In\-Context Learning

**Authors:** Zhijie Wang; Bo Jiang; Shuai Li

**ID:** 151605\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151605

[Paper](<https://openreview.net/forum?id=ZJxEzyLoXN>) | [PDF](<https://openreview.net/pdf?id=ZJxEzyLoXN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151605>)

Transformer models have demonstrated a remarkable ability to perform a wide range of tasks through in\-context learning \(ICL\), where the model infers patterns from a small number of example prompts provided during inference\. However, empirical studies have shown that the effectiveness of ICL can be significantly influenced by the order in which these prompts are presented\. Despite its significance, this phenomenon has been largely unexplored from a theoretical perspective\. In this paper, we theoretically investigate how positional encoding \(PE\) affects the ICL capabilities of linear attention transformer models, particularly in tasks where prompt order plays a crucial role\. We examine two distinct cases: linear regression, which represents an order\-invariant task, and dynamical systems, a classic time\-series task that is inherently sensitive to the order of input prompts\. Theoretically, we evaluated the change in the model output when two types of positional encoding \(one\-hot and RoPE\) is incorporated and the prompt order is altered\. In all cases, the leading dependence on the permutation size and context length is $k/N$, with constants determined by the positional encoding, model weights, input dimension, and task dependent parameters\. These theoretical findings are experimentally validated\.

## How to Scale Mixture\-of\-Experts: From muP to the Maximally Scale\-Stable Parameterization

**Authors:** Leena Chennuru Vankadara; Moritz Haas; Luke Hayward; Sebastian Bordt; Alessandro Breccia

**ID:** 155300\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155300

[Paper](<https://openreview.net/forum?id=6c5MRDWXkL>) | [PDF](<https://openreview.net/pdf?id=6c5MRDWXkL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155300>)

_Abstract unavailable from the accessible public sources._

## Mamba Can Learn Low\-Dimensional Targets In\-Context via Test\-Time Feature Learning

**Authors:** Junsoo Oh; Wei Huang; Taiji Suzuki

**ID:** 150684 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gGRd5Ll8TD>) | [PDF](<https://openreview.net/pdf?id=gGRd5Ll8TD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150684>)

_Abstract unavailable from the accessible public sources._

