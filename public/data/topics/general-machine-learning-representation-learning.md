# General Machine Learning / Representation Learning

通用机器学习 / 表征学习

221 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Attribution\-Guided Shared\-Private Decoupling for Noise\-Reduced Audio\-Visual Representation Learning

**Authors:** Linge Wang; Yingying Chen; Bingke Zhu; Lu Zhou; Haixin Wang; Zhipiao Liu; Jinqiao Wang

**ID:** 150554 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hHHYsu22Sj>) | [PDF](<https://openreview.net/pdf?id=hHHYsu22Sj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150554>)

Audio\-visual representation learning commonly aligns paired audio and visual signals with sample\-level contrastive objectives\. However, real\-world audio\-visual pairs usually contain heterogeneous patch tokens: only a subset carries reliable cross\-modal shared semantics, while many others mainly encode modality\-private residuals\. Aggregating all tokens into a single global representation can therefore introduce semantic noise into cross\-modal alignment\. Motivated by the minimal\-sufficiency principle, we propose an attribution\-guided shared\-private decoupling framework to mitigate this issue\. Our key idea is to identify shared\-cover subviews that preserve dominant cross\-modal information while suppressing modality\-private residuals, and use them to supervise decoupled shared and private representations\. To identify such subviews efficiently, we draw on transformer attribution method and introduce Layer\-Truncated Attribution \(LTA\), which provides a lightweight estimate of token\-level relevance to cross\-modal shared information\. We further adopt a teacher\-student framework, where the teacher provides attribution\-induced supervision and the student internalizes shared\-private decoupling into its representations, without introducing extra inference cost\. Experiments on retrieval, classification, and sound\-prompted semantic segmentation show consistent gains over strong baselines\. Compared with baseline, our method improves the average zero\-shot R@1 by 4\.0 across AudioSet and VGGSound retrieval, and improves AS20K classification mAP by 3\.1, demonstrating the effectiveness of fine grained attribution guidance for reducing semantic noise\.

## ControlJEPA: Principled Trajectory Regularization via Lyapunov Tube Loss

**Authors:** Khanh T Nguyen; Yen N Pham; Uyen N\.B\. Vo; Thieu Vo; Cuong Pham; Tan Nguyen

**ID:** 149461 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pw4nMbt6SR>) | [PDF](<https://openreview.net/pdf?id=pw4nMbt6SR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149461>)

Next\-token prediction leaves hidden\-state trajectories largely unconstrained, motivating recent geometric regularization methods based on angular penalties\. However, these approaches control only the direction of motion and provide no explicit bound on trajectory deviation\. We introduce the Controlled Joint Embedding Predictive Architecture \(ControlJEPA\), a trajectory regularization framework grounded in discrete\-time Input\-to\-State Stability theory\. Our novel Lyapunov Tube Loss enforces a contraction condition on a normalized measure of transversal deviation, yielding a provable guarantee that confines hidden states within a tube of explicit width determined by two interpretable hyperparameters\. ControlJEPA integrates seamlessly with standard training and requires no architectural changes\. Across six benchmarks and seven model families, it consistently outperforms standard fine\-tuning and prior trajectory regularizers, improving accuracy and data efficiency while preserving output diversity\. Notably, the induced geometric structure persists at inference time, indicating that the method reshapes the representation space rather than memorizing training trajectories\.

## BAL: Bidirectional Autoregression in Latent Space for Learning Human Movement Representations

**Authors:** Genki Kinoshita; Ko Nishino

**ID:** 152565 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SC5WzkPwB6>) | [PDF](<https://openreview.net/pdf?id=SC5WzkPwB6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152565>)

Learning semantically meaningful human movement representations from 3D pose sequences is essential for human behavior modeling\. Existing self\-supervised methods derive supervision from artificial assumptions, e\.g\., invariance to augmentation within a certain range or recoverability of masked regions at a certain temporal scale, introducing unintuitive hyperparameters that make the learned semantics sensitive to their settings\. We propose BAL, a self\-supervised framework that instead exploits supervision intrinsic to human movement: the natural ordering structure of everyday behavior\. BAL autoregressively predicts in a semantically abstract latent space, analogous to how humans anticipate others' actions rather than their precise joint configurations\. Bidirectional autoregressive prediction, both forward and backward in time, fully leverages these ordering constraints while enabling representation extraction using both past and future context at inference\. To suppress representation collapse, BAL decomposes each prediction target into a global component capturing sequence\-level semantics and a local component capturing context\-independent movement\. We prove that the local targets retain nontrivial angular diversity unless the representations are completely collapsed, preserving a meaningful training signal\. Experiments on large\-scale datasets demonstrate that BAL's representations are highly effective for motion captioning, forecasting, and interpolation, outperforming existing self\-supervised methods across all tasks\.

## Self\-Supervised Goal\-Reaching Results in Multi\-Agent Cooperation and Exploration

**Authors:** Chirayu Nimonkar; Shlok Shah; Catherine Ji; Benjamin Eysenbach

**ID:** 148922 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uCJyXkPw75>) | [PDF](<https://openreview.net/pdf?id=uCJyXkPw75>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148922>)

For groups of autonomous agents to achieve a particular goal, they must engage in coordination and long\-horizon reasoning\. Rather than relying on complex reward functions and explicit cooperation mechanisms, we ask what minimal ingredients are required for effective coordination and exploration to emerge in multi\-agent settings\. We investigate this question through self\-supervised goal\-reaching, where agents aim to maximize the likelihood of visiting a goal state rather than maximizing a reward\. Despite a sparse feedback signal, we present empirical results that show self\-supervised goal\-reaching techniques enable agents to learn from such feedback\. On MARL benchmarks, self\-supervised goal\-reaching outperforms alternative approaches that have access to the same sparse reward signal\. Furthermore, we empirically demonstrate that multi\-agent self\-supervised goal\-reaching approaches can be more robust than single\-agent strategies\. While there is no \*explicit\* exploration mechanism, this approach explores nontrivial intermediate coordination strategies in sparse settings where alternative approaches fail to achieve a single success\.

## SpRePE: A Spherical Geometry\-Aware Position Embedding scheme for Vision Transformers

**Authors:** Qilong Jia; Yi Xiao; Wei Xue

**ID:** 154280 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F06aHos38r>) | [PDF](<https://openreview.net/pdf?id=F06aHos38r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154280>)

Vision Transformers are increasingly applied to data defined on the sphere, particularly in physics, meteorology, and related scientific domains\. Position embeddings provide the spatial information that attention itself does not encode, making their design central to the expressive power of Transformers\. However, most existing position embedding schemes are designed for Cartesian grids and therefore do not naturally handle longitude periodicity, polar singularities, or geodesic relations on spherical domains\. This mismatch limits the ability of standard attention to model spherical geometry without specialized architectural modifications\.  We propose Spherical Reflection Position Embedding \(SpRePE\), a drop\-in position embedding scheme for Vision Transformers on spherical data\. SpRePE encodes each absolute spherical position by applying Householder reflections to query and key representations\. Although each token is encoded only from its own absolute coordinates, the resulting attention inner products induce an explicit spherical relative\-position term with a clear geometric interpretation\. This formulation injects sphere\-aware relative geometric information into standard attention without constructing pairwise attention\-bias matrices, introducing task\-specific modules, or modifying the backbone architecture\. It also avoids the quadratic overhead of relative position biases and preserves the same asymptotic overhead as RoPE\.  We evaluate SpRePE on spherical image classification, panoramic depth estimation, and global weather forecasting\. Across these tasks, SpRePE achieves competitive performance compared with strong position embedding baselines, with particularly clear gains in settings where spherical geometry is important\.

## Dynamic Spectral Federated Graph\-Level Clustering

**Authors:** Wenxin Zhang; Zihao Lin; Guangzhen Yao; Feng Zhou; Cuicui Luo; Renxiang Guan; Zonghao Ying; Xiaojian Lin; yangchen zeng; Renda Han

**ID:** 151860 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XNONEf2JZB>) | [PDF](<https://openreview.net/pdf?id=XNONEf2JZB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151860>)

Federated graph clustering \(FGC\) aims to partition distributed graphs into different groups while preserving data privacy\. Existing FGC methods focus on spatial\-domain information aggregation, while how to use expressive spectral\-domain signals of graphs for FGC still remains unexplored\. Main challenges are twofold: \(1\) Collecting and integrating semantic signals that fully express the critical patterns of graphs; \(2\) Obtaining spectral consensus while preserving local properties of clients\. To address these challenges, we propose dynamic spectral federated graph\-level clustering \(DySFGC\)\. DySFGC designs learnable polynomial filters to capture abundant graph signals and employs spectral contrastive learning and reconstruction to explore the latent semantic information\. Besides, DySFGC develops dynamic spectral consensus, which updates the consensus via frequency\-specific channels and conducts the dynamic updating process by evaluating the discrepancies between the server and clients\. Extensive experiments on fifteen datasets demonstrate the superiority of DySFGC over eleven baselines\.

## DAGA: Dynamic Attention\-Guided Adaptation for Self\-Supervised Vision Transformers

**Authors:** Tianjian Zhou; Jiang Jie; Yishan Li; Yifei Zhang

**ID:** 153686 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JYsS0zrDlk>) | [PDF](<https://openreview.net/pdf?id=JYsS0zrDlk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153686>)

Self\-supervised Vision Transformers in the DINO family encode rich semantic structure within their self\-attention maps, yet existing parameter\-efficient fine\-tuning \(PEFT\) methods apply static, content\-agnostic transformations that ignore this internal signal\. We present DAGA \(Dynamic Attention\-Guided Adaptation\), a PEFT module that repurposes a frozen backbone's emergent attention maps as instance\-specific guidance: per\-image attention is converted into channel and spatial gates that condition a lightweight bottleneck adapter\. With only 1\.4\\% additional parameters, DAGA reaches 85\.9\\% top\-1 on ImageNet\-1K with DINOv3\-ViT\-B and surpasses recent PEFT baselines, with strong gains on dense prediction \(\+12\.1\\% mIoU on ADE20K\) and fine\-grained classification \(\+1\.6 / \+3\.5 on CUB\-200 / FGVC\-Aircraft\)\. DAGA's effectiveness is tied to the semantic quality of the backbone's attention: gains are large on DINOv2/v3 and iBOT but small on MAE, CLIP, and DeiT, positioning it as the first PEFT module to operationalize emergent SSL attention as in\-loop guidance and complementing self\-distillation methods that refine attention itself\. Anonymized code: https://anonymous\.4open\.science/r/ID1680\.

## Omni\-Interactive Universal Embedder

**Authors:** Wei\-Yao Wang; Kazuya Tateishi; Shuyang Cui; christian simon; Takashi Shibuya; Shusuke Takahashi; Yuki Mitsufuji

**ID:** 155508 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=54DQalLSzW>) | [PDF](<https://openreview.net/pdf?id=54DQalLSzW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155508>)

Multimodal representation learning has been shifting from traditional two\-tower architectures to large language model \(LLM\)\-based embedders due to their strong instruction\-following capabilities\. Despite this progress, existing approaches primarily focus on language and image modalities, which also remain the dominant modalities for human\-AI interaction in current embedders\. In this paper, we propose the first Omni\-Interactive Universal Embedder \(OmniUE\), which not only learns a unified embedding space across text, video, and audio by leveraging intermediate\-layer representations from dedicated learnable tokens, but also supports omni\-interactive querying, enabling users to provide inputs in the form of text, visual regions of interest, and audio spans\. Within OmniUE, visual and audio segmenters process diverse user interactions and integrate them with an omni\-LLM to produce user\-conditioned any\-to\-any embeddings via context aggregation\. To evaluate OmniUE’s omni\-interactive capabilities, we introduce OmniCHOIR, benchmarking models for omni\-interactive compositional audio retrieval based on the given text, video, and audio as well as unimodal or multimodal interaction prompts\. OmniUE consistently surpasses state\-of\-the\-art baselines across diverse modalities, with average improvements of 10\.5% on textual\-interactive video benchmarks \(MMEB\-v2\-video\), 1\.1% on audio tasks \(MAEB\), 83\.7% on visual\-interactive benchmarks \(SCaR\), and 24\.1% on our omni\-interactive OmniCHOIR benchmark We believe that jointly advancing omni\-modal representation learning and omni\-interactive querying paves the way toward universal embedders\.

## Seen\-Constrained Model\-Order Selection for Unknown\-$K$ Generalized Category Discovery

**Authors:** Mingfu Yan; Jiancheng Huang; HAIPENG LUO; Yi Huang; Yuqi Peng; Qiang Zhou; Shifeng Chen

**ID:** 150656 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gPgvfSSM1N>) | [PDF](<https://openreview.net/pdf?id=gPgvfSSM1N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150656>)

Generalized category discovery \(GCD\) becomes substantially more challenging when the number of novel classes is unknown\. We argue that, after the backbone is fixed, this stage should be treated as seen\-constrained model\-order selection rather than as an auxiliary clustering detail\. The selector must estimate the class count without novel labels while remaining consistent with the labeled seen categories available in the standard GCD setting\. We instantiate this view by constructing a nested merge path from a seen\-constrained overclustering and selecting the coarsest near\-optimal cut under observable surrogate decision risks\. These risks combine seen\-class consistency, cross\-seed stability, unlabeled\-side compactness, and a tiny\-cluster degeneracy penalty\. The resulting protocol separates class\-count error, downstream clustering quality, and robustness\. Where an aligned public unknown\-$K$ baseline is available, namely on SelEx, the selector reduces class\-count error on all four fine\-grained datasets, including a reduction from 342 to 15 classes on Herbarium\-19\. Broader\-domain diagnostics further distinguish ImageNet100, where the default selector can underestimate the class count toward the seen\-class regime, from CIFAR100, where the selector landscape exposes an accuracy\-count operating\-point trade\-off\. The mixed accuracy outcomes reveal distinct count\-, path\-, and representation\-level bottlenecks, supporting unknown\-$K$ selection as a decision layer that should be evaluated separately from representation learning\.

## Towards Financial World Modeling

**Authors:** Humzah Merchant; Alec Guthrie; Simon Mahns; Randall Balestriero; Bradford Levy

**ID:** 153065 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OEokq7iASc>) | [PDF](<https://openreview.net/pdf?id=OEokq7iASc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153065>)

Financial markets are complex, noisy environments which present unique challenges for representation learning and world modeling\. In this study, we systematically explore the application of supervised and self\-supervised representation learning methods to financial markets data and their ability to learn world models of financial markets\. To support this, we assemble and release $\\textbf\{Market\-1T\}$ a dataset of more than one trillion observations spanning all US equities from 2008 through 2025\. We then develop a domain\-specific data augmentation and apply a variety of modern SSL objectives including Joint Embedding Predictive Architecture \(JEPA\), Masked Autoencoder \(MAE\), and DINO\. Our results highlight that supervised methods are still dominant in this domain when applied directly to core quantitative finance tasks: predicting changes in prices, volatility, and transactions cost\. Further, when supervised models are trained across tasks they are able to leverage complementarities which enhance cross\-task performance\. While performance of SSL\-based methods on these core tasks lags behind, we find that they better capture latent structure\-\-\-such as time and assets effects\-\-\-which supervised models miss\. Our results suggest current SSL objectives capture broad features of markets but further work is needed to close the gap between supervised methods\.

## When Integral Meets Decomposition: A Signal\-Level Self\-Supervised Feature Decompose Paradigm for Multi\-Modal Image Fusion

**Authors:** Zeyu Wang; Jiayu Wang; Haiyu Song; Haoran Duan

**ID:** 152371 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TZ8z0nYiR3>) | [PDF](<https://openreview.net/pdf?id=TZ8z0nYiR3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152371>)

Multimodal image fusion \(MMIF\) aims to integrate complementary information from different modalities into a high\-quality fused image and support downstream tasks\. Recently, feature decomposition has become an important paradigm by separating source images into common and modality\-specific unique features\. However, existing methods lack clear supervision because ground\-truth \(GT\) decomposition feature maps are unavailable\. They usually combine multiple image\-level metrics as losses, which are inherently incomplete and may conflict since each pixel couples attributes such as texture, edge, and contour\. To address this, we propose a 1D signal\-level self\-supervised feature decomposition paradigm\. Our core insight is to reformulate feature decomposition from unclear 2D image\-level supervision into an integral\-driven 1D signal\-level optimization problem\. This objective\-level reformulation uses the 1D signal form to compute the integral constraint\. The decomposer is optimized by the integral area between common and original signals, enabling more stable optimization with a clear optimization objective\. Our model follows a two\-stage SSL framework\. Stage I designs dual pretext tasks for integral\-driven decomposition at the signal level and structure\-preserving reconstruction at the image level\. Stage II fuses unique features and combines them with common features to reconstruct the fused image\. Experiments on representative MMIF tasks show state\-of\-the\-art\(SOTA\) performance\. Our code will publicly available\.

## Discriminative Score Function: Turning Pretrained Models into Functional Generative Priors

**Authors:** Junhoo Lee; Hyeonjin Kim; Sangbum Han; Nojun Kwak

**ID:** 148214 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zWDlC6eCkN>) | [PDF](<https://openreview.net/pdf?id=zWDlC6eCkN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148214>)

Discriminative models are trained with task\-specific objectives such as classification, detection, or representation learning, yet their practical utility depends on generalizing beyond the training task to unseen samples from the same domain\. This suggests that a discriminative model may retain an implicit trace of the data manifold beyond its task labels\. We ask whether this trace can be exposed as a generative signal without task\-specific guidance\. We introduce the Discriminative Score Function \(DSF\), which extracts an image\-space generative field from the loss\-gradient geometry of a pretrained discriminative model\. DSF provides a training\-free update rule that moves images toward model\-consistent visual regions without retraining or task\-specific targets\. We apply DSF to diverse pretrained discriminative models, including ResNet classifiers, DETR detectors, and DINOv2 ViT encoders\. DSF generates unconditional images from noise and supports conditional guidance, editing, inpainting, and explanation through the same field\. DSF\-generated samples also provide effective zero\-shot quantization calibration when real images or labels are unavailable, preserving feature geometry better than data\-free calibration baselines\. These results show that discriminative training leaves a generative functional signal for synthesis and calibration\.

## Learning Reusable Motor Motifs for Continuous Animal Behavior Modeling

**Authors:** Jiyi Wang; Jingyang Ke; Bo Dai; Anqi Wu

**ID:** 152170 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V1WUYmTNQF>) | [PDF](<https://openreview.net/pdf?id=V1WUYmTNQF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152170>)

Animals generate complex behaviors by flexibly recombining a finite set of motor primitives, but existing behavior segmentation methods oversimplify this process by imposing discrete syllables under restrictive generative assumptions\. Here, we introduce Motif\-based Continuous Dynamics \(MCD\), a framework that models behavior as a continuous, compositional process driven by reusable motor motifs\. MCD leverages reinforcement learning \(RL\) to \(1\) discover interpretable motif representations via transition\-based representation learning, and \(2\) model behavior as a time\-varying mixture of these motifs through motif\-based policies\. This formulation avoids restrictive dynamics assumptions while capturing continuity, compositionality, and long\-term dependencies in behavior\. Across simulated gridworld tasks, maze navigation, and animal behavior datasets, MCD identifies reusable motifs and interprets the trajectories with them\. These results provide a generative account of behavior as combinations of fundamental motifs, offering a flexible and interpretable framework for studying natural behavior\.

## Improving Self\-Supervised Vision Transformers with Cross Distillation

**Authors:** Siran Dai; Qianqian Xu; Peisong Wen; Yang Liu; XIAOCHUN CAO; Qingming Huang

**ID:** 151171 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cSTY1Titxd>) | [PDF](<https://openreview.net/pdf?id=cSTY1Titxd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151171>)

Self\-supervised Vision Transformers learn strong image\-level representations, but their patch\-level representations can be unreliable for dense prediction\. We study this mismatch and find that the class token concentrates global semantics on a small number of representative patches, while dense prediction errors often occur on low\-attention regions\. We provide a local gradient analysis showing that, along the \[CLS\] attention readout, image\-level self\-distillation gradients are weighted by \[CLS\]\-to\-patch attention mass\. To provide masked patches with global semantics without changing the architecture, we propose Cross Distillation \(CODI\), which mixes a small amount of the teacher class\-token distribution into each teacher patch\-token target\. CODI gives every masked patch an attention\-independent semantic correction while preserving the standard self\-distillation architecture\. Experiments on dense and image\-level benchmarks show that CODI improves both dense and image\-level performance under aligned pretraining settings\.

## SimReg: Achieving Higher Performance in the Pretraining via Embedding Similarity Regularization

**Authors:** Yan Sun; Guoxia Wang; Jinle Zeng; Jiabin Yang; Shuai Li; Li Shen; Dacheng Tao; Dianhai Yu; Haifeng Wang

**ID:** 156008 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1BwcSDQLHJ>) | [PDF](<https://openreview.net/pdf?id=1BwcSDQLHJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156008>)

Pretraining large language models \(LLMs\) with next\-token prediction has led to remarkable advances, yet the context\-dependent nature of token embeddings in such models results in high intra\-class variance and inter\-class similarity, thus hindering the efficiency of representation learning\. While similarity\-based regularization has demonstrated benefit in supervised fine\-tuning and classification tasks, its application and efficacy in large\-scale LLM pretraining remains underexplored\. In this work, we propose the SimReg, an embedding similarity regularization loss that explicitly encourages token representations with the same ground\-truth label within each sequence to be more similar, while enforcing separation from different\-label tokens via a contrastive loss\. Our analysis reveals that this mechanism introduces gains by enlarging multi\-classification margins, thereby enabling more efficient classification\. Extensive experiments across dense and Mixture\-of\-Experts \(MoE\) architectures demonstrate that SimReg consistently accelerates training convergence by over 30% and improves average zero\-shot downstream performance by over 1% across standard benchmarks\. Further ablation studies and analyses offer practical insights into hyperparameter tuning and loss effectiveness\.

## LaMo: Self\-Supervised Latent Motion Priors for Physical Realism in Video Generation

**Authors:** Bo Jiang; Depu Meng; yihan hu; Yichen Xie; Tianshuo Xu; Wei Zhan

**ID:** 152027 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W5AJ1oTjlb>) | [PDF](<https://openreview.net/pdf?id=W5AJ1oTjlb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152027>)

Modern video generators produce visually compelling clips but still struggle with physical and motion consistency, limiting their use as reliable world simulators\. Existing remedies often rely on external simulators, teacher models, or curated physics\-focused data\. We explore a complementary self\-supervised direction: extracting motion cues from the unlabeled videos already used to train video diffusion models\. We propose LaMo, which formulates a latent motion prior over frame\-to\-frame latent changes conditioned on the current latent and prompt\. This prior is exposed through two lightweight readouts: a macro motion drift used during training as a Motion Drift Loss, and a learned micro motion field used during sampling as Motion Prior Guidance\. Both components are plug\-and\-play with existing video diffusion backbones, requiring no architectural or I/O changes\. On VideoPhy and VideoPhy2, LaMo improves CogVideoX backbones and outperforms recent physics\-aware baselines that use external supervision\. On VBench, it preserves overall generation quality while improving motion\-related dimensions\. These results suggest that unlabeled video contains useful motion supervision for improving physical fidelity in modern video diffusion models\.

## Saddle\-to\-Saddle Dynamics in Self\-Supervised Shortcut Learning

**Authors:** Juhwan Kim; yoonsoo nam; Sungyoon Lee

**ID:** 150687 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gFQwJ1LW7D>) | [PDF](<https://openreview.net/pdf?id=gFQwJ1LW7D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150687>)

Although the mechanics of eigenvalue bias of self\-supervised learning \(SSL\) in linear networks are well\-understood, they remain theoretically disconnected from empirical shortcut learning, offering little guidance or intuition\. In this paper, we present a theoretical analysis of this shortcut learning phenomenon through the lens of \\textit\{extent bias\} and \\textit\{amplitude bias\}, two forms of \\textit\{eigenvalue bias\}\. By investigating the relations among extent bias, amplitude bias, and learning priorities in SSL, we demonstrate that SSL prioritizes features based on dimensionality \(object to image ratio\) and amplitude \(backdoor attack intensity\), not their semantic importance\. Our analysis reveals how the eigenvalues of the feature cross\-correlation matrix influence which features are learned earlier, providing insights into why models preferentially learn shortcut features over more generalizable features\.

## TopoPrune: Robust Data Pruning via Unified Latent Space Topology

**Authors:** Arjun Roy; Prajna Malettira; Manish Nagaraj; Kaushik Roy

**ID:** 154394 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DulZFWkYOG>) | [PDF](<https://openreview.net/pdf?id=DulZFWkYOG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154394>)

Geometric data pruning methods, while practical for leveraging pretrained models, are fundamentally unstable\. Their reliance on extrinsic geometry renders them highly sensitive to latent space perturbations, causing performance to degrade during cross\-architecture transfer or in the presence of feature noise\. We introduce TopoPrune, a framework which resolves this challenge by leveraging topology to capture the stable, intrinsic structure of data\. TopoPrune operates at two scales, \(1\) utilizing a \*topology\-aware manifold approximation\* to establish a global low\-dimensional embedding of the dataset\. Subsequently, \(2\) it employs \*differentiable persistent homology\* to perform a local topological optimization on the manifold embeddings, ranking samples by their structural complexity\. We demonstrate that our \*unified dual\-scale topological approach\* ensures high accuracy and precision, particularly at significant dataset pruning rates \(e\.g\., 90%\)\. Furthermore, through the inherent stability properties of topology, TopoPrune is \(a\) exceptionally robust to noise perturbations of latent feature embeddings and \(b\) demonstrates superior transferability across diverse network architectures\. This study demonstrates a promising avenue towards stable and principled topology\-based frameworks for robust data\-efficient learning\.

## A Hierarchical Tokenization Framework for Voxel\-Level fMRI Representation Learning

**Authors:** Karan Singh; Yue Zhao; Mohammadhassan Abbasi; Ehsan Adeli

**ID:** 153906 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Hpd9Zg6RQs>) | [PDF](<https://openreview.net/pdf?id=Hpd9Zg6RQs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153906>)

We introduce HBAR \(Hierarchical Brain Activity Representation\), a hierarchical tokenization framework for learning compact, multi\-scale representations of neuroimaging data\.HBAR organizes voxel\-level resting\-state fMRI into a hierarchy spanning sub\-parcel voxel groups, parcels, and large\-scale functional networks, enabling approximately 415x compression while preserving fine\-grained spatial information beyond conventional parcellation\. The framework supports fixed atlas\-based, fully learned, and softly prior\-guided hierarchies, allowing us to systematically study the role of structured priors in brain representation learning\. Evaluated on large\-scale fMRI data, HBAR substantially improves reconstruction over parcellation\-based and single\-scale tokenization baselines, while supporting downstream modeling of brain dynamics and demographic prediction tasks such as sex classification\. Across reconstruction and downstream evaluation, atlas\-guided hierarchies provide the strongest overall performance, suggesting that established functional atlases encode organizational structure that remains difficult to recover from reconstruction alone\. By combining voxel\-level fidelity, compact discrete tokens, and multiscale brain structure, HBAR offers a practical framework for representation learning in high\-dimensional neuroimaging data\.

## Exploiting Negative Multi\-Cluster Structure in Class\-Wise Embeddings for Weakly Supervised Multi\-Label Learning

**Authors:** Bo Han; Zhuoming Li; Yaxin Hou; Xiaoyu Wang; Hui LIU; Junhui Hou; Yuheng Jia

**ID:** 153676 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jc0lO9zGdF>) | [PDF](<https://openreview.net/pdf?id=Jc0lO9zGdF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153676>)

Class\-wise embeddings provide an effective strategy for multi\-label learning \(MLL\) by capturing the distinct discriminative properties of each class\. However, existing methods based on class\-wise embeddings typically overlook the internal distribution of negative samples\. We uncover a pivotal phenomenon: negative instances in class\-wise spaces naturally organize into multiple semantically coherent sub\-clusters, a structure that persists across diverse modalities even under extreme label sparsity\. Leveraging this insight, we propose a Structure\-Aware Pseudo\-label mining framework for weakly supervised MLL \(SaPu\)\. The proposed framework mines positive pseudo\-labels by aggregating cluster\-level consistency across different class\-wise embeddings and identifies negative pseudo\-labels via neighborhood exclusion\. These high\-quality signals further guide class\-wise contrastive learning, establishing a self\-reinforcing loop that iteratively refines embeddings\. Extensive experiments on image, text and audio benchmarks validate that SaPu outperforms state\-of\-the\-art methods by an average of \*\*4\.46%\*\* in challenging single\-label supervision scenarios\. \*\*Code is available in the supplementary material\*\*\.

## Steering Optimisation Trajectories in Diffusion Representation Learning

**Authors:** Rajat Rasal; Tian Xia; Avinash Kori; Ben Glocker

**ID:** 149680 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oF1hsTW7Rz>) | [PDF](<https://openreview.net/pdf?id=oF1hsTW7Rz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149680>)

We study why diffusion autoencoders can achieve similar image quality while learning substantially different latent structures\. We trace this behaviour to optimisation dynamics; we analyse curves of image reconstruction against latent representation quality, revealing trajectories that organise around two distinct regimes early in training\. Models in the reconstruction regime prioritise image fidelity early, whereas those in the disentanglement regime improve reconstruction and disentanglement more gradually\. We hypothesise that this behaviour can be influenced by targeting shortcut pathways in the diffusion U\-Net and controlling early noise\-level exposure, thereby shaping the reconstruction\-disentanglement trade\-off during training\. To steer optimisation toward stronger representations, we introduce SteeringDRL, combining gated residual U\-Nets with a simple noise\-level exposure curriculum for training\. Across disentanglement benchmarks, SteeringDRL improves representation quality and reduces seed sensitivity\. Our method further extends to spatial disentanglement in object\-centric learning, improving segmentation quality on synthetic and real\-world datasets\.

## Treating Hyperparameters as Interventions: Task\-Invariant Representation Learning for Transferable HPO

**Authors:** Mengyang Li; Ou Wu

**ID:** 155538 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4qFz5DLdjS>) | [PDF](<https://openreview.net/pdf?id=4qFz5DLdjS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155538>)

We argue that hyperparameter optimization \(HPO\) is best approached not as a black\-box search problem but as the inverse of an intervention: when training dynamics are observed, $\\lambda$ is the controlled cause and the task is what is invariant to it, and the cost of HPO is largely the cost of failing to separate the two\. We propose CA\-HPO \(Configuration\-invariAnt HPO\), a transfer HPO framework that learns a task representation explicitly constrained to be invariant under hyperparameter interventions and predictively sufficient for performance\. We define this target representation as the solution to a constrained variational problem rather than as an identified latent variable, so the framework avoids the strong identifiability assumptions that previous causal representation learning approaches demand\. We derive three guarantees in this setting: a population\-level result showing that minimizing a predictive loss together with an invariance penalty recovers the target representation, a finite\-sample bound on the estimation error of the empirical minimizer, and a counterfactual prediction risk bound that decomposes into representation error, meta\-generalization error, and aleatoric noise\. Experiments on Llama\-3\-8B fine\-tuning and twelve classical benchmarks show 5 to 15 times speedup over Bayesian optimization and recent meta\-HPO baselines, while the learned representations remain stable across a 100\-fold range of learning rates, transfer across domains with different hyperparameter spaces, and pass a direct conditional independence test against $\\lambda$\.

## Reformulating Neural Operators in $d\+1$ Dimensions for Embedding Evolution

**Authors:** Haoze Song; Zhihao Li; Xiaobo Zhang; Zecheng Gan; Zhilu Lai; Wei Wang

**ID:** 149558 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pD3kqLbub6>) | [PDF](<https://openreview.net/pdf?id=pD3kqLbub6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149558>)

Neural Operators \(NOs\) are powerful architectures for learning mappings between function spaces\. While most advances focus on refining kernel parameterizations over the $d$\-dimensional physical domain, the evolution of lifted embeddings remains underexplored, which often drives models toward computationally expensive embedding\-scaling designs to improve approximation\.  In this paper, we introduce an auxiliary function dimension that models embedding evolution in operator form, thereby reformulating the NO pipeline in $d\+1$ dimensions\. We instantiate this framework via Fourier\-based operators acting jointly on the physical and auxiliary domains, yielding a basis\-diversified auxiliary evolution module as an alternative to brute\-force embedding scaling\. Across more than ten increasingly challenging benchmarks, ranging from the 1D heat equation to the highly nonlinear 3D Rayleigh–Taylor instability, our model consistently achieves the lowest relative $L\_2$ error among the evaluated baselines\. Crucially, this advantage is empirically supported by \(1\) controlled budget\-aware comparisons against scaled and ablated baselines; \(2\) robustness under mixed\-resolution training and super\-resolution inference; and \(3\) zero\-shot generalization to unseen temporal regimes\. In addition, we present a broader set of design choices for lifting and recovery operators, demonstrating their impact on our model’s predictive performance\.

## Differentiable Learning of Lifted Action Schemas for Classical Planning

**Authors:** Jonas Reiter; Jakob Gebler; Hector Geffner

**ID:** 153043 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OSDbmV3Glw>) | [PDF](<https://openreview.net/pdf?id=OSDbmV3Glw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153043>)

Classical planners can effectively solve very large deterministic MDPs represented in STRIPS or PDDL where states are sets of atoms over objects and relations, and lifted action schemas add or delete these atoms\. This compact representation yields strong search heuristics and provides an ideal setting for structural generalization, since lifted relations and action schemas give rise to infinitely many domain instances\. A central challenge is to learn these relations and action schemas from data, and recent approaches have addressed this problem using different types of observations\. In this work, we develop a novel neural network architecture for learning action schemas from traces where states are fully observed but action arguments are unobserved\. The problem is a simplification but an important step towards learning planning domains from sequences of images and action labels, and we aim to solve this simplification in a nearly perfect manner\. The challenge lies in learning the action schemas while simultaneously identifying the action arguments from observed state changes\. Our approach yields a robust differentiable component that can then be integrated into larger neuro\-symbolic models\. We evaluate the architecture on various planning domains, where the learned lifted action schemas must recover the ground\-truth structure\. Additionally, we report experiments on robustness to observation noise and on a variation related to slot\-based dynamics models\.

## Words That Make Language Models Perceive

**Authors:** Sophie L\. Wang; Phillip Isola; Brian Cheung

**ID:** 155330 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6R1lPBxpMO>) | [PDF](<https://openreview.net/pdf?id=6R1lPBxpMO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155330>)

Large language models \(LLMs\) trained purely on text ostensibly lack any direct perceptual experience, yet their internal representations are implicitly shaped by multimodal regularities encoded in language\. We test the hypothesis that explicit sensory prompting can surface this latent structure, bringing a text‑only LLM into closer representational alignment with specialist vision and audio encoders\. When a sensory prompt tells the model to 'see' or 'hear', it cues the model to resolve its next‑token predictions as if they were conditioned on latent visual or auditory evidence that is never actually supplied\. Our findings reveal that lightweight prompt engineering can reliably activate modality‑appropriate representations in purely text‑trained LLMs\.

## Towards Identifiable Latent Additive Noise Models

**Authors:** Yuhang Liu; Zhen Zhang; Dong Gong; Erdun Gao; Biwei Huang; Mingming Gong; Anton van den Hengel; Kun Zhang; Prof Javen Qinfeng Shi

**ID:** 149628 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oeIa1kYSuD>) | [PDF](<https://openreview.net/pdf?id=oeIa1kYSuD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149628>)

Causal representation learning \(CRL\) offers the promise of uncovering the underlying causal model by which observed data was generated, but the practical applicability of existing methods remains limited by the strong assumptions required for identifiability and by challenges in applying them to real\-world settings\. Most current approaches are applicable only to relatively restrictive model classes, such as linear or polynomial models, which limits their flexibility and robustness in practice\. One promising approach to this problem seeks to address these issues by leveraging changes in causal influences among latent variables\. In this vein we propose a more general and relaxed framework than typically applied, formulated by imposing constraints on the function classes applied\. Within this framework, we establish partial identifiability results under weaker conditions, including scenarios where only a subset of causal influences change\. We then extend our analysis to a broader class of latent post\-nonlinear models\. Building on these theoretical insights, we develop a flexible method for learning latent causal representations\. We demonstrate the effectiveness of our approach on synthetic and semi\-synthetic datasets, and further showcase its applicability in a case study on human motion analysis, a complex real\-world domain that also highlights the potential to broaden the practical reach of identifiable CRL models\.

## Attention Transfer Is Not Universally Effective for Vision Transformers

**Authors:** Huaiyuan Qin; Muli Yang; Gabriel James Goenawan; Peng Hu; Chen Gong; Xi Peng; Hongyuan Zhu

**ID:** 156052 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0o4UJkkMvY>) | [PDF](<https://openreview.net/pdf?id=0o4UJkkMvY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156052>)

A recent work shows that Attention Transfer, which transfers only the attention patterns from a pre\-trained teacher Vision Transformer \(ViT\) to a randomly initialized standard student ViT, is sufficient to recover the full benefit of the teacher's pre\-trained weights\. We revisit this finding on a comprehensive benchmark of 20 teachers from 11 well\-known ViT families and reveal that Attention Transfer is not universally effective\.  While 7 families transfer successfully, 4 consistently fail, falling up to 5\.1\\% below the from\-scratch no\-transfer baseline\.  Further results demonstrate that this failure is family\-consistent across model sizes, and persists under extended training durations, different transfer datasets, and out\-of\-distribution evaluations\. Controlled analyses then consistently localize the problem to the attention\-routing channel, indicating that the key issue is not whether the student can match the teacher's attention patterns, but whether the matched patterns remain functional for the student\. Crucially, we identify architectural mismatch between the pre\-trained teacher and the standard student as the primary mechanism\. By adding only the teacher's native architectural components to the student in a randomly initialized state, we completely reverse the failure for all 4 families\.  Notably, these components alone do not improve from\-scratch training, confirming that they specifically unlock the usability of the teacher's attention\. We further systematically show that this failure is not explained by the inadequate choice of transfer loss or by differences in pre\-training recipes\. Our findings refine the prevailing understanding of attention in ViT representations: attention is sufficient only when the student architecture matches the teacher\.

## Memorization Is Folding: Topological Signatures of Noisy\-Label Learning

**Authors:** Zhongtian Sun; Fan Mo; Prayag Tiwari; KELIN XIA

**ID:** 151437 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ahmoHHobId>) | [PDF](<https://openreview.net/pdf?id=ahmoHHobId>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151437>)

Neural networks can fit noisy labels, but how their representations change as memorization begins remains unclear\. We study this using persistent homology of penultimate\-layer representations across training\. Across 8 datasets and 8 architectures, we find a consistent pattern: the discriminative topological signal under noise appears in $H\_1$ rather than $H\_0$, with noisy representations preserving more loop structure than clean representations as training proceeds, supporting a folding view of memorization\. When the clean topological signal decreases over training, the noisy signal does not decline as quickly as the clean one, producing an early crossover between clean and noisy trajectories; across the derivation set, crossover occurs when clean trajectories fade and the clean\-\-noisy gap closes, whereas no\-crossover cases remain persistent or do not close the gap within training\. The same framework also correctly predicts the held\-out ResNet\-34/CIFAR\-10 case, confirmed in all 9 runs\. The signal reveals aspects of training dynamics that standard statistics do not represent directly\. Activation variance is stronger on average, but the topological measure becomes informative earlier than validation loss and remains significant after controlling for intrinsic dimension\. It also distinguishes irreducible label contradictions, including instance\-dependent and CIFAR\-10N human noise, from learnable confusions such as asymmetric noise\. The same measure also falls during grokking in 10 of 12 modular\-arithmetic runs and, after per\-pipeline calibration from a clean reference plus runs at known noise rates, predicts population\-level noise severity without per\-sample labels, achieving per\-pipeline $R^2 \\geq 0\.94$ across six tested configurations\. These findings position topology as both an explanatory lens on noisy\-label memorization and a practical early\-stage diagnostic for studying, auditing and improving learning under label noise\.

## MSC\-Mol: Modality\-Synergy Contrasting for Multimodal Molecular Representation Learning

**Authors:** Ziyu Fan; Enqi Dong; Yahan Li; Shuhong Liu; Zeyu Zhong; Yuanpeng Zhang; Qahtan A Aljnabi; Min Wu; Lei Deng

**ID:** 155160 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7pssHVuN6z>) | [PDF](<https://openreview.net/pdf?id=7pssHVuN6z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155160>)

Multimodal molecular representation learning plays a crucial role in drug discovery and molecular property prediction\. Existing cross\-modal alignment approaches primarily reinforce redundant information across modalities, often neglecting complementary synergistic signals critical for downstream tasks\. To address this limitation, we propose MSC\-Mol, a modality\-synergy contrastive pre\-training framework that encodes SMILES sequences, 2D molecular graphs, and 3D conformations into a unified fused representation, optimized via contrastive learning over augmented views\. By introducing challenging negatives, including single\-modality replacements and modality recombinations, MSC\-Mol encourages the model to capture fine\-grained cross\-modal correspondences beyond dominant\-modality shortcuts\. We further design probe tasks\-long\-range pharmacophore prediction, molecular property regression, and functional\-group combination classification\-to validate that MSC\-Mol preserves both modality\-specific and synergistic information\. Extensive experiments demonstrate that MSC\-Mol consistently outperforms existing 2D, 3D, and multimodal pre\-training methods on molecular property prediction, drug–target interaction\(DTI\) tasks, and probe evaluations, highlighting its effectiveness in capturing cross\-modal synergy and long\-range molecular dependencies\. The code is available at https://anonymous\.4open\.science/r/MSC\-Mol\-169D\.

## Extracting Governing Equations from Latent Dynamics via Multi\-View Contrastive Learning

**Authors:** Paolo Muratore; Mackenzie Mathis

**ID:** 155982 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1NoGYV3xUP>) | [PDF](<https://openreview.net/pdf?id=1NoGYV3xUP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155982>)

Identifying latent dynamical systems from noisy, high\-dimensional measurements is a central problem at the intersection of representation learning, system identification, and scientific discovery\. We present DYSCO, a multi\-view temporal contrastive learning algorithm that jointly recovers latent trajectories and the governing dynamics from such observations, by leveraging multiple independent noisy views of the same underlying process to disentangle signal from noise\. By parameterizing the dynamics in a structured functional basis, our framework further enables symbolic recovery of the governing equations within an affine gauge\. We offer theoretical guarantees for strong identification up to an affine indeterminacy, extending prior identifiability results to the realistic setting of noisy nonlinear observations\. Empirically, we demonstrate accurate recovery of both latent trajectories and flow fields across a diverse set of dynamical regimes \(e\.g, chaotic, oscillatory, and metastable\) under both Gaussian and Poisson observation noise, the latter being particularly relevant for neural recordings\.

## Learning Pareto Stationary Fronts via Single\-Pass Backpropagation

**Authors:** Elina Rojin Celik; Marcos M\. Raimundo; Isabel Valera

**ID:** 150498 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=heKXlAkgm2>) | [PDF](<https://openreview.net/pdf?id=heKXlAkgm2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150498>)

We propose MOSEL \(Multi\-Objective Stackelberg Efficient Learning\), a framework for a posteriori multi\-objective optimization \(MOO\) in deep neural networks that recovers a full front of Pareto stationary solutions at the computational cost of standard single\-objective training\. MOSEL reformulates the problem as a bilevel optimization problem that leverages network modularity to decouple representation learning from objective\-preference alignment\. Casting the bilevel problem as a Stackelberg game enables solving the original a posteriori MOO problem in a single forward–backward pass\.  As a result,MOSEL matches the time and memory efficiency of standard single\-objective training while enabling scalable Pareto stationary front learning\.  Empirically, MOSEL uncovers diverse and optimal Pareto frontiers in strongly conflicting settings \(e\.g\., fairness–accuracy\)\. Remarkably, even in weakly conflicting regimes such as multi\-task learning, it consistently converges to solutions closer to the utopia point, outperforming both standard single\-objective training and specialized multi\-task learning methods\.  These results highlight the broader potential of a posteriori MOO learning as a pathway to efficiently learn more diverse and robust representations, ultimately improving generalization\.

## Intrinsic Information Theoretic Analysis of ReLU Nets

**Authors:** Johan Mylius\-Kroken; Elisabeth Wetzer; Ali Ramezani\-Kebrya; Robert Jenssen; Kristoffer Wickstrøm

**ID:** 155566 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4dnKZPefBt>) | [PDF](<https://openreview.net/pdf?id=4dnKZPefBt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155566>)

Mutual information \(MI\) is fundamental to representation\-learning analysis in deep networks, but in high dimensions MI estimators depend on hyperparameters \-\-\- bin widths, kernel bandwidths, neighbourhood radii, auxiliary networks \-\-\- whose bias often dominates the signal\. We show that continuous piecewise\-linear \(CPWL\) networks, including ReLU networks, admit an intrinsic information\-theoretic analysis that avoids this pitfall: their inherent partition of the input space into convex linear regions assigns to every input a discrete region label $\\Pi$ alongside the continuous representation $T$\.  We decompose $I\(Y; T\)$ exactly into geometric terms, where the \\emph\{routing information\} $I\(Y; \\Pi\)$ admits a hyperparameter\-free plug\-in estimator that approximates a population lower bound on every other MI term in the decomposition\. When the partition saturates, a functional\-equivalence quotient at relative Frobenius tolerance $\\varepsilon \\in \[0, 2\]$ collapses regions implementing the same linear operator and restores informativeness\. Empirically, the routing estimator correlates strongly with three established MI baselines \{\\it without any hyperparameter\}, and the functional quotient at moderate $\\varepsilon$ recovers informative estimates in the regime where the raw partition is bounded by $\\log\_2 N$ rather than $H\(Y\)$\. We provide a parameter\-free framework for analysing the internal information geometry of CPWL networks, grounded in their inherent piecewise\-linear structure rather than in external discretisation\.

## CoANeRV: Coordinate\-Aware Token\-Space Neural Video Representation

**Authors:** Jialong Guo; Ke Liu; MENGXUAN LI; Jiajun Bu; Haishuai Wang

**ID:** 152151 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VA2hCFiIsa>) | [PDF](<https://openreview.net/pdf?id=VA2hCFiIsa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152151>)

Neural representations for videos \(NeRV\) have shown strong reconstruction fidelity by storing video\-specific information in network weights\. However, existing formulations typically require either costly per\-video optimization or video\-specific weight generation, making it difficult to scale to efficient amortized video representation\. We propose \\textbf\{CoANeRV\}, a coordinate\-aware token\-space neural video representation framework that shifts video\-specificity from decoder weights to compact latent video tokens\. Instead of optimizing or generating an instance\-specific network, CoANeRV uses a shared coordinate\-conditioned decoder to reconstruct videos by querying tokenized video content at continuous spatio\-temporal coordinates\. This formulation decouples video representation from parameter instantiation, enabling feed\-forward video encoding while retaining coordinate\-level reconstruction flexibility\. To make token\-space reconstruction effective, CoANeRV introduces a coordinate\-aware decoding architecture that aligns spatio\-temporal queries with video tokens through axis\-adaptive positional encoding and temperature\-modulated cross\-attention\. Block\-wise coordinate querying further reduces peak attention memory, making high\-resolution reconstruction practical\. Experiments on diverse video datasets show that CoANeRV consistently improves reconstruction quality over prior feed\-forward NeRV and INR baselines, reduces peak memory compared with attention\-based coordinate decoders, and provides efficient amortized encoding without per\-video optimization\. These results suggest that token\-space neural representation is a scalable alternative to conventional weight\-space NeRV formulations\. The code is available at https://anonymous\.4open\.science/r/CoANeRV\-50F7/\.

## Geometric Prompt\-Trajectory Planning for Test\-Time Scaling

**Authors:** Zhengqi Pei; Anran Zhang; Qingming Huang; Shuhui Wang

**ID:** 150955 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e22Krci8Dn>) | [PDF](<https://openreview.net/pdf?id=e22Krci8Dn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150955>)

Test\-time scaling \(TTS\) improves large language model \(LLM\) reasoning by spending additional inference\-time compute, most commonly through width\-heavy repeated sampling and aggregation\.  However, this strategy scales cost almost linearly with the number of calls and can remain brittle when the sampled trajectories share the same failure mode\.  We introduce Maze, a test\-time scaling framework that shifts computation away from repeated target\-model calls and toward LLM\-free planning over ordered few\-shot exemplars\.  The central idea is to treat an ordered exemplar sequence as a prompt trajectory embedded in a latent geometric space\.  Instead of asking the LLM for many independent attempts, Maze first ranks candidate prompt trajectories using cached encoder representations and a path scorer, $\{\\it i\.e\.\}$, a lightweight learnable metric, then spends one call \(or a few calls\) only on the most promising trajectories\.  This design preserves black\-box deployability, since the planner is decoupled from the target LLM and can be implemented with a separate frozen encoder\.  Across various challenging reasoning benchmarks, single\-call Maze consistently outperforms strong single\-call prompt\-optimization baselines,  and MultiMaze recovers a large fraction of width\-heavy TTS gains with substantially fewer computational cost measured by number of LLM calls and latency\.  We further present a theoretical perspective showing when prompt\-path ranking can recover much of the benefit of best\-of\-$N$ style scaling:  if high\-utility prompt trajectories are sufficiently rankable and sufficiently covered by the explored pool, a deeper planner\-side search can substitute for a substantial amount of width\-heavy sampling\.

## MC\-H: Multi\-Granularity Clustering with Hyperspherical Determinantal Point Process

**Authors:** Yingjie Ge; Kun Zhou; Jieyu Zhao; Xulun Ye

**ID:** 154620 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CCVwguGHRe>) | [PDF](<https://openreview.net/pdf?id=CCVwguGHRe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154620>)

Deep clustering struggles when coarse\-grained and fine\-grained semantics coexist in the same dataset, as a unified partitioning strategy tends to either over\-separate coarse categories or miss subtle fine\-grained differences\. To address this problem, we propose the adaptive multi\-granularity clustering framework in a hyperspherical space \(MC\-H\)\. The framework combines Dynamic Prototype\-Center Assignment \(DPCA\), a Hyperspherical Determinantal Point Process \(H\-DPP\) module that adaptively regulates repulsion according to local structure and promotes stronger separation in dense regions while preserving flexibility in sparse ones, and a Semantic Subspace Denoising \(SSD\) module that suppresses non\-semantic variations and improves cluster compactness\. Extensive experiments across datasets with different semantic granularities show that our method consistently outperforms existing approaches and effectively unifies clustering across the full granularity spectrum\.

## Control First, Robustness Next: Decoupled Representation Learning for Visual RL Generalization

**Authors:** heo chanyong; Hyelyn Jeong; Jongchan Park; Seungjun Oh; Yusung Kim

**ID:** 155463 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5QHgjQxxKM>) | [PDF](<https://openreview.net/pdf?id=5QHgjQxxKM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155463>)

Visual reinforcement learning \(RL\) is promising for real\-world problems such as autonomous driving, robotic locomotion, and manipulation, but remains highly vulnerable to visual distribution shifts between training and deployment\. Existing methods improve robustness through Q\-consistency regularization, masking, and auxiliary objectives, yet most of them follow a coupled representation learning paradigm in which control\-oriented and robustness\-oriented representation learning are jointly optimized within the same training framework\. We argue that this coupled structure can introduce harmful interference between control learning and robustness learning, degrading original\-environment control performance and limiting generalization under visual shifts\. To address this issue, we propose Separate Then Align Representations \(STAR\), which reformulates visual RL generalization as a problem of decoupled representation learning\. Specifically, we first learn a control\-relevant reference representation through online RL under weak augmentation, and then perform an offline post\-representation alignment stage that maps strongly augmented inputs back to this reference representation\. Experiments on RL\-ViGen benchmarks spanning DMControl and Robosuite show that STAR achieves strong generalization under visual distribution shifts while better preserving performance in the original environment than prior coupled approaches\. Our source codes are available in the supplementary material\.

## AutoManifold: Agentic Design of Data Visualisation Algorithms via Manifold Embedding

**Authors:** Burak Susam; ruiyuan kang; Tingting Mu

**ID:** 154589 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CSer8vsuhS>) | [PDF](<https://openreview.net/pdf?id=CSer8vsuhS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154589>)

Manifold embedding for data visualisation is dominated by a small set of hand\-designed state\-of\-the\-art \(SOTA\) algorithms\. Their design targets are fixed at development time,  resulting in inflexible algorithmic behaviour that cannot be readily steered toward user\-specified structural priorities\. Hand\-designing  new embedding algorithms to address user  priority requires highly specialised expertise and is time consuming\. To address autonomous algorithm design tailored to  user preference, we introduce an agentic algorithm generation pipeline AutoManifold\. It  composes  new manifold embedding algorithms from a constrained vocabulary of affinity, cost, and optimisation primitives, supported by multi\-agent large\-language\-model \(LLM\) orchestration\. AutoManifold  conditions every stage of its design on user\-specified structural preservation preferences, and iteratively refines the algorithm configuration through an LLM\-guided, metric\-grounded iterative loop\. We compare the generated algorithms  against   three strongest and most frequently used SOTA \(t\-SNE, UMAP, and PaCMAP\)  on real\-world datasets spanning different difficulty regimes  under identical evaluation infrastructure\. The results demonstrate that LLM\-driven, priority\-conditioned algorithm synthesis can move beyond hyperparameter tuning, producing genuinely new  algorithms  that outperform traditional hand\-designed methods, in their ability to steer towards user\-specified properties without compromising much   inherent   structure in the original data\.

## Topology\-Aware Representation Alignment for Semi\-Supervised Vision\-Language Learning

**Authors:** Junwon You; Mihyun Jang; Sangwoo Mo; Jae\-Hun Jung

**ID:** 153660 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JgmIV10Z6r>) | [PDF](<https://openreview.net/pdf?id=JgmIV10Z6r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153660>)

Vision\-language models have shown strong performance, but they often generalize poorly to specialized domains\.  While semi\-supervised vision\-language learning mitigates this limitation by leveraging a small set of labeled image\-text pairs together with abundant unlabeled images, existing methods remain fundamentally pairwise and fail to model the global structure of multimodal representation manifolds\. Existing topology\-based alignment methods rely on persistence diagram matching, which neither guarantees geometric alignment nor utilizes the image\-text pairing information central to vision\-language learning\. We propose Topology\-Aware Multimodal Representation Alignment \(ToMA\), a framework that uses persistent homology to identify topologically salient edges and aligns them across modalities through available cross\-modal correspondences\.  ToMA leverages both $H\_0$\-death edges and lightweight $H\_1$\-birth edges, allowing it to capture both connectivity and cycle structure without constructing 2\-simplices\.  Experiments show that ToMA yields stable gains, with clear improvements on remote sensing and modest but consistent benefits on fashion retrieval\. Additional analysis shows that ToMA is more stable than alternative topology\-based objectives and that lightweight $H\_1$\-birth edges provide useful higher\-order structural signals\.

## Context\-Aware Generative Imputation for Robust Multimodal Learning in Missing Modality Scenarios

**Authors:** Jungwon Choi; Juho Lee

**ID:** 151257 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bk4w1XMdSu>) | [PDF](<https://openreview.net/pdf?id=bk4w1XMdSu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151257>)

Multimodal models deployed in real\-world settings often suffer from missing data modalities due to acquisition costs, privacy constraints, or sensor failures, leading to severe performance degradation\. Existing approaches based on shared representations or expert routing struggle when modality\-specific information is absent\. A key challenge is that, when a modality is unobserved, the target representation is not uniquely identifiable, making naive latent prediction prone to degenerate or collapsed solutions\. We propose Cross\-modal Embedding Prediction and Alignment \(CEPA\), a framework that addresses missing modalities through task\-driven latent representation imputation rather than raw input synthesis\. CEPA employs masked representation learning with data\-driven masking patterns and a context\-conditional distribution alignment objective that stabilizes latent prediction and prevents representation collapse\. We evaluate CEPA on the MIMIC multimodal benchmark spanning EHR time\-series, chest X\-rays, and clinical notes, across three clinical prediction tasks under both controlled \(MCAR\) and naturally occurring \(MNAR\) modality absence\. CEPA consistently outperforms prior missing\-modality methods, with ablations confirming the contribution of adaptive masking and context\-conditional alignment\.

## Environment\-Robust Representation Learning with Empirical Bayes

**Authors:** Yuli Slavutsky; Matthew Shen; Bohan Wu; David Blei

**ID:** 151010 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dcFIgr2nN2>) | [PDF](<https://openreview.net/pdf?id=dcFIgr2nN2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151010>)

We consider multi\-environment prediction problems\. We assume the environments change the distribution of a latent variable, while the mechanisms generating observed covariates and targets remain stable conditional on that variable\. For example, hospitals or clinical cohorts may differ in the prevalence of latent patient states, even though the relationships between those states, physiological measurements, and outcomes remain unchanged\.  Given a dataset from multiple environments, we formulate a Bayesian model for such problems and derive the corresponding variational objective\. We show that this objective decomposes into per\-environment terms and an additional cross\-environment balancing term induced by the model's structure\. We use an empirical Bayes method to set the prior and incorporate it into the objective\. Based on this objective, we develop an amortized variational algorithm for posterior approximation, and use the resulting learned latent variables to form predictions in new environments\. We study our approach through simulations and real\-world studies of astronomical source identification, microbiome\-based disease detection, and ICU sepsis prediction\. Across these settings, our method outperforms previous approaches for prediction in new environments\.

## Microstructure Descriptor Fields as Supervision for Scientific Images

**Authors:** Mohamed Wahib; Du Wu; Cong Ma; Isaac Lyngaas; Xiao Wang; Enzhi Zhang; Peng Chen; Satoshi Matsuoka

**ID:** 149911 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mHVHXzcbr7>) | [PDF](<https://openreview.net/pdf?id=mHVHXzcbr7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149911>)

Scientific images are often governed less by exact pixel fidelity than by preservation of microstructure: morphology, connectivity, anisotropy, interface complexity, phase organization, and characteristic length scales\. Yet modern image\-learning objectives, including masked image modeling and reconstruction losses, supervise models in pixel, token, or latent feature space rather than in the space of scientific observables\. We introduce MICROFIELD, a supervision framework that represents a scientific image by a field of microstructure descriptors computed over spatial regions\. A descriptor field can be induced on a uniform grid, a quadtree, an octree, a learned partition, or a hierarchy produced by a high\-resolution image model\. Rather than proposing a new masked autoencoder architecture, MICROFIELD contributes an objective\-level mechanism: it trains models to preserve local descriptors, cross\-scale descriptor transitions, and level\-wise descriptor distributions\. Because descriptor fields are defined over region systems rather than model architectures, MICROFIELD applies to uniform grids, adaptive partitions, and hierarchical models alike\. The framework is compatible with self\-supervised pretraining, supervised learning, and reconstruction; in this paper, we focus on masked self\-supervised pretraining as the primary instantiation\. MICROFIELD provides a practical path toward physics\-inspired representation learning for scientific images without requiring explicit governing equations or domain labels\.

## How Do Language Models Compose Functions?

**Authors:** Apoorv Khandelwal; Ellie Pavlick

**ID:** 150331 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iuShT9gVLr>) | [PDF](<https://openreview.net/pdf?id=iuShT9gVLr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150331>)

While large language models \(LLMs\) appear to be increasingly capable of solving compositional tasks, it is an open question whether they do so using compositional mechanisms\. In this work, we investigate how feedforward LLMs solve two\-hop factual recall tasks, which can be expressed compositionally as $g\(f\(x\)\)$\. We first confirm that modern LLMs continue to suffer from the "compositionality gap", i\.e\. their ability to compute both $z = f\(x\)$ and $y = g\(z\)$ does not entail their ability to compute the composition $y = g\(f\(x\)\)$\. We then decode residual stream representations and identify two processing mechanisms: one which solves tasks \*compositionally\*, computing $f\(x\)$ along the way to $g\(f\(x\)\)$, and one which solves them \*directly\*, without any detectable signature of the intermediate variable $f\(x\)$\. Finally, we find that embedding space geometry is strongly related to which mechanism is employed, where the idiomatic mechanism is dominant when tasks are represented by translations from $x$ to $g\(f\(x\)\)$ in the embedding spaces\.

## Geometry\-Aware Self\-Supervised Electrophysiology Representation Learning

**Authors:** Subhrajit Dey; Ping\-Jung Lu; Visweswar Parupudi; Malhar Patel; Margaret\-Estefani Conde Paredes; Mihály Vöröslakos; Anna Maslarova; Gyorgy Buzsaki; Saurabh Vyas; Erdem Varol

**ID:** 150561 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hEiyAXz4A8>) | [PDF](<https://openreview.net/pdf?id=hEiyAXz4A8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150561>)

Precise localization of recording electrodes is fundamental to systems neuroscience; yet, current methods depend on labor\-intensive post\-hoc histology, which is incompatible with real\-time feedback or chronic implants\. We test the hypothesis that the electrical signals being recorded themselves carry sufficient anatomical information to localize their recording site in 3D atlas coordinates, without the need for histology\. To probe this, we introduce a self\-supervised framework that learns geometry\-aware representations of single\-channel local field potentials \(LFP\), leveraging probe channel geometry as a self\-supervisory signal\. We compare speech\-based SSL objectives \(e\.g\., masked prediction\) against geometry\-aware objectives that constrain the embedding space to mirror physical channel layout along the probe\. These representations outperform masked\-prediction baselines, and the gains compound at larger data scales\. We test downstream analysis with 3D coordinate regression and brain region classification, benchmarking three SSL backbones \(Wav2Vec 2\.0, Whisper, and Data2Vec\) against supervised baselines \(AnyNet, ViT, and classical spectral classifiers\) across datasets, laboratories, species, and probe technologies\. Our method achieves state\-of\-the\-art results in brain region classification and 3D coordinate regression from raw single\-channel LFP, outperforming all baselines, affirming our hypothesis\.

## Debiasing Random Oblique Projections for Subsampled OLS and Fast CUR in High Dimensions

**Authors:** Chengmei Niu; Sachin Garg; Michal Derezinski; Zhenyu Liao

**ID:** 149261 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rdmZzxYKam>) | [PDF](<https://openreview.net/pdf?id=rdmZzxYKam>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149261>)

Random sampling is a fundamental tool in modern machine learning and numerical linear algebra for reducing the computational cost of large\-scale matrix problems\. Existing analyses, however, rely primarily on subspace embedding guarantees, which do \*not\* precisely characterize the statistical bias of \*nonlinear\* random oblique projections induced by sampling, which arises ubiquitously in subsampled least squares and fast low\-rank approximation methods\. Because \(pseudo\)inversion is \*nonlinear\*, these random oblique projections can be systematically \*biased\* even when the underlying sketch is unbiased, thereby introducing hidden bias into downstream least squares and low\-rank approximation solutions\.  In this work, we develop a unified non\-asymptotic theory for random oblique projections in high dimensions\. We show that standard random sampling schemes generally induce a systematic statistical \*bias\* overlooked by classical subspace embedding\-style analyses, and we propose a principled debiasing framework to correct it\. We illustrate the power of the theory through two canonical applications\.  For subsampled least squares, we obtain sharp bias\-\-variance characterizations, reveal previously unrecognized statistical \*suboptimality\* in widely used sampling schemes, and identify when debiasing yields provable improvements\.  For fast CUR decomposition, we develop a debiased approach with improved approximation accuracy\.  Numerical experiments further validate our theoretical findings\.

## DeGlare: Self\-Supervised Specular Removal for Industrial Metallic Surfaces via Multi\-Illumination Priors

**Authors:** Bisma Amjad; Henry Wood; William Jacobs; Andrew Mills

**ID:** 153930 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HZaT8wSiXs>) | [PDF](<https://openreview.net/pdf?id=HZaT8wSiXs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153930>)

In industrial machine vision, removing specular highlights is crucial for accurate surface analysis; however, existing open research remains largely confined to natural images, limiting its efficacy on highly reflective metallic surfaces\. When used for zero\-shot inference, these methods generate artifacts, making them unreliable for specialized industrial scenes\. Since current state\-of\-the\-art methods rely on pixel\-level supervision, adapting them to novel industrial subjects is often impractical\. Such adaptation requires highlight\-free ground truths across hundreds of multi\-view scenes, necessitating hardware\-intensive cross\-polarization, which is difficult to implement at scale in uncontrolled real\-world settings\. To address these challenges, we propose DeGlare, a flexible training framework for highlight removal in specialized industrial settings\. Our approach leverages only a single\-view scene by exploiting its multi\-illumination observations together with a latent permutation strategy, enabling an encoder\-decoder–style architecture to implicitly learn diffuse–specular decomposition\. This eliminates the dependency on the burdensome manual annotation required by state\-of\-the\-art supervised methods\. We demonstrate the practical effectiveness of our approach on a real\-world industrial robotic rig data set, where DeGlare achieves promising performance under limited data and annotation constraints\.

## GeoPMR: Preserving Relational and Hierarchical Geometry in Multimodal Molecular Representation Learning

**Authors:** Lusheng Li; Menglin Yang

**ID:** 152380 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TWQ5xdccxN>) | [PDF](<https://openreview.net/pdf?id=TWQ5xdccxN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152380>)

Multimodal molecular representation learning aligns heterogeneous chemical and cellular signals to predict molecular properties\. The dominant paradigm is instance\-level contrastive alignment, such as InfoNCE and VICReg, which implicitly treats every modality as a point cloud in a shared Euclidean space\. This paradigm overlooks two structural properties of molecular\-cellular data\. \\textit\{First\}, each modality, from atomic fingerprints to cell morphology to transcriptomic response, carries its own intrinsic geometry; directly pulling individual embeddings together can distort the relational structure each modality has learned to express\. \\textit\{Second\}, the modalities form a directed biological cascade, from molecular structure to conformation, gene perturbation, cellular phenotype, and transcriptomic response, whose branching grows exponentially with depth, a regime that Euclidean spaces cannot embed without distortion\. We therefore propose \\textbf\{GeoPMR\}, a pre\-training framework that addresses both properties through two complementary geometric modules: Metric\-Guided Gromov\-Wasserstein alignment \(MGW\) and a Hyperbolic Hierarchical Module \(HHM\)\. \\textbf\{MGW\} equips each modality with a learnable diagonal Riemannian metric and aligns distance matrices rather than individual embeddings via entropic optimal transport, so cross\-modal alignment preserves relational rather than merely pointwise structure\. \\textbf\{HHM\} lifts all modality latents onto the Poincaré ball and applies a probabilistic parent\-child and sibling contrastive loss along the cascade, exploiting the exponential volume growth of negatively curved space to embed the hierarchy with low distortion\. On seven molecular property prediction benchmarks spanning toxicity, bioactivity, and ADME, GeoPMR sets a new state of the art by improving the classification AUC by 1\.4\\% and regression MAE by 1\.7\\%\.

## Not All Instances Should Contribute Equally: Sparse Support Grounding via Unbalanced Transport for Heterogeneous MIL

**Authors:** Hojoon Kim; Beomgu Kang; Hyunseok Seo

**ID:** 150282 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jJwpGhP4Qj>) | [PDF](<https://openreview.net/pdf?id=jJwpGhP4Qj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150282>)

Multiple instance learning \(MIL\) learns from bag\-level labels, but a bag’s label is often supported by only a few hidden instances\. In heterogeneous bags, these useful instances are rare, diverse, and surrounded by many weak or noisy observations\. We propose Sparse Support Grounding, a MIL framework that learns instance influence directly\. The key idea is simple: an instance should not matter just because it can be matched somewhere; it should matter when the match provides reliable label evidence\. Our method forms a compact, bag\-specific evidence support, compares instances with label\-consistent supports, and uses unbalanced transport to estimate how much source mass each instance should retain\. This retained mass becomes the strength of its grounding signal, so reliable evidence shapes training more than nuisance content, while the bag classifier still uses the full bag\. Thus, transport is turned from a matching rule into a way of learning which instances should drive supervision\. Experiments on synthetic MIL, whole\-slide images, and clinical endomicroscopy show consistent gains, with the largest improvements when sparse diagnostic evidence is embedded in heterogeneous nuisance content\.

## Emergence of a Shared Canonical Object Frame from In\-the\-Wild Videos

**Authors:** Tom Fischer; Martin Sundermeyer; Adam Kortylewski; Eddy Ilg

**ID:** 149226 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rzUWi6tqwc>) | [PDF](<https://openreview.net/pdf?id=rzUWi6tqwc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149226>)

Comparing object orientations and positions across different instances requires their poses to be expressed in a shared canonical frame\.  Establishing such frames has traditionally required manual annotation, creating a scaling bottleneck that limits category and instance diversity\. We show that a shared canonical frame can instead emerge from self\-supervised training on object\-centric videos captured in the wild, using only noisy camera poses from Structure\-from\-Motion\. Our key idea is to route all training sequences through a shared geometric bottleneck: a coarse canonical mesh that carries no category\-specific detail\. By learning dense correspondences from image pixels to this mesh, and estimating per\-sequence alignments from noisy SfM geometry, a common canonical frame emerges from multi\-view consistency and the semantic priors of the feature extractor, without any canonical pose labels or category conditioning\. Trained in a self\-supervised manner on $160\{,\}000$ in\-the\-wild object videos, our method achieves competitive accuracy on category\-level pose estimation benchmarks compared to methods that rely on canonical pose supervision\.

## ZeoBench: A Benchmark for Self\-Supervised Learning on 3D Zeolite Representations

**Authors:** Aaron Sun; Yachan Liu; Ping Yang; Peng Bai; Subhransu Maji

**ID:** 139578 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HGGEjqZduv>) | [PDF](<https://openreview.net/pdf?id=HGGEjqZduv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139578>)

Zeolites are an important class of porous crystalline materials with broad applications in gas storage, separations, and catalysis\. Although hundreds of thousands of experimentally realized and hypothetical zeolite structures are known, identifying materials optimized for a target application remains challenging because property labels are expensive to obtain and available only for limited structure–molecule pairs\. While prior work has demonstrated that 3D neural representations can predict zeolite properties effectively, it remains unclear which representation\-learning strategies are most effective in the low\-data regime relevant to materials discovery\. We present ZeoBench, a benchmark for self\-supervised learning on dense 3D representations of all\-silica zeolites, and evaluate the resulting features on six downstream adsorption\-property prediction tasks, across a range of training set sizes\. Our study compares self\-supervised 3D pretraining on volumetric zeolite data, adaptations of image\-pretrained 2D ConvNets and vision transformers to 3D via multiview and channel\-inflation strategies, and 3D ConvNets pretrained on out\-of\-domain volumetric datasets, alongside hand\-crafted descriptors and supervised baselines\. Using our pretraining and evaluation framework, we find self\-supervised 3D representations outperform existing methods and achieve state\-of\-the\-art performance across all label regimes and target molecules\. Learned representations consistently outperform hand\-crafted descriptors, and convolutional architectures are generally more effective than vision transformers in this setting\. These results establish ZeoBench as a practical benchmark for 3D representation learning in zeolites and provide guidance for data\-limited adsorption property prediction\.

## Hierarchical Concept Geometry in Language Representations Emerges from Word Co\-occurrence

**Authors:** Andres Nava; Matthieu Wyart

**ID:** 151722 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YaqVTMzLmi>) | [PDF](<https://openreview.net/pdf?id=YaqVTMzLmi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151722>)

We propose a distributional theory of how hypernymy\-\-\-the \`\`is\-a'' relation between general and specific concepts\-\-\-is encoded geometrically in language representations\. Starting from the empirically verified assumption that words closer on the WordNet hypernym graph co\-occur more often, we characterize theoretically the spectrum of the resulting embedding Gram matrix of word2vec embeddings\. Under mild positivity and decay conditions on the co\-occurrence kernel, we prove that the leading eigenvectors first separate broad taxonomic branches and then progressively finer sub\-branches, producing a \\emph\{hierarchical splitting geometry\} with a coarse\-to\-fine spectral organization that mirrors the tree\. We confirm these predictions in word2vec embeddings across many sampled WordNet subtrees, and show that the same signature extends strikingly well to Gemma 2B unembeddings\. Our results indicate that hierarchical concept geometry in LLMs need not reflect a hierarchy\-specific functional mechanism, but emerges from the spectral structure of pairwise word statistics\.

## Information bottleneck dynamics during learning across artificial and biological neural systems

**Authors:** Nikita Pospelov; Olga Ivashkina; Plusnin Viktor; Olga Rogozhnikova; Anna Ivanova; Ksenia Toropova; Konstantin Anokhin

**ID:** 153429 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LOW2f7vBIQ>) | [PDF](<https://openreview.net/pdf?id=LOW2f7vBIQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153429>)

The information bottleneck offers a candidate general framework for learning, defined by two axes: how much a representation preserves about the external world and how much it carries about the relevant target\. However, empirical evidence for information\-plane dynamics in realistic\-scale artificial networks and in biological systems remains limited\. We address this by tracking information\-plane trajectories during learning in three systems with different substrates, using a matched analytical pipeline\. First, in a gradient\-trained spiking ResNet\-18 on CIFAR\-10 \-\-\- a biologically plausible artificial substrate \-\-\- where a two\-phase fitting\-then\-compression trajectory emerges specifically in the deep layers; the first information\-plane analysis of a spiking network at this scale\. Second, on the open\-source dataset of mouse visual cortex during multi\-week category learning, where our pipeline recovers the published cohort\-level effect now reformulated in IB\-plane terms\. Third, in our own single\-photon miniscope calcium imaging data of mouse hippocampus during multi\-day place learning in open field, where the IB axes map onto the well\-established egocentric\-to\-allocentric transformation: the input axis becomes egocentric sensorimotor state, the output axis becomes allocentric position\. Behavioral and decoder\-baseline controls confirm the hippocampal trajectory reflects experience\-driven learning\. Across all three systems, we observe coherent motion along the relevance axis with learning, while compression emerges only where task structure demands it \-\-\- most pronounced in the SNN\. The information bottleneck plane therefore offers a substrate\-independent coordinate for representation learning, even as the strength of compression along it remains task\-dependent rather than universal\.

## Beyond Generation: Unlocking Discriminative Representations from Diffusion Models

**Authors:** Haowen Cui; Ge Wu; Shuo Chen; Yikai Ge; Ge Gao; Xiang Li; Jun Li; Jian Yang

**ID:** 150350 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=in565dKueK>) | [PDF](<https://openreview.net/pdf?id=in565dKueK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150350>)

Recent advancements in generative models have increasingly leveraged self\-supervised visual representations to guide the synthesis process, significantly improving generation quality and semantic consistency\. However, the reverse paradigm of harnessing the generative process to enhance visual representations remains largely underexplored\. In this paper, we investigate the semantic properties of class tokens synthesized by generative models\. We observe that generative models equipped with representation entanglement can generate class tokens that exhibit stronger discriminative capabilities than those extracted from the original pretrained visual models\. Motivated by this observation, we propose a completely new Generation\-to\-Perception Knowledge Distillation \(GPKD\) framework, where our method generates class tokens as teacher signals to instill global semantics into the student model\. To prevent the degradation of local details, we further incorporate a new masked patch\-level distillation objective\. This dual distillation strategy enhances global representations while mitigating the forgetting of local details, thereby producing more robust representations\. Extensive experiments demonstrate that GPKD obtains consistent improvements across various downstream tasks compared with the base visual encoder, achieving a gain of more than 2\\% in $k$\-NN accuracy on ImageNet\-1K\.

## RAPTOR: Ridge\-Adaptive Logistic Probes

**Authors:** Ziqi Gao; Yaotian Zhu; Qingcheng Zeng; Xu Zhao; Ziqing Wang; Feng Ruan; Kaize Ding

**ID:** 152988 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OpxC93zuD0>) | [PDF](<https://openreview.net/pdf?id=OpxC93zuD0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152988>)

Probing studies what information is encoded in a frozen LLM's layer representations by training a lightweight predictor on top of them\. Beyond analysis, probes are often used operationally in probe\-then\-steer pipelines: a learned concept vector is extracted from a probe and then injected via additive activation steering by adding it to a layer representation during the forward pass\. The effectiveness of this pipeline hinges on estimating concept vectors that are accurate, directionally stable under ablation, and inexpensive to obtain\. Motivated by these desiderata, we propose RAPTOR \(Ridge\-Adaptive Logistic Probe\), a simple $\\ell\_2$\-regularized logistic probe whose validation\-tuned ridge strength yields concept vectors from normalized weights\. Across extensive experiments on instruction\-tuned LLMs and human\-written concept datasets, RAPTOR matches or exceeds strong baselines in accuracy while achieving competitive directional stability and substantially lower training cost; these quantitative results are supported by qualitative downstream steering demonstrations\. Finally, using the Convex Gaussian Min\-max Theorem \(CGMT\), we provide a mechanistic characterization of ridge logistic regression in an idealized Gaussian teacher\-student model in the high\-dimensional few\-shot regime, explaining how penalty strength $\\lambda$ mediates probe accuracy and concept\-vector stability, yielding structural predictions that qualitatively align with trends observed on real LLM embeddings\.

## Understanding the Surprising Generalization Properties of Tabular Foundation Models

**Authors:** Nour Shaheen; Junwei \(Jeremy\) Ma; Alex Labach; Frank Hutter; Anthony L Caterini; Valentin Thomas

**ID:** 150354 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ikYK94iVvj>) | [PDF](<https://openreview.net/pdf?id=ikYK94iVvj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150354>)

Tabular Foundation Models \(TFMs\) increasingly rely on in\-context learning, where a model receives labelled examples at inference time and predicts labels for new inputs without updating its weights\. Existing TFMs are typically trained on either massive synthetic corpora or very large collections of real datasets\. In contrast, we show that surprisingly strong transfer can emerge from self\-supervised pre\-training on just a single real table\. In this setting, we also find that tables tend to be either broadly useful or broadly poor regardless of downstream prediction task, and that the strongest predictor of usefulness is the number of features rather than the number of instances\. This leads to a task\-centric interpretation of tabular pre\-training: the amount and the quality of tasks are essential for the pre\-training of TFMs\. We show that the same task\-centric perspective can help corpus design at scale: fine\-grained column\-level pre\-processing consistently improves downstream performance, while no improvements are observed when we filter or deduplicate at the dataset level\. Finally, we offer a new perspective for how TFMs generalize: we believe that tabular in\-context generalization is largely retrieval\-based, and good models are those that learn to identify relevant examples in the provided context and aggregate them well\. The mechanics of TFMs have been relatively understudied; our task\-centric, retrieval\-based perspective offers a new framework to guide future model and corpus design\.

## NOFE – Neural Operator Function Embedding

**Authors:** Lars Uebbing; Harald Lykke Joakimsen; Siyan Chen; Georgios Leontidis; Kristoffer Wickstrøm; Michael Kampffmeyer; Sébastien Lefèvre; Arnt B Salberg; Robert Jenssen

**ID:** 149024 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tQ6I4ZWHFJ>) | [PDF](<https://openreview.net/pdf?id=tQ6I4ZWHFJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149024>)

Most dimensionality reduction methods treat data as discrete point clouds, ignoring the continuous domain structure inherent to many real\-world processes\. To bridge this gap, we introduce Neural Operator Function Embedding \(NOFE\), a domain\-aware framework for continuous dimensionality reduction\. NOFE learns function\-to\-function mappings via a Graph Kernel Operator, enabling mesh\-free evaluation at arbitrary query locations independent of input discretization\. We establish NOFE as approximation of sheaf\-to\-sheaf mappings, generalizing Sheaf Neural Networks to continuous domains\. We evaluate NOFE across different datasets, comparing it against PCA, t\-SNE, and UMAP\. Our results demonstrate that NOFE significantly outperforms baselines in local structure preservation, achieving a local Stress of 0\.111 compared to 0\.398 for PCA, 0\.773 for t\-SNE, and 0\.791 for UMAP for the ERA5 climate reanalysis dataset\. NOFE also exhibits robust sampling independence, reducing the Patch Stitching Error by up to $20\.0\\times$ relative to UMAP \(59\.0 vs\. 267\.6 under regional normalization\) and ensuring consistency across disjoint domain patches\. While maintaining competitive global structure preservation \(Stress\-1: 0\.379 vs\. PCA's 0\.268\), NOFE resolves fine\-grained structures and produces smooth, consistent embeddings that generalize across varying sample densities, addressing key limitations of discrete reduction methods\.

## Platonic Task Arithmetic

**Authors:** Junghwan Park; Woojin Cho

**ID:** 155058 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8mxuyjOsQd>) | [PDF](<https://openreview.net/pdf?id=8mxuyjOsQd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155058>)

When distinct pre\-trained models are specialized for the same task, they often converge to nearly equivalent functional behaviors, while the underlying parameter\-space changes share no common coordinate system\. Existing approaches that compose such changes arithmetically are therefore confined to a single model, leaving task knowledge stranded inside the network that acquired it\. Drawing on Plato's allegory of the cave, we hypothesize that these model\-specific updates are shadows cast by a shared, model\-agnostic object that governs how task specialization reshapes a model's behavior, and we refer to this object as the platonic task vector\. To make this view operational, we introduce Universal Task Descriptors, matrices whose shape is fixed independently of architecture or embedding dimension and that capture a task's functional effect in a model\-transferable form\. Universal Task Descriptors admit addition, negation, and analogy in closed form, and a lightweight realization step then transfers any composed descriptor into a chosen target model\. Experiments across a range of models and tasks indicate that this pipeline transfers and composes task knowledge across heterogeneous models\.

## Disentangled Representation Learning via Flow Matching

**Authors:** Jinjin Chi; Taoping Liu; Mengtao Yin; Ximing Li; Yongcheng Jing; Jialie Shen; Leszek Rutkowski; Dacheng Tao

**ID:** 151286 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bXNMPTOJ05>) | [PDF](<https://openreview.net/pdf?id=bXNMPTOJ05>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151286>)

Disentangled representation learning aims to capture the underlying explanatory factors of observed data, enabling a principled understanding of the data\-generating process\. Recent advances in generative modeling have introduced new paradigms for learning such representations\. However, existing diffusion\-based methods encourage factor independence via inductive biases, yet frequently lack strong semantic alignment\. In this work, we propose a flow\-matching–based framework for disentangled representation learning, which casts disentanglement as learning factor\-conditioned flows in a compact latent space\. To enforce explicit semantic alignment, we introduce a non\-overlap \(orthogonality\) regularizer that suppresses cross\-factor interference and reduces information leakage between factors\. Extensive experiments across multiple datasets demonstrate consistent improvements over representative baselines, yielding higher disentanglement scores as well as improved controllability and sample fidelity\.

## SAFE\-Hair: Scalp\-Anchored Fields for Exportable Single\-View Hair Reconstruction

**Authors:** Yucheng Wang; Zedong Wang; Yuetong Wu; Yue Ma; Dan Xu

**ID:** 152061 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VnduOOHC03>) | [PDF](<https://openreview.net/pdf?id=VnduOOHC03>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152061>)

Single\-view 3D hair reconstruction has progressed rapidly, but many methods optimize for visual plausibility rather than producing strand assets that can be directly used in grooming, editing, or simulation pipelines\. We propose SAFE\-Hair, a framework that reconstructs explicit strand grooms from a single portrait by decoding hair from persistent follicles in a canonical scalp\-UV domain\. Given a fitted template head, SAFE\-Hair projects self\-supervised image features onto the scalp, uses a conditional Rectified Flow model to generate latent scalp fields, and decodes occupancy, segment directions, length allocation, and total length at a fixed set of scalp follicles\. This representation enforces scalp\-rooted strand identities by construction and enables direct export with follicle IDs and guide\-family metadata\. We further introduce attachment, collision, and bending priors to improve geometric validity without per\-subject test\-time optimization\. To evaluate both reconstruction fidelity and asset usability, we introduce HairBench\-3D, a benchmark built from public 3D hair assets with standardized alignment, rendering, resampling, and metrics for geometry, direction consistency, invisible\-region completion, silhouette agreement, and collision\. SAFE\-Hair improves Chamfer distance from 3\.74 mm to 3\.28 mm, F\-score from 77\.9 to 81\.7, invisible\-region F\-score from 66\.1 to 69\.8, and penetration ratio from 4\.8% to 3\.9% over the strongest baseline\.

## Uncertainty\-Aware Fuzzy Graph Contrastive Learning

**Authors:** Xinlan Xu; Fei Hao; Ce Yang; Jiaxing Shang; Jinsong Chen; Jianrui Chen; Hongying Zhang; Aziz Nasridinov

**ID:** 148584 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wgmbHWOgdy>) | [PDF](<https://openreview.net/pdf?id=wgmbHWOgdy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148584>)

Graph Contrastive Learning \(GCL\) is an effective approach for learning node representations\. However, the intrinsic uncertainty of real\-world graph data introduces significant challenges, as GCL relies on crisp deterministic representations that struggle to capture such ambiguity\. To model graph uncertainty, fuzzy logic has attracted increasing attention due to its mathematical rigor\. Existing methods, however, simply inject fuzzy modeling into the contrastive framework without tailoring data augmentation to the needs of fuzzy representations, resulting in limited discriminability and suboptimal downstream performance\. To address these limitations, we propose a novel Fuzzy Graph Contrastive Learning \(FGCL\) framework for uncertainty\-aware node representation learning\. It adopts a vertex entanglement\-based augmentation strategy to generate tailored multi\-views with controlled perturbations while preserving core graph topology and semantics, mitigating semantic corruption\. We also design a Deep Weighted Fuzzy Graph Convolutional Neural Network \(DWFGCNN\) encoder, which maps crisp features to fuzzy representations via learnable membership functions, explicitly models uncertainty, and resolves the core contradiction that traditional encoders cannot balance discriminability and robustness simultaneously\. Extensive experiments on multiple datasets demonstrate that FGCL consistently outperforms baselines in node classification, community detection, and link prediction tasks, validating its effectiveness in handling uncertainty in graph representation learning\.

## RVLoss: Runoff Vote Loss for Self\-Supervised LiDAR Scene Flow Estimation

**Authors:** Shiming Wang; Liangliang Nan; Julian Kooij; Holger Caesar; Yancong Lin

**ID:** 152605 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RsacOS2C69>) | [PDF](<https://openreview.net/pdf?id=RsacOS2C69>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152605>)

LiDAR scene flow estimates point\-wise motion between two consecutive scans, referred to as the source and target\.  Leading self\-supervised methods typically minimize the Chamfer loss, the nearest neighbor distance between the flow\-compensated source and the target\.  However, nearest\-neighbor search does not enforce motion rigidity, often leading to inconsistent flows within object instances\.  Existing approaches address this issue with additional regularization terms, but flow consistency among points remains limited, especially for large objects\. We propose RVLoss, a self\-supervised loss that incorporates motion rigidity by design, through a runoff vote mechanism\.  Our key observation is that the point\-wise motion, calculated from nearest neighbor search, can often be grouped into a small set of dominant flow candidates by voting \(top\-k voting\.  Furthermore, when compensating the source by these candidates, the flow that best represents the underlying rigid motion often yields the highest consensus after a second voting \(top\-1 voting\)\. Based on this insight, we incorporate the two\-stage runoff vote into loss design and create cluster\-wise rigid flows and subsequent free\-form flows as pseudo\-labels for self\-supervised learning\.  RVLoss can be seamlessly integrated into existing feedforward architectures\.  Experiments on the Argoverse2 2026 Challenge show that models trained with RVLoss achieve state\-of\-the\-art performance among self\-supervised approaches, outperforming baseline models trained with alternative loss designs by 20\\%\. Moreover, cross\-dataset evaluations demonstrate consistent performance improvements across four additional datasets\.  Code will be released upon acceptance\.

## Beyond Eigenfunctions: Divergence Principal Functions for Representation Learning

**Authors:** Ritabrata Ray; Sahil Dharod; Burak Varıcı; Nicholas Boffi; Pradeep Ravikumar

**ID:** 153338 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M4JVbTCh2k>) | [PDF](<https://openreview.net/pdf?id=M4JVbTCh2k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153338>)

Recent work has shown that contrastive representation learning can be understood as estimating a positive\-pair, PMI\-like kernel, and that spectral factorization of this kernel yields useful eigenfunction representations\. This paper asks what happens beyond squared\-error spectral geometry\. Modern representation learning objectives are rarely pure $\\ell\_2$ kernel\-approximation objectives: they use conditional KL, InfoNCE, JS/NCE, Brier, Hellinger, least\-squares ratio fitting, and other statistical discrepancies\. We show that these discrepancies do not merely provide alternative estimators of the same affinity; they induce different local geometries for the extraction of low\-rank representations\. To formalize this, we introduce divergence principal functions, a geometry\-aware generalization of eigenfunctions\. Eigenfunctions are recovered as the special case corresponding to squared\-error geometry\. For smooth discrepancies, we show that divergence principal functions locally solve a weighted spectral approximation problem, with weights given by the curvature of the divergence at the target affinity\. This provides a loss\-consistent bridge from positive\-pair learning objectives to representation geometry and clarifies when spectral/eigenfunction representations are appropriate and when they are mismatched to the training objective\.

## Hitting Time Isomorphism for Multi\-Stage Planning with Foundation Policies

**Authors:** Magnus Victor Boock; Abdullah Akgül; Mustafa Mert Çelikok; Melih Kandemir

**ID:** 152292 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U9JnXUgBes>) | [PDF](<https://openreview.net/pdf?id=U9JnXUgBes>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152292>)

We present a new operator\-theoretic representation learning framework for offline reinforcement learning that recovers the directed temporal geometry of a controlled Markov process from hitting time observations\. While prior art often produces symmetric distances or fails to satisfy the triangle inequality, our framework learns a Hilbert\-space displacement geometry where expected hitting times are realized as linear functionals of latent displacements\. We prove that this representation exists under latent linear closure and is uniquely identifiable up to a bounded linear isomorphism\. For finite\-dimensional implementations, we show that global hitting\-time error is bounded by one\-step transition error amplified by the environment's transient spectral radius\. Furthermore, we provide finite\-sample guarantees accounting for approximation, statistical complexity, and trajectory\-label mismatch\.  Derived from this theory, we curate Isomorphic Embedding Learning \(IEL\) as a new goal\-agnostic foundation policy learning algorithm that  anchors a HILP\-style consistency objective with explicit hitting\-time regression to ensure that the learned geometry reflects actual decision\-time progress\. This asymmetric and compositional structure enables robust graph\-based multi\-stage planning for long\-horizon navigation\. Our experiments  demonstrate that IEL improves the state of the art of learning foundation policy policies from offline maze locomotion data\.

## SurgVista: Long\-Horizon Surgical World Modeling with Plausible Instrument\-Tissue Dynamics

**Authors:** Wentao Pan; WUYANG LI; Shengyuan Liu; Xinyu Liu; Hengyu Liu; Yixuan Yuan

**ID:** 151752 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YK5GDKKF4q>) | [PDF](<https://openreview.net/pdf?id=YK5GDKKF4q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151752>)

Scaling robot policy learning for autonomous surgery is challenging, as expert demonstrations are expensive and in vivo exploration poses substantial safety risks\. Surgical world models address this by generating realistic, action\-conditioned future frames from an initial observation, but existing methods exhibit two persistent failure modes: \*spatial interaction incoherence\*, where visible instrument contact fails to induce spatially consistent tissue deformation, and \*temporal fidelity collapse\*, where prediction errors compound across autoregressive rollouts and progressively corrupt visual quality\. We present \*\*SurgVista\*\*, a surgical world model that mitigates both failures through two training recipes\. \*Deformation Consistency Regularization\* extracts scene\-point trajectories from training videos and enforces cross\-frame coherence through latent contrastive learning, strengthening physically consistent instrument\-tissue dynamics\. \*Drift Adaptation Training\* mitigates long\-horizon drift by perturbing conditioning frames with online prediction residuals and photometric augmentations calibrated to long\-horizon drift statistics, sustaining visual fidelity over extended rollouts\. To enable rigorous evaluation, we further introduce \*\*SurgWorld\-Bench\*\*, featuring diverse procedure types, long\-range rollouts, and decoupled metrics for instrument\-motion accuracy and tissue\-response fidelity\. Extensive experiments show that SurgVista consistently outperforms state\-of\-the\-art methods across visual quality, temporal consistency, and interaction fidelity, with gains widening as the prediction horizon grows\.

## ImmuVis: Hyperconvolutional Foundation Models for Imaging Mass Cytometry

**Authors:** Dawid Uchal; Marcin Możejko; Krzysztof Gogolewski; Piotr Kupidura; Fabian Ozga; Szymon Łukasik; Jakub Giezgała; Tomasz Nocoń; Kacper Pietrzyk; Robert Pieniuta; Mateusz Sulimowicz; Michał Zmysłowski; Michał Orzyłowski; Tomasz Siłkowski; Karol Zagródka; Eike Staub; Ewa Szczurek

**ID:** 152450 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T2RPhW9u1M>) | [PDF](<https://openreview.net/pdf?id=T2RPhW9u1M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152450>)

We present ImmuVis, a family of efficient foundation models for imaging mass cytometry \(IMC\), a high\-throughput multiplex imaging technology that handles molecular marker measurements as image channels and enables large\-scale spatial tissue profiling\. Unlike natural images, multiplex imaging lacks a fixed channel space, as real\-world marker sets vary across studies, violating a core assumption of standard vision backbones\. To address this, ImmuVis introduces marker\-adaptive hyperconvolutions that generate convolutional kernels from learned marker embeddings, enabling a single model to operate on arbitrary measured marker subsets without retraining\. We pretrain ImmuVis on the largest IMC dataset to date, IMC17M \(28 cohorts, 24,405 images, 265 markers, over 17M patches\), using self\-supervised masked reconstruction\. ImmuVis outperforms state\-of\-the\-art baselines and ablations in virtual staining and downstream classification tasks at substantially lower compute cost than transformer\-based alternatives, and is the sole model that provides calibrated uncertainty via a heteroscedastic likelihood objective\. These results position ImmuVis as a practical framework for real\-world IMC modeling\.

## Breaking Noise Shortcuts in Self\-Supervised Learning via Noise\-Aligned View Generation

**Authors:** Oankar Patil; May Dongmei Wang

**ID:** 153415 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LVFnNTcwSo>) | [PDF](<https://openreview.net/pdf?id=LVFnNTcwSo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153415>)

Self\-supervised learning \(SSL\) is increasingly applied to scientific imaging domains, such as microscopy, where labels are scarce but noisy data is abundant\. These domains exhibit significant signal\-dependent noise, which can create a representational shortcut: since both augmented views derive from the same noisy image, the encoder can boost view agreement by also encoding noise patterns rather than semantic content\. To enable noise\-robust representation learning without knowledge of underlying noise models, we introduce Self\-Aligned Noise Augmentation \(SEANA\), a drop\-in module that generates noise\-aware SSL views\. SEANA learns an invertible variance\-stabilizing transform \(VST\) from noisy data, then estimates the clean signal and resamples independent noise in learned VST space, requiring no clean targets, no dataset\-specific denoiser training or use at inference, and no changes to the SSL objective or encoder\. On CIFAR\-10 and ImageNet\-100 under synthetic Gaussian, Poisson–Gaussian, and multiplicative noise, SEANA improves clean\-test linear\-probe accuracy across contrastive/non\-contrastive SSL methods, indicating higher\-quality representations\. On real fluorescence microscopy, SEANA improves Jurkat cell\-cycle stage classification by up to 28\.6pp over standard SSL and 27\.5pp over denoiser\-preprocessed baselines\. In both settings, SEANA outperforms the denoiser\-preprocessed SSL pipeline, demonstrating that learned VST\-space noise\-aligned resampling yields more robust representations than denoising alone\. Code will be made publicly available\.

## RePercENT: Scaling Disentangled Representation Learning Beyond Two Modalities

**Authors:** Vasiliki Rizou; Pascal Frossard; Dorina Thanou

**ID:** 154626 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CBBmaDH8U5>) | [PDF](<https://openreview.net/pdf?id=CBBmaDH8U5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154626>)

To leverage the full potential of multimodal data, we need representations that go beyond the state\-of\-the\-art alignment and fusion approaches and exploit all cross\-modal interactions without sacrificing modality\-specific information\. Learning disentangled representations is a principled way to identify these underlying shared and unique factors that are hidden in observational data\. However, while multimodal disentanglement is a compelling paradigm, existing methods are largely confined to the two\-modality regime due to its inherent scalability bottleneck\. To address this, we propose RePercENT, a self\-supervised framework designed to surpass these limitations, that $\\textit\{unlocks scalable pairwise disentanglement\}$ as we move beyond two modalities\. Through a multimodal \`plug\-and\-play' architecture, our approach operates directly on pre\-extracted embeddings, eliminating the need for extensive joint pre\-training while making no assumptions regarding the underlying modalities or foundation model backbones\. Moreover, we introduce a joint optimization objective for simultaneously deriving the shared and unique components, and provide formal theoretical guarantees that characterize the optimality of our solution\. Across diverse modalities and tasks, RePercENT successfully recovers disentangled components while maintaining competitive performance and significantly reducing computational complexity\.

## Atom\-level Protein Representation Learning Improves Protein Structure Prediction

**Authors:** Taewon Kim; Hyosoon Jang; Hyunjin Seo; Seonghwan Seo; Hyeongwoo Kim; Wonho Zhung; Mingyeong Shin; Woo Youn Kim; Sungsoo Ahn

**ID:** 150323 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iyl2sAzrHx>) | [PDF](<https://openreview.net/pdf?id=iyl2sAzrHx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150323>)

Recent advances in generative modeling show that pretrained representations can improve generation as conditioning features or alignment targets\. Motivated by this, we study protein representations for predicting structures beyond conventional function annotation\. We propose TRIPROREP, a structure\-aware pretraining method that jointly models three aligned residue\-level views: amino\-acid identity, backbone geometry, and local full\-atom geometry, discretely encoded via VQ\-VAE tokenizers\. By pretraining to recover original tokens from generator\-corrupted views, TRIPROREP learns to distinguish plausible but incorrect cross\-view augmentations from the original protein\. We further introduce REPSP, a benchmark for evaluating protein representations in structure\-predictive settings\. REPSP tests three uses of representations: homodimer co\-folding from apo\-chain representations, residue\-level prediction of homodimer\-derived interaction properties, and representation\-aligned monomer structure prediction\. Across these tasks, TRIPROREP improves over sequence\-only and prior structure\-aware representation models, while maintaining competitive performance on conventional benchmarks\.

## VCR: Learning Valid Contextual Representation for Incomplete Wearable Signals

**Authors:** Yuxuan Weng; Wenhan Luo; Qijia Shao

**ID:** 155491 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5BWCy21RFh>) | [PDF](<https://openreview.net/pdf?id=5BWCy21RFh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155491>)

Wearable devices enable continuous health monitoring from multimodal signals, but real\-world deployment is hindered by limited labeled data and pervasive sensor incompleteness\. While large\-scale self\-supervised pretraining reduces label dependence, most existing methods assume full modality availability\. Current approaches for handling modality missingness often reconstruct entire absent signals, which can encourage hallucinating modality\-specific details that are not inferable from the observed sensor signals and degrade robustness\. We propose VCR, a self\-supervised framework that learns to extract valid representations robust to modality missingness\. VCR employs an orthogonal tokenizer to enforce strict orthogonal disentanglement by rectifying latent manifolds and applying a geometric projection, separating each modality into shared semantics and modality\-specific residuals\. This design preserves complete information integrity while serving as a structural foundation for robust learning under modality missingness\. The resulting tokens are processed by a missing\-aware mixture\-of\-experts backbone that adapts to varying patterns of modality availability\. By constraining the objective to reconstruct only the shared components of missing modalities, VCR effectively mitigates hallucinations of non\-inferable modality\-specific details\. Across multiple health monitoring tasks, VCR consistently improves performance and robustness under full, single\-missing, and multiple\-missing modality settings compared with strong supervised and self\-supervised baselines\.

## HyperTree: Scalable Unsupervised Hierarchy Discovery in Hyperbolic Space

**Authors:** Thomas Lang; Kevin Sidak; Anna Beer; Sebastian Tschiatschek; Yllka Velaj; Claudia Plant

**ID:** 150924 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eKnZ75qpqp>) | [PDF](<https://openreview.net/pdf?id=eKnZ75qpqp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150924>)

Real\-world image datasets are deeply hierarchical, yet unsupervised hierarchical representation learning remains underdeveloped\. Hyperbolic space is geometrically ideal for embedding trees with low distortion due to its exponential volume growth, but existing unsupervised hyperbolic methods either fail to scale beyond a few thousand points or depend heavily on class supervision\. We bridge this gap with HyperTree, a fully unsupervised, scalable, and capacity\-efficient framework for hierarchical representation learning in hyperbolic space, built on three contributions: \(i\) a geometrically consistent, closed\-form definition of the hyperbolic Lowest Common Ancestor, valid across hyperbolic manifolds of arbitrary curvatures; \(ii\) a differentiable hierarchical objective based on Dasgupta's cost that is bounded and invariant to dataset scale; and \(iii\) a sample\-complexity guarantee that enables scaling to datasets such as ImageNet\-1k and iNaturalist\-2018\. Across four benchmarks, HyperTree outperforms Euclidean baselines by wide margins on hierarchical dendrogram purity, matches supervised hyperbolic baselines on CIFAR\-100, and surpasses them on TinyImageNet at 16 dimensions — a highly capacity\-efficient regime where competing methods collapse\.

## Closed\-Form Implicit Neural Representations

**Authors:** Woojin Cho; Junghwan Park

**ID:** 148458 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xgO3o4J75E>) | [PDF](<https://openreview.net/pdf?id=xgO3o4J75E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148458>)

Training implicit neural representations \(INRs\) to capture fine\-scale details typically relies on iterative backpropagation and is often hindered by spectral bias when the target exhibits highly non\-uniform frequency content\. We propose ELM\-INR, a backpropagation\-free INR that decomposes the domain into overlapping subdomains and fits each local problem using an Extreme Learning Machine \(ELM\) in closed form, replacing iterative optimization with stable linear least\-squares solutions\. This design yields fast and numerically robust reconstruction by combining local predictors through a partition of unity\. To understand where approximation becomes difficult under fixed local capacity, we analyze the method from a spectral Barron norm perspective, which reveals that global reconstruction error is dominated by regions with high spectral complexity\. Building on this insight, we introduce BEAM, an adaptive mesh refinement strategy that balances spectral complexity across subdomains to improve reconstruction quality in capacity\-constrained regimes\.

## V1\-Inspired Dynamic Vision System: A Bio\-Plausible Video Embedding Framework with Decoupled Shape–Color Pathways and Long\-Range Spatiotemporal Perception

**Authors:** Beier Meng

**ID:** 155997 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1Ha4ZBx0cZ>) | [PDF](<https://openreview.net/pdf?id=1Ha4ZBx0cZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155997>)

Large\-scale video–text contrastive learning has become the de facto standard for video understanding, yet mainstream methods almost universally adopt the linear patch embedding of vision Transformers \(ViT\) or evenly sliced tubelets as the front end\. We revisit this front end from the biological principles of the primary visual cortex \(area V1\) and introduce V1DynamicVisionSystem \(V1\-DVS\), a fully end\-to\-end trainable, bio\-plausible video embedding framework\. Its main contributions are: \(i\) a three\-pathway parallel architecture that maps onto layer 4C orientation selectivity, layer 4B motion direction selectivity, and the cytochrome\-oxidase Blob color\-opponent system; \(ii\) an explicit shape–color decoupling, with isotropic Blob processing running in parallel with anisotropic Gabor orientation processing; \(iii\) long\-range spatiotemporal convolution that captures inter\-frame optical flow through 3D filters and the Adelson–Bergen motion\-energy model rather than naive frame stacking; and \(iv\) bidirectional cross\-pathway attention, allowing motion and color features to mutually modulate, as in V1→V4 inter\-areal feedback\. Pretrained on CC3M, WebVid\-10M, ActivityNet and Ego4D and evaluated under a fully self\-supervised objective\(SimCLR \+ temporal\-order verification \+ masked\-token prediction\), V1\-DVS outperforms four strong baselines—linear patch embedding, mean temporal pooling, tubelet embedding, and spatiotemporal latent encoding—on six metrics spanning retrieval and embedding\-space geometry, validating the practical value of biologically grounded structure for video embedding\.

## The Platonic Defense: Backdoor Defense for Self\-Supervised Encoders in the Era of Large Scale Pre\-training

**Authors:** Tuo Chen; Minjing Dong; Benlei Cui; Jian liu; Jie Gui

**ID:** 154804 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AprP1QZ0Te>) | [PDF](<https://openreview.net/pdf?id=AprP1QZ0Te>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154804>)

Self\-supervised learning \(SSL\) pretrained models have become a dominant paradigm for visual representation learning, but they are vulnerable to backdoor attacks\. Existing defenses struggle to defend against such attacks in a fully black\-box setting because they often require access to labels, attack patterns, or training data\. To tackle this issue, we propose a new attack\-agnostic, model\-agnostic, and modality\-agnostic black\-box test\-time defense paradigm, called \\emph\{Platonic Representation Defense\}\. It is inspired by the Platonic Representation Hypothesis, which suggests that large\-scale independently trained encoders converge toward compatible projections of the same underlying reality\. We formalize this idea as a conditional energy function defined over source representations and a set of reference representations\. The energy function is trained for detection through noise\-contrastive estimation and for representation purification through denoising score matching\. Theoretically, the energy gap between matched and mismatched samples is lower bounded by the mutual information between source and reference representations\. We demonstrate the effectiveness of our method on multiple self\-supervised encoders and more than 10 attacks\. The method can perform both representation detection and purification, and achieves substantial performance gains across multiple attacks\. Code can be found in the appendix\.

## Hypergraph Representation Learning with Hyperlink Random Effects

**Authors:** Zimeng Li; Shihao Wu; Gongjun Xu; Ji Zhu

**ID:** 148313 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ylbgDqHzRL>) | [PDF](<https://openreview.net/pdf?id=ylbgDqHzRL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148313>)

Hypergraphs record multi\-way interactions among entities\. Extracting information from the combinatorial structure underlying observed multi\-way interactions is a central task in many real\-world problems\. Existing methods face several limitations\. First, many deep architectures for hypergraphs do not explicitly exploit the potential low\-rank structure, which can sacrifice parsimony and interpretability in the learned representations\. Second, many low\-rank\-based methods operate on tensor representations, which typically require hyperlinks to have uniform sizes and thus limit their applicability to general hypergraphs with non\-uniform hyperlink sizes\. Third, many methods ignore the fact that hyperlinks often arise from heterogeneous mechanisms\. For example, medical symptoms may co\-occur in the profiles of patients with very different conditions, and such heterogeneity should be incorporated into the learning process\. In this work, we develop a general framework for hypergraph representation learning using hyperlink random effects while exploiting the low\-rank structure in hypergraphs\. The proposed framework accommodates latent heterogeneity in hyperlink formation while preserving entity interaction patterns\. We establish identifiability of the model parameters and leverage an expectation\-maximization strategy for estimation\. The framework allows flexible specifications for the hyperlink random effects; in this paper, we study three choices: categorical, Gaussian mixture, and score\-based effects, and develop corresponding estimation algorithms\. Through simulation studies, we demonstrate the effectiveness of the proposed method in recovering latent structure and capturing heterogeneous interaction patterns\. Empirical studies on real\-world hypergraph datasets further illustrate the practical utility of our approach\.

## Spherical Flows for Sampling Categorical Data

**Authors:** Jannis Chemseddine; Gregor Kornhardt; Gabriele Steidl

**ID:** 148878 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uVMZotQcJ7>) | [PDF](<https://openreview.net/pdf?id=uVMZotQcJ7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148878>)

We study the problem of learning generative models for discrete sequences in a continuous embedding space\. Whereas prior approaches typically operate in Euclidean space or on the probability simplex, we instead work on the sphere $\\mathbb S^\{d\-1\}$\. There the von Mises\-Fisher \(vMF\) distribution induces a natural noise process and admits a closed\-form conditional score\. The conditional velocity is in general intractable\. Exploiting the radial symmetry of the vMF density we reduce the continuity equation on $\\mathbb S^\{d\-1\}$ to a scalar ODE in the cosine similarity, whose unique bounded solution determines the velocity\. The marginal velocity and marginal score on $\(\\mathbb S^\{d\-1\}\)^L$ both decompose into posterior\-weighted tangent sums that differ only by per\-token scalar weights\. This gives access to both ODE and predictor\-corrector \(PC\) sampling\. The posterior is the only learned object, trained by a cross\-entropy loss\. Experiments compare the vMF path against geodesic and Euclidean alternatives\. The combination of vMF and PC sampling significantly improves results on Sudoku and language modeling\.

## SIEVE: Overcoming Topological Obstruction in Equivariant Self\-Supervised Learning

**Authors:** Jongann Lee; Sun Woo Park; Yun Young Choi

**ID:** 150328 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iw5WbeKHOu>) | [PDF](<https://openreview.net/pdf?id=iw5WbeKHOu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150328>)

We identify a theoretical incompatibility between 3D point cloud masked autoencoding and SE\(3\)\-equivariant networks\. We prove that standard masking triggers a topological collapse, effectively forcing the model to hallucinate orientation without a reference frame\. To resolve this, we introduce SIEVE \(Scalar Invariant Extraction Via Equivariance\), an SE\(3\)\-equivariant self\-supervised framework that compresses point cloud geometry into invariant scalar embeddings\. At its core is the spherical projection mask, which preserves global pose while obfuscating local semantics, sidestepping the obstruction by construction\. Experiments confirm that SIEVE circumvents the predicted collapse where constant and noise masks fail\. On downstream point cloud tasks, the resulting embeddings improve over coordinate\-based baselines and hand\-crafted geometric descriptors, with the largest gains on generalization to unseen shape categories\.

## Learning What's Real: Disentangling Signals and Measurement Artifacts in Multi\-Sensor Data, with Applications to Astrophysics

**Authors:** Pablo Mercader\-Perez; Carolina Cuesta Lazaro; Daniel Muthukrishna; Jeroen Audenaert; V Villar; David W Hogg; Marc Huertas\-Company; Bill Freeman

**ID:** 154825 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AfLBTcI0f8>) | [PDF](<https://openreview.net/pdf?id=AfLBTcI0f8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154825>)

Data collected from the physical world is always a combination of multiple sources: an underlying signal from the physical process of interest and a signal from measurement\-dependent artifacts from the sensor or instrument\. This secondary signal acts as a confounding factor, limiting our ability to extract information about the underlying physics\. Moreover, it poses significant challenges for combining data in heterogeneous or multi\-instrument frameworks\. To disentangle these factors of variation, we propose a dual\-encoder architecture with a counterfactual generation objective that leverages overlapping observations\. The resulting representations explicitly separate intrinsic signals from sensor\-specific distortions and noise, and can be used for counterfactual view generation, parameter inference, and instrument\-independent similarity search\-\-\-all unconfounded by measurement artifacts\. We demonstrate the effectiveness of our approach in a multi\-instrument setting on astrophysical galaxy images from the DESI Legacy Imaging Survey \(Legacy\) and the Hyper Suprime\-Cam \(HSC\) Survey\. This framework provides a general recipe for scientific self\-supervised pretraining: construct training pairs from overlapping observations of the same physical system, treat sensor\- or modality\-specific effects as augmentations, and learn invariant representations through counterfactual generation\.

## CrossID: Cross\-Supervised Spatio\-Temporal Gated Fusion for Personalized Portrait Generation

**Authors:** Dongxu Yue; Qixin Yan; Shiao Yang; Xiaoqiang Zhou; Hao Liu; Zhihai He; Chun Yuan

**ID:** 150764 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fYVQT7T0IU>) | [PDF](<https://openreview.net/pdf?id=fYVQT7T0IU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150764>)

Personalized portrait generation aims to synthesize portraits that align with both the identity of the reference face and the semantics of the text\. However, existing methods suffer from two critical challenges\. First, they exhibit a trade\-off between ID fidelity and text controllability\. We identify that this limitation stems from the self\-supervised training, where the model learns a trivial mapping rather than understand identity\. Second, despite exploring various encoding strategies, recent approaches still tend to discard fine\-grained facial details\. To address these challenges, we propose CrossID\-11M, a large\-scale curated portrait dataset comprising 11 million images with high\-quality annotations, paired with millions of identity\-preserving face video clips\. Furthermore, we introduce CrossID, a novel framework integrating a lightweight GatedFaceAdapter and a cross\-supervised training paradigm\. Additionally, we establish CrossID\-Bench alongside new VLM\-based evaluation metrics\.  Extensive experiments demonstrate that CrossID successfully breaks the trade\-off between ID fidelity and controllability, achieving state\-of\-the\-art performance by producing photorealistic images with faithfully preserved ID details\.

## MIRAGE: Hierarchical MI\-Surrogate Regulation for Graph Contrastive Learning

**Authors:** Qi Teng; Xueer Wang

**ID:** 151455 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aXCNPugdA3>) | [PDF](<https://openreview.net/pdf?id=aXCNPugdA3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151455>)

Graph contrastive learning \(GCL\) typically maximizes cross\-view agreement via an InfoNCE\-based mutual\-information \(MI\) surrogate, applying uniform alignment pressure across all anchors\. Yet the reliability with which topology and attributes support cross\-view agreement varies across nodes: strong pressure can benefit structurally consistent anchors but can harm boundary, low\-agreement, or noisy anchors\. We study this calibration problem in self\-supervised node representation learning on small\-to\-medium attributed graphs\. We propose MIRAGE, a hierarchical MI\-surrogate regulation framework whose core consists of two components: anchor\-wise MI setpoints that assign bounded alignment budgets to individual nodes, and dual\-view MI stabilization that keeps branch\-level surrogate estimates close to a target while limiting excessive anchor\-wise dispersion\. A label\-free structure\-reliability\-gated hypergraph path serves only as conditional compensation for weak anchors when local structural signals are estimated to be reliable\. On six node\-classification benchmarks, MIRAGE achieves competitive accuracy, including 85\.21% on Cora, 73\.94% on Citeseer, and 92\.57% on ACM\. Beyond final accuracy, mechanism\-level analyses show that MIRAGE tracks designated MI\-surrogate targets during training and that changing the target level produces measurable downstream changes, indicating that target\-tracked MI\-surrogate regulation provides a practical optimization primitive for calibrating cross\-view agreement in GCL\.

## When Alignment Fails: Stabilizing Cross\-Dynamics RL with Prototype Trust Regions

**Authors:** Dong Uk Kim; Ji Su Yoon; Eui\-Nam Huh; Choong Hong

**ID:** 152611 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RpLLznYpDC>) | [PDF](<https://openreview.net/pdf?id=RpLLznYpDC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152611>)

Alignment\-based representation learning for cross\-dynamics RL admits a degenerate global minimizer: per\-domain feature covariances collapse to a common point, driving the alignment loss to zero while transfer regret remains large and rendering the standard Bures\-Wasserstein \(BW\) transfer regret bound vacuous\. We document this collapse across multiple environments, alignment kernels \(BW, Frobenius, MMD\), and methods \(BW\-CORAL, VGDF\), where per\-domain effective rank drops from p to $\\approx 1$ within a few epochs—structurally the same failure as representation collapse in self\-supervised learning\. We propose a minimal remedy: a per\-domain Prototype Trust Region \(TR\) that anchors each empirical covariance to a slow\-moving EMA prototype, introduces no learnable parameters, and acts as an explicit second\-moment stabilizer, mirroring momentum targets and covariance regularizers in SSL\. Because TR depends only on per\-domain covariances, it is combined with any BW\-based method; adding it to VGDF inherits the same resistance to collapse\. Theoretically, we prove a BW non\-collapse lower bound that restores the transfer\-regret guaranty to a non\-vacuous form, and present a Representation Stability Transfer Bound that decomposes regret into coverage and stability terms TR directly controls\. Empirically, TR delivers statistically significant gains under pre\-registered tests in collapse\-dominated regimes \(finite\-sample, lower\-dimensional\) and is correctly neutral when other bottlenecks dominate\. We frame TR not as a universal improvement but as a targeted fix for an identifiable and broadly shared failure mode\.

## On JEPA Isotropy

**Authors:** Thomas YL Lin; Han Liu; Jerry Yao\-Chieh Hu

**ID:** 155423 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5mi1bkx1o8>) | [PDF](<https://openreview.net/pdf?id=5mi1bkx1o8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155423>)

We study the empirical risk minimization \(ERM\) of linear Joint Embedding Predictive Architecture \(JEPA\) and establish its key conditions for optimality\. By casting the embedding bottleneck as a rank constraint, we formulate JEPA as a reduced\-rank regression problem\.  This induces a risk decomposition into an irreducible error and an excess\-risk bound\. Within the irreducible term, we find the rank of the optimal predictor grows with target heterogeneity and saturates at the bottleneck\. Within the excess\-risk bound, we find spectral conditioning of the whitened end\-to\-end predictor governs minimization\. Together, these conditions prescribe an isotropic regularizer\. Under this regularization, we show such JEPA isotropy subsumes canonical JEPA isotropic embedding designs and hence justifies their empirical successes via ERM\. Numerical experiments corroborate our theory\.

## GaitLingo: Self\-Supervised Gait Representation Learning with Language Priors

**Authors:** Chenye Wang; Zhengxiang Lan; Saihui Hou; Zhikang Liu; Xingqun Qi; Sirui Han; Yongzhen Huang

**ID:** 150408 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iGvBtSYHHN>) | [PDF](<https://openreview.net/pdf?id=iGvBtSYHHN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150408>)

Self\-supervised gait representation learning aims to learn transferable representations that generalize to unseen scenarios\. However, existing methods rely solely on visual self\-supervision, making it difficult to assess the semantic value of individual unlabeled sequences and limiting their ability to exploit latent semantic cues\. To address this limitation, we introduce language priors into self\-supervised gait pretraining\. We construct GaitLP\-1M, a million\-scale silhouette\-based gait pretraining dataset without identity labels\. A two\-stage caption generation pipeline further produces gait descriptions from the corresponding RGB sequences\. To the best of our knowledge, GaitLP\-1M is the first million\-scale silhouette gait dataset paired with gait\-centric captions\. Building on this foundation, we propose GaitLingo, a language\-guided self\-supervised framework for gait representation learning\. Specifically, we design a Caption\-Guided Sample Weighting \(CSW\) mechanism to prioritize informative samples based on sequence\-level semantic richness and attribute rarity\. We then introduce a lightweight Temporal Adapter \(TA\) to better capture motion semantics and improve cross\-domain robustness\. Finally, we propose Soft Relation Distillation \(SRD\) to transfer caption\-derived relational structures into the visual embedding space\. Extensive experiments demonstrate that GaitLingo consistently outperforms prior self\-supervised gait pretraining methods in the zero\-shot setting across six benchmarks\. Compared with GaitSSB, it achieves Rank\-1 gains of \+12\.1% on Gait3D and \+7\.9% on GREW, as well as an average improvement of \+9\.1% across four CCPG settings\.

## LoRAcles: Self\-Supervised Weight\-Space Interpretability at Scale

**Authors:** Celeste De Schamphelaere; Jan Bauer; Neel Nanda; Euan Ong

**ID:** 154333 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EOoc3j4hW8>) | [PDF](<https://openreview.net/pdf?id=EOoc3j4hW8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154333>)

Fine\-tuned LLMs can learn complex and subtle behaviors\. However, it can be difficult to ascertain what behaviors the model acquired during fine\-tuning\. We introduce LoRAcles: fine\-tuned language models that take LoRA adapter weights as input, and answer natural language questions about them\. We introduce a self\-supervised pipeline for training LoRAcles: we first train LoRAs on small sets of pre\-training documents, and then train LoRAcles on these LoRAs to answer questions about the documents\. LoRAcles generalize far beyond their training data: they are state\-of\-the\-art on AuditBench, a benchmark of models with sophisticated hidden behaviors; they can detect subtle changes in model organisms \(fine\-tunes deliberately constructed to encode a hidden behavior for auditing research\), such as subliminal learning; and they are the first tool to achieve non\-trivial performance at verbalizing semantic backdoor triggers\.  LoRAcles can also describe some learned behaviors from the weights of a full\-parameter fine\-tune\.  LoRAcles are a highly scalable method: we train LoRAcles for Qwen\-3\-14B and Llama\-3\.3\-70B, and observe that performance scales smoothly with the size of our training dataset up to 100K LoRAs, though our method may need refinement in order to scale further\.  We note, though, that LoRAcles are prone to hallucinations and currently only elicit the most salient behavioral changes, limiting their utility beyond narrow fine\-tunes\.

## Finding Koopman Invariant Subspaces via Personalized PageRank

**Authors:** Hyukpyo Hong; Qin Li; Matthew J Colbrook; Hanbaek Lyu

**ID:** 150950 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e6Buij6ykm>) | [PDF](<https://openreview.net/pdf?id=e6Buij6ykm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150950>)

Selecting a finite dictionary of observables whose span is Koopman\-invariant is a central challenge in data\-driven Koopman operator approximation\. We address this problem by exploiting zero\-block structure in Extended Dynamic Mode Decomposition \(EDMD\) matrices\. We show that any sub\-dictionary whose span is Koopman\-invariant induces an exact zero block in the EDMD matrix, even for finite data\. We then show that such blocks can be detected by applying PageRank to a row\-normalized EDMD matrix constructed from a large initial dictionary\. The theory extends to approximately invariant subspaces and yields stronger guarantees for personalized PageRank \(PPR\) when the seed observables lie inside the target block and reach all observables in that block\. Combining EDMD concentration bounds with PageRank perturbation theory gives end\-to\-end detection guarantees with $O\(M^\{\-1/2\}\)$ finite\-sample scaling and explicit constants\. More generally, without assuming an invariant subspace exists, high PPR mass on a sub\-dictionary controls discounted multi\-step leakage from the seed observables\. Numerical experiments on the Duffing oscillator, Van der Pol oscillator, Lorenz system, and a three\-well Ramachandran potential suggest that the method identifies compact, interpretable dictionaries with accurate predictions\.

## Constrained Graph Clustering: A Spectral Algorithm with Generalized Eigenvectors

**Authors:** Shihong Song; He Sun

**ID:** 151463 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aSBc9QvaeR>) | [PDF](<https://openreview.net/pdf?id=aSBc9QvaeR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151463>)

Given a must\-link graph $G = \(V, E\_G\)$ and a cannot\-link graph $H=\(V,E\_H\)$ as input, the objective of constrained clustering is to partition   $V$ into $k$ parts while minimizing the maximum cut ratio between $G$ and $H$\. In this paper we design and analyze a variant of the spectral clustering algorithm using the $k$ smallest generalized eigenvectors as the embedding space\. We prove that our proposed  algorithm achieves an $O\(1\)$\-approximation of the optimal cut\-ratio under a natural assumption on the input graphs\. We further study the case in which  the cannot\-link constraints might not be available, and   develop an iterative  pipeline that repeatedly applies the output of  spectral clustering or constrained clustering to generate  new   constraints, thereby progressively improving cluster quality\.  We experimentally compare our proposed algorithm with the previous state\-of\-the\-art, and demonstrate the  superior  performance of our algorithms on both synthetic and real\-world datasets\.

## Driver Attention as Competitive Allocation: A Scene\-\-Task\-Aware Dual\-Branch Framework

**Authors:** Qianfang Wang; Bin Rao; Pengpeng Xu; Tiantian Chen

**ID:** 153047 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OPzgHGek3V>) | [PDF](<https://openreview.net/pdf?id=OPzgHGek3V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153047>)

Driver attention prediction is crucial for interpretable driver monitoring and human\-like autonomous driving\. Existing methods typically formulate this task as a scene\-to\-heatmap regression problem, failing to reveal the underlying dynamic attention redistribution mechanism\. To address this issue, we propose a scene\-task\-aware competitive allocation framework, which decomposes driver attention as a bottom\-up visual saliency prior and a top\-down scene\-task utility representation\. An adaptive product\-of\-experts allocation rule is designed to fuse these two heterogeneous branches in a competitive manner, where scene\-task demand dynamically modulates the dependence on top\-down task utility, and driving control urgency adjusts spatial attention concentration via a learnable attention budget temperature\. To explicitly differentiate task\-critical regions from visually prominent yet task\-irrelevant distractors, we incorporate competition\-aware contrastive learning to enhance feature discrimination in the latent space\. Extensive experiments demonstrate that our method achieves strong and balanced performance, with a Kullback–Leibler divergence of 0\.98 and a normalized scanpath saliency of 4\.15 on the DR\(eye\)VE dataset, as well as a Pearson’s correlation coefficient of 0\.67 and a histogram similarity of 0\.54 on the BDD\-A dataset\. Ablation studies and diagnostic analyses further validate that our framework yields interpretable attention allocation behaviors, including urgency\-induced spatial entropy contraction and scene\-task\-demand\-guided dynamic attention reallocation\.

## Adaptive Feature Propagation for Attribute\-Missing Graph Clustering

**Authors:** Xiang Long; QIANQIAN WANG

**ID:** 153408 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LZKrYTeRWx>) | [PDF](<https://openreview.net/pdf?id=LZKrYTeRWx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153408>)

Attribute\-Missing Graph Clustering \(AMGC\) is a critical yet challenging task in real\-world applications, in which only a subset of nodes hold complete attributes information while others are partially missing\. Though existing feature propagation\-based methods can effectively recover missing node attributes, they commonly assume uniform contributions across all nodes, ignoring unreliable nodes that may degrade imputation quality\. Furthermore, adopting low\-pass graph filters often suffers from the over\-smoothing problem and inevitably sacrifices discriminative information\. %Besides, traditional contrastive learning pulls all the node embeddings evenly, which might conflict with the rule that intra\-cluster nodes should be closer to each other\.  To address these limitations, we propose \\underline\{\\textbf\{A\}\}daptive \\underline\{\\textbf\{F\}\}eature \\underline\{\\textbf\{P\}\}ropagation \(AFP\) for attribute\-missing graph clustering\. Specifically, we first design a reliability\-aware feature propagation mechanism that adaptively weights edges based on node importance\. Then, we introduce a multi\-scale embedding module to capture both local and global structural information\. Finally, we develop a topology\-aware contrastive loss to enhance clustering consistency\. Extensive experiments on benchmark datasets demonstrate the superiority of our method\.

## PRISM:Disentangling Preference Distributions for Generative Ranking

**Authors:** zhangkai wu; Kaize Shi; Xu Zhang; Zhihong Cui; Longbing Cao

**ID:** 153862 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IBAEjexlXH>) | [PDF](<https://openreview.net/pdf?id=IBAEjexlXH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153862>)

Preference ranking modeling is important for selecting and adapting language\-model responses to human preferences\. Compared with deterministic ranking methods, generative preference ranking models the prompt\-response data distribution, providing richer uncertainty characterization and sample diversity for learning a more expressive ranking boundary\. Recent work improves modeling efficiency by shifting generative preference ranking from textual space to embedding space, but without explicit preference\-conditioned separation, the learned embedding distribution may still entangle preferred and rejected responses, producing ambiguous synthetic samples that weaken the ranking boundary\. To address this issue, we propose PRISM, a Preference Ranking framework through dISentangled embedding Modeling\. PRISM formulates embedding\-level generative preference ranking with a unified class\-conditional ELBO and decomposes this optimization objective to expose the encoded latent entanglement between preferred and rejected embeddings\. This derivation motivates two practical preference\-aware generation variants: PRISMMI, involving a deep class\-separation objective, and PRISMMMD, catering a probabilistic aggregate\-matching objective\. Both variants learn a preference\-disentangled embedding data distribution and synthesize data pairs that preserve ranking semantics for the generative ranking boundary\. Experiments show that PRISM improves preference ranking performance and produces useful generated embeddings for downstream response selection\. The anonymous code repository is available at:https://anonymous\.4open\.science/r/PRISM\-915C/README\.md\.

## PIS: Pose\-Interpolation Smoothness for Skinning Weight Refinement

**Authors:** Shaofeng Yin; Ting Lei; Yang Liu

**ID:** 151265 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bfpbtJ168y>) | [PDF](<https://openreview.net/pdf?id=bfpbtJ168y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151265>)

Modern automatic\-rigging predictors \(UniRig, Make\-It\-Animatable, RigNet\) place a skeleton on a 3D mesh in seconds, but the resulting skinning weights animate poorly\. Linear\-blend skinning \(LBS\) is non\-linear in pose space, so noisy weights amplify into visible candy\-wrapper artifacts\-\-\-the surface twisting and contracting at joint bends\-\-\-and volume collapse\. ARAP\-style remedies penalize these symptoms one pose at a time and cannot reach the cross\-pose curvature that produces them\. We propose \\emph\{Pose\-Interpolation Smoothness\} \(PIS\), a self\-supervised, training\-free, test\-time refiner: minimize the per\-vertex gap between the deformation at the SO\(3\) midpoint of two random poses and the linear average of the two endpoint deformations\. The midpoint is obtained by orthogonally projecting the arithmetic mean of the two rotations back onto the rotation group, sidestepping the matrix\-logarithm gradient that breaks down near identity and antipodal poses\. Because PIS only re\-tunes the weights LBS already consumes, it slots into any LBS\-based pipeline\-\-\-generative\-3D outputs, automatic\-rigging predictions, and the LBS pathways of game engines and AR/VR renderers\-\-\-without touching shaders\. On Objaverse\-LVIS Balanced\-102 \(98 valid models, 51 LVIS categories\), PIS reduces fragility \(per\-vertex deformation variance under random poses\), ARAP energy, Jacobian anisotropy, and area distortion by $35\.5$\\%, $39\.3$\\%, $19\.8$\\%, and $43\.2$\\% on average; $93\.9$\\% of models improve on all four simultaneously, Wilcoxon $p&lt;10^\{\-10\}$\. On the worst\-case slice\-\-\-the top decile of UniRig\-initialized fragility, where animation visibly tears\-\-\-PIS reduces unstable vertices by up to $10\.2\\times$\. Effective bone count and weight entropy are unchanged, and the optimization runs in $\\sim$30\~s/model on a single H200 GPU\.

## Learning Informative Invariant Representations via Hierarchical Latent Decomposition

**Authors:** Hyungkwon Lee; Hyewon Ryu; Jong\-Seok Lee

**ID:** 155712 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3TNn1rmVN1>) | [PDF](<https://openreview.net/pdf?id=3TNn1rmVN1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155712>)

Domain generalization aims to learn models that generalize to unseen target domains using labeled data from multiple source domains\. Many existing approaches focus on learning domain\-invariant representations, but enforcing invariance alone may fail to preserve sufficient task\-relevant information under domain shift\. We propose BLENDER, a reconstruction\-aware framework for domain generalization that employs a hierarchical latent decomposition to separate domain\-invariant and domain\-specific factors\. This structure prioritizes informativeness in the domain\-invariant representation and captures residual domain\-specific variation through conditional modeling\. We further provide a theoretical analysis establishing a bound on the reconstruction risk for unseen target domains, revealing how domain invariance and latent disentanglement contribute to generalization beyond the observed domains\. Experiments on standard domain generalization datasets demonstrate strong performance under substantial domain shifts, and qualitative analyses show that BLENDER promotes a structured allocation of information between domain\-invariant and domain\-specific latent representations\.

## Efficient Decoder Scaling Strategy for Constructive Neural Routing Solvers

**Authors:** Qing Luo; Fu Luo; Ke LI; Zhenkun Wang

**ID:** 149642 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oZT5mxz9Nn>) | [PDF](<https://openreview.net/pdf?id=oZT5mxz9Nn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149642>)

Construction\-based neural routing solvers, typically composed of an encoder and a decoder, have emerged as a promising approach for solving vehicle routing problems\. While recent studies suggest that shifting parameters from the encoder to the decoder enhances performance, most works restrict the decoder size to 1–3M parameters, leaving the effects of scaling largely unexplored\. To address this gap, we conduct a systematic study comparing two distinct strategies: scaling depth versus scaling width\. We synthesize these strategies to construct a suite of 12 model configurations, spanning a parameter range from 1M to $\\sim$150M, and extensively evaluate their scaling behaviors across three critical dimensions: parameter efficiency, data efficiency, and compute efficiency\. Our empirical results reveal that parameter count is insufficient to accurately predict the model performance, highlighting the critical and distinct roles of model depth \(layer count\) and width \(embedding dimension\)\. Crucially, we demonstrate that scaling depth yields superior performance gains to scaling width\. Based on these findings, we provide and experimentally validate a set of design principles for the efficient allocation of parameters and compute resources to enhance the model performance\.

## EpicWorldModel: Exploration\-driven Planning with Latent World Models

**Authors:** Bowen Feng; Julian Ost; Zhiting Mei; Anirudha Majumdar; Felix Heide

**ID:** 150907 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eX8xQG15Hs>) | [PDF](<https://openreview.net/pdf?id=eX8xQG15Hs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150907>)

Latent world models based on Joint\-Embedding Predictive Architecture \(JEPA\) are deterministic by design\.    While successful in fully observable scenarios, this paradigm breaks down when past observations and actions lead to multiple plausible future possibilities, e\.g\., due to occlusion\. We introduce EpicWorldModel, a framework to train stochastic JEPAs for environments and tasks with inherent uncertainty under partially observability\. We jointly train the EpicWorldModel predictor with its latent representation space to directly predict multiple potential future states using a flow\-matching objective, when the goal\-relevant scene content is absent from the conditioning history\. We show that flow predictive variance approximates an upper bound on Expected Information Gain and serves as a useful exploration guidance for planning\. By incorporating this uncertainty signal into Cross\-Entropy Method \(CEM\)\-based planning, our approach balances goal\-reaching with exploration of uncertain regions where occluded or unseen goals are most likely to be located\. We demonstrate the effectiveness of EpicWorldModel through a series of latent planning experiments with the best performance among all baseline methods, showing up to $22\\%$ empirical improvement in success rate over LeWorldModel\.

## SICAF: Time\-Varying Focus Bottleneck for Self\-Supervised Event\-Based Optical Flow with Spiking Neural Network

**Authors:** Shuangming Yang; Qing He; Shangqi Guo; Badong Chen

**ID:** 152542 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SNh0Hj5bcG>) | [PDF](<https://openreview.net/pdf?id=SNh0Hj5bcG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152542>)

Event\-based optical flow estimation achieves high temporal resolution and dynamic range by exploiting asynchronous events, while self\-supervised learning provides an effective solution to the absence of ground\-truth labels\. Spiking neural networks \(SNNs\), as brain\-inspired models, process information through asynchronous spikes, naturally aligning with optical flow events\. However, the temporal irregularity across event streams hinders the compact extraction of spatiotemporal features, while the absence of explicit labels leads to spurious correlations, thereby increasing redundancy within latent representations\. In this paper, we propose a novel “Compactly Compress, Time\-varying Focus” training strategy\. We present SICAF \($\\text\{\\textbf\{S\}pikes\}$ $\\text\{\\textbf\{I\}nformation\}$ $\\text\{\\textbf\{C\}ompression\}$ $\\text\{\\textbf\{A\}nd\}$ $\\text\{\\textbf\{F\}ocus\}$\) framework that formulates the learning process as a constrained optimization with temporal modulation\. It encourages self\-supervised SNNs to extract compact latent representations while preventing over\-compression that would discard temporal saliency\. To better enable feature selectivity across time steps, we design an estimator with learnable temporal attention, achieving context awareness with cross\-time dependencies\. Experimental results on several datasets demonstrate that SICAF achieves state\-of\-the\-art performance in self\-supervised SNNs, with a 8\.14\\% improvement in AEE on the MVSEC dataset and a 13\.49\\% increase in robustness under white\-box adversarial attacks\.

## PEIRA: Learning Predictive Encoders through Inter\-View Regressor Alignment

**Authors:** Michael Arbel; Basile Terver; Jean Ponce

**ID:** 153191 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NASMgUDs9w>) | [PDF](<https://openreview.net/pdf?id=NASMgUDs9w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153191>)

Non\-contrastive self\-supervised learning \(SSL\) is an effective framework for predictive representation learning, but popular \(and in practice effective\) methods such as SimSiam, BYOL, I\-JEPA or DINO, which rely on a form of self\-distillation to train a teacher\-student network, remain poorly understood as they typically do not minimize a well\-defined objective\. We analyze the dynamics of a variant of the Joint Embedding Predictive Architecture \(JEPA\) using a regularized linear regressor to predict the learned representations of two views of the data from one another, and fully characterize its stability: non\-collapsed stable equilibria align with leading nonlinear canonical correlation subspaces, while collapsed equilibria may also be stable attractors\. Motivated by this result, we introduce PEIRA, a non\-contrastive SSL method with an explicit objective defined through the trace of the optimal linear regressor\. We show that its only stable equilibria are nontrivial global minimizers and recover the same canonical correlation subspaces, with regularization selecting the effective dimension\. Experiments on ImageNet\-1K and CIFAR\-10 show PEIRA is competitive with VICReg and LeJEPA baselines, and qualitative empirical results support the theory\.

## Sparse Koopman Autoencoders Identify Local Dynamical Regimes in Multibasin Systems

**Authors:** Aidan Li; Uday Kiran Reddy Tadipatri; Mahan Fathi; Sarath Chandar; Ross Goroshin

**ID:** 149627 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oenYjKFj4D>) | [PDF](<https://openreview.net/pdf?id=oenYjKFj4D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149627>)

Koopman autoencoders \(KAEs\) seek a higher\-dimensional latent representation in which nonlinear dynamics evolve linearly\. However, many interesting systems have multiple basins of attraction, and both theoretical and empirical work has shown these multibasin systems cannot generally admit a single finite\-dimensional global Koopman embedding under standard assumptions\. We posit that encoders with a sparsity\-inducing objective encouraging few active latent coefficients will provide latent supports as an inspectable basin\-modeling principle for Koopman autoencoders\. We use these encoders producing sparse latents in training Sparse Koopman Autoencoders \(SKAEs\) without basin labels or other regime annotations, and treat the learned latent supports as model\-produced regime variables after training\. Across a range of procedurally generated multibasin systems and chaotic flows, we show that SKAEs have superior forecasting performance compared to dense\-latent KAEs\. We also perform a mechanistic study that shows latent supports produced by SKAEs are both essential for the quality of the representation and useful for identifying basins on held\-out basin interior states, whereas dense\-latent KAEs collapse to an uninformative single family\. These results identify sparse latents and their corresponding supports as label\-free, interpretable regime variables for Koopman learning in nonlinear systems with multiple local dynamical laws\.

## SPHERE\-JEPA: Spherical Prediction with Homogeneous Embeddings

**Authors:** Léo Nicollier; Max Dunitz; Marc Pic; Pablo Muse; Enric Meinhardt\-Llopis; Gabriele Facciolo

**ID:** 148342 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yZ1VgiAJie>) | [PDF](<https://openreview.net/pdf?id=yZ1VgiAJie>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148342>)

A fundamental open question in self\-supervised learning \(SSL\) is the explicit characterization of the optimal geometry of the learned representations\. Recently, LeJEPA identified isotropic Gaussian embeddings as optimal for minimizing downstream prediction risk in Euclidean spaces\.  However, the corresponding problem for distributions supported on lower\-dimensional manifolds, such as the hypersphere, remains unexplored\. In this work, we demonstrate that extending this minimax analysis to smooth distributions on Riemannian manifolds fundamentally changes the optimal solution\.  We show that, under a worst\-case formulation, both \\\(k\\\)\-nearest neighbors and kernel ridge regression induce hyperspherical uniformity\. More precisely, we show that uniform distributions on manifolds are optimal for \\\(k\\\)\-nearest neighbors, and that the uniform distribution on the sphere is optimal for kernel ridge regression with both the exponential dot\-product kernel and the linear kernel\. This theoretical insight reveals a fundamental limitation of Gaussian embeddings: their non\-uniform density induces anisotropic $k$\-NN  neighborhoods, severely biasing the estimator\.  To correct this, we introduce \\textbf\{SPHERE\-JEPA\}, a theoretically grounded SSL framework\.  We adapt LeJEPA's Cramér\-\-Wold projection mechanism to enforce hyperspherical uniformity rather than a Gaussian prior\.  Empirically, SPHERE\-JEPA yields significant improvements, boosting texture retrieval mAP by over 6\\%, while consistently matching or outperforming LeJEPA on standard benchmarks—including a $\+1\.8\\%$ linear probing gain on ImageNet\-1K \(ViT\-B/14\)\.

## SPACE: Unifying Symmetric and Asymmetric Routing Problems for Generalist Neural Solver

**Authors:** Rongsheng Chen; Changliang Zhou; Canhong Yu; Yuanyao Chen; Yu Zhou; Zhuo Chen; Zhenkun Wang

**ID:** 155167 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7ncFxVZuOq>) | [PDF](<https://openreview.net/pdf?id=7ncFxVZuOq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155167>)

Generalist neural routing solvers have shown great potential in solving diverse vehicle routing problems \(VRPs\) with a unified model\. However, existing solvers are typically limited to symmetric settings or degrade in performance when switching to asymmetric settings due to input inconsistencies or inherent structural differences, substantially limiting their practicality in real\-world scenarios that encompass both scenarios\. To address this limitation, we define the spatial position of each node based on the relative distances to a specific set of pivots and further propose a Spatial Pivot\-Aligned Coordinate\-free Embedding \(SPACE\) framework that unifies node representation and solution generation across symmetric and asymmetric VRPs\. Specifically, we construct a bidirectional Fréchet representation using a novel furthest pivot sampling strategy to enable invariant node representations across distinct problem settings\. Furthermore, we introduce a weight\-decomposed adaptive decoding mechanism that decouples geometric perception from problem representations, mitigating the overfitting of constraint decisions to a specific geometry setting\. Extensive experiments on 110 VRP variants, comprising 55 symmetric problems and their asymmetric counterparts, demonstrate that SPACE achieves promising zero\-shot generalization in both symmetric and asymmetric VRPs\.

## Vision Transformers Learn Gestalt\-Like Figure\-Ground Cues from Natural Images

**Authors:** Matthias Tangemann; Benjamin Lo; Zygmunt Pizlo; Kaleem Siddiqi; Dirk Bernhardt\-Walther; Sven Dickinson

**ID:** 149421 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qAhI3duUBt>) | [PDF](<https://openreview.net/pdf?id=qAhI3duUBt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149421>)

Figure\-ground organization in the human visual system relies on several shape\-based cues, including surroundedness, convexity, and symmetry\. While these cues have been extensively studied using abstract stimuli, little is known about how they operate under natural conditions or how they arise from the statistics of natural scenes\. Deep neural networks offer a promising path forward: a model that relies on the same figure\-ground cues as humans would provide tractable experimental access to the underlying mechanisms\. In this study, we evaluate shape\-based figure\-ground organization in Vision Transformers \(ViTs\), for which prior work has demonstrated the emergence of object\-based grouping\. We test 25 ViTs spanning supervised and self\-supervised training objectives, by fitting linear probes to predict figure\-ground assignment from intermediate patch representations using both natural images and controlled artificial stimuli that isolate individual cues\. Our results show that ViTs robustly encode surroundedness and convexity, and that probes trained on natural images generalize zero\-shot to artificial stimuli across several models\. For symmetry we observe mixed results: the cue is encoded for uniformly colored but not for textured regions\. Taken together, our findings demonstrate that Gestalt\-like figure\-ground cues can be learned from natural scene statistics and position ViTs as a compelling model system for studying the computational mechanisms of perceptual organization\.  All code and data will be published\.

## Self\-Supervised On\-Policy Reinforcement Learning via Contrastive Proximal Policy Optimisation

**Authors:** Asim Osman; Sasha Abramowitz; Mark Bergh; Ulrich Armel Mbou Sob; Ruan John de Kock; Omayma Mahjoub; Oussama Hidaoui; Noah De Nicola; Arnol M Fokam; Felix Chalumeau; Daniel Rajaonarivonivelomanantsoa; Siddarth Singh; Refiloe Shabe; Juan Formanek; Simon Du Toit; Arnu Pretorius

**ID:** 154892 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A91croHbNN>) | [PDF](<https://openreview.net/pdf?id=A91croHbNN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154892>)

Contrastive reinforcement learning \(CRL\) learns goal\-conditioned Q\-values through a contrastive objective over state\-action and goal representations, removing the need for hand\-crafted reward functions\. Despite impressive success in achieving viable self\-supervised learning in RL, all existing CRL algorithms rely on off\-policy optimisation and are mostly constrained to continuous action spaces, with little research invested in discrete environments\. This leaves CRL disconnected from widely used and effective, modern on\-policy training pipelines adopted across both single\-agent and multi\-agent RL in continuous and discrete environments\. To establish a first connection, we introduce Contrastive Proximal Policy Optimisation \(CPPO\)\. CPPO is an on\-policy contrastive RL algorithm that derives policy advantages directly from contrastive Q\-values and optimises them via the standard PPO objective, without requiring a reward function or a replay buffer\. We evaluate CPPO across continuous and discrete, single\-agent and cooperative multi\-agent tasks\.  Whilst the existence of an on\-policy approach is inherently useful, we additionally observe that CPPO not only significantly outperforms the previous CRL baselines in 14 out of the 18 tasks benchmarked, but matches or exceeds reward\-based PPO's performance in 12 out of the 18 tasks without any reward signal\.

## DiffRisk: Diffusion Representation Learning with Informative Missingness for Health Risk Prediction

**Authors:** Shailesh Dahal; Ratri Mukherjee; Nicholas Mathews; Kishlay Jha

**ID:** 151677 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ys3sg1XgsA>) | [PDF](<https://openreview.net/pdf?id=Ys3sg1XgsA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151677>)

Health risk prediction aims to predict a patient's potential health risks \(e\.g\., mortality\) using the longitudinal information present in their electronic health record \(EHR\)\. While deep learning\-based risk prediction models have shown great promise, they are susceptible to the issue of missing data prevalent in real\-world EHR\. Most prior works mitigate this challenge by treating missing data as an uninformative perturbation to be ignored or imputed\.   However, inaccurate imputation may lead to the generation of sub\-optimal patient representations that adversely impact risk prediction performance\. Moreover, recent studies show that missing data in EHR does not necessarily imply error or noisy observation and instead may communicate informative clinical signals useful for health risk prediction\. To address this, we propose a novel diffusion\-based representation learning approach \(namely $\\textbf\{DiffRisk\}$\) that explicitly captures $\\textit\{informative missingness\}$ by modeling conditional dependencies induced by partial observations in EHR\. Specifically, DiffRisk learns latent representations with coherent conditional structure, where any subset of observed features defines a distribution over the unobserved components\. To achieve this, we introduce a conditional score\-based objective and approximate it via denoising diffusion that enables efficient learning without explicit density estimation\. Empirical results on five risk prediction tasks show that the proposed approach consistently outperforms state\-of\-the\-art baselines\.

## Do Sparse Autoencoders Learn Meaningful Concept Hierarchies?

**Authors:** Nils Grandien; David Steinmann; Felix Friedrich; Kristian Kersting

**ID:** 152493 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ShTEtBuHeA>) | [PDF](<https://openreview.net/pdf?id=ShTEtBuHeA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152493>)

Sparse autoencoders \(SAEs\) have become an important tool for unsupervised concept discovery in large models\. To make the resulting feature spaces more interpretable and manageable, recent approaches have begun imposing hierarchical structure, either explicitly or as an implicit effect of training constraints, yet rigorous comparison remains difficult\. There are no agreed\-upon requirements for what a meaningful feature hierarchy should satisfy, and evaluation has largely relied on qualitative illustrations with fragmented quantitative protocols\. To address this, we derive a set of key requirements for generalization/specialization hierarchies in unsupervised concept discovery, drawing on semantic net and taxonomy research alongside recent SAE work, and use them to derive a concrete evaluation protocol\. Applying this protocol to current SAE approaches trained on visual data, we find that while feature spaces generally provide a basis for sensible hierarchies, establishing good hierarchical structure remains challenging\.  In particular, feature absorption, both in its well\-known hard form and in a continuous, soft form, systematically compromises hierarchy quality, pointing to a fundamental tension that future approaches will need to navigate\.

## LeanSearch v2: Global Premise Retrieval for Lean 4 Theorem Proving

**Authors:** Guoxiong Gao; Zeming Sun; Jiedong Jiang; Yutong Wang; jd xu; Peihao Wu; Bryan Dai; Bin Dong

**ID:** 155461 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5RERl0ybCa>) | [PDF](<https://openreview.net/pdf?id=5RERl0ybCa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155461>)

Proving theorems in Lean 4 often requires identifying a scattered set of library lemmas whose joint use enables a concise proof\-\-\-a task we call \*global premise retrieval\*\. Existing tools address adjacent problems: semantic search engines find individual declarations matching a query, while premise\-selection systems predict useful lemmas one tactic step at a time\. Neither recovers the full premise set an entire theorem requires\. We present LeanSearch v2, a two\-mode retrieval system for this task\. Its standard mode applies a hierarchy\-informalized Mathlib corpus with an embedding\-\-reranker pipeline, achieving state\-of\-the\-art single\-query retrieval without domain\-specific fine\-tuning \(nDCG@10 of 0\.62 vs\. 0\.53 for the next\-best system\)\. Its reasoning mode builds on standard mode as its retrieval substrate, targeting global premise retrieval through iterative sketch\-retrieve\-reflect cycles\. On a 69\-query benchmark of research\-level Mathlib theorems, reasoning mode recovers 46\.1% of ground\-truth premise groups within 10 retrieved candidates, outperforming strong reasoning retrieval systems \(38\.0%\) and premise\-selection baselines \(9\.3%\) on the same benchmark\. In a controlled downstream evaluation with a fixed prover loop, replacing alternative retrievers with LeanSearch v2 yields the highest proof success \(20% vs\. 16% for the next\-best system and 4% without retrieval\), confirming that retrieval quality propagates to proof generation\. All code, data, and benchmarks will be open\-sourced\.

## MaxSketch: Robust Distinct Counting in Streams via Random Projections

**Authors:** Nikos Tsikouras; Constantine Caramanis; Christos Tzamos

**ID:** 155987 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1MB9KxyzHe>) | [PDF](<https://openreview.net/pdf?id=1MB9KxyzHe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155987>)

Estimating the number of distinct elements in a data stream is well understood when repeated elements are identical\. In modern settings, however, observations are high\-dimensional and noisy, so repeated instances of the same object are only approximately similar \-\- for example, different images of the same individual may vary significantly at the pixel level\. Classical sketches such as HyperLogLog rely on consistent hash values for identical elements and break down in this regime\. Recent work on robust distinct counting in general metric spaces achieves $\\tilde\\Theta\(\\sqrt\{n\}\)$ memory, which is tight in the worst case\. We show that substantially improved memory guarantees are possible under geometric structure common in learned representations\. We introduce MaxSketch, a simple max\-linear sketch built from random Gaussian projections, and prove that it succeeds in estimating the number of distinct latent objects\. Concretely, we show that under this assumption $m = \\tilde\{O\}\(\\log n / \\varepsilon^4\)$ random projections \(and hence $\\tilde\{O\}\(\\log n/\\varepsilon^4\)$ memory\) suffice to recover the true distinct count within a $\(1\+\\varepsilon\)$ factor\. Experiments on image streams confirm that MaxSketch accurately estimates distinct counts and generalizes beyond the training regime\. Our results bridge classical streaming algorithms and modern representation learning, showing how geometric structure can fundamentally reduce the complexity of distinct counting\.

## Biological Graph Priors Enable Representation Learning for Cellular Microscopy

**Authors:** Reed Naidoo; Matt De Vries; Georgios Skiadas; Vicky Bousgouni; Ugur Moustafa; Chris Bakal

**ID:** 150999 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dgCUPMyqg5>) | [PDF](<https://openreview.net/pdf?id=dgCUPMyqg5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150999>)

Learning meaningful representations from cellular microscopy images remains a central challenge in computational biology and computer vision\. Recent advances in self\-supervised learning \(SSL\) have shown that scaling model and dataset size can improve the recovery of biological relationships such as gene–gene or compound–target associations\. However, this progress has been driven primarily by scale rather than structure—requiring vast data and compute while offering no guarantee that the resulting embeddings capture underlying biology\. We introduce NOVA, a structure\-first framework for learning biologically aligned representations of cellular perturbations\. NOVA integrates curated biological graphs directly into the training objective of a vector\-quantised transformer, aligning embeddings of related genes and pathways through graph\-based regularisation\. By incorporating these relational priors during training, NOVA learns biologically faithful representations with orders of magnitude less data and compute than current state\-of\-the\-art SSL models, while achieving superior performance on gene\-gene retrieval benchmarks\. This approach reframes representation learning for microscopy from a problem of scale to one of structure, offering a more systematic and efficient route toward biologically grounded embeddings\.

## Representation Learning Enables Scalable Multitask Deep Reinforcement Learning

**Authors:** Johan Obando Ceron; Lu Li; Scott Fujimoto; Pierre\-Luc Bacon; Aaron Courville; Pablo Samuel Castro

**ID:** 151906 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WzURRKJgUx>) | [PDF](<https://openreview.net/pdf?id=WzURRKJgUx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151906>)

Scaling reinforcement learning \(RL\) to diverse multitask settings remains a central challenge\. While recent advances in model\-based RL achieve strong performance, they rely on planning and complex training pipelines, making it unclear which components are essential for scalability\. We revisit this question and argue that the primary driver of scalable multitask RL is not model\-based control, but \_representation learning\_\. In particular, we show that combining predictive, model\-based representations with high\-capacity value function approximation is sufficient to achieve strong performance, without planning\. We evaluate a simple model\-free algorithm, MR\.Q, that integrates auxiliary predictive objectives into a scalable actor\-critic architecture\. This approach outperforms a recent world\-model\-based method and a range of deep RL baselines across a diverse suite of multitask continuous control tasks, while significantly reducing computational overhead and improving wall\-clock efficiency\. We observe consistent improvements with increased model capacity and show through ablations that predictive representation learning is critical for performance\.

## TRL\-Bench: Standardizing Cross\-Paradigm Representation\-Level Evaluation of Tabular Encoders

**Authors:** Wei Pang; Xiangru Jian; Hehan Li; Zhixuan Yu; Jingxi Xue; Jinyang Li; Zhengyuan Dong; Xinjian Zhao; Hao Xu; Chao Zhang; Reynold Cheng; M\. Tamer Özsu; Tianshu Yu

**ID:** 139385 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TkwRxfihFM>) | [PDF](<https://openreview.net/pdf?id=TkwRxfihFM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139385>)

Tabular encoders are usually evaluated inside task\-specific end\-to\-end pipelines, so models from different training paradigms are difficult to compare directly even when they operate on similar tabular signals\. We introduce TRL\-Bench, a multi\-granular tabular representation learning \(TRL\) benchmark that standardizes cross\-paradigm representation\-level evaluation: each encoder exports row\-, column\-, or table embeddings through its supported wrapper, and shared lightweight heads probe them across three suites: TRL\-CTbench \(column/table\), TRL\-Rbench \(row\), and TRL\-DLTE \(compositional Data\-Lake Table Enrichment spanning all three granularities\)\. To support this standardized setting, we release curated benchmark assets and task reformulations, including 50 OpenML tables with 123 verified targets, 16 row\-pair linkage rewrites, and a 47,772\-table DLTE lake derived from 1,379 parent tables\. Across 20 models and 16 tasks, TRL\-Bench shows that once downstream conditions are standardized, encoder quality is capability\-specific rather than captured by a single leaderboard\. At the column/table level, generic text encoders often lead on tasks with strong surface\-text signal, while tabular specialists win where their pretraining objective aligns with the task\. At the row level, within\-table prediction and cross\-table linkage favor different training regimes, with the row\-matching stage of DLTE pipelines correlating strongly with atomic linkage performance\. In TRL\-DLTE, the strongest pipelines combine capability\-matched specialists rather than reuse a single encoder, and top end\-to\-end quality depends on non\-additive compositional fit rather than per\-stage marginal rank alone\. TRL\-Bench provides a common protocol for measuring reusable signal in exported tabular representations under shared downstream conditions\.

## Agree to Disagree: Multimodal Autonomous Negotiation and Calibration for Entity Representation Learning

**Authors:** Chenyi Xiong; Yan Zhang; Yueluan Huang; Lu Wang; Kui Xiao; Wenxin Huang; Zhifei Li

**ID:** 151043 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dPWL521xDs>) | [PDF](<https://openreview.net/pdf?id=dPWL521xDs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151043>)

Learning high\-quality multimodal entity representations is essential for advancing reasoning tasks such as multimodal knowledge graph completion \(MMKGC\)\. However, rigid alignment in existing fusion strategies can bias representations toward a dominant anchor modality, weakening fine\-grained complementary cues and propagating noisy signals into relational reasoning\. To address these limitations, we propose MANoR, a Multimodal Autonomous Negotiation framework for calibrated Representation learning\. MANoR treats modalities as autonomous semantic agents that negotiate before fusion\. Specifically, MANoR preserves modality\-specific semantics through centroid\-guided subspace contraction, which reduces unstable centroid\-relative dispersion while retaining entity\-level residual semantics\. On this stabilized basis, negotiated attention enables selective cross\-modal interaction without collapsing modality boundaries\. As modalities can still differ in reliability after interaction, uncertainty calibrated fusion estimates dimension\-level aleatoric uncertainty and modality\-level reliability to compute relation\-aware fusion weights\. In this way, MANoR couples modality autonomy, selective interaction, and calibrated integration within a unified representation learning framework\. Experiments on MKG\-W, MKG\-Y, TIVA, and KVC16K show that MANoR consistently outperforms strong MMKGC baselines, achieving a relative Hits@1 gain of up to 17\.72% on KVC16K\.

## Disentangling Homophilic and Heterophilic Patterns for Multi\-Domain Graph Foundation Models

**Authors:** Ziyan Wang; Ruiyi Fang; Jingyu Zhao; Zhimin Mei; Charles Ling; Boyu Wang

**ID:** 155780 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2w0Bbk6akp>) | [PDF](<https://openreview.net/pdf?id=2w0Bbk6akp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155780>)

Graph Foundation Models \(GFMs\) have attracted growing attention for their ability to model multi\-domain graphs universally and generalize to unseen downstream tasks\. However, existing GFMs typically rely on a single domain\-invariant representation space, which inevitably blurs two fundamental connectivity patterns, \\emph\{homophily\} and \\emph\{heterophily\}, that govern how nodes relate across domains\. Additionally, hard\-partitioning the graph into disjoint subgraphs discards edges that are essential for self\-supervised pre\-training\. In this work, we introduce  $\\underline\{\\text\{HHGFM\}\}$, a $\\underline\{\\text\{H\}\}$omophilic and $\\underline\{\\text\{H\}\}$eterophilic Pattern\-Disentangled $\\underline\{\\text\{G\}\}$raph $\\underline\{\\text\{F\}\}$oundation $\\underline\{\\text\{M\}\}$odel that encodes homophily and heterophily separately while keeping the original edge structure intact\. Specifically, we propose a node\-level soft disentanglement mechanism that estimates each neighbor's homophilic and heterophilic contributions and uses them as edge weights, thereby preserving the original graph structure\. Low\-pass and high\-pass filters then serve as dual backbones to align homophilic and heterophilic patterns separately, supported by our generalization analysis\. Extensive experiments on a range of graph datasets validate the effectiveness of our method\.

## Approximation in Contrastive Representation Learning

**Authors:** Yuanfan Li; Zihan Zhang; Yiming Ying; Ding\-Xuan Zhou

**ID:** 154229 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FFSgETbjWN>) | [PDF](<https://openreview.net/pdf?id=FFSgETbjWN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154229>)

Contrastive representation learning \(CRL\) is a fundamental paradigm for   learning transferable representations\.  Recent work   identifies its population target as the pointwise mutual information \(PMI\)   $     \\log\\frac\{p\(\\mathbf\{x\},\\mathbf\{y\}\)\}\{p\_\\mathcal\{X\}\(\\mathbf\{x\}\)p\_\\mathcal\{Y\}\(\\mathbf\{y\}\)\}   $   between two modalities $\\mathcal\{X\},\\mathcal\{Y\}$, where $p$ is the joint density function and   $p\_\\mathcal\{X\},p\_\\mathcal\{Y\}$ are the marginals\.  However, it remains unclear why standard inner\-product scores $f\(\\mathbf\{x\}\)^\\top g\(\\mathbf\{y\}\)$ can effectively approximate a generally nonseparable population target PMI\. In this paper, we address this question from the aspect of approximation for CRL\. By linking PMI to a compact operator, we show that $D$\-dimensional inner\-product models perform rank\-$D$ spectral approximation, with error controlled by the spectral tail\. We then study neural network realizations: in general settings, we show that deep neural network scoring functions are universally consistent, and the approximation error rates depend on the smoothness of the PMI function; under structured low\-rank data models we obtain improved rates attained by moderate\-width encoders\. Finally, we establish a fast calibration rate from contrastive excess risk to downstream retrieval error under a density\-ratio Tsybakov noise condition\.

## From Noise to Diversity: Random Embedding Injection in LLM Reasoning

**Authors:** Heejun Kim; Seungpil Lee; Jewon Yeom; Jaewon Sok; Seonghyeon Park; Jeongjae Park; Taesup Kim; Sundong Kim

**ID:** 155787 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2tl55s2775>) | [PDF](<https://openreview.net/pdf?id=2tl55s2775>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155787>)

Recent soft prompt research has tried to improve reasoning by inserting trained vectors into LLM inputs, yet whether the gain comes from the learned content or from the act of injection itself has not been carefully separated\. We study Random Soft Prompts \(RSPs\), which drop the training step entirely and append a freshly drawn sequence of random embedding vectors to the input\. Each RSP vector is sampled from an isotropic Gaussian fitted to the entrywise mean and variance of the pretrained embedding table; the sequence carries no learned content, and yet reaches accuracy comparable to optimized soft prompts on math reasoning benchmarks in several settings\. The mechanism unfolds in two stages: because attention has to absorb a never\-seen\-before random position, the distribution over the first few generated tokens flattens and reasoning trajectories branch, and as generation continues this influence dilutes naturally so the response commits to a single completion\. We show that during inference RSPs lift early\-stage token diversity and, combined with temperature sampling, widen Pass@N, the probability that at least one out of N attempts is correct\. Beyond inference, we carry the same effect into DAPO training and demonstrate practical gains\. Our contributions are: \(i\) RSP isolates the simplest form of soft prompt \-\-\- training\-free, freshly resampled \-\-\- providing a unified lens for the structural effect of injection that variants otherwise differing in training and form all share; \(ii\) a theoretical and empirical validation of the underlying mechanism; and \(iii\) an extension from inference to training\.

## Beyond Downstream Scores: Controlled Diagnostics for Point\-Cloud Self\-Supervised Learning Evaluation

**Authors:** Kohsuke Ide; Ryousuke Yamada; Yue Qiu; Yoshihiro Fukuhara; Hirokatsu Kataoka; Yuki Asano; Yutaka Satoh

**ID:** 139098 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l885Aav1TV>) | [PDF](<https://openreview.net/pdf?id=l885Aav1TV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139098>)

Downstream scores are the standard evidence for progress in point\-cloud self\-supervised learning \(SSL\)\. But a score is not a mechanism: it does not explain why a representation improves\. We diagnose three simple questions in the evaluation pipeline: what signal is learned, what geometry is visible, and what the score measures\. These questions test whether a gain comes from the pretext objective, from the geometric support available in the input, or from the downstream readout itself\. Applied to cross\-modal alignment, autoregressive prediction, and masked autoencoding, our diagnostics reveal that downstream scores often fail to identify the source of a gain\. For Concerto, coordinate\-only signals explain 28\.9\\% of the pretext\-loss response but recover only 6\.9\\% of the downstream gain on ScanNet, separating pretext\-loss explanation from representation transfer\. For masked autoencoding, removing spatially coherent regions hurts much more than removing the same number of random points, showing that the visible geometry, not just the retained fraction, drives the score\. For PointGPT, relaxing mask and order assumptions reduces transfer by at most 2\.78 points on ScanObjectNN and 0\.22 points on ShapeNetPart, showing that high scores can persist after weakening the intended autoregressive mechanism\. These findings caution against treating downstream gains as self\-evident representation progress in point\-cloud SSL\. We propose a diagnostic protocol that asks not only whether a score improves, but why it improves\.

## Rethinking Incompleteness: Formalizing Protocol Divergence and Train\-Once Learning for Robust IMVC

**Authors:** HAOLU LIU; XIYUE WANG; Xuanting Xie; Liangjian Wen; Zhao Kang

**ID:** 150214 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ju9V3PfmHR>) | [PDF](<https://openreview.net/pdf?id=ju9V3PfmHR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150214>)

Standard IMVC evaluation retrains separate models for different missing\-data configurations\. We show that this paradigm obscures a fundamental vulnerability: missing rate alone is insufficient to characterize data incompleteness\. Specifically, we show that protocols with identical nominal missing rates can differ by up to $50\\times$ in their proportion of fully observed samples, inducing drastically different learning regimes\. We formalize this phenomenon as incompleteness divergence, providing measures that capture structural disparities across missing\-data protocols\. We further prove that for a broad class of reconstruction\-based objectives, learning becomes structurally ill\-posed when the proportion of complete samples falls below a critical threshold, leading to near\-random performance\. To bypass this theoretical bound, we propose CRAFT \(Complete\-data Robust Attention\-masked Fusion Transformer\)\. CRAFT shifts the burden of robustness from the loss function to the architecture via two key properties: \(i\) per\-sample independence, which removes reliance on complete\-sample co\-occurrence, and \(ii\) mask\-aware variable\-length fusion, which aggregates only observed views through attention masking\. This design allows a single model, trained once on complete data, to generalize to diverse missing patterns at inference time without retraining\. Extensive experiments on seven benchmarks show that CRAFT matches or outperforms per\-configuration baselines while reducing training overhead by $8\.8\\times$, demonstrating that robustness to missing data can be achieved as an inherent architectural property\. Code \(CRAFT\) and our imvc\-audit toolkit are available at https://anonymous\.4open\.science/r/CRAFT\-BF80/ and https://anonymous\.4open\.science/r/imvc\-audit\-8263/\.

## MoRe: Modular Representations for Principled Continual Representation Learning on Sequential Data

**Authors:** Jiaqi Sun; Boyang Sun; Rasmy M\. H\.; Xiangchen Song; Kun Zhang

**ID:** 149880 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mXmO7UBPWK>) | [PDF](<https://openreview.net/pdf?id=mXmO7UBPWK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149880>)

Continual learning requires models to adapt to new data while preserving previously acquired knowledge\. At its core, this challenge can be viewed as principled one\-step adaptation: incorporating new information with minimal interference to existing representations\. Most existing approaches address this challenge by modifying model parameters or architectures in a supervised, task\-specific manner\. However, the underlying issue is representational: tasks require distinct yet structured representations that can be selectively updated without disrupting representations, while structure should reflect intrinsic organization in the data rather than task boundaries\. In sequential data, time\-delayed dependencies provide a natural signal for uncovering this organization, revealing how fundamental representations give rise to more specific ones\. Inspired by the modular organization of the human brain, we propose MoRe, a framework that identifies modularity in the representation itself rather than allocating it at the architectural level\. MoRe decomposes knowledge into a hierarchy of fundamental and specific modules with identifiability guarantees, enabling principled module reuse, alignment, and expansion during adaptation while preserving old modules by construction\. Experiments on synthetic benchmarks and real\-world LLM activations demonstrate interpretable hierarchical structure, improved plasticity\-stability trade\-offs, suggesting MoRe as a principled foundation for continual adaptation\.

## SignalBench: Comparing Dense Feedback Methods for Long\-Horizon Agents

**Authors:** Sergio Hernández\-Gutiérrez; Matteo Merler; Ilze Amanda Auzina; Joschka Strüber; Ameya Prabhu; Matthias Bethge

**ID:** 139286 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZMC8Gwiail>) | [PDF](<https://openreview.net/pdf?id=ZMC8Gwiail>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139286>)

Dense supervision is an essential ingredient when scaling long\-horizon agent training, yet we don't really know how well current methods recover the value structure they purport to estimate\. A growing line of work \-\- intrinsic signals, self\-distillation, embedding similarities \-\- can be unified as dense feedback methods that score intermediate states and actions\. However, prior works evaluate dense supervision by measuring downstream model performance, an approach that is computationally expensive and entangles the quality of the signal with engineering choices for training\. To address this gap, we propose SignalBench: a computationally cheap, training\-free testbed designed to isolate and evaluate dense supervision methods for agentic systems\. SignalBench allows us to comprehensively analyse the correlation of the evaluated signals with reference\-policy value labels across 21 dense feedback methods, with over 1\.2K evaluations across four diverse environments and six open\-weight backbones\. We find that simple prompting baselines consistently outperform state\-of\-the\-art dense feedback methods, and methodological families cluster together in performance\. These core findings are surprisingly robust: They hold across model sizes and families, environments, observation modality, and estimating Q\-value or state\-value\. Overall, SignalBench offers a valuable and inexpensive test bed for dense feedback method evaluation across model and task families\.

## The Implicit Bias of Hyperbolic Representation Learning for Multiclass Data: A Busemann Risk Perspective

**Authors:** Xingrun Li; Sho Kuno; Yusuke Mukuta; Xin Yang; Tatsuya Harada

**ID:** 148340 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yZCszLIehq>) | [PDF](<https://openreview.net/pdf?id=yZCszLIehq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148340>)

We study the implicit bias of Riemannian gradient flow for hyperbolic multiclass classification with fixed class prototypes in hyperbolic space $\\mathbb H^n$\. Our framework accommodates general \*permutation invariant relative margin \(PERM\)\* losses, a class that includes cross entropy and other standard multiclass losses\. Our analysis is based on a decomposition: at large radius, the distance to each prototype splits into a radial term and a direction dependent term described by the Busemann function\. This yields two main results\. First, we prove a radial dichotomy: the sign of a drift coefficient $\\mu$ determines whether the radius is pushed toward the ideal boundary or back toward the interior; if the positive drift persists, then $r\(t\)=\\tfrac12\\log t\+O\(1\)$, while persistent negative drift returns the trajectory to the large radius threshold in finite time\. Second, we show that the boundary direction converges to a critical point of the Busemann risk on $\\partial\\mathbb H^n$\. These results provide a rigorous asymptotic perspective on two phenomena we refer to as \*boundary saturation\* and \*near\-boundary clustering\* in hyperbolic representation learning\.

## Learning to Discriminate Scene Structures Makes Self\-Supervised Depth Learning Scalable

**Authors:** Mengtan Zhang; Yuchuan Cui; Yu Ma; Zizhan Guo; Wei Ye; Rui Fan

**ID:** 150258 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jW8Zbqy3Dr>) | [PDF](<https://openreview.net/pdf?id=jW8Zbqy3Dr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150258>)

Self\-supervised monocular depth estimation is appealing for its potential to scale with unlabeled data, yet existing methods often degrade when trained on diverse scenes\. This study finds that, under self\-supervision, models tend to encode dataset\-specific structural biases rather than transferable scene geometry, leading to cross\-domain optimization conflicts\. To address this issue, this study proposes the MaSS framework, aiming to make self\-supervised depth learning scalable to diverse data\. MaSS introduces a dedicated structural representation pathway explicitly decoupled from contextual features, which is guided by a novel scene\-structure discrimination objective to learn generalized, layout\-aware structural representations for depth decoding\. Trained and evaluated on four diverse datasets, both individually and jointly, MaSS substantially outperforms prior self\-supervised methods and is the first to consistently benefit from mixed\-domain training\. Zero\-shot evaluation on eight additional datasets further demonstrates its remarkable generalizability, particularly on those entirely out\-of\-distribution scenes\. The source code will be publicly available upon publication\.

## MCAS: Signal\-Processing\-Based Multi\-View Contrastive Learning for Acoustic Sensing

**Authors:** Bingzhi Wang; Jiajun Yu; Dengke Zhong; Jiaming Liu; Xiong Li; Hongbo Liu; Jie Yang

**ID:** 156122 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0FCfr7P0vM>) | [PDF](<https://openreview.net/pdf?id=0FCfr7P0vM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156122>)

Acoustic sensing is a promising technique for human\-computer interaction, but existing learning\-based systems still depend heavily on large task\-specific labeled datasets\. Compared with visual data, acoustic signals are difficult to interpret and annotate, making supervision costly and hard to scale\. Meanwhile, existing unsupervised representation learning methods, particularly contrastive learning, are largely designed for natural images and rely on data augmentation to form positive pairs\. Such strategies can destroy the temporal\-physical structure of acoustic signals, causing shortcut learning rather than meaningful representation learning\. To address this issue, we propose MCAS, a signal\-processing\-based multi\-view contrastive learning framework for acoustic sensing\. Instead of relying on artificial augmentations, MCAS constructs structure\-preserving positive pairs from complementary representations derived from different signal processing pipelines of the same acoustic event\. Moreover, MCAS is designed to address the heterogeneity of acoustic representations through progressive cross\-view interaction enabled by Hierarchical Shared\-Token Fusion and a multi\-level pretraining objective with physical consistency regularization\. Extensive experiments on two typical acoustic sensing tasks demonstrate the effectiveness of the proposed framework\. Under low\-label settings, MCAS consistently outperforms both supervised baselines and generic self\-supervised baselines, while also showing strong cross\-task transferability and robustness to corruptions and noise\.

## Decoupling Label Shift and Surrogate Gradient Errors for Robust Federated Spiking Neural Networks

**Authors:** Zouquan Chen; Yifei Yang; Lidong Zheng; Zhiming Fang; Yuchen Zheng

**ID:** 154393 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DuuJjNysv1>) | [PDF](<https://openreview.net/pdf?id=DuuJjNysv1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154393>)

Federated Spiking Neural Networks \(FedSNNs\) provide an energy\-efficient and privacy\-preserving learning paradigm for edge intelligence\. However, their robustness under Non\-IID data is limited by a coupled failure mode: label shift distorts membrane potential distributions, drives neurons away from gradient\-sensitive regions, and further amplifies surrogate gradient errors, which destabilizes federated optimization\. To address this problem, this paper proposes Spatio\-Temporal Spiking Adaptive Thresholds \(ST\-SAT\), a framework that mitigates the coupling between label shift and surrogate gradient errors through coordinated neuron\-level adaptation and client\-\-server knowledge alignment\. At the neuron level, ST\-SAT introduces the Spatio\-Temporal Parametric Leaky Integrate\-and\-Fire \(ST\-PLIF\) neuron, which adaptively calibrates firing thresholds, membrane potentials, and decay dynamics to keep local neuronal responses within effective gradient regions\. At the collaborative interaction level, ST\-SAT adopts a Dual\-Scale Knowledge Distillation strategy that combines adaptive logit\-level distillation with feature\-level alignment of neuronal statistics, thereby reducing class distribution bias and improving knowledge consistency across heterogeneous clients\. Extensive experiments on three benchmark datasets show that ST\-SAT consistently improves both global model performance and client\-local performance, with particularly strong gains under severe label shift\. These results validate the effectiveness of the proposed framework for robust federated SNN learning\. The anonymous code link is https://anonymous\.4open\.science/r/ST\-SAT\-4771\.

## Learnable Spectral Activations

**Authors:** Tamir Shor; Or Litany; Alex M Bronstein

**ID:** 151899 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=X6lgq8Q6sS>) | [PDF](<https://openreview.net/pdf?id=X6lgq8Q6sS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151899>)

Implicit neural representations \(INRs\) are shaped by the spectral structure induced by their input encodings and activation functions\. Existing methods improve fitting primarily by modifying which frequencies are available to the network, through coordinate encodings or periodic nonlinearities\. However, frequency access is not the only bottleneck: signals with localized or spatially varying structure require the network to efficiently compose frequencies into multi\-harmonic internal responses\. We introduce learnable spectral activations \(LSA\), which replace fixed neuron\-level nonlinearities with a residual truncated Fourier series whose harmonic amplitudes are learned during training\. LSA does not expand the asymptotic function class\. Instead, it changes the factorization of the representation: linear weights select features while activation coefficients control spectral shaping, and the two are updated by separate gradients\. Because the activation coefficients enter the loss linearly given fixed pre\-activations, spectral tuning becomes a simpler subproblem than in architectures where it is entangled with feature selection\. Empirically, this factorization concentrates more target\-signal energy in the leading eigenmodes of the neural tangent kernel, consistent with improved optimization behavior\. Across audio, image, neural radiance field, and neural acoustic field tasks, LSA also improves reconstruction quality\.

## Fed\-AGA: An Anchor Graph Alignment Framework for Federated Unaligned Multi\-view Clustering

**Authors:** Yichi Zhang; bohang sun; Hao Wei; Kai Di; Zhen Yang; Gengyu Lyu

**ID:** 155141 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=82yEbCFK30>) | [PDF](<https://openreview.net/pdf?id=82yEbCFK30>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155141>)

Federated Multi\-view Clustering \(FMVC\) enables privacy\-preserving cross\-view fusion from distributed multi\-view data, where each client holds one view of samples and participates in the server's fusion without exposing raw data\.  In practice, existing FMVC methods face two key challenges: \(1\) the collected samples often show unaligned correspondence across views, especially under distributed collection; and \(2\) the gap between higher data privacy and lower computation cost remains hard to reconcile\. To address these issues, we propose an Anchor Graph Alignment Framework for Federated Unaligned Multi\-view Clustering \(\*\*Fed\-AGA\*\*\), which employs a coarse\-to\-fine alignment strategy on lightweight anchor graphs to achieve misalignment\-robust cross\-view fusion while bridging the gap between data privacy and computation cost\. Specifically, in the coarse alignment stage, we introduce an anchor\-based graph generation module to generate an anchor graph on each client and upload them to the server for category\-wise alignment by a designed topology\-aware alignment module, which distills topology components as category\-exclusive signatures to guide and achieve ideal category\-wise alignment\. In the next fine alignment and fusion stage, we design an attention\-based alignment module to encourage each sample to pay attention to highly similar samples for sample\-wise alignment, and the fine\-aligned results are contrastively fused into a cross\-view consistent anchor graph for clustering\. Extensive experiments on multiple datasets demonstrate that Fed\-AGA achieves state\-of\-the\-art performance among related methods, while theoretical analysis offers theoretical motivation for two key components\.

## ES\-Merging: Biological MLLM Merging via Embedding Space Signals

**Authors:** Wonbin Lee; Dongki Kim; Sung Ju Hwang

**ID:** 151206 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cB1cxze69T>) | [PDF](<https://openreview.net/pdf?id=cB1cxze69T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151206>)

Biological multimodal large language models \(MLLMs\) have emerged as powerful foundation models for scientific discovery\. However, existing models are specialized to a single modality, limiting their ability to solve inherently cross\-modal scientific problems\. While model merging is an efficient method to combine the different modalities into a unified MLLM, existing methods rely on input\-agnostic parameter space heuristics that fail to faithfully capture modality specialization\. To overcome this limitation, we propose the Embedding\-Signal\-based MLLM Merging \(ES\-Merging\), a framework that estimates merging coefficients from embedding space signals, moving the merging paradigm from the parameter signals to the embedding signals\. ES\-Merging exploits coarse\-grained and fine\-grained signals from embedding space to estimate the layer\-wise and element\-wise merging coefficients, respectively, which are jointly combined for complementary coefficient estimation\. Through extensive experiments, we demonstrate that ES\-Merging outperforms existing merging methods not only on the cross\-modal reasoning but also on the single\-modal knowledge preservation, establishing that embedding space signals provide a principled and effective foundation for MLLM merging\.

## Tree\-Sliced Orlicz Integral Probability Metric

**Authors:** Tuan Hoang; Trung\-Khang Tran; Viet\-Hoang Tran; Tan Nguyen

**ID:** 151604 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZK1WX79lMF>) | [PDF](<https://openreview.net/pdf?id=ZK1WX79lMF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151604>)

Tree\-sliced distances have emerged as scalable alternatives to Sliced Wasserstein distances by projecting probability measures onto tree metric spaces and exploiting closed\-form transport on trees\. Existing tree\-sliced constructions, however, are largely built around first\-order Wasserstein geometry\. While this choice yields efficient computation, it fixes the discrepancy to an $L^1$\-type aggregation of subtree mass imbalances and provides limited control over the geometry used in downstream optimization\. We propose Tree\-Sliced Orlicz IPM \(TS\-Orlicz\), a tree\-sliced framework that replaces the tree\-level $W\_1$ discrepancy with an Orlicz integral probability metric\. Building on the tractable formulation of Orlicz IPMs on trees, TS\-Orlicz aggregates Orlicz\-induced discrepancies over random tree systems while preserving the scalability of tree\-sliced computation\. By varying the underlying Orlicz function, the framework recovers $L^p$\-type behavior and also supports non\-polynomial, tail\-sensitive geometries that emphasize large subtree discrepancies\. We show that TS\-Orlicz preserves key properties of tree\-sliced constructions and admits efficient computation via closed\-form special cases and one\-dimensional scalar optimization\. We further extend the framework to probability measures on hyperspheres\. Experiments across Euclidean and spherical settings, including gradient flows, self\-supervised learning, and diffusion\-based generative modeling, show that Orlicz\-induced tree\-sliced discrepancies achieve competitive or improved performance over sliced and tree\-sliced baselines while maintaining low computational cost\.

## Learn from your own latents and not from tokens: A sample\-complexity theory

**Authors:** Daniel Korchinski; Alessandro Favero; Matthieu Wyart

**ID:** 151709 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YdrSzFbIAM>) | [PDF](<https://openreview.net/pdf?id=YdrSzFbIAM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151709>)

Generative models, from diffusion models to large language models, achieve remarkable performance but at a cost in training data orders of magnitude larger than what biological learners require\. An alternative paradigm has emerged in which networks are trained to predict their \\emph\{own\} latent representations of related views or masked regions, as in data2vec and JEPA \-\- an idea related to predictive\-coding accounts of the cortex\. Despite strong empirical results, the theoretical understanding of these methods remains limited\. Central questions include: by how much does latent prediction actually improve data efficiency? Is there a benefit to stacking such methods into multi\-scale hierarchies? We answer both using as data a tractable probabilistic context\-free grammar that captures the compositional structure of natural language and images\. We prove that latent prediction recovers the full latent tree of depth $L$ from a number of samples scaling as $m^3$, where $m$ is the number of production rules per symbol\. This is much fewer than the $m^L$ samples required by supervised learning and the $m^\{L\+1\}$ required by token\-level SSL\. We confirm this bound with \(i\) a hierarchical clustering algorithm, \(ii\) an end\-to\-end neural network whose predictor\-clusterer modules predict their own latents at each level via gradient descent, and \(iii\) the first sample\-complexity analysis of data2vec, which we show implicitly performs hierarchical latent prediction\. This suggests that explicit stacking such as H\-JEPA is largely redundant\.

## Deadline\-Constrained Dynamic Workflow Scheduling Can be Cast as a Representation Learning Problem

**Authors:** Ya Shen; Gang Chen; Hui Ma; Mengjie Zhang

**ID:** 151183 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cMnAOzk1N3>) | [PDF](<https://openreview.net/pdf?id=cMnAOzk1N3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151183>)

Deadline\-Constrained Cost\-Aware Dynamic Workflow Scheduling \(D\-CADWS\) aims to minimize virtual machine \(VM\) rental cost while maintaining high workflow deadline satisfaction in dynamic cloud environments\. The problem is challenging because the deadline impact of assigning a workflow task to a VM is not directly observable at decision time\. It depends on long\-horizon effects, including downstream task dependencies, VM queueing, and interactions among dynamically arriving workflows\. Existing methods usually fold deadline violations into a single reward or penalty term, which obscures the distinction between action safety and action cost\. In this paper, we cast D\-CADWS as a representation learning problem\. The core idea is to learn a deadline\-aware representation that can predict, before execution, whether a candidate action is risky with respect to the current task deadline, and then use it to guide cost\-efficient scheduling\. Based on this idea, we propose a representation\-centered deep reinforcement learning \(RCDRL\) method\. RCDRL constructs task\-level deadline supervision, trains a predictive deadline model to learn deadline\-aware representations, and learns a VM\-cost critic on top of this representation\. The final policy follows a safe\-first rule that rejects risky actions before minimizing VM cost\. We further propose a two\-phase training strategy to keep the learned representation aligned with the evolving policy\-induced data distribution\. Experiments on dynamic workflow scheduling benchmarks show that RCDRL achieves substantially lower VM cost than other state\-of\-the\-art heuristic and DRL baselines while maintaining strong workflow deadline success\.

## Learning to Group and Order: Cross\-Instance Self\-Supervised RL for Vision\-Centric MLLMs

**Authors:** Songming Yang; Hong\-Tao Yu; Xiu\-Shen Wei

**ID:** 153627 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JytxDG9YwJ>) | [PDF](<https://openreview.net/pdf?id=JytxDG9YwJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153627>)

Reinforcement learning \(RL\) post\-training has become an important paradigm for improving multimodal large language models \(MLLMs\), especially with automatically verifiable rewards\. For vision\-centric MLLMs, self\-supervised visual pretext tasks provide such rewards without human annotations\. However, existing self\-supervised RL methods mostly exploit within\-instance structure, such as spatial or temporal ordering within a single image or video, offering limited supervision for cross\-instance discrimination and fine\-grained comparison\. We introduce Group\-and\-Order Self\-Supervised Reinforcement Learning \(GO\-SSL\), a cross\-instance jigsaw framework for vision\-centric MLLM post\-training\. Given two visual instances, GO\-SSL mixes their local elements and trains the model to group them by instance of origin while recovering the order within each group, coupling instance\-level comparison with spatial, temporal, or geometric structure recovery\. This paired formulation turns the same unlabeled data into richer verifiable supervision through diverse pairings, shuffles, and hard\-pair curricula\. We instantiate GO\-SSL mainly on cross\-image jigsaw tasks and further extend it to 3D depth and video temporal ordering\. Across diverse benchmarks, GO\-SSL consistently improves over the base MLLM and prior baseline methods, with clear gains in fine\-grained perception and spatial understanding\. These results suggest a data\-efficient direction for self\-supervised RL in MLLMs: constructing comparative cross\-instance contexts can provide richer transferable supervision than merely scaling data volume or adding isolated pretext tasks\. Code will be released later\.

## Leveraging unlabelled data for generalizable neural population decoding

**Authors:** Ximeng Mao; Nanda H Krishna; Hee\-Woon Ryoo; Matthew G Perich; Guillaume Lajoie

**ID:** 154038 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GgTOMpnG1o>) | [PDF](<https://openreview.net/pdf?id=GgTOMpnG1o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154038>)

Robust and accurate neural decoders are integral to the development of neurotechnological applications such as brain\-computer interfaces and closed\-loop experiments\. Recent work has shown that tokenizing neural data at the resolution of individual spikes facilitates multi\-session pretraining and delivers state\-of\-the\-art decoding performance\. However, these spike\-based models are currently restricted to supervised learning \(SL\) regimes, limiting both pretraining and finetuning to datasets with paired behavioural labels\. To address this, we introduce MOJO \($\\textbf\{M\}$asked aut$\\textbf\{O\}$encoder\-based $\\textbf\{JO\}$int training\), a training framework designed for spike\-tokenizing models that jointly leverages self\-supervised learning \(SSL\) via masked autoencoding and SL objectives for better decoding performance and interpretability\. We evaluate MOJO on three intracortical spiking datasets—monkey motor cortex across various reaching tasks, multi\-regional mouse recordings during vision and cognitive decision making tasks—demonstrating superior performance to purely SL\-trained models\. This improvement is especially notable when training with limited labelled data, specifically in the few\-shot finetuning regime where only a small amount of labelled data is available to adapt a model to a new recording session\. The incorporation of SSL also yields more interpretable neuronal representations, improving performance on analyses such as brain region classification and spike\-statistics prediction despite the lack of explicit optimization for these tasks\. We then show that MOJO generalizes beyond spiking data using human electrocorticography \(ECoG\) during speech articulation\. We show that MOJO continues to outperform purely SL\-trained models and achieves performance comparable to neuro\-foundation models \(NFMs\) built specifically for continuous signals\. Overall, augmenting spike\-tokenizing models with SSL improves their performance in label\-impoverished settings and enables the use of unlabelled data across various tasks and species, and while generalizing to other neural modalities\. These results suggest a path towards more flexible and scalable data usage when training NFMs\.

## Spherical Interpolation for Backward\-Compatible Multimodal Representations

**Authors:** Simone Ricci; Niccolò Biondi; Federico Pernici

**ID:** 148719 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vYCMLEpje4>) | [PDF](<https://openreview.net/pdf?id=vYCMLEpje4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148719>)

Contrastive vision\-language models map visual and textual representations in a shared normalized embedding space, making cosine similarity the natural metric for cross\-modal retrieval\. A practical challenge arises during model upgrades: independently trained models generally produce incompatible representation spaces, so replacing a deployed model typically requires recomputing embeddings for the entire gallery, which is prohibitively expensive at scale\. Orthogonal post\-hoc alignment mitigates this problem by mapping new\-model queries into the old\-model gallery space while preserving the new learned representation\. However, because independently trained models can differ in fine\-grained representation structure, the orthogonal alignment remains approximate, leaving a residual angular discrepancy between the old\-model query and the aligned new\-model query\. We study whether spherical linear interpolation \(SLERP\) between these two normalized query representations can improve retrieval without re\-indexing the gallery\. We formalize the geometric conditions under which post\-alignment interpolation yields a query direction closer to a task\-optimal direction than either endpoint, and connect this characterization to Recall@$K$ through a local margin\-based certification result\. Experiments across multiple benchmarks and model families show that SLERP improves over orthogonal alignment alone, suggesting these conditions are broadly met in practice\.

## DART: Zero\-Shot Dual\-Side Alignment Routing for LLM Performance\-Cost Tradeoffs

**Authors:** Yuejun Jiao; Yanxin Yang; Boyu Wang; Yonghao Yang; Hao Shen; Mingsong Chen

**ID:** 155299 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6cPZndmGS6>) | [PDF](<https://openreview.net/pdf?id=6cPZndmGS6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155299>)

As the ecosystem of Large Language Models \(LLMs\) rapidly expands, LLM routing has become essential for dynamically balancing performance and cost\. However, existing methods fail to simultaneously satisfy the three core criteria of an ideal router, i\.e\., high routing precision, minimal intrinsic operational overhead, and zero\-shot onboarding of new models\. These methods rely heavily on surface\-level semantics and discrete ID mappings, conflating mere semantic similarity with underlying capability requirements and thereby precluding zero\-shot, training\-free generalization\. To address these limitations, we propose DART, a novel zero\-shot routing framework grounded in dual\-side alignment to optimize LLM performance\-cost tradeoffs\. Instead of relying on direct semantic matching, we decouple the routing process into a demand\-supply alignment problem within a shared low\-rank latent capability space\. Specifically, on the supply side, DART constructs latent capability embeddings for candidate models, using an initialization mechanism to anchor newly introduced models in this latent space via metadata and family\-graph prior, without retraining\. On the demand side, a dedicated encoder explicitly distills the query's directional capability requirements and inherent difficulty into a latent demand embedding\. This decoupled representation allows routing decisions to be computed via a lightweight dot\-product operation between the demand and capability embeddings, modulated by query\-adaptive cost sensitivity, minimizing overhead\. Extensive experiments across comprehensive benchmarks demonstrate that DART achieves state\-of\-the\-art utility under diverse cost constraints, satisfying the three core criteria with exceptional robustness in cold\-start scenarios\.

## Breaking feature collapse in self\-supervised time series encoder

**Authors:** Özgün Turgut; Daniel Rueckert

**ID:** 155178 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7iz3dma6VT>) | [PDF](<https://openreview.net/pdf?id=7iz3dma6VT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155178>)

General\-purpose time series encoders such as \\texttt\{OTIS\} and \\texttt\{MOMENT\} promise a single backbone that transfers across domains, but they do not scale and rely on manually tagged domain labels at tokenisation\. We trace both symptoms to a single pathology: under masked\-data\-modelling supervision the encoder's output patch tokens \\textit\{partially collapse\}, with mean off\-diagonal pair\-wise cosine similarity stabilising at $0\.68$ in \\texttt\{OTIS\} and the encoder's effective rank capped accordingly\. This is the natural consequence of supervising the encoder only in data space, which leaves no constraint against redundant token directions in the representation space\. We introduce \\texttt\{OTISv2\}, which suppresses the collapse by complementing the masked\-reconstruction objective with two representation\-space terms \-\-\- a self\-distillation loss against an exponential\-moving\-average teacher and a KoLeo regulariser \-\-\- and replaces \\texttt\{OTIS\}'s per\-domain variate embeddings with register tokens to remove the label dependency\. The resulting encoder pulls mean patch\-to\-patch cosine similarity from $0\.63$ to $0\.58$, scales monotonically from $7\.1\\,$M to $40\\,$M parameters where its predecessor plateaus, and dominates general\-purpose baselines on $143$ uni\- and multi\-variate datasets from the UEA and UCR archives from a single label\-free checkpoint\. We release code and pre\-trained weights upon acceptance\.

## OTIS: Learning High\-Quality Time Series Features With Tiny Encoders

**Authors:** Özgün Turgut; Philip Müller; Martin Menten; Daniel Rueckert

**ID:** 156785 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156785>)

We introduce OTIS, an open time series encoder that yields high\-quality time series features for downstream deployment on any system, including resource\-constrained wearables and industrial sensors\. Currently, the development of powerful general\-purpose encoders relies on the scaling laws hypothesis, using large encoder sizes to memorise the heterogeneous distributions of multi\-domain training data\. However, this reliance on scale creates a barrier to real\-world utility, rendering deployment on resource\-constrained systems infeasible due to strict memory, energy, and latency constraints\. Surprisingly, we find that tailoring standard masked modelling pre\-training to time series properties yields a tiny 7\.1M encoder that matches the state\-of\-the\-art performance of 54× larger encoders across 162 tasks, while requiring 10× less memory, 43× less energy, and 37× lower latency\. To achieve this without the capacity tax, we introduce three novel components: \(1\) a domain\-aware tokeniser to resolve conflicting semantics within multi\-domain training data; \(2\) a dual masking strategy to capture spatiotemporal structures and temporal causality; and \(3\) a structure\-aware objective to decouple feature learning from modelling noise\. Consequently, OTIS produces high\-quality time series features that enable state\-of\-the art performance in discriminative tasks and even extend seamlessly to generative tasks at minimal additional cost\. To democratise access to powerful time series features on any system, we release our code and pre\-trained weights\.

## Generalized Laplacian in Spectral Seriation on Manifold Data

**Authors:** Ruizi Wu; Wanjie Wang; Jinchi Lv

**ID:** 154052 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GZLpAjTrJj>) | [PDF](<https://openreview.net/pdf?id=GZLpAjTrJj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154052>)

We study high\-dimensional observations $Z\_i \\in \\mathbb\{R\}^p$ satisfying that $E\[Z\_i\] = X\(t\_i\)$, where $X\(t\)$ parameterizes a manifold on $0 \\le t &lt; 2\\pi$, with the goal of recovering the latent phases $t\_i$; a motivating example is estimating object\-viewing angles from photographs\. Spectral seriation is a standard phase\-recovery method: given a similarity matrix $S$ with degree matrix $D$, it uses the leading eigenvectors of the normalized Laplacian $D^\{\-1/2\} S D^\{\-1/2\}$, whose continuum limit is linked to the manifold Laplacian, to estimate $t\_i$\. Recent applications show that generalized Laplacians involving $D^\{\-\\alpha\}$ can outperform the normalized Laplacian on graphs with heterogeneous degrees, raising the central question of whether the same advantage holds for spectral seriation\. We address such question by introducing and comparing three principled generalizations drawn from manifold learning and spectral seriation: a shifted generalized Laplacian, a graph\-difference Laplacian, and an extra\-normalized generalized Laplacian\. The extra\-normalized generalized Laplacian is the most robust to $\\alpha$ and achieves the highest recovery accuracy, identifying extra normalization as the key stabilizing step\. We establish a consistency result unveiling that eigenspace perturbation controls the estimation error up to rotation and reflection, giving a theoretical basis for the method\. Experiments on noisy closed curves confirm more accurate phase recovery under a suggested choice of $\\alpha$; on image data, the method recovers photo angles with the best accuracy\. Our results demonstrate that extra normalization is a key component for stable generalized spectral seriation in closed\-curve recovery problems\.

## DPLC: Dirichlet Process Guided Long\-tail Clustering

**Authors:** Letian Cui; Kun Zhou; Xulun Ye

**ID:** 154167 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FmLEIeg5hU>) | [PDF](<https://openreview.net/pdf?id=FmLEIeg5hU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154167>)

The main challenge of long\-tailed deep clustering is that imbalanced class frequencies cause head classes to dominate the partitioning of the representation space, which in turn submerges or distorts the cluster structures of tail classes\. Existing methods typically alleviate this issue through heuristic head\-tail partitioning or fixed auxiliary clustering\. However, such approaches rely on manually specified discrete granularities and therefore struggle to capture the continuous latent structure of real\-world long\-tailed data\. To address this limitation, we propose DPLC, a Dirichlet Process guided Long\-tailed Clustering method that adaptively models the latent sub\-cluster structure from a nonparametric Bayesian perspective\. Specifically, DPLC periodically extracts soft latent sub\-clusters from self\-supervised embeddings and leverages them as data\-driven rebalancing signals to mitigate the clustering bias induced by head\-class dominance\. By requiring neither a predefined number of auxiliary clusters nor explicit binary head\-tail partitioning, DPLC enables more flexible modeling of complex long\-tailed distributions\. Extensive experiments show that DPLC consistently outperforms existing methods across multiple long\-tailed clustering benchmarks and a wide range of imbalance ratios\.

## ORCA: Orthogonal Residual Consensus Alignment for Multi\-View Clustering

**Authors:** Xiaojian Ding; Xian Li; Xiaoying Zhu; Lin Zhao; Kaixiang Wang

**ID:** 151531 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZzLbU0tREZ>) | [PDF](<https://openreview.net/pdf?id=ZzLbU0tREZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151531>)

Deep multi\-view clustering often struggles with inter\-view feature redundancy and dimensionality collapse during iterative representation fusion\. To address these limitations, we propose Orthogonal Residual Consensus Alignment \(ORCA\)\. First, a Semantic Incremental Recurrent Fusion \(SIRF\) module explicitly separates shared redundancy from complementary residuals via geometric projection\. By employing an adaptive halting mechanism, SIRF autonomously maximizes information gain while avoiding structural collapse\. Second, a Consensus\-Calibrated Hierarchical Contrastive Alignment \(CCHA\) module is introduced to preserve multi\-scale semantics\. It adaptively aligns view\-level, local, and recurrent representations using the global consensus as a semantic anchor\. Consequently, ORCA learns latent representations with robust structural integrity and highly discriminative semantics\. Extensive experiments on multiple benchmarks demonstrate that ORCA consistently outperforms state\-of\-the\-art methods, with comprehensive ablations verifying its robustness\.

## Uncertainty\-Aware Probabilistic Constrained Clustering from Entangled Pairwise Supervision

**Authors:** Shaojie Zhang; Ke Chen

**ID:** 154307 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EgwTOkzegp>) | [PDF](<https://openreview.net/pdf?id=EgwTOkzegp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154307>)

Pairwise constrained clustering typically relies on hard must\-link/cannot\-link labels, whereas realistic pairwise supervision may be real\-valued and entangle intrinsic ambiguity, expert judgment, and stochastic corruption\. Existing deep constrained clustering \(DCC\) methods mainly target hard, expert\-agnostic constraints, treating soft labels mostly numerically rather than semantically\. We formalize this setting as uncertainty\-aware probabilistic constrained clustering \(UPCC\), defining a canonical aleatoric target through a heterogeneous observation process and analyzing its conditional identifiability\. We introduce ProbPair, an angular pairwise objective for probabilistic relations, and build ECI\-PP, an estimator\-\-corrector\-\-integrator framework that refines imperfect supervision via belief estimation, correction, and reliability\-aware integration\. Across challenging probabilistic supervision settings, experiments on diverse benchmarks show that ECI\-PP outperforms state\-of\-the\-art DCC methods and remains robust with a shared default configuration\.

## Auditing Single\-Query Recoverability in Self\-Supervised Representations

**Authors:** Zirui Wang; Guangqiang He; PangWu; Peng Wang; Zhenfeng Li; Xianxiang Chen; Lidong Du; Zhen Fang

**ID:** 152886 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Pera711ODe>) | [PDF](<https://openreview.net/pdf?id=Pera711ODe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152886>)

Modern transformation\-aware self\-supervised representations are routinely scored under protocols that grant the evaluator paired views, augmentation labels, or teacher anchors \-\-\- none of which the deployed predictor ever sees\. We audit the gap that opens once these privileges are removed and only a single query remains\. The finding is a systematic evaluation illusion: on 3DIEBench\-Honest, honest single\-query rotation errors are typically $2\{\-\}3\\times$ as large as native transformation scores, consistently across comparators and matched\-utility thresholds\. To make this gap measurable, we introduce a deployment\-honest evaluation contract specifying a one\-query test interface, matched semantic utility, a strongest\-eligible\-neighbor headline with tail summaries, and explicit privilege accounting\. Theory and experiments are in service of the contract: lower\-bound analysis grounds the contract at the interface level, while a positive control supplies a non\-vacuous upper certificate under declared privileges\. We exercise the contract on a generated law, on 3DIEBench\-Honest, and on PTB\-XL\. The operational conclusion is that native transformation\-aware success is not, on its own, a single\-query deployment certificate\.

## WaveGen: Truly End\-to\-End Waveform Generation via Internal Spectral Trajectory Learning

**Authors:** Sang\-Hoon Lee; Ha\-Yeong Choi

**ID:** 152293 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U9I8LBgt7t>) | [PDF](<https://openreview.net/pdf?id=U9I8LBgt7t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152293>)

This work proposes WaveGen, a fully end\-to\-end diffusion\-based text\-to\-waveform framework based on Spectral Forcing, which jointly learns an internal spectral trajectory and the target waveform trajectory within a single model, enabling direct end\-to\-end text\-to\-waveform generation\. Unlike recent TTS pipelines, WaveGen does not rely on separately trained or externally decoded intermediate representations, such as neural audio codecs, Mel\-spectrogram vocoders, or VAE\-based latent models\. In addition, WaveGen performs internal text\-speech alignment within a single model, eliminating the need for external alignment modules such as duration predictors\. To preserve a truly end\-to\-end formulation, our framework further avoids dependence on self\-supervised representations, such as BERT\-based text embeddings and Wav2Vec 2\.0\-based semantic representations, as well as semantic distillation methods for training optimization\. To achieve this, we carefully design Spectral Forcing, a model architecture with disentangled diffusion heads, and a training objective based on a multi\-scale spectral $v$\-loss\. We further validate the scalability of end\-to\-end TTS models by scaling the model size from 0\.1B to 0\.4B parameters\. With a single architecture, open\-source data, and one\-stage training without external modules, WaveGen demonstrates fully end\-to\-end waveform generation by achieving promising performance\. In particular, WaveGen achieves a WER of 1\.77, a SIM of 0\.63, and competitive MOS performance on the Seed\-en benchmark\.

## Beyond the Readout: Reservoir State Statistics for Model\-Space Learning under Sparse Observations

**Authors:** Ao Chen; Yijing Lu; Pengpeng Chen

**ID:** 152483 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Skj69JdWAO>) | [PDF](<https://openreview.net/pdf?id=Skj69JdWAO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152483>)

Multivariate time series often arrive with non\-uniform timestamps and asynchronous per\-channel observations, violating regular\-grid assumptions of standard sequence models, while scarce labels and limited training resources make learning tasks more challenging\. Model\-space learning offers a lightweight alternative by fitting a dynamical model to each sequence and performing downstream analysis in the resulting model space\. However, under irregular sampling, channels with very few observations weakly constrain the per\-channel regression, leaving the fitted readout an unreliable summary\. In this paper, we propose Reservoir State Statistics \(RSS\), a readout\-complementary representation that augments the readout with three inversion\-free trajectory summaries: centroid, spread, and terminal state\. RSS is computed on the trajectory of the Global Decay Reservoir Network \(GDRN\), a continuous\-time reservoir with per\-channel time decay, cross\-channel global pooling, and event\-driven masked updates for asynchronous multivariate observations\. Across multiple datasets, GDRN\-RSS achieves competitive few\-shot accuracy with CPU runtimes of seconds\.

## Training\-Free Entangler Selection for Quantum Neural Networks via Hilbert–Schmidt Geometry

**Authors:** WOO SEOB SIM; Yu R Park

**ID:** 149136 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=saIG4QRgnj>) | [PDF](<https://openreview.net/pdf?id=saIG4QRgnj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149136>)

Choosing where to place entangling gates is a central design choice in quantum machine learning circuits, yet entanglers are still typically chosen from fixed templates or by expensive search procedures requiring training or pairwise kernel evaluations\. We propose the \\emph\{HSD\-Lipschitz principle\}, a training\-free geometric criterion built on a simple intuition: a useful entangler should keep encoded states stable across the dataset while separating different classes\. We formalise this through a two\-sided bound on local light\-cone subsystems\. Under a light\-cone locality assumption, dataset\-level gradient variance is upper\-bounded by reduced\-state spread; under random initialisation, the expected between\-class gradient signal is lower\-bounded by class\-conditional reduced\-state distance\. The resulting algorithm, HSD\-greedy, adaptively grows an entanglement structure using only single\-state reduced moments, estimable via classical shadows, and avoids the $\\mathcal\{O\}\(N^2\)$ pairwise kernel evaluations of kernel\-target alignment proxies\. Empirically, both bounds hold without violation across $110$ topologies and $440$ parameter rows, and extend to $180$ additional configurations\. HSD\-greedy attains the strongest average AUC among training\-free entangler selectors on synthetic and real\-world benchmarks, at roughly $60\\times$ lower selection cost than the strongest baseline in 13\-qubit simulation\. End\-to\-end execution on a 20\-qubit IBM Eagle subchain substantially outperforms a fixed 19\-CNOT Linear chain and matches or exceeds a matched\-budget Random baseline while using far fewer two\-qubit gates than the Linear chain\.

## FuncFormer: Circuit Representation Learning via the Flow of Functional Propagation

**Authors:** Yunjie Ji; Jie Wang; Zhihai Wang; Min Li; Junhua Huang; Zhihao Shi; Feng Wu; Mingxuan Yuan; Jianye Hao

**ID:** 155637 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=46NBp3fllK>) | [PDF](<https://openreview.net/pdf?id=46NBp3fllK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155637>)

Learning expressive representations for Boolean logic circuits is a fundamental challenge at the intersection of graph learning and Electronic $\\mbox\{Design\}$ Automation \(EDA\)\. Existing Graph Neural $\\mbox\{Networks\}$ \(GNNs\) primarily rely on topological message passing, which often fails to capture the strict causal dependencies and discrete functional semantics of logic gates\. In this paper, we $\\mbox\{propose\} \\textbf\{FuncFormer\}$, a Graph Transformer that incorporates $\\textbf\{functional simulation\}$ not as a proxy task, but as a fundamental inductive bias directly into the representation learning process\. Unlike standard GNNs which typically rely on isotropic aggregation, FuncFormer $\\textbf\{encodes the intrinsic flow of functional propagation\}$ by analyzing randomized simulation traces as they evolve through the network\. This approach effectively aligns the continuous embedding manifold with the discrete Boolean function space, effectively mitigating structural aliasing\. By integrating these deterministic signal trajectories with a scalable dual\-path attention mechanism, our model preserves functional consistency across long\-range dependencies in both combinational and sequential circuits\. Empirical results demonstrate that FuncFormer significantly outperforms state\-of\-the\-art models \(e\.g\., DeepGate4\) in Quality\-of\-Results \(QoR\) prediction and formal verification tasks, exhibiting robust generalization to unseen circuit scales\.

## On Reparameterizing the Score Function

**Authors:** Mohammad Hossein Amani; Leonardo Bocchieri; Maxime Peyrard; Clement Hongler; Robert West

**ID:** 151999 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WGc94WFesu>) | [PDF](<https://openreview.net/pdf?id=WGc94WFesu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151999>)

Policy gradients for autoregressive sequence models differentiate each token's log\-probability while holding the conditioning history fixed\.  This discards information about how earlier decisions shape later conditional distributions, creating a credit\-assignment bottleneck when rewards are sparse\.  We introduce History\-Reparameterized \(HR\) policy gradients, which replace the frozen prefix in the score function with a differentiable reparameterized or relaxed history, allowing gradients of downstream log\-probabilities to propagate backward through the generated trajectory\. The resulting history\-pathwise term is generally biased when added directly, so we derive Optimal HR \(OHR\), a centered control\-variate estimator with a closed\-form coefficient that minimizes the trace of the gradient variance at the population level\.  The variance reduction is governed by temporal structure in the policy dynamics: random or weakly structured policies provide little benefit, while policies with learned sequential dependencies yield informative history\-pathwise corrections\. For discrete tokens, the choice of relaxation is crucial: embedding\-level relaxation yields substantial variance reduction that grows with horizon, whereas straight\-through Gumbel\-Softmax yields essentially none in our diagnostics\. We validate the method on a Gaussian linear Markov model, a sparse\-reward T\-maze with a recurrent policy, and an autoregressive Transformer model for small Traveling Salesman Problem \(TSP\) instances\.

## ASVQ: What Reparameterization Is Just Enough for Efficient Codebook Learning?

**Authors:** Wenfeng Zou

**ID:** 149752 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nd6Lcw7MOf>) | [PDF](<https://openreview.net/pdf?id=nd6Lcw7MOf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149752>)

Addressing codebook collapse in vector quantization models is crucial for efficient discrete representation learning\. Recent solutions increasingly rely on expressive codebook reparameterizations, improving adaptability at the cost of additional optimization and computational overhead\. This motivates a simple question: what reparameterization scheme is just enough for efficient codebook learning? In this work, we propose Adaptive\-Scale Vector Quantization \(ASVQ\), a lightweight reparameterization method for learning the codebook in a decoupled way\. Experiments across image and audio tokenization tasks demonstrate that ASVQ consistently improves codebook utilization, reconstruction quality, and training stability, while remaining competitive with more complex reparameterization\-based methods\. These results suggest that ASVQ provides a favorable trade\-off between codebook expressiveness and efficiency\.

## Drift\-Aware Multimodal User Representation Learning via Multi\-Scale Temporal Modeling and Sparse Mixture\-of\-Experts

**Authors:** Ziqing Qian; Haohang Chen; Shengqi Dang; Yuhan Xiong; Canyu Shen; Jiaying Lei; Nan Cao

**ID:** 156057 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0mxNcDRIdS>) | [PDF](<https://openreview.net/pdf?id=0mxNcDRIdS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156057>)

Understanding user preferences from noisy and temporally evolving social media behaviors is fundamentally challenging due to interest drift, where user preferences shift across time and exhibit both multi\-scale temporal patterns and diverse co\-existing interests\. To address this, we propose DUMoE, a unified framework for drift\-aware multimodal user representation learning\. Our model consists of \(i\) a temporal dynamics\-aware backbone that captures and integrates static profiles, short\-term behavioral signals, and long\-term dependencies into a coherent representation, and \(ii\) a sparse mixture\-of\-experts \(MoE\) interest adapter that disentangles multiple latent interests via expert specialization and adaptive routing\. Each expert models a distinct interest subspace, while a gating network dynamically selects and aggregates a sparse subset of relevant experts for each user\. To enable stable and effective optimization, we further introduce a three\-stage training strategy that decouples backbone learning, expert specialization, and gating optimization\. Extensive experiments on real\-world social media datasets show that DUMoE consistently outperforms state\-of\-the\-art methods on both user interest prediction and interaction prediction tasks\.

## Beyond Low\-Pass Dynamics: Frequency\-Selective Spiking Reservoirs with Resonant Neurons

**Authors:** Aurora Micheli; Claudio Gallicchio; Nergis Tomen

**ID:** 148662 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w4gGQ1ybW6>) | [PDF](<https://openreview.net/pdf?id=w4gGQ1ybW6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148662>)

Spiking reservoir computing combines the training efficiency of fixed random recurrent networks with the energy efficiency of event\-driven inference, where computation is triggered by sparse spikes rather than executed densely at every timestep\. However, existing spiking reservoirs almost exclusively rely on Leaky Integrate\-and\-Fire \(LIF\) neurons, whose low\-pass dynamics limit their ability to distinguish information encoded at different temporal frequencies\. We introduce HRF\-Res, a liquid state machine in which LIF neurons are replaced by a heterogeneous population of Harmonic Resonate\-and\-Fire \(HRF\) neurons\. These neurons exhibit intrinsic oscillatory dynamics and selectively respond to input frequencies, enabling the reservoir to capture frequency\-specific temporal patterns\. The result is more discriminative representations and higher classification accuracy than LIF\-based reservoirs, achieved without sacrificing the energy efficiency of spiking computation, with 9–14× lower energy consumption than an equivalent non\-spiking oscillatory reservoir\. Evaluated on eight benchmarks spanning time series, sequential images, audio spike trains, and neuromorphic vision, HRF\-Res achieves competitive or state\-of\-the\-art performance among spiking reservoir methods\. These results demonstrate that introducing frequency\-selective dynamics into spiking reservoirs improves representational quality and classification performance while preserving their inherent energy efficiency\.

## StylePlan: Style\-Conditioned Intent Planning for Zero\-Shot Coordination

**Authors:** Xiao Su; Jian Zhou

**ID:** 152367 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TahqPwogCI>) | [PDF](<https://openreview.net/pdf?id=TahqPwogCI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152367>)

Zero\-shot coordination requires agents to collaborate with previously unseen partners without test\-time fine\-tuning or explicit communication\. A persistent difficulty is that partner behavior contains information at multiple timescales: stable conventions such as role preference or spatial habit, and fast local intent such as the next object to collect or deliver\. Most partner\-conditioned policies compress these signals into a single latent embedding, which can blur long\-term convention with short\-term action evidence\. We propose \\textbf\{StylePlan\}, a partner modeling framework that separates slow partner style from fast partner intent and combines them through conflict\-aware arbitration\. StylePlan builds an online behavioral fingerprint, predicts short\-horizon partner intent, forms a style\-conditioned intent prior, and uses the disagreement between prior and immediate evidence to modulate a recurrent actor\-critic policy\. On the verified Overcooked V2 artifacts, StylePlan obtains the best reported average cross\-play among methods with available entries under the legacy evaluator\. We additionally provide a scan\-based JAX evaluation with unseen\-partner XP, within\-episode partner switches, unified SP/FCP reruns, and wired module ablations\. The results show that StylePlan is most reliable as an online adaptation mechanism: it improves recovery and drop under partner switches, while the current implementation still needs broader unified reruns to establish a stronger XP claim\.

## UncertainGen: Scalable Uncertainty\-Aware Representation Learning of DNA Sequences

**Authors:** Abdulkadir Celikkanat; Andres Masegosa; Mads Albertsen; Thomas Nielsen

**ID:** 151957 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WYGzgFvBK2>) | [PDF](<https://openreview.net/pdf?id=WYGzgFvBK2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151957>)

Learning effective representations of DNA sequences is fundamental to genomic data analysis, especially in the presence of high sequence similarity and inter\-species DNA sharing\. Existing approaches rely on deterministic embeddings, such as k\-mer statistics or representations from large language models, which fail to capture the inherent uncertainty in short and ambiguous DNA fragments\. We propose UncertainGen, a lightweight probabilistic representation learning framework that embeds DNA sequences as distributions in a latent space\. The learned embedding variance captures positional ambiguity, increasing for sequences compatible with multiple genomic clusters\. We establish theoretical guarantees on embedding distinguishability, and show that the probabilistic formulation induces a data\-adaptive metric that expands the effective representational space\. We evaluate UncertainGen in the metagenomic binning task to demonstrate the practical benefits of uncertainty\-aware representations\. Experiments show that probabilistic embeddings consistently outperform deterministic k\-mer and large genome foundation models, while remaining lightweight and efficient\.

## CryoGeo: Latent Pose Equivariance for Amortized Ab Initio Cryo\-EM Reconstruction

**Authors:** Zhongyang Li; Diedong Feng; Shen Cheng; Bing Zeng; Shuaicheng Liu

**ID:** 149543 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pMplnGXe2b>) | [PDF](<https://openreview.net/pdf?id=pMplnGXe2b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149543>)

Cryo\-electron microscopy \(cryo\-EM\) reconstructs 3D macromolecular structures from noisy 2D particle images by jointly estimating the density and projection pose of each particle\. Amortized inference can greatly accelerate this process, but remains vulnerable to pose collapse because known image\-space symmetries are often learned only implicitly through reconstruction losses\. We ask whether this instability can be mitigated by enforcing cryo\-EM transformation laws directly in latent projection\-pose space\. We propose CryoGeo, a geometry\-constrained framework for amortized ab initio cryo\-EM reconstruction\. CryoGeo enforces latent pose equivariance by requiring in\-plane transformations to induce valid group actions on the predicted projection pose: rotations act as right multiplications on the predicted $SO\(3\)$ orientation, while shifts transform frame\-consistently\. At the core of CryoGeo is an output\-level group\-action objective that forces predicted cryo\-EM projection poses to obey physical transformation laws induced by in\-plane image rotations and shifts, rather than relying on equivariant feature extraction alone\. Across synthetic and real cryo\-EM datasets, CryoGeo improves pose consistency, mitigates collapse\-prone behavior, and yields more reliable amortized ab initio reconstructions than unconstrained variants and neural baselines\. These results show that latent pose equivariance turns in\-plane symmetry from an implicitly learned nuisance factor into a self\-supervised geometric constraint for stable, efficient amortized structural reconstruction\. Code will be released\.

## MulTaBench: Benchmarking Multimodal Tabular Learning with Text and Image

**Authors:** Alan Arazi; Eilam Shapira; Shoham Grunblat; Mor Ventura; Elad Hoffer; Gioia Blayer; David Holzmüller; Lennart Purucker; Gael Varoquaux; Frank Hutter; Roi Reichart

**ID:** 138893 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yOd4AxlEbb>) | [PDF](<https://openreview.net/pdf?id=yOd4AxlEbb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138893>)

Tabular Foundation Models have recently established the state of the art in supervised tabular learning, by leveraging pretraining to learn generalizable representations of numerical and categorical structured data\. However, they lack native support for unstructured modalities such as text and image, and rely on frozen, pretrained embeddings to process them\. On established Multimodal Tabular Learning benchmarks, we show that tuning the embeddings to the task improves performance\. Existing benchmarks, however, often focus on the mere co\-occurrence of modalities; this leads to high variance across datasets and masks the benefits of task\-specific tuning\. To address this gap, we introduce MulTaBench, a benchmark of 40 datasets, split equally between image\-tabular and text\-tabular tasks\. We focus on predictive tasks where the modalities provide complementary predictive signal, and where generic embeddings lose critical information, necessitating Target\-Aware Representations that are aligned with the task\. Our experimental results demonstrate that the gains from target\-aware representation tuning generalize across both text and image modalities, several tabular learners, encoder scales, and embedding dimensions\. MulTaBench constitutes the largest image\-tabular benchmarking effort to date, spanning high\-impact domains such as healthcare and e\-commerce\. It is designed to enable the research of novel architectures which incorporate joint modeling and target\-aware representations, paving the way for the development of novel Multimodal Tabular Foundation Models\.

## Nonparametric Distribution Matching for Self\-Supervised Whole\-Slide Image Condensation

**Authors:** Duong Nguyen; Nghia Hoang; Hang T Nguyen; Thanh Trung Huynh; Phi Le Nguyen; Minh Do

**ID:** 153235 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ml03ueObjM>) | [PDF](<https://openreview.net/pdf?id=Ml03ueObjM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153235>)

Histological whole\-slide images \(WSIs\) are central to computational pathology but pose severe computational challenges due to their extremely high resolution, often spanning several gigabytes per slide\. To enable scalable learning, existing methods apply self\-supervised data condensation to reduce computational cost, but typically rely on heuristic prototype learning and do not explicitly preserve learning\-relevant feature distributions for downstream tasks\. In response, we introduce a principled reformulation of WSI condensation as a distribution\-matching problem under a fixed representational lens, and develop NICER, a tractable approximation framework based on a nonparametric prior with slide\-adaptive capacity\. Experiments on five histopathology datasets, together with clinical evaluation from a board\-certified pathologist, show that NICER consistently outperforms prior methods, achieving an average accuracy improvement of 7\.44% while offering improved efficiency–accuracy trade\-offs, highlighting the benefits of principled, distribution\-aware condensation for scalable histological representation learning\.

## Euclidean Embedding of Data Using Local Distances

**Authors:** Dimitrios Arampatzis

**ID:** 149601 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=otyFLS0MyX>) | [PDF](<https://openreview.net/pdf?id=otyFLS0MyX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149601>)

We study the problem of recovering a globally consistent Euclidean embedding of data, given only a local distance graph and propose a method that optimally represents these distances\. The method operates solely on a neighborhood graph weighted by pairwise distances, without requiring any prior vector representation of the data\. The embedding is obtained by solving a variational problem that matches local, on‑graph distances to the Euclidean metric, induced by the differentials of the embedding functions\. The resulting Euler–Lagrange equations are derived in a coordinate‑free form, enabling direct evaluation of all operators from the distance graph alone\. Though non\-linear and missing an explicit expression for their non\-linearity, these equations are shown to be resolved as an iteratively updated sparse linear problem\. The main contributions of the proposed approach are \(a\) the derivation of the functional equations governing the optimal Euclidean embedding in the continuum, \(b\) a representation‑free formulation that requires only a neighborhood distance graph and no feature vectors and \(c\) an estimation procedure based exclusively on local graph operations\. We experimentally evaluate the resulting non‑parametric algorithm on synthetic manifolds and real datasets, demonstrating consistent preservation of local metric structure and neighboring relations, while approximating the global isometric embedding\.

## KINDER: Kernel\-based Independence for Fair Representation Learning via Prototype\-space Erasure

**Authors:** Abtin Mogharabin; Jiaee Cheong; Alp Toykan Kaplan; Sinan Kalkan

**ID:** 156049 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0odoewxKr2>) | [PDF](<https://openreview.net/pdf?id=0odoewxKr2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156049>)

Concept erasure is a prominent approach to achieving fairness in machine learning through the removal of sensitive attributes from learned representations\. Prior concept erasure methods typically define debiasing indirectly through the failure of a chosen adversary, probe, or fairness penalty, making the target of erasure dependent on a particular decoder family or optimization setup\. Rather than depending on a particular architecture, task type, or training paradigm, we introduce KINDER, which aims to directly remove sensitive\-attribute information from a model's intermediate representations and is compatible with any deep model that contains an intermediate feature space\. KINDER operates in a random Fourier feature space, where it estimates a sensitive subspace from protected group prototypes and projects representations onto its orthogonal complement, thereby forming an explicit representation cleaning mechanism\. We conduct extensive experiments across diverse settings and show the effectiveness of KINDER on \(i\) unimodal and multimodal datasets, \(ii\) supervised and self\-supervised settings, \(iii\) classification, regression, and image segmentation tasks, and \(iv\) diverse data modalities, including visual, textual, and tabular data\.

## Generate in Reconstruction Space, Match in Semantic Space: Transport Geometry for One\-Step Generation

**Authors:** Hugues Van Assel; Edward De Brouwer; Saeed Saremi; Gabriele Scalia; Aviv Regev

**ID:** 150849 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=etwEuQt1jd>) | [PDF](<https://openreview.net/pdf?id=etwEuQt1jd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150849>)

Generative modeling and self\-supervised representation learning \(SSL\) optimize structurally different objectives: generative training rewards distributional fidelity, while SSL rewards semantic coherence\.  Yet recent work repeatedly finds that SSL features improve generative training, though the mechanism of this synergy remains unclear\. Here, we study the benefits of SSL in generative modeling in the framework of one\-step generation where the role of representation is explicit: frozen SSL features are used to match generated samples to real data\.  We use the Sinkhorn divergence in that feature space, providing a tractable surrogate for the Wasserstein distance, the population\-level discrepancy approximated by Fr\\'echet\-style evaluation metrics \(such as FID\)\. We find that this objective becomes highly effective when computed in a semantically structured SSL feature space \(a 39$\\times$ reduction in ImageNet FID\)\.  We trace this behavior primarily to matching estimation: semantic SSL features that suppress nuisance reconstruction details induce a more compact geometry, making distribution matching more tractable\. As a consequence, the best training SSL features need not match the features used by the evaluation metric\. In particular, we show that using Inception as the feature extractor can improve FID while degrading matching stability and sample quality, revealing a form of metric hacking\. Using extensive experiments on ImageNet, we identify which SSL feature families lead to best generation performance and show that matching stability is a quantitative criterion for selecting them\.

## Factorized Self\-Supervised Speech Tokenization

**Authors:** Benjamin Van Niekerk; Jean\-Philippe Letendre; Nicol Visser; Hugo Seuté; Herman Kamper; Mirco Ravanelli

**ID:** 149827 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=n0PEFDbLxC>) | [PDF](<https://openreview.net/pdf?id=n0PEFDbLxC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149827>)

Speech tokenizers convert audio into discrete units, enabling language models to process and generate speech\. The goal is to learn compact, text\-like representations while preserving enough detail to reconstruct a speaker’s voice and delivery\.  We propose Facto: a factorized tokenizer that disentangles time\-varying information \(content and prosody\) from static components \(speaker identity and recording conditions\)\. We build on a recent linear factorization method for self\-supervised features, extending it to handle unseen speakers\.  Then, we cluster the factorized space and train a lightweight decoder to reconstruct audio from the resulting tokens\.  By removing the static components before clustering, our tokens are more robust to small noise perturbations\.  We validate this by testing token stability under various noise conditions\. Next, we theoretically analyze Facto's convergence and scaling properties, quantifying how the factorization improves with the number of training speakers\.  Finally, we evaluate Facto on a range of downstream tasks\. We show that greater token stability translates into improved text\-to\-speech performance and competitive results in voice conversion and spoken language modeling\.

## Diversity Curves for Graph Representation Learning

**Authors:** Katharina Limbeck; Nadja Häusermann; Martin Carrasco; Guy Wolf; Bastian Rieck

**ID:** 154536 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CrzgnsQq7F>) | [PDF](<https://openreview.net/pdf?id=CrzgnsQq7F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154536>)

Graph\-level representations are crucial tools for characterising structural differences between graphs\. However, comparing graphs with different cardinalities, even when sampled from the same underlying distribution, remains challenging\. Unsupervised tasks in particular require interpretable, scalable, and reliable size\-aware graph representations\. Our work addresses these issues by tracking the structural diversity of a graph across coarsening levels\. The resulting graph embeddings, which we denote \*diversity curves\*, are interpretable by construction, efficient, and directly comparable across coarsening hierarchies\. Specifically, we track the \*spread\* of graphs, a novel isometry invariant that is inherently well\-suited for encoding the metric diversity and geometry of graphs\. We utilise edge contraction coarsening and prove that this improves expressivity, thus leading to more powerful graph\-level representations than structural descriptors alone\. Demonstrating their utility over a range of baseline methods in practice, we use \*diversity curves\* to \(i\) cluster and visualise simulated graphs across varying sizes, \(ii\) distinguish the geometry of single\-cell graphs, \(iii\) compare the structure of molecular graph datasets, and \(iv\) characterise geometric shapes\.

## Where to Look Matters: Rethinking Sub\-Volume Sampling in 3D Medical Self\-supervised Learning

**Authors:** Junkai Liu; Le Zhang

**ID:** 150657 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gPf82LsVMO>) | [PDF](<https://openreview.net/pdf?id=gPf82LsVMO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150657>)

Self\-supervised learning on 3D medical images commonly relies on random sub\-volume sampling during pretraining\. However, random cropping implicitly treats all spatial regions as equally worth observing, despite anatomical priors and spatial redundancy that make regions inherently unequal in their value for representation learning\. To this end, we first show through controlled crop\-quality manipulations that better sub\-volumes lead to better downstream transfer, revealing the observation policy as an overlooked bottleneck in 3D medical SSL\. Motivated by this finding, we revisit sub\-volume sampling as a where\-to\-look problem\. We propose VolumeProbe, a plug\-and\-play framework that replaces random cropping with an offline coarse\-to\-fine probe bank guided by anatomy\-awareness, informativeness, and diversity\. We instantiate VolumeProbe as a lightweight Lite variant using geometric and image\-statistical cues, and a diagnostic Feat variant using frozen visual features, to examine whether lightweight volume\-intrinsic priors suffice or richer semantic cues reliably provide additional value\. Extensive experiments across multiple 3D medical SSL backbones and downstream tasks demonstrate that VolumeProbe\-Lite consistently improves transfer performance over random sampling\. Mechanistic analyses further attribute these gains to more anatomically plausible and informative observations, reduced spatial redundancy, more efficient learning dynamics, and more structured representations\.

## Anchor PCA

**Authors:** Benedikt Seiter; Anya Fries; Julius von Kügelgen; Jonas Peters

**ID:** 153959 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HFtvKUB8yF>) | [PDF](<https://openreview.net/pdf?id=HFtvKUB8yF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153959>)

Principal component analysis \(PCA\) is one of the most widely used unsupervised dimension reduction techniques\. We study PCA for data from multiple related domains\. Since principal components generally differ across domains, one way to obtain a shared low\-rank embedding is to perform PCA on the pooled data\. However, this approach can focus on spurious directions that exhibit high variation in only a few domains\. To find a robust embedding that still explains most variance in unseen but similar domains, we propose instead to focus on shared directions of variation\. To this end, we introduce Anchor PCA which trades off overall explained variance with agreement between the shared and domain\-specific low\-rank embeddings\. Anchor PCA amounts to PCA on a modified target matrix and thus can be solved efficiently\. Moreover, we show that Anchor PCA recovers a maximal invariant subspace and admits a minimax reconstruction interpretation under bounded domain\-specific covariance inflations\. On simulated and real\-world gas sensor data with temporal drift, we demonstrate, respectively, that Anchor PCA recovers the maximally invariant subspace and yields embeddings that explain more variance on unseen domains than the pooling baseline and a worst\-case alternative\. Taken together, these findings establish Anchor PCA as a promising approach to robust unsupervised dimension reduction from multi\-domain data\.

## Cosine is Human: The Reproducibility Ceiling of Perceptual Similarity

**Authors:** Benjamin TenWolde; Virginia de Sa

**ID:** 139285 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZQ6YtLisva>) | [PDF](<https://openreview.net/pdf?id=ZQ6YtLisva>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139285>)

NIGHTS is a recent benchmark for human perceptual similarity over objects, scenes, and composition\. DreamSim, the supervised metric introduced with NIGHTS, and later supervised metrics trained on the same data report large gains over self\-supervised baselines\. The standard NIGHTS evaluation uses the unanimous\-agreement subset of a released 100,000\-triplet corpus, leaving weak\-majority and split\-vote triplets outside the headline benchmark\. We evaluate eleven perceptual similarity methods on the full released corpus, analyzing unanimous, weak\-majority, and split\-vote triplets separately\. On the 64,420 non\-tie triplets, cosine distance on a frozen self\-supervised backbone reaches 74\.1% accuracy without training, LoRA fine\-tuning reaches 77–79%, and the DreamSim ensemble reaches 80\.7%\. A split\-half reproducibility estimate from the triplet vote counts shows that majority labels reproduce only 70\.1% of the time overall, and only 33–50% on weak\-majority triplets\. The extra accuracy comes from matching the collected votes, not from showing that the metric would better match a new set of human judgments\. The evaluation target is also unstable across task formulations: NIGHTS’ 2AFC similarity labels and JND same/different labels disagree on 51–64% of shared stimuli\. Fine\-tuning changes the feature basis as well, increasing foreground\-only fragility and making DreamSim the most fragile method under rotation, color, and blur\. NIGHTS supports a narrower conclusion: cosine distance on self\-supervised features captures the stable signal currently measurable in these labels\. Additional claims of human alignment require a redesigned benchmark with more votes per triplet, axis\-specific similarity questions, per\-subject statistics, and ablation tests\.

## Hidden Positives: Why Code Retrieval Benchmarks Underestimate Model Quality

**Authors:** Maria Ivanova; Vitaly Kadulin; Dmitrii Babaev

**ID:** 139499 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M2DNqP5kmA>) | [PDF](<https://openreview.net/pdf?id=M2DNqP5kmA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139499>)

Text\-code embeddings underpin modern code intelligence systems, but progress in this area is held back by a systemic problem: code retrieval benchmarks routinely treat valid alternative implementations as negatives, making cross\-model comparison unstable and depressing measured performance\. We document this problem with a detailed analysis of six widely used benchmarks and show that, depending on the dataset, between 44\\% and 87\\% of items a strong LLM judge marks as relevant are missing from the original labels\. To address this, we adopt a unified evaluation protocol in which a single LLM judge re\-annotates the top\-10 retrieved candidates for every model under a fixed prompt, replacing fragmented benchmark heuristics with a consistent semantic standard\. Applying the same idea at training time, we use a smaller LLM\-supervised reranker to construct MegaCode, the largest semantically curated dataset for code search to date of 193M positive \(text, code\) pairs, roughly an order of magnitude larger than prior curated corpora, and train a family of embedding models on it at four scales \(0\.5B\-7B\) with contrastive learning\. Under a unified LLM\-judged protocol, our 0\.5B model matches or exceeds all prior open code\-retrieval embeddings up to 8B parameters, and our 7B model improves average MRR@10 by 3\.5 points over the strongest baseline\.

## Restoring the RNA\-Ligand Interaction Manifold via Topology\-Preserving Contrastive Learning under Epistemic Uncertainty

**Authors:** Kai Zheng; Jinhui Xu; Jianxin Wang

**ID:** 155219 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7OusnXTVau>) | [PDF](<https://openreview.net/pdf?id=7OusnXTVau>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155219>)

Targeting RNA with small molecules is severely bottlenecked by epistemic uncertainty in high\-throughput screening data, formally manifesting as the "Unknown\-as\-Negative" \(UaN\) bias\. We demonstrate that naive Empirical Risk Minimization \(ERM\) under UaN contamination structurally misaligns optimization trajectories, introducing adversarial decoy gradients that force a topological rupture of the chemical manifold and shatter Structure\-Activity Relationship \(SAR\) continuity\. To transcend this epistemic barrier, we propose Topology\-preserving Robust Adaptive Contrastive Embedding \(TRACE\), shifting the paradigm from heuristic data\-fitting to theoretically guaranteed manifold reconstruction\. TRACE neutralizes topological collapse through three mathematically bounded mechanisms: \(i\) confidence\-weighted importance sampling dynamically rectifies the surrogate risk under posterior drift, establishing a uniform convergence bound to selectively rescue unannotated bioactive scaffolds; \(ii\) thermodynamic temperature regulation strictly bounds the backpropagated Jacobian factor, enforcing local Lipschitz continuity to geometrically shield SAR against stochastic gradient explosions; and \(iii\) margin\-aware contrastive regularization provides explicit exponential tail guarantees on misordering probabilities, ensuring discriminative sub\-Gaussian alignment between genuine binders and decoys\. Grounded entirely in these theoretical pillars, empirical validations strictly reflect our formal bounds\. Beyond establishing state\-of\-the\-art generalization, yielding an 18\.2% relative AUPRC improvement on SMRTnet, TRACE sustains 1\.44x higher topological resilience under extreme 50% noise corruption, and fundamentally resolves UaN\-induced structural overconfidence by slashing Expected Calibration Error \(ECE\) by 83\.9% and reducing Brier score by 3\.4%\.

## Effective Biological Representation Learning by Masking Gene Expression

**Authors:** Kian Kenyon\-Dean; Alina Selega; Ihab Bendidi; Jordan M Sorokin; Luca Bertinetto; David Errington; Hayley Donnella; Oren Kraus

**ID:** 153201 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N5JfcgHkY9>) | [PDF](<https://openreview.net/pdf?id=N5JfcgHkY9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153201>)

RNA sequencing produces rich and diverse datasets of gene expression, offering compelling insights into cellular state and function that have many applications in drug discovery\. Modeling such data is challenging due to inherent technical noise and experimental batch effects, as evidenced by many existing transcriptomic foundation models \(FMs\) underperforming relative to linear baselines\. Such results raise the question of whether deep representation learning provides a distinct advantage over the direct use of raw transcript counts\. Our work explores this by developing a new self\-supervised model, TxFM, with a focus on inductive representation learning evaluations\. TxFM employs a masked autoencoding approach tailored to diverse RNA\-seq count data, and our ablation study empirically identifies crucial architecture configurations required for strong transfer performance\. Additionally, we curate a public training corpus, DiverseRNA\-1\.4M, and find that TxFM trained on this curated dataset yields high\-fidelity gene representations that outperform FMs trained on atlas\-scale corpora over $100\\times$ larger\. Overall, our results indicate that inductive self\-supervised learning is a viable modeling approach for transcriptomics representation, provided a careful synthesis of model architecture and training data curation\.

## Identifiable alignment of unpaired representations

**Authors:** Stas Syrota; Albert Lopez i Serrano; Johanne Franck; Søren Hauberg

**ID:** 151829 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XeeLVJHtXH>) | [PDF](<https://openreview.net/pdf?id=XeeLVJHtXH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151829>)

Aligning representations drawn from a shared distribution without prior correspondence is typically approached through Gromov\-Wasserstein Optimal Transport \(GWOT\) at the coupling level or through generative adversarial \(GAN\) methods at the map level\. Neither yields a uniquely identified alignment map: GWOT returns only a coupling on the available samples, and GAN\-based maps are determined only up to marginal matching\. Modelling representations as Riemannian metric measure \(mm\-\) spaces, we give sufficient conditions for the map to be unique and show they hold generically\. We split recovery into two stages\. In the coupling step, an injectivity condition on local distance distributions \(LDDs\), admitting a sample\-level diagnostic, reduces GWOT to a convex linear program\. In the map\-fitting step, we establish finite\-sample identifiability when the unpaired samples come from the same underlying data points, and asymptotic identifiability of the population alignment when they are drawn independently\. The resulting Neural Gromov\-Monge Alignment \(NGMA\) algorithm matches or improves on supervised baselines\.

## It Just Takes Two: Scaling Amortized Inference to Large Sets

**Authors:** Antoine Wehenkel; Michael Kagan; Lukas Heinrich; Chris Pollard

**ID:** 150804 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fH4iGkHcRV>) | [PDF](<https://openreview.net/pdf?id=fH4iGkHcRV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150804>)

Neural posterior estimation has emerged as a powerful tool for amortized inference, with growing adoption across scientific and applied domains\. In many of these applications, the conditioning variable is a set of observations whose elements depend not only on the target but also on unknown factors shared across the set\. Optimal inference therefore requires treating the set jointly, which in turn requires training the estimator at the deployment set size\-\-\-a regime where memory and compute quickly become prohibitive\. We introduce a simple, theoretically grounded strategy that decouples representation learning from posterior modeling\. Our method trains a mean\-pool Deep Set on sets of size at most two, producing an encoder that generalizes to arbitrary set sizes\. The inference head is then finetuned on pre\-aggregated embeddings, making training cost essentially independent of the deployment set size $N$\. Across scalar, image, multi\-view 3D, molecular, and high\-dimensional conditional generation benchmarks with $N$ in the thousands, our approach matches or outperforms standard baselines at a fraction of the compute\.

## Memory\-Driven Contrastive Embedding Enhancement for Fine\-Grained Open\-Set Semi\-Supervised Learning

**Authors:** Yinan Han; Qing\-Yuan Jiang

**ID:** 153470 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L77YwOI7fI>) | [PDF](<https://openreview.net/pdf?id=L77YwOI7fI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153470>)

Existing VLM\-based open\-set semi\-supervised learning \(OSSL\) methods primarily rely on coarse\-grained class\-level semantics, thereby hampering the accurate identification of in\-distribution \(ID\) versus out\-of\-distribution \(OOD\) samples\. To overcome this issue, we propose a novel memory\-driven contrastive embedding enhancement approach by integrating fine\-grained visual contrastive cues into class\-level textual side\. Concretely, we design a memory bank to construct and maintain a diverse collection of the most distinctive fine\-grained visual embeddings\. Guided by the memory bank, visual information is incorporated into the textual side through cross\-modal contrastive learning, enabling more discriminative fine\-grained separation between ID and OOD samples\. Consequently, the learned OSSL model exhibits improved contrastive discriminability across known and unknown categories\. Extensive experiments demonstrate that our method achieves state\-of\-the\-art \(SOTA\) performance on multiple fine\-grained datasets\. The code is available at https://anonymous\.4open\.science/r/CodeForPaper\.

## Unpaired Canonical Correlation Analysis

**Authors:** Nir Ben\-Ari; Ronen Talmon; Uri Shaham

**ID:** 149273 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rYRi7zoSZK>) | [PDF](<https://openreview.net/pdf?id=rYRi7zoSZK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149273>)

Canonical Correlation Analysis \(CCA\) is a fundamental method for multiview shared space learning\. However, its strict reliance on paired data poses a significant limitation, as such data is often difficult to obtain or entirely unavailable\. In this paper, we present Unpaired CCA \(UCCA\), a novel method that learns linear projections to maximize the correlation of the true underlying pairing without access to any paired samples during training\. We first establish theoretical results connecting the Quadratic Assignment Problem \(QAP\) to CCA\. Leveraging these theoretical insights, we derive a practical method to maximize correlation exclusively from unpaired data\. To the best of our knowledge, UCCA is the first approach to learn maximally correlated projections in a strictly unpaired setting\. We validate UCCA on real\-world multi\-modal datasets, demonstrating that it significantly outperforms recent unpaired alignment baselines in recovering the underlying true correlation\. This work fills a critical gap between traditional statistical multiview learning and the growing field of unpaired data learning\.

## FusionProt: Fusing Sequence and Structural Information for Unified Protein Representation Learning

**Authors:** Dan Kalifa; Uriel Singer; Kira Radinsky

**ID:** 156761 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/pdf?id=imcinaOHod>) | [PDF](<https://openreview.net/pdf?id=imcinaOHod>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156761>)

Accurate protein representations that integrate sequence and three\-dimensional \(3D\) structure are critical to many biological and biomedical tasks\. Most existing models either ignore structure or combine it with sequence through a single, static fusion step\. Here we present FusionProt, a unified model that learns representations via iterative, bidirectional fusion between a protein language model and a structure encoder\. A single learnable token serves as a carrier, alternating between sequence attention and spatial message passing across layers\. FusionProt is evaluated on Enzyme Commission \(EC\), Gene Ontology \(GO\), and mutation stability prediction tasks\. It improves Fmax by a median of 1\.3 points \(up to 2\.0\) across EC and GO benchmarks, and boosts AUROC by 3\.6 points over the strongest baseline on mutation stability\. Inference cost remains practical, with only \~2\-5% runtime overhead\. Beyond state\-of\-the\-art performance, we further demonstrate FusionProt’s practical relevance through representative biological case studies, suggesting that the model captures biologically relevant features\.

## ARC\-Encoder: learning compressed text representations for large language models

**Authors:** Hippolyte Pilchen; Edouard Grave; Patrick Perez

**ID:** 156755 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156755>)

Recent techniques such as retrieval\-augmented generation or chain\-of\-thought reasoning have led to longer contexts and increased inference costs\. Context compression techniques can reduce these costs, but the most effective approaches require fine\-tuning the target model or even modifying its architecture\. This can degrade its general abilities when not used for this specific purpose\. Here we explore an alternative approach: an encoder that compresses the context into continuous representations which replace token embeddings in decoder LLMs\. First, we perform a study of training strategies and architecture choices for the encoder\. Our findings led to the design of an Adaptable text Representations Compressor, named ARC\-Encoder, which outputs $x$ times fewer continuous representations \(typically $x\\\!\\in\\\!\\\{4,8\\\}$\) than text tokens\. We evaluate ARC\-Encoder across a variety of LLM usage scenarios, ranging from in\-context learning to context window extension, on both instruct and base decoders\. Results show that ARC\-Encoder achieves strong performance on several benchmarks and tasks while improving computational efficiency at inference\. Finally, we demonstrate that our models can be adapted to multiple decoders simultaneously, allowing a single encoder to generalize across different decoder LLMs\. This makes ARC\-Encoder a flexible and efficient solution for portable encoders that can support multiple LLMs with only small MLPs\.

## Causal Representation Learning for Generalisable Recommendation

**Authors:** Yorgos Felekis; Michael O&amp;amp;\#x27;Riordan; Oriol Corcoll Andreu; Ciarán Gilligan\-Lee

**ID:** 148867 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ub2HuIm8hN>) | [PDF](<https://openreview.net/pdf?id=ub2HuIm8hN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148867>)

Predictive models trained on observational data often fail to generalise to the distributions they encounter when deployed, especially when the training data is a product of the system being optimised\. Recommender systems are a canonical example: they are trained on interaction logs confounded by the deployed policy, past user behaviour, and platform filtering\. As a result, the training distribution differs substantially from the candidate distribution scored at serving time, a gap that makes offline metrics unreliable predictors of online performance\. We address the distribution shift problem with a method motivated by causal representation learning \(CRL\)\. We propose an information\-theoretic disentanglement criterion and prove that its optimum depends only on the causal components of the input\. We then derive a tractable variational lower bound that makes the criterion optimisable from finite observational data alone\. The scope of our method is narrower than that of much of the CRL literature, in that we target better generalisation under distribution shift, not full identification of all latent causal factors\. This narrower target is what makes the method practical, requiring only the existing confounded logs, applying to any standard supervised model, and adding no inference\-time cost\. Our headline evaluation is an A/B test with millions of users on a music streaming platform, applied to a production ranker for personalised playlist generation\. A CRL variant matched in capacity to the production baseline performed on par offline but delivered substantial online gains in listener engagement\. Complementary evidence on the public KuaiRand recommendation dataset and a synthetic benchmark with known causal structure shows the same pattern: offline parity with baseline, gains under distribution shift\. Across all three settings, adding our causal disentanglement objective yields meaningfully better out\-of\-distribution generalisation\.

## Binding Multiple Modalities via Multimodal Wasserstein Barycenter

**Authors:** Xiaole Tang; Jiayi Xu; Xiang Gu; Yan Yang; Jian Sun

**ID:** 149098 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=swVrjlNX4Q>) | [PDF](<https://openreview.net/pdf?id=swVrjlNX4Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149098>)

Multimodal learning beyond two modalities commonly leverages a specific modality  \(e\.g\., text\) to bind other modalities\. However, how to establish a more balanced representation space that approximates shared semantics while respecting the holistic geometry of $n$\-modal data remains challenging\. In this work, we present BaryBind, which aims to transport the specific modality towards the Wasserstein barycenter \(WB\) optimized across all modalities and introduces a volumetric alignment objective to establish a unified semantic space around the WB embedding\. Specifically, we project specific modalities to the WB, which minimizes the average Wasserstein distances to multimodal distributions and serves as the anchor for subsequent alignment\. We then construct a barycenter simplex, whose volume is taken as a similarity metric for global alignment centered at the WB\.  Extensive experiments show that BaryBind achieves competitive performance in text\-video\-audio retrieval, classification, videoQA, and cross\-modal generation tasks, along with robustness under modality absence and scalability to more than three modalities\.

## Supervised Distributional Reduction via Optimal Transport and Dependence Maximization

**Authors:** Sai\-Aakash Ramesh; Archit Sood; Andrew Corbett; Tim Dodwell

**ID:** 155699 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3bqTlAQf5B>) | [PDF](<https://openreview.net/pdf?id=3bqTlAQf5B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155699>)

Learning representations that capture both intrinsic data geometry and target\-relevant structure remains a fundamental challenge, particularly in settings where data reduction must balance compression with predictive fidelity\. While distributional reduction—encompassing joint clustering and dimensionality reduction—offers a principled way to summarize data, its supervised variants remain relatively underexplored, despite the importance of retaining task\-relevant signal for downstream prediction and decision\-making\. We propose Supervised Distributional Reduction \(SDR\), an algorithm for learning target\-aware representations by combining optimal transport with explicit dependence maximization\. SDR builds on the Fused Gromov–Wasserstein \(FGW\) objective to align the relational structure of the input distribution with a set of representative points, while augmenting it with a direct dependence term that encourages the learned embeddings to capture predictive signal more explicitly\. This results in compact representations that reflect both geometric structure and supervision\. Beyond representation learning, SDR naturally induces a data\-dependent, non\-stationary geometry that can be leveraged for settings such as Gaussian Process \(GP\) modelling\. By redefining distances through target\-aware distributional alignment, SDR enables the construction of adaptive kernels that respond to local variations in both data geometry and supervision, offering an optimal transport\-based perspective on non\-stationary kernel design\.

## Do Enterprise Systems Need Learned World Models? The Importance of Context to Infer Dynamics

**Authors:** Jishnu S Nair; Patrice Bechard; Rishabh Maheshwary; SRAVAN RAMACHANDRAN; Surajit Dasgupta; Aakash Bhagat; Shruthan Radhakrishna; Pulkit Pattnaik; Johan Obando Ceron; Shiva Krishna Reddy Malay; Sagar Davasam; Seganrasan Subramanian; Vipul Mittal; Sridhar K Nemala; Chris Pal; Srinivas Sunkara; Sai Rajeswar Mudumba

**ID:** 152978 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OuLPTxbP2G>) | [PDF](<https://openreview.net/pdf?id=OuLPTxbP2G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152978>)

World models enable agents to anticipate the effects of their actions by internalizing environment dynamics\. In enterprise systems, however, these dynamics are often defined by tenant\-specific business logic that varies across deployments and evolves over time, making models trained on historical transitions brittle under deployment shift\. We ask a question the world\-models literature has not addressed: when the rules can be read at inference time, does an agent still need to learn them? We argue, and demonstrate empirically, that in settings where transition dynamics are configurable and readable, runtime discovery complements offline training by grounding predictions in the active system instance\. We propose enterprise discovery agents, which recover relevant transition dynamics at runtime by reading the system's configuration rather than relying solely on internalized representations\. We introduce CascadeBench, a reasoning\-focused benchmark for enterprise cascade prediction that adopts the evaluation methodology of World of Workflows on diverse synthetic environments, and use it together with deployment\-shift evaluation to show that offline\-trained world models can perform well in\-distribution but degrade as dynamics change, whereas discovery\-based agents are more robust under shift by grounding their predictions in the current instance\. Our findings suggest that, in configurable enterprise environments, agents should not rely solely on fixed internalized dynamics, but should incorporate mechanisms for discovering relevant transition logic at runtime\.

## Revisiting Cross\-View Completion: Self\-Supervised Pre\-Training via Reconstruction Error Comparison

**Authors:** Thibaut Loiseau; Guillaume Bourmaud; Vincent Lepetit

**ID:** 149886 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mUKb5eCadx>) | [PDF](<https://openreview.net/pdf?id=mUKb5eCadx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149886>)

Self\-supervised pre\-training via cross\-view completion learns strong features for 3D vision from co\-visible regions of image pairs\. However, the reference view provides little information for reconstructing non\-co\-visible patches, implicitly yielding a monocular training signal in these regions\. We introduce \*\*Gekko\*\*, a self\-supervised pre\-training framework that turns this limitation into a useful signal\. The \*relative improvement\* of the cross\-view reconstruction error over a masked\-autoencoder error serves as a self\-supervised proxy for co\-visibility: large improvements indicate co\-visible regions, while negligible ones indicate non\-co\-visible areas\. Gekko is a network, trained from scratch, that jointly performs cross\-view completion, masked autoencoding, and per\-pixel prediction of this relative improvement, providing an additional binocular signal for \*all\* masked regions without requiring any ground\-truth 3D annotations\. Under identical architectures and training data, Gekko consistently outperforms CroCo on zero\-shot correspondence estimation, relative pose estimation, and pointmap regression\.  We further show that Gekko can be trained directly from raw videos using a simple stride\-based curriculum, eliminating the cumbersome 3D preprocessing required by prior methods while matching the performance of models trained on curated data, thereby enabling fully self\-supervised pre\-training\. Code and pre\-trained models will be released\.

## To Align or Not To Align: Check Your COMPASS Before You Train

**Authors:** Fabian Gröger; Petar Damjanović; Maria Brbic

**ID:** 149496 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pi5rLDk0WR>) | [PDF](<https://openreview.net/pdf?id=pi5rLDk0WR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149496>)

Combining two pretrained models, whether by aligning a vision encoder with a language model or by merging two fine\-tuned checkpoints, is a costly bottleneck: compatibility is typically known only after joint training\. We propose COMPASS \(COMPatibility ASsessment Score\), a theoretically grounded compatibility diagnostic that estimates whether a model pair will be compatible prior to training or merging\. Building on the observation that representational convergence is most robust at the level of local neighborhoods, COMPASS decomposes model compatibility into two cheap\-to\-compute axes: a pair\-specific ease, defined as the $k$\-NN overlap between the two encoders, and a paradigm\-level ceiling, capturing the maximum overlap their training paradigms allow\.  Together, these two axes provide a ranking of candidate model pairs and prescribe how to act on each pair: \(i\) prioritize pairs that already agree and whose paradigms are compatible, \(ii\) invest additional compute on pairs with compatible paradigms but low initial agreement, \(iii\) switch the pre\-training paradigm when it cannot support sufficient agreement, or \(iv\) deprioritize pairs that score poorly on both axes\. COMPASS is applicable to both cross\-modal alignment and task\-arithmetic merging, where the encoder pair is replaced by two fine\-tuned checkpoints\. Across $72$ cross\-modal alignment experiments, and $392$ model merges, our compatibility estimates strongly correlate with downstream success, with Pearson correlations of $0\.90$ for image\-to\-text R@1 on Flickr30k, $0\.91$ for image\-to\-text R@1 on COCO, and $0\.70$ for mean retention across $8$ image\-classification merging tasks\.

## PVFormer: Proper Velocity Transformer for Stable and Scalable Hyperbolic Representation Learning

**Authors:** Xianglong Shi; Nicu Sebe; Bernhard Schölkopf; Ziheng Chen

**ID:** 155176 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7jWvuU6Lb6>) | [PDF](<https://openreview.net/pdf?id=7jWvuU6Lb6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155176>)

Hyperbolic representations have shown remarkable success on hierarchical and tree\-like data, and Transformers have become a central architecture for representation learning\. However, a principled construction of hyperbolic Transformers remains challenging because the self\-attention layer decomposes into three coupled primitives, transformation, similarity, and aggregation, that should all respect the underlying geometry\. Existing hyperbolic Transformer designs are typically built in the Poincar\\'e or Lorentz models, where bounded domains, time\-like constraints, tangent\-space detours, or projection steps make it difficult to keep the full block intrinsic and scalable\. To address this gap, we propose \\PVFormer\{\}, to the best of our knowledge, the first Transformer architecture that operates natively in proper velocity \(\\PV\) space\. The proper velocity model provides an unconstrained representation of hyperbolic geometry, and \\PVFormer\{\} exploits this structure to redesign the Transformer block in \\PV\{\} space\. On the transformation side, we use \\PV\{\} homomorphism transformations to update query and value representations\. On the similarity side, we generalize Euclidean inner\-product attention with a \\PV\{\} Busemann score inspired by Busemann\-based hyperbolic learning and a \\PV\{\} point\-to\-hyperplane key transformation\. On the aggregation side, we replace Euclidean averaging with \\PV\{\} midpoint aggregation and further derive a scalable \\PV\{\} linear attention variant for large graphs\. Extensive experiments support the effectiveness of \\PVFormer\{\} across graph, text, and vision benchmarks\. The code will be open\-sourced once accepted\.

## SS3D: End2End Self\-Supervised 3D from Web Videos

**Authors:** Marwane Hariat; Gianni Franchi; David Filliat; Antoine Manzanera

**ID:** 149077 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t3RKBvndwm>) | [PDF](<https://openreview.net/pdf?id=t3RKBvndwm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149077>)

We present SS3D, a web\-scale SfM\-based self\-supervision pretraining pipeline for feed\-forward 3D estimation from monocular video\. Our model jointly predicts depth, ego\-motion, and intrinsics in a single forward pass and is trained/evaluated as a coherent end\-to\-end 3D estimator\. To stabilize joint learning, we use an intrinsics\-first two\-stage schedule and a unified single\-checkpoint evaluation protocol\. Scaling SfM self\-supervision to unconstrained web video is challenging due to weak multi\-view observability and strong corpus heterogeneity; we address these with a multi\-view signal proxy \(MVS\) used for filtering and curriculum sampling, and with expert training distilled into a single student\. Pretraining on YouTube\-8M \(\~ 100M frames after filtering\) yields strong cross\-domain zero\-shot transfer and improved fine\-tuning performance over prior self\-supervised baselines\. We release the pretrained checkpoint and code\.

## Building Transformation Layers for Riemannian Neural Networks

**Authors:** Ziheng Chen

**ID:** 151412 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=arer1bhGjQ>) | [PDF](<https://openreview.net/pdf?id=arer1bhGjQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151412>)

Recently, deep neural networks on manifold\-valued representations have garnered significant attention across various machine learning applications\. One recent focus is the generalization of Euclidean fully connected \(FC\) and convolutional layers to non\-Euclidean geometries\. However, previous approaches typically focus on a few selected manifolds and rely on specific properties of the target manifold\. In contrast, this work proposes a framework for constructing FC and convolutional layers over computationally tractable Riemannian spaces\. This framework incorporates several previous FC layers across different geometries as special cases and is instantiated on ten representative manifolds, including three hyperbolic models, five geometries of the symmetric positive definite \(SPD\) manifold, and two Grassmannian perspectives\. Experiments on different manifolds demonstrate the effectiveness and applicability of our approach\.

## Rethinking Radar 3D Perception: Representation Learning from Raw Spectra

**Authors:** Miao Zhang; Mohamed Abdelsamad; Bin Yang; Sherif Abdulatif; Benedikt Loesch; Marco Altmann; Abhinav Valada; Bin Yang

**ID:** 154355 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ECmrBoImC3>) | [PDF](<https://openreview.net/pdf?id=ECmrBoImC3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154355>)

Raw radar spectra are widely viewed as significantly cluttered and noisy to support direct representation learning\. This has led to handcrafted reductions, sparse point clouds, or compact Doppler descriptors as the default preprocessing step in radar perception\. In this work, we challenge this assumption and argue that the main limitation is not the raw spectral representation itself, but rather the absence of a learning objective capable of separating the structured signal from noise\. Handcrafted reductions partially address this problem, but they impose rigid assumptions about what counts as signal, discarding weak but informative structure while retaining artifacts that match the reduction model\. Once such information is removed, supervised learning cannot recover it or question what was preserved\. We propose a principled alternative: structure is the component of the radar spectrum that remains reconstructable under localized corruption, while noise is the component that does not\. This perspective makes self\-supervised masked modeling a natural and assumption\-free learning paradigm for dense radar spectra\. We instantiate it with Leakage\-aware Spectral MAE, a masked autoencoding framework for raw radar cubes that incorporates a spectral\-leakage\-aware corruption strategy to model physically realistic energy spreading\. We also show that Doppler organization is crucial: treating Doppler as a primary spatial dimension, using an x\-y\-D representation with height encoded as features, substantially outperforms naive channel stacking and is essential for exploiting dense 4D spectra\. Without any handcrafted reductions, our approach consistently outperforms state\-of\-the\-art radar\-based detectors and point\-cloud\-based self\-supervised learning \(SSL\) counterparts\. These results establish raw radar spectra as a highly effective representation for 3D perception when paired with an appropriate pretraining objective\.

## DynaSub: Adaptive Subgrouping for Scalable Representation Learning

**Authors:** Tina Behrouzi; Sana Tonekaboni; Rahul Krishnan; Anna Goldenberg

**ID:** 149429 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q7e6qi0tQK>) | [PDF](<https://openreview.net/pdf?id=q7e6qi0tQK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149429>)

Real\-world observational data often contain existing or emerging heterogeneous subpopulations that deviate from global patterns\. Without the ability to detect Out\-of\-Distribution \(OOD\) data and model underlying structure, systems risk failing to adapt to emerging patterns, leading to inaccurate or potentially harmful predictions\. We introduce DynaSub, a Dynamic Subgrouping Variational Autoencoder that couples latent representation learning with subgroup discovery\. DynaSub operates on pre\-trained foundation models or regular encoders, learning latent embeddings that define subgroup structure and are iteratively refined to enhance subgroup separability and OOD sensitivity\. It incorporates a nonparametric clustering mechanism directly in latent space, enabling the number and structure of subgroups to adapt dynamically during training\. DynaSub achieves competitive performance on near\- and far\-OOD detection across ResNet and ViT\-based foundation encoders, reducing false positive rates by up to 10\\% under covariate shift while maintaining high AUROC across multiple OOD benchmarks, and excelling in class\-OOD settings where entire classes are unseen during training\.

## From Topology to Retrieval: Decoding Embedding Spaces with Unified Signatures

**Authors:** Florian Rottach; William Rudman; Bastian Rieck; Harrisen Scells; Carsten Eickhoff

**ID:** 155821 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2cbJBFU7At>) | [PDF](<https://openreview.net/pdf?id=2cbJBFU7At>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155821>)

Studying the shape of text embedding spaces enhances our understanding  of model behavior and how geometry affects downstream task performance\.  While a range of topological and geometric metrics have been explored,  they are typically analyzed in isolation, and the connections between  them remain largely unknown\. In this paper, we present  Unified Topological Signatures \(UTS\), a holistic framework for characterizing the  structure of embedding spaces\. We evaluate our method across a wide  range of text embedding models and retrieval datasets, finding that UTS outperform  individual metrics in downstream performance prediction\. Through several  experiments, we demonstrate that UTS are superior at characterizing  embedding spaces, can predict model\-specific properties and bias from  geometry, and reveal novel insights into representational similarity  that challenge the Platonic Representation Hypothesis\.

## AudioSphere: Towards Self\-Supervised Spatial Audio Representation Models

**Authors:** Göksenin Yüksel; Marcel A\. J\. van Gerven; Kiki van der Heijden

**ID:** 151452 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aa8QwF7hqk>) | [PDF](<https://openreview.net/pdf?id=aa8QwF7hqk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151452>)

Recent audio embedding models learn general\-purpose representations that transfer across clip\- and frame\-level tasks, yet they operate almost exclusively on single\-channel signals and are blind to spatial structure\. Spatial audio models capture that structure but rely on clip\-level supervision or contrastive objectives, yielding embeddings unsuitable for frame\-level tasks like sound event detection and localization \(SELD\)\. We argue this dichotomy is not fundamental: patch\-level spatial self\-supervision can jointly learn acoustic and spatial features at both temporal granularities\. We introduce AudioSphere, a multi\-channel masked autoencoder trained on Ambisonics recordings that reconstructs both spectral content and directional cues via a joint spatiotemporal masking strategy that masks both time\-frequency patches and intensity vectors\. AudioSphere supports frame\-level predictions while producing strong clip\-level representations via aggregation\. Alongside the model, we release RealSELD, a standardized benchmark for evaluating frozen backbones on real\-world multi\-channel SELD\. AudioSphere enables, for the first time, SELD with a frozen self\-supervised backbone, while matching or exceeding prior general\-purpose audio embedding models on the HEAR benchmark\.

## Half\-Truths Break Similarity\-Based Retrieval

**Authors:** Bora Kargi; Arnas Uselis; Seong Joon Oh

**ID:** 154568 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Cdi1G7I9ds>) | [PDF](<https://openreview.net/pdf?id=Cdi1G7I9ds>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154568>)

When a text description is extended with an additional detail, image\-text similarity should drop if that detail is wrong\. We show that CLIP\-style dual encoders often violate this intuition: appending a plausible but incorrect object or relation to an otherwise correct description can increase the similarity score\. We call such cases \\emph\{half\-truths\}\. On the verified COCO evaluation set, CLIP prefers the correct shorter description only 41\.0\\% of the time, and performance drops to 28\.2\\% when the added detail is a relation\. We trace this vulnerability to weak supervision on caption parts: contrastive training aligns full sentences but does not explicitly enforce that individual entities and relations are grounded\. We propose CS\-CLIP \(Component\-Supervised CLIP\), which decomposes captions into entity and relation units, constructs a minimally edited foil for each unit, and fine\-tunes the model to score the correct unit above its foil while preserving standard dual\-encoder inference\. CS\-CLIP raises half\-truth accuracy to 78\.2\\% and improves average performance on established compositional benchmarks by 5\.7 points, suggesting that reducing half\-truth errors aligns with broader gains in compositional understanding\.

## LeWorldModel: Stable End\-to\-End Joint\-Embedding Predictive Architecture from Pixels

**Authors:** Lucas Maes; Quentin Le Lidec; Damien Scieur; Yann LeCun; Randall Balestriero

**ID:** 150076 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kuiP90C6Mk>) | [PDF](<https://openreview.net/pdf?id=kuiP90C6Mk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150076>)

Joint Embedding Predictive Architectures \(JEPAs\) offer a compelling framework for learning world models in compact latent spaces, yet existing methods remain fragile, relying on complex multi\-term losses, exponential moving averages, pre\-trained encoders, or auxiliary supervision to avoid representation collapse\. In this work, we introduce LeWorldModel \(LeWM\), the first JEPA that trains stably end\-to\-end from raw pixels using only two loss terms: a next\-embedding prediction loss and a regularizer enforcing Gaussian\-distributed latent embeddings\. This reduces tunable loss hyperparameters from six to one compared to the only existing end\-to\-end alternative\. With \~15M parameters trainable on a single GPU in a few hours, LeWM plans up to 48x faster than foundation\-model\-based world models while remaining competitive across diverse 2D and 3D control tasks\. Beyond control, we show that LeWM's latent space encodes meaningful physical structure through probing of physical quantities\. Surprise evaluation confirms that the model reliably detects physically implausible events\.

## Harnessing Data Asymmetry in Manifold Learning

**Authors:** Thomas Dagès; Simon Weber; Daniel Cremers; Ron Kimmel

**ID:** 151645 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z4eWOG1BJ5>) | [PDF](<https://openreview.net/pdf?id=Z4eWOG1BJ5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151645>)

Manifold learning is a fundamental task at the core of data analysis and visualisation\. It aims to capture the simple underlying structure of complex high\-dimensional data by preserving pairwise dissimilarities in low\-dimensional embeddings\. Traditional methods rely on symmetric Riemannian geometry, thus forcing symmetric dissimilarities and embedding spaces, e\.g\. Euclidean\. However, this discards in practice valuable asymmetric information inherent to the non\-uniformity of data samples\. We suggest to harness this asymmetry by switching to Finsler geometry, an asymmetric generalisation of Riemannian geometry, and propose a Finsler manifold learning pipeline that constructs asymmetric dissimilarities and embeds in a Finsler space\. This greatly broadens the applicability of existing asymmetric embedders beyond traditionally directed data to any data\. We also modernise asymmetric embedders by generalising current reference methods to asymmetry, like Finsler t\-SNE and Finsler UMAP\. On controlled synthetic and large real datasets, we show that our asymmetric pipeline reveals valuable information lost in the traditional pipeline, e\.g\. density hierarchies, and consistently provides superior quality embeddings than their Euclidean counterparts\.

## Your Self\-Supervised Projection Head Captures Object Co\-Occurrence Statistics

**Authors:** Arthur Aubret; Jochen Triesch; Céline Teulière

**ID:** 148520 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xIeX3NaTxT>) | [PDF](<https://openreview.net/pdf?id=xIeX3NaTxT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148520>)

Self\-Supervised Learning \(SSL\) has achieved impressive success in learning semantic visual representations, yet the underlying principles driving this success remain underexplored\. In this work, we hypothesize that common SSL pretext tasks implicitly model object co\-occurrence statistics, a fundamental cue for visual learning\. To test this, we curate three datasets of segmented objects from existing vision benchmarks using a state\-of\-the\-art segmentation model\. Through experiments across many SSL models, we reveal a hierarchical encoding of semantic information: while the visual backbone captures object categories, the projection head specializes in encoding co\-occurrences between object categories\. As a result, the projection head outperforms the backbone in aligning with human judgments of inter\-category similarity\. Furthermore, by controlling co\-occurrence patterns during pre\-training, we demonstrate that encoding object co\-occurrences can significantly accelerate the emergence of category\-level representations\. Our findings uncover a previously hidden learning principle in SSL and suggest a path toward designing more effective pretext tasks by explicitly leveraging object co\-occurrence structure\.

## Your Embedding Model Is SMARTer Than You Think

**Authors:** Jianrui Zhang; Hyun Jung Lee; Sukanta Ganguly; Tae\-Eui Kam; Donghyun Kim; Yong Jae Lee

**ID:** 152683 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RCEh14DLLt>) | [PDF](<https://openreview.net/pdf?id=RCEh14DLLt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152683>)

Multimodal retrieval relies heavily on single\-vector retrievers, which compress rich, sequential token sequences into one single global representation\. While efficient, they discard fine\-grained, local evidence critical for dense retrieval tasks\. Multi\-vector approaches were introduced as a solution, but they strictly require training and many ignore the necessity of a globally summarizing representation\. To address this, we introduce SMART, a framework that unlocks the latent multi\-vector capabilities of standard single\-vector models\. We first demonstrate that standard contrastive training on the pooled embedding implicitly shapes the retrieval geometry of preceding hidden states via gradient flow\. By applying direct late\-interaction over these frozen hidden states during inference, SMART acts as a plug\-and\-play upgrade that consistently improves performance across diverse modalities, pushing even the state\-of\-the\-art models to new heights on MMEB\-V2\. We further reveal SMART's superior performance as simple lightweight post\-training not only saves time and compute, but also brings forth further improvement on Visual Document retrieval, allowing a single\-vector model to outperform SoTA multi\-vector counterparts\. Ultimately, SMART offers both a highly efficient inference enhancement and a powerful finetuning technique for multimodal retrieval\.

## H\-Flow: Self\-supervised Human Scene Flow via Physics\-inspired Joint Multi\-modal Learning

**Authors:** Zhanbo Huang; Xiaoming Liu; Yu Kong

**ID:** 154441 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DWyZbRK6fi>) | [PDF](<https://openreview.net/pdf?id=DWyZbRK6fi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154441>)

Parametric human models capture global pose but overlook fine\-grained surface dynamics\. Generic scene flow estimates dense motion but struggles with articulated humans and lacks 4D ground truth\. To bridge this gap, we introduce H\-Flow, a dense 4D motion representation that captures non\-rigid deformations beyond skeletal kinematics\. We estimate H\-Flow from monocular video via a unified multi\-head architecture that jointly perceives pose, depth, and flow\. To overcome the scarcity of dense motion annotations, we propose a self\-supervised learning paradigm that embeds geometric, structural, and biomechanical priors into optimization\. These cross\-modal constraints tightly couple pose, depth, and flow, so that improving any one modality simultaneously drives the others toward consistency\. For evaluation, we present DynAct\-4D, a high\-fidelity synthetic benchmark providing dense 4D ground truth for complex human movements\. Extensive experiments show that our method outperforms state\-of\-the\-art scene flow baselines\. Furthermore, H\-Flow serves as an effective motion primitive, bringing substantial improvements to downstream tasks including action recognition and video generation\. Models, code, and resources will be released upon publication\.

## Optimization Dynamics Imprint Semantic Specificity in Contrastive Embedding Norms

**Authors:** Ziwei Su; Junyu Ren; Victor Veitch

**ID:** 150875 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ejpcbuLKfg>) | [PDF](<https://openreview.net/pdf?id=ejpcbuLKfg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150875>)

Contrastive embedding models trained with scale\-invariant losses are typically paired with distance metrics like cosine similarity, effectively ignoring embedding magnitudes\. However, surprisingly, empirical studies reveal that despite this, these "discarded" norms seem to correlate with semantic properties such as concept specificity, token frequency, and human uncertainty\. In this work, we provide a formal theoretical framework explaining this phenomenon\. By analyzing the optimization dynamics, we derive an analytic formula demonstrating that embedding length naturally encodes this information as a byproduct of the training process\. We also show how this gives rise to signals that can serve as "free" calibration tools in specific models and retrieval tasks, providing a grounded explanation for a previously heuristic observation\.

## Runtime Monitoring of Perception\-Based Autonomous Systems via Embedding Temporal Logic

**Authors:** Parv Kapoor; Abigail Hammer; Ashish Kapoor; Karen Leung; Eunsuk Kang

**ID:** 153720 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JGbC5dLr5b>) | [PDF](<https://openreview.net/pdf?id=JGbC5dLr5b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153720>)

Runtime monitoring of autonomous systems traditionally relies on mapping continuous sensor observations to discrete logical propositions defined over low\-dimensional state variables\. This abstraction breaks down in perception\-driven settings, where such mappings require additional learned modules that are often computationally expensive, brittle, and semantically misaligned\. In this work, we propose Embedding Temporal Logic \(ETL\), a temporal logic that performs monitoring directly in learned embedding spaces\. ETL defines predicates through distances between observed embeddings and target embeddings derived from reference observations\. This formulation allows specifications to capture high\-level perceptual concepts, such as similarity to visual goals or avoidance of semantic regions, that are difficult or impossible to express using traditional predicates\. By composing these predicates with temporal operators, ETL naturally expresses temporally extended and sequential perceptual behaviors\. We introduce ETL monitors for evaluating specifications over bounded embedding traces, along with a conformal calibration procedure that provides reliable and safety\-oriented predicate evaluation\. We evaluate our approach across multiple manipulation environments to show that ETL achieves strong empirical agreement with ground\-truth semantics, including accurate monitoring of temporally composed behaviors\.

## AmbientFM: A Foundation Model for Ambient Sensing

**Authors:** Guozhen Zhu; Yuqian Hu; Sakila S Jayaweera; Wei\-Hsiang Wang; Weihang Gao; Jiaxuan Zhang; Beibei Wang; Chenshu Wu; K\. Liu

**ID:** 152593 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RxX10wg674>) | [PDF](<https://openreview.net/pdf?id=RxX10wg674>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152593>)

Ambient intelligence seeks to continuously understand human presence, activity, and physiology in physical spaces, enabling smart environments, health monitoring, and human\-computer interaction\. WiFi infrastructure offers a ubiquitous, always\-on, and privacy\-preserving sensing substrate across billions of IoT devices\. Yet ambient sensing with WiFi remains largely fragmented, with most systems relying on task\-specific models, labeled data collection, and customized training pipelines\. We present AmbientFM, the first foundation model for ambient sensing through ubiquitous WiFi signals\. AmbientFM is pre\-trained on 9\.2 million unlabeled Channel State Information \(CSI\) samples collected over 439 days from 20 commercial device types deployed in real\-world environments\. It learns transferable wireless representations through contrastive learning, masked reconstruction, and physics\-informed objectives tailored to wireless signals\. With lightweight adaptation, a single backbone transfers to 9 downstream tasks, achieving above 0\.90 AUROC on all classification benchmarks and supporting dense spatial reconstruction\. AmbientFM reduces the need for labeled data and task\-specific design, enabling scalable ambient intelligence on existing wireless infrastructure\.

## Synthon Contrastive Learning for Synthesizable 3D Molecule Generation

**Authors:** Nahyun Kim; Seul Lee; Sung Ju Hwang

**ID:** 155718 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3RNSqUmHJv>) | [PDF](<https://openreview.net/pdf?id=3RNSqUmHJv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155718>)

To consider synthesizability in structure\-based drug design \(SBDD\), a recent approach has proposed to co\-design synthetic pathways with molecular conformers of ligands\. However, the intermediate conformers are predicted based solely on the current intermediate molecule, without information about the synthons that will be added later along the synthetic pathway\. As a result, the intermediate conformers do not adequately reflect the upcoming substructures, creating the geometric mismatch that leads to cumulative errors along the synthetic trajectory\. To this end, we propose SYnthon Contrastive LEarning \(SYCLE\), a synthesizable SBDD framework that injects future synthon information into intermediate conformer prediction via contrastive learning\. SYCLE further utilizes this information in the pathway generation policy to guide synthon selection\. SYCLE achieves state\-of\-the\-art binding affinity across all 15 LIT\-PCBA targets\. On CrossDocked2020, SYCLE attains \-9\.80 kcal/mol and an AiZynthFinder success rate of 68\.8\\%, nearly double that of the best baseline\.

## Structure\-agnostic Causal Representation Learning

**Authors:** Arman Behnam; Binghui Wang

**ID:** 155070 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8gtLRyYY45>) | [PDF](<https://openreview.net/pdf?id=8gtLRyYY45>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155070>)

Causal representation learning aims to discover robust features by exploiting the causal structure underlying data generation\. Existing methods require specifying the causal structure a priori, yet different structures demand fundamentally incompatible invariance constraints, and misspecification leads to representations that discard predictive information\. We introduce SaCRL, a framework that jointly identifies the causal structure and learns the corresponding invariant representation without prior structural knowledge\. Our approach formulates structure selection as a soft optimization over candidate invariances using HSIC\-based violation metrics, with adaptive weights that automatically concentrate on the achievable structure\. We provide theoretical guarantees for structure identification, invariance satisfaction, and out\-of\-distribution generalization\. Empirically, SaCRL matches structure\-specific oracles on synthetic and Colored MNIST benchmarks, achieves state\-of\-the\-art accuracy on three DomainBed benchmarks \(PACS, VLCS, OfficeHome\), and degrades gracefully under structural misspecification and limited environment diversity\. \{Code is available at: \\url\{https://github\.com/ax1375/sarl\}\}\.

## Learning What to Remember: Test\-Time Training via Context Distillation

**Authors:** Zixuan Wang; Xingyu Dang; Rui\-Jie Zhu; Zixin Wen; Hengyu Fu; Wenhao Chai; Jason Lee

**ID:** 153696 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JSruMJtXkx>) | [PDF](<https://openreview.net/pdf?id=JSruMJtXkx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153696>)

Effective long\-context modeling is not merely about retaining more of the past, but about preserving the information that may prove relevant later\. Test\-time training \(TTT\) is an appealing approach that performs online parameter updates for long\-context modeling, yet existing TTT methods only optimize either reconstruction or online adaptation objectives without considering the future utility of retained information\. In this work, we propose Test\-Time Context Distillation \(TTCD\), a TTT framework that explicitly optimizes the allocation of limited memory capacity for future use\. Specifically, TTCD uses a long\-window teacher to supervise the fast weights of a short\-window student, where the hidden\-state discrepancy between them offers a dense, self\-supervised signal guiding the model to memorize the contextual information crucial for future tasks\. We focus on an in\-place variant: In\-Place TTCD \(IP\-TTCD\), which uses the existing MLP parameters as the fast weights\. Experiments on long\-context language modeling tasks show IP\-TTCD consistently outperforms DeltaNet, Gated DeltaNet, sliding\-window attention, and TTT when pre\-trained from scratch\. Furthermore, IP\-TTCD allows pre\-trained transformer models to adapt their parameters during inference through continual pre\-training, gaining long\-context capabilities with only a lightweight architectural augmentation\.

## Provably Efficient Representation Learning for Low\-Rank CMDPs

**Authors:** Kaixuan Liu; GUOJUN XIONG; Shengpu Tang; Wanyun Si; Jian Li

**ID:** 155519 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4zzk1B7I8y>) | [PDF](<https://openreview.net/pdf?id=4zzk1B7I8y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155519>)

We study representation learning in low\-rank Constrained Markov Decision Processes \(CMDPs\), where both value and reward functions are approximated by a set of unknown representation vectors, and the transition dynamics admit a low\-rank factorization\. The objective is to maximize expected cumulative rewards while complying with constraints on the expected cumulative utility\. To achieve this, we propose \\texttt\{MFRLC\} \(Model\-Free Representation Learning for Low\-Rank CMDP\), a model\-free algorithm that uses a primal\-dual scheme to effectively balance reward regret and constraint violations\. To the best of our knowledge, \\texttt\{MFRLC\} is the first representation\-learning method for low\-rank CMDPs that combines the Least\-Squares Value Iteration with Upper Confidence Bound \(LSVI\-UCB\) and primal\-dual techniques\. \\texttt\{MFRLC\} further enhances value function estimation with bonuses for function approximation and uniquely learns the mapping from representations to value functions directly through representation learning\. We prove that \\texttt\{MFRLC\} achieves both regret and cumulative constraint violation of order $\\widetilde O\(H^3 d^2 K^\{3/4\}\|\\mathcal\{A\}\|^\{3/2\}/\\gamma\)$, making it provably sample\-efficient and highly adaptable to complex environments due to the reliance on function approximation\.

## Embedding Security Properties into AI\-Enabled Cyber\-Physical Systems

**Authors:** Ziyan An; John Stankovic; Meiyi Ma

**ID:** 154694 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BhPABKjORM>) | [PDF](<https://openreview.net/pdf?id=BhPABKjORM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154694>)

AI\-enabled Cyber\-Physical Systems \(CPS\) are highly vulnerable to adversarial and anomalous inputs, where small perturbations can induce cascading errors and unsafe control actions\. Existing approaches—such as rule\-based filtering, training\-time regularization, or diffusion\-based reconstruction—either operate outside the model or lack mechanisms to incorporate formal security specifications into the prediction process\. In this paper, we develop the first work toward embedding security properties directly into AI\-enabled CPS, enabling predictive models to enforce system\-level constraints during inference rather than relying on external defenses\. We introduce a logic\-conditioned bi\-stage diffusion framework that integrates Signal Temporal Logic \(STL\) specifications into forecasting\. STL serves as a first\-class conditioning signal that guides both an input repair stage and an output refinement stage, allowing the model to jointly mitigate adversarial perturbations and enforce desired temporal behaviors to satisfy security\-critical properties\. We evaluate our approach on a real\-world multivariate CPS forecasting task under both physical sensor and cyber attacks\. Our method improves robustness and specification compliance, degrades more gracefully as attack strength increases, and generalizes better to unseen attacks\. Ablation studies further show that embedding logical security properties yields gains unattainable by reconstruction\-based methods alone, highlighting a new direction for integrating formal methods with generative models in secure CPS\.

## Self\-Supervised Doppler\-Guided RF Odometry

**Authors:** Kunzhe Song; Jialuo Du; Jingkai Lin; Huacheng Zeng

**ID:** 153105 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Nurtj1O5Ei>) | [PDF](<https://openreview.net/pdf?id=Nurtj1O5Ei>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153105>)

Accurate RF odometry remains difficult due to multipath interference, geometric degeneracy, and dynamic clutter\. Existing approaches mitigate these challenges by relying on auxiliary sensors or ground\-truth pose supervision, which limits scalability and deployability\. We present RFWalk, a self\-supervised, RF\-only odometry framework that learns cross\-frame correspondence without any pose annotations or auxiliary sensors\. Our key insight is to cast each range\-azimuth cell as a node in a space\-time graph and recover inter\-frame motion by learning a soft transition matrix through cycle\-consistent contrastive random walks\. To resolve geometric degeneracy in feature\-poor scenes, we further introduce a physics\-informed Doppler consistency loss that enforces agreement between the correspondence\-induced displacement field and measured radial velocities\. Experiments on challenging scenes show that RFWalk achieves competitive accuracy in static environments and substantially outperforms existing approaches in dynamic scenes\.

## Tune\-Up Open\-Weight CLIP: Optimization Framework for Self\-Supervised Fine\-tuning of CLIP

**Authors:** Anant Mehta; Xiyuan Wei; Xingyu Chen; Tianbao Yang

**ID:** 154261 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F6LR7aEwxS>) | [PDF](<https://openreview.net/pdf?id=F6LR7aEwxS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154261>)

CLIP has become a cornerstone of multimodal representation learning, yet improving its performance typically requires a prohibitively costly process of training from scratch on billions of samples\. We ask a different question: \*Can we improve the performance of open\-weight CLIP models across various downstream tasks using only existing self\-supervised datasets?\* Unlike supervised fine\-tuning, which adapts a pretrained model to a single downstream task, our setting seeks to improve general performance across various tasks\.  However, as both our experiments and prior studies reveal, simply applying standard training protocols starting from an open\-weight CLIP model often fails, leading to performance degradation\.  In this paper, we introduce \*\*TuneCLIP\*\*, a self\-supervised fine\-tuning framework that overcomes the performance degradation\. TuneCLIP has two key components: \(1\) a warm\-up stage of recovering optimization statistics to reduce cold\-start bias, inspired by theoretical analysis, and \(2\) a fine\-tuning stage of optimizing a new contrastive loss to mitigate the penalization on false negative pairs\. Our extensive experiments show that TuneCLIP consistently improves performance across model architectures and scales\. Notably, it elevates leading open\-weight models like SigLIP \(ViT\-B/16\), achieving gains of up to \+2\.5% on ImageNet and related out\-of\-distribution benchmarks, and \+1\.2% on the highly competitive DataComp benchmark, setting a new strong baseline for efficient post\-pretraining adaptation\.

## Contrast encodes inductive bias: separating slow noise from dynamics in predictive representation learning

**Authors:** Paarth Gulati; Ilya Nemenman

**ID:** 149353 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qhXEAOv8zQ>) | [PDF](<https://openreview.net/pdf?id=qhXEAOv8zQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149353>)

Self\-supervised methods that learn representations and predict dynamics fully in the latent space, such as JEPA, have been shown to confuse slowly varying noise with the dynamical signals they aim to capture\. Specifically, when noise features remain approximately constant within each trajectory, contrastive predictive objectives preferentially encode these features instead of the true latent variables governing the system\. The learned representation then becomes dominated by trajectory\-specific noise, so downstream performance degrades with noise strength and does not improve even as the number and duration of training trajectories increase\. We argue that this failure is a property of the objective itself, shared by a long line of contrastive predictive objectives that sample negatives across trajectories\. To illustrate this generality, we study the failure mode and its remedy in two settings: a standard SimCLR\-style JEPA on a synthetic moving\-dot dataset, and DySIB, a recently introduced method designed for extracting physically interpretable representations of dynamics, on movies of a rigid\-body pendulum\. When negatives are instead sampled within a single trajectory, the slow noise can no longer distinguish frames within that trajectory, removing the predictive shortcut\. Training one encoder simultaneously on many such trajectories then forces it to encode the variables relevant for the dynamics, with longer trajectories yielding better representations even for strong slow noise\. Our results point toward principles for designing contrastive predictive objectives in dynamical representation learning, especially for physical systems with noisy experimental observations\.

## Inertia\-1: An Open Exploration of Wearable Motion Foundation Models

**Authors:** Zongzhe Xu; Aakarsh Anand; Sarah Jiang; Chuntung Zhuang; Zitao Shuai; Sriram Sankararaman; Yuzhe Yang

**ID:** 153477 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L4whvxozBR>) | [PDF](<https://openreview.net/pdf?id=L4whvxozBR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153477>)

Wearable motion sensing provides a continuous and scalable window into human behavior and health, making it a natural fit for foundation models, yet its pretraining and scaling principles remain poorly understood\. Prior work studies isolated design choices, such as sensor placement or sampling frequency, often under fixed settings and narrow downstream tasks that fail to capture real\-world sensing diversity\. We introduce Inertia\-1, a fully open exploration of wearable motion foundation models\. Using massive corpora of accelerometer data from global sources spanning more than 18\.2M hours, we build a controlled framework for studying the full lifecycle of wearable motion foundation models, covering data choices such as sensor modality, device placement, sampling rate, window length; model choices such as architectures and model size; and training choices such as pretraining objective and data scale\. Extensive evaluations across 15 datasets spanning human activity recognition, freezing\-of\-gait detection, and disease prediction reveal intriguing findings for building motion foundation models that generalize across tasks and sensing conditions\. Collectively, Inertia\-1 not only presents state\-of\-the\-art recipes for diverse downstream tasks, but also serves as a comprehensive, practical, and open cookbook for wearable motion representation learning\.

## Geometry\-Centered 3D Latent World Models for Growing Surfaces

**Authors:** Xiaoyi Liu; Hao Tang

**ID:** 149549 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pJ1GLwHzZ6>) | [PDF](<https://openreview.net/pdf?id=pJ1GLwHzZ6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149549>)

Many physical systems do not merely move or deform; they grow, adding material and changing the geometry that a world model must represent\. Existing world models are typically optimized for pixel prediction, reward prediction, or fixed\-support physical dynamics, leaving open how to model systems whose geometric state expands over time and whose future morphology depends on hidden material response\. We introduce FOLIAGE, a geometry\-centered latent world model for growing surfaces\. FOLIAGE represents mature regions as a compact scaffold while allocating higher\-resolution state to active growth fronts, allowing the model to focus capacity where new material and near\-future change occur\. It further separates observation, action, and privileged physics: heterogeneous RGB, point\-cloud, and mesh observations are fused into a deployable geometric state; material controls condition only the latent dynamics; and hidden physical energies guide training without being required at deployment\. To evaluate this setting, we introduce SURF\-GARDEN and SURF\-BENCH, providing controlled counterfactual branches, dense cross\-modal correspondences, hidden physical signals, and stress tests for growing\-geometry state learning\. FOLIAGE reduces inverse\-material error by $\\approx40\\%$ and 5\-step mesh forecasting Chamfer error by $\\approx20\\%$ relative to strong baselines, while improving cross\-modal retrieval by $\\approx25\\%$ mAP@100\. Stress tests show graceful degradation under sensor loss and correspondence corruption\. Transfer experiments on real plant and dynamic\-3D data indicate that the learned geometry\-centered state generalizes beyond the simulator\. We will release code and data upon acceptance\.

## A World Model of Radiologist Reading for Medical Image Representation Learning

**Authors:** Yiwei Li; Zihao Wu; huaqin zhao; Yifan Zhou; Chao Cao; Dajiang Zhu; Tianming Liu; Lin Zhao

**ID:** 154476 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DJzM2q9amM>) | [PDF](<https://openreview.net/pdf?id=DJzM2q9amM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154476>)

Radiologist eye\-tracking data provide a rich record of how experts search, compare, and accumulate evidence during image reading, yet existing methods exploit this signal only partially, either as a static spatial prior or as an auxiliary prediction target decoupled from diagnosis\. We propose GazeWorld, a medical imaging world model that treats the image as the world and the radiologist's fixation sequence as a trajectory through it\. GazeWorld autoregressively predicts the latent representation of the next fixated patch from all previously visited ones, while a spatial\-completion branch covers unvisited regions\. At inference, GazeWorld generates a sequence of patch representations from the image alone without requiring real gaze data\. Frozen GazeWorld features achieve state\-of\-the\-art diagnostic accuracy across all nine supervised settings on CheXpert, RSNA Pneumonia, and SIIM\-ACR Pneumothorax, as well as the highest zero\-shot accuracy on all three benchmarks\. On the GazeSearch benchmark, a generic decoder trained on the same frozen features outperforms the purpose\-built LogitGaze\-Med by over 16\\% in ScanMatch and 22\\% in SED, despite not being explicitly trained to predict gaze\. GazeWorld demonstrates that modeling how experts read, not just what they conclude, offers a promising pretraining paradigm for medical imaging AI\.

## Clustering with Weak Distance Oracles

**Authors:** Aryan Esmailpour; Rahul Raychaudhury; Sainyam Galhotra; Stavros Sintos

**ID:** 155449 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5W2OIUKFcN>) | [PDF](<https://openreview.net/pdf?id=5W2OIUKFcN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155449>)

Clustering is a fundamental task in unsupervised learning, serving as a core tool for data mining and exploratory data analysis\. Classical $k$\-clustering objectives such as $k$\-median and $k$\-means formalize this task, but typically assume access to exact pairwise distances\. This assumption is increasingly unrealistic in modern applications where distances are estimated through proxy embedding models, learned similarity functions, human feedback, or other low\-cost procedures that may be noisy\. We study $k$\-clustering in an unknown metric space where the algorithm has access only to a weak distance oracle: for each pair of objects, the oracle returns the true distance with probability of $1/2\+\\varepsilon$ , where $\\varepsilon$ is a constant, and otherwise may return an arbitrary corrupted value\.   We present randomized algorithms that, given a metric space with $n$ vertices and a parameter $k$, use only weak distance\-oracle queries to compute a set of representative centers together with a mapping from every input object to one of these centers, such that the total mapping cost is within a constant factor of the optimal $k$\-clustering cost\. Our first algorithm returns $O\(k\\cdot\\mathsf\{polylog\}\(n\)\)$ centers using $O\(n\\cdot k\\cdot \\mathsf\{polylog\}\(n\)\)$ weak\-oracle queries and runs in quasi\-polynomial time\. We also give a polynomial\-time algorithm that returns $O\(k^2\\cdot\\mathsf\{polylog\}\(n\)\)$ centers using $O\(n\\cdot k\\cdot \\mathsf\{polylog\}\(n\)\)$ weak\-oracle queries\. Preliminary experiments for $k$\-means clustering show that our approach remains close to the optimum under substantial oracle noise, while noise\-oblivious baselines degrade sharply\.

## MinSteer: Minimal\-Pair Steering via Two\-Stage Cached Continuation

**Authors:** Muxuan Liu; Tatsuya Ishigaki; Yusuke Miyao; Hiroya Takamura; Ichiro Kobayashi

**ID:** 152253 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UQiPTFT8T4>) | [PDF](<https://openreview.net/pdf?id=UQiPTFT8T4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152253>)

Do behavioral styles in large language models correspond to reusable directions in residual space, or do they mainly appear after averaging many noisy contrastive examples? We introduce MinSteer, a two\-stage cached\-continuation method for estimating a contrastive residual direction \(CRD\) within one decoding trajectory\. Stage\-X generates a continuation in one style; a style\-flip suffix is then processed using Stage\-X's final KV cache; Stage\-Y continues from this inherited trajectory\. The CRD is computed from generated\-token residuals only, excluding prompt and suffix tokens from the average\. Across sentiment transfer, politeness control, and a ParaDetox\-based bidirectional diagnostic, MinSteer extracts effective steering directions from very small contrasts\. On TweetEval sentiment transfer, one MinSteer contrast outperforms a CAA baseline averaged over 50 independent pairs\. Japanese keigo CRDs transfer to English and Chinese outputs and outperform trajectory\-free TwoSeq controls\. In ParaDetox, MinSteer produces bidirectional Detoxify movement under our rewrite setup, while exposing semantic\-preservation trade\-offs\. The directions transfer across tested scenarios and languages and show clear depth dependence\. Together, these results show that cached self\-rewrite trajectories provide a cleaner signal for residual\-space behavior directions than independent\-pair averaging\.

## Elastic Representations via Hyperbolic Geometry

**Authors:** Arjun Ramesh Kaushik; Rudrasis Chakraborty; Nalini Ratha; Venu Govindaraju

**ID:** 152639 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RVWViB6PQ7>) | [PDF](<https://openreview.net/pdf?id=RVWViB6PQ7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152639>)

Learned representations \(or embeddings\) are the foundation of modern machine learning systems, yet they are typically trained as fixed\-size embeddings, without accounting for varying downstream resource or task constraints\. Matryoshka Representation Learning \(MRL\) addresses this limitation by learning nested representations, but requires costly end\-to\-end retraining and does not support post hoc expansion, while Contrastive Sparse Representations \(CSR\) reduce training overhead via lightweight adaptors but operate at a 4x larger dimensionality\. Additionally, all prior works restrict their framework towards compression only\. In this work, we introduce \\textbf\{H\}yperbolic \\textbf\{E\}lastic \\textbf\{R\}epresentation \\textbf\{L\}earning \(HERL\), a framework for learning dimension\-adaptive embeddings \(compression and expansion\) through a lightweight adaptor without retraining the base encoder\. Our key idea is to exploit the exponential capacity of hyperbolic geometry by learning a non\-linear mapping from the encoder space to hyperbolic space\. We train a simple MLP to downsample the representations before projecting them onto a Lorentzian and learn adaptive representations that respect the Lorentzian geometry\. Our approach is model\-agnostic and effective in both supervised and unsupervised settings\. Through extensive experiments across image and text modalities, we show that HERL preserves downstream performance across a wide range of embedding sizes, exhibits smooth interpolation between dimensions, and achieves these benefits at a fraction of the computational cost\.

## VIPBench: A Human\-Aligned Benchmark for Voice Identity Perception in the Age of Voice Cloning

**Authors:** Xudong Tang; Matthew Groh

**ID:** 139249 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cHQRKyboN9>) | [PDF](<https://openreview.net/pdf?id=cHQRKyboN9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139249>)

Speaker identification benchmarks evaluate how accurately a model can predict a ground\-truth speaker label for a given utterance, treating voice identity as a property of the recording's producer\. However, these benchmarks do not test whether a model aligns with human perception of voice identity\. Whether a human would hear two voices and interpret them as the same speaker or not has consequences for intellectual property rights, cybersecurity, and everyday life\. We make two contributions\. First, we introduce the Voice Identity Perception benchmark \(VIPBench\), built from the identity judgments of English\-speaking crowdworkers on stratified celebrity voice pairs\. VIPBench consists of 124,876 same/different identity judgments from 1,290 participants on 9,800 voice pairs across 100 speakers, spanning real recordings, AI voice clones generated by a state\-of\-the\-art Text\-to\-Speech \(TTS\) system, and continuously morphed voices\. Our second contribution is to define four evaluation tasks: predicting the listener same\-speaker agreement rate; binary same/different classification against the majority listener vote, evaluated for both ranking and calibration; alignment between the model's and listeners' speaker\-similarity structures; and whether a predictor fit on real speech still works on voice clones and morphs\. We report baselines for ten publicly available speech representations\. We find that the perception target re\-orders model rankings relative to metadata: supervised embeddings \(trained on metadata speaker labels\) still outperform self\-supervised models \(which learn voice structure without identity supervision\), and no model reaches the noise ceiling\. VIPBench enables systematic evaluation of speaker representations against human voice\-identity perception across real, cloned, and morphed speech, motivating speaker models trained on perceptual judgments directly\.

## Intrinsic Riemannian Cross\-covariance for Manifold\-valued Random Objects

**Authors:** Carlos Soto; Cheng Wang; Yujing Huang; Xiaoyu Chen

**ID:** 148988 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=teJdXSWBH8>) | [PDF](<https://openreview.net/pdf?id=teJdXSWBH8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148988>)

Covariance estimation yields a fundamental second\-order statistic underlying representation learning, dimension reduction, and dependence modeling\. While covariance has been well understood in Euclidean spaces, it is ill\-defined for random objects residing on nonlinear Riemannian manifolds, which increasingly arise in modern machine learning applications involving shapes, symmetric positive definite \(SPD\) matrices, etc\.      This paper introduces an intrinsic Riemannian cross\-covariance for manifold\-valued random objects\. Our approach defines covariance and correlation by transporting local variations to a common tangent space via parallel transport, yielding a second\-order descriptor that is independent of arbitrary coordinate choices\. We establish that the proposed covariance inherits desirable properties of its Euclidean counterparts and characterize its asymptotic behavior\.     Numerical studies on spheres and SPD manifolds, together with real\-data experiments on heart valve shapes in Kendall's shape space, demonstrate the effectiveness and verify the properties\. Our results position Riemannian covariance as a fundamental tool for second\-order learning and analysis in non\-Euclidean representation spaces\.

## NeuralFieldManifold: Reconstruction of LFP manifold with Lag Embedding

**Authors:** Kasra Fallah; Haoyu N Chen; Rudramani Singha; Eunji Kong; Gergely Turi; Attila Losonczy; Erfan Zabeh

**ID:** 155903 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1yPTCbmakU>) | [PDF](<https://openreview.net/pdf?id=1yPTCbmakU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155903>)

Local field potentials \(LFPs\) are population\-level neural signals central to brain\-computer interfaces and systems neuroscience, yet unlike spike\-based population codes, their dynamics lack a principled geometric description that connects spectral structure to latent state\-space geometry\. Here we establish, analytically and empirically, that the lag\-embedded dynamics of LFP signals lie on a low\-dimensional K\-torus, where K equals the number of sustained oscillatory modes present in the signal\. Modeling LFPs as bounded autoregressive processes, we show that each oscillatory component contributes an independent circular degree of freedom, while aperiodic 1/f structure and noise contribute only geometric thickness around the manifold without altering its topology\. To apply this theory to real nonstationary recordings, we introduce DeepLagField, a physics\-informed network that jointly estimates time\-varying AR structure and effective model order, with formal guarantees that local toroidal geometry is preserved despite drifting oscillatory dynamics\.We validate the predicted toroidal geometry using persistent homology across primate visual cortex LFP, rodent hippocampal LFP, and mouse cortical EEG recordings, confirming the expected Betti number signatures across species and recording modalities\. Critically, we demonstrate that this geometric structure is not merely descriptive but carries behaviorally relevant information inaccessible to standard spectral summaries — as evidenced by torus parameters derived purely from manifold geometry outperforming multi\-band spectral features for sleep\-state decoding without any hand\-crafted frequency design\. This proof of concept points toward broad downstream utility wherever oscillatory field signals are recorded, from neural decoding and brain\-state monitoring to clinical biomarker development\. These results reframe neural oscillations not as isolated spectral features but as coordinate directions of a low\-dimensional delay manifold, opening a geometry\-first approach to neural signal analysis that is simultaneously theoretically grounded, empirically validated across species, and predictive of behaviorally relevant brain states\.

## Invariant Features in Language Models: Geometric Characterization and Model Attribution

**Authors:** Agnibh Dasgupta; Abdullah All Tanvir; Xin Zhong

**ID:** 152361 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TdITA4NH7Z>) | [PDF](<https://openreview.net/pdf?id=TdITA4NH7Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152361>)

Language models exhibit strong robustness to paraphrasing, suggesting that semantic information may be encoded through stable internal representations, yet the structure and origin of such invariance remain unclear\. We propose a local geometric framework in which semantically equivalent inputs occupy structured regions in latent space, with paraphrastic variation along nuisance directions and semantic identity preserved in invariant subspaces\. Building on this view, we make three contributions: \(1\) a geometric characterization of invariant latent features, \(2\) a contrastive subspace discovery method that separates semantic\-changing from semantic\-preserving variation, and \(3\) an application of invariant representations to zero\-shot model attribution\. Across models and layers, empirical results support these contributions\. Invariant structure emerges in specific depth regions, semantic displacement lies largely outside the nuisance subspace, and representation\-level interventions indicate a causal role of invariant components in model outputs\. Invariant representations also capture model\-specific geometric patterns, enabling accurate attribution\. These findings suggest that semantic invariance can be viewed as a local geometric property of latent representations, offering a principled perspective on how language models organize meaning\.

## Understanding Graph Self\-Supervised Pre\-training under Distribution Shifts: A Scaling Law Perspective

**Authors:** Bingheng Li; Shikun Liu; Yu Song; Jay Revolinsky; Haoyu Han; Jiayuan Ding; Hua Liu; Jiliang Tang

**ID:** 151191 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cHJf1Iwn3Z>) | [PDF](<https://openreview.net/pdf?id=cHJf1Iwn3Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151191>)

Scaling laws have played a fundamental role in the development of foundation models for NLP and vision, but their applicability to large\-scale pretrained graph\-based models remains unclear, particularly under distribution shifts intrinsic to graph data\. In this work, we systematically investigate how model capacity and data scale affect downstream performance in graph pre\-training under distribution shifts\. To disentangle how distribution shifts impact the scaling, we construct synthetic benchmarks based on contextual stochastic block models, with precise control over both structural and feature\-level shifts across the pre\-training and testing graphs\. Our initial experiments on GCN, a standard Graph Neural Network \(GNN\) baseline, reveal a striking asymmetry: increasing model capacity consistently improves performance, while increasing data size often degrades it, even under mild shift\. We show that this degradation is not inevitable; properly configuring the pretraining model with deeper, wider, and transformer\-based architectures enables favorable data scaling, even when distribution shifts\. As data scales, graph transformer models achieve up to \+9\\% gains over GCN across synthetic and real\-world graph domain\-adaptation tasks\. To explain this phenomenon, we develop a theoretical framework based on Fisher separability and Wasserstein domain divergence, which formally characterizes how distribution shifts affect representation transferability\. Our results highlight architecture\- and shift\-aware strategies as the key to unlock scalable graph\-based model pre\-training\.

## Rank\-Transformed Dissimilarity Profiles for High\-Dimensional Classification

**Authors:** Xiangbo Mo; Hao Chen

**ID:** 151307 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bRnA8Byvs0>) | [PDF](<https://openreview.net/pdf?id=bRnA8Byvs0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151307>)

Despite advances in representation learning, high\-dimensional classification remains challenging in low\-sample\-size regimes, where the dominant signal may vary across applications and labeled data are often limited\. We propose a dissimilarity\-profiling classification framework that represents each observation by its class\-wise dissimilarity profile,  transforming the original feature space into a low\-dimensional representation that summarizes how the observation relates to each class\. The key idea is to turn a consequence of the curse of dimensionality into signal: high\-dimensional geometry can induce systematic within\-class and between\-class dissimilarity patterns under location, scale, or other distributional changes, and these patterns are captured by the class\-wise profiles\. Building on this representation, we introduce a rank\-transformed algorithm that converts dissimilarities into class\-wise rank profiles, yielding a compact representation for classification\. The proposed method delivers competitive or improved performance relative to commonly used classifiers on two\-class, multi\-class, network, and real high\-dimensional low\-sample\-size datasets\. To provide insight into the mechanism underlying the method, we analyze a distance\-based surrogate and show that the resulting profiles encode differences in first, second, and higher\-order moments, while the rank transformation improves robustness to outliers\. Together, these results show that rank\-transformed dissimilarity profiles provide an adaptive representation for high\-dimensional classification when the signal structure is unknown\.

## Neural Dual Bounds: Valid\-by\-Construction JGLP Warm\-Starts for MAP and Constrained MAP

**Authors:** Akshay Vyas; Shivvrat Arya; Brij Malhotra; Tahrima Rahman; Vibhav Gogate; Nicholas Ruozzi

**ID:** 150753 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fdwZvjybdN>) | [PDF](<https://openreview.net/pdf?id=fdwZvjybdN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150753>)

We present Neural Dual Bounds, a calibration\-free framework that produces deterministic upper bounds for MAP inference in probabilistic graphical models using a single neural\-network forward pass\. The framework trains a network to output the edge messages of a mini\-bucket style upper bound on a given join\-graph decomposition in a self\-supervised manner by directly minimizing the a smooth dual objective\.  The output of this network can be used at test time to warm\-start a standard JGLP optimizer\. Across diverse benchmarks, this warm start yields dual gaps that are orders of magnitude tighter than those from zero initialization, with the largest gains in the early\-iteration regime\. We also apply our framework for the constrained MAP \(CMPE\) task, and we show that neural warm starts with test\-time adaptation consistently achieve the tightest dual gaps across all iteration budgets against an adaptive baseline\.

## RATS\! Patches Talk Through Registers: Emergent Parts in Register Attention Transformers

**Authors:** Timing Yang; Predrag Neskovic; Jansen Seheult; Wenchao Han; Anand Bhattad; Alan Yuille; Feng Wang

**ID:** 151691 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ylj622Nr12>) | [PDF](<https://openreview.net/pdf?id=Ylj622Nr12>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151691>)

When humans see a bird, they recognize far more than just \`\`bird'' \-\-\- they see a head, wings, and talons, a structured assembly of reusable parts that can be identified across every bird they have ever seen\. We ask whether a self\-supervised visual model can discover the same compositional structure on its own\. To this end, we propose $RATS$ \($R$egister $A$ttention $T$ransformer$s$\), which decomposes the classification token into $N$ learnable register tokens that route patch information through an $L\{\\to\}N\{\\to\}N\{\\to\}L$ bottleneck\. The $N$ registers are hard\-partitioned across $H$ attention heads, structurally isolating each subset in an independent projection subspace\. Without auxiliary losses or part annotations, each register spontaneously specializes into a semantically coherent visual part\. RATS surpasses all baselines by an average of \+12 mIoU on five segmentation benchmarks, and demonstrates stronger dense prediction on ADE20K \(\+1\.11 mIoU\) and COCO \(\+0\.2 AP$^\{\\text\{m\}\}$\)\. The visual dictionary extracted from the trained registers also shows signs of part\-level consistency and semantic proximity across related categories\. Our results suggest that RATS may provide a useful architectural prior for structured and interpretable visual representation learning\.

## TIDE: Every Layer Knows the Token Beneath the Context

**Authors:** AJAY JAISWAL; Lauren Hannah; Han\-Byul Kim; Duc Hoang; Mehrdad Farajtabar; Minsik Cho

**ID:** 152874 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PiL1EEzHt9>) | [PDF](<https://openreview.net/pdf?id=PiL1EEzHt9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152874>)

We revisit a universally accepted but under\-examined design choice in every modern LLM: a token index is looked up once at the input embedding layer and then permanently discarded\. This single\-injection assumption induces two structural failures: \(i\) the Rare Token Problem, where a Zipf\-type distribution of vocabulary causes rare\-token embeddings are chronically under\-trained due to receiving a fraction of the cumulative gradient signal compared to common tokens; and \(ii\) the Contextual Collapse Problem, where limited parameters models map distributionally similar tokens to indistinguishable hidden states\. As an attempt to address both, we propose TIDE, which augments the standard transformer with EmbeddingMemory: an ensemble of K independent MemoryBlocks that map token indices to context\-free semantic vectors, computed once and injected into every layer through a depth\-conditioned softmax router with a learnable null bank\. We theoretically and empirically establish the benefits of TIDE in addressing the issues associated with single\-token identity injection as well as improve performance across multiple language modeling and downstream tasks\.

## On the Provable Emergence of Hierarchical Concept Structure in CLIP Embeddings

**Authors:** Nghia Nguyen; Tianjiao Ding; Lachlan MacDonald; Rene Vidal

**ID:** 153853 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IFmLNK0lpW>) | [PDF](<https://openreview.net/pdf?id=IFmLNK0lpW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153853>)

Contrastive vision\-language models such as CLIP are trained to align images and text, not to represent taxonomies\. Yet empirical studies show that CLIP embeddings exhibit a hierarchical geometry aligned with the semantic hierarchy of concepts\. A theoretical characterization of why such hierarchy emerges from a non\-hierarchical objective remains open\. In this paper, we formalize this phenomenon as Hierarchical Angular Separation \(HAS\), a geometric property whereby each non\-leaf concept embedding is more similar to its descendants than to off\-branch concepts\. Empirically, we show that HAS already holds weakly in randomly initialized CLIP image embeddings, suggesting that hierarchical structure may be induced by the raw image geometry, while in text embeddings it emerges only after contrastive training\. To explain this asymmetry between text and image embeddings, we analyze an unconstrained features model in which the image embeddings are fixed and only the text embeddings are trained\. We show that when the image embeddings satisfy HAS with a positive margin, the global minimizer of the contrastive objective induces HAS in the text embeddings, thereby transferring hierarchical structure across modalities\. The key mechanism is the hierarchical co\-occurrence structure of image\-text pairs, which biases text embeddings toward root\-centered image prototypes\. For a linear contrastive loss, we derive a closed\-form solution that makes this mechanism explicit\. We extend the analysis to the InfoNCE loss and establish analogous guarantees under sufficient regularization\. Synthetic experiments validate the theory and show that HAS emerges even beyond the regimes covered by our analysis\.

## Factor Augmented High\-Dimensional SGD

**Authors:** Shubo Li; Yuefeng Han; Xiufan Yu

**ID:** 148617 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wPsFSiDXLS>) | [PDF](<https://openreview.net/pdf?id=wPsFSiDXLS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148617>)

Stochastic gradient descent \(SGD\) is a fundamental optimization algorithm widely used in modern machine learning\. In this paper, we propose \*Factor\-Augmented SGD\* \(FSGD\), a new optimization method that leverages latent factor representations in high\-dimensional learning tasks\. Unlike standard two\-stage dimension reduction approaches that rely on offline representation learning and full data storage, a key novelty of FSGD is that it operates purely on streaming data, making it scalable to large\-scale and high\-dimensional problems\. Furthermore, we establish the first theoretical framework that explicitly incorporates latent factor estimation error into the analysis of SGD, and provide moment convergence in $\\ell^s$ norm under decaying step sizes and mini\-batch updates\. Our results provide a new foundation for employing SGD reliably and scalably in high\-dimensional machine learning systems\.

## DictLLM: Post\-training Compression of Large Language Model with Dictionary Kernels

**Authors:** Jinho Park; Se Young Chun; Mingoo Seok

**ID:** 151096 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d0p33Top6I>) | [PDF](<https://openreview.net/pdf?id=d0p33Top6I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151096>)

Efficient deployment of large language models \(LLMs\) on mobile devices requires balancing performance with compute and memory constraints\. Post\-training compression is an effective approach to managing this trade\-off, while requiring much less computation than in\-training counterparts\. We propose DictLLM, a dictionary\-based compression scheme in which weight matrices within grouped layers are decomposed into a shared dictionary and layer\-specific sparse coefficients, directly obtained from a pre\-trained model without further training\. Specifically, we cast DictLLM as a four\-step post\-training optimization\. First, we obtain shared dictionaries via singular value decomposition \(SVD\) of input\-scaled weight matrices, amortizing rank across grouped layers; second, we sparsify the layer\-specific coefficients to the target compression ratio using a dictionary\-aware Hessian; and third, we refine the dictionaries given the resulting sparse coefficients\. Finally, we aggressively quantize both components using factor\-specific Hessian information: input covariance for the dictionaries and the dictionary\-aware Hessian for the coefficients\. The resulting representation reduces memory footprint by storing a single shared dictionary per layer group, along with sparse layer\-specific coefficients\. On language modeling and zero\-shot reasoning benchmarks, DictLLM consistently outperforms existing post\-training low\-rank compression methods and pushes the Pareto frontier between model size and performance\. DictLLM compresses the original LLaMA\-7B model by 5\.1x with only a 3\.4\-point increase in WikiText\-2 perplexity, achieving a 3\.6x higher compression ratio than the state\-of\-the\-art low\-rank method\.

## MCM\-DM: Towards Better Spatio\-Temporal Event Representation Learning via Discrete Morse Theory

**Authors:** Yuanheng Zhang; Jennifer Rozenblit; Chenguang Yang; Jaidev Goel; Yulia Gel; Yuzhou Chen

**ID:** 153274 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MT51T0yAra>) | [PDF](<https://openreview.net/pdf?id=MT51T0yAra>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153274>)

Spatio\-temporal point processes \(STPPs\)  represent a random collection of points where each point corresponds to the time and location of an event\. STPPs are widely used to describe a wide range of phenomena, from earthquakes to wildfires to crime occurrence to disease outbreaks\. Generative models have recently emerged as a new powerful paradigm for STPPs, demonstrating %due to their exceptional  highly competitive generalization capabilities and promising potential for systematic uncertainty quantification\.  However, existing generative approaches  primarily rely on unimodal numerical data, overlooking the geographic context in which events occur and failing to capture critical spatial and temporal patterns within the STPP\. To address these limitations, we propose Morse\-aware Cross\-Modality learning within Diffusion Model, or \\textbf\{MCM\-DM\}\. MCM\-DM represents a cross\-modality diffusion framework based on the discrete Morse and cobordism theories that augments STPP modeling with geographic scene understanding\. MCM\-DM consists of three key components: \(i\) a vision\-language model\-based geographic encoder that extracts semantic embeddings from satellite tiles at each event location; \(ii\) an attention\-based fusion mechanism to integrate critical structure representation with spatio\-temporal embeddings, and \(iii\) a Morse\-theoretic topological aligner which aligns latent representations of critical events with spatio\-temporal embedding space\. We demonstrate the MCM\-DM utility on 8 diverse STPP datasets from Earth sciences, epidemiology, urban mobility, and crime analytics, highlighting its cross\-domain versatility\. The code is available at\~\\url\{https://anonymous\.4open\.science/r/MCM\-DM\-CF83\}\.

## Less Decoder is More Encoder: Geometric Representation Learning from Novel View Synthesis

**Authors:** Keerthi Kaashyap; Dennis Anthony; Akshay Krishnan; Nhi Nguyen; Jeremy Collins; James Hays; Shreyas Kousik; Animesh Garg

**ID:** 152848 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PvARuIywdQ>) | [PDF](<https://openreview.net/pdf?id=PvARuIywdQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152848>)

This paper examines the role of Novel View Synthesis \(NVS\) in geometric representation learning\.    In principle, NVS should reason about 3D scene structure, thereby enabling transferable multi\-view geometric representations\. Yet, existing encoder\-based NVS methods yield poor representations\. This is not because of lack of supervisory signal, but rather due to inconspicuous architectural choices: spatially expressive decoders that dilute representational capabilities of the scene encoder, and low\-level pixel\-space targets that hinder feature learning\.    We present SNAP, a self\-supervised encoder\-decoder transformer that addresses both through a pose\-conditioned local decoder and a latent\-space reconstruction objective\.   SNAP is general purpose, and we show that it is on par or better than special\-purpose geometry\-supervised methods\.   SNAP also outperforms self\-supervised representations across five geometric tasks: visual localization, pose estimation, point correspondence, depth estimation, and robot manipulation\.   Remarkably, SNAP's patch tokens exhibit emergent viewpoint invariance that rivals heavily supervised models despite lower compute and data budgets\. Under severe camera shifts where standard 2D representations collapse, SNAP maintains strict spatial consistency, revealing that restricting decoder expressivity actively prevents the suppression of transferable geometric structure\.

## Embedding Foundation Model Predictions in Discrete\-Choice Models with Structural Guarantees

**Authors:** Yingshuo Wang; Xian Sun; Yanhang Li; Zhichao Fan; Zexin Zhuang

**ID:** 153155 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NTGgX4PiPf>) | [PDF](<https://openreview.net/pdf?id=NTGgX4PiPf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153155>)

Tabular foundation models achieve strong accuracy on choice prediction tasks, but their predictions often violate the economic logic those tasks require: raising a price can increase predicted demand, implied willingness\-to\-pay estimates are frequently negative or implausible, and unavailable alternatives receive nonzero probability\. We propose a two\-stage adapter that takes a foundation model's predicted choice probabilities as a precomputed feature and embeds them inside a multinomial logit's utility\. In Stage 1, we fit the multinomial logit's structural coefficients by maximum likelihood with sign constraints; in Stage 2, we freeze those coefficients and fit a small neural correction operating on the foundation model's predictions\. We prove that this composition exactly preserves the multinomial logit's marginal rate of substitution, so analytically computable value\-of\-time becomes a mathematical guarantee rather than an empirical accident\. Across three datasets and two foundation models, the adapter gains 6\.4 percentage points \(pp\) of test accuracy on average over the multinomial logit and up to 12\.8 pp, maintains 100\\% cost monotonicity, and produces values of time within the published transportation\-economics range on the transportation datasets\. Performance degrades gracefully under foundation\-model context restriction, retaining at least 6 pp of accuracy gain even at 10\\% of the original foundation\-model context\.

## Submodular Clustering beyond $1\-1/e$

**Authors:** Kiarash Banihashem; Mohammadhossein Bateni; Hossein Esfandiari; Samira Goudarzi; MohammadTaghi Hajiaghayi

**ID:** 153766 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IpFLqxYStJ>) | [PDF](<https://openreview.net/pdf?id=IpFLqxYStJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153766>)

Submodular clustering provides a flexible framework for modeling coverage and     representation quality in metric spaces, capturing a broad range of     objectives arising in      machine learning,      including influence maximization, data summarization, and representation learning\.     Given a set of points $P$ in a metric space and a decreasing     service function $\\phi$, the goal is to select $k$ centers $U$ to maximize     total service $\\sum\_\{p \\in P\} \\phi\(d\(U, p\)\)$, where $d\(U, p\)$ is the     distance from $p$ to its nearest center\. While this objective is submodular     and admits a standard $1 \- 1/e$ approximation via greedy algorithms, it has     remained unclear whether and when this barrier can be surpassed\. We resolve this question by characterizing exactly which functions $\\phi$     permit approximation guarantees beyond $1\-1/e$\. We identify a natural     parameter $\\gamma\_\\phi$ capturing how rapidly $\\phi$ decreases,      and show     that, assuming $\\mathrm\{P\} \\ne \\mathrm\{NP\}$,     a better\-than $1\-1/e$ approximation ratio is achievable in polynomial time     if and only if $\\gamma\_\\phi &gt; 0$\.

## RTEB: An Overfitting\-Resistant Benchmark for Embedding Model Evaluation

**Authors:** Sahil Verma; Minghan Li; Andrew Gaut; Yujie Qian; Kaidi Cao; Zhenmei Shi; Kenneth Enevoldsen; Roman Solomatin; Isaac Chung; Tom Aarsen; Apoorva Joshi; Emilia Garcia\-Casademont; Michael Günther; Niklas Muennighoff; Yevhen Kostiuk; Fődi Zoltán; Tengyu Ma; Frank Liu

**ID:** 139103 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ktfYzbgPfX>) | [PDF](<https://openreview.net/pdf?id=ktfYzbgPfX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139103>)

Embedding models are central to modern information retrieval, retrieval\-augmented generation, and downstream NLP systems, yet their evaluation remains unreliable: widely used benchmarks such as BEIR and MTEB rely on fully public datasets, making them vulnerable to overfitting that inflates scores without corresponding gains in real\-world generalization\. We introduce RTEB, a retrieval\-focused embedding benchmark designed to address these limitations\. Unlike MTEB's broad multi\-task scope, RTEB is purpose\-built for retrieval \-\- the setting most critical to RAG pipelines and agentic systems\. RTEB emphasizes underrepresented yet high\-impact domains, particularly code and agentic code retrieval, and keeps a large portion of its datasets private to structurally prevent direct test\-set overfitting\. We evaluate 20 models on 48 datasets \(20 public, 28 private\) spanning six domains and four languages\. Rankings on RTEB diverge substantially from BEIR and MTEB \($\\rho = 0\.38$\), agentic code retrieval emerges as the hardest domain with the best model reaching only 0\.48 NDCG@10, and domain\-specialized models fail to outperform strong generalists on any domain\. Together, these design choices and findings position RTEB as a more reliable, discriminative, and future\-proof benchmark for embedding model evaluation\.

## Approaching Effective Merging in Model Embedding Space

**Authors:** Wei Chen; Zhenyuan Dong; Qiang Qiu

**ID:** 149693 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o8ovLEF82T>) | [PDF](<https://openreview.net/pdf?id=o8ovLEF82T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149693>)

With the growing number of fine\-tuned variants derived from pre\-trained models, model merging emerges as a key challenge: effectively integrating task\-specific adaptations while preserving performance\. However, naive weight averaging often fails when parameter updates are misaligned, revealing the need for a structured space in which merging becomes principled\. In this work, we hypothesize that pre\-trained models possess an intrinsic low\-rank structure\. Specifically, we posit that the transformation from input to output is mediated by a latent bottleneck of low intrinsic dimensionality; we leverage this low\-dimensional space to construct a model embedding space\. This space ensures that fine\-tuned updates, i\.e\., model embeddings, of all adaptations remain confined within the intrinsic structure of the pre\-trained model\. As model embeddings lie in the same low\-dimensional space, model merging via direct averaging becomes more effective\. Moreover, we further introduce an aligned subspace of these model embeddings to improve the efficacy of model merging\. Experiments across vision and multimodal tasks, including ViT and multimodal LLMs, demonstrate that our approach enables effective model merging and provides a unified geometric view of adaptation and combination in pre\-trained models\.

## Learning a Maximum Entropy Model for Visual Textures using Diffusion

**Authors:** Xinyuan Zhao; Eero Simoncelli

**ID:** 154116 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G8agvphCZJ>) | [PDF](<https://openreview.net/pdf?id=G8agvphCZJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154116>)

Visual textures, defined as spatially homogeneous image regions  containing repeated elements \(e\.g\. a field of grass, the bark of a tree\), are ubiquitous in visual scenes and provide important cues for recognizing materials and objects\. Existing texture models extract essential statistics from a single texture image, and can then generate high\-quality samples that are visually similar to the original by matching these statistics\. However, their statistics are either hand\-designed or based on a network pretrained for another purpose \(e\.g\., object recognition\)\. Here, we develop the first principled method for unsupervised learning of a set of statistics that are used to constrain a maximum entropy probability model\. We leverage methods developed for generative diffusion models to derive training and sampling procedures, and compare these to the traditional method of sampling via matching the statistics\. Despite the compactness of our trained model \(512 statistics\), it generates texture images whose quality is as good or better than the current state\-of\-the\-art model \(\~177k statistics\)\. A more direct comparison of the two models, obtained by synthesizing images that are indistinguishable for one model but maximally different for the other, reveals their relative strengths and weaknesses\. Finally, we show that, unlike previous statistical texture models, a straight trajectory in the representation space of our model generates homogeneous texture samples that interpolate smoothly between the features of the two end points\.

## Learning Orthonormal Bases for Function Spaces

**Authors:** Hamidreza Kamkari; Mohammad S Nabizadeh; Justin Solomon

**ID:** 155306 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6ZYEKF9qcC>) | [PDF](<https://openreview.net/pdf?id=6ZYEKF9qcC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155306>)

Infinite\-dimensional orthonormal basis expansions play a central role in representing and computing with function spaces due to their favorable linear algebraic properties\. However, common bases such as Fourier or wavelets are fixed and do not adapt to the structure of a given problem or dataset\. In this paper, we aim to represent these bases with neural networks and optimize them\. Our key idea is that any target infinite\-dimensional orthonormal basis can be viewed either as a point on the Lie manifold of the orthogonal group, or equivalently, as the endpoint of a continuous path on that manifold that connects a reference basis, e\.g\. Fourier, to that target\.  Paths on the Lie manifold satisfy ordinary differential equations \(ODEs\) governed by skew\-adjoint integral operators\. Using neural networks to define finite\-rank generators of such ODEs allows us to parameterize and optimize orthonormal bases in function space\. While relying on finite\-rank generators to model infinite operators might seem restrictive, we prove a universality result: even with a rank\-2 generator, the integrated solutions of the ODE are dense in the orthogonal group under the appropriate operator topology\. In other words, for any target orthonormal basis, there exists a path originating from a reference basis and driven by finite\-rank generators that gets arbitrarily close to that target basis\. We demonstrate the flexibility of our framework by transforming the Fourier basis into the principal components of a functional dataset, eigenfunctions of linear operators, or dynamic modes of energy\-preserving physical simulations\.

## SEISMOS: A Statistical Signal Detection Framework for Semantic Chunking

**Authors:** Ishtiak M Saad; Mominul Islam; Shahriyar Z Ridoy; Md Manjurul Ahsan; Azmine Toushik Wasi

**ID:** 153238 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MiRf0wVbnB>) | [PDF](<https://openreview.net/pdf?id=MiRf0wVbnB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153238>)

Chunking is a hidden bottleneck in dense retrieval and retrieval\-augmented generation: it determines the units that can be indexed, retrieved, and ultimately used as evidence\. Yet most systems still segment documents using fixed token windows or globally thresholded semantic similarity drops, treating chunking as an engineering heuristic rather than a statistical decision\. We propose \*\*SEISMOS\*\*, a statistical signal detection framework for semantic chunking\. \*\*SEISMOS\*\* models consecutive sentence\-embedding cosine similarities as a document\-level signal and derives boundary decisions from the null hypothesis of no semantic transition\. Across four development BEIR corpora, we establish three corpus\-invariant properties: bimodal document structure, rapid survival decay of shallow local minima, and positive lag\-1 autocorrelation\. These properties show that semantic boundaries should be detected by variance\-normalized deviations, not by document means or global similarity thresholds\. Accounting for autocorrelation leads to a normalized discrete Laplacian detector that identifies significant semantic valleys through a single interpretable decision rule\. Evaluated on five BEIR benchmarks, \*\*SEISMOS\*\* consistently improves over fixed\-length, recursive, and production semantic chunking baselines under one fixed operating configuration\. Without corpus\-specific retuning, the same detector transfers to a held\-out TREC\-COVID corpus\. Our results suggest that the boundaries needed for effective retrieval are already encoded in embedding\-similarity signals, and that principled, efficient, LLM\-free chunking can be obtained by detecting them statistically\.

