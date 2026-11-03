# Computer Vision / Classification and Understanding

计算机视觉 / 图像分类与理解

102 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## BasicLT: Basic\-Level Abstraction and Selective Differentiation for Long\-Tailed Recognition

**Authors:** Yuan Dong; Di Wu; Zhe Zhao; Liheng Yu; Xiaofeng Cao; Pengkun Wang; Yang Wang

**ID:** 150159 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kDIQv2X2Ly>) | [PDF](<https://openreview.net/pdf?id=kDIQv2X2Ly>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150159>)

Long\-tailed recognition is commonly formulated as a problem of imbalanced supervision, where rare classes suffer from insufficient training examples\. In this work, we study a complementary source of difficulty: under severe scarcity, tail classes may be forced into fine\-grained discrimination before the model has acquired sufficiently reliable coarse semantic structure\. We refer to this phenomenon as granularity mismatch under scarcity\. To address it, we propose BasicLT, a two\-stage framework that augments an underlying fine\-grained recognition model with basic\-level abstraction and commitment\-guided selective differentiation\. In Stage 1, BasicLT learns an explicit basic\-level branch and aligns it with the family\-level distribution induced by the fine\-grained predictor, encouraging stable coarse semantic organization before additional fine\-grained refinement is introduced\. In Stage 2, a frozen Stage 1 teacher provides stable family\-level commitment signals, and a family\-conditioned residual refinement module is trained only on committed medium\-shot and few\-shot samples\. At inference time, the residual correction is activated conservatively according to student\-side commitment, so that fine\-grained refinement acts as a conditional within\-family correction rather than an unconditional auxiliary classifier\. We evaluate BasicLT on CIFAR\-100\-LT, CIFAR\-10\-LT, ImageNet\-LT, iNaturalist 2018, and Places\-LT\. Across these benchmarks, BasicLT achieves competitive performance against strong long\-tailed baselines, with the most consistent gains appearing in medium\-shot and few\-shot regimes\. Ablations and analyses further show that both basic\-level abstraction and commitment\-guided selective refinement are important, supporting the view that controlling the semantic granularity of discrimination can complement conventional rebalancing strategies for long\-tailed learning\. Code is available at Supplement\.

## U\-MOF: Uncertainty\-Guided Parameter\-Efficient Multi\-Objective Fine\-Tuning for Long\-Tailed Recognition

**Authors:** Yuan Dong; Di Wu; Zhe Zhao; Liheng Yu; Xiaofeng Cao; Pengkun Wang; Yang Wang

**ID:** 150452 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hwDAQJu6Fl>) | [PDF](<https://openreview.net/pdf?id=hwDAQJu6Fl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150452>)

Recent long\-tailed recognition methods increasingly adopt two\-stage fine\-tuning, where a generic representation is first learned and imbalance\-aware adaptation is then performed in a lightweight second stage\. However, existing second\-stage designs often allocate objective emphasis using delayed empirical summaries, such as historical class\-wise performance or validation feedback, and commonly restrict adaptation to classifier heads\. These choices may make routing unreliable when empirical feedback is noisy or skewed, and may also limit the feature plasticity required for rare categories\. In this paper, we propose U\-MOF, an uncertainty\-guided parameter\-efficient multi\-objective fine\-tuning framework for long\-tailed recognition\. U\-MOF introduces lightweight residual adapters into a shared\-backbone expert committee, uses entropy\-based committee statistics as diagnostic routing proxies to modulate tail\-oriented and smoothing\-oriented objectives, and applies conflict\-aware orthogonal projection to coordinate heterogeneous objective gradients\. Experiments on CIFAR\-100\-LT, ImageNet\-LT, and iNaturalist 2018 show that U\-MOF improves rare\-category and overall performance in controlled stage\-two comparisons and remains competitive with strong published long\-tailed recognition baselines, while preserving the efficiency advantages of decoupled adaptation\. These results indicate that reliable stage\-two long\-tailed fine\-tuning benefits not only from selecting appropriate objectives, but also from diagnosing when each objective should dominate and from retaining limited feature\-level plasticity\. An anonymized implementation is included in the Supplementary Material\.

## TailCon: Mitigating Tail Signal Erosion through Memory Consolidation for Long\-Tailed Recognition

**Authors:** Yuan Dong; Di Wu; Zhe Zhao; Liheng Yu; Xiaofeng Cao; Pengkun Wang; Yang Wang

**ID:** 155753 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3CZgBtaFyo>) | [PDF](<https://openreview.net/pdf?id=3CZgBtaFyo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155753>)

Long\-tailed recognition remains challenging not only because rare classes provide limited supervision, but also because their evidence is difficult to accumulate during standard stochastic training\. We characterize this failure as tail signal erosion: in conflict\-dominant regimes, frequent\-class updates can dilute sparse rare\-class signals before they are sufficiently reinforced\. To address this issue, we propose TailCon, a memory consolidation framework that separates rare\-evidence acquisition from parametric integration\. During online acquisition, TailCon stores uncertain or rare representations in detached episodic memory, while a parametric prediction pathway learns global decision structure\. To avoid relying only on test\-time retrieval, TailCon introduces FOCUS, a periodic consolidation stage that distills stored memory evidence into the parametric prediction head through a low\-capacity alignment surrogate\. We provide a local optimization analysis that scopes when this separation is beneficial in sparse\-recurrence, conflict\-dominant regimes\. Experiments on CIFAR\-100\-LT, CIFAR\-10\-LT, ImageNet\-LT, and iNaturalist 2018 show consistent improvements over representative rebalancing, decoupled, expert\-based, and prototype\-oriented baselines under the evaluated protocols\. Memory\-disabled inference further shows that part of the stored evidence is transferred into the parametric prediction head rather than remaining only in the retrieval branch\. An anonymized implementation is included in the Supplementary Material\.

## Target\-Aware Nuisance Shaping for Object Detection

**Authors:** Tianyi Xu; Yi Niu; Xinkun Wang; Yanbiao Ma; Mingming Ma; QingYu Luo; Fu Zou; Fu Li

**ID:** 152465 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=StCJMk2C8F>) | [PDF](<https://openreview.net/pdf?id=StCJMk2C8F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152465>)

Object detectors are expected to recognize objects independently of intrinsic object\-level attributes, such as scale and local visibility\. Yet, natural detection datasets contain systematic intrinsic attribute biases, and modern detectors inevitably entangle these biases within their learned representation geometry, leading to non\-uniform performance across the continuous attribute spectrum\. This observation exposes a central limitation of conventional data augmentation: while attribute\-blind transformations enlarge the training distribution, they fail to explicitly correct the dataset\-inherent nuisance structure\. To address this, we propose Target\-Aware Nuisance Shaping\} \(TANS, a unified framework that re\-purposes data augmentation as an object\-conditioned vicinal distribution design\. TANS processes training samples through a serial pipeline of two fundamental operators: first, Scale Prior Shaping \(SPS\) geometrically transports object scales toward low\-density regions of the natural scale distribution via class\-conditional log\-area priors; subsequently, Local Visibility Shaping \(LVS\) photometrically modulates local foreground\-background contrast by constructing smooth, box\-conditioned Gaussian fields, strictly preserving the newly established geometry and labels\. Furthermore, a feature\-state controller monitors the evolving representation geometry to adaptively adjust the shaping strength during training\. Extensive experiments on MS COCO and Pascal VOC demonstrate that TANS significantly improves detection performance over strong augmentation baselines across modern architectures\. Specifically, on COCO with YOLOv11, TANS achieves a 3\.6 mAP gain over the Mosaic baseline\. Beyond aggregate accuracy, our attribute\-regime analyses, feature\-state dynamics, schedule comparisons, and logit\-space probes consistently indicate that TANS effectively decouples the detector from intrinsic dataset biases, establishing target\-aware shaping as a rigorous paradigm for learning attribute\-invariant representations\.

## Muon Does Not Converge on Convex Lipschitz Functions

**Authors:** Tetiana Parshakova; Ahmed Khaled; Michael Crawshaw; Guillaume Garrigos; Robert Gower

**ID:** 155248 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=78YklG22EU>) | [PDF](<https://openreview.net/pdf?id=78YklG22EU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155248>)

Muon and its variants have shown strong empirical performance in a variety of deep learning tasks\. Existing convergence analyses of Muon rely on smoothness assumptions, though arguably the most successful function class for developing deep learning methods \(such as AdaGrad, Shampoo, Schedule\-Free and more\) has been the class of convex and Lipschitz functions\. In this paper we question whether the classical convex Lipschitz model is a useful one for understanding Muon\. Our answer is no\. We show that Muon does not converge on the class of convex and Lipschitz functions, regardless of the choice of learning rate schedule\. We also show that error feedback restores convergence of Muon and all the non\-Euclidean subgradient methods with momentum\. However, this theoretical fix using error feedback degrades the performance of Muon in two representative settings for image classification \(CIFAR\-10\) and language modeling \(nanoGPT on FineWeb\-Edu 10B\)\. Our conclusion is that convex Lipschitz theory, despite having a prominent role in the design of practical methods for deep learning, is not the most suited one for Muon\. This suggests that Muon's success must come from structure absent from this model, most plausibly related to smoothness\.

## Feature Recovery for Object Understanding Under Physical Transformation

**Authors:** Aditi Tiwari; Sofia Stoica; Savya Khosla; David Forsyth; Heng Ji

**ID:** 151094 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d1FI4Z8ezj>) | [PDF](<https://openreview.net/pdf?id=d1FI4Z8ezj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151094>)

Objects in post\-fire environments often undergo irreversible physical transformations that change their geometry, material state, and visual appearance\. Detecting and identifying these remnants is important for locating hazards, reconstructing pre\-incident contents, and inventorying losses\. Unlike standard image corruptions, fire damage changes the physical structure of the object itself\. To study this setting, we introduce TRACE, a transformation\-aware benchmark for post\-fire object understanding\. TRACE contains 21\.4K real\-image\-grounded synthetic scenes and paired object\-level pristine\-to\-degraded progressions spanning 499 object identities across 189 categories\. We define five tasks that evaluate both localization and pre\-degradation understanding: degraded\-object detection, pristine\-state recovery and retrieval, original material recovery, pristine description generation, and functional reasoning\. Existing models degrade sharply as fire damage becomes more severe\. From the least to the most severe degradation level, RF\-DETR mAP decreases by 71% relative, while InternVL3\.5 retrieval Recall@1 drops from 93\.85 to 28\.11\. To address this, we propose the Feature Restoration Module, or FRM, a lightweight plug\-and\-play module that maps degraded encoder features toward pristine\-aligned representations while keeping the host model frozen\. FRM is trained only with paired feature supervision and improves scene\-level detection, CLIP/SigLIP2 feature recovery, and all four object\-level VLM tasks\. Its gains are larger under more severe degradation\. Across VLM hosts and severity levels, FRM improves retrieval by 12\.5% on average, material recovery by 20\.1%, description generation by 13\.2%, and functional reasoning by 12\.4%\.

## HAPACT: A Benchmark For Human\-Centric Physical Impact Localization in Movies

**Authors:** Youngrae Kim; Yejin Jang; Eunho Kim; Youjin Sung; Kun\-Woo Song; Sangpil Kim; Sang Ho Yoon

**ID:** 139113 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kITf6rZTL7>) | [PDF](<https://openreview.net/pdf?id=kITf6rZTL7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139113>)

Physical reasoning about humans in videos has largely focused on everyday interactions, where contact, pressure, pose, and motion support embodied perception and contact\-aware applications\. Still, short and forceful properties like impact events remain relatively underexplored, despite their relevance to broader understanding of how abrupt physical events affect the human body\. To fill this gap, we introduce human\-centric impact localization, a new task that localizes target physical impacts temporally within a video and spatially on the human body\. We further present HAPACT, a HumAn\-centric imPACT dataset and benchmark built from movie clips, containing over 2\.8K video\-query pairs with more than 20K fine\-grained human\-annotated frames\. We built HAPACT around viewer\-grounded annotation, text\-conditioned localization, and supervision at frame\-level temporal and SMPL\-X\-based spatial granularity\. To demonstrate the effectiveness of our benchmark, we conduct extensive evaluations of existing methods, employing video moment retrieval models for temporal localization and human\-scene contact models for spatial localization\. For the spatial task, we propose a text\-conditioned baseline by reformulating localization as query\-guided body\-region selection\. Benchmark results show that physical impact localization remains challenging for existing methods, motivating HAPACT as a dedicated benchmark to support physical impact reasoning in videos\.

## VideoSleuth: A Narrative\-Centric Agentic System with Video\-Audio Native MLLM for Long\-Form Video Understanding

**Authors:** Conglin Li; Yang Li; Qi Zhang; Guanhua Chen; Yun Chen; Weifeng Ge

**ID:** 149002 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tZ1fHngtVB>) | [PDF](<https://openreview.net/pdf?id=tZ1fHngtVB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149002>)

Long\-form video understanding \(LVU\) requires models to reason over hour\-long narratives while preserving fine\-grained spatiotemporal details across extended temporal horizons\. Although recent multimodal large language models \(MLLMs\) have achieved strong performance on short\-video tasks, their reasoning capabilities degrade substantially as video duration and information density increase\. We present VideoSleuth, a narrative\-centric agentic framework for LVU built on video\- and audio\-native MLLMs\. VideoSleuth organizes its memory around the four narrative elements\-time, place, person, and event\-and equips the agent with tools explicitly designed to construct and query these elements within a ReAct\-style reasoning loop\. Unlike prior LVU agents that rely on dense offline preprocessing or image\-only VLMs, VideoSleuth performs perception on demand using a video\-audio native perceptual backbone, jointly leveraging visual and auditory cues to support dialogue\-based identity grounding, long\-range event localization, and fine\-grained evidence retrieval\. On four standard LVU benchmarks, VideoSleuth consistently outperforms prior on\-demand grounding agents and achieves competitive accuracy with the strongest dense\-preprocessing baseline, while consuming at least $5\.2\\times$ fewer end\-to\-end tokens than DVD\-style pipelines spend on offline preprocessing alone\.

## iDETR: Implicit DETR for Tiny Object Detection

**Authors:** Lingcong Cai; Haiqin Yang; Jikui Liu; Yunpeng Cai; Yumeng Liu; Xiaomao Fan

**ID:** 151442 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=afWSKToToO>) | [PDF](<https://openreview.net/pdf?id=afWSKToToO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151442>)

Tiny object detection \(TOD\) remains challenging due to the extremely limited spatial details of small objects\. Existing methods heavily rely on multi\-scale feature pyramids with discrete feature maps, which suffer from insufficient spatial resolution, quantization errors, and poor localization accuracy, while imposing heavy computational and memory overhead\.  We present the implicit DEtection TRansformer \(iDETR\), an efficient detector that operates exclusively on low\-resolution single\-scale features\.  It incorporates two novel components: \(1\) implicit Attention \(iAttn\), which leverages implicit neural representations to model continuous features and enables precise sub\-pixel querying beyond discrete grid limitations; and \(2\) Centroid\-Guided Query Initialization \(CGQI\) for robust query initialization under single\-scale constraints\. We further propose head\-conditional sampling in iAttn, which reduces querying computational cost by 4× and memory footprint by 3× without sacrificing performance\.  Extensive experiments demonstrate the effectiveness of iDETR\.  Especially, on AI\-TODv2, iDETR outperforms state\-of\-the\-art methods by 0\.2% AP overall, with particularly strong gains of 1\.1% AP on very tiny objects, while reducing computational cost by 37%\. The code is available at https://anonymous\.4open\.science/r/iDETR\-FC25/\.

## When Do Cosine Prototypes Mislead? A Whitening\-Aware Benchmark for Frozen\-Feature Image Classification

**Authors:** Jian Ding; Su Yang

**ID:** 139731 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7nyfFNceM0>) | [PDF](<https://openreview.net/pdf?id=7nyfFNceM0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139731>)

Cosine nearest\-class\-mean \(NCM\) evaluation is a widely used default for closed\-set frozen\-feature image classification because it is deterministic, train\-free, and easy to reproduce\. This convenience hides a metric assumption: raw angular geometry alone suffices for benchmark conclusions\. We show that the assumption changes model\-selection outcomes, not just absolute accuracies: across nine datasets and six frozen backbones, cosine\-only reporting changes which backbone ranks first on 2 of 9 datasets and incurs 6\.71 percentage points of regret relative to a best\-evaluator oracle; on fixed  DINOv2\-B features, the underlying cosine\-to\-LDA gap reaches 37\.63 points on Aircraft\. Motivated by the low\-variance spectral directions where class\-discriminative signal often appears in such high\-gap cases, we call this evaluator dependence the Spectral Decision Gap \(SDG\)\. SDG quantifies the gap between raw cosine and train\-validated whitening\-aware reference evaluators, flagging when cosine\-only reporting changes benchmark conclusions\. A leave\-one\-dataset predictive protocol reaches Pearson $r=0\.752$ for best\-whitening disagreement and incurs only 0\.56pp routing regret at a 5pp threshold\. This paper provides a compact audit protocol and artifact suite for detecting, predicting, and reporting when cosine prototype conclusions are reliable in this setting\. Code and artifacts are available anonymously at https://anonymous\.4open\.science/r/sdg\-ed/\.

## Deep Probabilistic Supervision for Image Classification

**Authors:** Anton Adelöw; Matteo Gamba; Atsuto Maki

**ID:** 148229 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zQY7TOySRe>) | [PDF](<https://openreview.net/pdf?id=zQY7TOySRe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148229>)

Supervised training of deep neural networks for classification typically relies on hard targets, which promote overconfidence and can limit calibration, generalization, and robustness\. Self\-distillation methods aim to mitigate this by leveraging inter\-class and sample\-specific information present in the model’s own predictions, but often remain dependent on hard targets without explicitly modeling predictive uncertainty\. With this in mind, we propose Deep Probabilistic Supervision \(DPS\), a principled learning framework that constructs sample\-specific target distributions via Bayesian inference on the model’s own predictions and remains independent of hard targets after initialization\. We show that DPS consistently yields higher test accuracy \(e\.g\., \+2\.0\\% for DenseNet\-264 on ImageNet\) and significantly lower Expected Calibration Error \(ECE\) \(\-40\\% for ResNet\-50 on CIFAR\-100\) than existing self\-distillation methods\. When combined with a contrastive loss, DPS achieves state\-of\-the\-art robustness under label noise\.

## DetectViT: Test\-time Backdoor Detection for Vision Transformers via Inter\-Head Attention Discrepancy

**Authors:** Siquan Huang; Yijiang Li; Xingfu Yan; Ningzhi Gao; Leyu Shi; Ying Gao

**ID:** 151934 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WjAq71jgrz>) | [PDF](<https://openreview.net/pdf?id=WjAq71jgrz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151934>)

Vision Transformers \(ViTs\) have been widely adopted as visual encoders in multimodal models; however, the reliance on third\-party pretrained checkpoints exposes these systems to backdoor attacks\. Existing test\-time detection methods rely on either the predicted label or intermediate embeddings, limiting their applicability across diverse tasks and incurring substantial computational overhead\.   In this work, we investigate how backdoor triggers affect the multi\-head attention mechanism of ViTs and identify two distinct anomalous patterns: $\\textit\{complete attention hijacking\}$, causing the attention to exhibit abnormally high inter\-head spatial overlap, and $\\textit\{partial attention hijacking\}$, causing an abnormally large variance in the concentration of the attention distribution\. Motivated by these findings, we propose $\\textbf\{DetectViT\}$, a test\-time backdoor detection method that requires neither training data, model outputs, nor any prior knowledge of the trigger\. DetectViT quantifies the two hijacking phenomena via an inter\-head consistency score and an inter\-head entropy variance score, with thresholds estimated from a small out\-of\-distribution \(OOD\) calibration set drawn from any source\. Extensive experiments on four representative attacks, spanning diverse architectures \(DeiT, CLIP, LLaVA\) and downstream tasks \(image classification and captioning\), demonstrate that DetectViT substantially outperforms all baselines with as few as 64\-\-128 OOD calibration samples, attaining a true positive rate of $100\\%$ and a false positive rate of $0\.17\\%$ on BadCLIP\. Notably, it introduces negligible additional overhead, thanks to its reliance solely on attention weights already computed during inference\. We release our code at: https://anonymous\.4open\.science/r/DetectViT\-81AC\.

## RadarMAE: Injecting Physical Inductive Biases into Masked Autoencoders for Advanced Radar Object Detection

**Authors:** EunChan Kim; Jeongwan Shin; Jae\-Ho Choi

**ID:** 152074 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VekzozkJua>) | [PDF](<https://openreview.net/pdf?id=VekzozkJua>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152074>)

Masked Autoencoders \(MAE\) have emerged as a powerful self\-supervised paradigm in vision, yet their direct application to radar perception remains bottlenecked by a fundamental domain gap\. Specifically, while conventional MAEs are optimized for RGB images using isotropic grid patching and standard mean squared error \(MSE\) loss, radar range\-azimuth \(RA\) heatmaps exhibit sinc\-oriented anisotropic spatial structures as well as complex physical artifacts, such as heavy\-tailed multipath interference and sidelobe spikes\. In this paper, we propose RadarMAE, the first radar\-centric MAE tailored specifically to the physical properties of radar signals\. We present an axial tokenization strategy that preserves the resolution disparities and continuous sinc\-shaped lobes of RA maps\. Furthermore, considering that the range and azimuth dimensions exhibit distinct physical artifacts, we decouple their reconstruction objectives by introducing a multipath distribution loss along the range axis to capture heavy\-tailed multipath reflections as well as a sidelobe distribution loss along the azimuth axis to learn deterministic sidelobe spikes\. Our extensive experiments demonstrate that injecting these domain\-specific physical priors enables robust representation learning for radar object detection\. Notably, our method achieves a state\-of\-the\-art 64\.17% bird's\-eye\-view \(BEV\) AP on the K\-Radar dataset using only a single\-frame RA map setting, significantly outperforming the previous baselines\.

## Training\-Free Open World Object Detection

**Authors:** Junwoo Heo; Chang\-Sik Woo; Gyeong\-Moon Park

**ID:** 153266 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MXj7wF9civ>) | [PDF](<https://openreview.net/pdf?id=MXj7wF9civ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153266>)

Open World Object Detection \(OWOD\) requires a detector to recognize known categories, detect unknown objects, and incrementally learn new classes\. Recent work such as OW\-OVD adapts a pre\-trained Vision\-Language Object Detector \(VLOD\) to OWOD through fine\-tuning\. However, this approach demands costly backpropagation and often degrades the detector's own zero\-shot performance on known categories, calling into question whether training is necessary\. In this paper, we propose CAVE \(Clustering in Attribute\-Visual Embedding space\), a training\-free framework that adapts a VLOD to OWOD without any parameter updates\. From a single forward pass, CAVE collects per\-class visual and attribute statistics via von Mises\-Fisher\-based clustering, along with attribute co\-occurrence patterns, without any gradient computation\. At inference, CAVE fuses the original VLOD's text\-based scores with MAS \(Mixture\-Aggregate Score\) derived from the collected statistics for known\-class detection, while unknown objects are identified by AOS \(Attribute Objectness Score\) that combines superclass responses with attribute co\-occurrence patterns\. Experiments on M\-OWODB show that CAVE outperforms OW\-OVD by \+16\.2 known\-class mAP \(Task 4\) and \+28\.0 average unknown recall, while surpassing the zero\-shot VLOD across all incremental tasks\.

## MemTailor: Hierarchical Memory\-Augmented Multi\-Expert Learning for Long\-Tailed Recognition

**Authors:** Yuyang Sun; Senyang Su; Xiaotian Wang; Pengkun Wang; Yang Wang

**ID:** 153342 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M3ibqP4C54>) | [PDF](<https://openreview.net/pdf?id=M3ibqP4C54>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153342>)

Long\-tailed visual recognition is limited not only by biased optimization, but also by the under\-retention of rare\-class evidence in parameters learned from imbalanced data\. MemTailor addresses this limitation by augmenting a frequency\-aware multi\-expert backbone with a hierarchical class\-aware memory that preserves visual evidence outside the backbone\. The memory stores per\-class prototypes and bounded instance slots for each expert, allocates proportionally richer capacity to rare classes, and records both shallow and deep features to retain complementary discriminative cues\. During training, same\-class memory retrieval constructs class\-adaptive feature augmentation and provides an auxiliary supervised objective on the augmented features\. At inference, class\-level memory quality and prediction uncertainty determine when stored evidence is allowed to correct expert logits, and the final prediction fuses memory\-corrected logits across multiple input scales\. Experiments on long\-tailed visual recognition benchmarks show that MemTailor improves balanced recognition, especially for under\-represented classes\.

## Where Do We \(Not\) Need Temporal Context in Low\-Resource Video Task Adaptation?

**Authors:** Luc Sträter; Hazel Doughty

**ID:** 139722 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8PgM1tQgBY>) | [PDF](<https://openreview.net/pdf?id=8PgM1tQgBY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139722>)

Parameter\-efficient fine\-tuning \(PEFT\) and probing enable adaptation of foundation models using only a small number of trainable parameters, making it attractive for video understanding where annotation and computation are expensive\. However, video PEFT has focused on adapting image\-pretrained models, while standard PEFT methods can also be applied to video representations\. These settings are rarely compared and both confine temporal reasoning to a single component of the model, leaving open how temporal context should be distributed across backbone, PEFT and probe\. In this work we provide a systematic study of model adaptation strategies for video understanding\. We evaluate methods across appearance\-focused, motion\-focused and spatially dense settings, with a particular focus on scenarios with limited data where parameter\-efficiency is most beneficial\. Our results provide new insights into PEFT and probing across settings and demonstrate the importance of temporal context allocation for effective video adaptation\.

## LR\-V2X: Loss Resilient Collaborative Perception under Low\-Bandwidth Communication

**Authors:** Kang Yang; Tianci Bu; Peng Wang; Deying Li; Yongcai Wang

**ID:** 148873 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uYVWkUP5Hl>) | [PDF](<https://openreview.net/pdf?id=uYVWkUP5Hl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148873>)

Given the inherent unpredictability of packet loss in vehicular wireless communications, V2X collaborative perception can yield practical benefits only if agents can achieve reliable collaboration under lossy and low\-bandwidth communication conditions\. Existing dense BEV feature fusion methods depend on redundant BEV feature exchange, which is infeasible in low\-bandwidth scenarios, while compact\-communication methods aggressively compress messages but can hardly recover the missing feature content after packet loss\.  In this paper, we present LR\-V2X, a loss\-resilient, latent\-space reconstruction framework that converts corrupted received latents \(even under severe 90\\% packet loss\) into a spatial prior and then reconstructs the missing BEV information from this informative prior and using ego context as condition\. Notably, the model can be trained under complete communication conditions and can be directly applied to lossy conditions at test time, eliminating the need for training under numerous lossy conditions\.  Experiments on DAIR\-V2X and V2XREAL show that LR\-V2X delivers the strongest robustness under severe packet loss and preserves reliable collaboration as communication quality degrades\. And it reduces communication overhead by $64\\times$ compared to dense BEV feature fusion baselines\. Code will be publicly released\.

## CARVE: Counterfactual Video Editing for Auditing and Hardening Video Detectors

**Authors:** Wei Zhou; YIMING CHEN; Xu Jinwei; Yang zhou; Quan Gan; Li Yang

**ID:** 151526 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a0f5OM9rop>) | [PDF](<https://openreview.net/pdf?id=a0f5OM9rop>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151526>)

Video detectors are usually evaluated on observational splits, where target events co\-occur with environmental and capture factors\. A high AUC under this setup can reflect either the event itself or its surrounding conditions, and standard reporting cannot tell them apart\. This work addresses the entanglement with CARVE, a counterfactual video editing protocol\. For each source clip, CARVE generates a matched quartet $\(V^0, V^E, V^A, V^\{AE\}\)$ that holds camera pose, layout, and surrounding traffic fixed while independently intervening on environment and event\. A two\-phase generator first produces a layout\-conditioned reference image, then performs reference\-guided video editing; a three\-layer reference / objective / VLM\-panel protocol filters the output\. Each quartet supports thresholded and continuous diagnostics for false\-positive purity, event faithfulness, environment\-induced drift, and held\-out factor compositions\. Thresholded scores are paired with continuous ones so that a conservative detector cannot suppress scores everywhere and look robust\. The same audit drives training: CGAA\-IC samples weak factors weighted by measured brittleness and adds quartet\-level purity, consistency, and faithfulness losses; the inference graph is unchanged\. On CCTV accident detection, the audit shows that clean AUC does not predict robustness rankings: a VideoMAE detector with $91\.4\\%$ AUC on TAD scores only $72\.3\\%$ CPS on the night slice of CARVE\-Q\. CGAA\-IC raises purity from $84\.2\\%$ to $89\.9\\%$ and cross\-dataset average AUC from $80\.3\\%$ to $84\.5\\%$\.

## Reasoning\-Aware Relational Representation Learning for Open\-Vocabulary Scene Graph Generation

**Authors:** Jiawei Xiao; Boya Wang; Longtian Qiu; Shan Ning; Xuming He

**ID:** 155063 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8kAKJfrIKh>) | [PDF](<https://openreview.net/pdf?id=8kAKJfrIKh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155063>)

Open\-Vocabulary Scene Graph Generation \(OV\-SGG\) requires models to recognize visual relationships beyond the training vocabulary, yet existing methods often rely on dataset\-specific object\-\-predicate co\-occurrence patterns\. Under long\-tailed distributions and noisy object localization, such reliance leads to biased, entangled relation representations, limiting both rare\-relation recognition and generalization to unseen predicates\.To address these challenges, we propose RaRe, a reasoning\-aware relational representation learning framework that transforms MLLM\-generated chain\-of\-thought \(CoT\) rationales into structured relation embeddings\. Rather than using CoT only as an intermediate reasoning trace for final prediction, RaRe directly optimizes the rationale\-derived representation space to improve inter\-relation discriminability\. Specifically, RaRe first aligns rationale embeddings with textualized relation descriptions through self\-supervised contrastive learning, and then refines rationale generation with a specificity\-oriented reinforcement learning objective that encourages semantically distinctive relational evidence\.Experiments on Visual Genome demonstrate that RaRe improves category\-balanced recognition across both base and novel predicates, with particularly strong gains under the SGDet setting where detection noise is prevalent\.

## Structure\-Guided Masked Autoencoders for Ultra\-High Resolution Scientific Image Understanding

**Authors:** Enzhi Zhang; Du Wu; Rui Zhong; Cong Ma; Isaac Lyngaas; Amir K Ziabari; Xiao Wang; Peng Chen; Tao Luo; Toshio Endo; Fumiyoshi Shoji; Kento Sato; Kentaro Uesugi; Takayuki Nonoyama; Ryuji Kiyama; Masahiro Yoshida; Tezuka Masaru; Tetsuya Ishikawa; Satoshi Matsuoka; Masaharu Munetomo; Mohamed Wahib

**ID:** 150156 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kFIwMrx78r>) | [PDF](<https://openreview.net/pdf?id=kFIwMrx78r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150156>)

Self\-supervised pre\-training with Vision Transformers, including Masked Autoencoders \(MAE\), is difficult to apply to gigapixel scientific images\. Random masking is poorly matched to the structured, multi\-scale morphology of scientific data, while uniform tokenization produces prohibitively long sequences that make $O\(N^2\)$ attention impractical\. We propose \\method\{\}, a structure\-guided masked autoencoding framework for ultra\-high\-resolution scientific images\. \\method\{\} couples two components: a content\-adaptive quadtree tokenizer that compresses gigapixel images into a fixed\-length sequence, and a structure\-conditioned masking process that biases reconstruction toward spatially informative regions\. To stabilize this process across scales, we introduce Damped Accumulation \(DA\), which aggregates signal\-dependent responses across the tree into a structure canvas used to guide masking\. The resulting pre\-training task preserves fine microstructure while remaining compatible with standard ViT encoders and MAE\-style reconstruction\. Across electron microscopy, whole\-slide optical microscopy, and X\-ray CT datasets, \\method\{\} consistently outperforms MAE baselines\. It achieves 95\.68\\% Dice on the 8K$\{\\times\}$8K$\{\\times\}$28K SpringXCT dataset, improving over the strongest MAE baseline by \+9\.70 points, and 83\.21\\% Dice on the $32\\text\{K\}^2$ WSI PAIP dataset, improving by \+16\.84 points, while providing up to a $24\.8\\times$ inference speedup

## CIPHERGRID Benchmark: From Multimodal Rule Inference to Sequential Action

**Authors:** Christopher Curtis; Victor Fragoso; Saiph Savage

**ID:** 139313 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xw2kQScdD6>) | [PDF](<https://openreview.net/pdf?id=Xw2kQScdD6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139313>)

We introduce CIPHERGRID, a rule\-inference and path\-finding benchmark\. In each task, models are given example grid\-world images paired with encoded descriptions and encoded solutions\. From this evidence, models then receive a new encoded grid\-world to solve\. To answer correctly, models must infer which symbols denote tiles, actions, row boundaries, and game mechanics\. They must then decode the new world, and produce an encoded path from the start cell to the target cell\. The benchmark is designed so that each component is individually solvable: rule inference is calibrated against human performance, and path\-finding is solver\-verifiable via exact shortest\-path search\. Although the underlying skills are individually solvable and verifiable, CIPHERGRID tests their interaction: whether models can infer an unfamiliar symbolic system, and carry it through rule application, and planning\. CIPHERGRID remains difficult for current frontier models, which only achieve between 18\.74\\% and 41\.89\\% accuracy\. CIPHERGRID offers a controlled test of whether models can coordinate multimodal grounding, rule inference, and sequential planning under unknown symbolic relationships\.

## Stabilizing Few\-Shot Object Detection with Language\-Conditioned Probabilistic Prototypes

**Authors:** Jiaying Wu; Yuchun Zhao; Lei Shi; Jia Luo; Dongmei Wei; Feifei Kou; Pengfei Zhang; Zhaoman Zhong

**ID:** 149495 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pi6vqZBaUT>) | [PDF](<https://openreview.net/pdf?id=pi6vqZBaUT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149495>)

Few\-shot object detection \(FSOD\) requires detectors to adapt to novel categories from only a few labeled instances, where prototype\-based transfer methods have become a strong and efficient paradigm\. However, we observe that such methods remain unstable in extreme low\-shot regimes\. We attribute this instability to two coupled factors: semantically unanchored query initialization, which yields high\-variance cold\-start optimization, and deterministic prototype matching, which over\-trusts noisy or occluded support regions\. To address these limitations, we propose Semantic Fine\-Grained Prototype Distillation \(SFPD\), a language\-conditioned probabilistic adaptation framework for prototype\-based FSOD\. SFPD introduces language\-conditioned feature queries to provide semantic anchors for novel\-class adaptation, uncertainty\-aware prototype distillation to down\-weight unreliable support evidence through heteroscedastic Gaussian modeling, and component\-guided part\-aware prototypes to refine fine\-grained semantic\-visual alignment\. These modules act during adaptation and preserve the original detector path at inference, introducing no additional inference FLOPs\. Experiments on PASCAL VOC and MS\-COCO show that SFPD consistently improves a strong FPD baseline, with especially clear gains in the most challenging low\-shot settings, e\.g\., a 3\.9\-point nAP50 improvement on VOC Split 2 under 1\-shot\. Further ablations, multi\-seed evaluation, and convergence analysis indicate that SFPD improves both accuracy and adaptation stability\.

## Active Learning via Classifier Impact and Greedy Selection for Interactive Image Retrieval

**Authors:** Leah Bar; Boaz Lerner; Nir Darshan; Rami Ben\-Ari

**ID:** 156770 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156770>)

Active Learning \(AL\) is a user\-interactive approach aimed at reducing annotation costs by selecting the most crucial examples to label\. Although AL has been extensively studied for image classification tasks, the specific scenario of interactive image retrieval has received relatively little attention\. This scenario presents unique characteristics, including an open\-set and class\-imbalanced binary classification, starting with very few labeled samples\. We introduce a novel batch\-mode Active Learning framework named GAL \(Greedy Active Learning\) that better copes with this application\. It incorporates new acquisition functions for sample selection that measure the impact of each unlabeled sample on the classifier\. We further embed this strategy in a greedy selection approach, better exploiting the samples within each batch\. We evaluate our framework with both linear \(SVM\) and non\-linear MLP/Gaussian Process classifiers\. For the Gaussian Process case, we show a theoretical guarantee on the greedy approximation\. Finally, we assess our performance for the interactive content\-based image retrieval task on several benchmarks and demonstrate its superiority over existing approaches and common baselines\.

## Concepts in Motion: Temporal Concept Bottleneck Model for Interpretable Video Classification

**Authors:** Patrick Knab; Sascha Marton; Philipp J Schubert; Drago A Guggiana Nilo; Christian Bartelt

**ID:** 151556 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Zj6ihufW1x>) | [PDF](<https://openreview.net/pdf?id=Zj6ihufW1x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151556>)

Concept Bottleneck Models \(CBMs\) enable interpretable image classification by structuring predictions around human\-understandable concepts, but extending this paradigm to video remains challenging due to the difficulty of extracting concepts and modeling them over time\.  In this paper, we introduce MoTIF \(Moving Temporal Interpretable Framework\), a transformer\-based concept architecture that operates on sequences of temporally grounded concept activations, by employing per\-concept temporal self\-attention to model when individual concepts recur and how their temporal patterns contribute to predictions\. Central to the framework is a class\-conditioned VLM\-based concept discovery module that extracts object\- and action\-centric textual concepts from training videos, yielding temporally expressive concept sets without manual concept annotation\. Across multiple video benchmarks, this combination improves over global concept bottlenecks and remains competitive within the interpretable concept\-bottleneck setting, while narrowing the gap to strong black\-box video baselines that we report as contextual references\.

## Enhancing Gaze Reasoning in Vision Foundation Models for Gaze Following

**Authors:** SHIJING WANG; Yihua Cheng; CHAOQUN CUI; Yaping Huang; David Wong; Alexandros Neophytou; Hyung Jin Chang

**ID:** 155158 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7qK9e9Gt6l>) | [PDF](<https://openreview.net/pdf?id=7qK9e9Gt6l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155158>)

Gaze following requires both scene understanding and gaze reasoning to localize the gaze target of an in\-scene person\. Recently, vision foundation models \(VFMs\) have demonstrated strong performance on this task, enabling simpler architectures while outperforming prior methods\. However, we observe a key limitation of VFM\-based approaches: while VFMs substantially improve scene understanding, they contribute little to gaze reasoning\. As a result, existing methods often rely on semantically salient objects rather than true gaze cues, leading to degraded performance when targets are not salient\. To address this, we propose a novel training mechanism to enhance gaze reasoning in VFMs for gaze following\. Our method includes: \(1\) a head\-conditioned local LoRA, which enables localized adaptation to preserve scene token learning while improving head token learning for gaze reasoning; and \(2\) an out\-of\-cone penalty, which injects gaze cues into head tokens while aligning them with scene tokens\. Experiments on the GazeFollow and VAT datasets demonstrate that our method achieves state\-of\-the\-art performance, with particularly strong improvements when gaze targets are not semantically salient\. Our findings offer valuable insights for advancing future gaze following research\.  We will release the code once the paper is accepted\.

## SR\-Prominence: A Crowdsourced Protocol and Dataset Suite for Perceptually\-Weighted Super\-Resolution Artifact Evaluation

**Authors:** Ivan Molodetskikh; Kirill Malyshev; Mark Mirgaleev; Nikita Zagainov; Evgeney Bogatyrev; Dmitriy Vatolin

**ID:** 139596 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GJzL4oNx1s>) | [PDF](<https://openreview.net/pdf?id=GJzL4oNx1s>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139596>)

Modern image super\-resolution methods generate detailed, visually appealing results, but they often introduce visual artifacts: unnatural patterns and texture distortions that degrade perceived quality\. These defects vary widely in perceptual impact—some are barely noticeable, while others are highly disturbing—yet existing detection methods treat them equally\. We propose artifact prominence as an evaluative target, defined as the fraction of viewers who judge a highlighted region to contain a noticeable artifact\. We design a crowdsourced annotation protocol and construct SR\-Prominence, a dataset suite containing 3,935 artifact masks from DeSRA, Open Images, Urban100, and a realistic no\-ground\-truth Urban100\-HR setting, annotated with prominence\. Re\-annotating DeSRA reveals that 48\.2% of its in\-lab binary artifacts are not noticed by a majority of viewers\. Across the suite, we audit SR artifact detectors, image\-quality metrics, and SR methods\. We find that classical full\-reference metrics, especially SSIM and DISTS, provide surprisingly strong localized prominence signals, whereas no\-reference IQA methods and specialized artifact detectors often fail to generalize across datasets and reference settings\. SR\-Prominence is released with an objective scoring protocol that allows new metrics to be benchmarked on our suite without further crowdsourcing\. Together, the data and protocols enable SR artifact evaluation to move from binary defect presence toward perceptual impact\.

## TreemapMix: Dirichlet\-Controlled Multi\-Image Augmentation for Probability and Ordinal Supervision

**Authors:** Ejafa Bassam; Konstantin Garbers; Yingsheng Geng; Dalton Jens; Jiaxu Qian; Guyue Liu

**ID:** 148753 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vHPQM0CONK>) | [PDF](<https://openreview.net/pdf?id=vHPQM0CONK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148753>)

Data augmentation improves visual recognition by exposing models to synthetic training examples that encourage generalization beyond the observed data\. Mixed\-sample methods extend this idea by combining multiple images\. However, existing approaches either mix only pairs of images or rely on fixed small layouts, limiting control over source count, visible area proportions, and induced supervision\. We propose TreemapMix, a distribution\-controlled multi\-image augmentation that samples source weights from a Dirichlet distribution and assigns them to area\-proportional regions using a treemap partition\. The resulting known region areas support two complementary objectives\. TreemapMix with soft cross\-entropy \(SCE\) treats areas as soft class\-probability targets, while TreemapMix with a Plackett\-Luce \(PL\) objective converts areas into ordinal supervision\. On ImageNet\-1K under a matched training protocol, TreemapMix\-SCE achieves substantially lower calibration error than evaluated mixed\-sample baselines, while TreemapMix\-PL achieves the strongest Top\-1 accuracy\. Transfer experiments on object detection and instance segmentation suggest that TreemapMix\-pretrained features remain useful beyond classification\. These results show that controlled multi\-image composition can expose the same region\-area information as either probability\-matching or rank\-matching supervision\.

## PHOEBI: An Open\-World Benchmark for Multi\-Label Bacterial Identification in Phase\-Contrast Microscopy

**Authors:** Aaditya Baranwal; Md Jahid Hasan; Shruti Vyas

**ID:** 139754 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6cpui5CQW9>) | [PDF](<https://openreview.net/pdf?id=6cpui5CQW9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139754>)

Optical microscopy lets us watch living bacteria in real time without stains or labels, and it remains the standard instrument for identifying species across clinical, environmental and industrial microbiology\. Yet real samples rarely hold a single species\. They arrive as mixtures and sometimes carry an organism no model has ever seen\. What happens when a model trained on familiar mixtures meets one it has never encountered? No benchmark has asked this of phase\-contrast images, so we built one\. \*\*PHOEBI\*\* brings together 120,000 phase\-contrast images of 40 mixtures of six bacterial species that we cultured and imaged ourselves, and it holds whole mixtures out of training so that every test is a combination the model has never seen\. The answer is sobering\. Classifiers that are nearly perfect on the mixtures they know collapse on new ones, and no choice of backbone or pretraining rescues them\. The features turn out to be sound and the failure lies in how the evidence within each image is pooled\. A culture looks the same everywhere, and decoders built on this simple fact hold steady where large networks fail even though one of them is never trained by gradient descent\. The same features go further still\. They notice when a species outside the catalogue appears, and the simplest way of giving it a class of its own proves the most effective while leaving the known species almost untouched\. PHOEBI turns the mixed culture, the everyday case at the bench, into a measurable target for open\-world recognition\.

## TTVidT: Decoupling the Temporal Axis for Efficient Motion\-Centric Video Pretraining

**Authors:** Shih\-Ying Yeh; Daniel Z Kaplan; Xuehai Wang; Fu\-En Yang; Min\-Hung Chen; Shang\-Hong Lai

**ID:** 154339 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ELiMecKQps>) | [PDF](<https://openreview.net/pdf?id=ELiMecKQps>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154339>)

Comparisons in video self\-supervised learning often evaluate complete training recipes rather than isolating the method itself: architecture, objective, data exposure, schedule, scale, and decoder capacity can all vary at once\. This makes it hard to identify which choices yield motion\-prioritized representations, whose gains concentrate on frame\-to\-frame change while retaining useful appearance\. We address this with a matched $4 \\times 6 = 24$ architecture\-\-objective study at roughly 170M\-\-190M encoder scale on $\\sim$1\.7M OpenVid and Moments\-in\-Time v2 clips for 8 epochs, and propose TT\-VidT\. TT\-VidT combines a DINOv3\-initialized ViT\-B/16 per\-frame spatial path with a compact Temporal Transfer Layer, trained by Diff Compression to reconstruct target frames from a first\-frame appearance anchor and frame\-specific motion tokens\. The sweep shows that TT3D with Diff Compression, not either component alone, enters the strongest motion\-sensitive regime, and decoder ablations favor a compact video\-pretrained decoder\. In final comparison, TT\-VidT leads Jester, Something\-\-Something\\,V2, ARID, and Diving48 fine\-tuning simultaneously, improving over the strongest non\-TT row by 54\\%\-\-121\\%, while using 48\\% fewer encoder FLOPs than DisMo and 55\\% fewer than VideoMAE or V\-JEPA\~2\. HMDB51, IARD, and EPIC\-Kitchens bound the claim\.

## GIFT: Representation Geometry Matters for Single\-Domain Generalized Object Detection

**Authors:** Yin Zhang; Yaoyue Zheng; Yongqiang Zhang; Bogdan Raducanu; Dan Liu

**ID:** 154879 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AD11zTIipA>) | [PDF](<https://openreview.net/pdf?id=AD11zTIipA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154879>)

Single\-Domain Generalized Object Detection \(S\-DGOD\) aims to generalize from a single source domain to unseen domains under distribution shifts\. Existing efforts mainly focus on simulating unseen domains or suppressing domain\-specific factors\. However, they largely overlook the intrinsic generalization capability embedded in Vision Foundation Models \(VFMs\)\. In this work, we show that unconstrained fine\-tuning disrupts the geometric structure of pre\-trained representations, which encodes domain\-invariant semantics\. Motivated by this, we propose Geometric\-Invariance Fine\-Tuning \(GIFT\), a geometric\-aware fine\-tuning method for VFMs\. Specifically, we introduce a series of learnable Householder reflections to the pre\-trained weights to encourage geometry\-consistent adaptation under domain shift\. In addition, we propose a lightweight channel\-wise scaling to facilitate effective task\-specific adaptation\. Extensive experiments demonstrate that GIFT consistently outperforms state\-of\-the\-art \(SOTA\) approaches on two S\-DGOD benchmarks\. Notably, by introducing fewer than 1% additional trainable parameters into the frozen backbone, the proposed method achieves improvements of \+7\.9% and \+2\.9% in mPC over the previous SOTA on the Cityscapes\-C and Diverse Weather Dataset, respectively\. This finding highlights that preserving representation geometry is crucial for robust cross\-domain generalization, establishing GIFT as a principled and efficient solution to domain shift\. The code is available in the supplementary material\.

## Simplified Reversible Residual Networks

**Authors:** Erland Brandser Olsson; Zhirong Yang

**ID:** 148514 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xJJVBYKgl8>) | [PDF](<https://openreview.net/pdf?id=xJJVBYKgl8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148514>)

The de facto standard way of training neural networks requires storing activations at each layer to memory, in order to compute gradients in backpropagation\. As progress has often been made by stacking larger and more layers, memory consumption has now become a major bottleneck for making frontier models available to everyone\. In this work, we take advantage of the Residual Network \(ResNet\) layer formulation that is now used in many state\-of\-the\-art neural network architectures to recompute the activations at each layer on\-the\-fly during backpropagation instead of storing them in memory\. We propose a modification to Reversible Residual Network \(RevNet\) that overcomes its limitation of requiring to replace the ResNet layer network function with two new network functions, by setting either one to an identity function\. This modification is simple yet has a significant advantage because now there is no need to change the original ResNet architecture\. Our method can work as a drop\-in replacement for layers with residual connections such as in ordinary ResNets or Transformers with practically no loss in performance while offering significant reductions in memory consumption\. With this simple modification, we are able to maintain the same computational cost and ease of use as activation checkpointing, which requires no architectural changes, while leveraging a reversible procedure such that we only need to store the activations from the last layer\. The method is called Simplified RevNet, and compared to previous work in reversible architectures, we here propose a simpler and more streamlined approach that comes in two variants based on which of $F$ or $G$ in RevNet becomes an identity function\. Empirically, we demonstrate performance at practically the same level as the non\-reversible counterparts on ImageNet image classification with ResNets and on OpenWebText language modeling with Transformers\.

## Class\-Incremental Learning via LoRA\-based Elastic Ensemble of Experts

**Authors:** Ruilong Yu; Fei Ye; Zhiyuan Ren; Qihe Liu; Adrian G\. Bors; Rongyao Hu; shijie zhou

**ID:** 155401 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5v1mhJ0DnN>) | [PDF](<https://openreview.net/pdf?id=5v1mhJ0DnN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155401>)

Large\-scale pre\-trained vision models provide powerful representations for class\-incremental learning, yet continuously adapting them to new classes without historical samples, task identifiers, or unrestricted parameter growth remains a fundamental challenge\. Existing LoRA\-based approaches typically follow either a one\-adapter\-per\-task expansion paradigm or a fixed parameter\-sharing strategy\. The former leads to linear parameter growth as the task sequence expands, while the latter often induces severe cross\-task interference\. To address these limitations, we propose $\{\\bf E\}^3$ \(Elastic Ensemble of Experts\), a parameter\-efficient framework for class\-incremental learning\. $\{\\bf E\}^3$ treats LoRA modules as elastic experts whose task capacity is dynamically scheduled according to representational saturation\. Within each expert, we further introduce Group\-Aware Parameter Partitioning, which allocates LoRA parameters into disjoint task\-specific subspaces using magnitude\-based importance estimation, thereby mitigating parameter overwriting without additional gradient\-sensitivity computation\. Moreover, $\{\\bf E\}^3$ incorporates hierarchical moment regularization and orthogonal gradient projection to constrain classifier drift and prevent new\-task updates from disrupting historical feature subspaces\. Extensive experiments on standard class\-incremental learning benchmarks demonstrate that E³ achieves state\-of\-the\-art or competitive performance, especially in long\-horizon task sequences, while maintaining a favorable balance between stability, plasticity, and parameter efficiency\.

## RADAR: Relative Angular Divergence Across Representations

**Authors:** Xavier Cadet; Mateusz Nowak; Peter Chin

**ID:** 148141 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zzVgiIST6K>) | [PDF](<https://openreview.net/pdf?id=zzVgiIST6K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148141>)

Machine learning methods rely on data\. However, gathering suitable data can be challenging due to availability constraints, cost, or the need for domain expertise\. Expanding datasets with additional sources is a common response to limited data, yet this practice does not always improve downstream performance and can sometimes lead to a loss of performance, known as negative transfer\. We propose RADAR, a simple, geometrically grounded metric for estimating cross\-domain transferability in foundation models\. RADAR analyzes the layer\-wise evolution of representations by measuring angular alignments and relative changes in distance along layer\-to\-layer displacement trajectories, and by comparing empirical distributions of within\-domain and cross\-domain dynamics\. We hypothesize that domain transferability is related to the divergence between these trajectory distributions\. We evaluate the metric across multiple modalities, including cross\-lingual sentiment classification with text embedding models and cross\-domain image classification with foundation vision models\. Across several settings, RADAR provides competitive predictive performance relative to existing transferability metrics on several vision and text benchmarks, with particularly strong results when domain transitions are smooth or cleanly separated\. Our ablations further suggest that the effectiveness of transferability estimation depends on the geometry of the model’s internal representation space, with different modalities favoring different topological formulations\.

## SOAR: Semantic Organ\-Aware Pretraining for 3D CT Image Understanding

**Authors:** Huidong Xie; Wei Ji; Sunan He; Zhihao Tang; Wen Tang; Jun Zhao; Hongming Shan

**ID:** 148421 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xwakWJUI55>) | [PDF](<https://openreview.net/pdf?id=xwakWJUI55>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148421>)

Vision\-language pretraining has advanced multimodal medical AI, but its direct application to 3D computed tomography \(CT\) remains limited by a fundamental mismatch between dense volumetric anatomy and sparse diagnostic reports\. Existing 3D CT vision\-language methods typically rely on global image\-report alignment or align anatomical regions with decomposed report descriptions\. However, a CT scan captures rich, spatially distributed information across many organs, whereas a report summarizes only a small subset of clinically relevant findings\. As a result, report\-based alignment provides incomplete or weak supervision, leaving many local anatomical structures underrepresented\. Motivated by this limitation, we introduce SOAR, a semantic organ\-aware pretraining framework for 3D CT image understanding\. The key innovation of SOAR lies in its integration of fine\-grained, organ\-level structural priors, enabling report\-free organ\-aware supervision for visual pretraining without relying on radiologist annotations or coarse global image\-report matching\. SOAR combines three complementary objectives: \(i\) organ\-level masked reconstruction to learn localized anatomical context, \(ii\) organ\-level vision\-language alignment to associate organ\-specific visual features with organ\-name text embeddings, and \(iii\) organ\-level supervision to preserve voxel\-level structural detail\. SOAR integrates easily with existing LLMs and is evaluated on five public/in\-house benchmarks, improving multiple\-choice VQA accuracy by 3\.53% and disease screening/abnormality detection AUC by 4\.25 points on average over all benchmarks/baseline methods\. Code will be available\.

## Temporal Slice Learning for AI\-Generated Video Detection with 400× Fewer FLOPs

**Authors:** Wei Shang; Zhiyuan Li; Shengfeng He

**ID:** 154604 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CNFgZ3PsmY>) | [PDF](<https://openreview.net/pdf?id=CNFgZ3PsmY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154604>)

Recent advances in generative video models have significantly improved visual realism, making detection increasingly dependent on subtle temporal inconsistencies arising from imperfect frame\-to\-frame coherence\. However, these signals are weak and spatially localized, while most of the video content is redundant\. This creates a fundamental mismatch: existing detectors rely on heavy backbones to model full videos, assuming increased capacity can capture such cues, which leads to high computational cost and limited scalability\. In this work, we rethink AI\-generated video detection from a representation perspective\. Instead of modeling entire videos, we propose to explicitly restructure them into compact temporal slice representations that isolate informative temporal evolution\. Based on this idea, we introduce a lightweight framework using frequency\-aware temporal slice consistency learning, where informative spatial rows and columns are aggregated over time to form slice\-domain inputs\. This reparameterization suppresses redundant appearance while preserving discriminative temporal dynamics, enabling efficient and targeted detection\. By constructing slices from both high\- and low\-frequency regions, our method exposes complementary temporal artifacts, including unstable details and abnormal motion smoothness\. We instantiate this idea in a $\\textit\{Temporal Slice Consistency Network\}$, which integrates task\-driven slice localization, hierarchical positional encoding, and a lightweight Transformer to model cross\-slice and cross\-frequency dependencies with minimal overhead\. We further introduce $\\textit\{AI\-Artist\}$, a new benchmark with artist\-curated videos from recent high\-fidelity generators, including Seedance and Kling\. Experiments on GenVideo and AI\-Artist show that our method achieves strong performance while requiring over 400× fewer FLOPs and 3\.6× faster inference than the strong video\-based baseline ReStraV, enabling scalable and practical deployment\.

## EviAttr\-OW: Evidential Attribute Reasoning for Open World Object Detection

**Authors:** Linhua Ye; Xing Xi; Ronghua Luo

**ID:** 152262 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UNSLchC9SB>) | [PDF](<https://openreview.net/pdf?id=UNSLchC9SB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152262>)

Open World Object Detection \(OWOD\) is a challenging task that requires detectors to recognize known categories while discovering unlabeled objects and incrementally incorporating them as new categories\. Existing methods mainly rely on known\-class features to recall unknown objects, while overlooking the semantic pull of known classes in the attribute space and its impact on the interpretability of unknown detection\. In this paper, we propose EviAttr\-OW, a novel evidential attribute reasoning framework for OWOD that discovers potential unknown objects with interpretable attribute evidence\. Specifically, we construct a class\-agnostic attribute space that decouples attribute representations from known\-class bias and provides a more open attribute description basis for potential unknown objects\. We then map candidate\-region attribute responses into a Dirichlet evidence distribution, producing known\-class predictions and evidential uncertainty to measure the reliability of known\-class support\. Finally, we derive Known\-Class Evidence Deficiency from this evidence distribution and combine it with object evidence, enabling the model to identify unknown objects with evidence\-supported objectness and insufficient known\-class support\. Experiments on the Real\-World Object Detection \(RWD\) benchmark across five real\-world application datasets show that EviAttr\-OW consistently outperforms existing state\-of\-the\-art \(SOTA\) methods, achieving \+7\.3 mAP on unknown classes\.

## A Differentiable 3D Scene Graph Metric via Contextual Hellinger Triplet Geometry

**Authors:** U\-Chae Jun; Yoonhyuk Choi; Jiwoo Kang

**ID:** 149490 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=plEkglzKmI>) | [PDF](<https://openreview.net/pdf?id=plEkglzKmI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149490>)

3D scene graph prediction is commonly supervised with local object and predicate classification losses\. Although effective for slot\-wise label prediction, this formulation does not provide a graph\-level semantic distance between a predicted scene graph and its ground truth: semantically mild label errors and structurally disruptive relational errors can be treated similarly, and subject\-predicate\-object facts are not compared as scene\-level units\. We propose Contextual Hellinger Triplet Geometry, a graph\-level supervision objective that measures the semantic and structural discrepancy between 3D scene graphs\. Our key idea is to reinterpret the conventional classifier outputs of a 3D scene graph predictor as an aligned probabilistic scene graph field, where object and predicate predictions jointly define contextual subject\-predicate\-object facts\. This formulation yields a differentiable metric\-based training objective with an efficient factorized implementation and can be applied to existing 3D scene graph prediction architectures without modifying their network design\. Experiments on 3DSSG demonstrate that our supervision improves downstream graph\-conditioned 3D scene generation, while ablation studies confirm the complementary roles of the proposed graph\-level terms and user studies show better graph descriptiveness, relation plausibility, and structural preservation\.

## Beyond Real or Fake: A Dual\-Channel Authenticity and Reasoning Protocol for Photographic Assessment

**Authors:** Xiaoxiao Li; Ruinan Jin; Lili Meng; Miaosen Wang; Athula Balachandran; PEI CAO

**ID:** 154533 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CsqD0OgleJ>) | [PDF](<https://openreview.net/pdf?id=CsqD0OgleJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154533>)

Forensic verification has converged on a binary "real vs\. fake" label that conflates fully synthetic, tampered, and AI\-retouched images despite their very different consequences\. We argue that GenAI manipulations decompose along two complementary channels: a camera channel of sensor fingerprints \(destroyed by neural processing\), and a semantic channel of scene\-level coherence \(disrupted by content edits\)\. Each manipulation type leaves a distinctive two\-channel signature\. We instantiate this taxonomy in 2CAP \(2\-Channel Authenticity Protocol\), pairing a contrastively\-trained camera encoder with a frozen semantic encoder to serve two applications on a shared backbone: \(i\) four\-class authenticity classification via cross\-attention fusion with learnable reliability weights; and \(ii\) evidence generation, where an authentic image serves as a reference for a query and the two encoders produce per\-channel alignment scores together with a patch\-level saliency map\. These signals are supplied as privileged context to a frozen Vision Language Model \(VLM\) through an Observe\-Generate\-Refine loop, yielding explanations with localization without forensic fine\-tuning\. On a multi\-source benchmark, 2CAP attains the best classification performance, including strong retouching detection where existing methods fail, and improves explanation quality\.

## GLACIER: Rethinking Mass Spectrum Prediction as an Object Detection Problem

**Authors:** Rui\-Xi Wang; Runzhong Wang; Connor Coley

**ID:** 152133 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VGzoNiwKMJ>) | [PDF](<https://openreview.net/pdf?id=VGzoNiwKMJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152133>)

Predicting tandem mass spectra \(MS/MS\) from molecular structures represents a central task in analytical chemistry with direct relevance to clinical metabolomics, systems biology, and adjacent disciplines\. In this work, we revisit the problem through the lens of object detection on molecular graphs\. Molecular fragmentation, a central step in MS/MS prediction, can be approximated as detecting a set of subgraphs \(i\.e\., fragments\) and their associated spectral contributions\. Existing fragment\-based models follow a two\-stage paradigm—first generating candidate fragments and then scoring them—analogous to two\-stage R\-CNNs in computer vision\. Towards higher accuracy and faster inference, we introduce GLACIER, a single\-stage transformer\-based fragment detection neural network for molecular graphs\. This unified formulation eliminates the need for candidate enumeration, enabling scalable and globally consistent modeling of molecular fragmentation\. GLACIER is faster and more accurate than existing state\-of\-the\-art methods by a significant margin, achieving 62\.4% and 62\.1% Top\-1 retrieval accuracy with and without contrastive finetuning on the MassSpecGym dataset \(from 55\.3%\), and 55\.2% and 38\.2%, respectively, on the NIST'20 dataset \(from 33\.5%\)\. Furthermore, GLACIER provides nearly 3\-fold inference speedup over existing two\-stage models\.

## PoseBridge: Bridging the Skeletonization Gap for Zero\-Shot Skeleton\-Based Action Recognition

**Authors:** Sanghyeon Lee; Jinwoo Kim; Jong Taek Lee

**ID:** 154017 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GqheFyyPQn>) | [PDF](<https://openreview.net/pdf?id=GqheFyyPQn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154017>)

Zero\-shot skeleton\-based action recognition \(ZSSAR\) is typically treated as a skeleton\-text alignment problem: encode joint\-coordinate sequences, align them with language, and classify unseen actions\. We argue that this alignment is often too late\. Skeletons are not complete action observations, but compressed outputs of human pose estimation \(HPE\); by the time alignment begins, human\-object interactions and pose\-relative visual cues may no longer be explicit\. We call this upstream semantic loss\. To address it, we propose PoseBridge, an HPE\-aware ZSSAR framework that bridges intermediate HPE representations to skeleton\-text alignment\. Rather than adding an RGB action branch or object detector, PoseBridge extracts pose\-anchored semantic cues from the same HPE process that produces skeletons, then transfers them through skeleton\-conditioned bridging and semantic prototype adaptation\. Across NTU\-RGB\+D 60/120, PKU\-MMD, and Kinetics\-200/400, PoseBridge improves ZSSAR performance under the evaluated protocols\. On the Kinetics\-200/400 PURLS benchmark, which contains in\-the\-wild videos with diverse scenes and action contexts, PoseBridge shows the clearest separation, improving the strongest compared baseline by 13\.3\-17\.4 points across all eight splits\. Our code will be publicly released\.

## Estimating Model\-Level Membership Inference Vulnerability Without Reference Models

**Authors:** Euodia Dodd; Natasa Krco; Igor Shilov; Matthew R Wicker; Yves\-Alexandre de Montjoye

**ID:** 151197 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cEP6vewR7h>) | [PDF](<https://openreview.net/pdf?id=cEP6vewR7h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151197>)

Membership inference attacks \(MIAs\) have emerged as the standard tool for evaluating the privacy risks of AI models\. However, state\-of\-the\-art attacks require training numerous, often computationally expensive, reference models, limiting their practicality\. We present a novel approach for estimating model\-level vulnerability to the Likelihood Ratio Attack \(LiRA\), the strongest available attack, directly from the train and test loss distributions of the target model and without training any reference models\. We show that LiRA's per\-sample signal decomposes into a variance\-ratio term and a residual mean\-shift term, with the relative contribution of each determined by how much training collapses model uncertainty at the trained sample\. This places models on a continuum, with different regimes calling for different reference\-free loss\-based statistics as proxies for LiRA TPR\. The shapes of the loss distributions themselves indicate which proxy applies\. We instantiate the framework with two natural proxies\. At the heavy\-tailed end, the LOSS attack TNR predicts LiRA TPR@FPR=$10^\{\-3\}$ with RMSE 0\.03 across 9 image classification architectures and 4 datasets, outperforming low\-cost reference\-model attacks such as RMIA\. At the symmetric end, the LOSS attack AUC predicts LiRA TPR with RMSE 0\.01 across five GPT\-2 sizes from 10M to 1B parameters\. We also show these proxies to outperform both low\-cost \(few reference models\) attacks such as RMIA and other measures of distribution difference\.

## Towards Generalizable 3D Anomaly Detection via Relational Inconsistency Modeling

**Authors:** KunHo Heo; SuYeon Kim; Hayoung Lee; Chanse Oh; MyeongAh Cho

**ID:** 152419 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TGK0r4DOru>) | [PDF](<https://openreview.net/pdf?id=TGK0r4DOru>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152419>)

3D anomaly detection \(3DAD\) aims to identify defective regions in point cloud data, serving as a critical component in industrial inspection systems\. Existing methods are normality\-centered — learning the distribution of normal samples and treating deviations as anomalies — without explicitly modeling what constitutes a defect\. This leads to ambiguous decision boundaries with increased false positives and negatives, particularly in unified and cross\-domain settings where diverse normal distributions further blur the boundaries\. We propose a relational inconsistency modeling framework that characterizes defects as violations of geometric consistency among neighboring structures\. Our approach learns category\-agnostic defect cues through pseudo\-anomalies designed as controlled relational violations, instantiated by two key modules: Edge\-aware Graph Refinement \(EGR\) for encoding geometric relationships among local regions, and Cluster\-Deviation Modeling \(CDM\) for identifying regions that are relationally incompatible within their structural peer group\. Extensive experiments on Anomaly\-ShapeNet and Real3D\-AD demonstrate consistent improvements over prior state\-of\-the\-art methods in both in\-domain and cross\-domain settings, validating the effectiveness of learning an explicit, relation\-based defect criterion for 3D anomaly detection\.

## AWP: Activation\-based Window Pruning for Gigapixel Object Detection

**Authors:** Xiang Li; Wenxi Li; Yuetong Wang; Chen Zhang; Chenyang Lyu; Haozhe Lin; Fan Zhang; guiguang ding; Yuchen Guo

**ID:** 151192 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cGbkslrrsi>) | [PDF](<https://openreview.net/pdf?id=cGbkslrrsi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151192>)

Gigapixel object detection in High\-Resolution Wide \(HRW\) images faces extreme spatial sparsity where targets often occupy less than 5% of the image area while computation is wasted on vast uninformative regions\. Existing token selection methods require either complex evolutionary search or training additional learnable modules\. We present AWP \(Activation\-based Window Pruning\), which discovers that the mean of Feed\-Forward Network \(FFN\) activations naturally encodes window importance, enabling parameter\-free selection without additional modules\. Leveraging this intrinsic signal, AWP performs window pruning with remarkable effectiveness\.  On the PANDA gigapixel dataset, AWP outperforms the previous state\-of\-the\-art by \+1\.6% AP₅₀ with 26\.2% FLOPs reduction, particularly excelling on small objects \(\+5\.1% APₛ\)\. When applied to Swin Transformer, AWP demonstrates strong generalization, retaining 97\.4% of baseline performance with 50% windows pruned\. Remarkably, AWP enables zero\-shot application by directly replacing learned selection modules, improving baseline by \+0\.6% AP₅₀ without retraining\. Our work reveals that window\-based vision transformers inherently encode spatial importance through FFN activations, offering a simple yet powerful alternative to existing selection mechanisms, especially for High\-Resolution Wide images\.

## Do We Really Need Diffusion for Generative Object Detection? A Minimal Prototype Perspective

**Authors:** Yu Hong; Xiaosong Jia; Yihan Wang; Wenlong Liao; Tao He; Junchi Yan

**ID:** 153340 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M42HRdwz6B>) | [PDF](<https://openreview.net/pdf?id=M42HRdwz6B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153340>)

Generative object detection, introduced by DiffusionDet, is defined by two coupled properties: \(P1\) data\-independent random\-box initialization with a learned noise\-to\-data transport, and \(P2\) test\-time scaling \(TTS\), the ability to trade inference compute for accuracy at a fixed checkpoint by adjusting the number of proposals or refinement steps\. This paper asks: \\emph\{How can we preserve both properties with a minimal conceptual design?\} We dissect DiffusionDet component by component and find that, in our controlled interventions, the diffusion schedule, the initial noise distribution, and DDIM sampling stochasticity have only a small effect on inference results\. In contrast, detection performance is more sensitive to the denoising head, iterative refinement, and proposal coverage\. Based on these diagnostic results, we propose \\textbf\{LinearDet\}, a compact generative detection prototype: \\emph\{linear noising at training, linear denoising at inference\}\-\-\-no diffusion\-specific schedule, no diffusion ODE/SDE solver, only a symmetric pair of linear mixtures\. On COCO, LinearDet matches DiffusionDet under standard settings, is more robust under sparse proposal coverage, outperforms it in zero\-shot CrowdHuman transfer, and produces smoother refinement trajectories that admit clean heatmap visualization\. More broadly, we hope this diagnosis and compact prototype offer the object detection community a cleaner baseline for studying generative detection\.

## WsiSSM: A Weakly Supervised Subset\-Matching Framework for Unified Classification and Segmentation of Histopathology Whole Slide Images

**Authors:** Guangjian Zeng; Siyuan Tao; Chengzhi Zhao; Xiaoqing Li; Na Tang; Wenting Huang; Shenying Fang

**ID:** 152115 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VQWwM5ssWe>) | [PDF](<https://openreview.net/pdf?id=VQWwM5ssWe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152115>)

Multiple instance learning \(MIL\) has been increasingly used to analyze histopathology whole slide images \(WSIs\) and has achieved accurate diagnostic classification and a certain degree of automatic segmentation capability\. However, segmentation performance without annotation remains suboptimal due to the immense size of WSIs, despite its essential role in assisting pathologists’ diagnosis\. Moreover, existing approaches treat classification and segmentation as independent tasks, with segmentation primarily serving as an interpretability section\. To address this limitation, we propose a novel weakly supervised learning algorithm that unifies classification and segmentation within a framework\. Specifically, we explore the interconnections between patches and introduce class activation maps in WSI analysis through the proposed Sparse\-CAM backbone to activate the segmentation capability, and further enhance feature representation using the proposed subset\-matching module to improve both classification and segmentation performance\. The proposed method demonstrated superior performance in diagnosis and achieved state\-of\-the\-art performance in segmentation compared to other MIL methods across multiple datasets\. In addition, it offered high\-precision segmentation that is sensitive to micro\-tumor regions without pixel\-level annotations\. The code will be publicly available on GitHub upon acceptance\.

## ClusterSplat: Semantic Cluster Selection for 3D Visual Grounding in Gaussian Splatting

**Authors:** Jaesung Lee; Hyeontaek Hwang; Gabriel Manalu; Daeyoung Kim

**ID:** 152567 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SAk0iIw26c>) | [PDF](<https://openreview.net/pdf?id=SAk0iIw26c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152567>)

We study 3D visual grounding in 3D Gaussian Splatting \(3DGS\), where a referring expression should identify a target object as both a rendered 2D mask and a set of explicit 3D Gaussians\. Prior methods typically extract 3D targets by applying heuristic thresholding or top\-ratio filtering to dense primitive\-level relevance scores\. However, these scores often vary substantially across scenes and prompts, making such heuristics sensitive and leading to unstable targeting\. ClusterSplat addresses this by reframing 3D target selection as cluster\-level selection over scene\-adaptive candidates\. The method first learns instance\-aware Gaussian features, forms feature\-aware seed voxels, and merges neighboring seed voxels when a description\-length criterion decreases, producing a scene\-specific set of cluster candidates\. Given a referring expression, a query\-conditioned cluster scorer ranks the cluster candidates with a lightweight MLP, and the selected cluster directly defines the explicit 3D target while its cluster score is rendered for the 2D mask\. On ScanRefer, ClusterSplat achieves the best rendered 2D segmentation and explicit 3D target metrics among the compared 3DGS baselines\. It also obtains the best average Ref\-LERF scores, supporting the same trend under fine\-grained referring descriptions\. On ScanNet v2 class name queries, ClusterSplat achieves the strongest rendered 2D results and the highest 3D matching accuracy, while maintaining competitive 3D IoU\.

## How Far Is Too Far? Object Recognition Declines Monotonically with Semantic Distance

**Authors:** Domenic Bersch; Hai Van Tran; Gemma Roig

**ID:** 148472 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xY4SuwZDLZ>) | [PDF](<https://openreview.net/pdf?id=xY4SuwZDLZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148472>)

Vision models are sensitive to object\-background context, yet it remains unclear how recognition changes as the semantic distance between objects and backgrounds increases\. We introduce ImageNet\-OOC1k, a benchmark enabling continuous control of object\-background relationships via a consensus semantic dissimilarity axis\. This formulation reveals a highly consistent monotonic decline in recognition accuracy across 35 models spanning convolutional neural networks, Vision Transformers, and vision\-language models\. Internal analyses of Vision Transformers reveal aggregation failure, where object evidence is present at the patch level but not consolidated into the final prediction\. Leveraging this characterization, a simple spatial re\-ranking strategy recovers a subset of these errors and improves accuracy by up to 5\.4 percentage points\. These results establish context sensitivity as a continuous and predictable property of modern vision systems, with Vision Transformer analyses showing that failures can arise from limitations in aggregating competing signals rather than from missing object representations\.

## Query as a Resource: Activity\-Cost Guided Remote Sensing Domain\-Incremental Object Detection

**Authors:** Xi Yang; Zhengyu Yuan; De Cheng; Nannan Wang

**ID:** 148788 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v4SMwpRLeM>) | [PDF](<https://openreview.net/pdf?id=v4SMwpRLeM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148788>)

Remote sensing object detection often proceeds in a domain\-incremental manner, where detectors continuously encounter new domains arising from changes in regions, resolutions, sensors, and modalities\. This challenge is particularly severe when passive optical red\-green\-blue \(RGB\) imagery and active synthetic aperture radar \(SAR\) imagery coexist, because their distinct imaging mechanisms create large domain gaps\. Existing methods mainly rely on feature alignment or regularization, but often overlook semantic associations across heterogeneous domains\. The problem is more pronounced for DETR\-like detectors, where decoder queries act as object\-centric semantic slots and are easily disrupted by cross\-domain adaptation\. Under a query\-as\-resource view, we propose Q\-cost for remote sensing domain\-incremental object detection\. At the feature level, Q\-cost uses modality\- and domain\-aware prototypes to guide a two\-level mixture\-of\-experts adapter and generate encoder prompts for domain\-aware semantic aggregation\. At the semantic level, it models decoder queries as limited resources with domain\-dependent activity costs, and applies activity\-aware gating to regulate query updates according to current and historical domain demands\. Experiments on multiple remote sensing benchmarks show that Q\-cost effectively balances new\-domain adaptation and old\-domain retention under severe domain and modality shifts\. Our code is provided in the supplementary material\.

## Detect What You Need: Chain\-of\-Causal Reasoning for 3D Intent Grounding

**Authors:** Zihao Zhang; Aming WU; Yang Li; Yahong Han

**ID:** 153726 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JF39l5WGlk>) | [PDF](<https://openreview.net/pdf?id=JF39l5WGlk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153726>)

Accurately matching human intentions in 3D space is an important goal of artificial intelligence\. Recently, 3D Intention Grounding \(3D\-IG\) has emerged, aiming to localize target 3D objects given a natural\-language intent\. Unlike conventional visual grounding with descriptive referring expressions, 3D\-IG intents are abstract and non\-descriptive, making object localization substantially more challenging\. This requires inferring latent functional requirements from non\-descriptive intents and aligning them with object\-level 3D representations\. However, existing methods largely rely on implicit intent–object matching, leading to logical gaps and limited interpretability, robustness, and generalization\. To address these challenges, we propose Chain\-of\-Causal Reasoning \(CoCR\), a causality\-inspired functional dependency reasoning framework that explicitly bridges abstract intentions and candidate objects through intermediate functional requirements\. Specifically, CoCR progressively decomposes complex intents into ordered functional requirements, thereby forming an explicit intent–function–object reasoning chain that links abstract intentions to object suitability\.  Building on this chain, we construct a causality\-inspired functional dependency graph to model requirement\-\-attribute relationships and introduce a causal\-visual alignment module that aligns function\-aware representations with the geometric\-semantic features of 3D point clouds, enabling bidirectional verification between structured functional reasoning and visual evidence\. Extensive experiments on 3D Intention Grounding and 3D Visual Grounding demonstrate that our method enhances intent\-aware object localization\.

## DARE: Dual\-Level Adversarial Learning with Domain\-Aware Regularization for Whole Slide Image Classification

**Authors:** Yuxuan Jiang; Haichuan Dong; Manning Wang

**ID:** 154306 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Eh2LNe24lx>) | [PDF](<https://openreview.net/pdf?id=Eh2LNe24lx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154306>)

Pathological whole slide images \(WSIs\) from different hospitals often exhibit severe domain shifts due to variations in scanning devices, staining protocols, and tissue preparation procedures\. This leads to significant performance degradation when a trained model is applied to data from different sources\. Although unsupervised domain adaptation \(UDA\) has achieved strong performance in transferring a model trained on a source domain to an unlabeled target domain in natural images, it is much less studied in the computational pathology field\. This is due to the unique properties of WSIs, including ultra\-high resolution and strong inter\-slide and intra\-slide heterogeneity\. As a result, existing UDA methods are often unstable and may even cause negative transfer in WSI classification\. To address this issue, we propose Dual\-level Adversarial learning with domain\-aware REgularization \(DARE\) for WSI Classification\. Specifically, we design an adaptive pseudo\-labeling framework with a teacher\-student architecture to provide stable supervision for the target domain and perform adversarial alignment on both patch\-level and slide\-level embeddings\. This enables joint optimization of patch\-level and slide\-level semantic embeddings for dual\-level alignment across domains\. We also introduce domain\-aware attention masking to regularize attention and improve cross\-domain generalization\. We evaluate our method on four public WSI datasets through extensive experiments\. The results show that our method consistently outperforms state\-of\-the\-art approaches across various domain shifts\.

## HIRaD: Hidden Interaction Inference from Predictive Radar Dynamics

**Authors:** Jaekwon Lee; Jaekoo Lee

**ID:** 154068 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GPulVqYgS1>) | [PDF](<https://openreview.net/pdf?id=GPulVqYgS1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154068>)

Millimeter\-wave radar point clouds provide a visually privacy\-preserving representation for human motion analysis, but object\-related interactions remain difficult to describe because the object evidence that defines the interaction is not always separable or consistently observable in sparse radar returns\. We address this problem without direct object detection\. Instead, we infer hidden interaction semantics from the temporal structure of observation\-conditioned corrections to predicted body motion, motivated by the view that object affordances shape how the body moves\. To this end, we propose HIRaD, a radar semantic sensing framework that organizes sparse radar returns into a predictive node\-structured latent state of local motion carriers\. It represents interaction\-relevant cues as corrective residual trajectories between a motion\-continuation prior and an observation\-conditioned posterior, and compresses these trajectories into a language\-aligned semantic bottleneck\. A structured prefix conditions a frozen autoregressive language model on both the semantic bottleneck and node\-level motion summaries, separating compact interaction\-level cues from node\-level motion evidence\. Experiments show that our proposed method improves radar captioning and interaction understanding under weak object observability over strong baselines, while ablations validate the importance of radar\-conditioned prefixing, latent state representation, and residual trajectory modeling\.

## BiHashFormer: Hash\-Driven Dual\-Branch Transformer for Efficient Object Detection in HRW Shots

**Authors:** Jingchen Huang; Wenxi Li; Chenyang Lyu; Moran Liu; Haozhe Lin; Yuchen Guo

**ID:** 152107 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VT9aN17Fbk>) | [PDF](<https://openreview.net/pdf?id=VT9aN17Fbk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152107>)

Recent advances in gigapixel\-level imaging have brought High\-Resolution Wide shots to the forefront of research\. However, these images present significant challenges: extreme sparsity of foreground, gigapixel\-level resolutions and interleaving of foreground and background\. This causes traditional detectors and attention mechanisms to be hindered by background, resulting in inefficiency and inaccuracy\. To tackle this problem, we propose BiHashFormer, a dual sparsified branch transformer built on hashing\. RoI Selector will predict the foreground proportion for top\-k selecting target\-containing windows\. The compression branch processes windows selected and refines attention into HashAttention by discarding half of the key–value pairs, reducing cost and improving efficiency\. The compensation branch uses HashMiner to perform low\-cost hash searches in the remaining regions, recovering features of missed objects\. Experiments confirm that the selection relationship in HashAttention is one\-way and reveal the preference of different queries for keys\. In experiments on the gigapixel benchmark PANDA, BiHashFormer reduces 37\.5\\% backbone FLOPs while improving $\\text\{AP\}\_\{50\}$ to 81\.0\\%\. Moreover, this parallel dual\-branch structure allows the model to avoid inference delays caused by inter\-branch dependencies, while achieving much greater stability than single\-branch models, specially with low rates of RoI selection\.

## Hierarchical Cross\-Class Part Alignment for Prototypical Part Networks via Hyperbolic Entailment

**Authors:** Keisuke Sano; Takayoshi Yamashita; Hironobu Fujiyoshi

**ID:** 153644 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jn0nBdpogW>) | [PDF](<https://openreview.net/pdf?id=Jn0nBdpogW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153644>)

In fine\-grained image recognition, semantic parts \(e\.g\., wings, head\) recur across classes while discriminative cues lie in within\-part features \(e\.g\., yellow wings, striped wings\)\. The prototypical part network \(ProtoPNet\) is an interpretable model that provides case\-based explanations for image recognition by measuring similarities between local patches in an images and their closest prototypes representing patches in a training set\. However, existing ProtoPNet variants do not explicitly model this two\-level structure, causing prototypes for the same anatomical part to fragment across classes\. We propose a hierarchical prototype learning framework that separates shared prototypes capturing cross\-class part concepts from class\-specific prototypes capturing intra\-part features\. To model this hierarchy geometrically, prototypes are embedded in hyperbolic space and an entailment loss constrains each class\-specific prototype to lie within the cone of its corresponding shared prototype\. To prevent degenerate trivial solutions such as redundant prototypes, we introduce a patch\-level contrastive learning using pseudo patch IDs from a vision foundation model, used only at training time, leaving the backbone choice free at inference\. Unlike prior hyperbolic prototype methods where prototype hierarchies are uncontrolled, our framework defines explicit shared part to intra\-part feature correspondences\. Across four ProtoPNet variants and four backbones on CUB\-200\-2011 and Stanford Cars, our method improves classification accuracy by up to 10 points, raises hierarchical part hierarchy IoU from 11\\% to 75\\%, and consistently improves four interpretability metrics on CUB\-200\-2011\.

## HyrCap: Hybrid Rank\-Calibration of Action Proposals for Temporal Event Understanding

**Authors:** Rui Chen; Xingyu Chen; Pengxin Xu; Kai Chen; Junzhi Yu

**ID:** 153390 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Lit9u39kC9>) | [PDF](<https://openreview.net/pdf?id=Lit9u39kC9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153390>)

Temporal action detection in long untrimmed videos still suffers from inaccurate temporal localization and low\-quality proposals, especially under sparse temporal annotations and ambiguous event boundaries\. In the context of open\-ended video understanding and LLM\-driven event analysis, reliable temporal action proposals have emerged as a critical interface bridging temporal localization, event annotation, and semantic understanding\. However, conventional temporal action detection \(TAD\) pipelines lack explicit modeling of proposal localization quality, cross\-representation support, and inter\-proposal relations, making it difficult to consistently provide high\-quality proposals\. We propose Hybrid Rank\-Calibration of Action Proposals \(HyrCap\), a proposal\-centric query\-based TAD framework for temporal event understanding\. In HyrCap, Hybrid denotes the use of complementary video features that provide different temporal localization cues, while Rank\-Calibration refers to calibrating the ranking confidence of dense action proposals so that it better reflects proposal localization reliability and candidate competition\. HyrCap treats dense query\-based predictions as an over\-complete temporal event hypothesis space and improves the ranking reliability, localization quality, and candidate discrimination of action proposals through modules such as Cross\-Representation Consensus Calibration, Localization Quality Estimation, and Proposal Duplication Suppression\. Furthermore, inspired by the strong capability of LLMs in fine\-grained semantic recognition, event description, and reasoning, we introduce HyrCap for Semantic Action Understanding: calibrated proposals can be used for standard TAD detection and as inputs for LLM\-based semantic understanding\. We further define a staged evaluation protocol to separately measure event localization ability, segment\-level semantic understanding, and their combined event understanding performance\. Experiments on public benchmarks show that HyrCap achieves state\-of\-the\-art performance across multiple metrics and provides a more fine\-grained paradigm and evaluation protocol for query\-based event segmentation and annotation\.

## MixForensics: Blend Before You Encode for Generalizable AI\-Generated Video Detection

**Authors:** Ruiqi Liu; ZiAn Wang; Ruoxin Chen; Xuehai Bai; Manni Cui; Ziheng Qin; Zhiyuan Yan; Shu Wu; Wenhao Wang

**ID:** 154656 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BzzvL3RHzi>) | [PDF](<https://openreview.net/pdf?id=BzzvL3RHzi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154656>)

Detecting AI\-generated videos \(AIGV\) in a generator\-agnostic manner is increasingly important as generative models close the gap with real footage, and a video, with many frames, intuitively offers richer forensic evidence than a single image\. Yet existing detectors fall short of this expectation: under the encode\-then\-fuse paradigm, increasing the frame budget from 1 to 8 improves a voting\-based image detector by only 5\.28%, and even temporal\-modeling backbones such as TimeSformer barely improve on this\. Per\-frame predictions are also noisy: per\-frame logits fluctuate substantially within a video and correlate weakly with any frame\-level proxy\. We trace the cause not to the aggregation step but to per\-frame encoding severing multi\-frame cues before they can interact, leaving any post\-hoc selection, weighting, or aggregation strategy without a reliable basis\. We therefore propose \*\*MixForensics\*\*, a blend\-then\-encode framework that combines multiple frames in the pixel domain into a single composite image \(Stochastic Frame Blending, SFB\) and regularizes the encoder for consistency across blended views \(Blend Invariance Regularization, BIR\)\. To stress\-test this approach, we further introduce \*\*MixForensics\-Bench\*\*, a test\-only benchmark covering ten recent generators \(including five closed\-source commercial platforms\) and two partial\-forgery scenarios \(temporal splicing and conditional continuation\), with matched controls that isolate generative artifacts from editing artifacts\. On AIGVDBench and MixForensics\-Bench, MixForensics outperforms the strongest baseline by 1\.27% and 8\.11% on the fully\-fake splits, leads on both partial\-forgery scenarios by 11\.49% on temporal splicing and 9\.15% on conditional continuation, and uses fewer encoder forward passes than per\-frame methods\.

## Uncertainty\-Aware Listwise Reinforcement Fine\-Tuning for Fine\-Grained Visual Classification

**Authors:** Tan Zhi; Hulingxiao He; Yuxin Peng

**ID:** 154574 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CYOjPaQTZA>) | [PDF](<https://openreview.net/pdf?id=CYOjPaQTZA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154574>)

Fine\-grained visual classification \(FGVC\) with Multimodal Large Language Models \(MLLMs\) remains challenging, as visually similar subordinate categories inherently induce classification uncertainty due to subtle inter\-class differences\. Existing reinforcement learning methods typically require the model to generate a single class name and optimize it with sparse correctness rewards\. However, a seemingly incorrect prediction can still provide highly informative signals if it falls within the same local confusion set as the ground\-truth class\. By treating all non\-exact matches as equally wrong, the rigid single\-answer paradigm overlooks these valuable near\-misses\. Consequently, it fails to capture the model's intrinsic uncertainty and provides limited learning signals\. To address these limitations, we propose List\-GRPO, an uncertainty\-aware listwise Group Relative Policy Optimization framework\. Rather than enforcing a single prediction, our method prompts the model to adaptively generate a ranked candidate list, explicitly capturing its predictive uncertainty\. Furthermore, to mitigate the advantage vanishing when online exploration completely misses the target, we introduce a dynamic ground\-truth anchored response strategy\. We synthesize an off\-policy anchor by prepending the ground truth to the most frequent hard negatives mined from online samples\. To prevent the anchored response from dominating learning, we isolate the advantage estimation of online samples from the anchored response and use a gating coefficient to modulate its contribution\. Extensive experiments on multiple fine\-grained benchmarks demonstrate that List\-GRPO significantly improves Top\-1 accuracy while maintaining high ground\-truth coverage with only about three candidate predictions on average\.

## OFBD: Object\-Focused Background Debiasing for Long\-Tailed Learning

**Authors:** Shenghan Chen; Yiming Liu; Zhipeng Deng; Haolin Wang; Jiale Zhou; Zhijian Wu; Lu Xiankai; yafei ou; Yefeng Zheng

**ID:** 152979 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OuD9gP9e2o>) | [PDF](<https://openreview.net/pdf?id=OuD9gP9e2o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152979>)

Balancing performance trade\-offs on long\-tailed data distributions remains a long\-standing challenge in visual recognition\. Existing methods mainly improve tail classes through re\-balancing, representation learning, or data augmentation, but the underlying cause of tail classes degradation is still insufficiently explored\. In this paper, we find that standard long\-tailed training induces background\-biased representation and optimization: tail classes suffer larger background distribution shifts and become increasingly driven by background gradients\. This reveals that tail degradation is not merely caused by insufficient samples, but also by the learning of irrelevant background features\. To tackle this issue, we propose Object\-focus Background Debiasing \(OFBD\), a framework that mitigates background bias from both distribution and optimization perspectives\. Specifically, Foreground\-guided CutMix preserves target\-related foregrounds while diversifying complementary backgrounds, and Background\-guided Feature Rectification suppresses background\-biased features without learnable parameters or additional training\. Extensive experiments show that our method improves overall accuracy, achieves significant tail\-class gains, and can serve as a plug\-in for mainstream long\-tailed methods without external data or pretrained recognition models\.

## Dynamic Query as Budgeting for Tiny Object Detection

**Authors:** Yi Zhang; Di Xiong; Ge Gao; Xiangyue Zhang; yihang qiu; Yuxuan Zhou; Shuo Chen

**ID:** 154187 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FZOopPouyA>) | [PDF](<https://openreview.net/pdf?id=FZOopPouyA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154187>)

Recent DETR\-based tiny object detectors adopt dynamic\-query mechanisms to handle density imbalance\. However, existing designs entangle two effects: how many and which queries are decoded\. This entanglement obscures what actually drives the gains, thereby hindering principled dynamic\-query design; additional learned predictors or heuristic filtering steps also introduce extra overhead and inevitable decision errors, which can undermine practicality and final gains\. In this paper, we disentangle these effects and show that dynamic query primarily acts as budgeting\-\-\-allocating decoder query capacity according to object density\. Motivated by this view, we formulate a monotonic and conservative budgeting principle and propose a budgeting\-based DETR \(BUTR\), a streamlined framework that implements dynamic query by using a lightweight, training\-free budgeter to estimate an input\-dependent query budget $K\(x\)$ from encoder confidences\. BUTR applies standard Top\-$K\(x\)$ query initialization, removing heuristic filtering, learned components, and complex selection logic\. On AI\-TOD\-v2 and VisDrone, BUTR shows clearer density\-aligned query allocation behavior than prior dynamic\-query detectors and improves AP by more than 0\.5, while using about half as many queries with fewer parameters and GFLOPs, requiring over 2$\\times$ less training time, and delivering 4$\\times$ faster inference\. Additional COCO results further indicate its applicability across a broad spectrum of detection scenarios\.

## Less is More: Compact\-Token Masked Feature Learning for Skeleton Representation Learning

**Authors:** Jeonghyeok Do; Yun Chen; Geunhyuk Youk; Munchurl Kim

**ID:** 153560 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KUcwclmRbm>) | [PDF](<https://openreview.net/pdf?id=KUcwclmRbm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153560>)

Current skeleton representation learning paradigms face distinct limitations: Contrastive Learning \(CL\) often overlooks fine\-grained motion details, while Masked Auto\-Encoders \(MAE\) rely on coordinate\-level reconstruction\. This reconstruction inherently demands dense token sequences and heavy decoders, wasting pre\-training computation on discarded components and forcing downstream inference to process dense token grids\. To resolve these bottlenecks, we propose SLiM \(Skeleton Less is More\), a compact\-token framework that unifies masked feature prediction and contrastive learning via a shared encoder\. By shifting the objective from raw coordinate reconstruction to decoder\-free, teacher\-guided feature prediction, SLiM breaks the reliance on dense tokenization and enables effective learning with a highly compact token grid\. Crucially, to prevent trivial shortcut learning arising from strong inter\-joint dependencies of human, we introduce Semantic Tube Masking together with Skeleton\-Aware Augmentations to enforce deep skeletal\-temporal reasoning and anatomical consistency\. Extensive experiments across multiple downstream protocols demonstrate that SLiM achieves state\-of\-the\-art performance while structurally reducing inference computation by 7\.89$\\times$ compared to dense\-token MAE baselines\.

## TIGER\-FG: Text\-Guided Implicit Fine\-Grained Grounding for E\-commerce Retrieval

**Authors:** Xinyu Sun; Huangyu Dai; Lingtao Mao; Zexin Zheng; Zihan Liang; Ben Chen; Chenyi Lei; Wenwu Ou

**ID:** 154023 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gpkn9M7pZW>) | [PDF](<https://openreview.net/pdf?id=Gpkn9M7pZW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154023>)

E\-commerce image search often takes a cropped image as the query, while each candidate is represented by full item images and structured text\. This image\-to\-multimodal retrieval setting presents two asymmetries: a modality disparity \-\- a visual query must match image\-\-text items, and a granularity disparity  \-\- a cropped query must be compared with full images containing background context and possible distractors\. Detection\-based pipelines handle the granularity disparity through explicit localization but incur extra cost and error propagation, whereas CLIP\-style encoders avoid detection, but are vulnerable to backgrounds or irrelevant items\. To address these limitations, we propose TIGER\-FG, a text\-guided implicit fine\-grained grounding framework for image\-to\-multimodal e\-commerce retrieval\. TIGER\-FG uses item text as semantic guidance to produce target\-focused item representations without object detection for retrieval\. We further introduce dual distillation objectives that preserve target\-region spatial consistency and query\-\-item similarity structure, yielding more stable and discriminative multimodal representations\. In addition, we construct ECom\-RF\-IMMR, a realistic benchmark suite with a 10M\-pair training set and two evaluation benchmarks covering standard and cluttered item layouts\. TIGER\-FG improves Recall@1 over the strongest baseline by 6\.1 and 34\.4 percentage points on the two evaluation benchmarks, respectively, with only 85\.7M query\-side parameters and 256\-dim embeddings\. Results on public e\-commerce benchmarks further demonstrate its generalization to noisy and one\-to\-many retrieval scenarios\. Code and data will be released\.

## CausalAffect: Causally Guided Learning of Psychology\-Aligned Facial Affect Relations

**Authors:** Guanyu Hu; Tangzheng Lian; Dimitrios Kollias; Oya Celiktutan; Xinyu Yang

**ID:** 148159 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zrt8lyUHkP>) | [PDF](<https://openreview.net/pdf?id=zrt8lyUHkP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148159>)

Facial affect understanding is not merely an image\-to\-label prediction problem: it requires identifying activated facial Action Units \(AUs\), modeling how AUs facilitate or inhibit one another, and explaining how AU configurations give rise to expression states\. Such causal relations have long been studied in cognitive psychology and psychophysiology, where FACS, the Component Process Model, and motor synergy theories provide rich causal priors about facial behavior\. In computer vision, however, data\-driven facial affect models still largely learn correlational structures; even structured AU\-aware methods often produce dependencies that are not well aligned with psychological priors\. This leaves a persistent gap between biological facial mechanisms and learned visual representations, as observational facial images do not provide direct biological interventions and existing methods lack a principled way to recover psychology\-aligned relations from data\. We propose CausalAffect, a weakly supervised, causally guided framework for learning psychologically aligned facial affect relations from data\. CausalAffect models two complementary relation types, AU$\\rightarrow$AU and AU$\\rightarrow$Expression, within a two\-level hierarchy: a global graph capturing population\-level psychology\-aligned relations, and a sample\-adaptive graph refining this backbone for individual variability\. Reliable relation learning is supported by disentangled AU bottleneck representations, polarity\-aware message passing, and feature\-level counterfactual intervention\. The learned relations recover canonical literature\-supported pathways, reveal plausible inhibitory and sample\-specific dependencies, are positively validated in a blind expert study, and exhibit intervention\-consistent behavior under image\-level AU edits\. Experiments on six benchmarks show consistent improvements on both AU detection and facial expression recognition\.

## PRISM: Priority\-Guided Scanning in the Wavelet Domain for UAV Maritime Small Object Detection

**Authors:** Pengqi Gao; Fan Shi; Mianzhao Wang; Jiangpeng Zheng; Xu Cheng; Shengyong Chen

**ID:** 152844 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Pwl0o1ErZL>) | [PDF](<https://openreview.net/pdf?id=Pwl0o1ErZL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152844>)

Sparse object detection remains difficult when weak target evidence occupies only a few pixels and shares local statistics with surrounding clutter\. This failure is not merely due to limited model capacity, but to a representation bottleneck: spatial domain features mix target edges, clutter textures, and scene context before they can be reliably separated\. We propose PRISM, a wavelet domain detector that treats this problem as frequency separated representation learning followed by priority ordered feature interaction\. PRISM decomposes each scene into directional high frequency evidence and global low frequency context, models the two streams with dedicated encoders, and fuses them through a learned content adaptive causal scan that lets likely target regions guide feature interaction before clutter dominated regions participate\. Multi scale features are then reconstructed by inverse wavelet synthesis with adaptive gates and passed to a standard detection head\. On low altitude UAV maritime benchmarks, including SeaDronesSee and AFO, PRISM achieves state\-of\-the\-art performance with the largest gains on the smallest targets\. Without architectural modification, it also transfers to aerial urban imagery on VisDrone, suggesting that priority ordered fusion of directional frequency evidence is a generalizable design principle for sparse visual signal detection\.

## Domain\-Conditioned Class Imbalance: Why Global Class Balance Fails Across Domains

**Authors:** Yongkun Deng; NAN YANG; Xiatong Guo; Zhiyong Wang; Dong Yuan

**ID:** 154451 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DSwaLAA6lD>) | [PDF](<https://openreview.net/pdf?id=DSwaLAA6lD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154451>)

Modern visual recognition systems increasingly rely on unlabeled images collected from diverse visual domains\. A common goal in dataset construction is to avoid obvious marginal imbalance, such as skewed class totals or uneven domain sizes\. However, marginal balance can be misleading in multi\-domain data: even when per\-class totals and per\-domain sample sizes are balanced, sample allocations can be highly skewed across domain\-class pairs\. We call this hidden conditional skew Domain\-Conditioned Class Imbalance \(DCI\), where class imbalance is revealed only after conditioning on domain context\. For controlled evaluation, we fix class and domain marginals and vary only the joint domain\-\-class allocation, making the effect of domain\-conditioned imbalance directly measurable\. To address this challenge, we propose HyperIDAC, a hypernetwork\-based classifier for multi\-domain imbalance\. HyperIDAC infers domain priors from visual features and lightweight zero\-shot predictions, then dynamically generates instance\-specific classifier parameters and domain\-conditioned class embeddings\. This design yields domain\-sensitive decision boundaries while leveraging CLIP semantics to support underrepresented domain\-\-class pairs\. Furthermore, a multi\-level pseudo\-labeling module combines teacher–student training with historical label tracking and a fallback for low\-confidence samples, mitigating bias reinforcement in unlabeled settings\. Extensive experiments on four multi\-domain benchmarks under three regimes show that HyperIDAC substantially outperforms state\-of\-the\-art methods, highlighting the value of domain\-aware hypernetwork\-based adaptation under DCI\.

## C2FT: Enhancing Fine\-Grained Perception in MLLMs via Confuse\-then\-Contrast Fine\-Tuning

**Authors:** Shaoxuan He; Benlei Cui; Shikai Qiu; Yuwen Zhai; Hui Xue&amp;amp;\#x27;; Longtao Huang; Jingqun Tang; Haiwen Hong

**ID:** 151433 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aktp1wVAdL>) | [PDF](<https://openreview.net/pdf?id=aktp1wVAdL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151433>)

Multimodal Large Language Models \(MLLMs\) have demonstrated remarkable capabilities, yet they frequently struggle with fine\-grained visual perception, often suffering from hallucinations when faced with visually similar but semantically distinct instances\. A major underlying cause is the conventional single\-sample Supervised Fine\-Tuning \(SFT\) paradigm, which isolates training instances and limits the model's ability to explicitly learn subtle discriminative boundaries\. To address this, we propose \*\*C2FT\*\*, a novel \*\*Confuse\-then\-Contrast Fine\-Tuning\*\* framework that enhances fine\-grained perception by shifting from independent supervision to joint supervision\. Specifically, C2FT assesses the MLLM's internal uncertainty to dynamically mine model\-specific semantic confusions, subsequently constructing challenging multi\-image groups comprising hard positive and hard negative samples\. By interleaving these samples into a unified prompt, our approach forces the MLLM's internal attention mechanisms to cross\-reference images and explicitly capture localized visual discrepancies\. Extensive experiments on both Fine\-Grained Visual Classification \(FGVC\) and visual question answering \(VQA\) benchmarks demonstrate the effectiveness of C2FT\. For instance, on the Qwen3\-VL\-4B model, our approach achieves an average improvements of 3\.87\\% and 4\.35\\% points over standard SFT and GRPO baselines, respectively\.

## RobustGenBench: A Benchmark for Robust Generalization to Adversarial and Common Perturbations, with Applications to Vision and Vision\-Enabled Large Language Models

**Authors:** Maxime Heuillet; Jonas Ngnawé; Yann Pequignot; Rishika Bhagwatkar; Alexandre Larouche; Irina Rish; Christian Gagné; Ola Ahmad; Audrey Durand

**ID:** 139536 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KDsuVST8by>) | [PDF](<https://openreview.net/pdf?id=KDsuVST8by>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139536>)

Robust generalization \(i\.e\., how models behave across diverse perturbation settings\) is poorly understood for modern classification techniques such as robust fine\-tuning from pretrained backbones and zero\-shot classification with vision\-enabled large language models \(Ve\-LLMs\)\. We introduce \\texttt\{RobustGenBench\}, a standardized benchmark of six classification datasets with reproducible evaluation splits and a unified perturbation protocol covering adversarial \($\\ell\_1, \\ell\_2, \\ell\_\{\\infty\}$\) and common perturbations\. Using \\texttt\{RobustGenBench\}, we conduct one of the most comprehensive studies of robust fine\-tuning to date \(40 pretrained backbones, 2 robust losses, and 3 adaptation protocols yielding 7\{,\}200 robustness measurements\)\. We find that convolutional architectures with TRADES perform best at base scale, and the advantage of TRADES over Classic AT widens as size grows, and that hybrid architectures unlock competitive robust generalization\. We further evaluate two frontier Ve\-LLMs \(GPT\-4o mini, Gemini 3 Flash\) and show that they exceed robust fine\-tuned vision models on clean and common perturbations, and exhibit a striking resilience to $\\ell\_1$ perturbations that fine\-tuned models lack\. By evaluating both modeling techniques on the same tasks and perturbation settings, \\texttt\{RobustGenBench\} provides a unifying view of robust generalization across these regimes\.

## $\\texttt\{bispectrum\}$: Selective $G$\-Bispectra Made Practical

**Authors:** Johan Mathe; Adele Lantow; Simon Mataigne; Nina Miolane

**ID:** 148783 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v6QHAQkjiQ>) | [PDF](<https://openreview.net/pdf?id=v6QHAQkjiQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148783>)

Many machine learning tasks are invariant under the action of a group $G$ of transformations: signal classification can be invariant under translations, image classification under 2D rotations, and spherical\-image classification under 3D rotations\. The $G$\-bispectrum is a principled complete invariant of a signal \)retaining all signal's information up to the group action\) with proven benefits in machine learning and as a pooling layer in deep networks\. However, its deployment has been hampered by high computational cost and a patchwork of group\-specific implementations\. We present bispectrum, an open\-source, fully unit\-tested PyTorch library that implements selective $G$\-bispectra for seven different group actions, as differentiable modules that can be directly incorporated into machine learning pipelines and deep learning architectures\. For finite groups $G$, selectivity reduces the computational cost from $O\(\|G\|^2\)$ to $O\(\|G\|\)$\. For planar rotations, we leverage the disk bispectrum\. For spherical 3D rotations, we introduce an augmented selective bispectrum at band\-limit $L$ which reduces the cost from $O\(L^3\)$ to $\\Theta\(L^2\)$ coefficients\. We profile the entire library \(for

## Overcoming Kernel Redundancy for Scaling Logic Gate Networks

**Authors:** Sejin Park; Hongjae Lee; Changwoo Han; Seung\-Won Jung

**ID:** 149563 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pBQwXLxijA>) | [PDF](<https://openreview.net/pdf?id=pBQwXLxijA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149563>)

Differentiable logic gate networks, which operate using only logic gates, have recently attracted attention as an efficient alternative to conventional neural networks\. However, despite their efficiency, the scaling behavior of logic gate networks remains underexplored\. By contrast, scaling model capacity is a central design principle in deep neural networks and typically leads to improved performance\. This discrepancy raises a key question: Can similar scaling benefits also be achieved in logic gate networks? In this work, we focus on width as a primary scaling axis and conduct a systematic analysis of its behavior in logic gate networks\. We observe that naive width scaling often introduces redundancy among logic kernels, limiting the effective use of additional kernels and leading to performance saturation\. To address this limitation, we propose a dynamic logic kernel framework that reorganizes kernel utilization by promoting specialization across kernel groups\. This enables the network to better utilize increased width via input\-dependent kernel routing, while ensuring that both routing and computation are implemented entirely with gate\-level Boolean operations at inference time\. We further find that kernel redundancy is most pronounced at the first gate level, motivating an early\-stage dynamic logic kernel strategy that concentrates adaptation at this level\. Experimental results demonstrate that our approach improves kernel utilization and increases kernel diversity, leading to higher accuracy with improved parameter efficiency\.

## Rare\-Class Signal Suppression in Long\-Tailed Multi\-Expert Fine\-Tuning

**Authors:** Zhiheng Gong; YuHeng Yang; Pengkun Wang; Yang Wang

**ID:** 150905 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eXqF5uD4aN>) | [PDF](<https://openreview.net/pdf?id=eXqF5uD4aN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150905>)

Multi\-expert ensemble frameworks have achieved strong performance on long\-tailed visual recognition by training heterogeneous expert heads on a shared backbone, but their gradient coordination strategies are inherited from balanced multi\-task learning, where resolving directional conflict is the canonical challenge\. We show that head\-class bias acts sequentially across three pipeline interfaces, namely loss geometry, gradient coordination, and inference fusion, forming a suppression cascade in which rare\-class gradient energy can be erased before it influences model parameters, a failure mode that direction\-focused analysis cannot detect\. A controlled study reveals that direction\-modifying and simple\-aggregation solvers are statistically equivalent once rare\-class source signal is amplified, while energy\-balancing objectives erase this amplification entirely\. To break this cascade, we propose Gale \(Gradient\-energy Allocation for Long\-tail Ensembles\), a framework that applies gradient\-energy allocation at every cascade stage, amplifying tail\-class source signal through frequency\-calibrated loss geometry, preserving it through a non\-penalizing coordination rule, and routing predictions through class\-specific expert competence\. On CIFAR\-100\-LT \(ρ=100\), Gale achieves 59\.2% overall accuracy and 46\.1% few\-class accuracy across four seeds \(σ=0\.23%\), surpassing the prior best by \+6\.2%, with consistent improvements on ImageNet\-LT and iNaturalist 2018\. Code is available at Supplementary Material\.

## Playing ZendoWorld: Challenging AI Agents on Active Visual Concept Induction

**Authors:** Sophia Koehler; Antonia Wüst; Inga Ibs; Top Piriyakulkij; Wolfgang Stammer; Constantin Rothkopf; Kevin Ellis; Kristian Kersting

**ID:** 154712 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BZmvSJeoow>) | [PDF](<https://openreview.net/pdf?id=BZmvSJeoow>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154712>)

A central challenge in building intelligent systems is enabling agents to jointly perceive complex inputs, form hypotheses about hidden patterns, and design informative experiments to test them\. To study this problem, we propose ZendoWorld, a controlled interactive environment in which agents must infer a logical rule about visual game observations, acquire information by proposing new scenes, and refine their hypotheses based on feedback from the game environment\. We evaluate several agents spanning pure VLM reasoning, Bayesian particle filtering, dynamic concept discovery, and neuro‑symbolic methods\. Our main findings are: \(1\) high accuracy in predicting labels for observed examples does not imply recovery of the underlying rule; \(2\) perception and induction are distinct bottlenecks for different agent classes; and \(3\) VLM‑based agents propose near‑uninformative experiments, failing to actively reduce hypothesis uncertainty\. To compare these results, we collect human data on the task, which reveals a gap in inductive reasoning, particularly for more complex rules\. Overall, ZendoWorld takes an important step toward evaluating intelligent agents and identifies concrete avenues for improvement, particularly in domains like scientific discovery\.

## MLLM Makes Strong Backbone for Multi\-Modal Object Detection

**Authors:** Yifeng Yang; Yutong Li; Jubo Feng; Qinying Gu; Cewu Lu; Guang\-Zhong Yang; Xinbing Wang; Nanyang Ye

**ID:** 148801 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v1agOOP2QN>) | [PDF](<https://openreview.net/pdf?id=v1agOOP2QN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148801>)

Multimodal large language models \(MLLMs\) provide a promising alternative by taking object detection as a sequence generation task\. However, applying MLLMs to multimodal object detection poses challenges in visual cross\-modal \(RGB\-Infrared\) fusion and coordinate prediction under Cross\-Entropy supervision\.  In this paper, we propose a novel MLLM\-based object detection framework that addresses these challenges through improving visual cross\-modal token alignment and coordinate generation\. Specifically, we formulate RGB\-IR fusion as pre\-decoding token\-space modality routing, implemented by the Cross\-Modal Complementary Adapters and the Visual Token\-wise Router\. We further reformulate coordinate\-token learning as scale\-adaptive neighborhood likelihood maximization through our proposed Geometry\-Aware Loss, bridging discrete token prediction and continuous geometric localization\. Extensive experiments show that our method achieves state\-of\-the\-art performance, reaching 67\.81\\% mAP@0\.5 under in\-distribution scenarios, outperforming existing baselines by over 8\\%, while also exhibiting strong generalization to out\-of\-distribution and referring object detection tasks\.

## Manifold Embedding of Deep Image Features for Image Matching via Neural Adjoint Maps

**Authors:** Nafie El Amrani; Moritz Heep; Florian Bernard

**ID:** 149523 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pVexlKkL27>) | [PDF](<https://openreview.net/pdf?id=pVexlKkL27>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149523>)

Estimating semantic correspondences between different object instances of similar categories in real\-world images is a fundamental challenge in computer vision\. While the recent progress in foundation models has significantly advanced solutions for such difficult image correspondence problems, respective methods are often insufficiently regularised\. For example, common nearest\-neighbour matching with foundation model features often results in noisy correspondences, which is particularly prominent when solving for dense correspondences\. In this work, we tackle image matching via functional maps, which have been popularised for 3D shape matching due to their powerful spectral formalism utilising an efficient low\-dimensional linear representation\. However, functional maps require that domains \(in our cases the rectangular image grids\) are equipped with an informative and non\-trivial geometry\. To define a meaningful manifold structure for images, we use Galerkin's method from finite elements to derive a discrete Laplace\-Beltrami operator \(LBO\) based on a manifold embedding of deep image features\. Further, we leverage a neural adjoint map that allows to represent non\-linear mappings\. We demonstrate that our method sets the new state of the art among zero\-shot image correspondence methods on multiple dense correspondence benchmarks of real\-world images\.

## Order Matters: Competition\-Guided Query Ordering for RNN\-Based Object Detection

**Authors:** SHENGJIAN WU; Li Sun; Yu Shangguan; Qingli Li

**ID:** 152864 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PoXySrgd0e>) | [PDF](<https://openreview.net/pdf?id=PoXySrgd0e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152864>)

DETR\-style detectors use one\-to\-one bipartite matching during training to assign object queries to ground\-truth objects, enabling end\-to\-end set prediction without non\-maximum suppression \(NMS\)\. However, without an explicit de\-duplication procedure, multiple queries can still produce highly similar hypotheses for the same object, making training unstable and predictions less decisive\. Inspired by the sequential ordering of NMS, we propose DETRNN, a plug\-and\-play module that turns unordered object queries into a competition\-aware sequence for recurrent refinement\. DETRNN builds an explicit confidence\-and\-similarity based order from prior predictions, then refines queries with an RNN along this order to model competition inside the decoder\. This ordered recurrent refinement reduces redundant predictions, stabilizes optimization, and improves final detection accuracy\. Experiments on multiple DETR\-style detectors show consistent gains with comparable efficiency\. Code will be released on GitHub\.

## ProAlign: Progressive Positional and Prototype\-Guided Alignment for Aerial\-Ground Person Re\-Identification

**Authors:** Qiao Li; Jing Chen; Cong Wu; Kun He; Ruiying Du; Shuwei Li

**ID:** 151763 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YEBICnUue3>) | [PDF](<https://openreview.net/pdf?id=YEBICnUue3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151763>)

Aerial\-Ground Person Re\-Identification \(AG\-ReID\) aims to match pedestrian images captured by unmanned aerial vehicles \(UAVs\) and ground\-based surveillance cameras\. The task remains highly challenging due to severe viewpoint discrepancies, frequent occlusions, and substantial domain gaps between aerial and ground imagery\. Beyond these observable factors, existing methods often overlook two fundamental structural issues: cumulative positional drift during hierarchical feature extraction and semantic inconsistency across cross\-view feature distributions\. To address these challenges, we propose ProAlign, a Progressive Positional and Prototype\-Guided Alignment Network for AG\-ReID\. ProAlign comprises two key components: a Layer\-wise Progressive Positional Embedding \(LPPE\) module and a View\-Aware Prototype Contrastive Learning \(PCL\) module\. LPPE performs adaptive positional calibration throughout transformer layers by employing conditional positional encoding in shallow layers to mitigate local spatial distortions, while introducing learnable static positional embeddings in deeper layers to reinforce global semantic priors\. Meanwhile, PCL maintains view\-specific aerial and ground prototypes for each identity and enforces cross\-view semantic consistency via a dual\-prototype contrastive objective\. Extensive experiments on the challenging CARGO benchmark demonstrate the effectiveness of ProAlign\. In the aerial\-ground setting, ProAlign surpasses previous state\-of\-the\-art methods by 13\.89% mAP and 9\.39% Rank\-1 accuracy\.

## Data\-Free Reservoir Features for Efficient Long\-Horizon Cold\-Start Continual Learning

**Authors:** Augustinas Jučas; Yangchen Pan

**ID:** 154499 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D9TG2PKiJD>) | [PDF](<https://openreview.net/pdf?id=D9TG2PKiJD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154499>)

Cold\-start exemplar\-free class\-incremental learning requires learning a growing set of classes without replay, external pretraining, or a large initial task\. Existing cold\-start methods typically either train the backbone throughout the stream and compensate for semantic drift, or freeze a backbone after the first task, producing features biased toward the initial classes\. These choices also create a computational tension: drift\-compensation methods require repeated backbone training and increasingly expensive updates as the task horizon grows, while frozen\-backbone methods are cheap but weak under cold start\. We study a third option: a feature extractor that is never fit to image data at all\. We propose CIRCLE, a class\-incremental classifier built from fixed bidirectional two\-dimensional reservoir features, adapted from BiRC2D for image classification, and streaming linear discriminant analysis heads\. CIRCLE groups multiple random reservoir instantiations into feature ensembles and averages the softmax outputs of independent SLDA heads, yielding a tunable bias\-variance tradeoff between richer random features and prediction\-level ensembling\. Because the feature extractor is fixed and the head admits streaming closed\-form updates, CIRCLE performs sample\-wise training without replay, task\-boundary information, or backbone backpropagation\. On CIFAR\-100, TinyImageNet, ImageNet\-Subset, and ImageNet\-1k, CIRCLE is competitive at 10\-20 task splits and substantially outperforms strong CS\-EFCIL baselines at 50, 100, and 500 task splits, while training much faster than trained\-backbone drift\-compensation methods\. Ablations show that the BiRC2D\-style extractor, SLDA head, and balanced feature/prediction ensembling each contribute to the final performance\.

## SVG\-3D: Mining Decision Boundaries with Generative Splatting Priors for Zero\-Shot 3D Classification

**Authors:** Ryo Umagami; Shohei Ohsawa

**ID:** 152771 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QUSgUmCfT8>) | [PDF](<https://openreview.net/pdf?id=QUSgUmCfT8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152771>)

Zero\-shot 3D point cloud classifiers built on large\-scale pretrained models \(OpenShape, Uni3D, ReCon\+\+, DuoduoCLIP\) excel on clean synthetic benchmarks such as ModelNet40 but degrade sharply on real\-world scans \(ScanObjectNN, ScanNet\) and corrupted point clouds \(ModelNet\-C\)–a persistent real\-world generalization gap\. We propose SVG\-3D, the first 3D extension of Support Vector Generation \(SVG\), to close this gap without retraining a more capable encoder or accessing target\-domain test data\. SVG\-3D mines a discriminative kernel\-machine support set from a frozen encoder paired with DiffSplat, a text\-conditioned 3D Gaussian splatting generator\. It rests on two design choices that preserve strict zero\-shot rigour: \(i\) a dynamic pair\-selection rule that picks the top\-$K$ most confusable class pairs from a pseudo\-confusion matrix computed entirely on generated samples, never on the test set; and \(ii\) a Metropolis–Hastings sampler operating on the CLIP text\-embedding hypersphere with a Slerp\-plus\-Gaussian proposal whose density admits a closed\-form ratio, yielding the same acceptance rule as SVG\. On ScanObjectNN \(OBJ\\\_ONLY/OBJ\\\_BG/PB\\\_T50\\\_RS\) and ScanNet, SVG\-3D surpasses prior zero\-shot 3D classifiers built on large\-scale pretrained models without consulting any test data; on ModelNet\-C, a complementary corruption\-aware setting in which the corruption family is assumed known further improves mean robustness over the same baselines\.

## SpanFormer: Multi\-Level Adaptive Sparsity for Object Detection in High\-Resolution Wide Shots

**Authors:** Xiang Li; Chen Zhang; Wenxi Li; Yuetong Wang; Chenyang Lyu; Haozhe Lin; Fan Zhang; guiguang ding; Yuchen Guo

**ID:** 155840 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2VF28peAaM>) | [PDF](<https://openreview.net/pdf?id=2VF28peAaM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155840>)

Object detection in high\-resolution wide \(HRW\) shots, where a single image can span gigapixel resolutions and kilometre\-scale fields of view, suffers from extreme foreground sparsity, dramatically varying foreground density from sparse to crowded scenes, and object clusters whose spatial extent ranges from dozens to thousands of pixels within the same dataset\. State\-of\-the\-art sparse vision transformers for gigapixel detection select a fixed top\-k fraction of windows by hand\-crafted variance scores, which over\-promote textured but object\-free background such as foliage and patterned facades, cannot adapt the keep ratio to the wide range of crowd density, and confine each kept window to a 7x7 receptive field that is far smaller than the spatial extent of many real\-world object clusters\. We propose SpanFormer, a sparse vision transformer that broadens the computational span at three complementary granularities: \(i\) Prototype Routing replaces variance with learnable foreground/background prototypes regularised by a balance constraint that prevents prototype collapse, widening the semantic span of the scoring criterion; \(ii\) Dynamic Top\-k predicts a per\-image keep ratio with a lightweight selector, making the compute span elastic so that crowded scenes receive proportionally more compute while near\-empty scenes are skipped; \(iii\) Cluster Memory Attention performs union\-find clustering over the kept windows by joint cosine similarity and Chebyshev spatial radius and augments each window's K and V with cross\-window memory drawn from its cluster, extending the attention span beyond the local window with all projection parameters shared with the local branch and therefore no added projection cost\. On the PANDA gigapixel benchmark, SpanFormer improves AP50 from 78\.0% to 80\.3% over the SparseFormer baseline while reducing backbone FLOPs by over 75%\.

## AcceleGrad\#: Adaptive Geometry\-Aware Acceleration

**Authors:** Hanka Goralija; Francesco Tonin; Kimon Antonakopoulos; Alp Yurtsever; Volkan Cevher

**ID:** 154083 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GL9byFkJNj>) | [PDF](<https://openreview.net/pdf?id=GL9byFkJNj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154083>)

Modern neural\-network optimizers occupy a three\-way design space: online adaptivity, architecture\-aware geometry, and acceleration\. We introduce AcceleGrad\#, an accelerated linear\-coupling template that couples an adaptive anchor with a norm\-induced sharp, mirror, or linear\-minimization geometry branch\. The scalar\-anchor specialization recovers the accelerated $O\(1/K^2\)$ rate for smooth convex objectives, while the diagonal\-AdaGrad clipped\-LMO training variant admits local $\\mu$\-Kurdyka\-Lojasiewicz certificates: a generic conservative $O\(K^\{\-1/4\}\)$ rate and, in a SCION cross\-entropy regime, a $O\(K^\{\-1/3\}\)$ last\-iterate rate to a self\-bounded mini\-batch noise level\. On image classification and language modeling, the training variant improves over Euclidean AcceleGrad and remains competitive with recent non\-Euclidean optimizers\. Using stochastic gradients directly in spectral oracles also reduces polar\-computation time and optimizer overhead in practice\.

## Richer or More Gates? Fan\-In Trade\-offs in Learnable Logic Circuits

**Authors:** Youngsung Kim

**ID:** 153492 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KzXBuboGel>) | [PDF](<https://openreview.net/pdf?id=KzXBuboGel>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153492>)

In learnable logic gate networks, each neuron implements a $k$\-input Boolean function\. The dominant setting $k\{=\}2$ was chosen for tractability\. We ask: when does wider fan\-in help? At fixed parameter budget, each gate costs $2^k$ parameters, so increasing $k$ exponentially reduces width\. Combined with the depth\-\-fan\-in bound $L \\geq \\lceil \\log\_k d \\rceil$, this partitions tasks into two regimes: width\-dominated \(image classification\), where more gates beat richer gates, and degree\-dominated \(parity, arithmetic\), where $k\{&gt;\}2$ is necessary\. Our main finding is that representability does not imply learnability: at the regime boundary, the selection mechanism determines training success at identical architecture, and the optimal mechanism inverts between regimes\. We formalize this via a Jacobian analysis: the softmax mechanism's positive\-semidefinite \(PSD\) structure gives basin attraction absent from sigmoid\. We train multilinear coefficients with exact gradients and Möbius\-transform snapping \(zero deployment error\), and validate on 28 tasks and 5 real\-world datasets across multiple selection mechanisms\.

## Generative Object Detection with Co\-Training

**Authors:** Yang Liu; Yao Zhang; Feng Hou; Yangzhou Du; Peng Wang; Yang Zhang; zhongchao shi; Jianping Fan; Zhiqiang He

**ID:** 153794 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IdUJaSN2pj>) | [PDF](<https://openreview.net/pdf?id=IdUJaSN2pj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153794>)

Recent progress in multimodal large language models \(MLLMs\) has strengthened visual understanding and instruction following, and opened a path to open\-ended generative object detection, in which a model discovers, names, and localizes objects from free\-form instructions without relying on a predefined category set\. Nevertheless, current generative detectors remain less accurate than discriminative detectors, as token\-level supervision provides only indirect and weak constraints on fine\-grained visual perception\. To equip MLLM with such an explicit optimization objective, we propose \\textbf\{GOD\} \(\\textbf\{G\}enerative \\textbf\{O\}bject \\textbf\{D\}etection\), a 3B\-scale MLLM that injects object\-level visual\-prior supervision into generative detection by coupling visual\-prior reconstruction with language generation\. GOD attaches a lightweight DETR\-style object\-query branch to the MLLM visual encoder, maps the resulting object queries into the token space, and optimizes them jointly with autoregressive generation, MLLM\-side object\-query reconstruction, and DETR\-side localization objectives\. Specifically, in the training recipe, a multi\-stage training pipeline first aligns the object decoder with the MLLM and then uses an interleaved\-mask curriculum to transfer detector\-grounded priors from proposal\-assisted training to reference\-free generation\. Experiments on standard object detection and referring expression comprehension benchmarks show that GOD improves direct coordinate generation while preserving discriminative localization and language\-conditioned grounding\. These gains suggest that object\-level visual priors are most effective when learned within the MLLM, rather than supplied only as external proposals, providing a practical bridge between generative language modeling and localization\-aware perception\. We will make our code publicly available upon acceptance\.

## On the Pitfalls of Instance\-Based Dynamic Curricula

**Authors:** Alexandre Galashov; Amal Rannen\-Triki; Yee Whye Teh; Razvan Pascanu; András György

**ID:** 153313 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MF2F6p7JOi>) | [PDF](<https://openreview.net/pdf?id=MF2F6p7JOi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153313>)

Active learning has provable benefits in learning machine learning models\. As such, automatically building an instance\-based curriculum to speed up neural network training has been an active area of research\. Recent works such as those of Jiang et al\. \[2019\]; Zhou et al\. \[2020\]; Wang et al\. \[2024b\]; Yuan et al\. \[2025\] have shown benefits of using dynamic curricula on standard image classification tasks, where training data is selected adaptively online, based on how the training goes\. On the other hand, Wu et al\. \[2021\] demonstrated that static data ordering, designed independently of the actual training run, does not help in learning classifiers for some standard image classification benchmarks \(such as CIFAR10 and CIFAR100\)\. In this paper we extend this result to the case of dynamic data selection, still focusing on image classification, showing that, at least on standard benchmarks like CIFAR10, CIFAR100, and ImageNet, the performance of some state\-of\-the\-art instance\-based dynamic curriculum selection methods can be traced back to changes in the effective learning\-rate schedule due to the subsampling of the data, rather than the careful selection of the exact data points\. This highlights the importance of properly controlling all variables in designing experiments and perhaps suggests that standard image classification tasks are not the best benchmarks for studying curriculum learning\.

## Doomed to Re\-Annotate, Forever: The ImageNet Story

**Authors:** Illia Volkov; Nikita Kisel; Tetiana Mishkina; Klara Janouskova; Jiri Matas

**ID:** 139569 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HvYVosmFBa>) | [PDF](<https://openreview.net/pdf?id=HvYVosmFBa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139569>)

Top\-1 accuracy on ImageNet\-1k remains the most universally reported metric in visual recognition, despite its well\-documented label quality issues\. In the paper, we describe the effort to obtain accurate and complete ImageNet\-1k validation set annotations\. The result \-\- ReImageNet \-\- is a from\-scratch reannotation, which includes multilabel correction, object localisation, revised class definitions, and semantic attributes\-\-\-text\-recognition, rendition, reflection, crowd, and dominant\.  The reannotation reveals that $\\approx13$\\% of the original ImageNet\-1k labels are incorrect,  $32\.7$\\% of images are multilabel and $4\.7$\\% contain no object from an ImageNet\-1k class\. With the new labels, top\-1 accuracy increases by  $0\.7$\-\-$1\.4$\\% for supervised models and by $6$\-\-$8$\\% for MLLMs\.  We show that annotation errors in ImageNet\-1k propagate into its derivative test sets, indicating that the problem is structural rather than specific to any single benchmark\. We observed that LLMs outperform unaided crowd annotators, and that human and LLM collaboration with appropriate tooling represents the current quality ceiling for annotation at this scale\. All \[annotations\]\(https://huggingface\.co/datasets/c1rcuslegend/ReImageNet\), \[class definitions\]\(https://gonikisgo\.github\.io/imagenet\-annotation\-preview/\), \[guidelines\]\(https://gonikisgo\.github\.io/imagenet\-annotation\-preview/\), and \[analysis code\]\(https://github\.com/klarajanouskova/ImageNet\) have been publicly released\.

## Foveated BagNet: Inherent Interpretability Does Not Exclude Global Context

**Authors:** Holger Heidrich; Sarah Müller; Andreas Schilling

**ID:** 149976 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lnLU62lg9R>) | [PDF](<https://openreview.net/pdf?id=lnLU62lg9R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149976>)

Deploying deep learning in high\-stakes settings demands models that are not only accurate but interpretable\. Interpretable\-by\-design models, exemplified by BagNet, address this by restricting each local class predictor to a small spatial patch, yielding inherently explainable predictions\-\-\-but at the cost of capturing large\-scale image features, resulting in a substantial accuracy penalty\. We propose FovBagNet, a foveated extension of BagNet inspired by the mammalian retina\. Each local predictor depends on a stack of multiscale patches centered at its location, providing high\-resolution detail at the center and progressively coarser context toward the periphery\. FovBagNet achieves a top\-1 ImageNet accuracy of 0\.74, closing most of the 11\-point gap between BagNet\-33 \(0\.65\) and ResNet\-50 \(0\.76\), while retaining the inherent interpretability of BagNet in the form of spatially accurate saliency maps\. We also identify a conceptual limitation of the original BagNet saliency maps and empirically assess its impact\.

## COVD: Continual Open\-Vocabulary Object Detection with Novel Concept Injection

**Authors:** Yupeng Zhang; Ruize Han; Yuzhong Feng; Zixin Ren; Yuntong Tian; Liang Wan

**ID:** 155540 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4of16OWJXb>) | [PDF](<https://openreview.net/pdf?id=4of16OWJXb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155540>)

Open\-vocabulary object detection \(OVD\) has made significant progress, enabling detectors to generalize from seen to unseen categories\. However, real\-world category spaces continually evolve, and existing OVD models still struggle with newly emerging concepts, while repeated full retraining is prohibitively expensive\. To this end, we introduce a new task setting, termed Continual OVD with Novel Concept Injection \(COVD\),  where models sequentially learn incoming novel concept groups while preserving prior concepts and original open\-vocabulary knowledge, along with a new benchmark, Novel\-114\. Our key observation is that pretrained visual encoders often already perceive and represent many novel concepts, and the main bottleneck lies in the lack of stable semantic alignment between visual representations and textual concepts\. Based on this, we propose NoIn\-Det, an efficient continual injection framework without additional parameters\. NoIn\-Det freezes the visual encoder, preserves the text representation space using only texts of common concepts and previously injected concepts, and injects novel concepts by updating only a small subset of text\-branch parameters beneficial to novel concept learning\. Extensive experiments show that NoIn\-Det effectively learns novel concepts, preserves old knowledge, and consistently outperforms existing continual learning methods for VLMs without introducing additional parameters\.

## Contrastive Hypergraph Source\-free Domain Adaptive Object Detection in Adverse Weathers

**Authors:** Jicheng Yuan; Duc Manh Nguyen; Tung Kieu; Manfred Hauswirth; Danh Le\-Phuoc

**ID:** 152434 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TAXQQlBzoz>) | [PDF](<https://openreview.net/pdf?id=TAXQQlBzoz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152434>)

Adverse weather conditions such as fog, rain, snow, and low illumination introduce structured visibility degradations that severely impair object detectors trained on clear\-weather data\. When source data is inaccessible due to privacy or transmission constraints, source\-free domain adaptation \(SFDA\) becomes necessary; however, existing SFDA methods based on pairwise contrastive learning struggle to capture high\-order semantics and often suffer from agreement collapse under severe corruption\. We propose REUNION, a hypergraph\-guided SFDA framework for object detection under adverse weather\. REUNION constructs a contrastive hypergraph over target\-domain object proposals, encoding high\-order relations through intra\-image context, weather\-aware grouping, prototype\-based semantic anchors, and uncertainty\-aware connections between reliable and low\-confidence instances\. To effectively exploit these structured relations, we introduce a group\-wise Hyper\-InfoNCE objective that optimizes representations at the hyperedge level, enabling semantic information to propagate from confident proposals to corrupted or low\-contrast instances\. Experiments on diverse benchmarks demonstrate that REUNION effectively mitigates domain shifts and achieves state\-of\-the\-art performance in SFDA settings\. Code is available at this \\href\{https://anonymous\.4open\.science/r/sfda\-1E21/\}\{\\textit\{anonymous link\}\}\.

## ContextShift: A Controlled Benchmark for Context Dependence in Object Detection

**Authors:** Dan Zlotnikov; Alex Lazarovich; Ohad Ben\-Shahar

**ID:** 139652 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DDUVPd74o7>) | [PDF](<https://openreview.net/pdf?id=DDUVPd74o7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139652>)

Modern object detectors achieve strong performance on standard benchmarks, yet their robustness to contextual variation remains insufficiently investigated\. Prior evaluations largely rely on aggregate metrics such as AP on uncontrolled distribution shifts, which conflate multiple factors and can obscure how performance degrades under context change\. We introduce \\textsc\{ContextShift\}, a controlled benchmark for evaluating context dependence by systematically manipulating object\-\-context relationships while preserving object appearance\. Built on COCO 2017, it isolates context as an independent variable both implicitly, through geometric transformations and explicitly via synthetic and natural background substitutions \- with a compatibility axis based on normalized pointwise mutual information \(NPMI\) for continuous evaluation\. Across diverse detector architectures, we observe a consistent degradation pattern: false negatives increase up to 227\\% and prediction volume decreases down to \-44\\%, while false positives remain relatively stable or decline\. This observed suppression behavior is not revealed by aggregate metrics such as AP, which can mask substantial recall loss and changes in prediction dynamics\. Further analysis suggests that degradation is not primarily explained by reduced confidence, but is instead consistent with a reduced formation of valid detection candidates\. Moreover, we find that performance along the statistical compatibility axis is non\-monotonic, peaking at intermediate NPMI and degrading toward both extremes, indicating that statistical co\-occurrence does not correlate linearly with effective visual context\. Finally, we show that a training methodology based on context\-aware augmentations rather than the dataset alone, which yields overall better models: every augmented variant outperforms the dataset\-only baseline on both original \(unmanipulated\) test images as well as manipulated images, indicating that data\-oriented augmentation can partially recover performance lost to prediction\-suppression failures by exposing the model to object\-\-context decoupling during training\.

## COMPOSE: Hypergraph Cover Optimization for Multi\-view 3D Human Pose Estimation

**Authors:** Tony Danjun Wang; Tolga Birdal; Nassir Navab; Lennart Bastian

**ID:** 150956 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e20UHiy3l3>) | [PDF](<https://openreview.net/pdf?id=e20UHiy3l3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150956>)

3D human pose estimation from sparse multi\-view camera rigs is an essential task for numerous applications, including action recognition, sports analysis, and human\-robot interaction\. While learned methods dominate the field on benchmarks, they require large annotated datasets; training\-free optimization\-based methods remain promising as they circumvent 3D supervision by solving a correspondence problem across views from 2D detections\. Existing combinatorial formulations rely on pairwise associations to model this correspondence problem and enforce global consistency across views only as a downstream constraint\. However, reconciling locally plausible pairwise matches becomes brittle under occlusion and noisy detections, where local errors propagate globally\. We propose COMPOSE, which recasts multi\-view 3D human pose estimation as a weighted exact\-cover optimization over a hypergraph of person hypotheses\. Our formulation replaces pairwise association and post\-hoc consistency enforcement with a single global combinatorial objective\. To address the exponentially large candidate space, we introduce a geometric pruning strategy alongside two complementary solvers: an exact Integer Linear Programming formulation and a scalable relaxation via Belief Propagation\. Without any 3D supervision, COMPOSE improves average precision by up to 31 points over the best optimization\-based method and 13 points over self\-supervised learned methods, demonstrating the effectiveness of higher\-order combinatorial association for training\-free multi\-view 3D human pose estimation\.

## MSR\-3D: Multi\-Mode Semantic Representation for Open\-Vocabulary 3D Scene Understanding

**Authors:** Jianan Fu; ting Wu; Rui Yang; Jiacheng Sun; Xinghong Zhou; Chenghai Mao; Jiaxiang Pan; Xiaomao Li

**ID:** 153744 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=J3HWf1ltem>) | [PDF](<https://openreview.net/pdf?id=J3HWf1ltem>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153744>)

3DGS\-based open\-vocabulary 3D scene understanding requires identifying reconstructed 3D instances that correspond to a natural\-language query\. Existing methods typically compress multi\-view observations of an instance into a single semantic descriptor, which is insufficient to represent a complete 3D instance\. To retain rich semantic information across diverse viewpoints, we propose MSR\-3D, a framework built around a Multi\-Mode Semantic Representation\. Specifically, MSR\-3D derives multi\-view observations from both 2D segmentation masks and rendered masks of each segmented 3D instance\. These observations are organized into groups\. Each group is summarized as a semantic mode through a representative feature and associated statistical attributes\. Based on the multi\-mode semantic representation, we further introduce a lightweight learnable mode\-aware matcher for querying\. The matcher employs linear scoring modules to project the multi\-mode representation of each query\-instance pair into a three\-dimensional score space\. Calibrated decision boundaries are then learned in the resulting score space to separate true query\-instance matches from semantically related distractors\. This structured and decomposable design further improves the interpretability and generalization of MSR\-3D\. Experiments on open\-vocabulary scene\-understanding benchmarks show that MSR\-3D achieves state\-of\-the\-art results, improving mIoU on LERF\-OVS by 7\.52% over the baseline and achieving the best overall performance on 3DOVS\.

## Beyond the Linear Separability Ceiling: Aligning Representations in VLMs

**Authors:** Enrico Vompa; Tanel Tammet; Mohit Vaishnav

**ID:** 156758 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/pdf?id=3uX4p80bN0>) | [PDF](<https://openreview.net/pdf?id=3uX4p80bN0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156758>)

A challenge in advancing Visual\-Language Models \(VLMs\) is determining whether their failures on abstract reasoning tasks, such as Bongard problems, stem from flawed perception or faulty top\-down reasoning\. To disentangle these factors, we introduce a diagnostic framework centered on the Linear Separability Ceiling \(LSC\), the performance achievable by a linear classifier on a VLM's raw visual embeddings\. Applying this framework to state\-of\-the\-art VLMs, we uncover a pervasive ''alignment gap'', where most models fail to generatively outperform the linear separability of their representations\. We find that the few models surpassing this ceiling do so via two mechanisms: by further refining visual representations into a more linearly separable format or by executing non\-linear decision logic\. We demonstrate that this bottleneck is not a fundamental limitation but a solvable visual alignment issue\. Our method augments standard next\-token prediction with a contrastive objective to restructure the visual manifold into a more one\-dimensionally linear geometry, improving image\-to\-image comparison and enabling models to significantly surpass the LSC on abstract compositional reasoning tasks\.

## Surjective Pseudo\-Invertible Neural Networks

**Authors:** Yamit Ehrlich; Amit Arad; Nimrod Berman; Assaf Shocher

**ID:** 148844 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uiqGz0UDET>) | [PDF](<https://openreview.net/pdf?id=uiqGz0UDET>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148844>)

The Moore\-Penrose Pseudo\-inverse \(PInv\) is the fundamental tool for inverting linear operators\. We propose a natural generalization to the non\-linear regime and introduce \{Surjective Pseudo\-invertible Neural Networks \(SPNN\)\}: architectures that admit a tractable non\-linear PInv by construction and satisfy the corresponding geometric properties\. Building on this, we formalize \{Non\-Linear Back\-Projection \(NLBP\)\}, the non\-linear analogue of $x' = x \+ A^\\dagger\(y\-Ax\)$: an update that projects any sample to its closest state consistent with $f\(x\)=y$\. Diffusion\-based null\-space projection revolutionized zero\-shot solving of linear inverse problems via closed\-form back\-projection; NLBP extends this paradigm to non\-linear learned \`\`degradations'' in the broad sense, spanning semantic mappings such as classification and object detection\. The result is zero\-shot inversion of complex degradations and precise semantic control over generative outputs without retraining the prior\.

## Handwritten Text Recognition Lives in the High\-Pixel Variance Subspace

**Authors:** Carlos Garrido; Jorge Calvo\-Zaragoza

**ID:** 153384 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LmcUzl4xPg>) | [PDF](<https://openreview.net/pdf?id=LmcUzl4xPg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153384>)

In self\-supervised pretraining for Handwritten Text Recognition \(HTR\), pixel reconstruction methods tend to outperform contrastive ones, a pattern that sits awkwardly with recent evidence that pixel reconstruction yields uninformative features for natural\-image classification\. We argue this discrepancy is not an accident, but a consequence of how HTR signal is distributed in pixel space\. By probing the input distribution directly, we show that HTR's discriminative content is concentrated in the high\-variance pixel subspace and is essentially absent from the low\-variance one, the inverse of the structure observed for image classification\. Under this view, the right SSL family becomes predictable: objectives that preserve high\-variance pixel content should transfer best\. We test this prediction across six SSL methods spanning three families \(pixel\-grounded MIM, JEPA\-style, contrastive image\-\-image and image\-\-text\), under matched encoder, data, and evaluation protocols on six handwriting benchmarks across five languages\. Pixel\-grounded SSL produces the lowest CER on every benchmark and every probe, exposes per\-position character information that other families recover only via the readout, and is the only family that benefits from real\-data pretraining\. A geometric property of the encoder, its alignment with the high\-variance pixel subspace, predicts CER within every SSL method we test\. With a pretrained LLM decoder, a frozen pixel\-grounded encoder is already competitive with fully fine\-tuned supervised baselines, and full fine\-tuning beats them on the mean and ranks first or second on every benchmark\. These results challenge the prevailing view that pixel reconstruction wastes capacity on irrelevant detail: whether reconstruction is wasted depends on where the discriminative signal lives in the input\.

## Reviving the Discarded High\-Resolution Feature for Transformer\-Based Tiny Object Detection

**Authors:** Zehao Wang; Si Wu; GUIPING CAO; Xin Li; Yaowei Wang

**ID:** 151129 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cmZXkyWcad>) | [PDF](<https://openreview.net/pdf?id=cmZXkyWcad>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151129>)

Tiny object detection remains challenging because tiny instances occupy only a few pixels, and their fine\-grained details are easily lost during feature downsampling\. Although the highest\-resolution feature preserves rich local details for tiny objects, DETR\-like detectors often discard it due to its large computational cost, while directly reintroducing this feature also brings dense background noise\. To address this problem, we propose \\textbf\{ReDHF\}, a novel framework that \\textbf\{Re\}vives the \\textbf\{D\}iscarded \\textbf\{H\}igh\-resolution \\textbf\{F\}eature for tiny object detection\. ReDHF has three cooperative components\. Cross\-Scale Deformable Fusion \(CSDF\) first constructs a semantically enhanced highest\-resolution feature and injects its fine\-grained details into the shallow feature under a moderate cost\. Ellipse\-Guided Shallow Supervision \(EGSS\) then guides the enhanced feature to learn more reliable classification and localization priors by applying geometry\-adaptive auxiliary supervision\. Full\-Scale Query Interaction \(FSQI\) further enables decoder queries to access both low\-level details and high\-level semantic information, allowing them to aggregate richer cues for tiny objects\. Extensive experiments show that ReDHF consistently improves multiple baselines across different DETR variants and achieves state\-of\-the\-art performance on the evaluated benchmarks\. The best ReDHF variants surpass their baselines by \\textbf\{\+1\.4 AP\} on AI\-TOD\-v2, \\textbf\{\+1\.6 AP\} on VisDrone, and \\textbf\{\+1\.5 AP\} on SODA\-D, with especially notable gains on tiny and small objects\.

## StomataBench: Measuring Taxonomic Generalization in Stomatal Detection

**Authors:** Sainath Reddy Gummi; Hankui K Zhang; Chulwoo Pack; Shyam Solanki; Young Chang

**ID:** 139110 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kUdZ3znDlI>) | [PDF](<https://openreview.net/pdf?id=kUdZ3znDlI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139110>)

Accelerating stomata measurement is essential for developing drought\-resilient plants\. However, most automated stomata detectors are tested under narrow imaging and species conditions\. Their behavior under broader ecological distribution shift remains unclear\. We introduce StomataBench, a benchmark for stomatal object detection across species, acquisition protocols, and biological density regimes\. The benchmark uses a curated multispecies training set of 3,154 images with 134,802 annotated stomata from 21 woody species\. It is evaluated on four test datasets totaling 19,657 images, covering diverse woody taxa and heterogeneous public crop sources\. Unlike standard detection benchmarks that report only AP, StomataBench evaluates measurement reliability\. We measure COCO AP, F1, score\-threshold sensitivity, image\-level count error, and stomatal density agreement\. We benchmark sixteen detectors spanning two\-stage, one\-stage, transformer, open\-vocabulary, and promptable foundation models\. The results show that model rankings change with the biological objective\. GDINO\-SB provides the strongest average AP generalization, while SAM3\-OD gives reliable operating point for count and density estimation\. Conventional detectors remain competitive on near\-domain woody plants, but foundation models are robust under harder ecological shifts\. Failure analysis shows that far\-OOD detection is often limited by missing stomata\. These results identify cross\-lineage proposal generation as a key unsolved problem for reliable stomatal phenotyping under ecological distribution shift\.

## Align and Distill: Unifying and Improving Domain Adaptive Object Detection

**Authors:** Justin Kay; Timm Haucke; Suzanne Stathatos; Siqi Deng; Erik Young; Pietro Perona; Sara Beery; Grant Van Horn

**ID:** 156740 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ssXSrZ94sR>) | [PDF](<https://openreview.net/pdf?id=ssXSrZ94sR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156740>)

Object detectors often perform poorly on data that differs from their training set\. Domain adaptive object detection \(DAOD\) methods have recently demonstrated strong results on addressing this challenge\. Unfortunately, we identify systemic benchmarking pitfalls that call past results into question and hamper further progress: \(a\) Overestimation of performance due to underpowered baselines, \(b\) Inconsistent implementation practices preventing transparent comparisons of methods, and \(c\) Lack of generality due to outdated backbones and lack of diversity in benchmarks\. We address these problems by introducing: \(1\) A unified benchmarking and implementation framework, Align and Distill \(ALDI\), enabling comparison of DAOD methods and supporting future development, \(2\) A fair and modern training and evaluation protocol for DAOD that addresses benchmarking pitfalls, \(3\) A new DAOD benchmark dataset, CFC\-DAOD, increasing the diversity of available DAOD benchmarks, and \(4\) A new method, ALDI\+\+, that achieves state\-of\-the\-art results by a large margin\. ALDI\+\+ outperforms the previous state\-of\-the\-art by \+3\.5 AP50 on Cityscapes to Foggy Cityscapes, \+5\.7 AP50 on Sim10k to Cityscapes \(where ours is the only method to outperform a fair baseline\), and \+0\.6 AP50 on CFC\-DAOD\. ALDI and ALDI\+\+ are architecture\-agnostic, setting a new state\-of\-the\-art for YOLO and DETR\-based DAOD as well without additional hyperparameter tuning\. Our framework, dataset, and method offer a critical reset for DAOD and provide a strong foundation for future research\.

## TDBench: Benchmarking Vision Language Models on Top\-Down Image Understanding

**Authors:** Kaiyuan Hou; Minghui Zhao; Lilin Xu; Yuang Fan; Xiaofan Jiang

**ID:** 139574 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HcuEN74kvm>) | [PDF](<https://openreview.net/pdf?id=HcuEN74kvm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139574>)

Top\-down images are critical in applications such as autonomous navigation and aerial surveillance, whereas Vision\-Language Models \(VLMs\) are primarily trained and evaluated on front\-view benchmarks, leaving their performance in top\-down settings largely unexplored\. Moreover, conventional evaluation protocols based on single\-pass accuracy or repeated testing on identical questions can overestimate model capability due to hallucinations or chance correctness\. To address these limitations, we introduce a 2\{,\}000\-question benchmark over ten task categories for drone\-altitude image understanding, and RotationalEval \(RE\), an evaluation protocol that leverages rotational invariance to measure answer consistency across multiple orientations of the same scene\. Human evaluators lose almost nothing going from single\-pass accuracy to RE, whereas across the 60 open\-source and proprietary VLMs we evaluated, accuracy drops by 15 to 26 points\. We analyze per\-question rotation\-outcome distributions across the models we evaluated with an Empirical Mixture Model that compares each model's distribution over the number of correctly\-answered rotations \(0 to 4\) to a difficulty\-adjusted Poisson\-binomial null, splitting the residual into a mastery component and a consistent\-failure component\. The benchmark is integrated into an open\-source evaluation toolkit and will be released upon publication\.

## Precision As You Need: Stochastic Computing Is a Dense Adaptive Quantizer

**Authors:** Haoran Jin; Kangqi Zhang; Jirong Yang; Barry Lyu; Qiuyi Ding; Ruijie Gao; Nathan Bleier

**ID:** 155380 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=63tLNzOrMq>) | [PDF](<https://openreview.net/pdf?id=63tLNzOrMq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155380>)

Matrix multiplications dominate the inference cost of modern transformer\-based vision models, yet existing efficiency techniques such as post\-training quantization and mixed\-precision inference are largely limited to the small set of fixed\-width formats—INT4, INT8, BF16, and FP16—supported by conventional accelerators\. We revisit stochastic computing \(SC\) as a way to lift this constraint: viewed as a dense adaptive quantizer, SC controls precision by bit\-stream length L rather than a fixed datapath, while each multiplication reduces to a single AND/XNOR gate\. We build a GPU library that emulates SC matrix multiplication at scale, exposes stream lengths as first\-class kernel arguments, and evaluates SC end\-to\-end on image classification, object detection and instance segmentation, class\-conditional image generation, and visual world\-model planning\. On top of this substrate, we develop a dynamic per\-row mixed\-precision policy that assigns stream length per token or group at matched average budget, requires no retraining, and uses the same SC hardware across schedules\. Across tasks, SC remains competitive with fixed\-format INT quantization at matched bit budgets, while per\-row mixed precision helps maintain accuracy at lower average stream lengths\. These results provide software\-level feasibility evidence that SC can serve as a dense\-precision substrate for fine\-grained mixed\-precision inference on modern vision transformers\.

## Concurrent Image Understanding and Generation: Self\-Correcting Coupled Markov Jump Process

**Authors:** Minh\-Quan Le; Armand Comas; Alexandros Lattas; Stylianos Moschoglou; Pedro Velez; Amit Raj; Aaron Germuth; Thabo Beeler; Dimitris Samaras; Di Qiu

**ID:** 154281 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EzyXXt9tbh>) | [PDF](<https://openreview.net/pdf?id=EzyXXt9tbh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154281>)

Human cognition does not separate understanding and generation\. A teacher at a whiteboard speaks and draws \*together\*, each modality reshaping the other\. In this paper, we bring this coupled loop to artificial systems\. Masked Diffusion Models \(MDMs\) are ideally suited to this task, yet existing samplers either decode text and image sequentially or update them in parallel branches that share only previous\-step history, but not the other modality's latest decisions \*within\* the same step; combined with MDMs' inability to remask, cross\-modal contradictions are neither detected nor repaired\. We introduce \*\*Self\-Correcting Coupled Markov Jump Processes \(SC\-CMJP\)\*\*, a framework in which one modality's transition rates are functionals of the other modality's unmasking confidence score, as weighted by cross\-modal attention\. Furthermore, a remasking jump retracts commitments the moment cross\-modal evidence turns against them\. In conjunction with SC\-CMJP, we introduce \`CO₂Jump\` \(Self\-\*\*Co\*\*rrecting \+ \*\*Co\*\*upled \+ Jump\), a novel training\-free single\-pass sampler for joint multimodal generation\. For training and evaluation purposes, we have created and will release three large\-scale joint multimodal generation corpora: JEdit\-1M, JMaze\-200K, JNono\-200K, with matching in\- and out\-of\-distribution benchmarks\. \`CO₂Jump\` achieves best joint performance for image understanding and editing as well as visual reasoning \(maze and nonogram solving\)\. The performance of the sampler scales monotonically with the number of denoising steps, evidence that the benefits of cross\-modal coupling \*compound\* across the trajectory\.

## Neural Expansion: A Unified Mechanism for How Deep Neural Network Generalize

**Authors:** Chashi Mahiul Islam; Samuel Jacob Chacko; Mao Nishino; Canlin Zhang; Xiuwen Liu

**ID:** 153306 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MGCZagefG9>) | [PDF](<https://openreview.net/pdf?id=MGCZagefG9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153306>)

Deep neural networks demonstrate remarkable generalization despite being highly over\-parameterized, challenging traditional statistical learning theories\. While several theoretical paradigms such as margin\-based bounds, PAC\-Bayesian analyses, and neural tangent kernels provide global explanations, they often lack mechanistic insight into how generalization emerges from training dynamics\. We introduce Neural Expansion, a unified geometric framework that characterizes generalization through the expansion of directionally\-selective ray coverage in the input space\. Using Generalization Intervals \(GIs\), we quantify direction\-specific regions around training samples where the model's predictions remain stable\. Our extensive empirical studies across diverse architectures and datasets reveal that training leads to progressive expansion of ray coverage, particularly along directions with low Jacobian singular values\. This mechanism helps explain a large fraction of correctly classified test inputs, adversarial examples, and even mislabeled or out\-of\-distribution samples through the geometry of ray coverage rather than instance\-level memorization\. By connecting input\-space curvature to predictive behavior, our framework provides a mechanistic foundation that complements existing global theories of deep learning\. The link to our code and data will be made available in the published version\.

## Rethinking the Readout: Unlocking Video Backbones for AI\-Generated Video Detection

**Authors:** Manni Cui; Ziheng Qin; ZiAn Wang; Ruiqi Liu; Dianyuan Zou; Jianglan Wei; Han Zhou; Yu Liu; Xu Jingrui; Wenhao Wang; Zhenyu Zhang

**ID:** 149274 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rXN1Faijz6>) | [PDF](<https://openreview.net/pdf?id=rXN1Faijz6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149274>)

AI\-generated videos \(AIGVs\) typically contain subtle temporal artifacts that arise from inter\-frame inconsistencies rather than within individual frames\. A detector that captures such artifacts should therefore benefit from video pretrained backbones over image only ones\. In practice, however, video backbones with standard global readouts often fail to outperform strong image pretrained probes on AIGV benchmarks\. We attribute this gap to excessive spatiotemporal aggregation in the readout\. Video pretrained backbones tend to compress each frame into a single global descriptor\. This compression suppresses local patch level temporal dynamics and discards inter patch relations, which are precisely the cues that AIGV detection most reliably depends on\. Based on this, we propose Velocity Gated Patch Velocity Profiling \(V\-PVP\), a lightweight readout that replaces only the aggregation layer with two parallel streams over the patch velocity field, adding only about $0\.5$M trainable parameters\. V\-PVP serves as a general plug\-and\-play module that consistently improves performance across diverse video backbones under both end\-to\-end fine\-tuning and linear probing settings\. Our method reaches \\textbf\{95\.28\} AUC on AIGVDBench while keeping the backbone fully frozen\. The results show that simply replacing the aggregation layer reactivates the temporal potential of frozen video backbones, restoring their advantage on AIGV detection\. Code is available at https://anonymous\.4open\.science/r/PVP\-81B3/\.

## PhysGraphNet: Physical\-State Scene Graphs via Latent Graph Reasoning and Counterfactual Supervision

**Authors:** Zhengtao Yao; Runhao Li; Yan Wen; Guang Yang; Siheng Wang; Chenhao Wei; Rongchao Zhang; Guoqing Ma; Haoyan Xu; Junhao Dong

**ID:** 148671 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vxrLfNSsBQ>) | [PDF](<https://openreview.net/pdf?id=vxrLfNSsBQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148671>)

Manipulation planners depend on accurate predicates about physical state\-\-\-is an object occluded? is a container open? is a path blocked?\-\-\-but such predicates are hard to read off an image\. Contrastively\-trained vision\-\-language models capture semantic content but collapse to near\-zero binary F1 on these predicates, and even GPT\-4o few\-shot falls below random on multiple\-choice physical\-state questions\. We present \\ours, which predicts physical\-state scene graphs from a single image and a natural\-language goal\. A frozen CLIP ViT, adapted with LoRA, feeds a heterogeneous graph of object, relation, and learnable memory tokens into a Latent Graph Reasoning Transformer \(\\lgrt\); training combines supervised, counterfactual\-margin, contrastive, and calibration losses with offline counterfactual\-pair augmentation\. On \\pacbench, \\ours reaches $\\mu$\-F1$\\,\{=\}\\,0\.651$ and $99\.3\\%$ MCQ accuracy, a $\+0\.170$ absolute $\\mu$\-F1 gain over the strongest no\-graph supervised baseline, with $99\.6\\%$ counterfactual directional consistency\. Component ablations attribute $\+0\.426$ $\\mu$\-F1 to the \\lgrt and $\+0\.392$ to the counterfactual loss\. A \\manipbench\-trained variant scores $74\.4\\%$ MCQ against $30\.0\\%$ for the best zero\-shot VLM on that benchmark's 4\-choice format\.

## Rethinking Geometric Depth in Monocular 3D Object Detection: A Projection\-Consistent Reformulation

**Authors:** Zhihao Zhang; Abhinav Kumar; Huaizhi Qu; Tianlong Chen; Xiaoming Liu

**ID:** 152569 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S8aGdjePrD>) | [PDF](<https://openreview.net/pdf?id=S8aGdjePrD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152569>)

Monocular 3D detection \(Mono3D\) hinges on recovering depth from a single image, for which the geometric formulation $z \\approx f \\cdot H / h\_\{2D\}$ is widely adopted due to its simplicity and direct grounding in projective geometry\. We show that this formulation harbors a systematic, projection\-induced bias: substituting the 2D bounding\-box height $h\_\{2D\}$ recovers the depth of an object's visible front surface rather than its center, causing size\-dependent underestimation that persists even under ground\-truth inputs\. We address this front\-surface bias with MonoPCA, a unified framework built on a projection\-consistent reformulation\. At its core, PCDepth retains the measurable $h\_\{2D\}$ and closes the gap to center depth through an orientation\- and size\-aware correction derived from perspective geometry, eliminating the bias without introducing ill\-posed regression targets\. Because PCDepth couples depth to predicted object size and orientation, attribute perception becomes essential\. We therefore introduce GeoAlign, a teacher\-\-student framework that transfers geometric representations from Vision Foundation Models into a lightweight student, strengthening attribute perception at no inference cost\. Across four challenging benchmarks, MonoPCA establishes new SoTA performance, including a $\+1\.44\\%$ AP3D gain on the KITTI leaderboard and $\+2\.80\\%$ on Omni3D Out\.

## LCD$^3$: Layout\-Conditioned Diffusion for Dataset Distillation in Object Detection

**Authors:** Yue Cao; Mohsen Zardadi; Yu Hu; Yanshuo Fan; Jozsef Hamari; Zheng Liu; Jianyang Gu

**ID:** 150456 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=htxCgIKQGB>) | [PDF](<https://openreview.net/pdf?id=htxCgIKQGB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150456>)

Object detection data contains a structural asymmetry that is easy to overlook in dataset distillation \(DD\)\. Each detection image couples a spatial layout with a visual realization\. Layouts define detection targets through object categories and bounding boxes, while pixels instantiate these targets with particular object appearances and backgrounds\. Although both forms can be redundant across a dataset, they play different roles\. Layouts define the task distribution, so synthesizing them freely risks altering the detection problem\. Visual realizations, on the other hand, are conditional samples attached to layouts\. This motivates a separation principle: preserve and recombine layouts from the original data, then use generative priors to diversify their visual realizations\. Based on this principle, we propose LCD$^3$, a layout\-conditioned diffusion framework for object detection DD\. LCD$^3$ constructs composite layouts from diverse groups based on scene\-level embeddings\. A layout\-conditioned diffusion model then generates new images from these layouts, enriching object appearance and scene realization without discarding the spatial structure needed for detection\. The generation process is grounded with semantically verified object crops to retain the original visual style\. Experiments show that this separation between layout and realization produces more effective distilled detection datasets\. LCD$^3$ consistently outperforms the previous state\-of\-the\-art, OD$^3$, across benchmarks using fewer objects per distilled image, e\.g\., a $12\.5$\\% mAP50 improvement at a $0\.5$\\% compression ratio on PASCAL VOC\.

## Post\-hoc Selective Classification for Reliable Synthetic Image Detection

**Authors:** Kaixiang Zheng; Jacob Seidman

**ID:** 151954 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WYncw2up3x>) | [PDF](<https://openreview.net/pdf?id=WYncw2up3x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151954>)

As synthetic images become increasingly realistic, reliable synthetic image detection techniques are of pressing need to prevent their misuse\. Despite satisfactory in\-distribution performance, deep neural network\-based synthetic image detectors \(SIDs\) lack reliability in deployment and often fail in the presence of common covariate shifts, resulting in poor detection accuracy\. To avoid the risk caused by potential errors, we adopt a selective classification \(SC\) strategy by allowing SIDs to abstain from making low confidence predictions\. For practicality, we focus on post\-hoc methods which perform confidence estimation on a given SID without retraining\. However, we show that conventional logit\-based confidence score functions \(CSFs\) exhibit pathological behavior under covariate shifts, leading to SC performance close to or even worse than random guessing\. To address this, we propose a simple yet effective SC framework for \*\*Re\*\*liable \*\*S\*\*ynthetic \*\*I\*\*mage \*\*De\*\*tection \(ReSIDe\)\. First, we generalize the notion of logits to an SID's intermediate layers from a centroid matching perspective, extending the use of logit\-based CSFs to any layer of an SID\. Then, we introduce a preference optimization algorithm that aggregates confidence scores extracted from different layers to a final confidence estimate by minimizing an upper bound of the area under the risk\-coverage curve \(AURC\)\. Extensive experimental results show that ReSIDe significantly boosts the SC performance of various logit\-based CSFs under common covariate shifts, achieving up to 69\.55% AURC reduction\.

