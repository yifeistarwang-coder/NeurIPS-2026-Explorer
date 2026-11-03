# Data\-centric AI / Data augmentation

以数据为中心的人工智能 / 数据增强

26 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Pose6DAug: Physically Plausible Multi\-View Object Swapping for Robot Data Augmentation

**Authors:** Jonghoon Lee; Seong Hyeon Park; Minha Lee; Byungwoo Jeon; Jinwoo Shin

**ID:** 155020 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=97Qo8sjV7p>) | [PDF](<https://openreview.net/pdf?id=97Qo8sjV7p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155020>)

Vision\-language\-action \(VLA\) policies have shown strong potential for general\-purpose manipulation, yet they often fail on novel, out\-of\-distribution objects whose appearance or geometry deviates from the training distribution\. The standard remedy is to collect multi\-view teleoperation data for every failure case, but this scales poorly in both cost and time\. We introduce Pose6DAug, a failure\-driven data augmentation framework that turns a policy’s own successful episodes into targeted demonstrations for its failure modes, without any new data collection\. Our key insight is that each successful episode already encodes a physically valid action trajectory together with calibrated multi\-view observations\. By swapping only the manipulated object while preserving this trajectory, we obtain new and physically grounded demonstrations\. However, the challenge lies in synthesizing object swaps, e\.g\., naive 2D video editing breaks multi\-view consistency and physical plausibility, particularly under heavy occlusion and egocentric viewpoints\. Our method instead operates directly in 3D, anchoring the target object with an explicit mesh driven by a temporally coherent 6D pose trajectory\. This ensures geometrically consistent renderings across all camera views\. Fine\-tuning a VLA on data augmented by our method improves success rates by 16\.5% relative to the state\-of\-the\-art baseline on novel objects, while preserving in\-distribution performance\. These results show that multi\-view and physically consistent augmentation is a practical path to scalable VLA generalization\.

## Towards Real\-Time Full\-Waveform LiDAR Transformers via Intensity\-Guided Token Reduction and Physics\-Aware Augmentation

**Authors:** Kazuma Ikeda; Kotaro Oishi; Ryosei Hara; Ryo Yoshida; Mariko Isogawa; Kazuma Ikeda

**ID:** 152397 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TOfHGk54P0>) | [PDF](<https://openreview.net/pdf?id=TOfHGk54P0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152397>)

LiDAR is a critical sensor for autonomous driving and robotics, yet it remains vulnerable to adverse conditions such as fog, rain, transparent objects, and low\-reflectance surfaces\. Full\-waveform LiDAR \(FWL\) addresses these limitations by capturing the complete return waveform as a histogram, preserving rich reflection characteristics including multi\-path echoes and weak signals\. While recent Transformer\-based approaches have demonstrated promise on FWL data, two fundamental bottlenecks remain: high computational cost from redundant tokens in low\-intensity background regions, and limited generalization due to scarce annotated training data\. We address both bottlenecks by exploiting the physical structure inherent to FWL data\. First, we propose FWL\-ToPM, a token pruning and merging mechanism that leverages intensity distributions to selectively reduce tokens while retaining critical waveform content\. Second, we introduce FWLAug, a physically consistent data augmentation framework that preserves time\-of\-flight waveform structure and frustum geometry to improve generalization across diverse environments\. Evaluated on the Ghost\-FWL benchmark, FWL\-ToPM achieves over 8$\\times$ speedup at real\-time throughput alongside a nearly 9\-point F1 gain, establishing the first real\-time FWL Transformer that simultaneously improves accuracy\. FWLAug further improves generalization to both standard and out\-of\-distribution environments\. Together, these methods push FWL\-based perception toward practical deployment\.

## Crossing the Validation crisis: Cross\-validation reduces benchmarking variance surprisingly well

**Authors:** Célestin Eve; Gael Varoquaux; Thomas Moreau

**ID:** 139193 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fOqEGBqN5y>) | [PDF](<https://openreview.net/pdf?id=fOqEGBqN5y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139193>)

Modern machine learning progresses through empirical work, benchmarking new methods to evaluate relative performance\. However, the statistical variability inherent to evaluation \-\- exacerbated by the stochastic nature of many algorithms \-\- often makes performance estimation unreliable due to the limited test samples available, leading to a validation crisis in which genuine advances are difficult to discern\. In this work, we show that cross\-validation improves markedly confidence when evaluating and comparing learning algorithm performances\. We introduce the concept of \\emph\{sample gain\}, which quantifies the virtual data augmentation achieved by using multiple cross\-validation splits to reduce benchmarking variance\. Experiments on both synthetic and real\-world datasets \(histopathologic scans and NLP fine\-tuning\) demonstrate that multiple splits can substantially improve the reliability and stability of performance estimates, with diminishing returns often setting in later than expected\. We also introduce a procedure to dynamically early\-stop cross\-validation by estimating from the first few folds if subsequent folds will bring large sample gains\. Our findings highlight the value of pushing cross\-validation on available samples to achieve robust and reliable benchmarking\.

## RSSA: Robust Semantic and Spatial Aligner for Collaborative Perception

**Authors:** Zhihao Yang; Zhiyu Xiang; Peng Xu; Tianyu Pu; Kai Wang; Eryun Liu; Dongping Zhang; Yong Ding

**ID:** 149417 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qCLfuRLXY4>) | [PDF](<https://openreview.net/pdf?id=qCLfuRLXY4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149417>)

V2X collaborative perception improves single\-vehicle perception by aggregating multi\-view features from collaborative agents\. However, existing methods typically rely on simple spatial warping to align the collaborative features, which can cause semantic misalignment during fusion\. Meanwhile, these deterministic warping\-based methods are highly sensitive to the positional noises\. In this paper, we propose a plug\-in module called Robust Semantic and Spatial Aligner \(RSSA\), which performs semantic and probabilistic spatial transformations for robust feature alignment\. Specifically, a Semantic Transformation \(SemT\) block modulates feature channels based on the observed relative pose to correct semantic inconsistencies\. Subsequently, a Probabilistic Spatial Transformation \(P\-SpaT\) block performs probabilistic warping by sampling from the Gaussian\-modeled relative pose space\. A Relative Transformation Augmentation \(RT\-Aug\) strategy is further introduced to augment the relative poses and facilitate the training of the RSSA\. Extensive experiments on both simulated and real\-world datasets demonstrate that RSSA improves the state\-of\-the\-art methods by a large margin under the configuration of both clean and noisy positions\.

## LOCO: Local Light\-Aware Object Compositing with Spatially Varying Illumination\-Augmented Data

**Authors:** Jinseo Jeong; Hyunsoo Kim; Junseo Koo; Junhyeog Yun; Gunhee Kim; Soo Ye Kim

**ID:** 153475 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L5lQiud81M>) | [PDF](<https://openreview.net/pdf?id=L5lQiud81M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153475>)

In natural scenes, light sources and occlusions from scene geometry create spatially varying illumination, including brightness gradients, cast shadows, and local color shifts that shape how every object appears\. A less explored aspect of diffusion\-based object compositing is whether an inserted object can adapt to this local illumination at the desired location\. The core challenge to achieve this is the scarcity of large\-scale training data capturing how object appearance should adapt to location\-dependent illumination\. We present LOCO, a data augmentation framework for LOcal light\-aware object COmpositing that leverages publicly available monocular videos as illumination sources\. We treat each video frame as a virtual spotlight anchored at its camera pose, so that viewpoint variation across a video yields diverse light directions\. With controllable beam shape, color, and intensity, this design enables large\-scale generation of training data for placement\-dependent illumination on the fly\. We also introduce LOCO\-bench, a benchmark of physically captured composites under spatially varying illumination, where the same object is placed at multiple locations within each scene\. Experiments on Laval Indoor SV HDR and LOCO\-bench show that LOCO outperforms prior methods in local illumination adaptation while preserving object identity\.

## Parallel\-in\-Time Training of Recurrent Neural Networks for Dynamical Systems Reconstruction

**Authors:** Florian Hess; Florian Götz; Daniel Durstewitz

**ID:** 148849 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uhe6KW6jyO>) | [PDF](<https://openreview.net/pdf?id=uhe6KW6jyO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148849>)

Reconstructing nonlinear dynamical systems \(DS\) from data \(DSR\) is a fundamental challenge in science and engineering, but it inherently relies on \*sequential\* models\. Recent breakthroughs for sequential models have produced algorithms that parallelize computation along sequence length $T$, achieving logarithmic time complexity, $\\mathcal\{O\}\(\\log T\)$\. Since sequence lengths have been practically limited due to the linear runtime complexity $\\mathcal\{O\}\(T\)$ of classical backpropagation through time, this opens new avenues for DSR\. This paper studies two prominent classes of parallel\-in\-time algorithms for this task, both of which leverage \*parallel associative scans\* as their core computational primitive\. The first class comprises models with linear yet non\-autonomous dynamics and a nonlinear readout, such as modern State Space Models \(SSMs\), while the second consists of general nonlinear models which can be parallelized using the DEER framework\. We find that the linear training\-time recurrence of the first class of models imposes limitations that often hinder learning of accurate nonlinear dynamics\. To address this, we augment DEER with Generalized Teacher Forcing \(GTF\), a novel variant within the more general nonlinear framework that ensures stable and effective learning of nonlinear dynamics across arbitrary sequence lengths\. Using GTF\-DEER, we investigate the benefits of training on extremely long sequences \($T&gt;10^4$\) for DSR\. Our results show that access to such long trajectories significantly improves DSR if the data features long time scales\. This work establishes GTF\-DEER as a robust tool for data\-driven discovery and underscores the largely untapped potential of long\-sequence learning in modeling complex DS\.

## How Data Augmentation Shapes Neural Representations

**Authors:** Tianxiao He; Alex Williams; Sarah Harvey

**ID:** 150878 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eiZLHRQOAE>) | [PDF](<https://openreview.net/pdf?id=eiZLHRQOAE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150878>)

Data augmentation is widely recognized for improving generalization in deep networks, yet its impact on the geometry of learned representations remains poorly understood\. In this work, we characterize how different data augmentation strategies reshape internal representations in neural networks\. Using tools from shape analysis, we embed network hidden representations into a metric space where distance is invariant to scaling, translation, rotation and reflection\. We show that increasing augmentation strength leads to well\-behaved trajectories in this space, and that different augmentation types steer representations in distinct directions\. Moreover, we investigate how neural representation shapes are distorted along data augmentation trajectories, and show that insights from neural geometry can predict which representations provide the most improvement when ensembling models\. Our results reveal shared geometric patterns across architectures and seeds, and suggest that analyzing shape\-space trajectories offers a principled tool for understanding and comparing data augmentation methods\.

## Test\-Time Graph Anomaly Detection via Shifted Augmentation with Dynamic Objective Scheduling

**Authors:** Chunjing Xiao; Ruobing Fan; Tian Zhao; Fan Zhou; Chong Tang; Ying Ma

**ID:** 153400 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Lelz20rA0P>) | [PDF](<https://openreview.net/pdf?id=Lelz20rA0P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153400>)

Graph anomaly detection \(GAD\) is critical to many real\-world systems\. However, supervised GAD models often degrade under distribution shifts due to the closed\-world training assumption\. Test\-time adaptation \(TTA\) offers a promising solution by updating pre\-trained models with unlabeled test data\. Yet, applying TTA to GAD poses a unique dilemma\. High\-confidence samples provide reliable pseudo\-labels, but they are scarce and biased toward low\-shift regions\. Low\-confidence samples better reflect target shifts, but they are too noisy for direct cross\-entropy optimization and often require label\-free objectives that are misaligned with anomaly discrimination\. To address this dilemma, we propose SADOS, a Shifted Augmentation\-based Dynamic Objective Scheduling framework for test\-time GAD\. SADOS turns unreliable target samples into drift\-carrying signals for reliable supervised adaptation\. It distills prototypes from confidence\-stratified unreliable samples and injects them into reliable samples to generate label\-preserving yet shift\-oriented augmentations\. This expands coverage over shifted target regions\. In parallel, SADOS dynamically schedules the adaptation objective\. It uses contrastive learning to capture early\-stage drift signals, and gradually anneals its weight so that classification\-oriented anomaly detection dominates later adaptation\. Extensive experiments demonstrate that SADOS robustly improves test\-time GAD under distribution shifts\.

## Class–Domain Discriminability Guided Representation Enhancement for Domain Generalization

**Authors:** Bin Zheng; Junbiao Cui; Jiao Zhao; Jiye Liang

**ID:** 152601 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RufkPejvKs>) | [PDF](<https://openreview.net/pdf?id=RufkPejvKs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152601>)

Domain Generalization \(DG\) aims to leverage multiple source domains to train models that can generalize to unseen target domains, thereby mitigating the performance degradation caused by domain shifts\. Most existing approaches impose unified alignment or suppression constraints in the global feature space, overlooking the heterogeneity of feature channels in terms of class discriminativeness and domain stability\. Such coarse\-grained constraints may lead to the loss of discriminative information or the retention of domain\-sensitive features\. To address this issue, we propose a novel DG framework consisting of two core modules: Channel Sensitivity Decomposition \(CSD\), which employs channel\-wise response variances along the class and domain dimensions as empirical proxy signals to partition feature channels into four functional subspaces via a continuous and differentiable soft decomposition mechanism; and Subspace\-Specific Feature Augmentation \(SSA\), which implements tailored augmentation and regularization strategies for different subspaces to suppress environment\-related spurious correlations while preserving cross\-domain stable discriminative features\. Additionally, a KL\-divergence\-based prediction consistency constraint is introduced to stabilize the training process and enhance model robustness\. Extensive experiments on multiple standard DG benchmarks demonstrate that our framework consistently outperforms state\-of\-the\-art methods\.

## Skipping Domain Shifts: Domain Memory Retention Enhanced Hyperspectral Single\-Source Domain Generalization

**Authors:** Taiqin Chen; Hao Sha; Xiaochen Feng; Chunyu Chen; XiangYu Chen; Ke Chen; yongbing zhang

**ID:** 148267 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z7Qi9Npr3f>) | [PDF](<https://openreview.net/pdf?id=z7Qi9Npr3f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148267>)

Hyperspectral single\-source domain generalization aims to train a robust model capable of overcoming domain shifts using only one available source domain for cross\-scene hyperspectral image \(HSI\) analysis\. Existing methods typically adopt data augmentation to broaden decision boundaries or utilize style transfer techniques for test\-time alignment\. However, these studies either fail to completely bridge the domain gap or inadvertently disrupt the discriminative spectral information, leading to suboptimal generalization and degraded classification performance on the target domain\. To overcome these limitations, we propose a novel method, termed the domain memory retention framework, which optimizes domain memory during training to explicitly encode the semantic structure of the source domain\. During inference, the target features are projected to the source distribution by leveraging this memory, thereby skipping domain shifts and improving generalization performance across unseen scenes\. Specifically, the memory is formulated as a codebook, consisting of multiple semantic codewords\. We further develop a semantic richness constraint and a perturbation robustness constraint to enhance representation diversity while empowering domain invariance for the memory\. Extensive experiments conducted on three remote sensing datasets demonstrate that the proposed method outperforms state\-of\-the\-art methods\.

## D\-GAP: Improving Out\-of\-Domain Robustness via Dataset\-Agnostic and Gradient\-Guided Augmentation in Amplitude and Pixel Spaces

**Authors:** Ruoqi Wang; Haitao Wang; Shaojie Guo; Qiong Luo

**ID:** 153375 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Lqa5ffpkXU>) | [PDF](<https://openreview.net/pdf?id=Lqa5ffpkXU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153375>)

Out\-of\-domain \(OOD\) robustness is challenging to achieve in real\-world computer vision, especially in unsupervised domain adaptation scenarios, where shifts in image background, style, and acquisition instruments often degrade model performance\.  Generic augmentations show inconsistent gains under such shifts, whereas dataset\-specific augmentations require expert knowledge and prior analysis\. Moreover, prior studies show that neural networks adapt poorly to domain shifts because they exhibit a learning bias to domain\-specific frequency components\. Perturbing frequency values can mitigate such bias but overlooks pixel\-level details, leading to suboptimal performance\. To address these limitations, we propose D\-GAP, a Dataset\-agnostic and Gradient\-guided augmentation method for the Amplitude spectrum \(in frequency space\) and the Pixel values\. Unlike conventional handcrafted augmentations, D\-GAP computes sensitivity maps in the frequency space from task gradients, which reflect how strongly the deep models respond to different frequency components, and uses the maps to adaptively interpolate amplitudes between source and target samples\. We further propose a dual\-space augmentation that jointly controls spectral bias and spatial fidelity by introducing a complementary pixel\-space blending branch\. This way, D\-GAP turns augmentation from fixed, random, or manually designed perturbation into a model\-response\-adaptive intervention\. Extensive experimental results show that the proposed method consistently outperforms both generic and dataset\-specific domain adaptation methods, improving average OOD performance by \+5\.3% on four real\-world datasets and \+1\.9% on three benchmark datasets\.

## NGDB\-Zoo: Towards Efficient and Scalable Neural Graph Databases Training

**Authors:** zhongwei xie; Jiaxin Bai; Shujie LIU; Haoyu Huang; LI Yufei; Yisen Gao; Hong Ting Tsang; Yangqiu Song

**ID:** 154653 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C1tuC3Hfob>) | [PDF](<https://openreview.net/pdf?id=C1tuC3Hfob>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154653>)

Neural Graph Databases \(NGDBs\) support complex logical reasoning over incomplete knowledge structures, yet their training efficiency and expressivity are constrained by rigid query\-level batching and structure\-only embeddings\. We present NGDB\-Zoo, a unified framework that resolves these bottlenecks by synergizing operator\-level training with semantic augmentation\. By decoupling logical operators from query topologies, NGDB\-Zoo transforms training loops into dynamically scheduled data\-flow executions, enabling multi\-stream parallelism and achieving a $1\.8\\times$\-$6\.8\\times$ average throughput compared to baselines\. Furthermore, we formalize a decoupled architecture to integrate semantic priors from pre\-trained text embeddings without triggering I/O stalls or memory overflows\. Experiments on six benchmarks, including $\\textit\{ogbl\-wikikg2\}$ and $\\textit\{ATLAS\-Wiki\}$, show that NGDB\-Zoo scales dense query\-embedding training to million\-entity graphs while maintaining competitive filtered MRR\.

## MeshFIM: Local Low\-Poly Mesh Editing via Fill\-in\-the\-Middle Autoregressive Generation

**Authors:** Dingdong Yang; Jian Liu; Biwen Lei; Haohan Weng; Zhuo Chen; Song Guo; Hao Zhang; Ali Mahdavi Amiri; Chunchao Guo

**ID:** 155900 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=20I21ZHLci>) | [PDF](<https://openreview.net/pdf?id=20I21ZHLci>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155900>)

Autoregressive \(AR\) models can generate high\-quality low\-poly meshes from point clouds, but they still operate in an all\-or\-nothing manner: when a local region is unsatisfactory, the entire mesh must be regenerated, wasting computation and destroying satisfactory mesh structure elsewhere\. We introduce MeshFIM, a Fill\-in\-the\-Middle \(FIM\) framework that regenerates a target region of a low\-poly mesh conditioned on the surrounding context\. MeshFIM addresses three mesh\-specific challenges: enforcing exact attachment along the exposed boundary, preserving topological order in the context, and suppressing overflow beyond the intended region\. It does so with five complementary design choices: boundary vertex markers, context positional embeddings, expanded context width, context augmentation, and a low\-poly geometry encoder whose gated subtraction mechanism focuses generation on the missing region by leveraging the difference between the reference surface and the existing mesh\. Detailed ablation studies are presented to show the effectiveness of every introduced component\. Based on MeshFIM, we demonstrate two applications: interactive brush\-based editing and automatic defect repair on low\-poly mesh \(see Figure 1\)\. Last but not least, experiments show that MeshFIM outperforms a range of baselines in mesh refinement, mesh repair and whole mesh generation plus stitch\-back scheme\.

## Characterizing the Generalization Error of Random Feature Regression with Arbitrary Data\-Augmentation

**Authors:** Lucas Morisset; Alain Durmus; Adrien Hardy

**ID:** 153550 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KXzh31eKa0>) | [PDF](<https://openreview.net/pdf?id=KXzh31eKa0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153550>)

This paper aims at analyzing the regularization effect that data augmentation  induces on supervised regression methods in the proportional regime,  where the number of covariates grows proportionally to the number of samples\.  We provide a tight characterization of the test error, measured in mean squared error,  in terms only of the population quantities of the true data,  as well as first and second order statistics of the augmentation scheme\. Our results are valid under misspecified feature maps,  and for any network architecture where only the last readout layer is trained,  and the rest of the network is either frozen or randomly initialized\. We specify our results in the case of Gaussian data,  and show that our asymptotic characterization is tight in this setting\.

## AlignDrive: Aligned Lateral\-Longitudinal Planning for End\-to\-End Autonomous Driving

**Authors:** Yanhao Wu; Haoyang Zhang; Fei He; Rui Wu; Yanhu Shan; Congpei Qiu; Liang Gao; Wei Ke; Tong Zhang

**ID:** 152098 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VXtoyI6yEY>) | [PDF](<https://openreview.net/pdf?id=VXtoyI6yEY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152098>)

Practical autonomous driving requires models that generalize by reasoning through spatial\-temporal possibilities to exclude unsafe outcomes\. While state\-of\-the\-art \(SOTA\) methods use parallel planning architectures, they fail to explicitly couple speed decisions with agent behavior along the driving path, leading to suboptimal coordination\. To address this, we propose a cascaded framework that transforms longitudinal planning from an independent prediction task into a path\-conditioned reasoning process\. On the model side, we introduce an anchor\-based regression design that conditions longitudinal prediction on the lateral drive path, and reformulate longitudinal planning as 1D displacement prediction along the path\. This reduces geometric uncertainty and sharpens the model's focus on interaction\-driven dynamics\. On the data side, we introduce a planning\-oriented data augmentation strategy that simulates rare safety\-critical events by programmatically inserting agents and relabeling longitudinal targets to enforce collision avoidance\. Evaluated on the challenging Bench2Drive benchmark, our method achieves SOTA performance with a driving score of 89\.07 and a success rate of 73\.18\\%, demonstrating significantly improved coordination and safety\. Further evaluation on Fail2Drive confirms strong generalization to rare edge cases where parallel formulations typically fail\. Visualization videos are provided in the supplementary material\.

## OHATP: Graph Anomaly Detection with Orthogonal\-Hyperspherical Augmentation and Topology Perception

**Authors:** yihang qiu; Yi Zhang; Di Xiong; Ge Gao; Shuo Chen

**ID:** 155542 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4mRMtwcvXD>) | [PDF](<https://openreview.net/pdf?id=4mRMtwcvXD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155542>)

Contrastive Learning \(CL\) has been widely used for Graph Anomaly Detection \(GAD\)\. However, existing augmentation techniques in such CL frameworks usually rely on random masking or structural alterations, which obliterates the irregularities that define anomalies and leads to \*anomaly distortion\*\. Even improved methods using \*multi\-scale sampling\* usually suffer from \*blind contextual extraction\*, which risks disrupting critical topological structures or introducing irrelevant information in the learned representations, thereby hardly capturing complex anomalies\. In this paper, we propose Orthogonal\-Hyperspherical Augmentation and Topology Perception \(\*\*OHATP\*\*\), a novel method that leverages the synergies at both the \*feature\* and \*structure\* levels to mitigate anomaly distortion and \*blind sampling defects\*\. Specifically, during \*feature\-level\* augmentation, we adapt projections and noise based on node \*message\-passing\* influence to strengthen \*feature diversity\*, while utilizing projection orthogonality and hyperspherical noise constraints to preserve \*feature discriminability\*\. To complement this feature\-level augmentation, we design a \*structure\-level\* topology perception module that leverages the high\-quality representations learned from augmentation to screen abnormal dense substructures\. Extensive experiments on benchmark datasets demonstrate that OHATP substantially outperforms state\-of\-the\-art methods, achieving improvements of over 6\\% in AUROC and 29\\% in AUPRC\. Code is available at \[https://anonymous\.4open\.science/r/OHATP\-83D7\]\(https://anonymous\.4open\.science/r/OHATP\-83D7\)\.

## Winning the Symmetry Lottery: Learning Invariance from Data Augmentations with Transformers

**Authors:** Eduardo Santos\-Escriche; Valerie Engelmayer; Ya\-Wei Eileen Lin; Stefanie Jegelka

**ID:** 149811 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nBGsp2c8X6>) | [PDF](<https://openreview.net/pdf?id=nBGsp2c8X6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149811>)

Training transformer\-based architectures with data augmentation has become an increasingly popular approach for equivariant machine learning\. Despite its empirical success, the interplay between the transformer architecture, invariance to different symmetries, and augmentation budgets remains underexplored\. In this paper, we investigate the ability of a vanilla transformer to learn a wide range of symmetries through limited data augmentation\. We identify that it performs strongly for common angle\-preserving symmetries, while it struggles with non\-angle\-preserving ones\. Within the angle\-preserving family, we further find that base subgroups such as translation, rotation, and scale are learned more easily and accurately than compositional groups that combine them\. Motivated by this observation, we perform a structural analysis of the trained models and identify interpretable mechanisms that induce invariance to each base angle\-preserving symmetry\. These findings support what we coin winning the \*Symmetry Lottery\*: the transformer architecture is aligned with learning mechanisms invariant to symmetries that happen to be prevalent in scientific domains\.

## Online Fair Division Meets Reordering Buffers

**Authors:** Georgios Amanatidis; Giulio Giaconi; Evangelos Markakis; Nicos Protopapas

**ID:** 153060 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OJg3z0LXM4>) | [PDF](<https://openreview.net/pdf?id=OJg3z0LXM4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153060>)

We study the \_online fair division\_ of indivisible \_mixed manna\_ among agents with additive valuation functions\. Under the standard online model, at each time step an indivisible item arrives; each agent may assign it a positive, negative, or zero value, and it must be irrevocably allocated, before the arrival of the next item\. At the same time, we also wish to maintain some fairness guarantee, and in this work we focus on \_envy\-freeness\_ \(EF\) and one of its most prominent relaxations, \_envy\-freeness up to one item\_ \(EF1\)\. Given the strong negative and the scarce positive results for this problem without additional assumptions, we augment our algorithms with \_buffers\_ that can store and rearrange a limited number of items\. This setting interpolates naturally between the fully online case \(no buffer\) and the fully offline case \(a buffer large enough to hold all items\)\. We show that algorithms equipped with reasonably sized buffers can achieve strong guarantees for personalized $k$\-value instances, i\.e\., instances in which each agent assigns at most $k$ distinct values to items\. In particular, we construct allocations that are EF1 at every time step and EF at most time steps, using a buffer of size linear in $k$ and in the number of agents\. Our approach relies on novel combinatorial arguments and on constructing a sequence of envy\-free matchings that allocates most items\. Finally, we extend our results to general additive valuation functions, with a dependence on the largest per\-agent ratio between two values of the same sign, and we also identify limitations of our approach via impossibility results on the use of buffers with smaller size\.

## Exact Regular\-Constrained Sampling for Variable\-Order Markov Generation

**Authors:** Francois Pachet

**ID:** 155888 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=25TuIlUEUu>) | [PDF](<https://openreview.net/pdf?id=25TuIlUEUu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155888>)

Variable\-order Markov models generate by backing off to the longest usable suffix of the generated history, while regular constraints describe finite horizon controls such as fixed endings, metrical patterns, and anti\-copy rules\. Existing belief\-propagation methods give exact regular\-constrained sampling for first\-order Markov chains, but a first\-order state merges histories that a variable\-order generator deliberately keeps distinct\. We give the corresponding variable\-order construction: replace the Markov state by the sparse observed context state and compose this context graph with the regular constraint automaton\. For a fixed context graph and automaton, inference is linear in the horizon and in the number of reachable product edges, without expanding to all $\|\\mathcal\{V\}\|^K$ histories; the same source\-row interface handles reversible augmentation by inverse count lookup, without materializing transformed corpora\. Tiny enumerated examples verify exact partition functions and conditional probabilities; Bach Prelude experiments show sparse regular\-constrained sampling at $K=6$ and 12\-key virtual transposition semantics from $592$ stored events\.

## Towards Understanding Self\-Pretraining for Sequence Classification

**Authors:** Omar Coser; Loredana Zollo; Paolo Soda; Antonio Orvieto

**ID:** 151883 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XC2lHn0w5A>) | [PDF](<https://openreview.net/pdf?id=XC2lHn0w5A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151883>)

Amos et al\. \(2024\) showed that the accuracy of Transformer models in sequence classification can be significantly improved by first pretraining with a masked token prediction objective without external data or augmentation, a procedure referred to as self\-pretraining \(SPT\)\. While the primary objective of Amos et al\. \(2024\) was to showcase that Transformers can achieve strong performance on the Long\-Range Arena \(LRA\), their pipeline raises more fundamental questions: How does SPT drive optimization to better solutions? Why can standard supervised training fail in Transformers? To better understand this, we replicate and systematically ablate the findings of Amos et al\.\~\(2024\)\. Our ablations suggest that a central bottleneck in the studied settings is not depth or generalization alone, but the ability of label supervision to learn useful query\-key Attention patterns from random initialization\. With a minimal setup, we identify learning proximity interactions \-\- turning absolute positional encodings into proximity\-biased Attention scores \-\- as a key source of the improvements brought by SPT\. Finally, in a simplified theoretical setup, we show that label supervision can be locally blind to certain Attention\-score directions that are instead detectable through masked reconstruction\.

## Stein Transport for Generative Modeling

**Authors:** Clémentine CHAZAL; Linfeng Wang; Anna Korba; Nikolas Nüsken

**ID:** 154118 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G8E7Hq2vAz>) | [PDF](<https://openreview.net/pdf?id=G8E7Hq2vAz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154118>)

We propose a nonparametric, kernel\-based approach to generative modeling based on Stein operators and particle transport\. Our method constructs a continuous\-time transport from a simple reference distribution \(typically, a standard Gaussian\) to a target distribution using a Stein formulation of the continuity equation\. Unlike alternative  Stein transport methods, which require access to the target density or its gradient, we focus on the sample\-only setting and introduce a tractable surrogate objective based on an Ornstein\-\-Uhlenbeck \(OU\) probability path\. This construction allows the velocity field driving the transport to be learned using only samples from the target distribution and Gaussian noise\. By restricting the velocity field to a reproducing kernel Hilbert space, we obtain closed\-form solutions via kernel ridge regression at each time step\. The resulting method is particularly well suited to small data regimes, where heavily parameterised neural generative models may be difficult to train or overfit\. We demonstrate the usefulness of the approach for sample\-based generative modeling in the small data regime \(generative data augmentation\), and for posterior emulation in Bayesian inverse problems, where expensive Monte Carlo samplers produce limited sets of posterior samples that must be efficiently augmented\.

## Boosting Brain\-to\-Image Decoding with TRIBE v2 Data Augmentation

**Authors:** Yohann Benchetrit; Marlene Careil; Simon Dahan; Hubert Banville; Stéphane d&amp;amp;\#x27;Ascoli; Jean\-Remi King

**ID:** 154738 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BOKCoQkBKJ>) | [PDF](<https://openreview.net/pdf?id=BOKCoQkBKJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154738>)

Brain decoding is limited by the availability of labeled neural data, and remains challenging in low\-data regimes\. To address this issue, we investigate whether and when brain decoding can be boosted by augmenting small fMRI datasets with synthetic data generated by a pretrained model of fMRI responses to stimuli\. We use TRIBE v2, a large encoding model pretrained on more than 1000\\,hours of fMRI responses to video, audio and language\. For each dataset, we evaluate systematic grids that show how the performance of image decoders varies with the amount of synthetic data used for training\. Our results, based on two datasets \(the 7T fMRI Natural Scenes Dataset and 3T fMRI BOLD5000\), show up to 68\\% improvement in Top\-10 image\-retrieval accuracy compared to decoders trained only on real data\. Importantly, the proportion of augmented data required to reach a given image decoding performance needs to be adjusted depending on the data source\. Surprisingly, image decoders trained exclusively on synthetic fMRI perform above chance in some settings, suggesting that TRIBE v2 can support zero\-shot fMRI\-to\-image decoding\. Together, these results show how large\-scale models of the fMRI responses to sight, sound and language may provide a foundation to improve the data efficiency for image decoding\.

## A Few Teacher Steps Go a Long Way: Cost\-Efficient On\-Policy Data Augmentation for Agent Post\-Training

**Authors:** Junze Ye; Jiayi Cheng; Miao Lu; Michal Mankowski; Jose Blanchet; Mohsen Bayati

**ID:** 150832 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=exsMozVjaF>) | [PDF](<https://openreview.net/pdf?id=exsMozVjaF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150832>)

Modern training pipelines for language model agents begin with a supervised fine\-tuning stage in which a small student imitates a costly teacher\. Recent work mitigates the covariate shift of pure imitation learning by collecting teacher feedback at states the student itself reaches, with a prevailing trend toward elaborate filters on the teacher's responses\. We frame this design choice as a budget\-allocation problem and compare three constructions of supervised training data: short unfiltered teacher continuations at learner\-induced states; full teacher trajectories filtered for success \(the rejection\-sampling step in recent on\-policy expert\-correction work\); or those further restricted to tasks the student cannot solve on its own\. Across three agentic benchmarks \(HotpotQA, ALFWorld, and Terminal\-Bench\-Dev\), short unfiltered teacher continuations beat pure behavioral cloning at matched supervision budgets, and on HotpotQA also match or exceed the filtered alternatives\. On Terminal\-Bench\-Dev, this construction at one\-tenth of the corpus budget and with no reinforcement\-learning stage matches the OpenThoughts\-Agent baseline that uses the full corpus together with reinforcement learning; the optimal continuation length is task\-dependent\. The same supervised\-learning checkpoints yield faster early\-stage gains under subsequent reinforcement learning, with mixed evidence on whether this advantage persists later in training\.

## Class\-Mixed Diffusion Augmentation for Shortcut\-Breaking in Continual Learning

**Authors:** Abhinab Acharya; Dayou Yu; Qi Yu; Xumin Liu

**ID:** 154098 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GGcrbkuKF6>) | [PDF](<https://openreview.net/pdf?id=GGcrbkuKF6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154098>)

Zero\-shot pre\-trained diffusion models can provide a training\-free source of synthetic image generation for Exemplar\-Free Class Incremental Learning \(EFCIL\)\. However, same\-class generation is limited by the distribution mismatch with real data\. Parameter\-allocation\-based EFCIL can minimize the forgetting in model parameters, yet the performance degrades because task\-id prediction fails when task\-specific feature extractors overcompress and converge to shortcut\-dominant representations\. We propose \\emph\{Class\-Mixed Diffusion Augmentation\} \(CMDA\) that uses diffusion models not only as past\-task data generators but also as controlled generators that challenge the shortcut reliance\. We sample candidate tokens from the vocabulary and select \\emph\{shortcut\-breaking\} tokens via classifier\-guided filtering, then treat the selected tokens as auxiliary classes during training\. We provide theoretical analysis linking shortcut sharing to an intrinsic lower bound on task\-id error and show that minimum\-CE selection recovers shortcut\-breaking tokens\. Experiments on Split\-CIFAR100 and Split\-ImageNet show consistent gains over EFCIL baselines, with modest overhead over vanilla diffusion augmentation and far lower cost than diffusion fine\-tuning or gradient\-guided sampling\.

## SkillsBench: Benchmarking How Well Agent Skills Work Across Diverse Tasks

**Authors:** Xiangyi Li; Yimin Liu; Wenbo Chen; Shenghan Zheng; Yifeng He; Xiaokun Chen; Bingran You; Haotian Shen; Yubo Li; Kyoung Whan Choe; Binxu Li; Shuyi Wang; Chris Kong; Xinyi Liu; Jiankai Sun; Runhui Wang; Xuanqing Liu; Jiachen Li; Xin Lan; Yuanli Wang; Xuandong Zhao; Yueqian Lin; Wengao Ye; Junwei He; Di Wang; Roey B Chaim; Songlin Li; Hanwen Xing; Yue Zhang; Yipeng Gao; Yijiang Li; Ze Ma; Liqiang Jing; Qunhong Zeng; Tianyu Wang; Kaixin Li; Yiqi Xue; Zonglin Di; Yizhuo He; Yuchen Tian; Yixuan Gao; Hejia Geng; Bo Chen; Litong Liu; Sikai Cheng; Zelin Tan; Jiajun Bao; Junwei Zhou; Shuaicheng Tong; Shuwen Xu; Penghao Jiang; Terry Yue Zhuo; Tinghan Ye; Chujun Tao; Qi Qi; Miao Li; Longtai Liao; Zhikang Dong; Chang Shi; Steven Dillmann; Han\-chung Lee

**ID:** 139353 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Utmr8dZbrt>) | [PDF](<https://openreview.net/pdf?id=Utmr8dZbrt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139353>)

Agent Skills are structured packages of procedural knowledge that augment LLM agents at inference time\. Despite rapid adoption, there is no standard way to measure whether they actually help\. We present SkillsBench, a paired benchmark of 84 tasks across 8 expertise\-heavy domains; every task runs under three matched conditions \(no Skills, curated Skills, self\-generated Skills\) on 7 agent\-\-model configurations and 7,326 trajectories with deterministic verifiers\. Curated Skills raise pass rate by 16\.4\\,pp on average, but the lift is heterogeneous: per\-domain $\\Delta$ spans \+7\.2 to \+24\.8pp and 18 of 84 tasks regress\. Self\-generated Skills net \-1\.3pp, indicating that current models cannot author the procedural knowledge they benefit from consuming\. SkillsBench establishes paired evaluation as standard practice for measuring agent augmentations\.

## OATS: Online Data Augmentation for Time Series Foundation Models

**Authors:** Junwei Deng; Chang Xu; Jiaqi Ma; Ming Jin; Chenghao Liu; Xu Zhang; Li Zhao; Jiang Bian

**ID:** 153919 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HejOWQctCX>) | [PDF](<https://openreview.net/pdf?id=HejOWQctCX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153919>)

Time Series Foundation Models \(TSFMs\) are a powerful paradigm for time series analysis and are often enhanced by synthetic data augmentation to improve the training data quality\. Existing augmentation methods, however, typically rely on heuristics and static paradigms\. Motivated by dynamic data optimization, which shows that the contribution of samples varies across training stages, we propose OATS \(Online Data Augmentation for Time Series Foundation Models\), a principled strategy that generates synthetic data tailored to different training steps\. OATS leverages valuable training samples as principled guiding signals and dynamically generates high\-quality synthetic data conditioned on them\. We further design a diffusion\-based framework to produce realistic time series\. Experiments on TSFMs demonstrate that OATS consistently outperforms regular training and yields substantial performance gains over static data augmentation baselines across six validation datasets and two TSFM architectures\. The code is available at the link https://anonymous\.4open\.science/r/OATS\-536E\.

