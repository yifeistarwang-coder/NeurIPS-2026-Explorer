# Deep Learning / Attention Mechanisms

深度学习 / 注意力机制

85 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## EAT: Eviction\-Aware Training for Long\-Context LLM Inference on Edge Devices

**Authors:** Ke Chen; Xiaohui Song; Chi Xie; ZhiGuang Zhu; ZIXIAN LI; Hao\-Yun Chen; Peng\-Wen Chen; Chen Chen; Haonan Lu

**ID:** 155582 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4YJpkRqrAO>) | [PDF](<https://openreview.net/pdf?id=4YJpkRqrAO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155582>)

Deploying large language models on edge devices requires mitigating two major bottlenecks: the computational cost of the model and the memory overhead of the KV cache\. While combining model quantization and KV\-cache eviction seems like a natural solution, we reveal that this naive pipeline suffers from a critical failure mode\. The issue stems from a hidden conflict: modern eviction methods rely on attention scores to identify important tokens, yet quantization inherently adds noise to these exact scores\. Consequently, quantization does not merely degrade the numerical precision of the KV cache—it actively alters the eviction decisions, often causing the model to discard crucial context\.          To overcome this non\-orthogonal degradation, we propose EAT, a training framework that integrates discrete eviction behavior into quantization\-aware training\. EAT computes eviction from quantized attention, applies the resulting mask in the forward pass, and uses a masked straight\-through estimator in the backward pass\. The method requires no architectural changes and adds no inference\-time parameters\.          Systematic evaluations show that EAT mitigates the failure mode of naive quantization\-plus\-eviction pipelines\. Under W4A16 \+ KV\-INT8 with 50% KV eviction, eviction\-unaware composition reduces the five\-task average from 38\.37 to 29\.04, whereas EAT recovers it to 39\.44 under the same cache budget\. Real\-world deployment on the MediaTek Dimensity 9500 demonstrates that, under a 50% KV\-eviction budget, EAT improves decoding throughput by 64\.1% and reduces total memory traffic by 20\.4% compared to quantized full\-KV inference\. Mechanistic analyses suggest that the improvement is associated with reduced attention sink behavior rather than with sharper attention\.

## On the Runway Cascade of Transformers for Language Modeling

**Authors:** Hunjae Lee; Corey Clark

**ID:** 154750 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BG7L2BEqkO>) | [PDF](<https://openreview.net/pdf?id=BG7L2BEqkO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154750>)

In decoder\-only \(causal\) transformers, the computation graph created by causal masking routes information through both direct\-path attention and indirect paths formed by intermediate tokens\. We denote these indirect paths between token pairs as their \\textit\{runways\}\. We argue that certain failure modes of causal transformers as observed by a growing body of recent works are likely exacerbated by a misalignment between these two information propagation modes\. We formalize \\textit\{runway cascade\} as a phenomenon whereby this misalignment results in redundancies and irrelevant information cascading to token representations despite adequately learned attention patterns\. As a solution, we propose \\textit\{runway\-aware rewiring\} as a more explicit way of incorporating runway context directly into each token's direct\-path attention\. This mechanism re\-wires the attention pattern for each token based on a summary of its runway landscape, enabling awareness of accumulating representational influences and allowing for more balanced information propagation\. Our proposed methodology introduces no additional parameters and can seamlessly be integrated into standard attention mechanism\. Empirically, our rewired transformer results in steady improvements in general language modeling as well as noticeably stronger information retrieval and extrapolation abilities compared to standard transformers\.

## Exact Flow Linear Attention: Exact Solution from Continuous\-Time Dynamics

**Authors:** Jingdi Lei; Di Zhang; Soujanya Poria

**ID:** 154073 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GOjRwLmiSD>) | [PDF](<https://openreview.net/pdf?id=GOjRwLmiSD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154073>)

In this paper, we introduce Exact Flow Linear Attention\(EFLA\), an exact\-flow formulation of delta\-rule linear attention\. We show that the delta\-rule update can be interpreted as an explicit Euler discretization of an underlying continuous\-time system\. EFLA replaces this first\-order update with the exact closed\-form flow\. By exploiting the rank\-1 structure of the dynamics matrix, both the matrix exponential and the input integral collapse to a simple update that preserves delta\-rule linear attention's algebraic structure, parameter count, linear\-time complexity, and chunkwise parallelism\. This attention mechanism removes the Euler discretization error of the delta\-rule dynamics without introducing additional parameters\. Experiments on robustness tests, language modeling benchmarks, and the MAD synthetic benchmark show that EFLA improves stability under corrupted and high\-energy inputs, reduces perplexity, and achieves stronger downstream performance compared to SSM and Euler\-style baselines\. These results establish exact\-flow integration as a principled and scalable update mechanism for delta\-rule linear attention\.

## CSLA: Sparse\-Linear Attention with Learnable Routing and Quantization\-aware Training

**Authors:** Jintao Zhang; Haoxu Wang; Kai Jiang; Kaiwen Zheng; Youhe Jiang; Ion Stoica; Jianfei Chen; Jun Zhu; Joseph Gonzalez

**ID:** 149892 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mTASL9d9xh>) | [PDF](<https://openreview.net/pdf?id=mTASL9d9xh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149892>)

Sparse\-Linear Attention \(SLA\) combines sparse and linear attention to accelerate diffusion models and has shown strong performance in video generation\. However, \(i\) SLA relies on a heuristic split that assigns computations to the sparse or linear branch based on attention\-weight magnitude, which can be suboptimal\. Additionally, \(ii\) after formally analyzing the attention error in SLA, we identify a mismatch between SLA and a direct decomposition into sparse and linear attention\. We propose CSLA, which introduces \(I\) a learnable router that dynamically selects whether each attention computation should use sparse or linear attention, \(II\) a more faithful and direct sparse\-linear attention formulation that uses a learnable ratio to combine the sparse and linear attention branches, and \(III\) a sparse \+ low\-bit attention design, where low\-bit attention is introduced via quantization\-aware fine\-tuning to reduce quantization error\. Experiments show that on video diffusion models, CSLA can achieve 97\\% attention sparsity and deliver an 18\.6$\\times$ attention speedup while preserving generation quality\.

## Flow Equivariant State Space Model

**Authors:** Chengrong Ye; Xinyan Gong; Lingwei Zhang; Yue Song

**ID:** 149264 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rbe5gNhR4J>) | [PDF](<https://openreview.net/pdf?id=rbe5gNhR4J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149264>)

Natural sequences often contain signals that move over time, such as translating objects, rotating digits, and drifting storm cells\. Selective state space models such as Mamba process such data efficiently, but their recurrent state is updated at fixed spatial coordinates\. As a result, evidence from a moving object can be accumulated across inconsistent locations rather than in the object's moving reference frame\. To address this problem, we introduce Flow\-SSM, a flow\-equivariant selective state space model that lifts recurrent memory to candidate motion branches and transports each branch along its corresponding flow before applying the selective update\. To handle real\-world sequences where broad motion and local deformation often occur at different scales, we further introduce Hierarchical Flow\-SSM, which organizes flow\-aligned memory in a coarse\-to\-fine hierarchy rather than a single flat representation\. We validate our architecture progressively: demonstrating exact transformation capture on Moving and Rotating MNIST, interpretable flow structures on KTH action videos, and the necessity of our multi\-scale design for complex forecasting on the SEVIR weather dataset\. Beyond merely improving predictive accuracy, our analyses confirm that the explicit flow alignment and hierarchical communication contribute measurably to the observed gains\. These results support transported recurrence as an effective inductive bias for spatiotemporal sequence modeling\.

## CRUMB: Efficient Prior Fitted Network Inference via Distributionally Matched Context Batching

**Authors:** Jamie Heredge; Mattia Jacopo Villani; Pranav Deshpande; Akshay Seshadri; Niraj Kumar

**ID:** 148277 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z3XMLStVPC>) | [PDF](<https://openreview.net/pdf?id=z3XMLStVPC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148277>)

Prior\-fitted networks \(PFNs\) are a promising class of tabular foundation models that perform in\-context learning, whereby the entire labelled training set is supplied as context, and predictions for test queries are produced in a single forward pass\. However, the quadratically scaling self\-attention mechanism in many PFN architectures makes inference prohibitive for very large training datasets\. We propose CRUMB \(Clustered Retrieval Using Minimised\-MMD Batching\), a three\-stage inference wrapper that \(i\) clusters the test queries, \(ii\) selects a small, distributionally matched training subset for each cluster by greedily minimising the maximum mean discrepancy \(MMD\), and \(iii\) runs exact PFN inference on each reduced\-context batch\. CRUMB is architecture\-agnostic and requires no retraining\. On the 51\-dataset TabArena benchmark, evaluated across three PFN architectures \(TabPFNv2, TabICLv1, TabICLv2\), we show that CRUMB outperforms similar state\-of\-the\-art context selection strategies\. We also show that CRUMB is resilient to covariate drift, as the MMD\-minimisation step naturally helps align the training context distribution to match the current test batch distributions\.

## Training Vision Transformers to Focus: Emergence of Attention Head Specialization

**Authors:** Yuji Nozawa; Yu\-Chieh Lin; Youyang Ng

**ID:** 155703 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3aWhzsaHua>) | [PDF](<https://openreview.net/pdf?id=3aWhzsaHua>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155703>)

Unsupervised learning in Vision Transformer models, such as DINO, enables robust visual perception without requiring labeled data by leveraging large\-scale image datasets\. However, these models lack a focusing mechanism during training, resulting in perceptual representations that are often ambiguous or overly similar\. In this work, we introduce two visual focusing loss functions designed to establish correspondences between the model's attention and specific regions within images\. Specifically, we leverage the multi\-head attention mechanism within the model to selectively steer the model's focus, leading to the emergence of multiple, diverse, and focused perceptual capabilities without requiring supervision\. Through both qualitative and quantitative evaluations, we demonstrate that our method substantially increases the spatial selectivity and diversity of attention heads, improving both explainability and fine\-grained recognition performance\.

## Panoptic Saliency Ranking

**Authors:** Zhenyu Wu; Min Li; Chong Ma; Xun Gong; Wei Wang; Chenglizhao Chen; Aimin Hao; Shuo Li

**ID:** 152142 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VCP5mqmgK9>) | [PDF](<https://openreview.net/pdf?id=VCP5mqmgK9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152142>)

We introduce Panoptic Saliency Ranking \(PSR\), a new task that aims to estimate the visual saliency of all objects within a scene\. Unlike salient object ranking, which focuses only on ranking salient regions, PSR extends the problem to the entire scene, providing a holistic and fine\-grained understanding of visual saliency\. To facilitate this task, we construct PSR18K, the first large\-scale benchmark for panoptic saliency ranking\. It contains 17,861 images with 146,460 annotated object instances spanning 13 superclasses and 376 fine\-grained categories\. In addition, PSR18K provides relation graph annotations to explicitly model semantic and spatial relationships among objects\. We further propose an efficient Intrinsic Relation Graph Network \(IRGNet\), which reinterprets Transformer self\-attention as an implicit relational matrix and seamlessly transforms it into an explicit relation graph, thereby obviating the need for additional relation modeling and significantly improving inference speed\. Extensive experiments on PSR18K and three widely used SOR benchmarks demonstrate that our IRGNet achieves new state\-of\-the\-art performance and faster inference with fewer parameters\. The dataset and code are publicly available at https://sites\.google\.com/view/PSR18K\.

## Efficient One\-Step Diffusion Restoration Model with Compact Token Compression and Linear Attention

**Authors:** Bingtian Qiao; Yue Shi; Yingjie Zhou; Yong Guo; Guangtao Zhai; Jiezhang Cao

**ID:** 152711 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QwQ05qSGq3>) | [PDF](<https://openreview.net/pdf?id=QwQ05qSGq3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152711>)

Real\-world image super\-resolution aims to recover high\-quality images from complex and unknown real\-world degradations\. However, existing generative Real\-ISR methods largely inherit the dense latent representations and quadratic\-cost global modeling paradigm developed for high\-resolution image synthesis, causing computation, memory usage, and inference latency to scale unfavorably with resolution and thus limiting practical deployment\. We argue that the key bottleneck lies not in insufficient restoration priors, but in excessive token redundancy and costly token interactions during high\-resolution restoration\. Motivated by this observation, we revisit Real\-ISR from the perspectives of compact latent representation and linear\-complexity modeling, and propose SANA\-SR, an efficient one\-step restoration framework\. Specifically, SANA\-SR employs a deep compression autoencoder with a 32× compression ratio to drastically reduce latent tokens while preserving restoration\-relevant structures and textures\. On top of this compact latent space, we introduce a linear\-attention DiT with LoRA fine\-tuning, enabling efficient high\-resolution restoration with linear\-complexity token mixing\. Extensive experiments on all benchmark datasets demonstrate that SANA\-SR achieves highly competitive and often superior quantitative performance against existing methods, while restoring clearer and more realistic textures\. Moreover, after pruning, the deployed model runs in 0\.019 s with 407\.95G MACs and 344M parameters, highlighting its strong potential for practical mobile deployment\.

## RelFlexformer: Efficient Attention Transformers for Integrable Relative Positional Encodings

**Authors:** Byeongchan Kim; Arijit Sehanobish; Kumar Avinava Dubey; Min\-hwan Oh; Krzysztof M Choromanski

**ID:** 154871 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AHbhLrT1U0>) | [PDF](<https://openreview.net/pdf?id=AHbhLrT1U0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154871>)

We present a new class of efficient attention mechanisms applying universal 3D Relative Positional Encoding \(RPE\) methods given by arbitrary integrable modulation functions $f$\. They lead to the new class of 3D\-Transformer models, called \*RelFlexformers\*, flexibly integrating those RPEs, and characterized by the $O\(L \\log L\)$ time complexity of the attention computation for the $L$\-length input sequences\. RelFlexformers builds on the theory of the Non\-Uniform Fourier Transform \(NU\-FFT\), naturally generalizing several existing efficient RPE\-attention methods from structured settings with tokens homogeneously embedded in unweighted grids into general non\-structured heterogeneous scenarios, where tokens' positions are arbitrarily distributed in the corresponding 3D spaces\. As such, RelFlexformers can be applied in particular to model point clouds\. Our extensive empirical evaluation on a large portfolio of 3D datasets confirms quality improvements provided by the NU\-FFT\-driven attention modulation techniques in the RelFlexformers\.

## SFPR: Structural Fingerprinting for LiDAR\-to\-OpenStreetMap Place Recognition

**Authors:** Jiajun Zheng; Ziwei Shi; Yu Zang; Chenlu Lin; Youbiao Wang; Wenjing Xu; Cheng Wang

**ID:** 152000 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WFadpugbFE>) | [PDF](<https://openreview.net/pdf?id=WFadpugbFE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152000>)

Cognitive neuroscience research indicates that human spatial navigation relies not merely on abstract global map representations, but rather on anchoring local observations to spatially stable, decision\-relevant landmarks to effectively align the current scene with the cognitive map\. Inspired by this mechanism, we propose SFPR, a structural fingerprint\-based LiDAR\-to\-OpenStreetMap \(OSM\) place recognition framework\. This framework goes beyond the traditional coarse retrieval paradigm that relies exclusively on global descriptor similarity and further introduces fine\-grained discrimination based on structural fingerprints to achieve more accurate place recognition\. Specifically, we propose a structural fingerprint\-aware attention mechanism that utilizes sparse but spatially stable anchors as saliency prompts, directing the network's attention toward potential fingerprint regions while dynamically generating global descriptors\. Subsequently, we formulate the extraction and matching of structural fingerprints as an alternating optimization problem guided by this fingerprint\-aware attention\. Through iterative optimization, we extract structural fingerprints with high fingerprint\-aware attention and geometric consistency from anchors\. These structural fingerprints are further fed back into the training stage as geometric priors, effectively suppressing false matches characterized by similar global features but contradictory local structures\. Experiments demonstrate that SFPR effectively overcomes the retrieval bottleneck in macroscopically homogeneous scenes, achieving a relative improvement of 30\.20\\% in Top\-1 Recall@1m compared to the current state\-of\-the\-art method\. Code are publicly available at https://anonymous\.4open\.science/r/SFPR\.

## Your Teacher Can’t Help You Here: Combating Supervision Fidelity Decay in On\-Policy Distillation

**Authors:** Yanjiang Liu; Jie Lou; Xinyan Guan; Yuqiu Ji; Hongyu Lin; Ben He; Xianpei Han; Le Sun; XingYu Li; Yaojie Lu

**ID:** 154216 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FKhBVYNfpr>) | [PDF](<https://openreview.net/pdf?id=FKhBVYNfpr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154216>)

On\-policy distillation transfers reasoning capabilities by training a student model on its own generated trajectories using token\-level feedback from a teacher\.  However, we identify a critical bottleneck, Supervision Fidelity Decay \(SFD\): as student\-generated prefixes lengthen, the teacher’s next\-token distribution becomes less confident and less discriminative\.  Consequently, the teacher\-dependent corrective signal in reverse\-KL distillation weakens, causing student drift to compound across long reasoning chains\.  To mitigate SFD, we introduce Lookahead Group Reward \(LGR\)\. Building on the insight that next\-step teacher confidence reflects the discriminative strength of future reverse\-KL supervision, LGR evaluates the student’s top\-K candidate tokens by the teacher confidence they induce at the subsequent step and assigns a group\-normalized reward\. To maintain computational efficiency, we further design an entropy\-triggered tree\-attention mechanism\. Across six math and code benchmarks, LGR improves mean@8 by 2\.57 points over OPD for a 7B student, with gains increasing in longer\-generation and reaching 4\.92 points on AIME\-26 at 39k tokens\.

## Trie\-Aware Transformers for Generative Recommendation

**Authors:** Zhenxiang Xu; Sirui Chen; Yong He; Jieyu Yang; Chuan Yuan; Ke Ding; Jing Cao; Can Wang; Jiawei Chen

**ID:** 149589 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oxoJ8MqY3p>) | [PDF](<https://openreview.net/pdf?id=oxoJ8MqY3p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149589>)

Generative recommendation \(GR\) aligns with advances in generative AI by casting next\-item prediction as token\-level generation rather than score\-based ranking\. Most GR methods adopt a two\-stage pipeline: \(i\) \\textit\{item tokenization\}, which maps each item to a sequence of discrete, hierarchically organized tokens; and \(ii\) \\textit\{autoregressive generation\}, which predicts the next item's tokens conditioned on the tokens of user's interaction history\. Although hierarchical tokenization induces a prefix tree \(trie\) over items, standard autoregressive modeling with conventional Transformers often flattens item tokens into a linear stream and overlooks the underlying topology\. To address this, we propose TrieRec, a trie\-aware generative recommendation method that augments Transformers with structural inductive biases via two positional encodings\. First, a \\textit\{trie\-aware absolute positional encoding\} aggregates a token's \(node's\) local structural context \(\\eg depth, ancestors, and descendants\) into the token representation\. Second, a \\textit\{topology\-aware relative positional encoding\} injects pairwise structural relations into self\-attention to capture topology\-induced semantic relatedness\. TrieRec is also model\-agnostic, efficient, and hyperparameter\-free\. In our experiments, we implement TrieRec within three representative GR backbones, achieving notably improvements of 8\.83\\% on average across four real\-world datasets\.

## Fast KVzip: Efficient and Accurate LLM Inference with Gated KV Eviction

**Authors:** Jang\-Hyun Kim; Dongyoon Han; Sangdoo Yun

**ID:** 150502 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hbemMJsy3u>) | [PDF](<https://openreview.net/pdf?id=hbemMJsy3u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150502>)

Efficient key\-value \(KV\) cache management is crucial for the practical deployment of large language models \(LLMs\), yet existing compression techniques often incur a trade\-off between performance degradation and computational overhead\. We propose a novel gating\-based KV cache eviction method for frozen\-weight LLMs that achieves high compression ratios with negligible computational cost\. Our approach introduces lightweight sink\-attention gating modules to identify and retain critical KV pairs, and integrates seamlessly into both the prefill and decoding stages\. The proposed gate training algorithm relies on forward passes of an LLM, avoiding expensive backpropagation, while achieving strong task generalization through a task\-agnostic reconstruction objective\. Extensive experiments across the Qwen2\.5\-1M, Qwen3, and Gemma3 families show that our method maintains near\-lossless performance while evicting up to 70\\% of the KV cache\. The results are consistent across a wide range of tasks, including long\-context understanding, code comprehension, and mathematical reasoning, demonstrating the generality of our approach\.

## Reading Attribution from Attention: Evidence Heads as Latent Attribution Mechanisms in LLMs

**Authors:** Qi Wu; Jianfeng Qu; Peng\-Fei Zhang; Yanzhe Ji; Siyu Li; Wei Chen; Zhixu Li; Jiajie Xu

**ID:** 156092 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0QJyU7Bb8Y>) | [PDF](<https://openreview.net/pdf?id=0QJyU7Bb8Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156092>)

Large language models \(LLMs\) show strong performance in multi\-document question answering, but their practical deployment is limited by unreliable and unfaithful attribution to supporting evidence\. Existing prompting and training\-based methods often suffer from hallucinated citations and lack interpretability in how evidence is selected\. In this work, we investigate whether attribution signals are inherently encoded within transformer attention mechanisms\. We introduce a sensitivity\-based diagnostic that identifies a small subset of attention heads, termed \*\*Evidence Heads\*\*, which are highly responsive to perturbations in supporting documents\. Through causal interventions and semantic analysis, we show that these heads play a significant role in evidence identification and exhibit alignment with document\-level entailment signals\. Building on this finding, we propose a training\-free Attention\-based Attribution framework that extracts evidence signals directly from Evidence Head attention using global and local strategies\. Extensive experiments show that our method consistently outperforms strong baselines while remaining lightweight and interpretable\. Overall, our results suggest that structured attribution signals are implicitly encoded in LLM attention, and can be effectively leveraged for faithful multi\-document reasoning\.

## Data\-Efficient Learning for Constraint Satisfaction Problems via Relational Biases and Hard Axiom Clamping

**Authors:** Enqiang Zhu; Ke Wang; Yu Zhang; Shengzhi Wang; Xianhang Luo; Chanjuan Liu

**ID:** 150335 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ism9H7dCPG>) | [PDF](<https://openreview.net/pdf?id=ism9H7dCPG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150335>)

Constraint satisfaction problems \(CSPs\) serve as critical benchmarks for neural algorithmic reasoning, requiring accurate multi\-step constraint propagation to determine variable values that satisfy all specified constraints\. Existing neural solvers often rely on extensive training datasets, struggle with distribution shifts, or allow fixed clues to drift in continuous spaces\. We introduce CSP\-RSB, a data\-efficient recurrent Transformer that directly incorporates constraint topology into the attention mechanism through a learnable relational bias\. Additionally, we propose a hard axiom clamping strategy that fixes clues after each recurrence constraint projection and uses the QK\-Norm to stabilize a two\-layer block\. In 9 \\times 9 Sudoku, CSP\-RSB achieves 99\.94\\% board accuracy on the RRN\-test, 99\.13\\% on unfiltered Kaggle, and 99\.78\\% on filtered Kaggle, surpassing the previous best, Trial \\&amp; Error 2025, which reported accuracies of 99\.40\\%, 98\.90\\%, and 99\.50\\%, respectively\. Furthermore, it successfully solves Erd\\H\{o\}s\-\-R\\'enyi graph coloring with 100\\% accuracy in 9 epochs and maintains 99\.5\-100\\% accuracy on 10 \\times 10 binary puzzles\. By incorporating explicit topological structure, CSP\-RSB reduces the need for depth and data requirements for effective algorithmic reasoning\.

## Two Layers of Attention Stability: A Koopman\-Operator Analysis of Linear and Softmax Attention

**Authors:** zhenglong chen

**ID:** 153140 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NakvgMzgsK>) | [PDF](<https://openreview.net/pdf?id=NakvgMzgsK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153140>)

We develop a Koopman\-operator analysis of self\-attention that resolves a long\-standing puzzle: why does linear attention diverge on long sequences while softmax attention remains stable, even though both share the same next\-step prediction objective? We show that attention stability is intrinsically a \*two\-layer\* problem\. The \*architectural layer\* concerns the spectrum of the $n \\times n$ token\-mixing matrix and is data\-independent; the \*dynamical layer\* concerns the spectrum of the $d \\times d$ dual operator induced by training and should be data\-determined\.  We prove three concrete results within this framework: \(i\) under a shared encoder, the dual operator $C^\* = W\_Q W\_K^\\top G W\_V$ of linear attention coincides with the EDMD Koopman estimator $K\_\{\\text\{EDMD\}\} = G^\{\-1\}A$ at the global optimum, and its spectral radius is unconstrained; \(ii\) causal softmax attention enjoys an architectural guarantee $\\rho\(A^\{\\text\{soft\}\}\) \\le 1$ via row\-stochasticity, while its value projection $W\_V$ leaves the dynamical layer entirely unconstrained; \(iii\) LayerNorm makes the empirical Gram matrix $G\_\{\\text\{LN\}\}$ rank\-deficient with kernel $\\text\{span\}\(\\mathbf\{1\}\)$, producing a $d$\-parameter family of loss\-equivalent but spectrally distinct EDMD solutions, while RMSNorm preserves invertibility\.  The framework yields an immediate design principle—constrain the architectural layer, free the dynamical layer—which we instantiate as two stabilized linear\-attention variants \(SN\-LA, RN\-LA\)\. Numerical experiments reveal a \*hierarchy\* of architectural stability: vanilla linear attention has neither bound and diverges immediately under autoregressive rollout; our stabilized variants enforce only the single\-pass spectral bound $\\rho\(\\tilde\{A\}\) \\le 1$ and delay divergence; softmax attains the strictly stronger pointwise contraction $\\Vert A v\\Vert\_\\infty \\le \\Vert v\\Vert\_\\infty$ via row\-stochasticity and remains bounded\. On real time\-series benchmarks \(ETT, Weather\), our methods close $\\ge 80\\%$ of the vanilla\-to\-softmax gap and surpass softmax on $3/5$ datasets at long horizons, while preserving the dynamical\-layer freedom that constraints on the dual operator forfeit\.

## State\-Resolving Attention for Length\-Extrapolating Transformers

**Authors:** Zicheng Liu; Di Wu; Jintao Chen; Di Huang

**ID:** 148318 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yhRk81TgYO>) | [PDF](<https://openreview.net/pdf?id=yhRk81TgYO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148318>)

Long\-context failures are often framed as retrieval failures: a model must find a relevant token among many distractors\. However, many practical long\-context settings are better understood as state\-tracking problems: dialogue histories contain corrections to earlier preferences, code traces repeatedly assign values to variables, document histories revise previous claims, and tool\-use trajectories update the current task state\. In these settings, a model must not only identify relevant tokens, but also resolve which relevant occurrence is currently valid\. We propose Sieve Attention, a position\-encoding\-free attention mechanism for length\-extrapolating Transformers\. SRA decomposes attention into two operations: content filtering and temporal state resolution\. For each query, SRA first applies a sparse content filter over the full prefix to identify candidate state updates, and then applies a sequential hazard allocation process only over the selected candidates\. This resolves repeated updates according to their relative order without relying on external positional encodings, allowing irrelevant intervening tokens to be ignored before recency is applied\. We formalize the mechanism and show that its final attention support is contained in the sparse candidate set, that filtered distractors receive exactly zero mass, and that attention ratios among selected candidates are independent of global sequence length and absolute position\. Experiments on repeated associative recall and copy tasks show strong extrapolation far beyond the training context length\. On long\-context evaluation and language\-model pretraining, SRA improves long\-context behavior while remaining competitive with standard Transformer baselines\. These results suggest that content\-first, time\-second state resolution is a useful inductive bias for long\-context models that must track evolving information\.

## Closing the Loop with Fixed\-Point Self\-Attention

**Authors:** Mrinal Mathur; Barak Pearlmutter; Sergey Plis

**ID:** 153850 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IH0NcTKzaZ>) | [PDF](<https://openreview.net/pdf?id=IH0NcTKzaZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153850>)

In a standard transformer, each layer computes attention once: queries examine keys, select values, and move on\. But attention is a function of representation, and representation is a function of attention\. We close this loop\. Fixed\-Point Self\-Attention \(FPSA\) computes its attention pattern by iterating the query/key/value process to convergence\. Values $V$ are derived from the layer input and held fixed; queries and keys are recomputed from an evolving output state $Z\_t$ at each step, converging when representations reach equilibrium, $Z^\* = f\(Z^\*\)$\. FPSA is a drop\-in replacement for multi\-head attention that adds zero parameters and adapts depth on its own: easy tokens stabilize in $2$\-\-$3$ iterations, hard tokens refine over $15$ or more, with $\\mathcal\{O\}\(1\)$ memory cost regardless of the number of iterations\. It lifts BERT\-Base and ELECTRA\-Base on GLUE and SQuAD\~v2\.0, improves ViT\-B/16 accuracy by up to 20\\%, and delivers matching gains on vision\-language tasks, all without adding a single parameter\. Unlike looped transformers that iterate entire layers, FPSA iterates only the attention step, so overhead is modest: a median of $3$\-\-$6$ steps per layer adds roughly $1\.6\\times$ GFLOPs and $1\.3$\-\-$1\.4\\times$ wall\-clock time over BERT\-Base\. On multi\-step reasoning benchmarks \(GSM8K, BBH, LogiQA\), FPSA's adaptive computation yields clear gains, letting the model refine longer when the input demands it\.

## Flux Attention: Context\-Aware Hybrid Attention for Efficient LLMs Inference

**Authors:** Quantong Qiu; Zhiyi Hong; Yi Yang; Haitian Wang; Kebin Liu; Qingqing Dang; Juntao Li; Min zhang

**ID:** 154703 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BfLKfkqbAC>) | [PDF](<https://openreview.net/pdf?id=BfLKfkqbAC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154703>)

The quadratic computational complexity of standard attention mechanisms presents a severe scalability bottleneck for LLMs in long\-context scenarios\. While hybrid attention mechanisms combining Full Attention \(FA\) and Sparse Attention \(SA\) offer a potential solution, existing methods typically rely on static allocation ratios that fail to accommodate the variable retrieval demands of different tasks\. Furthermore, head\-level dynamic sparsity often introduces severe computational load imbalance and synchronization long\-tails, which hinder hardware acceleration during autoregressive decoding\. To bridge this gap, we introduce Flux Attention , a context\-aware framework that dynamically optimizes attention computation at the layer level\. By integrating a lightweight Layer Router into frozen pretrained LLMs, the proposed method adaptively routes each layer to FA or SA based on the input context\. This layer\-wise routing preserves high\-fidelity information retrieval while ensuring contiguous memory access, translating theoretical computational reductions into practical wall\-clock speedups\. As a parameter\-efficient approach, our framework requires only 12 hours of training on 8xA800 GPUs\. Extensive experiments across multiple long\-context and mathematical reasoning benchmarks demonstrate that Flux Attention achieves a superior trade\-off between performance and inference speed compared with baseline models, with speed improvements of up to 2\.8x and 2\.0x in the prefill and decode stages\.

## RAM\-Net: Linear\-Time Sequence Modeling with Sparsely Addressable State

**Authors:** Kaicheng Xiao; Haotian Li; Liran Dong; Guoliang Xing

**ID:** 152777 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QPjqzE6cUh>) | [PDF](<https://openreview.net/pdf?id=QPjqzE6cUh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152777>)

Linear attention offers an efficient alternative to full attention with a fixed\-size recurrent state\. However, this state is shared by all tokens, so information from distinct tokens becomes superposed within it and produces inter\-token interference that degrades long\-range fine\-grained recall\. To address this issue, we propose RAM\-Net, which replaces dense access to a shared state with sparse address\-based access\. RAM\-Net organizes the recurrent state as a fixed\-size array of independent slots and uses an Address Decoder that maps each key or query into a sparse address, selecting a small subset of slots to write to or read from at each step\. This design directs tokens with non\-overlapping addresses to disjoint slots, suppressing inter\-token interference, while keeping per\-step overhead dependent only on the number of accessed slots rather than the total state size\. Empirically, RAM\-Net shows a clear advantage over strong linear baselines on fine\-grained long\-range retrieval and remains competitive on standard language modeling and commonsense reasoning, while accessing far fewer state elements per step than these baselines \(e\.g\., 32$\\times$ fewer than Mamba2\)\.

## Scaling Limits of Long\-Context Transformers

**Authors:** Giuseppe Bruno; Chen; Zhengjiang Lin; Yury Polyanskiy; Philippe Rigollet

**ID:** 152309 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U2aowiLeMa>) | [PDF](<https://openreview.net/pdf?id=U2aowiLeMa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152309>)

We study the long\-context limit of softmax self\-attention with a fixed query and a random context of $n$ i\.i\.d\. keys on the sphere, viewing the inverse temperature $\\beta\_n$ as the scaling parameter that decides whether attention degenerates into uniform averaging or collapses onto the single closest key\. We show that the critical scale at which selectivity emerges is determined by the local exponent of the distance\-to\-query distribution near zero rather than by global features of the context, and scales like $\\beta\_n^\\ast \\asymp n^\{2/\(d\-1\)\}$ for uniform keys on $\\mathbb\{S\}^\{d\-1\}$\. Furthermore, we characterize the limiting laws of the ordered attention weights and of the attention output across all regimes of $\\beta\_n$: a subcritical regime in which the output reduces to a local average around $q$ with explicit deterministic bias and Gaussian fluctuations; a critical regime in which a finite collection of nearest keys retains macroscopic mass without single\-key collapse; and a supercritical regime in which all mass concentrates on the closest key\. Of notable interest is the subcritical case with identity value matrix where the attention map approximately implements a backward heat equation\.

## RoPE Is Not a Proper Relative Position Embedding

**Authors:** Yui Oka; Kyosuke Nishida; Sho Yokoi

**ID:** 140089 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HKQWXNPs9b>) | [PDF](<https://openreview.net/pdf?id=HKQWXNPs9b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140089>)

Rotary Position Embedding \(RoPE\) is one of the most widely used positional mechanisms in modern large language models\.  Because RoPE applies position\-dependent rotations whose attention score can be rewritten in terms of relative offsets, subsequent work has sometimes classified it as a relative position embedding\. In this position paper, we argue that RoPE is not a proper relative position embedding\. Treating RoPE as a relative position embedding can create overly strong expectations about length extrapolation, context extension, and comparisons with other positional mechanisms\.  In practice, however, these expectations have not been borne out: RoPE\-based long\-context models typically rely on position interpolation, continued training, or fine\-tuning\. This is more consistent with an absolute\-position\-conditioned view of RoPE\. We argue that this reframing, which is closer to the original formulation, offers a more precise conceptual foundation for analyzing RoPE, understanding long\-context behavior, and comparing positional mechanisms in modern LLMs\. To make this distinction precise, we formalize the distance\-decay property that has been implicitly expected of relative position embeddings and show that RoPE does not satisfy it\.

## The Kernel Reality Check: Benchmarking and Distilling Efficient Attention at Scale

**Authors:** Firat Oncel; Cem Subakan; Mirco Ravanelli; Çağatay Yıldız

**ID:** 149008 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tVaxhv0A2z>) | [PDF](<https://openreview.net/pdf?id=tVaxhv0A2z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149008>)

Kernelized attention methods, which aim to replace the $O\(N^2\)$ complexity of softmax attention with $O\(N\)$ alternatives, have been the focus of intense research in the last five years\. Despite growing interest, systematic evaluations at foundation model scales and fair comparisons across approaches are still missing\. We analyze kernelized attention in two halves and highlight prominent limitations on each\.  On efficiency, FlashAttention achieves lower memory consumption and faster wall\-clock time than state\-of\-the\-art kernelized methods across most sequence lengths \(with auto\-regressive generation memory the only clear exception\), directly contradicting the field's core assumption\. We also discover that reported efficiency gains often fail to reproduce against modern baselines\. On quality, current kernelized methods leave gaps of $2$\-$10$ points relative to softmax under a unified distillation protocol, and these gaps do not close with model scale\. We show this gap is not intrinsic to kernelization: LARA\+\+, a principled extension of LARA that approximates softmax via importance sampling with adaptive proposal distributions, recovers up to 99\\% of softmax accuracy\. We establish that the gap is closable; however, the computational overhead remains substantial, leaving the efficiency wall intact\.

## Sparse Delta Memory: Scaling the State of Linear RNNs through Sparsity

**Authors:** Loic Cabannes; Pierre\-Emmanuel Mazare; Ilze Amanda Auzina; Gergely Szilvasy; Maria Lomeli; Matthijs Douze; Justin Carpentier; Gabriel Synnaeve; Herve Jegou

**ID:** 155048 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8qEsjLzluv>) | [PDF](<https://openreview.net/pdf?id=8qEsjLzluv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155048>)

Linear attention models allow a fixed state size and a fixed amount of compute per token\. However, due to their limited state size, linear attention models fall behind in long\-context recall compared to softmax\-attention\-based transformer architectures\. Increasing the state size of linear attention improves recall performance but at the cost of higher FLOPs\. In this work, we introduce Sparse Delta Memory \(SDM\), an architecture that scales the hidden state of gated linear RNNs to orders of magnitude higher capacity using a sparse addressing scheme\. SDM extends the Gated DeltaNet architecture by replacing the dense key\-value outer product with sparse reads and writes to a large explicit memory\. We show that, under an isoFLOP constraint and with an identical number of parameters, a higher state memory capacity significantly improves performance on in\-context learning and long\-context retrieval tasks\. Moreover, by learning the initial state of the SDM memory and therefore using it as a parametric memory, we show that the model further improves on a wide range of common\-knowledge and reasoning tasks\.

## Coverage\-Verified Sparse Attention: Closed\-Loop Quality Control for Long\-Context LLM Decoding

**Authors:** Yan\-Cheng Li; Chun\-Yi Lee

**ID:** 155083 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8Z6u3YSO1c>) | [PDF](<https://openreview.net/pdf?id=8Z6u3YSO1c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155083>)

Sparse attention accelerates long\-context decoding by reading a subset of the KV cache, but existing methods are open\-loop: the kernel commits to its selection with no signal indicating whether enough attention mass was preserved and no recovery path when it was not\. The needed signal already exists inside the kernel\. The fraction of softmax mass on the selected tokens, which we call coverage, satisfies an exact algebraic equality with per\-step output error and serves a dual role as the acceptance criterion and the interpolation weight for recovery\. Coverage\-Verified Sparse Attention \(CVSA\) turns coverage into a training\-free, closed\-loop verify\-then\-correct decode loop that accepts high\-coverage drafts and recovers only the heads that fall short, with no sampling, no draft model, and no speculative\-decoding infrastructure\. Turning verification on matters far more than tuning its threshold, and matched\-budget comparisons confirm the gain is structural\. On LongBench and RULER at 7B and 70B, CVSA closes the quality gap to dense attention to within statistical noise, with measured throughput reaching 6\.21x at 128K context\.

## Flexformer: Flexible Linear Transformer with Learnable Attention Kernel

**Authors:** Haoran Zhang; Zisu Dong; Feng Zhou

**ID:** 154501 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D8frDvzgAf>) | [PDF](<https://openreview.net/pdf?id=D8frDvzgAf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154501>)

Transformer models rely on attention mechanism to capture long\-range dependencies but suffer from quadratic complexity, limiting their scalability to long sequences\. Kernel\-based linear attention reduces this complexity but typically relies on fixed or weakly learnable kernels, restricting expressiveness and performance\. In this work, we propose Flexformer, a flexible linear Transformer that learns attention kernels in a fully data\-driven manner\. Flexformer builds on random Fourier feature\-based linear attention and treats spectral frequencies as trainable parameters, enabling the model to learn a broad family of attention kernels\. We develop both stationary and nonstationary variants, with the latter offering strictly greater expressiveness\. Extensive experiments on language modeling and sequence classification demonstrate that Flexformer consistently outperforms baselines\. Moreover, Flexformer can be effectively distilled from pretrained Transformers to recover softmax attention and exhibits strong kernel transferability across domains, achieving both high efficiency and competitive performance on long\-sequence tasks\.

## Transformers in the Dark: Navigating Unknown Search Spaces via Bandit Feedback

**Authors:** Jungtaek Kim; Thomas Zeng; Ziqian Lin; Minjae Lee; Chungpa Lee; Jy\-yong Sohn; Hyung Koo; Kangwook Lee

**ID:** 156799 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156799>)

Effective problem solving with Large Language Models \(LLMs\) can be enhanced when they are paired with external search algorithms\. By viewing the space of diverse ideas and their follow\-up possibilities as a tree structure, the search algorithm can navigate such a search space and guide the LLM toward better solutions more efficiently\. While the search algorithm enables an effective balance between exploitation and exploration of a tree\-structured space, the need for an external component can complicate the overall problem\-solving process\. We therefore pose the following question: Can LLMs or their underlying Transformer architectures approximate a search algorithm? To answer this question, we first introduce a simplified framework in which tree extensions and feedback signals are externally specified, allowing for controlled evaluation of search capabilities\. We call this setting unknown tree search with bandit feedback\. Within this setting, we show that Transformers are theoretically expressive enough to implement distinct search strategies and can be trained from scratch to approximate those strategies\. Our Transformer models exhibit the possibility of generalizing to unseen conditions such as longer horizons or deeper trees\. Furthermore, we demonstrate that continued task\-focused training unlocks the complete capabilities of a pretrained LLM, by fine\-tuning the LLM on search trajectories\.

## Rethinking State Tracking in Recurrent Models Through Error Control Dynamics

**Authors:** Jiwan Chung; Heechan Choi; Seon Joo Kim

**ID:** 151964 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WUTtJ13Ih0>) | [PDF](<https://openreview.net/pdf?id=WUTtJ13Ih0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151964>)

The theory of state tracking in recurrent architectures has predominantly focused on expressive capacity: whether a fixed architecture can theoretically realize a set of symbolic transition rules\. We argue that equally important is error control, the dynamics governing hidden\-state drift along the directions that distinguish symbolic states\. We prove that affine recurrent networks, a class of models encompassing State\-Space Models and Linear Attention, cannot correct errors along state\-separating subspaces once they preserve state representations\. Consequently, practical affine trackers do not learn robust state tracking; rather, they learn finite horizon solutions governed by accumulated state\-relevant error\. We characterize the mechanics of this failure, showing that tracking remains readable only while the accumulating within\-class spread remains small relative to the initial between\-class separation\. We demonstrate empirically on group state\-tracking tasks that this breakdown is predictable: tracking collapses when the distinguishability ratio crosses the readability threshold of the trained decoder\. Across trained models, the point of this crossing predicts the horizon at which downstream accuracy fails\. These results establish that robust state tracking is determined not only by an architecture's theoretical expressivity but crucially by its error control\.

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

**ID:** 150679 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gIcv8jfze7>) | [PDF](<https://openreview.net/pdf?id=gIcv8jfze7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150679>)

The vanilla self\-attention mechanism in Transformers can be viewed as a two\-layer fast\-weight MLP, whose weights are dynamically induced by inputs and whose hidden dimension is equal to the sequence length $N$\.   As the context extends, the expressive capacity of such an $N$\-width MLP increases, but it becomes unscalable for extremely long sequences\.   Recently, this fast\-weight perspective has motivated the Mixture\-of\-Experts \(MoE\) attention, which partitions the sequence into rigid blocks, treats them as fast\-weight experts, and sparsely routes the tokens to them\.   In this paper, we elevate this perspective to a unifying framework for efficient attention mechanisms, interpreting them as making fast weights scalable through either routing or compression, and organizing them into a five\-dimensional taxonomy\.   Then, we propose \\textbf\{Mi\}xture\-of\-\\textbf\{T\}op\-$k$ \\textbf\{A\}ttention \(\\textbf\{MiTA\}\), which employs a small set of landmark queries to gather top\-$k$ attended key\-value pairs as query\-aware and deformable routed experts, while compressing the $N$\-width MLP into a narrower shared expert\.   Consequently, MiTA improves the flexibility of prior MoE attention, from rigid to deformable fast\-weight experts, as well as the scalability of prior top\-$k$ attention, from query\-specific set to reusable top\-$k$ set\.   Our experiments on vision tasks demonstrate the superior effectiveness and efficiency of MiTA, while also uncovering intriguing properties such as an emergent token\-pruning effect and easy generalization from standard attention\.

## Multiple Instance Verification

**Authors:** Xin Xu; Eibe Frank; Geoff Holmes

**ID:** 156670 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156670>)

We explore multiple instance verification, a problem setting in which a query instance is verified against a bag of target instances with heterogeneous, unknown relevancy\. We show that naive adaptations of attention\-based multiple instance learning \(MIL\) methods and standard verification methods like Siamese neural networks are unsuitable for this setting: directly combining state\-of\-the\-art \(SOTA\) MIL methods and Siamese networks is shown to be no better, and sometimes significantly worse, than a simple baseline model\. Postulating that this may be caused by the failure of the representation of the target bag to incorporate the query instance, we introduce a new pooling approach named “cross\-attention pooling” \(CAP\)\. Under the CAP framework, we propose two novel attention functions to address the challenge of distinguishing between highly similar instances in a target bag\. Through empirical studies on three different verification tasks, we demonstrate that CAP outperforms adaptations of SOTA MIL methods and the baseline by substantial margins, in terms of both classification accuracy and the ability to detect key instances\. The superior ability to identify key instances is attributed to the new attention functions by ablation studies\.

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

## RankVQ: Low\-Rank Parameterized Commutative Vector Quantization for KV Cache Compression

**Authors:** Jianglin Zhou; Huaming Wu; Huijun Tang

**ID:** 148642 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wBu1wjG1xm>) | [PDF](<https://openreview.net/pdf?id=wBu1wjG1xm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148642>)

The growing context lengths of large language models \(LLMs\) have made key\-value \(KV\) cache memory a critical bottleneck during inference\. Vector quantization \(VQ\) with commutative codebooks provides an effective Rotary Position Embedding \(RoPE\)\-aware solution by enabling reconstruction\-free attention over quantized key indices\. However, existing commutative VQ methods still parameterize scalar codebook coefficients across RoPE subspaces and codewords largely independently, leaving parameter\-side redundancy underexploited\. We propose $\\textbf\{RankVQ\}$, a low\-rank parameterized commutative vector quantization method for KV cache compression\. Instead of factorizing the deployed codebooks, RankVQ factorizes the underlying scalar coefficient matrices used to construct key and value codebooks\. This design preserves the pseudo\-symmetric structure required for RoPE commutativity on the key side, while improving the quality and compactness of offline codebook construction\. The low\-rank factors are discarded after codebook construction, so RankVQ keeps the same online inference form as standard commutative VQ and introduces no additional decoding overhead\. Experiments on LongBench, InfiniteBench, and GSM8K show that RankVQ achieves a stronger accuracy\-\-compression trade\-off than directly comparable KV quantization baselines, with particularly clear gains in the 1\-bit regime\.

## Parabolic Position Encoding: Vision\-Centric, Principled, Extrapolatable, General

**Authors:** Christoffer Koo Øhrstrøm; Rafael I Cabral Muchacho; Yifei Dong; Filippos Moumtzidellis; Ronja Güldenring; Florian T\. Pokorny; Lazaros Nalpantidis

**ID:** 151484 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aHGX6FOsYg>) | [PDF](<https://openreview.net/pdf?id=aHGX6FOsYg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151484>)

We propose Parabolic Position Encoding \(PaPE\), a parabola\-based position encoding for vision modalities in attention\-based architectures\. Given a set of vision tokens–such as from videos, event camera streams, images, or point clouds–our objective is to encode their positions while accounting for the characteristics of vision modalities\. Prior works have largely extended position encodings from 1D\-sequences in language to nD\-structures in vision, but only with partial account of vision characteristics\. We address this gap by designing PaPE from principles distilled from prior work: translation invariance, rotation invariance \(PaPE\-RI\), distance decay, directionality, and context awareness\. Extrapolation experiments on ImageNet\-1K show how PaPE extrapolates remarkably well, improving in absolute terms by up to 10\.5% over the next\-best encoding\. Generality experiments on 8 datasets across 4 modalities show that PaPE is a general vision position encoding, as PaPE matches the best baseline on 5 datasets and exceeds all on 2 datasets\.

## LIME: Link\-based User\-item Interaction Modeling with Decoupled XOR Attention for Efficient Test Time Scaling

**Authors:** Yunjiang Jiang; Ayush Agarwal; Yang Liu; Yihan Wu; Haoran Liu; Bi Xue

**ID:** 153393 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Lhbpwyn5ox>) | [PDF](<https://openreview.net/pdf?id=Lhbpwyn5ox>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153393>)

Scaling large recommendation systems requires advancing three major frontiers: processing longer user histories, expanding candidate sets, and increasing model capacity\. While promising, transformers' computational cost scales quadratically with the user sequence length and linearly with the number of candidates\. This trade\-off makes it prohibitively expensive to expand candidate sets or increase sequence length at inference, despite the significant performance improvements\. We introduce \*\*LIME\*\*, a novel architecture that resolves this trade\-off\. Through two key innovations, LIME fundamentally reduces computational complexity\. First, low\-rank \`\`link embeddings" enable pre\-computation of attention weights by decoupling user and candidate interactions, making the inference cost nearly independent of candidate set size\. Second, a linear attention mechanism, \*\*LIME\-XOR\*\*, reduces the complexity with respect to user sequence length from quadratic \($O\(N^2\)$\) to linear \($O\(N\)$\)\. Experiments on public and industrial datasets show LIME achieves near\-parity with state\-of\-the\-art transformers but with a 10$\\times$ inference speedup on large candidate sets or long sequence lengths\. When tested on a major recommendation platform, LIME improved user engagement while maintaining minimal inference costs with respect to candidate set size and user history length, establishing a new paradigm for efficient and expressive recommendation systems\.

## Cross\-Model KV Cache Transfer in LLM Families: A Closed\-Form Linear Mapping for Prefill Reuse

**Authors:** Taekyung Heo; Rasoul Shafipour; Ritchie Zhao; Maximilian Golub; Mohammad Mahdi Kamani; Ritika Borkar; Makesh T Chandran; Pantea Zardoshti; Bita Darvish Rouhani

**ID:** 153772 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ImLkPKhbKo>) | [PDF](<https://openreview.net/pdf?id=ImLkPKhbKo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153772>)

Production deployments often swap between different\-sized models in a family for cost\-quality cascading, mid\-conversation switching, and routing, and each swap forces the receiver to repay the prefill from scratch\. We propose cross\-model KV cache transfer, where the receiver reuses the source’s KV cache, skipping prefill\. We find that cross\-model KV has substantial linear structure across matched\-KV pairs, where source and target share KV head count and per\-head dimension\. On Qwen3 14B→32B, one source layer explains 56% of variance in the target’s keys and 32% in values, rising to 79% and 65% with multiple source layers\. Building on this, we design a closed\-form ridge mapper that operates per head and proceeds in three steps\. First, for each target layer we select the top\-kmost predictive source layers and concatenate their KV as input\. Second, we strip RoPE from the keys before mapping, so the fit is position\-free and reusable across context lengths\. Third, we fit ridge regression on a small calibration set of 500 FineWeb\-Edu sequences of 1,024 tokens each\. Surprisingly, across six pairs in three families, this linear mapper retains 71–98% of the receiver’s standalone\-prefill accuracy on four pairs, while two degrade sharply\. A nonlinear MLP recovers up to \+22 pp HellaSwag retention on the failures\. The mapper runs 3–31×faster than re\-prefill and remains stable across multi\-turn handoff, making cross\-model KV cache transfer practical\.

## The Key to Going Linear: Analysis\-Driven Transformer Linearization

**Authors:** Anna Kuzina; Paul Whatmough; Babak Ehteshami Bejnordi

**ID:** 151267 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bekG7rxPRG>) | [PDF](<https://openreview.net/pdf?id=bekG7rxPRG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151267>)

The quadratic cost of causal self\-attention severely bottlenecks long\-context transformer inference\. While numerous post hoc linearization pipelines exist, it is difficult to identify which components preserve model quality\. This work isolates the effect of state update design in a strict frozen\-backbone regime\. We show that softmax relies on key\-dependent, rank\-1 orthogonal projections, elucidating why delta\-style networks outperform purely gated accumulation\. We identify a potential source of approximation errors and introduce structural interventions, specifically sink tokens, short convolutions, and fixed\-budget cache routing, which reduces the remaining gap\. We scale this linearization approach across LLaMA and Qwen models up to 32B parameters, outperforming prior post hoc baselines on MMLU and matching the long\-context retrieval of complex adaptive\-caching frameworks\.

## Selectivity Makes State\-Space Models Universal Sequence Approximators

**Authors:** Yoshihiro Maruyama

**ID:** 150042 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lD881YL8Tk>) | [PDF](<https://openreview.net/pdf?id=lD881YL8Tk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150042>)

Selective state\-space models such as Mamba replace fixed linear state transitions by input\-dependent transitions, yielding recurrent sequence models that retain linear\-time inference while adapting their memory dynamics to the current token\. We show that even a simple form of this selective memory update has universal approximation power\. Specifically, for every compact input domain, finite horizon, and continuous causal sequence\-to\-sequence map, a clocked diagonal selective state\-space scan with strictly contractive gates and a linear\-in\-state readout uniformly approximates the target map\. The proof is constructive: input\-dependent diagonal propagation generates tensor\-product partition features over prefixes, and the linear\-in\-state readout combines these features with sampled target values\. Thus the high\-order interactions required for universality are produced inside the selective scan itself, rather than by attention, nonlinear hidden\-state dynamics, or a universal multilayer perceptron applied after a sequence encoder\. These results identify selectivity as a mathematically sufficient mechanism for expressive linear\-time state\-space sequence modeling\. Selectivity lets the model decide, token by token, which parts of the past should be preserved, faded, or combined with the present\. The universal approximation theorem shows that this adaptive use of memory is sufficient to reproduce any well\-behaved causal sequence rule over a fixed horizon\.

## Hypergraph Modeling of Transformer Attention for Hallucination Detection

**Authors:** Mark Junjie Li; zhishun liu; Wei Wang; Yuanshan Lu; yangjingxi; Xianyu Bao; Jun Li; Sunjie Huang

**ID:** 154475 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DKOfhIFbgb>) | [PDF](<https://openreview.net/pdf?id=DKOfhIFbgb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154475>)

Large Language Models \(LLMs\) often generate factually unsupported content known as hallucination\. However, existing detection approaches rely on handcrafted heuristics or isolated attention signals, limiting their ability to capture higher\-order dependencies\. In this work, we propose $\\textbf\{AttnHyper\}$, a framework that represents a Transformer's attention patterns as a hypergraph for hallucination detection\. Tokens are treated as nodes, while hyperedges connect groups of tokens that co\-occur across heads and layers, with features derived from attention weights to preserve higher\-order interactions beyond pairwise graphs\. Based on this representation, the method formulates hallucination detection as a hypergraph learning problem and employs a hypergraph neural network \(HGNN\) to extract structural cues\. It consistently outperforms state\-of\-the\-art methods on the RAGTruth benchmark, achieving an average gain of \+5\.08 AUROC over the strongest baseline across diverse settings and architectures, while also demonstrating strong zero\-shot transfer\. Importantly, it incurs minimal overhead at inference time, enabling efficient deployment\. Our results demonstrate that hypergraph\-based attention modeling provides a more expressive and reliable signal for hallucination detection\.

## SimpliHuMoN: Simplifying Human Motion Prediction

**Authors:** Aadya Agrawal; Alex Schwing

**ID:** 148808 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uxFUvDqw0F>) | [PDF](<https://openreview.net/pdf?id=uxFUvDqw0F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148808>)

Human motion prediction combines the tasks of trajectory forecasting and human pose prediction\. For each of the two tasks, specialized models have been developed\. Combining these models for holistic human motion prediction is non\-trivial, and recent methods have struggled to compete on established benchmarks for individual tasks\. To address this, we propose a simple yet effective transformer\-based model for human motion prediction\. The model employs a stack of self\-attention modules to effectively capture both spatial dependencies within a pose and temporal relationships across a motion sequence\. This simple, streamlined, end\-to\-end model is sufficiently versatile to handle pose\-only, trajectory\-only, and combined prediction tasks without task\-specific modifications\. We demonstrate that this approach achieves state\-of\-the\-art or on\-par results across all tasks through extensive experiments on a wide range of benchmark datasets, including Human3\.6M, AMASS, ETH\-UCY, and 3DPW\. Code will be released\.

## Spectral Degeneration of Softmax Attention under Isotropic Score Geometry

**Authors:** Mengda Li; Jianfeng Yao

**ID:** 154061 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GUj06j9XU5>) | [PDF](<https://openreview.net/pdf?id=GUj06j9XU5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154061>)

We study the spectral structure of the attention matrix in Transformer models through an idealized spectral model for the pre\-softmax score matrix\. Motivated by the rotational isotropy of query and key representations, we replace the random token\-space orientation of the score matrix by its canonical singular\-value representative $\\Sigma$, and assume that $\\Sigma$ has a logarithmic spike\-bulk separation\. We provide empirical diagnostics consistent with this model on pretrained vision and language transformers: token\-space singular vectors exhibit near\-Haar behavior, and score spectra are dominated by a small number of effective directions\. We then prove that the row\-wise softmax map transforms this structure into a degenerate attention matrix: dominant modes are preserved, whereas the bulk spectrum converges weakly to $\\delta\_0$\. This provides a unified theoretical explanation for why attention layers can act as low\-rank information extractors: they preserve a small number of dominant token directions while compressing the remaining bulk modes\.

## Motif\-Mamba: network motif improved mamba for long\-range sequence modeling

**Authors:** Chonghe Hao; Yue Sun; Jian Zhang; Yansong Wang; Wangzi Yao; Yao Yunjie; Tielin Zhang

**ID:** 154995 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9Keyk37TpH>) | [PDF](<https://openreview.net/pdf?id=9Keyk37TpH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154995>)

Efficient long\-sequence modeling remains a central challenge for large language models, as self\-attention scales quadratically with sequence length\. Mamba offers a linear\-time alternative through selective state space recurrence, but its predominantly diagonal state transitions restrict explicit interactions among state dimensions\. We propose Motif\-Mamba, a structured state space model that augments Mamba with a motif\-constrained low\-rank recurrent pathway\. Inspired by the dynamics of three\-node network motifs, the proposed pathway projects hidden states into a compact dynamical subspace, imposes motif\-guided interactions, and maps the resulting dynamics back to the original state space\. This design enhances cross\-dimensional communication while preserving the linear\-time recurrent structure of Mamba\. Experiments on long\-sequence extrapolation, language modeling benchmarks, and brain\-\-computer interface decoding show consistent improvements over Mamba backbones, suggesting that motif\-guided low\-rank dynamics provide an effective structural prior for long\-range sequence modeling\.

## Diff\-Kalman: Difference\-Driven Learning for Structure\-Preserving Kalman Filtering

**Authors:** Jia Gao; Xianglei Xing; yang qing; Tianshuo Zhang; Wenzhe Zhai

**ID:** 150096 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kk5tmlhwi6>) | [PDF](<https://openreview.net/pdf?id=kk5tmlhwi6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150096>)

State estimation is a critical challenge in modeling dynamic systems\. Traditional Kalman filters and data\-driven methods have shown good results in complex, nonlinear systems\. However, most existing methods optimize the posterior without considering prior modeling, which leaves room for improvement in state estimation accuracy, and predict high\-dimensional Kalman parameters end\-to\-end, which lead to unstable training and poor convergence\. To address this, we propose Diff\-Kalman, which leverages state differences to predict state increments and scaling matrices for correcting both the prediction and update phases of the Kalman filter\. Diff\-Kalman combines traditional dynamic models with neural networks to adaptively correct system behavior\. In the prediction phase, Diff\-Kalman utilizes a Transformer\-based architecture with self\-attention to extract localized patterns from historical states, followed by cross\-attention to predict future state increments\. These increments are then fused with model\-based priors from the dynamic model\. In the update phase, a GRU\-based Scaling Predictor \(GSP\) dynamically adjusts the Kalman covariance and gain matrices based on differential residuals, which improves the accuracy and robustness of the estimation\. Experimental results on linear MOT trajectories and nonlinear Lorenz dynamics show that Diff\-Kalman improves estimation accuracy over representative baselines\.

## Sink vs\. diagonal patterns as mechanisms for attention switch and oversmoothing prevention

**Authors:** Peter Súkeník; Cristina Lopez Amado; Christoph Lampert; Marco Mondelli

**ID:** 153161 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NPpBWkJvNA>) | [PDF](<https://openreview.net/pdf?id=NPpBWkJvNA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153161>)

This paper studies the role of sinks and diagonal patterns as attention switch and anti\-oversmoothing mechanisms\. We analyze geometric conditions under which sinks can be represented, showing a necessary alignment between the embedding of the sink and all other embeddings\. Next, we refine the current understanding of the role of sinks in oversmoothing prevention: we specify the conditions under which dense attention provably smooths more than sparse attention, and empirically verify that such conditions are often satisfied in practice\. We further prove an equivalence between sinks and hard attention switch, in which the output of the attention is identically 0\. Finally, we relax the hard attention switch by allowing token self\-communication: we provide a quantitative comparison of the costs of representing sinks vs\.\\ diagonal patterns, showing why sinks are favored in pretrained transformers\. The introduction and analysis of diagonal patterns and the generalization of the attention switch close the gap between what oversmoothing prevention requires and what sinks provide, while also establishing when and why attention layers act like MLPs if token communication is not necessary\.

## Geometry\-Calibrated Conformal Abstention for Language Models

**Authors:** Rui Xu; Yi Chen; Sihong Xie; Hui Xiong

**ID:** 148649 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wAjaheyp6R>) | [PDF](<https://openreview.net/pdf?id=wAjaheyp6R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148649>)

When language models lack relevant knowledge for a given query, they frequently generate plausible responses that can be hallucinations, rather than admitting being agnostic about the answer\. Retraining models to reward admitting ignorance can lead to overly conservative behaviors and poor generalization due to scarce evaluation benchmarks\. We propose a post\-hoc framework, Conformal Abstention \(CA\), adapted from conformal prediction \(CP\) to determine whether to abstain from answering a query\. CA provides finite\-sample guarantees on both the probability of participation \(i\.e\., not abstaining\) and the probability that the generated response is correct\. Importantly, the abstention decision relies on prediction confidence rather than the non\-conformity scores used in CP, which are intractable for open\-ended generation\. To better align prediction confidence with the model's ignorance, we introduce a calibration strategy using representation geometry within the model to measure knowledge involvement in shaping the response\. Experiments demonstrate that we improve selective answering significantly with 75% conditional correctness\.

## A Dual\-Domain Vision Transformer with Spectral Positional Bias

**Authors:** Abdulaziz Al Shamsi; Abdulla Alghfeli; Chenghua Lin; Hujun Yin

**ID:** 151216 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c4AamFDDmb>) | [PDF](<https://openreview.net/pdf?id=c4AamFDDmb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151216>)

Positional encoding in Vision Transformers presents a recurring trade\-off: spatial relative\-position tables \(Swin\) carry thousands of parameters per block and require ad\-hoc interpolation to transfer across resolutions, while no\-bias designs leave the attention logits geometry\-agnostic\. We propose a relative positional bias parameterized directly in the frequency domain\. This parameterization yields three benefits over the standard spatial\-table position encoding: \(i\) it expresses the same translation\-equivariant bias with $3\.25\\times$ fewer parameters than Swin's spatial table at the same head count; \(ii\) it admits a closed\-form, structurally exact transfer to a different patch grid, in contrast to bilinear interpolation of spatial tables which smooths the learned structure; and \(iii\) it shares the same parameterization style as a frequency\-domain spectral mixer, enabling co\-design of positional encoding and token mixing in a common substrate\. We demonstrate the bias inside our \*\*Dual\-Domain Residual \(DDR\)\*\* framework, in which a spectral mixer and a gated attention head act as parallel residuals within each block\. Head\-to\-head, the frequency\-domain bias recovers $\+1\.98$ pp over Swin RelPos and $\+2\.74$ pp over no positional bias; removing the entire attention branch \(which carries the bias\) drops accuracy by $5\.35$ pp, while removing the spectral branch drops it by $2\.22$ pp\. On ImageNet\-1K from scratch, DDR outperforms SpectFormer at every comparable parameter budget, by $\+2\.0$ pp at Tiny \(DDR\-Ti\-SF, 10\.7M, 78\.9\\%\) and $\+0\.4$ pp at Base \(DDR\-B\-Deep, 63\.1M, 82\.5\\%\); at sub\-parity parameters, DDR\-Ti\+ \(8\.9M, 77\.9\\%\) exceeds SpectFormer\-Ti \(9\.0M, 76\.9\\%\) by $\+1\.0$ pp\. The learned per\-layer gates concentrate spectral processing in early blocks and attention in late blocks, qualitatively matching the schedules that are hand\-coded in the previous hybrid models\.

## Busemannformer: Horospherical Self\-Attention for Hyperbolic Graph Transformers

**Authors:** Youheng Yao; Ziyao Zeng; Wenbo Liao; Tianqi Wang

**ID:** 151890 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XAJBBFiTpE>) | [PDF](<https://openreview.net/pdf?id=XAJBBFiTpE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151890>)

Hyperbolic neural networks excel on hierarchical graph data, yet existing hyperbolic Transformers lift standard attention into curved space without using the ideal boundary, the structure most directly tied to tree hierarchy\. We propose \\textbf\{Horospherical Self\-Attention\} \(HSA\): each query selects an ideal\-boundary direction and scores keys by their Busemann depth along that direction, yielding a token\-to\-token hyperbolic attention kernel\. We prove flat\-limit consistency \(HSA recovers dot\-product attention as $K\\to 0^\-$\), characterise score level sets as horospheres, and bound key\-side gradients\. HSA is integrated into \\textbf\{Busemannformer\}, a full hyperbolic graph Transformer\. Busemannformer\-LD reaches \\textbf\{91\.78\\%\} F1 on Disease\-NC; in a controlled score ablation, its log\-depth Busemann score achieves the best Disease\-NC result among tested scores, reaching \\textbf\{93\.29\\%\} F1 and performance comparable to the current SOTA Hypformer result with a smaller training budget\. For link prediction, we find a score\-symmetry principle: Busemannformer\-LD with a symmetric score achieves \\textbf\{90\.71\\%\} AUC on PubMed\-LP \($\+$10\.3 pp over the asymmetric variant\), while the asymmetric score performs best on Disease\-LP among our variants and outperforms all Euclidean baselines\. Ablations identify log\-depth Busemann scoring as the key component and reveal a clear failure mode on Airport, where labels track centrality rather than tree depth\.

## Auditing Attention Head Masking for Out\-of\-Distribution Detection: Cross\-Architecture Wins, Failures, and Polarity Inversions

**Authors:** Vishnu Bindu Balachandran

**ID:** 139256 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bqTe5C6VVH>) | [PDF](<https://openreview.net/pdf?id=bqTe5C6VVH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139256>)

Post\-hoc scoring functions for out\-of\-distribution \(OOD\) detection in transformer models are typically validated on a single architecture and a single modality, leaving cross\-architecture behavior largely uncharted\. We report a cross\-modality empirical study of attention\-head\-masking\-based OOD detection across more than 1,200 AUROC measurements, spanning LayoutLMv3 on document classification, ViT\-B/16 on natural images, and RoBERTa\-base on text\. Each setting is evaluated against seventeen baselines under a uniform protocol with five fixed seeds, including the Attention Head Sensitivity Scoring \(AHSS\) and AHM\-augmented distance methods of Constantinou et al\. \(2024\) and the recent X\-Mahalanobis from NeurIPS 2025\. Paired statistical tests are run on every head\-to\-head claim\. Within the AHM family, mahAvgAvg\_AHM significantly beats X\-Mahalanobis on Tobacco\-Cross \(Wilcoxon $p=0\.031$\) and on RoBERTa SST\-2$\\to$20\-Newsgroups \($p=0\.031$\); on standard CIFAR vision benchmarks, X\-Mahalanobis remains state\-of\-the\-art\. Three architecture\-dependent phenomena surface that current evaluation practice tends to miss: Monte Carlo Dropout collapses to chance\-level AUROC across all four ViT settings tested; the AHSS displacement score inverts polarity on RoBERTa, yielding a mean AUROC of 0\.296 even though it functions on vision and document transformers; and on near\-OOD splits where ID and OOD share visual or semantic structure, every method including the strongest baselines degrades by 25 to 42 percentage points relative to standard OOD\. We release per\-seed measurements, AHM masks, and code to support replication\.

## Spectral Geometry of Attention: From Information Routing to Uncertainty

**Authors:** Giulio Viganò; Simone Melzi; Maks Ovsjanikov

**ID:** 152378 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TXNoJp3DRA>) | [PDF](<https://openreview.net/pdf?id=TXNoJp3DRA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152378>)

In this work, we study transformer attention through the lens of spectral geometry and operator theory\. We view each attention head as a functional map between Hilbert spaces of functions on the token sequence and derive a \\emph\{Token Difference Operator\}, whose spectral structure controls how token\-space information is routed to the output\. We show that standard Euclidean spectra are structurally biased by sinks, conflating mass concentration with genuine routing capacity\. By recasting token space in the intrinsic probability geometry induced by attention, the token difference spectrum disentangles sink effects from routing capacity and provides a spectral description of the dimensionality of the head output\. This yields a unified framework for analyzing attention maps, explaining sinks, routing collapse, and output dimensionality within a single operator\-theoretic framework\. In practice, by grounding attention heuristics in spectral geometry, we develop a novel uncertainty quantification method for LLMs that provides a theoretically sound alternative to traditional, probability\-based estimators, with the strongest gains on long\-form summarizations

## Benchmarking Attention for Tabular Foundation Models

**Authors:** Maximilian Schambach; Clemens Biehl; Sam Thelin

**ID:** 139839 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1MbSbrblLi>) | [PDF](<https://openreview.net/pdf?id=1MbSbrblLi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139839>)

Tabular in\-context learners such as TabPFN, Mitra, or ConTextTab rely on alternating row and column attention over 2D sequences of latent embeddings\. These attention patterns differ markedly from the one\-dimensional case in language models: row attention involves longer sequences while column attention operates on much shorter ones, and the strided memory layout of tabular data makes producing contiguous tensors costly\. Moreover, the hidden dimensions used in current models are small compared to recent language models\. Yet, efficient attention has been studied mostly for one\-dimensional sequences, leaving the two\-dimensional tabular setting unexplored\.  To this end, we create a reproducible benchmarking setup and study the unique characteristics of tabular attention across several backends – Torch SDPA \(efficient and cuDNN\), FlashAttention\-2/3/4, and the inference\-only backends vLLM and SageAttention – measuring forward and backward throughput across realistic tabular shapes on three GPU generations \(A100, H100, B200\)\. We find that the optimal backend choice differs between column and row attention and varies across hardware as well as model specifics: While the FlashAttention implementations tailored for each GPU generation perform overall best, they are at times outperformed by cuDNN in the case of column attention at longer sequences with cross\-over points depending on the head dimension\. Among inference\-only backends, SageAttention performs well for row attention and large sequences beyond 16k rows\. Our reproducible benchmark lays the foundation for future improvements to table\-native attention\. The self\-contained benchmarking and evaluation code is openly available at: https://github\.com/SAP\-samples/tabular\-attention\-benchmark

## Quantifying Concentration Phenomena of Mean\-Field Transformers in the Low\-Temperature Regime

**Authors:** Albert Alcalde; Leon Bungert; Konstantin Riedl; Tim Roith

**ID:** 149032 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tLcRuEazgY>) | [PDF](<https://openreview.net/pdf?id=tLcRuEazgY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149032>)

Transformers with self\-attention modules as their core components have become an integral architecture in modern large language and foundation models\. In this paper, we study the evolution of tokens in deep encoder\-only transformers at inference time which is described in the large\-token limit by a mean\-field continuity equation\. Leveraging ideas from the convergence analysis of interacting multi\-particle systems, with particles corresponding to tokens, we prove that the token distribution rapidly concentrates onto the push\-forward of the initial distribution under a projection map induced by the key, query, and value matrices, and remains metastable for moderate times\. Specifically, we show that the Wasserstein distance of the two distributions scales like $\\sqrt\{\\log\(\\beta\+1\)/\\beta\}\\exp\(C t\)\+\\exp\(\-ct\)$ in terms of the temperature parameter $\\beta^\{\-1\}\\to 0$ and inference time $t\\geq 0$\. For the proof, we establish Lyapunov\-type estimates for the zero\-temperature equation, identify its limit as $t\\to\\infty$, and employ a stability estimate in Wasserstein space together with a quantitative Laplace principle to couple the two equations\. Our result implies that for time scales of order $\\log\\beta$ the token distribution concentrates at the identified limiting distribution\. Numerical experiments confirm this and, beyond that, complement our theory by showing that for finite $\\beta$ and large $t$ the dynamics enter a different terminal phase, dominated by the spectrum of the value matrix\.

## Predictive Geometry of Hidden Trajectories in Transformers

**Authors:** Timur Mudarisov; Mikhail Burtsev; Tatiana Petrova; Radu State

**ID:** 155827 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2abHWd81WV>) | [PDF](<https://openreview.net/pdf?id=2abHWd81WV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155827>)

Decoder\-only transformers are trained only through a terminal next\-token prediction loss, yet this loss constrains every intermediate hidden state through the fixed downstream computation\. We formalize this constraint by studying layerwise loss\-to\-go functions: the terminal loss obtained by continuing a candidate hidden state through the remaining transformer blocks\. Around successful validation trajectories, we show that the local second\-order geometry of these functions is governed, up to low\-loss residual terms, by a pullback Fisher operator on hidden\-state space\. Its spectrum identifies output\-sensitive directions and approximately prediction\-null directions, yielding a local observable subspace of the residual stream\. For causal transformers, the same geometry induces a tokenwise curvature score: a Fisher\-weighted sensitivity of the target logits to perturbations of each token's hidden state\. This score vanishes outside the causal ancestor set of the target and is controlled by downstream Jacobian couplings, making it a loss\-aware alternative to attention magnitude\. We estimate these quantities using matrix\-free Jacobian\-vector and vector\-Jacobian products and evaluate them across decoder\-only language models on WikiText, OpenWebText, and FineWeb\. Empirically, the induced geometry predicts perturbation sensitivity, supports nonuniform layerwise rank allocation, yields competitive structured token\-pruning signals, and improves low\-rank student recovery when added to stronger autoregressive distillation objectives such as reverse KL and skew KL\. These results support a predictive\-geometric view of transformer computation: near successful trajectories, the terminal loss induces a thin, anisotropic set of output\-relevant hidden\-state directions that can be measured and exploited for compression and distillation\.

## Flow\-based Spectral Kernel Learning for Nonstationary Attention

**Authors:** Zi Yang; Ying Li; Alejandro Lancho; Dario C\. Larese; Pablo Olmos; Michael Minyi Zhang

**ID:** 151466 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aP71hsUN95>) | [PDF](<https://openreview.net/pdf?id=aP71hsUN95>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151466>)

Kernelized attention provides a useful perspective for understanding self\-attention as a similarity\-based aggregation mechanism, but existing approaches often rely on fixed or stationary kernels, limiting their ability to adapt the similarity structure to complex token interactions\. In this paper, we propose flow\-based spectral kernel attention \(FSKA\), a framework for learning expressive nonstationary attention kernels\. FSKA formulates kernelized attention through spectral density learning and parameterizes the resulting bivariate spectral density with normalizing flows\. This design enables flexible and regularizable kernel learning while remaining compatible with scalable linear\-attention computation\. We further show that expressive kernel learning enables a simplified attention design with removed query\-\-key projections and fixed orthogonal value projections, resulting in a more parameter\-efficient architecture\. Controlled experiments on classification, ablation, and scalability profiling show that FSKA achieves competitive or improved performance over existing attention mechanisms, while reducing projection\-related trainable parameters by approximately 40\\%\-\-47\\% compared with most baselines and maintaining favorable linear\-attention memory scaling\.

## Sparse Attention as Compact Kernel Regression

**Authors:** Saul Santos; Nuno Gonçalves; Daniel McNamee; Marcos Treviso; André Martins

**ID:** 148800 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v1sbV2aAVF>) | [PDF](<https://openreview.net/pdf?id=v1sbV2aAVF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148800>)

Recent work has revealed a link between self\-attention mechanisms in transformers and test\-time kernel regression via the Nadaraya\-Watson estimator, with standard softmax attention corresponding to a Gaussian kernel\. However, a kernel\-theoretic understanding of sparse attention mechanisms is currently missing\. In this paper, we establish a formal correspondence between sparse attention and compact \(bounded support\) kernels\. We show that normalized ReLU and sparsemax attention arise from Epanechnikov kernel regression under fixed and adaptive normalizations, respectively\. More generally, we demonstrate that widely used kernels in nonparametric density estimation\-\-\-including Epanechnikov, biweight, and triweight\-\-\-correspond to $\\alpha$\-entmax attention with $\\alpha = 1 \+ \\frac\{1\}\{n\}$ for $n \\in \\mathbb\{N\}$, while the softmax/Gaussian relationship emerges in the limit $n \\to \\infty$\. This unified perspective explains how sparsity naturally emerges from kernel design and provides principled alternatives to heuristic top\-$k$ attention and other associative memory mechanisms\. Experiments with a kernel\-regression\-based variant of transformers\-\-\-Memory Mosaics\-\-\-show that kernel\-based sparse attention achieves competitive performance on language modeling, in\-context learning, and length generalization tasks, offering a principled framework for designing attention mechanisms\.

## When Attention Collapses: Residual Evidence Modeling for Compositional Inference

**Authors:** Niklas Houba

**ID:** 150504 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hbOb7WNLD6>) | [PDF](<https://openreview.net/pdf?id=hbOb7WNLD6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150504>)

Compositional inference \- the decomposition of observations into an unknown number of latent components \- is central to perception and scientific data analysis\. Attention\-based models perform well when components are approximately separable, as in object\-centric vision\. Under additive superposition, however \- where multiple components contribute to every observation \- we identify a structural failure mode we term slot collapse: multiple slots converge to the same dominant component while weaker ones remain unrepresented\. We trace this to a general limitation: attention is memoryless with respect to explained evidence\. All slots repeatedly operate on the same input without accounting for what has already been explained, so gradients are dominated by the strongest component, inducing shared fixed points across slots\. As a result, attention fails to enforce non\-redundant allocation under additive superposition\. We address this by introducing residual evidence modeling, which tracks the remaining explanatory capacity of the input, instantiated via evidence depletion \- a minimal modification combining multiplicative depletion with an attention bias\. Controlled ablations show that parallel attention, sequential processing alone, and loss\-based regularization all fail to resolve collapse; evidence depletion, which adds stateful residual tracking to sequential attention, consistently succeeds\. Across synthetic benchmarks and real\-world audio mixtures \(FUSS\), evidence depletion reduces slot collapse by up to an order of magnitude, generalizing beyond synthetic settings\. On gravitational\-wave source inference for the ESA/NASA LISA mission, under identical architectures, data, and losses, standard attention fails while evidence depletion prevents collapse and enables multi\-source posterior estimation\. These results show that under additive superposition, residual evidence tracking is the operative ingredient \- preventing collapse and enabling compositional inference\.

## Fast and Stable Triangular Inversion for Delta\-Rule Linear Transformers

**Authors:** Aleksandros Sobczyk; Gioele Gottardo; Christos K Matzoros; Mirko De Vita; Filip Skogh; Anastasios Zouzias; Jiawei Zhuang

**ID:** 150772 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fU54rMdv6G>) | [PDF](<https://openreview.net/pdf?id=fU54rMdv6G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150772>)

Linear attention has emerged as a cornerstone for efficient long\-context architectures, as evidenced by its integration into state\-of\-the\-art open\-source models including Qwen3\.5/3\.6, Kimi Linear, and RWKV\-7\. Models that incorporate linear attention layers with the so\-called Delta\-Rule involve the inversion of triangular matrices as a core sub\-routine\. This operation often forms a performance bottleneck, and, due to its high\-sensitivity to numerical errors, it can significantly deteriorate end\-to\-end model accuracy if it is not carefully implemented\. This work provides a systematic analysis of both direct and iterative triangular inversion algorithms, targeting methods that are rich in matrix products, and, therefore, have the potential to efficiently utilize modern hardware\. To that end, our analysis covers a broad spectrum of mathematical and practical aspects, with a heavy focus on numerical stability, computational complexity, and, ultimately, hardware efficiency and practical considerations\. We provide a rigorous experimental evaluation to verify these properties in practical scenarios, and in low\-precision floating\-point representations, highlighting the strengths and limitations of each method\. Performance benchmarks on NPUs reveal up to $4\.3\\times$ speed\-up against the state\-of\-the\-art implementations of SGLang for triangular matrix inversion, leading to significant performance improvements on the entire layer level, while maintaining full end\-to\-end model accuracy\.

## Rethinking Attention in Depth for Operator Learning

**Authors:** Jaehyeon Lee; Kiwon Um; JungHyun Han; Min\-Koo Kang

**ID:** 150899 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ebPb7taENV>) | [PDF](<https://openreview.net/pdf?id=ebPb7taENV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150899>)

Transformers have rapidly emerged as powerful surrogate models for learning solution operators for partial differential equations \(PDEs\)\. Standard attention tends to exhibit depth\-wise representational bottlenecks across layers, with the role of depth remaining underexplored in modeling complex PDEs\. In this paper, we rethink the role of depth by promoting it to an explicit computational dimension of attention kernel construction, rather than a passive architectural parameter\. With this strategy, each attention block's native representation is enriched via a gated mixture of inter\-layer differences, enabling information to be coupled and propagated across layers\. The depth\-wise hierarchy admits a theoretically motivated multi\-kernel interpretation with weakly correlated kernels and improved generalization bounds\. Beyond dense feature aggregation, our approach yields a more expressive form of depth\-wise attention, mitigating spectral collapse, preserving interaction\-scale diversity, and improving intra\- and inter\-layer route utilization\. Extensive empirical evaluations demonstrate its broad compatibility across state\-of\-the\-art solvers, presenting consistent performance gains on eight PDE benchmarks\.

## SOLA: A Structured Operator Library for Attention in Pretrained Vision Transformers

**Authors:** Enzo Tartaglione; Vito Paolo Pastore

**ID:** 149135 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=satkentfHg>) | [PDF](<https://openreview.net/pdf?id=satkentfHg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149135>)

Vision Transformers dominate modern image benchmarks, however, what trained self\-attention computes head by head remains unclear: prior work either injects inductive biases at initialization or clusters attention patterns visually without committing to a closed\-form computation\. We ask whether the softmax$\(QK^\\top\)$ inside a trained head can be replaced, without further training, by a structured closed\-form operator while preserving prediction and the residual\-stream trajectory\.  We answer yes across ten ViTs and seven pretrainings \(ImageNet\-1k, ImageNet\-21k FT, MAE, DINO, DINOv2, CLIP, SigLIP\), and package the result as \\textbf\{SOLA\}: a Structured Operator Library for Attention with three entries, each gated by a per\-head diagnostic that upper bounds substitution error\. The entries are a fixed 2D convolution kernel for shift heads, a per\-image broadcast row for fixed\-target heads, and a per\-image rank\-$k$ SVD of the attention matrix for near\-global heads\. A rank\-adaptive extension picks $k$ per head from the SVD spectrum and extends structural coverage to every head on every backbone, with task\-fidelity controlled by a single spectral threshold $\\tau$ that trades compression for downstream fidelity\. The diagnostics carry over to cross\-attention: every decoder cross\-attention head in BLIP captioning has effective rank $\\approx 1$ and admits the broadcast substitution\. A minimal reproducer that runs the full SOLA pipeline on a single backbone is included in the Supp\. Mat\. as a demo; the full codebase will be released open\-source upon acceptance\.

## Attention\-based PCA

**Authors:** Rodrigo Maulen Soto; Claire Boyer

**ID:** 154448 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DTfQiEFRDM>) | [PDF](<https://openreview.net/pdf?id=DTfQiEFRDM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154448>)

We study attention mechanisms through the lens of a canonical unsupervised problem: principal component analysis \(PCA\)\. We show that, when trained on Gaussian data, both softmax and linear attention layers learn parameters that align with the principal eigenvectors of the covariance matrix, thereby establishing a direct and explicit connection with PCA\.  Our analysis covers both finite and infinite prompt regimes\. In the infinite\-prompt limit, we prove convergence to globally optimal solutions aligned with the leading spectral direction, while in the finite\-prompt setting we show that the same behavior emerges up to sampling effects\. We further extend the analysis to an in\-context setting with spiked Wishart covariances, where attention successfully recovers the underlying signal direction\.  These results demonstrate that attention inherently performs PCA\-like computations under unsupervised objectives, providing a theoretical foundation for its representation\-learning capabilities\.

## Necessary but Not Sufficient: Spectral Tests for Value\-Linear Attention Surrogates

**Authors:** Blaž Škrlj; Ivan Can Arisoy; Solal Vernier

**ID:** 153539 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Kb2fdi7Gqj>) | [PDF](<https://openreview.net/pdf?id=Kb2fdi7Gqj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153539>)

We give computable necessary conditions for replacing a fixed attention head by a value\-linear recurrent surrogate\. The semiseparable spectrum of the causal attention matrix lower\-bounds the operator\-norm error of any finite\-state value\-linear recurrence, and retrieval\-style blocks yield sharp K and Kd\_v state\-scaling laws\. Empirically, these lower bounds are tight on retrieval\-shaped targets but can be loose on smooth or clustered targets, where rank feasibility does not imply trainability or downstream quality\. Large pretrained\-head surveys suggest that this rank obstruction is often small, including in modern 1B, 7B, and 8B checkpoints\. The resulting diagnostic is best used as a rejection test for under\-sized recurrent state, not as a certificate that a recurrent replacement will train or improve downstream performance\.

## Attend Locally, Remember Linearly: Linear Attention as Cross\-Frame Memory for Autoregressive Video Diffusion

**Authors:** Kunyang Li; Mubarak Shah; Yuzhang Shang

**ID:** 154730 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BScHl5MZ8h>) | [PDF](<https://openreview.net/pdf?id=BScHl5MZ8h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154730>)

Autoregressive \(AR\) video diffusion is a powerful paradigm for streaming and interactive video generation\. However, its reliance on softmax self\-attention leads to quadratic compute complexity in sequence length and increasing memory usage due to key\-value caching, which fundamentally limits its scalability to long video horizons\. Existing remedies \(e\.g\., sparse attention and KV\-cache compression\) reduce per\-step cost but still rely on a linearly growing cache or irreversibly discard past context, and thus fail to simultaneously address linear memory growth and streaming context management\. To address this scalability bottleneck, we propose ARL$^2$ \(Attend Locally, Remember Linearly\), a hybrid attention module that replaces quadratic cross\-frame attention with a fixed\-size recurrent state\. Specifically, we decompose self\-attention into two branches: an intra\-frame softmax branch for spatial detail and local dependencies, and an inter\-frame gated recurrent linear branch that maintains a fixed\-size state for streaming context\. Our key insight is that softmax attention captures fine\-grained local interactions, while a recurrent state provides a controllable mechanism for long\-range memory\. This design achieves linear\-time scaling with constant memory while improving temporal consistency over the full\-softmax model\. To prevent noisy intermediate states from corrupting long\-range memory, we update the recurrent state only after the denoised pass\. To avoid within\-frame information asymmetry, all tokens share the same pre\-update state rather than sequential updates\. To the best of our knowledge, this is the first work to convert a pretrained AR video diffusion model into a hybrid linear attention architecture, through an efficient two\-stage training scheme adapted to the AR video setting\. With 75% of layers replaced by hybrid linear attention, the model achieves up to $2\.26\\times$ wall\-clock speedup and 54% memory reduction, while maintaining comparable quality with improving temporal consistency\.

## ViT\-AdaLA: Adapting Vision Transformers with Linear Attention

**Authors:** Yifan Li; David Seunghyun Yoon; Viet Lai; Franck Dernoncourt; Jason Kuen; Yu Kong; Trung Bui

**ID:** 155131 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8AaJPYGN1Z>) | [PDF](<https://openreview.net/pdf?id=8AaJPYGN1Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155131>)

Vision Transformers \(ViTs\) based vision foundation models \(VFMs\) have achieved remarkable performance across diverse vision tasks, but suffer from quadratic complexity that limits scalability to long sequences\. Existing linear attention approaches for ViTs are typically trained from scratch, requiring substantial computational resources, while linearization\-based methods developed for large language model decoders do not transfer well to ViTs\. To address these challenges, we propose ViT\-AdaLA, a novel framework for effectively adapting and transferring prior knowledge from VFMs to linear attention ViTs\. ViT\-AdaLA consists of three stages: attention alignment, feature alignment, and supervised fine\-tuning\. In the attention alignment stage, we align vanilla linear attention with the original softmax\-based attention in each block to approximate the behavior of softmax attention\. However, residual approximation errors inevitably accumulate across layers\. We mitigate this by fine\-tuning the linearized ViT to align its final\-layer features with a frozen softmax VFM teacher\. Finally, the adapted prior knowledge is transferred to downstream tasks through supervised fine\-tuning\. Extensive experiments on classification and segmentation tasks demonstrate the effectiveness and generality of ViT\-AdaLA over various state\-of\-the\-art linear attention counterpart\.

## Attention as In\-Context Empirical Bayes: A Two\-Stage View via Particle Dynamics

**Authors:** Matthew Smart; Soumya Ganguly; Nilava Metya; Alexandre V Morozov; Anirvan Sengupta

**ID:** 149497 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pgcuFj2z7T>) | [PDF](<https://openreview.net/pdf?id=pgcuFj2z7T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149497>)

We study minimal attention\-only transformers under all\-token corruption and show they admit a two\-stage empirical Bayes interpretation\. A single attention step computes a kernel\-weighted posterior mean with respect to the empirical distribution defined by the context\. Depth refines this distribution through particle dynamics \(Stage 1\), while a long\-range skip\-connection carries the noisy input as a query for posterior inference \(Stage 2\), revealing distinct statistical roles for depth and attention residuals\. The framework isolates a minimal setting in which the context itself induces a depth\-dependent energy landscape governing in\-context inference\. We show that effective denoising can emerge without an explicit noise schedule: a fixed kernel bandwidth and finite integration horizon suffice, yielding a principled depth–noise relationship\. We further establish a posterior\-mean recovery guarantee for a class of well\-behaved priors, where the empirical estimator converges to the Bayes\-optimal predictor under asymptotic conditions\. Connecting these dynamics to reverse\-diffusion limits, our results provide a statistical interpretation of attention as in\-context inference via sample\-based posterior estimation, without explicit density modeling\.

## The Cost of Absolute Position: A Spread\-Expressivity Tradeoff for Additive Positional Encodings

**Authors:** Noah Mitchell; Isaac Gabriel; Alexander Wyatt

**ID:** 151175 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cR4hyys307>) | [PDF](<https://openreview.net/pdf?id=cR4hyys307>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151175>)

Self\-attention without positional information is permutation equivariant, therefore positional encodings are required whenever a transformer must distinguish input order\. However, injecting absolute position can also weaken length generalization\. We formalize this tension for additive positional encodings by introducing positional spread, the total variance of the positional embedding matrix\. For additive PE in softmax attention with mean pooling, we prove an upper bound demonstrating that the equivariance breaking component of risk is controlled by $\\\|\\widetilde E\\\|\_F^2$, along with a matching lower bound for self\-separable additive PEs\. We finally prove a spread\-expressivity tradeoff: any additive PE that distinguishes absolute positions with minimum separation $\\delta$ must have spread $\\Omega\(\\delta^2 n\)$\.  The theory predicts two regimes: when the target is near permutation invariant, lower spread improves length extrapolation; when the task requires absolute position, additional spread reduction destroys expressivity\. We test this prediction using controlled synthetic tasks, spread\-regularized additive PE, and long context retrieval and reasoning tasks\. Across low positional sensitivity tasks, spread strongly predicts OOD accuracy; on absolute position tasks, performance demonstrates the predicted non\-monotone tradeoff\. For score\-based methods such as RoPE and ALiBi, we include a displacement based comparison rather than matching bounds, clarifying both the reach and limits of the spread theory\.

## DD\-CAM: Minimal Sufficient Explanations for Vision Models Using Delta Debugging

**Authors:** Krishna Khadka; Yu Lei; Raghu Kacker; D\. R Kuhn

**ID:** 151520 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a30XWAYlaJ>) | [PDF](<https://openreview.net/pdf?id=a30XWAYlaJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151520>)

Class Activation Mapping \(CAM\) and related saliency techniques are widely used to explain predictions of deep vision models, producing post\-hoc heatmaps that highlight image regions a model relied on\. However, existing CAM methods aggregate weighted contributions over the full set of internal units, including units whose contribution may be incidental\. The resulting heatmaps are often diffuse and obscure which units are actually sufficient to preserve the prediction\. We reframe visual explanation as the selection of a 1\-minimal sufficient subset of internal representational units, feature maps in CNNs and patch tokens in ViTs, whose joint activation preserves the model's prediction\. A subset is 1\-minimal sufficient if removing any single unit changes the prediction\. We propose \\textbf\{DD\-CAM\}, a gradient\-free procedure adapted from delta debugging in software engineering that instantiates this formulation\. DD\-CAM exploits classifier\-head structure with two regimes: iterated single\-unit removal for non\-interacting heads \(GAP\+FC\), and recursive partition\-and\-reduce for interacting heads \(multi\-layer FC stacks and ViT self\-attention\)\. On 2\{,\}000 ImageNet validation images across eight CNN and ViT architectures, DD\-CAM is the strongest method on 13 of 18 faithfulness metric\-group cells against thirteen baselines\. On the NIH ChestX\-ray14 bounding\-box set, DD\-CAM improves IoU by 45\\% and F1 by 22\\% over the strongest baseline while producing single\-region explanations\. These results suggest that necessity\-grounded internal\-unit selection can produce more focused and faithful explanations than weighted aggregation over all units, with particular promise for safety\-critical settings such as medical imaging\.

## ChanSFormer: A Channel Agnostic Vision Transformer for Multi\-Channel Cell Painting Images

**Authors:** Jingwei Zhang; Srinivasan Sivanandan; Dimitris Samaras

**ID:** 149597 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ov9pIIpqw4>) | [PDF](<https://openreview.net/pdf?id=ov9pIIpqw4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149597>)

High\-content multichannel imaging, from Cell Painting assays to remote sensing, is central to modern scientific pipelines\. Because these channels are highly heterogeneous and experimental configurations frequently evolve, a practical vision backbone must be fundamentally channel\-agnostic\. Current channel\-adaptive vision transformers rely on global self\-attention with learnable channel embeddings, which can be computed only for previously known channels\. Attempts to overcome this limitation of new channels either discard the embeddings, losing channel identity, or process each channel independently, thereby eliminating critical cross\-channel interactions\. To address this, we introduce ChanSFormer, an efficient Vision Transformer that replaces rigid embeddings with disentangled spatial\-channel attention and individual channel CLS tokens\. This architecture natively preserves both distinct channel identities and cross\-channel information flow\. Furthermore, the individual channel class token design unlocks more informative feature representations for self\-supervised learning and enables representation\-based channel sampling while remaining channel agnostic\. We evaluate ChanSFormer on two biology multi\-channel datasets, CHAMMI, JUMP\-CP and a satellite dataset, So2Sat\. Experimental results show that ChanSFormer outperforms state\-of\-the\-art methods by up to 4\.27% in classification accuracy\. It also demonstrates exceptional cross\-dataset transferability under a self\-supervised setting, outperforming previous methods by up to 2\.72% in accuracy in the same classification tasks\. Furthermore, the disentangled attention  reduces the quadratic complexity of channel $\\times$ spatial sequence length of the global attention baseline, thus improving throughput by 55%\-\-313%\.

## KVBuffer: IO\-aware Serving for Linear Attention

**Authors:** Longwei Zou; Lin Zhong

**ID:** 154931 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9sEutXZ2qj>) | [PDF](<https://openreview.net/pdf?id=9sEutXZ2qj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154931>)

Linear attention has recently gained significant attention for long\-context inference due to its constant decoding cost with respect to context length\.  However, existing serving systems typically serve linear attention by recurrently computing and updating a large linear attention state in every decoding step\. Since the state is much larger than the per\-token key and value, recurrent decoding incurs substantial memory access and becomes inefficient for serving linear attention\.  In this paper, we propose KVBuffer, an IO\-aware serving mechanism for linear attention\. By buffering recent keys and values, KVBuffer enables serving systems to compute linear attention outputs in more flexible and memory\-efficient ways\. For decoding, KVBuffer enables chunkwise computation, which reduces average memory access and decoding latency by deferring state updates and applying them in batch\. For speculative decoding, KVBuffer verifies draft tokens in parallel and avoids storing temporary states\. For short contexts, KVBuffer computes attention outputs directly from buffered keys and values, without creating or updating the linear attention state\.  We implement KVBuffer in SGLang for Qwen3\-Next\. Our evaluations show that KVBuffer can reduce linear attention decoding latency by up to 45\.17\\% and increase the maximum number of serving requests by $5 \\times$ for speculative decoding when verifying four draft tokens\.

## Ordinary Least Squares as an Attention Mechanism

**Authors:** Philippe Goulet Coulombe

**ID:** 153277 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MRyrIW18CW>) | [PDF](<https://openreview.net/pdf?id=MRyrIW18CW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153277>)

I show that ordinary least squares \(OLS\) predictions can be rewritten as a restricted attention module, akin to those at the heart of transformer architectures\. This connection emerges by reframing OLS as a similarity\-based prediction rule operating in a learned embedding space\. From this perspective, least squares does not estimate coefficients per se, but instead selects an embedding that minimizes squared prediction error by matching training and test vectors through inner products — mapping naturally onto the query\-key\-value structure of attention\. I then extend the framework to dimensionality reduction, nonlinearity, and connections to time series econometrics\. Monte Carlo simulations and real\-data experiments on UCI/OpenML benchmarks show that a direct implementation of nonlinear Attention Regression performs competitively against standard machine learning baselines\. In the other direction, within a transformer architecture for tabular data, an attention block can be replaced by an explicit regression on polynomial\-expanded features, matching or exceeding the standard transformer's predictive accuracy at a fraction of its parameter count\.

## Learnable Low\-Rank Polynomial Sketch for Effective Linear Attention

**Authors:** Zongyue Qin; Haoran Deng; Jason Cong; Yizhou Sun

**ID:** 149962 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lt4byo5Ohp>) | [PDF](<https://openreview.net/pdf?id=lt4byo5Ohp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149962>)

Softmax attention in Transformers suffers from quadratic complexity in sequence length, making it impractical for long\-context applications\. Linear attention alleviates this issue by replacing the exponential kernel with alternative functions that enable linear\-time computation\. Among existing linear attention approaches, recent studies have shown that polynomial kernels are particularly effective, as they exhibit sparse and spiky behavior similar to softmax attention, which emphasizes large dot products while suppressing irrelevant interactions\. However, the exact computation of high\-degree polynomial kernels is infeasible for high\-dimensional representations\. As a result, prior work relies on approximate polynomial kernels\. This introduces a non\-negligible approximation error\. In this paper, we show that, from the perspective of polynomial kernel approximation, existing linear attention methods are still suboptimal\. We propose Learnable Low\-Rank Polynomial Sketch \(LLoPS\), a principled and flexible framework for approximating polynomial kernels with linear attention\. Our method learns a low\-rank polynomial sketch that provably achieves a strictly smaller approximation error than existing approaches\. Experiment results show that LLoPS achieves the highest performance across extensive benchmarks, comparing with various linear attention baselines\.

## Long\-Context Language Models Require Extreme Sparsity in Context Dimension

**Authors:** Prithvi Dixit; Sahil Joshi; Agniva Chowdhury; Anshumali Shrivastava; Joseph Gonzalez; Ion Stoica; Kumar Krishna Agrawal; Aditya Desai

**ID:** 140121 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1Zx0QQnAfD>) | [PDF](<https://openreview.net/pdf?id=1Zx0QQnAfD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140121>)

Sparsity has long been a central theme in LLM efficiency but its role in context processing remains unresolved\. As LLM workloads shift toward longer contexts and agentic interactions, the compute and memory bottlenecks of attention become increasingly critical, raising the question of whether these constraints are fundamental\. Our position: this constraint is artificial, unnecessary and the future of LLM inference lies in extreme but principled sparsity along the context dimension\. Our position comes out of various bits of empirical and theoretical evidence\. Firstly, we find insistance on dense attention unreasonable since in long context a query essentially projects the O\(N\) attention information into hidden space of diemsion $d &lt;&lt; N$\. This, as we show is extremely lossy\. Instead, we propose a completely context\-sparse context processing combining top\-k sparsity with linear attention / SSMs as the way forward\. To support our proposal we show that this combination can approximately cover the functional space of dense softmax attention\. Independently but importantly, in a first elaborate study of its kind, we empirically show a strong trend towards current LLM models, which are not trained for context sparsity, being extremely robust to inference time decode\-sparsity across tasks of varying complexities such as retrieval, multi\-hop QA, and mathematical reasoning and agentic coding\. For instance, Qwen3\.5\-27B can tolerate upto 100x sparsity on benchmarks of RULER\-HARD, LOFT and AIME2025 without loss of quality, and upto $50\\times$ on SWE with a small drop in quality\. These results emphasize the possibility that we can transition to complete sparsity without any loss of capability\. Additionally, we also discuss what this shift in paradigm of context processing means for hardware\. Importantly, we show that even current hardware is equipped enough to realise gains from this sparsity\. For instance, our sparse decode kernels can accelerate large context processing by a factor 10x over FlashInfer at 50x sparsity levels on current hardware such as H100\. Overall, these results position extreme context sparsity not as a heuristic, but as a principled foundation for LLM inference, training, and architecture design, both feasible and beneficial, and a compelling direction for future systems\.

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

## Nearly Optimal Attention Coresets

**Authors:** Alexandr Andoni; Eldar Kleiner; Edo Liberty

**ID:** 149541 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pN0yZTJ2vs>) | [PDF](<https://openreview.net/pdf?id=pN0yZTJ2vs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149541>)

We consider the problem of estimating the Attention mechanism in small space, and prove the existence of coresets for it of nearly optimal size\.  Specifically, we show that for any set of unit\-norm keys and values $\(K,V\)$ in $R^d$,  there exists a subset $\(K',V'\)$ of size at most $O\(\{\\sqrt\{d\} e^\{\\zeta\+o\(\\zeta\)\}/\\epsilon\}\)$ such that  $$ \\left\\\| Attn\(q,K,V\)\- Attn\(q,K',V'\) \\right\\\| \\le \\epsilon $$ simultaneously for all queries whose norm is bounded by $\\zeta$\.  This outperforms the best known results for this problem\.  We also offer an improved lower bound showing that $\\epsilon$\-coresets must have size $\\Omega\(\{\\sqrt\{d\} e^\{\\zeta\}/\\epsilon\}\)$\.

## Robust Hopfield Decision Transformer

**Authors:** Andreia Podasca; Anup Das

**ID:** 155374 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=67TZXbgymj>) | [PDF](<https://openreview.net/pdf?id=67TZXbgymj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155374>)

Decision Transformer \(DT\) formulates offline reinforcement learning as conditional sequence modeling, predicting actions by attending over past states, actions, and returns\-to\-go\. However, the softmax attention in DT computes context representations in a single forward pass, offering no mechanism to recover from observations corrupted by sensor noise or measurement errors common in real\-world deployment\. Prior methods improve robustness of DT through training regularization or objective modifications, but leave the attention mechanism itself unchanged\. We introduce Robust Hopfield Decision Transformer \(RHDT\), which replaces softmax attention with modern Hopfield layers that iteratively minimize an energy function, enabling observations to converge toward learned patterns \(attractors\)\. To prevent pattern interference from overlapping attractor basins, we regularize the architecture through Lipschitz gradient penalty and orthogonality constraints on attention keys, which serve as the stored patterns\. On D4RL benchmarks, RHDT matches robust baselines in average return while significantly improving worst\-case performance under observation corruption\.

## Value\-Aware Stochastic KV Cache Eviction for Reasoning Models

**Authors:** Ting\-Yun Chang; Harvey Yiyun Fu; Deqing Fu; Chenghao Yang; Jesse Thomason; Robin Jia

**ID:** 152707 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=R0GnMD9bkE>) | [PDF](<https://openreview.net/pdf?id=R0GnMD9bkE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152707>)

Reasoning models improve accuracy through extended chains of thought, but their long outputs create a memory and compute bottleneck\. KV cache eviction methods reduce this cost by evicting unimportant key\-value pairs from the cache, yet they suffer larger accuracy degradation than selection\-based sparse attention alternatives, which keep the full KV cache\. We identify key factors crucial to KV cache eviction accuracy\. First, a small fraction of value states have abnormally large magnitudes, and evicting them causes catastrophic failure where models enter repetitive reasoning loops\. Second, introducing stochasticity during eviction improves accuracy by increasing cache diversity\. Based on these findings, we propose \*\*V\*\*alue\-\*\*a\*\*ware \*\*S\*\*tochastic KV Cache \*\*E\*\*viction \(VaSE\), a training\-free recipe that protects large\-magnitude value states and promotes diverse eviction decisions\. Across six reasoning tasks, Qwen3 models using VaSE with 4x KV cache compression achieve comparable or better average accuracies to the SOTA selection method under the same level of sparsity, while enabling a static memory footprint that selection methods cannot offer\. Our method also generalizes as a recipe, with its key factors improving strong eviction methods by 5 points on average\.

## Prompt–Activation Duality: Improving Activation Steering via Attention\-Level Interventions

**Authors:** Diancheng Kang; Zheyuan \(Frank\) Liu; Ningshan Ma; Yue Huang; Zhaoxuan Tan; Meng Jiang

**ID:** 154174 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Fi8p6Oc5Z5>) | [PDF](<https://openreview.net/pdf?id=Fi8p6Oc5Z5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154174>)

Activation steering controls language model behavior by adding directions to internal representations at inference time, but standard residual\-stream steering can fail in stateful dialogue\. We identify KV\-cache contamination as a key failure mode: steered token states are stored and repeatedly reused, turning a local perturbation into cumulative coherence degradation\. Motivated by the stability of prompt\-based control, we propose Gated Cropped Attention\-Delta steering \(GCAD\), which extracts steering signals from system\-prompt contributions to self\-attention and applies them with token\-level gating\. Across persona\-steering experiments, GCAD preserves trait control while substantially improving long\-horizon coherence\. On the main multi\-turn benchmark, GCAD improves average coherence drift from \-18\.6 to \-1\.9 and raises turn\-10 trait expression from 78\.0 to 93\.1\. These results suggest that activation steering becomes more reliable when interventions follow the prompt\-mediated pathways that models already use for behavioral control\.

## Attention Sinks and Outliers in Attention Residuals

**Authors:** Haozheng Luo; Haoran Dai; Shaoyang Zhang; Xi Chen; Eric Hanchen Jiang; Yijiang Li; Ching\-Yuen Huang; Chenghao Qiu; Chenwei Xu; Zhenyu Pan; Haotian Zhang; Binghui Wang; Yan Chen

**ID:** 148314 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yjVSLVS0Dh>) | [PDF](<https://openreview.net/pdf?id=yjVSLVS0Dh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148314>)

We propose OASIS, an outlier\- and sink\-aware technique built on inter\-layer null signaling\. As AttnResidual architectures introduce an additional depth\-wise normalization channel, they improve inter\-layer routing flexibility but also exacerbate attention sinks, activation outliers, and the resulting degradation in inference stability and quantization robustness\. OASIS addresses this issue by introducing a $\\mathop\{\\rm\{Softmax\}\}\_1$\-based null space and coupling token\-level null evidence to depth routing through an inter\-layer null signal, thereby reducing sink\-dominated routing and improving structural robustness\. Theoretically, we show that the dual\-normalization design of AttnResidual intensifies sink formation and quantization brittleness\. Experimentally, we compare OASIS against five baselines on three real\-world datasets and observe consistent improvements in both attention sink and post\-quantization performance\. Notably, OASIS achieves an average reduction of 9\.26\\% in maximum infinity norm and 2\.60\\% in average kurtosis across the evaluated settings, while lowering perplexity by 75\.85\\% under W8A8 and improving GSM8K Pass@1 by 12\.42\\% under W4A4\.

## Swimba: Switch Mamba Model Scales State Space Models

**Authors:** Zhixu Du; Krishna Teja Chitty\-Venkata; Murali Emani; Venkatram Vishwanath; Hai Li; Yiran Chen

**ID:** 150319 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=izlpFIy1uX>) | [PDF](<https://openreview.net/pdf?id=izlpFIy1uX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150319>)

Mixture\-of\-experts \(MoE\) is a common approach for increasing parameter capacity, but applying MoE to state space model \(SSM\) token mixers can multiply the cost of the recurrent state update\. We study how to introduce expert specialization into selective SSMs while preserving computational efficiency\. We show that MoE\-\-SSM can refer to two designs: \(1\) MoE over separated SSMs, which maintains multiple state trajectories and thus scales compute with the number of experts; and \(2\) MoE\-parameterized SSM, which mixes experts in parameter space, maintains a single state trajectory, and evaluates the recurrence once\. Our method, Switch Mamba \(Swimba\), follows the second design by routing over expert\-produced SSM streams\. Theoretically, we establish well\-definedness and stability for MoE\-parameterized SSMs and characterize the relationship between the two designs\. Empirically, we evaluate Swimba on standard benchmark tasks and measure real\-time throughput and latency\. Under matched FLOPs, Swimba achieves slightly better average performance than the baseline, with a small slowdown in real\-time latency and throughput\. Overall, these results suggest that parameter\-space MoE can increase SSM capacity while keeping the dominant recurrence cost fixed\.

## Sparse Attention as a Range Searching Problem: Towards an Inference\-Efficient Index for KV Cache

**Authors:** Mohsen Dehghankar; Abolfazl Asudeh

**ID:** 150458 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=htJoIGk2K0>) | [PDF](<https://openreview.net/pdf?id=htJoIGk2K0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150458>)

Sparse attention improves LLM inference efficiency by selecting a subset of key–value \(KV\) entries, but at the cost of potential accuracy degradation\. In particular, omitting critical KV entries can induce substantial errors in model outputs\. Existing methods typically operate under fixed or adaptive token budgets and provide empirical robustness or partial theoretical guarantees, yet they do not ensure zero false negatives across decoding steps, particularly since the set of relevant tokens is both query\- and step\-dependent\. Our empirical observations confirm that missing even one critical key can lead to sharp error spikes, especially in long\-output reasoning tasks where the set of important tokens varies throughout decoding\. This observation motivates the need for indexing methods that dynamically adapt to these variations across decoding steps while guaranteeing a full recall of the relevant keys above a certain threshold\. We address this challenge by reformulating sparse attention as the computational geometry problem of halfspace range searching\. However, existing range searching data structures are not suitable for modern LLM inference due to their computational and implementation overheads\. To overcome this, we introduce Louver, a novel index structure tailored for efficient KV cache retrieval\. Louver \(i\) guarantees zero false negatives with respect to a specified threshold in both theory and practice, \(ii\) is lightweight to integrate into existing LLM inference pipelines, and \(iii\) incorporates hardware\-aware optimizations for both CPU and GPU executions\. Our experiments demonstrate that Louver outperforms prior sparse attention methods in both accuracy and runtime, and is faster than highly optimized dense implementations such as FlashAttention\. These results highlight that recall guarantees are a critical and overlooked dimension of sparse attention, and open a new direction for building theoretically grounded, efficient KV cache indices\.

## Attention Is More Than You Need: Spectral Redundancy in Multi\-Head Routing

**Authors:** Charles Cao

**ID:** 155116 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8I6ozAPipF>) | [PDF](<https://openreview.net/pdf?id=8I6ozAPipF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155116>)

Recent direct\-sum hardness results show that computing multi\-head attention by evaluating each head independently is essentially optimal under standard complexity assumptions, but leave open whether the key\-value sharing in modern MQA and GQA architectures can circumvent this barrier\. We prove that it cannot: even one\-layer MQA with a single shared key\-value head requires one full quadratic routing computation per query head in the worst case\. To quantify how far practice departs from this worst case, we develop a calibration\-stacked spectral framework that measures the effective number of independent routing\-message directions in a layer, carefully separating signed, stochastic, and softmax\-realizable compression; we also prove tight error\-compounding bounds and NP\-hardness of the natural route\-merging compiler problem\. Empirically, across fourteen open\-weight GQA checkpoints from four model families \(0\.6B\-70B parameters\), eight shared routes capture over 90% of the routing\-message energy in every model, and larger models use a progressively smaller fraction of their theoretical routing capacity, revealing a substantial and widening gap between worst\-case hardness and the redundancy present in deployed transformers\.

