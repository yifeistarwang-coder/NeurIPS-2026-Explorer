# Deep Learning / Attention Mechanisms

深度学习 / 注意力机制

70 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Spectral Degeneration of Softmax Attention under Isotropic Score Geometry

**Authors:** Mengda Li; Jianfeng Yao

**ID:** 154061 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GUj06j9XU5>) | [PDF](<https://openreview.net/pdf?id=GUj06j9XU5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154061>)

_Abstract unavailable from the accessible public sources._

## SOLA: A Structured Operator Library for Attention in Pretrained Vision Transformers

**Authors:** Enzo Tartaglione; Vito Paolo Pastore

**ID:** 149135 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=satkentfHg>) | [PDF](<https://openreview.net/pdf?id=satkentfHg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149135>)

Vision Transformers dominate modern image benchmarks, however, what trained self\-attention computes head by head remains unclear: prior work either injects inductive biases at initialization or clusters attention patterns visually without committing to a closed\-form computation\. We ask whether the softmax$\(QK^\\top\)$ inside a trained head can be replaced, without further training, by a structured closed\-form operator while preserving prediction and the residual\-stream trajectory\.  We answer yes across ten ViTs and seven pretrainings \(ImageNet\-1k, ImageNet\-21k FT, MAE, DINO, DINOv2, CLIP, SigLIP\), and package the result as \\textbf\{SOLA\}: a Structured Operator Library for Attention with three entries, each gated by a per\-head diagnostic that upper bounds substitution error\. The entries are a fixed 2D convolution kernel for shift heads, a per\-image broadcast row for fixed\-target heads, and a per\-image rank\-$k$ SVD of the attention matrix for near\-global heads\. A rank\-adaptive extension picks $k$ per head from the SVD spectrum and extends structural coverage to every head on every backbone, with task\-fidelity controlled by a single spectral threshold $\\tau$ that trades compression for downstream fidelity\. The diagnostics carry over to cross\-attention: every decoder cross\-attention head in BLIP captioning has effective rank $\\approx 1$ and admits the broadcast substitution\. A minimal reproducer that runs the full SOLA pipeline on a single backbone is included in the Supp\. Mat\. as a demo; the full codebase will be released open\-source upon acceptance\.

## Motif\-Mamba: network motif improved mamba for long\-range sequence modeling

**Authors:** Chonghe Hao; Yue Sun; Jian Zhang; Yansong Wang; Wangzi Yao; Yao Yunjie; Tielin Zhang

**ID:** 154995 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9Keyk37TpH>) | [PDF](<https://openreview.net/pdf?id=9Keyk37TpH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154995>)

Efficient long\-sequence modeling remains a central challenge for large language models, as self\-attention scales quadratically with sequence length\. Mamba offers a linear\-time alternative through selective state space recurrence, but its predominantly diagonal state transitions restrict explicit interactions among state dimensions\. We propose Motif\-Mamba, a structured state space model that augments Mamba with a motif\-constrained low\-rank recurrent pathway\. Inspired by the dynamics of three\-node network motifs, the proposed pathway projects hidden states into a compact dynamical subspace, imposes motif\-guided interactions, and maps the resulting dynamics back to the original state space\. This design enhances cross\-dimensional communication while preserving the linear\-time recurrent structure of Mamba\. Experiments on long\-sequence extrapolation, language modeling benchmarks, and brain\-\-computer interface decoding show consistent improvements over Mamba backbones, suggesting that motif\-guided low\-rank dynamics provide an effective structural prior for long\-range sequence modeling\.

## Fast KVzip: Efficient and Accurate LLM Inference with Gated KV Eviction

**Authors:** Jang\-Hyun Kim; Dongyoon Han; Sangdoo Yun

**ID:** 150502 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hbemMJsy3u>) | [PDF](<https://openreview.net/pdf?id=hbemMJsy3u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150502>)

_Abstract unavailable from the accessible public sources._

## RelFlexformer: Efficient Attention Transformers for Integrable Relative Positional Encodings

**Authors:** Byeongchan Kim; Arijit Sehanobish; Kumar Avinava Dubey; Min\-hwan Oh; Krzysztof M Choromanski

**ID:** 154871 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AHbhLrT1U0>) | [PDF](<https://openreview.net/pdf?id=AHbhLrT1U0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154871>)

_Abstract unavailable from the accessible public sources._

## SFPR: Structural Fingerprinting for LiDAR\-to\-OpenStreetMap Place Recognition

**Authors:** Jiajun Zheng; Ziwei Shi; Yu Zang; Chenlu Lin; Youbiao Wang; Wenjing Xu; Cheng Wang

**ID:** 152000 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WFadpugbFE>) | [PDF](<https://openreview.net/pdf?id=WFadpugbFE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152000>)

Cognitive neuroscience research indicates that human spatial navigation relies not merely on abstract global map representations, but rather on anchoring local observations to spatially stable, decision\-relevant landmarks to effectively align the current scene with the cognitive map\. Inspired by this mechanism, we propose SFPR, a structural fingerprint\-based LiDAR\-to\-OpenStreetMap \(OSM\) place recognition framework\. This framework goes beyond the traditional coarse retrieval paradigm that relies exclusively on global descriptor similarity and further introduces fine\-grained discrimination based on structural fingerprints to achieve more accurate place recognition\. Specifically, we propose a structural fingerprint\-aware attention mechanism that utilizes sparse but spatially stable anchors as saliency prompts, directing the network's attention toward potential fingerprint regions while dynamically generating global descriptors\. Subsequently, we formulate the extraction and matching of structural fingerprints as an alternating optimization problem guided by this fingerprint\-aware attention\. Through iterative optimization, we extract structural fingerprints with high fingerprint\-aware attention and geometric consistency from anchors\. These structural fingerprints are further fed back into the training stage as geometric priors, effectively suppressing false matches characterized by similar global features but contradictory local structures\. Experiments demonstrate that SFPR effectively overcomes the retrieval bottleneck in macroscopically homogeneous scenes, achieving a relative improvement of 30\.20\\% in Top\-1 Recall@1m compared to the current state\-of\-the\-art method\. Code are publicly available at https://anonymous\.4open\.science/r/SFPR\.

## Attention\-based PCA

**Authors:** Rodrigo Maulen Soto; Claire Boyer

**ID:** 154448 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DTfQiEFRDM>) | [PDF](<https://openreview.net/pdf?id=DTfQiEFRDM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154448>)

We study attention mechanisms through the lens of a canonical unsupervised problem: principal component analysis \(PCA\)\. We show that, when trained on Gaussian data, both softmax and linear attention layers learn parameters that align with the principal eigenvectors of the covariance matrix, thereby establishing a direct and explicit connection with PCA\.  Our analysis covers both finite and infinite prompt regimes\. In the infinite\-prompt limit, we prove convergence to globally optimal solutions aligned with the leading spectral direction, while in the finite\-prompt setting we show that the same behavior emerges up to sampling effects\. We further extend the analysis to an in\-context setting with spiked Wishart covariances, where attention successfully recovers the underlying signal direction\.  These results demonstrate that attention inherently performs PCA\-like computations under unsupervised objectives, providing a theoretical foundation for its representation\-learning capabilities\.

## Sink vs\. diagonal patterns as mechanisms for attention switch and oversmoothing prevention

**Authors:** Peter Súkeník; Cristina Lopez Amado; Christoph Lampert; Marco Mondelli

**ID:** 153161 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NPpBWkJvNA>) | [PDF](<https://openreview.net/pdf?id=NPpBWkJvNA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153161>)

This paper studies the role of sinks and diagonal patterns as attention switch and anti\-oversmoothing mechanisms\. We analyze geometric conditions under which sinks can be represented, showing a necessary alignment between the embedding of the sink and all other embeddings\. Next, we refine the current understanding of the role of sinks in oversmoothing prevention: we specify the conditions under which dense attention provably smooths more than sparse attention, and empirically verify that such conditions are often satisfied in practice\. We further prove an equivalence between sinks and hard attention switch, in which the output of the attention is identically 0\. Finally, we relax the hard attention switch by allowing token self\-communication: we provide a quantitative comparison of the costs of representing sinks vs\.\\ diagonal patterns, showing why sinks are favored in pretrained transformers\. The introduction and analysis of diagonal patterns and the generalization of the attention switch close the gap between what oversmoothing prevention requires and what sinks provide, while also establishing when and why attention layers act like MLPs if token communication is not necessary\.

## Flow Equivariant State Space Model

**Authors:** Chengrong Ye; Xinyan Gong; Lingwei Zhang; Yue Song

**ID:** 149264 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rbe5gNhR4J>) | [PDF](<https://openreview.net/pdf?id=rbe5gNhR4J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149264>)

Natural sequences often contain signals that move over time, such as translating objects, rotating digits, and drifting storm cells\. Selective state space models such as Mamba process such data efficiently, but their recurrent state is updated at fixed spatial coordinates\. As a result, evidence from a moving object can be accumulated across inconsistent locations rather than in the object's moving reference frame\. To address this problem, we introduce Flow\-SSM, a flow\-equivariant selective state space model that lifts recurrent memory to candidate motion branches and transports each branch along its corresponding flow before applying the selective update\. To handle real\-world sequences where broad motion and local deformation often occur at different scales, we further introduce Hierarchical Flow\-SSM, which organizes flow\-aligned memory in a coarse\-to\-fine hierarchy rather than a single flat representation\. We validate our architecture progressively: demonstrating exact transformation capture on Moving and Rotating MNIST, interpretable flow structures on KTH action videos, and the necessity of our multi\-scale design for complex forecasting on the SEVIR weather dataset\. Beyond merely improving predictive accuracy, our analyses confirm that the explicit flow alignment and hierarchical communication contribute measurably to the observed gains\. These results support transported recurrence as an effective inductive bias for spatiotemporal sequence modeling\.

## Quantifying Concentration Phenomena of Mean\-Field Transformers in the Low\-Temperature Regime

**Authors:** Albert Alcalde; Leon Bungert; Konstantin Riedl; Tim Roith

**ID:** 149032 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tLcRuEazgY>) | [PDF](<https://openreview.net/pdf?id=tLcRuEazgY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149032>)

Transformers with self\-attention modules as their core components have become an integral architecture in modern large language and foundation models\. In this paper, we study the evolution of tokens in deep encoder\-only transformers at inference time which is described in the large\-token limit by a mean\-field continuity equation\. Leveraging ideas from the convergence analysis of interacting multi\-particle systems, with particles corresponding to tokens, we prove that the token distribution rapidly concentrates onto the push\-forward of the initial distribution under a projection map induced by the key, query, and value matrices, and remains metastable for moderate times\. Specifically, we show that the Wasserstein distance of the two distributions scales like $\\sqrt\{\\log\(\\beta\+1\)/\\beta\}\\exp\(C t\)\+\\exp\(\-ct\)$ in terms of the temperature parameter $\\beta^\{\-1\}\\to 0$ and inference time $t\\geq 0$\. For the proof, we establish Lyapunov\-type estimates for the zero\-temperature equation, identify its limit as $t\\to\\infty$, and employ a stability estimate in Wasserstein space together with a quantitative Laplace principle to couple the two equations\. Our result implies that for time scales of order $\\log\\beta$ the token distribution concentrates at the identified limiting distribution\. Numerical experiments confirm this and, beyond that, complement our theory by showing that for finite $\\beta$ and large $t$ the dynamics enter a different terminal phase, dominated by the spectrum of the value matrix\.

## Reading Attribution from Attention: Evidence Heads as Latent Attribution Mechanisms in LLMs

**Authors:** Qi Wu; Jianfeng Qu; Peng\-Fei Zhang; Yanzhe Ji; Siyu Li; Wei Chen; Zhixu Li; Jiajie Xu

**ID:** 156092 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0QJyU7Bb8Y>) | [PDF](<https://openreview.net/pdf?id=0QJyU7Bb8Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156092>)

Large language models \(LLMs\) show strong performance in multi\-document question answering, but their practical deployment is limited by unreliable and unfaithful attribution to supporting evidence\. Existing prompting and training\-based methods often suffer from hallucinated citations and lack interpretability in how evidence is selected\. In this work, we investigate whether attribution signals are inherently encoded within transformer attention mechanisms\. We introduce a sensitivity\-based diagnostic that identifies a small subset of attention heads, termed \*\*Evidence Heads\*\*, which are highly responsive to perturbations in supporting documents\. Through causal interventions and semantic analysis, we show that these heads play a significant role in evidence identification and exhibit alignment with document\-level entailment signals\. Building on this finding, we propose a training\-free Attention\-based Attribution framework that extracts evidence signals directly from Evidence Head attention using global and local strategies\. Extensive experiments show that our method consistently outperforms strong baselines while remaining lightweight and interpretable\. Overall, our results suggest that structured attribution signals are implicitly encoded in LLM attention, and can be effectively leveraged for faithful multi\-document reasoning\.

## Diff\-Kalman: Difference\-Driven Learning for Structure\-Preserving Kalman Filtering

**Authors:** Jia Gao; Xianglei Xing; yang qing; Tianshuo Zhang; Wenzhe Zhai

**ID:** 150096 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kk5tmlhwi6>) | [PDF](<https://openreview.net/pdf?id=kk5tmlhwi6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150096>)

State estimation is a critical challenge in modeling dynamic systems\. Traditional Kalman filters and data\-driven methods have shown good results in complex, nonlinear systems\. However, most existing methods optimize the posterior without considering prior modeling, which leaves room for improvement in state estimation accuracy, and predict high\-dimensional Kalman parameters end\-to\-end, which lead to unstable training and poor convergence\. To address this, we propose Diff\-Kalman, which leverages state differences to predict state increments and scaling matrices for correcting both the prediction and update phases of the Kalman filter\. Diff\-Kalman combines traditional dynamic models with neural networks to adaptively correct system behavior\. In the prediction phase, Diff\-Kalman utilizes a Transformer\-based architecture with self\-attention to extract localized patterns from historical states, followed by cross\-attention to predict future state increments\. These increments are then fused with model\-based priors from the dynamic model\. In the update phase, a GRU\-based Scaling Predictor \(GSP\) dynamically adjusts the Kalman covariance and gain matrices based on differential residuals, which improves the accuracy and robustness of the estimation\. Experimental results on linear MOT trajectories and nonlinear Lorenz dynamics show that Diff\-Kalman improves estimation accuracy over representative baselines\.

## Data\-Efficient Learning for Constraint Satisfaction Problems via  Relational Biases and Hard Axiom Clamping

**Authors:** Enqiang Zhu; Ke Wang; Yu Zhang; Shengzhi Wang; Xianhang Luo; Chanjuan Liu

**ID:** 150335 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ism9H7dCPG>) | [PDF](<https://openreview.net/pdf?id=ism9H7dCPG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150335>)

Constraint satisfaction problems \(CSPs\) serve as critical benchmarks for neural algorithmic reasoning, requiring accurate multi\-step constraint propagation to determine variable values that satisfy all specified constraints\. Existing neural solvers often rely on extensive training datasets, struggle with distribution shifts, or allow fixed clues to drift in continuous spaces\. We introduce CSP\-RSB, a data\-efficient recurrent Transformer that directly incorporates constraint topology into the attention mechanism through a learnable relational bias\. Additionally, we propose a hard axiom clamping strategy that fixes clues after each recurrence constraint projection and uses the QK\-Norm to stabilize a two\-layer block\. In 9 \\times 9 Sudoku, CSP\-RSB achieves 99\.94\\% board accuracy on the RRN\-test, 99\.13\\% on unfiltered Kaggle, and 99\.78\\% on filtered Kaggle, surpassing the previous best, Trial \\&amp; Error 2025, which reported accuracies of 99\.40\\%, 98\.90\\%, and 99\.50\\%, respectively\. Furthermore, it successfully solves Erd\\H\{o\}s\-\-R\\'enyi graph coloring with 100\\% accuracy in 9 epochs and maintains 99\.5\-100\\% accuracy on 10 \\times 10 binary puzzles\. By incorporating explicit topological structure, CSP\-RSB reduces the need for depth and data requirements for effective algorithmic reasoning\.

## Data\-Adaptive Mahalanobis Metric Learning for Cross\-Head Attention in Transformers

**Authors:** Zhenke Duan; Xin Li; Jiqun Pan; Xiaofei Dong; Hanwen Ning; Xinyuan Song

**ID:** 151478 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aK0LiJE4IQ>) | [PDF](<https://openreview.net/pdf?id=aK0LiJE4IQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151478>)

In this paper, we propose Data\-Adaptive Mahalanobis Cross\-Head Attention \(DAMCHA\), a simple and effective attention mechanism that generalizes Multi\-Head Attention \(MHA\) through the lens of metric learning\. Standard MHA implicitly learns a static, head\-wise Euclidean similarity corresponding to the diagonal blocks of a unified cross\-head metric matrix, discarding all off\-diagonal interactions across heads\. DAMCHA addresses this limitation via two key innovations\. First, it learns the full cross\-head metric matrix, inducing a Mahalanobis\-like similarity that explicitly captures inter\-head interactions beyond the restricted block\-diagonal structure of MHA\. Second, it parameterizes the metric matrix as an input\-dependent function, enabling the attention geometry to dynamically adapt to the intrinsic manifold structure of the data rather than remaining fixed after training\. We further introduce principled regularization strategies, most notably stack\-wise parameter sharing, to ensure computational efficiency and stable optimization\. DAMCHA serves as a drop\-in replacement for MHA and its variants in various Transformer architectures, delivering superior expressive power and learning performance with comparable or reduced computational overhead\. Extensive experiments demonstrate that DAMCHA\-based Transformers consistently outperform competing baselines across a range of benchmark tasks\.  Code is available at https://anonymous\.4open\.science/r/DAMCHA\-3B37\.

## KV\-COBRA: KV Cache Compression via Co\-Optimized Bit\-Rank Allocation

**Authors:** Sihyeon Ha; Jaeho Lee; Yo\-Seb Jeon

**ID:** 154016 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gr6czrHyEk>) | [PDF](<https://openreview.net/pdf?id=Gr6czrHyEk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154016>)

What limits KV\-cache compression at extreme bit\-rates? We argue it is not the choice of compression scheme but how its budget is allocated across attention heads\. Existing methods apply rank and bit\-width uniformly, ignoring that each head has a different optimal mix of rank truncation and quantization\. We show that co\-optimizing rank and bit\-width per head — using only standard low\-rank projection and scalar quantization — dominates uniform allocation, with the largest gains at low bit\-rates\. Our method, KV\-COBRA \(Co\-Optimized Bit\-Rank Allocation\), formalizes this as a resource\-allocation problem: it balances rank\-truncation loss against quantization loss within each head, then redistributes budget across heads to minimize total distortion\. A fused Hadamard rotation equalizes per\-channel variance, and reordering the SVD basis by attention\-KL importance makes the solver query\-aware\. The same allocator extends to joint $K\{\+\}V$ compression\. On perplexity, zero\-shot, and long\-context benchmarks from $0\.5$ to $4$ bits per dimension \(bpd\), KV\-COBRA shows the smallest accuracy degradation among evaluated methods at low bpd, with no per\-token overhead\.

## Mixture\-of\-Top\-$k$ Attention: Efficient Attention as Scalable Fast Weights

**Authors:** Qishuai Wen; Zhiyuan Huang; meng xianghan; Wei He; CHUNGUANG LI

**ID:** 150679 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gIcv8jfze7>) | [PDF](<https://openreview.net/pdf?id=gIcv8jfze7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150679>)

_Abstract unavailable from the accessible public sources._

## Multiple Instance Verification

**Authors:** Xin Xu; Eibe Frank; Geoff Holmes

**ID:** 156670 | **Topic source:** official | **Abstract source:** missing | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156670>)

_Abstract unavailable from the accessible public sources._

## Attention Sinks and Outliers in Attention Residuals

**Authors:** Haozheng Luo; Haoran Dai; Shaoyang Zhang; Xi Chen; Eric Hanchen Jiang; Yijiang Li; Ching\-Yuen Huang; Chenghao Qiu; Chenwei Xu; Zhenyu Pan; Haotian Zhang; Binghui Wang; Yan Chen

**ID:** 148314 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yjVSLVS0Dh>) | [PDF](<https://openreview.net/pdf?id=yjVSLVS0Dh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148314>)

We propose OASIS, an outlier\- and sink\-aware technique built on inter\-layer null signaling\. As AttnResidual architectures introduce an additional depth\-wise normalization channel, they improve inter\-layer routing flexibility but also exacerbate attention sinks, activation outliers, and the resulting degradation in inference stability and quantization robustness\. OASIS addresses this issue by introducing a $\\mathop\{\\rm\{Softmax\}\}\_1$\-based null space and coupling token\-level null evidence to depth routing through an inter\-layer null signal, thereby reducing sink\-dominated routing and improving structural robustness\. Theoretically, we show that the dual\-normalization design of AttnResidual intensifies sink formation and quantization brittleness\. Experimentally, we compare OASIS against five baselines on three real\-world datasets and observe consistent improvements in both attention sink and post\-quantization performance\. Notably, OASIS achieves an average reduction of 9\.26\\% in maximum infinity norm and 2\.60\\% in average kurtosis across the evaluated settings, while lowering perplexity by 75\.85\\% under W8A8 and improving GSM8K Pass@1 by 12\.42\\% under W4A4\.

## Understanding the Effects of Hyper\-Connections on Self\-Attention Dynamics: A Bifurcation Analysis

**Authors:** Yen N Pham; Dung V Nguyen; Trinh Nguyen; Thieu Vo; Tan Nguyen

**ID:** 151454 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aY3DfjqhAX>) | [PDF](<https://openreview.net/pdf?id=aY3DfjqhAX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151454>)

A central challenge in understanding deep sequence models is characterizing how token representations evolve across layers: whether they collapse, diverge, or converge to nontrivial structures\. We study this question for Transformers with hyper\-connections, whose learnable cross\-layer coupling makes the stability of representation collapse analytically tractable\. In contrast to standard residual connections, hyper\-connections introduce additional parameters that directly control the hyperbolicity of the zero fixed point, at which the local stability is fully determined by the Jacobian eigenvalues, thereby enabling a rigorous and precise bifurcation analysis of the dynamical system underlying the model\. In particular, we derive a continuous\-depth ODE limit of self\-attention with hyper\-connections and use bifurcation theory to characterize its token dynamics\. For the 1\-stream case, we obtain a closed\-form critical threshold at which a pitchfork bifurcation occurs, separating representation collapse from divergence or convergence to nontrivial stable states\. For the 2\-stream case, the richer coupling structure yields two distinct stability boundaries, corresponding to qualitatively different instabilities: one arising when a real eigenvalue crosses zero, altering the number of nearby equilibria \(static type\), and another when a complex\-conjugate pair reaches the imaginary axis, leading to oscillatory behavior \(Hopf type\)\. These phenomena have no counterpart in the 1\-stream setting\. Experiments on pretrained hyper\-connected language models validate our theory and show that unstable regimes yield stronger performance\.

## Collapse Hunter: Tackling the Dimensional Degeneration in Generative Ranking

**Authors:** Haoran Xin; Junwei Pan; Yongqi Zhou; Tianqu Zhuang; YilongSun; Zhixiang Feng; Shoujun Liu; Gong Chen; Shudong Huang; Haijie Gu; Hui Xiong

**ID:** 154459 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DQIpp6LGTM>) | [PDF](<https://openreview.net/pdf?id=DQIpp6LGTM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154459>)

Generative ranking models \(GRMs\) have emerged as a scalable alternative to traditional recommendation pipelines by unifying items and user actions into a single token sequence and formulating recommendation as next\-token prediction\. Despite their promise, we identify a geometric failure mode: attention interactions with lowcardinality action tokens can induce dimensional collapse in high\-rank item representations, as suggested by interaction\-collapse theory\. To pinpoint the origin of collapse, we view attention mechanism over item–action interleaving sequences as a mixture of directional interaction channels between token types, and find that collapse concentrates in the action\-attending\-item channel, where low\-rank action gating drags the item value stream toward a low\-dimensional subspace\. To address this, we theoretically show that nonlinearity mitigates collapse, and propose Selective VAlue Nonlinearity \(SVAN\), a simple yet effective approach that applies nonlinear activation to the value component in the collapsed channel, protecting item representations while preserving the remaining attention geometry\. SVAN consistently improves the ranking quality over strong baselines\. Further analyses confirm that SVAN alleviates dimensional collapse, yielding up to a 12\.58% effective\-rank gain, and enhances representation discriminability\.

## Closing the Loop with Fixed\-Point Self\-Attention

**Authors:** Mrinal Mathur; Barak Pearlmutter; Sergey Plis

**ID:** 153850 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IH0NcTKzaZ>) | [PDF](<https://openreview.net/pdf?id=IH0NcTKzaZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153850>)

_Abstract unavailable from the accessible public sources._

## Flux Attention: Context\-Aware Hybrid Attention for Efficient LLMs Inference

**Authors:** Quantong Qiu; Zhiyi Hong; Yi Yang; Haitian Wang; Kebin Liu; Qingqing Dang; Juntao Li; Min zhang

**ID:** 154703 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BfLKfkqbAC>) | [PDF](<https://openreview.net/pdf?id=BfLKfkqbAC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154703>)

_Abstract unavailable from the accessible public sources._

## RAM\-Net: Linear\-Time Sequence Modeling with Sparsely Addressable State

**Authors:** Kaicheng Xiao; Haotian Li; Liran Dong; Guoliang Xing

**ID:** 152777 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QPjqzE6cUh>) | [PDF](<https://openreview.net/pdf?id=QPjqzE6cUh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152777>)

_Abstract unavailable from the accessible public sources._

## Closing the Loop with Fixed\-Point Self\-Attention

**Authors:** Mrinal Mathur; Barak Pearlmutter; Sergey Plis

**ID:** 153850\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153850

[Paper](<https://openreview.net/forum?id=IH0NcTKzaZ>) | [PDF](<https://openreview.net/pdf?id=IH0NcTKzaZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153850>)

_Abstract unavailable from the accessible public sources._

## Flux Attention: Context\-Aware Hybrid Attention for Efficient LLMs Inference

**Authors:** Quantong Qiu; Zhiyi Hong; Yi Yang; Haitian Wang; Kebin Liu; Qingqing Dang; Juntao Li; Min zhang

**ID:** 154703\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154703

[Paper](<https://openreview.net/forum?id=BfLKfkqbAC>) | [PDF](<https://openreview.net/pdf?id=BfLKfkqbAC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154703>)

_Abstract unavailable from the accessible public sources._

## RoPE Is Not a Proper Relative Position Embedding

**Authors:** Yui Oka; Kyosuke Nishida; Sho Yokoi

**ID:** 140089 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HKQWXNPs9b>) | [PDF](<https://openreview.net/pdf?id=HKQWXNPs9b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140089>)

Rotary Position Embedding \(RoPE\) is one of the most widely used positional mechanisms in modern large language models\.  Because RoPE applies position\-dependent rotations whose attention score can be rewritten in terms of relative offsets, subsequent work has sometimes classified it as a relative position embedding\. In this position paper, we argue that RoPE is not a proper relative position embedding\. Treating RoPE as a relative position embedding can create overly strong expectations about length extrapolation, context extension, and comparisons with other positional mechanisms\.  In practice, however, these expectations have not been borne out: RoPE\-based long\-context models typically rely on position interpolation, continued training, or fine\-tuning\. This is more consistent with an absolute\-position\-conditioned view of RoPE\. We argue that this reframing, which is closer to the original formulation, offers a more precise conceptual foundation for analyzing RoPE, understanding long\-context behavior, and comparing positional mechanisms in modern LLMs\. To make this distinction precise, we formalize the distance\-decay property that has been implicitly expected of relative position embeddings and show that RoPE does not satisfy it\.

## Long\-Context Language Models Require Extreme Sparsity in Context Dimension

**Authors:** Prithvi Dixit; Sahil Joshi; Agniva Chowdhury; Anshumali Shrivastava; Joseph Gonzalez; Ion Stoica; Kumar Krishna Agrawal; Aditya Desai

**ID:** 140121 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1Zx0QQnAfD>) | [PDF](<https://openreview.net/pdf?id=1Zx0QQnAfD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140121>)

Sparsity has long been a central theme in LLM efficiency but its role in context processing remains unresolved\. As LLM workloads shift toward longer contexts and agentic interactions, the compute and memory bottlenecks of attention become increasingly critical, raising the question of whether these constraints are fundamental\. Our position: this constraint is artificial, unnecessary and the future of LLM inference lies in extreme but principled sparsity along the context dimension\. Our position comes out of various bits of empirical and theoretical evidence\. Firstly, we find insistance on dense attention unreasonable since in long context a query essentially projects the O\(N\) attention information into hidden space of diemsion $d &lt;&lt; N$\. This, as we show is extremely lossy\. Instead, we propose a completely context\-sparse context processing combining top\-k sparsity with linear attention / SSMs as the way forward\. To support our proposal we show that this combination can approximately cover the functional space of dense softmax attention\. Independently but importantly, in a first elaborate study of its kind, we empirically show a strong trend towards current LLM models, which are not trained for context sparsity, being extremely robust to inference time decode\-sparsity across tasks of varying complexities such as retrieval, multi\-hop QA, and mathematical reasoning and agentic coding\. For instance, Qwen3\.5\-27B can tolerate upto 100x sparsity on benchmarks of RULER\-HARD, LOFT and AIME2025 without loss of quality, and upto $50\\times$ on SWE with a small drop in quality\. These results emphasize the possibility that we can transition to complete sparsity without any loss of capability\. Additionally, we also discuss what this shift in paradigm of context processing means for hardware\. Importantly, we show that even current hardware is equipped enough to realise gains from this sparsity\. For instance, our sparse decode kernels can accelerate large context processing by a factor 10x over FlashInfer at 50x sparsity levels on current hardware such as H100\. Overall, these results position extreme context sparsity not as a heuristic, but as a principled foundation for LLM inference, training, and architecture design, both feasible and beneficial, and a compelling direction for future systems\.

## Quantifying Concentration Phenomena of Mean\-Field Transformers in the Low\-Temperature Regime

**Authors:** Albert Alcalde; Leon Bungert; Konstantin Riedl; Tim Roith

**ID:** 149032\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149032

[Paper](<https://openreview.net/forum?id=tLcRuEazgY>) | [PDF](<https://openreview.net/pdf?id=tLcRuEazgY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149032>)

Transformers with self\-attention modules as their core components have become an integral architecture in modern large language and foundation models\. In this paper, we study the evolution of tokens in deep encoder\-only transformers at inference time which is described in the large\-token limit by a mean\-field continuity equation\. Leveraging ideas from the convergence analysis of interacting multi\-particle systems, with particles corresponding to tokens, we prove that the token distribution rapidly concentrates onto the push\-forward of the initial distribution under a projection map induced by the key, query, and value matrices, and remains metastable for moderate times\. Specifically, we show that the Wasserstein distance of the two distributions scales like $\\sqrt\{\\log\(\\beta\+1\)/\\beta\}\\exp\(C t\)\+\\exp\(\-ct\)$ in terms of the temperature parameter $\\beta^\{\-1\}\\to 0$ and inference time $t\\geq 0$\. For the proof, we establish Lyapunov\-type estimates for the zero\-temperature equation, identify its limit as $t\\to\\infty$, and employ a stability estimate in Wasserstein space together with a quantitative Laplace principle to couple the two equations\. Our result implies that for time scales of order $\\log\\beta$ the token distribution concentrates at the identified limiting distribution\. Numerical experiments confirm this and, beyond that, complement our theory by showing that for finite $\\beta$ and large $t$ the dynamics enter a different terminal phase, dominated by the spectrum of the value matrix\.

## Orthrus: Memory\-Efficient Parallel Token Generation via Dual\-View Diffusion

**Authors:** Van Chien Nguyen; Chaitra Hegde; Van\-Cuong Pham; Ryan Rossi; Franck Dernoncourt; Thien H Nguyen

**ID:** 150719 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fwaVRSuVPd>) | [PDF](<https://openreview.net/pdf?id=fwaVRSuVPd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150719>)

We introduce Orthrus, a simple and efficient dual\-architecture framework that unifies the exact generation fidelity of autoregressive Large Language Models \(LLMs\) with the high\-speed parallel token generation of diffusion models\. The sequential nature of standard autoregressive decoding represents a fundamental bottleneck for high\-throughput inference\. While diffusion language models attempt to break this barrier via parallel generation, they suffer from significant performance degradation, high training costs, and a lack of rigorous convergence guarantees\. Orthrus resolves this dichotomy natively\. Designed to seamlessly integrate into existing Transformers, the framework augments a frozen LLM with a lightweight, trainable module to create a parallel diffusion view alongside the standard autoregressive view\. In this unified system, both views attend to the exact same high\-fidelity Key\-Value \(KV\) cache; the autoregressive head executes context pre\-filling to construct accurate KV representations, while the diffusion head executes parallel generation\. By employing an exact consensus mechanism between the two views, Orthrus guarantees lossless inference, delivering up to a $7\.8\\times$ speedup with only an $O\(1\)$ memory cache overhead and minimal parameter additions\.

## Gated DeltaNet\-2: Decoupling Erase and Write in Linear Attention

**Authors:** Ali Hatamizadeh; Yejin Choi; Jan Kautz

**ID:** 148191 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zdcl2dDW9a>) | [PDF](<https://openreview.net/pdf?id=zdcl2dDW9a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148191>)

Linear attention replaces the unbounded cache of softmax attention with a fixed\-size recurrent state, reducing sequence mixing to linear time and decoding to constant memory\. The hard part is not just what to forget, but how to edit this compressed memory without scrambling existing associations\. Delta\-rule models subtract the current read before writing a new value, and Kimi Delta Attention \(KDA\) sharpens forgetting with channel\-wise decay\. But the active edit still uses a single scalar gate to control two different things: how much old content to erase on the key side and how much new content to commit on the value side\. We introduce Gated DeltaNet\-2, which generalizes both Gated DeltaNet and KDA by inheriting adaptive forgetting and channel\-wise decay while addressing their shared limitation, the scalar tie between erasing and writing\. Gated Delta Rule\-2 separates these roles with a channel\-wise erase gate $\\boldsymbol\{b\}\_t$ and a channel\-wise write gate $\\boldsymbol\{w\}\_t$, reducing to KDA when both gates collapse to the same scalar and to Gated DeltaNet when the decay also collapses\. We derive a fast\-weight update view, a chunkwise WY algorithm with channel\-wise decay absorbed into asymmetric erase factors, and a gate\-aware backward pass that preserves efficient parallel training\. At 1\.3B parameters trained on 100B FineWeb\-Edu tokens, Gated DeltaNet\-2 achieves the strongest overall results among Mamba\-2, Gated DeltaNet, KDA, and Mamba\-3 variants across language modeling, commonsense reasoning, and retrieval\. Its advantage is most pronounced on long\-context RULER needle\-in\-a\-haystack benchmarks, where it improves the evaluated multi\-key retrieval setting and remains strong in both recurrent and hybrid settings\.

## Predictive Geometry of Hidden Trajectories in Transformers

**Authors:** Timur Mudarisov; Mikhail Burtsev; Tatiana Petrova; Radu State

**ID:** 155827 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2abHWd81WV>) | [PDF](<https://openreview.net/pdf?id=2abHWd81WV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155827>)

_Abstract unavailable from the accessible public sources._

## Coverage\-Verified Sparse Attention: Closed\-Loop Quality Control for Long\-Context LLM Decoding

**Authors:** Yan\-Cheng Li; Chun\-Yi Lee

**ID:** 155083 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8Z6u3YSO1c>) | [PDF](<https://openreview.net/pdf?id=8Z6u3YSO1c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155083>)

_Abstract unavailable from the accessible public sources._

## Flexformer: Flexible Linear Transformer with Learnable Attention Kernel

**Authors:** Haoran Zhang; Zisu Dong; Feng Zhou

**ID:** 154501 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D8frDvzgAf>) | [PDF](<https://openreview.net/pdf?id=D8frDvzgAf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154501>)

_Abstract unavailable from the accessible public sources._

## Transformers in the Dark: Navigating Unknown Search Spaces via Bandit Feedback

**Authors:** Jungtaek Kim; Thomas Zeng; Ziqian Lin; Minjae Lee; Chungpa Lee; Jy\-yong Sohn; Hyung Koo; Kangwook Lee

**ID:** 156799 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jij7zCjVfc>) | [PDF](<https://openreview.net/pdf?id=Jij7zCjVfc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156799>)

Effective problem solving with Large Language Models \(LLMs\) can be enhanced when they are paired with external search algorithms\. By viewing the space of diverse ideas and their follow\-up possibilities as a tree structure, the search algorithm can navigate such a search space and guide the LLM toward better solutions more efficiently\. While the search algorithm enables an effective balance between exploitation and exploration of a tree\-structured space, the need for an external component can complicate the overall problem\-solving process\. We therefore pose the following question: Can LLMs or their underlying Transformer architectures approximate a search algorithm? To answer this question, we first introduce a simplified framework in which tree extensions and feedback signals are externally specified, allowing for controlled evaluation of search capabilities\. We call this setting unknown tree search with bandit feedback\. Within this setting, we show that Transformers are theoretically expressive enough to implement distinct search strategies and can be trained from scratch to approximate those strategies\. Our Transformer models exhibit the possibility of generalizing to unseen conditions such as longer horizons or deeper trees\. Furthermore, we demonstrate that continued task\-focused training unlocks the complete capabilities of a pretrained LLM, by fine\-tuning the LLM on search trajectories\.

## Attention Sinks and Outliers in Attention Residuals

**Authors:** Haozheng Luo; Haoran Dai; Shaoyang Zhang; Xi Chen; Eric Hanchen Jiang; Yijiang Li; Ching\-Yuen Huang; Chenghao Qiu; Chenwei Xu; Zhenyu Pan; Haotian Zhang; Binghui Wang; Yan Chen

**ID:** 148314\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148314

[Paper](<https://openreview.net/forum?id=yjVSLVS0Dh>) | [PDF](<https://openreview.net/pdf?id=yjVSLVS0Dh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148314>)

We propose OASIS, an outlier\- and sink\-aware technique built on inter\-layer null signaling\. As AttnResidual architectures introduce an additional depth\-wise normalization channel, they improve inter\-layer routing flexibility but also exacerbate attention sinks, activation outliers, and the resulting degradation in inference stability and quantization robustness\. OASIS addresses this issue by introducing a $\\mathop\{\\rm\{Softmax\}\}\_1$\-based null space and coupling token\-level null evidence to depth routing through an inter\-layer null signal, thereby reducing sink\-dominated routing and improving structural robustness\. Theoretically, we show that the dual\-normalization design of AttnResidual intensifies sink formation and quantization brittleness\. Experimentally, we compare OASIS against five baselines on three real\-world datasets and observe consistent improvements in both attention sink and post\-quantization performance\. Notably, OASIS achieves an average reduction of 9\.26\\% in maximum infinity norm and 2\.60\\% in average kurtosis across the evaluated settings, while lowering perplexity by 75\.85\\% under W8A8 and improving GSM8K Pass@1 by 12\.42\\% under W4A4\.

## Understanding the Effects of Hyper\-Connections on Self\-Attention Dynamics: A Bifurcation Analysis

**Authors:** Yen N Pham; Dung V Nguyen; Trinh Nguyen; Thieu Vo; Tan Nguyen

**ID:** 151454\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151454

[Paper](<https://openreview.net/forum?id=aY3DfjqhAX>) | [PDF](<https://openreview.net/pdf?id=aY3DfjqhAX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151454>)

A central challenge in understanding deep sequence models is characterizing how token representations evolve across layers: whether they collapse, diverge, or converge to nontrivial structures\. We study this question for Transformers with hyper\-connections, whose learnable cross\-layer coupling makes the stability of representation collapse analytically tractable\. In contrast to standard residual connections, hyper\-connections introduce additional parameters that directly control the hyperbolicity of the zero fixed point, at which the local stability is fully determined by the Jacobian eigenvalues, thereby enabling a rigorous and precise bifurcation analysis of the dynamical system underlying the model\. In particular, we derive a continuous\-depth ODE limit of self\-attention with hyper\-connections and use bifurcation theory to characterize its token dynamics\. For the 1\-stream case, we obtain a closed\-form critical threshold at which a pitchfork bifurcation occurs, separating representation collapse from divergence or convergence to nontrivial stable states\. For the 2\-stream case, the richer coupling structure yields two distinct stability boundaries, corresponding to qualitatively different instabilities: one arising when a real eigenvalue crosses zero, altering the number of nearby equilibria \(static type\), and another when a complex\-conjugate pair reaches the imaginary axis, leading to oscillatory behavior \(Hopf type\)\. These phenomena have no counterpart in the 1\-stream setting\. Experiments on pretrained hyper\-connected language models validate our theory and show that unstable regimes yield stronger performance\.

## Collapse Hunter: Tackling the Dimensional Degeneration in Generative Ranking

**Authors:** Haoran Xin; Junwei Pan; Yongqi Zhou; Tianqu Zhuang; YilongSun; Zhixiang Feng; Shoujun Liu; Gong Chen; Shudong Huang; Haijie Gu; Hui Xiong

**ID:** 154459\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154459

[Paper](<https://openreview.net/forum?id=DQIpp6LGTM>) | [PDF](<https://openreview.net/pdf?id=DQIpp6LGTM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154459>)

Generative ranking models \(GRMs\) have emerged as a scalable alternative to traditional recommendation pipelines by unifying items and user actions into a single token sequence and formulating recommendation as next\-token prediction\. Despite their promise, we identify a geometric failure mode: attention interactions with lowcardinality action tokens can induce dimensional collapse in high\-rank item representations, as suggested by interaction\-collapse theory\. To pinpoint the origin of collapse, we view attention mechanism over item–action interleaving sequences as a mixture of directional interaction channels between token types, and find that collapse concentrates in the action\-attending\-item channel, where low\-rank action gating drags the item value stream toward a low\-dimensional subspace\. To address this, we theoretically show that nonlinearity mitigates collapse, and propose Selective VAlue Nonlinearity \(SVAN\), a simple yet effective approach that applies nonlinear activation to the value component in the collapsed channel, protecting item representations while preserving the remaining attention geometry\. SVAN consistently improves the ranking quality over strong baselines\. Further analyses confirm that SVAN alleviates dimensional collapse, yielding up to a 12\.58% effective\-rank gain, and enhances representation discriminability\.

## CommunityKV: Efficient Long\-Context Decoding via Graph Partitioning

**Authors:** Joe McKenna; Anastasios Alexandridis; Nathan Susanj; Jing Liu

**ID:** 154739 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BNHDGnaga1>) | [PDF](<https://openreview.net/pdf?id=BNHDGnaga1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154739>)

Scaling Transformers to long contexts is constrained by the quadratic cost of self\-attention and the linear growth of key\-value cache memory transfer\. Sparse attention mitigates this by retrieving only relevant tokens, but current approaches either require large\-scale training or, within the training\-free regime, rely on semantically coarse heuristics or expensive clustering that is difficult to update efficiently during decoding\. We introduce CommunityKV, a framework that formulates sparse attention as a community detection problem\. CommunityKV constructs a token graph from the $QK^T$ scores already computed during standard prefill, and partitions the graph into communities to enable retrieval of semantically coherent token groups\. A local update rule assigns newly generated tokens to communities in constant time, enabling sparse retrieval throughout streaming decoding without global re\-partitioning\. We evaluate CommunityKV on open weight models and long context benchmarks, demonstrating that our approach achieves up to $1\.86\\times$ higher decoding throughput than exact FlashAttention\-2 with negligible accuracy degradation\.

## CHARM\+: Cross\-Hardware Attention with Re\-Merge Multistream Mechanism

**Authors:** Xinhang Zhang; Boning Zhang; Chengchun Liu; Chunpu Li; Lei Sun; Weifeng Zhang; Limin Xiao

**ID:** 154071 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GP3kYFlyJj>) | [PDF](<https://openreview.net/pdf?id=GP3kYFlyJj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154071>)

As sequence lengths continue to grow, distributed attention based on sequence parallel \(e\.g\., Ring\-Attention\) has become a mainstream solution for large language models \(LLMs\)\. Nevertheless, inherent communication dependencies limit computation–communication overlap, reducing GPU utilization\. Moreover, in cross\-hardware \(NUMA or node\) architectures, due to imbalanced communication bandwidth, frequent communication synchronization will limit overall performance\. Based on these insights, we propose CHARM\+, Cross\-Hardware Attention with Re\-Merge Multistream Mechanism\. We reorganize sequential communications into several levels and achieve intra\-level parallelism and computation overlap\. Furthermore, we decouple cross\-hardware communication from intra\-hardware communication, eliminating synchronization overhead caused by bandwidth imbalance\. Forward and backward algorithms were evaluated on multiple hardware architectures and consistently outperformed state\-of\-the\-art methods\. Compared to Ring\-Attention, our forward and backward algorithms achieve average speedups of $1\.3\\times$ and $1\.7\\times$ on a dual\-NUMA PCIe architecture, and $2\.8\\times $ and $3\.9\\times$ on a dual\-node NVLink architecture, respectively\.

## Data\-Adaptive Mahalanobis Metric Learning for Cross\-Head Attention in Transformers

**Authors:** Zhenke Duan; Xin Li; Jiqun Pan; Xiaofei Dong; Hanwen Ning; Xinyuan Song

**ID:** 151478\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151478

[Paper](<https://openreview.net/forum?id=aK0LiJE4IQ>) | [PDF](<https://openreview.net/pdf?id=aK0LiJE4IQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151478>)

In this paper, we propose Data\-Adaptive Mahalanobis Cross\-Head Attention \(DAMCHA\), a simple and effective attention mechanism that generalizes Multi\-Head Attention \(MHA\) through the lens of metric learning\. Standard MHA implicitly learns a static, head\-wise Euclidean similarity corresponding to the diagonal blocks of a unified cross\-head metric matrix, discarding all off\-diagonal interactions across heads\. DAMCHA addresses this limitation via two key innovations\. First, it learns the full cross\-head metric matrix, inducing a Mahalanobis\-like similarity that explicitly captures inter\-head interactions beyond the restricted block\-diagonal structure of MHA\. Second, it parameterizes the metric matrix as an input\-dependent function, enabling the attention geometry to dynamically adapt to the intrinsic manifold structure of the data rather than remaining fixed after training\. We further introduce principled regularization strategies, most notably stack\-wise parameter sharing, to ensure computational efficiency and stable optimization\. DAMCHA serves as a drop\-in replacement for MHA and its variants in various Transformer architectures, delivering superior expressive power and learning performance with comparable or reduced computational overhead\. Extensive experiments demonstrate that DAMCHA\-based Transformers consistently outperform competing baselines across a range of benchmark tasks\.  Code is available at https://anonymous\.4open\.science/r/DAMCHA\-3B37\.

## KV\-COBRA: KV Cache Compression via Co\-Optimized Bit\-Rank Allocation

**Authors:** Sihyeon Ha; Jaeho Lee; Yo\-Seb Jeon

**ID:** 154016\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154016

[Paper](<https://openreview.net/forum?id=Gr6czrHyEk>) | [PDF](<https://openreview.net/pdf?id=Gr6czrHyEk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154016>)

What limits KV\-cache compression at extreme bit\-rates? We argue it is not the choice of compression scheme but how its budget is allocated across attention heads\. Existing methods apply rank and bit\-width uniformly, ignoring that each head has a different optimal mix of rank truncation and quantization\. We show that co\-optimizing rank and bit\-width per head — using only standard low\-rank projection and scalar quantization — dominates uniform allocation, with the largest gains at low bit\-rates\. Our method, KV\-COBRA \(Co\-Optimized Bit\-Rank Allocation\), formalizes this as a resource\-allocation problem: it balances rank\-truncation loss against quantization loss within each head, then redistributes budget across heads to minimize total distortion\. A fused Hadamard rotation equalizes per\-channel variance, and reordering the SVD basis by attention\-KL importance makes the solver query\-aware\. The same allocator extends to joint $K\{\+\}V$ compression\. On perplexity, zero\-shot, and long\-context benchmarks from $0\.5$ to $4$ bits per dimension \(bpd\), KV\-COBRA shows the smallest accuracy degradation among evaluated methods at low bpd, with no per\-token overhead\.

## Value\-Aware Stochastic KV Cache Eviction for Reasoning Models

**Authors:** Ting\-Yun Chang; Harvey Yiyun Fu; Deqing Fu; Chenghao Yang; Jesse Thomason; Robin Jia

**ID:** 152707 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=R0GnMD9bkE>) | [PDF](<https://openreview.net/pdf?id=R0GnMD9bkE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152707>)

_Abstract unavailable from the accessible public sources._

## Mixture\-of\-Top\-$k$ Attention: Efficient Attention as Scalable Fast Weights

**Authors:** Qishuai Wen; Zhiyuan Huang; meng xianghan; Wei He; CHUNGUANG LI

**ID:** 150679\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150679

[Paper](<https://openreview.net/forum?id=gIcv8jfze7>) | [PDF](<https://openreview.net/pdf?id=gIcv8jfze7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150679>)

_Abstract unavailable from the accessible public sources._

## Multiple Instance Verification

**Authors:** Xin Xu; Eibe Frank; Geoff Holmes

**ID:** 156670\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** missing

**Repeated source row:** 156670

[Official poster](<https://neurips.cc/virtual/2026/poster/156670>)

_Abstract unavailable from the accessible public sources._

## SimpliHuMoN: Simplifying Human Motion Prediction

**Authors:** Aadya Agrawal; Alex Schwing

**ID:** 148808 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uxFUvDqw0F>) | [PDF](<https://openreview.net/pdf?id=uxFUvDqw0F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148808>)

Human motion prediction combines the tasks of trajectory forecasting and human pose prediction\. For each of the two tasks, specialized models have been developed\. Combining these models for holistic human motion prediction is non\-trivial, and recent methods have struggled to compete on established benchmarks for individual tasks\. To address this, we propose a simple yet effective transformer\-based model for human motion prediction\. The model employs a stack of self\-attention modules to effectively capture both spatial dependencies within a pose and temporal relationships across a motion sequence\. This simple, streamlined, end\-to\-end model is sufficiently versatile to handle pose\-only, trajectory\-only, and combined prediction tasks without task\-specific modifications\. We demonstrate that this approach achieves state\-of\-the\-art or on\-par results across all tasks through extensive experiments on a wide range of benchmark datasets, including Human3\.6M, AMASS, ETH\-UCY, and 3DPW\. Code will be released\.

## Hypergraph Modeling of Transformer Attention for Hallucination Detection

**Authors:** Mark Junjie Li; zhishun liu; Wei Wang; Yuanshan Lu; yangjingxi; Xianyu Bao; Jun Li; Sunjie Huang

**ID:** 154475 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DKOfhIFbgb>) | [PDF](<https://openreview.net/pdf?id=DKOfhIFbgb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154475>)

_Abstract unavailable from the accessible public sources._

## CHARM\+: Cross\-Hardware Attention with Re\-Merge Multistream Mechanism

**Authors:** Xinhang Zhang; Boning Zhang; Chengchun Liu; Chunpu Li; Lei Sun; Weifeng Zhang; Limin Xiao

**ID:** 154071\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154071

[Paper](<https://openreview.net/forum?id=GP3kYFlyJj>) | [PDF](<https://openreview.net/pdf?id=GP3kYFlyJj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154071>)

As sequence lengths continue to grow, distributed attention based on sequence parallel \(e\.g\., Ring\-Attention\) has become a mainstream solution for large language models \(LLMs\)\. Nevertheless, inherent communication dependencies limit computation–communication overlap, reducing GPU utilization\. Moreover, in cross\-hardware \(NUMA or node\) architectures, due to imbalanced communication bandwidth, frequent communication synchronization will limit overall performance\. Based on these insights, we propose CHARM\+, Cross\-Hardware Attention with Re\-Merge Multistream Mechanism\. We reorganize sequential communications into several levels and achieve intra\-level parallelism and computation overlap\. Furthermore, we decouple cross\-hardware communication from intra\-hardware communication, eliminating synchronization overhead caused by bandwidth imbalance\. Forward and backward algorithms were evaluated on multiple hardware architectures and consistently outperformed state\-of\-the\-art methods\. Compared to Ring\-Attention, our forward and backward algorithms achieve average speedups of $1\.3\\times$ and $1\.7\\times$ on a dual\-NUMA PCIe architecture, and $2\.8\\times $ and $3\.9\\times$ on a dual\-node NVLink architecture, respectively\.

## When Attention Collapses: Residual Evidence Modeling for Compositional Inference

**Authors:** Niklas Houba

**ID:** 150504 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hbOb7WNLD6>) | [PDF](<https://openreview.net/pdf?id=hbOb7WNLD6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150504>)

Compositional inference \- the decomposition of observations into an unknown number of latent components \- is central to perception and scientific data analysis\. Attention\-based models perform well when components are approximately separable, as in object\-centric vision\. Under additive superposition, however \- where multiple components contribute to every observation \- we identify a structural failure mode we term slot collapse: multiple slots converge to the same dominant component while weaker ones remain unrepresented\. We trace this to a general limitation: attention is memoryless with respect to explained evidence\. All slots repeatedly operate on the same input without accounting for what has already been explained, so gradients are dominated by the strongest component, inducing shared fixed points across slots\. As a result, attention fails to enforce non\-redundant allocation under additive superposition\. We address this by introducing residual evidence modeling, which tracks the remaining explanatory capacity of the input, instantiated via evidence depletion \- a minimal modification combining multiplicative depletion with an attention bias\. Controlled ablations show that parallel attention, sequential processing alone, and loss\-based regularization all fail to resolve collapse; evidence depletion, which adds stateful residual tracking to sequential attention, consistently succeeds\. Across synthetic benchmarks and real\-world audio mixtures \(FUSS\), evidence depletion reduces slot collapse by up to an order of magnitude, generalizing beyond synthetic settings\. On gravitational\-wave source inference for the ESA/NASA LISA mission, under identical architectures, data, and losses, standard attention fails while evidence depletion prevents collapse and enables multi\-source posterior estimation\. These results show that under additive superposition, residual evidence tracking is the operative ingredient \- preventing collapse and enabling compositional inference\.

## RankVQ: Low\-Rank Parameterized Commutative Vector Quantization for KV Cache Compression

**Authors:** Jianglin Zhou; Huaming Wu; Huijun Tang

**ID:** 148642 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wBu1wjG1xm>) | [PDF](<https://openreview.net/pdf?id=wBu1wjG1xm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148642>)

_Abstract unavailable from the accessible public sources._

## EAT: Eviction\-Aware Training for Long\-Context LLM Inference on Edge Devices

**Authors:** Ke Chen; Xiaohui Song; Chi Xie; ZhiGuang Zhu; ZIXIAN LI; Hao\-Yun Chen; Peng\-Wen Chen; Chen Chen; Haonan Lu

**ID:** 155582 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4YJpkRqrAO>) | [PDF](<https://openreview.net/pdf?id=4YJpkRqrAO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155582>)

_Abstract unavailable from the accessible public sources._

## Parabolic Position Encoding: Vision\-Centric, Principled, Extrapolatable, General

**Authors:** Christoffer Koo Øhrstrøm; Rafael I Cabral Muchacho; Yifei Dong; Filippos Moumtzidellis; Ronja Güldenring; Florian T\. Pokorny; Lazaros Nalpantidis

**ID:** 151484 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aHGX6FOsYg>) | [PDF](<https://openreview.net/pdf?id=aHGX6FOsYg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151484>)

_Abstract unavailable from the accessible public sources._

## Attention Sinks and Outliers in Attention Residuals

**Authors:** Haozheng Luo; Haoran Dai; Shaoyang Zhang; Xi Chen; Eric Hanchen Jiang; Yijiang Li; Ching\-Yuen Huang; Chenghao Qiu; Chenwei Xu; Zhenyu Pan; Haotian Zhang; Binghui Wang; Yan Chen

**ID:** 148314\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148314

[Paper](<https://openreview.net/forum?id=yjVSLVS0Dh>) | [PDF](<https://openreview.net/pdf?id=yjVSLVS0Dh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148314>)

We propose OASIS, an outlier\- and sink\-aware technique built on inter\-layer null signaling\. As AttnResidual architectures introduce an additional depth\-wise normalization channel, they improve inter\-layer routing flexibility but also exacerbate attention sinks, activation outliers, and the resulting degradation in inference stability and quantization robustness\. OASIS addresses this issue by introducing a $\\mathop\{\\rm\{Softmax\}\}\_1$\-based null space and coupling token\-level null evidence to depth routing through an inter\-layer null signal, thereby reducing sink\-dominated routing and improving structural robustness\. Theoretically, we show that the dual\-normalization design of AttnResidual intensifies sink formation and quantization brittleness\. Experimentally, we compare OASIS against five baselines on three real\-world datasets and observe consistent improvements in both attention sink and post\-quantization performance\. Notably, OASIS achieves an average reduction of 9\.26\\% in maximum infinity norm and 2\.60\\% in average kurtosis across the evaluated settings, while lowering perplexity by 75\.85\\% under W8A8 and improving GSM8K Pass@1 by 12\.42\\% under W4A4\.

## Understanding the Effects of Hyper\-Connections on Self\-Attention Dynamics: A Bifurcation Analysis

**Authors:** Yen N Pham; Dung V Nguyen; Trinh Nguyen; Thieu Vo; Tan Nguyen

**ID:** 151454\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151454

[Paper](<https://openreview.net/forum?id=aY3DfjqhAX>) | [PDF](<https://openreview.net/pdf?id=aY3DfjqhAX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151454>)

A central challenge in understanding deep sequence models is characterizing how token representations evolve across layers: whether they collapse, diverge, or converge to nontrivial structures\. We study this question for Transformers with hyper\-connections, whose learnable cross\-layer coupling makes the stability of representation collapse analytically tractable\. In contrast to standard residual connections, hyper\-connections introduce additional parameters that directly control the hyperbolicity of the zero fixed point, at which the local stability is fully determined by the Jacobian eigenvalues, thereby enabling a rigorous and precise bifurcation analysis of the dynamical system underlying the model\. In particular, we derive a continuous\-depth ODE limit of self\-attention with hyper\-connections and use bifurcation theory to characterize its token dynamics\. For the 1\-stream case, we obtain a closed\-form critical threshold at which a pitchfork bifurcation occurs, separating representation collapse from divergence or convergence to nontrivial stable states\. For the 2\-stream case, the richer coupling structure yields two distinct stability boundaries, corresponding to qualitatively different instabilities: one arising when a real eigenvalue crosses zero, altering the number of nearby equilibria \(static type\), and another when a complex\-conjugate pair reaches the imaginary axis, leading to oscillatory behavior \(Hopf type\)\. These phenomena have no counterpart in the 1\-stream setting\. Experiments on pretrained hyper\-connected language models validate our theory and show that unstable regimes yield stronger performance\.

## Collapse Hunter: Tackling the Dimensional Degeneration in Generative Ranking

**Authors:** Haoran Xin; Junwei Pan; Yongqi Zhou; Tianqu Zhuang; YilongSun; Zhixiang Feng; Shoujun Liu; Gong Chen; Shudong Huang; Haijie Gu; Hui Xiong

**ID:** 154459\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154459

[Paper](<https://openreview.net/forum?id=DQIpp6LGTM>) | [PDF](<https://openreview.net/pdf?id=DQIpp6LGTM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154459>)

Generative ranking models \(GRMs\) have emerged as a scalable alternative to traditional recommendation pipelines by unifying items and user actions into a single token sequence and formulating recommendation as next\-token prediction\. Despite their promise, we identify a geometric failure mode: attention interactions with lowcardinality action tokens can induce dimensional collapse in high\-rank item representations, as suggested by interaction\-collapse theory\. To pinpoint the origin of collapse, we view attention mechanism over item–action interleaving sequences as a mixture of directional interaction channels between token types, and find that collapse concentrates in the action\-attending\-item channel, where low\-rank action gating drags the item value stream toward a low\-dimensional subspace\. To address this, we theoretically show that nonlinearity mitigates collapse, and propose Selective VAlue Nonlinearity \(SVAN\), a simple yet effective approach that applies nonlinear activation to the value component in the collapsed channel, protecting item representations while preserving the remaining attention geometry\. SVAN consistently improves the ranking quality over strong baselines\. Further analyses confirm that SVAN alleviates dimensional collapse, yielding up to a 12\.58% effective\-rank gain, and enhances representation discriminability\.

## CommunityKV: Efficient Long\-Context Decoding via Graph Partitioning

**Authors:** Joe McKenna; Anastasios Alexandridis; Nathan Susanj; Jing Liu

**ID:** 154739\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154739

[Paper](<https://openreview.net/forum?id=BNHDGnaga1>) | [PDF](<https://openreview.net/pdf?id=BNHDGnaga1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154739>)

Scaling Transformers to long contexts is constrained by the quadratic cost of self\-attention and the linear growth of key\-value cache memory transfer\. Sparse attention mitigates this by retrieving only relevant tokens, but current approaches either require large\-scale training or, within the training\-free regime, rely on semantically coarse heuristics or expensive clustering that is difficult to update efficiently during decoding\. We introduce CommunityKV, a framework that formulates sparse attention as a community detection problem\. CommunityKV constructs a token graph from the $QK^T$ scores already computed during standard prefill, and partitions the graph into communities to enable retrieval of semantically coherent token groups\. A local update rule assigns newly generated tokens to communities in constant time, enabling sparse retrieval throughout streaming decoding without global re\-partitioning\. We evaluate CommunityKV on open weight models and long context benchmarks, demonstrating that our approach achieves up to $1\.86\\times$ higher decoding throughput than exact FlashAttention\-2 with negligible accuracy degradation\.

## Quantifying Concentration Phenomena of Mean\-Field Transformers in the Low\-Temperature Regime

**Authors:** Albert Alcalde; Leon Bungert; Konstantin Riedl; Tim Roith

**ID:** 149032\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149032

[Paper](<https://openreview.net/forum?id=tLcRuEazgY>) | [PDF](<https://openreview.net/pdf?id=tLcRuEazgY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149032>)

Transformers with self\-attention modules as their core components have become an integral architecture in modern large language and foundation models\. In this paper, we study the evolution of tokens in deep encoder\-only transformers at inference time which is described in the large\-token limit by a mean\-field continuity equation\. Leveraging ideas from the convergence analysis of interacting multi\-particle systems, with particles corresponding to tokens, we prove that the token distribution rapidly concentrates onto the push\-forward of the initial distribution under a projection map induced by the key, query, and value matrices, and remains metastable for moderate times\. Specifically, we show that the Wasserstein distance of the two distributions scales like $\\sqrt\{\\log\(\\beta\+1\)/\\beta\}\\exp\(C t\)\+\\exp\(\-ct\)$ in terms of the temperature parameter $\\beta^\{\-1\}\\to 0$ and inference time $t\\geq 0$\. For the proof, we establish Lyapunov\-type estimates for the zero\-temperature equation, identify its limit as $t\\to\\infty$, and employ a stability estimate in Wasserstein space together with a quantitative Laplace principle to couple the two equations\. Our result implies that for time scales of order $\\log\\beta$ the token distribution concentrates at the identified limiting distribution\. Numerical experiments confirm this and, beyond that, complement our theory by showing that for finite $\\beta$ and large $t$ the dynamics enter a different terminal phase, dominated by the spectrum of the value matrix\.

## KV\-COBRA: KV Cache Compression via Co\-Optimized Bit\-Rank Allocation

**Authors:** Sihyeon Ha; Jaeho Lee; Yo\-Seb Jeon

**ID:** 154016\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154016

[Paper](<https://openreview.net/forum?id=Gr6czrHyEk>) | [PDF](<https://openreview.net/pdf?id=Gr6czrHyEk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154016>)

What limits KV\-cache compression at extreme bit\-rates? We argue it is not the choice of compression scheme but how its budget is allocated across attention heads\. Existing methods apply rank and bit\-width uniformly, ignoring that each head has a different optimal mix of rank truncation and quantization\. We show that co\-optimizing rank and bit\-width per head — using only standard low\-rank projection and scalar quantization — dominates uniform allocation, with the largest gains at low bit\-rates\. Our method, KV\-COBRA \(Co\-Optimized Bit\-Rank Allocation\), formalizes this as a resource\-allocation problem: it balances rank\-truncation loss against quantization loss within each head, then redistributes budget across heads to minimize total distortion\. A fused Hadamard rotation equalizes per\-channel variance, and reordering the SVD basis by attention\-KL importance makes the solver query\-aware\. The same allocator extends to joint $K\{\+\}V$ compression\. On perplexity, zero\-shot, and long\-context benchmarks from $0\.5$ to $4$ bits per dimension \(bpd\), KV\-COBRA shows the smallest accuracy degradation among evaluated methods at low bpd, with no per\-token overhead\.

## Value\-Aware Stochastic KV Cache Eviction for Reasoning Models

**Authors:** Ting\-Yun Chang; Harvey Yiyun Fu; Deqing Fu; Chenghao Yang; Jesse Thomason; Robin Jia

**ID:** 152707\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152707

[Paper](<https://openreview.net/forum?id=R0GnMD9bkE>) | [PDF](<https://openreview.net/pdf?id=R0GnMD9bkE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152707>)

_Abstract unavailable from the accessible public sources._

## Rethinking Attention in Depth for Operator Learning

**Authors:** Jaehyeon Lee; Kiwon Um; JungHyun Han; Min\-Koo Kang

**ID:** 150899 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ebPb7taENV>) | [PDF](<https://openreview.net/pdf?id=ebPb7taENV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150899>)

Transformers have rapidly emerged as powerful surrogate models for learning solution operators for partial differential equations \(PDEs\)\. Standard attention tends to exhibit depth\-wise representational bottlenecks across layers, with the role of depth remaining underexplored in modeling complex PDEs\. In this paper, we rethink the role of depth by promoting it to an explicit computational dimension of attention kernel construction, rather than a passive architectural parameter\. With this strategy, each attention block's native representation is enriched via a gated mixture of inter\-layer differences, enabling information to be coupled and propagated across layers\. The depth\-wise hierarchy admits a theoretically motivated multi\-kernel interpretation with weakly correlated kernels and improved generalization bounds\. Beyond dense feature aggregation, our approach yields a more expressive form of depth\-wise attention, mitigating spectral collapse, preserving interaction\-scale diversity, and improving intra\- and inter\-layer route utilization\. Extensive empirical evaluations demonstrate its broad compatibility across state\-of\-the\-art solvers, presenting consistent performance gains on eight PDE benchmarks\.

## Spectral Degeneration of Softmax Attention under Isotropic Score Geometry

**Authors:** Mengda Li; Jianfeng Yao

**ID:** 154061\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154061

[Paper](<https://openreview.net/forum?id=GUj06j9XU5>) | [PDF](<https://openreview.net/pdf?id=GUj06j9XU5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154061>)

_Abstract unavailable from the accessible public sources._

## Orthrus: Memory\-Efficient Parallel Token Generation via Dual\-View Diffusion

**Authors:** Van Chien Nguyen; Chaitra Hegde; Van\-Cuong Pham; Ryan Rossi; Franck Dernoncourt; Thien H Nguyen

**ID:** 150719\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150719

[Paper](<https://openreview.net/forum?id=fwaVRSuVPd>) | [PDF](<https://openreview.net/pdf?id=fwaVRSuVPd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150719>)

We introduce Orthrus, a simple and efficient dual\-architecture framework that unifies the exact generation fidelity of autoregressive Large Language Models \(LLMs\) with the high\-speed parallel token generation of diffusion models\. The sequential nature of standard autoregressive decoding represents a fundamental bottleneck for high\-throughput inference\. While diffusion language models attempt to break this barrier via parallel generation, they suffer from significant performance degradation, high training costs, and a lack of rigorous convergence guarantees\. Orthrus resolves this dichotomy natively\. Designed to seamlessly integrate into existing Transformers, the framework augments a frozen LLM with a lightweight, trainable module to create a parallel diffusion view alongside the standard autoregressive view\. In this unified system, both views attend to the exact same high\-fidelity Key\-Value \(KV\) cache; the autoregressive head executes context pre\-filling to construct accurate KV representations, while the diffusion head executes parallel generation\. By employing an exact consensus mechanism between the two views, Orthrus guarantees lossless inference, delivering up to a $7\.8\\times$ speedup with only an $O\(1\)$ memory cache overhead and minimal parameter additions\.

## Gated DeltaNet\-2: Decoupling Erase and Write in Linear Attention

**Authors:** Ali Hatamizadeh; Yejin Choi; Jan Kautz

**ID:** 148191\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148191

[Paper](<https://openreview.net/forum?id=zdcl2dDW9a>) | [PDF](<https://openreview.net/pdf?id=zdcl2dDW9a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148191>)

Linear attention replaces the unbounded cache of softmax attention with a fixed\-size recurrent state, reducing sequence mixing to linear time and decoding to constant memory\. The hard part is not just what to forget, but how to edit this compressed memory without scrambling existing associations\. Delta\-rule models subtract the current read before writing a new value, and Kimi Delta Attention \(KDA\) sharpens forgetting with channel\-wise decay\. But the active edit still uses a single scalar gate to control two different things: how much old content to erase on the key side and how much new content to commit on the value side\. We introduce Gated DeltaNet\-2, which generalizes both Gated DeltaNet and KDA by inheriting adaptive forgetting and channel\-wise decay while addressing their shared limitation, the scalar tie between erasing and writing\. Gated Delta Rule\-2 separates these roles with a channel\-wise erase gate $\\boldsymbol\{b\}\_t$ and a channel\-wise write gate $\\boldsymbol\{w\}\_t$, reducing to KDA when both gates collapse to the same scalar and to Gated DeltaNet when the decay also collapses\. We derive a fast\-weight update view, a chunkwise WY algorithm with channel\-wise decay absorbed into asymmetric erase factors, and a gate\-aware backward pass that preserves efficient parallel training\. At 1\.3B parameters trained on 100B FineWeb\-Edu tokens, Gated DeltaNet\-2 achieves the strongest overall results among Mamba\-2, Gated DeltaNet, KDA, and Mamba\-3 variants across language modeling, commonsense reasoning, and retrieval\. Its advantage is most pronounced on long\-context RULER needle\-in\-a\-haystack benchmarks, where it improves the evaluated multi\-key retrieval setting and remains strong in both recurrent and hybrid settings\.

## Data\-Efficient Learning for Constraint Satisfaction Problems via  Relational Biases and Hard Axiom Clamping

**Authors:** Enqiang Zhu; Ke Wang; Yu Zhang; Shengzhi Wang; Xianhang Luo; Chanjuan Liu

**ID:** 150335\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150335

[Paper](<https://openreview.net/forum?id=ism9H7dCPG>) | [PDF](<https://openreview.net/pdf?id=ism9H7dCPG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150335>)

Constraint satisfaction problems \(CSPs\) serve as critical benchmarks for neural algorithmic reasoning, requiring accurate multi\-step constraint propagation to determine variable values that satisfy all specified constraints\. Existing neural solvers often rely on extensive training datasets, struggle with distribution shifts, or allow fixed clues to drift in continuous spaces\. We introduce CSP\-RSB, a data\-efficient recurrent Transformer that directly incorporates constraint topology into the attention mechanism through a learnable relational bias\. Additionally, we propose a hard axiom clamping strategy that fixes clues after each recurrence constraint projection and uses the QK\-Norm to stabilize a two\-layer block\. In 9 \\times 9 Sudoku, CSP\-RSB achieves 99\.94\\% board accuracy on the RRN\-test, 99\.13\\% on unfiltered Kaggle, and 99\.78\\% on filtered Kaggle, surpassing the previous best, Trial \\&amp; Error 2025, which reported accuracies of 99\.40\\%, 98\.90\\%, and 99\.50\\%, respectively\. Furthermore, it successfully solves Erd\\H\{o\}s\-\-R\\'enyi graph coloring with 100\\% accuracy in 9 epochs and maintains 99\.5\-100\\% accuracy on 10 \\times 10 binary puzzles\. By incorporating explicit topological structure, CSP\-RSB reduces the need for depth and data requirements for effective algorithmic reasoning\.

## Hypergraph Modeling of Transformer Attention for Hallucination Detection

**Authors:** Mark Junjie Li; zhishun liu; Wei Wang; Yuanshan Lu; yangjingxi; Xianyu Bao; Jun Li; Sunjie Huang

**ID:** 154475\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154475

[Paper](<https://openreview.net/forum?id=DKOfhIFbgb>) | [PDF](<https://openreview.net/pdf?id=DKOfhIFbgb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154475>)

_Abstract unavailable from the accessible public sources._

## Attention\-based PCA

**Authors:** Rodrigo Maulen Soto; Claire Boyer

**ID:** 154448\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154448

[Paper](<https://openreview.net/forum?id=DTfQiEFRDM>) | [PDF](<https://openreview.net/pdf?id=DTfQiEFRDM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154448>)

We study attention mechanisms through the lens of a canonical unsupervised problem: principal component analysis \(PCA\)\. We show that, when trained on Gaussian data, both softmax and linear attention layers learn parameters that align with the principal eigenvectors of the covariance matrix, thereby establishing a direct and explicit connection with PCA\.  Our analysis covers both finite and infinite prompt regimes\. In the infinite\-prompt limit, we prove convergence to globally optimal solutions aligned with the leading spectral direction, while in the finite\-prompt setting we show that the same behavior emerges up to sampling effects\. We further extend the analysis to an in\-context setting with spiked Wishart covariances, where attention successfully recovers the underlying signal direction\.  These results demonstrate that attention inherently performs PCA\-like computations under unsupervised objectives, providing a theoretical foundation for its representation\-learning capabilities\.

## Sink vs\. diagonal patterns as mechanisms for attention switch and oversmoothing prevention

**Authors:** Peter Súkeník; Cristina Lopez Amado; Christoph Lampert; Marco Mondelli

**ID:** 153161\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153161

[Paper](<https://openreview.net/forum?id=NPpBWkJvNA>) | [PDF](<https://openreview.net/pdf?id=NPpBWkJvNA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153161>)

This paper studies the role of sinks and diagonal patterns as attention switch and anti\-oversmoothing mechanisms\. We analyze geometric conditions under which sinks can be represented, showing a necessary alignment between the embedding of the sink and all other embeddings\. Next, we refine the current understanding of the role of sinks in oversmoothing prevention: we specify the conditions under which dense attention provably smooths more than sparse attention, and empirically verify that such conditions are often satisfied in practice\. We further prove an equivalence between sinks and hard attention switch, in which the output of the attention is identically 0\. Finally, we relax the hard attention switch by allowing token self\-communication: we provide a quantitative comparison of the costs of representing sinks vs\.\\ diagonal patterns, showing why sinks are favored in pretrained transformers\. The introduction and analysis of diagonal patterns and the generalization of the attention switch close the gap between what oversmoothing prevention requires and what sinks provide, while also establishing when and why attention layers act like MLPs if token communication is not necessary\.

## Geometry\-Calibrated Conformal Abstention for Language Models

**Authors:** Rui Xu; Yi Chen; Sihong Xie; Hui Xiong

**ID:** 148649 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wAjaheyp6R>) | [PDF](<https://openreview.net/pdf?id=wAjaheyp6R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148649>)

When language models lack relevant knowledge for a given query, they frequently generate plausible responses that can be hallucinations, rather than admitting being agnostic about the answer\. Retraining models to reward admitting ignorance can lead to overly conservative behaviors and poor generalization due to scarce evaluation benchmarks\. We propose a post\-hoc framework, Conformal Abstention \(CA\), adapted from conformal prediction \(CP\) to determine whether to abstain from answering a query\. CA provides finite\-sample guarantees on both the probability of participation \(i\.e\., not abstaining\) and the probability that the generated response is correct\. Importantly, the abstention decision relies on prediction confidence rather than the non\-conformity scores used in CP, which are intractable for open\-ended generation\. To better align prediction confidence with the model's ignorance, we introduce a calibration strategy using representation geometry within the model to measure knowledge involvement in shaping the response\. Experiments demonstrate that we improve selective answering significantly with 75% conditional correctness\.

## RAM\-Net: Linear\-Time Sequence Modeling with Sparsely Addressable State

**Authors:** Kaicheng Xiao; Haotian Li; Liran Dong; Guoliang Xing

**ID:** 152777\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152777

[Paper](<https://openreview.net/forum?id=QPjqzE6cUh>) | [PDF](<https://openreview.net/pdf?id=QPjqzE6cUh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152777>)

_Abstract unavailable from the accessible public sources._

## Benchmarking Attention for Tabular Foundation Models

**Authors:** Maximilian Schambach; Clemens Biehl; Sam Thelin

**ID:** 139839 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1MbSbrblLi>) | [PDF](<https://openreview.net/pdf?id=1MbSbrblLi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139839>)

Tabular in\-context learners such as TabPFN, Mitra, or ConTextTab rely on alternating row and column attention over 2D sequences of latent embeddings\. These attention patterns differ markedly from the one\-dimensional case in language models: row attention involves longer sequences while column attention operates on much shorter ones, and the strided memory layout of tabular data makes producing contiguous tensors costly\. Moreover, the hidden dimensions used in current models are small compared to recent language models\. Yet, efficient attention has been studied mostly for one\-dimensional sequences, leaving the two\-dimensional tabular setting unexplored\.  To this end, we create a reproducible benchmarking setup and study the unique characteristics of tabular attention across several backends – Torch SDPA \(efficient and cuDNN\), FlashAttention\-2/3/4, and the inference\-only backends vLLM and SageAttention – measuring forward and backward throughput across realistic tabular shapes on three GPU generations \(A100, H100, B200\)\. We find that the optimal backend choice differs between column and row attention and varies across hardware as well as model specifics: While the FlashAttention implementations tailored for each GPU generation perform overall best, they are at times outperformed by cuDNN in the case of column attention at longer sequences with cross\-over points depending on the head dimension\. Among inference\-only backends, SageAttention performs well for row attention and large sequences beyond 16k rows\. Our reproducible benchmark lays the foundation for future improvements to table\-native attention\. The self\-contained benchmarking and evaluation code is openly available at: https://github\.com/SAP\-samples/tabular\-attention\-benchmark

## Busemannformer: Horospherical Self\-Attention for Hyperbolic Graph Transformers

**Authors:** Youheng Yao; Ziyao Zeng; Wenbo Liao; Tianqi Wang

**ID:** 151890 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XAJBBFiTpE>) | [PDF](<https://openreview.net/pdf?id=XAJBBFiTpE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151890>)

Hyperbolic neural networks excel on hierarchical graph data, yet existing hyperbolic Transformers lift standard attention into curved space without using the ideal boundary, the structure most directly tied to tree hierarchy\. We propose \\textbf\{Horospherical Self\-Attention\} \(HSA\): each query selects an ideal\-boundary direction and scores keys by their Busemann depth along that direction, yielding a token\-to\-token hyperbolic attention kernel\. We prove flat\-limit consistency \(HSA recovers dot\-product attention as $K\\to 0^\-$\), characterise score level sets as horospheres, and bound key\-side gradients\. HSA is integrated into \\textbf\{Busemannformer\}, a full hyperbolic graph Transformer\. Busemannformer\-LD reaches \\textbf\{91\.78\\%\} F1 on Disease\-NC; in a controlled score ablation, its log\-depth Busemann score achieves the best Disease\-NC result among tested scores, reaching \\textbf\{93\.29\\%\} F1 and performance comparable to the current SOTA Hypformer result with a smaller training budget\. For link prediction, we find a score\-symmetry principle: Busemannformer\-LD with a symmetric score achieves \\textbf\{90\.71\\%\} AUC on PubMed\-LP \($\+$10\.3 pp over the asymmetric variant\), while the asymmetric score performs best on Disease\-LP among our variants and outperforms all Euclidean baselines\. Ablations identify log\-depth Busemann scoring as the key component and reveal a clear failure mode on Airport, where labels track centrality rather than tree depth\.

