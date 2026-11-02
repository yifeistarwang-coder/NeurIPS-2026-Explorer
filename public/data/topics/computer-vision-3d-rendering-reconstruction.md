# Computer Vision / 3D Rendering &amp; Reconstruction

计算机视觉 / 三维渲染与重建

263 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## NeRFix: fixing subtle mistakes in the quadrature of the NeRF volumetric integral

**Authors:** Luca Savant Aira; Diego Valsesia; Enrico Magli

**ID:** 153568 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KQfFjq87GI>) | [PDF](<https://openreview.net/pdf?id=KQfFjq87GI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153568>)

_Abstract unavailable from the accessible public sources._

## Birth\-Death Structural Learning for 3D Gaussian Splatting

**Authors:** Tran Hong Quan; Long Nguyen\-Chi; Binh T\. Nguyen

**ID:** 155061 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8kpY9DyWuJ>) | [PDF](<https://openreview.net/pdf?id=8kpY9DyWuJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155061>)

3D Gaussian Splatting \(3DGS\) has become a standard representation for real\-time novel\-view synthesis\. Yet, its quality\-\-efficiency trade\-off still relies heavily on adaptive density control\. Existing cloning, splitting, and pruning rules use proxy signals—such as position gradients, opacity, image\-space error\. Although effective in practice, these signals do not directly answer the structural question behind density control: where should new Gaussians be allocated to reduce the multi\-view reconstruction loss, and which existing primitives can be pruned with minimal penalty? To address this, we propose first\-variation birth–death control for 3DGS, a principled approach that replaces heuristic structural decisions with a variational score derived from the reconstruction loss\. At each structural update, we freeze the current Gaussian population, attach an auxiliary mass coordinates to each primitive, and differentiate the multiview loss with respect to these coordinates\. We demonstrate that this score is a coordinate of the first variation of Splat Regression Model, giving a rigorous local descent surrogate for birth\-death moves: high\-score Gaussians are selected as birth sites, low\-score low\-opacity Gaussians are death\. Across standard 3DGS benchmarks, integrating this score into 3DGS\-MCMC yields state\-of\-the\-art reconstruction quality and outperforms existing methods, delivering the most significant gains under tight Gaussian budgets\. Ultimately, our work provides compelling evidence that gradient\-based variational metrics should replace proxy heuristics for structural updates in 3DGS\.

## A Unified Framework for Image\-to\-3D Part Generation via Variable Granularity

**Authors:** Qiwen Gu; Xin Zhou; Xiwu Chen; Zhongyang Zhu; Zhuo Zhang; Junqiao Zhao

**ID:** 150141 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kMbkSnVh5B>) | [PDF](<https://openreview.net/pdf?id=kMbkSnVh5B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150141>)

Controllable 3D part generation is pivotal for digital asset creation, yet existing methods lack the flexibility to accommodate diverse user workflows requiring varying levels of control\. In this paper, we introduce FlexPart, a unified image\-to\-3D part generation framework that supports variable\-granularity geometric conditions within a single model\. By seamlessly integrating heterogeneous inputs, ranging from sparse points to dense bounding boxes and masks, via gated adaptive modulation, FlexPart unlocks a powerful cross\-granularity synergy\. We also propose an asymmetric geometric guidance mechanism that leverages strong spatial priors to align representations across granularities, improving geometric consistency and facilitating inter\-task synergy\. Extensive experiments demonstrate that this synergistic approach outperforms state\-of\-the\-art methods by over 10\.5\\% on Part CD, achieving high\-fidelity part generation with superior geometric consistency across all prompt granularities\. Code and models will be made publicly available\.

## FA\-LAM: Focus\-Aware Large Avatar Model for One\-Shot 4D Animatable Gaussian Head

**Authors:** Yingdong Hu; Yisheng He; Yiming Jiang; Zehong Lin; Steven Hoi; Jun Zhang

**ID:** 149554 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pGrWSHPZN0>) | [PDF](<https://openreview.net/pdf?id=pGrWSHPZN0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149554>)

We propose FA\-LAM, a focus\-aware large avatar model for one\-shot animatable Gaussian head creation, while simultaneously enabling static 3D and dynamic 4D full\-head recovery\. The core of our method lies in a thorough analysis of the attention mechanisms and the entangled reconstruction and animation training pipeline adopted by prior state\-of\-the\-art approaches\. Our analysis identifies two main factors that compromise the quality of 3D full\-head generation: \(1\) incorrect and noisy attention activations, and \(2\) conflicts between the tasks of reconstruction and animation\. To address the first issue, we introduce a symmetric and semantic attention regularization strategy that leverages the inherent semantics and structural symmetry of human heads\. To disentangle the objectives of reconstruction and animation, we develop a novel dual\-phase training pipeline that separates the model's capabilities for large\-view hallucination and animation into distinct modules\. Moreover, we enhance our model to support multi\-view and streaming 4D reconstruction in an efficient and memory\-friendly manner through a core autoregressive modification with tailored visibility\-aware token fusion\. Collectively, these innovations enable FA\-LAM to reconstruct animatable Gaussian full heads with superior quality, particularly in fine facial regions and large viewing angles\.

## 3DABSeg: Adaptive 3D Ankle Bone Segmentation with Multiscale Feature Fusion Mixture\-of\-Experts

**Authors:** Yuhan Tang; Xiaowen Huang; Tianxing Zhao; Xiaowen Fu; Xiaoling Luo; Yang Zhang; Hongbo Le; Xi Zhou; Linlin Shen

**ID:** 151779 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Y6FKyEEmc5>) | [PDF](<https://openreview.net/pdf?id=Y6FKyEEmc5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151779>)

As one of the most complex and load\-bearing joints in the human body, the ankle plays a crucial role in locomotion and clinical assessment\. Accurate segmentation of ankle bones is essential for trauma evaluation, preoperative planning, and disease diagnosis\. However, the scarcity of publicly available ankle datasets has hindered the development of intelligent analysis in this area\. To address this gap, we introduce the first two publicly available ankle CT datasets, providing new directions for medical image segmentation\. Considering the intricate and spatially correlated anatomy of the ankle, we propose a 3D medical image segmentation model, namely 3DABSeg\. Specifically, we introduce the Hybrid KAN\-Mamba Block \(HKMB\) to capture long\-range spatial dependencies and complex nonlinearities\. By integrating Mamba’s sequence modeling with KAN’s learnable spline functions, HKMB enhances feature expressiveness for complex anatomical structures\. Furthermore, to address the uneven semantic distribution and feature dilution across channels, we propose a Multi\-Scale Feature Fusion Mixture\-of\-Experts module \(MFF\-MoE\)\. MFF\-MoE utilizes multi\-scale spatial pooling to compute dynamic routing scores, adaptively partitioning channels into specialized expert networks via a mutually exclusive hard\-assignment strategy\. Extensive experiments demonstrate that 3DABSeg surpasses existing state\-of\-the\-art methods in both segmentation performance and boundary precision, highlighting its potential for complex anatomical structure analysis and clinical applications\.

## Simulation\-Ready Compositional 3D Scene Reconstruction from a Single Image

**Authors:** Inhee Lee; Sangwon Baik; Hyeonwoo Kim; Hyunsoo Cha; Sungjoo Kim; Hanbyul Joo

**ID:** 152329 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TtTcnclaSb>) | [PDF](<https://openreview.net/pdf?id=TtTcnclaSb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152329>)

Reconstructing interactive, simulation\-ready 3D scenes from a single image is a critical bottleneck for robotic manipulation\. While recent single\-image lifters recover plausible per\-object shapes, composing them yields scenes that collapse under physical simulation due to interpenetrating, hovering, or sinking objects\. Existing physics\-aware methods address this strictly as a post\-hoc layout correction, leaving the underlying geometric errors unresolved\. To address this, we introduce SimuScene, a compositional 3D reconstruction pipeline that puts physics in the loop of shape and layout estimation\. Rather than using physics merely for layout cleanup, we utilize the physics engine as a diagnostic measurement tool during the generative process itself\. By diagnostically simulating reconstructed objects under gravity, we convert penetration and support failures into quantitative correction signals that drive gravity\-axis stretching and amodal shape resampling\. This physics\-informed feedback loop mitigates accumulated reconstruction errors and produces a stable, simulation\-ready compositional 3D scene\. Extensive experiments demonstrate state\-of\-the\-art performance on physical stability and geometric alignment benchmarks\. We further highlight SimuScene's utility by deploying reconstructed environments in humanoid control and robot\-arm manipulation tasks\.

## 3R\-Adapter: Retrieval, Rewiring, and Refinement for Efficient Adaptation of 3D Reconstruction Model

**Authors:** Zixiang Ai; Zhenyu Cui; Xu Zou; Jiahuan Zhou

**ID:** 155977 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1PQ7pf3kVm>) | [PDF](<https://openreview.net/pdf?id=1PQ7pf3kVm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155977>)

_Abstract unavailable from the accessible public sources._

## GHOST: Geometry\-Hierarchical Online Streaming Token Eviction for Efficient 3D Reconstruction

**Authors:** Leyang Chen; Junyi Wu; Zhiteng Li; Yulun Zhang

**ID:** 149354 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qhHNkQs6l0>) | [PDF](<https://openreview.net/pdf?id=qhHNkQs6l0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149354>)

_Abstract unavailable from the accessible public sources._

## $\\pi^2$: A Simple Framework for 2D\-to\-3D Registration

**Authors:** Hao Deng; Xiangtai Yang; Guangmingzi Yang; Xijing Wang; MaYuanxiao; Sisi Li; Zhiqiang Tian; Shaoyi Du

**ID:** 148690 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vm3afPOLqE>) | [PDF](<https://openreview.net/pdf?id=vm3afPOLqE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148690>)

In this paper, we present $\\pi^2$, a simple, efficient, and accurate image\-to\-point\-cloud \(I2P\) registration paradigm\.  Instead of relying on intermediate targets such as 2D\-\-3D correspondences, matching confidence, visibility masks, overlap regions, or pose\-related proxies, we reformulate I2P registration as point\-wise camera\-centered coordinate regression\. Given a target image and an unaligned LiDAR point cloud, $\\pi^2$ directly predicts where each sampled 3D point should lie in the target camera frame\. The predicted camera\-centered point set is then aligned with the original point set through closed\-form SVD\-based rigid alignment, yielding the final relative pose without iterative pose optimization or a learned pose\-regression head\. To improve robustness under large viewpoint changes and sparse outdoor observations, we further introduce a lightweight camera\-ray\-based regularization objective that provides visibility\-aware supervision during training, without requiring an additional visibility or overlap detection network\. Experiments on KITTI and nuScenes show that $\\pi^2$outperforms the previous SoTA method ICL by 2\.47 and 6\.72 percentage points in registration success rate, respectively, while running in real time at about 25 FPS, corresponding to an up to 6$\\times$ speedup over ICL\. Code and pretrained checkpoints will be made available upon acceptance\.

## Click3R: Interactive Stereo 3D Reconstruction with Sparse Correspondence Clicks

**Authors:** Hao Gu; Jin Yao; Zezhou Cheng

**ID:** 148962 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tr4R2c2FLR>) | [PDF](<https://openreview.net/pdf?id=tr4R2c2FLR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148962>)

Despite impressive progress, existing feed\-forward stereo 3D reconstruction models produce a single, irrevocable prediction\. When these models fail, there is no mechanism to correct their mistakes\. We introduce Click3R, a framework for interactive geometric correction of feed\-forward models using sparse human correspondence clicks\. Given an image pair and a small set of cross\-view point correspondences provided by a user, Click3R injects geometric constraints into the 3D reconstruction networks through a lightweight point correspondence adapter, enabling the model to resolve ambiguities in challenging scenarios such as repetitive textures, symmetric structures, large viewpoint changes, or textureless regions\. To evaluate interactive reconstruction, we curate a challenging benchmark specifically designed to expose failure modes of existing feed\-forward stereo 3D reconstruction methods\. Experiments show that Click3R dramatically reduces reconstruction error with as few as a single correspondence click, improving performance on both standard benchmarks and our curated dataset\. Our results demonstrate that sparse human interaction provides an effective and practical mechanism for correcting geometric reconstruction errors\.

## Marrying Optimal Transport and ODEs for Unified Continuous\-Time 4D Reconstruction and Tracking

**Authors:** Liying Yang; Hao Mo; Jialun Liu; Chen Liu; Xinxing Yu; Chenhao Guan; Hui Ma; Xiao Cao; Ajian Liu; Yanyan Liang

**ID:** 154616 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CFlcylAQ6V>) | [PDF](<https://openreview.net/pdf?id=CFlcylAQ6V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154616>)

Existing unified 4D reconstruction and point tracking approaches typically rely on heuristic interpolations or just predict at integer timestamps, lacking kinematic coherence and failing to model dynamics at any arbitrary timestamp\. In this paper, we propose Uni4R, a framework that unifies these tasks by learning continuous velocity fields through the synergy of Optimal Transport \(OT\) and Ordinary Differential Equation \(ODE\)\. Importantly, this continuous velocity field acts as a kinematic prior that mutually benefits both 4D reconstruction and point tracking\. Specifically, we propose the Flow Matching Guided Decoder \(FMGD\)\. A global velocity branch first extracts anchor features that capture the global dynamic state of the sequence\. Then, FMGD leverages Flow Matching \(FM\) theory to formulate a probability path defined by OT on the anchor feature manifold, instantiating it as FM\-guided velocity features for velocity prediction\. This establishes a robust kinematic inductive bias\. Meanwhile, a point reconstruction branch provides geometric features\. The local velocity prediction module then joint above features and time embeddings, to decode velocities at arbitrary timestamps\. To overcome the absence of high\-quality ground\-truth velocities in fractional frames, we propose an integral\-consistency training strategy\. This strategy uses an ODE solver to integrate velocities to recover target pointmaps, enabling the model to be supervised end\-to\-end directly from integer timestamps\. Experimental results demonstrate that Uni4R achieves SOTA performance in both 4D reconstruction and point tracking, and achieves SOTA in our new kinematics\-aware benchmark at continuous time\.

## VeriWorld: A Verifiable Visual SWE\-Bench for Spatial Reasoning in 3D Environments

**Authors:** Yan Zheng; Anthony Peng; XUYAO LIANG; Xiaoyan Cong; Nuo Chen; Bangya Liu; Zihan Wang; Wenyan Cong; Zhiwen Fan; Zhangyang &amp;amp;quot;Atlas&amp;amp;quot; Wang

**ID:** 139095 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lLZbYegc4T>) | [PDF](<https://openreview.net/pdf?id=lLZbYegc4T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139095>)

Vision\-language models \(VLMs\) are increasingly used for spatial tasks such as navigation and manipulation, where they must infer geometry and object relationships from visual input in order to act correctly\. Existing benchmarks usually test perception and reasoning in isolation, making it hard to tell whether failures come from visual understanding, downstream reasoning, or the bridge between them\. How can we evaluate whether a model can recover the right spatial structure from visual input and use it to make correct decisions? We introduce VeriWorld, a benchmark for spatial reasoning in interactive 3D environments with executable actions and deterministic verification\. Each task is evaluated under three matched input settings \-\- visual\-only, structured, and combined \-\- while the environment and objective remain fixed\. This design isolates whether failures arise from perception, reasoning, or their interaction\. VeriWorld brings together interactive 3D environments, code\-based actions, deterministic verification, parameterized task generation, and controlled diagnostic evaluation in a single framework\. Using this setup, we uncover two findings\. First, models often succeed when given structured spatial information but fail when the same information must be inferred from visual input, revealing a recurring visual\-to\-structure gap\. Second, action\-space and harness design can change outcomes even under the same task and information condition, showing that interaction protocol is itself a confounding variable in spatial evaluation\. VeriWorld is open\-sourced to support reproducible and fine\-grained evaluation of spatial reasoning in VLMs\.

## Perception for Action in Latent World Models

**Authors:** Petr Ivashkov; Randall Balestriero; Bernhard Schölkopf

**ID:** 153770 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=InDOasTozM>) | [PDF](<https://openreview.net/pdf?id=InDOasTozM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153770>)

Perception for action suggests that representations of the world should be shaped not by visual fidelity alone, but by their relevance for actions\. At the same time, latent JEPA\-style world models advocate learning compact predictive states from high\-dimensional observations to facilitate the prediction of future states, but end\-to\-end training of these models is nontrivial because representations may collapse if our only goal is to construct a latent state that is easy to predict\. We show that a suitable inverse dynamics regularization addresses both issues: it is an effective anti\-collapse mechanism that induces action\-aligned representations\. By forcing latent states to preserve information about the action underlying a transition, it biases the model toward the controllable degrees of freedom of the environment while discarding uncontrollable distractors\. This yields stable latent world models trained end\-to\-end from offline, reward\-free trajectories, without frozen encoders, exponential moving averages, or complex latent regularizers\. Empirically, the learned latent spaces are compact, interpretable, and enable competitive planning performance across simple 2D and 3D control tasks\.

## BrickAnything: Geometry\-Conditioned Buildable Brick Generation with Structure\-Aware Tokenization

**Authors:** zhengyang Ni; Feng yan; Yu Guo; Fei Wang

**ID:** 154364 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E8PQVRghmQ>) | [PDF](<https://openreview.net/pdf?id=E8PQVRghmQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154364>)

Generating physically buildable brick structures from 3D shapes requires more than geometric reconstruction: the output must also satisfy discrete part constraints and structural stability\. Existing brick generation methods either rely on heuristic optimization, which can break down when the target 3D shape does not admit a feasible structure under predefined constraints, or generate brick sequences without explicitly modeling the underlying 3D geometry and assembly relations\.  In this work, we present BrickAnything, a geometry\-conditioned autoregressive framework for generating buildable brick structures from diverse 3D representations\. BrickAnything uses point clouds as a unified geometric interface and predicts brick sequences that reconstruct the target shape under assembly constraints\. To model structural dependencies among bricks, we introduce a structure\-aware tree tokenization, which represents brick structures through local attachment relations\. This formulation makes sequence generation more consistent with the physical construction process,  and reduces invalid intermediate states\. We further introduce preference\-based alignment post\-training, validity\-constrained decoding and adaptive rollback to improve buildability objectives such as stability and geometric fidelity\. Extensive experiments demonstrate that BrickAnything produces geometrically faithful and physically realizable brick structures, and that the proposed tokenization effectively reduces rollback and regeneration compared with conventional ordering strategies\.

## Audible World Models: Spatially Aware Sound Generation for 3D Worlds

**Authors:** Duowen Chen; Jinjin He; Gouthaman KV; Sandeep Bangalore Venkatesh; Bo Zhu

**ID:** 154507 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D4dGC6P0dI>) | [PDF](<https://openreview.net/pdf?id=D4dGC6P0dI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154507>)

Text\- and image\-conditioned world generators can now produce visually rich 3D environments, but these worlds are usually silent or paired with a soundtrack generated only from text or rendered video\. Such audio can describe what should be heard, but it does not explicitly represent where sounds live in the world or how they should change as a listener moves\. We propose Audible World Models, a training\-free framework that treats sound as part of a generated world state\. Given a text prompt, our system builds a panoramic 3D proxy, decomposes it into semantic layers, identifies audible foreground objects and ambient background regions, synthesizes dry audio for each sound label, attaches sources to reconstructed geometry, and renders listener\-dependent spatial audio through geometric acoustic propagation\. This explicit coupling of semantics, geometry, and propagation produces audio that remains tied to persistent source locations and responds to viewpoint and motion\. Across 80 generated scenes, our method substantially improves spatial consistency over text\-, video\-, and panorama\-conditioned baselines while maintaining competitive semantic alignment\. VLM\-based and human evaluations further show that the resulting soundtracks are preferred for audio\-\-visual consistency, spatial plausibility, and motion\-dependent behavior\.

## Invaria: Learning Scale and Density Invariance in Point Clouds via Next\-Resolution Prediction

**Authors:** Chun\-Peng Chang; Shaoxiang Wang; Alain Pagani; Dariu Gavrila; Holger Caesar

**ID:** 152764 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QYAtNtsZ3S>) | [PDF](<https://openreview.net/pdf?id=QYAtNtsZ3S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152764>)

Modern image encoders achieve high generalization by decoupling semantic meaning from resolution, an ability yet to be fully realized in the 3D domain\. We investigate the failure of 3D point cloud encoders to achieve similar generalization and find that existing models are highly sensitive to sampling resolution and scale changes, leading to significant performance degradation\. This sensitivity is a major bottleneck for real\-world deployment in robotics, as it suggests models overfit to specific quantization densities and object scales rather than learning invariant semantic features\. To mitigate this dependency, we propose Invaria, a point cloud encoder that achieves scale and density invariance through next\-resolution prediction and receptive field calibration\. While our objective is not the explicit generation of high\-resolution point clouds, we find that this training objective encourages the model to learn robust, structural invariants\. The resulting encoder achieves significant performance gains during resolution shifts while maintaining high efficiency through a compact model size and reduced token requirements\. Specifically, on ScanNet, Invaria achieves a 56\.0\\% higher mIoU at 3$\\times$ lower resolution and a 20\\% improvement when the objects scale is reduced by a factor of 3\. These gains are achieved with a 45\\% smaller model size and an average reduction of 40\\% in input tokens\. The code will be released once the paper is published\.

## No Pose, No Problem in 4D: Feed\-Forward Dynamic Gaussians from Unposed Multi\-View Videos

**Authors:** Matteo Balice; Yanik Künzi; Chenyangguang Zhang; Matteo Matteucci; Marc Pollefeys; Sunghwan Hong

**ID:** 155864 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2KlxKfG6ly>) | [PDF](<https://openreview.net/pdf?id=2KlxKfG6ly>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155864>)

Recent feed\-forward 3D gaussian splatting methods have made dramatic progress on individual aspects of 3D scene reconstruction, but no existing method jointly addresses dynamic content, multi\-view input, and unknown camera poses in a single feed\-forward pass\. Methods that handle dynamics either require accurate camera poses or accept only monocular input; pose\-free multi\-view methods address only static scenes; and per\-scene optimization methods bridge some of these gaps but at minutes\-to\-hours cost per scene\. We introduce NoPo4D, the first feed\-forward system that addresses this empty quadrant\. Building on a pretrained geometry backbone and recent 4D Gaussian frameworks, NoPo4D introduces a velocity decomposition that splits Gaussian motion into per\-pixel image\-plane shifts and depth changes, allowing direct supervision from pseudo ground\-truth optical flow on the 2D component\. This sidesteps both the differentiable rendering that couples prior posed methods to pose accuracy and the 3D motion ground truth that prior pose\-free methods require\. The system is rounded out by a bidirectional motion encoder for cross\-view and cross\-frame feature aggregation, and view\-dependent opacity that mitigates cross\-view and cross\-timestep Gaussian misalignments\. On four multi\-view dynamic benchmarks, NoPo4D consistently outperforms prior feed\-forward baselines, and with an optional post\-optimization stage surpasses per\-scene optimization methods, while running orders of magnitude faster\. Code and the pretrained weights will be made publicly available\.

## FoundSurface: Feedforward Ray\-Based 3D Scene Surface Reconstruction from Unposed Images

**Authors:** Shenxing Wei; Jinxi Li; Zihui Zhang; Ajay Kumar; Wei Wang; Bo Yang

**ID:** 149835 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mwnXqnBf8n>) | [PDF](<https://openreview.net/pdf?id=mwnXqnBf8n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149835>)

_Abstract unavailable from the accessible public sources._

## Pygmalion: Bridging Reconstruction and Generation in Sparse Voxel\-based 3D Modeling

**Authors:** Guan Luo; Jing Lin; Xuanyu Yi; Jiahang Liu; Song\-Hai Zhang; Jianfeng Zhang

**ID:** 150491 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hhzuYjosC2>) | [PDF](<https://openreview.net/pdf?id=hhzuYjosC2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150491>)

_Abstract unavailable from the accessible public sources._

## BrickFlow: Connectivity\-Guided Brick Reconstruction

**Authors:** Peter Kulits; Cordelia Schmid

**ID:** 151991 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WJX7hy4lhB>) | [PDF](<https://openreview.net/pdf?id=WJX7hy4lhB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151991>)

Given a set of LEGO parts and an image of an assembled object, our task is to infer the pose of each part to assemble the object\. In contrast with traditional 3D reconstruction, doing so requires satisfying discrete physical constraints, which provide structure but render the problem combinatorial and highly sensitive to small pose errors\. To learn a prior over how parts fit together, we train a set\-conditioned SE\(3\) flow model that maps noisy poses to valid assemblies\. We then finetune this model to inject image conditioning\. However, while the learned flow captures global structure, it does not enforce connectivity\. To address this, we introduce an analytic connector\-field guidance to pull predictions toward the connection\-consistent manifold at test time\. Through this, we demonstrate improved validity and reconstruction performance, scaling with model size, pretraining, and conditional guidance\. We will make our models and data available for research purposes\.

## Open\-Vocabulary 3D Part Segmentation with  Semantic Propagation Hawkes Process

**Authors:** Kejie Shi; Kun Zhou; Jieyu Zhao; Xulun Ye

**ID:** 155432 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5hcg8T2gV0>) | [PDF](<https://openreview.net/pdf?id=5hcg8T2gV0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155432>)

_Abstract unavailable from the accessible public sources._

## Glob3R: Global Structure\-from\-Motion with 3D Foundation Models

**Authors:** Junyuan Deng; Heng Li; Kejie Qiu; Lingteng Qiu; Rui Peng; Weichao Shen; Weihao Yuan; Siyu Zhu; Zilong Dong; Ping Tan

**ID:** 151745 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YQG92O0dwh>) | [PDF](<https://openreview.net/pdf?id=YQG92O0dwh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151745>)

Recent 3D geometric foundation models, such as VGGT, provide robust feed\-forward 3D reconstruction by directly predicting camera poses and 3D scene points from input images\. However, their results remain inaccurate, and scaling them to long sequences or large unordered image sets typically requires chunk\-wise processing, which can introduce drift and inconsistency\. We present Glob3R, a global SfM\-style reconstruction built on 3D foundation models\. Our key idea is to explicitly optimize feed\-forward geometric predictions\. To this end, we augment a frozen Pi3X backbone with a lightweight dense matching head that predicts image warps between selected reference frames and neighboring views\. These dense warps are converted into sparse but reliable multi\-view feature tracks, which provide correspondence constraints for global optimization\. We further introduce a keyframe\-based sliding\-window association strategy that propagates tracks and relative poses across overlapping windows, enabling scalable reconstruction\. Finally, we perform global motion averaging and bundle adjustment to refine camera poses, reduce scale inconsistencies, and recover dense scene geometry\. Extensive experiments on indoor, outdoor, large\-scale driving, and unordered SfM benchmarks demonstrate that Glob3R achieves robust and accurate reconstruction\. It consistently improves over feed\-forward foundation\-model baselines and recent scalable reconstruction methods, while being more robust than classical SfM pipelines\. The refined poses also lead to higher\-quality neural rendering, validating the benefit of combining foundation\-model priors with global geometric optimization\.

## ChiP\-STAR: Spatial\-Topological Attention for Pre\-trained Generative Chip Routing

**Authors:** Junfeng Liu; Xingquan Li

**ID:** 150942 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eAB0qsCFKl>) | [PDF](<https://openreview.net/pdf?id=eAB0qsCFKl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150942>)

Routing is foundational in VLSI physical design, directly shaping timing, power, and area\. Recent pre\-trained Seq2Seq models recast routing as autoregressive generation over DFS\-serialized trees, but inherit a text backbone blind to the physical space their tokens describe: DFS decouples sequence position from physical coordinate, breaking spatial reasoning at branching points, in load selection, and along the autoregressive trajectory\. We name these failures the \\emph\{Three Spatial Blindnesses\} and propose ChiP\-STAR, which augments a T5Gemma backbone with three lightweight modules: a dual\-frame rotary encoding coupling sequence order with 3D proximity, a Fourier\-factorized attention prior with memory linear in sequence length, and a cumulative coordinate\-noise schedule closing the train\-\-inference gap, together adding under $0\.5\\%$ parameters\. We rebuild the AiEDA corpus into the largest geometry\-annotated routing dataset to date \($6\.4$M nets, $1\.8$B tokens, $556$\\,GB\)\. ChiP\-STAR\-Large surpasses iPCL\-Large by $5\\%$ on Leaf IoU and Connectivity, and commercial ECO signoff yields $3\\%$ shorter wirelength and $11\\%$ fewer vias\. Our code is publicly available at \\url\{https://anonymous\.4open\.science/r/iPCL\-R\-0778/\}\.

## DTGS: Physics\-Embedded Dynamic Thermal 3D Reconstruction with Gaussian Splatting

**Authors:** Junbo Li; Hang Fu; Yinuo Wang; Weimin Yuan; Cai Meng; Xiangzhi Bai

**ID:** 155685 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3iRUNwJRYn>) | [PDF](<https://openreview.net/pdf?id=3iRUNwJRYn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155685>)

Dynamic scene representation and rendering in the visible spectrum has been extensively studied\. Compared to visible\-light imaging, thermal infrared sensing offers all\-weather observation and strong penetration capability, enabling perception in low\-visibility environments\. However, dynamic reconstruction in thermal infrared scenes is challenged due to atmospheric transport effects and interference from low\-emissivity background regions, which often leads to motion blur and details loss in rendered results\. To address these issues, we propose DTGS, a physics\-driven dynamic 3D scene reconstruction approach\. DTGS factorizes dynamic thermal scenes into radiometric and geometric components, modeling radiometric changes via rendering that integrates atmospheric radiative transfer, while capturing geometric deformations through Adaptive Temporal Gaussian basis\. In addition, we design a thermal\-radiance\-weighted structural similarity loss to suppress gradient interference from low\-radiance noisy regions\. Furthermore, to demonstrate the effectiveness of our method, a large\-scale dataset for this field named Dynamic\\\_LTR is created\. Experimental results demonstrate that our method achieves a 2\.7 dB improvement in PSNR, a twofold speedup in rendering, and a threefold reduction in training time\. The code and datasets will be available after acceptance\.

## What Makes a Good Path? Factoring Manifold Support and Path Geometry

**Authors:** Zhixuan Zhou; Tingting Dan; Guorong Wu

**ID:** 149855 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mmoow6azRW>) | [PDF](<https://openreview.net/pdf?id=mmoow6azRW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149855>)

The manifold hypothesis suggests that real\-world data concentrates on low\-dimensional structures, yet navigating meaningful trajectories on latent manifolds remains an open challenge\. A common approach is to construct density\-aware metrics, but such constructions bundle two distinct questions: \(i\) where valid data lies and \(ii\) how we choose to traverse on the manifold\. Since different tasks may demand different traversal behaviors even on the same data manifold, specifying these two aspects independently offers additional modeling flexibility\. We propose to factor the path objective into a kinetic term governed by a freely chosen geometric prior and a score\-based potential, derived from the negative log\-density of a pretrained diffusion model, that acts as a soft constraint for manifold adherence\. The potential encourages dynamics to evolve along the data support, while the geometric prior remains free to encode task\-specific notions of path optimality\. To solve the resulting optimization problem, we introduce \\textit\{geodesic force matching\} \(GFM\), a direct\-collocation algorithm that discretizes the trajectory and optimizes all waypoints jointly to satisfy the Euler\-\-Lagrange force balance in a least\-squares sense\. On synthetic manifolds and 3D shape interpolation, our method produces smooth, on\-manifold paths and performs favorably against recent density\-aware baselines, most notably in the low\-noise regime where those baselines become numerically unstable\.

## PointZero: 3D Point Track Completion for Learning Transferable 3D Dynamics

**Authors:** Bardienus Duisterhof; Kaifeng Zhang; Adam Hung; Bowen Wen; Stan Birchfield; Yunzhu Li; Deva Ramanan; Jeffrey Ichnowski

**ID:** 149391 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qPN2noamDW>) | [PDF](<https://openreview.net/pdf?id=qPN2noamDW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149391>)

World models endow perceptual systems with the ability to predict how scenes evolve under interaction\.  They are most beneficial when trained on diverse volumes of data, to instill a rich prior into downstream applications\. Existing methods for capturing 3D world models are typically scene\-specific dynamics models, or require robot action labels \- which excludes web video data from the training pool\.  We study 3D point track completion as a pre\-trianing objective for learning transferable 3D dynamics without robot data\. Given a single RGB\-D observation and sparse partial 3D trajectories \(tracks\), we predict future 3D tracks of all observed points\. We show this is a objective provides a rich dynamics prior, without requiring robot action labels\. We contribute a diverse dataset of 2\.9 million synthetic frames spanning deformable, articulated, and rigid objects, and use it to train PointZero\. We show that a flexible and expressive transformer, PointZero, outperforms prior methods on the same data\. We demonstrate the utility of our pre\-training objective by fine\-tuning PointZero for two downstream applications: \(1\) action\-conditioned dynamics and \(2\) robot manipulation\. When fine\-tuned to condition on end\-effector pose, PointZero outperforms the baselines on a recent action\-conditioned 3D dynamics benchmark\. When fine\-tuned to predict robot actions, PointZero outperforms or matches the baselines on 6/7 simulated and real\-world robot manipulation tasks\. We furthermore evaluate training PointZero from scratch to isolate the benefits of our proposed architecture from those of our proposed pre\-training objective and dataset\. We release the dataset, model checkpoints, and full training recipe\.

## BridgeMVS: Bridging Multi\-View Stereo and Monodepth via Bidirectional Dynamic Fusion

**Authors:** Jianfei Jiang; Qiankun Liu; Rui Yang; Haochen Yu; Hongyuan Liu; Xianglong Meng; Jiansheng Chen; Huimin Ma

**ID:** 151655 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z1iGG61Tr4>) | [PDF](<https://openreview.net/pdf?id=Z1iGG61Tr4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151655>)

_Abstract unavailable from the accessible public sources._

## PuppetGait: Generalizing Gait Recognition via 3D Body\-Aligned LVM Features

**Authors:** CHENGWEI YE; Dingqiang Ye; Chuanfu Shen; Zirui Zhou; Chao Fan; Shuaijun Jiang; Vishal Patel; Shiqi Yu

**ID:** 153748 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IzvcL0qN4m>) | [PDF](<https://openreview.net/pdf?id=IzvcL0qN4m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153748>)

_Abstract unavailable from the accessible public sources._

## Quantitative Assessment of Crystal Structure Prediction

**Authors:** Sergio Rincón; Gabriel González; Nicolás Andrade; Rafael Velasquez; Sebastian Ojeda; Juanita Puentes; Nicolás Aparicio; Paula Cárdenas; Pablo Arbelaez

**ID:** 138999 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rtIvlv5N1r>) | [PDF](<https://openreview.net/pdf?id=rtIvlv5N1r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138999>)

Crystal Structure Prediction \(CSP\) aims to predict a material's 3D structure from its chemical composition, with applications from energy storage to pharmaceuticals\. Despite its importance, existing evaluation frameworks suffer from key limitations: they rely on threshold\-sensitive or incomparable metrics, focus predominantly on geometric performance while overlooking physical plausibility, and fail to account for polymorphism, where a chemical composition can crystallize into multiple stable structures\. In parallel, recent Symmetry\-Informed CSP \(SICSP\) methods often report results alongside standard CSP baselines while receiving crystallographic templates at inference, which constrain the search space and make SICSP a fundamentally different task\. To address these limitations, we introduce an Orientation\-invariant, Polymorph\-Aware, Large Benchmark \(OPAL\-Bench\) that evaluates CSP and SICSP as separate tasks\. We evaluate 7 CSP and 2 SICSP methods under OPAL\-Bench across 4 datasets using threshold\-free geometric and physical distance metrics\. Our results show that no method dominates across all metrics, and that geometric performance is not strongly correlated with physical plausibility\. Motivated by this gap, we provide OPAL\-CSP, an SE\(3\)\-equivariant flow\-matching baseline that performs competitively on geometric metrics and consistently ranks among the best on physical ones\. By unifying geometric and physical metrics under a polymorph\-aware protocol, OPAL\-Bench enables a more comprehensive assessment of generative quality in CSP\.

## DecompDreamer: A Composition\-Aware Curriculum for Structured 3D Asset Generation

**Authors:** Utkarsh Nath; Rajeev Goel; Rahul Khurana; Kyle Min; Mark Ollila; Pavan Turaga; Varun Jampani; Tejaswi Gowda

**ID:** 156777 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/pdf?id=3qy4J6QFbn>) | [PDF](<https://openreview.net/pdf?id=3qy4J6QFbn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156777>)

Current text\-to\-3D methods excel at generating single objects but falter on compositional prompts\. We argue this failure is fundamental to their optimization schedules, as simultaneous or iterative heuristics predictably collapse under a combinatorial explosion of conflicting gradients, leading to entangled geometry or catastrophic divergence\. In this paper, we reframe the core challenge of compositional generation as one of optimization scheduling\. We introduce DecompDreamer, a framework built on a novel staged optimization strategy that functions as an implicit curriculum\. Our method first establishes a coherent structural scaffold by prioritizing inter\-object relationships before shifting to the high\-fidelity refinement of individual components\. This temporal decoupling of competing objectives provides a robust solution to gradient conflict\. Qualitative and quantitative evaluations on diverse compositional prompts demonstrate that DecompDreamer outperforms state\-of\-the\-art methods in fidelity, disentanglement, and spatial coherence\.

## CitySTAR: Agent\-Driven Structured and Topology\-Aware Reasoning for Open\-Vocabulary Urban 3D Grounding

**Authors:** Shuai Zhang; Hongye Hou; qinghe liu; Zhuoxiao Li; Dongli Wu; Jing OU; Yuan Liu; Wufan Zhao

**ID:** 151477 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aKAYRvEMRa>) | [PDF](<https://openreview.net/pdf?id=aKAYRvEMRa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151477>)

3D grounding aims to localize target entities in complex scenes from natural language and plays a fundamental role in embodied perception and spatial reasoning\. However, existing approaches mostly rely on feature similarity or direct matching, making it difficult to connect natural\-language intent with the implicit semantic and geometric structures hidden in billion\-scale urban point clouds\. We reformulate city\-scale 3D grounding as structured constraint reasoning, where description semantics are organized into computable cross\-modal constraints over open\-vocabulary 3D entities, attributes, and spatial relations\. We present CitySTAR, a training\-free framework for reasoning\-driven urban 3D grounding\. CitySTAR lifts raw billion\-scale urban point clouds into a query\-ready scene graph of open\-vocabulary 3D instances, with CodeLLM\-driven tools supplying multimodal evidence for node attributes and 3D spatial relations\. It then models target\-context topology with paired hypergraphs and performs bidirectional topology verification for structural disambiguation\. Finally, a Reflective Cross\-modal Grounding module integrates topology consistency and candidate\-centered 2D visual evidence to make decisions over a metric\-aware 3D context graph\. To further support this setting, we introduce CitySTAR\-3D, an enhanced benchmark that improves semantic coverage, instance completeness, bounding\-box fidelity, and spatial\-relation complexity in city\-scale 3D grounding\. Extensive experiments show that CitySTAR consistently improves open\-world urban 3D grounding while maintaining strong interpretability and generalization\.

## Stable3R: Streaming 3D Reconstruction with Stable Geometric References

**Authors:** Jincheng Xiong; Jiarong Han; Hang Zhang; Mu Xu; Ming Qian

**ID:** 154907 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A2C5edhRjI>) | [PDF](<https://openreview.net/pdf?id=A2C5edhRjI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154907>)

Streaming 3D reconstruction has become a critical component for real\-time applications\. While recent advances have adapted large\-scale offline feedforward models into streaming architectures via causal attention and KV\-caching, they suffer from fundamental instability: the irreversible bias in early frames\. This limitation stems from two coupled factors: \(1\) the existing KV\-cache\-based causal architecture strictly prohibits access to future information, resulting in information\-poor early caches; and \(2\) current methods typically anchor the pose constraints to the initial frame, amplifying the early bias throughout the sequence\. To address these challenges, we propose Stable3R, a holistic framework that establishes stable geometric references by enriching historical caches and anchoring poses to prefixes rather than a single initial frame\. Specifically, we first introduce a lookahead\-augmented attention mechanism, integrating future observations into past caches without violating causal constraints\. Second, we adopt a frame\-equivariant architecture with prefix\-relative supervision, alleviating the reliance on the biased initial frame\. Extensive experiments across multiple benchmarks show that our method consistently boosts reconstruction quality within a strictly causal inference schedule\.

## BAT3R: Robust Online 3D Reconstruction with Bayesian Adaptive State Updates

**Authors:** Lijian Li; Yuanpeng He; Yudian Zheng; Chung\-ju Huang; Linyu Li; Dongming Jin; Wenpin Jiao; Zhi Jin; Chi\-Man Pun

**ID:** 153286 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MP758ZsHYv>) | [PDF](<https://openreview.net/pdf?id=MP758ZsHYv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153286>)

_Abstract unavailable from the accessible public sources._

## Geometry\-Aware Flow Matching for Sparse\-View 3D Gaussian Splatting

**Authors:** Abdullah Azeem; Ruisheng Wang; Qingquan Li; Abubakar Siddique

**ID:** 148380 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yKjmobiqnX>) | [PDF](<https://openreview.net/pdf?id=yKjmobiqnX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148380>)

_Abstract unavailable from the accessible public sources._

## DirectUV: Image\-Conditioned UV Texture Generation with Surface\-Aware Positional Encoding

**Authors:** Jiantao Lin; Yingjie Xu; Mingzhi Sheng; Yangkai Wei; Hao CHEN; Yingcong Chen

**ID:** 153147 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NWZOrQHECk>) | [PDF](<https://openreview.net/pdf?id=NWZOrQHECk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153147>)

Generating high\-quality UV textures for 3D meshes remains challenging\. Multi\-view projection pipelines suffer from occlusion and view inconsistency, and recent methods that generate textures directly in UV space still rely on auxiliary modules to supply 3D information, leaving the attention mechanism tied to UV\-grid positions rather than to the underlying surface geometry\. This mismatch limits coherence across seams and disconnected UV islands\. We propose DirectUV, an image\-conditioned UV texture diffusion framework that operates in the latent UV space of a pretrained image VAE, in which a Diffusion Transformer denoises the UV latent given a single input image and a coarse UV map\. At its core, Surface\-Aware Positional Encoding \(SAPE\) replaces the standard 2D\-grid positional encoding with encodings derived from per\-token 3D surface coordinates obtained via UV\-to\-surface correspondence\. As positional encodings define the distance metric that attention operates on, SAPE enables tokens to attend to each other based on true surface proximity rather than UV\-grid distance, restoring coherence across seams and disconnected islands\. A multi\-level extension further assigns different attention heads to progressively finer subdivisions of the same latent UV patch, allowing the model to reason about surface structure at multiple granularities\. Experiments show that DirectUV produces sharper and more globally consistent textures than other baselines, with the largest improvements in occluded and view\-unseen regions where projection\-based methods leave gaps or stretched textures\.

## Effective Multi\-sensor Conditioning for Street\-view Novel\-view Synthesis

**Authors:** Zhengfei Kuang; Adam Sun; Liyuan Zhu; Tong Wu; Shengqu Cai; Jonathan Tremblay; Iro Armeni; Ehsan Adeli; Lior Yariv; Gordon Wetzstein

**ID:** 149088 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=szHv2SyPlO>) | [PDF](<https://openreview.net/pdf?id=szHv2SyPlO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149088>)

Modern vehicle platforms are equipped with a rich sensor suite, including LiDAR, calibrated multi\-camera rigs, and accurate ego\-motion, that in principle offers strong signal for re\-rendering a driving scene from novel viewpoints\. A growing line of recent work leverages video diffusion models for this task, using their generative priors to synthesize plausible novel views from sparse vehicle observations\. In practice, however, existing methods exploit only a fragment of this signal, and their quality tends to degrade as the target trajectory departs from the recorded driving path\. We argue that this is fundamentally a \*multi\-sensor fusion problem\*: sparse LiDAR reprojections supply accurate but incomplete metric geometry, surround\-view reference imagery supplies dense appearance but no metric depth, and camera poses tie the two together across views\. We introduce StreetNVS, a video diffusion framework that jointly conditions on all three signals through a Reference\-Enhanced Camera Attention module based on relative ray\-level positional encoding, trained with a two\-stage curriculum that gradually exposes the model to increasingly sparse LiDAR\. On the Waymo Open Dataset, StreetNVS substantially outperforms state\-of\-the\-art baselines under sparse LiDAR conditioning, matches methods that rely on 10–100× denser point clouds, and synthesizes coherent video along extreme out\-of\-trajectory paths such as elevation, lane\-shift, pullback, and rotation\.

## 3D Skew Normal Splatting

**Authors:** Xiangru Wu; Ke Fan; Yanwei Fu

**ID:** 152761 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QZ4uureDLB>) | [PDF](<https://openreview.net/pdf?id=QZ4uureDLB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152761>)

3D Gaussian Splatting \(3DGS\) has emerged as a leading representation for real\-time novel view synthesis and been widely adopted in various downstream applications\.  The core strength of 3DGS lies in its efficient kernel\-based scene representation, where Gaussian primitives provide favorable mathematical and computational properties\. However, under a finite primitive budget, the symmetric shape of each primitive directly affects representation compactness, especially near asymmetric structures such as object boundaries and one\-sided surfaces\.  Recent works have explored more complex kernel distributions, yet they either remain within the elliptical family or rely on hard truncation, which limits continuous shape control and introduces distributional discontinuities\. In this paper, we propose Skew\-Normal Splatting \(SNS\), which adopts the Azzalini Skew\-Normal distribution as the fundamental primitive\.   By introducing a learnable and bounded skewness parameter, SNS can continuously interpolate between symmetric Gaussians and Half\-Gaussian\-like shapes, enabling flexible modeling of both sharp boundaries and interior regions\. Moremover, SNS preserves analytical tractability under affine transformations and marginalization\. This property allows seamless integration into existing Gaussian Splatting rasterization pipelines\.  Furthermore, to address the strong coupling between scale, rotation, and skewness parameters, we introduce a decoupled parameterization and a block\-wise optimization strategy to enhance training stability and accuracy\.    Extensive experiments on standard novel\-view synthesis benchmarks show that SNS consistently improves reconstruction quality over Gaussian and recent non\-Gaussian kernels, with clearer benefits on sharp boundaries and thin or one\-sided structures\. Codes and models will be released\.

## DiffeoMorph: Learning to Morph 3D Shapes Using Differentiable Agent\-Based Simulations

**Authors:** Seong Ho Pahng; Guoye Guan; Benjamin Fefferman; Sahand Hormoz

**ID:** 155314 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6WbQEdAa2e>) | [PDF](<https://openreview.net/pdf?id=6WbQEdAa2e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155314>)

Biological systems can form complex three\-dimensional structures through the collective behavior of agents that share a common update rule and operate without central control\. How such distributed control gives rise to precise global patterns remains a central question not only in developmental biology but also in distributed robotics, programmable matter, and multi\-agent learning\. Here, we introduce DiffeoMorph, an end\-to\-end differentiable framework for learning a morphogenesis protocol that guides a population of agents to morph into a target 3D shape\. Each agent updates its position and internal state using an SE\(3\)\-equivariant graph neural network, based on its own internal state and signals received from other agents\. To train this system, we introduce a new shape\-matching loss based on 3D Zernike polynomials, which compares the predicted and target shapes as continuous spatial distributions, not as discrete point clouds, and is invariant to agent ordering, number of agents, and global orientation\. To achieve rotation invariance while preserving reflection sensitivity, we include an alignment step that optimally rotates the predicted Zernike spectrum to match the target before computing the loss\. We perform benchmarking to establish the advantages of our shape\-matching loss over other standard distance metrics for shape comparison tasks\. We then demonstrate that DiffeoMorph can form a range of complex shapes from minimally patterned initial conditions\. DiffeoMorph provides a general framework for learning distributed control strategies for morphogenesis, swarm robotics, and programmable self\-assembly\.

## TESLA: Native 4D Gaussian Splatting Generation with Temporally Structured Latents

**Authors:** Weiqi Zhang; Junsheng Zhou; Juntong Fang; Kanle Shi; Shenkun Xu; Yu\-Shen Liu

**ID:** 152766 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QXF0D2aiDK>) | [PDF](<https://openreview.net/pdf?id=QXF0D2aiDK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152766>)

Diffusion models have achieved remarkable success in image, video, and 3D content creation\. However, extending these successes to native 4D model generation remains challenging due to the intricate coupling between temporal geometry and appearance dynamics\. Existing approaches typically generate 4D content by synthesizing videos from novel viewpoints, yet they often suffer from poor spatio\-temporal consistency across views and time\. To address these limitations, we introduce TESLA, a novel feedforward approach for generating native 4D Gaussian Splatting \(4DGS\) representations\. Our key insight is to decouple temporal geometry and appearance generation through a temporally structured latent representation\. This decomposition allows us to first establish coarse temporal geometry that captures fundamental structural dynamics, and then synthesize fine\-grained appearance details conditioned on this geometric scaffold\. To bridge this decoupled representation to the final output, we design a native 4DGS decoder that directly transforms our temporal features into native 4DGS representations, enabling flexible temporal rendering across arbitrary viewpoints and timesteps\. Trained on a large collection of curated animated sequences, we extensively evaluate TESLA on the 4DGS generation task, showing superior performance over existing baselines\.

## GAMMA: Scalable 4D Gaussian Reconstruction Model for Novel View Synthesis of Monocular Videos

**Authors:** Weiqi Zhang; Junsheng Zhou; Xuancheng Zhang; Juntong Fang; Zequn Chen; Donglin Di; Yu\-Shen Liu

**ID:** 155397 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5xaZwIPnK0>) | [PDF](<https://openreview.net/pdf?id=5xaZwIPnK0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155397>)

We present GAMMA, a scalable feed\-forward model that reconstructs 4D Gaussian Splatting from monocular videos, enabling dynamic novel view synthesis in real\-time\. Most existing approaches for dynamic scene modeling require multi\-view videos as input or costly per\-scene optimization\. In contrast, GAMMA learns a unified 4D scene representation from monocular videos and generatively predicts 4D Gaussian primitives within seconds\. The key insight of GAMMA lies in its unified Gaussian reconstruction model, which jointly estimates temporally consistent geometry, appearance, and motion from the input video\. We further explore its scalability through large\-scale training on a comprehensive dataset encompassing both synthetic and real\-world videos\. The reconstructed GAMMA representation supports interactive scene exploration via real\-time rendering across timesteps and local viewpoints\. Extensive experiments demonstrate that GAMMA outperforms existing methods in both reconstruction fidelity and efficiency\.

## CoLa3D: Composable Latent 3D Decomposition

**Authors:** Xudong Cai; Yongcai Wang; Deying Li; Chuanxia Zheng

**ID:** 156142 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=03ztUki3T5>) | [PDF](<https://openreview.net/pdf?id=03ztUki3T5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156142>)

We introduce CoLa3D, a simple and effective model for composable 3D scene decomposition that, given a single whole\-scene latent from either a single image or an existing scene mesh as input, directly outputs a set of object meshes with consistent spatial layout that can be assembled back into a coherent scene\. CoLa3D introduces a novel paradigm for 3D scene decomposition within a shared \\emph\{whole\}\-scene latent, unlike alternatives that perform per\-object generation in canonical spaces and then glue the objects back together with fragile pose and scale estimation\. The network is a lightweight, flexible, and scalable query\-based transformer that accepts various types of queries, including 2D masks, 3D points, and learnable queries, and learns to decompose the scene into objects in a compact latent space\. On both synthetic and real\-world datasets, CoLa3D achieves state\-of\-the\-art performance on composable 3D scene decomposition, substantially improving global scene\-level consistency and object\-level quality while running $2\\times$ faster and using less than 1% of SAM 3D's training data\. Visible depth on par with MoGe2 further confirms that latent decomposition preserves accurate visible scene geometry while producing physically complete, decomposable object meshes\.

## EgoMo3R: Joint Egocentric Motion and Scene Reconstruction

**Authors:** Chaitanya Patel; Yusuke Kato; Rin Takahira; Kazuki Kozuka; Juan Carlos Niebles; Ehsan Adeli

**ID:** 154591 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CRnKeP6gZr>) | [PDF](<https://openreview.net/pdf?id=CRnKeP6gZr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154591>)

Understanding holistic 3D human motion and the surrounding environment from egocentric video is fundamental for applications in AR/VR and robotics\. Although these tasks are inherently coupled, existing methods treat them separately\. In particular, egocentric motion reconstruction methods typically assume access to metric, gravity\-aligned camera trajectories from specialized inertial sensors\. Recovering such trajectories from monocular egocentric video remains a significant challenge due to rapid head movements and motion blur\. We present EgoMo3R, a joint optimization framework that simultaneously reconstructs 3D human motion and scene geometry from casual egocentric video\. To bridge the egocentric domain gap that often hinders end\-to\-end models, our approach leverages the robustness of low\-level visuo\-geometric primitives, including monocular depth, optical flow, and point tracks, integrated with a diffusion\-based human motion prior via first\-order optimization\. We propose an alternating optimization scheme that establishes a synergistic feedback loop: scene reconstruction provides physical grounding and trajectory conditioning for the motion prior, while the motion prior regularizes the camera trajectory and anchors the scene in a metric, gravity\-aligned world frame\. We evaluate EgoMo3R on the highly dynamic sequences of the EgoExo4D and Nymeria datasets and show that it outperforms specialized baselines in both 3D scene reconstruction and egocentric motion estimation\.

## SeeSE3: The Emergence of 3D Space in Vision Features

**Authors:** Viorica Patraucean; Leonidas Guibas; Sayna Ebrahimi; Caroline Chen; Ming\-Hsuan Yang; Maks Ovsjanikov; Fedor Kitashov

**ID:** 150379 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iW8SfqJzsb>) | [PDF](<https://openreview.net/pdf?id=iW8SfqJzsb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150379>)

In this paper, we ask whether vision foundation models construct representations that reflect the intrinsic properties of 3D Euclidean space\. Unlike previous works that probe 3D awareness of vision features by regressing image\-centric quantities such as depth or normals, we investigate the relation between the structure of the space of visual features  and the group of Euclidean transformations $SE\(3\)$\. We propose a set of probes to evaluate this relation from both topological and geometric perspectives: a mutual neighborhood metric that measures the alignment between feature neighborhoods and spatial topology, and a Poincaré Adapter to test the linear accessibility of the geometry of camera motion from latent displacements in static scenes\. We show that self\-supervised vision models, which, in principle, have not been trained with direct 3D supervision or active agency, possess latent subspaces that are remarkably strongly correlated with the structure of Euclidean space when probed correctly\. Building on this insight we propose a new class of \`\`Latent\-Space Navigation'' techniques that perform visual odometry and localization purely in the visual latent space, bypassing the need for explicit 3D reconstruction\.

## RPC\-GS: Gaussian Splatting with native RPC Rendering for Satellite Imagery

**Authors:** Valentin Wagner; Sebastian Bullinger; Christoph Bodensteiner; Michael Arens

**ID:** 155918 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1pXVfZYbAY>) | [PDF](<https://openreview.net/pdf?id=1pXVfZYbAY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155918>)

We present RPC\-GS, the first Gaussian Splatting framework for satellite imagery that operates natively with Rational Polynomial Camera \(RPC\) models\. The RPC model is the de facto standard for representing the complex imaging geometry of modern pushbroom satellite sensors\. To simplify rendering, prior satellite Gaussian Splatting methods replace the RPC model with perspective or affine camera approximations, leading to geometric errors during reconstruction\. RPC\-GS avoids these approximations by projecting Gaussian means and covariances directly through the RPC model during the splatting process\. We embed the RPC model in a chain of carefully selected geo\-coordinate transformations representing a mapping from splatting\-suitable scene coordinates to image coordinates\. To map the Gaussian covariance matrices, we derive a numerically robust Jacobian\-based covariance projection for the \(partially nonlinear\) coordinate transformations\. Since RPCs lack an explicit notion of camera depth, we integrate a metric ray\-based depth formulation\. We benchmark RPC, perspective, and affine camera models in a unified framework, with our native RPC renderer consistently achieving the lowest reconstruction error on leading satellite benchmark datasets, improving mean altitude error over perspective and affine approximations by 29\.6\\% and 63\.8\\% on DFC2019, and by 9\.9\\% and 37\.9\\% on IARPA2016\. We release our code to support future research of Gaussian Splatting in the satellite imaging domain\.

## No Pose, No Problem in 4D: Feed\-Forward Dynamic Gaussians from Unposed Multi\-View Videos

**Authors:** Matteo Balice; Yanik Künzi; Chenyangguang Zhang; Matteo Matteucci; Marc Pollefeys; Sunghwan Hong

**ID:** 155864\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155864

[Paper](<https://openreview.net/forum?id=2KlxKfG6ly>) | [PDF](<https://openreview.net/pdf?id=2KlxKfG6ly>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155864>)

Recent feed\-forward 3D gaussian splatting methods have made dramatic progress on individual aspects of 3D scene reconstruction, but no existing method jointly addresses dynamic content, multi\-view input, and unknown camera poses in a single feed\-forward pass\. Methods that handle dynamics either require accurate camera poses or accept only monocular input; pose\-free multi\-view methods address only static scenes; and per\-scene optimization methods bridge some of these gaps but at minutes\-to\-hours cost per scene\. We introduce NoPo4D, the first feed\-forward system that addresses this empty quadrant\. Building on a pretrained geometry backbone and recent 4D Gaussian frameworks, NoPo4D introduces a velocity decomposition that splits Gaussian motion into per\-pixel image\-plane shifts and depth changes, allowing direct supervision from pseudo ground\-truth optical flow on the 2D component\. This sidesteps both the differentiable rendering that couples prior posed methods to pose accuracy and the 3D motion ground truth that prior pose\-free methods require\. The system is rounded out by a bidirectional motion encoder for cross\-view and cross\-frame feature aggregation, and view\-dependent opacity that mitigates cross\-view and cross\-timestep Gaussian misalignments\. On four multi\-view dynamic benchmarks, NoPo4D consistently outperforms prior feed\-forward baselines, and with an optional post\-optimization stage surpasses per\-scene optimization methods, while running orders of magnitude faster\. Code and the pretrained weights will be made publicly available\.

## TTB: Test\-time MLP Baking for Efficient Rendering of Decoder\-only View Synthesis Models

**Authors:** Chin\-Yang Lin; Ryo Hachiuma; Jaesung Choe; Min\-Hung Chen; Frank Wang; Yen\-Yu Lin; Wei\-Chen Chiu; Yu\-Lun Liu; Cheng Sun

**ID:** 154935 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9pt0ng1IDx>) | [PDF](<https://openreview.net/pdf?id=9pt0ng1IDx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154935>)

Decoder\-only Large View Synthesis Models \(LVSMs\) with KV\-cache have recently achieved state\-of\-the\-art quality by regressing novel views from neural networks without reconstructing 3D geometry, while Test\-Time Training \(TTT\) layers can be introduced to save computation, but sacrifice quality\. We propose \*\*T\*\*est\-\*\*T\*\*ime \*\*B\*\*aking \(\*\*TTB\*\*\), a strategy that learns to bake global scene information from cross\-view attention into a lightweight MLP, enabling fast and high\-fidelity novel\-view decoding\. The first key is to repurpose the fast\-weight MLP of TTT to learn the cross\-view attention mapping explicitly from its input\-output pairs, rather than replacing attention entirely, achieving the same rendering efficiency as TTT while delivering substantially higher quality\. The second key addresses a modality misalignment between context prefilling and novel\-view rendering: we disentangle context tokens into camera\-only context rendering tokens to serve as TTB input, and context ground\-truth tokens with image content to serve as the TTB mapping target, ensuring the baked MLPs are relieved of the modality generalization challenge between context and novel\-view processing\. Our method achieves up to \*\*23x\*\* rendering speedup with quality on par with the state\-of\-the\-art across several benchmarks\.

## SynGS: Synergistic Continual Learning and Change Detection with Gaussian Splatting

**Authors:** Rui Huang; Haojie Tao; Sen Gao; Qing Guo

**ID:** 153370 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ls29PxSARF>) | [PDF](<https://openreview.net/pdf?id=Ls29PxSARF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153370>)

3D Gaussian Splatting enables high\-fidelity, real\-time novel view synthesis, yet adapting it to dynamic, evolving scenes remains challenging\. Existing methods rely on fixed static\-dynamic partitioning, which suffers from persistent partitioning errors and cannot adapt during optimization\. To tackle this issue, we introduce SynGS, a unified 3D Gaussian framework for continual scene updating and multi\-view change detection\. We cast static\-dynamic decomposition as a learnable task, jointly optimizing per\-Gaussian change probabilities and scene representations for iterative refinement\. We further propose a change\-guided update strategy that modulates illumination\-aware photometric corrections via learned probabilities, separating transient appearance variations from authentic scene changes\. Projecting Gaussian\-level probabilities to the image plane yields 3D\-consistent change masks, enabling mutual optimization between reconstruction and change localization\. An illumination\-decoupled refinement step further improves mask quality\. Evaluations on standard benchmarks show that SynGS outperforms baseline methods on scene update and change detection tasks, while fully retaining the real\-time rendering capability of 3D Gaussian Splatting\. Code will be released upon acceptance\.

## RayTun3R: Online Camera Adaptation in 3D Foundation Models

**Authors:** Daniil Sinitsyn; Nikita Araslanov; Daniel Cremers

**ID:** 151667 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YusfyNZLcm>) | [PDF](<https://openreview.net/pdf?id=YusfyNZLcm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151667>)

Recent 3D foundation models, such as DUSt3R, MASt3R, VGGT, $\\pi^3$, and Depth Anything 3, provide strong feed\-forward depth and pose estimates on pinhole imagery, but degrade sharply under fisheye camera geometry\. We show that this failure is partly caused by a pinhole camera bias in the positional encodings of pretrained 3D foundation models, and propose RayTun3R, a lightweight camera adaptation approach\. It keeps the pretrained network fixed and adapts only lightweight components tied to token position and camera geometry\. RayTun3R learns parameter\-efficient residual corrections to absolute and rotary positional encodings, together with parameter\-free tokenization and corrections to prediction\-grid coordinates that remove residual pinhole assumptions\. The resulting adapter contains only 10,752 trainable parameters and can be learned from a short temporal segment using geometric losses\. Once adapted, RayTun3R transfers effectively to the remaining frames of the sequence without incurring additional runtime costs\. Across diverse fisheye datasets with fields of view from $110^\\circ$ to $200^\\circ$, our adapter reduces rotation error by $2\-12\\times$ relative to the unadapted model, outperforms LoRA while using $\\sim14\\times$ fewer trainable parameters, improves pose over adaptation\-free baselines while avoiding their multi\-view inference cost, and remains competitive on depth accuracy\.

## GenRec: Knowing Where to Reconstruct and Where to Generate

**Authors:** Ata Çelen; Jaewoo Jung; Federico Tombari; Marc Pollefeys; Sunghwan Hong; Michael Niemeyer; Daniel Barath

**ID:** 149818 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=n68heFQnNa>) | [PDF](<https://openreview.net/pdf?id=n68heFQnNa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149818>)

Generative novel view synthesis from sparse input images is rarely all reconstruction or all generation: pixels visible in some source view have a unique correct value modulated only by view\-dependent shading, while pixels in disocclusions or beyond the captured volume admit a distribution of plausible completions\. Existing generative novel\-view\-synthesis methods conflate these regimes under a single uniform loss, blurring the line between geometric fidelity and creative hallucinations even when scene geometry is injected through warped point clouds or projected depth\. We introduce GenRec, a multi\-view flow matching model that builds the reconstruction\-\-generation split directly into its architecture, supervision, and gradient flow\. Guided by an observation mask derived from the source cameras and a monocular depth estimator, a flow matching backbone jointly denoises RGB and scene\-coordinate maps across all target views, while a pixel\-space refinement stage restores high\-frequency detail on observed pixels; the same mask gates supervision so regression signals do not contaminate the generative prior\. Across RealEstate10K, DL3DV\-10K, and Mip\-NeRF\~360, in both single\-view extrapolation and two\-view interpolation, GenRec attains the best reconstruction fidelity in observed regions while also surpassing purely generative baselines on perceptual quality in unobserved ones, showing the effectiveness of our approach\. The source code and trained models will be made public\.

## Walking Through 3D Spaces: Spatial Routing for Referring 3D Gaussian Splatting Segmentation

**Authors:** Peilin Ji; Changshuo Wang; Yong Zhang; Shuting He

**ID:** 148604 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wVPJvyJlBd>) | [PDF](<https://openreview.net/pdf?id=wVPJvyJlBd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148604>)

This paper introduces Walk3D, a novel 3D Gaussian Splatting \(3DGS\) framework explicitly designed for 3D referring segmentation, particularly excelling at interpreting complex, long\-sentence descriptions\. Our primary motivation stems from observing that existing 3DGS\-based open\-vocabulary methods mainly focus on simple, category\-level object segmentation\. These methods struggle to precisely segment targets described by highly detailed, multi\-sentence queries due to weak compositional language understanding and a lack of structural scene awareness\. To tackle these dense and complex linguistic constraints, we propose a spatial routing network that decodes these queries into sequential chain\-of\-thought instructions upon a scene graph\. Specifically, we construct a static supernode graph based on the geometric and semantic properties of the 3DGS space, where a spatial Graph Neural Network \(GNN\) dynamically pathfinds using the decomposed linguistic chain to accurately segment the referred target\. Extensive experiments on complex 3D referring segmentation benchmarks demonstrate the superiority of our proposed method in interpreting lengthy, multi\-conditional queries\. Our code and trained models will be publicly released\.

## Real2Sim in HOI: Toward Physically Plausible HOI Reconstruction from Monocular Videos

**Authors:** Yubo ZHAO; Yujin Chai; Yunao Dong; Chengfeng Zhao; Zijiao Zeng; Yuan Liu; Chi\-Keung Tang

**ID:** 153854 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IEWj0cJL3s>) | [PDF](<https://openreview.net/pdf?id=IEWj0cJL3s>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153854>)

Recovering 4D human\-object interaction \(HOI\) from monocular video is a key step toward scalable 3D content creation, embodied AI, and simulation\-based learning\. Recent methods can reconstruct temporally coherent human and object trajectories, but these trajectories often remain visual artifacts while failing to preserve stable contact, functional manipulation, or physical plausibility when used as reference motions for humanoid\-object simulation\. This reveals a fundamental interaction gap: HOI reconstruction should not stop at tracking a human and an object, but should recover the relation that makes their motion a coherent interaction\. We introduce \*\*HA\-HOI\*\*, a framework for reconstructing physically plausible 4D HOI animation from in\-the\-wild monocular videos\. Instead of treating the human and object as independent entities in an ambiguous monocular 3D space, we propose a \\emph\{human\-first, object\-follow\} formulation\. The human motion is recovered as the interaction anchor, and the object is reconstructed, aligned, and refined relative to the human action\. The resulting kinematic trajectory is then projected into a physics\-based humanoid\-object simulation, where it acts as a teacher trajectory for stable physical rollout\. Across benchmark and in\-the\-wild videos, \*\*HA\-HOI\*\* improves human\-object alignment, contact consistency, temporal stability, and simulation readiness over prior monocular HOI reconstruction methods\. By moving beyond visually plausible trajectory recovery toward physically grounded interaction animation, our work takes a step toward turning general monocular HOI videos into scalable demonstrations for humanoid\-object behavior\.

## UniSHARP: Universal Sharp Monocular View Synthesis

**Authors:** Meixi Song; Dizhe Zhang; Ruiyang Zhang; Bo Du; Ming\-Hsuan Yang; Lu Qi

**ID:** 148426 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xulkH6QbPb>) | [PDF](<https://openreview.net/pdf?id=xulkH6QbPb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148426>)

In this work, we focus on extending SHARP, the popular photorealistic view synthesis method, for universal monocular rendering across diverse camera systems, such as large\-field\-of\-view fisheye lenses\. To overcome the pinhole\-specific assumptions of SHARP, our key idea is to align various images in a unified omnidirectional latent space\. Thus, we propose UniSHARP, which performs implicit alignment in both feature and Gaussian spaces\. Specifically, 2D semantic embeddings and 3D spatial features are jointly encoded and decoded by UniK3D to support Gaussian construction, while a ray\-based universal representation organizes Gaussian primitives along rays and radial distances\. To comprehensively evaluate our method, we construct a benchmark covering diverse imaging systems, including pinhole, fisheye and panoramic cameras, across various scenes\. The benchmark is further stratified by field of view, spanning narrow perspective, wide\-FoV, fisheye, and full panoramic settings\. Extensive experiments on the proposed benchmark demonstrate the effectiveness of UniSHARP, outperforming alternative methods by a large margin\. Our models, training code, and dataset will be publicly available\.

## Register Anything Model for Generalizable and Robust Point Cloud Registration

**Authors:** Zheng Qin; Junhua Xi; Yan Huang; JiaHong Lai; Anwen Huang; Qiong Li; Guangda Zhang; Kai Xu

**ID:** 149369 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qZ0AeP1jSv>) | [PDF](<https://openreview.net/pdf?id=qZ0AeP1jSv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149369>)

We present Register Anything Model \(RAM\), a unified model for generalizable 3D point cloud registration that robustly estimates 6\-DoF transformations across diverse domains spanning sensors and environments\. Existing registration methods are typically tailored to a single domain, with carefully tuned architectures and hyperparameters, and thus degrade markedly when applied to novel domains\. We bridge this gap by training a single model on diverse data from indoor, outdoor, and object domains\. A central challenge is the severe geometric discrepancy across domains, i\.e\., differences in scene scale, sensor noise, point density, and structural patterns, which hinders processing with a unified point\-based model\. To address this, we introduce a geometry\-aware normalization strategy that jointly voxelizes and normalizes point clouds into a standarized geometric space, adaptively based on their geometric properties to preserve salient local structures while standardizing resolution\. Built on this normalization, RAM follows a hierarchical coarse\-to\-fine paradigm, and employs an efficient geometric transformer that models local geometric consistency instead of over all points\. This design mitigates discretization noise introduced by voxelization, and improves computational efficiency\. Extensive experiments on $12$ benchmarks demonstrate state\-of\-the\-art performance in terms of inlier ratio and registration recall\. Notably, our method outperforms the counterparts trained on each separate domain, showing superior generalization capability\. Code and models will be released upon publication\.

## StereoSplat: Metric\-Scale Novel View Synthesis via Stereo\-Grounded Gaussian Splatting

**Authors:** Vladimir Yugay; Denis Rozumny; Theo Gevers; Elias Vansteenkiste; Martin R\. Oswald; Diogo Luvizon

**ID:** 153656 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JitF58nQ2Q>) | [PDF](<https://openreview.net/pdf?id=JitF58nQ2Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153656>)

We present StereoSplat, a feed\-forward 3D Gaussian Splatting architecture designed explicitly for stereo videos to achieve reliable, metric\-scale novel\-view synthesis\. Unlike monocular approaches that neglect the nature of binocular pairs, StereoSplat adopts a native stereo architecture that extracts dense multi\-scale latent features and disparity from a foundation stereo backbone and feeds them into a dedicated Gaussian decoder\. Our decoder utilizes cross\-view feature fusion and gated spatial refinement to directly translate these rich representations into per\-pixel 3D Gaussians\. To resolve the high redundancy of per\-pixel predictions across overlapping views, we propose a learnable depth\-adaptive aggregation mechanism that clusters and aggregates primitives in inverse\-depth space while preserving fine\-grained details\. To support robust training and generalization, we introduce XRStereo, a large\-scale synthetic dataset of stereo video featuring various rig configurations tailored to match the physical hardware of real\-world platforms\. Trained exclusively on synthetic data and evaluated across challenging benchmarks, StereoSplat yields substantial improvements in the depth accuracy of rendered novel views over established baselines while maintaining high\-fidelity novel view synthesis\. By overcoming prior geometric limitations, our framework enables robust zero\-shot transfer to real\-world domains, offering a scalable geometric foundation for spatial computing in mixed reality, autonomous driving, and robotics\.

## RigRecon: Efficient Rig\-Aware Street Reconstruction via Dual\-Path Spatio\-Temporal Interaction

**Authors:** Jiaming Guo; Hongcheng Luo; Cheng Chi\_; Lijun Zhou; Bing Wang; Guang Chen; Hangjun Ye; Jiaqi Yang; Xiaowei Zhou; Haiyang Sun; Sida Peng

**ID:** 152889 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PdpQ8Gxwy0>) | [PDF](<https://openreview.net/pdf?id=PdpQ8Gxwy0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152889>)

Reconstructing multi\-camera videos is a fundamental task in autonomous driving\. However, recent learned methods either rely on costly attention\-based networks for global geometry modeling or require complex post\-hoc alignment for chunked predictions, limiting their scalability to long multi\-view rig sequences\. We propose RigRecon, a generalized rig\-aware reconstruction framework that enables efficient cross\-view interaction in a low\-resolution space while asynchronously decoding high\-resolution depth maps in a frame\-wise manner\. Input images are first down\-sampled and processed by a transformer backbone to capture coarse global structure, which is then provided to a decoder to reconstruct frame\-wise high\-resolution depth maps\. By fully leveraging calibration and low\-resolution feature interaction, RigRecon achieves consistent\-scale geometry and accurate pose estimation with significantly reduced memory cost\. It achieves state\-of\-the\-art performance on 3D reconstruction, depth estimation, and camera pose estimation, and can efficiently process videos with over 1000 images in a single feedforward pass\.

## StructBridge: Structure\-Grounded 3D Indoor Object Generation via 3D Latent Diffusion Bridge and Normal Refinement

**Authors:** Nange Wang; Zhanxu Bai; Yuxuan Li; Cewu Lu; Jianhua Sun

**ID:** 154515 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D0YUN8U2RL>) | [PDF](<https://openreview.net/pdf?id=D0YUN8U2RL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154515>)

Generating 3D indoor objects under fine\-grained structural control is crucial and has broad applications in robotics, gaming, and simulation\. Such fine\-grained structural control encompasses an object’s spatial layout, geometric icons, and relative size, which together constitute the object’s core structural properties\. However, existing controllable 3D generation methods do not take structural control as a primary objective, and they commonly rely on suboptimal conditions in representing structure or inadequate algorithms for maintaining structural consistency\. Therefore, they fail to achieve fine\-grained structural control during generation\. To address this, we present structure\-grounded 3D object generation, a novel perspective on 3D object generation, which decomposes 3D shapes into structural configurations and geometric details, directly conditions on the object’s structural configurations and synthesizes realistic geometric details to produce high\-quality 3D objects\.  Building on this perspective, we introduce StructBridge, which first employs a diffusion bridge in the 3D latent space to transform comprehensive structural conditions into structurally accurate coarse meshes, followed by a structure\-preserving normal refiner that enriches geometric details while preserving structure\. We conduct extensive experiments and comprehensive comparisons with various conditional generation methods, demonstrating that StructBridge achieves state\-of\-the\-art performance in both generation quality and structural control capabilities\.

## Towards Complementary Keypoint Detection via Mixture of Detectors

**Authors:** Xiaoyong Lu; Guobao Xiao; Dong Liang; Songlin Du

**ID:** 154279 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F1HI02weX5>) | [PDF](<https://openreview.net/pdf?id=F1HI02weX5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154279>)

Keypoint detection plays a central role in geometric vision pipelines\. Existing detectors exhibit complementary strengths across different scene structures and keypoint budgets, and reliance on a single detector often results in suboptimal keypoint distributions\. Motivated by this observation, we propose \*\*Mixture of Detectors \(MoD\)\*\* for dense matching pipelines, a unified framework for complementary keypoint detection through the adaptive composition of heterogeneous detectors\. MoD first distills heterogeneous detectors into a unified model, allowing diverse detection maps to be predicted efficiently within a single forward pass\. Detector selection is subsequently formulated as a patch\-wise, budget\-conditioned decision process, in which a lightweight router assigns the most suitable detector to each local region\. To avoid heuristic supervision, the router is trained with task\-driven rewards derived from downstream matching quality, jointly capturing both keypoint quantity and precision\. Extensive experiments on MegaDepth, ScanNet, and HPatches demonstrate that MoD consistently outperforms strong baselines across a wide range of keypoint budgets, demonstrating its effectiveness in improving keypoint distribution and downstream geometric performance\.

## Optimized Minimal 4D Gaussian Splatting for Efficient Dynamic Scene Representation

**Authors:** Minseo Lee; Byeonghyeon Lee; Lucas Y Lee; Eunsoo Lee; Jun Y Jeong; Sangmin Kim; Seunghyeon Song; Joo Chan Lee; Jong Hwan Ko; Jaesik Park; Eunbyung Park

**ID:** 151445 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=acqj54vfk6>) | [PDF](<https://openreview.net/pdf?id=acqj54vfk6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151445>)

4D Gaussian Splatting has emerged as a new paradigm for dynamic scene representation, enabling real\-time rendering of scenes with complex motions\. However, it faces a major challenge of storage overhead, as millions of Gaussians are required for high\-fidelity reconstruction\.  Compressing explicit 4D Gaussians is challenging because they exhibit heterogeneous redundancy across static and dynamic regions, and their temporal attributes make direct quantization unstable\. In this work, we present OMG4 \(Optimized Minimal 4D Gaussian Splatting\), a framework that constructs a compact set of salient Gaussians capable of faithfully representing 4D Gaussian models\. Our method progressively reduces Gaussians in three stages: \(1\) Gaussian Sampling to identify primitives critical to reconstruction fidelity, \(2\) Gaussian Pruning to remove redundancies, and \(3\) Gaussian Merging to fuse primitives with similar characteristics\. In addition, we integrate implicit appearance compression and extend Sub\-Vector Quantization \(SVQ\) to 4D representations with a staged quantization scheme, further reducing storage while preserving quality\. Extensive experiments on standard benchmark datasets demonstrate that OMG4 achieves a favorable rate\-distortion trade\-off over recent state\-of\-the\-art methods, reducing model sizes by over 60\\% while maintaining reconstruction quality\. These results demonstrate the effectiveness of OMG4 as a practical framework for compact and high\-fidelity 4D scene representation\.

## 3D Fresnel Volumizing for Efficient Implicit Velocity Field Reconstruction

**Authors:** Sihan Chen; haochen sun; Peng Jiang; Anthony Cohn

**ID:** 155228 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7JwhEn9uk1>) | [PDF](<https://openreview.net/pdf?id=7JwhEn9uk1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155228>)

Reconstructing velocity distributions using wavefield responses provides a powerful tool for probing the internal structures of objects and has been widely applied in nondestructive testing, geological exploration, and medical imaging\. While full waveform inversion \(FWI\) provides high\-resolution results, its severe ill\-posedness and high computational cost hinder efficient 3D reconstruction\. In this paper, we propose a novel framework for efficient 3D internal velocity field reconstruction\. First, we parameterize the velocity field with a coordinate\-based neural network as an implicit continuous function, enabling compact representation from sparse observations\. Second, we adopt ray\-based traveltime tomography with multi\-level parallel forward modeling to accelerate computation\. Third, we introduce a differentiable Fresnel volumizing method that extends 1D ray paths into 3D volumetric regions \(i\.e\., Fresnel volumes\), enabling spatially continuous and multi\-scale gradient diffusion, thus alleviating gradient sparsity and improving reconstruction accuracy\. To further improve efficiency, we propose a 2D slice\-based construction of 3D Fresnel volumes using a lightweight neural network\. Extensive experiments on synthetic datasets, including ablation studies, demonstrate up to 10 times speedup over FWI while maintaining comparable accuracy, validating the effectiveness of the proposed method for efficient 3D inverse problems\.

## Intrinsic\-Preserving Schrödinger Bridge for Direct Part\-Aware 3D Generation

**Authors:** Qitong Yang; Mingtao Feng; Zijie Wu; Jie Feng; Weisheng Dong; Ajmal Mian

**ID:** 152274 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UIvwoPccJx>) | [PDF](<https://openreview.net/pdf?id=UIvwoPccJx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152274>)

Controllable 3D generation is a fundamental challenge in computer vision\. Existing classifier\-free guidance methods often yield suboptimal alignment with the given conditions, while Schr"\{o\}dinger Bridge approaches overlook intrinsic geometric discrepancies across multimodal manifolds, leading off\-manifold trajectories and semantic misalignment\. To address these issues, we propose Intrinsic\-Preserving Schr\\"\{o\}dinger Bridge \(IPSB\), a novel framework for direct part\-aware 3D generation that leverages cross\-modal intrinsic consistency\. Specifically, we introduce Hierarchical Part\-level Cross\-modal Encoder that constructs hierarchical part\-level representations through probability\-based soft coverage, explicitly constraining graph topology to establish semantically consistent part graphs across modalities\. Additionally, our IPSB incorporates asymmetric GW\-inspired relational regularization, which strictly preserves the intrinsic semantic structure in the conditional manifold while allowing sufficient geometric flexibility in the 3D target manifold\. Based on our IPSB framework, we devise Compositionally Controllable 3D Generation based on part\-wise intervention inference, enabling independent replacement or resampling of target part nodes while fixing the trajectories of remaining components, thus achieving part\-level controllable editing without full regeneration\. Extensive experiments demonstrate that our superiority, efficiency and generality\.

## Not All Spines Are Created Equal: How CT Segmenters Fail on Lumbosacral Transitional Vertebrae

**Authors:** Gregory Schwing; Patrick Schwing; Miraziz Ismoilov; Nizar Alnabahneh; Loren Schwiebert

**ID:** 139654 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D8yRWDAGQF>) | [PDF](<https://openreview.net/pdf?id=D8yRWDAGQF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139654>)

Wrong\-level spine surgery remains a persistent never\-event, with the Lumbosacral Transitional Vertebra \(LSTV, 5–35% prevalence\) as its largest anatomic driver\. We audit TotalSegmentator — the most widely deployed CT segmentation system and default back\-end of 3D Slicer — and show that on lumbarization cases its output is anatomically indistinguishable from a wrong\-level surgical plan: lacking an L6 class, it shifts lumbar labels caudally by one level, with junction\-DSC dropping 29 points on Any\-LSTV\. No existing CT benchmark surfaces this — not TotalSegmentator's own evaluation, not Li et al\. \(2025\) \(the per\-class DSC frontier on the matched COLONOG split\), and not VERIDAH \(vertebra\-labeling SOTA on a private CT cohort, operating on pre\-localized crops with no pelvis\)\. We contribute: \(i\) an LSTV\-stratified evaluation protocol \(per\-class DSC, junction\-DSC over a 40 mm L5/S1 window, per\-class voxel confusion at the junction\) translating the level\-shift mechanism into quantifiable wrong\-level surgical risk; \(ii\) CTSpinoPelvic1K — 1,153 CT volumes across 802 patients with unified spinopelvic masks, 33 LSTV\-positive cases across a 6\-way phenotype taxonomy, and radiologist Castellvi typing \(I–IV\) on all 33; \(iii\) the first publicly\-released merge\-based LSTV\-handling dual\-spinopelvic CT segmenter, exceeding TotalSegmentator on sacrum \(TS=0\.817 zero\-shot\) and uniquely delivering both spine and pelvis in a single forward pass with released weights; \(iv\) an empirical isolation showing VERIDAH's training\-side L5/L6 merge eliminates the collision driving TotalSegmentator's level shift but exposes a residual L4/last\_lumbar collision on count\-style sacralization, motivating VERIDAH's sequence predictor as the necessary disambiguation component\. CTSpinoPelvic1K, the protocol, and 5\-fold checkpoints are released publicly\.

## A 3D Scene is Worth 1K Tokens: 3D\-Grounded Representation for Scene Generation at Scale

**Authors:** Dongxu Wei; QiXu; Zhiqi Li; Hangning Zhou; Cong Qiu; Hailong Qin; Mu Yang; Zhaopeng Cui; Peidong Liu

**ID:** 148286 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z0550PJPjK>) | [PDF](<https://openreview.net/pdf?id=z0550PJPjK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148286>)

Scene\-level 3D generation has long been dominated by 2D multi\-view or video diffusion models\. Typically, these 2D\-based approaches perform scene generation in a 2D latent space, which introduces two fundamental issues: \(i\) representing 3D scenes via 2D views leads to significant representation redundancy, and \(ii\) latent space rooted in 2D inherently limits the spatial consistency of the generated scenes\. In this paper, we propose to perform 3D scene generation directly within a high\-dimensional implicit 3D latent space derived from powerful 2D foundation models \(e\.g\., DINOv2, SigLIP2, DA3\)\. Then we tame diffusion transformers to perform diffusion modeling directly in the 3D latent space, enabling 3D\-grounded scene generation\. In our experiments, we not only demonstrate the advantages of our method over 2D\-based approaches in terms of efficiency and spatial consistency, but also comprehensively analyze the impact of 3D latent representation on 3D scene generation performance\. Furthermore, we validate the favorable scalability of our method with respect to representation and model capacity\.

## TrackFish3D: Self\-Supervised 3D Tracking of Schooling Fish from Multi\-view Videos

**Authors:** Patt Phurtivilai; Zhiyang \(Frank\) Dou; Yifan Wu; Kinfung Chu; Yuan Liu; Lei Yang; Wenping Wang; Taku Komura

**ID:** 152726 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QoMSgn3Pyt>) | [PDF](<https://openreview.net/pdf?id=QoMSgn3Pyt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152726>)

Quantifying collective fish behavior requires accurate trajectories, yet multi\-view 3D tracking remains challenging due to frequent occlusions, visually similar individuals, and the long\-standing scarcity of identity annotations\. We present TrackFish3D, a geometry\-driven self\-supervised framework for dense multi\-camera 3D tracking of schooling fish\. Instead of relying on appearance\-based re\-identification or manually annotated identities, TrackFish3D turns calibrated multi\-view geometry into supervision: triangulation and reprojection consistency provide pseudo\-associations, while a geometric encoder and global association transformer learn all\-to\-all cross\-view correspondence within each frame\. To make these associations identity\-aware, TrackFish3D introduces an effective self\-supervised contrastive objective that separates co\-visible individuals in the embedding space, together with a temporal predictor that preserves identities and bridges short occlusions across frames\. The resulting model is trained once on unlabeled footage and applied directly to unseen test videos, requiring no cross\-view identity labels, temporal annotations, 3D ground truth, appearance features, or test\-time optimization\. On our benchmark, TrackFish3D improves 3D Multi\-Object Tracking Accuracy from 83\.7% for the strongest baseline to 96\.6%\. On the 3D\-ZeF zebrafish benchmark, it achieves 81\.1% MOTA, compared with 77\.4% for the best geometric baseline\. TrackFish3D also generalizes beyond fish, achieving strong results on real\-world bird tracking\. We will release our code and model upon acceptance\.

## Stroke\-Audited Quadratic Bezier Splatting with Structural Initialization for Efficient Painting Rendering

**Authors:** Jinfan Liu; Xuhan Zhan; Mengqin Zhao; Guangyi Deng; Wuze Zhang; Bingbing Ni

**ID:** 149749 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ne2npUMVAe>) | [PDF](<https://openreview.net/pdf?id=ne2npUMVAe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149749>)

Stroke\-based rendering is often optimized as a pixel\-level reconstruction task\. This over\-reliance on global error reduction not only degrades strokes into fragmented curves due to a lack of structured planning, but also allows locally defective primitives to be concealed by overlapping layers\. To address these issues, we introduce a model\-guided framework for stroke\-audited rendering\. Our framework uses Quadratic Bezier Splatting to analytically model continuous curved strokes with efficient differentiable alpha compositing\. Built on this renderer, a feedforward multi\-scale stroke decoder provides a structural initialization with learned stroke\-scale allocation, while test\-time stroke optimization supplies the reconstruction capacity needed for high\-fidelity refinement\. We further propose a single\-stroke audit mechanism that explicitly evaluates local stroke quality, preventing defective primitives from surviving optimization through layer\-wise compensation\. Experiments demonstrate our approach achieves highly coherent layouts, improving PSNR by up to 20\\% and yielding a 58\.8$\\times$ renderer speedup with a 16\\% more compact representation compared to representative SBR baselines\.

## UniGS: Unified Geometry\-Aware Gaussian Splatting for Multimodal Rendering

**Authors:** Yusen XIE; Zhenmin Huang; Jianhao Jiao; Dimitrios Kanoulas; Jun Ma

**ID:** 152723 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QqB9JRnM29>) | [PDF](<https://openreview.net/pdf?id=QqB9JRnM29>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152723>)

In this paper, we propose UniGS, a unified map representation and differentiable framework for high\-fidelity multimodal 3D reconstruction based on 3D Gaussian Splatting\. Our framework integrates a CUDA\-accelerated rasterization pipeline capable of rendering photo\-realistic RGB images, geometrically accurate depth maps, consistent surface normals, and semantic logits simultaneously\. We redesign the rasterization to render depth via differentiable ray\-ellipsoid intersection rather than using Gaussian centers, enabling effective optimization of rotation and scale attribute through closed\-form analytic depth gradients\. Furthermore, we derive the analytic gradient formulation for surface normal rendering, ensuring geometric consistency among the reconstructed 3D scenes\. To improve computational and storage efficiency, we introduce a learnable attribute that enables differentiable pruning of Gaussians with minimal contribution during training\. Quantitative and qualitative experiments demonstrate the state\-of\-the\-art reconstruction accuracy across several datasets, validating the efficacy and robust optimization stability of our geometry\-aware paradigm\.

## Complexity\-guided Regularization for Generalizable Human Gaussian Splatting

**Authors:** Gun Ryu; Gi\-Mun Um; Won\-Sik Cheong; Wonjun Kim

**ID:** 148201 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zbm9QnDqWY>) | [PDF](<https://openreview.net/pdf?id=zbm9QnDqWY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148201>)

Recent studies on generalizable human Gaussian splatting have achieved the notable progress in synthesizing novel views of unseen human subjects from multi\-view images\.  Despite this progress, existing methods still struggle to represent fine\-grained details of human subjects, which inherently involve high geometric and textural complexity\.  This is because previous methods do not impose a constraint on how densely Gaussians are placed, which often leads to blurry rendering results in complex regions\.  To address this problem, we propose a complexity\-guided regularization scheme\. The key idea is to leverage a complexity prior computed via the local entropy in geometric and textural characteristics of a clothed human\.  This effectively prevents Gaussians from being coarsely placed in complex regions, which facilitates the faithful reconstruction of intricate structures\.  Furthermore, we sample local patches predominantly from complex regions according to this complexity prior, which allows the model to be sufficiently supervised by local details\. Experimental results on benchmark datasets demonstrate that our method delivers state\-of\-the\-art performance while maintaining the real\-time inference speed in generalizable human Gaussian splatting\.

## 3R\-Adapter: Retrieval, Rewiring, and Refinement for Efficient Adaptation of 3D Reconstruction Model

**Authors:** Zixiang Ai; Zhenyu Cui; Xu Zou; Jiahuan Zhou

**ID:** 155977\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155977

[Paper](<https://openreview.net/forum?id=1PQ7pf3kVm>) | [PDF](<https://openreview.net/pdf?id=1PQ7pf3kVm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155977>)

_Abstract unavailable from the accessible public sources._

## GHOST: Geometry\-Hierarchical Online Streaming Token Eviction for Efficient 3D Reconstruction

**Authors:** Leyang Chen; Junyi Wu; Zhiteng Li; Yulun Zhang

**ID:** 149354\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149354

[Paper](<https://openreview.net/forum?id=qhHNkQs6l0>) | [PDF](<https://openreview.net/pdf?id=qhHNkQs6l0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149354>)

_Abstract unavailable from the accessible public sources._

## $\\pi^2$: A Simple Framework for 2D\-to\-3D Registration

**Authors:** Hao Deng; Xiangtai Yang; Guangmingzi Yang; Xijing Wang; MaYuanxiao; Sisi Li; Zhiqiang Tian; Shaoyi Du

**ID:** 148690\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148690

[Paper](<https://openreview.net/forum?id=vm3afPOLqE>) | [PDF](<https://openreview.net/pdf?id=vm3afPOLqE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148690>)

In this paper, we present $\\pi^2$, a simple, efficient, and accurate image\-to\-point\-cloud \(I2P\) registration paradigm\.  Instead of relying on intermediate targets such as 2D\-\-3D correspondences, matching confidence, visibility masks, overlap regions, or pose\-related proxies, we reformulate I2P registration as point\-wise camera\-centered coordinate regression\. Given a target image and an unaligned LiDAR point cloud, $\\pi^2$ directly predicts where each sampled 3D point should lie in the target camera frame\. The predicted camera\-centered point set is then aligned with the original point set through closed\-form SVD\-based rigid alignment, yielding the final relative pose without iterative pose optimization or a learned pose\-regression head\. To improve robustness under large viewpoint changes and sparse outdoor observations, we further introduce a lightweight camera\-ray\-based regularization objective that provides visibility\-aware supervision during training, without requiring an additional visibility or overlap detection network\. Experiments on KITTI and nuScenes show that $\\pi^2$outperforms the previous SoTA method ICL by 2\.47 and 6\.72 percentage points in registration success rate, respectively, while running in real time at about 25 FPS, corresponding to an up to 6$\\times$ speedup over ICL\. Code and pretrained checkpoints will be made available upon acceptance\.

## Click3R: Interactive Stereo 3D Reconstruction with Sparse Correspondence Clicks

**Authors:** Hao Gu; Jin Yao; Zezhou Cheng

**ID:** 148962\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148962

[Paper](<https://openreview.net/forum?id=tr4R2c2FLR>) | [PDF](<https://openreview.net/pdf?id=tr4R2c2FLR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148962>)

Despite impressive progress, existing feed\-forward stereo 3D reconstruction models produce a single, irrevocable prediction\. When these models fail, there is no mechanism to correct their mistakes\. We introduce Click3R, a framework for interactive geometric correction of feed\-forward models using sparse human correspondence clicks\. Given an image pair and a small set of cross\-view point correspondences provided by a user, Click3R injects geometric constraints into the 3D reconstruction networks through a lightweight point correspondence adapter, enabling the model to resolve ambiguities in challenging scenarios such as repetitive textures, symmetric structures, large viewpoint changes, or textureless regions\. To evaluate interactive reconstruction, we curate a challenging benchmark specifically designed to expose failure modes of existing feed\-forward stereo 3D reconstruction methods\. Experiments show that Click3R dramatically reduces reconstruction error with as few as a single correspondence click, improving performance on both standard benchmarks and our curated dataset\. Our results demonstrate that sparse human interaction provides an effective and practical mechanism for correcting geometric reconstruction errors\.

## Marrying Optimal Transport and ODEs for Unified Continuous\-Time 4D Reconstruction and Tracking

**Authors:** Liying Yang; Hao Mo; Jialun Liu; Chen Liu; Xinxing Yu; Chenhao Guan; Hui Ma; Xiao Cao; Ajian Liu; Yanyan Liang

**ID:** 154616\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154616

[Paper](<https://openreview.net/forum?id=CFlcylAQ6V>) | [PDF](<https://openreview.net/pdf?id=CFlcylAQ6V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154616>)

Existing unified 4D reconstruction and point tracking approaches typically rely on heuristic interpolations or just predict at integer timestamps, lacking kinematic coherence and failing to model dynamics at any arbitrary timestamp\. In this paper, we propose Uni4R, a framework that unifies these tasks by learning continuous velocity fields through the synergy of Optimal Transport \(OT\) and Ordinary Differential Equation \(ODE\)\. Importantly, this continuous velocity field acts as a kinematic prior that mutually benefits both 4D reconstruction and point tracking\. Specifically, we propose the Flow Matching Guided Decoder \(FMGD\)\. A global velocity branch first extracts anchor features that capture the global dynamic state of the sequence\. Then, FMGD leverages Flow Matching \(FM\) theory to formulate a probability path defined by OT on the anchor feature manifold, instantiating it as FM\-guided velocity features for velocity prediction\. This establishes a robust kinematic inductive bias\. Meanwhile, a point reconstruction branch provides geometric features\. The local velocity prediction module then joint above features and time embeddings, to decode velocities at arbitrary timestamps\. To overcome the absence of high\-quality ground\-truth velocities in fractional frames, we propose an integral\-consistency training strategy\. This strategy uses an ODE solver to integrate velocities to recover target pointmaps, enabling the model to be supervised end\-to\-end directly from integer timestamps\. Experimental results demonstrate that Uni4R achieves SOTA performance in both 4D reconstruction and point tracking, and achieves SOTA in our new kinematics\-aware benchmark at continuous time\.

## VeriWorld: A Verifiable Visual SWE\-Bench for Spatial Reasoning in 3D Environments

**Authors:** Yan Zheng; Anthony Peng; XUYAO LIANG; Xiaoyan Cong; Nuo Chen; Bangya Liu; Zihan Wang; Wenyan Cong; Zhiwen Fan; Zhangyang &amp;amp;quot;Atlas&amp;amp;quot; Wang

**ID:** 139095\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139095

[Paper](<https://openreview.net/forum?id=lLZbYegc4T>) | [PDF](<https://openreview.net/pdf?id=lLZbYegc4T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139095>)

Vision\-language models \(VLMs\) are increasingly used for spatial tasks such as navigation and manipulation, where they must infer geometry and object relationships from visual input in order to act correctly\. Existing benchmarks usually test perception and reasoning in isolation, making it hard to tell whether failures come from visual understanding, downstream reasoning, or the bridge between them\. How can we evaluate whether a model can recover the right spatial structure from visual input and use it to make correct decisions? We introduce VeriWorld, a benchmark for spatial reasoning in interactive 3D environments with executable actions and deterministic verification\. Each task is evaluated under three matched input settings \-\- visual\-only, structured, and combined \-\- while the environment and objective remain fixed\. This design isolates whether failures arise from perception, reasoning, or their interaction\. VeriWorld brings together interactive 3D environments, code\-based actions, deterministic verification, parameterized task generation, and controlled diagnostic evaluation in a single framework\. Using this setup, we uncover two findings\. First, models often succeed when given structured spatial information but fail when the same information must be inferred from visual input, revealing a recurring visual\-to\-structure gap\. Second, action\-space and harness design can change outcomes even under the same task and information condition, showing that interaction protocol is itself a confounding variable in spatial evaluation\. VeriWorld is open\-sourced to support reproducible and fine\-grained evaluation of spatial reasoning in VLMs\.

## EgoSurgHands: An Egocentric 3D Hand Pose Dataset &amp; Benchmark for Open\-Surgery Training

**Authors:** Ankit Pal; Guillaume Kugener; Sofia Volpi; Joshua Schwartz; Alex Idarraga; Pranav Rajpurkar; Gabriel A Brat

**ID:** 139540 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JzZtdS0p1e>) | [PDF](<https://openreview.net/pdf?id=JzZtdS0p1e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139540>)

We introduce EgoSurgHands, an egocentric 3D hand\-pose dataset and benchmark for open\-surgery training tasks captured with Meta Project Aria glasses on standard surgical training pads\. To our knowledge, EgoSurgHands is the first public benchmark for surgical training that is simultaneously egocentric, sensor\-grounded, and human\-validated\. EgoSurgHands contains 41,909 training hand\-instance rows across 55 procedure recordings and 9,476 inter\-annotator\-agreement \(IAA\)\-validated rows across 13 held\-out procedure recordings from 4 wearers, 13 distinct tasks, 3 glove colors, and 3 stages of training\. Each frame includes Aria intrinsics, SLAM extrinsics, MPS \(Machine Perception Services\) landmarks, per\-joint confidence, timestamps, and eye gaze\. Validation 3D keypoints are initialized from Aria MPS and independently corrected by four expert annotators under a multi\-rater IAA workflow, yielding evaluation ground truth independent of any tested model's training signal\. Using EgoSurgHands, we benchmark six state\-of\-the\-art hand reconstructors under zero\-shot transfer: HaMeR, WiLoR, WildHands, JointTransformer, SimpleHand, and MeshGraphormer\. Ego\-pretrained models consistently outperform non\-egocentric baselines: WildHands improves over the non\-ego HaMeR reference by 4\.51 mm PA\-MPJPE, while JointTransformer achieves the best zero\-shot result at 14\.95 mm PA\-MPJPE\. These results show that generalist egocentric pretraining transfers to surgical egocentric tasks, but also reveal a substantial remaining surgical\-domain gap\. As a lightweight diagnostic adaptation experiment, a 58K\-parameter two\-headed \(pose \+ translation\) residual corrector further reduces error on frozen backbones, reaching 10\.40 mm PA\-MPJPE and 75\.8 mm absolute MPJPE on WildHands \($\-$49\.2\\% and $\-$85\.8\\% vs zero\-shot\)\. We release the dataset, benchmark code, checkpoints, and multi\-rater annotation framework at \[URL withheld for double\-blind review\]\.

## From Persistence to Survival: Hypothesis Testing, Effect Sizes and Vectorisation for Topological Features

**Authors:** Juliette Murris; Bernadette J Stolz; Karsten Borgwardt

**ID:** 153632 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JxamHvfzlr>) | [PDF](<https://openreview.net/pdf?id=JxamHvfzlr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153632>)

Persistence diagrams are common representations in topological data analysis, yet they lack both the vector space structure required by machine learning algorithms and a principled framework for statistical comparison\. We introduce STRAND \(Survival Topological Representation ANalysis of Diagrams\), which treats \(collections of\) PDs as survival data: each topological feature with persistence value $p = d \- b$ is a fully observed time\-to\-event, and the persistence survival function $S\(t\) = \\mathbb\{P\}\(p &gt; t\)$ is the central object for comparing diagrams\. From this single representation we derive \(i\) a non\-parametric two\-sample test with calibrated Type\~I error and high power from a small number of diagrams; \(ii\) interpretable effect sizes; and \(iii\) a 1\-Wasserstein\-stable feature vector for downstream machine learning\. We validate calibration and power on synthetic manifolds with controlled topology, demonstrate competitive vectorisation across 14 graph and 3D point cloud benchmarks, and apply the method to study functional brain connectivity in fMRI/neuroscience data\. To our knowledge, STRAND is the first method to provide hypothesis testing and vectorisation for persistence diagrams from a single coherent and interpretable representation\.

## 3DSPA: A 3D Semantic Point Autoencoder for Evaluating Video Realism

**Authors:** Bhavik Chandna; Kelsey Allen

**ID:** 153051 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OOMPX54uZM>) | [PDF](<https://openreview.net/pdf?id=OOMPX54uZM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153051>)

AI video generation is evolving rapidly\. For video generators to be useful for applications ranging from robotics to film\-making, they must consistently produce realistic videos\. However, evaluating the realism of generated videos remains a largely manual process \-\- requiring human annotation or bespoke evaluation datasets which have restricted scope\. Here we develop an automated evaluation framework for video realism  which captures both semantics and coherent 3D structure and which does not require access to a reference video\. Our method, 3DSPA, is a \*\*3D\*\* \*\*S\*\*emantic \*\*P\*\*oint \*\*A\*\*utoencoder utoencoder which is trained to reconstruct held out 3D point trajectories which have been augmented with DINO semantic features\. By combining both semantic and geometric representations, 3DSPA enables robust assessments of realism, temporal consistency, and physical plausibility in generated videos\. Experiments show that 3DSPA outperforms leading VLMs by more than 10\\% in identifying videos which violate physical laws, and more than doubles the correlations between human and auto\-eval ratings in judging physical common sense and motion quality across multiple generative video datasets\. Our results demonstrate that enriching trajectory\-based representations with 3D semantics offers a strong foundation for benchmarking generative video models, and implicitly captures physical rule violations\.

## Think Before You Generate: Active Panoramic Exploration for Text\-to\-3D Scenes

**Authors:** Derui Li; Peng Lu; Lujing Cao; Yuhao Sun; Wenhao Guo; Sheng Li

**ID:** 155232 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7H3l3MnUbl>) | [PDF](<https://openreview.net/pdf?id=7H3l3MnUbl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155232>)

Creating explorable 3D environments from text is important for immersive content creation, simulation, and interactive design\.  Recent methods often rely on image or video generative priors by synthesizing views along fixed or manually specified trajectories and lifting them into 3D\.  However, such passive pipelines cannot adapt view generation to the evolving scene memory, often leaving disoccluded regions incomplete and producing holes, floaters, and inconsistent geometry under free\-viewpoint exploration\.  We argue that the key challenge is not to generate more views, but to decide where to generate useful views according to the current scene state\.  To this end, we propose ActPano3D, an active text\-to\-3D scene generation framework based on memory\-guided panoramic exploration\.  ActPano3D formulates trajectory selection as spatial deliberation over the evolving scene memory, where candidate actions are evaluated by their expected utility for exploring unknown regions, repairing uncertain geometry, and improving the future 3D world model\.  The framework integrates expansion\-refinement active planning, memory\-routed panoramic generation, and reliability\-aware scene memory fusion into a closed\-loop generation\-and\-reconstruction process\.  The accumulated memory is further optimized into a renderable 3D Gaussian Splatting scene for free\-viewpoint exploration\.  Experiments show that ActPano3D improves scene coverage, reduces rendering holes, and achieves better rendering quality and text alignment than existing text\-to\-3D scene generation baselines\.

## MySign: A High\-Fidelity Motion\-Capture Dataset for 3D Sign Generation in Bahasa Isyarat Malaysia

**Authors:** Jiayu Shen; Kalin Stefanov; Lay\-Ki Soon; Vee Yee CHONG; Alpha A Gopalai; KokSheik Wong

**ID:** 139615 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FMCB6LFtcc>) | [PDF](<https://openreview.net/pdf?id=FMCB6LFtcc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139615>)

Progress in fine\-grained 3D sign generation is constrained by the scarcity of high\-fidelity 3D sign language datasets, a limitation that is particularly severe for under\-resourced languages\. We introduce MySign, the first motion\-capture dataset for isolated signs in Bahasa Isyarat Malaysia \(BIM\), comprising 5,000 3D samples covering 1,000 lexical items \(glosses\), produced by five Deaf native signers\. Unlike prior datasets that rely on SMPL\-X parameters regressed from video \(pseudo\-labels\)\-\-often affected by depth ambiguity, inaccurate finger articulation, and temporal jitter\-\-MySign provides ground\-truth SMPL\-X sequences captured with a motion\-capture setup tailored for sign language\. This yields higher\-fidelity motion, particularly in fine\-grained hand and finger articulation\. We establish MySign as a challenging benchmark for gloss\-conditioned 3D sign generation: state\-of\-the\-art models produce visually plausible outputs but fall short of ground\-truth fidelity, particularly in fine\-grained articulation, revealing persistent gaps in modeling articulated sign motion\. In contrast, recognition baselines consistently achieve high lexical accuracy, indicating that the dataset reliably supports supervised learning\. We anticipate that MySign will enable more faithful 3D sign generation and support finer\-grained analysis of sign articulation\. The dataset is available at https://huggingface\.co/datasets/mysigner/MySign\.

## PhotoFlow: Agentic 3D Virtual Photography Missions

**Authors:** Jiarui Guo; Haojia Wei; Yiming Zhang; Yifei Liu; Yuning Gong; Hongjie Zhang; Xue Yang; Zhihang Zhong

**ID:** 149703 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o5fDea7QFO>) | [PDF](<https://openreview.net/pdf?id=o5fDea7QFO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149703>)

Virtual photography asks an agent to enter a prepared 3D scene with no preselected camera pose or reference image, infer a suitable shot from scene information and a language intent, choose executable camera parameters, and render the final photograph\. Recent progress in vision\-language models makes this kind of spatial agent increasingly plausible, but the task stresses two capabilities that remain hard to evaluate together: complex 3D spatial understanding and abstract aesthetic judgment\. We introduce PhotoFlow, a Director\-Reviewer\-Reflector agent for closed\-loop camera search\. The Director builds a soft photographic blueprint and proposes diverse candidate cameras; the Reviewer combines rule checks, visual critique, and pairwise incumbent selection; and the Reflector converts failures into region memory, dead\-zone suppression, and high\-explore relocation\. We also introduce VPhotoBench, a benchmark of 47 open\-license Blender scenes and 141 language\-conditioned photography missions spanning subject placement, relational composition, and atmosphere/style\. On held\-out experiments,PhotoFlow achieves the strongest external quality\-alignment composite and success rate among one\-shot prediction, single\-chain reflection, anchor\-bank selection, and random search under a six\-round rendering budget\. To our knowledge, this is the first work to make language\-conditioned virtual photography in 3D design or game engines \(e\.g\., Blender\) an executable agent task, and our results show that an LLM\-centered spatial agent can already produce strong photographs in a setting designed to challenge both 3D reasoning and aesthetic choice\.

## Magnifying What Matters: Attention\-Guided Adaptive Rendering for Visual Text Comprehension

**Authors:** Shenglai Zeng; Qirui Wang; Kai Guo; Xinnan Dai; Xianxuan Long; Hui Liu

**ID:** 154549 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ck587Z7t03>) | [PDF](<https://openreview.net/pdf?id=Ck587Z7t03>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154549>)

Visual Text Comprehension \(VTC\) renders text into images for a vision\-language model \(VLM\) to read, sidestepping LLM context\-window limits and powering applications from long\-page OCR to multi\-page memory QA\. Yet existing VTC pipelines treat rendering and layout as a fixed, content\-agnostic preprocessing step, and offer little mechanistic understanding of how VLMs internally process visualized text\. Through a focused empirical study on VTC QA tasks, we find that VLMs exhibit a localization\-without\-utilization regime: evidence\-localizing attention emerges sharply in the middle\-to\-late layers and is largely decoupled from answer correctness, yet simply enlarging the localized spans on the rendered page recovers a large fraction of the failures\. Building on these observations, we propose AGAR \(Attention\-Guided Adaptive Rendering\), a training\-free, model\-agnostic method that leverages a VLM's own middle\-to\-late layer attention to identify the top\-K important visual patches, maps them back to word spans, and re\-renders the page with those spans enlarged before re\-inferring the answer\. Extensive experiments across nine VTC benchmarks \(short\-form, long\-context, and multi\-page memory QA\) and four VLM backbones show that AGAR \(i\) consistently improves off\-the\-shelf VLMs as a plug\-and\-play enhancement, \(ii\) composes with VLM post\-training to yield further gains, and \(iii\) remains robust under both visual\- and text\-side input degradation\.

## VolFill: Single\-View Amodal 3D Scene Reconstruction with Volumetric Flow Matching

**Authors:** Tuan Ngo; Chuang Gan; Evangelos Kalogerakis

**ID:** 151919 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WvIoVDOETy>) | [PDF](<https://openreview.net/pdf?id=WvIoVDOETy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151919>)

Reconstructing the complete geometry of a scene from a single RGB image remains challenging—especially when inferring hidden structures where visual evidence is incomplete\. We introduce VolFill, a generative framework that predicts the 3D structure of the complete scene rather than relying on traditional pixel\-aligned regression\. Our method utilizes a hybrid 3D VAE to compress sparse truncated unsigned distance function grids  into a compact latent space, paired with a latent Diffusion Transformer that denoises this representation to recover the complete scene\. We condition the generation on geometry foundation models, leveraging rich spatial priors for robust reasoning\. Unlike existing methods limited by per\-ray constraints or unstructured point\-cloud queries, VolFill provides a structured representation that supports direct surface extraction and occupancy queries at scale\. Extensive experiments on the 3D\-FRONT and NRGBD datasets demonstrate that our approach significantly outperforms current baselines, providing a robust foundation for holistic spatial understanding\.

## PLANING: A Loosely Coupled Triangle\-Gaussian Framework for Streaming 3D Reconstruction

**Authors:** Changjian Jiang; Kerui Ren; Xudong Li; Kaiwen Song; Guanghao Li; Linning Xu; Tao Lu; Junting Dong; Yu Zhang; Yu Feng; Bo Dai; Mulin Yu

**ID:** 150984 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dmRkqf6pOG>) | [PDF](<https://openreview.net/pdf?id=dmRkqf6pOG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150984>)

Streaming reconstruction from monocular image sequences remains challenging, as existing methods typically favor either high\-quality rendering or accurate geometry, but rarely both\. We present PLANING, an efficient on\-the\-fly reconstruction framework built on a hybrid representation that loosely couples explicit geometric primitives with neural Gaussians, enabling geometry and appearance to be modeled in a decoupled manner\. This decoupling supports an online initialization and optimization strategy that separates geometry and appearance updates, yielding stable streaming reconstruction with substantially reduced structural redundancy\. Despite operating online, PLANING improves dense mesh Chamfer\-L2 by 18\.52% over the offline baseline PGSR, surpasses the streaming baseline ARTDECO by 1\.31 dB in PSNR, and reconstructs ScanNetV2 scenes in under 100 seconds, over 5x faster than offline 2D Gaussian Splatting while matching per\-scene optimization quality\. Beyond reconstruction quality, the structural clarity and computational efficiency of PLANING make it well suited for a broad range of downstream applications, such as enabling large\-scale scene modeling and simulation\-ready environments for embodied AI\.

## FRUC: Feedforward Dynamic Scene Reconstruction from Uncalibrated Collaborative Driving Views

**Authors:** Yihang Tao; Yu Guo; Zhengru Fang; Haonan An; Yuguang Fang

**ID:** 150220 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jruosxypbz>) | [PDF](<https://openreview.net/pdf?id=jruosxypbz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150220>)

We present FRUC, a feed\-forward 3D Gaussian splatting framework for dynamic scene reconstruction from uncalibrated collaborative driving views\. Existing multi\-agent reconstruction frameworks are often hindered by rigid prerequisites, demanding precise spatial calibration and slow per\-scene optimization\. In this paper, we rethink this task by conceptualizing a distributed multi\-vehicle network as a spatio\-temporally unstructured ego\-centric multi\-camera system, where the core challenge lies in enhancing ego\-centric occluded geometry through collaboration without degrading the ego's accurately observed visible geometry, while preserving reconstruction efficiency\. For efficient reconstruction, FRUC is built upon a visual grounded geometric Transformer backbone to enable one\-shot, calibration\-free inference from a flexible number of multi\-vehicle views\. To achieve non\-destructive geometric supplementation under uncalibrated cross\-agent misalignment, FRUC first introduces an ego\-centric causal occlusion field that explicitly derives occlusion evolution as latent priors by modeling agent\-wise spatio\-temporal correlations\. Guided by these occlusion priors, it further formulates cross\-agent integration as a deterministic residual denoising process via zero\-initialized injection, turning challenging cross\-agent fusion into bounded residual learning for robust collaborative blind\-spot completion\. Through extensive evaluations on the real\-world V2XReal and UrbanIng\-V2X datasets, FRUC is shown to be a new state\-of\-the\-art for the scene reconstruction of dynamic collaborative driving environments, significantly outperforming existing methods in both rendering quality and efficiency\.

## ArtCrafter: Feed\-Forward Generation of Articulated 3D Object with Analytic Joint Derivation

**Authors:** Minh Tu; Quang\-Binh Nguyen; Khoi Nguyen

**ID:** 151536 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZwxUmdqiMF>) | [PDF](<https://openreview.net/pdf?id=ZwxUmdqiMF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151536>)

Articulated 3D assets are essential for robot simulation, yet generating them from casual images remains unsolved\. Existing approaches either predict URDF parameters via learned regression or language model inference \-\- both requiring articulation supervision and producing joints that may be geometrically inconsistent with the generated meshes \-\- or reconstruct from dense calibrated multi\-view captures, limiting scalability\. We present \\textbf\{ArtCrafter\}, a feed\-forward generative model that takes two images of an articulated object \-\- one at rest, one fully open \-\- and produces $2N\+1$ part\-level meshes together with a physics\-executable URDF in a single forward pass\. Inspired by Slot Attention, we structure the denoising process around a $1\+2N$ slot layout whose slots, forced to jointly explain two articulation states, naturally bind to kinematic parts\. \\textbf\{TripletAttention\} enforces cross\-state geometric consistency between each paired rest/open slot anchored through a shared base slot, and a repulsion loss $\\mathcal\{L\}\_\{\\mathrm\{rep\}\}$ operating on decoded point clouds ensures inter\-part disjointness throughout denoising\. Because paired meshes are geometrically consistent by construction, URDF joint parameters \-\- type, axis, origin, and range \-\- are derived \\emph\{analytically\} from the rigid transform between each pair, requiring no learned articulation head, no language model, and no per\-instance optimization\. Experiments on URDF\-Anything\+ demonstrate consistent improvements over retrieval\-based and generative baselines across part\-level geometry and all four articulation metrics\. ArtCrafter demonstrates a clean decomposition: a diffusion model handles geometry, and geometry handles URDF\.

## Not All Tasks Quantize Equally: Fisher\-Guided Quantization for Visual Geometry Transformer

**Authors:** Yipu Zhang; Jintao Cheng; Weilun Feng; Jiehao Luo; Chuanguang Yang; Zhulin An; Yongjun Xu; Wei Zhang

**ID:** 151378 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b31hQvoPCd>) | [PDF](<https://openreview.net/pdf?id=b31hQvoPCd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151378>)

Feed\-forward 3D reconstruction models, represented by Visual Geometry Grounded Transformer \(VGGT\), jointly predict multiple visual geometry tasks such as depth estimation, camera pose prediction, and point cloud reconstruction in a single forward pass\. They have been widely adopted in 3D vision applications, but their billion\-scale parameters bring substantial memory and computation overhead, posing challenges for on\-device deployment\. Post\-Training Quantization \(PTQ\) is an effective technique to reduce this overhead\. Existing PTQ methods for feed\-forward 3D models mainly focus on handling heavy\-tailed activation distributions and constructing diverse calibration datasets\. However, we observe that feed\-forward 3D models predict multiple geometric attributes through a shared backbone, where different transformer blocks and hidden channels contribute distinctly to each task, resulting in substantially different sensitivities to quantization errors across tasks, blocks, and channels\. Consequently, treating all tasks equally over\-emphasizes insensitive tasks and causes significant accuracy loss on the sensitive ones\. To address this issue, we propose Fisher\-Guided Quantization \(FGQ\) for feed\-forward 3D reconstruction models\. Specifically, FGQ uses the diagonal Fisher information matrix to quantify the different sensitivities across tasks, blocks, and channels, and incorporates these sensitivities into the Learnable Affine Transformation during calibration to better preserve the channels and blocks most critical to each task\. Extensive experiments across camera pose estimation, point map reconstruction, and depth estimation show that FGQ consistently outperforms state\-of\-the\-art quantization baselines on VGGT, achieving up to 39\\% relative improvement under the 4\-bit quantization\.

## Physical AI Smart Spaces: A Large\-Scale Benchmark for Multi\-Camera 3D Perception in Smart Spaces

**Authors:** Yuxing Wang; Yizhou Wang; Anqi Li; Shuo Wang; Sameer Satish Pusegaonkar; Haoquan Liang; Jiajun Li; Shenxin Jiang; Jianhe Yuan; Shangru Li; Tongwei Dai; Zihao Chen; David Anastasiu; Zheng \(Thomas\) Tang; Sujit Biswas; Xunlei Wu

**ID:** 139407 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SdCUsRcgQI>) | [PDF](<https://openreview.net/pdf?id=SdCUsRcgQI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139407>)

_Abstract unavailable from the accessible public sources._

## Training\-Free 3D Editing via Feature\-Divergence Localization and Trajectory Correction

**Authors:** Tri Ton; Siwoo Lim; Joshua Tian Jin Tee; Chang Yoo

**ID:** 155326 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6StcC3knUL>) | [PDF](<https://openreview.net/pdf?id=6StcC3knUL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155326>)

_Abstract unavailable from the accessible public sources._

## 3D\-VITAL: Visibility\-aware Identity Training from Artificial Liftings of 3D Reconstruction model for Cross\-View Object Re\-Identification

**Authors:** William Grolleau; Astrid Sabourin; Guillaume Lapouge; Catherine Achard

**ID:** 150244 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jej1VhaCQr>) | [PDF](<https://openreview.net/pdf?id=jej1VhaCQr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150244>)

In this paper, we address the Cross\-View Object Re\-Identification \(ReID\) task, aiming to match identities across drastically different viewpoints\. We focus specifically on Single\-View Aerial\-Ground ReID \(SV AG\-ReID\), where models train on one viewpoint and must generalize to another at inference\. To bridge the viewpoint gap of Cross\-View ReID, related work employs generative models to synthesize novel views from source images as additional training data\. We leverage recent advances in large\-scale single\-view 3D mesh reconstruction to lift source images into textured meshes and to render them from new viewpoints\. However, this pipeline produces unreliable data in two distinct ways, and addressing both is vital for synthetic data to serve as an effective training signal\. First, the reconstruction may fail and produce geometrically incorrect meshes, resulting in severe corruption in rendered novel views\. Second, even when the geometry is correct, the rendered novel views contain hallucinated textures in regions not visible in the source image, which may degrade training if used naively\. We address both shortcomings by exploiting a signal that prior generative methods do not naturally expose\. Indeed, the reconstructed mesh carries a per\-pixel partition between regions visible from the source view and regions that the reconstruction model had to hallucinate, available as a deterministic byproduct of rendering\. We introduce this per\-pixel visibility map and exploit it in a two\-stage design\. Cross\-View Consistency Filtering \(CVCF\) discards geometrically incorrect meshes by ensuring multi\-view consistency between source and novel views over visible patches\. Visibility\-Aware Attention Supervision \(VAAS\) leverages the visibility map to guide the model's attention toward reliable regions of the rendered view during training\. Combined, these two components enable our method, 3D\-VITAL, to better leverage the synthetic signal from single\-view 3D mesh reconstruction, benefiting from wider viewpoint augmentation\. 3D\-VITAL sets a new state\-of\-the\-art on three SV AG\-ReID benchmarks \(AG\-ReID, AG\-ReID\.v2, MOO\)\. Code and data will be released at \\url\{url\}

## 3DCodeBench: Benchmarking Agentic Procedural 3D Modeling Via Code

**Authors:** Yipeng Gao; Lei Shu; Genzhi Ye; Xi Xiong; Ameesh Makadia; Meiqi Guo; Laurent Itti; Jindong Chen

**ID:** 139453 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P7NuAH00OC>) | [PDF](<https://openreview.net/pdf?id=P7NuAH00OC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139453>)

Procedural 3D modeling through code is emerging as a versatile paradigm, offering deterministic, engine\-ready, and precisely editable assets that neural 3D generators inherently lack\. Authoring such procedural content, however, demands deep expertise in 3D software APIs, parametric design, and code\-level geometric reasoning\. In this paper, we propose 3DCodeBench, a systematic benchmark for evaluating vision\-language model \(VLM\) agents for procedural 3D generation in 3D modeling software\. Specifically, 3DCodeBench evaluates how effectively 11 advanced VLMs can serve as procedural 3D modelers by transferring text and image references into procedural code for software\. Recognizing that automated metrics may not fully capture the perceptual quality of 3D shapes, we build 3DCodeArena, a ranking platform based on human preference between generated pairs\. From extensive evaluations and results, we observe that: \(1\) Failures mostly arise from API usage, while successful renders still suffer from disconnected or floating 3D geometric components\. \(2\) Test\-time scaling, such as higher thinking budgets and multi\-turn refinement, improves performance overall\. Our findings highlight a critical need for high\-quality procedural coding data to advance commercial VLMs\. Furthermore, effective procedural 3D modeling requires a robust execution environment that provides high\-fidelity feedback for iterative refinement\. To accelerate research in this domain, we release 3DCodeBench—including the curated data, benchmark, evaluation protocol, and qualitative results—as a foundational tool for developing VLM\-based 3D modelers\.

## TransmissiveGS: Residual\-Guided Disentangled Gaussian Splatting for Transmissive Scene Reconstruction and Rendering

**Authors:** Zhenyu Liang; Xiao Zhang; Tianchao Li; Jack C Cheng; Chi\-Keung Tang

**ID:** 155367 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=69qwhyHQTB>) | [PDF](<https://openreview.net/pdf?id=69qwhyHQTB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155367>)

Transmissive scenes are ubiquitous in daily life, yet reconstructing and rendering them remains highly challenging due to the inherent entanglement between near\-field reflections from the surrounding environment on the transmissive surface, and the transmitted content of the scene behind it\. This coupling gives rise to dual surface geometries and dual radiance components within each observation, posing ambiguities for standard methods\. We present TransmissiveGS, a novel framework for disentangled reconstruction and rendering of transmissive scenes\. Specifically, we model the scene with a dual\-Gaussian representation and introduce a deferred shading function to jointly render the two Gaussian components\. To separate reflection and transmission, we exploit the inherent multi\-view inconsistency of reflections and leverage the residuals from reconstructing multi\-view consistent content as cues for disentangled geometry and appearance modeling\. We further propose a reflection light field that enables high\-fidelity estimation of near\-field reflections\. During training, we introduce a high\-frequency regularization to preserve fine details\. We also contribute a new synthetic dataset for evaluating transmissive surface reconstruction\. Experiments on both synthetic and real\-world scenes demonstrate that TransmissiveGS consistently outperforms prior Gaussian Splatting\-based methods in both reconstruction and rendering quality for transmissive scenes\.

## GEMS\-3D: A Large\-Scale 3D Gravity, Electrical, Magnetic, and Seismic Earth Simulation Dataset for Multimodal Geophysical Learning

**Authors:** Yonghao Wang; Meijia Huang; Wenkai Lu; Zhuo Jia; Hao Feng; Leyuan Fang

**ID:** 139492 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MT3yCT6JKb>) | [PDF](<https://openreview.net/pdf?id=MT3yCT6JKb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139492>)

Accurate characterization of deep subsurface structures is a fundamental problem in geoscience, but geophysical inversion is inherently non\-unique and therefore requires joint interpretation of gravity, magnetic, electromagnetic, and seismic observations\. Despite recent advances in deep learning for geophysical inversion and PDE\-based scientific modeling, existing large\-scale open datasets are largely limited to a single modality and rarely provide physically consistent multi\-source responses generated from the same 3D geological target\. This limitation hinders the development and evaluation of multimodal joint inversion methods for deep subsurface characterization\. We introduce GEMS\-3D, a large\-scale synthetic benchmark for 3D geological multiphysics learning\. GEMS\-3D couples four forward modeling engines—$\\textbf\{g\}$ravity, $\\textbf\{e\}$lectromagnetic, $\\textbf\{m\}$agnetic, and 3D acoustic $\\textbf\{s\}$eismic—to generate sample\-aligned observations from shared geological realizations\. Guided by facies\-aware rock\-physics relationships, the dataset provides spatially aligned volumes of P\-wave velocity \($v\_p$\), density \($\\rho$\), resistivity \($\\phi$\), and magnetic susceptibility \($\\chi$\) across nine representative classes of complex geological anomalies, including dike swarms, salt domes, and gas reservoirs\. Each sample includes gravity responses, magnetic responses, electromagnetic responses, and 3D acoustic seismic data, together with acquisition metadata and anomaly labels\. By packaging co\-registered property volumes, anomaly support, acquisition metadata, and aligned multiphysics responses as sample\-level bundles, GEMS\-3D provides a unified benchmark for operator learning, multimodal inverse interpretation, and missing\-modality robustness in deep subsurface settings\. The anonymized forward\-modeling framework and corresponding dataset link is available at https://anonymous\.4open\.science/r/GEMS\-3D\-E4CA\.

## TrackCraft3R: Repurposing Video Diffusion Transformers for Dense 3D Tracking

**Authors:** Jisu Nam; Jahyeok Koo; Soowon Son; Jaewoo Jung; Honggyu An; Junhwa Hur; Seungryong Kim

**ID:** 155634 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=46qtUc033H>) | [PDF](<https://openreview.net/pdf?id=46qtUc033H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155634>)

Dense 3D tracking from monocular video is fundamental to dynamic scene understanding\. While recent 3D foundation models provide reliable per\-frame geometry, recovering object motion in this geometry remains challenging and benefits from strong motion priors learned from real\-world videos\. Existing 3D trackers either follow iterative paradigms trained from scratch on synthetic data or fine\-tune 3D reconstruction models learned from static multi\-view images, both lacking real\-world motion priors\. Pre\-trained video diffusion transformers \(video DiTs\) offer rich spatio\-temporal priors from internet\-scale videos, making them a promising foundation for 3D tracking\. However, their frame\-anchored formulation, which generates each frame's content, is fundamentally mismatched with reference\-anchored dense 3D tracking, which must follow the same physical points from a reference frame across time\. We present TrackCraft3R, the first method to repurpose a video DiT as a feed\-forward dense 3D tracker\. Given a monocular video and its frame\-anchored reconstruction pointmap, TrackCraft3R predicts a reference\-anchored tracking pointmap that follows every pixel of the first frame across time in a single forward pass, along with its visibility\. We achieve this through two designs: \(i\) a dual\-latent representation that uses per\-frame geometry latents and reference\-anchored track latents as dense queries, and \(ii\) temporal RoPE alignment, which specifies the target timestamp of each track latent\. Together, these designs convert the per\-frame generative paradigm of video DiTs into a reference\-anchored tracking formulation with LoRA fine\-tuning\. TrackCraft3R achieves state\-of\-the\-art performance on standard sparse and dense 3D tracking benchmarks, while running 1\.3x faster and using 4\.6x less peak memory than the strongest prior method\. We further demonstrate robustness to large motions and long videos\. Our code and weights will be publicly released\.

## Split Then Select: Moment\-Preserving Density Control for Generalized Primitive Splatting

**Authors:** Yangkai Lin; Jiehong Lin; Kui Jia

**ID:** 155773 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=31sxeY9QjS>) | [PDF](<https://openreview.net/pdf?id=31sxeY9QjS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155773>)

Primitive splatting has become a powerful representation for efficient differentiable rendering, but existing density\-control strategies remain largely heuristic and often suffer from uncontrolled primitive growth\. In this work, we present \\textbf\{Moment\-Preserving Density Control \(MPDC\)\}, a general theoretical framework for densification in primitive splatting\. Unlike conventional density\-control strategies that \\emph\{select first and split later\}, MPDC follows a \\emph\{split\-then\-select\} paradigm\. Our key insight is that a principled split should first preserve the current rendering, rather than immediately perturb the image\. By matching local moments, MPDC decomposes a primitive into multiple offspring while keeping the rendered output, and hence the loss, unchanged up to higher\-order error\. Although such a split does not directly reduce the loss, it changes the parameter space: a saddle point in the original parameterization may no longer remain a saddle point after splitting\. This provides a distinct saddle\-escaping mechanism from prior approaches that move primitives along negative\-curvature directions\. Building on this view, we derive closed\-form splitting rules for different primitive parameterizations and then select only primitives whose moment\-preserving splits reduce an upper bound of the loss through a splitting\-matrix criterion\. Experiments on three diverse primitive splatting methods show that MPDC substantially reduces primitive counts without sacrificing rendering quality, while improving memory efficiency and rendering speed\. Code will be released upon publication\.

## Mesh BDF: Barycentric Dominance Field for 3D Native Mesh Generation

**Authors:** Gaochao Song; Haohan Weng; Luo Zhang; Zibo Zhao; Shenghua Gao

**ID:** 154136 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Fy4JoneGmz>) | [PDF](<https://openreview.net/pdf?id=Fy4JoneGmz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154136>)

Autoregressive \(AR\) modeling has recently achieved remarkable progress in native 3D mesh generation, largely due to its natural ability to handle variable\-length, discrete data structures\. However, the inherent constraints of the AR paradigm severely restrict the generated meshes, leading to limited face counts, bounded vertex resolutions, and difficulties in supporting textures\. To overcome these bottlenecks, we propose the Barycentric Dominance Field \(BDF\), a continuous representation defined on triangular mesh surfaces that elegantly encodes vertex topological connectivity\. BDF bridges the fundamental gap between discrete mesh topology and continuous diffusion\-based generative modeling by transforming connectivity into a continuous surface signal\. As an intrinsic mesh property, BDF shares strong similarities with texture maps, enabling its seamless integration into existing 3D diffusion pipelines without requiring architectural modifications\. Extensive experiments demonstrate that BDF empowers diffusion models to generate native meshes with significantly higher quality, greater scalability, and stronger robustness compared to state\-of\-the\-art autoregressive methods\.

## Spik\-NeRF v2: Pushing the Limit of Spiking Neural Radiance Fields with $ \\pm $I\-LIF

**Authors:** Chen Cheng; Qinlong Lan; Gang Wan; Hao Guo; Lei Liu; Zhanji Wei; Wu Yitian; Yufei Guo

**ID:** 152358 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TgMxtkRB75>) | [PDF](<https://openreview.net/pdf?id=TgMxtkRB75>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152358>)

_Abstract unavailable from the accessible public sources._

## Anchor3DGS: Feed\-Forward 3D Gaussian Splatting with Compact Anchor\-Based Representation

**Authors:** Sheng Ye; Jiangke Lin; Fudong Wang; Yi Yuan; ZhenHui Dong; Yong\-jin Liu

**ID:** 152132 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VHM6LwnWRO>) | [PDF](<https://openreview.net/pdf?id=VHM6LwnWRO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152132>)

_Abstract unavailable from the accessible public sources._

## Coarse\-to\-Fine 3D MRI Reconstruction via Resolution\-Agnostic Neural Operators

**Authors:** Jiayun \(Peter\) Wang; Ruibo Wang; Valentin Duruisseaux; Ram Daftari; Weijie Gan; Armeet Jatyani; Boris Bonev; Animashree Anandkumar

**ID:** 151950 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WcGVLtalaf>) | [PDF](<https://openreview.net/pdf?id=WcGVLtalaf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151950>)

_Abstract unavailable from the accessible public sources._

## Relational Feature Distillation for Lightweight 3D Point Cloud Segmentation

**Authors:** Mohammad Saeid; Amir Salarpour; Pedram MohajerAnsari; Mert D Pesé

**ID:** 148750 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vK7LWQHktB>) | [PDF](<https://openreview.net/pdf?id=vK7LWQHktB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148750>)

_Abstract unavailable from the accessible public sources._

## WildBox: A Dataset and Benchmark for Aerial Monocular 3D Detection of African Savanna Wildlife

**Authors:** Vandita Shukla; Kilian Meier; Lucie Laporte\-Devylder; Camille R Saint\-Jean; Jenna M Kline; Blair R Costelloe; Devis Tuia; Fabio Remondino; Benjamin Risse

**ID:** 139688 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AXawAJRwDi>) | [PDF](<https://openreview.net/pdf?id=AXawAJRwDi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139688>)

_Abstract unavailable from the accessible public sources._

## State Evolution Awareness for Category\-agnostic 3D Point Cloud Tracking

**Authors:** Xiantao Hu; Ying Tai; Jinxia Xie; Bineng Zhong; Guangwei Gao; Jianjun Qian; Jian Yang

**ID:** 151275 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bbSXfWRCKv>) | [PDF](<https://openreview.net/pdf?id=bbSXfWRCKv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151275>)

_Abstract unavailable from the accessible public sources._

## Diffeomoprhism\-Informed 3D Gaussian Splattings via Screen\-Space Optimal Transport \(OT\)

**Authors:** Xiang Gao; Xiaoping Zhu; Xinmu Wang; Yuanpeng Liu; Haotian Yin; Dichang Zhang; Yazheng Chen; Yue Wang; Yubin Zhou; Yu Guo; Wei Chen; David Gu; Xiyun Song; Heather Yu

**ID:** 151447 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ac9rdVDTOU>) | [PDF](<https://openreview.net/pdf?id=ac9rdVDTOU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151447>)

_Abstract unavailable from the accessible public sources._

## Spik\-NeRF v2: Pushing the Limit of Spiking Neural Radiance Fields with $ \\pm $I\-LIF

**Authors:** Chen Cheng; Qinlong Lan; Gang Wan; Hao Guo; Lei Liu; Zhanji Wei; Wu Yitian; Yufei Guo

**ID:** 152358\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152358

[Paper](<https://openreview.net/forum?id=TgMxtkRB75>) | [PDF](<https://openreview.net/pdf?id=TgMxtkRB75>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152358>)

_Abstract unavailable from the accessible public sources._

## Anchor3DGS: Feed\-Forward 3D Gaussian Splatting with Compact Anchor\-Based Representation

**Authors:** Sheng Ye; Jiangke Lin; Fudong Wang; Yi Yuan; ZhenHui Dong; Yong\-jin Liu

**ID:** 152132\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152132

[Paper](<https://openreview.net/forum?id=VHM6LwnWRO>) | [PDF](<https://openreview.net/pdf?id=VHM6LwnWRO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152132>)

_Abstract unavailable from the accessible public sources._

## Coarse\-to\-Fine 3D MRI Reconstruction via Resolution\-Agnostic Neural Operators

**Authors:** Jiayun \(Peter\) Wang; Ruibo Wang; Valentin Duruisseaux; Ram Daftari; Weijie Gan; Armeet Jatyani; Boris Bonev; Animashree Anandkumar

**ID:** 151950\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151950

[Paper](<https://openreview.net/forum?id=WcGVLtalaf>) | [PDF](<https://openreview.net/pdf?id=WcGVLtalaf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151950>)

_Abstract unavailable from the accessible public sources._

## Relational Feature Distillation for Lightweight 3D Point Cloud Segmentation

**Authors:** Mohammad Saeid; Amir Salarpour; Pedram MohajerAnsari; Mert D Pesé

**ID:** 148750\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148750

[Paper](<https://openreview.net/forum?id=vK7LWQHktB>) | [PDF](<https://openreview.net/pdf?id=vK7LWQHktB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148750>)

_Abstract unavailable from the accessible public sources._

## WildBox: A Dataset and Benchmark for Aerial Monocular 3D Detection of African Savanna Wildlife

**Authors:** Vandita Shukla; Kilian Meier; Lucie Laporte\-Devylder; Camille R Saint\-Jean; Jenna M Kline; Blair R Costelloe; Devis Tuia; Fabio Remondino; Benjamin Risse

**ID:** 139688\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139688

[Paper](<https://openreview.net/forum?id=AXawAJRwDi>) | [PDF](<https://openreview.net/pdf?id=AXawAJRwDi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139688>)

_Abstract unavailable from the accessible public sources._

## Rethinking the State Update Gate for Long\-Sequence Recurrent 3D Reconstruction

**Authors:** kejun ren; Lei Jin; Tianxin Huang; Lianming Xu; Li Wang

**ID:** 148467 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xbkV9cLvUl>) | [PDF](<https://openreview.net/pdf?id=xbkV9cLvUl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148467>)

Streaming 3D reconstruction under a strict constant\-memory budget hinges on how the recurrent state is updated as the stream evolves\. We profile TTT3R\-style per\-token gates across five benchmarks and discover a structural bottleneck: the gate is intrinsically bounded in magnitude \(median $0\.31$; never exceeding $0\.6$\) and nearly frame\-invariant, yielding an effective memory horizon of only $\\sim$3 frames per state token, which serves as the structural origin of long\-sequence drift\. We trace this to a missing axis: existing inference\-time methods modulate updates only at the per\-token, intra\-frame level, while the orthogonal frame\-level question of \\emph\{how strongly each frame should contribute to the state\} has been silently treated as content\-independent\. We close this gap with a scalar frame\-level gate $\\alpha\_t \\in \(0, 1\]$ derived in closed form from frame\-to\-frame changes of internal features\-\-\-a continuous relaxation of classical SLAM keyframe selection that requires no parameters, no training, and no extra forward pass\. Across six benchmarks spanning camera pose, video depth, and 3D reconstruction at sequence lengths up to $4,541$ frames, our gate cuts ATE by $51\\%$ on long TUM\-RGBD pose sequences, reduces AbsRel by $12\.8\\%$ on Bonn video depth, and on KITTI long\-sequence pose estimation surpasses LongStream and Keyframe\-VO which are specially constructed for long sequences via retraining and policy learning, while retaining strictly constant memory at zero training cost\.

## Scalable Adaptation of 3D Geometric Foundation Models via Weak Supervision from Internet Video

**Authors:** Zihui Gao; Ke Liu; Jiawang Bian; Donny Y\. Chen; Duochao Shi; Guosheng Lin; Hao Chen; Chunhua Shen

**ID:** 149509 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pcEDgJBGuB>) | [PDF](<https://openreview.net/pdf?id=pcEDgJBGuB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149509>)

_Abstract unavailable from the accessible public sources._

## Beyond Family Labels: A Taxonomic Ornstein\-Uhlenbeck Prior for Avian 3D Shape Recovery

**Authors:** Yunchan Jeon; Soo Gon Kim; Seungwook Kim; CheolWon Lee; Jongmin Lee

**ID:** 151996 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WHGRxkYCGV>) | [PDF](<https://openreview.net/pdf?id=WHGRxkYCGV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151996>)

Recovering 3D pose and shape of birds from single images is bottlenecked by the long tail of avian diversity: out of $\\sim 10\{,\}000$ species, only a few dozen have 3D\-labeled training data, and in\-the\-wild test sets routinely contain species never seen at training\. Generalizing across clades is therefore a load\-bearing problem\. The current state of the art, AniMer\+, mitigates it with a family\-level contrastive loss that conveys only a binary same\-family indicator per pair and discards the continuous structure of the species tree\. We propose a \*\*taxonomic Ornstein\-\-Uhlenbeck prior\*\* on the AVES shape code: a multivariate Gaussian whose covariance decays exponentially with Linnaean rank distance, with a learnable selection strength and noise scale\. The prior generalizes family contrastive into a continuous, generative form, exposing the graded cross\- and within\-family similarity that a binary indicator cannot, and brings continuous comparative phylogenetics in as a biology\-grounded inductive bias for the long tail\. Our method consistently improves over AniMer\+ on every reported avian benchmark cell, with the largest gains on the unseen\-species CowBird benchmark\. A permutation ablation isolates taxonomic structure from generic Gaussian smoothing, and a rank\-granularity ablation identifies cross\-order distinctions—the structure beyond a family\-vs\-not indicator—as the dominant source of the unseen\-species gain\.

## Tadpole: Autoencoders as Foundation Models for 3D PDEs with Online Learning

**Authors:** Qiang Liu; Felix Koehler; Benjamin Holzschuh; Nils Thuerey

**ID:** 149126 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sfkDy7Tri4>) | [PDF](<https://openreview.net/pdf?id=sfkDy7Tri4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149126>)

We introduce Tadpole, a novel foundation model for three\-dimensional partial differential equations \(PDEs\) that addresses key challenges in transferability, scalability to high dimensionality, and multi\-functionality\. Tadpole is pre\-trained as an autoencoder on synthetic 3D PDE data generated by an efficient online data\-generation framework\. This enables large\-scale, diverse training without storage or I/O overhead, demonstrated by scaling to an equivalent of hundreds of terabytes of training data\. By autoencoding single\-channel spatial crops, Tadpole learns rich and transferable representations across heterogeneous physical systems with varying numbers of state variables and spatial resolutions\. Although pre\-trained solely as an autoencoder, Tadpole can be efficiently applied for multiple downstream tasks beyond reconstruction, including dynamics learning and generative modeling\. For dynamics learning, we propose a novel parameter\-efficient fine\-tuning strategy that integrates low\-rank adaptation, latent\-space transformations, and reintroduced skip connections, achieving accurate temporal modeling with a minimal number of trainable parameters\. Tadpole demonstrates strong fine\-tuning performance across various downstream tasks, highlighting its versatility and effectiveness as a foundation model for 3D PDE learning\.

## Tactile MNIST: Benchmarking Active Tactile Perception

**Authors:** Tim Schneider; Guillaume Duret; Cristiana de Farias; Roberto Calandra; Liming Chen; Jan Peters

**ID:** 139796 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3yMkqerEOt>) | [PDF](<https://openreview.net/pdf?id=3yMkqerEOt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139796>)

Tactile perception has the potential to significantly enhance dexterous robotic ma\- nipulation by providing rich local information that can complement or substitute for other sensory modalities such as vision\. However, tactile sensing is an inher\- ently local sensor modality, providing information only at the points of contact\. This strict locality necessitates the use of active perception techniques to acquire useful, task\-relevant information from manipulated objects or the environment in general\. Hence, the agent must actively guide sensors toward regions with more informative or significant features and integrate such information over time in order to understand a scene or complete a task\. However, while active perception and tactile sensing methods have received significant attention recently, both fields lack standardized benchmarks\. To bridge this gap, we introduce the Tactile MNIST Benchmark Suite, an open\-source, Gymnasium\-compatible benchmark specifically designed for active tactile perception tasks, including localization, classification, and volume estimation\. Our benchmark suite offers diverse simulation scenarios, from simple toy environments all the way to complex tactile perception tasks using vision\-based tactile sensors\. Furthermore, we also offer a comprehensive dataset comprising 13,500 synthetic 3D MNIST digit models and 153,600 real\-world tactile samples collected from 600 3D printed digits\. Using this dataset, we train a CycleGAN for realistic tactile simulation rendering\. By providing standardized protocols and reproducible evaluation frameworks, our benchmark suite facilitates systematic progress in the fields of tactile sensing and active perception in general\.

## TTB: Test\-time MLP Baking for Efficient Rendering of Decoder\-only View Synthesis Models

**Authors:** Chin\-Yang Lin; Ryo Hachiuma; Jaesung Choe; Min\-Hung Chen; Frank Wang; Yen\-Yu Lin; Wei\-Chen Chiu; Yu\-Lun Liu; Cheng Sun

**ID:** 154935\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154935

[Paper](<https://openreview.net/forum?id=9pt0ng1IDx>) | [PDF](<https://openreview.net/pdf?id=9pt0ng1IDx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154935>)

Decoder\-only Large View Synthesis Models \(LVSMs\) with KV\-cache have recently achieved state\-of\-the\-art quality by regressing novel views from neural networks without reconstructing 3D geometry, while Test\-Time Training \(TTT\) layers can be introduced to save computation, but sacrifice quality\. We propose \*\*T\*\*est\-\*\*T\*\*ime \*\*B\*\*aking \(\*\*TTB\*\*\), a strategy that learns to bake global scene information from cross\-view attention into a lightweight MLP, enabling fast and high\-fidelity novel\-view decoding\. The first key is to repurpose the fast\-weight MLP of TTT to learn the cross\-view attention mapping explicitly from its input\-output pairs, rather than replacing attention entirely, achieving the same rendering efficiency as TTT while delivering substantially higher quality\. The second key addresses a modality misalignment between context prefilling and novel\-view rendering: we disentangle context tokens into camera\-only context rendering tokens to serve as TTB input, and context ground\-truth tokens with image content to serve as the TTB mapping target, ensuring the baked MLPs are relieved of the modality generalization challenge between context and novel\-view processing\. Our method achieves up to \*\*23x\*\* rendering speedup with quality on par with the state\-of\-the\-art across several benchmarks\.

## TTB: Test\-time MLP Baking for Efficient Rendering of Decoder\-only View Synthesis Models

**Authors:** Chin\-Yang Lin; Ryo Hachiuma; Jaesung Choe; Min\-Hung Chen; Frank Wang; Yen\-Yu Lin; Wei\-Chen Chiu; Yu\-Lun Liu; Cheng Sun

**ID:** 154935\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154935

[Paper](<https://openreview.net/forum?id=9pt0ng1IDx>) | [PDF](<https://openreview.net/pdf?id=9pt0ng1IDx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154935>)

Decoder\-only Large View Synthesis Models \(LVSMs\) with KV\-cache have recently achieved state\-of\-the\-art quality by regressing novel views from neural networks without reconstructing 3D geometry, while Test\-Time Training \(TTT\) layers can be introduced to save computation, but sacrifice quality\. We propose \*\*T\*\*est\-\*\*T\*\*ime \*\*B\*\*aking \(\*\*TTB\*\*\), a strategy that learns to bake global scene information from cross\-view attention into a lightweight MLP, enabling fast and high\-fidelity novel\-view decoding\. The first key is to repurpose the fast\-weight MLP of TTT to learn the cross\-view attention mapping explicitly from its input\-output pairs, rather than replacing attention entirely, achieving the same rendering efficiency as TTT while delivering substantially higher quality\. The second key addresses a modality misalignment between context prefilling and novel\-view rendering: we disentangle context tokens into camera\-only context rendering tokens to serve as TTB input, and context ground\-truth tokens with image content to serve as the TTB mapping target, ensuring the baked MLPs are relieved of the modality generalization challenge between context and novel\-view processing\. Our method achieves up to \*\*23x\*\* rendering speedup with quality on par with the state\-of\-the\-art across several benchmarks\.

## SynGS: Synergistic Continual Learning and Change Detection with Gaussian Splatting

**Authors:** Rui Huang; Haojie Tao; Sen Gao; Qing Guo

**ID:** 153370\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153370

[Paper](<https://openreview.net/forum?id=Ls29PxSARF>) | [PDF](<https://openreview.net/pdf?id=Ls29PxSARF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153370>)

3D Gaussian Splatting enables high\-fidelity, real\-time novel view synthesis, yet adapting it to dynamic, evolving scenes remains challenging\. Existing methods rely on fixed static\-dynamic partitioning, which suffers from persistent partitioning errors and cannot adapt during optimization\. To tackle this issue, we introduce SynGS, a unified 3D Gaussian framework for continual scene updating and multi\-view change detection\. We cast static\-dynamic decomposition as a learnable task, jointly optimizing per\-Gaussian change probabilities and scene representations for iterative refinement\. We further propose a change\-guided update strategy that modulates illumination\-aware photometric corrections via learned probabilities, separating transient appearance variations from authentic scene changes\. Projecting Gaussian\-level probabilities to the image plane yields 3D\-consistent change masks, enabling mutual optimization between reconstruction and change localization\. An illumination\-decoupled refinement step further improves mask quality\. Evaluations on standard benchmarks show that SynGS outperforms baseline methods on scene update and change detection tasks, while fully retaining the real\-time rendering capability of 3D Gaussian Splatting\. Code will be released upon acceptance\.

## RayTun3R: Online Camera Adaptation in 3D Foundation Models

**Authors:** Daniil Sinitsyn; Nikita Araslanov; Daniel Cremers

**ID:** 151667\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151667

[Paper](<https://openreview.net/forum?id=YusfyNZLcm>) | [PDF](<https://openreview.net/pdf?id=YusfyNZLcm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151667>)

Recent 3D foundation models, such as DUSt3R, MASt3R, VGGT, $\\pi^3$, and Depth Anything 3, provide strong feed\-forward depth and pose estimates on pinhole imagery, but degrade sharply under fisheye camera geometry\. We show that this failure is partly caused by a pinhole camera bias in the positional encodings of pretrained 3D foundation models, and propose RayTun3R, a lightweight camera adaptation approach\. It keeps the pretrained network fixed and adapts only lightweight components tied to token position and camera geometry\. RayTun3R learns parameter\-efficient residual corrections to absolute and rotary positional encodings, together with parameter\-free tokenization and corrections to prediction\-grid coordinates that remove residual pinhole assumptions\. The resulting adapter contains only 10,752 trainable parameters and can be learned from a short temporal segment using geometric losses\. Once adapted, RayTun3R transfers effectively to the remaining frames of the sequence without incurring additional runtime costs\. Across diverse fisheye datasets with fields of view from $110^\\circ$ to $200^\\circ$, our adapter reduces rotation error by $2\-12\\times$ relative to the unadapted model, outperforms LoRA while using $\\sim14\\times$ fewer trainable parameters, improves pose over adaptation\-free baselines while avoiding their multi\-view inference cost, and remains competitive on depth accuracy\.

## GenRec: Knowing Where to Reconstruct and Where to Generate

**Authors:** Ata Çelen; Jaewoo Jung; Federico Tombari; Marc Pollefeys; Sunghwan Hong; Michael Niemeyer; Daniel Barath

**ID:** 149818\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149818

[Paper](<https://openreview.net/forum?id=n68heFQnNa>) | [PDF](<https://openreview.net/pdf?id=n68heFQnNa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149818>)

Generative novel view synthesis from sparse input images is rarely all reconstruction or all generation: pixels visible in some source view have a unique correct value modulated only by view\-dependent shading, while pixels in disocclusions or beyond the captured volume admit a distribution of plausible completions\. Existing generative novel\-view\-synthesis methods conflate these regimes under a single uniform loss, blurring the line between geometric fidelity and creative hallucinations even when scene geometry is injected through warped point clouds or projected depth\. We introduce GenRec, a multi\-view flow matching model that builds the reconstruction\-\-generation split directly into its architecture, supervision, and gradient flow\. Guided by an observation mask derived from the source cameras and a monocular depth estimator, a flow matching backbone jointly denoises RGB and scene\-coordinate maps across all target views, while a pixel\-space refinement stage restores high\-frequency detail on observed pixels; the same mask gates supervision so regression signals do not contaminate the generative prior\. Across RealEstate10K, DL3DV\-10K, and Mip\-NeRF\~360, in both single\-view extrapolation and two\-view interpolation, GenRec attains the best reconstruction fidelity in observed regions while also surpassing purely generative baselines on perceptual quality in unobserved ones, showing the effectiveness of our approach\. The source code and trained models will be made public\.

## ViewRec3D: Learning to Recommend 3D Viewpoints for AI Photography

**Authors:** Chengzhi Zhang; Yunzhong Hou; Zizheng Sun; Ming\-Hsuan Yang; Chi Liu

**ID:** 149984 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=liAA4bZK9p>) | [PDF](<https://openreview.net/pdf?id=liAA4bZK9p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149984>)

Viewpoint dictates the photo composition and plays a vital role in AI photography\. Existing 3D viewpoint recommendation methods are often limited in viewpoint adjustments, which is mainly due to their lack of high\-quality training data with accurate and large 3D view changes\. Ideally, the training data should contain suboptimal images and expert\-selected optimal viewpoints, but this can be very expensive to curate\. To solve this, we build an automatically\-generated 3D viewpoint recommendation dataset from expert photos\. Specifically, we first consider these expert photos as optimal and outpaint them to provide more information on scene layouts\. Next, we explicitly reconstruct the 3D scene\. We then render suboptimal images from random viewpoints\. Lastly, we introduce a hierarchical data filtering scheme and acquire high\-quality data pairs for our ViewRecDB\-100K dataset\. On top of this, we further introduce a view recommendation model, ViewRecNet, that can predict expert viewpoints from any suboptimal image inputs using a ray\-based dense supervision\. The proposed method achieves strong results both  quantitatively and qualitatively, supported by LLM\-based viewpoint preference and human studies\. Data and code are available at https://github\.com/anonymous1\-submission/ViewRec3D\.git\.

## HOGWARTS: Mitigating Perspective Distortion for 6DoF Head Pose Estimation via Virtual Camera Space

**Authors:** Sungho Chun; Ju Yong Chang

**ID:** 150937 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eBZJLTaCK2>) | [PDF](<https://openreview.net/pdf?id=eBZJLTaCK2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150937>)

Estimating 6\-degrees\-of\-freedom \(6DoF\) head pose from a single RGB image remains challenging under strong perspective distortion\. We observe that the widely used design choice of rectangular face cropping introduces a geometric inconsistency\. This leads not only to image\-\-label mismatch under 2D rotation augmentation but also exacerbates perspective ambiguity, making it difficult to distinguish projection distortion from the actual appearance and pose of faces located near the image periphery\. To address this issue, we propose HOGWARTS, a geometry\-driven framework that replaces rectangular cropping with homography warping induced by a newly defined virtual camera space\. By explicitly defining a virtual camera that shares the optical center with the original camera and warping the input image into this space, our method compensates for off\-axis distortion in a geometrically consistent manner\. Furthermore, to accurately estimate 3D translation in the virtual space, we introduce a pinhole\-camera\-based translation formulation that explicitly compensates for projection scale variation caused by the virtual camera transformation\. Consequently, HOGWARTS enables more geometrically consistent and robust 6DoF pose estimation across varying image locations\. To the best of our knowledge, this is the first study to estimate the 6DoF pose of a target within a virtual camera space explicitly designed to mitigate perspective distortion\. Experimental results on the ARKitFace and BIWI datasets demonstrate that HOGWARTS consistently outperforms prior methods under severe perspective distortion as well as in cross\-domain settings\. Code will be made publicly available\.

## CC\-GS: Low\-Memory 3D Gaussian Splatting Training via CPU\-GPU Block\-Wise Context Compositing

**Authors:** Jian Xu; Siyi Wu; Yi Li; Bingzhe Li; Sian Jin; Wei Niu; Sheng Di; Yuede Ji; Miao Yin

**ID:** 154162 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FoB1Zw7yGu>) | [PDF](<https://openreview.net/pdf?id=FoB1Zw7yGu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154162>)

_Abstract unavailable from the accessible public sources._

## Hydra\-DP3: Frequency\-Aware Right\-Sizing of 3D Diffusion Policies for Visuomotor Control

**Authors:** Jinhao Zhang; Zhexuan Zhou; Huizhe Li; Yichen Lai; Wenlong Xia; Haoming Song; Youmin Gong; Jie Mei

**ID:** 152435 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TA5j0hwB2u>) | [PDF](<https://openreview.net/pdf?id=TA5j0hwB2u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152435>)

_Abstract unavailable from the accessible public sources._

## VideoMDM: Towards 3D Human Motion Generation From 2D Supervision

**Authors:** Amir Mann; Gal Michael Harari; Merav keidar; Or Litany

**ID:** 154317 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EYB8rootIX>) | [PDF](<https://openreview.net/pdf?id=EYB8rootIX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154317>)

We introduce VideoMDM, a diffusion\-based framework that trains 3D human motion priors directly from accurate 2D poses extracted from monocular videos, without any 3D ground truth\. A pretrained 2D\-to\-3D lifter provides approximate 3D pose sequences that serve as a noisy teacher: these are diffused, denoised by the model in 3D, and supervised in 2D by reprojecting the prediction and comparing against accurate keypoints\. We show that, under mild assumptions, a depth\-weighted 2D reprojection loss is equivalent in expectation to direct 3D supervision, and we adapt standard 3D motion regularizers — velocity consistency and over\-parameterized representation alignment — to this 2D setting\. Unlike methods that lift 2D to 3D only at inference, VideoMDM learns a coherent 3D motion manifold during training\. On HumanML3D it nearly closes the gap to fully 3D\-supervised MDM \(FID 0\.88 vs 0\.54\); On real video datasets Fit3D and NBA the method learns to generate motions consistently preferred by humans, with strong quantitative results\.

## CLoSeR: Closing the Loop for Long\-Context Streaming Reconstruction

**Authors:** Moyang Li; Zihan Zhu; Wei Zhang; Marc Pollefeys; Daniel Barath

**ID:** 148375 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yLutWZN8IE>) | [PDF](<https://openreview.net/pdf?id=yLutWZN8IE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148375>)

Feedforward foundation models have recently shown remarkable 3D reconstruction capabilities\. However, existing models exhibit large tracking drift in long\-context streaming reconstruction due to error accumulation\. In this paper, we revisit loop closure with streaming reconstruction foundation models to enable accurate, drift\-free, kilometer\-scale reconstruction\. Specifically, our method detects loop candidates through global descriptor retrieval, and constructs loop\-conditioned windows to estimate the relative poses between looped frames\. Given the observation that our adopted streaming reconstruction backbone produces a globally consistent scale, we optimize all frame poses on the SE\(3\) manifold with sequential and loop closure constraints, avoiding the pose graph optimization on the Sim\(3\) or higher\-dimensional SL\(4\) manifolds employed in prior works\. Extensive experiments show that our method reduces drift and produces consistent geometry on kilometer\-scale sequences, significantly outperforming the state of the art\. The code will be made public\.

## Attention Itself Could Retrieve\. RetrieveVGGT: Training\-Free Long Context Streaming 3D Reconstruction via Query\-Key Similarity Retrieval

**Authors:** Zichen Zou; Xiaosong Jia; Zuxuan Wu; Yu\-Gang Jiang

**ID:** 150300 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jAIfluCaNL>) | [PDF](<https://openreview.net/pdf?id=jAIfluCaNL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150300>)

Visual Geometry Grounded Transformer \(VGGT\) advances 3D reconstruction via scalable Transformer architecture, but the quadratic complexity of global attention prevents long context application\. StreamVGGT enables streaming with causal attention, yet its KV cache grows linearly with frames, causing memory overflow and quality degradation\.  We present RetrieveVGGT, a training\-free framework, which formulates context construction for VGGT as a retrieval problem\. By retrieving a fixed number of relevant frames at each step, VGGT maintains a controllable memory budget, which is close to its training context length\. Interestingly, we find that the similarity between current frame queries and cached history frame keys at the first global attention layer of VGGT is already a strong indicator of relevance, eliminating the need for additional learned scoring\. To enhance information diversity similar to a recommender system, we propose Segment Sampling so that the retrieval spans distinct relevant segments rather than a single high\-similarity region\. We design a pose\-aware spatial memory mechanism that organizes history frames according to their already estimated camera poses, enabling location\-aware retrieval\. Extensive experiments demonstrate that RetrieveVGGT achieves state\-of\-the\-art performance, outperforming StreamVGGT, TTT3R, and InfiniteVGGT while maintaining constant memory usage regardless of sequence length\.

## MACRO: Training\-free Multi\-plane Attention for Closeup Render Optimization

**Authors:** Nitzan Hodos; Roy Amoyal; Lior Fritz; Ianir Ideses; Sagie Benaim; Netalee Efrat

**ID:** 152798 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QHU7Lqvhfr>) | [PDF](<https://openreview.net/pdf?id=QHU7Lqvhfr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152798>)

Close\-up rendering, zooming into a scene well beyond any training camera, is important for virtual production and interactive 3D content, yet remains an open challenge\. 3D Gaussian splatting \(3DGS\) enables high\-fidelity, real\-time novel view synthesis, but its rendering quality degrades at close range\. Recent diffusion\-based methods that enhance the rendering by conditioning on reference images from the training set produce significant artifacts in this setting\. We analyze this failure and identify its root cause: the scale gap between the close\-up and reference views\. We show that the features in reference\-conditioned enhancement models are not scale\-invariant, causing cross\-view attention to retrieve incorrect correspondences when the same content appears at different scales, and that this mismatch cannot be corrected in latent space because the VAE encoder is not scale\-equivariant\. Building on this analysis we introduce MACRO, Multi\-plane Attention for Closeup Render Optimization, a training\-free method for high\-quality close\-up novel view synthesis from 3DGS\. MACRO resolves the scale gap by leveraging the scene's known 3D structure: it decomposes the close\-up into depth planes, crops and resizes references in image space to match the scale of each plane before encoding, and applies a depth\-aware attention mask so each token attends only to scale\-matched references\. The method requires no architectural changes or additional training\. We further contribute two new close\-up novel view synthesis benchmarks, the first standardized evaluation protocol for this setting, and demonstrate state\-of\-the\-art results on both, outperforming existing 3DGS and diffusion\-based methods on both reconstruction and perceptual metrics\.

## DySurface: Consistent 4D Surface Reconstruction via Bridging Explicit Gaussians and Implicit Functions

**Authors:** Minje Kim; Younghyun Noh; Jaesoon Kim; Tae\-Kyun Kim

**ID:** 150572 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h9og8tDeEz>) | [PDF](<https://openreview.net/pdf?id=h9og8tDeEz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150572>)

While novel view synthesis \(NVS\) for dynamic scenes has seen significant progress, reconstructing temporally consistent geometric surfaces remains a challenge\. Neural Radiance Fields \(NeRF\) and 3D Gaussian Splatting \(3DGS\) offer powerful dynamic scene rendering capabilities; however, relying solely on photometric optimization often leads to geometric ambiguities\. This results in discontinuous surfaces, severe artifacts, and broken surfaces over time\. To address these limitations, we present DySurface, a novel framework that bridges the effectiveness of explicit Gaussians with the geometric fidelity of implicit Signed Distance Functions \(SDFs\) in dynamic scenes\. Our approach tackles the structural discrepancy between the forward deformation of 3DGS \($canonical \\rightarrow dynamic$\) and the backward deformation required for volumetric SDF rendering \($dynamic \\rightarrow canonical$\)\. Specifically, we propose the VoxGS\-DSDF branch that leverages deformed Gaussians to construct a dynamic sparse voxel grid, providing explicit geometric guidance to the implicit SDF field\. This explicit anchoring effectively regularizes the volumetric rendering process, significantly improving surface reconstruction quality, containing watertight boundaries and detailed representations\. Quantitative and qualitative experiments demonstrate that DySurface significantly outperforms state\-of\-the\-art baselines in geometric accuracy metrics while maintaining competitive rendering performance\. Codes will be publicly available\.

## GeoWind2Plan: Mission\-Time 3D Urban Wind Prediction for Energy\-Efficient UAV Planning

**Authors:** Shaoxiang Qin; Xiongye Xiao; Yucheng Zhao; Fuyuan Lyu; Di Zhou; Jiachen Yao; Steve Liu; Animashree Anandkumar; Liangzhu Leon Wang

**ID:** 149346 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qmFNLvxGRp>) | [PDF](<https://openreview.net/pdf?id=qmFNLvxGRp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149346>)

In urban low\-altitude flight, buildings reshape ambient wind into spatially varying 3D flow, making unmanned aerial vehicle \(UAV\) energy depend on local wind exposure as well as path length\. However, building\-resolved wind information is rarely available when a mission must be planned\. Computational fluid dynamics \(CFD\) can produce high\-fidelity urban flow fields, but each simulation is tied to a fixed inflow boundary condition and can take hours to days, which is incompatible with urban UAV missions that typically last minutes to tens of minutes\. We present GeoWind2Plan, a geometry\-to\-wind\-to\-planning framework for mission\-time 3D urban wind prediction and energy\-efficient UAV planning\. Given only a background wind vector, 3D building geometry, and a start\-goal pair, GeoWind2Plan transforms the building geometry into a reference\-wind frame, predicts mission\-relevant 3D wind patches with a localized geometry\-conditioned neural operator, stitches them into a queryable local wind field, and optimizes a feasible 3D path and speed profile using a physically grounded UAV energy model\. Rather than pursuing CFD\-perfect reconstruction, GeoWind2Plan targets decision\-useful wind prediction: trajectories are planned with predicted wind and evaluated under high\-fidelity CFD wind\. Across held\-out urban domains, wind speeds, and mission wind\-angle regimes, GeoWind2Plan performs corridor\-localized wind inference in about 3 seconds, compared with roughly 8 hours for CFD\. Under CFD evaluation, trajectories planned with GeoWind2Plan reduce energy by 6\.9%, 12\.7%, and 4\.5% in tailwind, headwind, and crosswind missions relative to wind\-agnostic planning, recovering 87\.9%, 85\.7%, and 75\.0% of CFD\-reference savings\. These results show that fast, corridor\-localized 3D urban wind prediction can make wind\-aware UAV energy planning practical at mission time\.

## RelGS: Relation\-Aware Gaussian Splatting for Open\-Vocabulary 3D Scene Understanding

**Authors:** Kai Zhao; Dai Shi; YIXIN CHEN; Ye Wang; Oula Ghannoum; Yi Guo

**ID:** 155343 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6Jo2q08Opd>) | [PDF](<https://openreview.net/pdf?id=6Jo2q08Opd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155343>)

Open\-vocabulary 3D scene understanding provides an important interface for querying and interacting with reconstructed scenes through natural language\.  Although recent 3DGS methods have enabled text\-driven object selection and open\-vocabulary segmentation, they still struggle with compositional queries involving attributes, spatial relations, and part\-whole relations\.  Most existing approaches learn per\-Gaussian or per\-cluster language features, construct query\-conditioned referring fields, or perform spatial reasoning only at inference time, but they do not organize the scene itself into a reusable relation\-aware representation\.  As a result, object relations are not explicitly stored as typed and confidence\-aware 3D structures, limiting compositional reasoning and multi\-hop querying\.  To address this issue, we propose RelGS, a relation\-aware 3D Gaussian Splatting framework for open\-vocabulary scene understanding\.  RelGS learns semantic and instance embeddings for Gaussians under multi\-view supervision, groups them into cross\-view consistent 3D semantic nodes, and enriches each node with structured attributes verified by reverse CLIP consistency\.  It further constructs a confidence\-weighted relation graph, where 3D spatial cues propose candidate relations and an LLM verifies their semantic plausibility\.  At query time, RelGS combines attribute matching, CLIP retrieval, and graph traversal to localize the target object\.  Extensive experiments demonstrate strong performance on word\-level selection, sentence\-level referring segmentation, multi\-hop relational queries, and point\-level semantic segmentation\.

## Point4D: Long\-range 4D Motion Reconstruction

**Authors:** Minsik Jeon; Jay Karhade; Deva Ramanan; Shubham Tulsiani

**ID:** 155736 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3L4DUaI1nh>) | [PDF](<https://openreview.net/pdf?id=3L4DUaI1nh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155736>)

_Abstract unavailable from the accessible public sources._

## Déjà View: Looping Transformers for Multi\-View 3D Reconstruction

**Authors:** Alessandro Burzio; Tobias Fischer; Sven Elflein; Qunjie Zhou; Riccardo de Lutio; Jiawei Ren; Jiahui Huang; Shengyu Huang; Marc Pollefeys; Laura Leal\-Taixé; Zan Gojcic; Haithem Turki

**ID:** 154303 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Eidz3t6qmk>) | [PDF](<https://openreview.net/pdf?id=Eidz3t6qmk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154303>)

_Abstract unavailable from the accessible public sources._

## Scenes as Objects, Not Primitives : Instance\-Structured 3D Tokenization from Unposed Views

**Authors:** Mijin Yoo; In Cho; Subin Jeon; Jiwoo Lee; Eunbyung Park; Seon Joo Kim

**ID:** 149694 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o8YA4STvSo>) | [PDF](<https://openreview.net/pdf?id=o8YA4STvSo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149694>)

_Abstract unavailable from the accessible public sources._

## NEXUS: Neural Energy Fields for Physically Consistent Contact\-Rich 3D Object Dynamics

**Authors:** Qizhen Ying; Guangming Wang; Yangchen Pan; Victor Prisacariu; Brian Sheil; Yixiong Jing

**ID:** 151625 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z9xwHfl47k>) | [PDF](<https://openreview.net/pdf?id=Z9xwHfl47k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151625>)

_Abstract unavailable from the accessible public sources._

## Geometry\-Guided Semantic Reconstruction for 3D Instance Segmentation

**Authors:** Yuanhao Su; Shaofeng Zhang

**ID:** 150174 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k8lnRfJDKH>) | [PDF](<https://openreview.net/pdf?id=k8lnRfJDKH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150174>)

_Abstract unavailable from the accessible public sources._

## SurGe: Improved Surface Geometry in Point Maps

**Authors:** Karim Knaebel; Gonzalo Martin Garcia; Christian Schmidt; Ilya Fradlin; Lucas Nunes; Daan de Geus; Bastian Leibe

**ID:** 153420 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LSoxFFuHS0>) | [PDF](<https://openreview.net/pdf?id=LSoxFFuHS0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153420>)

_Abstract unavailable from the accessible public sources._

## Split\-and\-scale Latent 3D Representations

**Authors:** Dorian Chan; Muhammed Kocabas; Xiaoming Zhao; Oncel Tuzel; Jen\-Hao Chang

**ID:** 153852 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IGfZCD7djS>) | [PDF](<https://openreview.net/pdf?id=IGfZCD7djS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153852>)

_Abstract unavailable from the accessible public sources._

## GeoPano: Towards Geometrically Accurate Panoramic 3D Reconstruction from a Single Panorama

**Authors:** Jing OU; Zidong Cao; Liaoyuan Fan; Zhuoxiao Li; Shuai Zhang; Yinrui Ren; Dongli Wu; Haoang Li; Hui Xiong; Wufan Zhao

**ID:** 151984 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WMfFfSSyY6>) | [PDF](<https://openreview.net/pdf?id=WMfFfSSyY6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151984>)

_Abstract unavailable from the accessible public sources._

## SAM 3D Animal: Promptable Animal 3D Reconstruction from Images in the Wild

**Authors:** Xuyi Hu; Jin Lyu; Jiuming Liu; Yebin Liu; Silvia Zuffi; Liang An; Stefan Goetz

**ID:** 155674 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3pqVVK0kW3>) | [PDF](<https://openreview.net/pdf?id=3pqVVK0kW3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155674>)

3D animal reconstruction in the wild remains challenging due to large species variation, frequent occlusions, and the prevalence of multi\-animal scenes, while existing methods predominantly focus on single\-animal settings\. We present SAM 3D Animal, the first promptable framework for multi\-animal 3D reconstruction from a single image\. Built on the SMAL\+ parametric animal model, our method jointly reconstructs multiple instances and supports flexible prompts in the form of keypoints and masks which enable more reliable disambiguation in crowded and occluded scenes\. To train such a model, we further introduce Herd3D, a multi\-animal 3D dataset containing over 5K images, designed to increase diversity in species, interactions, and occlusion patterns\. Experiments on the Animal3D, APTv2, and Animal Kingdom datasets show that our framework achieves state\-of\-the\-art results over both existing model\-based and model\-free methods, demonstrating a scalable and effective solution for prompt\-driven animal 3D reconstruction in the wild\.

## Feed\-Forward 3D Gaussian Splatting for High\-Fidelity Animatable Hand Avatar Reconstruction from a Single Image

**Authors:** Chanho Kim; Kyeonghwan Gwak; Muhammad Salman Ali; Muhammad Shaheryar; Incheol Park; Jeongwan On; Seungryul Baek

**ID:** 150475 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hlvxGsP8zJ>) | [PDF](<https://openreview.net/pdf?id=hlvxGsP8zJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150475>)

Recent hand avatar reconstruction methods achieve high\-quality results through multi\-view observations or per\-subject optimization, limiting scalability and practical applicability\. We present \\emph\{FF3DGS\-Hand\}, a feed\-forward framework that reconstructs animatable hand avatars from a single monocular image using 3D Gaussian Splatting\. Our method establishes a stable canonical geometry for thin and articulated hand structures, then reconstructs appearance by leveraging source image evidence instead of relying solely on global latent features\. We further introduce a rendering\-aware, source\-conditioned appearance framework that selectively updates Gaussians according to their rendering contribution, recovering input\-specific details while suppressing artifacts in unobserved regions\. The resulting representation is animatable via standard hand pose parameters and supports efficient rendering\. Experiments demonstrate strong visual quality and quantitative performance in the single\-image setting\.

## Bridging 1D, 2D, and 3D with Any\-to\-Any Multimodal Modeling

**Authors:** Jason Toskov; Oriol Barbany; Rishubh Singh; Jinya Sakurai; Efe Tarhan; Oğuzhan F Kar; Roman Bachmann; Amir Zadeh; Jesse Allardice; Chuan Li; Carme Torras; Afshin Dehghan; Amir Zamir

**ID:** 156144 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=02d6EHhMh6>) | [PDF](<https://openreview.net/pdf?id=02d6EHhMh6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156144>)

The world appears spatially three\-dimensional, however, existing large\-scale multimodal models are often built mostly around 1D, 2D and 2\.5D modalities\. To move toward a more complete and actionable understanding of physical reality, models that natively model and generate across 1D, 2D, and 3D modalities are desirable\. We present OmniDiMM, an any\-to\-any foundation model trained on a diverse set of 3D including meshes, Gaussian splats, voxels, and NeRFs; 2D such as images, and 1D like text\. We develop tokenizers for a diverse set of 3D modalities, such as NeRF weights triplanes, UDFs, and 3DGSs, that convert them into discrete tokens, which enables multimodal masked modeling for joint training\. Out of the box, OmniDiMM can directly perform standard tasks such as novel\-view image synthesis and 3D generation from images, where it matches or outperforms existing specialized methods\. As an any\-to\-any model, it can also convert between different 3D representations, such as NeRF weights and UDF, and generate various 3D modalities from 2D inputs, including DINOv2 features and surface normals\. Joint training across 3D modalities also leads to strong transfer performance on downstream tasks such as grasping, classification, and object pose prediction\. We scale training to a 1B\-parameter model using 1T tokens across 1M objects\. The pretrained models, training code, and multimodal dataset will be open\-sourced\.

## Lookalike3D: Seeing Double in 3D

**Authors:** Chandan Yeshwanth; Angela Dai

**ID:** 153870 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=I8MCVub4xs>) | [PDF](<https://openreview.net/pdf?id=I8MCVub4xs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153870>)

3D object understanding and generation methods in indoor scenes produce impressive results, yet they often overlook a pervasive source of information in real\-world scenes: repeated objects\.  We introduce the task of lookalike object detection in indoor scenes, which leverages repeated and complementary cues from identical and near\-identical object pairs\. Given an input scene, the task is to classify pairs of objects as identical, similar or different using multiview images as input\. To address this, we present Lookalike3D, a multiview image transformer that effectively distinguishes such object pairs through similarity learning by harnessing strong semantic priors from large image foundation models\.   To support this task, we collected the 3DTwins dataset, containing 76k manually annotated identical, similar and different pairs of objects based on ScanNet\+\+, and show an improvement of 14\\% IoU over baselines on the task of lookalike object detection\. We also demonstrate how our method improves the downstream tasks of joint 3D object reconstruction and part co\-segmentation, turning repeated and lookalike objects into a powerful cue for consistent, high\-quality 3D scene understanding\. Our code, dataset and models will be made publicly available\.

## DIGS: Distribution\-Informed Gaussian Splatting for Training\-Free Open\-Vocabulary 3D Segmentation

**Authors:** ZHIFAN ZENG; Wenbo Xiao; Arcot Sowmya; Changming Sun

**ID:** 155419 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5pWANdn0Cl>) | [PDF](<https://openreview.net/pdf?id=5pWANdn0Cl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155419>)

Open\-vocabulary 3D Gaussian segmentation typically binds semantic features to per\-Gaussian state via per\-scene gradient training \(1–4 h\) or the more recent closed\-form distillation\. Both commit each primitive to a single feature; therefore, boundary Gaussians spanning multiple 2D instances are forced into a hard decision that degrades retrieval accuracy and yields unstable mask boundaries at render time\. We present DIGS, a training\-free framework with two stages, class\-agnostic map\- ping and multi\-modal encoding, that decouples instance discovery from linguistic naming\. At the Gaussian level, our distribution\-informed representation maintains an explicit top\-M label distribution per primitive, updated by a tempered Dirichlet rule; preservation of multi\-peaked posteriors at boundary primitives allows a late\-argmax renderer to recover clean instance boundaries\. A bidirectional state machine aggregates these distributions into a persistent class\-agnostic instance ontology\. The instance\-level encoding stage then fuses the CLIP visual embedding of each instance’s isolated 3D footprint with the CLIP\-text embedding of an LLM\-generated attribute description, disambiguating visually similar instances\. DIGS maps a scene in 1–3 minutes on a single A100 and serves 3D\-native retrieval in 5\.4 ms, reaching 71\.95% mIoU on LERF\-OVS, surpassing the strongest training\-free baseline SFS and the strongest training\-based baseline LaGa, and setting new state\-of\-the\-art performance on LERF\-Mask \(91\.71%\) and 3D\-OVS\(96\.45%\)\. Codes are at: https://anonymous\.4open\.science/r/DIGS\-C4EF\.

## SemGeo\-Gen: Unsupervised Generation of Approximate Cross\-Instance Semantic\-Geometric Correspondences

**Authors:** Roy Amoyal; Shira Ifergane; Oren Freifeld

**ID:** 148299 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ytcyAkt461>) | [PDF](<https://openreview.net/pdf?id=ytcyAkt461>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148299>)

We introduce SemGeo\-Gen, an unsupervised method for generating approximate cross\-instance semantic\-geometric supervision from weakly aligned 3D object collections\. Our goal is not to recover exact point\-level correspondences, which are often ambiguous across different instances and would require expensive, impractical manual supervision at scale\. Instead, we automatically produce approximate correspondences that are semantically meaningful, geometrically consistent, and diverse enough to train modern correspondence models\. Given only coarse category\-level rotation alignment, SemGeo\-Gen lifts multi\-view DINOv2 features to 3D, aligns object instances using continuous piecewise\-affine registration, and prunes candidate matches using semantic consistency\. The resulting 3D correspondences can be projected into rendered views, yielding scalable 3D\-3D, 3D\-2D, and 2D\-2D supervision without manual annotation\. We validate the generated correspondences against sparse human annotations from KeypointNet, obtaining 93% PCK@0\.10 and 97% PCK@0\.15\. More importantly, we show that using the generated correspondences for synthetic pretraining improves recent state\-of\-the\-art semantic correspondence models on SPair\-71k after fine\-tuning on real data, with gains of up to 5 PCK@0\.10 points\. Together, these results indicate that approximate semantic\-geometric supervision generated from 3D assets can improve real\-image correspondence learning and serve as a scalable alternative to costly manual annotation\. Code and generated data will be released upon acceptance\.

## MoSE3: Learning World\-Space SE\(3\) at Every Pixel

**Authors:** Jiahuan\(Joanna\) Cheng; Zhiyi Li; Tian Xia; Ruojin Cai; Yilun Du; Qianqian Wang

**ID:** 155847 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2S8lPSNr5U>) | [PDF](<https://openreview.net/pdf?id=2S8lPSNr5U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155847>)

Dense 2D/3D point tracking has been the dominant paradigm for modeling motion in dynamic scenes, but a point track is just a 3\-DoF translation curve per pixel: it captures where pixels go, not the rotation of the underlying part, nor which pixels move together as one body\. We propose MoSE3, the first feed\-forward model that predicts dense SE\(3\) motion from monocular RGB video, producing full 6\-DoF rigid transforms at every pixel in world space\. Per\-pixel SE\(3\) motion offers a richer view of how a scene moves: rotation, translation, and grouping all at once\. Directly predicting SE\(3\) is challenging: rotations lie on a curved manifold that is ill\-suited to Euclidean regression, and annotations for SE\(3\) are particularly difficult to acquire\. To address these challenges, MoSE3 predicts per\-pixel SE\(3\) through two jointly learned intermediates, 3D point tracks and rigidity embeddings, and recovers SE\(3\) by differentiably fitting transforms within each soft rigid cluster, enabling end\-to\-end prediction and supervision\. To close the data gap, we introduce Art\-Kubric, a large\-scale synthetic dataset with dense SE\(3\) and rigidity labels for articulated scenes with rich physical interactions\. MoSE3 achieves state\-of\-the\-art SE\(3\) estimation at pixel, part, and object levels on both rigid and articulated benchmarks, and state\-of\-the\-art 3D point tracking on three datasets, while showing strong generalization to real\-world videos despite being trained solely on synthetic motion data\.

## Enhancing Novel View Synthesis via Geometry Grounded Set Diffusion

**Authors:** Farhad Zanjani; Herbert Cai; Amirhossein Habibian

**ID:** 152331 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Tsa68eSMjP>) | [PDF](<https://openreview.net/pdf?id=Tsa68eSMjP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152331>)

We present SetDiff, a geometry\-grounded multi\-view diffusion framework that enhances novel\-view renderings produced by 3D Gaussian Splatting\. Our method integrates explicit 3D priors, pixel\-aligned coordinate maps and pose\-aware Plucker ray embeddings, into a set\-based diffusion model capable of jointly processing variable numbers of reference and target views\. This formulation enables robust occlusion handling, reduces hallucinations under low\-signal conditions, and improves photometric fidelity in visual content restoration\. A unified set mixer performs global token\-level attention across all input views, supporting scalable multi\-camera enhancement while maintaining computational efficiency through latent\-space supervision and selective decoding\. Extensive experiments on EUVS, Para\-Lane, nuScenes, and DL3DV demonstrate significant gains in perceptual fidelity, structural similarity, and robustness under severe extrapolation\. SetDiff establishes a state\-of\-the\-art diffusion\-based solution for realistic and reliable novel\-view synthesis in autonomous driving scenarios\.

## TrackCraft3R: Repurposing Video Diffusion Transformers for Dense 3D Tracking

**Authors:** Jisu Nam; Jahyeok Koo; Soowon Son; Jaewoo Jung; Honggyu An; Junhwa Hur; Seungryong Kim

**ID:** 155634\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155634

[Paper](<https://openreview.net/forum?id=46qtUc033H>) | [PDF](<https://openreview.net/pdf?id=46qtUc033H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155634>)

Dense 3D tracking from monocular video is fundamental to dynamic scene understanding\. While recent 3D foundation models provide reliable per\-frame geometry, recovering object motion in this geometry remains challenging and benefits from strong motion priors learned from real\-world videos\. Existing 3D trackers either follow iterative paradigms trained from scratch on synthetic data or fine\-tune 3D reconstruction models learned from static multi\-view images, both lacking real\-world motion priors\. Pre\-trained video diffusion transformers \(video DiTs\) offer rich spatio\-temporal priors from internet\-scale videos, making them a promising foundation for 3D tracking\. However, their frame\-anchored formulation, which generates each frame's content, is fundamentally mismatched with reference\-anchored dense 3D tracking, which must follow the same physical points from a reference frame across time\. We present TrackCraft3R, the first method to repurpose a video DiT as a feed\-forward dense 3D tracker\. Given a monocular video and its frame\-anchored reconstruction pointmap, TrackCraft3R predicts a reference\-anchored tracking pointmap that follows every pixel of the first frame across time in a single forward pass, along with its visibility\. We achieve this through two designs: \(i\) a dual\-latent representation that uses per\-frame geometry latents and reference\-anchored track latents as dense queries, and \(ii\) temporal RoPE alignment, which specifies the target timestamp of each track latent\. Together, these designs convert the per\-frame generative paradigm of video DiTs into a reference\-anchored tracking formulation with LoRA fine\-tuning\. TrackCraft3R achieves state\-of\-the\-art performance on standard sparse and dense 3D tracking benchmarks, while running 1\.3x faster and using 4\.6x less peak memory than the strongest prior method\. We further demonstrate robustness to large motions and long videos\. Our code and weights will be publicly released\.

## Split Then Select: Moment\-Preserving Density Control for Generalized Primitive Splatting

**Authors:** Yangkai Lin; Jiehong Lin; Kui Jia

**ID:** 155773\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155773

[Paper](<https://openreview.net/forum?id=31sxeY9QjS>) | [PDF](<https://openreview.net/pdf?id=31sxeY9QjS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155773>)

Primitive splatting has become a powerful representation for efficient differentiable rendering, but existing density\-control strategies remain largely heuristic and often suffer from uncontrolled primitive growth\. In this work, we present \\textbf\{Moment\-Preserving Density Control \(MPDC\)\}, a general theoretical framework for densification in primitive splatting\. Unlike conventional density\-control strategies that \\emph\{select first and split later\}, MPDC follows a \\emph\{split\-then\-select\} paradigm\. Our key insight is that a principled split should first preserve the current rendering, rather than immediately perturb the image\. By matching local moments, MPDC decomposes a primitive into multiple offspring while keeping the rendered output, and hence the loss, unchanged up to higher\-order error\. Although such a split does not directly reduce the loss, it changes the parameter space: a saddle point in the original parameterization may no longer remain a saddle point after splitting\. This provides a distinct saddle\-escaping mechanism from prior approaches that move primitives along negative\-curvature directions\. Building on this view, we derive closed\-form splitting rules for different primitive parameterizations and then select only primitives whose moment\-preserving splits reduce an upper bound of the loss through a splitting\-matrix criterion\. Experiments on three diverse primitive splatting methods show that MPDC substantially reduces primitive counts without sacrificing rendering quality, while improving memory efficiency and rendering speed\. Code will be released upon publication\.

## Mesh BDF: Barycentric Dominance Field for 3D Native Mesh Generation

**Authors:** Gaochao Song; Haohan Weng; Luo Zhang; Zibo Zhao; Shenghua Gao

**ID:** 154136\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154136

[Paper](<https://openreview.net/forum?id=Fy4JoneGmz>) | [PDF](<https://openreview.net/pdf?id=Fy4JoneGmz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154136>)

Autoregressive \(AR\) modeling has recently achieved remarkable progress in native 3D mesh generation, largely due to its natural ability to handle variable\-length, discrete data structures\. However, the inherent constraints of the AR paradigm severely restrict the generated meshes, leading to limited face counts, bounded vertex resolutions, and difficulties in supporting textures\. To overcome these bottlenecks, we propose the Barycentric Dominance Field \(BDF\), a continuous representation defined on triangular mesh surfaces that elegantly encodes vertex topological connectivity\. BDF bridges the fundamental gap between discrete mesh topology and continuous diffusion\-based generative modeling by transforming connectivity into a continuous surface signal\. As an intrinsic mesh property, BDF shares strong similarities with texture maps, enabling its seamless integration into existing 3D diffusion pipelines without requiring architectural modifications\. Extensive experiments demonstrate that BDF empowers diffusion models to generate native meshes with significantly higher quality, greater scalability, and stronger robustness compared to state\-of\-the\-art autoregressive methods\.

## Align3D\-AD: Cross\-Modal Feature Alignment and Dual\-Prompt Learning for Zero\-shot 3D Anomaly Detection

**Authors:** Letian Bai; Xuanming Cao; Juan Du; Chengyu Tao

**ID:** 152960 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P5rO538Rjx>) | [PDF](<https://openreview.net/pdf?id=P5rO538Rjx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152960>)

Zero\-shot 3D anomaly detection aims to identify anomalies without access to training data from target categories\.  However, existing methods mainly rely on projecting 3D observations into multi\-view representations that primarily capture geometric cues rather than realistic visual semantics and process them with vision encoders pretrained on RGB data, leading to a significant domain gap between the encoder and the projected representations\.  To address this issue, we propose Align3D\-AD, a unified two\-stage framework that leverages the RGB modality from auxiliary categories as cross\-modal guidance for zero\-shot 3D anomaly detection\.  First, we introduce a cross\-modal feature alignment paradigm that maps rendering features into the RGB semantic space\.  Unlike prior works that implicitly rely on pretrained encoders, our method enables direct semantic transfer from RGB observations\.  A semantic consistency reweighting strategy is further introduced to refine feature alignment by reweighting local regions according to holistic semantic consistency\. Second, we propose a modality\-aware prompt learning framework with dual\-prompt contrastive alignment\.  By assigning independent prompts to RGB\-aligned and rendering features, our method captures complementary semantics across modalities, while the contrastive alignment further enhances prompt representations to improve discriminability\. Extensive experiments on MVTec3D\-AD, Eyecandies, and Real3D\-AD demonstrate that Align3D\-AD consistently outperforms existing zero\-shot methods under both one\-vs\-rest and cross\-dataset settings, highlighting its generalization capability and robustness\. Code and the dataset will be made available once our paper is accepted\.

## EgoSurgHands: An Egocentric 3D Hand Pose Dataset &amp; Benchmark for Open\-Surgery Training

**Authors:** Ankit Pal; Guillaume Kugener; Sofia Volpi; Joshua Schwartz; Alex Idarraga; Pranav Rajpurkar; Gabriel A Brat

**ID:** 139540\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139540

[Paper](<https://openreview.net/forum?id=JzZtdS0p1e>) | [PDF](<https://openreview.net/pdf?id=JzZtdS0p1e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139540>)

We introduce EgoSurgHands, an egocentric 3D hand\-pose dataset and benchmark for open\-surgery training tasks captured with Meta Project Aria glasses on standard surgical training pads\. To our knowledge, EgoSurgHands is the first public benchmark for surgical training that is simultaneously egocentric, sensor\-grounded, and human\-validated\. EgoSurgHands contains 41,909 training hand\-instance rows across 55 procedure recordings and 9,476 inter\-annotator\-agreement \(IAA\)\-validated rows across 13 held\-out procedure recordings from 4 wearers, 13 distinct tasks, 3 glove colors, and 3 stages of training\. Each frame includes Aria intrinsics, SLAM extrinsics, MPS \(Machine Perception Services\) landmarks, per\-joint confidence, timestamps, and eye gaze\. Validation 3D keypoints are initialized from Aria MPS and independently corrected by four expert annotators under a multi\-rater IAA workflow, yielding evaluation ground truth independent of any tested model's training signal\. Using EgoSurgHands, we benchmark six state\-of\-the\-art hand reconstructors under zero\-shot transfer: HaMeR, WiLoR, WildHands, JointTransformer, SimpleHand, and MeshGraphormer\. Ego\-pretrained models consistently outperform non\-egocentric baselines: WildHands improves over the non\-ego HaMeR reference by 4\.51 mm PA\-MPJPE, while JointTransformer achieves the best zero\-shot result at 14\.95 mm PA\-MPJPE\. These results show that generalist egocentric pretraining transfers to surgical egocentric tasks, but also reveal a substantial remaining surgical\-domain gap\. As a lightweight diagnostic adaptation experiment, a 58K\-parameter two\-headed \(pose \+ translation\) residual corrector further reduces error on frozen backbones, reaching 10\.40 mm PA\-MPJPE and 75\.8 mm absolute MPJPE on WildHands \($\-$49\.2\\% and $\-$85\.8\\% vs zero\-shot\)\. We release the dataset, benchmark code, checkpoints, and multi\-rater annotation framework at \[URL withheld for double\-blind review\]\.

## From Persistence to Survival: Hypothesis Testing, Effect Sizes and Vectorisation for Topological Features

**Authors:** Juliette Murris; Bernadette J Stolz; Karsten Borgwardt

**ID:** 153632\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153632

[Paper](<https://openreview.net/forum?id=JxamHvfzlr>) | [PDF](<https://openreview.net/pdf?id=JxamHvfzlr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153632>)

Persistence diagrams are common representations in topological data analysis, yet they lack both the vector space structure required by machine learning algorithms and a principled framework for statistical comparison\. We introduce STRAND \(Survival Topological Representation ANalysis of Diagrams\), which treats \(collections of\) PDs as survival data: each topological feature with persistence value $p = d \- b$ is a fully observed time\-to\-event, and the persistence survival function $S\(t\) = \\mathbb\{P\}\(p &gt; t\)$ is the central object for comparing diagrams\. From this single representation we derive \(i\) a non\-parametric two\-sample test with calibrated Type\~I error and high power from a small number of diagrams; \(ii\) interpretable effect sizes; and \(iii\) a 1\-Wasserstein\-stable feature vector for downstream machine learning\. We validate calibration and power on synthetic manifolds with controlled topology, demonstrate competitive vectorisation across 14 graph and 3D point cloud benchmarks, and apply the method to study functional brain connectivity in fMRI/neuroscience data\. To our knowledge, STRAND is the first method to provide hypothesis testing and vectorisation for persistence diagrams from a single coherent and interpretable representation\.

## 3DSPA: A 3D Semantic Point Autoencoder for Evaluating Video Realism

**Authors:** Bhavik Chandna; Kelsey Allen

**ID:** 153051\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153051

[Paper](<https://openreview.net/forum?id=OOMPX54uZM>) | [PDF](<https://openreview.net/pdf?id=OOMPX54uZM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153051>)

AI video generation is evolving rapidly\. For video generators to be useful for applications ranging from robotics to film\-making, they must consistently produce realistic videos\. However, evaluating the realism of generated videos remains a largely manual process \-\- requiring human annotation or bespoke evaluation datasets which have restricted scope\. Here we develop an automated evaluation framework for video realism  which captures both semantics and coherent 3D structure and which does not require access to a reference video\. Our method, 3DSPA, is a \*\*3D\*\* \*\*S\*\*emantic \*\*P\*\*oint \*\*A\*\*utoencoder utoencoder which is trained to reconstruct held out 3D point trajectories which have been augmented with DINO semantic features\. By combining both semantic and geometric representations, 3DSPA enables robust assessments of realism, temporal consistency, and physical plausibility in generated videos\. Experiments show that 3DSPA outperforms leading VLMs by more than 10\\% in identifying videos which violate physical laws, and more than doubles the correlations between human and auto\-eval ratings in judging physical common sense and motion quality across multiple generative video datasets\. Our results demonstrate that enriching trajectory\-based representations with 3D semantics offers a strong foundation for benchmarking generative video models, and implicitly captures physical rule violations\.

## Think Before You Generate: Active Panoramic Exploration for Text\-to\-3D Scenes

**Authors:** Derui Li; Peng Lu; Lujing Cao; Yuhao Sun; Wenhao Guo; Sheng Li

**ID:** 155232\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155232

[Paper](<https://openreview.net/forum?id=7H3l3MnUbl>) | [PDF](<https://openreview.net/pdf?id=7H3l3MnUbl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155232>)

Creating explorable 3D environments from text is important for immersive content creation, simulation, and interactive design\.  Recent methods often rely on image or video generative priors by synthesizing views along fixed or manually specified trajectories and lifting them into 3D\.  However, such passive pipelines cannot adapt view generation to the evolving scene memory, often leaving disoccluded regions incomplete and producing holes, floaters, and inconsistent geometry under free\-viewpoint exploration\.  We argue that the key challenge is not to generate more views, but to decide where to generate useful views according to the current scene state\.  To this end, we propose ActPano3D, an active text\-to\-3D scene generation framework based on memory\-guided panoramic exploration\.  ActPano3D formulates trajectory selection as spatial deliberation over the evolving scene memory, where candidate actions are evaluated by their expected utility for exploring unknown regions, repairing uncertain geometry, and improving the future 3D world model\.  The framework integrates expansion\-refinement active planning, memory\-routed panoramic generation, and reliability\-aware scene memory fusion into a closed\-loop generation\-and\-reconstruction process\.  The accumulated memory is further optimized into a renderable 3D Gaussian Splatting scene for free\-viewpoint exploration\.  Experiments show that ActPano3D improves scene coverage, reduces rendering holes, and achieves better rendering quality and text alignment than existing text\-to\-3D scene generation baselines\.

## MySign: A High\-Fidelity Motion\-Capture Dataset for 3D Sign Generation in Bahasa Isyarat Malaysia

**Authors:** Jiayu Shen; Kalin Stefanov; Lay\-Ki Soon; Vee Yee CHONG; Alpha A Gopalai; KokSheik Wong

**ID:** 139615\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139615

[Paper](<https://openreview.net/forum?id=FMCB6LFtcc>) | [PDF](<https://openreview.net/pdf?id=FMCB6LFtcc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139615>)

Progress in fine\-grained 3D sign generation is constrained by the scarcity of high\-fidelity 3D sign language datasets, a limitation that is particularly severe for under\-resourced languages\. We introduce MySign, the first motion\-capture dataset for isolated signs in Bahasa Isyarat Malaysia \(BIM\), comprising 5,000 3D samples covering 1,000 lexical items \(glosses\), produced by five Deaf native signers\. Unlike prior datasets that rely on SMPL\-X parameters regressed from video \(pseudo\-labels\)\-\-often affected by depth ambiguity, inaccurate finger articulation, and temporal jitter\-\-MySign provides ground\-truth SMPL\-X sequences captured with a motion\-capture setup tailored for sign language\. This yields higher\-fidelity motion, particularly in fine\-grained hand and finger articulation\. We establish MySign as a challenging benchmark for gloss\-conditioned 3D sign generation: state\-of\-the\-art models produce visually plausible outputs but fall short of ground\-truth fidelity, particularly in fine\-grained articulation, revealing persistent gaps in modeling articulated sign motion\. In contrast, recognition baselines consistently achieve high lexical accuracy, indicating that the dataset reliably supports supervised learning\. We anticipate that MySign will enable more faithful 3D sign generation and support finer\-grained analysis of sign articulation\. The dataset is available at https://huggingface\.co/datasets/mysigner/MySign\.

## PhotoFlow: Agentic 3D Virtual Photography Missions

**Authors:** Jiarui Guo; Haojia Wei; Yiming Zhang; Yifei Liu; Yuning Gong; Hongjie Zhang; Xue Yang; Zhihang Zhong

**ID:** 149703\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149703

[Paper](<https://openreview.net/forum?id=o5fDea7QFO>) | [PDF](<https://openreview.net/pdf?id=o5fDea7QFO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149703>)

Virtual photography asks an agent to enter a prepared 3D scene with no preselected camera pose or reference image, infer a suitable shot from scene information and a language intent, choose executable camera parameters, and render the final photograph\. Recent progress in vision\-language models makes this kind of spatial agent increasingly plausible, but the task stresses two capabilities that remain hard to evaluate together: complex 3D spatial understanding and abstract aesthetic judgment\. We introduce PhotoFlow, a Director\-Reviewer\-Reflector agent for closed\-loop camera search\. The Director builds a soft photographic blueprint and proposes diverse candidate cameras; the Reviewer combines rule checks, visual critique, and pairwise incumbent selection; and the Reflector converts failures into region memory, dead\-zone suppression, and high\-explore relocation\. We also introduce VPhotoBench, a benchmark of 47 open\-license Blender scenes and 141 language\-conditioned photography missions spanning subject placement, relational composition, and atmosphere/style\. On held\-out experiments,PhotoFlow achieves the strongest external quality\-alignment composite and success rate among one\-shot prediction, single\-chain reflection, anchor\-bank selection, and random search under a six\-round rendering budget\. To our knowledge, this is the first work to make language\-conditioned virtual photography in 3D design or game engines \(e\.g\., Blender\) an executable agent task, and our results show that an LLM\-centered spatial agent can already produce strong photographs in a setting designed to challenge both 3D reasoning and aesthetic choice\.

## Magnifying What Matters: Attention\-Guided Adaptive Rendering for Visual Text Comprehension

**Authors:** Shenglai Zeng; Qirui Wang; Kai Guo; Xinnan Dai; Xianxuan Long; Hui Liu

**ID:** 154549\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154549

[Paper](<https://openreview.net/forum?id=Ck587Z7t03>) | [PDF](<https://openreview.net/pdf?id=Ck587Z7t03>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154549>)

Visual Text Comprehension \(VTC\) renders text into images for a vision\-language model \(VLM\) to read, sidestepping LLM context\-window limits and powering applications from long\-page OCR to multi\-page memory QA\. Yet existing VTC pipelines treat rendering and layout as a fixed, content\-agnostic preprocessing step, and offer little mechanistic understanding of how VLMs internally process visualized text\. Through a focused empirical study on VTC QA tasks, we find that VLMs exhibit a localization\-without\-utilization regime: evidence\-localizing attention emerges sharply in the middle\-to\-late layers and is largely decoupled from answer correctness, yet simply enlarging the localized spans on the rendered page recovers a large fraction of the failures\. Building on these observations, we propose AGAR \(Attention\-Guided Adaptive Rendering\), a training\-free, model\-agnostic method that leverages a VLM's own middle\-to\-late layer attention to identify the top\-K important visual patches, maps them back to word spans, and re\-renders the page with those spans enlarged before re\-inferring the answer\. Extensive experiments across nine VTC benchmarks \(short\-form, long\-context, and multi\-page memory QA\) and four VLM backbones show that AGAR \(i\) consistently improves off\-the\-shelf VLMs as a plug\-and\-play enhancement, \(ii\) composes with VLM post\-training to yield further gains, and \(iii\) remains robust under both visual\- and text\-side input degradation\.

## VolFill: Single\-View Amodal 3D Scene Reconstruction with Volumetric Flow Matching

**Authors:** Tuan Ngo; Chuang Gan; Evangelos Kalogerakis

**ID:** 151919\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151919

[Paper](<https://openreview.net/forum?id=WvIoVDOETy>) | [PDF](<https://openreview.net/pdf?id=WvIoVDOETy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151919>)

Reconstructing the complete geometry of a scene from a single RGB image remains challenging—especially when inferring hidden structures where visual evidence is incomplete\. We introduce VolFill, a generative framework that predicts the 3D structure of the complete scene rather than relying on traditional pixel\-aligned regression\. Our method utilizes a hybrid 3D VAE to compress sparse truncated unsigned distance function grids  into a compact latent space, paired with a latent Diffusion Transformer that denoises this representation to recover the complete scene\. We condition the generation on geometry foundation models, leveraging rich spatial priors for robust reasoning\. Unlike existing methods limited by per\-ray constraints or unstructured point\-cloud queries, VolFill provides a structured representation that supports direct surface extraction and occupancy queries at scale\. Extensive experiments on the 3D\-FRONT and NRGBD datasets demonstrate that our approach significantly outperforms current baselines, providing a robust foundation for holistic spatial understanding\.

## PLANING: A Loosely Coupled Triangle\-Gaussian Framework for Streaming 3D Reconstruction

**Authors:** Changjian Jiang; Kerui Ren; Xudong Li; Kaiwen Song; Guanghao Li; Linning Xu; Tao Lu; Junting Dong; Yu Zhang; Yu Feng; Bo Dai; Mulin Yu

**ID:** 150984\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150984

[Paper](<https://openreview.net/forum?id=dmRkqf6pOG>) | [PDF](<https://openreview.net/pdf?id=dmRkqf6pOG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150984>)

Streaming reconstruction from monocular image sequences remains challenging, as existing methods typically favor either high\-quality rendering or accurate geometry, but rarely both\. We present PLANING, an efficient on\-the\-fly reconstruction framework built on a hybrid representation that loosely couples explicit geometric primitives with neural Gaussians, enabling geometry and appearance to be modeled in a decoupled manner\. This decoupling supports an online initialization and optimization strategy that separates geometry and appearance updates, yielding stable streaming reconstruction with substantially reduced structural redundancy\. Despite operating online, PLANING improves dense mesh Chamfer\-L2 by 18\.52% over the offline baseline PGSR, surpasses the streaming baseline ARTDECO by 1\.31 dB in PSNR, and reconstructs ScanNetV2 scenes in under 100 seconds, over 5x faster than offline 2D Gaussian Splatting while matching per\-scene optimization quality\. Beyond reconstruction quality, the structural clarity and computational efficiency of PLANING make it well suited for a broad range of downstream applications, such as enabling large\-scale scene modeling and simulation\-ready environments for embodied AI\.

## FRUC: Feedforward Dynamic Scene Reconstruction from Uncalibrated Collaborative Driving Views

**Authors:** Yihang Tao; Yu Guo; Zhengru Fang; Haonan An; Yuguang Fang

**ID:** 150220\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150220

[Paper](<https://openreview.net/forum?id=jruosxypbz>) | [PDF](<https://openreview.net/pdf?id=jruosxypbz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150220>)

We present FRUC, a feed\-forward 3D Gaussian splatting framework for dynamic scene reconstruction from uncalibrated collaborative driving views\. Existing multi\-agent reconstruction frameworks are often hindered by rigid prerequisites, demanding precise spatial calibration and slow per\-scene optimization\. In this paper, we rethink this task by conceptualizing a distributed multi\-vehicle network as a spatio\-temporally unstructured ego\-centric multi\-camera system, where the core challenge lies in enhancing ego\-centric occluded geometry through collaboration without degrading the ego's accurately observed visible geometry, while preserving reconstruction efficiency\. For efficient reconstruction, FRUC is built upon a visual grounded geometric Transformer backbone to enable one\-shot, calibration\-free inference from a flexible number of multi\-vehicle views\. To achieve non\-destructive geometric supplementation under uncalibrated cross\-agent misalignment, FRUC first introduces an ego\-centric causal occlusion field that explicitly derives occlusion evolution as latent priors by modeling agent\-wise spatio\-temporal correlations\. Guided by these occlusion priors, it further formulates cross\-agent integration as a deterministic residual denoising process via zero\-initialized injection, turning challenging cross\-agent fusion into bounded residual learning for robust collaborative blind\-spot completion\. Through extensive evaluations on the real\-world V2XReal and UrbanIng\-V2X datasets, FRUC is shown to be a new state\-of\-the\-art for the scene reconstruction of dynamic collaborative driving environments, significantly outperforming existing methods in both rendering quality and efficiency\.

## ArtCrafter: Feed\-Forward Generation of Articulated 3D Object with Analytic Joint Derivation

**Authors:** Minh Tu; Quang\-Binh Nguyen; Khoi Nguyen

**ID:** 151536\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151536

[Paper](<https://openreview.net/forum?id=ZwxUmdqiMF>) | [PDF](<https://openreview.net/pdf?id=ZwxUmdqiMF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151536>)

Articulated 3D assets are essential for robot simulation, yet generating them from casual images remains unsolved\. Existing approaches either predict URDF parameters via learned regression or language model inference \-\- both requiring articulation supervision and producing joints that may be geometrically inconsistent with the generated meshes \-\- or reconstruct from dense calibrated multi\-view captures, limiting scalability\. We present \\textbf\{ArtCrafter\}, a feed\-forward generative model that takes two images of an articulated object \-\- one at rest, one fully open \-\- and produces $2N\+1$ part\-level meshes together with a physics\-executable URDF in a single forward pass\. Inspired by Slot Attention, we structure the denoising process around a $1\+2N$ slot layout whose slots, forced to jointly explain two articulation states, naturally bind to kinematic parts\. \\textbf\{TripletAttention\} enforces cross\-state geometric consistency between each paired rest/open slot anchored through a shared base slot, and a repulsion loss $\\mathcal\{L\}\_\{\\mathrm\{rep\}\}$ operating on decoded point clouds ensures inter\-part disjointness throughout denoising\. Because paired meshes are geometrically consistent by construction, URDF joint parameters \-\- type, axis, origin, and range \-\- are derived \\emph\{analytically\} from the rigid transform between each pair, requiring no learned articulation head, no language model, and no per\-instance optimization\. Experiments on URDF\-Anything\+ demonstrate consistent improvements over retrieval\-based and generative baselines across part\-level geometry and all four articulation metrics\. ArtCrafter demonstrates a clean decomposition: a diffusion model handles geometry, and geometry handles URDF\.

## SceneScaffold: Active Scene\-State Construction for Unified 3D Scene Understanding

**Authors:** Xiangqi Li; Libo Huang; Jiarui Zhao; Weilun Feng; Chuanguang Yang; Zhulin An; Yongjun Xu

**ID:** 154773 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B3wsHZckwI>) | [PDF](<https://openreview.net/pdf?id=B3wsHZckwI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154773>)

_Abstract unavailable from the accessible public sources._

## VLSplat: Vision\-Language Guided Object\-Centric 3D Gaussian Splatting via Scene Graph

**Authors:** Yuntae Jeon; Younho Jeon; Sujin Jin; Sungho Jo; Seunghee Park

**ID:** 148647 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wB1qrn1Paj>) | [PDF](<https://openreview.net/pdf?id=wB1qrn1Paj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148647>)

_Abstract unavailable from the accessible public sources._

## Horizon\-Stream: Long\-Horizon Attention for Streaming 3D Reconstruction

**Authors:** Chong Cheng; Peilin Tao; Nanjie Yao; Guanzhi Ding; Xianda Chen; yuansen du; Xiaoyang Guo; Wei Yin; Weiqiang Ren; Qian Zhang; Zhengqing Chen; Hao Wang

**ID:** 153911 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HlS4kqyNKV>) | [PDF](<https://openreview.net/pdf?id=HlS4kqyNKV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153911>)

Online 3D reconstruction requires estimating camera pose and scene geometry under strict causal and bounded\-memory constraints\. Existing methods often suffer from drift, jitter, or collapse on long sequences\. We trace these failures to a fundamental mismatch\. Streaming geometry is inherently temporally heterogeneous, with evidence ranging from short\-lived correspondences to persistent global scale\. However, current architectures impose uniform and pathological influence patterns\. For example, sliding windows enforce hard cutoffs, while ungated recurrence and causal attention cause cache saturation and spike\-like attention sinks\. To resolve this, we formalize geometric propagation as an \\emph\{evidence influence kernel\} and propose Horizon\-Stream, a long\-horizon Transformer that explicitly factorizes this kernel\. For the long\-range temporal factor, Geometric Linear Attention learns channel\-wise decay rates to enable bounded, multi\-timescale propagation of geometric evidence\. For the short\-range spatial factor, Geometric Local Attention with Spatiotemporal RoPE performs reliable 3D matching while suppressing attention sinks\. Finally, Metric Readout Tokens recover stable scale and rigid pose directly from the persistent geometric state\. Extensive experiments show that Horizon\-Stream, trained on only 48\-frame clips, generalizes stably to sequences exceeding \\\(10\{,\}000\\\) frames with constant memory and linear time, achieving state\-of\-the\-art streaming 3D reconstruction performance\.

## TurboVGGT: Fast Visual Geometry Reconstruction with Adaptive Alternating Attention

**Authors:** David Huang; Guile Wu; Chengjie Huang; Bingbing Liu; DONGFENG BAI

**ID:** 151960 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WY14vlL5DB>) | [PDF](<https://openreview.net/pdf?id=WY14vlL5DB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151960>)

Recent feed\-forward 3D reconstruction methods, such as visual geometry transformers, have substantially advanced the traditional per\-scene optimization paradigm by enabling effective multi\-view reconstruction in a single forward pass\. However, most existing methods struggle to achieve a balance between reconstruction quality and computational efficiency, which limits their scalability and efficiency\. Although some efficient visual geometry transformers have recently emerged, they typically use the same sparsity ratio across layers and frames and lack mechanisms to adaptively learn representative tokens to capture global relationships, leading to suboptimal performance\. In this work, we propose TurboVGGT, a novel approach that employs an efficient visual geometry transformer with adaptive alternating attention for fast multi\-view 3D reconstruction\. Specifically, TurboVGGT employs an end\-to\-end trainable framework with adaptive sparse global attention guided by adaptive sparsity selection to capture global relationships across frames and frame attention to aggregate local details within each frame\. In the adaptive sparse global attention, TurboVGGT adaptively learns representative tokens with varying sparsity levels for global geometry modeling, considering that token importance varies across frames, attention layers operate tokens at different levels of abstraction, and global dependencies rely on structurally informative regions\. Extensive experiments on multiple 3D reconstruction benchmarks demonstrate that TurboVGGT achieves fast multi\-view reconstruction while maintaining competitive reconstruction quality compared with state\-of\-the\-art methods\.

## Splatting the Invisible: Geometry and Appearance Scene Completion from Sparse Views

**Authors:** Wesley Khademi; Fuxin Li

**ID:** 149531 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pSNAnXldPD>) | [PDF](<https://openreview.net/pdf?id=pSNAnXldPD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149531>)

Novel view synthesis methods such as 3D Gaussian Splatting degrade under sparse\-view settings, suffering from an inability to extrapolate beyond observed regions\. To enable high fidelity reconstruction and rendering from sparse views, inpainting of sparsely observed areas and completion of occluded regions is required\. Unlike existing approaches that perform these tasks using 2D inpainting diffusion models or geometric\-only 3D completion models, we propose a fully 3D scene completion framework, called InvisiSplat, that performs geometry and appearance completion directly in 3D\. Our method consists of a Gaussian Splat VAE which learns a sparse point cloud latent space that predicts Gaussian Splat parameters from the latents, as well as a two\-step flow model that learns to generate samples conditioned on the point cloud latents, different from other approaches that use tokens without 3D coordinates\. Our flow model utilizes alternating local 3D attention and global attention, which balances the needs for precise local geometry and large\-scale spatial context\. Across several datasets, we demonstrate that our method produces 33% \- 82% higher fidelity 3D geometry over prior work while attaining competitive performance on appearance metrics when compared to existing approaches\.

## RefineAny3D: Depth Refinement as Semantic Alignment for Monocular 3D Detection

**Authors:** Zhihao Zhang; Gengwei Zhang; Tianlong Chen; Xiaoming Liu

**ID:** 154077 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GMa4R8shWk>) | [PDF](<https://openreview.net/pdf?id=GMa4R8shWk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154077>)

_Abstract unavailable from the accessible public sources._

## MindShape: Superquadric\-Constrained High\-Fidelity 3D Reconstruction from fMRI

**Authors:** Xiaoquan Shen; Ming Li; Jianxiong Gao; Jiaxuan Chen; Xiangru Huang; Yanwei Fu; Gang Pan

**ID:** 149071 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t5aqllPnlD>) | [PDF](<https://openreview.net/pdf?id=t5aqllPnlD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149071>)

_Abstract unavailable from the accessible public sources._

## Complexity Aware Continuous Level of Details for Gaussian Splatting

**Authors:** Radu Beche; Raoul de Charette

**ID:** 155902 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1yzzKS5UI1>) | [PDF](<https://openreview.net/pdf?id=1yzzKS5UI1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155902>)

_Abstract unavailable from the accessible public sources._

## PF\-SGS: Pose\-Free Streaming 3D Gaussian Splatting for Large\-Scale Scene Reconstruction

**Authors:** wenjie mu; ziniu liu; Tong Wu; Zhan Li; Chuanzhou su; XUANYI SHEN; Fan Lu; Junqiao Zhao; Tiantian Feng; Chen Ye; Guang Chen

**ID:** 152045 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VvTOafbWm6>) | [PDF](<https://openreview.net/pdf?id=VvTOafbWm6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152045>)

Extending feed\-forward 3D Gaussian Splatting \(3DGS\) to large\-scale scenes remains challenging\. Existing global reconstruction methods incur prohibitive computational overhead on long sequences; while streaming\-based online methods are more efficient, their inherent forgetting behavior and unidirectional dependence still limit reconstruction quality\. To address this, we propose PF\-SGS, a pose\-free streaming feed\-forward 3DGS for large\-scale scene reconstruction\. PF\-SGS leverages a persistent hidden state as scene memory to integrate streaming inputs frame\-by\-frame, progressively recovering scene geometry and camera poses in a self\-supervised manner\. At its core lie two targeted designs: Adaptive State Gating, which suppresses long\-term memory degradation by dynamically regulating update magnitudes to ensure stable state evolution; and Delayed Gaussian Modeling, which introduces bounded look\-ahead observations to compensate for insufficient local geometric constraints under streaming inputs, thereby improving the geometric consistency\. Experiments demonstrate that PF\-SGS processes sequences of varying lengths with linear time complexity, achieving quality comparable to pose\-prior\-based large\-scale reconstruction baselines\.

## DressWild: Feed\-Forward Pose\-Agnostic Garment Sewing Pattern Generation from In\-the\-Wild Images

**Authors:** Zeng Tao; Ying Jiang; Yunuo Chen; Tianyi Xie; Huamin Wang; Ying Nian Wu; Yin Yang; Chenfanfu Jiang

**ID:** 149257 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rhflLWVkqN>) | [PDF](<https://openreview.net/pdf?id=rhflLWVkqN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149257>)

Recent advances in garment pattern generation have shown promising progress\. However, existing feed\-forward methods struggle with diverse poses and viewpoints, while optimization\-based approaches are computationally expensive and difficult to scale\. This paper focuses on sewing pattern generation for garment modeling and fabrication applications that demand editable, separable, and simulation\-ready garments\. We propose DressWild, a novel feed\-forward pipeline that reconstructs physics\-consistent 2D sewing patterns and the corresponding 3D garments from a single in\-the\-wild image\. Given an input image, our method leverages vision–language models \(VLMs\) to normalize pose variations at the image level, then extract pose\-aware, 3D\-informed garment features\. These features are fused through a transformer\-based encoder and subsequently used to predict sewing pattern parameters, which can be directly applied to physical simulation, texture synthesis, and multi\-layer virtual try\-on\. Extensive experiments demonstrate that our approach robustly recovers diverse sewing patterns and the corresponding 3D garments from in\-the\-wild images without requiring multi\-view inputs or iterative optimization, offering an efficient and scalable solution for realistic garment simulation and animation\.

## StoSplat: Ray\-Aligned Stochastic Preconditioning for Feed\-Forward 3D Gaussian Splatting

**Authors:** Qibin Hu; Zhiheng Fu; Longguang Wang; Jisheng Dang; Hanyun Wang; Yulan Guo

**ID:** 155026 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=94W0JyIrl4>) | [PDF](<https://openreview.net/pdf?id=94W0JyIrl4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155026>)

Feed\-forward 3D Gaussian splatting enables single\-pass reconstruction from multi\-view images, but widely\-applied voxel\-aligned pipelines usually produce sharp and anisotropically ill\-conditioned Gaussian centers, leading to floaters and unstable geometry in sparse\-view settings\. To remedy this, we introduce StoSplat, a training\-time stochastic preconditioning framework that perturbs predicted Gaussian centers with annealed, ray\-aligned anisotropic noise\. This perturbation smooths the expected rendering objective in the geometric variable where instability arises, while leaving covariance, opacity, color, and the inference architecture unchanged\. StoSplat introduces negligible additional computation during training without any computational overhead during inference\. Experiments on widely used benchmarks including RealEstate10K, ScanNet, and ACID demonstrate that StoSplat achieves state\-of\-the\-art performance, while producing more stable geometry with fewer floaters and boundary artifacts, which demonstrates the effectiveness of our method in improving the performance of existing feed\-forward 3D reconstruction without architectural changes\.

## BlenderFORGE: Framework for Optimizing Reactive 3D\-Graphics Editing Ability of MLLMs

**Authors:** Zilin Guo; Tianrui ZHANG; Yi RONG; Yichen Liu; Yuxin Guo; Jingcheng Ni; Lewei Lu; Zehuan Wu; Dan Xu

**ID:** 151100 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=czK5BBdtMP>) | [PDF](<https://openreview.net/pdf?id=czK5BBdtMP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151100>)

Multimodal Large Language Models \(MLLMs\) have shown promise as interactive agents, yet precise, programmatic 3D graphics editing remains difficult to train because existing systems largely rely on closed\-source model APIs and lack deterministic, state\-verifiable execution environments\. We present BlenderFORGE, a trainable data\-environment\-optimization framework for open\-weight MLLM agents that edit explicit Blender scenes through Blender Python \(bpy\) code generation\. BlenderFORGE targets four fundamental state\-verifiable editing task families: object placement, shape\-key editing, lighting adjustment, and material modification\. It integrates three components: \(1\) a scalable perturbation\-based data generation pipeline built from curated assets and large\-scale 3D scene repositories; \(2\) an isolated Blender Sandbox for deterministic code execution, structured state export, and closed\-loop reward computation; and \(3\) a two\-stage training pipeline that uses offline teacher trajectories for cold\-start Supervised Fine\-Tuning \(SFT\) and sandbox\-computed rewards for multi\-turn tool\-agentic Reinforcement Learning \(AgentLoop\-RL\)\. Experiments across the four task families show that the resulting open\-weight Qwen3\-VL\-8B\-BlenderFORGE agent substantially improves over its base model and achieves competitive performance with several zero\-shot proprietary MLLM baselines\.

## IGGT4D: Streaming 4D Instance\-Grounded Geometry Transformer

**Authors:** Zhengyu Zou; Hao Li; kuixuan jiao; Liu\.Liu; TingyangXiao; xiaolin\.zhou; Fangzhou Hong; Zhizhong Su; Dingwen Zhang; Ziwei Liu

**ID:** 155215 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7Q59ZVBlfK>) | [PDF](<https://openreview.net/pdf?id=7Q59ZVBlfK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155215>)

Real\-world spatial intelligence requires agents to understand scenes from continuous video streams, where objects move, persist, disappear, and reappear over time\.  While recent spatial foundation models have enabled generalizable feed\-forward 3D reconstruction, most streaming methods remain geometry\-centric and lack temporally consistent object\-level understanding\.  Meanwhile, existing semantic reconstruction and 3D\-aware vision\-language methods largely rely on externally extracted 2D semantic cues or loosely coupled geometry inputs, limiting unified geometry\-instance learning in long dynamic scenes\.  In this paper, we propose IGGT4D, a streaming instance\-grounded geometry Transformer for online 4D scene understanding\.  IGGT4D processes video frames sequentially, reuses historical context through causal spatial\-temporal modeling, and incrementally updates a unified representation of camera motion, geometry, and object identity\.  This enables long\-sequence feed\-forward reconstruction with geometry\-instance consistency in dynamic environments\.  To address the lack of high\-quality 4D supervision, we further construct InsScene4D\-147K, a large\-scale dataset spanning real/synthetic and static/dynamic scenes, with RGB images, depth, poses, and temporally consistent instance masks generated by an automated geometry\-guided annotation pipeline\.  Experiments on 3D reconstruction, pose estimation, instance spatial tracking, and open\-vocabulary segmentation demonstrate that IGGT4D outperforms existing streaming baselines while maintaining scalable online inference for long dynamic sequences\.

## The Mask Is Not the Object: Volumetric Supervision for 3D Gaussian Segmentation

**Authors:** Jeonghwan Cho; Minsu Kim; Junyoung Hong; Seon Joo Kim

**ID:** 153386 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Lm87XRTCbZ>) | [PDF](<https://openreview.net/pdf?id=Lm87XRTCbZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153386>)

Existing 3D Gaussian Splatting \(3DGS\) segmentation methods produce accurate rendered masks yet often fail to select a complete set of object Gaussians: removing the predicted Gaussians leaves the rendered depth in the target region nearly unchanged\. We trace this gap to the contribution\-weighted supervision path of rendering\-based feature learning\. Because Gaussian geometry and opacity are pre\-optimized for RGB reconstruction, rendered\-feature losses deliver strong gradients only to high\-contribution Gaussians, leaving other Gaussians in the same object region weakly supervised and ultimately unselected\. We propose VODA, a plug\-and\-play supervision objective that addresses this bias\. After RGB optimization, Gaussians of the same object portion concentrate at similar depths along the camera ray\. A depth\-aware rasterizer exploits this property, grouping per\-pixel contributing Gaussians into depth\-coherent clusters and selecting the cluster that best explains each object pixel\. The rendered feature of the selected cluster is then applied as a target directly to every Gaussian within it, bypassing the contribution\-weighted gradient path\. A complementary pixel\-level loss further sharpens boundaries between adjacent objects\. To evaluate volumetric completeness, we introduce Removal\-3D and the Removal Depth Error \(RDE\), which measure whether removing the predicted Gaussians induces the expected depth change in 3D\. Across four rendering\-based baselines, VODA consistently improves volumetric segmentation on Removal\-3D while maintaining or improving standard performance on LERF and ScanNet\.

## Seeing Across Skies and Streets: Feedforward 3D Reconstruction from Satellite, Drone, and Ground Images

**Authors:** Qiwei Wang; Zhongyao Tuo; Xianghui Ze; Yujiao Shi

**ID:** 153642 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JoAwGwFb3o>) | [PDF](<https://openreview.net/pdf?id=JoAwGwFb3o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153642>)

Cross\-view localization classically asks: where does this ground image lie on the satellite tile? Existing methods are typically limited to 3\-DoF estimates\-\-\-an $\(x,y\)$ position and a yaw angle\-\-\-because nadir satellite imagery provides no direct cues for roll, pitch, or altitude, forcing a reliance on planar\-motion and zero\-tilt assumptions\. These assumptions break on real terrain with slopes, ramps, and tilted camera mounts\. To overcome this, we introduce a single UAV image as an intermediate viewpoint: it reveals the 3D structure invisible from nadir, supplies the cues for roll, pitch, and altitude that the satellite alone cannot provide, and needs only spatial overlap with the ground camera\-\-\-no known relative pose is required\. Building on this insight, we propose \*\*Cross3R\*\*, a flexible feed\-forward model that ingests a satellite tile together with a UAV image, a ground image, or both, and, in a single forward pass, recovers a cross\-view 3D point cloud, the 6\-DoF poses of every input camera, and the on\-tile $\(x,y\)$ position and yaw of each perspective camera\. For training and evaluation, we also construct \*\*CrossGeo\*\*, a 278K\-image tri\-view dataset spanning 85 scenes across every continent except Antarctica\. On CrossGeo, Cross3R consistently outperforms feed\-forward 3D baselines in point\-cloud reconstruction, 6\-DoF camera\-pose estimation, and cross\-view localization\. On KITTI, it outperforms dedicated cross\-view methods trained on KITTI on most metrics, despite having no KITTI training itself\.

## CodecSplat: Ultra\-Compact Latent Coding for Feed\-Forward 3D Gaussian Splatting

**Authors:** Pengpeng Yu; Runqing Jiang; Qi Zhang; Dingquan Li; Jing Wang; Yulan Guo

**ID:** 151528 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZzyjwkoqaX>) | [PDF](<https://openreview.net/pdf?id=ZzyjwkoqaX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151528>)

While feed\-forward 3D Gaussian splatting reconstructs renderable Gaussian primitives from sparse context views without per\-scene optimization, existing pipelines do not provide a compact scene representation for storage or transmission\. A natural solution is to apply existing 3DGS compression methods to the generated Gaussian primitives\. However, this approach operates on the final irregular 3D representation and is decoupled from the internal feature\-to\-Gaussian generation process, which limits compression efficiency\. To address this, we introduce \\emph\{CodecSplat\}, an ultra\-compact latent coding framework for feed\-forward 3D Gaussian splatting\. CodecSplat first encodes an intermediate 2D Gaussian\-generation feature into an entropy\-coded scene bitstream\. At the decoder, the latent feature is reconstructed and used to predict depth and Gaussian parameters, which are then mapped to 3D Gaussian primitives\. Note that, by integrating compression into the feed\-forward Gaussian generation pipeline, CodecSplat avoids inefficient compression over irregular 3D Gaussian primitives and allows the codec to exploit the structured intermediate feature representation\. We instantiate CodecSplat on a feed\-forward Gaussian splatting backbone with depth\-guided multi\-view feature refinement and a hierarchical learned feature codec\.  On DL3DV and RealEstate10K datasets, CodecSplat achieves 23\.56\-26\.36 dB and 24\.76\-27\.05 dB PSNR with only 20\.00\-107\.77 KiB and 3\.37\-12\.51 KiB per scene, respectively\. This is roughly one order of magnitude smaller than compressing feed\-forward generated Gaussian primitives, while preserving controllable rate\-\-distortion behavior\.

## Provable Pruning for Efficient 3D Gaussian Splatting via Coresets

**Authors:** Waseem Mousa; Alaa Maalouf

**ID:** 154669 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BuQHfat14R>) | [PDF](<https://openreview.net/pdf?id=BuQHfat14R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154669>)

_Abstract unavailable from the accessible public sources._

## Who Wrote This Paper? Autonomous Scientific Discovery for 3DGS Research

**Authors:** Seemandhar Jain; Manmohan Chandraker

**ID:** 149850 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mptCBNtiEN>) | [PDF](<https://openreview.net/pdf?id=mptCBNtiEN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149850>)

_Abstract unavailable from the accessible public sources._

## Less Decoder is More Encoder: Geometric Representation Learning from Novel View Synthesis

**Authors:** Keerthi Kaashyap; Dennis Anthony; Akshay Krishnan; Nhi Nguyen; Jeremy Collins; James Hays; Shreyas Kousik; Animesh Garg

**ID:** 152848 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PvARuIywdQ>) | [PDF](<https://openreview.net/pdf?id=PvARuIywdQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152848>)

_Abstract unavailable from the accessible public sources._

## EgoHMP: Achieving Precise Human Motion Prediction in 3D Scenes via Egocentric Cues

**Authors:** Xin Zhao; Pengzhan Zhou; Ziyi Li; Riheng Jia; Zhida Qin; Yu Liu

**ID:** 154301 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EizipenwYo>) | [PDF](<https://openreview.net/pdf?id=EizipenwYo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154301>)

_Abstract unavailable from the accessible public sources._

## Unified Panoramic Geometry Estimation via Multi\-View Foundation Models

**Authors:** Vukasin Bozic; Isidora Slavkovic; Dominik Narnhofer; Nando Metzger; Denis Rozumny; Konrad Schindler; Nikolai Kalischek

**ID:** 149348 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qjgSaycXfb>) | [PDF](<https://openreview.net/pdf?id=qjgSaycXfb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149348>)

_Abstract unavailable from the accessible public sources._

## Towards Self\-Supervised, Generalizable and Decomposable 4D Driving Scene Reconstruction

**Authors:** James Tu; Anqi Joyce Yang; Jingkang Wang; Sivabalan Manivasagam; Raquel Urtasun

**ID:** 150050 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l87rIPrFwm>) | [PDF](<https://openreview.net/pdf?id=l87rIPrFwm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150050>)

_Abstract unavailable from the accessible public sources._

## Generative Structure from Motion with Native 3D Diffusion

**Authors:** Haobin Duan; Binbin Huang; Mochu Xiang; Yiqun Zhao; Zibo Zhao; Yi Ma; Shenghua Gao

**ID:** 152786 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QL96jpgsPY>) | [PDF](<https://openreview.net/pdf?id=QL96jpgsPY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152786>)

_Abstract unavailable from the accessible public sources._

## Seeing Both the Forest and the Trees: Reusing Holistic 3D Priors for Part\-Decomposed Generation

**Authors:** Yiqun Zhao; Binbin Huang; Haobin Duan; Zibo Zhao; Shenghua Gao

**ID:** 153133 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NdxaPh23ii>) | [PDF](<https://openreview.net/pdf?id=NdxaPh23ii>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153133>)

_Abstract unavailable from the accessible public sources._

## C3VD\-DEFCOL: A Deformable Colonoscopy Dataset with Time\-Resolved 3D Ground Truth and Realistic Appearance

**Authors:** Ethan Luk; Mayank Golhar; Anthony Song; Raúl Iranzo; Victor M\. Batlle; Lalithkumar Seenivasan; JMM Montiel; Nicholas Durr

**ID:** 139182 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g3SVRBCoiA>) | [PDF](<https://openreview.net/pdf?id=g3SVRBCoiA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139182>)

3D reconstruction could improve colonoscopy by estimating mucosal coverage and alerting clinicians to missed regions during screening\. However, algorithm development is limited as no current datasets provide both a realistic in vivo appearance and dense, time\-resolved 3D ground truth, especially under non\-rigid deformation\. We present C3VD\-DEFCOL, a framework and dataset for evaluating deformable colonoscopy reconstruction with paired geometry and realistic texture\. Starting from C3VD/C3VDv2 colon meshes and camera trajectories, we generate controlled deformations of the colon surface, including peristaltic waves and centerline motion, and render fisheye colonoscopy videos with frame\-level depth, surface normals, optical flow, occlusion masks, camera poses, and time\-stamped 3D meshes\. We then use the rendered geometry, primarily depth, to condition an LTX\-2\.3\-based sim\-to\-real translation model that produces RGB clips with in vivo\-like mucosal color, texture, vasculature, and specular appearance while preserving the underlying 3D scene structure\. The resulting dataset contains 110 videos from 12 unique colon mesh geometries, with varying camera trajectories, appearances, and multiple deformation regimes, including three peristaltic severity levels\. We evaluate the generated videos using appearance realism, geometric consistency, and temporal consistency metrics, and use the paired ground truth to benchmark the downstream task of pose estimation in deformable 3D reconstruction\. Our experiments show how pose estimation error increases with increasing deformation severity, providing a controlled stress test that is not possible with existing in vivo datasets\. Overall, C3VD\-DEFCOL is designed as a reproducible, quantitative evaluation platform for testing deformable 3D reconstruction algorithms, with the goal of reducing the domain gap between synthetic datasets and in vivo colonoscopy\.

## One View Is Enough: In\-the\-Wild Monocular Pretraining for Novel View Generation

**Authors:** Adrien RAMANANA RAHARY; Nicolas Dufour; Patrick Perez; David Picard

**ID:** 151767 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YC0au39jWi>) | [PDF](<https://openreview.net/pdf?id=YC0au39jWi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151767>)

Monocular novel\-view synthesis has long required multi\-view image pairs for supervision, limiting training to a narrow set of purpose\-built datasets\. We propose in\-the\-wild monocular pretraining: a frozen depth estimator lifts each source image into 3D and reprojects under sampled poses to yield pseudo\-target views; masked losses restrict supervision to valid regions and an adversarial objective covers disoccluded areas\. Scaled to 30 million uncurated images, this produces OVIE, requiring only a source image and target pose at inference\. Prior work trains without multi\-view data but needs a depth estimator at inference, or drops this dependency but requires multi\-view training pairs; OVIE is the first to require neither\. Without multi\-view supervision, OVIE rivals in\-domain baselines on RealEstate10K and surpasses all on DL3DV; brief multi\-view fine\-tuning outperforms all geometry\-free methods on their training domain\. At 116 FPS, it is over 600× faster than the fastest baseline\. Code and models will be open\-sourced\.

## $\\alpha$Depth: Learning Single\-Pass Soft Boundary Decomposition for Stereo Conversion

**Authors:** Xiang Zhang; Yang Zhang; Lukas Mehl; Karlis M Briedis; Markus Gross; Christopher Schroers

**ID:** 154295 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EmsqCfKK01>) | [PDF](<https://openreview.net/pdf?id=EmsqCfKK01>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154295>)

Accurately modeling soft boundaries, e\.g\., hair and defocus blur, is a fundamental challenge in stereo conversion due to the ambiguous blending of foreground and background\. Existing depth models primarily predict single\-layer depth, leading to ambiguity in depth correspondence at soft boundaries\. While matting techniques can capture opacity for layered modeling, they often struggle in complex scenes with multiple targets and usually require user intervention\. This paper introduces $\\alpha$Depth, a layered representation that decomposes soft boundaries for high\-fidelity stereo conversion\. Specifically, we first resolve mixed color and depth ambiguity by estimating layered color and depth values at soft boundaries\. Considering complex multi\-target scenes, we design a Circular Alpha Representation \(CAR\) that shifts the paradigm from global target extraction to local boundary decomposition\. Unlike prior matting methods restricted to a single foreground/background, CAR enables efficient scene\-level inference without manual guidance\. Extensive evaluations demonstrate that $\\alpha$Depth achieves state\-of\-the\-art performance in stereo conversion, eliminating background bleeding and structural distortions at soft boundaries\.

## Residual\-Autoregressive Context for 3D Gaussian Splatting Compression

**Authors:** Wenqing Wang; Huimin Zeng; Yun Fu

**ID:** 155263 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=70jmXdhtUF>) | [PDF](<https://openreview.net/pdf?id=70jmXdhtUF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155263>)

3D Gaussian Splatting \(3DGS\) has emerged as a promising method that enables fast and high\-quality novel\-view rendering\. However, its large parameter size remains a bottleneck for storage and transmission\. We propose \*RacerGS\*, a compact 3DGS compression framework that achieves scene reconstruction at significantly reduced storage sizes with preserved fidelity\. To obtain compact and spatially coherent features, we design a hash projection model that projects the anchor hash encodings into compact context features\. Additionally, we introduce a FiLM\-modulated autoregressive GRU context model that utilizes causal dependencies among anchor feature groups and uses recurrent hidden states to refine entropy\-model parameters, improving bitrate efficiency\. Furthermore, we adaptively entropy\-code quantized residuals of anchor attributes around their context\-predicted means, reducing symbol entropy by leveraging spatial consistency\. Overall, \*RacerGS\* achieves more than \*\*$\\mathbf\{150\}\\boldsymbol\{\\times\}$\*\* compression over vanilla 3DGS and \*\*$\\mathbf\{28\}\\boldsymbol\{\\times\}$\*\* over Scaffold\-GS, while providing comparable rendering quality\. Extensive experiments across five datasets demonstrate our superiority over prior 3DGS compression methods in both storage reduction and rate\-distortion performance\.

## TrackCraft3R: Repurposing Video Diffusion Transformers for Dense 3D Tracking

**Authors:** Jisu Nam; Jahyeok Koo; Soowon Son; Jaewoo Jung; Honggyu An; Junhwa Hur; Seungryong Kim

**ID:** 155634\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155634

[Paper](<https://openreview.net/forum?id=46qtUc033H>) | [PDF](<https://openreview.net/pdf?id=46qtUc033H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155634>)

Dense 3D tracking from monocular video is fundamental to dynamic scene understanding\. While recent 3D foundation models provide reliable per\-frame geometry, recovering object motion in this geometry remains challenging and benefits from strong motion priors learned from real\-world videos\. Existing 3D trackers either follow iterative paradigms trained from scratch on synthetic data or fine\-tune 3D reconstruction models learned from static multi\-view images, both lacking real\-world motion priors\. Pre\-trained video diffusion transformers \(video DiTs\) offer rich spatio\-temporal priors from internet\-scale videos, making them a promising foundation for 3D tracking\. However, their frame\-anchored formulation, which generates each frame's content, is fundamentally mismatched with reference\-anchored dense 3D tracking, which must follow the same physical points from a reference frame across time\. We present TrackCraft3R, the first method to repurpose a video DiT as a feed\-forward dense 3D tracker\. Given a monocular video and its frame\-anchored reconstruction pointmap, TrackCraft3R predicts a reference\-anchored tracking pointmap that follows every pixel of the first frame across time in a single forward pass, along with its visibility\. We achieve this through two designs: \(i\) a dual\-latent representation that uses per\-frame geometry latents and reference\-anchored track latents as dense queries, and \(ii\) temporal RoPE alignment, which specifies the target timestamp of each track latent\. Together, these designs convert the per\-frame generative paradigm of video DiTs into a reference\-anchored tracking formulation with LoRA fine\-tuning\. TrackCraft3R achieves state\-of\-the\-art performance on standard sparse and dense 3D tracking benchmarks, while running 1\.3x faster and using 4\.6x less peak memory than the strongest prior method\. We further demonstrate robustness to large motions and long videos\. Our code and weights will be publicly released\.

## Split Then Select: Moment\-Preserving Density Control for Generalized Primitive Splatting

**Authors:** Yangkai Lin; Jiehong Lin; Kui Jia

**ID:** 155773\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155773

[Paper](<https://openreview.net/forum?id=31sxeY9QjS>) | [PDF](<https://openreview.net/pdf?id=31sxeY9QjS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155773>)

Primitive splatting has become a powerful representation for efficient differentiable rendering, but existing density\-control strategies remain largely heuristic and often suffer from uncontrolled primitive growth\. In this work, we present \\textbf\{Moment\-Preserving Density Control \(MPDC\)\}, a general theoretical framework for densification in primitive splatting\. Unlike conventional density\-control strategies that \\emph\{select first and split later\}, MPDC follows a \\emph\{split\-then\-select\} paradigm\. Our key insight is that a principled split should first preserve the current rendering, rather than immediately perturb the image\. By matching local moments, MPDC decomposes a primitive into multiple offspring while keeping the rendered output, and hence the loss, unchanged up to higher\-order error\. Although such a split does not directly reduce the loss, it changes the parameter space: a saddle point in the original parameterization may no longer remain a saddle point after splitting\. This provides a distinct saddle\-escaping mechanism from prior approaches that move primitives along negative\-curvature directions\. Building on this view, we derive closed\-form splitting rules for different primitive parameterizations and then select only primitives whose moment\-preserving splits reduce an upper bound of the loss through a splitting\-matrix criterion\. Experiments on three diverse primitive splatting methods show that MPDC substantially reduces primitive counts without sacrificing rendering quality, while improving memory efficiency and rendering speed\. Code will be released upon publication\.

## Mesh BDF: Barycentric Dominance Field for 3D Native Mesh Generation

**Authors:** Gaochao Song; Haohan Weng; Luo Zhang; Zibo Zhao; Shenghua Gao

**ID:** 154136\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154136

[Paper](<https://openreview.net/forum?id=Fy4JoneGmz>) | [PDF](<https://openreview.net/pdf?id=Fy4JoneGmz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154136>)

Autoregressive \(AR\) modeling has recently achieved remarkable progress in native 3D mesh generation, largely due to its natural ability to handle variable\-length, discrete data structures\. However, the inherent constraints of the AR paradigm severely restrict the generated meshes, leading to limited face counts, bounded vertex resolutions, and difficulties in supporting textures\. To overcome these bottlenecks, we propose the Barycentric Dominance Field \(BDF\), a continuous representation defined on triangular mesh surfaces that elegantly encodes vertex topological connectivity\. BDF bridges the fundamental gap between discrete mesh topology and continuous diffusion\-based generative modeling by transforming connectivity into a continuous surface signal\. As an intrinsic mesh property, BDF shares strong similarities with texture maps, enabling its seamless integration into existing 3D diffusion pipelines without requiring architectural modifications\. Extensive experiments demonstrate that BDF empowers diffusion models to generate native meshes with significantly higher quality, greater scalability, and stronger robustness compared to state\-of\-the\-art autoregressive methods\.

## Align3D\-AD: Cross\-Modal Feature Alignment and Dual\-Prompt Learning for Zero\-shot 3D Anomaly Detection

**Authors:** Letian Bai; Xuanming Cao; Juan Du; Chengyu Tao

**ID:** 152960\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152960

[Paper](<https://openreview.net/forum?id=P5rO538Rjx>) | [PDF](<https://openreview.net/pdf?id=P5rO538Rjx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152960>)

Zero\-shot 3D anomaly detection aims to identify anomalies without access to training data from target categories\.  However, existing methods mainly rely on projecting 3D observations into multi\-view representations that primarily capture geometric cues rather than realistic visual semantics and process them with vision encoders pretrained on RGB data, leading to a significant domain gap between the encoder and the projected representations\.  To address this issue, we propose Align3D\-AD, a unified two\-stage framework that leverages the RGB modality from auxiliary categories as cross\-modal guidance for zero\-shot 3D anomaly detection\.  First, we introduce a cross\-modal feature alignment paradigm that maps rendering features into the RGB semantic space\.  Unlike prior works that implicitly rely on pretrained encoders, our method enables direct semantic transfer from RGB observations\.  A semantic consistency reweighting strategy is further introduced to refine feature alignment by reweighting local regions according to holistic semantic consistency\. Second, we propose a modality\-aware prompt learning framework with dual\-prompt contrastive alignment\.  By assigning independent prompts to RGB\-aligned and rendering features, our method captures complementary semantics across modalities, while the contrastive alignment further enhances prompt representations to improve discriminability\. Extensive experiments on MVTec3D\-AD, Eyecandies, and Real3D\-AD demonstrate that Align3D\-AD consistently outperforms existing zero\-shot methods under both one\-vs\-rest and cross\-dataset settings, highlighting its generalization capability and robustness\. Code and the dataset will be made available once our paper is accepted\.

## TTB: Test\-time MLP Baking for Efficient Rendering of Decoder\-only View Synthesis Models

**Authors:** Chin\-Yang Lin; Ryo Hachiuma; Jaesung Choe; Min\-Hung Chen; Frank Wang; Yen\-Yu Lin; Wei\-Chen Chiu; Yu\-Lun Liu; Cheng Sun

**ID:** 154935\-\-4 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154935

[Paper](<https://openreview.net/forum?id=9pt0ng1IDx>) | [PDF](<https://openreview.net/pdf?id=9pt0ng1IDx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154935>)

Decoder\-only Large View Synthesis Models \(LVSMs\) with KV\-cache have recently achieved state\-of\-the\-art quality by regressing novel views from neural networks without reconstructing 3D geometry, while Test\-Time Training \(TTT\) layers can be introduced to save computation, but sacrifice quality\. We propose \*\*T\*\*est\-\*\*T\*\*ime \*\*B\*\*aking \(\*\*TTB\*\*\), a strategy that learns to bake global scene information from cross\-view attention into a lightweight MLP, enabling fast and high\-fidelity novel\-view decoding\. The first key is to repurpose the fast\-weight MLP of TTT to learn the cross\-view attention mapping explicitly from its input\-output pairs, rather than replacing attention entirely, achieving the same rendering efficiency as TTT while delivering substantially higher quality\. The second key addresses a modality misalignment between context prefilling and novel\-view rendering: we disentangle context tokens into camera\-only context rendering tokens to serve as TTB input, and context ground\-truth tokens with image content to serve as the TTB mapping target, ensuring the baked MLPs are relieved of the modality generalization challenge between context and novel\-view processing\. Our method achieves up to \*\*23x\*\* rendering speedup with quality on par with the state\-of\-the\-art across several benchmarks\.

## SynGS: Synergistic Continual Learning and Change Detection with Gaussian Splatting

**Authors:** Rui Huang; Haojie Tao; Sen Gao; Qing Guo

**ID:** 153370\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153370

[Paper](<https://openreview.net/forum?id=Ls29PxSARF>) | [PDF](<https://openreview.net/pdf?id=Ls29PxSARF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153370>)

3D Gaussian Splatting enables high\-fidelity, real\-time novel view synthesis, yet adapting it to dynamic, evolving scenes remains challenging\. Existing methods rely on fixed static\-dynamic partitioning, which suffers from persistent partitioning errors and cannot adapt during optimization\. To tackle this issue, we introduce SynGS, a unified 3D Gaussian framework for continual scene updating and multi\-view change detection\. We cast static\-dynamic decomposition as a learnable task, jointly optimizing per\-Gaussian change probabilities and scene representations for iterative refinement\. We further propose a change\-guided update strategy that modulates illumination\-aware photometric corrections via learned probabilities, separating transient appearance variations from authentic scene changes\. Projecting Gaussian\-level probabilities to the image plane yields 3D\-consistent change masks, enabling mutual optimization between reconstruction and change localization\. An illumination\-decoupled refinement step further improves mask quality\. Evaluations on standard benchmarks show that SynGS outperforms baseline methods on scene update and change detection tasks, while fully retaining the real\-time rendering capability of 3D Gaussian Splatting\. Code will be released upon acceptance\.

## RayTun3R: Online Camera Adaptation in 3D Foundation Models

**Authors:** Daniil Sinitsyn; Nikita Araslanov; Daniel Cremers

**ID:** 151667\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151667

[Paper](<https://openreview.net/forum?id=YusfyNZLcm>) | [PDF](<https://openreview.net/pdf?id=YusfyNZLcm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151667>)

Recent 3D foundation models, such as DUSt3R, MASt3R, VGGT, $\\pi^3$, and Depth Anything 3, provide strong feed\-forward depth and pose estimates on pinhole imagery, but degrade sharply under fisheye camera geometry\. We show that this failure is partly caused by a pinhole camera bias in the positional encodings of pretrained 3D foundation models, and propose RayTun3R, a lightweight camera adaptation approach\. It keeps the pretrained network fixed and adapts only lightweight components tied to token position and camera geometry\. RayTun3R learns parameter\-efficient residual corrections to absolute and rotary positional encodings, together with parameter\-free tokenization and corrections to prediction\-grid coordinates that remove residual pinhole assumptions\. The resulting adapter contains only 10,752 trainable parameters and can be learned from a short temporal segment using geometric losses\. Once adapted, RayTun3R transfers effectively to the remaining frames of the sequence without incurring additional runtime costs\. Across diverse fisheye datasets with fields of view from $110^\\circ$ to $200^\\circ$, our adapter reduces rotation error by $2\-12\\times$ relative to the unadapted model, outperforms LoRA while using $\\sim14\\times$ fewer trainable parameters, improves pose over adaptation\-free baselines while avoiding their multi\-view inference cost, and remains competitive on depth accuracy\.

## GenRec: Knowing Where to Reconstruct and Where to Generate

**Authors:** Ata Çelen; Jaewoo Jung; Federico Tombari; Marc Pollefeys; Sunghwan Hong; Michael Niemeyer; Daniel Barath

**ID:** 149818\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149818

[Paper](<https://openreview.net/forum?id=n68heFQnNa>) | [PDF](<https://openreview.net/pdf?id=n68heFQnNa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149818>)

Generative novel view synthesis from sparse input images is rarely all reconstruction or all generation: pixels visible in some source view have a unique correct value modulated only by view\-dependent shading, while pixels in disocclusions or beyond the captured volume admit a distribution of plausible completions\. Existing generative novel\-view\-synthesis methods conflate these regimes under a single uniform loss, blurring the line between geometric fidelity and creative hallucinations even when scene geometry is injected through warped point clouds or projected depth\. We introduce GenRec, a multi\-view flow matching model that builds the reconstruction\-\-generation split directly into its architecture, supervision, and gradient flow\. Guided by an observation mask derived from the source cameras and a monocular depth estimator, a flow matching backbone jointly denoises RGB and scene\-coordinate maps across all target views, while a pixel\-space refinement stage restores high\-frequency detail on observed pixels; the same mask gates supervision so regression signals do not contaminate the generative prior\. Across RealEstate10K, DL3DV\-10K, and Mip\-NeRF\~360, in both single\-view extrapolation and two\-view interpolation, GenRec attains the best reconstruction fidelity in observed regions while also surpassing purely generative baselines on perceptual quality in unobserved ones, showing the effectiveness of our approach\. The source code and trained models will be made public\.

## PhotoFlow: Agentic 3D Virtual Photography Missions

**Authors:** Jiarui Guo; Haojia Wei; Yiming Zhang; Yifei Liu; Yuning Gong; Hongjie Zhang; Xue Yang; Zhihang Zhong

**ID:** 149703\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149703

[Paper](<https://openreview.net/forum?id=o5fDea7QFO>) | [PDF](<https://openreview.net/pdf?id=o5fDea7QFO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149703>)

Virtual photography asks an agent to enter a prepared 3D scene with no preselected camera pose or reference image, infer a suitable shot from scene information and a language intent, choose executable camera parameters, and render the final photograph\. Recent progress in vision\-language models makes this kind of spatial agent increasingly plausible, but the task stresses two capabilities that remain hard to evaluate together: complex 3D spatial understanding and abstract aesthetic judgment\. We introduce PhotoFlow, a Director\-Reviewer\-Reflector agent for closed\-loop camera search\. The Director builds a soft photographic blueprint and proposes diverse candidate cameras; the Reviewer combines rule checks, visual critique, and pairwise incumbent selection; and the Reflector converts failures into region memory, dead\-zone suppression, and high\-explore relocation\. We also introduce VPhotoBench, a benchmark of 47 open\-license Blender scenes and 141 language\-conditioned photography missions spanning subject placement, relational composition, and atmosphere/style\. On held\-out experiments,PhotoFlow achieves the strongest external quality\-alignment composite and success rate among one\-shot prediction, single\-chain reflection, anchor\-bank selection, and random search under a six\-round rendering budget\. To our knowledge, this is the first work to make language\-conditioned virtual photography in 3D design or game engines \(e\.g\., Blender\) an executable agent task, and our results show that an LLM\-centered spatial agent can already produce strong photographs in a setting designed to challenge both 3D reasoning and aesthetic choice\.

## Magnifying What Matters: Attention\-Guided Adaptive Rendering for Visual Text Comprehension

**Authors:** Shenglai Zeng; Qirui Wang; Kai Guo; Xinnan Dai; Xianxuan Long; Hui Liu

**ID:** 154549\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154549

[Paper](<https://openreview.net/forum?id=Ck587Z7t03>) | [PDF](<https://openreview.net/pdf?id=Ck587Z7t03>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154549>)

Visual Text Comprehension \(VTC\) renders text into images for a vision\-language model \(VLM\) to read, sidestepping LLM context\-window limits and powering applications from long\-page OCR to multi\-page memory QA\. Yet existing VTC pipelines treat rendering and layout as a fixed, content\-agnostic preprocessing step, and offer little mechanistic understanding of how VLMs internally process visualized text\. Through a focused empirical study on VTC QA tasks, we find that VLMs exhibit a localization\-without\-utilization regime: evidence\-localizing attention emerges sharply in the middle\-to\-late layers and is largely decoupled from answer correctness, yet simply enlarging the localized spans on the rendered page recovers a large fraction of the failures\. Building on these observations, we propose AGAR \(Attention\-Guided Adaptive Rendering\), a training\-free, model\-agnostic method that leverages a VLM's own middle\-to\-late layer attention to identify the top\-K important visual patches, maps them back to word spans, and re\-renders the page with those spans enlarged before re\-inferring the answer\. Extensive experiments across nine VTC benchmarks \(short\-form, long\-context, and multi\-page memory QA\) and four VLM backbones show that AGAR \(i\) consistently improves off\-the\-shelf VLMs as a plug\-and\-play enhancement, \(ii\) composes with VLM post\-training to yield further gains, and \(iii\) remains robust under both visual\- and text\-side input degradation\.

## VolFill: Single\-View Amodal 3D Scene Reconstruction with Volumetric Flow Matching

**Authors:** Tuan Ngo; Chuang Gan; Evangelos Kalogerakis

**ID:** 151919\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151919

[Paper](<https://openreview.net/forum?id=WvIoVDOETy>) | [PDF](<https://openreview.net/pdf?id=WvIoVDOETy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151919>)

Reconstructing the complete geometry of a scene from a single RGB image remains challenging—especially when inferring hidden structures where visual evidence is incomplete\. We introduce VolFill, a generative framework that predicts the 3D structure of the complete scene rather than relying on traditional pixel\-aligned regression\. Our method utilizes a hybrid 3D VAE to compress sparse truncated unsigned distance function grids  into a compact latent space, paired with a latent Diffusion Transformer that denoises this representation to recover the complete scene\. We condition the generation on geometry foundation models, leveraging rich spatial priors for robust reasoning\. Unlike existing methods limited by per\-ray constraints or unstructured point\-cloud queries, VolFill provides a structured representation that supports direct surface extraction and occupancy queries at scale\. Extensive experiments on the 3D\-FRONT and NRGBD datasets demonstrate that our approach significantly outperforms current baselines, providing a robust foundation for holistic spatial understanding\.

## PLANING: A Loosely Coupled Triangle\-Gaussian Framework for Streaming 3D Reconstruction

**Authors:** Changjian Jiang; Kerui Ren; Xudong Li; Kaiwen Song; Guanghao Li; Linning Xu; Tao Lu; Junting Dong; Yu Zhang; Yu Feng; Bo Dai; Mulin Yu

**ID:** 150984\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150984

[Paper](<https://openreview.net/forum?id=dmRkqf6pOG>) | [PDF](<https://openreview.net/pdf?id=dmRkqf6pOG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150984>)

Streaming reconstruction from monocular image sequences remains challenging, as existing methods typically favor either high\-quality rendering or accurate geometry, but rarely both\. We present PLANING, an efficient on\-the\-fly reconstruction framework built on a hybrid representation that loosely couples explicit geometric primitives with neural Gaussians, enabling geometry and appearance to be modeled in a decoupled manner\. This decoupling supports an online initialization and optimization strategy that separates geometry and appearance updates, yielding stable streaming reconstruction with substantially reduced structural redundancy\. Despite operating online, PLANING improves dense mesh Chamfer\-L2 by 18\.52% over the offline baseline PGSR, surpasses the streaming baseline ARTDECO by 1\.31 dB in PSNR, and reconstructs ScanNetV2 scenes in under 100 seconds, over 5x faster than offline 2D Gaussian Splatting while matching per\-scene optimization quality\. Beyond reconstruction quality, the structural clarity and computational efficiency of PLANING make it well suited for a broad range of downstream applications, such as enabling large\-scale scene modeling and simulation\-ready environments for embodied AI\.

## FRUC: Feedforward Dynamic Scene Reconstruction from Uncalibrated Collaborative Driving Views

**Authors:** Yihang Tao; Yu Guo; Zhengru Fang; Haonan An; Yuguang Fang

**ID:** 150220\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150220

[Paper](<https://openreview.net/forum?id=jruosxypbz>) | [PDF](<https://openreview.net/pdf?id=jruosxypbz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150220>)

We present FRUC, a feed\-forward 3D Gaussian splatting framework for dynamic scene reconstruction from uncalibrated collaborative driving views\. Existing multi\-agent reconstruction frameworks are often hindered by rigid prerequisites, demanding precise spatial calibration and slow per\-scene optimization\. In this paper, we rethink this task by conceptualizing a distributed multi\-vehicle network as a spatio\-temporally unstructured ego\-centric multi\-camera system, where the core challenge lies in enhancing ego\-centric occluded geometry through collaboration without degrading the ego's accurately observed visible geometry, while preserving reconstruction efficiency\. For efficient reconstruction, FRUC is built upon a visual grounded geometric Transformer backbone to enable one\-shot, calibration\-free inference from a flexible number of multi\-vehicle views\. To achieve non\-destructive geometric supplementation under uncalibrated cross\-agent misalignment, FRUC first introduces an ego\-centric causal occlusion field that explicitly derives occlusion evolution as latent priors by modeling agent\-wise spatio\-temporal correlations\. Guided by these occlusion priors, it further formulates cross\-agent integration as a deterministic residual denoising process via zero\-initialized injection, turning challenging cross\-agent fusion into bounded residual learning for robust collaborative blind\-spot completion\. Through extensive evaluations on the real\-world V2XReal and UrbanIng\-V2X datasets, FRUC is shown to be a new state\-of\-the\-art for the scene reconstruction of dynamic collaborative driving environments, significantly outperforming existing methods in both rendering quality and efficiency\.

## ArtCrafter: Feed\-Forward Generation of Articulated 3D Object with Analytic Joint Derivation

**Authors:** Minh Tu; Quang\-Binh Nguyen; Khoi Nguyen

**ID:** 151536\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151536

[Paper](<https://openreview.net/forum?id=ZwxUmdqiMF>) | [PDF](<https://openreview.net/pdf?id=ZwxUmdqiMF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151536>)

Articulated 3D assets are essential for robot simulation, yet generating them from casual images remains unsolved\. Existing approaches either predict URDF parameters via learned regression or language model inference \-\- both requiring articulation supervision and producing joints that may be geometrically inconsistent with the generated meshes \-\- or reconstruct from dense calibrated multi\-view captures, limiting scalability\. We present \\textbf\{ArtCrafter\}, a feed\-forward generative model that takes two images of an articulated object \-\- one at rest, one fully open \-\- and produces $2N\+1$ part\-level meshes together with a physics\-executable URDF in a single forward pass\. Inspired by Slot Attention, we structure the denoising process around a $1\+2N$ slot layout whose slots, forced to jointly explain two articulation states, naturally bind to kinematic parts\. \\textbf\{TripletAttention\} enforces cross\-state geometric consistency between each paired rest/open slot anchored through a shared base slot, and a repulsion loss $\\mathcal\{L\}\_\{\\mathrm\{rep\}\}$ operating on decoded point clouds ensures inter\-part disjointness throughout denoising\. Because paired meshes are geometrically consistent by construction, URDF joint parameters \-\- type, axis, origin, and range \-\- are derived \\emph\{analytically\} from the rigid transform between each pair, requiring no learned articulation head, no language model, and no per\-instance optimization\. Experiments on URDF\-Anything\+ demonstrate consistent improvements over retrieval\-based and generative baselines across part\-level geometry and all four articulation metrics\. ArtCrafter demonstrates a clean decomposition: a diffusion model handles geometry, and geometry handles URDF\.

## SceneScaffold: Active Scene\-State Construction for Unified 3D Scene Understanding

**Authors:** Xiangqi Li; Libo Huang; Jiarui Zhao; Weilun Feng; Chuanguang Yang; Zhulin An; Yongjun Xu

**ID:** 154773\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154773

[Paper](<https://openreview.net/forum?id=B3wsHZckwI>) | [PDF](<https://openreview.net/pdf?id=B3wsHZckwI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154773>)

_Abstract unavailable from the accessible public sources._

## Feedforward Novel View Synthesis for Heterogeneous Cameras

**Authors:** Meng Wei; Cheng Zhang; Boying Li; Yihang Chen; Jianmin Zheng; Hamid Rezatofighi; Jianfei Cai

**ID:** 149287 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rQBdZ03odN>) | [PDF](<https://openreview.net/pdf?id=rQBdZ03odN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149287>)

Feed\-forward novel view synthesis has recently shown promising results from sparse posed images, but most existing methods assume that context and target views share a fixed camera family\. This homogeneous\-camera assumption breaks in practical multi\-sensor systems, where perspective, fisheye, and panoramic cameras may coexist and where the target projection may be unseen during training\. We study feed\-forward NVS across heterogeneous central cameras and identify a key ambiguity introduced by tokenization: a visual token aggregates a projection\-dependent bundle of pixel rays, while existing camera encodings mainly expose absolute rays or token\-center relations\. To address this, we combine token\-center relative Camera Positional Encodings and proposed local raymaps, a token\-level representation that explicitly describes the intra\-patch ray distribution summarized by each token\. We further propose projection\-aware 2D RoPE, which replaces raw image\-grid coordinates with ray\-induced angular coordinates so that relative positional reasoning is aligned across camera projections\. Together, these components treat diverse cameras as calibrated samplings of a shared ray space rather than separate visual domains\. On ScanNet\+\+ with heterogeneous\-camera system, our method improves over camera\-conditioned baselines under mixed\-camera evaluation and demonstrates zero\-shot generalization to panoramic views\.

## UltraVoxelGS: Voxel\-First Feed\-Forward Gaussian Splatting for 3D Ultrasound Reconstruction

**Authors:** Yue Wang; Haoxin Chen; Xiaoqing Guo

**ID:** 153643 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jo1hZK6YQ8>) | [PDF](<https://openreview.net/pdf?id=Jo1hZK6YQ8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153643>)

We present UltraVoxelGS, a 3D ultrasound reconstruction method that achieves both fast reconstruction and physically faithful rendering, bringing live spatial feedback during 2D ultrasound scanning within reach\. This is made possible by a feed\-forward design that predicts a complete Gaussian scene representation from posed ultrasound images directly, entirely bypassing the per\-scene optimization bottleneck that has confined prior methods to offline use\. Realizing such feed\-forward prediction in this setting is non\-trivial: unlike natural images, ultrasound slices share at most one\-dimensional intersections and exhibit view\-dependent appearance due to acoustic propagation and attenuation, violating the dense overlap and photometric consistency assumed by existing feed\-forward Gaussian methods\. To achieve fast reconstruction, we introduce a feed\-forward voxel\-to\-Gaussian pass that decouples representation size from input count by lifting posed slices into a fixed\-size voxel support and predicting Gaussian parameters directly\. For faithful rendering, we propose an ultrasound\-aware appearance rendering strategy that factorizes reflection from cumulative attenuation during training and exploits appearance continuity among spatially adjacent slices for efficient Render\-time Appearance Adaptation\. On both real\-world and simulated datasets, UltraVoxelGS achieves the best PSNR/SSIM compared with per\-scene optimization baselines, while reducing inference from 10\-\-20 minutes to approximately 10 seconds, over 60× faster, and scaling to sequences exceeding 1,000 frames\.

## Direct Conditional Parameterization for N\-Dimensional Splatting

**Authors:** Zhongpai Gao; Benjamin Planche; Van N Nguyen; Meng Zheng; Anwesa Choudhuri; Arun Innanje; Terrence Chen; Ziyan Wu

**ID:** 155500 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=57CdXoL0gj>) | [PDF](<https://openreview.net/pdf?id=57CdXoL0gj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155500>)

N\-dimensional splatting extends 3D Gaussian Splatting with conditioning variables such as view direction and time to model view\-dependent and dynamic effects\. Each primitive is lifted into a joint distribution over 3D position and conditioning variables, and at render time is conditionally sliced at the query to recover a 3D primitive whose mean, opacity, and covariance vary continuously with view or time\. N\-DGS \(covering 6DGS and 7DGS\) and UBS together represent the leading N\-dimensional splatting formulations across Gaussian and Beta kernels, but share the same conditional\-slicing step: all three effects are derived from the joint covariance matrix per primitive in every forward pass, requiring matrix inversions and regression\-matrix multiplications that scale with primitive count\. The conditional\-slicing step is kernel\-agnostic, so a single improvement carries across families\. We introduce direct conditional parameterization, replacing the covariance\-derived form with explicit per\-effect parameters: a Cholesky precision factor for opacity and a displacement matrix with learnable per\-dimension coupling for position\. Applied to both kernels, the parameterization yields dGS \(Gaussian\) and dBS \(Beta\)\. Across five static and dynamic benchmarks, dGS and dBS match or exceed their covariance\-derived counterparts on quality \(up to \+1\.26 dB in the main MCMC evaluation\) while running 6\.9\-7\.7x faster at the slicing step and up to 2\.66x faster end\-to\-end rendering\. Direct conditioning is a kernel\-agnostic drop\-in replacement for covariance\-derived conditioning in N\-dimensional splatting\.

## 3D Gaussian Splatting within Self\-Learned Neural View\-Dependent Color Fields

**Authors:** Yixiao Yang; Yu\-Shen Liu; Zhizhong Han

**ID:** 156149 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=00MXC2OlRy>) | [PDF](<https://openreview.net/pdf?id=00MXC2OlRy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156149>)

3D Gaussian Splatting \(3DGS\) has become a vital tool in novel view synthesis\. 3D Gaussian functions with attributes like color, opacity, and scale are stacked together to explicitly model a radiance field\. However, discrete 3D Gaussians usually produce poor depth with few geometry details but lots of floaters, which makes modeling smooth radiance fields remain a challenge\. To address this issue, we propose to learn a radiance field within a continuous view\-dependent color field parameterized by neural networks\. With the continuous constraints in color, the bias on low\-frequency signals of neural networks highly encourages the geometry to contribute to high\-frequency color variations on images, but not solely relying on the color attribute itself\. Moreover, we impose a constraint to improve the Lipschitz continuity of the neural color field, making large changes of each Gaussian's color also match with large changes of its position in terms of a ratio\. To this end, we additionally introduce novel self\-learning strategies to learn neural view\-dependent color fields without any external knowledge or priors, aiming for better generalization\. Our numerical and visual comparisons on widely used benchmarks justify our idea and show better ability of high fidelity geometry recovery in 3DGS\.

## NeRFix: fixing subtle mistakes in the quadrature of the NeRF volumetric integral

**Authors:** Luca Savant Aira; Diego Valsesia; Enrico Magli

**ID:** 153568\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153568

[Paper](<https://openreview.net/forum?id=KQfFjq87GI>) | [PDF](<https://openreview.net/pdf?id=KQfFjq87GI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153568>)

_Abstract unavailable from the accessible public sources._

## ViewRec3D: Learning to Recommend 3D Viewpoints for AI Photography

**Authors:** Chengzhi Zhang; Yunzhong Hou; Zizheng Sun; Ming\-Hsuan Yang; Chi Liu

**ID:** 149984\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149984

[Paper](<https://openreview.net/forum?id=liAA4bZK9p>) | [PDF](<https://openreview.net/pdf?id=liAA4bZK9p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149984>)

Viewpoint dictates the photo composition and plays a vital role in AI photography\. Existing 3D viewpoint recommendation methods are often limited in viewpoint adjustments, which is mainly due to their lack of high\-quality training data with accurate and large 3D view changes\. Ideally, the training data should contain suboptimal images and expert\-selected optimal viewpoints, but this can be very expensive to curate\. To solve this, we build an automatically\-generated 3D viewpoint recommendation dataset from expert photos\. Specifically, we first consider these expert photos as optimal and outpaint them to provide more information on scene layouts\. Next, we explicitly reconstruct the 3D scene\. We then render suboptimal images from random viewpoints\. Lastly, we introduce a hierarchical data filtering scheme and acquire high\-quality data pairs for our ViewRecDB\-100K dataset\. On top of this, we further introduce a view recommendation model, ViewRecNet, that can predict expert viewpoints from any suboptimal image inputs using a ray\-based dense supervision\. The proposed method achieves strong results both  quantitatively and qualitatively, supported by LLM\-based viewpoint preference and human studies\. Data and code are available at https://github\.com/anonymous1\-submission/ViewRec3D\.git\.

## HOGWARTS: Mitigating Perspective Distortion for 6DoF Head Pose Estimation via Virtual Camera Space

**Authors:** Sungho Chun; Ju Yong Chang

**ID:** 150937\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150937

[Paper](<https://openreview.net/forum?id=eBZJLTaCK2>) | [PDF](<https://openreview.net/pdf?id=eBZJLTaCK2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150937>)

Estimating 6\-degrees\-of\-freedom \(6DoF\) head pose from a single RGB image remains challenging under strong perspective distortion\. We observe that the widely used design choice of rectangular face cropping introduces a geometric inconsistency\. This leads not only to image\-\-label mismatch under 2D rotation augmentation but also exacerbates perspective ambiguity, making it difficult to distinguish projection distortion from the actual appearance and pose of faces located near the image periphery\. To address this issue, we propose HOGWARTS, a geometry\-driven framework that replaces rectangular cropping with homography warping induced by a newly defined virtual camera space\. By explicitly defining a virtual camera that shares the optical center with the original camera and warping the input image into this space, our method compensates for off\-axis distortion in a geometrically consistent manner\. Furthermore, to accurately estimate 3D translation in the virtual space, we introduce a pinhole\-camera\-based translation formulation that explicitly compensates for projection scale variation caused by the virtual camera transformation\. Consequently, HOGWARTS enables more geometrically consistent and robust 6DoF pose estimation across varying image locations\. To the best of our knowledge, this is the first study to estimate the 6DoF pose of a target within a virtual camera space explicitly designed to mitigate perspective distortion\. Experimental results on the ARKitFace and BIWI datasets demonstrate that HOGWARTS consistently outperforms prior methods under severe perspective distortion as well as in cross\-domain settings\. Code will be made publicly available\.

## CC\-GS: Low\-Memory 3D Gaussian Splatting Training via CPU\-GPU Block\-Wise Context Compositing

**Authors:** Jian Xu; Siyi Wu; Yi Li; Bingzhe Li; Sian Jin; Wei Niu; Sheng Di; Yuede Ji; Miao Yin

**ID:** 154162\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154162

[Paper](<https://openreview.net/forum?id=FoB1Zw7yGu>) | [PDF](<https://openreview.net/pdf?id=FoB1Zw7yGu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154162>)

_Abstract unavailable from the accessible public sources._

## Hydra\-DP3: Frequency\-Aware Right\-Sizing of 3D Diffusion Policies for Visuomotor Control

**Authors:** Jinhao Zhang; Zhexuan Zhou; Huizhe Li; Yichen Lai; Wenlong Xia; Haoming Song; Youmin Gong; Jie Mei

**ID:** 152435\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152435

[Paper](<https://openreview.net/forum?id=TA5j0hwB2u>) | [PDF](<https://openreview.net/pdf?id=TA5j0hwB2u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152435>)

_Abstract unavailable from the accessible public sources._

## VideoMDM: Towards 3D Human Motion Generation From 2D Supervision

**Authors:** Amir Mann; Gal Michael Harari; Merav keidar; Or Litany

**ID:** 154317\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154317

[Paper](<https://openreview.net/forum?id=EYB8rootIX>) | [PDF](<https://openreview.net/pdf?id=EYB8rootIX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154317>)

We introduce VideoMDM, a diffusion\-based framework that trains 3D human motion priors directly from accurate 2D poses extracted from monocular videos, without any 3D ground truth\. A pretrained 2D\-to\-3D lifter provides approximate 3D pose sequences that serve as a noisy teacher: these are diffused, denoised by the model in 3D, and supervised in 2D by reprojecting the prediction and comparing against accurate keypoints\. We show that, under mild assumptions, a depth\-weighted 2D reprojection loss is equivalent in expectation to direct 3D supervision, and we adapt standard 3D motion regularizers — velocity consistency and over\-parameterized representation alignment — to this 2D setting\. Unlike methods that lift 2D to 3D only at inference, VideoMDM learns a coherent 3D motion manifold during training\. On HumanML3D it nearly closes the gap to fully 3D\-supervised MDM \(FID 0\.88 vs 0\.54\); On real video datasets Fit3D and NBA the method learns to generate motions consistently preferred by humans, with strong quantitative results\.

## StructBridge: Structure\-Grounded 3D Indoor Object Generation via 3D Latent Diffusion Bridge and Normal Refinement

**Authors:** Nange Wang; Zhanxu Bai; Yuxuan Li; Cewu Lu; Jianhua Sun

**ID:** 154515\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154515

[Paper](<https://openreview.net/forum?id=D0YUN8U2RL>) | [PDF](<https://openreview.net/pdf?id=D0YUN8U2RL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154515>)

Generating 3D indoor objects under fine\-grained structural control is crucial and has broad applications in robotics, gaming, and simulation\. Such fine\-grained structural control encompasses an object’s spatial layout, geometric icons, and relative size, which together constitute the object’s core structural properties\. However, existing controllable 3D generation methods do not take structural control as a primary objective, and they commonly rely on suboptimal conditions in representing structure or inadequate algorithms for maintaining structural consistency\. Therefore, they fail to achieve fine\-grained structural control during generation\. To address this, we present structure\-grounded 3D object generation, a novel perspective on 3D object generation, which decomposes 3D shapes into structural configurations and geometric details, directly conditions on the object’s structural configurations and synthesizes realistic geometric details to produce high\-quality 3D objects\.  Building on this perspective, we introduce StructBridge, which first employs a diffusion bridge in the 3D latent space to transform comprehensive structural conditions into structurally accurate coarse meshes, followed by a structure\-preserving normal refiner that enriches geometric details while preserving structure\. We conduct extensive experiments and comprehensive comparisons with various conditional generation methods, demonstrating that StructBridge achieves state\-of\-the\-art performance in both generation quality and structural control capabilities\.

## Towards Complementary Keypoint Detection via Mixture of Detectors

**Authors:** Xiaoyong Lu; Guobao Xiao; Dong Liang; Songlin Du

**ID:** 154279\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154279

[Paper](<https://openreview.net/forum?id=F1HI02weX5>) | [PDF](<https://openreview.net/pdf?id=F1HI02weX5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154279>)

Keypoint detection plays a central role in geometric vision pipelines\. Existing detectors exhibit complementary strengths across different scene structures and keypoint budgets, and reliance on a single detector often results in suboptimal keypoint distributions\. Motivated by this observation, we propose \*\*Mixture of Detectors \(MoD\)\*\* for dense matching pipelines, a unified framework for complementary keypoint detection through the adaptive composition of heterogeneous detectors\. MoD first distills heterogeneous detectors into a unified model, allowing diverse detection maps to be predicted efficiently within a single forward pass\. Detector selection is subsequently formulated as a patch\-wise, budget\-conditioned decision process, in which a lightweight router assigns the most suitable detector to each local region\. To avoid heuristic supervision, the router is trained with task\-driven rewards derived from downstream matching quality, jointly capturing both keypoint quantity and precision\. Extensive experiments on MegaDepth, ScanNet, and HPatches demonstrate that MoD consistently outperforms strong baselines across a wide range of keypoint budgets, demonstrating its effectiveness in improving keypoint distribution and downstream geometric performance\.

## Optimized Minimal 4D Gaussian Splatting for Efficient Dynamic Scene Representation

**Authors:** Minseo Lee; Byeonghyeon Lee; Lucas Y Lee; Eunsoo Lee; Jun Y Jeong; Sangmin Kim; Seunghyeon Song; Joo Chan Lee; Jong Hwan Ko; Jaesik Park; Eunbyung Park

**ID:** 151445\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151445

[Paper](<https://openreview.net/forum?id=acqj54vfk6>) | [PDF](<https://openreview.net/pdf?id=acqj54vfk6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151445>)

4D Gaussian Splatting has emerged as a new paradigm for dynamic scene representation, enabling real\-time rendering of scenes with complex motions\. However, it faces a major challenge of storage overhead, as millions of Gaussians are required for high\-fidelity reconstruction\.  Compressing explicit 4D Gaussians is challenging because they exhibit heterogeneous redundancy across static and dynamic regions, and their temporal attributes make direct quantization unstable\. In this work, we present OMG4 \(Optimized Minimal 4D Gaussian Splatting\), a framework that constructs a compact set of salient Gaussians capable of faithfully representing 4D Gaussian models\. Our method progressively reduces Gaussians in three stages: \(1\) Gaussian Sampling to identify primitives critical to reconstruction fidelity, \(2\) Gaussian Pruning to remove redundancies, and \(3\) Gaussian Merging to fuse primitives with similar characteristics\. In addition, we integrate implicit appearance compression and extend Sub\-Vector Quantization \(SVQ\) to 4D representations with a staged quantization scheme, further reducing storage while preserving quality\. Extensive experiments on standard benchmark datasets demonstrate that OMG4 achieves a favorable rate\-distortion trade\-off over recent state\-of\-the\-art methods, reducing model sizes by over 60\\% while maintaining reconstruction quality\. These results demonstrate the effectiveness of OMG4 as a practical framework for compact and high\-fidelity 4D scene representation\.

## 3D Fresnel Volumizing for Efficient Implicit Velocity Field Reconstruction

**Authors:** Sihan Chen; haochen sun; Peng Jiang; Anthony Cohn

**ID:** 155228\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155228

[Paper](<https://openreview.net/forum?id=7JwhEn9uk1>) | [PDF](<https://openreview.net/pdf?id=7JwhEn9uk1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155228>)

Reconstructing velocity distributions using wavefield responses provides a powerful tool for probing the internal structures of objects and has been widely applied in nondestructive testing, geological exploration, and medical imaging\. While full waveform inversion \(FWI\) provides high\-resolution results, its severe ill\-posedness and high computational cost hinder efficient 3D reconstruction\. In this paper, we propose a novel framework for efficient 3D internal velocity field reconstruction\. First, we parameterize the velocity field with a coordinate\-based neural network as an implicit continuous function, enabling compact representation from sparse observations\. Second, we adopt ray\-based traveltime tomography with multi\-level parallel forward modeling to accelerate computation\. Third, we introduce a differentiable Fresnel volumizing method that extends 1D ray paths into 3D volumetric regions \(i\.e\., Fresnel volumes\), enabling spatially continuous and multi\-scale gradient diffusion, thus alleviating gradient sparsity and improving reconstruction accuracy\. To further improve efficiency, we propose a 2D slice\-based construction of 3D Fresnel volumes using a lightweight neural network\. Extensive experiments on synthetic datasets, including ablation studies, demonstrate up to 10 times speedup over FWI while maintaining comparable accuracy, validating the effectiveness of the proposed method for efficient 3D inverse problems\.

## Intrinsic\-Preserving Schrödinger Bridge for Direct Part\-Aware 3D Generation

**Authors:** Qitong Yang; Mingtao Feng; Zijie Wu; Jie Feng; Weisheng Dong; Ajmal Mian

**ID:** 152274\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152274

[Paper](<https://openreview.net/forum?id=UIvwoPccJx>) | [PDF](<https://openreview.net/pdf?id=UIvwoPccJx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152274>)

Controllable 3D generation is a fundamental challenge in computer vision\. Existing classifier\-free guidance methods often yield suboptimal alignment with the given conditions, while Schr"\{o\}dinger Bridge approaches overlook intrinsic geometric discrepancies across multimodal manifolds, leading off\-manifold trajectories and semantic misalignment\. To address these issues, we propose Intrinsic\-Preserving Schr\\"\{o\}dinger Bridge \(IPSB\), a novel framework for direct part\-aware 3D generation that leverages cross\-modal intrinsic consistency\. Specifically, we introduce Hierarchical Part\-level Cross\-modal Encoder that constructs hierarchical part\-level representations through probability\-based soft coverage, explicitly constraining graph topology to establish semantically consistent part graphs across modalities\. Additionally, our IPSB incorporates asymmetric GW\-inspired relational regularization, which strictly preserves the intrinsic semantic structure in the conditional manifold while allowing sufficient geometric flexibility in the 3D target manifold\. Based on our IPSB framework, we devise Compositionally Controllable 3D Generation based on part\-wise intervention inference, enabling independent replacement or resampling of target part nodes while fixing the trajectories of remaining components, thus achieving part\-level controllable editing without full regeneration\. Extensive experiments demonstrate that our superiority, efficiency and generality\.

## Not All Spines Are Created Equal: How CT Segmenters Fail on Lumbosacral Transitional Vertebrae

**Authors:** Gregory Schwing; Patrick Schwing; Miraziz Ismoilov; Nizar Alnabahneh; Loren Schwiebert

**ID:** 139654\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139654

[Paper](<https://openreview.net/forum?id=D8yRWDAGQF>) | [PDF](<https://openreview.net/pdf?id=D8yRWDAGQF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139654>)

Wrong\-level spine surgery remains a persistent never\-event, with the Lumbosacral Transitional Vertebra \(LSTV, 5–35% prevalence\) as its largest anatomic driver\. We audit TotalSegmentator — the most widely deployed CT segmentation system and default back\-end of 3D Slicer — and show that on lumbarization cases its output is anatomically indistinguishable from a wrong\-level surgical plan: lacking an L6 class, it shifts lumbar labels caudally by one level, with junction\-DSC dropping 29 points on Any\-LSTV\. No existing CT benchmark surfaces this — not TotalSegmentator's own evaluation, not Li et al\. \(2025\) \(the per\-class DSC frontier on the matched COLONOG split\), and not VERIDAH \(vertebra\-labeling SOTA on a private CT cohort, operating on pre\-localized crops with no pelvis\)\. We contribute: \(i\) an LSTV\-stratified evaluation protocol \(per\-class DSC, junction\-DSC over a 40 mm L5/S1 window, per\-class voxel confusion at the junction\) translating the level\-shift mechanism into quantifiable wrong\-level surgical risk; \(ii\) CTSpinoPelvic1K — 1,153 CT volumes across 802 patients with unified spinopelvic masks, 33 LSTV\-positive cases across a 6\-way phenotype taxonomy, and radiologist Castellvi typing \(I–IV\) on all 33; \(iii\) the first publicly\-released merge\-based LSTV\-handling dual\-spinopelvic CT segmenter, exceeding TotalSegmentator on sacrum \(TS=0\.817 zero\-shot\) and uniquely delivering both spine and pelvis in a single forward pass with released weights; \(iv\) an empirical isolation showing VERIDAH's training\-side L5/L6 merge eliminates the collision driving TotalSegmentator's level shift but exposes a residual L4/last\_lumbar collision on count\-style sacralization, motivating VERIDAH's sequence predictor as the necessary disambiguation component\. CTSpinoPelvic1K, the protocol, and 5\-fold checkpoints are released publicly\.

## A 3D Scene is Worth 1K Tokens: 3D\-Grounded Representation for Scene Generation at Scale

**Authors:** Dongxu Wei; QiXu; Zhiqi Li; Hangning Zhou; Cong Qiu; Hailong Qin; Mu Yang; Zhaopeng Cui; Peidong Liu

**ID:** 148286\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148286

[Paper](<https://openreview.net/forum?id=z0550PJPjK>) | [PDF](<https://openreview.net/pdf?id=z0550PJPjK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148286>)

Scene\-level 3D generation has long been dominated by 2D multi\-view or video diffusion models\. Typically, these 2D\-based approaches perform scene generation in a 2D latent space, which introduces two fundamental issues: \(i\) representing 3D scenes via 2D views leads to significant representation redundancy, and \(ii\) latent space rooted in 2D inherently limits the spatial consistency of the generated scenes\. In this paper, we propose to perform 3D scene generation directly within a high\-dimensional implicit 3D latent space derived from powerful 2D foundation models \(e\.g\., DINOv2, SigLIP2, DA3\)\. Then we tame diffusion transformers to perform diffusion modeling directly in the 3D latent space, enabling 3D\-grounded scene generation\. In our experiments, we not only demonstrate the advantages of our method over 2D\-based approaches in terms of efficiency and spatial consistency, but also comprehensively analyze the impact of 3D latent representation on 3D scene generation performance\. Furthermore, we validate the favorable scalability of our method with respect to representation and model capacity\.

## TrackFish3D: Self\-Supervised 3D Tracking of Schooling Fish from Multi\-view Videos

**Authors:** Patt Phurtivilai; Zhiyang \(Frank\) Dou; Yifan Wu; Kinfung Chu; Yuan Liu; Lei Yang; Wenping Wang; Taku Komura

**ID:** 152726\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152726

[Paper](<https://openreview.net/forum?id=QoMSgn3Pyt>) | [PDF](<https://openreview.net/pdf?id=QoMSgn3Pyt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152726>)

Quantifying collective fish behavior requires accurate trajectories, yet multi\-view 3D tracking remains challenging due to frequent occlusions, visually similar individuals, and the long\-standing scarcity of identity annotations\. We present TrackFish3D, a geometry\-driven self\-supervised framework for dense multi\-camera 3D tracking of schooling fish\. Instead of relying on appearance\-based re\-identification or manually annotated identities, TrackFish3D turns calibrated multi\-view geometry into supervision: triangulation and reprojection consistency provide pseudo\-associations, while a geometric encoder and global association transformer learn all\-to\-all cross\-view correspondence within each frame\. To make these associations identity\-aware, TrackFish3D introduces an effective self\-supervised contrastive objective that separates co\-visible individuals in the embedding space, together with a temporal predictor that preserves identities and bridges short occlusions across frames\. The resulting model is trained once on unlabeled footage and applied directly to unseen test videos, requiring no cross\-view identity labels, temporal annotations, 3D ground truth, appearance features, or test\-time optimization\. On our benchmark, TrackFish3D improves 3D Multi\-Object Tracking Accuracy from 83\.7% for the strongest baseline to 96\.6%\. On the 3D\-ZeF zebrafish benchmark, it achieves 81\.1% MOTA, compared with 77\.4% for the best geometric baseline\. TrackFish3D also generalizes beyond fish, achieving strong results on real\-world bird tracking\. We will release our code and model upon acceptance\.

## MoCA: Mixture\-of\-Components Attention for Scalable Compositional 3D Generation

**Authors:** Zhiqi Li; Wenhuan Li; Tengfei Wang; Zhenwei Wang; Junta Wu; Haoyuan Wang; Yunhan Yang; Zehuan Huang; YANG LI; Chunchao Guo; Peidong Liu

**ID:** 153055 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OLpIK3FJ5F>) | [PDF](<https://openreview.net/pdf?id=OLpIK3FJ5F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153055>)

Compositionality is critical for 3D object and scene generation, but existing part\-aware 3D generation methods suffer from poor scalability due to quadratic global attention costs when increasing the number of components\. In this work, we present MoCA, a compositional 3D generative model based on a novel component\-level sparse attention that explicitly models inter\-component dependencies\. The attention mechanism features two key designs: 1\) importance\-based component routing that utilizes a lightweight router module for cross\-component importance estimation and selects top\-k relevant components for fine\-grained interaction, and 2\) distant components compression that preserves spatial priors while reducing computational complexity of global attention, by including compressed distant components into attention calculation instead of discarding them\. With these designs, MoCA enables intricate compositional 3D asset creation with scalable number of components\. Extensive experiments show MoCA outperforms baselines on both compositional object and scene generation tasks\. Code and models will be made publicly available\.

## Toward Minimal\-dimensional Convex Calibrated Surrogate Losses for Classification with Rejection

**Authors:** Yuzhou Cao; Han Bao; Bo An

**ID:** 150329 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ivLVYsPFHN>) | [PDF](<https://openreview.net/pdf?id=ivLVYsPFHN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150329>)

Classification with rejection \(CwR\) generalizes the standard classification task by providing an extra option of rejection with a cost $c$ smaller than misclassification costs, and the design of its convex calibrated surrogate loss is our central topic\. While typical surrogate losses for $K$\-class classification operates on $K$\-dimensional scoring functions, it has been proved that this dimensionality can be reduced to $\\lceil\\log\_2K\\rceil$ for CwR with $c\\in\(0,0\.5\]$, rendering more efficient computation\. This logarithmic dependency is commonly conjectured to be the lowest possible among any convex calibrated surrogate losses for CwR\. Through the lens of property elicitation, we explore even lower\-dimensional structures for CwR, by constructing a $2$\-dimensional convex calibrated surrogate loss under $c\\in\(0,0\.5\)$\. This loss dimension is provably optimal among all convex calibrated surrogate losses\. The boundary cost $c=0\.5$ is more nuanced\-\-\-we construct a $4$\-dimensional convex calibrated loss, improving over the $\\lceil\\log\_2 K\\rceil$\-dimension when $K&gt;16$\. Notably, this breaks the optimal logarithmic dimensionality attainable by the \*embedding framework\* \[Finocchiaro et al\., 2024\], a widely used loss design principle for polyhedral losses, negatively resolving their conjecture on the dimension optimality\.

## Flow\-Corrected Shape Optimization: Taming Manifold Drift in High\-Dimensional 3D Models

**Authors:** Emilien Seiler; Nicolas Talabot; Yingxuan You; Federico Stella; Pascal Fua

**ID:** 148446 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xkGjQXY3TJ>) | [PDF](<https://openreview.net/pdf?id=xkGjQXY3TJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148446>)

Optimizing 3D shapes within the latent spaces of deep generative models is fundamental to computer assisted engineering, yet remains prone to a critical failure mode we term \*manifold drift\*: the tendency of gradient\-based optimization to move latent vectors away from the manifold of valid shapes\. This problem is exacerbated in state\-of\-the\-art 3D shape generative models that operate in increasingly high\-dimensional latent spaces where valid shapes occupy a vanishingly small fraction of the full space\. Existing mitigation strategies, including latent regularization and flow\-matching approaches, either sacrifice expressiveness, demand a difficult trade\-off between objective guidance and generative fidelity that remains prone to manifold drift, or are computationally infeasible to scale to modern, large\-capacity 3D shape models\. We introduce a novel optimizer\-corrector framework that alternates between gradient steps for objective minimization and guided flow matching to drive the latent state back to the valid shape manifold\. By decoupling objective minimization from flow\-based correction, optimizing freely and correcting strictly, this alternating design avoids inherent trade\-offs, preserving geometric validity without sacrificing expressiveness while remaining computationally feasible on modern 3D shape models\. We demonstrate its effectiveness across generative priors of varying complexity, from simple vector latent spaces to large\-scale architectures across a variety of downstream optimization tasks, including aerodynamic drag reduction and object compliance optimization\.

## Towards Matrix\-Parallel and Feature\-Scalable 3D Gaussian Splatting Rendering on GPUs

**Authors:** Yangming Zhang; Siyi Wu; Jian Wang; Bingzhe Li; Wei Niu; Sheng Di; Ming Li; Miao Yin

**ID:** 152933 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PHnQZyfoZ1>) | [PDF](<https://openreview.net/pdf?id=PHnQZyfoZ1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152933>)

3D Gaussian Splatting \(3DGS\) has emerged as a mainstream representation for real\-time novel view synthesis and 3D reconstruction\. However, existing 3DGS rendering pipelines are poorly aligned with modern GPU architectures: depth\-sorted alpha compositing introduces strong per\-pixel sequential dependencies, limiting parallelism and resulting in scalar Fused Multiply\-Add \(FMA\)\-dominated execution that underutilizes high\-throughput matrix units such as Tensor Cores\. This mismatch becomes more severe for multimodal and semantically enriched 3DGS, where high\-dimensional features must be accumulated from millions of Gaussians, leading to rapidly increasing computation and memory costs\. To address these challenges, we propose a matrix\-parallel rendering framework for feature\-scalable 3DGS on modern GPUs\. We first identify the sequential dependency of alpha compositing as the key obstacle to efficient high\-dimensional feature rendering, and derive an order\-independent weighted accumulation formulation that transforms feature rendering into matrix\-oriented computation\. Our framework features three key designs: i: a tile\-based splatting pipeline that maps feature accumulation to warp\-level matrix\-multiply\-accumulate execution on Tensor Cores; ii: a warp\-granularity Gaussian packing strategy that mitigates visibility irregularity and improves feature reuse; and iii: a lazy channel\-batched feature\-fetching pipeline that reduces shared\-memory pressure, maintains high warp occupancy, and overlaps memory access with matrix execution for high\-dimensional features\. Extensive experiments on Mip\-NeRF 360, LERF, and 3DOVS demonstrate that our approach enables both high performance and strong scalability for feature\-rich 3DGS rendering\. Particularly, our method achieves up to 3\.8$\\times$ speedup over 3DGS and 2$\\times$ over TC\-GS while preserving rendering quality and semantic accuracy, and further reduces kernel render time by up to 36\.7$\\times$ for high\-dimensional features\.

## MemReg: Streaming Outdoor LiDAR Point Cloud Registration with Hybrid Memory Buffers

**Authors:** Jiuming Liu; Mengmeng Liu; Guangming Wang; Lihao Liu; Michael Yang; Yunpeng Zhang; Francesco Nex; Hao Cheng; Hesheng Wang

**ID:** 154506 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D4eJejSf3f>) | [PDF](<https://openreview.net/pdf?id=D4eJejSf3f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154506>)

Prior outdoor LiDAR registration works are commonly limited by the pair\-wise input paradigm, which neglects temporal correlations inherent within streaming sequences\. In this paper, we propose a novel multi\-frame outdoor point cloud registration network for streaming LiDAR scans enhanced with pose\-related memory buffers\. The key observation is that long\-term temporal LiDAR sequences can provide rich global contextual information to complete sparse measurements, filter outliers, and address low\-overlap problems, thereby boosting registration performance\. Specifically, two hybrid memory buffers are designed, including an implicit memory feature buffer and an explicit memory pose buffer, to store and dynamically update pose\-related temporal features\. Moreover, a novel dynamic history weighting module is developed to adaptively fuse current and history pose\-related features\. Extensive experiments on three outdoor datasets, including KITTI, nuScenes, and Apollo\-Southbay, demonstrate state\-of\-the\-art performance of MemReg, surpassing all previous pair\-wise methods and also multi\-frame SLAM systems\. Our method also generalizes surprisingly well to multiview indoor registration scenarios with rather competitive performance on 3DMatch, 3DLoMatch, and ScanNet\. Code will be released upon publication\.

## Splatting the Invisible: Geometry and Appearance Scene Completion from Sparse Views

**Authors:** Wesley Khademi; Fuxin Li

**ID:** 149531\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149531

[Paper](<https://openreview.net/forum?id=pSNAnXldPD>) | [PDF](<https://openreview.net/pdf?id=pSNAnXldPD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149531>)

Novel view synthesis methods such as 3D Gaussian Splatting degrade under sparse\-view settings, suffering from an inability to extrapolate beyond observed regions\. To enable high fidelity reconstruction and rendering from sparse views, inpainting of sparsely observed areas and completion of occluded regions is required\. Unlike existing approaches that perform these tasks using 2D inpainting diffusion models or geometric\-only 3D completion models, we propose a fully 3D scene completion framework, called InvisiSplat, that performs geometry and appearance completion directly in 3D\. Our method consists of a Gaussian Splat VAE which learns a sparse point cloud latent space that predicts Gaussian Splat parameters from the latents, as well as a two\-step flow model that learns to generate samples conditioned on the point cloud latents, different from other approaches that use tokens without 3D coordinates\. Our flow model utilizes alternating local 3D attention and global attention, which balances the needs for precise local geometry and large\-scale spatial context\. Across several datasets, we demonstrate that our method produces 33% \- 82% higher fidelity 3D geometry over prior work while attaining competitive performance on appearance metrics when compared to existing approaches\.

## RefineAny3D: Depth Refinement as Semantic Alignment for Monocular 3D Detection

**Authors:** Zhihao Zhang; Gengwei Zhang; Tianlong Chen; Xiaoming Liu

**ID:** 154077\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154077

[Paper](<https://openreview.net/forum?id=GMa4R8shWk>) | [PDF](<https://openreview.net/pdf?id=GMa4R8shWk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154077>)

_Abstract unavailable from the accessible public sources._

## MindShape: Superquadric\-Constrained High\-Fidelity 3D Reconstruction from fMRI

**Authors:** Xiaoquan Shen; Ming Li; Jianxiong Gao; Jiaxuan Chen; Xiangru Huang; Yanwei Fu; Gang Pan

**ID:** 149071\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149071

[Paper](<https://openreview.net/forum?id=t5aqllPnlD>) | [PDF](<https://openreview.net/pdf?id=t5aqllPnlD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149071>)

_Abstract unavailable from the accessible public sources._

## Complexity Aware Continuous Level of Details for Gaussian Splatting

**Authors:** Radu Beche; Raoul de Charette

**ID:** 155902\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155902

[Paper](<https://openreview.net/forum?id=1yzzKS5UI1>) | [PDF](<https://openreview.net/pdf?id=1yzzKS5UI1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155902>)

_Abstract unavailable from the accessible public sources._

## Diffusion Masked Pretraining for Dynamic Point Cloud

**Authors:** Zhuoyue Zhang; Yiding Sun; Chaowei Fang; Haozhe Cheng; Jian Liu; Jihua Zhu; Ajmal Mian

**ID:** 148526 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xFR59J1lic>) | [PDF](<https://openreview.net/pdf?id=xFR59J1lic>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148526>)

Dynamic point cloud pretraining is still dominated by masked reconstruction objectives\. However, these objectives inherit two key limitations\. Existing methods inject ground\-truth tube centers as decoder positional embeddings, causing spatio\-temporal positional leakage\. Moreover, they supervise inter\-frame motion with deterministic proxy targets that systematically discard distributional structure by collapsing multimodal trajectory uncertainty into conditional means\. To address these limitations, we propose Diffusion Masked Pretraining \(DiMP\), a unified self\-supervised framework for dynamic point clouds\. DiMP introduces diffusion modeling into both positional inference and motion learning\. It first applies forward diffusion noise only to masked tube centers, then predicts clean centers from visible spatio\-temporal context\. This removes positional leakage while preserving visible coordinates as clean temporal anchors\. DiMP also reformulates point\-wise inter\-frame displacement supervision as a DDPM noise\-prediction objective conditioned on decoded representations\. This design drives the encoder to target the full conditional distribution of plausible motions under a variational surrogate, rather than collapsing to a single deterministic estimate\. Extensive experiments demonstrate that DiMP consistently improves downstream accuracy over the backbone alone, with absolute gains of 11\.21% on offline action segmentation and 13\.65% under causally constrained online inference\.

## FIND: Frequency Invariance Disentanglement for Test\-Time Adaptation in LiDAR 3D Detection

**Authors:** Dongxiao Li; Zixuan Hu; LINGYU DUAN

**ID:** 155504 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=554xDogisf>) | [PDF](<https://openreview.net/pdf?id=554xDogisf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155504>)

LiDAR\-based 3D Object Detection \(L3OD\) is a fundamental 3D perception task, yet its performance is often compromised by domain shifts arising from diverse sensor configurations and environmental conditions\. Existing Test\-Time Adaptation \(TTA\) methods primarily leverage self\-supervision in the spatial domain, yet they frequently confound semantic content with domain style due to the sparse, non\-Euclidean nature of point clouds\. To overcome this limitation, we propose FIND \(Frequency INvariance Disentanglement\), a novel TTA framework that precisely disentangles domain\-invariant content from domain\-specific interference within the frequency domain\. Our methodology utilizes B\-Spline fitting to construct locally adaptive filters integrated into a dual\-stream architecture: an Invariant Stream extracts robust features to guide pseudo\-labeling, while a Specific Stream enforces consistency against domain perturbations\. By combining invariance\-driven alignment with stability\-guided regularization, our approach dynamically extracts robust domain\-invariant features while suppressing domain\-specific interference\. Extensive experiments on cross\-dataset adaptation and robust corruption benchmarks demonstrate that FIND significantly outperforms state\-of\-the\-art methods\.

## PGMS: Pyramidal Gaussian Mixture Splatting for 3DGS Compression

**Authors:** Xiaoge Zhang; Zijie Wu; Mingtao Feng; Saeed Anwar; Ajmal Mian

**ID:** 148213 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zWaptyAtZO>) | [PDF](<https://openreview.net/pdf?id=zWaptyAtZO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148213>)

3D Gaussian Splatting \(3DGS\) has become an established representation for real\-time novel view synthesis\. However, preserving fine geometric structures and appearance details typically requires millions of Gaussian primitives, resulting in substantial storage and transmission overhead\. 3DGS compression has been extensively studied through attribute quantization, entropy coding, and lightweight reparameterization\. However, existing methods often operate on a fixed backbone and therefore do not explicitly model the joint redundancy between geometry and appearance in the original dense Gaussian set\. To address this limitation, we propose \\textbf\{Pyramidal Gaussian Mixture Splatting\} \(PGMS\), a plug\-and\-play 3DGS compression framework that reformulates dense Gaussian primitives into a rate\-controllable pyramidal representation with scale\-dependent attributes\. Specifically, PGMS first constructs a mixture pyramid by progressively partitioning dense Gaussians into hierarchical mixture centers, where different levels perform attribute\-specific clustering to form shared prototypes\. It then employs a rate\-adaptive capacity allocator to determine the tiered budget under a target compression ratio\. To further improve rendering quality, we introduce a compositing\-aware parameter update rule that incorporates information from dense Gaussians into pyramid primitives according to their image\-space contributions\. Experiments on standard benchmarks show that our method delivers strong compression with high rendering fidelity and consistently outperforms state\-of\-the\-art 3DGS compression methods\.

## Latent Spatial Reasoning: Building Innate 3D Awareness via Latent\-Space Distillation

**Authors:** Ruifei Zhang; Xiangru Lin; Haoyuan Li; Wei Zhang; Xiao Tan; Junlin Xie; Xiang Wan; Guanbin Li

**ID:** 154054 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GYKRmOVktq>) | [PDF](<https://openreview.net/pdf?id=GYKRmOVktq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154054>)

Humans effortlessly infer 3D structure, such as depth, occlusion, and spatial arrangement, from 2D images and reason about it fluidly\. Multimodal large language models still struggle with such spatial reasoning\. Current approaches attempt to bridge this gap by injecting explicit 3D priors at inference time or aligning features with 3D\-aware teachers during training\. While these strategies improve geometric perception, they typically treat 3D knowledge as static representations, rather than enabling the model to reason with 3D cues during inference\. We argue that closing this gap requires internalizing 3D knowledge in a form that can participate in the model's reasoning dynamics\. To this end, we introduce \\textbf\{Latent Spatial Reasoning \(LSR\)\}, a framework that distills geometric knowledge into \\emph\{latent spatial tokens\}: geometry‑aware representations that the model actively queries and conditions on to guide its spatial reasoning process\. Through hierarchical distillation, LSR transfers 3D knowledge from foundation models, aligns it with the vision\-language space, and trains the model to interleave spatial and linguistic reasoning, all without external 3D modules at inference time\. Experiments on diverse spatial reasoning benchmarks demonstrate state\-of\-the\-art performance\.

## MoCA: Mixture\-of\-Components Attention for Scalable Compositional 3D Generation

**Authors:** Zhiqi Li; Wenhuan Li; Tengfei Wang; Zhenwei Wang; Junta Wu; Haoyuan Wang; Yunhan Yang; Zehuan Huang; YANG LI; Chunchao Guo; Peidong Liu

**ID:** 153055\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153055

[Paper](<https://openreview.net/forum?id=OLpIK3FJ5F>) | [PDF](<https://openreview.net/pdf?id=OLpIK3FJ5F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153055>)

Compositionality is critical for 3D object and scene generation, but existing part\-aware 3D generation methods suffer from poor scalability due to quadratic global attention costs when increasing the number of components\. In this work, we present MoCA, a compositional 3D generative model based on a novel component\-level sparse attention that explicitly models inter\-component dependencies\. The attention mechanism features two key designs: 1\) importance\-based component routing that utilizes a lightweight router module for cross\-component importance estimation and selects top\-k relevant components for fine\-grained interaction, and 2\) distant components compression that preserves spatial priors while reducing computational complexity of global attention, by including compressed distant components into attention calculation instead of discarding them\. With these designs, MoCA enables intricate compositional 3D asset creation with scalable number of components\. Extensive experiments show MoCA outperforms baselines on both compositional object and scene generation tasks\. Code and models will be made publicly available\.

## $\\alpha$Depth: Learning Single\-Pass Soft Boundary Decomposition for Stereo Conversion

**Authors:** Xiang Zhang; Yang Zhang; Lukas Mehl; Karlis M Briedis; Markus Gross; Christopher Schroers

**ID:** 154295\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154295

[Paper](<https://openreview.net/forum?id=EmsqCfKK01>) | [PDF](<https://openreview.net/pdf?id=EmsqCfKK01>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154295>)

Accurately modeling soft boundaries, e\.g\., hair and defocus blur, is a fundamental challenge in stereo conversion due to the ambiguous blending of foreground and background\. Existing depth models primarily predict single\-layer depth, leading to ambiguity in depth correspondence at soft boundaries\. While matting techniques can capture opacity for layered modeling, they often struggle in complex scenes with multiple targets and usually require user intervention\. This paper introduces $\\alpha$Depth, a layered representation that decomposes soft boundaries for high\-fidelity stereo conversion\. Specifically, we first resolve mixed color and depth ambiguity by estimating layered color and depth values at soft boundaries\. Considering complex multi\-target scenes, we design a Circular Alpha Representation \(CAR\) that shifts the paradigm from global target extraction to local boundary decomposition\. Unlike prior matting methods restricted to a single foreground/background, CAR enables efficient scene\-level inference without manual guidance\. Extensive evaluations demonstrate that $\\alpha$Depth achieves state\-of\-the\-art performance in stereo conversion, eliminating background bleeding and structural distortions at soft boundaries\.

## Residual\-Autoregressive Context for 3D Gaussian Splatting Compression

**Authors:** Wenqing Wang; Huimin Zeng; Yun Fu

**ID:** 155263\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155263

[Paper](<https://openreview.net/forum?id=70jmXdhtUF>) | [PDF](<https://openreview.net/pdf?id=70jmXdhtUF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155263>)

3D Gaussian Splatting \(3DGS\) has emerged as a promising method that enables fast and high\-quality novel\-view rendering\. However, its large parameter size remains a bottleneck for storage and transmission\. We propose \*RacerGS\*, a compact 3DGS compression framework that achieves scene reconstruction at significantly reduced storage sizes with preserved fidelity\. To obtain compact and spatially coherent features, we design a hash projection model that projects the anchor hash encodings into compact context features\. Additionally, we introduce a FiLM\-modulated autoregressive GRU context model that utilizes causal dependencies among anchor feature groups and uses recurrent hidden states to refine entropy\-model parameters, improving bitrate efficiency\. Furthermore, we adaptively entropy\-code quantized residuals of anchor attributes around their context\-predicted means, reducing symbol entropy by leveraging spatial consistency\. Overall, \*RacerGS\* achieves more than \*\*$\\mathbf\{150\}\\boldsymbol\{\\times\}$\*\* compression over vanilla 3DGS and \*\*$\\mathbf\{28\}\\boldsymbol\{\\times\}$\*\* over Scaffold\-GS, while providing comparable rendering quality\. Extensive experiments across five datasets demonstrate our superiority over prior 3DGS compression methods in both storage reduction and rate\-distortion performance\.

## Not All Tasks Quantize Equally: Fisher\-Guided Quantization for Visual Geometry Transformer

**Authors:** Yipu Zhang; Jintao Cheng; Weilun Feng; Jiehao Luo; Chuanguang Yang; Zhulin An; Yongjun Xu; Wei Zhang

**ID:** 151378\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151378

[Paper](<https://openreview.net/forum?id=b31hQvoPCd>) | [PDF](<https://openreview.net/pdf?id=b31hQvoPCd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151378>)

Feed\-forward 3D reconstruction models, represented by Visual Geometry Grounded Transformer \(VGGT\), jointly predict multiple visual geometry tasks such as depth estimation, camera pose prediction, and point cloud reconstruction in a single forward pass\. They have been widely adopted in 3D vision applications, but their billion\-scale parameters bring substantial memory and computation overhead, posing challenges for on\-device deployment\. Post\-Training Quantization \(PTQ\) is an effective technique to reduce this overhead\. Existing PTQ methods for feed\-forward 3D models mainly focus on handling heavy\-tailed activation distributions and constructing diverse calibration datasets\. However, we observe that feed\-forward 3D models predict multiple geometric attributes through a shared backbone, where different transformer blocks and hidden channels contribute distinctly to each task, resulting in substantially different sensitivities to quantization errors across tasks, blocks, and channels\. Consequently, treating all tasks equally over\-emphasizes insensitive tasks and causes significant accuracy loss on the sensitive ones\. To address this issue, we propose Fisher\-Guided Quantization \(FGQ\) for feed\-forward 3D reconstruction models\. Specifically, FGQ uses the diagonal Fisher information matrix to quantify the different sensitivities across tasks, blocks, and channels, and incorporates these sensitivities into the Learnable Affine Transformation during calibration to better preserve the channels and blocks most critical to each task\. Extensive experiments across camera pose estimation, point map reconstruction, and depth estimation show that FGQ consistently outperforms state\-of\-the\-art quantization baselines on VGGT, achieving up to 39\\% relative improvement under the 4\-bit quantization\.

## Open\-Vocabulary 3D Part Segmentation with  Semantic Propagation Hawkes Process

**Authors:** Kejie Shi; Kun Zhou; Jieyu Zhao; Xulun Ye

**ID:** 155432\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155432

[Paper](<https://openreview.net/forum?id=5hcg8T2gV0>) | [PDF](<https://openreview.net/pdf?id=5hcg8T2gV0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155432>)

_Abstract unavailable from the accessible public sources._

## Glob3R: Global Structure\-from\-Motion with 3D Foundation Models

**Authors:** Junyuan Deng; Heng Li; Kejie Qiu; Lingteng Qiu; Rui Peng; Weichao Shen; Weihao Yuan; Siyu Zhu; Zilong Dong; Ping Tan

**ID:** 151745\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151745

[Paper](<https://openreview.net/forum?id=YQG92O0dwh>) | [PDF](<https://openreview.net/pdf?id=YQG92O0dwh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151745>)

Recent 3D geometric foundation models, such as VGGT, provide robust feed\-forward 3D reconstruction by directly predicting camera poses and 3D scene points from input images\. However, their results remain inaccurate, and scaling them to long sequences or large unordered image sets typically requires chunk\-wise processing, which can introduce drift and inconsistency\. We present Glob3R, a global SfM\-style reconstruction built on 3D foundation models\. Our key idea is to explicitly optimize feed\-forward geometric predictions\. To this end, we augment a frozen Pi3X backbone with a lightweight dense matching head that predicts image warps between selected reference frames and neighboring views\. These dense warps are converted into sparse but reliable multi\-view feature tracks, which provide correspondence constraints for global optimization\. We further introduce a keyframe\-based sliding\-window association strategy that propagates tracks and relative poses across overlapping windows, enabling scalable reconstruction\. Finally, we perform global motion averaging and bundle adjustment to refine camera poses, reduce scale inconsistencies, and recover dense scene geometry\. Extensive experiments on indoor, outdoor, large\-scale driving, and unordered SfM benchmarks demonstrate that Glob3R achieves robust and accurate reconstruction\. It consistently improves over feed\-forward foundation\-model baselines and recent scalable reconstruction methods, while being more robust than classical SfM pipelines\. The refined poses also lead to higher\-quality neural rendering, validating the benefit of combining foundation\-model priors with global geometric optimization\.

## ChiP\-STAR: Spatial\-Topological Attention for Pre\-trained Generative Chip Routing

**Authors:** Junfeng Liu; Xingquan Li

**ID:** 150942\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150942

[Paper](<https://openreview.net/forum?id=eAB0qsCFKl>) | [PDF](<https://openreview.net/pdf?id=eAB0qsCFKl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150942>)

Routing is foundational in VLSI physical design, directly shaping timing, power, and area\. Recent pre\-trained Seq2Seq models recast routing as autoregressive generation over DFS\-serialized trees, but inherit a text backbone blind to the physical space their tokens describe: DFS decouples sequence position from physical coordinate, breaking spatial reasoning at branching points, in load selection, and along the autoregressive trajectory\. We name these failures the \\emph\{Three Spatial Blindnesses\} and propose ChiP\-STAR, which augments a T5Gemma backbone with three lightweight modules: a dual\-frame rotary encoding coupling sequence order with 3D proximity, a Fourier\-factorized attention prior with memory linear in sequence length, and a cumulative coordinate\-noise schedule closing the train\-\-inference gap, together adding under $0\.5\\%$ parameters\. We rebuild the AiEDA corpus into the largest geometry\-annotated routing dataset to date \($6\.4$M nets, $1\.8$B tokens, $556$\\,GB\)\. ChiP\-STAR\-Large surpasses iPCL\-Large by $5\\%$ on Leaf IoU and Connectivity, and commercial ECO signoff yields $3\\%$ shorter wirelength and $11\\%$ fewer vias\. Our code is publicly available at \\url\{https://anonymous\.4open\.science/r/iPCL\-R\-0778/\}\.

## DTGS: Physics\-Embedded Dynamic Thermal 3D Reconstruction with Gaussian Splatting

**Authors:** Junbo Li; Hang Fu; Yinuo Wang; Weimin Yuan; Cai Meng; Xiangzhi Bai

**ID:** 155685\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155685

[Paper](<https://openreview.net/forum?id=3iRUNwJRYn>) | [PDF](<https://openreview.net/pdf?id=3iRUNwJRYn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155685>)

Dynamic scene representation and rendering in the visible spectrum has been extensively studied\. Compared to visible\-light imaging, thermal infrared sensing offers all\-weather observation and strong penetration capability, enabling perception in low\-visibility environments\. However, dynamic reconstruction in thermal infrared scenes is challenged due to atmospheric transport effects and interference from low\-emissivity background regions, which often leads to motion blur and details loss in rendered results\. To address these issues, we propose DTGS, a physics\-driven dynamic 3D scene reconstruction approach\. DTGS factorizes dynamic thermal scenes into radiometric and geometric components, modeling radiometric changes via rendering that integrates atmospheric radiative transfer, while capturing geometric deformations through Adaptive Temporal Gaussian basis\. In addition, we design a thermal\-radiance\-weighted structural similarity loss to suppress gradient interference from low\-radiance noisy regions\. Furthermore, to demonstrate the effectiveness of our method, a large\-scale dataset for this field named Dynamic\\\_LTR is created\. Experimental results demonstrate that our method achieves a 2\.7 dB improvement in PSNR, a twofold speedup in rendering, and a threefold reduction in training time\. The code and datasets will be available after acceptance\.

## What Makes a Good Path? Factoring Manifold Support and Path Geometry

**Authors:** Zhixuan Zhou; Tingting Dan; Guorong Wu

**ID:** 149855\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149855

[Paper](<https://openreview.net/forum?id=mmoow6azRW>) | [PDF](<https://openreview.net/pdf?id=mmoow6azRW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149855>)

The manifold hypothesis suggests that real\-world data concentrates on low\-dimensional structures, yet navigating meaningful trajectories on latent manifolds remains an open challenge\. A common approach is to construct density\-aware metrics, but such constructions bundle two distinct questions: \(i\) where valid data lies and \(ii\) how we choose to traverse on the manifold\. Since different tasks may demand different traversal behaviors even on the same data manifold, specifying these two aspects independently offers additional modeling flexibility\. We propose to factor the path objective into a kinetic term governed by a freely chosen geometric prior and a score\-based potential, derived from the negative log\-density of a pretrained diffusion model, that acts as a soft constraint for manifold adherence\. The potential encourages dynamics to evolve along the data support, while the geometric prior remains free to encode task\-specific notions of path optimality\. To solve the resulting optimization problem, we introduce \\textit\{geodesic force matching\} \(GFM\), a direct\-collocation algorithm that discretizes the trajectory and optimizes all waypoints jointly to satisfy the Euler\-\-Lagrange force balance in a least\-squares sense\. On synthetic manifolds and 3D shape interpolation, our method produces smooth, on\-manifold paths and performs favorably against recent density\-aware baselines, most notably in the low\-noise regime where those baselines become numerically unstable\.

## PointZero: 3D Point Track Completion for Learning Transferable 3D Dynamics

**Authors:** Bardienus Duisterhof; Kaifeng Zhang; Adam Hung; Bowen Wen; Stan Birchfield; Yunzhu Li; Deva Ramanan; Jeffrey Ichnowski

**ID:** 149391\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149391

[Paper](<https://openreview.net/forum?id=qPN2noamDW>) | [PDF](<https://openreview.net/pdf?id=qPN2noamDW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149391>)

World models endow perceptual systems with the ability to predict how scenes evolve under interaction\.  They are most beneficial when trained on diverse volumes of data, to instill a rich prior into downstream applications\. Existing methods for capturing 3D world models are typically scene\-specific dynamics models, or require robot action labels \- which excludes web video data from the training pool\.  We study 3D point track completion as a pre\-trianing objective for learning transferable 3D dynamics without robot data\. Given a single RGB\-D observation and sparse partial 3D trajectories \(tracks\), we predict future 3D tracks of all observed points\. We show this is a objective provides a rich dynamics prior, without requiring robot action labels\. We contribute a diverse dataset of 2\.9 million synthetic frames spanning deformable, articulated, and rigid objects, and use it to train PointZero\. We show that a flexible and expressive transformer, PointZero, outperforms prior methods on the same data\. We demonstrate the utility of our pre\-training objective by fine\-tuning PointZero for two downstream applications: \(1\) action\-conditioned dynamics and \(2\) robot manipulation\. When fine\-tuned to condition on end\-effector pose, PointZero outperforms the baselines on a recent action\-conditioned 3D dynamics benchmark\. When fine\-tuned to predict robot actions, PointZero outperforms or matches the baselines on 6/7 simulated and real\-world robot manipulation tasks\. We furthermore evaluate training PointZero from scratch to isolate the benefits of our proposed architecture from those of our proposed pre\-training objective and dataset\. We release the dataset, model checkpoints, and full training recipe\.

## Spatially Feasible 3D Indoor Scene Generation via Interaction\-Oriented Human Proxy

**Authors:** Xinyuan Chen; Mingwen Shao; Qiao Zhang; Qinglin Zhan; Xiang Lv; Boyuan Yang; Jixuan Shi; Lingzhuang Meng; Chang Liu; Shanshan Song; Ling Jian

**ID:** 151858 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XOBgPRg5Vn>) | [PDF](<https://openreview.net/pdf?id=XOBgPRg5Vn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151858>)

Recent 3D indoor scene generation methods often produce layouts with limited spatial feasibility, where pathways are blocked and objects are difficult to access or use, restricting their applicability in virtual reality and embodied environments\. To address this challenge, this paper presents a new paradigm for 3D indoor scene generation that explicitly models interaction feasibility through a carefully designed geometric abstraction, termed the Interaction\-Oriented Human Proxy \(IOHP\)\. The IOHP serves as a compact yet spatially expressive representation for human interaction occupancy, and can be directly inferred by large language models without task\-specific training\. Building on IOHP, we formulate layout optimization as a unified objective that resolves geometric conflicts between the proxy and scene elements, while using the proxy as a bridge to preserve functional relationships among furniture, thereby improving overall usability and accessibility\. Benefiting from this design, our method eliminates reliance on data\-driven human preference learning and complex layout\-planning pipelines, producing accessible, usable, and spatially coherent scenes in an efficient and stable manner\. Extensive experiments demonstrate that our approach significantly improves layout quality and spatial plausibility, highlighting the role of human\-centric interaction modeling in 3D scene generation\.

## PolySplat: Workload\-Regime\-Aware Rasterization for 3D Gaussian Splatting

**Authors:** Longzan Luo; Bin CUI; Xupeng Miao

**ID:** 155129 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8D1dMsluRy>) | [PDF](<https://openreview.net/pdf?id=8D1dMsluRy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155129>)

Rasterization dictates the interactive budget of 3D Gaussian Splatting \(3DGS\)\. However, the comparative speed of modern CUDA rasterizers is typically evaluated on a narrow canonical benchmark, masking severe regime\-dependent performance reversals\. This limited scope hides three critical kernel\-level bottlenecks: warp lane underutilization, exposed global\-memory latency during pixel shading, and terminal\-tail penalties from hardware thread scheduling\. In this paper, we present PolySplat, a workload\-regime\-aware 3DGS rasterizer designed to overcome these inefficiencies\. PolySplat introduces a warp\-saturating tile\-key emitter with adaptive three\-way dispatch, asynchronous shared\-memory staging in the render kernel, and a persistent kernel architecture with centralized atomic dispatch to strictly bound tail latency\. To rigorously validate our system, we introduce an extended 76\-target benchmark that achieves comprehensive workload\-regime coverage by stratifying targets across extreme Gaussian counts \(up to 56\.5M\), high resolutions \(up to 9K\), and six diverse scene categories\. Evaluated on this comprehensive suite, PolySplat achieves dataset\-balanced geometric\-mean speedups of 1\.26x to 6\.48x over state\-of\-the\-art rasterizers at lossless visual quality\. Notably, under sustained 60Hz interaction at extreme resolutions, PolySplat strictly meets 1\-vsync display deadlines where existing renderers suffer from massive queue divergence and input\-to\-photon lag\.

## LaSA\-Net: A Language\-Guided Network for Outdoor Generalized 3D Referring Expression Segmentation

**Authors:** Lingfei Ma; Bin Liu; Wen Li; Wentao Sun; Chaorui Liu; Haiyan Guan; Jonathan Jun LI

**ID:** 153716 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JIRuvugnPe>) | [PDF](<https://openreview.net/pdf?id=JIRuvugnPe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153716>)

3D Referring Expression Segmentation \(3D\-RES\) aims to segment target objects in point clouds via language\. However, extending 3D\-RES from indoor scenes to large\-scale outdoor environments introduces three major challenges, i\.e\., large\-scale geospatial complexity lacking in indoor benchmarks, sparse\-target perception overwhelmed by massive geometric clutter and distractors, and context\-induced query dilution, where highly relation\-intensive expressions cause globally\-initialized queries to be absorbed by salient reference objects\. To address these issues, we introduce UrbanRefer, the first outdoor 3D\-GRES benchmark with 195 urban road point cloud scenes and 7,840 textual descriptions for complex geospatial reasoning\. We further propose LaSA\-Net, a Language\-guided Semantic Segmentation Network\. First, to enhance sparse\-target perception, LaSA\-Net incorporates pixel\-level dense features from DINOv3 as 2D priors and fuses them with 3D features through depth\-consistent verification\. Then, to alleviate query dilution, we design a semantic\-adaptive query generation module that applies text\-weighted farthest point sampling to focus on text\-relevant regions, and performs multi\-granularity sampling to maintain both local grounding and global semantic consistency\. Finally, a reliability\-aware decoder adaptively suppresses noisy language cues through cross\-modal reliability\-gated injection, generating precise prompts for accurate mask prediction\. Extensive experiments demonstrate that LaSA\-Net achieves 52\.7\\%, 55\.9\\%, and 47\.9\\% mIoU on the ScanRefer, Multi3DRefer, and UrbanRefer datasets, surpassing prior state\-of\-the\-art methods by 2\.3\\%, 4\.2\\%, and 2\.8\\% respectively\.

## Diff3R: Feed\-forward 3D Gaussian Splatting with Uncertainty Aware Differentiable Optimization

**Authors:** Yueh\-Cheng Liu; Jozef Hladký; Matthias Niessner; Angela Dai

**ID:** 155720 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3QXU3rF61y>) | [PDF](<https://openreview.net/pdf?id=3QXU3rF61y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155720>)

Recent advances in 3D Gaussian Splatting \(3DGS\) present two main directions: feed\-forward models offer fast inference in sparse\-view settings, while per\-scene optimization yields high\-quality renderings but is computationally expensive\. To combine the benefits of both, we introduce Diff3R, a novel framework that explicitly bridges feed\-forward prediction and test\-time optimization\. By incorporating a differentiable 3DGS optimization layer directly into the training loop, our network learns to predict an optimal initialization for test\-time optimization rather than a conventional zero\-shot result\. To overcome the computational cost of backpropagating through the optimization steps, we propose computing gradients via the Implicit Function Theorem and a scalable, matrix\-free PCG solver tailored for 3DGS optimization\. Additionally, we incorporate a data\-driven uncertainty model into the optimization process by adaptively controlling how much the parameters are allowed to change during optimization\. This approach effectively mitigates overfitting in under\-constrained regions and increases robustness against input outliers\. Since our proposed optimization layer is model\-agnostic, we show that it can be seamlessly integrated into existing feed\-forward 3DGS architectures for both pose\-given and pose\-free methods, providing improvements for test\-time optimization\.

## Stable3R: Streaming 3D Reconstruction with Stable Geometric References

**Authors:** Jincheng Xiong; Jiarong Han; Hang Zhang; Mu Xu; Ming Qian

**ID:** 154907\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154907

[Paper](<https://openreview.net/forum?id=A2C5edhRjI>) | [PDF](<https://openreview.net/pdf?id=A2C5edhRjI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154907>)

Streaming 3D reconstruction has become a critical component for real\-time applications\. While recent advances have adapted large\-scale offline feedforward models into streaming architectures via causal attention and KV\-caching, they suffer from fundamental instability: the irreversible bias in early frames\. This limitation stems from two coupled factors: \(1\) the existing KV\-cache\-based causal architecture strictly prohibits access to future information, resulting in information\-poor early caches; and \(2\) current methods typically anchor the pose constraints to the initial frame, amplifying the early bias throughout the sequence\. To address these challenges, we propose Stable3R, a holistic framework that establishes stable geometric references by enriching historical caches and anchoring poses to prefixes rather than a single initial frame\. Specifically, we first introduce a lookahead\-augmented attention mechanism, integrating future observations into past caches without violating causal constraints\. Second, we adopt a frame\-equivariant architecture with prefix\-relative supervision, alleviating the reliance on the biased initial frame\. Extensive experiments across multiple benchmarks show that our method consistently boosts reconstruction quality within a strictly causal inference schedule\.

## BrickFlow: Connectivity\-Guided Brick Reconstruction

**Authors:** Peter Kulits; Cordelia Schmid

**ID:** 151991\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151991

[Paper](<https://openreview.net/forum?id=WJX7hy4lhB>) | [PDF](<https://openreview.net/pdf?id=WJX7hy4lhB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151991>)

Given a set of LEGO parts and an image of an assembled object, our task is to infer the pose of each part to assemble the object\. In contrast with traditional 3D reconstruction, doing so requires satisfying discrete physical constraints, which provide structure but render the problem combinatorial and highly sensitive to small pose errors\. To learn a prior over how parts fit together, we train a set\-conditioned SE\(3\) flow model that maps noisy poses to valid assemblies\. We then finetune this model to inject image conditioning\. However, while the learned flow captures global structure, it does not enforce connectivity\. To address this, we introduce an analytic connector\-field guidance to pull predictions toward the connection\-consistent manifold at test time\. Through this, we demonstrate improved validity and reconstruction performance, scaling with model size, pretraining, and conditional guidance\. We will make our models and data available for research purposes\.

## Open\-Vocabulary 3D Part Segmentation with  Semantic Propagation Hawkes Process

**Authors:** Kejie Shi; Kun Zhou; Jieyu Zhao; Xulun Ye

**ID:** 155432\-\-3 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155432

[Paper](<https://openreview.net/forum?id=5hcg8T2gV0>) | [PDF](<https://openreview.net/pdf?id=5hcg8T2gV0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155432>)

_Abstract unavailable from the accessible public sources._

## Glob3R: Global Structure\-from\-Motion with 3D Foundation Models

**Authors:** Junyuan Deng; Heng Li; Kejie Qiu; Lingteng Qiu; Rui Peng; Weichao Shen; Weihao Yuan; Siyu Zhu; Zilong Dong; Ping Tan

**ID:** 151745\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151745

[Paper](<https://openreview.net/forum?id=YQG92O0dwh>) | [PDF](<https://openreview.net/pdf?id=YQG92O0dwh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151745>)

Recent 3D geometric foundation models, such as VGGT, provide robust feed\-forward 3D reconstruction by directly predicting camera poses and 3D scene points from input images\. However, their results remain inaccurate, and scaling them to long sequences or large unordered image sets typically requires chunk\-wise processing, which can introduce drift and inconsistency\. We present Glob3R, a global SfM\-style reconstruction built on 3D foundation models\. Our key idea is to explicitly optimize feed\-forward geometric predictions\. To this end, we augment a frozen Pi3X backbone with a lightweight dense matching head that predicts image warps between selected reference frames and neighboring views\. These dense warps are converted into sparse but reliable multi\-view feature tracks, which provide correspondence constraints for global optimization\. We further introduce a keyframe\-based sliding\-window association strategy that propagates tracks and relative poses across overlapping windows, enabling scalable reconstruction\. Finally, we perform global motion averaging and bundle adjustment to refine camera poses, reduce scale inconsistencies, and recover dense scene geometry\. Extensive experiments on indoor, outdoor, large\-scale driving, and unordered SfM benchmarks demonstrate that Glob3R achieves robust and accurate reconstruction\. It consistently improves over feed\-forward foundation\-model baselines and recent scalable reconstruction methods, while being more robust than classical SfM pipelines\. The refined poses also lead to higher\-quality neural rendering, validating the benefit of combining foundation\-model priors with global geometric optimization\.

## ChiP\-STAR: Spatial\-Topological Attention for Pre\-trained Generative Chip Routing

**Authors:** Junfeng Liu; Xingquan Li

**ID:** 150942\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150942

[Paper](<https://openreview.net/forum?id=eAB0qsCFKl>) | [PDF](<https://openreview.net/pdf?id=eAB0qsCFKl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150942>)

Routing is foundational in VLSI physical design, directly shaping timing, power, and area\. Recent pre\-trained Seq2Seq models recast routing as autoregressive generation over DFS\-serialized trees, but inherit a text backbone blind to the physical space their tokens describe: DFS decouples sequence position from physical coordinate, breaking spatial reasoning at branching points, in load selection, and along the autoregressive trajectory\. We name these failures the \\emph\{Three Spatial Blindnesses\} and propose ChiP\-STAR, which augments a T5Gemma backbone with three lightweight modules: a dual\-frame rotary encoding coupling sequence order with 3D proximity, a Fourier\-factorized attention prior with memory linear in sequence length, and a cumulative coordinate\-noise schedule closing the train\-\-inference gap, together adding under $0\.5\\%$ parameters\. We rebuild the AiEDA corpus into the largest geometry\-annotated routing dataset to date \($6\.4$M nets, $1\.8$B tokens, $556$\\,GB\)\. ChiP\-STAR\-Large surpasses iPCL\-Large by $5\\%$ on Leaf IoU and Connectivity, and commercial ECO signoff yields $3\\%$ shorter wirelength and $11\\%$ fewer vias\. Our code is publicly available at \\url\{https://anonymous\.4open\.science/r/iPCL\-R\-0778/\}\.

## DTGS: Physics\-Embedded Dynamic Thermal 3D Reconstruction with Gaussian Splatting

**Authors:** Junbo Li; Hang Fu; Yinuo Wang; Weimin Yuan; Cai Meng; Xiangzhi Bai

**ID:** 155685\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155685

[Paper](<https://openreview.net/forum?id=3iRUNwJRYn>) | [PDF](<https://openreview.net/pdf?id=3iRUNwJRYn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155685>)

Dynamic scene representation and rendering in the visible spectrum has been extensively studied\. Compared to visible\-light imaging, thermal infrared sensing offers all\-weather observation and strong penetration capability, enabling perception in low\-visibility environments\. However, dynamic reconstruction in thermal infrared scenes is challenged due to atmospheric transport effects and interference from low\-emissivity background regions, which often leads to motion blur and details loss in rendered results\. To address these issues, we propose DTGS, a physics\-driven dynamic 3D scene reconstruction approach\. DTGS factorizes dynamic thermal scenes into radiometric and geometric components, modeling radiometric changes via rendering that integrates atmospheric radiative transfer, while capturing geometric deformations through Adaptive Temporal Gaussian basis\. In addition, we design a thermal\-radiance\-weighted structural similarity loss to suppress gradient interference from low\-radiance noisy regions\. Furthermore, to demonstrate the effectiveness of our method, a large\-scale dataset for this field named Dynamic\\\_LTR is created\. Experimental results demonstrate that our method achieves a 2\.7 dB improvement in PSNR, a twofold speedup in rendering, and a threefold reduction in training time\. The code and datasets will be available after acceptance\.

## What Makes a Good Path? Factoring Manifold Support and Path Geometry

**Authors:** Zhixuan Zhou; Tingting Dan; Guorong Wu

**ID:** 149855\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149855

[Paper](<https://openreview.net/forum?id=mmoow6azRW>) | [PDF](<https://openreview.net/pdf?id=mmoow6azRW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149855>)

The manifold hypothesis suggests that real\-world data concentrates on low\-dimensional structures, yet navigating meaningful trajectories on latent manifolds remains an open challenge\. A common approach is to construct density\-aware metrics, but such constructions bundle two distinct questions: \(i\) where valid data lies and \(ii\) how we choose to traverse on the manifold\. Since different tasks may demand different traversal behaviors even on the same data manifold, specifying these two aspects independently offers additional modeling flexibility\. We propose to factor the path objective into a kinetic term governed by a freely chosen geometric prior and a score\-based potential, derived from the negative log\-density of a pretrained diffusion model, that acts as a soft constraint for manifold adherence\. The potential encourages dynamics to evolve along the data support, while the geometric prior remains free to encode task\-specific notions of path optimality\. To solve the resulting optimization problem, we introduce \\textit\{geodesic force matching\} \(GFM\), a direct\-collocation algorithm that discretizes the trajectory and optimizes all waypoints jointly to satisfy the Euler\-\-Lagrange force balance in a least\-squares sense\. On synthetic manifolds and 3D shape interpolation, our method produces smooth, on\-manifold paths and performs favorably against recent density\-aware baselines, most notably in the low\-noise regime where those baselines become numerically unstable\.

## PointZero: 3D Point Track Completion for Learning Transferable 3D Dynamics

**Authors:** Bardienus Duisterhof; Kaifeng Zhang; Adam Hung; Bowen Wen; Stan Birchfield; Yunzhu Li; Deva Ramanan; Jeffrey Ichnowski

**ID:** 149391\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149391

[Paper](<https://openreview.net/forum?id=qPN2noamDW>) | [PDF](<https://openreview.net/pdf?id=qPN2noamDW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149391>)

World models endow perceptual systems with the ability to predict how scenes evolve under interaction\.  They are most beneficial when trained on diverse volumes of data, to instill a rich prior into downstream applications\. Existing methods for capturing 3D world models are typically scene\-specific dynamics models, or require robot action labels \- which excludes web video data from the training pool\.  We study 3D point track completion as a pre\-trianing objective for learning transferable 3D dynamics without robot data\. Given a single RGB\-D observation and sparse partial 3D trajectories \(tracks\), we predict future 3D tracks of all observed points\. We show this is a objective provides a rich dynamics prior, without requiring robot action labels\. We contribute a diverse dataset of 2\.9 million synthetic frames spanning deformable, articulated, and rigid objects, and use it to train PointZero\. We show that a flexible and expressive transformer, PointZero, outperforms prior methods on the same data\. We demonstrate the utility of our pre\-training objective by fine\-tuning PointZero for two downstream applications: \(1\) action\-conditioned dynamics and \(2\) robot manipulation\. When fine\-tuned to condition on end\-effector pose, PointZero outperforms the baselines on a recent action\-conditioned 3D dynamics benchmark\. When fine\-tuned to predict robot actions, PointZero outperforms or matches the baselines on 6/7 simulated and real\-world robot manipulation tasks\. We furthermore evaluate training PointZero from scratch to isolate the benefits of our proposed architecture from those of our proposed pre\-training objective and dataset\. We release the dataset, model checkpoints, and full training recipe\.

## State Evolution Awareness for Category\-agnostic 3D Point Cloud Tracking

**Authors:** Xiantao Hu; Ying Tai; Jinxia Xie; Bineng Zhong; Guangwei Gao; Jianjun Qian; Jian Yang

**ID:** 151275\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151275

[Paper](<https://openreview.net/forum?id=bbSXfWRCKv>) | [PDF](<https://openreview.net/pdf?id=bbSXfWRCKv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151275>)

_Abstract unavailable from the accessible public sources._

## Diffeomoprhism\-Informed 3D Gaussian Splattings via Screen\-Space Optimal Transport \(OT\)

**Authors:** Xiang Gao; Xiaoping Zhu; Xinmu Wang; Yuanpeng Liu; Haotian Yin; Dichang Zhang; Yazheng Chen; Yue Wang; Yubin Zhou; Yu Guo; Wei Chen; David Gu; Xiyun Song; Heather Yu

**ID:** 151447\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151447

[Paper](<https://openreview.net/forum?id=ac9rdVDTOU>) | [PDF](<https://openreview.net/pdf?id=ac9rdVDTOU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151447>)

_Abstract unavailable from the accessible public sources._

## PosePlaner: Denoising Any Feedforward Pose Predictor from Pairwise Planar Geometry

**Authors:** Yihang Chen; Bin Tan; Yujun Shen; Yinghao Xu; Nan Xue

**ID:** 148270 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z6VEPNL9Hx>) | [PDF](<https://openreview.net/pdf?id=z6VEPNL9Hx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148270>)

_Abstract unavailable from the accessible public sources._

## Extending 3D Reconstruction Models to Any Camera

**Authors:** Ruxiao Duan; Yunwen \(Verse\) Zhou; Erin Hong; Dongxu Zhao; Eric Turner; Federico Tombari; Alex Wong

**ID:** 156110 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0K6xev69k8>) | [PDF](<https://openreview.net/pdf?id=0K6xev69k8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156110>)

_Abstract unavailable from the accessible public sources._

## SpatialBench: Is Your Spatial Foundation Model an All\-Round Player

**Authors:** Haosong Peng; Hao Li; jiaqi chen; Yuhao Pan; Runmao Yao; Yalun Dai; Fushuo Huo; Fangzhou Hong; Zhaoxi Chen; Haozhao Wang; Dingwen Zhang; Ziwei Liu; Wenchao Xu

**ID:** 139780 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5Fvw97JTqm>) | [PDF](<https://openreview.net/pdf?id=5Fvw97JTqm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139780>)

_Abstract unavailable from the accessible public sources._

## MCSplat: Multi\-View Photometric and Geometric Consistent Feed\-Forward Gaussian Splatting for Driving Scenes

**Authors:** Wang Yifei; Wei Tian; WENHUA BAO; Jia Zhou; Hanshi Wang; Fudong Ge; Jianhua Wu; Shuai Yuan; Zhipeng Zhang; Xingliang Liu; Xianming Zeng; Jianyun Xu; Bingzhao Gao

**ID:** 150934 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eCgqMJ0iay>) | [PDF](<https://openreview.net/pdf?id=eCgqMJ0iay>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150934>)

Driving\-scene reconstruction via feed\-forward Gaussian splatting from sparse multi\-view images remains challenging due to two factors\. First, cross\-camera photometric inconsistency—caused by variations in exposure, ISP, and illumination—can be incorrectly absorbed into Gaussian geometry\. Second, unreliable local geometric supervision arises from normal\-based constraints near depth discontinuities\.  To address these issues, we present \*\*MCSplat\*\*, a multi\-view consistent feed\-forward Gaussian splatting framework for driving scenes\. MCSplat constructs a canonical appearance space from depth\-guided multi\-camera correspondences to decouple geometry learning from camera\-specific appearance\. A multi\-scale Bilateral Grid Transformer restores raw camera appearance from canonical renderings, enabling photometric supervision without contaminating Gaussian geometry\. To improve local geometric reliability, we estimate Fisher\-information based uncertainty from photometric sensitivity and use it to adaptively weight surface\-oriented self\-supervision\. Experiments on the Waymo Dataset show that MCSplat achieves state\-of\-the\-art performance on both the full validation set and an appearance\-challenging subset with strong cross\-camera photometric inconsistency, demonstrating improved reconstruction quality and more consistent novel\-view geometry\. Code will be released\.

## TriSearch: Learning to Optimize Triangulations via Bistellar Flips

**Authors:** Yiran Wang; Guido Montufar

**ID:** 148495 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xNmLiO7Q7N>) | [PDF](<https://openreview.net/pdf?id=xNmLiO7Q7N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148495>)

We introduce TriSearch, a reinforcement\-learning framework for optimizing objectives over triangulations of a polytope via bistellar flips\. The key idea is a circuit\-supported subtriangulation action representation: feasible flips are  encoded by their supporting circuit and realized local subtriangulation, enabling a learned policy to rank them using local geometric and combinatorial features\. This yields a dimension\-agnostic interface and enables efficient traversal of the flip graph without explicit enumeration of the full triangulation space\. Instantiated in 3D and 4D, TriSearch generalizes zero\-shot from small training instances to larger polytopes with exponentially larger search spaces\. It achieves top performance on metric objectives in 3D and, in 4D, discovers more distinct Fine, Regular, Star triangulations of reflexive polytopes, corresponding to Calabi\-Yau threefolds, than existing samplers under a fixed budget\.

## NRF\-GS: Neural Residual Fields for Expressive and Compact Gaussian Splatting

**Authors:** Pratik S\. Bisht; Andreas Kolb

**ID:** 153399 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LfX2iMIYnO>) | [PDF](<https://openreview.net/pdf?id=LfX2iMIYnO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153399>)

We revisit the role of appearance modeling in 3D Gaussian Splatting \(3DGS\) and show that limited expressiveness in view\-dependent reflectance is a key driver of representation redundancy\. In standard 3DGS, low\-order spherical harmonics \(SH\) are used, restricting the splats' ability to model high\-frequency directional effects, which is typically compensated by increasing the number of splats\. We propose NRF\-GS: Neural Residual Fields for Gaussian Splatting, a hybrid representation that replaces per\-splat SH\-bases with a shared neural residual field\. Each Gaussian encodes a compact set of appearance features and a lambertian base color, while a lightweight global scene\-level MLP predicts view\-dependent residuals conditioned on viewing direction, distance, and per\-splat features\. This formulation enhances directional reflectance modeling by combining diffuse per\-splat reflectance representations with a shared global function for high\-frequency details, enabling both higher expressiveness and parameter sharing across splats\. Our key insight is that by accurately capturing high\-frequency directional reflectance, especially in specular regions, the GS\-representation becomes more expressive, reducing the need for geometrically redundant splats\. As a result, NRF\-GS achieves comparable or better rendering quality while reducing the number of Gaussians by up to 50%, and produces visibly improved specular and high\-frequency details\.

## FogGS: Physics\-Grounded 3D Foggy Effects

**Authors:** Jiaxin LI; Tailin Wu; Jiankang Deng; Li Zhang; Xiatian Zhu

**ID:** 154923 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9xI0UV7bGV>) | [PDF](<https://openreview.net/pdf?id=9xI0UV7bGV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154923>)

Realistic and diverse fog synthesis is a critical capability in 3D scene modelling, with broad applications in autonomous driving simulation, cinematic visual effects, gaming, and AR/VR\. Yet achieving this, encompassing varied density profiles, spatial distributions, and complex optical phenomena, in real\-world scenes remains a largely unsolved challenge\. Existing approaches rely on appearance\-driven weather transfer or simple fog overlays, which lack the physical grounding needed for volumetric effects and thus cannot faithfully model key fog properties and effects, including density gradients, anisotropic scattering, and atmospheric light shafts \(Tyndall effect\) — \\textit\{limitations\} that stem directly from the absence of explicit volumetric representation and physical light transport modeling\. We present \\textbf\{FogGS\}, a training\-free, model\-agnostic rendering framework that seamlessly enables existing pretrained fog\-free 3DGS models to produce photorealistic, physically plausible, and fully editable fog in novel\-view synthesis\. Grounded in atmospheric radiative transfer theory, FogGS models fog as spatially varying extinction and scattering fields, using the depth buffer from Gaussian rasterization to drive efficient screen\-space ray marching for geometry\-aligned transmittance and in\-scattering computation\. This physically grounded parameterization affords intuitive control over fog intensity, appearance, and spatial distribution, and naturally supports anisotropic scattering, scene occlusion, and illumination\. FogGS maintains high rendering efficiency practical for iterative editing workflows, remains compatible with relighting pipelines, and demonstrates superior realism, physical consistency, and controllability across diverse outdoor scenes\.

## Decomposing Earth Embeddings with Sparse Autoencoders

**Authors:** Vitus Benson; Fanny Yang; Markus Reichstein

**ID:** 150168 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kB29xkjNQK>) | [PDF](<https://openreview.net/pdf?id=kB29xkjNQK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150168>)

Earth observation foundation models produce global meter\-resolution embeddings that underpin work across agriculture, ecology, hydrology, and beyond\. Yet the embeddings themselves are opaque: each dimension entangles unrelated physical concepts, rendering their interpretability and robustness challenging for practitioners and scientists alike\. Here, we propose sparse autoencoders \(SAEs\) as a principled way to decompose Earth embeddings into overcomplete dictionaries of sparse, approximately monosemantic features\. We introduce an evaluation protocol suited to a domain where LLM\-based auto\-interpretability fails and spatial autocorrelation matters, scoring any SAE on reconstruction, sparsity, monosemantic recovery, and spatial coherence against a curated label registry of categorical and continuous reference products\. On this protocol, three state\-of\-the\-art SAE recipes \(ReLU\+$\\ell\_1$, BatchTopK, and Matryoshka BatchTopK\) all recover monosemantic and spatially contiguous concepts from AlphaEarth and Tessera embeddings much better than raw embeddings, with Matryoshka the strongest of the three\. Two applications follow: \(i\) unsupervised discovery of land\-cover subconcepts \(e\.g\., splitting water into river, lake, ocean\), and \(ii\) improved area\-of\-applicability estimates for OOD detection\. Together, these results are a step toward Earth observation models whose features can be inspected rather than only used, opening pathways for scientific discovery and improved trustworthiness in geospatial applications\. Code and models will be released upon publication\.

