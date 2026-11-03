# Computer Vision / 3D Rendering &amp; Reconstruction

计算机视觉 / 三维渲染与重建

283 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## ProPolar: Progressive Polar Decomposition for Implicit Neural Representations

**Authors:** Pureum Kim; Younggeon Ryu; Dongyoon Lee; Hae Beom Lee; Kyong Hwan Jin

**ID:** 148388 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yDPx5pQqmV>) | [PDF](<https://openreview.net/pdf?id=yDPx5pQqmV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148388>)

Implicit neural representations \(INRs\) capture global low\-frequency structure during the early stage of training and then refine localized high\-frequency details, afterwards\. However, standard optimizers are agnostic to the coarse\-to\-fine learning behavior of INRs\. Such optimizers accumulate a gradient matrix in momentum buffer and retain components misaligned with the dominant low\-frequency directions in the early stage\. We propose a progressively growing rank scheduler and a rank\-aware learning\-rate scheduler for enhancing a subspace\-based momentum optimization, where a momentum matrix is updated within a low\-rank subspace\. The rank schedule expands the subspace during training, and the scheduler holds the peak learning rate through rank growth so that the added subspace contributes to fine\-detail recovery\. Experiments on image fitting, single\-image super\-resolution \(SISR\), and neural radiance field optimization show that the proposed method improves convergence and peak reconstruction quality over competitive optimizers\. The largest gains appear in the high\-frequency refinement stage, mirroring the coarse\-to\-fine progression that the rank schedule targets\. A significant study on hyperparameter optimization \(HPO\) on NeRF further confirms that these gains persist under matched search budgets\.

## DirectUV: Image\-Conditioned UV Texture Generation with Surface\-Aware Positional Encoding

**Authors:** Jiantao Lin; Yingjie Xu; Mingzhi Sheng; Yangkai Wei; Hao CHEN; Yingcong Chen

**ID:** 153147 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NWZOrQHECk>) | [PDF](<https://openreview.net/pdf?id=NWZOrQHECk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153147>)

Generating high\-quality UV textures for 3D meshes remains challenging\. Multi\-view projection pipelines suffer from occlusion and view inconsistency, and recent methods that generate textures directly in UV space still rely on auxiliary modules to supply 3D information, leaving the attention mechanism tied to UV\-grid positions rather than to the underlying surface geometry\. This mismatch limits coherence across seams and disconnected UV islands\. We propose DirectUV, an image\-conditioned UV texture diffusion framework that operates in the latent UV space of a pretrained image VAE, in which a Diffusion Transformer denoises the UV latent given a single input image and a coarse UV map\. At its core, Surface\-Aware Positional Encoding \(SAPE\) replaces the standard 2D\-grid positional encoding with encodings derived from per\-token 3D surface coordinates obtained via UV\-to\-surface correspondence\. As positional encodings define the distance metric that attention operates on, SAPE enables tokens to attend to each other based on true surface proximity rather than UV\-grid distance, restoring coherence across seams and disconnected islands\. A multi\-level extension further assigns different attention heads to progressively finer subdivisions of the same latent UV patch, allowing the model to reason about surface structure at multiple granularities\. Experiments show that DirectUV produces sharper and more globally consistent textures than other baselines, with the largest improvements in occluded and view\-unseen regions where projection\-based methods leave gaps or stretched textures\.

## Bridging 1D, 2D, and 3D with Any\-to\-Any Multimodal Modeling

**Authors:** Jason Toskov; Oriol Barbany; Rishubh Singh; Jinya Sakurai; Efe Tarhan; Oğuzhan F Kar; Roman Bachmann; Amir Zadeh; Jesse Allardice; Chuan Li; Carme Torras; Afshin Dehghan; Amir Zamir

**ID:** 156144 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=02d6EHhMh6>) | [PDF](<https://openreview.net/pdf?id=02d6EHhMh6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156144>)

The world appears spatially three\-dimensional, however, existing large\-scale multimodal models are often built mostly around 1D, 2D and 2\.5D modalities\. To move toward a more complete and actionable understanding of physical reality, models that natively model and generate across 1D, 2D, and 3D modalities are desirable\. We present OmniDiMM, an any\-to\-any foundation model trained on a diverse set of 3D including meshes, Gaussian splats, voxels, and NeRFs; 2D such as images, and 1D like text\. We develop tokenizers for a diverse set of 3D modalities, such as NeRF weights triplanes, UDFs, and 3DGSs, that convert them into discrete tokens, which enables multimodal masked modeling for joint training\. Out of the box, OmniDiMM can directly perform standard tasks such as novel\-view image synthesis and 3D generation from images, where it matches or outperforms existing specialized methods\. As an any\-to\-any model, it can also convert between different 3D representations, such as NeRF weights and UDF, and generate various 3D modalities from 2D inputs, including DINOv2 features and surface normals\. Joint training across 3D modalities also leads to strong transfer performance on downstream tasks such as grasping, classification, and object pose prediction\. We scale training to a 1B\-parameter model using 1T tokens across 1M objects\. The pretrained models, training code, and multimodal dataset will be open\-sourced\.

## Track4D: Representing Dense 3D Tracking for Video Diffusion Models

**Authors:** Yushi LAN; Zeren Jiang; Kelvin Zheng Li; Xingang Pan; Chuanxia Zheng; Andrea Vedaldi

**ID:** 155695 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3d21Z6gJLQ>) | [PDF](<https://openreview.net/pdf?id=3d21Z6gJLQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155695>)

We introduce Track4D, a method that formulates dense 3D tracking as conditional video generation\. Repurposing large\-scale pretrained video generators for 3D tracking is non\-trivial: 3D point tracking in world space produces signals far from natural video, making it difficult for the video diffusion model \(VDM\) to learn\. We systematically study two representations for encoding 3D tracking in the VDM latent space: a Residual 3D Tracking Video \(RTV\) that directly encodes metric 3D offsets, and a Normalized Coordinate Map Video \(NCMV\) that implicitly encodes the underlying geometric correspondences as canonical 2D coordinate maps\. We further condition the VDM on point maps from an off\-the\-shelf 3D reconstructor to provide an explicit geometric scaffold for tracking\. Trained exclusively on limited synthetic data with LoRA adaptation, Track4D achieves competitive zero\-shot tracking performance across five benchmarks, demonstrating the potential of leveraging video generation priors for dense 3D tracking\.

## RigPAPR: Rig\-Based Animation of Static Neural Point Clouds from a Single\-View Video

**Authors:** Shichong Peng; Yanshu Zhang; Ke Li

**ID:** 153305 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MGb08Jhfew>) | [PDF](<https://openreview.net/pdf?id=MGb08Jhfew>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153305>)

Static neural point reconstructions capture a subject at high fidelity from posed images\. Given such a reconstruction and a monocular fixed\-viewpoint driving video of the subject, whether captured or produced by image\-to\-video \(I2V\) generation, we recover a rigged, re\-posable 3D asset\. Existing methods deform Gaussian splats through direct linear blend skinning \(LBS\) or mesh proxies, both of which are prone to joint\-boundary artifacts under articulation, even with per\-primitive corrections\. We trace the artifact to the representation: each splat carries an individual shape calibrated in the canonical pose to tile with its neighbours\. Under rigid LBS, each splat moves with its bone but cannot bend, so the canonical tiling breaks at joint boundaries into gaps and spikes\. Proximity attention point rendering \(PAPR\) instead carries no per\-primitive shape; each pixel is recomposed at render time from the deformed primitives' positions, so the surface re\-forms naturally with the articulation\. We present RigPAPR, which auto\-rigs a static PAPR cloud and drives it under direct LBS from a single fixed\-viewpoint video, without mesh proxy, pose\-dependent correction, or category template\. On synthetic subjects, RigPAPR matches the strongest baseline at the supervised view and exceeds mesh\-based and Gaussian\-splatting baselines at novel views by 3\+ dB PSNR, with cleaner joint\-boundary renderings of both synthetic and real subjects\.

## HoloGene: Learning to Lift Sliced Spatial Transcriptomics to Holistic 3D Gene Fields

**Authors:** Yumin Zheng; Qingtian Zhu; Ziyan Zhu; Kailu Song; Yinqiang Zheng; Jun Ding

**ID:** 152255 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UPzmDuUKQ3>) | [PDF](<https://openreview.net/pdf?id=UPzmDuUKQ3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152255>)

Spatial transcriptomics \(ST\) provides spatially resolved gene expression measurements, but most 3D ST datasets are acquired as independently processed 2D sections\. This sliced acquisition creates a difficult reconstruction problem: measurements are dense within each section but sparse along the axial direction, and inter\-section technical variation can be confounded with true biological change\. Existing coordinate\-based implicit neural representations \(INRs\) provide a continuous modeling framework, but standard isotropic coordinate encodings do not explicitly reflect this axial\-to\-lateral imbalance\. We present HoloGene, an anisotropic conditional INR framework for estimating continuous 3D gene\-expression fields from pre\-registered ST sections\. HoloGene first compresses high\-dimensional expression profiles into a graph\-autoencoder latent manifold\. It then uses pseudo\-label\-derived biological signature conditioning to provide coarse intra\-section biological context, while depth\-dependent FiLM modulation models axial variation\. To reduce slice\-specific covariance shifts, we introduce a signature\-stratified correlation\-alignment regularizer over latent features\. Using held\-out measured sections as cross\-sectional references, HoloGene improves reconstruction accuracy and biological preservation metrics compared with general\-purpose INRs and adapted spatial\-transcriptomics baselines\. Ablation analyses show that decoupled depth conditioning improves axial generalization, while correlation alignment provides the strongest reduction in slice\-specific representation leakage\. These results support anisotropic conditional modeling as a practical strategy for estimating continuous 3D expression fields from discontinuous ST sections\.

## BAT3R: Robust Online 3D Reconstruction with Bayesian Adaptive State Updates

**Authors:** Lijian Li; Yuanpeng He; Yudian Zheng; Chung\-ju Huang; Linyu Li; Dongming Jin; Wenpin Jiao; Zhi Jin; Chi\-Man Pun

**ID:** 153286 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MP758ZsHYv>) | [PDF](<https://openreview.net/pdf?id=MP758ZsHYv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153286>)

Feed\-forward transformer models have driven remarkable progress in 3D vision, yet their quadratic complexity renders them impractical for long video sequences\. Streaming 3D reconstruction addresses this bottleneck by processing frames sequentially with constant memory\. However, existing recurrent architectures inevitably suffer from progressive degradation over long sequences, as they fail to account for the intrinsic reliability of observations and the accumulated confidence of the historical state, leading to severe error accumulation\. To address these issues, we introduce BAT3R, a training\-free Bayesian adaptation framework comprising two synergistic modules: State Innovation Gating \(SIG\) and Bayesian\-guided Adaptive State Updating \(BASU\)\. SIG acts as a distributional regularizer that anchors state evolution to its geometric initialization, effectively arresting representational drift during long\-term inference\. Building on this, BASU reformulates state update as a recursive Bayesian inference process within a Kalman filtering framework\. By jointly modeling the temporal reliability of observations via information\-theoretic gain and spatial relevance via cross\-attention maps, BASU achieves an asymmetric spatio\-temporal state fusion: well\-consolidated historical regions are protected from redundant updates, while genuinely novel scene content is aggressively incorporated\. Extensive experiments on standard benchmarks \(7\-Scenes, TUM, ScanNet, KITTI, etc\.\) demonstrate that BAT3R consistently outperforms state\-of\-the\-art online 3D reconstruction methods, with the most significant gains observed on long sequences and complex scenes\.

## Geometry\-Aware Flow Matching for Sparse\-View 3D Gaussian Splatting

**Authors:** Abdullah Azeem; Ruisheng Wang; Qingquan Li; Abubakar Siddique

**ID:** 148380 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yKjmobiqnX>) | [PDF](<https://openreview.net/pdf?id=yKjmobiqnX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148380>)

Generalizable 3D Gaussian Splatting aims to predict renderable Gaussian scenes from sparse images without per\-scene optimization at test time\. Existing feed\-forward methods improve this problem mainly by strengthening the evidence given to the predictor, such as multiview aggregation, geometric cues, auxiliary supervision, and surface priors\. Yet the prediction itself is usually learned as a direct map to the final Gaussian scene\. This endpoint\-centered objective compresses scene layout, local geometry, visibility, opacity, orientation, and appearance into a single end\-point target, leaving the construction path of the Gaussian scene implicit\. We propose GRiF, a geometry\-aware flow matching framework that augments endpoint target supervision with conditional transport in scene space\. Starting from a controlled source scene, GRiF learns a view\-conditioned velocity field that progressively evolves a hierarchical Gaussian state toward a renderable target\. The hierarchy organizes updates from coarse layout to fine attributes, while geometry\-aware paths respect the native structure of Gaussian variables with rotation\-aware paths for orientation variables\. Experiments on RealEstate10K and ACID, with zero\-shot transfer evaluated on ScanNet, DL3DV, and DTU, show improved in\-domain reconstruction and stronger cross\-domain performance\.

## 3D Skew Normal Splatting

**Authors:** Xiangru Wu; Ke Fan; Yanwei Fu

**ID:** 152761 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QZ4uureDLB>) | [PDF](<https://openreview.net/pdf?id=QZ4uureDLB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152761>)

3D Gaussian Splatting \(3DGS\) has emerged as a leading representation for real\-time novel view synthesis and been widely adopted in various downstream applications\.  The core strength of 3DGS lies in its efficient kernel\-based scene representation, where Gaussian primitives provide favorable mathematical and computational properties\. However, under a finite primitive budget, the symmetric shape of each primitive directly affects representation compactness, especially near asymmetric structures such as object boundaries and one\-sided surfaces\.  Recent works have explored more complex kernel distributions, yet they either remain within the elliptical family or rely on hard truncation, which limits continuous shape control and introduces distributional discontinuities\. In this paper, we propose Skew\-Normal Splatting \(SNS\), which adopts the Azzalini Skew\-Normal distribution as the fundamental primitive\.   By introducing a learnable and bounded skewness parameter, SNS can continuously interpolate between symmetric Gaussians and Half\-Gaussian\-like shapes, enabling flexible modeling of both sharp boundaries and interior regions\. Moremover, SNS preserves analytical tractability under affine transformations and marginalization\. This property allows seamless integration into existing Gaussian Splatting rasterization pipelines\.  Furthermore, to address the strong coupling between scale, rotation, and skewness parameters, we introduce a decoupled parameterization and a block\-wise optimization strategy to enhance training stability and accuracy\.    Extensive experiments on standard novel\-view synthesis benchmarks show that SNS consistently improves reconstruction quality over Gaussian and recent non\-Gaussian kernels, with clearer benefits on sharp boundaries and thin or one\-sided structures\. Codes and models will be released\.

## Spherical Bayesian Experimental Design for Active View Selection in 3D Gaussian Splatting

**Authors:** Yan Song; Yunfei Guo; Guyeli Yang; Li He; Chenglong Li; Huanzhen Wang; Bailin HE; Qiao Sun; Zhong Jiangwei; Shizeng Zhang; Nuo Chen; Yan Wang; Wenqiang Zhang

**ID:** 150195 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k2OeOyeBRk>) | [PDF](<https://openreview.net/pdf?id=k2OeOyeBRk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150195>)

Active view selection for 3D Gaussian Splatting \(3DGS\) requires information\-theoretic grounding, computational efficiency, and strong reconstruction quality, yet existing methods satisfy these only partially\. Information\-theoretic approaches quantify gain over the full parameter space via costly Fisher computation under a Laplace approximation; faster alternatives sacrifice the grounding they started from\. We propose SpheriBED, a Bayesian experimental design framework that defines the information objective over per\-Gaussian spherical appearance—the quantity each observation fundamentally measures—rather than the full parameter vector, yielding exact closed\-form posteriors without Laplace approximation\. Scoring a candidate view requires only a single forward rasterization pass with no backward pass or per\-candidate optimization\. Extensive experiments across benchmarks demonstrate that SpheriBED consistently improves active reconstruction performance and provides more reliable uncertainty quantification compared to state\-of\-the\-art methods\.

## MVPISplat: Multi\-View Photometric Inconsistency for Defending 3D Gaussian Splatting Attacks

**Authors:** Md Mahedi Hasan Rigan; Nicole Meng; Miao Yin; Yingjie Lao; Faysal Hossain Shezan

**ID:** 153526 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Kfprdb9Erf>) | [PDF](<https://openreview.net/pdf?id=Kfprdb9Erf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153526>)

3D Gaussian Splatting \(3DGS\) achieves real\-time photorealistic novel\-view synthesis but is vulnerable to adversarial perturbations of its training images\. Recent attacks inflate the Gaussian count to exhaust GPU memory or corrupt rendered scenes to mislead downstream classifiers\. We find that both attacks have the same structural signature: 2D image adversarial perturbations are not 3D\-consistent by design\. The Gaussians generated to match them provide erroneous contributions in some views while making significant contributions in others\. We propose Multi\-View Photometric Inconsistency \(MVPI\) Defense that scores each Gaussian by the variance of its opacity\-weighted local $\\mathcal\{L\}\_1$ contribution across a stratified set of training views\. The most inconsistent are soft\-pruned via 3DGS's existing opacity threshold method\. We evalute our approach on two different datasets\. MVPI reduces peak Gaussian count by up to $1\.90\\times$ and training time by $1\.22\{\-\}1\.50\\times$ under Poison\-Splat attack\. It also restores top\-1 classification accuracy on adversarially perturbed renders from $57\.4\\%$ to $66\.5\\%$\. Our code is available at https://anonymous\.4open\.science/r/PruneDefense\-2876/README\.md\.

## WorldAct: Activating Monolithic 3D Worlds into Interactive\-Ready Object\-Centric Scenes

**Authors:** Jichen Hu; Jiawei Guo; Jiazhong Cen; Chen Yang; Sikuang Li; Wei Shen

**ID:** 153502 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KuO8bJHsZl>) | [PDF](<https://openreview.net/pdf?id=KuO8bJHsZl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153502>)

Recent 3D world modeling systems based on generative scene synthesis, such as Marble, can create coherent and explorable 3D environments, yet their outputs are typically static monolithic assets with limited editability and physical interaction\. This restricts their use in immersive content creation and embodied simulation, where generated worlds must be actively modified and manipulated\. To tackle this challenge, we present WorldAct, a framework that converts static generated 3D worlds into editable and interaction\-ready scenes\. WorldAct uses a multimodal agent to guide scene decomposition, identify actionable objects, reconstruct geometrically aligned object\-level meshes for interaction, and restore the residual background via 3D inpainting\. The resulting scenes support object\-level editing, collision\-aware manipulation, and embodied task execution while preserving global scene coherence\. Experiments show that WorldAct enables richer interaction scenarios than the original generated scenes, suggesting a practical path toward editable and interactive 3D world models\.

## Deformable 2D Gaussian Splatting

**Authors:** Huibin Li; Chul Min Yeum

**ID:** 153737 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=J74MJSTvZk>) | [PDF](<https://openreview.net/pdf?id=J74MJSTvZk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153737>)

Building upon the real\-time rendering capability of 3D Gaussian Splatting \(3DGS\), 2D Gaussian Splatting \(2DGS\) achieves improved surface reconstruction and geometric fidelity for novel view synthesis through explicit planar Gaussian primitives\. However, the smooth falloff inherent to Gaussian kernels fundamentally limits the reconstruction of high\-frequency shape signals, causing over\-smoothed edges and loss of fine geometric detail\. Prior works have explored alternative kernel functions to address this limitation, yet through systematic evaluation across signal fitting tasks, we find that all existing kernels suffer from the Gibbs phenomenon — producing oscillatory artifacts near sharp discontinuities\. This observation motivates a fundamentally different strategy: rather than replacing the kernel, we make it deformable\. This study presents Deformable 2D Gaussian Splatting , which augments each Gaussian surfel with a learnable, monotonic coordinate remapping in its local tangent plane\. With only a single free control point per axis \(two extra parameters\), the remapping enables asymmetric radial profiles, allowing each primitive to reliably capture sharp edges and irregular structures that symmetric kernels inherently cannot represent\. The deformation operates on the 2D tangent plane of 2DGS, preserving the differentiable rasterization pipeline with negligible overhead, and is optimized end\-to\-end through rendering loss alone\. Experiments on MipNeRF 360 and Tanks&amp;Temples demonstrate that our method effectively suppresses Gibbs artifacts at sharp boundaries and achieves state\-of\-the\-art performance among 2DGS\-based approaches in PSNR, SSIM, and LPIPS\.

## Distributional Estimation of 3D Object Orientation

**Authors:** Minjoon Kim; Chunghyun Park; Minsu Cho

**ID:** 153324 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M9VJONoD46>) | [PDF](<https://openreview.net/pdf?id=M9VJONoD46>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153324>)

The canonical orientation of a 3D object is often not unique but inherently ambiguous: many objects admit multiple equally valid canonical frames that no single\-output regressor can faithfully represent\. Rotational symmetry is the most structured manifestation of this phenomenon, where the set of valid orientations forms an orbit of the symmetry group\. Existing methods fall short in one of three ways: they predict only a single orientation, handle symmetry only under pre\-defined group assumptions, or resort to test\-time augmentation to approximate the full set of valid orientations\. We instead introduce a general framework for ambiguity\-aware orientation estimation that is at once $SO\(3\)$\-equivariant by construction, distributional in its output, and free of any restriction on the symmetry group\. It effectively predicts multiple valid orientations as a continuous multi\-modal distribution over $SO\(3\)$ via a truncated Wigner\-D expansion, without any symmetry\-group assumption\. The proposed method outperforms recent equivariant regressors and fixed\-quotient classifiers on the ShapeNet orientation benchmark, particularly on categories with continuous rotational symmetry, showing that supervision on discrete symmetry labels generalises to continuous bands\.

## UniFunc3D: Unified Active Spatial\-Temporal Grounding for 3D Affordance Segmentation

**Authors:** Jiaying Lin; Dan Xu

**ID:** 155665 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3vq4AkEW4K>) | [PDF](<https://openreview.net/pdf?id=3vq4AkEW4K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155665>)

Affordance segmentation in 3D scenes requires an agent to ground implicit natural\-language instructions into precise masks of fine\-grained interactive elements\. Existing training\-free methods typically rely on fragmented pipelines, which introduce visual blindness during task parsing and limit accuracy through single\-scale spatial and temporal processing\. We present UniFunc3D, a unified and training\-free framework that treats the multimodal large language model as an active observer\. By consolidating semantic, temporal, and spatial reasoning into a single forward pass, UniFunc3D performs joint reasoning to ground task decomposition in direct visual evidence\. Our approach introduces active spatial\-temporal grounding with a coarse\-to\-fine strategy\. This allows the model to select correct video frames adaptively and focus on high\-detail interactive parts while preserving the global context necessary for disambiguation\. On SceneFun3D, our UniFunc3D achieves state\-of\-the\-art performance, surpassing prior training\-free methods by a large margin with a relative 59\.9\\% mIoU improvement, and even outperforming training\-based methods without any task\-specific training\. Code will be released\.

## Autoregressive Appearance Prediction for 3D Gaussian Avatars

**Authors:** Michael Steiner; Zhang Chen; Alexander Richard; Vasu Agrawal; Markus Steinberger; Michael Zollhöfer

**ID:** 154526 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CwJk23BhSw>) | [PDF](<https://openreview.net/pdf?id=CwJk23BhSw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154526>)

A photorealistic and immersive human avatar experience demands capturing fine, person\-specific details such as cloth and hair dynamics, subtle facial expressions, and characteristic motion patterns\. Achieving this requires large, high\-quality datasets, which often introduce ambiguities and spurious correlations when very similar poses correspond to different appearances\. Models that fit these details during training can overfit and produce unstable, abrupt appearance changes for novel poses\. We propose a 3D Gaussian Splatting avatar model with a spatial MLP backbone that is conditioned on both pose and an appearance latent\. The latent is learned during training by an encoder, yielding a compact representation that improves reconstruction quality and helps disambiguate pose\-driven renderings\. At driving time, our predictor autoregressively infers the latent, producing temporally smooth appearance evolution and improved stability\. Overall, our method delivers a robust and practical path to high\-fidelity, stable avatar driving\.

## BudSplat: Feed\-forward 3D Gaussian Splatting under a Rendering Budget

**Authors:** MUYU XU; Fangneng Zhan; Yu Wei; Ling Shao; Shijian Lu

**ID:** 148823 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=urqSXSQAnY>) | [PDF](<https://openreview.net/pdf?id=urqSXSQAnY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148823>)

Feed\-forward 3D Gaussian Splatting has recently emerged as a promising alternative to per\-scene optimization, enabling fast novel view synthesis by predicting Gaussian primitives directly from input images\. However, it quickly faces a bottleneck of rendering efficiency while scaling from sparse to dense multi\-view inputs, which offer more geometric constraints but produce a rapidly growing set of candidate Gaussians\. Existing solutions cannot reliably distinguish redundant primitives, leading to many redundant primitives from repeatedly observed regions and increased rendering cost without much gain in visual quality\. We propose BudSplat, a compact feed\-forward 3DGS framework that learns to keep the most valuable Gaussians under a limited primitive count\. BudSplat has two novel designs\. The first is a detail\-aware importance score that is extracted from multi\-level visual tokens, providing an explicit cue for regions where pruning is likely to harm perceptual quality\. The score can be injected into voxel fusion to preserve high\-value local contributors during multi\-view aggregation\. The second is quality\-aware Gaussian pruning that selects a compact set of primitives by jointly considering rendering contribution and detail importance\. The quality\-aware pruning enables local quota redistribution that helps avoid over\-allocating primitives to large redundant regions\. Experiments on RE10K, DL3DV, and ACID show that BudSplat achieves a favorable trade\-off among rendering quality and efficiency\.

## Nature3D\-AD: Geometry\-Aware Feature Learning for Natural\-Growth 3D Anomaly Detection

**Authors:** Jian Ning; Qin Zou; Linchun Wu; Kunmo Li; Chi Chen; Zhen Dong; Bisheng Yang; Qingquan Li

**ID:** 151961 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WWUQ1mmWsN>) | [PDF](<https://openreview.net/pdf?id=WWUQ1mmWsN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151961>)

3D anomaly detection is a crucial process in agricultural production chains, playing a vital role in automated processing and ensuring food safety\. However, existing 3D anomaly detection datasets are primarily designed for industrial scenarios with standardized geometric shapes\. In contrast, agricultural products originate from natural growth, exhibiting significant variations in shape, size, and texture\. Consequently, the definition of "normal" is far less explicitly constrained than that of industrial components, rendering current industrial datasets and detection methods inadequate for this application\. To bridge this gap, we make contributions from both data and method perspectives\. On the data side, we introduce NaturalGrowth, the first dataset dedicated to agricultural point cloud anomaly detection\. On the method side, we propose Nature3D\-AD, which incorporates two novel modules\. Anomaly\-Sensitive Positional Encoding \(ASPE\) integrates local curvature and density information to provide geometry\-aware positional representations\. Geometry\-Aware Attention \(GAA\) injects geometric biases in the spatial domain and captures global structural patterns through a spectral FFT branch\. Extensive experiments on NaturalGrowth, Anomaly\-ShapeNet, and Real3D\-AD demonstrate that Nature3D\-AD achieves state\-of\-the\-art performance\. The dataset and code will be released\.

## BridgeMVS: Bridging Multi\-View Stereo and Monodepth via Bidirectional Dynamic Fusion

**Authors:** Jianfei Jiang; Qiankun Liu; Rui Yang; Haochen Yu; Hongyuan Liu; Xianglong Meng; Jiansheng Chen; Huimin Ma

**ID:** 151655 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z1iGG61Tr4>) | [PDF](<https://openreview.net/pdf?id=Z1iGG61Tr4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151655>)

Multi\-View Stereo \(MVS\) and Monocular Depth Estimation \(MDE\) provide complementary cues for dense 3D reconstruction\. MDE offers rich contextual and structural priors but lacks explicit geometric constraints, whereas MVS exploits multi\-view geometry but often struggles in ambiguous regions, such as weakly textured or reflective surfaces\. Existing MDE\-assisted MVS methods mainly use monocular cues in a unidirectional manner, leaving the interaction between monocular representations and multi\-view cost volumes insufficiently explored\. To address this limitation, we introduce BridgeMVS, a unified cascaded MVS framework that bridges monocular depth features and multi\-view cost\-volume representations through Bidirectional Dynamic Fusion \(BDF\)\. At each cascade stage, BDF performs dynamic mono\-to\-volume and volume\-to\-mono updates: monocular structural features are injected into cost\-volume regularization, while multi\-view geometric evidence recalibrates intermediate monocular representations\. The enhanced monocular features are propagated across stages together with MVS representations and supervised by stage\-wise monocular losses, establishing an auxiliary structural guidance path for the MVS branch\. Unlike stage\-isolated designs, BridgeMVS preserves fused representations from coarse to fine stages, allowing low\-resolution cross\-branch interactions to guide subsequent high\-resolution depth estimation\. Moreover, BDF is designed as a plug\-and\-play module and can be conveniently integrated into existing cascaded MVS frameworks\. Extensive experiments show that BridgeMVS achieves state\-of\-the\-art performance on the DTU, Tanks and Temples, and ETH3D benchmarks\.

## Quantitative Assessment of Crystal Structure Prediction

**Authors:** Sergio Rincón; Gabriel González; Nicolás Andrade; Rafael Velasquez; Sebastian Ojeda; Juanita Puentes; Nicolás Aparicio; Paula Cárdenas; Pablo Arbelaez

**ID:** 138999 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rtIvlv5N1r>) | [PDF](<https://openreview.net/pdf?id=rtIvlv5N1r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138999>)

Crystal Structure Prediction \(CSP\) aims to predict a material's 3D structure from its chemical composition, with applications from energy storage to pharmaceuticals\. Despite its importance, existing evaluation frameworks suffer from key limitations: they rely on threshold\-sensitive or incomparable metrics, focus predominantly on geometric performance while overlooking physical plausibility, and fail to account for polymorphism, where a chemical composition can crystallize into multiple stable structures\. In parallel, recent Symmetry\-Informed CSP \(SICSP\) methods often report results alongside standard CSP baselines while receiving crystallographic templates at inference, which constrain the search space and make SICSP a fundamentally different task\. To address these limitations, we introduce an Orientation\-invariant, Polymorph\-Aware, Large Benchmark \(OPAL\-Bench\) that evaluates CSP and SICSP as separate tasks\. We evaluate 7 CSP and 2 SICSP methods under OPAL\-Bench across 4 datasets using threshold\-free geometric and physical distance metrics\. Our results show that no method dominates across all metrics, and that geometric performance is not strongly correlated with physical plausibility\. Motivated by this gap, we provide OPAL\-CSP, an SE\(3\)\-equivariant flow\-matching baseline that performs competitively on geometric metrics and consistently ranks among the best on physical ones\. By unifying geometric and physical metrics under a polymorph\-aware protocol, OPAL\-Bench enables a more comprehensive assessment of generative quality in CSP\.

## CitySTAR: Agent\-Driven Structured and Topology\-Aware Reasoning for Open\-Vocabulary Urban 3D Grounding

**Authors:** Shuai Zhang; Hongye Hou; qinghe liu; Zhuoxiao Li; Dongli Wu; Jing OU; Yuan Liu; Wufan Zhao

**ID:** 151477 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aKAYRvEMRa>) | [PDF](<https://openreview.net/pdf?id=aKAYRvEMRa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151477>)

3D grounding aims to localize target entities in complex scenes from natural language and plays a fundamental role in embodied perception and spatial reasoning\. However, existing approaches mostly rely on feature similarity or direct matching, making it difficult to connect natural\-language intent with the implicit semantic and geometric structures hidden in billion\-scale urban point clouds\. We reformulate city\-scale 3D grounding as structured constraint reasoning, where description semantics are organized into computable cross\-modal constraints over open\-vocabulary 3D entities, attributes, and spatial relations\. We present CitySTAR, a training\-free framework for reasoning\-driven urban 3D grounding\. CitySTAR lifts raw billion\-scale urban point clouds into a query\-ready scene graph of open\-vocabulary 3D instances, with CodeLLM\-driven tools supplying multimodal evidence for node attributes and 3D spatial relations\. It then models target\-context topology with paired hypergraphs and performs bidirectional topology verification for structural disambiguation\. Finally, a Reflective Cross\-modal Grounding module integrates topology consistency and candidate\-centered 2D visual evidence to make decisions over a metric\-aware 3D context graph\. To further support this setting, we introduce CitySTAR\-3D, an enhanced benchmark that improves semantic coverage, instance completeness, bounding\-box fidelity, and spatial\-relation complexity in city\-scale 3D grounding\. Extensive experiments show that CitySTAR consistently improves open\-world urban 3D grounding while maintaining strong interpretability and generalization\.

## Chebyshev Differential Flows for Shape Matching and Interpolation with Endpoint Guidance

**Authors:** Jiin Im; Sisung Liu; Je Hyeong Hong

**ID:** 150678 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gIxG2mgvoJ>) | [PDF](<https://openreview.net/pdf?id=gIxG2mgvoJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150678>)

Estimating relationships between 3D shapes requires both dense endpoint correspondence and a deformation path connecting the source to the target\. These tasks are coupled: the correspondence constrains the interpolation endpoint, while a plausible trajectory can help disambiguate the map\. However, when only endpoint shapes are observed, the interior trajectory is under\-constrained\. Existing joint frameworks typically model interpolation through sampled per\-vertex displacements regularized by local rigidity or temporal smoothness, which can indirectly restrict the stretch and shear needed for non\-isometric or poorly aligned shape pairs\. We propose Chebyshev Differential Flows \(Chef\), an unsupervised framework that models motion as a continuous time\-varying field of per\-face Jacobians rather than vertex trajectories\. Each Jacobian trajectory is represented by a low\-order shifted Chebyshev expansion, yielding a compact arbitrary\-time deformation model whose odd and even modes separate endpoint\-visible deformation from endpoint\-invisible interior control\. A spectral functional\-map branch estimates the endpoint correspondence, while a differentiable Poisson solver integrates the predicted Jacobian field into globally consistent intermediate shapes\. We further introduce a trend regularizer that guides intermediate stretch and shear without imposing per\-snapshot As\-Rigid\-As\-Possible \(ARAP\) rigidity\. Experiments on near\-isometric and non\-isometric benchmarks show competitive correspondence accuracy, improved interpolation proxy metrics, and better stability when the standard rigid pre\-alignment step is omitted\. Code will be publicly released for research\.

## Extremely Sparse\-View Computed Tomography from 2D Projections via Pose\-Aware Diffusion Priors

**Authors:** Linrui Dai; Jinxiu Liang; Chu Zhou; Mae Yamaguchi; Ryuya Takahashi; Imari Sato

**ID:** 153894 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HvYYOiRYrE>) | [PDF](<https://openreview.net/pdf?id=HvYYOiRYrE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153894>)

Extremely sparse\-view computed tomography \(xSV\-CT\) is critical when scanning time, motion, or radiation tolerance limits each scan to only a few projections\. In many such scenarios, the same acquisition limits also constrain dataset construction, making pre\-reconstructed 3D volumes from dense scans unavailable\. This exposes a gap in current sparse\-view approaches: Optimization\-based methods, which use the sparse measurements directly but lack data\-driven priors to suppress artifacts, and learning\-based methods, which use strong priors but usually require densely scanned training volumes acquired outside the xSV\-CT regime\. We study this train\-sparse / infer\-sparse setting by learning a pose\-aware diffusion prior from one 2D projection per training sample, then guiding diffusion sampling with measured\-view fidelity, shared\-volume reprojection, and projection\-physics consistency for tomographic reconstruction\. On two public CT datasets across 1\-, 4\-, and 8\-view settings, the proposed method achieves the best novel\-view synthesis scores and best or competitive reconstruction quality compared with baselines that use dense\-volume supervision\.

## Geometry\-Aware Representation Denoising for Multi\-view Image Restoration and 3D Reconstruction

**Authors:** Jin Hyeon Kim; Jaeeun Lee; Claire Kim; Kyoungjin Oh; Paul H Cho; Jaewon Min; Yeji Choi; Jihye Park; Hyunhee Park; Park M Kyu; Hyungju Chun; Seungryong Kim

**ID:** 153365 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LvYWFrtR8k>) | [PDF](<https://openreview.net/pdf?id=LvYWFrtR8k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153365>)

Multi\-view 3D reconstruction has achieved remarkable progress with the advent of feed\-forward 3D reconstruction models\. However, these models are typically trained and evaluated under ideal, degradation\-free imaging conditions, whereas real\-world observations often contain various degradations that differ significantly from such settings\. Improving robustness for multi\-view 3D reconstruction under degraded conditions therefore remains an important challenge\. We present Geometry\-Aware Representation Denoising \(GARD\), a novel framework that performs diffusion\-based multi\-view restoration directly in the feature space of a feed\-forward reconstructor\. This design exploits the geometry\-aware feature representations of the reconstructor to effectively recover accurate scene geometry\. Furthermore, by employing a decoder, the refined representations can also be used to restore high\-quality RGB images, thereby enabling the simultaneous recovery of 3D scene geometry and high\-quality imagery\. Comprehensive experiments on the DA3 benchmark demonstrate the effectiveness of the proposed GARD framework\. Our code and weights will be publicly released for full reproducibility\.

## F2G\-Pose: Geometry\-Aware Foundation Feature Lifting for Direct RGB\-D Category\-Level Object Pose Estimation

**Authors:** Jinyu Zhang; Haitao Lin; Jiashu Hou; Xiangyang Xue; Yanwei Fu

**ID:** 150550 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hJJz7BT9Hr>) | [PDF](<https://openreview.net/pdf?id=hJJz7BT9Hr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150550>)

This paper studies category\-level RGB\-D object pose estimation, which recovers an object's 3D rotation and translation without instance\-specific CAD models or reference views\. This task is highly ambiguous due to intra\-class variations, symmetries, and partial observations\. Current solutions struggle to balance reliability and efficiency: deterministic methods are prone to error propagation from intermediate structures, while diffusion models suffer from high inference latency and complex post\-hoc candidate extraction\. To address this, we present F2G\-Pose, a real\-time direct, single\-pass framework that predicts category\-level pose, metric size, and camera\-frame completed shape from a single RGB\-D observation in one feed\-forward pass\. F2G\-Pose lifts dense visual foundation features to partial point clouds, encodes local geometry with DGCNN tokenization, and integrates object\-level structure with a Mixture\-of\-Experts Transformer\. Joint size prediction and camera\-frame shape completion encourage metric consistency through dense geometric supervision\. Trained only on synthetic SOPE data, F2G\-Pose achieves state\-of\-the\-art accuracy on SOPE and ROPE while running at 28 FPS, and further demonstrates strong camera\-frame geometry on HouseCat6D and real\-object transfer on HANDAL\. Analyses of latency, robustness, stability, shape completion, and GenPose\+\+ candidate behavior further demonstrate the efficiency and reliability of F2G\-Pose, with real\-world manipulation experiments demonstrating deployment potential under segmented RGB\-D inputs\.

## H2G: Hierarchy\-Aware Hyperbolic Grouping for 3D Scenes

**Authors:** Byungha Ko; Youngmin Lee; Dong Hwan Kim

**ID:** 155050 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8pIDwVyuXe>) | [PDF](<https://openreview.net/pdf?id=8pIDwVyuXe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155050>)

Hierarchical 3D grouping aims to recover scene groups across multiple granularities, from fine object parts to complete objects, without relying on semantic labels or a fixed vocabulary\. The main challenge is to transform 2D foundation\-model cues into coherent hierarchy supervision and embed that hierarchy in a 3D representation\. We propose H2G, a hyperbolic affinity field for hierarchical 3D grouping\. Our method derives semantically organized tree supervision by interpreting foundation\-model affinities through Dasgupta's objective for similarity\-based hierarchical clustering\. This supervision is distilled into a single Lorentz hyperbolic feature field, whose geometry is well suited for tree\-like branching structures\. A hierarchy\-aware objective aligns the field with fine\-level assignments, coarse object structure, compact feature clusters, and LCA \(Lowest Common Ancestor\) ordering\. This formulation represents multiple grouping levels in one feature space, enabling semantic hierarchical grouping grounded in 2D foundation\-model knowledge\.

## One Avatar, Any Budget: Robust LoD for Dynamic Gaussian Avatars

**Authors:** Haoyu Zhao; Wenjuan Gong; Junang Qi; Haiyu Zhang; Wenjian Zhao; Zimu YOU

**ID:** 150139 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kO5gQ83XI5>) | [PDF](<https://openreview.net/pdf?id=kO5gQ83XI5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150139>)

Cross\-device deployment of a single reconstructed avatar often requires adaptation to varying Gaussian budgets with minimal degradation in visual quality\. Motivated by the need for a robust budget\-adaptive 3D representation, we propose RobustAvatar, a train\-once Level\-of\-Detail \(LoD\) adaptation framework for dynamic Gaussian avatars based on sequential selection and compensation\. RobustAvatar supports flexible compression\-ratio control within a single trained avatar, without requiring fine\-tuning at each compression ratio\. The framework consists of two coordinated modules: Semantic Distribution\-Regularized Selection \(SDS\) and Canonical Budget\-Conditioned Compensation \(CBC\)\. SDS performs budget\-aware Gaussian selection guided by semantic distribution regularization, preserving the coverage of perceptually salient facial regions relative to the full avatar under constrained budgets\. CBC refines the selected primitives in a canonical, expression\- and pose\-neutral space by predicting ratio\-conditioned attribute residuals, reducing detail loss from Gaussian removal and improving robustness to decreasing Gaussian budgets\. Experiments on the NeRSemble dataset show that RobustAvatar achieves more robust budget adaptation than state\-of\-the\-art methods, with slower quality degradation as Gaussian budgets decrease\. The code will be made publicly available\.

## Gaussian Splatting\-based Volumetric Video Compression with Sparse 4D Anchors

**Authors:** Ge Gao; Siyue Teng; Changqi Wang; Fan Zhang; Nantheera Anantrasirichai; Jui\-Chiu Chiang; Wen\-Hsiao Peng; David Bull

**ID:** 154521 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CzTKz9ux3w>) | [PDF](<https://openreview.net/pdf?id=CzTKz9ux3w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154521>)

Immersive video communication requires photorealistic, render\-efficient, and compact dynamic scene representations\. 3D Gaussian Splatting \(3DGS\) offers a promising representation, but dynamic 3DGS remains difficult to compress due to dense primitives and spatiotemporal redundancy\. Anchor\-based formulations improve compactness with sparse scaffolds that share geometry and appearance across primitives\. However, existing designs often rely on deforming a single canonical scaffold and condition each primitive on its associated anchor in isolation, limiting their ability to handle non\-local dynamics and disocclusion while under\-exploiting inter\-anchor correlations, particularly in motion\- or texture\-dense regions\. To address these limitations, we propose SAGA, a volumetric video codec built upon Sparse Anchor\-assisted GAussian splatting representations\. SAGA represents dynamic 3D scenes using hierarchically organized sparse 4D anchors, where coordinate\-based INR decoders generate fine anchors and Gaussian primitives from inter\-anchor interpolations, enabling compact parameter sharing across spatiotemporal structures\. For long\-range dependencies among unstructured anchors, we further introduce fixed\-size memory slots with orthogonality\-informed updates for accurate entropy\-context modeling\. Experiments show SAGA outperforms the state\-of\-the\-art 3DGS\-based codec GIFStream, achieving BD\-rate reductions of 84\.54% on Neu3D, 76\.71% on Panoptic Sports, and 83\.94% on MPEG MIV\.

## M\-plicits: Neural Implicit Surfaces via Nested Multiscale Residuals

**Authors:** Vinícius Da Silva; Isabelle R de Melo; Matheus Levy de Lima Bessa; Guilherme Schardong; Luiz Schirmer; Andre Araujo; Nuno Gonçalves; HELIO C LOPES; Alberto Raposo; Luiz Velho; Tiago Novello

**ID:** 149918 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mE2QFHxNEV>) | [PDF](<https://openreview.net/pdf?id=mE2QFHxNEV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149918>)

Encoding input coordinates with sinusoidal functions into multi\-layer perceptrons \(MLPs\) has proven effective for implicit neural representations \(INRs\) of surfaces defined as zero\-level sets\. However, existing methods often struggle to balance training efficiency, rendering speed, and noise robustness: single\-MLP approaches are expensive at inference, grid\-based representations are fast but can limit surface smoothness and overfit input noise, and previous multiscale approaches frequently capture noise and produce artifacts due to hard spectral truncation\. To address these limitations, we propose M\-plicits, a multiscale framework that models surfaces as a residual sum of MLPs trained via a sequence of nested neighborhoods\. Unlike existing residual approaches that rely on standard domain\-wide sampling and require costly mesh extraction for visualization, our method strictly localizes supervision to narrow bands around the previous zero\-level sets\. This nested design naturally provides robustness against noisy input data: the coarse network acts as a low\-pass filter that establishes a clean geometric prior, while subsequent residuals progressively refine the geometry without fitting to high\-frequency artifacts\. We further introduce a multiscale sphere\-tracing algorithm and a GEMM\-based analytical normal computation that bypasses auto\-differentiation entirely, yielding high\-fidelity real\-time rendering\. On Stanford and Thingi32, M\-plicits achieves the best mean Chamfer distance in the coarse configuration and the best median Chamfer distance and IoU in the fine configuration, with substantially better noise robustness than iNGP, BACON, and IDF, while using an order of magnitude fewer parameters than grid\-based baselines\. Code and models will be released\.

## AEON: Unifying Video and 3D World Models

**Authors:** Weiqi Zhang; Wenyuan Zhang; Yu\-Shen Liu; Junsheng Zhou

**ID:** 148481 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xUa62w8E9i>) | [PDF](<https://openreview.net/pdf?id=xUa62w8E9i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148481>)

Current world models for explicit world simulation typically follow two distinct pathways: \(1\) video generative models \(e\.g\., Sora\), which simulate realistic appearances but fail to preserve 3D consistency; and \(2\) 3D generative models \(e\.g\., Marble\), which generate geometrically consistent scenes but often yield static, less realistic observations\. We present AEON, a unified framework that bridges video\-based and 3D\-based world models and combines the benefits of both\. The key insight of AEON lies in a generative model that operates within the video latent space while producing renderable 4D graphics primitives—specifically, 4D Gaussian Splatting \(4DGS\)—as the world modeler\. We train a 4D reconstruction model to predict both 4DGS and camera poses from monocular videos, serving as our initialized 4D decoder\. Furthermore, we design a domain adapter that translates generative video latents into reconstructive 4D latents through a distillation process on the video VAE\. AEON naturally supports video\-based world modeling by rendering 4DGS at predicted camera trajectories, and constructs a persistent 4D environment with scene dynamics for realistic world simulation\. Consequently, AEON empowers a diverse range of world modeling applications and achieves state\-of\-the\-art performance on standard benchmarks\.

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

## RPC\-GS: Gaussian Splatting with native RPC Rendering for Satellite Imagery

**Authors:** Valentin Wagner; Sebastian Bullinger; Christoph Bodensteiner; Michael Arens

**ID:** 155918 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1pXVfZYbAY>) | [PDF](<https://openreview.net/pdf?id=1pXVfZYbAY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155918>)

We present RPC\-GS, the first Gaussian Splatting framework for satellite imagery that operates natively with Rational Polynomial Camera \(RPC\) models\. The RPC model is the de facto standard for representing the complex imaging geometry of modern pushbroom satellite sensors\. To simplify rendering, prior satellite Gaussian Splatting methods replace the RPC model with perspective or affine camera approximations, leading to geometric errors during reconstruction\. RPC\-GS avoids these approximations by projecting Gaussian means and covariances directly through the RPC model during the splatting process\. We embed the RPC model in a chain of carefully selected geo\-coordinate transformations representing a mapping from splatting\-suitable scene coordinates to image coordinates\. To map the Gaussian covariance matrices, we derive a numerically robust Jacobian\-based covariance projection for the \(partially nonlinear\) coordinate transformations\. Since RPCs lack an explicit notion of camera depth, we integrate a metric ray\-based depth formulation\. We benchmark RPC, perspective, and affine camera models in a unified framework, with our native RPC renderer consistently achieving the lowest reconstruction error on leading satellite benchmark datasets, improving mean altitude error over perspective and affine approximations by 29\.6\\% and 63\.8\\% on DFC2019, and by 9\.9\\% and 37\.9\\% on IARPA2016\. We release our code to support future research of Gaussian Splatting in the satellite imaging domain\.

## No Pose, No Problem in 4D: Feed\-Forward Dynamic Gaussians from Unposed Multi\-View Videos

**Authors:** Matteo Balice; Yanik Künzi; Chenyangguang Zhang; Matteo Matteucci; Marc Pollefeys; Sunghwan Hong

**ID:** 155864 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2KlxKfG6ly>) | [PDF](<https://openreview.net/pdf?id=2KlxKfG6ly>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155864>)

Recent feed\-forward 3D gaussian splatting methods have made dramatic progress on individual aspects of 3D scene reconstruction, but no existing method jointly addresses dynamic content, multi\-view input, and unknown camera poses in a single feed\-forward pass\. Methods that handle dynamics either require accurate camera poses or accept only monocular input; pose\-free multi\-view methods address only static scenes; and per\-scene optimization methods bridge some of these gaps but at minutes\-to\-hours cost per scene\. We introduce NoPo4D, the first feed\-forward system that addresses this empty quadrant\. Building on a pretrained geometry backbone and recent 4D Gaussian frameworks, NoPo4D introduces a velocity decomposition that splits Gaussian motion into per\-pixel image\-plane shifts and depth changes, allowing direct supervision from pseudo ground\-truth optical flow on the 2D component\. This sidesteps both the differentiable rendering that couples prior posed methods to pose accuracy and the 3D motion ground truth that prior pose\-free methods require\. The system is rounded out by a bidirectional motion encoder for cross\-view and cross\-frame feature aggregation, and view\-dependent opacity that mitigates cross\-view and cross\-timestep Gaussian misalignments\. On four multi\-view dynamic benchmarks, NoPo4D consistently outperforms prior feed\-forward baselines, and with an optional post\-optimization stage surpasses per\-scene optimization methods, while running orders of magnitude faster\. Code and the pretrained weights will be made publicly available\.

## PhyMo: Learning Physical Dynamics with Accurate and Continuous Motion from Multi\-View Videos

**Authors:** Shangjia Liu; Jinxi Li; Siyuan Zhou; Bo Yang; Bing WANG

**ID:** 154704 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BfBnHowvB9>) | [PDF](<https://openreview.net/pdf?id=BfBnHowvB9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154704>)

Recovering dynamic 3D scene geometry, appearance, and the physical motion states that govern scene evolution from multi\-view videos is important yet challenging\. A key difficulty is that appearance can be deceptive\. When trained primarily with rendering supervision, existing methods may fit the observed appearance well by exploiting appearance shortcuts, rather than recovering the true evolving geometry and motion\. This issue is especially severe in scenes with fast or locally complex motion, where inaccurate trajectories can still produce plausible images over the observed frames, but lead to unreliable reconstruction and discontinuous future prediction\. In this paper, we propose PhyMo, a framework for learning evolving dynamics from multi\-view videos\. We introduce a Motion\-Aware Trajectory Representation that drives the model to recover accurate motion from deformation, rather than relying on appearance shortcuts to explain observed motion\. On top of this, we propose a Continuous Motion Evolution module with bidirectional kinematic continuity constraint to promote temporally consistent evolution of displacement, velocity, and acceleration\. Together, these designs yield geometrically faithful interpolation and continuous motion extrapolation\. Experiments on four dynamic scene benchmarks demonstrate state\-of\-the\-art performance\.

## FoundSurface: Feedforward Ray\-Based 3D Scene Surface Reconstruction from Unposed Images

**Authors:** Shenxing Wei; Jinxi Li; Zihui Zhang; Ajay Kumar; Wei Wang; Bo Yang

**ID:** 149835 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mwnXqnBf8n>) | [PDF](<https://openreview.net/pdf?id=mwnXqnBf8n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149835>)

Accurate 3D surface reconstruction from unposed images remains a fundamental challenge in computer vision\. Recent feed\-forward pointmap methods eliminate the need for camera poses but inherently produce discrete, sparse representations\. In this paper, we present a generalizable pipeline that directly recovers continuous, high\-fidelity 3D surfaces from unposed images by seamlessly integrating pointmap\- and ray\-based representations\. Our approach first extracts explicit geometric priors using a pre\-trained pointmap model\. A query\-view\-centric selection module then identifies geometrically relevant reference views via a robust surfel voting mechanism\. Next, a cross\-attention regressor bridges target query rays with reference features to estimate a continuous coarse surface\. Finally, a raylet\-based module aggregates local 3D features to carve out high\-frequency details and analytical normals\. Trained as a single foundation model on 9 diverse datasets, our method demonstrates exceptional zero\-shot generalization on 6 unseen datasets, clearly surpassing state\-of\-the\-art baselines in geometric accuracy and detail preservation\.

## Pygmalion: Bridging Reconstruction and Generation in Sparse Voxel\-based 3D Modeling

**Authors:** Guan Luo; Jing Lin; Xuanyu Yi; Jiahang Liu; Song\-Hai Zhang; Jianfeng Zhang

**ID:** 150491 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hhzuYjosC2>) | [PDF](<https://openreview.net/pdf?id=hhzuYjosC2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150491>)

Recent advances in sparse voxel\-based VAEs have demonstrated remarkable capabilities in high\-fidelity 3D autoencoding, yet their generative counterparts consistently lag behind their reconstruction performance\. A fundamental cause of this gap lies in the \\emph\{brittle output representation\} in sparse voxel decoders, which parameterize geometry through discrete topological decisions, such as intersection flags or occupancy signs\. Small perturbations in these parameters, which are unavoidable under diffusion sampling, can be amplified into abrupt topological ruptures and grid\-like artifacts\. We argue that a generation\-friendly representation should ensure that such perturbations induce only smooth geometric transitions\. To this end, we propose Pygmalion, a generation\-friendly autoencoding framework that reformulates sparse voxel decoding as a coupled SDF parameterization\. To retain explicit mesh\-level supervision within this parameterization, which is non\-trivial as the SDF jointly governs both topology and geometry, we introduce hinge\-based sign correction, case\-aware geometry supervision, and rendering\-based refinement, achieving high\-fidelity reconstruction while preserving generative robustness\. Built upon this generation\-friendly representation, Pygmalion scales consistently across DiT model sizes and voxel resolutions\. Extensive experiments demonstrate state\-of\-the\-art reconstruction fidelity and high\-quality 3D generation with complete surfaces, sharp features, and fine geometric details\.

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

## StructBridge: Structure\-Grounded 3D Indoor Object Generation via 3D Latent Diffusion Bridge and Normal Refinement

**Authors:** Nange Wang; Zhanxu Bai; Yuxuan Li; Cewu Lu; Jianhua Sun

**ID:** 154515 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D0YUN8U2RL>) | [PDF](<https://openreview.net/pdf?id=D0YUN8U2RL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154515>)

Generating 3D indoor objects under fine\-grained structural control is crucial and has broad applications in robotics, gaming, and simulation\. Such fine\-grained structural control encompasses an object’s spatial layout, geometric icons, and relative size, which together constitute the object’s core structural properties\. However, existing controllable 3D generation methods do not take structural control as a primary objective, and they commonly rely on suboptimal conditions in representing structure or inadequate algorithms for maintaining structural consistency\. Therefore, they fail to achieve fine\-grained structural control during generation\. To address this, we present structure\-grounded 3D object generation, a novel perspective on 3D object generation, which decomposes 3D shapes into structural configurations and geometric details, directly conditions on the object’s structural configurations and synthesizes realistic geometric details to produce high\-quality 3D objects\.  Building on this perspective, we introduce StructBridge, which first employs a diffusion bridge in the 3D latent space to transform comprehensive structural conditions into structurally accurate coarse meshes, followed by a structure\-preserving normal refiner that enriches geometric details while preserving structure\. We conduct extensive experiments and comprehensive comparisons with various conditional generation methods, demonstrating that StructBridge achieves state\-of\-the\-art performance in both generation quality and structural control capabilities\.

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

**ID:** 155977 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1PQ7pf3kVm>) | [PDF](<https://openreview.net/pdf?id=1PQ7pf3kVm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155977>)

Feed\-forward 3D reconstruction models have demonstrated strong generalization under large\-scale pre\-training, yet they struggle in long\-tail scenarios such as low\-light reconstruction, joint human\-scene reconstruction, and test\-time adaptation\.  We observe relational attention structure collapse, manifested as the failure of cross\-view correspondences, as a primary cause of these limitations\. While adaptation offers a practical way to bridge this gap, existing parameter\-efficient fine\-tuning \(PEFT\) approaches mainly perform channel\-wise feature adjustment and lack mechanisms to explicitly adapt relational structures, leaving correspondence failures unresolved\. In this work, we formulate adaptation of 3D reconstruction models as a problem of correspondence recovery under domain shift and propose 3R\-Adapter, a PEFT paradigm for long\-tail 3D reconstruction scenarios\. Our method consists of three components: Deformable Retrieval for task\-adaptive relation candidate retrieval, Relational Rewiring for reconstructing cross\-view relational structures, and Consistency Refinement for injecting the rewired relations into stable predictions\. Extensive experiments on low\-light reconstruction, joint human\-scene reconstruction, and test\-time adaptation demonstrate that our approach significantly improves robustness over existing PEFT methods while maintaining efficient lightweight adaptation\.

## GHOST: Geometry\-Hierarchical Online Streaming Token Eviction for Efficient 3D Reconstruction

**Authors:** Leyang Chen; Junyi Wu; Zhiteng Li; Yulun Zhang

**ID:** 149354 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qhHNkQs6l0>) | [PDF](<https://openreview.net/pdf?id=qhHNkQs6l0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149354>)

Streaming 3D reconstruction from long monocular video sequences requires maintaining a key\-value\(KV\) cache that grows linearly with sequence length, creating a severe memory bottleneck\. Existing approaches either truncate the cache to a fixed set of anchor frames, leading to reconstruction quality degradation, or rely on attention\-score heuristics that are agnostic to 3D scene structure,failing to preserve geometrically valuable  tokens\. To address these problems, we present GHOST \(Geometry\-Hierarchical Online Streaming Token Eviction\), a training\-free KV cache management framework that exploits the model's own 3D geometry outputs to  evict redundant tokens online\. GHOST introduces three mutually reinforcing innovations: a hierarchical dual\-level importance scoring scheme, a privilege mechanism that protects special tokens from eviction, and a cosine\-similarity\-guided layer\-wise budget allocation\. Experiments on various benchmarks show that GHOST preserves excellent reconstruction quality while cutting the KV cache by nearly half and delivering $1\.75\\times$ faster inference compared to state\-of\-the\-art methods\. Our code and model will be available to the public\.

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

## $\\alpha$Depth: Learning Single\-Pass Soft Boundary Decomposition for Stereo Conversion

**Authors:** Xiang Zhang; Yang Zhang; Lukas Mehl; Karlis M Briedis; Markus Gross; Christopher Schroers

**ID:** 154295 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EmsqCfKK01>) | [PDF](<https://openreview.net/pdf?id=EmsqCfKK01>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154295>)

Accurately modeling soft boundaries, e\.g\., hair and defocus blur, is a fundamental challenge in stereo conversion due to the ambiguous blending of foreground and background\. Existing depth models primarily predict single\-layer depth, leading to ambiguity in depth correspondence at soft boundaries\. While matting techniques can capture opacity for layered modeling, they often struggle in complex scenes with multiple targets and usually require user intervention\. This paper introduces $\\alpha$Depth, a layered representation that decomposes soft boundaries for high\-fidelity stereo conversion\. Specifically, we first resolve mixed color and depth ambiguity by estimating layered color and depth values at soft boundaries\. Considering complex multi\-target scenes, we design a Circular Alpha Representation \(CAR\) that shifts the paradigm from global target extraction to local boundary decomposition\. Unlike prior matting methods restricted to a single foreground/background, CAR enables efficient scene\-level inference without manual guidance\. Extensive evaluations demonstrate that $\\alpha$Depth achieves state\-of\-the\-art performance in stereo conversion, eliminating background bleeding and structural distortions at soft boundaries\.

## Not All Tasks Quantize Equally: Fisher\-Guided Quantization for Visual Geometry Transformer

**Authors:** Yipu Zhang; Jintao Cheng; Weilun Feng; Jiehao Luo; Chuanguang Yang; Zhulin An; Yongjun Xu; Wei Zhang

**ID:** 151378 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b31hQvoPCd>) | [PDF](<https://openreview.net/pdf?id=b31hQvoPCd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151378>)

Feed\-forward 3D reconstruction models, represented by Visual Geometry Grounded Transformer \(VGGT\), jointly predict multiple visual geometry tasks such as depth estimation, camera pose prediction, and point cloud reconstruction in a single forward pass\. They have been widely adopted in 3D vision applications, but their billion\-scale parameters bring substantial memory and computation overhead, posing challenges for on\-device deployment\. Post\-Training Quantization \(PTQ\) is an effective technique to reduce this overhead\. Existing PTQ methods for feed\-forward 3D models mainly focus on handling heavy\-tailed activation distributions and constructing diverse calibration datasets\. However, we observe that feed\-forward 3D models predict multiple geometric attributes through a shared backbone, where different transformer blocks and hidden channels contribute distinctly to each task, resulting in substantially different sensitivities to quantization errors across tasks, blocks, and channels\. Consequently, treating all tasks equally over\-emphasizes insensitive tasks and causes significant accuracy loss on the sensitive ones\. To address this issue, we propose Fisher\-Guided Quantization \(FGQ\) for feed\-forward 3D reconstruction models\. Specifically, FGQ uses the diagonal Fisher information matrix to quantify the different sensitivities across tasks, blocks, and channels, and incorporates these sensitivities into the Learnable Affine Transformation during calibration to better preserve the channels and blocks most critical to each task\. Extensive experiments across camera pose estimation, point map reconstruction, and depth estimation show that FGQ consistently outperforms state\-of\-the\-art quantization baselines on VGGT, achieving up to 39\\% relative improvement under the 4\-bit quantization\.

## Training\-Free 3D Editing via Feature\-Divergence Localization and Trajectory Correction

**Authors:** Tri Ton; Siwoo Lim; Joshua Tian Jin Tee; Chang Yoo

**ID:** 155326 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6StcC3knUL>) | [PDF](<https://openreview.net/pdf?id=6StcC3knUL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155326>)

Modifying 3D assets requires enacting targeted structural transformations while strictly preserving the geometric identity of unedited regions\. While recent probability flow models enable training\-free editing, bounding these modifications within a high\-dimensional latent space presents severe mathematical challenges\. Current inversion\-free trajectories rely on global velocity updates, which consistently result in spatial bleed into preserved structures and induce trajectory under\-commitment, causing edits to stall mid\-path\. To resolve these dual failures, we introduce FocusFlow, a segmentation\-free framework that structures the integration trajectory into two disjoint phases\. During early coarse structure formation, FocusFlow applies Feature\-Divergence Localization \(FDL\) to spatially gate the velocity field using intrinsic cross\-attention\. During late\-stage fine\-detail refinement, Reference\-Guided Generation \(RGG\) drives topological convergence by pulling the trajectory toward an explicit clean\-latent target\. Evaluated on the joint Google Scanned Objects and PartObjaverse\-Tiny benchmarks, FocusFlow breaks the traditional preservation\-modification trade\-off\. It achieves superior structural preservation while maximizing edit magnitude\. By providing stable, localized geometric control without manual spatial annotations, this phase\-scheduled approach removes significant technical barriers to the precise modification of synthetic 3D media\.

## GEMS\-3D: A Large\-Scale 3D Gravity, Electrical, Magnetic, and Seismic Earth Simulation Dataset for Multimodal Geophysical Learning

**Authors:** Yonghao Wang; Meijia Huang; Wenkai Lu; Zhuo Jia; Hao Feng; Leyuan Fang

**ID:** 139492 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MT3yCT6JKb>) | [PDF](<https://openreview.net/pdf?id=MT3yCT6JKb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139492>)

Accurate characterization of deep subsurface structures is a fundamental problem in geoscience, but geophysical inversion is inherently non\-unique and therefore requires joint interpretation of gravity, magnetic, electromagnetic, and seismic observations\. Despite recent advances in deep learning for geophysical inversion and PDE\-based scientific modeling, existing large\-scale open datasets are largely limited to a single modality and rarely provide physically consistent multi\-source responses generated from the same 3D geological target\. This limitation hinders the development and evaluation of multimodal joint inversion methods for deep subsurface characterization\. We introduce GEMS\-3D, a large\-scale synthetic benchmark for 3D geological multiphysics learning\. GEMS\-3D couples four forward modeling engines—$\\textbf\{g\}$ravity, $\\textbf\{e\}$lectromagnetic, $\\textbf\{m\}$agnetic, and 3D acoustic $\\textbf\{s\}$eismic—to generate sample\-aligned observations from shared geological realizations\. Guided by facies\-aware rock\-physics relationships, the dataset provides spatially aligned volumes of P\-wave velocity \($v\_p$\), density \($\\rho$\), resistivity \($\\phi$\), and magnetic susceptibility \($\\chi$\) across nine representative classes of complex geological anomalies, including dike swarms, salt domes, and gas reservoirs\. Each sample includes gravity responses, magnetic responses, electromagnetic responses, and 3D acoustic seismic data, together with acquisition metadata and anomaly labels\. By packaging co\-registered property volumes, anomaly support, acquisition metadata, and aligned multiphysics responses as sample\-level bundles, GEMS\-3D provides a unified benchmark for operator learning, multimodal inverse interpretation, and missing\-modality robustness in deep subsurface settings\. The anonymized forward\-modeling framework and corresponding dataset link is available at https://anonymous\.4open\.science/r/GEMS\-3D\-E4CA\.

## Fine\-Detail Monocular Geometry Estimation with Self\-Guided Sparse Volumetric Refinement

**Authors:** Lingyu Kong; Ruicheng Li; Ruicheng Wang; Sicheng Xu; Chengtang Yao; Jianfeng Xiang; Jiaolong Yang

**ID:** 154731 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BRrUZAHdaI>) | [PDF](<https://openreview.net/pdf?id=BRrUZAHdaI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154731>)

Monocular geometry estimation has recently achieved impressive performance across diverse scenes\. However, state\-of\-the\-art models still face notable distortion in local 3D structure, especially in fine details, like thin structure and small objects\. We attribute this limitation to an architectural mismatch: most current models decode 3D geometry within a 2D parameterization, where feature interactions are governed by image\-plane proximity rather than true 3D spatial relationships\. This inadvertently mixes features from geometrically distant surfaces, resulting in over\-smoothed geometry particularly around thin or elongated structure\. In this paper, we propose a fine\-detail monocular geometry estimation with Self\-Guided Sparse 3D Refinement \(SSR\) that lifts monocular geometry modeling from 2D image space to 3D space for high\-fidelity metric\-scale point map\. Our model lifts the coarse point map from a foundation base model onto a sparse voxel shell and refines it via SSR\. The SSR employs sparse convolutions that aggregate features based on 3D spatial locality, avoiding feature mixing across depth discontinuities\. Extensive experiments on diverse datasets demonstrate that our method significantly outperforms existing approaches in recovering fine detailed 3D geometry across both quantitative metrics and qualitative visualizations\.

## ElasticFit: Fit\-Aware 3D Object Insertion via VLM Reasoning and Generative Adaptation

**Authors:** Tzu\-Hsin Hsieh; Ricardo Marroquim

**ID:** 154563 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CfdFtFxZHH>) | [PDF](<https://openreview.net/pdf?id=CfdFtFxZHH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154563>)

Inserting objects into existing 3D scenes requires more than selecting a plausible location:     The inserted object must also fit local geometry while preserving semantic intent and physical plausibility\.     Although recent Vision\-Language Models \(VLMs\) and generative models enable semantic reasoning and visual content creation, they offer limited 3D grounding and geometric control when an inserted object must fit into constrained local spaces\.     We introduce ElasticFit, a VLM\-guided framework for fit\-aware object insertion centered on a novel scene\-grounded representation\.     Given a language instruction and rendered scene observations, ElasticFit infers structured fitting cues that specify where the object should be grounded, what volume it should occupy, how it should be oriented, and its adaptation mode \(rigid placement, uniform scaling, or elastic deformation\)\.     These cues convert high\-level VLM reasoning into explicit 3D constraints that condition object generation and guide downstream geometric fitting\.     ElasticFit then generates a scene\-conditioned object prior, reconstructs it in 3D, and refines the mesh through mode\-specific fitting while enforcing collision avoidance, contact consistency, and physical grounding\.     In fixed\-asset baseline comparisons, ElasticFit improves spatial relation success from 50\.8\\% to 69\.7\\% and support success from 48\.3\\% to 91\.7\\% over the strongest baseline, while providing novel support for generative "make\-it\-fit" insertions in complex scenarios\.

## Scaffold3D: SfM\-Conditioned Pointmap Prediction for Multi\-View 3D Reconstruction

**Authors:** Frano Rajič; Yutong Chen; Haofei Xu; Zador Pataki; Marc Pollefeys; Siyu Tang

**ID:** 148928 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uB3FRnvIAd>) | [PDF](<https://openreview.net/pdf?id=uB3FRnvIAd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148928>)

Multi\-view 3D reconstruction is increasingly driven by feed\-forward models, which are fast and robust but often imprecise or globally inconsistent across views, especially in sparse\-view and low\-overlap settings\. Structure\-from\-motion \(SfM\) offers a complementary geometric signal through camera poses and sparse 3D points estimated by correspondence filtering and optimization\. To propagate this globally consistent \\emph\{SfM scaffold\} into dense geometry, we introduce \\textbf\{Scaffold3D\}, an SfM\-conditioned reconstruction framework that injects image patch\-aligned SfM point tokens into a pairwise feed\-forward pointmap predictor\. Our approach preserves image\-token reasoning while using explicit SfM structure to condition dense prediction\. Since pairwise pointmaps are predicted in local frames, we fuse them with global alignment and an SfM anchoring term\. Across established benchmarks \(ScanNet\+\+, ETH3D, and Tanks\\&amp;Temples\) and out\-of\-domain data \(4D\-DRESS and MV\-dVRK\), Scaffold3D achieves stronger overall performance than feed\-forward reconstruction models, point\-token propagation, depth\-completion baselines, and recent geometry\-conditioned models\. The gains are especially clear in low\- and no\-overlap evaluations\. Our two\-view SfM\-conditioned pointmap predictor also outperforms several multi\-view geometry\-conditioned baselines, indicating that how geometric inputs are fused with image\-token reasoning is as important as the number of conditioned views\. Together, these results establish SfM\-scaffold conditioning as a practical interface between learned pointmap prediction and classical geometric optimization\.

## Spik\-NeRF v2: Pushing the Limit of Spiking Neural Radiance Fields with $ \\pm $I\-LIF

**Authors:** Chen Cheng; Qinlong Lan; Gang Wan; Hao Guo; Lei Liu; Zhanji Wei; Wu Yitian; Yufei Guo

**ID:** 152358 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TgMxtkRB75>) | [PDF](<https://openreview.net/pdf?id=TgMxtkRB75>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152358>)

Spiking Neural Networks \(SNNs\) offer a promising energy\-efficient alternative to Artificial Neural Networks \(ANNs\) through event\-driven, multiplication\-free computation\. However, when applied to downstream tasks such as Neural Radiance Fields \(NeRF\), SNNs suffer from significant information loss, resulting in a noticeable performance gap\. In this paper, we present \\textit\{Spik\-NeRF v2\} to advance SNN\-based neural rendering\. We propose the $\\pm$I\-LIF spiking neuron, which extends I\-LIF to support signed integer values during training, thereby mitigating information loss\. During inference, it is converted to ternary spikes $\\\{\-1, 0, 1\\\}$, preserving event\-driven properties with addition\-only operations\. Furthermore, we introduce a re\-parameterization technique that transforms a trained I\-LIF\-based Spik\-NeRF with $t$ timesteps into an equivalent $\\pm$I\-LIF\-based model with $t/2$ timesteps\. This enables faster inference while preserving rendering quality, overcoming the suboptimal performance of directly trained $\\pm$I\-LIF models with reduced timesteps\. Extensive experiments on synthetic and realistic datasets demonstrate that Spik\-NeRF v2 surpasses existing SNN\-based NeRF methods and achieves rendering quality comparable to ANN\-based approaches\.

## T$^2$\-Splat: Adaptive Topology Mesh Splatting with Texture Residuals

**Authors:** Zhihao Tang; Youjia Zhang; Mingbo Zhao; Wei Yang

**ID:** 152792 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QJlQ53FLTo>) | [PDF](<https://openreview.net/pdf?id=QJlQ53FLTo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152792>)

Triangle\-based splatting has emerged as a promising bridge between high\-quality novel view synthesis and traditional graphics pipelines\. However, naively applying unstructured splatting mechanisms to polygonal primitives fails to exploit their inherent topological advantages, leading to over\-tessellation and degraded high\-frequency appearances\. To address, we present T$^2$\-Splat, a mesh splatting framework with adaptive topology and texture optimization\. We introduce progressive edge\-collapse and vertex\-split operations to adaptively allocate triangle primitives, reducing face count while preserving well\-conditioned connectivity\. We further propose a scale\-aware residual Mip\-texture model to decouple appearance from geometry, for providing the topology with flexibility needed to safely collapse redundant triangles without introducing blurring or aliasing\. Experiments on the Mip\-NeRF 360, Tanks \\&amp; Temples, and DTU benchmarks demonstrate that T$^2$\-Splat improves PSNR by \+0\.87 dB and maintains robust visual fidelity even under aggressive mesh compression to 10\\% of the original face count\.

## Anchor3DGS: Feed\-Forward 3D Gaussian Splatting with Compact Anchor\-Based Representation

**Authors:** Sheng Ye; Jiangke Lin; Fudong Wang; Yi Yuan; ZhenHui Dong; Yong\-jin Liu

**ID:** 152132 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VHM6LwnWRO>) | [PDF](<https://openreview.net/pdf?id=VHM6LwnWRO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152132>)

Recent feed\-forward 3D Gaussian Splatting \(3DGS\) methods have enabled effective multi\-view 3D reconstruction by predicting Gaussian primitives in a single forward pass\. However, existing approaches predominantly adopt a pixel\-aligned paradigm that predicts one Gaussian per input pixel, coupling the Gaussian count to the input resolution and number of views\. This also leads to redundant primitives in textureless regions and insufficient coverage in geometrically complex areas\. We present Anchor3DGS, a pose\-free feed\-forward 3DGS framework that replaces pixel\-aligned prediction with a compact anchor\-based representation\. Guided by information entropy, our method places a set of 3D anchors in the scene, concentrating them in regions of higher visual complexity while maintaining broad spatial coverage\. Each anchor performs occlusion\-aware aggregation of multi\-view image features, exchanges information with other anchors, and is decoded into a set of local Gaussians\. A lightweight feature enhancement module further refines the coarse RGB output from Gaussian splatting and improves rendering fidelity\. Extensive experiments on diverse benchmark datasets demonstrate that our Anchor3DGS achieves state\-of\-the\-art novel view synthesis quality while only using an order of magnitude fewer Gaussian primitives\.

## State Evolution Awareness for Category\-agnostic 3D Point Cloud Tracking

**Authors:** Xiantao Hu; Ying Tai; Jinxia Xie; Bineng Zhong; Guangwei Gao; Jianjun Qian; Jian Yang

**ID:** 151275 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bbSXfWRCKv>) | [PDF](<https://openreview.net/pdf?id=bbSXfWRCKv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151275>)

Existing 3D point cloud tracking methods have not fully exploited temporal information in point cloud sequences, making it difficult to effectively capture the continuous evolution of target states and thereby limiting tracking stability in scenarios with large cross\-category geometric variation\. To address this issue, we propose TETrack3D, a framework for category\-agnostic 3D point cloud tracking\. The core idea of TETrack3D is to elevate temporal information from an auxiliary cue to an explicit learning constraint for cross\-frame association\. Specifically, we introduce a historical feature reuse mechanism to preserve and reuse target\-related features accumulated over multiple frames, enabling the association process in the current frame to access richer and finer\-grained historical context\. We further design a state evolution supervision module, which guides the model to learn temporally consistent target motion patterns from historical observations by predicting future target states\. In addition, to alleviate cross\-frame feature drift caused by target\-state changes in point cloud sequences, we propose a temporal distribution alignment strategy based on optimal transport theory, which constrains target features across adjacent frames at the distribution level and improves the stability of temporal target modeling\. Extensive comparative experiments on KITTI, nuScenes, and Waymo demonstrate that explicitly modeling the target\-state evolution process effectively improves the localization robustness of 3D object tracking\.

## PosePlaner: Denoising Any Feedforward Pose Predictor from Pairwise Planar Geometry

**Authors:** Yihang Chen; Bin Tan; Yujun Shen; Yinghao Xu; Nan Xue

**ID:** 148270 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z6VEPNL9Hx>) | [PDF](<https://openreview.net/pdf?id=z6VEPNL9Hx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148270>)

Recent multi\-view Transformers \(e\.g\., DUSt3R and VGGT\) have advanced 3D reconstruction by scaling training data and model capacity from two views to many views and long sequences, subsuming the classical SfM/SLAM pipeline of feature extraction, matching, and pose estimation in a single feedforward pass\. Yet this subsumption hides the interfaces between pipeline stages\-\-\-correspondences, geometry, and pose are entangled in a single forward pass, \*\*leaving supervised fine\-tuning as the major path\*\* to improvement and offering no mechanism to correct predictions from geometric evidence at test time\. We propose PosePlaner to close this gap by reviving the classical coupling between correspondences and pose via flow matching, treating pose refinement as a conditional generation problem that takes coarse geometric matches and initial pose as input condition and fuses the resulting pose hypotheses into a single refined estimate, providing a continuous, data\-driven analogue of RANSAC voting\. Our method is trained efficiently on two\-view data, yet serves as a periodic refiner for streaming n\-view pose estimators with no retraining\. Empirically, it corrects failures of feedforward predictors, substantially improves correspondence\-based solvers, and reduces accumulated drift in long streaming sequences\.

## Concord\-SLAM: Cross\-Render Concordance for Boundary\-Native Semantic Gaussian SLAM

**Authors:** Danqi Lu; Changxin Huang; Jianqiang Li

**ID:** 154365 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E76LuXwjD6>) | [PDF](<https://openreview.net/pdf?id=E76LuXwjD6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154365>)

Three\-dimensional Gaussian Splatting \(3DGS\) has recently become a promising representation for dense SLAM, due to its explicit scene parameterization, efficient differentiable rendering, and high\-quality visual reconstruction\. Extending 3DGS to semantic SLAM enables the construction of maps that are not only geometrically accurate but also semantically interpretable\. However, existing semantic Gaussian SLAM methods usually optimize semantic, depth, and normal renderings through separate supervision objectives\. Such a design underexplores the fact that these outputs are generated from the same Gaussian field and should therefore provide a concordant explanation of the underlying scene structure\. This limitation is especially problematic around object boundaries and geometric discontinuities, where inaccurate Gaussian growth can cause cross\-boundary expansion, boundary blurring, and semantic leakage\. To address this problem, we propose Concord\-SLAM, a boundary\-native semantic Gaussian SLAM framework that establishes concordance among semantic, depth, and normal renderings while promoting boundary\-aware Gaussian growth\. Our framework contains two key components\. First, Cross\-Render Concordance \(CRC\) jointly examines semantic, depth, and normal views rendered from the same Gaussian map, and converts their structural discrepancies in boundary responses, regional continuity, and local geometry into optimization signals\. In this way, disagreement among different renderings is used as an intrinsic cue for improving the semantic\-geometric coherence of the Gaussian field\. Second, Boundary\-Native Splatting \(BNS\) actively inserts new Gaussians near semantic boundaries, depth discontinuities, and salient geometric variations, encouraging primitives to align with physical and semantic boundaries during map construction rather than correcting boundary mixing only through later optimization\. Experiments on Replica and ScanNet demonstrate that Concord\-SLAM achieves superior performance in camera tracking, scene reconstruction, and semantic mapping\.

## SpatialBench: Is Your Spatial Foundation Model an All\-Round Player

**Authors:** Haosong Peng; Hao Li; jiaqi chen; Yuhao Pan; Runmao Yao; Yalun Dai; Fushuo Huo; Fangzhou Hong; Zhaoxi Chen; Haozhao Wang; Dingwen Zhang; Ziwei Liu; Wenchao Xu

**ID:** 139780 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5Fvw97JTqm>) | [PDF](<https://openreview.net/pdf?id=5Fvw97JTqm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139780>)

While spatial foundation models have demonstrated impressive performance on standard datasets, a critical question remains: are they truly \\textbf\{\\textit\{all\-round players\}\} capable of generalizing robustly across diverse downstream tasks, arbitrary viewpoints, shifting scene domains, varying input densities, and specific hardware constraints? Answering this overarching question requires a holistic assessment, yet current models are mainly evaluated on specific domains for which they were specifically designed or trained\.  Such evaluations are intrinsically limited by narrow paradigm coverage, limited scene domains, and arbitrary frame sampling, making it fundamentally difficult to assess their true generalization capabilities\. To address this gap, we present SpatialBench, a cross\-paradigm, domain\-diverse benchmark for spatial foundation models with deterministic sampling\. SpatialBench features unprecedented scale and rigorous deterministic design, comprising 19 datasets and 546 scenes across 5 diverse spatial domains\. It comprehensively evaluates 41 models across 6 paradigms on 5 task suites under 4 different input density settings\. Our extensive evaluation reveals that current models are not yet all\-round players, and uncovers crucial insights for future advancement\. Specifically, we demonstrate that full\-context attention maximizes accuracy while bounded\-memory strategies unlock long\-sequence scalability\.  Moreover, our empirical evaluations in challenging embodied and egocentric tasks demonstrate that strict domain alignment and high data quality are far more critical to performance than simple dataset scaling\. Furthermore, to address the largest data gap identified in our analysis, we go beyond evaluation by introducing a large\-scale dataset, DA\-Next\-5M, alongside a strong baseline model, DA\-Next, pushing the boundaries of spatial representation learning\. Project page: https://ropedia\.github\.io/SpatialBench/\.

## Dream\-Cubed: Controllable Generative Modeling in Minecraft by Training on Billions of Cubes

**Authors:** Tim Merino; Sam Earle; Ryunosuke Iwai; Julian Togelius; Edoardo Cetin

**ID:** 139806 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3YW4ug0yQX>) | [PDF](<https://openreview.net/pdf?id=3YW4ug0yQX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139806>)

We introduce Dream\-Cubed, a large\-scale dataset of Minecraft worlds at voxel resolution, and a family of models using cubes as powerful compositional units for efficient generation of interactive 3D environments\. Dream\-Cubed comprises tens of billions of tokens from a carefully curated mixture of procedural biome terrain and high\-quality human\-authored maps\. We use this dataset to conduct the first large\-scale study of 3D diffusion models for voxel generation, analyzing discrete and continuous diffusion formulations, data compositions, and architectural design choices\. Our models operate directly in the space of blocks, enabling efficient and semantically grounded generation while supporting interactive user workflows such as inpainting and outpainting from user\-authored blocks\. To quantitatively evaluate our models, we adapt the FID metric to assess semantic differences between real and generated world renderings, and validate generation quality through a human preference study\. We release the full dataset, code, and all our pretrained models, which we hope will provide a foundation for future research in efficient generative modeling for structured, interactive 3D environments\.

## MCSplat: Multi\-View Photometric and Geometric Consistent Feed\-Forward Gaussian Splatting for Driving Scenes

**Authors:** Wang Yifei; Wei Tian; WENHUA BAO; Jia Zhou; Hanshi Wang; Fudong Ge; Jianhua Wu; Shuai Yuan; Zhipeng Zhang; Xingliang Liu; Xianming Zeng; Jianyun Xu; Bingzhao Gao

**ID:** 150934 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eCgqMJ0iay>) | [PDF](<https://openreview.net/pdf?id=eCgqMJ0iay>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150934>)

Driving\-scene reconstruction via feed\-forward Gaussian splatting from sparse multi\-view images remains challenging due to two factors\. First, cross\-camera photometric inconsistency—caused by variations in exposure, ISP, and illumination—can be incorrectly absorbed into Gaussian geometry\. Second, unreliable local geometric supervision arises from normal\-based constraints near depth discontinuities\.  To address these issues, we present \*\*MCSplat\*\*, a multi\-view consistent feed\-forward Gaussian splatting framework for driving scenes\. MCSplat constructs a canonical appearance space from depth\-guided multi\-camera correspondences to decouple geometry learning from camera\-specific appearance\. A multi\-scale Bilateral Grid Transformer restores raw camera appearance from canonical renderings, enabling photometric supervision without contaminating Gaussian geometry\. To improve local geometric reliability, we estimate Fisher\-information based uncertainty from photometric sensitivity and use it to adaptively weight surface\-oriented self\-supervision\. Experiments on the Waymo Dataset show that MCSplat achieves state\-of\-the\-art performance on both the full validation set and an appearance\-challenging subset with strong cross\-camera photometric inconsistency, demonstrating improved reconstruction quality and more consistent novel\-view geometry\. Code will be released\.

## Rethinking the State Update Gate for Long\-Sequence Recurrent 3D Reconstruction

**Authors:** kejun ren; Lei Jin; Tianxin Huang; Lianming Xu; Li Wang

**ID:** 148467 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xbkV9cLvUl>) | [PDF](<https://openreview.net/pdf?id=xbkV9cLvUl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148467>)

Streaming 3D reconstruction under a strict constant\-memory budget hinges on how the recurrent state is updated as the stream evolves\. We profile TTT3R\-style per\-token gates across five benchmarks and discover a structural bottleneck: the gate is intrinsically bounded in magnitude \(median $0\.31$; never exceeding $0\.6$\) and nearly frame\-invariant, yielding an effective memory horizon of only $\\sim$3 frames per state token, which serves as the structural origin of long\-sequence drift\. We trace this to a missing axis: existing inference\-time methods modulate updates only at the per\-token, intra\-frame level, while the orthogonal frame\-level question of \\emph\{how strongly each frame should contribute to the state\} has been silently treated as content\-independent\. We close this gap with a scalar frame\-level gate $\\alpha\_t \\in \(0, 1\]$ derived in closed form from frame\-to\-frame changes of internal features\-\-\-a continuous relaxation of classical SLAM keyframe selection that requires no parameters, no training, and no extra forward pass\. Across six benchmarks spanning camera pose, video depth, and 3D reconstruction at sequence lengths up to $4,541$ frames, our gate cuts ATE by $51\\%$ on long TUM\-RGBD pose sequences, reduces AbsRel by $12\.8\\%$ on Bonn video depth, and on KITTI long\-sequence pose estimation surpasses LongStream and Keyframe\-VO which are specially constructed for long sequences via retraining and policy learning, while retaining strictly constant memory at zero training cost\.

## Scalable Adaptation of 3D Geometric Foundation Models via Weak Supervision from Internet Video

**Authors:** Zihui Gao; Ke Liu; Jiawang Bian; Donny Y\. Chen; Duochao Shi; Guosheng Lin; Hao Chen; Chunhua Shen

**ID:** 149509 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pcEDgJBGuB>) | [PDF](<https://openreview.net/pdf?id=pcEDgJBGuB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149509>)

Geometric foundation models show promise in 3D reconstruction, yet their progress is severely constrained by the scarcity of diverse, large\-scale 3D annotations\. While Internet videos offer virtually unlimited raw data, utilizing them as a scaling source for geometric learning is challenging due to the absence of ground\-truth geometry and the presence of observational noise\. To address this, we propose SAGE, a framework for Scalable Adaptation of GEometric foundation models from raw video streams\. SAGE leverages a hierarchical mining pipeline to transform videos into training trajectories and hybrid supervision: \(1\) Informative training trajectory selection; \(2\) Sparse Geometric Anchoring via SfM point clouds for global structural guidance; and \(3\) Dense Differentiable Consistency via 3D Gaussian rendering for multi\-view constraints\. To prevent catastrophic forgetting, we introduce a regularization strategy using anchor data\. Experiments on applying SAGE to two architecturally distinct backbones \(including both MV\-DUSt3R and VGGT\) show that Chamfer Distance is consistently reduced by 20\-42% on unseen benchmarks \(7Scenes, TUM\-RGBD, Matterport3D\)\. SAGE establishes Internet video as a viable and scalable adaptation source for geometric foundation models\.

## Beyond Family Labels: A Taxonomic Ornstein\-Uhlenbeck Prior for Avian 3D Shape Recovery

**Authors:** Yunchan Jeon; Soo Gon Kim; Seungwook Kim; CheolWon Lee; Jongmin Lee

**ID:** 151996 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WHGRxkYCGV>) | [PDF](<https://openreview.net/pdf?id=WHGRxkYCGV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151996>)

Recovering 3D pose and shape of birds from single images is bottlenecked by the long tail of avian diversity: out of $\\sim 10\{,\}000$ species, only a few dozen have 3D\-labeled training data, and in\-the\-wild test sets routinely contain species never seen at training\. Generalizing across clades is therefore a load\-bearing problem\. The current state of the art, AniMer\+, mitigates it with a family\-level contrastive loss that conveys only a binary same\-family indicator per pair and discards the continuous structure of the species tree\. We propose a \*\*taxonomic Ornstein\-\-Uhlenbeck prior\*\* on the AVES shape code: a multivariate Gaussian whose covariance decays exponentially with Linnaean rank distance, with a learnable selection strength and noise scale\. The prior generalizes family contrastive into a continuous, generative form, exposing the graded cross\- and within\-family similarity that a binary indicator cannot, and brings continuous comparative phylogenetics in as a biology\-grounded inductive bias for the long tail\. Our method consistently improves over AniMer\+ on every reported avian benchmark cell, with the largest gains on the unseen\-species CowBird benchmark\. A permutation ablation isolates taxonomic structure from generic Gaussian smoothing, and a rank\-granularity ablation identifies cross\-order distinctions—the structure beyond a family\-vs\-not indicator—as the dominant source of the unseen\-species gain\.

## Tactile MNIST: Benchmarking Active Tactile Perception

**Authors:** Tim Schneider; Guillaume Duret; Cristiana de Farias; Roberto Calandra; Liming Chen; Jan Peters

**ID:** 139796 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3yMkqerEOt>) | [PDF](<https://openreview.net/pdf?id=3yMkqerEOt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139796>)

Tactile perception has the potential to significantly enhance dexterous robotic ma\- nipulation by providing rich local information that can complement or substitute for other sensory modalities such as vision\. However, tactile sensing is an inher\- ently local sensor modality, providing information only at the points of contact\. This strict locality necessitates the use of active perception techniques to acquire useful, task\-relevant information from manipulated objects or the environment in general\. Hence, the agent must actively guide sensors toward regions with more informative or significant features and integrate such information over time in order to understand a scene or complete a task\. However, while active perception and tactile sensing methods have received significant attention recently, both fields lack standardized benchmarks\. To bridge this gap, we introduce the Tactile MNIST Benchmark Suite, an open\-source, Gymnasium\-compatible benchmark specifically designed for active tactile perception tasks, including localization, classification, and volume estimation\. Our benchmark suite offers diverse simulation scenarios, from simple toy environments all the way to complex tactile perception tasks using vision\-based tactile sensors\. Furthermore, we also offer a comprehensive dataset comprising 13,500 synthetic 3D MNIST digit models and 153,600 real\-world tactile samples collected from 600 3D printed digits\. Using this dataset, we train a CycleGAN for realistic tactile simulation rendering\. By providing standardized protocols and reproducible evaluation frameworks, our benchmark suite facilitates systematic progress in the fields of tactile sensing and active perception in general\.

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

## Pose\-Free Feed\-Forward 3D Inpainting via Learnable Mask Attention and Support Token Refinement

**Authors:** Jingyi Pan; Dan Xu; Qiong Luo

**ID:** 154608 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CJyr8Dldh1>) | [PDF](<https://openreview.net/pdf?id=CJyr8Dldh1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154608>)

3D scene inpainting aims to recover missing or occluded regions in edited 3D scenes, while ensuring geometric and textural consistency\. Existing approaches, however, typically require accurately calibrated camera poses, which restricts their applicability in casual, in\-the\-wild scenarios and introduces additional preprocessing overhead\. To overcome this limitation, we present FreeInpaint, a novel feed\-forward framework that generates complete and 3D\-consistent scenes directly from unposed multi\-view images with masked regions\. At its core, FreeInpaint extends a 3D foundation model to propagate masked regions from a reference view to other unposed views, bridging 3D reconstruction and scene inpainting while preserving the model's native ability to recover camera poses and scene geometry\. Our method addresses two key challenges in adapting feed\-forward 3D foundation models to masked inputs\. First, masked regions can corrupt cross\-view correspondence reasoning, degrading pose estimation and geometry recovery\. To address this, we introduce a Learnable Mask Attention mechanism that preserves the spatial anchoring of reliable observations while allowing masked regions to progressively absorb useful context in deeper layers\. Second, under severe occlusions, a single forward pass often lacks sufficient appearance evidence for high\-fidelity completion\. Therefore, we propose a Support Token Refinement strategy, which injects diffusion\-generated support evidence as confidence\-weighted auxiliary tokens to refine under\-observed regions while preserving the original spatial anchor\. Extensive experiments across diverse datasets demonstrate that FreeInpaint achieves superior inpainting quality, eliminating the reliance on pre\-computed camera poses while keeping a fast inference speed\.

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

## CM\-EVS: Sparse Panoramic RGB\-D\-Pose Data for Complete Scene Coverage

**Authors:** Liu Jiale; Jungang Li; Jieming Yu; Yu Xinglin; Zihao Dongfang; Shi Keyu; Zongjian Ding; 家焕 张; Shunwen Bai; Haoran Huang; Yurun Wang; Yanxi Wu; Ningzhe Yu; Yudong Gao; Mingjun Cheng

**ID:** 139081 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mSu3YzwW3t>) | [PDF](<https://openreview.net/pdf?id=mSu3YzwW3t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139081>)

Modern 3D visual learning relies on observations sampled from metric 3D assets, yet existing scans, meshes, point clouds, simulations, and reconstructions do not directly provide a sparse, comparable, and geometry\-consistent panoramic training interface\. Dense trajectories duplicate nearby views, source\-specific rendering policies yield heterogeneous annotations, and sparse heuristics may miss important regions or introduce depth\-inconsistent observations\. \*We study how to convert 3D assets into sparse panoramic RGB\-D\-pose data that preserves complete scene coverage with low redundancy and auditable provenance\.\* We propose \*\*COVER\*\* \(\*\*C\*\*overage\-\*\*O\*\*riented \*\*V\*\*iewpoint curation with \*\*E\*\*RP \*\*R\*\*ange\-depth warping\), a training\-free ERP viewpoint curator that projects geometry observed from selected views into candidate ERP probes, scores incremental coverage, and penalizes depth conflicts\. Under bounded proxy error, its greedy coverage proxy preserves the standard coverage\-style approximation behavior up to an additive error term\. Using COVER, we build \*\*CM\-EVS\*\* \(\*\*C\*\*overage\-curated \*\*M\*\*etric \*\*E\*\*RP \*\*V\*\*iew \*\*S\*\*et\), a panoramic RGB\-D\-pose dataset with 36,373 curated ERP frames from 1,275 indoor scenes across Blender indoor, HM3D, and ScanNet\+\+, complemented by outdoor panoramas from TartanGround and OB3D re\-encoded into the same schema\. Each frame provides full\-sphere RGB, metric range depth along ERP rays, calibrated world\-to\-camera pose, and provenance logs\. With a median of only 25 frames per indoor scene, CM\-EVS covers all 13 unified room types while maintaining compact scene\-level coverage\. Experiments show that COVER improves the coverage–conflict trade\-off, making CM\-EVS a sparse, compact, and auditable RGB\-D\-pose resource for geometry\-consistent panoramic 3D learning\.

## Hydra\-DP3: Frequency\-Aware Right\-Sizing of 3D Diffusion Policies for Visuomotor Control

**Authors:** Jinhao Zhang; Zhexuan Zhou; Huizhe Li; Yichen Lai; Wenlong Xia; Haoming Song; Youmin Gong; Jie Mei

**ID:** 152435 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TA5j0hwB2u>) | [PDF](<https://openreview.net/pdf?id=TA5j0hwB2u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152435>)

Diffusion\-based visuomotor policies perform well in robotic manipulation, yet current methods still inherit image\-generation\-style decoders and multi\-step sampling\. We revisit this design from a frequency\-domain perspective\. Robot action trajectories are highly smooth, with most energy concentrated in a few low\-frequency discrete cosine transform modes\. Under this structure, we show that the error of the optimal denoiser is bounded by the low\-frequency subspace dimension and residual high\-frequency energy, implying that denoising error saturates after very few reverse steps\. This also suggests that action denoising requires a much simpler denoising model than image generation\. Motivated by this insight, we propose Hydra\-DP3 \($\{\\bf HDP3\}$\), a pocket\-scale 3D diffusion policy with a lightweight Diffusion Mixer decoder that supports two\-step DDIM inference\. Our synthetic experiments validate the theory and support the sufficiency of two\-step denoising\. Futhermore, across RoboTwin2\.0, Adroit, MetaWorld, and real\-world tasks, HDP3 achieves state\-of\-the\-art performance with fewer than 1\\% of the parameters of prior 3D diffusion\-based policies and substantially lower inference latency\.

## VideoMDM: Towards 3D Human Motion Generation From 2D Supervision

**Authors:** Amir Mann; Gal Michael Harari; Merav keidar; Or Litany

**ID:** 154317 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EYB8rootIX>) | [PDF](<https://openreview.net/pdf?id=EYB8rootIX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154317>)

We introduce VideoMDM, a diffusion\-based framework that trains 3D human motion priors directly from accurate 2D poses extracted from monocular videos, without any 3D ground truth\. A pretrained 2D\-to\-3D lifter provides approximate 3D pose sequences that serve as a noisy teacher: these are diffused, denoised by the model in 3D, and supervised in 2D by reprojecting the prediction and comparing against accurate keypoints\. We show that, under mild assumptions, a depth\-weighted 2D reprojection loss is equivalent in expectation to direct 3D supervision, and we adapt standard 3D motion regularizers — velocity consistency and over\-parameterized representation alignment — to this 2D setting\. Unlike methods that lift 2D to 3D only at inference, VideoMDM learns a coherent 3D motion manifold during training\. On HumanML3D it nearly closes the gap to fully 3D\-supervised MDM \(FID 0\.88 vs 0\.54\); On real video datasets Fit3D and NBA the method learns to generate motions consistently preferred by humans, with strong quantitative results\.

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

## RelGS: Relation\-Aware Gaussian Splatting for Open\-Vocabulary 3D Scene Understanding

**Authors:** Kai Zhao; Dai Shi; YIXIN CHEN; Ye Wang; Oula Ghannoum; Yi Guo

**ID:** 155343 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6Jo2q08Opd>) | [PDF](<https://openreview.net/pdf?id=6Jo2q08Opd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155343>)

Open\-vocabulary 3D scene understanding provides an important interface for querying and interacting with reconstructed scenes through natural language\.  Although recent 3DGS methods have enabled text\-driven object selection and open\-vocabulary segmentation, they still struggle with compositional queries involving attributes, spatial relations, and part\-whole relations\.  Most existing approaches learn per\-Gaussian or per\-cluster language features, construct query\-conditioned referring fields, or perform spatial reasoning only at inference time, but they do not organize the scene itself into a reusable relation\-aware representation\.  As a result, object relations are not explicitly stored as typed and confidence\-aware 3D structures, limiting compositional reasoning and multi\-hop querying\.  To address this issue, we propose RelGS, a relation\-aware 3D Gaussian Splatting framework for open\-vocabulary scene understanding\.  RelGS learns semantic and instance embeddings for Gaussians under multi\-view supervision, groups them into cross\-view consistent 3D semantic nodes, and enriches each node with structured attributes verified by reverse CLIP consistency\.  It further constructs a confidence\-weighted relation graph, where 3D spatial cues propose candidate relations and an LLM verifies their semantic plausibility\.  At query time, RelGS combines attribute matching, CLIP retrieval, and graph traversal to localize the target object\.  Extensive experiments demonstrate strong performance on word\-level selection, sentence\-level referring segmentation, multi\-hop relational queries, and point\-level semantic segmentation\.

## Point4D: Long\-range 4D Motion Reconstruction

**Authors:** Minsik Jeon; Jay Karhade; Deva Ramanan; Shubham Tulsiani

**ID:** 155736 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3L4DUaI1nh>) | [PDF](<https://openreview.net/pdf?id=3L4DUaI1nh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155736>)

We introduce Point4D, a feed\-forward model for 4D reconstruction of long\-range video sequences\. Point4D is able to reliably infer dense per\-point 3D trajectories across multi\-hundred video sequences,  unlike existing 4D methods that are limited to short input windows of at most a few dozen frames\. A key innovation that enables this is our flexible 3D query\-based motion decoder that decouples trajectory prediction from image\-plane visibility\. The predicted 3D endpoints are then directly re\-queried in the next chunk without re\-projection or matching\. Furthermore, we show that extracting and reusing a visual across an arbitrary frame where the point is visible leads to superior performance than purely relying on the source patch\. Overall, Point4D achieves state\-of\-the\-art performance across diverse long\-video tracking benchmarks spanning over 200 frames and substantially outperforms previous feed\-forward 4D methods\.

## Déjà View: Looping Transformers for Multi\-View 3D Reconstruction

**Authors:** Alessandro Burzio; Tobias Fischer; Sven Elflein; Qunjie Zhou; Riccardo de Lutio; Jiawei Ren; Jiahui Huang; Shengyu Huang; Marc Pollefeys; Laura Leal\-Taixé; Zan Gojcic; Haithem Turki

**ID:** 154303 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Eidz3t6qmk>) | [PDF](<https://openreview.net/pdf?id=Eidz3t6qmk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154303>)

Recent feed\-forward 3D reconstruction transformers have scaled to over a billion parameters, following the broader trend of increasing model capacity in computer vision\. Yet emerging evidence suggests that contiguous transformer layers often behave like repeated applications of similar operations, and multi\-view reconstruction transformers refine their predictions progressively across decoder depth\. We posit that model depth partially buys iteration, paid for inefficiently in unique parameters, and instead make that iteration explicit in architecture\. Our model, DéjàView, applies a single looped transformer block recurrently to per\-view features for K refinement steps\. Trained once, it exposes K as an inference\-time compute knob, matching or outperforming substantially larger feed\-forward baselines across five reconstruction benchmarks spanning indoor, outdoor, object\-centric, and driving scenes, while using a fraction of their parameters and comparable or lower compute\. Importantly, the same looped block formulation outperforms an otherwise identical variant with independent per\-step parameters under matched training data and compute, suggesting that explicit iteration is not merely a compute\-efficient substitute for capacity but a stronger inductive bias for multi\-view 3D reconstruction\.

## Scenes as Objects, Not Primitives : Instance\-Structured 3D Tokenization from Unposed Views

**Authors:** Mijin Yoo; In Cho; Subin Jeon; Jiwoo Lee; Eunbyung Park; Seon Joo Kim

**ID:** 149694 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o8YA4STvSo>) | [PDF](<https://openreview.net/pdf?id=o8YA4STvSo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149694>)

A 3D scene is understood through its objects, not the primitives that compose them\. Yet feed\-forward reconstruction methods output dense, unstructured sets of points or Gaussians, leaving object\-level structure to be recovered after the fact\. We propose a feed\-forward framework that directly decomposes unposed multi\-view images into instance\-structured 3D token groups \- compact object\-centric units from which reconstruction, segmentation, and manipulation all follow\. Each token group consists of an instance token that captures entity\-level identity, paired with anchor tokens that model local geometry and appearance and decode into 3D Gaussians\. This factorization separates what belongs together from how each part looks, making object instances a native interface of the representation rather than a derived product\. The model is trained through differentiable rendering with joint reconstruction and segmentation supervision, without 3D annotations or test\-time optimization\. On indoor scene benchmarks, our feed\-forward model outperforms per\-scene optimized baselines in class\-agnostic instance segmentation, while the same token groups support instance\-level scene editing through direct token removal, translation, and insertion\.

## NEXUS: Neural Energy Fields for Physically Consistent Contact\-Rich 3D Object Dynamics

**Authors:** Qizhen Ying; Guangming Wang; Yangchen Pan; Victor Prisacariu; Brian Sheil; Yixiong Jing

**ID:** 151625 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z9xwHfl47k>) | [PDF](<https://openreview.net/pdf?id=Z9xwHfl47k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151625>)

Physically consistent 3D object dynamics is a key component for controllable simulation and physics\-grounded video generation, especially under contact, deformation, and external forcing\. Existing trajectory\-based methods enable physical control, but they often model isolated physical effects rather than deriving motion from a unified physical structure\. This makes it difficult to compose conservative and non\-conservative effects in contact\-rich 3D dynamics while retaining explicit control\. We present NEXUS, a neural energy\-field method for contact\-rich 3D object dynamics\. NEXUS represents each object as a structural graph and constructs dynamic contact graphs for interactions\. Inspired by the Hamiltonian Neural Network \(HNN\), NEXUS formulates dynamics through scalar energy and dissipation terms rather than direct state or acceleration regression\. Conservative effects are composed as additive energy terms over the scene\. To handle non\-conservative systems beyond standard HNNs, NEXUS learns a dissipation function for impact\-induced energy loss\. Forces are derived by differentiating the energy\-dissipation functions and rolled out with a numerical integrator\. NEXUS provides a stable and controllable physics reasoning module for contact\-rich 3D object dynamics, improving long\-horizon accuracy over representative learned and physics\-structured dynamics baselines across controlled rollouts with varying mechanical properties and physical\-effect compositions\. Our contributions are: \(i\) an HNN\-inspired energy\-dissipation dynamics formulation that unifies conservative and non\-conservative scene effects; \(ii\) a graph\-based 3D representation for contact\-rich object dynamics, with object\-\-object contact evaluated in mixed\-contact stress tests; and \(iii\) a trajectory\-guided video generation study showing that physically consistent motion improves downstream physical plausibility while maintaining competitive visual quality\.

## SurGe: Improved Surface Geometry in Point Maps

**Authors:** Karim Knaebel; Gonzalo Martin Garcia; Christian Schmidt; Ilya Fradlin; Lucas Nunes; Daan de Geus; Bastian Leibe

**ID:** 153420 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LSoxFFuHS0>) | [PDF](<https://openreview.net/pdf?id=LSoxFFuHS0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153420>)

With impressive progress in architectures, training recipes, and quantity of high\-quality data, recent monocular geometry estimation methods estimate global 3D geometry remarkably well\. However, they still exhibit surprisingly low quality on surface details, which is clearly visible in qualitative predictions but not reflected in common metrics\. To improve this shortcoming, we first formulate a metric that is capable of measuring the surface quality of the estimated geometry via normals derived from the predicted point map\. Furthermore, we propose two manners to improve fine\-grained local geometry in monocular geometry estimation models: \(i\) we present an improved point\-based gradient loss, and \(ii\) we introduce a novel decoder based on neighborhood attention\. We evaluate our proposed method on eight common zero\-shot monocular geometry estimation benchmarks and achieve state\-of\-the\-art results, particularly improving local surface geometry\. Extensive ablations validate our design choices\. Code and models will be open\-sourced\.

## Split\-and\-scale Latent 3D Representations

**Authors:** Dorian Chan; Muhammed Kocabas; Xiaoming Zhao; Oncel Tuzel; Jen\-Hao Chang

**ID:** 153852 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IGfZCD7djS>) | [PDF](<https://openreview.net/pdf?id=IGfZCD7djS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153852>)

Latent 3D representations have significantly expanded the capabilities of modern shape modeling, enabling compact encoding of 3D scenes and supporting powerful 3D generative models\. Despite this progress, current representations struggle to capture the fine details of complex objects, fundamentally limited by the capacity of their latents\. However, scaling latent capacity at training time is computationally expensive and often infeasible under memory limits, and naively increasing the number of latents at inference fails to make effective use of the added capacity\. In this paper, we address both challenges with split\-and\-scale, a method that effectively expands latent capacity at inference while keeping training cost tractable\. Our key observation is that by representing 3D scenes as continuous functions of 3D coordinates, a single pretrained tokenizer can be applied at inference to arbitrarily small sub\-regions of a scene, allocating the same latent capacity to a smaller spatial extent and thus capturing far higher detail\. We validate this insight by conducting extensive ablations to study the trade\-offs between compute, memory, latent capacity, and reconstruction quality, demonstrating our inference\-time scaling method achieves quality competitive with much larger models that exceed single\-GPU memory limits\. We further demonstrate that split\-and\-scale supports high\-quality generative modeling, training an autoregressive 3D generator that performs competitively with state\-of\-the\-art baselines\.

## GeoPano: Towards Geometrically Accurate Panoramic 3D Reconstruction from a Single Panorama

**Authors:** Jing OU; Zidong Cao; Liaoyuan Fan; Zhuoxiao Li; Shuai Zhang; Yinrui Ren; Dongli Wu; Haoang Li; Hui Xiong; Wufan Zhao

**ID:** 151984 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WMfFfSSyY6>) | [PDF](<https://openreview.net/pdf?id=WMfFfSSyY6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151984>)

Panoramic 3D reconstruction enables the holistic recovery of complete 360° scene geometry, offering significant benefits for robotics and AR/VR applications; however, direct estimation is persistently challenged by inherent spherical distortions\. While decomposing panoramas into perspective views effectively circumvents these distortions and leverages established geometric priors, this strategy often fails to preserve global spatial consistency across the decomposed views\. To address this fundamental limitation, we introduce an enhanced feed\-forward 3D reconstruction framework tailored for the view decomposition paradigm, driven by two key innovations\. First, we propose a geometry\-aware attention aggregator, featuring a streamlined attention architecture equipped with a novel Geo\-Attention mechanism, which explicitly exploits the intrinsic global information to guide multi\-view interactions, thereby suppressing geometrically inconsistent matches\. Furthermore, to jointly enforce fine\-grained local details and global structural coherence, we formulate a hybrid supervision strategy\. Specifically, we complement the standard local point cloud loss in perspective space with our newly proposed spatially uniform global point cloud loss in panoramic space, explicitly enforcing holistic constraints within a unified coordinate system\. Experiments demonstrate that our method consistently outperforms prior single\-view panoramic approaches in reconstruction accuracy, geometric consistency, and visual fidelity\.

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

## Enhancing Novel View Synthesis via Geometry Grounded Set Diffusion

**Authors:** Farhad Zanjani; Herbert Cai; Amirhossein Habibian

**ID:** 152331 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Tsa68eSMjP>) | [PDF](<https://openreview.net/pdf?id=Tsa68eSMjP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152331>)

We present SetDiff, a geometry\-grounded multi\-view diffusion framework that enhances novel\-view renderings produced by 3D Gaussian Splatting\. Our method integrates explicit 3D priors, pixel\-aligned coordinate maps and pose\-aware Plucker ray embeddings, into a set\-based diffusion model capable of jointly processing variable numbers of reference and target views\. This formulation enables robust occlusion handling, reduces hallucinations under low\-signal conditions, and improves photometric fidelity in visual content restoration\. A unified set mixer performs global token\-level attention across all input views, supporting scalable multi\-camera enhancement while maintaining computational efficiency through latent\-space supervision and selective decoding\. Extensive experiments on EUVS, Para\-Lane, nuScenes, and DL3DV demonstrate significant gains in perceptual fidelity, structural similarity, and robustness under severe extrapolation\. SetDiff establishes a state\-of\-the\-art diffusion\-based solution for realistic and reliable novel\-view synthesis in autonomous driving scenarios\.

## SchemaPose: RGB\-Based Category\-Level Pose Estimation with Parametric Category Schema

**Authors:** Shuang Wu; Jiude Wei; Cewu Lu; Jianhua Sun

**ID:** 155028 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=93hpW8Bvpx>) | [PDF](<https://openreview.net/pdf?id=93hpW8Bvpx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155028>)

RGB\-based category\-level 9D pose estimation remains highly challenging because a monocular system must generalize across unseen object instances while jointly inferring 3D translation, 3D rotation, and 3D size\. Unlike instance\-level pose estimation, the category\-level setting requires the network to learn both what is shared across objects within a category and how individual instances vary in structure\. This challenge is amplified in the RGB\-only setting, where pose cues, category\-level commonality, and instance\-specific variation are entangled in appearance without direct geometric constraints, making it difficult for existing frameworks to learn a representation that is truly aligned with the category\-level estimation objective\. To address this problem, we propose SchemaPose, a schema\-guided framework for RGB\-based category\-level pose estimation\. SchemaPose equips the estimation pipeline with an explicit parametric schema for modeling category\-level regularities together with structured instance variation, and uses the inferred schema variables to guide pose\-related prediction in an end\-to\-end query\-based framework\. The same formulation also supports template instantiation, synthetic annotation, and pose learning within a unified framework\. Experiments on synthetic and real data show that SchemaPose achieves state\-of\-the\-art performance among RGB\-based methods for category\-level 9D pose estimation\.

## ACD\-GS: Asymmetric Curvature\-aware Densification for 3D Gaussian Splatting

**Authors:** Houqiang Zhong; Tianchi Zhu; Qiang Hu; Xiaoyun Zhang; Li Song; Wenjun Zhang

**ID:** 150094 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kkbCZPoC5n>) | [PDF](<https://openreview.net/pdf?id=kkbCZPoC5n>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150094>)

3D Gaussian Splatting \(3DGS\) has emerged as a powerful paradigm for real\-time photorealistic novel view synthesis\. However, its training\-time densification remains largely heuristic, often resulting in redundant Gaussian proliferation and inaccurate geometric reconstruction\. Existing methods predominantly rely on first\-order screen\-space gradients to trigger cloning and splitting, which fail to distinguish true geometric discontinuities from high\-frequency textures or noisy residuals\. To address this limitation, we propose ACD\-GS, an Asymmetric Curvature\-aware Densification framework for compact and geometry\-aware 3D Gaussian optimization\. Our key insight is that second\-order depth responses provide a more reliable structural prior for density control, enabling asymmetric regulation of cloning and splitting to better capture geometric discontinuities\. Building on this, we introduce a multi\-view photometric consistency constraint to suppress transient single\-view errors, together with a capacity\-aware adaptive regulation strategy that balances densification and pruning during training\. Unlike post\-hoc compression or quantization\-based approaches, ACD\-GS directly prevents redundant Gaussian generation during training, yielding inherently compact representations\. Extensive experiments demonstrate that our method reduces nearly 60\\% of Gaussian count and storage while maintaining competitive rendering fidelity, consistently outperforming existing methods across multiple datasets\. Our code is available in https://anonymous\.4open\.science/r/ACD\_GS\-0E2C

## Georeferenced Cross\-View 3D Reconstruction from Ground and Satellite Images

**Authors:** David G Shatwell; Mubarak Shah

**ID:** 150592 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h1zgNdJwcF>) | [PDF](<https://openreview.net/pdf?id=h1zgNdJwcF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150592>)

Georeferenced 3D reconstruction from ground images requires recovering not only the local scene geometry, but also localizing every camera center and 3D point in a geographic coordinate frame\. Existing cross\-view geo\-localization methods are able to estimate the GPS coordinate of a single ground camera, but do not reconstruct dense 3D geometry, while recent feed\-forward multi\-view 3D reconstruction models predict point maps and camera poses only in a local coordinate frame\. We introduce X\-VGGT, a feed\-forward cross\-view geometry transformer that unifies these tasks by jointly processing a set of ground\-level images and a georeferenced satellite image to predict ground\-view camera poses, dense 3D point maps, and a scene\-level transform parameterized by gravity, scale, yaw and translation\. This transform projects the local reconstruction into the satellite plane, resulting in the geo\-registration of all ground images with the georeferenced satellite image\. We further propose an evaluation protocol for this joint task and show that, across multiple cross\-view datasets, X\-VGGT produces accurate georeferenced reconstructions and outperforms prior cross\-view geo\-localization and multi\-view 3D reconstruction models\.

## DynaCell: an Evaluation Framework for Dynamic 3D Virtual Staining of Live Cells

**Authors:** Alexandr Kalinin; Dihan Zheng; Taylla Milena Theodoro; Ivan Ivanov; Eduardo Hirata Miyasaki; See\-Chi Lee; Aofei Liu; Sricharan Reddy Varra; Talon Chandler; Soorya Pradeep; Chad Liu; Manuel D Leonetti; Carolina Arias; Bo Huang; Shalin Mehta

**ID:** 139363 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Uc0kjRCFXo>) | [PDF](<https://openreview.net/pdf?id=Uc0kjRCFXo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139363>)

Imaging of dynamic cellular responses to perturbations requires live\-cell measurements, posing a challenge for fluorescence\-based assays that can visualize molecular phenotypes by specific labeling but often affect cell health\. Virtual staining helps by predicting fluorescence\-like signals from label\-free microscopy\. Although many models have been developed for this task, their performance on volumetric time\-lapse data remains poorly characterized\. We address this gap by introducing DynaCell, an evaluation framework for 3D time\-lapse virtual staining of live cells, comprising a new paired label\-free and fluorescence 3D time\-lapse imaging dataset, a suite of baseline models, and a three\-tier metric panel measuring pixel\-level fidelity, organelle segmentation performance, and single\-cell phenotypic similarity\. Using DynaCell, we study model behavior across 2 cell types and microscopes, 4 organelles, and 3 perturbation states\. We find that regression baselines better predict the spatial localization of target organelles and are more robust to label\-free input distribution shifts, while the generative baseline better captures population\-level phenotype distribution across cells and organelles\. These differences expose trade\-offs between preservation of structural and phenotypic fidelity that are obscured by single\-metric evaluation, and suggest how virtual staining can support downstream tasks such as localization, segmentation, tracking, and phenotypic profiling\. DynaCell provides reusable data, code, checkpoints, and documentation for assessing virtual stains for live\-cell biological measurements\.

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

## BiLi: Bridging the Last Mile in LiDAR Localization

**Authors:** Minghang Zhu; Junchuan Lan; Zhijing Wang; Haoze Chang; Wen Li; Sheng Ao; Cheng Wang

**ID:** 153081 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=O7ZMrspwGi>) | [PDF](<https://openreview.net/pdf?id=O7ZMrspwGi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153081>)

In large\-scale outdoor LiDAR localization, Scene Coordinate Regression \(SCR\) achieves sub\-meter accuracy, but its deployment in high\-precision autonomous driving is hindered by a "last\-mile" problem: the point\-wise prediction paradigm causes unphysical trajectory jittering, rendering localization kinematically discontinuous despite low mean errors\. To bridge the gap between high\-precision localization and temporal kinematic consistency, we propose BiLi, a spatiotemporal synergistic relocalization framework\. Spatially, BiLi utilizes Implicit Manifold Regularization \(ISR\) driven by an offline neural implicit field\. Formulated as a novel point\-to\-manifold projection constraint, ISR strictly anchors predicted coordinates to continuous physical zero\-level sets\. Temporally, to bypass computationally heavy implicit optimization, we distill the teacher's kinematics into a lightweight feed\-forward network, compelling it to learn robust, equivariant physical priors\. Finally, a Differentiable Robust Manifold Gating mechanism dynamically fuses the global spatial predictions with the temporal kinematic states via adaptive state updating, facilitating efficient real\-time deployment\. Extensive experiments demonstrate that BiLi fundamentally resolves the "last\-mile" challenge\. Our method outperforms state\-of\-the\-art approaches by 25% and 65% on the Oxford and NCLT benchmarks, respectively, delivering drift\-free, kinematically coherent, and highly accurate real\-time localization\.

## How Private is Private? A Comparative Study for Face De\-Identification

**Authors:** Hui Wei; Hao Yu; Hui Kuurila\-Zhang; Guoying Zhao

**ID:** 139260 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bdTyZRpRxP>) | [PDF](<https://openreview.net/pdf?id=bdTyZRpRxP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139260>)

Face de\-identification \(FDeID\) has emerged as a critical privacy\-preserving technology, yet its evaluation remains fundamentally fragmented\. Existing protocols rely on inconsistent metrics, heterogeneous datasets, and partial annotation coverage, so methods targeting different utility dimensions, such as landmark versus expression preservation, are reported on different benchmarks under different metrics, rendering cross\-method comparison infeasible\. We revisit FDeID evaluation from both the data and metric perspectives\. On the data side, we introduce UTILFACE, a curated, demographically balanced benchmark with high identity diversity, assembled from four large\-scale face datasets through identity\-aware cleaning, resolution enhancement, and stratified filtering\. On the metric side, we propose HiFD, a Hierarchical Face De\-identification metric that unifies identity suppression, multi\-level utility preservation, and image quality under a single consistency\-based paradigm: every component is computed from pretrained estimators’ outputs on the original face and its de\-identified counterpart, directly quantifying how much identity is suppressed and how much downstream\-perceivable utility survives\. HiFD organizes facial signals into a three\-level utility hierarchy spanning macro cues \(L1\), micro cues \(L2\), and imperceptible cues \(L3\), and aggregates the five resulting components into a single interpretable score via weighted harmonic mean, with configurable application\-specific profiles\. Using this unified protocol, we conduct a comprehensive comparative study spanning adversarial, GAN\-based, and diffusion\-based methods, surfacing trade\-offs and failure modes that remain invisible under existing protocols\. We will release the benchmark and evaluation toolkit to foster reproducible research in privacy\-preserving face analysis \(anonymous codebase: https://anonymous\.4open\.science/r/HiFD\)\.

## Provable Pruning for Efficient 3D Gaussian Splatting via Coresets

**Authors:** Waseem Mousa; Alaa Maalouf

**ID:** 154669 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BuQHfat14R>) | [PDF](<https://openreview.net/pdf?id=BuQHfat14R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154669>)

3D Gaussian Splatting \(3DGS\) enables high\-quality real\-time novel\-view synthesis, but practical scenes often contain millions of Gaussians, making compression essential for deployment on limited hardware\. Existing reduction methods are effective but mostly heuristic: they provide no multiplicative approximation guarantee for the rendered objective, and thus rely heavily on costly post\-pruning finetuning to recover quality\. We ask a basic question: can a 3DGS scene be provably replaced by a much smaller weighted subset \(coreset\) while preserving the objective of interest? We first show that, in the unrestricted setting, no non\-trivial multiplicative 3DGS coreset exists\.  We then show that multiplicative guarantees are not impossible, but resolution\-dependent\. For a prescribed rendering resolution, such as representative views or grids of views/rays, we provide the first weighted coreset construction theorem for 3DGS\. The construction samples Gaussians by sensitivity: provable importance scores measuring each Gaussian’s role in the full\-scene objective\. Finally, under explicit validity and log\-transmittance stability assumptions, we turn this objective guarantee into a rendering guarantee\. Empirically, our method is strongest where deployment needs it most: aggressive compression with no or minimal recovery compute\. In prune\-only and very short finetuning regimes, it achieves state\-of\-the\-art performance, showing that principled importance estimation can be both theoretically meaningful and practically useful\.

## Who Wrote This Paper? Autonomous Scientific Discovery for 3DGS Research

**Authors:** Seemandhar Jain; Manmohan Chandraker

**ID:** 149850 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mptCBNtiEN>) | [PDF](<https://openreview.net/pdf?id=mptCBNtiEN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149850>)

Reproducing a published 3DGS paper takes weeks of expert engineering before any extension can be proposed\. Prior autonomous\-research systems read papers, draft hypotheses, and write code, but suffer from limited template length, executability, and traceability\. Specifically, none has been demonstrated end\-to\-end in a live computer\-vision subfield with intense activity\. GS\-Scientist is an autonomous research system for 3D Gaussian Splatting that addresses these limitations\. Given a research prompt, a target\-paper URL, or no input at all, it reproduces a published baseline, proposes an extension, trains and ablates across Mip\-NeRF\~360 and LLFF, writes the manuscript, and binds every reported number to a logged training run\. Five design choices distinguish it: \(i\)candidates mutate plugins from a verified\-reproduction backbone matched to published baselines; \(ii\)a cascade\-weighted Elo tournament across eight islands scores on measured GPU PSNR with verbal\-gradient feedback; \(iii\)a standing falsifier subtracts Elo on failure, integrating stress\-test survival into selection; \(iv\)every reported number is bound to a logged training run, and the run cannot terminate while any claim is unbacked; \(v\)a seven\-category 3DGS taxonomy wraps \\texttt\{EVOLVE\-BLOCK\} markers in domain\-aligned scaffolds transferable across 3DGS repositories\. GS\-Scientist produces manuscripts that beat their reproduced target by $\+0\.18$ to $\+3\.78$\\,dB PSNR, including $\+3\.78$\\,dB on astrophotographic nebula rendering, for which no prior 3DGS method exists\. The research cycle compresses from months of graduate\-student time to days of mostly autonomous compute\. Code, all manuscripts, experiment ledgers, and the cross\-run paper store will be released\.

## EgoHMP: Achieving Precise Human Motion Prediction in 3D Scenes via Egocentric Cues

**Authors:** Xin Zhao; Pengzhan Zhou; Ziyi Li; Riheng Jia; Zhida Qin; Yu Liu

**ID:** 154301 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EizipenwYo>) | [PDF](<https://openreview.net/pdf?id=EizipenwYo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154301>)

The complex interactive dependencies between human behavior and 3D scenes make accurately predicting human intent a major challenge for human motion prediction \(HMP\)\. While recent studies use human gaze to infer intent, gaze signals suffer from ambiguity, drift, and a reliance on eye\-tracking hardware\. Research in cognitive science indicates that egocentric views inherently encode potential interactions, while head motion serves as a crucial precursor in motion planning\. Motivated by this, we propose EgoHMP, a novel framework that uses egocentric views and head motions as robust carriers of interaction intent\. By translating this intent into an envisioning of future interactions, EgoHMP achieves precise HMP in 3D scenes\. EgoHMP first employs a vision\-motion alignment encoder to align the visual and motion feature spaces\. Based on these aligned features, an egocentric intent predictor with a modality\-aware modulation mechanism adaptively suppresses invalid interaction cues to predict an accurate interaction probability map\. Furthermore, to enhance the stability and realism of the generated motions, we propose a contact\-aware motion decoder\. Specifically, inspired by the human cognitive process of planning trajectories prior to action execution, we first predict a global trajectory to serve as a self\-prompt, effectively mitigating the optimization conflict in diffusion models\. Subsequently, we introduce a multi\-stage denoiser, which relieves motion artifacts by incorporating human contact modeling through a multi\-stage optimization strategy\. Finally, a GCN\-based motion decoder is employed to synthesize physically plausible and semantically consistent motions\. Extensive experiments demonstrate that EgoHMP achieves state\-of\-the\-art performance\.

## Unified Panoramic Geometry Estimation via Multi\-View Foundation Models

**Authors:** Vukasin Bozic; Isidora Slavkovic; Dominik Narnhofer; Nando Metzger; Denis Rozumny; Konrad Schindler; Nikolai Kalischek

**ID:** 149348 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qjgSaycXfb>) | [PDF](<https://openreview.net/pdf?id=qjgSaycXfb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149348>)

Geometry estimation from perspective images has greatly advanced, maturing to the point where off\-the\-shelf foundation models are able to reconstruct 3D scene structure not only from multi\-view imagery, but even from a single view\. A natural extension is 3D reconstruction from panoramas, with the exciting prospect of recovering a full $360^\\circ$ scene from a single panoramic image\. In this work, we introduce PaGeR \(Panoramic Geometry Reconstruction\), a framework to lift powerful 3D foundation models, designed for perspective imagery, to the panorama domain\. Our strategy is to start from a pretrained transformer for 3D reconstruction and turn it into a unified high\-performance model that predicts scale\-invariant depth, metric depth, sky masks and surface normals from both perspective and omnidirectional images, a single forward pass\. By keeping architectural changes to a minimum and mixing perspective and panoramic images during training, Pager retains the rich 3D prior of the underlying foundation model while learning to also estimate geometrically consistent $360^\\circ$ scenes from single panoramas\. We extensively test our method in both indoor and outddor environments and find that it delivers state\-of\-the\-art performance and excellent zero\-shot performance across a wide range of scenes\.

## Towards Self\-Supervised, Generalizable and Decomposable 4D Driving Scene Reconstruction

**Authors:** James Tu; Anqi Joyce Yang; Jingkang Wang; Sivabalan Manivasagam; Raquel Urtasun

**ID:** 150050 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l87rIPrFwm>) | [PDF](<https://openreview.net/pdf?id=l87rIPrFwm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150050>)

Reconstructing high\-fidelity and controllable digital twins from multi\-modal sensory observations is a fundamental problem in physical AI applications\. While existing per\-scene optimization methods handle dynamic driving scenes well, they are slow to optimize, have artifacts at novel viewpoints, and require costly manual annotations for decomposing the scene into controllable instances\. Self\-supervised generalizable reconstruction methods enable faster and more scalable reconstructions by learning from large datasets, but existing approaches do not fully leverage multi\-modal inputs \(e\.g\., camera and LiDAR\) and lack decomposition capabilities\. To address these limitations, we propose STRIDE, a self\-supervised, generalizable and decomposable 4D driving scene reconstruction method\. By processing multi\-modal sensory inputs in a common 3D space with a Point\-Transformer, STRIDE efficiently discovers spatio\-temporal correspondences necessary for accurate flow prediction\. By incorporating latent instance tokens, STRIDE is the first to perform feed\-forward reconstruction and learnable decomposition without manual annotations\. Experiments on public driving datasets show STRIDE achieves state\-of\-the\-art performance on recovering geometry, appearance, and 3D flow\. Moreover, we demonstrate how learned decompositions can enable dynamic instance manipulation and controllable simulation\.

## Factorized Gradients for Scalable Highly\-expressive Parametric Diffeomorphisms

**Authors:** Amit Aflalo; Eran Treister; Chaim Baskin; Oren Freifeld

**ID:** 149013 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tTrgBMBN77>) | [PDF](<https://openreview.net/pdf?id=tTrgBMBN77>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149013>)

Diffeomorphisms  provide a flexible, topology\-preserving mathematical tool for modeling complex spatial deformations, and are used in various scientific fields\. However, simultaneously achieving high expressivity and computational efficiency remains challenging\. Continuous Piecewise\-Affine Based \(CPAB\) transformations offer an attractive solution by parameterizing a family of diffeomorphisms via continuous velocity fields that are piecewise affine \*w\.r\.t\.\* a chosen tessellation of the domain\. Importantly, $d=\\dim\(\\theta\)$, the dimension of the parameter vector $\\theta$,  depends on the fineness of the tessellation  rather than on the data resolution\. Despite this compact parameterization, CPAB optimization has long been hindered by the tight coupling between trajectory integration and computing gradients \*w\.r\.t\.\* $\\theta$\. We introduce \*\*FG\-CPAB\*\*, a factorized\-gradient formulation for scalable CPAB transformations\. By separating integration from parameter\-space projection, our method reduces gradient computation complexity from $\(\\mathcal\{O\}\(dTN\)\)$ to $\(\\mathcal\{O\}\(TN \+ d C\)\)$, where $\(T\)$ is the number of integration steps, $\(N\)$ is the number of transformed points, and $\(C\)$ is the number of tessellation cells\. This reformulation yields huge speedups \(e\.g\., $\\approx 10^4\\times$ in 2D\), substantial memory savings \(e\.g\., $\\approx 500\\times$ reduction in peak GPU memory usage in 2D\), and dramatically higher expressiveness\. This makes, for the first time, fine\-tessellation CPAB practical in 2D  and 3D, unlocking the potential of highly\-expressive  parametric diffeomorphisms\.

## DinoComplete: 3D Shape Completion with Distilled Semantic Priors and State Space Models

**Authors:** Furkan Mert Algan; Eckehard Steinbach

**ID:** 155664 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3w5XrsVWsn>) | [PDF](<https://openreview.net/pdf?id=3w5XrsVWsn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155664>)

3D shape completion from partial scans remains challenging for unseen categories and noisy real\-world observations, where geometry alone is often insufficient for inferring missing structure\. We present DinoComplete, a deterministic and efficient shape completion framework that augments geometric reconstruction with voxel\-aligned semantic priors distilled from DINO features\. First, we construct multi\-view DINO feature volumes aligned with ShapeNet data and train a student network to predict dense semantic features directly from incomplete shapes\. These predicted features capture global structure and part\-aware semantic context while remaining aligned with the underlying geometry\. We then integrate these distilled features into a completion network, where geometric and semantic voxel representations are fused through voxel state\-space modeling\. To enable efficient long\-range reasoning without sacrificing resolution, we introduce a multi\-scale voxel Mamba module that refines the fused features by combining full\-grid and chunk\-wise sequence modeling\. Experiments on unseen ShapeNet categories and ScanNet objects show that DinoComplete achieves stronger completion quality than prior deterministic and generative based completion methods while using fewer parameters, requiring lower memory, and achieving faster inference\. Our results demonstrate that distilling semantic priors from visual foundation models improves generalization and robustness in 3D shape completion\.

## WaterDescatterGS: Diverse Underwater 3D Scene Reconstruction Using Gaussian Splatting

**Authors:** shijun Zhou; Yuqing Xu; Xing Xie; Baojie Fan; Jiandong Tian

**ID:** 154645 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C5KcMN2PHk>) | [PDF](<https://openreview.net/pdf?id=C5KcMN2PHk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154645>)

Existing physics\-based approaches for underwater 3D restoration and reconstruction commonly model backscatter as a function of scene depth and attenuation coefficients\. However, they often overlook the view\-dependent nature of underwater scattering across camera poses, making it difficult to separate medium degradation from intrinsic scene radiance and thereby limiting both visual and geometric accuracy\. To address this, we present WaterDescatterGS, an efficient physics\-integrated underwater 3DGS framework that explicitly models view\-dependent water degradation at the pixel level\. Leveraging the multi\-view geometry inherent to Structure\-from\-Motion, our framework dynamically derives base per\-view illumination directions from known camera rotations and a single globally optimized sun direction\. To accommodate complex real\-world photometric variations beyond this physical prior, a Physics\-Residual Appearance Embedding is introduced to absorb unmodeled degradations via view\-specific angular corrections\. Ultimately, these refined per\-view parameters are naturally integrated into the physical model to compute precise per\-pixel scattering angles coupled with the rendered depth\. During inference, a cross\-view attention mechanism dynamically aggregates adjacent features to enhance robust novel view synthesis in turbid water\. Extensive experiments demonstrate that, despite operating entirely without clean reference supervision, WaterDescatterGS achieves state\-of\-the\-art performance in high\-fidelity novel view synthesis, novel\-view\-consistent scene restoration, and geometric reconstruction accuracy\.

## Soft geometric inductive bias for object centric dynamics

**Authors:** Hampus Linander; Conor Heins; Marco Perin; Alexander Tschanz; Christopher L Buckley

**ID:** 155147 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7yVfU7Zd4x>) | [PDF](<https://openreview.net/pdf?id=7yVfU7Zd4x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155147>)

Physical systems are naturally parameterized in terms of geometric entities and their transformations\. While exact equivariance can be a powerful inductive bias, real\-world applications frequently exhibit approximate or broken symmetries in practice\. We introduce object\-centric world models that provide a soft geometric inductive bias without enforcing exact symmetries\. By embedding object states as Clifford multivectors, our models encourage physically meaningful transformations while retaining the expressivity needed to handle asymmetric dynamics\. We evaluate our approach on 2D rigid\-body dynamics, 3D charged\-particle systems, and real\-world driving trajectories\. Compared to both unstructured baselines and strictly equivariant models, our soft Clifford transformer achieves better long\-horizon fidelity, particularly in regimes with broken symmetries\. These results suggest that geometric algebra offers an effective middle ground, delivering sample\-efficient dynamics without the inflexibility of hard mathematical constraints\.

## CrossWeave: Emergent Cross\-Modal Scene and Instance Retrieval from Sparse 2D\-3D Alignment

**Authors:** Aadith Warrier; Gnana Prakash Punnavajhala; Siddharth Tourani; Muhammad Haris Khan; Avinash Sharma; Madhava Krishna

**ID:** 152755 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Qakxj8c6lU>) | [PDF](<https://openreview.net/pdf?id=Qakxj8c6lU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152755>)

Cross\-modal scene and instance retrieval aims to retrieve a corresponding 3D environment or object given query 2D images, serving as a foundational mechanism for spatial reasoning in robotics and AR/VR\. Existing methods achieve this by compressing the entire 3D map into a single global feature vector, which discards the fine\-grained local geometrical structure in indoor scenes\. In this work, we show that scene\- and instance\-level retrieval capabilities emerge from supervision on sparse, local 2D\-3D correspondences, without any explicit global labels\. Specifically, we propose $\\textbf\{CrossWeave\}$, a novel framework for cross\-modal retrieval that learns sparse patch\-point alignment, which alone outperforms global encoding methods\. Additionally, an optimal transport\-based aggregator is applied over the aligned features to attain further gain by clustering structurally redundant regions, freeing descriptor capacity for semantically distinct local features\. CrossWeave achieves state\-of\-the\-art performance on both scene\- and instance\-level retrieval on ScanNet and 3RScan with a $\\textit\{single model\}$, whereas existing methods require separate models for each task\. Our results suggest that whole\-scene encoding is not necessary for cross\-modal retrieval, and that sparse local correspondence supervision is a more effective and flexible alternative\.

## Phase\-DGS: Phase\-Guided Dynamic Gaussian Splatting from Unsynchronized Multi\-view Video

**Authors:** Hosung Jeon; Jun Y Jeong; Sangwoon Kwak; Joonsoo Kim; Sangmin Kim; Jaesik Park; Won\-Sik Cheong; Hyon\-Gon Choo

**ID:** 154774 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B3qu4p01hU>) | [PDF](<https://openreview.net/pdf?id=B3qu4p01hU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154774>)

Spatiotemporal scene reconstruction with Dynamic Gaussian Splatting \(DGS\) fundamentally depends on perfect temporal synchronization across all cameras, an assumption rarely achievable in practice\. Industry\-standard synchronization requires expensive specialized hardware and complex setup, while data\-driven alternatives including audio\-based alignment, geometry matching, and pose tracking remain limited by restrictive environmental or scene\-specific assumptions\. To overcome these limitations, we propose Phase\-DGS, a framework that replaces conventional timestamps with a semantic phase representing each frame's inherent state within the underlying motion cycle\. Frames capturing the same motion state share the same phase regardless of which camera records them or when, naturally establishing spatiotemporal correspondence across unsynchronized cameras\. We validate Phase\-DGS under temporal offsets, frame drops, and camera freezes, achieving up to \+8\.5 dB PSNR improvement over baselines while enabling seamless integration with existing DGS backbones including RealTime\-4DGS and FreeTimeGS\.

## CompactSplat: Spatially Adaptive Gaussian Distribution for Feedforward Scene Reconstruction

**Authors:** Bing He; Jingnan Gao; Yunuo Chen; Zhengxue Cheng; Rong Xie; Li Song; Wenjun Zhang

**ID:** 155667 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3sn6PeO6Ch>) | [PDF](<https://openreview.net/pdf?id=3sn6PeO6Ch>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155667>)

Reconstructing 3D scenes from sparse views without per\-scene optimization remains highly challenging, especially for recovering accurate geometry and fine textures\. While recent feedforward approaches leverage generalizable 3D Gaussian Splatting \(3DGS\) for scene generation, they typically assign one or multiple Gaussians to each pixel\. Such uniform allocation not only produces highly redundant representations by wasting primitives in homogeneous areas, but also fails to exploit the inherent geometric priors of planar surfaces, often resulting in sub\-optimal structural modeling\. To address these limitations, we present CompactSplat , a novel feedforward framework that enables a content\-aware allocation of 3D Gaussians\. By integrating texture\-guided spatial partitioning with hierarchical sampling, CompactSplat adaptively distributes primitives — concentrating dense Gaussians in complex regions while tiling flat areas with expanded, scale\-modulated primitives\. Moreover, our framework inherently supports dynamic sparsity control at inference time , enabling seamless trade\-offs between rendering fidelity and memory footprint without requiring network retraining\. Extensive experiments on RealEstate10K, DL3DV, and ScanNet demonstrate that CompactSplat consistently outperforms prior methods on both standard metrics and high\-resolution rendering consistency, achieving high\-fidelity reconstructions with significantly fewer primitives \.

## Controllable Dynamic 3D Shape Generation via 3D Trajectories and Text

**Authors:** Jaeyeong Kim; Inès H Kim; Jahyeok Koo; Seungryong Kim

**ID:** 154139 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FxPg1mJLqX>) | [PDF](<https://openreview.net/pdf?id=FxPg1mJLqX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154139>)

We present T2Mo, the first feed\-forward framework for controllable dynamic 3D shape generation of general objects conditioned on 3D trajectories and text prompts\. Existing text\-driven methods struggle to specify precise motion due to the ambiguity of natural language\. To address this, we introduce 3D trajectories as a direct spatial control signal and propose a shape\-grounded trajectory embedding that maps arbitrary user\-provided trajectories into geometry\-aware condition tokens aligned with the input shape\. Injecting these tokens into the generative backbone enables highly controllable motion generation while handling varying trajectory numbers and distributions\. We conduct extensive comparisons against text\-based baselines and trajectory\-guided video generation workarounds\. Quantitative and qualitative evaluations, along with user studies, show that our method produces motions that more faithfully follow the given prompts with higher expressiveness while preserving motion quality\. Our code and weights will be publicly released\.

## SCION: Scene Composition via Instanced Neural Primitives

**Authors:** William Koch; Amogh Joshi; Cyrus Vachha; Cheng Zheng; Felix Heide

**ID:** 155121 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8GgH1fcIAV>) | [PDF](<https://openreview.net/pdf?id=8GgH1fcIAV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155121>)

Real\-world scenes are compositional: bricks, blades of grass, pebbles, and tree leaves recur across human\-built and natural environments\. Existing neural scene representations model these elements independently\. Most 3D Gaussian Splatting and follow\-up abstraction and compression methods treat each element as unique, fitting millions of independent Gaussians per scene\. Prior methods like Splat and Replace fit template objects, but they require mostly manual selection of repeated elements\. As a result, these representations store redundant parameters and provide weak manipulation handles for downstream tasks\. We introduce SCION, a hierarchical compositional scene representation that replaces independent Gaussians with a compact vocabulary of reusable primitives and lightweight world\-space instances that place transformed copies throughout the scene\. We fit this representation to multi\-view captures via a joint optimization over discrete and continuous scene parameters, combining two\-level densification over splats and instances with an adversarial loss that preserves detail across shared primitives\. The recovered structure yields a compact, controllable representation while maintaining high quality even at 1\.2 MB\. SCION achieves rate\-distortion favorable to existing Gaussian compression methods, and it enables instance\-level scene editing and animation without retraining\. Our results show that neural scene representations need not memorize scenes as independent primitives; they can discover reusable parts\.

## DecompDreamer: A Composition\-Aware Curriculum for Structured 3D Asset Generation

**Authors:** Utkarsh Nath; Rajeev Goel; Rahul Khurana; Kyle Min; Mark Ollila; Pavan Turaga; Varun Jampani; Tejaswi Gowda

**ID:** 156777 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156777>)

Current text\-to\-3D methods excel at generating single objects but falter on compositional prompts\. We argue this failure is fundamental to their optimization schedules, as simultaneous or iterative heuristics predictably collapse under a combinatorial explosion of conflicting gradients, leading to entangled geometry or catastrophic divergence\. In this paper, we reframe the core challenge of compositional generation as one of optimization scheduling\. We introduce DecompDreamer, a framework built on a novel staged optimization strategy that functions as an implicit curriculum\. Our method first establishes a coherent structural scaffold by prioritizing inter\-object relationships before shifting to the high\-fidelity refinement of individual components\. This temporal decoupling of competing objectives provides a robust solution to gradient conflict\. Qualitative and quantitative evaluations on diverse compositional prompts demonstrate that DecompDreamer outperforms state\-of\-the\-art methods in fidelity, disentanglement, and spatial coherence\.

## FrameVGGT: Coherence\-Preserving Memory for Bounded Streaming Geometry

**Authors:** Zhisong Xu; Takeshi Oishi

**ID:** 154230 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FFNTtlQxxZ>) | [PDF](<https://openreview.net/pdf?id=FFNTtlQxxZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154230>)

Streaming Visual Geometry Transformers such as StreamVGGT enable strong online 3D perception, but their KV\-cache grows unbounded over long streams, limiting practical deployment\. We study bounded\-memory streaming geometry from the perspective of memory organization: unlike language modeling, where useful information can often be compressed at token level, geometry\-driven inference relies on coherent and mutually compatible observations across views\. Under fixed memory budgets, retaining history as isolated entries can progressively fragment the geometric context needed for stable long\-horizon matching and fusion\. We therefore propose \\textbf\{FrameVGGT\}, a bounded\-memory framework that maintains a fixed\-capacity set of complementary memory units for streaming geometry\. In our implementation, each unit is instantiated as a frame\-wise KV segment summarized by a compact key\-space prototype, together with a sparse anchor tier for persistent long\-range references\. Across long\-sequence 3D reconstruction, video depth estimation, and camera pose estimation, FrameVGGT achieves favorable accuracy\-\-memory trade\-offs under bounded budgets while maintaining more stable geometry over long streams\.

## Blur Issue Matters for Thermal Novel View Synthesis: A Floating Gaussian Suppression Approach

**Authors:** Mingyuan Xie; Sheng Wan; Jin Xie; Hang Yang; Liangyun Sun; Chen Gong

**ID:** 148566 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wwdSlRgklE>) | [PDF](<https://openreview.net/pdf?id=wwdSlRgklE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148566>)

Novel View Synthesis\(NVS\) for thermal infrared scenarios has become increasingly important in practical applications\. Recent advances in 3D Gaussian Splatting\(3DGS\) have demonstrated its strong performance for NVS, and a handful of preliminary efforts have explored its extension to thermal NVS\. However, existing 3DGS\-based methods for thermal NVS often suffer from severe local blur in rendered images\. Theoretical and empirical analyses reveal that the single\-channel nature of thermal data allows intensity discrepancy to be compensated through opacity adjustment, which can erroneously amplify the opacity of floating Gaussians, especially when the background behind them is insufficiently represented\. To address this issue, we propose a method termed Floating Gaussian Suppression \(FGS\) for thermal NVS\. Specifically, we leverage an over\-saturation of luminance to introduce an implicit gradient penalty, which guides the optimizer to suppress the opacity of floaters to match the ground truth\. By effectively reducing the opacity of these floaters, this mechanism alleviates the occlusion of distant details, thereby mitigating local blur\. Moreover, to preserve rendering fidelity, the luminance parameters of Gaussians are optimized concurrently\. Experimental results demonstrate that our method effectively mitigates local blur and produces sharper and more faithful thermal reconstruction compared with the baseline methods\.

## RETR: A Structure\-Preserving RGB\-Event Transformer for Robust 3D Lane Detection

**Authors:** Jingtao Dong; Hao Zhuang; Hao Yang; Liyuan Pan; Wei Liang

**ID:** 151873 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XFvlFrfW1M>) | [PDF](<https://openreview.net/pdf?id=XFvlFrfW1M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151873>)

Robust 3D lane detection requires accurate metric road geometry recovery from visual inputs, yet conventional RGB\-based approaches suffer from fragile lane evidence under adverse illumination, motion blur, and long\-range perspective compression\. Event cameras offer complementary high\-temporal\-resolution, high\-dynamic\-range structural cues that are robust to these challenges, but their sparse, motion\-dependent responses cannot be directly fused into consistent 3D geometry\. In this paper, we present the first attempt to introduce event cameras into 3D lane detection\. To enable systematic research, we first build two multimodal benchmarks with metric 3D lane annotations: DSEC\-3DLD \(real\-world sequences\) and Ev\-OpenLane \(large\-scale simulated sequences\)\. We further propose RETR, a structure preserving transformer that converts complementary RGB and event observations into coherent 3D lane geometry\. RETR first aligns modality consistent evidence through Reciprocal Context Flow Fusion, then preserves thin and uncertain lane structures with Uncertainty Aware Structural Consolidation, and finally decodes ordered lane hypotheses using a Geometry State Decoder with proposal conditioned initialization, reference conditioned query evolution, and diversified geometric inquiry\. Extensive experiments show that RETR achieves state\-of\-the\-art performance on both benchmarks, especially showing strong improvements in challenging lighting and complex road geometry scenarios\.

## Unlocking Accurate Geometry in 3DGS via Spatially Varying Affine Rectification

**Authors:** Tze Ho Elden Tse; Jizong Peng; Richard Chen; Angela Yao

**ID:** 149845 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mrz9qznPND>) | [PDF](<https://openreview.net/pdf?id=mrz9qznPND>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149845>)

3D Gaussian Splatting \(3DGS\) has become the leading approach for photorealistic novel view synthesis, yet its geometric accuracy lags behind its visual quality\. Existing depth\-guided methods attempt to resolve this by regularizing the optimization with monocular depth priors, typically using a single global scale\-and\-shift alignment\. Crucially, we discover a fundamental flaw in this assumption: modern monocular depth networks systematically exhibit region\-dependent, piecewise\-linear distortions\. This discovery invalidates standard global alignment strategies, which warp scene geometry by enforcing a single transform\. To address this, we introduce a spatially varying affine rectification model that corrects monocular disparity into consistent metric depth using regionally smooth, edge\-aware fields\. We further derive a normal\-aware regularizer that uses spatial gradients to couple the rectified disparity with 3DGS depth and normals\. Across diverse experimental settings, our sensor\-free method shows strong photometric quality of Gaussian Splatting while substantially improving geometric accuracy and outperforming state\-of\-the art geometry\-focused methods\.

## Gaussian Density Splatting Network

**Authors:** Miao Shang; Yabin Wang; Xiaopeng Hong

**ID:** 150496 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hfCqgxJnVP>) | [PDF](<https://openreview.net/pdf?id=hfCqgxJnVP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150496>)

This paper proposes a novel crowd counting approach, the Gaussian Density Splatting Network \(GDSNet\)\. Unlike methods that rely on conventional, grid\-based density maps and are sensitive to spatial resolution, GDSNet represents a crowd as a superposition of continuous 2D Gaussian primitives\. Our approach is built upon two key contributions\. First, we introduce a control\-point\-based fitting mechanism to structure the prediction of the Gaussian parameters\. We design a method to allocate a set of control points that define local regions, from which features are pooled to regress each primitive's parameters\. Second, we adapt a differentiable Gaussian Splatting framework to the counting task by parameterizing each primitive with geometric parameters and a scalar density mass\. This formulation allows the network to be trained end\-to\-end via spatial matching of differentiably rendered density maps, naturally providing both local density supervision and global count optimization\. Extensive evaluations on four standard benchmarks show GDSNet consistently outperforms the state of the art\. Code will be released upon acceptance\.

## Align3D\-AD: Cross\-Modal Feature Alignment and Dual\-Prompt Learning for Zero\-shot 3D Anomaly Detection

**Authors:** Letian Bai; Xuanming Cao; Juan Du; Chengyu Tao

**ID:** 152960 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P5rO538Rjx>) | [PDF](<https://openreview.net/pdf?id=P5rO538Rjx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152960>)

Zero\-shot 3D anomaly detection aims to identify anomalies without access to training data from target categories\.  However, existing methods mainly rely on projecting 3D observations into multi\-view representations that primarily capture geometric cues rather than realistic visual semantics and process them with vision encoders pretrained on RGB data, leading to a significant domain gap between the encoder and the projected representations\.  To address this issue, we propose Align3D\-AD, a unified two\-stage framework that leverages the RGB modality from auxiliary categories as cross\-modal guidance for zero\-shot 3D anomaly detection\.  First, we introduce a cross\-modal feature alignment paradigm that maps rendering features into the RGB semantic space\.  Unlike prior works that implicitly rely on pretrained encoders, our method enables direct semantic transfer from RGB observations\.  A semantic consistency reweighting strategy is further introduced to refine feature alignment by reweighting local regions according to holistic semantic consistency\. Second, we propose a modality\-aware prompt learning framework with dual\-prompt contrastive alignment\.  By assigning independent prompts to RGB\-aligned and rendering features, our method captures complementary semantics across modalities, while the contrastive alignment further enhances prompt representations to improve discriminability\. Extensive experiments on MVTec3D\-AD, Eyecandies, and Real3D\-AD demonstrate that Align3D\-AD consistently outperforms existing zero\-shot methods under both one\-vs\-rest and cross\-dataset settings, highlighting its generalization capability and robustness\. Code and the dataset will be made available once our paper is accepted\.

## HIST3R: Rectified State Decomposition from History for Streaming 3D Reconstruction

**Authors:** Kenneth Yang; Frank Wang

**ID:** 155909 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1vnqEsI3RD>) | [PDF](<https://openreview.net/pdf?id=1vnqEsI3RD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155909>)

Streaming 3D reconstruction enables long\-sequence scene understanding by processing frames sequentially, but remains challenging when historical information is compressed into a fixed\-size recurrent state\.  Existing training\-free extensions of implicit\-memory models mainly improve stability by modulating update magnitude, thereby controlling how strongly each incoming observation modifies the state\.  However, the geometric intent of the update, namely the direction in which the observation drives the recurrent state, remains tied to the current\-frame candidate and can accumulate directional bias over long sequences\.  We propose HIST3R, a training\-free framework that improves recurrent state updating through a direction\-\-magnitude decomposition\.  HIST3R uses historical recurrent states to rectify the update direction, providing a more reliable geometric intent, and uses observation\-\-history visual discrepancy to modulate the update magnitude, yielding an adaptive update gain\.  This design makes recurrent updates less dependent on isolated frame\-level evidence while preserving the bounded\-memory advantage of implicit streaming reconstruction\.  Across camera pose estimation, 3D reconstruction, and video depth estimation benchmarks, HIST3R consistently improves long\-horizon performance without additional training\.  At 1000 input frames, HIST3R achieves relative ATE reductions of 23\.87% on ScanNet and 33\.65% on TUM\-Dynamics over the strongest baseline; at 500 frames, it improves long\-sequence 3D reconstruction over the strongest CUT3R\-based variant by 56\.52% on 7\-Scenes and 33\.96% on NRGBD\.

## RelationVGGT : Visual Geometry Transformers for 3D Spatial Relation Segmentation

**Authors:** Minsu Kim; Jaesung Choe; Jiwoo Lee; Frank Wang; Seon Joo Kim

**ID:** 149148 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sV4QSsSN7r>) | [PDF](<https://openreview.net/pdf?id=sV4QSsSN7r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149148>)

Recent advances in 3D reconstruction have progressed from per\-scene optimization to feed\-forward inference, and semantic scene understanding has followed suit—yet existing methods remain confined to object\-centric perception, neglecting spatial relations between objects\.  We introduce \\emph\{3D spatial relation segmentation\}, a task that requires models to identify a target object satisfying a given spatial relation with respect to a subject, consistently across multiple views\.  To this end, we propose RelationVGGT, a novel feed\-forward framework that integrates semantic features from a visual foundation model with geometry\-aware representations from a 3D geometry foundation model and leverages a relation transformer for subject\-conditioned, cross\-view relation prediction—requiring neither per\-scene optimization nor known camera poses\.  We additionally provide a fully automated annotation pipeline built on ScanNet\+\+ with VLMs and LLMs, enabling scalable training data generation for this new task\.

## GGQR: Gaussian\-Grounded Query Refinement for Feed\-Forward 4D Gaussian Splatting

**Authors:** Jingqiao Xiu; Yicong Li; Leigang Qu; Angela Yao

**ID:** 151444 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aeBYEqSDxP>) | [PDF](<https://openreview.net/pdf?id=aeBYEqSDxP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151444>)

Feed\-forward 4D Gaussian Splatting \(4DGS\) offers an efficient paradigm for reconstructing dynamic scenes from monocular videos, bypassing the need for lengthy per\-scene optimization\. However, existing methods suffer from three fundamental bottlenecks: redundant frame\-wise grid\-aligned Gaussian representations, suboptimal single\-step 2D\-to\-4D regression architectures, and restrictive dependencies on 3D/4D signals during training or inference\. In response to these limitations, we introduce a novel Gaussian\-Grounded Query Refinement \(GGQR\) framework\. To reduce representation redundancy, GGQR learns a compact set of Gaussian queries equipped with a newly designed plateau\-shaped temporal kernel, enabling single primitives to persistently model motion\-consistent regions across extended frames\. To alleviate regression ambiguity, these queries are iteratively refined through a Gaussian\-grounded attention mechanism operating in 3D space\. Specifically, GGQR leverages foundation models to lift 2D observations into a shared 3D space, explicitly grounds the 3D attention in intermediate Gaussian states, and residually updates those Gaussian states\. Trained entirely self\-supervised on casual videos, GGQR achieves a new state\-of\-the\-art on dynamic reconstruction benchmarks among feed\-forward 4DGS methods, delivering superior performance in novel view\-time rendering alongside downstream motion modeling tasks\.

## UniCon3R: Unified Contact\-aware 4D Human\-Scene Reconstruction from Monocular Video

**Authors:** TANUJ SUR; Shashank Tripathi; Nikos Athanasiou; Ha Linh Nguyen; Kai Xu; Michael Black; Angela Yao

**ID:** 154503 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D63wCULfGW>) | [PDF](<https://openreview.net/pdf?id=D63wCULfGW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154503>)

We introduce $\\textbf\{UniCon3R\}$, a unified feed\-forward framework for online human\-scene 4D reconstruction from monocular video\. Current feed\-forward human\-scene reconstruction methods suffer from artifacts, where bodies float above the ground or penetrate parts of the scene\. A key reason is the lack of effective interaction modelling between the human and the environment\. Our goal is to exploit contact between the human and the scene during inference to actively improve the human mesh reconstruction\. To that end, we explicitly model interaction by inferring 4D contact from the human pose and scene geometry and use the contact as a corrective cue for generating the pose\. This enables UniCon3R to jointly recover scene  geometry and spatially aligned 4D humans within the scene\. Experiments on standard human\-centric video benchmarks show that UniCon3R outperforms state\-of\-the\-art baselines on physical plausibility and global human motion estimation while preserving fast, feed\-forward inference speeds\. The results validate our central claim: contact serves as a powerful internal prior, thus establishing a new paradigm for physically grounded joint human\-scene reconstruction\. Source code and models will be released upon acceptance\.

## WebSpline: Structure\-Informed Splines for Real\-Time 3D Gaussians from Monocular Videos

**Authors:** Jongmin Park; Jeonghwan Yun; Minh\-Quan V Bui; Munchurl Kim

**ID:** 151135 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ckDF7QvM5N>) | [PDF](<https://openreview.net/pdf?id=ckDF7QvM5N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151135>)

Dynamic scene reconstruction from monocular videos remains highly challenging, as existing methods often struggle to balance global structural coherence and local fine\-grained details under limited multi\-view cues\. To address this challenge, we propose WebSpline, a novel dynamic 3D Gaussian framework that enables structurally coherent and high\-fidelity reconstruction from monocular videos with fast rendering\. The core of WebSpline is the Structure\-Informed Spline \(SIS\) representation, which models each dynamic Gaussian trajectory using a learnable cubic Hermite spline whose motion is structurally organized with an auxiliary Structural Proxy Graph \(SPG\)\. The proposed framework is optimized in two stages: \(i\) in the first stage, the SPG is initialized from 2D point tracks and refined with temporal rigidity regularization to establish structural coherence for moving objects across the sequence; and \(ii\) in the second stage, the SIS representation is initialized from the refined SPG and optimized under both spatial and structural neighborhood constraints\. At inference, Gaussian motion is obtained solely by evaluating the learned SIS, enabling fast rendering\. Extensive experiments on the challenging monocular dynamic scene benchmarks, iPhone and NVIDIA, demonstrate that our WebSpline achieves state\-of\-the\-art rendering quality while rendering over 10x faster than WorldTree, the second\-best method on the iPhone dataset\.

## BEAST3D: animal behavioral analysis and neural encoding from multi\-view video via Gaussian splatting

**Authors:** Yanchen Wang; Lenny Aharon; Wangshu Zhu; Kyle Daruwalla; Linghua Zhang; Jiaru Zou; Selmaan N Chettih; X Helen Hou; Liam Paninski; Matthew Whiteway

**ID:** 149762 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nWHsSjFVA0>) | [PDF](<https://openreview.net/pdf?id=nWHsSjFVA0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149762>)

Multi\-view video recordings are increasingly used to capture the 3D movements of animals in experimental settings, yet extracting rich 3D representations from these recordings remains challenging\.  Supervised pose estimation requires extensive manual annotation, while general\-purpose 3D reconstruction models trained on generic scene datasets fail on the specialized imagery and sparse\-view setting of laboratory experiments\.  We address these limitations with BEAST3D, a self\-supervised pretraining framework that learns 3D visual representations from unlabeled, calibrated multi\-view video\.  BEAST3D uses a vision transformer to predict 3D Gaussian splats that reconstruct held\-out views through differentiable rendering, while simultaneously segmenting the animal from the background\. BEAST3D reconstructs 3D structure with as few as four views by conditioning directly on known camera parameters\-\-\-unlike general\-purpose models, which must estimate camera geometry from dense overlapping viewpoints that are seldom available in lab settings\. Through comprehensive evaluation across four species, we demonstrate that BEAST3D produces rich, viewpoint\-invariant features that transfer effectively to three downstream tasks:  novel view synthesis, which validates the quality of the learned 3D representations;  multi\-view pose estimation, which provides the sparse keypoint trajectories widely used in behavioral analysis; and neural encoding, which relates 3D behavioral features to simultaneously recorded neural activity\. BEAST3D thus establishes a versatile framework for behavioral analysis that leverages 3D structure in modern multi\-view laboratory recordings\.

## U\-MVP: Encode Locally, Decode Globally for Feed\-Forward 3D Gaussian Splatting

**Authors:** Seungkwon Yang; Gyeongjin Kang; Hwasik Jeong; Byeongjin Kang; Hyeongbhin Cho; Eunbyung Park

**ID:** 155292 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6exwb0yaJa>) | [PDF](<https://openreview.net/pdf?id=6exwb0yaJa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155292>)

Multi\-view transformers for feed\-forward 3D reconstruction must jointly solve two tasks\. They need to extract precise per\-view features and reason about cross\-view geometric correspondences\. Existing architectures apply cross\-view attention throughout the network, leaving each layer to handle both objectives together\. We revisit this design through a layer\-wise probing analysis of feed\-forward geometry transformers and observe that trained models tend to divide these two roles across layers\. Early layers tend to specialize in per\-frame feature extraction, while spatial cognition and cross\-view reasoning emerge predominantly in later layers\. This suggests that separating the two roles across the network can allocate compute more effectively\. Building on this observation, we propose U\-MVP, a U\-shaped multi\-view transformer for feed\-forward 3D Gaussian Splatting that reflects this structure in the architecture itself\. The encoder applies frame\-wise attention to preserve per\-view detail, the decoder introduces multi\-view attention for cross\-view geometric reasoning, and skip connections fuse the two streams so that appearance and geometry are recombined at decoding time\. To scale to dense view regimes, we replace several global interaction blocks at the bottleneck with a grouping and swapping scheme that preserves cross\-view information flow at lower cost\. U\-MVP performs competitively with feed\-forward and optimization\-based baselines from 16 to 256 views, generalizes to unseen datasets, and achieves strong results on 3D reconstruction and novel\-view synthesis in posed and unposed settings\.

## 3D Consistency Tokens

**Authors:** Seungtae Nam; Jungwoo Kim; Gyeongjin Kang; Younggeun Lee; Seungkwon Yang; Eunbyung Park

**ID:** 152512 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SZH9L8lpSt>) | [PDF](<https://openreview.net/pdf?id=SZH9L8lpSt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152512>)

We present 3D consistency tokens, a compact set of 3D anchors that ground cross\-view correspondence in explicit geometry\. While feedforward Gaussian models amortize per\-scene optimization into a single forward pass, their rendering quality still falls short of optimization\-based pipelines\. A primary cause lies in the relatively inaccurate correspondences they recover by comparing each image token to others across views based on appearance and semantic cues, which can be ambiguous in repetitive or semantically uniform regions\. The proposed consistency tokens alleviate such ambiguity by routing image tokens that look alike but originate from different parts of the scene to distinct anchors, so that cross\-view matches are established through shared 3D locations rather than appearance alone\. We construct the consistency tokens from point clouds produced by either Structure\-from\-Motion or modern geometry foundation models, both of which can be noisy or incomplete\. To address this, we adopt a bidirectional cross\-attention architecture in which the two token sets co\-refine one another, with image tokens gaining geometric grounding from the consistency tokens and the consistency tokens being corrected by the appearance cues of the images\. On DL3DV\-10K and in cross\-dataset evaluations on Mip\-NeRF 360 and Tanks &amp;amp; Temples, our approach surpasses prior feedforward models and attains quality competitive with optimization\-based pipelines, while preserving single\-pass efficiency\.

## $R^3$: 3D Reconstruction via Relative Regression

**Authors:** Congrong Xu; Huachen Gao; Xingyu Chen; Yuliang Xiu; Jun Gao; Anpei Chen

**ID:** 154197 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FThHVwc2w4>) | [PDF](<https://openreview.net/pdf?id=FThHVwc2w4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154197>)

Recent feed\-forward geometry foundation models have demonstrated impressive generalization by recovering depth and poses in a single forward pass\. However, these models are typically constrained by a global coordinate frame assumption\. This dependency becomes a significant bottleneck for long\-context and streaming reconstruction, as it forces the network to maintain an arbitrary temporal origin and handle translation magnitudes that grow unbounded over time\. Our solution, which we call $R^3$, employs relative regression\. We employ a lightweight MLP to predict confidence\-weighted relative constraints\. These confidences serve as a unified anchor: weighting losses during training and guiding pose aggregation during inference\. $R^3$ supports both full\-context offline reconstruction and causal, bounded\-memory streaming\. Our evaluation in both offline and streaming settings validates the effectiveness of our relative mechanism\.

## Unified Loss\-Aware Density Control for 3D Gaussian Splatting

**Authors:** Tae\-Young Kim; Jiwoo Chung; Jae\-Pil Heo

**ID:** 150948 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e6aTB4t6ha>) | [PDF](<https://openreview.net/pdf?id=e6aTB4t6ha>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150948>)

The efficiency and fidelity of 3D Gaussian Splatting critically depend on adaptive density control, which grows and suppresses Gaussian primitives throughout optimization\. However, the standard pipeline still relies on heuristic view\-space gradients, scale thresholds, and global opacity resets, rather than explicitly assessing the loss\-reducing effect of each split, clone, or opacity update\. This mismatch can allocate primitives to already\-sufficient regions, miss under\-reconstructed structures, and destabilize training through blanket opacity changes\. In this work, we recast adaptive density control as a collection of local loss\-reduction decisions\. We derive efficient Taylor\-based per\-Gaussian surrogates that predict the objective change caused by three primitive\-level operations: splitting, cloning, and opacity decay\. This yields unified loss\-aware framework with three components\. First, we extend second\-order splitting to a normalized joint position\-scale space, enabling children to adapt not only their locations but also their anisotropic extents\. Second, we formulate duplicate cloning as a surrogate minimization problem, selecting only Gaussians whose duplicated contribution is predicted to improve reconstruction and assigning each child a principled opacity\. Third, we replace global opacity reset with selective soft opacity decay that weakens harmful primitives while preserving useful ones\. Across standard 3DGS benchmarks, our method produces more targeted primitive allocation and achieves improved rendering quality with comparable or smaller Gaussian budgets compared to baselines\.

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

## Birth\-Death Structural Learning for 3D Gaussian Splatting

**Authors:** Tran Hong Quan; Long Nguyen\-Chi; Binh T\. Nguyen

**ID:** 155061 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8kpY9DyWuJ>) | [PDF](<https://openreview.net/pdf?id=8kpY9DyWuJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155061>)

3D Gaussian Splatting \(3DGS\) has become a standard representation for real\-time novel\-view synthesis\. Yet, its quality\-\-efficiency trade\-off still relies heavily on adaptive density control\. Existing cloning, splitting, and pruning rules use proxy signals—such as position gradients, opacity, image\-space error\. Although effective in practice, these signals do not directly answer the structural question behind density control: where should new Gaussians be allocated to reduce the multi\-view reconstruction loss, and which existing primitives can be pruned with minimal penalty? To address this, we propose first\-variation birth–death control for 3DGS, a principled approach that replaces heuristic structural decisions with a variational score derived from the reconstruction loss\. At each structural update, we freeze the current Gaussian population, attach an auxiliary mass coordinates to each primitive, and differentiate the multiview loss with respect to these coordinates\. We demonstrate that this score is a coordinate of the first variation of Splat Regression Model, giving a rigorous local descent surrogate for birth\-death moves: high\-score Gaussians are selected as birth sites, low\-score low\-opacity Gaussians are death\. Across standard 3DGS benchmarks, integrating this score into 3DGS\-MCMC yields state\-of\-the\-art reconstruction quality and outperforms existing methods, delivering the most significant gains under tight Gaussian budgets\. Ultimately, our work provides compelling evidence that gradient\-based variational metrics should replace proxy heuristics for structural updates in 3DGS\.

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

## PRISM: Human Point Cloud Reconstruction via Skeleton\-Guided Diffusion from MmWave Radar

**Authors:** Jiacheng Huang; Long Tian; Yuan Liu; Andy Khong

**ID:** 154342 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EIpwaV5AqN>) | [PDF](<https://openreview.net/pdf?id=EIpwaV5AqN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154342>)

Millimeter\-wave\(mmWave\) radar is an attractive modality for human sensing, offering all\-weather, non\-contact, and privacy\-preserving perception\. However, its inherent sparsity severely limits downstream human\-centric understanding, and there is currently no public dataset that provides paired quantitative benchmarks for dense human point cloud reconstruction under occlusion\. We present MIST, the first mmWave human point cloud dataset with paired quantitative benchmarks for through\-obstacle dense human reconstruction\. MIST captures synchronized clear\-view and through\-obstacle observations of the same subjects performing identical actions, separated by a physical barrier, and provides LiDAR\-based 3D ground truth\. We further incorporate a three\-level occlusion design that converts attenuation severity into a controlled variable, covering eight subjects, thirty action classes, and 640\~k paired frames\. To establish a baseline on MIST and address the limitations of point cloud completion under extreme sparsity and human motion, we propose PRISM, a skeleton\-guided conditional latent diffusion framework for reconstructing dense human point clouds from sparse mmWave radar alone\. Three conditioning streams—skeleton joint positions, coarse body geometry, and action class embeddings—are incorporated to guide a Dynamic Transformer within a VP\-SDE framework, enabling effective denoising and the reconstruction of mmWave human point clouds with near\-LiDAR quality\. On MIST, PRISM achieves a COV\-CD of 0\.362, significantly outperforming the strongest completion baseline \(0\.113\)\. Notably, PRISM maintains structurally coherent reconstruction even under severe through\-obstacle attenuation at approximately 50 points per frame, whereas all baselines collapse to fixed\-template outputs\.

## Learning Scene\-Grounded Interaction Priors for Scene\-Aware Human Motion Prediction

**Authors:** Donghyeon Soon; Yoon JI\- Il; Hyeondong Kim; Daehee Park

**ID:** 152697 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=R5YfoOMi5B>) | [PDF](<https://openreview.net/pdf?id=R5YfoOMi5B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152697>)

Human motion prediction \(HMP\) aims to forecast future movement from an observed motion sequence, and recent methods have incorporated 3D scene geometry and object semantics to improve long\-term plausibility\. However, the destination of future motion remains ambiguous in cluttered scenes: the same observed motion can lead to different interaction targets or navigation modes\. Existing methods either handle this ambiguity implicitly or rely on auxiliary signals like gaze that are hard to obtain in practice\. To address this, we propose SGIP, which explicitly predicts where in the scene future motion will be grounded across both objects and open navigation regions, and uses it to condition future trajectory and full\-body pose decoder\. This scene\-grounded interaction prior is learned via intent distillation: at training time only, a teacher model scores candidate scene regions by combining an LLM prompted with a textual description of the person's intent with geometric motion\-scene features\. A student model learns to reproduce these scores from only the observed motion and 3D scene, making intent and LLM unnecessary at test time\. Across multiple benchmark datasets, SGIP outperforms prior scene\-aware baselines on both trajectory and pose accuracy in a realistic deployment setting where neither gaze nor intent is available at inference, demonstrating effectiveness of the proposed framework\.

## Stable3R: Streaming 3D Reconstruction with Stable Geometric References

**Authors:** Jincheng Xiong; Jiarong Han; Hang Zhang; Mu Xu; Ming Qian

**ID:** 154907 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A2C5edhRjI>) | [PDF](<https://openreview.net/pdf?id=A2C5edhRjI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154907>)

Streaming 3D reconstruction has become a critical component for real\-time applications\. While recent advances have adapted large\-scale offline feedforward models into streaming architectures via causal attention and KV\-caching, they suffer from fundamental instability: the irreversible bias in early frames\. This limitation stems from two coupled factors: \(1\) the existing KV\-cache\-based causal architecture strictly prohibits access to future information, resulting in information\-poor early caches; and \(2\) current methods typically anchor the pose constraints to the initial frame, amplifying the early bias throughout the sequence\. To address these challenges, we propose Stable3R, a holistic framework that establishes stable geometric references by enriching historical caches and anchoring poses to prefixes rather than a single initial frame\. Specifically, we first introduce a lookahead\-augmented attention mechanism, integrating future observations into past caches without violating causal constraints\. Second, we adopt a frame\-equivariant architecture with prefix\-relative supervision, alleviating the reliance on the biased initial frame\. Extensive experiments across multiple benchmarks show that our method consistently boosts reconstruction quality within a strictly causal inference schedule\.

## PointForward: Feedforward Driving Reconstruction through Point\-Aligned Representations

**Authors:** Cheng Chi\_; Xianqi Wang; Hongcheng Luo; Mingfei Tu; Gangwei Xu; Zehan Zhang; Bing Wang; Guang Chen; Hangjun Ye; Sida Peng; Xin Yang; Haiyang Sun

**ID:** 148350 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yXM799qzPo>) | [PDF](<https://openreview.net/pdf?id=yXM799qzPo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148350>)

High\-fidelity reconstruction of driving scenes is crucial for autonomous driving\. While recent feedforward 3D Gaussian Splatting \(3DGS\) methods enable fast reconstruction, their per\-pixel Gaussian prediction paradigm often suffers from multi\-view inconsistency and layering artifacts\. Moreover, existing methods often model dynamic instances via dense flow prediction, which lacks explicit cross\-view correspondence and instance\-level consistency\. In this paper, we propose PointForward, a feedforward driving reconstruction framework through point\-aligned representations\. Unlike pixel\-aligned methods, we initialize sparse 3D queries in world space and aggregate multi\-view image information via spatial\-temporal fusion onto these queries, enforcing explicit cross\-view consistency in a single feedforward pass\. To handle scene dynamics, we introduce scene graphs that explicitly organize moving instances during reconstruction\. By leveraging 3D bounding boxes, our method enables instance\-level motion propagation and temporally consistent dynamic representations\. Extensive experiments demonstrate that PointForward achieves state\-of\-the\-art performance on large\-scale driving benchmarks\. The code will be available upon the publication of the paper\.

## Resolving Representation Ambiguity in Feedforward Novel View Synthesis Transformer via Semantic\-Spatial Decoupling

**Authors:** Yihang Wu; Yihang Sun; Shaofeng Zhang; Zuxuan Wu; Junchi Yan; Xiaosong Jia; Yu\-Gang Jiang

**ID:** 155192 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7aQyn669sE>) | [PDF](<https://openreview.net/pdf?id=7aQyn669sE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155192>)

Transformer\-based models have advanced feedforward novel view synthesis \(NVS\)\. Current architectures such as GS\-LRM and LVSM mix semantic information \(e\.g\., RGB\) and spatial information \(e\.g\., Pl\\"ucker rays\) into a shared feature space\. Since Pl\\"ucker rays naturally carry lattice\-like spatial structure, these designs can make the spatial bias interfere with appearance representation and degrade rendering fidelity\. To this end, we propose to decouple the representation of feedforward NVS transformers into separate semantic and spatial tokens\. The decoupled design keeps semantic and spatial information explicit in their branches while preserving cross\-branch interaction through shared attention routing\. Built on this design, we introduce optional categorized supervision and bidirectional modulation: the former provides branch\-specific training signals, while the latter improves interaction between the two branches\. Notably, the base decoupled design introduces virtually zero additional inference latency due to its architectural design\. The proposed designs achieve consistent improvements, demonstrating effectiveness across decoder\-only and encoder\-decoder feedforward NVS models\.

## BLARM: Animating 3D Objects from Video via Blending LAtent Rigid Motion Primitives

**Authors:** Pradyumn Goyal; Yizhak Ben\-Shabat; Hsueh\-Ti Derek Liu; Haomiao Jiang; Snehasish Mukherjee; Kyle Spence; Mark Stauber; Evangelos Kalogerakis; Yunze Zeng

**ID:** 155225 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7KoU7zMcDg>) | [PDF](<https://openreview.net/pdf?id=7KoU7zMcDg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155225>)

We introduce BLARM, a feed\-forward method for video\-driven 3D mesh animation\. Given a monocular video and a static object mesh, BLARM predicts a temporally coherent animated mesh whose motion follows the video\. Rather than relying on explicit rigs or directly regressing high\-dimensional vertex motion, we represent animation using a compact set of learned, time\-varying rigid motion components and time\-invariant vertex\-to\-component skinning weights\. This yields a low\-dimensional deformation space without requiring skeletons, cages, skinning weights, or rig annotations\. Our architecture conditions geometry\-derived deformation latents on video features through factorized spatial\-temporal attention, then decodes rigid transformations blended by predicted skinning weights\. Trained with trajectory reconstruction, entropy regularization, and motion\-aware contrastive learning, BLARM produces accurate and temporally stable animations while recovering compact, interpretable motion structure from monocular video\.

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

## MindShape: Superquadric\-Constrained High\-Fidelity 3D Reconstruction from fMRI

**Authors:** Xiaoquan Shen; Ming Li; Jianxiong Gao; Jiaxuan Chen; Xiangru Huang; Yanwei Fu; Gang Pan

**ID:** 149071 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t5aqllPnlD>) | [PDF](<https://openreview.net/pdf?id=t5aqllPnlD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149071>)

Recent advances in neural decoding have enabled the reconstruction of 3D visual content from functional magnetic resonance imaging \(fMRI\) signals, opening a route toward brain\-conditioned 3D generation\. Nevertheless, existing approaches largely rely on semantic or multi\-view priors without explicitly modeling 3D geometric constraints, often leading to structural distortions and degraded geometric fidelity\. To address this limitation, we propose MindShape, a geometry\-aware neural decoding framework for fMRI\-conditioned 3D reconstruction\. Unlike previous methods, MindShape decodes superquadric geometry as an explicit, low\-dimensional structural constraint and jointly conditions the 3D generation process on both geometric primitives and semantic descriptions, enabling semantically consistent and geometrically faithful reconstructions\. Experiments show that MindShape improves reconstruction quality in terms of geometric consistency and semantic fidelity over existing baselines\. These results suggest that explicit geometric primitives provide an effective structured interface between noisy neural measurements and controllable 3D generation\.

## FA\-LAM: Focus\-Aware Large Avatar Model for One\-Shot 4D Animatable Gaussian Head

**Authors:** Yingdong Hu; Yisheng He; Yiming Jiang; Zehong Lin; Steven Hoi; Jun Zhang

**ID:** 149554 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pGrWSHPZN0>) | [PDF](<https://openreview.net/pdf?id=pGrWSHPZN0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149554>)

We propose FA\-LAM, a focus\-aware large avatar model for one\-shot animatable Gaussian head creation, while simultaneously enabling static 3D and dynamic 4D full\-head recovery\. The core of our method lies in a thorough analysis of the attention mechanisms and the entangled reconstruction and animation training pipeline adopted by prior state\-of\-the\-art approaches\. Our analysis identifies two main factors that compromise the quality of 3D full\-head generation: \(1\) incorrect and noisy attention activations, and \(2\) conflicts between the tasks of reconstruction and animation\. To address the first issue, we introduce a symmetric and semantic attention regularization strategy that leverages the inherent semantics and structural symmetry of human heads\. To disentangle the objectives of reconstruction and animation, we develop a novel dual\-phase training pipeline that separates the model's capabilities for large\-view hallucination and animation into distinct modules\. Moreover, we enhance our model to support multi\-view and streaming 4D reconstruction in an efficient and memory\-friendly manner through a core autoregressive modification with tailored visibility\-aware token fusion\. Collectively, these innovations enable FA\-LAM to reconstruct animatable Gaussian full heads with superior quality, particularly in fine facial regions and large viewing angles\.

## Lookalike3D: Seeing Double in 3D

**Authors:** Chandan Yeshwanth; Angela Dai

**ID:** 153870 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=I8MCVub4xs>) | [PDF](<https://openreview.net/pdf?id=I8MCVub4xs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153870>)

3D object understanding and generation methods in indoor scenes produce impressive results, yet they often overlook a pervasive source of information in real\-world scenes: repeated objects\.  We introduce the task of lookalike object detection in indoor scenes, which leverages repeated and complementary cues from identical and near\-identical object pairs\. Given an input scene, the task is to classify pairs of objects as identical, similar or different using multiview images as input\. To address this, we present Lookalike3D, a multiview image transformer that effectively distinguishes such object pairs through similarity learning by harnessing strong semantic priors from large image foundation models\.   To support this task, we collected the 3DTwins dataset, containing 76k manually annotated identical, similar and different pairs of objects based on ScanNet\+\+, and show an improvement of 14\\% IoU over baselines on the task of lookalike object detection\. We also demonstrate how our method improves the downstream tasks of joint 3D object reconstruction and part co\-segmentation, turning repeated and lookalike objects into a powerful cue for consistent, high\-quality 3D scene understanding\. Our code, dataset and models will be made publicly available\.

## BA\-T: An Iterative Transformer for Two\-View Bundle Adjustment

**Authors:** Ganlin Zhang; Weirong Chen; Daniel Cremers; Xi Wang

**ID:** 148295 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yvXR9Dq8Oc>) | [PDF](<https://openreview.net/pdf?id=yvXR9Dq8Oc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148295>)

Feed\-forward models for 3D reconstruction have achieved strong performance using deep cross\-view attention to exchange information across images\. However, these approaches often depend on heavy decoder stacks and lack a structured mechanism for geometry refinement, resulting in poor multi\-view consistency\. We address this by drawing inspiration from classical bundle adjustment \(BA\), which can be viewed as an iterative information propagation process between poses and local geometry\. Inspired by BA, we propose BA\-T, an iterative Transformer that implements BA\-style structured updates as a repeatable layer in implicit token space\. Instead of relying on deep attention stacks, BA\-T refines predictions based on latent residual by a single lightweight layer\. Experiments demonstrate that BA\-T progressively improves pose and reconstruction accuracy across iterations, achieves stronger cross\-view consistency than conventional decoders, and matches or surpasses substantially larger models while using only 16\\% of their decoder parameters\. BA\-T provides a compact, efficient, and structural alternative to depth\-heavy attention, enabling accurate 3D reconstruction within a lightweight architecture\. The code will be made publicly\.

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

**ID:** 153055 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OLpIK3FJ5F>) | [PDF](<https://openreview.net/pdf?id=OLpIK3FJ5F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153055>)

Compositionality is critical for 3D object and scene generation, but existing part\-aware 3D generation methods suffer from poor scalability due to quadratic global attention costs when increasing the number of components\. In this work, we present MoCA, a compositional 3D generative model based on a novel component\-level sparse attention that explicitly models inter\-component dependencies\. The attention mechanism features two key designs: 1\) importance\-based component routing that utilizes a lightweight router module for cross\-component importance estimation and selects top\-k relevant components for fine\-grained interaction, and 2\) distant components compression that preserves spatial priors while reducing computational complexity of global attention, by including compressed distant components into attention calculation instead of discarding them\. With these designs, MoCA enables intricate compositional 3D asset creation with scalable number of components\. Extensive experiments show MoCA outperforms baselines on both compositional object and scene generation tasks\. Code and models will be made publicly available\.

## Seg3DParts: Segmentation\-Grounded Controllable Part\-Level 3D Generation

**Authors:** Jiantao Lin; Meixi Chen; Yingjie Xu; Chenbo FU; Leyi Wu; Hao CHEN; Yinchuan Li; Yingcong Chen

**ID:** 150061 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l2ZdxpKi1O>) | [PDF](<https://openreview.net/pdf?id=l2ZdxpKi1O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150061>)

Part\-level 3D assets are essential for editing, reassembly, and interaction, yet recovering such structure from a single image remains challenging due to occlusion, ambiguous boundaries, and the need for coherent multi\-part reasoning\. Existing approaches struggle to achieve both controllable part\-level generation and coherent multi\-part structure, as part identity and spatial allocation are typically inferred implicitly\. We present Seg3DParts, a segmentation\-grounded framework for controllable part\-level 3D generation from a single image\. By treating segmentation as an explicit grounding signal, our method defines part identity during generation, enabling each component to be anchored to a corresponding image region\. To ensure coherent assemblies, we introduce structured cross\-part interaction that allows components to exchange global context throughout the generative process\. As a result, Seg3DParts directly generates well\-aligned part meshes in a shared canonical space without post\-hoc alignment, supporting flexible and controllable decomposition\. We further introduce PartObjectNet, a large\-scale dataset with over 200K objects and 1M annotated parts\. Experiments demonstrate that Seg3DParts achieves superior geometry quality, cross\-part coherence, and part\-level controllability over existing methods\.

## GenRecon: Bridging Generative Priors for Multi\-View 3D Scene Reconstruction

**Authors:** Katharina Sophie Schmid; Nicolas von Lützow; Angela Dai; Jozef Hladký; Matthias Niessner

**ID:** 150911 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eUqP4liWTd>) | [PDF](<https://openreview.net/pdf?id=eUqP4liWTd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150911>)

We introduce a new approach to high\-fidelity 3D scene reconstruction from multi\-view RGB images that tightly couples reconstruction with a strong generative 3D prior\. We cast scene reconstruction as conditional 3D generation over a set of spatially\-localized, overlapping chunks that together tile the scene, scaling generation to large scene extents\. Crucially, we inherit the fidelity and completeness of state\-of\-the\-art generative shape models \-\- we use Trellis\.2 as an example \-\- which we generalize to the scene level\. To this end, we propose a projection\-based conditioning mechanism that lifts posed multi\-view image features into a coherent 3D representation aligned with the generative model, independent of view ordering and spatially anchored to the scene, yielding high\-fidelity, multi\-view consistent generated geometry\. This enables lifting the strong object\-level prior of Trellis\.2 to multi\-view, scene\-scale generation, producing faithful, editable PBR mesh reconstructions of indoor environments\. As a result, we obtain high\-fidelity results that outperform cutting\-edge reconstruction methods by 16\\%\.

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

## Generative Structure from Motion with Native 3D Diffusion

**Authors:** Haobin Duan; Binbin Huang; Mochu Xiang; Yiqun Zhao; Zibo Zhao; Yi Ma; Shenghua Gao

**ID:** 152786 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QL96jpgsPY>) | [PDF](<https://openreview.net/pdf?id=QL96jpgsPY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152786>)

Recovering an object's 3D structure and camera motion from a few uncalibrated views is a fundamental problem in computer vision\. Classical structure from motion methods recover 3D geometry consistent with the input images but cannot recover unseen regions; native generation methods produce plausible 3D objects which are related but not necessarily faithful to the input images\. Methods simply concanetating reconstruction and generation allow error to cascade across the two stages, instead of producing a 3D object consistent with both the distribution and the input\. We propose GenSfM, which integrates image\-based 3D reconstruction with a native 3D diffusion model\. In particular, we use a multi\-modal diffusion transformer to jointly denoise the shape latent and per\-view pose latents under shared self\-attention, grounding generated geometry in the observed views while using object\-level priors to infer unobserved regions\. A compact 3D\-native UV\-volume tokenization keeps the joint sequence small as views are added, and a pose\-aware stage refines geometry and texture by sampling per\-voxel image features at the recovered camera poses\. On Toys4k and GSO, for $4$ uncalibrated views, GenSfM improves novel\-view PSNR by $3\.2$\-\-$4\.5$\~dB and reduces median Chamfer distance by $2\.8$\-\-$3\.8\\times$ over the strongest 3D\-generation baseline, while recovering input\-view poses over $96\\%$ Acc@$5^\\circ$ without any external pose\-estimation backbone, post\-hoc optimization, or known intrinsics\.

## A Unified Framework for Image\-to\-3D Part Generation via Variable Granularity

**Authors:** Qiwen Gu; Xin Zhou; Xiwu Chen; Zhongyang Zhu; Zhuo Zhang; Junqiao Zhao

**ID:** 150141 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kMbkSnVh5B>) | [PDF](<https://openreview.net/pdf?id=kMbkSnVh5B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150141>)

Controllable 3D part generation is pivotal for digital asset creation, yet existing methods lack the flexibility to accommodate diverse user workflows requiring varying levels of control\. In this paper, we introduce FlexPart, a unified image\-to\-3D part generation framework that supports variable\-granularity geometric conditions within a single model\. By seamlessly integrating heterogeneous inputs, ranging from sparse points to dense bounding boxes and masks, via gated adaptive modulation, FlexPart unlocks a powerful cross\-granularity synergy\. We also propose an asymmetric geometric guidance mechanism that leverages strong spatial priors to align representations across granularities, improving geometric consistency and facilitating inter\-task synergy\. Extensive experiments demonstrate that this synergistic approach outperforms state\-of\-the\-art methods by over 10\.5\\% on Part CD, achieving high\-fidelity part generation with superior geometric consistency across all prompt granularities\. Code and models will be made publicly available\.

## BrickAnything: Geometry\-Conditioned Buildable Brick Generation with Structure\-Aware Tokenization

**Authors:** zhengyang Ni; Feng yan; Yu Guo; Fei Wang

**ID:** 154364 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E8PQVRghmQ>) | [PDF](<https://openreview.net/pdf?id=E8PQVRghmQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154364>)

Generating physically buildable brick structures from 3D shapes requires more than geometric reconstruction: the output must also satisfy discrete part constraints and structural stability\. Existing brick generation methods either rely on heuristic optimization, which can break down when the target 3D shape does not admit a feasible structure under predefined constraints, or generate brick sequences without explicitly modeling the underlying 3D geometry and assembly relations\.  In this work, we present BrickAnything, a geometry\-conditioned autoregressive framework for generating buildable brick structures from diverse 3D representations\. BrickAnything uses point clouds as a unified geometric interface and predicts brick sequences that reconstruct the target shape under assembly constraints\. To model structural dependencies among bricks, we introduce a structure\-aware tree tokenization, which represents brick structures through local attachment relations\. This formulation makes sequence generation more consistent with the physical construction process,  and reduces invalid intermediate states\. We further introduce preference\-based alignment post\-training, validity\-constrained decoding and adaptive rollback to improve buildability objectives such as stability and geometric fidelity\. Extensive experiments demonstrate that BrickAnything produces geometrically faithful and physically realizable brick structures, and that the proposed tokenization effectively reduces rollback and regeneration compared with conventional ordering strategies\.

## Invaria: Learning Scale and Density Invariance in Point Clouds via Next\-Resolution Prediction

**Authors:** Chun\-Peng Chang; Shaoxiang Wang; Alain Pagani; Dariu Gavrila; Holger Caesar

**ID:** 152764 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QYAtNtsZ3S>) | [PDF](<https://openreview.net/pdf?id=QYAtNtsZ3S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152764>)

Modern image encoders achieve high generalization by decoupling semantic meaning from resolution, an ability yet to be fully realized in the 3D domain\. We investigate the failure of 3D point cloud encoders to achieve similar generalization and find that existing models are highly sensitive to sampling resolution and scale changes, leading to significant performance degradation\. This sensitivity is a major bottleneck for real\-world deployment in robotics, as it suggests models overfit to specific quantization densities and object scales rather than learning invariant semantic features\. To mitigate this dependency, we propose Invaria, a point cloud encoder that achieves scale and density invariance through next\-resolution prediction and receptive field calibration\. While our objective is not the explicit generation of high\-resolution point clouds, we find that this training objective encourages the model to learn robust, structural invariants\. The resulting encoder achieves significant performance gains during resolution shifts while maintaining high efficiency through a compact model size and reduced token requirements\. Specifically, on ScanNet, Invaria achieves a 56\.0\\% higher mIoU at 3$\\times$ lower resolution and a 20\\% improvement when the objects scale is reduced by a factor of 3\. These gains are achieved with a 45\\% smaller model size and an average reduction of 40\\% in input tokens\. The code will be released once the paper is published\.

## BrickFlow: Connectivity\-Guided Brick Reconstruction

**Authors:** Peter Kulits; Cordelia Schmid

**ID:** 151991 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WJX7hy4lhB>) | [PDF](<https://openreview.net/pdf?id=WJX7hy4lhB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151991>)

Given a set of LEGO parts and an image of an assembled object, our task is to infer the pose of each part to assemble the object\. In contrast with traditional 3D reconstruction, doing so requires satisfying discrete physical constraints, which provide structure but render the problem combinatorial and highly sensitive to small pose errors\. To learn a prior over how parts fit together, we train a set\-conditioned SE\(3\) flow model that maps noisy poses to valid assemblies\. We then finetune this model to inject image conditioning\. However, while the learned flow captures global structure, it does not enforce connectivity\. To address this, we introduce an analytic connector\-field guidance to pull predictions toward the connection\-consistent manifold at test time\. Through this, we demonstrate improved validity and reconstruction performance, scaling with model size, pretraining, and conditional guidance\. We will make our models and data available for research purposes\.

## Open\-Vocabulary 3D Part Segmentation with Semantic Propagation Hawkes Process

**Authors:** Kejie Shi; Kun Zhou; Jieyu Zhao; Xulun Ye

**ID:** 155432 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5hcg8T2gV0>) | [PDF](<https://openreview.net/pdf?id=5hcg8T2gV0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155432>)

Existing open\-vocabulary 3D part segmentation methods typically rely on point–text matching, where semantic organization is shaped implicitly by the training loss, and both training and inference lack an explicit forward semantic optimization mechanism\. We address this limitation with a framework of forward semantic dynamics, implemented with coupled semantic\-dynamics blocks that organize part semantics within a single forward pass\. Specifically, differentiable forward low\-rank semantic shaping constrains point features to a prompt\-conditioned semantic subspace, suppressing semantic drift and improving intra\-part consistency\. Built on this shaped state, a finite\-depth spatial Hawkes process for semantic propagation models high\-confidence prompt responses as sparse semantic events and propagates them across multiple steps to provide reliable evidence for ambiguous regions\. The propagated context is further fed back into later feature shaping, coupling semantic organization and evidence propagation without test\-time iterative optimization or additional post\-processing\. Extensive experiments on multiple open\-vocabulary 3D part segmentation benchmarks show that our method establishes a new state of the art, outperforming the previous comparable SOTA method on all 16 reported evaluation slices by 1\.88 to 5\.31 mIoU points \(3\.84 on average\) and achieving the overall best results on 14 of them\.

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

## PointZero: 3D Point Track Completion for Learning Transferable 3D Dynamics

**Authors:** Bardienus Duisterhof; Kaifeng Zhang; Adam Hung; Bowen Wen; Stan Birchfield; Yunzhu Li; Deva Ramanan; Jeffrey Ichnowski

**ID:** 149391 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qPN2noamDW>) | [PDF](<https://openreview.net/pdf?id=qPN2noamDW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149391>)

World models endow perceptual systems with the ability to predict how scenes evolve under interaction\.  They are most beneficial when trained on diverse volumes of data, to instill a rich prior into downstream applications\. Existing methods for capturing 3D world models are typically scene\-specific dynamics models, or require robot action labels \- which excludes web video data from the training pool\.  We study 3D point track completion as a pre\-trianing objective for learning transferable 3D dynamics without robot data\. Given a single RGB\-D observation and sparse partial 3D trajectories \(tracks\), we predict future 3D tracks of all observed points\. We show this is a objective provides a rich dynamics prior, without requiring robot action labels\. We contribute a diverse dataset of 2\.9 million synthetic frames spanning deformable, articulated, and rigid objects, and use it to train PointZero\. We show that a flexible and expressive transformer, PointZero, outperforms prior methods on the same data\. We demonstrate the utility of our pre\-training objective by fine\-tuning PointZero for two downstream applications: \(1\) action\-conditioned dynamics and \(2\) robot manipulation\. When fine\-tuned to condition on end\-effector pose, PointZero outperforms the baselines on a recent action\-conditioned 3D dynamics benchmark\. When fine\-tuned to predict robot actions, PointZero outperforms or matches the baselines on 6/7 simulated and real\-world robot manipulation tasks\. We furthermore evaluate training PointZero from scratch to isolate the benefits of our proposed architecture from those of our proposed pre\-training objective and dataset\. We release the dataset, model checkpoints, and full training recipe\.

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

## Seeing Both the Forest and the Trees: Reusing Holistic 3D Priors for Part\-Decomposed Generation

**Authors:** Yiqun Zhao; Binbin Huang; Haobin Duan; Zibo Zhao; Shenghua Gao

**ID:** 153133 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NdxaPh23ii>) | [PDF](<https://openreview.net/pdf?id=NdxaPh23ii>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153133>)

Generating 3D assets with explicit parts requires two properties at once: geometric detail inside each part and structural coherence across the whole object\. Recent image\-conditioned 3D generation models adopt a \\emph\{structured 3D representation\} that anchors tokens to explicit spatial positions, capturing both properties, but their output remains a single fused mesh\. We ask how a part\-decomposed generation model can inherit both properties of these holistic priors, and answer with STRUCT\-PARTS, a framework whose core technical contribution is a dual\-frame coordinate interleaving mechanism: each shape latent is interpreted under both a part\-local and an object\-global reference frame, and processed through a global\-local interleaved transformer that simultaneously reuses the prior's geometric detail at the part scale and its structural coherence at the whole\-object scale\. As its structural input, STRUCT\-PARTS uses a segmented mesh scaffold, a coarse mesh paired with a face\-level segmentation mask kept entirely within the prior's native 3D representation\. With only lightweight finetuning, both intra\-part detail and inter\-part coherence emerge from the same pretrained weights\. On PartObjaverse\-Tiny, STRUCT\-PARTS matches or surpasses prior part\-decomposed models at a fraction of their training cost, while naturally supporting part\-mesh refinement and part\-level editing\.

## ControlFlow3D: Distilling Multi\-View Knowledge into Latent Flow Matching for Point Cloud Upsampling

**Authors:** Yuang Liu; Zhi Zuo; Zhengkai Zhao; Lirui Zhang; Pan Gao; Hao Feng; Zhengzhe Liu

**ID:** 151092 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d1VrPTpLIA>) | [PDF](<https://openreview.net/pdf?id=d1VrPTpLIA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151092>)

Point cloud upsampling is essential for 3D applications but remains challenging due to sparse, under\-constrained observations\. Multi\-view images can resolve geometric ambiguity, but existing multi\-modal methods do not fully exploit visual cues\. We propose ControlFlow3D, a framework that distills knowledge from pretrained foundation models into a lightweight generation network during training, enabling strong performance without multi\-view images available at test time\. Specifically, our method performs conditional flow matching in a structured latent space defined by a frozen 3D encoder\. Multi\-view image tokens and 3D latent tokens are jointly clustered into shared prototypes via unsupervised soft KMeans; the resulting prototypes guide the flow trajectory through velocity control and are aligned by a consistency loss that progressively transfers image knowledge into the base network\. A Mamba\-based geometry decoder then maps latent features to dense coordinates with linear complexity\. We also construct ShapeNetPU, a 35K\-object multi\-modal benchmark that is 31times larger than prior datasets\. Extensive experiments across multiple benchmarks demonstrate the effectiveness of our method and its strong generalization capability\.

## RSPReg: Reliability\-aware Structural Prototype Learning for Point Cloud Registration

**Authors:** Arzigul Ahat; Eksan Firkat; Askar Hamdulla

**ID:** 152998 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OjR3vaQ1iv>) | [PDF](<https://openreview.net/pdf?id=OjR3vaQ1iv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152998>)

Point cloud registration remains challenging in scenarios with low overlap, repetitive structures, and local geometric ambiguities, where candidate correspondences established based on local geometric similarity often lack global structural consistency and are prone to unreliable matches\. To address this issue, this paper proposes RSPReg, a reliability\-aware structural prototype learning framework for robust point cloud registration\. RSPReg learns structural prototypes from rotation\-invariant coarse\-level superpoint features to characterize the structural attributes of local regions within the entire point cloud\. These prototypes are further introduced as structural priors into cross\-cloud correspondence reasoning, thereby improving the structural consistency of candidate correspondences\. Furthermore, RSPReg estimates the uncertainty of structural prototypes and adaptively modulates the role of structural priors in the matching and pose estimation processes, reducing the negative impact of ambiguous and non\-overlapping regions on registration results\. Experiments on 3DMatch, 3DLoMatch, KITTI, and ETH demonstrate that RSPReg achieves the highest registration recall and exhibits clear advantages in low\-overlap and cross\-domain scenarios\.

## Instruct\-Particulate: Scaling Feed\-Forward 3D Object Articulation with Kinematic Control

**Authors:** Ruining Li; Yuxin Yao; Matt Zhou; Chuanxia Zheng; Christian Rupprecht; Joan Lasenby; Shangzhe Wu; Andrea Vedaldi

**ID:** 153831 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IOqjhePFzC>) | [PDF](<https://openreview.net/pdf?id=IOqjhePFzC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153831>)

Reconstructing articulated 3D objects is important for animation, gaming, and robotic simulations\. Recent neural networks can estimate the articulated structure of 3D objects, but their generalization remains limited by the scarcity of annotated data for this task\. To address this gap, we introduce Instruct\-Particulate, a model that takes a 3D mesh together with a target kinematic specification, including part descriptions, connectivity, joint types, and optional point prompts, and predicts the corresponding kinematic part segmentation and joint motion parameters\. The kinematic specification disambiguates the task and allows the model to target annotations of different granularity, thereby making it possible to use more abundant heterogeneous training data\. At test time, the kinematic specification can be obtained automatically, so the model can be applied to any input mesh\. To train our model at scale, we construct a heterogeneous dataset of more than 150,000 articulated 3D objects, extending existing publicly available collections with data obtained by partially labelling other 3D models, monolithic or already decomposed into parts, with kinematic labels by means of vision\-language models\. Experiments show that our model generalizes better across categories and to AI\-generated meshes, enabling articulated asset reconstruction from real\-world images via image\-to\-3D models\.

## Geometry Matters in Packed 3D Attention

**Authors:** Amil Khan; Anantajit Subrahmanya; B\.S\. Manjunath

**ID:** 149667 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oLN3S4iIZn>) | [PDF](<https://openreview.net/pdf?id=oLN3S4iIZn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149667>)

Packed high\-token 3D fields are not just long\-sequence modeling: once a volume is packed into tokens, sequence order is no longer the geometry of the sample\.  This creates a general failure mode for attention over packed geometric data: sequence\-index positional mechanisms can learn the memory layout rather than the object\.  We introduce Pack3D, a geometry\-aware local\-\-global attention operator that separates memory layout from attention geometry\. Pack3D keeps local neighborhood attention exact, compresses only distant context into contiguous 3D block summaries, and indexes attention with axial RoPE on true 3D token\-grid coordinates rather than packed sequence positions\.  With RoPE applied before block compression, each query interacts with a geometry\-aware mixture of block tokens, so compressed global context remains spatially interpretable after packing\.  A synthetic repacking benchmark makes the failure mode explicit: learned positional embeddings and packed\-sequence RoPE fail under layout changes, whereas axial grid\-coordinate RoPE remains invariant\.  On Allen WTC\-\-11 hiPSC microscopy, our main claim\-grade domain, Pack3D improves matched learned\-position local\-\-global attention by 0\.0978 best macro Dice and 0\.1248 final macro Dice at 262k tokens and depth 8\.  In an Allen\-15 joint comparison, Pack3D also improves over a parameter\-matched TokenGrid 3D U\-Net on both best and final macro Dice\.  Inference\-time ablations show that the trained model genuinely uses its compressed summaries, and the fused forward/backward implementation is $6\.49\\times$ lower latency than dense SDPA at 65k tokens\.

## Intrinsic\-dimension empirical Bernstein inequalities for bounded self\-adjoint operators

**Authors:** Diego Martinez Taboada; Aaditya Ramdas

**ID:** 148546 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x4akadcHLx>) | [PDF](<https://openreview.net/pdf?id=x4akadcHLx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148546>)

Operator\-valued concentration inequalities are foundational to the analysis of modern high\-dimensional statistics and randomized algorithms\. However, standard oracle bounds are frequently limited in practice: they require explicit a priori knowledge of the true variance, and often explicitly scale with the ambient dimension, rendering them vacuous for infinite\-dimensional or heavily structured operators\. Motivated by these challenges, we establish the first empirical Bennett and Bernstein inequalities for sums of independent, bounded, compact self\-adjoint operators\. Our fully data\-driven bounds replace the unknown variance with an empirical estimate and rely strictly on the intrinsic dimension rather than the ambient dimension\. This structural shift yields computable, dimension\-free guarantees that are strictly sharper for non\-isotropic random matrices and seamlessly extend to infinite\-dimensional Hilbert spaces\. We demonstrate that our empirical bounds achieve asymptotic sharpness with the best known oracle rates\. Finally, as an independent byproduct, we derive novel empirical concentration guarantees for the intrinsic dimension itself\.

## Fast 4D Mesh Generation by Spatio\-Temporal Attention Chains

**Authors:** Dvir Samuel; Yuval Atzmon; Gal Chechik; Yoni Kasten

**ID:** 151229 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bwPja6GtAE>) | [PDF](<https://openreview.net/pdf?id=bwPja6GtAE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151229>)

4D mesh generation has recently emerged as a powerful paradigm for recovering dynamic 3D structure from videos, but existing methods remain slow, computationally expensive, and difficult to scale to longer sequences\. We introduce a training\-free approach that accelerates 4D mesh generation while improving temporal correspondence quality\. Our key observation is that temporal correspondences emerge inside a 4D backbone long before its generated meshes become visually accurate\. We exploit this with a general framework we call Spatio\-Temporal Attention Chain which propagates information across space and time\. Starting from vertices on an anchor mesh, the chain maps vertices to latent tokens\. It then follows temporal correspondences in latent space, and recovers frame\-specific vertices through latent\-to\-vertex attention\. This design avoids expensive explicit matching while preserving anchor mesh details and thereby improving dynamic mesh geometry and temporal consistency\.   Compared to state\-of\-the\-art, our method generates a 4D mesh in 9 seconds, achieving a $13\\times$ speedup while producing higher\-quality results\. Moreover, our approach scales to videos up to $16\\times$ longer without degrading mesh quality\. Beyond generation, the improved correspondences enable competitive zero\-shot performance on two downstream tasks: 2D object tracking and 4D tracking\. We further show that our framework enables reliable camera estimation, a capability not supported by prior 4D mesh generation methods\.

## Coarse\-to\-Real: Generative Rendering for Populated Dynamic Scenes

**Authors:** Gonzalo Gomez\-Nogales; Yicong Hong; Chongjian GE; Peiye Zhuang; Marc Comino\-Trinidad; Dan Casas; Yi Zhou

**ID:** 150766 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fVp15tyVKH>) | [PDF](<https://openreview.net/pdf?id=fVp15tyVKH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150766>)

Traditional rendering pipelines rely on complex assets, accurate materials and lighting, and substantial computational resources to produce realistic imagery, yet they still face challenges in scalability and realism for populated dynamic scenes\. We present C2R \(Coarse\-to\-Real\), a generative rendering framework that synthesizes real\-style urban crowd videos from coarse 3D simulations\. Our approach uses coarse 3D renderings to explicitly control scene layout, camera motion, and human trajectories, while a learned neural renderer generates realistic appearance, lighting, and fine\-scale dynamics guided by text prompts\. To overcome the lack of paired training data between coarse simulations and real videos, we adopt a two\-stage synthetic\-real domain\-hedging strategy that first learns a strong generative prior from large\-scale real footage, then introduces controllability by using a small amount of paired synthetic coarse\-fine data to anchor shared implicit spatio\-temporal features across domains\. The resulting system supports coarse\-to\-fine control, generalizes across diverse CG and game inputs, and produces temporally consistent, controllable, and realistic urban scene videos from minimal 3D input\.

## Point Cloud Sequence Encoding for Material\-conditioned Graph Network Simulators

**Authors:** Philipp Dahlinger; Balázs Gyenes; Niklas Freymuth; Luca Geminiani; Tobias Würth; Johannes Mitsch; Nadja Klein; Luise Kärger; Gerhard Neumann

**ID:** 153208 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N1j3W5Bm2y>) | [PDF](<https://openreview.net/pdf?id=N1j3W5Bm2y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153208>)

Graph Network Simulators \(GNS\) have emerged as powerful surrogates for complex physics\-based simulation, offering inherent differentiability and orders\-of\-magnitude speedups over traditional solvers\.  However, GNSs typically assume access to the underlying material parameters, such as stiffness or viscosity,  severely limiting their utility in realistic experimental settings\. While recent meta\-learning approaches address the parameter dependency by inferring properties from mesh trajectories, reconstructing a mesh from an observed scene is difficult\. In this work, we introduce Point Cloud Encoding for Accurate Context Handling \(PEACH\), a novel framework that applies in\-context learning on point clouds to adapt a learned simulator to unseen physical properties during inference\. Our approach relies on a novel spatio\-temporal point cloud sequence encoder, as well as two forms of auxiliary supervision to help improve simulation fidelity\. We demonstrate that PEACH is capable of accurate zero\-shot sim\-to\-real transfer on a challenging, dynamic scene\. Experiments on simulation scenes show that PEACH even outperforms mesh\-based baselines on simulation accuracy, while being much more practical for real\-world deployment\.

## FlashSSM\-3D: A Distilled State Space Model for Lightning\-Fast Dense 3D Reconstruction

**Authors:** Nyle Siddiqui; Mubarak Shah

**ID:** 149335 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qrND6erSwi>) | [PDF](<https://openreview.net/pdf?id=qrND6erSwi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149335>)

3D geometric understanding is undergoing a major transition where rigid, deterministic, optimization\-based pipelines are being replaced by large\-scale, deep learning models\. While recent methods achieve impressive performance on tasks such as multi\-view 3D reconstruction and camera pose estimation, they suffer from two critical limitations: $\\textbf\{\(i\):\}$ current state\-of\-the\-art \(SOTA\) models require industry\-level compute and training corpora, severely limiting accessibility, and $\\textbf\{\(ii\):\}$ recent approaches remain constrained to modifying existing pretrained transformer models, since substantially changing their architecture would require retraining from scratch\. We instead study a complementary direction: training an attention\-free state space model for dense 3D understanding\. We introduce $\\textbf\{FlashSSM\-3D\}$, the first 3D reconstruction state space model capable of performing accurate geometric reasoning over hundreds of images with linear computational complexity\. However, training such a model from scratch with competitive performance is impractical under typical academic compute constraints\.  To address this, we train FlashSSM\-3D by distilling knowledge from VGGT, avoiding the need to learn 3D geometric priors entirely from scratch\. However, standard distillation losses are poorly suited for dense 3D reconstruction, where preserving real\-world spatial structure is essential\. We therefore propose a $\\textbf\{geometry\-aware knowledge distillation\}$ method specifically tailored for large\-scale 3D reconstruction models\. Our method introduces two novel losses: a Procrustes\-based alignment loss that enforces global structural consistency between student and teacher 3D point predictions, and a camera reprojection loss that directly supervises view\-consistent camera geometry between teacher and student\. Extensive experiments across multi\-view 3D reconstruction and camera pose estimation benchmarks demonstrate that FlashSSM\-3D achieves competitive performance while requiring only $\\sim25\\\\%$ of the training data and less than $10\\\\%$ of the training compute used by VGGT\. At inference time, FlashSSM\-3D benefits from the practical efficiency of state space models, reconstructing scenes from 500\+ views in under 10 seconds while maintaining competitive accuracy\.

## ReorgGS: Equivalent Distribution Reorganization for 3D Gaussian Splatting

**Authors:** Luchao Wang; Kaimin Liao; Hua Wang; Qian Ren; Zhi Chen; Yaohua Tang

**ID:** 151643 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z4xgDCwiYE>) | [PDF](<https://openreview.net/pdf?id=Z4xgDCwiYE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151643>)

While a converged 3D Gaussian Splatting \(3DGS\) model may accurately approximate a target scene, its underlying parameterization often becomes severely ill\-suited for further optimization\. We identify this late\-stage bottleneck as \\emph\{parameterization degeneration\}: high\-opacity floaters truncate gradient flow to background surfaces via alpha compositing, and redundant overlapping clusters cause severe parameter coupling with nearly collinear Jacobian responses\. These structural barriers explain why continued optimization plateaus, even when removable artifacts persist\. To break this deadlock, we propose ReorgGS, an equivalent distribution reorganization method\. By treating the converged Gaussian set as an empirical probability field, ReorgGS resamples centers, estimates local anisotropic covariances via kNN, and initializes a low\-opacity state before resuming optimization\. Unlike standard opacity reset—which only rescales weights on a flawed topology—ReorgGS fundamentally rebuilds the spatial and visibility structure\. Our analysis reveals a crucial insight: \\emph\{distributional equivalence does not imply optimization equivalence\}\. By preserving scene support while drastically improving gradient accessibility and reducing opacity\-weighted overlap, ReorgGS provides a vastly superior optimization landscape\. Under the same optimization budget and fixed Gaussian count, ReorgGS breaks the performance ceiling, suppresses persistent floaters, and reduces rendering overhead by eliminating redundant overlap\.

## Point Clustering Encoders

**Authors:** Evangelos Chatzipantazis; Guillem Brasó; Cristiano Saltori; Sérgio Agostinho; Kostas Daniilidis; Aljosa Osep; Laura Leal\-Taixé

**ID:** 154909 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A1CTIB6NLz>) | [PDF](<https://openreview.net/pdf?id=A1CTIB6NLz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154909>)

Learning expressive and transferable representations from unstructured 3D data remains a fundamental challenge\. Existing backbones mirror the design of image\-based networks by relying on symmetric U\-Net architectures with large parametric decoders and feature skip connections\. While successful in 2D, these designs are ill\-suited for 3D domain where point coordinates, that define the underlying geometric manifold on which feature representations are learned, are sensitive to sensor\-specific sampling patterns\. In such architectures, skip connections allow low\-level coordinate cues to bypass the semantic bottleneck, leading the model to overfit to local spatial patterns rather than learning robust, transferable semantic abstractions\. We re\-think this design and introduce Point Clustering Encoders \(PCE\), a minimal, decoder\-free network that treats point cloud processing as a hierarchy of end\-to\-end learned spatial supertokens\. At the core of PCE is our Time\-Reversible Attention Pooling \(TRAP\) layer, which formalizes hierarchical downsampling as a time\-reversible Markov chain\. By coupling upsampling to the reverse chain, we eliminate the need for traditional decoders; the task of representation learning is fully delegated to the encoder\. PCE not only surpasses state\-of\-the\-art w\.r\.t\. segmentation accuracy in indoor/outdoor datasets across a variety of tasks, but also reduces the number of trainable parameters, and can process scenes consisting of up to 6\.5M points\.

## Decomposing Earth Embeddings with Sparse Autoencoders

**Authors:** Vitus Benson; Fanny Yang; Markus Reichstein

**ID:** 150168 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kB29xkjNQK>) | [PDF](<https://openreview.net/pdf?id=kB29xkjNQK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150168>)

Earth observation foundation models produce global meter\-resolution embeddings that underpin work across agriculture, ecology, hydrology, and beyond\. Yet the embeddings themselves are opaque: each dimension entangles unrelated physical concepts, rendering their interpretability and robustness challenging for practitioners and scientists alike\. Here, we propose sparse autoencoders \(SAEs\) as a principled way to decompose Earth embeddings into overcomplete dictionaries of sparse, approximately monosemantic features\. We introduce an evaluation protocol suited to a domain where LLM\-based auto\-interpretability fails and spatial autocorrelation matters, scoring any SAE on reconstruction, sparsity, monosemantic recovery, and spatial coherence against a curated label registry of categorical and continuous reference products\. On this protocol, three state\-of\-the\-art SAE recipes \(ReLU\+$\\ell\_1$, BatchTopK, and Matryoshka BatchTopK\) all recover monosemantic and spatially contiguous concepts from AlphaEarth and Tessera embeddings much better than raw embeddings, with Matryoshka the strongest of the three\. Two applications follow: \(i\) unsupervised discovery of land\-cover subconcepts \(e\.g\., splitting water into river, lake, ocean\), and \(ii\) improved area\-of\-applicability estimates for OOD detection\. Together, these results are a step toward Earth observation models whose features can be inspected rather than only used, opening pathways for scientific discovery and improved trustworthiness in geospatial applications\. Code and models will be released upon publication\.

## DiDE: Direct Injection with Color\-Texture DEcoupling for 3D Stylization

**Authors:** Tao Wu; Alexandra Gomez\-Villa; Senmao Li; Yaxing Wang; Joost van de Weijer; Kai Wang

**ID:** 152453 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T0OsmO746x>) | [PDF](<https://openreview.net/pdf?id=T0OsmO746x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152453>)

Recent advances in rectified flow\-based image\-to\-3D generative models have enabled high\-fidelity 3D asset generation\. Building on this, a growing line of work has exploited these strong 3D priors for training\-free stylization, transferring visual attributes from a reference image onto a generated 3D asset\. However, existing methods enforce an all\-or\-nothing paradigm: color and texture are transferred jointly, with no mechanism to control them independently — a limitation we formalize as Disentangled 3D Stylization \(Disen3D\)\. To address this, we propose DiDE, the first training\-free framework for Disen3D\. Key to our approach is the observation that the structured latent space of image\-to\-3D models is overcomplete with respect to texture: texture information occupies only a small subset of the style\-significant channels, leaving a free subspace available for independent color encoding\. DiDE exploits this via a channel partition mechanism that processes a content image, a texture reference, and a color reference through dedicated branches and composes both style signals interference\-free at every self\-attention layer, preserving content geometry throughout\. Experiments on Disen3D\-Bench, our newly collected multi\-reference benchmark, show that DiDE consistently outperforms 2D and 3D stylization baselines in color fidelity, texture transfer, and content preservation\.

## RASS: Risk\-Audited Budget Selection for Compact NeRF Benchmark Subsets

**Authors:** Ahmad AlMughrabi; Flavià Serret; Ricardo Marques; Petia Radeva

**ID:** 138883 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ytAbjAspfi>) | [PDF](<https://openreview.net/pdf?id=ytAbjAspfi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138883>)

Full\-dataset NeRF evaluation can require training and evaluating thousands of scenes, making exhaustive comparison expensive even when the benchmark is fixed\. We introduce RASS, a risk\-audited protocol for constructing compact NeRF benchmark subsets with explicit fidelity criteria\. Given full\-dataset per\-scene logs, RASS repeatedly samples candidate subsets, checks whether their global metric means and score distributions match the full benchmark within user\-defined tolerances, and recommends the smallest evaluated subset size whose Wilson lower confidence bound exceeds a target pass probability\. We instantiate RASS on 3,522 Nutrition5k\-derived food scenes using Zip\-NeRF logs for the formal audit and PSNR, SSIM, LPIPS, and Kolmogorov\-Smirnov \(KS\) distributional tests as fidelity criteria\. The released 48\-scene balanced operating point, RASS\-48, is the lowest\-cost evaluated screening subset that passes our declared global\-fidelity audit and is intended for low\-cost early ablations and rapid screening\. A stricter target pass probability, $p\_\{\\min\}=0\.20$, selects RASS\-96, which we recommend as the compact reporting subset: it also passes joint fidelity audits over three and four view\-synthesis methods\. We also evaluate alternative subset generators, including uniform random sampling, farthest\-first selection, and facility\-location diversity sampling, and find that the RASS audit can validate different generators under the same fidelity contract\. On DL3DV, a re\-declared contract certifies 64 of 140 scenes for four methods under proportional allocation\. We release the RASS\-48 and RASS\-96 scenes, configurations, descriptors, regime labels, seeds, audit scripts, and permitted logs to enable reproducible, compact NeRF evaluation\. Project page: https://amughrabi\.github\.io/RASS/\.

## Understanding Multi\-View Transformers

**Authors:** Julien Gaubil; Michal Stary; Louis Martinez; Andreas Geiger; Maks Ovsjanikov; Ayush Tewari; Vincent Sitzmann

**ID:** 152537 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SPQmifceIS>) | [PDF](<https://openreview.net/pdf?id=SPQmifceIS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152537>)

Multi\-view transformers solve 3D vision tasks in a single feed\-forward pass, yet their internal mechanisms remain poorly understood\. We view their residual layers as progressively updating a latent state, and study how this state evolves during 3D reconstruction\. To make the state geometrically interpretable, we train layer\-wise probes that decode intermediate tokens into 3D pointmaps, yielding intermediate 3D reconstructions throughout the network\. This view recasts feed\-forward 3D reconstruction as progressive refinement rather than a single reconstruction step, with most layers improving reconstruction\. Convergence speed varies across models and sample difficulty, with slower convergence on difficult samples\. We further analyze these updates and find consistent, complementary roles for single\-view and cross\-view attention\. Cross\-view attention improves multi\-view alignment, while single\-view attention refines intra\-view geometry and compensates for points visible in only one view\. Finally, we identify cross\-view attention heads that specialize in correspondence matching\. We show that their correspondences are jointly refined with the reconstructed geometry, and that selected heads can be partially replaced by analytical correspondences\. Our analysis provides a direct view of the reconstruction process inside multi\-view transformers, and suggests a first step toward replacing emergent mechanisms with analytical operations\. The code used for the analysis will be made available\.

## RigRecon: Efficient Rig\-Aware Street Reconstruction via Dual\-Path Spatio\-Temporal Interaction

**Authors:** Jiaming Guo; Hongcheng Luo; Cheng Chi\_; Lijun Zhou; Bing Wang; Guang Chen; Hangjun Ye; Jiaqi Yang; Xiaowei Zhou; Haiyang Sun; Sida Peng

**ID:** 152889 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PdpQ8Gxwy0>) | [PDF](<https://openreview.net/pdf?id=PdpQ8Gxwy0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152889>)

Reconstructing multi\-camera videos is a fundamental task in autonomous driving\. However, recent learned methods either rely on costly attention\-based networks for global geometry modeling or require complex post\-hoc alignment for chunked predictions, limiting their scalability to long multi\-view rig sequences\. We propose RigRecon, a generalized rig\-aware reconstruction framework that enables efficient cross\-view interaction in a low\-resolution space while asynchronously decoding high\-resolution depth maps in a frame\-wise manner\. Input images are first down\-sampled and processed by a transformer backbone to capture coarse global structure, which is then provided to a decoder to reconstruct frame\-wise high\-resolution depth maps\. By fully leveraging calibration and low\-resolution feature interaction, RigRecon achieves consistent\-scale geometry and accurate pose estimation with significantly reduced memory cost\. It achieves state\-of\-the\-art performance on 3D reconstruction, depth estimation, and camera pose estimation, and can efficiently process videos with over 1000 images in a single feedforward pass\.

## Towards Complementary Keypoint Detection via Mixture of Detectors

**Authors:** Xiaoyong Lu; Guobao Xiao; Dong Liang; Songlin Du

**ID:** 154279 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F1HI02weX5>) | [PDF](<https://openreview.net/pdf?id=F1HI02weX5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154279>)

Keypoint detection plays a central role in geometric vision pipelines\. Existing detectors exhibit complementary strengths across different scene structures and keypoint budgets, and reliance on a single detector often results in suboptimal keypoint distributions\. Motivated by this observation, we propose \*\*Mixture of Detectors \(MoD\)\*\* for dense matching pipelines, a unified framework for complementary keypoint detection through the adaptive composition of heterogeneous detectors\. MoD first distills heterogeneous detectors into a unified model, allowing diverse detection maps to be predicted efficiently within a single forward pass\. Detector selection is subsequently formulated as a patch\-wise, budget\-conditioned decision process, in which a lightweight router assigns the most suitable detector to each local region\. To avoid heuristic supervision, the router is trained with task\-driven rewards derived from downstream matching quality, jointly capturing both keypoint quantity and precision\. Extensive experiments on MegaDepth, ScanNet, and HPatches demonstrate that MoD consistently outperforms strong baselines across a wide range of keypoint budgets, demonstrating its effectiveness in improving keypoint distribution and downstream geometric performance\.

## $\\pi^2$: A Simple Framework for 2D\-to\-3D Registration

**Authors:** Hao Deng; Xiangtai Yang; Guangmingzi Yang; Xijing Wang; MaYuanxiao; Sisi Li; Zhiqiang Tian; Shaoyi Du

**ID:** 148690 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vm3afPOLqE>) | [PDF](<https://openreview.net/pdf?id=vm3afPOLqE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148690>)

In this paper, we present $\\pi^2$, a simple, efficient, and accurate image\-to\-point\-cloud \(I2P\) registration paradigm\.  Instead of relying on intermediate targets such as 2D\-\-3D correspondences, matching confidence, visibility masks, overlap regions, or pose\-related proxies, we reformulate I2P registration as point\-wise camera\-centered coordinate regression\. Given a target image and an unaligned LiDAR point cloud, $\\pi^2$ directly predicts where each sampled 3D point should lie in the target camera frame\. The predicted camera\-centered point set is then aligned with the original point set through closed\-form SVD\-based rigid alignment, yielding the final relative pose without iterative pose optimization or a learned pose\-regression head\. To improve robustness under large viewpoint changes and sparse outdoor observations, we further introduce a lightweight camera\-ray\-based regularization objective that provides visibility\-aware supervision during training, without requiring an additional visibility or overlap detection network\. Experiments on KITTI and nuScenes show that $\\pi^2$outperforms the previous SoTA method ICL by 2\.47 and 6\.72 percentage points in registration success rate, respectively, while running in real time at about 25 FPS, corresponding to an up to 6$\\times$ speedup over ICL\. Code and pretrained checkpoints will be made available upon acceptance\.

## Perception for Action in Latent World Models

**Authors:** Petr Ivashkov; Randall Balestriero; Bernhard Schölkopf

**ID:** 153770 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=InDOasTozM>) | [PDF](<https://openreview.net/pdf?id=InDOasTozM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153770>)

Perception for action suggests that representations of the world should be shaped not by visual fidelity alone, but by their relevance for actions\. At the same time, latent JEPA\-style world models advocate learning compact predictive states from high\-dimensional observations to facilitate the prediction of future states, but end\-to\-end training of these models is nontrivial because representations may collapse if our only goal is to construct a latent state that is easy to predict\. We show that a suitable inverse dynamics regularization addresses both issues: it is an effective anti\-collapse mechanism that induces action\-aligned representations\. By forcing latent states to preserve information about the action underlying a transition, it biases the model toward the controllable degrees of freedom of the environment while discarding uncontrollable distractors\. This yields stable latent world models trained end\-to\-end from offline, reward\-free trajectories, without frozen encoders, exponential moving averages, or complex latent regularizers\. Empirically, the learned latent spaces are compact, interpretable, and enable competitive planning performance across simple 2D and 3D control tasks\.

## One View Is Enough: In\-the\-Wild Monocular Pretraining for Novel View Generation

**Authors:** Adrien RAMANANA RAHARY; Nicolas Dufour; Patrick Perez; David Picard

**ID:** 151767 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YC0au39jWi>) | [PDF](<https://openreview.net/pdf?id=YC0au39jWi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151767>)

Monocular novel\-view synthesis has long required multi\-view image pairs for supervision, limiting training to a narrow set of purpose\-built datasets\. We propose in\-the\-wild monocular pretraining: a frozen depth estimator lifts each source image into 3D and reprojects under sampled poses to yield pseudo\-target views; masked losses restrict supervision to valid regions and an adversarial objective covers disoccluded areas\. Scaled to 30 million uncurated images, this produces OVIE, requiring only a source image and target pose at inference\. Prior work trains without multi\-view data but needs a depth estimator at inference, or drops this dependency but requires multi\-view training pairs; OVIE is the first to require neither\. Without multi\-view supervision, OVIE rivals in\-domain baselines on RealEstate10K and surpasses all on DL3DV; brief multi\-view fine\-tuning outperforms all geometry\-free methods on their training domain\. At 116 FPS, it is over 600× faster than the fastest baseline\. Code and models will be open\-sourced\.

## 3D\-VITAL: Visibility\-aware Identity Training from Artificial Liftings of 3D Reconstruction model for Cross\-View Object Re\-Identification

**Authors:** William Grolleau; Astrid Sabourin; Guillaume Lapouge; Catherine Achard

**ID:** 150244 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jej1VhaCQr>) | [PDF](<https://openreview.net/pdf?id=jej1VhaCQr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150244>)

In this paper, we address the Cross\-View Object Re\-Identification \(ReID\) task, aiming to match identities across drastically different viewpoints\. We focus specifically on Single\-View Aerial\-Ground ReID \(SV AG\-ReID\), where models train on one viewpoint and must generalize to another at inference\. To bridge the viewpoint gap of Cross\-View ReID, related work employs generative models to synthesize novel views from source images as additional training data\. We leverage recent advances in large\-scale single\-view 3D mesh reconstruction to lift source images into textured meshes and to render them from new viewpoints\. However, this pipeline produces unreliable data in two distinct ways, and addressing both is vital for synthetic data to serve as an effective training signal\. First, the reconstruction may fail and produce geometrically incorrect meshes, resulting in severe corruption in rendered novel views\. Second, even when the geometry is correct, the rendered novel views contain hallucinated textures in regions not visible in the source image, which may degrade training if used naively\. We address both shortcomings by exploiting a signal that prior generative methods do not naturally expose\. Indeed, the reconstructed mesh carries a per\-pixel partition between regions visible from the source view and regions that the reconstruction model had to hallucinate, available as a deterministic byproduct of rendering\. We introduce this per\-pixel visibility map and exploit it in a two\-stage design\. Cross\-View Consistency Filtering \(CVCF\) discards geometrically incorrect meshes by ensuring multi\-view consistency between source and novel views over visible patches\. Visibility\-Aware Attention Supervision \(VAAS\) leverages the visibility map to guide the model's attention toward reliable regions of the rendered view during training\. Combined, these two components enable our method, 3D\-VITAL, to better leverage the synthetic signal from single\-view 3D mesh reconstruction, benefiting from wider viewpoint augmentation\. 3D\-VITAL sets a new state\-of\-the\-art on three SV AG\-ReID benchmarks \(AG\-ReID, AG\-ReID\.v2, MOO\)\. Code and data will be released at \\url\{url\}

## Martine: Benchmarking Multi\-View 3D Surface Reconstruction Across Viewpoint Coverage, Resolution, and Lighting

**Authors:** Robin Bruneau; Baptiste Brument; Frederic Giraud; Bastian Sigrist; Sascha Jecklin; Philipp Fürnstahl; Bjoern Menze; Lilian Calvet

**ID:** 139554 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IxlCfLMRly>) | [PDF](<https://openreview.net/pdf?id=IxlCfLMRly>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139554>)

Controlled acquisition setups are widely used for high\-accuracy multi\-view 3D surface reconstruction, as they allow sensor configuration, image resolution, viewpoint distribution, and illumination to be specified\. Yet benchmarking remains difficult, since reconstruction accuracy depends jointly on the reconstruction paradigm, object properties, and acquisition regime\. Existing benchmarks often restrict viewpoint coverage, resolution, or illumination, which can bias comparisons toward methods suited to the chosen setting\. Others lack accurate 3D ground truth or quantified image\-to\-geometry alignment, limiting their use for metric surface evaluation\. We introduce Martine, a benchmark for controlled 3D object surface reconstruction\. Martine comprises 28 objects, including transparent materials and fine structures, captured at \\\(9568 x 6376\\\) pixels from 84 views over a spherical cap under both single\-light and multi\-light regimes\. It provides object\-independent camera calibration, accurate 3D ground\-truth scans, calibration and image\-to\-geometry accuracy quantified on test images, and 3D property masks for analysing errors by material properties, visibility, curvature and fine structures\. Experiments across photogrammetry, classical multi\-view stereo, neural implicit surfaces, Gaussian\-splatting\-based reconstruction, and multi\-view photometric stereo show that Martine enables regime\-aware evaluation with explicit control over reference\-data accuracy\. The benchmark resolves sub\-millimetric reconstruction differences, with a best observed mean one\-sided Chamfer distance of \\\(0\.063\\\) mm over the evaluated visible surface\.

## Mouse Total Capture: A multi\-view Dataset for 3D Motion and Expression Capture of Freely Moving Mouse

**Authors:** Jiachen Zhao; He Zhang; Liang An; Tao Yu

**ID:** 139566 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IAzvkBsqbv>) | [PDF](<https://openreview.net/pdf?id=IAzvkBsqbv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139566>)

3D motion and expression capture of laboratory mice is a critical task in behavioral neuroscience, yet it remains underexplored in the computer vision community\. Existing studies have focused narrowly on either body pose estimation of freely moving mice or facial expression capture under head\-fixed conditions, leaving a significant gap: no dataset supports simultaneous capture of whole\-body motion and expression in a freely moving mouse\. To fill this gap, we present PanoMouse, a multiview system and dataset for Mouse Total Capture \(MTC\)\. The PanoMouse system deploys 24 cameras across three horizontal layers, achieving 360\-degree photographic coverage of the mouse\. Built upon this system, the PanoMouse dataset collects over 3\.4 million frames, with 7,293 frames annotated with 92 whole\-body keypoints, totaling approximately 670,000 keypoint annotations\. To our knowledge, PanoMouse is the first dataset to provide fine\-grained annotations of a mouse in natural behavior\. We further propose 4D Triangulation \(Triang4D\), a test\-time optimization method for 3D MTC that jointly enforces multi\-view consistency, temporal smoothness, and bone length constraints\. Applying Triang4D to the entire dataset produces 3D whole\-body keypoint sequences across all recording sessions, enabling downstream skeleton\-based behavior analysis\. We benchmark baseline methods on PanoMouse across three tasks: 2D pose estimation, 3D pose estimation, and behavior classification, opening a new paradigm for fine\-grained behavior analysis and bridging computer vision with behavioral neuroscience\.

## ObjView\-Bench: Rethinking Difficulty and Deployment for Object\-Centric View Planning

**Authors:** Sicong Pan; Hao Hu; Xuying Huang; Benno Wingender; Maren Bennewitz

**ID:** 139674 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BOgzWFvn2S>) | [PDF](<https://openreview.net/pdf?id=BOgzWFvn2S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139674>)

Object\-centric view planning is a core component of active geometric 3D reconstruction in robotics, yet existing evaluations often conflate object complexity, planning difficulty, budget assumptions, and physical reachability constraints\. As a result, conclusions drawn from idealized view\-planning evaluations may not reliably predict performance under realistic reconstruction settings\. We introduce ObjView\-Bench, an evaluation framework for rethinking difficulty and deployment in object\-centric view planning\. First, we disentangle three quantities underlying view\-planning evaluation: omnidirectional self\-occlusion as an object\-side attribute, observation saturation difficulty, and protocol\-dependent planning difficulty defined through a set\-cover formulation\. This separation supports controlled dataset construction, analysis of slow\-saturation objects, and a case study showing that planning difficulty\-aware sampling can improve learned view planners\. Second, we design deployment\-oriented evaluation protocols that reveal how budget regimes and reachable\-view constraints alter method behavior\. Across classical, learned, and hybrid planners, ObjView\-Bench shows that difficulty, budget, and reachability constraints substantially change method rankings and failure modes\.

## DPPE: Rethinking Camera\-Based Positional Encoding for Scaling Multi\-View Transformers

**Authors:** Shun Kenney; Teppei Suzuki

**ID:** 150092 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kkycDUosSc>) | [PDF](<https://openreview.net/pdf?id=kkycDUosSc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150092>)

The remarkable scalability of Transformers has expanded their application to 3D computer vision, where camera\-aware positional encoding is crucial for providing spatial cues in multi\-view geometry\. Recent advancements have established the practice of using camera parameters\-\-\-such as extrinsics or projection matrices\-\-\-as relative positional encoding into the query, key, and value vectors of the attention mechanism\. However, when scaling up the training recipe of novel view synthesis \(NVS\) models with the camera\-based positional encoding, we observe a significant issue: model performance stagnates in the late stages of training\. In this paper, we investigate the cause of the performance bottleneck when scaling up and demonstrate that storing rotation and translation given by the positional encoding in the same dimensions of the value vector causes indeterminacy in their independent identification, hindering training scalability\. To address this, we propose Decoupled Pose Positional Encoding \(DPPE\), a novel camera\-based positional encoding that explicitly decouples rotation and translation\. Extensive evaluations on NVS tasks demonstrate that DPPE enables stable long\-term training even in scaled\-up training setup\. Furthermore, it exhibits superior generalization performance in extrapolation settings, such as handling an increased number of viewpoints and zoom\-in scenarios\.

## WildBox: A Dataset and Benchmark for Aerial Monocular 3D Detection of African Savanna Wildlife

**Authors:** Vandita Shukla; Kilian Meier; Lucie Laporte\-Devylder; Camille R Saint\-Jean; Jenna M Kline; Blair R Costelloe; Devis Tuia; Fabio Remondino; Benjamin Risse

**ID:** 139688 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AXawAJRwDi>) | [PDF](<https://openreview.net/pdf?id=AXawAJRwDi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139688>)

We introduce WildBox, a dataset and benchmark for monocular 3D detection of wildlife from drone video, comprising 237,505 3D bounding box annotations across seven African savanna species grouped into six benchmark classes\. Annotations follow a KITTI/Omni3D\-compatible format in a per\-segment scale\-normalised camera frame, with instance identities maintained across each segment\. We evaluate two open\-vocabulary monocular 3D architectures, OVMono3D\-LIFT and DetAny3D, under zero\-shot, ground\-truth 2D box prompt, and supervised fine\-tuning protocols\. Open\-vocabulary 2D foundation models provide usable zero\-shot wildlife localisation \(50\.55 AP@50\), but zero\-shot 3D detection collapses to 0\.00 AP across both architectures and every 2D\-input condition tested, including ground\-truth 2D box prompts—isolating the failure to the 3D stage\. Fine\-tuning on WildBox recovers performance to 8\.68$\\pm$0\.47 AP\-BEV@0\.50 and 13\.17$\\pm$0\.69 AP3D macro\. Depth contributes 84\\% of normalised Hausdorff distance after fine\-tuning and over 99\\% in zero\-shot, identifying monocular aerial depth as the dominant open problem in this regime\. A coarse\-to\-fine curriculum—pretraining on a merged zebra class before fine\-tuning on the Grévy's/plains split—improves macro 3D performance with less total compute, with the largest gains on the two zebra subclasses\. WildBox is released with video\-level splits, evaluation code, and baseline checkpoints to enable progress in 3D wildlife perception from drone video\.

## Tadpole: Autoencoders as Foundation Models for 3D PDEs with Online Learning

**Authors:** Qiang Liu; Felix Koehler; Benjamin Holzschuh; Nils Thuerey

**ID:** 149126 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sfkDy7Tri4>) | [PDF](<https://openreview.net/pdf?id=sfkDy7Tri4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149126>)

We introduce Tadpole, a novel foundation model for three\-dimensional partial differential equations \(PDEs\) that addresses key challenges in transferability, scalability to high dimensionality, and multi\-functionality\. Tadpole is pre\-trained as an autoencoder on synthetic 3D PDE data generated by an efficient online data\-generation framework\. This enables large\-scale, diverse training without storage or I/O overhead, demonstrated by scaling to an equivalent of hundreds of terabytes of training data\. By autoencoding single\-channel spatial crops, Tadpole learns rich and transferable representations across heterogeneous physical systems with varying numbers of state variables and spatial resolutions\. Although pre\-trained solely as an autoencoder, Tadpole can be efficiently applied for multiple downstream tasks beyond reconstruction, including dynamics learning and generative modeling\. For dynamics learning, we propose a novel parameter\-efficient fine\-tuning strategy that integrates low\-rank adaptation, latent\-space transformations, and reintroduced skip connections, achieving accurate temporal modeling with a minimal number of trainable parameters\. Tadpole demonstrates strong fine\-tuning performance across various downstream tasks, highlighting its versatility and effectiveness as a foundation model for 3D PDE learning\.

## RayTun3R: Online Camera Adaptation in 3D Foundation Models

**Authors:** Daniil Sinitsyn; Nikita Araslanov; Daniel Cremers

**ID:** 151667 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YusfyNZLcm>) | [PDF](<https://openreview.net/pdf?id=YusfyNZLcm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151667>)

Recent 3D foundation models, such as DUSt3R, MASt3R, VGGT, $\\pi^3$, and Depth Anything 3, provide strong feed\-forward depth and pose estimates on pinhole imagery, but degrade sharply under fisheye camera geometry\. We show that this failure is partly caused by a pinhole camera bias in the positional encodings of pretrained 3D foundation models, and propose RayTun3R, a lightweight camera adaptation approach\. It keeps the pretrained network fixed and adapts only lightweight components tied to token position and camera geometry\. RayTun3R learns parameter\-efficient residual corrections to absolute and rotary positional encodings, together with parameter\-free tokenization and corrections to prediction\-grid coordinates that remove residual pinhole assumptions\. The resulting adapter contains only 10,752 trainable parameters and can be learned from a short temporal segment using geometric losses\. Once adapted, RayTun3R transfers effectively to the remaining frames of the sequence without incurring additional runtime costs\. Across diverse fisheye datasets with fields of view from $110^\\circ$ to $200^\\circ$, our adapter reduces rotation error by $2\-12\\times$ relative to the unadapted model, outperforms LoRA while using $\\sim14\\times$ fewer trainable parameters, improves pose over adaptation\-free baselines while avoiding their multi\-view inference cost, and remains competitive on depth accuracy\.

## CLoSeR: Closing the Loop for Long\-Context Streaming Reconstruction

**Authors:** Moyang Li; Zihan Zhu; Wei Zhang; Marc Pollefeys; Daniel Barath

**ID:** 148375 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yLutWZN8IE>) | [PDF](<https://openreview.net/pdf?id=yLutWZN8IE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148375>)

Feedforward foundation models have recently shown remarkable 3D reconstruction capabilities\. However, existing models exhibit large tracking drift in long\-context streaming reconstruction due to error accumulation\. In this paper, we revisit loop closure with streaming reconstruction foundation models to enable accurate, drift\-free, kilometer\-scale reconstruction\. Specifically, our method detects loop candidates through global descriptor retrieval, and constructs loop\-conditioned windows to estimate the relative poses between looped frames\. Given the observation that our adopted streaming reconstruction backbone produces a globally consistent scale, we optimize all frame poses on the SE\(3\) manifold with sequential and loop closure constraints, avoiding the pose graph optimization on the Sim\(3\) or higher\-dimensional SL\(4\) manifolds employed in prior works\. Extensive experiments show that our method reduces drift and produces consistent geometry on kilometer\-scale sequences, significantly outperforming the state of the art\. The code will be made public\.

## Geometry\-Guided Semantic Reconstruction for 3D Instance Segmentation

**Authors:** Yuanhao Su; Shaofeng Zhang

**ID:** 150174 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k8lnRfJDKH>) | [PDF](<https://openreview.net/pdf?id=k8lnRfJDKH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150174>)

3D instance segmentation requires representations that are both geometrically structured and semantically discriminative\. Pure 3D encoders model spatial structure well but often lack strong appearance semantics, while directly lifting 2D priors into 3D by concatenation injects rich semantics without ensuring that they align well with the underlying 3D structure\. In this paper, we address this problem by formulating 2D\-to\-3D semantic transfer as a \\textbf\{masked semantic reconstruction\} task\. Specifically, we mask a subset of background lifted 2D priors and train the 3D encoder to recover the missing semantic priors, providing explicit supervision for distilling rich 2D semantics into the 3D backbone\. We further propose \\textbf\{geometry\-modulated semantic injection\}, which uses raw 3D geometry to modulate lifted 2D priors before sparse encoding, so that geometry explicitly controls semantic injection and alleviates the distribution gap between 2D semantic features and 3D geometric features\. Experiments on two baseline frameworks show that the proposed method achieves better or comparable results in both full\-data and few\-shot settings on ScanNetV2 and ScanNet200\.

## From Persistence to Survival: Hypothesis Testing, Effect Sizes and Vectorisation for Topological Features

**Authors:** Juliette Murris; Bernadette J Stolz; Karsten Borgwardt

**ID:** 153632 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JxamHvfzlr>) | [PDF](<https://openreview.net/pdf?id=JxamHvfzlr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153632>)

Persistence diagrams are common representations in topological data analysis, yet they lack both the vector space structure required by machine learning algorithms and a principled framework for statistical comparison\. We introduce STRAND \(Survival Topological Representation ANalysis of Diagrams\), which treats \(collections of\) PDs as survival data: each topological feature with persistence value $p = d \- b$ is a fully observed time\-to\-event, and the persistence survival function $S\(t\) = \\mathbb\{P\}\(p &gt; t\)$ is the central object for comparing diagrams\. From this single representation we derive \(i\) a non\-parametric two\-sample test with calibrated Type\~I error and high power from a small number of diagrams; \(ii\) interpretable effect sizes; and \(iii\) a 1\-Wasserstein\-stable feature vector for downstream machine learning\. We validate calibration and power on synthetic manifolds with controlled topology, demonstrate competitive vectorisation across 14 graph and 3D point cloud benchmarks, and apply the method to study functional brain connectivity in fMRI/neuroscience data\. To our knowledge, STRAND is the first method to provide hypothesis testing and vectorisation for persistence diagrams from a single coherent and interpretable representation\.

## One World, Dual Timeline: Decoupled Spatio\-Temporal Gaussian Scene Graph for 4D Cooperative Driving Reconstruction

**Authors:** Yulong Chen; Xiaoyun Dong; Haoyu Zhang; Zongxian Yang; Lewei Xie; Xinke Li; Yifan Zhang; Kai Wang; Jianping Wang

**ID:** 153304 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MGgkFy8IUf>) | [PDF](<https://openreview.net/pdf?id=MGgkFy8IUf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153304>)

Reconstructing dynamic scenes from Vehicle\-to\-Infrastructure Cooperative Autonomous Driving \(VICAD\) data is fundamentally complicated by temporal asynchrony: vehicle and infrastructure cameras operate on independent clocks, capturing the same dynamic agent such as cars and pedestrians at different physical times\. Existing Gaussian Scene Graph methods implicitly assume synchronized observations and assign a single pose per agent per frame, which is an assumption that breaks in cooperative settings, where the resulting gradient conflicts cause severe ghosting on dynamic agents\. We identify this as a \\textit\{representation\-level failure\}, not an optimization artifact: we prove that any single\-timeline formulation incurs an irreducible photometric loss scaling quadratically with agent velocity and cross\-source time offset\. To resolve this, we propose Dust \(DecoUpled Spatio\-Temporal\) Gaussian Scene Graph for 4D Cooperative Driving Reconstruction\. DUST Gaussian Scene Graph shares a canonical Gaussian set per agent for appearance consistency, while maintaining decouple pose trajectories aligned to each source's true capture timestamps\. We prove that this decoupling enables the pose\-gradient kernel block\-diagonal, eliminating cross\-source interference entirely\. To make Dust practical, we further introduce a static anchor\-based pose correction pipeline that corrects spatio misalignment between vehicle and infrastructure annotations, and a pose\-regularized joint optimization scheme that prevents trajectory jitter and drift during early training\. On 26 sequences from V2X\-Seq, DUST achieves state\-of\-the\-art performance, improving dynamic\-area PSNR by 3\.2 dB over the strongest baseline and reducing Fréchet Video Distance by 37\.7\\%, with keeping robustness under larger temporal asynchrony\. Code is available at https://anonymous\.4open\.science/r/DUST\-6A55\.

## Consistent 3D Surface Flow Model with Global State

**Authors:** Antoine Guedon; Shu Nakamura; Nicolas Dufour; Jiahui Lei; Ko Nishino; Angjoo Kanazawa

**ID:** 148758 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vGEOI5LZ5X>) | [PDF](<https://openreview.net/pdf?id=vGEOI5LZ5X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148758>)

Geometry is invariant to viewpoint, which makes any collection of images a redundant encoding of a single 3D state\. Existing feed\-forward reconstruction models fail to exploit this: per\-view methods emit overlapping, unaligned pointmaps that grow linearly with input count, while global\-latent methods commit to a fixed, low\-resolution output\. We introduce Surflo, which compresses a variable number of unposed RGB views into K latent tokens\-one global state\-and decodes oriented 3D surface points by independently transporting them from noise onto the surface via flow matching\. This frees the output from any fixed grid or token budget: the same latent yields from a few thousand to a million points in a single forward pass\. To suppress the local inconsistencies inherent to independent per\-point decoding, an inference\-time guidance term correlates nearby points by injecting a photometric gradient during ODE integration\. Surflo matches or surpasses feed\-forward baselines on surface metrics, run an order of magnitude faster than optimization\-based methods that require hundreds of views, and is the only feed\-forward approach to combine a global latent with arbitrary\-resolution decoding\.

## NeRFix: fixing subtle mistakes in the quadrature of the NeRF volumetric integral

**Authors:** Luca Savant Aira; Diego Valsesia; Enrico Magli

**ID:** 153568 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KQfFjq87GI>) | [PDF](<https://openreview.net/pdf?id=KQfFjq87GI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153568>)

Neural Radiance Fields \(NeRFs\) are popular models using MLPs for continuous volumetric representations, which render novel views by means of numerical quadrature of the volumetric integral\. Despite the widespread usage of NeRFs, we report subtle mistakes in their quadrature rule which have gone unnoticed for many years\. In particular, we highlight mistakes present in both the original NeRF paper and its implementation as well as in the mainstream NeRFStudio implementation\. We provide a theoretical analysis of rendering error bounds for NeRF and we use it to show suboptimal convergence rates in the presence of the aforementioned mistakes\. We introduce a minimal fix that recovers the expected convergence order with no complexity overhead\. Finally, while fixing the quadrature scheme is mostly a matter of theoretical correctness, we also provide experimental evidence that modest improvements in image quality are achieved on standard benchmarks\.

## Complexity Aware Continuous Level of Details for Gaussian Splatting

**Authors:** Radu Beche; Raoul de Charette

**ID:** 155902 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1yzzKS5UI1>) | [PDF](<https://openreview.net/pdf?id=1yzzKS5UI1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155902>)

3DGS enables real\-time novel view synthesis, but practical deployment under varying compute budgets requires a single Gaussian set that remains effective when truncated to a prefix of primitives\. This raises how capacity should be allocated as the budget decreases\.We observe two findings\. First, image complexity correlates with reconstruction error in both image and 3D Gaussian space\. Second, this structure degrades under strong budget reduction, indicating suboptimal allocation\.These observations motivate using image complexity as an optimization signal\. We propose a continuous level\-of\-detail method based on 3DGS\-MCMC that uses it for \(i\) relocation toward difficult regions during training and \(ii\) importance\-based retention of simple and detailed regions at inference\. A variance constraint on residuals between full\- and reduced\-budget renderings further enforces uniform error under compression\. Our method yields smoother LOD degradation than prior work, with largest gains in low\-budget regimes\. Code will be released\.

## MemReg: Streaming Outdoor LiDAR Point Cloud Registration with Hybrid Memory Buffers

**Authors:** Jiuming Liu; Mengmeng Liu; Guangming Wang; Lihao Liu; Michael Yang; Yunpeng Zhang; Francesco Nex; Hao Cheng; Hesheng Wang

**ID:** 154506 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D4eJejSf3f>) | [PDF](<https://openreview.net/pdf?id=D4eJejSf3f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154506>)

Prior outdoor LiDAR registration works are commonly limited by the pair\-wise input paradigm, which neglects temporal correlations inherent within streaming sequences\. In this paper, we propose a novel multi\-frame outdoor point cloud registration network for streaming LiDAR scans enhanced with pose\-related memory buffers\. The key observation is that long\-term temporal LiDAR sequences can provide rich global contextual information to complete sparse measurements, filter outliers, and address low\-overlap problems, thereby boosting registration performance\. Specifically, two hybrid memory buffers are designed, including an implicit memory feature buffer and an explicit memory pose buffer, to store and dynamically update pose\-related temporal features\. Moreover, a novel dynamic history weighting module is developed to adaptively fuse current and history pose\-related features\. Extensive experiments on three outdoor datasets, including KITTI, nuScenes, and Apollo\-Southbay, demonstrate state\-of\-the\-art performance of MemReg, surpassing all previous pair\-wise methods and also multi\-frame SLAM systems\. Our method also generalizes surprisingly well to multiview indoor registration scenarios with rather competitive performance on 3DMatch, 3DLoMatch, and ScanNet\. Code will be released upon publication\.

## Spatially Feasible 3D Indoor Scene Generation via Interaction\-Oriented Human Proxy

**Authors:** Xinyuan Chen; Mingwen Shao; Qiao Zhang; Qinglin Zhan; Xiang Lv; Boyuan Yang; Jixuan Shi; Lingzhuang Meng; Chang Liu; Shanshan Song; Ling Jian

**ID:** 151858 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XOBgPRg5Vn>) | [PDF](<https://openreview.net/pdf?id=XOBgPRg5Vn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151858>)

Recent 3D indoor scene generation methods often produce layouts with limited spatial feasibility, where pathways are blocked and objects are difficult to access or use, restricting their applicability in virtual reality and embodied environments\. To address this challenge, this paper presents a new paradigm for 3D indoor scene generation that explicitly models interaction feasibility through a carefully designed geometric abstraction, termed the Interaction\-Oriented Human Proxy \(IOHP\)\. The IOHP serves as a compact yet spatially expressive representation for human interaction occupancy, and can be directly inferred by large language models without task\-specific training\. Building on IOHP, we formulate layout optimization as a unified objective that resolves geometric conflicts between the proxy and scene elements, while using the proxy as a bridge to preserve functional relationships among furniture, thereby improving overall usability and accessibility\. Benefiting from this design, our method eliminates reliance on data\-driven human preference learning and complex layout\-planning pipelines, producing accessible, usable, and spatially coherent scenes in an efficient and stable manner\. Extensive experiments demonstrate that our approach significantly improves layout quality and spatial plausibility, highlighting the role of human\-centric interaction modeling in 3D scene generation\.

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

## 3D Point Splatting for mmWave Radar Novel View Synthesis

**Authors:** Adnan Armouti; Yixuan Gao; Rajalakshmi Nandakumar

**ID:** 151080 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d7DxwkjIJi>) | [PDF](<https://openreview.net/pdf?id=d7DxwkjIJi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151080>)

Solving novel view synthesis \(NVS\) for millimeter\-wave \(mmWave\) radar requires a renderer that is physically faithful, complex\-valued, and multi\-viewpoint\-tractable\. No prior method achieves these three properties simultaneously\. Differentiable Monte Carlo \(MC\) ray tracers implement the radar forward model directly with explicit material modeling and complex outputs, but do not scale to the multi\-view optimization NVS demands\. Optical\-NVS ports of NeRF, hash grids, and 3D Gaussians train fast but discard phase and replace explicit material modeling with opaque learned features, restricting them to power\-only range\-azimuth \(RA\) magnitudes\. We propose 3D Point Splatting \(3DPS\), the first differentiable point renderer for radar, derived directly from the standard solid\-angle form of the radar equation\. Each oriented 3D point carries an ITU\-R P\.2040 material model, evaluated in closed form, with the resulting complex phasor splatted into range bins through a precomputed point spread function \(PSF\)\. The complex\-valued output makes the renderer product\-agnostic\. The same optimized scene yields analog\-to\-digital converter \(ADC\), complex range profile \(CRP\), and RA outputs through standard fast Fourier transform \(FFT\) pipelines without retraining for each format\. On six outdoor ColoRadar scenes, 3DPS reaches 0\.587 mean Pearson correlation on held\-out RA images\. This is between $1\.7\\times$ and $5\.2\\times$ the three optical\-NVS baselines \(RadarSplat, Radar Fields, DART\)\. Training takes approximately 3 minutes per scene on a single RTX 4090\.

## Effective Multi\-sensor Conditioning for Street\-view Novel\-view Synthesis

**Authors:** Zhengfei Kuang; Adam Sun; Liyuan Zhu; Tong Wu; Shengqu Cai; Jonathan Tremblay; Iro Armeni; Ehsan Adeli; Lior Yariv; Gordon Wetzstein

**ID:** 149088 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=szHv2SyPlO>) | [PDF](<https://openreview.net/pdf?id=szHv2SyPlO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149088>)

Modern vehicle platforms are equipped with a rich sensor suite, including LiDAR, calibrated multi\-camera rigs, and accurate ego\-motion, that in principle offers strong signal for re\-rendering a driving scene from novel viewpoints\. A growing line of recent work leverages video diffusion models for this task, using their generative priors to synthesize plausible novel views from sparse vehicle observations\. In practice, however, existing methods exploit only a fragment of this signal, and their quality tends to degrade as the target trajectory departs from the recorded driving path\. We argue that this is fundamentally a \*multi\-sensor fusion problem\*: sparse LiDAR reprojections supply accurate but incomplete metric geometry, surround\-view reference imagery supplies dense appearance but no metric depth, and camera poses tie the two together across views\. We introduce StreetNVS, a video diffusion framework that jointly conditions on all three signals through a Reference\-Enhanced Camera Attention module based on relative ray\-level positional encoding, trained with a two\-stage curriculum that gradually exposes the model to increasingly sparse LiDAR\. On the Waymo Open Dataset, StreetNVS substantially outperforms state\-of\-the\-art baselines under sparse LiDAR conditioning, matches methods that rely on 10–100× denser point clouds, and synthesizes coherent video along extreme out\-of\-trajectory paths such as elevation, lane\-shift, pullback, and rotation\.

## DiffeoMorph: Learning to Morph 3D Shapes Using Differentiable Agent\-Based Simulations

**Authors:** Seong Ho Pahng; Guoye Guan; Benjamin Fefferman; Sahand Hormoz

**ID:** 155314 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6WbQEdAa2e>) | [PDF](<https://openreview.net/pdf?id=6WbQEdAa2e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155314>)

Biological systems can form complex three\-dimensional structures through the collective behavior of agents that share a common update rule and operate without central control\. How such distributed control gives rise to precise global patterns remains a central question not only in developmental biology but also in distributed robotics, programmable matter, and multi\-agent learning\. Here, we introduce DiffeoMorph, an end\-to\-end differentiable framework for learning a morphogenesis protocol that guides a population of agents to morph into a target 3D shape\. Each agent updates its position and internal state using an SE\(3\)\-equivariant graph neural network, based on its own internal state and signals received from other agents\. To train this system, we introduce a new shape\-matching loss based on 3D Zernike polynomials, which compares the predicted and target shapes as continuous spatial distributions, not as discrete point clouds, and is invariant to agent ordering, number of agents, and global orientation\. To achieve rotation invariance while preserving reflection sensitivity, we include an alignment step that optimally rotates the predicted Zernike spectrum to match the target before computing the loss\. We perform benchmarking to establish the advantages of our shape\-matching loss over other standard distance metrics for shape comparison tasks\. We then demonstrate that DiffeoMorph can form a range of complex shapes from minimally patterned initial conditions\. DiffeoMorph provides a general framework for learning distributed control strategies for morphogenesis, swarm robotics, and programmable self\-assembly\.

## Towards Reconstructing Geographically Diverse Architecture with 3D Foundation Models

**Authors:** Nicky Kriplani; Yiwen Zhang; Angelina Wang; Hadar Averbuch\-Elor

**ID:** 149360 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qbpVyvprTf>) | [PDF](<https://openreview.net/pdf?id=qbpVyvprTf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149360>)

Internet\-scale photo collections of real\-world landmarks have driven progress in 3D computer vision yet remain highly challenging for modern 3D foundation models \(3DFMs\) that estimate scene structure in a single feed\-forward pass\. In this work, we introduce ArchWorld, a benchmark of 3D architectural landmarks with high geographic coverage and rich metadata and use it to conduct a thorough error analysis of current 3DFMs to understand where they fall short and how they can be improved\. We examine socially relevant disparities in model error and find that model performance varies by geographic region, but this is heavily confounded by scene size\. Leveraging insights from model failings, we introduce an intervention scheme that improves 3DFM performance while simultaneously reducing geographic disparities\. Our code and data will be publicly available\.

## Spin\-Weighted Spherical Harmonics Enable Complete and Scalable E\(3\)\-Equivariant Networks

**Authors:** Chenxing Liang; Yuchao Lin; Andrii Kryvenko; Wendi Yu; Chuan Li; Jianwen Xie; Xiaofeng Qian; Shuiwang Ji

**ID:** 156130 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0AtjGLdzZg>) | [PDF](<https://openreview.net/pdf?id=0AtjGLdzZg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156130>)

E\(3\)\-equivariant networks are promising for 3D atomistic system modeling, yet their scalability is limited by the $O\(L^6\)$ complexity of the Clebsch\-Gordan Tensor Product \(CGTP\)\. The recently proposed Gaunt Tensor Product \(GTP\) reduces the complexity but is unable to capture the antisymmetric paths, resulting in incomplete expressivity\. In this work, we present SpinGT, an approach to overcome the GTP incompleteness by generalizing from scalar functions to Spin\-Weighted Spherical Harmonics \(SWSH\)\. By relying on the algebraic properties of SWSH, SpinGTP recovers the missing antisymmetric interactions while maintaining the asymptotic efficiency of GTP\. It also allows for a more expressive equivariant basis that naturally accounts for the parity\-odd components of tensor products\. We evaluate SpinGTP across diverse benchmarks, including Tetris, 3BPA, SPICE\-MACE\-OFF, and OC20\. Our results show that SpinGTP achieves accuracies comparable to full CGTP\. Notably, by explicitly capturing antisymmetric paths, SpinGTP exhibits superior performance in tasks involving chiral materials and non\-centrosymmetric geometries\. This work provides a scalable, complete, and mathematically rigorous path toward high\-order equivariance in large\-scale 3D atomistic system simulations\.

## AVI\-HT: Adaptive Vision\-IMU Fusion for 3D Hand Tracking

**Authors:** Ziyi Kou; Ankit Kumar; Mia Huang; Taylor Niehues; Vatsal Mehta; Ergys Ristani; Li Guan

**ID:** 154518 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CzwKVs3kov>) | [PDF](<https://openreview.net/pdf?id=CzwKVs3kov>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154518>)

We present AVI\-HT, an adaptive visual\-IMU fusion approach for tracking 3D hand poses by jointly modeling the egocentric image with on\-glove 6\-DoF IMU signals\. AVI\-HT achieves significantly improved accuracy and availability, particularly in hand\-object interaction \(HOI\) scenarios involving heavy visual occlusion\. Two complementary ingredients underpin its success: \(1\) synchronized multi\-modal training data pairing on\-body vision\-IMU sensor streams with ground\-truth 3D hand poses from a motion\-capture system, and \(2\) a cross\-sensor deep attention mechanism that adaptively modulates the trust assigned to the vision and individual IMU sensors\. To evaluate AVI\-HT in real\-world settings, we conduct extensive experiments on our DexGloveHOI dataset that consists of 100K\+ pairwise vision\-IMU samples with synchronized 3D annotated poses, in which users manipulate a variety of objects during daily tasks\. We compare against multiple single\- and multi\-modal tracking approaches under two hand models \(UmeTrack, MANO\)\. The results show that AVI\-HT reduces mean keypoint error by 16\.1% and its wrist\-aligned variant by 24\.2% over the baselines\. Ablation studies further reveal the per\-finger contribution of IMU sensors across activity types, and the model's sensitivity to IMU noise and temporal misalignment in vision\-IMU fusion\.

## MonoPhysics: Estimating Geometry, Appearance, and Physical Parameters from Monocular Videos

**Authors:** Daniel Rho; Jun M Choi; Matthew Thornton; Biswadip Dey; Roni Sengupta

**ID:** 151413 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aqxU8UE5f1>) | [PDF](<https://openreview.net/pdf?id=aqxU8UE5f1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151413>)

Existing inverse physics methods recover physical parameters from multi\-view videos, where geometric constraints across views resolve scale and 3D structure\. In monocular settings, however, such constraints are absent, leading to severe scale ambiguity, inaccurate geometry, and weak coupling between appearance optimization and physical simulation\. We propose MonoPhysics, a framework for monocular inverse physics estimation of deformable objects using differentiable MPM simulation and 3D Gaussian Splatting, which jointly optimizes geometry, appearance, and physical parameters from a single camera view\. We address these challenges through three visual\-physical bridges: global scale alignment, physics\-aware geometry refinement, and a differentiable position map, which together enable accurate optimization from image\-space losses alone\. We evaluate on Vid2Sim and our new dataset of elastic and plastic objects, showing that MonoPhysics outperforms existing baselines in monocular settings and achieves performance comparable to multi\-view baselines using only a single camera\.

## A simple model of co\-emergence of grid and place fields

**Authors:** Zhaoze Wang; Genela Morris; Dori Derdikman; Pratik Chaudhari; Vijay Balasubramanian

**ID:** 155687 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3gP67zjrHg>) | [PDF](<https://openreview.net/pdf?id=3gP67zjrHg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155687>)

Grid cells in the medial entorhinal cortex and place cells in the hippocampus together support spatial navigation\. The two regions are reciprocally connected, and there is a chicken\-and\-egg problem for how both arise and reinforce each other during development\. Current computational accounts either derive one type from the other or use network dynamics to model the emergence of one type in isolation\. We introduce a unified recurrent network model that instantiates Dale's Law \(every neuron is either excitatory or inhibitory\), and is trained to predict the next sensory observation from masked previous sensory observations and egocentric motion\. To our knowledge, this is the first single\-objective model in which grid and place cells co\-emerge without supervision of either type, or reliance on pre\-existing spatial\-cell representations\. The two kinds of spatial codes coexist across 1,000 different training configurations, with their balance set by the amount of sensory noise and masking\. Without retraining, the network qualitatively reproduces experimentally observed grid fragmentation in hairpin mazes, grid merging after wall removal, lattice alignment across connected rooms, locally ordered 3D fields observed in freely flying bats, as well as the developmental order in which place cells precede grid cells\. We interpret these results in terms of two complementary encoding pressures within a single sensory\-prediction objective: \(1\) correcting errors or reconstructing missing components of sensory observations, and \(2\) prediction of the next sensory state during navigation\. Our results suggest a circuit\-level account of the co\-emergence of grid and place cells, and experimentally testable predictions for the two kinds of spatial codes\.

## VLS: A Vision\-Language\-Shape Model for Open\-Vocabulary Partonomic 3D Reconstruction

**Authors:** Xiaoqian Ruan; Pei Yu; Dian Jia; Hyeonjeong Park; Peixi Xiong; Wei Tang

**ID:** 155339 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6LlHvYynTV>) | [PDF](<https://openreview.net/pdf?id=6LlHvYynTV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155339>)

Single\-view 3D reconstruction has advanced rapidly in recent years, but existing research primarily focuses on recovering whole\-object geometry while ignoring their semantic parts, which are crucial for fine\-grained 3D perception and downstream applications\. This paper introduces the task of open\-vocabulary partonomic reconstruction\. Given a single image and a set of part names, we aim to reconstruct both the object’s overall shape and its constituent semantic parts, even when the object and part categories are unseen during training\. To address this task, we propose a vision\-language\-shape \(VLS\) model that unifies vision, language, and shape representations within a shared neural field and grounds continuous 3D coordinates to 2D pixel contexts via a deformable implicit function\. It can effectively reconstruct any\-topology shapes and open\-vocabulary semantic parts from a single image\. To train VLS with limited 3D part\-labeled data, we propose an omni\-supervised learning framework that leverages heterogeneous datasets with different levels of annotation and open\-world knowledge from existing vision\-language models\. Extensive experiments on ShapeNetPart, PartNet, and Objaverse demonstrate the effectiveness and strong generalization ability of VLS\. We will release the code and data publicly\.

## Hierarchical Graph Alignment for Cross\-Modal 3D Scene Grounding

**Authors:** Tianyi Shang; Zhenyu Li

**ID:** 154207 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FOlDXBOICc>) | [PDF](<https://openreview.net/pdf?id=FOlDXBOICc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154207>)

Text\-guided point\-cloud grounding enables robots to ground natural\-language descriptions in 3D environments, making it important for embodied AI and human\-robot interaction\. Existing coarse\-to\-fine methods primarily rely on global descriptors for submap retrieval, but these descriptors often compress object semantics, spatial relations, and scene layouts into a single vector, thereby limiting discriminability in large\-scale scenes\. We propose HiGraLoc, a multi\-level cross\-modal alignment framework that improves the coarse retrieval stage through three complementary branches\. The instance branch uses a Hyperbolic Instance Structure Encoder to model hierarchical object semantics, the relation branch aggregates reliability\-weighted pairwise spatial relations, and the global branch employs a Global Spectral Graph Encoder to capture multi\-frequency scene structure\. A Text2Loc\-style coordinate regression stage then refines the location estimate within the retrieved submap\. Experiments on KITTI360Pose show that HiGraLoc achieves a 19\\% improvement in Top\-1 recall@10m over existing state\-of\-the\-art methods\. Our code and dataset are available at https://github\.com/Anonymous09871745/HiGraLoc\.

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

## C3VD\-DEFCOL: A Deformable Colonoscopy Dataset with Time\-Resolved 3D Ground Truth and Realistic Appearance

**Authors:** Ethan Luk; Mayank Golhar; Anthony Song; Raúl Iranzo; Victor M\. Batlle; Lalithkumar Seenivasan; JMM Montiel; Nicholas Durr

**ID:** 139182 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g3SVRBCoiA>) | [PDF](<https://openreview.net/pdf?id=g3SVRBCoiA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139182>)

3D reconstruction could improve colonoscopy by estimating mucosal coverage and alerting clinicians to missed regions during screening\. However, algorithm development is limited as no current datasets provide both a realistic in vivo appearance and dense, time\-resolved 3D ground truth, especially under non\-rigid deformation\. We present C3VD\-DEFCOL, a framework and dataset for evaluating deformable colonoscopy reconstruction with paired geometry and realistic texture\. Starting from C3VD/C3VDv2 colon meshes and camera trajectories, we generate controlled deformations of the colon surface, including peristaltic waves and centerline motion, and render fisheye colonoscopy videos with frame\-level depth, surface normals, optical flow, occlusion masks, camera poses, and time\-stamped 3D meshes\. We then use the rendered geometry, primarily depth, to condition an LTX\-2\.3\-based sim\-to\-real translation model that produces RGB clips with in vivo\-like mucosal color, texture, vasculature, and specular appearance while preserving the underlying 3D scene structure\. The resulting dataset contains 110 videos from 12 unique colon mesh geometries, with varying camera trajectories, appearances, and multiple deformation regimes, including three peristaltic severity levels\. We evaluate the generated videos using appearance realism, geometric consistency, and temporal consistency metrics, and use the paired ground truth to benchmark the downstream task of pose estimation in deformable 3D reconstruction\. Our experiments show how pose estimation error increases with increasing deformation severity, providing a controlled stress test that is not possible with existing in vivo datasets\. Overall, C3VD\-DEFCOL is designed as a reproducible, quantitative evaluation platform for testing deformable 3D reconstruction algorithms, with the goal of reducing the domain gap between synthetic datasets and in vivo colonoscopy\.

## Residual\-Autoregressive Context for 3D Gaussian Splatting Compression

**Authors:** Wenqing Wang; Huimin Zeng; Yun Fu

**ID:** 155263 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=70jmXdhtUF>) | [PDF](<https://openreview.net/pdf?id=70jmXdhtUF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155263>)

3D Gaussian Splatting \(3DGS\) has emerged as a promising method that enables fast and high\-quality novel\-view rendering\. However, its large parameter size remains a bottleneck for storage and transmission\. We propose \*RacerGS\*, a compact 3DGS compression framework that achieves scene reconstruction at significantly reduced storage sizes with preserved fidelity\. To obtain compact and spatially coherent features, we design a hash projection model that projects the anchor hash encodings into compact context features\. Additionally, we introduce a FiLM\-modulated autoregressive GRU context model that utilizes causal dependencies among anchor feature groups and uses recurrent hidden states to refine entropy\-model parameters, improving bitrate efficiency\. Furthermore, we adaptively entropy\-code quantized residuals of anchor attributes around their context\-predicted means, reducing symbol entropy by leveraging spatial consistency\. Overall, \*RacerGS\* achieves more than \*\*$\\mathbf\{150\}\\boldsymbol\{\\times\}$\*\* compression over vanilla 3DGS and \*\*$\\mathbf\{28\}\\boldsymbol\{\\times\}$\*\* over Scaffold\-GS, while providing comparable rendering quality\. Extensive experiments across five datasets demonstrate our superiority over prior 3DGS compression methods in both storage reduction and rate\-distortion performance\.

## Physical AI Smart Spaces: A Large\-Scale Benchmark for Multi\-Camera 3D Perception in Smart Spaces

**Authors:** Yuxing Wang; Yizhou Wang; Anqi Li; Shuo Wang; Sameer Satish Pusegaonkar; Haoquan Liang; Jiajun Li; Shenxin Jiang; Jianhe Yuan; Shangru Li; Tongwei Dai; Zihao Chen; David Anastasiu; Zheng \(Thomas\) Tang; Sujit Biswas; Xunlei Wu

**ID:** 139407 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SdCUsRcgQI>) | [PDF](<https://openreview.net/pdf?id=SdCUsRcgQI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139407>)

Physical AI Smart Spaces is, to the best of our knowledge, the first benchmark to simultaneously provide large\-scale, multi\-class, and multi\-camera 3D perception data for indoor smart spaces\. It contains over 280 hours of synchronized 1080p footage captured by nearly 1,800 cameras in warehouses, hospitals, retail venues, and similar settings, together with automatic annotations for multi\-camera identities, 2D bounding boxes, 3D bounding boxes, camera calibration, and depth where available\. The benchmark spans Isaac Sim synthetic generation, Cosmos Transfer appearance augmentation, and real\-world Sim2Real evaluation\. For the real\-world target, we include two warehouse deployments with time\-synchronized streams, automatic VGGT\-based calibration, and a 3D labeling interface that projects world\-frame 3D boxes into each view for cross\-camera verification\. We describe the dataset scope, annotation and calibration schema, generation workflow, benchmark protocols, and official evaluation system, which standardizes submission format, and leaderboard reporting\. A central contribution is a 3D instantiation of Higher Order Tracking Accuracy \(HOTA\), extending the usual 2D box\-based tracking evaluation to 3D locations and 3D boxes\. We further report empirical baselines from the AI City Challenge leaderboards, showing how methods evolve from person\-only 3D location tracking to multi\-class 3D box tracking under realistic smart\-space constraints\. The release is available at https://huggingface\.co/datasets/nvidia/PhysicalAI\-SmartSpaces\.

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

## Coarse\-to\-Fine 3D MRI Reconstruction via Resolution\-Agnostic Neural Operators

**Authors:** Jiayun \(Peter\) Wang; Ruibo Wang; Valentin Duruisseaux; Ram Daftari; Weijie Gan; Armeet Jatyani; Boris Bonev; Animashree Anandkumar

**ID:** 151950 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WcGVLtalaf>) | [PDF](<https://openreview.net/pdf?id=WcGVLtalaf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151950>)

Deep\-learning\-based 3D MRI reconstruction is limited in practice by the GPU memory and compute cost of full\-volume training\. A common workaround is to train at lower resolution and run inference at higher resolution, but standard neural networks are resolution\-specific and degrade substantially when evaluated outside the training setting\. We instead use resolution\-agnostic neural operators \(NOs\) and propose KIR\-NO \(k\-space\-to\-Image Reconstruction Neural Operator\), a coarse\-to\-fine, discretization\-agnostic framework for accelerated 3D MRI reconstruction\. KIR\-NO is trained with full backpropagation on memory\-feasible low\-resolution volumes and applied zero\-shot to higher\-resolution volumes at inference, without fine\-tuning\. Its core building block is a 3D local neural operator based on discrete\-continuous convolutions: convolutional filters are parameterized in a continuous basis \(we propose and empirically compare two 3D bases, piecewise\-linear and Morlet\-wavelet\) and sampled at arbitrary voxel resolutions while preserving the local inductive bias of convolution\. KIR\-NO integrates these learned operators with physics\-based consistency: a k\-space neural\-operator head first refines the undersampled Fourier measurements, and image\-space neural\-operator cascades then refine the reconstruction through interleaved data\-consistency updates\. Across 3D knee \(SKM\-TEA\) and brain \(BraTS 2021\) MRI benchmarks, KIR\-NO consistently outperforms classical and CNN baselines: it improves over a state\-of\-the\-art 3D CNN by 4\.13 dB PSNR at half resolution under 4× acceleration on SKM\-TEA, with gains persisting at 8× and 16×, and exceeds the same baseline by 13\.63 dB under zero\-shot full\-resolution transfer on BraTS\. Together, these results show that KIR\-NO enables scalable, memory\-efficient, and resolution\-flexible 3D MRI reconstruction across anatomies\.

## Relational Feature Distillation for Lightweight 3D Point Cloud Segmentation

**Authors:** Mohammad Saeid; Amir Salarpour; Pedram MohajerAnsari; Mert D Pesé

**ID:** 148750 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vK7LWQHktB>) | [PDF](<https://openreview.net/pdf?id=vK7LWQHktB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148750>)

We study compression of serialized 3D point transformers for efficient point cloud segmentation\. Starting from LitePT\-S, we derive \\textbf\{TrimPT\}, a compact student that reduces channel width and stage\-3 attention depth while preserving the full 1024\-point attention window\. TrimPT uses 5\.84\\,M parameters and 12\.95\\,GFLOPs, giving $2\.18\\times$ fewer parameters and $1\.96\\times$ fewer FLOPs than LitePT\-S\. To improve the compressed student, we introduce \\textbf\{Stage\-wise Relational Feature Distillation \(SRFD\)\}, a training\-only objective that matches pairwise cosine\-similarity matrices between teacher and student features at the compressed attention stages\. This explicitly regularizes teacher\-\-student affinity mismatch and adds no inference\-time cost because the teacher and projection heads are discarded after training\. On ScanNet semantic segmentation, the resulting \\textbf\{TopoPT\} reaches 76\.6\\% mIoU with a 5\.84\\,M parameter inference footprint, improving over TrimPT without SRFD and matching the official LitePT\-S result with substantially fewer inference\-time parameters and FLOPs\. TopoPT also obtains 63\.9\\% mAP$\_\{50\}$ on ScanNet instance segmentation, 33\.0\\% mAP$\_\{50\}$ on ScanNet200, and 81\.4\\% mIoU on nuScenes, suggesting that stage\-wise relational distillation is a useful training\-time regularizer for lightweight 3D segmentation backbones\. Code and models are available at: \\url\{https://github\.com/anon\-push/TopoPT\}

## Diffeomoprhism\-Informed 3D Gaussian Splattings via Screen\-Space Optimal Transport \(OT\)

**Authors:** Xiang Gao; Xiaoping Zhu; Xinmu Wang; Yuanpeng Liu; Haotian Yin; Dichang Zhang; Yazheng Chen; Yue Wang; Yubin Zhou; Yu Guo; Wei Chen; David Gu; Xiyun Song; Heather Yu

**ID:** 151447 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ac9rdVDTOU>) | [PDF](<https://openreview.net/pdf?id=ac9rdVDTOU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151447>)

3D Gaussian Splatting \(3DGS\) has emerged as an effective solution for real\-time novel view synthesis \(NVS\) with high rendering quality, but training memory scales with image resolution, making downsampled supervision common and leading to loss of sharp, high\-frequency details and degraded perceptual quality\. Moreover, uniform supervision assigns equal weight to all pixels, resulting in weak emphasis on detail\-rich regions such as edges and thin structures\. We propose \\textbf\{OT\-3DGS\}, which leverages optimal transport in screen space to reparameterize the image domain prior to downsampling, inducing importance\-based non\-uniform supervision that redistributes pixel budget toward geometry\-critical regions and strengthens supervision on high\-frequency content\. Our method remains fully compatible with the original 3DGS pipeline, requiring no modification to loss functions, rendering settings, or pruning, cloning, and splitting strategies\. Experiments across diverse datasets show that OT\-3DGS produces sharper structures, clearer reflectance, and reduced over\-smoothing; while PSNR and SSIM may slightly decrease due to deviation from downsampled references, reference\-free metrics including BRISQUE, NIQE, and Laplacian Variance \(LV\) improve significantly, better reflecting perceptual quality and high\-frequency detail\. These results demonstrate that OT\-3DGS aligns with the fundamental goal of NVS: generating perceptually realistic, high\-quality unseen views\.

## Extending 3D Reconstruction Models to Any Camera

**Authors:** Ruxiao Duan; Yunwen \(Verse\) Zhou; Erin Hong; Dongxu Zhao; Eric Turner; Federico Tombari; Alex Wong

**ID:** 156110 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0K6xev69k8>) | [PDF](<https://openreview.net/pdf?id=0K6xev69k8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156110>)

Feed\-forward 3D reconstruction from unconstrained multi\-view images has recently emerged as a dominant paradigm in 3D computer vision\. Various foundational reconstruction models have been proposed with different architectures and reconstruction paradigms\. Despite being trained on large\-scale perspective datasets with substantial computational resources, these models generally fail when deployed on images whose camera models deviate from the training distribution\. Applying such models to downstream applications with arbitrary, unknown, and potentially mixed camera types remains challenging\. To maximally leverage the strengths of existing reconstruction models with minimal retraining efforts, we propose a low\-rank adaptation framework that efficiently extends perspective\-pretrained models to fisheye and panoramic imagery\. Extensive experiments demonstrate that, with only 0\.1% additional parameters and one day of training, our method can adapt a foundational 3D reconstruction model to non\-pinhole cameras while fully preserving its original performance on perspective inputs\.

## CC\-GS: Low\-Memory 3D Gaussian Splatting Training via CPU\-GPU Block\-Wise Context Compositing

**Authors:** Jian Xu; Siyi Wu; Yi Li; Bingzhe Li; Sian Jin; Wei Niu; Sheng Di; Yuede Ji; Miao Yin

**ID:** 154162 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FoB1Zw7yGu>) | [PDF](<https://openreview.net/pdf?id=FoB1Zw7yGu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154162>)

Training a single 3D Gaussian Splatting \(3DGS\) scene routinely requires tens of gigabytes of GPU memory, placing standard 3DGS training beyond many low\-memory GPU budgets commonly found on laptops and edge devices\.  Existing low\-memory approaches mainly follow two directions: block\-wise training and frustum\-culling\-based host offloading\.  Block\-wise methods train spatial blocks independently and merge them afterward\.  However, because 3DGS renders each image through depth\-ordered alpha compositing over all visible Gaussians, independent block training reduces optimization to block\-local objectives, thereby losing full\-image loss supervision\.  Frustum\-culling\-based host offloading retains full\-image loss supervision by jointly rendering all visible Gaussians while uploading only the view\-visible subset to the GPU\. However, its GPU memory consumption still scales  with the size of the visible set, which can exceed the memory budget of low\-end GPUs for dense scenes or wide\-coverage views\.  We propose CC\-GS, a low\-memory block\-wise 3DGS training framework based on CPU\-GPU block\-wise context compositing,  featuring three key designs\. $\\textbf\{i\) Block\-wise context compositing\}$: CC\-GS partitions Gaussians into capacity\-bounded  blocks and represents non\-optimized visible blocks using cached per\-pixel color and residual transmittance, with depth used only for ordering,  enabling full\-image loss supervision while processing one capacity\-bounded block at a time\. $\\textbf\{ii\) Two\-pass block\-wise training\}$:  each training view is processed through a lightweight context pass for caching compositing context and a differentiable block\-optimization  pass for updating individual blocks\. $\\textbf\{iii\) Asynchronous CPU\-GPU execution\}$: CC\-GS overlaps block gathering, host\-device transfers,  rendering, backpropagation, gradient offloading, and CPU\-side updates through an asynchronous CPU\-GPU pipeline\.  Experiments on standard 3DGS benchmarks show that CC\-GS keeps the measured peak GPU memory below 2GB for all evaluated scenes  while matching the rendering quality of standard 3DGS\. Compared with standard 3DGS, CC\-GS, incurs at most a $1\.54\\times$ dataset\-level  training slowdown\.

## GeoWind2Plan: Mission\-Time 3D Urban Wind Prediction for Energy\-Efficient UAV Planning

**Authors:** Shaoxiang Qin; Xiongye Xiao; Yucheng Zhao; Fuyuan Lyu; Di Zhou; Jiachen Yao; Steve Liu; Animashree Anandkumar; Liangzhu Leon Wang

**ID:** 149346 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qmFNLvxGRp>) | [PDF](<https://openreview.net/pdf?id=qmFNLvxGRp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149346>)

In urban low\-altitude flight, buildings reshape ambient wind into spatially varying 3D flow, making unmanned aerial vehicle \(UAV\) energy depend on local wind exposure as well as path length\. However, building\-resolved wind information is rarely available when a mission must be planned\. Computational fluid dynamics \(CFD\) can produce high\-fidelity urban flow fields, but each simulation is tied to a fixed inflow boundary condition and can take hours to days, which is incompatible with urban UAV missions that typically last minutes to tens of minutes\. We present GeoWind2Plan, a geometry\-to\-wind\-to\-planning framework for mission\-time 3D urban wind prediction and energy\-efficient UAV planning\. Given only a background wind vector, 3D building geometry, and a start\-goal pair, GeoWind2Plan transforms the building geometry into a reference\-wind frame, predicts mission\-relevant 3D wind patches with a localized geometry\-conditioned neural operator, stitches them into a queryable local wind field, and optimizes a feasible 3D path and speed profile using a physically grounded UAV energy model\. Rather than pursuing CFD\-perfect reconstruction, GeoWind2Plan targets decision\-useful wind prediction: trajectories are planned with predicted wind and evaluated under high\-fidelity CFD wind\. Across held\-out urban domains, wind speeds, and mission wind\-angle regimes, GeoWind2Plan performs corridor\-localized wind inference in about 3 seconds, compared with roughly 8 hours for CFD\. Under CFD evaluation, trajectories planned with GeoWind2Plan reduce energy by 6\.9%, 12\.7%, and 4\.5% in tailwind, headwind, and crosswind missions relative to wind\-agnostic planning, recovering 87\.9%, 85\.7%, and 75\.0% of CFD\-reference savings\. These results show that fast, corridor\-localized 3D urban wind prediction can make wind\-aware UAV energy planning practical at mission time\.

## DarkVGGT: Seeing Through Darkness Using Thermal Geometry without Daylight Tax

**Authors:** Minseong Kweon; Wenyuan Zhao; Nuo Chen; Lulin Liu; Tracy Han; Zihao Zhu; Srinivas Shakkottai; Chao Tian; Zhiwen Fan

**ID:** 148595 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wYQCa1v7gQ>) | [PDF](<https://openreview.net/pdf?id=wYQCa1v7gQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148595>)

Recent feed\-forward 3D reconstruction methods have demonstrated strong performance and flexibility in efficient end\-to\-end scene geometry estimation from image streams\. However, their reliance on visible\-light appearance makes them vulnerable in dark and low\-visibility environments, where RGB cues are severely degraded and geometric evidence becomes ambiguous\. To address this challenge, we propose DarkVGGT, an RGB\-T feed\-forward geometry framework that uses physics\-aware thermal modeling for robust 3D estimation in low\-light scenes\. DarkVGGT introduces two complementary modules\. First, physics\-inspired thermal factorization extracts emissive\-dominant, geometry\-consistent thermal cues while isolating sparse reflective residuals that may introduce geometric ambiguity\. Second, geometry\-shared thermal routing isolates modality\-invariant geometric structures from thermal\-specific patterns, selectively injecting reliability\-aware structural guidance into the RGB stream\. Together, these components enable accurate thermal\-informed geometry estimation under degraded RGB conditions while largely preserving performance in well\-lit environments\. Experiments on low\-visibility RGB\-T benchmarks demonstrate consistent improvements in both depth and camera pose estimation over existing feed\-forward geometry baselines\.

## MoSE3: Learning World\-Space SE\(3\) at Every Pixel

**Authors:** Jiahuan\(Joanna\) Cheng; Zhiyi Li; Tian Xia; Ruojin Cai; Yilun Du; Qianqian Wang

**ID:** 155847 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2S8lPSNr5U>) | [PDF](<https://openreview.net/pdf?id=2S8lPSNr5U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155847>)

Dense 2D/3D point tracking has been the dominant paradigm for modeling motion in dynamic scenes, but a point track is just a 3\-DoF translation curve per pixel: it captures where pixels go, not the rotation of the underlying part, nor which pixels move together as one body\. We propose MoSE3, the first feed\-forward model that predicts dense SE\(3\) motion from monocular RGB video, producing full 6\-DoF rigid transforms at every pixel in world space\. Per\-pixel SE\(3\) motion offers a richer view of how a scene moves: rotation, translation, and grouping all at once\. Directly predicting SE\(3\) is challenging: rotations lie on a curved manifold that is ill\-suited to Euclidean regression, and annotations for SE\(3\) are particularly difficult to acquire\. To address these challenges, MoSE3 predicts per\-pixel SE\(3\) through two jointly learned intermediates, 3D point tracks and rigidity embeddings, and recovers SE\(3\) by differentiably fitting transforms within each soft rigid cluster, enabling end\-to\-end prediction and supervision\. To close the data gap, we introduce Art\-Kubric, a large\-scale synthetic dataset with dense SE\(3\) and rigidity labels for articulated scenes with rich physical interactions\. MoSE3 achieves state\-of\-the\-art SE\(3\) estimation at pixel, part, and object levels on both rigid and articulated benchmarks, and state\-of\-the\-art 3D point tracking on three datasets, while showing strong generalization to real\-world videos despite being trained solely on synthetic motion data\.

## EgoSurgHands: An Egocentric 3D Hand Pose Dataset &amp; Benchmark for Open\-Surgery Training

**Authors:** Ankit Pal; Guillaume Kugener; Sofia Volpi; Joshua Schwartz; Alex Idarraga; Pranav Rajpurkar; Gabriel A Brat

**ID:** 139540 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JzZtdS0p1e>) | [PDF](<https://openreview.net/pdf?id=JzZtdS0p1e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139540>)

We introduce EgoSurgHands, an egocentric 3D hand\-pose dataset and benchmark for open\-surgery training tasks captured with Meta Project Aria glasses on standard surgical training pads\. To our knowledge, EgoSurgHands is the first public benchmark for surgical training that is simultaneously egocentric, sensor\-grounded, and human\-validated\. EgoSurgHands contains 41,909 training hand\-instance rows across 55 procedure recordings and 9,476 inter\-annotator\-agreement \(IAA\)\-validated rows across 13 held\-out procedure recordings from 4 wearers, 13 distinct tasks, 3 glove colors, and 3 stages of training\. Each frame includes Aria intrinsics, SLAM extrinsics, MPS \(Machine Perception Services\) landmarks, per\-joint confidence, timestamps, and eye gaze\. Validation 3D keypoints are initialized from Aria MPS and independently corrected by four expert annotators under a multi\-rater IAA workflow, yielding evaluation ground truth independent of any tested model's training signal\. Using EgoSurgHands, we benchmark six state\-of\-the\-art hand reconstructors under zero\-shot transfer: HaMeR, WiLoR, WildHands, JointTransformer, SimpleHand, and MeshGraphormer\. Ego\-pretrained models consistently outperform non\-egocentric baselines: WildHands improves over the non\-ego HaMeR reference by 4\.51 mm PA\-MPJPE, while JointTransformer achieves the best zero\-shot result at 14\.95 mm PA\-MPJPE\. These results show that generalist egocentric pretraining transfers to surgical egocentric tasks, but also reveal a substantial remaining surgical\-domain gap\. As a lightweight diagnostic adaptation experiment, a 58K\-parameter two\-headed \(pose \+ translation\) residual corrector further reduces error on frozen backbones, reaching 10\.40 mm PA\-MPJPE and 75\.8 mm absolute MPJPE on WildHands \($\-$49\.2\\% and $\-$85\.8\\% vs zero\-shot\)\. We release the dataset, benchmark code, checkpoints, and multi\-rater annotation framework at \[URL withheld for double\-blind review\]\.

## 3DSPA: A 3D Semantic Point Autoencoder for Evaluating Video Realism

**Authors:** Bhavik Chandna; Kelsey Allen

**ID:** 153051 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OOMPX54uZM>) | [PDF](<https://openreview.net/pdf?id=OOMPX54uZM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153051>)

AI video generation is evolving rapidly\. For video generators to be useful for applications ranging from robotics to film\-making, they must consistently produce realistic videos\. However, evaluating the realism of generated videos remains a largely manual process \-\- requiring human annotation or bespoke evaluation datasets which have restricted scope\. Here we develop an automated evaluation framework for video realism  which captures both semantics and coherent 3D structure and which does not require access to a reference video\. Our method, 3DSPA, is a \*\*3D\*\* \*\*S\*\*emantic \*\*P\*\*oint \*\*A\*\*utoencoder utoencoder which is trained to reconstruct held out 3D point trajectories which have been augmented with DINO semantic features\. By combining both semantic and geometric representations, 3DSPA enables robust assessments of realism, temporal consistency, and physical plausibility in generated videos\. Experiments show that 3DSPA outperforms leading VLMs by more than 10\\% in identifying videos which violate physical laws, and more than doubles the correlations between human and auto\-eval ratings in judging physical common sense and motion quality across multiple generative video datasets\. Our results demonstrate that enriching trajectory\-based representations with 3D semantics offers a strong foundation for benchmarking generative video models, and implicitly captures physical rule violations\.

## VolFill: Single\-View Amodal 3D Scene Reconstruction with Volumetric Flow Matching

**Authors:** Tuan Ngo; Chuang Gan; Evangelos Kalogerakis

**ID:** 151919 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WvIoVDOETy>) | [PDF](<https://openreview.net/pdf?id=WvIoVDOETy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151919>)

Reconstructing the complete geometry of a scene from a single RGB image remains challenging—especially when inferring hidden structures where visual evidence is incomplete\. We introduce VolFill, a generative framework that predicts the 3D structure of the complete scene rather than relying on traditional pixel\-aligned regression\. Our method utilizes a hybrid 3D VAE to compress sparse truncated unsigned distance function grids  into a compact latent space, paired with a latent Diffusion Transformer that denoises this representation to recover the complete scene\. We condition the generation on geometry foundation models, leveraging rich spatial priors for robust reasoning\. Unlike existing methods limited by per\-ray constraints or unstructured point\-cloud queries, VolFill provides a structured representation that supports direct surface extraction and occupancy queries at scale\. Extensive experiments on the 3D\-FRONT and NRGBD datasets demonstrate that our approach significantly outperforms current baselines, providing a robust foundation for holistic spatial understanding\.

## Predictive 4D Generation with Latent State Machines

**Authors:** Yue Gao; Chen Geng; Hanzhe Hu; Fangyun Wei; Jianfeng Xiang; Jiaolong Yang; Jiajun Wu

**ID:** 148505 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xKZXNtiL4q>) | [PDF](<https://openreview.net/pdf?id=xKZXNtiL4q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148505>)

What is the right representation for 4D \(3D \+ time\) generation of graphics assets conditioned on their current states? In this setting, an ideal 4D representation should support flexible geometric structure, empower long\-horizon modeling, and utilize training data efficiently\. We study this problem by considering a sufficiently challenging setting to stress test those properties: learning the generative distribution of the entire 4D lifespan of a plant, conditioned on a snapshot of its growth\. We curate a large\-scale dataset and benchmark for this setting, on which most existing 4D representations and accompanying generative models fail to deliver promising results\. We analyze the pitfalls of existing representations and point out that the capacity of existing models is bounded by their representations: they are mostly augmenting a temporal dimension to an existing geometric representation, without a semantically\-meaningful low\-dimensional state representation\. Instead, we argue for a framework for designing 4D representations by separately considering 3D state representations and temporal state transitions\. We propose an instantiation of this framework using latent spaces of 3D foundation models and a transformer\-based state transition model, effectively forming a finite state machine on a latent 3D space\. Therefore, we name this instantiation a \*latent state machine\* and compare it against existing generative models on the proposed benchmark\. Our evaluation shows that our model achieves state\-of\-the\-art performance in expressiveness, data efficiency, and rendering quality, surpassing existing methods by a large margin\.

## VLSplat: Vision\-Language Guided Object\-Centric 3D Gaussian Splatting via Scene Graph

**Authors:** Yuntae Jeon; Younho Jeon; Sujin Jin; Sungho Jo; Seunghee Park

**ID:** 148647 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wB1qrn1Paj>) | [PDF](<https://openreview.net/pdf?id=wB1qrn1Paj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148647>)

Learning semantic representations for 3D Gaussian Splatting has recently emerged as a promising direction for 3D scene understanding\. However, existing 2D\-to\-3D semantic lifting approaches rely primarily on 2D segmentation supervision and lack object\-level priors, causing the learned representation to be driven by local mask evidence rather than holistic object structure\. In this paper, we present VLSplat, a vision\-language guided approach for object\-centric semantic lifting in 3D Gaussian Splatting\. Our method augments mask\-based lifting with object\-level semantic priors derived from vision\-language models and refines Gaussian representations using an object\-group scene graph\. The refinement is performed through two language\-guided modules: intra\-group refinement suppresses semantic noise within object groups, while inter\-group acquisition expands object support regions by incorporating structurally relevant candidates from neighboring groups\. Extensive experiments on indoor scene datasets demonstrate that VLSplat improves semantic consistency and structural completeness\. Our code and models are available at https://vlsplat\.github\.io/

## AdpSplit: Error\-Driven Adaptive Splitting for Faster Geometry Discovery in 3D Gaussian Splatting

**Authors:** Yongjae Lee; Jingxing Li; Abhay Yadav; Rama Chellappa; Deliang Fan

**ID:** 152835 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Q3uOxL1oc9>) | [PDF](<https://openreview.net/pdf?id=Q3uOxL1oc9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152835>)

Adaptive density control in 3D Gaussian Splatting \(3DGS\) repeatedly grows the Gaussian population through fixed\-cardinality random splitting to discover useful scene structure\. However, in vanilla 3DGS, its binary split operator requires many densification rounds to expose fine details, making it a bottleneck for efficient training schedules with fewer iterations\. We introduce AdpSplit, an error\-driven adaptive split operator that determines the number of split children and initializes the child parameters from L1\-pixel\-error region statistics, enabling fewer densification iterations, thus reduced training time, while preserving the rendering quality of full\-schedule training\. Across the MipNeRF360, Deep\-Blending, and Tanks\\&amp;Temples datasets, AdpSplit reduces the training time of multiple accelerated 3DGS pipelines by 9\.2\\%\-22\.3\\% as a simple drop\-in replacement for the standard split operator\. With FastGS, AdpSplit matches the full\-schedule PSNR on MipNeRF360 while reducing training time by 16\.4\\%, corresponding to a 12\.6$\\times$ acceleration over vanilla 3DGS\.

## ELSA3D: Elastic Semantic Anchoring for Unified 3D Understanding and Generation

**Authors:** Tianjiao \(Joey\) Yu; Xinzhuo Li; Yifan Shen; Onkar Susladkar; Yuanzhe Liu; Xiaona Zhou; Ismini Lourentzou

**ID:** 149339 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qoh4UZPjM8>) | [PDF](<https://openreview.net/pdf?id=qoh4UZPjM8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149339>)

Unified 3D foundation models aspire to generate 3D assets and reason about them in language within a single backbone, but their text–3D interaction remains largely implicit: existing methods concatenate text and 3D tokens into a flat sequence and rely on self\-attention, collapsing coarse structural cues and fine geometric details into one undifferentiated representation\. We argue that the central design problem is not richer geometry alone, but \*\*scale\-coupled cross\-modal collaboration\*\*\. We introduce \*\*ELSA3D\*\*, a unified 3D model that addresses this by structuring language and geometric reasoning jointly along matched abstraction scales\. The two streams are coupled through \*\*Anchor Tokens\*\*: a small, dynamic set of cross\-modal fusion units that bind selected text tokens to geometric evidence at a learned scale and write the fused signal back, keeping interaction sparse yet precise\. A lightweight per\-block router makes both computation and reasoning elastic, choosing which text tokens instantiate anchors at which geometric scale so that cross\-modal capacity concentrates where alignment is hardest\. ELSA3D establishes new state\-of\-the\-art on image\-to\-3D, text\-to\-3D, and 3D captioning, outperforming the strongest unified baseline on every reported metric while roughly \*\*halving\*\* FLOPs and inference latency relative to a non\-elastic version of the same model\.

## SILSA: Sliding\-Window Slice Latents for Topology\-Preserving High\-Resolution 3D Generation

**Authors:** Tianjiao \(Joey\) Yu; Xinzhuo Li; Yifan Shen; Ying Shen; Kiet Nguyen; Adheesh S Juvekar; Ismini Lourentzou

**ID:** 149726 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=noPCtvLWl3>) | [PDF](<https://openreview.net/pdf?id=noPCtvLWl3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149726>)

High\-resolution 3D generation increasingly relies on voxel latents and multi\-stage pipelines that first predict active structure and then synthesize local geometry\. While effective, this design fragments continuous surfaces into many local tokens, inflates generation cost, and often weakens topological consistency for thin or highly connected shapes\. We introduce \*\*SILSA\*\*, a topology\-aware 3D generation framework that represents shapes with compact sliding\-window slice latents\. Instead of generating expensive voxel tokens, SILSA uses a fixed set of overlapping slices along the three canonical axes, where each token summarizes a local depth window to preserve cross\-sectional continuity and support single\-stage rectified\-flow generation\. A \*\*Slice VAE\*\* encodes oriented surface samples into multi\-axis slice latents and reconstructs them with a sparse volumetric decoder, while a \*\*Volumetric Anchor Lattice\*\* coordinates directional slice streams through a shared 3D workspace\. To preserve structural correctness, we introduce slice\-level topology supervision that matches persistence diagrams and aligns Betti transitions across neighboring slices\. Experiments show that SILSA improves structural fidelity while substantially reducing generation cost\. SILSA improves PSNR by 8\.7%, coverage by 5\.96 absolute points, and Betti error by 9\.2% over the strongest baseline, while using 70\.0% fewer tokens than the next\-most compact baseline and over 98% fewer tokens than sparse or hierarchical tokenizers, reducing training memory by 40\.4% and inference time by 58\.5%\. Qualitative results further show improved preservation of thin structures, repeated components, and long\-range connectivity\.

## HilbertGen\-3D:Hilbert\-\-Multifractal Conditioning for Topology\-Aware 3D Generation

**Authors:** Ziyi Zhang; Shixuan Li; Yorie Nakahira; Paul Bogdan; Guannan Qu

**ID:** 152101 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VW15Ze9uYz>) | [PDF](<https://openreview.net/pdf?id=VW15Ze9uYz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152101>)

High\-fidelity 3D generative modeling underpins game asset creation, medical imaging, and VR/AR environmental design, where geometric structure directly influences perception and decision\-making\. Diffusion models represent a powerful paradigm for point cloud generation, yet existing approaches rely heavily on local voxel or patch features and often miss global structural organization\. Recent topology\-aware methods show that global conditioning can improve generation quality, yet persistent\-homology pipelines add substantial preprocessing complexity\. We introduce HilbertGen\-3D, a topology\-aware conditional diffusion framework based on Hilbert–Multifractal Conditioning \(HMC\)\. HMC computes multi\-scale voxel measures, serializes them via a 3D Hilbert curve to expose structured spatial dependencies, and estimates the generalized fractal dimensions from scale\-dependent partition functions\. We encode these signals as global embeddings and multi\-scale tokens, and inject them into a diffusion denoiser through an efficient bottleneck fusion module\. On ShapeNet dataset, HilbertGen\-3D reduces the 1\-Nearest Neighbor Accuracy by up to 8\.74 points and improves coverage by up to \+21\.45 over prior topology\-aware methods\. This shows that combining local density cues with global Hilbert–multifractal structure provides a simple, efficient, and effective recipe for high\-fidelity and diverse 3D generation\.

## Trellis4D: Complex 4D Mesh Generation

**Authors:** Jiraphon Yenphraphai; Jianqi Chen; Jian Wang; Guocheng Qian; Sergey Tulyakov; Rameen Abdal; Raymond A\. Yeh; Peter Wonka; Chaoyang Wang

**ID:** 153899 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Hse0SKGx7y>) | [PDF](<https://openreview.net/pdf?id=Hse0SKGx7y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153899>)

Current video\-to\-4D methods struggle with complex topology changes, transparent materials, thin structures, and inner surfaces\. We present Trellis4D, a dynamic mesh generation framework by inheriting the expressive representation of Trellis2, adapting it from image\-to\-3D to video\-conditioned 4D generation\. Our design arises from two key questions: \(a\) how to enable Trellis2's frame\-local attention to share information across frames while preserving its pretrained quality on rare cases such as transparent objects and inner surfaces, and \(b\) how to inject temporal information into a purely 3D positional encoding without breaking pretrained capabilities\. We address \(a\) with a sliding\-window cross\-frame attention and anchor on the first frame\. The first frame is generated by the base Trellis2 model and injected into our model, letting it inherit Trellis2's quality in rare cases through cross\-frame attention\. We address \(b\) with a 4D temporal encoding that repurposes redundant low\-frequency spatial RoPE bands for time, extending the encoding from 3D with no additional parameters\. Extensive experiments show the effectiveness of Trellis4D for high\-quality dynamic mesh generation on ActionBench and our own challenging complex dynamics set\.

## VeriWorld: A Verifiable Visual SWE\-Bench for Spatial Reasoning in 3D Environments

**Authors:** Yan Zheng; Anthony Peng; XUYAO LIANG; Xiaoyan Cong; Nuo Chen; Bangya Liu; Zihan Wang; Wenyan Cong; Zhiwen Fan; Zhangyang &amp;amp;quot;Atlas&amp;amp;quot; Wang

**ID:** 139095 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lLZbYegc4T>) | [PDF](<https://openreview.net/pdf?id=lLZbYegc4T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139095>)

Vision\-language models \(VLMs\) are increasingly used for spatial tasks such as navigation and manipulation, where they must infer geometry and object relationships from visual input in order to act correctly\. Existing benchmarks usually test perception and reasoning in isolation, making it hard to tell whether failures come from visual understanding, downstream reasoning, or the bridge between them\. How can we evaluate whether a model can recover the right spatial structure from visual input and use it to make correct decisions? We introduce VeriWorld, a benchmark for spatial reasoning in interactive 3D environments with executable actions and deterministic verification\. Each task is evaluated under three matched input settings \-\- visual\-only, structured, and combined \-\- while the environment and objective remain fixed\. This design isolates whether failures arise from perception, reasoning, or their interaction\. VeriWorld brings together interactive 3D environments, code\-based actions, deterministic verification, parameterized task generation, and controlled diagnostic evaluation in a single framework\. Using this setup, we uncover two findings\. First, models often succeed when given structured spatial information but fail when the same information must be inferred from visual input, revealing a recurring visual\-to\-structure gap\. Second, action\-space and harness design can change outcomes even under the same task and information condition, showing that interaction protocol is itself a confounding variable in spatial evaluation\. VeriWorld is open\-sourced to support reproducible and fine\-grained evaluation of spatial reasoning in VLMs\.

## RxGS: Receiver\-Generalizable 3D Gaussian Splatting for Radio\-Frequency Data Synthesis

**Authors:** Kang Yang; Mani Srivastava

**ID:** 149820 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=n4D3BLFY3r>) | [PDF](<https://openreview.net/pdf?id=n4D3BLFY3r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149820>)

Radio\-frequency \(RF\) data synthesis predicts the received signal given transmitter and receiver positions, and is essential for wireless applications\. Recent 3D Gaussian Splatting \(3DGS\)\-based methods achieve efficient synthesis at any transmitter but only for a fixed receiver\. Therefore, supporting $N$ receivers in one scene requires $N$ independent models and precludes prediction at unseen receivers\. We present RxGS, which achieves receiver\-generalizable synthesis within a single unified model\. Our key insight is that scene geometry is receiver\-independent while directional radiance is not: a first stage learns shared 3D Gaussian geometry, and a second stage freezes it and learns directional radiance conditioned on receiver position\. A global conditioning branch captures shared receiver\-dependent effects across the scene, while a local branch models per\-scatterer variations from the receiver's geometry and occlusion\. A multi\-receiver CUDA rasterizer further batches rendering across all $N$ receivers\. Evaluated across various RF datasets, RxGS matches or improves over per\-receiver baselines with a single shared model and generalizes to receivers unseen during training within the scene, cutting training cost by up to $45\\times$, inference cost by $7\.6\\times$, and storage by $N\\times$\.

## RefineAny3D: Depth Refinement as Semantic Alignment for Monocular 3D Detection

**Authors:** Zhihao Zhang; Gengwei Zhang; Tianlong Chen; Xiaoming Liu

**ID:** 154077 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GMa4R8shWk>) | [PDF](<https://openreview.net/pdf?id=GMa4R8shWk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154077>)

Monocular 3D object detection spans two regimes: closed\-set detectors operating within a fixed category vocabulary, and open\-vocabulary detectors that localize arbitrary categories by leveraging depth foundation models for 3D geometry\. We find that current depth foundation models, despite their strong zero\-shot generalization, lack the object\-level precision 3D detection demands: substituting a state\-of\-the\-art depth foundation model for a strong detector's predicted depth degrades accuracy, even falling below the detector's own prediction\. Rather than pushing detectors or depth models to be more accurate end\-to\-end, we treat object\-level depth refinement as a stand\-alone task and present RefineAny3D, a vision\-language model that corrects depth without ever predicting a numerical value\. Our key insight is that depth error has a direct visual signature in image space: when projected onto the image, a correctly placed box tightly encloses the object, while a too\-far box projects too small and a too\-close box projects too large\. Depth refinement thus reduces to a visual alignment problem rather than a metric regression problem, which we instantiate by extending the VLM's vocabulary with action tokens that replace numerical depth output with categorical decisions, and by supervising the model on a large\-scale chain\-of\-thought dataset that grounds each decision in explicit visual evidence\. Applied as a single post\-hoc step, RefineAny3D delivers consistent gains across closed\-set detectors, open\-vocabulary detectors, and 3D auto\-labeling tools, and generalizes to novel categories, scenes, and cameras without retraining\.

## Towards Matrix\-Parallel and Feature\-Scalable 3D Gaussian Splatting Rendering on GPUs

**Authors:** Yangming Zhang; Siyi Wu; Jian Wang; Bingzhe Li; Wei Niu; Sheng Di; Ming Li; Miao Yin

**ID:** 152933 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PHnQZyfoZ1>) | [PDF](<https://openreview.net/pdf?id=PHnQZyfoZ1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152933>)

3D Gaussian Splatting \(3DGS\) has emerged as a mainstream representation for real\-time novel view synthesis and 3D reconstruction\. However, existing 3DGS rendering pipelines are poorly aligned with modern GPU architectures: depth\-sorted alpha compositing introduces strong per\-pixel sequential dependencies, limiting parallelism and resulting in scalar Fused Multiply\-Add \(FMA\)\-dominated execution that underutilizes high\-throughput matrix units such as Tensor Cores\. This mismatch becomes more severe for multimodal and semantically enriched 3DGS, where high\-dimensional features must be accumulated from millions of Gaussians, leading to rapidly increasing computation and memory costs\. To address these challenges, we propose a matrix\-parallel rendering framework for feature\-scalable 3DGS on modern GPUs\. We first identify the sequential dependency of alpha compositing as the key obstacle to efficient high\-dimensional feature rendering, and derive an order\-independent weighted accumulation formulation that transforms feature rendering into matrix\-oriented computation\. Our framework features three key designs: i: a tile\-based splatting pipeline that maps feature accumulation to warp\-level matrix\-multiply\-accumulate execution on Tensor Cores; ii: a warp\-granularity Gaussian packing strategy that mitigates visibility irregularity and improves feature reuse; and iii: a lazy channel\-batched feature\-fetching pipeline that reduces shared\-memory pressure, maintains high warp occupancy, and overlaps memory access with matrix execution for high\-dimensional features\. Extensive experiments on Mip\-NeRF 360, LERF, and 3DOVS demonstrate that our approach enables both high performance and strong scalability for feature\-rich 3DGS rendering\. Particularly, our method achieves up to 3\.8$\\times$ speedup over 3DGS and 2$\\times$ over TC\-GS while preserving rendering quality and semantic accuracy, and further reduces kernel render time by up to 36\.7$\\times$ for high\-dimensional features\.

## CD\-RCM: Generalizable Continuous\-Depth Novel View Synthesis for Reflectance Confocal Microscopy

**Authors:** Tooba Imtiaz; Milind Rajadhyaksha; Kivanc Kose; Jennifer Dy

**ID:** 156085 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0WaapzByGt>) | [PDF](<https://openreview.net/pdf?id=0WaapzByGt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156085>)

Reflectance confocal microscopy \(RCM\) provides noninvasive, cellular\-resolution “optical biopsies” of human skin \{\\em in vivo\} by acquiring en\-face images at successive depths, forming a sparse $z$\-stack\. Due to optical limitations, these stacks are anisotropic 3D volumes with lateral resolution \($0\.5\\mu m$\) $\\sim$6 times higher compared to axial resolution, which is defined by the optical sectioning \($3\\mu m$\), limiting the interpretation of tissue\. Our goal is to provide continuous\-depth visualization by interpolating intermediate sections and making the 3D volume isotropic\. Such a representation permits arbitrary\-direction sectioning, including histopathology\-like cross\-sectional examination, without requiring per\-patient optimization\. To that end, we introduce the first RCM\-specific novel\-view synthesis \(NVS\) approach CD\-RCM: a feedforward model that predicts realistic, unseen depths from sparsely sampled RCM stacks\. Classical neural rendering methods focus on reconstruction from surface\-level multi\-view observations\. In contrast to surface\-level camera views, RCM can acquire optically sectioned en\-face images of tissue beyond the surface up to $200 \\mu m$\. However, during visualization of the RCM stacks, observations of the shallower sections \(towards the surface\) obscure the deeper ones\. This unique axial imaging geometry and layer\-dependent anatomical organization motivated our development of a tailored architectural and training framework that explicitly accounts for RCM’s depth\-resolved, occlusive imaging physics\. Experiments demonstrate that CD\-RCM achieves high\-fidelity novel\-view synthesis with sub\-second inference time\.

## Audible World Models: Spatially Aware Sound Generation for 3D Worlds

**Authors:** Duowen Chen; Jinjin He; Gouthaman KV; Sandeep Bangalore Venkatesh; Bo Zhu

**ID:** 154507 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D4dGC6P0dI>) | [PDF](<https://openreview.net/pdf?id=D4dGC6P0dI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154507>)

Text\- and image\-conditioned world generators can now produce visually rich 3D environments, but these worlds are usually silent or paired with a soundtrack generated only from text or rendered video\. Such audio can describe what should be heard, but it does not explicitly represent where sounds live in the world or how they should change as a listener moves\. We propose Audible World Models, a training\-free framework that treats sound as part of a generated world state\. Given a text prompt, our system builds a panoramic 3D proxy, decomposes it into semantic layers, identifies audible foreground objects and ambient background regions, synthesizes dry audio for each sound label, attaches sources to reconstructed geometry, and renders listener\-dependent spatial audio through geometric acoustic propagation\. This explicit coupling of semantics, geometry, and propagation produces audio that remains tied to persistent source locations and responds to viewpoint and motion\. Across 80 generated scenes, our method substantially improves spatial consistency over text\-, video\-, and panorama\-conditioned baselines while maintaining competitive semantic alignment\. VLM\-based and human evaluations further show that the resulting soundtracks are preferred for audio\-\-visual consistency, spatial plausibility, and motion\-dependent behavior\.

## PuppetGait: Generalizing Gait Recognition via 3D Body\-Aligned LVM Features

**Authors:** CHENGWEI YE; Dingqiang Ye; Chuanfu Shen; Zirui Zhou; Chao Fan; Shuaijun Jiang; Vishal Patel; Shiqi Yu

**ID:** 153748 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IzvcL0qN4m>) | [PDF](<https://openreview.net/pdf?id=IzvcL0qN4m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153748>)

Large vision model \(LVM\)\-based gait recognition has achieved remarkable performance\. However, current LVM\-based methods largely rely on 2D image\-plane representations and often neglect the underlying 3D structure of the human body\. Without 3D structural guidance, 2D representations are sensitive to viewpoint variations\. This sensitivity leads to unreliable gait features and limits generalizability in real\-world 3D scenarios\. To bridge this gap, we propose PuppetGait, a framework that aligns LVM features into a unified 3D canonical body space\. The method conceptually manipulates the features like a puppet, adjusting them to a predefined pose and viewpoint\. Comprehensive evaluations on CCPG, CCGR\-MINI, CASIA\-B\*, and SUSTech1K show that PuppetGait maintains strong within\-domain performance \(96\.54\\% mean Rank\-1 on CCPG\) while substantially improving cross\-domain generalization, reaching 23\.22\\% Rank\-1 on CCPG\-to\-CCGR\-MINI and 63\.28\\% mean Rank\-1 on CCGR\-MINI\-to\-CCPG\. Code will be publicly available\.

## What Makes a Good Path? Factoring Manifold Support and Path Geometry

**Authors:** Zhixuan Zhou; Tingting Dan; Guorong Wu

**ID:** 149855 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mmoow6azRW>) | [PDF](<https://openreview.net/pdf?id=mmoow6azRW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149855>)

The manifold hypothesis suggests that real\-world data concentrates on low\-dimensional structures, yet navigating meaningful trajectories on latent manifolds remains an open challenge\. A common approach is to construct density\-aware metrics, but such constructions bundle two distinct questions: \(i\) where valid data lies and \(ii\) how we choose to traverse on the manifold\. Since different tasks may demand different traversal behaviors even on the same data manifold, specifying these two aspects independently offers additional modeling flexibility\. We propose to factor the path objective into a kinetic term governed by a freely chosen geometric prior and a score\-based potential, derived from the negative log\-density of a pretrained diffusion model, that acts as a soft constraint for manifold adherence\. The potential encourages dynamics to evolve along the data support, while the geometric prior remains free to encode task\-specific notions of path optimality\. To solve the resulting optimization problem, we introduce \\textit\{geodesic force matching\} \(GFM\), a direct\-collocation algorithm that discretizes the trajectory and optimizes all waypoints jointly to satisfy the Euler\-\-Lagrange force balance in a least\-squares sense\. On synthetic manifolds and 3D shape interpolation, our method produces smooth, on\-manifold paths and performs favorably against recent density\-aware baselines, most notably in the low\-noise regime where those baselines become numerically unstable\.

## Not All Spines Are Created Equal: How CT Segmenters Fail on Lumbosacral Transitional Vertebrae

**Authors:** Gregory Schwing; Patrick Schwing; Miraziz Ismoilov; Nizar Alnabahneh; Loren Schwiebert

**ID:** 139654 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D8yRWDAGQF>) | [PDF](<https://openreview.net/pdf?id=D8yRWDAGQF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139654>)

Wrong\-level spine surgery remains a persistent never\-event, with the Lumbosacral Transitional Vertebra \(LSTV, 5–35% prevalence\) as its largest anatomic driver\. We audit TotalSegmentator — the most widely deployed CT segmentation system and default back\-end of 3D Slicer — and show that on lumbarization cases its output is anatomically indistinguishable from a wrong\-level surgical plan: lacking an L6 class, it shifts lumbar labels caudally by one level, with junction\-DSC dropping 29 points on Any\-LSTV\. No existing CT benchmark surfaces this — not TotalSegmentator's own evaluation, not Li et al\. \(2025\) \(the per\-class DSC frontier on the matched COLONOG split\), and not VERIDAH \(vertebra\-labeling SOTA on a private CT cohort, operating on pre\-localized crops with no pelvis\)\. We contribute: \(i\) an LSTV\-stratified evaluation protocol \(per\-class DSC, junction\-DSC over a 40 mm L5/S1 window, per\-class voxel confusion at the junction\) translating the level\-shift mechanism into quantifiable wrong\-level surgical risk; \(ii\) CTSpinoPelvic1K — 1,153 CT volumes across 802 patients with unified spinopelvic masks, 33 LSTV\-positive cases across a 6\-way phenotype taxonomy, and radiologist Castellvi typing \(I–IV\) on all 33; \(iii\) the first publicly\-released merge\-based LSTV\-handling dual\-spinopelvic CT segmenter, exceeding TotalSegmentator on sacrum \(TS=0\.817 zero\-shot\) and uniquely delivering both spine and pelvis in a single forward pass with released weights; \(iv\) an empirical isolation showing VERIDAH's training\-side L5/L6 merge eliminates the collision driving TotalSegmentator's level shift but exposes a residual L4/last\_lumbar collision on count\-style sacralization, motivating VERIDAH's sequence predictor as the necessary disambiguation component\. CTSpinoPelvic1K, the protocol, and 5\-fold checkpoints are released publicly\.

## TriSearch: Learning to Optimize Triangulations via Bistellar Flips

**Authors:** Yiran Wang; Guido Montufar

**ID:** 148495 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xNmLiO7Q7N>) | [PDF](<https://openreview.net/pdf?id=xNmLiO7Q7N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148495>)

We introduce TriSearch, a reinforcement\-learning framework for optimizing objectives over triangulations of a polytope via bistellar flips\. The key idea is a circuit\-supported subtriangulation action representation: feasible flips are  encoded by their supporting circuit and realized local subtriangulation, enabling a learned policy to rank them using local geometric and combinatorial features\. This yields a dimension\-agnostic interface and enables efficient traversal of the flip graph without explicit enumeration of the full triangulation space\. Instantiated in 3D and 4D, TriSearch generalizes zero\-shot from small training instances to larger polytopes with exponentially larger search spaces\. It achieves top performance on metric objectives in 3D and, in 4D, discovers more distinct Fine, Regular, Star triangulations of reflexive polytopes, corresponding to Calabi\-Yau threefolds, than existing samplers under a fixed budget\.

