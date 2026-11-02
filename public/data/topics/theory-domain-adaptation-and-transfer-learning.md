# Theory / Domain Adaptation and Transfer Learning

理论 / 领域适应与迁移学习理论

9 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Pseudo\-Labeling for Unsupervised Domain Adaptation with Kernel GLMs

**Authors:** Nathan Weill; Kaizheng Wang

**ID:** 151774 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Y7TGuV7hZn>) | [PDF](<https://openreview.net/pdf?id=Y7TGuV7hZn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151774>)

We propose a principled framework for unsupervised domain adaptation under covariate shift in kernel Generalized Linear Models \(GLMs\), encompassing kernelized linear, logistic, and Poisson regression with ridge regularization\. Our goal is to minimize prediction error in the target domain by leveraging labeled source data and unlabeled target data, despite differences in covariate distributions\. We partition the labeled source data into two batches: one for training a family of candidate models, and the other for building an imputation model\. This imputation model generates pseudo\-labels for the target data, enabling robust model selection\. We establish non\-asymptotic excess\-risk bounds that characterize adaptation performance through an “effective labeled sample size,” explicitly accounting for the unknown covariate shift\. Experiments on synthetic and real datasets demonstrate consistent performance gains over source\-only and importance weighting baselines\.

## On the Limits of Latent Reuse in Diffusion Models

**Authors:** Yifeng Yu; Lu Yu

**ID:** 154956 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9eRD2Dppl5>) | [PDF](<https://openreview.net/pdf?id=9eRD2Dppl5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154956>)

Diffusion models are often trained in low\-dimensional latent spaces, which are then reused for related but shifted datasets\. In this work, we study when such latent reuse remains reliable under distribution shift\. We consider a source\-target setting in which both datasets are approximately low\-dimensional but may lie near different subspaces\. We show that freezing and reusing a source latent space induces a target\-domain score error governed by two quantities: the principal\-angle misalignment between the source and target subspaces, and the target ambient noise amplified by the diffusion time scale\. Motivated by these limits, we further study mixed source\-target training and characterize how the required shared latent dimension depends on the relative geometry of the two distributions\. Our results provide theoretical guidance on when latent reuse is reliable and when learning a shared representation may be necessary\.

## Entropy Minimization without Model Collapse: Mitigating Prediction Bias in Medical Imaging

**Authors:** Tim Nielen; Sameer Ambekar; Daniel Lang; Julia Schnabel

**ID:** 149828 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=n0LfI4MJNe>) | [PDF](<https://openreview.net/pdf?id=n0LfI4MJNe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149828>)

Entropy minimization \(EM\) is the dominant objective for test\-time adaptation, yet its failure mode, model collapse, remains poorly understood\. In this work, we show that distribution shifts can cause feature clusters corresponding to distinct classes in the model’s representation space to merge, while the decision boundary remains fixed\. This induces a systematic skew in the predicted class distribution, referred to as prediction bias\. Prediction bias refers to a shift in the predicted class distribution, with some classes overrepresented and others suppressed\. We show that entropy minimization amplifies this prediction bias by tightening the existing clusters, reinforcing the incorrect groupings until all predictions collapse to a trivial solution\. Next, to demonstrate the significance of prediction bias and mitigate it, we further propose Distribution Shift Bias Reduction \(DSBR\), a bias\-correcting objective that specifically targets this failure mode by equalizing the contribution of each predicted class to the unsupervised entropy minimization loss\. To study this failure mode, we design suitable adaptation settings using four medical‑imaging datasets and additionally evaluate on ImageNet‑C\. We find that DSBR consistently stabilizes test‑time adaptation, prevents model collapse, and matches or outperforms the state‑of‑the‑art methods\. Moreover, DSBR operates solely at test\-time\.

## Can Circuit Alignment Predict OOD Generalization?

**Authors:** Ayan Banerjee; ABHRA CHAUDHURI; Josep Llados; Umapada Pal; Anjan Dutta

**ID:** 155822 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2cBK6cvSiw>) | [PDF](<https://openreview.net/pdf?id=2cBK6cvSiw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155822>)

_Abstract unavailable from the accessible public sources._

## Langevin\-Informed Transfer Learning: Replacing the Target Samples by Black\-Box Feedback

**Authors:** Vladimir Kostic; Karim Lounici; Hélène Halconruy; Timothée Devergne; Michele Parrinello; Massimiliano Pontil

**ID:** 151211 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c9ETUr90Vp>) | [PDF](<https://openreview.net/pdf?id=c9ETUr90Vp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151211>)

_Abstract unavailable from the accessible public sources._

## A Theoretical Framework for Self\-Play Theorem Proving Algorithms

**Authors:** Thomas Chen; Zhiyuan Li

**ID:** 152957 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P7eFQwqLCj>) | [PDF](<https://openreview.net/pdf?id=P7eFQwqLCj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152957>)

Self\-play, a type of training algorithm that enables a model to self\-improve, has recently shown promising empirical results in the context of formal theorem proving using Large Language Models \(LLMs\)\. \(Dong &amp; Ma, 2025\) instantiate self\-play with two cooperating agents: a prover, which proves theorems, and a conjecturer, which generates new theorems as a curriculum to the prover\. In this paper, we provide a theoretical framework for understanding the self\-improvement capabilities of self\-play algorithms for theorem proving\. First, we formalize the set of theorems as a graph, with nodes as theorems and edges between pairs of theorems with similar semantics\. We introduce a set of primitive assumptions that characterize the guarantees of a trained prover and how a conjecturer can access the structure of the graph\. Second, we show that if the underlying graph of theorems is well\-connected, then a prover\-conjecturer system, where the conjecturing algorithm is based on a reversible random walk, is sufficient to grow the set of proved theorems exponentially\. Third, we formulate an issue of diversity encountered empirically by self\-play algorithms in our framework, where the conjecturer tends to generate artificially complex and non\-fundamental theorems\. We propose a diversity measure for a training distribution of theorems generated by a conjecturer and an improved conjecturing algorithm that locally maximizes this diversity measure, by computing the diffusion similarity between neighboring theorems in the theorem graph\. Finally, we describe a method to compute the diffusion similarity by first using contrastive learning to embed nodes into Euclidean space and second computing the inner\-product between the embeddings\.

## Tail Cues, Principal Corrections: Plug\-and\-Play Rectification for Open\-Set Test\-Time Adaptation

**Authors:** Yingkai Yang; Chaoqi Chen; Hui Huang

**ID:** 150867 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eldBzxFDbK>) | [PDF](<https://openreview.net/pdf?id=eldBzxFDbK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150867>)

Open\-Set Test\-Time Adaptation \(OSTTA\) operates on non\-stationary target streams where covariate and semantic shifts coexist\. Existing TTA methods often obtain adaptation signals by updating model parameters or maintaining mutable memories, which can be costly and vulnerable to unknown samples\. We present \*\*TALOR\*\*, a lightweight, backward\-free rectification module that uses the source linear head as a geometric anchor\. The head\-induced basis decomposes each normalized feature into high\-gain principal coordinates and low\-gain tail coordinates\. TALOR estimates a soft\-routed affine correction in the principal subspace, combining a \_regime\-level\_ principal bias with a tail\-conditioned slope that captures \_sample\-level\_ tail\-to\-principal coupling\. Using weighted ridge regression, it subtracts this drift estimate from the principal coordinates, reconstructs the feature and feeds it into the source head\. On the ImageNet\-C benchmark with six csOOD datasets, TALOR outperforms the next\-best UniEnt by \*\*2\.2%\*\* H\-score while running $\\mathbf\{2\.5\\times\}$ faster and using only \*\*12%\*\* of its GPU memory; as a post\-correction plug\-in, it further boosts COME to \*\*68\.4%\*\* H\-score with only \*\*2%\*\* additional memory overhead\.

## Entropy Minimization without Model Collapse: Mitigating Prediction Bias in Medical Imaging

**Authors:** Tim Nielen; Sameer Ambekar; Daniel Lang; Julia Schnabel

**ID:** 149828\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149828

[Paper](<https://openreview.net/forum?id=n0LfI4MJNe>) | [PDF](<https://openreview.net/pdf?id=n0LfI4MJNe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149828>)

Entropy minimization \(EM\) is the dominant objective for test\-time adaptation, yet its failure mode, model collapse, remains poorly understood\. In this work, we show that distribution shifts can cause feature clusters corresponding to distinct classes in the model’s representation space to merge, while the decision boundary remains fixed\. This induces a systematic skew in the predicted class distribution, referred to as prediction bias\. Prediction bias refers to a shift in the predicted class distribution, with some classes overrepresented and others suppressed\. We show that entropy minimization amplifies this prediction bias by tightening the existing clusters, reinforcing the incorrect groupings until all predictions collapse to a trivial solution\. Next, to demonstrate the significance of prediction bias and mitigate it, we further propose Distribution Shift Bias Reduction \(DSBR\), a bias\-correcting objective that specifically targets this failure mode by equalizing the contribution of each predicted class to the unsupervised entropy minimization loss\. To study this failure mode, we design suitable adaptation settings using four medical‑imaging datasets and additionally evaluate on ImageNet‑C\. We find that DSBR consistently stabilizes test‑time adaptation, prevents model collapse, and matches or outperforms the state‑of‑the‑art methods\. Moreover, DSBR operates solely at test\-time\.

## Can Circuit Alignment Predict OOD Generalization?

**Authors:** Ayan Banerjee; ABHRA CHAUDHURI; Josep Llados; Umapada Pal; Anjan Dutta

**ID:** 155822\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155822

[Paper](<https://openreview.net/forum?id=2cBK6cvSiw>) | [PDF](<https://openreview.net/pdf?id=2cBK6cvSiw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155822>)

_Abstract unavailable from the accessible public sources._

