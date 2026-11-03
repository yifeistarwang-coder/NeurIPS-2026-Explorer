# Deep Learning / Algorithms

深度学习 / 算法

180 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Local\-Interaction Learning Dynamics: A Markov Random Field Framework for Convergence of Deep Neural Network Learning

**Authors:** Wen Dong

**ID:** 153830 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IOtI8jFguP>) | [PDF](<https://openreview.net/pdf?id=IOtI8jFguP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153830>)

Modern neural\-network training is governed by local interactions: residual streams carry signal, normalization changes scale, attention and state\-space blocks route information, augmentation changes which directions generalize, and optimizer state determines the actual checkpoint update\. Parameter\-space curvature and full\-weight posterior views reveal global geometry, but they do not show which layer, block, or interface created it\. We introduce a computation\-graph view in which parameters $\\theta$ and intermediate states $u$ define a local Markov\-\-Gibbs system\. A potential energy encodes module relations, data loss, and regularization; its Gibbs law gives a probability reference, and its checkpoint\-local Fisher/Gauss\-\-Newton precision matrix gives the curvature geometry\. This precision matrix is sparse because variable groups interact only when they share a local module or loss factor\. Eliminating intermediate states recovers the reduced parameter curvature\. From this common object we prove two results: separator transfers give two\-sided criticality certificates for upper stability and active plasticity, and a resolved KL\-to\-Gibbs bound yields bounded\-loss PAC\-Bayes certificates on directions explored by training\. Checkpoint measurements on CIFAR\-10 and GPT\-20M/FineWeb\-Edu show that these quantities diagnose learning\-rate stability, plasticity, and generalization geometry without dense Hessian, Fisher, or covariance matrices\.

## Position: Adopt Constraints Over Fixed Penalties in Deep Learning

**Authors:** Juan Ramirez; Seyed Meraj Hashemizadehaghda; Simon Lacoste\-Julien

**ID:** 140086 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Iv14FAc2CU>) | [PDF](<https://openreview.net/pdf?id=Iv14FAc2CU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140086>)

Recent efforts to develop trustworthy AI systems have increased interest in learning problems with explicit requirements, or constraints \. In deep learning, however, such problems are often handled through fixed weighted\-sum penalization : the constraints are added to the task loss with fixed coefficients, and the resulting scalarized objective is minimized\. This position paper argues that fixed penalization is often ill\-suited for deep learning problems with non\-negotiable requirements for several reasons\. First, in non\-convex settings, the penalized and constrained problems are generally not equivalent, so solving the former need not solve the latter\. Second, fixed penalization weakens hard requirements into soft penalties to be traded off against task performance\. Third, choosing penalty coefficients to indirectly solve the constrained problem often involves costly trial and error, because changing them alters the penalized objective itself, and hence can mean solving the wrong problem altogether\. We therefore argue that, when a deep learning problem specifies non\-negotiable requirements, the constrained formulation itself should be the starting point, not the surrogate problem defined by fixed penalization\. The appropriate solution strategy should then be chosen based on the problem's structure and scale\.

## TriSpec: Ternary Speculative Decoding via Lightweight Proxy Verification

**Authors:** Haoyun Jiang; Junqi He; Feng Hong; Xinlong Yang; jianwei zhang; Zhengyang Zhuge; Zheng Li; Xiaofeng Cao; Zhiyong Chen; Bo Han; Junyang Lin; Jiangchao Yao

**ID:** 152166 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V2xJUmQ22n>) | [PDF](<https://openreview.net/pdf?id=V2xJUmQ22n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152166>)

Inference efficiency in Large Language Models \(LLMs\) is fundamentally limited by their serial, autoregressive generation, especially as reasoning becomes a key capability and response sequences grow longer\. Speculative decoding \(SD\) offers a powerful solution, providing significant speed\-ups through its lightweight drafting and parallel verification mechanism\. While existing work has nearly saturated improvements in draft effectiveness and efficiency, this paper advances SD from a new yet critical perspective: the verification cost\. We propose TriSpec, a novel ternary SD framework that, at its core, introduces a lightweight proxy to significantly reduce computational cost by approving easily verifiable draft sequences and engaging the full target model only when encountering uncertain tokens\. TriSpec can be integrated with state\-of\-the\-art SD methods like EAGLE\-3 to further reduce verification costs, achieving greater acceleration\. Extensive experiments on the Qwen3 and DeepSeek\-R1\-Distill\-Qwen/LLaMA families show that TriSpec achieves up to 35\\% speedup over standard SD, with up to 50\\% fewer target model invocations while maintaining comparable accuracy\.

## Affine\-Image Propagation for Tight and Scalable $\\ell\_\{2\}$ Neural Network Verification

**Authors:** Hong\-Ming Chiu; Haoyu Li; Huan Zhang; Richard Y Zhang

**ID:** 150286 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jJKsS0Cmjn>) | [PDF](<https://openreview.net/pdf?id=jJKsS0Cmjn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150286>)

While bound propagation methods are highly effective for certifying neural network robustness against $\\ell\_\{\\infty\}$ adversaries, scalable verification for $\\ell\_\{2\}$ perturbations remains a significant open challenge\. Existing approaches suffer from severe geometric loss: elementwise bounding methods like $\\alpha$\-CROWN relax Euclidean balls to bounding boxes, losing a factor of $\\sqrt\{n\}$ in radius, while the recently proposed SDP\-CROWN rounds deformed ellipsoids back into balls, losing a factor proportional to the condition number of the weights\. Consequently, tight $\\ell\_\{2\}$ verification is currently restricted to near\-isometric or Lipschitz\-regularized networks where these approximations are not vacuous\. In this paper, we introduce affine\-image propagation, a novel CROWN\-compatible framework that exactly propagates the affine geometry of $\\ell\_\{2\}$ balls and $\\ell\_\{\\infty\}$ boxes through the network\. To bypass the prohibitive computational cost of exact Semidefinite Programming \(SDP\) constraints required by this representation, we derive highly scalable, SDP\-based bounds utilizing diagonal\-dominance surrogates\. Our approach effectively eliminates the geometric bottlenecks of prior work, yielding the first large\-scale, SDP\-style bound propagation method capable of tight $\\ell\_\{2\}$ verification for general, non\-Lipschitz\-regularized  neural networks\.

## GRINQH: Graded Input\-based Quantization Hierarchy for Efficient LLM Generation

**Authors:** Jette Oberländer; Jan Finkbeiner; Catherine Schoefmann; Emre Neftci

**ID:** 154466 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DOTl7hxxnO>) | [PDF](<https://openreview.net/pdf?id=DOTl7hxxnO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154466>)

Autoregressive decoding with LLMs is primarily bottlenecked by GPU memory bandwidth, especially in edge\-computing settings\. While quantization is essential for mitigating this bottleneck, most existing methods treat inference as uniform process and fail to account for the asymmetry between the compute\-bound prefill stage and the memory\-bound decoding stage\. We propose GRINQH \(GRaded INput\-based Quantization Hierarchy\), a weight\-only post\-training quantization framework that accelerates decoding by unifying quantization and sparsification\. GRINQH leverages activation magnitudes as a proxy for computational importance to dynamically assign weight channels to different precision levels, enabling flexible average bit widths during decoding\. Evaluated on Llama3 and Qwen3 models, GRINQH outperforms state\-of\-the\-art fixed\- and mixed\-precision baselines at comparable 3\- and 4\-bit settings, even enabling effective 2\-bit generation\. We experimentally verify theoretical speedups by leveraging a hierarchical nested memory layout for multi\-precision storage in custom GPU kernels\. Together, GRINQH establishes a new state\-of\-the\-art Pareto frontier for LLM generation, enabling a dynamic trade\-off between generation quality and inference speed\.

## Reference\-Guided Training: Adaptive Gradient Scaling via Per\-Sample Loss Comparisons

**Authors:** Israel Rodrigues Soares; Pedro Benedetti; Thanda Shwe; Israel Mendonca; Masayoshi Aritsugi

**ID:** 148399 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y7zQMhy4Gr>) | [PDF](<https://openreview.net/pdf?id=y7zQMhy4Gr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148399>)

Empirical Risk Minimization treats training samples uniformly, which can degrade performance in noisy or heterogeneous settings\. We introduce a reference\-guided objective that uses per\-sample error comparisons with a fixed reference model to reweight gradient contributions without relying on prediction imitation, while preserving gradient direction and ensuring bounded scaling\. Theoretical analysis shows that the formulation induces adaptive weighting with controlled amplification\. Experiments on image classification with synthetic label noise and on time\-series forecasting demonstrate broad improvements across architectures, particularly in moderate\-to\-high noise and heterogeneous regimes\. Results further indicate that the method is most effective when the error\-ranking alignment between the baseline model and the reference model is low, suggesting that gains arise primarily from the diversity of the reference error ranking relative to the learner, rather than the reference's absolute performance\.

## Leveraging Dale’s Principle as an Inductive Bias in Recurrent Neural Networks

**Authors:** Jiyi Wang; Chenxiao Yang; Yujia Zhao; Jingzhao Zhang; Lu Mi

**ID:** 150098 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=khQb0B2cJ5>) | [PDF](<https://openreview.net/pdf?id=khQb0B2cJ5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150098>)

One of the fundamental differences between biological neural networks and artificial neural networks \(ANNs\) is that biological neurons obey Dale’s principle: each neuron projects either exclusively excitatory or exclusively inhibitory outputs\. While this constraint is central to biological circuits, previous attempts to impose Dale’s principle in ANNs have often led to training instability or degraded performance\. In this work, we introduce EISep RNN, a recurrent neural network architecture that implements Dale’s principle through a learnable excitatory–inhibitory separation\. Across a series of learning settings, including multi\-task learning, continual learning, and reinforcement learning, EISep achieves more stable training dynamics, competitive or improved performance, and sparser, more modular connectivity than vanilla RNNs and previous Dale\-constrained models\. EISep also exhibits stable and informative latent dynamics\. These results establish Dale’s principle as a biologically grounded and computationally effective inductive bias for recurrent neural networks\.

## Hypergraph\-guided Global Mean\-field Negotiation For Multiview Evidential Classification

**Authors:** Shaobo Hu; Shiliang Sun; Nan Zhang

**ID:** 154477 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DJ0SjigW1o>) | [PDF](<https://openreview.net/pdf?id=DJ0SjigW1o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154477>)

Multiview learning integrates complementary information from diverse observations to enhance model performance, where to quantify predictive uncertainty evidential deep learning has recently gained significant attention\. However, existing methods generally overlook the critical importance of high\-order correlation structures in multiview features, and traditional evidential combination rules frequently suffer from issues such as order dependence and irrational belief assignments when handling highly conflictive multiview features\. To address these issues, we propose the Hypergraph\-guided Global Mean\-field Negotiation \(HGMN\) method for Multiview Evidential Classification\. Specifically, HGMN first leverages hypergraph convolutional networks to capture high\-order topological correlations within each view\. Subsequently, instead of relying on pairwise or hierarchical fusion strategies, HGMN introduces a global mean\-field negotiation mechanism that enables multiple views to dynamically reach a global consensus, effectively isolating dissenting noise\. Finally, HGMN incorporates a multi\-objective collaborative optimization strategy that enhances decision robustness and trustworthiness in complex open\-world environments\. Extensive experimental results on eight public datasets demonstrate that our method significantly outperforms state\-of\-the\-art baselines in terms of accuracy and robustness\.

## Neural networks are more modular than single neurons suggest

**Authors:** Shreya Saha; Benjamin Bergen; Meenakshi Khosla

**ID:** 155584 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4X3mMoAJwr>) | [PDF](<https://openreview.net/pdf?id=4X3mMoAJwr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155584>)

Neural networks routinely develop representations in which individual neurons respond to mixtures of task\-relevant variables, leading to the widespread view that such networks lack modular organization\. We challenge this conclusion by introducing a formally nested hierarchy of modularity: unit\-level, which requires distinct computations to occupy disjoint neurons; orthogonal, which asks whether a rotation reveals functionally independent subspaces; and linear, which asks whether a bounded linear map can separate task\-relevant computations into independent subspaces\. We develop a unified framework for learning decompositions at each level and evaluating them causally through selective ablation\. Across vision models, anguage models and multitask RNNs, we find that networks which lack unit\-level modularity nonetheless often exhibit clear functional modularity at the subspace level\. In vision and language models, content versus style and syntax versus semantics respectively dissociate under subspace ablation despite sharing overlapping populations of neurons\. In RNNs trained on multiple cognitive tasks and previously shown to lack modular structure, our decomposition recovers sharp double dissociations between tasks\. These results demonstrate that modularity cannot be assessed at a single level of description\. The hierarchy we introduce provides a principled framework for determining when and at what level of analysis functional specialization exists in neural network representations\.

## MixScentNet: A Multiscale Graph\-based Framework for Predicting Scent Mixture Perception

**Authors:** Xingran Liao; Mingliang Zhou; Weisi Lin

**ID:** 154439 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DXdKmHl3vd>) | [PDF](<https://openreview.net/pdf?id=DXdKmHl3vd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154439>)

Predicting the olfactory perception of scent mixtures remains a fundamental challenge in computational neuroscience\. Existing methods derive mixture\-level features by encoding individual components with a single\-molecule feature encoder pretrained on annotated olfactory data and aggregating these features via mean pooling, concatenation, or self\-attention\. This paradigm faces two critical limitations: the scarcity of annotated olfactory data and the inability to capture complex interactions among mixture components\. We present MixScentNet, a multiscale graph neural network framework, to address these challenges with two key innovations\. First, we introduce a self\-supervised pretraining strategy that uses molecular graph structures with RDKit features to predict corresponding Mordred descriptors, enabling the model to learn rich physicochemical knowledge without relying on scarce annotated olfactory data\. Second, we propose a novel mixture\-as\-graph paradigm to model the constituent molecules as nodes in the mixture\-level graph, aligning with the fact that humans holistically perceive scent mixtures\. We further process the graph via a graph attention network V2 \(GATv2\) to capture the high\-order molecular interactions\. MixScentNet differs from existing methods in terms of its pretraining strategy and ability to capture mixture\-level features, achieving state\-of\-the\-art performance on both mixture\-level olfactory label prediction and perceptual distance estimation tasks\. We also find that MixScentNet can reproduce olfactory white phenomena, indicating that the model enjoys clear interpretability grounded in psychophysics\. The demo code is available in the Anonymous link \\url\{https://anonymous\.4open\.science/r/Odor\-D2DB\}

## Better Language Models Require Better Domain\-Specific Inductive Biases

**Authors:** Damien Teney; Liangze Jiang; Zachary Shinnick; Hemanth Saratchandran; Simon Lucey

**ID:** 140098 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E7jxq4ttP2>) | [PDF](<https://openreview.net/pdf?id=E7jxq4ttP2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140098>)

Language models \(LMs\) obtain much of their capability from the diversity of their training data\. This is possible because neural architectures like transformers are remarkably flexible and can handle a variety of domains such as natural language, code, and mathematics\. This raises the question: are transformers optimal for any specific domain? In this position paper, we present empirical evidence that the inductive biases of transformer\-based LLMs should be re\-examined, since, while broadly useful, they are often suboptimal on subsets of their training data\.  \*\*Methods\.\*\* To support this position, we use a method that learns new activation functions within a transformer as a tool to explore the space of inductive biases\. We train the resulting modified architectures on various data subsets\. A large\-scale evaluation shows that vanilla transformers are relatively easy to improve, but mostly on a per\-domain basis\. For example, an architecture optimized for a natural language dataset like FineWeb performs well on another such dataset like TinyStories, whereas architectures optimized for mathematics perform poorly on natural language\. We also identify the mechanisms responsible for these improvements\.  \*\*Implications\.\*\* These results call for re\-evaluating core design choices in language models\. We do not advocate a return to handcrafted, domain\-specific models\. Instead, we emphasize that different domains can benefit from different learning mechanisms\. This will require new designs that preserve cross\-domain interactions, analogous to how reasoning in the brain arises from the interaction of multiple specialized networks\. We argue that this perspective may be key to improving reliability and data efficiency\.

## Grid Games: The Power Of Multiple Grids for Quantizing Large Language Models

**Authors:** Vage Egiazarian; Erik Schultheis; Andrei Panferov; Earl Killian; Torsten Hoefler; Dan Alistarh

**ID:** 153337 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M4Xj5w0EcJ>) | [PDF](<https://openreview.net/pdf?id=M4Xj5w0EcJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153337>)

A major recent advance in quantization is given by microscaled 4\-bit formats such as NVFP4 and MXFP4, quantizing values into small groups sharing a scale, assuming a fixed floating\-point grid\.  In this paper, we study the following natural extension: assume that, for each group of values, we are free to select the "better" among two or more 4\-bit grids marked by one or more bits in the scale value\. We formalize the power\-of\-two\-grids \(PO2\) problem, and provide theoretical results showing that practical small\-group formats such as MXFP or NVFP can benefit significantly from PO2 grids, while the advantage vanishes for very large groups\.  On the practical side, we instantiate several grid families, including 1\) PO2\(NF4\), which pairs the standard NF4 normal grid with a learned grid, 2\) MPO2, a grid pair that is fully learned over real weights and activations, and 3\) SFP4, a TensorCore\-implementable triple which pairs NVFP4 with two shifted variants\.   Results for post\-training quantization of standard open models and pre\-training of Llama\-like models show that adaptive grids consistently improve accuracy vs single\-grid FP4 under both weight\-only and weight\+activation quantization\.

## AdaTree: Serving\-Aware Adaptive Tree Construction for Speculative Decoding

**Authors:** Soohyun Cha; Jungi Lee; Jaewoong Sim

**ID:** 153118 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NnEEkVzU8t>) | [PDF](<https://openreview.net/pdf?id=NnEEkVzU8t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153118>)

Speculative decoding accelerates generative inference of large language models \(LLMs\) by using a small draft model to propose multiple candidate tokens, which are then verified in parallel with the target model in a single decoding iteration\. While the state\-of\-the\-art method of tree\-based speculative decoding helps improve generation throughput over non\-speculative inference, deploying it in LLM serving systems often yields suboptimal performance due to dynamically changing serving conditions\. In particular, our analysis shows that the optimal tree configuration\-\-\-the one that maximizes performance\-\-\-varies with two key serving conditions: request rate and per\-request characteristics\. Based on the analysis, we present AdaTree, a plug\-in component for LLM serving systems that dynamically adapts tree configurations to varying serving conditions\. AdaTree predicts model execution time and acceptance length across different tree configurations and selects the one that maximizes speculative decoding efficiency\. To capture the non\-linear relationship between tree configuration and model execution time, AdaTree employs decision trees as its core modeling primitive\. Our evaluation shows that AdaTree consistently outperforms both chain\-based and static tree\-based speculative decoding across diverse serving conditions\.

## A Stability Analysis of AdamW: Unstable Equilibria and Non\-Convergence

**Authors:** Baiyu Su; Lizhang Chen; Qiang Liu

**ID:** 151341 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bGprJAGt6w>) | [PDF](<https://openreview.net/pdf?id=bGprJAGt6w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151341>)

AdamW is ubiquitous in deep learning, yet its behavior remains poorly understood\. We analyze its dynamics through the lens of dynamical systems and show that AdamW admits an \\emph\{implicit fixed\-point objective\}: its fixed points coincide with the stationary points of a constrained and regularized optimization problem\. However, not all of these fixed points are stable under AdamW’s dynamics, and stability depends sensitively on curvature, weight decay, and momentum parameters\. Even in simple one\-dimensional settings, AdamW can exhibit surprisingly complex behavior: equilibria may be unstable, and numerical trajectories can exhibit persistent oscillations rather than convergence to them\. We further extend the analysis to higher dimensions, deriving sufficient conditions for local stability of the continuous\-time dynamics, and propose a convergent modification that preserves AdamW's fixed points\. These results clarify what optimization problem AdamW is associated with, when its convergence can be expected, and how its dynamics could inspire more reliable optimizers\.

## ADKV: A Low\-Overhead Adaptive Delta Quantization for KV Cache in LLM Inference

**Authors:** Honghao Jia; Zhenxing Li; Jialiang Guo; Jiacheng Gan

**ID:** 150885 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eg0RKFy1ZG>) | [PDF](<https://openreview.net/pdf?id=eg0RKFy1ZG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150885>)

The KV cache is a major memory bottleneck in LLM inference, especially under large batch sizes and long contexts\. While quantization is a promising solution, existing static group\-wise quantization methods are constrained by a trade\-off between metadata overhead and accuracy: increasing the group size reduces per\-group metadata \(e\.g\., zero\-points, scaling factors, and outlier indices\), but exacerbates quantization errors under the sinusoidal\-like temporal drift of post\-RoPE outlier channels; conversely, using smaller groups improves accuracy but incurs substantial metadata overhead\. In this paper, we propose ADKV, a low\-overhead adaptive delta quantization framework for KV cache in LLM inference, which leverages the temporal structure of the KV cache\. ADKV tracks per\-channel zero\-points and scaling factors via online EMA, adapting to the sinusoidal\-like temporal drift of post\-RoPE outlier channels, thereby eliminating the rigidity of static group\-wise quantization\. This adaptive mechanism further enables delta coding to embed metadata directly into the quantized sequence, decoupling metadata overhead from context length\. To minimize the MSE of attention outputs, we design an SGD\-based calibration algorithm that models ADKV as an RNN\. Experiments on generation and long\-context benchmarks show that, while matching the accuracy of static group\-wise quantization, ADKV reduces the metadata memory footprint by $\\sim 12\.8\\times$\. A custom fused ADKV\-GEMV CUDA kernel optimized for memory\-bound autoregressive generation achieves $\\sim 1\.96\\times$ throughput over the FP16 baseline\.

## Cannistraci\-Hebb Channel\-wise Dynamic Sparse Training of Convolutional Neural Networks with Contextual Modulation

**Authors:** Wenjing Wu; Hanming Li; Xizheng Deng; Jialin Zhao; Yingtao Zhang; Yusong Wang; Carlo Vittorio Cannistraci

**ID:** 149797 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nGqulMkhab>) | [PDF](<https://openreview.net/pdf?id=nGqulMkhab>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149797>)

Dynamic Sparse Training \(DST\) is an effective paradigm for sparse to sparse training of neural network connectivity under a fixed parameter budget\. Recent advances in network\-science for AI introduced epitopological learning methods, such as Cannistraci\-Hebb Training \(CHT\), demonstrating that network automata applied to the mere network topology enables gradient\-free predictions of the sparse connectivity evolution that can trigger significant increase in task performance\. However, these methods were currently developed for standard MLP\-like fully\-connected architectures and need significant rethinking to be extended to convolutional neural networks \(CNNs\) due to element\-wise weight sharing and spatially repeated interactions\. In this work, we bridge this gap by introducing epitopological learning DST for CNNs through channel\-wise network modeling to address the prohibitive complexity of element\-wise modeling, which treats each kernel\-channel as a single network node\. Results show orders\-of\-magnitude improvements in time complexity of link\-regrowth when applied at channel\-level with respect to element\-level\. We also enhance the channel\-wise formulation with lightweight contextual modulation to improve expressivity\. Extensive experiments on CIFAR\-10, CIFAR\-100, and Tiny\-ImageNet with ResNet and VGG architectures demonstrate that our method achieves performance comparable to dense training using only 30% of the parameters, which significantly reduces computational cost\. Furthermore, our approach improves robustness under noisy inputs\. These results highlight the effectiveness of topology\-aware sparse training and the benefit of decoupling graph construction from sparse update rules in convolutional networks\.

## A Unified Merge Calculus for Learning\-Rate Scaling on Neural Computation Graphs

**Authors:** Haosong Zhang; Wu Shenxi; Zhiyuan Che; Xi Chen; Wei LIN; Yichi Zhang

**ID:** 152315 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TzJ1RmUWQr>) | [PDF](<https://openreview.net/pdf?id=TzJ1RmUWQr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152315>)

Learning\-rate selection is one of the most consequential and repeatedly tuned decisions in modern deep learning, and the ability to transfer it quickly across widths, depths, and architectures can substantially reduce the cost of scaling new models\. Existing transfer laws explain width through maximal\-update parameterization and depth through depth\-based scaling laws, but many modern architectures are better described as neural computation graphs with heterogeneous merge rules rather than by depth alone\. We develop a unified merge calculus for learning\-rate scaling on such graphs\. Its central object is a graph\-aware complexity coefficient that combines local merge semantics with global path structure and induces a $\-1/2$ power law for the target learning\-rate scale\. We further show that depth alone is generally insufficient once merge semantics vary across architecture families\. We validate the framework on controlled graph families and lightweight representative architectures covering uniform sum, residual\-aware sum, concat, weighted fusion, and hybrid designs\. Across these settings, the resulting graph coefficients organize optimal learning rates more effectively than depth alone and support practical learning\-rate transfer\.

## Network of Theseus \(Like the ship\)

**Authors:** Vighnesh Subramaniam; Colin Conwell; Boris Katz; Andrei Barbu; Brian Cheung

**ID:** 151706 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YfYLM1NeEt>) | [PDF](<https://openreview.net/pdf?id=YfYLM1NeEt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151706>)

A standard assumption in deep learning is that the inductive bias introduced by a neural network architecture must persist from training through inference\. The architecture you train with is the architecture you deploy\. This assumption constrains the community from selecting architectures that may have desirable efficiency or design properties due to difficulties with optimization\. We challenge this assumption with Network of Theseus \(NoT\), a method for progressively converting a trained, or even untrained, guide network architecture part\-by\-part into an entirely different target network architecture while preserving the performance of the guide network\. At each stage, components in the guide network architecture are incrementally replaced with target architecture modules and aligned via representational similarity metrics\. This procedure largely preserves the functionality of the guide network even under substantial architectural changes—for example, converting a convolutional network into a multilayer perceptron, or GPT\-2 into a recurrent neural network\. By decoupling optimization from deployment, NoT expands the space of viable inference\-time architectures, opening opportunities for better accuracy–efficiency tradeoffs and enabling more directed exploration of the architectural design space\.

## RPFQ\-ViT: Rotated Phase\-Frame Quantization for Extremely Low\-Bit Weights in Vision Transformers

**Authors:** Mengyuan Fan; Bokai Huang; JiaMing Pan; Xiaokun Yuan; Peizhuang Cong; Zhewen Tan; Tong Yang

**ID:** 151887 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XB7p2Y3eXt>) | [PDF](<https://openreview.net/pdf?id=XB7p2Y3eXt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151887>)

Vision Transformers \(ViTs\) achieve strong performance on image recognition and mobile vision applications, but their high\-dimensional linear projections and attention computations still impose substantial storage and inference costs\. Extremely low\-bit quantization is a promising solution, yet ViTs often suffer severe accuracy degradation because conventional real\-valued scalar codebooks are poorly matched to the directional geometry of Transformer projections\. We present RPFQ\-ViT, a Rotated Phase\-Frame Quantization method that quantizes paired channels in two\-dimensional phase planes, enabling low\-bit codes to better preserve projection directions while recovering magnitude with lightweight scaling\. RPFQ\-ViT serves as a drop\-in QAT replacement for \\texttt\{nn\.Linear\} and does not modify the standard real\-valued attention, normalization, or activation computation graph\. On ImageNet\-1K, RPFQ\-ViT\-B/16 reaches 79\.33\\% Top\-1 / 94\.48\\% Top\-5 under W2/A4, Swin\-T reaches 79\.30\\% Top\-1 / 94\.79\\% Top\-5 under W2/A8, and DeiT\-S reaches 77\.41\\% Top\-1 / 93\.11\\% Top\-5 under W2/A8\. Ablations, phase\-geometry analysis, and direction\-preservation metrics show that channel pairing, learnable rotation, phase\-anchor learning, and residual phase refinement each improve quantization quality\. We further deploy RPFQ\-ViT image\-classification models on native iOS and Android runtime stacks; with 2\-bit packed weights, model size shrinks by roughly $5\.4$\-\-$7\.1\\times$ relative to FP32 and end\-to\-end on\-device latency drops by $1\.4$\-\-$1\.6\\times$\. All ImageNet results trained in our codebase use a matched 300\-epoch recipe and are reported as mean accuracies over three independent runs\. These results show that RPFQ\-ViT provides a favorable trade\-off among accuracy, compression, and practical mobile deployment for extremely low\-bit ViTs\.

## From Density Matrices to Phase Transitions in Deep Learning: Spectral Early Warnings and Interpretability

**Authors:** Max Hennick; Guillaume Corlouer

**ID:** 150936 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eBccMC00vY>) | [PDF](<https://openreview.net/pdf?id=eBccMC00vY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150936>)

A key problem in the modern study of Deep Learning is predicting and understanding emergent capabilities in models during training\. Inspired by methods for studying reactions in quantum chemistry, we present the \`\`2\-datapoint reduced density matrix" \(2RDM\)\. We show that this object provides a basis for computationally efficient, unified observables of phase transitions during training\. First is the \\textit\{spectral heat capacity\}, which we prove provides early warning signals for learning events\. Second is the participation ratio, which reveals the dimensionality of the underlying reorganization associated with a learning event\. Remarkably, the top eigenvectors of the 2RDM are directly interpretable, making it straightforward to study the nature of the transitions\. We validate across four distinct settings: deep linear networks, induction head formation, grokking, and emergent misalignment\. We then discuss directions for future work using the 2RDM\.

## Ensuring Deployment\-Time Safety of Neural Network Controlled Systems via Localized Certificate Repair

**Authors:** Xiaoyang Lv; Peixin Wang; Jianhao Bai; Bai Xue; Min Zhang; Luke Ong

**ID:** 150792 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fMUyPAggFz>) | [PDF](<https://openreview.net/pdf?id=fMUyPAggFz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150792>)

Barrier certificates provide formal safety guarantees for neural network controlled systems by ensuring that system trajectories avoid unsafe regions over time\. However, after deployment, previously unseen obstacles or constraint changes may introduce new unsafe regions, invalidating the original certificate and potentially leading to unsafe behavior\. We address this setting with $\\textit\{adaptive piecewise barrier certificates\}$, which preserve the original certificate and policy in unchanged regions while introducing localized updates around newly emerged unsafe regions\. The central question is how to perform such updates efficiently during system execution without retraining from scratch\. Our key idea is to cast deployment\-time adaptation as a localized certificate repair problem and reduce it to an optimization task that leverages the learned structure of previous barrier certificates, enabling fast updates without global retraining\. We further design a staged repair framework that progressively transitions from localized repair to joint policy–certificate updates and, when necessary, localized retraining\. Empirical results on four benchmarks with five new obstacles show that our method succeeds in all cases and completes within tens of seconds on average, whereas retraining from scratch fails in most cases\. On instances where retraining succeeds, our method is \\textbf\{17\.3$\\times$\} faster on average\. It incurs only \\textbf\{16\.2\\%\} performance degradation relative to the original policy\.

## Topological Invariance and Breakdown in Learning Dynamics

**Authors:** Yongyi Yang; Tomaso Poggio; Isaac Chuang; Liu Ziyin

**ID:** 153082 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=O7QMMCGEnE>) | [PDF](<https://openreview.net/pdf?id=O7QMMCGEnE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153082>)

While mainstream theories of deep learning focus on training with a small learning rate, a growing body of theoretical and empirical work suggests that neural network training dynamics can be qualitatively different at large learning rates\. However, a clear and general understanding of the fundamental differences between training at small and large learning rates remains lacking\. In this work, we prove that if a group of parameter vectors \(neurons\) in a neural network model exhibits permutation symmetry, then widely used training algorithms induce a continuous mapping on the set formed by these vectors\. Moreover, when the learning rate is below a certain threshold, this mapping becomes a homeomorphism\. Our result reveals a critical point of the learning rate: below it, the training dynamics are guaranteed to preserve the topology of the set of neurons, whereas above it, training may introduce simplifications to the underlying neuron manifold\. This provides a topological description of a novel implicit regularization effect of small learning rates and offers a potential theoretical lens for empirical phenomena such as loss of plasticity\. Notably, our theory is independent of specific network architectures and loss functions, enabling topology to be applied universally to deep learning theory\.

## On the Overscaling Curse of Parallel Thinking: System Efficacy Contradicts Sample Efficiency

**Authors:** Yiming Wang; Zhuosheng Zhang; Rui Wang

**ID:** 148376 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yLcpYgtJ0Z>) | [PDF](<https://openreview.net/pdf?id=yLcpYgtJ0Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148376>)

Parallel thinking improves LLM reasoning through multi\-path sampling and aggregation\. In standard evaluations, due to a lack of sample\-specific priors, all samples share a global budget chosen to maximize dataset accuracy\. However, many samples reach their best accuracy with much smaller budgets, causing low budget utilization\. This \*contradiction between system efficacy and sample efficiency\* constitutes the \*\*Overscaling Curse\*\*\. In this paper, we first provide a formal analysis of the overscaling curse and quantify its prevalence and severity in real\-world systems\. To break it, we propose \*\*Latent Budget Predictor \(LanBo\)\*\*, which probes model latent representations to predict sample\-specific optimal budgets\. LanBo significantly improves budget utilization while maintaining dataset accuracy\. We further integrate LanBo into the full decoding pipeline, inspiring \*\*Pre\-decoding Budget Adaptation \(PreAda\)\*\*, a paradigm that allocates budgets before decoding to preserve decoding\-time parallelization\. LanBo substantially improves hardware\-aware efficiency in latency and memory, demonstrating both its practical value and the promise of PreAda for efficient parallel decoding\.

## Sparse Repair in Reasoning Traces: A Structural View of Test\-Time Inference

**Authors:** Zhuorui Zhang; Jianqi Yan; Shanshan Feng; Fan LI

**ID:** 155383 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=63LOfNSXwb>) | [PDF](<https://openreview.net/pdf?id=63LOfNSXwb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155383>)

Inference\-time reasoning improves when models spend more computation through repeated sampling, search, or verification\. Existing scaling strategies usually allocate this computation across prompts, candidate answers, or whole trajectories\. We study a different structure: how the repair value of additional inference is distributed within a single generated reasoning trace\. Across mathematical, scientific, coding, and knowledge\-intensive reasoning tasks, recoverable utility is sharply concentrated: in oracle replay analysis over coarse trace windows, the top\-three windows capture 83\-\-90\\% of replay\-recoverable utility\. This concentration is not fully explained by position, length, or local uncertainty alone\. Building on this finding, we introduce \\textbf\{LEVER\}, a sparse local\-intervention method for test\-time reasoning that separates counterfactual discovery from deployable compute allocation\. It uses local replay to estimate window\-level recoverable utility, then distills this offline signal into a lightweight selector\. At test time, the selector uses only online\-safe trace features to decide which traces to activate and which windows receive additional rollouts\. At a average 1\.31$\\times$ realized completion\-token cost, LEVER improves average performance by about 4\.2 points over base decoding\. Across three base models and four task families, LEVER obtains the best result on 11 of 12 model\-\-task pairs at the primary operating points, while using less compute than full\-trajectory sampling baselines\. These results suggest that effective test\-time reasoning depends not only on how much computation is spent, but on whether it reaches the local commitments where repair value is highest\.

## Distributed\-Order Fractional Spiking Neural Network

**Authors:** Chengjie Ge; Yufeng Peng; Qiyu Kang; Xueyang Fu; Zheng\-Jun Zha

**ID:** 152561 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SDhAA8uvvX>) | [PDF](<https://openreview.net/pdf?id=SDhAA8uvvX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152561>)

Most existing Spiking Neural Networks \(SNNs\) are based on \*first\-order\* ordinary differential equations \(ODEs\) to model neuron potential dynamics\. Recently, fractional\-order spiking neural networks \(\*f\*\-SNNs\) extend conventional SNNs by incorporating fractional\-order ODEs, enabling the modeling of long\-range temporal dependencies in neuron potential states\.  However, existing first\-order SNNs and \*f\*\-SNNs are typically restricted to a single derivative order, which limits their capacity to represent heterogeneous temporal dynamics across different time scales\. In this work, we propose Distributed\-Order Fractional Spiking Neural Networks \(\*DF\*\-SNNs\), which generalize single\-order neuron dynamics by integrating multiple fractional orders through learnable distributed weights\.  This formulation enables neurons to accumulate historical information across \*multiple temporal scales\* within a unified framework\. We develop practical numerical implementations based on the Grünwald–Letnikov discretization, allowing efficient training of \*DF\*\-SNNs within standard SNN architectures\.  We show that the proposed distributed\-order formulation induces intrinsic multi\-scale temporal memory, providing a richer class of temporal representations compared to single\-order fractional dynamics\. Extensive experiments demonstrate consistent performance gains of \*DF\*\-SNNs over conventional SNNs and single\-order \*f\*\-SNNs\.

## Decoupled Optimization for Teacher\-Student Semi\-Supervised Learning via a Pioneer Student

**Authors:** Haorong Han; Jidong Yuan; Chixuan Wei; Yongqi Sun

**ID:** 149914 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mFnnOgbOQs>) | [PDF](<https://openreview.net/pdf?id=mFnnOgbOQs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149914>)

Semi\-supervised learning \(SSL\) relies on two core mechanisms: self\-training under the Teacher\-Student \(T\-S\) framework and joint optimization of labeled and unlabeled losses\. Despite their effectiveness, we find both mechanisms introduce distinct optimization pathologies\. First, parameter coupling enforces strict synchronization between teacher and student, where strong regularization on the student degrades the teacher's fitting ability, thereby limiting the permissible generalization intensity\. Second, the imbalance in gradient update consistency between labeled and unlabeled losses drives the shared parameters to prematurely converge to labeled\-dominated local minima, creating a bottleneck for global optimization\. To address both issues, we propose the Pioneer Student \(PiS\), an auxiliary branch that operates in an independent parameter space and periodically transfers accumulated knowledge back to the T\-S model\. Extensive experiments show that PiS is a universal plug\-and\-play module that consistently improves mainstream SSL methods\.

## Holistic Scaling Laws for Optimal Mixture\-of\-Experts Architecture Optimization

**Authors:** Weilin Wan; Jingtao Han; Debing Zhang; Weizhong Zhang; Cheng Jin

**ID:** 154893 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A8xK024UOt>) | [PDF](<https://openreview.net/pdf?id=A8xK024UOt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154893>)

Scaling laws govern macroscopic resource allocation for LLMs, yet precise architectural configurations for Mixture\-of\-Experts \(MoE\) models remain guided by heuristics\. Existing MoE scaling studies either incorporate MoE\-specific variables into scaling formulas, causing fitted coefficients to grow rapidly without proportional experimental support, or fix all non\-MoE factors, implicitly assuming global architecture does not influence local MoE scaling\. We propose a reusable framework for holistic MoE architectural optimization\. We first reveal that relying solely on FLOPs per token \($M$\) biases MoE evaluation, as heterogeneous Attention/FFN computational densities enable parameter inflation without effective compute gains\. We therefore establish a joint constraint triad of $M$, active parameters \($N\_a$\), and total parameters \($N$\) for rigorous MoE characterization\. To tame the resulting $\\mathcal\{O\}\(n^\{16\}\)$ search space, we employ mathematical decoupling: structural constraints and a rank\-preserving property of the hidden dimension factorize the optimization into an $\\mathcal\{O\}\(n^3\) \+ \\mathcal\{O\}\(n^2\)$ two\-phase search\. Through extensive validation across 670\+ MoE models spanning $10^\{18\}$ to $3 \\times 10^\{20\}$ FLOPs, we derive globally applicable scaling laws mapping any compute budget to its optimal architecture\. A key finding is that the near\-optimal configuration band widens with scale, providing a quantitative basis for trade\-offs between scaling law recommendations and engineering constraints\. Our work delivers actionable blueprints for optimal MoE design under arbitrary compute budgets\.

## HOPSE: Scalable Higher\-Order Positional and Structural Encoder for Combinatorial Representations

**Authors:** Guillermo Bernárdez; Marco Montagna; Louis Van Langendonck; Martin Carrasco; Amirreza Akbari; Louisa Cornelis; Mathilde Papillon; Pere Barlet\-Ros; Nina Miolane; Lev Telyatnikov

**ID:** 155494 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5B4SMDYGLq>) | [PDF](<https://openreview.net/pdf?id=5B4SMDYGLq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155494>)

While Graph Neural Networks \(GNNs\) have proven highly effective at modeling relational data, pairwise connections cannot fully capture multi\-way relationships naturally present in complex real\-world systems\. In response to this, Topological Deep Learning \(TDL\) leverages more general combinatorial representations\-\-such as simplicial or cellular complexes\-\-to accommodate higher\-order interactions\. Existing TDL methods often extend GNNs through Higher\-Order Message Passing \(HOMP\), but face critical scalability challenges due to the steep complexity overhead of propagating messages through combinatorial structures\. To overcome this limitation, we propose HOPSE \(Higher\-Order Positional and Structural Encoder\), a framework \\emph\{free of message passing layers\} that uses Hasse graph decompositions to derive efficient and expressive encodings over \\emph\{arbitrary higher\-order domains\}\. Notably, HOPSE scales linearly with the size of combinatorial representations while preserving the expressive power and permutation equivariance of the HOMP approaches\. Experiments on molecular and topological benchmarks show that it matches or surpasses state\-of\-the\-art performance while consistently achieving speedups over HOMP\-based models, opening a new path for scalable TDL\. The code is available at https://anonymous\.4open\.science/r/TopoBench\-BF89\.

## Symmetry\-Guaranteed Prediction of High\-Order Tensor Properties for Crystalline Materials via Irreducible Decomposition

**Authors:** Qiaolin Lu; Qiang Qu; Hao Jiang; Aoni Xu; Fengwang Li; Bo Han; Tongliang Liu; Yi Chang; Chengqi Zhang

**ID:** 155311 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6XMKkwiYyK>) | [PDF](<https://openreview.net/pdf?id=6XMKkwiYyK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155311>)

Predicting high\-order tensor properties for crystalline materials is crucial for various scientific and engineering applications\. Crystal symmetry is one of the primary factors influencing high\-order tensor properties, such as elasticity and piezoelectricity, making strict adherence to symmetry constraints essential\. However, exactly guaranteeing symmetry compliance remains challenging\. Recent approaches rely on enforcing symmetry but often fail to strictly preserve symmetry\. In this work, we propose a novel method that guarantees exact symmetry compliance by predicting symmetry\-constrained irreducible components of high\-order tensors\. Specifically, we first develop a computational procedure to identify the basis tensors corresponding to symmetry\-constrained irreducible components under various symmetry conditions\. This symmetry\-constrained basis guarantees that the assembled full tensor strictly adheres to the required symmetry constraints\. To predict the numerical values for these irreducible components, we then propose a spherical\-harmonic convolutional neural network designed to effectively capture essential high\-order tensor information\. Extensive experiments validate that our method achieves exact symmetry compliance without compromising prediction accuracy, thereby outperforming state\-of\-the\-art approaches\.

## Reliable Chain\-of\-Thought via Prefix Consistency

**Authors:** Naoto Iwase; Yuki Ichihara; Mohammad Atif Quamar; Junpei Komiyama

**ID:** 154913 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9zfyYpgXhy>) | [PDF](<https://openreview.net/pdf?id=9zfyYpgXhy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154913>)

Large Language Models often improve accuracy on reasoning tasks by sampling multiple Chain\-of\-Thought \(CoT\) traces and aggregating them with majority voting \(MV\), a test\-time technique called self\-consistency\. When we truncate a CoT partway through and regenerate the remainder, we observe that traces with correct answers reproduce their original answer more often than traces with wrong answers\. We use this difference as a reliability signal, \*\*prefix consistency\*\*, that weights each candidate answer by how often it reappears under regeneration\. It requires no access to token log\-probabilities or self\-rating prompts\. Across five reasoning models and four math and science benchmarks, prefix consistency is the best correctness predictor in most settings, and reweighting votes by it reaches Standard MV plateau accuracy at up to $21\\times$ fewer tokens \(median $4\.6\\times$\)\.

## Iterative ILP with Update\-Size Control for Reducing Surrogate\-Task Mismatch in Bit\-Width Selection

**Authors:** Shinya Gongyo; Ryosuke Ogasawara; Tatsuya Moe; Masafumi Mori; Yusuke Sekikawa; Mitsuru Ambai

**ID:** 151893 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=X9Qr7zejV9>) | [PDF](<https://openreview.net/pdf?id=X9Qr7zejV9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151893>)

Mixed\-precision quantization improves the accuracy\-efficiency trade\-off by assigning different bit\-widths across a network\. Since bit\-width selection is a combinatorial problem, existing methods often optimize additive surrogate losses instead of directly evaluating task losses in all configurations\. We show that these surrogates can suffer from surrogate\-task mismatch, especially when many layers are changed simultaneously from a reference configuration\. We further observe that, although allowing more layers to change improves the surrogate objective, the evaluated task loss can be minimized at an intermediate limit on the number of changed layers\. Based on this observation, we propose Iterative Integer Linear Programming \(I2LP\), which iteratively refines a reference bit configuration\. At each refinement step, I2LP solves multiple ILPs with different limits on how many layers may change from the current reference, and accepts the best candidate only when it reduces the task loss\. I2LP applies to both post\-training quantization and quantization\-aware training, and consistently outperforms uniform\-precision baselines and existing mixed\-precision methods\. Code will be released\.

## Exact Channel Decoupling via Joint Diagonalization and Uniform Splicing for Diffusion Transformer Quantization

**Authors:** Bingyao Yu; yijin liu; Qinkai XU; Li Li; Yuxiang Fu

**ID:** 149899 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mO4pYQLElU>) | [PDF](<https://openreview.net/pdf?id=mO4pYQLElU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149899>)

Diffusion Transformers \(DiTs\) have emerged as the state\-of\-the\-art architecture in high\-fidelity generative modeling, but their massive computational demands and multi\-step inference process limit their deployment in practical scenarios\. Post\-training quantization \(PTQ\) offers a promising solution for accelerating inference, but DiTs suffer from severe activation outlier issues, which can lead to catastrophic accuracy loss in integer formats\. Although some recent outlier mitigation methods employ orthogonal transformations or diagonal scaling to smooth the activation distribution, they either solve the transformation matrix solely for activations or fail to fully balance the inter\-channel variance between activations and weights\. Additionally, the construction of the calibration set by taking the weighted average of the activation values for each time step introduces spurious temporal correlations\. To address these issues, we propose a joint diagonalization of the activation\-weight covariance matrix based on the solution of a generalized eigenvalue problem \(GEVP\)\. We also transform the feature fusion of the calibration set's temporal dimension into probabilistic sampling and assembly in the spatial dimension using Uniform Token Splicing \(UTS\)\. Specifically, compared to suboptimal baseline methods, our approach reduces the FID by 16\.06 and 6\.49 on both the W3A4\-quantized DiT\-XL/2 and PixArt\-$\\Sigma$ models, respectively\. This demonstrates that our method successfully suppresses outliers in activations and weights, maintaining DiT's performance under low\-bit quantization conditions\. Code is available at the anonymous repository \\url\{https://anonymous\.4open\.science/r/JDUS\-DiT\-74E1\}\.

## ZNO: Stable Rational Neural Operators in the Z\-Domain for Discrete\-Time Dynamics

**Authors:** Xianli Zhu; Jia Yin

**ID:** 155054 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8nSlUg4WxW>) | [PDF](<https://openreview.net/pdf?id=8nSlUg4WxW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155054>)

We introduce the Z\-Domain Neural Operator \(ZNO\), a causal neural operator whose layers are stable low\-rank multiple\-input multiple\-output \(MIMO\) rational filters parameterized directly in the $z$\-plane\. This operator is designed to address a critical limitation of existing operator learning methods, as most of these methods are primarily tailored for continuous\-time problems, while a large class of system\-identification problems is intrinsically discrete\-time\. The $z$\-domain form expresses stability as a unit\-disk pole constraint and makes learned discrete\-time poles directly readable\. The model combines low\-rank channel mixing, smooth stable pole reparameterization, causal recurrence, and an optional short finite impulse response \(FIR\) branch in a single $z$\-domain rational recurrent layer\. Across controlled discrete system\-identification experiments, ZNO's advantage is most evident when the target dynamics are stable rational systems with lightly damped poles near the unit circle\. Under matched parameter budgets, ZNO is not uniformly dominant; however, with validation\-selected configurations, the same architecture can achieve the lowest mean error across the controlled tasks\. A five\-bin difficulty sweep over near\-unit\-circle / long\-memory dynamics further shows that ZNO has the lowest mean error across all memory regimes, from short \($\\approx 10$ steps\) to long  \($\\approx 100\-200$ steps\)\. On five public nonlinear system\-identification benchmarks, ZNO is competitive with neural operator and state\-space baselines, achieving the lowest mean error on benchmarks whose dynamics align with stable rational discrete\-time filters, while classical or state\-space baselines remain preferable on some systems\. These results position ZNO as a strong model for stable rational discrete\-time dynamics, especially in near\-unit\-circle and long\-memory regimes, but not as a universal replacement for specialized system\-identification methods\.

## Reasoning via Test\-Time Instance\-Level Policy Gradient in Latent Space

**Authors:** Hengli Li; Chenxi Li; Tong Wu; Xuekai Zhu; Yuxuan Wang; Zhaoxin Yu; Eric Hanchen Jiang; Song\-Chun Zhu; Zixia Jia; Ying Nian Wu; Zilong Zheng

**ID:** 154790 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AxAnHnDri3>) | [PDF](<https://openreview.net/pdf?id=AxAnHnDri3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154790>)

Large Language Models \(LLMs\) typically reason through explicit, step\-by\-step natural\-language traces\. Humans, however, also rely on non\-linguistic, unconscious processes, such as the inspirations that emerge during the incubation period\. In this work, we introduce LatentSeek, a novel framework designed to enhance the reasoning capabilities of LLMs through Test\-Time Instance\-level Policy Gradient within the model’s latent space—thus complementing explicit natural\-language steps\. LatentSeek employs policy gradient optimization to iteratively refine latent representations, guided solely by a self\-generated reward signal\. This allows the model to adapt its reasoning trajectory dynamically on a per\-instance basis\. Empirical evaluations across diverse benchmarks, GSM8K, MATH\-500, and AIME2024 as well as multiple LLM families \(e\.g\., LLaMA, Qwen\) demonstrate that LatentSeek outperforms established baselines, including Chain\-of\-Thought \(CoT\), Best\-of\-N \(BoN\) and training\-based methods\. Further analysis indicates that LatentSeek is computationally efficient, typically converging within a few optimization iterations for average\-level problems\. Moreover, the model's performance improves as the number of latent update iterations increases, highlighting the benefits of exploring within the latent space\. These findings highlight LatentSeek as a lightweight and effective paradigm for improving the reasoning capabilities of LLMs without changing their parameters\.

## Machine Unlearning in Low\-Dimensional Feature Subspace

**Authors:** Kun Fang; Qinghua Tao; Junxu Liu; Yaxin Xiao; Yulin Jin; Qingqing Ye; Jian Sun; Haibo Hu

**ID:** 150810 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fCiHjHZcqh>) | [PDF](<https://openreview.net/pdf?id=fCiHjHZcqh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150810>)

Machine Unlearning \(MU\) aims at removing the influence of specific data from a pretrained model while preserving  performance on the remaining data\. In this work, a novel perspective for MU is presented upon low\-dimensional feature subspaces, which gives rise to the potentials of separating the remaining and forgetting data herein\. This separability motivates our LOFT, a method that proceeds unlearning in a LOw\-dimensional FeaTure subspace from the pretrained model through principal projections, which are optimized to maximally capture the information of the remaining data and meanwhile diminish that of the forgetting data\.  During unlearning, LOFT simply optimizes a small\-size projection matrix flexibly plugged into the pretrained model, and only requires one\-shot feature fetching from the pretrained model\. LOFT demonstrates that competitive and efficient MU can be achieved in low\-dimensional feature subspaces even with neither repeated raw\-data access nor updates to the entire pretrained model\. Extensive experiments validate the significantly lower computational overhead and superior unlearning performance of LOFT across diverse models, datasets, tasks, and applications\.  Code is anonymously available at https://anonymous\.4open\.science/r/4352/\.

## Compositional Generalization Certificates via the Van Kampen Theorem

**Authors:** Karen Sargsyan

**ID:** 152239 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UXne8kTqvm>) | [PDF](<https://openreview.net/pdf?id=UXne8kTqvm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152239>)

A neural network trained on the multiplication table of the quaternion group Q₈ can achieve perfect accuracy within each cyclic subgroup ⟨i⟩ and ⟨j⟩, predict every cross\-region product wrong, and stay there indefinitely\. This is the grokking plateau, and we prove its height is exactly 4 in dimension d=2, determined by the topology of the overlap before any training\. The mechanism is a homotopy pullback: for G = A ∗\_C B with finite overlap, the representation space of G is a homotopy pullback of those of A and B over that of C, so locally accurate modules need only agree up to a basis change\. From this we derive a stratified generalization certificate whose strata are the connected components of Hom\(C, U\(d\)\): in the correct stratum, with locally accurate modules, the cross\-region prediction is O\(ε\)\-close to the target; in the wrong stratum it is provably far regardless of local accuracy, with exact gap c = 2\(d − rₘₐₓ\) for central cyclic overlap\. The plateau is therefore the time the network spends in the wrong stratum, the grokking transition is the discrete jump between strata, and the framework predicts which task families exhibit such plateaus—those whose overlap representation space is disconnected—and which do not\.

## Frequency\-Structured Hamiltonian Neural Network for Multi\-Timescale Dynamics

**Authors:** Yaojun Li; Yulong Yang; Christine Allen\-Blanchette

**ID:** 149155 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sRJQgUFr36>) | [PDF](<https://openreview.net/pdf?id=sRJQgUFr36>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149155>)

Hamiltonian Neural Networks and related structure\-preserving dynamics models encode conservation laws, but their scalar Hamiltonian parameterizations inherit the spectral bias of deep networks, limiting their ability to learn stiff multi\-timescale systems with coupled fast and slow dynamics\. We introduce the Frequency\-Structured Hamiltonian Neural Network \(FS\-HNN\), which decomposes the system Hamiltonian into learned components trained on frequency\-filtered views of observed trajectories, then recombines them into a single scalar Hamiltonian so that the learned ODE dynamics remain Hamiltonian by construction\. For PDEs with unknown or problem\-dependent structure, FS\-HNN represents Hamiltonians as neural functionals, learns the action of the dynamics operator, and uses projection to enforce conservative structure when appropriate\. Across ODE and PDE benchmarks, including the Fermi\-\-Pasta\-\-Ulam\-\-Tsingou chain, shallow water equations, and incompressible Taylor\-\-Green vortex, FS\-HNN achieves improved long\-horizon rollout accuracy and more accurate energy behavior than existing structure\-preserving baselines\.

## Benchmarks Design under Data Scarcity: From Coarse Labels to Diagnostic Evaluation of Biosynthetic Gene Cluster Models

**Authors:** Hanlin Xiao; Eriko Takano; Mauricio A Álvarez; Rainer Breitling

**ID:** 139840 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1LC6RSpF09>) | [PDF](<https://openreview.net/pdf?id=1LC6RSpF09>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139840>)

Biosynthetic gene clusters \(BGCs\) are co\-located genes that encode the biosynthesis of secondary metabolites, a major source of clinically used antibiotics and anticancer agents\. Recent advances in deep learning, particularly self\-supervised foundation models, have spurred growing interest in BGC sequence modeling, but evaluation infrastructure has lagged behind\. Current practice often relies on coarse classification accuracy over small, experimentally curated datasets, making it difficult to discriminate model capabilities or assess downstream utility\. We introduce BGC\-Bench, an evaluation suite designed to resolve this limitation by systematically incorporating biochemical knowledge in the benchmark design\. In terms of generalization, we test whether representations transfer to genetically and chemically novel samples; for functionality, we examine application\-relevant tasks, including retrieval, prediction, and active learning\. BGC\-Bench reveals that no single model class dominates: pretrained foundation models perform strongly under out\-of\-domain generalization but remain sensitive to training conditions; compositional baselines are competitive and lead in cross\-modal retrieval; and active\-learning gains vary substantially across tasks, strategies, and model families\. Beyond these BGC\-specific findings, BGC\-Bench highlights a broader principle: domain\-informed benchmark design over existing datasets enables better evaluation in data\-scarce scientific domains\.

## Layer Precision Reduction for Deep Anomaly Detection

**Authors:** jiawei Yang; Xu Tan; Matti Kaisti

**ID:** 156082 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0Ygs7obN42>) | [PDF](<https://openreview.net/pdf?id=0Ygs7obN42>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156082>)

Autoencoders \(AEs\) are widely used in unsupervised anomaly detection \(AD\) due to their ability to model complex data distributions\. However, their strong reconstruction capacity, while effective for capturing normal patterns, often enables them to also reconstruct anomalous objects, including both individual and collective anomalies, which reduces detection performance\. This limitation is particularly severe for collective anomalies, which are frequently misinterpreted as normal clusters\. To address this issue, we propose Layer Precision Reduction \(LPR\), a novel technique that systematically constrains the numerical precision of weights and biases in neural network layers to strategically reduce the learning capacity of neural networks, such as the reconstruction capacity of AEs\. LPR encourages the network to prioritize dominant manifold structures while suppressing the reconstruction of rare or anomalous patterns\. While LPR was primarily developed for AE\-based detectors \(the focus of this paper\), it is applicable to any neural network\. Simulations are conducted with 24 AD models across 30 real\-world public datasets\. LPR is applied to 10 deep AD models, including 5 unsupervised AE\-based methods, 2 unsupervised non\-AE\-based methods, 1 semi\-supervised method, 1 weakly supervised method, and 1 fully supervised method\. LPR consistently improves all 10 models, most notably enhancing the best\-performing unsupervised AE\-based detector from an average AUROC of 72\.12\\% to 83\.06\\%, surpassing the strongest unsupervised non\-AE\-based competitor, which achieves an average AUROC of 77\.36\\%, across the remaining 14 detectors\. These results reveal a previously unexplored link between layer\-level numerical precision and manifold pattern prioritization, demonstrating that LPR serves as a simple yet powerful mechanism for enhancing AD performance while offering broad applicability to diverse neural architectures and potential extensions to tasks beyond AD\.

## kVNN: Learnable Volterra Network Kernels

**Authors:** Haoyu Yun; Hamid Krim; Yufang Bao

**ID:** 154695 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BhKsvAYJDV>) | [PDF](<https://openreview.net/pdf?id=BhKsvAYJDV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154695>)

Higher\-order learning exploits compositional features whose predictive value arises from nonlinear interactions beyond pairwise relations among variables, scales, or modalities\. To address the complexity of modeling higher\-order interactions in modern large\-scale deep learning models, a kernelized Volterra Neural Network \(kVNN\) is proposed in this paper\. Specifically, the proposed learnable multi\-kernel representation models different interaction orders using distinct polynomial\-kernel components with compact learnable centers, thereby yielding an order\-adaptive parameterization\. The resulting kVNN layers are composed of parallel order\-specific branches and can readily replace standard convolutional kernels in existing learning architectures\. Theoretical results are supported by experiments on video action recognition, image denoising, and image classification\. The results show marked performance\-efficiency trade\-offs: kVNN consistently reduces model \(parameters\) and computational \(GFLOPs\) complexity while achieving competitive and often improved performance, even when trained from scratch without large\-scale pretraining\. In summary, structured kernelized higher\-order layers offer a practical path to balancing expressivity and computational cost in modern deep networks\.

## Generalized Influence Functions for Better Model Change Estimates

**Authors:** Hyeonsu Lyu; Jonggyu Jang; Sehyun Ryu; Hyun Jong Yang

**ID:** 149236 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ruWxVzBmD7>) | [PDF](<https://openreview.net/pdf?id=ruWxVzBmD7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149236>)

Influence functions \(IFs\) approximate the effect of removing or reweighting training data on a trained model, but their linear approximation often lacks the accuracy required for reliable post hoc model editing\. We identify two culprits and propose generalized influence functions \(GIFs\) and pseudo\-LiSSA \(p\-LiSSA\) to address each in turn\. First, classical IFs update all parameters indiscriminately, leading to unnecessary updates to data\-irrelevant parameters\. GIFs instead restrict edits to a \\textit\{data\-relevant subspace\} and leave the remaining parameters fixed\. We theoretically show that GIFs achieve a tighter error bound than classical IFs, and that proper subspace selection requires avoiding low\-curvature directions while maintaining strong alignment with the target gradient\. Second, LiSSA iterations are destabilized by negative Hessian eigenvalues, which existing methods handle via $\\ell\_2$ damping\-\-\-at the cost of a biased inverse\-Hessian\-vector product \(iHVP\) estimate\. p\-LiSSA eliminates this bias by solving the \\textit\{restricted inverse\-Hessian problem\} without such damping\. We further show that the presence of low\-curvature directions slows p\-LiSSA convergence, and that the data\-relevant subspace selected by GIFs mitigates this\. Across five image and text unlearning benchmarks, GIFs update only 10% of the parameters yet preserve accuracy up to 2\.12 percentage points better than IF\-based baselines, while improving unlearning performance by up to 2\.73 percentage points\. Moreover, p\-LiSSA improves restricted iHVP estimation by reducing the residual by 9\.6$\\times$ over existing iHVP baselines, while using 19\.8% less memory with comparable computation time\.

## Unified Resource\-Grounded Coordination Protocol for Orchestrator\-Free Heterogeneous Multi\-Agent Systems

**Authors:** Vishal Pramanik; Maisha Maliha; Olivera Kotevska; Arvind Ramanathan; Nathaniel D Bastian; Susmit Jha; Sumit Kumar Jha

**ID:** 148666 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w2x7C7peAm>) | [PDF](<https://openreview.net/pdf?id=w2x7C7peAm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148666>)

Multi\-agent language\-model systems typically rely on a human designer or external orchestrator to fix the agent population, roles, and workflow—a single point of failure that places coordination decisions outside the team executing them\. Existing approaches address fragments of this problem: communication standards lack coordination logic, automated workflow\-search systems concentrate authority in a single planner, and decentralized peers lack explicit governance, handoff validation, and bounded repair\. To close this gap, we introduce the Unified Resource\-Grounded Coordination Protocol \(URCP\), an orchestrator\-free protocol in which a fixed pool of black\-box models and executable resources collectively decides task framing, role formation, workflow topology, assignment, checkpoint validation, and final completion through supermajority voting under a single decision rule Φq\. A five\-level repair hierarchy reopens only the affected part of the workflow on failure; under standard timing and communication assumptions, every run terminates with an explicit verdict\. Empirically, with twelve heterogeneous models against eight baselines on MultiAgentBench, τ\-bench, MemoryAgentBench, GAIA, and REALM\-Bench, URCP exceeds the strongest baseline by \+9\.7 / \+7\.9 / \+10\.6 points on the three primary benchmarks, terminates deadlock\-free in 100% of runs, and remains stable up to 20% agent failure\. Trace analyses show that the gains come from voted role concentration on frontier models \(73\.9% of critical\-path roles\), frequent critic/verifier insertion \(63\.5% of accepted schemas with at least three roles\), and bounded repair rather than from model strength alone\.

## FLoRA\-Chef: Making A Good LoRA Recipe in Federated Generalization

**Authors:** Wenwen He; Wenke Huang; Yiyan Qi; He Li; Ming Hu; Yi Liu; Guansong Pang

**ID:** 149413 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qDbRHtLtST>) | [PDF](<https://openreview.net/pdf?id=qDbRHtLtST>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149413>)

Low\-Rank Adaptation \(LoRA\) is a popular parameter\-efficient fine\-tuning \(PEFT\) method that adapts the large model with few trainable parameters\. Federated LoRA extends LoRA to federated learning \(FL\), enabling clients to collaboratively fine\-tune a shared model without sharing their raw data by exchanging LoRA parameters\. However, due to distributed data heterogeneity, local LoRA updates are highly inconsistent across clients, hindering robust global generalization\. Moreover, common direct aggregation introduces aggregated bias, yielding noisy updates and further harming the global generalization\. Existing bias\-mitigation approaches often rely on symmetrically alternating LoRA modules, overlooking matrix distinct characteristics during training\. Therefore, we propose FLoRA\-Chef, an asymmetric Federated LoRA that decides when and how to aggregate LoRA components\. FLFire adaptively selects the next aggregation target by tracking cross\-clientupdate dispersion\. FLSauce applies matrix\-distinct reweighting to control diversity and prioritize stability\. Experiments on various scenarios demonstrate consistent improvements, yielding an average gain of 6\.94% over counterparts, validating the benefit of adaptive asymmetric aggregation for federated LoRA\.

## LAPLEX: The FFT of Learnable Laplace Kernels

**Authors:** Łukasz Struski; Hanna Blazhko; Piotr Kubaty; Jacek Tabor

**ID:** 155528 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4uOz0q125G>) | [PDF](<https://openreview.net/pdf?id=4uOz0q125G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155528>)

Fast linear algebra in deep learning usually comes with a choice: fixed geometry and exact computation, as in the Fourier transform, or adaptive geometry paid for by dense parameters, random features, or low\-rank surrogates\. To move beyond this trade\-off, we introduce LAPLEX, a class of exact, trainable \(phased\) Laplace\-kernel operators\.  A LAPLEX layer is a typically full\-rank dense matrix, implicitly defined by learnable coordinate anchors, with FFT\-like scaling\. Consequently, it supports trainable matrix\-\-vector operations at vector dimensions up to $10^9$ on modern GPUs\. As a neural layer, it yields compact projections and classification heads interpretable as soft, trainable routing models\. The same primitive also serves as an efficient Gram operator, enabling high\-dimensional covariance models on flattened images of dimension $3 \\cdot 10^6$ that preserve visible spatial structure without imposing convolutional bias\.  These applications reflect a single principle: dense geometry can be learned without storing a dense matrix, which enables data\-adaptive global interactions in regimes where ordinary dense layers are out of reach\. In this sense, LAPLEX separates expressivity from storage cost: it behaves like a dense trainable matrix, but is represented and applied through a small structured set of parameters\.

## Agentic Neural Architecture Search

**Authors:** Seokhoon Jeong; Mijung Kim; Taehwan Kim

**ID:** 154949 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9iUcWC2bXP>) | [PDF](<https://openreview.net/pdf?id=9iUcWC2bXP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154949>)

Neural architecture search \(NAS\) methods have grown increasingly efficient, yet they remain bounded by manually engineered search spaces that require substantial domain expertise and must be rebuilt for every new task\. Large language models \(LLMs\) can generate architectures in an open\-ended space, but how to optimally divide labor between LLM\-driven design and NAS\-driven search remains unexplored\. We propose a mechanism that bridges these two paradigms: an LLM produces a high\-quality seed architecture, then decomposes it into a \*slotted architecture\*\-\-\-a scaffold with named, interchangeable module slots that automatically defines a bounded, task\-specific search space for conventional NAS to explore, without manual engineering\. We instantiate this mechanism in \*\*AgentNAS\*\*, a modular three\-phase pipeline in which each component's contribution can be measured independently\. On 17 tasks spanning classification, dense regression, segmentation, and multi\-label tagging across diverse modalities \(NAS\-Bench\-360 and NAS\-Unseen\), AgentNAS establishes a new state of the art on 11 tasks, outperforming published baselines including task\-specific expert designs\. Ablation studies show that the two search mechanisms are broadly complementary: the LLM\-generated seed already surpasses published baselines on the majority of tasks, and NAS delivers additional gains in most cases through combinatorial recombination across slots\-\-\-a mode of search that independent LLM samples cannot replicate\. These patterns hold across three LLMs of different capability levels, confirming that the division of labor is robust\.

## Catch Your Breath: Adaptive Computation for Self\-Paced Sequence Production

**Authors:** Alexandre Galashov; Matt Jones; Nan Rosemary Ke; Yuan Cao; Vaishnavh Nagarajan; Michael Mozer

**ID:** 152630 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RfZGk8kzTr>) | [PDF](<https://openreview.net/pdf?id=RfZGk8kzTr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152630>)

Within the landscape of inference\-time scaling methods for foundation models, a \_width\-based\_ approach to scaling—which involves the insertion of \\ tokens in the input stream to delay model responses—offers a unique advantage by increasing model expressivity while remaining highly parallelizable at both training and inference\. The existing literature on training models to utilize \\ tokens relies on the standard cross\-entropy objective in which the model output is read out and evaluated only at the final step of a pause sequence\. This approach provides no mechanism for the model to regulate its own processing or to signal readiness to respond, treating the additional compute steps as a static barrier rather than a resource to be used adaptively\. We propose a supervised loss, \_Catch Your Breath\_ \(\_CYB\_\), framed as a sequential\-decision problem, that trains a model to dynamically and autonomously scale the number of compute steps used for each input token\. The model indicates the need for additional compute steps by emitting a special \\ output, delaying its response via a \\\. The model can abstain multiple times to obtain longer delays\. Our experiments demonstrate that CYB significantly outperforms standard cross\-entropy when introduced either in pretraining or fine\-tuning, reducing perplexity and enhancing downstream accuracy with no additional computational or memory cost\.

## Sharper Regret Bounds for Shampoo

**Authors:** Dahngoon Kim; Min\-hwan Oh

**ID:** 154707 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Bd7r0wAbrw>) | [PDF](<https://openreview.net/pdf?id=Bd7r0wAbrw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154707>)

Shampoo is a Kronecker\-structured second\-order optimizer widely used for large\-scale deep learning, yet existing regret analyses exhibit an unfavorable dependence on the gradient rank, leading to guarantees that are uniformly weaker than those of optimizers such as Adagrad  and One\-sided Shampoo\. We provide a uniformly and substantially sharper regret bound for the full two\-sided Shampoo update, yielding bounds that can compete with full\-matrix Adagrad and more recent structured variants such as One\-sided Shampoo\. By further analysis, we also establish the first sublinear convergence guarantee for the commonly implemented variant Shampoo$^2$ by introducing a principled scaling factor\. Our analysis holds for a continuum of exponent choices $p \\in \(0, \\frac\{1\}\{2\}\]$, also providing the first sublinear guarantees for Shampoo$^\{4p\}$ with exponents other than $p=1/4$\.

## On the Importance of Gating: Memorization vs\. In\-Context Learning in State Space Models

**Authors:** William Tong; Aryo Lotfi; Emmanuel Abbe; Konstantinos Vaggelakos; Vishnu Banna; Etai Littwin; Joshua Susskind; Eran Malach

**ID:** 151807 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XsNfjnUeWl>) | [PDF](<https://openreview.net/pdf?id=XsNfjnUeWl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151807>)

State Space Models \(SSMs\) have emerged as a compelling alternative to Transformers, enabling sequence modeling with constant memory and linear compute\. While SSMs excel in certain settings like length generalization, they continue to lag behind Transformers on tasks that require in\-context learning and precise retrieval, slowing their adoption for large\-scale language modeling\. In this work, we demonstrate that both the success and failure of SSMs in these domains can be explained by studying the role of the gating mechanism, a prevalent component in modern recurrent networks\. Specifically, we show through theory and experiments that this gating mechanism causes SSMs to first learn an in\-weights \`\`memorization'' solution, while delaying, or even preventing, convergence to a correct in\-context learning solution\. Importantly, this happens even in cases where there are no fundamental limitations due to the architecture or its memory capacity\. On the other hand, we find that gating is often beneficial for improving generalization to long sequence lengths\. Our results illuminate the crucial role of the gating mechanism in shaping both the training dynamics and generalization of SSMs, and provide a basis for understanding and improving linear\-time models\.

## Does Your Neural Network Extrapolate? Feature Engineering as Identifiability Bias for OOD Generalization

**Authors:** Leonel Aguilar; Jan Nagler; Christoph Hoelscher; Nino Antulov\-Fantulin

**ID:** 155236 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7Df6LrvRJh>) | [PDF](<https://openreview.net/pdf?id=7Df6LrvRJh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155236>)

Successful deep neural networks discover salient features of data\. We show when and why they fail to learn out\-of\-distribution \(OOD\)\-relevant representations from an in\-distribution \(ID\) training window\. This requires decoupling feature learning from data\-generating\-process \(DGP\) identifiability\. From a single training window, OOD extrapolation is non\-identifiable: infinitely many DGPs are $\\varepsilon$\-observationally equivalent on the training data but diverge arbitrarily outside it, and no in\-distribution criterion alone reliably breaks the tie\. A structural commitment, the feature map, label map, and model class $\(\\varphi, \\psi, \\mathcal\{M\}\)$, dictates the assumed DGP and governs OOD generalization while leaving ID performance essentially unchanged\. When architecture, pretraining, augmentation, input formats, or domain knowledge implicitly inject the missing commitment, the model succeeds\. When it cannot infer OOD\-relevant structure from ID evidence, it fails\. Changing only the representation can make the same architecture, at the same in\-distribution loss, differ by $\{\\sim\}520\\times$ out of distribution\. When the commitment is correct \{\\em and\} identifiable, OOD error vanishes\. For example, Fourier coordinates turn periodic extrapolation into interpolation on $\\mathbb\{S\}^1$\. The same mechanism predicts outcomes in three natural\-science settings \(mass\-action chemistry; Kepler's\-third\-law exoplanet prediction, $n=2\{,\}362$; and cross\-species coding\-DNA detection\) and in a 264\-run positional\-encoding study across Transformer, Mamba, and S4D\. Finally, a controlled study shows: correct features are necessary but not sufficient\. The model class must express the target, and the transformed training data must cover the relevant representation space\. Thus, feature engineering is not a departure from what makes deep learning successful\. It is the explicit structural commitment that makes extrapolation identifiable\.

## LongSpike: Fractional Order Spiking State Space Models for Efficient Long Sequence Learning

**Authors:** Xinrui He; Qiyu Kang; Xuhao Li; Zheng\-Jun Zha

**ID:** 150236 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jkIua01azq>) | [PDF](<https://openreview.net/pdf?id=jkIua01azq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150236>)

Spiking Neural Networks \(SNNs\) are well\-regarded for their biological plausibility and energy efficiency in processing sequential data\. However, dominant SNN architectures typically rely on \*first\-order\* Ordinary Differential Equations \(ODEs\) to govern neuronal state transitions\. This first\-order assumption imposes a \`\`memoryless'' bottleneck, limiting the model's capacity to capture the complex, long\-range dependencies inherent in long\-sequence tasks\. In this work, we propose \*\*LongSpike\*\*, a novel SNN framework that integrates fractional\-order State\-Space Modeling \(\*f\*\-SSM\) from control theory into the spiking domain\. By extending traditional integer\-order SSMs to the fractional\-calculus regime, LongSpike enables the hierarchical integration of neuronal dynamics with long\-memory kernels\. To mitigate the computational overhead and parallelization challenges typically associated with fractional operators, we leverage a state\-space formulation that supports efficient, parallel training\. Empirical evaluations on challenging benchmarks, including Long Range Arena \(LRA\), large\-scale WikiText\-103, and Speech Commands, demonstrate that LongSpike outperforms state\-of\-the\-art SNNs in accuracy while preserving sparse synaptic computation\.

## Global Context Guidance for Diffusion Large Language Models

**Authors:** Jeimin Jeon; Bumsub Ham

**ID:** 153438 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LIdk3v52Wt>) | [PDF](<https://openreview.net/pdf?id=LIdk3v52Wt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153438>)

Diffusion large language models \(LLMs\) have recently emerged as a promising alternative to autoregressive LLMs, enabling parallel generation through iterative denoising\. Recent guidance methods improve diffusion LLMs by introducing a weak model to guide the prediction of the base model during denoising\. However, the influence of the weak model during denoising remains less clear, and computing its prediction requires an additional forward pass at each denoising step\. We present in this paper an in\-depth analysis of how diffusion LLMs use contextual information during denoising\. Our analysis reveals that diffusion LLMs rely more heavily on local context while often underutilizing global context\. Based on this observation, we introduce Global Context Guidance \(GCG\), a feature\-space guidance method that enhances global\-context utilization without constructing an explicit weak model\. Extensive experiments on LLaDA\-8B, Dream\-7B, and LLaDA\-1\.5 across diverse benchmarks demonstrate that GCG consistently outperforms existing guidance methods, while incurring much lower inference overhead\. We will release our code upon acceptance\.

## ByteDistill: Cross\-Tokenizer Distillation via Chunk\-wise Byte\-Level Distribution Alignment

**Authors:** Yang Chen; Xianqi Yu; SHAOWEI YAO; Fuyu Lv; Dan Ou; Haihong Tang

**ID:** 149633 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=od5PZv55K2>) | [PDF](<https://openreview.net/pdf?id=od5PZv55K2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149633>)

Token\-level distillation assumes a shared categorical support, an assumption violated when teacher and student tokenizers segment the same text differently\. Existing cross\-tokenizer methods sidestep this mismatch by aligning token spaces, matching likelihoods along tokenizer\-specific paths, or filtering shared spans, all of which can approximate the original distributional objective or discard probability mass\. We argue that decoded UTF\-8 bytes are common observable events shared by every text tokenizer, while token boundaries are tokenizer\-specific latent transitions\. Building on this view, we introduce \\emph\{ByteDistill\}, which compares the conditional distribution of the next observable byte rather than aligning token identities\. Its loss, \\emph\{Byte\-Level Distribution Alignment\} \(BLDA\), projects each native softmax into a 256\-way observable next\-byte distribution inside aligned decoded chunks, marginalizing token\-ending mass as a latent boundary transition along the observed tokenization path\. ByteDistill consistently outperforms supervised fine\-tuning and prior cross\-tokenizer baselines in both off\-policy and on\-policy settings, with off\-policy training improving GSM8K accuracy by $1\.75$ percentage points over the current state of the art\.

## Why Routers Freeze: Infinite Width Learning Dynamics for Mixture of Experts

**Authors:** Anish Dhir; Volkan Cevher; Leena Chennuru Vankadara

**ID:** 152363 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TccaEvFVmc>) | [PDF](<https://openreview.net/pdf?id=TccaEvFVmc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152363>)

Mixture\-of\-Experts \(MoE\) architectures are central to large\-scale deep learning, relying on sparse execution and expert specialisation\. Despite their success, their large\-scale training dynamics remain poorly understood, and training is often unstable\. While scaling limits such as infinite\-width theory have clarified the behavior of dense models, the scaling behavior of MoEs remains largely unexplored\. To this end, we derive the infinite\-width limits of MoE architectures under fixed number of experts with both soft and Top\-$K$ routing, trained with SGD and Adam, using Tensor Programs\.  Our results show that under the Standard Parameterisation \(SP\), router updates freeze after one step of training in both soft and Top\-$K$ routing MoEs\.  This provides, at least in part, a principled explanation for the widespread use of auxiliary losses such as load\-balancing or $z$\-losses in MoE training\. In dense networks, Maximal Update heuristics allow for stable and non\-vanishing feature updates\. However, in MoEs the Maximal Update heuristic with soft\-routing and softmax gating causes the experts to collapse to the same distribution and router gradients to vanish\. While sigmoid allows non\-trivial router evolution, they still fail to prevent expert collapse\. Thus fixed expert soft\-routing MoEs do not admit a parameterisation that simultaneously ensures stability, feature learning, and expert specialisation in the infinite\-width limit\.  We then show that, beyond computational efficiency, Top\-\\\(K\\\) also acts as a symmetry breaking mechanism allowing for both feature learning and specialisation\. We empirically validate these predictions, observing close agreement between finite\-width training dynamics and the predicted scaling behaviour\.

## Beyond FLOPs: Train\-Full, Deploy\-Partial Multi\-Exit Inference via Selective Lightweight IC Ensemble

**Authors:** Bitchan Eom; Eunchan Kim

**ID:** 152802 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QGgoHv7Q3A>) | [PDF](<https://openreview.net/pdf?id=QGgoHv7Q3A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152802>)

Early\-exit networks promise inference savings by terminating computation at intermediate classifiers, but FLOPs\-based gains rarely translate into on\-device latency reduction under static\-graph compilation\. On NVIDIA Jetson Orin Nano, the per\-sample exit policy of Shallow\-Deep Networks \(SDN\) runs approximately 2× slower than vanilla ResNet\-56 and misses the 60 fps deadline despite using only 40% of the FLOPs, because dynamic branching precludes layer fusion\. We propose the Selective Lightweight IC Ensemble Network \(SLIENet\), a train\-full, deploy\-partial framework compiled as a single static FP16 engine\. SLIENet trains the full backbone with light self\-distillation, using the final classifier as a stop\-gradient teacher to preserve error diversity across internal classifiers \(ICs\)\. At deployment, a sub\-second calibration search selects an IC subset for softmax averaging, while overthinking late blocks are truncated at depth k\. On CIFAR\-100 across ResNet\-56, VGG\-16, and MobileNetV1, SLIENet outperforms SDN\-based variants and remains competitive with ZTW\. On Jetson Orin Nano, the recommended SLIE5 configuration improves accuracy by \+2\.46 pp while reducing p50 latency by 14% and energy by 15% over vanilla, with zero deadline misses across 10,000 test samples\. Thus, multi\-exit deployment should be a pre\-compiled deterministic inference plan, not a sample\-wise routing policy\.

## Retrieval\-Centric Deep Learning in Growing Nonparametric Neural Networks

**Authors:** Maximilian Schlegel; Rajai Nasser; Seijin Kobayashi; Yanick Schimpf; Oliver Sieberling; Robert Obryk; Kazuki Irie; João Sacramento; Johannes von Oswald

**ID:** 150000 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lYGqisD7No>) | [PDF](<https://openreview.net/pdf?id=lYGqisD7No>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150000>)

We investigate a general\-purpose layer for deep learning that, instead of compressing arbitrary\-size training data into fixed\-size weight matrices, stores a new pair of key\-value representations for every data point during training, and retrieves and recombines these representations through an attention mechanism at inference time\-\-\-resulting in a growing neural net \(NN\)\. We derive such a "retrieval\-centric deep learning" \(RCDL\) paradigm from the classic duality of a linear layer trained by gradient descent as a type of linear attention \(LA\) over the training data points\-\-\-which motivates us to replace the corresponding LA by a more powerful form of attention from recent work on sequence models, namely, kernelized attention using radial basis function \(RBF\) and softmax\-like kernels, as well as more advanced linear attention variants such as MesaNet and DeltaNet\. We theoretically derive learning algorithms for the growing layers with kernelized attention, and empirically demonstrate their promising performance and sample\-efficiency on classic image classification tasks and synthetic teacher\-student learning datasets\. In the MesaNet/DeltaNet\-inspired extensions, we show a formal connection to a recently proposed optimizer and derive highly sample\-efficient optimizers for conventional fixed\-size NNs\. Despite open challenges, RCDL represents a promising paradigm for nonparametric machine learning\.

## MoEZip: Routing\-Aware KV Cache Compression for Sparse Mixture\-of\-Experts LLMs

**Authors:** Minsang Kim; Seung Baek

**ID:** 152692 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=R8hTibgKBX>) | [PDF](<https://openreview.net/pdf?id=R8hTibgKBX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152692>)

Mixture\-of\-Experts \(MoE\) language models scale model capacity efficiently by activating a small subset of parameters per token\. However, in long\-context inference, memory remains a major bottleneck because the KV cache grows linearly with sequence length\. Existing KV cache compression methods reduce this cost for dense transformers, but overlook a problem specific to MoE: KV eviction can change which experts are selected during answer generation, degrading the generation quality\. We propose MoEZip, a routing\-aware KV cache compression for sparse MoE language models\. To estimate the sensitivity of expert routing to perturbation, we propose a novel metric based on the Fisher information matrix of routing distributions\. MoEZip combines this metric with attention weights for routing\-aware scoring of contexts\. Finally, we compose a complementary scoring system that combines eviction methods for dense and sparse\-MoE architectures\. Experiments show that MoEZip achieves robust performance under aggressive cache compression on various benchmarks\. At a KV retention ratio of 10\\%, MoEZip improves over the SoTA baseline by \+24 and \+20 points on average on LongBench and RULER, corresponding to 2\.3$\\times$ and 4\.9$\\times$ higher scores, respectively\.

## SO\(3\)\-Equivariant Learning on CAD Boundary Representations

**Authors:** Matteo Ballegeer; Dries Benoit

**ID:** 148985 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tf8Fu4Bubx>) | [PDF](<https://openreview.net/pdf?id=tf8Fu4Bubx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148985>)

Boundary representations \(B\-reps\) encode CAD geometry as parametric surface patches with explicit topological adjacency, forming information\-rich geometric graphs\. Yet existing methods encode coordinates and normals as scalars, making models rotation\-sensitive, while invariant alternatives using per\-face local frames discard the shared orientation reference needed to capture inter\-face directional relationships\. We introduce SO3brep, the first $SO\(3\)$\-equivariant neural architecture for B\-rep learning\. Faces are represented by scalar, vector, and tensor irreducible representations constructed in per\-face local frames, lifted to a shared global frame via Wigner $D$\-matrices, and propagated through equivariant message passing\. This preserves inter\-face directional structure during message passing while guaranteeing $SE\(3\)$ invariance at the output\. Across five CAD benchmarks for shape classification and per\-face segmentation, SO3brep consistently outperforms prior B\-rep and equivariant point\-cloud methods while significantly improving data efficiency\. These results demonstrate that $SO\(3\)$\-equivariance is a powerful inductive bias for structured CAD geometry\.

## Self\-Evolution Reasoner: Continuous Optimization via Policy\-Intrinsic Exploration and Exploitation

**Authors:** Wenhang Shi; Yiren Chen; Zhe Zhao; Jinhao Dong; WEI LU; Xiaoyong Du

**ID:** 148772 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vAhTbJQW5J>) | [PDF](<https://openreview.net/pdf?id=vAhTbJQW5J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148772>)

Reinforcement learning with verifiable rewards \(RLVR\) enables large language models \(LLMs\) to continuously self\-improve their reasoning capabilities\. Compared to RLVR's scalar rewards, recent self\-supervised on\-policy distillation methods leverage denser supervision signals\. However, both paradigms suffer from exploration bottlenecks,  struggling to escape local optima when the policy fails to sample valid solutions\. Relying on external demonstrations can bypass this issue; however, the off\-policy nature hinders genuine self\-improvement and the mismatched\-distribution reasoning can not be fully exploited\. In this work, we propose Self\-Evolution Policy Optimization \(SEPO\), a framework that drives continuous reasoning capability evolution via guided exploration and in\-distribution exploitation\. Specifically, SEPO utilizes labels to elicit correct reasoning from the policy, unlocking the exploration potential\. By treating current policy conditioned on this in\-distribution reasoning as a self\-teacher, SEPO distills the newly discovered solution back into the policy\. Through this iterative cycle of policy\-intrinsic exploration and exploitation, SEPO achieves robust and continuous capability evolution\. Across scientific, tool\-use, and complex logical reasoning domains, SEPO consistently achieves the best performance under identical training time or steps, demonstrating superior efficiency and convergence ceilings\. Notably, SEPO maintains stable improvements even in scenarios where baselines severely underperform or fail entirely, such as on complex tasks or with small\-scale models\.

## Offline Materials Optimization with CliqueFlowmer

**Authors:** Jakub Grudzien Kuba; Benjamin K Miller; Sergey Levine; Pieter Abbeel

**ID:** 154137 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FxdSdeIj0j>) | [PDF](<https://openreview.net/pdf?id=FxdSdeIj0j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154137>)

Recent advances in deep learning have inspired neural network\-based approaches to computational materials discovery \(CMD\)\. A plethora of problems in this field involve finding materials that optimize a target property\. Nevertheless, the increasingly popular generative modeling methods are ineffective at boldly exploring attractive regions of the materials space due to their maximum likelihood training\. In this work, we offer an alternative CMD technique based on offline model\-based optimization \(MBO\) that fuses direct optimization of a target material property into generation\. To that end, we introduce a domain\-specific model, CliqueFlowmer, that incorporates recent advances in clique\-based MBO into transformer and flow generation\. We validate this model's optimization abilities and show that materials it produces strongly outperform those from generative baselines\. To support specialized materials discovery applications and broader interdisciplinary research, we will release our code and model weights upon publication\.

## Angular Networks: Low\-Bit Learning from Randomized Similarity Estimators

**Authors:** Ali Ahmed; Saeid Pourmand; Muhammad Awais; Rehan Farooq; Alireza Aghasi

**ID:** 154802 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ArO2Yj6xnL>) | [PDF](<https://openreview.net/pdf?id=ArO2Yj6xnL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154802>)

We propose a new framework for low\-precision neural networks based on angular geometry and randomized low\-bit estimators\. Rather than approximating Euclidean linear operations under limited precision, we reinterpret neural computation in terms of directional similarity and construct quantized random\-feature estimators of cosine interactions\. Our approach introduces \\textit\{Angular Layers\}, which replace standard linear transformations with low\-bit projections that estimate angular similarity in the forward pass, while gradients are computed with respect to the underlying continuous cosine geometry\. This decoupling enables stable optimization without straight\-through estimators or heuristic surrogate gradients, even under aggressive quantization of both weights and activations\. On the theory side, we introduce \\emph\{G\-Gradient\} as a gradient proxy for angular layers and show that, in a one\-layer planted model, a sufficiently small \\emph\{G\}\-gradient can guarantee exact recovery of a target binary solution\. We further prove uniform approximation and convergence guarantees that provide a rigorous path from tractable continuous optimization to exact recovery in the original discrete model\. Empirically, we instantiate these ideas in \\textit\{Angular Nets\}, including low\-precision variants of ResNet, Vision Transformers, and BERT\-style encoders, and obtain strong performance across vision and language tasks at substantially reduced precision\. Overall, our results suggest that preserving angular structure provides a principled foundation for low\-bit deep learning\. Our full implementation is available at:  \\url\{https://github\.com/GGM2026/GGM\}\.

## Is Memorization Actually Necessary for Generalization

**Authors:** Hadi Abdullah

**ID:** 156025 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=14Cuwh2N4C>) | [PDF](<https://openreview.net/pdf?id=14Cuwh2N4C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156025>)

Deep learning models are known for their ability to memorize training data\. While memorization is often linked to risks such as privacy leakage and poor robustness, a highly influential claim by\~\\citet\{feldman2020longtail\} argues that memorization is actually \\textit\{necessary\} for generalization\. Their conclusion is based on the observation that removing points with high memorization scores reduces test accuracy\. Upon closer inspection of their work, we uncover four critical flaws in the underlying methodology: \\textbf\{\(1\) sampling bias\} in their approximation algorithm inflates memorization scores; \\textbf\{\(2\) high false positive rate\} in their definition of memorization, leads to misclassification of non\-memorized points as memorized; \\textbf\{\(3\) unprincipled thresholding\} that resulting in an ill\-posed problem; and \\textbf\{\(4\) data leakage\} skews the test accuracy results\. To address these limitations, we introduce a modifications for correctly identifying and evaluating memorization, including higher sampling rates, modifying the original memorization definition to reduce the false positive rates, proposing a method to identify a principled score threshold, and employing test datasets especially designed to avoid data leakage\. Having accounted for these errors, our results show that, in contradiction to the original work, removing truly memorized points does not cause a drop in accuracy, and in most cases, improves test performance\. These findings call into question the necessity of memorization in deep learning and highlight the importance of mitigating its risks\.

## CoreQ: Learning\-Free Mismatch Correction and Successive Rounding for Quantization

**Authors:** Seohyeon Cha; Huancheng Chen; Dongjun Kim; Haoran Zhang; Kevin Chan; Gustavo De Veciana; Haris Vikalo

**ID:** 155856 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2OSsvaeOHi>) | [PDF](<https://openreview.net/pdf?id=2OSsvaeOHi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155856>)

Post\-training quantization \(PTQ\) enables efficient deployment of large language models by mapping pretrained weights to low\-bit formats without retraining, typically using a small calibration set to minimize a layer\-wise calibration objective\. However, this sequential procedure induces a mismatch: errors from earlier quantized layers alter the inputs received by later layers, causing the activations to deviate from those of the full\-precision model\. Recent approaches introduce mismatch\-aware calibration objectives to compensate for this effect, but leave open how much of the observed mismatch should shift each layer's calibration target\. Fully applying this correction can overfit limited calibration data, while scaling the mismatch correction with a fixed coefficient ignores varying reliability of mismatch estimates across layers\. To address these limitations, we propose CoreQ, a learning\-free PTQ framework that applies a closed\-form coefficient for mismatch correction derived from a geometric decomposition of the mismatch\. The resulting coefficient adapts the correction across layers, reduces overfitting to finite calibration data, and requires no hyperparameter tuning\. Given the corrected target, CoreQ minimizes the induced triangular least\-squares objective with an efficient greedy successive\-rounding solver and a bounded beam\-search extension, K\-CoreQ, that trades modest additional compute for improved performance\. Across multiple LLM families, scales, bit\-widths, and quantization settings, CoreQ improves perplexity and downstream accuracy over strong PTQ baselines\.

## Structuring Open\-Ended NAS: Semi\-Automated Design Knowledge Structuring with LLMs for Efficient Neural Architecture Search

**Authors:** Yuiko Sakuma; Masakazu Yoshimura; Marcel Gröpl; Zitang Sun; Junji Otsuka; Atsushi Irie; Takeshi Ohashi

**ID:** 151464 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aRGcG80o4Z>) | [PDF](<https://openreview.net/pdf?id=aRGcG80o4Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151464>)

Current neural architecture search \(NAS\) methods are often limited by their predefined, restrictive search spaces\. While recent large language model \(LLM\)\-assisted NAS methods enable open\-ended search spaces, they often suffer from inefficient exploration due to biased or low\-quality design ideas\. To address these issues, we propose to semi\-automatically structure model design knowledge to guide the search process\. Our approach first defines a high\-level structural template of architectural attributes\. An LLM then populates this template by analyzing papers, creating a rich and diverse search space that embodies this structured design knowledge\. To efficiently explore this vast space, we introduce FairNAD, using a multi\-type mutation that enables broad exploration through mutation with fair idea sampling, Pareto\-aware mutation, LLM\-driven iterative mutation, and a fine\-grained feedback loop\. We demonstrate the effectiveness of FairNAD in discovering high\-performing architectures that yield 0\.84, 2\.17, and 2\.35 points improvement on CIFAR\-10, CIFAR\-100, and ImageNet16\-120, respectively, compared to current state\-of\-the\-art methods\.

## Fast Reconstruction of Exact Maxwell Dynamics from Sparse Data

**Authors:** Dan DeGenaro; Xin Li; Obed Amo; Michael Pokojovy; Sarah Bargal; Markus Lange\-Hegermann; Bogdan Raita

**ID:** 148197 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zcI6E4WHeK>) | [PDF](<https://openreview.net/pdf?id=zcI6E4WHeK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148197>)

We introduce FLASH\-MAX, a shallow, exact\-by\-construction neural network architecture for predicting homogeneous electromagnetic fields from sparse pointwise observations\. Each hidden neuron represents a separate exact solution to Maxwell's equations, so that the network satisfies the governing equations symbolically by construction and can be trained end\-to\-end from sparse data within seconds\. We prove a universal approximation result showing that this exact model class remains universal on arbitrary domains\. FLASH\-MAX reaches sub\-1% relative validation error from about 1K sparse pointwise observations in seconds, all while maintaining a zero PDE residual, and keeps single digit errors even for only 100 observations sampled from 3D space\. These results suggest that moving governing structure from the loss into the hypothesis class can dramatically improve the trade\-off between precision and optimization speed in scientific machine learning\.

## POP: Online Structural Pruning Enables Efficient Inference of Large Foundation Models

**Authors:** Yi Chen; Wonjin Shin; Shuhong Liu; Tho Mai; Jeongmo Lee; Jun Liu; Chuanbo Hua; Kun Wang; Joo\-Young Kim

**ID:** 154370 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E5kkSzO2hf>) | [PDF](<https://openreview.net/pdf?id=E5kkSzO2hf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154370>)

Large foundation models \(LFMs\) achieve strong performance through scaling, yet current structural pruning methods derive fixed pruning decisions during inference, overlooking sparsity patterns that emerge in autoregressive token generation\. We propose POP \(Partition\-guided Online Pruning\), an efficient online structural pruning framework that enables context\-conditioned dynamic pruning with minimal computational overhead\. POP partitions model channels into retained, candidate, and pruned regions, where prefilling defines a coarse pruning partition, and decoding generates a fine\-grained mask within the candidate region, avoiding full\-channel re\-evaluation\. The coarse pruning partition preserves consistently important weights, while the fine\-grained masking provides context\-conditioned variation during decoding\. Moreover, POP is a lightweight, plug\-and\-play method that requires no preprocessing, including offline calibration, retraining, or learning predictors\. Extensive evaluations across diverse LFMs, including large language models \(LLMs\), mixture\-of\-experts models \(MoEs\), and vision–language models \(VLMs\), demonstrate that POP achieves competitive or superior accuracy over existing pruning approaches, particularly on generation tasks, while incurring minimal computational overhead and maintaining efficient inference\. The source code will be publicly available\.

## Generation\-Drift\-Guided Block Pruning for Large Language Models

**Authors:** ZHIQI HUANG; Heedong Kim; ZHANG LINTONG; Seong\-Whan Lee

**ID:** 152197 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UqSplWfSWJ>) | [PDF](<https://openreview.net/pdf?id=UqSplWfSWJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152197>)

Pruning reduces the model size and inference cost of large language models \(LLMs\), yet preserving performance across diverse downstream tasks remains challenging\. Existing structured pruning methods commonly rely on local discrepancy measures or teacher\-forced predictive criteria, such as Block Influence \(BI\) and perplexity \(PPL\)\. While these methods are effective on classification benchmarks, the resulting pruned models often degrade severely on generative reasoning tasks\. We study redundancy in Transformer\-based models and observe that pruning\-induced generation drift is strongly correlated with the functional importance of modules, suggesting a more faithful criterion for identifying redundant modules\. Based on this insight, we propose GDPruner, a calibration\-free, generation\-drift\-guided block pruning method\. GDPruner constructs lightweight self\-generated probe trajectories, estimates module importance using tail\-position generation drift, and removes redundant modules through adaptive search\. Extensive experiments show that GDPruner surpasses state\-of\-the\-art structured pruning baselines while better preserving overall performance and complex generative reasoning ability, offering a promising direction for generation\-robust LLM deployment\.

## Probabilistic Recursive Reasoning

**Authors:** Junyeob Baek; Mingyu Jo; Minsu Kim; Mengye Ren; Yoshua Bengio; Sungjin Ahn

**ID:** 151067 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dDjsb4dq8O>) | [PDF](<https://openreview.net/pdf?id=dDjsb4dq8O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151067>)

How should future neural reasoning systems implement extended computation? Recursive Reasoning Models \(RRMs\) offer a promising alternative to autoregressive sequence extension by performing iterative latent\-state refinement with shared transition functions\. Yet existing RRMs are largely deterministic, following a single latent trajectory and converging to a single prediction\. We introduce Generative Recursive reAsoning Models \(GRAM\), a framework that turns recursive latent reasoning into probabilistic multi\-trajectory computation\. GRAM models reasoning as a stochastic latent trajectory, enabling multiple hypotheses, alternative solution strategies, and inference\-time scaling through both recursive depth and parallel trajectory sampling\. This yields a latent\-variable generative model supporting conditional reasoning via $p\_\\theta\(y \\mid x\)$ and, with fixed or absent inputs, unconditional generation via $p\_\\theta\(x\)$\. Trained with amortized variational inference, GRAM improves over deterministic recurrent and recursive baselines on structured reasoning and multi\-solution constraint satisfaction tasks, while demonstrating an unconditional generation capability\.

## Small Model Portfolios for Many Deployment Profiles: Submodular Coverage under Bundled Constraints

**Authors:** Ji Cheng

**ID:** 155994 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1JWwZf78Km>) | [PDF](<https://openreview.net/pdf?id=1JWwZf78Km>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155994>)

Deploying deep learning models across heterogeneous hardware requires each model to jointly satisfy a bundle of coupled constraints on accuracy, latency, memory, and energy\. Maintaining a specialist for every deployment scenario is operationally prohibitive, so practitioners need a small portfolio of $K$ models that collectively covers many deployment profiles\. Existing hardware\-aware NAS and Pareto\-based approaches target marginal objectives and do not directly address this downstream decision\. We formalize it as Deployment Portfolio Selection over a fixed pre\-measured archive, where a profile is covered only when a single retained model simultaneously satisfies its entire constraint bundle\. The induced objective is weighted maximum coverage, which is NP\-hard but monotone submodular, so greedy selection inherits a $\(1\-1/e\)$ guarantee, and sample\-then\-optimize admits a finite\-sample bound\. Across an 18\-family sweep on HW\-NAS\-Bench, direct bundled\-coverage optimization is most valuable in the small\-portfolio, low\-coverability regime: gains concentrate on the hardest profiles, are most robust at $K = 3$, and persist under three non\-uniform demand models\. Complementary analyses of remeasurement noise, runtime, and compact feasibility storage clarify when bundled coverage is preferable to scalarized or Pareto\-based alternatives\.

## Incorporating Neural Network Structure in the Bayesian Learning Rule

**Authors:** Eiki Shimizu; Mohammad Emtiyaz Khan; Thomas Möllenhoff

**ID:** 153834 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IMo3RbNPJF>) | [PDF](<https://openreview.net/pdf?id=IMo3RbNPJF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153834>)

We extend the Bayesian learning rule by explicitly incorporating the compositional structure of neural networks\. The central observation is that backpropagation and exponential family variational inference share a common Lagrangian duality structure\. Leveraging this connection, we develop a new Bayesian learning framework in which adjoint variables backpropagate layerwise sensitivity signals that converts into loss\-site natural parameters\. For Gaussian weight posteriors and Gaussian layer\-state projections, the framework recovers deterministic back\-propagation and Hessian backpropagation via delta\-method approximations, while providing a unified perspective on localization\-style prediction rules and moment matching methods\.  We also derive a new variant of IVON, clarify how its gradient and Hessian estimates differ from those of the standard version, and demonstrate how neural network structure can be incorporated into Bayesian learning in practice\.

## Universal Approximation Theorems for Dynamical Systems with Infinite\-Time Horizon Guarantees

**Authors:** Ábel Ságodi; Memming Park

**ID:** 153723 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JFUIDA4w6C>) | [PDF](<https://openreview.net/pdf?id=JFUIDA4w6C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153723>)

Universal approximation theorems establish the expressive capacity of neural network architectures\. For dynamical systems, existing results are limited to finite time horizons or systems with a globally stable equilibrium, leaving multistability and limit cycles unaddressed\. We prove that Neural ODEs achieve $\\varepsilon$\-$\\delta$ closeness, i\.e\., trajectories within error $\\varepsilon$ except for initial conditions of measure $&lt; \\delta$, over the \\emph\{infinite\} time horizon $\[0,\\infty\)$ for three target classes: \(1\) Morse\-Smale systems \(a structurally stable class\) with hyperbolic fixed points, \(2\) Morse\-Smale systems with hyperbolic limit cycles via exact period matching, and \(3\) systems with normally hyperbolic continuous attractors via discretization\. We further establish a temporal generalization bound: $\\varepsilon$\-$\\delta$ closeness implies $L^p$ error $\\leq \\varepsilon^p \+ \\delta \\cdot D^p$ for all $t \\geq 0$, bridging topological guarantees to training metrics\. These results provide the first universal approximation framework for multistable infinite\-horizon dynamics\.

## Every Sample Counts: Supervised Fine\-Tuning of Language Models with Pointwise Constraints

**Authors:** Ignacio Hounie; Ignacio Boero; Alejandro Ribeiro

**ID:** 155361 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6BYu5yc6pZ>) | [PDF](<https://openreview.net/pdf?id=6BYu5yc6pZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155361>)

Finetuning Language Models often requires enforcing constraints on individual inputs without compromising performance\. However, current alignment methods typically impose constraints only on average, which can induce undesirable disparities across inputs or users\. We propose a finetuning framework that addresses this limitation by enforcing alignment requirements as per\-sample constraints\. To handle the optimization challenges inherent in this approach, we utilize an augmented Lagrangian formulation in the dual domain\. Since pointwise constraints can be overly restrictive in low\-probability regions or in the presence of outliers, we introduce a learned, sample\-dependent relaxation that minimally relaxes constraints to optimize objective performance\. We demonstrate the versatility of our framework across three small language model tasks: safety in instruction following, preference satisfaction in function calling, and length\-aware re\-ranking\. Across these settings, our approach reduces tail constraint violations while largely preserving or improving downstream performance

## Normalized Friedkin–Johnsen Opinion Dynamics

**Authors:** Runze Zhang; Gengyu Wang; Zhongzhi Zhang

**ID:** 155654 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=416O82L9GQ>) | [PDF](<https://openreview.net/pdf?id=416O82L9GQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155654>)

As online social platforms increasingly serve as central arenas for opinion aggregation, numerous opinion dynamics models have been extensively developed to characterize how opinions propagate and to predict emerging social phenomena\. Among various models, the Friedkin\-\-Johnsen \(FJ\) model stands out as one of the most extensively studied frameworks, with broad applications across diverse domains and recent inspiration on the design of graph neural network architectures\. However, the conventional FJ row\-stochastic pairwise interaction has been shown to induce imbalanced influence patterns, often weakening the impact of high\-degree nodes\. To address this issue, we propose a normalized FJ model based on the normalized Laplacian, which symmetrically incorporates degree information from both endpoints\. We establish its convergence and analyze its structural properties and intrinsic balance, along with a game\-theoretic interpretation\. We further develop efficient algorithms for computing equilibrium opinions and related metrics\. Experiments on large\-scale networks demonstrate the effectiveness and scalability of our approach\.

## On the fundamentals of gradient\-based SAT solvers

**Authors:** Nikolaos Karalias; Sakari Peltonen; Nikita Kostin; Stefanie Jegelka

**ID:** 154606 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CMd4XXXt1U>) | [PDF](<https://openreview.net/pdf?id=CMd4XXXt1U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154606>)

Gradient\-based methods have received increasing attention for Boolean satisfiability, both in neural\-network\-based solvers and broadly as continuous local search techniques\. In this work, we provide a deeper understanding of the interplay of optimization process, problem structure, common formula transformations and neural network properties\. Our unified view treats both direct gradient descent over variable marginals and neural\-parametrized gradient descent as instances of the same continuous SAT framework\. We show that its objective, the expected number of unsatisfied clauses under independent variable marginals, equals \(up to constant shift\) the clausewise Fourier objective commonly used in continuous SAT methods, and characterize its relation to the exact product\-measure probability of unsatisfiability\. Then, we derive convergence conditions for gradient descent\. A central theme is symmetry: gradient descent can become trapped in invariant subspaces induced by formula symmetries\.  To remedy this, we show that formula transformations commonly used as SAT preprocessing tools can be repurposed to modulate the optimization landscape\. We analyze their effect on problem structure, smoothness, tightness, and expressivity barriers of the neural network\. Empirically, across several benchmarks, these transformations can improve gradient\-descent performance\. Our experiments also indicate that transformations can improve data efficiency and inference\-time performance in self\-supervised neural SAT solving\. Finally, we demonstrate that neural\-parametrized gradient descent can improve over input\-space gradient descent across several datasets\.

## Accelerating the Inference Era with AI\-Driven, Globally Optimized HW/SW Co\-Design

**Authors:** Miria Feng; Fangzhao Zhang; Adrian G Lafuente; Mert Pilanci; Azalia Mirhoseini

**ID:** 154818 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AjGASENFly>) | [PDF](<https://openreview.net/pdf?id=AjGASENFly>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154818>)

Deep learning inference demand is projected to grow $10\{,\}000\\times$ over the next five years, a trajectory that general\-purpose accelerators cannot match\. Custom accelerators offer a viable path forward, but designing them requires simultaneous co\-optimization of hardware datapaths, software schedules, and compiler transforms across a combinatorial search space exceeding $\\mathcal O\(10^\{2300\}\)$\. While co\-design is becoming increasingly essential, existing methodologies rely on decoupled, sequential pipelines that miss critical cross\-stage trade\-offs\. We introduce CHEETAH: a globally optimized, AI\-driven framework for inference accelerator co\-design\. To our knowledge, this is the first co\-design framework to combine \\textit\{joint\} tiling\-fusion, dynamic placement, and rematerialization in a single LP\-based formulation\. Key contributions include: \(1\) time\-indexed variables for dynamic memory management, \(2\) rematerialization variables to enable cheap recomputation over costly DRAM reloads, and \(3\) joint tiling\-fusion optimization via McCormick linearization\. This inner\-loop precision is steered by an LLM\-guided outer loop that performs causal interventions based on specific deployment profiles and Lagrangian sensitivity signals\. In less than 6 hours, \\textsc\{CHEETAH\} discovers designs on the Pareto frontier achieving an average of $\\sim22\.07\\times$ raw speedup across $11$ workloads, reaching up to $\\sim40\.1\\times$ speedup on a single workload over a TPU\-v3 baseline, unlocking efficiency inaccessible to decoupled sequential pipelines\.

## BenchRep\-T: A Systematic Evaluation of T\-Cell Repertoire\-Based Disease Diagnostics

**Authors:** Chiho Im; Liel Cohen\-Lavi; Alejandro Buendia; Anshul Kundaje; Scott D Boyd

**ID:** 139621 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EvaVcjvUjx>) | [PDF](<https://openreview.net/pdf?id=EvaVcjvUjx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139621>)

Adaptive immune receptor repertoire sequencing data has emerged as a promising potential modality for disease diagnosis, relying on computational methods to analyze T\-cell receptor \(TCR\) sequences from an individual’s blood sample\. Published methods rely on different cohorts, data preprocessing pipelines, and evaluation metrics, making direct comparison across methods challenging\. We have developed BenchRep\-T, a unified benchmark that standardizes multiple publicly available TCR repertoire datasets and evaluates nine computational approaches, spanning statistical enrichment of shared sequences, feature\-engineered ensembles, deep learning, and graph\-based clustering\. BenchRep\-T evaluates methods on four tasks: disease classification across conditions, performance scaling under restricted sequence\-sampling depth, recovery of known antigen\-specific driver sequences, and evaluation of sensitivity to demographic confounding\. Under controlled evaluation, simple baselines prove competitive, with tree\-based models trained on V\- and J\-gene usage and short sequence motifs approaching the classification performance of more complex methods\. Our findings underscore the complexity of modeling TCR repertoire data, and show that no single method dominates across all tasks\. BenchRep\-T provides a framework for rigorous and reproducible evaluation of TCR repertoire classification methods to accelerate the development of immune repertoire\-based diagnostics\.

## Towards a Unified Model for Flexible Job Shop Scheduling Problems

**Authors:** Inguk Choi; Woo\-Jin Shin; Sang\-Hyun Cho; Hyun\-Jung Kim

**ID:** 149188 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sE50rZRh2S>) | [PDF](<https://openreview.net/pdf?id=sE50rZRh2S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149188>)

Deep learning\-based heuristics have attracted significant attention for solving the Flexible Job Shop Scheduling Problem \(FJSSP\)\. However, existing studies typically overlook operational constraints prevalent in real\-world industry or target only a specific FJSSP variant, limiting their practical applicability\. To address these limitations, we introduce SchedFormer, a generalist agent capable of solving FJSSPs with diverse constraints in a zero\-shot manner\. Concretely, to handle a range of variants in the same manner, we propose a Unified State Representation \(USR\) that 1\) maps different types of constraints into a single feature and 2\) captures the invariant machine\-operation relationships across variants via four distinct graphs\. These designs make the model readily generalizable to unseen variants without model redesign or retraining\. We further develop a unified neural solver that uses graph\-specific Transformer blocks to effectively encode the USR\. Each block employs an attention mechanism specialized for its target graph, with the mapped constraint information conditioning the overall representation learning\. Extensive experiments on 16 FJSSP variants show that SchedFormer considerably outperforms competitors, including specialized neural solvers, and generalizes strongly to unseen variants, instance sizes, and data distributions\. We further show excellent adaptability of SchedFormer to other scheduling problems\.

## ValuSpec: Plug\-and\-Play Candidate Valuation before Target Verification for Tree\-Based Speculative Decoding

**Authors:** Liang He; SiYuan Ma; Qishi Zhan; Yongqi Fan; Mingyu Cao; Qizhen Lan; Zhaolu Kang; Xilu Wang

**ID:** 154357 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EBfu12MEOf>) | [PDF](<https://openreview.net/pdf?id=EBfu12MEOf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154357>)

Tree\-based speculative decoding accelerates large language model inference by verifying multiple candidate branches in parallel\.   However, in practical serving scenarios, similar requests repeatedly induce overlapping candidate branches\. While retrieval\-based methods mitigate this by reusing historical drafts, the resulting candidate trees often contain many low\-quality branches as the candidate tree grows, which reduces verification efficiency and wastes target\-side computation\. To address this, we propose ValuSpec, a plug\-and\-play candidate valuation mechanism that filters low\-quality branches from a supplied candidate tree before expensive target\-side verification\. ValuSpec introduces transfer\-based supervision to align filtering with the target model's behavior\. A filtering threshold is estimated from the target model's greedy trajectories on a calibration split, without any parameter training\. The target model then verifies the filtered tree under the output\-identical greedy rule, so accepted tokens are guaranteed to match standard autoregressive decoding exactly\.  Experimental results on HumanEval, GSM8K, Dolly, and SpecBench show that ValuSpec achieves up to 2\.38× end\-to\-end speedup in retrieval\-based tree settings\. Furthermore, integrating ValuSpec into the EAGLE\-3 dynamic tree framework yields up to 2\.78× end\-to\-end speedup without modifying its tree construction strategy, demonstrating that ValuSpec serves as a generally applicable and plug\-and\-play candidate valuation module\.

## TriAxialKV: Toward Extreme Low\-Precision KV\-Cache Quantization for Agentic Inference Tasks

**Authors:** Hanzhang Shen; Haoran Wu; Yiren Zhao; Robert Mullins

**ID:** 156097 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0PStm4OPPJ>) | [PDF](<https://openreview.net/pdf?id=0PStm4OPPJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156097>)

Agentic workloads have emerged as a major workload for LLM inference\. They differ significantly from chat\-only workloads, requiring long\-context processing, the ability to handle multimodal inputs, and structured multi\-turn interactions with tool calling capabilities\. As a result, their context exhibits structure that can carry different importance along three key axes: temporal recency to the current turn, modality such as text or image tokens, and semantic role such as user queries, tool calls, observations, or reasoning\. These axes capture distinct token behaviors and lead to different sensitivities to KV\-cache compression\. However, existing KV\-cache quantization methods are typically homogeneous or exploit only heterogeneity on a single dimension, such as temporal proximity or modality, overlooking the interactions among them\. To this end, we introduce TriAxialKV, a novel mixed\-precision KV\-cache quantization scheme that assigns each token a triaxial tag, calibrates per\-tag sensitivity, and allocates INT2/INT4 bitwidths under a fixed memory budget\. We implement TriAxialKV as an end\-to\-end serving system, comprising calibration, mixed\-precision quantization and memory management, and custom fused Triton decode kernels\. When using Qwen3\-VL\-32B\-Thinking as a computer\-use agent operating the OSWorld, TriAxialKV matches the accuracy of SGLang with BF16 KV cache while supporting 4\.5$\\times$ KV cache size and achieving 30\\% higher end\-to\-end throughput, when running on real GPU systems\.

## SCHTs: A Semi\-Structured Dynamic Sparse Training Framework for Hardware\-Efficient Deep Learning

**Authors:** Yuan Hua; Zhaoxu Ding; Jilin Zhang; Ziyi Cheng; Zhijie Jian; Wenqi Gu; Carlo Vittorio Cannistraci; Hong Chen

**ID:** 150186 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k4WBIO9Tw0>) | [PDF](<https://openreview.net/pdf?id=k4WBIO9Tw0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150186>)

Although Dynamic Sparse Training \(DST\) has emerged as a promising solution for deploying deep neural networks on resource\-constrained edge devices, unstructured DST methods suffer from irregular weight distributions that incur extra index overhead and severely degrade computational efficiency\. In contrast, semi\-structured sparsity offers computational efficiency but typically suffers from performance degradation at high sparsity levels with strict semi\-structured constraints\. To address these challenges, we propose Semi\-structured Cannistraci\-Hebb Training soft rule \(SCHTs\), a novel hardware\-efficient dynamic sparse training framework, which includes four key stages: semi\-structured sparse topological initialization, weight initialization, global network pruning, and local network regrowth\. Unlike unstructured DST methods, SCHTs supports fine\-grained and coarse\-grained N:M semi\-structured sparsity patterns with constant fan\-in or fan\-out, ensuring computational efficiency\. Extensive experiments demonstrate that the proposed SCHTs framework enables highly sparse networks \(&gt;90\\%\) to achieve performance comparable to, or even surpassing, their dense counterparts\. \(1\) For spiking neural networks, models trained with SCHTs consistently outperform their dense counterparts at 90\\% sparsity, yielding accuracy improvements of \+0\.05\\% \(to 94\.79\\%\), \+2\.95\\% \(to 75\.01\\%\), and \+0\.09\\% \(to 99\.16\\%\) on CIFAR\-10, CIFAR\-100, and N\-MNIST, respectively\. \(2\) For artificial neural networks, sparse networks trained with SCHTs outperform their dense counterparts with accuracy improvements of \+0\.90\\% \(to 77\.54\\%\) and \+0\.63\\% \(to 63\.87\\%\) using GoogLeNet on CIFAR\-100 and TinyImageNet, as well as a \+0\.67\\% \(to 78\.97\\%\) improvement using ResNet\-152 on CIFAR\-100\. \(3\) For large language models, SCHTs enables a 90\\% sparse LLaMA\-130M to yield a highly competitive validation perplexity of 25\.49 on OpenWebText, outperforming unstructured DST methods like RigL\. Furthermore, cycle\-accurate simulations on Trapezoid \(a specialized sparse matrix accelerator\) reveal that SCHTs achieves a 75\\% reduction in index overhead and a 32\.7\\% improvement in computational efficiency at 1:16 sparsity, demonstrating its effectiveness in translating algorithmic sparsity into tangible on\-chip acceleration\.

## A Unified Neural Architecture for Variable\-Wise Shape Constraints

**Authors:** hyunho kim; Dohyun Bu; Jong\-Seok Lee

**ID:** 149870 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mZxrBjgm2M>) | [PDF](<https://openreview.net/pdf?id=mZxrBjgm2M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149870>)

We introduce COMONet \(Convex\-Concave and Monotonicity\-Constrained Neural Networks\), a unified architecture for enforcing variable\-wise shape constraints in neural networks\. COMONet addresses the limitations of prior methods that either support only a restricted subset of monotonicity and curvature constraints or enforce them through penalties without strict architectural guarantees\. Our framework assigns each input variable to one of eight shape regimes, covering monotonicity, convexity, concavity, and their combinations\. This is achieved through a partially connected architecture that routes each variable to specialized units equipped with sign\-constrained weights and constraint\-preserving activation functions\. We also provide theoretical guarantees showing that COMONet satisfies the prescribed variable\-wise shape constraints by construction\. Experiments on synthetic and real\-world datasets demonstrate that COMONet achieves competitive performance and remains robust to noise while preserving its architectural guarantees\. COMONet thus offers a practical and principled framework for incorporating domain knowledge as shape constraints into neural network training\.

## How does feature learning change the function space evolution?

**Authors:** João Lobo; Bruno Loureiro; Long Tran\-Thanh; Fanghui Liu

**ID:** 150798 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fKMJIDNPRC>) | [PDF](<https://openreview.net/pdf?id=fKMJIDNPRC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150798>)

Feature learning is widely viewed as the mechanism that distinguishes neural networks from fixed\-kernel methods, yet its effect on the underlying function space remains poorly understood\. We aim to precisely characterize how the function space \(e\.g\., RKHS\) endowed by a two\-layer neural network during gradient descent training\. We prove that, in a high\-dimensional proportional regime, the post\-update feature distribution is well approximated by a target\-dependent spiked Gaussian covariance, yielding a deformed kernel that can be written as the original isotropic kernel evaluated on geometrically transformed inputs\. This characterization enables a spectral analysis of the corresponding integral operator\. We prove that the global eigenvalue decay rate is preserved, while the spike selectively alters the leading eigenspaces\. For ReLU activations, we derive an explicit perturbative expansion showing that feature learning boosts the eigenvalue of the linear eigenfunction aligned with the target direction and mixes the top radial eigenfunction with a target\-aligned quadratic harmonic\. These results provide a precise function\-space description of early feature learning: gradient descent does not merely rescale a static kernel, but induces a data\-adaptive deformation that preferentially enriches directions aligned with the teacher signal\.

## FedReCall: Recalling Client\-Specific Directions in Federated LoRA Fine\-tuning

**Authors:** Chang Liu; Jinqian Chen; Jihua Zhu; Xiangyang Yang

**ID:** 149139 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sY42gw5mw5>) | [PDF](<https://openreview.net/pdf?id=sY42gw5mw5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149139>)

Low\-rank adaptation \(LoRA\) enables communication\-efficient federated fine\-tuning of large language models, but standard FedLoRA averages the factors $A$ and $B$ separately even though the model update is determined by their product $\\Delta W=sBA$\. Under task heterogeneity, factor\-wise aggregation can further dilute directions that are locally useful but not strongly shared across clients; we call this phenomenon \\emph\{directional dilution\}\.    We analyze this effect through the singular directions of client LoRA updates and find that low\-strength directions are most vulnerable to dilution\. Their repeated owner\-specific recovery suggests client\-specific adaptation signals rather than random noise\.   We propose \\textsc\{FedReCall\}, a client\-private plug\-in that captures observable dilution gaps, selects reliable diluted directions into a private frozen cache, and recalls them through a low\-rank bypass guarded by a single\-batch loss probe when the client next participates\.   As a plug\-in, \\textsc\{FedReCall\} can be seamlessly integrated into existing FedLoRA methods without changing their aggregation rules, communication payloads, or trainable\-parameter sets, consistently improving personalized adaptation and improving global evaluation metrics on most aggregators\.

## MaRK: Markov\-adapted Recurrent Kernels for Dynamic Operator Conditioning in State Space Models

**Authors:** Syed Ibrahim Omer; Ginny Wong; Xiangyu Zhao

**ID:** 148382 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yIjFWwvG7b>) | [PDF](<https://openreview.net/pdf?id=yIjFWwvG7b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148382>)

State Space Models \(SSMs\) offer an efficient alternative to Transformers for sequence modeling, yet conditioning pre\-trained SSMs for iterative generation typically operates outside the recurrent operator, through input injection or activation modulation\. While such mechanisms expose the model to conditioning information, they leave the underlying temporal dynamics fixed\. We introduce MaRK \(Markov\-adapted Recurrent Kernels\), a dynamic operator\-conditioning framework that maps context vectors directly into bounded modulations of a frozen SSM's recurrence \($A$\), read\-in \($B$\), read\-out \($C$\), skip \($D$\), and discretization \($\\Delta$\) parameters\. Viewed through the lens of Linear Parameter\-Varying systems, MaRK induces a context\-indexed family of Markov parameter sequences, allowing each diffusion timestep to reshape the model's input\-output memory kernel\. We instantiate MaRK on a frozen 111M\-parameter Hydra SSM backbone and study three adapter geometries: Hypernet, Chebyshev polynomial, and Discrete Cosine Transform kernels\. Since these adapters modify the Markov parameter sequence through low\-rank auxiliary maps on the frozen backbone, parameter\-efficient fine\-tuning arises as a structural consequence of the adaptation mechanism itself, requiring only 7\.5\-\-13M trainable auxiliary parameters to transition from a bidirectional objective to an iterative diffusion regime\. The bounded recurrence parameterization further yields an analytic Affine Quadratic Stability certificate for the modulated recurrence\. Through synthetic LPV recovery experiments and Markov\-operator diagnostics, we show that MaRK recovers coordinate\-invariant temporal operators under matched assumptions and produces distinct, stable timestep\-conditioned memory profiles\. Empirically, the Chebyshev variant yields the strongest performance, achieving an average validation loss of 2\.63, followed by the DCT \(2\.66\) and Hypernet \(3\.60\) geometries\. Together, these results provide initial evidence that dynamic operator modulation is a principled operator\-level conditioning mechanism for adapting SSMs beyond input\-stream injection and adaptive normalization\.

## DPA: Decentralized Primal Averaging with Quasi\-Global Momentum for Highly Heterogeneous Data

**Authors:** Diyako Ghaderyan; Stefan Werner

**ID:** 155094 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8Tew0zEsuF>) | [PDF](<https://openreview.net/pdf?id=8Tew0zEsuF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155094>)

Decentralized training of deep learning models is widely used to enable data privacy and on\-device learning over networks\. In realistic scenarios, heterogeneity across clients' local data poses an optimization challenge and can severely degrade test accuracy, especially on sparse communication graphs\. Building on recent advances in centralized primal averaging, we propose Decentralized Primal Averaging \(DPA\), a decentralized learning algorithm that combines primal averaging with a local quasi\-global momentum estimate\. DPA maintains three coupled sequences for optimization, gradient evaluation, and output averaging, while using consecutive mixed iterates to construct a network\-aware momentum direction without transmitting an auxiliary tracking variable\. We prove a nonconvex stationarity guarantee for DPA's averaged output model and establish a linear\-speedup result up to network\- and heterogeneity\-dependent residual terms\. We also introduce DPA\-1G, a one\-gossip\-per\-iteration variant that matches the communication budget of DSGD\-style baselines\. Experiments following the GUT decentralized image\-classification benchmark show that DPA outperforms DSGD, gradient tracking, QG\-DSGDm, momentum tracking, and QG\-GUTm across datasets, architectures, topologies, and heterogeneity levels, with the largest gains under high heterogeneity\. DPA\-1G matches or exceeds the one\-gossip baselines at the same per\-iteration communication budget\.

## A Cross\-Interaction Neural Architecture for Submodular Functions

**Authors:** SOUTRIK SARANGI; Aditya Singh; Vansh Maheshwari; Abir De

**ID:** 148925 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uBVOypPlGr>) | [PDF](<https://openreview.net/pdf?id=uBVOypPlGr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148925>)

Submodular functions have applications in several domains, \\eg, text, vision, speech, \\etc\. Recent works have proposed neural architectures that are submodular functions by design\. However, they do not explicitly capture pairwise interactions between set elements\. In this work, we begin with the characterization of pairwise submodular functions, which capture the pairwise interaction across the elements of the input set\. We observe that pairwise interactions yield monotone supermodular functions, since the number of terms grows quadratically in terms of the input set size, which poses a significant challenge in converting it into a submodular function\. To address it, we provide a novel result that a derivative rate\-controlled concave function can transform a monotone supermodular function into a monotone submodular function\. We also extend our results to monotone $\\alpha$\-submodular functions\.  Leveraging this characterization, we design multi\-layer neural cross\-interaction architectures for monotone submodular functions and analyze their expressivity\. Finally, we perform several experiments which show that our model performs better than existing baselines\.

## Distributionally Robust Mixture\-of\-Experts Training

**Authors:** Xin Teng; Muxiao Li; Hongyi Wen

**ID:** 150482 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hk7uVfp5W3>) | [PDF](<https://openreview.net/pdf?id=hk7uVfp5W3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150482>)

Mixture\-of\-Experts \(MoE\) transformers scale capacity by activating only a few experts per token, but this sparsity creates a hidden reliability problem: when routing is imperfect, load\-balanced models may send tokens to experts that are insufficiently trained for the assigned inputs\. We propose Distributionally Robust MoE Training \(DRMoET\), a drop\-in objective that treats layer\-wise experts as endogenous robustness groups and optimizes high\-loss routing outcomes rather than merely equalizing traffic\. DRMoET updates a per\-layer expert distribution by an entropy\-regularized softmax rule on EMA\-smoothed, activation\-weighted expert losses, strengthening plausible non\-top routing paths while preserving standard MoE computation\. Under the FLAME\-MoE recipe at 746M\-total and 10\.3B\-total scales, DRMoET improves downstream averages over both standard FLAME\-MoE and auxiliary\-loss\-free balancing\. Mechanistic analyses show lower expert\-loss variance with nearly unchanged mean loss, 4\.3\\% lower degradation under forced mid\-$k$ misrouting, and improved domain\-\-expert specialization\. These results position routing robustness\-\-not only utilization balance\-\-as a practical objective for reliable sparse MoE scaling\.

## Inferring learning rules in deep neural network architectures from animal learning data

**Authors:** Shaunak Bhandarkar; Jonathan Pillow

**ID:** 148570 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wsgPXDF5VH>) | [PDF](<https://openreview.net/pdf?id=wsgPXDF5VH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148570>)

A major goal in computational neuroscience is to understand how animals learn to perform a new behavior from a sequence of actions and rewards\. Recent work from Liebana et al\. \(2025\) has argued that animal learning trajectories are inconsistent with learning in shallow \(1\-layer\) networks and are better explained by gradient descent \(GD\) in a deep neural network \(DNN\)\. However, previous work on inferring animal learning rules from behavioral data has focused on either 1\-layer networks or fits to group behavior, highlighting the need for methods to fit DNN learning rules to individual animal learning trajectories\. To address this gap, we develop a method for inferring single\-animal DNN\-based learning rules, parametrized by a set of initial weights, a learning rate, and a softmax parameter governing stochasticity in choice behavior\. We first prove that GD in a shallow network can be arbitrarily well approximated by GD in a deep network, establishing a theoretical limit on network identifiability\. Using this result to refine our inference method, we analyze two behavioral datasets from mice learning a sensory decision\-making task\. Specifically, we compare three model architectures: 1\-layer linear \(1L\) and 2\-layer linear \(2L\) models considered in Liebana et al\., as well as a 2\-layer nonlinear network \(2NL\) with a sigmoidal nonlinearity after the first layer\. The 2NL model achieved the best fit for 84 out of 88 mice in both datasets \(by AIC\)\. Moreover, simulated learning trajectories from the fitted 2NL model closely matched the timecourse of key behavioral metrics such as bias, stimulus sensitivity, and accuracy\. These results show that both depth and nonlinearity are critical for capturing individual learning trajectories\. Strikingly, we found that the inferred learning rate and initial layer\-1 weights of the 2NL model systematically predicted individual differences in accuracy and task bias, linking network initialization and learning rate to individual differences in learning performance across mice\.

## PriFT: Prior\-Support Guided Token Reweighting for Supervised Fine\-Tuning

**Authors:** Ke Wang; Shuangqi Li; Mathieu Salzmann; Pascal Frossard

**ID:** 153837 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ILf5dWUdsd>) | [PDF](<https://openreview.net/pdf?id=ILf5dWUdsd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153837>)

Supervised fine\-tuning \(SFT\) is computationally efficient and broadly applicable, but often shows weaker generalization than reinforcement learning \(RL\)\. A key limitation is its off\-policy objective: SFT fits fixed demonstrations token by token, including targets that may be poorly aligned with the model's pretrained distribution\. Recent token\-reweighted SFT methods address this issue by assigning larger training weights to tokens that better align with the model's predictive distribution, using statistics such as target\-token probability or entropy\. However, computing these statistics from the online model being fine\-tuned makes token weights trajectory\-dependent, as the model's distribution rapidly departs from the pretrained model and induces self\-reinforcing reweighting dynamics\. We propose PriFT, Prior\-support guided Fine\-Tuning, which derives token weights from a frozen pretrained reference to obtain a stable reweighting signal unaffected by online fine\-tuning dynamics\. This signal estimates prior support: the extent to which each target token is supported by the pretrained model before task\-specific adaptation\. Across multiple existing weighting and selection rules, replacing online statistics with pretrained statistics consistently improves performance\. We introduce two instantiations: PriFT\-prob, which uses pretrained target\-token probability, and PriFT\-mass, which selects tokens by relative support under the pretrained distribution\. Extensive experiments on mathematical reasoning, code generation, and medical question answering show that PriFT achieves state\-of\-the\-art SFT results and provides a better initialization for subsequent RL training\.

## Scaling Laws for Synthetic Pretraining in Radio\-Map Prediction

**Authors:** Khoren Petrosyan; Artashes Mkrtchyan; Rafayel Mkrtchyan; Hrant Khachatryan; Theofanis Raptis

**ID:** 150254 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jYkYYLBmrd>) | [PDF](<https://openreview.net/pdf?id=jYkYYLBmrd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150254>)

Large\-scale pretraining has driven much of recent progress in deep learning, but many physics\-governed prediction problems remain outside this regime: real measurements are scarce, and high\-fidelity simulators are slow and often proprietary\. Indoor radio\-map prediction is a representative example\. Existing benchmarks rely on limited high\-quality simulated data, while recent methods largely focus on task\-specific input features or architectures that encode physics priors\.  In this work we propose an alternative path\. We generate 128M synthetic indoor radio\-map samples with a fast simulator that omits known propagation effects, pretrain a ResNet\-based encoder\-decoder without task\-specific modifications, and fine\-tune it on high\-quality benchmark data\. Despite simulator mismatch, our method reduces error by 15\\% on average relative to the best known methods across five indoor radio\-map prediction tasks and improves transfer on a small real\-measurement dataset\. Downstream performance follows a predictable data\-scaling trend: a power law fitted on runs up to 16M synthetic samples predicts the per\-task 2M\-normalized RMSE at an order of magnitude more data within 5\\% mean absolute percentage error\. Probing analyses further show that the pretrained model captures physically meaningful spatial\-field structure, including free\-space attenuation, transmitter\-centered symmetries, and wall\-mediated effects\. These results suggest that cheap approximate simulators can serve as scalable pretraining engines for physics\-governed spatial prediction, partially compensating for scarce high\-fidelity data\.

## AC/DC on a Budget \-\- Alternating Sparse Phases

**Authors:** Rahul Nittala; Advait Gadhikar; Tom Jacobs; Rebekka Burkholz

**ID:** 149303 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rD5TBB47Zb>) | [PDF](<https://openreview.net/pdf?id=rD5TBB47Zb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149303>)

State\-of\-the\-art neural network sparsification relies on alternating dense and sparse training phases\. While computationally expensive, dense phases are critical for performance\. Our empirical analysis reveals the mechanics behind this gain: upon reintroduction, previously masked parameters receive disproportionately large gradients that drive essential mask rewiring and parameter sign\-flipping\. Building on these insights, we optimize the performance\-to\-FLOPs Pareto frontier through three innovations: \(1\) zero\-initializing masked parameters during dense phases to promote relevant sign flips, \(2\) truncating dense phases based on early mask convergence, and \(3\) replacing the dense phase entirely with a sparse rewiring phase that updates only the active mask and a small, high\-gradient fraction of out\-of\-mask weights\. Evaluated on CIFAR100 and ImageNet, our variant ARC \(Alternating Rewiring Compression\) matches baseline AC/DC performance at a fraction of the computational cost, establishing a superior performance\-to\-FLOPs frontier also compared to standard sparse\-to\-sparse algorithms\.

## Winfree Oscillatory Neural Network

**Authors:** Jiawen Dai; Yue Song

**ID:** 150411 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iFWR7mI8Q0>) | [PDF](<https://openreview.net/pdf?id=iFWR7mI8Q0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150411>)

Oscillations and synchronization are widely believed to play a fundamental role in representation and computation\. However, existing machine learning approaches based on synchronization dynamics have largely been confined to specialized settings such as object discovery, with limited evidence of scalability to standard vision benchmarks or logic reasoning tasks\. We propose the \\emph\{Winfree Oscillatory Neural Network\} \(\\emph\{WONN\}\), a dynamical neural architecture based on generalized Winfree dynamics\. \\emph\{WONN\} evolves representations on the torus $\(S^1\)^d$ through structured oscillatory interactions, combining phase\-based inductive biases with flexible and hierarchical interaction mechanisms instantiated as either fixed trigonometric mappings or learnable neural networks\. We evaluate \\emph\{WONN\} on image recognition and complex reasoning tasks, including CIFAR, ImageNet, Maze\-hard, and Sudoku\. Across these domains, \\emph\{WONN\} achieves competitive or superior performance with strong parameter efficiency\. \\textbf\{In particular, \\emph\{WONN\} is, to our knowledge, the first synchronization\-based oscillatory architecture to scale competitively to ImageNet\-1K\.\} Furthermore, on Maze\-hard, \\emph\{WONN\} achieves \\textbf\{80\.1\\% accuracy using only 1\\% of the parameters of prior state\-of\-the\-art models\}\. These results suggest that structured oscillatory dynamics provide a scalable and parameter\-efficient alternative to conventional neural architectures\.

## Distance\-Dependent Connectivity Shapes Continual Learning by Synaptic\-Resource\-Delimited Separation of Neural Dynamics

**Authors:** CHIU\-CHANG CHENG; Ching\-Lung Hsu; Ya\-Ning Chang; Chao\-Hung Wang

**ID:** 150595 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gyvtSJyA7P>) | [PDF](<https://openreview.net/pdf?id=gyvtSJyA7P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150595>)

Biological circuits learn without catastrophic forgetting, but the structural basis of this ability remains unclear\. We investigate whether distance\-dependent connectivity \(DDC\), spatial recurrency found in the mammalian cortex, contributes to continual learning by embedding neurons of a biologically plausible recurrent spiking neural network in a 3D Euclidean substrate, using pairwise distance to set recurrent connection probability, and ablating that distance dependence in silico\. We show that DDC shapes a synaptic resource geography: it controls the spatial breadth of the candidate synaptic pool for learning to occur, plasticity further compresses that pool, and the resulting substrate governs how subsequent inputs compete for the same synapses\. On challenging 10\-way class\-incremental MNIST classification, this produces a non\-monotonic accuracy curve, with an intermediate DDC range achieving the best performance \(71\.4%\) and outperforming both highly local circuits that collapse into a synaptic\-resource bottleneck and random connectivity that produces weakly guided, broader synaptic contention\. This pattern was better explained by synaptic competition, resulting in separable neural dynamics, than by neuron assembly separation\. These results suggest that appropriate cortical DDC may prevent diffuse random contention\. For continual learning problems, this finding highlights the conceptual importance of circuit dynamics more than active neuron ensembles and engrams\.

## Perceive, Interact, Reason: Building Tool\-Augmented Visual Agents for Spatial Reasoning

**Authors:** Changye Li; Meng Lu; YI WU; Ligeng Zhu

**ID:** 154683 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BlPie2QVxk>) | [PDF](<https://openreview.net/pdf?id=BlPie2QVxk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154683>)

While recent vision\-language models \(VLMs\) demonstrate strong multimodal understanding, they remain limited in spatial reasoning tasks that require active evidence acquisition and multi\-step visual interaction\. This limitation suggests that relying solely on implicit visual representations from vision encoders is insufficient for recovering fine\-grained spatial evidence\. We introduce \*PERception\-Interaction\-reason Agent\* \(\*\*PERIA\*\*\), a tool\-augmented visual agent for spatial reasoning tasks across map reasoning, visual probing, and vision reconstruction\. \*\*PERIA\*\* uses two lightweight tool families: \*vision perception tools\* for exposing textual, symbolic, and spatial evidence, and \*vision interaction tools\* for manipulating visual context, tracing paths, and verifying spatial relations\. To train \*\*PERIA\*\*, we develop a unified recipe that combines supervised tool\-use trajectory synthesis, composite rewards, and Observation\-Relaxed Group\-in\-Group Policy Optimization \(OR\-GIGPO\) for effective multi\-tool behavior\. Experiments on 13 benchmarks from 8 datasets show that \*\*PERIA\*\*\-8B improves over the Qwen3\-8B backbone by 10\.0% on in\-distribution benchmarks and 4\.4% on out\-of\-distribution benchmarks, while outperforming previous state\-of\-the\-art baselines of similar size by 7\.0%–14\.8%\. It also achieves performance comparable to much larger models such as Qwen3\-VL\-235B\-A22B\-Thinking and GPT\-5, demonstrating the effectiveness of \*\*PERIA\*\* in enhancing spatial reasoning capabilities\.

## Characterizing Universal Object Representations Across Vision Models

**Authors:** Florian P Mahner; Johannes Roth; Ka Chun Lam; Mick Bonner; Francisco Pereira; Martin N Hebart

**ID:** 156019 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=16SGONh3Vl>) | [PDF](<https://openreview.net/pdf?id=16SGONh3Vl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156019>)

Deep neural networks trained with different architectures, objectives, and datasets have been reported to converge on similar visual representations\. However, what remains unknown is which visual properties models actually converge on and which factors may underlie this convergence\. To address this, we decompose the object similarity structure of 162 diverse vision models into a small set of non\-negative dimensions\. To determine universal versus model\-specific dimensions, we then estimate how often each dimension reappears across models\. In contrast to model\-specific dimensions, universal dimensions are more interpretable and more strongly driven by conceptual image properties, indicating the relevance of interpretability and semantic content as implicit factors driving universality across models\. Differences in architecture, objective function, training data, model size, and model performance do not explain the emergence of universal dimensions\. However, models with more universal dimensions also better predict macaque IT activity and human similarity judgments, suggesting that universality reflects representations relevant to biological vision\. These findings have important implications for understanding the emergent representations underlying deep neural network models and their alignment with biological vision\.

## Modeling quantum neural network gradient with reinforcement learning

**Authors:** Nhan Luu; Trung D Luu; Ngoc Nam Pham; Thang C Truong

**ID:** 149990 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lfrvu8xfsh>) | [PDF](<https://openreview.net/pdf?id=lfrvu8xfsh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149990>)

Variational quantum algorithms offer a promising route to practical quantum advantage on near\-term hardware, yet training quantum neural networks \(QNNs\) remains hampered by two compounding difficulties: the exponential vanishing of gradient variance known as the barren plateau, and the $\\mathcal\{O\}\(L \\cdot 2^n\)$ time–memory cost of differentiating through an $n$\-qubit, $L$\-layer circuit\. We propose RLQ\-Grad, a reinforcement\-learning\-based optimizer in which a classical policy $\\pi\_\\phi$ \(a spectrally\-normalized PPO agent\) learns to propose parameter updates directly, conditioned on the QNN's current parameters, loss, accuracy, and previous update\. Because the surrogate gradient is emitted by a classical network rather than obtained by differentiating through the unitary $U\(\\theta\)$, its variance is not constrained by the barren plateau concentration bound, and its per\-step cost scales independent of the Hilbert\-space dimension\. We prove these two properties formally and verify them empirically on a hardware\-efficient ansatz across four supervised benchmarks\. RLQ\-Grad preserves a near\-flat gradient\-variance curve where backpropagation, parameter\-shift, and adjoint differentiation decay by 1–2 orders of magnitude, attains $128\\times$–$1841\\times$ wall\-clock speedups and constant $\\sim0\.1$ MB memory at $n=12$ qubits, and improves top\-1 validation accuracy by up to $\+10\\%$ over the strongest gradient\-based baseline at every circuit scale tested\.

## How are linear representations learned? Exact solutions to the dynamics of abstraction

**Authors:** William W Yang; Peter E Latham; Andrew Saxe

**ID:** 155691 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3fgBRPXZHw>) | [PDF](<https://openreview.net/pdf?id=3fgBRPXZHw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155691>)

In artificial and biological neural networks, concepts are often encoded as consistent linear directions in representation space\. In deep learning, this idea is known as the linear representation hypothesis and underpins many interpretability and control methods based on linear probes, from concept detection to activation steering\. Yet while prior work has studied whether such directions should exist \\textit\{after\} training, the dynamics of how they emerge \\textit\{during\} training remain poorly understood\. Here, we develop a framework to study the alignment of concept directions during training \-\- a process we call "abstraction"\. In a minimal linear network setting, we obtain exact solutions for the full trajectory of abstraction\. These solutions reveal key analytic principles governing abstraction: \(i\) data and target geometry jointly determine terminal abstraction, \(ii\) abstraction improves with network depth, and \(iii\) initialization scale controls the maximum abstraction reached during training\. Extending our theory to nonlinear networks, we analyze how the choice of nonlinearity affects abstraction dynamics: erf networks approximate the linear theory, while abstraction in ReLU networks depends less on target geometry and more on input geometry\. Across both, we prove a striking attenuation law: both nonlinearities weaken abstraction in activations relative to preactivations\. We find evidence for this law in open models \(DINOv3, Gemma 4\) and apply our theory to improve linear probe generalization in LLMs\. Together, our results provide a dynamical theory of abstraction with implications for interpretability and control\.

## Locking Pretrained Weights via Deep Low\-Rank Residual Distillation

**Authors:** Keitaro Sakamoto; Pierre Ablin; Federico Danieli; Marco Cuturi

**ID:** 149948 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lylsaH0tr5>) | [PDF](<https://openreview.net/pdf?id=lylsaH0tr5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149948>)

The quality of open\-weight language models has dramatically improved in recent years\. Sharing weights greatly facilitates model adoption by enabling their use across diverse hardware and software platforms\. They also allow for more open research and testing, to the extent that users can use them as checkpoints, fine\-tune them according to their needs, and potentially redistribute them\. In some cases, however, concerns on modifying these weights towards unauthorized uses may outweigh the pros of giving users such a freedom\. Defending against such adaptation is non\-trivial: since an adaptive attacker can observe all weights and architectures by definition, they can reverse simple structural defenses, and use optimization to defeat the simplest locking mechanisms\. In this work, we exploit the inference–training asymmetry of automatic differentiation as a novel defense axis\. We propose DLR\-Lock, a method where the purveyor of the model purposely replaces each pretrained MLP in their model with a deep low\-rank residual network \(DLR\-Net\) of comparable parameter count, forcing activation memory that grows linearly with depth during backpropagation\. DLR\-Nets are efficiently trained via module\-wise distillation\. We show that, beyond this memory overhead, DLR\-Lock results in architectural mismatches that complicate the optimization landscape of standard fine\-tuning, and a backward pass that incurs disproportionately more overhead than the forward pass\. Our defense succeeds in withstanding adaptive attackers with full knowledge of the defense strategy while preserving the original model's capabilities\. Experiments on LLM validate these claims\.

## Geometric Gain Graph: Zero\-Token Graph Construction for Multi\-Hop RAG

**Authors:** Zeliang Li; Xiaofen Xing; Wenyu Tao; Kailing Guo; Xiangmin Xu

**ID:** 151572 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZbE8MH6DMy>) | [PDF](<https://openreview.net/pdf?id=ZbE8MH6DMy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151572>)

Existing Retrieval\-Augmented Generation \(RAG\) systems struggle with multi\-hop reasoning due to a fundamental inability to balance relevance and novelty\. Traditional dense retrievers are constrained by surface\-level matching, falling into a homogenized "Similarity Trap"\. Conversely, emerging Graph RAGs attempt to explore novel documents via heuristic entity extraction, but they introduce prohibitive Large Language Model \(LLM\) overhead and easily drift into off\-topic "Novelty Traps"\. To fundamentally resolve this contradiction, we propose Geometric Gain Graph \(G$^3$RAG\), the novel zero\-token graph construction paradigm for RAG\. G$^3$RAG completely discards the expensive heuristic extraction by LLMs, aiming instead to directly quantify the information gain between nodes through the native document feature space\. To this end, we designed a concise edge weight criterion, $\\cos\\theta \\cdot \\sin\\theta$, which naturally maps the trade\-off between relevance and novelty into a geometric measurement of directional consistency and orthogonality in the vector space, thereby driving the token\-free topological construction of the graph\. Furthermore, we introduce a topological penalty to suppress the excessive connectivity of high\-frequency hubs, forcing the transient diffusion process toward long\-tail peripheral nodes that carry critical indirect evidence\. Extensive experiments demonstrate that, while entirely eliminating graph construction costs, G$^3$RAG significantly outperforms state\-of\-the\-art Graph RAG baselines on complex multi\-hop QA benchmarks\.

## Skill\-SD: Skill\-Conditioned Self\-Distillation for Multi\-turn LLM Agents

**Authors:** Hao Wang; Guozhi Wang; Han Xiao; YufengZhou; Yue Pan; Jichao Wang; Ke Xu; yafei wen; XIAOHU RUAN; xiaoxin chen; Honggang Qi

**ID:** 151567 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZeThM3k7x0>) | [PDF](<https://openreview.net/pdf?id=ZeThM3k7x0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151567>)

Reinforcement learning \(RL\) has been widely used to train LLM agents for multi\-turn interactive tasks, but its sample efficiency is severely limited by sparse rewards and long horizons\. On\-policy self\-distillation \(OPSD\) alleviates this by providing dense token\-level supervision from a privileged teacher that has access to ground\-truth answers\. However, such fixed privileged information cannot capture the diverse valid strategies in agent tasks, and naively combining OPSD with RL often leads to training collapse\. To address these limitations, we introduce Skill\-SD, a framework that turns the agent's own trajectories into dynamic training\-only supervision\. Completed trajectories are summarized into compact natural language skills that describe successful behaviors, mistakes, and workflows\. These skills serve as dynamic privileged information conditioning only the teacher, while the student always acts under the plain task prompt and learns to internalize the guidance through distillation\. To stabilize the training, we derive an importance\-weighted reverse\-KL loss to provide gradient\-correct token\-level distillation, and dynamically synchronize the teacher with the improving student\. Experimental results on agentic benchmarks demonstrate that Skill\-SD substantially outperforms the standard RL baseline, improving both vanilla GRPO \(\+14\.0%/\+10\.9% on AppWorld/Sokoban\) and vanilla OPD \(\+42\.1%/\+40\.6%\)\.

## BitShift\-RoPE: Zero\-FLOP Relative Positional Encoding for Spiking Neural Network Transformers

**Authors:** Seung\-Kyu Hong; Sangheum Hwang; HYUK\-YOON KWON

**ID:** 150476 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hlVtSHax4T>) | [PDF](<https://openreview.net/pdf?id=hlVtSHax4T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150476>)

Spiking Neural Networks \(SNNs\) provide energy\-efficient computation by utilizing binary spike\-driven additions, but applying transformer architectures remains challenging due to the lack of an SNN\-compatible positional encoding \(PE\)\. Current PE methods either rely on floating\-point arithmetic, which destroys the fundamental binary nature of SNNs, or fail to accurately capture relative spatial distances\. To overcome this, we introduce Bit Shift Rotary Position Embedding \(BitShift\-RoPE\), the first relative PE framework that fully preserves the binary integrity of SNN queries and keys\. By replacing the floating\-point trigonometric rotations in standard RoPE with discrete cyclic\-shift operations via hardware memory\-pointer routing, our method achieves zero\-FLOP position encoding\. We analytically map multi\-scale exponential decay frequencies into integer shift steps and theoretically extend the formulation to 2D orthogonal spaces to capture complex spatial geometries\. Crucially, because the binary integrity of the queries and keys is strictly maintained, the subsequent attention calculations rely solely on sparse bitwise AND operations\. Our evaluations across time\-series forecasting \(avg $R^2$ 0\.758\), text classification \(69\.91\\% accuracy\), and image classification benchmarks \(84\.17\\% accuracy\) demonstrate that BitShift\-RoPE achieves state\-of\-the\-art performance while consuming the same energy as the vanilla SNN backbone \(0\.216 mJ/sample, identical to vanilla Spikformer\)\. The code is available at \\url\{https://anonymous\.4open\.science/r/Bit\\\_Shift\\\_RoPE\-16D2/\}\.

## Towards Generalist Graph\-Level Anomaly Detection

**Authors:** Junjun Pan; Yixin Liu; Yu Zheng; Fuyi Li; Alan Wee\-Chung Liew; Shirui Pan

**ID:** 155195 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7ZuZgfPSG4>) | [PDF](<https://openreview.net/pdf?id=7ZuZgfPSG4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155195>)

Graph\-level anomaly detection \(GLAD\) aims to identify graphs that deviate significantly from the majority and plays a crucial role in applications such as molecular analysis and fraud detection\. While recent advances have achieved competitive performance, existing approaches mainly follow a dataset\-specific paradigm, requiring substantial in\-domain data and training cost when applied to new application scenarios\. This limits their scalability and practicality in real\-world applications where labeled data is scarce and diverse domains are continuously emerging\. In this paper, we investigate the problem of generalist GLAD, which seeks to learn a single unified model capable of detecting anomalous graphs across multiple domains with minimal supervision on the target data\. This problem introduces key challenges, including learning transferable patterns from heterogeneous graph datasets and effective adaptation under limited supervision\. To address these challenges, we propose GenGLAD, a generalist GLAD approach that leverages discriminative subgraph extraction as the core mechanism to learn transferable anomaly knowledge and enable efficient adaptation to new domains\.  Specifically, GenGLAD employs a graph neural network\-based discriminative subgraph extraction model to learn the anomaly\-discriminative substructures that distinguish anomalous and normal graphs across diverse domains\. During the test\-time adaptation phase, multi\-dimensional discrepancies between the extracted subgraph and multi\-level contextual information are calculated to characterize anomalies from multiple perspectives\. For efficient adaptation, a lightweight scoring module is introduced to automatically decide the most informative signals, improving robustness against misleading patterns\. Extensive experiments on diverse benchmark datasets demonstrate that the proposed approach achieves strong performance, superior generalization ability, and improved data efficiency compared to existing methods\.

## Deep Learning\-based Algebraic Reynolds Stress Closures for RANS simulations of Turbulent Flows

**Authors:** Daniel Dehtyriov; Jonathan F\. MacArt; Justin Sirignano

**ID:** 151498 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aDNQ6nqqKm>) | [PDF](<https://openreview.net/pdf?id=aDNQ6nqqKm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151498>)

Turbulence is ubiquitous in engineering, yet direct simulation is prohibitively expensive\. The Reynolds\-averaged Navier\-Stokes \(RANS\) equations provide computational savings exceeding ten orders of magnitude but introduce unclosed terms requiring modelling \(the closure problem\)\. Existing machine\-learning \(ML\) closures suffer distribution shift when trained offline on high\-fidelity data, and ML models that bypass the governing equations often have limited capability to generalise\. We develop a physics\-derived deep learning closure for RANS, the Deep Algebraic Reynolds Stress Model \(DARSM\), which can be trained on one or two flow cases and generalise across an order of magnitude in Reynolds number, to unseen geometries, and across flow regimes\. A neural network maps flow invariants to empirical parameters in an implicit algebraic Reynolds stress equation, derived from the Reynolds stress transport equations under the weak\-equilibrium assumption, imposing significant physics\-based structure on the ML closure\. End\-to\-end optimisation through the governing PDEs and the coupled implicit closure eliminates distribution shift, but both unrolled and implicit automatic differentiation fail on the stiff coupled solver\. We derive adjoint equations that exploit the solver's implicit\-explicit structure to enable computationally efficient optimisation\. On the canonical square\-duct and periodic\-hill benchmarks, DARSM reduces test velocity error as compared to the baseline RANS by $2$\-$4\\times$ across Reynolds number, geometries, and flow regimes, with peak case\-level reductions of $12\\times$\. The model trained on attached, anisotropy\-dominated flows \(square duct\) accurately generalises without retraining to separated flows \(periodic hills\), a regime change in the underlying turbulence physics\. DARSM also outperforms five established ML methods: offline training, tensor\-basis neural networks, field\-inversion machine learning, DeepONets, and physics\-informed neural networks\.

## The Marauder’s Map: Bézier Manifolds Reveal Hidden Surfaces for Model Merging and Ensembling

**Authors:** Abhiram Iyer; Mark T Harnett; Sarthak Chandra

**ID:** 153780 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Iig20MDcGt>) | [PDF](<https://openreview.net/pdf?id=Iig20MDcGt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153780>)

Neural circuits are infamously more robust than their deep network counterparts\. Biology often explains this through degeneracy, where structurally distinct configurations support the same function\. Deep learning studies a parallel phenomenon through mode connectivity, which links same\-objective networks by low\-loss curves, sheets, or volumes\. Yet real biological systems undergo continual structural change, a more flexible form of degeneracy in which specialized circuits gradually adapt toward new competencies through localized changes while preserving existing function\. The analogous question in deep learning is harder than ordinary mode connectivity, asking whether many independently initialized models trained on distinct tasks can be connected by a high\-dimensional region of competent multi\-task solutions\. We introduce Nimbus, which learns a high\-dimensional Bézier manifold connecting N specialists, going beyond the one\-dimensional paths and two\-dimensional sheets of prior mode connectivity work\. A naive parameterization would scale combinatorially with N, but Nimbus requires only a small number of learned correction tensors shared per interaction order, showing that the connecting manifold has surprisingly low complexity yet supports multi\-task competencies\. The resulting manifold from Nimbus forms a navigable "Marauder's Map" connecting independently trained specialists through a shared geometry of competent solutions\. Across vision \(CIFAR\-100\) and language modeling \(five disjoint text domains\), Nimbus produces manifolds that are both functionally and locally weight\-flat\. Ensembles sampled from them degrade more gracefully than baselines under input and weight perturbations, with the largest gains in negative log\-likelihood and expected calibration error\. Beyond its empirical behavior, Nimbus supplies a deep learning interpretation of flexible degeneracy, recasting the connectivity between specialized circuits from a low\-dimensional path between distant solutions into a high\-dimensional volume of nearby ones\.

## Hadamard Representation: Scaffolding Performance Across Model\-free RL

**Authors:** Jacob Eeuwe Kooi; Zhao Yang; Mark Hoogendoorn; Vincent Francois\-Lavet

**ID:** 152185 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Uw6XLONJCr>) | [PDF](<https://openreview.net/pdf?id=Uw6XLONJCr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152185>)

Deep reinforcement learning agents progressively lose representational capacity during training: neurons become dormant, removing active capacity from the network, and effective rank collapses, leaving surviving neurons redundant\. Existing remedies such as periodic resets, and special neural network architectures, are largely algorithm\- or domain\-specific\. We propose a simple architectural fix, the Hadamard Representation \(HR\), which replaces a standard hidden layer with the element\-wise product of two independently parameterized layers\. HR operates through two complementary mechanisms\. First, it reduces the probability of a neuron becoming dormant, which is particularly valuable for continuously differentiable activations such as $\\tanh$: unlike dormant ReLU neurons, which are effectively pruned, saturated $\\tanh$ neurons silently corrupt downstream layers by turning their outgoing weights into fixed biases\. Second, independently of dormancy, the multiplicative structure captures richer feature interactions and increases effective rank without widening the layer\. We evaluate HR across five algorithms and three domains: DQN, PPO, and PQN on pixel\-based discrete\-action Atari, SimbaV2 on state\-based continuous control, and MR\.Q on visual continuous control\. HR consistently improves performance over the strong baselines without any hyperparameter tuning, and gains persist against parameter\-matched wider variants, ruling out parameter count as an alternative explanation\.

## ESENSC: A Polynomial\-Time Axiomatic Alternative to SHAP

**Authors:** Kazuhiro Hiraki; Shinichi Ishihara; Takumi Kongo; Junnosuke Shino

**ID:** 154335 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EOUyLpw8l7>) | [PDF](<https://openreview.net/pdf?id=EOUyLpw8l7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154335>)

We propose ESENSC, a computationally efficient and theoretically grounded alternative to SHAP\. ESENSC is a polynomial\-time attribution rule with a deterministic, closed\-form representation that satisfies the null\-player property and admits an axiomatic characterization based on efficiency, a restricted form of differential marginality, and explicit computational constraints\.  Empirically, ESENSC closely replicates the attribution patterns of exact SHAP by preserving its essential structural properties, while maintaining a fraction of the cost\. Across neural network and XGBoost models, it achieves lower deviation and higher rank agreement than widely used sampling\-based SHAP approximations\. While the computational cost of exact SHAP grows exponentially with the number of features, ESENSC scales linearly, enabling reliable feature attribution in regimes where exact SHAP is intractable\. These results demonstrate that ESENSC achieves near\-SHAP attribution accuracy while reducing computational complexity from exponential to linear in the number of features, providing a practical and theoretically rigorous alternative for feature attribution in high\-dimensional applications\.

## Zero\-Shot Instruction Following in RL via Structured LTL Representations

**Authors:** Mathias Jackermeier; Mattia Giuri; Jacques Cloete; Alessandro Abate

**ID:** 150080 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ksQQI405BZ>) | [PDF](<https://openreview.net/pdf?id=ksQQI405BZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150080>)

We study instruction following in multi\-task reinforcement learning, where an agent must zero\-shot execute novel tasks not seen during training\. In this setting, linear temporal logic \(LTL\) has been adopted as a powerful framework for specifying structured, temporally extended tasks\. While existing approaches successfully train generalist policies, they often struggle to effectively capture the rich logical and temporal structure inherent in LTL specifications\. In this work, we address these concerns with a novel approach to learn \*structured\* task representations that facilitate training and generalisation\. Our method conditions the policy on sequences of Boolean formulae constructed from a finite automaton of the task\. We propose a hierarchical neural architecture to encode the logical structure of these formulae, and introduce an attention mechanism that enables the policy to reason about future subgoals\. Experiments in a variety of complex domains demonstrate the strong generalisation capabilities and superior performance of our approach\.

## A mathematical theory of balancing relational generalization and memorization

**Authors:** Luke Cheng; Samuel Lippl

**ID:** 153152 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NU4GwTj57W>) | [PDF](<https://openreview.net/pdf?id=NU4GwTj57W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153152>)

Humans, animals, and modern machine learning models exhibit impressive abilities to learn complex behaviors and generalize these behaviors to unseen situations\. This ability requires us to learn rules and regularities that allow for such generalizations\. At the same time, in most complex environments, any rule will have its exceptions\. How do learning systems balance between learning general regularities and memorizing exceptions? We argue that a lack of task paradigms has hindered the study of this essential ability\. To address this gap, we introduce a novel task, transitive inference with exceptions, that tests for relational generalization and memorization of an exception to the relational rule\. We then analytically characterize the behavior of a simple, theoretically tractable model of neural network learning \(kernel ridge regression\) across a broad family of representations and task parameters\. We find that these models can balance between relational generalization and memorization, but unlike for transitive inference without an exception, successful generalization is sensitive to the specific representational geometry\. We explain why this task is more challenging mechanistically by drawing on our analytical theory\. Finally, we validate our theoretical insights in pretrained language models that are finetuned on ordered relations, finding that these models successfully generalize according to the transitive rule, but also make the kinds of systematic mistakes predicted by our theory\. Overall, our theory shows how learning systems can balance between relational generalization and memorization, explains how this can go wrong, and emphasizes the need for new task paradigms designed to probe this ability\.

## On the Instability and Stabilization of Blockwise Muon

**Authors:** Yuanshi Liu; Weicheng Lin; Boyuan Jiang; Xin Tao; Pengfei Wan; Cong Fang

**ID:** 154965 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9a90UHToab>) | [PDF](<https://openreview.net/pdf?id=9a90UHToab>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154965>)

Muon has become a competitive optimizer for large\-scale neural network training through matrix\-level orthogonalized updates, but its full\-matrix normalization can be expensive\. Blockwise Muon is an appealing low\-cost approximation: it normalizes matrix shards or small blocks independently, reducing computation and communication overhead while often achieving convergence close to full Muon\. However, in large\-step\-size and large\-model regimes, Blockwise Muon can suffer from degraded convergence\. We attribute this to cross\-block amplification: independent per\-block orthogonalizations can collectively amplify updates along certain directions, particularly those governing the effective step size\. Motivated by this viewpoint, we accordingly propose \\textsc\{ACME\}: \\textbf\{A\}mplification\-\\textbf\{C\}orrected \\textbf\{M\}uon for \\textbf\{E\}ffective step\-size recovery\. \\textsc\{ACME\} applies a rotational correction so that the directions controlling the effective step size are no longer affected by cross\-block amplification\. Experiments on language\-model pretraining show that, across a range of training settings, \\textsc\{ACME\} achieves convergence nearly indistinguishable from full Muon while retaining the efficiency advantages of Blockwise Muon\.

## LITE: A Lightweight Lazy Sampler for Efficient SGD

**Authors:** Amir Daghestani; Mikael Johansson

**ID:** 154582 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CVmeicsRSC>) | [PDF](<https://openreview.net/pdf?id=CVmeicsRSC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154582>)

Importance sampling provides an elegant variance\-minimization principle for stochastic optimization: sampling examples proportional to their gradient norms yields a minimum\-variance gradient estimator\. However, in modern deep learning, importance sampling often fails to outperform uniform sampling once proxy\-computation cost, stale scores, and fair update budgets are accounted for\. We propose LITE, a lightweight lazy sampler for practical importance sampling\. LITE maintains inexpensive proxy scores, updates them only periodically, smooths them across refreshes, and converts them into sampling probabilities through a temperature rule that prevents over\-concentration\. When proxy scores are informative, LITE prioritizes high\-impact examples; when they are noisy or stale, the sampling distribution moves back toward uniform\. We analyze the resulting variance reduction in terms of proxy quality, temporal drift, and temperature, yielding an explicit condition for when LITE improves over uniform sampling\. Experiments under matched update budgets and end\-to\-end wall\-clock accounting show that LITE is competitive with or better than uniform sampling across vision, text, and 3D benchmarks, with the clearest gains in scarce\-budget and imbalanced regimes\.

## Understanding Gradient Orthogonalization for Deep Learning via Non\-Euclidean Trust\-Region Optimization

**Authors:** Dmitry Kovalev

**ID:** 151473 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aLYeHG7ncX>) | [PDF](<https://openreview.net/pdf?id=aLYeHG7ncX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151473>)

Optimization with matrix gradient orthogonalization has recently demonstrated impressive results in the training of deep neural networks \(Jordan et al\., 2024; Liu et al\., 2025\)\. In this paper, we provide a theoretical analysis of this approach\. In particular, we show that the orthogonalized gradient method can be seen as a first\-order trust\-region optimization method, where the trust\-region is defined in terms of the matrix spectral norm\. Motivated by this observation, we develop the stochastic non\-Euclidean trust\-region gradient method with momentum, which recovers the Muon optimizer \(Jordan et al\., 2024\) as a special case, along with normalized SGD and signSGD with momentum \(Cutkosky and Mehta, 2020; Sun et al\., 2023\)\. In addition, we prove state\-of\-the\-art convergence results for the proposed algorithm in a range of scenarios, which involve arbitrary non\-Euclidean norms, constrained and composite problems, and non\-convex, star\-convex, first\- and second\-order smooth functions\. Finally, our theoretical findings provide an explanation for several practical observations, including the practical superiority of Muon compared to the Orthogonal\-SGDM algorithm of Tuddenham et al\. \(2022\) and the importance of weight decay in the training of large\-scale language models\.

## Neural Slack Variables for Shape Constraints

**Authors:** Ruben Wiedemann; Antoine Jacquier; Lukas Gonon

**ID:** 150516 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hWUODLVAFM>) | [PDF](<https://openreview.net/pdf?id=hWUODLVAFM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150516>)

Enforcing functional inequality constraints such as monotonicity and convexity in neural networks is a fundamental challenge in many industrial and scientific applications\. Classical one\-sided penalty methods, just like primal\-dual methods gated by complementary slackness, provide gradients only at violated locations, resulting in fragile constraint satisfaction\. Hard architectural constraints, on the other hand, cover only the simplest cases and tend to compromise the network's expressive power\. We introduce neural slack variables , a deep learning\-native primal\-side approach that converts constraint enforcement into a two\-sided regression problem by coupling the primary network with a jointly learned auxiliary network\. The auxiliary network serves as a valid target for the primary network's constraint quantities, inducing feasibility and regularity\. Theoretically, neural slack variables can be understood as a variable splitting method with parametrized variable projection\. Neural slack variables close the gap to hard constraints on monotonicity and low\-dimensional convexity, and maintain effectiveness on nonlinear constraints in neural barrier certificates and no\-arbitrage volatility surfaces\.

## Normative Networks for Source Separation via Local Plasticity and Dendritic Computation

**Authors:** Bariscan Bozkurt; Efe Ali Gorguner; Francesco Innocenti; Rafal Bogacz

**ID:** 148835 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=umx56IGgGL>) | [PDF](<https://openreview.net/pdf?id=umx56IGgGL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148835>)

Blind source separation \(BSS\) is a natural framework for studying how latent causes may be recovered from sensory mixtures, but deriving online and biologically plausible algorithms for structured \(i\.e\., constrained to known domains\) and potentially correlated sources remains challenging\. Recent work has derived neural networks for BSS from maximization of an entropy measure, yet its online implementations involve complex and nonlocal recurrent dynamics\. Motivated by this perspective, we propose Predictive Entropy Maximization, which achieves competitive performance in BSS, using only local weight updates\. The method employs a close approximation of an entropy measure, yielding an objective function with easily interpretable components\. Minimizing this objective leads to a predictive neural architecture in which feedforward synapses follow an error\-driven rule \(that can be realized through dendritic mechanisms\), lateral inhibitory connections are learned with local Hebbian plasticity, and source\-domain constraints are enforced through simple output nonlinearities\. We derive explicit spectral bounds on the surrogate error, characterizing when the approximation is accurate\. Empirically, Predictive Entropy Maximization remains robust under increasing source correlation and observation noise, outperforms biologically plausible algorithms that rely on stronger independence or decorrelation assumptions, and remains competitive with exact determinant\- and correlative\-information\-based baselines\. These results show how local plasticity and adaptive lateral inhibition can emerge from maximizing a regularized second\-order entropy over structured source domains\.

## We Need to Rethink Benchmarking in Anomaly Detection

**Authors:** Philipp Röchner; Simon Klüttermann; Kevin Kammler; Franz Rothlauf; Emmanuel Müller; Daniel Schlör

**ID:** 140001 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x04YwfpsQV>) | [PDF](<https://openreview.net/pdf?id=x04YwfpsQV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140001>)

Despite the continuous proposal of new anomaly detection algorithms and extensive benchmarking efforts, progress seems to stagnate, with only minor performance differences between established baselines and new algorithms\.  In this position paper, we argue that this stagnation is due to limitations in how we evaluate anomaly detection algorithms\.  In current benchmarks, a trivial algorithm that only checks for extreme values in individual features performs competitively with state\-of\-the\-art deep learning methods, despite failing on simple cases such as anomalies within an annulus of normal points\. Moreover, existing benchmarks do not adequately reflect the diversity of anomaly detection applications, making it difficult for practitioners to reliably select algorithms for their applications\. Consequently, we need to rethink benchmarking in anomaly detection\.  In our opinion, anomaly detection should be studied using scenarios that group applications sharing relevant characteristics, defined through a common taxonomy\. Benchmarking within scenarios enables scenario\-specific choices for preprocessing, metrics, and model selection, clarifying which advances transfer across similar applications and providing practitioners with reliable guidance for their specific contexts\.

## Hyperparameter Transfer for Dense Associative Memories

**Authors:** Roi Holtzman; Dmitry Krotov; Boris Hanin

**ID:** 150814 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=f9niZbxnAU>) | [PDF](<https://openreview.net/pdf?id=f9niZbxnAU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150814>)

Dense Associative Memory \(DenseAM\) is a promising family of AI architectures that is represented by a neural network performing temporal dynamics on an energy landscape\. While hyperparameter transfer methods are well\-studied for feed\-forward networks, these methods have not been developed for settings in which weights are shared across layers and within the layer, which is common in DenseAMs\. Additionally, DenseAMs utilize rapidly peaking activation functions that are rarely used in feed\-forward architectures\. The confluence of these aspects makes DenseAM a challenging framework for using existing methods for hyperparameter transfer\. Our work initiates the development of hyperparameter transfer methods for this class of models\. We derive explicit prescriptions for how the hyperparameters tuned on small models can be transferred to models trained at scale\. We demonstrate excellent agreement between these theoretical findings and empirical results\.

## Consistent Geometric Deep Learning via Hilbert Bundles and Cellular Sheaves

**Authors:** Kartik Tandon; Julian Gould; Tanishq Bhatia; Francesca Dominici; Alejandro Ribeiro; Claudio Battiloro

**ID:** 153249 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MdvTIPEaIr>) | [PDF](<https://openreview.net/pdf?id=MdvTIPEaIr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153249>)

Modern deep learning architectures increasingly contend with sophisticated signals that are natively infinite\-dimensional, such as time series, probability distributions, or operators, and are defined over irregular domains\. Yet, a unified learning theory for these settings has been lacking\. To start addressing this gap, we introduce a novel convolutional learning framework for possibly infinite\-dimensional signals supported on a manifold\. Namely, we use the connection Laplacian associated with a Hilbert bundle as a convolutional operator, and we derive filters and neural networks, dubbed as \\textit\{HilbNets\}\. We make HilbNets and, more generally, the convolution operation, implementable via a two\-stage sampling procedure\. First, we show that sampling the manifold induces a Hilbert Cellular Sheaf, a generalized graph structure with Hilbert feature spaces and edge\-wise coupling rules, and we prove that its sheaf Laplacian converges in probability to the underlying connection Laplacian as the sampling density increases\. Notably, this result is a generalization to the infinite\-dimensional bundle setting of the Belkin &amp;amp; Niyogi \\cite\{BELKIN20081289\} convergence result for the graph Laplacian to the manifold Laplacian, a theoretical cornerstone of geometric learning methods\. Second, we discretize the signals and prove that the discretized \(implementable\) HilbNets converge to the underlying continuous architectures and are transferable across different samplings of the same bundle, providing consistency for learning\. Finally, we validate our framework on synthetic and real\-world tasks\. Overall, our results broaden the scope of geometric learning as a whole by lifting classical Laplacian\-based frameworks to settings where the signal at each point lives in its own Hilbert space\.

## Learning to Discover Iterative Spectral Algorithms

**Authors:** Zihang Liu; Oleg Balabanov; Yaoqing Yang; Michael Mahoney

**ID:** 148403 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y7Sb7T9UI9>) | [PDF](<https://openreview.net/pdf?id=y7Sb7T9UI9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148403>)

We introduce AutoSpec , a neural network framework for discovering iterative spectral algorithms for large\-scale numerical linear algebra and numerical optimization\. Our self\-supervised models adapt to input operators using coarse spectral information \(e\.g\., eigenvalue estimates and residual norms\), and predict recurrence coefficients for computing or applying a matrix polynomial tailored to a downstream task\. The effectiveness of AutoSpec relies on three ingredients: an architecture whose inference pass implements short, executable numerical linear algebra recurrences; efficient training on small synthetic problems with transfer to large\-scale real\-world operators; and task\-defined objectives that enforce the desired approximation or preconditioning behavior across the range of spectral profiles represented in the training set\. We apply AutoSpec to discovering algorithms for representative tasks on spd matrices: accelerating matrix function approximation; accelerating sparse linear solvers; and spectral filtering/preconditioning for eigenvalue computations\. On real\-world matrices, the learned procedures deliver orders\-of\-magnitude improvements in accuracy and/or reductions in iteration count, relative to basic baselines\. We find clear connections to classical theory: the induced polynomials may exhibit equioscillation behavior characteristic of Chebyshev polynomial approximation\.

## BLANP: Memory\-Efficient Backpropagation\-Free Local Training via Antithetic Node Perturbation

**Authors:** Mehrzad Karamimanesh; Marcel A\. J\. van Gerven; Mahyar Shahsavari

**ID:** 155644 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=446EXQoY2A>) | [PDF](<https://openreview.net/pdf?id=446EXQoY2A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155644>)

Backpropagation imposes fundamental constraints on training neural networks\. It requires the retention of all forward activations until the corresponding backward pass completes, thereby preventing pipelined execution across layers\. This work introduces Backpropagation\-Free Local Antithetic Node Perturbation \(BLANP\), a fully local training framework that eliminates gradient propagation across layer boundaries while requiring no negative samples\. Each layer updates its parameters from locally available signals through a zeroth\-order antithetic perturbation estimator\. To stabilize learning, the estimator is evaluated against a frozen exponential moving average critic, decoupling backbone updates from the concurrently evolving local classifiers\. The antithetic perturbation formulation cancels even\-order bias terms in the gradient estimate, yielding a first\-order accurate update from two forward passes alone\. A companion variant, BLANP\-Exact, replaces the perturbation estimator with exact yet local gradients under a strict stop\-gradient constraint, preserving a memory footprint that does not grow with network depth while recovering gradient fidelity\. Experiments on MNIST, Fashion\-MNIST, and CIFAR\-10 across MLP and convolutional architectures show that BLANP matches backpropagation on simple benchmarks\. On the more challenging CIFAR\-10, BLANP\-Exact surpasses the best prior local learning method by 2\.40% with a simpler architecture, and trails an identical backpropagation baseline by only 3\.90%\. The code is available at https://github\.com/anonymous/BLANP\.

## EENAS: Zero\-Shot Energy\-Efficiency\-Aware Neural Architecture Search

**Authors:** Zeyu Yang; Wes Armour

**ID:** 150046 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lC17cquUtn>) | [PDF](<https://openreview.net/pdf?id=lC17cquUtn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150046>)

Despite the critical need for sustainable deep learning, model energy efficiency remains largely neglected in Hardware\-Aware Neural Architecture Search \(HW\-NAS\)\. Discovering energy\-efficient models is severely bottlenecked by costly on\-device measurements and the brittleness of training\-free accuracy proxies, which often yield unbalanced "glass cannon" architectures\. We propose Energy\-Efficient Neural Architecture Search \(EENAS\), a strictly zero\-shot HW\-NAS framework\. EENAS introduces a PCA\-based anomaly router that dispatches tasks to decision trees or tabular transformers, achieving &lt;10\\% MAPE zero\-shot energy prediction on entirely unseen GPUs\. Simultaneously, we robustly estimate accuracy by ensembling training\-free proxies via a novel Log Z\-score aggregation\. Combining these predictors unlocks Absolute Hardware Bounding, discovering Pareto\-optimal architectures for strict energy budgets entirely offline in under 30 minutes\. Evaluated on ImageNet\-1K, our models achieve 40\\% less energy consumption at comparable accuracy, or a 2\.5\\% accuracy improvement under the same energy budget compared to efficient baselines\.

## Learning Compositional Latent Structure with Vector Networks

**Authors:** Niclas Pokel; Benjamin F\. Grewe

**ID:** 154634 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C8agNRzT7b>) | [PDF](<https://openreview.net/pdf?id=C8agNRzT7b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154634>)

Deep networks are powerful function approximators, but they typically store many different computations in shared weight matrices, making it difficult to selectively reuse or adapt parts of them when a familiar structure appears in novel combinations\. We introduce the Vector Network \(VN\), a hierarchical recurrent architecture in which each layer replaces a fixed weight matrix with a library of reusable rank\-1 weight atoms\. For each input, VN minimizes a layer\-local energy to infer a sparse set of active weight atoms and their coefficients, jointly constrained by bottom\-up input reconstruction and top\-down feedback consistency\. These weight atom coefficients then compose an input\-specific low\-rank weight matrix for that sample\. After convergence, slow learning updates only the selected weight atoms through local residual signals scaled by the inferred coefficients\. We evaluate VN on four compositional benchmarks spanning 1D signals, 2D spatial decoding, N\-body dynamics, and compositional MNIST\. VN matches strong baselines in distribution while often achieving out\-of\-distribution error about an order of magnitude lower when familiar factors must be recombined in novel ways\. Vector networks thus make compositional generalization a structural property of the architecture and inference process rather than a brittle byproduct of fitting many behaviors into one shared dense parameter substrate\.

## Layer Free\-Riding in Forward\-Forward Networks: Real, Repairable, but Not Accuracy\-Dominant

**Authors:** Amirhossein Yousefiramandi

**ID:** 152401 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TN0FvatX6A>) | [PDF](<https://openreview.net/pdf?id=TN0FvatX6A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152401>)

Forward\-Forward \(FF\) training allows each layer to learn from a local goodness criterion\. In cumulative\-goodness variants, however, later layers can inherit a task that earlier layers have already partially separated\. We formalize this phenomenon as layer free\-riding: under the softplus FF criterion, the class\-discrimination gradient reaching block $d$ decays exponentially with the positive margin accumulated by preceding blocks\. We then study three local remedies\-\-\-per\-block, hardness\-gated, and depth\-scaled\-\-\-that recover current\-layer separation measures without relying on backpropagated gradients\. On CIFAR\-10 and CIFAR\-100, these remedies dramatically improve layer\-separation statistics, with $4\\times$\-\-$45\\times$ gains in deeper layers, while changing accuracy by less than one percentage point for non\-degenerate training procedures\. Tiny ImageNet provides a tougher cross\-dataset check for our selected block\-wise configuration and reveals the same qualitative gap between layer\-health diagnostics and final accuracy\. Calibration experiments further show that architecture and augmentation choices have a larger effect on final accuracy than the training\-rule modifications studied here\. Cumulative free\-riding is therefore a real and repairable optimization pathology\. Nonetheless, for the FF training rules, architectures, and datasets we study, it is not the dominant factor limiting achievable accuracy\.

## Filtered\-Trace Online Variational Training for Probabilistic Spiking Neural Networks

**Authors:** Yaokun Wang; Tiantian Xiao; Hongyan Ding; Zhi Yan

**ID:** 153422 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LRJMHwjMmy>) | [PDF](<https://openreview.net/pdf?id=LRJMHwjMmy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153422>)

Probabilistic spiking neural networks \(SNNs\) model spike trains as temporal point processes and provide a principled framework for learning with latent spikes\. Recent differentiable point\-process methods enable path\-wise variational learning, but their training still relies on full\-sequence backpropagation through time \(BPTT\), leading to memory costs that grow with the temporal horizon\. In this paper, we develop an online variational training framework for probabilistic SNNs based on discrete\-time spike response model dynamics\. By representing synaptic history with finite\-dimensional Markovian traces, our method updates both generative and variational parameters without storing the full temporal computation graph\. To handle future\-dependent credit assignment from recurrent spike histories, we introduce a horizon\-$R$ family of online estimators\. Theoretically, we show that the truncation\-induced bias decays exponentially with $R$ under the SRM kernel\-decay condition\. Synthetic experiments validate the predicted horizon\-dependent behavior and bias decay, while N\-MNIST experiments show competitive classification accuracy and avoid the sequence\-length\-dependent memory growth of BPTT\.

## Early Detection of Backbone Divergence via Neighborhood Structure in Learned Embeddings

**Authors:** Yiming Zhang; Reza Hassanpour; Georgi Gaydadjiev

**ID:** 155846 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2T2Cs2OHk1>) | [PDF](<https://openreview.net/pdf?id=2T2Cs2OHk1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155846>)

Neural network training is typically monitored through loss and accuracy curves, but these quantities do not directly reveal when the backbone begins to encode training and test data differently\. A train\-test negative log\-likelihood \(NLL\) gap shows probabilistic separation between training and test examples, but it does not reveal whether this separation is present in the backbone geometry\. We introduce the Volume Ratio Test \(VRT\), a permutation\-based two\-sample test for l2\-normalized backbone embeddings that compares local angular neighborhood structure on the unit hypersphere\. VRT converts k\-nearest\-neighbor angles into spherical\-cap log\-volume spacings and requires no kernel bandwidth selection or learned discriminator\. Across 14 model configurations spanning embedding dimension D = 32 to D = 2,048, VRT matches or precedes the earliest main baseline on sustained backbone divergence\. In several CIFAR\-10 ResNet settings, VRT is the only method among MMD, MMDAgg, Energy Distance, and C2ST to detect sustained backbone divergence\. When these baselines lag, VRT leads them by 25\-60 epochs\. Additional nearest\-neighbor methods show that Schilling and Henze either reject 16\-60 epochs later or remain null where VRT rejects\. On ResNet\-50/CIFAR\-100, VRT first rejects at epoch 61, whereas MMD, MMDAgg, and C2ST first reject at epoch 121\. On this model, the train\-test NLL gap is already 0\.563 at epoch 62 and never falls below this value\. More generally, sustained VRT rejection is accompanied by persistent NLL separation, but large NLL gaps can occur without VRT rejection\. VRT therefore distinguishes train\-\-test separation in NLL from backbone\-geometric divergence\.

## A Free Lunch in LLM Compression: Revisiting Retraining after Pruning

**Authors:** Moritz Wagner; Christophe Roux; Max Zimmer; Sebastian Pokutta

**ID:** 150765 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fXCIZretcP>) | [PDF](<https://openreview.net/pdf?id=fXCIZretcP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150765>)

Post\-training pruning can substantially reduce LLM inference costs, but it often degrades quality unless the remaining weights are adapted\. Since global retraining is expensive at LLM scale, recent work has largely focused on increasingly sophisticated pruning criteria that aim to select better sparsity patterns without adaptation\. We revisit this trade\-off through local reconstruction: after pruning, we adapt one subset of the model parameters at a time on a calibration set, training it to match the corresponding intermediate activations of the dense model\. We evaluate local reconstruction across model families and scales, up to 72B parameters, and establish three main findings\. First, local reconstruction is an effective adaptation mechanism for LLMs: it matches post\-pruning retraining while using over an order of magnitude less data and compute, even when using PEFT techniques\. Second, reconstruction exhibits a broad "free\-lunch" regime in granularity, i\.e\., the reconstruction parameter window: as long as the reconstructed region contains at least a nonlinear submodule, final quality is largely insensitive to the window size, allowing granularity to be chosen primarily based on memory constraints\. In contrast, reconstructing individual matrices, despite being the natural approach often proposed in the literature, consistently underperforms, as small matrix\-level errors accumulate into larger activation drift\. Lastly, reconstruction reduces the relative importance of the pruning criterion: performance gaps between sophisticated criteria and simple baselines shrink with model scale, making simple methods competitive again\. Overall, our results challenge the prevailing view that post\-pruning adaptation is impractical for LLMs\.

## OrthoReg: Orthogonal Regularization for Hybrid Symbolic\-Neural Dynamical Systems

**Authors:** Till Richter; Niki Kilbertus

**ID:** 154438 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DXi8r1Jvin>) | [PDF](<https://openreview.net/pdf?id=DXi8r1Jvin>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154438>)

Dynamical systems are fundamental to modeling the natural world, yet modeling them involves a persistent trade\-off:  manually prescribed mechanistic models are interpretable by design but often overly simplistic and misspecified;  in contrast, flexible data\-driven neural methods lack physical insight\.  Hybrid modeling aims for the best of both worlds by combining a prescribed or symbolic, physics\-based component with a flexible neural network\.  A critical challenge, however, is that the neural component may relearn mechanistic parts, yielding redundant and uninterpretable models, especially when the symbolic structure itself is discovered from data\.  Existing methods based on standard $L^2$ regularization rely on a projection argument that breaks when the symbolic component is learned through sparse discovery, allowing the neural augmentation to overlap with symbolic structure\. We introduce \*\*OrthoReg\*\* \(Orthogonal Regularization\), which directly penalizes overlap between the symbolic and neural components, preventing symbolic structure from being absorbed by the neural residual\.  This yields a complementary decomposition:  the symbolic part captures what the library can express, and the neural part captures what remains\.  On benchmark dynamical systems with partial library mismatch, OrthoReg improves symbolic recovery and out\-of\-distribution behavior\.

## Casper: A Projection\-Based Neurosymbolic Layer for Scalable &amp; Guaranteed Constraint Satisfaction

**Authors:** Lohith Konathala; Luca Andolfi; Eleonora Giunchiglia

**ID:** 149782 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nKVmBxaagL>) | [PDF](<https://openreview.net/pdf?id=nKVmBxaagL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149782>)

Many real\-world problems demand exact constraint satisfaction to be meaningfully solved, yet existing neurosymbolic methods face a stark trade\-off: those that guarantee satisfaction fail to scale, while those that scale must resort to approximation\. Meanwhile, traditional deep learning approaches offer no satisfaction guarantees at all\. In this paper, we propose Casper, a neurosymbolic layer that simultaneously \(i\) guarantees constraint satisfaction, \(ii\) scales at inference time, \(iii\) is fully automated, requiring no problem\-specific engineering, and \(iv\) is fully differentiable, making it composable with any neural predictor both at training and at inference time\. Casper casts constraint satisfaction as a closed\-form Euclidean projection onto the constraint\-feasible region, computable in a single forward pass\. Experiments across MNIST arithmetic \(up to 1024 digits\), Sudoku solving, and Warcraft pathfinding show that Casper is the only method that produces guaranteed\-valid outputs at scale: on 30×30 Warcraft grids, exact baselines time out and approximate ones produce valid paths less than 7% of the time, while Casper produces them 100% of the time\.

## Weight Space Learning needs to unify benchmarking\! A taxonomy of evaluation practices

**Authors:** Tobias Ettling; Damian Falk; Aron Asefaw; Léo Meynent; Konstantinos Tzevelekakis; Zehong Wang; Kai Wang; Boris Knyazev; Haggai Maron; Damian Borth

**ID:** 140014 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=r2QmG8OjJ9>) | [PDF](<https://openreview.net/pdf?id=r2QmG8OjJ9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140014>)

Weight\-space learning \(WSL\) is a new branch of machine learning research that defines the observation space of a learning model over a dataset of neural network parameters\. This position paper argues that the recently established community around WSL research needs to unify benchmarking practices, as the current benchmarking landscape is fragmented, obscuring progress assessment within the field\. Frequent claims of novelty \(often tied to new downstream tasks\) and evaluations on divergent model populations \(datasets in WSL\) make systematic comparison difficult\. We reveal this fragmentation through a structured literature analysis and argue for more consistent and comparable evaluation standards across methods\.

## The limbic navigation system as a hierarchical RNN

**Authors:** Zilong Ji; Huiwen Zhang; Krishna Gorantla; Neil Burgess

**ID:** 154055 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GYHjzo1bhV>) | [PDF](<https://openreview.net/pdf?id=GYHjzo1bhV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154055>)

Path\-integration\-trained recurrent neural networks \(RNNs\) can reproduce grid\-like and head\-direction\-like representations, but most existing models rely on low\-dimensional velocity inputs and do not capture the hierarchical organisation of the brain's self\-localisation circuit\. We introduce a hierarchical recurrent neural network \(HRNN\) that separately processes angular velocity and linear speed to perform simultaneous angular and positional path integration\. Trained on these tasks, the HRNN generalises to longer timescales than seen during training and develops neural response properties resembling all the key cell types: angular velocity cells, head direction cells, speed cells, conjunctive and pure grid cells\. The learned circuit also recovers key motifs of the navigation system, including attractor dynamics and asymmetric connectivity patterns\. Perturbation analyses reveal functional information flow across the hierarchy, consistent with experimental observations\. Finally, introducing theta\-paced mutual inhibition between two learned angular\-velocity subpopulations enables the HRNN to reproduce the bidirectional theta sweeps observed in empirical data\. These results establish hierarchical task\-driven RNNs as a biologically interpretable framework for linking neural representations, circuit motifs, and population dynamics in spatial navigation, while enabling targeted in silico perturbations and the generation of experimentally testable predictions\.

## Spiking neural network initialization for scale\-invariant maximization of entropy

**Authors:** Reinier W Vos; Aurora Micheli; Nergis Tomen; Christophe De Wagter; Jan van Gemert; Sander Bohte; Guido de Croon

**ID:** 154218 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FKAzoZp21M>) | [PDF](<https://openreview.net/pdf?id=FKAzoZp21M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154218>)

Parameter initialization shapes training dynamics, convergence, and performance in neural networks\. In spiking neural networks \(SNNs\), analytical initialization is complicated by three additional mechanisms—binary spike outputs, temporal recurrence \(leak\), and reset\-induced drops in membrane potential—which together suppress activity propagation: \(1\) over time, where recurrence and reset reduce individual neurons' firing rate, and \(2\) across depth, where deficits in upstream activity compromise downstream layers, known as spike\-rate collapse\. Prior initialization methods address only subsets of these challenges\. We derive closed\-form weight and bias distributions for initialization that jointly account for temporal recurrence, refractory reset, and signal propagation across depth\. The method is data\-agnostic: it requires only the architecture and neuron hyperparameters\. Our derivation centers around a bias correction that yields stationary firing rates and membrane variance, with a principled default spike probability of $p = 0\.5$ that maximizes per\-neuron Bernoulli entropy—counteracting dead neurons \($p \\approx 0$\) and saturated neurons \($p \\approx 1$\) at initialization\. In controlled simulations across 30 layers, it maintains target firing rates and membrane variance at the individual\-neuron level, unlike alternatives tested\. Across UEA multivariate time\-series classification, neuromorphic classification, and continuous\-control reinforcement learning, our SNNs rank first in every paradigm without per\-paradigm tuning\.

## Cluster with Auctions for Vector Search

**Authors:** Swann BESSA; Pierre Fernandez; Gergely Szilvasy; Matthijs Douze; Herve Jegou

**ID:** 153334 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M4uXVIjfK7>) | [PDF](<https://openreview.net/pdf?id=M4uXVIjfK7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153334>)

Large\-scale approximate nearest neighbor search commonly relies on partitions for indexing: database vectors are partitioned into clusters, and for each query a probing function selects the clusters to be scanned\. The query probing function and the database partition are rarely treated as separate entities: most techniques assign queries with the same assignment function as the database vectors, which is suboptimal especially when database and query distributions differ\. This paper introduces CwA \(Cluster with Auctions\), which addresses this limitation by jointly learning a balanced database partition and a neural probing function\. CwA optimizes search performance directly for the query distribution\. It minimizes its objective by alternating two steps: \(i\) gradient descent on the neural network of the probing function, and \(ii\) a large\-scale combinatorial optimization of the cluster assignment for the database vectors\. We solve the latter with a parallelizable auction algorithm that balances the partition by design\. To further scale CwA, we extend the method to a Cartesian product of clusters that increases the partition’s granularity\. When database and query distributions differ, CwA achieves up to 4\.7$\\times$ throughput over the state of the art at equal recall\. In the in\-distribution \(ID\) setting, even a simple linear probing function trained with CwA outperforms competing deep neural methods\.

## A Scalable Nonparametric Continuous\-Time Survival Model through Numerical Quadrature

**Authors:** Chaeyeon Lee; Sehwan Kim; Hyungrok Do

**ID:** 151002 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dfT2nmqW27>) | [PDF](<https://openreview.net/pdf?id=dfT2nmqW27>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151002>)

Flexible continuous\-time survival modeling is critical for capturing complex temporal dynamics in high\-dimensional data; however, training such models remains challenging due to the intractable integral required for likelihood estimation\. We introduce QSurv, a scalable deep learning framework that enables nonparametric continuous\-time modeling without relying on time discretization or restrictive distributional assumptions\. We propose a training objective based on Gauss\-Legendre numerical quadrature, which approximates the cumulative hazard with high\-order accuracy while facilitating efficient end\-to\-end training via standard backpropagation\. Furthermore, to effectively capture non\-stationary dynamics in complex architectures, we introduce time\-conditioned low\-rank adaptation, a mechanism that conditions general neural backbones on time by dynamically modulating weights via low\-rank updates\. We provide theoretical analysis establishing approximation error bounds for cumulative\-hazard evaluation\. Comprehensive experiments across synthetic benchmarks, large\-scale real\-world tabular datasets, and high\-dimensional medical imaging tasks demonstrate that QSurv achieves competitive predictive performance with advantages in instantaneous hazard function estimation, enabling more interpretable characterization of time\-varying risk patterns\.

## A method to automatically discover symbolic local learning rules

**Authors:** Andrea Perin; Fabio Anselmi; Stephane Deny

**ID:** 150193 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k34hp1xwIt>) | [PDF](<https://openreview.net/pdf?id=k34hp1xwIt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150193>)

We present a general method for discovering symbolic local learning rules that can replace backpropagation, applicable, in principle, to any deep learning architecture and task\. The method automatically discovers local loss functions specific to each layer by \(1\) constructing a dictionary of monomials of local tensor variables, inspired by Penrose diagram notation, \(2\) regressing over coefficients weighting these monomials to build layerwise polynomial losses, whose gradients together minimize a target global loss\. We test the method on reconstruction, classification, and self\-supervised learning tasks using small multilayer networks on minimal datasets\. Across all tasks, the discovered rules induce non\-trivial interactions between layers that lead to significant reductions in the corresponding global losses, e\.g\. reaching classification accuracies comparable to backpropagation\. Furthermore, the method selects sparse combinations of trace monomials, finding local rules that are more interpretable than those generated by MLP\-based alternatives\. The potential implications of our method range from energy\-efficient deep learning to the discovery of biologically plausible learning mechanisms\.

## Learning Reusable Options by Decomposing Neural Policies

**Authors:** Parnian Behdin; Reza Abdollahzadeh; Kiarash Aghakasiri; Levi Lelis

**ID:** 151089 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d3ZwoIVzhT>) | [PDF](<https://openreview.net/pdf?id=d3ZwoIVzhT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151089>)

Options provide a natural form of behavioral abstraction in reinforcement learning, but discovering reusable options from trained neural policies remains difficult\. A trained policy may contain many useful behaviors that can be reused in downstream problems, yet the number of candidate subpolicies that a neural network can encode grows exponentially with the number of hidden units\. We propose a differentiable approach for extracting reusable options from neural policies\. Our key observation is that for piecewise\-linear neural networks, selecting a neural subprogram is equivalent to assigning each hidden unit one of three labels: inactive, active, or retained in the computation\. This yields a mask space over neural subprograms that can be searched with gradient\-based optimization\. We further show that reusable options can require default input parameters: neuron masks determine what computation is reused, while input masks determine how that computation is called\. Experiments in transfer settings with feedforward and recurrent policies show that the resulting options improve sample efficiency on downstream learning\.

## A General Filter\-Enhanced Approach to Smartphone Hyperspectral Imaging

**Authors:** Daniil Reutsky; Daniil Vladimirov; Yasin Mamedov; Georgy Perevozchikov; Egor I Ershov; Nancy Mehta; Radu Timofte

**ID:** 149649 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oV35NKGER4>) | [PDF](<https://openreview.net/pdf?id=oV35NKGER4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149649>)

Hyperspectral reconstruction from RGB imagery offers an affordable alternative to costly hyperspectral acquisition devices\. However, its accuracy is fundamentally constrained by the limited spectral resolution of standard RGB cameras\. In this paper, we propose new approach that leverage the multi\-camera systems integrated into most modern smartphones and enhance their capabilities by modulating their spectral response functions using carefully selected spectral filters, enabling a smartphone to capture richer spectral information\. We propose a neural network able to exploit auxiliary RGB images with diverse spectral characteristics, enabling more accurate hyperspectral reconstruction compared to conventional single\-image methods\. Training is supported by a newly collected dataset, Doomer, which consists of multiple misaligned RGB images alongside corresponding hyperspectral data\. Finally, our method generalizes across different smartphone devices through a easy to implement calibration procedure, ensuring practical applicability and scalability\.

## Quantizing With Randomized Hadamard Transforms: Efficient Heuristic Now Proven

**Authors:** Ran Ben\-Basat; William Kuszmaul; Michael Mitzenmacher; Amit Portnoy; Shay Vargaftik

**ID:** 149294 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rLkcrecPav>) | [PDF](<https://openreview.net/pdf?id=rLkcrecPav>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149294>)

Uniform random rotations \(URRs\) are a common preprocessing step in modern quantization approaches used for gradient compression, inference acceleration, KV\-cache compression, model weight quantization, and approximate nearest\-neighbor search in vector databases\. In practice, URRs are often replaced by randomized Hadamard transforms \(RHTs\), which preserve orthogonality while admitting fast implementations\. The remaining issue is the performance for worst\-case inputs\.   With a URR, each coordinate is individually distributed as a shifted beta distribution, which converges to a Gaussian distribution in high dimensions\.  Generally, one RHT is not suitable in the worst case, as individual coordinates can be far from these distributions\.   We show that after composing two RHTs on any $d$\-sized input vector, the marginal distribution of every fixed coordinate of the normalized rotated vector is within $\\mathcal O\(d^\{\-1/2\}\)$ of a standard Gaussian both in Kolmogorov distance and in $1$\-Wasserstein distance\. We then plug these bounds into the analyses of modern compression schemes, namely DRIVE and QUIC\-FL, and show that two RHTs achieve performance that asymptotically matches URRs\.   However, while two RHTs suffice for scalar quantization, they may be insufficient for Vector Quantization \(VQ\), which often requires weak correlation across fixed\-size blocks of coordinates \(as opposed to only marginal distribution convergence for single coordinates\)\. We prove that a composition of three RHTs leads to decaying coordinate covariance\. This ensures that any fixed, bounded, multi\-dimensional VQ codebook optimized for URRs has the same expected error when using three RHTs, up to an additive term that asymptotically vanishes with the dimension\.  Finally, because practical inputs are rarely adversarial, we propose a linear\-time $\\mathcal\{O\}\(d\)$ check on the input's moments to dynamically adapt the number of RHTs used at runtime to improve performance\.

## Lost in the Slots: Revisiting Object\-Centric Representations in the era of Foundation Models

**Authors:** Priyam Dey; Aditya Sahdev; Omkar M Kashyap; Venkatesh Babu Radhakrishnan

**ID:** 151025 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dWzde9p1jP>) | [PDF](<https://openreview.net/pdf?id=dWzde9p1jP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151025>)

Object\-centric representation learning \(OCL\) has been widely proposed as a principled solution to the binding problem in deep learning, promising improved compositionality, reasoning, and robustness\. However, its effectiveness in modern foundation model settings remains unclear\. In this work, we systematically evaluate whether explicit object\-centric \(OC\) representations meaningfully improve binding in pretrained foundation models\. Departing from prior studies, we assess OC representations in a realistic regime by pairing them with pretrained foundation LLMs and analyze their performance on diverse, open\-ended VQA and grounding benchmarks\. Our findings challenge the prevailing narrative: slot\-based OC representations consistently underperform standard dense patch\-based features across multiple benchmarks, including compositional reasoning and hallucination\-sensitive tasks\. To understand this behavior, we analyze the slot representations through the lens of core binding components, namely scene segregation and object representation,and uncover three key limitations: \(i\) \\textit\{inferior scene segregation\}, where slot assignments fail to cleanly disentangle objects compared to the implicit grouping already present in pretrained visual backbones; \(ii\) \\textit\{inherent information loss\} during slot encoding, which degrades downstream performance of VLMs despite adapting them to the resulting feature space of OC; and \(iii\) \\textit\{weak attribute encoding\}, where slots struggle to preserve fine\-grained properties such as category, color, and spatial position\. Further analysis reveals that these issues are not solely attributable to slot\-based learning: while dense patch\-based representations exhibit stronger binding, they too are imperfect\. This suggests that explicit object\-centric modeling, as currently instantiated, introduces bottlenecks that discard useful information without sufficiently improving structural reasoning\. Together, our results expose a fundamental disconnect between the theoretical appeal of OCL and its practical utility in the era of foundation models\. They point toward a need for rethinking binding, not as explicit object\-factorization alone, but as a balance between structure and information preservation, potentially through new mechanisms that retain the richness of dense representations while enabling more reliable compositional reasoning\.

## Timing Is All You Need: SpikeCore, Learnable Delays, and Gain Control for Neuromorphic Classification

**Authors:** Mohsen Kamelian Rad; Sotiris Moschoyiannis; Roman Bauer

**ID:** 151527 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a0D5EMqlKF>) | [PDF](<https://openreview.net/pdf?id=a0D5EMqlKF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151527>)

Spiking neural networks \(SNNs\) offer a compelling path to energy\-efficient, biologically plausible computation\. Yet, a persistent gap remains: fully spiking models are difficult to train and incompatible with standard deep learning frameworks, while ANN\-to\-SNN conversion and hybrid approaches sacrifice either biological plausibility or deployment efficiency\. We address this gap by introducing SpikeCore, a recurrent spiking unit designed to be natively compatible with ANN training frameworks, differentiable, gradient\-friendly, and composable within standard pipelines, while retaining event\-driven, spike\-based computation\. SpikeCore achieves this through learnable membrane decay and spike\-history\-dependent threshold adaptation, enabling rich temporal dynamics without surrogate gradient instability\. Building on SpikeCore, we present a full spatio\-temporal pipeline comprising: a two\-stage learnable temporal delay hierarchy motivated by differential retinal ganglion latency and axonal conduction delays; a Multi\-Branch Squeeze\-Excitation \(MBSE\) backbone that extracts spatial features at multiple scales with channel\-wise recalibration, using $11\.8\\times$ fewer parameters than equivalent residual architectures; and a Parameter\-Free Temporal Gain Control \(PFTGC\) module that modulates each channel's temporal response without added parameters\. Evaluated across five diverse benchmarks, the proposed architecture converges $5$\-\-$6\\times$ faster and requires $\{\\approx\}3\\times$ fewer timesteps than competitive baselines while matching or surpassing state\-of\-the\-art models on accuracy\.

## Beyond Modality Fusion: Deep Ensembles for Multimodal Classification

**Authors:** Ilya Burenko; Dmitry Vetrov

**ID:** 155113 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8Im8HCejDY>) | [PDF](<https://openreview.net/pdf?id=8Im8HCejDY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155113>)

In multimodal classification, late\-fusion approaches classify concatenated modality\-specific features extracted by unimodal neural networks\. When modality imbalance is pronounced, various regularization techniques have been proposed to balance the learning process and overcome the inferior performance of late\-fusion networks\. In contrast, this work demonstrates that multimodal data can be effectively classified without any explicit modality fusion, using deep ensembles of unimodal networks\. We systematically compare deep ensembles to late\-fusion networks at equal parameter count and show that ensembles consistently outperform state\-of\-the\-art late\-fusion methods designed to address modality imbalance\. This advantage also holds over intermediate\-fusion techniques we evaluated and over hybrid methods that combine unimodal and multimodal predictions\. We propose and empirically validate a method for selecting the number of models per modality in an ensemble, avoiding computationally expensive exhaustive search\. Under extreme modality imbalance and small ensemble sizes, the heuristic indicates that ensembles of unimodal models trained solely on the stronger modality are preferable; as the ensemble scales up, incorporating models from the weaker modality becomes beneficial\. Both predictions align with our empirical findings\. To systematically explore the challenges of optimizing multimodal models, we propose a synthetic multimodal framework that allows control over both the number of modalities and their predictive strength; our findings are consistent across synthetic and real\-world datasets\. Finally, by fitting scaling laws to bimodal datasets, we estimate the asymptotic performance of ensembles\.

## Self\-Distillation of Hidden Layers for Masked Self\-Supervised Representation Learning

**Authors:** Scott C\. Lowe; Anthony Fuller; Sageev Oore; Evan Shelhamer; Graham Taylor

**ID:** 150397 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iLR53jV2Bg>) | [PDF](<https://openreview.net/pdf?id=iLR53jV2Bg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150397>)

The landscape of self\-supervised learning \(SSL\) is currently dominated by generative approaches \(e\.g\. MAE\) that reconstruct raw low\-level data, and predictive approaches \(e\.g\. I\-JEPA\) that predict high\-level abstract embeddings\. While generative methods are stable due to their reliable training targets based on ground\-truth data, they are computationally inefficient for high\-redundancy modalities like imagery, and their training objective does not prioritize learning high\-level, conceptual features\. Conversely, predictive methods often suffer from training instability due to their reliance on the non\-stationary targets of final\-layer self\-distillation\. We introduce Bootleg, a method that bridges this divide by tasking the model with predicting latent representations from multiple hidden layers of a teacher\. This hierarchical objective forces the model to capture features at varying levels of abstraction simultaneously\. We demonstrate Bootleg significantly outperforms comparable baselines \(\+10% vs\. I\-JEPA\) on frozen probe classification of ImageNet\-1K, iNaturalist\-21, and VTAB, and semantic segmentation of ADE20K, Cityscapes, and COCO\-Stuff\.

## What are Key Factors for Updates in RL for LLM Reasoning?

**Authors:** Peidong Wang; Ruohan Wang; Xufang Luo; Jiahang Xu; Xiaocui Yang; Shi Feng; Yuqing Yang; Dongsheng Li

**ID:** 155041 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8sh5hzkCxK>) | [PDF](<https://openreview.net/pdf?id=8sh5hzkCxK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155041>)

Reinforcement Learning from Verifiable Rewards \(RLVR\) has emerged as a promising framework for enhancing the reasoning ability of large language models\. However, much of the existing work is guided by heuristic intuition, leading to divergent algorithmic choices, even contradictory ones that nevertheless report empirical gains\. To better understand this phenomenon, we conduct a theoretical analysis of RLVR updates\. Our study reveals that differences in off\-policy degree, determined by the number of gradient steps per rollout, substantially affect the distribution of importance sampling ratios and their clipping behavior, thereby altering which tokens dominate the update\. Building on this insight, we characterize gradient expectation as the central quantity governing update dynamics and analyze the roles of token probability, advantage, and importance sampling ratio\. Motivated by these findings, we propose Adaptive Clip Policy Optimization \(ACPO\), which adjusts clipping boundaries across token groups according to the empirical variance of their importance sampling ratios\. Experiments on 3B and 7B models across diverse reasoning benchmarks, spanning mathematical problem solving, tabular QA, and logic puzzles, demonstrate that ACPO outperforms strong baselines such as DAPO and CISPO\. These results demonstrate that principled, analysis\-driven approaches yield more robust and effective RLVR methods\. Code is available in: https://anonymous\.4open\.science/r/ACPO

## Deep Learning as Neural Low\-Degree Filtering: A Spectral Theory of Hierarchical Feature Learning

**Authors:** Yatin Dandi; Matteo Vilucchio; Luca Arnaboldi; Hugo Tabanelli; Florent Krzakala

**ID:** 151589 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZRp3Qmrbhu>) | [PDF](<https://openreview.net/pdf?id=ZRp3Qmrbhu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151589>)

Understanding how deep neural networks learn useful internal representations from data remains a central open problem in the theory of deep learning\. We introduce \\emph\{Neural Low\-Degree Filtering\} \(Neural LoFi\), a stylized limit of gradient\-based training in which hierarchical feature learning becomes an explicit iterative spectral procedure\. In this limit, the dynamics at each layer decouple: given the current representation, the next layer selects directions with maximal accessible low\-degree correlation to the label\. This yields a tractable surrogate mechanism for deep learning, together with a natural kernel\-space interpretation\. Neural LoFi provides a mathematically explicit framework for studying feature learning beyond the lazy regime\. It predicts how representations are selected layer by layer, and gives a concrete mechanism by which depth progressively constructs new features from old ones\. We complement the theory with mechanistic experiments on fully connected and convolutional architectures, showing that Neural LoFi improves over random\-feature baselines, recovers meaningful structured filters, and predicts representations aligned with early gradient\-descent feature discovery\.

## How deep is your network? Deep vs\. shallow learning of transfer operators

**Authors:** Mohammad Tabish; Benedict Leimkuhler; Stefan Klus

**ID:** 148363 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yRDDCROSCe>) | [PDF](<https://openreview.net/pdf?id=yRDDCROSCe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148363>)

We introduce RaNNDy, a randomized neural network framework for learning transfer operators and their spectral decompositions\. By fixing the weights of the hidden layers and training only the output layer, RaNNDy achieves significant reductions in computational costs\-\-\-often by two orders of magnitude\-\-\-with similar accuracy compared to state\-of\-the\-art deep learning methods\. The method is less sensitive to hyperparameter tuning and provides a closed\-form solution for the output layer weights that directly represent eigenfunctions of the learned operator\. Moreover, it is possible to estimate uncertainties associated with the computed spectral properties via ensemble learning\. We demonstrate the efficacy of the proposed approach using diverse benchmark problems, including stochastic dynamical systems and protein folding processes, highlighting the strengths but also weaknesses of RaNNDy\.

## TIDE: Asymmetric Neural Circuits for Stabilized Temporal Inhibitory\-Excitatory Dynamics

**Authors:** Alexander Kyuroson; Denis Kleyko; Marcus Liwicki

**ID:** 150963 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dwcrK8NHpm>) | [PDF](<https://openreview.net/pdf?id=dwcrK8NHpm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150963>)

Recent Continuous Thought Machine architecture decouples internal computation from external inputs via neural dynamics, but relies on multi\-layer perceptrons without stability guarantees\. We propose to model neural dynamics using asymmetric Excitatory\-Inhibitory \(E\-I\) networks, which can be stabilized via principles from network theory and can be expressed as energy\-based systems optimized through a game\-theoretic loss\. Building on this perspective, we introduce Temporal Inhibitory\-Excitatory Dynamic Engine \(TIDE\), a neuro\-inspired architecture that computes internal representations through neural dynamics stabilized by incorporating the Wilson\-Cowan dynamics and lateral inhibition\. TIDE balances biological realism by, for instance, using Hierarchical Receptive Fields and enforcing Dale's principle to ensure a realistic $80:20$ E\-I balance ratio with an end\-to\-end trainable architecture\. The aim of this paper is to introduce a new architecture that brings neuro\-inspired learning to the forefront\. We present proofs of convergence, stability, and complexity bounds, along with empirical ablation studies\. Overall, TIDE surpasses CTM with under $50$\\% of the training time and improves $\\texttt\{top\-1\}$ accuracy by an average of $\+1\.65$\\% on ImageNet under various perturbations\.

## From Cortical Synchronous Rhythm to Brain Inspired Learning Mechanism: An Oscillatory Spiking Neural Network with Time\-Delayed Coordination

**Authors:** Tingting Dan; Guorong Wu

**ID:** 151501 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aAslvH1QJK>) | [PDF](<https://openreview.net/pdf?id=aAslvH1QJK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151501>)

Human cognition emerges from coordinated spiking dynamics in distributed neural circuits, where information is encoded via both firing rates and precise spike timing determined by brain rhythms\. Inspired by this notion, we propose a brain\-inspired learning primitive in which cognition\-level neural synchrony emerges through iterative \*bottom\-up\* and \*top\-down\* interactions between micro\-scale dynamics of spiking neurons and a macro\-scale mechanism of oscillatory synchronization\. Specifically, we model each parcel \(e\.g\., a cortical region or an image pixel\) in the target system as a spiking neuron embedded in a predefined connectivity scaffold\.  Low\-level information is encoded in a spatiotemporal domain, where neurons are selectively grouped and fire spontaneously over time through self\-organized dynamics\. In the bottom\-up route, oscillatory synchronization is formed from past spiking activity accumulated over a finite memory window\. Since brain dynamics operate in a regime of partial and transient synchronization rather than global phase locking, we model oscillatory coordination using a time\-delayed synchronization formulation, which enables a top\-down modulation of heterogeneous neural spiking for a large\-scale distributed system\. Together, we devise a spiking\-by\-synchronization neural network \(S²\-Net\) that uses rhythmic timing as a control mechanism for efficient information processing\. Promising results have been achieved across a broad range of tasks, including neural activity decoding, energy\-efficient signal processing, temporal binding and semantic reasoning\.

## Linear\-time rule mining under formal guarantees

**Authors:** Jonathan Feldstein; Dominic Phillips; Efthymia Tsamoura

**ID:** 148416 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xyPT9RQdve>) | [PDF](<https://openreview.net/pdf?id=xyPT9RQdve>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148416>)

Probabilistic logical models are a core component of neurosymbolic AI and are important in their own right for tasks that require high explainability\. Unlike neural networks, logical theories that underlie the model are often handcrafted using domain expertise, making their development costly and prone to errors\. While there are algorithms that learn logical theories from data, they are generally prohibitively expensive, limiting their applicability in real\-world settings\. Here, we introduce precision and recall for logical rules and define their composition as rule utility \-\- a measure of the predictive power of logical theories that can be computed in linear time\. We then present SPECTRUM, a linear\-time framework for learning logical theories from relational data, that mines recurrent patterns in the data, and subsequently, using our utility measure, evaluates and ranks rules derived from these patterns\. Finally, we prove theoretical guarantees on the utility of the learnt logical theory\. As a result, we demonstrate across various tasks that SPECTRUM scales to larger datasets, often learning more accurate logical theories on CPUs in &lt; 1% of the runtime of SOTA neural network approaches on GPUs\.

## Predicting directional flexibility in proteins

**Authors:** Vsevolod Viliuga; Leif Seute; Matteo Tadiello; Nicolas Wolf; Frauke Gräter; Arne Elofsson

**ID:** 153165 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NNhS47oAVQ>) | [PDF](<https://openreview.net/pdf?id=NNhS47oAVQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153165>)

Predicting protein dynamics is a long\-standing problem in computational structural biology\. Often, protein function critically depends on local directed motions, such as hinge movements, catalytic loop rearrangements and domain reorientations, which can be characterized by directional flexibility and correlated structural motions of the protein backbone\. While Molecular Dynamics \(MD\) simulations provide an established but often prohibitively expensive approach, recent deep generative models aim to reduce this cost by directly predicting conformational ensembles, emulating MD\. However, due to their large size and the need to generate several states until the derived dynamical properties converge, these models remain expensive\. In this work, we propose a fast SE\(3\)\-equivariant graph neural network to directly predict dynamical descriptors, such as directional backbone flexibility and pairwise dynamic correlations, from an equilibrium structure\. In a series of experiments, we show that our model matches the accuracy of substantially larger ensemble generation models while being orders of magnitude faster, and demonstrate that the proposed equivariant architecture is especially well\-suited for capturing anisotropic motions in proteins\.

## Decoupled Mode Connectivity for Base\-to\-Novel Generalization in Vision\-Language Models

**Authors:** Imad\-Eddine Marouf; khalid OUBLAL; Enzo Tartaglione; Stéphane LATHUILIÈRE

**ID:** 150180 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k6ybSN5XjO>) | [PDF](<https://openreview.net/pdf?id=k6ybSN5XjO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150180>)

Prompt learning adapts vision\-language models such as CLIP by optimizing a small set of continuous context vectors\. The cross\-entropy objective drives the learned prompt toward base\-class specialization, while generalization to unseen classes benefits from staying close to the zero\-shot feature space\. Because both objectives act on the same parameters, their gradients oppose each other at convergence, and single\-prompt losses are confined to a fixed empirical base\-novel trade\-off curve across a wide range of loss designs\. We propose Decoupled Mode Connectivity \(DMC\), which resolves this conflict by assigning each objective to a dedicated prompt\. A linear mode connectivity \(LMC\) corridor in text\-feature space enforces low classification loss across interpolated classifiers between the two endpoints\. The Visual Anchor regularizer preserves CLIP's pretrained class\-similarity structure during specialization; equivalently, it minimizes the KL divergence between the learned and pretrained class\-similarity distributions\. We introduce class\-permutation invariance \(CPI\) as a necessary condition for regularizer transfer across the base\-novel boundary, and prove via Fano's inequality that any CPI violation lower\-bounds the drop in novel accuracy by a term proportional to the mutual information between the prompt and base\-class labels\. DMC improves base and novel accuracy on the majority of dataset\-baseline combinations across 11 datasets and three prompt\-learning baselines\~\(CoOp, KgCoOp, MMA\), shifting the Pareto frontier rather than trading along it\.

## TopoFisher: Learning Topological Summary Statistics by Maximizing Fisher Information

**Authors:** Matteo Biagetti; Mathieu Carrière; Francesco Conti; Enrico Maria Ferrari; Sven Heydenreich; Karthik Viswanathan

**ID:** 154783 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B1JksRv4SE>) | [PDF](<https://openreview.net/pdf?id=B1JksRv4SE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154783>)

Persistence diagrams provide stable, interpretable summaries of geometric and topological structure, and are useful for simulation\-based inference when important information is not captured by low\-order statistics\. In practice, however, persistence\-based pipelines require hand\-chosen filtrations, vectorizations, and compressors, usually without an objective tied directly to parameter uncertainty\. We introduce \\textbf\{TopoFisher\}, a differentiable persistent\-homology pipeline that learns topological summaries by maximizing local Gaussian Fisher information\. From simulations near a fiducial parameter value, TopoFisher optimizes trainable filtrations, diagram vectorizations, and compressors without posterior samples or supervised regression targets, while preserving the inductive bias of stable topological descriptors\. We also give sufficient regularity conditions under which the log\-determinant Fisher loss is locally Lipschitz in the trainable parameters\. Controlled experiments on noisy spirals and Gaussian random fields, where the total Fisher information is known, validate the pipeline: TopoFisher recovers a large fraction of the available information and improves over fixed topological vectorizations\. Our main results are on weak gravitational lensing, a high\-dimensional non\-Gaussian field\-inference problem from cosmology\. There, both learned topological summaries, a fixed cubical filtration with a learned PersLay vectorization, and a learned CNN filtration with the same PersLay vectorization, reach $\\log\|F\|\\approx 21$, compared with $13\.8$ for the power spectrum, $17\.1$ for peak counts, and $19\.3$ for wavelet scattering, approaching an unconstrained Information Maximising Neural Network baseline \($22\.4$\) with up to $\\sim80\\times$ fewer parameters\. More importantly, the fixed\-filtration variant generalizes better: under simulator shift from lognormal to LPT\-based maps it retains $\\log\|F\|=19\.24$ while the neural baseline drops to $8\.9$, and in neural posterior estimation it yields tighter constraints than the neural baseline, power spectrum, peak counts, and wavelet scattering\. These results suggest Fisher\-based topological optimizations as a robust, parameter\-efficient front end for simulation\-based inference\.

## Structured Sparse Memory for Recurrent Reasoning

**Authors:** Zixuan Zhao; Sam Wheeler; Neil Getty; Xiaotian Duan; Rick Stevens; Fangfang Xia

**ID:** 149635 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=obYfawO6lb>) | [PDF](<https://openreview.net/pdf?id=obYfawO6lb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149635>)

Recurrent models trained from scratch have recently become competitive on ARC\-style reasoning tasks, but the usual framing around small recurrent backbones overlooks two important parts of the system: task\-conditioned memory and synthetic augmentation data\. We study this regime through CHARM, a compact hybrid ARC model that combines recurrent reasoning with structured task memory, synthetic data, and inference\-time aggregation\. In existing approaches, task\-conditioned memory supplies a large hidden source of capacity, reaching more than 30x the size of the recurrent backbone\. We introduce a compositional sparse embedding for task conditioning that reduces learned task\-memory parameters by over 90% while improving pass@2 in controlled ARC\-AGI\-1 ablations\. We also find that matched synthetic data is the largest measured driver of ARC\-AGI\-2 gains\. For the recurrent backbone, recurrent depth helps only when balanced with learning horizon\. Combining these ingredients, our system reaches 80\.5% pass@2 on ARC\-AGI\-1 and 39\.3% pass@2 on ARC\-AGI\-2 public evaluation\.

## FlashBoB: I/O\-Efficient Exact Backward\-over\-Backward for Softmax Attention

**Authors:** Anthony Givans; Michael Crawshaw; Mingrui Liu

**ID:** 150295 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jDTHY0c03X>) | [PDF](<https://openreview.net/pdf?id=jDTHY0c03X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150295>)

Transformer models built on the attention mechanism have become a central building block in modern deep learning, yet softmax attention remains a major bottleneck for long\-context workloads\. While FlashAttention makes the forward and first backward passes I/O\-efficient, it does not support backward\-over\-backward \(BoB\), which enables exact differentiation through the backward pass for applications such as second\-order optimization, test\-time training, gradient\-based memory, and meta\-learning\. Existing BoB implementations either materialize large intermediate tensors or exhaust GPU memory at long sequence lengths\.  We present FlashBoB, an exact, I/O\-efficient algorithm for BoB in softmax attention that keeps computation within on\-chip tiles and avoids all $N \\times N$ intermediate tensors, where $N$ is the sequence length\. The key insight is a hierarchical affine structure in the softmax double backward: two row\-wise scalars determine all outputs through affine transformations\. This yields a two\-pass schedule with bounded on\-chip static random\-access memory \(SRAM\) usage and minimal off\-chip high\-bandwidth memory \(HBM\) traffic\. FlashBoB achieves $\\Theta\(N^2 d^2/M\)$ HBM traffic and, within the standard FlashAttention\-style score\-recomputation model, matches the inherited large\-cache lower bound for exact forward attention\. Empirically, it scales exact attention BoB to $N=262\\text\{K\}$ on a single A100 80GB GPU, where prior PyTorch exact baselines fail by $N=16\\text\{K\}$, and is up to $6\.3\\times$ faster than FlashBack\. These results make exact second\-order attention practical at long\-context sequence lengths where prior implementations cannot run efficiently\.

## Depth Exploration for LLM Decoding

**Authors:** Weisi Yang; Zipeng Sun; Stephen Xia

**ID:** 152407 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TKWIMojtwx>) | [PDF](<https://openreview.net/pdf?id=TKWIMojtwx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152407>)

Autoregressive LLM decoding evaluates every generated token through the full layer stack, even though many tokens become predictable at intermediate depths\. Existing lossless depth\-adaptive methods exploit this redundancy by choosing a single non\-final exit depth and verifying its prediction with the final\-depth model\. However, our measurements show that this selection\-based strategy leaves substantial headroom: choosing an exit too late wastes computation, while choosing one too early triggers fallback and discards dependent drafts\. We propose Depth Exploration Decoding \(DEX\), a lossless decoding algorithm that replaces single\-depth selection with parallel exploration over multiple candidate depths\. At each commit position, DEX validates candidates against the final\-depth reference, commits exactly the final\-depth token, and collapses the exploration lattice to retain only reusable branch states\. This expand\-\-commit\-\-collapse procedure preserves equivalence to standard autoregressive decoding while reducing the cost of committing each token\. Across early\-exit\-trained and standard LLMs, DEX outperforms representative depth\-selection baselines and achieves competitive end\-to\-end throughput against speculative and distributed decoding methods\. Moreover, DEX improves as the explored depths become finer, showing that parallel depth exploration provides a scalable way to exploit the underused depth axis of LLM decoding\. Code: https://anonymous\.4open\.science/r/DEX\-\-anonymous/\.

## Projection Learning: A Principled Way to Overcome Memorization in Distribution Learning

**Authors:** Lin Chen; Dejan Slepcev

**ID:** 153127 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Nj1WTx7zLW>) | [PDF](<https://openreview.net/pdf?id=Nj1WTx7zLW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153127>)

We introduce a framework for learning distributions supported on manifolds based on estimating the projection onto the underlying data manifold\. Specifically, we define an objective functional over a class of functions whose minimizer recovers this projection\. The proposed framework automatically adapts to the intrinsic dimension and allows for data supported on unions of manifolds with varying dimensions\. The resulting objective can be optimized using standard neural network architectures\. We present population\-level results establishing recovery of the manifold projection and prove finite\-sample Wasserstein generalization bounds\. Furthermore, we validate the approach empirically across a range of settings\. In contrast to widely used generative models such as diffusion models, whose objectives can be minimized by memorizing training samples, our formulation penalizes such behavior\. Thus, returning training data does not yield low loss\. We also introduce a direct memorization metric to verify that the learned projection generates new samples rather than reproducing the training set\.

## A Deep Learning Framework for Scalar\-on\-Function Models

**Authors:** Ruiqi Liu; Suneel Babu Chatla

**ID:** 148580 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wkb5E1ietO>) | [PDF](<https://openreview.net/pdf?id=wkb5E1ietO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148580>)

We propose a deep learning framework for scalar\-on\-function regression with possibly multiple functional predictors observed on irregular grids\. The method represents each functional covariate by finitely many basis coefficients computed from the observed trajectories and fits a deep neural network using these coefficients as features\. We establish a general nonasymptotic excess risk bound for the neural network estimator that decomposes the error into statistical, truncation, discretization, and network approximation terms\. We then specialize the theory to two important settings\. \(i\) For continuous functional models, an equal\-width neural network estimator achieves a nearly minimax optimal rate up to a log\-logarithm factor\. \(ii\) For functional multiple\-index models, we design a bottleneck\-equal\-width neural network estimator that exploits the low\-dimensional index\-link structure and attains a nearly minimax optimal rate up to a logarithm factor\. The results provide theoretical support for neural network\-based scalar\-on\-function regression and highlight the importance of architecture design\.

## Spike\-to\-Field Mechanisms of Turbulence\-Like Dynamics in Spatial Spiking Neural Networks

**Authors:** Zequan Liu

**ID:** 148673 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vxPwfztRhd>) | [PDF](<https://openreview.net/pdf?id=vxPwfztRhd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148673>)

Neural avalanches and turbulence\-like brain dynamics are usually measured after neural activity has been coarse\-grained into continuous fields, leaving open which spike\-level mechanisms can generate these macroscopic observables\. We build a spatial leaky integrate\-and\-fire spiking neural network and explicitly transform spikes into activity\-density and Hilbert phase fields\. A delayed, distance\-dependent, passive\-dendrite regime reproducibly generates turbulence\-like field structure, including high\-amplitude phase\-defect tracks, structure\-function scaling, and power\-law\-favored continuous\-field avalanche tails\. Controls show that firing rate, vortex count, and avalanche tail fits are individually insufficient: destroying delayed propagation, dendritic filtering, or spike timing suppresses key field signatures, while random\-space nulls can retain many mathematical phase defects but lose spatial scaling and synaptic\-delay transfer\. Biologically motivated gates further shape the regime: PV\-like perisomatic inhibition clamps phase dynamics, SST\-like dendritic inhibition and projection\-specific inhibitory facilitation preserve long\-lived tracks, and a rate\-constrained projection\-STP regime maintains similar dynamics at 12\.25 Hz across 12 seeds\. These results use SNNs as a mechanistic testbed for spike\-derived brain turbulence observables and show why phase defects and avalanche\-like statistics must be interpreted jointly with spatial scaling and spike\-level propagation\.

## The Query Complexity of Local Search in Rounds on General Graphs

**Authors:** Simina Branzei; Ioannis Panageas; Dimitris Paparas

**ID:** 155985 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1NH8tf6cgg>) | [PDF](<https://openreview.net/pdf?id=1NH8tf6cgg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155985>)

We analyze the query complexity of finding a local minimum in $t$ rounds on general graphs\. More precisely, given a graph $G = \(V,E\)$ and oracle access to an unknown function $f : V \\to \\mathbb\{R\}$, the goal is to find a local minimum\-\-\-a vertex $v$ such that $f\(v\) \\leq f\(u\)$ for all  $\(u,v\) \\in E$\-\-\-using at most $t$ rounds of interaction with the oracle\. The query complexity is well understood on grids, but much less is known beyond\. This abstract problem captures many optimization tasks, such as finding a local minimum of a loss function during neural network training\.      For each graph with $n \\geq 2$ vertices and  constant integer $t \\geq 2$, we prove a deterministic upper bound of $O\(n^\{1/t\} \(s\\Delta\)^\{1\-1/t\}\)$, where  $s$ is the separation number and $\\Delta$ is the maximum degree of the graph\. We complement this result with a randomized lower bound of $\\Omega\(n^\{1/t\}\)$   that holds for any connected graph\. We also find that parallel steepest descent with a warm start provides improved bounds for graphs with high separation number and bounded degree\.  To obtain our results, we utilized an advanced version of Gemini at various stages of our research\. We discuss our experience in the Methodology section\.

## Multi\-Head Recurrent Memory Agents

**Authors:** Jiatong Li; Samuel \(Min\-Hsuan\) Yeh; Sharon Li

**ID:** 154453 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DSY0xstaO3>) | [PDF](<https://openreview.net/pdf?id=DSY0xstaO3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154453>)

Recurrent memory agents extend LLMs to arbitrarily long contexts by iteratively consolidating input into a fixed\-size memory window\. Despite their scalability, these agents exhibit a well\-documented reliability problem: end\-to\-end performance degrades systematically as context length grows\. We diagnose this failure by decomposing performance into two factors\-\-\-memory \*\*capture\*\* and memory \*\*retention\*\*\-\-\-and quantitatively confirm that retention is the dominant bottleneck\. Retention collapses because existing designs maintain memory as a monolithic text block, forcing every update to risk overwriting previously retained content\. Motivated by this diagnosis, we propose \*\*Multi\-Head Recurrent Memory \(MHM\)\*\*, a general, training\-free framework that partitions memory into independent heads governed by a stage\-wise select\-then\-update strategy\. At each step, exactly one head is selected for update while the remaining heads are structurally shielded from overwriting, shifting the burden of retention from model behavior to architectural design\. As a lightweight instantiation, we introduce Least\-Recently\-Updated MHM \(MHM\-LRU\), which guarantees uniform head utilization with zero additional token overhead\. Extensive experiments on long\-context benchmarks show that MHM\-LRU substantially improves both retention and end\-to\-end accuracy across the 100K\-\-1M token range, where baselines degrade sharply\. On RULER\-HQA at 896K tokens, MHM\-LRU improves the memory retention rate from less than 30% to \*\*73\.96%\*\*\. These gains generalize across model families, scales, and task types, positioning architectural optimization as a practical and cost\-efficient path toward reliable long\-context recurrent memory\.

## Perfect Parallelization in Mini\-Batch SGD with Classical Momentum Acceleration

**Authors:** Sachin Garg; Michal Derezinski

**ID:** 155684 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3iXnCafw0q>) | [PDF](<https://openreview.net/pdf?id=3iXnCafw0q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155684>)

Accelerating stochastic gradient methods with classical momentum schemes, such as Polyak's heavy ball, has proven highly successful in training large\-scale machine learning models, particularly when combined with the hardware acceleration of large mini\-batch computations\. Yet, the effect of classical momentum on stochastic mini\-batch optimization has been poorly understood theoretically, with prior works requiring strong noise assumptions and extremely large mini\-batches\. In this work, we develop a general theory of stochastic momentum acceleration for optimizing over quadratics in the interpolation regime, a popular abstraction for studying deep learning dynamics which also includes classical methods such as randomized Kaczmarz and coordinate descent\. Our framework encompasses both heavy ball and Nesterov\-style momentum, allows for arbitrary mini\-batch sizes, and makes minimal assumptions on the stochastic noise\. In particular, we show that acceleration from classical momentum is directly proportional to the gradient mini\-batch size \(up to a natural saturation point\), thereby enabling perfect parallelization of mini\-batch computations\. Our theory also provides a simple choice for the momentum parameter, which is shown to be effective empirically\.

## EMA\-Nesterov: Stabilizing Nesterov's Lookahead for Accelerated Deep Learning Optimization

**Authors:** Chung\-Yiu Yau; Dawei Li; Athanasios Glentis; Valentyn Boreiko; Hoi\-To Wai; Mingyi Hong

**ID:** 153273 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MTYA6Kc3Bb>) | [PDF](<https://openreview.net/pdf?id=MTYA6Kc3Bb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153273>)

Lookahead\-based acceleration methods, such as Nesterov’s momentum, are widely used in optimization, but they often become unreliable in deep learning training due to stochastic gradient noise and non\-convex loss landscapes\. Standard lookahead relies on short\-horizon update signals \(e\.g\., differences between consecutive iterates\), which are inherently noisy and can lead to unstable extrapolation directions\. This work revisits Nesterov's acceleration from a trajectory perspective and argues that effective acceleration in deep learning should follow the low\-frequency trend of optimization trajectories rather than extrapolating noisy one\-step updates\. Leveraging on this insight, we propose EMA\-Nesterov, a simple modification that replaces the standard Nesterov's lookahead direction with an exponential moving average of parameter updates\. This yields a stabilized lookahead direction that approximates long\-horizon trajectory trends while retaining a lightweight single\-loop implementation\. We show that EMA\-Nesterov retains the same theoretical accelerated convergence rate in convex problems\. Furthermore, we show that EMA\-Nesterov consistently improves optimization performance across a range of optimizers, including Adam, SOAP, and Muon, in deep learning tasks such as language model pre\-training\. Compared to prior lookahead methods, EMA\-Nesterov achieves better performance by avoiding the instability of short\-horizon lookahead and inefficiency of multi\-step lookahead\.

## Neural Statistical Functions

**Authors:** Daniel Xu; Yuxin Xie; Minghao Guo; Haixu Wu; Wojciech Matusik

**ID:** 154480 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DHWVdjJrLt>) | [PDF](<https://openreview.net/pdf?id=DHWVdjJrLt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154480>)

Classical deep learning typically operates on individual cases\. Despite its success, real\-world usage often requires repeated inference to estimate statistical quantities for complex decision\-making tasks involving uncertainty or extreme\-value analysis, resulting in substantial latency\. We introduce neural statistical functions, a new family of models learned from pre\-trained single\-sample predictors and scattered data samples, which can directly infer statistics over continuous operating condition ranges without explicit sampling\. By introducing the notion of prefix statistics, we transform and unify diverse statistical functions \(e\.g\., integrals, quantiles, and maxima\) into an interval\-conditional framework, in which a principled identity between the prefix statistics and the individual\-case regression serves as the learning objective\. Neural statistical functions achieve strong performance in estimating essential statistics of complex physical processes, including accumulated energy in dynamical systems, quantiles of aerodynamic responses, and maximum stress in crash processes, while achieving up to a 100$\\times$ reduction in model evaluations\.

## Self\-Supervised Keyframe Discovery for Horizon\-Invariant Behavior Cloning

**Authors:** Prabin Kumar Rath; Omkar Patil; Nakul Gopalan

**ID:** 154148 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FttcVlwwrf>) | [PDF](<https://openreview.net/pdf?id=FttcVlwwrf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154148>)

Behavior cloning \(BC\) in non\-Markovian environments is a challenging problem because policies have to reason over contextual information over long horizons\.  Existing policy architectures rely on recurrent or attention\-based mechanisms to capture long\-term dependencies\.  However, recurrent models suffer from hidden\-state collapse and gradient instability under backpropagation through time, while attention\-based models are fundamentally limited by context length\.  To address these issues, we propose Keyframe Mnemonics, a novel self\-supervised method that $\\textit\{discovers\}$ a set of information\-critical observations \($\\textit\{mnemonics\}$\) by learning an objective from randomly sampled past observations and using it as a reward for keyframe selection\. We then train a BC policy that conditions on the discovered keyframes to model the action distribution\.  Under near\-optimal keyframe selection, our formulation provides context retention guarantees over an infinite horizon, while maintaining a small set of decision\-relevant keyframes in the policy's working memory\.  We evaluate our method on synthetic memory domains, where mnemonic\-conditioned BC policies achieve $100$% success rates \(SR\) and generalize to horizons orders of magnitude beyond training without performance degradation\. Additionally, we evaluate on memory intensive robot manipulation benchmarks, where we observe an absolute $15$\-$30$% improvement in SR over strong memory\-augmented baselines on $23$ tasks\. Code and videos are available at https://keyframe\-mnemonics\.github\.io\.

## Optimizing Retraining Schedules via Learning Curves

**Authors:** Jin Sima; Changlong Wu; Ananth Grama; Wojciech Szpankowski

**ID:** 154395 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DtRZYbRdO0>) | [PDF](<https://openreview.net/pdf?id=DtRZYbRdO0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154395>)

Retraining is the primary mechanism by which deployed models adapt to new data, yet it is also among the most expensive operations in modern machine learning\. How often must a model be retrained to remain near\-optimal? We answer this question through a learning\-curve based characterization of the retraining\-frequency/risk trade\-off in online learning\. For the i\.i\.d\. realizable setting, we observe that only $O\(\\log T\)$ updates suffice to match the risk of \*full retraining\* whenever the learning curve is non\-increasing\. However, when the learning curve decays as a power law $t^\{\-\\alpha\}$ with $\\alpha &lt; 1$, as empirically observed in deep learning, the budget collapses further to $O\(\\log \\log T\)$ updates, yielding a \*substantial asymptotic\* improvement\. We further design update schedules achieving these bounds, prove matching lower bounds, and present an adaptive algorithm that remains optimal when $\\alpha$ is unknown\. We then extend the analysis to piecewise\-stationary and gradually drifting environments, and establish a no\-free\-lunch theorem showing that some prior knowledge of the learning curve is unavoidable, i\.e\., no universal algorithm can be competitive without it\.  Together, these results provide a sharp characterization of the frequency\-\-accuracy trade\-off in online retraining and bridge foundational learning theory with practical strategies for scalable deployment\.

## CHoRD: Coordinating Scheduling and Data Placement for Efficient Deep Neural Network Inference on Chiplet\-Based GPUs

**Authors:** Hanpei Liu; Samit S Miftah; Dipali Jain; Dan Fiumara; Pradip Bose; Sumit K\. Mandal; Kanad Basu

**ID:** 153059 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OK9jVw9YBS>) | [PDF](<https://openreview.net/pdf?id=OK9jVw9YBS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153059>)

Chiplet\-based GPUs are a promising alternative to monolithic designs for scaling compute and memory resources in machine learning \(ML\) workloads\. However, distributing computation and memory across multiple chiplets introduces a hierarchical Non\-Uniform Memory Access \(NUMA\) environment, where performance depends on the alignment between kernel execution and data placement\. In deep neural network \(DNN\) inference, kernels execute repeatedly over shared weights and activations, and poor alignment leads to sustained inter\-chiplet traffic that degrades performance\. Existing approaches optimize scheduling or data placement in isolation, failing to coordinate these decisions across dependent kernel executions\. We present CHoRD \(Chiplet\-Hierarchy\-oriented Residency and Dispatch\), a compiler\-assisted, profile\-guided framework for joint scheduling and data placement in chiplet\-based GPUs\. CHoRD reconstructs program structure from compiled kernels and host code, and supports two modes: a static mode that derives scheduling and placement decisions without profiling, and a profiling mode that performs a single lightweight run to collect execution statistics\. Using this information, CHoRD determines chiplet\-level kernel mapping, enables safe inter\-kernel overlap, improves intra\-chiplet parallelism, and assigns data to chiplets based on access patterns\. These coordinated decisions reduce inter\-chiplet communication and improve compute utilization\. We evaluate CHoRD on 4\-chiplet and 8\-chiplet MGPUSim substrates across nine CNN and transformer\-based inference workloads\. On the 4\-chiplet system, CHoRD\-static and CHoRD\-profiled achieve 2\.57× and 2\.94× geometric\-mean end\-to\-end speedups over RR, and 1\.46× and 1\.66× over the placement\-only CLAP baseline, respectively, with benefits increasing as chiplet count scales to 8\.

## Scalable Neural Safety Certification via Monotonicity

**Authors:** Amirreza Alavi; Majid Zamani; Saber Jafarpour

**ID:** 156059 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0mIVNtnfDp>) | [PDF](<https://openreview.net/pdf?id=0mIVNtnfDp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156059>)

Learning\-based safety certification offers a promising route for verifying complex dynamical systems when explicit models are unavailable, but existing data\-driven methods often scale poorly: they treat the system as a black box, rely on dense discretizations or Lipschitz bounds, and consequently suffer from sample complexity that grows exponentially with dimension\. This paper shows that a common structural property of dynamical systems\-\-\-\*monotonicity\*\-\-\-can be used to break this curse of dimensionality\. We develop a data\-driven framework for robust safety verification and safe controller synthesis for unknown monotone systems using only simulator queries\. Our main theoretical result proves that, for monotone systems with upper\-closed unsafe sets, safety is completely characterized by the existence of monotone inductive barrier certificates\. This structure reduces certificate verification over continuous state spaces to localized boundary checks over finitely many cells\. To learn such certificates, we introduce Max\-Monotone Networks, a monotone neural architecture with universal approximation guarantees for monotone functions\. We then propose a training and refinement algorithm that, upon successful termination, returns formally valid neural barrier certificates and, under mild partition assumptions, requires only $O\(n\)$ simulator queries\. Across high\-dimensional benchmarks, including oscillator networks with up to $13\{,\}659$ states and traffic networks with $1\{,\}000$ states, our method certifies safety in regimes where prior approaches either do not converge or exceed memory limits\. These results demonstrate that exploiting order structure can make neural safety certification both scalable and formally sound\.

## Bridge Graphical Models: Coupling, Projection, and Current\-Preserving Dynamics for Generative Modeling

**Authors:** Tiantian Zhang

**ID:** 148153 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zu4l4sQPdU>) | [PDF](<https://openreview.net/pdf?id=zu4l4sQPdU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148153>)

Continuous\-time generative models compress endpoint\-conditioned bridges into Markov velocity fields, but no existing diagnostic measures how much information this compression discards\. We introduce the \\emph\{Markovization gap\}\-\-\-the integrated conditional variance of the bridge velocity given the Markov state\-\-\-which quantifies this loss before any neural network is trained\. To make the gap well\-defined across model families, we define \\emph\{Bridge Graphical Models\} \(BGMs\), separating endpoint coupling, bridge law, Markovian projection, and dynamics representation as independent design choices\. This decomposition also formalizes Poisson and electrostatic models as field\-line bridge kernels with their own caustic gap\. Across synthetic, latent, and pixel\-space pilots on CIFAR\-10 and Fashion\-MNIST, a proxy gap estimated in minutes on CPU consistently ranks coupling/bridge choices in the same direction as training loss and FID measured after hours of GPU training\.

## MoBiQuant: Mixture\-of\-Bits Quantization for Token\-Adaptive Any\-Precision LLM

**Authors:** Dongwei Wang; Jinhee Kim; Seokho Han; Denis Gudovskiy; Yohei Nakata; Tomoyuki Okuno; KhayTze Peong; Kang E Jeon; Jong Hwan Ko; Yiran Chen; Huanrui Yang

**ID:** 152455 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SztgGrvHcl>) | [PDF](<https://openreview.net/pdf?id=SztgGrvHcl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152455>)

Dynamic runtime latency and memory constraints necessitate flexible large language model \(LLM\) deployment,  where an LLM can be inferred with various quantization precisions based on available computational resources\. Recent work on such any\-precision quantization either relies on hardware\-inefficient vector quantization or induces additional scaling factors when switching between bit\-widths\. Meanwhile, existing post\-training quantization \(PTQ\) methods calibrated for a fixed low precision show poor generalizability under runtime precision change\. In this work, we attribute the source of poor generalization across bit\-widths to a precision\-dependent \\textit\{outlier migration\} phenomenon where the distribution of PTQ\-sensitive tokens changes across precisions\. Motivated by this observation, we propose \\texttt\{MoBiQuant\}, a novel any\-precision Mixture\-of\-Bits quantization framework that adjusts weight precision for flexible LLM inference based on token sensitivity\. Specifically, we propose a many\-in\-one recursive residual quantization that can iteratively reconstruct higher\-precision weights at runtime and mitigates \\textit\{outlier migration\} with a token\-aware router to dynamically select the optimal inference precision of each token\. Extensive experiments show that \\texttt\{MoBiQuant\} matches or surpasses frontier single\-precision PTQ while exhibiting strong elasticity, achieving significant memory savings and throughput gains of up to $1\.34\\times$ over state\-of\-the\-art any\-precision methods\. Source code is provided in the supplementary material\.

## Generative Modeling via Drifting

**Authors:** Mingyang Deng; He Li; Tianhong Li; Yilun Du; Kaiming He

**ID:** 154240 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FCkkBolf4o>) | [PDF](<https://openreview.net/pdf?id=FCkkBolf4o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154240>)

Generative modeling can be formulated as learning a mapping $f$ such that its pushforward distribution matches the data distribution\. The pushforward behavior can be carried out iteratively at inference time, for example, in diffusion/flow\-based models\. In this paper, we propose \*Drifting Models\*, a generative modeling framework that evolves the pushforward distribution during training and naturally admits one\-step inference\. We introduce a drifting field that governs the sample movement and achieves  equilibrium when the distributions match\.  This leads to a training objective that allows the neural network optimizer to evolve the distribution\. In experiments, our one\-step generator achieves state\-of\-the\-art results on ImageNet 256$\\times$256, with FID 1\.54 in latent space and 1\.61 in pixel space\. We hope that our work opens up new opportunities for high\-quality one\-step generation\.

## Stress\-Testing Neural Network Verifiers with Provably Robust Instances

**Authors:** David Troxell; Yulia Alexandr; Sofia Hunt; Stephanie Lei; Guido Montufar

**ID:** 139653 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DD3nu4ghCl>) | [PDF](<https://openreview.net/pdf?id=DD3nu4ghCl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139653>)

Neural network verifiers aim to provide formal guarantees on model behavior, but existing verification benchmarks are fundamentally limited by their lack of ground\-truth labels\. As a result, verifier evaluation relies on indirect heuristics, which prevents exact scoring and systematic studies of verifier failure modes\. We address this gap by introducing a reusable framework for generating verification instances whose ground\-truth robustness labels are known a priori through analytic construction\. Our framework led to the discovery of multiple numeric tolerance concerns and implementation bugs in popular verifiers, highlighting the need for ground\-truth labels\. Additionally, to systematically study verifier failure modes, we introduce the verification Difficulty Profile, a collection of estimable quantities capturing distinct sources of instance hardness\. Using our framework and these profiles, we evaluate five state\-of\-the\-art verifiers and show that different instances stress distinct aspects of the verification pipeline\. We show that these results can aid the future development of verifiers as they provide actionable targets for improving numerical reliability, relaxation quality, and search behavior\. Our code is publicly available: https://github\.com/NeurIPSAnon12345/VeriStressGT\.git\.

## Elastic Spectral State Space Models for Train\-Once Budgeted Inference

**Authors:** Dachuan Song; Junyu Yin; Zechen Hu; Xuan Wang

**ID:** 154798 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Asn9eGOVdP>) | [PDF](<https://openreview.net/pdf?id=Asn9eGOVdP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154798>)

Modern sequence models are typically trained at a fixed computational capacity, while real\-world applications require deployment across platforms with different resource constraints\.  Existing approaches either train or distill separate compact models for selected budgets, or use elastic architectures that shrink dimensions such as width, depth, Feed\-Forward Network \(FFN\) size, or SSM state dimension\. In this paper, we propose Elastic Spectral State Space Models \(ES\-SSM\), a train\-once, export\-many sequence modeling framework that gains elasticity through spectral approximation of the SSM sequence operator\. ES\-SSM builds on Hankel spectral filtering for state space models, where long\-range token mixing is represented through fixed Hankel spectral channels that define an operator\-level approximation resolution\. To make this spectral elasticity reliably deployable, ES\-SSM combines input\-adaptive channel\-wise gates with budget dropout, training the same spectral prefixes that are used by compact models at inference time\. This encourages low\-index channels to become predictive on their own, while higher\-index channels provide refinements for larger budgets\. We evaluate ES\-SSM across byte\-level language modeling, Long Range Arena, Speech Commands V2, and offline reinforcement learning benchmarks\. Across these settings, a single trained ES\-SSM can be truncated to competitive compact models compared with modern Transformer and SSM baselines at similar parameter scales\. Furthermore, by testing under various runtime budgets, we observe smooth and stable quality\-cost curves over a wide range of truncation levels\.

## SPIRIT: Speed\-Driven Online Adaptation for Self\-Speculative Decoding

**Authors:** Chenghao Liu; Hui Lu; Chengbo Zhan; Jia Rao

**ID:** 155523 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4y9wxYdbsM>) | [PDF](<https://openreview.net/pdf?id=4y9wxYdbsM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155523>)

Self\-speculative decoding offers a plug\-and\-play route to accelerating autoregressive large language model \(LLM\) inference, but its practical success hinges on identifying effective layer\-skipping configurations online without retraining or offline profiling\. Existing methods mainly optimize agreement\-based proxies that capture draft\-target consistency, yet overlook intrinsic runtime differences across draft configurations\. Consequently, configurations with similar acceptance can still yield substantially different realized decode throughput\. We present SPIRIT, a speed\-driven online adaptation framework for self\-speculative decoding that directly optimizes realized decode throughput, measured as generated tokens per second, using window\-level runtime feedback\. Our key insight is that speed is not determined by agreement alone: it is jointly shaped by draft\-target consistency and the intrinsic speed advantage of the draft configuration\. Empirically, the skip ratio serves as a first\-order control variable, capturing the dominant consistency\-speed trade\-off while sharply shrinking the search space over layer\-skipping patterns\. SPIRIT therefore first identifies an effective skip ratio and then refines the layer\-skipping pattern within it\. Combined with length\-aware normalization and shift\-aware profile\-based adaptation, this design enables rapid adaptation to task shifts in non\-stationary request streams\. Across diverse tasks and model scales, SPIRIT consistently outperforms strong training\-free baselines and achieves up to 1\.74x speedup while preserving the target model's output distribution, establishing a practical foundation for plug\-and\-play, high\-throughput LLM inference\.

## Generalization Measures for Deep Learning Should Be Audited for Fragility

**Authors:** Shuofeng Zhang; Ard Louis

**ID:** 140049 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZbkyZd1PpG>) | [PDF](<https://openreview.net/pdf?id=ZbkyZd1PpG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140049>)

This position paper argues that generalization measures for deep learning should be audited for fragility before they are used as explanations of why trained networks generalize\. Many post\-mortem measures \-\- those computed on trained networks \-\- are \*\*fragile\*\*: small, routine training changes that barely affect the learned predictor or test performance can substantially change a measure's value, trend, or scaling behavior\. For example, changing the learning rate or swapping SGD for Adam can reverse the qualitative learning\-curve behavior of widely used measures such as the path norm\. We also identify subtler failures\. A standard parameter\-space PAC\-Bayes proxy, \`PACBAYES\_ORIG\`, is less sensitive to hyperparameter tweaks than many norm measures, but it can fail to capture differences in data complexity across learning curves\. By contrast, a function\-space marginal\-likelihood PAC\-Bayes bound, used here as a calibration baseline rather than a gold standard, tracks data complexity and sample\-size scaling in our experiments while exposing the limitations of optimizer\-agnostic GP\-based approaches\. We therefore propose explicit fragility audits \-\- including hyperparameter, temporal, data\-complexity, matched\-error CMS/eCMS, and invariance checks \-\- as a standard complement to tightness and correlation claims\.

## Where You Backpropagate Matters: Token Hypothesis for Memory\-Efficient Fine\-Tuning

**Authors:** Md Kowsher; Chen Chen

**ID:** 155128 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8D8sa1Nuh0>) | [PDF](<https://openreview.net/pdf?id=8D8sa1Nuh0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155128>)

Fine\-tuning large transformers routes gradients through every token position, paying the cost in activation memory that scales linearly with sequence length and dominates the GPU budget\. Existing efficient methods reduce the parameter side\-\-\-low\-rank adapters, prefix tuning, weight\-decomposed updates\-\-\-but leave the activation footprint untouched\. We present the Token Hypothesis, a memory\-efficient fine\-tuning procedure motivated by a Neural Tangent Kernel analysis of how fine\-tuning signal is distributed across token positions\. We prove that every position is a low\-dimensional capacity bottleneck whose width does not grow with the model, that positions with aligned hidden\-state geometry are interchangeable in bidirectional models, and that causal positions form a monotone capacity chain in which later positions strictly dominate earlier ones\. The analysis pins down how many positions are needed and which ones, both computable from forward passes alone: any subset suffices in bidirectional models, while the last few positions suffice in causal ones\. We translate this into a procedure that backpropagates through only a small subset of positions while running the full forward pass over the rest\. Empirically, the procedure matches or exceeds full\-sequence fine\-tuning across six task families\-\-\-commonsense reasoning, mathematical reasoning, visual question answering, video question answering, GLUE, and image classification\-\-\-and five backbones spanning bidirectional and causal architectures\. It reduces activation memory substantially, translating to up to ∼ 20% lower total GPU memory \(∼ 33GB\) on long\-context tasks, and composes cleanly with parameter\-efficient methods such as LoRA and DoRA\.

## In\-Context Multi\-Operator Learning with DeepOSets

**Authors:** Shao\-Ting Chiu; Aditya Nambiar; Ali Syed; Jonathan W\. Siegel; Ulisses M\. Braga\-Neto

**ID:** 154682 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Bla1smpZ8X>) | [PDF](<https://openreview.net/pdf?id=Bla1smpZ8X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154682>)

An important application of neural networks to scientific computing has been the learning of non\-linear operators\. In this framework, a neural network is trained to fit a non\-linear map between two infinite dimensional spaces, for example, the solution operator of ordinary and partial differential equations\. Recently, inspired by the discovery of in\-context learning for large language models, an even more ambitious paradigm has been explored, called multi\-operator learning\. In this approach, a neural network is trained to learn many different operators at the same time\. In order to evaluate one of the learned operators, the network is passed example inputs and outputs to disambiguate the desired operator\. In this work, we provide a precise mathematical formulation of the multi\-operator learning problem\. In addition, we modify a simple efficient architecture, called DeepOSets, for multi\-operator learning and prove its universality for multi\-operator learning\. Finally, we provide experiments showing the efficacy of DeepOSets for learning multiple operators corresponding to different initial\-value and boundary\-value differential equation problems\.

## DUIL: Deep Unsupervised Inverse Learning for in situ Macromolecular Morphology Identification

**Authors:** Mostofa Rafid Uddin; Seonghui Min; Mahek Vora; Qifeng Wu; Muyuan Chen; Min Xu

**ID:** 152492 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Si5zmtJ2Zu>) | [PDF](<https://openreview.net/pdf?id=Si5zmtJ2Zu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152492>)

Emerging microscopic technologies such as cryo\-electron tomography \(cryo\-ET\) provide direct 3D visualization of macromolecules within the cell, enabling analysis of their in situ morphology\. This morphology can be regarded as an SE\(3\)\-invariant, denoised volumetric representation of subvolumes extracted from tomograms, termed as subtomograms\. Morphology identification from a set of subtomograms is formulated as an inverse problem of estimating a set of template morphologies and per\-subtomogram SE\(3\) transformations with respect to any one of the templates\. The existing expectation\-maximization\-based solution to this end often struggles with high structural heterogeneity and requires manual selection of a large number of hyperparameters\. Addressing this issue, we present a novel deep unsupervised learning framework called DUIL\. Given a set of subtomograms, DUIL first models their SE\(3\)\-invariant morphological code using a siamese\-like neural network with a multi\-choice learning module\. The learned morphological codes are clustered and used to generate a set of template morphologies through a generator network\. The generated templates are used as references to estimate SE\(3\) transformations for each subtomograms through latent optimization\. The subtomograms with identical template morphologies are then aligned and averaged to iteratively refine the templates\. Experiments on simulated and real cryo\-ET datasets demonstrate clear improvements over prior methods, including the discovery of previously unidentified macromolecular morphologies\.

## Cross\-Attentive Bayesian Low\-Rank Adaptation for Multimodal Uncertainty Estimation

**Authors:** Habibeh Naderi Khorshidi; Behrouz Soleimani; Stan Matwin

**ID:** 149084 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=szn6IUxvw6>) | [PDF](<https://openreview.net/pdf?id=szn6IUxvw6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149084>)

Parameter\-efficient fine\-tuning \(PEFT\) enables efficient adaptation of frozen language models, but most PEFT methods remain deterministic or unimodal, limiting their reliability in low\-resource audio\-text settings where uncertainty depends on both linguistic evidence and acoustic conditions\. We introduce SPECTRA \(Stochastic Posterior Estimation with Cross\-modal Token\-level Rank Adaptation\), a multimodal Bayesian low\-rank adaptation framework for uncertainty\-aware audio\-text learning\. SPECTRA keeps the text and audio backbones frozen and confines stochasticity to a compact rank\-$r$ latent matrix inside each LoRA adapter\. At each transformer layer, text\-derived low\-rank token features query frame\-level audio embeddings through lightweight cross\-attention; the resulting token\-specific acoustic context parameterizes the mean and variance of an amortized variational posterior over the adapter latent\. This design treats audio not merely as an additional feature stream, but as a localized reliability signal that modulates both adaptation and confidence while preserving the scalability of PEFT\. Posterior prediction is performed with Monte Carlo adapter samples, enabling a Bayesian uncertainty analysis that decomposes normalized predictive uncertainty into total, aleatoric, and adapter\-space epistemic components and evaluates whether uncertainty distinguishes correct from misclassified predictions\. Across IEMOCAP and clinical interview prediction tasks, SPECTRA is consistently competitive with or improves upon text\-only Bayesian PEFT and conventional multimodal transfer\-learning baselines, with token\-level cross\-attention yielding the most reliable gains\. Additional modality\-disagreement stress tests show that mismatched audio causes substantially larger degradation in AUC, likelihood, calibration, and Brier score than noisy but matched audio, highlighting the importance of modeling cross\-modal reliability\. These results suggest that Bayesian cross\-modal conditioning in low\-rank adapter space provides an efficient and principled mechanism for calibrated multimodal adaptation\.

## Predicting Plasticity in Deep Continual Learning: A Theoretical Perspective

**Authors:** Jiuqi Wang; Jayanth Srinivasa; Claire Chen; Shuze Daniel Liu; Ali Payani; Shangtong Zhang

**ID:** 151631 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z8JDztVnTJ>) | [PDF](<https://openreview.net/pdf?id=Z8JDztVnTJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151631>)

Deep continual learning requires models to adapt to new tasks without retraining from scratch\. However, neural networks can lose their ability to adapt to new tasks after training on previous ones, a phenomenon known as loss of plasticity\. There have been several explanations and diagnostics proposed for plasticity loss\. Motivated by the philosophy that "all models are wrong, but some are useful", we ask: can existing diagnostics predict a neural network's plasticity? In this work, we take a practical view to interpret plasticity as trainability, i\.e\., a neural network's future optimization gain on a target task\. We first take a theoretical approach, showing, by constructing a few counterexamples, that some widely adopted diagnostics of plasticity, including representation rank and neural tangent kernel rank, can fail to predict the loss of trainability in both regression and classification settings\. We instead propose a novel metric, called optimization readiness, which combines gradient strength and gradient reliability\. We prove that optimization readiness lower bounds one\-step optimization gain under standard smoothness assumptions, providing a theoretical guarantee for its predictive power\. Empirically, we show that across commonly used deep continual learning settings, such as Slowly\-Changing Regression and Permuted MNIST, optimization readiness more reliably ranks checkpoints by trainability than prior diagnostics, even with substantially fewer samples\.

## Beyond LoRA vs\. Full Fine\-Tuning: Gradient\-Guided Optimizer Routing for LLM Adaptation

**Authors:** Haozhan Tang; Xiuqi Zhu; Xinyin Zhang; Boxun Li; Virginia Smith; Kevin Kuo

**ID:** 154880 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AC9LxjWtTf>) | [PDF](<https://openreview.net/pdf?id=AC9LxjWtTf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154880>)

Recent literature on fine\-tuning Large Language Models highlights a fundamental debate\. While Full Fine\-Tuning \(FFT\) provides the representational plasticity required for high\-entropy knowledge injection, Low\-Rank Adaptation \(LoRA\) can match or surpass FFT performance because many tasks only require updates in a low\-rank space and benefit from LoRA's additional regularization\. Through empirical evaluation across diverse tasks \(SQL, Medical QA, and Counterfactual Knowledge\) and varying language models \(Gemma\-3\-1B, Qwen2\.5\-1\.5B, and Qwen2\.5\-3B\), we verify both trends and demonstrate that relying solely on either static architecture is structurally limited\. To address this challenge, we propose a Mixture of LoRA and Full \(MoLF\) Fine\-Tuning, a unified framework that enables continuous navigation between both training regimes\. MoLF dynamically routes updates between FFT and LoRA at the optimizer level to ensure that exact gradient signals are available to both experts throughout training, yielding stable training dynamics\. For memory\-constrained environments, we also introduce MoLF\-Efficient, which freezes base weights and only routes updates among a pair of LoRA experts of potentially varying rank\. Our evaluations show that MoLF either improves on or stays within $1\.5$% of the better of FFT and LoRA across all settings, while MoLF\-Efficient outperforms prior adaptive LoRA approaches by up to $20$% on Fact and $9$% on Med and SQL\.

## Sparse Internal Control of Language Models

**Authors:** xizhe zhang

**ID:** 155214 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7Q8u18mL29>) | [PDF](<https://openreview.net/pdf?id=7Q8u18mL29>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155214>)

Language models are increasingly used in text generation, decision support, and automated interaction, where their behavior must be controlled in a localized, reversible, and selective way\. Existing methods either update shared parameters or constrain generation through external interfaces, leaving open whether frozen models contain compact internal control\. We introduce sparse internal control, a framework for steering target behavior by applying inference\-time interventions to a small set of internal model nodes\. The framework formulates control through local target controllability, where candidate site–direction pairs are characterized by their behavioral effects under target, preservation, and energy constraints\. This yields two complementary selectors: Driver\-OMP, which selects nodes that sparsely reconstruct a desired behavioral displacement, and Coverage\-Driver, which favors nodes whose effects cover prompts stably\. We further propose a six\-axis control\-evaluation protocol measuring reachability, signed reversal, dose response, feedback controllability, off\-target preservation, and held\-out reuse\. Across IOI, MMLU MCQA, and sentiment steering on models from GPT\-2 small to Qwen3\-4B, sparse driver sets act as executable actuators: they steer target behavior, respond monotonically to dose, support closed\-loop control, and preserve unrelated next\-token behavior\. On refusal steering, the same protocol exposes a boundary case that passes all evaluated axes except strict reachability\. Held\-out reuse separates prompt\-specific controls requiring refitted strengths from population\-level controls that transfer as frozen interventions\. These results show that model control can move beyond output\-side steering: mechanistic internal variables can be selected, certified, and reused as localized control handles for frozen language models\.

## Leaner transformers can easily learn to cluster

**Authors:** Charlotte Park; Kenneth Clarkson; Lior Horesh; Takuya Ito; Parikshit Ram

**ID:** 151648 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z3rZbU90DL>) | [PDF](<https://openreview.net/pdf?id=Z3rZbU90DL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151648>)

Transformers have in\-context learning capabilities, where some known learning algorithms can be executed in the forward pass through the model\. Recent work show that transformers can exactly perform Lloyd's algorithm for $k$\-means clustering with $n$ points in $d$ dimensions with an embedding size $d\_\{\\textsf\{emb\}\} = d\+k$ \(thus, requiring attention projection matrices of size $\(d\+k\)^2$\)\. In this work, we build upon this result in the following ways: First, we present an equally expressive but smaller transformer that executes Lloyd's algorithm with embedding size $d\_\{\\textsf\{emb\}\} = \(d \+ \\lceil \\log\_2 k \\rceil \)$\. Next, we train these transformers to learn the clustering algorithms given a distribution of clustering tasks, and theoretically characterize and empirically validate the factors affecting the convergence and in\-distribution generalization of stochastic gradients based learning algorithms\. Finally, we probe the general clustering abilities of these learned algorithms \(in the form of transformers\), and try to understand situations where they succeed and fail\.

## Transformers Converge to Invariant Algorithmic Cores

**Authors:** Joshua Schiffman

**ID:** 151845 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XSpP1DqsdD>) | [PDF](<https://openreview.net/pdf?id=XSpP1DqsdD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151845>)

Training selects for behavior, not circuitry: many weight configurations can implement the same function\. Studying any single trained neural network thus risks describing accidents of one training run rather than the computation itself\. This work shifts focus from what transformers happen to do to what they must do by extracting algorithmic cores, compact subspaces that are necessary and sufficient for a task and that recur across independently trained models\. Here, Algorithmic Core Extraction \(ACE\) is introduced to isolate these subspaces, causally validate them, and recover the algorithms they implement across settings ranging from synthetic tasks to large\-scale pretrained models\. Markov\-chain transformers embed three\-dimensional cores in nearly orthogonal subspaces yet recover identical transition spectra\. Modular\-addition transformers form compact cyclic cores at grokking that later inflate under continued regularization, redundantly distributing the same computation across many functionally equivalent modes\. This functional redundancy is found to accelerate the transition from memorization to generalization, yielding an inverse scaling law for grokking time\. In six language models spanning two orders of magnitude in scale \(GPT\-2 Small/Medium/Large, LLaMA\-3\.1, Gemma\-2, and Qwen2\.5\), subject\-verb agreement is governed by a single, steerable axis that aligns across architectures\. Flipping this axis inverts grammatical number throughout open\-ended generation\. Together these results suggest that beneath the apparent complexity of trained transformers lies a simpler, shared computational structure, and that targeting invariants rather than parameterizations may offer a more tractable path to mechanistic understanding and control\.

## Learning Provable Neural Network Observer for Uncertain Dynamical Systems

**Authors:** Zhangyi Wang; Jiaxu Liu; Chen Song; Chao Xu; Shengze Cai

**ID:** 148288 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yy5SiFn9vr>) | [PDF](<https://openreview.net/pdf?id=yy5SiFn9vr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148288>)

In many safety\-critical applications, control of uncertain dynamical systems relies on observers that estimate states and external disturbances\. Neural network observers can improve estimation accuracy, but certifying their Lyapunov stability via Linear Matrix Inequality \(LMI\) constraints leads to large\-scale semidefinite programs \(SDPs\) that are difficult to solve for large networks\. To overcome this scalability bottleneck, we propose a novel two\-stage training framework for provably stable neural network observers\. Our approach decouples the optimization into a point\-guided Lyapunov pre\-training phase, which rapidly achieves high estimation accuracy and local stability over sampled states, followed by an LMI fine\-tuning phase that efficiently satisfies a strict global Lyapunov stability certificate\. We provide formal theoretical guarantees for local stability radii and probabilistic coverage over a prescribed compact error\-state domain under specified regularity and sampling assumptions\. Experiments on nonlinear control benchmarks and X\-29 aircraft ablations show that our LMI\-certified neural network observers train significantly faster than direct LMI\-based methods and generalize robustly across diverse systems, achieving improved tracking accuracy over a range of observer baselines\. The code is available at https://anonymous\.4open\.science/r/LearningNeuralNetworkObserver\-2E1E\.

## Rethinking Language Model Scaling under Transferable Hypersphere Optimization

**Authors:** Liliang Ren; Yang Liu; yelong shen; Weizhu Chen

**ID:** 151695 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Yiph6nL9MR>) | [PDF](<https://openreview.net/pdf?id=Yiph6nL9MR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151695>)

Scaling laws for large language models depend critically on the optimizer and parameterization\. Existing hyperparameter transfer laws are mainly developed for first\-order optimizers, and they do not structurally prevent training instability at scale\. Recent hypersphere optimization methods constrain weight matrices to a fixed\-norm hypersphere, offering a promising alternative for more stable scaling\. We introduce HyperP \(Hypersphere Parameterization\), the first framework for transferring optimal learning rates across model width, depth, training tokens, and Mixture\-of\-Experts \(MoE\) granularity under the Frobenius\-sphere constraint with the Muon optimizer\. We prove that weight decay is a first\-order no\-op on the Frobenius sphere, show that Depth\-$\\mu$P remains necessary, and find that the optimal learning rate follows the same data\-scaling power law with the \`\`magic exponent'' 0\.32 previously observed for AdamW\. A single base learning rate tuned at the smallest scale transfers across all compute budgets under HyperP, yielding $1\.58\\times$ compute efficiency over a strong Muon baseline at $6\\times10^\{21\}$ FLOPs\. Moreover, HyperP delivers transferable stability: all monitored instability indicators, including $Z$\-values, output RMS, and activation outliers, remain bounded and non\-increasing under training FLOPs scaling\. We also propose SqrtGate, an MoE gating mechanism derived from the hypersphere constraint that preserves output RMS across MoE granularities for improved granularity scaling, and show that hypersphere optimization enables substantially larger auxiliary load\-balancing weights, yielding both strong performance and good expert balance\.

