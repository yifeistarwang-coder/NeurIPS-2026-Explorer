# Computer Vision / Segmentation

计算机视觉 / 图像分割

61 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Beyond Pixel\-wise Supervision: Local Structure Regularization for Semantic Segmentation

**Authors:** Wei Huang; Chenying Liu; Yilei Shi; Zhitong Xiong; Xiaoxiang Zhu

**ID:** 154585 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CUmOv8veJ1>) | [PDF](<https://openreview.net/pdf?id=CUmOv8veJ1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154585>)

Visual foundation models \(VFMs\) provide strong region\-level representations for semantic segmentation, substantially improving high\-level semantic understanding\. However, accurate boundary recovery remains challenging, especially for fine structures and semantic transitions\. A key reason is that conventional pixel\-level supervision largely treats pixels independently and lacks explicit modeling of local structure and neighboring\-pixel relationships\. To address this issue, we propose a Local Structure \(LS\) regularization framework that constrains the second\-order local organization of semantic transition regions\. Unlike existing boundary losses that mainly supervise contour location, distance, overlap, or topology, LS models boundary neighborhoods through a structure\-tensor representation of semantic probability fields\. It decomposes local boundary structure into two complementary cues: Local Structure Magnitude \(LSM\), which measures the strength of anisotropic class transitions, and Local Structure Orientation \(LSO\), which describes their dominant geometric orientation\. LS is model\-agnostic, compatible with different VFM\-backbone\-decoder combinations, and introduces no extra inference cost\. Extensive experiments on four diverse datasets show that LS consistently improves boundary\-sensitive performance while also enhancing overall IoU, demonstrating its effectiveness for boundary\-structure learning in semantic segmentation\.

## Pixels to Tokens: Token Space Efficient Active Learning for Low\-Budget Semantic Segmentation

**Authors:** Utku Cicek; Mahip Singh; Ziyao Shang; Kimathi Kaai; C Thomas; Pablo Guerrero; Alexander Wong; Sirisha Rambhatla

**ID:** 148535 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xBIIoVBT4V>) | [PDF](<https://openreview.net/pdf?id=xBIIoVBT4V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148535>)

Semantic segmentation typically requires dense pixel\-level annotations, creating a prohibitive bottleneck for budget\-constrained applications\. While foundation models and vision transformers \(ViTs\) have redefined visual representations, current active learning \(AL\) strategies for these backbones largely operate at the patch or region level, where annotation requirements remain high\. Extending ViT\-based AL to the pixel\-level, low\-budget regime is uniquely challenging: with as little as one pixel query per image, a method must simultaneously identify the most informative locations and train a reliable decoder head from an extremely sparse signal\. We introduce TEAL \(Token\-space Efficient Active Learning\), the first pixel\-level AL framework built around ViT representations\. TEAL uses a frozen DINOv3 backbone and performs diversity\-based selection directly on its native token lattice, avoiding the artifacts introduced by interpolating token embeddings to dense pixel resolutions\. Our framework applies a two\-level MaxHerding strategy over multi\-layer token descriptors to select representative candidates, followed by margin\-based uncertainty refinement on a finer decoder grid\. Across CamVid, Cityscapes, ADE20K, and Pascal Context, TEAL consistently outperforms previous baselines under extreme label scarcity\. After 10 rounds of 1\-pixel\-per\-image queries, TEAL improves over the strongest baseline by up to $\+\\textbf\{14\.65\}$ mIoU on CamVid and $\+\\textbf\{23\.34\}$ mIoU on Pascal Context, showing that ViT token spaces provide an effective geometry for extremely\-low\-budget active segmentation\.

## PARI: Policy\-Driven Active Residual Intervention for Weakly Supervised Point Cloud Segmentation

**Authors:** Wenhao Gao; Sen Tao; Jiawei Liu; Jiwei Feng; Yongchao Xu; Junfeng Wang; Tao Jiang; jiangbo Ai; Jin Zhang; Zheng\-Jun Zha

**ID:** 155621 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4COCLKO8xE>) | [PDF](<https://openreview.net/pdf?id=4COCLKO8xE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155621>)

3D Weakly Supervised Semantic Segmentation \(3D\-WSSS\) on point clouds aims to learn dense 3D semantics from extremely sparse point\-level annotations\. Existing methods follow a passive paradigm based on pseudo\-label propagation or consistency regularization, leading to two key issues: 1\) Lack of targeted intervention, where erroneous predictions are not explicitly identified and corrected, resulting in severe error accumulation; 2\) Limited contextual awareness, where supervision is restricted to point\- or view\-level self\-augmentation consistency, failing to capture the intricate contextual correlations embedded within the scene\. To address these limitations, we propose a Policy\-driven Active Residual Intervention \(PARI\) framework for 3D\-WSSS, where an Active Intervention Agent \(AIA\) explicitly localizes high\-risk points under the guidance of a Confidence\-aware Reward Shaping \(CRS\) strategy, and a Bias\-aware Refinement Module \(BRM\) subsequently executes targeted refinement by exploiting rich spatial and semantic scene contexts\. Specifically, AIA actively localizes high\-risk points from uncertainty maps and prediction priors, while BRM refines them through residual correction based on hybrid spatial\-feature context\. CRS introduces a high\-confidence suppression reward that discourages unnecessary intervention on reliable predictions, and a low\-confidence exploration reward that encourages intervention on uncertain predictions\. Experiments on S3DIS and ScanNetV2 demonstrate state\-of\-the\-art performance under various weak supervision settings with strong cross\-backbone generalization, even surpassing the same\-backbone fully supervised counterpart with 1% annotations\.

## On the Relaxation of Conditional Independence Assumption for Image Segmentation

**Authors:** Zixun Wang; Ben Dai

**ID:** 154387 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DwqwJHYbqV>) | [PDF](<https://openreview.net/pdf?id=DwqwJHYbqV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154387>)

In semantic segmentation, a recent line of RankSEG methods directly optimizes Dice/IoU scores at inference time, improving alignment with evaluation metrics without modifying model training\. Despite its theoretical and empirical success, RankSEG relies on the restrictive Conditional Independence Assumption \(CIA\), which ignores crucial label correlations and therefore degrades performance in ambiguous or low\-contrast scenarios\. However, accounting for full label dependence is computationally prohibitive, requiring $\\mathcal\{O\}\(d^3\)$ time\. To address this, we replace the CIA with a Spatially Localized Dependence \(SLD\) structure that captures local label correlations while keeping the dependence model tractable\. We further overcome the remaining computational bottleneck via a Reciprocal Moment Approximation coupled with a novel fixed\-point optimization strategy that eliminates exhaustive search\. The proposed algorithm achieves a highly practical $\\mathcal\{O\}\(d \\log d\)$ complexity and consistently outperforms conventional argmax and CIA\-based RankSEG across diverse segmentation benchmarks\. Improvements are significant in low\-contrast or small\-object scenarios, where label dependence offers valuable signals complementary to image information for accurate segmentation\.

## GRAPE: Graph\-Augmented Prototype Explanations for Interactive Medical Image Diagnosis

**Authors:** Rasul Khanbayov; Erchin Serpedin; HASAN KURBAN

**ID:** 150019 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lMhOWbjimZ>) | [PDF](<https://openreview.net/pdf?id=lMhOWbjimZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150019>)

Prototype\-based medical image classifiers have three clinical gaps: they treat findings as independent, silently amplify unsafe doctor feedback, and require full retraining whenever a new finding is needed\. We present GRAPE \(Graph\-Augmented Prototype Explanations\), a unified architecture that closes all three gaps\. A Graph Attention Task Head models anatomical concept co\-occurrence, boosting macro\-F1 by \+13\.8\\,pp over the prototype baseline on TBX11K\. A Concept\-Mismatch Safety Check is the first such mechanism in prototype\-based medical classifiers, warns when the model's dominant finding inside a doctor\-drawn region conflicts with the claimed label, catching 85\\% of erroneous annotations versus 51\\% for MC\-Dropout with no extra inference cost\. Open\-Vocabulary Prototype Anchoring aligns visual prototypes to clinical text, so a new finding can be added from a single labelled image without modifying any other component: on NIH ChestX\-ray14, one Effusion example recovers full\-supervision localisation accuracy; on TBX11K, prototype maps achieve $2\.6\{\\times\}$ better lesion localisation than end\-to\-end baselines\. All three capabilities add only $\+1$\~ms latency at interactive batch size\.

## Trainable Topology Supervision under Structurally Unreliable Pseudo Supervision

**Authors:** Jieyang Zhou; Ziliang Wang; Bin Hu; ying yang; Aoli He; Xianhong Wen; Kehua Guo

**ID:** 150633 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ge0NKL4C5c>) | [PDF](<https://openreview.net/pdf?id=ge0NKL4C5c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150633>)

Topology supervision relies on meaningful structural targets, yet this assumption can fail under structurally unreliable pseudo supervision\. In pseudo\-label learning, the topology induced by pseudo masks may already contain distorted components, broken connections, or spurious holes, making direct supervision\-side topology fitting unreliable and potentially propagating structural errors\. We address this problem by reformulating topology supervision as trainable topology\-side correction\. Specifically, we propose a differentiable persistent\-homology proxy loss that derives topology signals from a soft Euler\-characteristic trajectory and threshold\-wise structural variation, without computing or matching persistence barcodes\. We further introduce a conservative topology\-consistency injection mechanism that regulates when, how strongly, and in which direction these signals enter optimization\. We validate the proposed reformulation in unsupervised camouflaged object detection, a challenging setting where pseudo masks often contain severe structural distortions\. Experiments under controlled same\-carrier comparisons show consistent improvements in both task\-level detection performance and topology\-level structural reliability\. These results suggest that, under structurally unreliable pseudo supervision, topology supervision is more effective when derived as trainable proxy signals and introduced into optimization conservatively\. Code is available at https://anonymous\.4open\.science/r/LPHP/\.

## BrainEM: A Large\-Scale and Diverse Benchmark for EM Neuron Segmentation in Connectomics

**Authors:** Zhenghua Li; Lanyue Zhang; Zekang Yang; Kai Li; Yuwei Peng; Song\-Hai Shi; Xiaolin Hu

**ID:** 139121 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=juzLIwAl0Y>) | [PDF](<https://openreview.net/pdf?id=juzLIwAl0Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139121>)

Connectomics requires dense segmentation of large\-scale electron microscopy \(EM\) volumes using models trained on small labeled blocks\. In practice, a connectomics lab facing a new raw volume has two options: annotate a small block and train on it, or skip annotation and train on the union of available public labeled datasets\. We introduce BrainEM, a benchmark that formalizes these options as two standard tracks: the Same\-Source Track \(Annotate\-and\-Train\) and the Cross\-Source Track \(Reuse\-and\-Train\)\. BrainEM brings together 16 EM datasets, including one in\-house mouse dataset that we contribute, spanning multiple species, imaging modalities, and resolutions\. We further add large\-scale test volumes that bring the evaluation closer to realistic practice, and four diverse test targets in the Cross\-Source Track\. The data, post\-processing, and evaluation metrics are fixed across all methods, and the framework is fully model\-data decoupled so that new methods can be added with minimal effort\. We conduct a systematic evaluation of six representative baselines covering the main technical directions in EM neuron segmentation, making BrainEM the first systematic evaluation at large scale and across diverse cross\-source targets\. The results differ from prior small\-scale evaluations: rankings on the Same\-Source Track no longer match those reported on small CREMI splits, and methods diverge sharply on the Cross\-Source Track\. Both tracks still leave clear room for improvement\. We release BrainEM as a public platform to support unified comparison and faster method development in connectomics\. All datasets and code are available at https://github\.com/kwinderic/BrainEM

## SetCon: Towards Open\-Ended Referring Segmentation via Set\-Level Concept Prediction

**Authors:** Zhixiong Zhang; Yizhuo Li; Shuangrui Ding; Yuhang Zang; Shengyuan Ding; Long Xing; Yibin Wang; Qiaosheng Zhang; Jiaqi Wang

**ID:** 150414 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iDe99buVDR>) | [PDF](<https://openreview.net/pdf?id=iDe99buVDR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150414>)

Referring segmentation grounds natural\-language queries to pixel\-level masks, but extending it to complex scenarios with multiple instances, cross\-category groups, or open\-ended target sets remains challenging\. Previous Large Vision Language Model \(LVLM\)\-based methods represent referred targets with one or more special tokens sequentially, treating multiple targets as separate outputs rather than a coherent set and offering little incentive to capture set\-level properties such as completeness and mutual exclusivity\. We reformulate open\-ended referring segmentation as explicit set\-level concept prediction and propose Set\-Concept Segmentation \(SetCon\), which uses LVLM\-generated natural\-language concepts, instead of segmentation\-specific tokens, as semantic conditions for joint mask\-set decoding\. A hierarchical semantic decomposition first predicts a shared set\-level concept defining the target scope and then refines it into fine\-grained concept groups aligned with target subsets\. To support this, a two\-stage annotation pipeline augments existing reasoning segmentation datasets with hierarchical semantic supervision \(236k samples, 784k concept phrases\)\. SetCon achieves state\-of\-the\-art results on image benchmarks \(\+3\.3 gIoU on gRefCOCO, \+12\.1 gIoU on MUSE\), with margins that grow as the number of referred targets increases\. The concept interface also transfers to video under a detect\-and\-track setting, yielding new state\-of\-the\-art results on seven referring video benchmarks, including \+10\.9 J&amp;F on MeViS and \+12\.4 J&amp;F on Ref\-SeCVOS\. The code, model checkpoints, and dataset annotations will be released\.

## TerraMesh\-Masks: Open‑Vocabulary Segmentation for Earth Observation

**Authors:** Benedikt Blumenstiel; Hugues Devimeux; Johannes Jakubik; Konrad Schindler

**ID:** 139302 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YaQSEoAs6p>) | [PDF](<https://openreview.net/pdf?id=YaQSEoAs6p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139302>)

Open‑vocabulary segmentation \(OVS\) enables models to segment a variety of concepts specified in natural language, removing the need for fixed label sets and fine\-tuning\. While recent OVS approaches have shown strong performance on natural images, they transfer poorly to Earth observation \(EO\) data due to differing semantics, scales, sensing modality, and geographic context\. To date, large‑scale EO‑specific datasets and benchmarks for OVS remain scarce\. We, therefore, introduce TerraMesh\-Masks, a large\-scale open\-vocabulary segmentation dataset for EO, comprising 16 million binary masks aligned with nine million multimodal TerraMesh samples and annotated using OpenStreetMap and Overture\-derived semantics\. In addition, we provide an expert\-reviewed evaluation set of 523 samples covering over 200 classes to enable robust evaluation\. To demonstrate and analyze the impact of TerraMesh\-Masks, we build an open\-vocabulary version of TerraMind\. Our results demonstrate significantly improved  performance over general\-purpose state\-of\-the\-art models reaching 35\.15% IoU versus 16\.29% for DINOv3\.txt and 11\.33% for SAM\-3\. We release the dataset publicly under a permissive license at https://huggingface\.co/datasets/ibm\-esa\-geospatial/TerraMesh\-Masks\.

## Redefining Instance Matching: A Unified Framework for Part\-Aware Matching in Panoptic Segmentation Evaluation

**Authors:** Erik Großkopf; Soumya Snigdha Kundu; Hendrik Möller; Nicolas Münster; Mehdi Astaraki; Paula T Buzduga; Kerstin Ritter; Benedikt Wiestler; Jan Kirschke; Jonathan Shapey; Tom Vercauteren; Florian Kofler

**ID:** 139024 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pf5FQox6pD>) | [PDF](<https://openreview.net/pdf?id=pf5FQox6pD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139024>)

The Panoptic Quality \(PQ\) metric is the standard for jointly evaluating instance and semantic segmentation\.  However, its original definition relies on a One\-to\-One matching between predicted and ground truth segments, which is only straightforward when the IoU threshold exceeds 0\.5\.  Below 0\.5, multiple matching strategies emerge in a poorly explored problem space\.  We systematically elucidate this space by recasting segment matching as a constrained bipartite assignment problem\.  Independently bounding the prediction\- and ground\-truth\-side degrees yields four matching strategies: One\-to\-One, Many\-to\-One, One\-to\-Many, and Many\-to\-Many\.  We show that the first three are well\-defined within the PQ framework, while Many\-to\-Many falls outside it\.  These strategies become relevant when instances are fragmented, adjacent objects are difficult to delineate, or annotations are noisy\.  Central to our framework is a vertex\-based accounting of TP, FN, and FP, anchored to ground truth and predicted segments rather than to matching edges\.  We further show that the framework extends naturally to part\-aware panoptic segmentation, and we explore part\-aware evaluation on biomedical data\.  Across configurable case studies we report how different combinations of thresholds and matching strategies behave in practice\.  We release a unified open\-source package built on Panoptica\.  It exposes Voronoi\-based region\-wise analysis, part\-aware evaluation, and Area Under Threshold Curve computations as configurable options\.

## TopoRefine: Plug\-and\-Play Topology\-Aware Contour Refinement for Building Segmentation

**Authors:** Yunhui Zhu; Buliao Huang

**ID:** 148776 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v8bM1HAB90>) | [PDF](<https://openreview.net/pdf?id=v8bM1HAB90>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148776>)

Building segmentation has recently benefited from foundation segmentation models such as SAM, which offer strong generalization and scalable deployment through simple prompts\. However, SAM\-style models still produce pixel\-wise masks, whose fragmented regions and irregular boundaries often fail to preserve the geometric regularity of buildings, making direct contour vectorization unreliable\. Existing attempts to improve building polygonization typically modify the segmentation decoder or introduce additional polygon prediction branches, increasing adaptation costs and weakening the portability of pretrained foundation models\. In this paper, we ask whether accurate building polygonization can be achieved directly from frozen segmentation outputs, without modifying or retraining the underlying model\. To this end, we propose TopoRefine, a plug\-and\-play topology\-aware contour refinement framework that converts predicted contours into geometry\-consistent building polygons\. Unlike conventional contour refinement methods, which follow a fixed\-topology paradigm and can only adjust a predefined set of contour points, TopoRefine performs topology\-adaptive polygon evolution by jointly modeling vertex insertion, vertex deletion, and coordinate refinement\. This allows the refined polygon to correct structural errors inherited from frozen segmentation outputs and progressively align with the underlying building geometry\. Extensive experiments on three building segmentation benchmarks demonstrate that TopoRefine generalizes across different segmentation pipelines and consistently improves both segmentation accuracy and geometric consistency, achieving notable gains such as \+6\.17\\% AP and \+3\.53\\% PolySim on SAM 3\.

## Cross\-Foundation Complementary Learning Systems for Continual Test\-Time Adaptation in Open\-Vocabulary Semantic Segmentation

**Authors:** Guan\-Yu Chen; Wei\-Hua Li; Huei\-Fang Yang; Chu\-Song Chen

**ID:** 148739 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vP6mCzbls0>) | [PDF](<https://openreview.net/pdf?id=vP6mCzbls0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148739>)

Open\-vocabulary semantic segmentation \(OVSS\) models enable dense prediction for classes specified at test time, but continual test\-time adaptation \(CTTA\) over long, non\-stationary streams can corrupt their language\-aligned semantic interface, which we diagnose through synonym\-prompt text alignment\. We propose Cross\-Foundation Complementary Learning Systems \(XF\-CLS\), a source\-free OVSS\-CTTA framework that makes lightweight online adaptation stable over long horizons\. Inspired by Complementary Learning Systems, which couple rapid plastic learning with slow consolidation, XF\-CLS decouples plasticity from stabilization: a single fast online adaptation path updates only a small set of visual normalization parameters, a horizon\-aware, source\-anchored slow parameter memory consolidates stable changes and recovers from drift, and a frozen cross\-foundation structural observer supplies a non\-drifting structural prior for reliability\-aware recovery and dense output refinement\. Rather than training an additional teacher or using cross\-foundation pseudo\-label supervision, the frozen path preserves the open\-vocabulary interface while correcting degraded visual structure\. On long\-horizon Cityscapes\-to\-ACDC and OnDA streams, XF\-CLS achieves 32\.92 and 30\.75 mIoU, improving the NACLIP no\-adapt baseline by \+9\.00 and \+4\.13 mIoU, respectively, and outperforming continual OVSS\-TTA baselines\. Decomposition studies and text\-alignment diagnostics show that source\-anchored recovery prevents long\-horizon collapse, while frozen cross\-foundation refinement adds consistent gains without updating extra parameters\. XF\-CLS provides a stable, parameter\-efficient route to source\-free continual open\-vocabulary dense prediction, with inference overhead dominated by one additional frozen\-backbone forward pass\.

## Image Generation for Automotive Lidar Open\-vocabulary Semantic Segmentation

**Authors:** Nermin Samet; Gilles Puy; Renaud Marlet

**ID:** 151641 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z5dOCGOl4Y>) | [PDF](<https://openreview.net/pdf?id=Z5dOCGOl4Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151641>)

This paper presents a new method for the zero\-shot open\-vocabulary semantic segmentation \(OVSS\) of 3D automotive lidar data\. To circumvent the recognized image\-text modality gap that is intrinsic to approaches based on Vision Language Models \(VLMs\) such as CLIP, our method relies instead on image generation from text, to create prototype images\. Given a 3D network distilled from a 2D Vision Foundation Model \(VFM\), we then label a point cloud by matching 3D point features with 2D image features of these prototypes\. Our method is state\-of\-the\-art for OVSS on nuScenes and SemanticKITTI\.

## WaveMamba: Wave\-Inspired Cross\-Modal Fusion for Robust event\-image Semantic Segmentation

**Authors:** Adeel F Mirza; Zaiyue Yang; Muntazir Hussain

**ID:** 151756 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YIa3B1RBBV>) | [PDF](<https://openreview.net/pdf?id=YIa3B1RBBV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151756>)

Event\-image semantic segmentation is promising for autonomous driving and robotics because event cameras complement frame images under rapid motion, low illumination, and high dynamic range\. However, effective multimodal segmentation remains difficult due to asynchronous sensing, sparse\-dense modality mismatch, and the cost of heavy cross\-modal interaction modules\. We propose WaveMamba, a dual\-branch event\-image semantic segmentation framework that combines hierarchical GroupMamba encoders with a Mamba\-Wave Cross\-Modal Fusion \(MWCMF\) module\. Instead of relying on explicit registration or attention\-heavy fusion, MWCMF performs implicit cross\-modal propagation through channel\-wise and spatial\-wise wave\-guided gating in the spectral domain, followed by Mamba\-based refinement\. Experiments on DDD17 and DSEC show that WaveMamba achieves state\-of\-the\-art 78\.75 and 76\.00 mIoU, respectively\. Under rain\- and fog\-corrupted evaluation on DSEC, WaveMamba further attains 74\.0 mIoU, indicating improved robustness under degraded visual conditions\.

## Beyond Pixel\-wise Supervision: Local Structure Regularization for Semantic Segmentation

**Authors:** Wei Huang; Chenying Liu; Yilei Shi; Zhitong Xiong; Xiaoxiang Zhu

**ID:** 154585\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154585

[Paper](<https://openreview.net/forum?id=CUmOv8veJ1>) | [PDF](<https://openreview.net/pdf?id=CUmOv8veJ1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154585>)

Visual foundation models \(VFMs\) provide strong region\-level representations for semantic segmentation, substantially improving high\-level semantic understanding\. However, accurate boundary recovery remains challenging, especially for fine structures and semantic transitions\. A key reason is that conventional pixel\-level supervision largely treats pixels independently and lacks explicit modeling of local structure and neighboring\-pixel relationships\. To address this issue, we propose a Local Structure \(LS\) regularization framework that constrains the second\-order local organization of semantic transition regions\. Unlike existing boundary losses that mainly supervise contour location, distance, overlap, or topology, LS models boundary neighborhoods through a structure\-tensor representation of semantic probability fields\. It decomposes local boundary structure into two complementary cues: Local Structure Magnitude \(LSM\), which measures the strength of anisotropic class transitions, and Local Structure Orientation \(LSO\), which describes their dominant geometric orientation\. LS is model\-agnostic, compatible with different VFM\-backbone\-decoder combinations, and introduces no extra inference cost\. Extensive experiments on four diverse datasets show that LS consistently improves boundary\-sensitive performance while also enhancing overall IoU, demonstrating its effectiveness for boundary\-structure learning in semantic segmentation\.

## RipBench: A Unified Benchmark for Multi\-Level Rip Current Detection, Classification and Segmentation

**Authors:** Andrei Dumitriu; Aakash Ralhan; Florin Miron; Florin Tatui; Radu Tudor Ionescu; Radu Timofte

**ID:** 139371 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UL7UbwuqbU>) | [PDF](<https://openreview.net/pdf?id=UL7UbwuqbU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139371>)

Rip currents are a serious and often under\-addressed threat to beach safety, and the leading cause of coastal drownings worldwide\. They are difficult to detect due to their amorphous structure, similarity to the background, and large variability in viewpoints and environments\. Despite their dangers and growing interest in automated detection, existing research remains fragmented across datasets, metrics, models and approaches, leading to an incomplete understanding of model performance\. We introduce RipBench, a unified benchmark that enables controlled evaluation of rip current detection spanning multiple tasks, including classification, axis\-aligned and oriented object detection, and instance, semantic, and panoptic segmentation, on the same data with standardized splits\. This allows direct comparison of model performance on all levels of visual abstraction\. Across $304$ videos \($303\{,\}491$ frames\) collected from diverse coastlines, our results expose a clear performance gap between coarse recognition and precise spatial understanding\. While models achieve near\-saturated classification performance, accurate localization proves to be a substantially more challenging task, with performance varying across tasks\. All tasks are supported with carefully curated annotations and evaluated using both standard and safety\-critical metrics, with a focus on the $F\_2$ score to emphasize recall in this safety\-critical setting\. RipBench, along with multiple baseline models per task, is publicly available at \\url\{https://RipBench\.ai\} to support progress in real\-world, multi\-task vision for beach safety\.

## COCOTree: A Dataset and Benchmark for Open Tree\-Structured Visual Decomposition

**Authors:** Junhyub Lee; Seunghun Chae; Hyosu Kim

**ID:** 139427 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RQWfvcKFll>) | [PDF](<https://openreview.net/pdf?id=RQWfvcKFll>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139427>)

_Abstract unavailable from the accessible public sources._

## Focusable Monocular Depth Estimation

**Authors:** Yuxin Du; Tao Lin; Zile Zhong; Runting Li; Xiyao Chen; Jiting Liu; Chenglin Liu; Yingcong Chen; Yuqian Fu; Bo Zhao

**ID:** 153419 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LTHElHJrAh>) | [PDF](<https://openreview.net/pdf?id=LTHElHJrAh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153419>)

Monocular depth foundation models generalize well across scenes, yet they are typically optimized with uniform pixel\-wise objectives that do not distinguish user\-specified or task\-relevant target regions from the surrounding context\. We therefore introduce Focusable Monocular Depth Estimation \(FDE\), a region\-aware depth estimation task in which, given a specified target region, the model is required to prioritize foreground depth accuracy, preserve sharp boundary transitions, and maintain coherent global scene geometry\. To prioritize task\-critical region modeling, we propose FocusDepth, a prompt\-conditioned monocular relative depth estimation framework that guides depth modeling to focus on target regions via box/text prompts\. The core Multi\-Scale Spatial\-Aligned Fusion \(MSSA\) in FocusDepth spatially aligns multi\-scale features from Segment Anything Model 3 to the Depth Anything family and injects them through scale\-specific, gated conditional fusion\. This enables dense prompt cue injection without disrupting geometric representations, thereby endowing the depth estimation model with focused perception capability\. To study FDE, we establish FDE\-Bench, a target\-centric monocular relative depth benchmark built from image\-target\-depth triplets across five datasets, containing 252\.9K/72\.5K train/val triplets and 972 categories spanning real\-world and embodied simulation environments\. On FDE\-Bench, FocusDepth consistently improves over globally fine\-tuned DA2/DA3 baselines under both box and text prompts, with the largest gains appearing in target boundary and foreground regions while preserving global scene geometry\. Ablations show that MSSA's spatial alignment is the key design factor, as disrupting prompt\-geometry correspondence increases AbsRel by up to 13\.8%\.

## MonoChunk3D: Monocular Online 3D Instance Segmentation with Persistent Instance States

**Authors:** Yibo Zhao; Jingzhi Zhou; Yigong Zhang; Jian Yang; Jin Xie

**ID:** 155123 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8F9VWmr6fN>) | [PDF](<https://openreview.net/pdf?id=8F9VWmr6fN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155123>)

_Abstract unavailable from the accessible public sources._

## Towards Visual Query Segmentation in the Wild

**Authors:** Bing Fan; Minghao Li; Hanzhi Zhang; Shaohua Dong; NAGA PRUDHVI MAREEDU; Xiaoqiong Liu; Weishi Shi; Yunhe Feng; Yan Huang; Heng Fan

**ID:** 139583 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gx9LtAgUon>) | [PDF](<https://openreview.net/pdf?id=Gx9LtAgUon>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139583>)

_Abstract unavailable from the accessible public sources._

## MonoChunk3D: Monocular Online 3D Instance Segmentation with Persistent Instance States

**Authors:** Yibo Zhao; Jingzhi Zhou; Yigong Zhang; Jian Yang; Jin Xie

**ID:** 155123\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155123

[Paper](<https://openreview.net/forum?id=8F9VWmr6fN>) | [PDF](<https://openreview.net/pdf?id=8F9VWmr6fN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155123>)

_Abstract unavailable from the accessible public sources._

## Exploiting Fine\-Tuning Structures to Improve Adversarial Transferability on Downstream SAM

**Authors:** Shixiong Jiang; Jialiang Fan; Mengyu Liu; Pengfei Gu; Danny Z Chen; Fanxin Kong

**ID:** 155142 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=82YaF5fhKq>) | [PDF](<https://openreview.net/pdf?id=82YaF5fhKq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155142>)

Combining the Segment Anything Model \(SAM\) with fine\-tuning techniques allows SAM to be effectively adapted to various downstream image segmentation tasks\. However, this adaptability introduces new security vulnerabilities related to adversarial attacks\. In this paper, we investigate the adversarial transferability between the original SAM and its fine\-tuned downstream models\. Under limited knowledge conditions of the downstream models, we propose a novel structure\-exploiting transferable attack \(SETA\) method\. Our framework mimics the fine\-tuning architecture and estimates the parameter distributions of the downstream models to improve the transferability of the generated adversarial samples\. Experimental results demonstrate the efficacy of our proposed method in creating adversarial examples against various downstream fine\-tuned SAM models\.

## BrainEM: A Large\-Scale and Diverse Benchmark for EM Neuron Segmentation in Connectomics

**Authors:** Zhenghua Li; Lanyue Zhang; Zekang Yang; Kai Li; Yuwei Peng; Song\-Hai Shi; Xiaolin Hu

**ID:** 139121\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139121

[Paper](<https://openreview.net/forum?id=juzLIwAl0Y>) | [PDF](<https://openreview.net/pdf?id=juzLIwAl0Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139121>)

Connectomics requires dense segmentation of large\-scale electron microscopy \(EM\) volumes using models trained on small labeled blocks\. In practice, a connectomics lab facing a new raw volume has two options: annotate a small block and train on it, or skip annotation and train on the union of available public labeled datasets\. We introduce BrainEM, a benchmark that formalizes these options as two standard tracks: the Same\-Source Track \(Annotate\-and\-Train\) and the Cross\-Source Track \(Reuse\-and\-Train\)\. BrainEM brings together 16 EM datasets, including one in\-house mouse dataset that we contribute, spanning multiple species, imaging modalities, and resolutions\. We further add large\-scale test volumes that bring the evaluation closer to realistic practice, and four diverse test targets in the Cross\-Source Track\. The data, post\-processing, and evaluation metrics are fixed across all methods, and the framework is fully model\-data decoupled so that new methods can be added with minimal effort\. We conduct a systematic evaluation of six representative baselines covering the main technical directions in EM neuron segmentation, making BrainEM the first systematic evaluation at large scale and across diverse cross\-source targets\. The results differ from prior small\-scale evaluations: rankings on the Same\-Source Track no longer match those reported on small CREMI splits, and methods diverge sharply on the Cross\-Source Track\. Both tracks still leave clear room for improvement\. We release BrainEM as a public platform to support unified comparison and faster method development in connectomics\. All datasets and code are available at https://github\.com/kwinderic/BrainEM

## SetCon: Towards Open\-Ended Referring Segmentation via Set\-Level Concept Prediction

**Authors:** Zhixiong Zhang; Yizhuo Li; Shuangrui Ding; Yuhang Zang; Shengyuan Ding; Long Xing; Yibin Wang; Qiaosheng Zhang; Jiaqi Wang

**ID:** 150414\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150414

[Paper](<https://openreview.net/forum?id=iDe99buVDR>) | [PDF](<https://openreview.net/pdf?id=iDe99buVDR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150414>)

Referring segmentation grounds natural\-language queries to pixel\-level masks, but extending it to complex scenarios with multiple instances, cross\-category groups, or open\-ended target sets remains challenging\. Previous Large Vision Language Model \(LVLM\)\-based methods represent referred targets with one or more special tokens sequentially, treating multiple targets as separate outputs rather than a coherent set and offering little incentive to capture set\-level properties such as completeness and mutual exclusivity\. We reformulate open\-ended referring segmentation as explicit set\-level concept prediction and propose Set\-Concept Segmentation \(SetCon\), which uses LVLM\-generated natural\-language concepts, instead of segmentation\-specific tokens, as semantic conditions for joint mask\-set decoding\. A hierarchical semantic decomposition first predicts a shared set\-level concept defining the target scope and then refines it into fine\-grained concept groups aligned with target subsets\. To support this, a two\-stage annotation pipeline augments existing reasoning segmentation datasets with hierarchical semantic supervision \(236k samples, 784k concept phrases\)\. SetCon achieves state\-of\-the\-art results on image benchmarks \(\+3\.3 gIoU on gRefCOCO, \+12\.1 gIoU on MUSE\), with margins that grow as the number of referred targets increases\. The concept interface also transfers to video under a detect\-and\-track setting, yielding new state\-of\-the\-art results on seven referring video benchmarks, including \+10\.9 J&amp;F on MeViS and \+12\.4 J&amp;F on Ref\-SeCVOS\. The code, model checkpoints, and dataset annotations will be released\.

## Efficient SAM 3 Adaptation for Multi\-Class Semantic Segmentation via Dense Competitive Representations

**Authors:** WENBIN LIAO; Hao Zhu; Yike Ma; Hao Jiang; Feng Dai

**ID:** 149034 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tLUmLVigLs>) | [PDF](<https://openreview.net/pdf?id=tLUmLVigLs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149034>)

_Abstract unavailable from the accessible public sources._

## Universal Cross\-Prompt Adversarial Attacks on Promptable Concept Segmentation

**Authors:** Ziqi Zhou; Haowen Jiang; Yifan Hu; Xianlong Wang; Yufei Song; Shengshan Hu; Dezhong Yao; Leo Yu Zhang

**ID:** 154705 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Be1TPDdpUo>) | [PDF](<https://openreview.net/pdf?id=Be1TPDdpUo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154705>)

The Segment Anything Model \(SAM\) achieves remarkable performance in visual segmentation\. The latest SAM3 extends promptable segmentation to concept\-level prediction, broadening the scope of segmentation foundation models\. While recent works reveal that SAM and SAM2 are vulnerable to adversarial examples, the robustness of SAM3 under the concept segmentation paradigm remains unexplored\. In addition, existing adversarial attacks on SAM\-series models exhibit limited cross\-prompt transferability\. To this end, we propose AdvPCS, a universal cross\-prompt adversarial attack for Promptable Concept Segmentation \(PCS\), including a min\-max prompt optimization strategy, a global–local perception deception attack, and a temporal transition deviation attack\. Specifically, we first identify the hardest\-to\-attack prompts via min\-max bilevel optimization\. In the inner maximization, we enhance diversity over candidate point, box, and text prompts\. In the outer minimization, we select prompts with the highest responses based on the confidence scores output by the detector\. Given the selected prompts, we apply the perception deception attack to minimize both global and local existence probabilities under joint prompting, and employ the temporal memory misalignment attack to maximize inter\-frame semantic inconsistency and corrupt memory pointers\. Extensive experiments on four benchmark datasets show that a single universal adversarial perturbation \(UAP\) generated by our method generalizes across frames from different videos and achieves strong attack performance under point, box, and text prompts\. In particular, it reduces the average mIoU of various PCS models on the SA\-CO dataset to below 5%, demonstrating strong attack ability\.

## GMOS: Grounding Moving Object Segmentation in 3D Space and Time

**Authors:** Junyu Xie; Tengda Han; Weidi Xie; Andrew Zisserman

**ID:** 155817 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2frdhyNQkV>) | [PDF](<https://openreview.net/pdf?id=2frdhyNQkV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155817>)

Moving Object Segmentation \(MOS\) aims to discover, segment, and track objects that move independently of the camera\. Current MOS methods, however, exhibit two fundamental limitations: they rely on pre\-computed 2D auxiliary modalities such as optical flow or point trajectories that lack 3D geometric information, and they treat motion as a sequence\-level attribute, overlooking the instantaneous motion state of each object\. We address both by grounding MOS in 3D space and time, and propose GMOS, a framework that operates directly on RGB video to produce 3D\-aware, temporally fine\-grained segmentation of multiple moving objects, alongside a foreground\-\-background variant GMOS\-S for faster deployment\. To support training and evaluation in this regime, we curate GMOS\-2K, a dataset of $2\{,\}210$ real\-world videos with per\-object temporal motion annotations drawn from five established Video Object Segmentation \(VOS\) benchmarks, and formalise MOS\-I \("I" for \*instantaneous\*\), a temporally fine\-grained evaluation protocol with three complementary metrics\. GMOS achieves state\-of\-the\-art results across MOS, MOS\-I, and Unsupervised VOS benchmarks, while running significantly faster than prior multi\-object MOS methods and supporting online inference for streaming deployment\.

## Prompting Diffusion Models for Zero\-Shot Instance Segmentation

**Authors:** İrem Z Alagöz; Nils Morbitzer; Andrea Ramazzina; Nassir Navab; Federico Tombari; Stefano Gasperini

**ID:** 155729 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3NQtKkQP2m>) | [PDF](<https://openreview.net/pdf?id=3NQtKkQP2m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155729>)

Several disruptive research directions have recently emerged in computer vision, including foundation models achieving previously unseen zero\-shot performance in scene understanding, even interactively, and generative models that synthesize extremely realistic images\. The latter have also been shown to be highly effective in scene understanding tasks thanks to their rich priors\. However, for promptable segmentation, foundation models struggle with accurately segmenting an object's region, leading to false positives and over\-segmentation\. Notably, early attempts that leverage generative priors use prompts only during post\-processing, yielding suboptimal segments because the process is agnostic to the user input\. In this paper, we target these limitations with Prompt2Seg, a spatial conditioning framework for diffusion\-based segmentation\. Prompt2Seg augments a frozen diffusion segmentation model with a conditioning branch\. Our approach takes spatial prompts, represented as 2D Gaussians or confidence maps, as explicit input signals, training the model to respond directly to user intent\. Fine\-tuned on a deliberately constrained set of object categories drawn from Hypersim and Virtual KITTI 2, Prompt2Seg generalizes zero\-shot to a wide range of unseen object types and visual domains\. We evaluate on seven datasets ranging from standard benchmarks to more challenging domains, including paintings, egocentric views, and X\-ray data\. Furthermore, we demonstrate that Prompt2Seg consistently outperforms the underlying diffusion segmentation backbone across all benchmarks\. Our results suggest that the rich priors encoded in generative pretraining, combined with principled spatial conditioning, offer a compelling path toward broadly generalizing interactive segmentation without large\-scale mask supervision\.

## Focusable Monocular Depth Estimation

**Authors:** Yuxin Du; Tao Lin; Zile Zhong; Runting Li; Xiyao Chen; Jiting Liu; Chenglin Liu; Yingcong Chen; Yuqian Fu; Bo Zhao

**ID:** 153419\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153419

[Paper](<https://openreview.net/forum?id=LTHElHJrAh>) | [PDF](<https://openreview.net/pdf?id=LTHElHJrAh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153419>)

Monocular depth foundation models generalize well across scenes, yet they are typically optimized with uniform pixel\-wise objectives that do not distinguish user\-specified or task\-relevant target regions from the surrounding context\. We therefore introduce Focusable Monocular Depth Estimation \(FDE\), a region\-aware depth estimation task in which, given a specified target region, the model is required to prioritize foreground depth accuracy, preserve sharp boundary transitions, and maintain coherent global scene geometry\. To prioritize task\-critical region modeling, we propose FocusDepth, a prompt\-conditioned monocular relative depth estimation framework that guides depth modeling to focus on target regions via box/text prompts\. The core Multi\-Scale Spatial\-Aligned Fusion \(MSSA\) in FocusDepth spatially aligns multi\-scale features from Segment Anything Model 3 to the Depth Anything family and injects them through scale\-specific, gated conditional fusion\. This enables dense prompt cue injection without disrupting geometric representations, thereby endowing the depth estimation model with focused perception capability\. To study FDE, we establish FDE\-Bench, a target\-centric monocular relative depth benchmark built from image\-target\-depth triplets across five datasets, containing 252\.9K/72\.5K train/val triplets and 972 categories spanning real\-world and embodied simulation environments\. On FDE\-Bench, FocusDepth consistently improves over globally fine\-tuned DA2/DA3 baselines under both box and text prompts, with the largest gains appearing in target boundary and foreground regions while preserving global scene geometry\. Ablations show that MSSA's spatial alignment is the key design factor, as disrupting prompt\-geometry correspondence increases AbsRel by up to 13\.8%\.

## Matching\-Based Few\-Shot Semantic Segmentation Models Are Interpretable by Design

**Authors:** Pasquale De Marinis; Uzay Kaymak; Rogier Brussee; Gennaro Vessio; Giovanna Castellano

**ID:** 150223 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jqykrG5xAb>) | [PDF](<https://openreview.net/pdf?id=jqykrG5xAb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150223>)

Few\-Shot Semantic Segmentation \(FSS\) models achieve strong performance in segmenting novel classes with minimal labeled examples, yet their decision\-making processes remain largely opaque\. While explainable AI has advanced significantly in standard computer vision tasks, interpretability in FSS remains underexplored despite its critical importance for understanding model behavior and guiding support set selection in data\-scarce scenarios\. We argue that matching\-based FSS models are interpretable by design: their core similarity computation between support and query features constitutes an inherent attribution mechanism\. Our approach, Affinity Explainer \(AffEx\), makes this intrinsic interpretability explicit by extracting attribution maps directly from matching scores at multiple feature levels, without requiring gradients or external perturbations\. We extend standard interpretability evaluation metrics to the FSS domain and propose additional metrics to better capture the practical utility of explanations in few\-shot scenarios\. Comprehensive experiments on FSS benchmark datasets demonstrate that AffEx significantly outperforms adapted standard attribution methods, confirming that the matching mechanism itself is the key driver of interpretability\. Qualitative analysis reveals structured, coherent attention patterns that align with model architectures and enable effective model diagnosis, laying the groundwork for interpretable FSS research\.

## Adaptive Residual Quantization for Memory\-Efficient Temporal Action Segmentation

**Authors:** Gerard L Donahue; Guven Gergerli; Ayush Gupta; Reza Ghoddoosian; Enna Sachdeva; Faizan Siddiqui

**ID:** 150739 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fkjPOMuoxA>) | [PDF](<https://openreview.net/pdf?id=fkjPOMuoxA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150739>)

Temporal action segmentation \(TAS\) is commonly trained on large banks of pre\-extracted frame features rather than raw RGB video, but storing and replaying those features becomes a practical bottleneck for long\-form video, especially in incremental TAS where past\-task data must remain available to mitigate catastrophic forgetting\. Recent TAS replay and condensation methods reduce this burden, but they rely on dense frame\-wise annotations and allocate storage through fixed segment\-level structures, limiting their flexibility for long procedural videos whose frame complexity varies substantially over time\.  We introduce Adaptive Residual\-Quantized Variational AutoEncoder \(ARQ\-VAE\), a compact and label\-free memory representation for TAS features that learns a discrete residual quantization of frame\-level video features and then adaptively truncates the residual chain on a per\-frame basis, retaining only the residual prefix that best reconstructs each frame feature\. This yields a practical compact feature memory that does not depend on frame\-wise labels and can therefore support multiple TAS settings with the same stored representation, while a lightweight fine\-tuning stage further improves reconstruction quality for the truncated codes that are actually retained\. Across standard TAS benchmarks, ARQ\-VAE achieves a substantially improved storage\-\-performance trade\-off over prior replay and condensation baselines\. On Breakfast, our final representation reduces training\-set storage from 28 GB for the original I3D feature bank to 10 MB while retaining strong downstream segmentation performance; with ASFormer, it achieves 71\.5 Edit and 51\.2 F1@50 in the supervised setting\. We further show that the same label\-free memory remains effective for incremental and unsupervised TAS, and transfers to an alternative pretrained feature space based on DINOv3\. We position ARQ\-VAE as a practical memory representation for TAS, and a promising direction for broader dataset condensation applications\.

## RiSE: Residual Subspace Expert for Generalizable Text\-Centric Image Forgery Localization

**Authors:** Kahim Wong; Kemou Li; Yiming Chen; Haiwei Wu; Jiantao Zhou

**ID:** 153544 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KaKH1k0VkJ>) | [PDF](<https://openreview.net/pdf?id=KaKH1k0VkJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153544>)

_Abstract unavailable from the accessible public sources._

## Early Semantic Grounding in Image Editing Models for Zero\-Shot Referring Image Segmentation

**Authors:** Jingxuan He; Xiyu Wang; Yunke Wang; Mengyu Zheng; Chang Xu

**ID:** 152496 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ShIHKjhGRF>) | [PDF](<https://openreview.net/pdf?id=ShIHKjhGRF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152496>)

_Abstract unavailable from the accessible public sources._

## RAWild: Toward Sensor\-Agnostic RAW Object Detection via Physics\-Guided Curve and Grid Modeling

**Authors:** Shuhong Liu; Gengjia Chang; Jun Liu; Xuangeng Chu; Yinqiang Zheng; Tatsuya Harada; Ziteng Cui

**ID:** 153638 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JsJIzf63sJ>) | [PDF](<https://openreview.net/pdf?id=JsJIzf63sJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153638>)

_Abstract unavailable from the accessible public sources._

## Adaptive Residual Quantization for Memory\-Efficient Temporal Action Segmentation

**Authors:** Gerard L Donahue; Guven Gergerli; Ayush Gupta; Reza Ghoddoosian; Enna Sachdeva; Faizan Siddiqui

**ID:** 150739\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150739

[Paper](<https://openreview.net/forum?id=fkjPOMuoxA>) | [PDF](<https://openreview.net/pdf?id=fkjPOMuoxA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150739>)

Temporal action segmentation \(TAS\) is commonly trained on large banks of pre\-extracted frame features rather than raw RGB video, but storing and replaying those features becomes a practical bottleneck for long\-form video, especially in incremental TAS where past\-task data must remain available to mitigate catastrophic forgetting\. Recent TAS replay and condensation methods reduce this burden, but they rely on dense frame\-wise annotations and allocate storage through fixed segment\-level structures, limiting their flexibility for long procedural videos whose frame complexity varies substantially over time\.  We introduce Adaptive Residual\-Quantized Variational AutoEncoder \(ARQ\-VAE\), a compact and label\-free memory representation for TAS features that learns a discrete residual quantization of frame\-level video features and then adaptively truncates the residual chain on a per\-frame basis, retaining only the residual prefix that best reconstructs each frame feature\. This yields a practical compact feature memory that does not depend on frame\-wise labels and can therefore support multiple TAS settings with the same stored representation, while a lightweight fine\-tuning stage further improves reconstruction quality for the truncated codes that are actually retained\. Across standard TAS benchmarks, ARQ\-VAE achieves a substantially improved storage\-\-performance trade\-off over prior replay and condensation baselines\. On Breakfast, our final representation reduces training\-set storage from 28 GB for the original I3D feature bank to 10 MB while retaining strong downstream segmentation performance; with ASFormer, it achieves 71\.5 Edit and 51\.2 F1@50 in the supervised setting\. We further show that the same label\-free memory remains effective for incremental and unsupervised TAS, and transfers to an alternative pretrained feature space based on DINOv3\. We position ARQ\-VAE as a practical memory representation for TAS, and a promising direction for broader dataset condensation applications\.

## When Trackers Fail: VLM\-Guided Verification and Recovery for Robust Video Object Segmentation

**Authors:** Valay Mahesh Bundele; Susmit Agrawal; Mehran Hosseinzadeh; The Nam Nguyen; Hendrik PA Lensch

**ID:** 155733 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3LeU4hTu4y>) | [PDF](<https://openreview.net/pdf?id=3LeU4hTu4y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155733>)

Recent segmentation\-based trackers built on foundation models such as Segment Anything Model \(SAM\) achieve strong performance through memory\-based mask propagation\. However, despite their strong generalization ability, these methods remain brittle under occlusion, reappearance, and distractor scenarios, where errors accumulate and lead to identity drift\. Existing approaches attempt to improve robustness through better memory design and temporal modeling, yet they implicitly assume that propagated predictions remain reliable over time, lacking a mechanism to identify and correct failures\. To address this limitation, we propose a failure\-aware tracking framework that augments segmentation\-based propagation with explicit reasoning and selective recovery\. Our key idea is to decouple tracking into two complementary processes: verifying prediction reliability and recovering the target when failures occur\. Specifically, we introduce a dual\-agent architecture consisting of a vision\-language verification agent and a correction agent\. The verification agent reasons over spatio\-temporal context to assess whether current predictions remain consistent with the target object, enabling the detection of identity switches, missed recoveries, and distractor\-induced failures\. When unreliable predictions are identified, the correction agent is selectively activated to recover the target using temporal cues\. To further improve robustness under ambiguous scenarios, we introduce targeted training perturbations that simulate identity switches and and distractor\-induced drift during training\. By explicitly modeling failure detection and recovery within tracking loop, our framework transforms tracking from a purely propagation\-based process into a self\-correcting system\. Experimental results on LVOS\-v2 and SecVOS show that the proposed framework improves SAM3 by 1\.2 J&amp;F and 2\.7 J&amp;F respectively, demonstrating the value of explicit reasoning and selective recovery in segmentation\-based tracking\.

## Predicting Nothing Beats SAM 3: Revisiting Evaluation in Video Object Segmentation

**Authors:** Jihwan Hong; Woohyeon Park; Jaeik Kim; Jaeyoung Do

**ID:** 139254 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=briRpXpg3v>) | [PDF](<https://openreview.net/pdf?id=briRpXpg3v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139254>)

Video Object Segmentation \(VOS\) in complex and long videos is increasingly important for real\-world applications, where target objects often appear only intermittently within long temporal horizons\. However, existing benchmarks largely focus on temporally salient objects that remain visible for most of the video\. To address this gap, we introduce FaVOS \(A Benchmark for Video Object Segmentation with Fractional Temporal Visibility\), a benchmark designed to evaluate VOS methods under low temporal visibility\. We show that, in this regime, the standard $\\mathcal\{J\}$\\&amp;$\\mathcal\{F\}$ metric can collapse VOS evaluation into absence classification, because empty predictions receive high rewards on target\-absent frames\. Consequently, even a trivial empty\-mask predictor can outperform strong models such as SAM 3, revealing a fundamental mismatch between current metrics and practical VOS performance\. To mitigate this issue, we propose Volumetric $\\mathcal\{J\}$\\&amp;$\\mathcal\{F\}$, which evaluates mask sequences as spatio\-temporal volumes and reduces the dominance of target\-absence rewards while preserving sensitivity to segmentation quality and temporal structure\.

## Localize Any Object in X\-Ray Security Scans without Human Annotation

**Authors:** Yaqi Cai; Mingxuan Liu; Lorenzo Vaquero; Ning Wang; Nan Pu; Feng Xue; Elisa Ricci; Nicu Sebe

**ID:** 152225 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UcwEHDEJdH>) | [PDF](<https://openreview.net/pdf?id=UcwEHDEJdH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152225>)

_Abstract unavailable from the accessible public sources._

## VideoMaMa\+\+: Temporally Consistent Video Matting via Preserve\-and\-Refine Tokens

**Authors:** Sangbeom Lim; Seoung Wug Oh; Heeji Yoon; Seungryong Kim; Joon\-Young Lee

**ID:** 148674 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vxJjCRu1Km>) | [PDF](<https://openreview.net/pdf?id=vxJjCRu1Km>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148674>)

Diffusion\-based video matting has recently emerged as a leading approach, leveraging video diffusion priors from internet\-scale pretraining to achieve strong zero\-shot generalization from limited synthetic data\. However, the heavy compute of these diffusion backbones limits inference to a short chunk of just 6\-\-24 frames, so even ordinary videos span multiple chunks\. Because each chunk is matted independently from coarse mask guidance, existing methods fail to maintain consistency across chunk boundaries, producing flickering edges and discontinuous transparency\.     We address this with a mask\-guided diffusion\-matting framework built on two ideas\. The RGB and mask conditioning are represented as separate token streams that interact through full spatio\-temporal self\-attention, letting the model adaptively combine fine RGB texture with coarse mask layout rather than committing to a fixed channel\-wise fusion\. On top of this, we propose a novel pair of learnable embeddings, the preserve token and the refine token, that act as a per\-frame conditioning interface and enable a sliding\-window inference scheme in which already\-generated mattes are propagated across chunk boundaries for local temporal consistency, complemented by a globally shared reference anchor at every chunk to prevent error accumulation in long sequences without any additional training\.     Across standard video matting benchmarks and in\-the\-wild long footage, our framework outperforms prior diffusion\-based methods in both fine\-detail accuracy and temporal consistency, and uniquely maintains consistency across chunk boundaries on long videos\. Our code and weights will be publicly released\.

## From Pixels to Concepts: Do Segmentation Models Understand What They Segment?

**Authors:** Shuang Liang; Zeqing Wang; Yuxian LI; Xihui Liu; Han Wang

**ID:** 139321 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XP1FvR8d8X>) | [PDF](<https://openreview.net/pdf?id=XP1FvR8d8X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139321>)

Segmentation is a fundamental vision task underlying numerous downstream applications\. Recent promptable segmentation models, such as Segment Anything Model 3 \(SAM3\), extend segmentation from category\-agnostic mask prediction to concept\-guided localization conditioned on high\-level textual prompts\. However, existing benchmarks primarily evaluate mask accuracy or object presence, leaving unclear whether these models faithfully ground the queried concept or instead rely on visually salient but semantically misleading cues\. We introduce CAFE: \\textbf\{C\}ounterfactual \\textbf\{A\}ttribute \\textbf\{F\}actuality \\textbf\{E\}valuation, a novel benchmark for evaluating concept\-faithful segmentation in promptable segmentation models\. Our \\textbf\{CAFE\} is built on attribute\-level counterfactual manipulation: the target region and ground\-truth mask are preserved, while attributes such as surface appearance, context, or material composition are modified to introduce misleading semantic cues\. The benchmark contains 2,146 paired test samples, each consisting of a target image, a ground\-truth mask, a positive prompt, and a misleading negative prompt\. These samples cover three counterfactual categories: Superficial Mimicry \(\\textbf\{SM\}\), Context Conflict \(\\textbf\{CC\}\), and Ontological Conflict \(\\textbf\{OC\}\)\. We evaluate various model types and sizes on our CAFE\. Experiments reveal a systematic gap between localization quality and concept discrimination: models often generate accurate masks even for misleading prompts, suggesting that strong mask prediction does not necessarily imply faithful semantic grounding\. Our CAFE provides a controlled benchmark for diagnosing whether promptable segmentation models perform concept\-faithful grounding rather than shortcut\-driven mask retrieval\.

## Focusable Monocular Depth Estimation

**Authors:** Yuxin Du; Tao Lin; Zile Zhong; Runting Li; Xiyao Chen; Jiting Liu; Chenglin Liu; Yingcong Chen; Yuqian Fu; Bo Zhao

**ID:** 153419\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153419

[Paper](<https://openreview.net/forum?id=LTHElHJrAh>) | [PDF](<https://openreview.net/pdf?id=LTHElHJrAh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153419>)

Monocular depth foundation models generalize well across scenes, yet they are typically optimized with uniform pixel\-wise objectives that do not distinguish user\-specified or task\-relevant target regions from the surrounding context\. We therefore introduce Focusable Monocular Depth Estimation \(FDE\), a region\-aware depth estimation task in which, given a specified target region, the model is required to prioritize foreground depth accuracy, preserve sharp boundary transitions, and maintain coherent global scene geometry\. To prioritize task\-critical region modeling, we propose FocusDepth, a prompt\-conditioned monocular relative depth estimation framework that guides depth modeling to focus on target regions via box/text prompts\. The core Multi\-Scale Spatial\-Aligned Fusion \(MSSA\) in FocusDepth spatially aligns multi\-scale features from Segment Anything Model 3 to the Depth Anything family and injects them through scale\-specific, gated conditional fusion\. This enables dense prompt cue injection without disrupting geometric representations, thereby endowing the depth estimation model with focused perception capability\. To study FDE, we establish FDE\-Bench, a target\-centric monocular relative depth benchmark built from image\-target\-depth triplets across five datasets, containing 252\.9K/72\.5K train/val triplets and 972 categories spanning real\-world and embodied simulation environments\. On FDE\-Bench, FocusDepth consistently improves over globally fine\-tuned DA2/DA3 baselines under both box and text prompts, with the largest gains appearing in target boundary and foreground regions while preserving global scene geometry\. Ablations show that MSSA's spatial alignment is the key design factor, as disrupting prompt\-geometry correspondence increases AbsRel by up to 13\.8%\.

## Matching\-Based Few\-Shot Semantic Segmentation Models Are Interpretable by Design

**Authors:** Pasquale De Marinis; Uzay Kaymak; Rogier Brussee; Gennaro Vessio; Giovanna Castellano

**ID:** 150223\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150223

[Paper](<https://openreview.net/forum?id=jqykrG5xAb>) | [PDF](<https://openreview.net/pdf?id=jqykrG5xAb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150223>)

Few\-Shot Semantic Segmentation \(FSS\) models achieve strong performance in segmenting novel classes with minimal labeled examples, yet their decision\-making processes remain largely opaque\. While explainable AI has advanced significantly in standard computer vision tasks, interpretability in FSS remains underexplored despite its critical importance for understanding model behavior and guiding support set selection in data\-scarce scenarios\. We argue that matching\-based FSS models are interpretable by design: their core similarity computation between support and query features constitutes an inherent attribution mechanism\. Our approach, Affinity Explainer \(AffEx\), makes this intrinsic interpretability explicit by extracting attribution maps directly from matching scores at multiple feature levels, without requiring gradients or external perturbations\. We extend standard interpretability evaluation metrics to the FSS domain and propose additional metrics to better capture the practical utility of explanations in few\-shot scenarios\. Comprehensive experiments on FSS benchmark datasets demonstrate that AffEx significantly outperforms adapted standard attribution methods, confirming that the matching mechanism itself is the key driver of interpretability\. Qualitative analysis reveals structured, coherent attention patterns that align with model architectures and enable effective model diagnosis, laying the groundwork for interpretable FSS research\.

## BrainEM: A Large\-Scale and Diverse Benchmark for EM Neuron Segmentation in Connectomics

**Authors:** Zhenghua Li; Lanyue Zhang; Zekang Yang; Kai Li; Yuwei Peng; Song\-Hai Shi; Xiaolin Hu

**ID:** 139121\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139121

[Paper](<https://openreview.net/forum?id=juzLIwAl0Y>) | [PDF](<https://openreview.net/pdf?id=juzLIwAl0Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139121>)

Connectomics requires dense segmentation of large\-scale electron microscopy \(EM\) volumes using models trained on small labeled blocks\. In practice, a connectomics lab facing a new raw volume has two options: annotate a small block and train on it, or skip annotation and train on the union of available public labeled datasets\. We introduce BrainEM, a benchmark that formalizes these options as two standard tracks: the Same\-Source Track \(Annotate\-and\-Train\) and the Cross\-Source Track \(Reuse\-and\-Train\)\. BrainEM brings together 16 EM datasets, including one in\-house mouse dataset that we contribute, spanning multiple species, imaging modalities, and resolutions\. We further add large\-scale test volumes that bring the evaluation closer to realistic practice, and four diverse test targets in the Cross\-Source Track\. The data, post\-processing, and evaluation metrics are fixed across all methods, and the framework is fully model\-data decoupled so that new methods can be added with minimal effort\. We conduct a systematic evaluation of six representative baselines covering the main technical directions in EM neuron segmentation, making BrainEM the first systematic evaluation at large scale and across diverse cross\-source targets\. The results differ from prior small\-scale evaluations: rankings on the Same\-Source Track no longer match those reported on small CREMI splits, and methods diverge sharply on the Cross\-Source Track\. Both tracks still leave clear room for improvement\. We release BrainEM as a public platform to support unified comparison and faster method development in connectomics\. All datasets and code are available at https://github\.com/kwinderic/BrainEM

## SetCon: Towards Open\-Ended Referring Segmentation via Set\-Level Concept Prediction

**Authors:** Zhixiong Zhang; Yizhuo Li; Shuangrui Ding; Yuhang Zang; Shengyuan Ding; Long Xing; Yibin Wang; Qiaosheng Zhang; Jiaqi Wang

**ID:** 150414\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150414

[Paper](<https://openreview.net/forum?id=iDe99buVDR>) | [PDF](<https://openreview.net/pdf?id=iDe99buVDR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150414>)

Referring segmentation grounds natural\-language queries to pixel\-level masks, but extending it to complex scenarios with multiple instances, cross\-category groups, or open\-ended target sets remains challenging\. Previous Large Vision Language Model \(LVLM\)\-based methods represent referred targets with one or more special tokens sequentially, treating multiple targets as separate outputs rather than a coherent set and offering little incentive to capture set\-level properties such as completeness and mutual exclusivity\. We reformulate open\-ended referring segmentation as explicit set\-level concept prediction and propose Set\-Concept Segmentation \(SetCon\), which uses LVLM\-generated natural\-language concepts, instead of segmentation\-specific tokens, as semantic conditions for joint mask\-set decoding\. A hierarchical semantic decomposition first predicts a shared set\-level concept defining the target scope and then refines it into fine\-grained concept groups aligned with target subsets\. To support this, a two\-stage annotation pipeline augments existing reasoning segmentation datasets with hierarchical semantic supervision \(236k samples, 784k concept phrases\)\. SetCon achieves state\-of\-the\-art results on image benchmarks \(\+3\.3 gIoU on gRefCOCO, \+12\.1 gIoU on MUSE\), with margins that grow as the number of referred targets increases\. The concept interface also transfers to video under a detect\-and\-track setting, yielding new state\-of\-the\-art results on seven referring video benchmarks, including \+10\.9 J&amp;F on MeViS and \+12\.4 J&amp;F on Ref\-SeCVOS\. The code, model checkpoints, and dataset annotations will be released\.

## Cyclic Discrete Diffusion: A Novel Multi\-Class Segmentation Refinement Technique

**Authors:** LIBO CHEN; Souvik Ghosh; Vinay Namboodiri

**ID:** 155503 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=55XffjPoPJ>) | [PDF](<https://openreview.net/pdf?id=55XffjPoPJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155503>)

We cast image segmentation refinement as a \\textit\{discrete\} diffusion process\. To solve this task we introduce Cyclic Discrete Diffusion \(CDD\), a novel forward–reverse formulation with a cyclic label topology that maps a discrete label set to the uniform distribution and back\. Instead of injecting Gaussian noise as is done for continuous diffusion, CDD evolves segmentation masks through label jumps: at each step, every pixel either remains in its current class or jumps to the next label with a fixed rate\. This jump\-or\-stay mechanism defines a finite\-state Markov process with bounded forward and reverse steps, featuring analytically consistent and tractable reverse dynamics\.      CDD operates natively in a multi\-class label space, enabling joint      refinement of all classes in a single pass without requiring class\-wise decomposition, as commonly needed in prior binary refinement approaches\. The proposed formulation admits a finite and controllable number of refinement steps, for which we provide a theoretical characterization based on spectral gap analysis\. We evaluate CDD across diverse segmentation tasks, including multi\-class semantic,      instance\-level, and binary segmentation refinement\. Our method consistently improves both region accuracy and boundary quality across multiple backbones and datasets\.

## RiSE: Residual Subspace Expert for Generalizable Text\-Centric Image Forgery Localization

**Authors:** Kahim Wong; Kemou Li; Yiming Chen; Haiwei Wu; Jiantao Zhou

**ID:** 153544\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153544

[Paper](<https://openreview.net/forum?id=KaKH1k0VkJ>) | [PDF](<https://openreview.net/pdf?id=KaKH1k0VkJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153544>)

_Abstract unavailable from the accessible public sources._

## TopoRefine: Plug\-and\-Play Topology\-Aware Contour Refinement for Building Segmentation

**Authors:** Yunhui Zhu; Buliao Huang

**ID:** 148776\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148776

[Paper](<https://openreview.net/forum?id=v8bM1HAB90>) | [PDF](<https://openreview.net/pdf?id=v8bM1HAB90>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148776>)

Building segmentation has recently benefited from foundation segmentation models such as SAM, which offer strong generalization and scalable deployment through simple prompts\. However, SAM\-style models still produce pixel\-wise masks, whose fragmented regions and irregular boundaries often fail to preserve the geometric regularity of buildings, making direct contour vectorization unreliable\. Existing attempts to improve building polygonization typically modify the segmentation decoder or introduce additional polygon prediction branches, increasing adaptation costs and weakening the portability of pretrained foundation models\. In this paper, we ask whether accurate building polygonization can be achieved directly from frozen segmentation outputs, without modifying or retraining the underlying model\. To this end, we propose TopoRefine, a plug\-and\-play topology\-aware contour refinement framework that converts predicted contours into geometry\-consistent building polygons\. Unlike conventional contour refinement methods, which follow a fixed\-topology paradigm and can only adjust a predefined set of contour points, TopoRefine performs topology\-adaptive polygon evolution by jointly modeling vertex insertion, vertex deletion, and coordinate refinement\. This allows the refined polygon to correct structural errors inherited from frozen segmentation outputs and progressively align with the underlying building geometry\. Extensive experiments on three building segmentation benchmarks demonstrate that TopoRefine generalizes across different segmentation pipelines and consistently improves both segmentation accuracy and geometric consistency, achieving notable gains such as \+6\.17\\% AP and \+3\.53\\% PolySim on SAM 3\.

## Cross\-Foundation Complementary Learning Systems for Continual Test\-Time Adaptation in Open\-Vocabulary Semantic Segmentation

**Authors:** Guan\-Yu Chen; Wei\-Hua Li; Huei\-Fang Yang; Chu\-Song Chen

**ID:** 148739\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148739

[Paper](<https://openreview.net/forum?id=vP6mCzbls0>) | [PDF](<https://openreview.net/pdf?id=vP6mCzbls0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148739>)

Open\-vocabulary semantic segmentation \(OVSS\) models enable dense prediction for classes specified at test time, but continual test\-time adaptation \(CTTA\) over long, non\-stationary streams can corrupt their language\-aligned semantic interface, which we diagnose through synonym\-prompt text alignment\. We propose Cross\-Foundation Complementary Learning Systems \(XF\-CLS\), a source\-free OVSS\-CTTA framework that makes lightweight online adaptation stable over long horizons\. Inspired by Complementary Learning Systems, which couple rapid plastic learning with slow consolidation, XF\-CLS decouples plasticity from stabilization: a single fast online adaptation path updates only a small set of visual normalization parameters, a horizon\-aware, source\-anchored slow parameter memory consolidates stable changes and recovers from drift, and a frozen cross\-foundation structural observer supplies a non\-drifting structural prior for reliability\-aware recovery and dense output refinement\. Rather than training an additional teacher or using cross\-foundation pseudo\-label supervision, the frozen path preserves the open\-vocabulary interface while correcting degraded visual structure\. On long\-horizon Cityscapes\-to\-ACDC and OnDA streams, XF\-CLS achieves 32\.92 and 30\.75 mIoU, improving the NACLIP no\-adapt baseline by \+9\.00 and \+4\.13 mIoU, respectively, and outperforming continual OVSS\-TTA baselines\. Decomposition studies and text\-alignment diagnostics show that source\-anchored recovery prevents long\-horizon collapse, while frozen cross\-foundation refinement adds consistent gains without updating extra parameters\. XF\-CLS provides a stable, parameter\-efficient route to source\-free continual open\-vocabulary dense prediction, with inference overhead dominated by one additional frozen\-backbone forward pass\.

## Image Generation for Automotive Lidar Open\-vocabulary Semantic Segmentation

**Authors:** Nermin Samet; Gilles Puy; Renaud Marlet

**ID:** 151641\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151641

[Paper](<https://openreview.net/forum?id=Z5dOCGOl4Y>) | [PDF](<https://openreview.net/pdf?id=Z5dOCGOl4Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151641>)

This paper presents a new method for the zero\-shot open\-vocabulary semantic segmentation \(OVSS\) of 3D automotive lidar data\. To circumvent the recognized image\-text modality gap that is intrinsic to approaches based on Vision Language Models \(VLMs\) such as CLIP, our method relies instead on image generation from text, to create prototype images\. Given a 3D network distilled from a 2D Vision Foundation Model \(VFM\), we then label a point cloud by matching 3D point features with 2D image features of these prototypes\. Our method is state\-of\-the\-art for OVSS on nuScenes and SemanticKITTI\.

## WaveMamba: Wave\-Inspired Cross\-Modal Fusion for Robust event\-image Semantic Segmentation

**Authors:** Adeel F Mirza; Zaiyue Yang; Muntazir Hussain

**ID:** 151756\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151756

[Paper](<https://openreview.net/forum?id=YIa3B1RBBV>) | [PDF](<https://openreview.net/pdf?id=YIa3B1RBBV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151756>)

Event\-image semantic segmentation is promising for autonomous driving and robotics because event cameras complement frame images under rapid motion, low illumination, and high dynamic range\. However, effective multimodal segmentation remains difficult due to asynchronous sensing, sparse\-dense modality mismatch, and the cost of heavy cross\-modal interaction modules\. We propose WaveMamba, a dual\-branch event\-image semantic segmentation framework that combines hierarchical GroupMamba encoders with a Mamba\-Wave Cross\-Modal Fusion \(MWCMF\) module\. Instead of relying on explicit registration or attention\-heavy fusion, MWCMF performs implicit cross\-modal propagation through channel\-wise and spatial\-wise wave\-guided gating in the spectral domain, followed by Mamba\-based refinement\. Experiments on DDD17 and DSEC show that WaveMamba achieves state\-of\-the\-art 78\.75 and 76\.00 mIoU, respectively\. Under rain\- and fog\-corrupted evaluation on DSEC, WaveMamba further attains 74\.0 mIoU, indicating improved robustness under degraded visual conditions\.

## S$^2$\-RL: Sample\-Set Dual Reinforcement Learning for Generative Semantic Segmentation Dataset Distillation

**Authors:** Haoyu Wang; Fei Zhou; Qingqing Qiu; Lei Zhang; Wei Wei; Chen Ding

**ID:** 155529 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4uK1DB9ydR>) | [PDF](<https://openreview.net/pdf?id=4uK1DB9ydR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155529>)

While dataset distillation has witnessed significant advances in image classification, its extension to dense prediction tasks such as semantic segmentation is plagued by two core bottlenecks: bi\-level optimization\-based approaches suffer from prohibitive computational costs stemming from pixel\-wise gradient unrolling, whereas proxy\-based generative methods merely infuse visual textures into fixed semantic masks derived from real data, thus failing to condense rich semantic knowledge into a compact set of informative, novel scene generations\. To address both bottlenecks simultaneously, we propose a novel Sample\-Set Reinforcement Learning \(S$^2$\-RL\) framework for generative semantic segmentation dataset distillation \(SSDD\)\. Specifically, S$^2$\-RL formulates SSDD as a diffusion model based text\-to\-image generation paradigm, enabling flexible generation of images with informative, novel semantic distributions via a concise text prompt\. Furthermore, we fine\-tune a diffusion policy via GRPO, leveraging a sample\-set dual reward paradigm: for individual samples, it enforces semantic alignment with input text prompts and intra\-class feature diversity; for sample sets, it maximizes inter\-sample semantic distribution diversity by solving a contextual multi\-armed bandit problem\. These design choices enable S$^2$\-RL to distill large\-scale semantic segmentation datasets into a compact set of generated samples that encapsulate diverse, informative semantic knowledge without the need of pixel\-wise gradient unrolling\. Extensive experiments on the ADE20K and COCO datasets demonstrate that S$^2$\-RL achieves substantial and consistent improvements over state\-of\-the\-art baselines, establishing a new benchmark for SSDD\.

## RAWild: Toward Sensor\-Agnostic RAW Object Detection via Physics\-Guided Curve and Grid Modeling

**Authors:** Shuhong Liu; Gengjia Chang; Jun Liu; Xuangeng Chu; Yinqiang Zheng; Tatsuya Harada; Ziteng Cui

**ID:** 153638\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153638

[Paper](<https://openreview.net/forum?id=JsJIzf63sJ>) | [PDF](<https://openreview.net/pdf?id=JsJIzf63sJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153638>)

_Abstract unavailable from the accessible public sources._

## VideoMaMa\+\+: Temporally Consistent Video Matting via Preserve\-and\-Refine Tokens

**Authors:** Sangbeom Lim; Seoung Wug Oh; Heeji Yoon; Seungryong Kim; Joon\-Young Lee

**ID:** 148674\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148674

[Paper](<https://openreview.net/forum?id=vxJjCRu1Km>) | [PDF](<https://openreview.net/pdf?id=vxJjCRu1Km>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148674>)

Diffusion\-based video matting has recently emerged as a leading approach, leveraging video diffusion priors from internet\-scale pretraining to achieve strong zero\-shot generalization from limited synthetic data\. However, the heavy compute of these diffusion backbones limits inference to a short chunk of just 6\-\-24 frames, so even ordinary videos span multiple chunks\. Because each chunk is matted independently from coarse mask guidance, existing methods fail to maintain consistency across chunk boundaries, producing flickering edges and discontinuous transparency\.     We address this with a mask\-guided diffusion\-matting framework built on two ideas\. The RGB and mask conditioning are represented as separate token streams that interact through full spatio\-temporal self\-attention, letting the model adaptively combine fine RGB texture with coarse mask layout rather than committing to a fixed channel\-wise fusion\. On top of this, we propose a novel pair of learnable embeddings, the preserve token and the refine token, that act as a per\-frame conditioning interface and enable a sliding\-window inference scheme in which already\-generated mattes are propagated across chunk boundaries for local temporal consistency, complemented by a globally shared reference anchor at every chunk to prevent error accumulation in long sequences without any additional training\.     Across standard video matting benchmarks and in\-the\-wild long footage, our framework outperforms prior diffusion\-based methods in both fine\-detail accuracy and temporal consistency, and uniquely maintains consistency across chunk boundaries on long videos\. Our code and weights will be publicly released\.

## From Pixels to Concepts: Do Segmentation Models Understand What They Segment?

**Authors:** Shuang Liang; Zeqing Wang; Yuxian LI; Xihui Liu; Han Wang

**ID:** 139321\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139321

[Paper](<https://openreview.net/forum?id=XP1FvR8d8X>) | [PDF](<https://openreview.net/pdf?id=XP1FvR8d8X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139321>)

Segmentation is a fundamental vision task underlying numerous downstream applications\. Recent promptable segmentation models, such as Segment Anything Model 3 \(SAM3\), extend segmentation from category\-agnostic mask prediction to concept\-guided localization conditioned on high\-level textual prompts\. However, existing benchmarks primarily evaluate mask accuracy or object presence, leaving unclear whether these models faithfully ground the queried concept or instead rely on visually salient but semantically misleading cues\. We introduce CAFE: \\textbf\{C\}ounterfactual \\textbf\{A\}ttribute \\textbf\{F\}actuality \\textbf\{E\}valuation, a novel benchmark for evaluating concept\-faithful segmentation in promptable segmentation models\. Our \\textbf\{CAFE\} is built on attribute\-level counterfactual manipulation: the target region and ground\-truth mask are preserved, while attributes such as surface appearance, context, or material composition are modified to introduce misleading semantic cues\. The benchmark contains 2,146 paired test samples, each consisting of a target image, a ground\-truth mask, a positive prompt, and a misleading negative prompt\. These samples cover three counterfactual categories: Superficial Mimicry \(\\textbf\{SM\}\), Context Conflict \(\\textbf\{CC\}\), and Ontological Conflict \(\\textbf\{OC\}\)\. We evaluate various model types and sizes on our CAFE\. Experiments reveal a systematic gap between localization quality and concept discrimination: models often generate accurate masks even for misleading prompts, suggesting that strong mask prediction does not necessarily imply faithful semantic grounding\. Our CAFE provides a controlled benchmark for diagnosing whether promptable segmentation models perform concept\-faithful grounding rather than shortcut\-driven mask retrieval\.

## RipBench: A Unified Benchmark for Multi\-Level Rip Current Detection, Classification and Segmentation

**Authors:** Andrei Dumitriu; Aakash Ralhan; Florin Miron; Florin Tatui; Radu Tudor Ionescu; Radu Timofte

**ID:** 139371\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139371

[Paper](<https://openreview.net/forum?id=UL7UbwuqbU>) | [PDF](<https://openreview.net/pdf?id=UL7UbwuqbU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139371>)

Rip currents are a serious and often under\-addressed threat to beach safety, and the leading cause of coastal drownings worldwide\. They are difficult to detect due to their amorphous structure, similarity to the background, and large variability in viewpoints and environments\. Despite their dangers and growing interest in automated detection, existing research remains fragmented across datasets, metrics, models and approaches, leading to an incomplete understanding of model performance\. We introduce RipBench, a unified benchmark that enables controlled evaluation of rip current detection spanning multiple tasks, including classification, axis\-aligned and oriented object detection, and instance, semantic, and panoptic segmentation, on the same data with standardized splits\. This allows direct comparison of model performance on all levels of visual abstraction\. Across $304$ videos \($303\{,\}491$ frames\) collected from diverse coastlines, our results expose a clear performance gap between coarse recognition and precise spatial understanding\. While models achieve near\-saturated classification performance, accurate localization proves to be a substantially more challenging task, with performance varying across tasks\. All tasks are supported with carefully curated annotations and evaluated using both standard and safety\-critical metrics, with a focus on the $F\_2$ score to emphasize recall in this safety\-critical setting\. RipBench, along with multiple baseline models per task, is publicly available at \\url\{https://RipBench\.ai\} to support progress in real\-world, multi\-task vision for beach safety\.

## Pixels to Tokens: Token Space Efficient Active Learning for Low\-Budget Semantic Segmentation

**Authors:** Utku Cicek; Mahip Singh; Ziyao Shang; Kimathi Kaai; C Thomas; Pablo Guerrero; Alexander Wong; Sirisha Rambhatla

**ID:** 148535\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148535

[Paper](<https://openreview.net/forum?id=xBIIoVBT4V>) | [PDF](<https://openreview.net/pdf?id=xBIIoVBT4V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148535>)

Semantic segmentation typically requires dense pixel\-level annotations, creating a prohibitive bottleneck for budget\-constrained applications\. While foundation models and vision transformers \(ViTs\) have redefined visual representations, current active learning \(AL\) strategies for these backbones largely operate at the patch or region level, where annotation requirements remain high\. Extending ViT\-based AL to the pixel\-level, low\-budget regime is uniquely challenging: with as little as one pixel query per image, a method must simultaneously identify the most informative locations and train a reliable decoder head from an extremely sparse signal\. We introduce TEAL \(Token\-space Efficient Active Learning\), the first pixel\-level AL framework built around ViT representations\. TEAL uses a frozen DINOv3 backbone and performs diversity\-based selection directly on its native token lattice, avoiding the artifacts introduced by interpolating token embeddings to dense pixel resolutions\. Our framework applies a two\-level MaxHerding strategy over multi\-layer token descriptors to select representative candidates, followed by margin\-based uncertainty refinement on a finer decoder grid\. Across CamVid, Cityscapes, ADE20K, and Pascal Context, TEAL consistently outperforms previous baselines under extreme label scarcity\. After 10 rounds of 1\-pixel\-per\-image queries, TEAL improves over the strongest baseline by up to $\+\\textbf\{14\.65\}$ mIoU on CamVid and $\+\\textbf\{23\.34\}$ mIoU on Pascal Context, showing that ViT token spaces provide an effective geometry for extremely\-low\-budget active segmentation\.

## Sparse All\-Layer Connector for Domain Generalised Semantic Segmentation

**Authors:** Ruoyu Guo; XIN KUN LIN; Maurice Pagnucco; Yang Song

**ID:** 153049 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OPMdo1lyMp>) | [PDF](<https://openreview.net/pdf?id=OPMdo1lyMp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153049>)

Domain generalised semantic segmentation \(DGSS\) has recently benefited from combining multiple foundation models, such as vision\-language and vision foundation models, to leverage their diverse representations for generalisation\. Existing multi\-model approaches share a common design choice: cross\-model fusion is restricted to depth\-aligned layers, implicitly assuming that mutually beneficial information resides at the same depth across models\. However, foundation models pretrained under different objectives may develop distinct representation hierarchies, making the optimality of depth\-aligned fusion questionable\. Moreover, we observe that the foundation models have different depth\-wise domain sensitivity\. Motivated by these observations, we propose a Sparse All\-Layer Connector \(SALC\) that enables each layer to access information from preceding layers of another model\. As the number of accessible layers grows with depth, dense aggregation may hurt generalisation\. SALC therefore learns to adaptively select a sparse subset of informative layers\. We further introduce a candidate dropout regularisation that strengthens sparsity and encourages SALC to explore diverse layers, leading to more robust selection\. Across four foundation model combinations and three DGSS evaluation settings, the proposed design demonstrates stronger generalisation than conventional depth\-aligned fusion\. Code will be public upon acceptance\.

## On the Relaxation of Conditional Independence Assumption for Image Segmentation

**Authors:** Zixun Wang; Ben Dai

**ID:** 154387\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154387

[Paper](<https://openreview.net/forum?id=DwqwJHYbqV>) | [PDF](<https://openreview.net/pdf?id=DwqwJHYbqV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154387>)

In semantic segmentation, a recent line of RankSEG methods directly optimizes Dice/IoU scores at inference time, improving alignment with evaluation metrics without modifying model training\. Despite its theoretical and empirical success, RankSEG relies on the restrictive Conditional Independence Assumption \(CIA\), which ignores crucial label correlations and therefore degrades performance in ambiguous or low\-contrast scenarios\. However, accounting for full label dependence is computationally prohibitive, requiring $\\mathcal\{O\}\(d^3\)$ time\. To address this, we replace the CIA with a Spatially Localized Dependence \(SLD\) structure that captures local label correlations while keeping the dependence model tractable\. We further overcome the remaining computational bottleneck via a Reciprocal Moment Approximation coupled with a novel fixed\-point optimization strategy that eliminates exhaustive search\. The proposed algorithm achieves a highly practical $\\mathcal\{O\}\(d \\log d\)$ complexity and consistently outperforms conventional argmax and CIA\-based RankSEG across diverse segmentation benchmarks\. Improvements are significant in low\-contrast or small\-object scenarios, where label dependence offers valuable signals complementary to image information for accurate segmentation\.

## Pixels to Tokens: Token Space Efficient Active Learning for Low\-Budget Semantic Segmentation

**Authors:** Utku Cicek; Mahip Singh; Ziyao Shang; Kimathi Kaai; C Thomas; Pablo Guerrero; Alexander Wong; Sirisha Rambhatla

**ID:** 148535\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148535

[Paper](<https://openreview.net/forum?id=xBIIoVBT4V>) | [PDF](<https://openreview.net/pdf?id=xBIIoVBT4V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148535>)

Semantic segmentation typically requires dense pixel\-level annotations, creating a prohibitive bottleneck for budget\-constrained applications\. While foundation models and vision transformers \(ViTs\) have redefined visual representations, current active learning \(AL\) strategies for these backbones largely operate at the patch or region level, where annotation requirements remain high\. Extending ViT\-based AL to the pixel\-level, low\-budget regime is uniquely challenging: with as little as one pixel query per image, a method must simultaneously identify the most informative locations and train a reliable decoder head from an extremely sparse signal\. We introduce TEAL \(Token\-space Efficient Active Learning\), the first pixel\-level AL framework built around ViT representations\. TEAL uses a frozen DINOv3 backbone and performs diversity\-based selection directly on its native token lattice, avoiding the artifacts introduced by interpolating token embeddings to dense pixel resolutions\. Our framework applies a two\-level MaxHerding strategy over multi\-layer token descriptors to select representative candidates, followed by margin\-based uncertainty refinement on a finer decoder grid\. Across CamVid, Cityscapes, ADE20K, and Pascal Context, TEAL consistently outperforms previous baselines under extreme label scarcity\. After 10 rounds of 1\-pixel\-per\-image queries, TEAL improves over the strongest baseline by up to $\+\\textbf\{14\.65\}$ mIoU on CamVid and $\+\\textbf\{23\.34\}$ mIoU on Pascal Context, showing that ViT token spaces provide an effective geometry for extremely\-low\-budget active segmentation\.

## MonoChunk3D: Monocular Online 3D Instance Segmentation with Persistent Instance States

**Authors:** Yibo Zhao; Jingzhi Zhou; Yigong Zhang; Jian Yang; Jin Xie

**ID:** 155123\-\-3 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155123

[Paper](<https://openreview.net/forum?id=8F9VWmr6fN>) | [PDF](<https://openreview.net/pdf?id=8F9VWmr6fN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155123>)

_Abstract unavailable from the accessible public sources._

## $\\textbf\{EchMo\}$: End\-to\-End Radar Echo Segmentation

**Authors:** Liwen Zhang; Xinying Fu; Youcheng Zhang; ZijunHu; Wen Chen; Shi Peng; Zhou Jie; Zhe Ma

**ID:** 151818 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XjkYV50z9m>) | [PDF](<https://openreview.net/pdf?id=XjkYV50z9m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151818>)

This paper presents an End\-to\-End learnable radar semantic segmentation network using I/Q echoes as input for Doppler radars, named as $\\textbf\{EchMo\} \(\\text\{\\textbf\{ech\}o\-in\-\\textbf\{m\}ask\-\\textbf\{o\}ut\}\)$\. EchMo reinterprets the steps of conventional radar signal processing \(RSP\) in a deeply learnable manner, including pulse compression \(traditionally implemented via matched filtering\), moving target indication \(MTI\), coherent integration \(CI\), and target detection\. Ultimately, it achieves a single compact learnable deep model that goes from I/Q echoes to target semantic segmentation in one step, delivering a streamlined differentiable computational graph and substantial efficiency gains\. Experimental results show that, compared to conventional pipeline or deep models based on intermediate radio\-frequency \(RF\) representation, EchMo achieves better results and offers a more interpretable foundation\. EchMo is the first pulse\-Doppler I/Q echo\-based end\-to\-end radar semantic segmentation deep architecture, which is a milestone for the fields of RSP, remote sensing, and modern deep learning\. The code link for review: https://anonymous\.4open\.science/anonymize/EchMo\-6877\.

