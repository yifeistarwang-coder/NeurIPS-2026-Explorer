# Computer Vision / Classification and Understanding

计算机视觉 / 图像分类与理解

104 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Surjective Pseudo\-Invertible Neural Networks

**Authors:** Yamit Ehrlich; Amit Arad; Nimrod Berman; Assaf Shocher

**ID:** 148844 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uiqGz0UDET>) | [PDF](<https://openreview.net/pdf?id=uiqGz0UDET>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148844>)

The Moore\-Penrose Pseudo\-inverse \(PInv\) is the fundamental tool for inverting linear operators\. We propose a natural generalization to the non\-linear regime and introduce \{Surjective Pseudo\-invertible Neural Networks \(SPNN\)\}: architectures that admit a tractable non\-linear PInv by construction and satisfy the corresponding geometric properties\. Building on this, we formalize \{Non\-Linear Back\-Projection \(NLBP\)\}, the non\-linear analogue of $x' = x \+ A^\\dagger\(y\-Ax\)$: an update that projects any sample to its closest state consistent with $f\(x\)=y$\. Diffusion\-based null\-space projection revolutionized zero\-shot solving of linear inverse problems via closed\-form back\-projection; NLBP extends this paradigm to non\-linear learned \`\`degradations'' in the broad sense, spanning semantic mappings such as classification and object detection\. The result is zero\-shot inversion of complex degradations and precise semantic control over generative outputs without retraining the prior\.

## OFBD: Object\-Focused Background Debiasing for Long\-Tailed Learning

**Authors:** Shenghan Chen; Yiming Liu; Zhipeng Deng; Haolin Wang; Jiale Zhou; Zhijian Wu; Lu Xiankai; yafei ou; Yefeng Zheng

**ID:** 152979 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OuD9gP9e2o>) | [PDF](<https://openreview.net/pdf?id=OuD9gP9e2o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152979>)

_Abstract unavailable from the accessible public sources._

## CIPHERGRID Benchmark: From Multimodal Rule Inference to Sequential Action

**Authors:** Christopher Curtis; Victor Fragoso; Saiph Savage

**ID:** 139313 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xw2kQScdD6>) | [PDF](<https://openreview.net/pdf?id=Xw2kQScdD6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139313>)

_Abstract unavailable from the accessible public sources._

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

## Rare\-Class Signal Suppression in Long\-Tailed Multi\-Expert Fine\-Tuning

**Authors:** Zhiheng Gong; YuHeng Yang; Pengkun Wang; Yang Wang

**ID:** 150905 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eXqF5uD4aN>) | [PDF](<https://openreview.net/pdf?id=eXqF5uD4aN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150905>)

Multi\-expert ensemble frameworks have achieved strong performance on long\-tailed visual recognition by training heterogeneous expert heads on a shared backbone, but their gradient coordination strategies are inherited from balanced multi\-task learning, where resolving directional conflict is the canonical challenge\. We show that head\-class bias acts sequentially across three pipeline interfaces, namely loss geometry, gradient coordination, and inference fusion, forming a suppression cascade in which rare\-class gradient energy can be erased before it influences model parameters, a failure mode that direction\-focused analysis cannot detect\. A controlled study reveals that direction\-modifying and simple\-aggregation solvers are statistically equivalent once rare\-class source signal is amplified, while energy\-balancing objectives erase this amplification entirely\. To break this cascade, we propose Gale \(Gradient\-energy Allocation for Long\-tail Ensembles\), a framework that applies gradient\-energy allocation at every cascade stage, amplifying tail\-class source signal through frequency\-calibrated loss geometry, preserving it through a non\-penalizing coordination rule, and routing predictions through class\-specific expert competence\. On CIFAR\-100\-LT \(ρ=100\), Gale achieves 59\.2% overall accuracy and 46\.1% few\-class accuracy across four seeds \(σ=0\.23%\), surpassing the prior best by \+6\.2%, with consistent improvements on ImageNet\-LT and iNaturalist 2018\. Code is available at Supplementary Material\.

## Align and Distill: Unifying and Improving Domain Adaptive Object Detection

**Authors:** Justin Kay; Timm Haucke; Suzanne Stathatos; Siqi Deng; Erik Young; Pietro Perona; Sara Beery; Grant Van Horn

**ID:** 156740 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ssXSrZ94sR>) | [PDF](<https://openreview.net/pdf?id=ssXSrZ94sR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156740>)

_Abstract unavailable from the accessible public sources._

## Rare\-Class Signal Suppression in Long\-Tailed Multi\-Expert Fine\-Tuning

**Authors:** Zhiheng Gong; YuHeng Yang; Pengkun Wang; Yang Wang

**ID:** 150905\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150905

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

## HAPACT: A Benchmark For Human\-Centric Physical Impact Localization in Movies

**Authors:** Youngrae Kim; Yejin Jang; Eunho Kim; Youjin Sung; Kun\-Woo Song; Sangpil Kim; Sang Ho Yoon

**ID:** 139113 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kITf6rZTL7>) | [PDF](<https://openreview.net/pdf?id=kITf6rZTL7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139113>)

_Abstract unavailable from the accessible public sources._

## VideoSleuth: A Narrative\-Centric Agentic System with Video\-Audio Native MLLM for Long\-Form Video Understanding

**Authors:** Conglin Li; Yang Li; Qi Zhang; Guanhua Chen; Yun Chen; Weifeng Ge

**ID:** 149002 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tZ1fHngtVB>) | [PDF](<https://openreview.net/pdf?id=tZ1fHngtVB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149002>)

_Abstract unavailable from the accessible public sources._

## iDETR: Implicit DETR for Tiny Object Detection

**Authors:** Lingcong Cai; Haiqin Yang; Jikui Liu; Yunpeng Cai; Yumeng Liu; Xiaomao Fan

**ID:** 151442 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=afWSKToToO>) | [PDF](<https://openreview.net/pdf?id=afWSKToToO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151442>)

_Abstract unavailable from the accessible public sources._

## When Do Cosine Prototypes Mislead? A Whitening\-Aware Benchmark for Frozen\-Feature Image Classification

**Authors:** Jian Ding; Su Yang

**ID:** 139731 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7nyfFNceM0>) | [PDF](<https://openreview.net/pdf?id=7nyfFNceM0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139731>)

_Abstract unavailable from the accessible public sources._

## LCD$^3$: Layout\-Conditioned Diffusion for Dataset Distillation in Object Detection

**Authors:** Yue Cao; Mohsen Zardadi; Yu Hu; Yanshuo Fan; Jozsef Hamari; Zheng Liu; Jianyang Gu

**ID:** 150456 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=htxCgIKQGB>) | [PDF](<https://openreview.net/pdf?id=htxCgIKQGB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150456>)

Object detection data contains a structural asymmetry that is easy to overlook in dataset distillation \(DD\)\. Each detection image couples a spatial layout with a visual realization\. Layouts define detection targets through object categories and bounding boxes, while pixels instantiate these targets with particular object appearances and backgrounds\. Although both forms can be redundant across a dataset, they play different roles\. Layouts define the task distribution, so synthesizing them freely risks altering the detection problem\. Visual realizations, on the other hand, are conditional samples attached to layouts\. This motivates a separation principle: preserve and recombine layouts from the original data, then use generative priors to diversify their visual realizations\. Based on this principle, we propose LCD$^3$, a layout\-conditioned diffusion framework for object detection DD\. LCD$^3$ constructs composite layouts from diverse groups based on scene\-level embeddings\. A layout\-conditioned diffusion model then generates new images from these layouts, enriching object appearance and scene realization without discarding the spatial structure needed for detection\. The generation process is grounded with semantically verified object crops to retain the original visual style\. Experiments show that this separation between layout and realization produces more effective distilled detection datasets\. LCD$^3$ consistently outperforms the previous state\-of\-the\-art, OD$^3$, across benchmarks using fewer objects per distilled image, e\.g\., a $12\.5$\\% mAP50 improvement at a $0\.5$\\% compression ratio on PASCAL VOC\.

## Manifold Embedding of Deep Image Features for Image Matching via Neural Adjoint Maps

**Authors:** Nafie El Amrani; Moritz Heep; Florian Bernard

**ID:** 149523 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pVexlKkL27>) | [PDF](<https://openreview.net/pdf?id=pVexlKkL27>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149523>)

_Abstract unavailable from the accessible public sources._

## ProAlign: Progressive Positional and Prototype\-Guided Alignment for Aerial\-Ground Person Re\-Identification

**Authors:** Qiao Li; Jing Chen; Cong Wu; Kun He; Ruiying Du; Shuwei Li

**ID:** 151763 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YEBICnUue3>) | [PDF](<https://openreview.net/pdf?id=YEBICnUue3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151763>)

Aerial\-Ground Person Re\-Identification \(AG\-ReID\) aims to match pedestrian images captured by unmanned aerial vehicles \(UAVs\) and ground\-based surveillance cameras\. The task remains highly challenging due to severe viewpoint discrepancies, frequent occlusions, and substantial domain gaps between aerial and ground imagery\. Beyond these observable factors, existing methods often overlook two fundamental structural issues: cumulative positional drift during hierarchical feature extraction and semantic inconsistency across cross\-view feature distributions\. To address these challenges, we propose ProAlign, a Progressive Positional and Prototype\-Guided Alignment Network for AG\-ReID\. ProAlign comprises two key components: a Layer\-wise Progressive Positional Embedding \(LPPE\) module and a View\-Aware Prototype Contrastive Learning \(PCL\) module\. LPPE performs adaptive positional calibration throughout transformer layers by employing conditional positional encoding in shallow layers to mitigate local spatial distortions, while introducing learnable static positional embeddings in deeper layers to reinforce global semantic priors\. Meanwhile, PCL maintains view\-specific aerial and ground prototypes for each identity and enforces cross\-view semantic consistency via a dual\-prototype contrastive objective\. Extensive experiments on the challenging CARGO benchmark demonstrate the effectiveness of ProAlign\. In the aerial\-ground setting, ProAlign surpasses previous state\-of\-the\-art methods by 13\.89% mAP and 9\.39% Rank\-1 accuracy\.

## Post\-hoc Selective Classification for Reliable Synthetic Image Detection

**Authors:** Kaixiang Zheng; Jacob Seidman

**ID:** 151954 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WYncw2up3x>) | [PDF](<https://openreview.net/pdf?id=WYncw2up3x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151954>)

As synthetic images become increasingly realistic, reliable synthetic image detection techniques are of pressing need to prevent their misuse\. Despite satisfactory in\-distribution performance, deep neural network\-based synthetic image detectors \(SIDs\) lack reliability in deployment and often fail in the presence of common covariate shifts, resulting in poor detection accuracy\. To avoid the risk caused by potential errors, we adopt a selective classification \(SC\) strategy by allowing SIDs to abstain from making low confidence predictions\. For practicality, we focus on post\-hoc methods which perform confidence estimation on a given SID without retraining\. However, we show that conventional logit\-based confidence score functions \(CSFs\) exhibit pathological behavior under covariate shifts, leading to SC performance close to or even worse than random guessing\. To address this, we propose a simple yet effective SC framework for \*\*Re\*\*liable \*\*S\*\*ynthetic \*\*I\*\*mage \*\*De\*\*tection \(ReSIDe\)\. First, we generalize the notion of logits to an SID's intermediate layers from a centroid matching perspective, extending the use of logit\-based CSFs to any layer of an SID\. Then, we introduce a preference optimization algorithm that aggregates confidence scores extracted from different layers to a final confidence estimate by minimizing an upper bound of the area under the risk\-coverage curve \(AURC\)\. Extensive experimental results show that ReSIDe significantly boosts the SC performance of various logit\-based CSFs under common covariate shifts, achieving up to 69\.55% AURC reduction\.

## Reviving the Discarded High\-Resolution Feature for Transformer\-Based Tiny Object Detection

**Authors:** Zehao Wang; Si Wu; GUIPING CAO; Xin Li; Yaowei Wang

**ID:** 151129 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cmZXkyWcad>) | [PDF](<https://openreview.net/pdf?id=cmZXkyWcad>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151129>)

Tiny object detection remains challenging because tiny instances occupy only a few pixels, and their fine\-grained details are easily lost during feature downsampling\. Although the highest\-resolution feature preserves rich local details for tiny objects, DETR\-like detectors often discard it due to its large computational cost, while directly reintroducing this feature also brings dense background noise\. To address this problem, we propose \\textbf\{ReDHF\}, a novel framework that \\textbf\{Re\}vives the \\textbf\{D\}iscarded \\textbf\{H\}igh\-resolution \\textbf\{F\}eature for tiny object detection\. ReDHF has three cooperative components\. Cross\-Scale Deformable Fusion \(CSDF\) first constructs a semantically enhanced highest\-resolution feature and injects its fine\-grained details into the shallow feature under a moderate cost\. Ellipse\-Guided Shallow Supervision \(EGSS\) then guides the enhanced feature to learn more reliable classification and localization priors by applying geometry\-adaptive auxiliary supervision\. Full\-Scale Query Interaction \(FSQI\) further enables decoder queries to access both low\-level details and high\-level semantic information, allowing them to aggregate richer cues for tiny objects\. Extensive experiments show that ReDHF consistently improves multiple baselines across different DETR variants and achieves state\-of\-the\-art performance on the evaluated benchmarks\. The best ReDHF variants surpass their baselines by \\textbf\{\+1\.4 AP\} on AI\-TOD\-v2, \\textbf\{\+1\.6 AP\} on VisDrone, and \\textbf\{\+1\.5 AP\} on SODA\-D, with especially notable gains on tiny and small objects\.

## CausalAffect: Causally Guided Learning of Psychology\-Aligned Facial Affect Relations

**Authors:** Guanyu Hu; Tangzheng Lian; Dimitrios Kollias; Oya Celiktutan; Xinyu Yang

**ID:** 148159 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zrt8lyUHkP>) | [PDF](<https://openreview.net/pdf?id=zrt8lyUHkP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148159>)

_Abstract unavailable from the accessible public sources._

## Generative Object Detection with Co\-Training

**Authors:** Yang Liu; Yao Zhang; Feng Hou; Yangzhou Du; Peng Wang; Yang Zhang; zhongchao shi; Jianping Fan; Zhiqiang He

**ID:** 153794 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IdUJaSN2pj>) | [PDF](<https://openreview.net/pdf?id=IdUJaSN2pj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153794>)

Recent progress in multimodal large language models \(MLLMs\) has strengthened visual understanding and instruction following, and opened a path to open\-ended generative object detection, in which a model discovers, names, and localizes objects from free\-form instructions without relying on a predefined category set\. Nevertheless, current generative detectors remain less accurate than discriminative detectors, as token\-level supervision provides only indirect and weak constraints on fine\-grained visual perception\. To equip MLLM with such an explicit optimization objective, we propose \\textbf\{GOD\} \(\\textbf\{G\}enerative \\textbf\{O\}bject \\textbf\{D\}etection\), a 3B\-scale MLLM that injects object\-level visual\-prior supervision into generative detection by coupling visual\-prior reconstruction with language generation\. GOD attaches a lightweight DETR\-style object\-query branch to the MLLM visual encoder, maps the resulting object queries into the token space, and optimizes them jointly with autoregressive generation, MLLM\-side object\-query reconstruction, and DETR\-side localization objectives\. Specifically, in the training recipe, a multi\-stage training pipeline first aligns the object decoder with the MLLM and then uses an interleaved\-mask curriculum to transfer detector\-grounded priors from proposal\-assisted training to reference\-free generation\. Experiments on standard object detection and referring expression comprehension benchmarks show that GOD improves direct coordinate generation while preserving discriminative localization and language\-conditioned grounding\. These gains suggest that object\-level visual priors are most effective when learned within the MLLM, rather than supplied only as external proposals, providing a practical bridge between generative language modeling and localization\-aware perception\. We will make our code publicly available upon acceptance\.

## LR\-V2X: Loss Resilient Collaborative Perception under Low\-Bandwidth Communication

**Authors:** Kang Yang; Tianci Bu; Peng Wang; Deying Li; Yongcai Wang

**ID:** 148873 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uYVWkUP5Hl>) | [PDF](<https://openreview.net/pdf?id=uYVWkUP5Hl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148873>)

Given the inherent unpredictability of packet loss in vehicular wireless communications, V2X collaborative perception can yield practical benefits only if agents can achieve reliable collaboration under lossy and low\-bandwidth communication conditions\. Existing dense BEV feature fusion methods depend on redundant BEV feature exchange, which is infeasible in low\-bandwidth scenarios, while compact\-communication methods aggressively compress messages but can hardly recover the missing feature content after packet loss\.  In this paper, we present LR\-V2X, a loss\-resilient, latent\-space reconstruction framework that converts corrupted received latents \(even under severe 90\\% packet loss\) into a spatial prior and then reconstructs the missing BEV information from this informative prior and using ego context as condition\. Notably, the model can be trained under complete communication conditions and can be directly applied to lossy conditions at test time, eliminating the need for training under numerous lossy conditions\.  Experiments on DAIR\-V2X and V2XREAL show that LR\-V2X delivers the strongest robustness under severe packet loss and preserves reliable collaboration as communication quality degrades\. And it reduces communication overhead by $64\\times$ compared to dense BEV feature fusion baselines\. Code will be publicly released\.

## TTVidT: Decoupling the Temporal Axis for Efficient Motion\-Centric Video Pretraining

**Authors:** Shih\-Ying Yeh; Daniel Z Kaplan; Xuehai Wang; Fu\-En Yang; Min\-Hung Chen; Shang\-Hong Lai

**ID:** 154339 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ELiMecKQps>) | [PDF](<https://openreview.net/pdf?id=ELiMecKQps>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154339>)

Comparisons in video self\-supervised learning often evaluate complete training recipes rather than isolating the method itself: architecture, objective, data exposure, schedule, scale, and decoder capacity can all vary at once\. This makes it hard to identify which choices yield motion\-prioritized representations, whose gains concentrate on frame\-to\-frame change while retaining useful appearance\. We address this with a matched $4 \\times 6 = 24$ architecture\-\-objective study at roughly 170M\-\-190M encoder scale on $\\sim$1\.7M OpenVid and Moments\-in\-Time v2 clips for 8 epochs, and propose TT\-VidT\. TT\-VidT combines a DINOv3\-initialized ViT\-B/16 per\-frame spatial path with a compact Temporal Transfer Layer, trained by Diff Compression to reconstruct target frames from a first\-frame appearance anchor and frame\-specific motion tokens\. The sweep shows that TT3D with Diff Compression, not either component alone, enters the strongest motion\-sensitive regime, and decoder ablations favor a compact video\-pretrained decoder\. In final comparison, TT\-VidT leads Jester, Something\-\-Something\\,V2, ARID, and Diving48 fine\-tuning simultaneously, improving over the strongest non\-TT row by 54\\%\-\-121\\%, while using 48\\% fewer encoder FLOPs than DisMo and 55\\% fewer than VideoMAE or V\-JEPA\~2\. HMDB51, IARD, and EPIC\-Kitchens bound the claim\.

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

**ID:** 139313\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139313

[Paper](<https://openreview.net/forum?id=Xw2kQScdD6>) | [PDF](<https://openreview.net/pdf?id=Xw2kQScdD6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139313>)

_Abstract unavailable from the accessible public sources._

## Foveated BagNet: Inherent Interpretability Does Not Exclude Global Context

**Authors:** Holger Heidrich; Sarah Müller; Andreas Schilling

**ID:** 149976\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149976

[Paper](<https://openreview.net/forum?id=lnLU62lg9R>) | [PDF](<https://openreview.net/pdf?id=lnLU62lg9R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149976>)

Deploying deep learning in high\-stakes settings demands models that are not only accurate but interpretable\. Interpretable\-by\-design models, exemplified by BagNet, address this by restricting each local class predictor to a small spatial patch, yielding inherently explainable predictions\-\-\-but at the cost of capturing large\-scale image features, resulting in a substantial accuracy penalty\. We propose FovBagNet, a foveated extension of BagNet inspired by the mammalian retina\. Each local predictor depends on a stack of multiscale patches centered at its location, providing high\-resolution detail at the center and progressively coarser context toward the periphery\. FovBagNet achieves a top\-1 ImageNet accuracy of 0\.74, closing most of the 11\-point gap between BagNet\-33 \(0\.65\) and ResNet\-50 \(0\.76\), while retaining the inherent interpretability of BagNet in the form of spatially accurate saliency maps\. We also identify a conceptual limitation of the original BagNet saliency maps and empirically assess its impact\.

## COVD: Continual Open\-Vocabulary Object Detection with Novel Concept Injection

**Authors:** Yupeng Zhang; Ruize Han; Yuzhong Feng; Zixin Ren; Yuntong Tian; Liang Wan

**ID:** 155540\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155540

[Paper](<https://openreview.net/forum?id=4of16OWJXb>) | [PDF](<https://openreview.net/pdf?id=4of16OWJXb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155540>)

Open\-vocabulary object detection \(OVD\) has made significant progress, enabling detectors to generalize from seen to unseen categories\. However, real\-world category spaces continually evolve, and existing OVD models still struggle with newly emerging concepts, while repeated full retraining is prohibitively expensive\. To this end, we introduce a new task setting, termed Continual OVD with Novel Concept Injection \(COVD\),  where models sequentially learn incoming novel concept groups while preserving prior concepts and original open\-vocabulary knowledge, along with a new benchmark, Novel\-114\. Our key observation is that pretrained visual encoders often already perceive and represent many novel concepts, and the main bottleneck lies in the lack of stable semantic alignment between visual representations and textual concepts\. Based on this, we propose NoIn\-Det, an efficient continual injection framework without additional parameters\. NoIn\-Det freezes the visual encoder, preserves the text representation space using only texts of common concepts and previously injected concepts, and injects novel concepts by updating only a small subset of text\-branch parameters beneficial to novel concept learning\. Extensive experiments show that NoIn\-Det effectively learns novel concepts, preserves old knowledge, and consistently outperforms existing continual learning methods for VLMs without introducing additional parameters\.

## Concurrent Image Understanding and Generation: Self\-Correcting Coupled Markov Jump Process

**Authors:** Minh\-Quan Le; Armand Comas; Alexandros Lattas; Stylianos Moschoglou; Pedro Velez; Amit Raj; Aaron Germuth; Thabo Beeler; Dimitris Samaras; Di Qiu

**ID:** 154281 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EzyXXt9tbh>) | [PDF](<https://openreview.net/pdf?id=EzyXXt9tbh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154281>)

Human cognition does not separate understanding and generation\. A teacher at a whiteboard speaks and draws \*together\*, each modality reshaping the other\. In this paper, we bring this coupled loop to artificial systems\. Masked Diffusion Models \(MDMs\) are ideally suited to this task, yet existing samplers either decode text and image sequentially or update them in parallel branches that share only previous\-step history, but not the other modality's latest decisions \*within\* the same step; combined with MDMs' inability to remask, cross\-modal contradictions are neither detected nor repaired\. We introduce \*\*Self\-Correcting Coupled Markov Jump Processes \(SC\-CMJP\)\*\*, a framework in which one modality's transition rates are functionals of the other modality's unmasking confidence score, as weighted by cross\-modal attention\. Furthermore, a remasking jump retracts commitments the moment cross\-modal evidence turns against them\. In conjunction with SC\-CMJP, we introduce \`CO₂Jump\` \(Self\-\*\*Co\*\*rrecting \+ \*\*Co\*\*upled \+ Jump\), a novel training\-free single\-pass sampler for joint multimodal generation\. For training and evaluation purposes, we have created and will release three large\-scale joint multimodal generation corpora: JEdit\-1M, JMaze\-200K, JNono\-200K, with matching in\- and out\-of\-distribution benchmarks\. \`CO₂Jump\` achieves best joint performance for image understanding and editing as well as visual reasoning \(maze and nonogram solving\)\. The performance of the sampler scales monotonically with the number of denoising steps, evidence that the benefits of cross\-modal coupling \*compound\* across the trajectory\.

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

## RobustGenBench: A Benchmark for Robust Generalization to Adversarial and Common Perturbations, with Applications to Vision and Vision\-Enabled Large Language Models

**Authors:** Maxime Heuillet; Jonas Ngnawé; Yann Pequignot; Rishika Bhagwatkar; Alexandre Larouche; Irina Rish; Christian Gagné; Ola Ahmad; Audrey Durand

**ID:** 139536 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KDsuVST8by>) | [PDF](<https://openreview.net/pdf?id=KDsuVST8by>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139536>)

_Abstract unavailable from the accessible public sources._

## Do We Really Need Diffusion for Generative Object Detection? A Minimal Prototype Perspective

**Authors:** Yu Hong; Xiaosong Jia; Yihan Wang; Wenlong Liao; Tao He; Junchi Yan

**ID:** 153340 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M42HRdwz6B>) | [PDF](<https://openreview.net/pdf?id=M42HRdwz6B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153340>)

Generative object detection, introduced by DiffusionDet, is defined by two coupled properties: \(P1\) data\-independent random\-box initialization with a learned noise\-to\-data transport, and \(P2\) test\-time scaling \(TTS\), the ability to trade inference compute for accuracy at a fixed checkpoint by adjusting the number of proposals or refinement steps\. This paper asks: \\emph\{How can we preserve both properties with a minimal conceptual design?\} We dissect DiffusionDet component by component and find that, in our controlled interventions, the diffusion schedule, the initial noise distribution, and DDIM sampling stochasticity have only a small effect on inference results\. In contrast, detection performance is more sensitive to the denoising head, iterative refinement, and proposal coverage\. Based on these diagnostic results, we propose \\textbf\{LinearDet\}, a compact generative detection prototype: \\emph\{linear noising at training, linear denoising at inference\}\-\-\-no diffusion\-specific schedule, no diffusion ODE/SDE solver, only a symmetric pair of linear mixtures\. On COCO, LinearDet matches DiffusionDet under standard settings, is more robust under sparse proposal coverage, outperforms it in zero\-shot CrowdHuman transfer, and produces smoother refinement trajectories that admit clean heatmap visualization\. More broadly, we hope this diagnosis and compact prototype offer the object detection community a cleaner baseline for studying generative detection\.

## TreemapMix: Dirichlet\-Controlled Multi\-Image Augmentation for Probability and Ordinal Supervision

**Authors:** Ejafa Bassam; Konstantin Garbers; Yingsheng Geng; Dalton Jens; Jiaxu Qian; Guyue Liu

**ID:** 148753 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vHPQM0CONK>) | [PDF](<https://openreview.net/pdf?id=vHPQM0CONK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148753>)

_Abstract unavailable from the accessible public sources._

## ContextShift: A Controlled Benchmark for Context Dependence in Object Detection

**Authors:** Dan Zlotnikov; Alex Lazarovich; Ohad Ben\-Shahar

**ID:** 139652 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DDUVPd74o7>) | [PDF](<https://openreview.net/pdf?id=DDUVPd74o7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139652>)

_Abstract unavailable from the accessible public sources._

## SR\-Prominence: A Crowdsourced Protocol and Dataset Suite for Perceptually\-Weighted Super\-Resolution Artifact Evaluation

**Authors:** Ivan Molodetskikh; Kirill Malyshev; Mark Mirgaleev; Nikita Zagainov; Evgeney Bogatyrev; Dmitriy Vatolin

**ID:** 139596 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GJzL4oNx1s>) | [PDF](<https://openreview.net/pdf?id=GJzL4oNx1s>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139596>)

_Abstract unavailable from the accessible public sources._

## TreemapMix: Dirichlet\-Controlled Multi\-Image Augmentation for Probability and Ordinal Supervision

**Authors:** Ejafa Bassam; Konstantin Garbers; Yingsheng Geng; Dalton Jens; Jiaxu Qian; Guyue Liu

**ID:** 148753\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148753

[Paper](<https://openreview.net/forum?id=vHPQM0CONK>) | [PDF](<https://openreview.net/pdf?id=vHPQM0CONK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148753>)

_Abstract unavailable from the accessible public sources._

## ContextShift: A Controlled Benchmark for Context Dependence in Object Detection

**Authors:** Dan Zlotnikov; Alex Lazarovich; Ohad Ben\-Shahar

**ID:** 139652\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139652

[Paper](<https://openreview.net/forum?id=DDUVPd74o7>) | [PDF](<https://openreview.net/pdf?id=DDUVPd74o7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139652>)

_Abstract unavailable from the accessible public sources._

## TTVidT: Decoupling the Temporal Axis for Efficient Motion\-Centric Video Pretraining

**Authors:** Shih\-Ying Yeh; Daniel Z Kaplan; Xuehai Wang; Fu\-En Yang; Min\-Hung Chen; Shang\-Hong Lai

**ID:** 154339\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154339

[Paper](<https://openreview.net/forum?id=ELiMecKQps>) | [PDF](<https://openreview.net/pdf?id=ELiMecKQps>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154339>)

Comparisons in video self\-supervised learning often evaluate complete training recipes rather than isolating the method itself: architecture, objective, data exposure, schedule, scale, and decoder capacity can all vary at once\. This makes it hard to identify which choices yield motion\-prioritized representations, whose gains concentrate on frame\-to\-frame change while retaining useful appearance\. We address this with a matched $4 \\times 6 = 24$ architecture\-\-objective study at roughly 170M\-\-190M encoder scale on $\\sim$1\.7M OpenVid and Moments\-in\-Time v2 clips for 8 epochs, and propose TT\-VidT\. TT\-VidT combines a DINOv3\-initialized ViT\-B/16 per\-frame spatial path with a compact Temporal Transfer Layer, trained by Diff Compression to reconstruct target frames from a first\-frame appearance anchor and frame\-specific motion tokens\. The sweep shows that TT3D with Diff Compression, not either component alone, enters the strongest motion\-sensitive regime, and decoder ablations favor a compact video\-pretrained decoder\. In final comparison, TT\-VidT leads Jester, Something\-\-Something\\,V2, ARID, and Diving48 fine\-tuning simultaneously, improving over the strongest non\-TT row by 54\\%\-\-121\\%, while using 48\\% fewer encoder FLOPs than DisMo and 55\\% fewer than VideoMAE or V\-JEPA\~2\. HMDB51, IARD, and EPIC\-Kitchens bound the claim\.

## TTVidT: Decoupling the Temporal Axis for Efficient Motion\-Centric Video Pretraining

**Authors:** Shih\-Ying Yeh; Daniel Z Kaplan; Xuehai Wang; Fu\-En Yang; Min\-Hung Chen; Shang\-Hong Lai

**ID:** 154339\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154339

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

## COMPOSE: Hypergraph Cover Optimization for Multi\-view 3D Human Pose Estimation

**Authors:** Tony Danjun Wang; Tolga Birdal; Nassir Navab; Lennart Bastian

**ID:** 150956 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e20UHiy3l3>) | [PDF](<https://openreview.net/pdf?id=e20UHiy3l3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150956>)

3D human pose estimation from sparse multi\-view camera rigs is an essential task for numerous applications, including action recognition, sports analysis, and human\-robot interaction\. While learned methods dominate the field on benchmarks, they require large annotated datasets; training\-free optimization\-based methods remain promising as they circumvent 3D supervision by solving a correspondence problem across views from 2D detections\. Existing combinatorial formulations rely on pairwise associations to model this correspondence problem and enforce global consistency across views only as a downstream constraint\. However, reconciling locally plausible pairwise matches becomes brittle under occlusion and noisy detections, where local errors propagate globally\. We propose COMPOSE, which recasts multi\-view 3D human pose estimation as a weighted exact\-cover optimization over a hypergraph of person hypotheses\. Our formulation replaces pairwise association and post\-hoc consistency enforcement with a single global combinatorial objective\. To address the exponentially large candidate space, we introduce a geometric pruning strategy alongside two complementary solvers: an exact Integer Linear Programming formulation and a scalable relaxation via Belief Propagation\. Without any 3D supervision, COMPOSE improves average precision by up to 31 points over the best optimization\-based method and 13 points over self\-supervised learned methods, demonstrating the effectiveness of higher\-order combinatorial association for training\-free multi\-view 3D human pose estimation\.

## Class\-Incremental Learning via LoRA\-based Elastic Ensemble of Experts

**Authors:** Ruilong Yu; Fei Ye; Zhiyuan Ren; Qihe Liu; Adrian G\. Bors; Rongyao Hu; shijie zhou

**ID:** 155401 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5v1mhJ0DnN>) | [PDF](<https://openreview.net/pdf?id=5v1mhJ0DnN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155401>)

_Abstract unavailable from the accessible public sources._

## RADAR: Relative Angular Divergence Across Representations

**Authors:** Xavier Cadet; Mateusz Nowak; Peter Chin

**ID:** 148141 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zzVgiIST6K>) | [PDF](<https://openreview.net/pdf?id=zzVgiIST6K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148141>)

Machine learning methods rely on data\. However, gathering suitable data can be challenging due to availability constraints, cost, or the need for domain expertise\. Expanding datasets with additional sources is a common response to limited data, yet this practice does not always improve downstream performance and can sometimes lead to a loss of performance, known as negative transfer\. We propose RADAR, a simple, geometrically grounded metric for estimating cross\-domain transferability in foundation models\. RADAR analyzes the layer\-wise evolution of representations by measuring angular alignments and relative changes in distance along layer\-to\-layer displacement trajectories, and by comparing empirical distributions of within\-domain and cross\-domain dynamics\. We hypothesize that domain transferability is related to the divergence between these trajectory distributions\. We evaluate the metric across multiple modalities, including cross\-lingual sentiment classification with text embedding models and cross\-domain image classification with foundation vision models\. Across several settings, RADAR provides competitive predictive performance relative to existing transferability metrics on several vision and text benchmarks, with particularly strong results when domain transitions are smooth or cleanly separated\. Our ablations further suggest that the effectiveness of transferability estimation depends on the geometry of the model’s internal representation space, with different modalities favoring different topological formulations\.

## MSR\-3D: Multi\-Mode Semantic Representation for Open\-Vocabulary 3D Scene Understanding

**Authors:** Jianan Fu; ting Wu; Rui Yang; Jiacheng Sun; Xinghong Zhou; Chenghai Mao; Jiaxiang Pan; Xiaomao Li

**ID:** 153744 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=J3HWf1ltem>) | [PDF](<https://openreview.net/pdf?id=J3HWf1ltem>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153744>)

3DGS\-based open\-vocabulary 3D scene understanding requires identifying reconstructed 3D instances that correspond to a natural\-language query\. Existing methods typically compress multi\-view observations of an instance into a single semantic descriptor, which is insufficient to represent a complete 3D instance\. To retain rich semantic information across diverse viewpoints, we propose MSR\-3D, a framework built around a Multi\-Mode Semantic Representation\. Specifically, MSR\-3D derives multi\-view observations from both 2D segmentation masks and rendered masks of each segmented 3D instance\. These observations are organized into groups\. Each group is summarized as a semantic mode through a representative feature and associated statistical attributes\. Based on the multi\-mode semantic representation, we further introduce a lightweight learnable mode\-aware matcher for querying\. The matcher employs linear scoring modules to project the multi\-mode representation of each query\-instance pair into a three\-dimensional score space\. Calibrated decision boundaries are then learned in the resulting score space to separate true query\-instance matches from semantically related distractors\. This structured and decomposable design further improves the interpretability and generalization of MSR\-3D\. Experiments on open\-vocabulary scene\-understanding benchmarks show that MSR\-3D achieves state\-of\-the\-art results, improving mIoU on LERF\-OVS by 7\.52% over the baseline and achieving the best overall performance on 3DOVS\.

## SOAR: Semantic Organ\-Aware Pretraining for 3D CT Image Understanding

**Authors:** Huidong Xie; Wei Ji; Sunan He; Zhihao Tang; Wen Tang; Jun Zhao; Hongming Shan

**ID:** 148421 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xwakWJUI55>) | [PDF](<https://openreview.net/pdf?id=xwakWJUI55>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148421>)

_Abstract unavailable from the accessible public sources._

## Temporal Slice Learning for AI\-Generated Video Detection with 400× Fewer FLOPs

**Authors:** Wei Shang; Zhiyuan Li; Shengfeng He

**ID:** 154604 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CNFgZ3PsmY>) | [PDF](<https://openreview.net/pdf?id=CNFgZ3PsmY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154604>)

_Abstract unavailable from the accessible public sources._

## EviAttr\-OW: Evidential Attribute Reasoning for Open World Object Detection

**Authors:** Linhua Ye; Xing Xi; Ronghua Luo

**ID:** 152262 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UNSLchC9SB>) | [PDF](<https://openreview.net/pdf?id=UNSLchC9SB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152262>)

_Abstract unavailable from the accessible public sources._

## A Differentiable 3D Scene Graph Metric via Contextual Hellinger Triplet Geometry

**Authors:** U\-Chae Jun; Yoonhyuk Choi; Jiwoo Kang

**ID:** 149490 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=plEkglzKmI>) | [PDF](<https://openreview.net/pdf?id=plEkglzKmI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149490>)

_Abstract unavailable from the accessible public sources._

## Beyond Real or Fake: A Dual\-Channel Authenticity and Reasoning Protocol for Photographic Assessment

**Authors:** Xiaoxiao Li; Ruinan Jin; Lili Meng; Miaosen Wang; Athula Balachandran; PEI CAO

**ID:** 154533 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CsqD0OgleJ>) | [PDF](<https://openreview.net/pdf?id=CsqD0OgleJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154533>)

_Abstract unavailable from the accessible public sources._

## Order Matters: Competition\-Guided Query Ordering for RNN\-Based Object Detection

**Authors:** SHENGJIAN WU; Li Sun; Yu Shangguan; Qingli Li

**ID:** 152864 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PoXySrgd0e>) | [PDF](<https://openreview.net/pdf?id=PoXySrgd0e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152864>)

_Abstract unavailable from the accessible public sources._

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

## Precision As You Need: Stochastic Computing Is a Dense Adaptive Quantizer

**Authors:** Haoran Jin; Kangqi Zhang; Jirong Yang; Barry Lyu; Qiuyi Ding; Ruijie Gao; Nathan Bleier

**ID:** 155380 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=63tLNzOrMq>) | [PDF](<https://openreview.net/pdf?id=63tLNzOrMq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155380>)

Matrix multiplications dominate the inference cost of modern transformer\-based vision models, yet existing efficiency techniques such as post\-training quantization and mixed\-precision inference are largely limited to the small set of fixed\-width formats—INT4, INT8, BF16, and FP16—supported by conventional accelerators\. We revisit stochastic computing \(SC\) as a way to lift this constraint: viewed as a dense adaptive quantizer, SC controls precision by bit\-stream length L rather than a fixed datapath, while each multiplication reduces to a single AND/XNOR gate\. We build a GPU library that emulates SC matrix multiplication at scale, exposes stream lengths as first\-class kernel arguments, and evaluates SC end\-to\-end on image classification, object detection and instance segmentation, class\-conditional image generation, and visual world\-model planning\. On top of this substrate, we develop a dynamic per\-row mixed\-precision policy that assigns stream length per token or group at matched average budget, requires no retraining, and uses the same SC hardware across schedules\. Across tasks, SC remains competitive with fixed\-format INT quantization at matched bit budgets, while per\-row mixed precision helps maintain accuracy at lower average stream lengths\. These results provide software\-level feasibility evidence that SC can serve as a dense\-precision substrate for fine\-grained mixed\-precision inference on modern vision transformers\.

## C2FT: Enhancing Fine\-Grained Perception in MLLMs via Confuse\-then\-Contrast Fine\-Tuning

**Authors:** Shaoxuan He; Benlei Cui; Shikai Qiu; Yuwen Zhai; Hui Xue&amp;amp;\#x27;; Longtao Huang; Jingqun Tang; Haiwen Hong

**ID:** 151433 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aktp1wVAdL>) | [PDF](<https://openreview.net/pdf?id=aktp1wVAdL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151433>)

Multimodal Large Language Models \(MLLMs\) have demonstrated remarkable capabilities, yet they frequently struggle with fine\-grained visual perception, often suffering from hallucinations when faced with visually similar but semantically distinct instances\. A major underlying cause is the conventional single\-sample Supervised Fine\-Tuning \(SFT\) paradigm, which isolates training instances and limits the model's ability to explicitly learn subtle discriminative boundaries\. To address this, we propose \*\*C2FT\*\*, a novel \*\*Confuse\-then\-Contrast Fine\-Tuning\*\* framework that enhances fine\-grained perception by shifting from independent supervision to joint supervision\. Specifically, C2FT assesses the MLLM's internal uncertainty to dynamically mine model\-specific semantic confusions, subsequently constructing challenging multi\-image groups comprising hard positive and hard negative samples\. By interleaving these samples into a unified prompt, our approach forces the MLLM's internal attention mechanisms to cross\-reference images and explicitly capture localized visual discrepancies\. Extensive experiments on both Fine\-Grained Visual Classification \(FGVC\) and visual question answering \(VQA\) benchmarks demonstrate the effectiveness of C2FT\. For instance, on the Qwen3\-VL\-4B model, our approach achieves an average improvements of 3\.87\\% and 4\.35\\% points over standard SFT and GRPO baselines, respectively\.

## Concurrent Image Understanding and Generation: Self\-Correcting Coupled Markov Jump Process

**Authors:** Minh\-Quan Le; Armand Comas; Alexandros Lattas; Stylianos Moschoglou; Pedro Velez; Amit Raj; Aaron Germuth; Thabo Beeler; Dimitris Samaras; Di Qiu

**ID:** 154281\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154281

[Paper](<https://openreview.net/forum?id=EzyXXt9tbh>) | [PDF](<https://openreview.net/pdf?id=EzyXXt9tbh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154281>)

Human cognition does not separate understanding and generation\. A teacher at a whiteboard speaks and draws \*together\*, each modality reshaping the other\. In this paper, we bring this coupled loop to artificial systems\. Masked Diffusion Models \(MDMs\) are ideally suited to this task, yet existing samplers either decode text and image sequentially or update them in parallel branches that share only previous\-step history, but not the other modality's latest decisions \*within\* the same step; combined with MDMs' inability to remask, cross\-modal contradictions are neither detected nor repaired\. We introduce \*\*Self\-Correcting Coupled Markov Jump Processes \(SC\-CMJP\)\*\*, a framework in which one modality's transition rates are functionals of the other modality's unmasking confidence score, as weighted by cross\-modal attention\. Furthermore, a remasking jump retracts commitments the moment cross\-modal evidence turns against them\. In conjunction with SC\-CMJP, we introduce \`CO₂Jump\` \(Self\-\*\*Co\*\*rrecting \+ \*\*Co\*\*upled \+ Jump\), a novel training\-free single\-pass sampler for joint multimodal generation\. For training and evaluation purposes, we have created and will release three large\-scale joint multimodal generation corpora: JEdit\-1M, JMaze\-200K, JNono\-200K, with matching in\- and out\-of\-distribution benchmarks\. \`CO₂Jump\` achieves best joint performance for image understanding and editing as well as visual reasoning \(maze and nonogram solving\)\. The performance of the sampler scales monotonically with the number of denoising steps, evidence that the benefits of cross\-modal coupling \*compound\* across the trajectory\.

## Towards Generalizable 3D Anomaly Detection via Relational Inconsistency Modeling

**Authors:** KunHo Heo; SuYeon Kim; Hayoung Lee; Chanse Oh; MyeongAh Cho

**ID:** 152419\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152419

[Paper](<https://openreview.net/forum?id=TGK0r4DOru>) | [PDF](<https://openreview.net/pdf?id=TGK0r4DOru>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152419>)

3D anomaly detection \(3DAD\) aims to identify defective regions in point cloud data, serving as a critical component in industrial inspection systems\. Existing methods are normality\-centered — learning the distribution of normal samples and treating deviations as anomalies — without explicitly modeling what constitutes a defect\. This leads to ambiguous decision boundaries with increased false positives and negatives, particularly in unified and cross\-domain settings where diverse normal distributions further blur the boundaries\. We propose a relational inconsistency modeling framework that characterizes defects as violations of geometric consistency among neighboring structures\. Our approach learns category\-agnostic defect cues through pseudo\-anomalies designed as controlled relational violations, instantiated by two key modules: Edge\-aware Graph Refinement \(EGR\) for encoding geometric relationships among local regions, and Cluster\-Deviation Modeling \(CDM\) for identifying regions that are relationally incompatible within their structural peer group\. Extensive experiments on Anomaly\-ShapeNet and Real3D\-AD demonstrate consistent improvements over prior state\-of\-the\-art methods in both in\-domain and cross\-domain settings, validating the effectiveness of learning an explicit, relation\-based defect criterion for 3D anomaly detection\.

## RobustGenBench: A Benchmark for Robust Generalization to Adversarial and Common Perturbations, with Applications to Vision and Vision\-Enabled Large Language Models

**Authors:** Maxime Heuillet; Jonas Ngnawé; Yann Pequignot; Rishika Bhagwatkar; Alexandre Larouche; Irina Rish; Christian Gagné; Ola Ahmad; Audrey Durand

**ID:** 139536\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139536

[Paper](<https://openreview.net/forum?id=KDsuVST8by>) | [PDF](<https://openreview.net/pdf?id=KDsuVST8by>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139536>)

_Abstract unavailable from the accessible public sources._

## Do We Really Need Diffusion for Generative Object Detection? A Minimal Prototype Perspective

**Authors:** Yu Hong; Xiaosong Jia; Yihan Wang; Wenlong Liao; Tao He; Junchi Yan

**ID:** 153340\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153340

[Paper](<https://openreview.net/forum?id=M42HRdwz6B>) | [PDF](<https://openreview.net/pdf?id=M42HRdwz6B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153340>)

Generative object detection, introduced by DiffusionDet, is defined by two coupled properties: \(P1\) data\-independent random\-box initialization with a learned noise\-to\-data transport, and \(P2\) test\-time scaling \(TTS\), the ability to trade inference compute for accuracy at a fixed checkpoint by adjusting the number of proposals or refinement steps\. This paper asks: \\emph\{How can we preserve both properties with a minimal conceptual design?\} We dissect DiffusionDet component by component and find that, in our controlled interventions, the diffusion schedule, the initial noise distribution, and DDIM sampling stochasticity have only a small effect on inference results\. In contrast, detection performance is more sensitive to the denoising head, iterative refinement, and proposal coverage\. Based on these diagnostic results, we propose \\textbf\{LinearDet\}, a compact generative detection prototype: \\emph\{linear noising at training, linear denoising at inference\}\-\-\-no diffusion\-specific schedule, no diffusion ODE/SDE solver, only a symmetric pair of linear mixtures\. On COCO, LinearDet matches DiffusionDet under standard settings, is more robust under sparse proposal coverage, outperforms it in zero\-shot CrowdHuman transfer, and produces smoother refinement trajectories that admit clean heatmap visualization\. More broadly, we hope this diagnosis and compact prototype offer the object detection community a cleaner baseline for studying generative detection\.

## Rethinking Geometric Depth in Monocular 3D Object Detection: A Projection\-Consistent Reformulation

**Authors:** Zhihao Zhang; Abhinav Kumar; Huaizhi Qu; Tianlong Chen; Xiaoming Liu

**ID:** 152569 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S8aGdjePrD>) | [PDF](<https://openreview.net/pdf?id=S8aGdjePrD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152569>)

_Abstract unavailable from the accessible public sources._

## PRISM: Priority\-Guided Scanning in the Wavelet Domain for UAV Maritime Small Object Detection

**Authors:** Pengqi Gao; Fan Shi; Mianzhao Wang; Jiangpeng Zheng; Xu Cheng; Shengyong Chen

**ID:** 152844 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Pwl0o1ErZL>) | [PDF](<https://openreview.net/pdf?id=Pwl0o1ErZL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152844>)

_Abstract unavailable from the accessible public sources._

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

**ID:** 153726 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JF39l5WGlk>) | [PDF](<https://openreview.net/pdf?id=JF39l5WGlk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153726>)

_Abstract unavailable from the accessible public sources._

## DARE: Dual\-Level Adversarial Learning with Domain\-Aware Regularization for Whole Slide Image Classification

**Authors:** Yuxuan Jiang; Haichuan Dong; Manning Wang

**ID:** 154306 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Eh2LNe24lx>) | [PDF](<https://openreview.net/pdf?id=Eh2LNe24lx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154306>)

_Abstract unavailable from the accessible public sources._

## Beyond the Linear Separability Ceiling: Aligning Representations in VLMs

**Authors:** Enrico Vompa; Tanel Tammet; Mohit Vaishnav

**ID:** 156758 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/pdf?id=3uX4p80bN0>) | [PDF](<https://openreview.net/pdf?id=3uX4p80bN0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156758>)

_Abstract unavailable from the accessible public sources._

## Stabilizing Few\-Shot Object Detection with Language\-Conditioned Probabilistic Prototypes

**Authors:** Jiaying Wu; Yuchun Zhao; Lei Shi; Jia Luo; Dongmei Wei; Feifei Kou; Pengfei Zhang; Zhaoman Zhong

**ID:** 149495 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pi6vqZBaUT>) | [PDF](<https://openreview.net/pdf?id=pi6vqZBaUT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149495>)

Few\-shot object detection \(FSOD\) requires detectors to adapt to novel categories from only a few labeled instances, where prototype\-based transfer methods have become a strong and efficient paradigm\. However, we observe that such methods remain unstable in extreme low\-shot regimes\. We attribute this instability to two coupled factors: semantically unanchored query initialization, which yields high\-variance cold\-start optimization, and deterministic prototype matching, which over\-trusts noisy or occluded support regions\. To address these limitations, we propose Semantic Fine\-Grained Prototype Distillation \(SFPD\), a language\-conditioned probabilistic adaptation framework for prototype\-based FSOD\. SFPD introduces language\-conditioned feature queries to provide semantic anchors for novel\-class adaptation, uncertainty\-aware prototype distillation to down\-weight unreliable support evidence through heteroscedastic Gaussian modeling, and component\-guided part\-aware prototypes to refine fine\-grained semantic\-visual alignment\. These modules act during adaptation and preserve the original detector path at inference, introducing no additional inference FLOPs\. Experiments on PASCAL VOC and MS\-COCO show that SFPD consistently improves a strong FPD baseline, with especially clear gains in the most challenging low\-shot settings, e\.g\., a 3\.9\-point nAP50 improvement on VOC Split 2 under 1\-shot\. Further ablations, multi\-seed evaluation, and convergence analysis indicate that SFPD improves both accuracy and adaptation stability\.

## Dynamic Query as Budgeting for Tiny Object Detection

**Authors:** Yi Zhang; Di Xiong; Ge Gao; Xiangyue Zhang; yihang qiu; Yuxuan Zhou; Shuo Chen

**ID:** 154187 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FZOopPouyA>) | [PDF](<https://openreview.net/pdf?id=FZOopPouyA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154187>)

Recent DETR\-based tiny object detectors adopt dynamic\-query mechanisms to handle density imbalance\. However, existing designs entangle two effects: how many and which queries are decoded\. This entanglement obscures what actually drives the gains, thereby hindering principled dynamic\-query design; additional learned predictors or heuristic filtering steps also introduce extra overhead and inevitable decision errors, which can undermine practicality and final gains\. In this paper, we disentangle these effects and show that dynamic query primarily acts as budgeting\-\-\-allocating decoder query capacity according to object density\. Motivated by this view, we formulate a monotonic and conservative budgeting principle and propose a budgeting\-based DETR \(BUTR\), a streamlined framework that implements dynamic query by using a lightweight, training\-free budgeter to estimate an input\-dependent query budget $K\(x\)$ from encoder confidences\. BUTR applies standard Top\-$K\(x\)$ query initialization, removing heuristic filtering, learned components, and complex selection logic\. On AI\-TOD\-v2 and VisDrone, BUTR shows clearer density\-aligned query allocation behavior than prior dynamic\-query detectors and improves AP by more than 0\.5, while using about half as many queries with fewer parameters and GFLOPs, requiring over 2$\\times$ less training time, and delivering 4$\\times$ faster inference\. Additional COCO results further indicate its applicability across a broad spectrum of detection scenarios\.

## Active Learning via Classifier Impact and Greedy Selection for Interactive Image Retrieval

**Authors:** Leah Bar; Boaz Lerner; Nir Darshan; Rami Ben\-Ari

**ID:** 156770 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156770>)

Active Learning \(AL\) is a user\-interactive approach aimed at reducing annotation costs by selecting the most crucial examples to label\. Although AL has been extensively studied for image classification tasks, the specific scenario of interactive image retrieval has received relatively little attention\. This scenario presents unique characteristics, including an open\-set and class\-imbalanced binary classification, starting with very few labeled samples\. We introduce a novel batch\-mode Active Learning framework named GAL \(Greedy Active Learning\) that better copes with this application\. It incorporates new acquisition functions for sample selection that measure the impact of each unlabeled sample on the classifier\. We further embed this strategy in a greedy selection approach, better exploiting the samples within each batch\. We evaluate our framework with both linear \(SVM\) and non\-linear MLP/Gaussian Process classifiers\. For the Gaussian Process case, we show a theoretical guarantee on the greedy approximation\. Finally, we assess our performance for the interactive content\-based image retrieval task on several benchmarks and demonstrate its superiority over existing approaches and common baselines\.

## Concepts in Motion: Temporal Concept Bottleneck Model for Interpretable Video Classification

**Authors:** Patrick Knab; Sascha Marton; Philipp J Schubert; Drago A Guggiana Nilo; Christian Bartelt

**ID:** 151556\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151556

[Paper](<https://openreview.net/forum?id=Zj6ihufW1x>) | [PDF](<https://openreview.net/pdf?id=Zj6ihufW1x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151556>)

Concept Bottleneck Models \(CBMs\) enable interpretable image classification by structuring predictions around human\-understandable concepts, but extending this paradigm to video remains challenging due to the difficulty of extracting concepts and modeling them over time\.  In this paper, we introduce MoTIF \(Moving Temporal Interpretable Framework\), a transformer\-based concept architecture that operates on sequences of temporally grounded concept activations, by employing per\-concept temporal self\-attention to model when individual concepts recur and how their temporal patterns contribute to predictions\. Central to the framework is a class\-conditioned VLM\-based concept discovery module that extracts object\- and action\-centric textual concepts from training videos, yielding temporally expressive concept sets without manual concept annotation\. Across multiple video benchmarks, this combination improves over global concept bottlenecks and remains competitive within the interpretable concept\-bottleneck setting, while narrowing the gap to strong black\-box video baselines that we report as contextual references\.

## Do We Really Need Diffusion for Generative Object Detection? A Minimal Prototype Perspective

**Authors:** Yu Hong; Xiaosong Jia; Yihan Wang; Wenlong Liao; Tao He; Junchi Yan

**ID:** 153340\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153340

[Paper](<https://openreview.net/forum?id=M42HRdwz6B>) | [PDF](<https://openreview.net/pdf?id=M42HRdwz6B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153340>)

Generative object detection, introduced by DiffusionDet, is defined by two coupled properties: \(P1\) data\-independent random\-box initialization with a learned noise\-to\-data transport, and \(P2\) test\-time scaling \(TTS\), the ability to trade inference compute for accuracy at a fixed checkpoint by adjusting the number of proposals or refinement steps\. This paper asks: \\emph\{How can we preserve both properties with a minimal conceptual design?\} We dissect DiffusionDet component by component and find that, in our controlled interventions, the diffusion schedule, the initial noise distribution, and DDIM sampling stochasticity have only a small effect on inference results\. In contrast, detection performance is more sensitive to the denoising head, iterative refinement, and proposal coverage\. Based on these diagnostic results, we propose \\textbf\{LinearDet\}, a compact generative detection prototype: \\emph\{linear noising at training, linear denoising at inference\}\-\-\-no diffusion\-specific schedule, no diffusion ODE/SDE solver, only a symmetric pair of linear mixtures\. On COCO, LinearDet matches DiffusionDet under standard settings, is more robust under sparse proposal coverage, outperforms it in zero\-shot CrowdHuman transfer, and produces smoother refinement trajectories that admit clean heatmap visualization\. More broadly, we hope this diagnosis and compact prototype offer the object detection community a cleaner baseline for studying generative detection\.

## TTVidT: Decoupling the Temporal Axis for Efficient Motion\-Centric Video Pretraining

**Authors:** Shih\-Ying Yeh; Daniel Z Kaplan; Xuehai Wang; Fu\-En Yang; Min\-Hung Chen; Shang\-Hong Lai

**ID:** 154339\-\-4 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154339

[Paper](<https://openreview.net/forum?id=ELiMecKQps>) | [PDF](<https://openreview.net/pdf?id=ELiMecKQps>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154339>)

Comparisons in video self\-supervised learning often evaluate complete training recipes rather than isolating the method itself: architecture, objective, data exposure, schedule, scale, and decoder capacity can all vary at once\. This makes it hard to identify which choices yield motion\-prioritized representations, whose gains concentrate on frame\-to\-frame change while retaining useful appearance\. We address this with a matched $4 \\times 6 = 24$ architecture\-\-objective study at roughly 170M\-\-190M encoder scale on $\\sim$1\.7M OpenVid and Moments\-in\-Time v2 clips for 8 epochs, and propose TT\-VidT\. TT\-VidT combines a DINOv3\-initialized ViT\-B/16 per\-frame spatial path with a compact Temporal Transfer Layer, trained by Diff Compression to reconstruct target frames from a first\-frame appearance anchor and frame\-specific motion tokens\. The sweep shows that TT3D with Diff Compression, not either component alone, enters the strongest motion\-sensitive regime, and decoder ablations favor a compact video\-pretrained decoder\. In final comparison, TT\-VidT leads Jester, Something\-\-Something\\,V2, ARID, and Diving48 fine\-tuning simultaneously, improving over the strongest non\-TT row by 54\\%\-\-121\\%, while using 48\\% fewer encoder FLOPs than DisMo and 55\\% fewer than VideoMAE or V\-JEPA\~2\. HMDB51, IARD, and EPIC\-Kitchens bound the claim\.

## AWP: Activation\-based Window Pruning for Gigapixel Object Detection

**Authors:** Xiang Li; Wenxi Li; Yuetong Wang; Chen Zhang; Chenyang Lyu; Haozhe Lin; Fan Zhang; guiguang ding; Yuchen Guo

**ID:** 151192\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151192

[Paper](<https://openreview.net/forum?id=cGbkslrrsi>) | [PDF](<https://openreview.net/pdf?id=cGbkslrrsi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151192>)

Gigapixel object detection in High\-Resolution Wide \(HRW\) images faces extreme spatial sparsity where targets often occupy less than 5% of the image area while computation is wasted on vast uninformative regions\. Existing token selection methods require either complex evolutionary search or training additional learnable modules\. We present AWP \(Activation\-based Window Pruning\), which discovers that the mean of Feed\-Forward Network \(FFN\) activations naturally encodes window importance, enabling parameter\-free selection without additional modules\. Leveraging this intrinsic signal, AWP performs window pruning with remarkable effectiveness\.  On the PANDA gigapixel dataset, AWP outperforms the previous state\-of\-the\-art by \+1\.6% AP₅₀ with 26\.2% FLOPs reduction, particularly excelling on small objects \(\+5\.1% APₛ\)\. When applied to Swin Transformer, AWP demonstrates strong generalization, retaining 97\.4% of baseline performance with 50% windows pruned\. Remarkably, AWP enables zero\-shot application by directly replacing learned selection modules, improving baseline by \+0\.6% AP₅₀ without retraining\. Our work reveals that window\-based vision transformers inherently encode spatial importance through FFN activations, offering a simple yet powerful alternative to existing selection mechanisms, especially for High\-Resolution Wide images\.

## Surjective Pseudo\-Invertible Neural Networks

**Authors:** Yamit Ehrlich; Amit Arad; Nimrod Berman; Assaf Shocher

**ID:** 148844\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148844

[Paper](<https://openreview.net/forum?id=uiqGz0UDET>) | [PDF](<https://openreview.net/pdf?id=uiqGz0UDET>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148844>)

The Moore\-Penrose Pseudo\-inverse \(PInv\) is the fundamental tool for inverting linear operators\. We propose a natural generalization to the non\-linear regime and introduce \{Surjective Pseudo\-invertible Neural Networks \(SPNN\)\}: architectures that admit a tractable non\-linear PInv by construction and satisfy the corresponding geometric properties\. Building on this, we formalize \{Non\-Linear Back\-Projection \(NLBP\)\}, the non\-linear analogue of $x' = x \+ A^\\dagger\(y\-Ax\)$: an update that projects any sample to its closest state consistent with $f\(x\)=y$\. Diffusion\-based null\-space projection revolutionized zero\-shot solving of linear inverse problems via closed\-form back\-projection; NLBP extends this paradigm to non\-linear learned \`\`degradations'' in the broad sense, spanning semantic mappings such as classification and object detection\. The result is zero\-shot inversion of complex degradations and precise semantic control over generative outputs without retraining the prior\.

## OFBD: Object\-Focused Background Debiasing for Long\-Tailed Learning

**Authors:** Shenghan Chen; Yiming Liu; Zhipeng Deng; Haolin Wang; Jiale Zhou; Zhijian Wu; Lu Xiankai; yafei ou; Yefeng Zheng

**ID:** 152979\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152979

[Paper](<https://openreview.net/forum?id=OuD9gP9e2o>) | [PDF](<https://openreview.net/pdf?id=OuD9gP9e2o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152979>)

_Abstract unavailable from the accessible public sources._

## Simplified Reversible Residual Networks

**Authors:** Erland Brandser Olsson; Zhirong Yang

**ID:** 148514\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148514

[Paper](<https://openreview.net/forum?id=xJJVBYKgl8>) | [PDF](<https://openreview.net/pdf?id=xJJVBYKgl8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148514>)

The de facto standard way of training neural networks requires storing activations at each layer to memory, in order to compute gradients in backpropagation\. As progress has often been made by stacking larger and more layers, memory consumption has now become a major bottleneck for making frontier models available to everyone\. In this work, we take advantage of the Residual Network \(ResNet\) layer formulation that is now used in many state\-of\-the\-art neural network architectures to recompute the activations at each layer on\-the\-fly during backpropagation instead of storing them in memory\. We propose a modification to Reversible Residual Network \(RevNet\) that overcomes its limitation of requiring to replace the ResNet layer network function with two new network functions, by setting either one to an identity function\. This modification is simple yet has a significant advantage because now there is no need to change the original ResNet architecture\. Our method can work as a drop\-in replacement for layers with residual connections such as in ordinary ResNets or Transformers with practically no loss in performance while offering significant reductions in memory consumption\. With this simple modification, we are able to maintain the same computational cost and ease of use as activation checkpointing, which requires no architectural changes, while leveraging a reversible procedure such that we only need to store the activations from the last layer\. The method is called Simplified RevNet, and compared to previous work in reversible architectures, we here propose a simpler and more streamlined approach that comes in two variants based on which of $F$ or $G$ in RevNet becomes an identity function\. Empirically, we demonstrate performance at practically the same level as the non\-reversible counterparts on ImageNet image classification with ResNets and on OpenWebText language modeling with Transformers\.

## COMPOSE: Hypergraph Cover Optimization for Multi\-view 3D Human Pose Estimation

**Authors:** Tony Danjun Wang; Tolga Birdal; Nassir Navab; Lennart Bastian

**ID:** 150956\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150956

[Paper](<https://openreview.net/forum?id=e20UHiy3l3>) | [PDF](<https://openreview.net/pdf?id=e20UHiy3l3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150956>)

3D human pose estimation from sparse multi\-view camera rigs is an essential task for numerous applications, including action recognition, sports analysis, and human\-robot interaction\. While learned methods dominate the field on benchmarks, they require large annotated datasets; training\-free optimization\-based methods remain promising as they circumvent 3D supervision by solving a correspondence problem across views from 2D detections\. Existing combinatorial formulations rely on pairwise associations to model this correspondence problem and enforce global consistency across views only as a downstream constraint\. However, reconciling locally plausible pairwise matches becomes brittle under occlusion and noisy detections, where local errors propagate globally\. We propose COMPOSE, which recasts multi\-view 3D human pose estimation as a weighted exact\-cover optimization over a hypergraph of person hypotheses\. Our formulation replaces pairwise association and post\-hoc consistency enforcement with a single global combinatorial objective\. To address the exponentially large candidate space, we introduce a geometric pruning strategy alongside two complementary solvers: an exact Integer Linear Programming formulation and a scalable relaxation via Belief Propagation\. Without any 3D supervision, COMPOSE improves average precision by up to 31 points over the best optimization\-based method and 13 points over self\-supervised learned methods, demonstrating the effectiveness of higher\-order combinatorial association for training\-free multi\-view 3D human pose estimation\.

## Class\-Incremental Learning via LoRA\-based Elastic Ensemble of Experts

**Authors:** Ruilong Yu; Fei Ye; Zhiyuan Ren; Qihe Liu; Adrian G\. Bors; Rongyao Hu; shijie zhou

**ID:** 155401\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155401

[Paper](<https://openreview.net/forum?id=5v1mhJ0DnN>) | [PDF](<https://openreview.net/pdf?id=5v1mhJ0DnN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155401>)

_Abstract unavailable from the accessible public sources._

## Reasoning\-Aware Relational Representation Learning for Open\-Vocabulary Scene Graph Generation

**Authors:** Jiawei Xiao; Boya Wang; Longtian Qiu; Shan Ning; Xuming He

**ID:** 155063\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155063

[Paper](<https://openreview.net/forum?id=8kAKJfrIKh>) | [PDF](<https://openreview.net/pdf?id=8kAKJfrIKh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155063>)

Open\-Vocabulary Scene Graph Generation \(OV\-SGG\) requires models to recognize visual relationships beyond the training vocabulary, yet existing methods often rely on dataset\-specific object\-\-predicate co\-occurrence patterns\. Under long\-tailed distributions and noisy object localization, such reliance leads to biased, entangled relation representations, limiting both rare\-relation recognition and generalization to unseen predicates\.To address these challenges, we propose RaRe, a reasoning\-aware relational representation learning framework that transforms MLLM\-generated chain\-of\-thought \(CoT\) rationales into structured relation embeddings\. Rather than using CoT only as an intermediate reasoning trace for final prediction, RaRe directly optimizes the rationale\-derived representation space to improve inter\-relation discriminability\. Specifically, RaRe first aligns rationale embeddings with textualized relation descriptions through self\-supervised contrastive learning, and then refines rationale generation with a specificity\-oriented reinforcement learning objective that encourages semantically distinctive relational evidence\.Experiments on Visual Genome demonstrate that RaRe improves category\-balanced recognition across both base and novel predicates, with particularly strong gains under the SGDet setting where detection noise is prevalent\.

## Structure\-Guided Masked Autoencoders for Ultra\-High Resolution Scientific Image Understanding

**Authors:** Enzhi Zhang; Du Wu; Rui Zhong; Cong Ma; Isaac Lyngaas; Amir K Ziabari; Xiao Wang; Peng Chen; Tao Luo; Toshio Endo; Fumiyoshi Shoji; Kento Sato; Kentaro Uesugi; Takayuki Nonoyama; Ryuji Kiyama; Masahiro Yoshida; Tezuka Masaru; Tetsuya Ishikawa; Satoshi Matsuoka; Masaharu Munetomo; Mohamed Wahib

**ID:** 150156\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150156

[Paper](<https://openreview.net/forum?id=kFIwMrx78r>) | [PDF](<https://openreview.net/pdf?id=kFIwMrx78r>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150156>)

Self\-supervised pre\-training with Vision Transformers, including Masked Autoencoders \(MAE\), is difficult to apply to gigapixel scientific images\. Random masking is poorly matched to the structured, multi\-scale morphology of scientific data, while uniform tokenization produces prohibitively long sequences that make $O\(N^2\)$ attention impractical\. We propose \\method\{\}, a structure\-guided masked autoencoding framework for ultra\-high\-resolution scientific images\. \\method\{\} couples two components: a content\-adaptive quadtree tokenizer that compresses gigapixel images into a fixed\-length sequence, and a structure\-conditioned masking process that biases reconstruction toward spatially informative regions\. To stabilize this process across scales, we introduce Damped Accumulation \(DA\), which aggregates signal\-dependent responses across the tree into a structure canvas used to guide masking\. The resulting pre\-training task preserves fine microstructure while remaining compatible with standard ViT encoders and MAE\-style reconstruction\. Across electron microscopy, whole\-slide optical microscopy, and X\-ray CT datasets, \\method\{\} consistently outperforms MAE baselines\. It achieves 95\.68\\% Dice on the 8K$\{\\times\}$8K$\{\\times\}$28K SpringXCT dataset, improving over the strongest MAE baseline by \+9\.70 points, and 83\.21\\% Dice on the $32\\text\{K\}^2$ WSI PAIP dataset, improving by \+16\.84 points, while providing up to a $24\.8\\times$ inference speedup

## $\\texttt\{bispectrum\}$: Selective $G$\-Bispectra Made Practical

**Authors:** Johan Mathe; Adele Lantow; Simon Mataigne; Nina Miolane

**ID:** 148783 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v6QHAQkjiQ>) | [PDF](<https://openreview.net/pdf?id=v6QHAQkjiQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148783>)

Many machine learning tasks are invariant under the action of a group $G$ of transformations: signal classification can be invariant under translations, image classification under 2D rotations, and spherical\-image classification under 3D rotations\. The $G$\-bispectrum is a principled complete invariant of a signal \)retaining all signal's information up to the group action\) with proven benefits in machine learning and as a pooling layer in deep networks\. However, its deployment has been hampered by high computational cost and a patchwork of group\-specific implementations\. We present bispectrum, an open\-source, fully unit\-tested PyTorch library that implements selective $G$\-bispectra for seven different group actions, as differentiable modules that can be directly incorporated into machine learning pipelines and deep learning architectures\. For finite groups $G$, selectivity reduces the computational cost from $O\(\|G\|^2\)$ to $O\(\|G\|\)$\. For planar rotations, we leverage the disk bispectrum\. For spherical 3D rotations, we introduce an augmented selective bispectrum at band\-limit $L$ which reduces the cost from $O\(L^3\)$ to $\\Theta\(L^2\)$ coefficients\. We profile the entire library \(for

## TailCon: Mitigating Tail Signal Erosion through Memory Consolidation for Long\-Tailed Recognition

**Authors:** Yuan Dong; Di Wu; Zhe Zhao; Liheng Yu; Xiaofeng Cao; Pengkun Wang; Yang Wang

**ID:** 155753 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3CZgBtaFyo>) | [PDF](<https://openreview.net/pdf?id=3CZgBtaFyo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155753>)

Long\-tailed recognition remains challenging not only because rare classes provide limited supervision, but also because their evidence is difficult to accumulate during standard stochastic training\. We characterize this failure as tail signal erosion: in conflict\-dominant regimes, frequent\-class updates can dilute sparse rare\-class signals before they are sufficiently reinforced\. To address this issue, we propose TailCon, a memory consolidation framework that separates rare\-evidence acquisition from parametric integration\. During online acquisition, TailCon stores uncertain or rare representations in detached episodic memory, while a parametric prediction pathway learns global decision structure\. To avoid relying only on test\-time retrieval, TailCon introduces FOCUS, a periodic consolidation stage that distills stored memory evidence into the parametric prediction head through a low\-capacity alignment surrogate\. We provide a local optimization analysis that scopes when this separation is beneficial in sparse\-recurrence, conflict\-dominant regimes\. Experiments on CIFAR\-100\-LT, CIFAR\-10\-LT, ImageNet\-LT, and iNaturalist 2018 show consistent improvements over representative rebalancing, decoupled, expert\-based, and prototype\-oriented baselines under the evaluated protocols\. Memory\-disabled inference further shows that part of the stored evidence is transferred into the parametric prediction head rather than remaining only in the retrieval branch\. An anonymized implementation is included in the Supplementary Material\.

## Handwritten Text Recognition Lives in the High\-Pixel Variance Subspace

**Authors:** Carlos Garrido; Jorge Calvo\-Zaragoza

**ID:** 153384 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LmcUzl4xPg>) | [PDF](<https://openreview.net/pdf?id=LmcUzl4xPg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153384>)

In self\-supervised pretraining for Handwritten Text Recognition \(HTR\), pixel reconstruction methods tend to outperform contrastive ones, a pattern that sits awkwardly with recent evidence that pixel reconstruction yields uninformative features for natural\-image classification\. We argue this discrepancy is not an accident, but a consequence of how HTR signal is distributed in pixel space\. By probing the input distribution directly, we show that HTR's discriminative content is concentrated in the high\-variance pixel subspace and is essentially absent from the low\-variance one, the inverse of the structure observed for image classification\. Under this view, the right SSL family becomes predictable: objectives that preserve high\-variance pixel content should transfer best\. We test this prediction across six SSL methods spanning three families \(pixel\-grounded MIM, JEPA\-style, contrastive image\-\-image and image\-\-text\), under matched encoder, data, and evaluation protocols on six handwriting benchmarks across five languages\. Pixel\-grounded SSL produces the lowest CER on every benchmark and every probe, exposes per\-position character information that other families recover only via the readout, and is the only family that benefits from real\-data pretraining\. A geometric property of the encoder, its alignment with the high\-variance pixel subspace, predicts CER within every SSL method we test\. With a pretrained LLM decoder, a frozen pixel\-grounded encoder is already competitive with fully fine\-tuned supervised baselines, and full fine\-tuning beats them on the mean and ranks first or second on every benchmark\. These results challenge the prevailing view that pixel reconstruction wastes capacity on irrelevant detail: whether reconstruction is wasted depends on where the discriminative signal lives in the input\.

## Rethinking Geometric Depth in Monocular 3D Object Detection: A Projection\-Consistent Reformulation

**Authors:** Zhihao Zhang; Abhinav Kumar; Huaizhi Qu; Tianlong Chen; Xiaoming Liu

**ID:** 152569\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152569

[Paper](<https://openreview.net/forum?id=S8aGdjePrD>) | [PDF](<https://openreview.net/pdf?id=S8aGdjePrD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152569>)

_Abstract unavailable from the accessible public sources._

## PRISM: Priority\-Guided Scanning in the Wavelet Domain for UAV Maritime Small Object Detection

**Authors:** Pengqi Gao; Fan Shi; Mianzhao Wang; Jiangpeng Zheng; Xu Cheng; Shengyong Chen

**ID:** 152844\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152844

[Paper](<https://openreview.net/forum?id=Pwl0o1ErZL>) | [PDF](<https://openreview.net/pdf?id=Pwl0o1ErZL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152844>)

_Abstract unavailable from the accessible public sources._

## Active Learning via Classifier Impact and Greedy Selection for Interactive Image Retrieval

**Authors:** Leah Bar; Boaz Lerner; Nir Darshan; Rami Ben\-Ari

**ID:** 156770\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

**Repeated source row:** 156770

[Official poster](<https://neurips.cc/virtual/2026/poster/156770>)

Active Learning \(AL\) is a user\-interactive approach aimed at reducing annotation costs by selecting the most crucial examples to label\. Although AL has been extensively studied for image classification tasks, the specific scenario of interactive image retrieval has received relatively little attention\. This scenario presents unique characteristics, including an open\-set and class\-imbalanced binary classification, starting with very few labeled samples\. We introduce a novel batch\-mode Active Learning framework named GAL \(Greedy Active Learning\) that better copes with this application\. It incorporates new acquisition functions for sample selection that measure the impact of each unlabeled sample on the classifier\. We further embed this strategy in a greedy selection approach, better exploiting the samples within each batch\. We evaluate our framework with both linear \(SVM\) and non\-linear MLP/Gaussian Process classifiers\. For the Gaussian Process case, we show a theoretical guarantee on the greedy approximation\. Finally, we assess our performance for the interactive content\-based image retrieval task on several benchmarks and demonstrate its superiority over existing approaches and common baselines\.

## Concepts in Motion: Temporal Concept Bottleneck Model for Interpretable Video Classification

**Authors:** Patrick Knab; Sascha Marton; Philipp J Schubert; Drago A Guggiana Nilo; Christian Bartelt

**ID:** 151556\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151556

[Paper](<https://openreview.net/forum?id=Zj6ihufW1x>) | [PDF](<https://openreview.net/pdf?id=Zj6ihufW1x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151556>)

Concept Bottleneck Models \(CBMs\) enable interpretable image classification by structuring predictions around human\-understandable concepts, but extending this paradigm to video remains challenging due to the difficulty of extracting concepts and modeling them over time\.  In this paper, we introduce MoTIF \(Moving Temporal Interpretable Framework\), a transformer\-based concept architecture that operates on sequences of temporally grounded concept activations, by employing per\-concept temporal self\-attention to model when individual concepts recur and how their temporal patterns contribute to predictions\. Central to the framework is a class\-conditioned VLM\-based concept discovery module that extracts object\- and action\-centric textual concepts from training videos, yielding temporally expressive concept sets without manual concept annotation\. Across multiple video benchmarks, this combination improves over global concept bottlenecks and remains competitive within the interpretable concept\-bottleneck setting, while narrowing the gap to strong black\-box video baselines that we report as contextual references\.

## MLLM Makes Strong Backbone for Multi\-Modal Object Detection

**Authors:** Yifeng Yang; Yutong Li; Jubo Feng; Qinying Gu; Cewu Lu; Guang\-Zhong Yang; Xinbing Wang; Nanyang Ye

**ID:** 148801\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148801

[Paper](<https://openreview.net/forum?id=v1agOOP2QN>) | [PDF](<https://openreview.net/pdf?id=v1agOOP2QN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148801>)

Multimodal large language models \(MLLMs\) provide a promising alternative by taking object detection as a sequence generation task\. However, applying MLLMs to multimodal object detection poses challenges in visual cross\-modal \(RGB\-Infrared\) fusion and coordinate prediction under Cross\-Entropy supervision\.  In this paper, we propose a novel MLLM\-based object detection framework that addresses these challenges through improving visual cross\-modal token alignment and coordinate generation\. Specifically, we formulate RGB\-IR fusion as pre\-decoding token\-space modality routing, implemented by the Cross\-Modal Complementary Adapters and the Visual Token\-wise Router\. We further reformulate coordinate\-token learning as scale\-adaptive neighborhood likelihood maximization through our proposed Geometry\-Aware Loss, bridging discrete token prediction and continuous geometric localization\. Extensive experiments show that our method achieves state\-of\-the\-art performance, reaching 67\.81\\% mAP@0\.5 under in\-distribution scenarios, outperforming existing baselines by over 8\\%, while also exhibiting strong generalization to out\-of\-distribution and referring object detection tasks\.

## Manifold Embedding of Deep Image Features for Image Matching via Neural Adjoint Maps

**Authors:** Nafie El Amrani; Moritz Heep; Florian Bernard

**ID:** 149523\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149523

[Paper](<https://openreview.net/forum?id=pVexlKkL27>) | [PDF](<https://openreview.net/pdf?id=pVexlKkL27>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149523>)

_Abstract unavailable from the accessible public sources._

## ProAlign: Progressive Positional and Prototype\-Guided Alignment for Aerial\-Ground Person Re\-Identification

**Authors:** Qiao Li; Jing Chen; Cong Wu; Kun He; Ruiying Du; Shuwei Li

**ID:** 151763\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151763

[Paper](<https://openreview.net/forum?id=YEBICnUue3>) | [PDF](<https://openreview.net/pdf?id=YEBICnUue3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151763>)

Aerial\-Ground Person Re\-Identification \(AG\-ReID\) aims to match pedestrian images captured by unmanned aerial vehicles \(UAVs\) and ground\-based surveillance cameras\. The task remains highly challenging due to severe viewpoint discrepancies, frequent occlusions, and substantial domain gaps between aerial and ground imagery\. Beyond these observable factors, existing methods often overlook two fundamental structural issues: cumulative positional drift during hierarchical feature extraction and semantic inconsistency across cross\-view feature distributions\. To address these challenges, we propose ProAlign, a Progressive Positional and Prototype\-Guided Alignment Network for AG\-ReID\. ProAlign comprises two key components: a Layer\-wise Progressive Positional Embedding \(LPPE\) module and a View\-Aware Prototype Contrastive Learning \(PCL\) module\. LPPE performs adaptive positional calibration throughout transformer layers by employing conditional positional encoding in shallow layers to mitigate local spatial distortions, while introducing learnable static positional embeddings in deeper layers to reinforce global semantic priors\. Meanwhile, PCL maintains view\-specific aerial and ground prototypes for each identity and enforces cross\-view semantic consistency via a dual\-prototype contrastive objective\. Extensive experiments on the challenging CARGO benchmark demonstrate the effectiveness of ProAlign\. In the aerial\-ground setting, ProAlign surpasses previous state\-of\-the\-art methods by 13\.89% mAP and 9\.39% Rank\-1 accuracy\.

## Post\-hoc Selective Classification for Reliable Synthetic Image Detection

**Authors:** Kaixiang Zheng; Jacob Seidman

**ID:** 151954\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151954

[Paper](<https://openreview.net/forum?id=WYncw2up3x>) | [PDF](<https://openreview.net/pdf?id=WYncw2up3x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151954>)

As synthetic images become increasingly realistic, reliable synthetic image detection techniques are of pressing need to prevent their misuse\. Despite satisfactory in\-distribution performance, deep neural network\-based synthetic image detectors \(SIDs\) lack reliability in deployment and often fail in the presence of common covariate shifts, resulting in poor detection accuracy\. To avoid the risk caused by potential errors, we adopt a selective classification \(SC\) strategy by allowing SIDs to abstain from making low confidence predictions\. For practicality, we focus on post\-hoc methods which perform confidence estimation on a given SID without retraining\. However, we show that conventional logit\-based confidence score functions \(CSFs\) exhibit pathological behavior under covariate shifts, leading to SC performance close to or even worse than random guessing\. To address this, we propose a simple yet effective SC framework for \*\*Re\*\*liable \*\*S\*\*ynthetic \*\*I\*\*mage \*\*De\*\*tection \(ReSIDe\)\. First, we generalize the notion of logits to an SID's intermediate layers from a centroid matching perspective, extending the use of logit\-based CSFs to any layer of an SID\. Then, we introduce a preference optimization algorithm that aggregates confidence scores extracted from different layers to a final confidence estimate by minimizing an upper bound of the area under the risk\-coverage curve \(AURC\)\. Extensive experimental results show that ReSIDe significantly boosts the SC performance of various logit\-based CSFs under common covariate shifts, achieving up to 69\.55% AURC reduction\.

## Reviving the Discarded High\-Resolution Feature for Transformer\-Based Tiny Object Detection

**Authors:** Zehao Wang; Si Wu; GUIPING CAO; Xin Li; Yaowei Wang

**ID:** 151129\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151129

[Paper](<https://openreview.net/forum?id=cmZXkyWcad>) | [PDF](<https://openreview.net/pdf?id=cmZXkyWcad>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151129>)

Tiny object detection remains challenging because tiny instances occupy only a few pixels, and their fine\-grained details are easily lost during feature downsampling\. Although the highest\-resolution feature preserves rich local details for tiny objects, DETR\-like detectors often discard it due to its large computational cost, while directly reintroducing this feature also brings dense background noise\. To address this problem, we propose \\textbf\{ReDHF\}, a novel framework that \\textbf\{Re\}vives the \\textbf\{D\}iscarded \\textbf\{H\}igh\-resolution \\textbf\{F\}eature for tiny object detection\. ReDHF has three cooperative components\. Cross\-Scale Deformable Fusion \(CSDF\) first constructs a semantically enhanced highest\-resolution feature and injects its fine\-grained details into the shallow feature under a moderate cost\. Ellipse\-Guided Shallow Supervision \(EGSS\) then guides the enhanced feature to learn more reliable classification and localization priors by applying geometry\-adaptive auxiliary supervision\. Full\-Scale Query Interaction \(FSQI\) further enables decoder queries to access both low\-level details and high\-level semantic information, allowing them to aggregate richer cues for tiny objects\. Extensive experiments show that ReDHF consistently improves multiple baselines across different DETR variants and achieves state\-of\-the\-art performance on the evaluated benchmarks\. The best ReDHF variants surpass their baselines by \\textbf\{\+1\.4 AP\} on AI\-TOD\-v2, \\textbf\{\+1\.6 AP\} on VisDrone, and \\textbf\{\+1\.5 AP\} on SODA\-D, with especially notable gains on tiny and small objects\.

## Rare\-Class Signal Suppression in Long\-Tailed Multi\-Expert Fine\-Tuning

**Authors:** Zhiheng Gong; YuHeng Yang; Pengkun Wang; Yang Wang

**ID:** 150905\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150905

[Paper](<https://openreview.net/forum?id=eXqF5uD4aN>) | [PDF](<https://openreview.net/pdf?id=eXqF5uD4aN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150905>)

Multi\-expert ensemble frameworks have achieved strong performance on long\-tailed visual recognition by training heterogeneous expert heads on a shared backbone, but their gradient coordination strategies are inherited from balanced multi\-task learning, where resolving directional conflict is the canonical challenge\. We show that head\-class bias acts sequentially across three pipeline interfaces, namely loss geometry, gradient coordination, and inference fusion, forming a suppression cascade in which rare\-class gradient energy can be erased before it influences model parameters, a failure mode that direction\-focused analysis cannot detect\. A controlled study reveals that direction\-modifying and simple\-aggregation solvers are statistically equivalent once rare\-class source signal is amplified, while energy\-balancing objectives erase this amplification entirely\. To break this cascade, we propose Gale \(Gradient\-energy Allocation for Long\-tail Ensembles\), a framework that applies gradient\-energy allocation at every cascade stage, amplifying tail\-class source signal through frequency\-calibrated loss geometry, preserving it through a non\-penalizing coordination rule, and routing predictions through class\-specific expert competence\. On CIFAR\-100\-LT \(ρ=100\), Gale achieves 59\.2% overall accuracy and 46\.1% few\-class accuracy across four seeds \(σ=0\.23%\), surpassing the prior best by \+6\.2%, with consistent improvements on ImageNet\-LT and iNaturalist 2018\. Code is available at Supplementary Material\.

## Playing ZendoWorld: Challenging AI Agents on Active Visual Concept Induction

**Authors:** Sophia Koehler; Antonia Wüst; Inga Ibs; Top Piriyakulkij; Wolfgang Stammer; Constantin Rothkopf; Kevin Ellis; Kristian Kersting

**ID:** 154712\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154712

[Paper](<https://openreview.net/forum?id=BZmvSJeoow>) | [PDF](<https://openreview.net/pdf?id=BZmvSJeoow>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154712>)

A central challenge in building intelligent systems is enabling agents to jointly perceive complex inputs, form hypotheses about hidden patterns, and design informative experiments to test them\. To study this problem, we propose ZendoWorld, a controlled interactive environment in which agents must infer a logical rule about visual game observations, acquire information by proposing new scenes, and refine their hypotheses based on feedback from the game environment\. We evaluate several agents spanning pure VLM reasoning, Bayesian particle filtering, dynamic concept discovery, and neuro‑symbolic methods\. Our main findings are: \(1\) high accuracy in predicting labels for observed examples does not imply recovery of the underlying rule; \(2\) perception and induction are distinct bottlenecks for different agent classes; and \(3\) VLM‑based agents propose near‑uninformative experiments, failing to actively reduce hypothesis uncertainty\. To compare these results, we collect human data on the task, which reveals a gap in inductive reasoning, particularly for more complex rules\. Overall, ZendoWorld takes an important step toward evaluating intelligent agents and identifies concrete avenues for improvement, particularly in domains like scientific discovery\.

## MLLM Makes Strong Backbone for Multi\-Modal Object Detection

**Authors:** Yifeng Yang; Yutong Li; Jubo Feng; Qinying Gu; Cewu Lu; Guang\-Zhong Yang; Xinbing Wang; Nanyang Ye

**ID:** 148801\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148801

[Paper](<https://openreview.net/forum?id=v1agOOP2QN>) | [PDF](<https://openreview.net/pdf?id=v1agOOP2QN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148801>)

Multimodal large language models \(MLLMs\) provide a promising alternative by taking object detection as a sequence generation task\. However, applying MLLMs to multimodal object detection poses challenges in visual cross\-modal \(RGB\-Infrared\) fusion and coordinate prediction under Cross\-Entropy supervision\.  In this paper, we propose a novel MLLM\-based object detection framework that addresses these challenges through improving visual cross\-modal token alignment and coordinate generation\. Specifically, we formulate RGB\-IR fusion as pre\-decoding token\-space modality routing, implemented by the Cross\-Modal Complementary Adapters and the Visual Token\-wise Router\. We further reformulate coordinate\-token learning as scale\-adaptive neighborhood likelihood maximization through our proposed Geometry\-Aware Loss, bridging discrete token prediction and continuous geometric localization\. Extensive experiments show that our method achieves state\-of\-the\-art performance, reaching 67\.81\\% mAP@0\.5 under in\-distribution scenarios, outperforming existing baselines by over 8\\%, while also exhibiting strong generalization to out\-of\-distribution and referring object detection tasks\.

## PHOEBI: An Open\-World Benchmark for Multi\-Label Bacterial Identification in Phase\-Contrast Microscopy

**Authors:** Aaditya Baranwal; Md Jahid Hasan; Shruti Vyas

**ID:** 139754 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6cpui5CQW9>) | [PDF](<https://openreview.net/pdf?id=6cpui5CQW9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139754>)

_Abstract unavailable from the accessible public sources._

